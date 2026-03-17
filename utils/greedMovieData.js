// utils/greedMovieData.js - GREED COLLECTION DATA ✅
// Movies exploring extreme capitalism, moral decay, and the destructive pursuit of wealth.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 7345, "imdbID": "tt0469494", "Title": "There Will Be Blood", "year": 2007, "genre": "Drama", "runtime": 158, "rank": 1 },
    { "tmdbId": 106646, "imdbID": "tt0993846", "Title": "The Wolf of Wall Street", "year": 2013, "genre": "Comedy", "runtime": 180, "rank": 2 },
    { "tmdbId": 10673, "imdbID": "tt0094291", "Title": "Wall Street", "year": 1987, "genre": "Drama", "runtime": 126, "rank": 3 },
    { "tmdbId": 3090, "imdbID": "tt0040897", "Title": "The Treasure of the Sierra Madre", "year": 1948, "genre": "Adventure", "runtime": 126, "rank": 4 },
    { "tmdbId": 524, "imdbID": "tt0112641", "Title": "Casino", "year": 1995, "genre": "Crime", "runtime": 178, "rank": 5 },
    { "tmdbId": 318846, "imdbID": "tt1596363", "Title": "The Big Short", "year": 2015, "genre": "Comedy", "runtime": 130, "rank": 6 },
    { "tmdbId": 473033, "imdbID": "tt5727208", "Title": "Uncut Gems", "year": 2019, "genre": "Thriller", "runtime": 135, "rank": 7 },
    { "tmdbId": 1405, "imdbID": "tt0015881", "Title": "Greed", "year": 1924, "genre": "Drama", "runtime": 140, "rank": 8 },
    { "tmdbId": 1359, "imdbID": "tt0144084", "Title": "American Psycho", "year": 2000, "genre": "Thriller", "runtime": 102, "rank": 9 },
    { "tmdbId": 10223, "imdbID": "tt0120324", "Title": "A Simple Plan", "year": 1998, "genre": "Thriller", "runtime": 121, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    7345: "I have a competition in me. I want no one else to succeed.",
    106646: "Let me tell you something. There's no nobility in poverty.",
    10673: "Greed, for lack of a better word, is good.",
    3090: "Badges? We ain't got no badges. We don't need no badges!",
    524: "There are three ways of doing things around here: the right way, the wrong way, and the way that I do it.",
    318846: "Truth is like poetry. And most people f***ing hate poetry.",
    473033: "This is how I win.",
    1405: "I can't help it... I love money!",
    1359: "I have all the characteristics of a human being: blood, flesh, skin, hair; but not a single, clear, identifiable emotion.",
    10223: "It's the American Dream in a gym bag."
};

