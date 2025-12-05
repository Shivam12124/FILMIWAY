// pages/movies/interstellar-like/[id].js

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Zap, Film, ChevronLeft } from 'lucide-react';

// Components
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// Import interstellar-like movie data
import { INTERSTELLAR_LIKE_MOVIES } from '../../../utils/interstellarLikeMoviesData';

const COLORS = {
  accent: '#00D9FF', accentLight: '#4AEAFF', bgPrimary: '#0A0E1A', bgCard: 'rgba(15, 52, 96, 0.3)',
  textPrimary: '#FFFFFF', textSecondary: '#D1D5DB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(0, 217, 255, 0.2)', borderLight: 'rgba(107, 114, 128, 0.2)',
};

const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100vw;
      max-width: 100vw;
      gap: 10px;
      margin: 0;
      padding: 0 8px;
    }
    .mobile-hero-poster {
      width: 38vw;
      min-width: 106px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 3px 14px #0007;
      margin: 0;
      flex-shrink: 0;
    }
    .mobile-hero-poster img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      display: block;
    }
    .mobile-scifi-card {
      background: #0f1820;
      border-radius: 12px;
      box-shadow: 0 2px 12px #0006;
      margin: 0;
      flex: 1;
      border-left: 4px solid #00d9ff;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px 10px 10px 12px;
      min-height: 110px;
      position: relative;
    }
    .mobile-scifi-row {
      display: flex;
      align-items: flex-start;
      gap: 7px;
    }
    .mobile-scifi-icon {
      min-width: 24px;
      min-height: 24px;
      color: #00d9ff;
      margin-top: 2px;
    }
    .mobile-scifi-title {
      font-size: 15px;
      font-weight: bold;
      color: #00d9ff;
      margin-bottom: 1px;
      line-height: 1.12;
    }
    .mobile-scifi-desc {
      font-size: 12.3px;
      color: #ededed;
      line-height: 1.36;
      margin-top: 2px;
    }
  }
