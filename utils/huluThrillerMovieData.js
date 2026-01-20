// utils/huluThrillerMovieData.js - HULU THRILLER COLLECTION DATA
// Ranked by Suspense, Tension, and Psychological Impact
// CALIBRATION: 0-20 (Slow Burn) | 20-40 (Unease) | 40-60 (Gripping) | 60-75 (Intense) | 75-85 (Nail-Biting) | 85-95 (Heart-Pounding) | 95-100 (Masterpiece of Tension)

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 949, "imdbID": "tt0113277", "Title": "Heat", "year": 1995, "genre": "Crime", "runtime": 170, "rank": 1 },
    { "tmdbId": 44214, "imdbID": "tt0947798", "Title": "Black Swan", "year": 2010, "genre": "Psychological Thriller", "runtime": 108, "rank": 2 },
    { "tmdbId": 915935, "imdbID": "tt17009710", "Title": "Anatomy of a Fall", "year": 2023, "genre": "Legal Thriller", "runtime": 151, "rank": 3 },
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi Thriller", "runtime": 113, "rank": 4 },
    { "tmdbId": 7972, "imdbID": "tt0292963", "Title": "Before the Devil Knows You're Dead", "year": 2007, "genre": "Crime Drama", "runtime": 117, "rank": 5 },
    { "tmdbId": 1491, "imdbID": "tt0443543", "Title": "The Illusionist", "year": 2006, "genre": "Mystery", "runtime": 110, "rank": 6 },
    { "tmdbId": 787752, "imdbID": "tt13403046", "Title": "Fresh", "year": 2022, "genre": "Horror Thriller", "runtime": 114, "rank": 7 },
    { "tmdbId": 156022, "imdbID": "tt0455944", "Title": "The Equalizer", "year": 2014, "genre": "Action Thriller", "runtime": 132, "rank": 8 },
    { "tmdbId":1008048, "imdbID": "tt20446690", "Title": "How to Blow Up a Pipeline", "year": 2023, "genre": "Eco-Thriller", "runtime": 104, "rank": 9 },
    { "tmdbId": 5955, "imdbID": "tt0237572", "Title": "The Pledge", "year": 2001, "genre": "Mystery", "runtime": 124, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Thriller Edition)
export const SENSITIVE_TIMELINES = {
    // 1. Heat
    949: { 
        scenes: [
            { start: "1:45:00", end: "1:55:00", type: "Intense Gunfight", severity: "High" },
            { start: "0:10:00", end: "0:15:00", type: "Brutal Violence", severity: "Moderate" }
        ] 
    },
    // 2. Black Swan
    44214: { 
        scenes: [
            { start: "0:45:00", end: "0:48:00", type: "Body Horror (Skin Peeling)", severity: "High" },
            { start: "1:35:00", end: "1:40:00", type: "Stabbing/Self-Harm", severity: "Extreme" }
        ] 
    }, 
    // 3. Anatomy of a Fall
    915935: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Visual of Corpse", severity: "Moderate" },
            { start: "1:50:00", end: "2:00:00", type: "Intense Domestic Argument", severity: "High" }
        ] 
    },
    // 4. Donnie Darko
    141: { 
        scenes: [
            { start: "1:40:00", end: "1:45:00", type: "Plane Crash aftermath", severity: "Moderate" }
        ] 
    },
    // 5. Before the Devil Knows You're Dead
    7972: { 
        scenes: [
            { start: "0:00:00", end: "0:03:00", type: "Graphic Intimacy", severity: "High" },
            { start: "0:20:00", end: "0:25:00", type: "Violent Robbery", severity: "High" }
        ] 
    },
    // 6. The Illusionist
    1491: { scenes: [] },
    // 7. Fresh
    787752: { 
        scenes: [
            { start: "0:35:00", end: "0:40:00", type: "Surgical Gore/Cannibalism", severity: "Extreme" }
        ] 
    },
    // 8. The Equalizer
    156022: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Brutal Combat", severity: "High" }
        ] 
    },
    // 9. How to Blow Up a Pipeline
    1041513: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Explosive Tension", severity: "Moderate" }
        ] 
    },
    // 10. The Pledge
    11232: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Child Murder Scene (Implied)", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    949: "https://image.tmdb.org/t/p/w500/zMyfPUelumio3tiDKPffaUpsQTD.jpg",
    44214: "https://image.tmdb.org/t/p/w500/ppL151Z9i305i5qf3t60V6u2L6h.jpg",
    915935: "https://image.tmdb.org/t/p/w500/k1k6Vd6fX1J17K16e53j.jpg",
    141: "https://image.tmdb.org/t/p/w500/fhQoQoeNR72JXYgyqgzTzJluSF1.jpg",
    7972: "https://image.tmdb.org/t/p/w500/3m1.jpg",
    1491: "https://image.tmdb.org/t/p/w500/w1.jpg",
    787752: "https://image.tmdb.org/t/p/w500/t.jpg",
    156022: "https://image.tmdb.org/t/p/w500/2.jpg",
    1041513: "https://image.tmdb.org/t/p/w500/8.jpg",
    11232: "https://image.tmdb.org/t/p/w500/9.jpg"
};

