// pages/movies/netflix/[id].js - NETFLIX DRAMA MOVIE DETAIL PAGE ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Award, Film, User, Twitter, Hash, Send } from 'lucide-react';

import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';
import DRAMA_MOVIES, { COMPLETE_MOVIE_DATA } from '../../../utils/dramaMovieData';

const COLORS = {
  accent: '#E50914', // Netflix Red
  accentLight: '#F40612',
  bgPrimary: '#0B0B0C',
  bgCard: 'rgba(55, 65, 81, 0.3)',
  textPrimary: '#FFFFFF',
  textSecondary: '#D1D5DB',
  textMuted: '#9CA3AF',
  textDisabled: '#6B7280',
  borderAccent: 'rgba(229, 9, 20, 0.2)',
  borderLight: 'rgba(107, 114, 128, 0.2)',
};

const DRAMA_TAGS = {
    '1917': { tags: ['War', 'One-Shot', 'Intense'], symbol: '⚔️', color: '#8B4513' },
    'Roma': { tags: ['Family', 'Black & White', 'Mexico'], symbol: '🏠', color: '#4A5568' },
    'The Irishman': { tags: ['Crime', 'Epic', 'Scorsese'], symbol: '🎬', color: '#8B0000' },
    'Marriage Story': { tags: ['Divorce', 'Emotional', 'NYC'], symbol: '💔', color: '#DC143C' },
    'The Social Network': { tags: ['Tech', 'Harvard', 'Ambition'], symbol: '💻', color: '#4267B2' },
    'The Boy Who Harnessed the Wind': { tags: ['Inspiration', 'Africa', 'Innovation'], symbol: '🌬️', color: '#87CEEB' },
    'The Power of the Dog': { tags: ['Western', 'Psychological', 'Campion'], symbol: '🐴', color: '#8B4513' },
    'Mudbound': { tags: ['War', 'Racism', 'Mississippi'], symbol: '🌾', color: '#654321' },
    'The Pursuit of Happyness': { tags: ['Inspiration', 'Fatherhood', 'Real Story'], symbol: '💼', color: '#4169E1' },
    'Minari': { tags: ['Family', 'Immigration', 'Arkansas'], symbol: '🌱', color: '#228B22' }
};

const DRAMA_INSIGHTS = {
    '1917': 'Filmed to appear as one continuous shot, 1917 immerses viewers in the visceral experience of WWI. The technical achievement matches emotional weight - every minute is a race against death.',
    'Roma': 'Alfonso Cuarón\'s love letter to his childhood nanny captures intimate family dynamics against Mexico City\'s political turmoil. Shot in stunning black and white, it finds beauty in everyday moments.',
    'The Irishman': 'Scorsese\'s sprawling crime epic spans decades of American mob history. De-aging technology serves a meditation on aging, loyalty, and the cost of a life in organized crime.',
    'Marriage Story': 'Noah Baumbach dissects divorce with unflinching honesty. Adam Driver and Scarlett Johansson deliver career-defining performances in this raw portrait of love\'s dissolution.',
    'The Social Network': 'David Fincher transforms Facebook\'s creation into a Shakespearean drama of ambition and betrayal. Aaron Sorkin\'s razor-sharp dialogue crackles with intelligence.',
    'The Boy Who Harnessed the Wind': 'Chiwetel Ejiofor\'s directorial debut tells the inspiring true story of a Malawian boy who built a windmill to save his village from famine using library books and scrap.',
    'The Power of the Dog': 'Jane Campion returns with a slow-burn psychological Western. Benedict Cumberbatch\'s toxic rancher hides deep secrets in this masterful exploration of repressed desire and masculinity.',
    'Mudbound': 'Dee Rees crafts a powerful examination of racism in rural Mississippi. Two families - one Black, one white - face parallel struggles as their sons return from WWII.',
    'The Pursuit of Happyness': 'Will Smith delivers his most vulnerable performance as Chris Gardner, a homeless father fighting to secure his son\'s future. Based on a true story that defined perseverance.',
    'Minari': 'Lee Isaac Chung\'s semi-autobiographical gem follows a Korean family chasing the American Dream in 1980s Arkansas. Youn Yuh-jung won an Oscar for her unforgettable grandmother role.'
};

