// pages/collection/[slug].js - MOBILE-OPTIMIZED WITH SSR FIX
import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, Star, MessageSquare, Volume2, VolumeX, Play, Pause, Menu, X, Home, Eye, MousePointer, TrendingUp, Users, Search, Brain, Zap, Film, Award } from 'lucide-react';

// Components
import CinematicBackground from '../../components/CinematicBackground';
import StrategicControls from '../../components/StrategicControls';
import CinematicMovieCard from '../../components/CinematicMovieCard';

// Data
import { COLLECTIONS, getAllCollectionSlugs, getCollectionBySlug } from '../../data/collections';
import { COMPLETE_MOVIE_DATABASE } from '../../utils/movieData';

// Safe property getters
const getMovieTitle = (movie) => movie?.Title || movie?.title || movie?.name || 'Unknown Movie';
const getMovieYear = (movie) => movie?.Year || movie?.year || movie?.releaseYear || '2024';
const getMovieGenre = (movie) => {
    const genre = movie?.Genre || movie?.genre || movie?.genres || 'Drama';
    return typeof genre === 'string' ? genre.split(',')[0].trim() : 'Drama';
};
const getMovieRuntime = (movie) => movie?.Runtime || movie?.runtime || '120 min';

// MOBILE-RESPONSIVE LOGO AT TOP LEFT
const TopLeftLogo = () => (
    <motion.div 
        className="fixed top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    >
        <Link href="/" className="flex items-center justify-start">
            <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-start hover:scale-105 transition-transform duration-300">
                <img 
                    src="/filmiway-logo.svg" 
                    alt="Filmiway" 
                    className="w-full h-full object-contain"
                />
            </div>
        </Link>
    </motion.div>
);

// MOBILE-OPTIMIZED HOMEPAGE BUTTON
const HomepageButton = () => (
    <motion.div 
        className="fixed top-16 left-2 sm:top-20 sm:left-4 md:top-28 md:left-6 lg:top-32 lg:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
    >
        <Link 
            href="/" 
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300"
        >
            <Home className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">Home</span>
        </Link>
    </motion.div>
);

