// utils/movieData.js - MOVIES LIKE INCEPTION (MIND-BENDING) ✅
// Focused on narrative complexity, surrealism, and psychological depth.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1. RAW DATA LIST (NO NETFLIX MOVIES)
export const COMPLETE_MOVIE_DATABASE = [
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
    { "tmdbId": 14337, "imdbID": "tt0390384", "Title": "Primer", "year": 2004, "genre": "Sci-Fi", "runtime": 77, "rank": 1 }
];



// ✅ STRATEGIC QUOTES FOR MIND-BENDING COLLECTION
export const STRATEGIC_QUOTES = {
    14337: "They say time is the fire in which we burn.", // Primer
    4960: "Everything is more complicated than you think.", // Synecdoche, New York
    1018: "No hay banda. There is no band.", // Mulholland Drive
    206487: "What if I told you that you're the person you're trying to catch?", // Predestination
    220289: "There are dark places where terrible things have happened.", // Coherence
    141: "Every living creature on earth dies alone.", // Donnie Darko
    181886: "I don't think I'm me.", // Enemy
    1381: "Death is the road to awe.", // The Fountain
    31011: "Every path is the right path.", // Mr. Nobody
    11324: "You're smarter than you look, Marshal.", // Shutter Island
    629: "The greatest trick the devil ever pulled was convincing the world he didn't exist." // The Usual Suspects
};



// 2. SENSITIVE TIMELINES (Converted to String Format)
export const SENSITIVE_TIMELINES = {
    // 1. Primer
    14337: { scenes: [] },

    // 2. Synecdoche, New York
    4960: { 
        scenes: [
            { start: "0:34:24", end: "0:35:05", type: "Sexual Content", severity: "High" },
            { start: "0:46:40", end: "0:46:47", type: "Kissing", severity: "Mild" },
            { start: "0:56:35", end: "0:57:04", type: "Sexual Content", severity: "Moderate" },
            { start: "1:01:35", end: "1:02:12", type: "Nudity", severity: "Moderate" },
            { start: "1:33:04", end: "1:35:15", type: "Nudity", severity: "High" },
            { start: "1:38:35", end: "1:38:40", type: "Kissing", severity: "Mild" }
        ]
    },

    // 3. Mulholland Drive
    1018: { 
        scenes: [
            { start: "1:19:38", end: "1:20:02", type: "Kissing", severity: "Mild" },
            { start: "1:38:45", end: "1:42:18", type: "Nudity", severity: "High" },
            { start: "2:01:27", end: "2:02:59", type: "Nudity", severity: "High" },
            { start: "2:04:36", end: "2:05:03", type: "Kissing", severity: "Mild" },
            { start: "2:15:50", end: "2:15:58", type: "Kissing", severity: "Mild" }
        ]
    },

    // 4. Predestination
    206487: { 
        scenes: [
            { start: "0:19:07", end: "0:19:20", type: "Sex & Nudity", severity: "High" },
            { start: "0:42:20", end: "0:42:50", type: "Nudity", severity: "High" },
            { start: "1:12:50", end: "1:12:58", type: "Kissing", severity: "Mild" }
        ]
    },

    // 5. Coherence
    220289: { 
        scenes: [
            { start: "0:53:27", end: "0:53:34", type: "Kissing", severity: "Mild" }
        ]
    },

    // 6. Donnie Darko
    141: { 
        scenes: [
            { start: "1:08:02", end: "1:08:16", type: "Kissing", severity: "Mild" },
            { start: "1:17:00", end: "1:17:08", type: "Kissing", severity: "Mild" },
            { start: "1:31:10", end: "1:31:30", type: "Kissing", severity: "Mild" }
        ]
    },

    // 7. Enemy
    181886: { 
        scenes: [
            { start: "0:01:46", end: "0:01:50", type: "Partial Nudity", severity: "Mild" },
            { start: "0:02:50", end: "0:04:58", type: "Nudity", severity: "High" },
            { start: "0:07:23", end: "0:07:29", type: "Kissing", severity: "Mild" },
            { start: "0:07:50", end: "0:08:05", type: "Sexual Content", severity: "High" },
            { start: "0:08:37", end: "0:08:42", type: "Sexual Content", severity: "High" },
            { start: "0:09:10", end: "0:09:15", type: "Sexual Content", severity: "High" },
            { start: "0:14:38", end: "0:15:10", type: "Sexual Content", severity: "High" },
            { start: "0:45:20", end: "0:45:52", type: "Nudity", severity: "High" },
            { start: "1:14:25", end: "1:14:41", type: "Partial Nudity", severity: "Moderate" },
            { start: "1:19:30", end: "1:20:35", type: "Sexual Content", severity: "High" },
            { start: "1:22:20", end: "1:22:42", type: "Kissing/Nudity", severity: "High" },
            { start: "1:23:55", end: "1:24:08", type: "Nudity", severity: "High" }
        ]
    },



    

    // 8. The Fountain
    1381: { 
        scenes: [
            { start: "0:26:34", end: "0:27:46", type: "Intimate Kissing", severity: "Moderate" },
            { start: "0:36:57", end: "0:37:01", type: "Partial Nudity", severity: "Mild" }
        ]
    },

    // 9. Mr. Nobody
    31011: { 
        scenes: [
            { start: "0:31:48", end: "0:32:00", type: "Kissing", severity: "Mild" },
            { start: "0:48:56", end: "0:49:10", type: "Intimate Kissing", severity: "Moderate" },
            { start: "1:03:58", end: "1:05:08", type: "Intimate Kissing", severity: "Moderate" },
            { start: "1:08:27", end: "1:08:31", type: "Kissing", severity: "Mild" },
            { start: "1:17:08", end: "1:17:42", type: "Sexual Content", severity: "Moderate" },
            { start: "1:35:10", end: "1:36:58", type: "Intimate Kissing", severity: "Moderate" }
        ]
    },

    // 10. Shutter Island
    11324: { 
        scenes: [
            { start: "1:10:43", end: "1:10:47", type: "Nudity", severity: "Moderate" },
            { start: "1:59:03", end: "1:59:06", type: "Casual Kissing", severity: "Mild" }
        ]
    },

    // 11. The Usual Suspects
    629: { 
        scenes: [
            { start: "1:00:15", end: "1:00:47", type: "Sexual Content", severity: "Moderate" }
        ]
    }
};

