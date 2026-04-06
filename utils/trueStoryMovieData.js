// utils/trueStoryMovieData.js - BEST TRUE STORY COLLECTION DATA ✅
// 100% SEO SAFE: Framed via Historical Impact, Character Studies, and Real-World Consequences.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 424, "imdbID": "tt0108052", "Title": "Schindler's List", "year": 1993, "genre": "Drama", "runtime": 195, "rank": 1 },
    { "tmdbId": 769, "imdbID": "tt0099685", "Title": "Goodfellas", "year": 1990, "genre": "Crime", "runtime": 145, "rank": 2 },
    { "tmdbId": 423, "imdbID": "tt0253474", "Title": "The Pianist", "year": 2002, "genre": "Drama", "runtime": 150, "rank": 3 },
    { "tmdbId": 872585, "imdbID": "tt15398776", "Title": "Oppenheimer", "year": 2023, "genre": "History", "runtime": 180, "rank": 4 },
    { "tmdbId": 197, "imdbID": "tt0112573", "Title": "Braveheart", "year": 1995, "genre": "Action", "runtime": 178, "rank": 5 },
    { "tmdbId": 76203, "imdbID": "tt2024544", "Title": "12 Years a Slave", "year": 2013, "genre": "Drama", "runtime": 134, "rank": 6 },
    { "tmdbId": 96721, "imdbID": "tt1979320", "Title": "Rush", "year": 2013, "genre": "Action", "runtime": 123, "rank": 7 },
    { "tmdbId": 152532, "imdbID": "tt0790636", "Title": "Dallas Buyers Club", "year": 2013, "genre": "Drama", "runtime": 117, "rank": 8 },
    { "tmdbId": 37799, "imdbID": "tt1285016", "Title": "The Social Network", "year": 2010, "genre": "Drama", "runtime": 120, "rank": 9 },
    { "tmdbId": 9366, "imdbID": "tt0119008", "Title": "Donnie Brasco", "year": 1997, "genre": "Crime", "runtime": 127, "rank": 10 }
];

// ✅ STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    424: "Whoever saves one life, saves the world entire.",
    769: "As far back as I can remember, I always wanted to be a gangster.",
    423: "I am a pianist. Will you play something for me?",
    872585: "Now I am become Death, the destroyer of worlds.",
    197: "They may take our lives, but they'll never take our freedom!",
    76203: "I don't want to survive. I want to live.",
    96721: "A wise man gets more use from his enemies than a fool from his friends.",
    152532: "I got one life, right? Mine. But I want somebody else's sometimes.",
    37799: "You don't get to 500 million friends without making a few enemies.",
    9366: "Forget about it."
};

