// pages/movies/black-swan/[id].js - MOBILE-OPTIMIZED VERSION ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Award, Film, User, Twitter, Hash, Send, Theater } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';

import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from '../../../utils/blackSwanMovieData';

const COLORS = {
  accent: '#EAB308',
  accentLight: '#FDE047',
  bgPrimary: '#050509',
  bgCard: 'rgba(15, 23, 42, 0.6)',
  textPrimary: '#FFFFFF',
  textSecondary: '#E5E7EB',
  textMuted: '#9CA3AF',
  textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.25)',
  borderLight: 'rgba(55, 65, 81, 0.5)',
};

const MOVIE_YEARS = {
  'Perfect Blue': '1997',
  'Whiplash': '2014',
  'Suspiria': '2018',
  'The Red Shoes': '1948',
  'The Wrestler': '2008',
  'Mulholland Drive': '2001',
  'The Piano Teacher': '2001',
  'Birdman': '2014',
  'Requiem for a Dream': '2000',
  'Nightcrawler': '2014',
};

const MOVIE_DATA_BY_TITLE = {
  'Perfect Blue': {
    imdbRating: 8.0,
    genre: 'Psychological Thriller',
    director: 'Satoshi Kon',
    connection:
      'Perfect Blue is the purest Black Swan companion: both dive into identity fracture, performance pressure, and the horror of not knowing where the role ends and the self begins.',
  },
  'Whiplash': {
    imdbRating: 8.5,
    genre: 'Music Obsession Drama',
    director: 'Damien Chazelle',
    connection:
      'Whiplash swaps ballet for jazz drumming but keeps the same core obsession: how far can a mentor push a student before greatness becomes self-destruction.',
  },
  'Suspiria': {
    imdbRating: 6.7,
    genre: 'Art-House Horror',
    director: 'Luca Guadagnino',
    connection:
      'Suspiria takes the dance academy setting of Black Swan and drenches it in occult horror, turning artistic transformation into literal body-breaking witchcraft.',
  },
  'The Red Shoes': {
    imdbRating: 8.1,
    genre: 'Classic Ballet Drama',
    director: 'Michael Powell & Emeric Pressburger',
    connection:
      'The Red Shoes is the original “art vs life” ballet tragedy; Black Swan updates its central question: if art demands everything, what is left of the artist.',
  },
  'The Wrestler': {
    imdbRating: 7.9,
    genre: 'Aging Performer Drama',
    director: 'Darren Aronofsky',
    connection:
      'Directed by the same filmmaker, The Wrestler is Black Swan’s bruised, masculine twin: a body pushed beyond its limits to keep performing for an unforgiving audience.',
  },
  'Mulholland Drive': {
    imdbRating: 7.9,
    genre: 'Surreal Mystery',
    director: 'David Lynch',
    connection:
      'Mulholland Drive and Black Swan both explore Hollywood performance, split identities, and dreams turning into psychological nightmares.',
  },
  'The Piano Teacher': {
    imdbRating: 7.5,
    genre: 'Psychosexual Drama',
    director: 'Michael Haneke',
    connection:
      'The Piano Teacher shows another artist crushed by control and repression, mirroring Black Swan’s descent into self-harm and obsession with perfection.',
  },
  'Birdman': {
    imdbRating: 7.7,
    genre: 'Theatre Meta-Drama',
    director: 'Alejandro G. Iñárritu',
    connection:
      'Birdman is Black Swan for theatre: a washed-up superhero actor gambles everything on one Broadway play as his sense of reality starts to fracture.',
  },
  'Requiem for a Dream': {
    imdbRating: 8.3,
    genre: 'Addiction Drama',
    director: 'Darren Aronofsky',
    connection:
      'Requiem for a Dream is Aronofsky at his most nightmarish; its manic editing and bodily horror anticipate Black Swan’s psychological breakdown style.',
  },
  'Nightcrawler': {
    imdbRating: 7.8,
    genre: 'Crime Thriller',
    director: 'Dan Gilroy',
    connection:
      'Nightcrawler swaps ballet for crime journalism, but keeps the same icy focus on ambition mutating into sociopathy and performance for the camera.',
  },
};

