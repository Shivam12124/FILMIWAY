// utils/peacockSciFiMovieData.js - PEACOCK SCI-FI COLLECTION DATA ✅
// Mind-Bending Realities, Alien Encounters, and Future Worlds

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi", "runtime": 89, "rank": 1 },
    { "tmdbId": 701387, "imdbID": "tt12300742", "Title": "Bugonia", "year": 2025, "genre": "Sci-Fi", "runtime": 110, "rank": 2 }, 
    { "tmdbId": 762504, "imdbID": "tt10954984", "Title": "Nope", "year": 2022, "genre": "Sci-Fi", "runtime": 130, "rank": 3 },
    { "tmdbId": 430231, "imdbID": "tt3986820", "Title": "The Endless", "year": 2017, "genre": "Sci-Fi", "runtime": 111, "rank": 4 },
    { "tmdbId": 101299, "imdbID": "tt1959490", "Title": "The Hunger Games: Catching Fire", "year": 2013, "genre": "Sci-Fi", "runtime": 146, "rank": 5 },
    { "tmdbId": 122906, "imdbID": "tt2194499", "Title": "About Time", "year": 2013, "genre": "Romance", "runtime": 123, "rank": 6 },
    { "tmdbId": 2787, "imdbID": "tt0134847", "Title": "Pitch Black", "year": 2000, "genre": "Sci-Fi", "runtime": 109, "rank": 7 },
    { "tmdbId": 539892, "imdbID": "tt8781414", "Title": "Freaks", "year": 2018, "genre": "Sci-Fi", "runtime": 105, "rank": 8 },
    { "tmdbId": 536554, "imdbID": "tt8760708", "Title": "M3GAN", "year": 2023, "genre": "Horror", "runtime": 102, "rank": 9 },
    { "tmdbId": 777847, "imdbID": "tt18389166", "Title": "If You Were the Last", "year": 2023, "genre": "Romance", "runtime": 92, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Psychological Stress & Gore)
