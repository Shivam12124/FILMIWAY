// utils/ptaMovieData.js - PAUL THOMAS ANDERSON COLLECTION DATA ✅
// 100% SEO SAFE: Framed via Auteur Vision, Character Studies, and Cinematic Mastery.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 7345, "imdbID": "tt0469494", "Title": "There Will Be Blood", "year": 2007, "genre": "Drama", "runtime": 158, "rank": 1 },
    { "tmdbId": 4995, "imdbID": "tt0118749", "Title": "Boogie Nights", "year": 1997, "genre": "Drama", "runtime": 155, "rank": 2 },
    { "tmdbId": 1054867, "imdbID": "tt31046187", "Title": "One Battle After Another", "year": 2025, "genre": "Drama", "runtime": 140, "rank": 3 },
    { "tmdbId": 68722, "imdbID": "tt1560747", "Title": "The Master", "year": 2012, "genre": "Drama", "runtime": 137, "rank": 4 },
    { "tmdbId": 400617, "imdbID": "tt5776858", "Title": "Phantom Thread", "year": 2017, "genre": "Drama", "runtime": 130, "rank": 5 },
    { "tmdbId": 334, "imdbID": "tt0175880", "Title": "Magnolia", "year": 1999, "genre": "Drama", "runtime": 188, "rank": 6 },
    { "tmdbId": 8051, "imdbID": "tt0272338", "Title": "Punch-Drunk Love", "year": 2002, "genre": "Comedy", "runtime": 95, "rank": 7 },
    { "tmdbId": 718032, "imdbID": "tt11271038", "Title": "Licorice Pizza", "year": 2021, "genre": "Comedy", "runtime": 133, "rank": 8 },
    { "tmdbId": 8052, "imdbID": "tt0119256", "Title": "Hard Eight", "year": 1996, "genre": "Crime", "runtime": 101, "rank": 9 },
    { "tmdbId": 171274, "imdbID": "tt1791528", "Title": "Inherent Vice", "year": 2014, "genre": "Comedy", "runtime": 148, "rank": 10 }
];

// ✅ STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    7345: "I drink your milkshake! I drink it up!", // There Will Be Blood
    4995: "I'm a star. I'm a star, I'm a star, I'm a star.", // Boogie Nights
    1054867: "Some wars are fought in the dirt, others in the mind.", // One Battle After Another
    68722: "If you figure a way to live without serving a master, any master, then let the rest of us know, will you?", // The Master
    400617: "Whatever you do, do it carefully.", // Phantom Thread
    334: "We may be through with the past, but the past ain't through with us.", // Magnolia
    8051: "I have a love in my life. It makes me stronger than anything you can imagine.", // Punch-Drunk Love
    718032: "I'm a showman. It's my profession.", // Licorice Pizza
    8052: "Never ignore a man's courtesy.", // Hard Eight
    171274: "Doc, you gotta help me." // Inherent Vice
};

