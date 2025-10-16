// pages/movies/survival/[id].js - BEST SYMBOLS VERSION ✅
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Star, Clock, Award, Mountain, User, Twitter, Hash, Send } from 'lucide-react';

import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from '../../../utils/survivalMovieData';

const COLORS = {
  accent: '#EAB308', accentLight: '#FDE047', bgPrimary: '#0B0B0C', bgCard: 'rgba(55, 65, 81, 0.3)',
  textPrimary: '#FFFFFF', textSecondary: '#D1D5DB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.2)', borderLight: 'rgba(107, 114, 128, 0.2)',
};

const MOVIE_YEARS = {
    '127 Hours': '2010', 'Society of the Snow': '2023', 'Cast Away': '2000', 'The Revenant': '2015',
    'The Martian': '2015', 'The Impossible': '2012', 'Jungle': '2017', 'Apocalypto': '2006',
    '13 Lives': '2022', 'Unbroken': '2014'
};

const MOVIE_DATA_BY_TITLE = {
    '127 Hours': { imdbRating: 7.5, genre: 'Endurance Survival', director: 'Danny Boyle', survivalConnection: '127 Hours represents the absolute peak of human endurance. Trapped alone with a boulder crushing his arm, Aron Ralston\'s choice between dying slowly or cutting off his own arm is the most visceral survival decision ever filmed.' },
    'Society of the Snow': { imdbRating: 7.8, genre: 'Disaster Group Survival', director: 'J.A. Bayona', survivalConnection: 'Society of the Snow shows survival at its most morally complex. Stranded in sub-zero mountains, these survivors faced not just freezing cold but the impossible choice of eating their deceased friends to survive for 72 days.' },
    'Cast Away': { imdbRating: 7.8, genre: 'Isolation Survival', director: 'Robert Zemeckis', survivalConnection: 'Cast Away is the definitive isolation survival film. Chuck Noland\'s four-year ordeal explores not just physical survival but the psychological battle against crushing loneliness where mental survival is as critical as physical endurance.' },
    'The Revenant': { imdbRating: 8.0, genre: 'Frontier Wilderness', director: 'Alejandro G. Iñárritu', survivalConnection: 'The Revenant is raw, brutal wilderness survival at its most unforgiving. After being savagely mauled by a grizzly and left to die, Hugh Glass crawls and fights through 200 miles of frozen frontier fueled by pure rage and determination.' },
    'The Martian': { imdbRating: 8.0, genre: 'Sci-Fi Survival', director: 'Ridley Scott', survivalConnection: 'The Martian proves survival isn\'t just about enduring - it\'s about problem-solving with wit and science. Mark Watney turns a barren planet into a farm using botany, chemistry, and sheer genius. It\'s survival through intelligence and humor.' },
    'The Impossible': { imdbRating: 7.5, genre: 'Natural Disaster', director: 'J.A. Bayona', survivalConnection: 'The Impossible captures nature\'s sudden, overwhelming power. When the 2004 tsunami strikes, a family is torn apart by walls of water. Survival means not just living but refusing to give up hope of reunion against impossible odds.' },
    'Jungle': { imdbRating: 6.7, genre: 'Amazon Survival', director: 'Greg McLean', survivalConnection: 'Jungle is survival horror in the world\'s most hostile environment. Lost in the Bolivian rainforest for 19 days, Yossi fights off starvation, infections, jaguars, and hallucinations. The Amazon slowly breaks you down with insects, disease, and psychological terror.' },
    'Apocalypto': { imdbRating: 7.8, genre: 'Chase/Tribal Survival', director: 'Mel Gibson', survivalConnection: 'Apocalypto is relentless chase survival - primal, violent, and visceral. Racing through dense jungle with hunters at his heels, Jaguar Paw turns every trap and weapon into a tool for staying alive. This is survival as pure instinct - run, fight, or die.' },
    '13 Lives': { imdbRating: 7.8, genre: 'Rescue Survival', director: 'Ron Howard', survivalConnection: '13 Lives is survival through collective human heroism. Twelve boys and their coach trapped in a flooded Thai cave face certain death. Survival depends on others - elite divers risking everything to navigate impossible underwater passages.' },
    'Unbroken': { imdbRating: 7.2, genre: 'War Survival', director: 'Angelina Jolie', survivalConnection: 'Unbroken is survival across multiple nightmares. Louis Zamperini endures 47 days lost at sea followed by brutal POW torture. This is survival defined by unbreakable spirit - facing starvation, abuse, and hopelessness while refusing to surrender dignity or faith.' }
};

