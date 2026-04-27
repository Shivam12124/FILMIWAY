// utils/fightClubMovieData.js - FIGHT CLUB ANARCHY COLLECTION DATA ✅
// Movies exploring identity fracture, anti-system rebellion, dark satire, and psychological collapse.

export const FALLBACK_POSTERS = {};

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 85889, "imdbID": "tt1450321", "Title": "Filth", "year": 2013, "genre": "Crime", "runtime": 97, "rank": 1 },
    { "tmdbId": 13973, "imdbID": "tt1024715", "Title": "Choke", "year": 2008, "genre": "Comedy", "runtime": 92, "rank": 2 },
    { "tmdbId": 146015, "imdbID": "tt1825157", "Title": "The Double", "year": 2013, "genre": "Thriller", "runtime": 93, "rank": 3 },
    { "tmdbId": 480001, "imdbID": "tt7339248", "Title": "The Art of Self-Defense", "year": 2019, "genre": "Comedy", "runtime": 104, "rank": 4 },
    { "tmdbId": 37094, "imdbID": "tt0106856", "Title": "Falling Down", "year": 1993, "genre": "Thriller", "runtime": 113, "rank": 5 },
    { "tmdbId": 73, "imdbID": "tt0120586", "Title": "American History X", "year": 1998, "genre": "Drama", "runtime": 119, "rank": 6 },
    { "tmdbId": 68, "imdbID": "tt0088846", "Title": "Brazil", "year": 1985, "genre": "Sci-Fi", "runtime": 132, "rank": 7 },
    { "tmdbId": 1542, "imdbID": "tt0151804", "Title": "Office Space", "year": 1999, "genre": "Comedy", "runtime": 89, "rank": 8 },
    { "tmdbId": 752, "imdbID": "tt0434409", "Title": "V for Vendetta", "year": 2005, "genre": "Action", "runtime": 132, "rank": 9 },
    { "tmdbId": 492, "imdbID": "tt0120601", "Title": "Being John Malkovich", "year": 1999, "genre": "Comedy", "runtime": 113, "rank": 10 }
];

