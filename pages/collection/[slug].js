

// pages/collection/[slug].js - WITH PROPER SPACING BETWEEN LOGO AND HOME BUTTON
import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, Star, MessageSquare, Volume2, VolumeX, Play, Pause, Menu, X, Home, Eye, MousePointer } from 'lucide-react';

// Components
import CinematicBackground from '../../components/CinematicBackground';
import StrategicControls from '../../components/StrategicControls';
import CinematicMovieCard from '../../components/CinematicMovieCard';

// Data
import { COLLECTIONS, getAllCollectionSlugs, getCollectionBySlug } from '../../data/collections';
import { COMPLETE_MOVIE_DATABASE } from '../../utils/movieData';

// MASSIVE LOGO AT TOP LEFT
const TopLeftLogo = () => (
    <motion.div 
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    >
        <Link href="/" className="flex items-center justify-start">
            <div className="w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 flex items-center justify-start hover:scale-105 transition-transform duration-300">
                <img 
                    src="/filmiway-logo.svg" 
                    alt="Filmiway" 
                    className="w-full h-full object-contain"
                />
            </div>
        </Link>
    </motion.div>
);

// HOMEPAGE BUTTON WITH MORE SPACE BELOW LOGO
const HomepageButton = () => (
    <motion.div 
        className="fixed top-24 left-4 sm:top-32 sm:left-6 md:top-36 md:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
    >
        <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300"
        >
            <Home className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Home</span>
        </Link>
    </motion.div>
);

