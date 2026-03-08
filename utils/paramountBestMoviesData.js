// utils/paramountBestMoviesData.js - TOP 10 BEST MOVIES ON PARAMOUNT+ ✅
// The definitive ranking of the highest-rated films currently streaming on Paramount+ across all genres.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 680, "imdbID": "tt0110912", "Title": "Pulp Fiction", "year": 1994, "genre": "Crime", "runtime": 154, "rank": 1 },
    { "tmdbId": 157336, "imdbID": "tt0816692", "Title": "Interstellar", "year": 2014, "genre": "Sci-Fi", "runtime": 169, "rank": 2 },
    { "tmdbId": 13, "imdbID": "tt0109830", "Title": "Forrest Gump", "year": 1994, "genre": "Drama", "runtime": 142, "rank": 3 },
    { "tmdbId": 98, "imdbID": "tt0172495", "Title": "Gladiator", "year": 2000, "genre": "Action", "runtime": 155, "rank": 4 },
    { "tmdbId": 599, "imdbID": "tt0043014", "Title": "Sunset Boulevard", "year": 1950, "genre": "Noir", "runtime": 110, "rank": 5 },
    { "tmdbId": 106646, "imdbID": "tt0993846", "Title": "The Wolf of Wall Street", "year": 2013, "genre": "Biography", "runtime": 180, "rank": 6 },
    { "tmdbId": 6977, "imdbID": "tt0477348", "Title": "No Country for Old Men", "year": 2007, "genre": "Crime", "runtime": 122, "rank": 7 },
    { "tmdbId": 7345, "imdbID": "tt0469494", "Title": "There Will Be Blood", "year": 2007, "genre": "Drama", "runtime": 158, "rank": 8 },
    { "tmdbId": 361743, "imdbID": "tt1745960", "Title": "Top Gun: Maverick", "year": 2022, "genre": "Action", "runtime": 130, "rank": 9 },
    { "tmdbId": 640, "imdbID": "tt0264464", "Title": "Catch Me If You Can", "year": 2002, "genre": "Biography", "runtime": 141, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    // Pulp Fiction
    680: { 
        scenes: [
            { start: "1:12:00", end: "1:12:15", type: "Sexual Content", severity: "High" },
            { start: "1:21:03", end: "1:22:00", type: "Nudity (Man)", severity: "High" }
        ] 
    }, 
    
    // Forrest Gump
    13: { 
        scenes: [
            { start: "35:50", end: "35:55", type: "Nudity (Woman)", severity: "High" },
            { start: "37:15", end: "38:02", type: "Partial Nudity (Woman)", severity: "Moderate" }
        ] 
    }, 
    
    // Interstellar
    157336: { scenes: [] },

    // Gladiator
    98: { 
        scenes: [
            { start: "50:40", end: "50:55", type: "Partial Nudity (Man)", severity: "Low" }
        ] 
    },

    // Sunset Boulevard
    599: { scenes: [] },

    // The Wolf of Wall Street
    106646: { 
        scenes: [
            { start: "2:02", end: "3:05", type: "Sexual Content & Nudity (Woman)", severity: "High" },
            { start: "13:55", end: "14:15", type: "Nudity (Woman)", severity: "High" },
            { start: "38:55", end: "39:47", type: "Nudity (Women)", severity: "High" },
            { start: "54:45", end: "55:10", type: "Nudity (Man)", severity: "High" },
            { start: "58:25", end: "59:30", type: "Nudity (Woman) & Sex", severity: "Extreme" },
            { start: "1:02:25", end: "1:02:45", type: "Nudity (Men), Partial Nudity (Man) & Sex", severity: "Extreme" },
            { start: "1:07:30", end: "1:08:30", type: "Nudity (Women) & Sex", severity: "Extreme" },
            { start: "1:12:05", end: "1:12:15", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "1:16:55", end: "1:17:22", type: "Nudity (Woman)", severity: "High" },
            { start: "1:48:20", end: "1:48:38", type: "Sex & Nudity (Woman)", severity: "Extreme" },
            { start: "2:17:30", end: "2:18:10", type: "Nudity (Women)", severity: "High" },
            { start: "2:31:20", end: "2:31:40", type: "Nudity (Woman)", severity: "High" },
            { start: "2:38:30", end: "2:40:00", type: "Sex", severity: "High" }
        ] 
    },

    // No Country for Old Men
    6977: { scenes: [] },

    // There Will Be Blood
    7345: { scenes: [] },

    // Top Gun: Maverick
    361743: { scenes: [] },

    // Catch Me If You Can
    640: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    680: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    13: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    157336: "https://image.tmdb.org/t/p/w500/gEU2QniL6E77NI6lCU6MxlNBvIx.jpg",
    98: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    599: "https://image.tmdb.org/t/p/w500/sC4DpD8V39a7W1WjPZ8hQ1Q8.jpg",
    106646: "https://image.tmdb.org/t/p/w500/pWHf4khOloLXfUUSzS.jpg",
    6977: "https://image.tmdb.org/t/p/w500/bj1v6YKF8yiMrFfD77J9X1T9FjL.jpg",
    7345: "https://image.tmdb.org/t/p/w500/faL4e95X3kM7c7TfE41tA7t1v.jpg",
    361743: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    640: "https://image.tmdb.org/t/p/w500/ctjEj2xGLEnKfqyOnObPN4pful1.jpg"
};

