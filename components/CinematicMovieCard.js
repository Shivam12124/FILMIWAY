// components/CinematicMovieCard.js - FIXED PROPERTY NAMES
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Star } from 'lucide-react';
import TMDBMoviePoster from './TMDBMoviePoster';
import { COMPLETE_MOVIE_DATA, STRATEGIC_TAGLINES } from '../utils/movieData';

const CinematicMovieCard = React.memo(({ movie, rank, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId] || {};

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
                    <TMDBMoviePoster movie={movie} className="w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl" />
                    
                    {/* Mobile-Optimized Rank Badge */}
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
                    
                    {/* Mobile-Optimized Complexity Badge */}
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
                    
                    {/* Mobile-Optimized Rating Badge */}
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
            
            {/* 🔥 FIXED MOVIE INFO - CORRECT PROPERTY NAMES */}
            <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 z-10 max-w-sm px-2 sm:px-4">
                <motion.h2 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-100 leading-tight" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    whileHover={{ scale: 1.02 }}
                >
                    {movie.Title}
                </motion.h2>
                {/* 🔥 THIS IS THE FIXED RUNTIME DISPLAY - USING CORRECT PROPERTY NAMES */}
                <div className="text-gray-400 text-xs sm:text-sm font-light">
                    {movie.Year} • {movie.Genre?.split(',')[0].trim() || 'Drama'} • {movie.Runtime || '120 min'}
                </div>
                <motion.p 
                    className="text-gray-300/80 text-xs sm:text-sm leading-relaxed font-light tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ height: 0 }}
                    animate={{ height: isHovered ? 'auto' : 0 }}
                >
                    {STRATEGIC_TAGLINES[movie.tmdbId] || 'A mind-bending cinematic experience'}
                </motion.p>
            </div>
        </motion.div>
    );
});

CinematicMovieCard.displayName = 'CinematicMovieCard';

export default CinematicMovieCard;
