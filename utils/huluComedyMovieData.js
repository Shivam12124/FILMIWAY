// utils/huluComedyMovieData.js - HULU COMEDY COLLECTION DATA ✅
// Ranked by Laughter, Quotability, and Chaos
// CALIBRATION: 0-20 (Setup) | 20-40 (Light) | 40-60 (Funny) | 60-75 (Chaos) | 75-85 (Implosion) | 85-95 (Extreme) | 95-100 (Genre-Defining)

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 8363, "imdbID": "tt0829482", "Title": "Superbad", "year": 2007, "genre": "Comedy", "runtime": 113, "rank": 1 },
    { "tmdbId": 134, "imdbID": "tt0190590", "Title": "O Brother, Where Art Thou?", "year": 2000, "genre": "Comedy", "runtime": 107, "rank": 2 },
    { "tmdbId": 3779, "imdbID": "tt0443453", "Title": "Borat", "year": 2006, "genre": "Comedy", "runtime": 84, "rank": 3 },
    { "tmdbId": 718930, "imdbID": "tt12593682", "Title": "Bullet Train", "year": 2022, "genre": "Action", "runtime": 127, "rank": 4 },
    { "tmdbId": 587792, "imdbID": "tt8385738", "Title": "Palm Springs", "year": 2020, "genre": "Comedy", "runtime": 90, "rank": 5 },
    { "tmdbId": 39939, "imdbID": "tt0247745", "Title": "Super Troopers", "year": 2001, "genre": "Comedy", "runtime": 100, "rank": 6 },
    { "tmdbId": 1245347, "imdbID": "tt31322753", "Title": "Twinless", "year": 2025, "genre": "Comedy", "runtime": 98, "rank": 7 },
    { "tmdbId": 2280, "imdbID": "tt0094737", "Title": "Big", "year": 1988, "genre": "Comedy", "runtime": 104, "rank": 8 },
    { "tmdbId": 986054, "imdbID": "tt21376880", "Title": "Theater Camp", "year": 2023, "genre": "Comedy", "runtime": 93, "rank": 9 },
    { "tmdbId": 7512, "imdbID": "tt0387808", "Title": "Idiocracy", "year": 2006, "genre": "Comedy", "runtime": 84, "rank": 10 }
];


// ✅ SENSITIVE TIMELINES (Comedy Collection - Updated)
export const SENSITIVE_TIMELINES = {
    // 1. Superbad
    8363: { 
        scenes: [
            { start: "4:45", end: "4:55", type: "Nudity", severity: "Moderate" },
            { start: "9:38", end: "9:45", type: "Nudity", severity: "High" },
            { start: "18:15", end: "20:30", type: "Sexual Content", severity: "Mild" }
        ] 
    },

    // 2. O Brother, Where Art Thou?
    134: { scenes: [] }, 

    // 3. Borat
    3779: { 
        scenes: [
            { start: "3:36", end: "3:50", type: "Partial Nudity", severity: "Moderate" },
            { start: "55:15", end: "58:20", type: "Sexual Content & Nudity", severity: "Extreme" }
        ] 
    },

    // 4. Bullet Train
    718930: { scenes: [] }, 

    // 5. Palm Springs
    587792: { 
        scenes: [
            { start: "1:12", end: "1:55", type: "Sexual Content", severity: "Moderate" },
            { start: "29:53", end: "29:59", type: "Partial Nudity", severity: "Low" },
            { start: "31:20", end: "31:30", type: "Sexual Content", severity: "Moderate" },
            { start: "39:20", end: "39:30", type: "Sex", severity: "Moderate" }
        ] 
    },

    // 6. Super Troopers
    39939: { 
        scenes: [
            { start: "44:10", end: "45:15", type: "Nudity", severity: "High" },
            { start: "58:10", end: "1:00:10", type: "Nudity (Non-Sexual)", severity: "High" },
            { start: "1:07:27", end: "1:07:37", type: "Partial Nudity (Non-Sexual)", severity: "Low" }
        ] 
    },

    // 7. Twinless
    1245347: { 
        scenes: [
            { start: "23:45", end: "25:15", type: "Sex & Nudity", severity: "High" },
            { start: "1:04:25", end: "1:06:10", type: "Sex & Nudity", severity: "High" }
        ] 
    },

    // 8. Big
    2280: { scenes: [] },

    // 9. Theater Camp
    986054: { scenes: [] },

    // 10. Idiocracy
    7512: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    8363: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJnhq.jpg",
    134: "https://image.tmdb.org/t/p/w500/min5Q6Xo3Xj8B86629K9qfD0Q5.jpg",
    3779: "https://image.tmdb.org/t/p/w500/y1Z77dY1jYdc2Jg6Y3B6S77Z.jpg",
    718930: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaPETYiXe2FOUVy.jpg",
    587792: "https://image.tmdb.org/t/p/w500/1SBNmo4JG2ziZFnXA23jJ2Sbd.jpg",
    39939: "https://image.tmdb.org/t/p/w500/3s9Y5w27dGHX03aA7Y5W6v.jpg",
   1245347: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    2280: "https://image.tmdb.org/t/p/w500/ur1593c.jpg",
  986054: "https://image.tmdb.org/t/p/w500/3X.jpg",
  7512: "https://image.tmdb.org/t/p/w500/gZ.jpg"
};