// ✅ HELPER: Standard Data Creator
const createMovieData = (data) => ({
    cinematicMastery: 95,    
    narrativeDepth: 90,      
    legacyScore: 92,     
    complexityLevel: "MASTERPIECE",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    680: createMovieData({
        rating: 8.9, criticsScore: 92, audienceScore: 96, director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], boxOffice: "$213 million", budget: "$8 million",
        dominantColor: "#f59e0b",
        dna: { "Crime": 60, "Drama": 25, "Comedy": 15 },
        scenes: [
            { time: 10, intensity: 35, label: "Royale with Cheese", color: "#facc15" },
            { time: 30, intensity: 78, label: "Ezekiel 25:17", color: "#b45309" },
            { time: 60, intensity: 92, label: "Adrenaline Shot", color: "#dc2626" },
            { time: 100, intensity: 85, label: "The Gold Watch", color: "#f59e0b" },
            { time: 140, intensity: 80, label: "The Diner Stand-off", color: "#78350f" }
        ],
        synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        themes: ["Redemption", "Coolness", "Fate"]
    }),

    13: createMovieData({
        rating: 8.8, criticsScore: 71, audienceScore: 95, director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"], boxOffice: "$677 million", budget: "$55 million",
        dominantColor: "#3b82f6",
        dna: { "Drama": 70, "Romance": 20, "Comedy": 10 },
        scenes: [
            { time: 15, intensity: 45, label: "Run Forrest Run", color: "#60a5fa" },
            { time: 50, intensity: 88, label: "Vietnam Ambush", color: "#ef4444" },
            { time: 90, intensity: 55, label: "Ping Pong Diplomacy", color: "#3b82f6" },
            { time: 110, intensity: 70, label: "Running Across America", color: "#2563eb" },
            { time: 135, intensity: 92, label: "Jenny's Grave", color: "#1e3a8a" }
        ],
        synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        themes: ["Destiny", "Innocence", "Love"]
    }),

    157336: createMovieData({
        rating: 8.7, criticsScore: 73, audienceScore: 86, director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], boxOffice: "$701 million", budget: "$165 million",
        dominantColor: "#0ea5e9",
        dna: { "Sci-Fi": 55, "Drama": 30, "Adventure": 15 },
        scenes: [
            { time: 45, intensity: 70, label: "Launch Sequence", color: "#0ea5e9" },
            { time: 70, intensity: 88, label: "Miller's Planet", color: "#0284c7" },
            { time: 110, intensity: 82, label: "Mann's Betrayal", color: "#0369a1" },
            { time: 130, intensity: 96, label: "Docking Scene", color: "#0c4a6e" },
            { time: 150, intensity: 90, label: "The Tesseract", color: "#7dd3fc" }
        ],
        synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft to find a new planet for humans.",
        themes: ["Love", "Time", "Survival"]
    }),

    98: createMovieData({
        rating: 8.5, criticsScore: 80, audienceScore: 87, director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"], boxOffice: "$460 million", budget: "$103 million",
        dominantColor: "#b45309",
        dna: { "Action": 55, "Drama": 25, "History": 20 },
        scenes: [
            { time: 10, intensity: 90, label: "Germania Battle", color: "#78350f" },
            { time: 45, intensity: 55, label: "The Slave Market", color: "#d97706" },
            { time: 80, intensity: 92, label: "Are You Not Entertained?", color: "#b45309" },
            { time: 120, intensity: 88, label: "Battle of Carthage", color: "#92400e" },
            { time: 150, intensity: 95, label: "Maximus vs Commodus", color: "#451a03" }
        ],
        synopsis: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        themes: ["Vengeance", "Honor", "Politics"]
    }),

    599: createMovieData({
        rating: 8.4, criticsScore: 98, audienceScore: 91, director: "Billy Wilder",
        cast: ["William Holden", "Gloria Swanson", "Erich von Stroheim"], boxOffice: "$5 million", budget: "$1.75 million",
        dominantColor: "#171717",
        dna: { "Drama": 70, "Mystery": 20, "Crime": 10 },
        scenes: [
            { time: 5, intensity: 55, label: "The Pool Body", color: "#262626" },
            { time: 30, intensity: 35, label: "Meeting Norma", color: "#404040" },
            { time: 60, intensity: 60, label: "New Year's Eve", color: "#171717" },
            { time: 90, intensity: 78, label: "The Pursuit", color: "#000000" },
            { time: 110, intensity: 92, label: "Ready for My Close-Up", color: "#52525b" }
        ],
        synopsis: "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
        themes: ["Fame", "Delusion", "Hollywood"]
    }),

    106646: createMovieData({
        rating: 8.2, criticsScore: 80, audienceScore: 83, director: "Martin Scorsese",
        cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], boxOffice: "$392 million", budget: "$100 million",
        dominantColor: "#facc15",
        dna: { "Comedy": 45, "Drama": 30, "Crime": 25 },
        scenes: [
            { time: 20, intensity: 55, label: "Pink Sheets Pitch", color: "#facc15" },
            { time: 60, intensity: 70, label: "Steve Madden", color: "#eab308" },
            { time: 120, intensity: 88, label: "Lemmon 714s Phase", color: "#ca8a04" },
            { time: 150, intensity: 80, label: "I'm Not Leaving", color: "#a16207" },
            { time: 170, intensity: 72, label: "The FBI Raid", color: "#854d0e" }
        ],
        synopsis: "Jordan Belfort's rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        themes: ["Greed", "Excess", "Corruption"]
    }),

    6977: createMovieData({
        rating: 8.2, criticsScore: 93, audienceScore: 86, director: "Ethan & Joel Coen",
        cast: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"], boxOffice: "$171 million", budget: "$25 million",
        dominantColor: "#78350f",
        dna: { "Thriller": 55, "Crime": 30, "Western": 15 },
        scenes: [
            { time: 10, intensity: 65, label: "Coin Toss", color: "#78350f" },
            { time: 40, intensity: 75, label: "Motel Search", color: "#92400e" },
            { time: 80, intensity: 93, label: "Street Shootout", color: "#b45309" },
            { time: 100, intensity: 88, label: "The Hotel Vent", color: "#451a03" },
            { time: 120, intensity: 55, label: "The Dream", color: "#d97706" }
        ],
        synopsis: "A hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        themes: ["Fate", "Evil", "Morality"]
    }),

    7345: createMovieData({
        rating: 8.2, criticsScore: 91, audienceScore: 86, director: "Paul Thomas Anderson",
        cast: ["Daniel Day-Lewis", "Paul Dano", "Ciarán Hinds"], boxOffice: "$76 million", budget: "$25 million",
        dominantColor: "#000000",
        dna: { "Drama": 85, "History": 15 },
        scenes: [
            { time: 15, intensity: 45, label: "Finding Oil", color: "#1c1917" },
            { time: 60, intensity: 90, label: "The Derrick Fire", color: "#ef4444" },
            { time: 100, intensity: 82, label: "The Baptism", color: "#7f1d1d" },
            { time: 130, intensity: 70, label: "Abandoning H.W.", color: "#292524" },
            { time: 150, intensity: 95, label: "I Drink Your Milkshake", color: "#000000" }
        ],
        synopsis: "A turn-of-the-century prospector in the early days of the oil business is consumed by greed and misanthropy.",
        themes: ["Greed", "Religion", "Capitalism"]
    }),

    361743: createMovieData({
        rating: 8.2, criticsScore: 96, audienceScore: 99, director: "Joseph Kosinski",
        cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"], boxOffice: "$1.49 billion", budget: "$170 million",
        dominantColor: "#f97316",
        dna: { "Action": 70, "Drama": 25, "Romance": 5 },
        scenes: [
            { time: 10, intensity: 85, label: "Mach 10", color: "#f97316" },
            { time: 50, intensity: 60, label: "Dogfight Football", color: "#fb923c" },
            { time: 90, intensity: 78, label: "The Canyon Run", color: "#ea580c" },
            { time: 115, intensity: 96, label: "The Mission", color: "#c2410c" },
            { time: 125, intensity: 94, label: "Dogfight", color: "#9a3412" }
        ],
        synopsis: "Maverick leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
        themes: ["Legacy", "Duty", "Redemption"]
    }),

    640: createMovieData({
        rating: 8.1, criticsScore: 96, audienceScore: 89, director: "Steven Spielberg",
        cast: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"], boxOffice: "$352 million", budget: "$52 million",
        dominantColor: "#06b6d4",
        dna: { "Drama": 45, "Crime": 35, "Comedy": 20 },
        scenes: [
            { time: 20, intensity: 45, label: "The Pilot Scam", color: "#22d3ee" },
            { time: 50, intensity: 55, label: "Do You Concur?", color: "#06b6d4" },
            { time: 80, intensity: 72, label: "Almost Caught", color: "#0891b2" },
            { time: 110, intensity: 78, label: "Christmas Call", color: "#0e7490" },
            { time: 130, intensity: 82, label: "The Arrest", color: "#155e75" }
        ],
        synopsis: "The true story of Frank Abagnale Jr., who, before his 19th birthday, successfully conned millions of dollars.",
        themes: ["Identity", "Deception", "Father Figures"]
    })
};

