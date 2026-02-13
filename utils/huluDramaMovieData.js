// utils/huluDramaMovieData.js - HULU DRAMA COLLECTION DATA
// Emotional Impact, Character Depth, and Human Connection

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 85350, "imdbID": "tt1065073", "Title": "Boyhood", "year": 2014, "genre": "Drama", "runtime": 165, "rank": 1 },
    { "tmdbId": 976893, "imdbID": "tt27503384", "Title": "Perfect Days", "year": 2023, "genre": "Drama", "runtime": 124, "rank": 2 },
    { "tmdbId": 167073, "imdbID": "tt2381111", "Title": "Brooklyn", "year": 2015, "genre": "Romance", "runtime": 111, "rank": 3 },
    { "tmdbId": 1152378, "imdbID": "tt27209383", "Title": "Small Things Like These", "year": 2024, "genre": "Drama", "runtime": 98, "rank": 4 },
    { "tmdbId": 994108, "imdbID": "tt21192142", "Title": "All of Us Strangers", "year": 2023, "genre": "Fantasy", "runtime": 105, "rank": 5 },
    { "tmdbId": 1016084, "imdbID": "tt21867434", "Title": "BlackBerry", "year": 2023, "genre": "Comedy", "runtime": 120, "rank": 6 },
    { "tmdbId": 1013850, "imdbID": "tt21823606", "Title": "A Real Pain", "year": 2024, "genre": "Comedy", "runtime": 90, "rank": 7 },
    { "tmdbId": 1214469, "imdbID": "tt30321095", "Title": "Ghostlight", "year": 2024, "genre": "Drama", "runtime": 115, "rank": 8 },
    { "tmdbId": 773, "imdbID": "tt0449059", "Title": "Little Miss Sunshine", "year": 2006, "genre": "Comedy", "runtime": 101, "rank": 9 },
    { "tmdbId": 919570, "imdbID": "tt18550182", "Title": "R.M.N.", "year": 2022, "genre": "Drama", "runtime": 125, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Grief, Language, and Emotional Trauma)
export const SENSITIVE_TIMELINES = {
    // 1. Boyhood
    85350: { 
        scenes: [] // No sexual content found
    },

    // 2. Perfect Days
    976893: { 
        scenes: [
            { start: "0:23:05", end: "0:23:25", type: "Partial Nudity", severity: "Low" }
        ] 
    }, 
    
    // 3. Brooklyn
    167073: { 
        scenes: [] // No sexual content found
    },

    // 4. Small Things Like These
    1152378: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Sex", severity: "Moderate" }
        ] 
    },

    // 5. All of Us Strangers
    994108: { 
        scenes: [
            { start: "0:26:30", end: "0:28:47", type: "Sex (No Nudity)", severity: "Moderate" }
        ] 
    },

    // 6. BlackBerry
    1016084: { 
        scenes: [] // No sexual content found
    },

    // 7. A Real Pain
    1013850: { 
        scenes: [] // No sexual content found
    },

    // 8. Ghostlight
    1214469: { 
        scenes: [] // No sexual content found
    },

    // 9. Little Miss Sunshine
    773: { 
        scenes: [] // No sexual content found
    },

    // 10. R.M.N.
    919570: { 
        scenes: [] // No sexual content found
    }
};

export const FALLBACK_POSTERS = {
    85350: "https://image.tmdb.org/t/p/w500/1QNO36V0qEf04d9bY58557053.jpg",
    976893: "https://image.tmdb.org/t/p/w500/hcQED2d3y28Wp3r37sL9s6576.jpg",
    167073: "https://image.tmdb.org/t/p/w500/9J473557530663.jpg",
    1152378: "https://image.tmdb.org/t/p/w500/22374774.jpg",
    994108: "https://image.tmdb.org/t/p/w500/2938475.jpg",
    1016084: "https://image.tmdb.org/t/p/w500/9837475.jpg",
    1013850: "https://image.tmdb.org/t/p/w500/1123884.jpg",
    1214469: "https://image.tmdb.org/t/p/w500/2938475.jpg",
    773: "https://image.tmdb.org/t/p/w500/w128475.jpg",
    919570: "https://image.tmdb.org/t/p/w500/1928374.jpg"
};



