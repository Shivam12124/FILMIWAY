// utils/paramountComedyMovieData.js - PARAMOUNT+ COMEDY COLLECTION DATA
// Ranked by Laughter, Quotability, and Chaos
// CALIBRATION: 0-20 (Setup) | 20-40 (Light) | 40-60 (Funny) | 60-75 (Chaos) | 75-85 (Implosion) | 85-95 (Extreme) | 95-100 (Genre-Defining)

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 7446, "imdbID": "tt0942385", "Title": "Tropic Thunder", "year": 2008, "genre": "Comedy", "runtime": 107, "rank": 1 },
    { "tmdbId": 8699, "imdbID": "tt0357413", "Title": "Anchorman: The Legend of Ron Burgundy", "year": 2004, "genre": "Comedy", "runtime": 94, "rank": 2 },
    { "tmdbId": 37136, "imdbID": "tt0095705", "Title": "The Naked Gun: From the Files of Police Squad!", "year": 1988, "genre": "Comedy", "runtime": 85, "rank": 3 },
    { "tmdbId": 4247, "imdbID": "tt0175142", "Title": "Scary Movie", "year": 2000, "genre": "Comedy", "runtime": 88, "rank": 4 },
    { "tmdbId": 27581, "imdbID": "tt1386588", "Title": "The Other Guys", "year": 2010, "genre": "Action Comedy", "runtime": 107, "rank": 5 },
    { "tmdbId": 1584, "imdbID": "tt0332379", "Title": "School of Rock", "year": 2003, "genre": "Comedy", "runtime": 109, "rank": 6 },
    { "tmdbId": 106646, "imdbID": "tt0993846", "Title": "The Wolf of Wall Street", "year": 2013, "genre": "Dark Comedy", "runtime": 180, "rank": 7 },
    { "tmdbId": 8872, "imdbID": "tt0105793", "Title": "Wayne's World", "year": 1992, "genre": "Comedy", "runtime": 94, "rank": 8 },
    { "tmdbId": 2609, "imdbID": "tt0093748", "Title": "Planes, Trains and Automobiles", "year": 1987, "genre": "Comedy", "runtime": 93, "rank": 9 },
    { "tmdbId": 1621, "imdbID": "tt0086465", "Title": "Trading Places", "year": 1983, "genre": "Comedy", "runtime": 116, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Paramount+ Comedy Collection)
export const SENSITIVE_TIMELINES = {
    // 1. Tropic Thunder
    7446: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Gore (Fake/Comedic)", severity: "High" }, // Opening war scene
            { start: "1:05:00", end: "1:10:00", type: "Language (Offensive)", severity: "High" } // "Full Retard" speech
        ] 
    },

    // 2. Anchorman
    8699: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Sexual Innuendo", severity: "Moderate" }, // Jazz Flute scene
            { start: "0:55:00", end: "1:00:00", type: "Violence (Comedic)", severity: "Moderate" } // News Team Fight
        ] 
    },

    // 3. The Naked Gun
    37136: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Sexual Innuendo", severity: "Low" } // Safe sex scene
        ] 
    },

    // 4. Scary Movie
    4247: { 
        scenes: [
            { start: "0:20:00", end: "0:25:00", type: "Sexual Content", severity: "High" }, // Locker room
            { start: "0:50:00", end: "0:55:00", type: "Drug Use", severity: "Moderate" } // Shorty scenes
        ] 
    },

    // 5. The Other Guys
    27581: { scenes: [] },

    // 6. School of Rock
    1584: { scenes: [] }, // Wholesome

    // 7. The Wolf of Wall Street
    106646: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Drug Use (Cocaine)", severity: "Extreme" },
            { start: "0:25:00", end: "0:35:00", type: "Nudity & Sex", severity: "Extreme" },
            { start: "1:40:00", end: "1:50:00", type: "Drug Overdose", severity: "High" } // Lemmon scene
        ] 
    },

    // 8. Wayne's World
    8872: { scenes: [] },

    // 9. Planes, Trains and Automobiles
    2609: { 
        scenes: [
            { start: "0:55:00", end: "0:58:00", type: "Strong Language", severity: "High" } // The F-Bomb car rental rant
        ] 
    },

    // 10. Trading Places
    1621: { 
        scenes: [
            { start: "0:45:00", end: "0:48:00", type: "Nudity", severity: "High" } // Jamie Lee Curtis scene
        ] 
    }
};

