// components/SensitiveContentTimelineSection.js
import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, Clock, AlertOctagon, Info, Film, FastForward, Eye, Heart, AlertTriangle, ThumbsUp, ThumbsDown, MessageSquare, Flame, Play, Timer } from 'lucide-react';
import dynamic from 'next/dynamic';
import masterTimestamps from '../utils/masterTimestamps.json';

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

const SensitiveContentTimelineSection = React.memo(({ movie, sensitiveScenes }) => {
    // --- MOBILE RESPONSIVE TOOLTIP STATE ---
    const [showInfo, setShowInfo] = useState(false);
    const infoRef = useRef(null);

    // --- REAL FIREBASE VOTE STATE ---
    const [helpfulCount, setHelpfulCount] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
    const [isVoting, setIsVoting] = useState(false); // Manages vote submission state
    
    // --- WATCH-ALONG STATE ---
    const [showWatchAlong, setShowWatchAlong] = useState(false);
    const handleOpenWatchAlong = useCallback(() => setShowWatchAlong(true), []);
    const handleCloseWatchAlong = useCallback(() => setShowWatchAlong(false), []);

    // --- 📱 STICKY BOTTOM CTA BAR STATE ---
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [stickyDismissed, setStickyDismissed] = useState(false);

    const movieId = movie?.slug || movie?.tmdbId?.toString(); // Unique identifier for the movie

    const isHeavyScene = useCallback((scene) => {
        const t = scene.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    }, []);

    const filteredHeavyScenes = useMemo(() => {
        return sensitiveScenes.filter(isHeavyScene);
    }, [sensitiveScenes, isHeavyScene]);

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

    // 📱 SCROLL-TRIGGERED STICKY BAR — appears after 300px scroll on MOBILE only (desktop has inline CTA)
    useEffect(() => {
        const handleScroll = () => {
            if (stickyDismissed || showWatchAlong) return;
            // Only show sticky bar on mobile screens (< 640px = Tailwind's sm breakpoint)
            if (window.innerWidth >= 640) {
                setShowStickyBar(false);
                return;
            }
            setShowStickyBar(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
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

    const actualScenes = sensitiveScenes || [];
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
        currentRuntime = "181 min (Final Cut)";
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
            className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 mb-2 w-fit rounded-xl border backdrop-blur-md px-4 py-2 sm:py-2.5 shadow-lg relative"
            style={{ backgroundColor: 'rgba(10, 10, 12, 0.8)', borderColor: safetyScoreBorder }}
        >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ backgroundColor: safetyScoreColor }}></div>
            <Shield size={16} style={{ color: safetyScoreColor }} className="hidden sm:block opacity-80" />
            <div className="flex items-center gap-2.5">
                <div className="flex items-center">
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">Family Safety Score:</span>
                </div>
                <span className="text-base sm:text-lg font-black ml-1" style={{ color: safetyScoreColor }}>
                    {movie.safetyScore}/10
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold opacity-90"
                    style={{ color: safetyScoreColor }}>
                    {movie.safetyLabel}
                </span>
                <div className="relative group flex items-center ml-1">
                    <Info size={14} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
                    <div className="absolute top-[150%] right-0 w-64 p-3 bg-[#18181b] border border-gray-600 rounded-lg text-xs text-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999] text-left shadow-[0_10px_40px_rgba(0,0,0,0.8)] leading-relaxed font-normal">
                        The Family Safety Score helps families decide whether to watch a movie together based on explicit content, violence, and profanity.
                        <div className="absolute bottom-full right-[5px] border-[6px] border-transparent border-b-[#18181b]"></div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;

    // 📱 STICKY BOTTOM CTA BAR — rendered via portal so it's always on top, above thumb zone
    const stickyBar = (typeof document !== 'undefined' && showStickyBar && !showWatchAlong && filteredHeavyScenes.length > 0)
        ? createPortal(
            <AnimatePresence>
                <motion.div
                    key="sticky-watch-along"
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 120, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 pt-2 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 60%, transparent)' }}
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
                            <p className="text-gray-400 text-[11px] leading-tight">Auto-alerts you 12 sec before each scene</p>
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
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
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
                                <span className="block">{movie?.Title} Parents Guide (Clean)</span>
                            </h1>
                        </div>
                        {minimalistSafetyBadge}

                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light mt-3 max-w-3xl ml-1">
                            {cleanVariations[textHash % cleanVariations.length]}<span suppressHydrationWarning>{currentRuntime}</span>.
                        </p>
                    </div>

                    {/* 🔥 RECOMMENDED AGE BADGE (Dynamic) */}
                    {recommendedAge && ageSummary && (
                        <motion.div
                            className="my-3 relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:p-4 flex flex-row items-center gap-3 sm:gap-4 shadow-lg w-full"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-500/10 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                                <span className="text-lg sm:text-xl font-bold text-yellow-400 tracking-tight">{recommendedAge}</span>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-[11px] sm:text-xs font-semibold text-gray-300 mb-0.5 uppercase tracking-widest">Recommended Age</h3>
                                <p className="text-xs sm:text-[13px] text-gray-400 leading-snug font-light">{ageSummary}</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col gap-4 sm:gap-6 relative z-50">

                    <div className="space-y-3 w-full">
                        <div className="flex items-start sm:items-center justify-between w-full gap-2">
                            <h1 className="text-xl sm:text-2xl font-light text-gray-200 flex items-start sm:items-center gap-2 sm:gap-3 leading-tight flex-1">
                                <Shield className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 sm:mt-0" />
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
                                        className={`transition-colors sm:w-[18px] sm:h-[18px] mt-1 sm:mt-0 ${showInfo ? 'text-gray-300' : 'text-gray-500 hover:text-gray-300'}`}
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
                                    className="absolute right-0 top-[130%] mt-2 w-[280px] max-w-[90vw] sm:w-72 p-4 bg-[#111113] border border-gray-600/50 rounded-xl text-xs sm:text-sm text-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.9)] z-[100] font-sans tracking-normal leading-relaxed origin-top-right"
                                >
                                    <strong className="text-white block mb-1">100% Manually Verified</strong>
                                    Our editors manually watch and pull exact timestamps directly from the film. We provide these timestamps so parents know exactly what they or their kids are going to see, helping to remove those awkward moments in movie nights.
                                </motion.div>
                            </div>
                        </div>
                        {minimalistSafetyBadge}

                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light mt-3 max-w-3xl ml-1">
                            We provide skip timestamps for <span className="underline font-normal text-gray-200">{movie?.Title}</span> that help parents and families know exactly what to expect before watching. Avoid unexpected surprises or uncomfortable moments that can interrupt your movie experience. With our timestamps, you can simply skip the scenes you want to avoid and enjoy worry-free movie nights. These timestamps serve as an educational utility so that parents can skip scenes while watching with family or kids, or skip content they are personally uncomfortable with.
                        </p>

                        {recommendedAge && ageSummary && (
                            <motion.div
                                className="my-4 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 sm:p-5 flex flex-row items-center gap-4 sm:gap-5 shadow-xl"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

                                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-500/10 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                                    <span className="text-xl sm:text-2xl font-bold text-yellow-400 tracking-tight">{recommendedAge}</span>
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                    <h3 className="text-xs sm:text-sm font-semibold text-gray-300 mb-1 uppercase tracking-widest">Recommended Age</h3>
                                    <p className="text-[13px] sm:text-sm text-gray-400 leading-relaxed font-light">{ageSummary}</p>
                                </div>
                            </motion.div>
                        )}

                        <div className="ml-1 space-y-2.5 sm:space-y-3 mt-2 sm:mt-4">
                            <p className="text-[13px] sm:text-sm text-gray-500 flex items-start sm:items-center gap-2">
                                <CheckCircle size={14} className="text-emerald-500/80 shrink-0 mt-0.5 sm:mt-0" />
                                <span className="leading-snug">Timestamps are accurate for the <span className="text-gray-300 font-medium" suppressHydrationWarning>{currentRuntime}</span></span>
                            </p>

                            <p className="text-[13px] sm:text-sm text-gray-500 flex items-center gap-2">
                                <Film size={14} className="text-indigo-400/80 shrink-0" />
                                <span>Total scenes flagged: <span className="text-gray-300 font-medium">{skipStats.totalScenes}</span></span>
                            </p>

                            <p className="text-[13px] sm:text-sm text-gray-500 flex items-center gap-2">
                                <FastForward size={14} className="text-yellow-500/80 shrink-0" />
                                <span>Total time to skip: <span className="text-gray-300 font-medium">{skipStats.formattedTime}</span></span>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🔥 THE "SHOWER IDEA" VISUAL TIMELINE MAP */}
            {timelineMarkers.length > 0 && (
                <motion.div
                    className="w-full mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                        <h3 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2 m-0">
                            <Film size={14} className="text-yellow-500" /> Parents Guide Tracker
                        </h3>
                        
                        {/* Watch-Along CTA — visible on both mobile & desktop */}
                        <button
                            onClick={handleOpenWatchAlong}
                            className="group relative flex items-center gap-3 bg-[#0d0d0f] border border-white/10 hover:border-yellow-500/40 rounded-xl px-4 py-2.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.12)] overflow-hidden self-start sm:self-auto"
                        >
                            {/* Subtle shimmer on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
                            {/* Left accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-xl bg-yellow-500/0 group-hover:bg-yellow-500/60 transition-colors duration-300" />
                            {/* Live dot */}
                            <div className="relative flex-shrink-0 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-50" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500/80" />
                            </div>
                            {/* Text */}
                            <div className="text-left z-10">
                                <span className="block text-[12px] font-semibold text-gray-200 group-hover:text-white tracking-normal leading-tight transition-colors">Watch-Along Timer</span>
                                <span className="block text-[10px] text-gray-500 group-hover:text-gray-400 leading-tight transition-colors mt-0.5">Alerts you 12 sec before each scene</span>
                            </div>
                            {/* Play icon */}
                            <Play size={12} className="text-gray-500 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all duration-200 z-10 flex-shrink-0" />
                        </button>
                    </div>

                    {/* 🎬 WATCH-ALONG TIMER OVERLAY */}
                    {showWatchAlong && (
                        <WatchAlongTimer
                            movie={movie}
                            sensitiveScenes={sensitiveScenes}
                            onClose={handleCloseWatchAlong}
                        />
                    )}

                    {/* 🔥 SEO SAFE-SEARCH PARENTAL ADVISORY — Only for curated explicit films */}
                    {showExplicitAdvisory && (
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3.5 sm:p-4 mb-5 shadow-lg">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-700"></div>
                            <div className="flex items-start gap-3 ml-1">
                                <AlertOctagon className="text-red-400/80 w-4 h-4 shrink-0 mt-0.5" />
                                <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed font-light">
                                    <span className="text-gray-300 font-medium">Viewer Discretion Advised:</span> This film contains scenes of an extremely explicit nature. Filmiway strongly advises that this film is <span className="text-red-400/90 font-medium">not suitable for family viewing or watching with children</span>. If you choose to watch, use the skip timestamps below to navigate past scenes you may find uncomfortable. These timestamps are provided strictly as an educational utility.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="relative w-full h-2.5 sm:h-3 bg-[#030303] rounded-full border border-white/10 shadow-inner group/track mt-6 sm:mt-8">
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
                    <div className="flex justify-between text-[10px] text-gray-500 mt-4 font-mono font-medium tracking-widest uppercase">
                        <span>00:00</span>
                        <span suppressHydrationWarning>{currentRuntime}</span>
                    </div>
                </motion.div>
            )}

            {/* 🔥 DESKTOP LAYOUT FIX: Desktop ONLY gets the scrollable pane. Mobile remains 100% exactly as it was. */}
            <div className="relative mt-4 sm:mt-6">
                <div className="lg:max-h-[520px] lg:overflow-y-auto lg:overflow-x-hidden lg:pr-1 desktop-timestamp-scroll">
                {/* 🚀 SEO UPGRADE: Changed div to ul for semantic list extraction */}
                <ul className="space-y-2 sm:space-y-2.5 m-0 p-0 list-none timestamp-card-list">
                    {sensitiveData.scenes.map((scene, index) => {
                        const rawStart = scene.start || '';
                        const sceneEnd = scene.end || '';
                        const sceneType = scene.type || scene.description || 'Content Warning';
                        const sceneDescription = scene.description || '';

                        const getSceneIcon = (type) => {
                            const lowerType = type.toLowerCase();
                            if (lowerType.includes('nudity') || lowerType.includes('sex') || lowerType.includes('lingerie') || lowerType.includes('suggestive')) return <Eye size={14} />;
                            if (lowerType.includes('language') || lowerType.includes('profanity')) return <MessageSquare size={14} />;
                            if (lowerType.includes('violence') || lowerType.includes('gore') || lowerType.includes('blood')) return <Flame size={14} />;
                            if (lowerType.includes('kissing')) return <Heart size={14} />;
                            return <AlertTriangle size={14} />;
                        };

                        const severityBadge = scene.severity ? (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-white/10 bg-white/[0.02] group-hover:border-white/20 transition-colors">
                                <div className={`w-1.5 h-1.5 rounded-full ${getSeverityDotColor(scene.severity)}`} />
                                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400 group-hover:text-gray-200 transition-colors">
                                    {scene.severity}
                                </span>
                            </div>
                        ) : null;

                        const isGeneralWarning = rawStart === '' || rawStart.toLowerCase() === 'none';

                        return (
                            <li key={index} className="group rounded-lg sm:rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 p-3.5 pl-5 sm:px-6 sm:py-4" style={{ '--accent-color': getMarkerColorHex(scene.severity) }}>
                                {isGeneralWarning ? (
                                    // 🚀 NEW: Clean Layout for General Warnings (No timestamp, but has data)
                                    <div className="flex items-start gap-3 w-full">
                                        <span className="text-gray-500 group-hover:text-white transition-colors duration-300 mt-[3px] shrink-0">
                                            {getSceneIcon(sceneType)}
                                        </span>
                                        <div className="flex flex-col min-w-0 flex-1 gap-1">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-gray-300 text-[13px] sm:text-sm font-medium break-words whitespace-normal group-hover:text-white transition-colors leading-tight flex flex-wrap items-center gap-1.5 sm:gap-2">
                                                    <span className="text-gray-400 font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-[11px] opacity-80">Content Advisory:</span>
                                                    {sceneType}
                                                </span>
                                                <div className="shrink-0 ml-3">
                                                    {severityBadge}
                                                </div>
                                            </div>
                                            {sceneDescription && sceneDescription !== sceneType && sceneDescription.toLowerCase() !== 'none' && (
                                                <span className="text-[12px] sm:text-[13px] text-gray-400/80 leading-relaxed mt-0.5 break-words whitespace-normal group-hover:text-gray-300 transition-colors">
                                                    {sceneDescription}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    // 🚀 NEW: Action-Oriented Skip Guide Layout for Timestamps (Sleek UI)
                                    <div className="flex flex-col min-w-0 w-full gap-1.5 sm:gap-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-start sm:items-center gap-2.5 min-w-0 flex-1">
                                                <span className="text-gray-500 group-hover:text-white transition-colors duration-300 mt-[1px] sm:mt-0 shrink-0">
                                                    {getSceneIcon(sceneType)}
                                                </span>
                                                <span className="text-gray-300 text-[13px] sm:text-sm font-medium break-words whitespace-normal group-hover:text-white transition-colors leading-tight flex flex-wrap items-center gap-1.5 sm:gap-2">
                                                    <span className="text-gray-400 font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-[11px] opacity-80">Content Advisory:</span>
                                                    {sceneType}
                                                </span>
                                            </div>
                                            <div className="shrink-0 ml-3">
                                                {severityBadge}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 text-gray-400 group-hover:text-gray-200 transition-colors ml-7 sm:ml-8 mt-0.5">
                                            <div className="flex items-center gap-1.5 opacity-90">
                                                <FastForward size={12} className="opacity-70 shrink-0" />
                                                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">Action: Skip</span>
                                            </div>
                                            <span className="opacity-30 mx-0.5 text-[10px]">•</span>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={12} className="opacity-60 shrink-0" />
                                                <span className="font-mono text-[12px] sm:text-[13px] tracking-wide font-medium">
                                                    {rawStart} {sceneEnd && <span className="opacity-40 text-[10px] mx-1">→</span>} {sceneEnd}
                                                </span>
                                            </div>
                                        </div>

                                        {sceneDescription && sceneDescription !== sceneType && sceneDescription.toLowerCase() !== 'none' && (
                                            <div className="ml-7 sm:ml-8 mt-0.5">
                                                <span className="text-[12px] sm:text-[13px] text-gray-400/80 leading-relaxed break-words whitespace-normal group-hover:text-gray-300 transition-colors">
                                                    {sceneDescription}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
                </div>
                {/* 🎨 DESKTOP-ONLY: Subtle bottom fade to hint "scroll for more" — reduced opacity so text stays readable */}
                <div className="hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0a0a0c]/60 to-transparent rounded-b-xl z-10" />
            </div>

            {/* 🔥 ENHANCED ENGAGEMENT FOOTER: Designed for maximum CTR */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-4 sm:pt-5 mt-4">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.15em]">
                    <Shield size={14} className="text-emerald-500/70 shrink-0" />
                    <span className="truncate" suppressHydrationWarning>Manually Verified • {currentRuntime}</span>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-6">
                    {/* Social Proof / Prompt */}
                    <div className="text-xs sm:text-sm text-gray-400">
                        {hasVoted ? (
                            <span className="text-emerald-400/90 font-medium">Thanks for your feedback!</span>
                        ) : helpfulCount > 5 ? (
                            <span><strong className="text-gray-200">{helpfulCount}</strong> found this helpful. You?</span>
                        ) : (
                            <span>Was this guide helpful?</span>
                        )}
                    </div>

                    <motion.button
                        whileHover={!hasVoted && !isVoting ? { scale: 1.05 } : {}}
                        whileTap={!hasVoted && !isVoting ? { scale: 0.95 } : {}}
                        onClick={handleVote}
                        disabled={hasVoted || isVoting}
                        className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-bold border ${hasVoted
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