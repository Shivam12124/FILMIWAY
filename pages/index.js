// pages/index.js - FINAL LOCKED VERSION (No Stars) ⚡🎬
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Play, Menu, X, ArrowRight, 
    ChevronLeft, ChevronRight, Construction, Sparkles, 
    Compass, Globe, Layers, Film, Tv, Brain, Skull, Star
} from 'lucide-react';

import { COLLECTIONS } from '../data/collections';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const ICON_SIZES = {
    xs: 'w-3 h-3 sm:w-4 sm:h-4',
    sm: 'w-4 h-4 sm:w-5 sm:h-5',
    md: 'w-5 h-5 sm:w-6 sm:h-6',
};

// ⚡ OPTIMIZED CARD - No Ratings, Maximum Speed
const CollectionCard = memo(({ collection, index, isMobile, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.div
            className="group cursor-pointer select-none h-full relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
            onClick={onClick}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 group-hover:border-yellow-400/30 transition-all duration-500 shadow-2xl group-hover:shadow-yellow-400/10">
                
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/0 via-transparent to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-yellow-400/10 transition-all duration-700 z-0" />
                
                <div className="relative w-full h-full">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
                    )}
                    <Image
                        // 🚀 PERFORMANCE: Use w500 for sharpness but skip server optimization
                        src={collection.poster_path ? `${IMAGE_BASE_URL}/w500${collection.poster_path}` : "https://via.placeholder.com/342x513/111827/4b5563?text=No+Image"}
                        alt={collection.title}
                        fill
                        // 🚀 PERFORMANCE: unoptimized={true} is the key for speed
                        unoptimized={true} 
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 20vw"
                        className={`object-cover transition-all duration-700 ease-out ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        } ${
                            isHovered ? 'scale-110 opacity-80' : 'scale-100 opacity-95'
                        }`}
                        // 🚀 PERFORMANCE: Priority loading for the first 3 items
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                        draggable={false}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 opacity-50 z-10" />

                <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                    <div className="bg-black/70 backdrop-blur-xl px-3 py-1.5 rounded-lg border border-yellow-400/20 shadow-lg">
                        <div className="flex items-center gap-1.5">
                            <Film className="w-3.5 h-3.5 text-yellow-400" />
                            <span className="text-xs font-bold text-white">{collection.item_count}</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
                    <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight mb-2 line-clamp-2 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">
                        {collection.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-300 mb-3">
                        <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-2 py-1 rounded">
                            <Layers className="w-3 h-3 text-yellow-400" />
                            <span className="font-medium">Collection</span>
                        </span>
                    </div>

                    {!isMobile && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2 text-yellow-400 text-xs font-semibold"
                        >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Explore Collection</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </motion.div>
                    )}
                </div>

                <motion.div
                    className="absolute inset-0 z-30 pointer-events-none"
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovered ? '100%' : '-100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </motion.div>
            </div>
        </motion.div>
    );
});

CollectionCard.displayName = 'CollectionCard';

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
            <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                
                <motion.div className="mb-4 xs:mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                    <div className="inline-flex items-center gap-2 xs:gap-3 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/20 rounded-full px-4 xs:px-6 py-1.5 xs:py-2 text-yellow-400 text-xs xs:text-sm font-medium">
                        <Globe className={ICON_SIZES.xs} />
                        <span>Your Complete Movie Discovery Platform</span>
                        <Sparkles className={ICON_SIZES.xs} />
                    </div>
                </motion.div>

                <h1 className="sr-only">Filmiway - Explore the Best of Global Cinema</h1>
                
                <motion.h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 xs:mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} aria-hidden="true">
                    Explore the Best of
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 font-light">
                        Global Cinema
                    </span>
                </motion.h1>

                <motion.p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-8 xs:mb-10 font-light leading-relaxed max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                    From mind-bending psychological thrillers to sci-fi masterpieces, explore expertly curated collections.
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 font-normal"> Where every film finds its way.</span>
                </motion.p>

                <motion.div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center mb-8 xs:mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
                    <Link href="/collections">
                        <motion.button className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-6 xs:px-8 py-2.5 xs:py-4 rounded-xl xs:rounded-2xl font-semibold flex items-center gap-2 xs:gap-3 hover:from-yellow-300 hover:to-amber-300 transition-all shadow-2xl shadow-yellow-400/25 text-sm xs:text-base" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Compass className={ICON_SIZES.sm} />
                            Explore Collections
                            <ArrowRight className={ICON_SIZES.sm} />
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div className="bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 mb-8 xs:mb-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
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

