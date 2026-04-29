const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, '../data/tmdbCache.json');
const dbPath = path.join(__dirname, '../utils/masterDatabase.json');

const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let missingCount = 0;
const totalCount = db.length;
const missingMovies = [];

db.forEach(movie => {
    const imdbID = movie.imdbID;
    const cachedData = cache[imdbID];
    
    // Check if the cache entry doesn't exist, doesn't have a tagline, or the tagline is an empty string
    if (!cachedData || typeof cachedData.tagline === 'undefined' || cachedData.tagline.trim() === '') {
        missingCount++;
        missingMovies.push(`${movie.Title} (${movie.year}) - ID: ${imdbID}`);
    }
});

console.log(`\n📊 TAGLINE STATUS REPORT 📊`);
console.log(`Total Movies in DB: ${totalCount}`);
console.log(`Movies missing taglines: ${missingCount}`);
console.log(`\nList of movies missing taglines:`);
missingMovies.forEach((info, i) => console.log(`${i + 1}. ${info}`));
console.log(`\nDone! You can use patchMissingTaglines.js to manually add these if needed.\n`);