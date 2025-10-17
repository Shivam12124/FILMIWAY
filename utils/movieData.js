// utils/movieData.js - COMPLETE WITH NETFLIX DRAMA COLLECTION

// ✅ TMDB API CONFIGURATION
export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: {
        small: 'w300',
        medium: 'w500',
        large: 'w780',
        original: 'original'
    }
};


// ✅ COMPLETE MOVIE DATABASE - ALL 21 MOVIES
export const COMPLETE_MOVIE_DATABASE = [
    // MIND-BENDING COLLECTION (11 MOVIES)
    { "tmdbId": 629, "imdbID": "tt0114814", "Title": "The Usual Suspects", "year": 1995, "genre": "Crime", "runtime": 106, "rank": 11 },
    { "tmdbId": 11324, "imdbID": "tt1130884", "Title": "Shutter Island", "year": 2010, "genre": "Thriller", "runtime": 138, "rank": 10 },
    { "tmdbId": 31011, "imdbID": "tt0485947", "Title": "Mr. Nobody", "year": 2009, "genre": "Sci-Fi", "runtime": 141, "rank": 9 },
    { "tmdbId": 1381, "imdbID": "tt0414993", "Title": "The Fountain", "year": 2006, "genre": "Drama", "runtime": 96, "rank": 8 },
    { "tmdbId": 181886, "imdbID": "tt2316411", "Title": "Enemy", "year": 2013, "genre": "Thriller", "runtime": 91, "rank": 7 },
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi", "runtime": 113, "rank": 6 },
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi", "runtime": 89, "rank": 5 },
    { "tmdbId": 206487, "imdbID": "tt2397535", "Title": "Predestination", "year": 2014, "genre": "Sci-Fi", "runtime": 97, "rank": 4 },
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147, "rank": 3 },
    { "tmdbId": 4960, "imdbID": "tt0383028", "Title": "Synecdoche, New York", "year": 2008, "genre": "Drama", "runtime": 124, "rank": 2 },
    { "tmdbId": 14337, "imdbID": "tt0390384", "Title": "Primer", "year": 2004, "genre": "Sci-Fi", "runtime": 77, "rank": 1 },
    
    // NETFLIX DRAMA COLLECTION (10 MOVIES)
    { "tmdbId": 530915, "imdbID": "tt8579674", "Title": "1917", "year": 2019, "genre": "War", "runtime": 119, "rank": 1 },
    { "tmdbId": 426426, "imdbID": "tt6155172", "Title": "Roma", "year": 2018, "genre": "Drama", "runtime": 135, "rank": 2 },
    { "tmdbId": 466282, "imdbID": "tt1302006", "Title": "The Irishman", "year": 2019, "genre": "Crime", "runtime": 209, "rank": 3 },
    { "tmdbId": 492188, "imdbID": "tt7653254", "Title": "Marriage Story", "year": 2019, "genre": "Drama", "runtime": 137, "rank": 4 },
    { "tmdbId": 37799, "imdbID": "tt1285016", "Title": "The Social Network", "year": 2010, "genre": "Drama", "runtime": 120, "rank": 5 },
    { "tmdbId": 544401, "imdbID": "tt7533152", "Title": "The Boy Who Harnessed the Wind", "year": 2019, "genre": "Drama", "runtime": 113, "rank": 6 },
    { "tmdbId": 68718, "imdbID": "tt1853728", "Title": "Django Unchained", "year": 2012, "genre": "Western", "runtime": 165, "rank": 7 },
    { "tmdbId": 1402, "imdbID": "tt0454921", "Title": "The Pursuit of Happyness", "year": 2006, "genre": "Drama", "runtime": 117, "rank": 8 },
    { "tmdbId": 588228, "imdbID": "tt10633456", "Title": "Minari", "year": 2020, "genre": "Drama", "runtime": 115, "rank": 9 },
    { "tmdbId": 531219, "imdbID": "tt1070874", "Title": "The Trial of the Chicago 7", "year": 2020, "genre": "Drama", "runtime": 129, "rank": 10 }
];


// ✅ TIME CONVERSION FUNCTION
const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
    }
    return 0;
};


