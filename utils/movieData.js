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
            { start: timeToSeconds("1:38:45"), end: timeToSeconds("1:42:18"), type: "Nudity" },
            { start: timeToSeconds("2:01:27"), end: timeToSeconds("2:02:59"), type: "Nudity " },
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
// MIND-BENDING MOVIES (UNIVERSALLY STANDARDIZED INTENSITY) ✅


    // 1. Primer (2004) - Intellectual Peak
    14337: {
        mindBendingIndex: 98, complexityLevel: "EXTREME", dominantColor: "#1e3a8a", 
        rating: 6.9, criticsScore: 73, audienceScore: 79, director: "Shane Carruth", 
        cast: ["Shane Carruth", "David Sullivan"], boxOffice: "$424,760", budget: "$7,000", 
        dna: { "Sci-Fi": 75, "Thriller": 15, "Drama": 10 }, 
        scenes: [
            { time: 10, intensity: 30, label: "The Discovery", color: "#1e3a8a" }, 
            { time: 25, intensity: 45, label: "Temporal Loop", color: "#1d4ed8" }, 
            { time: 40, intensity: 55, label: "Paradox Logic", color: "#2563eb" }, 
            { time: 55, intensity: 75, label: "The Failsafe", color: "#3b82f6" }, 
            { time: 70, intensity: 88, label: "Timeline Collapse", color: "#60a5fa" }
        ], 
        synopsis: "Two engineers accidentally build a device in their garage that allows them to travel back in time. What begins as a profitable experiment rapidly fractures into a paranoid nightmare of multiple timelines and betrayal. Widely cited as the most scientifically dense and logically complex time-travel film ever made, it demands total focus to solve its impossible puzzle.", 
        themes: ["Temporal Logic", "Scientific Ethics", "Betrayal", "Solipsism"],
        awards: ["Sundance Grand Jury Prize"],
        seoDescription: "The gold standard for time-travel logic. Like Inception, it requires multiple viewings to untangle its nested timelines."
    },

    // 2. Synecdoche, New York (2008) - Psychological Peak
    4960: {
        mindBendingIndex: 95, complexityLevel: "EXTREME", dominantColor: "#7c2d12", 
        rating: 7.5, criticsScore: 83, audienceScore: 84, director: "Charlie Kaufman", 
        cast: ["Philip Seymour Hoffman", "Samantha Morton"], boxOffice: "$4.4 million", budget: "$20 million", 
        dna: { "Drama": 60, "Comedy": 25, "Fantasy": 15 }, 
        scenes: [
            { time: 15, intensity: 25, label: "The Grant", color: "#7c2d12" }, 
            { time: 40, intensity: 50, label: "The Warehouse", color: "#a16207" }, 
            { time: 70, intensity: 65, label: "Reality Recursion", color: "#ca8a04" }, 
            { time: 100, intensity: 82, label: "Identity Loss", color: "#eab308" }, 
            { time: 124, intensity: 94, label: "The Final Instruction", color: "#facc15" }
        ], 
        synopsis: "A theater director attempts to create a life-size replica of New York inside a massive warehouse. As the play mimics his real life with frightening precision, actors start playing actors playing actors, until the distinction between life and performance vanishes. A surreal odyssey that explores the infinite layers of human existence and the terrifying blur between art and mortality.", 
        themes: ["Recursive Reality", "Mortality", "Artistic Obsession", "Identity"],
        awards: ["Independent Spirit Award"],
        seoDescription: "A meta-masterpiece. If you loved Inception's nested dreams, this offers a nested reality on a staggering, cosmic scale."
    },

    // 3. Mulholland Drive (2001) - Subconscious Peak
    1018: {
        mindBendingIndex: 96, complexityLevel: "EXTREME", dominantColor: "#701a75", 
        rating: 7.9, criticsScore: 85, audienceScore: 82, director: "David Lynch", 
        cast: ["Naomi Watts", "Laura Harring"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { "Mystery": 50, "Drama": 30, "Thriller": 20 }, 
        scenes: [
            { time: 20, intensity: 40, label: "The Accident", color: "#701a75" }, 
            { time: 60, intensity: 55, label: "Betty's Audition", color: "#86198f" }, 
            { time: 105, intensity: 85, label: "Club Silencio", color: "#a21caf" }, 
            { time: 120, intensity: 98, label: "The Blue Box", color: "#c026d3" }, 
            { time: 140, intensity: 92, label: "Reality Awakening", color: "#d946ef" }
        ], 
        synopsis: "A dark-haired woman is left with amnesia after a car crash on Mulholland Drive. She wanders into the apartment of a perky aspiring actress, and together they descend into the neon-lit shadows of Hollywood to find her identity. David Lynch shatters the dream of fame to reveal a tragic reality of obsession and rejection in cinema's most famous mind-bender.", 
        themes: ["Dream Logic", "Hollywood Noir", "Identity Fragmentation", "Guilt"]
    },

    // 4. Predestination (2014) - Paradox Peak
    206487: {
        mindBendingIndex: 90, complexityLevel: "EXTREME", dominantColor: "#0f172a", 
        rating: 7.4, criticsScore: 84, audienceScore: 85, director: "The Spierig Brothers", 
        cast: ["Ethan Hawke", "Sarah Snook"], boxOffice: "$5.1 million", budget: "$5 million", 
        dna: { "Sci-Fi": 60, "Thriller": 35, "Action": 5 }, 
        scenes: [
            { time: 10, intensity: 40, label: "The Bombing", color: "#0f172a" }, 
            { time: 40, intensity: 55, label: "The Bar Story", color: "#1e293b" }, 
            { time: 65, intensity: 75, label: "Timeline Jump", color: "#334155" }, 
            { time: 85, intensity: 94, label: "The Reveal", color: "#475569" }, 
            { time: 94, intensity: 97, label: "Self-Origin", color: "#64748b" }
        ], 
        synopsis: "A temporal agent travels through time to prevent a series of mass bombings. On his final assignment, he must recruit his younger self to ensure his own survival. This film constructs a perfectly closed temporal loop where fate, parenthood, and identity are all revealed to be one impossible existence. A puzzle-box movie where every piece fits with surgical precision.", 
        themes: ["Predestination", "Causality Paradox", "Fate", "Identity Transfer"]
    },

    // 5. Coherence (2013) - Paranoia Peak
    220289: {
        mindBendingIndex: 82, complexityLevel: "HIGH", dominantColor: "#166534", 
        rating: 7.2, criticsScore: 88, audienceScore: 85, director: "James Ward Byrkit", 
        cast: ["Emily Baldoni", "Nicholas Brendon"], boxOffice: "$102,617", budget: "$50,000", 
        dna: { "Sci-Fi": 45, "Thriller": 35, "Drama": 20 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Comet", color: "#166534" }, 
            { time: 25, intensity: 50, label: "The Dark Zone", color: "#16a34a" }, 
            { time: 45, intensity: 70, label: "The Other House", color: "#22c55e" }, 
            { time: 65, intensity: 88, label: "Multi-Reality Paranoia", color: "#4ade80" }, 
            { time: 85, intensity: 95, label: "The Best Reality", color: "#86efac" }
        ], 
        synopsis: "During a dinner party, a comet passes overhead, causing reality to split into multiple parallel dimensions. The guests realize that every time they leave the house, they might return to a slightly different version of their lives. A terrifying exploration of quantum decoherence and the dark choices we make to find a better reality.", 
        themes: ["Quantum Physics", "Parallel Realities", "Paranoia", "Choice"]
    },

    // 6. Donnie Darko (2001) - Cult Mystery Peak
    141: {
        mindBendingIndex: 88, complexityLevel: "HIGH", dominantColor: "#1e293b", 
        rating: 8.0, criticsScore: 85, audienceScore: 87, director: "Richard Kelly", 
        cast: ["Jake Gyllenhaal", "Maggie Gyllenhaal"], boxOffice: "$7.5 million", budget: "$4.5 million", 
        dna: { "Sci-Fi": 40, "Drama": 35, "Thriller": 25 }, 
        scenes: [
            { time: 10, intensity: 50, label: "Frank's Warning", color: "#1e293b" }, 
            { time: 40, intensity: 65, label: "Tangent Universe", color: "#334155" }, 
            { time: 80, intensity: 75, label: "Prophecy", color: "#475569" }, 
            { time: 100, intensity: 85, label: "Cellar Door", color: "#64748b" }, 
            { time: 113, intensity: 92, label: "The Loop Closes", color: "#94a3b8" }
        ], 
        synopsis: "After escaping a freak accident, a troubled teenager is plagued by visions of a giant rabbit named Frank who tells him the world will end in 28 days. Guided by a divine prophecy, Donnie must navigate a 'Tangent Universe' that threatens to destroy reality itself. A moody, atmospheric blend of time-travel lore and high school angst.", 
        themes: ["Determinism", "Mental Health", "Sacrifice", "Time Loops"]
    },

    // 7. Enemy (2013) - Surreal Duality Peak
    181886: {
        mindBendingIndex: 85, complexityLevel: "HIGH", dominantColor: "#854d0e", 
        rating: 6.9, criticsScore: 75, audienceScore: 70, director: "Denis Villeneuve", 
        cast: ["Jake Gyllenhaal", "Sarah Gadon"], boxOffice: "$3.4 million", budget: "$9 million", 
        dna: { "Thriller": 70, "Mystery": 20, "Drama": 10 }, 
        scenes: [
            { time: 15, intensity: 35, label: "The Rental", color: "#854d0e" }, 
            { time: 40, intensity: 60, label: "The Meeting", color: "#a16207" }, 
            { time: 60, intensity: 75, label: "Identity Theft", color: "#ca8a04" }, 
            { time: 80, intensity: 85, label: "The Accident", color: "#eab308" }, 
            { time: 90, intensity: 96, label: "The Symbolic Reveal", color: "#facc15" }
        ], 
        synopsis: "A mild-mannered history professor discovers his exact physical double working as a bit-part actor in a movie. His obsession with his doppelgänger leads to a dark, claustrophobic exchange of lives that explores subconscious fear and infidelity. Villeneuve’s Kafkaesque nightmare ends with one of the most jarring, debated final shots in history.", 
        themes: ["Duality", "Subconscious", "Infidelity", "Control"]
    },

    // 8. The Fountain (2006) - Emotional Odyssey Peak
    1381: {
        mindBendingIndex: 87, complexityLevel: "HIGH", dominantColor: "#4c1d95", 
        rating: 7.2, criticsScore: 68, audienceScore: 75, director: "Darren Aronofsky", 
        cast: ["Hugh Jackman", "Rachel Weisz"], boxOffice: "$16 million", budget: "$35 million", 
        dna: { "Drama": 50, "Sci-Fi": 30, "Romance": 20 }, 
        scenes: [
            { time: 15, intensity: 45, label: "Xibalba", color: "#4c1d95" }, 
            { time: 35, intensity: 55, label: "The Inquisitor", color: "#5b21b6" }, 
            { time: 60, intensity: 75, label: "Convergence", color: "#6d28d9" }, 
            { time: 80, intensity: 90, label: "Death is the Road", color: "#7c3aed" }, 
            { time: 96, intensity: 95, label: "Supernova Acceptance", color: "#8b5cf6" }
        ], 
        synopsis: "A man travels through three timelines—the 16th century, the present day, and the deep future—in a desperate quest to find a cure for his dying wife. Spanning a thousand years, this visually breathtaking film is a meditation on love, rebirth, and the human struggle to accept mortality as a part of life.", 
        themes: ["Eternal Love", "Mortality", "Rebirth", "Spiritual Acceptance"]
    },

    // 9. Mr. Nobody (2009) - Quantum Choice Peak
    31011: {
        mindBendingIndex: 94, complexityLevel: "EXTREME", dominantColor: "#9d174d", 
        rating: 7.8, criticsScore: 68, audienceScore: 76, director: "Jaco Van Dormael", 
        cast: ["Jared Leto", "Diane Kruger"], boxOffice: "$3.6 million", budget: "$47 million", 
        dna: { "Sci-Fi": 50, "Drama": 30, "Fantasy": 20 }, 
        scenes: [
            { time: 20, intensity: 30, label: "The Train Station", color: "#9d174d" }, 
            { time: 50, intensity: 65, label: "Anna/Elise/Jean", color: "#be123c" }, 
            { time: 90, intensity: 80, label: "Big Crunch", color: "#e11d48" }, 
            { time: 120, intensity: 88, label: "Entropy", color: "#f43f5e" }, 
            { time: 141, intensity: 94, label: "The Architect", color: "#fb7185" }
        ], 
        synopsis: "In the year 2092, the last mortal human on Earth recounts his life to a reporter. However, he describes multiple lives he could have led based on a single decision at a train station. Exploring the Butterfly Effect and quantum physics, this film proves that every choice is the right one, provided it is lived.", 
        themes: ["Choice", "Butterfly Effect", "Entropy", "Parallel Universes"]
    },

    // 10. Shutter Island (2010) - UNIVERSAL REFERENCE (Grip Peak 100)
    11324: {
        mindBendingIndex: 80, complexityLevel: "MEDIUM", dominantColor: "#0c4a6e", 
        rating: 8.2, criticsScore: 69, audienceScore: 77, director: "Martin Scorsese", 
        cast: ["Leonardo DiCaprio", "Mark Ruffalo"], boxOffice: "$294.8 million", budget: "$80 million", 
        dna: { "Thriller": 60, "Mystery": 25, "Drama": 15 }, 
        scenes: [
            { time: 15, intensity: 35, label: "Arrival", color: "#0c4a6e" }, 
            { time: 50, intensity: 60, label: "The Lighthouse", color: "#1e293b" }, 
            { time: 90, intensity: 85, label: "Ward C", color: "#334155" }, 
            { time: 120, intensity: 96, label: "The Truth", color: "#475569" }, 
            { time: 138, intensity: 100, label: "Live as a Monster", color: "#64748b" }
        ], 
        synopsis: "A US Marshal investigates the disappearance of a patient from an island asylum. He soon suspects a massive medical conspiracy, only to realize that the truth is far more personal and devastating. Scorsese’s psychological masterwork is the ultimate study in repressed trauma and constructed reality.", 
        themes: ["Grief", "Repression", "Sanity", "Constructed Truth"]
    },

    // 11. The Usual Suspects (1995) - Narrative Misdirection Peak (Grip Peak 100)
    629: {
        mindBendingIndex: 88, complexityLevel: "HIGH", dominantColor: "#dc2626", 
        rating: 8.5, criticsScore: 88, audienceScore: 94, director: "Bryan Singer", 
        cast: ["Kevin Spacey", "Gabriel Byrne"], boxOffice: "$23.3 million", budget: "$6 million", 
        dna: { "Crime": 50, "Mystery": 35, "Thriller": 15 }, 
        scenes: [
            { time: 10, intensity: 30, label: "The Lineup", color: "#dc2626" }, 
            { time: 35, intensity: 55, label: "The Heist", color: "#ef4444" }, 
            { time: 65, intensity: 70, label: "The Boat massacre", color: "#f87171" }, 
            { time: 90, intensity: 88, label: "The Story Folds", color: "#fca5a5" }, 
            { time: 103, intensity: 100, label: "Keyser Söze", color: "#fecaca" }
        ], 
        synopsis: "Following a bloody massacre on a ship, the sole survivor tells the feds about a legendary criminal mastermind. Through an intricate web of stories, the film constructs a labyrinth of deception that shatters in its final seconds. A film that redefined the 'unreliable narrator' for a generation.", 
        themes: ["Deception", "Criminal Mythos", "Psychological Manipulation", "Identity"]
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
