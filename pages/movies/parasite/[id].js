// pages/movies/parasite/[id].js - MOVIES LIKE PARASITE DETAIL PAGE ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Award, Brain, Film, User, Twitter, Hash, Send } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from '../../../utils/parasiteMovieData';

const COLORS = {
  accent: '#EC4899', accentLight: '#F472B6', bgPrimary: '#0B0B0C', bgCard: 'rgba(55, 65, 81, 0.3)',
  textPrimary: '#FFFFFF', textSecondary: '#D1D5DB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(236, 72, 153, 0.2)', borderLight: 'rgba(107, 114, 128, 0.2)',
};

const MOVIE_YEARS = {
    'Parasite': '2019', 'The Handmaiden': '2016', 'Burning': '2018', 'Snowpiercer': '2013',
    'Memories of Murder': '2003', 'Shoplifters': '2018', 'The Platform': '2019', 'Mother': '2009',
    'The Killing of a Sacred Deer': '2017', 'The Housemaid': '2010', 'The Talented Mr. Ripley': '1999'
};

const MOVIE_DATA_BY_TITLE = {
    'Parasite': { imdbRating: 8.5, genre: 'Class Warfare', director: 'Bong Joon Ho', classWarfareInsight: 'Parasite is the ultimate class warfare thriller. A poor family infiltrates a wealthy household, but neither side is innocent. The film exposes how capitalism creates parasites on both ends of the spectrum—those who exploit and those who must deceive to survive.' },
    'The Handmaiden': { imdbRating: 8.1, genre: 'Erotic Thriller', director: 'Park Chan-wook', classWarfareInsight: 'The Handmaiden deconstructs colonial class hierarchies through seduction and deception. Set in 1930s Korea under Japanese occupation, every character manipulates every other character in a game where wealth and class determine power—until women reclaim agency.' },
    'Burning': { imdbRating: 7.5, genre: 'Mystery Drama', director: 'Lee Chang-dong', classWarfareInsight: 'Burning is class resentment as slow-burn psychological horror. The wealthy can destroy people and disappear. The poor can only watch, burn with jealousy, and spiral into obsession. This is what inequality does to the human soul.' },
    'Snowpiercer': { imdbRating: 7.1, genre: 'Sci-Fi Dystopia', director: 'Bong Joon Ho', classWarfareInsight: 'Snowpiercer is literally a class system on rails. The rich ride in luxury cars while the poor freeze in the tail. Revolution doesn\'t bring freedom—it just reveals that those in power designed the system to be eternal, requiring sacrifice from below.' },
    'Memories of Murder': { imdbRating: 8.1, genre: 'Crime Procedural', director: 'Bong Joon Ho', classWarfareInsight: 'Memories of Murder shows institutional failure as class injustice. Poor suspects are tortured into false confessions while the wealthy are protected. The system is broken, and the innocent suffer while the guilty walk free.' },
    'Shoplifters': { imdbRating: 7.9, genre: 'Family Drama', director: 'Hirokazu Kore-eda', classWarfareInsight: 'Shoplifters asks: what makes a family? The marginalized must steal to survive while society abandons them. Love transcends blood and class, but the system criminalizes poverty while ignoring systemic neglect.' },
    'The Platform': { imdbRating: 7.0, genre: 'Sci-Fi Allegory', director: 'Galder Gaztelu-Urrutia', classWarfareInsight: 'The Platform is pure allegory for capitalism\'s cruelty. Those above feast while those below starve. Humanity\'s selfishness ensures the system perpetuates. Solidarity is the only answer, but will anyone choose it?' },
    'Mother': { imdbRating: 7.8, genre: 'Psychological Thriller', director: 'Bong Joon Ho', classWarfareInsight: 'Mother reveals how class prejudice corrupts justice. Poor defendants are assumed guilty while mothers obsessively protect their children. The film shows maternal love twisted into monstrosity when powerlessness meets desperation.' },
    'The Killing of a Sacred Deer': { imdbRating: 7.0, genre: 'Psychological Thriller', director: 'Yorgos Lanthimos', classWarfareInsight: 'The Killing of a Sacred Deer uses Greek tragedy to explore privilege. A surgeon\'s wealth and status cannot protect him from moral punishment. Cosmic justice doesn\'t care about your bank account—guilt is universal.' },
    'The Housemaid': { imdbRating: 6.4, genre: 'Erotic Thriller', director: 'Im Sang-soo', classWarfareInsight: 'The Housemaid exposes sexual exploitation as class exploitation. The wealthy sexually abuse workers with impunity. For the powerless, revenge is the only justice available.' },
    'The Talented Mr. Ripley': { imdbRating: 7.4, genre: 'Psychological Thriller', director: 'Anthony Minghella', classWarfareInsight: 'The Talented Mr. Ripley is class envy as existential crisis. Tom Ripley doesn\'t just want Dickie\'s money—he wants the ease of being born into privilege. He\'ll murder to escape anonymity.' }
};

