// pages/movies/interstellar/[id].js - SURVIVAL-STYLE BANNER ✅
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
    '2001: A Space Odyssey': { imdbRating: 8.3, genre: 'Philosophical Sci-Fi', director: 'Stanley Kubrick', spaceComplexity: 98, spaceConnection: '2001: A Space Odyssey transcends cinema to become a meditation on human evolution and cosmic destiny. Kubrick\'s visionary masterpiece explores consciousness, artificial intelligence, and humanity\'s place in the universe through breathtaking visuals and profound philosophical questions.' },
    'Arrival': { imdbRating: 7.9, genre: 'Cerebral Sci-Fi', director: 'Denis Villeneuve', spaceComplexity: 92, spaceConnection: 'Arrival treats first contact not as spectacle but as linguistic puzzle that reshapes our perception of time itself. Denis Villeneuve crafts a poetic meditation on language, free will, and human connection that proves some of cinema\'s most profound moments happen in quiet conversation.' },
    'Contact': { imdbRating: 7.5, genre: 'Hard Sci-Fi', director: 'Robert Zemeckis', spaceComplexity: 88, spaceConnection: 'Contact explores humanity\'s eternal question: are we alone? Carl Sagan\'s vision, brought to life by Zemeckis, examines the boundaries between science and faith, evidence and belief, in our search for cosmic connection and meaning beyond Earth.' },
    'Solaris': { imdbRating: 8.0, genre: 'Psychological Sci-Fi', director: 'Andrei Tarkovsky', spaceComplexity: 94, spaceConnection: 'Solaris uses space exploration as a mirror to examine human consciousness, memory, and grief. Tarkovsky\'s meditative masterpiece suggests that the most profound alien encounter may be confronting the depths of our own psyche and unresolved past.' },
    'First Man': { imdbRating: 7.3, genre: 'Biographical Drama', director: 'Damien Chazelle', spaceComplexity: 84, spaceConnection: 'First Man strips away heroic mythology to reveal the devastating personal cost behind humanity\'s greatest achievement. Chazelle shows Neil Armstrong\'s journey to the Moon as intimate tragedy and catharsis, making the Apollo program feel viscerally human and hauntingly real.' },
    'The Martian': { imdbRating: 8.0, genre: 'Survival Sci-Fi', director: 'Ridley Scott', spaceComplexity: 86, spaceConnection: 'The Martian celebrates human ingenuity and optimism in the face of impossible odds. Ridley Scott transforms survival on Mars into a witty, scientifically grounded adventure where problem-solving with humor and intelligence becomes humanity\'s greatest strength.' },
    'Gravity': { imdbRating: 7.7, genre: 'Space Thriller', director: 'Alfonso Cuarón', spaceComplexity: 90, spaceConnection: 'Gravity captures the terrifying beauty and primal danger of space like no film before. Cuarón\'s technical masterpiece uses orbital disaster as metaphor for emotional rebirth, making the void of space feel both deadly real and spiritually transformative.' },
    'Sunshine': { imdbRating: 7.2, genre: 'Space Horror', director: 'Danny Boyle', spaceComplexity: 87, spaceConnection: 'Sunshine explores humanity\'s relationship with cosmic forces beyond comprehension. Boyle\'s mission to reignite the dying Sun becomes a descent into madness and obsession, examining what humans become when carrying the weight of species survival.' },
    'Moon': { imdbRating: 7.8, genre: 'Indie Sci-Fi', director: 'Duncan Jones', spaceComplexity: 89, spaceConnection: 'Moon proves that profound sci-fi needs neither massive budgets nor spectacle. Duncan Jones crafts an intimate character study about identity, consciousness, and corporate exploitation that asks what truly defines humanity in an age of cloning and disposable workers.' },
    'Ad Astra': { imdbRating: 6.5, genre: 'Contemplative Sci-Fi', director: 'James Gray', spaceComplexity: 85, spaceConnection: 'Ad Astra uses interplanetary journey as framework for internal psychological exploration. James Gray suggests that the true frontier isn\'t Neptune or the stars, but the emotional connections we struggle to maintain—making inner space more vast than outer space.' }
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

