// pages/movies/matrix/[id].js - SURVIVAL FORMAT EXACTLY ✅ MATRIX THEME
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Award, Zap, Film, User, Twitter, Hash, Send } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';

import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';
// pages/movies/matrix/[id].js - ADD THIS IMPORT
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA, FALLBACK_POSTERS } from '../../../utils/matrixMovieData';


const COLORS = {
  accent: '#00FF00', accentLight: '#00FF66', bgPrimary: '#0B0B0C', bgCard: 'rgba(0, 255, 0, 0.08)',
  textPrimary: '#FFFFFF', textSecondary: '#D1D5DB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(0, 255, 0, 0.2)', borderLight: 'rgba(107, 114, 128, 0.2)',
};

const MOVIE_YEARS = {
  'Dark City': '1998', 'Inception': '2010', 'Thirteenth Floor': '1999', 'eXistenZ': '1999',
  'Source Code': '2011', 'Minority Report': '2002', 'Upgrade': '2018', 'Total Recall': '1990',
  'Blade Runner 2049': '2017', 'Edge of Tomorrow': '2014'
};

const MOVIE_DATA_BY_TITLE = {
  'Dark City': { imdbRating: 7.4, genre: 'Noir Sci-Fi', director: 'Alex Proyas', cyberConnection: 'Dark City predates The Matrix with its own noir-futuristic vision of a city where memories are altered and reality shifts nightly. A masterpiece of atmospheric world-building and existential dread.' },
  'Inception': { imdbRating: 8.8, genre: 'Cerebral Thriller', director: 'Christopher Nolan', cyberConnection: 'Inception uses dream technology as its construct-within-construct premise. Nolan\'s layered narrative mirrors The Matrix\'s exploration of reality vs illusion with breathtaking scale and intellectual rigor.' },
  'Thirteenth Floor': { imdbRating: 7.2, genre: 'Cyberpunk Mystery', director: 'Josef Rusnak', cyberConnection: 'A direct spiritual sibling to The Matrix, Thirteenth Floor explores multiple layers of simulated realities. Computer programmer Douglas Hall discovers his world is a virtual construct, questioning the nature of existence itself.' },
  'eXistenZ': { imdbRating: 6.8, genre: 'Sci-Fi Body Horror', director: 'David Cronenberg', cyberConnection: 'Cronenberg\'s trippy masterpiece presents virtual reality through biological interface technology. Reality bleeds with illusion as players literally plug into a biomechanical console, questioning what is real.' },
  'Source Code': { imdbRating: 7.5, genre: 'Sci-Fi Thriller', director: 'Duncan Jones', cyberConnection: 'A time-loop thriller where a soldier can inhabit the body of another person in the last 8 minutes before a bombing. Like The Matrix, it explores consciousness transfer and the nature of identity in digital spaces.' },
  'Minority Report': { imdbRating: 7.6, genre: 'Techno-Thriller', director: 'Steven Spielberg', cyberConnection: 'Examines a high-tech future where precrime technology blurs free will and destiny. Tom Cruise navigates a world of advanced AI and neural interfaces similar to The Matrix\'s themes of control and predetermined reality.' },
  'Upgrade': { imdbRating: 7.3, genre: 'Sci-Fi Action', director: 'Leigh Whannell', cyberConnection: 'A gritty indie sci-fi about a paralyzed man implanted with an AI that grants superhuman abilities. Explores themes of consciousness merging with technology, blurring the line between human and artificial intelligence.' },
  'Total Recall': { imdbRating: 7.5, genre: 'Action Thriller', director: 'Paul Verhoeven', cyberConnection: 'Predates The Matrix by asking: what if your memories are false and reality is manufactured? Schwarzenegger\'s journey through constructed worlds explores identity and perceived versus actual reality.' },
  'Blade Runner 2049': { imdbRating: 8.0, genre: 'Cyberpunk Noir', director: 'Denis Villeneuve', cyberConnection: 'A visually stunning cyberpunk epic exploring what it means to be human. Replicants questioned whether they have consciousness mirrors The Matrix\'s exploration of artificial consciousness and the reality of existence.' },
  'Edge of Tomorrow': { imdbRating: 7.9, genre: 'Sci-Fi Action', director: 'Doug Liman', cyberConnection: 'Tom Cruise relives the same day in an alien war, gaining knowledge and skills with each loop. The time-loop mechanic mirrors The Matrix\'s exploration of awakening to hidden reality and escaping predetermined patterns.' }
};

const MATRIX_TAGS = {
  'Dark City': { tags: ['Memory', 'Noir', 'Conspiracy'], symbol: '🌃', color: '#1a4d4d' },
  'Inception': { tags: ['Dreams', 'Layers', 'Paradox'], symbol: '💭', color: '#4a2080' },
  'Thirteenth Floor': { tags: ['Simulation', 'Code', 'Reality'], symbol: '💻', color: '#0088ff' },
  'eXistenZ': { tags: ['Virtual', 'Biological', 'Interface'], symbol: '🧬', color: '#ff00ff' },
  'Source Code': { tags: ['Time Loop', 'Consciousness', 'Identity'], symbol: '⏰', color: '#ffaa00' },
  'Minority Report': { tags: ['Precrime', 'Future', 'Choice'], symbol: '🔮', color: '#ffaa00' },
  'Upgrade': { tags: ['AI', 'Cyborg', 'Control'], symbol: '🤖', color: '#ff0088' },
  'Total Recall': { tags: ['Memory', 'Mars', 'Reality'], symbol: '🧠', color: '#ff5500' },
  'Blade Runner 2049': { tags: ['Replicant', 'Consciousness', 'Noir'], symbol: '👾', color: '#00ff66' },
  'Edge of Tomorrow': { tags: ['Time Loop', 'Awakening', 'Alien'], symbol: '⚡', color: '#ffff00' }
};

