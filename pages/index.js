// pages/index.js - MOBILE PERFORMANCE FIX 🚀
import React, { useState, useEffect, useRef, useCallback, memo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, X, ArrowRight, 
  ChevronLeft, ChevronRight, Construction, Sparkles, 
  Compass, Globe, Layers, Film, Tv, Brain, Skull, Star,
  Feather, Mountain
} from 'lucide-react';

import { COLLECTIONS } from '../data/collections';

// ⚡ LAZY LOAD PlatformSelector - Not needed for LCP
const PlatformSelector = lazy(() => import('../components/PlatformSelector'));

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const ICON_SIZES = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
};

// ⚡ HELPER FUNCTIONS
const fetchUniquePosterForCollection = async (movieIds, sectionName, collectionSlug, usedPosters, TMDB_BASE_URL, TMDB_API_KEY) => {
  if (!movieIds || movieIds.length === 0) return null;

  const posterOverrides = {
    'movies-like-black-swan': '/w185Y7RLfI6d9NMqbElfkE21MHZ.jpg'
  };

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

// ⚡ OPTIMIZED CARD
const CollectionCard = memo(({ collection, index, isMobile, onClick, isPrioritySection }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldPrioritize = isPrioritySection && index < 3; // Reduced to 3

  const Wrapper = isMobile ? 'div' : motion.div;
  const motionProps = isMobile ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: index * 0.05, duration: 0.5, ease: "easeOut" }
  };

  return (
    <Wrapper
      className="group cursor-pointer select-none h-full relative"
      {...motionProps}
      onClick={onClick}
    >
      <div className="relative aspect-[2/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 group-hover:border-yellow-400/30 transition-all duration-500 shadow-xl group-hover:shadow-yellow-400/10">
        <div className="relative w-full h-full">
          <Image
            src={collection.poster_path ? `${IMAGE_BASE_URL}/w185${collection.poster_path}` : "https://via.placeholder.com/185x278/111827/4b5563?text=No+Image"}
            alt={collection.title}
            fill
            priority={shouldPrioritize}
            {...(shouldPrioritize ? { fetchPriority: "high" } : {})}
            sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 150px"
            className={`object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            draggable={false}
            quality={85}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 z-10" />

        <div className="absolute top-2 right-2 z-20">
          <div className="bg-black/70 backdrop-blur-xl px-2 py-1 rounded-md border border-yellow-400/20">
            <div className="flex items-center gap-1">
              <Film className="w-3 h-3 text-yellow-400" />
              <span className="text-[10px] font-bold text-white">{collection.item_count}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 z-20">
          <h3 className="text-white font-semibold text-xs sm:text-base md:text-lg leading-tight mb-1 sm:mb-2 line-clamp-2 group-hover:text-yellow-300 transition-colors duration-300">
            {collection.title}
          </h3>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-300">
            <span className="flex items-center gap-1 bg-white/5 backdrop-blur-sm px-1.5 py-0.5 rounded">
              <Layers className="w-2.5 h-2.5 text-yellow-400" />
              <span className="font-medium">Collection</span>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

CollectionCard.displayName = 'CollectionCard';

// ⚡ ULTRA SIMPLIFIED HERO - LCP OPTIMIZED
const HeroSection = memo(() => {
  const [showPlatformSelector, setShowPlatformSelector] = useState(false);

  useEffect(() => {
    // Delay platform selector load
    const timer = setTimeout(() => setShowPlatformSelector(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-black overflow-hidden select-none pt-16 sm:pt-20">
      {/* Simplified background - no animations on mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 text-yellow-400 text-[10px] sm:text-sm font-medium">
              <Globe className={ICON_SIZES.xs} />
              <span>Global Cinema Discovery</span>
              <Sparkles className={ICON_SIZES.xs} />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-white mb-4 leading-tight">
            Explore the Best of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 font-light mt-1">
              Global Cinema
            </span>
          </h1>

          <p className="text-sm sm:text-xl text-gray-400 mb-8 font-light leading-relaxed max-w-2xl mx-auto px-4">
            Expertly curated collections
          </p>

          <div className="flex justify-center mb-10">
            <Link href="/collections">
              <button className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:from-yellow-300 hover:to-amber-300 transition-all shadow-lg shadow-yellow-400/20 text-sm sm:text-base active:scale-95">
                <Compass className={ICON_SIZES.sm} />
                Explore Collections
              </button>
            </Link>
          </div>

          {/* ⚡ LAZY LOADED */}
          {showPlatformSelector && (
            <Suspense fallback={<div className="h-12" />}>
              <div className="mb-8">
                <PlatformSelector />
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

const ProfessionalCarousel = memo(({ collections, sectionRef, isPrioritySection }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2.3); 
  const dragRef = useRef({ isDragging: false, startX: 0, offset: 0, hasDragged: false });
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 640) setItemsPerView(2.3); 
      else if (width < 768) setItemsPerView(3.2); 
      else if (width < 1024) setItemsPerView(4.2); 
      else if (width < 1280) setItemsPerView(5.2);
      else setItemsPerView(6.2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const safeCollections = Array.isArray(collections) ? collections : [];
  const maxIndex = Math.max(0, safeCollections.length - Math.floor(itemsPerView));

  const nextSlide = useCallback(() => setCurrentIndex(prev => Math.min(prev + 1, maxIndex)), [maxIndex]);
  const prevSlide = useCallback(() => setCurrentIndex(prev => Math.max(prev - 1, 0)), []);

  const handlePointerDown = useCallback((e) => {
    if (isMobile) return; 
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
    if (Math.abs(diff) > 50) {
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
      router.push(`/collection/${id}`);
    }
  };

  if (safeCollections.length === 0) return null;

  return (
    <div ref={sectionRef} className="relative select-none group/carousel">
      {!isMobile && safeCollections.length > itemsPerView && (
        <>
          <motion.button onClick={prevSlide} disabled={currentIndex === 0} className={`absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full border border-gray-700 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-yellow-400/50 ${currentIndex === 0 ? 'invisible' : ''}`} whileHover={{ x: -2 }} aria-label="Previous collections">
            <ChevronLeft className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" />
          </motion.button>
          <motion.button onClick={nextSlide} disabled={currentIndex >= maxIndex} className={`absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full border border-gray-700 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-yellow-400/50 ${currentIndex >= maxIndex ? 'invisible' : ''}`} whileHover={{ x: 2 }} aria-label="Next collections">
            <ChevronRight className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" />
          </motion.button>
        </>
      )}
      
      {isMobile ? (
        <div 
          className="overflow-x-auto px-4 -mx-4 py-4 hide-scrollbar snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-3 pr-4">
            {safeCollections.map((collection, index) => (
              <div 
                key={collection.id} 
                className="flex-shrink-0 snap-center snap-always"
                style={{ width: `calc(${100 / itemsPerView}% - 8px)` }}
                onClick={() => router.push(`/collection/${collection.id}`)}
              >
                <CollectionCard 
                  collection={collection} 
                  index={index} 
                  isMobile={isMobile} 
                  onClick={() => {}} 
                  isPrioritySection={isPrioritySection} 
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div 
          ref={containerRef} 
          className="overflow-hidden px-0 py-4 cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp}
        >
          <motion.div 
            className="flex gap-5" 
            animate={{ x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 20}px + ${dragRef.current.isDragging ? -dragRef.current.offset * 0.3 : 0}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
          >
            {safeCollections.map((collection, index) => (
              <div 
                key={collection.id} 
                className="flex-shrink-0" 
                style={{ width: `calc(${100 / itemsPerView}% - 20px)` }}
              >
                <CollectionCard 
                  collection={collection} 
                  index={index} 
                  isMobile={isMobile} 
                  onClick={() => handleCardClick(collection.id)} 
                  isPrioritySection={isPrioritySection} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      )}
      <style jsx>{` .hide-scrollbar::-webkit-scrollbar { display: none; } `}</style>
    </div>
  );
});

ProfessionalCarousel.displayName = 'ProfessionalCarousel';

const MovieSection = memo(({ title, movies, icon: Icon, description, sectionRef, viewAllLink, isPrioritySection }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    setShouldAnimate(window.innerWidth >= 768);
  }, []);

  const Wrapper = shouldAnimate ? motion.div : 'div';
  const motionProps = shouldAnimate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } : {};

  return (
    <section className="mb-10 sm:mb-20 select-none border-b border-gray-800/30 pb-10 sm:pb-16 last:border-0">
      <Wrapper className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-8 px-1" {...motionProps}>
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-lg sm:rounded-xl border border-yellow-400/30">
              <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />
            </div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white tracking-tight">
              {title}
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-base max-w-2xl font-light leading-relaxed pl-1 line-clamp-1 sm:line-clamp-none">{description}</p>
          
          <Link 
            href={viewAllLink || "/collections"} 
            className="flex sm:hidden items-center gap-1 text-xs text-yellow-400 font-medium mt-3 mb-1 w-fit hover:opacity-80 active:scale-95 transition-all"
            aria-label={`View all ${title} collections`}
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <Link 
          href={viewAllLink || "/collections"} 
          className="hidden sm:flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors font-medium group mt-4 sm:mt-0"
          aria-label={`View all ${title} collections`}
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Wrapper>
      <ProfessionalCarousel collections={movies} sectionRef={sectionRef} isPrioritySection={isPrioritySection} />
    </section>
  );
});

MovieSection.displayName = 'MovieSection';

const FilmiwayHomepage = ({ huluCollections, mindBendingCollections, thrillerCollections, hboCollections, peacockCollections, paramountCollections }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mindRef = useRef(null);
  const thrillerRef = useRef(null);
  const huluRef = useRef(null);
  const hboRef = useRef(null);
  const paramountRef = useRef(null);
  const peacockRef = useRef(null);

  const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <Head>
        <title>Filmiway | Premium Movie Collections & Streaming Guide</title>
        <meta name="description" content="Expertly curated movie collections for Netflix, Hulu, HBO Max, Peacock. Hand-picked recommendations for true cinema lovers." />
        <link rel="canonical" href="https://filmiway.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* ⚡ PERFORMANCE - Preconnect only */}
        <link rel="preconnect" href="https://image.tmdb.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.themoviedb.org" />
      </Head>
      
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
        <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md select-none border-b border-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-14 sm:h-20">
              <Link href="/" className="flex items-center">
                <div className="w-20 sm:w-32 h-full flex items-center">
                  <Image 
                    src="/filmiway-logo.svg" 
                    alt="Filmiway" 
                    width={160} 
                    height={60} 
                    className="w-full h-auto object-contain" 
                    priority
                  />
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-yellow-400 font-medium text-sm">Home</Link>
                <button onClick={() => scrollToSection(mindRef)} className="text-gray-300 hover:text-white transition-colors text-sm">Mind-Bending</button>
                <button onClick={() => scrollToSection(thrillerRef)} className="text-gray-300 hover:text-white transition-colors text-sm">Thrillers</button>
                <button onClick={() => scrollToSection(huluRef)} className="text-gray-300 hover:text-white transition-colors text-sm">Hulu</button>
                <button onClick={() => scrollToSection(paramountRef)} className="text-gray-300 hover:text-white transition-colors text-sm">Paramount+</button>
              </div>
              
              <button 
                className="md:hidden text-gray-300" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className={ICON_SIZES.md} /> : <Menu className={ICON_SIZES.md} />}
              </button>
            </div>
            
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div className="md:hidden bg-black/98 border-t border-gray-800" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                  <div className="px-4 py-4 space-y-3">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-400 font-medium py-2 text-sm">Home</Link>
                    <button onClick={() => { scrollToSection(mindRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Mind-Bending</button>
                    <button onClick={() => { scrollToSection(thrillerRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Thrillers</button>
                    <button onClick={() => { scrollToSection(huluRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Hulu</button>
                    <button onClick={() => { scrollToSection(paramountRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Paramount+</button>
                    <button onClick={() => { scrollToSection(peacockRef); setMobileMenuOpen(false); }} className="block text-gray-300 py-2 w-full text-left text-sm">Peacock</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <HeroSection />
        
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-4 sm:space-y-8">
          <MovieSection 
            title="Mind-Bending & Sci-Fi" 
            description="Films that question reality: Inception, Matrix, Interstellar." 
            movies={mindBendingCollections} 
            icon={Brain} 
            sectionRef={mindRef} 
            viewAllLink="/genre/mind-bending" 
            isPrioritySection={true}
          />
          <MovieSection 
            title="The Thriller Gang" 
            description="Gripping crime, mystery, and revenge thrillers." 
            movies={thrillerCollections} 
            icon={Skull} 
            sectionRef={thrillerRef} 
            viewAllLink="/genre/thriller" 
          />
          <MovieSection 
            title="Best of Hulu" 
            description="The absolute best movies streaming on Hulu right now." 
            movies={huluCollections} 
            icon={Tv}
            sectionRef={huluRef} 
            viewAllLink="/streaming/hulu"
          />
          <MovieSection 
            title="Best of HBO Max" 
            description="Epic blockbusters and prestige drama on HBO Max." 
            movies={hboCollections} 
            icon={Star}
            sectionRef={hboRef} 
            viewAllLink="/streaming/hbo-max"
          />
          <MovieSection 
            title="Best of Paramount+" 
            description="The peak of entertainment: Top Gun, Interstellar, and more." 
            movies={paramountCollections} 
            icon={Mountain}
            sectionRef={paramountRef} 
            viewAllLink="/streaming/paramount-plus"
          />
          <MovieSection 
            title="Best of Peacock" 
            description="NBCUniversal's finest: The Office, horrors, and blockbusters." 
            movies={peacockCollections} 
            icon={Feather}
            sectionRef={peacockRef} 
            viewAllLink="/streaming/peacock"
          />
        </main>

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-gray-900/30 rounded-xl border border-gray-800 mb-8 sm:mb-12">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Construction className="w-5 h-5 text-orange-400" />
              <h2 className="text-lg sm:text-xl font-light text-white">Something is Cooking</h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">We are building new features to help you discover movies even faster. Stay tuned.</p>
          </div>
        </div>

        <footer className="bg-black py-8 sm:py-12 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 border-b border-gray-800 pb-8 sm:pb-12">
              <div>
                <h3 className="text-gray-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Mind Bending</h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li><Link href="/genre/mind-bending" className="hover:text-white transition-colors inline-block py-1">Mind-Bending Hub</Link></li>
                  <li><Link href="/collection/movies-like-inception" className="hover:text-white transition-colors inline-block py-1">Like Inception</Link></li>
                  <li><Link href="/collection/movies-like-memento" className="hover:text-white transition-colors inline-block py-1">Like Memento</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Hulu Picks</h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li><Link href="/streaming/hulu" className="hover:text-white transition-colors inline-block py-1">Hulu Guide</Link></li>
                  <li><Link href="/collection/best-movies-on-hulu" className="hover:text-white transition-colors inline-block py-1">Best Movies</Link></li>
                  <li><Link href="/collection/best-thriller-movies-hulu" className="hover:text-white transition-colors inline-block py-1">Best Thrillers</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Thriller Gang</h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li><Link href="/genre/thriller" className="hover:text-white transition-colors inline-block py-1">Thriller Hub</Link></li>
                  <li><Link href="/collection/best-crime-thriller-movies" className="hover:text-white transition-colors inline-block py-1">Crime</Link></li>
                  <li><Link href="/collection/best-mystery-thriller-movies" className="hover:text-white transition-colors inline-block py-1">Mystery</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Legal</h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li><Link href="/privacy" className="hover:text-white transition-colors inline-block py-1">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors inline-block py-1">Terms of Use</Link></li>
                  <li><Link href="/about-us" className="hover:text-white transition-colors inline-block py-1">About Us</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors inline-block py-1">FAQ</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-gray-400 text-[10px] sm:text-xs">Where Every Film Finds Its Way.</p>
              <div className="flex items-center gap-4 text-gray-400 text-[10px]">
                <span>&copy; 2026 Filmiway</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
                <a 
                  href="https://www.themoviedb.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2"
                  aria-label="Powered by The Movie Database"
                >
                  <img 
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                    alt="TMDB Logo" 
                    className="h-3 w-auto" 
                    width="33"
                    height="12"
                    loading="lazy"
                  />
                  <span className="text-[9px] text-gray-400">This product uses the TMDB API but is not endorsed or certified by TMDB.</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FilmiwayHomepage;

export async function getStaticProps() {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!TMDB_API_KEY) {
    throw new Error("❌ TMDB_API_KEY is missing in environment variables. Build failed to prevent security leak.");
  }
  
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  const huluKeys = ['best-movies-on-hulu', 'best-action-movies-on-hulu', 'best-romance-movies-on-hulu', 'best-comedy-movies-on-hulu', 'best-sci-fi-movies-on-hulu', 'best-thriller-movies-hulu', 'best-horror-movies-on-hulu', 'best-drama-movies-on-hulu', 'best-family-movies-on-hulu'];
  const mindBendingKeys = ['movies-like-inception', 'movies-like-the-matrix', 'movies-like-interstellar', 'best-sci-fi-movies', 'best-time-travel-movies', 'movies-like-donnie-darko', 'movies-like-memento', 'movies-like-eyes-wide-shut'];
  const thrillerKeys = ['best-thriller-movies', 'best-crime-thriller-movies', 'best-heist-thriller-movies', 'best-psychological-thriller-movies', 'best-detective-thriller-movies', 'best-mystery-thriller-movies', 'movies-like-se7en', 'movies-like-shutter-island', 'movies-like-parasite', 'movies-like-oldboy', 'movies-like-black-swan', 'best-revenge-movies'];
  const hboKeys = ['best-movies-on-hbo-max', 'best-action-movies-on-hbo-max', 'best-sci-fi-movies-on-hbo-max', 'best-horror-movies-on-hbo-max', 'best-romance-movies-on-hbo-max', 'best-drama-movies-on-hbo-max', 'best-comedy-movies-on-hbo-max', 'best-family-movies-on-hbo-max', 'best-thriller-movies-on-hbo-max'];
  
  const paramountKeys = [
    'best-movies-on-paramount-plus',
    'best-action-movies-on-paramount-plus',
    'best-sci-fi-movies-on-paramount-plus',
    'best-romance-movies-on-paramount-plus',
    'best-core-drama-movies-on-paramount-plus',
    'best-thriller-movies-on-paramount-plus',
    'best-family-movies-on-paramount-plus',
    'best-horror-movies-on-paramount-plus',
    'best-comedy-movies-on-paramount-plus'
  ];

  const peacockKeys = ['best-movies-on-peacock', 'best-action-adventure-movies-on-peacock', 'best-sci-fi-movies-on-peacock', 'best-romance-movies-on-peacock', 'best-drama-movies-on-peacock', 'best-thriller-movies-on-peacock', 'best-family-movies-on-peacock', 'best-comedy-movies-on-peacock'];

  const usedPostersPerSection = { hulu: new Set(), mind: new Set(), thriller: new Set(), hbo: new Set(), peacock: new Set(), paramount: new Set() };

  const fetchCollectionData = async (keys, sectionName) => {
    const results = await Promise.all(keys.map(async (key) => {
      const collection = COLLECTIONS[key];
      if (!collection) return null;

      const posterPath = await fetchUniquePosterForCollection(collection.movies, sectionName, collection.slug, usedPostersPerSection[sectionName], TMDB_BASE_URL, TMDB_API_KEY);
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
    const [huluData, mindData, thrillerData, hboData, peacockData, paramountData] = await Promise.all([
      fetchCollectionData(huluKeys, 'hulu'),
      fetchCollectionData(mindBendingKeys, 'mind'),
      fetchCollectionData(thrillerKeys, 'thriller'),
      fetchCollectionData(hboKeys, 'hbo'),
      fetchCollectionData(peacockKeys, 'peacock'),
      fetchCollectionData(paramountKeys, 'paramount')
    ]);

    return {
      props: {
        huluCollections: huluData,
        mindBendingCollections: mindData,
        thrillerCollections: thrillerData,
        hboCollections: hboData,
        peacockCollections: peacockData,
        paramountCollections: paramountData
      },
      revalidate: 604800, 
    };
  } catch (error) {
    console.error('SSG Error:', error);
    return {
      props: {
        huluCollections: [],
        mindBendingCollections: [],
        thrillerCollections: [],
        hboCollections: [],
        peacockCollections: [],
        paramountCollections: [],
      },
    };
  }
}
