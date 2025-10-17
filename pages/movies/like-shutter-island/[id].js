// pages/movies/like-shutter-island/[id].js - MOBILE-OPTIMIZED VERSION ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, AlertTriangle, User, Twitter, Hash, Send } from 'lucide-react';

import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from '../../../utils/movieData';

const COLORS = {
  accent: '#EAB308', accentLight: '#FDE047', bgPrimary: '#0B0B0C', bgCard: 'rgba(55, 65, 81, 0.3)',
  textPrimary: '#FFFFFF', textSecondary: '#D1D5DB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.2)', borderLight: 'rgba(107, 114, 128, 0.2)',
};

const MOVIE_YEARS = {
    'Enemy': '2013', 'Primer': '2004', 'The Fountain': '2006',
    'Synecdoche, New York': '2008', 'Mulholland Drive': '2001',
    'Predestination': '2014', 'Coherence': '2013', 'Donnie Darko': '2001',
    'Mr. Nobody': '2009', 'Shutter Island': '2010', 'Memento': '2000',
    'Inception': '2010', 'The Usual Suspects': '1995'
};

const MOVIE_DATA_BY_TITLE = {
    'Primer': { imdbRating: 6.9, genre: 'Sci-Fi Thriller', director: 'Shane Carruth', shutterConnection: 'Like Shutter Island, Primer creates paranoia through unreliable perception and reality distortion. Both films feature protagonists who cannot trust their understanding of events unfolding around them.' },
    'Synecdoche, New York': { imdbRating: 7.5, genre: 'Psychological Drama', director: 'Charlie Kaufman', shutterConnection: 'Like Shutter Island, Synecdoche explores mental deterioration and the fragmentation of identity through psychological complexity and unreliable narrative structure.' },
    'Mulholland Drive': { imdbRating: 7.9, genre: 'Psychological Mystery', director: 'David Lynch', shutterConnection: 'Like Shutter Island, Mulholland Drive uses fragmented identity and memory loss to create a haunting psychological mystery with shocking revelations about reality.' },
    'Predestination': { imdbRating: 7.4, genre: 'Sci-Fi Thriller', director: 'Michael & Peter Spierig', shutterConnection: 'Like Shutter Island, Predestination gradually reveals the truth about identity confusion through careful psychological manipulation and twisted revelations.' },
    'Coherence': { imdbRating: 7.2, genre: 'Sci-Fi Thriller', director: 'James Ward Byrkit', shutterConnection: 'Like Shutter Island, Coherence creates psychological tension through reality confusion and paranoia, leaving viewers questioning what is real versus illusion.' },
    'Donnie Darko': { imdbRating: 8.0, genre: 'Sci-Fi Mystery', director: 'Richard Kelly', shutterConnection: 'Like Shutter Island, Donnie Darko explores psychological instability and mental illness through atmospheric storytelling and reality distortion.' },
    'Enemy': { imdbRating: 6.9, genre: 'Psychological Thriller', director: 'Denis Villeneuve', shutterConnection: 'Like Shutter Island, Enemy creates psychological horror through identity crisis and the complete breakdown of self-recognition and reality.' },
    'The Fountain': { imdbRating: 7.2, genre: 'Sci-Fi Drama', director: 'Darren Aronofsky', shutterConnection: 'Like Shutter Island, The Fountain deals with psychological trauma, loss, and the cyclical nature of memory and identity through multiple timelines.' },
    'Mr. Nobody': { imdbRating: 7.8, genre: 'Sci-Fi Drama', director: 'Jaco Van Dormael', shutterConnection: 'Like Shutter Island, Mr. Nobody explores fragmented memory and multiple realities through psychological complexity and identity questioning.' },
    'The Usual Suspects': { imdbRating: 8.5, genre: 'Crime Thriller', director: 'Bryan Singer', shutterConnection: 'Like Shutter Island, The Usual Suspects builds to a shocking identity revelation through unreliable narration and masterful psychological manipulation.' },
    'Shutter Island': { imdbRating: 8.2, genre: 'Psychological Thriller', director: 'Martin Scorsese', shutterConnection: 'The definitive psychological thriller that inspired this entire collection of mind-bending films exploring identity crisis, unreliable narration, and shocking revelations about reality.' },
    'Memento': { imdbRating: 8.4, genre: 'Neo-Noir Thriller', director: 'Christopher Nolan', shutterConnection: 'Like Shutter Island, Memento explores psychological manipulation and the unreliable nature of memory through complex narrative structure and identity questioning.' },
    'Inception': { imdbRating: 8.8, genre: 'Sci-Fi Thriller', director: 'Christopher Nolan', shutterConnection: 'Like Shutter Island, Inception explores psychological complexity through reality questioning and the unreliable nature of perception and memory.' }
};

