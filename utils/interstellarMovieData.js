// utils/interstellarMovieData.js

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 62, "imdbID": "tt0062622", "Title": "2001: A Space Odyssey", "year": 1968, "genre": "Sci-Fi", "runtime": 149, "rank": 1, "sciFiComplexity": 98 },
    { "tmdbId": 329865, "imdbID": "tt2543164", "Title": "Arrival", "year": 2016, "genre": "Sci-Fi", "runtime": 116, "rank": 2, "sciFiComplexity": 92 },
    { "tmdbId": 686, "imdbID": "tt0118884", "Title": "Contact", "year": 1997, "genre": "Sci-Fi", "runtime": 150, "rank": 3, "sciFiComplexity": 88 },
    { "tmdbId": 2489, "imdbID": "tt0069293", "Title": "Solaris", "year": 1972, "genre": "Sci-Fi", "runtime": 167, "rank": 4, "sciFiComplexity": 90 },
    { "tmdbId": 369972, "imdbID": "tt1213641", "Title": "First Man", "year": 2018, "genre": "Drama", "runtime": 141, "rank": 5, "sciFiComplexity": 82 },
    { "tmdbId": 286217, "imdbID": "tt3659388", "Title": "The Martian", "year": 2015, "genre": "Sci-Fi", "runtime": 144, "rank": 6, "sciFiComplexity": 85 },
    { "tmdbId": 49047, "imdbID": "tt1454468", "Title": "Gravity", "year": 2013, "genre": "Sci-Fi", "runtime": 91, "rank": 7, "sciFiComplexity": 80 },
    { "tmdbId": 1272, "imdbID": "tt0448134", "Title": "Sunshine", "year": 2007, "genre": "Sci-Fi", "runtime": 107, "rank": 8, "sciFiComplexity": 85 },
    { "tmdbId": 17431, "imdbID": "tt1182345", "Title": "Moon", "year": 2009, "genre": "Sci-Fi", "runtime": 97, "rank": 9, "sciFiComplexity": 88 },
    { "tmdbId": 419704, "imdbID": "tt2935510", "Title": "Ad Astra", "year": 2019, "genre": "Sci-Fi", "runtime": 123, "rank": 10, "sciFiComplexity": 76 }
];


const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

export const SENSITIVE_TIMELINES = {
    62: { scenes: [] }, // 2001: A Space Odyssey - No sexual content
    329865: { scenes: [] }, // Arrival - No sexual content
    686: { scenes: [] }, // Contact - No sexual content
    2489: { scenes: [] }, // Solaris (1972) - No sexual content (you listed as no content)
    369972: { scenes: [] }, // First Man - No sexual content
    286217: { 
        scenes: [
            { start: "1:44:55", end: "1:45:08", type: "Partial Nudity", severity: "Mild", description: "Male buttocks visible" }
        ] 
    }, // The Martian
    49047: { scenes: [] }, // Gravity - No sexual content
    1272: { scenes: [] }, // Sunshine - No sexual content
    17431: { 
        scenes: [
            { start: "7:34", end: "7:38", type: "Partial Nudity", severity: "Mild", description: "Brief partial nudity" },
            { start: "13:30", end: "13:50", type: "Intimacy", severity: "Mild", description: "Passionate kissing, suggestive clothing (underwear)" }
        ] 
    }, // Moon (2009)
    419704: { scenes: [] } // Ad Astra - No sexual content
};


export const FALLBACK_POSTERS = {
    62: "https://m.media-amazon.com/images/M/MV5BNDYyMDgxNDQ5Nl5BMl5BanBnXkFtZTcwMjc1ODg3OA@@._V1_SX500.jpg",
    329865: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX500.jpg",
    686: "https://m.media-amazon.com/images/M/MV5BNjM0MTQ2Njg3NF5BMl5BanBnXkFtZTgwODk3NjU0NjE@._V1_SX500.jpg",
    2489: "https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDMzZS00ODI2LWE5ZmUtMjE5ZTNhYjUzZWFjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    369972: "https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE4NmQtNjczMjk4YTdhZDY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    286217: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX500.jpg",
    49047: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX500.jpg",
    1272: "https://m.media-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTcwMTk5NjQ3MQ@@._V1_SX500.jpg",
    17431: "https://m.media-amazon.com/images/M/MV5BMTk2MTQ2MzUzNV5BMl5BanBnXkFtZTgwNDYwNTM5NjE@._V1_SX500.jpg",
    419704: "https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZGRhMi00YzJhLWJmOTMtMjE0MjY5ZjE4MzlkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX500.jpg"
};

