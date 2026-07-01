const fs = require('fs');

// 1. masterDatabase.json
const dbFile = 'utils/masterDatabase.json';
const db = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
const nympho = db.find(m => m.imdbID === 'tt1937390');
if (nympho) {
    nympho.tmdbId = 258216; // Change from 258216 to 258216
    nympho.rank = "BONUS";
    fs.writeFileSync(dbFile, JSON.stringify(db, null, 4));
    console.log("Updated masterDatabase.json tmdbId to 258216");
}

// 2. tmdbCache.json
const cacheFile = 'data/tmdbCache.json';
const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
if (cache['tt1937390']) {
    cache['tt1937390'].tmdbId = 258216;
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 4));
    console.log("Updated tmdbCache.json tmdbId to 258216");
}

// 3. masterTimestamps.json
const tsFile = 'utils/masterTimestamps.json';
const ts = JSON.parse(fs.readFileSync(tsFile, 'utf8'));
if (ts['    258216']) {
    ts['258216'] = ts['    258216'];
    delete ts['    258216'];
    fs.writeFileSync(tsFile, JSON.stringify(ts, null, 4));
    console.log("Updated masterTimestamps.json key to 258216");
}
