// utils/roadTripMovieRoutes.js - SSG ROUTE MAPPING FOR ROAD TRIP COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './roadTripMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE ROAD TRIP MOVIE SLUG MAPPING 
export const ROAD_TRIP_MOVIE_SLUGS = {
    // Rank 1: Y Tu Mamá También
    'tt0245574': 'y-tu-mama-tambien',
    
    // Rank 2: Thelma & Louise
    'tt0103074': 'thelma-louise',
    
    // Rank 3: Rain Man
    'tt0095953': 'rain-man',
    
    // Rank 4: Into the Wild
    'tt0758758': 'into-the-wild',
    
    // Rank 5: The Straight Story
    'tt0166896': 'the-straight-story',
    
    // Rank 6: Little Miss Sunshine
    'tt0449059': 'little-miss-sunshine',
    
    // Rank 7: The Motorcycle Diaries
    'tt0318462': 'the-motorcycle-diaries',
    
    // Rank 8: Sideways
    'tt0375063': 'sideways',
    
    // Rank 9: Easy Rider
    'tt0064276': 'easy-rider',
    
    // Rank 10: National Lampoon's Vacation
    'tt0085995': 'national-lampoons-vacation'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(ROAD_TRIP_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return ROAD_TRIP_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR ROAD TRIP MOVIES
export const generateRoadTripMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: ROAD_TRIP_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ ROAD TRIP MOVIE NAVIGATION BREADCRUMBS
export const getRoadTripMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Top 10 Road Trip Movies', href: '/collection/top-10-road-trip-movies' },
        { label: movie.Title, href: `/movie/${ROAD_TRIP_MOVIE_SLUGS[movie.imdbID]}` } 
    ];
};

// ✅ GET NEXT/PREVIOUS ROAD TRIP MOVIE
export const getRoadTripMovieNavigation = (currentMovie) => {
    const currentIndex = COMPLETE_MOVIE_DATABASE.findIndex(m => m.imdbID === currentMovie.imdbID);
    
    const previousMovie = currentIndex > 0 
        ? COMPLETE_MOVIE_DATABASE[currentIndex - 1]
        : null;
        
    const nextMovie = currentIndex < COMPLETE_MOVIE_DATABASE.length - 1
        ? COMPLETE_MOVIE_DATABASE[currentIndex + 1]
        : null;
    
    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: ROAD_TRIP_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: ROAD_TRIP_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED ROAD TRIP MOVIES (SAME GENRE/DECADE)
export const getRelatedRoadTripMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    const currentGenre = currentMovie.genre;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                movie.genre === currentGenre || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: ROAD_TRIP_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE ROAD TRIP MOVIE SITEMAP URLS
export const generateRoadTripMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/top-10-road-trip-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${ROAD_TRIP_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE ROAD TRIP MOVIE SLUG
export const isValidRoadTripMovieSlug = (slug) => {
    return Object.values(ROAD_TRIP_MOVIE_SLUGS).includes(slug);
};

// ✅ ROAD TRIP MOVIE SEARCH/FILTER UTILITIES
export const searchRoadTripMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: ROAD_TRIP_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterRoadTripMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: ROAD_TRIP_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA FROM COMPLETE_MOVIE_DATA
export const sortRoadTripMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => {
                const ratingA = COMPLETE_MOVIE_DATA[a.tmdbId]?.rating || 0;
                const ratingB = COMPLETE_MOVIE_DATA[b.tmdbId]?.rating || 0;
                return ratingB - ratingA;
            });
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'wanderlustLevel': // ✅ Custom metric for the Road Trip collection
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.wanderlustScore || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.wanderlustScore || 0;
                return scoreB - scoreA; 
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET ROAD TRIP MOVIE COLLECTION STATS
export const getRoadTripCollectionStats = () => {
    const genres = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.genre))];
    const decades = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => Math.floor(m.year / 10) * 10))];
    const yearRange = {
        earliest: Math.min(...COMPLETE_MOVIE_DATABASE.map(m => m.year)),
        latest: Math.max(...COMPLETE_MOVIE_DATABASE.map(m => m.year))
    };
    
    return {
        totalMovies: COMPLETE_MOVIE_DATABASE.length,
        genres: genres.length,
        genreList: genres,
        decades: decades.sort((a, b) => a - b),
        yearRange,
        averageYear: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.year, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRuntime: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.runtime, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE WANDERLUST SCORE
        averageWanderlustScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const score = COMPLETE_MOVIE_DATA[m.tmdbId]?.wanderlustScore || 85;
                return sum + score;
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const rating = COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 0;
                return sum + rating;
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    ROAD_TRIP_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateRoadTripMoviePaths,
    getRoadTripMovieBreadcrumbs,
    getRoadTripMovieNavigation,
    getRelatedRoadTripMovies,
    generateRoadTripMovieSitemapUrls,
    isValidRoadTripMovieSlug,
    searchRoadTripMovies,
    filterRoadTripMoviesByGenre,
    sortRoadTripMovies,
    getRoadTripCollectionStats
};