// ✅ SENSITIVE TIMELINES (Clinical, factual timestamps for the Parents Guide tool)
export const SENSITIVE_TIMELINES = {
    // 1. Schindler's List
    424: { 
        scenes: [
            { start: "0:44:15", end: "0:44:50", type: "Sex & Nudity", severity: "High" },
            { start: "1:15:40", end: "1:16:50", type: "Nudity (Woman)", severity: "High" },
            { start: "2:00:25", end: "2:03:00", type: "Nudity (Men & Women)", severity: "High" },
            { start: "2:34:45", end: "2:37:05", type: "Nudity (Women)", severity: "High" }
        ]
    },

    // 2. Goodfellas
    769: { 
        scenes: [
            { start: "0:48:31", end: "0:48:34", type: "Nudity (Woman) Brief", severity: "Moderate" }
        ]
    },

    // 3. The Pianist
    423: { scenes: [] },

    // 4. Oppenheimer
    872585: { 
        scenes: [
            { start: "0:23:14", end: "0:24:46", type: "Sex & Nudity", severity: "High" },
            { start: "1:14:38", end: "1:15:14", type: "Nudity", severity: "High" },
            { start: "1:15:43", end: "1:16:00", type: "Sex & Nudity", severity: "High" }
        ]
    },

    // 5. Braveheart
    197: { 
        scenes: [
            { start: "0:38:23", end: "0:39:20", type: "Nudity (Woman)", severity: "Moderate" }
        ]
    },

    // 6. 12 Years a Slave
    76203: { 
        scenes: [
            { start: "0:04:29", end: "0:05:21", type: "Sexual Content", severity: "High" },
            { start: "0:17:33", end: "0:18:10", type: "Partial Nudity (Men)", severity: "Moderate" },
            { start: "0:28:46", end: "0:29:06", type: "Nudity (Men & Women)", severity: "High" },
            { start: "0:29:08", end: "0:29:32", type: "Nudity (Men & Women)", severity: "High" },
            { start: "1:13:35", end: "1:15:10", type: "Sex", severity: "High" },
            { start: "1:48:28", end: "1:52:03", type: "Nudity (Woman)", severity: "High" }
        ]
    },

    // 7. Rush
    96721: { 
        scenes: [
            { start: "0:05:00", end: "0:05:17", type: "Sex & Nudity", severity: "High" },
            { start: "0:56:15", end: "0:56:34", type: "Sex & Nudity", severity: "High" },
            { start: "1:47:03", end: "1:47:15", type: "Nudity", severity: "High" }
        ]
    },

    // 8. Dallas Buyers Club
    152532: { 
        scenes: [
            { start: "0:01:01", end: "0:01:40", type: "Sex", severity: "High" },
            { start: "0:12:25", end: "0:12:45", type: "Nudity (Women) & Sexual Content", severity: "High" },
            { start: "0:12:46", end: "0:13:11", type: "Nudity (Women) & Sex", severity: "High" },
            { start: "0:18:16", end: "0:18:27", type: "Sex", severity: "High" },
            { start: "0:25:41", end: "0:26:21", type: "Nudity (Woman)", severity: "High" },
            { start: "0:28:12", end: "0:28:28", type: "Nudity (Woman)", severity: "Moderate" },
            { start: "1:06:37", end: "1:06:46", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "1:10:48", end: "1:11:07", type: "Sex", severity: "High" },
            { start: "1:17:39", end: "1:18:00", type: "Nudity (Photos) & Sexual Content", severity: "Moderate" },
            { start: "1:36:08", end: "1:36:15", type: "Sex & Nudity", severity: "High" },
            { start: "1:36:21", end: "1:36:42", type: "Nudity", severity: "High" }
        ]
    },

    // 9. The Social Network
    37799: { scenes: [] },

    // 10. Donnie Brasco
    9366: { 
        scenes: [
            { start: "1:22:45", end: "1:22:55", type: "Nudity (Woman)", severity: "High" }
        ]
    }
};

export const FALLBACK_POSTERS = {
    424: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3MWE5YjIyZTRkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    769: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX500.jpg",
    423: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ5ODZkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    872585: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX500.jpg",
    197: "https://m.media-amazon.com/images/M/MV5BMzZkNTU1ZTYtZDU1Zi00NDgxLWEzNTItZTViMTc1YTMxNjFhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    76203: "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_SX500.jpg",
    96721: "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    152532: "https://m.media-amazon.com/images/M/MV5BMTYwMTA4MzgyOF5BMl5BanBnXkFtZTgwNDA2NDYyMDE@._V1_SX500.jpg",
    37799: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    9366: "https://m.media-amazon.com/images/M/MV5BMTkzNjk0MzUxN15BMl5BanBnXkFtZTgwNTQ1NjQ3NjM@._V1_SX500.jpg"
};

