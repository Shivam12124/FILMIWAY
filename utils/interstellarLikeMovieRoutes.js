// utils/interstellarLikeMovieRoutes.js - MOVIES LIKE INTERSTELLAR ROUTES MAPPING

import COMPLETE_INTERSTELLAR_LIKE_DATABASE, { INTERSTELLAR_LIKE_MOVIES } from './interstellarLikeMoviesData';

// ✅ INTERSTELLAR-LIKE MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const INTERSTELLAR_LIKE_MOVIE_SLUGS = {
  'tt0062622': '2001-a-space-odyssey',
  'tt2543164': 'arrival',
  'tt0118884': 'contact',
  'tt0069293': 'solaris',
  'tt1213641': 'first-man',
  'tt3659388': 'the-martian',
  'tt1454468': 'gravity',
  'tt0448134': 'sunshine',
  'tt1182345': 'moon',
  'tt2935510': 'ad-astra'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
  Object.entries(INTERSTELLAR_LIKE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
  return INTERSTELLAR_LIKE_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
  const imdbId = SLUG_TO_IMDB[slug];
  if (!imdbId) return null;
  return INTERSTELLAR_LIKE_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
  return INTERSTELLAR_LIKE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR INTERSTELLAR-LIKE MOVIES
export const generateInterstellarLikeMoviePaths = () => {
  return INTERSTELLAR_LIKE_MOVIES.map(movie => ({
    params: {
      imdbId: movie.imdbID
    }
  }));
};

// ✅ GET NEXT/PREVIOUS INTERSTELLAR-LIKE MOVIE
export const getInterstellarLikeMovieNavigation = (currentMovie) => {
  const currentIndex = INTERSTELLAR_LIKE_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
    ? INTERSTELLAR_LIKE_MOVIES[currentIndex - 1]
    : null;

  const nextMovie = currentIndex < INTERSTELLAR_LIKE_MOVIES.length - 1
    ? INTERSTELLAR_LIKE_MOVIES[currentIndex + 1]
    : null;

  return {
    previous: previousMovie ? {
      ...previousMovie,
      slug: INTERSTELLAR_LIKE_MOVIE_SLUGS[previousMovie.imdbID]
    } : null,
    next: nextMovie ? {
      ...nextMovie,
      slug: INTERSTELLAR_LIKE_MOVIE_SLUGS[nextMovie.imdbID]
    } : null
  };
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_INTERSTELLAR_LIKE_DATABASE,
  INTERSTELLAR_LIKE_MOVIES,
  INTERSTELLAR_LIKE_MOVIE_SLUGS,
  SLUG_TO_IMDB,
  getMovieByImdbId,
  getMovieBySlug,
  getMovieSlug,
  generateInterstellarLikeMoviePaths,
  getInterstellarLikeMovieNavigation
};
