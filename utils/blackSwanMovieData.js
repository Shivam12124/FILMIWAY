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
scenes: [       { start: "0:23:32", end: "0:24:30", type: "Nudity(Blurred)", severity: "Moderate" },
            { start: "1:38:45", end: "1:42:55", type: "Nudity", severity: "High" },
            { start: "2:01:27", end: "2:02:59", type: "Nudity", severity: "High" },
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



// ✅ Helper function to ensure defaults
const createMovieData = (data) => ({
  psychologicalIntensity: 80,
  destructiveObsession: 80, 
  visceralImpact: 70,       
  complexityLevel: "HIGH",
  dominantColor: "#000000",
  ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Perfect Blue (The Blueprint)
    10494: createMovieData({ 
        psychologicalIntensity: 95, destructiveObsession: 98, visceralImpact: 95, complexityLevel: "EXTREME", 
        dominantColor: "#991b1b", rating: 8.0, criticsScore: 81, audienceScore: 85, director: "Satoshi Kon", 
        cast: ["Junko Iwao", "Rica Matsumoto"], boxOffice: "$0.8 million", budget: "$1.2 million", 
        dna: { "Psychological": 45, "Horror": 30, "Mystery": 25 },
        scenes: [
            { time: 15, intensity: 45, label: "The Shift", color: "#991b1b" },
            { time: 40, intensity: 70, label: "Me-Mania", color: "#9333ea" },
            { time: 60, intensity: 85, label: "Room Hallucination", color: "#60a5fa" },
            { time: 75, intensity: 100, label: "The Chase", color: "#991b1b" },
            { time: 80, intensity: 65, label: "New Reality", color: "#a78bfa" }
        ],
        synopsis: "A pop star sheds her innocent image to become an actress, only to find her reality fracturing as a stalker and a spectral version of her past self haunt her every move. This mind-bending masterpiece served as the direct blueprint for Black Swan's psychological collapse.",
        themes: ["Identity Loss", "Celebrity Culture", "Psychological Horror"]
    }),

    // 2. Whiplash (The Twin)
    244786: createMovieData({ 
        psychologicalIntensity: 92, destructiveObsession: 95, visceralImpact: 80, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 8.5, criticsScore: 94, audienceScore: 94, director: "Damien Chazelle", 
        cast: ["Miles Teller", "J.K. Simmons"], boxOffice: "$49 million", budget: "$3.3 million", 
        dna: { "Drama": 50, "Psychological": 30, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 35, label: "Not My Tempo", color: "#dc2626" },
            { time: 45, intensity: 65, label: "Rushing", color: "#9333ea" },
            { time: 65, intensity: 90, label: "The Car Crash", color: "#0f172a" },
            { time: 95, intensity: 98, label: "Caravan Solo", color: "#dc2626" },
            { time: 105, intensity: 85, label: "The Smile", color: "#f59e0b" }
        ],
        synopsis: "A promising young drummer is pushed to the edge of sanity by a ruthless instructor who uses psychological warfare to create greatness. It’s a high-octane war of wills where the pursuit of art justifies the destruction of the human soul.",
        themes: ["Perfectionism", "Toxic Mentorship", "Sacrifice"]
    }),

    // 3. Suspiria (The Witchy Sister)
    361292: createMovieData({ 
        psychologicalIntensity: 88, destructiveObsession: 90, visceralImpact: 85, complexityLevel: "EXTREME", 
        dominantColor: "#991b1b", rating: 6.7, criticsScore: 66, audienceScore: 65, director: "Luca Guadagnino", 
        cast: ["Dakota Johnson", "Tilda Swinton"], boxOffice: "$7.9 million", budget: "$20 million", 
        dna: { "Horror": 45, "Fantasy": 35, "Mystery": 20 },
        scenes: [
            { time: 25, intensity: 50, label: "The Audition", color: "#991b1b" },
            { time: 45, intensity: 92, label: "The Mirror Death", color: "#9333ea" },
            { time: 85, intensity: 75, label: "The Coven", color: "#6b21a8" },
            { time: 130, intensity: 93, label: "The Sabbath", color: "#991b1b" },
            { time: 145, intensity: 45, label: "Mercy", color: "#dc2626" }
        ],
        synopsis: "Susie Bannion enters a world-renowned dance academy in 1970s Berlin, unaware that the line between performance and dark ritual has vanished. A visceral exploration of artistic possession where every movement of the body carries blood-chilling consequences.",
        themes: ["Witchcraft", "Maternal Power", "Physical Brutality"]
    }),

    // 4. The Red Shoes (The Grandmother)
    19542: createMovieData({ 
        psychologicalIntensity: 75, destructiveObsession: 88, visceralImpact: 75, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 8.1, criticsScore: 97, audienceScore: 92, director: "Michael Powell", 
        cast: ["Moira Shearer", "Anton Walbrook"], boxOffice: "$5 million", budget: "$1.2 million", 
        dna: { "Drama": 45, "Romance": 35, "Fantasy": 20 },
        scenes: [
            { time: 30, intensity: 40, label: "Rehearsals", color: "#dc2626" },
            { time: 65, intensity: 65, label: "Success", color: "#f59e0b" },
            { time: 90, intensity: 75, label: "Broken Heart", color: "#ec4899" },
            { time: 125, intensity: 90, label: "The Spotlight", color: "#8b5cf6" },
            { time: 133, intensity: 96, label: "Leap of Faith", color: "#dc2626" }
        ],
        synopsis: "A ballerina is caught in a lethal struggle between her heart and a director who demands total devotion to art. This Technicolor masterpiece defined the 'obsessed artist' genre, proving that the spotlight can be the most dangerous place on earth.",
        themes: ["Art vs Life", "Total Devotion", "Tragic Fate"]
    }),

    // 5. The Wrestler (The Brother)
    12163: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 90, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 7.9, criticsScore: 98, audienceScore: 88, director: "Darren Aronofsky", 
        cast: ["Mickey Rourke", "Marisa Tomei"], boxOffice: "$44.7 million", budget: "$6 million", 
        dna: { "Drama": 60, "Action": 25, "Romance": 15 },
        scenes: [
            { time: 20, intensity: 45, label: "The Locker Room", color: "#dc2626" },
            { time: 55, intensity: 85, label: "Staple Gun", color: "#f59e0b" },
            { time: 85, intensity: 70, label: "Daughter's Door", color: "#dc2626" },
            { time: 105, intensity: 94, label: "The Jump", color: "#f59e0b" },
            { time: 109, intensity: 80, label: "The Cheers", color: "#eab308" }
        ],
        synopsis: "A wrestling legend from the 80s realizes he is a ghost outside the ring. Aronofsky directs this raw companion to Black Swan, tracking the grotesque beauty of a man willing to destroy his body for one last moment of glory.",
        themes: ["Body Horror", "Lost Glory", "Addiction to Performance"]
    }),

    // 6. Mulholland Drive (The Nightmare)
    1018: createMovieData({ 
        psychologicalIntensity: 98, destructiveObsession: 85, visceralImpact: 100, complexityLevel: "EXTREME", 
        dominantColor: "#6b21a8", rating: 7.9, criticsScore: 85, audienceScore: 87, director: "David Lynch", 
        cast: ["Naomi Watts", "Laura Harring"], boxOffice: "$20.1 million", budget: "$15 million", 
          dna: { Mystery: 50, Thriller: 30, Drama: 20 },
        scenes: [
            { time: 25, intensity: 40, label: "Winkie's", color: "#6b21a8" },
            { time: 70, intensity: 55, label: "Audition", color: "#dc2626" },
            { time: 110, intensity: 95, label: "Silencio", color: "#60a5fa" },
            { time: 125, intensity: 100, label: "The Box", color: "#0f172a" },
            { time: 140, intensity: 90, label: "Reality", color: "#a78bfa" }
        ],
        synopsis: "An aspiring actress and an amnesiac woman collide in a search for identity that devolves into a surreal nightmare. Lynch shatters the Hollywood dream to expose the psychological trauma of rejection in cinema's most famous mind-bender.",
        themes: ["Identity Fracture", "Hollywood Underbelly", "Dream Logic"]
    }),

    // 7. The Piano Teacher (The Dark Mirror)
    1791: createMovieData({ 
        psychologicalIntensity: 95, destructiveObsession: 92, visceralImpact: 88, complexityLevel: "HIGH", 
        dominantColor: "#9333ea", rating: 7.5, criticsScore: 74, audienceScore: 78, director: "Michael Haneke", 
        cast: ["Isabelle Huppert", "Benoît Magimel"], boxOffice: "$2.4 million", budget: "$6.5 million", 
        dna: { "Psychological": 50, "Drama": 30, "Romance": 20 },
        scenes: [
            { time: 20, intensity: 50, label: "Peeping", color: "#9333ea" },
            { time: 60, intensity: 65, label: "Glass in Shoes", color: "#dc2626" },
            { time: 95, intensity: 92, label: "The Letter", color: "#6b21a8" },
            { time: 120, intensity: 85, label: "Violation", color: "#9333ea" },
            { time: 131, intensity: 75, label: "The Knife", color: "#dc2626" }
        ],
        synopsis: "A prestigious piano professor lives a life of icy discipline that masks a storm of repressed masochism. When a student pursues her, their connection becomes a clinical, disturbing descent that challenges every boundary of human empathy.",
        themes: ["Repression", "Masochism", "Control"]
    }),

    // 8. Birdman (The Ego)
    194662: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 95, visceralImpact: 60, complexityLevel: "HIGH", 
        dominantColor: "#f59e0b", rating: 7.7, criticsScore: 91, audienceScore: 78, director: "Alejandro G. Iñárritu", 
        cast: ["Michael Keaton", "Edward Norton"], boxOffice: "$103.2 million", budget: "$18 million", 
        dna: { "Comedy": 40, "Drama": 30, "Psychological": 30 },
        scenes: [
            { time: 15, intensity: 40, label: "Whispers", color: "#9333ea" },
            { time: 55, intensity: 65, label: "Times Square", color: "#eab308" },
            { time: 90, intensity: 80, label: "The Critic", color: "#dc2626" },
            { time: 110, intensity: 96, label: "The Shot", color: "#f59e0b" },
            { time: 118, intensity: 60, label: "Fly Away", color: "#3b82f6" }
        ],
        synopsis: "A washed-up superhero actor attempts a Broadway comeback while battling his ego and a ghost from his past. Shot in a single, breathless take, it plunges you into the claustrophobic anxiety of an artist desperate to soar one last time.",
        themes: ["Ego Dissolution", "Artistic Integrity", "Fame"]
    }),

    // 9. Requiem for a Dream (The Addiction)
    641: createMovieData({ 
        psychologicalIntensity: 98, destructiveObsession: 90, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 8.3, criticsScore: 79, audienceScore: 93, director: "Darren Aronofsky", 
        cast: ["Ellen Burstyn", "Jared Leto"], boxOffice: "$7.4 million", budget: "$4.5 million", 
        dna: { "Drama": 50, "Horror": 30, "Psychological": 20 },
        scenes: [
            { time: 25, intensity: 55, label: "Summer High", color: "#f59e0b" }, 
            { time: 55, intensity: 75, label: "Fall Decline", color: "#dc2626" }, 
            { time: 85, intensity: 92, label: "Winter Psychosis", color: "#9333ea" }, 
            { time: 98, intensity: 100, label: "The Crescendo", color: "#991b1b" }, 
            { time: 102, intensity: 85, label: "Fetal Position", color: "#0f172a" } 
        ],
        synopsis: "Four individuals on the edge of Coney Island chase dreams of a better life, only to be consumed by the very addictions they used to escape. Using frenetic, hypnotic editing, Aronofsky delivers a devastating warning on the price of obsession. This is not just a film; it is a sensory journey into a psychological void that peaks with one of the most intense, heart-shattering finales ever committed to screen.",
        themes: ["Addiction", "Self-Destruction", "Hallucination"]
    }),

    // 10. Nightcrawler (The Sociopath)
    242582: createMovieData({ 
        psychologicalIntensity: 80, destructiveObsession: 92, visceralImpact: 60, complexityLevel: "MEDIUM", 
        dominantColor: "#0f172a", rating: 7.8, criticsScore: 95, audienceScore: 86, director: "Dan Gilroy", 
        cast: ["Jake Gyllenhaal", "Rene Russo"], boxOffice: "$50.3 million", budget: "$8.5 million", 
        dna: { "Crime": 40, "Thriller": 40, "Neo-Noir": 20 },
        scenes: [
            { time: 20, intensity: 45, label: "The Camera", color: "#0f172a" },
            { time: 50, intensity: 65, label: "Home Invasion", color: "#1d1fb9ff" },
            { time: 85, intensity: 80, label: "The Sabotage", color: "#0f172a" },
            { time: 110, intensity: 96, label: "The Chase", color: "#f59e0b" },
            { time: 117, intensity: 70, label: "The Intern", color: "#0f172a" }
        ],
        synopsis: "A petty thief turns tragedy into cold, calculated art by racing to capture the first footage of accidents and murder. Lou Bloom is the sociopathic evolution of the obsessive artist, where the perfect shot is worth more than a human life.",
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
        { 
            question: "Is Perfect Blue the primary inspiration for Black Swan?", 
            answer: "While director Darren Aronofsky has only officially acknowledged buying the film's rights to use a specific bathtub scene for 'Requiem for a Dream,' the parallels are undeniable. Both films explore a performer's descent into psychosis, the presence of a 'malevolent double,' and the use of shattered mirrors to symbolize identity fragmentation. It is widely considered the spiritual predecessor to Nina Sayers' story." 
        },
        { 
            question: "What is the 'Double Bind' Mima experiences?", 
            answer: "Mima is trapped between two identities: the 'pure' pop idol her fans demand and the 'serious' actress her career requires. This psychological tension manifests as literal hallucinations of her former self. The film argues that the persona we create for the public can eventually become a parasite that attempts to kill the real person beneath." 
        },
        { 
            question: "Who was actually committing the murders?", 
            answer: "The murders were committed by Mima’s manager, Rumi, who was suffering from a dissociative identity disorder. Rumi believed she was the 'real' Mima (the idol) and sought to eliminate anyone 'staining' that image. However, the film uses brilliant editing to make Mima—and the audience—believe Mima was the killer, mirroring her own internal loss of self." 
        },
        { 
            question: "Why is the ending mirror shot significant?", 
            answer: "When Mima looks in the mirror and says 'No, I'm real,' it signifies the end of her psychosis. Unlike Nina in Black Swan who is destroyed by her transformation, Mima survives by integrating her trauma and reclaiming her agency. She is no longer a puppet for her fans or her management; she has become a whole, albeit scarred, individual." 
        }
    ],
    'Whiplash': [
        { 
            question: "Is Fletcher's abuse intended to be viewed as 'necessary' for greatness?", 
            answer: "The film presents a disturbing moral ambiguity. While Andrew achieves a 'god-tier' performance at the end, he does so at the cost of his family, his empathy, and his sanity. Director Damien Chazelle has suggested that Andrew likely died young and alone after the credits rolled. The film doesn't endorse the abuse; it merely documents the high price of obsession." 
        },
        { 
            question: "What does the 'Charlie Parker' story symbolize?", 
            answer: "Fletcher repeatedly tells the story of Jo Jones throwing a cymbal at Charlie Parker's head, which supposedly drove him to become a legend. Fletcher uses this historical anecdote to justify his own cruelty. It represents the 'Greatness at any cost' philosophy that serves as the engine for both Whiplash and Black Swan." 
        },
        { 
            question: "Does Andrew actually surpass Fletcher in the finale?", 
            answer: "Yes. In the final 'Caravan' solo, Andrew takes control of the tempo and the band away from Fletcher. By refusing to stop when Fletcher tells him to, Andrew transitions from a student seeking approval to an artist who only cares about the work. It is the moment the 'monster' Fletcher created becomes more powerful than the creator himself." 
        },
        { 
            question: "Is the film based on a real person?", 
            answer: "The film is semi-autobiographical, based on Damien Chazelle's time as a competitive jazz drummer. While Terence Fletcher is a fictional character, he is a composite of several high-pressure conductors. J.K. Simmons' performance was designed to make the instructor feel like a drill sergeant in a war movie rather than a music teacher." 
        }
    ],
    'Suspiria': [
        { 
            question: "How does the dance in Suspiria relate to Black Swan?", 
            answer: "In both films, dance is a form of physical sacrifice. In Suspiria (2018), the movements are literally 'spells.' When Susie dances, her body movements inflict physical trauma on a rebellious student in another room. It elevates the concept of 'bleeding for your art' into a literal, supernatural requirement for power." 
        },
        { 
            question: "Who are the 'Three Mothers'?", 
            answer: "They are an ancient trio of witches: Mother Tenebrarum (Darkness), Mother Lachrymarum (Tears), and Mother Suspiriorum (Sighs). The 2018 film focuses on the power struggle within the coven as they wait for the true Mother Suspiriorum to reveal herself. The themes of maternal control and artistic possession mirror the 'Stage Mother' dynamic in Black Swan." 
        },
        { 
            question: "What is the meaning of the 'Volk' dance sequence?", 
            answer: "The dance 'Volk' is the central ritual of the film. It represents the coven's political and occult power. The precision required for the dance mirrors the 'White Swan' perfection, but the intent behind it is purely 'Black Swan'—dark, destructive, and intended to hollow out the performer to serve a higher, more sinister entity." 
        },
        { 
            question: "Why is the setting of divided Berlin important?", 
            answer: "The 1977 setting during the 'German Autumn' (a period of terrorism and political unrest) mirrors the internal division of the characters. Just as Berlin is split by a wall, the dancers are split between their human selves and the occult roles they must play. It adds a layer of 'generational trauma' to the psychological horror." 
        }
    ],
    'The Red Shoes': [
        { 
            question: "How did The Red Shoes set the template for Black Swan?", 
            answer: "It established the 'Tragic Ballerina' archetype. Both Victoria Page and Nina Sayers are caught between a cold, demanding artistic director (Lermontov/Leroy) and their own desire for a normal life. The central metaphor—shoes that take over your feet and force you to dance until you die—is the foundation for the 'transformation horror' in Black Swan." 
        },
        { 
            question: "Is Lermontov a villain or an artist?", 
            answer: "Lermontov is an 'Aesthete' who believes that art is a jealous god. He doesn't see himself as cruel; he sees himself as a guardian of greatness. To him, Victoria’s desire for love is a 'distraction' from her destiny. He represents the toxic belief that to be a 100% artist, you must be 0% human." 
        },
        { 
            question: "What is the significance of the 17-minute ballet?", 
            answer: "It was revolutionary because the cinematography changes to reflect Victoria's internal emotions rather than just filming a stage play. The backgrounds become surreal and nightmarish, showing the audience that she is no longer 'acting'—she has entered the world of the story. This subjective reality is a technique Aronofsky used heavily in Black Swan." 
        },
        { 
            question: "Did Victoria choose to die?", 
            answer: "The film leaves this beautifully ambiguous. On one level, she jumps to escape the impossible choice between her husband and her art. On a metaphorical level, the 'Red Shoes' (her obsession) drove her to the edge. It suggests that once an artist achieves 'perfection,' there is nowhere left to go but down." 
        }
    ],
    'The Wrestler': [
        { 
            question: "Why is The Wrestler considered the 'brother' film to Black Swan?", 
            answer: "Director Darren Aronofsky originally conceived them as one story about a wrestler and a ballerina who fall in love. He realized they were too big and split them. They are thematic twins: The Wrestler is 'Low Art' (physical/masculine) and Black Swan is 'High Art' (spiritual/feminine), but both are about destroying the body for the audience's applause." 
        },
        { 
            question: "Does Randy die at the end?", 
            answer: "While we don't see him hit the mat, it is heavily implied. Randy is warned that his heart cannot take another match. By performing his signature 'Ram Jam' jump, he chooses a glorious death in the spotlight over a lonely, anonymous life as a deli clerk. It is his version of Nina's 'I was perfect' moment." 
        },
        { 
            question: "What is the significance of the staple gun scene?", 
            answer: "It highlights the 'grotesque' side of performance. It shows the audience that the 'magic' they see is built on real pain and physical mutilation. This mirrors the scenes in Black Swan where Nina peels back her skin or bleeds from her toes—reminding us that art often requires the desecration of the artist's body." 
        },
        { 
            question: "Why can't Randy connect with his daughter?", 
            answer: "Randy is addicted to the version of himself that exists in the ring. In the real world, he is a failure and a 'nobody.' Because he cannot handle the vulnerability and work required for a real relationship, he retreats into the fantasy world where he is a hero, even if that world is killing him." 
        }
    ],
    'Mulholland Drive': [
        { 
            question: "How does Mulholland Drive explore the 'Fractured Artist'?", 
            answer: "Like Black Swan, it deals with the 'Doppelgänger' (the double). The first half of the film is a dream-fantasy where the failing actress (Diane) imagines herself as a talented, hopeful star (Betty). The film documents the moment the 'Black Swan' of reality shatters the 'White Swan' of the dream, leading to total mental collapse." 
        },
        { 
            question: "What does 'Silencio' mean?", 
            answer: "The Club Silencio scene is the film's '1+1=1' moment. It proves that the music we hear is a recording and the performers are lip-syncing. It is a warning to the protagonist that her reality is a fabrication. It represents the silence of the grave and the end of the illusion that she could ever be a star." 
        },
        { 
            question: "Who is the 'Monster' behind Winkie's?", 
            answer: "The terrifying figure represents the raw, ugly truth that Diane is hiding from herself. It is the manifestation of her guilt and the 'darkness' required to succeed in Hollywood. It mirrors the 'demonic' version of Nina that begins to appear in mirrors—the part of the psyche that the artist is terrified to look at." 
        },
        { 
            question: "What is the blue box?", 
            answer: "The box is the gateway between the dream and reality. Once the key is turned and the box is opened, the 'Betty' persona is sucked into the darkness and the real, traumatized 'Diane' wakes up. It symbolizes the point of no return in a psychological breakdown where the fantasy can no longer protect the ego." 
        }
    ],
    'The Piano Teacher': [
        { 
            question: "How does Erika Kohut compare to Nina Sayers?", 
            answer: "Erika is what happens if Nina survives but never heals. She is a master of her craft (piano) but is emotionally dead and sexually repressed. While Nina's obsession is directed toward a performance, Erika's obsession is directed toward control and masochism, showing the 'cold' side of artistic perfectionism." 
        },
        { 
            question: "Why does the film focus so much on Erika's mother?", 
            answer: "The mother represents the 'Devouring Maternal' figure. She has raised Erika to be a tool for musical achievement, denying her a private life or a stable identity. This overbearing 'stage mother' dynamic is the direct source of Erika's self-harming tendencies and her inability to form healthy connections." 
        },
        { 
            question: "What is the significance of the glass in the student's coat?", 
            answer: "Erika puts broken glass in a talented student's pocket to ruin her hands. It is an act of pure professional jealousy. It shows that her obsession with 'perfection' has curdled into a hatred for anyone else who might achieve it. It mirrors the 'Black Swan' rivalry between Nina and Lily." 
        },
        { 
            question: "What does the ending stab signify?", 
            answer: "After being rejected and humiliated by Walter, Erika stabs herself in the shoulder in the lobby of the concert hall and walks away. It is not a grand, operatic suicide like Black Swan; it is a quiet, pathetic act of self-mutilation. It signifies that she will continue to live in her own personal hell, unable to even end her own suffering." 
        }
    ],
    'Birdman': [
        { 
            question: "Is the 'Birdman' voice a hallucination or an ego?", 
            answer: "It is both. The voice represents Riggan’s ego and his past commercial success. It taunts him for trying to be a 'serious artist,' tempting him to return to shallow fame. Like the 'Dark Nina' in Black Swan, it is an internal shadow that becomes more powerful as the pressure of the performance increases." 
        },
        { 
            question: "Why did the director use the 'Single Shot' technique?", 
            answer: "The continuous take mimics the unceasing, claustrophobic pressure of a Broadway play. There are no 'cuts' in real life or on stage. It forces the audience to feel Riggan’s anxiety as he navigates the narrow hallways of the theater, mirroring the mental trap of his own making." 
        },
        { 
            question: "What happened on stage in the final act?", 
            answer: "Riggan replaces a prop gun with a real one and shoots himself on stage. He realizes that the only way to achieve 'absolute' truth in art is through real blood. Ironically, this act of self-destruction brings him the critical acclaim he spent his life chasing. It validates the 'Black Swan' theory: perfection requires total sacrifice." 
        },
        { 
            question: "What does the final shot of the daughter looking up mean?", 
            answer: "When Sam (Emma Stone) looks up at the window and smiles, it suggests that Riggan has finally 'flown.' Whether this is a literal supernatural event or a metaphor for him finding peace in death, it indicates that he finally transcended his ego. He is no longer 'Birdman'; he is finally free." 
        }
    ],
    'Requiem for a Dream': [
        { 
            question: "How does the visual style mirror Black Swan?", 
            answer: "Both films use 'Snorricam' (cameras strapped to the actor) and extreme close-ups to create an oppressive sense of subjectivity. The editing is designed to make the viewer feel the character's physiological state—whether it’s the rush of a drug or the frantic panic of a stage fright. It is 'Sensory Cinema' at its most extreme." 
        },
        { 
            question: "What is the 'Red Dress' obsession?", 
            answer: "For Sara Goldfarb, the red dress represents her youth, her husband, and her dignity. Her obsession with fitting into it for a TV appearance is her version of Nina's 'Swan Queen' role. Both women ignore their crumbling bodies and minds to achieve a fleeting, delusional moment of public validation." 
        },
        { 
            question: "Why are the seasons used as a narrative structure?", 
            answer: "The film moves from Summer (Hope/High) to Fall (Decline) to Winter (The End/Withdrawal). It shows the inevitable 'cooling' of obsession. While Black Swan is a spiral, Requiem is a descent into a cold, dark void from which there is no return. It represents the natural law that every 'high' must have a catastrophic 'low'." 
        },
        { 
            question: "Is the refrigerator hallucination real?", 
            answer: "It is a manifestation of Sara's amphetamine-induced psychosis. The refrigerator attacking her represents her fear of her own home and her own body. This 'Identity Horror'—where inanimate objects or mirrors become threatening—is a signature Aronofsky trope that he perfected in Black Swan." 
        }
    ],
    'Nightcrawler': [
        { 
            question: "Is Lou Bloom an artist or a predator?", 
            answer: "Lou views himself as an artist and a businessman. His 'canvas' is the crime scene, and his 'brush' is the camera. However, his lack of empathy makes him a predator. He represents the 'Black Swan' taken to a sociopathic extreme: someone who will literally arrange a murder just to get the perfect shot." 
        },
        { 
            question: "What does the mirror breaking scene symbolize?", 
            answer: "This is Lou's only moment of genuine, uncontrolled emotion. When he breaks the mirror, we see the 'cracks' in his sociopathic mask. Like Nina's mirror hallucinations, it shows a man whose internal self is so fractured and violent that it can no longer be contained by a polite facade." 
        },
        { 
            question: "Why does he let Rick die?", 
            answer: "Rick became a 'cost' that Lou was no longer willing to pay. Lou orchestrated Rick's death not just to film it, but to eliminate a partner who was demanding more money and leverage. It is the ultimate act of 'Artistic Purity'—removing anything that interferes with the final product (the footage)." 
        },
        { 
            question: "What is the film's message about the audience?", 
            answer: "The film is an indictment of us. Lou Bloom only exists because we want to see the 'gore' on the morning news. If Nina Sayers represents the artist's sacrifice to art, Lou Bloom represents the artist's sacrifice of *others* to the audience’s hunger for spectacle." 
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