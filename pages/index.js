// pages/index.js - YOUR ORIGINAL WORKING VERSION
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    Play, Star, TrendingUp, Award, Clock, Calendar, 
    Search, Menu, X, ArrowRight, Film, Zap, Target, Eye,
    ChevronLeft, ChevronRight, Construction, Sparkles, 
    Compass, Globe, Layers
} from 'lucide-react';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FilmiwayHomepage = () => {
    const router = useRouter();
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const trendingRef = useRef(null);
    const popularRef = useRef(null);
    const topRatedRef = useRef(null);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(
                typeof window !== 'undefined' &&
                (window.innerWidth < 768 || 'ontouchstart' in window)
            );
        };
        
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

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

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    const Navigation = () => (
        <motion.nav 
            className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md select-none"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-28">
                    <Link href="/" className="flex items-center justify-start relative">
                        <div className="w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-32 lg:w-64 lg:h-36 flex items-center justify-start">
                            <img 
                                src="/filmiway-logo.svg" 
                                alt="Filmiway - Where Every Film Finds Its Way" 
                                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                draggable={false}
                            />
                        </div>
                        <div className="absolute top-2 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full shadow-lg animate-pulse">
                            NEW
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1 text-lg">Home</Link>
                        <Link href="/collection/movies-like-inception" className="text-gray-300 hover:text-white transition-colors text-lg">Collections</Link>
                        <button 
                            onClick={() => scrollToSection(trendingRef)}
                            className="text-gray-300 hover:text-white transition-colors text-lg cursor-pointer"
                        >
                            Trending
                        </button>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">About</Link>
                    </div>

                    <button 
                        className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

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
                                <Link href="/collection/movies-like-inception" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Movies Like Inception</Link>
                                <Link href="/collection/movies-like-memento" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Movies Like Memento</Link>
                                <Link href="/collection/movies-like-shutter-island" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Movies Like Shutter Island</Link>
                                <button 
                                    onClick={() => {
                                        scrollToSection(trendingRef);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="block text-gray-300 hover:text-white transition-colors py-3 text-lg w-full text-left"
                                >
                                    Trending
                                </button>
                                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">About</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );

    const HeroSection = () => (
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden select-none">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/20 rounded-full px-8 py-3 text-yellow-400 text-sm font-medium">
                            <Globe className="w-5 h-5" />
                            <span>Your Complete Movie Discovery Platform</span>
                            <Sparkles className="w-5 h-5" />
                        </div>
                    </motion.div>

                    <motion.h1 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Discover Your Next
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 font-light">
                            Favorite Movie
                        </span>
                        <span className="block text-white/90 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Collection
                        </span>
                    </motion.h1>

                    <motion.p 
                        className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light leading-relaxed max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        From mind-bending psychological thrillers to sci-fi masterpieces, explore expertly curated collections of cinema.
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 font-normal"> Where every film finds its way.</span>
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 1 }}
                    >
                        <Link href="/collection/movies-like-inception">
                            <motion.button
                                className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-4 hover:from-yellow-300 hover:to-amber-300 transition-all shadow-2xl shadow-yellow-400/25"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Compass className="w-6 h-6" />
                                Explore Collections
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                        </Link>
                        
                        <motion.button
                            onClick={() => scrollToSection(trendingRef)}
                            className="border-2 border-gray-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-4 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all cursor-pointer"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <TrendingUp className="w-6 h-6" />
                            What's Trending
                        </motion.button>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 mb-16 max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <div className="flex items-center justify-center mb-6 gap-3">
                            <Layers className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-2xl font-light text-white">Featured Collections</h2>
                            <Layers className="w-6 h-6 text-yellow-400" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/collection/movies-like-inception" className="group">
                                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/40 transition-all duration-300">
                                    <div className="text-blue-400 font-semibold text-lg mb-2 group-hover:text-blue-300">Mind-Bending Sci-Fi</div>
                                    <div className="text-gray-300 text-sm group-hover:text-white">Movies Like Inception</div>
                                </div>
                            </Link>
                            
                            <Link href="/collection/movies-like-memento" className="group">
                                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 hover:from-yellow-500/20 hover:to-orange-500/20 hover:border-yellow-400/40 transition-all duration-300">
                                    <div className="text-yellow-400 font-semibold text-lg mb-2 group-hover:text-yellow-300">Memory Thrillers</div>
                                    <div className="text-gray-300 text-sm group-hover:text-white">Movies Like Memento</div>
                                </div>
                            </Link>
                            
                            <Link href="/collection/movies-like-shutter-island" className="group">
                                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-6 hover:from-green-500/20 hover:to-teal-500/20 hover:border-green-400/40 transition-all duration-300">
                                    <div className="text-green-400 font-semibold text-lg mb-2 group-hover:text-green-300">Psychological Horror</div>
                                    <div className="text-gray-300 text-sm group-hover:text-white">Movies Like Shutter Island</div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                >
                    {!isMobile ? (
                        <>
                            <motion.div 
                                className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center mb-3"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
                            </motion.div>
                            <motion.p 
                                className="text-gray-500 text-xs uppercase tracking-wider"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Scroll to explore
                            </motion.p>
                        </>
                    ) : (
                        <>
                            <motion.div 
                                className="flex items-center space-x-2 mb-3"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <motion.div 
                                    className="w-8 h-8 border-2 border-gray-600 rounded-lg flex items-center justify-center"
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                        borderColor: ['rgb(75, 85, 99)', 'rgb(250, 204, 21)', 'rgb(75, 85, 99)']
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <motion.div 
                                        className="w-3 h-3 bg-yellow-400 rounded-sm"
                                        animate={{ 
                                            y: [0, -4, 0],
                                            opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>
                                
                                <motion.div 
                                    className="flex space-x-1"
                                    animate={{ x: [0, -8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                    <div className="w-1 h-1 bg-yellow-400/60 rounded-full"></div>
                                    <div className="w-1 h-1 bg-yellow-400/30 rounded-full"></div>
                                </motion.div>
                            </motion.div>
                            
                            <motion.p 
                                className="text-gray-500 text-xs uppercase tracking-wider"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Swipe to explore
                            </motion.p>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );

    const ProfessionalCarousel = ({ movies, sectionRef, sectionTitle }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [currentX, setCurrentX] = useState(0);
        
        const itemsPerView = {
            mobile: 2,
            tablet: 3,
            desktop: 6
        };

        const getItemsPerView = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth < 640) return itemsPerView.mobile;
                if (window.innerWidth < 1024) return itemsPerView.tablet;
                return itemsPerView.desktop;
            }
            return itemsPerView.desktop;
        };

        const [itemsToShow, setItemsToShow] = useState(getItemsPerView());

        useEffect(() => {
            const handleResize = () => {
                setItemsToShow(getItemsPerView());
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const maxIndex = Math.max(0, movies.length - itemsToShow);

        const nextSlide = useCallback(() => {
            setCurrentIndex(prev => {
                if (prev < maxIndex) {
                    return prev + 1;
                }
                return prev;
            });
        }, [maxIndex]);

        const prevSlide = useCallback(() => {
            setCurrentIndex(prev => {
                if (prev > 0) {
                    return prev - 1;
                }
                return prev;
            });
        }, []);

        const handleStart = (e) => {
            setIsDragging(true);
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            setStartX(clientX);
            setCurrentX(clientX);
        };

        const handleMove = (e) => {
            if (!isDragging) return;
            
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            setCurrentX(clientX);
        };

        const handleEnd = () => {
            if (!isDragging) return;
            
            const diff = startX - currentX;
            const threshold = 50;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0 && currentIndex < maxIndex) {
                    nextSlide();
                } else if (diff < 0 && currentIndex > 0) {
                    prevSlide();
                }
            }
            
            setIsDragging(false);
            setStartX(0);
            setCurrentX(0);
        };

        return (
            <div ref={sectionRef} className="relative select-none">
                {!isMobile && (
                    <>
                        <motion.button
                            onClick={prevSlide}
                            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300 flex items-center justify-center group ${
                                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800/90 hover:border-yellow-400/50'
                            }`}
                            whileHover={currentIndex > 0 ? { scale: 1.1, x: -2 } : {}}
                            whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className={`w-6 h-6 ${currentIndex === 0 ? 'text-gray-600' : 'text-yellow-400 group-hover:text-yellow-300'}`} />
                        </motion.button>

                        <motion.button
                            onClick={nextSlide}
                            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300 flex items-center justify-center group ${
                                currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800/90 hover:border-yellow-400/50'
                            }`}
                            whileHover={currentIndex < maxIndex ? { scale: 1.1, x: 2 } : {}}
                            whileTap={currentIndex < maxIndex ? { scale: 0.95 } : {}}
                            disabled={currentIndex >= maxIndex}
                        >
                            <ChevronRight className={`w-6 h-6 ${currentIndex >= maxIndex ? 'text-gray-600' : 'text-yellow-400 group-hover:text-yellow-300'}`} />
                        </motion.button>
                    </>
                )}

                <div 
                    className={`overflow-hidden ${!isMobile ? 'px-8' : 'px-0'} ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''} select-none`}
                    onMouseDown={isMobile ? handleStart : undefined}
                    onMouseMove={isMobile ? handleMove : undefined}
                    onMouseUp={isMobile ? handleEnd : undefined}
                    onMouseLeave={isMobile ? handleEnd : undefined}
                    onTouchStart={handleStart}
                    onTouchMove={handleMove}
                    onTouchEnd={handleEnd}
                    style={{ touchAction: 'pan-y' }}
                >
                    <motion.div 
                        className="flex transition-transform duration-500 ease-out"
                        style={{ 
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%) ${isDragging ? `translateX(${(currentX - startX) * 0.5}px)` : ''}`,
                            width: `${(movies.length / itemsToShow) * 100}%`
                        }}
                    >
                        {movies.map((movie, index) => (
                            <div 
                                key={movie.id} 
                                className="flex-shrink-0 px-3"
                                style={{ width: `${100 / movies.length}%` }}
                            >
                                <MovieCard movie={movie} index={index} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {maxIndex > 0 && (
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-yellow-400 scale-125' 
                                        : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const MovieCard = ({ movie, index }) => (
        <motion.div
            className="group cursor-pointer select-none"
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
                    alt={`${movie.title} movie poster`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    draggable={false}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-semibold text-base sm:text-lg mb-2 line-clamp-2">
                            {movie.title}
                        </h3>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                                <span className="text-yellow-400 font-medium text-sm">{movie.vote_average?.toFixed(1)}</span>
                            </div>
                            <span className="text-gray-300 text-xs sm:text-sm">
                                {new Date(movie.release_date).getFullYear()}
                            </span>
                        </div>
                        <button className="w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-xs sm:text-sm">
                            {isMobile ? "Details" : "View Details"}
                        </button>
                    </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-xs sm:text-sm font-medium">{movie.vote_average?.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const MovieSection = ({ title, movies, icon: Icon, description, sectionRef }) => (
        <section className="mb-20 select-none">
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
            
            <ProfessionalCarousel movies={movies} sectionRef={sectionRef} sectionTitle={title} />
        </section>
    );

    const UnderConstructionSection = () => (
        <motion.section 
            className="py-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-3xl border border-gray-700/30 mb-20 select-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="text-center px-4">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <Construction className="w-10 h-10 text-orange-400" />
                    <h2 className="text-3xl sm:text-4xl font-light text-white">Under Construction</h2>
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
                
                <p className="text-xl sm:text-2xl text-orange-300 mb-6 font-light">
                    Something Amazing is Cooking!
                </p>
                
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                    We're working hard behind the scenes to bring you incredible new features. 
                    Stay tuned for exciting updates coming your way!
                </p>
                
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <span className="text-lg">⏳</span>
                    <span className="font-medium">Development in Progress</span>
                    <span className="text-lg">🚀</span>
                </div>
            </div>
        </motion.section>
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center select-none">
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
                <title>Filmiway | Curated Movie Collections & Discovery Platform</title>
                <meta name="description" content="Discover expertly curated movie collections featuring mind-bending thrillers, psychological masterpieces, and sci-fi classics. Your complete film discovery platform." />
                <link rel="canonical" href="https://filmiway.com/" />
            </Head>

            <div className="min-h-screen bg-black select-none">
                <Navigation />
                <HeroSection />

                <main className="container mx-auto px-4 sm:px-6 py-20 space-y-20">
                    <MovieSection 
                        title="Trending This Week" 
                        description="The most popular films everyone's talking about right now"
                        movies={trendingMovies} 
                        icon={TrendingUp}
                        sectionRef={trendingRef}
                    />
                    
                    <MovieSection 
                        title="Popular Movies" 
                        description="Crowd favorites and widely beloved cinematic experiences"
                        movies={popularMovies} 
                        icon={Star}
                        sectionRef={popularRef}
                    />
                    
                    <MovieSection 
                        title="Critically Acclaimed" 
                        description="Award-winning films praised by critics and cinephiles"
                        movies={topRatedMovies} 
                        icon={Award}
                        sectionRef={topRatedRef}
                    />
                    
                    <UnderConstructionSection />
                </main>

                <footer className="bg-gradient-to-t from-gray-900 to-black py-16 border-t border-gray-800 select-none">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center">
                                    <img src="/filmiway-logo.svg" alt="Filmiway - Where Every Film Finds Its Way" className="w-full h-full object-contain" draggable={false} />
                                </div>
                            </div>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Your complete movie discovery platform for amazing films across every genre and era.
                            </p>

                            <motion.div className="mb-8 pt-6 border-t border-gray-900/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <p className="text-gray-600 text-sm">Movie data and posters powered by</p>
                                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database logo" className="h-5 w-auto" draggable={false} />
                                        <span className="text-blue-400 text-sm hover:text-blue-300 transition-colors">The Movie Database (TMDB)</span>
                                    </a>
                                </div>
                                <p className="text-gray-700 text-xs mt-2 text-center">
                                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                                </p>
                            </motion.div>

                            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500 text-sm mb-6">
                                <span>&copy; 2025 Filmiway</span>
                                <span>&bull;</span>
                                <Link href="/about" className="hover:text-yellow-400 transition-colors underline">About Us</Link>
                                <span>&bull;</span>
                                <Link href="/contact" className="hover:text-yellow-400 transition-colors underline">Contact</Link>
                                <span>&bull;</span>
                                <Link href="/privacy" className="hover:text-yellow-400 transition-colors underline">Privacy</Link>
                                <span>&bull;</span>
                                <Link href="/terms" className="hover:text-yellow-400 transition-colors underline">Terms</Link>
                            </div>

                            <p className="text-gray-600 text-sm italic">Where Every Film Finds Its Way</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default FilmiwayHomepage;
