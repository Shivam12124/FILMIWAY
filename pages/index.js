// pages/index.js - COMPLETE HOMEPAGE WITH MASSIVE LEFT-POSITIONED LOGO
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    Play, Star, TrendingUp, Award, Clock, Calendar, 
    Search, Menu, X, ArrowRight, Film, Zap, Target, Eye
} from 'lucide-react';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FilmiwayHomepage = () => {
    const router = useRouter();
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Fetch movies from TMDB API
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [trendingRes, popularRes, topRatedRes] = await Promise.all([
                    fetch(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`),
                    fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`),
                    fetch(`${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`)
                ]);

                const [trending, popular, topRated] = await Promise.all([
                    trendingRes.json(),
                    popularRes.json(),
                    topRatedRes.json()
                ]);

                setTrendingMovies(trending.results?.slice(0, 12) || []);
                setPopularMovies(popular.results?.slice(0, 12) || []);
                setTopRatedMovies(topRated.results?.slice(0, 12) || []);
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // Navigation Component - MASSIVE LEFT-POSITIONED LOGO
    const Navigation = () => (
        <motion.nav 
            className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-28">
                    {/* MASSIVE LEFT-POSITIONED LOGO */}
                    <Link href="/" className="flex items-center justify-start">
                        <div className="w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-32 lg:w-64 lg:h-36 flex items-center justify-start">
                            <img 
                                src="/filmiway-logo.svg" 
                                alt="Filmiway" 
                                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1 text-lg">Home</Link>
                        <Link href="/collection/movies-like-inception" className="text-gray-300 hover:text-white transition-colors text-lg">Collections</Link>
                        <Link href="/trending" className="text-gray-300 hover:text-white transition-colors text-lg">Trending</Link>
                        <Link href="/search" className="text-gray-300 hover:text-white transition-colors text-lg">Search</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <div className="px-4 py-6 space-y-4">
                                <Link href="/" className="block text-yellow-400 font-medium py-3 text-lg">Home</Link>
                                <Link href="/collection/movies-like-inception" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Collections</Link>
                                <Link href="/trending" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Trending</Link>
                                <Link href="/search" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Search</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );

    // HERO SECTION - UPDATED FOR ALL GENRES
    const HeroSection = () => (
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Featured Tagline */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-6 py-2 text-yellow-400 text-sm font-medium">
                            <Film className="w-4 h-4" />
                            <span>"Where every film finds its way — it's Filmiway."</span>
                        </div>
                    </motion.div>

                    {/* Main Headline - UPDATED */}
                    <motion.h1 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 leading-tight"
                        style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Discover
                        <span className="block text-yellow-400 font-light">
                            Amazing
                        </span>
                        <span className="block text-white/90">
                            Movies
                        </span>
                    </motion.h1>

                    {/* Subtitle - UPDATED FOR ALL GENRES */}
                    <motion.p 
                        className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light leading-relaxed max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        From trending blockbusters to hidden gems, explore movies across every genre and era.
                        <span className="text-yellow-400/90"> Your complete movie discovery platform.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 1 }}
                    >
                        <Link href="/collection/movies-like-inception">
                            <motion.button
                                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/25"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Collections
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        
                        <Link href="/trending">
                            <motion.button
                                className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:border-yellow-400 hover:text-yellow-400 transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <TrendingUp className="w-5 h-5" />
                                What's Trending
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats - UPDATED */}
                    <motion.div 
                        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wide">Movies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">50+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wide">Genres</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wide">Discovery</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );

    // ENHANCED MOVIE CARD WITH NAVIGATION
    const MovieCard = ({ movie, index }) => (
        <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onClick={() => router.push(`/movie/${movie.id}`)}
        >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
                <img
                    src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                            {movie.title}
                        </h3>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-yellow-400 font-medium">{movie.vote_average?.toFixed(1)}</span>
                            </div>
                            <span className="text-gray-300 text-sm">
                                {new Date(movie.release_date).getFullYear()}
                            </span>
                        </div>
                        <button className="w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">{movie.vote_average?.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    // Movie Section
    const MovieSection = ({ title, movies, icon: Icon, description }) => (
        <section className="mb-20">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-yellow-400" />
                    <h2 className="text-3xl sm:text-4xl font-light text-white">{title}</h2>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {movies.map((movie, index) => (
                    <MovieCard key={movie.id} movie={movie} index={index} />
                ))}
            </div>
        </section>
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <h2 className="text-yellow-400 text-2xl font-semibold mb-2">Loading Filmiway</h2>
                    <p className="text-gray-400">Where every film finds its way...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Filmiway - Where Every Film Finds Its Way</title>
                <meta name="description" content="Discover amazing movies across every genre and era. From trending blockbusters to hidden gems - your complete movie discovery platform." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-black">
                <Navigation />
                <HeroSection />

                {/* Movie Sections */}
                <div className="container mx-auto px-4 sm:px-6 py-20 space-y-20">
                    <MovieSection 
                        title="Trending This Week" 
                        description="The most popular films everyone's talking about right now"
                        movies={trendingMovies} 
                        icon={TrendingUp}
                    />
                    
                    <MovieSection 
                        title="Popular Movies" 
                        description="Crowd favorites and widely beloved cinematic experiences"
                        movies={popularMovies} 
                        icon={Star}
                    />
                    
                    <MovieSection 
                        title="Critically Acclaimed" 
                        description="Award-winning films praised by critics and cinephiles"
                        movies={topRatedMovies} 
                        icon={Award}
                    />
                </div>

                {/* Footer - MASSIVE LOGO ONLY */}
                <footer className="bg-gradient-to-t from-gray-900 to-black py-16 border-t border-gray-800">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center">
                                    <img 
                                        src="/filmiway-logo.svg" 
                                        alt="Filmiway" 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md mx-auto">
                                Your complete movie discovery platform for amazing films across every genre and era.
                            </p>
                            <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm">
                                <span>© 2025 Filmiway</span>
                                <span>•</span>
                                <span>All Rights Reserved</span>
                                <span>•</span>
                                <span>Powered by TMDB</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default FilmiwayHomepage;
