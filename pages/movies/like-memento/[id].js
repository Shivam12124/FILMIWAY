// pages/movies/like-memento/[id].js - UPGRADED WITH PREMIUM DESIGN ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, ArrowLeft, Zap, User, Twitter, Hash, Send } from 'lucide-react';

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
    'Shutter Island': { imdbRating: 8.2, genre: 'Psychological Thriller', director: 'Martin Scorsese', mementoConnection: 'Like Memento, Shutter Island explores unreliable memory and fragmented identity through psychological manipulation. Both films feature protagonists who cannot trust their own memories.' },
    'Mr. Nobody': { imdbRating: 7.7, genre: 'Sci-Fi Drama', director: 'Jaco Van Dormael', mementoConnection: 'Like Memento, Mr. Nobody questions the nature of memory and identity through non-linear storytelling. Both films explore how memory shapes our perception of reality.' },
    'Primer': { imdbRating: 6.9, genre: 'Sci-Fi Thriller', director: 'Shane Carruth', mementoConnection: 'Like Memento, Primer uses complex timeline structure to create confusion about sequence of events. Both films require multiple viewings to fully understand the narrative.' },
    'Synecdoche, New York': { imdbRating: 7.5, genre: 'Psychological Drama', director: 'Charlie Kaufman', mementoConnection: 'Like Memento, Synecdoche explores fragmented identity and the unreliability of memory and perception. Both films deal with characters losing their sense of self through narrative complexity.' },
    'Mulholland Drive': { imdbRating: 7.9, genre: 'Psychological Mystery', director: 'David Lynch', mementoConnection: 'Like Memento, Mulholland Drive uses non-linear narrative to blur the line between reality and delusion. Both films feature protagonists struggling with memory loss and fragmented identity.' },
    'Predestination': { imdbRating: 7.4, genre: 'Sci-Fi Thriller', director: 'Michael Spierig, Peter Spierig', mementoConnection: 'Like Memento, Predestination explores identity confusion through a temporal loop structure. Both films reveal information gradually to create confusion about the protagonist\'s true identity.' },
    'Coherence': { imdbRating: 7.2, genre: 'Sci-Fi Thriller', director: 'James Ward Byrkit', mementoConnection: 'Like Memento, Coherence creates confusion about reality through memory inconsistencies. Both films leave viewers questioning what actually happened.' },
    'Donnie Darko': { imdbRating: 8.0, genre: 'Sci-Fi Mystery', director: 'Richard Kelly', mementoConnection: 'Like Memento, Donnie Darko explores mental confusion and the unreliability of perception. Both films feature protagonists who cannot trust their understanding of reality.' },
    'Enemy': { imdbRating: 6.9, genre: 'Psychological Thriller', director: 'Denis Villeneuve', mementoConnection: 'Like Memento, Enemy explores identity crisis and the fragmentation of self. Both films feature protagonists who cannot trust their own memories or perceptions.' },
    'The Fountain': { imdbRating: 7.2, genre: 'Sci-Fi Drama', director: 'Darren Aronofsky', mementoConnection: 'Like Memento, The Fountain deals with memory, loss, and the nature of time and identity. Both films explore how memory and loss shape our understanding of self.' },
    'Memento': { imdbRating: 8.4, genre: 'Neo-Noir Thriller', director: 'Christopher Nolan', mementoConnection: 'The definitive memory-loss thriller that inspired this entire collection of mind-bending films exploring fragmented identity, unreliable narration, and the nature of memory itself.' },
    'Inception': { imdbRating: 8.8, genre: 'Sci-Fi Thriller', director: 'Christopher Nolan', mementoConnection: 'Like Memento, Inception explores the unreliable nature of memory and perception through complex layered narrative structure and psychological depth.' },
    'The Usual Suspects': { imdbRating: 8.5, genre: 'Crime Thriller', director: 'Bryan Singer', mementoConnection: 'Like Memento, The Usual Suspects builds to a shocking revelation about identity and memory through unreliable narration and masterful psychological manipulation.' }
};