const BLACK_SWAN_TAGS = {
  'Perfect Blue': { tags: ['Idol Culture', 'Stalker Horror', 'Identity Crisis'], symbol: '🩰', color: '#8B0000' },
  'Whiplash': { tags: ['Mentor Abuse', 'Music Conservatory', 'Perfectionism'], symbol: '🥁', color: '#B22222' },
  'Suspiria': { tags: ['Dance Academy', 'Witch Cult', 'Body Horror'], symbol: '🩰', color: '#4B0082' },
  'The Red Shoes': { tags: ['Ballet Classic', 'Tragic Romance', 'Art vs Love'], symbol: '🎭', color: '#DC143C' },
  'The Wrestler': { tags: ['Performance Pain', 'Aging Body', 'Show Must Go On'], symbol: '🤼‍♂️', color: '#8B4513' },
  'Mulholland Drive': { tags: ['Hollywood Dream', 'Surreal Mystery', 'Split Identity'], symbol: '🎬', color: '#1F2933' },
  'The Piano Teacher': { tags: ['Sexual Repression', 'Teacher-Student', 'Masochism'], symbol: '🎹', color: '#374151' },
  'Birdman': { tags: ['Stage Play', 'Meta Cinema', 'Ego Collapse'], symbol: '🎭', color: '#F59E0B' },
  'Requiem for a Dream': { tags: ['Addiction', 'Body Horror', 'Visual Assault'], symbol: '💊', color: '#7C3AED' },
  'Nightcrawler': { tags: ['Media Ethics', 'Urban Noir', 'Antihero'], symbol: '📷', color: '#065F46' },
};

const getTMDBImage = (path, size = 'w1280') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getPsychologicalInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return (
    data?.connection ||
    'A razor-sharp psychological character study about obsession, performance pressure, and identity breakdown.'
  );
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

  const insight = getPsychologicalInsight(movie?.Title);
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
    .mobile-psych-card {
      background: #090712;
      border-radius: 12px;
      box-shadow: 0 2px 12px #0006;
      margin: 0;
      flex: 1;
      border-left: 4px solid #EAB308;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px 10px 10px 12px;
      min-height: 110px;
      position: relative;
    }
    .mobile-psych-row {
      display: flex;
      align-items: flex-start;
      gap: 7px;
    }
    .mobile-psych-icon {
      min-width: 24px;
      min-height: 24px;
      color: #FDE047;
      margin-top: 2px;
    }
    .mobile-psych-title {
      font-size: 15px;
      font-weight: bold;
      color: #FDE047;
      margin-bottom: 1px;
      line-height: 1.12;
    }
    .mobile-psych-desc {
      font-size: 12.3px;
      color: #ededed;
      line-height: 1.36;
      margin-top: 2px;
    }
  }
