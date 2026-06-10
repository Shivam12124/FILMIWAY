// pages/index.js - MAXIMUM PERFORMANCE OPTIMIZED 🚀
import React, { useState, useEffect, useRef, memo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Compass
} from 'lucide-react';
import dynamic from 'next/dynamic';

import { COLLECTIONS, getPrimaryCollectionForMovie } from '../data/collections';
import { COMPLETE_MOVIE_DATABASE as EROTIC_THRILLER_DB, FALLBACK_POSTERS as EROTIC_THRILLER_POSTERS } from '../utils/eroticThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as TRENDING_DB, FALLBACK_POSTERS as TRENDING_POSTERS } from '../utils/trendingMovieData';
import PlatformSelector from '../components/PlatformSelector';
import Header from '../components/Header';
import tmdbCache from '../data/tmdbCache.json'; // ⚡ NEW: Instant Local Data
import masterDatabase from '../utils/masterDatabase.json';

const MovieSection = dynamic(() => import('../components/HomeCarousels').then(mod => mod.MovieSection));
const Top10Section = dynamic(() => import('../components/HomeCarousels').then(mod => mod.Top10Section));
const QuickLinksSection = dynamic(() => import('../components/HomeCarousels').then(mod => mod.QuickLinksSection));

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

// ⚡ HERO SECTION - Fast initial load
const HeroSection = memo(() => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#030303] overflow-hidden select-none pt-24 pb-4 sm:pt-28 sm:pb-8">
      {/* Premium Cinematic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full mix-blend-screen transform-gpu" style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full mix-blend-screen transform-gpu" style={{ background: 'radial-gradient(circle, rgba(202,138,4,0.1) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-gray-300 tracking-wider uppercase">70+ Expertly Curated Collections</span>
            
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extralight text-white mb-6 leading-[1.1] tracking-tight">
            The Art of <br className="hidden sm:block" />
        
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 ml-2 sm:ml-0">
              Cinema Discovery
    
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto px-4">
            Stop endlessly scrolling. Start watching. We hand-pick the absolute best films across every major platform so you don't have to.
          </p>
          
          {/* Collections Button */}
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

const FilmiwayHomepage = ({ huluCollections, thrillerCollections, hboCollections, peacockCollections, paramountCollections, top10EroticThrillers, trendingParentsGuides, top10TrendingMovies }) => {
  const thrillerRef = useRef(null);
  const huluRef = useRef(null);
  const hboRef = useRef(null);
  const paramountRef = useRef(null);
  const peacockRef = useRef(null);

  const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div>
      <Head>
        <title>Filmiway | Parents Guide & Film Recommendations</title>
       
        <meta name="description" content="Filmiway is a parents guide website with exact skip timestamps. We help families from all over the world by telling them exactly what is in a movie as it is, so they can expect what they are going to see." />
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

            <Top10Section 
              title="Top 10 Trending Movies" 
              description="The most searched and critically-acclaimed movies on Filmiway right now." 
              movies={top10TrendingMovies} 
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
            
            {/* ⚡ SEO QUICK LINKS FOR FAST INDEXING */}
            <QuickLinksSection 
              title="Trending Parents Guides" 
              movies={trendingParentsGuides} 
            />
          </div>
        </main>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-[#111] border-y border-white/5 mb-12 text-center">
          <h2 className="text-lg sm:text-xl font-medium text-white mb-2 tracking-tight">A Revolutionary New Feature is Cooking</h2>
          <p className="text-gray-400 text-sm font-light max-w-md mx-auto">Stay tuned for a groundbreaking new way to experience and discover cinema.</p>
        </div>

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

    const top10EroticThrillers = getTop10MoviesWithSlugs(EROTIC_THRILLER_DB, EROTIC_THRILLER_POSTERS);
    let top10TrendingMovies = getTop10MoviesWithSlugs(TRENDING_DB, TRENDING_POSTERS);
    
    // ⚡ CUSTOM HOMEPAGE ARRAY: High-traffic Parents Guides 
    const trendingParentsGuideIds = [1339713, 884, 218, 318846, 475557, 398818, 1791, 10867, 979, 11423];
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
        top10EroticThrillers,
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
        top10EroticThrillers: [],
        top10TrendingMovies: []
      },
    };
  }
}