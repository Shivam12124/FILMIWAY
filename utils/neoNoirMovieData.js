// utils/neoNoirMovieData.js - NEO-NOIR COLLECTION DATA ✅
// Movies exploring moral ambiguity, neon-lit anxiety, and the dark underbelly of the city.

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 829, "imdbID": "tt0071315", "Title": "Chinatown", "year": 1974, "genre": "Mystery", "runtime": 130, "rank": 1 },
    { "tmdbId": 5511, "imdbID": "tt0062229", "Title": "Le Samouraï", "year": 1967, "genre": "Crime", "runtime": 105, "rank": 2 },
    { "tmdbId": 64690, "imdbID": "tt0780504", "Title": "Drive", "year": 2011, "genre": "Crime", "runtime": 100, "rank": 3 },
    { "tmdbId": 187, "imdbID": "tt0401792", "Title": "Sin City", "year": 2005, "genre": "Crime", "runtime": 124, "rank": 4 },
    { "tmdbId": 429200, "imdbID": "tt4846232", "Title": "Good Time", "year": 2017, "genre": "Crime", "runtime": 102, "rank": 5 },
    { "tmdbId": 705996, "imdbID": "tt12477480", "Title": "Decision to Leave", "year": 2022, "genre": "Mystery", "runtime": 139, "rank": 6 },
    { "tmdbId": 11454, "imdbID": "tt0091474", "Title": "Manhunter", "year": 1986, "genre": "Crime", "runtime": 120, "rank": 7 },
    { "tmdbId": 9850, "imdbID": "tt0090180", "Title": "To Live and Die in L.A.", "year": 1985, "genre": "Crime", "runtime": 116, "rank": 8 },
    { "tmdbId": 1847, "imdbID": "tt0070334", "Title": "The Long Goodbye", "year": 1973, "genre": "Mystery", "runtime": 112, "rank": 9 },
    { "tmdbId": 10843, "imdbID": "tt0088680", "Title": "After Hours", "year": 1985, "genre": "Comedy", "runtime": 97, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    829: "Forget it, Jake. It's Chinatown.",
    5511: "There is no greater solitude than that of the samurai.",
    64690: "I drive. That's what I do. All I do.",
    187: "Walk down the right back alley in Sin City, and you can find anything.",
    429200: "I think I was a dog in a previous life.",
    705996: "The moment you said you loved me, your love is over.",
    11454: "It's just you and me now, sport.",
    9850: "You want bread? Fuck you. You're dead.",
    1847: "Nothing says goodbye like a bullet.",
    10843: "I just want to live. I just want to go home."
};

