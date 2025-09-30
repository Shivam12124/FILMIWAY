// pages/movies/[id].js - ABSOLUTELY FINAL VERSION WITH NO GETMETHOD CALLS
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, Award, ArrowLeft, Brain, Zap, AlertTriangle } from 'lucide-react';

// Components
import CinematicBackground from '../../components/CinematicBackground';
import TMDBMoviePoster from '../../components/TMDBMoviePoster';
import MovieDetailsSection from '../../components/MovieDetailsSection';
import TMDBAttribution from '../../components/TMDBAttribution';

// Data
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../../utils/movieData';

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

const MOVIE_DATA_BY_TITLE = {
    'Shutter Island': {
        imdbRating: 8.2, genre: 'Psychological Thriller', runtime: '138 min', director: 'Martin Scorsese',
        quote: 'Which would be worse: To live as a monster, or to die as a good man?',
        inceptionConnection: 'Like Inception, Shutter Island masterfully blurs the line between reality and delusion. Both films question what\'s real through unreliable protagonists navigating layered psychological mysteries with stunning plot twists.',
        mementoConnection: 'Like Memento, Shutter Island explores unreliable memory and fragmented identity through psychological manipulation. Both films feature protagonists who cannot trust their own memories due to traumatic experiences.',
        shutterConnection: 'The definitive psychological thriller that inspired this entire collection of mind-bending films exploring identity crisis, unreliable narration, and shocking revelations about reality.'
    },
    'Mr. Nobody': {
        imdbRating: 7.7, genre: 'Sci-Fi Drama', runtime: '141 min', director: 'Jaco Van Dormael',
        quote: 'Each of these lives is the right one! Every path is the right path.',
        inceptionConnection: 'Like Inception\'s nested dreams creating infinite possibilities, Mr. Nobody explores multiple reality layers and parallel timelines. Both films challenge viewers to question which version of events is truly real.',
        mementoConnection: 'Like Memento, Mr. Nobody questions the nature of memory and identity through complex non-linear storytelling. Both films explore how different memories and choices shape our understanding of who we are.',
        shutterConnection: 'Like Shutter Island, Mr. Nobody explores fragmented memory and multiple realities through psychological complexity and identity questioning.'
    },
    'Primer': {
        imdbRating: 6.9, genre: 'Sci-Fi Thriller', runtime: '77 min', director: 'Shane Carruth',
        quote: 'What happens if it actually works?',
        inceptionConnection: 'Like Inception\'s complex dream architecture requiring multiple viewings, Primer builds intricate temporal layers and rules. Both films reward intellectual engagement with mind-bending scientific concepts.',
        mementoConnection: 'Like Memento, Primer uses deliberately confusing timeline structure to mirror the protagonists\' disorientation. Both films require multiple viewings to fully understand the chronological sequence of events.',
        shutterConnection: 'Like Shutter Island, Primer creates paranoia through unreliable perception and reality distortion. Both films feature protagonists who cannot trust their understanding of events unfolding around them.'
    },
    'Synecdoche, New York': {
        imdbRating: 7.5, genre: 'Psychological Drama', runtime: '124 min', director: 'Charlie Kaufman',
        quote: 'Most of your time is spent being dead or not yet born.',
        inceptionConnection: 'Like Inception\'s reality-within-reality structure, Synecdoche creates nested worlds where characters lose themselves in elaborate artistic constructions. Both films explore identity fragmentation through layered storytelling.',
        mementoConnection: 'Like Memento, Synecdoche explores the deterioration of memory and sense of self. Both films deal with protagonists losing their grip on identity through repetition, confusion, and the passage of time.',
        shutterConnection: 'Like Shutter Island, Synecdoche explores mental deterioration and the fragmentation of identity through psychological complexity and unreliable narrative structure.'
    },
    'Mulholland Drive': {
        imdbRating: 7.9, genre: 'Psychological Mystery', runtime: '147 min', director: 'David Lynch',
        quote: 'I mean I just came here from Deep River, Ontario, and now I\'m in this dream place.',
        inceptionConnection: 'Like Inception\'s dream logic and surreal sequences, Mulholland Drive operates on mysterious narrative rules where reality shifts unexpectedly. Both films use dreamlike imagery to create haunting experiences.',
        mementoConnection: 'Like Memento, Mulholland Drive uses fragmented narrative structure to mirror memory loss and identity confusion. Both films feature protagonists struggling with amnesia and reconstructed personalities.',
        shutterConnection: 'Like Shutter Island, Mulholland Drive uses fragmented identity and memory loss to create a haunting psychological mystery with shocking revelations about reality.'
    },
    'Predestination': {
        imdbRating: 7.4, genre: 'Sci-Fi Thriller', runtime: '97 min', director: 'Michael Spierig, Peter Spierig',
        quote: 'The snake that eats its own tail, forever and ever.',
        inceptionConnection: 'Like Inception\'s carefully orchestrated heist with multiple moving parts, Predestination reveals information strategically through complex planning. Both films feature protagonists executing elaborate time-sensitive missions.',
        mementoConnection: 'Like Memento, Predestination explores identity confusion through temporal manipulation and memory gaps. Both films gradually reveal the protagonist\'s true identity through careful information control.',
        shutterConnection: 'Like Shutter Island, Predestination gradually reveals the truth about identity confusion through careful psychological manipulation and twisted revelations.'
    },
    'Coherence': {
        imdbRating: 7.2, genre: 'Sci-Fi Thriller', runtime: '89 min', director: 'James Ward Byrkit',
        quote: 'This was taken tonight. What? How do you know that? I bought this sweater today.',
        inceptionConnection: 'Like Inception\'s layered reality confusion, Coherence traps characters in parallel possibilities where they question what\'s real. Both films create paranoia through shifting realities and unreliable perceptions.',
        mementoConnection: 'Like Memento, Coherence creates confusion about reality through memory inconsistencies and repeated encounters. Both films leave viewers and characters questioning what actually happened during the evening.',
        shutterConnection: 'Like Shutter Island, Coherence creates psychological tension through reality confusion and paranoia, leaving viewers questioning what is real versus illusion.'
    },
    'Donnie Darko': {
        imdbRating: 8.0, genre: 'Sci-Fi Mystery', runtime: '113 min', director: 'Richard Kelly',
        quote: 'Destruction is a form of creation.',
        inceptionConnection: 'Like Inception\'s exploration of subconscious influence and manipulation, Donnie Darko blends psychological depth with sci-fi concepts. Both films feature protagonists struggling to understand their role in complex scenarios.',
        mementoConnection: 'Like Memento, Donnie Darko explores mental confusion and the unreliability of perception through psychiatric conditions. Both films feature protagonists who cannot trust their understanding of reality or time.',
        shutterConnection: 'Like Shutter Island, Donnie Darko explores psychological instability and mental illness through atmospheric storytelling and reality distortion.'
    },
    'Enemy': {
        imdbRating: 6.9, genre: 'Psychological Thriller', runtime: '91 min', director: 'Denis Villeneuve',
        quote: 'You never know how your day is gonna turn out.',
        inceptionConnection: 'Like Inception\'s identity confusion within dream layers, Enemy explores psychological doubling and doppelgangers. Both films create unsettling atmospheres through ambiguous reality and identity questions.',
        mementoConnection: 'Like Memento, Enemy explores identity crisis and the complete fragmentation of self-recognition. Both films feature protagonists who cannot trust their own memories or distinguish between different versions of themselves.',
        shutterConnection: 'Like Shutter Island, Enemy creates psychological horror through identity crisis and the complete breakdown of self-recognition and reality.'
    },
    'The Fountain': {
        imdbRating: 7.2, genre: 'Sci-Fi Drama', runtime: '96 min', director: 'Darren Aronofsky',
        quote: 'Death is a disease...And there\'s a cure.',
        inceptionConnection: 'Like Inception\'s emotional journey about letting go of the past, The Fountain explores love transcending time and death through three interconnected timelines. Both films combine spectacular visuals with deeply personal themes.',
        mementoConnection: 'Like Memento, The Fountain deals with memory, loss, and the cyclical nature of time and identity. Both films explore how traumatic memories and the search for meaning shape our understanding of existence and purpose.',
        shutterConnection: 'Like Shutter Island, The Fountain deals with psychological trauma, loss, and the cyclical nature of memory and identity through multiple timelines.'
    },
    'The Usual Suspects': {
        imdbRating: 8.5, genre: 'Crime Thriller', runtime: '106 min', director: 'Bryan Singer',
        quote: 'The greatest trick the devil ever pulled was convincing the world he didn\'t exist.',
        inceptionConnection: 'Like Inception\'s layered deception and misdirection, The Usual Suspects builds an elaborate con through unreliable narration. Both films feature masterful plot twists that recontextualize everything.',
        mementoConnection: 'Like Memento, The Usual Suspects uses fragmented storytelling and unreliable narration to gradually reveal shocking truths about identity and memory.',
        shutterConnection: 'Like Shutter Island, The Usual Suspects builds to a shocking identity revelation through unreliable narration and masterful psychological manipulation.'
    },
    'Inception': {
        imdbRating: 8.8, genre: 'Sci-Fi Thriller', runtime: '148 min', director: 'Christopher Nolan',
        quote: 'An idea is like a virus.',
        inceptionConnection: 'The definitive mind-bending film that inspired this entire collection. Inception explores reality layers, memory manipulation, and the subconscious mind through stunning visuals and complex storytelling.',
        mementoConnection: 'Like Memento, Inception explores memory manipulation and the unreliable nature of the mind. Both Christopher Nolan films feature protagonists struggling with guilt and the consequences of their actions.',
        shutterConnection: 'Like Shutter Island, Inception explores psychological complexity through reality questioning and the unreliable nature of perception and memory.'
    },
    'Memento': {
        imdbRating: 8.4, genre: 'Neo-Noir Thriller', runtime: '113 min', director: 'Christopher Nolan',
        quote: 'I have to believe in a world outside my own mind.',
        inceptionConnection: 'Like Inception, Memento explores the unreliable nature of memory and perception through innovative storytelling. Both Christopher Nolan films challenge viewers to question what\'s real.',
        mementoConnection: 'The definitive memory-loss thriller that inspired this collection. Memento uses reverse chronology to mirror the protagonist\'s condition and explores themes of identity, memory, and truth.',
        shutterConnection: 'Like Shutter Island, Memento explores psychological manipulation and the unreliable nature of memory through complex narrative structure and identity questioning.'
    }
};

