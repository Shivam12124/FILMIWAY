// utils/bestActionMoviesRoutes.js - SSG ROUTE MAPPING FOR ACTION COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './bestActionMoviesData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE ACTION MOVIE SLUG MAPPING 
export const BEST_ACTION_MOVIE_SLUGS = {
    // Rank 1: Die Hard
    'tt0095016': 'die-hard',
    
    // Rank 2: Terminator 2: Judgment Day
    'tt0103064': 'terminator-2-judgment-day',
    
    // Rank 3: Mad Max: Fury Road
    'tt1392190': 'mad-max-fury-road',
    
    // Rank 4: Aliens
    'tt0090605': 'aliens',
    
    // Rank 5: John Wick
    'tt2911666': 'john-wick',
    
    // Rank 6: The Raid 2
    'tt2265171': 'the-raid-2',
    
    // Rank 7: Mission: Impossible - Fallout
    'tt4912910': 'mission-impossible-fallout',
    
    // Rank 8: Hard Boiled
    'tt0104684': 'hard-boiled',
    
    // Rank 9: Crouching Tiger, Hidden Dragon
    'tt0190332': 'crouching-tiger-hidden-dragon',
    
    // Rank 10: Shoot 'Em Up
    'tt0465602': 'shoot-em-up'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(BEST_ACTION_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return BEST_ACTION_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR ACTION MOVIES
export const generateBestActionMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: BEST_ACTION_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ ACTION MOVIE NAVIGATION BREADCRUMBS
export const getBestActionMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Action Movies', href: '/collection/best-action-movies' },
        { label: movie.Title, href: `/movie/${BEST_ACTION_MOVIE_SLUGS[movie.imdbID]}` } 
    ];
};

// ✅ GET NEXT/PREVIOUS ACTION MOVIE
export const getBestActionMovieNavigation = (currentMovie) => {
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
            slug: BEST_ACTION_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: BEST_ACTION_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED ACTION MOVIES (SAME GENRE/DECADE)
export const getRelatedBestActionMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    const currentGenre = currentMovie.genre;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                movie.genre.includes(currentGenre.split(',')[0]) || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: BEST_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE ACTION MOVIE SITEMAP URLS
export const generateBestActionMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-action-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${BEST_ACTION_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE ACTION MOVIE SLUG
export const isValidBestActionMovieSlug = (slug) => {
    return Object.values(BEST_ACTION_MOVIE_SLUGS).includes(slug);
};

// ✅ ACTION MOVIE SEARCH/FILTER UTILITIES
export const searchBestActionMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: BEST_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterBestActionMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre.includes(genre))
        .map(movie => ({
            ...movie,
            slug: BEST_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA FROM COMPLETE_MOVIE_DATA
export const sortBestActionMovies = (movies, sortBy) => {
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
        case 'adrenalineScore': // ✅ Custom metric for this collection
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.adrenalineScore || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.adrenalineScore || 0;
                return scoreB - scoreA; 
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET ACTION MOVIE COLLECTION STATS
export const getBestActionCollectionStats = () => {
    const genres = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.genre.split(', ')[0]))]; // Split to get primary genre
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
        // ✅ ADDED - AVERAGE ADRENALINE SCORE
        averageAdrenalineScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const score = COMPLETE_MOVIE_DATA[m.tmdbId]?.adrenalineScore || 85;
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
    BEST_ACTION_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateBestActionMoviePaths,
    getBestActionMovieBreadcrumbs,
    getBestActionMovieNavigation,
    getRelatedBestActionMovies,
    generateBestActionMovieSitemapUrls,
    isValidBestActionMovieSlug,
    searchBestActionMovies,
    filterBestActionMoviesByGenre,
    sortBestActionMovies,
    getBestActionCollectionStats
};