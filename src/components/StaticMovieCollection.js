// components/StaticMovieCollection.js
import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, Award, Star, MessageSquare, Home, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { COMPLETE_MOVIE_DATA, FALLBACK_POSTERS, STRATEGIC_TAGLINES } from '../../lib/movieData';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Mobile-Optimized Background Component
const CinematicBackground = React.memo(() => (
  <div 
    className="fixed inset-0 pointer-events-none z-0" 
    suppressHydrationWarning={true}
  >
    <div 
      className="absolute inset-0 bg-black" 
      suppressHydrationWarning={true} 
    />
    <div 
      className="absolute inset-0 opacity-[0.006]" 
      suppressHydrationWarning={true}
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, 
        backgroundSize: '600px 600px' 
      }} 
    />
    <div 
      className="absolute inset-0" 
      suppressHydrationWarning={true}
      style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.5) 100%)' }} 
    />
  </div>
));

// MOBILE-OPTIMIZED BACK TO HOMEPAGE BUTTON
const BackToHomepageButton = React.memo(() => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <motion.button
      onClick={handleGoHome}
      className="fixed top-3 left-3 sm:top-4 sm:left-4 z-[60] bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Home size={14} className="sm:w-4 sm:h-4" />
      <span className="hidden sm:inline">Homepage</span>
      <span className="sm:hidden">Home</span>
    </motion.button>
  );
});

// MOBILE-OPTIMIZED Strategic Controls Component
const StrategicControls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  
  return (
    <motion.div className="fixed top-6 right-4 sm:top-8 sm:right-8 z-50 flex items-center gap-2 sm:gap-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
      <motion.button 
        whileHover={{ scale: 1.05, y: -3 }} 
        whileTap={{ scale: 0.95 }} 
        onClick={() => { setIsAutoPlay(!isAutoPlay); }} 
        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl border transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-lg ${isAutoPlay ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-yellow-500/20' : 'bg-gray-800/80 text-gray-300 border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60'}`}
      >
        {isAutoPlay ? <Pause size={14} className="sm:w-[18px] sm:h-[18px]" /> : <Play size={14} className="sm:w-[18px] sm:h-[18px]" />}
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.05, y: -3 }} 
        whileTap={{ scale: 0.95 }} 
        onClick={() => { setIsMuted(!isMuted); }} 
        className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center shadow-lg"
      >
        {isMuted ? <VolumeX size={14} className="sm:w-[18px] sm:h-[18px] text-gray-400" /> : <Volume2 size={14} className="sm:w-[18px] sm:h-[18px] text-gray-300" />}
      </motion.button>
    </motion.div>
  );
};

