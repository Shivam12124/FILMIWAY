// components/CinematicMovieCard.js - FIXED "UNDEFINED" BUG ⚡

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Crown, Star } from 'lucide-react';
import TMDBMoviePoster from './TMDBMoviePoster';
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../utils/movieData';
import { COMPLETE_MOVIE_DATA as SURVIVAL_DATA, STRATEGIC_QUOTES as SURVIVAL_QUOTES } from '../utils/survivalMovieData';
import TMDBMoviePoster from './TMDBMoviePoster';
const CinematicMovieCard = React.memo(({ movie, rank, isActive, fromSurvivalCollection }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // ⚡ OPTIMIZATION: Check mobile state once on mount
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // ⚡ PERFORMANCE: Memoize data lookups
    const movieInfo = useMemo(() => {
        return fromSurvivalCollection 
            ? (SURVIVAL_DATA?.[movie.tmdbId] || {})
            : (COMPLETE_MOVIE_DATA?.[movie.tmdbId] || {});
    }, [movie.tmdbId, fromSurvivalCollection]);

    const quote = useMemo(() => {
        return fromSurvivalCollection
            ? (SURVIVAL_QUOTES?.[movie.tmdbId] || null)
            : (STRATEGIC_QUOTES?.[movie.tmdbId] || null);
    }, [movie.tmdbId, fromSurvivalCollection]);

    // Determines poster quality
    const posterQuality = isMobile ? "w342" : "w780"; 

    // ✅ FIXED LOGIC: Determines text to show on hover without "undefined" errors
    const hoverText = useMemo(() => {
        if (quote) return quote;
        if (movieInfo.synopsis) return movieInfo.synopsis.substring(0, 80) + '...';
        return 'A cinematic masterpiece.';
    }, [quote, movieInfo.synopsis]);

    return (
        <motion.article 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "100px" }} 
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
            className="relative w-full h-full group flex flex-col items-center px-2 sm:px-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => !isMobile && setIsHovered(true)} 
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={() => isMobile && setIsHovered(!isHovered)} 
        >
            {/* 3D Container */}
            <div className="rounded-2xl mb-4 sm:mb-6 lg:mb-8 w-full flex justify-center" style={{ perspective: '1200px' }}>
                <motion.div 
                    className="relative w-48 h-72 sm:w-64 sm:h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[576px] overflow-hidden rounded-2xl shadow-2xl bg-gray-900 border border-gray-800"
                    
                    whileHover={!isMobile ? { 
                        scale: 1.03, 
                        rotateY: 5, 
                        rotateX: 2,
                        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.7), 0 0 40px ${movieInfo.dominantColor || '#ca8a04'}30` 
                    } : {}}
                    whileTap={{ scale: 0.96 }}
                    
                    style={{ 
                        transformStyle: 'preserve-3d',
                        willChange: 'transform, box-shadow' 
                    }}
                >
                    {/* Poster Image */}
                    <div className="w-full h-full bg-gray-800">
                        <TMDBMoviePoster 
                            movie={movie} 
                            className="w-full h-full object-cover" 
                            posterSize={posterQuality} 
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                    
                    {/* 🏆 RANK BADGE */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                        <motion.div 
                            className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl backdrop-blur-md border flex items-center justify-center shadow-lg ${
                                rank === 1 
                                ? 'bg-gradient-to-br from-yellow-400/90 to-amber-600/90 border-yellow-300/50 text-white shadow-yellow-500/20' 
                                : 'bg-black/60 border-white/10 text-white/90'
                            }`}
                            whileHover={{ scale: 1.1 }}
                        >
                            {rank === 1 ? (
                                <Crown size={20} className="sm:w-6 sm:h-6 drop-shadow-md" />
                            ) : (
                                <span className="text-sm sm:text-lg font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>{rank}</span>
                            )}
                        </motion.div>
                    </div>
                    
                    {/* 🧠 COMPLEXITY BADGE */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                        {movieInfo.complexityLevel && (
                            <motion.div 
                                className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/90 shadow-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {movieInfo.complexityLevel}
                            </motion.div>
                        )}
                    </div>
                    
                    {/* ⭐ RATING BADGE */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg">
                            <Star size={12} className="sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs sm:text-sm font-medium text-white/90">{movieInfo.rating || 7.5}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Movie Details */}
            <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 z-10 max-w-[200px] sm:max-w-xs md:max-w-sm px-1">
                <motion.h2 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-white leading-tight" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    whileHover={{ scale: 1.02, color: "#facc15" }}
                    transition={{ duration: 0.2 }}
                >
                    {movie.Title?.replace(/\*/g, '') || movie.title || 'Unknown'}
                </motion.h2>
                
                <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-medium tracking-widest uppercase">
                    <span>{movie.year || movie.Year || '2024'}</span>
                    <span className="text-gray-600">•</span>
                    <span>{movie.runtime ? `${movie.runtime}` : (movie.Runtime || '120')}m</span>
                </div>
                
                {/* Quote / Synopsis Reveal (Fixed) */}
                <motion.div
                    initial={false}
                    animate={{ 
                        height: isHovered ? 'auto' : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="pt-2 text-gray-400 text-xs sm:text-sm leading-relaxed font-light italic max-w-xs mx-auto">
                        "{hoverText}"
                    </p>
                </motion.div>
            </div>
        </motion.article>
    );
});

CinematicMovieCard.displayName = 'CinematicMovieCard';

export default CinematicMovieCard;