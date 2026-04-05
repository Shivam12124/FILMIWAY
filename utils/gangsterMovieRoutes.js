// utils/gangsterMovieRoutes.js - SSG ROUTE MAPPING FOR GANGSTER COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './gangsterMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE GANGSTER MOVIE SLUG MAPPING
export const GANGSTER_MOVIE_SLUGS = {
    // Rank 1: The Godfather Part II
    'tt0071562': 'the-godfather-part-ii',
    
    // Rank 2: The Godfather
    'tt0068646': 'the-godfather',
    
    // Rank 3: Goodfellas
    'tt0099685': 'goodfellas',
    
    // Rank 4: City of God
    'tt0317248': 'city-of-god',
    
    // Rank 5: Once Upon a Time in America
    'tt0087843': 'once-upon-a-time-in-america',
    
    // Rank 6: Casino
    'tt0112641': 'casino',
    
    // Rank 7: Scarface
    'tt0086250': 'scarface',
    
    // Rank 8: Eastern Promises
    'tt0765443': 'eastern-promises',
    
    // Rank 9: Carlito's Way
    'tt0106519': 'carlitos-way',
    
    // Rank 10: Gangs of New York
    'tt0217505': 'gangs-of-new-york'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(GANGSTER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return GANGSTER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR GANGSTER MOVIES
export const generateGangsterMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: GANGSTER_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ GANGSTER MOVIE NAVIGATION BREADCRUMBS
export const getGangsterMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Gangster Movies of All Time', href: '/collection/best-gangster-movies-of-all-time' },
        { label: movie.Title, href: `/collection/best-gangster-movies-of-all-time/${GANGSTER_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS GANGSTER MOVIE
export const getGangsterMovieNavigation = (currentMovie) => {
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
            slug: GANGSTER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: GANGSTER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED GANGSTER MOVIES (SAME GENRE)
export const getRelatedGangsterMovies = (currentMovie, limit = 3) => {
    const currentGenre = currentMovie.genre;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && movie.genre === currentGenre
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: GANGSTER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GANGSTER COLLECTION METADATA
export const GANGSTER_COLLECTION_META = {
    title: "10 Best Gangster Movies of All Time",
    description: "The defining cinematic masterpieces of the criminal underworld, exploring themes of loyalty, betrayal, and the devastating cost of ruthless ambition.",
    slug: "best-gangster-movies-of-all-time"
};

// ✅ GENERATE GANGSTER MOVIE SITEMAP URLS
export const generateGangsterMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-gangster-movies-of-all-time`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-gangster-movies-of-all-time/${GANGSTER_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE GANGSTER MOVIE SLUG
export const isValidGangsterMovieSlug = (slug) => {
    return Object.values(GANGSTER_MOVIE_SLUGS).includes(slug);
};

// ✅ GANGSTER MOVIE SEARCH/FILTER UTILITIES
export const searchGangsterMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => {
            const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId] || {};
            return (
                movie.Title.toLowerCase().includes(lowercaseQuery) ||
                movie.genre.toLowerCase().includes(lowercaseQuery) ||
                (movieInfo.director && movieInfo.director.toLowerCase().includes(lowercaseQuery)) ||
                movie.year.toString().includes(query)
            );
        })
        .map(movie => ({
            ...movie,
            slug: GANGSTER_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterGangsterMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: GANGSTER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING - ADAPTED FOR GANGSTER METRICS (e.g., Underworld Grit)
export const sortGangsterMovies = (movies, sortBy) => {
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
        case 'underworldGrit':
            return sortedMovies.sort((a, b) => {
                const gritA = COMPLETE_MOVIE_DATA[a.tmdbId]?.underworldGrit || 0;
                const gritB = COMPLETE_MOVIE_DATA[b.tmdbId]?.underworldGrit || 0;
                return gritB - gritA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET GANGSTER COLLECTION STATS
export const getGangsterCollectionStats = () => {
    const genres = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.genre))];
    const yearRange = {
        earliest: Math.min(...COMPLETE_MOVIE_DATABASE.map(m => m.year)),
        latest: Math.max(...COMPLETE_MOVIE_DATABASE.map(m => m.year))
    };
    
    // Safely calculate averages utilizing the linked COMPLETE_MOVIE_DATA
    const totalUnderworldGrit = COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.underworldGrit || 0), 0);
    const totalRating = COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 0), 0);

    return {
        totalMovies: COMPLETE_MOVIE_DATABASE.length,
        genres: genres.length,
        genreList: genres,
        yearRange,
        averageYear: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.year, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRuntime: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.runtime, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageUnderworldGrit: Math.round(totalUnderworldGrit / COMPLETE_MOVIE_DATABASE.length),
        averageRating: (totalRating / COMPLETE_MOVIE_DATABASE.length).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    GANGSTER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateGangsterMoviePaths,
    getGangsterMovieBreadcrumbs,
    getGangsterMovieNavigation,
    getRelatedGangsterMovies,
    GANGSTER_COLLECTION_META,
    generateGangsterMovieSitemapUrls,
    isValidGangsterMovieSlug,
    searchGangsterMovies,
    filterGangsterMoviesByGenre,
    sortGangsterMovies,
    getGangsterCollectionStats
};