export const PARAMOUNT_BEST_MOVIE_FAQS = {
    'Pulp Fiction': [
        { question: "What is in the briefcase?", answer: "Quentin Tarantino has never explicitly revealed the contents, stating it is whatever the viewer wants it to be (a MacGuffin). Theories range from Marsellus Wallace's soul to a lightbulb." },
        { question: "Is the chronology random?", answer: "No, the scenes are carefully ordered to create a circular narrative. structure allows characters who die in the middle to 'walk into the sunset' at the end." },
        { question: "Did Tarantino direct the needle scene?", answer: "Yes, the infamous adrenaline shot scene was filmed in reverse to ensure safety and realism." }
    ],
    'Forrest Gump': [
        { question: "Is Forrest Gump a real person?", answer: "No, Forrest Gump is a fictional character based on the 1986 novel by Winston Groom." },
        { question: "Did Tom Hanks improvise?", answer: "Many iconic lines were improvised, including 'My name is Forrest Gump. People call me Forrest.'" },
        { question: "What is the feather symbolism?", answer: "The floating feather represents the film's central theme: 'destiny' and how life is unpredictable." }
    ],
    'Interstellar': [
        { question: "How accurate is the science?", answer: "Remarkably accurate. Theoretical physicist Kip Thorne served as a consultant for the black hole Gargantua's depiction." },
        { question: "What is the Tesseract?", answer: "The Tesseract is a four-dimensional construct placed inside the black hole that allows Cooper to physically interact with time." },
        { question: "Did they grow real corn?", answer: "Yes, Christopher Nolan planted 500 acres of real corn for the farm scenes to ensure realism." }
    ],
    'Gladiator': [
        { question: "Is Maximus a real historical figure?", answer: "Maximus is fictional, but he is a composite of several historical figures including Spartacus and Cincinnatus." },
        { question: "Did Oliver Reed die during filming?", answer: "Yes, legends actor Oliver Reed passed away before completion. The production used a body double and CGI to finish his scenes." },
        { question: "Are the tigers real?", answer: "Yes, real tigers were used in the arena fight. A veterinarian was on set at all times to ensure safety." }
    ],
    'Sunset Boulevard': [
        { question: "Who is the narrator?", answer: "The film is narrated by Joe Gillis (William Holden) while floating face-down in a swimming pool, a dead man telling his tale." },
        { question: "Was Gloria Swanson really a silent film star?", answer: "Yes, she was one of the biggest stars of the silent era who faded into obscurity, mirroring her character Norma Desmond." },
        { question: "What does 'I'm ready for my close-up' mean?", answer: "The line symbolizes Norma's complete break from reality, believing newsreel cameras are part of her comeback film." }
    ],
    'The Wolf of Wall Street': [
        { question: "Is it a true story?", answer: "Yes, it is based on the memoir of Jordan Belfort. Many of the wildest scenes actually happened according to Belfort." },
        { question: "How did they film the Quaalude scene?", answer: "DiCaprio credited the performance to watching YouTube videos of motor function loss. It is considered a masterpiece of physical comedy." },
        { question: "Did they use real drugs?", answer: "No, the actors snorted crushed B-vitamins. Jonah Hill developed bronchitis from snorting so much fake powder." }
    ],
    'No Country for Old Men': [
        { question: "Why is there no music?", answer: "The Coen Brothers wanted to create relentless tension using only ambient sounds like the wind and boots on floorboards." },
        { question: "What does the ending mean?", answer: "The ending is about Sheriff Bell's realization that he is overmatched by the senseless violence of the modern world." },
        { question: "What weapon does Chigurh use?", answer: "Anton Chigurh uses a captive bolt pistol, a tool normally used to dispatch livestock efficiently." }
    ],
    'There Will Be Blood': [
        { question: "What is the 'I drink your milkshake' line?", answer: "It is a metaphor for drainage in oil drilling—sucking up oil from under a neighbor's land without drilling on it." },
        { question: "Is Daniel Plainview a psychopath?", answer: "He displays anti-social traits like lack of empathy and extreme greed, though his relationship with H.W. suggests a capacity for love." },
        { question: "Who wrote the music?", answer: "The haunting, dissonant score was composed by Jonny Greenwood of Radiohead." }
    ],
    'Top Gun: Maverick': [
        { question: "Did the actors fly the jets?", answer: "Yes. Tom Cruise developed a training program. The actors were in the cockpits pulling real G-forces for authenticity." },
        { question: "Is the Darkstar plane real?", answer: "It is fictional but was designed with Lockheed Martin's Skunk Works. It looked realistic enough to inspection from spy satellites." },
        { question: "Why no CGI?", answer: "Sequences relied on 6 IMAX cameras inside cockpits to capture real lighting and physics of aerial combat." }
    ],
    'Catch Me If You Can': [
        { question: "Did Frank Abagnale really do all that?", answer: "Frank Abagnale Jr.'s life story is true in essence, though some exploits were likely exaggerated. The emotional core is accurate." },
        { question: "Does the real Frank Abagnale appear?", answer: "Yes, he makes a cameo as the French police officer who arrests Leonardo DiCaprio on Christmas Eve." },
        { question: "Why is the score so jazzy?", answer: "John Williams created a slinky, sophisticated jazz score reminiscent of the 1960s to capture the cat-and-mouse playfulness." }
    ]
};

