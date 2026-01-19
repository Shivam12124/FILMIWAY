// components/SensitiveContentTimelineSection.js - SEO PERFECTED (ALL H2s) 🏆
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, Clock, AlertOctagon } from 'lucide-react';

// Import formatting functions from BOTH data sources
import { formatSensitiveTimeline as formatInceptionTimeline, getSensitiveContentTypes as getInceptionContentTypes } from '../utils/movieData';
import { formatSensitiveTimeline as formatSurvivalTimeline, getSensitiveContentTypes as getSurvivalContentTypes } from '../utils/survivalMovieData';

const COLORS = {
  warningBg: 'rgba(127, 29, 29, 0.15)', // Deep Red Fade
  warningBorder: 'rgba(248, 113, 113, 0.2)', // Soft Red Border
  textPrimary: '#FFFFFF',
  textSecondary: '#D1D5DB',
  accent: '#F87171', // Soft Red
  safeBg: 'rgba(6, 95, 70, 0.2)', // Deep Green Fade
  safeBorder: 'rgba(52, 211, 153, 0.2)', // Soft Green Border
};

const SensitiveContentTimelineSection = React.memo(({ movie, sensitiveScenes }) => {
    
    // 🔥 PRIORITY: Use passed sensitiveScenes first (from drama collection), then fallback to inception/survival
    let sensitiveData = null;
    let contentTypes = [];

    // Step 1: Check if sensitiveScenes prop exists and has data (drama movies)
    if (sensitiveScenes && sensitiveScenes.length > 0) {
        sensitiveData = { scenes: sensitiveScenes };
        contentTypes = [...new Set(sensitiveScenes.map(scene => {
            const lowerType = scene.description?.toLowerCase() || '';
            if (lowerType.includes('nudity') || lowerType.includes('sex')) return 'Nudity/Sexual Content';
            if (lowerType.includes('kissing')) return 'Kissing';
            if (lowerType.includes('suggestive')) return 'Suggestive Content';
            if (lowerType.includes('violence')) return 'Violence';
            if (lowerType.includes('language')) return 'Strong Language';
            return 'Mature Content';
        }))];
    } else {
        // Step 2: Fallback to existing inception/survival data
        const inceptionData = formatInceptionTimeline?.(movie.tmdbId);
        const survivalData = formatSurvivalTimeline?.(movie.tmdbId);
        sensitiveData = inceptionData || survivalData;
        
        contentTypes = inceptionData 
            ? (getInceptionContentTypes?.(movie.tmdbId) || [])
            : (getSurvivalContentTypes?.(movie.tmdbId) || []);
    }

    // ✅ CASE 1: NO SENSITIVE CONTENT (Safe Movie)
    if (!sensitiveData?.scenes?.length) {
        return (
            <motion.section 
                className="mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div 
                    className="w-full px-6 py-5 rounded-2xl border backdrop-blur-sm flex items-center gap-4"
                    style={{ 
                        backgroundColor: COLORS.safeBg, 
                        borderColor: COLORS.safeBorder 
                    }}
                >
                    <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        {/* ✅ SEO FIX: Changed H3 to H2 for correct hierarchy */}
                        <h2 className="text-emerald-300 font-medium text-lg">Clean Content Record</h2>
                        <p className="text-emerald-400/70 text-sm font-light">
                            <strong>{movie.Title}</strong>: Content is free of sexual content and explicit scenes.
                        </p>
                    </div>
                </div>
            </motion.section>
        );
    }

    // ✅ CASE 2: HAS SENSITIVE CONTENT (Cinematic List)
    return (
        <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-end justify-between mb-6 border-b border-white/5 pb-4">
                <div>
                    {/* ✅ SEO CONFIRMED: This is H2 */}
                    <h2 className="text-2xl font-light text-red-200 flex items-center gap-3 tracking-wide">
                        <Shield className="text-red-500 w-6 h-6" />
                        Content Advisory
                    </h2>
                    <p className="text-sm text-gray-500 mt-1.5 ml-1">
                        Contains: <span className="text-gray-400 font-medium">{contentTypes.length > 0 ? contentTypes.join(', ') : 'Mature Themes'}</span>
                    </p>
                </div>
            </div>

            {/* 🔥 MODERN LIST DESIGN */}
            <div 
                className="rounded-2xl overflow-hidden border backdrop-blur-md relative"
                style={{ 
                    backgroundColor: 'rgba(10, 10, 12, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.08)'
                }}
            >
                {/* Header Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/50 via-orange-600/50 to-transparent opacity-50" />

                <div className="divide-y divide-white/5">
                    {sensitiveData.scenes.map((scene, index) => {
                        const sceneStart = scene.start || '';
                        const sceneEnd = scene.end || '';
                        const sceneType = scene.type || scene.description || 'Content Warning';
                        const sceneDescription = scene.description || '';

                        const getSceneIcon = (type) => {
                            const lowerType = type.toLowerCase();
                            if (lowerType.includes('nudity') || lowerType.includes('sex')) return '🔞';
                            if (lowerType.includes('kissing')) return '💋';
                            if (lowerType.includes('violence') || lowerType.includes('blood')) return '⚔️';
                            if (lowerType.includes('language')) return '🤬';
                            return '⚠️';
                        };

                        return (
                            <div 
                                key={index} 
                                className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 hover:bg-white/[0.03] transition-colors duration-300"
                            >
                                {/* Digital Clock Style Timestamp */}
                                <div className="flex items-center gap-2 min-w-[140px] pt-1">
                                    <div className="p-1.5 rounded-md bg-white/5 text-gray-400 group-hover:text-yellow-500 transition-colors">
                                        <Clock size={14} />
                                    </div>
                                    <span className="font-mono text-gray-300 text-sm tracking-wider font-medium group-hover:text-yellow-400 transition-colors">
                                        {sceneStart} {sceneEnd && <span className="opacity-50 mx-1">→</span>} {sceneEnd}
                                    </span>
                                </div>
                                
                                {/* Content Detail */}
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

                                        {/* Modern Severity Badge */}
                                        {scene.severity && (
                                            <span className={`
                                                px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-lg backdrop-blur-md
                                                ${scene.severity.toLowerCase() === 'high' || scene.severity.toLowerCase() === 'extreme' 
                                                    ? 'bg-red-500/10 text-red-400 border-red-500/20 shadow-red-900/10' 
                                                    : 'bg-yellow-500/10 text-yellow-500/80 border-yellow-500/20 shadow-yellow-900/10'}
                                            `}>
                                                {scene.severity}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Warning */}
                <div className="bg-black/30 p-3 flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                    <AlertOctagon size={10} />
                    <span>Viewer Discretion Advised</span>
                </div>
            </div>
        </motion.section>
    );
});

SensitiveContentTimelineSection.displayName = 'SensitiveContentTimelineSection';

export default SensitiveContentTimelineSection;