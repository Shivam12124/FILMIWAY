// utils/huluSciFiMovieData.js - HULU SCI-FI COLLECTION DATA
// Ranked by Mind-Bend Score, Visual Spectacle, and Conceptual Depth
// CALIBRATION: 0-20 (Atmosphere) | 20-40 (Mystery) | 40-60 (Discovery) | 60-75 (Tension) | 75-85 (Action/Conflict) | 85-95 (Climax) | 95-100 (Existential Revelation)

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi", "runtime": 113, "rank": 1 },
    { "tmdbId": 2756, "imdbID": "tt0096754", "Title": "The Abyss", "year": 1989, "genre": "Sci-Fi", "runtime": 140, "rank": 2 },
    { "tmdbId": 119450, "imdbID": "tt2103281", "Title": "Dawn of the Planet of the Apes", "year": 2014, "genre": "Sci-Fi", "runtime": 130, "rank": 3 },
    { "tmdbId": 106, "imdbID": "tt0093773", "Title": "Predator", "year": 1987, "genre": "Sci-Fi", "runtime": 107, "rank": 4 },
    { "tmdbId": 31011, "imdbID": "tt0485947", "Title": "Mr. Nobody", "year": 2009, "genre": "Sci-Fi", "runtime": 141, "rank": 5 },
    { "tmdbId": 820609, "imdbID": "tt16537332", "Title": "No One Will Save You", "year": 2023, "genre": "Sci-Fi", "runtime": 93, "rank": 6 }, // Replaces Life of Chuck
    { "tmdbId": 766507, "imdbID": "tt11866324", "Title": "Prey", "year": 2022, "genre": "Sci-Fi", "runtime": 99, "rank": 7 },
    { "tmdbId": 1376434, "imdbID": "tt36463894", "Title": "Predator: Killer of Killers", "year": 2025, "genre": "Animation", "runtime": 45, "rank": 8 },
    { "tmdbId": 61791, "imdbID": "tt1318514", "Title": "Rise of the Planet of the Apes", "year": 2011, "genre": "Sci-Fi", "runtime": 105, "rank": 9 },
    { "tmdbId": 1317088, "imdbID": "tt32768323", "Title": "The Assessment", "year": 2024, "genre": "Sci-Fi", "runtime": 114, "rank": 10 } // ✅ REPLACED ALIEN
];

// ✅ SENSITIVE TIMELINES (Sci-Fi Edition: Existential Dread, Gore, Flashing Lights)
export const SENSITIVE_TIMELINES = {
    // 1. Donnie Darko
    141: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Sleepwalking/Danger", severity: "Low" },
            { start: "1:40:00", end: "1:45:00", type: "Plane Crash/Death", severity: "High" }
        ] 
    },
    // 2. The Abyss
    2756: { 
        scenes: [
            { start: "1:30:00", end: "1:35:00", type: "Drowning/Resuscitation", severity: "Extreme" }, // The famous chest slap scene
            { start: "0:40:00", end: "0:45:00", type: "Claustrophobia", severity: "High" }
        ] 
    },
    // 3. Dawn of the Planet of the Apes
    119450: { scenes: [] }, // Standard War Violence
    // 4. Predator
    106: { 
        scenes: [
            { start: "0:46:00", end: "0:47:00", type: "Gore", severity: "High" },
            { start: "1:15:00", end: "1:16:00", type: "Spine Removal", severity: "Extreme" }
        ] 
    },
    // 5. Mr. Nobody
    31011: { scenes: [] }, // Existential but safe
    // 6. No One Will Save You
    1022204: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Home Invasion", severity: "High" }
        ] 
    },
    // 7. Prey
    766507: { scenes: [{ start: "0:55:00", end: "0:58:00", type: "Gore", severity: "High" }] },
    // 8. Predator: Killer of Killers
    1376434: { scenes: [{ start: "0:15:00", end: "0:18:00", type: "Animated Gore", severity: "High" }] },
    // 9. Rise of the Planet of the Apes
    61791: { scenes: [{ start: "0:30:00", end: "0:35:00", type: "Animal Abuse", severity: "Moderate" }] },
    // 10. The Assessment (New Entry)
    1086591: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Psychological Abuse", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Sexual Coercion/Tension", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    141: "https://image.tmdb.org/t/p/w500/fhQoQoeNR72JXYgyqgzTzJluSF1.jpg",
    2756: "https://image.tmdb.org/t/p/w500/oF6h7gEda66q00P9J2v473Y5K70.jpg",
    119450: "https://image.tmdb.org/t/p/w500/2EuaZ1p9KT81hMWjV7oqamAQ6RL.jpg",
    106: "https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    31011: "https://image.tmdb.org/t/p/w500/z6C74AgF59rU5728Vj7L2Z5g7Gz.jpg",
    1022204: "https://image.tmdb.org/t/p/w500/ehG1cfVjJ42L48Ym6XThF3X4sQ.jpg",
    766507: "https://image.tmdb.org/t/p/w500/ujr5pztc1oirVRgiIYWO0pWitVD.jpg",
    1376434: "https://via.placeholder.com/500x750?text=Predator+Killer+of+Killers",
    61791: "https://image.tmdb.org/t/p/w500/cjLSuo15sXhPL2q5y92X2X85.jpg",
    1086591: "https://image.tmdb.org/t/p/w500/8X2k2X2k2X2k2X2k2X2k2X.jpg" // Placeholder hash, use real if available
};

