"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Crown, Menu, X, User, Search } from 'lucide-react';
import WhatToWatchWizard from '@/components/WhatToWatch/WhatToWatchWizard';
import Image from 'next/image';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';

// MOBILE-FIRST HEADER COMPONENT
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                {/* Logo Section - Mobile Optimized */}
                <div 
                    className="flex items-center gap-2 cursor-pointer" 
                    onClick={() => router.push('/')}
                >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                        <Image
                            src="/filmiway-logo.svg"
                            alt="Filmiway Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-yellow-400 text-lg sm:text-2xl font-bold tracking-wide">
                        FILMIWAY
                    </h1>
                </div>
                
                {/* Desktop Search Bar */}
                <div className="hidden lg:flex flex-1 max-w-md mx-8">
                    <form onSubmit={handleSearch} className="flex w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search movies..."
                            className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-600 focus:border-yellow-400 focus:outline-none placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-r-lg transition-colors flex items-center justify-center"
                        >
                            <Search size={18} />
                        </button>
                    </form>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Sign In Button - Mobile Optimized */}
                    <button
                        onClick={() => router.push('/signin')}
                        className="flex items-center gap-1 sm:gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-2 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                    >
                        <User size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Sign In</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-gray-300 hover:text-yellow-400 transition-colors p-1"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Enhanced */}
            {isMenuOpen && (
                <motion.nav 
                    className="lg:hidden bg-black/95 border-t border-gray-800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="px-4 py-4 space-y-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search movies..."
                                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-l-lg border border-gray-600 focus:border-yellow-400 focus:outline-none placeholder-gray-400 text-base"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-3 rounded-r-lg transition-colors flex items-center justify-center"
                            >
                                <Search size={18} />
                            </button>
                        </form>
                        
                        {/* Mobile Navigation Links */}
                        <div className="pt-2 border-t border-gray-700 space-y-4">
                            <a 
                                href="#trending" 
                                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors py-2 text-base"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-xl">🔥</span>
                                Trending Movies
                            </a>
                            <a 
                                href="#acclaimed" 
                                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors py-2 text-base"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-xl">⭐</span>
                                Critically Acclaimed
                            </a>
                            <a 
                                href="#mind-bending" 
                                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors py-2 text-base"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-xl">🧠</span>
                                Mind-Bending Collection
                            </a>
                            <a 
                                href="#what-to-watch" 
                                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors py-2 text-base"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-xl">🎭</span>
                                What to Watch Tonight
                            </a>
                        </div>
                    </div>
                </motion.nav>
            )}
        </header>
    );
};

// MOBILE-FIRST HERO BANNER
const HeroBanner = () => {
    return (
        <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="container mx-auto text-center max-w-4xl">
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                        <Image
                            src="/filmiway-logo.svg"
                            alt="Filmiway Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-light text-yellow-400 leading-tight">
                        FILMIWAY
                    </h1>
                </motion.div>
                <motion.p 
                    className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Discover amazing movies with curated collections and community reviews
                </motion.p>
                
                {/* Mobile CTA */}
                <motion.div
                    className="mt-6 sm:mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <p className="text-gray-400 text-sm mb-4">
                        👆 Search movies above or explore collections below
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

// MOBILE-OPTIMIZED MOVIE CARD
const MovieCard = ({ movie }) => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/movie/${movie.id}`);
    };

    return (
        <motion.div 
            className="min-w-[140px] sm:min-w-[200px] cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
        >
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 group-hover:border-yellow-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/20">
                <div className="relative">
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '/placeholder.jpg'}
                        alt={movie.title}
                        className="w-full h-[200px] sm:h-[300px] object-cover group-hover:brightness-110 transition-all duration-300"
                        loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center gap-1">
                        <Star size={10} className="text-yellow-400 fill-current" />
                        <span className="text-white text-xs font-medium">
                            {movie.vote_average?.toFixed(1)}
                        </span>
                    </div>
                </div>
                <div className="p-2 sm:p-3">
                    <h3 className="text-white font-medium text-xs sm:text-sm mb-1 line-clamp-2 group-hover:text-yellow-400 transition-colors leading-tight">
                        {movie.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                        <span className="text-gray-500 text-[10px] sm:text-xs">Tap for details</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// MOBILE-OPTIMIZED MOVIE CAROUSEL
const MovieCarousel = ({ title, movies, id }) => {
    return (
        <section id={id} className="py-8 sm:py-12 px-4 sm:px-6">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">{title}</h2>
                    <div className="text-gray-400 text-xs sm:text-sm">
                        Swipe →
                    </div>
                </div>
                <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
                    {movies.slice(0, 15).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// MOBILE-OPTIMIZED COLLECTION LINK
const CollectionLink = () => {
    const router = useRouter();
    
    return (
        <section id="mind-bending" className="py-8 sm:py-12 px-4 sm:px-6">
            <div className="container mx-auto max-w-2xl">
                <motion.div 
                    onClick={() => router.push('/mind-benders')}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 border border-yellow-500 rounded-lg p-6 sm:p-8 text-center cursor-pointer hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 leading-tight">
                        TOP 10 MOVIES LIKE INCEPTION
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                        Mind-bending films with detailed analysis and community reviews
                    </p>
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base">
                        Explore Collection
                        <ChevronRight size={16} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

// MAIN HOMEPAGE
export default function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [trending, topRated] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`).then(r => r.json()),
                    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`).then(r => r.json())
                ]);
                
                setTrendingMovies(trending.results || []);
                setTopRatedMovies(topRated.results || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-12 h-12 relative">
                        <Image
                            src="/filmiway-logo.svg"
                            alt="Filmiway Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="text-yellow-400 text-lg sm:text-xl text-center">Loading amazing movies...</div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <HeroBanner />
            
            {/* Movie Carousels */}
            <MovieCarousel 
                title="🔥 Trending Movies" 
                movies={trendingMovies} 
                id="trending"
            />
            <MovieCarousel 
                title="⭐ Critically Acclaimed" 
                movies={topRatedMovies} 
                id="acclaimed"
            />
            
            {/* Collection Link */}
            <CollectionLink />
            
            {/* What to Watch Tonight Feature */}
            <section id="what-to-watch" className="py-8 sm:py-12 px-4 sm:px-6">
                <div className="container mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-6 text-center">
                        🎭 What to Watch Tonight?
                    </h2>
                    <WhatToWatchWizard />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-6 sm:py-8 px-4 sm:px-6 mt-8 sm:mt-12">
                <div className="container mx-auto text-center text-gray-400">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
                            <Image
                                src="/filmiway-logo.svg"
                                alt="Filmiway Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-yellow-400 font-semibold text-lg sm:text-xl">FILMIWAY</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-2">
                        Discover amazing movies with curated collections and community reviews
                    </p>
                    <p className="text-xs text-gray-500">
                        Powered by The Movie Database (TMDB)
                    </p>
                </div>
            </footer>
        </div>
    );
}