`;

const getTMDBImage = (path, size = 'w1280') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getSpaceInsight = (title) => {
  switch (title) {
    case '2001: A Space Odyssey': return "Stanley Kubrick's visionary masterpiece redefined cinematic storytelling with groundbreaking visuals and philosophical depth, exploring humanity's evolution and cosmic mysteries through an unprecedented blend of technical precision and metaphysical wonder.";
    case 'Arrival': return "Denis Villeneuve's emotionally profound linguistic puzzle masterfully weaves first contact with meditations on time, grief, and communication, delivering one of the most intelligent and moving science fiction narratives of the modern era.";
    case 'Contact': return "A cerebral exploration of humanity's first encounter with extraterrestrial intelligence, brilliantly balancing scientific rigor with deep questions about faith, meaning, and our place in the infinite cosmos.";
    case 'Solaris': return "Andrei Tarkovsky's haunting philosophical odyssey transforms space exploration into an introspective meditation on memory, love, and consciousness, creating one of cinema's most emotionally complex sci-fi experiences.";
    case 'First Man': return "An intimate, visceral portrait of Neil Armstrong's perilous journey to the Moon, stripping away mythology to reveal the raw human sacrifice, grief, and determination behind mankind's greatest achievement.";
    case 'The Martian': return "A triumphant celebration of human ingenuity and resilience, combining hard science with humor and heart as one man sciences his way to survival 140 million miles from home.";
    case 'Gravity': return "An unrelenting 90-minute survival thriller that hurls viewers into the terrifying void of space, delivering breathtaking visuals and primal tension as one astronaut fights for every breath.";
    case 'Sunshine': return "A stunning, underrated journey to reignite the dying Sun, blending hard sci-fi spectacle with psychological horror and existential dread as humanity's last hope confronts madness and cosmic terror.";
    case 'Moon': return "A masterclass in low-budget sci-fi storytelling, exploring isolation, identity, and corporate exploitation through Sam Rockwell's tour-de-force performance in this haunting lunar mystery.";
    case 'Ad Astra': return "A contemplative, visually stunning odyssey through the solar system that transforms a search for a missing father into a meditative exploration of solitude, legacy, and the human need for connection.";
    default: return 'An ambitious exploration of space, time, and the human condition that challenges our understanding of reality and pushes the boundaries of cinematic storytelling.';
  }
};

const OptimizedBanner = ({ movie, movieData, trailer, isMobile }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const timerRef = useRef(null);

  const bannerImage =
    movieData?.backdrop_path
      ? getTMDBImage(movieData.backdrop_path, 'w1280')
      : movieData?.backdrop || movie?.backdrop || getTMDBImage(movie?.backdrop_path, 'w1280');

  const posterImage =
    movieData?.poster_path
      ? getTMDBImage(movieData.poster_path, 'w500')
      : movieData?.poster || movie?.poster || getTMDBImage(movie?.poster_path, 'w500');

  const insight = getSpaceInsight(movie?.title);

  useEffect(() => {
    if (!isMobile && trailer && !showTrailer && !hasClosedTrailer) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setShowTrailer(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMobile, trailer, showTrailer, hasClosedTrailer]);

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    setHasClosedTrailer(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handlePlayClick = () => {
    setShowTrailer(true);
    setHasClosedTrailer(false);
  };

  return (
    <motion.div
      className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <style>{mobileHeroCSS}</style>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          {showTrailer && trailer ? (
            <motion.div
              key="trailer"
              className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <button
                onClick={handleCloseTrailer}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50"
                style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="image"
              className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-full">
                {bannerImage ? (
                  <Image
                    src={bannerImage}
                    alt={`${movie?.title} banner`}
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard }}>
                    <Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} />
                  </div>
                )}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${COLORS.bgPrimary}80 85%, ${COLORS.bgPrimary} 100%)`,
                  }}
                />
              </div>
              {trailer && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <motion.button
                    onClick={handlePlayClick}
                    className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300"
                    style={{
                      backgroundColor: `${COLORS.bgPrimary}BB`,
                      border: `2px solid ${COLORS.textPrimary}`,
                      color: COLORS.textPrimary,
                    }}
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: `${COLORS.accent}DD`,
                      borderColor: COLORS.accent,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                  </motion.button>
                </motion.div>
              )}
              {!isMobile && trailer && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                <motion.div
                  className="absolute top-6 sm:top-8 right-6 sm:right-8 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border z-30"
                  style={{
                    backgroundColor: `${COLORS.bgPrimary}CC`,
                    borderColor: `${COLORS.accent}66`,
                    color: COLORS.accent,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }}></div>
                    Trailer in {countdown}s
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isMobile ? (
        <div className="mobile-hero-row">
          <div className="mobile-hero-poster">
            {posterImage ? (
              <img src={posterImage} alt={`${movie?.title} poster`} />
            ) : (
              <div style={{ background: COLORS.bgCard, width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Film style={{ color: COLORS.textMuted }} />
              </div>
            )}
          </div>
          <div className="mobile-scifi-card">
            <div className="mobile-scifi-row">
              <Zap className="mobile-scifi-icon" />
              <div>
                <div className="mobile-scifi-title">Mind-Bending Index</div>
              </div>
            </div>
            <div className="mobile-scifi-desc">
              <strong>{movie?.mysteryComplexity || 90}</strong> - {insight}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
            <motion.div
              className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="relative" style={{ aspectRatio: '2/3' }}>
                {posterImage ? (
                  <Image
                    src={posterImage}
                    alt={`${movie?.title} poster`}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px"
                    quality={85}
                    className="object-cover rounded-lg sm:rounded-xl shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard, borderRadius: '12px' }}>
                    <Film style={{ color: COLORS.textMuted }} />
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="flex-1 w-full min-w-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <motion.div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(10, 25, 50, 0.5) 100%)`,
                  border: `1px solid ${COLORS.borderLight}`,
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.34)`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 sm:h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)`,
                  }}
                />
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <motion.div
                    className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`,
                      border: `1px solid ${COLORS.accent}40`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>
                      Why This Space Epic Matters
                    </h2>
                    <p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>
                      Mind-Bending Index: {movie?.mysteryComplexity || 90}/100
                    </p>
                  </div>
                </div>
                <div className="relative pl-4 sm:pl-6 border-l-2" style={{ borderColor: `${COLORS.accent}40` }}>
                  <motion.div
                    className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{ backgroundColor: COLORS.accent }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-normal break-words" style={{ color: COLORS.textSecondary, lineHeight: '1.8' }}>
                    {insight}
                  </p>
                </div>
                <motion.div
                  className="mt-4 sm:mt-6 h-0.5 sm:h-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${COLORS.accent}60, transparent)`, width: '40%' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const InterstellarBackButton = () => {
  const handleBackClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/collection/movies-like-interstellar';
    }
  };

  return (
    <motion.button
      onClick={handleBackClick}
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm"
      style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }}
      whileHover={{ scale: 1.02, x: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.borderAccent)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.borderLight)}
    >
      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} />
      <span className="font-medium" style={{ color: COLORS.accent }}>
        Back to Collection
      </span>
    </motion.button>
  );
};

