// utils/eyesWideShutMovieData.js - EYES WIDE SHUT COLLECTION DATA
// Movies exploring secret societies, paranoia, the occult elite, and surreal nightmares.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147, "rank": 1 },
    { "tmdbId": 622, "imdbID": "tt0142688", "Title": "The Ninth Gate", "year": 1999, "genre": "Thriller", "runtime": 133, "rank": 2 },
    { "tmdbId": 793, "imdbID": "tt0090756", "Title": "Blue Velvet", "year": 1986, "genre": "Mystery", "runtime": 120, "rank": 3 },
    { "tmdbId": 805, "imdbID": "tt0063522", "Title": "Rosemary's Baby", "year": 1968, "genre": "Horror", "runtime": 137, "rank": 4 },
    { "tmdbId": 2649, "imdbID": "tt0119174", "Title": "The Game", "year": 1997, "genre": "Thriller", "runtime": 129, "rank": 5 },
    { "tmdbId": 638, "imdbID": "tt0116922", "Title": "Lost Highway", "year": 1997, "genre": "Mystery", "runtime": 134, "rank": 6 },
    { "tmdbId": 22244, "imdbID": "tt0098354", "Title": "Society", "year": 1989, "genre": "Horror", "runtime": 99, "rank": 7 },
    { "tmdbId": 8224, "imdbID": "tt0134273", "Title": "8mm", "year": 1999, "genre": "Thriller", "runtime": 123, "rank": 8 },
    { "tmdbId": 419430, "imdbID": "tt5052448", "Title": "Get Out", "year": 2017, "genre": "Horror", "runtime": 104, "rank": 9 },
    { "tmdbId": 399057, "imdbID": "tt7026672", "Title": "The Killing of a Sacred Deer", "year": 2017, "genre": "Drama", "runtime": 121, "rank": 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data)