// ✅ REVISED STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    85889: "The games are always playing.", // Filth
    13973: "I'm a sex addict. I'm a fraud. I'm a fake.", // Choke
    146015: "I'm not a non-person.", // The Double
    480001: "I want to be what intimidates me.", // The Art of Self-Defense
    37094: "I'm the bad guy? How'd that happen?", // Falling Down
    73: "Hate is baggage. Life's too short to be pissed off all the time.", // American History X
    68: "We're all in it together.", // Brazil
    1542: "It's not that I'm lazy, it's that I just don't care.", // Office Space
    752: "Ideas are bulletproof.", // V for Vendetta
    492: "Ever wanted to be someone else?" // Being John Malkovich
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data)
export const SENSITIVE_TIMELINES = {
    // 1. Filth
    85889: {
        scenes: [
            { start: "0:08:46", end: "0:09:02", type: "Sex & Nudity", severity: "High" },
            { start: "0:11:39", end: "0:11:51", type: "Sex", severity: "High" },
            { start: "0:13:53", end: "0:15:58", type: "Sex & Nudity", severity: "High" },
            { start: "0:20:56", end: "0:21:16", type: "Sexual Content (Masturbation), Sex & Nudity (Woman)", severity: "High" },
            { start: "0:40:16", end: "0:40:40", type: "Nudity (Man)", severity: "High" },
            { start: "0:40:43", end: "0:40:56", type: "Sex", severity: "Moderate" },
            { start: "0:48:58", end: "0:49:30", type: "Nudity (Man)", severity: "High" },
            { start: "0:57:50", end: "0:58:35", type: "Sexual Content", severity: "Moderate" },
            { start: "0:59:19", end: "0:59:36", type: "Sex & Nudity", severity: "High" },
            { start: "1:07:38", end: "1:08:14", type: "Sex", severity: "Moderate" }
        ]
    },
    
    // 2. Choke
    13973: {
        scenes: [
            { start: "0:02:15", end: "0:03:20", type: "Sex", severity: "High" },
            { start: "0:05:03", end: "0:05:09", type: "Nudity (Woman)", severity: "High" },
            { start: "0:10:00", end: "0:10:05", type: "Nudity (Woman)", severity: "High" },
            { start: "0:10:10", end: "0:10:12", type: "Sex", severity: "Moderate" },
            { start: "0:34:50", end: "0:35:03", type: "Sex & Nudity", severity: "High" },
            { start: "0:36:22", end: "0:36:46", type: "Nudity (Woman)", severity: "High" },
            { start: "0:43:58", end: "0:44:50", type: "Sex", severity: "High" },
            { start: "0:51:45", end: "0:52:10", type: "Nudity (Women)", severity: "High" },
            { start: "0:54:50", end: "0:55:20", type: "Sexual Content (Masturbation)", severity: "High" },
            { start: "0:56:24", end: "0:56:40", type: "Sex", severity: "High" },
            { start: "1:06:00", end: "1:07:08", type: "Sex", severity: "Moderate" },
            { start: "1:10:43", end: "1:12:38", type: "Sex & Nudity", severity: "High" }
        ]
    },
    
    // 3. The Double
    146015: { 
        scenes: [] 
    },
    
    // 4. The Art of Self-Defense
    480001: {
        scenes: [
            { start: "0:05:19", end: "0:05:30", type: "Nudity (Woman / Magazine)", severity: "High" },
            { start: "0:10:07", end: "0:10:14", type: "Nudity (Woman / Magazine)", severity: "Moderate" },
            { start: "0:10:16", end: "0:10:19", type: "Sexual Content (Masturbation)", severity: "Moderate" },
            { start: "0:57:00", end: "0:57:10", type: "Nudity (Man)", severity: "High" }
        ]
    },
    
    // 5. Falling Down
    37094: {
        scenes: []
    },
    
    // 6. American History X
    73: {
        scenes: [
            { start: "0:02:55", end: "0:04:14", type: "Sex & Nudity", severity: "High" },
            { start: "1:24:46", end: "1:26:20", type: "Sex & Nudity", severity: "High" }
        ]
    },
    
    // 7. Brazil
    68: {
        scenes: [
            { start: "2:00:40", end: "2:00:55", type: "Partial Nudity (Woman)", severity: "Moderate" }
        ]
    },
    
    // 8. Office Space
    1542: {
        scenes: [
            { start: "0:14:09", end: "0:14:13", type: "Nudity (Woman)", severity: "High" }
        ]
    },
    

// 9. V for Vendetta
    752: {
        scenes: [
            { start: "0:58:46", end: "0:59:00", type: "Nudity (Men & Women)", severity: "Moderate" }
        ]
    },
    
    // 10. Being John Malkovich
    492: {
        scenes: [
            { start: "0:56:40", end: "0:57:08", type: "Sexual Content", severity: "Moderate" },
            { start: "1:02:28", end: "1:03:10", type: "Sex", severity: "High" }
        ]
    }
};

// ✅ MAPPING NOTE:
// psychologicalIntensity = Paranoia/Identity Fracture Level
// anarchyLevel = Anti-System Rebellion
// visceralImpact = Shock Value / Grittiness

