// utils/peacockComedyMovieData.js - PEACOCK COMEDY COLLECTION DATA
// Ranked by Laughter, Quotability, and Chaos
// CALIBRATION: 0-20 (Setup) | 20-40 (Light) | 40-60 (Funny) | 60-75 (Chaos) | 75-85 (Implosion) | 85-95 (Extreme) | 95-100 (Genre-Defining)

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 762, "imdbID": "tt0071853", "Title": "Monty Python and the Holy Grail", "year": 1975, "genre": "Comedy", "runtime": 91, "rank": 1 },
    { "tmdbId": 8699, "imdbID": "tt0357413", "Title": "Anchorman: The Legend of Ron Burgundy", "year": 2004, "genre": "Comedy", "runtime": 94, "rank": 2 },
    { "tmdbId": 10377, "imdbID": "tt0104952", "Title": "My Cousin Vinny", "year": 1992, "genre": "Comedy", "runtime": 120, "rank": 3 },
    { "tmdbId": 9398, "imdbID": "tt0190138", "Title": "Zoolander", "year": 2001, "genre": "Comedy", "runtime": 90, "rank": 4 },
    { "tmdbId": 9614, "imdbID": "tt0116483", "Title": "Happy Gilmore", "year": 1996, "genre": "Comedy", "runtime": 92, "rank": 5 },
    { "tmdbId": 11974, "imdbID": "tt0096997", "Title": "The 'Burbs", "year": 1989, "genre": "Comedy", "runtime": 101, "rank": 6 },
    { "tmdbId": 5966, "imdbID": "tt0343135", "Title": "Along Came Polly", "year": 2004, "genre": "Comedy", "runtime": 90, "rank": 7 },
    { "tmdbId": 746036, "imdbID": "tt1684562", "Title": "The Fall Guy", "year": 2024, "genre": "Action", "runtime": 126, "rank": 8 },
    { "tmdbId": 1056360, "imdbID": "tt23561236", "Title": "American Fiction", "year": 2023, "genre": "Drama", "runtime": 117, "rank": 9 },
    { "tmdbId": 26454, "imdbID": "tt0306805", "Title": "Deliver Us from Eva", "year": 2003, "genre": "Comedy", "runtime": 105, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Peacock Comedy)
export const SENSITIVE_TIMELINES = {
    // 1. Monty Python
    762: { 
        scenes: [
            { start: "45:10", end: "48:30", type: "Nudity", severity: "Moderate" }, // Castle Anthrax
            { start: "82:00", end: "83:30", type: "Gore", severity: "High" } // Killer Rabbit
        ] 
    },

    // 2. Anchorman
    8699: { 
        scenes: [
            { start: "38:20", end: "39:10", type: "Sexual Content", severity: "Mild" },
            { start: "55:00", end: "56:00", type: "Language", severity: "Moderate" }
        ] 
    },

    // 3. My Cousin Vinny
    10377: { scenes: [] }, // Mostly language

    // 4. Zoolander
    9398: { 
        scenes: [
            { start: "65:30", end: "67:00", type: "Sexual Content", severity: "Moderate" } // Orgy reference
        ] 
    },

    // 5. Happy Gilmore
    9614: { 
        scenes: [
            { start: "35:10", end: "37:00", type: "Violence", severity: "Moderate" } // Bob Barker Fight
        ] 
    },

    // 6. The 'Burbs
    11974: { scenes: [] },

    // 7. Along Came Polly
    5966: { 
        scenes: [
            { start: "12:15", end: "12:30", type: "Nudity", severity: "High" } // The butt cheek scene
        ] 
    },

    // 8. The Fall Guy
    746036: { 
        scenes: [
            { start: "15:20", end: "18:00", type: "Violence", severity: "Moderate" }
        ] 
    },

    // 9. American Fiction
    1056360: { scenes: [] },

    // 10. Deliver Us from Eva
    26454: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    762: "https://image.tmdb.org/t/p/w500/8d83vJ08K90v7f075q5j758d8.jpg",
    8699: "https://image.tmdb.org/t/p/w500/Rjjm284ct8d999.jpg",
    10377: "https://image.tmdb.org/t/p/w500/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    9398: "https://image.tmdb.org/t/p/w500/7B8k7X.jpg",
    9614: "https://image.tmdb.org/t/p/w500/4q2rV9wE9sUuliM90V82LOrH.jpg",
    11974: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qb7P.jpg",
    5966: "https://image.tmdb.org/t/p/w500/1QNO36V0qEf04d9bY58557053.jpg",
    746036: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaPETYiXe2FOUVy.jpg",
    1056360: "https://image.tmdb.org/t/p/w500/uUD28aiP0IsJl5vRrPmuB8prY2g.jpg",
    26454: "https://image.tmdb.org/t/p/w500/2lO3h5d26a27346765727376.jpg"
};

