// utils/donnieDarkoMovieData.js - MOVIES LIKE DONNIE DARKO COLLECTION 🌀
// Mind-bending films exploring time travel, alternate realities, and existential dread.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// ✅ HELPER: Donnie Darko Metrics (Streamlined)
const createMovieData = (data) => ({
  psychologicalIntensity: 90, // Mental Breakdown Factor
  mindBendScore: 90,          // Confusion/Plot Twist Factor
  dominantColor: "#000000",
  ...data,
});

// 1. MAIN MOVIE DATA (Graph Data + Analysis)
export const COMPLETE_MOVIE_DATA = {
    // 1. The Butterfly Effect
    1954: createMovieData({
        psychologicalIntensity: 95, mindBendScore: 85, complexityLevel: "HIGH",
        dominantColor: "#7c2d12", rating: 7.6, criticsScore: 33, audienceScore: 81, director: "Eric Bress",
        cast: ["Ashton Kutcher", "Amy Smart", "Elden Henson"], boxOffice: "$96.1 million", budget: "$13 million",
        dna: { "Sci-Fi": 50, "Thriller": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Blackouts", color: "#7c2d12" },
            { time: 35, intensity: 65, label: "First Jump", color: "#92400e" },
            { time: 65, intensity: 80, label: "Prison Timeline", color: "#b45309" },
            { time: 90, intensity: 95, label: "No Arms", color: "#d97706" },
            { time: 110, intensity: 85, label: "Final Choice", color: "#f59e0b" }
        ],
        synopsis: "Evan Treborn suffers from blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal. But every time he changes the past, the future changes in horrifying ways. A dark exploration of chaos theory and the price of playing God.",
        themes: ["Chaos Theory", "Trauma", "Fate", "Sacrifice"]
    }),

    // 2. 12 Monkeys
    63: createMovieData({
        psychologicalIntensity: 92, mindBendScore: 95, complexityLevel: "EXTREME",
        dominantColor: "#422006", rating: 8.0, criticsScore: 88, audienceScore: 90, director: "Terry Gilliam",
        cast: ["Bruce Willis", "Brad Pitt", "Madeleine Stowe"], boxOffice: "$168.8 million", budget: "$29.5 million",
        dna: { "Sci-Fi": 50, "Thriller": 30, "Mystery": 20 },
        scenes: [
            { time: 20, intensity: 55, label: "Future Prison", color: "#422006" },
            { time: 50, intensity: 70, label: "The Asylum", color: "#78350f" },
            { time: 85, intensity: 80, label: "The Army", color: "#92400e" },
            { time: 110, intensity: 90, label: "The Airport", color: "#b45309" },
            { time: 125, intensity: 95, label: "The Loop", color: "#d97706" }
        ],
        synopsis: "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet. He is haunted by a recurring dream of an airport shooting that holds the key to his sanity and the fate of the world.",
        themes: ["Time Loops", "Madness", "Pandemic", "Cassandra Complex"]
    }),

    // 3. The Jacket
    9667: createMovieData({
        psychologicalIntensity: 88, mindBendScore: 80, complexityLevel: "HIGH",
        dominantColor: "#164e63", rating: 7.1, criticsScore: 44, audienceScore: 74, director: "John Maybury",
        cast: ["Adrien Brody", "Keira Knightley", "Daniel Craig"], boxOffice: "$6.7 million", budget: "$29 million",
        dna: { "Thriller": 50, "Sci-Fi": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 45, label: "The Gulf War", color: "#164e63" },
            { time: 30, intensity: 70, label: "The Morgue", color: "#0e7490" },
            { time: 55, intensity: 85, label: "Time Travel", color: "#06b6d4" },
            { time: 75, intensity: 90, label: "Meeting Jackie", color: "#22d3ee" },
            { time: 100, intensity: 80, label: "The Letter", color: "#67e8f9" }
        ],
        synopsis: "A Gulf war veteran is wrongly sent to a mental institution for insane criminals, where he becomes the object of a doctor's experiments. Locked in a straight-jacket and placed in a morgue drawer, he travels to the future where he can foresee his death and must solve his own murder before it happens.",
        themes: ["Fate", "Trauma", "Time Travel", "Redemption"]
    }),

    // 4. Open Your Eyes
    1902: createMovieData({
        psychologicalIntensity: 90, mindBendScore: 95, complexityLevel: "EXTREME",
        dominantColor: "#831843", rating: 7.7, criticsScore: 84, audienceScore: 85, director: "Alejandro Amenábar",
        cast: ["Eduardo Noriega", "Penélope Cruz", "Fele Martínez"], boxOffice: "$7.2 million", budget: "$2.3 million",
        dna: { "Sci-Fi": 50, "Mystery": 30, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Party", color: "#831843" },
            { time: 40, intensity: 65, label: "The Crash", color: "#9d174d" },
            { time: 70, intensity: 80, label: "Lucid Dream", color: "#be185d" },
            { time: 95, intensity: 90, label: "The Glitch", color: "#db2777" },
            { time: 115, intensity: 95, label: "The Leap", color: "#f472b6" }
        ],
        synopsis: "A handsome man finds the love of his life, but suffers an accident and needs to have his face rebuilt by surgery after it is severely disfigured. But his reality begins to warp as he realizes he may be living in a cryogenic dream state where his subconscious is turning into a nightmare.",
        themes: ["Reality vs Dream", "Vanity", "Immortality", "Subconscious"]
    }),

    // 5. Coherence
    220289: createMovieData({
        psychologicalIntensity: 85, mindBendScore: 100, complexityLevel: "EXTREME",
        dominantColor: "#312e81", rating: 7.2, criticsScore: 88, audienceScore: 82, director: "James Ward Byrkit",
        cast: ["Emily Baldoni", "Maury Sterling", "Nicholas Brendon"], boxOffice: "$100k", budget: "$50k",
        dna: { "Sci-Fi": 60, "Thriller": 25, "Mystery": 15 },
        scenes: [
            { time: 10, intensity: 30, label: "The Dinner", color: "#312e81" },
            { time: 25, intensity: 55, label: "The Comet", color: "#3730a3" },
            { time: 50, intensity: 75, label: "Schrodinger's Cat", color: "#4338ca" },
            { time: 70, intensity: 90, label: "The House", color: "#4f46e5" },
            { time: 85, intensity: 95, label: "The Replacement", color: "#6366f1" }
        ],
        synopsis: "Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead. They discover that the comet has shattered reality into multiple quantum coherence states, leading to doppelgangers and a fight for survival across timelines.",
        themes: ["Quantum Mechanics", "Identity", "Paranoia", "Multiverse"]
    }),

    // 6. Jacob's Ladder
    2291: createMovieData({
        psychologicalIntensity: 98, mindBendScore: 90, complexityLevel: "EXTREME",
        dominantColor: "#7c2d12", rating: 7.4, criticsScore: 73, audienceScore: 83, director: "Adrian Lyne",
        cast: ["Tim Robbins", "Elizabeth Peña", "Danny Aiello"], boxOffice: "$26.1 million", budget: "$25 million",
        dna: { "Horror": 50, "Thriller": 30, "Mystery": 20 },
        scenes: [
            { time: 15, intensity: 55, label: "Vietnam Flashback", color: "#7c2d12" },
            { time: 40, intensity: 70, label: "The Subway", color: "#92400e" },
            { time: 65, intensity: 85, label: "The Party", color: "#b45309" },
            { time: 90, intensity: 95, label: "The Hospital", color: "#d97706" },
            { time: 110, intensity: 75, label: "Ascension", color: "#f59e0b" }
        ],
        synopsis: "Mourning his dead child, a haunted Vietnam War veteran attempts to uncover his past while suffering from a severe case of dissociation. To do so, he must decipher reality and life from his own dreams, delusions, and perceptions of death. A nightmarish descent into purgatory.",
        themes: ["Purgatory", "PTSD", "Government Conspiracy", "Death"]
    }),

    // 7. Dark City
    2666: createMovieData({
        psychologicalIntensity: 87, mindBendScore: 92, complexityLevel: "HIGH",
        dominantColor: "#0f172a", rating: 7.6, criticsScore: 76, audienceScore: 85, director: "Alex Proyas",
        cast: ["Rufus Sewell", "Kiefer Sutherland", "Jennifer Connelly"], boxOffice: "$27.2 million", budget: "$27 million",
        dna: { "Sci-Fi": 50, "Mystery": 30, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 60, label: "Waking Up", color: "#0f172a" },
            { time: 30, intensity: 70, label: "The Tuning", color: "#1e293b" },
            { time: 60, intensity: 80, label: "Shell Beach", color: "#334155" },
            { time: 85, intensity: 90, label: "The Battle", color: "#475569" },
            { time: 98, intensity: 95, label: "Sunlight", color: "#64748b" }
        ],
        synopsis: "A man struggles with memories of his past, including a wife he cannot remember, in a nightmarish world with no sun and run by beings with telekinetic powers who seek the souls of humans. He discovers he has the power to reshape reality itself, leading to a confrontation with the city's controllers.",
        themes: ["Identity", "Memory", "Simulation", "Free Will"]
    }),

    // 8. Mulholland Drive
    1018: createMovieData({
        psychologicalIntensity: 98, mindBendScore: 100, complexityLevel: "MASTERPIECE",
        dominantColor: "#be185d", rating: 7.9, criticsScore: 84, audienceScore: 87, director: "David Lynch",
        cast: ["Naomi Watts", "Laura Harring", "Justin Theroux"], boxOffice: "$20.1 million", budget: "$15 million",
        dna: { "Mystery": 50, "Thriller": 30, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "The Accident", color: "#be185d" },
            { time: 60, intensity: 65, label: "The Audition", color: "#db2777" },
            { time: 100, intensity: 80, label: "Club Silencio", color: "#ec4899" },
            { time: 125, intensity: 95, label: "The Blue Box", color: "#f472b6" },
            { time: 145, intensity: 100, label: "Reality Collapse", color: "#f9a8d4" }
        ],
        synopsis: "After a car wreck on the winding Mulholland Drive renders a woman amnesiac, she and a perky Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality. A surreal exploration of the dark side of Hollywood ambition.",
        themes: ["Hollywood Nightmare", "Identity", "Dream Logic", "Guilt"]
    }),

    // 9. Eternal Sunshine of the Spotless Mind
    38: createMovieData({
        psychologicalIntensity: 83, mindBendScore: 85, complexityLevel: "HIGH",
        dominantColor: "#0284c7", rating: 8.3, criticsScore: 92, audienceScore: 94, director: "Michel Gondry",
        cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"], boxOffice: "$74 million", budget: "$20 million",
        dna: { "Romance": 50, "Sci-Fi": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 45, label: "Meet Cute", color: "#0284c7" },
            { time: 40, intensity: 65, label: "The Procedure", color: "#0ea5e9" },
            { time: 70, intensity: 80, label: "Childhood", color: "#38bdf8" },
            { time: 95, intensity: 90, label: "The House", color: "#7dd3fc" },
            { time: 105, intensity: 70, label: "Montauk", color: "#bae6fd" }
        ],
        synopsis: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories. But it is only through the process of loss that they discover what they had to begin with. A poignant sci-fi romance about the inevitability of love and pain.",
        themes: ["Memory", "Love", "Regret", "Fate"]
    }),

    // 10. Enemy
    181886: createMovieData({
        psychologicalIntensity: 91, mindBendScore: 95, complexityLevel: "EXTREME",
        dominantColor: "#854d0e", rating: 6.9, criticsScore: 71, audienceScore: 66, director: "Denis Villeneuve",
        cast: ["Jake Gyllenhaal", "Mélanie Laurent", "Sarah Gadon"], boxOffice: "$3.4 million", budget: "$9 million",
        dna: { "Thriller": 50, "Mystery": 30, "Psychological": 20 },
        scenes: [
            { time: 10, intensity: 40, label: "The Movie", color: "#854d0e" },
            { time: 30, intensity: 65, label: "The Call", color: "#a16207" },
            { time: 55, intensity: 80, label: "The Meeting", color: "#ca8a04" },
            { time: 75, intensity: 90, label: "The Swap", color: "#eab308" },
            { time: 88, intensity: 95, label: "The Spider", color: "#facc15" }
        ],
        synopsis: "A man seeks out his exact look-alike after spotting him in a movie. As their lives intertwine, he uncovers a terrifying web of deceit and subconscious desire. A surreal, Kafkaesque nightmare about identity, infidelity, and the darker side of the self.",
        themes: ["Doppelganger", "Identity", "Subconscious", "Totalitarianism"]
    })
};