// MOBILE-OPTIMIZED HEADER
const CinematicHeader = React.memo(() => (
  <header className="text-center mb-8 sm:mb-16 lg:mb-24 px-4 sm:px-6 w-full relative">
    <motion.div 
      initial={{ opacity: 0, y: -40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1.2, ease: "easeOut" }} 
      className="space-y-6 sm:space-y-8 lg:space-y-12 relative z-10"
    >
      <motion.div className="relative">
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[0.1em] sm:tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-300" 
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            textShadow: '0 0 60px rgba(234, 179, 8, 0.1)' 
          }} 
          whileHover={{ 
            scale: 1.02, 
            textShadow: '0 0 80px rgba(234, 179, 8, 0.2)' 
          }} 
          transition={{ duration: 0.4 }}
        >
          <motion.span className="block leading-tight" style={{ letterSpacing: '0.15em' }}>TOP 10 MOVIES</motion.span>
          <motion.span className="block text-amber-300/90 mt-1 sm:mt-2 lg:mt-3 leading-tight" style={{ letterSpacing: '0.2em' }}>LIKE INCEPTION</motion.span>
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }} 
          className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 w-24 sm:w-48 lg:w-64 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" 
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.8 }} 
        className="space-y-4 sm:space-y-6 lg:space-y-8"
      >
        <p className="text-gray-300/90 text-sm sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.1em] sm:tracking-[0.15em] max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
          MIND-BENDING FILMS WITH COMMUNITY REVIEWS
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 2.2 }} 
          className="flex justify-center items-center space-x-6 sm:space-x-8 lg:space-x-12"
        >
          <div className="w-6 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent to-yellow-400/30"></div>
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
            className="w-2 h-2 sm:w-3 sm:h-3 border border-yellow-400/40 rotate-45" 
          />
          <div className="w-6 sm:w-12 lg:w-16 h-px bg-gradient-to-l from-transparent to-yellow-400/30"></div>
        </motion.div>
      </motion.div>
      
      {/* Mobile-Optimized Badge Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-20 max-w-2xl sm:max-w-3xl mx-auto" 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        {[
          { label: 'INCEPTION-LEVEL', icon: Crown, desc: 'Reality-Bending Films' }, 
          { label: 'COMMUNITY RATED', icon: Star, desc: 'Professional Reviews' }, 
          { label: 'INTERACTIVE', icon: MessageSquare, desc: 'Comment & Discuss' }
        ].map((badge) => {
          const Icon = badge.icon;
          return (
            <motion.div 
              key={badge.label} 
              className="relative group" 
              whileHover={{ y: -4, scale: 1.02 }} 
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-yellow-500/10 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <Icon size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400/70" />
                  <h3 className="text-yellow-200/90 text-xs sm:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center leading-tight">
                    {badge.label}
                  </h3>
                  <p className="text-gray-400 text-xs font-light text-center leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  </header>
));

// MOBILE-OPTIMIZED Movie Poster Component
const TMDBMoviePoster = React.memo(({ movie, className = "", alt }) => {
  const [currentSrc, setCurrentSrc] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const posterSources = useMemo(() => {
    const sources = [];
    if (FALLBACK_POSTERS[movie.tmdbId]) sources.push(FALLBACK_POSTERS[movie.tmdbId]);
    sources.push(`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#111827;stop-opacity:1" /><stop offset="50%" style="stop-color:#1f2937;stop-opacity:1" /><stop offset="100%" style="stop-color:#111827;stop-opacity:1" /></linearGradient></defs><rect width="400" height="600" fill="url(#bg)"/><rect x="30" y="30" width="340" height="540" fill="none" stroke="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" stroke-width="2" opacity="0.4"/><circle cx="200" cy="220" r="60" fill="none" stroke="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" stroke-width="2" opacity="0.3"/><rect x="120" y="350" width="160" height="3" fill="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" opacity="0.4"/><text x="200" y="420" text-anchor="middle" font-family="Playfair Display, serif" font-size="24" fill="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" opacity="0.9">${movie.Title}</text><text x="200" y="460" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#9ca3af" opacity="0.7">${movie.year} • ${movie.genre}</text></svg>`)}`);
    return sources.filter(Boolean);
  }, [movie]);

  const handleImageLoad = useCallback(() => setIsLoading(false), []);
  const handleImageError = useCallback(() => {
    if (currentSrc < posterSources.length - 1) setCurrentSrc(prev => prev + 1);
    else setIsLoading(false);
  }, [currentSrc, posterSources.length]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700/50">
          <div className="text-center space-y-3 sm:space-y-4">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
              className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto" 
            />
            <div className="text-xs text-gray-400 font-light tracking-wider">Loading poster...</div>
          </div>
        </div>
      )}
      <img 
        src={posterSources[currentSrc]} 
        alt={alt || `Official poster for ${movie.Title}`} 
        className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
        onLoad={handleImageLoad} 
        onError={handleImageError} 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl pointer-events-none" />
    </div>
  );
});

// MOBILE-OPTIMIZED Movie Card Component
const CinematicMovieCard = React.memo(({ movie, rank, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId] || {};

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -40 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="relative w-full h-full group flex flex-col items-center px-2 sm:px-4" 
      onMouseEnter={() => { setIsHovered(true); }} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/movies/${movie.imdbID}`}>
        <div className="cursor-pointer rounded-xl mb-3 sm:mb-6 lg:mb-8" style={{ perspective: '1200px' }}>
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
                className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl backdrop-blur-xl border flex items-center justify-center text-xs sm:text-sm font-light ${rank === 1 ? 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 text-yellow-200 border-yellow-400/50 shadow-lg shadow-yellow-500/30' : 'bg-gray-800/90 text-gray-200 border-gray-700/50'}`} 
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
                style={{ color: movieInfo.dominantColor || '#ca8a04', borderColor: `${movieInfo.dominantColor || '#ca8a04'}40` }} 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              >
                {movieInfo.complexityLevel}
              </motion.div>
            </div>
            
            {/* Mobile-Optimized Rating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -30 }} 
              className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-lg"
            >
              <Star size={10} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
              <span className="text-gray-200 text-xs sm:text-sm font-light">{movieInfo.rating}</span>
            </motion.div>
          </motion.div>
        </div>
      </Link>
      
      {/* Mobile-Optimized Movie Info */}
      <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 z-10 max-w-sm px-2 sm:px-4">
        <motion.h2 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-100 leading-tight" 
          style={{ fontFamily: "'Playfair Display', serif" }}
          whileHover={{ scale: 1.02 }}
        >
          {movie.Title}
        </motion.h2>
        <div className="text-gray-400 text-xs sm:text-sm font-light">
          {movie.year} • {movie.genre} • {movie.runtime}min
        </div>
        <motion.p 
          className="text-gray-300/80 text-xs sm:text-sm leading-relaxed font-light tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500"
          initial={{ height: 0 }}
          animate={{ height: isHovered ? 'auto' : 0 }}
        >
          {STRATEGIC_TAGLINES[movie.tmdbId]}
        </motion.p>
      </div>
    </motion.div>
  );
});

