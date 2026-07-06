// pages/index.js - MAXIMUM PERFORMANCE OPTIMIZED 🚀
import React, { useState, useEffect, useRef, memo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Compass,
  Search,
  Sparkles,
  Clock,
  Shield,
  ChevronRight,
  Film
} from 'lucide-react';
import dynamic from 'next/dynamic';

import { COLLECTIONS, getPrimaryCollectionForMovie } from '../data/collections';
import { COMPLETE_MOVIE_DATABASE as TRENDING_DB, FALLBACK_POSTERS as TRENDING_POSTERS } from '../utils/trendingMovieData';
import PlatformSelector from '../components/PlatformSelector';
import Header from '../components/Header';
import tmdbCache from '../data/tmdbCache.json'; // ⚡ NEW: Instant Local Data
import masterDatabase from '../utils/masterDatabase.json';
import masterTimestamps from '../utils/masterTimestamps.json';

// ⚡ HELPER FUNCTIONS
const getUniquePosterFromCache = (movieIds, collectionSlug, usedPosters) => {
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

  // ⚡ SUPER FAST: Look up the poster instantly from our local JSON cache
  for (let i = 0; i < Math.min(movieIds.length, 5); i++) {
    // Some of your movieIds arrays contain IMDb IDs, others contain TMDB IDs.
    // Our cache uses IMDb IDs as the key.
    const movieId = movieIds[i].toString().trim();
    const cachedData = tmdbCache[movieId];

    if (cachedData && cachedData.poster_path && !usedPosters.has(cachedData.poster_path)) {
      usedPosters.add(cachedData.poster_path);
      return cachedData.poster_path;
    }
  }
  return null;
};

