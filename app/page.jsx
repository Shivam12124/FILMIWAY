// app/page.js
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Crown, Menu, X, User, Search } from 'lucide-react';
import WhatToWatchWizard from '@/components/WhatToWatch/WhatToWatchWizard';
import Image from 'next/image';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';

// HEADER COMPONENT WITH SEARCH
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setIsMenuOpen(false); // Close mobile menu after search
        }
    };

    return (
        <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div 
                    className="flex items-center gap-3 cursor-pointer" 
                    onClick={() => router.push('/')}
                >
                    <div className="w-12 h-12 relative">
                        <Image
                            src="/filmiway-logo.svg"
                            alt="Filmiway Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-yellow-400 text-2xl font-bold tracking-wide">
                        FILMIWAY
                    </h1>
                </div>
                
                {/* Search Bar - Desktop */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
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

                {/* Navigation Menu - Desktop */}
                <nav className="hidden lg:flex items-center gap-6 text-gray-300">
                    <a href="#trending" className="hover:text-yellow-400 transition-colors font-medium">
                        Trending
                    </a>
                    <a href="#acclaimed" className="hover:text-yellow-400 transition-colors font-medium">
                        Critically Acclaimed
                    </a>
                    <a href="#mind-bending" className="hover:text-yellow-400 transition-colors font-medium">
                        Mind-Bending
                    </a>
                    <a href="#what-to-watch" className="hover:text-yellow-400 transition-colors font-medium">
                        What to Watch Tonight
                    </a>
                </nav>
                
                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* Sign In Button */}
                    <button
                        onClick={() => router.push('/signin')}
                        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                        <User size={18} />
                        <span className="hidden sm:inline">Sign In</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.nav 
                    className="lg:hidden bg-black/95 border-t border-gray-800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="container mx-auto px-6 py-4 space-y-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="flex">
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
                        
                        {/* Mobile Navigation Links */}
                        <div className="pt-2 border-t border-gray-700 space-y-3">
                            <a 
                                href="#trending" 
                                className="block text-gray-300 hover:text-yellow-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                🔥 Trending
                            </a>
                            <a 
                                href="#acclaimed" 
                                className="block text-gray-300 hover:text-yellow-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ⭐ Critically Acclaimed
                            </a>
                            <a 
                                href="#mind-bending" 
                                className="block text-gray-300 hover:text-yellow-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                🧠 Mind-Bending
                            </a>
                            <a 
                                href="#what-to-watch" 
                                className="block text-gray-300 hover:text-yellow-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                🎭 What to Watch Tonight
                            </a>
                        </div>
                    </div>
                </motion.nav>
            )}
        </header>
    );
};

// HERO BANNER
const HeroBanner = () => {
    return (
        <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="container mx-auto text-center">
                <motion.div
                    className="flex items-center justify-center gap-4 mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-16 h-16 relative">
                        <Image
                            src="/filmiway-logo.svg"
                            alt="Filmiway Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-light text-yellow-400">
                        FILMIWAY
                    </h1>
                </motion.div>
                <motion.p 
                    className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Discover amazing movies with curated collections and community reviews
                </motion.p>
                
                {/* Quick Search CTA */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <p className="text-gray-400 text-sm mb-4">
                        Looking for something specific? Use the search above ↑
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

// MOVIE CARD
const MovieCard = ({ movie }) => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/movie/${movie.id}`);
    };

    return (
        <motion.div 
            className="min-w-[200px] cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
        >
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 group-hover:border-yellow-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/20">
                <div className="relative">
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '/placeholder.jpg'}
                        alt={movie.title}
                        className="w-full h-[300px] object-cover group-hover:brightness-110 transition-all duration-300"
                        loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 rounded-full px-2 py-1 flex items-center gap-1">
                        <Star size={12} className="text-yellow-400 fill-current" />
                        <span className="text-white text-xs font-medium">
                            {movie.vote_average?.toFixed(1)}
                        </span>
                    </div>
                </div>
                <div className="p-3">
                    <h3 className="text-white font-medium text-sm mb-1 truncate group-hover:text-yellow-400 transition-colors">
                        {movie.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                        <span className="text-gray-500">Click to view details</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// MOVIE CAROUSEL
const MovieCarousel = ({ title, movies, id }) => {
    return (
        <section id={id} className="py-12 px-6">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-yellow-400">{title}</h2>
                    <div className="text-gray-400 text-sm">
                        Scroll to see more →
                    </div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
                    {movies.slice(0, 15).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// COLLECTION LINK
const CollectionLink = () => {
    const router = useRouter();
    
    return (
        <section id="mind-bending" className="py-12 px-6">
            <div className="container mx-auto max-w-2xl">
                <motion.div 
                    onClick={() => router.push('/mind-benders')}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 border border-yellow-500 rounded-lg p-8 text-center cursor-pointer hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                        TOP 10 MOVIES LIKE INCEPTION
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Mind-bending films with analysis and reviews
                    </p>
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 mx-auto">
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
            <div className="min-h-screen bg-black flex items-center justify-center">
                <motion.div 
                    className="flex items-center gap-4"
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
                    <div className="text-yellow-400 text-xl">Loading amazing movies...</div>
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
            <section id="what-to-watch" className="py-12 px-6">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                        🎭 What to Watch Tonight?
                    </h2>
                    <WhatToWatchWizard />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6 mt-12">
                <div className="container mx-auto text-center text-gray-400">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-8 relative">
                            <Image
                                src="/filmiway-logo.svg"
                                alt="Filmiway Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-yellow-400 font-semibold">FILMIWAY</span>
                    </div>
                    <p className="text-sm">
                        Discover amazing movies with curated collections and community reviews
                    </p>
                    <p className="text-xs mt-2 text-gray-500">
                        Powered by The Movie Database (TMDB)
                    </p>
                </div>
            </footer>
        </div>
    );
}