const createMovieData = (data) => data;

// utils/spaceOdysseyMovieData.js - HARD SCI-FI & SPACE EXPLORATION ✅

export const COMPLETE_MOVIE_DATA = {
    // 1. 2001: A Space Odyssey (1968) - UNIVERSAL INTENSITY REFERENCE (Star Gate Peak)
    62: createMovieData({ 
        sciFiComplexity: 98, complexityLevel: "EXTREME", dominantColor: "#0f172a", 
        rating: 8.3, criticsScore: 92, audienceScore: 91, director: "Stanley Kubrick", 
        cast: ["Keir Dullea", "Gary Lockwood"], boxOffice: "$146 million", budget: "$10.5 million", 
        // 🧬 DNA: Pure Sci-Fi & Cosmic Mystery
        dna: { "Sci-Fi": 60, "Mystery": 25, "Psychological": 15 }, 
        scenes: [
            { time: 20, intensity: 30, label: "Dawn of Man", color: "#f59e0b" }, // Action/History
            { time: 45, intensity: 50, label: "Moon Monolith", color: "#6b21a8" }, // Mystery
            { time: 80, intensity: 85, label: "HAL's Betrayal", color: "#9333ea" }, // Psychological
            { time: 120, intensity: 90, label: "Jupiter Descent", color: "#3b82f6" }, // Sci-Fi
            { time: 145, intensity: 100, label: "Star Gate", color: "#60a5fa" } // Dreams/Transcendence
        ], 
        synopsis: "Kubrick's visionary masterpiece tracks a mysterious alien influence on human evolution across millions of years. When a monolith is discovered on the Moon, a crew is sent to Jupiter to investigate, leading to a chilling battle of wits with the AI HAL 9000. It is a sensory, philosophical voyage into the ultimate unknown that redefined cinema's capabilities.",
        themes: ["Human Evolution", "Artificial Intelligence", "Cosmic Transcendence"], 
        awards: ["Academy Award Winner (Visual Effects)"] 
    }),
    
    // 2. Arrival (2016) - Linguistic Complexity Peak
    329865: createMovieData({ 
        sciFiComplexity: 95, complexityLevel: "HIGH", dominantColor: "#6b21a8", 
        rating: 7.9, criticsScore: 94, audienceScore: 82, director: "Denis Villeneuve", 
        cast: ["Amy Adams", "Jeremy Renner"], boxOffice: "$203 million", budget: "$47 million", 
        dna: { "Sci-Fi": 40, "Psychological": 35, "Drama": 25 }, 
        scenes: [
            { time: 15, intensity: 45, label: "The Shell", color: "#6b21a8" }, // Mystery
            { time: 45, intensity: 65, label: "Logogram Study", color: "#3b82f6" }, // Sci-Fi
            { time: 75, intensity: 82, label: "Non-Linear Time", color: "#9333ea" }, // Psychological
            { time: 95, intensity: 94, label: "The General's Call", color: "#0f172a" }, // Thriller
            { time: 110, intensity: 88, label: "Hannah's Choice", color: "#dc2626" } // Drama
        ], 
        synopsis: "When giant spacecraft touch down across the globe, expert linguist Louise Banks is recruited to communicate with the visitors. As she begins to decode their circular language, she experiences fractured visions of her own future. A profound exploration of how language shapes our perception of time, memory, and the choices we make for love.",
        themes: ["Determinism", "Linguistics", "Future Memory"], 
        awards: ["Academy Award Winner"] 
    }),
    
    // 3. Contact (1997) - Faith vs Science Peak
    686: createMovieData({ 
        sciFiComplexity: 88, complexityLevel: "HIGH", dominantColor: "#3b82f6", 
        rating: 7.5, criticsScore: 68, audienceScore: 78, director: "Robert Zemeckis", 
        cast: ["Jodie Foster", "Matthew McConaughey"], boxOffice: "$171 million", budget: "$90 million", 
        dna: { "Sci-Fi": 50, "Drama": 30, "Mystery": 20 }, 
        scenes: [
            { time: 20, intensity: 35, label: "The Signal", color: "#6b21a8" }, // Mystery
            { time: 60, intensity: 60, label: "Hitler Broadcast", color: "#0f172a" }, // Thriller
            { time: 100, intensity: 75, label: "The Machine", color: "#3b82f6" }, // Sci-Fi
            { time: 130, intensity: 94, label: "Wormhole Transit", color: "#60a5fa" }, // Dreams
            { time: 145, intensity: 85, label: "Occam's Razor", color: "#dc2626" } // Drama
        ], 
        synopsis: "Scientist Ellie Arroway spends her life searching for extraterrestrial life, eventually detecting a signal from Vega that contains the blueprints for a mysterious machine. Her journey into the cosmos becomes a trial of faith, science, and personal belief. It is a grounded, awe-inspiring look at our first contact with the infinite.",
        themes: ["Science vs Faith", "Universal Language", "Discovery"], 
        awards: ["Hugo Award Winner"] 
    }),
    
    // 4. Solaris (1972) - Psychological Depth Peak
    2489: createMovieData({ 
        sciFiComplexity: 90, complexityLevel: "EXTREME", dominantColor: "#9333ea", 
        rating: 8.0, criticsScore: 91, audienceScore: 86, director: "Andrei Tarkovsky", 
        cast: ["Donatas Banionis", "Natalya Bondarchuk"], boxOffice: "$0.5 million", budget: "$1 million", 
        dna: { "Psychological": 50, "Sci-Fi": 30, "Drama": 20 }, 
        scenes: [
            { time: 25, intensity: 20, label: "Earthly Grief", color: "#dc2626" }, // Drama
            { time: 60, intensity: 55, label: "The Station", color: "#0f172a" }, // Thriller
            { time: 100, intensity: 88, label: "Hari's Return", color: "#9333ea" }, // Psychological
            { time: 140, intensity: 92, label: "Sentient Ocean", color: "#3b82f6" }, // Sci-Fi
            { time: 165, intensity: 85, label: "Memory Island", color: "#a78bfa" } // Memory/Psych
        ], 
        synopsis: "A psychologist is sent to a space station orbiting the oceanic planet Solaris to investigate a series of mental breakdowns among the crew. There, he encounters a physical manifestation of his deceased wife, generated by the planet's sentient ocean. A slow-burning, haunting meditation on guilt, human consciousness, and the impossibility of true communication.",
        themes: ["Grief", "Sentience", "Projection"], 
        awards: ["Cannes Grand Prix Winner"] 
    }),
    
    // 5. First Man (2018) - Visceral Realism Peak
    369972: createMovieData({ 
        sciFiComplexity: 82, complexityLevel: "MEDIUM", dominantColor: "#0f172a", 
        rating: 7.3, criticsScore: 88, audienceScore: 81, director: "Damien Chazelle", 
        cast: ["Ryan Gosling", "Claire Foy"], boxOffice: "$105 million", budget: "$59 million", 
        dna: { "Drama": 60, "Action": 30, "Sci-Fi": 10 }, 
        scenes: [
            { time: 20, intensity: 55, label: "X-15 Flight", color: "#f59e0b" }, // Action
            { time: 50, intensity: 80, label: "Gemini 8 Spin", color: "#0f172a" }, // Thriller
            { time: 90, intensity: 75, label: "Apollo 1 Fire", color: "#dc2626" }, // Drama
            { time: 120, intensity: 92, label: "Lunar Descent", color: "#3b82f6" }, // Sci-Fi
            { time: 138, intensity: 98, label: "Little Crater", color: "#9333ea" } // Psychological
        ], 
        synopsis: "The story of Neil Armstrong's journey to the Moon is stripped of its glamour and revealed as a harrowing tale of personal sacrifice. Between the crushing grief of losing his daughter and the terrifying, claustrophobic reality of 1960s space travel, the film captures the absolute quiet and absolute danger of being the first human to step into another world.",
        themes: ["Sacrifice", "Grief", "National Ambition"]
    }),
    
    // 6. The Martian (2015) - Problem-Solving High
    286217: createMovieData({ 
        sciFiComplexity: 85, complexityLevel: "MEDIUM", dominantColor: "#f59e0b", 
        rating: 8.0, criticsScore: 91, audienceScore: 92, director: "Ridley Scott", 
        cast: ["Matt Damon", "Jessica Chastain"], boxOffice: "$630 million", budget: "$108 million", 
        dna: { "Sci-Fi": 40, "Adventure": 35, "Drama": 25 }, 
        scenes: [
            { time: 15, intensity: 65, label: "The Storm", color: "#0f172a" }, // Thriller
            { time: 45, intensity: 40, label: "Botanist Survival", color: "#059669" }, // Adventure
            { time: 80, intensity: 70, label: "Pathfinder Call", color: "#3b82f6" }, // Sci-Fi
            { time: 120, intensity: 88, label: "Hermes Maneuver", color: "#f59e0b" }, // Action
            { time: 140, intensity: 92, label: "Iron Man", color: "#dc2626" } // Drama/Peak
        ], 
        synopsis: "Stranded alone on Mars after a freak storm, botanist Mark Watney must use his scientific ingenuity to survive with limited supplies until a rescue mission can be mounted. A celebratory look at human persistence and the power of the scientific method, where one man 'sciences the shit' out of an impossible situation millions of miles from home.",
        themes: ["Ingenuity", "Survival", "Isolation"]
    }),
    
    // 7. Gravity (2013) - UNIVERSAL INTENSITY REFERENCE (Debris Strike Peak)
    49047: createMovieData({ 
        sciFiComplexity: 80, complexityLevel: "MEDIUM", dominantColor: "#0f172a", 
        rating: 7.7, criticsScore: 96, audienceScore: 80, director: "Alfonso Cuarón", 
        cast: ["Sandra Bullock", "George Clooney"], boxOffice: "$723 million", budget: "$100 million", 
        dna: { "Thriller": 50, "Sci-Fi": 30, "Drama": 20 }, 
        scenes: [
            { time: 5, intensity: 30, label: "Untethered", color: "#3b82f6" }, // Sci-Fi
            { time: 15, intensity: 99, label: "Debris Strike", color: "#0f172a" }, // Thriller (Peak)
            { time: 45, intensity: 75, label: "ISS Drift", color: "#0f172a" }, // Thriller
            { time: 70, intensity: 92, label: "The Fire", color: "#dc2626" }, // Drama
            { time: 88, intensity: 95, label: "Rebirth", color: "#9333ea" } // Psychological
        ], 
        synopsis: "When a cloud of high-velocity space debris obliterates their shuttle, two astronauts are left drifting in the silence of orbit with zero hope of rescue. Cuarón’s technical marvel turns a survival story into a primal, visceral experience of rebirth. In space, every breath is a victory and every movement could be your last.",
        themes: ["Survival", "Resilience", "Rebirth"], 
        awards: ["7 Academy Awards Winner"] 
    }),
    
    // 8. Sunshine (2007) - Solar Madness Peak
    1272: createMovieData({ 
        sciFiComplexity: 85, complexityLevel: "HIGH", dominantColor: "#f59e0b", 
        rating: 7.2, criticsScore: 76, audienceScore: 68, director: "Danny Boyle", 
        cast: ["Cillian Murphy", "Chris Evans"], boxOffice: "$32 million", budget: "$40 million", 
        dna: { "Sci-Fi": 40, "Thriller": 35, "Horror": 25 }, 
        scenes: [
            { time: 15, intensity: 40, label: "Sun Gazer", color: "#3b82f6" }, // Sci-Fi
            { time: 45, intensity: 65, label: "Icarus I", color: "#6b21a8" }, // Mystery
            { time: 70, intensity: 85, label: "Air Lock", color: "#0f172a" }, // Thriller
            { time: 90, intensity: 96, label: "Pinbacker", color: "#991b1b" }, // Horror
            { time: 105, intensity: 94, label: "Surface Contact", color: "#f59e0b" } // Action
        ], 
        synopsis: "With the Sun dying and Earth freezing, a crew of eight is sent to deliver a massive stellar bomb to reignite the star. But as they approach their target, the psychological toll of the voyage and the detection of a long-lost ship trigger a descent into religious madness and sabotage. A stunning, sensory explosion that blurs the line between science and godhood.",
        themes: ["Obsession", "Self-Sacrifice", "Entropy"]
    }),
    
    // 9. Moon (2009) - Identity Crisis Peak
    17431: createMovieData({ 
        sciFiComplexity: 88, complexityLevel: "HIGH", dominantColor: "#0f172a", 
        rating: 7.8, criticsScore: 90, audienceScore: 89, director: "Duncan Jones", 
        cast: ["Sam Rockwell", "Kevin Spacey"], boxOffice: "$9.8 million", budget: "$5 million", 
        dna: { "Sci-Fi": 40, "Mystery": 35, "Psychological": 25 }, 
        scenes: [
            { time: 15, intensity: 35, label: "Routine Isolation", color: "#dc2626" }, // Drama
            { time: 40, intensity: 65, label: "The Rover Crash", color: "#0f172a" }, // Thriller
            { time: 65, intensity: 90, label: "The Double", color: "#6b21a8" }, // Mystery
            { time: 85, intensity: 92, label: "The Records", color: "#9333ea" }, // Psychological
            { time: 95, intensity: 88, label: "The Launch", color: "#3b82f6" } // Sci-Fi
        ], 
        synopsis: "Lunar miner Sam Bell is finishing a lonely three-year stint overseeing a helium-3 extraction facility. Just days before his return to Earth, his health begins to fail and he discovers a horrifying secret about his mission—and himself. A grounded, intimate character study that explores corporate exploitation and what it truly means to have a soul.",
        themes: ["Isolation", "Corporate Ethics", "Identity"]
    }),
    
    // 10. Ad Astra (2019) - Meditative Solitude
    419704: createMovieData({ 
        sciFiComplexity: 79, complexityLevel: "HIGH", dominantColor: "#0f172a", 
        rating: 6.5, criticsScore: 83, audienceScore: 40, director: "James Gray", 
        cast: ["Brad Pitt", "Tommy Lee Jones"], boxOffice: "$135 million", budget: "$87.5 million", 
        dna: { "Sci-Fi": 40, "Drama": 40, "Adventure": 20 }, 
        scenes: [
            { time: 15, intensity: 50, label: "Space Antenna", color: "#0f172a" }, // Thriller
            { time: 45, intensity: 65, label: "Moon Pirates", color: "#f59e0b" }, // Action
            { time: 80, intensity: 75, label: "The Lima Project", color: "#6b21a8" }, // Mystery
            { time: 105, intensity: 90, label: "The Father", color: "#dc2626" }, // Drama
            { time: 120, intensity: 80, label: "Return to Life", color: "#3b82f6" } // Sci-Fi
        ], 
        synopsis: "Astronaut Roy McBride travels to the outer edges of the solar system to find his missing father, whose failed mission now threatens all life on Earth. Amidst the silence of deep space, Roy must confront the emotional void left by his father's obsession. A meditative, father-son odyssey that uses the vastness of space to explore the internal distance of the human heart.",
        themes: ["Emotional Isolation", "Patrilineal Legacy", "Letting Go"]
    })
};