// ✅ HELPER: Sci-Fi Specific Metrics
const createMovieData = (data) => ({
    mindBendScore: 85,          // Intellectual complexity (0-100)
    visualSpectacle: 80,        // CGI/Cinematography quality (0-100)
    complexityLevel: "HIGH",
    dominantColor: "#0ea5e9",   // Sci-Fi Cyan Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Donnie Darko (MIND BEND PEAK)
    // Blueprint: Atmospheric start, psychological peaks, emotional climax (95).
    141: createMovieData({ 
        mindBendScore: 98, 
        visualSpectacle: 70, 
        complexityLevel: "PUZZLE", 
        dominantColor: "#1e1b4b", rating: 8.0, criticsScore: 87, audienceScore: 80, director: "Richard Kelly", 
        cast: ["Jake Gyllenhaal", "Jena Malone"], boxOffice: "$7.5 million", budget: "$4.5 million", 
        dna: { "Sci-Fi": 40, "Thriller": 40, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "Wake Up", color: "#1e1b4b" },
            { time: 40, intensity: 50, label: "Frank the Rabbit", color: "#4c1d95" },
            { time: 70, intensity: 65, label: "Cellar Door", color: "#6d28d9" },
            { time: 90, intensity: 85, label: "Halloween Party", color: "#5b21b6" },
            { time: 110, intensity: 95, label: "Mad World", color: "#312e81" } // Emotional Peak
        ],
        synopsis: "A troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes, after he narrowly escapes a bizarre accident.",
        themes: ["Time Travel", "Mental Health", "Determinism"]
    }),

    // 2. The Abyss (UNDERWATER SPECTACLE)
    // Blueprint: Slow burn tension (30s) -> Intense Crisis (88) -> Awe (95).
    2756: createMovieData({ 
        mindBendScore: 75, 
        visualSpectacle: 95, // Groundbreaking CGI
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#0c4a6e", rating: 7.9, criticsScore: 89, audienceScore: 83, director: "James Cameron", 
        cast: ["Ed Harris", "Mary Elizabeth Mastrantonio"], boxOffice: "$90 million", budget: "$70 million", 
        dna: { "Sci-Fi": 60, "Thriller": 30, "Romance": 10 },
        scenes: [
            { time: 15, intensity: 30, label: "The Crash", color: "#082f49" },
            { time: 60, intensity: 65, label: "Water Tentacle", color: "#0284c7" },
            { time: 90, intensity: 88, label: "Resuscitation", color: "#0369a1" }, // Emotional Peak
            { time: 120, intensity: 75, label: "The Drop", color: "#075985" },
            { time: 135, intensity: 95, label: "First Contact", color: "#38bdf8" } // Wonder Peak
        ],
        synopsis: "A civilian diving team is enlisted to search for a lost nuclear submarine and faces danger while encountering an alien aquatic species. James Cameron's underwater masterpiece.",
        themes: ["First Contact", "Isolation", "Humanity"]
    }),

    // 3. Dawn of the Planet of the Apes (SOCIOLOGICAL SCI-FI)
    // Blueprint: War tension. Peaks at action spectacle (90).
    119450: createMovieData({ 
        mindBendScore: 70, 
        visualSpectacle: 92, 
        complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 7.6, criticsScore: 90, audienceScore: 88, director: "Matt Reeves", 
        cast: ["Andy Serkis", "Jason Clarke"], boxOffice: "$710 million", budget: "$170 million", 
        dna: { "Sci-Fi": 40, "War": 40, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 35, label: "Apes Home", color: "#166534" },
            { time: 50, intensity: 60, label: "Trust Building", color: "#52525b" },
            { time: 75, intensity: 85, label: "Betrayal", color: "#ef4444" },
            { time: 95, intensity: 90, label: "War Begins", color: "#b91c1c" },
            { time: 120, intensity: 80, label: "Caesar's Choice", color: "#3f3f46" }
        ],
        synopsis: "A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.",
        themes: ["Evolution", "War", "Leadership"]
    }),

    // 4. Predator (ACTION SCI-FI)
    // Blueprint: Hunter/Prey dynamic. Builds to survival peak (95).
    106: createMovieData({ 
        mindBendScore: 60, 
        visualSpectacle: 85, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#166534", rating: 8.5, criticsScore: 82, audienceScore: 87, director: "John McTiernan", 
        cast: ["Arnold Schwarzenegger", "Carl Weathers"], boxOffice: "$98 million", budget: "$15 million", 
        dna: { "Action": 50, "Sci-Fi": 30, "Horror": 20 },
        scenes: [
            { time: 10, intensity: 20, label: "Insertion", color: "#166534" },
            { time: 40, intensity: 50, label: "Contact", color: "#4d7c0f" },
            { time: 70, intensity: 80, label: "The Trap", color: "#b91c1c" },
            { time: 90, intensity: 90, label: "Mud Camouflage", color: "#3f6212" },
            { time: 100, intensity: 95, label: "Self Destruct", color: "#f59e0b" }
        ],
        synopsis: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
        themes: ["Hunt", "Survival", "Technology"]
    }),

    // 5. Mr. Nobody (PHILOSOPHICAL ODYSSEY)
    // Blueprint: Complex structure. High mind-bend score.
    31011: createMovieData({ 
        mindBendScore: 95, 
        visualSpectacle: 88, 
        complexityLevel: "COMPLEX", 
        dominantColor: "#0ea5e9", rating: 7.8, criticsScore: 68, audienceScore: 76, director: "Jaco Van Dormael", 
        cast: ["Jared Leto", "Sarah Polley"], boxOffice: "$3.6 million", budget: "$47 million", 
        dna: { "Sci-Fi": 50, "Romance": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 20, label: "The Choice", color: "#0ea5e9" },
            { time: 40, intensity: 55, label: "Life with Elise", color: "#38bdf8" },
            { time: 80, intensity: 70, label: "Mars Journey", color: "#ef4444" },
            { time: 110, intensity: 85, label: "Old Age", color: "#cbd5e1" },
            { time: 130, intensity: 90, label: "Big Crunch", color: "#ffffff" }
        ],
        synopsis: "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision.",
        themes: ["Choice", "Butterfly Effect", "Time"]
    }),

    // 6. No One Will Save You (ALIEN INVASION)
    // Blueprint: Constant tension. 
    1022204: createMovieData({ 
        mindBendScore: 65, 
        visualSpectacle: 82, 
        complexityLevel: "UNIQUE", 
        dominantColor: "#64748b", rating: 6.3, criticsScore: 82, audienceScore: 57, director: "Brian Duffield", 
        cast: ["Kaitlyn Dever"], boxOffice: "Streaming", budget: "$22 million", 
        dna: { "Sci-Fi": 50, "Horror": 50 },
        scenes: [
            { time: 10, intensity: 30, label: "The Intruder", color: "#1e293b" },
            { time: 30, intensity: 65, label: "Hide and Seek", color: "#334155" },
            { time: 60, intensity: 80, label: "Abduction", color: "#0ea5e9" },
            { time: 80, intensity: 75, label: "The Dance", color: "#94a3b8" },
            { time: 90, intensity: 85, label: "Acceptance", color: "#f8fafc" }
        ],
        synopsis: "An exiled anxiety-ridden homebody must battle an alien who has found its way into her home. A Hulu Original with almost no dialogue.",
        themes: ["Isolation", "Grief", "Aliens"]
    }),

    // 7. Prey (PREDATOR PREQUEL)
    // Blueprint: Survival curve.
    766507: createMovieData({ 
        mindBendScore: 60, 
        visualSpectacle: 88, 
        complexityLevel: "VISCERAL", 
        dominantColor: "#064e3b", rating: 7.1, criticsScore: 94, audienceScore: 74, director: "Dan Trachtenberg", 
        cast: ["Amber Midthunder", "Dakota Beavers"], boxOffice: "Streaming", budget: "$65 million", 
        dna: { "Sci-Fi": 40, "Action": 40, "History": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "Lion Hunt", color: "#a16207" },
            { time: 45, intensity: 60, label: "Bear Attack", color: "#78350f" },
            { time: 65, intensity: 85, label: "Invisible Enemy", color: "#ef4444" },
            { time: 85, intensity: 80, label: "Bait", color: "#166534" },
            { time: 95, intensity: 92, label: "Brain vs Brawn", color: "#064e3b" }
        ],
        synopsis: "The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.",
        themes: ["Underdog", "Nature", "Survival"]
    }),

    // 8. Predator: Killer of Killers (ANIMATED)
    1376434: createMovieData({ 
        mindBendScore: 50, 
        visualSpectacle: 80, 
        complexityLevel: "ANIMATED", 
        dominantColor: "#7f1d1d", rating: 8.0, criticsScore: 85, audienceScore: 88, director: "Unknown", 
        cast: ["Voice Cast"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Sci-Fi": 40, "Animation": 40, "Action": 20 },
        scenes: [
            { time: 10, intensity: 40, label: "Viking Arrival", color: "#1f2937" },
            { time: 30, intensity: 85, label: "Plasma vs Axe", color: "#ef4444" },
            { time: 40, intensity: 90, label: "Final Duel", color: "#7f1d1d" }
        ],
        synopsis: "An R-rated animated anthology chapter where Viking warriors face the ultimate hunter. Part of the expanding Predator universe.",
        themes: ["History", "Lore", "Combat"]
    }),

    // 9. Rise of the Planet of the Apes (ORIGIN)
    61791: createMovieData({ 
        mindBendScore: 75, 
        visualSpectacle: 85, 
        complexityLevel: "EMOTIONAL", 
        dominantColor: "#065f46", rating: 7.6, criticsScore: 82, audienceScore: 77, director: "Rupert Wyatt", 
        cast: ["James Franco", "Andy Serkis"], boxOffice: "$481 million", budget: "$93 million", 
        dna: { "Sci-Fi": 50, "Drama": 40, "Action": 10 },
        scenes: [
            { time: 15, intensity: 20, label: "Bright Eyes", color: "#065f46" },
            { time: 45, intensity: 50, label: "Caesar Speaks", color: "#047857" }, // Key moment
            { time: 75, intensity: 70, label: "The Escape", color: "#059669" },
            { time: 90, intensity: 85, label: "Golden Gate Bridge", color: "#9ca3af" },
            { time: 100, intensity: 75, label: "Redwoods", color: "#166534" }
        ],
        synopsis: "A substance designed to help the brain repair itself gives rise to a super-intelligent chimp who leads an ape uprising.",
        themes: ["Ethics", "Family", "Hubris"]
    }),

    // 10. The Assessment (DYSTOPIAN TENSION)
    // Blueprint: Uneasy build-up (35), Social Chaos (80), Existential Climax (88).
    1086591: createMovieData({ 
        mindBendScore: 85, 
        visualSpectacle: 75, 
        complexityLevel: "PSYCHOLOGICAL", 
        dominantColor: "#7c3aed", rating: 7.2, criticsScore: 80, audienceScore: 75, director: "Fleur Fortuné", 
        cast: ["Elizabeth Olsen", "Alicia Vikander", "Himesh Patel"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Sci-Fi": 40, "Drama": 40, "Thriller": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "The Arrival", color: "#a78bfa" },
            { time: 40, intensity: 45, label: "Toddler Test", color: "#8b5cf6" }, // Weirdness builds
            { time: 75, intensity: 80, label: "Dinner Party", color: "#7c3aed" }, // Social Chaos
            { time: 95, intensity: 85, label: "Greenhouse Fire", color: "#b91c1c" }, // Crisis
            { time: 110, intensity: 88, label: "The Verdict", color: "#4c1d95" } // Emotional Peak
        ],
        synopsis: "In a dystopian future where parenthood is strictly controlled, a couple must undergo a grueling 7-day assessment by a government official who simulates a child to test their worthiness.",
        themes: ["Parenthood", "Dystopia", "Control"]
    })
};

