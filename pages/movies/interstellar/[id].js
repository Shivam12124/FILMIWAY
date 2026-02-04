// pages/movies/interstellar/[id].js - FULL UPGRADE (SEO + HYDRATION + SCHEMA) ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Rocket, User, Twitter, Hash, Send, Sparkles } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ DATA IMPORTS
import { 
  COMPLETE_MOVIE_DATABASE, 
  COMPLETE_MOVIE_DATA 
} from '../../../utils/interstellarMovieData';

const COLORS = {
  accent: '#0891b2', accentLight: '#22d3ee', bgPrimary: '#000000', bgCard: 'rgba(11, 11, 11, 0.8)',
  textPrimary: '#FFFFFF', textSecondary: '#D1D5DB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(8, 145, 178, 0.2)', borderLight: 'rgba(107, 114, 128, 0.2)',
};

const MOVIE_YEARS = {
    '2001: A Space Odyssey': '1968', 'Arrival': '2016', 'Contact': '1997', 'Solaris': '1972',
    'First Man': '2018', 'The Martian': '2015', 'Gravity': '2013', 'Sunshine': '2007',
    'Moon': '2009', 'Ad Astra': '2019'
};

const MOVIE_DATA_BY_TITLE = {
    '2001: A Space Odyssey': { spaceComplexity: 98, spaceConnection: '2001: A Space Odyssey transcends cinema to become a meditation on human evolution and cosmic destiny.' },
    'Arrival': { spaceComplexity: 92, spaceConnection: 'Arrival treats first contact not as spectacle but as linguistic puzzle that reshapes our perception of time itself.' },
    'Contact': { spaceComplexity: 88, spaceConnection: 'Contact explores humanity\'s eternal question: are we alone? Carl Sagan\'s vision examines the boundaries between science and faith.' },
    'Solaris': { spaceComplexity: 94, spaceConnection: 'Solaris uses space exploration as a mirror to examine human consciousness, memory, and grief.' },
    'First Man': { spaceComplexity: 84, spaceConnection: 'First Man strips away heroic mythology to reveal the devastating personal cost behind humanity\'s greatest achievement.' },
    'The Martian': { spaceComplexity: 86, spaceConnection: 'The Martian celebrates human ingenuity and optimism in the face of impossible odds.' },
    'Gravity': { spaceComplexity: 90, spaceConnection: 'Gravity captures the terrifying beauty and primal danger of space like no film before.' },
    'Sunshine': { spaceComplexity: 87, spaceConnection: 'Sunshine explores humanity\'s relationship with cosmic forces beyond comprehension.' },
    'Moon': { spaceComplexity: 89, spaceConnection: 'Moon proves that profound sci-fi needs neither massive budgets nor spectacle.' },
    'Ad Astra': { spaceComplexity: 85, spaceConnection: 'Ad Astra uses interplanetary journey as framework for internal psychological exploration.' }
};

const getTMDBImage = (path, size = 'w1280') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getSpaceInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return data?.spaceConnection || 'A masterpiece showcasing extraordinary cinematic vision of the cosmos.';
};