// ✅ SENSITIVE TIMELINES (Parents Guide Data)
export const SENSITIVE_TIMELINES = {
    // 1. There Will Be Blood
    7345: { scenes: [] }, 

    // 2. The Wolf of Wall Street
    106646: { 
        scenes: [
            { start: "0:02:02", end: "0:03:05", type: "Sexual Content & Nudity (Woman)", severity: "High" },
            { start: "0:13:55", end: "0:14:15", type: "Nudity (Woman)", severity: "High" },
            { start: "0:38:55", end: "0:39:47", type: "Nudity (Women)", severity: "High" },
            { start: "0:54:45", end: "0:55:10", type: "Nudity (Man)", severity: "High" },
            { start: "0:58:25", end: "0:59:30", type: "Nudity (Woman) & Sex", severity: "High" },
            { start: "1:02:25", end: "1:02:45", type: "Nudity (Men), Partial Nudity (Man) & Sex", severity: "High" },
            { start: "1:07:30", end: "1:08:30", type: "Nudity (Women) & Sex", severity: "High" },
            { start: "1:12:05", end: "1:12:15", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "1:16:55", end: "1:17:22", type: "Nudity (Woman)", severity: "High" },
            { start: "1:48:20", end: "1:48:38", type: "Sex & Nudity (Woman)", severity: "High" },
            { start: "2:17:30", end: "2:18:10", type: "Nudity (Women)", severity: "High" },
            { start: "2:31:20", end: "2:31:40", type: "Nudity (Woman)", severity: "High" },
            { start: "2:38:30", end: "2:40:00", type: "Sex", severity: "High" }
        ] 
    },

    // 3. Wall Street
    10673: { 
        scenes: [
            { start: "0:13:26", end: "0:13:44", type: "Nudity (Woman)", severity: "High" },
            { start: "1:10:55", end: "1:11:26", type: "Sex", severity: "Moderate" }
        ]
    },

    // 4. The Treasure of the Sierra Madre
    3090: { scenes: [] },

    // 5. Casino
    524: { 
        scenes: [
            { start: "0:18:51", end: "0:18:55", type: "Nudity", severity: "Moderate" },
            { start: "2:17:16", end: "2:17:22", type: "Sex", severity: "Mild" },
            { start: "2:20:50", end: "2:20:58", type: "Sex", severity: "Moderate" },
            { start: "2:20:59", end: "2:21:30", type: "Suggestive clothing (Lingerie)", severity: "Mild" }
        ]
    },

    // 6. The Big Short
    318846: { 
        scenes: [
            { start: "0:53:25", end: "0:54:45", type: "Nudity (Woman)", severity: "High" },
            { start: "1:15:55", end: "1:16:51", type: "Suggestive Clothing (Bikini)", severity: "Mild" }
        ]
    },

// 7. Uncut Gems
    473033: { 
        scenes: [
            { start: "0:33:57", end: "0:35:27", type: "Suggestive clothing (Lingerie)", severity: "Moderate" },
            { start: "0:35:28", end: "0:35:35", type: "Sexual content", severity: "Moderate" },
            { start: "0:35:36", end: "0:36:02", type: "Suggestive clothing (Lingerie)", severity: "Moderate" }
        ] 
    },
    // 8. Greed (1924)
    1405: { scenes: [] },

    // 9. American Psycho
    1359: { 
        scenes: [
            { start: "0:05:41", end: "0:05:45", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "0:14:33", end: "0:15:49", type: "Sex & Nudity (Background)", severity: "Moderate" },
            { start: "0:22:58", end: "0:23:04", type: "Nudity (Man)", severity: "Moderate" },
            { start: "0:39:00", end: "0:40:00", type: "Nudity (Woman)", severity: "Mild" },
            { start: "0:43:00", end: "0:44:12", type: "Suggestive clothing (Lingerie)", severity: "Mild" },
            { start: "0:44:25", end: "0:45:25", type: "Sex & Nudity", severity: "High" },
            { start: "0:45:26", end: "0:45:50", type: "Nudity (Woman)", severity: "Moderate" },
            { start: "0:51:55", end: "0:52:11", type: "Sex", severity: "Moderate" },
            { start: "1:12:25", end: "1:12:35", type: "Sexual Content", severity: "Mild" },
            { start: "1:13:35", end: "1:14:01", type: "Sex", severity: "Moderate" },
            { start: "1:14:48", end: "1:14:58", type: "Partial Nudity (Man & Woman)", severity: "Mild" },
            { start: "1:15:26", end: "1:16:00", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "1:33:52", end: "1:34:24", type: "Sexual Content", severity: "Mild" }
        ]
    },

    // 10. A Simple Plan
    10223: { 
        scenes: [
            { start: "0:04:37", end: "0:04:50", type: "Nudity", severity: "Moderate" }
        ]
    }
};

export const FALLBACK_POSTERS = {
    7345: "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MzUzMQ@@._V1_SX500.jpg",
    106646: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX500.jpg",
    10673: "https://m.media-amazon.com/images/M/MV5BMTczNzA1OTMwMl5BMl5BanBnXkFtZTgwMDUyNTgwNjE@._V1_SX500.jpg",
    3090: "https://m.media-amazon.com/images/M/MV5BMjA3NTcwMTk5M15BMl5BanBnXkFtZTgwMDU1NDkzMTE@._V1_SX500.jpg",
    524: "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX500.jpg",
    318846: "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX500.jpg",
    473033: "https://m.media-amazon.com/images/M/MV5BZDhkNjViNDMtZWZmZi00ZmZkLTk0YTItZWFhMWZlMTU3YzVmXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX500.jpg",
    1405: "https://m.media-amazon.com/images/M/MV5BMjA5NzIyODczMF5BMl5BanBnXkFtZTgwOTE5NDE5MzE@._V1_SX500.jpg",
    1359: "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktOTE2ZjJhNzg5MzliXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX500.jpg",
    10223: "https://m.media-amazon.com/images/M/MV5BMzcwNmU2OGYtYTE0Mi00YzRjLTljZTUtMTI0NTE2MmFlMThlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX500.jpg"
};

