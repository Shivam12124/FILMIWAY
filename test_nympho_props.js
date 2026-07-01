const db = require('./utils/masterDatabase.json');
const tmdbCache = require('./data/tmdbCache.json');
const { getPrimaryCollectionForMovie } = require('./data/collections.js');
const erotic = require('./utils/eroticRomanceMovieData.js');

const movie = db.find(m => m.slug === 'nymphomaniac-vol-1');
console.log("Movie from DB:", movie);

const primarySlug = getPrimaryCollectionForMovie(movie.imdbID);
console.log("Primary Slug:", primarySlug);

const resolvedInfo = erotic.COMPLETE_MOVIE_DATA[movie.tmdbId];
console.log("Resolved Info exists:", !!resolvedInfo);

const cacheData = tmdbCache[movie.imdbID];
console.log("Cache Data exists:", !!cacheData);
console.log("Poster Path:", cacheData?.poster_path);
console.log("Backdrop Path:", cacheData?.backdrop_path);
