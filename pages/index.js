// pages/index.js - SEO FIXED VERSION (Bing/Google Optimized) 🚀
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

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// ✅ ICON SIZE SYSTEM
const ICON_SIZES = {
    xs: 'w-3 h-3 sm:w-4 sm:h-4',
    sm: 'w-4 h-4 sm:w-5 sm:h-5',
    md: 'w-5 h-5 sm:w-6 sm:h-6',
    lg: 'w-6 h-6 sm:w-7 sm:h-7',
    xl: 'w-7 h-7 sm:w-8 sm:h-8',
};

// ✅ MEMOIZED MOVIE CARD
const MovieCard = memo(({ movie, index, isMobile, onClick }) => (
    <motion.div
        className="group cursor-pointer select-none h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        whileHover={!isMobile ? { y: -8, transition: { duration: 0.2 } } : {}}
        onClick={onClick}
        style={{ contain: 'layout style paint' }}
    >
        <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-900 shadow-xl w-full h-full">
            <Image
                src={movie.poster_path ? `${IMAGE_BASE_URL}/w342${movie.poster_path}` : "https://via.placeholder.com/342x513?text=No+Image"}
                alt={movie.title}
                width={342}
                height={513}
                srcSet={movie.poster_path ? `
                    ${IMAGE_BASE_URL}/w154${movie.poster_path} 154w,
                    ${IMAGE_BASE_URL}/w342${movie.poster_path} 342w,
                    ${IMAGE_BASE_URL}/w500${movie.poster_path} 500w
                ` : undefined}
                sizes="(max-width: 640px) 154px, (max-width: 1024px) 342px, 500px"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                draggable={false}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                    <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base mb-2 line-clamp-2">
                        {movie.title}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                            <Star className={`${ICON_SIZES.xs} text-yellow-400 fill-current`} />
                            <span className="text-yellow-400 font-medium text-xs">{movie.vote_average?.toFixed(1)}</span>
                        </div>
                        <span className="text-gray-300 text-xs">
                            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                        </span>
                    </div>
                    <button className="w-full bg-yellow-400 text-black py-1.5 sm:py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-xs sm:text-sm">
                        {isMobile ? "Details" : "View Details"}
                    </button>
                </div>
            </div>

            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/80 backdrop-blur-sm px-2 py-1 sm:px-3 rounded-full">
                <div className="flex items-center gap-1">
                    <Star className={`${ICON_SIZES.xs} text-yellow-400 fill-current`} />
                    <span className="text-white text-xs font-medium">{movie.vote_average?.toFixed(1)}</span>
                </div>
            </div>
        </div>
    </motion.div>
));

MovieCard.displayName = 'MovieCard';