// ✅ Custom metric for this collection: 'historicalAccuracy' and 'dramaticTension'
const createTrueStoryData = (data) => ({
    historicalAccuracy: 85, 
    dramaticTension: 90,
    complexityLevel: "HIGH",
    dominantColor: "#1c1917",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    424: createTrueStoryData({ // Schindler's List
        historicalAccuracy: 95, complexityLevel: "EXTREME", 
        dominantColor: "#52525b", rating: 9.0, criticsScore: 98, audienceScore: 97, director: "Steven Spielberg", 
        cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"], boxOffice: "$322.2 million", budget: "$22 million", 
        dna: { "History": 50, "Drama": 30, "War": 20 },
        scenes: [
            { time: 15, intensity: 55, label: "The Typewriter" }, 
            { time: 65, intensity: 95, label: "Liquidation of the Ghetto" }, 
            { time: 110, intensity: 88, label: "The Girl in Red" }, 
            { time: 165, intensity: 90, label: "The List is Life" },
            { time: 185, intensity: 100, label: "I Could Have Got More" } 
        ],
        synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis, ultimately saving over a thousand lives.",
        themes: ["Holocaust", "Redemption", "The Value of Human Life"]
    }),
    769: createTrueStoryData({ // Goodfellas
        historicalAccuracy: 88, complexityLevel: "MEDIUM", 
        dominantColor: "#7f1d1d", rating: 8.7, criticsScore: 96, audienceScore: 97, director: "Martin Scorsese", 
        cast: ["Ray Liotta", "Robert De Niro", "Joe Pesci"], boxOffice: "$47 million", budget: "$25 million", 
        dna: { "Crime": 50, "Biography": 30, "Drama": 20 },
        scenes: [
            { time: 2, intensity: 85, label: "The Trunk" }, 
            { time: 45, intensity: 92, label: "Funny How?" }, 
            { time: 85, intensity: 75, label: "The Lufthansa Heist" }, 
            { time: 115, intensity: 98, label: "Sunday Gravy / Helicopter Paranoia" }, 
            { time: 135, intensity: 80, label: "Witness Protection" } 
        ],
        synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        themes: ["Organized Crime", "Greed", "Betrayal"]
    }),
    423: createTrueStoryData({ // The Pianist
        historicalAccuracy: 92, complexityLevel: "HIGH", 
        dominantColor: "#78350f", rating: 8.5, criticsScore: 95, audienceScore: 96, director: "Roman Polanski", 
        cast: ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"], boxOffice: "$120.1 million", budget: "$35 million", 
        dna: { "War": 40, "Biography": 35, "Drama": 25 },
        scenes: [
            { time: 10, intensity: 65, label: "The Bombing of the Station" }, 
            { time: 55, intensity: 85, label: "The Umschlagplatz" }, 
            { time: 95, intensity: 78, label: "The Warsaw Uprising" }, 
            { time: 125, intensity: 95, label: "Playing for the Officer" }, 
            { time: 145, intensity: 70, label: "The Coat" } 
        ],
        synopsis: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II, relying on his talent, strangers' kindness, and sheer will.",
        themes: ["Survival", "The Power of Art", "Isolation"]
    }),
    872585: createTrueStoryData({ // Oppenheimer
        historicalAccuracy: 85, complexityLevel: "EXTREME", 
        dominantColor: "#fb923c", rating: 8.3, criticsScore: 93, audienceScore: 91, director: "Christopher Nolan", 
        cast: ["Cillian Murphy", "Robert Downey Jr.", "Emily Blunt"], boxOffice: "$960 million", budget: "$100 million", 
        dna: { "History": 40, "Thriller": 35, "Biography": 25 },
        scenes: [
            { time: 35, intensity: 60, label: "The Poisoned Apple" }, 
            { time: 85, intensity: 75, label: "Building Los Alamos" }, 
            { time: 118, intensity: 100, label: "The Trinity Test" }, 
            { time: 140, intensity: 90, label: "The Gymnasium Speech" }, 
            { time: 165, intensity: 95, label: "The Security Clearance Hearing" } 
        ],
        synopsis: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II, and the devastating political and psychological fallout that followed.",
        themes: ["Scientific Responsibility", "Political Persecution", "Destruction"]
    }),
    197: createTrueStoryData({ // Braveheart
        historicalAccuracy: 60, complexityLevel: "MEDIUM", 
        dominantColor: "#1e3a8a", rating: 8.3, criticsScore: 78, audienceScore: 85, director: "Mel Gibson", 
        cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"], boxOffice: "$213.2 million", budget: "$72 million", 
        dna: { "Action": 45, "History": 30, "Drama": 25 },
        scenes: [
            { time: 30, intensity: 75, label: "Murron's Execution" }, 
            { time: 55, intensity: 85, label: "The MacClannough Rescue" }, 
            { time: 85, intensity: 98, label: "Battle of Stirling Bridge" }, 
            { time: 135, intensity: 88, label: "The Betrayal at Falkirk" }, 
            { time: 170, intensity: 100, label: "Freedom!" } 
        ],
        synopsis: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        themes: ["Freedom", "Martyrdom", "Rebellion"]
    }),
    76203: createTrueStoryData({ // 12 Years a Slave
        historicalAccuracy: 90, complexityLevel: "HIGH", 
        dominantColor: "#b45309", rating: 8.1, criticsScore: 95, audienceScore: 90, director: "Steve McQueen", 
        cast: ["Chiwetel Ejiofor", "Michael Fassbender", "Lupita Nyong'o"], boxOffice: "$187.7 million", budget: "$22 million", 
        dna: { "History": 45, "Drama": 40, "Biography": 15 },
        scenes: [
            { time: 15, intensity: 85, label: "The Kidnapping" }, 
            { time: 45, intensity: 88, label: "Hanging from the Tree" }, 
            { time: 95, intensity: 75, label: "The Soap" }, 
            { time: 115, intensity: 100, label: "Patsy's Whipping" }, 
            { time: 125, intensity: 90, label: "The Rescue" } 
        ],
        synopsis: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery for twelve grueling years.",
        themes: ["Slavery", "Endurance", "Dehumanization"]
    }),
    96721: createTrueStoryData({ // Rush
        historicalAccuracy: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#b91c1c", rating: 8.1, criticsScore: 89, audienceScore: 88, director: "Ron Howard", 
        cast: ["Chris Hemsworth", "Daniel Brühl", "Olivia Wilde"], boxOffice: "$96.9 million", budget: "$38 million", 
        dna: { "Action": 40, "Biography": 35, "Sports": 25 },
        scenes: [
            { time: 25, intensity: 65, label: "Formula 3 Rivalry" }, 
            { time: 65, intensity: 80, label: "The Wedding and the Track" }, 
            { time: 85, intensity: 95, label: "Nürburgring Crash" }, 
            { time: 95, intensity: 88, label: "The Hospital Recovery" }, 
            { time: 115, intensity: 92, label: "The Final Race in Japan" } 
        ],
        synopsis: "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda, exploring how their vastly different approaches to life and racing pushed them to the absolute edge.",
        themes: ["Rivalry", "Risk", "Obsession"]
    }),
    152532: createTrueStoryData({ // Dallas Buyers Club
        historicalAccuracy: 75, complexityLevel: "MEDIUM", 
        dominantColor: "#082f49", rating: 7.9, criticsScore: 92, audienceScore: 91, director: "Jean-Marc Vallée", 
        cast: ["Matthew McConaughey", "Jared Leto", "Jennifer Garner"], boxOffice: "$55.2 million", budget: "$5 million", 
        dna: { "Biography": 40, "Drama": 40, "History": 20 },
        scenes: [
            { time: 10, intensity: 75, label: "The Diagnosis" }, 
            { time: 45, intensity: 65, label: "Crossing the Border" }, 
            { time: 75, intensity: 85, label: "The Supermarket Confrontation" }, 
            { time: 95, intensity: 90, label: "Rayon's Farewell" }, 
            { time: 110, intensity: 80, label: "The Courtroom" } 
        ],
        synopsis: "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
        themes: ["Medical Establishment", "Survival", "Prejudice"]
    }),
    37799: createTrueStoryData({ // The Social Network
        historicalAccuracy: 70, complexityLevel: "HIGH", 
        dominantColor: "#022c22", rating: 7.8, criticsScore: 96, audienceScore: 87, director: "David Fincher", 
        cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"], boxOffice: "$224.9 million", budget: "$40 million", 
        dna: { "Biography": 40, "Drama": 40, "Thriller": 20 },
        scenes: [
            { time: 5, intensity: 75, label: "The Breakup Scene" }, 
            { time: 35, intensity: 85, label: "Facemash Launch" }, 
            { time: 75, intensity: 80, label: "Meeting Sean Parker" }, 
            { time: 105, intensity: 95, label: "Eduardo's Confrontation" }, 
            { time: 115, intensity: 70, label: "Refresh" } 
        ],
        synopsis: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
        themes: ["Ambition", "Betrayal", "The Digital Age"]
    }),
    9366: createTrueStoryData({ // Donnie Brasco
        historicalAccuracy: 80, complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 7.7, criticsScore: 88, audienceScore: 89, director: "Mike Newell", 
        cast: ["Al Pacino", "Johnny Depp", "Michael Madsen"], boxOffice: "$124.9 million", budget: "$35 million", 
        dna: { "Crime": 50, "Biography": 30, "Thriller": 20 },
        scenes: [
            { time: 25, intensity: 65, label: "The Jewel Assessment" }, 
            { time: 65, intensity: 85, label: "The Japanese Restaurant" }, 
            { time: 95, intensity: 90, label: "The Basement Hit" }, 
            { time: 110, intensity: 88, label: "The Tape Recorder" }, 
            { time: 120, intensity: 95, label: "Lefty's Final Walk" } 
        ],
        synopsis: "An FBI undercover agent infiltrates the mob and finds himself identifying more with the mafia life, specifically with an aging hitman, than his regular life.",
        themes: ["Undercover Identity", "Loyalty", "The Toll of Deception"]
    })
};

// 🎬 TRUE STORY MOVIE FAQS - (100% SEO SAFE, CRITICAL ANALYSIS ONLY)
export const TRUE_STORY_MOVIE_FAQS = {
    "Schindler's List": [
        { question: "How accurate is Schindler's List to real history?", answer: "While dramatized for pacing, the core events are historically accurate. Oskar Schindler genuinely saved roughly 1,200 Jewish lives by employing them in his factories. The film's depiction of the Kraków ghetto liquidation and Amon Göth's brutality are closely based on survivor testimonies." },
        { question: "What is the significance of the girl in the red coat?", answer: "The red coat is one of the only instances of color in the film. It symbolizes the innocence of the victims and serves as the catalyst for Schindler's moral awakening, transforming the abstract concept of mass casualties into a singular, undeniable tragedy." },
        { question: "Why was the film shot in black and white?", answer: "Director Steven Spielberg chose black and white to give the film a documentary-like realism, reflecting the actual archival footage of the Holocaust. It also strips away the glamor of Hollywood cinematography to present the unvarnished horror of the events." },
        { question: "How did Oskar Schindler afford to save so many people?", answer: "Schindler used almost his entire fortune—amassed through his wartime business—to bribe Nazi officials, purchase food on the black market, and buy the lives of his workers, ultimately ending the war completely bankrupt." }
    ],
    "Goodfellas": [
        { question: "How closely does Goodfellas follow the true story of Henry Hill?", answer: "The film is highly accurate, based directly on Nicholas Pileggi's non-fiction book 'Wiseguy.' Most of the major hits, the Lufthansa heist, and Hill's eventual descent into drug addiction and witness protection happened very similarly in real life." },
        { question: "What does the tracking shot through the Copacabana represent?", answer: "The famous continuous shot immerses the audience in Henry's worldview. It visually demonstrates the seductive power, access, and privilege that came with being in the mob, explaining why Henry found the lifestyle so intoxicating." },
        { question: "Why is Joe Pesci's character so volatile?", answer: "Pesci's character, Tommy DeVito, is based on real-life mobster Tommy DeSimone. The 'Funny How?' scene was actually improvised based on a real interaction Pesci had with a mobster in his youth, perfectly capturing the terrifying unpredictability of mob enforcers." },
        { question: "What is the ultimate message of Goodfellas?", answer: "Unlike many gangster films that glorify the lifestyle, Goodfellas ends on a hollow note. It shows that a life built on greed and betrayal ultimately leads to paranoia, death, or, in Henry's case, a living purgatory as an ordinary 'schnook.'" }
    ],
    "The Pianist": [
        { question: "Is The Pianist based on a true story?", answer: "Yes. It is based on the autobiographical survival book by Władysław Szpilman, a Polish-Jewish pianist who survived the Holocaust in Warsaw. The film meticulously follows his documented experiences." },
        { question: "How does the film depict the role of art in survival?", answer: "Music serves as both Szpilman's mental salvation and literal savior. In his darkest moments of starvation, his memory of playing sustains his spirit, and ultimately, his talent convinces a German officer to spare and supply him." },
        { question: "Why is the German officer, Hosenfeld, depicted sympathetically?", answer: "Captain Wilm Hosenfeld was a real German officer who grew disgusted with Nazi atrocities. He secretly helped hide and feed several Polish people, including Szpilman, making the film's portrayal historically accurate." },
        { question: "How does the film differ from Schindler's List?", answer: "While Schindler's List focuses on a collective rescue orchestrated by a figure in power, The Pianist is a deeply intimate, isolating story of individual survival, relying heavily on chance, hiding, and silence rather than grand heroics." }
    ],
    "Oppenheimer": [
        { question: "How accurately does the film portray the Trinity Test?", answer: "Christopher Nolan recreated the Trinity Test without using CGI, relying on practical effects. The tension, the silence preceding the blast wave, and the immense psychological weight of the moment align closely with historical accounts of the scientists present." },
        { question: "Why does the timeline constantly shift between color and black-and-white?", answer: "Nolan uses color to represent Oppenheimer's subjective, first-person perspective (fission), while the black-and-white sequences represent the objective, historical perspective (fusion), largely centered around Lewis Strauss's Senate confirmation hearings." },
        { question: "What was the real reason behind Oppenheimer's security clearance revocation?", answer: "While framed around his past communist associations, the revocation was heavily orchestrated by political enemies like Lewis Strauss, who resented Oppenheimer's influence and his opposition to the development of the hydrogen bomb." },
        { question: "What is the meaning of the final scene with Einstein?", answer: "The ending reveals that Oppenheimer wasn't seeking Einstein's mathematical advice, but rather sharing a grim realization. He believed that by creating the atomic bomb, they had inadvertently started a chain reaction that would eventually destroy the world." }
    ],
    "Braveheart": [
        { question: "How historically accurate is Braveheart?", answer: "The film takes significant dramatic liberties. The real William Wallace was a minor noble, not a poor farmer. The battle tactics at Stirling Bridge omit the actual bridge, and the romantic subplot with Isabella of France is historically impossible due to timelines." },
        { question: "Why did the film resonate so strongly despite its historical inaccuracies?", answer: "Braveheart succeeds purely on emotional storytelling. It taps into universal themes of anti-tyranny, martyrdom, and the fight for freedom, using visceral battle sequences to anchor its highly romanticized narrative." },
        { question: "What is the significance of the blue face paint?", answer: "While iconic, the blue woad face paint is a historical inaccuracy for the 13th century (it was used by the ancient Picts centuries earlier). However, director Mel Gibson used it to visually distinguish the Scots as wild, untamed rebels against the uniformed English." },
        { question: "What does the ending of Braveheart signify?", answer: "Wallace's refusal to submit to the English king, even under extreme torture, cements his status as a martyr. His final cry of 'Freedom' transcends his physical death, directly inspiring Robert the Bruce and the Scottish army to finally win their independence." }
    ],
    "12 Years a Slave": [
        { question: "Is the film an accurate adaptation of Solomon Northup's memoir?", answer: "Yes, it is considered one of the most historically accurate films about American slavery. Director Steve McQueen worked closely with historians to ensure the brutal realities of plantation life matched Northup's 1853 text perfectly." },
        { question: "How does the film use long takes to convey its message?", answer: "McQueen frequently uses agonizingly long, unbroken shots—such as Solomon hanging from the tree while normal life continues around him. This forces the audience to confront the normalization of cruelty and prevents them from looking away from the horror." },
        { question: "What is the dynamic between Epps and Patsy?", answer: "Edwin Epps is terrifyingly driven by his obsessive, abusive lust for Patsy, while his wife acts out of jealous cruelty. This dynamic accurately portrays how the institution of slavery corrupted the morality and psychology of the enslavers as much as it destroyed the enslaved." },
        { question: "Why is the ending so abrupt?", answer: "The ending accurately reflects Solomon's sudden rescue. The abrupt shift from the nightmare of slavery back to the quiet of a civilized parlor highlights the surreal, fractured reality of a man whose life was stolen and handed back to him changed forever." }
    ],
    "Rush": [
        { question: "Did James Hunt and Niki Lauda really hate each other?", answer: "In reality, the two men were friendly rivals who respected each other immensely, and even briefly shared an apartment early in their careers. The film heightens their animosity for dramatic tension, though their contrasting personalities are highly accurate." },
        { question: "How accurate is the depiction of Lauda's Nürburgring crash?", answer: "The crash and its aftermath are depicted with brutal accuracy. Lauda's near-fatal burns, the agonizing lung-vacuuming procedure, and his miraculous, pain-fueled return to racing just six weeks later all occurred exactly as shown." },
        { question: "What does the film say about the psychology of extreme sports?", answer: "Rush explores the idea that absolute greatness often requires a foil. Hunt's reckless passion and Lauda's clinical precision push each other to limits they could never have reached alone, proving that enemies can be greater motivators than friends." },
        { question: "Why did Lauda pull out of the final race in Japan?", answer: "Amid torrential rain and extreme danger, Lauda realized his life was worth more than a championship and retired after two laps. It perfectly encapsulates his character's logic-driven approach, contrasted with Hunt's willingness to risk death for glory." }
    ],
    "Dallas Buyers Club": [
        { question: "How much of Ron Woodroof's story is true?", answer: "Woodroof really was an electrician who smuggled unapproved treatments for AIDS patients. However, the characters of Rayon (Jared Leto) and Dr. Eve Saks (Jennifer Garner) are fictional composites created to represent the LGBTQ+ community and sympathetic medical professionals of the era." },
        { question: "What is the film's critique of the FDA?", answer: "The film heavily criticizes the FDA and the medical establishment of the 1980s for prioritizing bureaucratic processes and pharmaceutical profits (like the highly toxic early trials of AZT) over the immediate survival of terminal patients." },
        { question: "How does Woodroof's character evolve?", answer: "Woodroof begins the film as a deeply homophobic, selfish hustler. As he faces his own mortality and relies on the LGBTQ+ community for his business and survival, he undergoes a profound transformation into a genuine advocate and ally." },
        { question: "What was the physical toll on the actors?", answer: "Both Matthew McConaughey and Jared Leto lost extreme amounts of weight (nearly 50 pounds for McConaughey) to accurately portray the physical wasting associated with late-stage AIDS, reflecting the devastating reality of the disease in the 80s." }
    ],
    "The Social Network": [
        { question: "Is The Social Network historically accurate?", answer: "The film takes heavy dramatic license. Aaron Sorkin based the script on the book 'The Accidental Billionaires,' which relied heavily on Eduardo Saverin's perspective. Mark Zuckerberg has stated the film invented much of the dramatic interpersonal conflict." },
        { question: "Why is the film considered a modern classic if it isn't strictly factual?", answer: "The film succeeds as a thematic exploration of the digital age. It captures the irony of a man who built the world's greatest social connection tool while being completely incapable of maintaining genuine human connections himself." },
        { question: "What role does Sean Parker play in the narrative?", answer: "Sean Parker (played by Justin Timberlake) acts as the devil on Zuckerberg's shoulder. He represents Silicon Valley's ruthless ambition and disruption, pulling Mark away from Eduardo's cautious, traditional business approach." },
        { question: "What is the significance of the final scene?", answer: "The film ends with Zuckerberg sitting alone, repeatedly refreshing a friend request sent to his ex-girlfriend. It cements his ultimate isolation, showing that despite his billions and global influence, he is still just a lonely college kid seeking validation." }
    ],
    "Donnie Brasco": [
        { question: "How true to life is the story of Donnie Brasco?", answer: "The film is highly authentic. FBI agent Joseph Pistone spent six years undercover as Donnie Brasco, infiltrating the Bonanno crime family. His work led to over 100 federal convictions and devastated the New York mafia." },
        { question: "What makes Lefty Ruggiero a tragic character?", answer: "Lefty, played by Al Pacino, breaks the stereotype of the glamorous mob boss. He is an aging, low-level hitman struggling with debt and feeling unappreciated. His genuine, fatherly love for Donnie makes his eventual betrayal deeply tragic." },
        { question: "How does the film explore the psychological toll of undercover work?", answer: "The film brilliantly shows Pistone losing his own identity. The deeper he gets into the mafia, the more his marriage falls apart and the more he begins to genuinely care for the criminals he is tasked with destroying." },
        { question: "What is the meaning behind the phrase 'Forget about it'?", answer: "The film dedicates a scene to explaining the nuances of 'Forget about it' (Fuggedaboutit). It serves as a linguistic motif representing the mafia's closed-off culture, where complex threats, agreements, and dismissals are all communicated through a single, coded phrase." }
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

    const staticFaqs = TRUE_STORY_MOVIE_FAQS[movie.Title] ? [...TRUE_STORY_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = TRUE_STORY_MOVIE_FAQS[movieTitle] ? [...TRUE_STORY_MOVIE_FAQS[movieTitle]] : [];
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