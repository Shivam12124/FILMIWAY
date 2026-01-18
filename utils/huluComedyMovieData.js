// utils/huluComedyMovieData.js - HULU COMEDY COLLECTION DATA
// Ranked by Laughter, Quotability, and Chaos

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 8363, "imdbID": "tt0829482", "Title": "Superbad", "year": 2007, "genre": "Comedy", "runtime": 113, "rank": 1 },
    { "tmdbId": 13389, "imdbID": "tt0190590", "Title": "O Brother, Where Art Thou?", "year": 2000, "genre": "Comedy", "runtime": 107, "rank": 2 },
    { "tmdbId": 3779, "imdbID": "tt0443453", "Title": "Borat", "year": 2006, "genre": "Comedy", "runtime": 84, "rank": 3 },
    { "tmdbId": 718930, "imdbID": "tt12593682", "Title": "Bullet Train", "year": 2022, "genre": "Action", "runtime": 127, "rank": 4 },
    { "tmdbId": 587792, "imdbID": "tt8385738", "Title": "Palm Springs", "year": 2020, "genre": "Comedy", "runtime": 90, "rank": 5 },
    { "tmdbId": 39939, "imdbID": "tt0247745", "Title": "Super Troopers", "year": 2001, "genre": "Comedy", "runtime": 100, "rank": 6 },
    { "tmdbId": 1105822, "imdbID": "tt27995662", "Title": "Twinless", "year": 2025, "genre": "Comedy", "runtime": 98, "rank": 7 }, // Estimated ID for new release
    { "tmdbId": 2280, "imdbID": "tt0094737", "Title": "Big", "year": 1988, "genre": "Comedy", "runtime": 104, "rank": 8 },
    { "tmdbId": 1002315, "imdbID": "tt21376880", "Title": "Theater Camp", "year": 2023, "genre": "Comedy", "runtime": 93, "rank": 9 },
    { "tmdbId": 2045, "imdbID": "tt0387808", "Title": "Idiocracy", "year": 2006, "genre": "Comedy", "runtime": 84, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Comedy Edition: Crude Humor, Drug Use, Nudity)
export const SENSITIVE_TIMELINES = {
    // 1. Superbad
    8363: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Crude Drawings", severity: "Moderate" },
            { start: "1:20:00", end: "1:25:00", type: "Period Blood Scene", severity: "High" }
        ] 
    },
    // 2. O Brother, Where Art Thou?
    13389: { scenes: [] }, // Mostly clean, some violence
    // 3. Borat
    3779: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Full Frontal Male Nudity (Fight)", severity: "Extreme" }
        ] 
    },
    // 4. Bullet Train
    718930: { 
        scenes: [
            { start: "0:55:00", end: "1:00:00", type: "Bloody Violence", severity: "High" }
        ] 
    },
    // 5. Palm Springs
    587792: { scenes: [] },
    // 6. Super Troopers
    39939: { 
        scenes: [
            { start: "0:01:00", end: "0:05:00", type: "Drug Humor", severity: "Moderate" }
        ] 
    },
    // 7. Twinless (New Release Placeholder)
    1105822: { scenes: [] },
    // 8. Big
    2280: { scenes: [] },
    // 9. Theater Camp
    1002315: { scenes: [] },
    // 10. Idiocracy
    2045: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Crude Language", severity: "Mild" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    8363: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJnhq.jpg",
    13389: "https://image.tmdb.org/t/p/w500/min5Q6Xo3Xj8B86629K9qfD0Q5.jpg",
    3779: "https://image.tmdb.org/t/p/w500/y1Z77dY1jYdc2Jg6Y3B6S77Z.jpg",
    718930: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaPETYiXe2FOUVy.jpg",
    587792: "https://image.tmdb.org/t/p/w500/1SBNmo4JG2ziZFnXA23jJ2Sbd.jpg",
    39939: "https://image.tmdb.org/t/p/w500/3s9Y5w27dGHX03aA7Y5W6v.jpg",
    1105822: "https://image.tmdb.org/t/p/w500/placeholder.jpg", // Placeholder for Twinless
    2280: "https://image.tmdb.org/t/p/w500/ur1593c.jpg",
    1002315: "https://image.tmdb.org/t/p/w500/3X.jpg",
    2045: "https://image.tmdb.org/t/p/w500/gZ.jpg"
};