// ✅ HELPER: Single Metric "Laughter Index"
const createMovieData = (data) => ({
    laughterIndex: 85,          // Default
    complexityLevel: "HIGH",
    dominantColor: "#FACC15",   // Comedy Yellow
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Monty Python and the Holy Grail (SURREALIST PEAK)
    762: createMovieData({ 
        laughterIndex: 99, 
        complexityLevel: "SURREALIST", 
        dominantColor: "#a3a3a3", rating: 8.2, criticsScore: 97, audienceScore: 95, director: "Terry Gilliam & Terry Jones", 
        cast: ["Graham Chapman", "John Cleese", "Eric Idle"], boxOffice: "$5 million", budget: "$400k", 
        dna: { "Satire": 50, "Absurdist": 50 },
        scenes: [
            { time: 5, intensity: 40, label: "Coconuts", color: "#d4d4d4" }, // Setup
            { time: 20, intensity: 90, label: "Black Knight", color: "#ef4444" }, // Iconic
            { time: 45, intensity: 60, label: "Knights Who Say Ni", color: "#16a34a" }, // Absurd
            { time: 80, intensity: 95, label: "Killer Rabbit", color: "#dc2626" }, // PEAK CHAOS
            { time: 90, intensity: 100, label: "The Police", color: "#2563eb" } // Meta Ending
        ],
        synopsis: "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering silly obstacles, invincible knights, and killer rabbits along the way.",
        themes: ["Absurdism", "Medieval", "Meta"]
    }),

    // 2. Anchorman (QUOTABLE PEAK)
    8699: createMovieData({ 
        laughterIndex: 95, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#b91c1c", rating: 7.2, criticsScore: 66, audienceScore: 86, director: "Adam McKay", 
        cast: ["Will Ferrell", "Christina Applegate", "Steve Carell"], boxOffice: "$90 million", budget: "$26 million", 
        dna: { "Satire": 60, "Slapstick": 40 },
        scenes: [
            { time: 15, intensity: 40, label: "Jazz Flute", color: "#f59e0b" }, 
            { time: 45, intensity: 95, label: "News Team Fight", color: "#dc2626" }, // PEAK CHAOS
            { time: 60, intensity: 80, label: "Milk was a bad choice", color: "#ea580c" }, 
            { time: 75, intensity: 70, label: "Bear Pit", color: "#78350f" },
            { time: 90, intensity: 50, label: "Stay Classy", color: "#be123c" } 
        ],
        synopsis: "In 1970s San Diego, Ron Burgundy is the top-rated newsman in a male-dominated industry. His world is upended when an ambitious female reporter arrives, sparking a bitter feud that escalates into total absurdity.",
        themes: ["Ego", "Sexism", "70s Style"]
    }),

    // 3. My Cousin Vinny (LEGAL COMEDY PEAK)
    10377: createMovieData({ 
        laughterIndex: 88, 
        complexityLevel: "SMART", 
        dominantColor: "#7c3aed", rating: 7.6, criticsScore: 87, audienceScore: 87, director: "Jonathan Lynn", 
        cast: ["Joe Pesci", "Marisa Tomei", "Ralph Macchio"], boxOffice: "$64 million", budget: "$11 million", 
        dna: { "Courtroom": 50, "Culture Clash": 50 },
        scenes: [
            { time: 20, intensity: 30, label: "Leather Jacket", color: "#4c1d95" },
            { time: 45, intensity: 60, label: "Two Yutes", color: "#6d28d9" },
            { time: 60, intensity: 50, label: "Biological Clock", color: "#db2777" },
            { time: 85, intensity: 80, label: "Tire Expert", color: "#c026d3" }, // PEAK TRIUMPH
            { time: 110, intensity: 40, label: "Case Dismissed", color: "#8b5cf6" }
        ],
        synopsis: "Two New Yorkers traveling through Alabama are mistakenly arrested for murder. Their only hope is their cousin Vinny, a loudmouth lawyer with no trial experience who clashes hilariously with the conservative Southern judge.",
        themes: ["Justice", "Underdog", "Culture Clash"]
    }),

    // 4. Zoolander (FASHION SATIRE)
    9398: createMovieData({ 
        laughterIndex: 90, 
        complexityLevel: "STYLISH", 
        dominantColor: "#0ea5e9", rating: 6.5, criticsScore: 64, audienceScore: 80, director: "Ben Stiller", 
        cast: ["Ben Stiller", "Owen Wilson", "Will Ferrell"], boxOffice: "$60 million", budget: "$28 million", 
        dna: { "Satire": 70, "Spy": 30 },
        scenes: [
            { time: 10, intensity: 30, label: "Eugoogly", color: "#38bdf8" },
            { time: 25, intensity: 90, label: "Gasoline Fight", color: "#f97316" }, // PEAK STUPIDITY
            { time: 50, intensity: 75, label: "Walk-Off", color: "#0284c7" },
            { time: 70, intensity: 85, label: "The Files", color: "#dc2626" }, // Smash Computer
            { time: 85, intensity: 80, label: "Magnum", color: "#6366f1" }
        ],
        synopsis: "Derek Zoolander is a dim-witted male model who has lost his spot as top dog. Brainwashed by a fashion mogul to assassinate the Prime Minister of Malaysia, he must team up with his rival Hansel to save the day.",
        themes: ["Vanity", "Fashion", "Conspiracy"]
    }),

    // 5. Happy Gilmore (RAGE COMEDY)
    9614: createMovieData({ 
        laughterIndex: 87, 
        complexityLevel: "CLASSIC SANDLER", 
        dominantColor: "#16a34a", rating: 7.0, criticsScore: 61, audienceScore: 85, director: "Dennis Dugan", 
        cast: ["Adam Sandler", "Christopher McDonald", "Julie Bowen"], boxOffice: "$41 million", budget: "$12 million", 
        dna: { "Sports": 50, "Slapstick": 50 },
        scenes: [
            { time: 15, intensity: 40, label: "Batting Cages", color: "#22c55e" },
            { time: 40, intensity: 60, label: "Mista Mista", color: "#ea580c" },
            { time: 60, intensity: 95, label: "Bob Barker Fight", color: "#dc2626" }, // PEAK RAGE
            { time: 75, intensity: 50, label: "Happy Place", color: "#fcd34d" },
            { time: 88, intensity: 80, label: "The Putt", color: "#15803d" }
        ],
        synopsis: "A rejected hockey player puts his skills to the golf course to save his grandmother's house. His aggressive style and foul mouth make him an anti-hero on the pro tour, drawing the ire of the arrogant Shooter McGavin.",
        themes: ["Anger Management", "Golf", "Grandma"]
    }),

    // 6. The 'Burbs (CULT PARANOIA)
    11974: createMovieData({ 
        laughterIndex: 82, 
        complexityLevel: "CULT", 
        dominantColor: "#1e293b", rating: 6.9, criticsScore: 53, audienceScore: 78, director: "Joe Dante", 
        cast: ["Tom Hanks", "Bruce Dern", "Carrie Fisher"], boxOffice: "$49 million", budget: "$18 million", 
        dna: { "Dark Comedy": 60, "Mystery": 40 },
        scenes: [
            { time: 10, intensity: 20, label: "The Klopeks", color: "#334155" },
            { time: 40, intensity: 50, label: "The Stakeout", color: "#475569" },
            { time: 60, intensity: 65, label: "Sardine?", color: "#94a3b8" },
            { time: 85, intensity: 85, label: "Digging for Bones", color: "#dc2626" }, // PEAK MANIA
            { time: 95, intensity: 90, label: "The Trunk Reveal", color: "#b91c1c" }
        ],
        synopsis: "An overstressed suburbanite and his nosy neighbors become convinced that the new family on the block are ritualistic murderers. Their paranoia escalates into a full-scale investigation that threatens to destroy the entire neighborhood.",
        themes: ["Paranoia", "Suburbia", "Neighbors"]
    }),

    // 7. Along Came Polly (CRINGE COMEDY)
    5966: createMovieData({ 
        laughterIndex: 78, 
        complexityLevel: "ROM-COM", 
        dominantColor: "#f59e0b", rating: 6.0, criticsScore: 27, audienceScore: 47, director: "John Hamburg", 
        cast: ["Ben Stiller", "Jennifer Aniston", "Philip Seymour Hoffman"], boxOffice: "$178 million", budget: "$42 million", 
        dna: { "Romance": 60, "Slapstick": 40 },
        scenes: [
            { time: 15, intensity: 30, label: "The Wedding", color: "#fbbf24" },
            { time: 35, intensity: 85, label: "Basketball Game", color: "#ef4444" }, // RAIN DANCE
            { time: 55, intensity: 50, label: "Spicy Food", color: "#d97706" },
            { time: 70, intensity: 75, label: "Scuba Diving", color: "#0284c7" },
            { time: 85, intensity: 40, label: "Rooftop", color: "#f59e0b" }
        ],
        synopsis: "A risk-averse risk analyst finds his life in chaos after his wife cheats on him. He rebounds with an old classmate, a free-spirited woman who drags him into a world of spicy food, underground salsa clubs, and pet ferrets.",
        themes: ["Risk", "Opposites Attract", "Freedom"]
    }),

    // 8. The Fall Guy (ACTION COMEDY)
    746036: createMovieData({ 
        laughterIndex: 85, 
        complexityLevel: "SPECTACLE", 
        dominantColor: "#eab308", rating: 7.2, criticsScore: 87, audienceScore: 93, director: "David Leitch", 
        cast: ["Ryan Gosling", "Emily Blunt", "Aaron Taylor-Johnson"], boxOffice: "$173 million", budget: "$130 million", 
        dna: { "Action": 60, "Comedy": 40 },
        scenes: [
            { time: 15, intensity: 45, label: "Stunt Setup", color: "#ca8a04" },
            { time: 40, intensity: 70, label: "Drug Trip Fight", color: "#a855f7" },
            { time: 70, intensity: 60, label: "Karaoke", color: "#ec4899" },
            { time: 95, intensity: 90, label: "The Helicopter Jump", color: "#ef4444" }, // PEAK STUNT
            { time: 110, intensity: 80, label: "Movie Magic", color: "#facc15" }
        ],
        synopsis: "A battered and past-his-prime stuntman finds himself working on a movie directed by his ex-girlfriend. When the film's massive star goes missing, he is tasked with finding him, uncovering a conspiracy that forces him to use his stunt skills for real.",
        themes: ["Stunts", "Movie Making", "Redemption"]
    }),

    // 9. American Fiction (SATIRE PEAK)
    1056360: createMovieData({ 
        laughterIndex: 89, 
        complexityLevel: "INTELLECTUAL", 
        dominantColor: "#475569", rating: 7.5, criticsScore: 93, audienceScore: 96, director: "Cord Jefferson", 
        cast: ["Jeffrey Wright", "Tracee Ellis Ross", "Sterling K. Brown"], boxOffice: "$22 million", budget: "$10 million", 
        dna: { "Satire": 70, "Drama": 30 },
        scenes: [
            { time: 10, intensity: 20, label: "Book Festival", color: "#64748b" },
            { time: 35, intensity: 60, label: "Writing 'My Pafology'", color: "#0f172a" },
            { time: 60, intensity: 85, label: "The Offer", color: "#16a34a" }, // PEAK IRONY
            { time: 85, intensity: 70, label: "Family Dinner", color: "#334155" },
            { time: 110, intensity: 90, label: "The Ending", color: "#000000" }
        ],
        synopsis: "A frustrated novelist who is tired of the establishment profiting from 'Black' entertainment that relies on offensive tropes uses a pen name to write an outlandish 'Black' book of his own. To his horror, the book becomes a massive critical and commercial success.",
        themes: ["Race", "Media", "Integrity"]
    }),

    // 10. Deliver Us from Eva (ROM-COM)
    26454: createMovieData({ 
        laughterIndex: 76, 
        complexityLevel: "SHAKESPEAREAN", 
        dominantColor: "#be123c", rating: 6.2, criticsScore: 44, audienceScore: 82, director: "Gary Hardwick", 
        cast: ["Gabrielle Union", "LL Cool J", "Duane Martin"], boxOffice: "$17 million", budget: "$11 million", 
        dna: { "Romance": 50, "Comedy": 50 },
        scenes: [
            { time: 15, intensity: 30, label: "The Sisters", color: "#f43f5e" },
            { time: 30, intensity: 50, label: "The Bet", color: "#db2777" },
            { time: 60, intensity: 70, label: "Dinner Scene", color: "#be123c" },
            { time: 80, intensity: 85, label: "The Breakup", color: "#881337" }, // PEAK DRAMA
            { time: 95, intensity: 60, label: "Reunion", color: "#fda4af" }
        ],
        synopsis: "Eva is the matriarch of her family who constantly meddles in her sisters' lives. Their husbands hire a smooth-talking ladies' man to date her and distract her, but the plan backfires when he actually falls in love with her. A modern retelling of 'The Taming of the Shrew'.",
        themes: ["Family", "Deception", "Control"]
    })
};

export const STRATEGIC_QUOTES = {
    762: "Your mother was a hamster and your father smelt of elderberries!",
    8699: "I'm in a glass case of emotion!",
    10377: "The two hwat? ...Two yutes.",
    9398: "What is this? A center for ants?!",
    9614: "The price is wrong, bitch.",
    11974: "There go the goddamn brownies!",
    5966: "I sharted.",
    746036: "I gave you a thumbs up.",
    1056360: "The dumber I behave, the richer I get.",
    26454: "I am the man!"
};

export const CINEMATIC_COLORS = {
    "Comedy": "#facc15", "Action": "#ef4444", "Satire": "#475569", "Surrealist": "#a3a3a3"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Weak", color: "#fca5a5", symbol: "🥱", bgColor: "bg-red-200/30", description: "Not funny" },
    { value: 2, label: "Amusing", color: "#fcd34d", symbol: "🙂", bgColor: "bg-yellow-500/30", description: "Some laughs" },
    { value: 3, label: "Hilarious", color: "#16a34a", symbol: "😂", bgColor: "bg-green-600/30", description: 'Laugh out loud' },
    { value: 4, label: "Legendary", color: "#ca8a04", symbol: "🤣", bgColor: "bg-yellow-700/30", description: "Comedy gold" }
];

export const PEACOCK_COMEDY_MOVIE_FAQS = {
    'Monty Python and the Holy Grail': [
        { 
            question: "Why do they use coconuts instead of horses?", 
            answer: "The film had a tiny budget of roughly $400,000. They simply couldn't afford real horses, so they used coconuts to mimic the sound of hooves, turning a financial limitation into one of the most iconic running jokes in film history." 
        },
        { 
            question: "Is the ending a cop-out?", 
            answer: "Many viewers are confused by the sudden ending where the police arrest the cast. This was another budget decision—they ran out of money to film a massive battle scene, so they literally had the cops shut down the movie." 
        }
    ],
    'Anchorman: The Legend of Ron Burgundy': [
        { 
            question: "Is it based on a true story?", 
            answer: "While the characters are fictional, the premise is based on the real-life sexism female reporters faced in the 1970s. Will Ferrell was inspired by a documentary about Jessica Savitch, where a male co-anchor confessed to being chauvinistic." 
        },
        { 
            question: "How much was improvised?", 
            answer: "A huge amount. Adam McKay and Will Ferrell shot so much alternate improvised footage that they actually released a second movie, 'Wake Up, Ron Burgundy: The Lost Movie,' made entirely of deleted scenes and alternate subplots." 
        }
    ],
    'My Cousin Vinny': [
        { 
            question: "Is the law accurate?", 
            answer: "Surprisingly, yes. Legal scholars and professors frequently cite 'My Cousin Vinny' as one of the most accurate depictions of courtroom procedure, cross-examination, and expert witness testimony in cinema history." 
        },
        { 
            question: "Did Marisa Tomei really win an Oscar?", 
            answer: "Yes, she won Best Supporting Actress for her role as Mona Lisa Vito. Despite a long-standing urban legend that the presenter read the wrong name, the Academy has confirmed she was the rightful winner." 
        }
    ],
    'Zoolander': [
        { 
            question: "Why male models?", 
            answer: "This line was actually an ad-lib. Ben Stiller forgot his line after David Duchovny explained the conspiracy, so he just repeated the question. Duchovny's exasperated response, 'Are you serious? I just told you that a moment ago,' was also improvised." 
        },
        { 
            question: "Is the fashion world really like that?", 
            answer: "It is a heightened satire, but many fashion insiders love the movie. The film pokes fun at the vanity and exploitative nature of the industry, which was inspired by a character Stiller created for the VH1 Fashion Awards." 
        }
    ],
    'Happy Gilmore': [
        { 
            question: "Did he really fight Bob Barker?", 
            answer: "Yes, that is the real Bob Barker. He agreed to do the cameo on the condition that he would win the fight. Barker was trained in martial arts and reportedly barely held back during the shoot." 
        },
        { 
            question: "Is the Happy Gilmore swing legal?", 
            answer: "Technically, yes. The run-up swing is not banned by PGA rules, but it is extremely difficult to control. While it generates power, the loss of accuracy makes it impractical for pro golfers (except for long drive contests)." 
        }
    ],
    "The 'Burbs": [
        { 
            question: "Was it filmed on a real street?", 
            answer: "No, it was filmed entirely on the Universal Studios backlot on 'Colonial Street.' This is the same street used for 'Desperate Housewives' (Wisteria Lane) and 'The Munsters'. The artificiality adds to the claustrophobic feel." 
        },
        { 
            question: "Is there an alternate ending?", 
            answer: "Yes, the original ending was darker, implying the Klopeks were innocent and the neighbors were the real villains for their paranoia. The studio demanded a clear villain, so the ending was changed to reveal the Klopeks were indeed murderers." 
        }
    ],
    'Along Came Polly': [
        { 
            question: "Did Ben Stiller really play basketball?", 
            answer: "The scene where Philip Seymour Hoffman ('Rain Dance!') plays basketball is iconic. Hoffman improvised many of his missed shots and clumsy moves, stealing every scene he was in with his commitment to physical comedy." 
        }
    ],
    'The Fall Guy': [
        { 
            question: "Is it a remake?", 
            answer: "It is loosely based on the 1980s TV show 'The Fall Guy' starring Lee Majors. The film updates the concept for modern audiences while paying tribute to the practical stunts that defined the original series." 
        },
        { 
            question: "Did they set a world record?", 
            answer: "Yes, the film broke the Guinness World Record for the most cannon rolls in a car (8.5 rolls). It was performed by stunt driver Logan Holladay, emphasizing the film's dedication to practical effects." 
        }
    ],
    'American Fiction': [
        { 
            question: "Is it based on a book?", 
            answer: "Yes, it is based on the novel 'Erasure' by Percival Everett. The film satirizes the publishing industry's appetite for trauma porn and stereotypical Black narratives." 
        }
    ],
    'Deliver Us from Eva': [
        { 
            question: "Is it Shakespeare?", 
            answer: "Yes, the plot is a modern adaptation of William Shakespeare's 'The Taming of the Shrew.' LL Cool J's character Petruchio corresponds to Shakespeare's Petruchio, and Eva corresponds to Katherina (the Shrew)." 
        }
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
        if (lowerType.includes('violence') || lowerType.includes('blood') || lowerType.includes('gore')) types.add('violence');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PEACOCK_COMEDY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A hilarious comedy movie on Peacock.`,
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