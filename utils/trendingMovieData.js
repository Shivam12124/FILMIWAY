// utils/trendingMovieData.js - TOP 10 TRENDING MOVIES WITH PARENTS GUIDE DATA

export const FALLBACK_POSTERS = {
    872585: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", // Oppenheimer
    597: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", // Titanic
    496243: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", // Parasite
    106646: "https://image.tmdb.org/t/p/w500/34AgMNrI1B139I0i04p463hF5rr.jpg", // The Wolf of Wall Street
    242582: "https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SX300.jpg", // Fifty Shades of Grey - FIXED
    210577: "https://image.tmdb.org/t/p/w500/qymahywUvceh9E1I1I0j2aIunq.jpg", // Gone Girl
    44214: "https://image.tmdb.org/t/p/w500/5LdB51I4y2Y29e4sL2D2IuXR5yQ.jpg", // Black Swan
    792307: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg", // Poor Things
    930564: "https://image.tmdb.org/t/p/w500/qjhahNLSZ705B5R2hVsoYEdAAf.jpg", // Saltburn
    1181498: "https://upload.wikimedia.org/wikipedia/en/1/18/Anora_poster.jpg", // Anora - FIXED
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 872585, "imdbID": "tt15398776", "Title": "Oppenheimer", "year": 2023, "genre": "Drama", "runtime": 180, "rank": 1 },
    { "tmdbId": 597, "imdbID": "tt0120338", "Title": "Titanic", "year": 1997, "genre": "Romance", "runtime": 194, "rank": 2 },
    { "tmdbId": 496243, "imdbID": "tt6751668", "Title": "Parasite", "year": 2019, "genre": "Thriller", "runtime": 132, "rank": 3 },
    { "tmdbId": 106646, "imdbID": "tt0993846", "Title": "The Wolf of Wall Street", "year": 2013, "genre": "Crime", "runtime": 180, "rank": 4 },
    { "tmdbId": 242582, "imdbID": "tt2322441", "Title": "Fifty Shades of Grey", "year": 2015, "genre": "Romance", "runtime": 125, "rank": 5 },
    { "tmdbId": 210577, "imdbID": "tt2267998", "Title": "Gone Girl", "year": 2014, "genre": "Thriller", "runtime": 149, "rank": 6 },
    { "tmdbId": 44214, "imdbID": "tt0947798", "Title": "Black Swan", "year": 2010, "genre": "Thriller", "runtime": 108, "rank": 7 },
    { "tmdbId": 792307, "imdbID": "tt14230458", "Title": "Poor Things", "year": 2023, "genre": "Sci-Fi", "runtime": 141, "rank": 8 },
    { "tmdbId": 930564, "imdbID": "tt17351924", "Title": "Saltburn", "year": 2023, "genre": "Thriller", "runtime": 131, "rank": 9 },
    { "tmdbId": 1181498, "imdbID": "tt28552949", "Title": "Anora", "year": 2024, "genre": "Comedy", "runtime": 138, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    // Oppenheimer
    872585: { scenes: [ { start: "0:23:14", end: "0:24:46", type: "Sex & Nudity", severity: "High" }, { start: "1:14:38", end: "1:15:14", type: "Nudity", severity: "High" }, { start: "1:15:43", end: "1:16:00", type: "Sex & Nudity", severity: "High" } ] },
    // Titanic
    597: { scenes: [ { start: "1:28:30", end: "1:29:45", type: "Nudity (Woman)", severity: "High" }, { start: "1:33:00", end: "1:33:30", type: "Sex", severity: "Moderate" } ] },
    // Parasite
    496243: { scenes: [ { start: "1:17:50", end: "1:19:30", type: "Sex", severity: "High" } ] },
    // The Wolf of Wall Street
    106646: { scenes: [ { start: "0:04:00", end: "0:04:30", type: "Nudity", severity: "High" }, { start: "0:21:00", end: "0:23:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:01:00", end: "1:03:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:45:00", end: "1:47:00", type: "Sex & Nudity", severity: "Extreme" } ] },
    // Fifty Shades of Grey
    242582: { scenes: [ { start: "0:45:00", end: "0:48:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:05:00", end: "1:08:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:25:00", end: "1:28:00", type: "Sex & Nudity", severity: "Extreme" } ] },
    // Gone Girl
    210577: { scenes: [ { start: "0:55:00", end: "0:57:00", type: "Sex & Nudity", severity: "High" }, { start: "1:40:00", end: "1:42:00", type: "Sex & Nudity", severity: "High" } ] },
    // Black Swan
    44214: { scenes: [ { start: "0:58:00", end: "1:00:00", type: "Sex & Nudity", severity: "High" }, { start: "1:20:00", end: "1:22:00", type: "Sex", severity: "High" } ] },
    // Poor Things
    792307: { scenes: [ { start: "0:35:00", end: "0:38:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:10:00", end: "1:15:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:40:00", end: "1:45:00", type: "Sex & Nudity", severity: "Extreme" } ] },
    // Saltburn
    930564: { scenes: [ { start: "0:50:00", end: "0:53:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:30:00", end: "1:33:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:55:00", end: "1:58:00", type: "Nudity", severity: "Extreme" } ] },
    // Anora
    1181498: { scenes: [ { start: "0:10:00", end: "0:15:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "0:45:00", end: "0:50:00", type: "Sex & Nudity", severity: "Extreme" }, { start: "1:30:00", end: "1:35:00", type: "Sex & Nudity", severity: "Extreme" } ] },
};