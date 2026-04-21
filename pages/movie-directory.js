import React, { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, FolderTree } from 'lucide-react';
import Header from '../components/Header';
import { COLLECTIONS, getPrimaryCollectionForMovie } from '../data/collections';

// ⚡ ALL MOVIE DATABASES IMPORTED
import { COMPLETE_MOVIE_DATABASE as SURVIVAL_DATABASE } from '../utils/survivalMovieData';
import { COMPLETE_MOVIE_DATABASE as MATRIX_DATABASE } from '../utils/matrixMovieData';
import { COMPLETE_MOVIE_DATABASE as SE7EN_DATABASE } from '../utils/se7enMovieData';
import { COMPLETE_MOVIE_DATABASE as PARASITE_DATABASE } from '../utils/parasiteMovieData'; 
import { COMPLETE_MOVIE_DATABASE as OLDBOY_DATABASE } from '../utils/oldboyMovieData'; 
import { COMPLETE_MOVIE_DATABASE as DONNIE_DARKO_DATABASE } from '../utils/donnieDarkoMovieData';
import { COMPLETE_MOVIE_DATABASE as FIGHT_CLUB_DATABASE } from '../utils/fightClubMovieData';
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
import { COMPLETE_MOVIE_DATABASE as DARK_COMEDY_DATABASE } from '../utils/darkComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as PTA_DATABASE } from '../utils/ptaMoviesData';
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

