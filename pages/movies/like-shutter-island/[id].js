// pages/movies/like-shutter-island/[id].js - 💚 FUCKING GREEN EVERYWHERE! NO MORE RED SHIT!
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, Award, ArrowLeft, Brain, Zap, AlertTriangle } from 'lucide-react';

// 🔥 CORRECTED PATHS - GO UP 3 LEVELS FROM pages/movies/like-shutter-island/
import CinematicBackground from '../../../components/CinematicBackground';
import TMDBMoviePoster from '../../../components/TMDBMoviePoster';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// 🔥 CORRECTED PATHS FOR DATA - GO UP 3 LEVELS TO GET TO utils/
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../../../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../../../utils/sensitiveContent';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';

// 🎬 COMPLETE MOVIE DATA WITH SHUTTER ISLAND CONNECTIONS
const MOVIE_DATA_BY_TITLE = {
    'Primer': {
        imdbRating: 6.9,
        genre: 'Sci-Fi Thriller',
        runtime: '77 min',
        director: 'Shane Carruth',
        quote: 'What happens if it actually works?',
        shutterConnection: 'Like Shutter Island, Primer creates paranoia through unreliable perception and reality distortion. Both films feature protagonists who cannot trust their understanding of events unfolding around them.'
    },
    'Synecdoche, New York': {
        imdbRating: 7.5,
        genre: 'Psychological Drama',
        runtime: '124 min',
        director: 'Charlie Kaufman',
        quote: 'Most of your time is spent being dead or not yet born.',
        shutterConnection: 'Like Shutter Island, Synecdoche explores mental deterioration and the fragmentation of identity through psychological complexity and unreliable narrative structure.'
    },
    'Mulholland Drive': {
        imdbRating: 7.9,
        genre: 'Psychological Mystery',
        runtime: '147 min',
        director: 'David Lynch',
        quote: 'I mean I just came here from Deep River, Ontario, and now I\'m in this dream place.',
        shutterConnection: 'Like Shutter Island, Mulholland Drive uses fragmented identity and memory loss to create a haunting psychological mystery with shocking revelations about reality.'
    },
    'Predestination': {
        imdbRating: 7.4,
        genre: 'Sci-Fi Thriller',
        runtime: '97 min',
        director: 'Michael & Peter Spierig',
        quote: 'The snake that eats its own tail, forever and ever.',
        shutterConnection: 'Like Shutter Island, Predestination gradually reveals the truth about identity confusion through careful psychological manipulation and twisted revelations.'
    },
    'Coherence': {
        imdbRating: 7.2,
        genre: 'Sci-Fi Thriller',
        runtime: '89 min',
        director: 'James Ward Byrkit',
        quote: 'This was taken tonight. What? How do you know that? I bought this sweater today.',
        shutterConnection: 'Like Shutter Island, Coherence creates psychological tension through reality confusion and paranoia, leaving viewers questioning what is real versus illusion.'
    },
    'Donnie Darko': {
        imdbRating: 8.0,
        genre: 'Sci-Fi Mystery',
        runtime: '113 min',
        director: 'Richard Kelly',
        quote: 'Destruction is a form of creation.',
        shutterConnection: 'Like Shutter Island, Donnie Darko explores psychological instability and mental illness through atmospheric storytelling and reality distortion.'
    },
    'Enemy': {
        imdbRating: 6.9,
        genre: 'Psychological Thriller',
        runtime: '91 min',
        director: 'Denis Villeneuve',
        quote: 'You never know how your day is gonna turn out.',
        shutterConnection: 'Like Shutter Island, Enemy creates psychological horror through identity crisis and the complete breakdown of self-recognition and reality.'
    },
    'The Fountain': {
        imdbRating: 7.2,
        genre: 'Sci-Fi Drama',
        runtime: '96 min',
        director: 'Darren Aronofsky',
        quote: 'Death is a disease...And there\'s a cure.',
        shutterConnection: 'Like Shutter Island, The Fountain deals with psychological trauma, loss, and the cyclical nature of memory and identity through multiple timelines.'
    },
    'Mr. Nobody': {
        imdbRating: 7.8,
        genre: 'Sci-Fi Drama',
        runtime: '141 min',
        director: 'Jaco Van Dormael',
        quote: 'Each of these lives is the right one! Every path is the right path.',
        shutterConnection: 'Like Shutter Island, Mr. Nobody explores fragmented memory and multiple realities through psychological complexity and identity questioning.'
    },
    'The Usual Suspects': {
        imdbRating: 8.5,
        genre: 'Crime Thriller',
        runtime: '106 min',
        director: 'Bryan Singer',
        quote: 'The greatest trick the devil ever pulled was convincing the world he didn\'t exist.',
        shutterConnection: 'Like Shutter Island, The Usual Suspects builds to a shocking identity revelation through unreliable narration and masterful psychological manipulation.'
    }
};