const OptimizedBanner = ({ movie, movieData, trailer, isMobile }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const timerRef = useRef(null);

    const bannerImage = movieData?.backdrop_path ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}` : `https://via.placeholder.com/1920x600/0B0B0C/444444?text=`;
    const posterImage = movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : `https://via.placeholder.com/300x450/1f2937/22C55E?text=${encodeURIComponent(movie.Title)}`;
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const shutterConnection = correctData?.shutterConnection || `Like Shutter Island, ${movie.Title} explores themes of psychological horror and identity through innovative storytelling.`;

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
        <motion.div 
            className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
        >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
                <AnimatePresence mode="wait">
                    {showTrailer && trailer ? (
                        <motion.div key="trailer" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                            <button onClick={handleCloseTrailer} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}>
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div key="image" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <div className="relative w-full h-full">
                                <Image src={bannerImage} alt={`${movie.Title} banner`} fill priority sizes="100vw" className="object-cover" quality={90} unoptimized={bannerImage.includes('placeholder')} />
                                <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${COLORS.bgPrimary}80 85%, ${COLORS.bgPrimary} 100%)` }} />
                            </div>
                            {trailer && (
                                <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                                    <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px sm:border-3 solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}>
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

            <div className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                    <motion.div 
                        className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0" 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="relative" style={{ aspectRatio: '2/3' }}>
                            <Image src={posterImage} alt={`${movie.Title} poster`} fill sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px" className="object-cover rounded-lg sm:rounded-xl shadow-2xl" quality={85} unoptimized={posterImage.includes('placeholder')} />
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
                                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} />
                                </motion.div>
                                
                                <div className="min-w-0 flex-1">
                                    <h2 
                                        className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight"
                                        style={{ color: COLORS.accent }}
                                    >
                                        Why Similar to Shutter Island
                                    </h2>
                                    <p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>
                                        Psychological Thriller Connection
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
                                    {shutterConnection}
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
        if (typeof window !== 'undefined') {
            const currentPosition = sessionStorage.getItem('currentMoviePosition');
            const currentRank = sessionStorage.getItem('currentMovieRank');
            sessionStorage.setItem('returningFromMovie', 'true');
            if (currentPosition) sessionStorage.setItem('returnToPosition', currentPosition);
            if (currentRank) sessionStorage.setItem('returnToRank', currentRank);
            window.location.href = '/collection/movies-like-shutter-island';
        }
    };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of psychological thrillers</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]">
        <div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />
    </div>
);

const ShutterIslandBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/movies-like-shutter-island" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Shutter Island Collection</Link>
            <ChevronRight size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

const ShutterIslandMoviePage = ({ movie }) => {
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

    useEffect(() => { if (typeof window !== 'undefined') { sessionStorage.setItem('fromShutterIslandCollection', 'true'); sessionStorage.removeItem('fromInceptionCollection'); sessionStorage.removeItem('fromMementoCollection'); sessionStorage.removeItem('fromSurvivalCollection'); } }, []);
    useEffect(() => { const handleScroll = () => setScrollY(window.scrollY); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.Year || 'Unknown';
    const currentMovieGenre = correctData?.genre || movie.Genre || movieInfo?.genre || 'Thriller';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    if (isLoading) return (<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}><div className="text-center"><div className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div><p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Loading...</p></div></div>);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{movie.Title} ({currentMovieYear}) - {currentMovieGenre} Like Shutter Island | Filmiway</title>
                <meta name="description" content={`${movie.Title} (${currentMovieYear}) - A compelling ${currentMovieGenre?.toLowerCase()} like Shutter Island. Analysis, ratings & where to stream.`} />
                <link rel="canonical" href={`https://filmiway.com/movies/like-shutter-island/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            </Head>
            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                <ShutterIslandBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
                    <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6">
                        <MovieDetailsSection movie={movie} fromShutterIslandCollection={true} />
                    </motion.div>
                    <div className="px-3 sm:px-4 lg:px-6"><AuthorCreditSection /><TMDBAttribution /></div>
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

export default ShutterIslandMoviePage;