// ✅ HERO SECTION (SEO H1 FIXED)
const HeroSection = memo(() => (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden select-none pt-20">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '50px 50px'
            }} />
        </div>

        <div className="absolute top-20 left-5 xs:left-10 w-64 xs:w-96 h-64 xs:h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-5 xs:right-10 w-56 xs:w-80 h-56 xs:h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="mb-4 xs:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 xs:gap-3 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/20 rounded-full px-4 xs:px-6 py-1.5 xs:py-2 text-yellow-400 text-xs xs:text-sm font-medium">
                        <Globe className={ICON_SIZES.xs} />
                        <span>Your Complete Movie Discovery Platform</span>
                        <Sparkles className={ICON_SIZES.xs} />
                    </div>
                </motion.div>

                {/* ✅ SEO FIX: Standard H1 for bots, Motion H1 for users */}
                <h1 className="sr-only">Filmiway - Explore the Best of Global Cinema</h1>
                
                <motion.h1 
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 xs:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    aria-hidden="true" // Hide from screen readers to avoid duplicate H1
                >
                    Explore the Best of
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 font-light">
                        Global Cinema
                    </span>
                </motion.h1>

                <motion.p 
                    className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-8 xs:mb-10 font-light leading-relaxed max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    From mind-bending psychological thrillers to sci-fi masterpieces, explore expertly curated collections.
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 font-normal"> Where every film finds its way.</span>
                </motion.p>

                <motion.div 
                    className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center mb-8 xs:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <Link href="/collections">
                        <motion.button
                            className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-6 xs:px-8 py-2.5 xs:py-4 rounded-xl xs:rounded-2xl font-semibold flex items-center gap-2 xs:gap-3 hover:from-yellow-300 hover:to-amber-300 transition-all shadow-2xl shadow-yellow-400/25 text-sm xs:text-base"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Compass className={ICON_SIZES.sm} />
                            Explore Collections
                            <ArrowRight className={ICON_SIZES.sm} />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Collections Grid (Short) */}
                <motion.div 
                    className="bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 mb-8 xs:mb-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <div className="flex items-center justify-center mb-3 xs:mb-4 gap-2 xs:gap-3">
                        <Layers className={`${ICON_SIZES.sm} xs:${ICON_SIZES.md} text-yellow-400`} />
                        <h2 className="text-lg xs:text-xl font-light text-white">Featured Collections</h2>
                    </div>

                    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
                        <Link href="/collection/movies-like-donnie-darko" className="group block">
                            <div className="h-full bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border border-indigo-500/20 rounded-xl xs:rounded-2xl p-4 hover:from-indigo-900/40 hover:to-violet-900/40 hover:border-indigo-400/40 transition-all duration-300">
                                <div className="text-indigo-400 font-semibold text-lg mb-1 group-hover:text-indigo-300">Like Donnie Darko</div>
                                <div className="text-gray-400 text-xs">Surreal sci-fi, time travel & twisted realities.</div>
                            </div>
                        </Link>
                        <Link href="/collection/movies-like-oldboy" className="group block">
                            <div className="h-full bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-xl xs:rounded-2xl p-4 hover:from-red-900/40 hover:to-orange-900/40 hover:border-red-400/40 transition-all duration-300">
                                <div className="text-red-400 font-semibold text-lg mb-1 group-hover:text-red-300">Like Oldboy</div>
                                <div className="text-gray-400 text-xs">Visceral revenge & shocking twists.</div>
                            </div>
                        </Link>
                        <Link href="/collection/movies-like-se7en" className="group block">
                            <div className="h-full bg-gradient-to-br from-slate-800/40 to-gray-800/40 border border-slate-500/20 rounded-xl xs:rounded-2xl p-4 hover:from-slate-800/60 hover:to-gray-800/60 hover:border-slate-400/40 transition-all duration-300">
                                <div className="text-slate-400 font-semibold text-lg mb-1 group-hover:text-slate-300">Like Se7en</div>
                                <div className="text-gray-400 text-xs">Gritty detective noir & serial killer hunts.</div>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
));

HeroSection.displayName = 'HeroSection';