// ✅ SURVIVAL-STYLE OPTIMIZED BANNER
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
    const spaceConnection = correctData?.spaceConnection || `${movie.Title} showcases extraordinary cinematic vision and profound exploration of humanity's place in the cosmos.`;
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
        <>
          <style jsx>{`
    @media (max-width: 767px) {
        .mobile-hero-row {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            width: 100%;
            gap: 8px;
            margin: 0;
            padding: 16px 8px 12px 8px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }

        @media (max-width: 480px) {
            .mobile-hero-row {
                padding: 16px 6px 12px 6px;
                gap: 6px;
            }
        }

        .mobile-hero-poster {
            width: 35vw;
            min-width: 100px;
            max-width: 140px;
            aspect-ratio: 2/3;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            margin: 0;
            flex-shrink: 0;
        }

        .mobile-hero-poster img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 12px;
            display: block;
        }

        .mobile-space-card {
            background: linear-gradient(135deg, rgba(8, 145, 178, 0.15) 0%, rgba(15, 44, 51, 0.3) 100%);
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            margin: 0;
            flex: 1;
            border-left: 3px solid #0891b2;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 10px;
            min-height: 110px;
            position: relative;
        }

        .mobile-space-row {
            display: flex;
            align-items: flex-start;
            gap: 6px;
            margin-bottom: 6px;
        }

        .mobile-space-icon {
            min-width: 20px;
            min-height: 20px;
            color: #22d3ee;
            margin-top: 2px;
            flex-shrink: 0;
        }

        .mobile-space-title {
            font-size: 14px;
            font-weight: bold;
            color: #22d3ee;
            margin-bottom: 1px;
            line-height: 1.1;
        }

        .mobile-space-complexity {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.2;
        }

        .mobile-space-desc {
            font-size: 12px;
            color: #ededed;
            line-height: 1.4;
            margin-top: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
`}</style>


            <motion.div 
                className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8 }}
            >
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
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
    <button 
        onClick={handleCloseTrailer} 
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50"
        style={{ 
            backgroundColor: `${COLORS.bgPrimary}DD`, 
            color: COLORS.textPrimary,
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <X className="w-5 h-5" />
    </button>
</motion.div>

                        ) : (
                            <motion.div key="image" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                                <div className="relative w-full h-full">
{bannerImage ? (
  <Image
    src={bannerImage}
    alt={`${movie.Title} banner`}
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
) : (
  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard }}>
    <Rocket className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textDisabled }} />
  </div>
)}

                                    <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${COLORS.bgPrimary}80 85%, ${COLORS.bgPrimary} 100%)` }} />
                                </div>
                                {trailer && (
                                    <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                                        <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}>
                                            <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                                        </motion.button>
                                    </motion.div>
                                )}
                                {!isMobile && trailer && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                                    <motion.div className="absolute top-6 sm:top-8 right-6 sm:right-8 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border z-30" style={{ backgroundColor: `${COLORS.bgPrimary}CC`, borderColor: `${COLORS.accent}66`, color: COLORS.accent }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
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

                {/* MOBILE: SURVIVAL-STYLE ROW */}
{isMobile ? (
  <div className="mobile-hero-row">
    <div className="mobile-hero-poster">
      {posterImage ? (
        <Image
          src={posterImage}
          alt={`${movie.Title} poster`}
          width={320}
          height={480}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          style={{
            background: COLORS.bgCard,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
          }}
        >
          <Rocket style={{ color: COLORS.textMuted, width: '24px', height: '24px' }} />
        </div>
      )}
    </div>
    <div className="mobile-space-card">
      ...
    </div>
  </div>
) : (


                    /* DESKTOP: ORIGINAL DESIGN */
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
    alt={`${movie.Title} poster`}
    fill
    className="object-cover rounded-lg sm:rounded-xl shadow-2xl"
    sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px"
  />
) : (
  <div
    className="w-full h-full flex items-center justify-center rounded-lg sm:rounded-xl shadow-2xl"
    style={{ backgroundColor: COLORS.bgCard }}
  >
    <Rocket className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: COLORS.textDisabled }} />
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
                                    className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6" 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.9, duration: 0.6 }}
                                >
                                    {SPACE_TAGS[movie.Title]?.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm flex items-center gap-1 sm:gap-1.5 flex-shrink-0"
                                            style={{ 
                                                backgroundColor: `${SPACE_TAGS[movie.Title].color}30`,
                                                border: `1px solid ${SPACE_TAGS[movie.Title].color}80`,
                                                color: COLORS.textPrimary 
                                            }}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.9 + (index * 0.08), duration: 0.4 }}
                                        >
                                            <span className="text-sm sm:text-base">{SPACE_TAGS[movie.Title].symbol}</span>
                                            <span className="whitespace-nowrap">{tag}</span>
                                        </motion.span>
                                    ))}
                                </motion.div>
                                
                                <motion.div 
                                    className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
                                    style={{ 
                                        background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(15, 15, 20, 0.5) 100%)`,
                                        border: `1px solid ${COLORS.borderLight}`,
                                        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4)`
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.8 }}
                                >
                                    <div 
                                        className="absolute top-0 left-0 right-0 h-0.5 sm:h-1"
                                        style={{ 
                                            background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` 
                                        }}
                                    />
                                    
                                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                        <motion.div 
                                            className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0"
                                            style={{ 
                                                background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`,
                                                border: `1px solid ${COLORS.accent}40`
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} />
                                        </motion.div>
                                        
                                        <div className="min-w-0 flex-1">
                                            <h2 
                                                className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight"
                                                style={{ color: COLORS.accent }}
                                            >
                                                Why This is Like Interstellar
                                            </h2>
                                            <p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>
                                                Space Complexity: {spaceComplexity}/100
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
                                        
                                        <p 
                                            className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-normal break-words"
                                            style={{ color: COLORS.textSecondary, lineHeight: '1.8' }}
                                        >
                                            {spaceConnection}
                                        </p>
                                    </div>

                                    <motion.div 
                                        className="mt-4 sm:mt-6 h-0.5 sm:h-1 rounded-full"
                                        style={{ 
                                            background: `linear-gradient(90deg, ${COLORS.accent}60, transparent)`,
                                            width: '40%'
                                        }}
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
        </>
    );
};

const SmartBackButton = () => {
    const handleBackClick = () => { 
        if (typeof window !== 'undefined') window.location.href = '/collection/movies-like-interstellar'; 
    };

    return (
        <motion.button 
            onClick={handleBackClick} 
            className="fixed z-50 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm"
            style={{ 
                backgroundColor: `${COLORS.bgPrimary}F2`, 
                border: `1px solid ${COLORS.borderLight}`,
                top: 'max(1rem, env(safe-area-inset-top))',
                left: 'max(1rem, env(safe-area-inset-left))',
                minWidth: '44px',
                minHeight: '44px',
            }} 
            whileHover={{ scale: 1.02, x: -2 }} 
            whileTap={{ scale: 0.98 }} 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}
        >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.accent }} />
            <span className="font-medium hidden sm:inline" style={{ color: COLORS.accent }}>Back</span>
        </motion.button>
    );
};


const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of space cinema</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const InterstellarBreadcrumb = ({ movie }) => (
    <motion.nav 
        className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" 
        style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
    >
        <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm overflow-x-auto -mx-1 px-1 pb-1">
            <Link 
                href="/collection/movies-like-interstellar" 
                className="whitespace-nowrap transition-all duration-300"
                style={{ color: COLORS.textMuted }}
                onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
                onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}
            >
                Interstellar
            </Link>
            <ChevronRight size={12} className="flex-shrink-0" style={{ color: COLORS.textDisabled }} />
            <span className="truncate whitespace-nowrap" style={{ color: `${COLORS.accent}B3` }}>
                {movie.Title}
            </span>
        </div>
    </motion.nav>
);


const InterstellarMoviePage = ({ movie }) => {
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

    useEffect(() => { if (typeof window !== 'undefined') { sessionStorage.setItem('fromInterstellarCollection', 'true'); sessionStorage.removeItem('fromSurvivalCollection'); sessionStorage.removeItem('fromInceptionCollection'); sessionStorage.removeItem('fromMementoCollection'); } }, []);
    useEffect(() => { const handleScroll = () => setScrollY(window.scrollY); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const currentMovieGenre = correctData?.genre || movie.genre || movieInfo?.genre || 'Sci-Fi';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    if (isLoading) return (<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}><div className="text-center"><div className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div><p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Loading...</p></div></div>);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
           <Head>
  <title>{movie.Title} ({currentMovieYear}) - Like Interstellar | Filmiway</title>
  <meta name="description" content={`${movie.Title} ({currentMovieYear}) - A mind-bending space exploration film. Analysis, ratings & where to stream.`} />
  <link rel="canonical" href={`https://filmiway.com/movies/interstellar/${movie.imdbID}`} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  
  {/* Open Graph */}
  <meta property="og:title" content={`${movie.Title} (${currentMovieYear}) - Space Exploration`} />
  <meta property="og:description" content={`A mind-bending space film. Analysis, ratings & where to stream.`} />
  <meta property="og:type" content="video.movie" />
 
  <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${movie.Title} (${currentMovieYear})`} />
  <meta name="twitter:description" content={`A mind-bending space exploration film`} />
  <meta name="twitter:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
</Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                <InterstellarBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
                    <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6">
<MovieDetailsSection movie={movie} fromInterstellarCollection={true} />
</motion.div>
<div className="px-3 sm:px-4 lg:px-6">
    <InternalCollectionsSection currentSlug="movies-like-interstellar" />
    <AuthorCreditSection />
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

export default InterstellarMoviePage;