// Connection Badge Components
const MementoConnectionBadge = ({ movie, correctData }) => (
    <motion.div 
        className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 via-blue-400/10 to-purple-500/10 rounded-2xl border border-purple-400/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-transparent opacity-50"></div>
        <div className="relative z-10">
            <h3 className="text-purple-300 font-semibold mb-3 text-lg flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                Why Similar to Memento
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
                {correctData?.mementoConnection || `Like Memento, ${movie.Title} explores themes of memory and identity through innovative storytelling.`}
            </p>
        </div>
    </motion.div>
);

const InceptionConnectionBadge = ({ movie, correctData }) => (
    <motion.div 
        className="mb-10 p-6 bg-gradient-to-r from-yellow-500/10 via-amber-400/10 to-yellow-500/10 rounded-2xl border border-yellow-400/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-50"></div>
        <div className="relative z-10">
            <h3 className="text-yellow-300 font-semibold mb-3 text-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                Why Similar to Inception
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
                {correctData?.inceptionConnection || `Like Inception, ${movie.Title} explores complex themes of reality and perception through innovative storytelling.`}
            </p>
        </div>
    </motion.div>
);

const ShutterIslandConnectionBadge = ({ movie, correctData }) => (
    <motion.div 
        className="mb-10 p-6 bg-gradient-to-r from-red-500/10 via-orange-400/10 to-red-500/10 rounded-2xl border border-red-400/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/5 to-transparent opacity-50"></div>
        <div className="relative z-10">
            <h3 className="text-red-300 font-semibold mb-3 text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Why Similar to Shutter Island
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
                {correctData?.shutterConnection || `Like Shutter Island, ${movie.Title} explores themes of psychological horror and identity through innovative storytelling.`}
            </p>
        </div>
    </motion.div>
);

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