// ✅ COMPLETE SENSITIVE TIMELINES - ALL 21 MOVIES
export const SENSITIVE_TIMELINES = {
    // MIND-BENDING MOVIES
    14337: { scenes: [] }, // Primer
    4960: { // Synecdoche, New York
        scenes: [
            { start: timeToSeconds("34:24"), end: timeToSeconds("35:05"), type: "Sex" },
            { start: timeToSeconds("46:40"), end: timeToSeconds("46:47"), type: "Kissing" },
            { start: timeToSeconds("56:35"), end: timeToSeconds("57:04"), type: "Sex (not graphic)" },
            { start: timeToSeconds("1:01:35"), end: timeToSeconds("1:02:12"), type: "Nudity" },
            { start: timeToSeconds("1:33:04"), end: timeToSeconds("1:35:15"), type: "Nudity" },
            { start: timeToSeconds("1:38:35"), end: timeToSeconds("1:38:40"), type: "Kissing (casual)" }
        ]
    },
    1018: { // Mulholland Drive
        scenes: [
            { start: timeToSeconds("1:19:38"), end: timeToSeconds("1:20:02"), type: "Kissing" },
            { start: timeToSeconds("1:38:45"), end: timeToSeconds("1:42:18"), type: "Nudity + Intimate Kissing" },
            { start: timeToSeconds("2:01:27"), end: timeToSeconds("2:02:59"), type: "Partial Nudity + Intimate Situation" },
            { start: timeToSeconds("2:04:36"), end: timeToSeconds("2:05:03"), type: "Kissing" },
            { start: timeToSeconds("2:15:50"), end: timeToSeconds("2:15:58"), type: "Kissing" }
        ]
    },
    206487: { // Predestination
        scenes: [
            { start: timeToSeconds("19:07"), end: timeToSeconds("19:20"), type: "Sex + Partial Nudity" },
            { start: timeToSeconds("42:20"), end: timeToSeconds("42:50"), type: "Nudity" },
            { start: timeToSeconds("1:12:50"), end: timeToSeconds("1:12:58"), type: "Kissing (casual)" }
        ]
    },
    220289: { // Coherence
        scenes: [
            { start: timeToSeconds("53:27"), end: timeToSeconds("53:34"), type: "Casual Kissing" }
        ]
    },
    141: { // Donnie Darko
        scenes: [
            { start: timeToSeconds("1:08:02"), end: timeToSeconds("1:08:16"), type: "Kissing" },
            { start: timeToSeconds("1:17:00"), end: timeToSeconds("1:17:08"), type: "Kissing" },
            { start: timeToSeconds("1:31:10"), end: timeToSeconds("1:31:30"), type: "Intimate Kissing" }
        ]
    },
    181886: { // Enemy
        scenes: [
            { start: timeToSeconds("1:46"), end: timeToSeconds("1:50"), type: "Partial Nudity (glimpse)" },
            { start: timeToSeconds("2:50"), end: timeToSeconds("4:58"), type: "Nudity" },
            { start: timeToSeconds("7:23"), end: timeToSeconds("7:29"), type: "Kissing" },
            { start: timeToSeconds("7:50"), end: timeToSeconds("8:05"), type: "Sex" },
            { start: timeToSeconds("8:37"), end: timeToSeconds("8:42"), type: "Sex" },
            { start: timeToSeconds("9:10"), end: timeToSeconds("9:15"), type: "Sex" },
            { start: timeToSeconds("14:38"), end: timeToSeconds("15:10"), type: "Sex" },
            { start: timeToSeconds("45:20"), end: timeToSeconds("45:52"), type: "Nudity" },
            { start: timeToSeconds("1:14:25"), end: timeToSeconds("1:14:41"), type: "Partial Nudity" },
            { start: timeToSeconds("1:19:30"), end: timeToSeconds("1:20:35"), type: "Sex" },
            { start: timeToSeconds("1:22:20"), end: timeToSeconds("1:22:42"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("1:23:55"), end: timeToSeconds("1:24:08"), type: "Nudity" }
        ]
    },
    1381: { // The Fountain
        scenes: [
            { start: timeToSeconds("26:34"), end: timeToSeconds("27:46"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("36:57"), end: timeToSeconds("37:01"), type: "Partial Nudity (glimpse)" }
        ]
    },
    31011: { // Mr. Nobody
        scenes: [
            { start: timeToSeconds("31:48"), end: timeToSeconds("32:00"), type: "Kissing" },
            { start: timeToSeconds("48:56"), end: timeToSeconds("49:10"), type: "Intimate Kissing" },
            { start: timeToSeconds("1:03:58"), end: timeToSeconds("1:05:08"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("1:08:27"), end: timeToSeconds("1:08:31"), type: "Kissing" },
            { start: timeToSeconds("1:17:08"), end: timeToSeconds("1:17:42"), type: "Sex" },
            { start: timeToSeconds("1:35:10"), end: timeToSeconds("1:36:58"), type: "Intimate Kissing + Partial Nudity" }
        ]
    },
    11324: { // Shutter Island
        scenes: [
            { start: timeToSeconds("1:10:43"), end: timeToSeconds("1:10:47"), type: "Nudity" },
            { start: timeToSeconds("1:59:03"), end: timeToSeconds("1:59:06"), type: "Casual Kissing" }
        ]
    },
    629: { // The Usual Suspects ✅ UPDATED
        scenes: [
            { start: timeToSeconds("1:00:15"), end: timeToSeconds("1:00:47"), type: "Sex" }
        ]
    },

    // NETFLIX DRAMA MOVIES
    530915: { scenes: [] }, // 1917
    426426: { scenes: [] }, // Roma
    466282: { scenes: [] }, // The Irishman
    492188: { // Marriage Story
        scenes: [
            { start: timeToSeconds("1:32:15"), end: timeToSeconds("1:32:30"), type: "Kissing" }
        ]
    },
    37799: { scenes: [] }, // The Social Network
    544401: { scenes: [] }, // The Boy Who Harnessed the Wind
    68718: { // Django Unchained
        scenes: [
            { start: timeToSeconds("1:15:42"), end: timeToSeconds("1:16:05"), type: "Partial Nudity" }
        ]
    },
    1402: { scenes: [] }, // The Pursuit of Happyness
    588228: { scenes: [] }, // Minari
    531219: { scenes: [] } // The Trial of the Chicago 7
};


// ✅ FALLBACK POSTERS - ALL 21 MOVIES
export const FALLBACK_POSTERS = {
    // MIND-BENDING MOVIES
    14337: "https://m.media-amazon.com/images/M/MV5BYTIxNzU1ZmUtYzllMS00NDA4LTgyMjktZWZmNjI5YTdkZjE3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    4960: "https://m.media-amazon.com/images/M/MV5BMjIwNzA5Nzg4M15BMl5BanBnXkFtZTcwNzk1MzcxMQ@@._V1_SX500.jpg",
    1018: "https://m.media-amazon.com/images/M/MV5BNGVjYzBmOGMtNDJiMC00NDJjLTljMDgtMzE0NTc4YjVmOTE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    206487: "https://m.media-amazon.com/images/M/MV5BMjUzNjk5NDMzNl5BMl5BanBnXkFtZTgwNzE0ODI2NjE@._V1_SX500.jpg",
    220289: "https://m.media-amazon.com/images/M/MV5BMjAwMDk5NDM5Nl5BMl5BanBnXkFtZTgwNzE2OTQ0MjE@._V1_SX500.jpg",
    141: "https://m.media-amazon.com/images/M/MV5BNzVkYzIwNDEtNTMwMi00NzU3LWI1ZjYtZTJlMTY0NDk0MzEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    181886: "https://m.media-amazon.com/images/M/MV5BMDExOTM4ODI5N15BMl5BanBnXkFtZTcwMjEzNTE3OA@@._V1_SX500.jpg",
    1381: "https://m.media-amazon.com/images/M/MV5BMjExMTI4MzU4MF5BMl5BanBnXkFtZTcwNjEzNDE1MQ@@._V1_SX500.jpg",
    31011: "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX500.jpg",
    11324: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    629: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEzNy00NTgyLWIwM2EtYjI2YjU1ZjUxODgxXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX500.jpg",
    
    // NETFLIX DRAMA MOVIES
    530915: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX500.jpg",
    426426: "https://m.media-amazon.com/images/M/MV5BMTU2NjQ2ODM3N15BMl5BanBnXkFtZTgwNzUzMTEzNjM@._V1_SX500.jpg",
    466282: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWI0XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX500.jpg",
    492188: "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX500.jpg",
    37799: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    544401: "https://m.media-amazon.com/images/M/MV5BMDYwMDQ0ZGMtNDQyNS00Yjg1LWI0MWQtMTcyMjZhZGVmZDZmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX500.jpg",
    68718: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX500.jpg",
    1402: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX500.jpg",
    588228: "https://m.media-amazon.com/images/M/MV5BNWEzOTNjNjctNDFkZC00ODQ2LWI5YjUtYjgwZGM5YWE5ZmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX500.jpg",
    531219: "https://m.media-amazon.com/images/M/MV5BZjhkNTcyNGYtNDFmYy00MjdkLWE5ZDgtOTNhNTBhNjI1MzM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX500.jpg"
};


// ✅ COMPLETE MOVIE DATA - ALL 21 MOVIES WITH FULL METADATA
export const COMPLETE_MOVIE_DATA = {
    // MIND-BENDING MOVIES (KEEP EXACTLY AS IS)
    14337: {
        mindBendingIndex: 95, complexityLevel: "EXTREME", dominantColor: "#1e3a8a", rating: 6.9, criticsScore: 77, audienceScore: 73, director: "Shane Carruth", cast: ["Shane Carruth", "David Sullivan", "Casey Gooden"], boxOffice: "$424,760", budget: "$7,000", 
        dna: { "Sci-Fi": 75, "Thriller": 15, "Drama": 10 }, 
        scenes: [{ time: 10, intensity: 35, label: "Discovery", color: "#1e3a8a" }, { time: 25, intensity: 60, label: "First Loop", color: "#1d4ed8" }, { time: 40, intensity: 75, label: "Exploitation", color: "#2563eb" }, { time: 55, intensity: 90, label: "Paradox", color: "#3b82f6" }, { time: 70, intensity: 100, label: "Chaos", color: "#60a5fa" }], 
        synopsis: "Four friends accidentally discover a way to travel back in time, leading to increasingly complex moral and temporal dilemmas in this ultra-low budget masterpiece.", 
        themes: ["Time Travel", "Friendship", "Moral Ambiguity", "Scientific Ethics"], 
        awards: ["Sundance Film Festival Winner", "Alfred P. Sloan Prize"],
        seoDescription: "Like Inception, Primer plays with time and reality in complex layers that require multiple viewings to fully understand.",
        intensityPeak: "The narrative intensity peaks at 70 minutes when temporal chaos erupts and multiple timelines collide.",
        genreComposition: "This film is predominantly Sci-Fi at 75%, with thriller elements at 15% and drama at 10%, creating a unique blend of scientific complexity and emotional tension."
    },
    4960: {
        mindBendingIndex: 92, complexityLevel: "EXTREME", dominantColor: "#7c2d12", rating: 7.5, criticsScore: 85, audienceScore: 69, director: "Charlie Kaufman", cast: ["Philip Seymour Hoffman", "Samantha Morton", "Michelle Williams"], boxOffice: "$4.4 million", budget: "$20 million", 
        dna: { "Drama": 60, "Comedy": 25, "Fantasy": 15 }, 
        scenes: [{ time: 15, intensity: 25, label: "The Grant", color: "#7c2d12" }, { time: 40, intensity: 50, label: "Construction", color: "#a16207" }, { time: 70, intensity: 75, label: "Reality Blurs", color: "#ca8a04" }, { time: 100, intensity: 90, label: "Infinite Recursion", color: "#eab308" }, { time: 120, intensity: 95, label: "Final Truth", color: "#facc15" }], 
        synopsis: "A theater director creates a life-size replica of New York inside a warehouse, blurring the lines between art and reality in Kaufman's surreal masterpiece.", 
        themes: ["Art vs Reality", "Death", "Identity", "Creative Process"], 
        awards: ["Palme d'Or Nomination", "Best Original Screenplay Nomination"],
        seoDescription: "Like Inception's layered dreams, Synecdoche New York creates nested realities within theatrical productions.",
        intensityPeak: "The film reaches maximum intensity at 120 minutes when the final truth about reality and identity is revealed.",
        genreComposition: "Primarily a drama at 60%, enhanced by dark comedy at 25% and fantasy elements at 15% that blur the boundaries between performance and life."
    },
    1018: {
        mindBendingIndex: 94, complexityLevel: "EXTREME", dominantColor: "#701a75", rating: 7.9, criticsScore: 85, audienceScore: 82, director: "David Lynch", cast: ["Naomi Watts", "Laura Harring", "Justin Theroux"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { "Mystery": 50, "Drama": 30, "Thriller": 20 }, 
        scenes: [{ time: 20, intensity: 40, label: "The Accident", color: "#701a75" }, { time: 60, intensity: 65, label: "Hollywood Dreams", color: "#86198f" }, { time: 90, intensity: 75, label: "Club Silencio", color: "#a21caf" }, { time: 120, intensity: 90, label: "Blue Box", color: "#c026d3" }, { time: 140, intensity: 95, label: "Reality Shift", color: "#d946ef" }], 
        synopsis: "Lynch's surreal exploration of Hollywood dreams and nightmares follows two women searching for truth in a world where reality constantly shifts.", 
        themes: ["Dreams vs Reality", "Hollywood", "Identity", "Lesbian Romance"], 
        awards: ["Palme d'Or Winner", "Best Director Cannes"],
        seoDescription: "Like Inception's dream layers, Mulholland Drive weaves between dreams and reality in Lynch's signature surreal style.",
        intensityPeak: "The narrative reaches its climax at 140 minutes when reality dramatically shifts and the true story is revealed.",
        genreComposition: "A mystery at its core with 50%, enriched by dramatic elements at 30% and thriller tension at 20%, creating Lynch's trademark atmospheric confusion."
    },
    206487: {
        mindBendingIndex: 89, complexityLevel: "EXTREME", dominantColor: "#0f172a", rating: 7.4, criticsScore: 84, audienceScore: 85, director: "Michael & Peter Spierig", cast: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"], boxOffice: "$5.1 million", budget: "$5 million", 
        dna: { "Sci-Fi": 60, "Thriller": 35, "Action": 5 }, 
        scenes: [{ time: 10, intensity: 65, label: "The Hunt", color: "#0f172a" }, { time: 30, intensity: 35, label: "The Story", color: "#1e293b" }, { time: 60, intensity: 80, label: "Time Jump", color: "#334155" }, { time: 75, intensity: 95, label: "The Loop", color: "#475569" }, { time: 90, intensity: 100, label: "Identity", color: "#64748b" }], 
        synopsis: "A temporal agent's final assignment becomes a mind-bending journey through identity, love, and predestination in this perfectly crafted time-travel thriller.", 
        themes: ["Predestination", "Gender Identity", "Time Travel", "Self-Sacrifice"], 
        awards: ["AACTA Best Screenplay", "Saturn Award Nomination"],
        seoDescription: "Like Inception's complex plot structure, Predestination creates an intricate temporal puzzle with shocking revelations.",
        intensityPeak: "The film peaks at 90 minutes when the protagonist's true identity is revealed in a mind-bending twist.",
        genreComposition: "Primarily Sci-Fi at 60% with strong thriller elements at 35% and minimal action at 5%, focusing on intellectual complexity over spectacle."
    },
    220289: {
        mindBendingIndex: 78, complexityLevel: "HIGH", dominantColor: "#166534", rating: 7.2, criticsScore: 88, audienceScore: 85, director: "James Ward Byrkit", cast: ["Emily Baldoni", "Maury Sterling", "Nicholas Brendon"], boxOffice: "$102,617", budget: "$50,000", 
        dna: { "Sci-Fi": 45, "Thriller": 35, "Drama": 20 }, 
        scenes: [{ time: 8, intensity: 20, label: "Dinner Begins", color: "#166534" }, { time: 18, intensity: 45, label: "Comet Effect", color: "#16a34a" }, { time: 35, intensity: 65, label: "Other House", color: "#22c55e" }, { time: 55, intensity: 80, label: "Paranoia", color: "#4ade80" }, { time: 75, intensity: 95, label: "Reality Choice", color: "#86efac" }], 
        synopsis: "A dinner party becomes a labyrinth of parallel realities when a comet passes overhead in this ingenious low-budget sci-fi thriller.", 
        themes: ["Parallel Realities", "Choice", "Relationship Dynamics", "Quantum Physics"], 
        awards: ["Fantastic Fest Winner", "Critics Choice Nomination"],
        seoDescription: "Like Inception's multiple reality layers, Coherence explores parallel dimensions during a single dinner party.",
        intensityPeak: "Maximum tension occurs at 75 minutes when characters must choose between different versions of reality.",
        genreComposition: "Balanced between Sci-Fi at 45%, thriller tension at 35%, and interpersonal drama at 20%, creating intimate yet cosmic storytelling."
    },
    141: {
        mindBendingIndex: 85, complexityLevel: "HIGH", dominantColor: "#9a3412", rating: 8.0, criticsScore: 85, audienceScore: 87, director: "Richard Kelly", cast: ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore"], boxOffice: "$7.5 million", budget: "$4.5 million", 
        dna: { "Sci-Fi": 40, "Drama": 35, "Thriller": 25 }, 
        scenes: [{ time: 8, intensity: 50, label: "The Engine", color: "#9a3412" }, { time: 25, intensity: 60, label: "Frank", color: "#c2410c" }, { time: 80, intensity: 70, label: "School Flood", color: "#ea580c" }, { time: 105, intensity: 85, label: "Death", color: "#f97316" }, { time: 118, intensity: 90, label: "The Loop", color: "#fb923c" }], 
        synopsis: "A troubled teenager is guided by a mysterious figure through a complex tale of time travel, destiny, and sacrifice in Kelly's cult classic.", 
        themes: ["Time Travel", "Destiny", "Adolescence", "Mental Health"], 
        awards: ["Teen Choice Award", "Cult Classic Status"],
        seoDescription: "Like Inception's reality manipulation, Donnie Darko blends time travel with psychological complexity in a cult masterpiece.",
        intensityPeak: "The story culminates at 118 minutes when the time loop closes and Donnie makes his ultimate sacrifice.",
        genreComposition: "Evenly balanced with Sci-Fi elements at 40%, emotional drama at 35%, and psychological thriller aspects at 25%."
    },
    181886: {
        mindBendingIndex: 82, complexityLevel: "HIGH", dominantColor: "#7c2d12", rating: 6.9, criticsScore: 75, audienceScore: 70, director: "Denis Villeneuve", cast: ["Jake Gyllenhaal", "Mélanie Laurent", "Sarah Gadon"], boxOffice: "$3.4 million", budget: "$9 million", 
        dna: { "Thriller": 70, "Mystery": 20, "Drama": 10 }, 
        scenes: [{ time: 18, intensity: 35, label: "Discovery", color: "#7c2d12" }, { time: 45, intensity: 65, label: "First Contact", color: "#a16207" }, { time: 70, intensity: 80, label: "Obsession", color: "#ca8a04" }, { time: 88, intensity: 95, label: "Truth", color: "#eab308" }], 
        synopsis: "Villeneuve's psychological thriller explores identity and obsession as a man discovers his exact double in this Kafkaesque nightmare.", 
        themes: ["Duality", "Identity Crisis", "Obsession", "Subconscious"], 
        awards: ["Toronto International Film Festival", "Genie Award Winner"],
        seoDescription: "Like Inception's exploration of the subconscious, Enemy delves into psychological duality and identity confusion.",
        intensityPeak: "The film reaches its disturbing climax at 88 minutes when the horrifying truth about identity is unveiled.",
        genreComposition: "Dominated by psychological thriller elements at 70%, with mystery components at 20% and dramatic undertones at 10%."
    },
    1381: {
        mindBendingIndex: 87, complexityLevel: "HIGH", dominantColor: "#581c87", rating: 7.2, criticsScore: 69, audienceScore: 75, director: "Darren Aronofsky", cast: ["Hugh Jackman", "Rachel Weisz", "Ellen Burstyn"], boxOffice: "$16 million", budget: "$35 million", 
        dna: { "Drama": 50, "Sci-Fi": 30, "Romance": 20 }, 
        scenes: [{ time: 15, intensity: 45, label: "The Quest", color: "#581c87" }, { time: 35, intensity: 40, label: "Modern Love", color: "#7c3aed" }, { time: 55, intensity: 65, label: "Future Journey", color: "#8b5cf6" }, { time: 75, intensity: 85, label: "Convergence", color: "#a78bfa" }, { time: 90, intensity: 80, label: "Acceptance", color: "#c4b5fd" }], 
        synopsis: "Aronofsky's ambitious meditation on love, death, and immortality spans three timelines in this visually stunning philosophical epic.", 
        themes: ["Immortality", "Love", "Death", "Spiritual Journey"], 
        awards: ["Venice Film Festival", "Visual Effects Society Award"],
        seoDescription: "Like Inception's multiple timeline structure, The Fountain weaves three interconnected stories across different eras.",
        intensityPeak: "Emotional intensity peaks at 75 minutes when all three timelines converge in a spectacular climax.",
        genreComposition: "Primarily a drama at 50%, elevated by Sci-Fi concepts at 30% and romantic elements at 20%, creating Aronofsky's signature philosophical blend."
    },
    31011: {
        mindBendingIndex: 93, complexityLevel: "EXTREME", dominantColor: "#be185d", rating: 7.8, criticsScore: 86, audienceScore: 81, director: "Jaco Van Dormael", cast: ["Jared Leto", "Sarah Polley", "Diane Kruger"], boxOffice: "$3.6 million", budget: "$47 million", 
        dna: { "Sci-Fi": 50, "Drama": 30, "Fantasy": 20 }, 
        scenes: [{ time: 15, intensity: 30, label: "The Choice", color: "#be185d" }, { time: 45, intensity: 60, label: "Multiple Lives", color: "#db2777" }, { time: 85, intensity: 70, label: "Love Stories", color: "#ec4899" }, { time: 115, intensity: 85, label: "Old Age", color: "#f472b6" }, { time: 135, intensity: 95, label: "Big Bang", color: "#f9a8d4" }], 
        synopsis: "Van Dormael's ambitious exploration of choice and possibility follows the last mortal human through infinite potential lives in this visually stunning epic.", 
        themes: ["Choice", "Possibility", "Love", "Mortality"], 
        awards: ["European Film Award", "Magritte Award Winner"],
        seoDescription: "Like Inception's branching possibilities, Mr. Nobody explores infinite life paths and the consequences of choice.",
        intensityPeak: "The narrative reaches cosmic proportions at 135 minutes with the Big Bang sequence revealing universal connections.",
        genreComposition: "Half Sci-Fi at 50% exploring quantum possibilities, complemented by human drama at 30% and fantasy elements at 20%."
    },
    11324: {
        mindBendingIndex: 75, complexityLevel: "MEDIUM", dominantColor: "#0c4a6e", rating: 8.2, criticsScore: 68, audienceScore: 89, director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"], boxOffice: "$294.8 million", budget: "$80 million", 
        dna: { "Thriller": 60, "Mystery": 25, "Drama": 15 }, 
        scenes: [{ time: 15, intensity: 35, label: "Arrival", color: "#0c4a6e" }, { time: 45, intensity: 55, label: "Investigation", color: "#0284c7" }, { time: 85, intensity: 70, label: "Ward C", color: "#0ea5e9" }, { time: 115, intensity: 85, label: "Flashbacks", color: "#38bdf8" }, { time: 135, intensity: 100, label: "The Truth", color: "#7dd3fc" }], 
        synopsis: "Scorsese's psychological thriller traps two marshals on a mysterious island where nothing is as it seems in this masterful mind-bender.", 
        themes: ["Reality vs Delusion", "Guilt", "Mental Health", "Truth"], 
        awards: ["Teen Choice Award", "People's Choice Award"],
        seoDescription: "Like Inception's questioning of reality, Shutter Island masterfully blurs the line between truth and delusion.",
        intensityPeak: "The shocking truth is revealed at 135 minutes when reality and delusion collide in Scorsese's masterful climax.",
        genreComposition: "Primarily a psychological thriller at 60%, enhanced by mystery elements at 25% and dramatic depth at 15%."
    },
    629: {
        mindBendingIndex: 88, complexityLevel: "HIGH", dominantColor: "#dc2626", rating: 8.5, criticsScore: 88, audienceScore: 94, director: "Bryan Singer", cast: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri", "Stephen Baldwin", "Benicio Del Toro"], boxOffice: "$23.3 million", budget: "$6 million", 
        dna: { "Crime": 50, "Mystery": 35, "Thriller": 15 }, 
        scenes: [{ time: 10, intensity: 30, label: "The Lineup", color: "#dc2626" }, { time: 25, intensity: 50, label: "The Job", color: "#ef4444" }, { time: 60, intensity: 70, label: "Keaton's Plan", color: "#f87171" }, { time: 85, intensity: 85, label: "The Reveal", color: "#fca5a5" }, { time: 103, intensity: 95, label: "Keyser Söze", color: "#fecaca" }], 
        synopsis: "A sole survivor tells feds about the supposed mastermind behind a pier massacre. But who is Keyser Söze? Singer's neo-noir thriller delivers one of cinema's greatest plot twists.", 
        themes: ["Deception", "Identity", "Criminal Psychology", "Unreliable Narrator"], 
        awards: ["Academy Award Best Supporting Actor", "Academy Award Best Original Screenplay", "BAFTA Best Editing"],
        seoDescription: "Like Inception's layered reality, The Usual Suspects masterfully constructs an intricate web of deception and misdirection.",
        intensityPeak: "The film's legendary twist is revealed at 103 minutes when the true identity of Keyser Söze becomes devastatingly clear.",
        genreComposition: "A crime thriller at its core with 50%, enhanced by mystery elements at 35% and psychological thriller tension at 15%, creating a perfect storm of deception."
    },
    
    // 🎬 NETFLIX DRAMA COLLECTION DATA
    530915: { // 1917
        emotionalIntensity: 95, dramaLevel: "EXTREME", dominantColor: "#854d0e", rating: 8.2, criticsScore: 78, audienceScore: 88, director: "Sam Mendes", cast: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"], boxOffice: "$384.9 million", budget: "$95 million",
        dna: { "War": 60, "Drama": 30, "Action": 10 },
        scenes: [{ time: 15, intensity: 40, label: "The Mission", color: "#854d0e" }, { time: 35, intensity: 70, label: "No Man's Land", color: "#a16207" }, { time: 65, intensity: 85, label: "The Farm", color: "#ca8a04" }, { time: 90, intensity: 95, label: "The Town", color: "#eab308" }, { time: 115, intensity: 100, label: "The Message", color: "#facc15" }],
        synopsis: "During World War I, two young British soldiers are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men from walking into a deadly trap.",
        themes: ["War", "Heroism", "Time Pressure", "Survival"],
        awards: ["Academy Award Best Cinematography", "Academy Award Best Visual Effects", "Academy Award Best Sound Mixing"],
        seoDescription: "Immersive, edge-of-your-seat war drama delivered in stunning one-shot cinematography that puts you in the trenches of WWI.",
        intensityPeak: "The film reaches maximum intensity at 115 minutes as the soldier races against time to deliver the message.",
        genreComposition: "Primarily a war film at 60%, with dramatic elements at 30% and intense action sequences at 10%."
    },
    426426: { // Roma
        emotionalIntensity: 82, dramaLevel: "HIGH", dominantColor: "#1e293b", rating: 7.6, criticsScore: 96, audienceScore: 73, director: "Alfonso Cuarón", cast: ["Yalitza Aparicio", "Marina de Tavira", "Diego Cortina Autrey"], boxOffice: "$1.1 million", budget: "$15 million",
        dna: { "Drama": 70, "Family": 20, "Historical": 10 },
        scenes: [{ time: 20, intensity: 30, label: "Daily Life", color: "#1e293b" }, { time: 50, intensity: 55, label: "The Beach", color: "#334155" }, { time: 90, intensity: 75, label: "The Hospital", color: "#475569" }, { time: 115, intensity: 85, label: "The Fire", color: "#64748b" }, { time: 130, intensity: 80, label: "Reconciliation", color: "#94a3b8" }],
        synopsis: "A year in the life of a middle-class family's maid in Mexico City in the early 1970s, capturing intimate domestic life against political turmoil.",
        themes: ["Class", "Family", "Political Unrest", "Motherhood"],
        awards: ["Academy Award Best Director", "Academy Award Best Cinematography", "Academy Award Best Foreign Language Film"],
        seoDescription: "Visual and emotional masterpiece exploring domestic life in 1970s Mexico with stunning black-and-white cinematography.",
        intensityPeak: "Emotional intensity peaks at 115 minutes during the devastating fire sequence.",
        genreComposition: "A deeply personal drama at 70%, enriched by family dynamics at 20% and historical context at 10%."
    },
    466282: { // The Irishman
        emotionalIntensity: 78, dramaLevel: "HIGH", dominantColor: "#7f1d1d", rating: 7.8, criticsScore: 95, audienceScore: 86, director: "Martin Scorsese", cast: ["Robert De Niro", "Al Pacino", "Joe Pesci"], boxOffice: "$10 million", budget: "$159 million",
        dna: { "Crime": 50, "Drama": 40, "Biography": 10 },
        scenes: [{ time: 25, intensity: 40, label: "The Beginning", color: "#7f1d1d" }, { time: 70, intensity: 60, label: "The Rise", color: "#991b1b" }, { time: 120, intensity: 75, label: "The Hit", color: "#b91c1c" }, { time: 160, intensity: 85, label: "Hoffa", color: "#dc2626" }, { time: 200, intensity: 90, label: "The End", color: "#ef4444" }],
        synopsis: "An aging hitman recalls his possible involvement with the slaying of Jimmy Hoffa in Scorsese's epic crime saga spanning decades.",
        themes: ["Loyalty", "Aging", "Crime", "Regret"],
        awards: ["Academy Award Nominations (10)", "Critics Choice Award Best Acting Ensemble", "BAFTA Best Supporting Actor"],
        seoDescription: "Epic crime drama featuring legendary performances from De Niro, Pacino, and Pesci in Scorsese's masterful mob saga.",
        intensityPeak: "The narrative peaks at 200 minutes as the protagonist confronts his lonely final years.",
        genreComposition: "A crime epic at 50%, enriched by dramatic depth at 40% and biographical elements at 10%."
    },
    492188: { // Marriage Story
        emotionalIntensity: 90, dramaLevel: "EXTREME", dominantColor: "#0f172a", rating: 7.9, criticsScore: 94, audienceScore: 82, director: "Noah Baumbach", cast: ["Adam Driver", "Scarlett Johansson", "Laura Dern"], boxOffice: "$2 million", budget: "$18 million",
        dna: { "Drama": 80, "Romance": 15, "Comedy": 5 },
        scenes: [{ time: 15, intensity: 35, label: "The Mediation", color: "#0f172a" }, { time: 45, intensity: 60, label: "The Lawyers", color: "#1e293b" }, { time: 75, intensity: 80, label: "The Argument", color: "#334155" }, { time: 105, intensity: 95, label: "The Fight", color: "#475569" }, { time: 130, intensity: 75, label: "Acceptance", color: "#64748b" }],
        synopsis: "A stage director and his actor wife struggle through a grueling divorce that pushes them to their personal and creative extremes.",
        themes: ["Divorce", "Parenting", "Identity", "Love"],
        awards: ["Academy Award Best Supporting Actress (Laura Dern)", "Academy Award Nominations (6)", "Golden Globe Best Supporting Actress"],
        seoDescription: "Relatable, modern relationship drama capturing the painful complexity of divorce with raw honesty and compassion.",
        intensityPeak: "Emotional devastation peaks at 105 minutes during the brutal apartment argument scene.",
        genreComposition: "Intensely dramatic at 80%, with romantic elements at 15% and subtle dark comedy at 5%."
    },
    37799: { // The Social Network
        emotionalIntensity: 75, dramaLevel: "MEDIUM", dominantColor: "#1e3a8a", rating: 7.8, criticsScore: 96, audienceScore: 95, director: "David Fincher", cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"], boxOffice: "$224.9 million", budget: "$40 million",
        dna: { "Drama": 60, "Biography": 30, "Thriller": 10 },
        scenes: [{ time: 10, intensity: 40, label: "The Breakup", color: "#1e3a8a" }, { time: 35, intensity: 60, label: "Facemash", color: "#1d4ed8" }, { time: 70, intensity: 75, label: "The Expansion", color: "#2563eb" }, { time: 100, intensity: 85, label: "The Lawsuit", color: "#3b82f6" }, { time: 115, intensity: 80, label: "The Empire", color: "#60a5fa" }],
        synopsis: "The story of Facebook's founding and the lawsuits that followed, exploring ambition, betrayal, and the price of creating a social media empire.",
        themes: ["Ambition", "Betrayal", "Innovation", "Friendship"],
        awards: ["Academy Award Best Adapted Screenplay", "Academy Award Best Original Score", "Academy Award Best Film Editing"],
        seoDescription: "Fast-paced, clever, and highly engaging drama chronicling Facebook's explosive rise and the friendships destroyed along the way.",
        intensityPeak: "Tension peaks at 100 minutes during the climactic courtroom depositions revealing betrayals.",
        genreComposition: "A character drama at 60%, biographical in nature at 30%, with psychological thriller tension at 10%."
    },
    544401: { // The Boy Who Harnessed the Wind
        emotionalIntensity: 70, dramaLevel: "MEDIUM", dominantColor: "#15803d", rating: 7.6, criticsScore: 87, audienceScore: 83, director: "Chiwetel Ejiofor", cast: ["Maxwell Simba", "Chiwetel Ejiofor", "Aïssa Maïga"], boxOffice: "$0", budget: "Unknown",
        dna: { "Drama": 60, "Biography": 30, "Family": 10 },
        scenes: [{ time: 15, intensity: 30, label: "The Drought", color: "#15803d" }, { time: 40, intensity: 50, label: "The Library", color: "#16a34a" }, { time: 70, intensity: 65, label: "The Plan", color: "#22c55e" }, { time: 95, intensity: 85, label: "The Windmill", color: "#4ade80" }, { time: 110, intensity: 75, label: "The Rain", color: "#86efac" }],
        synopsis: "A 13-year-old boy in Malawi invents an unconventional way to save his family and village from famine by building a windmill from scrap materials.",
        themes: ["Innovation", "Perseverance", "Family", "Hope"],
        awards: ["NAACP Image Award Outstanding Directing", "Africa Movie Academy Award Best Film"],
        seoDescription: "Inspiring, uplifting true story of ingenuity and determination in the face of devastating drought and famine.",
        intensityPeak: "The film reaches its emotional climax at 95 minutes when the windmill finally works and brings water.",
        genreComposition: "A heartfelt drama at 60%, based on true events at 30%, with universal family appeal at 10%."
    },
    68718: { // Django Unchained
        emotionalIntensity: 80, dramaLevel: "HIGH", dominantColor: "#991b1b", rating: 8.4, criticsScore: 87, audienceScore: 93, director: "Quentin Tarantino", cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"], boxOffice: "$425.4 million", budget: "$100 million",
        dna: { "Western": 50, "Drama": 30, "Action": 20 },
        scenes: [{ time: 20, intensity: 45, label: "The Deal", color: "#991b1b" }, { time: 60, intensity: 65, label: "The Hunt", color: "#b91c1c" }, { time: 100, intensity: 80, label: "Candyland", color: "#dc2626" }, { time: 140, intensity: 95, label: "The Shootout", color: "#ef4444" }, { time: 160, intensity: 85, label: "Revenge", color: "#f87171" }],
        synopsis: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        themes: ["Slavery", "Revenge", "Freedom", "Justice"],
        awards: ["Academy Award Best Supporting Actor (Christoph Waltz)", "Academy Award Best Original Screenplay", "Golden Globe Best Supporting Actor"],
        seoDescription: "Bold, dramatic, stylish action-drama from Tarantino tackling slavery with unflinching intensity and explosive revenge.",
        intensityPeak: "The film reaches maximum intensity at 140 minutes during the mansion shootout sequence.",
        genreComposition: "A revisionist Western at 50%, with dramatic storytelling at 30% and stylized action at 20%."
    },
    1402: { // The Pursuit of Happyness
        emotionalIntensity: 85, dramaLevel: "HIGH", dominantColor: "#0369a1", rating: 8.0, criticsScore: 67, audienceScore: 87, director: "Gabriele Muccino", cast: ["Will Smith", "Jaden Smith", "Thandiwe Newton"], boxOffice: "$307 million", budget: "$55 million",
        dna: { "Drama": 70, "Biography": 25, "Family": 5 },
        scenes: [{ time: 15, intensity: 40, label: "The Struggle", color: "#0369a1" }, { time: 45, intensity: 60, label: "Homelessness", color: "#0284c7" }, { time: 75, intensity: 75, label: "The Internship", color: "#0ea5e9" }, { time: 100, intensity: 90, label: "Rock Bottom", color: "#38bdf8" }, { time: 112, intensity: 95, label: "The Job", color: "#7dd3fc" }],
        synopsis: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career in this inspiring true story.",
        themes: ["Perseverance", "Fatherhood", "Poverty", "Success"],
        awards: ["Academy Award Nomination Best Actor (Will Smith)", "Screen Actors Guild Award Nomination"],
        seoDescription: "Classic underdog story delivering emotional punch and motivation through Will Smith's powerhouse performance.",
        intensityPeak: "The film reaches its emotional peak at 112 minutes when the protagonist finally gets the job.",
        genreComposition: "A moving drama at 70%, based on a true story at 25%, with father-son dynamics at 5%."
    },
    588228: { // Minari
        emotionalIntensity: 78, dramaLevel: "MEDIUM", dominantColor: "#15803d", rating: 7.4, criticsScore: 98, audienceScore: 83, director: "Lee Isaac Chung", cast: ["Steven Yeun", "Yeri Han", "Alan Kim"], boxOffice: "$15.5 million", budget: "$2 million",
        dna: { "Drama": 70, "Family": 25, "Biography": 5 },
        scenes: [{ time: 15, intensity: 30, label: "New Life", color: "#15803d" }, { time: 40, intensity: 50, label: "The Farm", color: "#16a34a" }, { time: 70, intensity: 65, label: "The Grandmother", color: "#22c55e" }, { time: 95, intensity: 85, label: "The Fire", color: "#4ade80" }, { time: 110, intensity: 75, label: "Hope", color: "#86efac" }],
        synopsis: "A Korean-American family moves to an Arkansas farm in search of their own American Dream, finding resilience and hope against all odds.",
        themes: ["Immigration", "Family", "Dreams", "Culture"],
        awards: ["Academy Award Best Supporting Actress (Youn Yuh-jung)", "Academy Award Nominations (6)", "Golden Globe Best Foreign Language Film"],
        seoDescription: "Heartwarming, culturally rich family drama capturing the immigrant experience with tenderness and authenticity.",
        intensityPeak: "Emotional intensity peaks at 95 minutes during the devastating farm fire that threatens everything.",
        genreComposition: "A deeply personal family drama at 70%, with universal family themes at 25% and semi-autobiographical elements at 5%."
    },
    531219: { // The Trial of the Chicago 7
        emotionalIntensity: 82, dramaLevel: "HIGH", dominantColor: "#1e3a8a", rating: 7.7, criticsScore: 89, audienceScore: 76, director: "Aaron Sorkin", cast: ["Eddie Redmayne", "Sacha Baron Cohen", "Mark Rylance"], boxOffice: "$0", budget: "$35 million",
        dna: { "Drama": 60, "Historical": 30, "Legal": 10 },
        scenes: [{ time: 15, intensity: 45, label: "The Protest", color: "#1e3a8a" }, { time: 45, intensity: 65, label: "The Charges", color: "#1d4ed8" }, { time: 80, intensity: 75, label: "Testimony", color: "#2563eb" }, { time: 110, intensity: 90, label: "The Verdict", color: "#3b82f6" }, { time: 125, intensity: 85, label: "The Names", color: "#60a5fa" }],
        synopsis: "The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago.",
        themes: ["Justice", "Activism", "Corruption", "Free Speech"],
        awards: ["Academy Award Nominations (6)", "Golden Globe Best Screenplay", "Screen Actors Guild Award Best Ensemble"],
        seoDescription: "Engaging courtroom drama tackling socially relevant themes of justice and protest with Aaron Sorkin's signature sharp dialogue.",
        intensityPeak: "The film reaches maximum intensity at 110 minutes when the controversial verdicts are finally read.",
        genreComposition: "A riveting courtroom drama at 60%, grounded in historical events at 30%, with legal thriller elements at 10%."
    }
};


// ✅ STRATEGIC QUOTES - ALL 21 MOVIES
export const STRATEGIC_QUOTES = {
    // MIND-BENDING MOVIES
    14337: "They say time is the fire in which we burn", 
    4960: "Everything is more complicated than you think",
    1018: "No hay banda. There is no band", 
    206487: "What if I told you that you're the person you're trying to catch?", 
    220289: "There are dark places where terrible things have happened", 
    141: "Every living creature on earth dies alone", 
    181886: "I don't think I'm me", 
    1381: "Death is the road to awe", 
    31011: "Every path is the right path",
    11324: "You're smarter than you look, Marshal",
    629: "The greatest trick the devil ever pulled was convincing the world he didn't exist",
    
    // NETFLIX DRAMA MOVIES
    530915: "I'm going to write to your mother and tell her that I'm bringing you home",
    426426: "We are alone. No matter what they tell you, we women are always alone",
    466282: "It is what it is",
    492188: "I fell in love with him two seconds after I saw him",
    37799: "If you were the inventors of Facebook, you'd have invented Facebook",
    544401: "With wind, we can do anything",
    68718: "The D is silent",
    1402: "You got a dream, you gotta protect it",
    588228: "You see, Grandma doesn't need water. She's a tough lady",
    531219: "The whole world is watching"
};


export const CINEMATIC_COLORS = {
    "Sci-Fi": "#1e3a8a", "Drama": "#7c2d12", "Thriller": "#0f172a", "Mystery": "#701a75", "Action": "#9a3412", "Fantasy": "#581c87", "Romance": "#be185d", "Crime": "#dc2626", "War": "#854d0e", "Western": "#991b1b"
};


// ✅ PROFESSIONAL RATING SYSTEM
export const RATING_OPTIONS = [
    { 
        value: 1, 
        label: "A Disappointment", 
        color: "#dc2626", 
        symbol: "△",
        bgColor: "bg-red-900/30",
        description: "Falls short of expectations"
    },
    { 
        value: 2, 
        label: "Flawed", 
        color: "#ea580c", 
        symbol: "◇",
        bgColor: "bg-orange-900/30",
        description: "Watchable with notable flaws"
    },
    { 
        value: 3, 
        label: "Worth the Ride", 
        color: "#16a34a", 
        symbol: "◆",
        bgColor: "bg-green-900/30",
        description: "Solid entertainment value"
    },
    { 
        value: 4, 
        label: "Exceptional", 
        color: "#eab308", 
        symbol: "★",
        bgColor: "bg-yellow-900/30",
        description: "Outstanding cinematic achievement"
    }
];


// ✅ ENHANCED COUNTRY DETECTION
export const detectUserCountryEnhanced = async () => {
    try {
        const geoServices = [
            'https://ipapi.co/json/',
            'https://api.country.is/',
            'https://ipinfo.io/json'
        ];
        
        for (const service of geoServices) {
            try {
                const response = await fetch(service, { 
                    timeout: 3000,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    let country = null;
                    
                    if (data.country_code) country = data.country_code;
                    else if (data.country) country = data.country;
                    else if (data.countryCode) country = data.countryCode;
                    
                    if (country) {
                        const upperCountry = country.trim().toUpperCase();
                        const validCountries = ['US', 'IN', 'GB', 'CA', 'AU', 'DE', 'BR'];
                        if (validCountries.includes(upperCountry)) {
                            return upperCountry;
                        }
                    }
                }
            } catch (error) {
                console.warn(`Geo service ${service} failed:`, error);
                continue;
            }
        }
    } catch (error) {
        console.warn('Enhanced country detection failed:', error);
    }
    
    return 'US';
};



// ✅ SSG-SAFE DUMMY FUNCTIONS (NO API CALLS)
export const fetchMovieFromTMDB = async (tmdbId) => {
    // Return static data to avoid API errors during SSG build
    return {
        poster_path: null,
        title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie'
    };
};

export const fetchWatchProviders = async (tmdbId, region = 'US') => {
    // Return null to avoid API errors during SSG build  
    return null;
};

// ✅ CONVERT SENSITIVE TIMELINES TO COMPONENT FORMAT - FIXED TIME CONVERSION
export const formatSensitiveTimeline = (tmdbId) => {
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    
    const secondsToTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        // Format as HH:MM:SS or MM:SS depending on length
        if (hours > 0) {
            return `${hours}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
        } else {
            return `${mins}:${secs < 10 ? '0' + secs : secs}`;
        }
    };
    
    return {
        scenes: raw.scenes.map(scene => ({
            start: secondsToTime(scene.start),
            end: secondsToTime(scene.end),
            type: scene.type,
            description: scene.description || '',
            severity: scene.severity || 'Moderate'
        }))
    };
};

// ✅ GET SENSITIVE CONTENT TYPES
export const getSensitiveContentTypes = (tmdbId) => {
    const timeline = formatSensitiveTimeline(tmdbId);
    if (!timeline || !timeline.scenes) return [];
    return [...new Set(timeline.scenes.map(s => s.type))];
};
