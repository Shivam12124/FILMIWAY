// utils/movieData.js - MOVIES LIKE INCEPTION (MIND-BENDING) ✅
// Focused on narrative complexity, surrealism, and psychological depth.

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
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
    14337: { scenes: [] }, // Primer
    4960: {  // Synecdoche, New York
        scenes: [
            { start: "0:34:24", end: "0:35:05", type: "Sexual Content", severity: "High" },
            { start: "0:56:35", end: "0:57:04", type: "Sexual Content", severity: "Moderate" },
            { start: "1:01:35", end: "1:02:12", type: "Nudity", severity: "Moderate" },
            { start: "1:33:04", end: "1:35:15", type: "Nudity", severity: "High" },
            
        ]
    },
    1018: {  // Mulholland Drive
        scenes: [
             { start: "0:23:32", end: "0:24:30", type: "Nudity (Blurred)", severity: "Moderate" },
            { start: "1:38:45", end: "1:42:18", type: "Nudity", severity: "High" },
            { start: "2:01:27", end: "2:02:59", type: "Nudity", severity: "High" },
          
        ]
    },
    206487: {  // Predestination
        scenes: [
            { start: "0:19:07", end: "0:19:20", type: "Sex & Nudity", severity: "High" },
            { start: "0:42:20", end: "0:42:50", type: "Nudity", severity: "High" },
            
        ]
    },
    220289: {  // Coherence
        scenes: [
          
        ]
    },
    141: {  // Donnie Darko
        scenes: [

        ]
    },
    181886: {  // Enemy
        scenes: [
            { start: "0:01:46", end: "0:01:50", type: "Nudity", severity: "High" },
            { start: "0:02:50", end: "0:04:58", type: "Nudity", severity: "High" },
            { start: "0:07:50", end: "0:08:05", type: "Sex", severity: "Moderate" },
            { start: "0:08:33", end: "0:08:42", type: "Sex", severity: "Moderate" },
            { start: "0:09:10", end: "0:09:15", type: "Sex", severity: "Moderate" },
            { start: "0:14:38", end: "0:15:10", type: "Sex", severity: "Moderate" },
            { start: "0:45:20", end: "0:45:52", type: "Nudity", severity: "High" },
            { start: "1:14:25", end: "1:14:41", type: "Nudity", severity: "High" },
            { start: "1:19:30", end: "1:20:35", type: "Sex", severity: "Moderate" },
            { start: "1:22:20", end: "1:22:42", type: "Nudity", severity: "High" },
            { start: "1:23:55", end: "1:24:08", type: "Nudity", severity: "High" }
        ] 
    },
    1381: {  // The Fountain
        scenes: [

            { start: "0:36:57", end: "0:37:01", type: "Nudity", severity: "Mild" }
        ]
    },
    31011: {  // Mr. Nobody
        scenes: [

            { start: "1:17:08", end: "1:17:42", type: "Sexual Content", severity: "Moderate" },
            { start: "1:35:10", end: "1:36:58", type: "Sexual Content", severity: "Moderate" }
        ]
    },
    11324: {  // Shutter Island
        scenes: [
            { start: "1:10:43", end: "1:10:47", type: "Nudity", severity: "Moderate" },
           
        ]
    },
    629: {  // The Usual Suspects
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

// 4. DETAILED MOVIE DATA
export const COMPLETE_MOVIE_DATA = {
    // 1. Primer
    14337: createMindBendingData({
        mindBendingIndex: 100, narrativeComplexity: 100, visualImpact: 60, complexityLevel: "EXTREME", dominantColor: "#1e3a8a", 
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
        { question: "Is the timeline in the movie Primer actually solvable?", answer: "Yes, but it is notoriously difficult to map. Fans have spent years creating complex flowcharts to track the 9+ overlapping timelines created by the recursive use of 'The Box.' The film is unique because it refuses to simplify its math, forcing the audience to experience the same disorientation as the characters." },
        { question: "What happens to the 'original' versions of the characters in Primer?", answer: "The film implies a dark reality: to take over a timeline, the time-traveling version must neutralize their double. There are scenes suggesting that the future versions of Aaron and Abe have drugged or physically locked away their original-timeline selves in attics to steal their lives." },
        { question: "Why do the characters' ears bleed in Primer?", answer: "Ear bleeding is a symptom of severe physical degradation caused by the 'gravity loop' inside the boxes. It suggests that the human body was never meant to handle repeated causal loops, adding a layer of grounded, 'body horror' realism to the science fiction." },
        { question: "How does the time travel 'waiting' mechanic work in Primer?", answer: "Unlike most sci-fi, Primer requires time to pass inside the machine. To travel back 6 hours, you must sit in the box for 6 hours while time flows backward. This makes the journey a grueling test of physical endurance, leading to the dehydration and mental fatigue that eventually destroys the characters' friendship." }
    ],
    'Synecdoche, New York': [
        { question: "Is Caden Cotard dead throughout the entire movie?", answer: "One of the most popular theories is that Caden is dying from a degenerative disease from the very first scene, and the increasingly surreal play is his brain's way of processing his final moments. The fading sets and impossible time jumps represent his consciousness slipping away into the void." },
        { question: "What does the house that is always on fire symbolize?", answer: "The burning house represents Hazel's choice to live authentically despite the certainty of death. She buys a house that is perpetually on fire and lives in it until she dies of smoke inhalation, symbolizing the human condition: we are all living in a 'burning house' (mortality), and the only choice is how we live within it." },
        { question: "Why does the theater set in Synecdoche, New York never stop growing?", answer: "The set represents Caden's obsessive mind. As he tries to capture the infinite complexity of life, his simulation grows until it is a 1:1 scale of New York itself. It serves as a metaphor for the futility of art: you can never truly capture reality because the act of capturing it becomes part of the reality you're trying to film." },
        { question: "Who is the cleaning lady at the end of Synecdoche, New York?", answer: "The woman who gives Caden his final instructions represents the ultimate 'Director'—death or God. When she finally tells him to 'Die,' it is a moment of mercy. It signifies Caden’s release from his lifelong artistic obsession and the heavy burden of being the protagonist of his own failing life." }
    ],
    'Mulholland Drive': [
        { question: "Who is the Cowboy in Mulholland Drive?", answer: "The Cowboy is the surreal enforcer of the Hollywood 'system.' He acts as a gatekeeper of reality, appearing only when the dreamer (Diane) tries to deviate from the script she has written for herself. He is a reminder that even in her dreams, Diane is not in total control of her destiny." },
        { question: "Is the first half of Mulholland Drive a dream?", answer: "Yes. The widely accepted consensus is that the first two-thirds of the film is a 'guilt-induced' dream created by Diane Selwyn. She imagines herself as 'Betty,' a talented, hopeful actress, to escape the horrific reality that she failed in Hollywood and ordered a hit on her former lover." },
        { question: "What does the blue box symbolize in Mulholland Drive?", answer: "The blue box acts as a psychological portal between the fantasy world and the harsh reality. Opening the box represents the 'waking' process. Once the truth is let out, the dream collapses, and the dreamer is forced to confront the wreckage of their real life." },
        { question: "What is the meaning of the creature behind the diner in Mulholland Drive?", answer: "The figure behind Winkie's diner represents the raw, unfiltered truth of Diane's guilt and failure. It is the 'monster' hidden behind the shiny facade of her Hollywood aspirations. It serves as a terrifying reminder that some truths are so ugly they can literally kill you if you look at them directly." }
    ],
    'Coherence': [
        { question: "Which version of Em survives at the end of Coherence?", answer: "The Em we follow at the end is a 'villain' of sorts. She leaves her own chaotic timeline and enters a 'perfect' one where the comet didn't cause a fight. She murders the Em of that timeline to take her place, but the final phone call proves that the 'perfect' life she stole is already beginning to unravel." },
        { question: "How much of the dialogue in Coherence was improvised?", answer: "Nearly all of it. Director James Ward Byrkit gave the actors index cards with their character motivations but no script. This created genuine, unscripted confusion and paranoia, making the characters' escalating fear feel incredibly authentic to the audience." },
        { question: "What is the significance of the different colored glow sticks in Coherence?", answer: "The glow sticks act as markers for different parallel realities. The characters use them to identify their 'home' house, but they quickly realize they have inadvertently crossed into different timelines when the colors—and the contents of a random box—no longer match their memories." },
        { question: "Is the ending of the movie Coherence a happy one?", answer: "No, it is a chilling subversion. While Em physically escaped her original timeline, she is now trapped in a reality where two versions of her exist. Her 'stolen' life is built on murder and a cosmic anomaly that hasn't fully resolved, suggesting her personal nightmare is only just beginning." }
    ],
    'Donnie Darko': [
        { question: "What is the Tangent Universe in Donnie Darko?", answer: "The Tangent Universe is an unstable, parallel reality created when a 'corruption in time' occurs (the jet engine falling). According to the film's lore, this universe is doomed to collapse into a black hole unless Donnie, the 'Living Receiver,' successfully returns the 'Artifact' (the engine) to the Primary Universe." },
        { question: "Why does Donnie Darko have to die at the end?", answer: "Donnie must die to close the time loop and save the Primary Universe from destruction. By choosing to stay in bed and be crushed by the jet engine, he ensures that the Tangent Universe never happened, thereby saving the lives of everyone he loves who died in that alternate reality." },
        { question: "Who is 'Grandma Death' in Donnie Darko?", answer: "Roberta Sparrow (Grandma Death) is a former 'Living Receiver' who survived a previous time anomaly. She wrote the book 'The Philosophy of Time Travel' to guide future Receivers like Donnie. She wanders the road waiting for the letter that confirms Donnie has successfully saved the world." },
        { question: "Why does Frank appear as a rabbit in Donnie Darko?", answer: "Frank is a 'Manipulated Dead'—someone who was killed in the Tangent Universe. His ghost travels back in time to guide Donnie through the steps needed to fix the timeline. His scary rabbit costume is simply the Halloween outfit he was wearing when he was killed." }
    ],
    'Enemy': [
        { question: "What does the spider symbolize in the movie Enemy?", answer: "The spiders represent the protagonist's fear of women, commitment, and the 'suffocating' nature of marriage. The final, giant spider is a manifestation of his wife; he sees her as a monster not because she is evil, but because his own guilt and desire to escape his life make her presence feel like an entrapment." },
        { question: "Are the two main characters in Enemy actually the same person?", answer: "Yes. Adam (the bored professor) and Anthony (the adulterous actor) are two conflicting personas of the same man. The film is a psychological study of a man battling his own urges. One persona wants a stable life, while the other craves the 'danger' of infidelity." },
        { question: "What happened in the car crash scene in Enemy?", answer: "The crash is a symbolic 'death' of the Anthony persona and his mistress. It represents the protagonist's attempt to kill off his adulterous side and return to his pregnant wife. However, the final scene suggests that this 'death' was only temporary and his cycle of betrayal is starting again." },
        { question: "Why does the main character sigh at the end of Enemy?", answer: "The sigh is one of weary resignation. When he walks into the bedroom and sees the giant, terrified spider, he isn't shocked because he recognizes it as a manifestation of his own reality. He sighs because he realizes he will never truly change; he is trapped in an infinite loop of his own making." }
    ],
    'The Fountain': [
        { question: "Are there three different time periods in The Fountain?", answer: "Director Darren Aronofsky suggests there is only one reality: the present-day scientist Tom struggling to save his dying wife. The Conquistador story is the book his wife wrote, and the futuristic space traveler is a mental projection of Tom's centuries-long journey through grief and his eventual acceptance of death." },
        { question: "What does Xibalba symbolize in The Fountain?", answer: "Xibalba is the Maya underworld—a nebula where stars go to die and be reborn. For Tom, reaching Xibalba is a metaphor for the 'death of the ego.' It represents the moment he stops fighting mortality as a disease and realizes that death is an essential part of the cycle of life." },
        { question: "Does the scientist find the cure in The Fountain?", answer: "On a physical level, no; he fails to save his wife's body. However, on a spiritual level, he succeeds. By finally finishing her book and accepting her death, he 'cures' his own suffering. He realizes that her life continues through him and through the legacy of her work." },
        { question: "Why does the Conquistador turn into flowers at the end?", answer: "In the story-within-a-story, the Conquistador's greed for immortality leads him to consume the sap of the Tree of Life. Because his intent is selfish, the life force consumes him, turning his body into flora. It serves as a warning: the desperate, selfish desire to live forever literally destroys your humanity." }
    ],
    'Mr. Nobody': [
        { question: "Which of the lives in Mr. Nobody is the real one?", answer: "The film argues that every life is 'real' and every path is valid. The entire story takes place in the mind of 9-year-old Nemo at a train station. He is paralyzingly envisioning every possible future before making a choice. As long as he doesn't choose, all possibilities remain alive." },
        { question: "What is the 'Big Crunch' in the movie Mr. Nobody?", answer: "The Big Crunch is the scientific theory that the universe will eventually stop expanding and collapse back on itself. In the film, this event causes time to move backward, allowing the elderly Nemo to finally 'undo' his choices and return to the moment where his life diverged." },
        { question: "Who is the old man Nemo in the year 2092?", answer: "Old Nemo is the final consciousness of the young boy, projecting himself to the end of time. He acts as the 'observer' who has lived every possible life, finally realizing that the 'right' choice doesn't exist—what matters is the experience of living itself." },
        { question: "What does the term 'Checkmate' mean in Mr. Nobody?", answer: "It refers to the chess term 'Zugzwang,' a state where any move you make will lead to a worse position. Nemo realizes that by making a choice, he loses all other potential lives. His refusal to choose at the train station is his way of staying in a state of infinite potential." }
    ],
    'Shutter Island': [
        { question: "Is Teddy Daniels being gaslit or is he actually insane?", answer: "The film confirms that he is Andrew Laeddis, a patient at the Shutter Island facility. The entire 'investigation' was an elaborate, experimental role-play designed by his doctors as a last-ditch effort to help him break his delusion and accept that he killed his wife." },
        { question: "Does the main character become sane at the end of Shutter Island?", answer: "Yes. His final line—'Which would be worse: To live as a monster, or to die as a good man?'—proves he has regained his sanity. He realizes the truth is too painful to live with, so he fakes a relapse so that the doctors will lobotomize him, effectively 'killing' the monster Andrew." },
        { question: "Who is the partner 'Chuck' in Shutter Island?", answer: "Chuck Aule is actually Dr. Sheehan, Andrew’s primary psychiatrist. He played the role of the partner for two years to monitor Andrew's progress and keep him safe during the doctors' grand role-playing experiment." },
        { question: "What is the 'Law of 4' in Shutter Island?", answer: "The 'Law of 4' refers to the anagrams Andrew created to hide from the truth: 'Edward Daniels' is an anagram for 'Andrew Laeddis,' and 'Rachel Solando' is an anagram for his wife, 'Dolores Chanal.' It is the numerical key that proves his entire reality was a fictional construction." }
    ],
    'The Usual Suspects': [
        { question: "Is Verbal Kint definitely Keyser Söze?", answer: "Yes. The legendary ending reveals that the entire story was a brilliant fabrication. Kint used random names and brand logos from the office bulletin board (like Redfoot and Kobayashi) to spin a convincing lie, hiding his true identity as a ruthless crime lord in plain sight." },
        { question: "Did the events of the heist in The Usual Suspects actually happen?", answer: "The 'Outer' events happened: there was a boat explosion and a massacre. However, the 'Inner' details—the personalities and motivations of the other suspects—were likely manipulated or entirely invented by Kint to frame Dean Keaton and keep the police distracted while he escaped." },
        { question: "Why did Keyser Söze kill his own family?", answer: "According to the legend Kint tells, Söze killed his family to prove to his enemies that they had no leverage over him. By destroying what he loved, he proved he was willing to go further than any other man to maintain his power, establishing himself as a mythic, untouchable figure." },
        { question: "What was the mistake that gave Keyser Söze away?", answer: "The detective realizes the truth only after Kint has left. He notices that the details of Kint’s story—the names of his lawyer, his boss, and even locations—were all taken from objects in the interrogation room. The 'mistake' was the detective's own arrogance in believing he was smarter than the man in front of him." }
    ],
    'Predestination': [
        { question: "How can Jane and John be the parents of themselves in Predestination?", answer: "The film features a 'perfect' closed time loop. Because Jane was born intersex, she eventually becomes John through surgery. After traveling back in time, John fathers a child with his younger self (Jane). That child is then taken further back in time to become Jane, making the protagonist their own mother, father, and offspring." },
        { question: "Does the time loop in Predestination ever actually end?", answer: "No. The film presents a fatalistic view of time where the loop is infinite and self-sustaining. Every action the protagonist takes to stop the loop is exactly what causes it to happen, suggesting that in this universe, free will is an illusion and fate is absolute." },
        { question: "Who is the Fizzle Bomber in the movie Predestination?", answer: "The Fizzle Bomber is the future, elderly version of the protagonist. The mental strain and 'psychosis' caused by decades of excessive time travel eventually warped his mind, turning him into the very terrorist he spent his entire life trying to hunt and kill." },
        { question: "What is the significance of the snake metaphor in Predestination?", answer: "The film revolves around the 'Ouroboros'—a snake eating its own tail. It is the perfect symbol for the protagonist's life: a self-contained cycle with no beginning or end. They are a person who 'doesn't come from anywhere,' existing eternally within their own causal loop." }
    ]
};

// 6. HELPER FUNCTIONS & EXPORTS: 100% SPAM-FREE, DYNAMIC, & GOOGLE APPROVED
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const fetchMovieFromTMDB = async (tmdbId) => ({ 
    poster_path: null, 
    title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
});

export const fetchWatchProviders = async (tmdbId, region = 'US') => null;

export const formatSensitiveTimeline = (tmdbId) => {
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

// 🔥 PARSER FIX: Kept clean to focus only on high-value dealbreakers (Kissing is ignored!)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sexual content')) types.add('sexual content');
        else if (lowerType.match(/\bsex\b/)) types.add('sex');
        else if (lowerType.includes('explicit')) types.add('explicit content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

// 🔥 UNIFIED CLEAN GENERATOR (For Google Bots & LLMs)
// 🔥 HELPER: Calculates total skip time in minutes and seconds
const calculateSkipStats = (scenes) => {
    let totalSeconds = 0;
    scenes.forEach(scene => {
        if (scene.start && scene.end) {
            const parseTime = (t) => {
                const parts = t.split(':').map(Number);
                if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                return 0;
            };
            const startSec = parseTime(scene.start);
            const endSec = parseTime(scene.end);
            if (endSec > startSec) totalSeconds += (endSec - startSec);
        }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (totalSeconds === 0) return "< 1 min"; 
    if (mins === 0) return `${secs} sec`;
    return secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
};

// 🔥 NEW: HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    if (extremeCount >= 2) return 'Extreme';
    if (severities.includes('high') || extremeCount === 1) return 'High';
    if (severities.includes('moderate')) return 'Moderate';
    return 'Mild';
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini'); 
    });

    const sceneCount = heavyScenes.length;
    let schemaDesc = '';
    if (sceneCount > 0) {
        schemaDesc = `${movie.Title} Parents Guide with exact sex & nudity timestamps. ${sceneCount} scenes manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        schemaDesc = `${movie.Title} Parents Guide. Filmiway editors have manually verified zero sex scenes or nudity in the full ${currentRuntime} runtime.`;
    }

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': schemaDesc,
        'genre': movie.genre,
        'url': `https://filmiway.com/movie/${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = INCEPTION_COLLECTION_FAQS[movie.Title] ? [...INCEPTION_COLLECTION_FAQS[movie.Title]] : [];
    const intensityScenes = movieInfo?.scenes || [];
    
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    if (intensityScenes.length > 0) {
        const schemaIntensityList = intensityScenes.map(s => `<li>Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)</li>`).join('');
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `What are the most intense scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Intensity metric, ${movie.Title} peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing to determine if it's truly unsafe for family
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqSchema = familyUnsafeTypes.length > 0 
            ? {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${currentRuntime} runtime.`
                }
            }
            : {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.`
                }
            };

        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes. ${movie.Title} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:<br><br><ul>${schemaListText}</ul><br>Manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.` 
                }
            },
            {
                '@type': 'Question',
                'name': `What time does nudity appear in ${movie.Title} and how do I skip it?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${currentRuntime} version.`
                }
            },
            familyFaqSchema
        );
    } else {
        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `No. Filmiway editors have manually verified that ${movie.Title} is free of explicit sex scenes and nudity.` 
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.` 
                }
            }
        );
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'name': `Parents Guide and FAQ for ${movie.Title}`,
        'mainEntity': schemaFaqs
    };

    return { movieSchema, faqSchema };
};

// 🔥 8. FRONTEND UI SYNC
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = INCEPTION_COLLECTION_FAQS[movieTitle] ? [...INCEPTION_COLLECTION_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:

${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const sceneCount = heavyScenes.length;
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const uiDetailedList = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const fullType = s.severity ? `${s.type || 'Mature Content'}, ${s.severity}` : (s.type || 'Mature Content');
            return `• ${timeRange} (${fullType})`;
        }).join('\n');
        
        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing for the UI as well
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqUI = familyUnsafeTypes.length > 0
            ? {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${finalRuntime} runtime.`
            }
            : {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            };

        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:

${uiDetailedList}

Manually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does nudity appear in ${movieTitle} and how do I skip it?`,
                answer: `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${finalRuntime} version.`
            },
            familyFaqUI
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
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