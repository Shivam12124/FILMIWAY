// components/StaticMovieDetails.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Star, Crown, Award, Brain, Users, Film, Shield, CheckCircle, 
    AlertTriangle, Info, Eye, X, TrendingUp, BarChart3, Home 
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { 
    COMPLETE_MOVIE_DATA, 
    SENSITIVE_TIMELINES, 
    STRATEGIC_QUOTES, 
    CINEMATIC_COLORS,
    FALLBACK_POSTERS,
    generateFAQData,
    getSensitiveContentTypes
} from '../../lib/movieData';
import Link from 'next/link';

const StaticMovieDetails = ({ movie }) => {
    const [showSensitiveOverlay, setShowSensitiveOverlay] = useState(false);
    
    if (!movie) return null;

    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    const faqs = generateFAQData(movie);

    // Back to Collection Button
    const BackToCollectionButton = () => (
        <motion.div
            className="fixed top-3 left-3 sm:top-4 sm:left-4 z-[60]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <Link href="/">
                <motion.button
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Home size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Back to Collection</span>
                    <span className="sm:hidden">Back</span>
                </motion.button>
            </Link>
        </motion.div>
    );

    // Complexity Score Component
    const ComplexityScoreSection = () => {
        const getComplexityColor = (level) => {
            switch(level) {
                case "EXTREME": return "#dc2626";
                case "HIGH": return "#ea580c";
                case "MEDIUM": return "#16a34a";
                default: return "#6b7280";
            }
        };
        
        const getComplexityIcon = (level) => {
            switch(level) {
                case "EXTREME": return <Crown className="w-6 h-6 sm:w-8 sm:h-8" />;
                case "HIGH": return <Award className="w-6 h-6 sm:w-8 sm:h-8" />;
                case "MEDIUM": return <Star className="w-6 h-6 sm:w-8 sm:h-8" />;
                default: return <Brain className="w-6 h-6 sm:w-8 sm:h-8" />;
            }
        };

        return (
            <motion.div 
                className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden" 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8 }} 
                whileHover={{ scale: 1.01 }}
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <h4 className="text-xl sm:text-2xl font-light text-gray-100 flex items-center gap-3 sm:gap-4 tracking-wide">
                            <motion.div 
                                style={{ color: getComplexityColor(movieInfo.complexityLevel) }} 
                                animate={{ rotate: 360 }} 
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                {getComplexityIcon(movieInfo.complexityLevel)}
                            </motion.div>
                            COMPLEXITY SCORE
                        </h4>
                    </div>
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center w-full sm:w-auto">
                        <div>
                            <motion.div 
                                className="text-2xl sm:text-3xl font-extralight mb-1 tracking-wider text-gray-200" 
                                animate={{ 
                                    textShadow: [
                                        `0 0 0px ${getComplexityColor(movieInfo.complexityLevel)}00`, 
                                        `0 0 20px ${getComplexityColor(movieInfo.complexityLevel)}40`, 
                                        `0 0 0px ${getComplexityColor(movieInfo.complexityLevel)}00`
                                    ] 
                                }} 
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                {movieInfo.mindBendingIndex}
                            </motion.div>
                            <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                                Mind-Bending Index
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-extralight mb-1 tracking-wider text-gray-200">
                                {movieInfo.rating}
                            </div>
                            <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                                IMDb Rating
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-extralight mb-1 tracking-wider text-gray-200">
                                {movieInfo.criticsScore}%
                            </div>
                            <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                                Critics Score
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <span className="text-sm text-gray-300 font-light tracking-wider uppercase">
                                Cognitive Distortion Level
                            </span>
                            <span 
                                className="text-sm font-light px-3 py-1 sm:px-4 sm:py-2 rounded-lg border backdrop-blur-sm tracking-wider uppercase" 
                                style={{ 
                                    color: getComplexityColor(movieInfo.complexityLevel), 
                                    borderColor: getComplexityColor(movieInfo.complexityLevel), 
                                    backgroundColor: `${getComplexityColor(movieInfo.complexityLevel)}15` 
                                }}
                            >
                                {movieInfo.complexityLevel}
                            </span>
                        </div>
                        <div className="relative">
                            <div className="w-full h-2 sm:h-3 bg-gray-800/60 rounded-full overflow-hidden border border-gray-700/50">
                                <motion.div 
                                    className="h-full rounded-full relative" 
                                    style={{ backgroundColor: getComplexityColor(movieInfo.complexityLevel) }} 
                                    initial={{ width: 0 }} 
                                    animate={{ width: `${movieInfo.mindBendingIndex}%` }} 
                                    transition={{ duration: 2.5, ease: "easeOut" }}
                                >
                                    <motion.div 
                                        className="absolute inset-0 bg-white/20 rounded-full" 
                                        animate={{ x: ['-100%', '100%'] }} 
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Intensity Graph Component
    const IntensityGraph = () => {
        if (!movieInfo.scenes || movieInfo.scenes.length === 0) return null;

        const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
                return (
                    <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-2 sm:p-4 backdrop-blur-sm shadow-xl">
                        <p className="text-yellow-400 font-medium text-xs sm:text-sm">{payload[0].payload.label}</p>
                        <p className="text-gray-300 text-xs sm:text-sm">Time: {label}%</p>
                        <p className="text-gray-300 text-xs sm:text-sm">Intensity: {payload[0].value}%</p>
                    </div>
                );
            }
            return null;
        };

        return (
            <motion.div 
                className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div 
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 gap-2 sm:gap-0"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h4 className="text-lg sm:text-2xl font-light text-gray-100 flex items-center gap-2 sm:gap-4 tracking-wide">
                        <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="text-xl sm:text-3xl"
                        >
                            📊
                        </motion.div>
                        INTENSITY TIMELINE
                    </h4>
                    <div className="text-xs text-gray-400 flex items-center gap-2 sm:gap-3 tracking-wider uppercase">
                        <TrendingUp size={12} className="sm:w-4 sm:h-4" />
                        Narrative Analysis
                    </div>
                </motion.div>

                <div className="h-48 sm:h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={movieInfo.scenes} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                            <defs>
                                <linearGradient id={`intensityGradient-${movieInfo.dominantColor}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={movieInfo.dominantColor} stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor={movieInfo.dominantColor} stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                            <XAxis 
                                dataKey="time" 
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9CA3AF', fontSize: 10 }}
                                domain={['dataMin', 'dataMax']}
                            />
                            <YAxis 
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9CA3AF', fontSize: 10 }}
                                domain={[0, 100]}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="intensity"
                                stroke={movieInfo.dominantColor}
                                strokeWidth={2}
                                fill={`url(#intensityGradient-${movieInfo.dominantColor})`}
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Peak Labels */}
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {movieInfo.scenes.map((scene, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1 bg-gray-700/50 rounded-full text-xs border border-gray-600/50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 1.5 }}
                        >
                            <div 
                                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-white/50" 
                                style={{ backgroundColor: scene.color }}
                            />
                            <span className="text-gray-300 font-medium">{scene.label}</span>
                            <span className="text-gray-400">({scene.intensity}%)</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        );
    };

    // Sensitive Content Timeline Section
    const SensitiveContentSection = () => {
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
                
                <motion.button
                    onClick={() => setShowSensitiveOverlay(true)}
                    className="w-full bg-amber-500/20 text-amber-300 border border-amber-500/50 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-sm font-medium tracking-wide hover:bg-amber-500/30 transition-all duration-300 flex items-center justify-between group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex items-center gap-2 sm:gap-3">
                        <AlertTriangle size={16} className="sm:w-5 sm:h-5 group-hover:animate-pulse" />
                        <div className="text-left">
                            <div className="font-semibold text-sm sm:text-base">
                                Mature Content Found ({sensitiveData.scenes.length} scenes)
                            </div>
                            <div className="text-xs opacity-80">
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
                                    {movie.tmdbId === 141 && (
                                        <p className="text-xs text-white mt-2 px-3 py-1 bg-gray-700/50 rounded-lg border border-gray-600/30">
                                            *TIMESTAMP CAN VARIES AS IT IS FROM DVD EDITION NOT FROM DIRECTOR'S CUT
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
                                            if (lowerType.includes('nudity') || lowerType.includes('sex')) return '🔴';
                                            if (lowerType.includes('kissing')) return '💋';
                                            if (lowerType.includes('violence')) return '🗡️';
                                            if (lowerType.includes('language')) return '💬';
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
    };

    // FAQ Section
    const FAQSection = () => (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie.Title} and how it compares to other mind-bending films like Inception.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-2 sm:mb-3">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-black" />
                <div 
                    className="absolute inset-0 opacity-[0.006]"
                    style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, 
                        backgroundSize: '600px 600px' 
                    }} 
                />
                <div 
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.5) 100%)' }} 
                />
            </div>

            <BackToCollectionButton />

            <div className="relative z-10">
                <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-8 sm:mb-16 space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {movie.Title} ({movie.year}) - Like Inception
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base">
                            <span>Directed by {movieInfo.director}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{movie.genre}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{movie.runtime} min</span>
                        </div>
                        <p className="text-lg sm:text-xl text-yellow-400/90 font-light tracking-wide italic max-w-2xl mx-auto">
                            "{STRATEGIC_QUOTES[movie.tmdbId]}"
                        </p>
                        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
                            {movieInfo.seoDescription}
                        </p>
                    </motion.div>

                    {/* Cast & Director Info */}
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                            <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                                <Users size={16} className="sm:w-[18px] sm:h-[18px]" />
                                Director & Cast
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <span className="text-gray-400 text-sm">Directed by:</span>
                                    <p className="text-gray-200 font-medium">{movieInfo.director}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">Starring:</span>
                                    <p className="text-gray-200 text-sm sm:text-base">{movieInfo.cast?.join(', ')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                            <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                                <Film size={16} className="sm:w-[18px] sm:h-[18px]" />
                                Production Details
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <span className="text-gray-400 text-sm">Box Office:</span>
                                    <p className="text-gray-200 font-medium">{movieInfo.boxOffice}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">Budget:</span>
                                    <p className="text-gray-200">{movieInfo.budget}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Synopsis */}
                    <motion.div 
                        className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border-l-4 border-yellow-400 mb-8 sm:mb-12"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                            <strong className="text-yellow-400">{movie.Title}</strong> is a {movie.genre.toLowerCase()} film from {movie.year} 
                            directed by {movieInfo.director}. With a mind-bending complexity score of{' '}
                            <strong className="text-yellow-400">{movieInfo.mindBendingIndex}/100</strong>, this{' '}
                            {movieInfo.complexityLevel.toLowerCase()} complexity film offers{' '}
                            {movieInfo.synopsis}
                        </p>
                        
                        <p className="text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                            <strong>Genre Composition:</strong> {movieInfo.genreComposition}
                        </p>
                        
                        <p className="text-gray-300 mt-2 leading-relaxed text-sm sm:text-base">
                            <strong>Intensity Peak:</strong> {movieInfo.intensityPeak}
                        </p>
                    </motion.div>

                    {/* Sensitive Content Timeline */}
                    <SensitiveContentSection />

                    {/* Complexity Score */}
                    <ComplexityScoreSection />

                    {/* Intensity Graph */}
                    <IntensityGraph />

                    {/* FAQ Section */}
                    <FAQSection />
                </div>
            </div>
        </div>
    );
};

export default StaticMovieDetails;