const OptimizedBanner = ({ movie, movieData, trailer, isMobile }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const timerRef = useRef(null);

    const bannerImage = movieData?.backdrop || movie.backdrop;
    const posterImage = movieData?.poster || movie.poster;
    const dramaInsight = DRAMA_INSIGHTS[movie.title];

    useEffect(() => {
        if (!isMobile && trailer && !showTrailer && !hasClosedTrailer) {
            timerRef.current = setInterval(() => {
                setCountdown(prev => {
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
                                    <img
                                        src={bannerImage}
                                        alt={`${movie.title} banner`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center"
                                        style={{ backgroundColor: COLORS.bgCard }}
                                    >
                                        <Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textDisabled }} />
                                    </div>
                                )}
                                <div
                                    className="absolute inset-0 z-10"
                                    style={{
                                        background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${COLORS.bgPrimary}80 85%, ${COLORS.bgPrimary} 100%)`
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
                                            border: `2px sm:border-3 solid ${COLORS.textPrimary}`,
                                            color: COLORS.textPrimary
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            backgroundColor: `${COLORS.accent}DD`,
                                            borderColor: COLORS.accent
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
                                        color: COLORS.accent
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
                                <img
                                    src={posterImage}
                                    alt={`${movie.title} poster`}
                                    className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-2xl"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center rounded-lg sm:rounded-xl shadow-2xl"
                                    style={{ backgroundColor: COLORS.bgCard }}
                                >
                                    <Film className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: COLORS.textDisabled }} />
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
                            {DRAMA_TAGS[movie.title]?.tags.map((tag, index) => (
                                <motion.span
                                    key={tag}
                                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm flex items-center gap-1 sm:gap-1.5 flex-shrink-0"
                                    style={{ 
                                        backgroundColor: `${DRAMA_TAGS[movie.title].color}30`,
                                        border: `1px solid ${DRAMA_TAGS[movie.title].color}80`,
                                        color: COLORS.textPrimary 
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9 + (index * 0.08), duration: 0.4 }}
                                >
                                    <span className="text-sm sm:text-base">{DRAMA_TAGS[movie.title].symbol}</span>
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
                                    <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} />
                                </motion.div>
                                
                                <div className="min-w-0 flex-1">
                                    <h2 
                                        className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight"
                                        style={{ color: COLORS.accent }}
                                    >
                                        Why This is Essential Drama
                                    </h2>
                                    <p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>
                                        Expert Analysis
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
                                    {dramaInsight}
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
        </motion.div>
    );
};

const SmartBackButton = () => {
    const handleBackClick = () => {
        if (typeof window !== 'undefined') window.location.href = '/collection/best-drama-movies-on-netflix';
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
            onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}
        >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} />
            <span className="font-medium" style={{ color: COLORS.accent }}>Back to Netflix Dramas</span>
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
                        Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span>
                    </p>
                    <p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of Netflix drama cinema</p>
                </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span>
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
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]">
        <div
            className="w-full h-full bg-repeat"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
            }}
        />
    </div>
);

const DramaBreadcrumb = ({ movie }) => (
    <motion.nav
        className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4"
        style={{ borderBottom: `1px solid ${COLORS.borderLight}` }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link
                href="/collection/best-drama-movies-on-netflix"
                className="transition-all duration-300 truncate"
                style={{ color: COLORS.textMuted }}
                onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
                onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}
            >
                Best Drama Movies on Netflix
            </Link>
            <ChevronRight size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled }} />
            <span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.title}</span>
        </div>
    </motion.nav>
);

const DramaMoviePage = ({ movie }) => {
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
            sessionStorage.setItem('fromDramaCollection', 'true');
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

    const trailer = movieData?.videos?.results?.find(
        video => video.type === 'Trailer' && video.site === 'YouTube'
    );

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}>
                <div className="text-center">
                    <div
                        className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4"
                        style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}
                    ></div>
                    <p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{movie.title} ({movie.year}) - {movie.genre} Drama Film | Filmiway</title>
                <meta
                    name="description"
                    content={`${movie.title} (${movie.year}) - ${movie.synopsis.substring(0, 150)}...`}
                />
                <link rel="canonical" href={`https://filmiway.com/movies/netflix/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            </Head>
            <SubtleFilmGrain />
            <div className="absolute inset-0">
                <CinematicBackground />
            </div>
            <SmartBackButton />
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                <DramaBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
                    <motion.div
                        id="watch"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6"
                    >
                        <MovieDetailsSection 
    movie={{
        ...movie,
        Title: movie.title  // ✅ Map lowercase to uppercase
    }} 
    fromDramaCollection={true} 
/>

                    </motion.div>
                    <div className="px-3 sm:px-4 lg:px-6">
                        <AuthorCreditSection />
                        <TMDBAttribution />
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = DRAMA_MOVIES.map((movie) => ({
        params: { id: movie.imdbID }
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const movie = DRAMA_MOVIES.find(m => m.imdbID === params.id);
    if (!movie) return { notFound: true };
    return { props: { movie } };
}

export default DramaMoviePage;