// ✅ HELPER: Comedy Specific Metrics
// psychologicalIntensity -> Laughter Index
// destructiveObsession -> Chaos Factor
// visceralImpact -> Quotability Score
const createMovieData = (data) => ({
    psychologicalIntensity: 85, // Maps to Laughter
    destructiveObsession: 70,   // Maps to Chaos
    visceralImpact: 90,         // Maps to Quotability
    complexityLevel: "HIGH",
    dominantColor: "#FACC15",   // Comedy Yellow
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Superbad
    8363: createMovieData({ 
        psychologicalIntensity: 98, destructiveObsession: 85, visceralImpact: 100, complexityLevel: "LEGENDARY", 
        dominantColor: "#ef4444", rating: 7.6, criticsScore: 88, audienceScore: 87, director: "Greg Mottola", 
        cast: ["Jonah Hill", "Michael Cera"], boxOffice: "$170 million", budget: "$20 million", 
        dna: { "Comedy": 70, "Coming of Age": 30 },
        scenes: [
            { time: 10, intensity: 60, label: "The Plan", color: "#facc15" },
            { time: 40, intensity: 95, label: "McLovin ID", color: "#ef4444" },
            { time: 70, intensity: 85, label: "The Party", color: "#f97316" },
            { time: 90, intensity: 80, label: "The Fight", color: "#dc2626" },
            { time: 110, intensity: 70, label: "Escalator", color: "#eab308" }
        ],
        synopsis: "The definitive teen comedy of the 2000s. Two co-dependent high school seniors are forced to deal with separation anxiety as their quest to get alcohol for a party goes hilariously wrong.",
        themes: ["Friendship", "Growing Up", "Partying"]
    }),

    // 2. O Brother, Where Art Thou?
    13389: createMovieData({ 
        psychologicalIntensity: 90, destructiveObsession: 75, visceralImpact: 95, complexityLevel: "MASTERPIECE", 
        dominantColor: "#ca8a04", rating: 7.7, criticsScore: 79, audienceScore: 89, director: "Joel Coen", 
        cast: ["George Clooney", "John Turturro"], boxOffice: "$71 million", budget: "$26 million", 
        dna: { "Comedy": 50, "Adventure": 30, "Music": 20 },
        scenes: [
            { time: 15, intensity: 60, label: "Chain Gang Escape", color: "#a16207" },
            { time: 45, intensity: 90, label: "We Thought You Was A Toad", color: "#ca8a04" },
            { time: 70, intensity: 85, label: "The Sirens", color: "#d97706" },
            { time: 90, intensity: 95, label: "Man of Constant Sorrow", color: "#b45309" },
            { time: 100, intensity: 80, label: "The Flood", color: "#854d0e" }
        ],
        synopsis: "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. A visually stunning, hilariously quoted adaptation of The Odyssey.",
        themes: ["Redemption", "Folk Music", "Americana"]
    }),

    // 3. Borat
    3779: createMovieData({ 
        psychologicalIntensity: 95, destructiveObsession: 98, visceralImpact: 98, complexityLevel: "CHAOTIC", 
        dominantColor: "#fcd34d", rating: 7.4, criticsScore: 91, audienceScore: 79, director: "Larry Charles", 
        cast: ["Sacha Baron Cohen"], boxOffice: "$262 million", budget: "$18 million", 
        dna: { "Satire": 60, "Mockumentary": 40 },
        scenes: [
            { time: 10, intensity: 70, label: "New York", color: "#facc15" },
            { time: 40, intensity: 95, label: "The Hotel Fight", color: "#ef4444" },
            { time: 60, intensity: 85, label: "The Rodeo", color: "#f97316" },
            { time: 75, intensity: 90, label: "Pamela", color: "#dc2626" },
            { time: 80, intensity: 60, label: "Homecoming", color: "#fbbf24" }
        ],
        synopsis: "Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. Unscripted chaos that exposed the prejudices and absurdities of modern America.",
        themes: ["Culture Clash", "Satire", "Prejudice"]
    }),

    // 4. Bullet Train
    718930: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 80, visceralImpact: 85, complexityLevel: "ACTION-PACKED", 
        dominantColor: "#ec4899", rating: 7.3, criticsScore: 54, audienceScore: 76, director: "David Leitch", 
        cast: ["Brad Pitt", "Joey King"], boxOffice: "$239 million", budget: "$90 million", 
        dna: { "Action": 50, "Comedy": 50 },
        scenes: [
            { time: 20, intensity: 75, label: "The Briefcase", color: "#db2777" },
            { time: 50, intensity: 85, label: "Quiet Car Fight", color: "#be123c" },
            { time: 80, intensity: 90, label: "Snake on a Train", color: "#9d174d" },
            { time: 110, intensity: 95, label: "The Crash", color: "#831843" },
            { time: 120, intensity: 60, label: "Lemon", color: "#f472b6" }
        ],
        synopsis: "Five assassins aboard a fast moving bullet train find out their missions have something in common. Stylish, fast-paced, and hilarious violence from the director of Deadpool 2.",
        themes: ["Fate", "Luck", "Assassins"]
    }),

    // 5. Palm Springs
    587792: createMovieData({ 
        psychologicalIntensity: 88, destructiveObsession: 70, visceralImpact: 85, complexityLevel: "SMART", 
        dominantColor: "#34d399", rating: 7.4, criticsScore: 94, audienceScore: 88, director: "Max Barbakow", 
        cast: ["Andy Samberg", "Cristin Milioti"], boxOffice: "Streaming", budget: "$5 million", 
        dna: { "Sci-Fi": 40, "Romance": 30, "Comedy": 30 },
        scenes: [
            { time: 15, intensity: 50, label: "The Cave", color: "#10b981" },
            { time: 40, intensity: 80, label: "Waking Up", color: "#059669" },
            { time: 60, intensity: 85, label: "Montage", color: "#047857" },
            { time: 80, intensity: 75, label: "The Realization", color: "#065f46" },
            { time: 85, intensity: 90, label: "The Escape", color: "#34d399" }
        ],
        synopsis: "When Nyles and Sarah get stuck in a time loop at a Palm Springs wedding, they must live the same day over and over again. A fresh, existential take on the Groundhog Day formula.",
        themes: ["Existentialism", "Love", "Time Loops"]
    }),

    // 6. Super Troopers
    39939: createMovieData({ 
        psychologicalIntensity: 90, destructiveObsession: 60, visceralImpact: 95, complexityLevel: "CULT CLASSIC", 
        dominantColor: "#1d4ed8", rating: 7.0, criticsScore: 36, audienceScore: 90, director: "Jay Chandrasekhar", 
        cast: ["Broken Lizard"], boxOffice: "$23 million", budget: "$1.2 million", 
        dna: { "Comedy": 80, "Crime": 20 },
        scenes: [
            { time: 5, intensity: 85, label: "The Opening Stop", color: "#2563eb" },
            { time: 30, intensity: 80, label: "Meow Game", color: "#1d4ed8" },
            { time: 50, intensity: 75, label: "Syrup Chug", color: "#1e40af" },
            { time: 80, intensity: 70, label: "Farva's Shenanigans", color: "#1e3a8a" },
            { time: 95, intensity: 60, label: "The Bust", color: "#3b82f6" }
        ],
        synopsis: "Five Vermont state troopers, avid pranksters with a knack for screwing up, try to save their jobs and outdo the local police department by solving a crime. Highly quotable stoner comedy.",
        themes: ["Pranks", "Police", "Rivalry"]
    }),

    // 7. Twinless (New Release)
    1105822: createMovieData({ 
        psychologicalIntensity: 80, destructiveObsession: 75, visceralImpact: 80, complexityLevel: "FRESH", 
        dominantColor: "#8b5cf6", rating: 7.0, criticsScore: 85, audienceScore: 80, director: "James Griffiths", 
        cast: ["Dylan O'Brien", "James Sweeney"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Comedy": 60, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 60, label: "The Loss", color: "#a78bfa" },
            { time: 40, intensity: 75, label: "Support Group", color: "#8b5cf6" },
            { time: 60, intensity: 80, label: "Bonding", color: "#7c3aed" },
            { time: 80, intensity: 85, label: "The Twist", color: "#6d28d9" },
            { time: 90, intensity: 70, label: "Acceptance", color: "#5b21b6" }
        ],
        synopsis: "Two young men form an unlikely bromance after meeting in a support group for twinless twins. A dark, funny, and surprisingly sweet exploration of grief and identity.",
        themes: ["Grief", "Bromance", "Identity"]
    }),

    // 8. Big
    2280: createMovieData({ 
        psychologicalIntensity: 75, destructiveObsession: 50, visceralImpact: 85, complexityLevel: "NOSTALGIC", 
        dominantColor: "#3b82f6", rating: 7.3, criticsScore: 98, audienceScore: 89, director: "Penny Marshall", 
        cast: ["Tom Hanks", "Elizabeth Perkins"], boxOffice: "$151 million", budget: "$18 million", 
        dna: { "Comedy": 50, "Fantasy": 30, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 60, label: "Zoltar", color: "#60a5fa" },
            { time: 40, intensity: 85, label: "Giant Piano", color: "#3b82f6" },
            { time: 60, intensity: 70, label: "The Loft", color: "#2563eb" },
            { time: 85, intensity: 65, label: "Business Pitch", color: "#1d4ed8" },
            { time: 100, intensity: 80, label: "Going Home", color: "#1e40af" }
        ],
        synopsis: "After wishing to be made big, a teenage boy wakes up the next morning to find himself mysteriously in the body of an adult. A heartwarming classic that features Tom Hanks at his most charming.",
        themes: ["Childhood", "Innocence", "Corporate Life"]
    }),

    // 9. Theater Camp
    1002315: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 80, visceralImpact: 88, complexityLevel: "MOCKUMENTARY", 
        dominantColor: "#f43f5e", rating: 7.0, criticsScore: 86, audienceScore: 80, director: "Molly Gordon", 
        cast: ["Ben Platt", "Molly Gordon"], boxOffice: "$4 million", budget: "N/A", 
        dna: { "Comedy": 80, "Musical": 20 },
        scenes: [
            { time: 10, intensity: 65, label: "Auditions", color: "#fb7185" },
            { time: 40, intensity: 80, label: "Rehearsal Chaos", color: "#f43f5e" },
            { time: 70, intensity: 75, label: "Crypto Bro", color: "#e11d48" },
            { time: 85, intensity: 90, label: "Opening Night", color: "#be123c" },
            { time: 90, intensity: 85, label: "The Show", color: "#9f1239" }
        ],
        synopsis: "The eccentric staff of a rundown theater camp in upstate New York must band together with the beloved founder's crypto-bro son to keep the camp afloat. A hilarious mockumentary for theater kids everywhere.",
        themes: ["Theater", "Passion", "Saving the Arts"]
    }),

    // 10. Idiocracy
    2045: createMovieData({ 
        psychologicalIntensity: 80, destructiveObsession: 60, visceralImpact: 90, complexityLevel: "SATIRE", 
        dominantColor: "#eab308", rating: 6.5, criticsScore: 71, audienceScore: 60, director: "Mike Judge", 
        cast: ["Luke Wilson", "Maya Rudolph"], boxOffice: "$0.5 million", budget: "$2 million", 
        dna: { "Sci-Fi": 40, "Comedy": 60 },
        scenes: [
            { time: 10, intensity: 60, label: "Hibernation", color: "#facc15" },
            { time: 30, intensity: 85, label: "Welcome to Costco", color: "#eab308" },
            { time: 50, intensity: 90, label: "It Has Electrolytes", color: "#ca8a04" },
            { time: 75, intensity: 80, label: "The Trial", color: "#a16207" },
            { time: 80, intensity: 70, label: "President Camacho", color: "#854d0e" }
        ],
        synopsis: "Private Joe Bauers is selected for a hibernation experiment but wakes up 500 years in the future to find he is the smartest man alive in a society that has dumbed down significantly. A cult classic satire that feels more like a documentary every year.",
        themes: ["Dystopia", "Commercialism", "Intelligence"]
    })
};

