// utils/mysteryThrillerMovieRoutes.js - MYSTERY THRILLER MOVIE ROUTE MAPPING

import COMPLETE_MYSTERY_THRILLER_DATABASE, { MYSTERY_THRILLER_MOVIES } from './mysteryThrillerMovieData';

// ✅ MYSTERY THRILLER MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const MYSTERY_THRILLER_MOVIE_SLUGS = {
  'tt0114369': 'se7en',
  'tt1130884': 'shutter-island',
  'tt1392214': 'prisoners',
  'tt0443706': 'zodiac',
  'tt2267998': 'gone-girl',
  'tt0353969': 'memories-of-murder',
  'tt4857264': 'the-invisible-guest',
  'tt7282468': 'burning',
  'tt0119174': 'the-game',
  'tt0119177': 'identity'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
  Object.entries(MYSTERY_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
  return MYSTERY_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
  const imdbId = SLUG_TO_IMDB[slug];
  if (!imdbId) return null;
  return MYSTERY_THRILLER_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
  return MYSTERY_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR MYSTERY THRILLER MOVIES
export const generateMysteryThrillerMoviePaths = () => {
  return MYSTERY_THRILLER_MOVIES.map(movie => ({
    params: {
      imdbId: movie.imdbID
    }
  }));
};

// ✅ GET NEXT/PREVIOUS MYSTERY THRILLER MOVIE
export const getMysteryThrillerMovieNavigation = (currentMovie) => {
  const currentIndex = MYSTERY_THRILLER_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
    ? MYSTERY_THRILLER_MOVIES[currentIndex - 1]
    : null;

  const nextMovie = currentIndex < MYSTERY_THRILLER_MOVIES.length - 1
    ? MYSTERY_THRILLER_MOVIES[currentIndex + 1]
    : null;

  return {
    previous: previousMovie ? {
      ...previousMovie,
      slug: MYSTERY_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
    } : null,
    next: nextMovie ? {
      ...nextMovie,
      slug: MYSTERY_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
    } : null
  };
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_MYSTERY_THRILLER_DATABASE,
  MYSTERY_THRILLER_MOVIES,
  MYSTERY_THRILLER_MOVIE_SLUGS,
  SLUG_TO_IMDB,
  getMovieByImdbId,
  getMovieBySlug,
  getMovieSlug,
  generateMysteryThrillerMoviePaths,
  getMysteryThrillerMovieNavigation
};
