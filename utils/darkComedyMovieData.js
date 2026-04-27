// utils/darkComedyMovieData.js - DARK COMEDY COLLECTION DATA ✅
// Movies exploring bleak humor, deep cynicism, and the absurdity of the human condition.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 935, "imdbID": "tt0057012", "Title": "Dr. Strangelove", "year": 1964, "genre": "Comedy", "runtime": 95, "rank": 1 },
    { "tmdbId": 10774, "imdbID": "tt0074958", "Title": "Network", "year": 1976, "genre": "Drama", "runtime": 121, "rank": 2 },
    { "tmdbId": 674324, "imdbID": "tt11813216", "Title": "The Banshees of Inisherin", "year": 2022, "genre": "Comedy", "runtime": 114, "rank": 3 },
    { "tmdbId": 8321, "imdbID": "tt0780536", "Title": "In Bruges", "year": 2008, "genre": "Comedy", "runtime": 107, "rank": 4 },
    { "tmdbId": 13446, "imdbID": "tt0094336", "Title": "Withnail and I", "year": 1987, "genre": "Comedy", "runtime": 107, "rank": 5 },
    { "tmdbId": 402897, "imdbID": "tt4686844", "Title": "The Death of Stalin", "year": 2017, "genre": "Comedy", "runtime": 107, "rank": 6 },
    { "tmdbId": 246741, "imdbID": "tt3416742", "Title": "What We Do in the Shadows", "year": 2014, "genre": "Comedy", "runtime": 86, "rank": 7 },
    { "tmdbId": 2757, "imdbID": "tt0268126", "Title": "Adaptation.", "year": 2002, "genre": "Comedy", "runtime": 115, "rank": 8 },
    { "tmdbId": 9451, "imdbID": "tt0126886", "Title": "Election", "year": 1999, "genre": "Comedy", "runtime": 103, "rank": 9 },
    { "tmdbId": 4944, "imdbID": "tt0887883", "Title": "Burn After Reading", "year": 2008, "genre": "Comedy", "runtime": 96, "rank": 10 }
];

// ✅ REVISED STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    935: "Gentlemen, you can't fight in here! This is the War Room!", // Dr. Strangelove
    10774: "I'm as mad as hell, and I'm not going to take this anymore!", // Network
    674324: "I just don't like you no more.", // The Banshees of Inisherin
    8321: "It's a fairytale town, isn't it?", // In Bruges
    13446: "We want the finest wines available to humanity, we want them here, and we want them now!", // Withnail and I
    402897: "I'm exhausted. I can't remember who's alive and who's dead.", // The Death of Stalin
    246741: "Leave me to do my dark bidding on the internet!", // What We Do in the Shadows
    2757: "There are no rules. And those are the rules.", // Adaptation.
    9451: "You can't interfere with destiny. That's why it's destiny.", // Election
    4944: "What did we learn, Palmer? I don't know, sir." // Burn After Reading
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data)
export const SENSITIVE_TIMELINES = {
    // 1. Dr. Strangelove
    935: { scenes: [] }, // Cleared speculative data

    // 2. Network
    10774: {
        scenes: [
            { start: "1:13:25", end: "1:14:52", type: "Nudity (Woman) & Sexual Content", severity: "Moderate" }
        ]
    },

    // 3. The Banshees of Inisherin
    674324: { 
        scenes: [
            { start: "0:14:52", end: "0:15:24", type: "Nudity (Man)", severity: "High" }
        ] 
    },

    // 4. In Bruges
    8321: { scenes: [] }, // Cleared speculative data

    // 5. Withnail and I
    13446: { scenes: [] }, // Cleared speculative data

    // 6. The Death of Stalin
    402897: { scenes: [] },

    // 7. What We Do in the Shadows
    246741: { scenes: [] }, // Cleared speculative data

    // 8. Adaptation.
    2757: {
        scenes: [
            { start: "0:30:32", end: "0:30:35", type: "Nudity (Woman)", severity: "High" },
            { start: "0:47:13", end: "0:47:15", type: "Sex", severity: "Moderate" },
            { start: "0:51:51", end: "0:52:03", type: "Nudity (Women / Images)", severity: "High" },
            { start: "0:53:50", end: "0:54:02", type: "Sex", severity: "Moderate" },
            { start: "1:30:14", end: "1:30:21", type: "Sex", severity: "Mild" },
            { start: "1:30:24", end: "1:31:02", type: "Partial Nudity (Man)", severity: "Moderate" }
        ]
    },

    // 9. Election
    9451: {
        scenes: [
            { start: "0:20:20", end: "0:20:42", type: "Sex", severity: "High" },
            { start: "0:30:09", end: "0:30:17", type: "Sex", severity: "Moderate" },
            { start: "0:32:58", end: "0:33:30", type: "Sex", severity: "Moderate" },
            { start: "0:35:40", end: "0:36:25", type: "Sex", severity: "Moderate" }
        ]
    },

    // 10. Burn After Reading
    4944: {
        scenes: [
            { start: "0:22:40", end: "0:22:49", type: "Sex", severity: "Moderate" },
            { start: "0:53:42", end: "0:54:05", type: "Sexual Content (Sex Toy Interaction)", severity: "High" }
        ]
    }
};
// ✅ MAPPING NOTE:
// cynicismLevel = Satirical Bite / Ideological Bleakness
// absurdityLevel = Surreal/Awkward Humor
// visceralImpact = Shock Value / Emotional Weight