// ✅ HELPER: Updated for Emotional Impact
const createMovieData = (data) => ({
    emotionalIntensity: 85,    // Default High Emotion
    complexityLevel: "HIGH",
    dominantColor: "#1e293b", // Slate default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Boyhood (2014) [ID: 85350]
    // Curve: Wonder -> Conflict -> Angst -> Breakdown (Peak) -> Acceptance.
    // Peak: 96 (Mom's Breakdown - Existential Rupture).
    85350: createMovieData({ 
        emotionalIntensity: 98, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#3b82f6", rating: 8.0, criticsScore: 97, audienceScore: 80, director: "Richard Linklater", 
        cast: ["Ellar Coltrane", "Patricia Arquette", "Ethan Hawke"], boxOffice: "$57 million", budget: "$4 million", 
        dna: { "Drama": 60, "Coming-of-Age": 30, "Family": 10 }, 
        scenes: [
            { time: 15, intensity: 25, label: "Childhood Wonder", color: "#60a5fa" }, // Setup
            { time: 60, intensity: 65, label: "Broken Home", color: "#ef4444" }, // Tension
            { time: 100, intensity: 55, label: "Teenage Angst", color: "#f59e0b" }, // Lull before storm
            { time: 140, intensity: 96, label: "Mom's Breakdown", color: "#b91c1c" }, // PEAK TRAUMA
            { time: 160, intensity: 70, label: "College Sunset", color: "#3b82f6" } // Resolution
        ],
        synopsis: "Filmed over 12 years with the same cast, 'Boyhood' is a groundbreaking cinematic experiment that tracks the life of Mason from age 6 to 18. It captures the fleeting, ordinary moments of growing up—family dinners, road trips, and first loves—creating a profoundly moving portrait of the passage of time itself.",
        themes: ["Time", "Growth", "Parenting"]
    }),

    // 2. Perfect Days (2023) [ID: 976893]
    // Curve: Routine -> Disturbance -> Connection -> Reflection -> Catharsis.
    // Peak: 92 (Final Drive - Emotional Overflow).
    976893: createMovieData({ 
        emotionalIntensity: 88, 
        complexityLevel: "MEDITATIVE", 
        dominantColor: "#15803d", rating: 7.9, criticsScore: 96, audienceScore: 92, director: "Wim Wenders", 
        cast: ["Kōji Yakusho", "Tokio Emoto"], boxOffice: "$24 million", budget: "$5 million", 
        dna: { "Drama": 70, "Slice of Life": 20, "Music": 10 }, 
        scenes: [
            { time: 15, intensity: 15, label: "The Routine", color: "#86efac" }, // Ambient
            { time: 45, intensity: 40, label: "Tree Shadows", color: "#22c55e" }, // Engagement
            { time: 80, intensity: 65, label: "The Niece", color: "#facc15" }, // Disruption
            { time: 100, intensity: 82, label: "The Sister", color: "#ef4444" }, // Conflict
            { time: 120, intensity: 92, label: "Feeling Good", color: "#f59e0b" } // PEAK CATHARSIS
        ],
        synopsis: "Hirayama cleans public toilets in Tokyo. He seems content with his simple, structured life devoted to music, books, and trees. However, a series of unexpected encounters gradually reveal more of his past. A quiet, deeply affecting masterpiece about finding beauty in the mundane and the dignity of labor.",
        themes: ["Routine", "Simplicity", "Shadows"]
    }),

    // 3. Brooklyn (2015) [ID: 167073]
    // Curve: Departure -> Loss -> Love -> Dilemma -> Choice.
    // Peak: 88 (The Return - Identity Crisis).
    167073: createMovieData({ 
        emotionalIntensity: 90, 
        complexityLevel: "HEARTFELT", 
        dominantColor: "#06b6d4", rating: 7.5, criticsScore: 97, audienceScore: 88, director: "John Crowley", 
        cast: ["Saoirse Ronan", "Emory Cohen", "Domhnall Gleeson"], boxOffice: "$62 million", budget: "$11 million", 
        dna: { "Romance": 50, "Drama": 30, "History": 20 }, 
        scenes: [
            { time: 20, intensity: 60, label: "Homesickness", color: "#64748b" }, // Heavy start
            { time: 50, intensity: 40, label: "New Love", color: "#ec4899" }, // Relief
            { time: 80, intensity: 85, label: "Tragic News", color: "#1e3a8a" }, // Crisis
            { time: 95, intensity: 88, label: "Two Lives", color: "#f59e0b" }, // PEAK CONFLICT
            { time: 110, intensity: 75, label: "The Choice", color: "#06b6d4" } // Resolution
        ],
        synopsis: "An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local Italian plumber. When her past catches up with her, she must choose between two countries and the lives that exist within them. A lush, sweeping story about the definition of 'home'.",
        themes: ["Immigration", "Home", "Identity"]
    }),

    // 4. Small Things Like These (2024) [ID: 1152378]
    // Curve: Routine -> Discovery -> Silence -> Confrontation -> Act.
    // Peak: 85 (The Walk Home - Moral Crisis).
    1152378: createMovieData({ 
        emotionalIntensity: 85, 
        complexityLevel: "SUBTLE", 
        dominantColor: "#475569", rating: 7.6, criticsScore: 92, audienceScore: 80, director: "Tim Mielants", 
        cast: ["Cillian Murphy", "Eileen Walsh"], boxOffice: "$4 million", budget: "N/A", 
        dna: { "Drama": 70, "History": 20, "Mystery": 10 }, 
        scenes: [
            { time: 15, intensity: 20, label: "Coal Delivery", color: "#1e293b" }, // Setup
            { time: 40, intensity: 55, label: "The Discovery", color: "#b91c1c" }, // Engagement
            { time: 65, intensity: 45, label: "Silent Complicity", color: "#64748b" }, // Tension drop
            { time: 80, intensity: 75, label: "The Confrontation", color: "#ef4444" }, // Pressure
            { time: 95, intensity: 85, label: "The Walk Home", color: "#f59e0b" } // PEAK DECISION
        ],
        synopsis: "Set in 1985 Ireland, a coal merchant discovers disturbing secrets kept by the local convent—and uncovers truths about his own life. A restrained, devastating look at the Magdalene Laundries and the heavy weight of silence in a complicit community.",
        themes: ["Complicity", "Courage", "Silence"]
    }),

    // 5. All of Us Strangers (2023) [ID: 994108]
    // Curve: Isolation -> Connection -> Memory -> Trauma -> Devastation.
    // Peak: 98 (The Diner - Grief Rupture).
    994108: createMovieData({ 
        emotionalIntensity: 99, 
        complexityLevel: "DEVASTATING", 
        dominantColor: "#7e22ce", rating: 7.7, criticsScore: 96, audienceScore: 90, director: "Andrew Haigh", 
        cast: ["Andrew Scott", "Paul Mescal", "Claire Foy"], boxOffice: "$20 million", budget: "N/A", 
        dna: { "Fantasy": 30, "Drama": 40, "Romance": 30 }, 
        scenes: [
            { time: 20, intensity: 40, label: "The Encounter", color: "#fbbf24" }, // Intrigue
            { time: 50, intensity: 65, label: "Christmas Past", color: "#16a34a" }, // Nostalgia
            { time: 80, intensity: 98, label: "The Diner", color: "#9333ea" }, // PEAK GRIEF
            { time: 95, intensity: 90, label: "The Truth", color: "#7e22ce" }, // Shock
            { time: 105, intensity: 85, label: "Power of Love", color: "#f472b6" } // Lingering
        ],
        synopsis: "A screenwriter drawn back to his childhood home enters a metaphysical relationship with his mysterious neighbor, while discovering his parents appear to be living there just as they were on the day they died, 30 years ago. A ghost story that breaks your heart in the most beautiful way possible.",
        themes: ["Grief", "Loneliness", "Queer Identity"]
    }),

    // 6. BlackBerry (2023) [ID: 1016084]
    // Curve: Idea -> Success -> Pressure -> Crack -> Collapse.
    // Peak: 88 (Hostile Takeover - Corporate Violence).
    1016084: createMovieData({ 
        emotionalIntensity: 82, 
        complexityLevel: "KINETIC", 
        dominantColor: "#320f70cf", rating: 7.4, criticsScore: 98, audienceScore: 94, director: "Matt Johnson", 
        cast: ["Jay Baruchel", "Glenn Howerton"], boxOffice: "$2.8 million", budget: "$5 million", 
        dna: { "Comedy": 30, "Drama": 50, "Biography": 20 }, 
        scenes: [
            { time: 15, intensity: 35, label: "The Pitch", color: "#2563eb" }, // Energy
            { time: 50, intensity: 65, label: "Market Dominance", color: "#000000" }, // Success
            { time: 80, intensity: 88, label: "Hostile Takeover", color: "#dc2626" }, // PEAK STRESS
            { time: 100, intensity: 75, label: "iPhone Launch", color: "#7f1d1d" }, // Panic
            { time: 115, intensity: 60, label: "The End", color: "#52525b" } // Silence
        ],
        synopsis: "The meteoric rise and catastrophic demise of the world's first smartphone. Driven by a volatile partnership between a tech genius and a shark-like businessman, it's a fast-paced, tragedy-tinged drama about how ego and refusal to adapt can destroy an empire.",
        themes: ["Hubris", "Tech History", "Betrayal"]
    }),

    // 7. A Real Pain (2024) [ID: 1013850]
    // Curve: Reunion -> Friction -> Bonding -> Explosion -> Departure.
    // Peak: 85 (The Argument - Sibling Crisis).
    1013850: createMovieData({ 
        emotionalIntensity: 87, 
        complexityLevel: "INTIMATE", 
        dominantColor: "#facc15", rating: 7.6, criticsScore: 90, audienceScore: 85, director: "Jesse Eisenberg", 
        cast: ["Jesse Eisenberg", "Kieran Culkin"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Comedy": 40, "Drama": 50, "Road Movie": 10 }, 
        scenes: [
            { time: 25, intensity: 30, label: "Train Talk", color: "#facc15" }, // Setup
            { time: 50, intensity: 55, label: "Holocaust Memorial", color: "#57534e" }, // Weight
            { time: 70, intensity: 85, label: "The Argument", color: "#ef4444" }, // PEAK CONFLICT
            { time: 80, intensity: 65, label: "Reconciliation", color: "#3b82f6" }, // Cooling
            { time: 90, intensity: 50, label: "Airport Goodbye", color: "#9ca3af" } // Resolution
        ],
        synopsis: "Mismatched cousins David and Benji reunite for a tour through Poland to honor their beloved grandmother. The adventure takes a turn when old tensions resurface against the backdrop of their family history. A sharp, funny, and melancholic look at intergenerational trauma.",
        themes: ["Family", "Trauma", "Jewish Identity"]
    }),

    // 8. Ghostlight (2024) [ID: 1214469]
    // Curve: Repression -> Expression -> Connection -> Catharsis -> Peace.
    // Peak: 92 (The Performance - Emotional Release).
    1214469: createMovieData({ 
        emotionalIntensity: 92, 
        complexityLevel: "HEALING", 
        dominantColor: "#4f46e5", rating: 7.8, criticsScore: 100, audienceScore: 90, director: "Kelly O'Sullivan", 
        cast: ["Keith Kupferer", "Katherine Mallen Kupferer"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Drama": 80, "Art": 10, "Family": 10 }, 
        scenes: [
            { time: 20, intensity: 45, label: "The Outburst", color: "#dc2626" }, // Anger
            { time: 50, intensity: 35, label: "Rehearsal", color: "#8b5cf6" }, // Calm
            { time: 85, intensity: 75, label: "The Realization", color: "#f472b6" }, // Build
            { time: 100, intensity: 92, label: "The Performance", color: "#4f46e5" }, // PEAK RELEASE
            { time: 115, intensity: 60, label: "Family Hug", color: "#a78bfa" } // Peace
        ],
        synopsis: "A construction worker unexpectedly joins a local theater production of Romeo and Juliet. Through the drama onstage, he begins to process a personal tragedy he has been unable to discuss with his family. A beautiful testament to the healing power of art and community.",
        themes: ["Grief", "Theater", "Redemption"]
    }),

    // 9. Little Miss Sunshine (2006) [ID: 773]
    // Curve: Hope -> Disaster -> Grief -> Unity -> Joy.
    // Peak: 88 (Super Freak Dance - Joyful Rebellion).
    773: createMovieData({ 
        emotionalIntensity: 85, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#facc15", rating: 7.8, criticsScore: 91, audienceScore: 91, director: "Jonathan Dayton", 
        cast: ["Steve Carell", "Toni Collette", "Greg Kinnear"], boxOffice: "$100 million", budget: "$8 million", 
        dna: { "Comedy": 40, "Drama": 40, "Road Movie": 20 }, 
        scenes: [
            { time: 30, intensity: 35, label: "The Van Starts", color: "#facc15" }, // Action
            { time: 60, intensity: 75, label: "Grandpa's Death", color: "#1e293b" }, // Grief
            { time: 80, intensity: 82, label: "Colorblind Test", color: "#ef4444" }, // Despair
            { time: 95, intensity: 88, label: "Super Freak Dance", color: "#eab308" }, // PEAK JOY
            { time: 100, intensity: 65, label: "The Gate", color: "#fcd34d" } // Relief
        ],
        synopsis: "A family determined to get their young daughter into the finals of a beauty pageant takes a cross-country trip in their VW bus. With a drug-addicted grandfather, a suicidal uncle, and a mute brother, the Hoover family discovers that being a 'loser' isn't the worst thing in the world.",
        themes: ["Dysfunctional Family", "Success", "Acceptance"]
    }),

    // 10. R.M.N. (2022) [ID: 919570]
    // Curve: Return -> Unease -> Conflict -> Explosion -> Ambiguity.
    // Peak: 90 (Town Hall Meeting - Social Rupture).
    919570: createMovieData({ 
        emotionalIntensity: 88, 
        complexityLevel: "COMPLEX", 
        dominantColor: "#91420eff", rating: 7.4, criticsScore: 95, audienceScore: 68, director: "Cristian Mungiu", 
        cast: ["Marin Grigore", "Judith State"], boxOffice: "$1 million", budget: "N/A", 
        dna: { "Drama": 60, "Politics": 30, "Thriller": 10 }, 
        scenes: [
            { time: 25, intensity: 20, label: "The Bakery", color: "#57534e" }, // Unease
            { time: 60, intensity: 55, label: "The Forest", color: "#064e3b" }, // Mystery
            { time: 90, intensity: 90, label: "Town Hall Meeting", color: "#b91c1c" }, // PEAK TENSION
            { time: 110, intensity: 75, label: "The House", color: "#7f1d1d" }, // Threat
            { time: 125, intensity: 60, label: "The Bear", color: "#000000" } // Ambiguity
        ],
        synopsis: "A gripping analysis of the deep-seated xenophobia and conflict in a small multi-ethnic Transylvanian village. When a local bakery hires foreign workers, the community's veneer of peace cracks, revealing primal fears and ancient hatreds. A masterclass in social tension.",
        themes: ["Xenophobia", "Globalism", "Tradition"]
    })
};
export const STRATEGIC_QUOTES = {
    85350: "The moment seizes us.",
    976893: "Next time is next time. Now is now.",
    167073: "You'll feel so homesick that you'll want to die, and there's nothing you can do about it apart from endure it.",
    1152378: "If you look at the small things, the big things take care of themselves.",
    994108: "I've always been lonely. That's just the way it is.",
    1016084: "I'm from Waterloo! Where the vampires hang out!",
    1013850: "My pain is real, David.",
    1214469: "It's not real, but it's true.",
    773: "A real loser is someone who's so afraid of not winning he doesn't even try.",
    919570: "The wild animals are closer than you think."
};

export const HULU_DRAMA_MOVIE_FAQS = {
    'Boyhood': [
        { question: "Did they really film Boyhood for 12 years?", answer: "Yes. Director Richard Linklater gathered the cast for a few weeks every year from 2002 to 2013 to film short segments. The actors, including Ellar Coltrane, literally age on screen, creating a level of realism impossible to fake with makeup or CGI." },
        { question: "Is Boyhood scripted?", answer: "Yes, but it evolved. While there was a general narrative arc, Linklater wrote the specific scenes for each year shortly before filming, incorporating changes in the actors' lives and personalities into their characters." },
        { question: "What is the meaning of the ending?", answer: "The final shot of Mason hiking suggests that life isn't about 'seizing the moment' but realizing that 'the moment seizes us.' It emphasizes that life is a series of present moments, always moving forward." }
    ],
    'Perfect Days': [
        { question: "Why does he clean toilets?", answer: "Hirayama's job represents his commitment to humility, service, and discipline. The film elevates a 'lowly' profession to an art form, suggesting that dignity comes from how you do your work, not what the work is." },
        { question: "Does Hirayama have a dark past?", answer: "The film hints at a wealthy, perhaps traumatic upbringing through the visit of his sister and his tears. However, it never explicitly explains it, focusing instead on the peace he has built for himself in the present." },
        { question: "What is the song at the end?", answer: "The final song is 'Feeling Good' by Nina Simone. The long close-up of Hirayama's face, mixing joy and sorrow, perfectly captures the bittersweet beauty of being alive." },
        { question: "Does Perfect Days have nudity or sex scenes?", answer: "Perfect Days contains a brief scene with non-sexual partial nudity at approximately 0:23:05. The film is generally meditative and not explicit." }
    ],
    'Brooklyn': [
        { question: "Why does Eilis go back to Ireland?", answer: "She returns due to a family tragedy. While there, she falls into a comfortable life that represents the 'path not taken.' Her eventual return to Brooklyn is a choice to embrace her future over the comfort of her past." },
        { question: "Is Brooklyn based on a book?", answer: "Yes, it is based on the award-winning novel by Colm Tóibín. Nick Hornby wrote the screenplay, which was praised for capturing the internal emotional state of the book." }
    ],
    'Small Things Like These': [
        { question: "What are the Magdalene Laundries?", answer: "They were institutions in Ireland run by the Catholic Church where 'fallen women' (unmarried mothers, etc.) were confined and forced to work in harsh conditions. The film exposes the community's silent complicity in this system." },
        { question: "Why is the movie so quiet?", answer: "The silence reflects the culture of fear and repression in the town. Everyone knows what is happening at the convent, but speaking up would risk their livelihood and social standing." },
        { question: "Does Small Things Like These have nudity or sex scenes?", answer: "Yes, Small Things Like These includes a scene with sex from approximately 1:10:00 to 1:15:00. Our content timeline provides more specific details for viewers." }
    ],
    'All of Us Strangers': [
        { question: "Are the parents ghosts?", answer: "The film leaves this ambiguous. They could be ghosts, or they could be manifestations of Adam's grief and longing—a way for his mind to finally have the conversations he never got to have before they died." },
        { question: "What happens to Harry?", answer: "The ending reveals a devastating truth about Harry (Paul Mescal) that recontextualizes their entire relationship. It suggests that Adam's journey was not just about his parents, but about acknowledging the loneliness of his present." },
        { question: "Is it a horror movie?", answer: "No, but it uses the visual language of a ghost story (empty buildings, shadows, apparitions) to explore the horror of grief and isolation rather than fear." },
        { question: "Does All of Us Strangers have nudity or sex scenes?", answer: "Yes, All of Us Strangers features an intimate scene with sexual content but no explicit nudity, occurring from approximately 0:26:30 to 0:28:47. The film's focus is on emotional connection and grief." }
    ],
    'BlackBerry': [
        { question: "Is the BlackBerry movie accurate?", answer: "It is a dramatization. While the major beats (the rise, the keyboard obsession, the iPhone killing it) are true, many character interactions and specific timelines were condensed or exaggerated for dramatic effect." },
        { question: "Why did BlackBerry fail?", answer: "The film argues it was hubris. The founders believed a physical keyboard was irreplaceable and dismissed the iPhone as a toy. By the time they realized the market had shifted to touchscreens and apps, it was too late." }
    ],
    'A Real Pain': [
        { question: "Are they actually cousins?", answer: "No, Jesse Eisenberg and Kieran Culkin are not related, but their chemistry perfectly captures the specific dynamic of family members who love each other but drive each other crazy." },
        { question: "What is the 'Real Pain'?", answer: "The title refers to the contrast between the historical, monumental pain of the Holocaust they are touring, and the modern, internal psychological pain (depression, anxiety) that Benji suffers from. It asks how we validate our own suffering in the face of greater tragedies." }
    ],
    'Ghostlight': [
        { question: "Is the family related in real life?", answer: "Yes! The father, mother, and daughter in the film are played by a real-life family of actors (Keith Kupferer, Tara Mallen, and Katherine Mallen Kupferer). This adds a layer of raw, authentic emotion to their on-screen dynamic." },
        { question: "Why Romeo and Juliet?", answer: "The play deals with the death of children and the grief of parents. By performing it, the characters are forced to confront the very emotions they have been suppressing in their real lives." }
    ],
    'Little Miss Sunshine': [
        { question: "Who directed Little Miss Sunshine?", answer: "It was directed by the husband-and-wife team Jonathan Dayton and Valerie Faris. It was their debut feature film after a career in music videos." },
        { question: "What is the meaning of the dance?", answer: "Olive's 'Super Freak' dance is inappropriate and shocking, but the family joining her on stage is a moment of pure solidarity. It signifies them rejecting society's standards of 'winning' and choosing to support each other instead." }
    ],
    'R.M.N.': [
        { question: "What does R.M.N. mean?", answer: "R.M.N. is the Romanian acronym for an MRI scan (Rezonanță Magnetică Nucleară). It symbolizes the director scanning the brain of a community to reveal the tumors of racism and hatred hiding beneath the surface." },
        { question: "Is the town hall scene real?", answer: "The 17-minute single-take town hall scene is scripted but feels like a documentary. It captures the chaotic, overlapping arguments of a community terrified of change, mirroring real political discourse in Europe." }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size] || 'w500'}${posterPath}`;
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'duration': `PT${movie.runtime}M`,
        'image': FALLBACK_POSTERS[movie.tmdbId] || '',
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
            'bestRating': 10, 
            'worstRating': 1 
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