const getTMDBImage = (path, size = 'w1280') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getMatrixInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return data?.cyberConnection || 'An extraordinary cyberpunk film exploring digital reality and consciousness like The Matrix.';
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

  const insight = getMatrixInsight(movie?.Title);
  const cyberComplexity = 92;

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
      .mobile-matrix-card {
        background: #0a1a0a;
        border-radius: 12px;
        box-shadow: 0 2px 12px #0006;
        margin: 0;
        flex: 1;
        border-left: 4px solid #00FF00;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px 10px 10px 12px;
        min-height: 110px;
        position: relative;
      }
      .mobile-matrix-row {
        display: flex;
        align-items: flex-start;
        gap: 7px;
      }
      .mobile-matrix-icon {
        min-width: 24px;
        min-height: 24px;
        color: #00FF66;
        margin-top: 2px;
      }
      .mobile-matrix-title {
        font-size: 15px;
        font-weight: bold;
        color: #00FF66;
        margin-bottom: 1px;
        line-height: 1.12;
      }
      .mobile-matrix-desc {
        font-size: 12.3px;
        color: #ededed;
        line-height: 1.36;
        margin-top: 2px;
      }
    }
  `;

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
                    <Zap className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} />
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

      {/* ✅ MOBILE LAYOUT - MATRIX STYLE */}
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
          <Fingerprint style={{ color: COLORS.textMuted }} />
        </div>
      )}
    </div>
    <div className="mobile-se7en-card">
      <div className="mobile-se7en-row">
        <Fingerprint className="mobile-se7en-icon" />
        <div>
          <div className="mobile-se7en-title">Se7en DNA Score</div>
        </div>
      </div>
      <div className="mobile-se7en-desc">
        <strong>{se7enDNAScore}</strong> - {insight}
      </div>
    </div>
  </div>
) : (

        /* ✅ DESKTOP LAYOUT - MATRIX STYLE */
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
                    <Zap style={{ color: COLORS.textMuted }} />
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
                  background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(10, 26, 10, 0.5) 100%)`,
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
                      Why This is Like The Matrix
                    </h2>
                    <p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>
                      Cyber Complexity: {cyberComplexity}/100
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
  const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/movies-like-the-matrix'; };
  return (
    <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Matrix</span>
    </motion.button>
  );
};

const AuthorCreditSection = () => (
  <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of cyberpunk cinema</p></div></div>
      <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
    </div>
  </motion.section>
);

const SubtleFilmGrain = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const MatrixBreadcrumb = ({ movie }) => (
  <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
      <Link href="/collection/movies-like-the-matrix" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Movies Like The Matrix</Link>
      <ChevronRight size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
    </div>
  </motion.nav>
);

const MatrixMoviePage = ({ movie }) => {
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

  useEffect(() => { if (typeof window !== 'undefined') { sessionStorage.setItem('fromMatrixCollection', 'true'); sessionStorage.removeItem('fromSurvivalCollection'); } }, []);
  useEffect(() => { const handleScroll = () => setScrollY(window.scrollY); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);

  const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
  const currentMovieGenre = correctData?.genre || movie.genre || movieInfo?.genre || 'Cyberpunk';
  const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  if (isLoading) return (<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}><div className="text-center"><div className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div><p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Loading...</p></div></div>);

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
      <Head>
        <title>{movie.Title} ({currentMovieYear}) - Like The Matrix | Filmiway</title>
        <meta name="description" content={`${movie.Title} (${currentMovieYear}) - A cyberpunk film like The Matrix. Analysis, ratings & where to stream.`} />
        <link rel="canonical" href={`https://filmiway.com/movies/matrix/${movie.imdbID}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${movie.Title} (${currentMovieYear}) - Cyberpunk Film`} />
        <meta property="og:description" content={`A cyberpunk film like The Matrix. Analysis, ratings & streaming info.`} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content={`https://filmiway.com/movies/matrix/${movie.imdbID}`} />
        <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${movie.Title} (${currentMovieYear})`} />
        <meta name="twitter:description" content={`A cyberpunk film like The Matrix`} />
        <meta name="twitter:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
      </Head>

      <SubtleFilmGrain />
      <div className="absolute inset-0"><CinematicBackground /></div>
      <SmartBackButton />
      <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
        <MatrixBreadcrumb movie={movie} />
        <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
          <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
          <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6">
            <MovieDetailsSection movie={movie} fromMatrixCollection={true} />
          </motion.div>
         <InternalCollectionsSection currentSlug="movies-like-the-matrix" />
<TMDBAttribution />


        </div>
      </div>
    </div>
  );
};

// ✅ FIXED - Use Object.keys() for new format
// ✅ FIXED getStaticPaths() - Matrix Format
export async function getStaticPaths() {
  const paths = COMPLETE_MOVIE_DATABASE.map((movie) => ({
    params: { id: movie.imdbID }
  }));
  
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const imdbID = params.id;
  const movie = COMPLETE_MOVIE_DATABASE.find(m => m.imdbID === imdbID);
  
  if (!movie) return { notFound: true };
  
  return {
    props: {
      movie,                           // ✅ Contains tmdbId: 2666, etc.
      movieData: COMPLETE_MOVIE_DATA[movie.tmdbId],
      posterUrl: FALLBACK_POSTERS[movie.tmdbId],
      fromMatrixCollection: true       // ✅ CRITICAL FLAG
    }
  };
}

export default MatrixMoviePage;
