const fs = require('fs');
const path = require('path');

const MOVIE = {
    tmdbId: 1765072,
    imdbID: "tt45368240",
    Title: "You Can See Everything",
    year: 2026,
    genre: "Documentary, Comedy, Drama",
    runtime: 174,
    rank: "BONUS",
    slug: "you-can-see-everything",
    sourceFile: "a24MovieData.js"
};

console.log("🚀 Starting integration of You Can See Everything...");

// 1. Update utils/a24MovieData.js
const a24DataPath = path.join(__dirname, '../utils/a24MovieData.js');
let a24Data = fs.readFileSync(a24DataPath, 'utf-8');

// Add to SENSITIVE_TIMELINES if not present
if (!a24Data.includes('1765072:')) {
    // SENSITIVE_TIMELINES
    const sensitiveMarker = 'export const FALLBACK_POSTERS = {';
    const sensitiveAddition = `    // 13. You Can See Everything\n    1765072: {\n        scenes: []\n    }\n};\n\n`;
    a24Data = a24Data.replace(/(\n\s*};\s*\n\s*export const FALLBACK_POSTERS = {)/, `,\n\n${sensitiveAddition}${sensitiveMarker}`);
    console.log("✅ Added to SENSITIVE_TIMELINES in a24MovieData.js");
}

// Add to FALLBACK_POSTERS if not present
if (!a24Data.includes('1765072: "https://image.tmdb.org/t/p/w500/Ap8QwmKfSjYbWC4XIP8w9pdn72O.jpg"')) {
    a24Data = a24Data.replace(
        /(437586: "https:\/\/image\.tmdb\.org\/t\/p\/w500\/q3UyeW09lYq7w16W6196236b3\.jpg")/,
        `$1,\n    1765072: "https://image.tmdb.org/t/p/w500/Ap8QwmKfSjYbWC4XIP8w9pdn72O.jpg"`
    );
    console.log("✅ Added to FALLBACK_POSTERS in a24MovieData.js");
}

// Add to A24_MOVIE_FAQS if not present
if (!a24Data.includes("'You Can See Everything':")) {
    const faqAddition = `,\n    'You Can See Everything': [\n        { question: "Why is the documentary called You Can See Everything?", answer: "The title reflects the total, unfiltered access granted by Elizabeth Holmes and Billy Evans to the film crew during their final weeks before Holmes reported to prison, as well as the film's meta-commentary on public transparency versus performative deception." },\n        { question: "Did Nathan Fielder uncover the truth about Elizabeth Holmes?", answer: "Rather than an ordinary investigative exposé, Nathan Fielder crafts a psychological cat-and-mouse game that explores whether anyone—including Holmes, Evans, or the filmmakers—can truly be genuine under constant camera surveillance." },\n        { question: "Why does Amanda Seyfried appear in the documentary?", answer: "Amanda Seyfried, who portrayed Elizabeth Holmes in the Hulu miniseries The Dropout, appears to reenact unfilmed private moments, adding another surreal, meta-layer questioning the boundary between real life and theatrical performance." },\n        { question: "Who controls Elizabeth Holmes's official Twitter/X account?", answer: "The documentary reveals that prior to beginning her 11-year federal prison sentence, Holmes granted power of attorney and social media management to her partner, Billy Evans, who posts statements on her behalf." }\n    ]`;
    a24Data = a24Data.replace(
        /(\s*\{\s*question:\s*"What happens in the final scene of The Whale\?"[\s\S]*?\}\s*\])(\s*\n\};)/,
        `$1${faqAddition}$2`
    );
    console.log("✅ Added to A24_MOVIE_FAQS in a24MovieData.js");
}
fs.writeFileSync(a24DataPath, a24Data, 'utf-8');

// 2. Update utils/a24MovieRoutes.js
const a24RoutesPath = path.join(__dirname, '../utils/a24MovieRoutes.js');
let a24Routes = fs.readFileSync(a24RoutesPath, 'utf-8');
if (!a24Routes.includes("'tt45368240'")) {
    a24Routes = a24Routes.replace(
        /('tt5613484':\s*'mid90s')/,
        `$1,\n\n    // Bonus: You Can See Everything\n    'tt45368240': 'you-can-see-everything'`
    );
    fs.writeFileSync(a24RoutesPath, a24Routes, 'utf-8');
    console.log("✅ Added route to utils/a24MovieRoutes.js");
}

// 3. Update data/collections.js
const collectionsPath = path.join(__dirname, '../data/collections.js');
let collectionsContent = fs.readFileSync(collectionsPath, 'utf-8');
if (!collectionsContent.includes("'tt45368240'")) {
    collectionsContent = collectionsContent.replace(
        /(slug:\s*'best-a24-movies'[\s\S]*?movies:\s*\[[\s\S]*?)('tt5613484')(\])/,
        `$1$2, 'tt45368240'$3`
    );
    fs.writeFileSync(collectionsPath, collectionsContent, 'utf-8');
    console.log("✅ Added tt45368240 to best-a24-movies in data/collections.js");
}

// 4. Update utils/masterDatabase.json
const masterDbPath = path.join(__dirname, '../utils/masterDatabase.json');
const masterDb = JSON.parse(fs.readFileSync(masterDbPath, 'utf-8'));
if (!masterDb.some(m => m.tmdbId === MOVIE.tmdbId || m.imdbID === MOVIE.imdbID)) {
    masterDb.push(MOVIE);
    fs.writeFileSync(masterDbPath, JSON.stringify(masterDb, null, 2), 'utf-8');
    console.log("✅ Added to utils/masterDatabase.json (Total count: " + masterDb.length + ")");
}

// 5. Update utils/masterTimestamps.json
const timestampsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const timestamps = JSON.parse(fs.readFileSync(timestampsPath, 'utf-8'));
if (!timestamps[MOVIE.tmdbId.toString()]) {
    timestamps[MOVIE.tmdbId.toString()] = {
        Title: MOVIE.Title,
        scenes: [],
        Age: "16+",
        Summary: "Aged 16+ for male full-frontal nudity, adult language, and real-life criminal fraud themes."
    };
    fs.writeFileSync(timestampsPath, JSON.stringify(timestamps, null, 2), 'utf-8');
    console.log("✅ Added to utils/masterTimestamps.json");
}

// 6. Update data/tmdbCache.json
const tmdbCachePath = path.join(__dirname, '../data/tmdbCache.json');
const tmdbCache = JSON.parse(fs.readFileSync(tmdbCachePath, 'utf-8'));
if (!tmdbCache[MOVIE.imdbID]) {
    tmdbCache[MOVIE.imdbID] = {
        tmdbId: MOVIE.tmdbId,
        imdb_id: MOVIE.imdbID,
        title: MOVIE.Title,
        overview: "In the weeks leading up to Elizabeth Holmes reporting to federal prison, she and partner Billy Evans grant a documentary film crew total access to their lives, sparking a reality-bending psychological game between subject and filmmaker.",
        poster_path: "/Ap8QwmKfSjYbWC4XIP8w9pdn72O.jpg",
        backdrop_path: "/nhIL3O4W9h5V5JbNQm7yjoDk3So.jpg",
        release_date: "2026-10-16",
        vote_average: 7.9,
        vote_count: 312,
        runtime: 174,
        genres: [
            { id: 99, name: "Documentary" },
            { id: 35, name: "Comedy" },
            { id: 18, name: "Drama" }
        ]
    };
    fs.writeFileSync(tmdbCachePath, JSON.stringify(tmdbCache, null, 2), 'utf-8');
    console.log("✅ Added to data/tmdbCache.json");
}

console.log("🎉 All 6 core integrations complete!");