// ✅ OPTIMIZED BANNER (Matches Reference)
const OptimizedBanner = ({ movie, movieData, trailer, isMobile, richData }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef(null);

  const backdropPath = richData?.backdrop_path || movieData?.backdrop_path || movie?.backdrop_path;
  const posterPath = richData?.poster_path || movieData?.poster_path || movie?.poster_path;
  
  const bannerImage = backdropPath ? getTMDBImage(backdropPath, 'w1280') : null;
  const posterImage = posterPath ? getTMDBImage(posterPath, 'w500') : null;

  const insight = getSpaceInsight(movie?.Title);
  const complexityIndex = MOVIE_DATA_BY_TITLE[movie?.Title]?.spaceComplexity || 88;

  useEffect(() => { setMounted(true); }, []);

  const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
    .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
    .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
    .mobile-space-card { background: linear-gradient(135deg, rgba(8, 145, 178, 0.15) 0%, rgba(15, 44, 51, 0.3) 100%); border-radius: 12px; flex: 1; border-left: 3px solid #0891b2; padding: 10px; min-height: 110px; display: flex; flex-direction: column; justify-content: flex-start; }
    .mobile-space-title { font-size: 14px; font-weight: bold; color: #22d3ee; line-height: 1.1; margin-bottom: 4px; }
    .mobile-space-desc { font-size: 12px; color: #ededed; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
  }`;

  useEffect(() => {
    if (mounted && !isMobile && trailer && !showTrailer && !hasClosedTrailer) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) { clearInterval(timerRef.current); setShowTrailer(true); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [mounted, isMobile, trailer, showTrailer, hasClosedTrailer]);

  const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };
  const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };

  if (!mounted) return <div className="h-[300px] w-full bg-black/50" />;

  return (
    <motion.div className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <style>{mobileHeroCSS}</style>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          {showTrailer && trailer ? (
            <motion.div key="trailer" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`} frameBorder="0" allowFullScreen />
              <button onClick={handleCloseTrailer} className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD` }}><X className="w-5 h-5" /></button>
            </motion.div>
          ) : (
            <motion.div key="image" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {bannerImage ? <Image src={bannerImage} alt={movie.Title} fill priority className="object-cover" /> : <div className="w-full h-full bg-gray-900" />}
              <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, ${COLORS.bgPrimary} 100%)` }} />
              {trailer && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.button onClick={handlePlayClick} className="p-4 rounded-full backdrop-blur-lg border-2 border-white" whileHover={{ scale: 1.1 }}><Play className="ml-1" /></motion.button>
                </div>
              )}
               {!isMobile && trailer && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                <motion.div className="absolute top-6 right-6 backdrop-blur-md rounded-full px-4 py-2 border z-30" style={{ backgroundColor: `${COLORS.bgPrimary}CC`, borderColor: `${COLORS.accent}66`, color: COLORS.accent }}>
                  <div className="flex items-center gap-2 text-sm font-medium"><div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }}></div>Trailer in {countdown}s</div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isMobile ? (
        <div className="mobile-hero-row">
          <div className="mobile-hero-poster">
            {posterImage && <Image src={posterImage} alt={movie.Title} width={320} height={480} />}
          </div>
          <div className="mobile-space-card">
            <div className="mobile-space-title">Cosmic Vision</div>
            <div className="mobile-space-desc">{insight}</div>
          </div>
        </div>
      ) : (
        <div className="relative px-8 py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
            <div className="flex gap-8 items-start">
               <div className="w-64 aspect-[2/3] relative flex-shrink-0">
                  {posterImage && <Image src={posterImage} alt={movie.Title} fill className="rounded-xl shadow-2xl" />}
               </div>
               <div className="flex-1">
                  <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(15, 15, 20, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}` }}>
                     <div className="flex items-center gap-3 mb-4">
                        <Rocket className="w-6 h-6" style={{ color: COLORS.accent }} />
                        <h2 className="text-2xl font-bold" style={{ color: COLORS.accent }}>Space Exploration Metrics</h2>
                     </div>
                     <p className="text-lg leading-relaxed text-gray-300">{insight}</p>
                     <p className="mt-4 text-cyan-400 text-sm font-mono">Complexity Score: {complexityIndex}/100</p>
                  </div>
               </div>
            </div>
        </div>
      )}
    </motion.div>
  );
};

const SmartBackButton = () => {
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/movies-like-interstellar'; };
    return (
        <motion.button onClick={handleBackClick} className="fixed z-50 flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-lg border border-gray-800 top-4 left-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <ChevronLeft className="w-5 h-5" style={{ color: COLORS.accent }} />
            <span className="font-medium" style={{ color: COLORS.accent }}>Back</span>
        </motion.button>
    );
};

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const InterstellarBreadcrumb = ({ movie }) => (
    <nav className="mb-8 px-6 pb-4 border-b border-gray-800/50">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/collection/movies-like-interstellar" className="hover:text-cyan-500">Interstellar</Link>
            <ChevronRight size={12} />
            <span style={{ color: COLORS.accent }}>{movie.Title}</span>
        </div>
    </nav>
);

// ✅ SCHEMA GENERATOR ADDED
const generateMovieSchema = (movie, movieData, currentMovieYear) => {
  const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
  
  const fullDescription = `
    ${data?.synopsis || movie.description || "A masterpiece of space cinema."}
    Ranking: #${movie.rank || 'N/A'} in Best Interstellar Movies.
  `.replace(/\s+/g, ' ').trim();

  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
    "description": fullDescription, 
    "datePublished": currentMovieYear,
    "image": movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : undefined,
    "director": { "@type": "Person", "name": data?.director || "Unknown" },
    "review": {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Filmiway" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": data?.rating || 8.0, "bestRating": "10", "worstRating": "1"
      }
    },
    "genre": ["Sci-Fi", "Drama", "Space"],
    "url": `https://filmiway.com/movies/interstellar/${movie.imdbID}`,
    "author": { "@type": "Organization", "name": "Filmiway", "url": "https://filmiway.com" }
  };

  return { movieSchema };
};