export const FALLBACK_POSTERS = {
    7446: "https://image.tmdb.org/t/p/w500/shqLeIkqPAXSMLk2ap1dD0cI9rR.jpg",
    8699: "https://image.tmdb.org/t/p/w500/R2J05R33M6Y8mF8u7bC6uE4z5.jpg",
    37136: "https://image.tmdb.org/t/p/w500/8d83vJ08K90v7f075q5j758d8.jpg", // Placeholder
    4247: "https://image.tmdb.org/t/p/w500/lYfRx5n5X9XJ7x2Q6z4Y5.jpg", // Placeholder
    27581: "https://image.tmdb.org/t/p/w500/c6f0Q2.jpg", // Placeholder
    1584: "https://image.tmdb.org/t/p/w500/z4x0.jpg", // Placeholder
    106646: "https://image.tmdb.org/t/p/w500/pWHf4khOloLXfUUSzS.jpg",
    8872: "https://image.tmdb.org/t/p/w500/c7.jpg", // Placeholder
    2609: "https://image.tmdb.org/t/p/w500/3k.jpg", // Placeholder
    1621: "https://image.tmdb.org/t/p/w500/4g.jpg"  // Placeholder
};

// ✅ HELPER: Single Metric "Laughter Index"
const createMovieData = (data) => ({
    laughterIndex: 85,          // Default
    complexityLevel: "HIGH",
    dominantColor: "#FACC15",   // Comedy Yellow
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Tropic Thunder (SATIRE PEAK)
    // Corrected Peak: 90 (Comedy Max). DNA: Action Comedy structure.
    7446: createMovieData({ 
        laughterIndex: 90, 
        complexityLevel: "META-SATIRE", 
        dominantColor: "#15803d", rating: 7.0, criticsScore: 82, audienceScore: 84, director: "Ben Stiller", 
        cast: ["Ben Stiller", "Robert Downey Jr.", "Jack Black"], boxOffice: "$195 million", budget: "$92 million", 
        dna: { "Comedy": 45, "Action": 35, "Satire": 20 },
        scenes: [
            { time: 5, intensity: 18, label: "Fake Trailers", color: "#facc15" }, 
            { time: 25, intensity: 48, label: "The Jungle Drop", color: "#16a34a" }, 
            { time: 60, intensity: 72, label: "Dude Playing a Dude", color: "#15803d" }, 
            { time: 90, intensity: 90, label: "Les Grossman Dance", color: "#b91c1c" }, 
            { time: 100, intensity: 62, label: "The Oscar", color: "#ca8a04" }
        ],
        synopsis: "Through a series of freak occurrences, a group of pampered actors shooting a big-budget war movie are forced to become the soldiers they are portraying. Ben Stiller, Jack Black, and Robert Downey Jr. lead an ensemble cast in this biting satire of Hollywood ego and the absurdity of method acting.",
        themes: ["Hollywood", "Ego", "War"]
    }),

    // 2. Anchorman (ABSURDIST PEAK)
    // Corrected Peak: 85 (Chaos, not devastation). DNA: Pure Comedy.
    8699: createMovieData({ 
        laughterIndex: 85, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#991b1b", rating: 7.2, criticsScore: 66, audienceScore: 86, director: "Adam McKay", 
        cast: ["Will Ferrell", "Christina Applegate", "Paul Rudd"], boxOffice: "$90 million", budget: "$26 million", 
        dna: { "Comedy": 100 },
        scenes: [
            { time: 10, intensity: 22, label: "The Party", color: "#b91c1c" }, 
            { time: 35, intensity: 45, label: "Jazz Flute", color: "#db2777" }, 
            { time: 55, intensity: 85, label: "News Team Fight", color: "#7f1d1d" }, 
            { time: 75, intensity: 68, label: "Milk Was a Bad Choice", color: "#f59e0b" }, 
            { time: 85, intensity: 55, label: "Bear Pit", color: "#a16207" }
        ],
        synopsis: "In 1970s San Diego, Ron Burgundy is the top-rated newsman in a male-dominated broadcasting world. When an ambitious female reporter arrives, Ron's ego—and his news team—spirals out of control. It is a masterpiece of improv comedy, quotable lines, and absolute absurdity.",
        themes: ["Sexism", "Media", "Ego"]
    }),

    // 3. The Naked Gun (SLAPSTICK PEAK)
    // Corrected Peak: 78 (Slapstick pressure limit). DNA: Comedy/Crime.
    37136: createMovieData({ 
        laughterIndex: 78, 
        complexityLevel: "SLAPSTICK", 
        dominantColor: "#2563eb", rating: 7.6, criticsScore: 88, audienceScore: 86, director: "David Zucker", 
        cast: ["Leslie Nielsen", "Priscilla Presley", "Ricardo Montalban"], boxOffice: "$78 million", budget: "$12 million", 
        dna: { "Comedy": 85, "Crime": 15 },
        scenes: [
            { time: 10, intensity: 30, label: "The Dock Fight", color: "#3b82f6" }, 
            { time: 30, intensity: 52, label: "Nordberg's Mishap", color: "#1d4ed8" }, 
            { time: 60, intensity: 65, label: "The Queen's Reception", color: "#1e40af" }, 
            { time: 80, intensity: 78, label: "The Baseball Game", color: "#2563eb" }, 
            { time: 85, intensity: 55, label: "Enrico Palazzo", color: "#1e3a8a" }
        ],
        synopsis: "Incompetent police detective Frank Drebin must stop an attempt to assassinate Queen Elizabeth II. Based on the 'Police Squad!' TV series, this film is the gold standard for visual gags, literal interpretations of dialogue, and deadpan delivery, establishing Leslie Nielsen as a comedy icon.",
        themes: ["Police", "Spoof", "Incompetence"]
    }),

    // 4. Scary Movie (PARODY PEAK)
    // Corrected Peak: 75 (Joke driven). DNA: Comedy/Horror.
    4247: createMovieData({ 
        laughterIndex: 75, 
        complexityLevel: "PARODY", 
        dominantColor: "#1f2937", rating: 6.3, criticsScore: 52, audienceScore: 43, director: "Keenen Ivory Wayans", 
        cast: ["Anna Faris", "Marlon Wayans", "Regina Hall"], boxOffice: "$278 million", budget: "$19 million", 
        dna: { "Comedy": 70, "Horror": 30 },
        scenes: [
            { time: 5, intensity: 35, label: "Opening Spoof", color: "#dc2626" }, 
            { time: 30, intensity: 75, label: "Wazzup", color: "#facc15" }, 
            { time: 50, intensity: 60, label: "Miss Mann", color: "#4b5563" }, 
            { time: 70, intensity: 68, label: "Theater Scene", color: "#1f2937" }, 
            { time: 85, intensity: 50, label: "The Twist", color: "#000000" }
        ],
        synopsis: "A familiar group of teenagers—including Cindy Campbell and Bobby Prinze—accidentally hit a man with their car and dump his body in a lake. A year later, they are stalked by a masked killer. This raunchy, no-holds-barred parody skewers 'Scream', 'I Know What You Did Last Summer', and 90s teen culture.",
        themes: ["Slasher", "Teen Movies", "Spoof"]
    }),

    // 5. The Other Guys (BUDDY COP PEAK)
    // Corrected Peak: 85 (Opening shock). DNA: Action/Comedy/Crime.
    27581: createMovieData({ 
        laughterIndex: 85, 
        complexityLevel: "ABSURD", 
        dominantColor: "#0ea5e9", rating: 6.6, criticsScore: 78, audienceScore: 56, director: "Adam McKay", 
        cast: ["Will Ferrell", "Mark Wahlberg", "Eva Mendes"], boxOffice: "$170 million", budget: "$100 million", 
        dna: { "Comedy": 45, "Action": 35, "Crime": 20 },
        scenes: [
            { time: 15, intensity: 85, label: "Aim for the Bushes", color: "#ef4444" }, 
            { time: 40, intensity: 55, label: "Gator Needs His Gat", color: "#0284c7" }, 
            { time: 60, intensity: 65, label: "Quiet Fight", color: "#0369a1" }, 
            { time: 80, intensity: 60, label: "The Peacock", color: "#0ea5e9" }, 
            { time: 100, intensity: 72, label: "Pimp Walking", color: "#0c4a6e" }
        ],
        synopsis: "Two mismatched New York City detectives seize an opportunity to step up like the city's top cops whom they idolize—only for things to go hilariously wrong. It features one of the most shocking and hilarious opening act twists in comedy history.",
        themes: ["Police", "Finance", "Heroism"]
    }),

    // 6. School of Rock (WHOLESOME ROCK PEAK)
    // Corrected Peak: 78 (Uplifting music). DNA: Comedy/Music.
    1584: createMovieData({ 
        laughterIndex: 78, 
        complexityLevel: "WHOLESOME", 
        dominantColor: "#dc2626", rating: 7.2, criticsScore: 92, audienceScore: 64, director: "Richard Linklater", 
        cast: ["Jack Black", "Mike White", "Joan Cusack"], boxOffice: "$131 million", budget: "$35 million", 
        dna: { "Comedy": 60, "Music": 40 },
        scenes: [
            { time: 15, intensity: 20, label: "The Deception", color: "#b91c1c" }, 
            { time: 45, intensity: 55, label: "You're in the Band", color: "#ef4444" }, 
            { time: 65, intensity: 45, label: "Math is Not Important", color: "#f87171" }, 
            { time: 90, intensity: 68, label: "Stick to the Man", color: "#991b1b" }, 
            { time: 105, intensity: 78, label: "Battle of the Bands", color: "#7f1d1d" }
        ],
        synopsis: "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band. A career-defining performance by Jack Black that is equal parts hilarious and heartwarming.",
        themes: ["Music", "Rebellion", "Education"]
    }),

    // 7. The Wolf of Wall Street (DARK COMEDY PEAK)
    // Corrected Peak: 95 (Max allowed). DNA: Biography/Crime lead.
    106646: createMovieData({ 
        laughterIndex: 95, 
        complexityLevel: "DEBAUCHERY", 
        dominantColor: "#eab308", rating: 8.2, criticsScore: 80, audienceScore: 83, director: "Martin Scorsese", 
        cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], boxOffice: "$392 million", budget: "$100 million", 
        dna: { "Biography": 30, "Crime": 30, "Comedy": 20, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 35, label: "Pink Sheets", color: "#facc15" }, 
            { time: 60, intensity: 65, label: "Steve Madden", color: "#ca8a04" }, 
            { time: 120, intensity: 95, label: "Lemmon 714s", color: "#854d0e" }, 
            { time: 140, intensity: 82, label: "I'm Not Leaving", color: "#eab308" }, 
            { time: 170, intensity: 60, label: "The FBI Raid", color: "#a16207" }
        ],
        synopsis: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government. It is a three-hour adrenaline rush of excess, drugs, and greed that manages to be one of the funniest movies of the decade.",
        themes: ["Greed", "Excess", "Crime"]
    }),

    // 8. Wayne's World (CULTURE PEAK)
    // Corrected Peak: 75 (Joy, not pressure). DNA: Comedy/Music.
    8872: createMovieData({ 
        laughterIndex: 75, 
        complexityLevel: "CULT CLASSIC", 
        dominantColor: "#2563eb", rating: 7.0, criticsScore: 84, audienceScore: 84, director: "Penelope Spheeris", 
        cast: ["Mike Myers", "Dana Carvey", "Rob Lowe"], boxOffice: "$183 million", budget: "$20 million", 
        dna: { "Comedy": 75, "Music": 25 },
        scenes: [
            { time: 5, intensity: 55, label: "Bohemian Rhapsody", color: "#1e40af" }, 
            { time: 30, intensity: 45, label: "Excalibier", color: "#3b82f6" }, 
            { time: 50, intensity: 40, label: "Product Placement", color: "#2563eb" }, 
            { time: 70, intensity: 60, label: "Foxy Lady", color: "#1d4ed8" }, 
            { time: 85, intensity: 75, label: "Mega Happy Ending", color: "#60a5fa" }
        ],
        synopsis: "Two slacker friends try to promote their public-access cable show. When a big TV executive offers them a contract, they must battle to keep their show authentic while navigating love, rock 'n' roll, and product placement. Party on, Wayne. Party on, Garth.",
        themes: ["Rock n Roll", "Friendship", "Selling Out"]
    }),

    // 9. Planes, Trains and Automobiles (ROAD TRIP PEAK)
    // Corrected Peak: 80 (Emotional arc). DNA: Comedy/Drama.
    2609: createMovieData({ 
        laughterIndex: 80, 
        complexityLevel: "HEARTFELT", 
        dominantColor: "#d97706", rating: 7.6, criticsScore: 92, audienceScore: 87, director: "John Hughes", 
        cast: ["Steve Martin", "John Candy", "Laila Robins"], boxOffice: "$49 million", budget: "$15 million", 
        dna: { "Comedy": 55, "Drama": 45 },
        scenes: [
            { time: 15, intensity: 22, label: "The Flight", color: "#fbbf24" }, 
            { time: 45, intensity: 65, label: "Those Aren't Pillows", color: "#d97706" }, 
            { time: 55, intensity: 80, label: "Car Rental Rant", color: "#b45309" }, 
            { time: 75, intensity: 70, label: "Burning Car", color: "#92400e" }, 
            { time: 90, intensity: 60, label: "The Trunk", color: "#78350f" }
        ],
        synopsis: "A man must struggle to travel home for Thanksgiving with an obnoxious slob of a shower curtain ring salesman as his only companion. John Hughes' masterpiece balances hysterical slapstick with a genuinely moving story about loneliness and friendship.",
        themes: ["Thanksgiving", "Friendship", "Patience"]
    }),

    // 10. Trading Places (SOCIAL SATIRE PEAK)
    // Corrected Peak: 80 (Smoothed). DNA: Pure Comedy.
    1621: createMovieData({ 
        laughterIndex: 80, 
        complexityLevel: "SMART", 
        dominantColor: "#16a34a", rating: 7.5, criticsScore: 88, audienceScore: 83, director: "John Landis", 
        cast: ["Eddie Murphy", "Dan Aykroyd", "Jamie Lee Curtis"], boxOffice: "$90 million", budget: "$15 million", 
        dna: { "Comedy": 100 },
        scenes: [
            { time: 20, intensity: 30, label: "The Bet", color: "#16a34a" }, 
            { time: 45, intensity: 55, label: "Billy Ray at Home", color: "#15803d" }, 
            { time: 70, intensity: 65, label: "The Party", color: "#166534" }, 
            { time: 90, intensity: 80, label: "The Train Scene", color: "#14532d" }, 
            { time: 110, intensity: 70, label: "The Trading Floor", color: "#22c55e" }
        ],
        synopsis: "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires. As they uncover the truth, they team up to exact revenge on the Dukes in a high-stakes commodities trading scheme.",
        themes: ["Class", "Revenge", "Economics"]
    })
};