export default function MovieDirectory({ sortedMovies }) {
  // Group movies alphabetically (A, B, C... and # for numbers/symbols)
  const groupedMovies = useMemo(() => {
    if (!sortedMovies) return {};
    return sortedMovies.reduce((acc, movie) => {
      let firstChar = movie.title.charAt(0).toUpperCase();
      if (!/[A-Z]/.test(firstChar)) firstChar = '#'; // Group numbers/symbols into '#'
      if (!acc[firstChar]) acc[firstChar] = [];
      acc[firstChar].push(movie);
      return acc;
    }, {});
  }, [sortedMovies]);

  const alphabet = ['#', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

  return (
    <>
      <Head>
        <title>A-Z Movie Directory & Parents Guides | Filmiway</title>
        <meta name="description" content="Browse our complete A-Z directory of individual movies. Get precise Parents Guide timestamps and explicit scene data for every film." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://filmiway.com/movie-directory" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "A-Z Movie Directory & Parents Guides | Filmiway",
              "description": "Browse our complete A-Z directory of over 500 individual movies. Get precise Parents Guide timestamps and explicit scene data.",
              "url": "https://filmiway.com/movie-directory"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-[#030303] text-white font-sans">
        <Header />

        <main className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-3 py-1 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-6">
              <FolderTree className="w-4 h-4" />
              <span>Site Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight text-white mb-4">
              A-Z Movie <span className="font-normal text-yellow-400">Index</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-4">
              Explore our complete A-Z index of every movie featured on Filmiway. Select any film to view its detailed Parents Guide, exact timestamps for skipping awkward scenes, and expert cinematic analysis.
            </p>
            <p className="text-gray-500 text-base font-light leading-relaxed">
              With over 500+ curated titles, this directory serves as your ultimate family-safe streaming companion. Whether you are looking for psychological thrillers, award-winning dramas, or classic action films, our editors have manually verified the timestamps for every movie below so you can watch with confidence.
            </p>
          </div>

          {/* Clean, SEO-optimized text links for Googlebot to easily crawl */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-medium text-gray-200">All Movies Index ({sortedMovies?.length || 0} Films)</h2>
              </div>
            </div>
            
            {/* A-Z Jump Navigation */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-12">
              {alphabet.map(letter => {
                const hasMovies = groupedMovies[letter] && groupedMovies[letter].length > 0;
                return (
                  <a
                    key={letter}
                    href={hasMovies ? `#letter-${letter === '#' ? 'num' : letter}` : undefined}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                      hasMovies 
                        ? 'bg-gray-800 text-yellow-400 hover:bg-yellow-500 hover:text-black cursor-pointer shadow-lg hover:shadow-yellow-500/20' 
                        : 'bg-gray-900/40 text-gray-700 cursor-not-allowed'
                    }`}
                  >
                    {letter}
                  </a>
                );
              })}
            </div>

            {/* Categorized Movie Lists */}
            <nav aria-label="A to Z Movie Directory" className="space-y-12">
              {alphabet.map(letter => {
                const moviesInLetter = groupedMovies[letter];
                if (!moviesInLetter || moviesInLetter.length === 0) return null;

                return (
                  <div key={letter} id={`letter-${letter === '#' ? 'num' : letter}`} className="scroll-mt-32" style={{ contentVisibility: 'auto', containIntrinsicSize: '150px' }}>
                    <div className="flex items-baseline gap-3 mb-6 border-b border-white/5 pb-2">
                      <h3 className="text-3xl font-bold text-white">{letter}</h3>
                      <span className="text-gray-500 text-sm">{moviesInLetter.length} movies</span>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-1">
                      {moviesInLetter.map((movie) => (
                        <li key={movie.imdbID} className="flex items-start group">
                          <span className="text-yellow-500/30 mr-3 mt-1 text-xs font-mono group-hover:text-yellow-400 transition-colors duration-300">»</span>
                          <Link 
                            href={`/movies/${movie.slug}/${movie.imdbID}`}
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base leading-snug font-medium"
                            prefetch={false} // Prevents Next.js from pre-loading data for all linked pages immediately
                            title={`${movie.title} Parents Guide, Full Analysis, Timestamps, & Streaming Info`}
                          >
                            {movie.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </nav>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allDbs = [
    SURVIVAL_DATABASE, MATRIX_DATABASE, SE7EN_DATABASE, PARASITE_DATABASE, OLDBOY_DATABASE,
    DONNIE_DARKO_DATABASE, FIGHT_CLUB_DATABASE, BLACK_SWAN_DATABASE, EYES_WIDE_SHUT_DATABASE, PRESTIGE_DATABASE,
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
    A24_DATABASE, DARK_COMEDY_DATABASE, PTA_DATABASE, HULU_FAMILY_DATABASE, HBO_ACTION_DATABASE, HBO_MAX_ROMANCE_DATABASE, HBO_MAX_THRILLER_DATABASE,
    HBO_MAX_FAMILY_DATABASE, HBO_MAX_SCIFI_DATABASE, HBO_MAX_HORROR_DATABASE, HBO_MAX_BEST_DATABASE,
    HBO_MAX_DRAMA_DATABASE, SCI_FI_DATABASE, THRILLER_MOVIES, MYSTERY_THRILLER_MOVIES,
    DETECTIVE_THRILLER_MOVIES, PSYCH_THRILLER_MOVIES, HEIST_THRILLER_MOVIES, TIME_TRAVEL_MOVIES,
    REVENGE_MOVIES
  ];

  const uniqueMoviesMap = new Map();
  const validImdbIds = new Set();
  const seenTitles = new Set(); // 🔥 FIX: Track titles to prevent identical duplicates

  Object.values(COLLECTIONS).forEach(col => {
    if (col.movies && Array.isArray(col.movies)) {
      col.movies.forEach(id => validImdbIds.add(id));
    }
  });

  allDbs.forEach(db => {
    if (!db) return;
    const moviesArray = Array.isArray(db) ? db : Object.values(db);
    moviesArray.forEach(movie => {
      if (movie && movie.imdbID) {
        const rawId = movie.imdbID;
        const cleanId = rawId.toString().trim();
        const cleanTitle = (movie.Title || movie.title || 'Unknown').trim();
          // 🔥 STRIP PUNCTUATION + ADD YEAR: Safely catches Dash (-) vs En-dash (–)
          const titleKey = cleanTitle.toLowerCase().replace(/[^a-z0-9]/g, '') + (movie.year || movie.Year || '');

        if (validImdbIds.has(rawId) && !uniqueMoviesMap.has(cleanId) && !seenTitles.has(titleKey)) {
          const primaryCollectionSlug = getPrimaryCollectionForMovie(rawId);
          if (primaryCollectionSlug) {
            uniqueMoviesMap.set(cleanId, {
              title: cleanTitle,
              imdbID: cleanId,
              slug: primaryCollectionSlug
            });
            seenTitles.add(titleKey);
          }
        }
      }
    });
  });

  const sortedMovies = Array.from(uniqueMoviesMap.values()).sort((a, b) => a.title.localeCompare(b.title));
  return { props: { sortedMovies }, revalidate: 259200 };
}