export const SENSITIVE_TIMELINES = {
    // 1. Mulholland Drive
    1018: { 
        scenes: [
            { start: "1:19:38", end: "1:20:02", type: "Kissing", severity: "Mild" },
            { start: "1:38:45", end: "1:42:18", type: "Nudity", severity: "High" },
            { start: "2:01:27", end: "2:02:59", type: "Nudity", severity: "High" },
            { start: "2:15:50", end: "2:15:58", type: "Kissing", severity: "Mild" }
        ]
    },
    // 2. The Ninth Gate
    622: {
        scenes: [
            { start: "0:45:10", end: "0:46:20", type: "Sexual Content", severity: "Moderate" },
            { start: "1:52:00", end: "1:54:00", type: "Nudity/Ritual", severity: "High" } 
        ]
    },
    // 3. Blue Velvet
    793: {
        scenes: [
            { start: "0:40:00", end: "0:46:00", type: "Sexual Violence", severity: "Extreme" }, // The Closet
            { start: "1:30:00", end: "1:32:00", type: "Nudity", severity: "High" }
        ]
    },
    // 4. Rosemary's Baby
    805: {
        scenes: [
            { start: "0:42:00", end: "0:48:00", type: "Sexual Violence/Ritual", severity: "High" }
        ]
    },
    // 5. The Game (Clean)
    2649: { scenes: [] },
    // 6. Lost Highway
    638: {
        scenes: [
            { start: "0:45:00", end: "0:47:00", type: "Nudity", severity: "High" },
            { start: "1:45:00", end: "1:48:00", type: "Sexual Content", severity: "High" }
        ]
    },
    // 7. Society
    22244: {
        scenes: [
            { start: "1:25:00", end: "1:35:00", type: "Body Horror/Orgy", severity: "Extreme" } // The Shunting
        ]
    },
    // 8. 8mm
    8224: {
        scenes: [
            { start: "0:15:00", end: "0:16:00", type: "Disturbing Imagery", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Sexual Violence", severity: "Extreme" }
        ]
    },
    // 9. Get Out (Clean relative to nudity)
    419430: { scenes: [] },
    // 10. The Killing of a Sacred Deer
    399057: {
        scenes: [
            { start: "0:01:00", end: "0:03:00", type: "Medical Gore", severity: "High" },
            { start: "0:20:00", end: "0:22:00", type: "Sexual Content", severity: "Moderate" }
        ]
    }
};

export const FALLBACK_POSTERS = {
    1018: "https://image.tmdb.org/t/p/w500/o6qC1VfXKyA9qDqWbJ7qB5qJ5aB.jpg",
    622: "https://image.tmdb.org/t/p/w500/m0pA8GzWp3Q7qK1bF1K1bF1K1bF.jpg",
    793: "https://image.tmdb.org/t/p/w500/7pQ1bF1K1bF1K1bF1K1bF1K1bF.jpg",
    805: "https://image.tmdb.org/t/p/w500/9e12080Q25550220608.jpg",
    2649: "https://image.tmdb.org/t/p/w500/805020502.jpg",
    638: "https://image.tmdb.org/t/p/w500/br9020520.jpg",
    22244: "https://image.tmdb.org/t/p/w500/so902052.jpg",
    8224: "https://image.tmdb.org/t/p/w500/mm82025.jpg",
    419430: "https://image.tmdb.org/t/p/w500/go920502.jpg",
    399057: "https://image.tmdb.org/t/p/w500/ksd92050.jpg"
};

const createMovieData = (data) => data;

// ⚠️ MAPPING NOTE FOR UI:
// psychologicalIntensity = "Paranoia Level"
// artisticObsession = "Occult Atmosphere"
// identityHorror = "Societal Decay"

export const COMPLETE_MOVIE_DATA = {
    // 1. Mulholland Drive
    1018: createMovieData({ 
        psychologicalIntensity: 98, artisticObsession: 90, identityHorror: 100, complexityLevel: "EXTREME", 
        dominantColor: "#6b21a8", rating: 7.9, criticsScore: 85, audienceScore: 87, director: "David Lynch", 
        cast: ["Naomi Watts", "Laura Harring"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { "Mystery": 50, "Surrealism": 30, "Neo-Noir": 20 },
        scenes: [
            { time: 25, intensity: 40, label: "Winkie's Dream", color: "#6b21a8" },
            { time: 110, intensity: 95, label: "Silencio", color: "#60a5fa" },
            { time: 125, intensity: 100, label: "The Box", color: "#0f172a" }
        ],
        synopsis: "The ultimate 'Hollywood is a Cult' movie. Like Eyes Wide Shut, it peels back the curtain of elite society to reveal a nightmare of abuse, power, and fractured identity.",
        themes: ["Secret Hollywood", "Dream Logic", "Identity Fracture"]
    }),

    // 2. The Ninth Gate
    622: createMovieData({ 
        psychologicalIntensity: 85, artisticObsession: 100, identityHorror: 70, complexityLevel: "HIGH", 
        dominantColor: "#78350f", rating: 6.7, criticsScore: 43, audienceScore: 65, director: "Roman Polanski", 
        cast: ["Johnny Depp", "Emmanuelle Seigner"], boxOffice: "$58 million", budget: "$38 million", 
        dna: { "Mystery": 45, "Occult": 40, "Thriller": 15 },
        scenes: [
            { time: 30, intensity: 40, label: "The Book", color: "#78350f" },
            { time: 80, intensity: 75, label: "The Baroness", color: "#991b1b" },
            { time: 125, intensity: 95, label: "The Ritual", color: "#dc2626" }
        ],
        synopsis: "A rare book dealer navigates a shadow world of wealthy Satanists. It shares the 'Secret Society' DNA of Eyes Wide Shut, but trades the sexual masked balls for ancient rituals and burning castles.",
        themes: ["Occultism", "Elitism", "Forbidden Knowledge"]
    }),

    // 3. Blue Velvet
    793: createMovieData({ 
        psychologicalIntensity: 88, artisticObsession: 92, identityHorror: 98, complexityLevel: "HIGH", 
        dominantColor: "#1e3a8a", rating: 7.7, criticsScore: 94, audienceScore: 88, director: "David Lynch", 
        cast: ["Kyle MacLachlan", "Isabella Rossellini"], boxOffice: "$8.6 million", budget: "$6 million", 
        dna: { "Mystery": 40, "Thriller": 40, "Surrealism": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "The Ear", color: "#16a34a" },
            { time: 45, intensity: 98, label: "Candy Colored Clown", color: "#1e3a8a" },
            { time: 110, intensity: 90, label: "The Shootout", color: "#dc2626" }
        ],
        synopsis: "A college student finds a severed ear and discovers a sadistic criminal underworld operating beneath his quiet suburban town. The voyeuristic themes directly mirror Dr. Bill Harford's journey.",
        themes: ["Voyeurism", "Suburban Rot", "Perversion"]
    }),

    // 4. Rosemary's Baby
    805: createMovieData({ 
        psychologicalIntensity: 95, artisticObsession: 80, identityHorror: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 8.0, criticsScore: 96, audienceScore: 87, director: "Roman Polanski", 
        cast: ["Mia Farrow", "John Cassavetes"], boxOffice: "$33 million", budget: "$3.2 million", 
        dna: { "Horror": 50, "Psychological": 40, "Drama": 10 },
        scenes: [
            { time: 45, intensity: 85, label: "The Conception", color: "#991b1b" },
            { time: 90, intensity: 70, label: "Scrabble", color: "#f59e0b" },
            { time: 130, intensity: 100, label: "The Eyes", color: "#0f172a" }
        ],
        synopsis: "The grandmother of all 'Rich People Cult' movies. A young woman suspects her wealthy, polite neighbors are members of a Satanic coven who have designs on her unborn child.",
        themes: ["Gaslighting", "Cults", "Paranoia"]
    }),

    // 5. The Game
    2649: createMovieData({ 
        psychologicalIntensity: 90, artisticObsession: 50, identityHorror: 85, complexityLevel: "HIGH", 
        dominantColor: "#0f172a", rating: 7.8, criticsScore: 77, audienceScore: 84, director: "David Fincher", 
        cast: ["Michael Douglas", "Sean Penn"], boxOffice: "$109 million", budget: "$50 million", 
        dna: { "Thriller": 60, "Mystery": 30, "Action": 10 },
        scenes: [
            { time: 20, intensity: 40, label: "The Gift", color: "#0f172a" },
            { time: 85, intensity: 80, label: "The Cemetery", color: "#1e3a8a" },
            { time: 120, intensity: 100, label: "The Roof", color: "#dc2626" }
        ],
        synopsis: "A wealthy banker is stripped of his life, money, and sanity by a mysterious company. It explores the 'Elite Puppeteers' theme—the idea that powerful forces can manipulate your reality for their own amusement.",
        themes: ["Control", "Reality Warping", "Wealth"]
    }),

    // 6. Lost Highway
    638: createMovieData({ 
        psychologicalIntensity: 92, artisticObsession: 70, identityHorror: 100, complexityLevel: "EXTREME", 
        dominantColor: "#000000", rating: 7.6, criticsScore: 68, audienceScore: 80, director: "David Lynch", 
        cast: ["Bill Pullman", "Patricia Arquette"], boxOffice: "$3.7 million", budget: "$15 million", 
        dna: { "Surrealism": 50, "Noir": 30, "Horror": 20 },
        scenes: [
            { time: 20, intensity: 60, label: "Mystery Man", color: "#ffffff" },
            { time: 60, intensity: 90, label: "Transformation", color: "#991b1b" },
            { time: 120, intensity: 85, label: "Dick Laurent is Dead", color: "#000000" }
        ],
        synopsis: "A man is accused of murdering his wife, morphs into a different person, and lives a different life. A psychogenic fugue state film that shares the 'Jealousy and Infidelity' DNA of Eyes Wide Shut.",
        themes: ["Doppelgänger", "Infidelity", "Memory"]
    }),

    // 7. Society
    22244: createMovieData({ 
        psychologicalIntensity: 80, artisticObsession: 60, identityHorror: 95, complexityLevel: "MEDIUM", 
        dominantColor: "#b91c1c", rating: 6.5, criticsScore: 67, audienceScore: 60, director: "Brian Yuzna", 
        cast: ["Billy Warlock", "Devin DeVasquez"], boxOffice: "Unknown", budget: "$3 million", 
        dna: { "Horror": 50, "Satire": 40, "Sci-Fi": 10 },
        scenes: [
            { time: 40, intensity: 50, label: "The Tape", color: "#b91c1c" },
            { time: 85, intensity: 100, label: "The Shunting", color: "#991b1b" }
        ],
        synopsis: "The literal interpretation of 'The Rich Feed on the Poor.' A Beverly Hills teen suspects his wealthy family is part of a bizarre incestuous cult. The finale is infamous for its gross-out practical effects.",
        themes: ["Class Warfare", "Body Horror", "Elitism"]
    }),

    // 8. 8mm
    8224: createMovieData({ 
        psychologicalIntensity: 85, artisticObsession: 95, identityHorror: 40, complexityLevel: "MEDIUM", 
        dominantColor: "#3f3f46", rating: 6.6, criticsScore: 23, audienceScore: 60, director: "Joel Schumacher", 
        cast: ["Nicolas Cage", "Joaquin Phoenix"], boxOffice: "$96 million", budget: "$40 million", 
        dna: { "Thriller": 50, "Crime": 40, "Noir": 10 },
        scenes: [
            { time: 30, intensity: 60, label: "The Archive", color: "#3f3f46" },
            { time: 90, intensity: 95, label: "The Confrontation", color: "#dc2626" }
        ],
        synopsis: "A private investigator is hired by a wealthy widow to determine if a 'snuff film' found in her husband's safe is real. It explores the darkest perversions of the ultra-rich, much like the masked party in EWS.",
        themes: ["Snuff", "Moral Decay", "The Underground"]
    }),

    // 9. Get Out
    419430: createMovieData({ 
        psychologicalIntensity: 90, artisticObsession: 50, identityHorror: 95, complexityLevel: "HIGH", 
        dominantColor: "#14532d", rating: 7.8, criticsScore: 98, audienceScore: 86, director: "Jordan Peele", 
        cast: ["Daniel Kaluuya", "Allison Williams"], boxOffice: "$255 million", budget: "$4.5 million", 
        dna: { "Horror": 40, "Satire": 30, "Thriller": 30 },
        scenes: [
            { time: 30, intensity: 50, label: "Hypnosis", color: "#14532d" },
            { time: 85, intensity: 95, label: "The Auction", color: "#991b1b" },
            { time: 100, intensity: 100, label: "The Escape", color: "#dc2626" }
        ],
        synopsis: "A modern masterpiece about a secret society of wealthy white elites who hijack the bodies of young black people. It updates the 'Rosemary's Baby' paranoia for the 21st century.",
        themes: ["Racism", "Cults", "Body Snatching"]
    }),

    // 10. The Killing of a Sacred Deer
    399057: createMovieData({ 
        psychologicalIntensity: 88, artisticObsession: 60, identityHorror: 50, complexityLevel: "HIGH", 
        dominantColor: "#525252", rating: 7.0, criticsScore: 80, audienceScore: 63, director: "Yorgos Lanthimos", 
        cast: ["Colin Farrell", "Nicole Kidman"], boxOffice: "$7 million", budget: "$10 million", 
        dna: { "Psychological": 50, "Horror": 30, "Drama": 20 },
        scenes: [
            { time: 40, intensity: 60, label: "The Paralysis", color: "#525252" },
            { time: 100, intensity: 90, label: "Russian Roulette", color: "#991b1b" }
        ],
        synopsis: "A surgeon's perfect life is dismantled by a teenager with a supernatural ultimatum. Like Eyes Wide Shut, it features Nicole Kidman in a cold, high-society marriage under attack by forces they cannot understand.",
        themes: ["Karma", "Sacrifice", "Clinical Horror"]
    })
};

export const STRATEGIC_QUOTES = {
    1018: "It's the girl.",
    622: "Silence is golden.",
    793: "Heineken? Fuck that shit! Pabst Blue Ribbon!",
    805: "He has his father's eyes.",
    2649: "I don't care about the money. I'm pulling back the curtain.",
    638: "We've met before, haven't we?",
    22244: "The rich are different from us. They eat us.",
    8224: "If you dance with the devil, the devil don't change. The devil changes you.",
    419430: "You know I can't give you the keys, right babe?",
    399057: "It's a metaphor. It's symbolic."
};

export const CINEMATIC_COLORS = {
    "Psychological": "#e11d48", "Drama": "#334155", "Horror": "#991b1b", "Thriller": "#0f172a", 
    "Music": "#eab308", "Mystery": "#1e3a8a", "Animation": "#e11d48", "Crime": "#10b981", 
    "Comedy": "#c2410c", "Surrealism": "#db2777", "Noir": "#171717", "Satire": "#059669", 
    "Sci-Fi": "#2563eb", "Occult": "#78350f"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: 'Clean ticket - Solid entertainment' },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

export const EYES_WIDE_SHUT_MOVIE_FAQS = {
    'The Ninth Gate': [
        { 
            question: "Is the club in The Ninth Gate real?", 
            answer: "The 'Order of the Silver Dragon' is fictional, but it is heavily inspired by real-world conspiracy theories surrounding elite groups like the Hellfire Club. The film suggests that these societies exist to horde esoteric knowledge for power." 
        },
        { 
            question: "Did Dean Corso turn into a demon?", 
            answer: "Not literally. By the end, Corso has undergone an initiation. He enters the burning castle not as a victim, but as an enlightened equal to the forces he was investigating. He has 'walked through the Ninth Gate'." 
        }
    ],
    'Society': [
        { 
            question: "What is 'The Shunting'?", 
            answer: "The Shunting is a grotesque ritual where the wealthy elite of Beverly Hills literally merge their bodies together to feed on the poor. It is a viscous metaphor for how the upper class drains the life force of the lower class to maintain their power." 
        },
        { 
            question: "Is Society a comedy or horror?", 
            answer: "It is a satirical body horror. While the effects are disgusting (courtesy of Screaming Mad George), the film is a dark comedy mocking the lifestyle of the rich. It fits perfectly with Eyes Wide Shut's theme of hidden elite perversion." 
        }
    ],
    'Mulholland Drive': [
        { 
            question: "Why is Mulholland Drive similar to Eyes Wide Shut?", 
            answer: "Both films deal with the 'Secret Society' that runs the world. In Mulholland Drive, it is the mob and studio executives who decide who becomes a star. In Eyes Wide Shut, it is the masked elite. Both protagonists (Diane and Bill) are outsiders trying to penetrate a world that doesn't want them." 
        },
        { 
            question: "Who is the Cowboy?", 
            answer: "The Cowboy represents the 'System.' He is an enforcer for the hidden powers of Hollywood. When he tells Adam 'You will see me one more time if you do good,' he is asserting control. He is the surreal equivalent of the Red Cloak figure in Eyes Wide Shut." 
        }
    ],
    'The Game': [
        { 
            question: "Was everything in The Game fake?", 
            answer: "Yes, ostensibly. The film presents the events as an elaborate birthday prank staged by CRS (Consumer Recreation Services). However, the psychological trauma inflicted on Nicholas Van Orton is real. The film questions whether a 'simulated' near-death experience is any less valid if it changes your life." 
        }
    ],
    'Blue Velvet': [
        {
            question: "What does the severed ear symbolize?",
            answer: "The ear is the gateway into the underworld. Just as Bill Harford uses a password to enter the mansion in Eyes Wide Shut, Jeffrey Beaumont uses the ear to enter the dark, perverted world of Frank Booth. It represents the loss of innocence and the discovery of evil in mundane places."
        }
    ]
};

// HELPER FUNCTIONS (Preserving exact names)
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
        if (lowerType.includes('self-harm') || lowerType.includes('drug')) types.add('disturbing content');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return EYES_WIDE_SHUT_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A psychological thriller about secret societies.`,
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