// utils/thoughtProvokingMovieData.js - THOUGHT-PROVOKING COLLECTION DATA ✅
// Movies exploring the depths of human existence, societal collapse, grief, and the search for meaning.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 389, "imdbID": "tt0050083", "Title": "12 Angry Men", "year": 1957, "genre": "Drama", "runtime": 96, "rank": 1 },
    { "tmdbId": 496243, "imdbID": "tt6751668", "Title": "Parasite", "year": 2019, "genre": "Thriller", "runtime": 132, "rank": 2 },
    { "tmdbId": 46738, "imdbID": "tt1255953", "Title": "Incendies", "year": 2010, "genre": "Drama", "runtime": 131, "rank": 3 },
    { "tmdbId": 207, "imdbID": "tt0097165", "Title": "Dead Poets Society", "year": 1989, "genre": "Drama", "runtime": 128, "rank": 4 },
    { "tmdbId": 30020, "imdbID": "tt0120265", "Title": "Taste of Cherry", "year": 1997, "genre": "Drama", "runtime": 95, "rank": 5 },
    { "tmdbId": 600354, "imdbID": "tt10272386", "Title": "The Father", "year": 2020, "genre": "Drama", "runtime": 97, "rank": 6 },
    { "tmdbId": 9693, "imdbID": "tt0206634", "Title": "Children of Men", "year": 2006, "genre": "Sci-Fi", "runtime": 109, "rank": 7 },
    { "tmdbId": 37165, "imdbID": "tt0120382", "Title": "The Truman Show", "year": 1998, "genre": "Drama", "runtime": 103, "rank": 8 },
    { "tmdbId": 185, "imdbID": "tt0066921", "Title": "A Clockwork Orange", "year": 1971, "genre": "Sci-Fi", "runtime": 136, "rank": 9 },
    { "tmdbId": 641, "imdbID": "tt0180093", "Title": "Requiem for a Dream", "year": 2000, "genre": "Drama", "runtime": 102, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    389: "It takes a great deal of courage to stand alone even if you believe in something very strongly.",
    496243: "You know what kind of plan never fails? No plan.",
    46738: "One plus one, does it make one?",
    207: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    30020: "If you kill yourself, you're killing everything.",
    600354: "I feel as if I'm losing all my leaves. The branches and the wind and the rain.",
    9693: "As the sound of the playgrounds faded, the despair set in.",
    37165: "We accept the reality of the world with which we're presented. It's as simple as that.",
    185: "Is it better for a man to have chosen evil than to have good imposed upon him?",
    641: "I'm somebody now, Harry. Everybody likes me."
};