const createMovieData = (data) => ({
    psychologicalIntensity: 85, 
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Filth
    85889: createMovieData({ 
        psychologicalIntensity: 98, anarchyLevel: 90, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#b91c1c", rating: 7.0, criticsScore: 66, audienceScore: 72, director: "Jon S. Baird", 
        cast: ["James McAvoy", "Jamie Bell", "Imogen Poots"], boxOffice: "$8.4 million", budget: "$5 million", 
        dna: { Crime: 50, Comedy: 30, Drama: 20 },
        scenes: [
            { time: 15, intensity: 60, label: "The Promotion Game", color: "#b91c1c" },
            { time: 45, intensity: 85, label: "Hamburg Trip", color: "#dc2626" },
            { time: 70, intensity: 90, label: "Hallucinations", color: "#000000" },
            { time: 85, intensity: 100, label: "The Reveal", color: "#7f1d1d" },
            { time: 95, intensity: 95, label: "Same Rules Apply", color: "#ef4444" }
        ],
        synopsis: "A corrupt, bipolar, misanthropic Scottish detective manipulates and hallucinates his way through a murder investigation in a desperate bid for promotion and to win back his wife. A hyper-aggressive plunge into total psychological collapse.",
        themes: ["Mental Illness", "Corruption", "Identity Fracture"]
    }),
    // 2. Choke
    13973: createMovieData({ 
        psychologicalIntensity: 82, anarchyLevel: 75, visceralImpact: 80, complexityLevel: "MEDIUM", 
        dominantColor: "#b45309", rating: 6.4, criticsScore: 56, audienceScore: 49, director: "Clark Gregg", 
        cast: ["Sam Rockwell", "Anjelica Huston", "Kelly Macdonald"], boxOffice: "$3.9 million", budget: "$3 million",
        dna: { Comedy: 60, Drama: 40 },
        scenes: [
            { time: 10, intensity: 60, label: "The Restaurant Scam", color: "#b45309" },
            { time: 35, intensity: 70, label: "Sex Addicts Meeting", color: "#d97706" },
            { time: 60, intensity: 85, label: "Hospital Secrets", color: "#92400e" },
            { time: 80, intensity: 90, label: "The Truth", color: "#fcd34d" },
            { time: 88, intensity: 80, label: "Colonial Theme Park", color: "#78350f" }
        ],
        synopsis: "A sex-addicted historical theme park worker deliberately chokes on food in restaurants to con people into saving him, using their money to pay for his demented mother's hospital bills. Based on the novel by Chuck Palahniuk (Fight Club).",
        themes: ["Addiction", "Mother Complex", "Cynical Humor"]
    }),
    // 3. The Double
    146015: createMovieData({ 
        psychologicalIntensity: 90, anarchyLevel: 40, visceralImpact: 75, complexityLevel: "HIGH", 
        dominantColor: "#475569", rating: 6.5, criticsScore: 83, audienceScore: 58, director: "Richard Ayoade", 
        cast: ["Jesse Eisenberg", "Mia Wasikowska"], boxOffice: "$2 million", budget: "$4 million",
        dna: { Thriller: 50, Comedy: 30, Drama: 20 },
        scenes: [
            { time: 15, intensity: 50, label: "The Commute", color: "#475569" },
            { time: 35, intensity: 75, label: "Meeting James", color: "#334155" },
            { time: 65, intensity: 85, label: "Identity Theft", color: "#1e293b" },
            { time: 80, intensity: 95, label: "The Confrontation", color: "#0f172a" },
            { time: 90, intensity: 100, label: "The Jump", color: "#000000" }
        ],
        synopsis: "A timid, isolated clerk is driven to the brink of madness when a physically identical but highly confident doppelgänger joins his workplace and slowly begins taking over his entire life.",
        themes: ["Doppelgängers", "Invisibility", "Workplace Alienation"]
    }),
    // 4. The Art of Self-Defense
    480001: createMovieData({ 
        psychologicalIntensity: 80, anarchyLevel: 85, visceralImpact: 82, complexityLevel: "MEDIUM", 
        dominantColor: "#1e3a8a", rating: 6.7, criticsScore: 84, audienceScore: 66, director: "Riley Stearns", 
        cast: ["Jesse Eisenberg", "Alessandro Nivola", "Imogen Poots"], boxOffice: "$2.4 million", budget: "$4.5 million",
        dna: { Comedy: 50, Thriller: 40, Crime: 10 },
        scenes: [
            { time: 10, intensity: 70, label: "The Attack", color: "#1e3a8a" },
            { time: 30, intensity: 60, label: "Joining the Dojo", color: "#3b82f6" },
            { time: 65, intensity: 85, label: "The Night Class", color: "#172554" },
            { time: 85, intensity: 95, label: "The Motorcycle", color: "#dc2626" },
            { time: 98, intensity: 100, label: "Guns Defeat Karate", color: "#000000" }
        ],
        synopsis: "After being attacked on the street, a weak, submissive man joins a mysterious martial arts dojo to learn how to defend himself, only to fall under the spell of its hyper-masculine, cult-like leader.",
        themes: ["Toxic Masculinity", "Cult Mentality", "Repressed Rage"]
    }),
    // 5. Falling Down
    37094: createMovieData({ 
        psychologicalIntensity: 88, anarchyLevel: 95, visceralImpact: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#ca8a04", rating: 7.6, criticsScore: 75, audienceScore: 85, director: "Joel Schumacher", 
        cast: ["Michael Douglas", "Robert Duvall", "Barbara Hershey"], boxOffice: "$40.9 million", budget: "$25 million",
        dna: { Thriller: 60, Drama: 30, Action: 10 },
        scenes: [
            { time: 5, intensity: 80, label: "The Traffic Jam", color: "#ca8a04" },
            { time: 25, intensity: 85, label: "The Convenience Store", color: "#eab308" },
            { time: 50, intensity: 95, label: "Whammy Burger", color: "#a16207" },
            { time: 70, intensity: 100, label: "The Surplus Store", color: "#713f12" },
            { time: 105, intensity: 90, label: "The Pier", color: "#171717" }
        ],
        synopsis: "An ordinary, unemployed defense worker snaps on a sweltering Los Angeles day. Abandoning his car in traffic, he embarks on a violent, heavily-armed trek across the city to get to his ex-wife's house for his daughter's birthday.",
        themes: ["Modern Frustration", "Societal Breakdown", "Male Entitlement"]
    }),
    // 6. American History X
    73: createMovieData({ 
        psychologicalIntensity: 92, anarchyLevel: 80, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 8.5, criticsScore: 83, audienceScore: 96, director: "Tony Kaye", 
        cast: ["Edward Norton", "Edward Furlong", "Beverly D'Angelo"], boxOffice: "$23.9 million", budget: "$20 million",
        dna: { Drama: 80, Crime: 20 },
        scenes: [
            { time: 15, intensity: 100, label: "The Curb Stomp", color: "#000000" },
            { time: 45, intensity: 85, label: "The Dinner Argument", color: "#3f3f46" },
            { time: 75, intensity: 95, label: "Prison Assault", color: "#18181b" },
            { time: 95, intensity: 80, label: "Folding Clothes", color: "#71717a" },
            { time: 115, intensity: 100, label: "The Bathroom", color: "#dc2626" }
        ],
        synopsis: "A former neo-nazi skinhead is released from prison after serving time for a brutal murder. Radically changed, he attempts to prevent his younger brother from going down the exact same path of racist violence.",
        themes: ["Hate and Radicalization", "Redemption", "Cyclical Violence"]
    }),
    // 7. Brazil
    68: createMovieData({ 
        psychologicalIntensity: 85, anarchyLevel: 98, visceralImpact: 75, complexityLevel: "HIGH", 
        dominantColor: "#64748b", rating: 7.9, criticsScore: 98, audienceScore: 87, director: "Terry Gilliam", 
        cast: ["Jonathan Pryce", "Robert De Niro", "Katherine Helmond"], boxOffice: "$9.9 million", budget: "$15 million",
        dna: { SciFi: 60, Comedy: 20, Drama: 20 },
        scenes: [
            { time: 10, intensity: 60, label: "The Bug in the Machine", color: "#64748b" },
            { time: 40, intensity: 80, label: "Information Retrieval", color: "#334155" },
            { time: 85, intensity: 90, label: "Tuttle's Escape", color: "#0f172a" },
            { time: 110, intensity: 95, label: "The Torture Room", color: "#dc2626" },
            { time: 125, intensity: 100, label: "Mental Escape", color: "#ffffff" }
        ],
        synopsis: "In a retro-futuristic, hyper-bureaucratic dystopia, a low-level government clerk's daydreams of heroism are interrupted when a literal bug in the system brands an innocent man a terrorist, leading him into a chaotic rebellion.",
        themes: ["Bureaucratic Dystopia", "Escapism", "Anti-System Rebellion"]
    }),
    // 8. Office Space
    1542: createMovieData({ 
        psychologicalIntensity: 40, anarchyLevel: 88, visceralImpact: 45, complexityLevel: "LOW", 
        dominantColor: "#0284c7", rating: 7.7, criticsScore: 80, audienceScore: 87, director: "Mike Judge", 
        cast: ["Ron Livingston", "Jennifer Aniston", "Stephen Root"], boxOffice: "$12.2 million", budget: "$10 million",
        dna: { Comedy: 100 },
        scenes: [
            { time: 10, intensity: 50, label: "The Traffic Jam", color: "#0284c7" },
            { time: 30, intensity: 60, label: "The Hypnosis", color: "#38bdf8" },
            { time: 60, intensity: 90, label: "Printer Destruction", color: "#0369a1" },
            { time: 75, intensity: 80, label: "The Code Mistake", color: "#0f172a" },
            { time: 85, intensity: 100, label: "Milton's Revenge", color: "#ea580c" }
        ],
        synopsis: "After a botched hypnotherapy session leaves him in a state of absolute apathy, an alienated IT worker simply stops caring about his job, accidentally triggering a chain of events that leads to a corporate embezzlement scheme.",
        themes: ["Corporate Alienation", "Anti-Work", "White Collar Rebellion"]
    }),
    // 9. V for Vendetta
    752: createMovieData({ 
        psychologicalIntensity: 75, anarchyLevel: 100, visceralImpact: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#171717", rating: 8.2, criticsScore: 73, audienceScore: 90, director: "James McTeigue", 
        cast: ["Hugo Weaving", "Natalie Portman", "John Hurt"], boxOffice: "$132.5 million", budget: "$54 million",
        dna: { Action: 50, Drama: 30, SciFi: 20 },
        scenes: [
            { time: 15, intensity: 80, label: "The Old Bailey", color: "#171717" },
            { time: 55, intensity: 90, label: "Valerie's Letter", color: "#3f3f46" },
            { time: 85, intensity: 100, label: "The Rain", color: "#3b82f6" },
            { time: 110, intensity: 95, label: "The Dominoes", color: "#dc2626" },
            { time: 125, intensity: 100, label: "Parliament Explodes", color: "#f59e0b" }
        ],
        synopsis: "In a fascist, totalitarian Britain, a masked freedom fighter known only as 'V' uses terrorist tactics to ignite a revolution against the oppressive government, drafting a young woman into his violent ideological crusade.",
        themes: ["Anarchism", "Totalitarianism", "Ideological Warfare"]
    }),
    // 10. Being John Malkovich
    492: createMovieData({ 
        psychologicalIntensity: 88, anarchyLevel: 50, visceralImpact: 70, complexityLevel: "HIGH", 
        dominantColor: "#854d0e", rating: 7.7, criticsScore: 94, audienceScore: 87, director: "Spike Jonze", 
        cast: ["John Cusack", "Cameron Diaz", "John Malkovich"], boxOffice: "$32.4 million", budget: "$13 million",
        dna: { Comedy: 50, Fantasy: 30, Drama: 20 },
        scenes: [
            { time: 15, intensity: 60, label: "Floor 7 1/2", color: "#854d0e" },
            { time: 35, intensity: 85, label: "The Portal", color: "#422006" },
            { time: 65, intensity: 90, label: "Malkovich in Malkovich", color: "#171717" },
            { time: 90, intensity: 95, label: "Lotte's Obsession", color: "#b45309" },
            { time: 105, intensity: 100, label: "Trapped in Emily", color: "#000000" }
        ],
        synopsis: "A miserable puppeteer working in a bizarre office building discovers a hidden portal that leads literally inside the mind of acclaimed actor John Malkovich, turning identity itself into a commodified escape.",
        themes: ["Identity Crisis", "Voyeurism", "Existential Absurdity"]
    })
};

export const FIGHT_CLUB_MOVIE_FAQS = {
    'Filth': [
        { question: "How does Filth compare to Fight Club?", answer: "Both films center on an unreliable, misanthropic narrator whose sanity is fracturing in real-time. Where Tyler Durden is a projection of hyper-masculine rebellion, Bruce Robertson's hallucinations are projections of his deep-seated guilt and extreme bipolar disorder." },
        { question: "Is the ending of Filth different from the book?", answer: "The film's ending is slightly modified but retains the same bleak core. While the book gets much more granular with his internal tapeworm monologue, the film perfectly visually captures his final, tragic attempt to exert control over his collapsing reality." },
        { question: "Who is the therapist in Filth?", answer: "The therapist (played by Jim Broadbent) is a massive hallucination. Bruce is projecting his own fears, insecurities, and bizarre rationalizations onto a figure of authority as his mind desperately tries to protect itself from the reality of his actions." },
        { question: "What is the meaning of the tapeworm?", answer: "In the original novel, Bruce literally has a tapeworm that speaks to him. In the movie, it is adapted more symbolically as the literal 'filth' eating him from the inside out, representing his guilt and decaying moral compass." }
    ],
    'Choke': [
        { question: "Is Choke related to Fight Club?", answer: "Yes, both are based on novels by author Chuck Palahniuk. Because of this, they share a distinct DNA: deeply cynical humor, alienated protagonists, anti-capitalist themes, and a fascination with underground, taboo subcultures." },
        { question: "Why does Victor choke in restaurants?", answer: "Victor stages choking incidents so that wealthy strangers will 'save' him. He weaponizes their savior complex, knowing they will feel responsible for him forever, using their cash to fund his mother's expensive, experimental dementia treatments." },
        { question: "What is the twist regarding Victor's mother?", answer: "Victor has spent his life believing a grandiose lie his mother told him—that he was genetically engineered from the DNA of Jesus Christ. The twist reveals she was simply profoundly mentally ill, shattering his entire sense of special identity." },
        { question: "What is the message of Choke?", answer: "Like Fight Club, Choke is about finding authentic human connection in a completely artificial, commercialized world. Victor uses sex addiction and scams to feel alive, but ultimately realizes that true intimacy requires extreme vulnerability." }
    ],
    'The Double': [
        { question: "What is the psychological meaning of The Double?", answer: "The film is an exploration of Imposter Syndrome and identity theft. Simon represents total social invisibility, while James represents the sociopathic confidence required to succeed. The doppelgänger is the physical manifestation of the person Simon wishes he could be, but isn't ruthless enough to become." },
        { question: "Is James real or in Simon's head?", answer: "Director Richard Ayoade leaves this intentionally ambiguous. While the film plays out as if James is a physical, separate person, the narrative functions perfectly as a Fight Club-style psychological break where a timid man invents an aggressive persona to survive." },
        { question: "Why does Simon jump at the end?", answer: "Simon realizes that he and James are tethered—if one gets hurt, the other feels it. By attempting suicide, Simon forces James to experience the trauma, ultimately killing the parasitic ego and reclaiming his own existence." },
        { question: "What time period is The Double set in?", answer: "The film is set in a deliberate 'nowhere' time. It uses retro-futuristic, brutalist Soviet-style architecture to create a claustrophobic, Kafkaesque atmosphere where the individual is completely meaningless to the system." }
    ],
    'The Art of Self-Defense': [
        { question: "How is The Art of Self-Defense similar to Fight Club?", answer: "Both films follow a weak, emasculated man who is drawn into a hyper-violent, cult-like group led by a charismatic leader. Both movies serve as pitch-black satires of toxic masculinity and the desperate lengths men will go to feel powerful." },
        { question: "What does Sensei represent?", answer: "Sensei is a caricature of extreme alpha-male posturing. He enforces absurd, arbitrary rules (like forbidding French, or forcing students to listen to heavy metal) to completely dominate the minds and identities of his insecure students." },
        { question: "Why did Casey kill Sensei with a gun?", answer: "It is the ultimate subversion of the film's martial arts premise. After being abused and brainwashed by Sensei's strict rules of 'honor' and 'masculinity,' Casey realizes the rules are a scam designed to control him. Shooting Sensei is an act of pure, rule-breaking pragmatism." },
        { question: "What is the significance of the dog?", answer: "Casey's dachshund represents his own vulnerability and softness. When the dojo kills his dog to 'toughen him up,' it mirrors the way patriarchal structures force men to destroy their own emotional sensitivity to fit in." }
    ],
    'Falling Down': [
        { question: "Is D-Fens the hero of Falling Down?", answer: "No, and that is the central point of the film. While audiences initially cheer for him standing up to daily annoyances (like overpriced burgers or traffic), the film slowly reveals that his entitlement and suppressed rage make him a terrifying villain, not a vigilante." },
        { question: "What triggers D-Fens' breakdown?", answer: "His breakdown isn't caused by one major event, but by the 'death by a thousand cuts' of modern urban life. He did everything society asked—got a job, got married, paid taxes—and when it all fell apart, his fragile ego couldn't handle the reality that he wasn't special." },
        { question: "How does the cop (Prendergast) foil D-Fens?", answer: "Prendergast is the thematic opposite of D-Fens. Both men are facing obsolescence, marital issues, and a changing world. But while D-Fens responds with explosive violence and blame, Prendergast responds with patience, empathy, and resilience." },
        { question: "What does the final line 'I'm the bad guy?' mean?", answer: "It is the moment his entire worldview shatters. D-Fens genuinely believed his violent rampage was righteous and justified. Facing death, he suddenly realizes he isn't the hero of a Western movie; he's the monster destroying innocent lives." }
    ],
    'American History X': [
        { question: "Why is American History X filmed in black and white?", answer: "The black and white sequences represent Derek's past. It visually mirrors his rigid, polarized, 'black and white' neo-Nazi ideology where there is no room for nuance, context, or empathy." },
        { question: "What changes Derek in prison?", answer: "Derek realizes the hypocrisy of his ideology. The white supremacists in prison associate with minorities when it benefits them (drug trades), while his only true friend and protector ends up being Lamont, a Black inmate. The illusion of his 'pure' brotherhood shatters." },
        { question: "What is the meaning of the ending?", answer: "The tragic ending demonstrates the inescapable cycle of violence. Derek successfully reformed himself and saved his brother's mind, but the hatred he put into the world years earlier had already set a deadly, unstoppable chain of events in motion." },
        { question: "How does Derek parallel Tyler Durden?", answer: "Like Tyler Durden, the young Derek is a highly charismatic, hyper-articulate leader who preys on the disenfranchisement and anger of lost young men, weaponizing their lack of identity into a violent, cult-like army." }
    ],
    'Brazil': [
        { question: "What is the theme of Brazil?", answer: "Brazil is a terrifying, surreal satire of bureaucratic incompetence and state surveillance. It explores how a sprawling, hyper-organized system doesn't just crush human freedom—it crushes the human soul with paperwork and apathy." },
        { question: "Who is Harry Tuttle?", answer: "Harry Tuttle (Robert De Niro) is a rogue heating engineer and the film's version of a superhero. In a world suffocated by paperwork, his simple act of fixing pipes without filling out the proper forms makes him a dangerous terrorist to the state." },
        { question: "What does the ending of Brazil mean?", answer: "The ending is deeply tragic. Sam physically escapes the torture chamber and reunites with Jill, but the camera pulls back to reveal this entire happy ending is happening inside his fractured mind. The state has permanently broken his brain; his only escape is insanity." },
        { question: "Why is the movie called Brazil?", answer: "The title refers to the escapist 1939 song 'Aquarela do Brasil,' which plays throughout the film. It represents the idealized, romantic fantasy of freedom and escape that the characters dream of while trapped in their gray, concrete nightmare." }
    ],
    'Office Space': [
        { question: "How is Office Space a comedy version of Fight Club?", answer: "Released the exact same year (1999), both films deal with white-collar male alienation, extreme corporate monotony, and protagonists who decide to completely rebel against the system. Peter Gibbons just chooses a relaxed, comedic rebellion rather than a violent underground fight club." },
        { question: "What is the meaning of the printer destruction scene?", answer: "The printer represents the infuriating, soulless technology that makes modern work miserable. Destroying it in a slow-motion, gangland-style beatdown is a moment of pure, visceral catharsis for anyone who has ever worked in a cubicle." },
        { question: "Did Peter get away with the embezzlement?", answer: "Yes, by pure luck. Milton, the perpetually ignored employee, finally snaps, burns the building to the ground (destroying all evidence of the virus code), and steals the traveler's checks for himself. The system's incompetence accidentally saves Peter." },
        { question: "What does Milton's red stapler symbolize?", answer: "The red stapler is the absolute last shred of identity and dignity Milton has left. The company slowly takes away his desk, his pay, and his space. Taking the stapler is the final insult that triggers his destructive revenge." }
    ],
    'V for Vendetta': [
        { question: "Who is V?", answer: "V is a masked anarchist and a product of the fascist government's own cruel medical experiments. He is less of a traditional character and more of a literal embodiment of an idea: that freedom requires the absolute destruction of tyranny." },
        { question: "What does the Guy Fawkes mask represent?", answer: "Guy Fawkes was a real historical figure who attempted to blow up the English Parliament in 1605. V adopts the mask to co-opt the historical symbol of treason, transforming it into a modern symbol of anti-fascist rebellion and mass unity." },
        { question: "Why does V put Evey through the fake prison?", answer: "V believes that Evey can only truly be free if she loses her fear of death. By subjecting her to a horrific simulation of what he endured, he strips away her societal conditioning, triggering a psychological 'rebirth' akin to a baptism." },
        { question: "What is the message of V for Vendetta?", answer: "The film argues that people should not be afraid of their governments; governments should be afraid of their people. It champions the idea that while individuals can be killed or imprisoned, the concepts of justice and freedom are immortal." }
    ],
    'Being John Malkovich': [
        { question: "What is the core message of Being John Malkovich?", answer: "The film explores the emptiness of modern identity. The characters are so miserable in their own skin that they are willing to pay money to literally hijack another person's consciousness, commodifying human existence." },
        { question: "What happens when Malkovich goes into his own portal?", answer: "He enters a surreal, terrifying nightmare where everyone looks exactly like him and can only speak his name. It represents the horror of pure narcissism—an ego loop where there is no escape from the self." },
        { question: "Why does Craig take over Malkovich permanently?", answer: "Craig represents the ultimate parasitic artist. Failing as a puppeteer in real life, he realizes he can use Malkovich's fame and body as the ultimate 'puppet' to achieve the success and admiration he believes he is entitled to." },
        { question: "What does the 7 1/2 floor symbolize?", answer: "The claustrophobic, half-height floor physically forces the characters into a hunched, subservient posture. It is a visual metaphor for the absurd, degrading compromises people make to survive in the corporate world." }
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
        else if (lowerType.includes('assault')) types.add('sexual violence');
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
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini') || t.includes('assault'); 
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

    const staticFaqs = FIGHT_CLUB_MOVIE_FAQS[movie.Title] ? [...FIGHT_CLUB_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = FIGHT_CLUB_MOVIE_FAQS[movieTitle] ? [...FIGHT_CLUB_MOVIE_FAQS[movieTitle]] : [];
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
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini') || t.includes('assault');
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