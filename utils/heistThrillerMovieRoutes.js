// utils/heistThrillerMovieRoutes.js - HEIST THRILLER MOVIE ROUTE MAPPING

import COMPLETE_HEIST_THRILLER_DATABASE, { HEIST_THRILLER_MOVIES } from './heistThrillerMovieData';

// ✅ HEIST THRILLER MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const HEIST_THRILLER_MOVIE_SLUGS = {
  'tt0113277': 'heat',
  'tt0105236': 'reservoir-dogs',
  'tt0844708': 'the-town',
  'tt0475304': 'hell-or-high-water',
  'tt0305224': 'the-bank-job',
  'tt0454848': 'inside-man',
  'tt0081505': 'thief',
  'tt0073195': 'dog-day-afternoon',
  'tt0074751': 'the-italian-job',
  'tt0240772': 'oceans-eleven'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
  Object.entries(HEIST_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
  return HEIST_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
  const imdbId = SLUG_TO_IMDB[slug];
  if (!imdbId) return null;
  return HEIST_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
  return HEIST_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HEIST THRILLER MOVIES
export const generateHeistThrillerMoviePaths = () => {
  return HEIST_THRILLER_MOVIES.map(movie => ({
      params: {
          imdbId: movie.imdbID
      }
  }));
};

// ✅ GET NEXT/PREVIOUS HEIST THRILLER MOVIE
export const getHeistThrillerMovieNavigation = (currentMovie) => {
  const currentIndex = HEIST_THRILLER_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
      ? HEIST_THRILLER_MOVIES[currentIndex - 1]
      : null;

  const nextMovie = currentIndex < HEIST_THRILLER_MOVIES.length - 1
      ? HEIST_THRILLER_MOVIES[currentIndex + 1]
      : null;

  return {
      previous: previousMovie ? {
          ...previousMovie,
          slug: HEIST_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
      } : null,
      next: nextMovie ? {
          ...nextMovie,
          slug: HEIST_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
      } : null
  };
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_HEIST_THRILLER_DATABASE,
  HEIST_THRILLER_MOVIES,
  HEIST_THRILLER_MOVIE_SLUGS,
  SLUG_TO_IMDB,
  getMovieByImdbId,
  getMovieBySlug,
  getMovieSlug,
  generateHeistThrillerMoviePaths,
  getHeistThrillerMovieNavigation
};