const InterstellarLikeMoviePage = ({ movie }) => {
  const [scrollY, setScrollY] = useState(0);
  const [movieData, setMovieData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Failed to fetch movie data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieData();

    return () => window.removeEventListener('resize', checkMobile);
  }, [movie.tmdbId]);

  const mergedMovieData = {
    ...movieData,
    backdrop_path: movieData?.backdrop_path || movie?.backdrop_path,
    poster_path: movieData?.poster_path || movie?.poster_path,
    backdrop: movie?.backdrop || (movieData && movieData.backdrop_path ? undefined : undefined),
    poster: movie?.poster || (movieData && movieData.poster_path ? undefined : undefined),
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fromInterstellarCollection', 'true');
      sessionStorage.removeItem('fromDetectiveThrillerCollection');
      sessionStorage.removeItem('fromThrillerCollection');
      sessionStorage.removeItem('fromDramaCollection');
      sessionStorage.removeItem('fromSurvivalCollection');
      sessionStorage.removeItem('fromInceptionCollection');
      sessionStorage.removeItem('fromMementoCollection');
      sessionStorage.removeItem('fromShutterIslandCollection');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trailer = mergedMovieData?.videos?.results?.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div>
          <p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Loading...</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
      <Head>
        <title>{movie.title} ({movie.year}) - Movies Like Interstellar | Filmiway</title>
        <meta name="description" content={`${movie.title} (${movie.year}) - ${movie.synopsis?.substring(0, 150) || 'Epic space sci-fi film'}...`} />
        <link rel="canonical" href={`https://filmiway.com/movies/interstellar-like/${movie.imdbID}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={`https://filmiway.com/movies/interstellar-like/${movie.imdbID}`} />
        <meta property="og:type" content="video.movie" />
      </Head>

      <div className="absolute inset-0">
        <CinematicBackground />
      </div>
      <InterstellarBackButton />
      <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
        <OptimizedBanner movie={movie} movieData={mergedMovieData} trailer={trailer} isMobile={isMobile} />
        <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
          <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6">
            <MovieDetailsSection movie={{ ...movie, Title: movie.title }} fromInterstellarCollection={true} />
          </motion.div>
        </div>

        {/* ✅ FOOTER SECTION */}
        <motion.footer
          className="relative z-20 bg-gradient-to-t from-gray-900 to-black mt-16 pt-12 border-t border-gray-800/30 text-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm sm:text-base font-light tracking-wide mb-8 px-4">
            Curated cinema for discerning viewers — Expert analysis and community insights
          </p>

          <div className="flex justify-center items-center gap-8 sm:gap-12 mb-8">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
            <div className="text-cyan-400/60 text-xs tracking-[0.3em] uppercase font-medium">
              Filmiway · Movies Like Interstellar
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
          </div>

          {/* TMDB Attribution */}
          <motion.div
            className="mb-8 pt-6 border-t border-gray-900/50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-600 text-sm">Movie data and posters powered by</p>
              <a
                href="https://www.themoviedb.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="The Movie Database"
                  width={50}
                  height={20}
                  className="h-5 w-auto"
                  loading="lazy"
                />
                <span className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                  The Movie Database (TMDB)
                </span>
              </a>
            </div>
            <p className="text-gray-700 text-xs mt-2 text-center">
              This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
          </motion.div>

          <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm pb-8">
            <span>© 2025 Filmiway</span>
            <span>•</span>
            <span>All Rights Reserved</span>
            <span>•</span>
            <span>Where Every Film Finds Its Way</span>
          </div>
        </motion.footer>

      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = INTERSTELLAR_LIKE_MOVIES.map((movie) => ({
    params: { id: movie.imdbID },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = INTERSTELLAR_LIKE_MOVIES.find((m) => m.imdbID === params.id);
  if (!movie) return { notFound: true };
  return { props: { movie } };
}

export default InterstellarLikeMoviePage;