// 2. SENSITIVE TIMELINES (Schema Data)
export const SENSITIVE_TIMELINES = {
    1954: { scenes: [{ start: '0:15:20', end: '0:16:45', type: 'Nudity', severity: 'Moderate' }, { start: '0:42:10', end: '0:43:30', type: 'Sex scene', severity: 'Strong' }] },
    63: { scenes: [{ start: '1:22:15', end: '1:22:45', type: 'Partial nudity', severity: 'Mild' }] },
    9667: { scenes: [{ start: '0:28:40', end: '0:30:15', type: 'Sex scene', severity: 'Strong' }] },
    1902: { scenes: [{ start: '0:35:15', end: '0:37:40', type: 'Sex scene', severity: 'Strong' }] },
    220289: { scenes: [] }, // Clean
    2291: { scenes: [{ start: '0:42:30', end: '0:43:15', type: 'Sexual content', severity: 'Moderate' }] },
    2666: { scenes: [{ start: '0:52:10', end: '0:53:45', type: 'Implied nudity', severity: 'Mild' }] },
    1018: { scenes: [{ start: '1:38:45', end: '1:42:55', type: 'Nudity', severity: 'High' }] },
    38: { scenes: [{ start: '0:42:30', end: '0:43:20', type: 'Partial nudity', severity: 'Mild' }] },
    181886: { scenes: [{ start: '0:45:20', end: '0:47:35', type: 'Sex scene', severity: 'Strong' }] }
};