// ✅ Custom metric for this collection: 'greedIndex' and 'moralDecay'
const createGreedData = (data) => ({
    greedIndex: 85, 
    moralDecay: 80,
    complexityLevel: "HIGH",
    dominantColor: "#064e3b", // Deep emerald/money green
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. There Will Be Blood
    7345: createGreedData({ 
        greedIndex: 100, moralDecay: 98, complexityLevel: "EXTREME", 
        dominantColor: "#450a0a", rating: 8.2, criticsScore: 91, audienceScore: 86, director: "Paul Thomas Anderson", 
        cast: ["Daniel Day-Lewis", "Paul Dano"], boxOffice: "$76.2 million", budget: "$25 million", 
        dna: { "Drama": 60, "History": 30, "Psychological": 10 },
        scenes: [
            { time: 15, intensity: 20, label: "Finding Oil" }, // Setup
            { time: 65, intensity: 78, label: "The Derrick Fire" }, // Strong visceral tension
            { time: 95, intensity: 85, label: "The Baptism" }, // Crisis / Identity conflict
            { time: 125, intensity: 90, label: "Abandoning H.W." }, // Devastating moral rupture
            { time: 150, intensity: 98, label: "I Drink Your Milkshake" } // PRIMARY PEAK: Existential/Genre-defining climax
        ],
        synopsis: "A silver miner turned oilman embarks on a ruthless, blood-soaked quest for wealth. Daniel Plainview represents capitalism stripped of all humanity, willing to destroy faith, family, and his own soul to win.",
        themes: ["Capitalism vs Religion", "Isolation", "Ruthless Ambition"]
    }),
    // 2. The Wolf of Wall Street
    106646: createGreedData({ 
        greedIndex: 98, moralDecay: 95, complexityLevel: "HIGH", 
        dominantColor: "#166534", rating: 8.2, criticsScore: 80, audienceScore: 83, director: "Martin Scorsese", 
        cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], boxOffice: "$392 million", budget: "$100 million", 
        dna: { "Comedy": 50, "Crime": 35, "Biography": 15 },
        scenes: [
            { time: 20, intensity: 55, label: "Pink Sheets Pitch", color: "#facc15" },
            { time: 60, intensity: 70, label: "Steve Madden", color: "#eab308" },
            { time: 120, intensity: 88, label: "Lemmon 714s Phase", color: "#ca8a04" },
            { time: 150, intensity: 80, label: "I'm Not Leaving", color: "#a16207" },
            { time: 170, intensity: 72, label: "The FBI Raid", color: "#854d0e" }
        ],
        synopsis: "A young stockbroker builds an empire of fraud and excess. Scorsese's manic comedy exposes the intoxicating, addictive high of corporate greed and the systems that protect the wealthy.",
        themes: ["Financial Fraud", "Excess & Hedonism", "Corporate Immunity"]
    }),
    // 3. Wall Street
    10673: createGreedData({ 
        greedIndex: 90, moralDecay: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#0f172a", rating: 7.3, criticsScore: 79, audienceScore: 74, director: "Oliver Stone", 
        cast: ["Michael Douglas", "Charlie Sheen"], boxOffice: "$43.8 million", budget: "$15 million", 
        dna: { "Drama": 60, "Crime": 30, "Thriller": 10 },
        scenes: [
            { time: 25, intensity: 25, label: "Meeting Gekko" },
            { time: 55, intensity: 50, label: "Insider Trading" },
            { time: 85, intensity: 72, label: "Greed is Good Speech" }, // Strong emotional pressure
            { time: 105, intensity: 86, label: "Blue Star Betrayal" }, // PRIMARY PEAK: Crisis/Breaking point
            { time: 120, intensity: 60, label: "The Wire" } // Resolution release
        ],
        synopsis: "An impatient young stockbroker is willing to do anything to get to the top. This film coined the defining mantra of the 1980s: 'Greed is good.'",
        themes: ["Corporate Raiding", "Insider Trading", "Mentor Betrayal"]
    }),
    // 4. The Treasure of the Sierra Madre
    3090: createGreedData({ 
        greedIndex: 95, moralDecay: 92, complexityLevel: "HIGH", 
        dominantColor: "#b45309", rating: 8.2, criticsScore: 100, audienceScore: 90, director: "John Huston", 
        cast: ["Humphrey Bogart", "Walter Huston", "Tim Holt"], boxOffice: "$4.3 million", budget: "$3.8 million", 
        dna: { "Adventure": 40, "Drama": 40, "Western": 20 },
        scenes: [
            { time: 30, intensity: 35, label: "Striking Gold" },
            { time: 60, intensity: 68, label: "The Bandits" },
            { time: 85, intensity: 82, label: "Paranoia Sets In" },
            { time: 105, intensity: 94, label: "Dobbs Betrays" }, // PRIMARY PEAK: Overwhelming psychological collapse
            { time: 120, intensity: 70, label: "Gold in the Wind" } // Tragic/Ironic release
        ],
        synopsis: "Three Americans prospect for gold in Mexico, but the discovery of wealth slowly turns them against each other. A foundational fable about how money breeds violent paranoia.",
        themes: ["Paranoia", "The Corrupting Power of Gold", "Betrayal"]
    }),
    // 5. Casino
    524: createGreedData({ 
        greedIndex: 88, moralDecay: 90, complexityLevel: "HIGH", 
        dominantColor: "#f59e0b", rating: 8.2, criticsScore: 78, audienceScore: 87, director: "Martin Scorsese", 
        cast: ["Robert De Niro", "Sharon Stone", "Joe Pesci"], boxOffice: "$116.1 million", budget: "$40 million", 
        dna: { "Crime": 50, "Drama": 30, "Biography": 20 },
        scenes: [
            { time: 35, intensity: 45, label: "The Skim" },
            { time: 75, intensity: 65, label: "Ginger's Addiction" },
            { time: 110, intensity: 82, label: "Nicky Loses Control" },
            { time: 155, intensity: 91, label: "The Desert Meeting" }, // PRIMARY PEAK: Irreversible life rupture
            { time: 170, intensity: 74, label: "The Fall of Vegas" } // End of an era release
        ],
        synopsis: "The mafia's control over Las Vegas crumbles due to hubris and unchecked greed. A neon-lit Greek tragedy where an empire is destroyed from within.",
        themes: ["Organized Crime", "Hubris", "The End of an Era"]
    }),
    // 6. The Big Short
    318846: createGreedData({ 
        greedIndex: 96, moralDecay: 85, complexityLevel: "EXTREME", 
        dominantColor: "#0f172a", rating: 7.8, criticsScore: 89, audienceScore: 88, director: "Adam McKay", 
        cast: ["Christian Bale", "Steve Carell", "Ryan Gosling"], boxOffice: "$133.4 million", budget: "$28 million", 
        dna: { "Comedy": 40, "Drama": 40, "Biography": 20 },
        scenes: [
            { time: 25, intensity: 30, label: "The Housing Bubble" },
            { time: 65, intensity: 55, label: "Florida Investigation" },
            { time: 95, intensity: 78, label: "The CDO Manager" },
            { time: 115, intensity: 93, label: "The Crash" }, // PRIMARY PEAK: Devastating systemic collapse
            { time: 125, intensity: 70, label: "Selling the Swaps" } // Aftermath release
        ],
        synopsis: "Investors uncovering the impending 2008 housing crash bet against the economy. A darkly comedic expose of systemic banking fraud.",
        themes: ["Systemic Fraud", "The 2008 Crash", "Profiting from Disaster"]
    }),
    // 7. Uncut Gems
    473033: createGreedData({ 
        greedIndex: 94, moralDecay: 75, complexityLevel: "HIGH", 
        dominantColor: "#1d4ed8", rating: 7.4, criticsScore: 91, audienceScore: 52, director: "Josh & Benny Safdie", 
        cast: ["Adam Sandler", "Kevin Garnett"], boxOffice: "$50 million", budget: "$19 million", 
        dna: { "Thriller": 50, "Crime": 30, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 48, label: "The Opal Arrives" },
            { time: 55, intensity: 70, label: "The Pawn Shop" },
            { time: 85, intensity: 84, label: "The Auction Fail" },
            { time: 110, intensity: 95, label: "The Final Bet" }, // PRIMARY PEAK: Unbearable psychological pressure
            { time: 128, intensity: 80, label: "The Buzzer" } // Final release
        ],
        synopsis: "A gambling-addicted jeweler makes high-stakes bets. A suffocating panic attack about a man who cannot stop chasing the next big score.",
        themes: ["Gambling Addiction", "High-Stakes Debt", "Claustrophobia"]
    }),
    // 8. Greed (1924)
    1405: createGreedData({ 
        greedIndex: 100, moralDecay: 100, complexityLevel: "HIGH", 
        dominantColor: "#a16207", rating: 7.8, criticsScore: 100, audienceScore: 82, director: "Erich von Stroheim", 
        cast: ["Gibson Gowland", "ZaSu Pitts"], boxOffice: "N/A", budget: "$470,000", 
        dna: { "Drama": 70, "Thriller": 30, "Silent": 0 },
        scenes: [
            { time: 40, intensity: 40, label: "The Lottery Win" },
            { time: 80, intensity: 75, label: "Trina's Hoarding" },
            { time: 110, intensity: 88, label: "The Murder" },
            { time: 130, intensity: 97, label: "Death Valley" }, // PRIMARY PEAK: Soul-disturbing existential trauma
            { time: 138, intensity: 85, label: "Handcuffed Together" } // Tragic/Devastating ending
        ],
        synopsis: "The sudden acquisition of a lottery fortune destroys the lives of three people. The defining silent film on the topic.",
        themes: ["Hoarding", "Moral Collapse", "Mutual Destruction"]
    }),
    // 9. American Psycho
    1359: createGreedData({ 
        greedIndex: 92, moralDecay: 98, complexityLevel: "MEDIUM", 
        dominantColor: "#b91c1c", rating: 7.6, criticsScore: 69, audienceScore: 85, director: "Mary Harron", 
        cast: ["Christian Bale", "Jared Leto"], boxOffice: "$34.3 million", budget: "$7 million", 
        dna: { "Thriller": 45, "Comedy": 30, "Horror": 25 },
        scenes: [
            { time: 15, intensity: 30, label: "The Business Card" },
            { time: 40, intensity: 75, label: "Paul Allen" },
            { time: 70, intensity: 88, label: "The Chainsaw Chase" },
            { time: 90, intensity: 93, label: "The Confession Call" }, // PRIMARY PEAK: Emotional/Narrative implosion
            { time: 98, intensity: 70, label: "This Confession Meant Nothing" } // Open/Unsettling ending
        ],
        synopsis: "A wealthy executive hides his psychopathic ego. A biting satire connecting corporate yuppie greed to literal bloodlust.",
        themes: ["Yuppie Culture", "Narcissism", "Violent Satire"]
    }),
    // 10. A Simple Plan
    10223: createGreedData({ 
        greedIndex: 88, moralDecay: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#e2e8f0", rating: 7.5, criticsScore: 90, audienceScore: 74, director: "Sam Raimi", 
        cast: ["Bill Paxton", "Billy Bob Thornton"], boxOffice: "$16.3 million", budget: "$17 million", 
        dna: { "Thriller": 50, "Crime": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 25, label: "Finding the Plane" },
            { time: 45, intensity: 55, label: "The First Cover-Up" },
            { time: 75, intensity: 72, label: "The Fake Kidnapping" },
            { time: 105, intensity: 89, label: "The Standoff" }, // PRIMARY PEAK: Crisis/Emotional breaking point
            { time: 118, intensity: 68, label: "Burning the Money" } // Tragic release
        ],
        synopsis: "Three men discover a crashed plane holding $4.4 million. Their decision to keep it triggers a tragic chain of suspicion and murder.",
        themes: ["Found Money", "Snow Noir", "Brotherly Betrayal"]
    })
};