// ✅ SENSITIVE TIMELINES (Crucial for High-Volume Timestamps Search)
export const SENSITIVE_TIMELINES = {
    // 1. Chinatown
    829: { 
        scenes: [
            { start: "0:01:55", end: "0:02:15", type: "Sex (Multiple still photos)", severity: "Moderate" },
            { start: "0:37:40", end: "0:37:48", type: "Nudity (Man)", severity: "High" },
            { start: "1:26:42", end: "1:27:34", type: "Nudity (Woman)", severity: "High" },
            { start: "1:29:05", end: "1:29:07", type: "Nudity (Man)", severity: "Mild" }
        ] 
    },
    
    // 2. Le Samouraï
    5511: { scenes: [] },
    
    // 3. Drive
    64690: { 
        scenes: [
            { start: "1:04:41", end: "1:06:25", type: "Nudity (Women)", severity: "High" }
        ] 
    },

    // 4. Sin City
    187: { 
        scenes: [
            { start: "0:56:30", end: "0:58:14", type: "Sex & Nudity", severity: "High" },
            { start: "0:59:45", end: "1:00:30", type: "Nudity (Woman)", severity: "High" }
        ] 
    },

    // 5. Good Time
    429200: { scenes: [] },

    // 6. Decision to Leave
    705996: { scenes: [] },

    // 7. Manhunter
    11454: { scenes: [] },

    // 8. To Live and Die in L.A.
    9850: { 
        scenes: [
            { start: "0:07:57", end: "0:08:08", type: "Nudity (Sculpture)", severity: "Mild" },
            { start: "0:37:37", end: "0:37:44", type: "Sexual Content", severity: "Moderate" },
            { start: "0:44:33", end: "0:45:38", type: "Nudity (Man & Woman) & Sexual Content", severity: "High" },
            { start: "0:49:48", end: "0:50:18", type: "Nudity (Painting)", severity: "Moderate" },
            { start: "0:59:08", end: "0:59:39", type: "Partial Nudity (Man & Woman) & Sexual Content", severity: "High" },
            { start: "1:07:05", end: "1:07:25", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "1:13:50", end: "1:14:47", type: "Nudity (Woman)", severity: "High" },
            { start: "1:40:00", end: "1:40:19", type: "Suggestive Clothing (Lingerie)", severity: "Mild" },
            { start: "1:48:10", end: "1:48:24", type: "Nudity (Woman)", severity: "High" }
        ] 
    },

    // 9. The Long Goodbye
    1847: { 
        scenes: [
            { start: "0:57:50", end: "0:58:07", type: "Nudity (Woman)", severity: "High" }
        ] 
    },

    // 10. After Hours
    10843: { 
        scenes: [
            { start: "0:20:08", end: "0:20:20", type: "Nudity (Woman)", severity: "High" },
            { start: "0:48:20", end: "0:48:45", type: "Partial Nudity (Woman)", severity: "Moderate" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    829: "https://m.media-amazon.com/images/M/MV5BOGZmYWQ0ZWItM2VjMy00MzliLTg4Y2UtNjllODUzODRhYzE4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    5511: "https://m.media-amazon.com/images/M/MV5BMDNkMzdlYTUtYzQ1Ni00NTI4LWJiMTUtOWExYzI5ZjlkYzczXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    64690: "https://m.media-amazon.com/images/M/MV5BMjMwNDIxNTg5MV5BMl5BanBnXkFtZTcwOTE3NDIyNDQ@._V1_SX500.jpg",
    187: "https://m.media-amazon.com/images/M/MV5BODZmYjRlMzItMzI1Mi00Y2E4LWJkNDEtMTQ2MWU0ZDdkNWRiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX500.jpg",
    429200: "https://m.media-amazon.com/images/M/MV5BMTQyNzM2MjcwMV5BMl5BanBnXkFtZTgwNTY2NTYxMzI@._V1_SX500.jpg",
    705996: "https://m.media-amazon.com/images/M/MV5BMTczMWQ2NjItNTE1OC00YTJhLTgzM2YtMjg3ZmFiZmRjM2ZmXkEyXkFqcGdeQXVyMTMzNDk0ODEw._V1_SX500.jpg",
    11454: "https://m.media-amazon.com/images/M/MV5BZWE5MWNjMmYtNzk2Zi00ZDJjLWIzZmUtMTMxYzc1YTRmMDA0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX500.jpg",
    9850: "https://m.media-amazon.com/images/M/MV5BM2U4MDNlNWEtZTc1Ni00MWY3LWI2NmMtYTJiN2ZiZTA0MjA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    1847: "https://m.media-amazon.com/images/M/MV5BMGEwZTNkNzItZTFlYS00ZTFmLWE4NTQtNTE4MGQ2MmNmMTljXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX500.jpg",
    10843: "https://m.media-amazon.com/images/M/MV5BMTQ4NTQ5MTQyMF5BMl5BanBnXkFtZTcwNTI5NjUzMQ@@._V1_SX500.jpg"
};

// ✅ Custom metric for this collection
const createNoirData = (data) => ({
    moralAmbiguity: 90, 
    atmosphericDread: 85,
    complexityLevel: "NOIR",
    dominantColor: "#020617", // Gritty Dark Midnight Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Chinatown
    829: createNoirData({ 
        moralAmbiguity: 100, atmosphericDread: 95, complexityLevel: "FOUNDATIONAL", 
        dominantColor: "#b45309", rating: 8.2, criticsScore: 99, audienceScore: 93, director: "Roman Polanski", 
        cast: ["Jack Nicholson", "Faye Dunaway", "John Huston"], boxOffice: "$29.2 million", budget: "$3 million", 
        dna: { "Mystery": 70, "Crime": 20, "Drama": 10 },
        scenes: [
            { time: 20, intensity: 45, label: "The Fake Mrs. Mulwray" }, 
            { time: 43, intensity: 90, label: "The Knife in the Nose" }, 
            { time: 85, intensity: 80, label: "The Reservoir Clue" }, 
            { time: 112, intensity: 100, label: "My Sister, My Daughter" }, // PRIMARY PEAK
            { time: 128, intensity: 98, label: "Forget it, Jake" } 
        ],
        synopsis: "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption, and murder in 1930s Los Angeles. It is the absolute foundation of the Neo-Noir genre, proving that the rot of capitalism and human depravity always wins against the solitary hero.",
        themes: ["Systemic Corruption", "Nihilism", "Generational Trauma"]
    }),

    // 2. Le Samouraï
    5511: createNoirData({ 
        moralAmbiguity: 92, atmosphericDread: 90, complexityLevel: "MINIMALIST", 
        dominantColor: "#334155", rating: 8.0, criticsScore: 100, audienceScore: 89, director: "Jean-Pierre Melville", 
        cast: ["Alain Delon", "François Périer", "Nathalie Delon"], boxOffice: "N/A", budget: "$1.5 million", 
        dna: { "Crime": 60, "Thriller": 40 },
        scenes: [
            { time: 10, intensity: 80, label: "The Nightclub Hit" }, 
            { time: 35, intensity: 65, label: "The Police Lineup" }, 
            { time: 60, intensity: 85, label: "The Bridge Hand-off" }, 
            { time: 85, intensity: 90, label: "The Subway Chase" }, 
            { time: 100, intensity: 100, label: "The Empty Gun" } // PRIMARY PEAK
        ],
        synopsis: "After executing a hit, a meticulously methodical, solitary assassin is caught in a web of police pressure and betrayal by his employers. A masterpiece of pure, minimalist noir philosophy, setting the template for the stoic, silent killer anti-hero.",
        themes: ["Stoicism", "Fate", "Professional Code"]
    }),

    // 3. Drive
    64690: createNoirData({ 
        moralAmbiguity: 88, atmosphericDread: 98, complexityLevel: "STYLIZED", 
        dominantColor: "#be185d", rating: 7.8, criticsScore: 93, audienceScore: 79, director: "Nicolas Winding Refn", 
        cast: ["Ryan Gosling", "Carey Mulligan", "Albert Brooks"], boxOffice: "$81.4 million", budget: "$15 million", 
        dna: { "Crime": 50, "Thriller": 30, "Romance": 20 },
        scenes: [
            { time: 10, intensity: 90, label: "The Getaway" }, 
            { time: 52, intensity: 95, label: "The Pawn Shop Robbery" }, 
            { time: 66, intensity: 100, label: "The Elevator Kiss & Stomp" }, // PRIMARY PEAK
            { time: 80, intensity: 85, label: "The Mask" }, 
            { time: 95, intensity: 98, label: "The Shadow Duel" } 
        ],
        synopsis: "A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver. When he helps his neighbor's ex-convict husband, he becomes the target of a brutal crime syndicate. A neon-drenched, synth-heavy masterpiece that defined the modern identity of the genre.",
        themes: ["The Scorpion and the Frog", "Hyper-Violence", "The Myth of the Hero"]
    }),

    // 4. Sin City
    187: createNoirData({ 
        moralAmbiguity: 95, atmosphericDread: 85, complexityLevel: "COMIC", 
        dominantColor: "#000000", rating: 8.0, criticsScore: 77, audienceScore: 78, director: "Frank Miller, Robert Rodriguez", 
        cast: ["Mickey Rourke", "Clive Owen", "Bruce Willis"], boxOffice: "$158.8 million", budget: "$40 million", 
        dna: { "Crime": 50, "Action": 30, "Thriller": 20 },
        scenes: [
            { time: 15, intensity: 85, label: "Goldie's Death" }, 
            { time: 30, intensity: 95, label: "Marv's Revenge" }, 
            { time: 70, intensity: 90, label: "Jackie Boy's Demise" }, 
            { time: 90, intensity: 100, label: "The Yellow Bastard" }, // PRIMARY PEAK
            { time: 115, intensity: 98, label: "Hartigan's Sacrifice" } 
        ],
        synopsis: "Four intersecting tales of revenge, murder, and brutal vigilante justice set in a corrupt, hyper-stylized metropolis. It is the absolute peak of stylized, green-screen noir, rendering the comic book medium perfectly into high-contrast, bloody cinema.",
        themes: ["Vigilante Justice", "Absolute Corruption", "Stylized Nihilism"]
    }),

    // 5. Good Time
    429200: createNoirData({ 
        moralAmbiguity: 98, atmosphericDread: 100, complexityLevel: "ANXIOUS", 
        dominantColor: "#a21caf", rating: 7.4, criticsScore: 91, audienceScore: 81, director: "Josh & Benny Safdie", 
        cast: ["Robert Pattinson", "Benny Safdie"], boxOffice: "$4.1 million", budget: "$2 million", 
        dna: { "Thriller": 70, "Crime": 30 },
        scenes: [
            { time: 12, intensity: 85, label: "The Bank Robbery" }, 
            { time: 48, intensity: 95, label: "Breaking the Wrong Guy Out" }, 
            { time: 75, intensity: 100, label: "The Sprite Bottle Acid" }, // PRIMARY PEAK
            { time: 90, intensity: 98, label: "The Theme Park Chase" }, 
            { time: 98, intensity: 85, label: "Crossing the Room" } 
        ],
        synopsis: "After a botched bank robbery lands his developmentally disabled brother in prison, a desperate criminal embarks on a twisted, chaotic odyssey through the New York underworld to get the bail money. A raw, panic-inducing shot of pure, modern, scumbag noir.",
        themes: ["Desperation", "Societal Blindness", "Destructive Love"]
    }),

    // 6. Decision to Leave
    705996: createNoirData({ 
        moralAmbiguity: 90, atmosphericDread: 85, complexityLevel: "PSYCHOLOGICAL", 
        dominantColor: "#0f766e", rating: 7.3, criticsScore: 94, audienceScore: 84, director: "Park Chan-wook", 
        cast: ["Tang Wei", "Park Hae-il"], boxOffice: "$23.4 million", budget: "$10 million", 
        dna: { "Mystery": 50, "Romance": 30, "Thriller": 20 },
        scenes: [
            { time: 20, intensity: 65, label: "The Interrogation Sushi" }, 
            { time: 60, intensity: 85, label: "The Staking Out" }, 
            { time: 85, intensity: 90, label: "The Phone Translation" }, 
            { time: 120, intensity: 98, label: "The Truth of the Voice Memo" }, 
            { time: 132, intensity: 100, label: "The Digging at High Tide" } // PRIMARY PEAK
        ],
        synopsis: "An insomniac detective falls for a mysterious widow who is the prime suspect in her husband's murder. Park Chan-wook delivers an elegant, Hitchcockian evolution of the femme fatale trope, turning a police procedural into a devastating psychological romance.",
        themes: ["Obsession", "The Femme Fatale", "Unrequited Truth"]
    }),

    // 7. Manhunter
    11454: createNoirData({ 
        moralAmbiguity: 85, atmosphericDread: 98, complexityLevel: "DREAD", 
        dominantColor: "#0284c7", rating: 7.2, criticsScore: 94, audienceScore: 76, director: "Michael Mann", 
        cast: ["William Petersen", "Brian Cox", "Tom Noonan"], boxOffice: "$8.6 million", budget: "$15 million", 
        dna: { "Thriller": 60, "Crime": 30, "Horror": 10 },
        scenes: [
            { time: 20, intensity: 80, label: "Meeting Lecktor" }, 
            { time: 55, intensity: 85, label: "The House Walkthrough" }, 
            { time: 75, intensity: 100, label: "The Flaming Wheelchair" }, // PRIMARY PEAK
            { time: 95, intensity: 90, label: "The Blind Woman" }, 
            { time: 110, intensity: 98, label: "In-A-Gadda-Da-Vida Shootout" } 
        ],
        synopsis: "Former FBI profiler Will Graham returns to service to pursue a deranged serial killer, forcing him to adopt the psychological mindset of the murderers he hunts. Michael Mann injects neon-drenched 80s aesthetics into a terrifying study of psychological immersion and pure dread.",
        themes: ["Psychological Contamination", "The Mind of a Killer", "Obsession"]
    }),

    // 8. To Live and Die in L.A.
    9850: createNoirData({ 
        moralAmbiguity: 100, atmosphericDread: 90, complexityLevel: "CYNICAL", 
        dominantColor: "#c2410c", rating: 7.3, criticsScore: 90, audienceScore: 78, director: "William Friedkin", 
        cast: ["William Petersen", "Willem Dafoe", "John Pankow"], boxOffice: "$17.3 million", budget: "$6 million", 
        dna: { "Crime": 60, "Action": 30, "Thriller": 10 },
        scenes: [
            { time: 15, intensity: 75, label: "The Counterfeit Operation" }, 
            { time: 50, intensity: 85, label: "The Setup" }, 
            { time: 70, intensity: 100, label: "The Wrong Way Freeway Chase" }, // PRIMARY PEAK
            { time: 100, intensity: 98, label: "Chance is Shot" }, 
            { time: 110, intensity: 95, label: "Vukovich's Transformation" } 
        ],
        synopsis: "A reckless Secret Service agent goes to increasingly corrupt and illegal lengths to catch a master counterfeiter who murdered his partner. It is a relentlessly cynical, high-intensity sprint that completely blurs the line between the law and the criminals they hunt.",
        themes: ["Corruption", "Vengeance", "The Ends Justify the Means"]
    }),

    // 9. The Long Goodbye
    1847: createNoirData({ 
        moralAmbiguity: 90, atmosphericDread: 75, complexityLevel: "DECONSTRUCTION", 
        dominantColor: "#164e63", rating: 7.5, criticsScore: 97, audienceScore: 81, director: "Robert Altman", 
        cast: ["Elliott Gould", "Nina van Pallandt", "Sterling Hayden"], boxOffice: "$1.7 million", budget: "$1.7 million", 
        dna: { "Mystery": 50, "Comedy": 30, "Crime": 20 },
        scenes: [
            { time: 10, intensity: 40, label: "Feeding the Cat" }, 
            { time: 35, intensity: 95, label: "The Coke Bottle Smash" }, 
            { time: 65, intensity: 75, label: "The Writer's Suicide" }, 
            { time: 90, intensity: 85, label: "The Hospital Discovery" }, 
            { time: 105, intensity: 100, label: "The Final Betrayal & Shot" } // PRIMARY PEAK
        ],
        synopsis: "Private eye Philip Marlowe tries to clear a friend of murder charges in 1970s Los Angeles. Robert Altman delivers a brilliant, sun-drenched deconstruction of the genre, portraying the classic noir detective as an honorable relic hopelessly lost in a self-obsessed, morally bankrupt modern world.",
        themes: ["Loyalty", "Genre Deconstruction", "Apathy"]
    }),

    // 10. After Hours
    10843: createNoirData({ 
        moralAmbiguity: 80, atmosphericDread: 95, complexityLevel: "ANXIOUS", 
        dominantColor: "#172554", rating: 7.6, criticsScore: 90, audienceScore: 85, director: "Martin Scorsese", 
        cast: ["Griffin Dunne", "Rosanna Arquette", "Linda Fiorentino"], boxOffice: "$10.6 million", budget: "$4.5 million", 
        dna: { "Comedy": 50, "Thriller": 40, "Crime": 10 },
        scenes: [
            { time: 20, intensity: 65, label: "The $20 Bill Flies Away" }, 
            { time: 42, intensity: 90, label: "Discovering the Suicide" }, 
            { time: 65, intensity: 85, label: "The Subway Station Refusal" }, 
            { time: 85, intensity: 98, label: "The Mob Forms" }, 
            { time: 92, intensity: 100, label: "Encased in Plaster" } // PRIMARY PEAK
        ],
        synopsis: "An ordinary office worker travels to SoHo for a date, only to find himself trapped in a surreal, nightmarish, and infinitely escalating series of bizarre dangers. Scorsese turns the noir genre into a Kafkaesque dark comedy, where the antagonist isn't a mob boss, but the city itself.",
        themes: ["Urban Paranoia", "Kafkaesque Absurdity", "Emasculation"]
    })
};

// 🎬 FAQS FOR THE NEO-NOIR COLLECTION
export const NEO_NOIR_FAQS = {
    'Chinatown': [
        { question: "Why is the ending considered the greatest in film history?", answer: "The ending defies every Hollywood convention. The bad guy (Noah Cross) completely wins, stealing the water, the money, and his daughter/granddaughter, while the police protect him. It cements the noir philosophy that in a deeply corrupt capitalist system, the lone hero cannot fix anything." },
        { question: "What does the title 'Chinatown' mean?", answer: "Chinatown is a metaphor for a place where you don't understand the rules or the language, and if you try to help, you only make things worse. Jake Gittes used to be a cop in Chinatown, where his attempt to save a woman resulted in her death—a tragedy he repeats exactly in the film's climax." },
        { question: "Did the director change the script's ending?", answer: "Yes. Screenwriter Robert Towne originally wrote a happier ending where Evelyn Mulwray shoots her father and escapes with her daughter. Director Roman Polanski argued that a happy ending would feel cheap and fought aggressively for the bleak, tragic ending that made the film legendary." },
        { question: "What is the significance of the cut nose?", answer: "When Roman Polanski (in a cameo) slices Jake's nose, it forces the suave, handsome detective to wear a massive, embarrassing bandage for the rest of the film. It is a physical manifestation of his vulnerability and the fact that he is in way over his head." }
    ],
    'Le Samouraï': [
        { question: "How did this film influence modern movies?", answer: "Jef Costello is the cinematic godfather of the 'silent, cool professional' archetype. Elements of this exact character—his stoicism, his code, his minimalist apartment, and his trench coat—directly inspired films like Drive, John Wick, The Killer, and Ghost Dog." },
        { question: "What is the significance of the bird?", answer: "The bullfinch in Jef's bare apartment acts as his only companion and his alarm system. Because the bird gets agitated when strangers enter, it alerts Jef that the police have bugged his room. It represents his caged, isolated existence." },
        { question: "Why did he use an empty gun at the end?", answer: "Jef was trapped. The police were closing in, and the people who hired him wanted him dead. By walking into the club and aiming an unloaded gun at the pianist, he essentially commits 'suicide by cop'. He chooses the time and place of his death to maintain his honor as a samurai." },
        { question: "Is the opening quote real?", answer: "No. The opening quote ('There is no greater solitude than that of the samurai, unless it is that of the tiger in the jungle... perhaps') is attributed to 'The Book of Bushido,' but director Jean-Pierre Melville entirely made it up to set the mood for the film." }
    ],
    'Drive': [
        { question: "Why does the Driver stomp the guy's head in the elevator?", answer: "This is the pivotal turning point of the film. The Driver gently kisses Irene to show her his true, gentle soul, before immediately violently murdering the hitman to protect her. The extreme violence reveals the 'monster' inside him, and he knows that Irene can never look at him the same way again." },
        { question: "What is the meaning of the scorpion jacket?", answer: "It references the fable of the Scorpion and the Frog. The Frog agrees to carry the Scorpion across the river, but the Scorpion stings him anyway, saying 'I can't help it, it's my nature.' The Driver is the scorpion; he wants to be a good man (a hero), but his nature is inherently violent." },
        { question: "Does the Driver die at the end?", answer: "The ending is deliberately ambiguous. After being stabbed by Bernie Rose, the Driver sits motionless in his car, seemingly dead, before blinking and driving away into the night. He survives, but he is fundamentally a ghost, forever separated from the humanity he tried to protect." },
        { question: "Why is there so little dialogue?", answer: "Ryan Gosling and director Nicolas Winding Refn stripped down the script, removing pages of dialogue. They wanted the film to feel like an 80s synth-pop fairy tale where the hero communicates purely through action, music, and prolonged stares." }
    ],
    'Sin City': [
        { question: "How did they achieve the visual style?", answer: "The film was shot almost entirely on digital green screens. The actors and props were filmed in color, and the footage was heavily processed to turn the world into high-contrast black and white, adding select pops of color (like red blood, yellow skin, or blue eyes) to perfectly mimic Frank Miller's comic book panels." },
        { question: "Who directed the film?", answer: "It was co-directed by Robert Rodriguez and comic creator Frank Miller. Rodriguez insisted Miller receive co-director credit so his vision wouldn't be compromised. Quentin Tarantino also 'guest-directed' one specific scene (the conversation between Clive Owen and Benicio del Toro in the car) for a fee of one dollar." },
        { question: "Why is the violence so extreme?", answer: "The film is heavily rooted in pulp, hardboiled noir, and graphic novels. The extreme, over-the-top violence (decapitations, castrations, dismemberment) is deliberately stylized and absurd to match the tone of the comic, making it feel hyper-real rather than purely sadistic." },
        { question: "Does the timeline make sense?", answer: "The film tells three separate stories ('The Hard Goodbye', 'The Big Fat Kill', and 'That Yellow Bastard') that jump around in time. Characters who die in one segment can be seen alive in the background of another segment, creating a chaotic, non-linear tapestry of the corrupt city." }
    ],
    'Good Time': [
        { question: "Why is it considered a Neo-Noir?", answer: "It takes the classic noir trope—a desperate criminal making one bad decision that spirals into an inescapable nightmare—and drops it into the gritty, neon-soaked anxiety of modern New York. It replaces the suave detective with a manipulative, low-level scammer." },
        { question: "What is the meaning of the title?", answer: "The title 'Good Time' is deeply ironic. Connie (Robert Pattinson) causes chaos, violence, and ruin for absolutely everyone he interacts with over the course of one night. It also refers to serving prison time with good behavior." },
        { question: "Why did Connie use the Sprite bottle?", answer: "In a scene of extreme desperation and improvisation, Connie breaks into an amusement park and mixes liquid LSD (or acid) into a Sprite bottle. He forces a security guard to drink it to incapacitate him, highlighting Connie's sociopathic willingness to destroy anyone to save his brother." },
        { question: "What happens to Nick at the end?", answer: "While Connie is arrested, his developmentally disabled brother Nick is placed in a therapy class. The final scene shows Nick participating in a group exercise where he has to cross the room. It is a heartbreaking, quiet conclusion showing that Nick is finally safe from his brother's toxic influence." }
    ],
    'Decision to Leave': [
        { question: "Did she kill her husband?", answer: "Yes. Seo-rae (Tang Wei) murdered her abusive first husband by pushing him off the mountain. She later murders her second husband by poisoning him, specifically to create a new murder case so that Hae-joon (the detective) will be forced to see her again." },
        { question: "What is the significance of the voice memo?", answer: "Earlier in the film, Hae-joon tells her to throw the incriminating phone into the deep sea so no one will ever find it. This is his confession of love (he is sacrificing his honor as a cop for her). She keeps the memo, realizing he destroyed his own life to save hers." },
        { question: "Why does she bury herself at the beach?", answer: "Seo-rae realizes that her love destroyed Hae-joon's pride and integrity. She buries herself in the sand at high tide, ensuring her body will never be found. She makes herself an 'unsolved case' so that Hae-joon will think about her and obsess over her forever." },
        { question: "Why are there so many eye drops and reflections?", answer: "Director Park Chan-wook uses constant visual motifs of eyes, mirrors, monitors, and eye drops. It represents the theme of subjective perception—how we project our own desires onto the people we are looking at, rather than seeing the truth of who they are." }
    ],
    'Manhunter': [
        { question: "Is this the first Hannibal Lecter movie?", answer: "Yes. Released five years before *The Silence of the Lambs*, *Manhunter* marks the first cinematic appearance of the cannibalistic serial killer (spelled 'Lecktor' here), played with chilling, understated arrogance by Brian Cox." },
        { question: "Why does Will Graham hate profiling?", answer: "Graham has the unique, terrifying ability to fully empathize with and adopt the mindset of serial killers. Doing this to catch Lecktor nearly drove him insane and resulted in him being stabbed. He hates doing it because he fears becoming the monsters he hunts." },
        { question: "What is the significance of the color palette?", answer: "Director Michael Mann strictly color-coded the film. Will Graham's world (his home, the ocean) is bathed in calming, romantic blues. The killer's world, and the violence of the crime scenes, is dominated by sickly greens and aggressive neon magentas." },
        { question: "How does the ending differ from 'Red Dragon'?", answer: "In Thomas Harris's novel *Red Dragon*, the killer (Dolarhyde) fakes his death, ambushes Graham at his home, and severely disfigures Graham's face before being killed. Michael Mann opted for a more traditional, hyper-stylized 80s shootout to end the film on a triumphant note." }
    ],
    'To Live and Die in L.A.': [
        { question: "Did the actors really print fake money?", answer: "Yes. Director William Friedkin hired real convicted counterfeiters as consultants. They built a fully functional counterfeiting operation on set, and the fake bills they produced were so realistic that some of them accidentally entered circulation in Hollywood." },
        { question: "Why is the car chase famous?", answer: "The chase involves the characters driving the wrong way down a busy Los Angeles freeway. It took six weeks to shoot and is widely considered one of the greatest, most visceral car chases in cinematic history, rivaling Friedkin's own work in *The French Connection*." },
        { question: "Why does the protagonist die so abruptly?", answer: "In a massive shock to 1980s audiences, the main character (Chance) is suddenly shot in the face with a shotgun just before the climax. It reinforces the film's cynical, nihilistic tone: in a world this corrupt, plot armor does not exist." },
        { question: "What happens to Vukovich at the end?", answer: "After his partner is killed, the by-the-book Vukovich completely snaps. He murders the counterfeiter in cold blood and adopts his dead partner's ruthless, corrupt persona. The cycle of corruption simply passes from one cop to the next." }
    ],
    'The Long Goodbye': [
        { question: "Why is Philip Marlowe portrayed as a 'loser'?", answer: "Robert Altman wanted to deconstruct the classic 1940s noir detective. By placing the honorable, loyal Marlowe (Elliott Gould) into the cynical, selfish, drug-fueled culture of 1970s Hollywood, Marlowe looks foolish. The world has moved on, and his moral code is a joke to everyone else." },
        { question: "What is the point of the cat?", answer: "The opening 10 minutes involves Marlowe trying to trick his cat into eating the wrong brand of cat food. It establishes Marlowe as a deeply caring, patient man who goes out of his way for others—and the cat abandoning him immediately foreshadows Terry Lennox abandoning him." },
        { question: "Why does the gangster smash his girlfriend's face?", answer: "Marty Augustine suddenly smashing a Coke bottle across his innocent girlfriend's face is one of the most shocking scenes in 70s cinema. It brutally establishes that despite his calm, polite demeanor, the Los Angeles underworld is inherently violently unpredictable." },
        { question: "Why does Marlowe shoot Terry at the end?", answer: "Throughout the film, Marlowe is beaten, arrested, and mocked because he refused to believe his best friend Terry murdered his wife. When Terry smugly reveals he *did* kill her and used Marlowe as a pawn, Marlowe realizes loyalty is dead. He executes Terry to close the loop on his outdated moral code." }
    ],
    'After Hours': [
        { question: "Why does everything go wrong for Paul?", answer: "The film is an anxiety-inducing farce about urban paranoia and emasculation. Paul is an ordinary guy who steps out of his safe, boring routine into the chaotic, artistic world of SoHo. Every attempt he makes to connect with a woman or return home is thwarted by absurd misunderstandings and bad luck." },
        { question: "What does the plaster cast symbolize?", answer: "At the climax of the film, Paul is literally encased in a full-body plaster cast by an artist to hide him from a violent mob. It is the ultimate symbol of his emasculation, paralysis, and complete loss of control over his own life in the city." },
        { question: "Who steals the plaster cast?", answer: "The two burglars (played by Cheech and Chong) break into the artist's loft and steal the plaster cast, not realizing Paul is inside it. In a twist of absurd fate, their van doors swing open and Paul falls out right in front of his office building." },
        { question: "Why does he go back to work at the end?", answer: "After surviving a nightmare odyssey through the city, the plaster breaks open in front of his corporate office just as the sun rises. Defeated, dusty, and traumatized, he simply walks to his desk and starts working. It shows that the mundane corporate grind is the only inescapable reality." }
    ]
};

// 🔥 THE KEYWORD BRIDGE & SCHEMA GENERATOR (Unrestricted Version)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sexual content')) types.add('sexual content');
        else if (lowerType.match(/\bsex\b/)) types.add('sex');
        else if (lowerType.includes('explicit')) types.add('explicit content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
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
            description: scene.description || '',
            severity: scene.severity || 'Moderate'
        }))
    };
};

