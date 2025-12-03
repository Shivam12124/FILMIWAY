// utils/warFilmMovieRoutes.js - 10 BEST WAR FILMS MOVIE ROUTES MAPPING

import COMPLETE_WAR_FILMS_DATABASE, { WAR_FILMS } from './warFilmsMovieData';

// ✅ WAR FILMS MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const WAR_FILMS_MOVIE_SLUGS = {
  'tt0120815': 'saving-private-ryan',
  'tt0064116': 'apocalypse-now',
  'tt0056172': 'lawrence-of-arabia',
  'tt0091251': 'come-and-see',
  'tt0108052': 'schindlers-list',
  'tt0093058': 'full-metal-jacket',
  'tt8183660': '1917',
  'tt0082096': 'das-boot',
  'tt0091763': 'platoon',
  'tt0047528': 'paths-of-glory'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB_WAR = Object.fromEntries(
  Object.entries(WAR_FILMS_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getWarFilmByImdbId = (imdbId) => {
  return WAR_FILMS.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getWarFilmBySlug = (slug) => {
  const imdbId = SLUG_TO_IMDB_WAR[slug];
  if (!imdbId) return null;
  return WAR_FILMS.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getWarFilmSlug = (imdbId) => {
  return WAR_FILMS_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR WAR FILMS
export const generateWarFilmMoviePaths = () => {
  return WAR_FILMS.map(movie => ({
    params: {
      imdbId: movie.imdbID
    }
  }));
};

// ✅ GET NEXT/PREVIOUS WAR FILM MOVIE
export const getWarFilmMovieNavigation = (currentMovie) => {
  const currentIndex = WAR_FILMS.findIndex(m => m.imdbID === currentMovie.imdbID);

  const previousMovie = currentIndex > 0
    ? WAR_FILMS[currentIndex - 1]
    : null;

  const nextMovie = currentIndex < WAR_FILMS.length - 1
    ? WAR_FILMS[currentIndex + 1]
    : null;

  return {
    previous: previousMovie ? {
      ...previousMovie,
      slug: WAR_FILMS_MOVIE_SLUGS[previousMovie.imdbID]
    } : null,
    next: nextMovie ? {
      ...nextMovie,
      slug: WAR_FILMS_MOVIE_SLUGS[nextMovie.imdbID]
    } : null
  };
};

// ✅ GET MOVIE RANK IN COLLECTION
export const getWarFilmRank = (imdbId) => {
  const index = WAR_FILMS.findIndex(m => m.imdbID === imdbId);
  return index >= 0 ? index + 1 : null;
};

// ✅ GET TOTAL WAR FILMS COUNT
export const getTotalWarFilms = () => {
  return WAR_FILMS.length;
};

// Optionally, export everything for easier imports
export default {
  COMPLETE_WAR_FILMS_DATABASE,
  WAR_FILMS,
  WAR_FILMS_MOVIE_SLUGS,
  SLUG_TO_IMDB_WAR,
  getWarFilmByImdbId,
  getWarFilmBySlug,
  getWarFilmSlug,
  generateWarFilmMoviePaths,
  getWarFilmMovieNavigation,
  getWarFilmRank,
  getTotalWarFilms
};
