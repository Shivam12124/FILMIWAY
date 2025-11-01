// utils/dramaMovieRoutes.js - DRAMA MOVIE ROUTE MAPPING

import COMPLETE_MOVIE_DATABASE, { DRAMA_MOVIES } from './dramaMovieData';

// ✅ Use COMPLETE_MOVIE_DATABASE directly (already an object)
//      No .reduce necessary!

// ✅ DRAMA MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const DRAMA_MOVIE_SLUGS = {
    'tt8579674': '1917',
    'tt6155172': 'roma',
    'tt1302006': 'the-irishman',
    'tt7653254': 'marriage-story',
    'tt1285016': 'the-social-network',
    'tt7533152': 'the-boy-who-harnessed-the-wind',
    'tt10293406': 'the-power-of-the-dog',
    'tt2396589': 'mudbound',
    'tt0454921': 'the-pursuit-of-happyness',
    'tt10633456': 'minari'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(DRAMA_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
    return DRAMA_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    return DRAMA_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return DRAMA_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR DRAMA MOVIES
export const generateDramaMoviePaths = () => {
    return DRAMA_MOVIES.map(movie => ({
        params: {
            imdbId: movie.imdbID
        }
    }));
};

// ✅ GET NEXT/PREVIOUS DRAMA MOVIE
export const getDramaMovieNavigation = (currentMovie) => {
    const currentIndex = DRAMA_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

    const previousMovie = currentIndex > 0
        ? DRAMA_MOVIES[currentIndex - 1]
        : null;

    const nextMovie = currentIndex < DRAMA_MOVIES.length - 1
        ? DRAMA_MOVIES[currentIndex + 1]
        : null;

    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: DRAMA_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: DRAMA_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// Optionally, export everything object-style for legacy default import
export default {
    COMPLETE_MOVIE_DATABASE,
    DRAMA_MOVIES,
    DRAMA_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieByImdbId,
    getMovieBySlug,
    getMovieSlug,
    generateDramaMoviePaths,
    getDramaMovieNavigation
};
