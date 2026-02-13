// utils/revengeMovieData.js - COMPLETE REVENGE COLLECTION DATA ✅
// Movies exploring visceral impact, moral complexity, and the cost of vengeance.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1. RAW DATA LIST (The Database)
export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 670, imdbID: 'tt0364569', Title: 'Oldboy', year: 2003, genre: 'Action Mystery', runtime: 120, rank: 1 },
    { tmdbId: 98, imdbID: 'tt0172495', Title: 'Gladiator', year: 2000, genre: 'Action Drama', runtime: 155, rank: 2 },
    { tmdbId: 33, imdbID: 'tt0105695', Title: 'Unforgiven', year: 1992, genre: 'Western', runtime: 130, rank: 3 },
    { tmdbId: 197, imdbID: 'tt0112573', Title: 'Braveheart', year: 1995, genre: 'History Drama', runtime: 178, rank: 4 },
    { tmdbId: 1124, imdbID: 'tt0482571', Title: 'The Prestige', year: 2006, genre: 'Sci-Fi Thriller', runtime: 130, rank: 5 },
    { tmdbId: 281957, imdbID: 'tt1663202', Title: 'The Revenant', year: 2015, genre: 'Adventure Drama', runtime: 156, rank: 6 },
    { tmdbId: 393, imdbID: 'tt0378194', Title: 'Kill Bill: Vol. 2', year: 2004, genre: 'Action Crime', runtime: 137, rank: 7 },
    { tmdbId: 245891, imdbID: 'tt2911666', Title: 'John Wick', year: 2014, genre: 'Action Thriller', runtime: 101, rank: 8 },
    { tmdbId: 49797, imdbID: 'tt1588170', Title: 'I Saw the Devil', year: 2010, genre: 'Thriller Horror', runtime: 144, rank: 9 },
    { tmdbId: 11362, imdbID: 'tt0245844', Title: 'The Count of Monte Cristo', year: 2002, genre: 'Adventure Action', runtime: 131, rank: 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

// 2. SENSITIVE TIMELINES
export const SENSITIVE_TIMELINES = {
    670: { scenes: [
        { start: '11:20', end: '11:40', type: 'Sexual Content', severity: 'Moderate' },
        { start: '57:37', end: '1:01:10', type: 'Partial nudity (Woman)', severity: 'Moderate' },
        { start: '1:03:35', end: '1:05:10', type: 'Sex', severity: 'High' },
        { start: '1:22:20', end: '1:22:36', type: 'Sexual Content', severity: 'Moderate' },
        { start: '1:30:30', end: '1:30:38', type: 'Partial nudity (Man)', severity: 'Mild' }
    ]},
   98: { 
        scenes: [
            { start: "50:40", end: "50:55", type: "Partial Nudity (Man)", severity: "Low" }
        ] 
    },
    33: { scenes: [] },
    197: { scenes: [{ start: '38:23', end: '39:20', type: 'Nudity', severity: 'Moderate' }] },
    1124: { scenes: [] },
     281957: { scenes: [{ start: "0:06:44", end: "0:06:48", type: "Nudity", severity: "Moderate", description: "Male buttocks" }, { start: "1:44:00", end: "1:44:23", type: "Sex ", severity: "Moderate" }] },
    393: { scenes: [] },
      245891: { 
        scenes: [
            { start: "45:00", end: "45:30", type: "Suggestive Clothing (Women in Bikinis)", severity: "Low" }
        ] 
    },
    49797: { scenes: [{ start: '9:53', end: '10:25 ', type: 'Nudity', severity: 'Moderate"' }, { start: '26:40', end: '27:40', type: 'Sex & Nudity', severity: 'Moderate"' }] },
    11362: { scenes: [] }
};

// 3. FALLBACK POSTERS
export const FALLBACK_POSTERS = {
    670: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    98: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    33: "https://image.tmdb.org/t/p/w500/54nJ1pYd2L8k1X5Yp2F1vX9.jpg",
    197: "https://image.tmdb.org/t/p/w500/or1gBugydmjToi8qSFKpRlIyN5p.jpg",
    1124: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8oa0J.jpg",
    281957: "https://image.tmdb.org/t/p/w500/ji3ecJphATlguKMxT63J1QyqQ.jpg",
    393: "https://image.tmdb.org/t/p/w500/2yhg0mZQMhDyvUQ4rG1IZ4oIaP6.jpg",
    245891: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    49797: "https://image.tmdb.org/t/p/w500/zp5jh4fyqGRyPd2b9X2E8C.jpg",
    11362: "https://image.tmdb.org/t/p/w500/9.jpg"
};

// Helper: Create Data with Revenge Metrics
const createRevengeData = (data) => ({
    revengeIntensity: 90,
    moralComplexity: 85,
    visceralImpact: 90,
    complexityLevel: "HIGH",
    dominantColor: "#EF4444",
    ...data,
});

// 4. DETAILED MOVIE DATA (Object)
// 4. DETAILED MOVIE DATA (Object)
export const COMPLETE_MOVIE_DATA = {
    // 1. Oldboy (2003) - STATUS: EXISTENTIAL MASTERY
    670: createRevengeData({ 
        revengeIntensity: 100, moralComplexity: 98, visceralImpact: 100, complexityLevel: "EXTREME", 
        dominantColor: "#0f172a", rating: 8.4, director: "Park Chan-wook", 
        cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'], 
        dna: { "Mystery": 40, "Thriller": 35, "Action": 25 }, 
        scenes: [
            { time: 10, intensity: 42, label: 'The Abduction', color: '#0f172a' },
            { time: 25, intensity: 58, label: '15 Years Later', color: '#334155' },
            { time: 68, intensity: 88, label: 'Corridor Fight', color: '#dc2626' },
            { time: 90, intensity: 72, label: 'The Penthouse', color: '#475569' },
            { time: 115, intensity: 100, label: 'The Tongue', color: '#991b1b' } // PEAK: Existential Rupture
        ], 
        synopsis: "A genre-shattering masterpiece where the revenge is not a victory, but a trap. Oh Dae-su's 15-year imprisonment leads to a revelation so devastating it redefines the limits of psychological trauma.", 
        themes: ["Incest", "Memory", "Karma", "Despair"]
    }),

    // 2. Gladiator (2000) - STATUS: HEROIC TRAGEDY
    98: createRevengeData({ 
        revengeIntensity: 92, moralComplexity: 60, visceralImpact: 88, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 8.5, director: "Ridley Scott", 
        scenes: [
            { time: 25, intensity: 78, label: 'Family Murdered', color: '#7c2d12' },
            { time: 60, intensity: 65, label: 'Zucchabar Arena', color: '#d97706' },
            { time: 95, intensity: 82, label: 'Are You Not Entertained?', color: '#b45309' },
            { time: 125, intensity: 80, label: 'Reveal to Commodus', color: '#ea580c' },
            { time: 145, intensity: 92, label: 'Final Duel', color: '#f59e0b' } // PEAK: Heroic Catharsis
        ], 
        synopsis: "An epic tale of a fallen general seeking justice in the arena. While visceral and grand, its power lies in its classical emotional arc and mythic satisfaction.", 
        themes: ["Honor", "Legacy", "Tyranny", "Freedom"]
    }),

    // 3. Unforgiven (1992) - STATUS: MORAL DEVASTATION
    33: createRevengeData({ 
        revengeIntensity: 94, moralComplexity: 98, visceralImpact: 82, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 8.2, director: "Clint Eastwood", 
        scenes: [
            { time: 20, intensity: 28, label: 'The Pig Farm', color: '#7f1d1d' },
            { time: 60, intensity: 52, label: "Little Bill's Beating", color: '#991b1b' },
            { time: 108, intensity: 80, label: "Ned's Death", color: '#b91c1c' },
            { time: 115, intensity: 86, label: 'Whiskey Bottle', color: '#ef4444' },
            { time: 124, intensity: 94, label: 'Saloon Showdown', color: '#0f172a' } // PEAK: Cold Justice
        ]
    }),

    // 5. The Prestige (2006) - STATUS: PSYCHOLOGICAL COLLAPSE
    1124: createRevengeData({ 
        revengeIntensity: 96, moralComplexity: 95, visceralImpact: 80, complexityLevel: "EXTREME", 
        dominantColor: "#6b21a8", rating: 8.5, director: "Christopher Nolan", 
        scenes: [
            { time: 12, intensity: 55, label: 'The Drowning', color: '#581c87' },
            { time: 45, intensity: 62, label: 'The Bullet Catch', color: '#6b21a8' },
            { time: 80, intensity: 74, label: "Tesla's Lab", color: '#7e22ce' },
            { time: 100, intensity: 83, label: "Angier's Return", color: '#9333ea' },
            { time: 125, intensity: 96, label: 'The Final Prestige', color: '#3b0764' } // PEAK: Mind-Bending Rupture
        ]
    }),

    // 9. I Saw the Devil (2010) - STATUS: PURE MONSTROSITY
    49797: createRevengeData({ 
        revengeIntensity: 99, moralComplexity: 92, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#991b1b", rating: 7.8, director: "Kim Jee-woon", 
        scenes: [
            { time: 8, intensity: 70, label: 'The Murder', color: '#991b1b' },
            { time: 40, intensity: 78, label: 'Catch & Release 1', color: '#b91c1c' },
            { time: 85, intensity: 86, label: 'The Greenhouse', color: '#7f1d1d' },
            { time: 110, intensity: 92, label: 'Turning Tables', color: '#0f172a' },
            { time: 138, intensity: 96, label: 'The Final Gift', color: '#000000' } // PEAK: Soul Trauma
        ]
    }),

    // 8. John Wick (2014) - STATUS: ADRENALINE SURGE
    245891: createRevengeData({ 
        revengeIntensity: 89, moralComplexity: 40, visceralImpact: 92, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 7.4, director: "Chad Stahelski", 
        scenes: [
            { time: 15, intensity: 72, label: 'Puppy Death', color: '#dc2626' },
            { time: 30, intensity: 55, label: 'The Sledgehammer', color: '#475569' },
            { time: 50, intensity: 78, label: 'Home Invasion', color: '#f59e0b' },
            { time: 78, intensity: 88, label: 'Red Circle Club', color: '#9333ea' },
            { time: 95, intensity: 89, label: 'Dock Showdown', color: '#0f172a' } 
        ]
    })
};
// 5. CUSTOM FAQs
export const REVENGE_MOVIE_FAQS = {
    'Oldboy': [
        { question: "What is the twist in Oldboy?", answer: "The twist reveals that the antagonist, Woo-jin, manipulated Dae-su into falling in love with his own daughter." },
        { question: "Is the octopus scene real?", answer: "Yes, actor Choi Min-sik actually ate four live octopuses to get the shot right." },
        { question: "Why was he imprisoned for 15 years?", answer: "To allow his daughter to grow up to be an adult woman." },
        { question: "Does Dae-su know the truth at the end?", answer: "It is ambiguous. He visits a hypnotist to erase the memory, but his final smile is open to interpretation." }
    ],
    'Gladiator': [
        { question: "Is Maximus based on a real person?", answer: "Maximus is fictional, but inspired by figures like Narcissus and Spartacus." },
        { question: "Did Commodus really kill his father?", answer: "Historically, Marcus Aurelius died of natural causes. The movie dramatizes this." },
        { question: "Was the Colosseum built for the movie?", answer: "A massive replica of about one-third of the Colosseum was built in Malta." },
        { question: "What does the ending mean?", answer: "Maximus dies and joins his family in the afterlife, having fulfilled his vow." }
    ],
    'Unforgiven': [
        { question: "What makes Unforgiven a 'revisionist' Western?", answer: "It deconstructs the romantic myth of the Wild West, showing violence as clumsy and painful." },
        { question: "Why did William Munny take the job?", answer: "He was desperate for money to support his children due to his failing farm." },
        { question: "Is the writer character based on anyone?", answer: "W.W. Beauchamp represents the dime novelists who exaggerated gritty events into legends." },
        { question: "What does the final line mean?", answer: "It shows that while Munny is leaving, his capacity for extreme violence remains." }
    ],
    'Braveheart': [
        { question: "How accurate is Braveheart?", answer: "It is historically loose; kilts were not worn in that era and the romance is fiction." },
        { question: "Why does he scream 'Freedom'?", answer: "It is his final act of defiance against English rule." },
        { question: "Did the Battle of Stirling Bridge happen on a bridge?", answer: "Historically yes, but in the film it was staged on an open field." },
        { question: "Why is his face painted blue?", answer: "Woad paint was a Pictish tradition, not 13th-century Scottish, but used for visual effect." }
    ],
    'The Prestige': [
        { question: "What is the twist regarding Borden?", answer: "Alfred Borden was actually identical twins living as one man." },
        { question: "Did the machine really work?", answer: "Yes, Tesla's machine actually cloned Angier every time it was used." },
        { question: "What does 'The Prestige' mean?", answer: "It is the third act of a magic trick where the vanished object is brought back." },
        { question: "Who is the villain?", answer: "Both men are villains in their own way due to their destructive obsession." }
    ],
    'The Revenant': [
        { question: "Is The Revenant a true story?", answer: "Yes, it is based on the real survival story of Hugh Glass in 1823." },
        { question: "Did Leonardo DiCaprio really sleep in a horse?", answer: "No, the horse carcass was a prop, but he did eat raw bison liver." },
        { question: "Why didn't Glass kill Fitzgerald?", answer: "He leaves revenge in the Creator's hands, letting the Arikara deal with him." },
        { question: "How was the bear attack filmed?", answer: "It was a mix of CGI and stunt work with a stuntman in a blue suit." }
    ],
    'Kill Bill: Vol. 2': [
        { question: "What is the Five Point Palm Exploding Heart Technique?", answer: "A fictional martial arts move that stops the heart after five steps." },
        { question: "Why is Bill's death so quiet?", answer: "It emphasizes their relationship as former lovers rather than just enemies." },
        { question: "What is the real name of The Bride?", answer: "Her name is Beatrix Kiddo, revealed to humanize her." },
        { question: "Why did Bill try to kill her?", answer: "His heartbreak turned into murderous jealousy when he thought she left him." }
    ],
    'John Wick': [
        { question: "Why is the dog so important?", answer: "The puppy was a final gift from his dying wife, representing his last hope for love." },
        { question: "What is the Gold Coin currency?", answer: "They represent a currency of favors and access within the underworld." },
        { question: "Did Keanu Reeves do his own stunts?", answer: "Yes, he performed about 90% of his own stunts." },
        { question: "What is 'Baba Yaga'?", answer: "He is the one you send to kill the Boogeyman." }
    ],
    'I Saw the Devil': [
        { question: "What is the message of the film?", answer: "When you fight monsters, you risk becoming one yourself." },
        { question: "Why does he keep letting the killer go?", answer: "To inflict prolonged suffering rather than a quick death." },
        { question: "Is there an alternate ending?", answer: "Yes, one where he walks away stoically instead of breaking down." },
        { question: "Why is the violence so graphic?", answer: "To make the audience uncomfortable with the reality of revenge." }
    ],
    'The Count of Monte Cristo': [
        { question: "How does this version differ from the book?", answer: "It simplifies the plot and changes the ending so Edmond ends up with Mercedes." },
        { question: "Where was the prison filmed?", answer: "The Comino Tower in Malta." },
        { question: "What is the meaning of 'Zatarra'?", answer: "It means 'Driftwood', symbolizing his state before finding purpose." },
        { question: "Why does he spare Mondego initially?", answer: "He wants him to lose everything—family, fortune, reputation—before dying." }
    ]
};





// 6. HELPER FUNCTIONS
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
    return REVENGE_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A compelling revenge thriller.`,
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
            'ratingCount': 100 
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
            description: scene.description || '',
            displayLabel: `${scene.type} (${scene.severity})` 
        }))
    };
};

// EXPORT NAMED ALIAS FOR COMPATIBILITY
export const REVENGE_MOVIES = COMPLETE_MOVIE_DATABASE;

export default {
    COMPLETE_MOVIE_DATABASE,
    REVENGE_MOVIES,
    COMPLETE_MOVIE_DATA,
    SENSITIVE_TIMELINES,
    REVENGE_MOVIE_FAQS
};