// 3. FAQS
export const DONNIE_DARKO_MOVIE_FAQS = {
    'The Butterfly Effect': [
        { question: "What are the different endings?", answer: "The theatrical cut ends with Evan passing Kayleigh on the street. The Director's Cut is darker: Evan travels back to the womb and strangles himself to save everyone." },
        { question: "Is it scientifically accurate?", answer: "It uses Chaos Theory concepts but applies them to magic realism. The 'butterfly effect' is real in weather systems, but time travel via journals is pure fiction." }
    ],
    '12 Monkeys': [
        { question: "Is it a time loop?", answer: "Yes. Cole's death at the airport is the event he witnessed as a child. He cannot change the past; he can only fulfill it." },
        { question: "Is Cole insane?", answer: "The film plays with this ambiguity, but ultimately proves the time travel is real through the voicemail message and the bullet wound trick." }
    ],
    'The Jacket': [
        { question: "Is he dead the whole time?", answer: "Interpretations vary. Some believe the entire movie is his dying hallucination in the Gulf War. Others believe the time travel is real." },
        { question: "What is the jacket therapy based on?", answer: "It is fictional, but inspired by real sensory deprivation experiments and the horrors of institutional abuse in the mid-20th century." }
    ],
    'Open Your Eyes': [
        { question: "Is it a dream?", answer: "Yes. The second half of the film is a lucid dream created by Life Extension while his body is cryogenically frozen." },
        { question: "How does it differ from Vanilla Sky?", answer: "The Spanish original is grittier and more ambiguous. Vanilla Sky (the remake) explains the plot more explicitly and has a more Hollywood tone." }
    ],
    'Coherence': [
        { question: "What is the comet doing?", answer: "It is causing quantum decoherence, allowing multiple parallel realities to overlap in the same physical space." },
        { question: "Which Em survives?", answer: "The Em we follow kills her alternate self to take over her 'better' life, but the final call reveals she may not be the only one who had that idea." }
    ],
    "Jacob's Ladder": [
        { question: "Is Jacob dead?", answer: "Yes. He died in Vietnam at the beginning. The entire movie is his soul's struggle to let go of his earthly attachments (his son, his wife) so he can ascend." },
        { question: "What are the demons?", answer: "As the chiropractor says: 'If you're frightened of dying... you'll see devils tearing your life away. But if you've made your peace... the devils are really angels freeing you.'" }
    ],
    'Dark City': [
        { question: "Are they in space?", answer: "Yes. The city is a flat construct floating in space, contained within a force field, built by aliens to study human souls." },
        { question: "Did it inspire The Matrix?", answer: "Yes. The Matrix actually reused some of Dark City's sets. Both films explore simulated reality, but Dark City is more Noir/Fantasy while Matrix is Cyberpunk." }
    ],
    'Mulholland Drive': [
        { question: "What is the blue box?", answer: "It represents the truth. Opening it destroys the fantasy world Diane has created (where she is Betty) and forces her to face the reality of her failed life and crimes." },
        { question: "Who is the cowboy?", answer: "He represents the Hollywood system—a mystical enforcer who ensures the 'script' plays out as intended, stripping Diane of her agency." }
    ],
    'Eternal Sunshine of the Spotless Mind': [
        { question: "Do they get back together?", answer: "Yes, but the ending implies they might break up again. The cycle of love and pain is inevitable, but they decide it is worth it anyway." },
        { question: "Is Montauk significant?", answer: "Montauk is the end of the line (physically on Long Island). It represents the edge of memory and the place where they first met (and meet again)." }
    ],
    'Enemy': [
        { question: "What does the spider mean?", answer: "The spider represents the totalitarian control of the state, or potentially women/motherhood as a trap for the protagonist's freedom. It is surreal symbolism for entrapment." },
        { question: "Are they the same person?", answer: "Yes. Anthony and Adam are likely dissociative splits of the same man—one represents his desire for affairs (the actor), the other his domestic responsibility (the teacher)." }
    ]
};