// 🔥 BEST SURVIVAL SYMBOLS - MOST VISUALLY APPEALING
const SURVIVAL_TAGS = {
    '127 Hours': { tags: ['Mountain', 'Solo Survival', 'Self-Amputation'], symbol: '⛰️', color: '#8B4513' },
    'Society of the Snow': { tags: ['Mountain', 'Group Survival', 'Extreme Cold'], symbol: '🏔️', color: '#87CEEB' },
    'Cast Away': { tags: ['Island', 'Solo Survival', 'Isolation'], symbol: '🏝️', color: '#F4A460' },
    'The Revenant': { tags: ['Forest', 'Wilderness', 'Revenge'], symbol: '🐻', color: '#228B22' },
    'The Martian': { tags: ['Space', 'Solo Survival', 'Science'], symbol: '🚀', color: '#FF4500' },
    'The Impossible': { tags: ['Ocean', 'Tsunami', 'Family'], symbol: '🌊', color: '#006994' },
    'Jungle': { tags: ['Rainforest', 'Solo Survival', 'Wildlife'], symbol: '🌴', color: '#006400' },
    'Apocalypto': { tags: ['Jungle', 'Chase', 'Ancient'], symbol: '🏹', color: '#8B6914' },
    '13 Lives': { tags: ['Cave', 'Underwater', 'Rescue'], symbol: '💧', color: '#4B0082' },
    'Unbroken': { tags: ['Ocean', 'War', 'POW Camp'], symbol: '⚓', color: '#000080' }
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
    const survivalConnection = correctData?.survivalConnection || `${movie.Title} showcases extraordinary human endurance and the will to survive against impossible odds.`;

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
                                {bannerImage ? (
                                    <img src={bannerImage} alt={`${movie.Title} banner`} className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard }}>
                                        <Mountain className="w-24 h-24" style={{ color: COLORS.textDisabled }} />
                                    </div>
                                )}
                                <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 70%, ${COLORS.bgPrimary}80 90%, ${COLORS.bgPrimary} 100%)` }} />
                            </div>
                            {trailer && (
                                <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                                    <motion.button onClick={handlePlayClick} className="p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `3px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}>
                                        <Play className="w-8 h-8 ml-1" />
                                    </motion.button>
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
                            {posterImage ? (
                                <img src={posterImage} alt={`${movie.Title} poster`} className="w-full h-full object-cover rounded-xl shadow-2xl" onError={(e) => e.target.style.display = 'none'} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center rounded-xl shadow-2xl" style={{ backgroundColor: COLORS.bgCard }}>
                                    <Mountain className="w-16 h-16" style={{ color: COLORS.textDisabled }} />
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div className="flex-1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
                        <motion.div className="flex flex-wrap gap-2 mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
                            {SURVIVAL_TAGS[movie.Title]?.tags.map((tag, index) => (
                                <motion.span
                                    key={tag}
                                    className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5"
                                    style={{ 
                                        backgroundColor: `${SURVIVAL_TAGS[movie.Title].color}30`,
                                        border: `1px solid ${SURVIVAL_TAGS[movie.Title].color}80`,
                                        color: COLORS.textPrimary 
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9 + (index * 0.08), duration: 0.4 }}
                                >
                                    <span className="text-base">{SURVIVAL_TAGS[movie.Title].symbol}</span>
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                        
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
                                    <Award className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: COLORS.accent }} />
                                </motion.div>
                                
                                <div>
                                    <h2 
                                        className="text-base sm:text-xl lg:text-2xl font-bold"
                                        style={{ color: COLORS.accent }}
                                    >
                                        Why This is a Top Survival Film
                                    </h2>
                                    <p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
                                        Expert Analysis
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
                                    {survivalConnection}
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
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/best-survival-movies'; };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-4 h-4" style={{ color: COLORS.accent }} /><span className="text-sm font-medium" style={{ color: COLORS.accent }}>Back to Survival</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-8 mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3"><User className="w-5 h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of survival cinema</p></div></div>
            <div className="flex items-center gap-4"><span className="text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-4 h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const SurvivalBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-8 px-4 sm:px-6 pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-3 text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/best-survival-movies" className="transition-all duration-300" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Best Survival Movies</Link>
            <ChevronRight size={16} style={{ color: COLORS.textDisabled }} /><span className="font-medium" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

const SurvivalMoviePage = ({ movie }) => {
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

    useEffect(() => { if (typeof window !== 'undefined') { sessionStorage.setItem('fromSurvivalCollection', 'true'); sessionStorage.removeItem('fromInceptionCollection'); sessionStorage.removeItem('fromMementoCollection'); sessionStorage.removeItem('fromShutterIslandCollection'); } }, []);
    useEffect(() => { const handleScroll = () => setScrollY(window.scrollY); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const currentMovieGenre = correctData?.genre || movie.genre || movieInfo?.genre || 'Survival';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    if (isLoading) return (<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}><div className="text-center"><div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div><p style={{ color: COLORS.textMuted }}>Loading...</p></div></div>);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{movie.Title} ({currentMovieYear}) - {currentMovieGenre} Survival Film | Filmiway</title>
                <meta name="description" content={`${movie.Title} ({currentMovieYear}) - A gripping ${currentMovieGenre?.toLowerCase()} survival film. Analysis, ratings & where to stream.`} />
                <link rel="canonical" href={`https://filmiway.com/movies/survival/${movie.imdbID}`} />
            </Head>
            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            <div className="relative z-10 pt-12 sm:pt-16">
                <SurvivalBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-20 sm:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
                    <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-12 px-4 sm:px-6 lg:px-8">
                        <MovieDetailsSection movie={movie} fromSurvivalCollection={true} />
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

export default SurvivalMoviePage;