export const STRATEGIC_QUOTES = {
    7446: "I'm a dude playing a dude disguised as another dude.",
    8699: "I love lamp.",
    37136: "Nice beaver!",
    4247: "Wazzup!",
    27581: "Aim for the bushes.",
    1584: "You're not hardcore unless you live hardcore.",
    106646: "Sell me this pen.",
    8872: "Party time! Excellent!",
    2609: "Those aren't pillows!",
    1621: "Looking good, Billy Ray!"
};

export const PARAMOUNT_COMEDY_MOVIE_FAQS = {
    'Tropic Thunder': [
        { question: "Is Tom Cruise really in this?", answer: "Yes, Tom Cruise plays the profane, balding studio executive Les Grossman. He famously created the character's look (including the fat hands) and insisted on dancing in the end credits." },
        { question: "Did RDJ stay in character?", answer: "Robert Downey Jr. satirized method acting by staying in character as Kirk Lazarus (who is staying in character as Lincoln Osiris) for the entire shoot, even during DVD commentary." },
        { question: "Is it based on a true story?", answer: "No, but it parodies the chaotic productions of real war movies like 'Apocalypse Now' and 'Platoon', where actors went deep into the jungle and faced real danger." }
    ],
    'Anchorman: The Legend of Ron Burgundy': [
        { question: "Was it improvised?", answer: "A huge portion of the film was improvised. Will Ferrell and director Adam McKay shot so much alternate footage and dialogue that they actually released a second movie, 'Wake Up, Ron Burgundy,' made entirely from deleted scenes." },
        { question: "Is Ron Burgundy real?", answer: "Ron Burgundy is fictional, but he is a composite of 1970s news anchors, specifically Mort Crim, whom Will Ferrell saw in a documentary and found hilarious due to his self-importance." },
        { question: "Who plays the rival news team?", answer: "The massive street fight features cameos from comedy legends like Ben Stiller, Luke Wilson, Tim Robbins, and Vince Vaughn, representing rival news stations." }
    ],
    'The Naked Gun: From the Files of Police Squad!': [
        { question: "Is it based on a show?", answer: "Yes, it is a continuation of the TV show 'Police Squad!', which was cancelled after only six episodes despite critical acclaim. The movie proved the format worked better as a feature film." },
        { question: "Did Leslie Nielsen do comedy before?", answer: "Surprisingly, no. For most of his career, Leslie Nielsen was a serious dramatic actor. 'Airplane!' and 'The Naked Gun' reinvented him as a deadpan comedy icon because he played the absurdity completely straight." },
        { question: "Who is Enrico Palazzo?", answer: "Enrico Palazzo is the famous opera singer Frank Drebin impersonates to sing the national anthem, resulting in one of the most hilariously botched renditions in movie history." }
    ],
    'Scary Movie': [
        { question: "What movies does it spoof?", answer: "It primarily spoofs 'Scream' and 'I Know What You Did Last Summer', but also includes references to 'The Sixth Sense', 'The Blair Witch Project', and 'The Matrix'." },
        { question: "Is it the same mask from Scream?", answer: "Yes and no. It uses the Ghostface design, but the mask in 'Scary Movie' was slightly altered to have a stoned or 'wazzup' expression in certain scenes for comedic effect." },
        { question: "Who are the Wayans brothers?", answer: "The film was a family affair. Keenen Ivory Wayans directed it, and it was written by and starred brothers Shawn and Marlon Wayans." }
    ],
    'The Other Guys': [
        { question: "Why did they jump?", answer: "The deaths of Highsmith (Samuel L. Jackson) and Danson (Dwayne Johnson) jumping off the roof is one of the great unexplained jokes of cinema. The movie suggests they were so arrogant they thought they could survive, or simply 'aimed for the bushes' that weren't there." },
        { question: "Is the TLC reference real?", answer: "Michael Keaton's character constantly unknowingly quotes TLC songs ('Don't go chasing waterfalls', 'Creep'). It's a running gag that he claims to have no idea who TLC is." },
        { question: "Who is Gator?", answer: "Gator is Will Ferrell's character's pimp alter-ego from his past life. He emerges when Ferrell gets angry, showing a dark, hilarious backstory to the mild-mannered forensic accountant." }
    ],
    'School of Rock': [
        { question: "Did the kids really play?", answer: "Yes, director Richard Linklater insisted on casting children who could actually play their instruments. All the music performed in the classroom and concert scenes is played live by the kid actors." },
        { question: "Is Jack Black improvising?", answer: "While the script by Mike White was tight, Jack Black improvised many of his songs and nicknames for the kids. The role was written specifically for him to showcase his musical comedy talents." },
        { question: "Was there a sequel?", answer: "There was a TV show adaptation and a Broadway musical, but a film sequel never materialized, making the original a standalone classic." }
    ],
    'The Wolf of Wall Street': [
        { question: "Is the Quaalude scene real?", answer: "The scene where Jordan tries to get to his Ferrari while paralyzed by Lemmon 714s is considered a masterpiece of physical comedy. DiCaprio claimed he channeled his inner 'drunken cerebral palsy' to pull it off." },
        { question: "Did they really do drugs?", answer: "No, the actors snorted crushed B-vitamins for the cocaine scenes. Jonah Hill eventually got bronchitis and was hospitalized from inhaling so much vitamin powder during the shoot." },
        { question: "How much is improvised?", answer: "Matthew McConaughey's chest-thumping chant was actually his own warm-up ritual. DiCaprio saw him doing it before a take and asked Scorsese to include it in the scene." }
    ],
    'Wayne\'s World': [
        { question: "Is it an SNL sketch?", answer: "Yes, it is the most successful film ever adapted from a Saturday Night Live sketch. It grossed over $183 million and started a trend of SNL movies in the 90s." },
        { question: "Did they want 'Bohemian Rhapsody'?", answer: "The studio wanted to use a Guns N' Roses song because they were popular at the time. Mike Myers fought hard for Queen's 'Bohemian Rhapsody', threatening to quit the film if they didn't use it. It ultimately revived Queen's popularity in the US." },
        { question: "What is the ending?", answer: "The film famously has three endings: a 'sad' ending, a 'Scooby-Doo' ending, and a 'mega happy' ending, allowing the characters to break the fourth wall and choose their own destiny." }
    ],
    'Planes, Trains and Automobiles': [
        { question: "Is that a real car?", answer: "The car they destroy is a Chrysler LeBaron Town & Country convertible. By the end of the movie, it has been smashed, burned, and scraped down to a metal skeleton." },
        { question: "Was John Candy like his character?", answer: "By all accounts, John Candy was as kind and lovable as Del Griffith. The film is often cited as his best performance because it allowed him to show dramatic vulnerability alongside his comedy." },
        { question: "Is the rant scripted?", answer: "Steve Martin's famous F-bomb rant at the car rental counter is fully scripted. It contains 18 F-bombs in under a minute, which is the primary reason the film is rated R." }
    ],
    'Trading Places': [
        { question: "Is it a Christmas movie?", answer: "Yes, it takes place during the holiday season and culminates on New Year's on a train. It is widely considered an alternative Christmas classic, especially in Italy where it airs every Christmas Eve." },
        { question: "What is the Eddie Murphy Rule?", answer: "The climax involves commodities trading of frozen concentrated orange juice. The movie actually inspired the 'Eddie Murphy Rule' in the 2010 Dodd-Frank Act, which banned insider trading in commodities markets." },
        { question: "Are they in Coming to America?", answer: "Yes, the Duke brothers (played by Don Ameche and Ralph Bellamy) make a cameo as homeless bums in Eddie Murphy's 'Coming to America', confirming they lost everything in this movie." }
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
        if (lowerType.includes('violence') || lowerType.includes('blood')) types.add('comic violence');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PARAMOUNT_COMEDY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A hilarious comedy movie on Paramount+.`,
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