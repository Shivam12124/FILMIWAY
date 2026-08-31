// components/SensitiveContentTimelineSection.js
import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, Clock, AlertOctagon, Info, Film, FastForward, Eye, Heart, AlertTriangle, ThumbsUp, ThumbsDown, MessageSquare, Flame, Play, Timer, ExternalLink } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import masterTimestamps from '../utils/masterTimestamps.json';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// 🎬 WATCH-ALONG TIMER — loaded only when user opens it
const WatchAlongTimer = dynamic(() => import('./WatchAlongTimer'), { ssr: false });

const COLORS = {
    warningBg: 'rgba(127, 29, 29, 0.15)',
    warningBorder: 'rgba(248, 113, 113, 0.2)',
    textPrimary: '#FFFFFF',
    textSecondary: '#D1D5DB',
    accent: '#F87171',
    safeBg: 'rgba(6, 95, 70, 0.2)',
    safeBorder: 'rgba(52, 211, 153, 0.2)',
};

// 🔥 HELPER FUNCTIONS FOR VISUAL TIMELINE MAP
const parseRuntimeToSeconds = (runtimeStr) => {
    if (!runtimeStr) return 7200;
    let totalMins = 0;
    const hourMatch = runtimeStr.match(/(\d+)\s*(?:hour|h)/i);
    const minMatch = runtimeStr.match(/(\d+)\s*(?:min|m)/i);

    if (hourMatch || minMatch) {
        if (hourMatch) totalMins += parseInt(hourMatch[1], 10) * 60;
        if (minMatch) totalMins += parseInt(minMatch[1], 10);
    } else {
        const numMatch = runtimeStr.match(/(\d+)/);
        if (numMatch) totalMins += parseInt(numMatch[1], 10);
    }
    return totalMins > 0 ? totalMins * 60 : 7200;
};

const parseTimestampToSeconds = (t) => {
    if (!t) return 0;
    const parts = t.split(':').map(Number);
    if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
    if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
    return 0;
};

const getMarkerColorHex = (severity) => {
    const s = (severity || '').toLowerCase();
    if (s === 'extreme' || s === 'severe') return '#ef4444'; // Red-500
    if (s === 'high') return '#f97316'; // Orange-500
    if (s === 'moderate') return '#eab308'; // Yellow-500
    if (s === 'mild') return '#10b981'; // Emerald-500
    return '#6b7280'; // Gray-500
};

// 🔥 SMART TIMELINE CONSOLIDATOR (Merged Scenes for Gap <= 15s)
const consolidateTimelineScenes = (scenes, gapThreshold = 15) => {
    if (!scenes || scenes.length === 0) return [];

    const severityRank = { 'Mild': 1, 'Moderate': 2, 'High': 3, 'Extreme': 4, 'Severe': 4 };
    const getSeverityRank = (s) => severityRank[s] || 0;
    const getSeverityFromRank = (r) => Object.keys(severityRank).find(k => severityRank[k] === r) || 'Moderate';

    // Sort by start time
    const sorted = [...scenes].map(s => {
        const startSec = parseTimestampToSeconds(s.start || s.timestamp || '');
        const endSec = parseTimestampToSeconds(s.end || s.endTimestamp || '') || (startSec + 120);
        return { ...s, startSec, endSec };
    }).sort((a, b) => a.startSec - b.startSec);

    const merged = [];
    let current = null;

    for (const scene of sorted) {
        if (!current) {
            current = { ...scene };
            continue;
        }

        const gap = scene.startSec - current.endSec;

        // Merge if gap <= 15s AND NEITHER scene has a custom description (Preserves our 11 curated movies!)
        if (gap <= gapThreshold && !current.description && !scene.description) {
            // Merge time
            current.endSec = Math.max(current.endSec, scene.endSec);
            const formatSec = (sec) => {
                const h = Math.floor(sec / 3600);
                const m = Math.floor((sec % 3600) / 60);
                const s = sec % 60;
                if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
                return `${m}:${String(s).padStart(2, '0')}`;
            };
            current.end = formatSec(current.endSec);
            if (current.endTimestamp) current.endTimestamp = current.end;

            // Merge types
            const t1 = (current.type || '').split(/[,&]/).map(t => t.trim()).filter(Boolean);
            const t2 = (scene.type || '').split(/[,&]/).map(t => t.trim()).filter(Boolean);
            const uniqueTypes = [...new Set([...t1, ...t2])];

            if (uniqueTypes.length > 1) {
                const last = uniqueTypes.pop();
                current.type = uniqueTypes.join(', ') + ' & ' + last;
            } else {
                current.type = uniqueTypes[0] || '';
            }

            // Merge severity
            const rank1 = getSeverityRank(current.severity);
            const rank2 = getSeverityRank(scene.severity);
            current.severity = getSeverityFromRank(Math.max(rank1, rank2));
        } else {
            merged.push(current);
            current = { ...scene };
        }
    }

    if (current) merged.push(current);
    return merged.map(({ startSec, endSec, ...rest }) => rest);
};