// Client-Side Autocomplete Search Bar Component
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 1) {
      const cleanQuery = val.toLowerCase().trim();
      const filtered = masterDatabase.filter(movie =>
        (movie.Title || '').toLowerCase().includes(cleanQuery)
      ).slice(0, 6); // show top 6 matches
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto z-50">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/70" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search movies for skip timestamps... (e.g. Oppenheimer, The Handmaiden)"
          className="w-full bg-[#0a0a0a]/90 hover:bg-[#0f0f0f]/90 focus:bg-[#0f0f0f] border border-white/10 hover:border-white/15 focus:border-amber-500/40 rounded-xl py-4 pl-12 pr-6 text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all shadow-xl"
        />
      </div>
      {isOpen && results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 divide-y divide-white/5 max-h-[300px] overflow-y-auto">
          <ul className="py-1">
            {results.map((movie) => {
              const safeSlug = movie.slug || (movie.Title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <li key={movie.imdbID}>
                  <Link href={`/movie/${safeSlug}`} className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 hover:text-amber-400 transition-all text-left text-sm font-medium text-white">
                    <Film className="w-4 h-4 opacity-70 shrink-0" />
                    <span className="flex-grow truncate">{movie.Title} <span className="text-[10px] opacity-50 ml-1">({movie.Year || movie.year})</span></span>
                    <ChevronRight className="w-4 h-4 opacity-40 shrink-0" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

// ⚡ HERO SECTION - Fast initial load
const HeroSection = memo(() => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#030303] overflow-hidden select-none pt-24 pb-8 sm:pt-28 sm:pb-12">
      {/* Premium Cinematic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft warm cinematic center glow */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] rounded-full mix-blend-screen transform-gpu opacity-40 filter blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(202,138,4,0.12) 0%, rgba(202,138,4,0.03) 50%, transparent 100%)' }} />
        {/* Muted warm sepia backing */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0805] via-[#030303] to-[#030303]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-6">
              <Film className="w-3.5 h-3.5 text-amber-500/80" />
              <span className="text-[10px] sm:text-xs font-light text-neutral-300 tracking-[0.18em] uppercase">Manually Curated Parents Guides</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-normal text-white mb-6 leading-[1.15] tracking-tight">
            Worry-Free <br className="hidden sm:block" />
            <span className="font-normal italic text-amber-400/90 font-playfair">
              Family Movie Nights
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 mb-8 font-light leading-relaxed max-w-2xl mx-auto px-4">
            Find exact skip timestamps to bypass intimate scenes and sensitive content in popular movies. Plan a clean, worry-free family movie night instantly.
          </p>

          {/* Curated Collections Button */}
          <div className="mb-10 px-4 flex justify-center">
            <Link
              href="/collections"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black hover:text-black font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 select-none shadow-lg"
            >
              <span>Explore Curated Collections</span>
              <ChevronRight className="w-4 h-4 text-black hover:text-black group-hover:translate-x-0.5 transition-transform" />
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

// ⚡ STATIC MOVIE GRID (DESKTOP) & CAROUSEL (MOBILE)
const MovieGrid = ({ title, description, movies }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!movies || movies.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mb-16 select-none">
      <div className="flex flex-col mb-8 px-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">{title}</h2>
        <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl">{description}</p>
      </div>

      {/* Desktop Grid Layout: hidden on mobile */}
      <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 px-1">
        {movies.slice(0, 10).map((movie) => {
          const movieSlug = movie.slug || (movie.Title || movie.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
          const posterUrl = movie.posterUrl || "https://via.placeholder.com/342x513/111827/4b5563?text=No+Image";
          return (
            <Link
              key={movie.imdbID}
              href={`/movie/${movieSlug}`}
              className="group cursor-pointer relative transition-transform duration-300 hover:-translate-y-2 block"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-gray-900 border border-white/10 group-hover:border-yellow-500/50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
                <div className="relative w-full h-full">
                  <Image
                    src={posterUrl}
                    alt={movie.Title}
                    fill
                    sizes="(max-width: 1024px) 250px, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-10 pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 pointer-events-none">
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight mb-1 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-md">
                    {movie.Title}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-yellow-500/90 font-medium tracking-wide block uppercase mt-1">
                    {movie.Year || movie.year} • Parents Guide
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile Carousel Layout: hidden on desktop */}
      <div className="block sm:hidden px-8">
        <div className="relative w-full max-w-[280px] mx-auto">
          {movies.slice(0, 10).map((movie, index) => {
            if (index !== activeIndex) return null;
            const movieSlug = movie.slug || (movie.Title || movie.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            const posterUrl = movie.posterUrl || "https://via.placeholder.com/342x513/111827/4b5563?text=No+Image";
            return (
              <div key={movie.imdbID} className="animate-fade-in duration-300">
                <Link
                  href={`/movie/${movieSlug}`}
                  className="block relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={posterUrl}
                      alt={movie.Title}
                      fill
                      sizes="280px"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <h3 className="text-white font-bold text-lg leading-snug mb-1 drop-shadow-md">
                      {movie.Title}
                    </h3>
                    <span className="text-xs text-yellow-400 font-semibold tracking-wide block uppercase mt-1">
                      {movie.Year || movie.year} • Parents Guide
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}

          {/* Carousel Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-42px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white active:scale-95 transition-transform"
            aria-label="Previous Movie"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-42px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white active:scale-95 transition-transform"
            aria-label="Next Movie"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-5">
            {movies.slice(0, 10).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-4 bg-yellow-400' : 'w-1.5 bg-gray-600'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ⚡ HOW IT WORKS / VALUES SECTION
const FeaturesSection = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#080808] -mx-4 sm:-mx-6 px-4 sm:px-6 mb-16 select-none">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">How Filmiway Works</h2>
        <p className="text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto mb-10">We manually analyze movies scene-by-scene so you can bypass uncomfortable elements.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 hover:border-yellow-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Exact Skip Timestamps</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">Get frame-by-frame starting and ending points to safely skip intimate and sensitive scenes without missing the plot.</p>
          </div>

          <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 hover:border-yellow-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Manually Verified</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">No automated AI guesswork. Every timestamp is manually checked, double-verified, and contextualized by real human editors.</p>
          </div>

          <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 hover:border-yellow-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Worry-Free Viewing</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">Filter movies by streaming platforms, locate clean recommendations, and comfortably host family movie nights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// PlatformGrid removed because it is duplicated by PlatformSelector at the top.

const FilmiwayHomepage = ({ rRatedCleanMovies, trendingParentsGuides, top10TrendingMovies }) => {
  return (
    <div>
      <Head>
        <title>Filmiway | Parents Guide: Skip Intimate Scenes & Timestamps</title>
        <meta name="description" content="Get exact skip timestamps to bypass intimate and sensitive scenes in popular movies. Plan a safe, worry-free family movie night instantly." />
        <link rel="canonical" href="https://filmiway.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        <link rel="preconnect" href="https://image.tmdb.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.themoviedb.org" />
      </Head>

      <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
        <Header />

        <HeroSection />

        <main className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-16 sm:space-y-24 relative z-20">

            {/* Trending Parents Guides Grid */}
            <MovieGrid
              title="Trending Parents Guides"
              description="Manually verified skip timestamps guides for the most searched movies."
              movies={trendingParentsGuides}
            />

            {/* Features (How It Works) Section */}
            <FeaturesSection />

            {/* Clean Movies Grid */}
            <MovieGrid
              title="R-Rated Masterpiece Movies with No Sexual Content"
              description="Acclaimed movies manually verified as free of sensitive or intimate content. For a stress-free movie night."
              movies={rRatedCleanMovies}
            />





          </div>
        </main>

        <footer className="bg-black py-8 sm:py-12 border-t border-gray-800" style={{ contentVisibility: 'auto', containIntrinsicSize: '400px' }}>
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
                <h3 className="text-gray-400 font-bold mb-3 uppercase text-[10px] tracking-widest">Resources & Legal</h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li><Link href="/how-to-skip-awkward-scenes-in-movies" className="hover:text-green-400 text-green-500/90 transition-colors inline-block py-1 font-medium">Skip Awkward Scenes Guide</Link></li>
                  <li><Link href="/movie-directory" className="hover:text-yellow-400 text-yellow-500/90 transition-colors inline-block py-1 font-medium">A-Z Directory</Link></li>
                  <li><Link href="/about-us" className="hover:text-white transition-colors inline-block py-1">About Us</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors inline-block py-1">FAQ</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors inline-block py-1">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors inline-block py-1">Terms of Use</Link></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-gray-400 text-[10px] sm:text-xs">Worry-Free Movie Nights. Skip the Awkward.</p>
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
  // ⚡ NOTE: TMDB_API_KEY is not required here because getStaticProps uses local data (tmdbCache.json & masterDatabase.json)

  const huluKeys = ['best-movies-on-hulu', 'best-action-movies-on-hulu', 'best-romance-movies-on-hulu', 'best-comedy-movies-on-hulu', 'best-sci-fi-movies-on-hulu', 'best-thriller-movies-hulu', 'best-horror-movies-on-hulu', 'best-drama-movies-on-hulu', 'best-family-movies-on-hulu'];
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

  const usedPostersPerSection = { hulu: new Set(), thriller: new Set(), hbo: new Set(), peacock: new Set(), paramount: new Set() };

  const getCollectionData = (keys, sectionName) => {
    const results = keys.map((key) => {
      const collection = COLLECTIONS[key];
      if (!collection) return null;

      const posterPath = getUniquePosterFromCache(collection.movies, collection.slug, usedPostersPerSection[sectionName]);
      if (!posterPath) return null;

      return {
        id: collection.slug,
        title: collection.title,
        poster_path: posterPath,
        item_count: collection.movies.length,
        vote_average: collection.stats?.averageRating || 8.0,
        isCollection: true
      };
    });

    return results.filter(item => item !== null);
  };

  // ⚡ FAST CACHE FETCHER FOR TOP 10 LISTS
  const getTop10MoviesWithSlugs = (moviesList, fallbackPosters) => {
    if (!moviesList) return [];
    return moviesList.slice(0, 10).map((movie) => {
      let posterUrl = fallbackPosters?.[movie.tmdbId] || null;

      // Use local cache if available!
      const cachedData = tmdbCache[movie.imdbID];
      if (cachedData && cachedData.poster_path) {
        posterUrl = `https://image.tmdb.org/t/p/w342${cachedData.poster_path}`;
      }

      // Ensure fallback URLs also use the optimized w342 size instead of heavy w500
      if (posterUrl && posterUrl.includes('w500')) {
        posterUrl = posterUrl.replace('w500', 'w342');
      }

      const collectionSlug = getPrimaryCollectionForMovie(movie.imdbID) || 'best-movies-of-the-decade'; // Fallback slug
      return { ...movie, posterUrl, collectionSlug };
    });
  };

  try {
    // ⚡ EVERYTHING IS NOW SYNCHRONOUS AND INSTANT
    const huluData = getCollectionData(huluKeys, 'hulu');
    const thrillerData = getCollectionData(thrillerKeys, 'thriller');
    const hboData = getCollectionData(hboKeys, 'hbo');
    const peacockData = getCollectionData(peacockKeys, 'peacock');
    const paramountData = getCollectionData(paramountKeys, 'paramount');

    // --- R-Rated (No Sexual Content) Carousel Logic ---
    // 🔥 USER REQUEST: Curated a new list of 10 R-Rated "clean" masterpieces.
    const handPickedCleanR_IMDB_IDs = [
      'tt0114369', // Se7en
      'tt1392214', // Prisoners
      'tt0443706', // Zodiac
      'tt0477348', // No Country for Old Men
      'tt0469494', // There Will Be Blood
      'tt0113277', // Heat
      'tt1285016', // The Social Network
      'tt0120815', // Saving Private Ryan
      'tt2582802', // Whiplash
      'tt8579674', // 1917
    ];

    const rRatedCleanMoviesDb = handPickedCleanR_IMDB_IDs
      .map(id => masterDatabase.find(m => m.imdbID === id))
      .filter(Boolean);
    const rRatedCleanMovies = getTop10MoviesWithSlugs(rRatedCleanMoviesDb, null);

    let top10TrendingMovies = getTop10MoviesWithSlugs(TRENDING_DB, TRENDING_POSTERS);

    // ⚡ CUSTOM HOMEPAGE ARRAY: High-traffic Parents Guides 
    const trendingParentsGuideIds = [1339713, 27205, 218, 318846, 475557, 398818, 1791, 10867, 9346, 11423];
    const customTrendingGuidesDb = trendingParentsGuideIds.map(id => masterDatabase.find(m => m.tmdbId === id)).filter(Boolean);
    const trendingParentsGuides = getTop10MoviesWithSlugs(customTrendingGuidesDb, null);

    // ⚡ INJECT OBSESSION INTO TRENDING CAROUSEL AND REMOVE SALTBURN
    top10TrendingMovies = top10TrendingMovies.map(movie => {
      if (movie.tmdbId === 930564 || movie.Title === "Saltburn") {
        const obsession = masterDatabase.find(m => m.tmdbId === 1339713);
        return obsession ? getTop10MoviesWithSlugs([obsession], null)[0] : movie;
      }
      return movie;
    });

    return {
      props: {
        huluCollections: huluData,
        thrillerCollections: thrillerData,
        hboCollections: hboData,
        peacockCollections: peacockData,
        paramountCollections: paramountData,
        rRatedCleanMovies,
        top10TrendingMovies,
        trendingParentsGuides
      },
      revalidate: 604800,
    };
  } catch (error) {
    console.error('SSG Error:', error);
    return {
      props: {
        huluCollections: [],
        thrillerCollections: [],
        hboCollections: [],
        peacockCollections: [],
        paramountCollections: [],
        rRatedCleanMovies: [],
        top10TrendingMovies: []
      },
    };
  }
}