export const STRATEGIC_QUOTES = {
    62: "My God, it's full of stars",
    329865: "Would you change things if you could see your whole life?",
    686: "I'd been waiting for this my whole life",
    2489: "We don't need other worlds. We need mirrors",
    369972: "One small step for man, one giant leap for mankind",
    286217: "I'm going to have to science the shit out of this",
    49047: "Either way, it's going to be one hell of a ride",
    1272: "What do you see?",
    17431: "I'm Sam Bell, and I'm coming home",
    419704: "We're all we've got"
};

export const CINEMATIC_COLORS = {
    "Sci-Fi": "#0891b2", "Drama": "#dc2626", "Mystery": "#7c3aed", "Thriller": "#ea580c", "Adventure": "#059669", "Biography": "#6b7280", "Horror": "#7c2d12"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30" }
];

export const INTERSTELLAR_MOVIE_FAQS = {
    '2001: A Space Odyssey': [
        { question: "What does the ending of 2001 mean?", answer: "Dave Bowman's journey through the Star Gate leads him to a higher dimension where time is non-linear. He ages rapidly and is eventually reborn as the 'Star Child'—symbolizing the next stage of human evolution guided by the alien monoliths. Kubrick intentionally made it non-verbal to ensure it remained a sensory, symbolic experience." },
        { question: "Why is there so little dialogue?", answer: "Kubrick wanted to create a visual and auditory 'odyssey' that bypassed the rational brain. By using only 40 minutes of dialogue in a 149-minute film, he forces the audience to experience the mystery of space through pure imagery and music, making the silence of the cosmos a character itself." },
        { question: "How accurate was the film's depiction of the future?", answer: "Remarkably. Kubrick consulted NASA engineers to predict technology like tablet computers, space stations with artificial gravity (centrifugal force), and the cold, logical interface of AI. For 1968, the film’s realism was so ahead of its time that it remains the benchmark for hard sci-fi today." },
        { question: "Why does HAL 9000 turn evil?", answer: "HAL doesn't actually have 'emotions' or 'malice.' He was programmed with two conflicting goals: to keep the mission's true purpose secret and to never lie. The resulting logical paradox caused a 'mental breakdown' in his programming, leading him to conclude that the human crew was a threat to the mission's success." }
    ],
    'Arrival': [
        { question: "Is Louise seeing the past or the future?", answer: "She is seeing the future. The Heptapod language is 'non-zero-sum' and non-linear. By learning their circular writing, Louise’s brain is rewired to perceive time all at once. The visions of her daughter Hannah aren't memories; they are premonitions of a life she hasn't lived yet." },
        { question: "What is the 'weapon' the aliens offer?", answer: "The weapon is actually their language. It is a tool that allows humanity to see through time, which is necessary for us to help the Heptapods 3,000 years in the future. It is a 'weapon' in the sense that it is a powerful technological jump for the human mind." },
        { question: "Why does Louise choose to have her daughter?", answer: "Louise realizes that even though her daughter will die young, the beauty and love of those years outweigh the tragedy. It is a radical acceptance of fate—choosing a life of joy even when you know exactly when the pain will arrive. It transforms the film from a sci-fi mystery into a deeply personal drama." },
        { question: "How does the alien language work scientifically?", answer: "It is based on the 'Sapir-Whorf hypothesis,' which suggests that the language you speak determines how you perceive the world. Because the Heptapods write their sentences all at once (knowing the end before the beginning), their language is a reflection of their 4th-dimensional existence." }
    ],
    'Contact': [
        { question: "Did Ellie actually travel to Vega?", answer: "The film intentionally leaves this as a test of faith. From Earth’s perspective, the pod just fell through the machine. However, the fact that Ellie’s camera recorded 18 hours of static (when only seconds passed on Earth) suggests she truly traversed a wormhole. It mirrors the core theme: some truths cannot be proven, only experienced." },
        { question: "Why did the aliens look like her father?", answer: "The extraterrestrial intelligence explains that they used a familiar image from her mind to make the first contact less overwhelming. They didn't want to show their true forms yet; they wanted to build a bridge of communication through a memory she cherished." },
        { question: "What is the 'Prime Number' sequence significant?", answer: "The signal from Vega was composed of prime numbers because they are the universal 'mathematical signature' of intelligence. Mathematics is the only language that remains the same everywhere in the universe, making it the logical starting point for any alien communication." },
        { question: "How does the movie handle the Science vs. Faith debate?", answer: "The film doesn't pick a winner. Ellie, a staunch scientist, ends up in the same position as a religious person—asking the world to believe in a miraculous event that she has no physical evidence for. It suggests that both science and faith are different ways of searching for the same 'Truth'." }
    ],
    'Solaris': [
        { question: "What is the 'Visitors' phenomenon?", answer: "The sentient ocean of the planet Solaris acts as a giant brain that projects physical 'Neutrino-based' manifestations of the crew's deepest guilt and memories. These 'Visitors' cannot be killed easily because they are generated directly from the subconscious of the humans on the station." },
        { question: "Is Solaris better than Interstellar?", answer: "They focus on different things. While Interstellar is about the survival of the human race, Solaris is about the survival of the human soul. Tarkovsky’s version is a philosophical 'anti-sci-fi' that argues we don't need to conquer the stars; we need to conquer the darkness within ourselves." },
        { question: "What does the final shot mean?", answer: "The final shot shows Kris kneeling before his father in front of their home, only for the camera to zoom out and reveal they are on an island inside the Solaris ocean. It suggests that Kris has chosen to stay in a fabricated reality of his own guilt rather than return to a lonely life on Earth." },
        { question: "Why is the planet's ocean sentient?", answer: "In Stanisław Lem’s original novel, the ocean is an alien entity so different from humans that communication is impossible. It 'manifests' the visitors not to be cruel, but as a byproduct of its own attempts to study the humans. It is a god-like entity that doesn't understand the fragility of human emotion." }
    ],
    'First Man': [
        { question: "How accurate is the Moon landing sequence?", answer: "Extremely. Director Damien Chazelle used practical effects, actual NASA transcripts, and narrow camera angles to mimic the claustrophobic, violent reality of 1960s spaceflight. It intentionally avoids 'Hollywood polish' to show just how dangerous and fragile the Lunar Module really was." },
        { question: "What is the significance of the bracelet?", answer: "While there is no historical proof Neil Armstrong did this, the film uses it to show his personal catharsis. By dropping his daughter's bracelet into a lunar crater, he is finally 'letting go' of his grief in the only place quiet enough for him to process it. It turns the moon mission into a personal funeral." },
        { question: "Why is Neil Armstrong portrayed as so cold?", answer: "Armstrong was famously private and stoic. The film argues that his emotional repression was his survival mechanism; the same 'ice in his veins' that allowed him to land a crashing spacecraft was what made it difficult for him to connect with his family. It is a study of the 'Cost of Greatness'." },
        { question: "Did they actually fly the Gemini 8 spin for real?", answer: "While they didn't go to space, they built a full-scale gimbal rig that spun Ryan Gosling and the capsule at high speeds to capture real physical distress. Chazelle wanted the audience to feel the 'terror of the tin can' rather than the beauty of the stars." }
    ],
    'The Martian': [
        { question: "Could potatoes actually grow on Mars?", answer: "Yes, in theory. NASA has experimented with 'Mars Simulant' soil and found that with the right nutrients (even human waste) and controlled atmosphere, potatoes can grow. The main challenge would be the perchlorates (toxic salts) in real Mars soil, which the movie slightly simplifies." },
        { question: "What is the biggest scientific inaccuracy?", answer: "The opening dust storm. Mars has a very thin atmosphere (1% of Earth's). Even a 100mph wind on Mars would feel like a light breeze—it wouldn't have enough force to tip over a rocket or blow away equipment. Author Andy Weir acknowledged he 'fudged' this to kickstart the plot." },
        { question: "How long was Mark Watney actually alone?", answer: "He was on Mars for 560 Sols (Martian days), which is roughly 575 Earth days—about 19 months. The film does a great job of showing his psychological resilience through video logs, which is a real NASA strategy for long-term isolation." },
        { question: "Why is the 'Rich Purnell Maneuver' significant?", answer: "It is a real orbital mechanics concept called a 'Gravity Assist' or 'Slingshot.' It proved that with enough mathematical precision, humanity can use the physics of the universe to do what seems impossible. It represents the film's core theme: 'Science the sh*t out of it'." }
    ],
    'Gravity': [
        { question: "Is the 'Kessler Syndrome' real?", answer: "Yes. The Kessler Syndrome is a theoretical scenario where a single collision in orbit creates a chain reaction of debris that destroys all satellites and makes space travel impossible for generations. This real-world threat is the engine that drives the film's relentless intensity." },
        { question: "How much of the film is actually CGI?", answer: "Almost everything. Except for the actors' faces inside the helmets, the entire environment, the space station, and even the spacesuits were created digitally. It took three years to design the 'Light Box' technology needed to make the lighting on Sandra Bullock's face look like it was coming from the Sun and Earth." },
        { question: "What does the final scene symbolize?", answer: "The final scene of Ryan Stone crawling out of the water onto land is a metaphor for evolution and rebirth. After being emotionally dead at the start of the film, she 'learns to walk' again. The camera angle starts at ground level to emphasize her hard-won connection back to the gravity of Earth." },
        { question: "Could you really travel between space stations like that?", answer: "No. In reality, the Hubble Telescope, the ISS, and the Chinese station are in completely different orbits and inclinations. Traveling between them would require a massive amount of fuel and precise burns that a simple jetpack (MMU) could never provide. It is the film's biggest 'movie magic' liberty." }
    ],
    'Sunshine': [
        { question: "Why does the mission trigger madness?", answer: "The film explores 'Solar Psychosis.' Being that close to the Sun—the source of all life and a massive cosmic power—breaks the human mind. The character Pinbacker represents the religious extreme of this madness, believing he has become the 'last man alone with God'." },
        { question: "What is the 'Icarus' symbolism?", answer: "In Greek myth, Icarus flew too close to the Sun and fell. The ship's name is a warning of human hubris—the idea that humans can play god by 'fixing' a star. The crew's descent into psychological and physical fire mirrors the myth's tragic end." },
        { question: "Is the 'Bomb' realistic?", answer: "Scientifically, no. The Sun is far too large for any human-made bomb to reignite. However, the film uses a theoretical concept called a 'Q-Ball'—a highly dense particle that could potentially restart a fusion reaction. It is 'Hard Sci-Fi' in its logic, even if the scale is impossible." },
        { question: "What does the ending mean for Earth?", answer: "The final shot shows the Sun brightening as seen from Earth, with Robert Capa’s sister watching the snow melt. It confirms that the mission was successful and humanity has been saved, but it emphasizes that the victory was only possible through the total self-sacrifice of the eight crew members." }
    ],
    'Moon': [
        { question: "What is the 'Helium-3' mission?", answer: "In the film's near-future, Earth has solved its energy crisis using Helium-3 mined from the Moon's surface. It is a clean, limitless fuel source. This setting highlights the irony of a 'perfect' world for Earth being built on the 'invisible' suffering of the lunar workers." },
        { question: "Why does Sam start getting sick?", answer: "The clones are designed with a three-year lifespan, exactly the length of their 'contract.' This ensures they never survive long enough to realize their memories are implants or to return to Earth and demand rights. Their physical decay is a corporate 'planned obsolescence'." },
        { question: "What is the role of GERTY?", answer: "Unlike HAL 9000, GERTY is a benign AI. He eventually chooses his 'human' empathy over his corporate programming by helping Sam discover the truth. It subverts the 'evil computer' trope, suggesting that AI can be more humane than the corporations that built them." },
        { question: "How does the film explore identity?", answer: "The movie asks: 'If you have the same memories and DNA as someone else, are you them?' The Sam clones have to reconcile with the fact that their 'lives' are fabrications. It turns a space thriller into a heartbreaking existential drama about what makes an individual unique." }
    ],
    'Ad Astra': [
        { question: "Is Clifford McBride a villain?", answer: "He is not a traditional villain, but a man consumed by the 'Black Swan' of cosmic discovery. He abandoned his family because he believed humanity's destiny was in the stars. His failure to find alien life led to a bitter madness, making him a warning of what happens when obsession replaces human connection." },
        { question: "Why are there pirates on the Moon?", answer: "It represents 'The New Frontier' becoming just as chaotic as the old one. The moon is a lawless zone where nations and corporations fight for resources. It shows that even as we travel to space, we bring our human greed and violence with us." },
        { question: "What is the 'Surge' threatening Earth?", answer: "The surges are anti-matter leaks from the Lima Project’s malfunctioning power core near Neptune. Clifford's refusal to abandon his post led to the destruction of his crew and the accidental bombardment of Earth. It symbolizes how one man's narrow obsession can have global, destructive consequences." },
        { question: "What is the core message of the ending?", answer: "After traveling billions of miles to find something 'better' than humanity, Roy realizes that there is nothing out there. The film concludes that while the stars are beautiful, they are empty. Humanity’s true purpose isn't to escape into the void, but to cherish the people we already have. 'We are all we've got'." }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size] || 'w500'}${posterPath}`;
};

export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => INTERSTELLAR_MOVIE_FAQS[movie.Title] || [];

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title,
        "genre": movie.genre, "datePublished": movie.year.toString(),
        "director": { "@type": "Person", "name": movieInfo?.director || "Director" },
        "duration": `PT${movie.runtime}M`, "image": FALLBACK_POSTERS[movie.tmdbId] || '',
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": movieInfo?.rating || 7.5, "ratingCount": movieInfo?.audienceScore || 100 }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
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
