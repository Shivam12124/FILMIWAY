// utils/blackSwanMovieData.js - BLACK SWAN COLLECTION DATA ✅
// Movies exploring artistic obsession, psychological descent, and identity horror

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
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

// ✅ UPDATED SENSITIVE TIMELINES (Sexual Content & Nudity ONLY)
export const SENSITIVE_TIMELINES = {
    // 1. Perfect Blue
    10494: { 
        scenes: [
            { start: "0:33:20", end: "0:35:10", type: "Sexual Content", severity: "High" }, 
            { start: "0:45:40", end: "0:48:00", type: "Nudity", severity: "High" },
            { start: "0:57:05", end: "0:57:32", type: "Nudity", severity: "High" },  // Fixed typo "Nudityt"
            { start: "1:04:20", end: "1:06:55", type: "Nudity", severity: "High" }
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
            { start: "0:23:32", end: "0:24:30", type: "Nudity (Blurred)", severity: "Moderate" },
            { start: "1:38:45", end: "1:42:55", type: "Nudity", severity: "High" },
            { start: "2:01:27", end: "2:02:59", type: "Nudity", severity: "High" }
        ]
    },

    // 7. The Piano Teacher
   1791: { 
        scenes: [
            { start: "0:25:00", end: "0:27:50", type: "Nudity & Sexual Content", severity: "High" },
            { start: "0:52:00", end: "0:53:20", type: "Sexual Content", severity: "High" },
            { start: "1:06:50", end: "1:12:10", type: "Sexual Content", severity: "High" }, 
            { start: "1:39:40", end: "1:41:40", type: "Sexual Content", severity: "High" }, 
            { start: "1:45:40", end: "1:49:40", type: "Sexual Content", severity: "High" }, 
            { start: "1:53:40", end: "2:03:40", type: "Nudity & Sex", severity: "High" }
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
            { start: "0:37:00", end: "0:37:25", type: "Nudity", severity: "Moderate" },
            { start: "1:30:30", end: "1:33:50", type: "Sex & Nudity", severity: "High" }
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
        dna: { "Drama": 40, "Comedy": 30, "Psychological": 30 },
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
        synopsis: "Four individuals on the edge of Coney Island chase dreams of a better life, only to be consumed by the very addictions they used to escape. Using frenetic, hypnotic editing, Aronofsky delivers a devastating warning on the price of obsession.",
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
        { question: "Did the anime Perfect Blue inspire Black Swan?", answer: "While director Darren Aronofsky has only officially acknowledged buying the film's rights to use a specific bathtub scene for 'Requiem for a Dream,' the parallels are undeniable. Both films explore a performer's descent into psychosis, the presence of a 'malevolent double,' and the use of shattered mirrors to symbolize identity fragmentation. It is widely considered the spiritual predecessor to Nina Sayers' story." },
        { question: "What is the 'Double Bind' in Perfect Blue?", answer: "Mima is trapped between two conflicting identities: the 'pure' pop idol her fans demand and the 'serious' adult actress her career requires. This psychological tension manifests as literal hallucinations of her former self. The film argues that the persona an artist creates for the public can eventually become a parasite that attempts to destroy the real person beneath." },
        { question: "Who is the real killer in Perfect Blue?", answer: "The murders were actually committed by Mima’s manager, Rumi, who was suffering from severe dissociative identity disorder. Rumi delusionally believed she was the 'real' Mima (the pure pop idol) and sought to eliminate anyone 'staining' that image. However, the film uses brilliant, disorienting editing to make Mima—and the audience—falsely believe Mima herself was the killer." },
        { question: "What does the final mirror scene mean in Perfect Blue?", answer: "When Mima looks into the rearview mirror and smiles, saying, 'No, I'm real,' it signifies the end of her psychosis. Unlike Nina in Black Swan who is destroyed by her transformation, Mima survives by integrating her trauma and reclaiming her agency. She is no longer a puppet for her fans or management; she has become a whole, independent individual." }
    ],
    'Whiplash': [
        { question: "Does Whiplash glorify abuse to achieve greatness?", answer: "The film presents a deeply disturbing moral ambiguity rather than an endorsement. While Andrew achieves a 'god-tier' musical performance at the end, he does so at the absolute cost of his family, his empathy, and his sanity. Director Damien Chazelle has even suggested that Andrew likely died young and sad after the credits rolled. The film merely documents the devastatingly high price of obsession." },
        { question: "What is the meaning of the Charlie Parker story in Whiplash?", answer: "Fletcher repeatedly tells the story of drummer Jo Jones throwing a cymbal at Charlie Parker's head, an act of violence that supposedly drove Parker to become a jazz legend. Fletcher uses this historical anecdote to justify his own horrific cruelty. It represents the toxic 'Greatness at any cost' philosophy that serves as the engine for the entire film." },
        { question: "Does Andrew actually beat Fletcher at the end of Whiplash?", answer: "Yes. In the final, breathtaking 'Caravan' solo, Andrew physically and musically seizes control of the tempo and the band away from Fletcher. By refusing to stop when Fletcher commands him to, Andrew transitions from a desperate student seeking approval to an artist who only cares about the work. The 'monster' Fletcher created finally overpowers the creator." },
        { question: "Is the movie Whiplash based on a true story?", answer: "The film is heavily semi-autobiographical, based on writer-director Damien Chazelle's own intense experiences as a competitive high school jazz drummer. While Terence Fletcher is a fictional character, he is a terrifying composite of several high-pressure conductors Chazelle encountered." }
    ],
    'Suspiria': [
        { question: "How is the movie Suspiria connected to Black Swan?", answer: "In both films, elite dance is portrayed as a form of literal, physical sacrifice. In the 2018 remake of Suspiria, the choreography acts as actual spellcasting. When Susie dances, her violent body movements inflict real, bone-crushing physical trauma on a rebellious student in another room, elevating the concept of 'bleeding for your art' into a supernatural horror." },
        { question: "Who are the Three Mothers in Suspiria?", answer: "They are an ancient, powerful trio of witches that rule the world from the shadows: Mother Tenebrarum (Darkness), Mother Lachrymarum (Tears), and Mother Suspiriorum (Sighs). The 2018 film focuses on the violent power struggle within the Berlin coven as they wait for the true Mother Suspiriorum to reveal herself." },
        { question: "What is the meaning of the 'Volk' dance in Suspiria?", answer: "The 'Volk' dance is the central, terrifying ritual of the film, representing the coven's political and occult power. The absolute precision required for the dance mirrors the 'White Swan' perfection, but the intent behind it is purely 'Black Swan'—dark, destructive, and designed to hollow out the performer so they can serve a sinister, ancient entity." },
        { question: "Why is the 2018 Suspiria set in divided Berlin?", answer: "The 1977 setting takes place during the 'German Autumn,' a period of intense domestic terrorism and political unrest. This heavily mirrors the internal, psychological division of the characters. Just as Berlin is physically split by a wall, the dancers are split between their human selves and the occult roles they must play, adding a layer of generational guilt to the horror." }
    ],
    'The Red Shoes': [
        { question: "How did The Red Shoes inspire Black Swan?", answer: "The 1948 classic established the absolute template for the 'Tragic Ballerina' archetype. Both Victoria Page and Nina Sayers are caught in a psychological vice between a cold, demanding artistic director and their own desire for a normal life. The central metaphor—magical shoes that force you to dance until you die—is the foundation for the transformation horror in Black Swan." },
        { question: "Is Lermontov the villain in The Red Shoes?", answer: "Lermontov is an extreme 'Aesthete' who believes that art is a jealous, demanding god. He doesn't view himself as a cruel villain; he sees himself as a necessary guardian of greatness. To him, Victoria’s desire for love is a fatal 'distraction.' He represents the toxic, enduring belief that to be a 100% artist, you must be 0% human." },
        { question: "Why is the 17-minute ballet in The Red Shoes so famous?", answer: "The sequence was completely revolutionary because the cinematography changes to reflect Victoria's internal, psychological state rather than just filming a stage play objectively. The sets become surreal and nightmarish, showing the audience that she is no longer 'acting'—she is living the tragedy. This subjective reality is a technique Aronofsky used heavily in Black Swan." },
        { question: "Does Victoria choose to die at the end of The Red Shoes?", answer: "The film leaves her tragic death beautifully ambiguous. On a literal level, she jumps in front of a train to escape the impossible, tearing choice between her husband and her art. On a metaphorical level, the 'Red Shoes' (her all-consuming obsession) drove her over the edge. It suggests that once an artist achieves absolute 'perfection,' there is nowhere left to go but down." }
    ],
    'The Wrestler': [
        { question: "Why are The Wrestler and Black Swan considered sister films?", answer: "Director Darren Aronofsky originally conceived them as one massive story about a wrestler and a ballerina who fall in love, but realized the themes were too big and split them into two movies. They are thematic twins: The Wrestler explores 'Low Art' (physical, masculine) and Black Swan explores 'High Art' (spiritual, feminine), but both are ultimately about destroying the body for the audience's applause." },
        { question: "Does Randy the Ram die at the end of The Wrestler?", answer: "While the film cuts to black before he hits the mat, his death is heavily implied. Randy is medically warned that his failing heart cannot survive another match. By performing his signature 'Ram Jam' jump from the top rope, he consciously chooses a glorious death in the spotlight over a lonely, anonymous life in the real world." },
        { question: "What is the meaning of the staple gun scene in The Wrestler?", answer: "The hardcore wrestling scene highlights the deeply 'grotesque' side of performance art. It shows the audience that the 'magic' they see in the ring is built on very real pain and physical mutilation. This perfectly mirrors the scenes in Black Swan where Nina peels back her skin or bleeds from her toes." },
        { question: "Why can't Randy connect with his daughter in The Wrestler?", answer: "Randy is hopelessly addicted to the exaggerated, heroic version of himself that exists inside the wrestling ring. In the real world, he feels like a failure and a 'nobody.' Because he cannot handle the emotional vulnerability required for a real relationship with his daughter, he retreats back into the fantasy world where he is worshipped, even though it is killing him." }
    ],
    'Mulholland Drive': [
        { question: "How does Mulholland Drive explore the 'Fractured Artist' theme?", answer: "Like Black Swan, it deals heavily with the terrifying concept of the 'Doppelgänger' (the double). The first half of the film is a dream-fantasy where a failing, depressed actress (Diane) imagines herself as a talented, hopeful rising star (Betty). The film documents the exact moment the nightmare of reality shatters the illusion of the dream, leading to total mental collapse." },
        { question: "What does the Club Silencio scene mean in Mulholland Drive?", answer: "The Club Silencio scene is the film's terrifying turning point. The announcer proves that the beautiful music the audience hears is just a recording, and the performers are only lip-syncing. It is a harsh warning to the protagonist that her reality is a complete fabrication, representing the death of her illusion that she could ever be a Hollywood star." },
        { question: "What is the monster behind Winkie's diner in Mulholland Drive?", answer: "The terrifying figure is a manifestation of the raw, ugly truth that Diane is hiding from herself. It represents her overwhelming guilt and the 'darkness' required to succeed in Hollywood. It mirrors the 'demonic' version of Nina that begins to appear in mirrors in Black Swan—the suppressed, violent part of the psyche the artist is terrified to look at." },
        { question: "What does the blue box symbolize in Mulholland Drive?", answer: "The blue box acts as the gateway between the comforting dream and horrific reality. Once the key is turned and the box is opened, the innocent 'Betty' persona is sucked into the darkness and the real, traumatized 'Diane' wakes up. It symbolizes the point of no return in a psychological breakdown." }
    ],
    'The Piano Teacher': [
        { question: "How does Erika in The Piano Teacher compare to Nina in Black Swan?", answer: "Erika is a terrifying look at what happens if Nina Sayers survives her breakdown but never heals. She is an absolute master of her craft (the piano) but is completely emotionally dead and sexually repressed. While Nina's obsession is directed toward a stage performance, Erika's obsession is directed entirely toward cold control and masochism." },
        { question: "Why is the mother so controlling in The Piano Teacher?", answer: "The mother represents the ultimate 'Devouring Maternal' figure. She has raised Erika to be nothing more than a highly tuned tool for musical achievement, fiercely denying her a private life, a romantic partner, or a stable identity. This overbearing 'stage mother' dynamic is the direct source of Erika's self-harming tendencies." },
        { question: "Why does Erika put broken glass in her student's coat?", answer: "Erika deliberately puts broken glass in a highly talented student's pocket to permanently ruin her hands. It is an act of pure, malicious professional jealousy. It shows that her obsession with 'perfection' has curdled into a violent hatred for anyone else who might achieve it, heavily mirroring the paranoid rivalry in Black Swan." },
        { question: "What does the ending of The Piano Teacher mean?", answer: "After being violently rejected and humiliated by Walter, Erika stabs herself in the shoulder in the lobby of the concert hall and simply walks away. It is not a grand, operatic, beautiful suicide like the end of Black Swan; it is a quiet, pathetic act of self-mutilation. It signifies that she will continue to live in her own mundane, personal hell." }
    ],
    'Birdman': [
        { question: "Is the Birdman voice real or a hallucination?", answer: "It is a psychological hallucination. The voice represents Riggan’s inflated ego and the ghost of his past commercial success. It constantly taunts him for trying to be a 'serious artist' on Broadway, tempting him to return to shallow blockbuster fame. Like the 'Dark Nina' in Black Swan, it is an internal shadow that grows stronger under extreme pressure." },
        { question: "Why was Birdman filmed to look like a single continuous shot?", answer: "The breathtaking continuous take mimics the unceasing, claustrophobic pressure of starring in a live Broadway play, where there are no 'cuts' or second chances. It masterfully forces the audience to feel Riggan’s rising panic as he navigates the narrow, maze-like hallways of the theater, trapping the viewer inside his mental breakdown." },
        { question: "Does Riggan shoot himself at the end of Birdman?", answer: "Yes, Riggan replaces a fake prop gun with a real, loaded weapon and shoots off his own nose live on stage. He realizes that the only way to achieve 'absolute' truth in his art is to bleed for real. Ironically, this horrific act of self-destruction brings him the critical acclaim he spent his entire life chasing." },
        { question: "What does the final shot of Birdman mean?", answer: "When his daughter Sam looks out the hospital window, looks up at the sky, and smiles, the film ends on a note of magical realism. Whether he literally gained superpowers, or if the smile is just a metaphor for him finally finding peace in death, it indicates that Riggan has transcended his toxic ego and is finally free." }
    ],
    'Requiem for a Dream': [
        { question: "How is Requiem for a Dream visually similar to Black Swan?", answer: "Director Darren Aronofsky uses intense 'Snorricam' techniques (cameras strapped directly to the actor's body) and extreme, rapid-fire close-ups in both films to create an oppressive sense of subjectivity. The editing is designed to make the viewer physically feel the character's physiological state, creating an incredibly stressful, sensory cinema experience." },
        { question: "What does the red dress symbolize in Requiem for a Dream?", answer: "For the lonely widow Sara Goldfarb, the red dress represents her lost youth, her deceased husband, and her fading dignity. Her dangerous obsession with losing weight to fit into it for a television appearance is her exact version of Nina's desperation to play the 'Swan Queen.' Both women destroy their bodies for a fleeting moment of validation." },
        { question: "Why is Requiem for a Dream split into seasons?", answer: "The film structurally moves from Summer (representing hope and the 'high') to Fall (the decline) to Winter (the absolute end and severe withdrawal). While Black Swan portrays a spiral toward a specific performance, Requiem shows a ruthless, inevitable descent into a cold, dark void, proving that every artificial 'high' must have a catastrophic 'low'." },
        { question: "Is the moving refrigerator a real hallucination in Requiem for a Dream?", answer: "Yes, the terrifying, shaking refrigerator is a manifestation of Sara's severe, diet-pill-induced amphetamine psychosis. The appliance attacking her represents her deep fear of her own home, her loneliness, and her failing body. This 'Identity Horror'—where everyday objects become threatening—is a signature Aronofsky trope." }
    ],
    'Nightcrawler': [
        { question: "Is Lou Bloom a sociopath in Nightcrawler?", answer: "Absolutely. Lou views himself as a driven artist and a brilliant businessman, where his 'canvas' is a bloody crime scene and his 'brush' is the video camera. However, his complete, chilling lack of human empathy makes him a predator. He represents the dark side of ambition taken to a sociopathic extreme." },
        { question: "What does the broken mirror scene symbolize in Nightcrawler?", answer: "This powerful scene is Lou's only moment of genuine, uncontrolled emotion in the entire film. When he violently shatters the mirror, we see the terrifying 'cracks' in his polite, corporate mask. Like Nina's mirror hallucinations, it shows a man whose internal self is so fractured and dangerous that it can barely be contained." },
        { question: "Why does Lou let Rick die at the end of Nightcrawler?", answer: "Rick simply became a business 'cost' that Lou was no longer willing to pay. Lou actively orchestrated the shootout not just to get incredible, exclusive footage, but to permanently eliminate a partner who was demanding more money and leverage. It is his ultimate act of 'artistic purity'—removing anything that interferes with the final product." },
        { question: "What is the deeper message of the movie Nightcrawler?", answer: "The film is a brilliant, biting indictment of the audience. Lou Bloom's booming success only exists because the public desperately wants to see the most graphic, bloody footage on the morning news. If Black Swan is about the artist's sacrifice *for* art, Nightcrawler is about the artist sacrificing *others* to feed the audience’s hunger for spectacle." }
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

// 🔥 6. THE KEYWORD BRIDGE (Upgraded for maximum SEO power)
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

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR (Universal Version)
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
        'url': `https://filmiway.com/movie/${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = BLACK_SWAN_MOVIE_FAQS[movie.Title] ? [...BLACK_SWAN_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = BLACK_SWAN_MOVIE_FAQS[movieTitle] ? [...BLACK_SWAN_MOVIE_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

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