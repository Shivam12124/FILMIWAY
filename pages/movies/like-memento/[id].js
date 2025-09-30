// pages/movies/like-memento/[id].js - ABSOLUTELY FINAL WORKING VERSION - NO FUNCTION CALLS
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, Award, ArrowLeft, Brain, Zap } from 'lucide-react';

// 🔥 CORRECTED PATHS - GO UP 3 LEVELS FROM pages/movies/like-memento/
import CinematicBackground from '../../../components/CinematicBackground';
import TMDBMoviePoster from '../../../components/TMDBMoviePoster';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// 🔥 CORRECTED PATHS FOR DATA - GO UP 3 LEVELS TO GET TO utils/
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../../../utils/movieData';

const MOVIE_YEARS = {
    'Enemy': '2013',
    'Primer': '2004',
    'The Fountain': '2006',
    'Synecdoche, New York': '2008',
    'Mulholland Drive': '2001',
    'Predestination': '2014',
    'Coherence': '2013',
    'Donnie Darko': '2001',
    'Mr. Nobody': '2009',
    'Shutter Island': '2010',
    'Memento': '2000',
    'Inception': '2010',
    'The Usual Suspects': '1995'
};

// 🎬 COMPLETE MOVIE DATA WITH MEMENTO CONNECTIONS
const MOVIE_DATA_BY_TITLE = {
    'Shutter Island': {
        imdbRating: 8.2, genre: 'Psychological Thriller', runtime: '138 min', director: 'Martin Scorsese',
        quote: 'Which would be worse: To live as a monster, or to die as a good man?',
        mementoConnection: 'Like Memento, Shutter Island explores unreliable memory and fragmented identity through psychological manipulation. Both films feature protagonists who cannot trust their own memories.'
    },
    'Mr. Nobody': {
        imdbRating: 7.7, genre: 'Sci-Fi Drama', runtime: '141 min', director: 'Jaco Van Dormael',
        quote: 'Each of these lives is the right one! Every path is the right path.',
        mementoConnection: 'Like Memento, Mr. Nobody questions the nature of memory and identity through non-linear storytelling. Both films explore how memory shapes our perception of reality.'
    },
    'Primer': {
        imdbRating: 6.9, genre: 'Sci-Fi Thriller', runtime: '77 min', director: 'Shane Carruth',
        quote: 'What happens if it actually works?',
        mementoConnection: 'Like Memento, Primer uses complex timeline structure to create confusion about sequence of events. Both films require multiple viewings to fully understand the narrative.'
    },
    'Synecdoche, New York': {
        imdbRating: 7.5, genre: 'Psychological Drama', runtime: '124 min', director: 'Charlie Kaufman',
        quote: 'Most of your time is spent being dead or not yet born.',
        mementoConnection: 'Like Memento, Synecdoche explores fragmented identity and the unreliability of memory and perception. Both films deal with characters losing their sense of self through narrative complexity.'
    },
    'Mulholland Drive': {
        imdbRating: 7.9, genre: 'Psychological Mystery', runtime: '147 min', director: 'David Lynch',
        quote: 'I mean I just came here from Deep River, Ontario, and now I\'m in this dream place.',
        mementoConnection: 'Like Memento, Mulholland Drive uses non-linear narrative to blur the line between reality and delusion. Both films feature protagonists struggling with memory loss and fragmented identity.'
    },
    'Predestination': {
        imdbRating: 7.4, genre: 'Sci-Fi Thriller', runtime: '97 min', director: 'Michael Spierig, Peter Spierig',
        quote: 'The snake that eats its own tail, forever and ever.',
        mementoConnection: 'Like Memento, Predestination explores identity confusion through a temporal loop structure. Both films reveal information gradually to create confusion about the protagonist\'s true identity.'
    },
    'Coherence': {
        imdbRating: 7.2, genre: 'Sci-Fi Thriller', runtime: '89 min', director: 'James Ward Byrkit',
        quote: 'This was taken tonight. What? How do you know that? I bought this sweater today.',
        mementoConnection: 'Like Memento, Coherence creates confusion about reality through memory inconsistencies. Both films leave viewers questioning what actually happened.'
    },
    'Donnie Darko': {
        imdbRating: 8.0, genre: 'Sci-Fi Mystery', runtime: '113 min', director: 'Richard Kelly',
        quote: 'Destruction is a form of creation.',
        mementoConnection: 'Like Memento, Donnie Darko explores mental confusion and the unreliability of perception. Both films feature protagonists who cannot trust their understanding of reality.'
    },
    'Enemy': {
        imdbRating: 6.9, genre: 'Psychological Thriller', runtime: '91 min', director: 'Denis Villeneuve',
        quote: 'You never know how your day is gonna turn out.',
        mementoConnection: 'Like Memento, Enemy explores identity crisis and the fragmentation of self. Both films feature protagonists who cannot trust their own memories or perceptions.'
    },
    'The Fountain': {
        imdbRating: 7.2, genre: 'Sci-Fi Drama', runtime: '96 min', director: 'Darren Aronofsky',
        quote: 'Death is a disease...And there\'s a cure.',
        mementoConnection: 'Like Memento, The Fountain deals with memory, loss, and the nature of time and identity. Both films explore how memory and loss shape our understanding of self.'
    },
    'Memento': {
        imdbRating: 8.4, genre: 'Neo-Noir Thriller', runtime: '113 min', director: 'Christopher Nolan',
        quote: 'I have to believe in a world outside my own mind.',
        mementoConnection: 'The definitive memory-loss thriller that inspired this entire collection of mind-bending films exploring fragmented identity, unreliable narration, and the nature of memory itself.'
    },
    'Inception': {
        imdbRating: 8.8, genre: 'Sci-Fi Thriller', runtime: '148 min', director: 'Christopher Nolan',
        quote: 'An idea is like a virus.',
        mementoConnection: 'Like Memento, Inception explores the unreliable nature of memory and perception through complex layered narrative structure and psychological depth.'
    },
    'The Usual Suspects': {
        imdbRating: 8.5, genre: 'Crime Thriller', runtime: '106 min', director: 'Bryan Singer',
        quote: 'The greatest trick the devil ever pulled was convincing the world he didn\'t exist.',
        mementoConnection: 'Like Memento, The Usual Suspects builds to a shocking revelation about identity and memory through unreliable narration and masterful psychological manipulation.'
    }
};