// ✅ HELPER: Single Metric "Suspense Score"
const createMovieData = (data) => ({
    suspenseIntensity: 85,          // Default
    complexityLevel: "HIGH",
    dominantColor: "#b91c1c",   // Thriller Red
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Heat (HEIST MASTERPIECE)
    // Peak: 98 (The Shootout).
    949: createMovieData({ 
        suspenseIntensity: 96, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#1e293b", rating: 8.3, criticsScore: 88, audienceScore: 94, director: "Michael Mann", 
        cast: ["Al Pacino", "Robert De Niro", "Val Kilmer"], boxOffice: "$187 million", budget: "$60 million", 
        dna: { "Crime": 50, "Action": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "The Setup", color: "#334155" },
            { time: 60, intensity: 50, label: "Coffee Shop", color: "#475569" },
            { time: 105, intensity: 98, label: "The Shootout", color: "#ef4444" }, // Action Peak
            { time: 140, intensity: 70, label: "The Betrayal", color: "#94a3b8" },
            { time: 165, intensity: 90, label: "Airport Finale", color: "#b91c1c" } 
        ],
        synopsis: "The gold standard for heist cinema. Between the tactical realism of the downtown LA shootout and the high-stakes cat-and-mouse game between Pacino and De Niro, it remains untouchable. A masterpiece of scale and sound design.",
        themes: ["Duality", "Professionalism", "Obsession"]
    }),

    // 2. Black Swan (PSYCHOLOGICAL HORROR)
    // Peak: 95 (Transformation).
    44214: createMovieData({ 
        suspenseIntensity: 94, 
        complexityLevel: "PSYCHOLOGICAL", 
        dominantColor: "#000000", rating: 8.0, criticsScore: 85, audienceScore: 84, director: "Darren Aronofsky", 
        cast: ["Natalie Portman", "Mila Kunis"], boxOffice: "$329 million", budget: "$13 million", 
        dna: { "Psychological": 60, "Horror": 40 },
        scenes: [
            { time: 20, intensity: 30, label: "The Casting", color: "#pink-200" },
            { time: 50, intensity: 60, label: "The Club", color: "#be123c" },
            { time: 80, intensity: 85, label: "Transformation", color: "#9f1239" },
            { time: 95, intensity: 90, label: "The Stab", color: "#881337" },
            { time: 105, intensity: 95, label: "Perfect", color: "#000000" } // Climax
        ],
        synopsis: "A ballerina slowly loses her grip on reality as she competes for the lead in Swan Lake. Darren Aronofsky’s psychological nightmare is visceral and haunting—a descent into madness that feels like a body-horror fever dream.",
        themes: ["Perfectionism", "Identity", "Paranoia"]
    }),

    // 3. Anatomy of a Fall (LEGAL TENSION)
    // Peak: 88 (The Argument Recording).
    915935: createMovieData({ 
        suspenseIntensity: 88, 
        complexityLevel: "CEREBRAL", 
        dominantColor: "#3b82f6", rating: 7.8, criticsScore: 96, audienceScore: 90, director: "Justine Triet", 
        cast: ["Sandra Hüller", "Swann Arlaud"], boxOffice: "$29 million", budget: "$6.7 million", 
        dna: { "Legal": 50, "Mystery": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 40, label: "The Fall", color: "#93c5fd" },
            { time: 60, intensity: 65, label: "The Investigation", color: "#60a5fa" },
            { time: 100, intensity: 88, label: "The Recording", color: "#2563eb" }, // Emotional Peak
            { time: 130, intensity: 75, label: "The Verdict", color: "#1d4ed8" }
        ],
        synopsis: "A man dies in the snow outside his chalet. Was it suicide, an accident, or did his wife do it? This Palme d'Or winner is a cold, calculated dissection of a relationship that plays like a high-tension psychological thriller.",
        themes: ["Truth", "Marriage", "Ambiguity"]
    }),

    // 4. Donnie Darko (MIND-BENDING)
    // Peak: 85 (The End of the World).
    141: createMovieData({ 
        suspenseIntensity: 85, 
        complexityLevel: "SURREAL", 
        dominantColor: "#4c1d95", rating: 8.0, criticsScore: 87, audienceScore: 80, director: "Richard Kelly", 
        cast: ["Jake Gyllenhaal", "Jena Malone"], boxOffice: "$7.5 million", budget: "$4.5 million", 
        dna: { "Sci-Fi": 40, "Psychological": 40, "Teen": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "Wake Up", color: "#5b21b6" },
            { time: 50, intensity: 60, label: "Frank", color: "#6d28d9" },
            { time: 90, intensity: 75, label: "Cellar Door", color: "#7c3aed" },
            { time: 110, intensity: 85, label: "Mad World", color: "#4c1d95" } // Narrative Peak
        ],
        synopsis: "A troubled teenager is plagued by visions of a large, demonic rabbit that predicts the end of the world. The ultimate 'mind-bending' thriller that demands a second viewing.",
        themes: ["Time Travel", "Fate", "Mental Health"]
    }),

    // 5. Before the Devil Knows You're Dead (NON-LINEAR TRAGEDY)
    // Peak: 90 (The Robbery Gone Wrong).
    7972: createMovieData({ 
        suspenseIntensity: 89, 
        complexityLevel: "GRITTY", 
        dominantColor: "#9a3412", rating: 7.3, criticsScore: 88, audienceScore: 79, director: "Sidney Lumet", 
        cast: ["Philip Seymour Hoffman", "Ethan Hawke"], boxOffice: "$25 million", budget: "$18 million", 
        dna: { "Crime": 60, "Drama": 40 },
        scenes: [
            { time: 15, intensity: 50, label: "The Plan", color: "#c2410c" },
            { time: 45, intensity: 90, label: "The Robbery", color: "#ea580c" }, // Shock Peak
            { time: 80, intensity: 75, label: "The Aftermath", color: "#fb923c" },
            { time: 110, intensity: 85, label: "The Hospital", color: "#7c2d12" }
        ],
        synopsis: "Two desperate brothers plot the 'perfect' robbery of their parents' jewelry store. Sidney Lumet’s final film is a masterclass in tension, where the non-linear structure makes the inevitable tragedy feel like a slow-motion car crash.",
        themes: ["Greed", "Family", "Consequences"]
    }),

    // 6. The Illusionist (MYSTERY/PERIOD)
    // Peak: 80 (The Trick).
    1491: createMovieData({ 
        suspenseIntensity: 78, 
        complexityLevel: "ELEGANT", 
        dominantColor: "#f59e0b", rating: 7.6, criticsScore: 74, audienceScore: 83, director: "Neil Burger", 
        cast: ["Edward Norton", "Jessica Biel"], boxOffice: "$87 million", budget: "$16 million", 
        dna: { "Mystery": 60, "Romance": 40 },
        scenes: [
            { time: 20, intensity: 30, label: "The Locket", color: "#fbbf24" },
            { time: 60, intensity: 60, label: "The Prince", color: "#d97706" },
            { time: 90, intensity: 75, label: "The Arrest", color: "#b45309" },
            { time: 105, intensity: 80, label: "The Orange Tree", color: "#f59e0b" } // Twist Peak
        ],
        synopsis: "A magician in 1900s Vienna uses his craft to reclaim his lost love from a corrupt Prince. Sophisticated, lush, and clever—it relies on atmosphere and a brilliant final twist rather than cheap scares.",
        themes: ["Magic", "Class", "Deception"]
    }),

    // 7. Fresh (HORROR THRILLER)
    // Peak: 92 (The Dinner).
    787752: createMovieData({ 
        suspenseIntensity: 85, 
        complexityLevel: "TWISTED", 
        dominantColor: "#be123c", rating: 6.7, criticsScore: 81, audienceScore: 80, director: "Mimi Cave", 
        cast: ["Daisy Edgar-Jones", "Sebastian Stan"], boxOffice: "Streaming", budget: "N/A", 
        dna: { "Horror": 50, "Thriller": 50 },
        scenes: [
            { time: 15, intensity: 20, label: "The Date", color: "#fbcfe8" },
            { time: 35, intensity: 80, label: "The Twist", color: "#db2777" }, // Tonal Shift
            { time: 70, intensity: 85, label: "The Surgery", color: "#be123c" },
            { time: 100, intensity: 92, label: "The Escape", color: "#881337" }
        ],
        synopsis: "Modern dating is a horror show—literally. Sebastian Stan is the 'perfect' guy with a very specific appetite. A bold tonal shift that starts as a rom-com and pivots into a grueling survival thriller.",
        themes: ["Dating", "Survival", "Commoditization"]
    }),

    // 8. The Equalizer (ACTION THRILLER)
    // Peak: 88 (Home Depot Climax).
    156022: createMovieData({ 
        suspenseIntensity: 82, 
        complexityLevel: "VISCERAL", 
        dominantColor: "#0f172a", rating: 7.2, criticsScore: 60, audienceScore: 76, director: "Antoine Fuqua", 
        cast: ["Denzel Washington", "Chloë Grace Moretz"], boxOffice: "$192 million", budget: "$55 million", 
        dna: { "Action": 70, "Thriller": 30 },
        scenes: [
            { time: 20, intensity: 40, label: "The Diner", color: "#334155" },
            { time: 45, intensity: 75, label: "19 Seconds", color: "#475569" },
            { time: 90, intensity: 60, label: "Interrogation", color: "#1e293b" },
            { time: 120, intensity: 88, label: "Hardware Store", color: "#0f172a" } // Action Peak
        ],
        synopsis: "Pure catharsis. Denzel Washington is a retired black-ops commando who comes out of the shadows to protect a young girl. Denzel’s precision and the brutal, tactical choreography make this the peak of the 'Vigilante' sub-genre.",
        themes: ["Justice", "Vigilantism", "Skill"]
    }),

    // 9. How to Blow Up a Pipeline (ECO-THRILLER)
    // Peak: 85 (Execution).
    1041513: createMovieData({ 
        suspenseIntensity: 84, 
        complexityLevel: "POLITICAL", 
        dominantColor: "#d97706", rating: 7.0, criticsScore: 94, audienceScore: 68, director: "Daniel Goldhaber", 
        cast: ["Ariela Barer", "Kristine Froseth"], boxOffice: "$1 million", budget: "$1 million", 
        dna: { "Thriller": 70, "Politics": 30 },
        scenes: [
            { time: 15, intensity: 30, label: "The Assembly", color: "#f59e0b" },
            { time: 50, intensity: 70, label: "The Desert", color: "#d97706" },
            { time: 80, intensity: 85, label: "The Sabotage", color: "#b45309" }, // Tension Peak
            { time: 95, intensity: 60, label: "The Fallout", color: "#78350f" }
        ],
        synopsis: "A group of young environmental activists executes a daring plan to sabotage a major oil pipeline. It’s an eco-thriller that moves with the frantic energy of an undercover heist movie. Gritty, realistic, and incredibly polarizing.",
        themes: ["Activism", "Sabotage", "Climate Change"]
    }),

    // 10. The Pledge (NEO-NOIR)
    // Peak: 75 (The Trap).
    11232: createMovieData({ 
        suspenseIntensity: 80, 
        complexityLevel: "BLEAK", 
        dominantColor: "#57534e", rating: 6.8, criticsScore: 78, audienceScore: 62, director: "Sean Penn", 
        cast: ["Jack Nicholson", "Benicio Del Toro"], boxOffice: "$29 million", budget: "$35 million", 
        dna: { "Mystery": 60, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 30, label: "Retirement", color: "#a8a29e" },
            { time: 50, intensity: 50, label: "The Promise", color: "#78716c" },
            { time: 90, intensity: 65, label: "The Bait", color: "#57534e" },
            { time: 115, intensity: 75, label: "The Wait", color: "#44403c" } // Psychological Peak
        ],
        synopsis: "On the day of his retirement, a detective makes a promise to a grieving mother that he will find her daughter’s killer. A bleak, haunting character study directed by Sean Penn that subverts every 'hero cop' trope in exchange for a devastating reality.",
        themes: ["Obsession", "Failure", "Promises"]
    })
};