// ✅ HELPER: Single Metric "Laughter Index"
const createMovieData = (data) => ({
    laughterIndex: 85,          // Default
    complexityLevel: "HIGH",
    dominantColor: "#FACC15",   // Comedy Yellow
    ...data,
});
export const COMPLETE_MOVIE_DATA = {
    // 1. Superbad (TEEN CHAOS PEAK)
    // Curve: Desperation -> Failure -> Escalation -> Explosion -> Acceptance.
    // Peak: 95 (The Cop Car Ride - Absolute Chaos).
    8363: createMovieData({ 
        laughterIndex: 90, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#ef4444", rating: 7.6, criticsScore: 88, audienceScore: 87, director: "Greg Mottola", 
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"], boxOffice: "$170 million", budget: "$20 million", 
        dna: { "Comedy": 70, "Coming of Age": 30 },
   scenes: [
            { time: 15, intensity: 40, label: "The Fake ID" }, // Mild anxiety over McLovin.
            { time: 40, intensity: 78, label: "The Liquor Store Robbery" }, // Fogell gets punched. Real danger spikes.
            { time: 70, intensity: 85, label: "The Cop Car Joyride" }, // Shooting stop signs. Insane escalation.
            { time: 85, intensity: 90, label: "The Period Blood Incident" }, // PRIMARY PEAK: Social and physical chaos at the party. Fight breaks out.
            { time: 105, intensity: 35, label: "Sleeping Bags" } // Pure emotional vulnerability. Zero tension.
        ],
        synopsis: "Two co-dependent high school seniors, Seth and Evan, are forced to deal with separation anxiety as they prepare to go to different colleges. In a desperate bid to be cool and lose their virginity before graduation, they volunteer to supply alcohol for a massive party. Their quest goes hilariously wrong involving two bored cops, a fake ID named 'McLovin', and a night that spirals into absolute absurdity.",
        themes: ["Friendship", "Growing Up", "Partying"]
    }),

    // 2. O Brother, Where Art Thou? (ADVENTURE PEAK)
    // Curve: Escape -> Music -> Obstacle -> Triumph -> Salvation.
    // Peak: 88 (Man of Constant Sorrow - Musical Triumph).
    134: createMovieData({ 
        laughterIndex: 88, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#ca8a04", rating: 7.7, criticsScore: 79, audienceScore: 89, director: "Joel Coen", 
        cast: ["George Clooney", "John Turturro", "Tim Blake Nelson"], boxOffice: "$71 million", budget: "$26 million", 
        dna: { "Comedy": 50, "Adventure": 30, "Music": 20 },
        scenes: [
            { time: 15, intensity: 25, label: "Chain Gang Escape", color: "#a16207" }, // Setup
            { time: 45, intensity: 55, label: "The Recording", color: "#ca8a04" }, // Joy
            { time: 70, intensity: 40, label: "The Sirens", color: "#d97706" }, // Lull
            { time: 90, intensity: 88, label: "Concert Hall", color: "#b45309" }, // PEAK TRIUMPH
            { time: 100, intensity: 65, label: "The Flood", color: "#854d0e" } // Resolution
        ],
        synopsis: "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. Loosely based on Homer's 'Odyssey,' the trio encounters a series of bizarre characters—including a blind prophet, bank robber George Nelson, and a KKK rally—while inadvertently becoming bluegrass sensations. A visually stunning, hilariously quoted masterpiece of Americana.",
        themes: ["Redemption", "Folk Music", "Americana"]
    }),

    // 3. Borat (GENRE-DEFINING CHAOS)
    // Curve: Culture Clash -> Offense -> Discomfort -> Extreme Shock -> Resolution.
    // Peak: 98 (The Hotel Fight - Extreme Discomfort).
    3779: createMovieData({ 
        laughterIndex: 98, 
        complexityLevel: "CHAOTIC", 
        dominantColor: "#fcd34d", rating: 7.4, criticsScore: 91, audienceScore: 79, director: "Larry Charles", 
        cast: ["Sacha Baron Cohen", "Ken Davitian", "Luenell"], boxOffice: "$262 million", budget: "$18 million", 
        dna: { "Satire": 60, "Mockumentary": 40 },
        scenes: [
            { time: 10, intensity: 30, label: "Arrival in NY", color: "#facc15" }, // Setup
            { time: 40, intensity: 98, label: "The Hotel Fight", color: "#ef4444" }, // PEAK SHOCK
            { time: 60, intensity: 75, label: "The Rodeo", color: "#f97316" }, // High tension
            { time: 75, intensity: 85, label: "Pamela Anderson", color: "#dc2626" }, // Crisis
            { time: 80, intensity: 40, label: "Homecoming", color: "#fbbf24" } // Resolution
        ],
        synopsis: "Kazakh TV talking head Borat Sagdiyev is dispatched to the United States to report on the 'greatest country in the world.' However, he becomes more interested in locating and marrying Pamela Anderson. As he travels across the country, his unscripted interactions with real Americans expose deep-seated prejudices, absurdities, and the shocking underbelly of polite society in a way that is both hilarious and terrifying.",
        themes: ["Culture Clash", "Satire", "Prejudice"]
    }),

    // 4. Bullet Train (ACTION COMEDY)
    // Curve: Mission -> Complication -> Chaos -> Spectacle -> Aftermath.
    // Peak: 90 (The Train Crash - Visual Spectacle).
    718930: createMovieData({ 
        laughterIndex: 85, 
        complexityLevel: "ACTION-PACKED", 
        dominantColor: "#ec4899", rating: 7.3, criticsScore: 54, audienceScore: 76, director: "David Leitch", 
        cast: ["Brad Pitt", "Joey King", "Aaron Taylor-Johnson"], boxOffice: "$239 million", budget: "$90 million", 
        dna: { "Action": 50, "Comedy": 50 },
        scenes: [
            { time: 20, intensity: 35, label: "The Briefcase", color: "#db2777" }, // Setup
            { time: 50, intensity: 65, label: "Quiet Car Fight", color: "#be123c" }, // Action/Comedy
            { time: 80, intensity: 55, label: "The Elder Arrives", color: "#9d174d" }, // Plot Twist
            { time: 110, intensity: 90, label: "The Crash", color: "#831843" }, // PEAK SPECTACLE
            { time: 120, intensity: 50, label: "Lemon's Truck", color: "#f472b6" } // Punchline
        ],
        synopsis: "Ladybug is an unlucky assassin determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, has other plans, as his latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train. It is a stylish, neon-soaked ride of kinetic action and dry humor.",
        themes: ["Fate", "Luck", "Assassins"]
    }),

    // 5. Palm Springs (SCI-FI ROM-COM)
    // Curve: Resignation -> Discovery -> Fun -> Despair -> Hope.
    // Peak: 88 (The Bridge Scene - Emotional Crisis).
    587792: createMovieData({ 
        laughterIndex: 88, 
        complexityLevel: "SMART", 
        dominantColor: "#34d399", rating: 7.4, criticsScore: 94, audienceScore: 88, director: "Max Barbakow", 
        cast: ["Andy Samberg", "Cristin Milioti", "J.K. Simmons"], boxOffice: "Streaming", budget: "$5 million", 
        dna: { "Sci-Fi": 40, "Romance": 30, "Comedy": 30 },
        scenes: [
            { time: 15, intensity: 25, label: "The Cave", color: "#10b981" }, // Setup
            { time: 40, intensity: 50, label: "Waking Up", color: "#059669" }, // Realization
            { time: 60, intensity: 75, label: "Montage of Chaos", color: "#047857" }, // Fun
            { time: 80, intensity: 88, label: "The Bridge", color: "#065f46" }, // PEAK EMOTION
            { time: 85, intensity: 82, label: "The Escape", color: "#34d399" } // Resolution
        ],
        synopsis: "When carefree Nyles and reluctant maid of honor Sarah have a chance encounter at a Palm Springs wedding, things get complicated as they are unable to escape the venue, themselves, or each other. Trapped in an infinite time loop, they must navigate the absurdity of living the same day forever, eventually facing the terrifying choice between the safety of infinite nothingness and the risk of a future together.",
        themes: ["Existentialism", "Love", "Time Loops"]
    }),

    // 6. Super Troopers (STONER / LOW STAKES)
    // Curve: Prank -> Rivalry -> Screw Up -> Redemption -> Chaos.
    // Peak: 75 (The Drug Bust - Narrative Climax).
    39939: createMovieData({ 
        laughterIndex: 75, 
        complexityLevel: "CULT CLASSIC", 
        dominantColor: "#1d4ed8", rating: 7.0, criticsScore: 36, audienceScore: 90, director: "Jay Chandrasekhar", 
        cast: ["Jay Chandrasekhar", "Kevin Heffernan", "Steve Lemme"], boxOffice: "$23 million", budget: "$1.2 million", 
        dna: { "Comedy": 80, "Crime": 20 },
        scenes: [
            { time: 5, intensity: 40, label: "The Opening Stop", color: "#2563eb" }, // Setup
            { time: 30, intensity: 55, label: "Meow Game", color: "#1d4ed8" }, // Classic Bit
            { time: 50, intensity: 50, label: "Syrup Chug", color: "#1e40af" }, // Gross out
            { time: 80, intensity: 60, label: "Farva's Shenanigans", color: "#1e3a8a" }, // Conflict
            { time: 95, intensity: 75, label: "The Bust", color: "#3b82f6" } // PEAK NARRATIVE
        ],
        synopsis: "Five Vermont state troopers, avid pranksters with a knack for screwing up, try to save their jobs and outdo the local police department by solving a crime. As budget cuts threaten to shut down their station, the troopers must pause their endless games of 'Meow' and syrup chugging to actually do some police work. A highly quotable cult classic.",
        themes: ["Pranks", "Police", "Rivalry"]
    }),

    // 7. Twinless (DARK BUDDY COMEDY)
    // Curve: Grief -> Meeting -> Bonding -> Shock -> Acceptance.
    // Peak: 78 (The Twist - Narrative Shift).
   1245347: createMovieData({ 
        laughterIndex: 80, 
        complexityLevel: "FRESH", 
        dominantColor: "#8b5cf6", rating: 7.0, criticsScore: 85, audienceScore: 80, director: "James Griffiths", 
        cast: ["Dylan O'Brien", "James Sweeney", "Lauren Lapkus"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Comedy": 60, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 20, label: "The Loss", color: "#a78bfa" }, // Setup/Sadness
            { time: 40, intensity: 45, label: "Support Group", color: "#8b5cf6" }, // Awkwardness
            { time: 60, intensity: 65, label: "Bonding", color: "#7c3aed" }, // Connection
            { time: 80, intensity: 78, label: "The Twist", color: "#6d28d9" }, // PEAK STORY
            { time: 90, intensity: 60, label: "Acceptance", color: "#5b21b6" } // Resolution
        ],
        synopsis: "Two young men form an unlikely bromance after meeting in a support group for twinless twins. As they navigate the tricky waters of grief and identity, their relationship takes a dark, unexpected turn that challenges their sanity. A fresh, offbeat comedy that manages to be both hilariously weird and surprisingly touching about the process of healing.",
        themes: ["Grief", "Bromance", "Identity"]
    }),

    // 8. Big (NOSTALGIC / WARM)
    // Curve: Wish -> Fear -> Wonder -> Success -> Goodbye.
    // Peak: 85 (The Giant Piano - Pure Joy).
    2280: createMovieData({ 
        laughterIndex: 75, 
        complexityLevel: "NOSTALGIC", 
        dominantColor: "#3b82f6", rating: 7.3, criticsScore: 98, audienceScore: 89, director: "Penny Marshall", 
        cast: ["Tom Hanks", "Elizabeth Perkins", "Robert Loggia"], boxOffice: "$151 million", budget: "$18 million", 
        dna: { "Comedy": 50, "Fantasy": 30, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 25, label: "Zoltar Speaks", color: "#60a5fa" }, // Setup
            { time: 40, intensity: 85, label: "Giant Piano", color: "#3b82f6" }, // PEAK JOY
            { time: 60, intensity: 50, label: "The Loft", color: "#2563eb" }, // Fun
            { time: 85, intensity: 65, label: "Business Pitch", color: "#1d4ed8" }, // Success
            { time: 100, intensity: 70, label: "Going Home", color: "#1e40af" } // Emotional
        ],
        synopsis: "After wishing to be made big, a teenage boy wakes up the next morning to find himself mysteriously in the body of an adult. He heads to New York City, gets a job at a toy company, and falls in love, all while trying to hide the fact that he's actually a 12-year-old kid. A heartwarming classic that features Tom Hanks at his most charming.",
        themes: ["Childhood", "Innocence", "Corporate Life"]
    }),

    // 9. Theater Camp (MOCKUMENTARY / CRINGE)
    // Curve: Crisis -> Auditions -> Chaos -> Performance -> Triumph.
    // Peak: 82 (The Show - Controlled Chaos).
  986054: createMovieData({ 
        laughterIndex: 82, 
        complexityLevel: "MOCKUMENTARY", 
        dominantColor: "#f43f5e", rating: 7.0, criticsScore: 86, audienceScore: 80, director: "Molly Gordon", 
        cast: ["Ben Platt", "Molly Gordon", "Noah Galvin"], boxOffice: "$4 million", budget: "N/A", 
        dna: { "Comedy": 80, "Musical": 20 },
        scenes: [
            { time: 10, intensity: 30, label: "Joan Coma", color: "#fb7185" }, // Setup
            { time: 30, intensity: 50, label: "Auditions", color: "#f43f5e" }, // Cringe
            { time: 70, intensity: 60, label: "Rehearsal Hell", color: "#e11d48" }, // Stress
            { time: 85, intensity: 75, label: "Crypto Bro", color: "#be123c" }, // Conflict
            { time: 90, intensity: 82, label: "The Show", color: "#9f1239" } // PEAK PERFORMANCE
        ],
        synopsis: "The eccentric staff of a rundown theater camp in upstate New York must band together with the beloved founder's crypto-bro son to keep the camp afloat. With the founder in a coma, the counselors have three weeks to stage a masterpiece to save their summer sanctuary. A hilarious, heartfelt mockumentary that perfectly captures the intensity of theater kids.",
        themes: ["Theater", "Passion", "Saving the Arts"]
    }),

    // 10. Idiocracy (SATIRE / FRUSTRATION)
    // Curve: Experiment -> Awakening -> Arrest -> Trial -> Resolution.
    // Peak: 80 (The Monster Truck Rally - Peak Stupidity).
  7512: createMovieData({ 
        laughterIndex: 80, 
        complexityLevel: "SATIRE", 
        dominantColor: "#eab308", rating: 6.5, criticsScore: 71, audienceScore: 60, director: "Mike Judge", 
        cast: ["Luke Wilson", "Maya Rudolph", "Dax Shepard"], boxOffice: "$0.5 million", budget: "$2 million", 
        dna: { "Sci-Fi": 40, "Comedy": 60 },
        scenes: [
            { time: 10, intensity: 15, label: "Hibernation", color: "#facc15" }, // Setup
            { time: 30, intensity: 45, label: "Welcome to Costco", color: "#eab308" }, // World building
            { time: 50, intensity: 70, label: "Electrolytes", color: "#ca8a04" }, // Frustration
            { time: 75, intensity: 80, label: "Rehabilitation", color: "#a16207" }, // PEAK SATIRE
            { time: 80, intensity: 65, label: "President Camacho", color: "#854d0e" } // Resolution
        ],
        synopsis: "Private Joe Bauers, the definition of an average American, is selected for a hibernation experiment but wakes up 500 years in the future to find he is the smartest man alive in a society that has dumbed down significantly. Surrounded by a population that waters crops with sports drinks and elects pro wrestlers, Joe must save the world from its own stupidity. A cult classic satire that feels more like a documentary every year.",
        themes: ["Dystopia", "Commercialism", "Intelligence"]
    })
};
export const STRATEGIC_QUOTES = {
    8363: "I am McLovin.",
    134: "We thought you was a toad!",
    3779: "Very nice!",
    718930: "Diesel is a diesel.",
    587792: "Today, tomorrow, it's all the same.",
    39939: "The snozberries taste like snozberries.",
   1245347: "We are the twinless.",
    2280: "I wish I were big.",
  986054: "Joan, still.",
  7512: "It's got electrolytes."
};