`;

  const intensity = COMPLETE_MOVIE_DATA[movie.tmdbId]?.classWarfareIndex || 90;

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
                    alt={`${movie?.Title} banner`}
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: COLORS.bgCard }}
                  >
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
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: COLORS.accent }}
                    ></div>
                    Trailer in {countdown}s
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ✅ MOBILE LAYOUT - Side by Side */}
      {isMobile ? (
  <div className="mobile-hero-row">
    <div className="mobile-hero-poster">
      {posterImage ? (
        <Image
          src={posterImage}
          alt={`${movie?.Title} poster`}
          width={320}
          height={480}
          className="w-full h-auto"
          priority
        />
      ) : (
        <div
          style={{
            background: COLORS.bgCard,
            width: '100%',
            height: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Theater style={{ color: COLORS.textMuted }} />
        </div>
      )}
    </div>
    <div className="mobile-psych-card">
      <div className="mobile-psych-row">
        <Theater className="mobile-psych-icon" />
        <div>
          <div className="mobile-psych-title">Psychological Intensity</div>
        </div>
      </div>
      <div className="mobile-psych-desc">
        <strong>{intensity}</strong> – {insight}
      </div>
    </div>
  </div>
) : (

        /* ✅ DESKTOP LAYOUT */
        <div
          className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20"
          style={{ backgroundColor: COLORS.bgPrimary }}
        >
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
                    alt={`${movie?.Title} poster`}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px"
                    quality={85}
                    className="object-cover rounded-lg sm:rounded-xl shadow-2xl"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: COLORS.bgCard, borderRadius: '12px' }}
                  >
                    <Theater style={{ color: COLORS.textMuted }} />
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
                  background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(15, 15, 30, 0.7) 100%)`,
                  border: `1px solid ${COLORS.borderLight}`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.34)`,
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
                    <Theater className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <h2
                      className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight"
                      style={{ color: COLORS.accent }}
                    >
                      Why This Black Swan–Style Film Hits Hard
                    </h2>
                    <p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>
                      Psychological Intensity: {intensity}/100
                    </p>
                  </div>
                </div>

                <div
                  className="relative pl-4 sm:pl-6 border-l-2"
                  style={{ borderColor: `${COLORS.accent}40` }}
                >
                  <motion.div
                    className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{ backgroundColor: COLORS.accent }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <p
                    className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-normal break-words"
                    style={{ color: COLORS.textSecondary, lineHeight: '1.8' }}
                  >
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

const SmartBackButton = () => {
  const handleBackClick = () => {
    if (typeof window !== 'undefined') window.location.href = '/collection/movies-like-black-swan';
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
        Back to Black Swan List
      </span>
    </motion.button>
  );
};

const AuthorCreditSection = () => (
  <motion.section
    className="pt-6 sm:pt-8 mt-12 sm:mt-16"
    style={{ borderTop: `1px solid ${COLORS.borderLight}` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.8, duration: 0.8 }}
  >
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      <div className="flex items-center gap-3">
        <User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} />
        <div>
          <p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            Curated by{' '}
            <span className="font-medium" style={{ color: COLORS.textSecondary }}>
              Filmiway Editorial Team
            </span>
          </p>
          <p className="text-xs" style={{ color: COLORS.textDisabled }}>
            Expert analysis of psychological thrillers
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>
          Share:
        </span>
        <div className="flex gap-2 sm:gap-3">
          {[Twitter, Hash, Send].map((Icon, i) => (
            <button
              key={i}
              className="p-1.5 sm:p-2 rounded-full transition-colors"
              style={{ color: COLORS.textDisabled }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLORS.textSecondary;
                e.currentTarget.style.backgroundColor = COLORS.bgCard;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLORS.textDisabled;
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

const SubtleFilmGrain = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.01]">
    <div
      className="w-full h-full bg-repeat"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

const BlackSwanBreadcrumb = ({ movie }) => (
  <motion.nav
    className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4"
    style={{ borderBottom: `1px solid ${COLORS.borderLight}` }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
      <Link
        href="/collection/movies-like-black-swan"
        className="transition-all duration-300 truncate"
        style={{ color: COLORS.textMuted }}
        onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textMuted)}
      >
        Movies Like Black Swan
      </Link>
      <ChevronRight size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled }} />
      <span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>
        {movie.Title}
      </span>
    </div>
  </motion.nav>
);

const BlackSwanMoviePage = ({ movie }) => {
  const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const metaData = MOVIE_DATA_BY_TITLE[movie.Title];
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
          `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fromCollection', 'movies-like-black-swan');
      sessionStorage.setItem('fromCollectionName', 'Movies Like Black Swan');
    }
  }, []);

  const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
  const currentMovieGenre = metaData?.genre || movie.genre || movieInfo?.genre || 'Psychological Thriller';
  const trailer = movieData?.videos?.results?.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  if (isLoading)
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: COLORS.bgPrimary }}
      >
        <div className="text-center">
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}
          ></div>
          <p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>
            Loading...
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
      <Head>
        <title>
          {movie.Title} ({currentMovieYear}) – Movies Like Black Swan | Filmiway
        </title>
        <meta
          name="description"
          content={`${movie.Title} (${currentMovieYear}) – A psychologically intense film about obsession and identity. Analysis, ratings & where to stream.`}
        />
        <link rel="canonical" href={`https://filmiway.com/movies/black-swan/${movie.imdbID}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${movie.Title} (${currentMovieYear}) – Black Swan–Style Psychological Thriller`}
        />
        <meta
          property="og:description"
          content={`A gripping psychological film about obsession and identity. Deep-dive analysis & streaming options.`}
        />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:image"
          content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${movie.Title} (${currentMovieYear})`} />
        <meta
          name="twitter:description"
          content={`A psychologically intense film about performance and identity.`}
        />
        <meta
          name="twitter:image"
          content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''}
        />
      </Head>

      <SubtleFilmGrain />
      <div className="absolute inset-0">
        <CinematicBackground />
      </div>
      <SmartBackButton />
      <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
        <BlackSwanBreadcrumb movie={movie} />
        <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
          <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
          <motion.div
            id="watch"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6"
          >
            <MovieDetailsSection movie={movie} fromSurvivalCollection={false} />
          </motion.div>
          <div className="px-3 sm:px-4 lg:px-6">
            <InternalCollectionsSection currentSlug="movies-like-black-swan" />
            <TMDBAttribution />
            <AuthorCreditSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = COMPLETE_MOVIE_DATABASE.map((movie) => ({ params: { id: movie.imdbID } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id);
  if (!movie) return { notFound: true };
  return { props: { movie } };
}

export default BlackSwanMoviePage;
