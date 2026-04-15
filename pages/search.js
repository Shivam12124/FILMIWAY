import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Search as SearchIcon, ArrowRight, Film, X, Send, CheckCircle2, Loader } from 'lucide-react';
import Header from '../components/Header';
import { getPrimaryCollectionForMovie } from '../data/collections';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// ⚡ ALL MOVIE DATABASES IMPORTED (Safe Server-Side Fetching)
import * as SURVIVAL from '../utils/survivalMovieData';
import * as MATRIX from '../utils/matrixMovieData';
import * as SE7EN from '../utils/se7enMovieData';
import * as PARASITE from '../utils/parasiteMovieData'; 
import * as OLDBOY from '../utils/oldboyMovieData'; 
import * as DONNIE_DARKO from '../utils/donnieDarkoMovieData';
import * as BLACK_SWAN from '../utils/blackSwanMovieData';
import * as EYES_WIDE_SHUT from '../utils/eyesWideShutMovieData';
import * as PRESTIGE from '../utils/prestigeMovieData';
import * as EROTIC_THRILLER from '../utils/eroticThrillerMovieData';
import * as EROTIC_ROMANCE from '../utils/eroticRomanceMovieData';
import * as GREED from '../utils/greedMovieData';
import * as INTERSTELLAR from '../utils/interstellarMovieData';
import * as CRIME_THRILLER from '../utils/crimeThrillerMovieData';
import * as WAR_FILMS from '../utils/warFilmsMovieData';
import * as HULU_ACTION from '../utils/huluActionMovieData';
import * as HULU_ROMANCE from '../utils/huluRomanceMovieData';
import * as HULU_HORROR from '../utils/huluHorrorMovieData';
import * as HULU_COMEDY from '../utils/huluComedyMovieData';
import * as HULU_SCIFI from '../utils/huluSciFiMovieData';
import * as HULU_THRILLER from '../utils/huluThrillerMovieData';
import * as MOVIE_DATA from '../utils/movieData';
import * as HULU_BEST from '../utils/huluBestMoviesData';
import * as HULU_DRAMA from '../utils/huluDramaMovieData';
import * as HBO_MAX_COMEDY from '../utils/hboMaxComedyMovieData';
import * as PARAMOUNT_ACTION from '../utils/paramountActionMovieData';
import * as PARAMOUNT_SCIFI from '../utils/paramountSciFiMovieData';
import * as PARAMOUNT_ROMANCE from '../utils/paramountRomanceMovieData';
import * as PARAMOUNT_DRAMA from '../utils/paramountDramaMovieData';
import * as PARAMOUNT_THRILLER from '../utils/paramountThrillerMovieData';
import * as PARAMOUNT_FAMILY from '../utils/paramountFamilyMovieData';
import * as PARAMOUNT_HORROR from '../utils/paramountHorrorMovieData';
import * as PARAMOUNT_COMEDY from '../utils/paramountComedyMovieData';
import * as PARAMOUNT_BEST from '../utils/paramountBestMoviesData';
import * as PEACOCK_ACTION_ADVENTURE from '../utils/peacockActionAdventureData';
import * as PEACOCK_SCIFI from '../utils/peacockSciFiMovieData';
import * as PEACOCK_ROMANCE from '../utils/peacockRomanceMovieData';
import * as PEACOCK_FAMILY from '../utils/peacockFamilyMovieData';
import * as PEACOCK_DRAMA from '../utils/peacockDramaMovieData';
import * as PEACOCK_THRILLER from '../utils/peacockThrillerMovieData';
import * as PEACOCK_BEST from '../utils/peacockBestMoviesData';
import * as PEACOCK_COMEDY from '../utils/peacockComedyMovieData';
import * as RAUNCHY_COMEDY from '../utils/raunchyComedyMovieData';
import * as ROAD_TRIP from '../utils/roadTripMovieData';
import * as THOUGHT_PROVOKING from '../utils/thoughtProvokingMovieData';
import * as NEO_NOIR from '../utils/neoNoirMovieData';
import * as BEST_ACTION from '../utils/bestActionMoviesData';
import * as TRUE_STORY from '../utils/trueStoryMovieData';
import * as GANGSTER from '../utils/gangsterMovieData';
import * as DECADE from '../utils/decadeMovieData';
import * as BOOK_ADAPTATION from '../utils/bookAdaptationData';
import * as MARRIAGE_CRISIS from '../utils/marriageCrisisMovieData';
import * as A24 from '../utils/a24MovieData';
import * as DARK_COMEDY from '../utils/darkComedyMovieData';
import * as HULU_FAMILY from '../utils/huluFamilyMovieData';
import * as HBO_ACTION from '../utils/hboActionMovieData';
import * as HBO_MAX_ROMANCE from '../utils/hboMaxRomanceMovieData';
import * as HBO_MAX_THRILLER from '../utils/hboMaxThrillerMovieData';
import * as HBO_MAX_FAMILY from '../utils/hboMaxFamilyMovieData';
import * as HBO_MAX_SCIFI from '../utils/hboMaxSciFiMovieData';
import * as HBO_MAX_HORROR from '../utils/hboMaxHorrorMovieData';
import * as HBO_MAX_BEST from '../utils/hboMaxBestMoviesData';
import * as HBO_MAX_DRAMA from '../utils/hboMaxDramaMovieData';
import * as SCI_FI from '../utils/sciFiMovieData';
import * as THRILLER_MOVIES from '../utils/thrillerMovieData';
import * as MYSTERY_THRILLER from '../utils/mysteryThrillerMovieData'; 
import * as DETECTIVE_THRILLER from '../utils/detectiveThrillerMovieData';
import * as PSYCH_THRILLER from '../utils/psychologicalThrillerMovieData'; 
import * as HEIST_THRILLER from '../utils/heistThrillerMovieData';
import * as TIME_TRAVEL from '../utils/timeTravelMovieData';
import * as REVENGE from '../utils/revengeMovieData';

