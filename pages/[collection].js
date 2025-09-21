// pages/collection/[collection].js - Dynamic Collection Pages (SSG) - FIXED
import React from 'react';
import Head from 'next/head';

// ✅ IMPORT YOUR EXISTING COMPONENTS (all already exist)
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

// ✅ IMPORT DATA
import { COLLECTIONS, getCollectionBySlug, getAllCollectionSlugs } from '../data/collections';

const CollectionPage = ({ collection, movies, movieData }) => {
    if (!collection || !movies) {
        return <div>Collection not found</div>;
    }

    return (
        <>
            <Head>
                <title>{collection.title} | Filmiway</title>
                <meta name="description" content={collection.description} />
            </Head>

            <CinematicBackground />
            <BackToHomepageButton />
            
            <div className="min-h-screen bg-black text-white relative">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl md:text-6xl font-light text-center mb-4">
                        {collection.headerTitle}
                    </h1>
                    <p className="text-xl text-gray-300 text-center mb-8">
                        {collection.headerSubtitle}
                    </p>
                    
                    {/* Collection Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {collection.badges?.map((badge, index) => (
                            <div key={index} className="bg-yellow-400/20 border border-yellow-400/50 rounded-lg px-4 py-2">
                                <div className="text-yellow-400 font-bold text-sm">{badge.label}</div>
                                <div className="text-gray-300 text-xs">{badge.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* Movies Grid - Uses your existing CinematicMovieCard */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
                        {movies.map((movie, index) => (
                            <CinematicMovieCard 
                                key={movie.imdbID || movie.id || index}
                                movie={movie}
                                rank={10 - index}
                            />
                        ))}
                    </div>
                </div>

                {/* Movie Details - Uses ALL your existing components */}
                {movies.map((movie) => (
                    <div key={movie.imdbID || movie.id} className="mb-16">
                        <EnhancedMovieHero movie={movie} />
                        <MovieDetailsSection movie={movie} />
                        <EnhancedIntensityGraph movie={movie} />
                        <StrategicDNAHelix movie={movie} />
                        <EnhancedWhereToWatchSection movie={movie} />
                        <SensitiveContentTimelineSection movie={movie} />
                        <RealCommentsRatingSection movie={movie} />
                    </div>
                ))}

                <SEOFAQSection />
                <TMDBAttribution />
            </div>
        </>
    );
};

// ✅ SSG Functions
export async function getStaticPaths() {
    try {
        const slugs = getAllCollectionSlugs();
        const paths = slugs.map(slug => ({
            params: { collection: slug }
        }));

        return { paths, fallback: false };
    } catch (error) {
        return { paths: [], fallback: false };
    }
}

export async function getStaticProps({ params }) {
    try {
        const collection = getCollectionBySlug(params?.collection);
        
        if (!collection) {
            return { notFound: true };
        }

   

        const movies = dataModule?.COMPLETE_MOVIE_DATABASE || [];
        const movieData = dataModule?.COMPLETE_MOVIE_DATA || {};

        return {
            props: { collection, movies, movieData }
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default CollectionPage;