export const STRATEGIC_QUOTES = {
    141: "Wake up, Donnie.",
    2756: "We all see what we want to see.",
    119450: "Apes together strong.",
    106: "If it bleeds, we can kill it.",
    31011: "As long as we don't choose, everything remains possible.",
    1022204: "...",
    766507: "It thinks I am prey.",
    1376434: "Valhalla waits.",
    61791: "No!",
    1086591: "If you fail, you will never be parents."
};

export const CINEMATIC_COLORS = {
    "Sci-Fi": "#0ea5e9", "Action": "#ef4444", "Horror": "#000000", "Drama": "#64748b", "Animation": "#f59e0b", "Thriller": "#d946ef"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Boring", color: "#94a3b8", symbol: "💤", bgColor: "bg-slate-800/30", description: "Put me to sleep" },
    { value: 2, label: "Interesting", color: "#22d3ee", symbol: "🤔", bgColor: "bg-cyan-900/30", description: "Good concepts" },
    { value: 3, label: "Mind-Bending", color: "#a855f7", symbol: "🤯", bgColor: "bg-purple-900/30", description: "Blew my mind" },
    { value: 4, label: "Masterpiece", color: "#0ea5e9", symbol: "🌌", bgColor: "bg-sky-900/30", description: "Genre defining" }
];

