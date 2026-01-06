// utils/blackSwanMovieData.js - BLACK SWAN COLLECTION DATA
// Movies exploring artistic obsession, psychological descent, and identity horror

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 10494, "imdbID": "tt0156887", "Title": "Perfect Blue", "year": 1997, "genre": "Animation", "runtime": 81, "rank": 1 },
    { "tmdbId": 244786, "imdbID": "tt2582802", "Title": "Whiplash", "year": 2014, "genre": "Drama", "runtime": 106, "rank": 2 },
    { "tmdbId": 361292, "imdbID": "tt1034415", "Title": "Suspiria", "year": 2018, "genre": "Horror", "runtime": 152, "rank": 3 },
    { "tmdbId": 19542, "imdbID": "tt0040725", "Title": "The Red Shoes", "year": 1948, "genre": "Drama", "runtime": 135, "rank": 4 },
    { "tmdbId": 12163, "imdbID": "tt1125849", "Title": "The Wrestler", "year": 2008, "genre": "Drama", "runtime": 109, "rank": 5 },
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147, "rank": 6 },
    { "tmdbId": 1791, "imdbID": "tt0254686", "Title": "The Piano Teacher", "year": 2001, "genre": "Drama", "runtime": 131, "rank": 7 },
    { "tmdbId": 194662, "imdbID": "tt2562232", "Title": "Birdman", "year": 2014, "genre": "Comedy", "runtime": 119, "rank": 8 },
    { "tmdbId": 641, "imdbID": "tt0180093", "Title": "Requiem for a Dream", "year": 2000, "genre": "Drama", "runtime": 102, "rank": 9 },
    { "tmdbId": 242582, "imdbID": "tt2872718", "Title": "Nightcrawler", "year": 2014, "genre": "Thriller", "runtime": 117, "rank": 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

// ✅ UPDATED SENSITIVE TIMELINES (Sexual Content & Nudity ONLY - No Descriptions)
export const SENSITIVE_TIMELINES = {
    // 1. Perfect Blue
    10494: { 
        scenes: [
            { start: "0:33:20", end: "0:35:10", type: "Sexual Content", severity: "Extreme" },
            { start: "0:45:40", end: "0:48:00", type: "Nudity", severity: "High" }
        ] 
    },

    // 2. Whiplash (Clean)
    244786: { scenes: [] },

    // 3. Suspiria
    361292: { 
        scenes: [
            { start: "1:35:40", end: "1:37:15", type: "Nudity", severity: "High" }
        ] 
    },

    // 4. The Red Shoes (Clean)
   19542: { scenes: [] },

    // 5. The Wrestler
    12163: { 
        scenes: [
            { start: "0:20:22", end: "0:20:50", type: "Nudity", severity: "Moderate" },
            { start: "0:43:10", end: "0:44:10", type: "Nudity", severity: "Moderate" },
            { start: "1:33:33", end: "1:34:30", type: "Nudity", severity: "Moderate" }
        ] 
    },

    // 6. Mulholland Drive
    1018: { 
        scenes: [
            { start: timeToSeconds("1:19:38"), end: timeToSeconds("1:20:02"), type: "Kissing" },
            { start: timeToSeconds("1:38:45"), end: timeToSeconds("1:42:18"), type: "Nudity" },
            { start: timeToSeconds("2:01:27"), end: timeToSeconds("2:02:59"), type: "Nudity " },
            { start: timeToSeconds("2:04:36"), end: timeToSeconds("2:05:03"), type: "Kissing" },
            { start: timeToSeconds("2:15:50"), end: timeToSeconds("2:15:58"), type: "Kissing" }
        ]
    },

    // 7. The Piano Teacher
   1791: { 
        scenes: [
            { start: "0:25:00", end: "0:27:50", type: "Nudity/Sexual Content", severity: "High" },
            { start: "0:52:00", end: "0:53:20", type: "Sexual Content", severity: "High" },
            { start: "1:06:50", end: "1:12:10", type: "Sexual Content", severity: "Extreme" },
            { start: "1:39:40", end: "1:41:40", type: "Sexual Content", severity: "High" }, 
            { start: "1:45:40", end: "1:49:40", type: "Sexual Content", severity: "Extreme" },
            { start: "1:53:40", end: "2:03:40", type: "Nudity/Sexual Content", severity: "Extreme" }
        ] 
    },

    // 8. Birdman
    194662: { 
        scenes: [
            { start: "0:18:10", end: "0:18:50", type: "Partial Nudity", severity: "Mild" }
        ] 
    },

    // 9. Requiem for a Dream
    641: { 
        scenes: [
            { start: "0:20:00", end: "0:20:30", type: "Nudity", severity: "Moderate" },
            { start: "0:33:00", end: "0:34:25", type: "Nudity", severity: "Moderate" },
            { start: "0:37:00", end: "0:37:25", type: "Nudity", severity: "Moderate" }
        ] 
    },

    // 10. Nightcrawler (Clean)
    242582: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    10494: "https://m.media-amazon.com/images/M/MV5BMTdiYmM3NGUtZTZlYS00ZjU2LWE5YmQtOWYxNjhhM2Y3MGY0XkEyXkFqcGdeQXVyNjQzNDI3NzI@._V1_SX500.jpg",
    244786: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NTEwZDZiZTUxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    361292: "https://m.media-amazon.com/images/M/MV5BMjQ2MTIyNjM2MF5BMl5BanBnXkFtZTgwNzgwNzE5NTM@._V1_SX500.jpg",
   19542: "https://m.media-amazon.com/images/M/MV5BMTI5Nzk5NTAzMl5BMl5BanBnXkFtZTcwNjk4MTA0Nw@@._V1_SX500.jpg",
    12163: "https://m.media-amazon.com/images/M/MV5BMTQ5MzcwOTI4NV5BMl5BanBnXkFtZTcwMTE4OTQwMg@@._V1_SX500.jpg",
    1018: "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjEtZDQ0My00N2EzLWE4NjQtZGIzZGE5YjYzNGRiXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX500.jpg",
   1791: "https://m.media-amazon.com/images/M/MV5BMTQ5NDk2NTg3MF5BMl5BanBnXkFtZTcwNTA5NDk2NA@@._V1_SX500.jpg",
    194662: "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX500.jpg",
    641: "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtN2VlZS00MjE1LTkxN2QtN2Y3YjY3MDI5YmM4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    242582: "https://m.media-amazon.com/images/M/MV5BNjkyMDQ1NTEwMl5BMl5BanBnXkFtZTgwNzQ4NDE5NTM@._V1_SX500.jpg"
};

const createMovieData = (data) => data;



export const COMPLETE_MOVIE_DATA = {
    10494: createMovieData({ 
        psychologicalIntensity: 95, artisticObsession: 98, identityHorror: 100,
        complexityLevel: "EXTREME", dominantColor: "#dc2626", rating: 8.0, 
        criticsScore: 67, audienceScore: 85, director: "Satoshi Kon", 
        cast: ["Junko Iwao", "Rica Matsumoto"], boxOffice: "$0.8 million", budget: "$1.2 million", 
        dna: { "Psychological Horror": 40, "Animation": 30, "Thriller": 30 },
        scenes: [
            { time: 15, intensity: 55, label: "The Shift", color: "#dc2626" },
            { time: 40, intensity: 75, label: "Stalker Shadows", color: "#ef4444" },
            { time: 60, intensity: 90, label: "Room Hallucination", color: "#f87171" },
            { time: 75, intensity: 100, label: "The Chase", color: "#fca5a5" },
            { time: 80, intensity: 65, label: "New Reality", color: "#fecaca" }
        ],
        synopsis: "Pop idol Mima Kirigoe sheds her innocent image to become a serious actress, but the cost of her ambition is higher than she ever imagined. As she takes on dark, soul-crushing roles, her reality begins to fracture. Obsessive fans turn into stalkers, and a ghostly version of her past self begins to haunt her every move. Satoshi Kon’s visionary masterpiece is a mind-bending descent into the digital age's fractured identity—a film so influential it served as the direct blueprint for Black Swan's psychological collapse. You will finish this movie questioning what is real and what is merely a performance.",
        themes: ["Identity Loss", "Celebrity Culture", "Psychological Horror"],
        awards: ["Fantasia Film Festival Winner"],
        whyIncluded: "The primary inspiration for Black Swan. Standard-setter for identity-fracture intensity."
    }),
    244786: createMovieData({ 
        psychologicalIntensity: 92, artisticObsession: 95, identityHorror: 60,
        complexityLevel: "HIGH", dominantColor: "#1e40af", rating: 8.5, 
        criticsScore: 88, audienceScore: 94, director: "Damien Chazelle", 
        cast: ["Miles Teller", "J.K. Simmons"], boxOffice: "$13.1 million", budget: "$3.3 million", 
        dna: { "Drama": 60, "Music": 30, "Thriller": 10 },
        scenes: [
            { time: 10, intensity: 35, label: "Not My Tempo", color: "#1e40af" },
            { time: 45, intensity: 65, label: "Rushing", color: "#3b82f6" },
            { time: 65, intensity: 88, label: "The Car Crash", color: "#60a5fa" },
            { time: 95, intensity: 98, label: "Caravan Solo", color: "#93c5fd" },
            { time: 105, intensity: 85, label: "Acknowledgment", color: "#dbeafe" }
        ],
        synopsis: "Andrew Neiman doesn't just want to be a drummer; he wants to be one of the greats. But at the country’s most elite conservatory, greatness is overseen by Terence Fletcher—a conductor who uses psychological warfare to push his students to the breaking point. Andrew's hunger for perfection quickly spirals into an all-consuming obsession, turning the drum kit into a blood-soaked battlefield. This isn't a movie about music; it's a high-octane war of wills that examines how much of your humanity you're willing to sacrifice to achieve artistic immortality. Brace yourself for the most intense finale in modern cinema history.",
        themes: ["Perfectionism", "Toxic Mentorship", "Artistic Sacrifice"],
        awards: ["Won 3 Academy Awards"]
    }),
    361292: createMovieData({ 
        psychologicalIntensity: 88, artisticObsession: 90, identityHorror: 85,
        complexityLevel: "EXTREME", dominantColor: "#059669", rating: 6.7, 
        criticsScore: 64, audienceScore: 58, director: "Luca Guadagnino", 
        cast: ["Dakota Johnson", "Tilda Swinton"], boxOffice: "$7.7 million", budget: "$20 million", 
        dna: { "Horror": 40, "Fantasy": 30, "Mystery": 30 },
        scenes: [
            { time: 25, intensity: 50, label: "Volk", color: "#059669" },
            { time: 45, intensity: 92, label: "The Mirror Death", color: "#10b981" },
            { time: 85, intensity: 75, label: "The Coven", color: "#34d399" },
            { time: 130, intensity: 98, label: "The Sabbath", color: "#6ee7b7" },
            { time: 145, intensity: 45, label: "Mercy", color: "#a7f3d0" }
        ],
        synopsis: "Susie Bannion arrives at a world-renowned dance academy in 1970s Berlin, unaware that she is stepping into a coven of dark, ancient secrets. Under the hypnotic guidance of the artistic director, Susie’s dance becomes something more than art—it becomes a ritual. As students disappear and horrific 'injuries' occur that defy the laws of physics, the line between dance and witchcraft vanishes. This is a visceral, blood-chilling exploration of artistic possession and maternal power. By the time the final performance begins, you’ll realize that in this school, your body is no longer your own.",
        themes: ["Witchcraft", "Maternal Power", "Physical Brutality"]
    }),
   19542: createMovieData({ 
        psychologicalIntensity: 75, artisticObsession: 88, identityHorror: 70,
        complexityLevel: "HIGH", dominantColor: "#7c2d12", rating: 8.1, 
        criticsScore: 95, audienceScore: 89, director: "Michael Powell", 
        cast: ["Moira Shearer", "Anton Walbrook"], boxOffice: "$5.1 million", budget: "$1.2 million", 
        dna: { "Drama": 50, "Romance": 30, "Music": 20 },
        scenes: [
            { time: 30, intensity: 40, label: "Rehearsals", color: "#7c2d12" },
            { time: 65, intensity: 65, label: "Success", color: "#92400e" },
            { time: 90, intensity: 75, label: "Broken Heart", color: "#b45309" },
            { time: 125, intensity: 90, label: "The Spotlight", color: "#d97706" },
            { time: 133, intensity: 96, label: "Leap of Faith", color: "#fbbf24" }
        ],
        synopsis: "Victoria Page is a ballerina caught in a lethal tug-of-war between her heart and her art. Under the gaze of a director who believes a great artist must renounce all human emotion, she is propelled toward international stardom. But as the surreal ballet of 'The Red Shoes' begins to mirror her own life, Victoria finds that once you put on the shoes of obsession, you can never stop dancing. A lush, Technicolor nightmare that defines the tragic cost of aesthetic perfection, this film is the grandfather of the 'obsessed artist' genre, proving that the spotlight can be the most dangerous place on earth.",
        themes: ["Art vs Life", "Total Devotion", "Tragic Fate"]
    }),
   12163: createMovieData({ 
        psychologicalIntensity: 85, artisticObsession: 90, identityHorror: 60,
        complexityLevel: "HIGH", dominantColor: "#15803d", rating: 7.9, 
        criticsScore: 98, audienceScore: 88, director: "Darren Aronofsky", 
        cast: ["Mickey Rourke", "Marisa Tomei"], boxOffice: "$44.7 million", budget: "$6 million", 
        dna: { "Drama": 70, "Sport": 20, "Romance": 10 },
        scenes: [
            { time: 20, intensity: 45, label: "The Locker Room", color: "#15803d" },
            { time: 55, intensity: 85, label: "Staple Gun", color: "#16a34a" },
            { time: 85, intensity: 70, label: "Daughter's Door", color: "#22c55e" },
            { time: 105, intensity: 94, label: "The Jump", color: "#4ade80" },
            { time: 109, intensity: 80, label: "The Cheers", color: "#86efac" }
        ],
        synopsis: "Randy 'The Ram' Robinson was a 1980s wrestling legend, but now his body is a roadmap of scars and steroid-induced damage. When a heart attack forces him into a mundane life, Randy realizes that outside the ring, he is a ghost. Despite the pleas of his daughter and the toll on his failing health, the siren call of the spotlight proves impossible to resist. Directed by Darren Aronofsky as the raw, masculine companion to Black Swan, this film tracks the grotesque beauty of a man willing to destroy his physical vessel for one last moment of glory. It is survival at its most heart-wrenching.",
        themes: ["Body Horror", "Lost Glory", "Addiction to Performance"]
    }),
    1018: createMovieData({ 
        psychologicalIntensity: 98, artisticObsession: 85, identityHorror: 100,
        complexityLevel: "EXTREME", dominantColor: "#1e3a8a", rating: 7.9, 
        criticsScore: 84, audienceScore: 87, director: "David Lynch", 
        cast: ["Naomi Watts", "Laura Harring"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { "Mystery": 50, "Thriller": 30, "Drama": 20 },
        scenes: [
            { time: 25, intensity: 40, label: "Winkie's", color: "#1e3a8a" },
            { time: 70, intensity: 55, label: "Audition", color: "#2563eb" },
            { time: 110, intensity: 95, label: "Silencio", color: "#3b82f6" },
            { time: 125, intensity: 100, label: "The Box", color: "#60a5fa" },
            { time: 140, intensity: 90, label: "Reality", color: "#93c5fd" }
        ],
        synopsis: "A perky aspiring actress and a dark-haired woman with amnesia collide in the shadows of Hollywood. Armed with only a purse full of cash and a mysterious blue key, they embark on a search for identity that quickly devolves into a surreal nightmare. In David Lynch’s masterpiece, the 'dream' of fame is a thin veil for a reality of jealousy and rejection. As identities dissolve and characters shift, you’ll witness the psychological trauma of the failed artist in its purest, most terrifying form. Remember: it is all an illusion. Silencio.",
        themes: ["Identity Fracture", "Hollywood Underbelly", "Dream Logic"]
    }),
   1791: createMovieData({ 
        psychologicalIntensity: 95, artisticObsession: 92, identityHorror: 80,
        complexityLevel: "HIGH", dominantColor: "#334155", rating: 7.5, 
        criticsScore: 74, audienceScore: 78, director: "Michael Haneke", 
        cast: ["Isabelle Huppert", "Benoît Magimel"], boxOffice: "$2.4 million", budget: "$6.5 million", 
        dna: { "Drama": 60, "Romance": 20, "Thriller": 20 },
        scenes: [
            { time: 20, intensity: 45, label: "Peeping", color: "#334155" },
            { time: 60, intensity: 65, label: "Glass in Shoes", color: "#475569" },
            { time: 95, intensity: 92, label: "The Letter", color: "#64748b" },
            { time: 120, intensity: 85, label: "Violation", color: "#94a3b8" },
            { time: 131, intensity: 75, label: "The Knife", color: "#cbd5e1" }
        ],
        synopsis: "Erika Kohut is the picture of icy composure—a prestigious piano professor living under the thumb of her tyrannical mother. But beneath the surface of classical music discipline lies a storm of repressed desires and masochistic tendencies. When a talented student begins to pursue her, their connection descends into a clinical, disturbing game of dominance and submission. Michael Haneke’s unflinching film explores how the pursuit of high-art perfection can lead to a total breakdown of human empathy. It is a cold, calculated descent that will leave you breathless and deeply unsettled.",
        themes: ["Repression", "Masochism", "Control"]
    }),
    194662: createMovieData({ 
        psychologicalIntensity: 85, artisticObsession: 95, identityHorror: 60,
        complexityLevel: "HIGH", dominantColor: "#c2410c", rating: 7.7, 
        criticsScore: 91, audienceScore: 78, director: "Alejandro G. Iñárritu", 
        cast: ["Michael Keaton", "Edward Norton"], boxOffice: "$103.2 million", budget: "$18 million", 
        dna: { "Drama": 40, "Comedy": 40, "Fantasy": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "Whispers", color: "#c2410c" },
            { time: 55, intensity: 65, label: "Times Square", color: "#ea580c" },
            { time: 90, intensity: 85, label: "The Critic", color: "#f97316" },
            { time: 110, intensity: 100, label: "Opening Night", color: "#fb923c" },
            { time: 118, intensity: 75, label: "The Window", color: "#fdba74" }
        ],
        synopsis: "A washed-up superhero actor tries to reclaim his soul by mounting a Broadway play, but his own ego is his most dangerous enemy. Riggan Thomson is literally haunted by the voice of his former persona, which taunts him with his lack of relevance. Shot in one continuous, breathless take, Birdman plunges you into the claustrophobic anxiety of the theater, where the line between the performance and the performer’s mental break is paper-thin. Watch a man struggle to soar one last time as his reality collapses around him. An adrenaline-fueled dive into the existential crisis of being an artist.",
        themes: ["Ego Dissolution", "Artistic Integrity", "Fame"]
    }),
    641: createMovieData({ 
        psychologicalIntensity: 98, artisticObsession: 90, identityHorror: 95,
        complexityLevel: "HIGH", dominantColor: "#0f172a", rating: 8.3, 
        criticsScore: 79, audienceScore: 93, director: "Darren Aronofsky", 
        cast: ["Ellen Burstyn", "Jared Leto"], boxOffice: "$7.4 million", budget: "$4.5 million", 
        dna: { "Drama": 80, "Psychological": 20 },
        scenes: [
            { time: 25, intensity: 55, label: "Summer High", color: "#0f172a" },
            { time: 55, intensity: 75, label: "Fall Decline", color: "#1e293b" },
            { time: 85, intensity: 90, label: "Winter Psychosis", color: "#334155" },
            { time: 98, intensity: 100, label: "The Crescendo", color: "#475569" },
            { time: 102, intensity: 70, label: "Fetal Position", color: "#64748b" }
        ],
        synopsis: "From the heights of a summer high to the freezing depths of winter, four individuals chase a version of happiness that is slowly killing them. Whether it’s the obsession with fitting into a red dress for television or the rush of a needle, the result is the same: a total shattering of the human spirit. Using frenetic editing that mimics the physiological rush of addiction, Darren Aronofsky delivers the ultimate warning on how obsession—for fame, for escape, or for love—destroys the soul. This is not just a movie; it is a visceral, sensory experience that will stay with you long after the screen goes black.",
        themes: ["Addiction", "Self-Destruction", "Hallucination"]
    }),
    242582: createMovieData({ 
        psychologicalIntensity: 80, artisticObsession: 92, identityHorror: 50,
        complexityLevel: "MEDIUM", dominantColor: "#10b981", rating: 7.8, 
        criticsScore: 95, audienceScore: 86, director: "Dan Gilroy", 
        cast: ["Jake Gyllenhaal", "Rene Russo"], boxOffice: "$50.3 million", budget: "$8.5 million", 
        dna: { "Thriller": 60, "Crime": 30, "Drama": 10 },
        scenes: [
            { time: 20, intensity: 45, label: "The Camera", color: "#10b981" },
            { time: 50, intensity: 65, label: "Home Invasion", color: "#059669" },
            { time: 85, intensity: 80, label: "The Sabotage", color: "#047857" },
            { time: 110, intensity: 96, label: "The Chase", color: "#065f46" },
            { time: 117, intensity: 70, label: "The Intern", color: "#34d399" }
        ],
        synopsis: "Louis Bloom is a petty thief who discovers the high-speed world of L.A. crime journalism, where the first person to film a tragedy wins. Armed with a camcorder and zero empathy, Lou turns the spectacle of car crashes and murder into a cold, calculated art form. His obsession with the 'perfect shot' leads him to cross moral lines that will leave you chilled to the bone. Nightcrawler is a study of ruthless ambition in its most sociopathic form—a dark reflection of what happens when a human being views the world only through a lens. This is the artist as a predator.",
        themes: ["Media Exploitation", "Sociopathy", "Ruthless Ambition"]
    })
};

export const STRATEGIC_QUOTES = {
    10494: "Who are you?",
    244786: "There are no two words in the English language more harmful than 'good job'.",
    361292: "Why is everyone so ready to think the worst is over?",
   19542: "Why do you want to dance? Why do you want to live?",
    12163: "The only place I get hurt is out there. The world don't give a sh*t about me.",
    1018: "Silencio.",
   1791: "I have no feelings. Get that into your head.",
    194662: "You are not your work.",
    641: "I'm gonna be on television.",
    242582: "I like to say that if you're seeing me, you're having the worst day of your life."
};

export const CINEMATIC_COLORS = {
    "Psychological": "#e11d48", "Drama": "#334155", "Horror": "#991b1b", "Thriller": "#0f172a", "Music": "#eab308", "Mystery": "#1e3a8a", "Animation": "#e11d48", "Crime": "#10b981", "Comedy": "#c2410c"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: 'Clean ticket - Solid entertainment' },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

export const BLACK_SWAN_MOVIE_FAQS = {
    'Perfect Blue': [
        { question: "Did Black Swan copy Perfect Blue?", answer: "Darren Aronofsky owns the rights to Perfect Blue and has admitted to using scenes from it for Requiem for a Dream. While he denies it was a direct influence on Black Swan, the similarities—the double, the hallucinations, the mirrors—are undeniable. Many critics view Black Swan as a live-action spiritual remake." },
        { question: "Is Mima hallucinating or is it real?", answer: "The genius of the film is that it is both. Mima is suffering from psychosis due to stress, but she is also being gaslit by her manager, Rumi, who is impersonating her online. The film blurs these lines so the audience feels Mima's confusion." },
        { question: "What does the ending mean?", answer: "The final shot of Mima smiling in the rearview mirror saying 'No, I'm real' suggests she has finally accepted her new identity. She has integrated her 'pop idol' past and her 'actress' present, surviving the trauma to become a whole person." },
        { question: "Why is it animated?", answer: "Originally planned as a live-action film, budget cuts forced it into animation. This was a blessing, as the medium allows for surreal transitions between reality and dreams that would look cheesy in live action. It heightened the psychological horror." }
    ],
    'Whiplash': [
        { question: "Is Fletcher a villain or a mentor?", answer: "He is a villain who thinks he is a mentor. His philosophy is that abuse creates greatness ('The next Charlie Parker'). While Andrew does achieve a great performance, the film implies he has lost his humanity and perhaps his life expectancy to get there." },
        { question: "What does the final look between them mean?", answer: "It is a moment of mutual recognition. Andrew has finally surpassed Fletcher's expectations, and Fletcher finally has his 'Charlie Parker.' It is a triumphant moment for the music, but a tragic moment for Andrew as a human being." },
        { question: "Is the story based on truth?", answer: "Yes, director Damien Chazelle based it on his own high school jazz band experience. He stated that he wanted to make a movie about music that felt like a war movie or a gangster film, where instruments are weapons." },
        { question: "Did Miles Teller actually play the drums?", answer: "Yes, Miles Teller has played drums since he was 15 and performed about 70% of the drumming seen in the film. However, visual doubles and audio overdubs were used for the most complex jazz sequences to achieve professional perfection." }
    ],
    'Suspiria': [
        { question: "How does this compare to the 1977 original?", answer: "The original is a neon-colored fairytale; the 2018 version is a bleak, political nightmare. The remake expands the lore of the 'Three Mothers,' adds a Cold War subplot, and focuses more on the physical brutality of dance as a ritual." },
        { question: "Who is Mother Suspiriorum?", answer: "She is one of the Three Mothers, an ancient trinity of witches. In the twist ending, it is revealed that Susie Bannion (Dakota Johnson) is not just a vessel, but the reincarnated Mother Suspiriorum herself, claiming her rightful place and cleansing the coven." },
        { question: "Why is Tilda Swinton playing an old man?", answer: "Tilda Swinton plays three roles: Madame Blanc, Mother Helena Markos, and Dr. Klemperer (under heavy prosthetics). This casting choice underscores the film's theme of female power—even the sole significant male character is actually a woman, suggesting men have no real agency in this witch's world." },
        { question: "What is the meaning of the dance scenes?", answer: "Dance is magic. Unlike the original where magic is invisible, here the movements of the body are spells. The violence inflicted on the victims mirrors the dancers' movements, linking art, body, and destruction." }
    ],
    'The Red Shoes': [
        { question: "Why is this film so influential?", answer: "It is the definitive film about the cost of art. Its use of Technicolor and the 17-minute surrealist ballet sequence revolutionized filmmaking. Martin Scorsese and Brian De Palma cite it as a major influence. It established the trope that art requires the sacrifice of love and life." },
        { question: "Did she jump or did the shoes make her do it?", answer: "The film leaves it ambiguous. On a literal level, she jumps to escape the impossible choice between her husband and ballet. On a metaphorical level, the 'Red Shoes' (her obsession) took over and danced her to death, just as in the fairy tale." },
        { question: "What is the symbolism of the Red Shoes?", answer: "They represent the uncompromising demand of art. Once you put them on (commit to art), you cannot stop dancing. They bring glory but destroy normal human happiness. It is a curse of greatness." },
        { question: "How does it connect to Black Swan?", answer: "Black Swan is essentially a modern horror remake of The Red Shoes. Both feature a dancer torn between a controlling mentor and a lover, both feature a surreal hallucination during a performance, and both end with the dancer dying for their final perfect performance." }
    ],
    'The Wrestler': [
        { question: "Is the ending a suicide?", answer: "It is heavily implied. Randy is told his heart will explode if he wrestles again. By climbing the ropes for his signature move, the 'Ram Jam,' he chooses to die doing the only thing that gives him worth rather than live a life of loneliness and anonymity." },
        { question: "How does this mirror Black Swan?", answer: "Darren Aronofsky directed both and considers them siblings. The Wrestler is about the body breaking down (low art), while Black Swan is about the mind breaking down (high art). Both protagonists sacrifice their bodies and relationships for the applause of the crowd." },
        { question: "Did Mickey Rourke do his own stunts?", answer: "Yes, Mickey Rourke trained for months and performed all his own wrestling moves. He actually cut his forehead with a razor blade on camera (a practice called 'blading') to make the blood real. The role mirrored his own faded acting career." },
        { question: "Why did the romance with the stripper fail?", answer: "Because Randy cannot function in the real world. Cassidy (Marisa Tomei) represents reality and stability. But when reality gets too hard (rejection by his daughter), Randy retreats to the fantasy world of the ring where he is a hero." }
    ],
    'Mulholland Drive': [
        { question: "What is the blue box?", answer: "The blue box represents reality/truth. When it is opened, the 'dream' of the first half of the movie collapses, and we wake up into the harsh, tragic reality of Diane's life. It is Pandora's box—once opened, the illusion cannot be restored." },
        { question: "Who are Betty and Rita really?", answer: "They are idealized dream versions of the real characters. Betty is who Diane wishes she was (talented, hopeful, star). Rita is who Diane wishes Camilla was (dependent, loving, vulnerable). The dream corrects all of Diane's failures in real life." },
        { question: "What does 'Silencio' mean?", answer: "It signifies that everything is an illusion. 'No hay banda' (there is no band). The music plays, but nobody is playing it. It warns Diane that her dream logic is ending and the silence of death/reality is coming." },
        { question: "How does it relate to Black Swan?", answer: "Both films deal with the fracturing of identity under the pressure of Hollywood/performance. The doppelganger motif (blonde vs brunette) and the lesbian relationship that turns from loving to destructive are key parallels." }
    ],
    'The Piano Teacher': [
        { question: "Why does Erika mutilate herself?", answer: "Erika is emotionally numb due to her mother's control and her rigid perfectionism. Self-harm is the only way she can feel something real and assert ownership over her own body. It is an act of desperate rebellion turned inward." },
        { question: "Is Walter a victim?", answer: "Initially yes, but he eventually becomes the aggressor. He starts as a romantic admirer but is disgusted by Erika's masochistic demands. In the end, he beats and rapes her, not out of desire, but to punish her for deviating from the 'normal' romance he expected." },
        { question: "What is the meaning of the final scene?", answer: "Erika stabs herself in the shoulder and walks into the night. It is an anti-climax. She has been completely broken—rejected by her lover and trapped with her mother. The wound is a final, pathetic mark of her existence before she likely returns to her living death." },
        { question: "How is this related to Black Swan?", answer: "It explores the dark side of classical music training—the discipline, the repression, and the 'stage mother' dynamic. Erika is what Nina from Black Swan might have become if she never found her 'black' side: cold, repressed, and internally dead." }
    ],
    'Birdman': [
        { question: "Is Riggan actually telekinetic?", answer: "The film leaves it ambiguous. It is likely a manifestation of his ego and madness. However, the final shot where his daughter looks *up* and smiles suggests that perhaps, in his own reality (or death), he truly did fly. It validates his delusion." },
        { question: "Why is it filmed in one shot?", answer: "The continuous take immerses the audience in the frantic, unceasing pressure of theater. There are no cuts to relieve the tension. It mirrors Riggan's mind—he cannot escape his ego or his anxiety, not even for a second." },
        { question: "What does the Birdman voice represent?", answer: "It is his ego and his past fame. It tempts him to give up 'art' and return to being a shallow celebrity because that is easier and more lucrative. It represents the devil on the shoulder of every artist." },
        { question: "Why does he shoot himself on stage?", answer: "He realizes that the only way to get the audience's true attention and respect is through real blood. It is the ultimate sacrifice for art. Ironically, surviving the shot makes him more famous than ever, trapping him in the cycle again." }
    ],
    'Requiem for a Dream': [
        { question: "Why is the editing so fast?", answer: "The film uses 'hip-hop montage' (extremely short cuts) to mimic the rush of drugs. As the characters spiral, the cuts get faster and faster, overwhelming the viewer. It simulates the physiological experience of addiction." },
        { question: "What is the significance of the red dress?", answer: "For Sara Goldfarb, the red dress represents her past happiness and dignity. Her obsession with fitting into it drives her diet pill addiction. It symbolizes the tragic desire to return to a time when she felt loved and seen." },
        { question: "Is there any hope at the end?", answer: "No. The characters curl into fetal positions, symbolizing their regression to a helpless, infantile state. They have lost their autonomy completely. It is one of the bleakest endings in cinema, serving as a total warning against the American Dream." },
        { question: "Connection to Black Swan?", answer: "Both films are directed by Aronofsky and share the theme of obsession destroying the body. Requiem destroys the body through drugs; Black Swan through dance. Both protagonists hallucinate their physical transformation (refrigerator attack vs feather growth)." }
    ],
    'Nightcrawler': [
        { question: "Is Lou Bloom a psychopath?", answer: "Yes, he exhibits classic traits: lack of empathy, manipulation, and viewing people as objects. He treats crime journalism like a business transaction. The horror is that capitalism rewards his psychopathy, making him a 'success story.'" },
        { question: "What does the mirror scene represent?", answer: "When Lou breaks the mirror, it is the only time he shows genuine emotion (anger/frustration). It cracks his perfect facade. It mirrors the 'Black Swan' mirror shatter, showing the fragmented, violent self beneath the composed surface." },
        { question: "Why does he let his partner die?", answer: "Rick became a liability who asked for more money (leverage). Lou creates a situation where Rick is killed so he can film the death. It is the ultimate act of ruthless capitalism—eliminating a cost center while generating high-value content." },
        { question: "What is the message about the media?", answer: "The film indicts the audience. Lou only films gore because the news stations buy it, and they buy it because *we* watch it. Lou is not the disease; he is the symptom of a society addicted to fear and spectacle." }
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
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('violence')) types.add('graphic violence');
        if (lowerType.includes('self-harm') || lowerType.includes('drug')) types.add('disturbing content');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return BLACK_SWAN_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A psychological thriller about obsession.`,
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