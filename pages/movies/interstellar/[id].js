// pages/movies/interstellar/[id].js - SURVIVAL-STYLE BANNER + HYDRATION FIX ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Award, Rocket, User, Twitter, Hash, Send } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';

import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from '../../../utils/interstellarMovieData';

const COLORS = {
  accent: '#0891b2', accentLight: '#22d3ee', bgPrimary: '#0B0B0C', bgCard: 'rgba(55, 65, 81, 0.3)',
  textPrimary: '#FFFFFF', textSecondary: '#D1D5DB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(8, 145, 178, 0.2)', borderLight: 'rgba(107, 114, 128, 0.2)',
};

const MOVIE_YEARS = {
    '2001: A Space Odyssey': '1968', 'Arrival': '2016', 'Contact': '1997', 'Solaris': '1972',
    'First Man': '2018', 'The Martian': '2015', 'Gravity': '2013', 'Sunshine': '2007',
    'Moon': '2009', 'Ad Astra': '2019'
};

const MOVIE_DATA_BY_TITLE = {
    '2001: A Space Odyssey': { imdbRating: 8.3, genre: 'Philosophical Sci-Fi', director: 'Stanley Kubrick', spaceComplexity: 98, spaceConnection: '2001: A Space Odyssey transcends cinema to become a meditation on human evolution and cosmic destiny.' },
    'Arrival': { imdbRating: 7.9, genre: 'Cerebral Sci-Fi', director: 'Denis Villeneuve', spaceComplexity: 92, spaceConnection: 'Arrival treats first contact not as spectacle but as linguistic puzzle that reshapes our perception of time itself.' },
    'Contact': { imdbRating: 7.5, genre: 'Hard Sci-Fi', director: 'Robert Zemeckis', spaceComplexity: 88, spaceConnection: 'Contact explores humanity\'s eternal question: are we alone? Carl Sagan\'s vision examines the boundaries between science and faith.' },
    'Solaris': { imdbRating: 8.0, genre: 'Psychological Sci-Fi', director: 'Andrei Tarkovsky', spaceComplexity: 94, spaceConnection: 'Solaris uses space exploration as a mirror to examine human consciousness, memory, and grief.' },
    'First Man': { imdbRating: 7.3, genre: 'Biographical Drama', director: 'Damien Chazelle', spaceComplexity: 84, spaceConnection: 'First Man strips away heroic mythology to reveal the devastating personal cost behind humanity\'s greatest achievement.' },
    'The Martian': { imdbRating: 8.0, genre: 'Survival Sci-Fi', director: 'Ridley Scott', spaceComplexity: 86, spaceConnection: 'The Martian celebrates human ingenuity and optimism in the face of impossible odds.' },
    'Gravity': { imdbRating: 7.7, genre: 'Space Thriller', director: 'Alfonso Cuarón', spaceComplexity: 90, spaceConnection: 'Gravity captures the terrifying beauty and primal danger of space like no film before.' },
    'Sunshine': { imdbRating: 7.2, genre: 'Space Horror', director: 'Danny Boyle', spaceComplexity: 87, spaceConnection: 'Sunshine explores humanity\'s relationship with cosmic forces beyond comprehension.' },
    'Moon': { imdbRating: 7.8, genre: 'Indie Sci-Fi', director: 'Duncan Jones', spaceComplexity: 89, spaceConnection: 'Moon proves that profound sci-fi needs neither massive budgets nor spectacle.' },
    'Ad Astra': { imdbRating: 6.5, genre: 'Contemplative Sci-Fi', director: 'James Gray', spaceComplexity: 85, spaceConnection: 'Ad Astra uses interplanetary journey as framework for internal psychological exploration.' }
};

const SPACE_TAGS = {
    '2001: A Space Odyssey': { tags: ['Evolution', 'AI', 'Philosophical'], symbol: '🌌', color: '#000000' },
    'Arrival': { tags: ['Language', 'Time', 'First Contact'], symbol: '👽', color: '#2c5f6f' },
    'Contact': { tags: ['SETI', 'Faith', 'Science'], symbol: '📡', color: '#1a4d66' },
    'Solaris': { tags: ['Memory', 'Consciousness', 'Psychological'], symbol: '🌊', color: '#4a4a4a' },
    'First Man': { tags: ['Apollo', 'Biography', 'Sacrifice'], symbol: '🌕', color: '#1c1c1c' },
    'The Martian': { tags: ['Mars', 'Survival', 'Science'], symbol: '🔴', color: '#c54c24' },
    'Gravity': { tags: ['Orbital', 'Disaster', 'Rebirth'], symbol: '🛰️', color: '#0a0a0a' },
    'Sunshine': { tags: ['Sun', 'Sacrifice', 'Madness'], symbol: '☀️', color: '#ff8800' },
    'Moon': { tags: ['Isolation', 'Clone', 'Mystery'], symbol: '🌙', color: '#3d3d3d' },
    'Ad Astra': { tags: ['Neptune', 'Father-Son', 'Introspective'], symbol: '🪐', color: '#1a1a2e' }
};