export const STRATEGIC_QUOTES = {
    8363: "I am McLovin.",
    13389: "We thought you was a toad!",
    3779: "Very nice!",
    718930: "Diesel is a diesel.",
    587792: "Today, tomorrow, it's all the same.",
    39939: "The snozberries taste like snozberries.",
    1105822: "We are the twinless.",
    2280: "I wish I were big.",
    1002315: "Joan, still.",
    2045: "It's got electrolytes."
};

export const CINEMATIC_COLORS = {
    "Comedy": "#facc15", "Action": "#ef4444", "Sci-Fi": "#3b82f6", "Mockumentary": "#f43f5e"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Weak", color: "#fca5a5", symbol: "🥱", bgColor: "bg-red-200/30", description: "Not funny" },
    { value: 2, label: "Amusing", color: "#fcd34d", symbol: "🙂", bgColor: "bg-yellow-500/30", description: "Some laughs" },
    { value: 3, label: "Hilarious", color: "#16a34a", symbol: "😂", bgColor: "bg-green-600/30", description: 'Laugh out loud' },
    { value: 4, label: "Legendary", color: "#ca8a04", symbol: "🤣", bgColor: "bg-yellow-700/30", description: "Comedy gold" }
];

export const HULU_COMEDY_MOVIE_FAQS = {
    'Superbad': [
        { question: "Is McLovin a real name?", answer: "No, it was a fake name on the ID Fogell used. The absurdity of choosing a single name like 'Seal' or 'Madonna' is the joke." },
        { question: "Who wrote Superbad?", answer: "Seth Rogen and Evan Goldberg started writing it when they were teenagers, which is why the dialogue feels so authentically awkward." }
    ],
    'O Brother, Where Art Thou?': [
        { question: "Is it really based on The Odyssey?", answer: "Yes, loosely. The Cyclops is John Goodman, the Sirens are the women at the river, and Ulysses Everett McGill is Odysseus trying to get home." },
        { question: "Did the actors really sing?", answer: "No, most of the singing was dubbed by professional bluegrass musicians, though Tim Blake Nelson sang his own vocals for 'In the Jailhouse Now'." }
    ],
    'Borat': [
        { question: "Was it scripted?", answer: "Most of the interactions with the public were unscripted. Sacha Baron Cohen stayed in character the entire time to provoke genuine reactions." },
        { question: "Did he really get arrested?", answer: "The police were called on the production team over 90 times during filming." }
    ],
    'Bullet Train': [
        { question: "Is it based on a book?", answer: "Yes, it is based on the novel 'Maria Beetle' by Kōtarō Isaka." },
        { question: "Who is the cameo at the end?", answer: "Ryan Reynolds makes a brief uncredited cameo, repaying Brad Pitt for his cameo in Deadpool 2." }
    ],
    'Palm Springs': [
        { question: "How long was Nyles stuck?", answer: "Fan calculations and writer interviews suggest Nyles was likely stuck in the time loop for anywhere between 40 to thousands of years." }
    ],
    'Super Troopers': [
        { question: "Is there a sequel?", answer: "Yes, Super Troopers 2 was released in 2018 after a massive crowdfunding campaign." }
    ],
    'Idiocracy': [
        { question: "Why does everyone wear Crocs?", answer: "The costume designer chose them because they were a cheap, futuristic-looking startup shoe at the time, assuming they would never become popular. The irony is palpable." }
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
        if (lowerType.includes('nudity') || lowerType.includes('sex')) types.add('crude content');
        if (lowerType.includes('drug') || lowerType.includes('alcohol')) types.add('substance use');
        if (lowerType.includes('violence') || lowerType.includes('blood')) types.add('comic violence');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_COMEDY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A hilarious comedy movie on Hulu.`,
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