// 3. FALLBACK POSTERS
export const FALLBACK_POSTERS = {
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
    629: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEzNy00NTgyLWIwM2EtYjI2YjU1ZjUxODgxXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX500.jpg"
};

// Helper
const createMindBendingData = (data) => ({
    mindBendingIndex: 85,
    narrativeComplexity: 80,
    visualImpact: 75,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

// 4. DETAILED MOVIE DATA (ALL 11 MOVIES - 5 INTENSITY POINTS EACH)
export const COMPLETE_MOVIE_DATA = {
    // 1. Primer
    14337: createMindBendingData({
        mindBendingIndex: 99, narrativeComplexity: 100, visualImpact: 60, complexityLevel: "EXTREME", dominantColor: "#1e3a8a", 
        rating: 6.9, criticsScore: 73, audienceScore: 79, director: "Shane Carruth", 
        cast: ["Shane Carruth", "David Sullivan"], boxOffice: "$424,760", budget: "$7,000", 
        dna: { "Sci-Fi": 75, "Thriller": 15, "Drama": 10 }, 
        scenes: [
            { time: 10, intensity: 30, label: "The Discovery", color: "#1e3a8a" }, 
            { time: 25, intensity: 45, label: "First Loop", color: "#1d4ed8" }, 
            { time: 40, intensity: 55, label: "Paradox Logic", color: "#2563eb" }, 
            { time: 55, intensity: 75, label: "The Failsafe", color: "#3b82f6" }, 
            { time: 70, intensity: 88, label: "Timeline Collapse", color: "#60a5fa" }
        ], 
        synopsis: "Two engineers accidentally build a device in their garage that allows them to travel back in time. What begins as a profitable experiment rapidly fractures into a paranoid nightmare of multiple timelines and betrayal. Widely cited as the most scientifically dense and logically complex time-travel film ever made, it demands total focus to solve its impossible puzzle.", 
        themes: ["Temporal Logic", "Scientific Ethics", "Betrayal", "Solipsism"],
        awards: ["Sundance Grand Jury Prize"]
    }),

    // 2. Synecdoche, New York
    4960: createMindBendingData({
        mindBendingIndex: 97, narrativeComplexity: 90, visualImpact: 85, complexityLevel: "EXTREME", dominantColor: "#7c2d12", 
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
        awards: ["Independent Spirit Award"]
    }),

    // 3. Mulholland Drive
    1018: createMindBendingData({
        mindBendingIndex: 96, narrativeComplexity: 95, visualImpact: 100, complexityLevel: "EXTREME", dominantColor: "#701a75", 
        rating: 7.9, criticsScore: 85, audienceScore: 82, director: "David Lynch", 
        cast: ["Naomi Watts", "Laura Harring"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { Mystery: 50, Thriller: 30, Drama: 20 },
        scenes: [
            { time: 25, intensity: 40, label: "Winkie's", color: "#6b21a8" },
            { time: 70, intensity: 55, label: "Audition", color: "#dc2626" },
            { time: 110, intensity: 95, label: "Silencio", color: "#60a5fa" },
            { time: 125, intensity: 100, label: "The Box", color: "#0f172a" },
            { time: 140, intensity: 90, label: "Reality", color: "#a78bfa" }
        ],
        synopsis: "An aspiring actress and an amnesiac woman collide in a search for identity that devolves into a surreal nightmare. Lynch shatters the Hollywood dream to expose the psychological trauma of rejection in cinema's most famous mind-bender.",
        themes: ["Identity Fracture", "Hollywood Underbelly", "Dream Logic"]
    }),

    // 4. Predestination
    206487: createMindBendingData({
        mindBendingIndex: 90, narrativeComplexity: 92, visualImpact: 80, complexityLevel: "EXTREME", dominantColor: "#0f172a", 
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
        themes: ["Predestination", "Causality Paradox", "Fate", "Identity Transfer"],
        awards: ["AACTA Award"]
    }),

    // 5. Coherence
    220289: createMindBendingData({
        mindBendingIndex: 88, narrativeComplexity: 85, visualImpact: 70, complexityLevel: "HIGH", dominantColor: "#166534", 
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
        themes: ["Quantum Physics", "Parallel Realities", "Paranoia", "Choice"],
        awards: ["Austin Fantastic Fest Winner"]
    }),

    // 6. Donnie Darko
    141: createMindBendingData({
        mindBendingIndex: 91, narrativeComplexity: 85, visualImpact: 85, complexityLevel: "HIGH", dominantColor: "#1e293b", 
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
        themes: ["Determinism", "Mental Health", "Sacrifice", "Time Loops"],
        awards: ["Cult Classic Status"]
    }),

    // 7. Enemy
    181886: createMindBendingData({
        mindBendingIndex: 89, narrativeComplexity: 80, visualImpact: 85, complexityLevel: "HIGH", dominantColor: "#854d0e", 
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
        themes: ["Duality", "Subconscious", "Infidelity", "Control"],
        awards: ["Canadian Screen Awards"]
    }),

    // 8. The Fountain
    1381: createMindBendingData({
        mindBendingIndex: 87, narrativeComplexity: 85, visualImpact: 100, complexityLevel: "HIGH", dominantColor: "#4c1d95", 
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
        themes: ["Eternal Love", "Mortality", "Rebirth", "Spiritual Acceptance"],
        awards: ["Venice Film Festival"]
    }),

    // 9. Mr. Nobody
    31011: createMindBendingData({
        mindBendingIndex: 94, narrativeComplexity: 95, visualImpact: 90, complexityLevel: "EXTREME", dominantColor: "#9d174d", 
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
        themes: ["Choice", "Butterfly Effect", "Entropy", "Parallel Universes"],
        awards: ["European Film Awards"]
    }),

    // 10. Shutter Island
    11324: createMindBendingData({
        mindBendingIndex: 87, narrativeComplexity: 75, visualImpact: 85, complexityLevel: "MEDIUM", dominantColor: "#0c4a6e", 
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
        themes: ["Grief", "Repression", "Sanity", "Constructed Truth"],
        awards: ["National Board of Review"]
    }),

    // 11. The Usual Suspects
    629: createMindBendingData({
        mindBendingIndex: 88, narrativeComplexity: 85, visualImpact: 70, complexityLevel: "HIGH", dominantColor: "#dc2626", 
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
        themes: ["Deception", "Criminal Mythos", "Psychological Manipulation", "Identity"],
        awards: ["2 Oscars"]
    })
};

// 5. INCEPTION COLLECTION FAQs (4 PER FILM)
export const INCEPTION_COLLECTION_FAQS = {
    'Primer': [
        { question: "Is the timeline in Primer solvable?", answer: "Yes, but it is incredibly difficult. Fans have created elaborate flowcharts to track the 9+ timelines created by the recursive use of the box." },
        { question: "What happens to the doubles?", answer: "The film implies that multiple versions of Aaron and Abe exist simultaneously, some locked away or drugged by their future selves." },
        { question: "Why do their ears bleed?", answer: "Ear bleeding is a symptom of physical degradation caused by long-term time travel, suggesting the human body cannot handle repeated causal loops." },
        { question: "How long were they in the box?", answer: "To travel back multiple days, they had to sit in the box for that exact duration (e.g., sit for 24 hours to go back 24 hours), requiring immense patience." }
    ],
    'Synecdoche, New York': [
        { question: "Is Caden dead the whole time?", answer: "Many theories suggest Caden is dying throughout the film, and the play is his brain processing his final moments. The fading sets and time jumps support this." },
        { question: "What does the burning house symbolize?", answer: "It represents Hazel's choice to live authentically even while being consumed by mortality. She buys a house that is on fire and lives in it until she dies." },
        { question: "Why does the set keep growing?", answer: "The set represents Caden's mind. As he tries to capture the full complexity of life, the simulation becomes as large and unmanageable as reality itself." },
        { question: "Who is the cleaning lady?", answer: "The cleaning lady who gives Caden his final instructions represents death or God, guiding him to his final rest and release from his artistic obsession." }
    ],
    'Mulholland Drive': [
        { question: "Who is the cowboy?", answer: "The Cowboy represents Hollywood's gatekeepers—a surreal enforcer of the rules who appears when the dream (Betty's life) starts to deviate from the script." },
        { question: "Is the first half a dream?", answer: "Yes. The consensus is that the first 2/3 of the film is Diane's dream of being 'Betty,' a successful actress, before reality crashes in." },
        { question: "What does the blue box mean?", answer: "The blue box is the portal between the dream world and reality. Opening it signifies the dreamer waking up and the fantasy collapsing." },
        { question: "Who is the homeless figure?", answer: "The figure behind Winkie's diner represents the ugly, terrifying truth of Diane's guilt and failure, hidden behind the shiny facade of her Hollywood dream." }
    ],
    'Coherence': [
        { question: "Which Em survives?", answer: "The Em we follow at the end is not the original Em. She murdered a version of herself in a 'better' timeline to take her place, but the final phone call reveals she wasn't successful." },
        { question: "How much was improvised?", answer: "Almost all of it. The actors were given index cards with motivations for each scene but no script, creating genuine confusion and paranoia." },
        { question: "What do the glow sticks mean?", answer: "The glow sticks (red vs blue) are markers of different realities. The characters realize they have crossed into a different timeline when the glow stick colors don't match." },
        { question: "Is the ending happy?", answer: "No. It is a chilling subversion. Em thinks she has stolen a perfect life, but the existence of two Ems in one timeline means her chaos is just beginning." }
    ],
    'Donnie Darko': [
        { question: "What is the Tangent Universe?", answer: "It is an unstable parallel reality created when the jet engine falls. Donnie is the 'Living Receiver' chosen to return the artifact to the Primary Universe to prevent a black hole collapse." },
        { question: "Does Donnie have to die?", answer: "Yes. To close the loop and save the universe (and his girlfriend Gretchen), Donnie must choose to stay in his bed and be crushed by the engine." },
        { question: "Who is Grandma Death?", answer: "Roberta Sparrow is a former 'Living Receiver' who wrote the book on time travel. She wanders aimlessly, waiting for Donnie to fulfill the prophecy she wrote." },
        { question: "Why is Frank a rabbit?", answer: "Frank is a 'Manipulated Dead'—someone who died in the Tangent Universe. His scary costume is simply what he was wearing when he was shot, appearing to Donnie as a ghost." }
    ],
    'Enemy': [
        { question: "What does the spider mean?", answer: "The spider represents women, entrapment, and the fear of commitment/motherhood in the protagonist's subconscious. The final giant spider is his wife, symbolizing his total entrapment." },
        { question: "Are they the same person?", answer: "Yes. Adam and Anthony are two sides of the same man's personality—the bored husband and the adulterous actor—battling for control." },
        { question: "What is the car crash scene?", answer: "The crash kills the 'Anthony' personality and his mistress, leaving 'Adam' as the surviving persona who tries to return to his wife, only to fall back into old habits." },
        { question: "Why does he sigh at the end?", answer: "The sigh indicates resignation. When he sees the giant spider (his wife), he accepts that he is trapped in his life and must likely cheat/escape again to cope." }
    ],
    'The Fountain': [
        { question: "Are there three time periods?", answer: "Director Darren Aronofsky suggests there is only one reality: the present-day scientist Tom. The Conquistador story is the book his wife wrote, and the space future is his internal meditation on grief." },
        { question: "What does Xibalba symbolize?", answer: "Xibalba is the Maya underworld, a place of death and rebirth. For Tom, reaching Xibalba means accepting that death is not a disease to be cured, but a part of creation." },
        { question: "Did he find the cure?", answer: "No, he failed to save his wife's body. However, he succeeded in saving himself by finally finishing her book and accepting her death, finding spiritual peace." },
        { question: "Why does he eat the tree bark?", answer: "In the Conquistador story, his greed for immortality makes him consume the tree, which turns him into flora. It warns that the selfish desire to live forever destroys humanity." }
    ],
    'Mr. Nobody': [
        { question: "Which life is real?", answer: "None of them and all of them. The entire film takes place in the mind of the 9-year-old boy at the train station, paralyzingly envisioning every possible future before making a choice." },
        { question: "What is the Big Crunch?", answer: "It is the theory that the universe will stop expanding and reverse. In the film, time starts moving backward at the moment of the Big Crunch, allowing Nemo to undo his choices." },
        { question: "Who is the old Nemo?", answer: "Old Nemo is the consciousness of the boy projecting himself to the end of time. He is the observer checking which path leads to the least regret." },
        { question: "What does 'checkmate' mean?", answer: "It refers to a state where any move is a bad move (zugzwang). Nemo realizes the only way to avoid pain is not to choose, which is why he remains at the station." }
    ],
    'Shutter Island': [
        { question: "Is he insane or being gaslit?", answer: "He is Andrew Laeddis, a patient at the asylum. The 'investigation' is an elaborate role-play designed by his doctors to help him break his delusion." },
        { question: "Does he accept reality at the end?", answer: "Yes. His final line ('To live as a monster or to die as a good man?') implies he is sane but chooses lobotomy over living with the guilt of killing his wife." },
        { question: "Who is the 'partner' Chuck?", answer: "Chuck is actually Dr. Sheehan, his primary psychiatrist. He plays along with the delusion to monitor Andrew and keep him safe during the experiment." },
        { question: "What is the Law of 4?", answer: "The 'Law of 4' is the clue that reveals the anagrams in names (Edward Daniels = Andrew Laeddis). It proves his entire persona is a constructed fiction." }
    ],
    'The Usual Suspects': [
        { question: "Is Verbal Kint really Keyser Söze?", answer: "Yes. The limp, the weakness, and the story were all a fabrication. He used details from the bulletin board in the office to construct the narrative." },
        { question: "Did the heist actually happen?", answer: "The core event (the boat massacre) happened, but the details involving the other criminals were likely manipulated or invented by Kint to frame Keaton." },
        { question: "Why did he kill his own family?", answer: "To prove to his enemies that he had no weaknesses. By destroying what he loved, he removed their leverage, establishing his terrifying mythos." },
        { question: "What gave him away?", answer: "The detective realizes too late that the names and places in Kint's story (Redfoot, Kobayashi) were pulled from random objects in the interrogation room." }
    ],
    'Predestination': [
        { question: "Who are the parents?", answer: "Jane and John are the parents of themselves. It is a closed loop where the same person is the mother, father, and child." },
        { question: "Does the loop ever end?", answer: "No. The movie implies a fatalistic universe where the loop is infinite. The main character must become the Fizzle Bomber to ensure his own creation." },
        { question: "Who is the Fizzle Bomber?", answer: "The Fizzle Bomber is the future version of the protagonist (John/Jane). The psychosis from excessive time travel turned him into the villain he spent his life hunting." },
        { question: "What is the snake metaphor?", answer: "The 'Ouroboros' (snake eating its tail) is referenced constantly. It symbolizes the character's life: a self-contained cycle of creation and destruction with no beginning or end." }
    ]
};

// 6. HELPER FUNCTIONS & EXPORTS
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('violence')) types.add('graphic violence');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return INCEPTION_COLLECTION_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A mind-bending film like Inception.`,
        "genre": movie.genre,
        "datePublished": movie.year.toString(),
        "director": { "@type": "Person", "name": movieInfo?.director || "Acclaimed Director" },
        "actor": movieInfo?.cast?.map(actor => ({ "@type": "Person", "name": actor })) || [],
        "duration": `PT${movie.runtime}M`,
        "image": posterUrl,
        "aggregateRating": { 
            "@type": "AggregateRating", 
            "ratingValue": movieInfo?.rating || 7.5, 
            "bestRating": 10, 
            "worstRating": 1, 
            "ratingCount": 100 
        }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ 
        "@type": "Question", 
        "name": faq.question, 
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer } 
    }))
});

export const fetchMovieFromTMDB = async (tmdbId) => ({ 
    poster_path: null, 
    title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
});

export const fetchWatchProviders = async (tmdbId, region = 'US') => null;

export const formatSensitiveTimeline = (tmdbId) => {
    // The format in SENSITIVE_TIMELINES is already in HH:MM:SS format, so we can just return it.
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    return {
        scenes: raw.scenes.map(scene => ({
            start: scene.start,
            end: scene.end,
            type: scene.type,
            description: scene.description || '',
            severity: scene.severity || 'Moderate'
        }))
    };
};

// Export named alias for compatibility
export const MOVIES_LIKE_INCEPTION = COMPLETE_MOVIE_DATABASE;

export default {
    COMPLETE_MOVIE_DATABASE,
    MOVIES_LIKE_INCEPTION,
    COMPLETE_MOVIE_DATA,
    SENSITIVE_TIMELINES,
    INCEPTION_COLLECTION_FAQS,
    FALLBACK_POSTERS
};