// ✅ OPTIMIZED CAROUSEL (WITH HYDRATION FIX)
const ProfessionalCarousel = memo(({ movies, sectionRef }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(2); // Default mobile view
    const dragRef = useRef({ isDragging: false, startX: 0, currentX: 0, offset: 0 });
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(true); // Default to mobile to match server render

    // Handle Resize & Hydration
    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            
            if (width < 640) setItemsPerView(2);
            else if (width < 768) setItemsPerView(2.5);
            else if (width < 1024) setItemsPerView(3);
            else if (width < 1280) setItemsPerView(4);
            else setItemsPerView(6);
        };

        handleResize(); // Initial calculation
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const safeMovies = Array.isArray(movies) ? movies : [];
    const maxIndex = Math.max(0, Math.ceil(safeMovies.length - itemsPerView));

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    }, []);

    // Pointer events for dragging
    const handlePointerDown = useCallback((e) => {
        dragRef.current.isDragging = true;
        dragRef.current.startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        dragRef.current.currentX = dragRef.current.startX;
        dragRef.current.offset = 0;
    }, []);

    const handlePointerMove = useCallback((e) => {
        if (!dragRef.current.isDragging) return;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        dragRef.current.currentX = clientX;
        dragRef.current.offset = dragRef.current.startX - clientX;
    }, []);

    const handlePointerUp = useCallback(() => {
        if (!dragRef.current.isDragging) return;
        const diff = dragRef.current.offset;
        const threshold = 30;
        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentIndex < maxIndex) nextSlide();
            else if (diff < 0 && currentIndex > 0) prevSlide();
        }
        dragRef.current.isDragging = false;
        dragRef.current.offset = 0;
    }, [currentIndex, maxIndex, nextSlide, prevSlide]);

    if (!mounted) {
        // Render a placeholder or the mobile layout initially to prevent jumps
        return <div className="h-64 bg-gray-900/20 animate-pulse rounded-xl"></div>;
    }

    if (safeMovies.length === 0) {
        return <div className="text-gray-500 text-center py-10">No movies found.</div>;
    }

    return (
        <div ref={sectionRef} className="relative select-none group/carousel">
            {!isMobile && (
                <>
                    <button 
                        onClick={prevSlide} 
                        className={`absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-yellow-400 hover:text-black hover:border-yellow-400'}`} 
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className={`${ICON_SIZES.sm}`} />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className={`absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-yellow-400 hover:text-black hover:border-yellow-400'}`} 
                        disabled={currentIndex >= maxIndex}
                    >
                        <ChevronRight className={`${ICON_SIZES.sm}`} />
                    </button>
                </>
            )}
            <div 
                ref={containerRef} 
                className={`overflow-hidden ${!isMobile ? 'px-1' : 'px-0'} ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''} select-none`} 
                onPointerDown={handlePointerDown} 
                onPointerMove={handlePointerMove} 
                onPointerUp={handlePointerUp} 
                onPointerLeave={handlePointerUp} 
                style={{ touchAction: 'pan-y' }}
            >
                <div 
                    className="flex transition-transform duration-500 ease-out" 
                    style={{ transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% + ${dragRef.current.isDragging ? dragRef.current.offset * 0.25 : 0}px))` }}
                >
                    {safeMovies.map((movie, index) => (
                        <div 
                            key={movie.id} 
                            className="flex-shrink-0 px-1.5 xs:px-2 sm:px-3" 
                            style={{ width: `${100 / itemsPerView}%` }}
                        >
                            <MovieCard movie={movie} index={index} isMobile={isMobile} onClick={() => window.location.href = `/movie/${movie.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

ProfessionalCarousel.displayName = 'ProfessionalCarousel';

const MovieSection = memo(({ title, movies, icon: Icon, description, sectionRef }) => (
    <section className="mb-12 xs:mb-16 select-none">
        <motion.div className="text-center mb-8 xs:mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 xs:gap-3 mb-2 xs:mb-3">
                <Icon className={ICON_SIZES.md} style={{ color: '#FACC15' }} />
                <h2 className="text-xl xs:text-2xl sm:text-3xl font-light text-white">{title}</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm xs:text-base">{description}</p>
        </motion.div>
        <ProfessionalCarousel movies={movies} sectionRef={sectionRef} />
    </section>
));

MovieSection.displayName = 'MovieSection';

// ✅ MAIN COMPONENT - PURE SSG (Receives Props Only)
const FilmiwayHomepage = ({ trendingMovies, popularMovies, topRatedMovies }) => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const trendingRef = useRef(null);
    const popularRef = useRef(null);
    const topRatedRef = useRef(null);

    const scrollToSection = useCallback((ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    // Navigation
    const Navigation = () => (
        <motion.nav 
            className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md select-none border-b border-gray-800/50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <Link href="/" className="flex items-center justify-start">
                        <div className="w-48 sm:w-60 md:w-72 h-20 sm:h-24 md:h-28 flex items-center justify-start">
                            <Image src="/filmiway-logo.svg" alt="Filmiway" width={288} height={112} priority={true} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" draggable={false} />
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1 text-sm">Home</Link>
                        <Link href="/collections" className="text-gray-300 hover:text-white transition-colors text-sm">Collections</Link>
                        <button onClick={() => scrollToSection(trendingRef)} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm">Trending</button>
                    </div>
                    <button className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className={ICON_SIZES.md} /> : <Menu className={ICON_SIZES.md} />}
                    </button>
                </div>
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                            <div className="px-4 py-4 space-y-3">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-400 font-medium py-2 text-sm">Home</Link>
                                <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors py-2 text-sm">Collections</Link>
                                <button onClick={() => { scrollToSection(trendingRef); setMobileMenuOpen(false); }} className="block text-gray-300 hover:text-white transition-colors py-2 w-full text-left text-sm">Trending</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );

    return (
        <>
            {/* ✅ SEO HEAD MOVED TO TOP OF FRAGMENT */}
            <Head>
                {/* 1. Title is Critical */}
                <title>Filmiway - Global Film Recommendations & Discovery</title>
                {/* 2. Meta Description */}
                <meta name="description" content="Discover the best of global cinema. Filmiway is your ultimate guide for movie recommendations, reviews, and hidden gems from around the world." />
                <link rel="canonical" href="https://filmiway.com/" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            </Head>

            <div className="min-h-screen bg-black select-none">
                <Navigation />
                <HeroSection />

                <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-8 sm:space-y-16">
                    <MovieSection title="Trending This Week" description="The most popular films everyone's talking about" movies={trendingMovies} icon={TrendingUp} sectionRef={trendingRef} />
                    <MovieSection title="Popular Movies" description="Crowd favorites and beloved experiences" movies={popularMovies} icon={Star} sectionRef={popularRef} />
                    <MovieSection title="Critically Acclaimed" description="Award-winning films praised by critics" movies={topRatedMovies} icon={Award} sectionRef={topRatedRef} />
                </main>

                <motion.section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 rounded-2xl xs:rounded-3xl border border-gray-700/20 mb-12 xs:mb-16 select-none" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <div className="text-center px-2 xs:px-4">
                        <div className="flex items-center justify-center gap-2 xs:gap-3 mb-2 xs:mb-4">
                            <Construction className="w-6 h-6 xs:w-8 xs:h-8 text-orange-400 animate-bounce" />
                            <h2 className="text-xl xs:text-2xl sm:text-3xl font-light text-white">Something is Cooking</h2>
                            <Sparkles className="w-5 h-5 xs:w-6 xs:h-6 text-yellow-400 animate-pulse" />
                        </div>
                        <p className="text-base xs:text-lg sm:text-xl text-orange-300 mb-3 xs:mb-4 font-light">🔥 New Features Coming Soon!</p>
                        <p className="text-gray-300 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto mb-4 xs:mb-6">We're working behind the scenes to bring you something amazing. Stay tuned for exciting updates!</p>
                    </div>
                </motion.section>

                <footer className="bg-gradient-to-t from-gray-900 to-black py-8 sm:py-12 border-t border-gray-800 select-none">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12 text-left">
                            
{/* COL 1: Mind Bending */}
                            <div>
                                <h3 className="text-yellow-400 font-bold mb-4 uppercase text-xs tracking-wider">Mind Bending</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><Link href="/collection/movies-like-inception" className="hover:text-white transition-colors">Like Inception</Link></li>
                                    <li><Link href="/collection/movies-like-memento" className="hover:text-white transition-colors">Like Memento</Link></li>
                                    <li><Link href="/collection/movies-like-shutter-island" className="hover:text-white transition-colors">Like Shutter Island</Link></li>
                                    <li><Link href="/collection/movies-like-donnie-darko" className="hover:text-white transition-colors">Like Donnie Darko</Link></li>
                                    <li><Link href="/collection/movies-like-interstellar" className="hover:text-white transition-colors">Like Interstellar</Link></li>
                                    <li><Link href="/collection/movies-like-the-matrix" className="hover:text-white transition-colors">Like The Matrix</Link></li>
                                </ul>
                            </div>

                            {/* COL 2: Global & Psychological */}
                            <div>
                                <h3 className="text-yellow-400 font-bold mb-4 uppercase text-xs tracking-wider">Global & Psychological</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><Link href="/collection/movies-like-parasite" className="hover:text-white transition-colors">Like Parasite</Link></li>
                                    <li><Link href="/collection/movies-like-oldboy" className="hover:text-white transition-colors">Like Oldboy</Link></li>
                                    <li><Link href="/collection/movies-like-black-swan" className="hover:text-white transition-colors">Like Black Swan</Link></li>
                                    <li><Link href="/collection/movies-like-eyes-wide-shut" className="hover:text-white transition-colors">Like Eyes Wide Shut</Link></li>
                                    <li><Link href="/collection/movies-like-se7en" className="hover:text-white transition-colors">Like Se7en</Link></li>
                                    <li><Link href="/collection/best-psychological-thriller-movies" className="hover:text-white transition-colors">Psychological Thrillers</Link></li>
                                </ul>
                            </div>

                            {/* COL 3: Genre & Streaming (UPDATED) */}
                            <div>
                                <h3 className="text-yellow-400 font-bold mb-4 uppercase text-xs tracking-wider">Genre & Streaming</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><Link href="/collection/best-sci-fi-movies" className="hover:text-white transition-colors">Best Sci-Fi Movies</Link></li>
                                    <li><Link href="/collection/best-time-travel-movies" className="hover:text-white transition-colors">Time Travel Movies</Link></li>
                                    <li><Link href="/collection/best-survival-movies" className="hover:text-white transition-colors">Survival Movies</Link></li>
                                    <li><Link href="/collection/best-war-films" className="hover:text-white transition-colors">War Films</Link></li>
                                    {/* ✅ NEW HULU LINKS ADDED BELOW */}
                                    <li><Link href="/collection/best-action-movies-on-hulu" className="hover:text-white transition-colors text-gray-300">Best Action on Hulu</Link></li>
                                    <li><Link href="/collection/best-romance-movies-on-hulu" className="hover:text-white transition-colors text-gray-300">Best Romance on Hulu</Link></li>
                                    <li><Link href="/collection/best-comedy-movies-on-hulu" className="hover:text-white transition-colors text-gray-300">Best Comedy on Hulu</Link></li>
                                    <li><Link href="/collection/best-horror-movies-on-hulu" className="hover:text-white transition-colors text-gray-300">Best Horror on Hulu</Link></li>
                                    <li><Link href="/collection/best-sci-fi-movies-on-hulu" className="hover:text-white transition-colors text-gray-300">Best Sci-Fi on Hulu</Link></li>
<li><Link href="/collection/best-thriller-movies-hulu" className="hover:text-white transition-colors text-gray-300">Best Thriller on Hulu</Link></li>
                                </ul>
                            </div>

                            {/* COL 4: Thrillers & Crime */}
                            <div>
                                <h3 className="text-yellow-400 font-bold mb-4 uppercase text-xs tracking-wider">Thrillers & Crime</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><Link href="/collection/best-crime-thriller-movies" className="hover:text-white transition-colors">Crime Thrillers</Link></li>
                                    <li><Link href="/collection/best-heist-thriller-movies" className="hover:text-white transition-colors">Heist Thrillers</Link></li>
                                    <li><Link href="/collection/best-detective-thriller-movies" className="hover:text-white transition-colors">Detective Thrillers</Link></li>
                                    <li><Link href="/collection/best-mystery-thriller-movies" className="hover:text-white transition-colors">Mystery Thrillers</Link></li>
                                    <li><Link href="/collection/best-thriller-movies" className="hover:text-white transition-colors">Best Thrillers</Link></li>
                                </ul>
                            </div>

                        </div>
                        
                        {/* Footer Bottom Section */}
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-4 xs:mb-6">
                                <div className="w-28 xs:w-32 sm:w-40 h-12 xs:h-14 sm:h-20 flex items-center justify-center">
                                    <Image src="/filmiway-logo.svg" alt="Filmiway" width={160} height={80} className="w-full h-full object-contain" draggable={false} />
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4 xs:mb-6 max-w-md mx-auto text-xs xs:text-sm">Your complete movie discovery platform for amazing films.</p>
                            <div className="flex items-center justify-center gap-4 xs:gap-6 mb-6 xs:mb-8">
                                <a href="https://youtube.com/@filmiway.official" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                                    <svg className="w-6 h-6 xs:w-7 xs:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                </a>
                                <a href="https://www.instagram.com/filmiway.official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                    <svg className="w-6 h-6 xs:w-7 xs:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61583157321288" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                    <svg className="w-6 h-6 xs:w-7 xs:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                <a href="https://x.com/FilmiwayMedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6 xs:w-7 xs:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                            </div>
                            <div className="mb-4 xs:mb-6 pt-3 xs:pt-4 border-t border-gray-900/50">
                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <p className="text-gray-600 text-xs xs:text-sm">Powered by</p>
                                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                                        <Image src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" width={50} height={20} className="h-4 xs:h-5 w-auto" />
                                        <span className="text-blue-400 text-xs xs:text-sm">TMDB</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4 text-gray-500 text-xs mb-3 xs:mb-4">
                                <span>&copy; 2025 Filmiway</span><span>&bull;</span>
                                <Link href="/about-us" className="hover:text-yellow-400 transition-colors">About</Link><span>&bull;</span>
                                <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy</Link>
                            </div>
                            <p className="text-gray-600 text-xs italic">Where Every Film Finds Its Way</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default FilmiwayHomepage;

// ✅ SERVER SIDE GENERATION (SSG) - FINAL FIXED VERSION
export async function getStaticProps() {
  // ⚠️ PASTE YOUR API KEY INSIDE THE QUOTES BELOW IF IT STILL SHOWS EMPTY
  const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa'; 
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  // Helper to filter indian movies
  const filterOutIndianMovies = (movies) => {
      if (!movies || !Array.isArray(movies)) return [];
      const indianLanguages = ['hi', 'ta', 'te', 'ml', 'kn', 'gu', 'bn', 'mr', 'pa'];
      return movies.filter(movie => !indianLanguages.includes(movie.original_language));
  };

  try {
    // 1. Fetch raw data
    const [trendingRes, popularRes, topRatedRes] = await Promise.all([
      fetch(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}&region=US&language=en-US`),
      fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&region=US&language=en-US`),
      fetch(`${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&region=US&language=en-US`)
    ]);

    // 2. Check if requests were successful
    if (!trendingRes.ok || !popularRes.ok || !topRatedRes.ok) {
        console.error("❌ API Error: Check your API Key.");
        throw new Error("Failed to fetch data");
    }

    // 3. Parse JSON
    const [trending, popular, topRated] = await Promise.all([
      trendingRes.json(),
      popularRes.json(),
      topRatedRes.json()
    ]);

    console.log(`✅ Server Successfully Fetched Movies: ${trending.results?.length}`);

    return {
      props: {
        trendingMovies: filterOutIndianMovies(trending.results?.slice(0, 15) || []),
        popularMovies: filterOutIndianMovies(popular.results?.slice(0, 15) || []),
        topRatedMovies: filterOutIndianMovies(topRated.results?.slice(0, 15) || []),
      },
      revalidate: 86400, // Re-generate page every 24 hours
    };
  } catch (error) {
    console.error('❌ Server Error fetching movies:', error);
    // Return empty arrays to prevent build failure, but page will be empty until fixed
    return {
      props: {
        trendingMovies: [],
        popularMovies: [],
        topRatedMovies: [],
      },
    };
  }
}