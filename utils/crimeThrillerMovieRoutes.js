// utils/crimeThrillerMovieRoutes.js - CRIME THRILLER MOVIE ROUTE MAPPING


import COMPLETE_CRIME_THRILLER_DATABASE, { CRIME_THRILLER_MOVIES } from './crimeThrillerMovieData';


// ✅ CRIME THRILLER MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const CRIME_THRILLER_MOVIE_SLUGS = {
    'tt0113277': 'heat',
    'tt0119488': 'la-confidential',
    'tt0477348': 'no-country-for-old-men',
    'tt0443706': 'zodiac',
    'tt1392214': 'prisoners',
    'tt0114369': 'the-usual-suspects',
    'tt0327056': 'mystic-river',
    'tt0353969': 'memories-of-murder',
    'tt0407887': 'the-departed',
    'tt0472043': 'training-day'
};


// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(CRIME_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);


// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
    return CRIME_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};


// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    return CRIME_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};


// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return CRIME_THRILLER_MOVIE_SLUGS[imdbId] || null;
};


// ✅ GENERATE ALL STATIC PATHS FOR CRIME THRILLER MOVIES
export const generateCrimeThrillerMoviePaths = () => {
    return CRIME_THRILLER_MOVIES.map(movie => ({
        params: {
            imdbId: movie.imdbID
        }
    }));
};


// ✅ GET NEXT/PREVIOUS CRIME THRILLER MOVIE
export const getCrimeThrillerMovieNavigation = (currentMovie) => {
    const currentIndex = CRIME_THRILLER_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);


    const previousMovie = currentIndex > 0
        ? CRIME_THRILLER_MOVIES[currentIndex - 1]
        : null;


    const nextMovie = currentIndex < CRIME_THRILLER_MOVIES.length - 1
        ? CRIME_THRILLER_MOVIES[currentIndex + 1]
        : null;


    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: CRIME_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: CRIME_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};


// Optionally, export everything for easier imports
export default {
    COMPLETE_CRIME_THRILLER_DATABASE,
    CRIME_THRILLER_MOVIES,
    CRIME_THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieByImdbId,
    getMovieBySlug,
    getMovieSlug,
    generateCrimeThrillerMoviePaths,
    getCrimeThrillerMovieNavigation
};