const PARASITE_TAGS = {
    'Parasite': { tags: ['Class War', 'Deception', 'Capitalism'], symbol: '🏢', color: '#1e3a8a' },
    'The Handmaiden': { tags: ['Seduction', 'Colonialism', 'Female Agency'], symbol: '💋', color: '#be185d' },
    'Burning': { tags: ['Obsession', 'Class Resentment', 'Mystery'], symbol: '🔥', color: '#dc2626' },
    'Snowpiercer': { tags: ['Dystopia', 'Revolution', 'Capitalism'], symbol: '🚂', color: '#0f172a' },
    'Memories of Murder': { tags: ['Serial Killer', 'Injustice', 'Corruption'], symbol: '🔍', color: '#422006' },
    'Shoplifters': { tags: ['Family', 'Poverty', 'Love'], symbol: '👨‍👩‍👧‍👦', color: '#0369a1' },
    'The Platform': { tags: ['Allegory', 'Capitalism', 'Survival'], symbol: '📊', color: '#57534e' },
    'Mother': { tags: ['Obsession', 'Injustice', 'Maternal Love'], symbol: '👩', color: '#1e3a8a' },
    'The Killing of a Sacred Deer': { tags: ['Greek Tragedy', 'Punishment', 'Morality'], symbol: '⚖️', color: '#164e63' },
    'The Housemaid': { tags: ['Exploitation', 'Revenge', 'Sexuality'], symbol: '👗', color: '#7c2d12' },
    'The Talented Mr. Ripley': { tags: ['Identity', 'Class Envy', 'Murder'], symbol: '🎭', color: '#083344' }
};

const getTMDBImage = (path, size = 'w1280') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getClassWarfareInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return data?.classWarfareInsight || 'A brilliant exploration of class, power, and human nature.';
};

// ✅ OPTIMIZED BANNER COMPONENT FOR PARASITE COLLECTION
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

  const insight = getClassWarfareInsight(movie?.Title);
  const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row {
      display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw;
      gap: 10px; margin: 0; padding: 0 8px;
    }
    .mobile-hero-poster {
      width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden;
      box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0;
    }
    .mobile-hero-poster img {
      width: 100%; height: auto; border-radius: 12px; display: block;
    }
    .mobile-class-card {
      background: #1a0f15; border-radius: 12px; box-shadow: 0 2px 12px #0006;
      margin: 0; flex: 1; border-left: 4px solid #EC4899; display: flex;
      flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px;
      min-height: 110px; position: relative;
    }
    .mobile-class-row {
      display: flex; align-items: flex-start; gap: 7px;
    }
    .mobile-class-icon {
      min-width: 24px; min-height: 24px; color: #F472B6; margin-top: 2px;
    }
    .mobile-class-title {
      font-size: 15px; font-weight: bold; color: #F472B6;
      margin-bottom: 1px; line-height: 1.12;
    }
    .mobile-class-desc {
      font-size: 12.3px; color: #ededed; line-height: 1.36; margin-top: 2px;
    }
  }
`;

  const classWarfareIndex = movie?.classWarfareIndex || 85;

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

      {/* ✅ MOBILE LAYOUT */}
      {isMobile ? (
        <div className="mobile-hero-row">
          <div className="mobile-hero-poster">
            {posterImage ? (
              <img src={posterImage} alt={`${movie?.Title} poster`} />
            ) : (
              <div style={{ background: COLORS.bgCard, width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Brain style={{ color: COLORS.textMuted }} />
              </div>
            )}
          </div>
          <div className="mobile-class-card">
            <div className="mobile-class-row">
              <Brain className="mobile-class-icon" />
              <div>
                <div className="mobile-class-title">Class Index</div>
              </div>
            </div>
            <div className="mobile-class-desc">
              <strong>{classWarfareIndex}</strong> - {insight}
            </div>
          </div>
        </div>
      ) : (
        /* ✅ DESKTOP LAYOUT */
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
                    alt={`${movie?.Title} poster`}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px"
                    quality={85}
                    className="object-cover rounded-lg sm:rounded-xl shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard, borderRadius: '12px' }}>
                    <Brain style={{ color: COLORS.textMuted }} />
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
                  background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(15, 15, 20, 0.5) 100%)`,
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
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>
                      Why This Class War Film Matters
                    </h2>
                    <p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>
                      Class Warfare Index: {classWarfareIndex}/100
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

const SmartBackButton = () => {
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/movies-like-parasite'; };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of class warfare cinema</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const ParasiteBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/movies-like-parasite" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Movies Like Parasite</Link>
            <ChevronRight size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled}} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

const ParasiteMoviePage = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
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
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`);
                const data = await response.json();
                setMovieData(data);
            } catch (error) { console.error('Failed to fetch movie data:', error); }
            finally { setIsLoading(false); }
        };
        fetchMovieData();
        return () => window.removeEventListener('resize', checkMobile);
    }, [movie.tmdbId]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('fromCollection', 'parasite');
            sessionStorage.setItem('fromCollectionName', 'Movies Like Parasite');
        }
    }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const currentMovieGenre = correctData?.genre || movie.genre || movieInfo?.genre || 'Class War';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    if (isLoading) return (<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}><div className="text-center"><div className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div><p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Loading...</p></div></div>);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{movie.Title} ({currentMovieYear}) - Class Warfare Film | Filmiway</title>
                <meta name="description" content={`${movie.Title} (${currentMovieYear}) - A class war film. Analysis, ratings & where to stream.`} />
                <link rel="canonical" href={`https://filmiway.com/movies/parasite/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta property="og:title" content={`${movie.Title} (${currentMovieYear}) - Class Warfare`} />
                <meta property="og:description" content={`A brilliant class war film. Analysis, ratings & where to stream.`} />
                <meta property="og:type" content="video.movie" />
                <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${movie.Title} (${currentMovieYear})`} />
                <meta name="twitter:description" content={`A brilliant class war film`} />
                <meta name="twitter:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                <ParasiteBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
                    <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6">
                        <MovieDetailsSection movie={movie} fromParasiteCollection={true} />
                    </motion.div>
                    <div className="px-3 sm:px-4 lg:px-6">
                        <InternalCollectionsSection currentSlug="movies-like-parasite" />
                        <TMDBAttribution />
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
    const movie = COMPLETE_MOVIE_DATABASE.find(m => m.imdbID === params.id);
    if (!movie) return { notFound: true };
    return { props: { movie } };
}

export default ParasiteMoviePage;
