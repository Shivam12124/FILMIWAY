// utils/timeTravelMovieRoutes.js - TIME TRAVEL MOVIE ROUTE MAPPING

import COMPLETE_TIME_TRAVEL_DATABASE, { TIME_TRAVEL_MOVIES } from './timeTravelMovieData';

// ✅ TIME TRAVEL MOVIE SLUGS MAPPING (IMDB ID TO SLUG)
export const TIME_TRAVEL_MOVIE_SLUGS = {
    'tt0088763': 'back-to-the-future',
    'tt0103064': 'terminator-2-judgment-day',
    'tt0088247': 'the-terminator',
    'tt0816692': 'interstellar',
    'tt2397535': 'predestination',
    'tt0390384': 'primer',
    'tt0114746': '12-monkeys',
    'tt0246578': 'donnie-darko',
    'tt0107048': 'groundhog-day',
    'tt0480669': 'timecrimes'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(TIME_TRAVEL_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY IMDB ID
export const getMovieByImdbId = (imdbId) => {
    return TIME_TRAVEL_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    return TIME_TRAVEL_MOVIES.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return TIME_TRAVEL_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR TIME TRAVEL MOVIES
export const generateTimeTravelMoviePaths = () => {
    return TIME_TRAVEL_MOVIES.map(movie => ({
        params: {
            imdbId: movie.imdbID
        }
    }));
};

// ✅ GET NEXT/PREVIOUS TIME TRAVEL MOVIE
export const getTimeTravelMovieNavigation = (currentMovie) => {
    const currentIndex = TIME_TRAVEL_MOVIES.findIndex(m => m.imdbID === currentMovie.imdbID);

    const previousMovie = currentIndex > 0
        ? TIME_TRAVEL_MOVIES[currentIndex - 1]
        : null;

    const nextMovie = currentIndex < TIME_TRAVEL_MOVIES.length - 1
        ? TIME_TRAVEL_MOVIES[currentIndex + 1]
        : null;

    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: TIME_TRAVEL_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: TIME_TRAVEL_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET ALL TIME TRAVEL MOVIES WITH SLUGS
export const getAllTimeTravelMoviesWithSlugs = () => {
    return TIME_TRAVEL_MOVIES.map(movie => ({
        ...movie,
        slug: TIME_TRAVEL_MOVIE_SLUGS[movie.imdbID]
    }));
};

// ✅ SEARCH TIME TRAVEL MOVIES
export const searchTimeTravelMovies = (query) => {
    const lowerQuery = query.toLowerCase();
    return TIME_TRAVEL_MOVIES.filter(movie => 
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.director.toLowerCase().includes(lowerQuery) ||
        movie.cast.some(actor => actor.toLowerCase().includes(lowerQuery))
    );
};

// ✅ GET TIME TRAVEL MOVIES BY COMPLEXITY LEVEL
export const getMoviesByComplexity = (level) => {
    return TIME_TRAVEL_MOVIES.filter(movie => 
        movie.complexityLevel === level.toUpperCase()
    );
};

// ✅ GET TOP RATED TIME TRAVEL MOVIES
export const getTopRatedTimeTravelMovies = (limit = 5) => {
    return [...TIME_TRAVEL_MOVIES]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
};

// ✅ GET TIME TRAVEL MOVIES BY INTENSITY
export const getMoviesByIntensity = (minIntensity = 0) => {
    return TIME_TRAVEL_MOVIES.filter(movie => 
        movie.timeTravelIntensity >= minIntensity
    ).sort((a, b) => b.timeTravelIntensity - a.timeTravelIntensity);
};

// Optionally, export everything for easier imports
export default {
    COMPLETE_TIME_TRAVEL_DATABASE,
    TIME_TRAVEL_MOVIES,
    TIME_TRAVEL_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieByImdbId,
    getMovieBySlug,
    getMovieSlug,
    generateTimeTravelMoviePaths,
    getTimeTravelMovieNavigation,
    getAllTimeTravelMoviesWithSlugs,
    searchTimeTravelMovies,
    getMoviesByComplexity,
    getTopRatedTimeTravelMovies,
    getMoviesByIntensity
};
