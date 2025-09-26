// pages/collection/best-survival-movies/[slug].js - UPDATED WITH ROUTE UTILITIES
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    ArrowLeft, 
    Star, 
    Clock, 
    Calendar,
    Award,
    Mountain,
    AlertTriangle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

// Components (same as before)
import CinematicBackground from '../../../components/CinematicBackground';
import TMDBMoviePoster from '../../../components/TMDBMoviePoster';
import TMDBAttribution from '../../../components/TMDBAttribution';
import EnhancedIntensityGraph from '../../../components/EnhancedIntensityGraph';
import RealCommentsRatingSection from '../../../components/RealCommentsRatingSection';
import SensitiveContentTimelineSection from '../../../components/SensitiveContentTimelineSection';

// Data
import { 
    COMPLETE_MOVIE_DATA,
    FALLBACK_POSTERS,
    SENSITIVE_TIMELINES,
    STRATEGIC_QUOTES,
    generateFAQData,
    generateMovieSchema,
    generateFAQSchema
} from '../../../utils/survivalMovieData';

// Routes
import {
    generateSurvivalMoviePaths,
    getMovieBySlug,
    getSurvivalMovieNavigation,
    getSurvivalMovieBreadcrumbs
} from '../../../utils/survivalMovieRoutes';

const SurvivalMoviePage = ({ movie, movieData, sensitiveData, faqs, navigation }) => {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-white">Loading survival movie...</div>
        </div>;
    }

    if (!movie || !movieData) {
        return <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-white">Movie not found</div>
        </div>;
    }

    const getSurvivabilityColor = (index) => {
        if (index >= 90) return 'text-red-400';
        if (index >= 85) return 'text-orange-400';
        if (index >= 80) return 'text-yellow-400';
        return 'text-green-400';
    };

    // [REST OF THE COMPONENT REMAINS THE SAME AS STEP 3A...]
    // [Add navigation buttons at the end before TMDBAttribution]

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* [HEAD AND HERO SECTION SAME AS BEFORE] */}

            {/* Navigation to Previous/Next Movie */}
            <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                {navigation.previous && (
                    <Link 
                        href={`/collection/best-survival-movies/${navigation.previous.slug}`}
                        className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 px-4 py-2 rounded-xl transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="hidden sm:inline">Previous: {navigation.previous.Title}</span>
                        <span className="sm:hidden">Previous</span>
                    </Link>
                )}
                
                {navigation.next && (
                    <Link 
                        href={`/collection/best-survival-movies/${navigation.next.slug}`}
                        className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 px-4 py-2 rounded-xl transition-colors"
                    >
                        <span className="hidden sm:inline">Next: {navigation.next.Title}</span>
                        <span className="sm:hidden">Next</span>
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                )}
            </motion.div>

            <TMDBAttribution />
        </div>
    );
};

// ✅ SSG: GET STATIC PATHS (UPDATED)
export async function getStaticPaths() {
    const paths = generateSurvivalMoviePaths();

    return {
        paths,
        fallback: false
    };
}

// ✅ SSG: GET STATIC PROPS (UPDATED)
export async function getStaticProps({ params }) {
    const { slug } = params;
    
    // Find movie by slug using utility
    const movie = getMovieBySlug(slug);
    
    if (!movie) {
        return { notFound: true };
    }
    
    // Get additional data
    const movieData = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId] || { scenes: [] };
    const faqs = generateFAQData(movie);
    const navigation = getSurvivalMovieNavigation(movie);
    
    return {
        props: {
            movie,
            movieData: movieData || null,
            sensitiveData,
            faqs,
            navigation
        },
        revalidate: 86400 // Revalidate once per day
    };
}

export default SurvivalMoviePage;
