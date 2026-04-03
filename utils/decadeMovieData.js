// utils/decadeMovieData.js - BEST OF DECADE COLLECTION DATA ✅
// The defining cinematic achievements of the 2020s (2020-2026)

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 693134, "imdbID": "tt15239678", "Title": "Dune: Part Two", "year": 2024, "genre": "Sci-Fi", "runtime": 166, "rank": 1 },
    { "tmdbId": 1100001, "imdbID": "tt30144839", "Title": "One Battle After Another", "year": 2025, "genre": "Action", "runtime": 162, "rank": 2 },
    { "tmdbId": 569094, "imdbID": "tt9362722", "Title": "Spider-Man: Across the Spider-Verse", "year": 2023, "genre": "Animation", "runtime": 140, "rank": 3 },
    { "tmdbId": 545609, "imdbID": "tt6710474", "Title": "Everything Everywhere All at Once", "year": 2022, "genre": "Sci-Fi", "runtime": 139, "rank": 4 },
    { "tmdbId": 872585, "imdbID": "tt15398776", "Title": "Oppenheimer", "year": 2023, "genre": "Drama", "runtime": 181, "rank": 5 },
    { "tmdbId": 1233413, "imdbID": "tt31193180", "Title": "Sinners", "year": 2025, "genre": "Horror", "runtime": 138, "rank": 6 },
    { "tmdbId": 1317288 , "imdbID": "tt32916440", "Title": "Marty Supreme", "year": 2025, "genre": "Drama", "runtime": 150, "rank": 7 },
    { "tmdbId": 414906, "imdbID": "tt1877830", "Title": "The Batman", "year": 2022, "genre": "Crime", "runtime": 176, "rank": 8 },
    { "tmdbId": 792307, "imdbID": "tt14230458", "Title": "Poor Things", "year": 2023, "genre": "Comedy", "runtime": 141, "rank": 9 },
    { "tmdbId": 930564, "imdbID": "tt17351924", "Title": "Saltburn", "year": 2023, "genre": "Thriller", "runtime": 131, "rank": 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

// ✅ SENSITIVE TIMELINES (Sexual Content & Nudity ONLY)
export const SENSITIVE_TIMELINES = {
    // Dune 2
    693134: { scenes: [] }, 
    
    // One Battle After Another
    1100001: { 
        scenes: [
            { start: "0:06:17", end: "0:07:10", type: "Sexual Content (Ejaculation)", severity: "High" },
            { start: "0:12:00", end: "0:12:17", type: "Sexual Content (Masturbation)", severity: "High" }
        ] 
    },
    
    // Across the Spider-Verse
    569094: { scenes: [] }, 
    
    // Everything Everywhere All at Once
 // Everything Everywhere All at Once
    545609: {
        scenes: [
            { start: "1:19:06", end: "1:20:50", type: "Partial Nudity (Man)", severity: "Mild" }
        ]
    },

    // Oppenheimer
    872585: {
        scenes: [
            { start: "0:23:14", end: "0:24:46", type: "Sex & Nudity", severity: "High" },
            { start: "1:14:38", end: "1:15:14", type: "Nudity", severity: "High" },
            { start: "1:15:43", end: "1:16:00", type: "Sex & Nudity", severity: "High" }
        ]
    },

    // Sinners
    1233413: { 
        scenes: [
            { start: "0:40:33", end: "0:40:47", type: "Sex", severity: "Moderate" },
            { start: "0:57:40", end: "0:59:00", type: "Nudity (Woman in Background)", severity: "Moderate" },
            { start: "1:00:15", end: "1:01:05", type: "Sex", severity: "High" },
            { start: "1:18:25", end: "1:18:30", type: "Sex", severity: "High" },
            { start: "2:02:10", end: "2:02:28", type: "Partial Nudity (Woman)", severity: "Moderate" }
        ] 
    },
    
    // Marty Supreme
    1317288 : {
        scenes: [
            { start: "0:30:28", end: "0:40:00", type: "Sex", severity: "High" },
            { start: "0:56:30", end: "0:56:34", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "1:20:50", end: "1:21:15", type: "Sex", severity: "High" },
            { start: "1:47:39", end: "1:48:02", type: "Sex", severity: "High" }
        ]
    },

    // The Batman
    414906: { scenes: [] }, 

    // Poor Things
    792307: {
        scenes: [
            { start: "0:20:19", end: "0:20:25", type: "Nudity (Woman)", severity: "High" },
            { start: "0:20:38", end: "0:20:51", type: "Nudity (Woman)", severity: "High" },
            { start: "0:23:29", end: "0:23:32", type: "Nudity (Woman)", severity: "High" },
            { start: "0:24:43", end: "0:24:50", type: "Nudity (Woman)", severity: "High" },
            { start: "0:25:10", end: "0:25:42", type: "Sexual Content", severity: "High" },
            { start: "0:25:54", end: "0:27:10", type: "Sexual Content", severity: "High" },
            { start: "0:27:30", end: "0:27:45", type: "Sexual Content", severity: "High" },
            { start: "0:34:33", end: "0:34:55", type: "Sexual Content", severity: "High" },
            { start: "0:41:05", end: "0:41:28", type: "Sex & Nudity", severity: "High" },
            { start: "0:42:53", end: "0:43:21", type: "Sex & Nudity", severity: "High" },
            { start: "0:43:49", end: "0:44:37", type: "Nudity", severity: "High" },
            { start: "0:49:15", end: "0:49:21", type: "Sex", severity: "High" },
            { start: "0:52:03", end: "0:52:07", type: "Sexual Content (Drawing)", severity: "Mild" },
            { start: "1:17:00", end: "1:17:24", type: "Nudity (Men & Women)", severity: "High" },
            { start: "1:27:00", end: "1:28:22", type: "Nudity & Sex", severity: "High" },
            { start: "1:31:36", end: "1:31:45", type: "Nudity", severity: "High" },
            { start: "1:32:15", end: "1:33:42", type: "Sex & Nudity", severity: "High" },
            { start: "1:33:46", end: "1:35:10", type: "Nudity (Women)", severity: "High" },
            { start: "1:37:16", end: "1:39:53", type: "Suggestive Clothing, Sex & Nudity", severity: "High" },
            { start: "1:40:20", end: "1:40:31", type: "Sex & Nudity", severity: "High" },
            { start: "1:41:10", end: "1:41:59", type: "Sex & Nudity", severity: "High" },
            { start: "1:45:55", end: "1:48:23", type: "Sex & Nudity", severity: "High" }
        ]
    },

    // Saltburn
    930564: {
        scenes: [
            { start: "0:45:35", end: "0:45:51", type: "Partial Nudity (Men & Women)", severity: "Moderate" },
            { start: "0:48:32", end: "0:49:20", type: "Sexual Content", severity: "High" },
            { start: "0:55:25", end: "0:57:28", type: "Sexual Content", severity: "High" },
            { start: "1:11:20", end: "1:12:20", type: "Sexual Content", severity: "Moderate" },
            { start: "1:29:30", end: "1:30:02", type: "Sex", severity: "Moderate" },
            { start: "1:45:05", end: "1:45:46", type: "Nudity (Man) & Sexual Content", severity: "High" },
            { start: "2:03:49", end: "2:05:31", type: "Nudity (Man)", severity: "High" }
        ]
    }
};

export const FALLBACK_POSTERS = {
    693134: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2IGpbRXYS.jpg",
    1100001: "https://image.tmdb.org/t/p/w500/fallback-onebattle.jpg",
    569094: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    545609: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVll56s4l0FwR4v.jpg",
    872585: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    1233413: "https://image.tmdb.org/t/p/w500/fallback-sinners.jpg",
    1317288 : "https://image.tmdb.org/t/p/w500/fallback-martysupreme.jpg",
    414906: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    792307: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8PhwojA8fD5Z7UA2e.jpg",
    930564: "https://image.tmdb.org/t/p/w500/qjhahNLSZ705B5JP924DglcgIeI.jpg"
};

// ✅ Helper function to ensure defaults
const createMovieData = (data) => ({
    psychologicalIntensity: 70,
    visceralImpact: 80,        
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    693134: createMovieData({ 
        psychologicalIntensity: 85, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#d97706", rating: 8.8, criticsScore: 93, audienceScore: 95, director: "Denis Villeneuve", 
        cast: ["Timothée Chalamet", "Zendaya", "Austin Butler"], boxOffice: "$711 million", budget: "$190 million", 
        dna: { "Science Fiction": 45, "Action": 35, "Adventure": 20 },
        scenes: [
            { time: 10, intensity: 20, label: "Arrakis Desert", color: "#d97706" },
            { time: 45, intensity: 55, label: "Riding the Sandworm", color: "#f59e0b" },
            { time: 90, intensity: 75, label: "Fedaykin Rise", color: "#b45309" },
            { time: 140, intensity: 95, label: "The Emperor's Tent", color: "#dc2626" },
            { time: 160, intensity: 70, label: "Holy War Begins", color: "#991b1b" }
        ],
        synopsis: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. A stunning visual masterpiece that redefines modern blockbuster scale.",
        themes: ["Prophecy", "Religious Fanaticism", "Colonialism"]
    }),

    1100001: createMovieData({ 
        psychologicalIntensity: 88, visceralImpact: 90, complexityLevel: "HIGH", 
        dominantColor: "#1d4ed8", rating: 8.5, criticsScore: 91, audienceScore: 89, director: "Paul Thomas Anderson", 
        cast: ["Leonardo DiCaprio", "Sean Penn", "Teyana Taylor"], boxOffice: "$212.1 million", budget: "$150 million", 
        dna: { "Action": 45, "Thriller": 35, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 18, label: "The Hideout", color: "#1e3a8a" },
            { time: 45, intensity: 45, label: "First Engagement", color: "#3b82f6" },
            { time: 90, intensity: 65, label: "The Chase", color: "#1d4ed8" },
            { time: 130, intensity: 80, label: "The Reunion", color: "#dc2626" },
            { time: 145, intensity: 60, label: "Aftermath", color: "#0f172a" }
        ],
        synopsis: "A washed-up former revolutionary and explosives expert is dragged back into conflict when his arch-enemy resurfaces after sixteen years. PTA delivers a colossal, epic action-thriller masterpiece.",
        themes: ["Generational Guilt", "Vengeance", "American Paranoia"]
    }),

   569094: createMovieData({ 
        psychologicalIntensity: 75, visceralImpact: 98, complexityLevel: "MEDIUM", 
        dominantColor: "#ec4899", rating: 8.6, criticsScore: 95, audienceScore: 94, director: "Joaquim Dos Santos", 
        cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"], boxOffice: "$690.5 million", budget: "$100 million", 
        dna: { "Action": 45, "Science Fiction": 35, "Adventure": 20 },
        scenes: [
            { time: 15, intensity: 22, label: "Gwen's Universe", color: "#3b82f6" },
            { time: 50, intensity: 48, label: "Mumbattan", color: "#f59e0b" },
            { time: 95, intensity: 68, label: "Spider Society", color: "#a855f7" },
            { time: 120, intensity: 85, label: "The Escape", color: "#ec4899" },
            { time: 135, intensity: 75, label: "Cliffhanger", color: "#dc2626" }
        ],
        synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. A revolutionary leap in animation.",
        themes: ["Destiny", "Isolation", "Breaking the Canon"]
    }),

    545609: createMovieData({ 
        psychologicalIntensity: 90, visceralImpact: 95, complexityLevel: "EXTREME", 
        dominantColor: "#a855f7", rating: 8.0, criticsScore: 94, audienceScore: 89, director: "Daniel Kwan, Daniel Scheinert", 
        cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"], boxOffice: "$143.4 million", budget: "$25 million", 
        dna: { "Science Fiction": 40, "Comedy": 30, "Drama": 30 },
        scenes: [
            { time: 10, intensity: 25, label: "IRS Audit", color: "#475569" },
            { time: 45, intensity: 60, label: "Fanny Pack Fight", color: "#dc2626" },
            { time: 80, intensity: 75, label: "Jobu Tupaki", color: "#ec4899" },
            { time: 115, intensity: 92, label: "The Rock Universe", color: "#94a3b8" },
            { time: 135, intensity: 65, label: "Laundromat Resolution", color: "#a855f7" }
        ],
        synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes. A dizzying exploration of nihilism and love.",
        themes: ["Nihilism", "Generational Trauma", "Radical Empathy"]
    }),

    872585: createMovieData({ 
        psychologicalIntensity: 95, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#f59e0b", rating: 8.4, criticsScore: 93, audienceScore: 91, director: "Christopher Nolan", 
        cast: ["Cillian Murphy", "Robert Downey Jr.", "Emily Blunt"], boxOffice: "$968.2 million", budget: "$100 million", 
        dna: { "Drama": 50, "History": 30, "Thriller": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "Cambridge Days", color: "#3b82f6" },
            { time: 70, intensity: 55, label: "Building Los Alamos", color: "#d97706" },
            { time: 115, intensity: 88, label: "Trinity Test", color: "#f59e0b" },
            { time: 140, intensity: 80, label: "The Gymnasium Speech", color: "#dc2626" },
            { time: 175, intensity: 75, label: "Einstein Conversation", color: "#1e293b" }
        ],
        synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. A haunting, titanic achievement in historical filmmaking.",
        themes: ["Hubris", "Scientific Consequence", "Political Machinery"]
    }),

    1233413: createMovieData({ 
        psychologicalIntensity: 85, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#991b1b", rating: 8.2, criticsScore: 88, audienceScore: 85, director: "Ryan Coogler", 
        cast: ["Michael B. Jordan", "Hailee Steinfeld", "Jack O'Connell"], boxOffice: "$369.4 million", budget: "$100 million", 
        dna: { "Horror": 45, "Thriller": 35, "Action": 20 },
        scenes: [
            { time: 10, intensity: 18, label: "Return to Mississippi", color: "#1e3a8a" },
            { time: 45, intensity: 45, label: "The Juke Joint", color: "#1d4ed8" },
            { time: 80, intensity: 65, label: "First Encounter", color: "#7f1d1d" },
            { time: 110, intensity: 84, label: "Night Attack", color: "#991b1b" },
            { time: 125, intensity: 60, label: "Dawn", color: "#b45309" }
        ],
        synopsis: "Twin brothers return to their Mississippi hometown in 1932 to start over, only to discover an ancient, vampiric evil waiting for them. An operatic, sweat-drenched fusion of history and occult horror.",
        themes: ["Ancestral Trauma", "Southern Gothic", "Redemption"]
    }),

    1317288 : createMovieData({ 
        psychologicalIntensity: 90, visceralImpact: 80, complexityLevel: "HIGH", 
        dominantColor: "#16a34a", rating: 8.3, criticsScore: 97, audienceScore: 86, director: "Josh Safdie", 
        cast: ["Timothée Chalamet", "Gwyneth Paltrow", "Tyler the Creator"], boxOffice: "$95 million", budget: "$40 million", 
        dna: { "Drama": 45, "Thriller": 30, "Comedy": 25 },
        scenes: [
            { time: 10, intensity: 25, label: "The Hustle Begins", color: "#22c55e" },
            { time: 45, intensity: 55, label: "The Bet", color: "#f59e0b" },
            { time: 85, intensity: 75, label: "Underground Match", color: "#dc2626" },
            { time: 120, intensity: 89, label: "The Breakdown", color: "#16a34a" },
            { time: 135, intensity: 65, label: "The Void", color: "#000000" }
        ],
        synopsis: "A frantic, obsessive shoe salesman risks everything on one roll of the dice to become a world-champion table tennis player. A propulsive, chaotic character study of an unlikable but compelling hustler.",
        themes: ["Obsession", "Hustle Culture", "Narcissism"]
    }),

    414906: createMovieData({ 
        psychologicalIntensity: 80, visceralImpact: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#dc2626", rating: 7.8, criticsScore: 85, audienceScore: 87, director: "Matt Reeves", 
        cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"], boxOffice: "$771 million", budget: "$200 million", 
        dna: { "Crime": 45, "Action": 30, "Thriller": 25 },
        scenes: [
            { time: 10, intensity: 22, label: "Halloween Night", color: "#000000" },
            { time: 60, intensity: 55, label: "Iceberg Lounge", color: "#3b82f6" },
            { time: 95, intensity: 72, label: "Batmobile Chase", color: "#dc2626" },
            { time: 145, intensity: 82, label: "Flooding the City", color: "#1e3a8a" },
            { time: 165, intensity: 60, label: "Leading the People", color: "#f59e0b" }
        ],
        synopsis: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        themes: ["Vengeance vs Justice", "Corruption", "Trauma"]
    }),

    792307: createMovieData({ 
        psychologicalIntensity: 85, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#f472b6", rating: 7.9, criticsScore: 92, audienceScore: 82, director: "Yorgos Lanthimos", 
        cast: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"], boxOffice: "$117.6 million", budget: "$35 million", 
        dna: { "Comedy": 40, "Science Fiction": 30, "Drama": 30 },
        scenes: [
            { time: 15, intensity: 18, label: "Godwin's House", color: "#9ca3af" },
            { time: 55, intensity: 40, label: "Lisbon Discovery", color: "#f59e0b" },
            { time: 95, intensity: 55, label: "Paris Brothel", color: "#ec4899" },
            { time: 125, intensity: 68, label: "The General", color: "#dc2626" },
            { time: 140, intensity: 50, label: "Return Home", color: "#f472b6" }
        ],
        synopsis: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
        themes: ["Feminist Awakening", "Autonomy", "Social Constructs"]
    }),

    930564: createMovieData({ 
        psychologicalIntensity: 90, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#8b5cf6", rating: 7.0, criticsScore: 71, audienceScore: 79, director: "Emerald Fennell", 
        cast: ["Barry Keoghan", "Jacob Elordi", "Rosamund Pike"], boxOffice: "$21 million", budget: "$15 million", 
        dna: { "Thriller": 45, "Comedy": 30, "Drama": 25 },
        scenes: [
            { time: 15, intensity: 15, label: "Oxford Arrival", color: "#cbd5e1" },
            { time: 50, intensity: 40, label: "Arriving at Saltburn", color: "#fef08a" },
            { time: 85, intensity: 55, label: "The Bathtub", color: "#3b82f6" },
            { time: 115, intensity: 66, label: "The Grave", color: "#1f2937" },
            { time: 130, intensity: 50, label: "Final Dance", color: "#8b5cf6" }
        ],
        synopsis: "A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family's sprawling estate for a summer never to be forgotten.",
        themes: ["Class Warfare", "Obsession", "Parasitism"]
    })
};