// 🔥 HELPER: Calculates total skip time in minutes and seconds
const calculateSkipStats = (scenes) => {
    let totalSeconds = 0;
    scenes.forEach(scene => {
        if (scene.start && scene.end) {
            const parseTime = (t) => {
                const parts = t.split(':').map(Number);
                if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                return 0;
            };
            const startSec = parseTime(scene.start);
            const endSec = parseTime(scene.end);
            if (endSec > startSec) totalSeconds += (endSec - startSec);
        }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (totalSeconds === 0) return "< 1 min"; 
    if (mins === 0) return `${secs} sec`;
    return secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
};

// 🔥 NEW: HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    if (extremeCount >= 2) return 'Extreme';
    if (severities.includes('high') || extremeCount === 1) return 'High';
    if (severities.includes('moderate')) return 'Moderate';
    return 'Mild';
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;
    
    // 🔥 Explicit Override for Sin City
    if (movie.tmdbId === 187) currentRuntime = "2 hours 21 min (Unrated Extended Version)";

    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini'); 
    });

    const sceneCount = heavyScenes.length;
    let schemaDesc = '';
    if (sceneCount > 0) {
        schemaDesc = `${movie.Title} Parents Guide with exact sex & nudity timestamps. ${sceneCount} scenes manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        schemaDesc = `${movie.Title} Parents Guide. Filmiway editors have manually verified zero sex scenes or nudity in the full ${currentRuntime} runtime.`;
    }

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': schemaDesc,
        'genre': movie.genre,
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = NEO_NOIR_FAQS[movie.Title] ? [...NEO_NOIR_FAQS[movie.Title]] : [];
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
            'name': `What are the most intense scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Intensity metric, ${movie.Title} peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing to determine if it's truly unsafe for family
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqSchema = familyUnsafeTypes.length > 0 
            ? {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${currentRuntime} runtime.`
                }
            }
            : {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.`
                }
            };

        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes. ${movie.Title} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:<br><br><ul>${schemaListText}</ul><br>Manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.` 
                }
            },
            {
                '@type': 'Question',
                'name': `What time does nudity appear in ${movie.Title} and how do I skip it?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${currentRuntime} version.`
                }
            },
            familyFaqSchema
        );
    } else {
        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `No. Filmiway editors have manually verified that ${movie.Title} is free of explicit sex scenes and nudity.` 
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.` 
                }
            }
        );
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
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = NEO_NOIR_FAQS[movieTitle] ? [...NEO_NOIR_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;
    
    // 🔥 Explicit Override for Sin City
    if (tmdbId === 187) finalRuntime = "2 hours 21 min (Unrated Extended Version)";

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:

${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const sceneCount = heavyScenes.length;
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const uiDetailedList = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const fullType = s.severity ? `${s.type || 'Mature Content'}, ${s.severity}` : (s.type || 'Mature Content');
            return `• ${timeRange} (${fullType})`;
        }).join('\n');
        
        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing for the UI as well
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqUI = familyUnsafeTypes.length > 0
            ? {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${finalRuntime} runtime.`
            }
            : {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            };

        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:

${uiDetailedList}

Manually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does nudity appear in ${movieTitle} and how do I skip it?`,
                answer: `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${finalRuntime} version.`
            },
            familyFaqUI
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};