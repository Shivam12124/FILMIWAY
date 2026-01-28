// components/CinematicMovieCard.js - OPTIMIZED POSTER SIZE ⚡

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Star } from 'lucide-react';
import TMDBMoviePoster from './TMDBMoviePoster';
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../utils/movieData';
import { COMPLETE_MOVIE_DATA as SURVIVAL_DATA, STRATEGIC_QUOTES as SURVIVAL_QUOTES } from '../utils/survivalMovieData';

const CinematicMovieCard = React.memo(({ movie, rank, isActive, fromSurvivalCollection }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Safety checks for data access
    const movieInfo = fromSurvivalCollection 
        ? (SURVIVAL_DATA?.[movie.tmdbId] || {})
        : (COMPLETE_MOVIE_DATA?.[movie.tmdbId] || {});
    
    const quote = fromSurvivalCollection
        ? (SURVIVAL_QUOTES?.[movie.tmdbId] || null)
        : (STRATEGIC_QUOTES?.[movie.tmdbId] || null);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -40 }} 
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className="relative w-full h-full group flex flex-col items-center px-2 sm:px-4 cursor-pointer" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="rounded-xl mb-3 sm:mb-6 lg:mb-8" style={{ perspective: '1200px' }}>
                <motion.div 
                    className="relative w-48 h-72 sm:w-64 sm:h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[576px] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50" 
                    whileHover={{ 
                        scale: 1.02, 
                        rotateY: 4, 
                        boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${movieInfo.dominantColor || '#ca8a04'}20` 
                    }} 
                    whileTap={{ scale: 0.98 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* ⚡ OPTIMIZATION: Passed posterSize="w342". 
                        This reduces file size significantly compared to w500/original 
                        while maintaining decent quality for this card size.
                    */}
                    <TMDBMoviePoster 
                        movie={movie} 
                        className="w-full h-full" 
                        posterSize="w342" 
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl" />
                    
                    {/* Rank Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <motion.div 
                            className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl backdrop-blur-xl border flex items-center justify-center text-xs sm:text-sm font-light ${
                                rank === 1 ? 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 text-yellow-200 border-yellow-400/50 shadow-lg shadow-yellow-500/30' : 'bg-gray-800/90 text-gray-200 border-gray-700/50'
                            }`} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                        >
                            {rank === 1 ? <Crown size={12} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" /> : rank}
                        </motion.div>
                    </div>
                    
                    {/* Complexity Badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                        <motion.div 
                            className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-lg text-xs font-light tracking-wider uppercase" 
                            style={{ 
                                color: movieInfo.dominantColor || '#ca8a04', 
                                borderColor: `${movieInfo.dominantColor || '#ca8a04'}40` 
                            }} 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                        >
                            {movieInfo.complexityLevel || 'HIGH'}
                        </motion.div>
                    </div>
                    
                    {/* Rating Badge */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -30 }} 
                        className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-lg"
                    >
                        <Star size={10} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-200 text-xs sm:text-sm font-light">{movieInfo.rating || 7.0}</span>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 z-10 max-w-sm px-2 sm:px-4">
                <motion.h2 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-100 leading-tight" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    whileHover={{ scale: 1.02 }}
                >
                    {movie.Title?.replace(/\*/g, '') || movie.title || 'Unknown Movie'}
                </motion.h2>
                
                <div className="text-gray-400 text-xs sm:text-sm font-light">
                    {movie.year || movie.Year || '2024'} • {movie.genre?.split(',')[0].trim() || movie.Genre?.split(',')[0].trim() || 'Drama'} • {movie.runtime ? `${movie.runtime} min` : (movie.Runtime || '120 min')}
                </div>
                
                {isHovered && (quote || movieInfo.synopsis) && (
                    <motion.p 
                        className="text-gray-300/80 text-xs sm:text-sm leading-relaxed font-light tracking-wide transition-all duration-500"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {quote || (movieInfo.synopsis?.substring(0, 100) + '...') || ''}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
});

CinematicMovieCard.displayName = 'CinematicMovieCard';

export default CinematicMovieCard;