// 4. STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    1954: "You can't change who people are without destroying who they were.",
    63: "There's no right, there's no wrong, there's only popular opinion.",
    9667: "I was 27 years old the first time I died.",
    1902: "Open your eyes.",
    220289: "We're the dark version of ourselves.",
    2291: "The only thing that burns in Hell is the part of you that won't let go of life.",
    2666: "Sleep... now.",
    1018: "Silencio.",
    38: "Blessed are the forgetful, for they get the better even of their blunders.",
    181886: "Chaos is order yet undeciphered."
};

// 5. COLORS
export const CINEMATIC_COLORS = {
    "Sci-Fi": "#0ea5e9", "Thriller": "#dc2626", "Mystery": "#8b5cf6", "Drama": "#f59e0b", "Horror": "#9f1239", "Romance": "#ec4899"
};

// 6. RATING OPTIONS
export const RATING_OPTIONS = [
    { value: 1, label: "Confused", color: "#dc2626", symbol: "😵", bgColor: "bg-red-900/30", description: "Too confusing" },
    { value: 2, label: "Trippy", color: "#ea580c", symbol: "🌀", bgColor: "bg-orange-900/30", description: "Good mind-bender" },
    { value: 3, label: "Mind-Blowing", color: "#16a34a", symbol: "🤯", bgColor: "bg-green-900/30", description: "Excellent writing" },
    { value: 4, label: "Masterpiece", color: "#eab308", symbol: "🐇", bgColor: "bg-yellow-900/30", description: "Donnie Darko level" }
];

