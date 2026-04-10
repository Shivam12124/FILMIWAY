// pages/index.js - MAXIMUM PERFORMANCE OPTIMIZED 🚀
import React, { useState, useEffect, useRef, memo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { 
  ArrowRight, Compass,
  ChevronLeft, ChevronRight, Construction,
  Film, Star, Flame
} from 'lucide-react';

import { COLLECTIONS } from '../data/collections';
import { COMPLETE_MOVIE_DATABASE as EROTIC_THRILLER_DB, FALLBACK_POSTERS as EROTIC_THRILLER_POSTERS } from '../utils/eroticThrillerMovieData';
import PlatformSelector from '../components/PlatformSelector';
import Header from '../components/Header';

// ⚡ OPTIMIZED NATIVE FONT LOADING
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

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

// ⚡ PURE CSS CARD - Optimized Next/Image for LCP
const CollectionCard = memo(({ collection, index, href, isPrioritySection }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldPrioritize = isPrioritySection && index < 4;

  return (
    <Link
      href={href}
      className="group cursor-pointer select-none relative transition-transform duration-300 hover:-translate-y-2 block shrink-0"
      style={{ 
         width: 'clamp(140px, 35vw, 220px)', 
         height: 'clamp(210px, 52.5vw, 330px)' 
      }}
    >
      <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-900 border border-white/10 group-hover:border-yellow-400/50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
        <div className="relative w-full h-full">
          <Image
            src={collection.poster_path ? `${IMAGE_BASE_URL}/w342${collection.poster_path}` : "https://via.placeholder.com/342x513/111827/4b5563?text=No+Image"}
            alt={collection.title}
            fill
            priority={shouldPrioritize}
            quality={65} 
            sizes="(max-width: 640px) 160px, 250px"
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${shouldPrioritize || imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            draggable={false}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500 z-10 pointer-events-none" />

        <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-20 flex justify-between items-start pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-white border border-white/10 flex items-center gap-1 shadow-lg">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
            {collection.vote_average}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 pointer-events-none transform translate-y-1 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-white font-semibold sm:font-bold text-sm sm:text-base leading-tight mb-1 line-clamp-3 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-md">
            {collection.title}
          </h3>
        </div>
      </div>
    </Link>
  );
});

CollectionCard.displayName = 'CollectionCard';

// ⚡ TOP 10 MOVIE CARD (NETFLIX STYLE)
const Top10MovieCard = memo(({ movie, index }) => {
  const rank = index + 1;
  const isDoubleDigit = rank >= 10;
  const posterUrl = movie.posterUrl || "https://via.placeholder.com/342x513/111827/4b5563?text=No+Image";
  
  return (
    <Link
      href={`/movies/best-erotic-thriller-movies/${movie.imdbID}`}
      className="group relative flex items-end shrink-0 transition-transform duration-300 hover:-translate-y-2 pl-4 sm:pl-6"
      style={{ 
         width: 'clamp(215px, 53.8vw, 338px)', 
         height: 'clamp(210px, 52.5vw, 330px)' 
      }}
    >
      {/* Massive Overlapping Number */}
      <div 
         className={`absolute ${isDoubleDigit ? 'left-[-45px] sm:left-[-75px]' : 'left-[-10px] sm:left-[-20px]'} bottom-[-15px] sm:bottom-[-20px] z-0 leading-none text-transparent select-none pointer-events-none drop-shadow-2xl`}
         style={{
           fontSize: 'clamp(170px, 35vw, 280px)',
           fontWeight: '900',
           WebkitTextStroke: '3px #d4d4d8', // Slate-300 outline
           letterSpacing: isDoubleDigit ? '-0.12em' : '-0.05em',
           fontFamily: '"Arial Black", "Impact", sans-serif'
         }}
      >
        {rank}
      </div>
      
      {/* Movie Poster */}
      <div className="absolute right-0 w-[65%] h-full z-10 rounded-lg overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)] group-hover:border-yellow-400/50 transition-all duration-300 bg-gray-900">
        <Image
          src={posterUrl}
          alt={movie.Title}
          fill
          sizes="(max-width: 640px) 160px, 250px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
});

Top10MovieCard.displayName = 'Top10MovieCard';

// ⚡ TOP 10 CAROUSEL
const Top10Carousel = memo(({ movies }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth + 50 : clientWidth - 50;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative group/carousel mt-4 sm:mt-8 mb-4">
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" 
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      
      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" 
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 pt-4 px-2 sm:px-4 snap-x snap-mandatory hide-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies.map((movie, index) => (
          <div key={movie.imdbID} className="snap-start flex-shrink-0">
            <Top10MovieCard movie={movie} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
});

Top10Carousel.displayName = 'Top10Carousel';

// ⚡ HERO SECTION - Fast initial load
const HeroSection = memo(() => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#030303] overflow-hidden select-none pt-24 pb-4 sm:pt-28 sm:pb-8">
      {/* Premium Cinematic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-yellow-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-gray-300 tracking-wider uppercase">60+ Expertly Curated Collections</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extralight text-white mb-6 leading-[1.1] tracking-tight">
            The Art of <br className="hidden sm:block" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 ml-2 sm:ml-0">
              Cinema Discovery
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 font-light leading-relaxed max-w-2xl mx-auto px-4">
            Stop endlessly scrolling. Start watching. We hand-pick the absolute best films across every major platform so you don't have to.
          </p>
          
          <div className="relative z-20 flex justify-center items-center gap-4 mb-10 sm:mb-14 px-4">
            <Link href="/collections" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-yellow-500 text-black px-8 py-3.5 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-xl shadow-yellow-500/10 text-sm sm:text-base active:scale-95">
                <Compass className="w-5 h-5" />
                Explore All Collections
              </button>
            </Link>
          </div>

          <div className="w-full">
            <PlatformSelector />
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// ⚡ NATIVE CAROUSEL
const ProfessionalCarousel = memo(({ collections, sectionRef, isPrioritySection }) => {
  const scrollContainerRef = useRef(null);
  const router = useRouter();

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth + 50 : clientWidth - 50;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const safeCollections = Array.isArray(collections) ? collections : [];
  if (safeCollections.length === 0) return null;

  return (
    <div ref={sectionRef} className="relative group/carousel">
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" 
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      
      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" 
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-2 px-1 snap-x snap-mandatory hide-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {safeCollections.map((collection, index) => (
          <div 
            key={collection.id} 
            className="flex-shrink-0 snap-start"
          >
            <CollectionCard 
              collection={collection} 
              index={index} 
              href={`/collection/${collection.id}`} 
              isPrioritySection={isPrioritySection} 
            />
          </div>
        ))}
      </div>
      <style jsx>{` .hide-scrollbar::-webkit-scrollbar { display: none; } `}</style>
    </div>
  );
});

ProfessionalCarousel.displayName = 'ProfessionalCarousel';

// ⚡ MOVIE SECTION - Added content-visibility to reduce DOM size calculation
const MovieSection = memo(({ title, movies, description, sectionRef, viewAllLink, isPrioritySection }) => {
  return (
    <section 
      className="mb-12 sm:mb-20 select-none"
      style={!isPrioritySection ? { contentVisibility: 'auto', containIntrinsicSize: '450px' } : {}}
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 px-1">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 sm:mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl">{description}</p>
        </div>
        <Link 
          href={viewAllLink || "/collections"} 
          className="inline-block mt-4 sm:mt-0 text-xs font-semibold text-yellow-500 hover:text-yellow-400 transition-colors uppercase tracking-widest"
          aria-label={`View all ${title} collections`}
        >
          Explore All
        </Link>
      </div>
      <ProfessionalCarousel collections={movies} sectionRef={sectionRef} isPrioritySection={isPrioritySection} />
    </section>
  );
});

MovieSection.displayName = 'MovieSection';

// ⚡ TOP 10 SECTION 
const Top10Section = memo(({ title, movies, description }) => {
  return (
    <section className="mb-12 sm:mb-20 select-none">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-8 px-1">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 sm:mb-2 flex items-center gap-3">
            <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl">{description}</p>
        </div>
      </div>
      <Top10Carousel movies={movies} />
    </section>
  );
});

Top10Section.displayName = 'Top10Section';

const FilmiwayHomepage = ({ huluCollections, mindBendingCollections, thrillerCollections, hboCollections, peacockCollections, paramountCollections, top10EroticThrillers }) => {
  const mindRef = useRef(null);
  const thrillerRef = useRef(null);
  const huluRef = useRef(null);
  const hboRef = useRef(null);
  const paramountRef = useRef(null);
  const peacockRef = useRef(null);

  const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className={inter.className}>
      <Head>
        <title>Filmiway | Premium Movie Collections & Streaming Guide</title>
        <meta name="description" content="Expertly curated movie collections for Netflix, Hulu, HBO Max, Peacock. Hand-picked recommendations for true cinema lovers." />
        <link rel="canonical" href="https://filmiway.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* ⚡ CRITICAL PERFORMANCE OPTIMIZATION */}
        <link rel="preconnect" href="https://image.tmdb.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.themoviedb.org" />
      </Head>
      
      <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
        <Header />

        <HeroSection />
        
        <main className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-16 sm:space-y-24 relative z-20">
            
            <MovieSection 
              title="Mind-Bending & Sci-Fi" 
              description="Visionary films that challenge reality, time, and human perception." 
              movies={mindBendingCollections} 
              sectionRef={mindRef} 
              viewAllLink="/genre/mind-bending" 
              isPrioritySection={true}
            />

            <Top10Section 
              title="Top 10 Erotic Thrillers" 
              description="The most intensely debated psychological and sensual thrillers streaming right now." 
              movies={top10EroticThrillers} 
            />
            
            <MovieSection 
              title="The Thriller Gang" 
              description="Gripping crime, mystery, and revenge thrillers for the edge of your seat." 
              movies={thrillerCollections} 
              sectionRef={thrillerRef} 
              viewAllLink="/genre/thriller" 
            />

            <MovieSection title="Best of Hulu" description="The absolute best movies streaming on Hulu right now." movies={huluCollections} sectionRef={huluRef} viewAllLink="/streaming/hulu" />
            
            <MovieSection title="Best of HBO Max" description="Epic blockbusters and prestige drama on HBO Max." movies={hboCollections} sectionRef={hboRef} viewAllLink="/streaming/hbo-max" />
            
            <MovieSection title="Best of Paramount+" description="The peak of entertainment: Top Gun, Interstellar, and more." movies={paramountCollections} sectionRef={paramountRef} viewAllLink="/streaming/paramount-plus" />
            
            <MovieSection title="Best of Peacock" description="NBCUniversal's finest: Edge-of-your-seat thrillers and sci-fi." movies={peacockCollections} sectionRef={peacockRef} viewAllLink="/streaming/peacock" />
            
          </div>
        </main>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-[#111] border-y border-white/5 mb-12 text-center">
          <h2 className="text-lg sm:text-xl font-medium text-white mb-2 tracking-tight">A Revolutionary New Feature is Cooking</h2>
          <p className="text-gray-400 text-sm font-light max-w-md mx-auto">Stay tuned for a groundbreaking new way to experience and discover cinema.</p>
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
                  <li><Link href="/collection/best-erotic-thriller-movies" className="hover:text-white transition-colors inline-block py-1">Erotic Thrillers</Link></li>
                  <li><Link href="/collection/best-erotic-romance-movies" className="hover:text-white transition-colors inline-block py-1">Erotic Romance</Link></li>
                  <li><Link href="/collection/best-true-story-movies" className="hover:text-white transition-colors inline-block py-1">True Story</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Legal</h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li><Link href="/privacy" className="hover:text-white transition-colors inline-block py-1">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors inline-block py-1">Terms of Use</Link></li>
                  <li><Link href="/about-us" className="hover:text-white transition-colors inline-block py-1">About Us</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors inline-block py-1">FAQ</Link></li>
                  <li><Link href="/movie-directory" className="hover:text-yellow-400 text-yellow-500/80 transition-colors inline-block py-1 font-medium">A-Z Directory</Link></li>
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
    </div>
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

  // ⚡ Fetch Posters for the direct Top 10 Movies
  const fetchTop10Movies = async (moviesList) => {
    if (!moviesList) return [];
    return await Promise.all(moviesList.slice(0, 10).map(async (movie) => {
      let posterUrl = EROTIC_THRILLER_POSTERS?.[movie.tmdbId] || null;
      try {
        const res = await fetch(`${TMDB_BASE_URL}/movie/${movie.tmdbId}?api_key=${TMDB_API_KEY}`);
        const data = await res.json();
        if (data.poster_path) {
          posterUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        }
      } catch (e) {
        console.error("Error fetching top 10 poster for:", movie.Title);
      }
      return { ...movie, posterUrl };
    }));
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

    const top10EroticThrillers = await fetchTop10Movies(EROTIC_THRILLER_DB);

    return {
      props: {
        huluCollections: huluData,
        mindBendingCollections: mindData,
        thrillerCollections: thrillerData,
        hboCollections: hboData,
        peacockCollections: peacockData,
        paramountCollections: paramountData,
        top10EroticThrillers
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
        top10EroticThrillers: []
      },
    };
  }
}