// ⚡ BUTTERY SMOOTH MOBILE CAROUSEL - Native Scroll Snap!
const ProfessionalCarousel = memo(({ collections, sectionRef }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(2); 
    const dragRef = useRef({ isDragging: false, startX: 0, offset: 0, hasDragged: false });
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            // ⚡ BIGGER CARDS ON MOBILE
            if (width < 640) setItemsPerView(1.8); // Bigger!
            else if (width < 768) setItemsPerView(2.8);
            else if (width < 1024) setItemsPerView(4.3);
            else if (width < 1280) setItemsPerView(5.2);
            else setItemsPerView(6.2);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const safeCollections = Array.isArray(collections) ? collections : [];
    const maxIndex = Math.max(0, safeCollections.length - Math.floor(itemsPerView));

    // Desktop navigation
    const nextSlide = useCallback(() => setCurrentIndex(prev => Math.min(prev + 1, maxIndex)), [maxIndex]);
    const prevSlide = useCallback(() => setCurrentIndex(prev => Math.max(prev - 1, 0)), []);

    // Desktop drag handlers
    const handlePointerDown = useCallback((e) => {
        if (isMobile) return; // Skip on mobile
        dragRef.current.isDragging = true;
        dragRef.current.hasDragged = false;
        dragRef.current.startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        dragRef.current.offset = 0;
    }, [isMobile]);

    const handlePointerMove = useCallback((e) => {
        if (!dragRef.current.isDragging || isMobile) return;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        dragRef.current.offset = dragRef.current.startX - clientX;
        if (Math.abs(dragRef.current.offset) > 3) dragRef.current.hasDragged = true;
    }, [isMobile]);

    const handlePointerUp = useCallback(() => {
        if (!dragRef.current.isDragging || isMobile) return;
        const diff = dragRef.current.offset;
        const swipeThreshold = 50;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < maxIndex) nextSlide();
            else if (diff < 0 && currentIndex > 0) prevSlide();
        }
        
        setTimeout(() => {
            dragRef.current.isDragging = false;
            dragRef.current.hasDragged = false;
            dragRef.current.offset = 0;
        }, 100);
    }, [currentIndex, maxIndex, nextSlide, prevSlide, isMobile]);

    const handleCardClick = (id) => {
        if (!dragRef.current.hasDragged && Math.abs(dragRef.current.offset) < 10) {
            window.location.href = `/collection/${id}`;
        }
    };

    if (!mounted) return <div className="h-96 bg-gradient-to-r from-gray-900/20 to-gray-800/20 animate-pulse rounded-2xl"></div>;
    if (safeCollections.length === 0) return null;

    return (
        <div ref={sectionRef} className="relative select-none group/carousel">
            {/* Desktop Navigation Arrows */}
            {!isMobile && safeCollections.length > itemsPerView && (
                <>
                    <motion.button onClick={prevSlide} disabled={currentIndex === 0} className={`absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-gradient-to-r from-gray-900 to-black backdrop-blur-xl rounded-full border border-gray-600/50 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 ${currentIndex === 0 ? 'invisible' : ''}`} whileHover={{ x: -4 }} whileTap={{ scale: 0.9 }}>
                        <ChevronLeft className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors" />
                    </motion.button>
                    <motion.button onClick={nextSlide} disabled={currentIndex >= maxIndex} className={`absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-gradient-to-r from-black to-gray-900 backdrop-blur-xl rounded-full border border-gray-600/50 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 ${currentIndex >= maxIndex ? 'invisible' : ''}`} whileHover={{ x: 4 }} whileTap={{ scale: 0.9 }}>
                        <ChevronRight className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors" />
                    </motion.button>
                </>
            )}
            
            {/* ⚡ MOBILE: Native Scroll Snap | DESKTOP: Smooth Motion */}
            {isMobile ? (
                // 📱 MOBILE: Buttery Smooth Native Scroll
                <div 
                    className="overflow-x-auto px-0 py-6 hide-scrollbar snap-x snap-mandatory"
                    style={{ 
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <div className="flex gap-4" style={{ paddingRight: '1rem' }}>
                        {safeCollections.map((collection, index) => (
                            <div 
                                key={collection.id} 
                                className="flex-shrink-0 snap-center snap-always"
                                style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 16 / itemsPerView}px)` }}
                                onClick={() => window.location.href = `/collection/${collection.id}`}
                            >
                                <CollectionCard collection={collection} index={index} isMobile={isMobile} onClick={() => {}} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // 🖥️ DESKTOP: Smooth Motion Animation
                <div 
                    ref={containerRef} 
                    className="overflow-hidden px-0 py-6 cursor-grab active:cursor-grabbing"
                    onPointerDown={handlePointerDown} 
                    onPointerMove={handlePointerMove} 
                    onPointerUp={handlePointerUp} 
                    onPointerLeave={handlePointerUp}
                >
                    <motion.div 
                        className="flex gap-6" 
                        animate={{ 
                            x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 24}px + ${dragRef.current.isDragging ? -dragRef.current.offset * 0.3 : 0}px)` 
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30, 
                            mass: 0.8
                        }}
                    >
                        {safeCollections.map((collection, index) => (
                            <div 
                                key={collection.id} 
                                className="flex-shrink-0" 
                                style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                            >
                                <CollectionCard collection={collection} index={index} isMobile={isMobile} onClick={() => handleCardClick(collection.id)} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            )}

            {/* Progress Indicators - Desktop only */}
            {!isMobile && safeCollections.length > itemsPerView && (
                <div className="flex items-center justify-center gap-2 mt-6">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-yellow-400' : 'w-1.5 bg-gray-600 hover:bg-gray-500'}`} />
                    ))}
                </div>
            )}

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
});