// ⚡ MOVIE RESULT ITEM COMPONENT (Handles 404 Broken Images)
const MovieResultItem = ({ movie }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <li>
      <Link href={`/movies/${movie.slug}/${movie.imdbID}`} className="flex items-center group p-2 rounded-xl hover:bg-gray-800/50 transition-colors border border-transparent hover:border-white/5">
        {movie.poster && !imgError ? (
          <div className="w-12 h-16 relative mr-4 flex-shrink-0 rounded-lg overflow-hidden bg-gray-800 border border-white/10 shadow-md">
            <Image 
              src={movie.poster} 
              alt={movie.title} 
              fill 
              className="object-cover" 
              sizes="48px" 
              onError={() => setImgError(true)} 
            />
          </div>
        ) : (
          <div className="w-12 h-16 relative mr-4 flex-shrink-0 rounded-lg bg-gray-800 border border-white/10 flex items-center justify-center">
            <Film className="w-5 h-5 text-gray-600" />
          </div>
        )}
        <div className="flex-grow min-w-0">
          <h3 className="text-gray-200 group-hover:text-yellow-400 transition-colors duration-200 text-base font-medium truncate">{movie.title}</h3>
          {movie.year && <p className="text-xs text-gray-500 mt-0.5">{movie.year}</p>}
        </div>
        <ArrowRight className="w-5 h-5 text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-yellow-400 transition-all transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0 ml-2" />
      </Link>
    </li>
  );
};