// MOBILE-OPTIMIZED CINEMATIC EXPLORER SECTION
const CinematicExplorerSection = ({ collection, currentRank }) => (
    <motion.section 
        className="relative mt-4 sm:mt-8 md:mt-16 mb-8 sm:mb-12 md:mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
    >
        {/* Atmospheric Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            {/* MOBILE-OPTIMIZED CINEMATIC TITLE SECTION */}
            <motion.div 
                className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
            >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-6 sm:py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-4 sm:mb-6 md:mb-8">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium tracking-wider uppercase text-xs sm:text-sm">Mind-Bending Cinema</span>
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" />
                </div>
                
                {/* RESPONSIVE MAIN HEADING - KEY FOCUS AREA */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white block">
                        Explore Movies Like
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 font-normal block mt-1 sm:mt-2">
                        Inception
                    </span>
                </h2>
                
                {/* RESPONSIVE SUBTITLE */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4">
                    Dive into a curated collection of reality-bending masterpieces that challenge perception and ignite the mind
                </p>
            </motion.div>

            {/* MOBILE-RESPONSIVE THREE-COLUMN GRID - ONLY SHOW ON RANK #10 */}
            {currentRank === 10 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    
                    {/* Column 1 - Why These Films */}
                    <motion.div 
                        className="space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-lg flex items-center justify-center border border-yellow-400/20">
                                <Film className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-light text-white">The Selection</h3>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            If you loved <strong className="text-yellow-300">Inception's layered storytelling</strong> and mind-bending elements, 
                            these <strong className="text-yellow-300">psychological thrillers</strong> will captivate you. Each film shares Inception's 
                            genius for <strong className="text-yellow-300">reality-questioning narratives</strong> and complex, multi-dimensional plots.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            From <strong className="text-yellow-300">Christopher Nolan's masterpieces</strong> to international gems, 
                            these <strong className="text-yellow-300">sci-fi thrillers with twists</strong> explore dreams, memory, and identity 
                            with the same intellectual depth that makes Inception unforgettable.
                        </p>
                    </motion.div>

                    {/* Column 2 - Ranking System */}
                    <motion.div 
                        className="space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.4, duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-lg flex items-center justify-center border border-yellow-400/20">
                                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-light text-white">The Ranking</h3>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            Our <strong className="text-yellow-300">mind-bending complexity index</strong> evaluates each film's 
                            narrative innovation, psychological depth, and thematic similarity to Inception's exploration of 
                            consciousness and reality.
                        </p>
                        
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className="text-gray-400">Narrative Complexity Score</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className="text-gray-400">Psychological Depth Analysis</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className="text-gray-400">Thematic Similarity to Inception</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className="text-gray-400">Community Reviews & Ratings</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 3 - What You'll Find */}
                    <motion.div 
                        className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.6, duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-lg flex items-center justify-center border border-yellow-400/20">
                                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-light text-white">The Experience</h3>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            Whether you're seeking <strong className="text-yellow-300">complex movies like Inception</strong> or 
                            <strong className="text-yellow-300"> mind-bending films</strong> that challenge perception, this collection 
                            delivers the same intellectual satisfaction and visual brilliance.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            Each <strong className="text-yellow-300">reality-bending masterpiece</strong> has been selected for its ability 
                            to create thought-provoking experiences that reward multiple viewings, just like Inception.
                        </p>
                        
                        <div className="pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg w-fit">
                                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                <span className="text-yellow-400 text-xs sm:text-sm font-medium">Community Curated</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* MOBILE-RESPONSIVE CINEMATIC DIVIDER */}
            {currentRank === 10 && (
                <motion.div 
                    className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div className="w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent to-yellow-400/50"></div>
                        <div className="relative">
                            <motion.div 
                                className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-yellow-400/50 rotate-45"
                                animate={{ rotate: 405 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            ></motion.div>
                            <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400/20 rounded-full blur-sm"></div>
                        </div>
                        <div className="w-16 sm:w-24 md:w-32 h-px bg-gradient-to-l from-transparent to-yellow-400/50"></div>
                    </div>
                </motion.div>
            )}
        </div>
    </motion.section>
);

// MOBILE-RESPONSIVE NAVIGATION DOTS
const NavigationDots = ({ movies, currentMovieIndex, goToMovie }) => (
    <motion.div 
        className="flex justify-center items-center space-x-2 sm:space-x-3 mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
    >
        {movies.map((_, index) => (
            <motion.button
                key={index}
                onClick={() => goToMovie(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 relative ${
                    index === currentMovieIndex 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-400'
                }`}
                whileHover={{ scale: index === currentMovieIndex ? 1.3 : 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {index === currentMovieIndex && (
                    <motion.div
                        className="absolute inset-0 bg-yellow-400/30 rounded-full"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
            </motion.button>
        ))}
    </motion.div>
);

// SSR-SAFE CINEMATIC LOADER WITH useEffect FOR CLIENT-SIDE
const CinematicLoader = React.memo(() => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Server-side rendering fallback
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 md:space-y-16 px-3 sm:px-4 md:px-8">
                <div className="relative">
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-4 border-gray-800/60 rounded-full relative"
                    >
                        <div className="absolute inset-1 sm:inset-2 md:inset-3 border-2 border-yellow-500/40 rounded-full">
                            <div className="absolute inset-1 sm:inset-1 md:inset-2 border border-yellow-400/30 rounded-full">
                                <div className="absolute inset-1 bg-yellow-500/10 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.8 }} 
                    className="text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-xs sm:max-w-sm md:max-w-md"
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 tracking-[0.2em] uppercase">Loading Movies Like Inception</h2>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-sm font-light leading-relaxed tracking-wide">
                        Curating the finest mind-bending cinema similar to Inception with user reviews and ratings
                    </p>
                    <div className="w-40 h-1 sm:w-48 sm:h-1 md:w-64 bg-gray-800 rounded-full overflow-hidden mx-auto">
                        <motion.div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" 
                            animate={{ x: ['-100%', '100%'] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                        />
                    </div>
                </motion.div>
            </div>
        );
    }

    // Client-side rendering with window access
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 md:space-y-16 px-3 sm:px-4 md:px-8">
            <div className="relative">
                <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-4 border-gray-800/60 rounded-full relative"
                >
                    <div className="absolute inset-1 sm:inset-2 md:inset-3 border-2 border-yellow-500/40 rounded-full">
                        <div className="absolute inset-1 sm:inset-1 md:inset-2 border border-yellow-400/30 rounded-full">
                            <div className="absolute inset-1 bg-yellow-500/10 rounded-full" />
                        </div>
                    </div>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                        <div 
                            key={index} 
                            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-400/40 rounded-full" 
                            style={{ 
                                top: '4px', 
                                left: '50%', 
                                transformOrigin: `0 ${window.innerWidth < 640 ? '20px' : window.innerWidth < 768 ? '26px' : '38px'}`, 
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
                className="text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-xs sm:max-w-sm md:max-w-md"
            >
                <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 tracking-[0.2em] uppercase">Loading Movies Like Inception</h2>
                <p className="text-gray-400 text-xs sm:text-sm md:text-sm font-light leading-relaxed tracking-wide">
                    Curating the finest mind-bending cinema similar to Inception with user reviews and ratings
                </p>
                <div className="w-40 h-1 sm:w-48 sm:h-1 md:w-64 bg-gray-800 rounded-full overflow-hidden mx-auto">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" 
                        animate={{ x: ['-100%', '100%'] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                    />
                </div>
            </motion.div>
        </div>
    );
});

// MOBILE-OPTIMIZED CINEMATIC HEADER
const CinematicHeader = React.memo(({ collection }) => (
    <header className="text-center mb-6 sm:mb-10 md:mb-16 lg:mb-20 px-3 sm:px-4 md:px-6 w-full relative">
        <motion.div 
            initial={{ opacity: 0, y: -40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} 
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 relative z-10"
        >
            <motion.div className="relative">
                {/* MOBILE-FIRST RESPONSIVE MAIN TITLE */}
                <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-extralight tracking-tight sm:tracking-wide md:tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-300" 
                    style={{ 
                        fontFamily: "'Playfair Display', serif", 
                        textShadow: '0 0 80px rgba(234, 179, 8, 0.15)' 
                    }} 
                    whileHover={{ 
                        scale: 1.02, 
                        textShadow: '0 0 100px rgba(234, 179, 8, 0.25)' 
                    }} 
                    transition={{ duration: 0.4 }}
                >
                    <motion.span className="block leading-tight">
                        Top 10 Movies
                    </motion.span>
                    <motion.span className="block leading-tight mt-1 sm:mt-2">
                        Like Inception
                    </motion.span>
                </motion.h1>
                
                {/* MOBILE-RESPONSIVE SUBTITLE */}
                <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-200/60 font-light mt-3 sm:mt-4 md:mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Mind-Bending Sci-Fi & Psychological Thrillers
                </motion.p>
                
                <motion.div 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }} 
                    className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 md:w-48 lg:w-64 xl:w-96 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" 
                />
            </motion.div>
            
            {/* MOBILE-RESPONSIVE BADGE GRID */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto" 
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 2, duration: 0.8 }}
            >
                {collection.badges && collection.badges.map((badge, index) => (
                    <motion.div 
                        key={badge.label || index} 
                        className="relative group" 
                        whileHover={{ y: -4, scale: 1.03 }} 
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-black/40 border border-yellow-500/20 rounded-xl sm:rounded-2xl backdrop-blur-xl relative overflow-hidden">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="flex flex-col items-center space-y-3 sm:space-y-4 relative z-10">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-yellow-400/30">
                                    {index === 0 && <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400" />}
                                    {index === 1 && <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400" />}
                                    {index === 2 && <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400" />}
                                </div>
                                
                                <h3 className="text-yellow-200 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase text-center leading-tight">
                                    {badge.label}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">
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

// MAIN COLLECTION PAGE COMPONENT
const CollectionPage = ({ collection, movies }) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    // Handle return from movie detail page + position tracking
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const returningFromMovie = sessionStorage.getItem('returningFromMovie');
            const returnToPosition = sessionStorage.getItem('returnToPosition');
            
            if (returningFromMovie && returnToPosition) {
                setCurrentMovieIndex(parseInt(returnToPosition));
                sessionStorage.removeItem('returningFromMovie');
                sessionStorage.removeItem('returnToPosition');
            }
        }
        
        const timer = setTimeout(() => setIsLoading(false), 2500);
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
            sessionStorage.setItem('currentMoviePosition', currentMovieIndex.toString());
            sessionStorage.setItem('currentMovieRank', currentRank.toString());
        }
    };

    // SSR-safe icon size calculation
    const getIconSize = () => {
        if (typeof window === 'undefined') return 20; // Server-side default
        return window.innerWidth < 640 ? 20 : window.innerWidth < 768 ? 22 : 24;
    };

    // SEO Schema Data
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Top 10 Movies Like Inception - Mind-Bending Sci-Fi & Thrillers",
        "description": "Discover 10 mind-bending movies like Inception, ranked by psychological complexity and engaging storytelling. From sci-fi thrillers to reality-bending masterpieces similar to Inception.",
        "author": {
            "@type": "Organization",
            "name": "Filmiway"
        },
        "publisher": {
            "@type": "Organization", 
            "name": "Filmiway"
        },
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": movies.length,
            "itemListElement": movies.map((movie, index) => ({
                "@type": "Movie",
                "name": getMovieTitle(movie),
                "position": movies.length - index,
                "dateCreated": getMovieYear(movie)
            }))
        }
    };

    if (!collection || !movies || movies.length === 0) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl text-yellow-300 mb-4">Collection not found</h1>
                    <Link href="/" className="text-yellow-400 hover:text-yellow-300">
                        Return to homepage
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                <title>Top 10 Movies Like Inception - Mind-Bending Sci-Fi & Thrillers Ranked by Complexity | Filmiway</title>
                <meta name="description" content="Discover 10 mind-bending movies like Inception, ranked by psychological complexity and engaging storytelling. From sci-fi thrillers to reality-bending masterpieces similar to Inception." />
                <meta name="keywords" content="movies like inception, films similar to inception, mind bending movies, psychological thrillers, sci fi movies with twists, christopher nolan movies, reality bending films, complex movies, inception similar movies, mind bending sci fi" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={`https://filmiway.com/collection/${collection.slug}`} />
                <link rel="icon" href="/favicon.ico" />
                
                <meta property="og:title" content="Top 10 Movies Like Inception - Mind-Bending Sci-Fi & Thrillers" />
                <meta property="og:description" content="Discover mind-bending movies like Inception, ranked by complexity. Community reviews and ratings included." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://filmiway.com/collection/${collection.slug}`} />
                <meta property="og:site_name" content="Filmiway" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Top 10 Movies Like Inception - Mind-Bending Sci-Fi & Thrillers" />
                <meta name="twitter:description" content="Discover mind-bending movies like Inception, ranked by complexity" />
                
                {/* JSON-LD Schema */}
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
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
                        <div className="container mx-auto px-3 sm:px-6 py-6 sm:py-8 md:py-12">
                            <CinematicHeader collection={collection} />
                            
                            {/* CINEMATIC EXPLORER SECTION - CONDITIONAL RENDERING */}
                            <CinematicExplorerSection collection={collection} currentRank={currentRank} />
                            
                            <div className="relative flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
                                {/* Enhanced Navigation Buttons */}
                                {!isFirstMovie && (
                                    <motion.button
                                        onClick={prevMovie}
                                        className="absolute left-2 sm:left-4 md:left-8 z-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 flex items-center justify-center group"
                                        whileHover={{ scale: 1.1, x: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ChevronLeft size={getIconSize()} className="text-gray-300 group-hover:text-yellow-400 transition-colors" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </motion.button>
                                )}

                                <motion.button
                                    onClick={nextMovie}
                                    className="absolute right-2 sm:right-4 md:right-8 z-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-l from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 flex items-center justify-center group"
                                    whileHover={{ scale: 1.1, x: 4 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronRight size={getIconSize()} className="text-gray-300 group-hover:text-yellow-400 transition-colors" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/10 to-amber-400/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.button>

                                {/* Movie Display */}
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
                                className="text-center mt-8 sm:mt-12 md:mt-16"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3">
                                    {getMovieTitle(currentMovie)}
                                </h2>
                                <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                                    {getMovieYear(currentMovie)} • {getMovieGenre(currentMovie)} • {getMovieRuntime(currentMovie)}
                                </p>
                                
                                {/* ENHANCED CLICK INDICATORS */}
                                <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                                    <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                                        <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800/50 rounded-full">#{currentRank} of {movies.length}</span>
                                        <span>•</span>
                                        <span className="hidden sm:inline">Click poster above for full analysis</span>
                                        <span className="sm:hidden">Tap poster for details</span>
                                    </div>
                                    
                                    {/* OBVIOUS CLICK BUTTON */}
                                    <motion.div 
                                        className="flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/30 rounded-xl sm:rounded-2xl px-6 py-3 sm:px-8 sm:py-4 hover:from-yellow-400/20 hover:via-amber-400/20 hover:to-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            handleMovieClick();
                                            window.location.href = `/movies/${currentMovie.imdbID}`;
                                        }}
                                    >
                                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                                        <span className="text-yellow-400 font-medium text-base sm:text-lg">
                                            <span className="hidden sm:inline">Explore Full Movie Analysis</span>
                                            <span className="sm:hidden">View Analysis</span>
                                        </span>
                                        <motion.div
                                            animate={{ x: [0, 6, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Navigation Dots */}
                            <NavigationDots 
                                movies={movies}
                                currentMovieIndex={currentMovieIndex}
                                goToMovie={goToMovie}
                            />

                            {/* MOBILE-RESPONSIVE MOVIE COUNTER */}
                            <motion.div
                                className="flex justify-center mt-6 sm:mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.5 }}
                            >
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 bg-gradient-to-r from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-yellow-400/20">
                                    <span className="text-yellow-400 font-light text-base sm:text-lg md:text-xl">
                                        #{currentRank}
                                    </span>
                                    <div className="w-12 h-2 sm:w-16 sm:h-2 md:w-24 md:h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                                            style={{ width: `${((currentMovieIndex + 1) / movies.length) * 100}%` }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    </div>
                                    <span className="text-gray-400 font-light text-xs sm:text-sm md:text-base">
                                        <span className="hidden md:inline">of Top {movies.length} Movies Like Inception</span>
                                        <span className="hidden sm:inline md:hidden">of Top {movies.length}</span>
                                        <span className="sm:hidden">of {movies.length}</span>
                                    </span>
                                </div>
                            </motion.div>

                            {/* MOBILE-RESPONSIVE FOOTER */}
                            <motion.footer
                                className="bg-gradient-to-t from-gray-900 to-black mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-800/30 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4.5 }}
                            >
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-light tracking-wide mb-6 sm:mb-8 px-2">
                                    <span className="hidden sm:inline">Curated mind-bending cinema for film enthusiasts • Community reviews and expert analysis</span>
                                    <span className="sm:hidden">Curated cinema • Community reviews</span>
                                </p>
                                
                                <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8">
                                    <div className="w-12 h-px sm:w-16 sm:h-px md:w-24 md:h-px bg-gradient-to-r from-transparent to-gray-700"></div>
                                    <div className="text-yellow-400/60 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
                                        <span className="hidden sm:inline">Filmiway Cinema Collection</span>
                                        <span className="sm:hidden">Filmiway</span>
                                    </div>
                                    <div className="w-12 h-px sm:w-16 sm:h-px md:w-24 md:h-px bg-gradient-to-l from-transparent to-gray-700"></div>
                                </div>
                                
                                {/* TMDB ATTRIBUTION */}
                                <motion.div 
                                    className="mb-6 sm:mb-8 pt-4 sm:pt-6 border-t border-gray-900/50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 5, duration: 1 }}
                                >
                                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            Movie data powered by
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
                                                className="h-4 sm:h-5 w-auto"
                                            />
                                            <span className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors">
                                                <span className="hidden sm:inline">The Movie Database (TMDB)</span>
                                                <span className="sm:hidden">TMDB</span>
                                            </span>
                                        </a>
                                    </div>
                                    <p className="text-gray-700 text-xs mt-2 text-center px-2">
                                        <span className="hidden sm:inline">This product uses the TMDB API but is not endorsed or certified by TMDB.</span>
                                        <span className="sm:hidden">Uses TMDB API</span>
                                    </p>
                                </motion.div>

                                <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 text-gray-500 text-xs sm:text-sm pb-6 sm:pb-8">
                                    <span>© 2025 Filmiway</span>
                                    <span>•</span>
                                    <span className="hidden sm:inline">All Rights Reserved</span>
                                    <span className="sm:hidden">Rights Reserved</span>
                                    <span>•</span>
                                    <span className="hidden md:inline">Where Every Film Finds Its Way</span>
                                    <span className="md:hidden">Film Discovery</span>
                                </div>
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
        ?.map(imdbId => COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId))
        .filter(Boolean)
        .reverse() || []; // Reverse to show highest ranked first

    return {
        props: {
            collection,
            movies
        }
    };
}

export default CollectionPage;