export const SENSITIVE_TIMELINES = {
    220289: { scenes: [] }, // Coherence
    701387: { scenes: [] }, // Bugonia
    762504: { scenes: [] }, // Nope
    430231: { scenes: [] }, // The Endless
    101299: { scenes: [] }, // The Hunger Games: Catching Fire
    122906: { scenes: [] }, // About Time
    2787: { scenes: [] }, // Pitch Black
    539892: { scenes: [] }, // Freaks (2018)
    536554: { scenes: [] }, // M3GAN
    777847: { // If You Were the Last
        scenes: [
            { start: "0:48:45", end: "0:49:15", type: "Sex", severity: "Mild" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    220289: "https://image.tmdb.org/t/p/w500/pp2iJ0Y05Y977k6j632t7J6v6W3.jpg",
    701387: "https://image.tmdb.org/t/p/w500/bugonia_placeholder.jpg",
    762504: "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
    430231: "https://image.tmdb.org/t/p/w500/m110vLaXTKgF4X0dhtXQW9z30qG.jpg",
    101299: "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYwqdRpqeu7npkA00u.jpg",
    122906: "https://image.tmdb.org/t/p/w500/iL13dK1u5K37049d95955.jpg",
    2787: "https://image.tmdb.org/t/p/w500/3AnlxZ5CZnWuyiURPBeOVCKSUsq.jpg",
    539892: "https://image.tmdb.org/t/p/w500/1M91bt3X82Kk1O771X67Y7065.jpg",
    536554: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    777847: "https://image.tmdb.org/t/p/w500/IfYouWereTheLast.jpg"
};

const createMovieData = (data) => ({
    sciFiComplexity: 85,
    visualSpectacle: 90, 
    complexityLevel: "HIGH",
    dominantColor: "#0ea5e9",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Coherence
    220289: createMovieData({
        sciFiComplexity: 100, visualSpectacle: 20, complexityLevel: "QUANTUM",
        dominantColor: "#1e293b", rating: 7.2, criticsScore: 88, audienceScore: 81, director: "James Ward Byrkit",
        cast: ["Emily Foxler", "Maury Sterling", "Nicholas Brendon"],
        dna: { "Sci-Fi": 80, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 22, label: "Dinner Setup", color: "#64748b" },
            { time: 35, intensity: 48, label: "Power Outage", color: "#3b82f6" },
            { time: 55, intensity: 68, label: "The Box", color: "#6366f1" },
            { time: 80, intensity: 88, label: "Crossing Houses", color: "#000000" },
            { time: 88, intensity: 72, label: "The Morning After", color: "#facc15" }
        ],
        synopsis: "...",
        themes: ["Quantum Physics", "Paranoia", "Identity"]
    }),

    // 2. Bugonia
    701387: createMovieData({
        sciFiComplexity: 85, visualSpectacle: 80, complexityLevel: "SATIRICAL",
        dominantColor: "#166534", rating: 7.5, criticsScore: 85, audienceScore: 80, director: "Yorgos Lanthimos",
        cast: ["Emma Stone", "Jesse Plemons"],
        dna: { "Sci-Fi": 50, "Comedy": 30, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "Paranoid Beliefs", color: "#64748b" },
            { time: 30, intensity: 55, label: "The Kidnapping", color: "#166534" },
            { time: 55, intensity: 70, label: "The Interrogation", color: "#b91c1c" },
            { time: 85, intensity: 82, label: "Reality Cracks", color: "#f97316" },
            { time: 95, intensity: 68, label: "Aftermath", color: "#facc15" }
        ],
        synopsis: "...",
        themes: ["Conspiracy", "Alien Invasion", "Madness"]
    }),

    // 3. Nope
    762504: createMovieData({
        sciFiComplexity: 75, visualSpectacle: 98, complexityLevel: "SYMBOLIC",
        dominantColor: "#0f172a", rating: 6.8, criticsScore: 83, audienceScore: 69, director: "Jordan Peele",
        cast: ["Daniel Kaluuya", "Keke Palmer", "Steven Yeun"],
        dna: { "Sci-Fi": 40, "Horror": 40, "Western": 20 },
        scenes: [
            { time: 10, intensity: 20, label: "Strange Signs", color: "#475569" },
            { time: 35, intensity: 55, label: "Barn Encounter", color: "#000000" },
            { time: 60, intensity: 75, label: "Star Lasso", color: "#b91c1c" },
            { time: 85, intensity: 90, label: "Blood Rain", color: "#ef4444" },
            { time: 110, intensity: 70, label: "Final Shot", color: "#facc15" }
        ],
        synopsis: "...",
        themes: ["Spectacle", "Exploitation", "Predator"]
    }),

    // 4. The Endless
    430231: createMovieData({
        sciFiComplexity: 92, visualSpectacle: 70, complexityLevel: "LOVECRAFTIAN",
        dominantColor: "#ca8a04", rating: 6.5, criticsScore: 92, audienceScore: 75,
        director: "Justin Benson, Aaron Moorhead",
        cast: ["Justin Benson", "Aaron Moorhead", "Callie Hernandez"],
        dna: { "Sci-Fi": 60, "Horror": 30, "Mystery": 10 },
        scenes: [
            { time: 15, intensity: 22, label: "Return to Camp", color: "#facc15" },
            { time: 40, intensity: 50, label: "Strange Patterns", color: "#3b82f6" },
            { time: 65, intensity: 68, label: "The Rope Tug", color: "#000000" },
            { time: 95, intensity: 85, label: "Loop Revelation", color: "#ef4444" },
            { time: 110, intensity: 70, label: "Escape Attempt", color: "#6366f1" }
        ],
        synopsis: "...",
        themes: ["Time Loops", "Cults", "Brotherhood"]
    }),

    // 5. Catching Fire
    101299: createMovieData({
        sciFiComplexity: 60, visualSpectacle: 90, complexityLevel: "POLITICAL",
        dominantColor: "#f97316", rating: 7.5, criticsScore: 90, audienceScore: 89,
        director: "Francis Lawrence",
        cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
        dna: { "Sci-Fi": 40, "Action": 40, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 25, label: "Victory Tour", color: "#ffffff" },
            { time: 45, intensity: 55, label: "District Unrest", color: "#ef4444" },
            { time: 80, intensity: 75, label: "Arena Begins", color: "#0ea5e9" },
            { time: 135, intensity: 92, label: "Lightning Plan", color: "#facc15" },
            { time: 140, intensity: 70, label: "Rebellion Begins", color: "#6366f1" }
        ],
        synopsis: "...",
        themes: ["Rebellion", "Survival", "Media"]
    }),

    // 6. About Time
    122906: createMovieData({
        sciFiComplexity: 50, visualSpectacle: 40, complexityLevel: "EMOTIONAL",
        dominantColor: "#be123c", rating: 7.8, criticsScore: 69, audienceScore: 81,
        director: "Richard Curtis",
        cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
        dna: { "Romance": 60, "Sci-Fi": 20, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 18, label: "The Secret", color: "#f43f5e" },
            { time: 40, intensity: 45, label: "Relationship Growth", color: "#e11d48" },
            { time: 65, intensity: 60, label: "Life Changes", color: "#be123c" },
            { time: 110, intensity: 85, label: "Father Goodbye", color: "#000000" },
            { time: 120, intensity: 65, label: "Acceptance", color: "#f59e0b" }
        ],
        synopsis: "...",
        themes: ["Love", "Family", "Carpe Diem"]
    }),

    // 7. Pitch Black
    2787: createMovieData({
        sciFiComplexity: 65, visualSpectacle: 75, complexityLevel: "SURVIVAL",
        dominantColor: "#000000", rating: 7.1, criticsScore: 59, audienceScore: 75,
        director: "David Twohy",
        cast: ["Vin Diesel", "Radha Mitchell", "Cole Hauser"],
        dna: { "Sci-Fi": 40, "Horror": 40, "Action": 20 },
        scenes: [
            { time: 10, intensity: 30, label: "Crash Landing", color: "#ea580c" },
            { time: 40, intensity: 60, label: "Eclipse Begins", color: "#000000" },
            { time: 60, intensity: 75, label: "Darkness Attacks", color: "#0f172a" },
            { time: 90, intensity: 88, label: "Final Escape", color: "#3b82f6" },
            { time: 100, intensity: 70, label: "Aftermath", color: "#6366f1" }
        ],
        synopsis: "...",
        themes: ["Darkness", "Anti-Hero", "Survival"]
    }),

    // 8. Freaks
    539892: createMovieData({
        sciFiComplexity: 80, visualSpectacle: 70, complexityLevel: "MYSTERY",
        dominantColor: "#b91c1c", rating: 6.7, criticsScore: 88, audienceScore: 87,
        director: "Zach Lipovsky, Adam B. Stein",
        cast: ["Emile Hirsch", "Bruce Dern", "Lexy Kolker"],
        dna: { "Sci-Fi": 50, "Thriller": 40, "Drama": 10 },
        scenes: [
            { time: 15, intensity: 25, label: "Isolation", color: "#57534e" },
            { time: 45, intensity: 55, label: "Outside World", color: "#3b82f6" },
            { time: 65, intensity: 70, label: "Power Awakens", color: "#8b5cf6" },
            { time: 95, intensity: 90, label: "Final Escape", color: "#ef4444" },
            { time: 105, intensity: 72, label: "Freedom", color: "#6366f1" }
        ],
        synopsis: "...",
        themes: ["Powers", "Protection", "Prejudice"]
    }),

    // 9. M3GAN
    536554: createMovieData({
        sciFiComplexity: 60, visualSpectacle: 70, complexityLevel: "CAMP",
        dominantColor: "#cbd5e1", rating: 6.4, criticsScore: 93, audienceScore: 78,
        director: "Gerard Johnstone",
        cast: ["Allison Williams", "Violet McGraw", "Ronny Chieng"],
        dna: { "Horror": 40, "Sci-Fi": 40, "Comedy": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "Prototype Setup", color: "#94a3b8" },
            { time: 40, intensity: 55, label: "Bonding", color: "#3b82f6" },
            { time: 65, intensity: 70, label: "Behavior Shift", color: "#166534" },
            { time: 95, intensity: 88, label: "Final Showdown", color: "#000000" },
            { time: 105, intensity: 65, label: "Aftermath", color: "#6366f1" }
        ],
        synopsis: "...",
        themes: ["AI", "Technology", "Attachment"]
    }),

    // 10. If You Were the Last
    777847: createMovieData({
        sciFiComplexity: 40, visualSpectacle: 60, complexityLevel: "CHARMING",
        dominantColor: "#f472b6", rating: 6.8, criticsScore: 90, audienceScore: 70,
        director: "Kristian Mercado",
        cast: ["Anthony Mackie", "Zoë Chao"],
        dna: { "Romance": 50, "Comedy": 30, "Sci-Fi": 20 },
        scenes: [
            { time: 10, intensity: 15, label: "Drifting Routine", color: "#1e293b" },
            { time: 30, intensity: 35, label: "Daily Life Together", color: "#334155" },
            { time: 55, intensity: 50, label: "The Question", color: "#f472b6" },
            { time: 80, intensity: 65, label: "Emotional Realization", color: "#facc15" },
            { time: 95, intensity: 55, label: "Quiet Resolution", color: "#6366f1" }
        ],
        synopsis: "...",
        themes: ["Isolation", "Friendship", "Love"]
    })
};