ProfessionalCarousel.displayName = 'ProfessionalCarousel';

const MovieSection = memo(({ title, movies, icon: Icon, description, sectionRef }) => (
    <section className="mb-16 sm:mb-20 select-none border-b border-gray-800/30 pb-16 last:border-0">
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 px-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-xl border border-yellow-400/30">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight">{title}</h2>
                </div>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed pl-1">{description}</p>
            </div>
            <Link href="/collections" className="hidden sm:flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors font-medium group mt-4 sm:mt-0">
                <span>View All</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
        <ProfessionalCarousel collections={movies} sectionRef={sectionRef} />
    </section>
));

MovieSection.displayName = 'MovieSection';

const FilmiwayHomepage = ({ huluCollections, mindBendingCollections, thrillerCollections, hboCollections }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const huluRef = useRef(null);
    const mindRef = useRef(null);
    const thrillerRef = useRef(null);
    const hboRef = useRef(null);

    const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const Navigation = () => (
        <motion.nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md select-none border-b border-gray-800/50" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <Link href="/" className="flex items-center">
                        <div className="w-24 sm:w-32 h-full flex items-center">
                            <Image src="/filmiway-logo.svg" alt="Filmiway" width={160} height={60} className="w-full h-full object-contain" priority />
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-yellow-400 font-medium text-sm">Home</Link>
                        <button onClick={() => scrollToSection(huluRef)} className="text-gray-300 hover:text-white transition-colors text-sm">Hulu</button>
                        <button onClick={() => scrollToSection(mindRef)} className="text-gray-300 hover:text-white transition-colors text-sm">Mind-Bending</button>
                        <button onClick={() => scrollToSection(thrillerRef)} className="text-gray-300 hover:text-white transition-colors text-sm">Thrillers</button>
                    </div>
                    <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className={ICON_SIZES.md} /> : <Menu className={ICON_SIZES.md} />}
                    </button>
                </div>
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div className="md:hidden bg-black/98 border-t border-gray-800" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                            <div className="px-4 py-4 space-y-3">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-400 font-medium py-2 text-sm">Home</Link>
                                <button onClick={() => { scrollToSection(huluRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Hulu</button>
                                <button onClick={() => { scrollToSection(mindRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Mind-Bending</button>
                                <button onClick={() => { scrollToSection(thrillerRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Thrillers</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );

    return (
        <>
            <Head>
                <title>Filmiway | Premium Movie Collections & Streaming Guide</title>
                <meta name="description" content="Expertly curated movie collections for Netflix, Hulu, HBO Max. Hand-picked recommendations for true cinema lovers." />
                <link rel="canonical" href="https://filmiway.com/" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                {/* ⚡ PRECONNECT TO TMDB FOR FASTER IMAGES */}
                <link rel="preconnect" href="https://image.tmdb.org" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://image.tmdb.org" />
            </Head>
            <div className="min-h-screen bg-black text-white font-sans">
                <Navigation />
                <HeroSection />
                <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-8">
                    <MovieSection title="Best of Hulu" description="The absolute best movies streaming on Hulu right now." movies={huluCollections} icon={Tv} sectionRef={huluRef} />
                    <MovieSection title="Mind-Bending & Sci-Fi" description="Films that question reality: Inception, Matrix, Interstellar & more." movies={mindBendingCollections} icon={Brain} sectionRef={mindRef} />
                    <MovieSection title="The Thriller Gang" description="Gripping crime, mystery, and revenge thrillers." movies={thrillerCollections} icon={Skull} sectionRef={thrillerRef} />
                    <MovieSection title="HBO Max Essentials" description="Epic blockbusters and prestige drama on HBO Max." movies={hboCollections} icon={Star} sectionRef={hboRef} />
                </main>
                <motion.section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-gray-900/30 rounded-2xl border border-gray-800 mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <div className="text-center px-4">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Construction className="w-6 h-6 text-orange-400" />
                            <h2 className="text-xl font-light text-white">Something is Cooking</h2>
                        </div>
                        <p className="text-gray-400 text-sm max-w-lg mx-auto">We are building new features to help you discover movies even faster. Stay tuned.</p>
                    </div>
                </motion.section>
                <footer className="bg-black py-12 border-t border-gray-800">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">
                            <div>
                                <h3 className="text-gray-500 font-bold mb-4 uppercase text-[10px] tracking-widest">Mind Bending</h3>
                                <ul className="space-y-2 text-xs text-gray-400">
                                    <li><Link href="/collection/movies-like-inception" className="hover:text-white transition-colors">Like Inception</Link></li>
                                    <li><Link href="/collection/movies-like-memento" className="hover:text-white transition-colors">Like Memento</Link></li>
                                    <li><Link href="/collection/movies-like-shutter-island" className="hover:text-white transition-colors">Like Shutter Island</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-500 font-bold mb-4 uppercase text-[10px] tracking-widest">Hulu Picks</h3>
                                <ul className="space-y-2 text-xs text-gray-400">
                                    <li><Link href="/collection/best-movies-on-hulu" className="hover:text-white transition-colors">Best Movies</Link></li>
                                    <li><Link href="/collection/best-thriller-movies-hulu" className="hover:text-white transition-colors">Best Thrillers</Link></li>
                                    <li><Link href="/collection/best-horror-movies-on-hulu" className="hover:text-white transition-colors">Best Horror</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-500 font-bold mb-4 uppercase text-[10px] tracking-widest">Thriller Gang</h3>
                                <ul className="space-y-2 text-xs text-gray-400">
                                    <li><Link href="/collection/best-crime-thriller-movies" className="hover:text-white transition-colors">Crime</Link></li>
                                    <li><Link href="/collection/best-mystery-thriller-movies" className="hover:text-white transition-colors">Mystery</Link></li>
                                    <li><Link href="/collection/best-revenge-movies" className="hover:text-white transition-colors">Revenge</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-500 font-bold mb-4 uppercase text-[10px] tracking-widest">Legal</h3>
                                <ul className="space-y-2 text-xs text-gray-400">
                                    <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                                    <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                                    <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-6">
                               
                            </div>
                            <p className="text-gray-500 mb-6 text-xs">Where Every Film Finds Its Way.</p>
                            <div className="flex items-center justify-center gap-4 text-gray-600 text-[10px]">
                                <span>&copy; 2026 Filmiway</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default FilmiwayHomepage;

// ⚡ OPTIMIZED SSG - Faster + Black Swan fixed
export async function getStaticProps() {
    const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa'; 
    const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

    const huluKeys = ['best-movies-on-hulu', 'best-action-movies-on-hulu', 'best-romance-movies-on-hulu', 'best-comedy-movies-on-hulu', 'best-sci-fi-movies-on-hulu', 'best-thriller-movies-hulu', 'best-horror-movies-on-hulu', 'best-drama-movies-on-hulu', 'best-family-movies-on-hulu'];
    const mindBendingKeys = ['movies-like-inception', 'movies-like-the-matrix', 'movies-like-interstellar', 'best-sci-fi-movies', 'best-time-travel-movies', 'movies-like-donnie-darko', 'movies-like-memento', 'movies-like-eyes-wide-shut'];
    const thrillerKeys = ['best-thriller-movies', 'best-crime-thriller-movies', 'best-heist-thriller-movies', 'best-psychological-thriller-movies', 'best-detective-thriller-movies', 'best-mystery-thriller-movies', 'movies-like-se7en', 'movies-like-shutter-island', 'movies-like-parasite', 'movies-like-oldboy', 'movies-like-black-swan', 'best-revenge-movies'];
    const hboKeys = ['best-movies-on-hbo-max', 'best-action-movies-on-hbo-max', 'best-sci-fi-movies-on-hbo-max', 'best-horror-movies-on-hbo-max', 'best-romance-movies-on-hbo-max', 'best-drama-movies-on-hbo-max', 'best-comedy-movies-on-hbo-max', 'best-family-movies-on-hbo-max', 'best-thriller-movies-on-hbo-max'];

    const usedPostersPerSection = { hulu: new Set(), mind: new Set(), thriller: new Set(), hbo: new Set() };

    const posterOverrides = {
        'movies-like-black-swan': '/w185Y7RLfI6d9NMqbElfkE21MHZ.jpg'
    };

    const fetchUniquePosterForCollection = async (movieIds, sectionName, collectionSlug) => {
        if (!movieIds || movieIds.length === 0) return null;
        const usedPosters = usedPostersPerSection[sectionName];

        if (posterOverrides[collectionSlug]) {
            const overridePoster = posterOverrides[collectionSlug];
            if (!usedPosters.has(overridePoster)) {
                usedPosters.add(overridePoster);
                return overridePoster;
            }
        }

        for (let i = 0; i < Math.min(movieIds.length, 8); i++) {
            const movieId = movieIds[i];
            try {
                let posterPath = null;
                if (movieId.toString().startsWith('tt')) {
                    const url = `${TMDB_BASE_URL}/find/${movieId}?api_key=${TMDB_API_KEY}&external_source=imdb_id`;
                    const res = await fetch(url);
                    const data = await res.json();
                    if (data.movie_results?.[0]?.poster_path) posterPath = data.movie_results[0].poster_path;
                } else {
                    const url = `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`;
                    const res = await fetch(url);
                    const data = await res.json();
                    if (data.poster_path) posterPath = data.poster_path;
                }

                if (posterPath && !usedPosters.has(posterPath)) {
                    usedPosters.add(posterPath);
                    return posterPath;
                }
            } catch (e) {
                console.error(`Error fetching poster for ${movieId}:`, e);
            }
        }
        return null;
    };

    const fetchCollectionData = async (keys, sectionName) => {
        const results = await Promise.all(keys.map(async (key) => {
            const collection = COLLECTIONS[key];
            if (!collection) return null;

            const posterPath = await fetchUniquePosterForCollection(collection.movies, sectionName, collection.slug);
            if (!posterPath) return null;

            return {
                id: collection.slug,
                title: collection.title,
                poster_path: posterPath,
                item_count: collection.movies.length,
                vote_average: collection.stats?.averageRating || 8.0,
                isCollection: true
            };
        }));

        return results.filter(item => item !== null);
    };

    try {
        const [huluData, mindData, thrillerData, hboData] = await Promise.all([
            fetchCollectionData(huluKeys, 'hulu'),
            fetchCollectionData(mindBendingKeys, 'mind'),
            fetchCollectionData(thrillerKeys, 'thriller'),
            fetchCollectionData(hboKeys, 'hbo')
        ]);

        return {
            props: {
                huluCollections: huluData,
                mindBendingCollections: mindData,
                thrillerCollections: thrillerData,
                hboCollections: hboData
            },
            revalidate: 86400,
        };
    } catch (error) {
        console.error('SSG Error:', error);
        return {
            props: {
                huluCollections: [],
                mindBendingCollections: [],
                thrillerCollections: [],
                hboCollections: []
            },
        };
    }
}