const OptimizedBanner = ({ movie, movieData, trailer, isMobile }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const timerRef = useRef(null);

    const bannerImage = movieData?.backdrop_path ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}` : `https://via.placeholder.com/1920x600/0B0B0C/444444?text=`;
    const posterImage = movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : `https://via.placeholder.com/300x450/1f2937/A855F7?text=${encodeURIComponent(movie.Title)}`;
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const mementoConnection = correctData?.mementoConnection || `Like Memento, ${movie.Title} explores themes of memory and identity through innovative storytelling.`;

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
        <motion.div className="relative w-full overflow-hidden mb-8 mx-4 sm:mx-6 lg:mx-8 rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <AnimatePresence mode="wait">
                    {showTrailer && trailer ? (
                        <motion.div key="trailer" className="absolute inset-0 rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                            <button onClick={handleCloseTrailer} className="absolute top-6 right-6 p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}><X className="w-5 h-5" /></button>
                        </motion.div>
                    ) : (
                        <motion.div key="image" className="absolute inset-0 rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <div className="relative w-full h-full">
                                <Image src={bannerImage} alt={`${movie.Title} banner`} fill priority sizes="100vw" className="object-cover" quality={90} unoptimized={bannerImage.includes('placeholder')} />
                                <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 70%, ${COLORS.bgPrimary}80 90%, ${COLORS.bgPrimary} 100%)` }} />
                            </div>
                            {trailer && (
                                <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                                    <motion.button onClick={handlePlayClick} className="p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `3px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-8 h-8 ml-1" /></motion.button>
                                </motion.div>
                            )}
                            {!isMobile && trailer && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                                <motion.div className="absolute top-8 right-8 backdrop-blur-md rounded-full px-4 py-2 border z-30" style={{ backgroundColor: `${COLORS.bgPrimary}CC`, borderColor: `${COLORS.accent}66`, color: COLORS.accent }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium"><div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }}></div>Trailer in {countdown}s</div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative px-4 sm:px-6 lg:px-8 py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
                <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                    <motion.div className="flex-shrink-0 relative" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
                        <div className="relative w-32 sm:w-56 md:w-64 lg:w-80" style={{ aspectRatio: '2/3' }}>
                            <Image src={posterImage} alt={`${movie.Title} poster`} fill sizes="(max-width: 640px) 128px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px" className="object-cover rounded-xl shadow-2xl" quality={85} unoptimized={posterImage.includes('placeholder')} />
                        </div>
                    </motion.div>

                    <motion.div className="flex-1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
                        <motion.div 
                            className="relative rounded-2xl overflow-hidden p-6 sm:p-8 backdrop-blur-sm"
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
                                className="absolute top-0 left-0 right-0 h-1"
                                style={{ 
                                    background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` 
                                }}
                            />
                            
                            <div className="flex items-center gap-3 mb-5">
                                <motion.div 
                                    className="p-2.5 rounded-xl"
                                    style={{ 
                                        background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`,
                                        border: `1px solid ${COLORS.accent}40`
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: COLORS.accent }} />
                                </motion.div>
                                
                                <div>
                                    <h2 
                                        className="text-base sm:text-xl lg:text-2xl font-bold"
                                        style={{ color: COLORS.accent }}
                                    >
                                        Why Similar to Memento
                                    </h2>
                                    <p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
                                        Memory & Identity Connection
                                    </p>
                                </div>
                            </div>

                            <div className="relative pl-6 border-l-2" style={{ borderColor: `${COLORS.accent}40` }}>
                                <motion.div 
                                    className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                                    style={{ backgroundColor: COLORS.accent }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                
                                <p 
                                    className="text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
                                    style={{ color: COLORS.textSecondary, lineHeight: '1.9' }}
                                >
                                    {mementoConnection}
                                </p>
                            </div>

                            <motion.div 
                                className="mt-6 h-1 rounded-full"
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
            window.location.href = '/collection/movies-like-memento';
        }
    };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-4 h-4" style={{ color: COLORS.accent }} /><span className="text-sm font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-8 mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3"><User className="w-5 h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of memory-loss thrillers</p></div></div>
            <div className="flex items-center gap-4"><span className="text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-4 h-4" /></button>))}</div></div>
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

const MementoBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-8 px-4 sm:px-6 pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-3 text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/movies-like-memento" className="transition-all duration-300" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Memento Collection</Link>
            <ChevronRight size={16} style={{ color: COLORS.textDisabled }} /><span className="font-medium" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

const MementoMoviePage = ({ movie }) => {
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

    useEffect(() => { if (typeof window !== 'undefined') { sessionStorage.setItem('fromMementoCollection', 'true'); sessionStorage.removeItem('fromInceptionCollection'); sessionStorage.removeItem('fromShutterIslandCollection'); sessionStorage.removeItem('fromSurvivalCollection'); } }, []);
    useEffect(() => { const handleScroll = () => setScrollY(window.scrollY); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.Year || 'Unknown';
    const currentMovieGenre = correctData?.genre || movie.Genre || movieInfo?.genre || 'Thriller';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    if (isLoading) return (<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}><div className="text-center"><div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div><p style={{ color: COLORS.textMuted }}>Loading...</p></div></div>);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{movie.Title} ({currentMovieYear}) - {currentMovieGenre} Like Memento | Filmiway</title>
                <meta name="description" content={`${movie.Title} (${currentMovieYear}) - A compelling ${currentMovieGenre?.toLowerCase()} like Memento. Analysis, ratings & where to stream.`} />
                <link rel="canonical" href={`https://filmiway.com/movies/like-memento/${movie.imdbID}`} />
            </Head>
            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            <div className="relative z-10 pt-12 sm:pt-16">
                <MementoBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-20 sm:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
                    <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-12 px-4 sm:px-6 lg:px-8">
                        <MovieDetailsSection movie={movie} fromMementoCollection={true} />
                    </motion.div>
                    <div className="px-4 sm:px-6 lg:px-8"><AuthorCreditSection /><TMDBAttribution /></div>
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

export default MementoMoviePage;
