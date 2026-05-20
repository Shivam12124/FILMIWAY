// components/SensitiveContentTimelineSection.js
import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, Clock, AlertOctagon, Info, Film, FastForward, Eye, Heart, AlertTriangle, ThumbsUp, ThumbsDown, MessageSquare, Flame } from 'lucide-react';
import masterTimestamps from '../utils/masterTimestamps.json';

const COLORS = {
    warningBg: 'rgba(127, 29, 29, 0.15)',
    warningBorder: 'rgba(248, 113, 113, 0.2)',
    textPrimary: '#FFFFFF',
    textSecondary: '#D1D5DB',
    accent: '#F87171',
    safeBg: 'rgba(6, 95, 70, 0.2)',
    safeBorder: 'rgba(52, 211, 153, 0.2)',
};

const SensitiveContentTimelineSection = React.memo(({ movie, sensitiveScenes }) => {
    // --- MOBILE RESPONSIVE TOOLTIP STATE ---
    const [showInfo, setShowInfo] = useState(false);
    const infoRef = useRef(null);

    // --- REAL FIREBASE VOTE STATE ---
    const [helpfulCount, setHelpfulCount] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
    const [isVoting, setIsVoting] = useState(false); // Manages vote submission state

    const movieId = movie?.slug || movie?.tmdbId?.toString(); // Unique identifier for the movie

    const isHeavyScene = useCallback((scene) => {
        const t = scene.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    }, []);

    const filteredHeavyScenes = useMemo(() => {
        return sensitiveScenes.filter(isHeavyScene);
    }, [sensitiveScenes, isHeavyScene]);

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
    let sensitiveData = { scenes: actualScenes }; // Show ALL scenes in the timeline (including violence & gore)
    
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

    if (!sensitiveData?.scenes?.length) {
        return (
            <motion.section 
                className="mb-8"
                initial={{ opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div 
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 rounded-2xl border backdrop-blur-sm flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                    style={{ backgroundColor: COLORS.safeBg, borderColor: COLORS.safeBorder }}
                >
                    <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 self-start sm:self-auto shrink-0">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-emerald-300 font-medium text-base sm:text-lg">{movie?.Title} Parents Guide & Skip Timestamps</h1>
                        </div>
                        <p className="text-emerald-400/70 text-xs sm:text-sm font-light mt-1">
                            <strong>{movie.Title}</strong>: Filmiway editors have manually verified this film is free of explicit sexual content and nudity. Accurate for the {currentRuntime}.
                        </p>
                    </div>
                </div>

                {/* 🔥 RECOMMENDED AGE BADGE (Dynamic) */}
                {recommendedAge && ageSummary && (
                    <motion.div 
                        className="mt-5 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 sm:p-5 flex flex-row items-center gap-4 sm:gap-5 shadow-xl"
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
            </motion.section>
        );
    }

    return (
        <motion.section 
            className="mb-12"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex flex-col mb-5 sm:mb-6 border-b border-white/5 pb-4 sm:pb-5 gap-3 sm:gap-4">
                <div className="space-y-3 w-full">
                    <h1 className="text-xl sm:text-2xl font-light text-red-200 flex items-start sm:items-center gap-2.5 sm:gap-3 tracking-wide">
                        <Shield className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 sm:mt-0" />
                        <span className="leading-snug">{movie?.Title} Parents Guide & Skip Timestamps</span>
                        
                        <div className="relative flex items-center ml-1 shrink-0" ref={infoRef}>
                            <button
                                type="button"
                                className="focus:outline-none p-1 -m-1"
                                onMouseEnter={() => setShowInfo(true)}
                                onMouseLeave={() => setShowInfo(false)}
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
                            
                            <AnimatePresence>
                                {showInfo && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 bottom-[120%] mb-1 w-[280px] max-w-[90vw] sm:w-72 p-3.5 bg-[#0a0a0c] border border-white/10 rounded-xl text-xs text-gray-300 shadow-2xl z-50 font-sans tracking-normal leading-relaxed origin-bottom-right sm:origin-bottom"
                                    >
                                        <strong className="text-white block mb-1">ⓘ Exact Scene Timestamps</strong>
                                        Our Parents Guide provides the exact timestamps for explicit and sexual scenes in the film, verified manually by our editorial team for absolute accuracy.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </h1>

                    {/* 🔥 RECOMMENDED AGE BADGE (Dynamic) */}
                    {recommendedAge && ageSummary && (
                        <motion.div 
                            className="my-5 relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 sm:p-5 flex flex-row items-center gap-4 sm:gap-5 shadow-xl"
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
                    
                    <div className="ml-1 space-y-2.5 sm:space-y-2">
                        <p className="text-[13px] sm:text-sm text-gray-500 flex items-start sm:items-center gap-2">
                            <AlertOctagon size={14} className="text-red-500/80 shrink-0 mt-0.5 sm:mt-0" />
                            <span className="leading-snug">Scenes to skip: <span className="text-gray-300 font-medium">{contentTypes.length > 0 ? contentTypes.join(', ') : 'None (Violence/Language Only)'}</span></span>
                        </p> 
                        
                        <p className="text-[13px] sm:text-sm text-gray-500 flex items-start sm:items-center gap-2">
                            <CheckCircle size={14} className="text-emerald-500/80 shrink-0 mt-0.5 sm:mt-0" />
                            <span className="leading-snug">Timestamps are accurate for the <span className="text-gray-300 font-medium">{currentRuntime}</span></span>
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

            {/* ⚡ SEO CHEAT CODE: HIDDEN HTML TABLE FOR GOOGLE FEATURED SNIPPETS & LLMs */}
            <div className="sr-only" aria-hidden="false">
                <h2>{movie.Title} Recommended Age and Parents Guide Summary</h2>
                {recommendedAge && <p><strong>Age Rating:</strong> {recommendedAge}</p>}
                {ageSummary && <p><strong>Content Summary:</strong> {ageSummary}</p>}
            </div>
            <table className="sr-only" aria-label={`Parents Guide Timestamps for ${movie.Title}`}>
                <caption>Exact skip timestamps and severity ratings for sensitive scenes in {movie.Title} ({currentRuntime})</caption>
                <thead>
                    <tr>
                        <th scope="col">Content Type</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Severity Level</th>
                    </tr>
                </thead>
                <tbody>
                    {sensitiveData.scenes.map((scene, idx) => (
                        <tr key={`seo-table-row-${idx}`}> {/* These scenes are already filtered */}
                            <td>{scene.type || 'Mature Content'}{scene.description && scene.description !== scene.type ? ` - ${scene.description}` : ''}</td>
                            <td>{scene.start || 'N/A'}</td>
                            <td>{scene.end || 'N/A'}</td>
                            <td>{scene.severity || 'Moderate'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div 
                className="rounded-xl overflow-hidden border backdrop-blur-md relative"
                style={{ backgroundColor: 'rgba(10, 10, 12, 0.4)', borderColor: 'rgba(255, 255, 255, 0.08)' }}
            >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600/50 via-orange-600/50 to-transparent opacity-50" />

                <div className="divide-y divide-white/5">
                    {sensitiveData.scenes.map((scene, index) => {
                        const sceneStart = scene.start || '';
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

                        return (
                            <div key={index} className="group p-3.5 sm:px-5 sm:py-3.5 hover:bg-white/[0.03] transition-colors duration-200 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
                                <div className={`flex items-center ${sceneStart ? 'justify-between' : 'justify-end'} sm:justify-start w-full sm:w-auto gap-3`}>
                                    {sceneStart && (
                                        <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-gray-200 transition-colors shrink-0">
                                            <Clock size={13} className="opacity-50 shrink-0" />
                                            <span className="font-mono text-[13px] sm:text-sm tracking-wide">
                                                {sceneStart} {sceneEnd && <span className="opacity-40 text-xs mx-0.5 sm:mx-1">→</span>} {sceneEnd}
                                            </span>
                                        </div>
                                    )}
                                    <div className="sm:hidden shrink-0">
                                        {severityBadge}
                                    </div>
                                </div>
                                
                                {sceneStart && <div className="hidden sm:block w-px h-4 bg-white/10 shrink-0" />}

                                <div className="flex items-start gap-2.5 min-w-0 flex-1">
                                    <span className="text-gray-500 group-hover:text-white transition-colors duration-300 mt-[3px] shrink-0">
                                        {getSceneIcon(sceneType)}
                                    </span>
                                    <div className="flex flex-col min-w-0 w-full">
                                        <span className="text-gray-300 text-[13px] sm:text-sm font-medium truncate group-hover:text-white transition-colors">
                                            {sceneType}
                                        </span>
                                        {sceneDescription && sceneDescription !== sceneType && (
                                            <span className="text-[12px] sm:text-[13px] text-gray-400/90 leading-snug mt-0.5 break-words whitespace-normal group-hover:text-gray-300 transition-colors">
                                                {sceneDescription}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="hidden sm:block shrink-0 ml-auto">
                                    {severityBadge}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 🔥 ENHANCED ENGAGEMENT FOOTER: Designed for maximum CTR */}
                <div className="bg-black/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 rounded-b-xl">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.15em]">
                        <Shield size={14} className="text-emerald-500/70 shrink-0" />
                        <span className="truncate">Manually Verified • {currentRuntime}</span>
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
                            className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-bold border ${
                                hasVoted 
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
            </div>
        </motion.section>
    );
});

SensitiveContentTimelineSection.displayName = 'SensitiveContentTimelineSection';

export default SensitiveContentTimelineSection;