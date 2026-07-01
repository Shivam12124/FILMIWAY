const erotic = require('./utils/eroticRomanceMovieData');
const db = require('./utils/masterDatabase');
const tmdb = require('./data/tmdbCache');

const baseMovie = db.find(m => m.imdbID === 'tt1937390');
console.log("baseMovie tmdbId:", baseMovie.tmdbId);
console.log("Type of baseMovie tmdbId:", typeof baseMovie.tmdbId);

const resolved = erotic.COMPLETE_MOVIE_DATA[baseMovie.tmdbId];
console.log("Resolved from COMPLETE_MOVIE_DATA?", !!resolved);

if (!resolved) {
    console.log("Available keys in COMPLETE_MOVIE_DATA:", Object.keys(erotic.COMPLETE_MOVIE_DATA));
}
