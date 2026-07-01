const fs = require('fs');

// 1. masterDatabase.json
const dbPath = 'utils/masterDatabase.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
if (!db.some(m => m.tmdbId === 258216)) {
    db.push({
        "tmdbId": 258216,
        "imdbID": "tt1937390",
        "Title": "Nymphomaniac: Vol. I",
        "year": 2013,
        "genre": "Drama",
        "runtime": 117,
        "rank": 0,
        "slug": "nymphomaniac-vol-1",
        "sourceFile": "eroticRomanceMovieData.js"
    });
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    console.log("Added to masterDatabase.json");
}

// 2. masterTimestamps.json
const tsPath = 'utils/masterTimestamps.json';
const ts = JSON.parse(fs.readFileSync(tsPath, 'utf8'));
if (!ts['    258216']) {
    ts['    258216'] = {
        "Title": "Nymphomaniac: Vol. I",
        "scenes": [
            { "start": "0:11:00", "end": "0:14:30", "type": "Sex & Nudity", "severity": "High" },
            { "start": "0:34:10", "end": "0:38:20", "type": "Nudity (Woman) & Sexual Content", "severity": "High" },
            { "start": "0:56:45", "end": "0:59:15", "type": "Graphic Nudity & Sexual Act", "severity": "Extreme" },
            { "start": "1:22:10", "end": "1:28:40", "type": "Intense Sexual Content", "severity": "Extreme" }
        ]
    };
    fs.writeFileSync(tsPath, JSON.stringify(ts, null, 2));
    console.log("Added to masterTimestamps.json");
}

// 3. tmdbCache.json
const cachePath = 'data/tmdbCache.json';
const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
if (!cache['tt1937390']) {
    cache['tt1937390'] = {
        "tmdbId": "    258216",
        "poster_path": "/y2D0vYnFq8NtcS2Yv0kR4g0L0hZ.jpg",
        "backdrop_path": "/5UfO6I70lP4WwI2iG8Kx8h0KzC.jpg",
        "runtime": 117,
        "release_date": "2013-12-25",
        "overview": "A self-diagnosed nymphomaniac recounts her erotic experiences to the man who saved her after a beating.",
        "ageRating": "NC-17",
        "director": "Lars von Trier",
        "cast": ["Charlotte Gainsbourg", "Stellan Skarsgård", "Stacy Martin"],
        "budget": "€4,700,000",
        "revenue": "$13,500,000",
        "tagline": "Forget about love."
    };
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
    console.log("Added to tmdbCache.json");
}
