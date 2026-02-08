// utils/peacockDramaMovieData.js - PEACOCK DRAMA COLLECTION DATA
// Emotional Impact, Character Depth, and Human Connection

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 641, "imdbID": "tt0180093", "Title": "Requiem for a Dream", "year": 2000, "genre": "Drama", "runtime": 102, "rank": 1 },
    { "tmdbId": 1603, "imdbID": "tt0084707", "Title": "Sophie's Choice", "year": 1982, "genre": "Drama", "runtime": 150, "rank": 2 },
    { "tmdbId": 804095, "imdbID": "tt14208870", "Title": "The Fabelmans", "year": 2022, "genre": "Drama", "runtime": 151, "rank": 3 },
    { "tmdbId": 855263, "imdbID": "tt13423600", "Title": "A Thousand and One", "year": 2023, "genre": "Drama", "runtime": 116, "rank": 4 },
    { "tmdbId": 1158915, "imdbID": "tt28323620", "Title": "Dìdi", "year": 2024, "genre": "Comedy", "runtime": 94, "rank": 5 },
    { "tmdbId": 837881, "imdbID": "tt14807308", "Title": "She Said", "year": 2022, "genre": "History", "runtime": 129, "rank": 6 },
    { "tmdbId": 40807, "imdbID": "tt1306980", "Title": "50/50", "year": 2011, "genre": "Comedy", "runtime": 100, "rank": 7 },
    { "tmdbId": 11816, "imdbID": "tt0082846", "Title": "On Golden Pond", "year": 1981, "genre": "Drama", "runtime": 109, "rank": 8 },
    { "tmdbId": 754609, "imdbID": "tt13374522", "Title": "Mrs. Harris Goes to Paris", "year": 2022, "genre": "Comedy", "runtime": 115, "rank": 9 },
    { "tmdbId": 589049, "imdbID": "tt7798646", "Title": "The Photograph", "year": 2020, "genre": "Romance", "runtime": 106, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Trauma, Addiction, and Historical Grief)
