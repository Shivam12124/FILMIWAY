// utils/greedMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR GREED COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './greedMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE GREED MOVIE SLUG MAPPING
export const GREED_MOVIE_SLUGS = {
    // Rank 1: There Will Be Blood
    'tt0469494': 'there-will-be-blood',
    
    // Rank 2: The Wolf of Wall Street
    'tt0993846': 'the-wolf-of-wall-street',
    
    // Rank 3: Wall Street
    'tt0094291': 'wall-street',
    
    // Rank 4: The Treasure of the Sierra Madre
    'tt0040897': 'the-treasure-of-the-sierra-madre',
    
    // Rank 5: Casino
    'tt0112641': 'casino',
    
    // Rank 6: The Big Short
    'tt1596363': 'the-big-short',
    
    // Rank 7: Uncut Gems
    'tt5727208': 'uncut-gems',
    
    // Rank 8: Greed
    'tt0015881': 'greed',
    
    // Rank 9: American Psycho
    'tt0144084': 'american-psycho',
    
    // Rank 10: A Simple Plan
    'tt0120324': 'a-simple-plan'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(GREED_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return GREED_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR GREED MOVIES
export const generateGreedMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: GREED_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ GREED MOVIE NAVIGATION BREADCRUMBS
export const getGreedMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Movies About Greed', href: '/collection/best-movies-about-greed' },
        { label: movie.Title, href: `/movie/${GREED_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS GREED MOVIE
export const getGreedMovieNavigation = (currentMovie) => {
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
            slug: GREED_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: GREED_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED GREED MOVIES (SAME GENRE/DECADE)
export const getRelatedGreedMovies = (currentMovie, limit = 3) => {
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
            slug: GREED_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE GREED MOVIE SITEMAP URLS
export const generateGreedMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-movies-about-greed`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${GREED_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE GREED MOVIE SLUG
export const isValidGreedMovieSlug = (slug) => {
    return Object.values(GREED_MOVIE_SLUGS).includes(slug);
};

// ✅ GREED MOVIE SEARCH/FILTER UTILITIES
export const searchGreedMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            (COMPLETE_MOVIE_DATA[movie.tmdbId]?.director || '').toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: GREED_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterGreedMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: GREED_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortGreedMovies = (movies, sortBy) => {
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
        case 'greedLevel': // ✅ Uses our custom metric!
            return sortedMovies.sort((a, b) => {
                const intensityA = COMPLETE_MOVIE_DATA[a.tmdbId]?.greedIndex || 0;
                const intensityB = COMPLETE_MOVIE_DATA[b.tmdbId]?.greedIndex || 0;
                return intensityB - intensityA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET GREED COLLECTION STATS
export const getGreedCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE GREED INDEX
        averageGreedIndex: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.greedIndex || 0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    GREED_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateGreedMoviePaths,
    getGreedMovieBreadcrumbs,
    getGreedMovieNavigation,
    getRelatedGreedMovies,
    generateGreedMovieSitemapUrls,
    isValidGreedMovieSlug,
    searchGreedMovies,
    filterGreedMoviesByGenre,
    sortGreedMovies,
    getGreedCollectionStats
};