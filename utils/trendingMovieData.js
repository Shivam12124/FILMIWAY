// utils/trendingMovieData.js - TOP 10 TRENDING MOVIES WITH PARENTS GUIDE DATA

export const FALLBACK_POSTERS = {
    872585: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", // Oppenheimer
    597: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", // Titanic
    496243: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", // Parasite
    106646: "https://image.tmdb.org/t/p/w500/34AgMNrI1B139I0i04p463hF5rr.jpg", // The Wolf of Wall Street
    216015: "https://image.tmdb.org/t/p/w500/j3GjM6gT1aEAYe5I1PzXFj5uGZ.jpg", // Fifty Shades of Grey - TRULY FIXED
    210577: "https://image.tmdb.org/t/p/w500/qymahywUvceh9E1I1I0j2aIunq.jpg", // Gone Girl
    44214: "https://image.tmdb.org/t/p/w500/5LdB51I4y2Y29e4sL2D2IuXR5yQ.jpg", // Black Swan
    792307: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg", // Poor Things
    930564: "https://image.tmdb.org/t/p/w500/qjhahNLSZ705B5R2hVsoYEdAAf.jpg", // Saltburn
    1064213: "https://image.tmdb.org/t/p/w500/7Mrg94aa3ypigf5A6J7lB6Q77t.jpg", // Anora - FIXED
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 872585, "imdbID": "tt15398776", "Title": "Oppenheimer", "year": 2023, "genre": "Drama", "runtime": 180, "rank": 1 },
    { "tmdbId": 597, "imdbID": "tt0120338", "Title": "Titanic", "year": 1997, "genre": "Romance", "runtime": 194, "rank": 2 },
    { "tmdbId": 496243, "imdbID": "tt6751668", "Title": "Parasite", "year": 2019, "genre": "Thriller", "runtime": 132, "rank": 3 },
    { "tmdbId": 106646, "imdbID": "tt0993846", "Title": "The Wolf of Wall Street", "year": 2013, "genre": "Crime", "runtime": 180, "rank": 4 },
    { "tmdbId": 216015, "imdbID": "tt2322441", "Title": "Fifty Shades of Grey", "year": 2015, "genre": "Romance", "runtime": 125, "rank": 5 },
    { "tmdbId": 210577, "imdbID": "tt2267998", "Title": "Gone Girl", "year": 2014, "genre": "Thriller", "runtime": 149, "rank": 6 },
    { "tmdbId": 44214, "imdbID": "tt0947798", "Title": "Black Swan", "year": 2010, "genre": "Thriller", "runtime": 108, "rank": 7 },
    { "tmdbId": 792307, "imdbID": "tt14230458", "Title": "Poor Things", "year": 2023, "genre": "Sci-Fi", "runtime": 141, "rank": 8 },
    { "tmdbId": 930564, "imdbID": "tt17351924", "Title": "Saltburn", "year": 2023, "genre": "Thriller", "runtime": 131, "rank": 9 },
    { "tmdbId": 1064213, "imdbID": "tt28607951", "Title": "Anora", "year": 2024, "genre": "Comedy", "runtime": 139, "rank": 10 }
];