const InterstellarMoviePage = ({ movie, tmdbData: movieData }) => {
    const richData = COMPLETE_MOVIE_DATA[movie?.tmdbId] || {}; 
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
       const checkMobile = () => setIsMobile(window.innerWidth < 768);
       checkMobile();
       window.addEventListener('resize', checkMobile);
       return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const trailer = movieData?.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');

    // ✅ SEO FIX: Clean strings for hydration safety
    const cleanSEOTitle = `${movie.Title} (${currentMovieYear}) - Space Analysis | Filmiway`;
    const cleanSEODesc = `${movie.Title} (${currentMovieYear}) - Detailed analysis and streaming info for this space exploration masterpiece.`;

    const { movieSchema } = generateMovieSchema(movie, movieData, currentMovieYear);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                {/* ✅ HYDRATION FIX */}
                <title>{cleanSEOTitle}</title>
                <meta name="description" content={cleanSEODesc} />
                <link rel="canonical" href={`https://filmiway.com/movies/interstellar/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <meta property="og:title" content={cleanSEOTitle} />
                <meta property="og:description" content={cleanSEODesc} />
                <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
                <meta name="twitter:title" content={cleanSEOTitle} />
                <meta name="twitter:description" content={cleanSEODesc} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            
            <div className="relative z-10 pt-16">
                {/* ✅ SEO FIX: HIDDEN H1 */}
                <h1 className="sr-only">{cleanSEOTitle}</h1>

                <InterstellarBreadcrumb movie={movie} />
                <div className="container mx-auto max-w-7xl pb-16">
                    <OptimizedBanner movie={movie} movieData={movieData} richData={richData} trailer={trailer} isMobile={isMobile} />
                    <div className="px-6 space-y-12">
                        <MovieDetailsSection movie={movie} fromInterstellarCollection={true} />
                        <InternalCollectionsSection currentSlug="movies-like-interstellar" />
                        <TMDBAttribution />
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = COMPLETE_MOVIE_DATABASE.map(movie => ({ params: { id: movie.imdbID } }));
    return { paths, fallback: false };
}

// ✅ SERVER SIDE FETCHING ADDED
export async function getStaticProps({ params }) {
    try {
        const movie = COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id);
        if (!movie) return { notFound: true };

        const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`);
        const tmdbData = tmdbResponse.ok ? await tmdbResponse.json() : null;

        return { props: { movie, tmdbData } };
    } catch (error) {
        return { props: { movie: COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id), tmdbData: null } };
    }
}

export default InterstellarMoviePage;