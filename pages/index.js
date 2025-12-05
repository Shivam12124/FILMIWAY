// pages/index.js - PERFORMANCE OPTIMIZED VERSION ⚡
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    Play, Star, TrendingUp, Award, 
    Search, Menu, X, ArrowRight, Zap,
    ChevronLeft, ChevronRight, Construction, Sparkles, 
    Compass, Globe, Layers
} from 'lucide-react';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// ✅ Memoized Movie Card for better performance
const MovieCard = memo(({ movie, index, isMobile, onClick }) => (
    <motion.div
        className="group cursor-pointer select-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        whileHover={!isMobile ? { y: -8, transition: { duration: 0.2 } } : {}}
        onClick={onClick}
        style={{ contain: 'layout style paint' }}
    >
        <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
<Image
    src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
    alt={movie.title}
    width={500}
    height={750}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
));

MovieCard.displayName = 'MovieCard';

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

    // ✅ FILTER FUNCTION - Excludes Indian language movies
    const filterOutIndianMovies = (movies) => {
        const indianLanguages = ['hi', 'ta', 'te', 'ml', 'kn', 'gu', 'bn', 'mr', 'pa'];
        return movies.filter(movie => {
            return !indianLanguages.includes(movie.original_language);
        });
    };
    
    // ✅ Debounced resize handler
    useEffect(() => {
        let timeout;
        const checkDevice = () => {
            setIsMobile(
                typeof window !== 'undefined' &&
                (window.innerWidth < 768 || 'ontouchstart' in window)
            );
        };
        
        checkDevice();
        
        const debouncedResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(checkDevice, 150);
        };
        
        window.addEventListener('resize', debouncedResize, { passive: true });
        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeout);
        };
    }, []);

    // ✅ OPTIMIZED API CALLS WITH REGION FILTERING
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // 🎯 PRIMARY METHOD: TMDB's region bias (US = Western content)
                const [trendingRes, popularRes, topRatedRes] = await Promise.all([
                    fetch(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}&region=US&language=en-US`),
                    fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&region=US&language=en-US`),
                    fetch(`${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&region=US&language=en-US`)
                ]);

                const [trending, popular, topRated] = await Promise.all([
                    trendingRes.json(),
                    popularRes.json(),
                    topRatedRes.json()
                ]);

                // ✅ BACKUP FILTER: Only needed for edge cases (co-productions)
                const filteredTrending = filterOutIndianMovies(trending.results?.slice(0, 10) || []);
                const filteredPopular = filterOutIndianMovies(popular.results?.slice(0, 10) || []);
                const filteredTopRated = filterOutIndianMovies(topRated.results?.slice(0, 10) || []);

                setTrendingMovies(filteredTrending);
                setPopularMovies(filteredPopular);
                setTopRatedMovies(filteredTopRated);
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const scrollToSection = useCallback((ref) => {
        ref.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, []);

    const Navigation = memo(() => (
        <motion.nav 
            className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md select-none"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20 sm:h-24">
                    <Link href="/" className="flex items-center justify-start relative">
                       <div className="w-48 h-20 sm:w-56 sm:h-24 md:w-64 md:h-28 lg:w-72 lg:h-32 flex items-center justify-start">
                           <Image
                               src="/filmiway-logo.svg"
                               alt="Filmiway"
                               width={192}
                               height={80}
                               priority={true}
                               className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                               draggable={false}
                           />
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1">Home</Link>
                        <Link href="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link>
                        <button 
                            onClick={() => scrollToSection(trendingRef)}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Trending
                        </button>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                    </div>

                    <button 
                        className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                            <div className="px-4 py-4 space-y-3">
                                <Link href="/" className="block text-yellow-400 font-medium py-2">Home</Link>
                                <Link href="/collections" className="block text-gray-300 hover:text-white transition-colors py-2">Collections</Link>
                                <button 
                                    onClick={() => {
                                        scrollToSection(trendingRef);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="block text-gray-300 hover:text-white transition-colors py-2 w-full text-left"
                                >
                                    Trending
                                </button>
                                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors py-2">About</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    ));

    Navigation.displayName = 'Navigation';

    const HeroSection = memo(() => (
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden select-none">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/20 rounded-full px-6 py-2 text-yellow-400 text-sm font-medium">
                            <Globe className="w-4 h-4" />
                            <span>Your Complete Movie Discovery Platform</span>
                            <Sparkles className="w-4 h-4" />
                        </div>
                    </motion.div>

                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Discover Your Next
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 font-light">
                            Favorite Movie
                        </span>
                    </motion.h1>

                    <motion.p 
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        From mind-bending psychological thrillers to sci-fi masterpieces, explore expertly curated collections.
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 font-normal"> Where every film finds its way.</span>
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <Link href="/collections">
                            <motion.button
                                className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:from-yellow-300 hover:to-amber-300 transition-all shadow-2xl shadow-yellow-400/25"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Compass className="w-5 h-5" />
                                Explore Collections
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        
                        <motion.button
                            onClick={() => scrollToSection(trendingRef)}
                            className="border-2 border-gray-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all cursor-pointer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <TrendingUp className="w-5 h-5" />
                            What's Trending
                        </motion.button>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center mb-4 gap-2">
                            <Layers className="w-5 h-5 text-yellow-400" />
                            <h2 className="text-xl font-light text-white">Featured Collection</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Link href="/collection/best-survival-movies" className="group block">
                                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-6 hover:from-green-500/20 hover:to-teal-500/20 hover:border-green-400/40 transition-all duration-300">
                                    <div className="text-green-400 font-semibold text-xl mb-2 group-hover:text-green-300">
                                        Survival Movies
                                    </div>
                                    <div className="text-gray-300 text-lg group-hover:text-white mb-3">
                                        The Best Survival Films That Test Human Limits
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        Intense and raw survival stories emphasizing grit, pain, and human endurance.
                                    </div>
                                </div>
                            </Link>

                            <Link href="/collection/movies-like-shutter-island" className="group block">
                                <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-6 hover:from-purple-500/20 hover:to-indigo-500/20 hover:border-purple-400/40 transition-all duration-300">
                                    <div className="text-purple-400 font-semibold text-xl mb-2 group-hover:text-purple-300">
                                        Shutter Island Collection
                                    </div>
                                    <div className="text-gray-300 text-lg group-hover:text-white mb-3">
                                        Mind-Bending Psychological Thrillers Like Shutter Island
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        Explore high-intensity psychological mysteries with twists, suspense, and dark secrets.
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    ));

    HeroSection.displayName = 'HeroSection';

    const ProfessionalCarousel = memo(({ movies, sectionRef }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [currentX, setCurrentX] = useState(0);
        
        const itemsPerView = isMobile ? 2 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 3 : 6);
        const maxIndex = Math.max(0, movies.length - itemsPerView);

        const nextSlide = useCallback(() => {
            setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
        }, [maxIndex]);

        const prevSlide = useCallback(() => {
            setCurrentIndex(prev => Math.max(prev - 1, 0));
        }, []);

        const handleStart = useCallback((e) => {
            setIsDragging(true);
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            setStartX(clientX);
            setCurrentX(clientX);
        }, []);

        const handleMove = useCallback((e) => {
            if (!isDragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            setCurrentX(clientX);
        }, [isDragging]);

        const handleEnd = useCallback(() => {
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
        }, [isDragging, startX, currentX, currentIndex, maxIndex, nextSlide, prevSlide]);

        return (
            <div ref={sectionRef} className="relative select-none">
                {!isMobile && (
                    <>
                        <button
                            onClick={prevSlide}
                            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300 flex items-center justify-center ${
                                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800/90 hover:border-yellow-400/50'
                            }`}
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className={`w-5 h-5 ${currentIndex === 0 ? 'text-gray-600' : 'text-yellow-400'}`} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300 flex items-center justify-center ${
                                currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800/90 hover:border-yellow-400/50'
                            }`}
                            disabled={currentIndex >= maxIndex}
                        >
                            <ChevronRight className={`w-5 h-5 ${currentIndex >= maxIndex ? 'text-gray-600' : 'text-yellow-400'}`} />
                        </button>
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
                    <div 
                        className="flex transition-transform duration-500 ease-out"
                        style={{ 
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%) ${isDragging ? `translateX(${(currentX - startX) * 0.5}px)` : ''}`,
                            width: `${(movies.length / itemsPerView) * 100}%`
                        }}
                    >
                        {movies.map((movie, index) => (
                            <div 
                                key={movie.id} 
                                className="flex-shrink-0 px-2 sm:px-3"
                                style={{ width: `${100 / movies.length}%` }}
                            >
                                <MovieCard 
                                    movie={movie} 
                                    index={index} 
                                    isMobile={isMobile}
                                    onClick={() => router.push(`/movie/${movie.id}`)}
                                />
                            </div>
                        ))}
                    </div>
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
    });

    ProfessionalCarousel.displayName = 'ProfessionalCarousel';

    const MovieSection = memo(({ title, movies, icon: Icon, description, sectionRef }) => (
        <section className="mb-16 select-none">
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center gap-3 mb-3">
                    <Icon className="w-7 h-7 text-yellow-400" />
                    <h2 className="text-2xl sm:text-3xl font-light text-white">{title}</h2>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
            </motion.div>
            
            <ProfessionalCarousel movies={movies} sectionRef={sectionRef} />
        </section>
    ));

    MovieSection.displayName = 'MovieSection';

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center select-none">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h2 className="text-yellow-400 text-xl font-semibold mb-2">Loading Filmiway</h2>
                    <p className="text-gray-400">Where every film finds its way...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Filmiway | Curated Movie Collections & Discovery Platform</title>
                <meta name="description" content="Discover expertly curated movie collections featuring mind-bending thrillers, psychological masterpieces, and sci-fi classics." />
                <link rel="canonical" href="https://filmiway.com/" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            </Head>

            <div className="min-h-screen bg-black select-none">
                <Navigation />
                <HeroSection />

                <main className="container mx-auto px-4 sm:px-6 py-16 space-y-16">
                    <MovieSection 
                        title="Trending This Week" 
                        description="The most popular films everyone's talking about"
                        movies={trendingMovies} 
                        icon={TrendingUp}
                        sectionRef={trendingRef}
                    />
                    
                    <MovieSection 
                        title="Popular Movies" 
                        description="Crowd favorites and beloved experiences"
                        movies={popularMovies} 
                        icon={Star}
                        sectionRef={popularRef}
                    />
                    
                    <MovieSection 
                        title="Critically Acclaimed" 
                        description="Award-winning films praised by critics"
                        movies={topRatedMovies} 
                        icon={Award}
                        sectionRef={topRatedRef}
                    />
                </main>
    



    <motion.section 
        className="py-12 sm:py-16 bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 rounded-3xl border border-gray-700/20 mb-16 select-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
                <Construction className="w-8 h-8 text-orange-400 animate-bounce" />
                <h2 className="text-2xl sm:text-3xl font-light text-white">Something is Cooking</h2>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            
            <p className="text-lg sm:text-xl text-orange-300 mb-4 font-light">
                🔥 New Features Coming Soon!
            </p>
            
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
                We're working behind the scenes to bring you something amazing. 
                Stay tuned for exciting updates!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <span className="text-lg"></span>
                    <span>Development in Progress</span>
                </div>
                <span className="hidden sm:block">•</span>
                <div className="flex items-center gap-2">
                    <span className="text-lg"></span>
                    <span>Launching Very Soon</span>
                </div>
            </div>
            
            {/* Small hint text */}
            <p className="text-xs text-gray-500 mt-6 italic">
               
            </p>
        </div>
    </motion.section>

<footer className="bg-gradient-to-t from-gray-900 to-black py-12 border-t border-gray-800 select-none">
    <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
                <div className="w-32 h-16 sm:w-40 sm:h-20 flex items-center justify-center">
                    <Image
                        src="/filmiway-logo.svg"
                        alt="Filmiway"
                        width={160}
                        height={80}
                        className="w-full h-full object-contain"
                        draggable={false}
                    />
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
                Your complete movie discovery platform for amazing films.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-6 mb-8">
                {/* YouTube */}
                <a
                    href="https://youtube.com/@filmiway.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on YouTube"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/filmiway.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>

                {/* Facebook */}
                <a
                    href="https://www.facebook.com/profile.php?id=61583157321288"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>

                {/* X (Twitter) */}
                <a
                    href="https://x.com/FilmiwayMedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on X"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
            </div>

            {/* Powered by TMDB */}
            <div className="mb-6 pt-4 border-t border-gray-900/50">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <p className="text-gray-600 text-sm">Powered by</p>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                        <Image
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            alt="TMDB"
                            width={50}
                            height={20}
                            className="h-5 w-auto"
                        />
                        <span className="text-blue-400 text-sm">TMDB</span>
                    </a>
                </div>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500 text-sm mb-4">
                <span>&copy; 2025 Filmiway</span>
                <span>&bull;</span>
                <Link href="/about-us" className="hover:text-yellow-400 transition-colors">About</Link>
                <span>&bull;</span>
                <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy</Link>
            </div>

            {/* Tagline */}
            <p className="text-gray-600 text-sm italic">Where Every Film Finds Its Way</p>
        </div>
    </div>
</footer>

            </div>
        </>
    );
};

export default FilmiwayHomepage;