export const HULU_SCIFI_MOVIE_FAQS = {
    'Donnie Darko': [
        { question: "What is the ending explanation?", answer: "Donnie travels back in time to allow the jet engine to kill him, closing the Tangent Universe and saving the world from collapse." },
        { question: "Is Frank real?", answer: "Frank is a 'Manipulated Dead'—a ghost from the Tangent Universe guiding Donnie to fulfill his destiny." }
    ],
    'The Abyss': [
        { question: "Are the aliens friendly?", answer: "Yes, the NTIs (Non-Terrestrial Intelligences) are peaceful explorers who only threaten humanity to stop us from destroying ourselves with nuclear weapons." },
        { question: "Was the water tentacle CGI?", answer: "Yes, it was one of the very first uses of photorealistic CGI water in cinema, paving the way for Terminator 2 and Jurassic Park." }
    ],
    'Dawn of the Planet of the Apes': [
        { question: "Is Caesar real?", answer: "Caesar is a CGI character performed via motion capture by Andy Serkis. It is considered one of the greatest motion capture performances ever." },
        { question: "Do I need to see the first one?", answer: "It helps to see 'Rise,' but 'Dawn' stands on its own as a post-apocalyptic war drama." }
    ],
    'Predator': [
        { question: "Who designed the Predator?", answer: "Stan Winston designed it. James Cameron suggested the mandibles during a flight conversation." },
        { question: "Is it a horror movie?", answer: "It starts as an action movie and slowly morphs into a sci-fi slasher film." }
    ],
    'Mr. Nobody': [
        { question: "Which life is real?", answer: "All of them. The film suggests that before a choice is made, all possibilities exist simultaneously in the mind of the boy." },
        { question: "Is he immortal?", answer: "In the future timeline, he is the last mortal human in a world of immortals, making his death a spectacle." }
    ],
    'No One Will Save You': [
        { question: "Why is there no dialogue?", answer: "The lack of dialogue emphasizes the protagonist's isolation and forces the audience to pay attention to visual storytelling and sound design." },
        { question: "What does the ending mean?", answer: "Brynn finds acceptance among the aliens because she has let go of her guilt, living in a fabricated reality where her community loves her." }
    ],
    'Prey': [
        { question: "Is it historically accurate?", answer: "The filmmakers worked closely with Comanche educators to ensure the clothing, language, and culture were portrayed accurately." },
        { question: "Is the pistol significant?", answer: "Yes, it is the same pistol given to Danny Glover's character in Predator 2, linking the movies across 300 years." }
    ],
    'Predator: Killer of Killers': [
        { question: "Is this canon?", answer: "Yes, it expands the lore by showing historical hunts." },
        { question: "Why animation?", answer: "Animation allows for stylized violence and creature effects that would be prohibitively expensive in live action." }
    ],
    'Rise of the Planet of the Apes': [
        { question: "Is it a reboot?", answer: "Yes, it reboots the franchise, focusing on the scientific origin of the apes' intelligence rather than time travel." },
        { question: "What is the virus?", answer: "The ALZ-113 virus makes apes smarter but is lethal to humans, known later as the Simian Flu." }
    ],
    'The Assessment': [
        { question: "What is the assessment for?", answer: "In a future with scarce resources, couples must pass a grueling 7-day test to earn the right to have a child." },
        { question: "Is it scary?", answer: "It is a psychological thriller that creates dread through awkward social situations and the creepy behavior of the assessor, rather than jump scares." },
        { question: "Why does Alicia Vikander act like a child?", answer: "She plays the assessor, who role-plays as a toddler/child to test the couple's patience, discipline, and emotional stability under extreme stress." }
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
        if (lowerType.includes('gore') || lowerType.includes('blood')) types.add('Gore');
        if (lowerType.includes('violence') || lowerType.includes('fight')) types.add('Violence');
        if (lowerType.includes('flash') || lowerType.includes('strobe')) types.add('Flashing Lights');
        if (lowerType.includes('abuse') || lowerType.includes('coercion')) types.add('Emotional Abuse');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_SCIFI_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A top Sci-Fi movie on Hulu.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
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