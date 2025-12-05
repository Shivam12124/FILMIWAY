// utils/revengeMovieRoutes.js - 10 BEST REVENGE MOVIE ROUTES MAPPING

import COMPLETE_REVENGE_DATABASE, { REVENGE_MOVIES } from './revengeMovieData';

// ✅ REVENGE MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const REVENGE_MOVIE_SLUGS = {
  'tt0364569': 'oldboy',
  'tt0172495': 'gladiator',
  'tt0105695': 'unforgiven',
  'tt0112573': 'braveheart',
  'tt0482571': 'the-prestige',
  'tt1663202': 'the-revenant',
  'tt0378194': 'kill-bill-vol-2',
  'tt2911666': 'john-wick',
  'tt1588170': 'i-saw-the-devil',
  'tt0245844': 'the-count-of-monte-cristo'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
  Object.entries(REVENGE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
  return REVENGE_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
  const imdbId = SLUG_TO_IMDB[slug];
  if (!imdbId) return null;
  return REVENGE_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
  return REVENGE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR REVENGE MOVIES
export const generateRevengeMoviePaths = () => {
  return REVENGE_MOVIES.map(movie => ({
    params: {
      imdbId: movie.imdbID
    }
  }));
};

// ✅ GET NEXT/PREVIOUS REVENGE MOVIE
export const getRevengeMovieNavigation = (currentMovie) => {
  const currentIndex = REVENGE_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
    ? REVENGE_MOVIES[currentIndex - 1]
    : null;

  const nextMovie = currentIndex < REVENGE_MOVIES.length - 1
    ? REVENGE_MOVIES[currentIndex + 1]
    : null;

  return {
    previous: previousMovie ? {
      ...previousMovie,
      slug: REVENGE_MOVIE_SLUGS[previousMovie.imdbID]
    } : null,
    next: nextMovie ? {
      ...nextMovie,
      slug: REVENGE_MOVIE_SLUGS[nextMovie.imdbID]
    } : null
  };
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_REVENGE_DATABASE,
  REVENGE_MOVIES,
  REVENGE_MOVIE_SLUGS,
  SLUG_TO_IMDB,
  getMovieByImdbId,
  getMovieBySlug,
  getMovieSlug,
  generateRevengeMoviePaths,
  getRevengeMovieNavigation
};