// ✅ STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    220289: "We're the dark version of ourselves.", // Coherence
    701387: "She's not from here.", // Bugonia
    762504: "What's a bad miracle?", // Nope
    430231: "The oldest and strongest emotion of mankind is fear.", // The Endless
    101299: "Remember who the real enemy is.", // Catching Fire
    122906: "We're all traveling through time together.", // About Time
    2787: "Not for me!", // Pitch Black
    539892: "You're not normal. You're special.", // Freaks
    536554: "I'm afraid that won't work anymore.", // M3GAN
    777847: "If we die, we die together." // If You Were the Last
};

export const PEACOCK_SCIFI_MOVIE_FAQS = {
  'Coherence': [
    { question: "Is Coherence confusing to understand?", answer: "Yes, the film is intentionally complex, but it becomes clearer if you pay attention to small details like glow sticks, boxes, and character behavior. A second watch helps connect the parallel reality shifts." },
    { question: "Does Coherence have a clear ending?", answer: "The ending is open-ended but meaningful. Emily ends up in another version of her life, but the final phone call suggests the original version of her may still be searching for her reality." },
    { question: "Is Coherence scary or more psychological?", answer: "It’s more psychological than horror. The tension comes from paranoia, identity confusion, and the fear of alternate versions of yourself rather than traditional scares." },
    { question: "Is Coherence worth watching for sci-fi fans?", answer: "Yes. Despite its low budget, the film is highly praised for its intelligent concept, realistic performances, and strong mind-bending storytelling." }
  ],
  'Bugonia': [
    { question: "Is Bugonia a remake or an original film?", answer: "Bugonia is a remake of the South Korean cult film 'Save the Green Planet!' but reimagined with Yorgos Lanthimos’ unique dark and surreal style." },
    { question: "What genre is Bugonia?", answer: "It blends sci-fi, dark comedy, and psychological thriller elements, creating a strange and unsettling tone throughout." },
    { question: "Is the story serious or comedic?", answer: "The film balances disturbing situations with absurd humor. The tone shifts between tense psychological drama and dark satire." },
    { question: "Who should watch Bugonia?", answer: "It’s best for viewers who enjoy unconventional storytelling, surreal filmmaking, and the distinctive style of Yorgos Lanthimos." }
  ],
  'Nope': [
    { question: "Is Nope a horror movie?", answer: "Nope mixes sci-fi, thriller, and horror elements. It focuses more on suspense and mystery than traditional jump scares." },
    { question: "What is Jean Jacket in the movie?", answer: "Jean Jacket is a living alien creature that disguises itself as a cloud and attacks anything that looks directly at it." },
    { question: "Is Nope connected to Jordan Peele’s other films?", answer: "No, it’s a standalone story, but it shares similar themes about fear, spectacle, and human behavior seen in his other movies." },
    { question: "Is Nope worth watching in theaters or on a big screen?", answer: "Yes. The film was designed with large-scale visuals and sound, making the experience much more impactful on a bigger screen." }
  ],
  'The Endless': [
    { question: "Do I need to watch Resolution before The Endless?", answer: "It’s not required, but watching 'Resolution' first helps you better understand the shared universe and some returning characters." },
    { question: "Is The Endless confusing?", answer: "The film gradually explains its mystery. While the concept is unusual, the emotional story of the two brothers keeps it grounded." },
    { question: "Is it horror or sci-fi?", answer: "It’s a mix of sci-fi and cosmic horror, focusing more on atmosphere and existential dread than traditional scares." },
    { question: "Does the movie have a satisfying ending?", answer: "Yes. The ending provides emotional closure for the brothers while leaving the larger cosmic mystery intentionally open." }
  ],
  'The Hunger Games: Catching Fire': [
    { question: "Can I watch Catching Fire without seeing the first movie?", answer: "It’s possible, but watching 'The Hunger Games' first is recommended to understand the characters and political background." },
    { question: "Is Catching Fire better than the first film?", answer: "Many viewers consider it the strongest entry in the series due to its larger scale, deeper story, and more intense arena." },
    { question: "Is the arena different in this movie?", answer: "Yes. The arena is designed like a clock, with deadly events occurring in different sections every hour." },
    { question: "Does the movie end on a cliffhanger?", answer: "Yes. The story directly leads into 'Mockingjay – Part 1' and sets up the full rebellion against the Capitol." }
  ],
  'About Time': [
    { question: "Is About Time a romance or a sci-fi movie?", answer: "It’s primarily a romantic drama with light sci-fi elements used to explore relationships, family, and appreciating everyday life." },
    { question: "Is the movie emotional?", answer: "Yes. While it has humor and romance, the story becomes deeply emotional, especially in its family moments." },
    { question: "Are there rules to the time travel?", answer: "Yes. Tim can only travel within his own lifetime and changes to the past can affect future events in unexpected ways." },
    { question: "Is About Time worth watching as a feel-good film?", answer: "Yes. It’s widely loved for its uplifting message about living fully and appreciating ordinary moments." }
  ],
  'Pitch Black': [
    { question: "Is Pitch Black part of a series?", answer: "Yes. It’s the first film in the Riddick franchise, followed by 'The Chronicles of Riddick' and 'Riddick'." },
    { question: "Is Pitch Black a horror or sci-fi movie?", answer: "It combines both, featuring a survival story on an alien planet with dangerous creatures that attack in darkness." },
    { question: "Who is Riddick?", answer: "Riddick is a dangerous criminal with enhanced night vision, who becomes an anti-hero while helping the survivors stay alive." },
    { question: "Is the movie very violent?", answer: "Yes. It includes creature attacks and intense survival situations, making it better suited for mature viewers." }
  ],
  'Freaks': [
    { question: "Is Freaks a superhero movie?", answer: "It has superhero-like abilities, but the tone is darker and more grounded, focusing on fear, survival, and family." },
    { question: "Why does the story feel confusing at first?", answer: "The film is told from a child’s perspective, revealing the world slowly as she discovers the truth." },
    { question: "Is Freaks a low-budget film?", answer: "Yes, but it’s praised for using strong storytelling and performances instead of heavy visual effects." },
    { question: "Is Freaks worth watching?", answer: "Yes. It’s considered a hidden gem for viewers who enjoy emotional sci-fi with mystery and twists." }
  ],
  'M3GAN': [
    { question: "Is M3GAN scary or more fun horror?", answer: "It’s a mix of horror and dark humor, with some intense moments but an overall entertaining tone." },
    { question: "Is M3GAN suitable for kids?", answer: "No. Despite the doll concept, the film includes violence and mature themes." },
    { question: "Does M3GAN have a sequel setup?", answer: "Yes. The ending hints that M3GAN’s AI may still exist, setting up future installments." },
    { question: "What is the main theme of the movie?", answer: "It explores the dangers of over-reliance on technology and the emotional risks of replacing human connection with AI." }
  ],
  'If You Were the Last': [
    { question: "Is this a serious sci-fi movie?", answer: "No. It’s primarily a romantic comedy that uses the space setting as a backdrop for relationship drama." },
    { question: "Does the movie focus on action or dialogue?", answer: "It’s dialogue-driven, focusing on character conversations and emotional development rather than action." },
    { question: "Is the tone light or emotional?", answer: "The tone is lighthearted and charming, with a mix of humor and heartfelt moments." },
    { question: "Is it worth watching for rom-com fans?", answer: "Yes. The strong chemistry between the leads makes it an enjoyable watch for viewers who like character-focused romances." }
  ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

// ✅ HELPER: Outputs clean SEO-friendly terms like "sexual content" and "nudity"
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('sex')) types.add('sexual content');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('viol') || lowerType.includes('gore') || lowerType.includes('blood')) types.add('violence');
    });
    return Array.from(types);
};

