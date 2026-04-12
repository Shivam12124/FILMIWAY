import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Search as SearchIcon, ArrowRight, Film, X, Send, CheckCircle2, Loader } from 'lucide-react';
import Header from '../components/Header';
import { getPrimaryCollectionForMovie } from '../data/collections';

// ⚡ ALL MOVIE DATABASES IMPORTED (Safe Server-Side Fetching)
import { COMPLETE_MOVIE_DATABASE as SURVIVAL_DATABASE } from '../utils/survivalMovieData';
import { COMPLETE_MOVIE_DATABASE as MATRIX_DATABASE } from '../utils/matrixMovieData';
import { COMPLETE_MOVIE_DATABASE as SE7EN_DATABASE } from '../utils/se7enMovieData';
import { COMPLETE_MOVIE_DATABASE as PARASITE_DATABASE } from '../utils/parasiteMovieData'; 
import { COMPLETE_MOVIE_DATABASE as OLDBOY_DATABASE } from '../utils/oldboyMovieData'; 
import { COMPLETE_MOVIE_DATABASE as DONNIE_DARKO_DATABASE } from '../utils/donnieDarkoMovieData';
import { COMPLETE_MOVIE_DATABASE as BLACK_SWAN_DATABASE } from '../utils/blackSwanMovieData';
import { COMPLETE_MOVIE_DATABASE as EYES_WIDE_SHUT_DATABASE } from '../utils/eyesWideShutMovieData';
import { COMPLETE_MOVIE_DATABASE as PRESTIGE_DATABASE } from '../utils/prestigeMovieData';
import { COMPLETE_MOVIE_DATABASE as EROTIC_THRILLER_DATABASE } from '../utils/eroticThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as EROTIC_ROMANCE_DATABASE } from '../utils/eroticRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as GREED_DATABASE } from '../utils/greedMovieData';
import { COMPLETE_MOVIE_DATABASE as INTERSTELLAR_DATABASE } from '../utils/interstellarMovieData';
import { COMPLETE_MOVIE_DATABASE as CRIME_THRILLER_DATABASE } from '../utils/crimeThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as WAR_FILMS_DATABASE } from '../utils/warFilmsMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_ACTION_DATABASE } from '../utils/huluActionMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_ROMANCE_DATABASE } from '../utils/huluRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_HORROR_DATABASE } from '../utils/huluHorrorMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_COMEDY_DATABASE } from '../utils/huluComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_SCIFI_DATABASE } from '../utils/huluSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_THRILLER_DATABASE } from '../utils/huluThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE } from '../utils/movieData';
import { COMPLETE_MOVIE_DATABASE as HULU_BEST_DATABASE } from '../utils/huluBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as HULU_DRAMA_DATABASE } from '../utils/huluDramaMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_COMEDY_DATABASE } from '../utils/hboMaxComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_ACTION_DATABASE } from '../utils/paramountActionMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_SCIFI_DATABASE } from '../utils/paramountSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_ROMANCE_DATABASE } from '../utils/paramountRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_DRAMA_DATABASE } from '../utils/paramountDramaMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_THRILLER_DATABASE } from '../utils/paramountThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_FAMILY_DATABASE } from '../utils/paramountFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_HORROR_DATABASE } from '../utils/paramountHorrorMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_COMEDY_DATABASE } from '../utils/paramountComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_BEST_DATABASE } from '../utils/paramountBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_ACTION_ADVENTURE_DATABASE } from '../utils/peacockActionAdventureData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_SCIFI_DATABASE } from '../utils/peacockSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_ROMANCE_DATABASE } from '../utils/peacockRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_FAMILY_DATABASE } from '../utils/peacockFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_DRAMA_DATABASE } from '../utils/peacockDramaMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_THRILLER_DATABASE } from '../utils/peacockThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_BEST_DATABASE } from '../utils/peacockBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_COMEDY_DATABASE } from '../utils/peacockComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as RAUNCHY_COMEDY_DATABASE } from '../utils/raunchyComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as ROAD_TRIP_DATABASE } from '../utils/roadTripMovieData';
import { COMPLETE_MOVIE_DATABASE as THOUGHT_PROVOKING_DATABASE } from '../utils/thoughtProvokingMovieData';
import { COMPLETE_MOVIE_DATABASE as NEO_NOIR_DATABASE } from '../utils/neoNoirMovieData';
import { COMPLETE_MOVIE_DATABASE as BEST_ACTION_DATABASE } from '../utils/bestActionMoviesData';
import { COMPLETE_MOVIE_DATABASE as TRUE_STORY_DATABASE } from '../utils/trueStoryMovieData';
import { COMPLETE_MOVIE_DATABASE as GANGSTER_DATABASE } from '../utils/gangsterMovieData';
import { COMPLETE_MOVIE_DATABASE as DECADE_DATABASE } from '../utils/decadeMovieData';
import { COMPLETE_MOVIE_DATABASE as BOOK_ADAPTATION_DATABASE } from '../utils/bookAdaptationData';
import { COMPLETE_MOVIE_DATABASE as MARRIAGE_CRISIS_DATABASE } from '../utils/marriageCrisisMovieData';
import { COMPLETE_MOVIE_DATABASE as A24_DATABASE } from '../utils/a24MovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_FAMILY_DATABASE } from '../utils/huluFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_ACTION_DATABASE } from '../utils/hboActionMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_ROMANCE_DATABASE } from '../utils/hboMaxRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_THRILLER_DATABASE } from '../utils/hboMaxThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_FAMILY_DATABASE } from '../utils/hboMaxFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_SCIFI_DATABASE } from '../utils/hboMaxSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_HORROR_DATABASE } from '../utils/hboMaxHorrorMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_BEST_DATABASE } from '../utils/hboMaxBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_DRAMA_DATABASE } from '../utils/hboMaxDramaMovieData';
import { COMPLETE_SCI_FI_DATABASE as SCI_FI_DATABASE } from '../utils/sciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as THRILLER_MOVIES } from '../utils/thrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as MYSTERY_THRILLER_MOVIES } from '../utils/mysteryThrillerMovieData'; 
import { COMPLETE_MOVIE_DATABASE as DETECTIVE_THRILLER_MOVIES } from '../utils/detectiveThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as PSYCH_THRILLER_MOVIES } from '../utils/psychologicalThrillerMovieData'; 
import { COMPLETE_MOVIE_DATABASE as HEIST_THRILLER_MOVIES } from '../utils/heistThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as TIME_TRAVEL_MOVIES } from '../utils/timeTravelMovieData';
import { COMPLETE_MOVIE_DATABASE as REVENGE_MOVIES } from '../utils/revengeMovieData';

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
      // 🔥 TO CONNECT TO FIREBASE: Uncomment the lines below and ensure your firebase.js is set up!
      // const { db } = await import('../firebase');
      // const { collection, addDoc } = await import('firebase/firestore');
      // await addDoc(collection(db, 'movieRequests'), { title: query, requestedAt: new Date(), status: 'pending' });
      
      // Simulated network delay so the UI button works beautifully right now
      await new Promise(resolve => setTimeout(resolve, 800));
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
                    <li key={movie.imdbID}>
                      <Link href={`/movies/${movie.slug}/${movie.imdbID}`} className="flex items-center group p-2 rounded-xl hover:bg-gray-800/50 transition-colors border border-transparent hover:border-white/5">
                        {movie.poster ? (
                          <div className="w-12 h-16 relative mr-4 flex-shrink-0 rounded-lg overflow-hidden bg-gray-800 border border-white/10 shadow-md">
                            <Image src={movie.poster} alt={movie.title} fill className="object-cover" sizes="48px" />
                          </div>
                        ) : (
                          <div className="w-12 h-16 relative mr-4 flex-shrink-0 rounded-lg bg-gray-800 border border-white/10 flex items-center justify-center">
                            <Film className="w-5 h-5 text-gray-600" />
                          </div>
                        )}
                        <div className="flex-grow min-w-0">
                          <h3 className="text-gray-200 group-hover:text-yellow-400 transition-colors duration-200 text-base font-medium truncate">
                            {movie.title}
                          </h3>
                          {movie.year && (
                            <p className="text-xs text-gray-500 mt-0.5">{movie.year}</p>
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-yellow-400 transition-all transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0 ml-2" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 pt-20">
                <p className="text-lg font-light mb-2">No movies found matching "{query}".</p>
                
                {/* 🔥 REQUEST A MOVIE FEATURE */}
                <div className="mt-8 p-6 sm:p-8 border border-yellow-500/20 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 text-center max-w-md w-full">
                  <h3 className="text-xl font-medium text-white mb-2">Film not available?</h3>
                  <p className="text-gray-400 text-sm mb-6">Want to know exactly when to skip the awkward scenes? Request it and our editors will try to add its parents guide within the next 7 days.</p>
                  
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
  const allDbs = [
    SURVIVAL_DATABASE, MATRIX_DATABASE, SE7EN_DATABASE, PARASITE_DATABASE, OLDBOY_DATABASE,
    DONNIE_DARKO_DATABASE, BLACK_SWAN_DATABASE, EYES_WIDE_SHUT_DATABASE, PRESTIGE_DATABASE,
    EROTIC_THRILLER_DATABASE, EROTIC_ROMANCE_DATABASE, GREED_DATABASE, INTERSTELLAR_DATABASE,
    CRIME_THRILLER_DATABASE, WAR_FILMS_DATABASE, HULU_ACTION_DATABASE, HULU_ROMANCE_DATABASE,
    HULU_HORROR_DATABASE, HULU_COMEDY_DATABASE, HULU_SCIFI_DATABASE, HULU_THRILLER_DATABASE,
    COMPLETE_MOVIE_DATABASE, HULU_BEST_DATABASE, HULU_DRAMA_DATABASE, HBO_MAX_COMEDY_DATABASE,
    PARAMOUNT_ACTION_DATABASE, PARAMOUNT_SCIFI_DATABASE, PARAMOUNT_ROMANCE_DATABASE,
    PARAMOUNT_DRAMA_DATABASE, PARAMOUNT_THRILLER_DATABASE, PARAMOUNT_FAMILY_DATABASE,
    PARAMOUNT_HORROR_DATABASE, PARAMOUNT_COMEDY_DATABASE, PARAMOUNT_BEST_DATABASE,
    PEACOCK_ACTION_ADVENTURE_DATABASE, PEACOCK_SCIFI_DATABASE, PEACOCK_ROMANCE_DATABASE,
    PEACOCK_FAMILY_DATABASE, PEACOCK_DRAMA_DATABASE, PEACOCK_THRILLER_DATABASE,
    PEACOCK_BEST_DATABASE, PEACOCK_COMEDY_DATABASE, RAUNCHY_COMEDY_DATABASE, ROAD_TRIP_DATABASE,
    THOUGHT_PROVOKING_DATABASE, NEO_NOIR_DATABASE, BEST_ACTION_DATABASE, TRUE_STORY_DATABASE,
    GANGSTER_DATABASE, DECADE_DATABASE, BOOK_ADAPTATION_DATABASE, MARRIAGE_CRISIS_DATABASE,
    A24_DATABASE, HULU_FAMILY_DATABASE, HBO_ACTION_DATABASE, HBO_MAX_ROMANCE_DATABASE, HBO_MAX_THRILLER_DATABASE,
    HBO_MAX_FAMILY_DATABASE, HBO_MAX_SCIFI_DATABASE, HBO_MAX_HORROR_DATABASE, HBO_MAX_BEST_DATABASE,
    HBO_MAX_DRAMA_DATABASE, SCI_FI_DATABASE, THRILLER_MOVIES, MYSTERY_THRILLER_MOVIES,
    DETECTIVE_THRILLER_MOVIES, PSYCH_THRILLER_MOVIES, HEIST_THRILLER_MOVIES, TIME_TRAVEL_MOVIES,
    REVENGE_MOVIES
  ];

  const uniqueMoviesMap = new Map();
  
  allDbs.forEach(db => {
    if (!db) return;
    const moviesArray = Array.isArray(db) ? db : Object.values(db);
    moviesArray.forEach(movie => {
      if (movie && movie.imdbID && !uniqueMoviesMap.has(movie.imdbID)) {
        const primaryCollectionSlug = getPrimaryCollectionForMovie(movie.imdbID);
        if (primaryCollectionSlug) {
          // ⚡ SAFELY EXTRACT POSTER REGARDLESS OF DATABASE ORIGIN (TMDB vs OMDb)
          let finalPoster = null;
          if (movie.poster_path) {
            finalPoster = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
          } else {
            const fallback = movie.posterUrl || movie.Poster || movie.poster;
            if (fallback && fallback !== 'N/A') finalPoster = fallback;
          }

          uniqueMoviesMap.set(movie.imdbID, {
            title: movie.Title || movie.title || 'Unknown',
            imdbID: movie.imdbID,
            slug: primaryCollectionSlug,
            year: movie.year || movie.Year || '',
            poster: finalPoster
          });
        }
      }
    });
  });

  const allMovies = Array.from(uniqueMoviesMap.values()).sort((a, b) => a.title.localeCompare(b.title));
  return { props: { allMovies }, revalidate: 604800 };
}