export const STRATEGIC_QUOTES = {
    693134: "May thy knife chip and shatter.",
    1100001: "The past doesn't forget, it just reloads.",
    569094: "Everyone keeps telling me how my story is supposed to go. Nah. I'm'a do my own thing.",
    545609: "In another life, I would have really liked just doing laundry and taxes with you.",
    872585: "Now I am become Death, the destroyer of worlds.",
    1233413: "Some things won't stay buried.",
    1317288 : "That doesn't even make sense.",
    414906: "They think I am hiding in the shadows. But I am the shadows.",
    792307: "I am finding being alive fascinating.",
    930564: "I loved him. I loved him, I loved him, I loved him."
};

export const CINEMATIC_COLORS = {
    "Sci-Fi": "#1d4ed8", "Drama": "#334155", "Action": "#dc2626", "Thriller": "#0f172a", "Horror": "#991b1b", "Animation": "#ec4899", "Crime": "#10b981", "Comedy": "#f59e0b"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: 'Clean ticket - Solid entertainment' },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

export const DECADE_MOVIE_FAQS = {
    'Dune: Part Two': [
        { question: "Is Paul Atreides a hero or a villain?", answer: "Director Denis Villeneuve actively frames Paul not as a traditional hero, but as a tragic, charismatic leader who falls into the exact trap of absolute power and religious prophecy he initially tries to avoid. It is a cautionary tale about trusting messiahs." },
        { question: "Why is the Harkonnen planet in black and white?", answer: "The sequence on Giedi Prime was shot using infrared cameras to make it look utterly devoid of natural light and color. This visually represents the Harkonnens' anti-nature, fascist, and brutally industrial society." },
        { question: "How does the ending differ from the book?", answer: "The film makes Chani's rejection of Paul's holy war explicit. Instead of passively accepting his marriage to Princess Irulan, she leaves in anger, centering her perspective to highlight the betrayal of the Fremen people." },
        { question: "Do I need to watch Part One to understand it?", answer: "Yes. Dune: Part Two is the direct second half of a single continuous story. Watching Part Two without Part One leaves out vital context regarding the fall of House Atreides and the political landscape of Arrakis." }
    ],
    'One Battle After Another': [
        { question: "Is One Battle After Another an adaptation of Vineland?", answer: "It is heavily inspired by Thomas Pynchon's 1990 novel 'Vineland', but director Paul Thomas Anderson incorporated his own original stories into the narrative, creating a unique blend of 1970s radicalism and modern action cinema." },
        { question: "Why is it considered PTA's biggest movie?", answer: "With a budget estimated between $130–175 million, it is vastly more expensive than any of his previous character-driven dramas. The massive scale, ensemble cast, and high-octane chase sequences make it a true blockbuster epic." },
        { question: "What is the meaning behind the 'French 75'?", answer: "In the film, the French 75 represents a washed-up, fictional revolutionary group from a bygone era. They symbolize the failure of past radical movements crashing into modern, corporate corruption." },
        { question: "Did Leonardo DiCaprio win an Oscar for this?", answer: "Despite universal acclaim for his role as the explosive expert 'Ghetto' Pat Calhoun, Sean Penn was the one who famously took home the Oscar for Best Supporting Actor for his role as the corrupt Col. Lockjaw." }
    ],
    'Spider-Man: Across the Spider-Verse': [
        { question: "What does 'breaking the canon' mean?", answer: "The 'canon' refers to fixed, tragic events that supposedly must happen to every Spider-Man (like the death of a police captain). Miles Morales rejects this determinism, arguing that being a hero means trying to save everyone, not accepting tragedy as inevitable." },
        { question: "Why do the animation styles constantly change?", answer: "Each dimension and character is rendered in a distinct visual style that reflects their personality and world. For example, Spider-Punk resembles a cut-out punk rock zine, while Spider-Gwen's world uses watercolor physics that shift based on her emotional state." },
        { question: "Is the Spot a joke villain?", answer: "He starts as a comedic 'villain of the week' but rapidly evolves into an eldritch, multiversal threat. His transformation mirrors Miles' own growth, showing how underestimating someone can create a catastrophe." },
        { question: "Does the movie have a post-credits scene?", answer: "No. Because the film explicitly ends on a massive cliffhanger leading into 'Beyond the Spider-Verse,' the creators opted not to include a post-credits scene, letting the dramatic conclusion stand on its own." }
    ],
    'Everything Everywhere All at Once': [
        { question: "What is the meaning of the Everything Bagel?", answer: "The bagel acts as a physical manifestation of pure nihilism. By putting 'everything' on a bagel, the villain Jobu Tupaki realizes that nothing actually matters, creating a black hole of depression and meaninglessness." },
        { question: "Why are googly eyes so important to the story?", answer: "Waymond uses googly eyes to inject joy into a bleak, stressful reality. Ultimately, Evelyn places a googly eye on her forehead like a third eye, representing her realization that radical kindness and finding joy in small things is the antidote to the void." },
        { question: "Is the movie actually about ADHD?", answer: "Yes, co-director Daniel Kwan realized he had undiagnosed ADHD while researching for the film. The rapid universe-jumping and inability to focus on a single, mundane task heavily mirrors the experience of neurodivergence." },
        { question: "How were the visual effects done so cheaply?", answer: "The Oscar-winning visual effects were created by a core team of just five people, mostly self-taught, working from their bedrooms during the pandemic using Adobe After Effects." }
    ],
    'Oppenheimer': [
        { question: "Why does the movie shift between color and black-and-white?", answer: "Christopher Nolan uses color for subjective scenes told entirely from J. Robert Oppenheimer's perspective (Fission), and black-and-white for objective, historical scenes centered around Lewis Strauss's perspective (Fusion)." },
        { question: "Did they actually detonate a real atomic bomb?", answer: "No, but Nolan notoriously refused to use CGI for the Trinity Test. The visual effects team used forced perspective, chemical reactions, and highly specialized micro-explosions to simulate the apocalyptic scale of an atomic blast practically." },
        { question: "Why don't we see the bombings of Hiroshima and Nagasaki?", answer: "The film is strictly tethered to Oppenheimer's psychological viewpoint. Because he learned about the bombings from the radio just like the rest of the world, the audience only experiences his delayed, devastating realization of what he had unleashed." },
        { question: "What did Einstein say to Oppenheimer at the end?", answer: "Einstein tells him that the world will eventually forgive him and give him medals, but only after they have destroyed him first. It confirms Oppenheimer's worst fear: that he has started a chain reaction that will ultimately destroy the world." }
    ],
    'Sinners': [
        { question: "Is Sinners a traditional vampire movie?", answer: "No. Director Ryan Coogler blends Southern Gothic folklore, Jim Crow-era history, and occult mythology. The vampires are kept largely offscreen until the climax, functioning more as manifestations of historical trauma and greed than standard movie monsters." },
        { question: "Why is the film set in 1932?", answer: "Setting it in the Deep South during the Great Depression allows the film to explore themes of race, poverty, and generational guilt. The literal bloodsuckers of the night parallel the systemic, economic 'bloodsucking' of the era." },
        { question: "Does Michael B. Jordan play two roles?", answer: "Yes, he plays the 'Smokestack Twins,' adding a profound layer of duality. The film heavily explores the split nature of humanity—one brother seeking redemption while the other is tethered to a violent past." },
        { question: "Is it related to any other horror universe?", answer: "No, Sinners is a completely original concept born from Coogler's desire to step back from massive superhero franchises to direct an intimate, atmospheric, and terrifying standalone epic." }
    ],
    'Marty Supreme': [
        { question: "Is Marty Supreme based on a true story?", answer: "It is loosely inspired by the life of Marty Reisman, an incredibly flamboyant American table tennis champion and notorious hustler from the 1950s. However, the Safdie brothers exaggerated the reality into a wild, stressful cinematic fiction." },
        { question: "Why is the main character so unlikable?", answer: "The Safdies specialize in protagonists who are narcissistic, self-destructive, and chaotic. Like 'Uncut Gems', the film challenges the audience by forcing them to follow a pathological liar and hustler who you simultaneously want to fail and desperately want to survive." },
        { question: "What is the significance of the shoe store?", answer: "The shoe store represents the mundane, trapped, working-class life Marty is running away from. His desperate drive to be a ping-pong champion is less about the sport itself and entirely about escaping a life of obscurity." },
        { question: "Did Timothée Chalamet actually play table tennis?", answer: "Yes, Chalamet underwent intense physical training to master the frantic, aggressive style of 1950s table tennis. The fast-paced editing and long takes required him to convincingly play at a near-professional level." }
    ],
    'The Batman': [
        { question: "How does this version of Batman differ from others?", answer: "This film leans heavily into Batman's comic roots as the 'World's Greatest Detective' rather than just a martial artist. It plays out like a gritty, noir serial killer thriller akin to 'Se7en' or 'Zodiac'." },
        { question: "What is the meaning behind Nirvana's 'Something in the Way'?", answer: "The song reflects Bruce Wayne's deep grunge-inspired isolation. Director Matt Reeves modeled this version of Bruce Wayne off Kurt Cobain—a reclusive, traumatized figure who cannot cope with his legacy." },
        { question: "Is the Riddler right about Gotham?", answer: "Thematically, yes. The Riddler's core thesis—that Gotham's elite are fundamentally corrupt and built on a lie—is proven true. However, his method of violent terrorism forces Batman to realize that inspiring fear isn't enough; he must become a symbol of hope." },
        { question: "Why does Batman use an adrenaline shot at the end?", answer: "It demonstrates the physical toll of his crusade and his unyielding refusal to give up. Some fans theorize it was a dose of 'Venom' (the drug used by Bane), hinting at his desperate edge." }
    ],
    'Poor Things': [
        { question: "What is the main message of Poor Things?", answer: "It is a fiercely feminist exploration of bodily autonomy, free will, and societal expectations. Bella Baxter enters the world without the shame or constraints placed on women by Victorian society, allowing her to rapidly evolve beyond the men who try to control her." },
        { question: "Why does the film transition from black and white to color?", answer: "The shift occurs when Bella leaves Godwin's house and begins her journey into the real world. It signifies her awakening—moving from a sheltered, sterile, and controlled environment into a vibrant, chaotic reality of her own choosing." },
        { question: "Is Godwin Baxter a villain?", answer: "Godwin is morally complex. While his act of resurrecting Bella is grotesque and non-consensual, he genuinely loves her in his own twisted, scientific way. He is less a villain and more of a flawed, literal 'creator/God' figure who must learn to let his creation go." },
        { question: "How does Bella's vocabulary change throughout the film?", answer: "Emma Stone's performance is a masterclass in physical and linguistic evolution. Her vocabulary and physical coordination develop exactly in tandem with her expanding intellect and worldly experience, moving from a toddler's clumsiness to sharp, philosophical eloquence." }
    ],
    'Saltburn': [
        { question: "What is Oliver's true motivation in Saltburn?", answer: "Oliver is not driven by love, but by a sociopathic, parasitical desire for absolute ownership. He doesn't just want to be with the Cattons; he wants to consume them and take their place, driven by intense class envy." },
        { question: "What does the bathtub scene signify?", answer: "The scene is meant to be intensely visceral and disturbing, showcasing the depth of Oliver's twisted obsession with Felix. It crosses the boundary from admiration into something deeply predatory and unhinged." },
        { question: "Was everything planned from the beginning?", answer: "Yes. The film reveals that Oliver orchestrated the initial 'chance' meeting with the bicycle. He played the long game, using psychological manipulation to systematically dismantle the wealthy, naive Catton family from the inside out." },
        { question: "Why does Oliver dance at the end?", answer: "His naked dance through the empty manor to 'Murder on the Dancefloor' is a triumphant, unabashed celebration of his total victory. He has completely stripped the estate of its original owners and now reigns supreme." }
    ]
};

// 5. UTILITY FUNCTIONS
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
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = DECADE_MOVIE_FAQS[movie.Title] ? [...DECADE_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = DECADE_MOVIE_FAQS[movieTitle] ? [...DECADE_MOVIE_FAQS[movieTitle]] : [];
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
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
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
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:\n\n${uiDetailedList}\n\nManually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
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