// 🧠 SHUTTER ISLAND CONNECTION COMPONENT - 💚 FORCE GREEN WITH INLINE STYLES TO KILL THE FUCKING RED!
const ShutterIslandConnectionBadge = ({ movie, correctData }) => (
    <motion.div 
        className="mb-10 p-6 bg-gradient-to-r from-green-600/20 via-emerald-500/15 to-green-600/20 rounded-2xl relative overflow-hidden"
        style={{
            border: '2px solid rgba(34, 197, 94, 0.5) !important',
            boxShadow: '0 0 0 1px rgba(34, 197, 94, 0.2), 0 0 20px rgba(34, 197, 94, 0.1) !important',
            outline: 'none !important'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-50"></div>
        
        <div className="relative z-10">
            <h3 className="text-green-200 font-semibold mb-3 text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-green-300" />
                Why Similar to Shutter Island
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
                {correctData?.shutterConnection || `Like Shutter Island, ${movie.Title} explores themes of psychological horror and identity through innovative storytelling.`}
            </p>
        </div>
    </motion.div>
);

// 🧠 SMART BACK BUTTON - GOLDEN THEME
const SmartBackButton = ({ movie }) => {
    const handleBackClick = () => {
        if (typeof window !== 'undefined') {
            const currentPosition = sessionStorage.getItem('currentMoviePosition');
            const currentRank = sessionStorage.getItem('currentMovieRank');
            
            sessionStorage.setItem('returningFromMovie', 'true');
            
            if (currentPosition) {
                sessionStorage.setItem('returnToPosition', currentPosition);
            }
            if (currentRank) {
                sessionStorage.setItem('returnToRank', currentRank);
            }
            
            window.location.href = '/collection/movies-like-shutter-island';
        }
    };

    return (
        <motion.button
            onClick={handleBackClick}
            className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <ArrowLeft className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Back to Shutter Island</span>
        </motion.button>
    );
};

// Film grain overlay
const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div 
            className="w-full h-full bg-repeat"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.4'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
            }}
        />
    </div>
);

// 🧠 SHUTTER ISLAND BREADCRUMB - GOLDEN THEME
const ShutterIslandBreadcrumb = ({ movie }) => {
    return (
        <motion.nav 
            className="mb-8 sm:mb-12 px-4 sm:px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Link href="/collection/movies-like-shutter-island" className="hover:text-yellow-400 transition-all duration-300">
                    Movies Like Shutter Island
                </Link>
                <ChevronRight size={16} className="text-gray-600" />
                <span className="text-yellow-400 font-medium">{movie.Title}</span>
            </div>
        </motion.nav>
    );
};

// SCHEMA GENERATION FOR SHUTTER ISLAND SEO
const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A compelling ${correctData?.genre?.toLowerCase() || 'thriller'} film like Shutter Island that explores psychological horror and identity themes`,
        "genre": movie.Genre,
        "datePublished": movie.Year?.toString(),
        "director": {
            "@type": "Person",
            "name": correctData?.director || movieInfo?.director || "Acclaimed Director"
        },
        "duration": `PT${correctData?.runtime?.replace(' min', '') || '120'}M`,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": correctData?.imdbRating || movieInfo?.rating || 7.5,
            "bestRating": 10,
            "worstRating": 1,
            "ratingCount": movieInfo?.audienceScore || 10000
        }
    };
};

// 🔥 SHUTTER ISLAND-FOCUSED FAQ SCHEMA
const generateFAQSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    
    const faqs = [
        {
            question: `What makes ${movie.Title} like Shutter Island in terms of psychological thriller themes?`,
            answer: `${movie.Title} explores psychological horror and identity confusion similar to Shutter Island through ${correctData?.genre || 'psychological thriller'} elements. Both films feature protagonists who struggle with unreliable perceptions and shocking revelations about reality.`
        },
        {
            question: `Who directed ${movie.Title} and what is its connection to Shutter Island-style films?`,
            answer: `${movie.Title} was directed by ${correctData?.director || movieInfo?.director || 'acclaimed filmmaker'} in ${movie.Year}. Like Shutter Island, it uses innovative storytelling techniques to explore themes of memory, identity, and psychological complexity through atmospheric horror.`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area. The film is often available for rent or purchase on digital platforms.`
        },
        {
            question: `Does ${movie.Title} have mature content like other Shutter Island-style psychological thrillers?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes, psychological intensity, and complex subject matter'}. The film has ${sensitiveData.scenes.length} scenes with mature content, similar to other psychological horror thrillers.`
                : `${movie.Title} is suitable for most audiences interested in psychological thriller films like Shutter Island, with minimal mature content that focuses on intellectual and emotional complexity rather than explicit material.`
        },
        {
            question: `How does ${movie.Title} compare to Shutter Island in terms of psychological complexity?`,
            answer: `${movie.Title} shares Shutter Island's psychological complexity through its ${correctData?.genre || 'thriller'} approach to identity and reality themes. Both films require multiple viewings to fully appreciate their intricate narrative structures and psychological depth.`
        },
        {
            question: `What is the IMDb rating of ${movie.Title} and how does it compare to Shutter Island?`,
            answer: `${movie.Title} has an IMDb rating of ${correctData?.imdbRating || movieInfo?.rating || '7.5+'}/10. Like Shutter Island (8.2/10), it's highly rated for its innovative storytelling, psychological depth, and reality-twisting narrative that challenges conventional film structure.`
        }
    ];

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

