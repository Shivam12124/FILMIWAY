// components/MovieDetailsSection.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Film, Shield, CheckCircle, AlertTriangle, Eye, X, Star, Crown, Award, Brain } from 'lucide-react';
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES, RATING_OPTIONS } from '../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../utils/sensitiveContent';
import EnhancedIntensityGraph from './EnhancedIntensityGraph';
import StrategicDNAHelix from './StrategicDNAHelix';
import EnhancedWhereToWatchSection from './EnhancedWhereToWatchSection';
import SensitiveContentTimelineSection from './SensitiveContentTimelineSection';
import RealCommentsRatingSection from './RealCommentsRatingSection';
import SEOFAQSection from './SEOFAQSection';

const MovieDetailsSection = React.memo(({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];

    if (!movie || !movieInfo) return null;

    // Mind Bending Index Component
    const StrategicMindBendingIndex = () => {
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
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 border-yellow-400/40"></div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 border-yellow-400/40"></div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 border-yellow-400/40"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 border-yellow-400/40"></div>
                
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
                            <div className="absolute -top-1 sm:-top-2 left-0 w-full flex justify-between">
                                {[25, 50, 75].map(mark => (
                                    <div 
                                        key={mark} 
                                        className="w-0.5 sm:w-1 h-4 sm:h-7 bg-yellow-400/30 rounded-full" 
                                        style={{ left: `${mark}%` }} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-300/90 text-sm font-light leading-relaxed tracking-wide">
                        {movieInfo.mindBendingIndex >= 90 && "A transcendent masterpiece that redefines narrative complexity, requiring multiple viewings for complete comprehension."}
                        {movieInfo.mindBendingIndex >= 80 && movieInfo.mindBendingIndex < 90 && "Sophisticated cinematic storytelling with advanced non-linear elements and reality-bending concepts."}
                        {movieInfo.mindBendingIndex >= 70 && movieInfo.mindBendingIndex < 80 && "Thoughtfully complex narrative structure with engaging mind-bending elements throughout."}
                        {movieInfo.mindBendingIndex < 70 && "Accessible complexity with subtle mind-bending elements that reward careful viewing."}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <motion.div
            className="space-y-8 sm:space-y-12 mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Movie Title & Basic Info */}
            <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {movie.Title} ({movie.year}) - Like Inception
                </h2>
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
            </div>

            {/* Cast & Director Info */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
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
                className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border-l-4 border-yellow-400"
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
                
                {/* SEO Genre Composition Text */}
                <p className="text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    <strong>Genre Composition:</strong> {movieInfo.genreComposition}
                </p>
                
                {/* SEO Intensity Peak Text */}
                <p className="text-gray-300 mt-2 leading-relaxed text-sm sm:text-base">
                    <strong>Intensity Peak:</strong> {movieInfo.intensityPeak}
                </p>
            </motion.div>

            {/* Where to Watch */}
            <EnhancedWhereToWatchSection movie={movie} />

            {/* Sensitive Content Timeline */}
            <SensitiveContentTimelineSection movie={movie} />

            {/* Complexity Score */}
            <StrategicMindBendingIndex />

            {/* Intensity Graph */}
            <EnhancedIntensityGraph 
                scenes={movieInfo.scenes}
                dominantColor={movieInfo.dominantColor}
            />

            {/* DNA Helix */}
            <StrategicDNAHelix 
                dna={movieInfo.dna}
                dominantColor={movieInfo.dominantColor}
            />

            {/* Comments & Ratings */}
    <RealCommentsRatingSection movie={movie} />
            {/* FAQ Section */}
            <SEOFAQSection movie={movie} />
        </motion.div>
    );
});

MovieDetailsSection.displayName = 'MovieDetailsSection';

export default MovieDetailsSection;
