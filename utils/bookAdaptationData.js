// utils/bookAdaptationData.js - BEST BOOK-TO-MOVIE ADAPTATIONS COLLECTION ✅
// Movies exploring literary depth, page-to-screen fidelity, and timeless storytelling.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 278, "imdbID": "tt0111161", "Title": "The Shawshank Redemption", "year": 1994, "genre": "Drama", "runtime": 1422, "rank": 1 },
    { "tmdbId": 122, "imdbID": "tt0167260", "Title": "The Lord of the Rings: The Return of the King", "year": 2003, "genre": "Fantasy", "runtime": 201, "rank": 2 },
    { "tmdbId": 510, "imdbID": "tt0073486", "Title": "One Flew Over the Cuckoo's Nest", "year": 1975, "genre": "Drama", "runtime": 133, "rank": 3 },
    { "tmdbId": 497, "imdbID": "tt0120689", "Title": "The Green Mile", "year": 1999, "genre": "Crime", "runtime": 189, "rank": 4 },
    { "tmdbId": 627, "imdbID": "tt0117951", "Title": "Trainspotting", "year": 1996, "genre": "Drama", "runtime": 93, "rank": 5 },
    { "tmdbId": 264644, "imdbID": "tt3170832", "Title": "Room", "year": 2015, "genre": "Drama", "runtime": 118, "rank": 6 },
    { "tmdbId": 142, "imdbID": "tt0388795", "Title": "Brokeback Mountain", "year": 2005, "genre": "Drama", "runtime": 134, "rank": 7 },
    { "tmdbId": 8055, "imdbID": "tt0976051", "Title": "The Reader", "year": 2008, "genre": "Romance", "runtime": 124, "rank": 8 },
    { "tmdbId": 258480, "imdbID": "tt2402927", "Title": "Carol", "year": 2015, "genre": "Romance", "runtime": 118, "rank": 9 },
    { "tmdbId": 97370, "imdbID": "tt1441395", "Title": "Under the Skin", "year": 2013, "genre": "Sci-Fi", "runtime": 108, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    278: "Get busy living, or get busy dying.",
    122: "I can't carry it for you, but I can carry you.",
    510: "But I tried, didn't I? Goddamnit, at least I did that.",
    497: "I'm tired, boss. Tired of bein' on the road, lonely as a sparrow in the rain.",
    627: "Choose Life. Choose a job. Choose a career. Choose a family.",
    264644: "When I was small, I only knew small things. But now I'm five, I know everything.",
    142: "I wish I knew how to quit you.",
    8055: "It doesn't matter what I feel. It doesn't matter what I think. The dead are still dead.",
    258480: "My angel. Flung out of space.",
    97370: "Do you live alone?"
};

