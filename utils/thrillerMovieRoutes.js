// utils/thrillerMovieRoutes.js - THRILLER MOVIE ROUTE MAPPING

import COMPLETE_THRILLER_DATABASE, { THRILLER_MOVIES } from './thrillerMovieData';

// ✅ THRILLER MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const THRILLER_MOVIE_SLUGS = {
    'tt0114369': 'se7en',
    'tt1392214': 'prisoners',
    'tt0477348': 'no-country-for-old-men',
    'tt0102926': 'the-silence-of-the-lambs',
    'tt0353969': 'memories-of-murder',
    'tt0327056': 'mystic-river',
    'tt0407887': 'the-departed',
    'tt5362988': 'wind-river',
    'tt2267998': 'gone-girl',
    'tt0119174': 'the-game'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
    return THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    return THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR THRILLER MOVIES
export const generateThrillerMoviePaths = () => {
    return THRILLER_MOVIES.map(movie => ({
        params: {
            imdbId: movie.imdbID
        }
    }));
};

// ✅ GET NEXT/PREVIOUS THRILLER MOVIE
export const getThrillerMovieNavigation = (currentMovie) => {
    const currentIndex = THRILLER_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

    const previousMovie = currentIndex > 0
        ? THRILLER_MOVIES[currentIndex - 1]
        : null;

    const nextMovie = currentIndex < THRILLER_MOVIES.length - 1
        ? THRILLER_MOVIES[currentIndex + 1]
        : null;

    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// Optionally, export everything for easier imports
export default {
    COMPLETE_THRILLER_DATABASE,
    THRILLER_MOVIES,
    THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieByImdbId,
    getMovieBySlug,
    getMovieSlug,
    generateThrillerMoviePaths,
    getThrillerMovieNavigation
};