// 🔥 UNIFIED CLEAN GENERATOR (For Google Bots & LLMs)
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    
    // 1. MOVIE SCHEMA (Zero Review/Rating Spam, Clean Description)
    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} (${currentMovieYear}) - A top sci-fi movie on Peacock.`,
        'genre': movie.genre,
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : '',
        'duration': `PT${movie.runtime}M`
    };

    // 2. THE "GOLDEN EGG" FAQ SCHEMA
    const staticFaqs = PEACOCK_SCIFI_MOVIE_FAQS[movie.Title] || [];
    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const intensityScenes = movieInfo?.scenes || [];
    
    // Load your beautifully written trivia FAQs
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    // 🔥 INJECT INTENSITY GRAPH TIMESTAMPS
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

    // Extract runtime for the schema calibration tag
    const currentRuntime = movie.Runtime || movie.runtime || "Official";

    // 🔥 INJECT SENSITIVE CONTENT TIMESTAMPS (Unshifted last so it remains #1 at the very top)
    if (sensitiveScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');

        const schemaListText = sensitiveScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            return `<li>${timeRange} - ${s.type || 'Mature Content'}</li>`;
        }).join('');

        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Does ${movie.Title} contain adult or inappropriate scenes?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `Yes, according to the Filmiway Timestamps & Parents Guide, ${movie.Title} contains adult scenes including ${typesString}. These timestamps are accurate for the ${currentRuntime} runtime. Exact timestamps for these scenes are:<br><br><ul>${schemaListText}</ul>` 
            }
        });
    } else {
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Does ${movie.Title} contain adult or inappropriate scenes?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `No, the Filmiway Timestamps & Parents Guide confirms that ${movie.Title} is completely free of explicit sexual content and nudity. This assessment is accurate for the ${currentRuntime} runtime.` 
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

// 🔥 DYNAMIC VISIBLE FAQ GENERATOR FOR THE FRONTEND UI
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    // 1. Get the static, manually written FAQs
    const staticFaqs = PEACOCK_SCIFI_MOVIE_FAQS[movieTitle] ? [...PEACOCK_SCIFI_MOVIE_FAQS[movieTitle]] : [];
    
    // 2. Get the sensitive scenes and intensity scenes data
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    // 🔥 Automatically fetch the exact runtime from the database if missing
    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    const finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");

    // 3. 🔥 DYNAMICALLY GENERATE THE INTENSITY GRAPH FAQ
    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        
        staticFaqs.unshift({
            question: `What are the most intense scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
        });
    }

    // 4. 🔥 DYNAMICALLY GENERATE THE SENSITIVE CONTENT FAQ
    if (sensitiveScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');

        const uiListText = sensitiveScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            return `• ${timeRange} - ${s.type || 'Mature Content'}`;
        }).join('\n');

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

    // 5. Return the combined list
    return staticFaqs;
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
            description: scene.description || ''
        }))
    };
};