export default function StaticMovieCollection({ movies }) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // ✅ CREATE REVERSED MOVIES ARRAY (10 to 1 order)
  const moviesReversed = useMemo(() => [...movies].reverse(), [movies]);

  const nextMovie = useCallback(() => {
    setCurrentMovieIndex((prev) => (prev + 1) % moviesReversed.length);
  }, [moviesReversed.length]);

  const prevMovie = useCallback(() => {
    setCurrentMovieIndex((prev) => (prev - 1 + moviesReversed.length) % moviesReversed.length);
  }, [moviesReversed.length]);

  // ✅ USE REVERSED ARRAY FOR CURRENT MOVIE
  const currentMovie = moviesReversed[currentMovieIndex];
  
  // ✅ CALCULATE CORRECT RANK (10, 9, 8, ..., 1)
  const currentRank = movies.length - currentMovieIndex;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CinematicBackground />
      <StrategicControls />
      <BackToHomepageButton />
      
      <div className="relative z-10">
        <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
          <CinematicHeader />
          
          <div className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
            {/* Mobile-Optimized Navigation Buttons */}
            <motion.button
              onClick={prevMovie}
              className="absolute left-2 sm:left-8 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-300" />
            </motion.button>

            <motion.button
              onClick={nextMovie}
              className="absolute right-2 sm:right-8 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-300" />
            </motion.button>

            {/* Movie Display - ONLY ONE POSTER AT A TIME */}
            <AnimatePresence mode="wait">
              <CinematicMovieCard
                key={currentMovieIndex}
                movie={currentMovie}
                rank={currentRank} // ✅ PASS CORRECT RANK
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Mobile-Optimized Movie Counter */}
          <motion.div
            className="flex justify-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 px-4 py-2 sm:px-6 sm:py-3 bg-gray-800/40 backdrop-blur-sm rounded-full border border-gray-700/50">
              <span className="text-yellow-400 font-light text-sm sm:text-base">
                #{currentRank} {/* ✅ SHOW CORRECT RANK */}
              </span>
              <div className="w-12 sm:w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${((currentMovieIndex + 1) / movies.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-gray-400 font-light text-xs sm:text-sm">
                <span className="hidden sm:inline">of Top 10 Movies Like Inception</span>
                <span className="sm:hidden">of 10</span>
              </span>
            </div>
          </motion.div>

          {/* Mobile-Optimized Footer */}
          <motion.footer
            className="mt-20 sm:mt-32 pt-8 sm:pt-12 border-t border-gray-800/50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
          >
            <p className="text-gray-500 text-xs sm:text-sm font-light tracking-wide">
              Curated movies like Inception for film enthusiasts, by film enthusiasts. Community reviews and ratings included.
            </p>
            <div className="mt-3 sm:mt-4 flex justify-center items-center gap-6 sm:gap-8">
              <div className="w-8 sm:w-12 h-px bg-gray-700"></div>
              <div className="text-yellow-400/60 text-xs tracking-[0.3em] uppercase">
                Mind-Bending Cinema Collection
              </div>
              <div className="w-8 sm:w-12 h-px bg-gray-700"></div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}