// 🧠 MEMENTO CONNECTION COMPONENT - PURPLE FILLED BACKGROUND
const MementoConnectionBadge = ({ movie, correctData }) => (
    <motion.div 
        className="mb-10 p-6 bg-gradient-to-r from-purple-500/20 via-purple-400/15 to-purple-500/20 rounded-2xl border border-purple-400/50 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent opacity-50"></div>
        
        <div className="relative z-10">
            <h3 className="text-purple-200 font-semibold mb-3 text-lg flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-300" />
                Why Similar to Memento
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
                {correctData?.mementoConnection || `Like Memento, ${movie.Title} explores themes of memory and identity through innovative storytelling.`}
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
            
            window.location.href = '/collection/movies-like-memento';
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
            <span className="text-yellow-400 text-sm font-medium">Back to Memento</span>
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

// 🧠 MEMENTO BREADCRUMB - GOLDEN THEME
const MementoBreadcrumb = ({ movie }) => {
    return (
        <motion.nav 
            className="mb-8 sm:mb-12 px-4 sm:px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Link href="/collection/movies-like-memento" className="hover:text-yellow-400 transition-all duration-300">
                    Movies Like Memento
                </Link>
                <ChevronRight size={16} className="text-gray-600" />
                <span className="text-yellow-400 font-medium">{movie.Title}</span>
            </div>
        </motion.nav>
    );
};

// 🧠 MAIN MEMENTO MOVIE PAGE COMPONENT
const MementoMoviePage = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const [scrollY, setScrollY] = useState(0);

    // 🔥 FORCE MEMENTO COLLECTION TRACKING
    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('fromMementoCollection', 'true');
            sessionStorage.removeItem('fromInceptionCollection');
            sessionStorage.removeItem('fromShutterIslandCollection');
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ALL MOVIE DATA AS DIRECT VARIABLES - HARDCODED FIXES
    const currentMovieYear = movie.Year || MOVIE_YEARS[movie.Title] || 'Unknown';
    const currentMovieGenre = correctData?.genre || movie.Genre || movieInfo?.genre || 'Thriller';
    const currentMovieRuntime = correctData?.runtime || movie.Runtime || (movieInfo?.runtime ? `${movieInfo.runtime} min` : '120 min');
    const currentMovieDirector = correctData?.director || movieInfo?.director || movie.Director || 'Acclaimed Director';
    const currentMovieRating = correctData?.imdbRating || movieInfo?.rating || 7.5;
    const currentComplexityScore = movieInfo?.mindBendingIndex || 85;
    const currentMovieQuote = correctData?.quote || STRATEGIC_QUOTES[movie.tmdbId] || 'A mind-bending cinematic experience';

    // META DATA AS DIRECT VARIABLES
    const metaTitle = "Best Movies Like Memento – 10 Best Mind-Bending Memory Loss Thrillers You Must Watch";
    const metaDescription = "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending memory loss thrillers like Memento. Carefully analyzed for shocking twists, non-linear storytelling, and unforgettable endings—perfect for true psychological thriller fans!";
    const metaKeywords = `${movie.Title}, ${currentMovieYear}, like memento, psychological thrillers, memory loss films, non linear storytelling, christopher nolan memento, fragmented identity movies, unreliable narrator films, psychological complexity films`;
    const ogTitle = "The Most Advanced List on the Internet – 10 Best Mind-Bending Movies Like Memento 🧠";
    const twitterTitle = "🧠 The Most Advanced Handpicked List – 10 Best Movies Like Memento";

    const movieSchema = {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A compelling ${correctData?.genre?.toLowerCase() || 'thriller'} film like Memento that explores memory and identity themes`,
        "genre": movie.Genre,
        "datePublished": movie.Year?.toString(),
        "director": {
            "@type": "Person",
            "name": currentMovieDirector
        },
        "duration": `PT${correctData?.runtime?.replace(' min', '') || '120'}M`,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": currentMovieRating,
            "bestRating": 10,
            "worstRating": 1,
            "ratingCount": movieInfo?.audienceScore || 10000
        }
    };

    const optimizedH1 = `${movie.Title} (${currentMovieYear}) - ${currentMovieGenre} Like Memento`;

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                {/* 🔥 Meta Title - UNIQUE KEY PER MOVIE FOR MEMENTO */}
                <title key={`movie-memento-${movie.imdbID}`}>{metaTitle}</title>

                {/* 🔥 Meta Description - UNIQUE KEY PER MOVIE FOR MEMENTO */}
                <meta
                    key={`movie-description-memento-${movie.imdbID}`}
                    name="description"
                    content={metaDescription}
                />

                {/* 🔥 Keywords - UNIQUE KEY PER MOVIE FOR MEMENTO */}
                <meta
                    key={`movie-keywords-memento-${movie.imdbID}`}
                    name="keywords"
                    content={metaKeywords}
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://filmiway.com/movies/like-memento/${movie.imdbID}`} />
                <link rel="icon" href="/favicon.ico" />

                {/* 🔥 Open Graph - UNIQUE KEYS PER MOVIE FOR MEMENTO */}
                <meta property="og:title" key={`og-title-movie-memento-${movie.imdbID}`} content={ogTitle} />
                <meta property="og:description" key={`og-desc-movie-memento-${movie.imdbID}`} content={metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://filmiway.com/collection/movies-like-memento" />
                <meta property="og:site_name" content="Filmiway" />

                {/* 🔥 Twitter Cards - UNIQUE KEYS PER MOVIE FOR MEMENTO */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" key={`twitter-title-movie-memento-${movie.imdbID}`} content={twitterTitle} />
                <meta name="twitter:description" key={`twitter-desc-movie-memento-${movie.imdbID}`} content={metaDescription} />

                {/* JSON-LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
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
                <MementoBreadcrumb movie={movie} />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
                    {/* 🔥 EXACT SAME GOLDEN STRUCTURE AS INCEPTION */}
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
                                                    <span className="text-white font-bold">{currentMovieRating}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="bg-yellow-500/20 backdrop-blur-sm px-3 py-2 rounded-full">
                                                    <div className="text-yellow-400 font-bold text-sm">
                                                        {currentComplexityScore}/100
                                                    </div>
                                                    <div className="text-white/70 text-xs">Memory Score</div>
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
                                        {optimizedH1}
                                    </span>
                                </motion.h1>

                                {/* MEMENTO COLLECTION BADGE - PURPLE FILLED */}
                                <motion.div 
                                    className="mb-8 flex justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/60 to-purple-500/60 rounded-full backdrop-blur-sm border border-purple-400/70">
                                        <Brain className="w-5 h-5 text-purple-100" />
                                        <span className="text-purple-100 font-medium text-sm">Like Memento</span>
                                        <Zap className="w-5 h-5 text-purple-100" />
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
                                        <span className="text-white font-semibold">{currentMovieGenre}</span>
                                    </motion.span>
                                    
                                    <motion.span 
                                        className="flex items-center gap-2 bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 px-5 py-3 rounded-full backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <Clock className="w-5 h-5 text-yellow-400" />
                                        <span className="text-white font-semibold">{currentMovieRuntime}</span>
                                    </motion.span>
                                    
                                    <motion.span 
                                        className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 px-5 py-3 rounded-full backdrop-blur-sm border border-gray-500/30 hover:border-gray-400/50 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <span className="text-gray-300">Directed by </span>
                                        <span className="text-white font-semibold">{currentMovieDirector}</span>
                                    </motion.span>
                                </motion.div>

                                <motion.blockquote 
                                    className="text-xl sm:text-2xl text-yellow-400 font-light tracking-wide italic mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    "{currentMovieQuote}"
                                </motion.blockquote>

                                {/* MEMENTO CONNECTION - PURPLE FILLED */}
                                <MementoConnectionBadge movie={movie} correctData={correctData} />

                                {/* STATS GRID - GOLDEN THEME */}
                                <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto lg:mx-0"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0, duration: 0.8 }}
                                >
                                    {/* Memory Score - GOLDEN */}
                                    <motion.div 
                                        className="text-center lg:text-left bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-transparent border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group"
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="text-4xl sm:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 mb-2 relative z-10">
                                            {currentComplexityScore}
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-medium relative z-10">
                                            Memory Score
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
                                            {currentMovieRating}
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
                        {/* 🔥 MOVIE DETAILS WITH MEMENTO COLLECTION FLAG */}
                        <MovieDetailsSection movie={movie} fromMementoCollection={true} />
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

export default MementoMoviePage;