// ✅ SENSITIVE TIMELINES (Crucial for High-Volume Timestamps Search)
export const SENSITIVE_TIMELINES = {
    // 1. 12 Angry Men
    389: { scenes: [] }, 
    
    // 2. Parasite
    496243: { 
        scenes: [
            { start: "1:28:35", end: "1:31:15", type: "Sexual Content", severity: "High" }
        ] 
    },
    
    // 3. Incendies
    46738: { scenes: [] },

    // 4. Dead Poets Society
    207: { 
        scenes: [
            { start: "0:39:13", end: "0:39:40", type: "Nudity", severity: "High" }
        ] 
    },

    // 5. Taste of Cherry
    30020: { scenes: [] },

    // 6. The Father
    600354: { scenes: [] },

    // 7. Children of Men
    9693: { scenes: [] },

    // 8. The Truman Show
    37165: { scenes: [] },

    // 9. A Clockwork Orange
    185: { 
        scenes: [
            { start: "0:01:25", end: "0:02:17", type: "Nudity (Sculpture)", severity: "Moderate" },
            { start: "0:05:04", end: "0:06:07", type: "Sexual Content", severity: "High" },
            { start: "0:12:12", end: "0:13:23", type: "Nudity(Woman)", severity: "High" },
            { start: "0:13:39", end: "0:16:48", type: "Nudity(Sculpture)", severity: "Moderate" },
            { start: "0:17:47", end: "0:19:25", type: "Nudity (Painting)", severity: "Moderate" },
            { start: "0:21:46", end: "0:24:40", type: "Suggestive clothing (Man in underwear)", severity: "Mild" },
            { start: "0:28:25", end: "0:29:03", type: "Sex & Nudity", severity: "High" },
            { start: "0:36:31", end: "0:37:22", type: "Nudity (Painting)", severity: "Moderate" },
            { start: "0:39:05", end: "0:42:57", type: "Nudity (Painting)", severity: "Moderate" },
            { start: "0:52:39", end: "0:52:54", type: "Nudity (Man)", severity: "High" },
            { start: "0:57:00", end: "0:57:22", type: "Nudity (Woman)", severity: "High" },
            { start: "1:02:12", end: "1:02:45", type: "Nudity (Images)", severity: "Moderate" },
            { start: "1:13:12", end: "1:13:27", type: "Nudity & Sex", severity: "High" },
            { start: "1:24:15", end: "1:26:08", type: "Nudity (Woman)", severity: "High" },
            { start: "2:02:08", end: "2:02:18", type: "Nudity (Woman)", severity: "High" },
            { start: "2:13:38", end: "2:13:57", type: "Nudity (Woman)", severity: "High" }
        ] 
    },

    // 10. Requiem for a Dream
    641: { 
        scenes: [
            { start: "0:20:00", end: "0:20:30", type: "Nudity", severity: "Moderate" },
            { start: "0:33:00", end: "0:34:25", type: "Nudity", severity: "Moderate" },
            { start: "0:37:00", end: "0:37:25", type: "Nudity", severity: "Moderate" },
            { start: "1:30:30", end: "1:33:50", type: "Sex & Nudity", severity: "Extreme" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    389: "https://m.media-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX500.jpg",
    496243: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX500.jpg",
    46738: "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    207: "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    30020: "https://m.media-amazon.com/images/M/MV5BNjg0OTU5YTItYjc2ZC00OWZjLWEzNzgtNWQwZTdjMWM2NDJjXkEyXkFqcGdeQXVyMTkzOTg2OA@@._V1_SX500.jpg",
    600354: "https://m.media-amazon.com/images/M/MV5BZGI1M2ZhYTItOGZmZC00NjljLThhNGEtYWFiYmNhNTllYWI2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX500.jpg",
    9693: "https://m.media-amazon.com/images/M/MV5BMTQ5MjAwMDY5Nl5BMl5BanBnXkFtZTcwODc0ODEzMQ@@._V1_SX500.jpg",
    37165: "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMTVhNi00ZGE2LWEwZmItNmRiMWUyNGFmZmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    185: "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX500.jpg",
    641: "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWZiYTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX500.jpg"
};

// ✅ Custom metric for this collection
const createThoughtData = (data) => ({
    philosophicalDepth: 90, 
    emotionalResonance: 85,
    complexityLevel: "MASTERPIECE",
    dominantColor: "#1e3a8a", // Deep Indigo/Blue Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. 12 Angry Men
    389: createThoughtData({ 
        philosophicalDepth: 92, emotionalResonance: 88, complexityLevel: "PROFOUND", 
        dominantColor: "#451a03", rating: 9.0, criticsScore: 100, audienceScore: 97, director: "Sidney Lumet", 
        cast: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"], boxOffice: "N/A", budget: "$340,000", 
        dna: { "Drama": 80, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 30, label: "The First Vote" }, 
            { time: 40, intensity: 75, label: "The Knife" }, 
            { time: 65, intensity: 85, label: "The Old Man's Walk" }, 
            { time: 82, intensity: 98, label: "Juror 10's Racist Rant" }, 
            { time: 92, intensity: 100, label: "Juror 3 Breaks Down" } // PRIMARY PEAK
        ],
        synopsis: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence. Set almost entirely in a single, sweltering room, it is a timeless masterclass in logic, prejudice, and the fragility of the human ego.",
        themes: ["Prejudice", "Justice", "The Power of Doubt"]
    }),

    // 2. Parasite
    496243: createThoughtData({ 
        philosophicalDepth: 95, emotionalResonance: 90, complexityLevel: "MASTERPIECE", 
        dominantColor: "#064e3b", rating: 8.5, criticsScore: 99, audienceScore: 90, director: "Bong Joon-ho", 
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"], boxOffice: "$262.8 million", budget: "$11.4 million", 
        dna: { "Thriller": 50, "Drama": 30, "Comedy": 20 },
        scenes: [
            { time: 30, intensity: 60, label: "The Peach Fuzz" }, 
            { time: 65, intensity: 85, label: "The Doorbell Rings" }, 
            { time: 80, intensity: 100, label: "Hiding Under the Table" }, // PRIMARY PEAK
            { time: 100, intensity: 90, label: "The Flood" }, 
            { time: 115, intensity: 98, label: "The Garden Party" } 
        ],
        synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. A flawless thriller that exposes the razor-thin line separating societal comfort from savage desperation.",
        themes: ["Class Warfare", "Capitalism", "Symbiosis vs Parasitism"]
    }),

    // 3. Incendies
    46738: createThoughtData({ 
        philosophicalDepth: 98, emotionalResonance: 100, complexityLevel: "DEVASTATING", 
        dominantColor: "#7f1d1d", rating: 8.3, criticsScore: 92, audienceScore: 92, director: "Denis Villeneuve", 
        cast: ["Lubna Azabal", "Mélissa Désormeaux-Poulin"], boxOffice: "$16 million", budget: "$6.8 million", 
        dna: { "Drama": 60, "Mystery": 30, "War": 10 },
        scenes: [
            { time: 15, intensity: 40, label: "The Will" }, 
            { time: 48, intensity: 100, label: "The Bus Attack" }, // PRIMARY PEAK
            { time: 85, intensity: 80, label: "Prisoner 72" }, 
            { time: 115, intensity: 95, label: "The Math (1+1=1)" }, 
            { time: 125, intensity: 98, label: "The Twin Letters" } 
        ],
        synopsis: "Twins journey to the Middle East to discover their family's hidden history in the wake of their mother's death. Denis Villeneuve constructs a relentless, harrowing Greek tragedy about the cyclical nature of war and the unbearable weight of forgiveness.",
        themes: ["Generational Trauma", "The Horrors of War", "Forgiveness"]
    }),

    // 4. Dead Poets Society
    207: createThoughtData({ 
        philosophicalDepth: 91, emotionalResonance: 98, complexityLevel: "PROFOUND", 
        dominantColor: "#1c1917", rating: 8.1, criticsScore: 84, audienceScore: 89, director: "Peter Weir", 
        cast: ["Robin Williams", "Ethan Hawke", "Robert Sean Leonard"], boxOffice: "$235.9 million", budget: "$16.4 million", 
        dna: { "Drama": 100 },
        scenes: [
            { time: 20, intensity: 65, label: "Carpe Diem Speech" }, 
            { time: 55, intensity: 80, label: "The Courtyard Walk" }, 
            { time: 85, intensity: 90, label: "A Midsummer Night's Dream" }, 
            { time: 105, intensity: 100, label: "Neil's Tragic Decision" }, // PRIMARY PEAK
            { time: 122, intensity: 98, label: "O Captain! My Captain!" } 
        ],
        synopsis: "An unconventional English teacher at an elite, conservative boarding school inspires his students to challenge the strict traditions of their institution and seize the day through the power of poetry.",
        themes: ["Conformity vs. Individuality", "The Power of Art", "Coming of Age"]
    }),

    // 5. Taste of Cherry
    30020: createThoughtData({ 
        philosophicalDepth: 100, emotionalResonance: 85, complexityLevel: "EXISTENTIAL", 
        dominantColor: "#92400e", rating: 7.7, criticsScore: 83, audienceScore: 84, director: "Abbas Kiarostami", 
        cast: ["Homayoun Ershadi", "Abdolrahman Bagheri"], boxOffice: "$1.4 million", budget: "N/A", 
        dna: { "Drama": 80, "Philosophy": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "The Young Soldier" }, 
            { time: 45, intensity: 65, label: "The Seminarian" }, 
            { time: 70, intensity: 90, label: "The Taxidermist's Story" }, 
            { time: 85, intensity: 100, label: "Lying in the Grave" }, // PRIMARY PEAK
            { time: 92, intensity: 80, label: "The Video Epilogue" } 
        ],
        synopsis: "A middle-aged man drives through the outskirts of Tehran, desperately searching for someone willing to bury him after he commits suicide. A minimalist, poetic meditation on life, death, and the simple beauty that binds us to existence.",
        themes: ["Suicide", "The Meaning of Life", "Human Empathy"]
    }),

    // 6. The Father
    600354: createThoughtData({ 
        philosophicalDepth: 90, emotionalResonance: 100, complexityLevel: "DEVASTATING", 
        dominantColor: "#1e293b", rating: 8.2, criticsScore: 98, audienceScore: 92, director: "Florian Zeller", 
        cast: ["Anthony Hopkins", "Olivia Colman"], boxOffice: "$28.2 million", budget: "$6 million", 
        dna: { "Drama": 70, "Psychological": 30 },
        scenes: [
            { time: 20, intensity: 65, label: "Who is in my apartment?" }, 
            { time: 50, intensity: 85, label: "The Missing Watch" }, 
            { time: 70, intensity: 90, label: "Paul's Cruelty" }, 
            { time: 85, intensity: 95, label: "Waking up in the Hospital" }, 
            { time: 92, intensity: 100, label: "I Want My Mummy" } // PRIMARY PEAK
        ],
        synopsis: "A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind, and even the fabric of his reality. The most terrifying depiction of dementia ever filmed.",
        themes: ["Dementia", "Aging", "Subjective Reality"]
    }),

    // 7. Children of Men
    9693: createThoughtData({ 
        philosophicalDepth: 94, emotionalResonance: 92, complexityLevel: "PROFOUND", 
        dominantColor: "#3f3f46", rating: 7.9, criticsScore: 92, audienceScore: 85, director: "Alfonso Cuarón", 
        cast: ["Clive Owen", "Julianne Moore", "Michael Caine"], boxOffice: "$70.5 million", budget: "$76 million", 
        dna: { "Sci-Fi": 40, "Thriller": 40, "Drama": 20 },
        scenes: [
            { time: 5, intensity: 85, label: "Coffee Shop Bombing" }, 
            { time: 35, intensity: 95, label: "The Car Ambush" }, 
            { time: 70, intensity: 90, label: "The Farm Attack" }, 
            { time: 95, intensity: 100, label: "Ceasefire for the Baby" }, // PRIMARY PEAK
            { time: 105, intensity: 88, label: "The Boat" } 
        ],
        synopsis: "In 2027, in a chaotic world where women have somehow become infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea. A gritty, hyper-realistic vision of societal collapse and the desperate preservation of hope.",
        themes: ["Infertility", "Societal Collapse", "Hope in Despair"]
    }),

    // 8. The Truman Show
    37165: createThoughtData({ 
        philosophicalDepth: 96, emotionalResonance: 88, complexityLevel: "MASTERPIECE", 
        dominantColor: "#0ea5e9", rating: 8.2, criticsScore: 95, audienceScore: 89, director: "Peter Weir", 
        cast: ["Jim Carrey", "Ed Harris", "Laura Linney"], boxOffice: "$264.1 million", budget: "$60 million", 
        dna: { "Drama": 50, "Comedy": 30, "Sci-Fi": 20 },
        scenes: [
            { time: 25, intensity: 60, label: "The Falling Light" }, 
            { time: 55, intensity: 85, label: "Driving in Circles" }, 
            { time: 75, intensity: 90, label: "Christof's Control" }, 
            { time: 90, intensity: 98, label: "The Storm" }, 
            { time: 98, intensity: 100, label: "Hitting the Wall" } // PRIMARY PEAK
        ],
        synopsis: "An insurance salesman discovers his entire life is actually a reality TV show. Prescient and profound, the film explores the terrifying concept of simulated reality, voyeurism, and the innate human desire to break free from a manufactured existence.",
        themes: ["Simulated Reality", "Voyeurism", "Free Will"]
    }),

    // 9. A Clockwork Orange
    185: createThoughtData({ 
        philosophicalDepth: 95, emotionalResonance: 75, complexityLevel: "DISTURBING", 
        dominantColor: "#f97316", rating: 8.3, criticsScore: 87, audienceScore: 93, director: "Stanley Kubrick", 
        cast: ["Malcolm McDowell", "Patrick Magee"], boxOffice: "$26.6 million", budget: "$2.2 million", 
        dna: { "Sci-Fi": 40, "Crime": 40, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 100, label: "The Home Invasion" }, // PRIMARY PEAK
            { time: 30, intensity: 85, label: "The Cat Lady" }, 
            { time: 70, intensity: 98, label: "The Ludovico Technique" }, 
            { time: 105, intensity: 90, label: "The Demonstration" }, 
            { time: 125, intensity: 95, label: "Driven to Suicide" } 
        ],
        synopsis: "In a dystopian future, a sadistic gang leader is imprisoned and volunteers for an experimental aversion therapy to cure him of his violence. Kubrick's controversial masterpiece forces the viewer to ask if stripping a man of free will makes the government worse than the criminal.",
        themes: ["Free Will vs State Control", "Ultra-Violence", "Behavioral Conditioning"]
    }),

    // 10. Requiem for a Dream
    641: createThoughtData({ 
        philosophicalDepth: 90, emotionalResonance: 95, complexityLevel: "DEVASTATING", 
        dominantColor: "#991b1b", rating: 8.3, criticsScore: 78, audienceScore: 93, director: "Darren Aronofsky", 
        cast: ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly"], boxOffice: "$7.4 million", budget: "$4.5 million", 
        dna: { "Drama": 80, "Psychological": 20 },
        scenes: [
            { time: 30, intensity: 65, label: "The Diet Pills" }, 
            { time: 65, intensity: 85, label: "Sara's Hallucinations" }, 
            { time: 80, intensity: 95, label: "The Arm Infection" }, 
            { time: 92, intensity: 100, label: "The Double-Ended Scene" }, // PRIMARY PEAK
            { time: 98, intensity: 98, label: "The Fetal Position" } 
        ],
        synopsis: "The drug-induced utopias of four Coney Island residents shatter when their addictions spiral out of control. Filmed with relentless, rapid-fire editing, it is a horrific, unglamorous descent into the abyss of addiction that leaves the viewer completely emotionally exhausted.",
        themes: ["Addiction", "Delusion", "Destruction of the American Dream"]
    })
};

// 🎬 FAQS FOR THE THOUGHT-PROVOKING COLLECTION
export const THOUGHT_PROVOKING_FAQS = {
    '12 Angry Men': [
        { question: "Was the defendant actually innocent?", answer: "The brilliance of the film is that it never reveals if the boy is truly innocent or guilty. The narrative is strictly about 'reasonable doubt.' It proves that the prosecution failed to make an airtight case, thereby demanding a not-guilty verdict according to the law." },
        { question: "Why does the movie feel so claustrophobic?", answer: "Director Sidney Lumet slowly changed the camera lenses throughout the film, starting with wide-angle lenses and moving to extreme close-ups by the end. He also slowly lowered the camera angles so the ceiling became visible, literally making the room feel like it was closing in on the men." },
        { question: "What is Juror 8's (Henry Fonda) profession?", answer: "He is an architect. This perfectly mirrors his role in the jury room: he systematically deconstructs the prosecution's case and builds a foundation of logic and doubt for the other jurors to stand on." },
        { question: "Why is Juror 3 so angry?", answer: "Juror 3 is projecting his intense anger and estrangement regarding his own son onto the young defendant on trial. His ultimate breakdown at the end reveals that his vote for execution was driven entirely by personal, unresolved trauma rather than evidence." }
    ],
    'Parasite': [
        { question: "What does the scholar's rock symbolize?", answer: "The scholar's rock (Suseok) is a symbol of wealth, fake prestige, and the Kim family's desperate desire to climb the social ladder. Ultimately, it literally becomes the weapon used to crush Kevin's skull, proving that the pursuit of hollow wealth is a deadly illusion." },
        { question: "Who sent the Morse code at the end?", answer: "Ki-taek (the father) is sending the Morse code. After the massacre, he escapes into the hidden bunker beneath the house to avoid the police. He replaces the original basement dweller, proving that the lower class is trapped in a continuous, invisible cycle of servitude." },
        { question: "Does Kevin buy the house?", answer: "No. The final sequence showing Kevin buying the house and reuniting with his father is purely a fantasy—a heartbreaking pipe dream. The final shot brings us back to the bleak reality of his sub-basement apartment, showing that the capitalist gap is insurmountable." },
        { question: "What is the significance of the smell?", answer: "Mr. Park repeatedly mentions the 'subway smell' or 'old radish smell' of the Kim family. It represents the inescapable stench of poverty. No matter how well they dress or act, their socioeconomic class is biologically baked into them, which eventually drives Ki-taek to snap." }
    ],
    'Incendies': [
        { question: "Can you explain the ending twist?", answer: "The twins, Jeanne and Simon, are tasked with finding their father and brother. They discover that their mother, Nawal, was raped by a torturer in prison named Abou Tark. The devastating twist is that Abou Tark is actually Nihad—Nawal’s lost firstborn son. Therefore, the twins' brother and their father are the exact same person." },
        { question: "What does 1 + 1 = 1 mean?", answer: "This mathematical riddle represents the horrific family tree. Simon realizes that taking one brother and adding one father does not equal two different men; it equals one man (Nihad), the product of the tragedy of war." },
        { question: "Is it based on a true story?", answer: "The film is based on a play by Wajdi Mouawad, which was heavily inspired by the life of Souha Bechara, a real Lebanese communist who attempted to assassinate a militia leader and was held in the infamous Khiam prison for ten years." },
        { question: "Why didn't the mother speak for years?", answer: "Nawal took a vow of silence because the shock of seeing her torturer (Abou Tark) at a public pool, and recognizing him by the tattoo on his heel as her lost son, completely shattered her mind. The trauma was so incomprehensible that it destroyed her ability to speak." }
    ],
    'Dead Poets Society': [
        { question: "What does 'Carpe Diem' mean?", answer: "It is Latin for 'seize the day.' Mr. Keating uses it to inspire his students to make the most of their lives, break free from strict conformity, and discover their true passions before it's too late." },
        { question: "Why does Neil commit suicide?", answer: "Neil feels completely trapped by his domineering father, who demands he quit acting and attend medical school. Seeing no way out and unable to confront his father, Neil tragically takes his own life to escape the crushing control over his destiny." },
        { question: "Who is responsible for Neil's death?", answer: "The film presents a tragic web of blame. While the school blames Mr. Keating for 'corrupting' the boys with free thought, the narrative heavily implies that Mr. Perry's dictatorial parenting and refusal to listen to his son were the true catalysts." },
        { question: "What is the significance of 'O Captain! My Captain!'?", answer: "The phrase comes from a Walt Whitman poem about Abraham Lincoln. At the end of the film, the students stand on their desks and recite it to show their unwavering loyalty and respect for Mr. Keating as he is fired, proving his teachings will survive." }
    ],
    'Taste of Cherry': [
        { question: "Why does Mr. Badii want to commit suicide?", answer: "Director Abbas Kiarostami deliberately never reveals the reason. By keeping Badii's trauma ambiguous, the film becomes a universal canvas. The focus shifts entirely away from the *why* of death, and entirely onto the *value* of life." },
        { question: "What is the Taxidermist's argument?", answer: "Mr. Bagheri, the taxidermist who agrees to help, tells Badii a story about his own past suicide attempt. He was stopped by the taste of mulberries (cherries). He argues that suicide rejects the simple, beautiful, sensory experiences of the world—like a sunrise or the taste of fruit." },
        { question: "Does Mr. Badii die in the grave?", answer: "The ending is famously ambiguous. He lies in the grave as a thunderstorm begins, and the screen cuts to black. We never see if he takes the pills or if Bagheri buries him. The choice of his fate is left to the viewer's interpretation." },
        { question: "Why does the film end with behind-the-scenes video footage?", answer: "The sudden shift to digital camcorder footage of Kiarostami and the crew filming the movie breaks the fourth wall. It serves to pull the audience out of the depression of the narrative, reminding us that life—and art—continues, acting as a final affirmation of existence." }
    ],
    'The Father': [
        { question: "Why do the actors and apartment keep changing?", answer: "The film is shot from the subjective perspective of Anthony, who has severe dementia. The changing actors (Olivia Colman swapping with Olivia Williams) and the shifting furniture reflect his terrifying, fractured reality, forcing the audience to experience the exact same confusion he feels." },
        { question: "Who is the other man (Paul)?", answer: "Paul is Anne's husband/partner. However, because Anthony's timeline is scrambled, we see different versions of him, and some interactions (like the physical abuse) may be exaggerated by Anthony's paranoia, or they may be repressed memories of real cruelty." },
        { question: "Where is Anthony's other daughter, Lucy?", answer: "Anthony frequently asks for his favorite daughter, Lucy. The devastating reality, revealed late in the film, is that Lucy died in an accident years ago. Anthony's mind has blocked out the trauma, causing him to perpetually relive the confusion of her absence." },
        { question: "What is the meaning of the final scene?", answer: "Anthony finally realizes he is in a nursing home and breaks down, crying for his mother and stating he is 'losing his leaves.' It is the complete collapse of his adult ego, reducing him to a terrified child as his mind fully disconnects from reality." }
    ],
    'Children of Men': [
        { question: "Why are women infertile?", answer: "The film never explains the cause of the global infertility (a flu, pollution, genetics). This is a deliberate choice by director Alfonso Cuarón. The 'why' doesn't matter; the film is entirely focused on *how* humanity behaves when there is zero hope for the future." },
        { question: "Does Theo survive?", answer: "It is strongly implied that Theo dies from the gunshot wound he sustained during the Bexhill uprising. He uses his last ounce of strength to row Kee and the baby to the rendezvous point, sacrificing himself to secure the future of humanity." },
        { question: "What is the Human Project?", answer: "The Human Project is a secret, mythic scientific group working in the Azores to cure infertility. Throughout the film, it is unclear if they actually exist or are just a fairy tale. The arrival of the ship *Tomorrow* at the end confirms they are real." },
        { question: "Why does the shooting stop in the building?", answer: "When the soldiers and rebels hear the baby crying, they stop fighting. It has been 18 years since a baby was born. The sheer shock and awe of a miracle temporarily overrides their hatred, proving that the purity of new life can halt even the most savage violence." }
    ],
    'The Truman Show': [
        { question: "Is Truman adopted?", answer: "Yes, Truman Burbank was legally adopted by a corporation (the OmniCam Corporation) when he was a baby, marking him as the first human being to be owned by a television network." },
        { question: "Why is Truman afraid of water?", answer: "Christof, the show's creator, engineered a fake boating accident when Truman was a child, making it appear as though his father drowned. This instilled a severe trauma-induced phobia of water in Truman, ensuring he would never try to cross the ocean and leave the island." },
        { question: "Does Christof actually care about Truman?", answer: "Christof exhibits a twisted, god-like complex. He claims to love Truman and believes he gave him a perfect, utopian life devoid of the pain of the real world. However, his love is fundamentally abusive, as it relies on total control and deception." },
        { question: "What is the message of the ending?", answer: "When Truman hits the painted wall and finds the exit door, he chooses the unpredictable, painful reality over the safe, manufactured utopia. The final shot of the viewers immediately asking 'What else is on?' serves as a cynical indictment of media consumption." }
    ],
    'A Clockwork Orange': [
        { question: "What is the Ludovico Technique?", answer: "It is a fictional aversion therapy where Alex is injected with nausea-inducing drugs, strapped to a chair with his eyes clamped open, and forced to watch horrific violence. It conditions his brain to associate violent acts (and Beethoven's music) with extreme physical sickness." },
        { question: "Why is the priest against the cure?", answer: "The prison chaplain argues that 'goodness comes from within.' By chemically castrating Alex's ability to choose evil, they have destroyed his free will. He argues that a man who cannot choose to be bad is not truly good; he is just a machine." },
        { question: "What does 'I was cured all right' mean?", answer: "At the end, the government reverses the procedure to save face after Alex attempts suicide. When he says 'I was cured,' he is sarcastically noting that he has been restored to his original, sadistic self, and that the government will now protect his violence because he is a political asset." },
        { question: "Why was the film banned in the UK?", answer: "Director Stanley Kubrick actually withdrew the film himself from UK circulation after several violent crimes were allegedly committed by copycats dressing as 'Droogs'. It remained unavailable in Britain until after his death in 1999." }
    ],
    'Requiem for a Dream': [
        { question: "Does anyone have a happy ending?", answer: "No. The film is famous for having one of the most depressing, unremittingly dark endings in cinema. All four main characters lose everything: Harry loses his arm, Marion loses her dignity, Tyrone goes to a brutal prison, and Sara loses her mind to electroshock therapy." },
        { question: "What does the red dress symbolize?", answer: "Sara Goldfarb's red dress represents her youth, her lost husband, and her desperate need for validation. Her obsession with fitting into the dress for a delusional television appearance drives her to abuse amphetamines, leading directly to her psychosis." },
        { question: "Why does the editing speed up?", answer: "Director Darren Aronofsky used 'hip-hop montages'—rapid-fire sequences of close-ups and sound effects (pills popping, pupils dilating). As the characters spiral deeper into addiction, the editing becomes faster and more frantic, creating a feeling of severe anxiety for the viewer." },
        { question: "What is the meaning of the final fetal positions?", answer: "In the closing shots, all four characters are shown curling into a fetal position in their respective hells (prison, hospital, psychiatric ward). It symbolizes regression; their addictions destroyed their adult lives, reducing them to helpless, broken infants." }
    ]
};

// 🔥 THE KEYWORD BRIDGE & SCHEMA GENERATOR (Unrestricted Version)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('nudity') || lowerType.includes('assault') || lowerType.includes('rape')) types.add('sexual content and nudity');
        if (lowerType.includes('suicide') || lowerType.includes('trauma') || lowerType.includes('death')) types.add('severe emotional trauma and grief');
        if (lowerType.includes('violence') || lowerType.includes('gore') || lowerType.includes('execution') || lowerType.includes('murder')) types.add('graphic violence and executions');
        if (lowerType.includes('drug') || lowerType.includes('injection') || lowerType.includes('pills')) types.add('drug abuse and addiction');
        if (lowerType.includes('language') || lowerType.includes('profanity')) types.add('pervasive strong language');
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

export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} (${currentMovieYear}) - A thought-provoking masterpiece exploring the depths of the human experience.`,
        'genre': movie.genre,
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = THOUGHT_PROVOKING_FAQS[movie.Title] ? [...THOUGHT_PROVOKING_FAQS[movie.Title]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const intensityScenes = movieInfo?.scenes || [];
    
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    if (intensityScenes.length > 0) {
        const schemaIntensityList = intensityScenes.map(s => `<li>Minute ${s.time} - ${s.label} (Emotional/Philosophical Intensity: ${s.intensity}/100)</li>`).join('');
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `What are the most emotionally resonant scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Narrative metric, ${movie.Title} reaches its profound philosophical and emotional peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('suicide') || t.includes('trauma') || t.includes('violence') || t.includes('grief') || t.includes('execution') || t.includes('drug') || t.includes('assault'); 
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature emotional content'];
        const typesString = typesArray.join(', ');

        // ✅ NO LIMITS - MAP EVERYTHING FOR MAX SEO
        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Parents Guide and Trigger Warnings: Does ${movie.Title} contain violence, trauma, or explicit content?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Content Advisory, ${movie.Title} deals with heavy themes and contains scenes including ${typesString}. These timestamps are accurate for the ${currentRuntime} theatrical runtime. Exact timestamps for audiences to review or prepare for include:<br><br><ul>${schemaListText}</ul>` 
            }
        });
    } else {
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Parents Guide: Does ${movie.Title} contain explicit content?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `The Filmiway Content Advisory confirms that ${movie.Title} is free of explicit sexual content or extreme violence. However, it may still explore deep, complex emotional themes. This assessment is accurate for the ${currentRuntime} runtime.` 
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

// 🔥 FRONTEND UI SYNC (Unrestricted UI view)
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = THOUGHT_PROVOKING_FAQS[movieTitle] ? [...THOUGHT_PROVOKING_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Emotional/Philosophical Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most emotionally profound scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Narrative metric, ${movieTitle} hits its emotional peaks at the following moments:\n\n${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('suicide') || t.includes('trauma') || t.includes('violence') || t.includes('grief') || t.includes('execution') || t.includes('drug') || t.includes('assault');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature emotional content'];
        const typesString = typesArray.join(', ');

        // ✅ NO LIMITS ON THE UI
        const uiListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `• ${timeRange} - ${fullType}`;
        }).join('\n');

        staticFaqs.unshift({
            question: `Trigger Warnings & Parents Guide: Does ${movieTitle} contain violence, trauma, or explicit content?`,
            answer: `According to the Filmiway Content Advisory, ${movieTitle} contains heavy themes including ${typesString}. These timestamps are accurate for the ${finalRuntime} theatrical runtime. Exact timestamps to review include:\n\n${uiListText}`
        });
    } else {
        staticFaqs.unshift({
            question: `Parents Guide: Does ${movieTitle} contain explicit content?`,
            answer: `The Filmiway Content Advisory confirms that ${movieTitle} is completely free of explicit sexual content and extreme violence. However, it explores complex emotional themes. This assessment is accurate for the ${finalRuntime} runtime.`
        });
    }

    return staticFaqs;
};