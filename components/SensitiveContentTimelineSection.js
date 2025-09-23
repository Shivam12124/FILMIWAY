// components/SensitiveContentTimelineSection.js - RED BUTTON FOR USER ATTENTION
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, Eye, X } from 'lucide-react';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../utils/sensitiveContent';

const SensitiveContentTimelineSection = React.memo(({ movie }) => {
    const [showSensitiveOverlay, setShowSensitiveOverlay] = useState(false);
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);

    if (!sensitiveData?.scenes?.length) {
        return (
            <motion.section 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                    <Shield size={14} className="sm:w-4 sm:h-4" />
                    Sensitive Content Timeline
                </h3>
                <motion.div
                    className="w-full bg-green-500/20 text-green-300 border border-green-500/50 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm font-light tracking-wide flex items-center justify-center gap-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                    <span><strong>{movie.Title}</strong> does not contain any sensitive scenes - Family Friendly Content</span>
                </motion.div>
            </motion.section>
        );
    }

    return (
        <motion.section 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                Sensitive Content Timeline
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                ⚠️ Content guide for parents and sensitive viewers. Click below to view detailed timestamps and scene descriptions.
            </p>
            
            {/* 🔥 RED BUTTON INSTEAD OF AMBER FOR USER ATTENTION */}
            <motion.button
                onClick={() => setShowSensitiveOverlay(true)}
                className="w-full bg-red-600/30 text-red-200 border border-red-500/60 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-sm font-medium tracking-wide hover:bg-red-600/40 transition-all duration-300 flex items-center justify-between group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="flex items-center gap-2 sm:gap-3">
                    <AlertTriangle size={16} className="sm:w-5 sm:h-5 group-hover:animate-pulse text-red-300" />
                    <div className="text-left">
                        <div className="font-semibold text-sm sm:text-base text-red-100">
                            🔴 Mature Content Found ({sensitiveData.scenes.length} scenes)
                        </div>
                        <div className="text-xs opacity-80 text-red-200">
                            Contains: {contentTypes ? contentTypes.join(', ') : 'adult themes'}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Eye size={14} className="sm:w-4 sm:h-4" />
                    <span className="text-xs">View Timeline</span>
                </div>
            </motion.button>

            {/* Sensitive Scenes Overlay */}
            <AnimatePresence>
                {showSensitiveOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-[100] p-4"
                        onClick={() => setShowSensitiveOverlay(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: -50, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-yellow-500/20 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-4 sm:p-8 relative flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                onClick={() => setShowSensitiveOverlay(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={20} className="sm:w-6 sm:h-6" />
                            </motion.button>
                            
                            <div className="text-center mb-4 sm:mb-6">
                                <h3 className="text-xl sm:text-2xl font-light text-yellow-300 tracking-wide mb-1">🎬 Sensitive Content Timeline</h3>
                                <p className="text-xs sm:text-sm text-gray-400">({sensitiveData.scenes.length} scenes found in "{movie.Title}")</p>
                                {/* Disclaimer for Donnie Darko */}
                                {movie.tmdbId === 141 && (
                                    <p className="text-xs text-white mt-2 px-3 py-1 bg-gray-700/50 rounded-lg border border-gray-600/30">
                                        ⚠️ TIMESTAMP CAN VARIES AS IT IS FROM DVD EDITION NOT FROM DIRECTOR'S CUT
                                    </p>
                                )}
                            </div>

                            <div className="border-t border-b border-gray-700/50 my-3 sm:my-4 py-3 sm:py-4 space-y-2 sm:space-y-3 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-2">
                                {sensitiveData.scenes.map((scene, index) => {
                                    const formatTime = (seconds) => {
                                        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
                                        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
                                        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
                                        return `${h}:${m}:${s}`;
                                    };
                                    
                                    const getSceneIcon = (type) => {
                                        const lowerType = type.toLowerCase();
                                        if (lowerType.includes('nudity') || lowerType.includes('sex')) return '🔞';
                                        if (lowerType.includes('kissing')) return '💋';
                                        if (lowerType.includes('violence')) return '⚔️';
                                        if (lowerType.includes('language')) return '🤬';
                                        return '⚠️';
                                    };

                                    return (
                                        <motion.div
                                            key={index}
                                            className="flex items-center text-gray-200 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <span className="text-base sm:text-xl mr-3 sm:mr-4">{getSceneIcon(scene.type)}</span>
                                            <span className="font-mono text-yellow-400/90 text-xs sm:text-sm mr-2 sm:mr-4 w-24 sm:w-32">{formatTime(scene.start)} - {formatTime(scene.end)}</span>
                                            <span className="text-xs sm:text-sm font-light flex-1 capitalize">{scene.type}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <div className="mt-4 sm:mt-6 flex justify-center">
                                <motion.button
                                    onClick={() => setShowSensitiveOverlay(false)}
                                    className="bg-yellow-500/20 text-yellow-200 border border-yellow-400/50 px-6 py-2 sm:px-10 sm:py-3 rounded-lg text-xs sm:text-sm font-light tracking-wide hover:bg-yellow-500/30 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Close Timeline
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
});

SensitiveContentTimelineSection.displayName = 'SensitiveContentTimelineSection';

export default SensitiveContentTimelineSection;