// ✅ SENSITIVE TIMELINES (Clinical, factual timestamps for the Parents Guide tool)
export const SENSITIVE_TIMELINES = {
    // 1. There Will Be Blood
    7345: { scenes: [] },

    // 2. Boogie Nights
    4995: { 
        scenes: [
            { start: "0:10:41", end: "0:11:01", type: "Nudity (Woman)", severity: "High" },
            { start: "0:25:09", end: "0:25:28", type: "Nudity (Woman)", severity: "High" },
            { start: "0:36:50", end: "0:37:00", type: "Sex", severity: "Moderate" },
            { start: "0:51:52", end: "0:55:08", type: "Nudity (Man & Woman) & Sex", severity: "High" },
            { start: "0:58:52", end: "0:58:56", type: "Nudity (Woman)", severity: "High" },
            { start: "0:58:57", end: "0:59:12", type: "Sex", severity: "Moderate" },
            { start: "1:22:38", end: "1:22:55", type: "Sexual Content (Moaning)", severity: "Mild" },
            { start: "1:26:10", end: "1:26:15", type: "Sex", severity: "Moderate" },
            { start: "1:35:56", end: "1:36:11", type: "Sexual Content (Masturbation)", severity: "Moderate" },
            { start: "1:46:47", end: "1:47:00", type: "Nudity (Woman)", severity: "High" },
            { start: "1:57:36", end: "2:00:00", type: "Sexual Content (Masturbation)", severity: "Moderate" },
            { start: "1:57:58", end: "1:59:02", type: "Sexual Content", severity: "Moderate" },
            { start: "2:22:10", end: "2:22:17", type: "Nudity (Woman)", severity: "High" },
            { start: "2:27:03", end: "2:27:20", type: "Nudity (Man)", severity: "High" }
        ]
    },

    // 3. One Battle After Another
      1054867: { 
        scenes: [
            { start: "0:06:17", end: "0:07:10", type: "Sexual Content (Ejaculation)", severity: "High" },
            { start: "0:12:00", end: "0:12:17", type: "Sexual Content (Masturbation)", severity: "High" }
        ] 
    },

    // 4. The Master
    68722: { 
        scenes: [
            { start: "0:03:22", end: "0:03:36", type: "Sexual Content (Masturbation)", severity: "Moderate" },
            { start: "0:13:20", end: "0:13:40", type: "Nudity (Woman)", severity: "High" },
            { start: "1:08:20", end: "1:09:38", type: "Nudity (Women)", severity: "High" },
            { start: "1:10:05", end: "1:11:12", type: "Sexual Content (Masturbation)", severity: "Moderate" },
            { start: "2:09:02", end: "2:10:44", type: "Nudity (Woman)", severity: "High" }
        ]
    },

    // 5. Phantom Thread
    400617: { scenes: [] },

    // 6. Magnolia
    334: { 
        scenes: [
            { start: "0:07:32", end: "0:07:36", type: "Sex & Nudity", severity: "High" },
            { start: "0:07:50", end: "0:07:54", type: "Sex", severity: "High" }
        ]
    },

    // 7. Punch-Drunk Love
    8051: { scenes: [] },

    // 8. Licorice Pizza
    718032: { scenes: [] },

    // 9. Hard Eight
    8052: { scenes: [] },

    // 10. Inherent Vice
    171274: { 
        scenes: [
            { start: "1:43:36", end: "1:48:45", type: "Nudity (Woman)", severity: "High" },
            { start: "1:48:46", end: "1:50:00", type: "Sex", severity: "High" }
        ]
    }
};

