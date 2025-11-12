// utils/psychologicalThrillerMovieRoutes.js - PSYCHOLOGICAL THRILLER MOVIE ROUTE MAPPING

import COMPLETE_PSYCH_THRILLER_DATABASE, { PSYCH_THRILLER_MOVIES } from './psychologicalThrillerMovieData';

// ✅ PSYCHOLOGICAL THRILLER MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const PSYCH_THRILLER_MOVIE_SLUGS = {
  'tt0102926': 'the-silence-of-the-lambs',
  'tt0137523': 'fight-club',
  'tt0209144': 'memento',
  'tt0114369': 'se7en',
  'tt1130884': 'shutter-island',
  'tt0947798': 'black-swan',
  'tt0361862': 'the-machinist',
  'tt0364569': 'oldboy',
  'tt0075314': 'taxi-driver',
  'tt0081505': 'the-shining'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
  Object.entries(PSYCH_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
  return PSYCH_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
  const imdbId = SLUG_TO_IMDB[slug];
  if (!imdbId) return null;
  return PSYCH_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
  return PSYCH_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PSYCHOLOGICAL THRILLER MOVIES
export const generatePsychThrillerMoviePaths = () => {
  return PSYCH_THRILLER_MOVIES.map(movie => ({
    params: {
      imdbId: movie.imdbID
    }
  }));
};

// ✅ GET NEXT/PREVIOUS PSYCHOLOGICAL THRILLER MOVIE
export const getPsychThrillerMovieNavigation = (currentMovie) => {
  const currentIndex = PSYCH_THRILLER_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
    ? PSYCH_THRILLER_MOVIES[currentIndex - 1]
    : null;

  const nextMovie = currentIndex < PSYCH_THRILLER_MOVIES.length - 1
    ? PSYCH_THRILLER_MOVIES[currentIndex + 1]
    : null;

  return {
    previous: previousMovie ? {
      ...previousMovie,
      slug: PSYCH_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
    } : null,
    next: nextMovie ? {
      ...nextMovie,
      slug: PSYCH_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
    } : null
  };
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_PSYCH_THRILLER_DATABASE,
  PSYCH_THRILLER_MOVIES,
  PSYCH_THRILLER_MOVIE_SLUGS,
  SLUG_TO_IMDB,
  getMovieByImdbId,
  getMovieBySlug,
  getMovieSlug,
  generatePsychThrillerMoviePaths,
  getPsychThrillerMovieNavigation
};