const createMovieData = (data) => ({
    cynicismLevel: 85, 
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Dr. Strangelove
    935: createMovieData({ 
        cynicismLevel: 100, absurdityLevel: 95, visceralImpact: 80, complexityLevel: "HIGH", 
        dominantColor: "#171717", rating: 8.4, criticsScore: 98, audienceScore: 94, director: "Stanley Kubrick", 
        cast: ["Peter Sellers", "George C. Scott", "Sterling Hayden"], boxOffice: "$9.4 million", budget: "$1.8 million", 
        dna: { Comedy: 50, War: 30, Thriller: 20 },
        scenes: [
            { time: 15, intensity: 70, label: "Fluoridation of Water", color: "#3f3f46" },
            { time: 45, intensity: 85, label: "The War Room Argument", color: "#171717" },
            { time: 70, intensity: 90, label: "Phone Call to Soviet Premier", color: "#525252" },
            { time: 85, intensity: 95, label: "Riding the Bomb", color: "#b91c1c" },
            { time: 92, intensity: 100, label: "We'll Meet Again", color: "#000000" }
        ],
        synopsis: "An unhinged American general orders a preemptive nuclear strike on the Soviet Union, triggering a frantic, absurd scramble by politicians and military brass in the War Room to prevent total global annihilation. The undisputed apex of political satire.",
        themes: ["Nuclear Paranoia", "Military Incompetence", "Existential Absurdity"]
    }),
    // 2. Network
    10774: createMovieData({ 
        cynicismLevel: 100, absurdityLevel: 75, visceralImpact: 90, complexityLevel: "HIGH", 
        dominantColor: "#1e3a8a", rating: 8.1, criticsScore: 92, audienceScore: 89, director: "Sidney Lumet", 
        cast: ["Faye Dunaway", "William Holden", "Peter Finch"], boxOffice: "$23.7 million", budget: "$3.8 million",
        dna: { Drama: 70, Comedy: 20, Satire: 10 },
        scenes: [
            { time: 10, intensity: 75, label: "The Assassination Threat", color: "#1e3a8a" },
            { time: 35, intensity: 100, label: "Mad As Hell", color: "#b91c1c" },
            { time: 65, intensity: 85, label: "The Sybil Prophet", color: "#1e40af" },
            { time: 95, intensity: 95, label: "Corporate Cosmology", color: "#0f172a" },
            { time: 115, intensity: 100, label: "The Ratings Spike", color: "#000000" }
        ],
        synopsis: "When a veteran news anchor announces he will kill himself on live television due to poor ratings, the cynical network executives realize his unhinged rants are a massive ratings draw and exploit his mental breakdown for corporate profit.",
        themes: ["Media Manipulation", "Corporate Greed", "Public Apathy"]
    }),
    // 3. The Banshees of Inisherin
    674324: createMovieData({ 
        cynicismLevel: 90, absurdityLevel: 70, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#14532d", rating: 7.7, criticsScore: 96, audienceScore: 75, director: "Martin McDonagh", 
        cast: ["Colin Farrell", "Brendan Gleeson", "Kerry Condon"], boxOffice: "$49.3 million", budget: "$20 million",
        dna: { Drama: 60, Comedy: 40 },
        scenes: [
            { time: 15, intensity: 50, label: "The Silent Treatment", color: "#14532d" },
            { time: 40, intensity: 75, label: "The Ultimatum", color: "#065f46" },
            { time: 65, intensity: 90, label: "The First Finger", color: "#991b1b" },
            { time: 95, intensity: 100, label: "The Donkey", color: "#7f1d1d" },
            { time: 110, intensity: 95, label: "The Burning", color: "#dc2626" }
        ],
        synopsis: "On a remote island off the coast of Ireland in 1923, two lifelong friends find themselves at an impasse when one abruptly ends their relationship, leading to escalating and wildly devastating consequences for the entire tight-knit community.",
        themes: ["Male Loneliness", "Existential Despair", "Stubborn Pride"]
    }),
    // 4. In Bruges
    8321: createMovieData({ 
        cynicismLevel: 80, absurdityLevel: 85, visceralImpact: 88, complexityLevel: "MEDIUM", 
        dominantColor: "#0f172a", rating: 7.9, criticsScore: 84, audienceScore: 87, director: "Martin McDonagh", 
        cast: ["Colin Farrell", "Brendan Gleeson", "Ralph Fiennes"], boxOffice: "$34.5 million", budget: "$15 million",
        dna: { Comedy: 50, Crime: 30, Drama: 20 },
        scenes: [
            { time: 20, intensity: 60, label: "Touring Bruges", color: "#334155" },
            { time: 45, intensity: 75, label: "The Midget Scene", color: "#1e293b" },
            { time: 65, intensity: 90, label: "The Park Bench", color: "#0f172a" },
            { time: 85, intensity: 95, label: "Harry Arrives", color: "#b91c1c" },
            { time: 100, intensity: 100, label: "The Bell Tower", color: "#000000" }
        ],
        synopsis: "Guilt-stricken after a hit gone wrong, a rookie hitman and his veteran partner are ordered by their ruthless boss to lay low in the picturesque, medieval Belgian city of Bruges, leading to surreal encounters and an inevitable violent climax.",
        themes: ["Guilt and Purgatory", "Morality Codes", "Absurdity of Violence"]
    }),
    // 5. Withnail and I
    13446: createMovieData({ 
        cynicismLevel: 88, absurdityLevel: 90, visceralImpact: 70, complexityLevel: "MEDIUM", 
        dominantColor: "#713f12", rating: 7.6, criticsScore: 94, audienceScore: 88, director: "Bruce Robinson", 
        cast: ["Richard E. Grant", "Paul McGann", "Richard Griffiths"], boxOffice: "$1.5 million", budget: "$1.1 million",
        dna: { Comedy: 70, Drama: 30 },
        scenes: [
            { time: 10, intensity: 50, label: "The Lighter Fluid", color: "#713f12" },
            { time: 35, intensity: 70, label: "Arriving at the Cottage", color: "#422006" },
            { time: 55, intensity: 85, label: "The Bull in the Field", color: "#a16207" },
            { time: 75, intensity: 90, label: "Uncle Monty's Advance", color: "#171717" },
            { time: 100, intensity: 95, label: "Hamlet in the Rain", color: "#3f3f46" }
        ],
        synopsis: "In 1969 London, two unemployed, heavily intoxicated actors decide to leave their squalid flat for a rejuvenating holiday in the countryside, only to face dreadful weather, hostile locals, and their own deteriorating friendship.",
        themes: ["End of an Era", "Substance Abuse", "Failed Ambition"]
    }),
    // 6. The Death of Stalin
    402897: createMovieData({ 
        cynicismLevel: 95, absurdityLevel: 100, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#7f1d1d", rating: 7.2, criticsScore: 95, audienceScore: 78, director: "Armando Iannucci", 
        cast: ["Steve Buscemi", "Simon Russell Beale", "Jason Isaacs"], boxOffice: "$24.6 million", budget: "$13 million",
        dna: { Comedy: 60, History: 30, Drama: 10 },
        scenes: [
            { time: 15, intensity: 80, label: "Finding the Body", color: "#7f1d1d" },
            { time: 40, intensity: 75, label: "The Committee Meeting", color: "#3f3f46" },
            { time: 65, intensity: 90, label: "Zhukov Arrives", color: "#b91c1c" },
            { time: 85, intensity: 95, label: "The Funeral", color: "#171717" },
            { time: 100, intensity: 100, label: "The Execution", color: "#000000" }
        ],
        synopsis: "Following the sudden collapse of Soviet dictator Joseph Stalin, his inner circle of ministers frantically scramble, backstab, and conspire against one another in a chaotic, darkly hilarious power vacuum to determine the next leader of the USSR.",
        themes: ["Political Terror", "Incompetence", "Power Struggles"]
    }),
    // 7. What We Do in the Shadows
    246741: createMovieData({ 
        cynicismLevel: 60, absurdityLevel: 100, visceralImpact: 65, complexityLevel: "LOW", 
        dominantColor: "#4c1d95", rating: 7.6, criticsScore: 96, audienceScore: 86, director: "Jemaine Clement, Taika Waititi", 
        cast: ["Taika Waititi", "Jemaine Clement", "Jonathan Brugh"], boxOffice: "$6.9 million", budget: "$1.6 million",
        dna: { Comedy: 70, Horror: 30 },
        scenes: [
            { time: 10, intensity: 50, label: "The Flat Meeting", color: "#4c1d95" },
            { time: 30, intensity: 70, label: "Nick is Turned", color: "#7e22ce" },
            { time: 55, intensity: 85, label: "Werewolves, not Swearwolves", color: "#1e3a8a" },
            { time: 75, intensity: 80, label: "The Unholy Masquerade", color: "#b91c1c" },
            { time: 82, intensity: 90, label: "Petyr's Fate", color: "#171717" }
        ],
        synopsis: "A mockumentary following the lives of four vampire roommates living in modern-day Wellington, New Zealand, as they struggle with mundane household chores, club bouncers, and adapting to the 21st century.",
        themes: ["Mundane Supernatural", "Roommate Dynamics", "Outdated Traditions"]
    }),
    // 8. Adaptation.
    2757: createMovieData({ 
        cynicismLevel: 80, absurdityLevel: 95, visceralImpact: 75, complexityLevel: "EXTREME", 
        dominantColor: "#065f46", rating: 7.7, criticsScore: 91, audienceScore: 84, director: "Spike Jonze", 
        cast: ["Nicolas Cage", "Meryl Streep", "Chris Cooper"], boxOffice: "$32.3 million", budget: "$19 million",
        dna: { Comedy: 50, Drama: 50 },
        scenes: [
            { time: 15, intensity: 60, label: "The Writer's Block", color: "#065f46" },
            { time: 40, intensity: 75, label: "Donald's Script", color: "#047857" },
            { time: 70, intensity: 85, label: "Stalking Orlean", color: "#1e3a8a" },
            { time: 95, intensity: 95, label: "The Swamp Scene", color: "#b91c1c" },
            { time: 105, intensity: 100, label: "The Third Act Shift", color: "#000000" }
        ],
        synopsis: "A neurotic, self-loathing screenwriter named Charlie Kaufman struggles to adapt a non-fiction book about orchids into a movie, eventually writing his own pathetic struggle and his fictional twin brother directly into the screenplay.",
        themes: ["Creative Agony", "Meta-Narrative", "Self-Loathing"]
    }),
    // 9. Election
    9451: createMovieData({ 
        cynicismLevel: 90, absurdityLevel: 75, visceralImpact: 70, complexityLevel: "MEDIUM", 
        dominantColor: "#b91c1c", rating: 7.3, criticsScore: 92, audienceScore: 78, director: "Alexander Payne", 
        cast: ["Matthew Broderick", "Reese Witherspoon", "Chris Klein"], boxOffice: "$17.2 million", budget: "$25 million",
        dna: { Comedy: 70, Drama: 30 },
        scenes: [
            { time: 20, intensity: 60, label: "Recruiting Paul", color: "#b91c1c" },
            { time: 45, intensity: 75, label: "Tammy's Campaign", color: "#1e3a8a" },
            { time: 65, intensity: 85, label: "The Posters", color: "#dc2626" },
            { time: 85, intensity: 95, label: "The Trash Can", color: "#7f1d1d" },
            { time: 95, intensity: 90, label: "The Escape to NY", color: "#3f3f46" }
        ],
        synopsis: "An overly involved, resentful high school civics teacher decides to sabotage the student council presidential campaign of a relentlessly ambitious and ruthless overachiever, leading to the total destruction of his own personal life.",
        themes: ["Ambition", "Spite", "Petty Politics"]
    }),
    // 10. Burn After Reading
    4944: createMovieData({ 
        cynicismLevel: 95, absurdityLevel: 90, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 7.0, criticsScore: 78, audienceScore: 64, director: "Joel Coen, Ethan Coen", 
        cast: ["Brad Pitt", "Frances McDormand", "George Clooney"], boxOffice: "$163.7 million", budget: "$37 million",
        dna: { Comedy: 60, Crime: 20, Thriller: 20 },
        scenes: [
            { time: 20, intensity: 60, label: "The Found CD", color: "#3f3f46" },
            { time: 45, intensity: 80, label: "The Blackmail Attempt", color: "#1e3a8a" },
            { time: 70, intensity: 90, label: "The Russian Embassy", color: "#b91c1c" },
            { time: 80, intensity: 100, label: "The Closet Scene", color: "#7f1d1d" },
            { time: 90, intensity: 95, label: "The CIA Briefing", color: "#171717" }
        ],
        synopsis: "When a disk containing the memoirs of a fired CIA analyst falls into the hands of two profoundly stupid gym employees, they attempt to sell the information, setting off a cascading chain reaction of paranoia, adultery, and meaningless violence.",
        themes: ["Idiocy", "Pointless Violence", "Miscommunication"]
    })
};

export const DARK_COMEDY_MOVIE_FAQS = {
    'Dr. Strangelove': [
        { question: "Why is Dr. Strangelove considered the greatest dark comedy?", answer: "Kubrick managed to take the most terrifying prospect in human history—global thermonuclear annihilation—and treat it with cold, bureaucratic absurdity. By showing the men in charge as petty, incompetent, and sexually frustrated, he exposed the madness of the Cold War arms race." },
        { question: "What does the ending of Dr. Strangelove mean?", answer: "The film ends with a montage of nuclear explosions set to the cheerful WWII song 'We'll Meet Again.' It is the ultimate cynical punchline: humanity's destruction wasn't caused by a grand villain, but by bruised male egos and mechanical errors, and there is absolutely no hope left." },
        { question: "Why did Peter Sellers play three different roles?", answer: "The studio, Columbia Pictures, believed the success of Kubrick's previous film 'Lolita' was due to Sellers playing multiple roles, and made it a condition of funding. Sellers flawlessly played Group Captain Mandrake, President Muffley, and the titular Dr. Strangelove." },
        { question: "What is the significance of the characters' names?", answer: "Nearly every name is a crude sexual innuendo (Jack D. Ripper, Merkin Muffley, Buck Turgidson, Bat Guano). Kubrick used this to symbolically link the aggressive, phallic nature of the military-industrial complex to suppressed sexual inadequacy." }
    ],
    'Network': [
        { question: "What makes Network a dark comedy?", answer: "It is a blistering, razor-sharp satire of television news that predicted the future of media. The 'comedy' comes from the sheer, shameless sociopathy of the executives, who casually discuss market shares, syndication, and assassination in the same breath." },
        { question: "What is the meaning of the 'Mad as Hell' speech?", answer: "Howard Beale’s speech represents the boiling over of public frustration regarding inflation, crime, and societal decay in the 1970s. However, the dark irony is that the network instantly packages and sells his authentic anti-establishment rage as a sponsored TV commodity." },
        { question: "Why do they assassinate Howard Beale at the end?", answer: "Beale’s ratings begin to drop because he starts telling depressing truths about corporate control rather than screaming angry catchphrases. Because he is legally bound by contract and cannot be fired, the network executives ruthlessly order his on-air assassination to boost their viewership one last time." },
        { question: "How did Network predict the future of television?", answer: "Written by Paddy Chayefsky in 1976, the film accurately predicted the rise of anger-based punditry, reality television, the blending of news and entertainment, and the consolidation of media into massive, soulless corporate conglomerates." }
    ],
    'The Banshees of Inisherin': [
        { question: "Why did Colm cut off his own fingers?", answer: "Colm's self-mutilation is an act of extreme, absurd stubbornness. Terrified of dying without leaving a musical legacy, he views Pádraic's mundane chatter as a literal thief of his time. Cutting off his fiddling fingers is a drastic, irrational threat to prove how serious he is about isolation." },
        { question: "What is the metaphor behind the feud in Banshees of Inisherin?", answer: "The petty, escalating, and ultimately destructive feud between two former friends on a small island serves as a direct micro-allegory for the Irish Civil War raging on the mainland in the background—a conflict where brothers fought brothers over ideological stubbornness." },
        { question: "Does Pádraic become a bad person at the end?", answer: "Pádraic loses his 'niceness.' The film explores how cruelty breeds cruelty. By the end, the innocent, simple man has been hardened by grief and rejection, burning down Colm's house and embracing the permanent hostility that Colm initiated." },
        { question: "Who is Mrs. McCormick in the movie?", answer: "Mrs. McCormick acts as the titular 'Banshee'—a mythological Irish spirit that heralds death. She lurks around the edges of the island, accurately prophesying the doom and tragedy that will befall the characters." }
    ],
    'In Bruges': [
        { question: "Why is In Bruges considered a dark comedy?", answer: "It places a deeply tragic, suicidal hitman narrative inside a charming, picturesque tourist town, populated by racist dwarves, blindingly angry bosses, and bizarre tourists. The rapid-fire, profane dialogue constantly undercuts the heavy existential dread." },
        { question: "What does the city of Bruges represent?", answer: "Bruges acts as a literal Purgatory. For the cultured Ken, it is a peaceful place of reflection and beauty before judgment. For the impatient, guilt-ridden Ray, being trapped in a 'fairytale town' with nothing to do is a literal version of Hell." },
        { question: "Why does Harry kill himself at the end?", answer: "Harry operates by an absurd, rigid moral code: you do not kill children. When he accidentally shoots a dwarf dressed as a schoolboy in the fog, he strictly adheres to his own twisted principles and immediately executes himself on the spot." },
        { question: "What happens to Ray at the end of In Bruges?", answer: "The ending is left ambiguous. Ray is loaded onto an ambulance, bleeding out, finally realizing that he actually wants to live and seek redemption. The screen cuts to black mid-sentence, leaving his survival up to the audience." }
    ],
    'Withnail and I': [
        { question: "What is the core theme of Withnail and I?", answer: "It is a hilarious but deeply melancholic eulogy for the 1960s. Set in 1969, the two actors represent the dying gasp of the bohemian, counter-culture dream, realizing that the party is over and they are left with nothing but hangovers and poverty." },
        { question: "Who is 'I' in the movie?", answer: "The 'I' character (played by Paul McGann) is named Marwood in the script, though he is never explicitly named on screen. He serves as the anxious, slightly more grounded audience surrogate dragged along by Withnail's aristocratic delusions." },
        { question: "Why does Withnail recite Hamlet at the end?", answer: "Left alone in the rain after his friend finally moves on to a real job, Withnail recites Hamlet's 'What a piece of work is a man' speech to an audience of wolves in a zoo. It is a tragic realization of his own wasted, brilliant theatrical talent." },
        { question: "Is the movie based on a true story?", answer: "Yes, writer/director Bruce Robinson based the film on his own experiences living in a squalid Camden flat in the late 60s with Vivian MacKerrell, an out-of-work actor who served as the primary inspiration for the legendary character of Withnail." }
    ],
    'The Death of Stalin': [
        { question: "Is The Death of Stalin historically accurate?", answer: "While highly compressed for comedic pacing, the core terrifying events—Stalin lying in a puddle of urine because guards were too terrified to enter, the lack of good doctors due to purges, and the ruthless maneuvering of Beria and Khrushchev—are rooted in real historical facts." },
        { question: "Why does the film use British and American accents?", answer: "Director Armando Iannucci deliberately instructed the actors to use their natural English and American accents rather than fake Russian ones. This stripped away the 'prestige historical drama' feel, highlighting the characters as petty, modern-sounding thugs." },
        { question: "What makes the comedy so dark?", answer: "The humor is derived from the sheer panic of men trying to survive a totalitarian state. Every joke is underscored by the reality that making the wrong facial expression or backing the wrong committee member will result in a bullet to the back of the head." },
        { question: "Who ends up winning the power struggle?", answer: "Nikita Khrushchev (Steve Buscemi) wins. By playing the fool and quietly outmaneuvering the arrogant Beria, he orchestrates Beria's brutal execution and consolidates power, proving that the quietest schemer is often the deadliest." }
    ],
    'What We Do in the Shadows': [
        { question: "How does the movie reinvent the vampire genre?", answer: "It takes the grand, dramatic lore of vampires (Dracula, Twilight) and forces it into the mundane reality of modern flat-sharing. The comedy comes from seeing immortal creatures arguing over who hasn't washed the bloody dishes in five years." },
        { question: "Who is Stu?", answer: "Stu is Nick's human best friend, an incredibly quiet, boring IT guy who teaches the vampires how to use the internet and digital cameras. Because he is so mild-mannered, the vampires genuinely love him and refuse to eat him." },
        { question: "What is the joke with the werewolves?", answer: "The local werewolf pack is portrayed not as vicious monsters, but as a polite, overly-sensitive support group led by Rhys Darby, who constantly reminds them to be 'Werewolves, not Swearwolves' to keep their anger in check." },
        { question: "Is the movie connected to the TV show?", answer: "Yes, the 2014 New Zealand mockumentary created by Taika Waititi and Jemaine Clement serves as the foundation and shared universe for the highly successful FX television spin-off set in Staten Island, New York." }
    ],
    'Adaptation.': [
        { question: "What is Adaptation actually about?", answer: "It is a meta-comedy about the agony of the creative process. Screenwriter Charlie Kaufman literally wrote a movie about his own failure to adapt a book about orchids, turning his writer's block into the actual plot of the film." },
        { question: "Is Donald Kaufman a real person?", answer: "No. Donald is Charlie's fictional twin brother, representing the exact opposite of Charlie's neuroticism. Donald effortlessly writes a cliché, hackneyed thriller script that sells for millions, serving as a bitter satire of Hollywood screenwriting." },
        { question: "Why does the third act turn into an action movie?", answer: "Throughout the film, Charlie refuses to use Hollywood tropes like drug running, car chases, or profound life lessons. However, when his fictional brother Donald takes over the script in the third act, the movie ironically devolves into exactly those ridiculous action clichés." },
        { question: "Did Charlie Kaufman win an Oscar for this?", answer: "Charlie Kaufman was nominated for Best Adapted Screenplay. Hilariously, his entirely fictional twin brother Donald Kaufman was also officially credited and nominated, making Donald the first fictional character to ever be nominated for an Academy Award." }
    ],
    'Election': [
        { question: "What is the main conflict in Election?", answer: "Mr. McAllister, a respected high school teacher, develops a deep, irrational hatred for Tracy Flick, a relentlessly ambitious student. He risks his career and marriage to sabotage her unopposed run for student body president." },
        { question: "What does Tracy Flick represent?", answer: "Tracy is a razor-sharp satire of ruthless political ambition. She is hyper-competent, intensely prepared, but completely lacking in genuine empathy. The film explores how society both creates and despises women who pursue power with unapologetic aggression." },
        { question: "Why does Mr. McAllister hate Tracy so much?", answer: "His hatred is a projection of his own failures. Tracy represents the system working—she works hard and wins. McAllister is stuck in a mediocre life, feeling unrewarded, and punishes Tracy because he cannot control his own destiny." },
        { question: "How does the film end for Mr. McAllister?", answer: "His sabotage is discovered. He loses his job, his wife, and his reputation. He flees to New York to become a museum guide, forever haunted by the memory of Tracy, who successfully makes her way to Washington D.C." }
    ],
    'Burn After Reading': [
        { question: "What is the central joke of Burn After Reading?", answer: "The joke is that there is absolutely no conspiracy. In traditional spy thrillers, characters uncover massive government secrets. In this film, everyone is a narcissistic, profoundly stupid idiot fighting over a CD of worthless, boring memoirs." },
        { question: "Why does the CIA let everyone go or get killed?", answer: "The CIA superiors (played hilariously by J.K. Simmons and David Rasche) are completely baffled by the incompetence of the civilians involved. They simply let the chaotic violence play out and bury the files because it's easier than trying to understand the idiocy." },
        { question: "What happens to Brad Pitt's character?", answer: "Chad, an enthusiastic but brainless gym employee, hides in a closet during a break-in to extort money. When he is discovered, he flashes a big, friendly smile, and is immediately and shockingly shot in the head. It is one of the most abrupt, darkly comedic deaths in cinema." },
        { question: "What is the moral of the story?", answer: "As the CIA officer explicitly states at the end: 'I guess we learned not to do it again... though I'm f***ed if I know what we did.' The Coen brothers deliver a brilliantly nihilistic punchline where all the violence and drama resulted in absolutely zero character growth." }
    ]
};

// ✅ HELPER FUNCTIONS: 100% SPAM-FREE, DYNAMIC, & GOOGLE APPROVED
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
        'url': `https://filmiway.com/movie/${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : '',
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = DARK_COMEDY_MOVIE_FAQS[movie.Title] ? [...DARK_COMEDY_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = DARK_COMEDY_MOVIE_FAQS[movieTitle] ? [...DARK_COMEDY_MOVIE_FAQS[movieTitle]] : [];
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