const SmartMoviePage = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const [scrollY, setScrollY] = useState(0);
    const [fromMementoCollection, setFromMementoCollection] = useState(false);
    const [fromShutterIslandCollection, setFromShutterIslandCollection] = useState(false);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const fromMemento = sessionStorage.getItem('fromMementoCollection');
            const fromShutter = sessionStorage.getItem('fromShutterIslandCollection');
            setFromMementoCollection(fromMemento === 'true');
            setFromShutterIslandCollection(fromShutter === 'true');
        }
    }, []);

    // Collection type determination
    const collectionType = fromShutterIslandCollection ? 'shutter-island' : fromMementoCollection ? 'memento' : 'inception';

    // ALL MOVIE DATA AS DIRECT VARIABLES - NO FUNCTION CALLS
    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.Year || 'Unknown';
    const currentMovieGenre = correctData?.genre || movie.Genre || movieInfo?.genre || 'Thriller';
    const currentMovieRuntime = correctData?.runtime || movie.Runtime || (movieInfo?.runtime ? `${movieInfo.runtime} min` : '120 min');
    const currentMovieDirector = correctData?.director || movieInfo?.director || movie.Director || 'Acclaimed Director';
    const currentMovieRating = correctData?.imdbRating || movieInfo?.rating || 7.5;
    const currentComplexityScore = movieInfo?.mindBendingIndex || 85;
    const currentMovieQuote = correctData?.quote || STRATEGIC_QUOTES[movie.tmdbId] || 'A mind-bending cinematic experience';

    // META DATA AS DIRECT VARIABLES - NO FUNCTION CALLS  
    const shutterMetaTitle = "Best Movies Like Shutter Island – 10 Best Mind-Bending Psychological Thrillers You Must Watch";
    const shutterMetaDescription = "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Shutter Island including *The Usual Suspects*. Carefully analyzed for shocking twists, unreliable narrators, and expert storytelling—perfect for true psychological thriller fans!";
    const shutterMetaKeywords = `${movie.Title}, ${currentMovieYear}, like shutter island, psychological thrillers, unreliable narrator films, identity crisis movies, plot twist movies, martin scorsese shutter island, psychological horror films, reality distortion movies, memory manipulation films, shocking revelations movies`;
    const shutterOgTitle = "The Most Advanced List on the Internet –  10 Best Mind-Bending Movies Like Shutter Island 🧠";
    const shutterTwitterTitle = "🧠 The Most Advanced Handpicked List – 10 Best Movies Like Shutter Island";

    const mementoMetaTitle = "Best Movies Like Memento – 10 Best Mind-Bending Thrillers You Must Watch";
    const mementoMetaDescription = "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Memento. Carefully analyzed for shocking twists, expert storytelling, and unforgettable endings—perfect for true psychological thriller fans!";
    const mementoMetaKeywords = `${movie.Title}, ${currentMovieYear}, like memento, psychological thrillers, memory twisting films, non linear storytelling, expert curated, handpicked list, most advanced list on internet, amnesia movies, identity crisis films`;
    const mementoOgTitle = "The Most Advanced List on the Internet – 10 Mind-Bending Movies Like Memento 🧠";
    const mementoTwitterTitle = "🧠 The Most Advanced Handpicked List – 10 Movies Like Memento";

    const inceptionMetaTitle = "Best Movies Like Inception – 10 Best Mind-Bending Thrillers You Must Watch";
    const inceptionMetaDescription = "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Inception. Carefully analyzed for shocking twists, expert storytelling, and unforgettable endings—perfect for true sci-fi thriller fans!";
    const inceptionMetaKeywords = `${movie.Title}, ${currentMovieYear}, like inception, mind bending movies, sci-fi thrillers, dream layers, non linear storytelling, expert curated, handpicked list, most advanced list on internet, reality bending films, psychological thrillers`;
    const inceptionOgTitle = "The Most Advanced List on the Internet – 10 Best Mind-Bending Movies Like Inception 🧠";
    const inceptionTwitterTitle = "🧠 The Most Advanced Handpicked List – 10 Best Movies Like Inception";

    // SELECT META DATA BASED ON COLLECTION TYPE  
    const finalMetaTitle = collectionType === 'shutter-island' ? shutterMetaTitle : collectionType === 'memento' ? mementoMetaTitle : inceptionMetaTitle;
    const finalMetaDescription = collectionType === 'shutter-island' ? shutterMetaDescription : collectionType === 'memento' ? mementoMetaDescription : inceptionMetaDescription;
    const finalMetaKeywords = collectionType === 'shutter-island' ? shutterMetaKeywords : collectionType === 'memento' ? mementoMetaKeywords : inceptionMetaKeywords;
    const finalOgTitle = collectionType === 'shutter-island' ? shutterOgTitle : collectionType === 'memento' ? mementoOgTitle : inceptionOgTitle;
    const finalTwitterTitle = collectionType === 'shutter-island' ? shutterTwitterTitle : collectionType === 'memento' ? mementoTwitterTitle : inceptionTwitterTitle;

    const movieSchema = {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A compelling ${correctData?.genre?.toLowerCase() || 'thriller'} film similar to ${collectionType === 'shutter-island' ? 'Shutter Island' : collectionType === 'memento' ? 'Memento' : 'Inception'}`,
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

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBackClick = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('returningFromMovie', 'true');
            const currentPosition = sessionStorage.getItem('currentMoviePosition');
            const currentRank = sessionStorage.getItem('currentMovieRank');
            if (currentPosition) sessionStorage.setItem('returnToPosition', currentPosition);
            if (currentRank) sessionStorage.setItem('returnToRank', currentRank);
            
            switch (collectionType) {
                case 'shutter-island':
                    window.location.href = '/collection/movies-like-shutter-island';
                    break;
                case 'memento':
                    window.location.href = '/collection/movies-like-memento';
                    break;
                default:
                    window.location.href = '/collection/movies-like-inception';
            }
        }
    };

    // Collection display helpers
    const getCollectionDisplayName = () => {
        switch (collectionType) {
            case 'shutter-island': return 'Shutter Island';
            case 'memento': return 'Memento';
            default: return 'Inception';
        }
    };

    const getCollectionIcon = () => {
        switch (collectionType) {
            case 'shutter-island': return <AlertTriangle className="w-5 h-5 text-red-400" />;
            case 'memento': return <Brain className="w-5 h-5 text-purple-400" />;
            default: return <Zap className="w-5 h-5 text-yellow-400" />;
        }
    };

    const getCollectionColors = () => {
        switch (collectionType) {
            case 'shutter-island': 
                return {
                    badge: 'bg-gradient-to-r from-red-900/40 to-orange-900/40 border-red-400/30',
                    text: 'text-red-300',
                    scoreLabel: 'Psych Score'
                };
            case 'memento':
                return {
                    badge: 'bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-purple-400/30',
                    text: 'text-purple-300',
                    scoreLabel: 'Memory Score'
                };
            default:
                return {
                    badge: 'bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border-yellow-400/30',
                    text: 'text-yellow-300',
                    scoreLabel: 'Complexity Score'
                };
        }
    };

    const colors = getCollectionColors();
    const optimizedH1 = `${movie.Title} (${currentMovieYear}) - ${currentMovieGenre} Like ${getCollectionDisplayName()}`;

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                <title key={`movie-${collectionType}-${movie.imdbID}`}>{finalMetaTitle}</title>
                <meta key={`movie-description-${collectionType}-${movie.imdbID}`} name="description" content={finalMetaDescription} />
                <meta key={`movie-keywords-${collectionType}-${movie.imdbID}`} name="keywords" content={finalMetaKeywords} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://filmiway.com/movies/${movie.imdbID}`} />
                <link rel="icon" href="/favicon.ico" />
                
                <meta property="og:title" key={`og-title-movie-${collectionType}-${movie.imdbID}`} content={finalOgTitle} />
                <meta property="og:description" key={`og-desc-movie-${collectionType}-${movie.imdbID}`} content={finalMetaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://filmiway.com/collection/movies-like-${collectionType}`} />
                <meta property="og:site_name" content="Filmiway" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" key={`twitter-title-movie-${collectionType}-${movie.imdbID}`} content={finalTwitterTitle} />
                <meta name="twitter:description" key={`twitter-desc-movie-${collectionType}-${movie.imdbID}`} content={finalMetaDescription} />
                
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

            {/* SMART BACK BUTTON */}
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
                <span className="text-yellow-400 text-sm font-medium">
                    Back to {getCollectionDisplayName()}
                </span>
            </motion.button>

            {/* SMART BREADCRUMB */}
            <motion.nav 
                className="relative z-10 pt-12 sm:pt-16 mb-8 sm:mb-12 px-4 sm:px-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <motion.button
                        onClick={handleBackClick}
                        className="hover:text-yellow-400 transition-all duration-300 flex items-center gap-2"
                        whileHover={{ x: -2, color: '#facc15' }}
                    >
                        <ArrowLeft size={16} />
                        <span>Back</span>
                    </motion.button>
                    <ChevronRight size={16} className="text-gray-600" />
                    <motion.div whileHover={{ x: 2, color: '#facc15' }}>
                        <Link 
                            href={`/collection/movies-like-${collectionType}`}
                            className="hover:text-yellow-400 transition-all duration-300"
                        >
                            Movies Like {getCollectionDisplayName()}
                        </Link>
                    </motion.div>
                    <ChevronRight size={16} className="text-gray-600" />
                    <span className="text-yellow-400 font-medium">{movie.Title}</span>
                </div>
            </motion.nav>
            
            <div className="relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
                    <motion.div 
                        className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-24"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* MOVIE POSTER */}
                        <div className="flex-shrink-0 mx-auto lg:mx-0 flex flex-col items-center">
                            <motion.div 
                                className="w-72 h-[432px] sm:w-80 sm:h-[480px] lg:w-96 lg:h-[576px] relative group"
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <div className="absolute -inset-4 bg-gradient-to-b from-yellow-400/15 via-blue-400/10 to-yellow-500/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="absolute -inset-2 bg-gradient-to-b from-yellow-400/20 to-blue-400/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" />
                                
                                <TMDBMoviePoster movie={movie} className="w-full h-full relative z-10 rounded-2xl shadow-2xl" />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full">
                                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                <span className="text-white font-bold">{currentMovieRating}</span>
                                            </div>
                                            <div className="bg-yellow-500/20 backdrop-blur-sm px-3 py-2 rounded-full">
                                                <div className="text-yellow-400 font-bold text-sm">{currentComplexityScore}/100</div>
                                                <div className="text-white/70 text-xs">{colors.scoreLabel}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* MOVIE INFO */}
                        <div className="flex-1 space-y-8 sm:space-y-10 mt-8 lg:mt-0">
                            <div className="text-center lg:text-left">
                                {/* 🔥 PERFECT SEO-OPTIMIZED H1 TAG */}
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

                                {/* SMART COLLECTION BADGE */}
                                <motion.div 
                                    className="mb-8 flex justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm border ${colors.badge}`}>
                                        {getCollectionIcon()}
                                        <span className={`font-medium text-sm ${colors.text}`}>
                                            Like {getCollectionDisplayName()}
                                        </span>
                                        {getCollectionIcon()}
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

                                {/* 🔥 SMART CONNECTION - SHOW APPROPRIATE ONE BASED ON COLLECTION */}
                                {collectionType === 'shutter-island' ? (
                                    <ShutterIslandConnectionBadge movie={movie} correctData={correctData} />
                                ) : collectionType === 'memento' ? (
                                    <MementoConnectionBadge movie={movie} correctData={correctData} />
                                ) : (
                                    <InceptionConnectionBadge movie={movie} correctData={correctData} />
                                )}

                                {/* STATS GRID */}
                                <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto lg:mx-0"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0, duration: 0.8 }}
                                >
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
                                            {colors.scoreLabel}
                                        </div>
                                    </motion.div>

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
                        <MovieDetailsSection 
                            movie={movie} 
                            fromMementoCollection={fromMementoCollection}
                            fromShutterIslandCollection={fromShutterIslandCollection}
                        />
                    </motion.div>

                    <TMDBAttribution />
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = COMPLETE_MOVIE_DATABASE.map((movie) => ({
        params: { id: movie.imdbID }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const movie = COMPLETE_MOVIE_DATABASE.find(m => m.imdbID === params.id);
    if (!movie) return { notFound: true };
    return { props: { movie } };
}

export default SmartMoviePage;