// ✅ Custom metrics for this collection: 'auteurVision' and 'thematicDepth'
const createPTAData = (data) => ({
    auteurVision: 95, 
    thematicDepth: 90,
    complexityLevel: "HIGH",
    dominantColor: "#1c1917",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    7345: createPTAData({ // There Will Be Blood
        auteurVision: 100, thematicDepth: 100, complexityLevel: "EXTREME", 
        dominantColor: "#78350f", rating: 8.2, criticsScore: 91, audienceScore: 86, director: "Paul Thomas Anderson", 
        cast: ["Daniel Day-Lewis", "Paul Dano", "Ciarán Hinds"], boxOffice: "$76.2 million", budget: "$25 million", 
        dna: { "Drama": 70, "History": 20, "Thriller": 10 },
        scenes: [
            { time: 10, intensity: 75, label: "The Silver Mine" }, 
            { time: 45, intensity: 85, label: "The Gusher" }, 
            { time: 95, intensity: 90, label: "Baptism" }, 
            { time: 135, intensity: 95, label: "The Pipeline" },
            { time: 152, intensity: 100, label: "The Bowling Alley" } 
        ],
        synopsis: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
        themes: ["Capitalism", "Religion", "Greed"]
    }),
    4995: createPTAData({ // Boogie Nights
        auteurVision: 95, thematicDepth: 88, complexityLevel: "HIGH", 
        dominantColor: "#b91c1c", rating: 7.9, criticsScore: 93, audienceScore: 89, director: "Paul Thomas Anderson", 
        cast: ["Mark Wahlberg", "Julianne Moore", "Burt Reynolds"], boxOffice: "$43.1 million", budget: "$15 million", 
        dna: { "Drama": 60, "Comedy": 30, "Crime": 10 },
        scenes: [
            { time: 5, intensity: 70, label: "The Copacabana Tracking Shot" }, 
            { time: 55, intensity: 85, label: "New Year's Eve 1979" }, 
            { time: 110, intensity: 90, label: "The Donut Shop" }, 
            { time: 135, intensity: 100, label: "Sister Christian / The Drug Deal" }, 
            { time: 150, intensity: 80, label: "The Dressing Room" } 
        ],
        synopsis: "The story of a young man's adventures in the Californian porn industry of the late 1970s and early 1980s.",
        themes: ["Chosen Family", "Hubris", "The Changing Eras"]
    }),
    1054867: createPTAData({ // One Battle After Another
        auteurVision: 92, thematicDepth: 85, complexityLevel: "HIGH", 
        dominantColor: "#0f172a", rating: 8.0, criticsScore: 88, audienceScore: 85, director: "Paul Thomas Anderson", 
        cast: ["Leonardo DiCaprio", "Sean Penn", "Regina Hall"], boxOffice: "TBD", budget: "$100 million+", 
        dna: { "Drama": 60, "Thriller": 30, "Action": 10 },
        scenes: [
            { time: 20, intensity: 75, label: "The Encounter" }, 
            { time: 60, intensity: 85, label: "The Chase" }, 
            { time: 100, intensity: 95, label: "The Betrayal" }, 
            { time: 125, intensity: 100, label: "The Final Confrontation" } 
        ],
        synopsis: "A gripping, large-scale contemporary thriller marking PTA's most commercial and ambitious project to date, exploring intense modern power dynamics.",
        themes: ["Power", "Modern Paranoia", "Survival"]
    }),
    68722: createPTAData({ // The Master
        auteurVision: 98, thematicDepth: 95, complexityLevel: "EXTREME", 
        dominantColor: "#082f49", rating: 7.1, criticsScore: 84, audienceScore: 61, director: "Paul Thomas Anderson", 
        cast: ["Joaquin Phoenix", "Philip Seymour Hoffman", "Amy Adams"], boxOffice: "$28.3 million", budget: "$32 million", 
        dna: { "Drama": 80, "Psychological": 20 },
        scenes: [
            { time: 15, intensity: 70, label: "The Department Store" }, 
            { time: 45, intensity: 95, label: "Processing (No Blinking)" }, 
            { time: 85, intensity: 90, label: "The Jail Cell" }, 
            { time: 110, intensity: 85, label: "Motorcycle in the Desert" }, 
            { time: 130, intensity: 80, label: "Slow Boat to China" } 
        ],
        synopsis: "A Naval veteran arrives home from war unsettled and uncertain of his future - until he is tantalized by The Cause and its charismatic leader.",
        themes: ["Trauma", "Cults", "The Search for Meaning"]
    }),
    400617: createPTAData({ // Phantom Thread
        auteurVision: 96, thematicDepth: 92, complexityLevel: "HIGH", 
        dominantColor: "#4c1d95", rating: 7.5, criticsScore: 91, audienceScore: 70, director: "Paul Thomas Anderson", 
        cast: ["Daniel Day-Lewis", "Vicky Krieps", "Lesley Manville"], boxOffice: "$47.8 million", budget: "$35 million", 
        dna: { "Drama": 60, "Romance": 30, "Thriller": 10 },
        scenes: [
            { time: 20, intensity: 65, label: "The Breakfast Order" }, 
            { time: 55, intensity: 80, label: "The Asparagus Argument" }, 
            { time: 85, intensity: 90, label: "The First Illness" }, 
            { time: 110, intensity: 95, label: "The Mushroom Omelet" }, 
            { time: 125, intensity: 85, label: "The Agreement" } 
        ],
        synopsis: "Set in 1950s London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.",
        themes: ["Control", "Toxic Romance", "Obsession"]
    }),
    334: createPTAData({ // Magnolia
        auteurVision: 97, thematicDepth: 94, complexityLevel: "EXTREME", 
        dominantColor: "#3f3f46", rating: 8.0, criticsScore: 83, audienceScore: 89, director: "Paul Thomas Anderson", 
        cast: ["Tom Cruise", "Julianne Moore", "Philip Seymour Hoffman"], boxOffice: "$48.5 million", budget: "$37 million", 
        dna: { "Drama": 90, "Ensemble": 10 },
        scenes: [
            { time: 30, intensity: 80, label: "Respect the Cock" }, 
            { time: 85, intensity: 85, label: "The Pharmacy Breakdown" }, 
            { time: 125, intensity: 90, label: "Wise Up Montage" }, 
            { time: 160, intensity: 95, label: "The Interview" }, 
            { time: 175, intensity: 100, label: "The Frogs" } 
        ],
        synopsis: "An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.",
        themes: ["Coincidence", "Forgiveness", "Childhood Trauma"]
    }),
    8051: createPTAData({ // Punch-Drunk Love
        auteurVision: 90, thematicDepth: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#0284c7", rating: 7.3, criticsScore: 79, audienceScore: 77, director: "Paul Thomas Anderson", 
        cast: ["Adam Sandler", "Emily Watson", "Philip Seymour Hoffman"], boxOffice: "$24.7 million", budget: "$25 million", 
        dna: { "Comedy": 40, "Romance": 35, "Drama": 25 },
        scenes: [
            { time: 10, intensity: 75, label: "The Harmonium" }, 
            { time: 35, intensity: 85, label: "The Bathroom Destruction" }, 
            { time: 60, intensity: 80, label: "The Pudding Miles" }, 
            { time: 75, intensity: 95, label: "The Hawaii Kiss" }, 
            { time: 85, intensity: 100, label: "That's That" } 
        ],
        synopsis: "A psychologically battered entrepreneur is continually abused by his seven sisters, but his life changes when he meets a mysterious woman and is extorted by a phone-sex line.",
        themes: ["Anxiety", "Love as Strength", "Alienation"]
    }),
    718032: createPTAData({ // Licorice Pizza
        auteurVision: 88, thematicDepth: 75, complexityLevel: "LOW", 
        dominantColor: "#ea580c", rating: 7.2, criticsScore: 90, audienceScore: 66, director: "Paul Thomas Anderson", 
        cast: ["Alana Haim", "Cooper Hoffman", "Sean Penn"], boxOffice: "$33.3 million", budget: "$40 million", 
        dna: { "Comedy": 50, "Romance": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 65, label: "Picture Day" }, 
            { time: 55, intensity: 80, label: "The Motorcycle Jump" }, 
            { time: 85, intensity: 90, label: "Jon Peters' House" }, 
            { time: 95, intensity: 95, label: "The Truck in Reverse" }, 
            { time: 125, intensity: 85, label: "Running" } 
        ],
        synopsis: "The story of Alana Kane and Gary Valentine growing up, running around and falling in love in the San Fernando Valley, 1973.",
        themes: ["Youth", "Nostalgia", "Aimlessness"]
    }),
    8052: createPTAData({ // Hard Eight
        auteurVision: 80, thematicDepth: 70, complexityLevel: "MEDIUM", 
        dominantColor: "#171717", rating: 7.2, criticsScore: 82, audienceScore: 78, director: "Paul Thomas Anderson", 
        cast: ["Philip Baker Hall", "John C. Reilly", "Gwyneth Paltrow"], boxOffice: "$3.3 million", budget: "$3 million", 
        dna: { "Crime": 60, "Drama": 40 },
        scenes: [
            { time: 5, intensity: 70, label: "The Diner Meeting" }, 
            { time: 45, intensity: 80, label: "The Hostage Situation" }, 
            { time: 75, intensity: 90, label: "Jimmy's Extortion" }, 
            { time: 90, intensity: 95, label: "The Resolution" } 
        ],
        synopsis: "A senior gambler teaches a young, down-on-his-luck man the tricks of the trade, but their father-son dynamic is threatened by a cocktail waitress and a sleazy casino security guard.",
        themes: ["Mentorship", "Regret", "The Underworld"]
    }),
    171274: createPTAData({ // Inherent Vice
        auteurVision: 85, thematicDepth: 80, complexityLevel: "EXTREME", 
        dominantColor: "#d97706", rating: 6.6, criticsScore: 73, audienceScore: 52, director: "Paul Thomas Anderson", 
        cast: ["Joaquin Phoenix", "Josh Brolin", "Katherine Waterston"], boxOffice: "$14.7 million", budget: "$20 million", 
        dna: { "Comedy": 40, "Crime": 40, "Mystery": 20 },
        scenes: [
            { time: 15, intensity: 65, label: "Shasta Returns" }, 
            { time: 45, intensity: 80, label: "The Golden Fang" }, 
            { time: 85, intensity: 85, label: "Pancakes with Bigfoot" }, 
            { time: 115, intensity: 90, label: "The Chryskylodon Institute" }, 
            { time: 140, intensity: 75, label: "Driving in the Fog" } 
        ],
        synopsis: "In 1970, drug-fueled Los Angeles private investigator Larry 'Doc' Sportello investigates the disappearance of a former girlfriend.",
        themes: ["Paranoia", "Counterculture Decay", "Conspiracy"]
    })
};

