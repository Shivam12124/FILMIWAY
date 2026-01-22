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
// ✅ SENSITIVE TIMELINES (Thriller Collection - Updated)
export const SENSITIVE_TIMELINES = {
    // 1. Heat
    949: { scenes: [] },

    // 2. Black Swan
    44214: { 
        scenes: [
            { start: '39:40', end: '40:40', type: 'Sexual content', severity: 'High' },
            { start: '48:52', end: '49:10', type: 'Sexual content', severity: 'Moderate' },
            { start: '51:20', end: '51:40', type: 'Sexual content', severity: 'High' },
            { start: '1:08:20', end: '1:11:01', type: 'Sex', severity: 'High' },
            { start: '1:20:20', end: '1:20:40', type: 'Sex', severity: 'High' }
        ] 
    },

    // 3. Anatomy of a Fall
    915935: { scenes: [] },

    // 4. Donnie Darko
    141: { scenes: [] },

    // 5. Before the Devil Knows You're Dead
    7972: { 
        scenes: [
            { start: "0:39", end: "4:00", type: "Sex & Nudity", severity: "Extreme" },
            { start: "14:14", end: "15:15", type: "Nudity", severity: "High" },
            { start: "37:50", end: "38:15", type: "Nudity", severity: "High" }
        ] 
    },

    // 6. The Illusionist
    1491: { scenes: [] },

    // 7. Fresh
    787752: { 
        scenes: [
            { start: "8:26", end: "8:32", type: "Nudity", severity: "High" },
            { start: "19:29", end: "20:00", type: "Sex", severity: "High" },
            { start: "1:10:10", end: "1:10:30", type: "Nudity", severity: "High" }
        ] 
    },

       // 8. The Equalizer
    156022: { 
        scenes: [
           
            { start: "2:04:35", end: "2:04:55", type: "Nudity (Non-Sexual)", severity: "Moderate" }
        ] 
    },

    // 9. How to Blow Up a Pipeline
    1008048: { scenes: [] },

    // 10. The Pledge
    5955: { scenes: [] }
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
    1008048: "https://image.tmdb.org/t/p/w500/8.jpg",
   5955: "https://image.tmdb.org/t/p/w500/9.jpg"
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
    // Curve: Slow build -> Tactical tension -> Visceral explosion -> Tragic finale.
    // Peak: 96 (The Shootout - Genre-defining spectacle).
    949: createMovieData({ 
        suspenseIntensity: 96, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#1e293b", rating: 8.3, criticsScore: 88, audienceScore: 94, director: "Michael Mann", 
        cast: ["Al Pacino", "Robert De Niro", "Val Kilmer"], boxOffice: "$187 million", budget: "$60 million", 
        dna: { "Crime": 50, "Action": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "The Setup", color: "#334155" }, // Setup
            { time: 60, intensity: 45, label: "Coffee Shop", color: "#475569" }, // Meaningful engagement
            { time: 105, intensity: 65, label: "The Bank Job", color: "#94a3b8" }, // Strong Tension
            { time: 120, intensity: 96, label: "The Shootout", color: "#ef4444" }, // GENRE PEAK
            { time: 165, intensity: 75, label: "Airport Finale", color: "#b91c1c" } // Tragic Resolution
        ],
        synopsis: "In the sprawling concrete jungle of Los Angeles, a master thief and his elite crew plan one final, impossible heist while being hunted by a relentless, obsessive detective. As the stakes rise, the line between criminal and cop blurs, revealing two men who are mirror images of each other on opposite sides of the law. It culminates in a legendary downtown shootout where tactical realism meets operatic tragedy.",
        themes: ["Duality", "Professionalism", "Obsession"]
    }),

    // 2. Black Swan (PSYCHOLOGICAL HORROR)
    // Curve: Unease -> Pressure -> Paranoia -> Total Collapse.
    // Peak: 95 (The Performance - Psychological collapse).
    44214: createMovieData({ 
        suspenseIntensity: 94, 
        complexityLevel: "PSYCHOLOGICAL", 
        dominantColor: "#000000", rating: 8.0, criticsScore: 85, audienceScore: 84, director: "Darren Aronofsky", 
        cast: ["Natalie Portman", "Mila Kunis"], boxOffice: "$329 million", budget: "$13 million", 
        dna: { "Psychological": 60, "Horror": 40 },
        scenes: [
            { time: 15, intensity: 20, label: "The Casting", color: "#pink-200" }, // Setup
            { time: 50, intensity: 55, label: "The Club", color: "#be123c" }, // Loss of control
            { time: 80, intensity: 75, label: "Metamorphosis", color: "#9f1239" }, // Crisis
            { time: 100, intensity: 95, label: "Black Swan", color: "#000000" }, // PEAK TRAUMA
            { time: 108, intensity: 85, label: "I Was Perfect", color: "#881337" } // Devastating Ending
        ],
        synopsis: "Nina, a dedicated ballerina, wins the lead role in Tchaikovsky's Swan Lake, but the pressure to embody both the innocent White Swan and the seductive Black Swan begins to fracture her mind. As a rival dancer threatens her position and her mother's control tightens, Nina's reality warps into a waking nightmare of body horror and paranoia. It is a visceral descent into madness where the pursuit of artistic perfection demands the ultimate sacrifice.",
        themes: ["Perfectionism", "Identity", "Paranoia"]
    }),

    // 3. Anatomy of a Fall (LEGAL TENSION)
    // Curve: Mystery -> Investigation -> Emotional Violence -> Ambiguity.
    // Peak: 88 (The Recording - Emotional shattering).
    915935: createMovieData({ 
        suspenseIntensity: 88, 
        complexityLevel: "CEREBRAL", 
        dominantColor: "#3b82f6", rating: 7.8, criticsScore: 96, audienceScore: 90, director: "Justine Triet", 
        cast: ["Sandra Hüller", "Swann Arlaud"], boxOffice: "$29 million", budget: "$6.7 million", 
        dna: { "Legal": 50, "Mystery": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "The Fall", color: "#93c5fd" }, // Setup
            { time: 50, intensity: 45, label: "The Reconstruction", color: "#60a5fa" }, // Intellectual pull
            { time: 90, intensity: 65, label: "The Son's Testimony", color: "#2563eb" }, // Tension
            { time: 110, intensity: 88, label: "The Argument", color: "#1d4ed8" }, // PEAK CONFLICT
            { time: 145, intensity: 60, label: "The Verdict", color: "#1e3a8a" } // Open/Unsettling
        ],
        synopsis: "When a man falls to his death in the snow outside his secluded chalet, his wife Sandra becomes the only suspect in a case with no witnesses other than their visually impaired son. The ensuring trial transforms into a forensic dissection of their turbulent marriage, exposing resentments, secrets, and ambiguities that make the truth impossible to pin down. It is a courtroom drama that plays like a psychological thriller, questioning whether justice can ever truly be found.",
        themes: ["Truth", "Marriage", "Ambiguity"]
    }),

    // 4. Donnie Darko (MIND-BENDING)
    // Curve: Weirdness -> Mystery -> Dread -> Existential Peak.
    // Peak: 85 (Mad World - Existential Rupture).
    141: createMovieData({ 
        suspenseIntensity: 85, 
        complexityLevel: "SURREAL", 
        dominantColor: "#4c1d95", rating: 8.0, criticsScore: 87, audienceScore: 80, director: "Richard Kelly", 
        cast: ["Jake Gyllenhaal", "Jena Malone"], boxOffice: "$7.5 million", budget: "$4.5 million", 
        dna: { "Sci-Fi": 40, "Psychological": 40, "Teen": 20 },
        scenes: [
            { time: 10, intensity: 15, label: "28 Days", color: "#5b21b6" }, // Setup
            { time: 45, intensity: 40, label: "The Axe", color: "#6d28d9" }, // Unease
            { time: 80, intensity: 65, label: "Fear & Love", color: "#7c3aed" }, // Tension
            { time: 105, intensity: 85, label: "Mad World", color: "#4c1d95" }, // PEAK EXISTENTIAL
            { time: 113, intensity: 50, label: "Waking Up", color: "#2e1065" } // Bittersweet
        ],
        synopsis: "In a quiet suburban town, troubled teenager Donnie narrowly escapes a jet engine crashing into his bedroom after being lured out by a terrifying figure in a rabbit suit named Frank. Frank tells him the world will end in 28 days, setting Donnie on a bizarre path of time travel, metaphysics, and vandalism. As the countdown ticks away, Donnie must unravel the fabric of the universe to understand his role in a cosmic destiny.",
        themes: ["Time Travel", "Fate", "Mental Health"]
    }),

    // 5. Before the Devil Knows You're Dead (NON-LINEAR TRAGEDY)
    // Curve: Desperation -> Shock -> Spiral -> Devastation.
    // Peak: 90 (The Hospital - Irreversible Rupture).
    7972: createMovieData({ 
        suspenseIntensity: 89, 
        complexityLevel: "GRITTY", 
        dominantColor: "#9a3412", rating: 7.3, criticsScore: 88, audienceScore: 79, director: "Sidney Lumet", 
        cast: ["Philip Seymour Hoffman", "Ethan Hawke"], boxOffice: "$25 million", budget: "$18 million", 
        dna: { "Crime": 60, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 20, label: "The Proposal", color: "#c2410c" }, // Setup
            { time: 40, intensity: 75, label: "The Heist", color: "#ea580c" }, // Crisis
            { time: 70, intensity: 60, label: "The Fallout", color: "#fb923c" }, // Tension
            { time: 100, intensity: 90, label: "The Hospital", color: "#7c2d12" }, // PEAK TRAGEDY
            { time: 115, intensity: 70, label: "Final Breath", color: "#431407" } // Bleak Ending
        ],
        synopsis: "Desperate for cash, two brothers hatch a seemingly victimless plan to rob their parents' jewelry store, assuming insurance will cover the loss. But when the heist goes horribly wrong, it triggers a cascading series of betrayals, violence, and emotional devastation that tears the family apart. Sidney Lumet’s final film uses a fractured timeline to maximize the tension, making the inevitable tragedy feel like a slow-motion car crash you can't look away from.",
        themes: ["Greed", "Family", "Consequences"]
    }),

    // 6. The Illusionist (MYSTERY/PERIOD)
    // Curve: Mystery -> Romance -> Threat -> Reveal.
    // Peak: 80 (The Orange Tree - Truth Revelation).
    1491: createMovieData({ 
        suspenseIntensity: 78, 
        complexityLevel: "ELEGANT", 
        dominantColor: "#f59e0b", rating: 7.6, criticsScore: 74, audienceScore: 83, director: "Neil Burger", 
        cast: ["Edward Norton", "Jessica Biel"], boxOffice: "$87 million", budget: "$16 million", 
        dna: { "Mystery": 60, "Romance": 40 },
        scenes: [
            { time: 15, intensity: 15, label: "Childhood", color: "#fbbf24" }, // Setup
            { time: 50, intensity: 45, label: "The Performance", color: "#d97706" }, // Wonder/Tension
            { time: 80, intensity: 65, label: "The Ultimatum", color: "#b45309" }, // Conflict
            { time: 100, intensity: 80, label: "The Disappearance", color: "#f59e0b" }, // PEAK MYSTERY
            { time: 110, intensity: 50, label: "The Truth", color: "#78350f" } // Satisfaction
        ],
        synopsis: "In turn-of-the-century Vienna, a mysterious magician uses his supernatural abilities to win back the love of a woman engaged to a corrupt and dangerous Crown Prince. As the Prince's jealousy turns violent, the illusionist constructs his greatest trick yet—one that blurs the line between magic and reality to destabilize the monarchy itself. Sophisticated and atmospheric, it builds toward a final revelation that redefines everything you've seen.",
        themes: ["Magic", "Class", "Deception"]
    }),

    // 7. Fresh (HORROR THRILLER)
    // Curve: Rom-Com -> Sharp Turn -> Survival -> Climax.
    // Peak: 92 (The Dinner Table - Visceral Horror).
    787752: createMovieData({ 
        suspenseIntensity: 85, 
        complexityLevel: "TWISTED", 
        dominantColor: "#be123c", rating: 6.7, criticsScore: 81, audienceScore: 80, director: "Mimi Cave", 
        cast: ["Daisy Edgar-Jones", "Sebastian Stan"], boxOffice: "Streaming", budget: "N/A", 
        dna: { "Horror": 50, "Thriller": 50 },
        scenes: [
            { time: 10, intensity: 10, label: "Swipe Left", color: "#fbcfe8" }, // Low Start
            { time: 33, intensity: 85, label: "The Turn", color: "#db2777" }, // SHOCK SPIKE
            { time: 60, intensity: 65, label: "Appetite", color: "#be123c" }, // Dread
            { time: 95, intensity: 92, label: "The Escape", color: "#881337" }, // PEAK SURVIVAL
            { time: 110, intensity: 60, label: "Survivor", color: "#4c0519" } // Relief
        ],
        synopsis: "Frustrated with the horrors of modern dating apps, Noa takes a chance on a charming man she meets in a grocery store, only to discover his 'perfect guy' persona hides a terrifying appetite. What begins as a sweet romantic comedy takes a sharp, brutal turn into survival horror as Noa discovers the true nature of his business. A bold, tonal high-wire act that satirizes the commodification of women's bodies.",
        themes: ["Dating", "Survival", "Commoditization"]
    }),

    // 8. The Equalizer (ACTION THRILLER)
    // Curve: Calm -> Warning -> Release -> War.
    // Peak: 88 (Home Depot - Heroic Domination).
    156022: createMovieData({ 
        suspenseIntensity: 82, 
        complexityLevel: "VISCERAL", 
        dominantColor: "#0f172a", rating: 7.2, criticsScore: 60, audienceScore: 76, director: "Antoine Fuqua", 
        cast: ["Denzel Washington", "Chloë Grace Moretz"], boxOffice: "$192 million", budget: "$55 million", 
        dna: { "Action": 70, "Thriller": 30 },
        scenes: [
            { time: 15, intensity: 15, label: "Quiet Life", color: "#334155" }, // Setup
            { time: 40, intensity: 50, label: "The Warning", color: "#475569" }, // Tension
            { time: 55, intensity: 75, label: "19 Seconds", color: "#1e293b" }, // Action spike
            { time: 110, intensity: 88, label: "Hardware Store", color: "#0f172a" }, // PEAK ACTION
            { time: 130, intensity: 40, label: "Balance", color: "#020617" } // Resolution
        ],
        synopsis: "Robert McCall, a retired black-ops commando living a quiet life, is forced out of self-imposed exile to protect a young girl from ultra-violent Russian gangsters. Utilizing his elite tactical skills, he wages a one-man war against the criminal organization, turning everyday objects into lethal weapons. It is a masterclass in vigilante cinema, delivering brutal, calculated catharsis for anyone who believes in balancing the scales.",
        themes: ["Justice", "Vigilantism", "Skill"]
    }),

    // 9. How to Blow Up a Pipeline (ECO-THRILLER)
    // Curve: Planning -> Risk -> Execution -> Consequences.
    // Peak: 85 (Detonation - Crisis).
    1008048: createMovieData({ 
        suspenseIntensity: 84, 
        complexityLevel: "POLITICAL", 
        dominantColor: "#d97706", rating: 7.0, criticsScore: 94, audienceScore: 68, director: "Daniel Goldhaber", 
        cast: ["Ariela Barer", "Kristine Froseth"], boxOffice: "$1 million", budget: "$1 million", 
        dna: { "Thriller": 70, "Politics": 30 },
        scenes: [
            { time: 15, intensity: 25, label: "The Gathering", color: "#f59e0b" }, // Setup
            { time: 45, intensity: 55, label: "Building It", color: "#d97706" }, // Process
            { time: 70, intensity: 75, label: "The Obstacle", color: "#b45309" }, // Complication
            { time: 90, intensity: 85, label: "Detonation", color: "#78350f" }, // PEAK TENSION
            { time: 100, intensity: 50, label: "Fallout", color: "#451a03" } // Ending
        ],
        synopsis: "A crew of young environmental activists from diverse backgrounds converges in the Texas desert to execute a daring plan: sabotage a major oil pipeline to disrupt the fossil fuel industry. Filmed with the nervous energy of a heist movie, the film explores the moral and physical stakes of radical activism. It is a gritty, high-tension thriller that asks how far is too far when fighting for the planet's survival.",
        themes: ["Activism", "Sabotage", "Climate Change"]
    }),

    // 10. The Pledge (NEO-NOIR)
    // Curve: Promise -> Obsession -> Trap -> Void.
    // Peak: 80 (The Ambush - Psychological Pressure).
   5955: createMovieData({ 
        suspenseIntensity: 80, 
        complexityLevel: "BLEAK", 
        dominantColor: "#57534e", rating: 6.8, criticsScore: 78, audienceScore: 62, director: "Sean Penn", 
        cast: ["Jack Nicholson", "Benicio Del Toro"], boxOffice: "$29 million", budget: "$35 million", 
        dna: { "Mystery": 60, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 15, label: "Retirement", color: "#a8a29e" }, // Setup
            { time: 40, intensity: 45, label: "The Promise", color: "#78716c" }, // Motivation
            { time: 80, intensity: 65, label: "The Bait", color: "#57534e" }, // Tension
            { time: 110, intensity: 80, label: "The Wait", color: "#44403c" }, // PEAK PSYCHOLOGICAL
            { time: 120, intensity: 75, label: "The Void", color: "#292524" } // Devastating/Open
        ],
        synopsis: "On the day of his retirement, a seasoned homicide detective makes a solemn pledge to a grieving mother that he will find the man who murdered her young daughter. As his obsession with the case grows, he sets a dangerous trap using another child as bait, slowly losing his grip on sanity and morality. A bleak, haunting character study that subverts the 'hero cop' trope in exchange for a devastating, ambiguous reality.",
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
    1008048: "This was an act of self-defense.",
   5955: "I made a promise."
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