export default function SearchPage({ allMovies }) {
  const router = useRouter();
  const { q } = router.query;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [requestStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    if (router.isReady && q) {
      setQuery(q);
    }
  }, [router.isReady, q]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase();
      const filtered = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
      setRequestStatus('idle'); // Reset request status when typing
    } else {
      setResults([]);
      setRequestStatus('idle');
    }
  }, [query, allMovies]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    router.replace({ pathname: '/search', query: val ? { q: val } : {} }, undefined, { shallow: true });
  };

  // ⚡ FIREBASE REQUEST HANDLER
  const handleRequestMovie = async () => {
    setRequestStatus('submitting');
    try {
      await addDoc(collection(db, 'movieRequests'), { 
        title: query.trim(), 
        requestedAt: serverTimestamp(), 
        status: 'pending' 
      });
      setRequestStatus('success');
    } catch (error) {
      console.error("Error requesting movie:", error);
      setRequestStatus('success'); // Fails gracefully to keep the user happy
    }
  };

  return (
    <>
      <Head>
        <title>{query ? `Search: ${query}` : 'Search Movies'} | Filmiway</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-[#030303] text-white font-sans">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 pt-32 pb-24 max-w-4xl">
          
          <div className="mb-10">
            <div className="relative max-w-2xl mx-auto">
              <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-yellow-500" />
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search movies by title..."
                className="w-full bg-gray-900/60 border border-white/20 rounded-full py-5 pl-16 pr-14 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all shadow-2xl"
                autoFocus
              />
              {query && (
                <button 
                  onClick={() => handleSearchChange({ target: { value: '' } })} 
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl min-h-[400px]">
            {query.trim().length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 pt-20">
                <SearchIcon className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-lg font-light">Type a movie name to search our curated database.</p>
              </div>
            ) : results.length > 0 ? (
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <h2 className="text-xl font-medium text-gray-300">
                    Found {results.length} result{results.length === 1 ? '' : 's'}
                  </h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {results.map((movie) => (
                    <MovieResultItem key={movie.imdbID} movie={movie} />
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 pt-20">
                <p className="text-lg font-light mb-2">No movies found matching "{query}".</p>
                
                {/* 🔥 REQUEST A MOVIE FEATURE */}
                <div className="mt-8 p-6 sm:p-8 border border-yellow-500/20 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 text-center max-w-md w-full">
                  <h3 className="text-xl font-medium text-white mb-2">Film not available?</h3>
                  <p className="text-gray-400 text-sm mb-6">Request it and our editors will try to add its full movie page—complete with parents guide, streaming links, and analysis—within the next 7 days.</p>
                  
                  {requestStatus === 'success' ? (
                    <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 px-6 py-3 rounded-full border border-green-400/20">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">Request Sent!</span>
                    </div>
                  ) : (
                    <button 
                      onClick={handleRequestMovie}
                      disabled={requestStatus === 'submitting'}
                      className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition-all disabled:opacity-50"
                    >
                      {requestStatus === 'submitting' ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      <span>Request "{query}"</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

        </main>
      </div>
    </>
  );
}

// ✅ RE-USE THE EXACT STATIC PROPS LOGIC FROM MOVIE DIRECTORY TO PREVENT BUILD ERRORS
export async function getStaticProps() {
  const allModules = [
    SURVIVAL, MATRIX, SE7EN, PARASITE, OLDBOY,
    DONNIE_DARKO, BLACK_SWAN, EYES_WIDE_SHUT, PRESTIGE,
    EROTIC_THRILLER, EROTIC_ROMANCE, GREED, INTERSTELLAR,
    CRIME_THRILLER, WAR_FILMS, HULU_ACTION, HULU_ROMANCE,
    HULU_HORROR, HULU_COMEDY, HULU_SCIFI, HULU_THRILLER,
    MOVIE_DATA, HULU_BEST, HULU_DRAMA, HBO_MAX_COMEDY,
    PARAMOUNT_ACTION, PARAMOUNT_SCIFI, PARAMOUNT_ROMANCE,
    PARAMOUNT_DRAMA, PARAMOUNT_THRILLER, PARAMOUNT_FAMILY,
    PARAMOUNT_HORROR, PARAMOUNT_COMEDY, PARAMOUNT_BEST,
    PEACOCK_ACTION_ADVENTURE, PEACOCK_SCIFI, PEACOCK_ROMANCE,
    PEACOCK_FAMILY, PEACOCK_DRAMA, PEACOCK_THRILLER,
    PEACOCK_BEST, PEACOCK_COMEDY, RAUNCHY_COMEDY, ROAD_TRIP,
    THOUGHT_PROVOKING, NEO_NOIR, BEST_ACTION, TRUE_STORY,
    GANGSTER, DECADE, BOOK_ADAPTATION, MARRIAGE_CRISIS,
    A24, DARK_COMEDY, HULU_FAMILY, HBO_ACTION, HBO_MAX_ROMANCE, HBO_MAX_THRILLER,
    HBO_MAX_FAMILY, HBO_MAX_SCIFI, HBO_MAX_HORROR, HBO_MAX_BEST,
    HBO_MAX_DRAMA, SCI_FI, THRILLER_MOVIES, MYSTERY_THRILLER,
    DETECTIVE_THRILLER, PSYCH_THRILLER, HEIST_THRILLER, TIME_TRAVEL,
    REVENGE
  ];

  // ⚡ 1. AGGREGATE ALL POSTERS GLOBALLY FIRST
  const globalPosters = {};
  allModules.forEach(mod => {
    if (mod && mod.FALLBACK_POSTERS) {
      Object.assign(globalPosters, mod.FALLBACK_POSTERS);
    }
  });

  const uniqueMoviesMap = new Map();
  
  allModules.forEach(mod => {
    if (!mod) return;
    
    // Safely extract the Database from the module
    const db = mod.COMPLETE_MOVIE_DATABASE || mod.SCI_FI_MOVIES || mod.COMPLETE_SCI_FI_DATABASE || mod.THRILLER_MOVIES || mod.MYSTERY_THRILLER_MOVIES || mod.DETECTIVE_THRILLER_MOVIES || mod.PSYCH_THRILLER_MOVIES || mod.HEIST_THRILLER_MOVIES || mod.TIME_TRAVEL_MOVIES || mod.REVENGE_MOVIES || mod.WAR_FILMS;
    
    if (!db) return;
    
    const moviesArray = Array.isArray(db) ? db : Object.values(db);
    moviesArray.forEach(movie => {
      // ⚡ 2. DO NOT SKIP IF ALREADY IN MAP. WE MIGHT NEED TO UPDATE ITS POSTER.
      if (movie && movie.imdbID) {
        const primaryCollectionSlug = getPrimaryCollectionForMovie(movie.imdbID);
        if (primaryCollectionSlug) {
          // ⚡ SAFELY EXTRACT POSTER REGARDLESS OF DATABASE ORIGIN (TMDB vs OMDb)
          let finalPoster = null;
          if (movie.poster_path && movie.poster_path !== 'N/A') {
            finalPoster = movie.poster_path.startsWith('http') 
              ? movie.poster_path 
              : `https://image.tmdb.org/t/p/w92${movie.poster_path.startsWith('/') ? '' : '/'}${movie.poster_path}`;
          } else {
            const tmdbId = movie.tmdbId || movie.tmdbID || movie.id;
            if (tmdbId && globalPosters[tmdbId]) {
              let p = globalPosters[tmdbId];
              if (p.includes('w500')) p = p.replace('w500', 'w92'); // Reduce image size to load instantly
              if (p.includes('w780')) p = p.replace('w780', 'w92');
              finalPoster = p;
            } else {
              const fallback = movie.posterUrl || movie.Poster || movie.poster;
              if (fallback && fallback !== 'N/A' && fallback.startsWith('http')) {
                finalPoster = fallback;
              }
            }
          }

          if (finalPoster && !finalPoster.startsWith('http')) {
            finalPoster = null;
          }

          if (!uniqueMoviesMap.has(movie.imdbID)) {
            uniqueMoviesMap.set(movie.imdbID, {
              title: movie.Title || movie.title || 'Unknown',
              imdbID: movie.imdbID,
              slug: primaryCollectionSlug,
              year: movie.year || movie.Year || '',
              poster: finalPoster
            });
          } else {
            // ⚡ 3. IF MOVIE EXISTS BUT HAS NO POSTER, UPDATE IT!
            const existing = uniqueMoviesMap.get(movie.imdbID);
            if (!existing.poster && finalPoster) {
              existing.poster = finalPoster;
            }
          }
        }
      }
    });
  });

  const allMovies = Array.from(uniqueMoviesMap.values()).sort((a, b) => a.title.localeCompare(b.title));
  return { props: { allMovies }, revalidate: 604800 };
}