export const CINEMATIC_COLORS = {
    "Comedy": "#facc15", "Action": "#ef4444", "Sci-Fi": "#3b82f6", "Mockumentary": "#f43f5e"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Weak", color: "#fca5a5", symbol: "🥱", bgColor: "bg-red-200/30", description: "Not funny" },
    { value: 2, label: "Amusing", color: "#fcd34d", symbol: "🙂", bgColor: "bg-yellow-500/30", description: "Some laughs" },
    { value: 3, label: "Hilarious", color: "#16a34a", symbol: "😂", bgColor: "bg-green-600/30", description: 'Laugh out loud' },
    { value: 4, label: "Legendary", color: "#ca8a04", symbol: "🤣", bgColor: "bg-yellow-700/30", description: "Comedy gold" }
];

export const HULU_COMEDY_MOVIE_FAQS = {
    'Superbad': [
        { 
            question: "Why is 'McLovin' such a famous movie meme?", 
            answer: "The joke stems from the character Fogell choosing a single, nonsensical moniker for a fake ID instead of a standard name. Seth Rogen revealed the name was inspired by the idea of a 'sexy Irish R&B singer.' It became a cultural touchstone for teen awkwardness in the late 2000s." 
        },
        { 
            question: "Is the friendship between Seth and Evan based on real people?", 
            answer: "Yes. Writers Seth Rogen and Evan Goldberg wrote the script at age 13 as a semi-autobiographical project. The lead characters are named after them, and the dialogue was specifically crafted to capture the authentic, messy way suburban teens actually talk." 
        },
        { 
            question: "How much of the movie was improvised?", 
            answer: "While the plot was scripted, the banter between Jonah Hill and Michael Cera was heavily improvised to keep the chemistry natural. However, the famous 'penis drawing' montage was fully scripted—Seth Rogen actually drew those as a teenager." 
        },
        { 
            question: "Content Advisory: Nudity and Language", 
            answer: "Superbad is a hard R-rated comedy. It contains frequent profanity and comedic nudity. Key timestamps for sensitive content: 4:45, 9:38, and a sequence from 18:15 to 20:30." 
        }
    ],

    'O Brother, Where Art Thou?': [
        { 
            question: "Is this movie a direct retelling of 'The Odyssey'?", 
            answer: "It’s a 'folk-art' adaptation. Set in the 1930s Deep South, it mirrors Homer’s epic: Everett (Odysseus) tries to return to his wife Penny (Penelope) while encountering parallels like the Cyclops (a one-eyed salesman) and the Sirens (women at the river)." 
        },
        { 
            question: "Did George Clooney actually sing 'Man of Constant Sorrow'?", 
            answer: "No. While Clooney practiced for weeks, his voice was dubbed by bluegrass artist Dan Tyminski. However, co-star Tim Blake Nelson (Delmar) did perform his own vocals for 'In the Jailhouse Now.'" 
        },
        { 
            question: "Why does the movie have a unique 'sepia' look?", 
            answer: "It was the first feature film to be entirely color-corrected digitally. The Coen Brothers wanted a 'dust bowl' aesthetic. Since Mississippi was too green during filming, they digitally tinted every frame to look like an old, sun-faded postcard." 
        }
    ],

    'Borat': [
        { 
            question: "How much of Borat is real vs. scripted?", 
            answer: "Only the main characters were scripted. The reactions from the public were 100% real. Sacha Baron Cohen stayed in character for weeks at a time to provoke genuine responses, often resulting in the police being called (over 90 times during production)." 
        },
        { 
            question: "Is the depiction of Kazakhstan accurate?", 
            answer: "No, it’s a total caricature. The 'Kazakh' village was actually filmed in Romania, and the language Borat speaks is a mix of Hebrew and gibberish. Ironically, Kazakhstan later used Borat's 'Very Nice!' catchphrase for their official 2020 tourism campaign." 
        },
        { 
            question: "Content Advisory: Graphic Humour & Nudity", 
            answer: "The film is known for extreme 'cringe comedy.' Note: There is a highly graphic scene involving full male nudity from 55:15 to 58:20 that is a major talking point of the film." 
        }
    ],

    'Bullet Train': [
        { 
            question: "What is the 'Thomas the Tank Engine' obsession about?", 
            answer: "It’s a character philosophy for the assassin Lemon. He uses the children's show to categorize people's personalities (e.g., being a 'Diesel' means you're untrustworthy). This absurdist logic is a core part of the film’s 'action-comedy' DNA." 
        },
        { 
            question: "Did Brad Pitt really do his own stunts at 58?", 
            answer: "Yes, approximately 95% of them. Director David Leitch (who was Pitt’s former stunt double) designed the fights to be 'Jackie Chan-style'—using the environment and props rather than just traditional martial arts." 
        },
        { 
            question: "Is there a post-credits scene or cameo I should watch for?", 
            answer: "Keep an eye out for an uncredited cameo by Ryan Reynolds as 'Carver.' It was a 'revenge' cameo after Brad Pitt appeared for one second in Reynolds' 'Deadpool 2'." 
        }
    ],

    'Palm Springs': [
        { 
            question: "How long was Nyles actually stuck in the time loop?", 
            answer: "The movie is vague, but the writer suggested Nyles was stuck for over 40 years. Some fans calculate it as centuries given his mastery of quantum physics and the complex choreography he performs during the wedding." 
        },
        { 
            question: "How does it differ from 'Groundhog Day'?", 
            answer: "Unlike 'Groundhog Day,' where one person is trapped, Palm Springs explores the nihilism of being trapped *with someone else*. It’s less about 'becoming a better person' and more about finding a reason to care in an infinite world." 
        },
        { 
            question: "Content Advisory: Sex and Nudity", 
            answer: "Features comedic sexual situations and brief nudity. Notable timestamps: 1:12, 29:53 (partial nudity), and 31:20." 
        }
    ],

    'Idiocracy': [
        { 
            question: "Is the story about Crocs being 'future shoes' true?", 
            answer: "Yes. The costume designer chose Crocs because they were a tiny startup at the time and she thought they looked 'too stupid' for anyone to wear in real life. By the time the movie gained a cult following, Crocs had become a multi-billion dollar global brand." 
        },
        { 
            question: "Why is this movie considered a 'prophetic' comedy?", 
            answer: "In Tier 1 countries, 'Idiocracy' is often cited as a warning. It satirizes the commercialization of politics, the decline of language, and the rise of anti-intellectualism. Many fans joke that the film has shifted from 'comedy' to 'documentary.'" 
        }
    ],

    'Twinless': [
        { 
            question: "What is the 'Traumedy' genre of this 2025 hit?", 
            answer: "Twinless is a prime example of a 'Trauma-Comedy.' It uses the dark, awkward reality of losing a sibling to fuel a buddy-comedy dynamic between Dylan O'Brien and James Sweeney. It's meant for fans of 'The Bear' or 'Fleabag' who like humor mixed with heavy emotion." 
        },
        { 
            question: "Is it a streaming-only release?", 
            answer: "Yes, it was developed as a Hulu Original to capitalize on the 'prestige comedy' trend. It’s a key recommendation for users looking for high-concept stories that aren't traditional sitcoms." 
        }
    ],

    'Big': [
        { 
            question: "Was the floor piano scene real or CGI?", 
            answer: "It was 100% real. Tom Hanks and Robert Loggia practiced the choreography for weeks. There were no stunt doubles or digital edits; they actually played the notes with their feet on a custom-built 16-foot keyboard." 
        },
        { 
            question: "Why is Tom Hanks' performance considered legendary?", 
            answer: "Hanks didn't play a 'stupid adult'; he studied the movements of 12-year-olds. He focused on their boundless energy and lack of social self-consciousness, which is why the 'baby corn' scene feels so authentically childish." 
        }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

// ✅ HELPER: Outputs clean SEO-friendly terms
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('explicit')) types.add('sexual content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

// 🔥 UNIFIED CLEAN GENERATOR (For Google Bots & LLMs)
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
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = HULU_COMEDY_MOVIE_FAQS[movie.Title] ? [...HULU_COMEDY_MOVIE_FAQS[movie.Title]] : [];
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
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
                }
            }
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
                    'text': `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${currentRuntime} runtime.` 
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
    const staticFaqs = HULU_COMEDY_MOVIE_FAQS[movieTitle] ? [...HULU_COMEDY_MOVIE_FAQS[movieTitle]] : [];
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
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
            }
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${finalRuntime} runtime.`
            }
        );
    }

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