export const STRATEGIC_QUOTES = {
    949: "Action is the juice.",
    44214: "I was perfect.",
    915935: "I did not kill him.",
    141: "Wake up, Donnie.",
    7972: "The world is an evil place.",
    1491: "Everything is an illusion.",
    787752: "It's not about the meat.",
    156022: "Progress.",
    1041513: "This was an act of self-defense.",
    11232: "I made a promise."
};

export const CINEMATIC_COLORS = {
    "Thriller": "#b91c1c", "Action": "#ef4444", "Mystery": "#7c3aed", "Crime": "#334155", "Drama": "#d97706"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Weak", color: "#94a3b8", symbol: "🥱", bgColor: "bg-slate-800/30", description: "No tension" },
    { value: 2, label: "Tense", color: "#facc15", symbol: "😬", bgColor: "bg-yellow-500/30", description: "Good suspense" },
    { value: 3, label: "Gripping", color: "#f97316", symbol: "🔥", bgColor: "bg-orange-600/30", description: 'Edge of seat' },
    { value: 4, label: "Masterpiece", color: "#ef4444", symbol: "🤯", bgColor: "bg-red-700/30", description: "Pure adrenaline" }
];

export const HULU_THRILLER_MOVIE_FAQS = {
    'Heat': [
        { question: "Is the shootout realistic?", answer: "Yes, it is widely considered the most realistic firefight in cinema history. It is often shown to military recruits as an example of proper tactical retreat under fire." },
        { question: "Did Pacino and De Niro film together?", answer: "Yes, but they only share one scene—the famous coffee shop conversation—and the climax. They are never in the same frame until the very end." }
    ],
    'Black Swan': [
        { question: "Is it a horror movie?", answer: "While technically a psychological thriller, it uses strong body horror elements to depict the physical toll of perfectionism." },
        { question: "Did Natalie Portman do her own dancing?", answer: "She did much of it, but a professional ballerina, Sarah Lane, performed the more complex technical moves." }
    ],
    'Anatomy of a Fall': [
        { question: "Did she do it?", answer: "The film deliberately leaves this ambiguous. The focus is not on the truth, but on how relationships are dissected and judged in a court of law." },
        { question: "Is the dog real?", answer: "Yes, Messi the Border Collie played Snoop and won the 'Palm Dog' award at Cannes for his incredible performance." }
    ],
    'Donnie Darko': [
        { question: "What is the Tangent Universe?", answer: "In the Director's Cut, it explains that the film takes place in an unstable parallel dimension that will collapse if the Artifact (the jet engine) isn't returned." },
        { question: "Is Frank real?", answer: "Frank is a 'Manipulated Dead'—a ghost from the future guiding Donnie to ensure the timeline is corrected." }
    ],
    'Fresh': [
        { question: "Is it gorey?", answer: "The film implies more than it shows, but the central concept (cannibalism) and surgical scenes are highly disturbing." },
        { question: "What is the genre?", answer: "It begins as a romantic comedy before sharply pivoting into a horror-thriller at the 30-minute mark." }
    ],
    'The Equalizer': [
        { question: "Is it based on a show?", answer: "Yes, it is a reimagining of the 1980s TV series of the same name." },
        { question: "Does Denzel use a gun?", answer: "Rarely. The character prefers using his environment and improvised weapons (like a nail gun or corkscrew) to neutralize threats." }
    ],
    'The Pledge': [
        { question: "Does he catch the killer?", answer: "The tragedy of the film is that he correctly identifies the killer, but a random accident prevents justice, leaving the detective to go mad waiting for a resolution that never comes." }
    ]
};

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
        if (lowerType.includes('violence') || lowerType.includes('blood') || lowerType.includes('gun')) types.add('Violence');
        if (lowerType.includes('sex') || lowerType.includes('nudity')) types.add('Sexual Content');
        if (lowerType.includes('drug')) types.add('Substance Use');
        if (lowerType.includes('horror') || lowerType.includes('gore')) types.add('Gore');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_THRILLER_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A top thriller movie on Hulu.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.0, 
            'bestRating': 10, 
            'worstRating': 1, 
            'ratingCount': movieInfo?.audienceScore || 100 
        }
    };
};

export const generateFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }))
});

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
            description: scene.description || ''
        }))
    };
};