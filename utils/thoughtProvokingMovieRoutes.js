// utils/thoughtProvokingMovieRoutes.js - SSG ROUTE MAPPING FOR THOUGHT-PROVOKING COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './thoughtProvokingMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE THOUGHT-PROVOKING MOVIE SLUG MAPPING 
export const THOUGHT_PROVOKING_MOVIE_SLUGS = {
    // Rank 1: 12 Angry Men
    'tt0050083': '12-angry-men',
    
    // Rank 2: Parasite
    'tt6751668': 'parasite',
    
    // Rank 3: Incendies
    'tt1255953': 'incendies',
    
    // Rank 4: Dead Poets Society
    'tt0097165': 'dead-poets-society',
    
    // Rank 5: Taste of Cherry
    'tt0120265': 'taste-of-cherry',
    
    // Rank 6: The Father
    'tt10272386': 'the-father',
    
    // Rank 7: Children of Men
    'tt0206634': 'children-of-men',
    
    // Rank 8: The Truman Show
    'tt0120382': 'the-truman-show',
    
    // Rank 9: A Clockwork Orange
    'tt0066921': 'a-clockwork-orange',
    
    // Rank 10: Requiem for a Dream
    'tt0180093': 'requiem-for-a-dream'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(THOUGHT_PROVOKING_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return THOUGHT_PROVOKING_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR THOUGHT-PROVOKING MOVIES
export const generateThoughtProvokingMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: THOUGHT_PROVOKING_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ THOUGHT-PROVOKING MOVIE NAVIGATION BREADCRUMBS
export const getThoughtProvokingMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Thought-Provoking Movies', href: '/collection/best-thought-provoking-movies' },
        { label: movie.Title, href: `/movies/best-thought-provoking-movies/${THOUGHT_PROVOKING_MOVIE_SLUGS[movie.imdbID]}` } 
    ];
};

// ✅ GET NEXT/PREVIOUS THOUGHT-PROVOKING MOVIE
export const getThoughtProvokingMovieNavigation = (currentMovie) => {
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
            slug: THOUGHT_PROVOKING_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: THOUGHT_PROVOKING_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED THOUGHT-PROVOKING MOVIES (SAME GENRE/DECADE)
export const getRelatedThoughtProvokingMovies = (currentMovie, limit = 3) => {
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
            slug: THOUGHT_PROVOKING_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE THOUGHT-PROVOKING MOVIE SITEMAP URLS
export const generateThoughtProvokingMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-thought-provoking-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movies/best-thought-provoking-movies/${THOUGHT_PROVOKING_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE THOUGHT-PROVOKING MOVIE SLUG
export const isValidThoughtProvokingMovieSlug = (slug) => {
    return Object.values(THOUGHT_PROVOKING_MOVIE_SLUGS).includes(slug);
};

// ✅ THOUGHT-PROVOKING MOVIE SEARCH/FILTER UTILITIES
export const searchThoughtProvokingMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: THOUGHT_PROVOKING_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterThoughtProvokingMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: THOUGHT_PROVOKING_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA FROM COMPLETE_MOVIE_DATA
export const sortThoughtProvokingMovies = (movies, sortBy) => {
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
        case 'philosophicalLevel': // ✅ Custom metric for this collection
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.philosophicalDepth || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.philosophicalDepth || 0;
                return scoreB - scoreA; 
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET THOUGHT-PROVOKING MOVIE COLLECTION STATS
export const getThoughtProvokingCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE PHILOSOPHICAL SCORE
        averagePhilosophicalScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const score = COMPLETE_MOVIE_DATA[m.tmdbId]?.philosophicalDepth || 85;
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
    THOUGHT_PROVOKING_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateThoughtProvokingMoviePaths,
    getThoughtProvokingMovieBreadcrumbs,
    getThoughtProvokingMovieNavigation,
    getRelatedThoughtProvokingMovies,
    generateThoughtProvokingMovieSitemapUrls,
    isValidThoughtProvokingMovieSlug,
    searchThoughtProvokingMovies,
    filterThoughtProvokingMoviesByGenre,
    sortThoughtProvokingMovies,
    getThoughtProvokingCollectionStats
};