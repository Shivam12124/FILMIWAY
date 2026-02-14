// pages/movies/like-shutter-island/[id].js - MOBILE-OPTIMIZED & BOT-READY ✅
// VISUALS: Yellow/Amber Theme (Mind-Bending), Minimalist Banner
// SCHEMA: Maximalist (Hidden Intensity, DNA, and FAQs for Bots)

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, AlertTriangle, User, Twitter, Hash, Send } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT DATA
import { 
  COMPLETE_MOVIE_DATABASE, 
  COMPLETE_MOVIE_DATA,
  SENSITIVE_TIMELINES 
} from '../../../utils/movieData';

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
    'Primer': { imdbRating: 6.9, genre: 'Sci-Fi Thriller', director: 'Shane Carruth', shutterConnection: 'Like Shutter Island, Primer creates paranoia through unreliable perception and reality distortion.' },
    'Synecdoche, New York': { imdbRating: 7.5, genre: 'Psychological Drama', director: 'Charlie Kaufman', shutterConnection: 'Like Shutter Island, Synecdoche explores mental deterioration and the fragmentation of identity.' },
    'Mulholland Drive': { imdbRating: 7.9, genre: 'Psychological Mystery', director: 'David Lynch', shutterConnection: 'Like Shutter Island, Mulholland Drive uses fragmented identity and memory loss to create a haunting psychological mystery.' },
    'Predestination': { imdbRating: 7.4, genre: 'Sci-Fi Thriller', director: 'Michael & Peter Spierig', shutterConnection: 'Like Shutter Island, Predestination gradually reveals the truth about identity confusion through careful psychological manipulation.' },
    'Coherence': { imdbRating: 7.2, genre: 'Sci-Fi Thriller', director: 'James Ward Byrkit', shutterConnection: 'Like Shutter Island, Coherence creates psychological tension through reality confusion and paranoia.' },
    'Donnie Darko': { imdbRating: 8.0, genre: 'Sci-Fi Mystery', director: 'Richard Kelly', shutterConnection: 'Like Shutter Island, Donnie Darko explores psychological instability and mental illness through atmospheric storytelling.' },
    'Enemy': { imdbRating: 6.9, genre: 'Psychological Thriller', director: 'Denis Villeneuve', shutterConnection: 'Like Shutter Island, Enemy creates psychological horror through identity crisis and the complete breakdown of self-recognition.' },
    'The Fountain': { imdbRating: 7.2, genre: 'Sci-Fi Drama', director: 'Darren Aronofsky', shutterConnection: 'Like Shutter Island, The Fountain deals with psychological trauma, loss, and the cyclical nature of memory and identity.' },
    'Mr. Nobody': { imdbRating: 7.8, genre: 'Sci-Fi Drama', director: 'Jaco Van Dormael', shutterConnection: 'Like Shutter Island, Mr. Nobody explores fragmented memory and multiple realities through psychological complexity.' },
    'The Usual Suspects': { imdbRating: 8.5, genre: 'Crime Thriller', director: 'Bryan Singer', shutterConnection: 'Like Shutter Island, The Usual Suspects builds to a shocking identity revelation through unreliable narration.' },
    'Shutter Island': { imdbRating: 8.2, genre: 'Psychological Thriller', director: 'Martin Scorsese', shutterConnection: 'The definitive psychological thriller that inspired this entire collection of mind-bending films.' },
    'Memento': { imdbRating: 8.4, genre: 'Neo-Noir Thriller', director: 'Christopher Nolan', shutterConnection: 'Like Shutter Island, Memento explores psychological manipulation and the unreliable nature of memory.' },
    'Inception': { imdbRating: 8.8, genre: 'Sci-Fi Thriller', director: 'Christopher Nolan', shutterConnection: 'Like Shutter Island, Inception explores psychological complexity through reality questioning.' }
};

// ✅ FAQS FOR SCHEMA
const SHUTTER_ISLAND_COLLECTION_FAQS = {
    'Shutter Island': [
        { question: "Is Teddy Daniels crazy?", answer: "Yes. He is actually Andrew Laeddis, a dangerous patient who created a fictional persona to escape the guilt of murdering his wife." },
        { question: "Did the government experiment on them?", answer: "No. The lighthouse was empty. The 'experiments' were a delusion created by Andrew's mind to justify his conspiracy theories." }
    ],
    'Mulholland Drive': [
        { question: "Who is the cowboy?", answer: "He represents the 'gatekeeper' of Hollywood, forcing reality back onto the protagonist's dream life." }
    ],
    'Donnie Darko': [
        { question: "Is Frank real?", answer: "Frank is a 'Manipulated Dead'—a ghost from a tangent universe guiding Donnie to save the world." }
    ]
};