// NAVIGATION DOTS COMPONENT
const NavigationDots = ({ movies, currentMovieIndex, goToMovie }) => (
    <motion.div 
        className="flex justify-center items-center space-x-3 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
    >
        {movies.map((_, index) => (
            <button
                key={index}
                onClick={() => goToMovie(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMovieIndex 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-400'
                }`}
            />
        ))}
    </motion.div>
);

// Cinematic Loader Component
const CinematicLoader = React.memo(() => (
    <div className="flex flex-col items-center justify-center h-full space-y-8 sm:space-y-16 px-4 sm:px-8">
        <div className="relative">
            <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                className="w-16 h-16 sm:w-24 sm:h-24 border-4 border-gray-800/60 rounded-full relative"
            >
                <div className="absolute inset-2 sm:inset-3 border-2 border-yellow-500/40 rounded-full">
                    <div className="absolute inset-1 sm:inset-2 border border-yellow-400/30 rounded-full">
                        <div className="absolute inset-1 bg-yellow-500/10 rounded-full" />
                    </div>
                </div>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                    <div 
                        key={index} 
                        className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400/40 rounded-full" 
                        style={{ 
                            top: '6px', 
                            left: '50%', 
                            transformOrigin: '0 26px', 
                            transform: `translateX(-50%) rotate(${rotation}deg)` 
                        }} 
                    />
                ))}
            </motion.div>
        </div>
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.8 }} 
            className="text-center space-y-4 sm:space-y-6 max-w-xs sm:max-w-md"
        >
            <h2 className="text-xl sm:text-2xl font-light text-gray-200 tracking-[0.2em] uppercase">Loading Movies Like Inception</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
                Curating the finest mind-bending cinema similar to Inception with user reviews and ratings
            </p>
            <div className="w-48 h-1 sm:w-64 bg-gray-800 rounded-full overflow-hidden mx-auto">
                <motion.div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" 
                    animate={{ x: ['-100%', '100%'] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                />
            </div>
        </motion.div>
    </div>
));

// Cinematic Header Component
const CinematicHeader = React.memo(({ collection }) => (
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
                    <motion.span className="block leading-tight" style={{ letterSpacing: '0.15em' }}>
                        {collection.headerTitle}
                    </motion.span>
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
                    {collection.headerSubtitle}
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
                {collection.badges && collection.badges.map((badge, index) => (
                    <motion.div 
                        key={badge.label || index} 
                        className="relative group" 
                        whileHover={{ y: -4, scale: 1.02 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-yellow-500/10 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                                {index === 0 && <Crown size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400/70" />}
                                {index === 1 && <Star size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400/70" />}
                                {index === 2 && <MessageSquare size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400/70" />}
                                <h3 className="text-yellow-200/90 text-xs sm:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center leading-tight">
                                    {badge.label}
                                </h3>
                                <p className="text-gray-400 text-xs font-light text-center leading-relaxed">
                                    {badge.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </header>
));

// Main Collection Page Component
const CollectionPage = ({ collection, movies }) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    // Handle return from movie detail page + position tracking
    useEffect(() => {
        // Handle return from movie detail page
        if (typeof window !== 'undefined') {
            const returningFromMovie = sessionStorage.getItem('returningFromMovie');
            const returnToPosition = sessionStorage.getItem('returnToPosition');
            
            if (returningFromMovie && returnToPosition) {
                // Go back to exact position
                setCurrentMovieIndex(parseInt(returnToPosition));
                
                // Clear the flags
                sessionStorage.removeItem('returningFromMovie');
                sessionStorage.removeItem('returnToPosition');
            }
        }
        
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const nextMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev + 1) % movies.length);
    }, [movies.length]);

    const prevMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev - 1 + movies.length) % movies.length);
    }, [movies.length]);

    const goToMovie = useCallback((index) => {
        setCurrentMovieIndex(index);
    }, []);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') prevMovie();
            if (e.key === 'ArrowRight') nextMovie();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [nextMovie, prevMovie]);

    // Get current movie and calculate rank (10, 9, 8, ..., 1)
    const currentMovie = movies[currentMovieIndex];
    const currentRank = movies.length - currentMovieIndex;

    // Smart navigation - no left arrow on position 10
    const isFirstMovie = currentRank === 10;

    const playSound = (type) => {
        if (!isMuted) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.value = type === 'hover' ? 440 : 330;
                gainNode.gain.setValueAtTime(0.006, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.003, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (error) {
                console.log('Audio not available');
            }
        }
    };

    // Handle movie click with position tracking
    const handleMovieClick = () => {
        if (typeof window !== 'undefined') {
            // Store the current position when clicking movie
            sessionStorage.setItem('currentMoviePosition', currentMovieIndex.toString());
            sessionStorage.setItem('currentMovieRank', currentRank.toString());
        }
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                <title>{collection.title} - Mind-Bending Films with User Reviews & Ratings</title>
                <meta name="description" content={collection.longDescription} />
                <meta name="keywords" content={collection.keywords} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://filmiway.com/collection/${collection.slug}`} />
                <link rel="icon" href="/favicon.ico" />
                
                <meta property="og:title" content={`${collection.title} - Community Reviews & Ratings`} />
                <meta property="og:description" content={collection.longDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://filmiway.com/collection/${collection.slug}`} />
                <meta property="og:site_name" content="Filmiway" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${collection.title} - Community Reviews & Ratings`} />
                <meta name="twitter:description" content={collection.description} />
            </Head>

            <CinematicBackground />
            <StrategicControls 
                isMuted={isMuted}
                setIsMuted={setIsMuted}
                isAutoPlay={isAutoPlay}
                setIsAutoPlay={setIsAutoPlay}
                playSound={playSound}
            />
            
            <TopLeftLogo />
            {/* HOMEPAGE BUTTON WITH MORE SPACE BELOW LOGO */}
            <HomepageButton />
            
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-h-screen flex items-center justify-center"
                    >
                        <CinematicLoader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="collection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10"
                    >
                        <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
                            <CinematicHeader collection={collection} />
                            
                            <div className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
                                {/* Smart Navigation Buttons */}
                                {!isFirstMovie && (
                                    <motion.button
                                        onClick={prevMovie}
                                        className="absolute left-2 sm:left-8 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center"
                                        whileHover={{ scale: 1.1, x: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-300" />
                                    </motion.button>
                                )}

                                <motion.button
                                    onClick={nextMovie}
                                    className="absolute right-2 sm:right-8 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.1, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-300" />
                                </motion.button>

                                {/* Movie Display - WITH POSITION TRACKING */}
                                <AnimatePresence mode="wait">
                                    <Link 
                                        href={`/movies/${currentMovie.imdbID}`} 
                                        key={currentMovieIndex}
                                        onClick={handleMovieClick}
                                    >
                                        <CinematicMovieCard
                                            movie={currentMovie}
                                            rank={currentRank}
                                            isActive={true}
                                        />
                                    </Link>
                                </AnimatePresence>
                            </div>

                            {/* ENHANCED MOVIE INFO WITH CLICK INDICATORS */}
                            <motion.div 
                                className="text-center mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <h2 className="text-3xl font-light text-white mb-2">
                                    {currentMovie.Title}
                                </h2>
                                <p className="text-gray-400 mb-6">
                                    {currentMovie.Year} • {currentMovie.Genre} • {currentMovie.Runtime}
                                </p>
                                
                                {/* ENHANCED CLICK INDICATORS */}
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                                        <span>#{currentRank} of {movies.length}</span>
                                        <span>•</span>
                                        <span>Click poster above for details</span>
                                    </div>
                                    
                                    {/* OBVIOUS CLICK BUTTON */}
                                    <motion.div 
                                        className="flex items-center space-x-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-3 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            handleMovieClick();
                                            window.location.href = `/movies/${currentMovie.imdbID}`;
                                        }}
                                    >
                                        <Eye className="w-5 h-5 text-yellow-400" />
                                        <span className="text-yellow-400 font-medium">View Full Movie Details</span>
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ChevronRight className="w-5 h-5 text-yellow-400" />
                                        </motion.div>
                                    </motion.div>
                                    
                                    {/* SUBTLE ANIMATION HINT */}
                                    <motion.p 
                                        className="text-xs text-gray-600 flex items-center space-x-2"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <MousePointer className="w-3 h-3" />
                                        <span>Interactive poster - click anywhere on the movie poster</span>
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Navigation Dots */}
                            <NavigationDots 
                                movies={movies}
                                currentMovieIndex={currentMovieIndex}
                                goToMovie={goToMovie}
                            />

                            {/* Movie Counter */}
                            <motion.div
                                className="flex justify-center mt-8 sm:mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.5 }}
                            >
                                <div className="flex items-center gap-3 sm:gap-4 px-4 py-2 sm:px-6 sm:py-3 bg-gray-800/40 backdrop-blur-sm rounded-full border border-gray-700/50">
                                    <span className="text-yellow-400 font-light text-sm sm:text-base">
                                        #{currentRank}
                                    </span>
                                    <div className="w-12 sm:w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-yellow-400 rounded-full"
                                            style={{ width: `${((currentMovieIndex + 1) / movies.length) * 100}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <span className="text-gray-400 font-light text-xs sm:text-sm">
                                        <span className="hidden sm:inline">of Top {movies.length} Movies Like Inception</span>
                                        <span className="sm:hidden">of {movies.length}</span>
                                    </span>
                                </div>
                            </motion.div>

                            {/* Footer */}
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
                                        Filmiway Mind-Bending Cinema Collection
                                    </div>
                                    <div className="w-8 sm:w-12 h-px bg-gray-700"></div>
                                </div>
                                
                                {/* TMDB ATTRIBUTION WITH CLICKABLE LINK */}
                                <motion.div 
                                    className="mt-6 pt-4 border-t border-gray-900/50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 5, duration: 1 }}
                                >
                                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                                        <p className="text-gray-600 text-xs">
                                            Movie data and posters powered by
                                        </p>
                                        <a 
                                            href="https://www.themoviedb.org/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                                        >
                                            <img 
                                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                                                alt="The Movie Database" 
                                                className="h-4 w-auto"
                                            />
                                            <span className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                                                The Movie Database (TMDB)
                                            </span>
                                        </a>
                                    </div>
                                    <p className="text-gray-700 text-xs mt-1 text-center">
                                        This product uses the TMDB API but is not endorsed or certified by TMDB.
                                    </p>
                                </motion.div>
                            </motion.footer>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// SSG Functions
export async function getStaticPaths() {
    const paths = getAllCollectionSlugs().map((slug) => ({
        params: { slug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const collection = getCollectionBySlug(params.slug);
    
    if (!collection) {
        return {
            notFound: true
        };
    }

    // Get movies for this collection in reverse order (10 to 1)
    const movies = collection.movies
        .map(imdbId => COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId))
        .filter(Boolean)
        .reverse(); // Reverse to show highest ranked first

    return {
        props: {
            collection,
            movies
        }
    };
}

export default CollectionPage;
