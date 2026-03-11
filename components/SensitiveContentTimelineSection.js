import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, AlertOctagon, Info, Film, FastForward } from 'lucide-react';

// Import formatting functions from BOTH data sources
import { formatSensitiveTimeline as formatInceptionTimeline, getSensitiveContentTypes as getInceptionContentTypes } from '../utils/movieData';
import { formatSensitiveTimeline as formatSurvivalTimeline, getSensitiveContentTypes as getSurvivalContentTypes } from '../utils/survivalMovieData';

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
    
    // ✅ HELPER: Extract EXACT types entered by the editor, removing duplicates
    const extractExactTypes = (scenes) => {
        if (!scenes) return [];
        const types = scenes
            .map(scene => scene.type) // Pulls the exact tag (e.g., "Lingerie", "Nudity")
            .filter(Boolean); // Strips out empty values
        return [...new Set(types)]; // Removes duplicates
    };

    // 🔥 PRIORITY: Use passed sensitiveScenes first, then fallback
    let sensitiveData = null;
    let contentTypes = [];

    if (sensitiveScenes && sensitiveScenes.length > 0) {
        sensitiveData = { scenes: sensitiveScenes };
        contentTypes = extractExactTypes(sensitiveScenes);
    } else {
        const inceptionData = formatInceptionTimeline?.(movie.tmdbId);
        const survivalData = formatSurvivalTimeline?.(movie.tmdbId);
        sensitiveData = inceptionData || survivalData;
        
        let predefinedTypes = inceptionData 
            ? (getInceptionContentTypes?.(movie.tmdbId) || [])
            : (getSurvivalContentTypes?.(movie.tmdbId) || []);
            
        // Fallback to extracting exact types if predefined ones are missing
        contentTypes = predefinedTypes.length > 0 
            ? predefinedTypes 
            : extractExactTypes(sensitiveData?.scenes);
    }

    // ✅ DYNAMIC RUNTIME SYNC: Formatting the runtime cleanly for the UI
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;
    if (movie.tmdbId === 51876 && !currentRuntime.includes("Unrated")) {
        currentRuntime += " (Unrated Version)"; // Specifically catching Limitless
    }

    // ✅ NEW HELPER: Color coding for all severity levels
    const getSeverityStyles = (severity) => {
        if (!severity) return '';
        const s = severity.toLowerCase();
        if (s === 'extreme' || s === 'severe') {
            return 'bg-red-600/10 text-red-500 border-red-600/30 shadow-red-900/20';
        }
        if (s === 'high') {
            return 'bg-red-500/10 text-red-400 border-red-500/20 shadow-red-900/10';
        }
        if (s === 'moderate') {
            return 'bg-yellow-500/10 text-yellow-500/80 border-yellow-500/20 shadow-yellow-900/10';
        }
        if (s === 'mild') {
            return 'bg-emerald-500/10 text-emerald-400/80 border-emerald-500/20 shadow-emerald-900/10';
        }
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20 shadow-gray-900/10';
    };

    // ✅ NEW HELPER: Calculate total skip time from all scenes
    const skipStats = useMemo(() => {
        if (!sensitiveData?.scenes?.length) return { totalScenes: 0, formattedTime: "0 sec" };

        let totalSeconds = 0;
        
        sensitiveData.scenes.forEach(scene => {
            if (scene.start && scene.end) {
                const parseTime = (t) => {
                    const parts = t.split(':').map(Number);
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

        return {
            totalScenes: sensitiveData.scenes.length,
            formattedTime
        };
    }, [sensitiveData]);


    if (!sensitiveData?.scenes?.length) {
        return (
            <motion.section 
                className="mb-8"
                initial={{ opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div 
                    className="w-full px-6 py-5 rounded-2xl border backdrop-blur-sm flex items-center gap-4"
                    style={{ backgroundColor: COLORS.safeBg, borderColor: COLORS.safeBorder }}
                >
                    <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-emerald-300 font-medium text-lg">Timestamps & Parents Guide</h2>
                            <div className="group relative flex items-center">
                                <Info size={16} className="text-emerald-500/60 cursor-help hover:text-emerald-400 transition-colors" />
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-72 p-3 bg-gray-900 border border-emerald-500/30 rounded-xl text-xs text-emerald-100 shadow-xl z-10 tracking-normal">
                                    Filmiway timestamps are added manually by our editorial team by watching the entire film to ensure absolute accuracy.
                                </div>
                            </div>
                        </div>
                        <p className="text-emerald-400/70 text-sm font-light mt-1">
                            <strong>{movie.Title}</strong>: Filmiway editors have manually verified this film is free of explicit sexual content and nudity. Accurate for the {currentRuntime} runtime.
                        </p>
                    </div>
                </div>
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
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-white/5 pb-5 gap-4">
                <div className="space-y-3 w-full">
                    <h2 className="text-2xl font-light text-red-200 flex items-center gap-3 tracking-wide">
                        <Shield className="text-red-500 w-6 h-6" />
                        Timestamps & Parents Guide
                        <div className="group relative flex items-center ml-1">
                            <Info size={18} className="text-gray-500 hover:text-gray-300 cursor-help transition-colors" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden group-hover:block w-72 p-3 bg-[#0a0a0c] border border-white/10 rounded-xl text-xs text-gray-300 shadow-2xl z-10 font-sans tracking-normal leading-relaxed">
                                <strong className="text-white block mb-1">ⓘ How we verify timestamps</strong>
                                Filmiway timestamps are added manually by our editorial team by watching the entire film to ensure absolute accuracy.
                            </div>
                        </div>
                    </h2>
                    
                    <div className="ml-1 space-y-2">
                        {/* ✅ NOW DISPLAYS EXACT TYPES ENTERED BY EDITORS */}
                        <p className="text-sm text-gray-500 flex items-center gap-1.5">
                            <AlertOctagon size={14} className="text-red-500/80" />
                            Scenes to skip: <span className="text-gray-300 font-medium">{contentTypes.length > 0 ? contentTypes.join(', ') : 'Explicit Content'}</span>
                        </p>
                        
                        <p className="text-sm text-gray-500 flex items-center gap-1.5">
                            <CheckCircle size={14} className="text-emerald-500/80" />
                            Timestamps are accurate for the <span className="text-gray-300 font-medium">{currentRuntime}</span> runtime
                        </p>

                        <p className="text-sm text-gray-500 flex items-center gap-1.5">
                            <Film size={14} className="text-indigo-400/80" />
                            Total scenes flagged: <span className="text-gray-300 font-medium">{skipStats.totalScenes}</span>
                        </p>
                        
                        <p className="text-sm text-gray-500 flex items-center gap-1.5">
                            <FastForward size={14} className="text-yellow-500/80" />
                            Total time to skip: <span className="text-gray-300 font-medium">{skipStats.formattedTime}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div 
                className="rounded-2xl overflow-hidden border backdrop-blur-md relative"
                style={{ backgroundColor: 'rgba(10, 10, 12, 0.4)', borderColor: 'rgba(255, 255, 255, 0.08)' }}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/50 via-orange-600/50 to-transparent opacity-50" />

                <div className="divide-y divide-white/5">
                    {sensitiveData.scenes.map((scene, index) => {
                        const sceneStart = scene.start || '';
                        const sceneEnd = scene.end || '';
                        const sceneType = scene.type || scene.description || 'Content Warning';
                        const sceneDescription = scene.description || '';

                        const getSceneIcon = (type) => {
                            const lowerType = type.toLowerCase();
                            if (lowerType.includes('nudity') || lowerType.includes('sex') || lowerType.includes('lingerie') || lowerType.includes('suggestive')) return '👁️';
                            if (lowerType.includes('kissing')) return '💋';
                            if (lowerType.includes('violence') || lowerType.includes('blood')) return '⚔️';
                            if (lowerType.includes('language')) return '🤬';
                            return '⚠️';
                        };

                        return (
                            <div key={index} className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 hover:bg-white/[0.03] transition-colors duration-300">
                                <div className="flex items-center gap-2 min-w-[140px] pt-1">
                                    <div className="p-1.5 rounded-md bg-white/5 text-gray-400 group-hover:text-yellow-500 transition-colors">
                                        <Clock size={14} />
                                    </div>
                                    <span className="font-mono text-gray-300 text-sm tracking-wider font-medium group-hover:text-yellow-400 transition-colors">
                                        {sceneStart} {sceneEnd && <span className="opacity-50 mx-1">→</span>} {sceneEnd}
                                    </span>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="text-xl mt-[-2px] grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" role="img" aria-label="icon">
                                                {getSceneIcon(sceneType)}
                                            </span>
                                            <div>
                                                <span className="text-gray-200 text-base font-medium block leading-tight group-hover:text-white transition-colors">
                                                    {sceneType}
                                                </span>
                                                {sceneDescription && sceneDescription !== sceneType && (
                                                    <span className="text-xs text-gray-500 block mt-1.5 leading-relaxed max-w-xl">
                                                        {sceneDescription}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {scene.severity && (
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-lg backdrop-blur-md ${getSeverityStyles(scene.severity)}`}>
                                                {scene.severity}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-black/40 p-3.5 flex items-center justify-center gap-2.5 text-[10px] text-gray-400 uppercase tracking-[0.2em] border-t border-white/5">
                    <Shield size={12} className="text-emerald-500/70" />
                    <span>Parents Guide • Manually Verified by the Filmiway Editorial Team</span>
                </div>
            </div>
        </motion.section>
    );
});

SensitiveContentTimelineSection.displayName = 'SensitiveContentTimelineSection';

export default SensitiveContentTimelineSection;