const getTMDBImage = (path, size = 'w1280') => 
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

// ✅ OPTIMIZED BANNER (Fixed Metric: Mind-Bending Index)
const OptimizedBanner = ({ movie, movieData, trailer, isMobile }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const timerRef = useRef(null);

    const bannerImage = movieData?.backdrop_path ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}` : null;
    const posterImage = movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : null;
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const shutterConnection = correctData?.shutterConnection || `Like Shutter Island, ${movie.Title} explores themes of paranoia and identity.`;
    
    // ✅ CHANGED METRIC: Uses mindBendingIndex (Default 88)
    const mindScore = COMPLETE_MOVIE_DATA[movie.tmdbId]?.mindBendingIndex || 88;

    const mobileHeroCSS = `
    @media (max-width: 767px) {
      .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
      .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
      .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
      .mobile-shut-card { background: linear-gradient(135deg, #1a1600 0%, #0f0f15 100%); border-radius: 12px; box-shadow: 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #EAB308; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
      .mobile-shut-row { display: flex; align-items: flex-start; gap: 7px; }
      .mobile-shut-icon { min-width: 24px; min-height: 24px; color: #FDE047; margin-top: 2px; }
      .mobile-shut-title { font-size: 15px; font-weight: bold; color: #FDE047; margin-bottom: 1px; line-height: 1.12; }
      .mobile-shut-desc { font-size: 12.3px; color: #ededed; line-height: 1.36; margin-top: 2px; }
    }`;

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
        <motion.div className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <style>{mobileHeroCSS}</style>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
                <AnimatePresence mode="wait">
                    {showTrailer && trailer ? (
                        <motion.div key="trailer" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                            <button onClick={handleCloseTrailer} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}><X className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                        </motion.div>
                    ) : (
                        <motion.div key="image" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <div className="relative w-full h-full">
                                {bannerImage ? <Image src={bannerImage} alt={`${movie.Title} banner`} fill priority sizes="100vw" className="object-cover" quality={90} /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard }}><AlertTriangle style={{ color: COLORS.textMuted }} /></div>}
                                <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${COLORS.bgPrimary}80 85%, ${COLORS.bgPrimary} 100%)` }} />
                            </div>
                            {trailer && (
                                <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                                    <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" /></motion.button>
                                </motion.div>
                            )}
                            {!isMobile && trailer && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                                <motion.div className="absolute top-6 sm:top-8 right-6 sm:right-8 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border z-30" style={{ backgroundColor: `${COLORS.bgPrimary}CC`, borderColor: `${COLORS.accent}66`, color: COLORS.accent }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }}></div>Trailer in {countdown}s</div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            {isMobile ? (
                <div className="mobile-hero-row">
                    <div className="mobile-hero-poster">{posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} width={320} height={480} className="w-full h-auto" priority /> : <div style={{ background: COLORS.bgCard, width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AlertTriangle style={{ color: COLORS.textMuted }} /></div>}</div>
                    <div className="mobile-shut-card">
                        <div className="mobile-shut-row"><AlertTriangle className="mobile-shut-icon" /><div><div className="mobile-shut-title">Mind-Bending Intensity</div></div></div>
                        <div className="mobile-shut-desc"><strong>{mindScore}/100</strong> - {shutterConnection.substring(0, 80)}...</div>
                    </div>
                </div>
            ) : (
                <div className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                        <motion.div className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
                            <div className="relative" style={{ aspectRatio: '2/3' }}>
                                {posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} fill sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px" className="object-cover rounded-lg sm:rounded-xl shadow-2xl" quality={85} /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard, borderRadius: '12px' }}><AlertTriangle style={{ color: COLORS.textMuted }} /></div>}
                            </div>
                        </motion.div>
                        <motion.div className="flex-1 w-full min-w-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
                            <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(15, 15, 20, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                    <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                                    <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>Why This Bends Reality</h2><p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>Mind-Bending Intensity: {mindScore}/100</p></div>
                                </div>
                                <div className="relative pl-4 sm:pl-6 border-l-2" style={{ borderColor: `${COLORS.accent}40` }}>
                                    <motion.div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: COLORS.accent }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-normal break-words" style={{ color: COLORS.textSecondary, lineHeight: '1.8' }}>{shutterConnection}</p>
                                </div>
                                <motion.div className="mt-4 sm:mt-6 h-0.5 sm:h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${COLORS.accent}60, transparent)`, width: '40%' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 0.8 }} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const SmartBackButton = () => {
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/movies-like-shutter-island'; };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of psychological thrillers</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const ShutterIslandBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/movies-like-shutter-island" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Shutter Island Collection</Link>
            <ChevronRight size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

// ✅ GENERATE SCHEMA
const generateMovieSchema = (movie, movieData, currentMovieYear, collectionSlug) => {
  const data = COMPLETE_MOVIE_DATA?.[movie.tmdbId] || {};
  const sensitiveData = SENSITIVE_TIMELINES?.[movie.tmdbId] || {};
  const faqs = SHUTTER_ISLAND_COLLECTION_FAQS?.[movie.Title] || [];

  const fullDescription = `
    ${data?.synopsis || movie.description || "A compelling psychological thriller."}
    
    --- ANALYSIS ---
    [FILMIWAY METRICS] Mind-Bending Intensity: ${data?.mindBendingIndex || 88}/100.
    [CONTENT ADVISORY] ${sensitiveData?.scenes ? sensitiveData.scenes.map(s => `${s.type} (${s.severity})`).join(', ') : 'None listed'}.
  `.replace(/\s+/g, ' ').trim();

  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
    "description": fullDescription, 
    "datePublished": currentMovieYear,
    "image": movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : undefined,
    "director": { "@type": "Person", "name": MOVIE_DATA_BY_TITLE[movie.Title]?.director || "Unknown" },
    "url": `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`,
    "author": { "@type": "Organization", "name": "Filmiway", "url": "https://filmiway.com" }
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
  } : null;

  return { movieSchema, faqSchema };
};

const ShutterIslandMoviePage = ({ movie, tmdbData }) => {
    const router = useRouter();
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => { if (typeof window !== 'undefined') { sessionStorage.setItem('fromShutterIslandCollection', 'true'); } }, []);

    const movieData = tmdbData;
    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.Year || 'Unknown';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    
    const collectionSlug = router.pathname.split('/')[2];
    const canonicalUrl = `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`;

    const { movieSchema, faqSchema } = generateMovieSchema(movie, movieData, currentMovieYear, collectionSlug);

    // ✅ SEO FIX: Robust Strings
    const movieTitle = movie?.Title || 'Untitled Movie';
    const cleanSEOTitle = `${movieTitle} (${currentMovieYear}) - Movies Like Shutter Island | Filmiway`;
    const cleanSEODesc = `${movieTitle} (${currentMovieYear}) - A compelling psychological thriller like Shutter Island.`;

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                {/* ✅ HYDRATION BUG RESOLVED */}
                <title>{cleanSEOTitle}</title>
                <meta name="description" content={cleanSEODesc} />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                
                {/* ✅ SCHEMA INJECTION */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
                {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

                <meta property="og:title" content={cleanSEOTitle} />
                <meta property="og:description" content={cleanSEODesc} />
                <meta property="og:type" content="video.movie" />
                <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cleanSEOTitle} />
                <meta name="twitter:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                
                {/* ✅ HIDDEN H1 FOR SEO PARITY */}
                <h1 className="sr-only">{cleanSEOTitle}</h1>

                <ShutterIslandBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
                    
                    {/* ✅ BOT-FRIENDLY FIX APPLIED: NO DELAY (0.5s duration) ✅ */}
                    <motion.div id="watch" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 0.5 }} className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6">
                        <MovieDetailsSection movie={movie} fromShutterIslandCollection={true} />
                    </motion.div>
                    
                    <div className="px-3 sm:px-4 lg:px-6">
                        <InternalCollectionsSection currentSlug="movies-like-shutter-island" />
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
    const movie = COMPLETE_MOVIE_DATABASE.find(m => m.imdbID === params.id);
    if (!movie) return { notFound: true };

    try {
        const tmdbResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`
        );
        const tmdbData = tmdbResponse.ok ? await tmdbResponse.json() : null;

        return { props: { movie, tmdbData } };
    } catch (error) {
        console.error('Error fetching TMDB data:', error);
        return { props: { movie, tmdbData: null } };
    }
}

export default ShutterIslandMoviePage;