// 7. DATABASE LIST
export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 1954, imdbID: 'tt0289879', Title: 'The Butterfly Effect', year: 2004, genre: 'Sci-Fi', runtime: 113, rank: 1 },
    { tmdbId: 63, imdbID: 'tt0114746', Title: '12 Monkeys', year: 1995, genre: 'Sci-Fi', runtime: 129, rank: 2 },
    { tmdbId: 9667, imdbID: 'tt0366627', Title: 'The Jacket', year: 2005, genre: 'Thriller', runtime: 103, rank: 3 },
    { tmdbId: 1902, imdbID: 'tt0125659', Title: 'Open Your Eyes', year: 1997, genre: 'Sci-Fi', runtime: 119, rank: 4 },
    { tmdbId: 220289, imdbID: 'tt2866360', Title: 'Coherence', year: 2013, genre: 'Sci-Fi', runtime: 89, rank: 5 },
    { tmdbId: 2291, imdbID: 'tt0099871', Title: "Jacob's Ladder", year: 1990, genre: 'Horror', runtime: 113, rank: 6 },
    { tmdbId: 2666, imdbID: 'tt0118929', Title: 'Dark City', year: 1998, genre: 'Sci-Fi', runtime: 100, rank: 7 },
    { tmdbId: 1018, imdbID: 'tt0166924', Title: 'Mulholland Drive', year: 2001, genre: 'Mystery', runtime: 147, rank: 8 },
    { tmdbId: 38, imdbID: 'tt0338013', Title: 'Eternal Sunshine of the Spotless Mind', year: 2004, genre: 'Sci-Fi', runtime: 108, rank: 9 },
    { tmdbId: 181886, imdbID: 'tt2316411', Title: 'Enemy', year: 2013, genre: 'Thriller', runtime: 91, rank: 10 }
];

// 8. UTILITY FUNCTIONS
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
        if (lowerType.includes('sex') || lowerType.includes('kiss')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('violence') || lowerType.includes('gore')) types.add('graphic violence');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return DONNIE_DARKO_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title
    };
};

export const fetchMovieFromTMDB = async (tmdbId) => ({ poster_path: null, title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' });
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