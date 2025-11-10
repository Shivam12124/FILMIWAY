// utils/detectiveThrillerMovieRoutes.js - 10 BEST DETECTIVE THRILLER MOVIE ROUTES MAPPING

import COMPLETE_DETECTIVE_THRILLER_DATABASE, { DETECTIVE_THRILLER_MOVIES } from './detectiveThrillerMovieData';

// ✅ DETECTIVE THRILLER MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const DETECTIVE_THRILLER_MOVIE_SLUGS = {
  'tt0114369': 'se7en',
  'tt0443706': 'zodiac',
  'tt1392214': 'prisoners',
  'tt1305806': 'the-secret-in-their-eyes',
  'tt0353969': 'memories-of-murder',
  'tt1190539': 'the-chaser',
  'tt0327056': 'mystic-river',
  'tt32539724': 'marshland',
  'tt0116282': 'fargo',
  'tt0106977': 'the-fugitive'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
  Object.entries(DETECTIVE_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
  return DETECTIVE_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
  const imdbId = SLUG_TO_IMDB[slug];
  if (!imdbId) return null;
  return DETECTIVE_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
  return DETECTIVE_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR DETECTIVE THRILLER MOVIES
export const generateDetectiveThrillerMoviePaths = () => {
  return DETECTIVE_THRILLER_MOVIES.map(movie => ({
    params: {
      imdbId: movie.imdbID
    }
  }));
};

// ✅ GET NEXT/PREVIOUS DETECTIVE THRILLER MOVIE
export const getDetectiveThrillerMovieNavigation = (currentMovie) => {
  const currentIndex = DETECTIVE_THRILLER_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
    ? DETECTIVE_THRILLER_MOVIES[currentIndex - 1]
    : null;

  const nextMovie = currentIndex < DETECTIVE_THRILLER_MOVIES.length - 1
    ? DETECTIVE_THRILLER_MOVIES[currentIndex + 1]
    : null;

  return {
    previous: previousMovie ? {
      ...previousMovie,
      slug: DETECTIVE_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
    } : null,
    next: nextMovie ? {
      ...nextMovie,
      slug: DETECTIVE_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
    } : null
  };
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_DETECTIVE_THRILLER_DATABASE,
  DETECTIVE_THRILLER_MOVIES,
  DETECTIVE_THRILLER_MOVIE_SLUGS,
  SLUG_TO_IMDB,
  getMovieByImdbId,
  getMovieBySlug,
  getMovieSlug,
  generateDetectiveThrillerMoviePaths,
  getDetectiveThrillerMovieNavigation
};