// ✅ SENSITIVE TIMELINES (Crucial for High-Volume Timestamps Search)
export const SENSITIVE_TIMELINES = {
    // 1. The Shawshank Redemption
    278: { 
        scenes: [
            { start: "0:06:11", end: "0:06:16", type: "Sex", severity: "Moderate" },
            { start: "0:14:55", end: "0:15:17", type: "Partial Nudity", severity: "Moderate" }
        ] 
    },

    // 2. LOTR: The Return of the King
    122: { scenes: [] }, 
    
    // 3. One Flew Over the Cuckoo's Nest
    510: { 
        scenes: [
            { start: "1:03:25", end: "1:03:28", type: "Nudity (Woman)", severity: "Moderate" },
            { start: "1:55:24", end: "1:55:30", type: "Partial Nudity (Man)", severity: "Moderate" }
        ] 
    },

    // 4. The Green Mile
    497: { 
        scenes: [
            { start: "0:56:23", end: "0:56:26", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "1:07:27", end: "1:07:50", type: "Sexual Content (Moaning)", severity: "Moderate" },
            { start: "1:14:11", end: "1:14:19", type: "Nudity (Magazine)", severity: "Moderate" }
        ] 
    }, 
    
    // 5. Trainspotting
    627: { 
        scenes: [
            { start: "0:19:48", end: "0:20:16", type: "Sex & Nudity", severity: "High" },
            { start: "0:26:15", end: "0:27:50", type: "Sex & Nudity", severity: "High" }
        ] 
    },

    // 6. Room
    264644: { scenes: [] }, 

    // 7. Brokeback Mountain
    142: { 
        scenes: [
            { start: "0:28:07", end: "0:28:42", type: "Sex", severity: "Moderate" },
            { start: "0:50:15", end: "0:50:24", type: "Sex", severity: "Moderate" },
            { start: "0:58:00", end: "0:58:04", type: "Nudity (Woman)", severity: "High" },
            { start: "1:18:23", end: "1:19:09", type: "Sex & Nudity", severity: "High" }
        ] 
    },

    // 8. The Reader
    8055: { 
        scenes: [
            { start: "0:09:22", end: "0:09:32", type: "Nudity (Woman)", severity: "High" },
            { start: "0:13:21", end: "0:14:34", type: "Nudity (Man)", severity: "High" },
            { start: "0:14:52", end: "0:15:35", type: "Partial Nudity (Man & Woman)", severity: "High" },
            { start: "0:16:17", end: "0:16:34", type: "Sex & Nudity", severity: "High" },
            { start: "0:17:52", end: "0:18:52", type: "Sex & Nudity", severity: "High" },
            { start: "0:20:12", end: "0:21:25", type: "Nudity (Woman)", severity: "Moderate" },
            { start: "0:24:38", end: "0:24:48", type: "Nudity (Woman)", severity: "High" },
            { start: "0:25:50", end: "0:27:30", type: "Nudity (Woman)", severity: "High" },
            { start: "0:28:22", end: "0:28:35", type: "Nudity (Man & Woman)", severity: "Moderate" },
            { start: "0:28:47", end: "0:28:54", type: "Sex & Nudity", severity: "Moderate" },
            { start: "0:35:10", end: "0:35:22", type: "Nudity (Woman)", severity: "High" },
            { start: "0:43:10", end: "0:43:46", type: "Sex", severity: "Moderate" },
            { start: "1:18:30", end: "1:18:45", type: "Sex", severity: "Moderate" },
            { start: "1:19:26", end: "1:19:28", type: "Nudity (Man)", severity: "High" },
            { start: "1:19:32", end: "1:19:40", type: "Nudity (Woman)", severity: "High" }
        ] 
    },

    // 9. Carol
    258480: { 
        scenes: [
            { start: "1:15:52", end: "1:18:06", type: "Sex & Nudity (Women)", severity: "High" }
        ] 
    },

    // 10. Under the Skin
    97370: { 
        scenes: [
            { start: "0:07:07", end: "0:08:50", type: "Nudity (Woman)", severity: "High" },
            { start: "0:20:38", end: "0:20:50", type: "Nudity (Man)", severity: "High" },
            { start: "0:34:10", end: "0:35:10", type: "Suggestive Clothing (Undergarments)", severity: "Mild" },
            { start: "0:34:42", end: "0:37:02", type: "Nudity (Man)", severity: "High" },
            { start: "0:58:15", end: "0:58:35", type: "Suggestive Clothing (Undergarments)", severity: "Mild" },
            { start: "0:58:36", end: "0:59:50", type: "Nudity (Man & Woman)", severity: "High" },
            { start: "1:16:50", end: "1:18:15", type: "Nudity (Woman)", severity: "High" },
            { start: "1:24:51", end: "1:26:35", type: "Partial Nudity & Sex", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    278: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX500.jpg",
    122: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX500.jpg",
    510: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    497: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX500.jpg",
    627: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZWEtZjU1Ni00ODlhLTkyMTMtMDI0NmU2MmFhNmEzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    264644: "https://m.media-amazon.com/images/M/MV5BMjE4NzM0NDk4NV5BMl5BanBnXkFtZTgwNDQ0MzIzNzE@._V1_SX500.jpg",
    142: "https://m.media-amazon.com/images/M/MV5BMTY5Njc3NzI4OF5BMl5BanBnXkFtZTcwMzY3MTM1MQ@@._V1_SX500.jpg",
    8055: "https://m.media-amazon.com/images/M/MV5BMTcxNDExNzY4NF5BMl5BanBnXkFtZTcwNTI1OTYzMg@@._V1_SX500.jpg",
    258480: "https://m.media-amazon.com/images/M/MV5BMTM0MjA1MTQyOF5BMl5BanBnXkFtZTgwNTc4NDE4NjE@._V1_SX500.jpg",
    97370: "https://m.media-amazon.com/images/M/MV5BMTUwNjU3MjIwM15BMl5BanBnXkFtZTgwMTAxOTkyMTE@._V1_SX500.jpg"
};

// ✅ Custom metric for this collection
const createBookAdaptationData = (data) => ({
    literaryDepth: 90, 
    fidelityScore: 85,
    complexityLevel: "HIGH",
    dominantColor: "#1e293b", // Slate Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. The Shawshank Redemption
    278: createBookAdaptationData({ 
        literaryDepth: 95, fidelityScore: 92, complexityLevel: "MASTERPIECE", 
        dominantColor: "#020617", rating: 9.3, criticsScore: 91, audienceScore: 98, director: "Frank Darabont", 
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"], boxOffice: "$28.8 million", budget: "$25 million", 
        dna: { "Drama": 75, "Crime": 25 },
        scenes: [
            { time: 10, intensity: 18, label: "Sentencing", color: "#1e293b" },
            { time: 35, intensity: 45, label: "The Tar Roof Beers", color: "#f59e0b" },
            { time: 65, intensity: 62, label: "Mozart Over the Speakers", color: "#3b82f6" },
            { time: 105, intensity: 84, label: "Brooks Was Here", color: "#475569" },
            { time: 125, intensity: 96, label: "The Escape Reveal", color: "#1e4ed8" }, // PRIMARY PEAK
            { time: 138, intensity: 55, label: "Zihuatanejo", color: "#0ea5e9" } 
        ],
        synopsis: "Based on Stephen King's novella. A banker convicted of double murder spends decades in a brutal prison, retaining his humanity through quiet resilience.",
        themes: ["Institutionalization", "Hope vs. Despair", "Time and Patience"]
    }),

    // 2. The Lord of the Rings: The Return of the King
    122: createBookAdaptationData({ 
        literaryDepth: 100, fidelityScore: 88, complexityLevel: "EPIC", 
        dominantColor: "#b45309", rating: 9.0, criticsScore: 93, audienceScore: 86, director: "Peter Jackson", 
        cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"], boxOffice: "$1.156 billion", budget: "$94 million", 
        dna: { "Fantasy": 50, "Adventure": 30, "Action": 20 },
        scenes: [
            { time: 15, intensity: 22, label: "Smeagol's Origin", color: "#166534" },
            { time: 45, intensity: 65, label: "Lighting the Beacons", color: "#f59e0b" },
            { time: 110, intensity: 88, label: "Charge of the Rohirrim", color: "#d97706" },
            { time: 175, intensity: 98, label: "Mount Doom", color: "#dc2626" }, // PRIMARY PEAK
            { time: 195, intensity: 65, label: "The Grey Havens", color: "#94a3b8" } 
        ],
        synopsis: "The staggering conclusion to Tolkien's fantasy masterwork. Jackson maintains immense mythological weight while delivering unparalleled blockbuster spectacle.",
        themes: ["Burden of Power", "Fellowship", "The End of an Age"]
    }),

    // 3. One Flew Over the Cuckoo's Nest
    510: createBookAdaptationData({ 
        literaryDepth: 92, fidelityScore: 75, complexityLevel: "ICONIC", 
        dominantColor: "#0f766e", rating: 8.7, criticsScore: 93, audienceScore: 96, director: "Miloš Forman", 
        cast: ["Jack Nicholson", "Louise Fletcher", "Will Sampson"], boxOffice: "$163.3 million", budget: "$4.4 million", 
        dna: { "Drama": 90, "Comedy": 10 },
        scenes: [
            { time: 10, intensity: 20, label: "Arrival at the Ward", color: "#0f766e" },
            { time: 30, intensity: 48, label: "World Series Vote", color: "#3b82f6" },
            { time: 60, intensity: 60, label: "The Fishing Trip", color: "#0ea5e9" },
            { time: 115, intensity: 89, label: "Billy's Tragedy", color: "#dc2626" }, // PRIMARY PEAK
            { time: 125, intensity: 78, label: "The Chief's Escape", color: "#134e4a" } 
        ],
        synopsis: "Adapted from Ken Kesey's novel. A rebellious criminal wages a psychological war against the tyrannical Nurse Ratched in a mental institution.",
        themes: ["Anti-Authoritarianism", "Sanity vs. Conformity", "Institutional Control"]
    }),

    // 4. The Green Mile
    497: createBookAdaptationData({ 
        literaryDepth: 88, fidelityScore: 95, complexityLevel: "EMOTIONAL", 
        dominantColor: "#142532", rating: 8.6, criticsScore: 79, audienceScore: 93, director: "Frank Darabont", 
        cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"], boxOffice: "$286.8 million", budget: "$60 million", 
        dna: { "Drama": 50, "Fantasy": 30, "Crime": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "John Coffey Arrives", color: "#1e293b" },
            { time: 40, intensity: 55, label: "Healing the Infection", color: "#facc15" },
            { time: 110, intensity: 82, label: "Delacroix's Execution", color: "#991b1b" },
            { time: 175, intensity: 92, label: "John Coffey's End", color: "#dc2626" }, // PRIMARY PEAK
            { time: 185, intensity: 68, label: "The Long Mile", color: "#0f172a" } 
        ],
        synopsis: "Death row guards discover that one of their inmates, a gentle giant accused of murder, possesses miraculous healing powers.",
        themes: ["Miracles in the Dark", "Justice and Guilt", "Sacrifice"]
    }),

    // 5. Trainspotting
    627: createBookAdaptationData({ 
        literaryDepth: 85, fidelityScore: 80, complexityLevel: "KINETIC", 
        dominantColor: "#ca8a04", rating: 8.1, criticsScore: 90, audienceScore: 93, director: "Danny Boyle", 
        cast: ["Ewan McGregor", "Ewen Bremner", "Jonny Lee Miller"], boxOffice: "$72 million", budget: "$2 million", 
        dna: { "Drama": 50, "Comedy": 30, "Crime": 20 },
        scenes: [
            { time: 5, intensity: 45, label: "Choose Life", color: "#ca8a04" },
            { time: 25, intensity: 65, label: "The Worst Toilet", color: "#b45309" },
            { time: 55, intensity: 86, label: "The Baby on the Ceiling", color: "#dc2626" }, // PRIMARY PEAK
            { time: 88, intensity: 72, label: "The Heist", color: "#1e293b" },
            { time: 94, intensity: 62, label: "The Betrayal", color: "#ca8a04" } 
        ],
        synopsis: "Irvine Welsh's novel transformed into a kinetic plunge into Edinburgh's heroin subculture. It presents both the euphoric highs and soul-crushing lows.",
        themes: ["Addiction", "Youth Disillusionment", "Betrayal"]
    }),

    // 6. Room
    264644: createBookAdaptationData({ 
        literaryDepth: 94, fidelityScore: 96, complexityLevel: "PSYCHOLOGICAL", 
        dominantColor: "#1e3a8a", rating: 8.1, criticsScore: 93, audienceScore: 93, director: "Lenny Abrahamson", 
        cast: ["Brie Larson", "Jacob Tremblay", "Joan Allen"], boxOffice: "$35.4 million", budget: "$13 million", 
        dna: { "Drama": 70, "Thriller": 30 },
        scenes: [
            { time: 10, intensity: 25, label: "Life in Room", color: "#64748b" },
            { time: 45, intensity: 70, label: "The Plan", color: "#1e3a8a" },
            { time: 55, intensity: 88, label: "The Truck Escape", color: "#dc2626" }, // PRIMARY PEAK
            { time: 85, intensity: 65, label: "Agoraphobia", color: "#94a3b8" },
            { time: 110, intensity: 60, label: "Goodbye Room", color: "#3b82f6" } 
        ],
        synopsis: "A woman and her son held captive in a tiny shed must navigate a claustrophobic survival before facing the terrifying reality of freedom.",
        themes: ["Trauma and Healing", "Maternal Bond", "Perception of the World"]
    }),

    // 7. Brokeback Mountain
    142: createBookAdaptationData({ 
        literaryDepth: 98, fidelityScore: 90, complexityLevel: "TRAGIC", 
        dominantColor: "#047857", rating: 7.5, criticsScore: 87, audienceScore: 82, director: "Ang Lee", 
        cast: ["Heath Ledger", "Jake Gyllenhaal", "Michelle Williams"], boxOffice: "$178 million", budget: "$14 million", 
        dna: { "Drama": 60, "Romance": 40 },
        scenes: [
            { time: 15, intensity: 18, label: "Summer of '63", color: "#065f46" },
            { time: 60, intensity: 68, label: "The Reunion", color: "#047857" },
            { time: 115, intensity: 90, label: "I Wish I Knew How to Quit You", color: "#dc2626" }, // PRIMARY PEAK
            { time: 128, intensity: 82, label: "The Bloodied Shirts", color: "#991b1b" } 
        ],
        synopsis: "Ang Lee turns a localized tale of two cowboys hiding their romance into a sweeping, universal tragedy of repressed love.",
        themes: ["Repression", "Forbidden Love", "The Illusion of the American West"]
    }),

    // 8. The Reader
    8055: createBookAdaptationData({ 
        literaryDepth: 88, fidelityScore: 85, complexityLevel: "MORAL", 
        dominantColor: "#7f1d1d", rating: 7.6, criticsScore: 63, audienceScore: 73, director: "Stephen Daldry", 
        cast: ["Kate Winslet", "Ralph Fiennes", "David Kross"], boxOffice: "$108.9 million", budget: "$32 million", 
        dna: { "Drama": 50, "Romance": 30, "History": 20 },
        scenes: [
            { time: 12, intensity: 20, label: "The Encounter", color: "#450a0a" },
            { time: 45, intensity: 48, label: "Hanna Disappears", color: "#1e293b" },
            { time: 75, intensity: 68, label: "The War Crimes Trial", color: "#dc2626" }, // PRIMARY PEAK
            { time: 95, intensity: 55, label: "Illiteracy Reveal", color: "#7f1d1d" },
            { time: 115, intensity: 60, label: "The Final Tape", color: "#450a0a" } 
        ],
        synopsis: "A young German boy's affair with an older woman leads to the discovery that she was an SS guard. A meditation on generational guilt.",
        themes: ["Post-War Guilt", "Secret Shame", "Moral Ambiguity"]
    }),

    // 9. Carol
    258480: createBookAdaptationData({ 
        literaryDepth: 95, fidelityScore: 88, complexityLevel: "ELEGANT", 
        dominantColor: "#be123c", rating: 7.2, criticsScore: 94, audienceScore: 74, director: "Todd Haynes", 
        cast: ["Cate Blanchett", "Rooney Mara", "Sarah Paulson"], boxOffice: "$40.3 million", budget: "$12 million", 
        dna: { "Romance": 60, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 15, label: "The First Glance", color: "#be123c" },
            { time: 50, intensity: 45, label: "The Road Trip", color: "#047857" },
            { time: 82, intensity: 66, label: "The Waterloo Hotel", color: "#dc2626" }, // PRIMARY PEAK
            { time: 105, intensity: 58, label: "The Custody Hearing", color: "#9f1239" },
            { time: 115, intensity: 50, label: "The Oak Room", color: "#4c0519" } 
        ],
        synopsis: "A young photographer develops an intense relationship with a wealthy woman in 1950s New York. A masterclass in longing and subtext.",
        themes: ["Subtext and Glances", "Class Division", "Authenticity"]
    }),

    // 10. Under the Skin
    97370: createBookAdaptationData({ 
        literaryDepth: 80, fidelityScore: 40, complexityLevel: "AVANT-GARDE", 
        dominantColor: "#000000", rating: 6.3, criticsScore: 84, audienceScore: 55, director: "Jonathan Glazer", 
        cast: ["Scarlett Johansson", "Jeremy McWilliams", "Lynsey Taylor Mackay"], boxOffice: "$5.8 million", budget: "$13 million", 
        dna: { "Science Fiction": 50, "Horror": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "The Van", color: "#1e293b" },
            { time: 30, intensity: 62, label: "The Liquid Void", color: "#0f172a" },
            { time: 55, intensity: 75, label: "The Beach", color: "#334155" },
            { time: 100, intensity: 84, label: "The Forest Reveal", color: "#dc2626" }, // PRIMARY PEAK
            { time: 105, intensity: 72, label: "Final Smoke", color: "#000000" } 
        ],
        synopsis: "An alien masquerades as a human female to harvest men in Scotland, slowly catching a fatal strain of human empathy.",
        themes: ["Alienation", "The Male Gaze", "Humanity and Empathy"]
    })
};

// 🎬 FAQS FOR THE BOOK ADAPTATION COLLECTION
export const BOOK_ADAPTATION_FAQS = {
    'The Shawshank Redemption': [
        { question: "Why did Stephen King sell the rights so cheaply?", answer: "Stephen King famously sold the rights to his novella 'Rita Hayworth and Shawshank Redemption' to Frank Darabont for just $1. King had a policy of granting 'dollar baby' deals to aspiring filmmakers he believed in, and Darabont had previously impressed him with a short film." },
        { question: "What is the significance of the posters in Andy's cell?", answer: "The posters (Rita Hayworth, Marilyn Monroe, Raquel Welch) visually track the passage of decades in prison. Thematically, they represent Andy's desire for a normal, beautiful life on the outside, while practically serving to hide his escape tunnel." },
        { question: "Did the movie flop at the box office?", answer: "Yes. Upon its initial theatrical release, it struggled to make back its $25 million budget, largely due to competition from Forrest Gump and Pulp Fiction, and its clunky title. It only found its legendary status later through VHS rentals and constant TNT television broadcasts." },
        { question: "How does the film differ from the novella?", answer: "The film combines several wardens from the book into the single, corrupt character of Warden Norton. Additionally, Red (Morgan Freeman) is described as an older Irish man in the book—a detail the film winks at when Red jokes, 'Maybe it's because I'm Irish.'" }
    ],
    'The Lord of the Rings: The Return of the King': [
        { question: "How many endings does the film have?", answer: "The film is famous for having multiple 'fade to black' moments, giving the impression of several endings. This was a deliberate choice by Peter Jackson to honor the immense emotional weight of the trilogy, properly concluding the arcs for Aragorn, the Hobbits, and Frodo's ultimate departure." },
        { question: "Why was Christopher Lee (Saruman) cut from the theatrical release?", answer: "Peter Jackson cut Saruman's death scene at Isengard from the theatrical version for pacing reasons, feeling the movie needed to get to Gondor faster. Christopher Lee was highly offended, but the seven-minute sequence was restored in the Extended Edition." },
        { question: "Did the actors get matching tattoos?", answer: "Yes. Eight of the original nine actors who played the Fellowship got matching tattoos of the Elvish word for 'nine' to commemorate their years-long journey filming the trilogy in New Zealand." },
        { question: "Why does Frodo have to leave Middle-earth?", answer: "Frodo's spiritual and physical wounds (from the Nazgûl blade, Shelob, and the psychological toll of the Ring) cannot be fully healed in the mortal world. He sails to the Undying Lands to find peace, serving as a metaphor for soldiers returning with PTSD." }
    ],
    'One Flew Over the Cuckoo\'s Nest': [
        { question: "Why did the author, Ken Kesey, hate the movie?", answer: "Kesey hated that the film abandoned the perspective of Chief Bromden, who narrates the novel through a schizophrenic haze of hallucinations (the 'Combine'). He refused to watch the movie, claiming it ruined his story." },
        { question: "Were the background actors real patients?", answer: "Many of the extras in the background of the ward scenes were actual patients at the Oregon State Hospital where the movie was filmed. The hospital superintendent, Dr. Dean Brooks, even played Dr. Spivey in the film." },
        { question: "How did Jack Nicholson approach the role?", answer: "Nicholson improvised heavily, keeping the other actors off-balance to create genuine reactions. He pushed for McMurphy to be seen not as a hero, but as a deeply flawed, anti-authoritarian force of nature who unintentionally gives the other men their voices back." },
        { question: "What does the ending signify?", answer: "When Chief Bromden suffocates the lobotomized McMurphy, it is an act of profound mercy. By lifting the heavy hydrotherapy console (which McMurphy failed to lift earlier) and breaking out, the Chief proves that McMurphy's rebellious spirit succeeded in freeing him." }
    ],
    'The Green Mile': [
        { question: "Why are John Coffey's initials J.C.?", answer: "Stephen King deliberately gave John Coffey the initials J.C. to draw clear parallels to Jesus Christ. Coffey is portrayed as a gentle, miraculous healer who absorbs the sins and pain of the world, ultimately being executed by a flawed justice system." },
        { question: "How did they make Michael Clarke Duncan look so giant?", answer: "While Duncan was a massive man (6'5\"), the filmmakers used forced perspective, smaller props (like a tiny bed), and clever camera angles to make him appear much larger than co-stars like David Morse (who is actually 6'4\")." },
        { question: "Is Mr. Jingles played by a real mouse?", answer: "Yes, though it took around 15 to 30 different trained mice to perform the various tricks required for Mr. Jingles. Minor CGI was used for the more impossible stunts and for the tragic scene involving Percy." },
        { question: "Was it originally published as one book?", answer: "No, Stephen King originally wrote and published 'The Green Mile' as a six-part serialized novel, reminiscent of Charles Dickens' publication style. The film maintains this episodic, sprawling narrative structure." }
    ],
    'Trainspotting': [
        { question: "How did they film the 'Worst Toilet in Scotland' scene?", answer: "The famously repulsive toilet sequence was actually a practical effect. The feces everywhere was made of chocolate sauce and cocoa powder. When Ewan McGregor dives into the toilet, he slid down a custom-built half-pipe hidden beneath the bowl." },
        { question: "Does the author have a cameo?", answer: "Yes, Irvine Welsh, the author of the original novel, plays Mikey Forrester, the drug dealer who supplies Renton with the opium suppositories early in the film." },
        { question: "What does the title 'Trainspotting' mean?", answer: "In the book, Renton and Begbie meet a homeless man at an abandoned railway station who asks if they are 'trainspotting' (a mundane British hobby of watching trains). It symbolizes engaging in a pointless, obsessive activity to pass the time—much like heroin addiction." },
        { question: "Why is the ending considered a triumph of editing?", answer: "The climax flawlessly weaves together Renton's betrayal of his friends with the driving beat of 'Born Slippy' by Underworld. His final monologue to the camera breaks the fourth wall, cynically embracing the capitalist 'Choose Life' mantra he previously mocked." }
    ],
    'Room': [
        { question: "How was the small shed filmed?", answer: "Instead of building a large set with removable walls, the filmmakers built a fully enclosed 10x10 foot shed inside a studio. The camera crew squeezed inside to maintain the claustrophobic authenticity and capture the child's true perspective." },
        { question: "Why is the film split in half?", answer: "The first half focuses on the physical escape from captivity, while the second half deals with the psychological aftermath. The film shows that escaping the physical 'Room' is only the beginning; adapting to a chaotic, overwhelming world is the true struggle." },
        { question: "Did the actors stay isolated before filming?", answer: "To build trust and create an authentic bond, Brie Larson and Jacob Tremblay spent weeks together inside the 'Room' set before filming began, doing crafts and playing games." },
        { question: "Who is the story told through?", answer: "Both the book and the film are strictly told from the perspective of five-year-old Jack. This brilliant narrative choice filters the horror of their captivity through the innocent, magical realism of a child who doesn't know any other world exists." }
    ],
    'Brokeback Mountain': [
        { question: "Who wrote the original story?", answer: "The film is based on a celebrated short story by Pulitzer Prize-winning author Annie Proulx, originally published in The New Yorker in 1997. The screenplay was masterfully adapted by Larry McMurtry and Diana Ossana." },
        { question: "What do the shirts at the end symbolize?", answer: "In Jack's closet, Ennis finds his own shirt tucked inside Jack's shirt, symbolizing Jack's protective love. At the end of the film, Ennis reverses them—putting his shirt on the outside—as a tragic, delayed gesture of his willingness to finally embrace and protect Jack's memory." },
        { question: "Why did the film face controversy?", answer: "Released in 2005, the film was a groundbreaking mainstream romance between two men. It faced significant cultural backlash from conservative groups, but its overwhelming critical acclaim and box office success permanently changed the landscape of LGBTQ+ cinema." },
        { question: "Did it win Best Picture?", answer: "In one of the most controversial Oscar upsets in history, Brokeback Mountain lost Best Picture to Crash. However, Ang Lee won Best Director, and the film won for Best Adapted Screenplay and Best Original Score." }
    ],
    'The Reader': [
        { question: "What is the central moral dilemma of the story?", answer: "The film forces the audience, alongside young Michael, to confront a horrifying truth: a woman he deeply loved and who showed him tenderness was also an SS guard complicit in the deaths of hundreds of Jewish prisoners. It asks if you can reconcile the monster with the human." },
        { question: "Why does Hanna keep her illiteracy a secret?", answer: "Hanna's shame over being illiterate is so profound that she willingly accepts a life sentence in prison rather than admit she couldn't read the report she was accused of writing. Her illiteracy also fundamentally re-contextualizes why she made Michael read to her." },
        { question: "Who was originally cast as Hanna?", answer: "Kate Winslet was the first choice, but scheduling conflicts with Revolutionary Road caused the role to go to Nicole Kidman. When Kidman became pregnant, Winslet stepped back in and ultimately won the Academy Award for Best Actress." },
        { question: "How does the aging makeup work?", answer: "Kate Winslet underwent hours of complex, subtle prosthetic makeup to age her from her 30s into her late 60s for the prison sequences. The physical decay of her character mirrors the heavy weight of her past." }
    ],
    'Carol': [
        { question: "What book is Carol based on?", answer: "It is based on 'The Price of Salt' by Patricia Highsmith (author of The Talented Mr. Ripley). It was published in 1952 under a pseudonym because it was one of the very few lesbian novels of the era that didn't end in suicide or moral tragedy." },
        { question: "Why is the film shot on 16mm film?", answer: "Director Todd Haynes and cinematographer Ed Lachman shot on Super 16mm to capture the grainy, muted textures of 1950s photography (like the work of Vivian Maier). The visual style reflects the suppressed emotions of the characters." },
        { question: "What is the meaning of the final scene?", answer: "At the Oak Room, Therese finally walks toward Carol on her own terms, no longer just a naive follower. When Carol sees her, her smile signifies mutual respect and the beginning of a true, equal partnership, delivering the rare happy ending from the book." },
        { question: "How does the film handle dialogue?", answer: "Because speaking openly about their sexuality was dangerous in the 1950s, the film relies heavily on subtext, lingering glances, and slight touches. What isn't said is far more important than the actual dialogue." }
    ],
    'Under the Skin': [
        { question: "How does the film differ from the book?", answer: "Michel Faber's novel provides extensive backstory: the alien is named Isserley, she is corporately employed to harvest human meat for her home planet, and her internal thoughts are detailed. The film strips all of this away, opting for a pure, dialogue-free sensory nightmare." },
        { question: "Were the men in the van actors?", answer: "Many of the men Scarlett Johansson's character picks up were not actors. Director Jonathan Glazer hid cameras in the van and Johansson (in disguise) approached real men on the streets of Glasgow. They were informed and signed releases afterward." },
        { question: "What does the black liquid room represent?", answer: "The terrifying, featureless black void where the men are consumed represents the alien's total detachment from human empathy. It strips away human reality, leaving only the clinical, horrific extraction of their physical bodies." },
        { question: "Why does she look in the mirror?", answer: "As the film progresses, the alien becomes fascinated with her human 'skin'. Looking in the mirror is the moment she starts experiencing human identity and vanity. This newfound empathy ultimately prevents her from doing her job and leads to her tragic demise." }
    ]
};

// 🔥 THE KEYWORD BRIDGE & SCHEMA GENERATOR (Unrestricted Version)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sexual content') || lowerType.includes('sexual violence')) types.add('sexual content');
        else if (lowerType.match(/\bsex\b/)) types.add('sex');
        else if (lowerType.includes('explicit')) types.add('explicit content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
        if (lowerType.includes('assault') || lowerType.includes('predation')) types.add('disturbing content');
    });
    return Array.from(types);
};

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

// 🔥 HELPER: Calculates total skip time in minutes and seconds
export const calculateSkipStats = (scenes) => {
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
export const getHighestSeverityInfo = (scenes) => {
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
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini') || t.includes('assault') || t.includes('predation'); 
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

    const staticFaqs = BOOK_ADAPTATION_FAQS[movie.Title] ? [...BOOK_ADAPTATION_FAQS[movie.Title]] : [];
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
    const staticFaqs = BOOK_ADAPTATION_FAQS[movieTitle] ? [...BOOK_ADAPTATION_FAQS[movieTitle]] : [];
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
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini') || t.includes('assault') || t.includes('predation');
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
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:\n\n${uiDetailedList}\n\nManually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
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