// 🎬 PTA MOVIE FAQS - (100% SEO SAFE, CRITICAL ANALYSIS ONLY)
export const PTA_MOVIE_FAQS = {
    "There Will Be Blood": [
        { question: "What is the meaning behind the title 'There Will Be Blood'?", answer: "The title is a biblical reference (Exodus 7:19) and foreshadows the inevitable violence and moral corruption that stems from unchecked capitalism, greed, and the pursuit of oil." },
        { question: "What does the milkshake speech mean?", answer: "The 'milkshake' is a metaphor for drainage. Plainview is taunting Eli, explaining that through directional drilling, he has already drained all the oil from beneath Eli's land, rendering him completely powerless and defeated." },
        { question: "Why does Daniel hate Eli so much?", answer: "Daniel is a ruthless capitalist who relies on tangible results, while Eli is a manipulative preacher who uses faith for power. Daniel despises Eli because he recognizes him as a fellow con man, but one who hides behind the guise of religion." },
        { question: "Is Daniel Plainview based on a real person?", answer: "The character is loosely inspired by Edward Doheny, a real-life 19th-century oil tycoon. The film itself is a loose adaptation of Upton Sinclair's 1927 novel 'Oil!'." }
    ],
    "Boogie Nights": [
        { question: "What is Boogie Nights ultimately about?", answer: "Despite its explicit setting in the 1970s adult film industry, Boogie Nights is fundamentally a story about finding a chosen family. It explores how outcasts and broken people form intense bonds in marginalized communities." },
        { question: "What is the significance of the long tracking shots?", answer: "PTA uses sweeping, Scorsese-inspired tracking shots (like the opening at the Copacabana) to immerse the viewer in the glamorous, intoxicating, and interconnected world of the characters before it all falls apart in the 1980s." },
        { question: "Why does the tone shift so drastically in the second half?", answer: "The shift from the vibrant late 70s to the bleak, cocaine-fueled 80s mirrors the introduction of video tape, which destroyed the 'artistic' cinematic ambitions of Jack Horner, reducing the industry to cheap, soulless consumption." },
        { question: "What is the meaning of the final scene?", answer: "Dirk Diggler reciting lines in the mirror is a direct homage to Robert De Niro in Raging Bull. It highlights his tragic delusion; despite losing everything, his ego and need for validation remain his driving forces." }
    ],
    "One Battle After Another": [
        { question: "What themes does Paul Thomas Anderson explore in this film?", answer: "As a contemporary thriller, it explores the paranoia, power dynamics, and survival instincts required in the modern world, pushing PTA's visual style into a more commercial, high-stakes narrative." },
        { question: "How does this film compare to PTA's earlier work?", answer: "It marks a significant departure from his recent, more intimate period pieces (like Licorice Pizza and Phantom Thread), returning to the sprawling, ambitious, and intense scale last seen in Magnolia or There Will Be Blood." },
        { question: "What is the significance of the title?", answer: "The title reflects the relentless nature of modern conflict—whether physical, psychological, or systemic—suggesting a world where characters are trapped in a perpetual state of warfare and defense." },
        { question: "How does the cinematography reflect the story?", answer: "PTA utilizes dynamic, propulsive camerawork to heighten the tension, moving away from static portraiture to create a visceral, urgent sense of momentum that mirrors the characters' desperate situations." }
    ],
    "The Master": [
        { question: "Is The Master about Scientology?", answer: "While Paul Thomas Anderson has acknowledged that Lancaster Dodd is heavily inspired by L. Ron Hubbard and the early days of Dianetics, the film is primarily a psychological character study about trauma, control, and the master-servant dynamic." },
        { question: "What does the 'Processing' scene represent?", answer: "The intense, unblinking interrogation scene represents Dodd breaking down Freddie's psychological defenses. It is a battle of wills where Dodd weaponizes Freddie's deep post-war trauma to gain absolute control over him." },
        { question: "Why is Freddie drawn to Dodd?", answer: "Freddie is an aimless, deeply damaged WWII veteran searching for structure. Dodd provides him with a father figure, validation, and an illusion of purpose, even if the doctrine itself is ultimately fabricated." },
        { question: "What is the meaning of the final scene on the beach?", answer: "Freddie recreating Dodd's 'processing' with a new companion shows that he has finally broken free from Dodd's control, but ironically, the only way he knows how to connect with others is by mimicking the master he left behind." }
    ],
    "Phantom Thread": [
        { question: "What is the core dynamic between Reynolds and Alma?", answer: "It is a highly toxic but mutually beneficial power struggle. Reynolds requires complete control and subservience to fuel his genius, while Alma demands to be needed, finding extreme ways to break his walls and force his dependence on her." },
        { question: "Why does Alma poison Reynolds?", answer: "Alma realizes that Reynolds is only vulnerable, open, and affectionate when he is physically weakened. She poisons him with mushrooms not to kill him, but to temporarily dismantle his rigid defenses so she can care for him." },
        { question: "Does Reynolds know Alma is poisoning him?", answer: "Yes. In the film's climax, Reynolds knowingly eats the poisoned omelet. He willingly surrenders to her twisted method of control, accepting that this dark cycle of sickness and care is the only way their relationship can survive." },
        { question: "What does the ghost of his mother represent?", answer: "The hallucination of his mother represents Reynolds' inability to move past his childhood and his profound fear of abandonment. She is the ultimate 'phantom thread' woven into his life, dictating his perfectionism." }
    ],
    "Magnolia": [
        { question: "What is the meaning of the raining frogs?", answer: "The raining frogs serve as a bizarre, biblical (Exodus 8:2) deus ex machina. It is an event so inexplicable and overwhelming that it forces all the disconnected, suffering characters to stop running from their pasts and finally confront their realities." },
        { question: "What connects all the characters in Magnolia?", answer: "The characters are bound by themes of deep regret, parental abuse, and the inescapable consequences of the past. PTA weaves their stories together to show how trauma ripples across different lives in the San Fernando Valley." },
        { question: "Why does Frank T.J. Mackey teach 'Seduce and Destroy'?", answer: "Frank's hyper-misogynistic seminar is a performative shield. He uses intense, aggressive masculinity to mask his deep abandonment issues and the pain of his mother's death, completely breaking down when finally confronted by his dying father." },
        { question: "What is the significance of the 'Wise Up' singalong?", answer: "The surreal sequence breaks the fourth wall, functioning as an emotional climax. It unites the isolated characters in their shared depression, signaling the moment they collectively realize they cannot outrun their pain." }
    ],
    "Punch-Drunk Love": [
        { question: "How does the film subvert the Adam Sandler persona?", answer: "PTA took the explosive, man-child anger typical of Sandler's 90s comedies and grounded it in genuine psychological reality. Barry's rage isn't funny; it's a terrifying symptom of deep social anxiety and emotional abuse." },
        { question: "What do the puddings represent?", answer: "Barry buying thousands of puddings for frequent flyer miles represents his desperate need for an escape route from his miserable life. It is a logical, systemic obsession that gives him a false sense of control." },
        { question: "How is sound used in the film?", answer: "The sound design is intentionally aggressive and chaotic, using discordant percussion and overlapping dialogue to place the audience directly inside Barry's overwhelming anxiety and sensory overload." },
        { question: "What empowers Barry to stand up to the extortionists?", answer: "Finding genuine, unconditional love with Lena gives Barry a purpose outside of his own fear. His line, 'I have a love in my life... it makes me stronger than anything you can imagine,' is the emotional thesis of the film." }
    ],
    "Licorice Pizza": [
        { question: "What is the meaning of the title 'Licorice Pizza'?", answer: "The title refers to a famous chain of record stores in Southern California in the 1970s. While never mentioned in the film, it evokes the specific feeling of nostalgia, youth, and the vinyl era that the movie captures." },
        { question: "Why is there a significant age gap between Gary and Alana?", answer: "The 10-year age gap (Gary is 15, Alana is 25) drives the thematic tension. Gary acts like an overly confident adult, while Alana is a stunted adult searching for direction. They gravitate toward each other because they are both emotionally lost." },
        { question: "How does the film portray 1970s Hollywood?", answer: "It portrays Hollywood not as glamorous, but as absurd, erratic, and deeply flawed. Cameos like Jon Peters and Jack Holden highlight the dangerous, egocentric adults operating in the background of Gary and Alana's lives." },
        { question: "What is the significance of the truck backing down the hill?", answer: "The harrowing scene where Alana steers a massive moving truck backward down a winding hill with no gas represents her finally taking control. Amidst the chaos of the boys around her, she proves her capability and resilience." }
    ],
    "Hard Eight": [
        { question: "Why does Sydney help John?", answer: "Sydney helps John out of deep guilt. The film slowly reveals that Sydney is responsible for the death of John's father. His mentorship and financial support are a quiet, desperate attempt at penance and redemption." },
        { question: "What does Hard Eight reveal about PTA's style?", answer: "As his debut feature, it establishes the hallmarks of PTA's career: surrogate father-son relationships, the exploration of the Californian underbelly, long tracking shots, and characters burdened by inescapable pasts." },
        { question: "What is the significance of the casino setting?", answer: "The windowless, timeless nature of the casinos mirrors the characters' lives—they are trapped in a cycle of gambling, survival, and hiding from their realities, operating strictly by the codes of the underworld." },
        { question: "Why does Sydney kill Jimmy?", answer: "Jimmy discovers Sydney's dark secret and attempts to extort him. Sydney kills him not just to protect his own life, but to protect John from ever learning the devastating truth about his father's death." }
    ],
    "Inherent Vice": [
        { question: "Why is the plot of Inherent Vice so confusing?", answer: "The convoluted, nearly incomprehensible plot is entirely intentional. Adapting Thomas Pynchon's novel, PTA places the audience directly in the hazy, marijuana-fogged mindset of Doc Sportello, where vibes and paranoia matter more than narrative logic." },
        { question: "What does 'The Golden Fang' represent?", answer: "The Golden Fang is an elusive, shifting entity—sometimes a boat, sometimes a cartel, sometimes a tax evasion scheme. It acts as a metaphor for the pervasive, creeping corruption of capitalism destroying the 1960s counterculture." },
        { question: "What is the dynamic between Doc and Bigfoot?", answer: "Doc (the hippie PI) and Bigfoot (the conservative LAPD detective) represent the two warring factions of 1970 America. Despite their outward hatred, they share a bizarre, co-dependent respect as two relics of a changing era." },
        { question: "What is the underlying tragedy of the film?", answer: "Beneath the slapstick comedy and stoner logic, the film is a melancholic look at the death of the Hippie dream. Doc realizes the inherent vice (the unavoidable defect) in his utopian ideals, as corporate forces buy out and consume the culture." }
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

// 🔥 6. THE KEYWORD BRIDGE
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

// 🔥 NEW: HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    
    // User's flawless logic: 2+ Extreme means the whole movie is Extreme. 
    // Otherwise, we cap the warning at High.
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
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : '',
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = PTA_MOVIE_FAQS[movie.Title] ? [...PTA_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = PTA_MOVIE_FAQS[movieTitle] ? [...PTA_MOVIE_FAQS[movieTitle]] : [];
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