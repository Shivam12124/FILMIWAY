// pages/movies/[id].js - SSG Individual Movie Page
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ChevronRight } from 'lucide-react';

// Components
import CinematicBackground from '../../components/CinematicBackground';
import BackToHomepageButton from '../../components/BackToHomepageButton';
import TMDBMoviePoster from '../../components/TMDBMoviePoster';
import MovieDetailsSection from '../../components/MovieDetailsSection';
import EnhancedIntensityGraph from '../../components/EnhancedIntensityGraph';
import StrategicDNAHelix from '../../components/StrategicDNAHelix';
import EnhancedWhereToWatchSection from '../../components/EnhancedWhereToWatchSection';
import SensitiveContentTimelineSection from '../../components/SensitiveContentTimelineSection';
import EnhancedCommentsRatingSection from '../../components/EnhancedCommentsRatingSection';
import SEOFAQSection from '../../components/SEOFAQSection';

// Data
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../../utils/sensitiveContent';

// SEO Schema Generation
const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A compelling ${movie.genre.toLowerCase()} film like Inception`,
        "genre": movie.genre,
        "datePublished": movie.year.toString(),
        "director": {
            "@type": "Person",
            "name": movieInfo?.director || "Acclaimed Director"
        },
        "actor": movieInfo?.cast?.map(actor => ({
            "@type": "Person",
            "name": actor
        })) || [],
        "duration": `PT${movie.runtime}M`,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": movieInfo?.rating || 7.0,
            "bestRating": 10,
            "worstRating": 1,
            "ratingCount": movieInfo?.audienceScore || 100
        }
    };
};

const generateFAQSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    const faqs = [
        {
            question: `Is ${movie.Title} similar to Inception?`,
            answer: movieInfo?.seoDescription || `Yes, ${movie.Title} shares mind-bending qualities with Inception.`
        },
        {
            question: `Who directed ${movie.Title} and what is it about?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.year}. ${movieInfo?.synopsis || `A compelling ${movie.genre.toLowerCase()} film.`}`
        },
        {
            question: `Does ${movie.Title} contain mature content?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes'}. The film has ${sensitiveData.scenes.length} scenes with mature content.`
                : `No, ${movie.Title} does not contain notable mature content and is suitable for most audiences.`
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

// Breadcrumb Component
const Breadcrumb = ({ movie }) => (
    <motion.nav 
        className="mb-6 sm:mb-8 px-4 sm:px-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                <Home size={14} />
                <span>Home</span>
            </Link>
            <ChevronRight size={14} />
            <Link href="/collection/movies-like-inception" className="hover:text-yellow-400 transition-colors">
                Movies Like Inception
            </Link>
            <ChevronRight size={14} />
            <span className="text-yellow-400 font-medium">{movie.Title}</span>
        </div>
    </motion.nav>
);

// Main Movie Page Component
const MoviePage = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const movieSchema = generateMovieSchema(movie);
    const faqSchema = generateFAQSchema(movie);

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                <title>{movie.Title} ({movie.year}) Like Inception - Reviews, Ratings & User Comments | Mind Benders</title>
                <meta name="description" content={`${movie.Title} like Inception: User ratings, reviews & comments. Complexity score ${movieInfo?.mindBendingIndex || 75}/100. ${movie.genre} film by ${movieInfo?.director || 'acclaimed filmmaker'}. ${movieInfo?.seoDescription || ''}`} />
                <meta name="keywords" content={`${movie.Title}, ${movie.year}, like inception, user reviews, movie ratings, ${movie.genre}, ${movieInfo?.director || ''}, community comments, film discussion, streaming guide`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://yoursite.com/movies/${movie.imdbID}`} />
                <link rel="icon" href="/favicon.ico" />
                
                <meta property="og:title" content={`${movie.Title} (${movie.year}) Like Inception - Community Reviews & Ratings`} />
                <meta property="og:description" content={movieInfo?.synopsis || `${movie.Title} - Community reviews and discussion for this Inception-like ${movie.genre.toLowerCase()} film.`} />
                <meta property="og:type" content="video.movie" />
                <meta property="og:url" content={`https://yoursite.com/movies/${movie.imdbID}`} />
                <meta property="og:site_name" content="Mind Benders" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${movie.Title} (${movie.year}) Like Inception - User Reviews`} />
                <meta name="twitter:description" content={`Community reviews and ratings for ${movie.Title}, a mind-bending film similar to Inception.`} />
                
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>

            <CinematicBackground />
            <BackToHomepageButton />

            <div className="relative z-10 pt-8 sm:pt-12">
                <Breadcrumb movie={movie} />
                
                <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
                    {/* Movie Header */}
                    <motion.div 
                        className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Movie Poster */}
                        <div className="flex-shrink-0 mx-auto lg:mx-0">
                            <div className="w-64 h-96 sm:w-80 sm:h-[480px] lg:w-96 lg:h-[576px] relative group">
                                <TMDBMoviePoster movie={movie} className="w-full h-full" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>

                        {/* Movie Info */}
                        <div className="flex-1 space-y-6 sm:space-y-8">
                            <div className="text-center lg:text-left">
                                <motion.h1 
                                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-100 mb-4 sm:mb-6"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {movie.Title}
                                    <span className="text-yellow-400 block text-xl sm:text-2xl lg:text-3xl mt-2">
                                        ({movie.year})
                                    </span>
                                </motion.h1>

                                <motion.div 
                                    className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span>{movie.genre}</span>
                                    <span>•</span>
                                    <span>{movie.runtime} min</span>
                                    <span>•</span>
                                    <span>Directed by {movieInfo?.director}</span>
                                </motion.div>

                                <motion.p 
                                    className="text-lg sm:text-xl text-yellow-400/90 font-light tracking-wide italic mb-6 sm:mb-8"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    "{STRATEGIC_QUOTES[movie.tmdbId] || 'A mind-bending cinematic experience'}"
                                </motion.p>

                                <motion.div 
                                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                                            {movieInfo?.mindBendingIndex || 75}
                                        </div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                                            Complexity Score
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                                            {movieInfo?.rating || 7.0}
                                        </div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                                            IMDb Rating
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                                            {movieInfo?.criticsScore || 75}%
                                        </div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                                            Critics Score
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Movie Details Sections */}
                    <MovieDetailsSection movie={movie} />
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

export default MoviePage;