// 🧠 MAIN SHUTTER ISLAND MOVIE PAGE COMPONENT
const ShutterIslandMoviePage = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const movieSchema = generateMovieSchema(movie);
    const faqSchema = generateFAQSchema(movie);
    const [scrollY, setScrollY] = useState(0);

    // 🔥 FORCE SHUTTER ISLAND COLLECTION TRACKING
    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('fromShutterIslandCollection', 'true');
            sessionStorage.removeItem('fromInceptionCollection');
            sessionStorage.removeItem('fromMementoCollection');
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ✅ FIXED DATA GETTERS - NO MORE '2010' FALLBACK!
    const getGenre = () => correctData?.genre || movie.Genre || movieInfo?.genre || 'Thriller';
    const getRuntime = () => correctData?.runtime || movie.Runtime || (movieInfo?.runtime ? `${movieInfo.runtime} min` : '120 min');
    const getDirector = () => correctData?.director || movieInfo?.director || movie.Director || 'Acclaimed Director';
    const getYear = () => movie.Year || 'Unknown'; // ✅ FIXED - No more 2010 fallback!
    const getIMDbRating = () => correctData?.imdbRating || movieInfo?.rating || 7.5;
    const getComplexityScore = () => movieInfo?.mindBendingIndex || 85;
    const getMovieQuote = () => correctData?.quote || STRATEGIC_QUOTES[movie.tmdbId] || 'A mind-bending cinematic experience';

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          <Head>
    {/* 🔥 Meta Title */}
    <title>Best Movies Like Shutter Island – 10 Mind-Bending Thrillers You Must Watch</title>

    {/* 🔥 Meta Description */}
    <meta
        name="description"
        content="Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Shutter Island. Carefully analyzed for shocking twists, expert storytelling, and unforgettable endings—perfect for true psychological thriller fans!"
    />

    {/* 🔥 Keywords */}
    <meta
        name="keywords"
        content={`${movie.Title}, ${getYear()}, like shutter island, psychological thrillers, mind-bending films, non linear storytelling, expert curated, handpicked list, most advanced list on internet, ${getDirector()}, amnesia movies, identity crisis films`}
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={`https://filmiway.com/movies/like-shutter-island/${movie.imdbID}`} />
    <link rel="icon" href="/favicon.ico" />

    {/* 🔥 Open Graph */}
    <meta property="og:title" content="The Most Advanced List on the Internet – 10 Mind-Bending Movies Like Shutter Island 🧠" />
    <meta property="og:description" content="Warning: This handpicked list of 10 psychological thrillers has been carefully analyzed for shocking twists and expert storytelling. Dare to watch them all!" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://filmiway.com/collection/movies-like-shutter-island" />
    <meta property="og:site_name" content="Filmiway" />
    <meta property="og:image" content="https://filmiway.com/path-to-shutter-poster-collage.jpg" />

    {/* 🔥 Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="🧠 The Most Advanced Handpicked List – 10 Movies Like Shutter Island" />
    <meta name="twitter:description" content="Stop scrolling! 10 mind-bending psychological thrillers like Shutter Island, handpicked and deeply analyzed for shocking twists and expert storytelling." />
    <meta name="twitter:image" content="https://filmiway.com/path-to-shutter-poster-collage.jpg" />

    {/* JSON-LD Schema */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
</Head>

            <SubtleFilmGrain />
            
            <div className="absolute inset-0">
                <CinematicBackground />
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"
                    style={{ y: scrollY * 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
            </div>

            <SmartBackButton movie={movie} />

            <div className="relative z-10 pt-12 sm:pt-16">
                <ShutterIslandBreadcrumb movie={movie} />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
                    {/* 🔥 EXACT SAME GOLDEN STRUCTURE AS INCEPTION/MEMENTO */}
                    <motion.div 
                        className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-24"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* MOVIE POSTER - GOLDEN GLOW */}
                        <div className="flex-shrink-0 mx-auto lg:mx-0 flex flex-col items-center">
                            <motion.div 
                                className="w-72 h-[432px] sm:w-80 sm:h-[480px] lg:w-96 lg:h-[576px] relative group"
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <div className="absolute -inset-4 bg-gradient-to-b from-yellow-400/15 via-amber-400/10 to-yellow-500/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="absolute -inset-2 bg-gradient-to-b from-yellow-400/20 to-amber-400/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" />
                                
                                <TMDBMoviePoster movie={movie} className="w-full h-full relative z-10 rounded-2xl shadow-2xl" />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full">
                                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                    <span className="text-white font-bold">{getIMDbRating()}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="bg-yellow-500/20 backdrop-blur-sm px-3 py-2 rounded-full">
                                                    <div className="text-yellow-400 font-bold text-sm">
                                                        {getComplexityScore()}/100
                                                    </div>
                                                    <div className="text-white/70 text-xs">Psych Score</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 🧠 MOVIE INFO SECTION - GOLDEN THEME */}
                        <div className="flex-1 space-y-8 sm:space-y-10 mt-8 lg:mt-0">
                            <div className="text-center lg:text-left">
                                <motion.h1 
                                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white mb-6 leading-tight relative"
                                    style={{ 
                                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                                        fontWeight: 200,
                                        textShadow: '0 0 40px rgba(255,255,255,0.1)'
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 1 }}
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
                                        {movie.Title}
                                    </span>
                                    <motion.span 
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 block text-2xl sm:text-3xl lg:text-4xl mt-4 font-normal"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        ({getYear()})
                                    </motion.span>
                                </motion.h1>

                                {/* 🔥 SHUTTER ISLAND COLLECTION BADGE - 💚 MUTED GREEN! */}
                                <motion.div 
                                    className="mb-8 flex justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-700/60 to-emerald-600/60 rounded-full backdrop-blur-sm border border-green-500/70">
                                        <AlertTriangle className="w-5 h-5 text-green-100" />
                                        <span className="text-green-100 font-medium text-sm">Like Shutter Island</span>
                                        <Brain className="w-5 h-5 text-green-100" />
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-gray-300 text-base sm:text-lg mb-8 relative z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    <motion.span 
                                        className="flex items-center gap-2 bg-gradient-to-r from-blue-900/40 to-blue-800/40 px-5 py-3 rounded-full backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <Award className="w-5 h-5 text-blue-400" />
                                        <span className="text-white font-semibold">{getGenre()}</span>
                                    </motion.span>
                                    
                                    <motion.span 
                                        className="flex items-center gap-2 bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 px-5 py-3 rounded-full backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <Clock className="w-5 h-5 text-yellow-400" />
                                        <span className="text-white font-semibold">{getRuntime()}</span>
                                    </motion.span>
                                    
                                    <motion.span 
                                        className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 px-5 py-3 rounded-full backdrop-blur-sm border border-gray-500/30 hover:border-gray-400/50 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <span className="text-gray-300">Directed by </span>
                                        <span className="text-white font-semibold">{getDirector()}</span>
                                    </motion.span>
                                </motion.div>

                                <motion.blockquote 
                                    className="text-xl sm:text-2xl text-yellow-400 font-light tracking-wide italic mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    "{getMovieQuote()}"
                                </motion.blockquote>

                                {/* 🔥 SHUTTER ISLAND CONNECTION - 💚 MUTED GREEN WITH FORCED STYLES! */}
                                <ShutterIslandConnectionBadge movie={movie} correctData={correctData} />

                                {/* STATS GRID - GOLDEN THEME */}
                                <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto lg:mx-0"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0, duration: 0.8 }}
                                >
                                    {/* Psych Score - GOLDEN */}
                                    <motion.div 
                                        className="text-center lg:text-left bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-transparent border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group"
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="text-4xl sm:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 mb-2 relative z-10">
                                            {getComplexityScore()}
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-medium relative z-10">
                                            Psych Score
                                        </div>
                                    </motion.div>

                                    {/* IMDb Rating */}
                                    <motion.div 
                                        className="text-center lg:text-left bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group"
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="text-4xl sm:text-5xl font-extralight text-white mb-2 flex items-center justify-center lg:justify-start gap-2 relative z-10">
                                            <Star className="w-8 h-8 text-yellow-400 fill-current" />
                                            {getIMDbRating()}
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-medium relative z-10">
                                            IMDb Rating
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="space-y-16 sm:space-y-24"
                    >
                        {/* 🔥 MOVIE DETAILS WITH SHUTTER ISLAND COLLECTION FLAG */}
                        <MovieDetailsSection movie={movie} fromShutterIslandCollection={true} />
                    </motion.div>

                    <TMDBAttribution />
                </div>
            </div>
        </div>
    );
};

// SSG Functions
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
    const movie = COMPLETE_MOVIE_DATABASE.find(m => m.imdbID === params.id);
    
    if (!movie) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            movie
        }
    };
}

export default ShutterIslandMoviePage;