export const SENSITIVE_TIMELINES = {
    // 1. Requiem for a Dream
    641: { 
        scenes: [
            { start: "1:30:00", end: "1:40:00", type: "Sexual Degradation", severity: "Extreme" }, // The "Ass to Ass" scene
            { start: "1:25:00", end: "1:28:00", type: "Medical Gore", severity: "High" }, // Infected arm/Amputation
            { start: "1:35:00", end: "1:38:00", type: "Electroshock Therapy", severity: "High" }
        ] 
    },

    // 2. Sophie's Choice
    1603: { 
        scenes: [
            { start: "2:10:00", end: "2:15:00", type: "The Choice (Psychological Trauma)", severity: "Extreme" } // The camp selection scene
        ] 
    },

    // 3. The Fabelmans
    804095: { 
        scenes: [
            { start: "1:15:00", end: "1:20:00", type: "Bullying/Antisemitism", severity: "Moderate" }
        ] 
    },

    // 4. A Thousand and One
    855263: { scenes: [] },

    // 5. Dìdi
    1158915: { 
        scenes: [
            { start: "0:45:00", end: "0:48:00", type: "Teen Drinking/Vomit", severity: "Mild" }
        ] 
    },

    // 6. She Said
    837881: { 
        scenes: [
            { start: "0:00:00", end: "2:00:00", type: "Discussions of Sexual Assault", severity: "Moderate" } // No graphic visuals, heavy themes
        ] 
    },

    // 7. 50/50
    40807: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Medical Procedure", severity: "Moderate" } // Surgery prep
        ] 
    },

    // 8. On Golden Pond
    11816: { scenes: [] },

    // 9. Mrs. Harris Goes to Paris
    754609: { scenes: [] },

    // 10. The Photograph
    589049: { 
        scenes: [
            { start: "0:40:00", end: "0:43:00", type: "Sex", severity: "Moderate" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    641: "https://image.tmdb.org/t/p/w500/nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
    1603: "https://image.tmdb.org/t/p/w500/3Z7o2d9ag9ZdbZ5LBDYyP99C9H6.jpg",
    804095: "https://image.tmdb.org/t/p/w500/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
    855263: "https://image.tmdb.org/t/p/w500/5TheK2Ff5l55776c59X5G5Y5z55.jpg",
    1158915: "https://image.tmdb.org/t/p/w500/2Gf5y555555.jpg",
    837881: "https://image.tmdb.org/t/p/w500/c55555.jpg",
    40807: "https://image.tmdb.org/t/p/w500/555555.jpg",
    11816: "https://image.tmdb.org/t/p/w500/55555.jpg",
    754609: "https://image.tmdb.org/t/p/w500/55555.jpg",
    589049: "https://image.tmdb.org/t/p/w500/55555.jpg"
};

// ✅ HELPER: Updated for Drama
const createMovieData = (data) => ({
    emotionalIntensity: 85,    // Default High Emotion
    complexityLevel: "HIGH",
    dominantColor: "#1e293b", // Slate default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Requiem for a Dream (2000)
    // Curve: Hope -> Addiction -> Desperation -> Nightmare -> Void.
    // Peak: 99 (The Winter Montage - Total Collapse).
    641: createMovieData({ 
        emotionalIntensity: 99, 
        complexityLevel: "TRAUMATIC", 
        dominantColor: "#4c1d95", rating: 8.3, criticsScore: 79, audienceScore: 93, director: "Darren Aronofsky", 
        cast: ["Jared Leto", "Jennifer Connelly", "Ellen Burstyn"], boxOffice: "$7 million", budget: "$4.5 million", 
        dna: { "Drama": 70, "Psychological Horror": 30 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Summer (Highs)", color: "#facc15" },
            { time: 40, intensity: 55, label: "Fall (Decline)", color: "#f97316" },
            { time: 70, intensity: 75, label: "Winter Begins", color: "#64748b" },
            { time: 90, intensity: 99, label: "The Requiem", color: "#dc2626" }, // PEAK
            { time: 100, intensity: 95, label: "Fetal Position", color: "#000000" } 
        ],
        synopsis: "A stylistic, terrifying, and heartbreaking look at four different forms of addiction. As a widow becomes hooked on diet pills and her son spirals into heroin use, their lives relentlessly degrade into a nightmarish reality. It is widely considered one of the most depressing—and technically brilliant—movies ever made.",
        themes: ["Addiction", "Delusion", "Destruction"]
    }),

    // 2. Sophie's Choice (1982)
    // Curve: Mystery -> Friendship -> Flashback -> Revelation -> Tragedy.
    // Peak: 98 (The Choice - Unspeakable Grief).
    1603: createMovieData({ 
        emotionalIntensity: 98, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#78350f", rating: 7.5, criticsScore: 78, audienceScore: 83, director: "Alan J. Pakula", 
        cast: ["Meryl Streep", "Kevin Kline", "Peter MacNicol"], boxOffice: "$30 million", budget: "$12 million", 
        dna: { "Drama": 60, "History": 20, "Romance": 20 }, 
        scenes: [
            { time: 20, intensity: 30, label: "The Boarding House", color: "#fef3c7" },
            { time: 60, intensity: 50, label: "Nathan's Moods", color: "#b45309" },
            { time: 100, intensity: 70, label: "The Flashbacks", color: "#57534e" },
            { time: 130, intensity: 98, label: "The Choice", color: "#000000" }, // PEAK
            { time: 145, intensity: 85, label: "Epilogue", color: "#78350f" }
        ],
        synopsis: "A young writer moves into a Brooklyn boarding house in 1947 and befriends Sophie, a Polish immigrant and Holocaust survivor, and her volatile lover Nathan. As the writer grows closer to them, the layers of Sophie's traumatic past are peeled back, revealing a secret so devastating it defines the concept of an impossible decision.",
        themes: ["Guilt", "Survival", "Memory"]
    }),

    // 3. The Fabelmans (2022)
    // Curve: Wonder -> Discovery -> Divorce -> Art -> Acceptance.
    // Peak: 88 (The Camping Trip Footage - Loss of Innocence).
    804095: createMovieData({ 
        emotionalIntensity: 88, 
        complexityLevel: "PERSONAL", 
        dominantColor: "#f59e0b", rating: 7.5, criticsScore: 92, audienceScore: 83, director: "Steven Spielberg", 
        cast: ["Gabriel LaBelle", "Michelle Williams", "Paul Dano"], boxOffice: "$45 million", budget: "$40 million", 
        dna: { "Drama": 60, "Coming-of-Age": 30, "Biography": 10 }, 
        scenes: [
            { time: 10, intensity: 35, label: "First Movie", color: "#fcd34d" },
            { time: 50, intensity: 88, label: "Camping Footage", color: "#ef4444" }, // PEAK
            { time: 80, intensity: 65, label: "High School Hell", color: "#3b82f6" },
            { time: 110, intensity: 80, label: "Prom Night Editing", color: "#eab308" },
            { time: 145, intensity: 90, label: "The Horizon", color: "#f59e0b" }
        ],
        synopsis: "Steven Spielberg's deeply personal semi-autobiography. Growing up in post-World War II era Arizona, young Sammy Fabelman discovers a shattering family secret and explores how the power of films can help him see the truth about others and himself. It is a love letter to cinema and a heartbreaking portrait of a marriage falling apart.",
        themes: ["Family", "Art vs. Life", "Divorce"]
    }),

    // 4. A Thousand and One (2023)
    // Curve: Kidnapping -> Hiding -> Growth -> System -> Truth.
    // Peak: 92 (The Truth Revealed - Identity Crisis).
    855263: createMovieData({ 
        emotionalIntensity: 92, 
        complexityLevel: "GRITTY", 
        dominantColor: "#c2410c", rating: 7.0, criticsScore: 97, audienceScore: 80, director: "A.V. Rockwell", 
        cast: ["Teyana Taylor", "Josiah Cross"], boxOffice: "$3.4 million", budget: "N/A", 
        dna: { "Drama": 80, "Crime": 20 }, 
        scenes: [
            { time: 15, intensity: 60, label: "The Abduction", color: "#ea580c" },
            { time: 50, intensity: 45, label: "Growing Up Hidden", color: "#78716c" },
            { time: 80, intensity: 75, label: "Gentrification", color: "#b91c1c" },
            { time: 100, intensity: 92, label: "The Revelation", color: "#7f1d1d" }, // PEAK
            { time: 110, intensity: 80, label: "New Path", color: "#c2410c" }
        ],
        synopsis: "After being released from prison, unapologetic mother Inez kidnaps her 6-year-old son Terry from the foster care system. Holding onto their secret and each other, they set out to reclaim their sense of home, identity, and stability in a rapidly changing New York City. A fierce, raw testament to a mother's love.",
        themes: ["Motherhood", "Systemic Failure", "Gentrification"]
    }),

    // 5. Dìdi (2024)
    // Curve: Awkwardness -> Acting Out -> Friction -> Blowout -> Growth.
    // Peak: 85 (The Fight with Mom - Teen Rage).
    1158915: createMovieData({ 
        emotionalIntensity: 85, 
        complexityLevel: "RELATABLE", 
        dominantColor: "#10b981", rating: 7.5, criticsScore: 96, audienceScore: 92, director: "Sean Wang", 
        cast: ["Izaac Wang", "Joan Chen"], boxOffice: "$4 million", budget: "N/A", 
        dna: { "Comedy": 40, "Drama": 40, "Coming-of-Age": 20 }, 
        scenes: [
            { time: 15, intensity: 30, label: "Summer 2008", color: "#34d399" },
            { time: 45, intensity: 60, label: "Skate Park", color: "#10b981" },
            { time: 70, intensity: 85, label: "Fight with Mom", color: "#ef4444" }, // PEAK
            { time: 85, intensity: 70, label: "Apologies", color: "#059669" },
            { time: 90, intensity: 65, label: "High School", color: "#6ee7b7" }
        ],
        synopsis: "In 2008, during the last month of summer before high school, an impressionable 13-year-old Taiwanese American boy learns what his family can't teach him: how to skate, how to flirt, and how to love your mom. A hilarious and painfully honest look at the MySpace era of adolescence.",
        themes: ["Adolescence", "Identity", "Mother-Son"]
    }),

    // 6. She Said (2022)
    // Curve: Investigation -> Dead Ends -> Courage -> Breakthrough -> Publication.
    // Peak: 88 (The Confrontation - Journalistic Tension).
    837881: createMovieData({ 
        emotionalIntensity: 88, 
        complexityLevel: "PROCEDURAL", 
        dominantColor: "#475569", rating: 7.3, criticsScore: 88, audienceScore: 91, director: "Maria Schrader", 
        cast: ["Carey Mulligan", "Zoe Kazan"], boxOffice: "$13 million", budget: "$32 million", 
        dna: { "History": 50, "Drama": 50 }, 
        scenes: [
            { time: 20, intensity: 30, label: "The Tip", color: "#94a3b8" },
            { time: 60, intensity: 65, label: "Doors Closing", color: "#475569" },
            { time: 90, intensity: 75, label: "Zelda Speaks", color: "#1e293b" },
            { time: 110, intensity: 88, label: "Publishing Day", color: "#0f172a" }, // PEAK
            { time: 125, intensity: 80, label: "Impact", color: "#334155" }
        ],
        synopsis: "New York Times reporters Megan Twohey and Jodi Kantor break one of the most important stories in a generation—a story that helped launch the #MeToo movement and shattered decades of silence around the subject of sexual assault in Hollywood. A gripping procedural about the power of truth.",
        themes: ["Journalism", "Courage", "Justice"]
    }),

    // 7. 50/50 (2011)
    // Curve: Diagnosis -> Denial -> Anger -> Surgery -> Survival.
    // Peak: 90 (Pre-Surgery Breakdown - Vulnerability).
    40807: createMovieData({ 
        emotionalIntensity: 85, 
        complexityLevel: "BALANCED", 
        dominantColor: "#0ea5e9", rating: 7.6, criticsScore: 93, audienceScore: 88, director: "Jonathan Levine", 
        cast: ["Joseph Gordon-Levitt", "Seth Rogen", "Anna Kendrick"], boxOffice: "$41 million", budget: "$8 million", 
        dna: { "Comedy": 50, "Drama": 50 }, 
        scenes: [
            { time: 15, intensity: 70, label: "The Diagnosis", color: "#0284c7" },
            { time: 40, intensity: 40, label: "Head Shave", color: "#7dd3fc" },
            { time: 75, intensity: 65, label: "The Breakup", color: "#ef4444" },
            { time: 90, intensity: 90, label: "The Breakdown", color: "#1d4ed8" }, // PEAK
            { time: 100, intensity: 80, label: "Waking Up", color: "#38bdf8" }
        ],
        synopsis: "Inspired by a true story, a 27-year-old radio journalist is diagnosed with a rare form of spinal cancer. With the help of his best friend, his mother, and a young therapist, he learns what really matters in life. A rare film that manages to be laugh-out-loud funny and devastatingly sad at the same time.",
        themes: ["Friendship", "Illness", "Mortality"]
    }),

    // 8. On Golden Pond (1981)
    // Curve: Arrival -> Friction -> Connection -> Accident -> Reconciliation.
    // Peak: 80 (The Boat Crash - Fear of Loss).
    11816: createMovieData({ 
        emotionalIntensity: 80, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#ca8a04", rating: 7.6, criticsScore: 93, audienceScore: 85, director: "Mark Rydell", 
        cast: ["Henry Fonda", "Katharine Hepburn", "Jane Fonda"], boxOffice: "$119 million", budget: "$15 million", 
        dna: { "Drama": 80, "Family": 20 }, 
        scenes: [
            { time: 20, intensity: 30, label: "The Loons", color: "#facc15" },
            { time: 50, intensity: 60, label: "Chelsea Arrives", color: "#d97706" },
            { time: 80, intensity: 55, label: "Fishing Bond", color: "#22c55e" },
            { time: 95, intensity: 80, label: "Heart Attack", color: "#b91c1c" }, // PEAK
            { time: 105, intensity: 75, label: "The Goodbye", color: "#a16207" }
        ],
        synopsis: "Cantankerous retiree Norman Thayer and his conciliatory wife Ethel spend summers at their New England vacation home. This year, their estranged daughter Chelsea arrives with her new fiancé and his son. The unexpected intergenerational bonding that follows forces Norman to confront his own mortality and failings as a father.",
        themes: ["Aging", "Forgiveness", "Family"]
    }),

    // 9. Mrs. Harris Goes to Paris (2022)
    // Curve: Dream -> Obstacle -> Arrival -> Loss -> Triumph.
    // Peak: 75 (The Dress Disaster - Hopes Dashed).
    754609: createMovieData({ 
        emotionalIntensity: 75, 
        complexityLevel: "WHOLESOME", 
        dominantColor: "#db2777", rating: 7.1, criticsScore: 94, audienceScore: 93, director: "Anthony Fabian", 
        cast: ["Lesley Manville", "Isabelle Huppert"], boxOffice: "$31 million", budget: "$13 million", 
        dna: { "Comedy": 40, "Drama": 40, "History": 20 }, 
        scenes: [
            { time: 15, intensity: 40, label: "The Dream", color: "#f472b6" },
            { time: 45, intensity: 60, label: "Arrival in Paris", color: "#db2777" },
            { time: 80, intensity: 70, label: "The Show", color: "#be185d" },
            { time: 100, intensity: 75, label: "The Accident", color: "#9f1239" }, // PEAK
            { time: 110, intensity: 85, label: "The Red Dress", color: "#e11d48" }
        ],
        synopsis: "A widowed cleaning lady in 1950s London falls madly in love with a couture Dior dress. She decides she must have one of her own, so she scrimps, saves, and gambles to raise the funds to pursue her dream in Paris. A charming, uplifting story about kindness and the pursuit of beauty.",
        themes: ["Dreams", "Kindness", "Fashion"]
    }),

    // 10. The Photograph (2020)
    // Curve: Discovery -> Attraction -> History -> Conflict -> Future.
    // Peak: 82 (The Hurricane - Past Revealed).
    589049: createMovieData({ 
        emotionalIntensity: 82, 
        complexityLevel: "ROMANTIC", 
        dominantColor: "#9a3412", rating: 6.1, criticsScore: 74, audienceScore: 80, director: "Stella Meghie", 
        cast: ["Issa Rae", "LaKeith Stanfield"], boxOffice: "$20 million", budget: "$16 million", 
        dna: { "Romance": 70, "Drama": 30 }, 
        scenes: [
            { time: 20, intensity: 40, label: "First Date", color: "#fdba74" },
            { time: 50, intensity: 60, label: "New Orleans", color: "#ea580c" },
            { time: 80, intensity: 82, label: "Reading the Letters", color: "#9a3412" }, // PEAK
            { time: 95, intensity: 75, label: "The Choice", color: "#c2410c" },
            { time: 105, intensity: 80, label: "Reunion", color: "#ea580c" }
        ],
        synopsis: "When famed photographer Christina Eames dies unexpectedly, she leaves her estranged daughter Mae a safety deposit box containing a photograph that sets her on a journey to find out about her mother's early life. Along the way, Mae finds a romance of her own with a journalist assigned to cover her mother's career.",
        themes: ["Legacy", "Forgiveness", "Black Love"]
    })
};

export const PEACOCK_DRAMA_MOVIE_FAQS = {
    'Requiem for a Dream': [
        { question: "Why is the editing so fast?", answer: "Director Darren Aronofsky used 'hip-hop montage' editing (extremely short cuts) to mimic the rush of drugs and the fracturing of the characters' minds. The film contains over 2,000 cuts, whereas an average film of its length usually has only 600-700." },
        { question: "Is the ending meant to be hopeless?", answer: "Yes. The film is a 'requiem' (a mass for the dead) for the characters' dreams. The fetal position ending for all four main characters signifies their total regression and defeat by their respective addictions." },
        { question: "What did Ellen Burstyn wear to show her transformation?", answer: "To play the aging, diet-pill addicted Sara Goldfarb, Ellen Burstyn wore a 40-pound fat suit and prosthetic neck pieces that were gradually adjusted to show her jarring weight loss and physical deterioration." },
        { question: "Is the 'Ass to Ass' scene real?", answer: "The scene was highly choreographed and used body doubles for certain shots. It was designed to be as uncomfortable and soul-crushing as possible to show the absolute rock bottom Jennifer Connelly's character had reached." }
    ],
    'Sophie\'s Choice': [
        { question: "Did Meryl Streep actually learn Polish for the role?", answer: "Yes. Meryl Streep not only learned to speak Polish for the film but also studied German so she could speak it with a Polish accent. Her performance is widely considered the greatest acting feat in cinema history." },
        { question: "Is Sophie's Choice based on a true story?", answer: "No, it is based on the 1979 novel by William Styron. While the characters are fictional, the portrayal of the Auschwitz-Birkenau concentration camp and its atrocities is grounded in historical reality." },
        { question: "Was this Kevin Kline's first movie?", answer: "Yes, this was Kevin Kline's film debut. He was primarily a stage actor before being cast as Nathan, and his erratic, charismatic performance earned him a Golden Globe nomination." },
        { question: "What is the psychological meaning of the 'Choice'?", answer: "The 'Choice' represents the ultimate cruelty of evil—forcing a victim to participate in their own destruction. Sophie's inability to live with her decision explores the theme of 'survivor's guilt' in its most extreme form." }
    ],
    'The Fabelmans': [
        { question: "How accurate is the family drama in the film?", answer: "It is roughly 90% accurate to Steven Spielberg's actual childhood. The discovery of his mother's affair through home movie footage, the pet monkey, and the move from Arizona to California are all true events from his life." },
        { question: "Who plays the director John Ford at the end?", answer: "The legendary director John Ford is played by fellow legendary director David Lynch. Spielberg spent weeks convincing Lynch to take the role, which resulted in one of the most iconic cameos in recent years." },
        { question: "Why did Spielberg wait so long to tell this story?", answer: "Spielberg stated he didn't feel ready to tell this intimate story while his parents were still alive. He finally began writing it with Tony Kushner during the COVID-19 pandemic lockdowns as a way to process his heritage." },
        { question: "What is the significance of the final camera tilt?", answer: "In the final shot, the camera quickly tilts up to put the horizon in the lower third of the frame. This is a direct nod to John Ford's advice earlier in the scene that 'When the horizon is at the bottom, it's interesting. When it's at the top, it's interesting. When it's in the middle, it's boring.'" }
    ],
    'A Thousand and One': [
        { question: "What is the significance of the title?", answer: "The title refers to the apartment number '1001', but it also symbolizes the 'one in a thousand' struggle of Black mothers fighting against a system designed to separate families." },
        { question: "Is Inez considered a hero or a criminal?", answer: "The film intentionally blurs this line. While she legally kidnaps her son from the foster care system, she does so out of a fierce, desperate love to provide him with stability, forcing the audience to judge her based on her intentions rather than the law." },
        { question: "How does the film portray New York City's history?", answer: "The movie acts as a time capsule of Harlem from 1994 to 2005, showing the shift from the 'stop and frisk' era to the rapid gentrification that physically and socially displaced the characters." },
        { question: "Was Teyana Taylor always a dramatic actress?", answer: "While primarily known as a singer and dancer, Taylor's performance in this film was a breakout dramatic turn. She drew from her own experiences as a mother and a New Yorker to bring raw authenticity to the character of Inez." }
    ],
    'Dìdi': [
        { question: "What does the title 'Dìdi' mean?", answer: "'Dìdi' (弟弟) is the Mandarin word for 'little brother.' It is an affectionate term used by the protagonist’s mother and grandmother, highlighting his role within the traditional family structure." },
        { question: "Is the film set in a specific time period?", answer: "Yes, it is set specifically in the summer of 2008 in Fremont, California. It captures the very specific 'Web 2.0' era of MySpace, AIM, and early YouTube that defined Gen Z's early adolescence." },
        { question: "How much of the film is autobiographical?", answer: "Director Sean Wang based the film heavily on his own life. Much of the 'internet footage' shown in the film is actual content he produced as a teenager, and the film was shot in his actual childhood home." },
        { question: "Is the grandmother in the film a real actress?", answer: "The grandmother is played by Chang Li Hua, who is director Sean Wang's actual grandmother. She had never acted before, but her natural performance became one of the most praised aspects of the movie." }
    ],
    'She Said': [
        { question: "Did Ashley Judd really play herself in the movie?", answer: "Yes. Ashley Judd was one of the first high-profile actresses to go on the record against Harvey Weinstein. She chose to play herself in the film to emphasize the reality and courage of the survivors' stories." },
        { question: "Why do we never see Harvey Weinstein's face?", answer: "The director chose to only show Weinstein from the back or in shadow. This was a deliberate artistic choice to deny him 'screen time' and keep the focus entirely on the women survivors and the journalists." },
        { question: "How accurate is the depiction of journalism?", answer: "The film is highly accurate to the book of the same name. It focuses on the 'slow work' of journalism—vetting sources, legal threats, and the meticulous process of getting victims to go on the record for the first time." },
        { question: "What movement did this investigation start?", answer: "The investigation depicted in the film, published in October 2017, was the primary catalyst for the global #MeToo movement, which fundamentally changed the conversation around sexual harassment and power dynamics in the workplace." }
    ],
    '50/50': [
        { question: "Is 50/50 based on a real-life story?", answer: "Yes, it is based on the real experience of the film's screenwriter, Will Reiser. He was diagnosed with a spinal tumor in his 20s, and Seth Rogen (who plays the best friend in the film) really was his best friend who helped him through it." },
        { question: "Did Joseph Gordon-Levitt actually shave his head?", answer: "Yes. The scene where his character shaves his head was completely unscripted and improvised. They only had one chance to film it, and Gordon-Levitt's nervous laughter and genuine reaction were kept in the final cut." },
        { question: "Why is the movie called 50/50?", answer: "The title refers to the survival odds Gordon-Levitt's character is given by his doctor. It explores the psychological weight of knowing you have an equal chance of living or dying." },
        { question: "How does the film balance comedy and drama?", answer: "The film uses Seth Rogen's character to provide 'gallows humor,' showing how friends often use jokes to cope with overwhelming tragedy. This balance made the film a critical success for its realistic portrayal of illness." }
    ],
    'On Golden Pond': [
        { question: "Was the tension between Henry and Jane Fonda real?", answer: "Yes. Like their characters, Henry and Jane Fonda had a notoriously strained relationship for decades. Jane actually bought the rights to the play specifically so she could act with her father and attempt to reconcile through the story." },
        { question: "Did the film win any major awards?", answer: "Yes, it won three Oscars, including Best Actor for Henry Fonda and Best Actress for Katharine Hepburn. It was Henry Fonda's only competitive Oscar, awarded just months before he passed away." },
        { question: "Where was the movie filmed?", answer: "It was filmed on location at Squam Lake in New Hampshire. The natural beauty of the lake and the presence of the loons were central to the film's theme of the peaceful, cyclical nature of life and death." },
        { question: "What is the meaning of the loons in the film?", answer: "The loons represent the passage of time and the enduring nature of Norman and Ethel's marriage. Their return to the lake every summer mirrors the couple's own return to their shared history and their approaching end." }
    ],
    'Mrs. Harris Goes to Paris': [
        { question: "Are the Dior dresses shown in the film real?", answer: "The production team was given exclusive access to the Dior heritage archives. While they couldn't use the original 1950s gowns, they were allowed to recreate them using the original sketches and fabric types to ensure 100% historical accuracy." },
        { question: "Is this a remake of an older film?", answer: "It is the third film adaptation of the 1958 novel 'Mrs. 'Arris Goes to Paris'. However, this version is widely considered the definitive one for its high production values and its focus on the 'fairy-tale' elements of the story." },
        { question: "Why is a cleaning lady chosen as the protagonist?", answer: "The story uses Mrs. Harris's humble background to contrast with the elitism of the fashion world. It highlights the theme that beauty and high art should be accessible to everyone, regardless of social class." },
        { question: "Was the film actually shot in Paris?", answer: "While many exterior scenes were shot in Paris, much of the interior 'House of Dior' was actually a massive set built in Budapest, Hungary, which allowed the crew to recreate the 1950s look without modern city interference." }
    ],
    'The Photograph': [
        { question: "What was the main inspiration for the story?", answer: "Director Stella Meghie was inspired by an old photograph of her own grandmother. She wanted to explore the 'secret lives' our parents lived before we knew them and how those past romances shape our current capacity to love." },
        { question: "Does the film follow two different timelines?", answer: "Yes. The narrative is split between the late 1980s, following a young photographer in Louisiana, and the present day in New York, where her daughter tries to piece together her mother's mysterious past." },
        { question: "Why is photography used as a central theme?", answer: "The film uses photography as a metaphor for memory—it captures a single moment of truth that can be misinterpreted by later generations. Mae's journey is about learning to see the 'full picture' of her mother's life." },
        { question: "Is the music in the film significant?", answer: "The soundtrack features a lush, jazz-heavy score by Robert Glasper. The music was designed to bridge the two timelines, creating a timeless, romantic atmosphere that connects the past and the present." }
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
        types.add(scene.type);
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PEACOCK_DRAMA_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A compelling drama on Peacock.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
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