const SensitiveContentTimelineSection = React.memo(({ movie, sensitiveScenes }) => {
    const consolidatedScenes = useMemo(() => {
        const raw = sensitiveScenes || [];
        const timedScenes = raw.filter(s => s.start && s.start.trim() !== '' && s.start.toLowerCase() !== 'none');
        const generalScenes = raw.filter(s => !s.start || s.start.trim() === '' || s.start.toLowerCase() === 'none');
        const consolidatedTimed = consolidateTimelineScenes(timedScenes, 15);
        return [...consolidatedTimed, ...generalScenes];
    }, [sensitiveScenes]);

    // --- MOBILE RESPONSIVE TOOLTIP STATE ---
    const [showInfo, setShowInfo] = useState(false);
    const infoRef = useRef(null);
    const [showSafetyInfo, setShowSafetyInfo] = useState(false);
    const safetyInfoRef = useRef(null);

    // --- REAL FIREBASE VOTE STATE ---
    const [helpfulCount, setHelpfulCount] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
    const [isVoting, setIsVoting] = useState(false); // Manages vote submission state

    // --- WATCH-ALONG STATE ---
    const [showWatchAlong, setShowWatchAlong] = useState(false);
    const handleOpenWatchAlong = useCallback(() => setShowWatchAlong(true), []);
    const handleCloseWatchAlong = useCallback(() => setShowWatchAlong(false), []);

    // --- EXPRESSVPN AFFILIATE CLICK TRACKER (INSTANT DYNAMIC COUNTRY RECORDING) ---
    const handleExpressVpnClick = useCallback(async () => {
        try {
            let detectedCountry = 'US';
            try {
                const ipRes = await fetch('https://ipinfo.io/json');
                if (ipRes.ok) {
                    const ipData = await ipRes.json();
                    if (ipData.country) detectedCountry = ipData.country;
                }
            } catch (e) { }

            // Write to Firebase INSTANTLY so click is never lost
            const clickData = {
                movieSlug: movie?.slug || movie?.tmdbId || 'unknown',
                movieTitle: movie?.Title || movie?.title || 'Unknown Movie',
                promoType: 'expressvpn',
                placement: 'below_timestamps',
                country: detectedCountry,
                timestamp: serverTimestamp(),
                userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
            };

            // Non-blocking fire-and-forget Firestore write
            addDoc(collection(db, 'affiliate_clicks'), clickData).catch(err => {
                console.error("Firebase analytics click tracking failed:", err);
            });
        } catch (err) {
            console.error("Firebase analytics click tracking failed:", err);
        }
    }, [movie]);

    // --- 📱 STICKY BOTTOM CTA BAR STATE ---
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [stickyDismissed, setStickyDismissed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const movieId = movie?.slug || movie?.tmdbId?.toString(); // Unique identifier for the movie

    const isHeavyScene = useCallback((scene) => {
        const t = scene.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    }, []);

    const filteredHeavyScenes = useMemo(() => {
        return consolidatedScenes.filter(isHeavyScene);
    }, [consolidatedScenes, isHeavyScene]);

    // 🔥 CURATED LIST: Films that show the "Viewer Discretion Advised" advisory box
    // Includes Top 20 famous explicit films + all films with 10+ Sex/Nudity scenes
    const EXPLICIT_ADVISORY_TMDB_IDS = useMemo(() => new Set([
        792307, 884, 185, 345, 8055, 4995, 9352, 106646, 1359, 1391, 13973, 1064213,
        1278, 152532, 181886, 2105, 85889, 814338, // 10+ scenes
        402, 617, 979, 1643, 2057, 2251, 4588, 10867, 11013, 76025, 152584,
        216015, 337167, 341174, 401981, 664413, 930564 // Famous explicit films
    ]), []);

    const showExplicitAdvisory = useMemo(() => {
        const tmdbId = movie?.tmdbId;
        if (tmdbId && EXPLICIT_ADVISORY_TMDB_IDS.has(tmdbId)) return true;
        // Also auto-include any film with 10+ heavy scenes
        if (filteredHeavyScenes.length >= 10) return true;
        return false;
    }, [movie?.tmdbId, EXPLICIT_ADVISORY_TMDB_IDS, filteredHeavyScenes]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (infoRef.current && !infoRef.current.contains(event.target)) setShowInfo(false);
            if (safetyInfoRef.current && !safetyInfoRef.current.contains(event.target)) setShowSafetyInfo(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        if (typeof window !== 'undefined' && movieId) {
            const previouslyVoted = localStorage.getItem(`filmiway_voted_${movieId}`);
            if (previouslyVoted) {
                setHasVoted(true);
            }
        }

        // 🔥 Fetch REAL vote count from Firebase on mount
        const fetchVotes = async () => {
            if (!movieId) return;
            try {
                const { doc, getDoc } = await import('firebase/firestore');
                const { db } = await import('../firebaseConfig');
                const voteDoc = await getDoc(doc(db, 'helpful_votes', movieId));
                if (voteDoc.exists()) {
                    setHelpfulCount(voteDoc.data().count || 0);
                }
            } catch (error) {
                console.error("Error fetching helpful votes:", error);
            }
        };

        // ⚡ DEFER FIREBASE IMPORT BY 5 SECONDS TO PREVENT MAIN THREAD BLOCKING
        const timer = setTimeout(() => fetchVotes(), 5000);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            clearTimeout(timer); // Cleanup timeout to prevent memory leaks
        };
    }, [movie?.slug, movie?.tmdbId]);

    // 📱 SCROLL-TRIGGERED STICKY BAR — appears after 300px scroll on all devices
    useEffect(() => {
        const handleScroll = () => {
            if (stickyDismissed || showWatchAlong) return;
            setShowStickyBar(window.scrollY > 300);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        handleResize(); // set initial client width
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [stickyDismissed, showWatchAlong]);

    // 🔥 Handle REAL Firebase vote submission
    const handleVote = async () => {
        if (hasVoted || isVoting || !movieId) return;
        setIsVoting(true);

        // Optimistic UI update (feels instant to the user)
        setHasVoted(true);
        setHelpfulCount(prev => prev + 1);

        // 🔥 Save to localStorage so it remembers even if they refresh the page
        if (typeof window !== 'undefined') {
            localStorage.setItem(`filmiway_voted_${movieId}`, 'true');
        }

        try {
            const { doc, getDoc, setDoc, updateDoc, increment } = await import('firebase/firestore');
            const { db } = await import('../firebaseConfig');
            const voteRef = doc(db, 'helpful_votes', movieId);
            const voteDoc = await getDoc(voteRef);

            if (voteDoc.exists()) {
                await updateDoc(voteRef, { count: increment(1) });
            } else {
                await setDoc(voteRef, { count: 1 });
            }
        } catch (error) {
            console.error("Error submitting vote:", error);
            // Revert on failure (optional, but good practice)
            setHasVoted(false);
            setHelpfulCount(prev => prev - 1);
            if (typeof window !== 'undefined') {
                localStorage.removeItem(`filmiway_voted_${movieId}`);
            }
        } finally {
            setIsVoting(false);
        }
    };

    const actualScenes = consolidatedScenes || [];
    let sensitiveData = { scenes: [...actualScenes] }; // Show ALL scenes in the timeline (including violence & gore)

    // 🔥 Ensure both Profanity and Violence & Gore appear if at least one is present
    const hasProfanity = sensitiveData.scenes.some(s => s.type?.toLowerCase().includes('profanity') || s.type?.toLowerCase() === 'language');
    const hasViolence = sensitiveData.scenes.some(s => s.type?.toLowerCase().includes('violence') || s.type?.toLowerCase().includes('gore'));

    if (hasProfanity || hasViolence) {
        if (!hasProfanity) {
            sensitiveData.scenes.push({
                start: "",
                end: "",
                type: "Profanity",
                severity: "None",
                description: "None"
            });
        }
        if (!hasViolence) {
            sensitiveData.scenes.push({
                start: "",
                end: "",
                type: "Violence & Gore",
                severity: "None",
                description: "None"
            });
        }
    }

    // Deduplicate general warnings of the same type (e.g. multiple empty start times for Profanity or Violence)
    const uniqueScenes = [];
    const seenGeneralTypes = new Set();

    sensitiveData.scenes.forEach(scene => {
        const isGeneral = !scene.start || scene.start.trim() === '' || scene.start.toLowerCase() === 'none';
        if (isGeneral) {
            const sType = (scene.type || '').toLowerCase();
            let normType = sType;
            if (sType.includes('profanity') || sType.includes('language')) normType = 'profanity';
            else if (sType.includes('violence') || sType.includes('gore') || sType.includes('blood')) normType = 'violence';
            else if (sType.includes('nudity') || sType.includes('sex') || sType.includes('explicit')) normType = 'nudity';

            if (seenGeneralTypes.has(normType)) {
                // Duplicate general warning of this type, skip it
                return;
            }
            seenGeneralTypes.add(normType);
        }
        uniqueScenes.push(scene);
    });
    sensitiveData.scenes = uniqueScenes;

    let contentTypes = [...new Set(filteredHeavyScenes.map(s => s.type).filter(Boolean))];
    if (contentTypes.length === 0 && filteredHeavyScenes.length > 0) contentTypes = ['Mature Content'];

    // ✅ DYNAMIC RUNTIME VERIFICATION (Including Specific Movie Overrides)
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    // Explicit Override for Limitless (Unrated Version)
    if (movie.tmdbId === 51876) {
        currentRuntime = "105 min (Unrated Version)";
    }

    // Explicit Override for Sin City
    if (movie.tmdbId === 187) {
        currentRuntime = "141 min (Unrated Extended Version)";
    }

    // Explicit Override for Apocalypse Now
    if (movie.tmdbId === 28) {
        currentRuntime = "183 min (Final Cut)";
    }

    // Explicit Override for Troy
    if (movie.tmdbId === 652 || movie.imdbID === 'tt0332452') {
        currentRuntime = "196 min (Director's Cut)";
    }

    // Explicit Override for Mad Max: Fury Road
    if (movie.tmdbId === 76341) {
        currentRuntime = "120 min";
    }

    // 🔥 Explicit Override for Once Upon a Time in America
    if (movie.tmdbId === 311) {
        currentRuntime = "249 min";
    }

    // 🔥 Explicit Override for Fifty Shades Darker
    if (movie.tmdbId === 341174) {
        currentRuntime = "132 min (Unrated Version)";
    }

    // 🔥 Explicit Override for Original Sin
    if (movie.tmdbId === 2057) {
        currentRuntime = "118 min (Unrated Version)";
    }

    // 🔥 Explicit Override for Malèna
    if (movie.tmdbId === 10867) {
        currentRuntime = "1 hour 32 min";
    }

    // 🔥 GRAB RECOMMENDED AGE DATA
    const tmdbIdKey = movie?.tmdbId?.toString();
    const timestampData = tmdbIdKey ? masterTimestamps[tmdbIdKey] : null;
    const recommendedAge = timestampData?.Age || movie?.Age;
    const ageSummary = timestampData?.Summary || movie?.Summary;

    // 🚀 SEO UPGRADE: DYNAMIC TEXT GENERATOR
    // Prevents Google from flagging the pages as "Templated Boilerplate"
    const textHash = useMemo(() => {
        const str = movie?.Title || 'Film';
        return str.charCodeAt(0) + str.length + (movie?.Year || movie?.year || 0);
    }, [movie?.Title, movie?.Year, movie?.year]);

    const genreText = useMemo(() => {
        const g = movie?.Genre || movie?.genre;
        return g ? `this ${g.split(',')[0].toLowerCase()}` : 'this film';
    }, [movie?.Genre, movie?.genre]);

    const cleanVariations = useMemo(() => [
        "The movie has no timestamps as it contains no sexual or major explicit scenes. Accurate for the ",
        "No explicit timestamps found. The movie has no timestamps as it has no sexual or major explicit scenes. Verified for the ",
        "Our editors did not flag any explicit content. The movie has no timestamps as it has no sexual or major explicit scenes. Accurate for the ",
        "Zero intimate scenes detected. The movie has no timestamps as it has no sexual or major explicit scenes. Verified for the "
    ], []);

    //  VISUAL TIMELINE MARKERS GENERATION
    const timelineMarkers = useMemo(() => {
        const runtimeSeconds = parseRuntimeToSeconds(currentRuntime);
        return sensitiveData.scenes.map((scene, idx) => {
            const startSec = parseTimestampToSeconds(scene.start);
            let percentage = (startSec / runtimeSeconds) * 100;
            percentage = Math.max(0.5, Math.min(percentage, 99.5)); // Keep inside bounds securely

            return {
                ...scene,
                percentage,
                id: idx
            };
        }).filter(m => m.start && m.start !== 'N/A' && m.start !== '' && m.start.toLowerCase() !== 'none');
    }, [sensitiveData.scenes, currentRuntime]);

    const getSeverityDotColor = (severity) => {
        if (!severity) return 'bg-gray-500 shadow-gray-500/50';
        const s = severity.toLowerCase();
        if (s === 'extreme' || s === 'severe') return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]';
        if (s === 'high') return 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]';
        if (s === 'moderate') return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]';
        if (s === 'mild') return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]';
        return 'bg-gray-500 shadow-gray-500/50';
    };

    const skipStats = useMemo(() => {
        if (!filteredHeavyScenes.length) return { totalScenes: 0, formattedTime: "0 sec" };

        let totalSeconds = 0;

        filteredHeavyScenes.forEach(scene => { // Iterate over filtered heavy scenes
            if (scene.start && scene.end) {
                const parseTime = (t) => {
                    const parts = t.split(':').map(Number); // Time format (HH:MM:SS or MM:SS)
                    if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                    if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                    return 0;
                };

                const startSec = parseTime(scene.start);
                const endSec = parseTime(scene.end);

                if (endSec > startSec) {
                    totalSeconds += (endSec - startSec);
                }
            }
        });

        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        let formattedTime = "";
        if (totalSeconds === 0) formattedTime = "< 1 min";
        else if (mins === 0) formattedTime = `${secs} sec`;
        else formattedTime = secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;

        return { // Return stats based on filtered heavy scenes
            totalScenes: filteredHeavyScenes.length,
            formattedTime
        };
    }, [filteredHeavyScenes]);

    const safetyScoreColor = movie?.safetyScore >= 8 ? '#10b981' : movie?.safetyScore >= 5 ? '#eab308' : '#ef4444';
    const safetyScoreBg = movie?.safetyScore >= 8 ? 'rgba(16,185,129,0.15)' : movie?.safetyScore >= 5 ? 'rgba(234,179,8,0.15)' : 'rgba(239,68,68,0.15)';
    const safetyScoreBorder = movie?.safetyScore >= 8 ? 'rgba(16,185,129,0.3)' : movie?.safetyScore >= 5 ? 'rgba(234,179,8,0.3)' : 'rgba(239,68,68,0.3)';

    const minimalistSafetyBadge = movie?.safetyScore ? (
        <div
            className="flex flex-row items-center justify-between gap-3 sm:gap-4 w-full rounded-2xl border backdrop-blur-md p-4 sm:p-5 lg:p-5 shadow-xl relative m-0 z-30"
            style={{ backgroundColor: 'rgba(10, 10, 12, 0.8)', borderColor: safetyScoreBorder }}
        >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: safetyScoreColor }}></div>
            <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                <Shield size={18} style={{ color: safetyScoreColor }} className="hidden sm:block opacity-90 shrink-0" />
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm lg:text-[15px] font-semibold text-gray-200 tracking-wide uppercase">Family Safety Score:</span>
                    <span className="text-base sm:text-lg lg:text-xl font-black" style={{ color: safetyScoreColor }}>
                        {movie.safetyScore}/10
                    </span>
                    <span className="text-xs sm:text-sm uppercase tracking-widest font-bold opacity-90"
                        style={{ color: safetyScoreColor }}>
                        {movie.safetyLabel}
                    </span>
                </div>
            </div>
            <div className="relative group flex items-center shrink-0 z-50" ref={safetyInfoRef}>
                <button
                    type="button"
                    className="focus:outline-none p-1.5 -m-1.5 cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowSafetyInfo(!showSafetyInfo);
                    }}
                    aria-label="What is Family Safety Score?"
                >
                    <Info
                        size={16}
                        className={`transition-colors ${showSafetyInfo ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                    />
                </button>
                <div
                    className={`absolute bottom-full right-0 mb-2.5 w-64 sm:w-72 p-3.5 bg-[#18181b] border border-gray-600 rounded-xl text-xs sm:text-sm text-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.95)] z-[9999] text-left leading-relaxed font-normal transition-all duration-200 ${
                        showSafetyInfo ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto'
                    }`}
                >
                    <strong className="text-white block mb-1 font-semibold">Family Safety Score</strong>
                    The Family Safety Score helps families decide whether to watch a movie together based on explicit content, violence, and profanity.
                    <div className="absolute top-full right-2 border-[6px] border-transparent border-t-[#18181b]"></div>
                </div>
            </div>
        </div>
    ) : null;

    // 📱 STICKY CTA BAR — rendered via portal only on mobile so it doesn't overlap desktop ads
    const stickyBar = (typeof document !== 'undefined' && isMobile && showStickyBar && !showWatchAlong && filteredHeavyScenes.length > 0)
        ? createPortal(
            <AnimatePresence>
                <motion.div
                    key="sticky-watch-along"
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -120, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-14 left-0 right-0 z-[9999] px-4 pt-2 pointer-events-none md:hidden"
                >
                    <div className="max-w-xl mx-auto flex items-center gap-3 bg-[#111113] border border-yellow-500/40 rounded-2xl px-4 py-3 shadow-[0_0_40px_rgba(234,179,8,0.25)] pointer-events-auto">
                        {/* Pulsing live dot */}
                        <div className="relative flex-shrink-0 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-[13px] font-semibold leading-tight truncate">⏱ Watch-Along Timer</p>
                            <p className="text-gray-400 text-[11px] leading-tight">Auto-alerts you 15 sec before each scene</p>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={() => { handleOpenWatchAlong(); setStickyDismissed(true); }}
                            className="flex-shrink-0 flex items-center gap-1.5 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-300 text-black text-[12px] font-bold px-4 py-2 rounded-xl transition-all duration-200 shadow-[0_0_15px_rgba(234,179,8,0.4)] active:scale-95"
                        >
                            <Play size={12} />
                            Start
                        </button>

                        {/* Dismiss X */}
                        <button
                            onClick={() => { setShowStickyBar(false); setStickyDismissed(true); }}
                            className="flex-shrink-0 p-1 text-gray-500 hover:text-gray-300 transition-colors"
                            aria-label="Dismiss"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>,
            document.body
        )
        : null;

    return (
        <>
            {stickyBar}
            <motion.section
                className="w-full bg-[#0a0a0c] rounded-2xl border border-white/10 shadow-xl p-5 sm:p-8"
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* 🎨 Premium scrollbar (desktop) + severity accent bar (all devices) */}
                <style>{`
                @media (min-width: 1024px) {
                    .desktop-timestamp-scroll::-webkit-scrollbar {
                        width: 6px;
                    }
                    .desktop-timestamp-scroll::-webkit-scrollbar-track {
                        background: rgba(255, 255, 255, 0.03);
                        border-radius: 10px;
                    }
                    .desktop-timestamp-scroll::-webkit-scrollbar-thumb {
                        background: rgba(234, 179, 8, 0.5);
                        border-radius: 10px;
                    }
                    .desktop-timestamp-scroll::-webkit-scrollbar-thumb:hover {
                        background: rgba(234, 179, 8, 0.8);
                    }
                    .desktop-timestamp-scroll {
                        scrollbar-width: thin;
                        scrollbar-color: rgba(234, 179, 8, 0.5) transparent;
                    }
                }
                .timestamp-card-list .group {
                    position: relative;
                    overflow: hidden;
                }
                .timestamp-card-list .group::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    border-radius: 3px 0 0 3px;
                    background: var(--accent-color, rgba(107,114,128,0.5));
                    opacity: 0.6;
                    transition: opacity 0.3s ease;
                }
                .timestamp-card-list .group:hover::before {
                    opacity: 1;
                }
            `}</style>
                {filteredHeavyScenes.length === 0 ? (
                    <div className="flex flex-col gap-4 sm:gap-6 relative z-50">
                        <div className="space-y-3 w-full">
                            <div className="flex items-start sm:items-center justify-between w-full gap-2">
                                <h1 className="text-xl sm:text-2xl font-light text-gray-200 flex items-start sm:items-center gap-2 sm:gap-3 leading-tight flex-1">
                                    <CheckCircle className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 sm:mt-0" />
                                    <span className="block">{movie?.Title} Parents Guide & Content Advisory</span>
                                </h1>
                            </div>
                            {minimalistSafetyBadge}
                        </div>

                        {/* 🔥 RECOMMENDED AGE BADGE (Dynamic) */}
                        {recommendedAge && ageSummary && (
                            <motion.div
                                className="my-1 relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:p-4 flex flex-row items-center gap-3 sm:gap-4 shadow-lg w-full"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

                                <div className={`flex-shrink-0 flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.15)] ${recommendedAge.length > 4 ? 'px-3.5 py-2 rounded-xl min-w-[64px]' : 'w-12 h-12 sm:w-14 sm:h-14 rounded-full'}`}>
                                    <span className={`font-bold text-yellow-400 text-center ${recommendedAge.length > 4 ? 'text-xs sm:text-sm whitespace-nowrap' : 'text-lg sm:text-xl tracking-tight'}`}>{recommendedAge}</span>
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                    <span className="text-[11px] sm:text-xs font-semibold text-gray-300 mb-0.5 uppercase tracking-widest block">Recommended Age</span>
                                    <p className="text-xs sm:text-[13px] text-gray-400 leading-snug font-light">{ageSummary}</p>
                                </div>
                            </motion.div>
                        )}

                        {/* 🟢 REASSURANCE BOX (Green card positioned below Recommended Age & above Content Advisory) */}
                        <div className="my-1 relative overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-md p-3.5 sm:p-4 flex items-start gap-3 shadow-md w-full">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                            <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                                Filmiway editors have verified that <span className="underline font-normal text-white">{movie?.Title}</span> has no skip timestamps because it is completely free of explicit, intimate, or sexual scenes throughout its full <span className="text-emerald-400 font-medium" suppressHydrationWarning>{currentRuntime}</span> runtime.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 sm:gap-3.5 relative z-50">

                        <div className="space-y-2.5 w-full">
                            <div className="flex items-start sm:items-center justify-between w-full gap-2">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-light sm:font-bold text-gray-200 sm:text-white flex items-start sm:items-center gap-2 sm:gap-3 leading-tight flex-1">
                                    <Shield className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 shrink-0 mt-0.5 sm:mt-0" />
                                    <span className="block">{movie?.Title} Parents Guide & Skip Timestamps</span>
                                </h1>

                                <div
                                    className="relative flex items-center shrink-0 z-50 pt-0.5 sm:pt-0"
                                    ref={infoRef}
                                >
                                    <button
                                        type="button"
                                        className="focus:outline-none p-1 -m-1"
                                        onClick={(e) => {
                                             e.preventDefault();
                                             setShowInfo(!showInfo);
                                        }}
                                        aria-label="How we verify timestamps"
                                    >
                                        <Info
                                            size={16}
                                            className={`transition-colors sm:w-5 sm:h-5 mt-1 sm:mt-0 ${showInfo ? 'text-gray-300' : 'text-gray-400 hover:text-white'}`}
                                        />
                                    </button>

                                    {/* 🚀 SEO FIX: Always render this in the DOM so Googlebot reads it, but hide visually with CSS/opacity when not active */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            opacity: showInfo ? 1 : 0,
                                            y: showInfo ? 0 : -5,
                                            scale: showInfo ? 1 : 0.95,
                                            pointerEvents: showInfo ? 'auto' : 'none'
                                        }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 top-[130%] mt-2 w-[280px] max-w-[90vw] sm:w-72 p-4 bg-[#111113] border border-gray-600/50 rounded-xl text-xs sm:text-sm text-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.95)] z-[9999] font-sans tracking-normal leading-relaxed origin-top-right"
                                    >
                                        <strong className="text-white block mb-1 font-semibold">100% Manually Verified</strong>
                                        Our editors manually watch and pull exact timestamps directly from the film. We provide these timestamps so parents know exactly what they or their kids are going to see, helping to remove those awkward moments in movie nights.
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* 🔥 THE "SHOWER IDEA" VISUAL TIMELINE MAP (PLACED DIRECTLY UNDER H1 FOR INSTANT SATISFACTION) */}
                        {timelineMarkers.length > 0 && (
                            <motion.div
                                className="w-full pt-3 sm:pt-4 border-t border-white/5 sm:border-white/10"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                {/* PARENTS GUIDE TRACKER HEADER */}
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <h2 className="text-xs sm:text-sm lg:text-base font-bold text-gray-300 uppercase tracking-[0.2em] flex items-center gap-2 m-0">
                                        <Film size={16} className="text-yellow-500 sm:w-[18px] sm:h-[18px]" /> Parents Guide Tracker
                                    </h2>
                                </div>

                                {/* 🎬 WATCH-ALONG TIMER OVERLAY */}
                                {showWatchAlong && (
                                    <WatchAlongTimer
                                        movie={movie}
                                        sensitiveScenes={consolidatedScenes}
                                        onClose={handleCloseWatchAlong}
                                    />
                                )}

                                {/* 🔥 SEO SAFE-SEARCH PARENTAL ADVISORY — Only for curated explicit films */}
                                {showExplicitAdvisory && (
                                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3.5 sm:p-4 mb-4 shadow-lg">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-700"></div>
                                        <div className="flex items-start gap-3 ml-1">
                                            <AlertOctagon className="text-red-400/80 w-4 h-4 shrink-0 mt-0.5" />
                                            <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed font-light">
                                                <span className="text-gray-300 font-medium">Viewer Discretion Advised:</span> This film contains scenes of an extremely explicit nature. Filmiway strongly advises that this film is <span className="text-red-400/90 font-medium">not suitable for family viewing or watching with children</span>. If you choose to watch, use the skip timestamps below to navigate past scenes you may find uncomfortable. These timestamps are provided strictly as an educational utility.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="relative w-full h-2.5 sm:h-3 bg-[#030303] rounded-full border border-white/10 shadow-inner group/track mt-3 sm:mt-4">
                                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-gray-800/40 to-transparent w-full rounded-full pointer-events-none" />

                                    {timelineMarkers.map((marker) => {
                                        // 🔥 Improved Edge Detection: Widened threshold to 25% so it NEVER gets cut off on narrow mobile screens
                                        const isStartEdge = marker.percentage < 25;
                                        const isEndEdge = marker.percentage > 75;
                                        const tooltipAlign = isStartEdge ? "left-0" : isEndEdge ? "right-0" : "left-1/2 -translate-x-1/2";
                                        const pointerAlign = isStartEdge ? "left-2" : isEndEdge ? "right-2" : "left-1/2 -translate-x-1/2";

                                        return (
                                            <div
                                                key={`pin-${marker.id}`}
                                                aria-label={`${marker.type} starting at ${marker.start}`}
                                                className="group/pin absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#0a0a0c] shadow-[0_0_8px_rgba(0,0,0,0.8)] cursor-pointer hover:scale-[1.5] focus:scale-[1.5] transition-all duration-300 z-10 hover:z-50 focus:z-50 outline-none"
                                                style={{
                                                    left: `${marker.percentage}%`,
                                                    backgroundColor: getMarkerColorHex(marker.severity)
                                                }}
                                                tabIndex="0"
                                            >
                                                {/* Properly scaled micro-tooltip - Readable on mobile, sleek on PC */}
                                                <div className={`pointer-events-none absolute bottom-full mb-1.5 sm:mb-2 w-max max-w-[120px] sm:max-w-[140px] opacity-0 group-hover/pin:opacity-100 group-focus/pin:opacity-100 transition-all duration-200 z-[100] transform group-hover/pin:-translate-y-1 group-focus/pin:-translate-y-1 origin-bottom ${tooltipAlign}`}>
                                                    <div className="bg-[#111113] border border-gray-600/50 rounded-md px-2 py-1.5 shadow-xl text-left relative">
                                                        <div className={`absolute -bottom-1 w-2 h-2 bg-[#111113] border-b border-r border-gray-600/50 transform rotate-45 ${pointerAlign}`}></div>
                                                        <span className="text-gray-400 font-mono block mb-1 flex items-center gap-1 text-[10px] sm:text-[11px]">
                                                            <Clock size={10} className="text-gray-500 shrink-0" />
                                                            <span className="truncate">{marker.start}{marker.end ? `-${marker.end}` : ''}</span>
                                                        </span>
                                                        <span className="text-gray-200 font-medium block leading-tight break-words whitespace-normal text-[11px] sm:text-[12px]">
                                                            {marker.type}
                                                        </span>
                                                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mt-1 block" style={{ color: getMarkerColorHex(marker.severity) }}>
                                                            {marker.severity}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-500 mt-3 font-mono font-medium tracking-widest uppercase">
                                    <span>00:00</span>
                                    <span suppressHydrationWarning>{currentRuntime}</span>
                                </div>
                            </motion.div>
                        )}

                        {/* 🔥 TIMESTAMPS CARD LIST (PROMINENTLY VISIBLE RIGHT AT TOP) */}
                        <div className="relative">
                            <div className="w-full">
                                {/* 🚀 SEO UPGRADE: Semantic list extraction for search engines */}
                                <ul className="space-y-2 sm:space-y-2.5 m-0 p-0 list-none timestamp-card-list">
                                    {[...sensitiveData.scenes].sort((a, b) => {
                                        const aStart = a.start || '';
                                        const bStart = b.start || '';
                                        if (!aStart && bStart) return 1;
                                        if (aStart && !bStart) return -1;
                                        return 0;
                                    }).map((scene, index, arr) => {
                                        const rawStart = scene.start || '';
                                        const sceneEnd = scene.end || '';
                                        const sceneType = scene.type || scene.description || 'Content Warning';
                                        const sceneDescription = scene.description || '';

                                        const getSceneIcon = (type) => {
                                            const lowerType = type.toLowerCase();
                                            if (lowerType.includes('nudity') || lowerType.includes('sex') || lowerType.includes('lingerie') || lowerType.includes('suggestive')) return <Eye size={16} />;
                                            if (lowerType.includes('language') || lowerType.includes('profanity')) return <MessageSquare size={16} />;
                                            if (lowerType.includes('violence') || lowerType.includes('gore') || lowerType.includes('blood')) return <Flame size={16} />;
                                            if (lowerType.includes('kissing')) return <Heart size={16} />;
                                            return <AlertTriangle size={16} />;
                                        };

                                        const severityBadge = scene.severity ? (
                                            <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm sm:rounded-md border border-white/10 sm:border-white/15 bg-white/[0.02] sm:bg-white/[0.04] group-hover:border-white/20 transition-colors">
                                                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${getSeverityDotColor(scene.severity)}`} />
                                                <span className="text-[9px] sm:text-[10px] lg:text-xs font-semibold sm:font-bold tracking-[0.15em] uppercase text-gray-400 sm:text-gray-200 group-hover:text-white transition-colors">
                                                    {scene.severity}
                                                </span>
                                            </div>
                                        ) : null;

                                        const isGeneralWarning = rawStart === '' || rawStart.toLowerCase() === 'none';

                                        return (
                                            <React.Fragment key={index}>
                                                <li className="group rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/[0.06] sm:border-white/10 bg-white/[0.015] sm:bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col gap-2.5 sm:gap-3 p-3.5 pl-5 sm:p-5 lg:p-6 shadow-md" style={{ '--accent-color': getMarkerColorHex(scene.severity) }}>
                                                    {isGeneralWarning ? (
                                                        // 🚀 NEW: Clean Layout for General Warnings (No timestamp, but has data)
                                                        <div className="flex items-start gap-3 sm:gap-3.5 w-full">
                                                            <span className="text-gray-500 group-hover:text-yellow-400 transition-colors duration-300 mt-[3px] sm:mt-1 shrink-0">
                                                                {getSceneIcon(sceneType)}
                                                            </span>
                                                            <div className="flex flex-col min-w-0 flex-1 gap-1 sm:gap-1.5">
                                                                <div className="flex items-center justify-between w-full">
                                                                    <span className="text-gray-300 sm:text-white text-[13px] sm:text-sm lg:text-base font-medium sm:font-semibold break-words whitespace-normal group-hover:text-white transition-colors leading-tight flex flex-wrap items-center gap-1.5 sm:gap-2">
                                                                        <span className="text-gray-400 font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-[11px] lg:text-xs opacity-80">Content Advisory:</span>
                                                                        {sceneType}
                                                                    </span>
                                                                    <div className="shrink-0 ml-3">
                                                                        {severityBadge}
                                                                    </div>
                                                                </div>
                                                                {sceneDescription && sceneDescription !== sceneType && sceneDescription.toLowerCase() !== 'none' && (
                                                                    <span className="text-[12px] sm:text-[13px] lg:text-[14px] text-gray-400/80 leading-relaxed mt-0.5 break-words whitespace-normal group-hover:text-gray-200 transition-colors font-normal">
                                                                        {sceneDescription}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        // 🚀 NEW: Action-Oriented Skip Guide Layout for Timestamps (Sleek UI)
                                                        <div className="flex flex-col min-w-0 w-full gap-1.5 sm:gap-2">
                                                            <div className="flex items-center justify-between w-full">
                                                                <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                                                                    <span className="text-gray-500 group-hover:text-yellow-400 transition-colors duration-300 mt-[1px] sm:mt-0 shrink-0">
                                                                        {getSceneIcon(sceneType)}
                                                                    </span>
                                                                    <span className="text-gray-300 sm:text-white text-[13px] sm:text-sm lg:text-base font-medium sm:font-semibold break-words whitespace-normal group-hover:text-white transition-colors leading-tight flex flex-wrap items-center gap-1.5 sm:gap-2">
                                                                        <span className="text-gray-400 font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-[11px] lg:text-xs opacity-80">Content Advisory:</span>
                                                                        {sceneType}
                                                                    </span>
                                                                </div>
                                                                <div className="shrink-0 ml-3">
                                                                    {severityBadge}
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-gray-400 group-hover:text-gray-200 transition-colors ml-7 sm:ml-7 mt-1">
                                                                <div className="flex items-center gap-1.5 opacity-90 sm:opacity-95">
                                                                    <FastForward size={13} className="text-gray-400 shrink-0" />
                                                                    <span className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-widest uppercase text-gray-300">Action: Skip</span>
                                                                </div>
                                                                <span className="opacity-30 mx-0.5 text-[10px]">•</span>
                                                                <div className="flex items-center gap-1.5">
                                                                    <Clock size={13} className="text-yellow-500/80 sm:text-yellow-400 shrink-0" />
                                                                    <span className="font-mono text-[13px] sm:text-[14px] lg:text-base tracking-wide font-semibold text-gray-200 group-hover:text-white transition-colors">
                                                                        {rawStart} {sceneEnd && <span className="text-gray-500 font-normal text-xs mx-1">→</span>} {sceneEnd}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {sceneDescription && sceneDescription !== sceneType && sceneDescription.toLowerCase() !== 'none' && (
                                                                <div className="ml-7 sm:ml-7 mt-1">
                                                                    <span className="text-[12px] sm:text-[13px] lg:text-[14px] text-gray-400/80 leading-relaxed break-words whitespace-normal group-hover:text-gray-200 transition-colors font-normal">
                                                                        {sceneDescription}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </li>

                                                {/* 🚀 ExpressVPN Native Injection: Filmiway User Deal Card (High Readability & Impact) */}
                                                {index === arr.length - 1 && (
                                                    <li className="relative mt-2 sm:mt-2.5 mb-0 p-4 sm:p-5 bg-[#0e0708] border border-red-800/50 hover:border-red-600 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.12)] group">
                                                        <a
                                                            href="https://go.expressvpn.com/c/7564909/1462856/16063"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={handleExpressVpnClick}
                                                            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
                                                        >
                                                            <div className="flex items-start gap-3.5 min-w-0 flex-1">
                                                                {/* ExpressVPN Red Icon Shield Box - Aligned to Top */}
                                                                <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30 border border-red-500/40 overflow-hidden p-1.5">
                                                                    <Image
                                                                        src="/images/expressvpn/Red, Icon.png"
                                                                        alt="ExpressVPN"
                                                                        width={32}
                                                                        height={32}
                                                                        className="object-contain"
                                                                    />
                                                                </div>

                                                                <div className="flex flex-col min-w-0 flex-1">
                                                                    {/* Perfectly Left-Aligned Header Line */}
                                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                                        <span className="font-black text-xs sm:text-[13px] text-white tracking-widest uppercase">
                                                                            EXPRESSVPN
                                                                        </span>
                                                                        <span className="text-gray-600 text-[10px]">•</span>
                                                                        <span className="text-red-400 font-bold text-[11px] sm:text-xs tracking-wide uppercase">
                                                                            SPECIAL FILMIWAY DEAL • $2.99/MO (+ 4 MONTHS FREE)
                                                                        </span>
                                                                    </div>

                                                                    {/* Headline */}
                                                                    <h4 className="text-white font-bold text-sm sm:text-base leading-snug group-hover:text-red-400 transition-colors">
                                                                        Bypass ISP Throttling & Stream Privately
                                                                    </h4>

                                                                    {/* Explanation Description */}
                                                                    <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mt-1">
                                                                        Watching <span className="text-white font-semibold">{movie?.title || 'movies'}</span>? ExpressVPN stops ISP speed throttling, hides private browsing from network admins, and unlocks geo-restricted streaming catalogs.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Red CTA Button */}
                                                            <div className="shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
                                                                <div className="flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/35 transition-all border border-red-500/60 group-hover:scale-[1.02] w-full">
                                                                    <span>Claim Filmiway Deal ($2.99/mo + 4 Months Free)</span>
                                                                    <ExternalLink size={14} />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </ul>
                            </div>
                            {/* 🎨 DESKTOP-ONLY: Subtle bottom fade to hint "scroll for more" — reduced opacity so text stays readable */}
                            <div className="hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0a0a0c]/60 to-transparent rounded-b-xl z-10" />
                        </div>

                        {/* 🛡️ TIGHTLY STACKED UTILITY CARDS (FAMILY SAFETY SCORE + RECOMMENDED AGE + WATCH-ALONG TIMER) */}
                        <div className="flex flex-col gap-2.5 sm:gap-3">
                            {/* 🛡️ FAMILY SAFETY SCORE BADGE */}
                            {minimalistSafetyBadge}

                            {/* 🔥 RECOMMENDED AGE BADGE */}
                            {recommendedAge && ageSummary && (
                                <motion.div
                                    className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-3.5 sm:p-5 lg:p-6 flex flex-row items-center gap-3.5 sm:gap-5 shadow-xl m-0"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

                                    <div className={`flex-shrink-0 flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.15)] ${recommendedAge.length > 4 ? 'px-3 py-1.5 rounded-xl min-w-[60px]' : 'w-12 h-12 sm:w-16 sm:h-16 rounded-full sm:rounded-2xl'}`}>
                                        <span className={`font-black text-yellow-400 text-center ${recommendedAge.length > 4 ? 'text-xs sm:text-sm whitespace-nowrap' : 'text-lg sm:text-2xl tracking-tight'}`}>{recommendedAge}</span>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center">
                                        <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-gray-300 mb-0.5 sm:mb-1 uppercase tracking-widest block">Recommended Age</span>
                                        <p className="text-xs sm:text-sm lg:text-[15px] text-gray-400 sm:text-gray-300 leading-relaxed font-light sm:font-normal">{ageSummary}</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* ⏱️ DEDICATED WATCH-ALONG TIMER UTILITY CARD */}
                            {timelineMarkers.length > 0 && (
                                <div
                                    itemScope
                                    itemType="https://schema.org/SoftwareApplication"
                                    className="group relative w-full p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-white/10 bg-[#0a0a0c] shadow-xl overflow-hidden m-0"
                                >
                                <meta itemProp="name" content={`Filmiway Live Watch-Along Sync Timer for ${movie?.Title || 'Movie'}`} />
                                <meta itemProp="applicationCategory" content="MultimediaApplication" />
                                <meta itemProp="operatingSystem" content="Web, iOS, Android" />

                                {/* Subtle top accent border line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5 relative z-10">
                                    {/* Left Side: Title & Explanatory Text */}
                                    <div className="flex-1 space-y-2 sm:space-y-2.5">
                                        <div className="flex items-center gap-2">
                                            <div className="relative flex h-2 w-2 shrink-0">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
                                            </div>
                                            <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-yellow-500/90 uppercase tracking-[0.18em]">
                                                Live Synchronization Tool
                                            </span>
                                        </div>

                                        <h3 itemProp="headline" className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight">
                                            Filmiway Watch-Along Timer
                                        </h3>

                                        <p itemProp="description" className="text-xs sm:text-sm lg:text-[15px] text-gray-400 sm:text-gray-300 leading-relaxed max-w-xl font-light sm:font-normal">
                                            Sync this live timer on your mobile phone simultaneously when playing the film on your TV. The tool runs in real-time and alerts you <strong className="text-yellow-400 font-semibold sm:font-bold">15 seconds before explicit or sensitive scenes appear</strong>, giving you enough time to skip past them before things get awkward.
                                        </p>
                                    </div>

                                    {/* Right Side: Launch Button CTA */}
                                    <div className="shrink-0 flex items-center lg:justify-end">
                                        <button
                                            type="button"
                                            onClick={handleOpenWatchAlong}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-black shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:shadow-[0_0_35px_rgba(234,179,8,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn cursor-pointer"
                                        >
                                            <Play size={16} className="fill-black text-black transition-transform group-hover/btn:translate-x-0.5" />
                                            <span>Launch Watch-Along Timer</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>

                        {/* 📊 QUICK SUMMARY STATS & EDITORIAL TRANSPARENCY */}
                        <div className="ml-1 space-y-2 sm:space-y-3 pt-1">
                            <p className="text-[13px] sm:text-sm lg:text-base text-gray-400 sm:text-gray-300 flex items-start sm:items-center gap-2 sm:gap-2.5 font-normal">
                                <CheckCircle size={15} className="text-emerald-500/80 sm:text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                                <span className="leading-snug">Timestamps are accurate for the <span className="text-gray-300 sm:text-white font-medium sm:font-bold" suppressHydrationWarning>{currentRuntime}</span></span>
                            </p>

                            <p className="text-[13px] sm:text-sm lg:text-base text-gray-400 sm:text-gray-300 flex items-center gap-2 sm:gap-2.5 font-normal">
                                <Film size={15} className="text-indigo-400 shrink-0" />
                                <span>Total scenes flagged: <span className="text-gray-300 sm:text-white font-medium sm:font-bold">{skipStats.totalScenes}</span></span>
                            </p>

                            <p className="text-[13px] sm:text-sm lg:text-base text-gray-400 sm:text-gray-300 flex items-center gap-2 sm:gap-2.5 font-normal">
                                <FastForward size={15} className="text-yellow-500/80 sm:text-yellow-400 shrink-0" />
                                <span>Total time to skip: <span className="text-gray-300 sm:text-yellow-400 font-medium sm:font-bold">{skipStats.formattedTime}</span></span>
                            </p>
                        </div>

                        <p className="text-xs sm:text-sm lg:text-[15px] text-gray-400 sm:text-gray-300 leading-relaxed font-light sm:font-normal mt-1 sm:mt-2 max-w-3xl ml-1">
                            {(() => {
                                const title = movie?.Title || 'this movie';
                                const seed = Math.abs(Number(movie?.tmdbId || 0) + title.length);
                                const templates = [
                                    <>Filmiway provides manually verified skip timestamps for <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span> so parents and families know exactly what to expect before pressing play. Every timecode is hand-checked by our editors to be 100% reliable and pinpoint correct for the official runtime, eliminating uncomfortable surprises. Use our timestamps as an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>,
                                    <>To help you avoid unexpected moments during movie nights, Filmiway editors manually log and verify exact skip timestamps for <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span>. Each scene marker is pinpoint-accurate for the official runtime, ensuring 100% reliability for parents and families. Our timestamps serve as an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>,
                                    <>Filmiway's team manually reviews <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span> to deliver 100% reliable, pinpoint-accurate skip timestamps for the full runtime. We help parents and families preview content warnings in advance to eliminate uncomfortable interruptions. Designed as an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>,
                                    <>Enjoy a worry-free movie night with <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span> using Filmiway's manually verified skip timestamps. Our editors hand-verify every single timecode for pinpoint precision against the official runtime, giving parents full confidence when watching with family. These timestamps function as an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>,
                                    <>Filmiway provides precise, hand-verified skip timestamps for <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span> to ensure parents and families are never caught off guard. Every timestamp is manually checked by our editorial team to guarantee 100% accuracy for the exact runtime. Use our timestamps as an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>,
                                    <>Avoid unexpected interruptions during <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span> with Filmiway's 100% reliable skip timestamps. Every scene marker is manually analyzed and verified by Filmiway editors for pinpoint accuracy matching the full runtime. We provide these timestamps as an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>,
                                    <>Filmiway editors manually watch and verify all skip timestamps for <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span>, delivering 100% reliable, pinpoint-accurate timecodes for the official runtime. We created this guide to help parents preview content beforehand. Feel free to use our timestamps as an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>,
                                    <>With Filmiway's hand-verified skip guide for <span className="underline font-normal sm:font-medium text-gray-200 sm:text-white">{title}</span>, parents can enjoy movie nights without worrying about unexpected content. Our team manually checks every timecode for 100% pinpoint accuracy against the exact runtime, offering an educational utility to skip awkward scenes seamlessly while enjoying family movie nights.</>
                                ];
                                return templates[seed % templates.length];
                            })()}
                        </p>
                    </div>
                )}




                {/* 🔥 ENHANCED ENGAGEMENT FOOTER: Designed for maximum CTR */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 sm:border-white/10 pt-4 sm:pt-5 mt-4">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.15em] sm:tracking-widest font-semibold">
                        <Shield size={14} className="text-emerald-500/70 sm:text-emerald-400 shrink-0" />
                        <span className="truncate" suppressHydrationWarning>Last Updated: {movie?.lastVerifiedDate || 'August 28, 2026'}</span>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-6">
                        {/* Social Proof / Prompt */}
                        <div className="text-xs sm:text-sm lg:text-base text-gray-400 sm:text-gray-300">
                            {hasVoted ? (
                                <span className="text-emerald-400/90 font-medium sm:font-semibold">Thanks for your feedback!</span>
                            ) : helpfulCount > 5 ? (
                                <span><strong className="text-gray-200 sm:text-white font-bold">{helpfulCount}</strong> found this helpful. You?</span>
                            ) : (
                                <span>Was this guide helpful?</span>
                            )}
                        </div>

                        <motion.button
                            whileHover={!hasVoted && !isVoting ? { scale: 1.05 } : {}}
                            whileTap={!hasVoted && !isVoting ? { scale: 0.95 } : {}}
                            onClick={handleVote}
                            disabled={hasVoted || isVoting}
                            className={`group flex items-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm font-bold border ${hasVoted
                                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 cursor-default shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                                : 'bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-gray-900 border-yellow-400 cursor-pointer shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]'
                                }`}
                        >
                            {hasVoted ? (
                                <><CheckCircle size={16} className="text-emerald-400" /> Helpful!</>
                            ) : (
                                <><ThumbsUp size={16} className={`transition-transform duration-300 text-gray-900 ${isVoting ? 'animate-bounce' : 'group-hover:-translate-y-0.5 group-hover:scale-110'}`} /> Yes, it was!</>
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </>
    );
});

SensitiveContentTimelineSection.displayName = 'SensitiveContentTimelineSection';

export default SensitiveContentTimelineSection;