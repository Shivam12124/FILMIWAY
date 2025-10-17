// pages/collection/[collection].js - Mobile-Friendly Dynamic Collection Pages ✅
import React from 'react';
import Head from 'next/head';

// ✅ FIXED IMPORT PATHS
import CinematicBackground from '../components/CinematicBackground';
import BackToHomepageButton from '../components/BackToHomepageButton';
import EnhancedMovieHero from '../components/EnhancedMovieHero';
import CinematicMovieCard from '../components/CinematicMovieCard';
import MovieDetailsSection from '../components/MovieDetailsSection';
import EnhancedIntensityGraph from '../components/EnhancedIntensityGraph';
import StrategicDNAHelix from '../components/StrategicDNAHelix';
import EnhancedWhereToWatchSection from '../components/EnhancedWhereToWatchSection';
import SensitiveContentTimelineSection from '../components/SensitiveContentTimelineSection';
import RealCommentsRatingSection from '../components/RealCommentsRatingSection';
import SEOFAQSection from '../components/SEOFAQSection';
import TMDBAttribution from '../components/TMDBAttribution';

import { getCollectionBySlug, getAllCollectionSlugs } from '../data/collections';

const CollectionPage = ({ collection, movies, movieData }) => {
    if (!collection || !movies || movies.length === 0) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-center px-4">
                    <h1 className="text-2xl sm:text-3xl mb-4">Collection not found</h1>
                    <p className="text-gray-400 text-sm sm:text-base">Please check the URL and try again.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{collection.title} | Filmiway</title>
                <meta name="description" content={collection.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            </Head>

            <CinematicBackground />
            <BackToHomepageButton />
            
            <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
                <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-3 sm:mb-4 px-2 leading-tight">
                        {collection.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-6 sm:mb-8 px-3 sm:px-4 leading-relaxed">
                        {collection.description}
                    </p>
                    
                    {collection.badges && collection.badges.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 lg:mb-12 px-2">
                            {collection.badges.map((badge, index) => (
                                <div 
                                    key={index} 
                                    className="bg-yellow-400/20 border border-yellow-400/50 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 min-w-0 flex-shrink-0"
                                    style={{ maxWidth: '100%' }}
                                >
                                    <div className="text-yellow-400 font-bold text-xs sm:text-sm break-words">
                                        {badge.label}
                                    </div>
                                    <div className="text-gray-300 text-xs break-words">
                                        {badge.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-14 lg:mb-16">
                        {movies.map((movie, index) => (
                            <CinematicMovieCard 
                                key={movie.imdbID || movie.id || index}
                                movie={movie}
                                rank={movies.length - index}
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                    {movies.map((movie, index) => (
                        <div 
                            key={movie.imdbID || movie.id || index} 
                            className="w-full"
                        >
                            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                                <EnhancedMovieHero movie={movie} />
                                
                                <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                                    <MovieDetailsSection movie={movie} />
                                </div>
                                
                                <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                                    <EnhancedIntensityGraph movie={movie} />
                                </div>
                                
                                <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                                    <StrategicDNAHelix movie={movie} />
                                </div>
                                
                                <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                                    <EnhancedWhereToWatchSection movie={movie} />
                                </div>
                                
                                <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                                    <SensitiveContentTimelineSection movie={movie} />
                                </div>
                                
                                <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                                    <RealCommentsRatingSection movie={movie} />
                                </div>
                            </div>
                            
                            {index < movies.length - 1 && (
                                <div className="container mx-auto px-3 sm:px-4 lg:px-6 my-8 sm:my-12 lg:my-16">
                                    <div className="border-t border-gray-800"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="container mx-auto px-3 sm:px-4 lg:px-6 mt-12 sm:mt-16 lg:mt-20 space-y-8 sm:space-y-12 pb-8 sm:pb-12">
                    <SEOFAQSection />
                    <TMDBAttribution />
                </div>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    try {
        const slugs = getAllCollectionSlugs();
        const paths = slugs.map(slug => ({
            params: { collection: slug }
        }));

        return { 
            paths, 
            fallback: false 
        };
    } catch (error) {
        console.error('Error generating static paths:', error);
        return { 
            paths: [], 
            fallback: false 
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        const collection = getCollectionBySlug(params?.collection);
        
        if (!collection) {
            return { notFound: true };
        }

        const dataModule = await import('../utils/movieData');
        const allMovies = dataModule?.COMPLETE_MOVIE_DATABASE || [];
        const movieData = dataModule?.COMPLETE_MOVIE_DATA || {};

        // ✅ CRITICAL FIX - Filter movies by collection IDs
        const collectionMovieIds = collection.movies || [];
        const moviesMap = {};
        
        allMovies.forEach(movie => {
            moviesMap[movie.imdbID] = movie;
        });

        const movies = collectionMovieIds
            .map(imdbID => moviesMap[imdbID])
            .filter(Boolean);

        return {
            props: { 
                collection, 
                movies,
                movieData 
            }
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return { notFound: true };
    }
}

export default CollectionPage;