// 5. UTILITY FUNCTIONS & THE KEYWORD BRIDGE
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
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

// 🔥 6. THE KEYWORD BRIDGE
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        
        if (lowerType.includes('sex') || lowerType.includes('explicit')) types.add('sexual content');
        if (lowerType.includes('nudity') || lowerType.includes('woman') || lowerType.includes('men')) types.add('nudity');
        if (lowerType.includes('violence') || lowerType.includes('gore')) types.add('graphic violence');
    });
    return Array.from(types);
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} (${currentMovieYear}) - One of the best movies on Paramount+.`,
        'genre': movie.genre,
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = PARAMOUNT_BEST_MOVIE_FAQS[movie.Title] || [];
    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
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
            'name': `What are the most iconic scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Cinematic Mastery index, ${movie.Title} peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    if (sensitiveScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const schemaListText = sensitiveScenes.map(s => `<li>${s.start} to ${s.end} - ${s.type}</li>`).join('');

        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Does ${movie.Title} contain adult or inappropriate scenes?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `Yes, according to the Filmiway Content Advisory, ${movie.Title} contains adult scenes including ${typesString}. Exact timestamps for these scenes are:<br><br><ul>${schemaListText}</ul>` 
            }
        });
    } else {
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Does ${movie.Title} contain adult or inappropriate scenes?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `No, the Filmiway Content Advisory confirms that ${movie.Title} is completely free of explicit sexual content and nudity.` 
            }
        });
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
export const getVisibleMovieFAQs = (movieTitle, tmdbId) => {
    const staticFaqs = PARAMOUNT_BEST_MOVIE_FAQS[movieTitle] ? [...PARAMOUNT_BEST_MOVIE_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most iconic scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Cinematic Mastery index, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
        });
    }

    if (sensitiveScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const uiListText = sensitiveScenes.map(s => `• ${s.start} to ${s.end} - ${s.type}`).join('\n');

        staticFaqs.unshift({
            question: `Does ${movieTitle} contain adult or inappropriate scenes?`,
           answer: `Yes, according to the Filmiway Timestamps & Parents Guide, ${movieTitle} contains adult scenes including ${typesString}. These timestamps are accurate for the ${finalRuntime} runtime. Exact timestamps for these scenes are:\n\n${uiListText}`
        });
    } else {
        staticFaqs.unshift({
            question: `Does ${movieTitle} contain adult or inappropriate scenes?`,
                       answer: `No, the Filmiway Timestamps & Parents Guide confirms that ${movieTitle} is completely free of explicit sexual content and nudity. This assessment is accurate for the ${finalRuntime} runtime.`
        });
    }

    return staticFaqs;
};