const OptimizedBanner = ({ movie, movieData, trailer, isMobile }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const timerRef = useRef(null);

    const bannerImage = movieData?.backdrop_path 
        ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`
        : (movieData?.poster_path ? `https://image.tmdb.org/t/p/w780${movieData.poster_path}` : '');
    
    const posterImage = movieData?.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
        : '';

    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const spaceConnection = correctData?.spaceConnection || `${movie.Title} showcases extraordinary cinematic vision of the cosmos.`;
    const spaceComplexity = correctData?.spaceComplexity || 88;

    useEffect(() => {
        if (!isMobile && trailer && !showTrailer && !hasClosedTrailer) {
            timerRef.current = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) { clearInterval(timerRef.current); setShowTrailer(true); return 0; }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [isMobile, trailer, showTrailer, hasClosedTrailer]);

    const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };
    const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };

    return (
        <div className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl">
          <style jsx>{`
            @media (max-width: 767px) {
                .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100%; gap: 8px; padding: 16px 8px 12px 8px; }
                .mobile-hero-poster { width: 35vw; min-width: 100px; aspect-ratio: 2/3; border-radius: 12px; overflow: hidden; flex-shrink: 0; }
                .mobile-space-card { background: linear-gradient(135deg, rgba(8, 145, 178, 0.15) 0%, rgba(15, 44, 51, 0.3) 100%); border-radius: 12px; flex: 1; border-left: 3px solid #0891b2; padding: 10px; min-height: 110px; }
                .mobile-space-title { font-size: 14px; font-weight: bold; color: #22d3ee; line-height: 1.1; }
                .mobile-space-desc { font-size: 12px; color: #ededed; line-height: 1.4; margin-top: 4px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
            }
          `}</style>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
            <AnimatePresence mode="wait">
              {showTrailer && trailer ? (
                <motion.div key="trailer" className="absolute inset-0 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`} frameBorder="0" allowFullScreen />
                  <button onClick={handleCloseTrailer} className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD` }}><X className="w-5 h-5" /></button>
                </motion.div>
              ) : (
                <motion.div key="image" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {bannerImage && <Image src={bannerImage} alt={movie.Title} fill priority className="object-cover" />}
                  <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, ${COLORS.bgPrimary} 100%)` }} />
                  {trailer && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <button onClick={handlePlayClick} className="p-4 rounded-full backdrop-blur-lg border-2 border-white"><Play className="ml-1" /></button>
                    </div>
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
                <div className="mobile-space-desc">{spaceConnection}</div>
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
                    <p className="text-lg leading-relaxed text-gray-300">{spaceConnection}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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

const InterstellarMoviePage = ({ movie }) => {
    const [movieData, setMovieData] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`);
                const data = await response.json();
                setMovieData(data);
            } catch (error) { console.error(error); }
            finally { setIsLoading(false); }
        };
        fetchMovieData();
        return () => window.removeEventListener('resize', checkMobile);
    }, [movie.tmdbId]);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const trailer = movieData?.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');

    // ✅ SEO FIX: Construct clean strings FIRST
    const cleanSEOTitle = `${movie.Title} (${currentMovieYear}) - Sci-Fi Analysis & Timestamps | Filmiway`;
    const cleanSEODesc = `${movie.Title} (${currentMovieYear}) - A mind-bending space exploration film. Detailed analysis, ratings & where to stream.`;

    if (isLoading) return <div className="min-h-screen bg-black flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                {/* ✅ HYDRATION BUG RESOLVED */}
                <title>{cleanSEOTitle}</title>
                <meta name="description" content={cleanSEODesc} />
                <link rel="canonical" href={`https://filmiway.com/movies/interstellar/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                
                {/* Social Tags */}
                <meta property="og:title" content={cleanSEOTitle} />
                <meta property="og:description" content={cleanSEODesc} />
                <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
                <meta name="twitter:title" content={cleanSEOTitle} />
                <meta name="twitter:description" content={cleanSEODesc} />
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            
            <div className="relative z-10 pt-16">
                {/* ✅ SEO FIX: HIDDEN H1 ADDED */}
                <h1 className="sr-only">{cleanSEOTitle}</h1>

                <InterstellarBreadcrumb movie={movie} />
                <div className="container mx-auto max-w-7xl pb-16">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
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

export async function getStaticProps({ params }) {
    const movie = COMPLETE_MOVIE_DATABASE.find(m => m.imdbID === params.id);
    if (!movie) return { notFound: true };
    return { props: { movie } };
}

export default InterstellarMoviePage;