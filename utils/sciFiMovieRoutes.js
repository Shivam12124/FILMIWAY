// utils/sciFiMovieRoutes.js - TOP 10 SCI-FI MOVIE ROUTES MAPPING ⚡

import COMPLETE_SCI_FI_DATABASE, { SCI_FI_MOVIES } from './sciFiMovieData';

// ✅ SCI-FI MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const SCI_FI_MOVIE_SLUGS = {
  'tt0062622': '2001-a-space-odyssey',
  'tt0082869': 'blade-runner',
  'tt0133093': 'the-matrix',
  'tt0078748': 'alien',
  'tt0816692': 'interstellar',
  'tt0103064': 'terminator-2-judgment-day',
  'tt1375666': 'inception',
  'tt2543164': 'arrival',
  'tt0080684': 'Star Wars: Episode V - The Empire Strikes Back',
  'tt1856101': 'blade-runner-2049' // must match imdbID used in sciFiMovieData
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SCI_FI_SLUG_TO_IMDB = Object.fromEntries(
  Object.entries(SCI_FI_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getSciFiMovieByImdbId = (imdbId) => {
  return SCI_FI_MOVIES.find(movie => movie.imdbID === imdbId) || null;
};

// ✅ GET MOVIE BY SLUG
export const getSciFiMovieBySlug = (slug) => {
  const imdbId = SCI_FI_SLUG_TO_IMDB[slug];
  if (!imdbId) return null;
  return SCI_FI_MOVIES.find(movie => movie.imdbID === imdbId) || null;
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getSciFiMovieSlug = (imdbId) => {
  return SCI_FI_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR SCI-FI MOVIES
export const generateSciFiMoviePaths = () => {
  return SCI_FI_MOVIES.map(movie => ({
    params: {
      imdbId: movie.imdbID
    }
  }));
};

// ✅ GET NEXT/PREVIOUS SCI-FI MOVIE (FOR DETAIL PAGE NAV)
export const getSciFiMovieNavigation = (currentMovie) => {
  const currentIndex = SCI_FI_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
    ? SCI_FI_MOVIES[currentIndex - 1]
    : null;

  const nextMovie = currentIndex < SCI_FI_MOVIES.length - 1
    ? SCI_FI_MOVIES[currentIndex + 1]
    : null;

  return {
    previous: previousMovie ? {
      ...previousMovie,
      slug: SCI_FI_MOVIE_SLUGS[previousMovie.imdbID]
    } : null,
    next: nextMovie ? {
      ...nextMovie,
      slug: SCI_FI_MOVIE_SLUGS[nextMovie.imdbID]
    } : null
  };
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_SCI_FI_DATABASE,
  SCI_FI_MOVIES,
  SCI_FI_MOVIE_SLUGS,
  SCI_FI_SLUG_TO_IMDB,
  getSciFiMovieByImdbId,
  getSciFiMovieBySlug,
  getSciFiMovieSlug,
  generateSciFiMoviePaths,
  getSciFiMovieNavigation
};
