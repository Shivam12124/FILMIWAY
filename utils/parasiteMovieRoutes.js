// utils/parasiteMovieRoutes.js - MOVIES LIKE PARASITE ROUTE MAPPING

import { COMPLETE_MOVIE_DATABASE } from './parasiteMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PARASITE-LIKE MOVIE SLUG MAPPING
export const PARASITE_MOVIE_SLUGS = {

    
    // Rank 1: The Handmaiden
    'tt4016934': 'the-handmaiden',
    
    // Rank 2: Burning
    'tt7282468': 'burning',
    
    // Rank 3: Snowpiercer
    'tt1706620': 'snowpiercer',
    
    // Rank 4: Memories of Murder
    'tt0353969': 'memories-of-murder',
    
    // Rank 5: Shoplifters
    'tt8075192': 'shoplifters',
    
    // Rank 6: The Platform
    'tt8228288': 'the-platform',
    
    // Rank 7: Mother
    'tt1216496': 'mother',
    
    // Rank 8: The Killing of a Sacred Deer
    'tt5715874': 'the-killing-of-a-sacred-deer',
    
    // Rank 9: The Housemaid
// Rank 9: The Housemaid (1960)
'tt0150980': 'the-housemaid',
    
    // Rank 10: The Talented Mr. Ripley
    'tt0134119': 'the-talented-mr-ripley'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PARASITE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PARASITE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PARASITE MOVIES - FIXED
export const generateParasiteMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARASITE_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PARASITE MOVIE NAVIGATION BREADCRUMBS
export const getParasiteMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like Parasite', href: '/collection/movies-like-parasite' },
        { label: movie.Title, href: `/collection/movies-like-parasite/${PARASITE_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS PARASITE MOVIE - FIXED
export const getParasiteMovieNavigation = (currentMovie) => {
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
            slug: PARASITE_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARASITE_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED PARASITE MOVIES (SAME GENRE/DIRECTOR)
export const getRelatedParasiteMovies = (currentMovie, limit = 3) => {
    const currentGenre = currentMovie.genre;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && 
            movie.genre === currentGenre
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: PARASITE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ PARASITE COLLECTION METADATA - FIXED WITH REAL DATA
export const PARASITE_COLLECTION_META = {
    title: 'Movies Like Parasite - 10 Class Warfare Thrillers',
    description: 'Discover 10 brilliant films like Parasite exploring class inequality, social commentary, and twisted narratives. From Bong Joon Ho to international cinema.',
    keywords: 'movies like parasite, class warfare films, social thriller movies, bong joon ho movies, korean cinema, class inequality films',
    canonicalUrl: 'https://filmiway.com/collection/movies-like-parasite',
    ogImage: 'https://filmiway.com/images/parasite-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - NOW USES REAL CLASS WARFARE INDEX DATA
    averageClassWarfareIndex: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const movieData = require('./parasiteMovieData').COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (movieData?.classWarfareIndex || 75);
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE PARASITE MOVIE SITEMAP URLS
export const generateParasiteMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-parasite`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-parasite/${PARASITE_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE PARASITE MOVIE SLUG
export const isValidParasiteMovieSlug = (slug) => {
    return Object.values(PARASITE_MOVIE_SLUGS).includes(slug);
};

// ✅ PARASITE MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchParasiteMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => {
            const movieData = require('./parasiteMovieData').COMPLETE_MOVIE_DATA[movie.tmdbId];
            return (
                movie.Title.toLowerCase().includes(lowercaseQuery) ||
                movie.genre.toLowerCase().includes(lowercaseQuery) ||
                movieData?.director?.toLowerCase().includes(lowercaseQuery) ||
                movie.year.toString().includes(query)
            );
        })
        .map(movie => ({
            ...movie,
            slug: PARASITE_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterParasiteMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARASITE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortParasiteMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    const { COMPLETE_MOVIE_DATA } = require('./parasiteMovieData');
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => {
                const ratingA = COMPLETE_MOVIE_DATA[a.tmdbId]?.rating || 7.0;
                const ratingB = COMPLETE_MOVIE_DATA[b.tmdbId]?.rating || 7.0;
                return ratingB - ratingA;
            });
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'classWarfare':
            return sortedMovies.sort((a, b) => {
                const indexA = COMPLETE_MOVIE_DATA[a.tmdbId]?.classWarfareIndex || 75;
                const indexB = COMPLETE_MOVIE_DATA[b.tmdbId]?.classWarfareIndex || 75;
                return indexB - indexA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET PARASITE MOVIE COLLECTION STATS
export const getParasiteCollectionStats = () => {
    const { COMPLETE_MOVIE_DATA } = require('./parasiteMovieData');
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
        // ✅ ADDED - AVERAGE CLASS WARFARE INDEX
        averageClassWarfareIndex: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.classWarfareIndex || 75);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ GET DIRECTORS IN COLLECTION
export const getParasiteCollectionDirectors = () => {
    const { COMPLETE_MOVIE_DATA } = require('./parasiteMovieData');
    const directors = {};
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        const director = COMPLETE_MOVIE_DATA[movie.tmdbId]?.director;
        if (director) {
            if (!directors[director]) {
                directors[director] = [];
            }
            directors[director].push({
                ...movie,
                slug: PARASITE_MOVIE_SLUGS[movie.imdbID]
            });
        }
    });
    
    return directors;
};

// ✅ GET MOVIES BY BONG JOON HO (he has 3 in this collection!)
export const getBongJoonHoMovies = () => {
    const { COMPLETE_MOVIE_DATA } = require('./parasiteMovieData');
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => {
            const director = COMPLETE_MOVIE_DATA[movie.tmdbId]?.director;
            return director === 'Bong Joon Ho';
        })
        .map(movie => ({
            ...movie,
            slug: PARASITE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    PARASITE_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParasiteMoviePaths,
    getParasiteMovieBreadcrumbs,
    getParasiteMovieNavigation,
    getRelatedParasiteMovies,
    PARASITE_COLLECTION_META,
    generateParasiteMovieSitemapUrls,
    isValidParasiteMovieSlug,
    searchParasiteMovies,
    filterParasiteMoviesByGenre,
    sortParasiteMovies,
    getParasiteCollectionStats,
    getParasiteCollectionDirectors,
    getBongJoonHoMovies
};