// 🎬 GREED FAQS - (100% SEO SAFE, CRITICAL ANALYSIS)
export const GREED_MOVIE_FAQS = {
    'There Will Be Blood': [
        { question: "What does the ending phrase 'I'm finished' mean?", answer: "When Daniel Plainview kills Eli Sunday, he has eliminated his final rival. 'I'm finished' means he has completely severed his last tie to humanity; he has accumulated all the wealth and power possible, and there is nothing left for his soul to do." },
        { question: "What is the significance of the milkshake metaphor?", answer: "The 'I drink your milkshake' speech is a perfect distillation of predatory capitalism. Plainview explains how he legally drained the oil from Eli's land by drilling nearby, proving that in business, the ruthless outsmart the naive." },
        { question: "Did Daniel ever truly love H.W.?", answer: "The film leaves this ambiguous. While he shows moments of genuine parental care, he ultimately uses the boy as a prop to project a wholesome 'family man' image to secure business deals, abandoning him when he becomes a liability." },
        { question: "How does the film compare religion and capitalism?", answer: "Director Paul Thomas Anderson sets up Daniel (Capitalism) and Eli (Religion) as two sides of the same corrupt coin. Both men use manipulation, theatricality, and the exploitation of the desperate to gain power and wealth." }
    ],
    'The Wolf of Wall Street': [
        { question: "Is the film glorifying Jordan Belfort's lifestyle?", answer: "This is the central debate of the film. While Scorsese presents the wealth and debauchery as incredibly seductive and fun, the ending is an indictment. The film shows that Belfort ruins lives and faces virtually no consequences, exposing a broken justice system." },
        { question: "What does the final shot of the audience mean?", answer: "The final shot pans over a mesmerized audience watching Belfort speak at a seminar. Scorsese is turning the camera on us, suggesting that society is complicit because we secretly idolize and want to replicate his immense wealth, despite knowing it's corrupt." },
        { question: "Were the Stratton Oakmont tactics real?", answer: "Yes. They used a 'Pump and Dump' scheme. They would artificially inflate the price of cheap penny stocks by aggressively selling them to naive investors, then sell their own shares at the peak, causing the stock to crash and the investors to lose everything." },
        { question: "Why is the Matthew McConaughey scene important?", answer: "Mark Hanna's lunch speech serves as the thesis for the entire film. He explains that the stock market is entirely fugazi (fake), and the only real goal of a broker is to move money from the client's pocket into the broker's pocket." }
    ],
    'Wall Street': [
        { question: "Why did 'Greed is Good' become such a famous quote?", answer: "Gordon Gekko's speech captured the exact ethos of 1980s corporate America. It argued that the evolutionary drive for accumulation is what builds empires and progress, defending ruthless capitalism as a virtue rather than a sin." },
        { question: "Is Gordon Gekko based on a real person?", answer: "Gekko is a composite character based on several infamous 1980s corporate raiders, most notably Ivan Boesky and Carl Icahn, who made fortunes by executing hostile takeovers of vulnerable companies." },
        { question: "Why does Bud Fox eventually turn on Gekko?", answer: "Bud’s morality is finally triggered when Gekko attempts to liquidate Blue Star Airlines, the company where Bud's father works. It shifts the greed from an abstract numbers game into a personal betrayal that destroys blue-collar livelihoods." },
        { question: "What is the difference between Gekko and Carl Fox?", answer: "They represent the ideological war of the film. Gekko represents the modern economy (creating wealth through moving paper and exploiting loopholes), while Bud's father, Carl, represents the traditional economy (creating value through honest, physical labor)." }
    ],
    'The Treasure of the Sierra Madre': [
        { question: "How does the film define the corrupting power of gold?", answer: "The film illustrates that gold itself isn't evil, but the fear of losing it is. Dobbs doesn't go mad because he's rich; he goes mad because he is paralyzed by the paranoid belief that his partners are going to steal his share." },
        { question: "Why does Howard laugh at the end?", answer: "Howard, the old prospector, laughs when the gold blows away in the wind because he understands the cosmic joke. After all the murder, betrayal, and suffering, nature reclaims the wealth, proving the ultimate futility of their obsession." },
        { question: "What is the significance of the 'Badges' quote?", answer: "The Mexican bandits attempt to pose as federal police to extort the prospectors. When called out, the bandit leader angrily dismisses the need for badges. It signifies a lawless world where force and violence dictate who keeps the wealth." },
        { question: "How does Dobbs change throughout the film?", answer: "Dobbs starts as a sympathetic, down-on-his-luck worker who just wants a fair wage. His tragic arc shows that greed is an infection; the closer he gets to financial security, the more his morality and sanity deteriorate." }
    ],
    'Casino': [
        { question: "What is 'The Skim'?", answer: "The Skim was the real-life method the mafia used to steal millions from Las Vegas casinos. Before the cash was officially counted and taxed, operatives would literally skim money off the top in the counting room and courier it directly to mob bosses." },
        { question: "Why does the Vegas empire collapse?", answer: "It collapses not because of the FBI, but because of unchecked personal greed and ego. Ace falls for a hustler he can't control, and Nicky's violent, greedy behavior draws unnecessary heat. They had a perfect system but ruined it because they wanted more." },
        { question: "What does the desert symbolize in the film?", answer: "The desert represents the hidden violence that sustains the glittering illusion of Las Vegas. The neon lights of the casino rely on the fact that any problem or threat to the money can be quickly buried in holes in the desert." },
        { question: "How does Casino differ from Goodfellas?", answer: "While both are Scorsese crime epics, Goodfellas is about the street-level hustle of the mob, while Casino is about the corporate, bureaucratic peak of mafia power. It explores what happens when criminals actually win the American Dream." }
    ],
    'The Big Short': [
        { question: "Why did the film use celebrity cameos to explain finance?", answer: "Director Adam McKay knew that Wall Street intentionally uses complex jargon (like CDOs and tranches) to make average people feel too stupid to ask questions. Using Margot Robbie and Anthony Bourdain to explain it was a brilliant way to break the fourth wall and demystify the fraud." },
        { question: "Who were the 'winners' in this story?", answer: "The protagonists 'won' by betting against the housing market, but the film is a tragedy. Their financial victory meant millions of average Americans lost their homes and jobs. They realized they were profiting off the collapse of the economy." },
        { question: "What is a 'Synthetic CDO'?", answer: "As explained in the film's casino scene, it's a bet on a bet. The banks packaged terrible mortgages together, disguised them as good investments, and then let investors bet infinitely on whether those packages would fail, creating a massive, fragile house of cards." },
        { question: "Did anyone go to jail for the 2008 crash?", answer: "As the film bitterly notes at the end, only one low-level banker went to jail. The executives who orchestrated the massive fraud were bailed out by taxpayers and kept their bonuses, highlighting the ultimate injustice of corporate greed." }
    ],
    'Uncut Gems': [
        { question: "Why does Howard Ratner keep making terrible bets?", answer: "Howard is not driven by the desire to be wealthy; he is driven by the adrenaline of the gamble. He is a severe addict. Every time he wins, he immediately uses the money to place a more dangerous bet, proving his obsession is psychological, not financial." },
        { question: "What does the Black Opal represent?", answer: "The opal acts as a cursed artifact. For Howard, it represents the ultimate 'big score' that will magically fix his ruined life. For Kevin Garnett, it holds mystical, spiritual power. Its presence brings out the most desperate greed in everyone who touches it." },
        { question: "How does the sound design contribute to the tension?", answer: "The Safdie brothers use an overlapping, chaotic audio mix where multiple people are yelling at the same time over a synth-heavy score. It forces the audience to experience Howard's claustrophobic, high-anxiety reality." },
        { question: "Why did Phil kill Howard at the end?", answer: "Phil, the loan shark's enforcer, is a creature of pure, impatient violence. Even though Howard's final bet won them all millions of dollars, Phil killed him out of sheer anger and frustration over the disrespect and chaos Howard caused him." }
    ],
    'Greed': [
        { question: "Why is Erich von Stroheim's Greed considered a masterpiece?", answer: "Released in 1924, it is one of the first films to treat cinema as serious, uncompromising literature. It stripped away Hollywood glamour to show a gritty, fatalistic look at how the obsession with money destroys human decency." },
        { question: "What is the significance of the missing footage?", answer: "Von Stroheim originally cut a 9-hour version of the film. The studio deemed it unwatchable and destroyed the footage, releasing a 2-hour cut. The lost footage is considered one of the greatest 'holy grails' in cinematic history." },
        { question: "How does Trina's character evolve?", answer: "Trina wins the lottery, but instead of spending it, she develops a pathological obsession with hoarding the gold coins. She forces her husband to live in squalor while she literally sleeps with the money, showcasing greed as a sickness." },
        { question: "What does the Death Valley ending symbolize?", answer: "The climax in the scorching heat of Death Valley is the ultimate cinematic irony. The two rivals are surrounded by vast wealth, but handcuffed together without water. In the end, their gold is completely useless against the harsh reality of nature." }
    ],
    'American Psycho': [
        { question: "Is Patrick Bateman actually killing people?", answer: "The film leaves this intentionally ambiguous. Many interpret the murders as violent hallucinations occurring entirely in Bateman's mind, serving as a psychological escape from his shallow, meaningless corporate existence." },
        { question: "What is the significance of the Business Card scene?", answer: "It is a brilliant satire of 1980s yuppie culture. The executives are practically identical in dress and status, so they channel all their competitive aggression and fragile egos into meaningless details like the font and paper stock of a business card." },
        { question: "Why does nobody realize Bateman is a killer?", answer: "Because in his world of extreme wealth, nobody actually pays attention to anyone else. They constantly mistake him for other colleagues because they are entirely self-absorbed. His 'mask of sanity' works because society refuses to look closely." },
        { question: "What is the film saying about 1980s Wall Street?", answer: "The film posits that the traits required to be a successful 1980s corporate raider—ruthlessness, lack of empathy, intense narcissism, and superficiality—are the exact same traits required to be a serial killer." }
    ],
    'A Simple Plan': [
        { question: "How does the film explore the 'Found Money' trope?", answer: "It acts as a morality play. The characters start as decent, working-class men. The film meticulously shows how the sudden presence of $4.4 million acts as a poison, slowly eroding their morals as they try to cover up the initial crime." },
        { question: "What is Sarah's role in the conspiracy?", answer: "Sarah (Hank's wife) represents the seductive, rationalizing voice of greed. She stays removed from the initial crime but uses cold, calculating logic to push Hank into committing worse atrocities to protect their newfound 'American Dream.'" },
        { question: "Why did Hank have to kill Jacob?", answer: "Jacob is the tragic heart of the film. He realizes that keeping the money has destroyed their souls and prefers to die rather than live with the guilt. Hank shoots his own brother to protect the secret, completing his total moral collapse." },
        { question: "What is the irony of the ending?", answer: "After murdering multiple people and destroying his family, Hank discovers the stolen money was marked by the FBI and is completely unspendable. He burns the millions of dollars in the fireplace, meaning the entire tragedy was for absolutely nothing." }
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

// 🔥 6. THE KEYWORD BRIDGE 
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        
        if (lowerType.includes('sex') || lowerType.includes('orgy')) types.add('sexual content');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('drug') || lowerType.includes('quaalude')) types.add('drug use');
        if (lowerType.includes('violence') || lowerType.includes('murder')) types.add('graphic violence');
    });
    return Array.from(types);
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR 
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} (${currentMovieYear}) - A thrilling cinematic exploration of extreme capitalism, moral decay, and the destructive pursuit of wealth.`,
        'genre': movie.genre,
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = GREED_MOVIE_FAQS[movie.Title] ? [...GREED_MOVIE_FAQS[movie.Title]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
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
                'text': `According to the Filmiway Intensity metric, ${movie.Title} peaks at the following moments of tension and moral collapse:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('violence') || t.includes('drug'); 
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Does ${movie.Title} contain adult or inappropriate scenes?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `Yes, according to the Filmiway Content Advisory, ${movie.Title} contains adult scenes including ${typesString}. These timestamps are accurate for the ${currentRuntime} runtime. Exact timestamps for these scenes are:<br><br><ul>${schemaListText}</ul>` 
            }
        });
    } else {
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Does ${movie.Title} contain adult or inappropriate scenes?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `No, the Filmiway Content Advisory confirms that ${movie.Title} is completely free of explicit sexual content and nudity. This assessment is accurate for the ${currentRuntime} runtime.` 
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

// 🔥 8. FRONTEND UI SYNC (Displays the timestamps dynamically on the Next.js page)
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = GREED_MOVIE_FAQS[movieTitle] ? [...GREED_MOVIE_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense narrative scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('violence') || t.includes('drug');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');

        const uiListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `• ${timeRange} - ${fullType}`;
        }).join('\n');

        staticFaqs.unshift({
            question: `Does ${movieTitle} contain adult or inappropriate scenes?`,
            answer: `Yes, according to the Filmiway Timestamps & Parents Guide, ${movieTitle} contains adult scenes including ${typesString}. These timestamps are accurate for the ${finalRuntime} runtime. Exact timestamps for these scenes are:\n\n${uiListText}`
        });
    } else {
        staticFaqs.unshift({
            question: `Does ${movieTitle} contain adult or inappropriate scenes?`,
            answer: `No, the Filmiway Timestamps & Parents Guide confirms that ${movieTitle} is completely free of explicit sexual content and nudity. This assessment is accurate for the ${finalRuntime} runtime.`
        });
    }

    return staticFaqs;
};