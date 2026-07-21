const fs = require('fs');

// 1. utils/masterDatabase.json
const dbPath = 'utils/masterDatabase.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
if (!db.some(m => m.tmdbId === 652)) {
    db.push({
        "tmdbId": 652,
        "imdbID": "tt0332452",
        "Title": "Troy",
        "year": 2004,
        "genre": "Drama, War, Action",
        "runtime": 163,
        "rank": 0,
        "slug": "troy",
        "sourceFile": "warFilmsMovieData.js"
    });
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    console.log("Added Troy to masterDatabase.json");
} else {
    console.log("Troy already in masterDatabase.json");
}

// 2. utils/masterTimestamps.json
const tsPath = 'utils/masterTimestamps.json';
const ts = JSON.parse(fs.readFileSync(tsPath, 'utf8'));
if (!ts['652']) {
    ts['652'] = {
        "Title": "Troy",
        "scenes": [
            { "start": "0:06:55", "end": "0:07:45", "type": "Nudity (Man & Woman)", "severity": "High" },
            { "start": "0:15:38", "end": "0:15:50", "type": "Nudity (Woman)", "severity": "High" },
            { "start": "0:16:17", "end": "0:16:50", "type": "Nudity (Woman)", "severity": "High" },
            { "start": "1:05:20", "end": "1:06:06", "type": "Partial Nudity (Man)", "severity": "Mild" },
            { "start": "1:53:20", "end": "1:54:21", "type": "Partial Nudity & Sex", "severity": "High" }
        ],
        "Summary": "Troy contains several scenes of nudity and sexual situations typical of historical epics. Nudity is primarily female (breasts/buttocks) with some male partial nudity.",
        "Age": "17+"
    };
    fs.writeFileSync(tsPath, JSON.stringify(ts, null, 2));
    console.log("Added Troy to masterTimestamps.json");
} else {
    console.log("Troy already in masterTimestamps.json");
}

// 3. data/tmdbCache.json
const cachePath = 'data/tmdbCache.json';
const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
if (!cache['tt0332452']) {
    cache['tt0332452'] = {
        "tmdbId": "652",
        "poster_path": "/a07slLv5T9FAhxZOylzO5U5006C.jpg",
        "backdrop_path": "/pU1vCqO0oUvjB7EobO8E41xO2eX.jpg",
        "runtime": 163,
        "release_date": "2004-05-13",
        "overview": "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back.",
        "ageRating": "R",
        "director": "Wolfgang Petersen",
        "cast": ["Brad Pitt", "Eric Bana", "Orlando Bloom"],
        "budget": "$175,000,000",
        "revenue": "$497,409,852",
        "tagline": "For passion. For honor. For destiny. For victory. For love."
    };
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
    console.log("Added Troy to tmdbCache.json");
} else {
    console.log("Troy already in tmdbCache.json");
}

// 4. utils/warFilmMovieRoutes.js
const routesPath = 'utils/warFilmMovieRoutes.js';
let routes = fs.readFileSync(routesPath, 'utf8');
if (!routes.includes("'tt0332452'")) {
    // Just inject it simply if it isn't there
    const insertion = `\n    // BONUS MOVIE\n    if (movie.imdbID === 'tt0332452') return 'troy';`;
    routes = routes.replace(/(if \(movie\.imdbID === 'tt0050825'\) return 'paths-of-glory';)/, "$1" + insertion);
    fs.writeFileSync(routesPath, routes);
    console.log("Added Troy to warFilmMovieRoutes.js");
} else {
    console.log("Troy already in warFilmMovieRoutes.js");
}

console.log("All patches completed!");
