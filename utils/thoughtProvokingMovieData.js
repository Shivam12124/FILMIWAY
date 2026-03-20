// utils/thoughtProvokingMovieData.js - THOUGHT-PROVOKING COLLECTION DATA ✅
// Movies exploring the depths of human existence, grief, hope, and the search for meaning.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 3782, "imdbID": "tt0044741", "Title": "Ikiru", "year": 1952, "genre": "Drama", "runtime": 143, "rank": 1 },
    { "tmdbId": 424, "imdbID": "tt0108052", "Title": "Schindler's List", "year": 1993, "genre": "Drama", "runtime": 195, "rank": 2 },
    { "tmdbId": 278, "imdbID": "tt0111161", "Title": "The Shawshank Redemption", "year": 1994, "genre": "Drama", "runtime": 142, "rank": 3 },
    { "tmdbId": 497, "imdbID": "tt0120689", "Title": "The Green Mile", "year": 1999, "genre": "Drama", "runtime": 189, "rank": 4 },
    { "tmdbId": 334541, "imdbID": "tt4034228", "Title": "Manchester by the Sea", "year": 2016, "genre": "Drama", "runtime": 137, "rank": 5 },
    { "tmdbId": 1402, "imdbID": "tt0436659", "Title": "The Pursuit of Happyness", "year": 2006, "genre": "Drama", "runtime": 117, "rank": 6 },
    { "tmdbId": 5915, "imdbID": "tt0758758", "Title": "Into the Wild", "year": 2007, "genre": "Adventure", "runtime": 148, "rank": 7 },
    { "tmdbId": 207, "imdbID": "tt0097165", "Title": "Dead Poets Society", "year": 1989, "genre": "Drama", "runtime": 128, "rank": 8 },
    { "tmdbId": 164, "imdbID": "tt0119217", "Title": "Good Will Hunting", "year": 1997, "genre": "Drama", "runtime": 126, "rank": 9 },
    { "tmdbId": 122906, "imdbID": "tt2194499", "Title": "About Time", "year": 2013, "genre": "Comedy", "runtime": 123, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    3782: "I can't afford to hate people. I don't have that kind of time.",
    424: "Whoever saves one life, saves the world entire.",
    278: "Get busy living, or get busy dying.",
    497: "I'm tired, boss. Tired of bein' on the road, lonely as a sparrow in the rain.",
    334541: "I can't beat it. I can't beat it. I'm sorry.",
    1402: "You got a dream... You gotta protect it.",
    5915: "Happiness is only real when shared.",
    207: "O Captain, my Captain.",
    164: "It's not your fault.",
    122906: "We're all traveling through time together, every day of our lives."
};

// ✅ SENSITIVE TIMELINES (Crucial for High-Volume Timestamps Search)
export const SENSITIVE_TIMELINES = {
    // 1. Ikiru
    3782: { scenes: [] }, // Clean Masterpiece
    
    // 2. Schindler's List
    424: { 
        scenes: [
            { start: "0:45:10", end: "0:49:30", type: "Liquidation of the Ghetto (Extreme Violence/Executions)", severity: "Extreme" },
            { start: "1:15:20", end: "1:17:40", type: "Amon Goeth Balcony Shootings", severity: "Extreme" },
            { start: "2:10:15", end: "2:15:40", type: "Auschwitz Showers (Full Nudity & Psychological Terror)", severity: "Extreme" },
            { start: "2:30:10", end: "2:32:45", type: "Burning of the Bodies", severity: "Extreme" }
        ] 
    },
    
    // 3. The Shawshank Redemption
    278: { 
        scenes: [
            { start: "0:28:10", end: "0:30:45", type: "The Sisters (Sexual Assault/Violence)", severity: "High" },
            { start: "0:42:15", end: "0:45:20", type: "The Tar Roof Beating (Graphic Violence)", severity: "High" },
            { start: "1:35:10", end: "1:37:30", type: "Tommy's Execution", severity: "High" },
            { start: "1:45:20", end: "1:47:15", type: "Warden Norton's Suicide", severity: "Moderate" }
        ] 
    },

    // 4. The Green Mile
    497: { 
        scenes: [
            { start: "1:10:15", end: "1:14:30", type: "Arlen Bitterbuck's Execution", severity: "Moderate" },
            { start: "1:55:20", end: "2:02:45", type: "Eduard Delacroix's Execution (Extreme Graphic Gore/Burning)", severity: "Extreme" },
            { start: "2:35:10", end: "2:40:30", type: "John Coffey's Execution (Profound Emotional Trauma)", severity: "Extreme" }
        ] 
    },

    // 5. Manchester by the Sea
    334541: { 
        scenes: [
            { start: "0:15:20", end: "0:18:40", type: "Bar Fight (Sudden Violence)", severity: "Moderate" },
            { start: "0:48:15", end: "0:52:30", type: "The House Fire (Death of Children / Extreme Grief)", severity: "Extreme" },
            { start: "1:25:10", end: "1:28:45", type: "The Police Station Suicide Attempt", severity: "High" },
            { start: "1:55:20", end: "1:59:30", type: "Street Encounter with Randi (Intense Emotional Trauma)", severity: "High" }
        ] 
    },

    // 6. The Pursuit of Happyness
    1402: { 
        scenes: [
            { start: "1:08:15", end: "1:12:30", type: "Sleeping in the Subway Bathroom (High Emotional Stress)", severity: "Moderate" },
            { start: "1:25:40", end: "1:30:15", type: "The Homeless Shelter Line (Panic & Desperation)", severity: "Moderate" }
        ] 
    },

    // 7. Into the Wild
    5915: { 
        scenes: [
            { start: "1:08:15", end: "1:11:30", type: "Naturist Nudity (Swimming)", severity: "Moderate" },
            { start: "1:45:20", end: "1:48:30", type: "Slaughtering the Moose (Graphic Animal Processing)", severity: "High" },
            { start: "2:05:40", end: "2:18:20", type: "Starvation & Death (Graphic Human Suffering)", severity: "Extreme" }
        ] 
    },

    // 8. Dead Poets Society
    207: { 
        scenes: [
            { start: "1:45:10", end: "1:52:30", type: "Neil's Suicide & Discovery (Severe Emotional Trauma)", severity: "Extreme" }
        ] 
    },

    // 9. Good Will Hunting
    164: { 
        scenes: [
            { start: "0:15:20", end: "0:18:45", type: "Playground Brawl (Brutal Violence)", severity: "Moderate" },
            { start: "0:45:10", end: "0:48:30", type: "Pervasive Graphic Profanity", severity: "Moderate" },
            { start: "1:40:15", end: "1:45:30", type: "Child Abuse Flashbacks / 'It's Not Your Fault' (Deep Emotional Trauma)", severity: "High" }
        ] 
    },

    // 10. About Time
    122906: { 
        scenes: [
            { start: "0:35:10", end: "0:38:20", type: "Implied Sexual Content", severity: "Mild" },
            { start: "1:25:15", end: "1:35:40", type: "Dad's Cancer Diagnosis & Goodbye (Emotional Trauma)", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    3782: "https://m.media-amazon.com/images/M/MV5BZDA0Zng1YjItOTIzMy00NGQzLTg3MzctOTc3NjBkOTYzN2E1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX500.jpg",
    424: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    278: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX500.jpg",
    497: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX500.jpg",
    334541: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX500.jpg",
    1402: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3Nl5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX500.jpg",
    5915: "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU3MDc3NDQwOTM@._V1_SX500.jpg",
    207: "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    164: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    122906: "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_SX500.jpg"
};

// ✅ Custom metric for this collection: 'philosophicalDepth' and 'emotionalResonance'
const createThoughtData = (data) => ({
    philosophicalDepth: 90, 
    emotionalResonance: 85,
    complexityLevel: "MASTERPIECE",
    dominantColor: "#1e3a8a", // Deep Indigo/Blue Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Ikiru
    3782: createThoughtData({ 
        philosophicalDepth: 100, emotionalResonance: 98, complexityLevel: "PROFOUND", 
        dominantColor: "#334155", rating: 8.3, criticsScore: 100, audienceScore: 92, director: "Akira Kurosawa", 
        cast: ["Takashi Shimura", "Miki Odagiri"], boxOffice: "N/A", budget: "$55,000", 
        dna: { "Drama": 70, "Philosophy": 30 },
        scenes: [
            { time: 10, intensity: 45, label: "The Bureaucracy" }, 
            { time: 45, intensity: 85, label: "The Diagnosis" }, 
            { time: 70, intensity: 80, label: "The Night Out" }, 
            { time: 110, intensity: 95, label: "The Decision to Build" }, 
            { time: 135, intensity: 100, label: "The Swing in the Snow" } // PRIMARY PEAK
        ],
        synopsis: "A mundane, aging civil servant in post-war Japan discovers he has terminal cancer. Realizing he has achieved absolutely nothing in his life, he fights against a suffocating bureaucracy to build a single children's playground before he dies. The definitive masterclass in finding meaning in a brief existence.",
        themes: ["Existentialism", "Bureaucracy", "Finding Meaning"]
    }),

    // 2. Schindler's List
    424: createThoughtData({ 
        philosophicalDepth: 95, emotionalResonance: 100, complexityLevel: "HISTORICAL", 
        dominantColor: "#000000", rating: 9.0, criticsScore: 98, audienceScore: 97, director: "Steven Spielberg", 
        cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"], boxOffice: "$322.2 million", budget: "$22 million", 
        dna: { "Biography": 50, "History": 30, "Drama": 20 },
        scenes: [
            { time: 30, intensity: 65, label: "The Factory Opens" }, 
            { time: 75, intensity: 100, label: "Liquidation of the Ghetto (The Girl in Red)" }, // PRIMARY PEAK
            { time: 125, intensity: 90, label: "Amon Goeth's Cruelty" }, 
            { time: 165, intensity: 95, label: "The List is Written" }, 
            { time: 185, intensity: 98, label: "I Could Have Got More" } 
        ],
        synopsis: "The true story of Oskar Schindler, an opportunistic German businessman who gradually becomes a savior, risking his life and fortune to protect more than a thousand Jewish refugees from the Holocaust. A devastating, essential examination of humanity persisting in the face of absolute evil.",
        themes: ["The Holocaust", "Moral Awakening", "Humanity vs Evil"]
    }),

    // 3. The Shawshank Redemption
    278: createThoughtData({ 
        philosophicalDepth: 88, emotionalResonance: 95, complexityLevel: "INSPIRATIONAL", 
        dominantColor: "#1e3a8a", rating: 9.3, criticsScore: 91, audienceScore: 98, director: "Frank Darabont", 
        cast: ["Tim Robbins", "Morgan Freeman"], boxOffice: "$28.8 million", budget: "$25 million", 
        dna: { "Drama": 70, "Crime": 30 },
        scenes: [
            { time: 20, intensity: 70, label: "The First Night" }, 
            { time: 65, intensity: 85, label: "The Rooftop Beers" }, 
            { time: 95, intensity: 90, label: "The Mozart Broadcast" }, 
            { time: 120, intensity: 98, label: "The Hole in the Wall" }, // PRIMARY PEAK
            { time: 135, intensity: 100, label: "Zihuatanejo" } 
        ],
        synopsis: "Wrongfully convicted of murder, a quiet banker spends two decades in a brutal prison. Rather than breaking, he quietly maintains his dignity and builds an intricate, decades-long plan for freedom. It is the global cinematic icon of hope, patience, and the unbreakable human spirit.",
        themes: ["Hope", "Institutionalization", "Patience"]
    }),

    // 4. The Green Mile
    497: createThoughtData({ 
        philosophicalDepth: 85, emotionalResonance: 98, complexityLevel: "PROFOUND", 
        dominantColor: "#14532d", rating: 8.6, criticsScore: 79, audienceScore: 94, director: "Frank Darabont", 
        cast: ["Tom Hanks", "Michael Clarke Duncan"], boxOffice: "$286.8 million", budget: "$60 million", 
        dna: { "Fantasy": 40, "Drama": 40, "Crime": 20 },
        scenes: [
            { time: 40, intensity: 70, label: "Healing the Mouse" }, 
            { time: 90, intensity: 85, label: "Healing Melinda" }, 
            { time: 115, intensity: 100, label: "The Sabotaged Execution" }, // PRIMARY PEAK (Gore)
            { time: 160, intensity: 95, label: "Transferring the Visions" }, 
            { time: 175, intensity: 98, label: "I'm Tired, Boss" } 
        ],
        synopsis: "Death row guards in the 1930s are profoundly changed when they discover that a massive, gentle man convicted of a horrific crime actually possesses a miraculous gift of healing. A heavy, visceral journey challenging our understanding of justice, empathy, and innocence.",
        themes: ["Justice", "Empathy", "Supernatural Grace"]
    }),

    // 5. Manchester by the Sea
    334541: createThoughtData({ 
        philosophicalDepth: 92, emotionalResonance: 100, complexityLevel: "DEVASTATING", 
        dominantColor: "#0f172a", rating: 7.8, criticsScore: 96, audienceScore: 82, director: "Kenneth Lonergan", 
        cast: ["Casey Affleck", "Michelle Williams", "Lucas Hedges"], boxOffice: "$79 million", budget: "$9 million", 
        dna: { "Drama": 100 },
        scenes: [
            { time: 20, intensity: 50, label: "Return to Manchester" }, 
            { time: 50, intensity: 100, label: "The Fire (Flashback)" }, // PRIMARY PEAK
            { time: 85, intensity: 80, label: "The Freezer Panic Attack" }, 
            { time: 115, intensity: 98, label: "The Street Encounter with Randi" }, 
            { time: 130, intensity: 90, label: "I Can't Beat It" } 
        ],
        synopsis: "A broken, deeply depressed janitor is forced to return to his hometown to care for his teenage nephew after his brother dies. Rather than offering a cliché Hollywood healing arc, it delivers the rawest, most truthful depiction of a grief so profound that a person can never fully recover.",
        themes: ["Profound Grief", "Guilt", "Living with Trauma"]
    }),

    // 6. The Pursuit of Happyness
    1402: createThoughtData({ 
        philosophicalDepth: 80, emotionalResonance: 95, complexityLevel: "INSPIRATIONAL", 
        dominantColor: "#b45309", rating: 8.0, criticsScore: 67, audienceScore: 87, director: "Gabriele Muccino", 
        cast: ["Will Smith", "Jaden Smith"], boxOffice: "$307.1 million", budget: "$55 million", 
        dna: { "Biography": 60, "Drama": 40 },
        scenes: [
            { time: 30, intensity: 65, label: "The Rubik's Cube" }, 
            { time: 65, intensity: 85, label: "Eviction" }, 
            { time: 85, intensity: 100, label: "Sleeping in the Subway Bathroom" }, // PRIMARY PEAK
            { time: 105, intensity: 90, label: "The Homeless Shelter Sprint" }, 
            { time: 115, intensity: 98, label: "The Final Offer" } 
        ],
        synopsis: "Based on a true story, a struggling salesman loses his home, his wife, and his savings, winding up on the streets of San Francisco with his young son while trying to complete an unpaid stockbroker internship. The ultimate testament to perseverance, paternal love, and the American Dream.",
        themes: ["Perseverance", "Fatherhood", "Poverty"]
    }),

    // 7. Into the Wild
    5915: createThoughtData({ 
        philosophicalDepth: 95, emotionalResonance: 90, complexityLevel: "PHILOSOPHICAL", 
        dominantColor: "#166534", rating: 8.1, criticsScore: 83, audienceScore: 89, director: "Sean Penn", 
        cast: ["Emile Hirsch", "Vince Vaughn", "Catherine Keener"], boxOffice: "$56.3 million", budget: "$15 million", 
        dna: { "Adventure": 50, "Biography": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 60, label: "Burning the Money" }, 
            { time: 55, intensity: 75, label: "The Magic Bus" }, 
            { time: 85, intensity: 88, label: "Meeting Ron Franz" }, 
            { time: 120, intensity: 95, label: "The Moose Incident" }, 
            { time: 140, intensity: 100, label: "Happiness is Only Real When Shared" } // PRIMARY PEAK
        ],
        synopsis: "A brilliant graduate abandons his savings, destroys his identity, and walks into the Alaskan wilderness to escape a materialistic society. It is a stunning, deeply philosophical warning about the beauty of absolute freedom versus the tragic necessity of human connection.",
        themes: ["Radical Freedom", "Nature's Indifference", "Human Connection"]
    }),

    // 8. Dead Poets Society
    207: createThoughtData({ 
        philosophicalDepth: 88, emotionalResonance: 94, complexityLevel: "POETIC", 
        dominantColor: "#7f1d1d", rating: 8.1, criticsScore: 84, audienceScore: 89, director: "Peter Weir", 
        cast: ["Robin Williams", "Ethan Hawke", "Robert Sean Leonard"], boxOffice: "$235.9 million", budget: "$16.4 million", 
        dna: { "Drama": 80, "Coming of Age": 20 },
        scenes: [
            { time: 20, intensity: 65, label: "Carpe Diem" }, 
            { time: 50, intensity: 75, label: "Ripping the Textbooks" }, 
            { time: 80, intensity: 85, label: "The Play" }, 
            { time: 105, intensity: 100, label: "Neil's Decision" }, // PRIMARY PEAK
            { time: 122, intensity: 98, label: "O Captain, My Captain!" } 
        ],
        synopsis: "An unorthodox English teacher at a stuffy 1950s prep school uses poetry to embolden his students to tear up the rulebook and 'seize the day.' It stands as cinema's greatest anthem for individuality, carrying a deeply tragic reminder of the cost of artistic rebellion.",
        themes: ["Individuality", "Conformity", "Inspiration"]
    }),

    // 9. Good Will Hunting
    164: createThoughtData({ 
        philosophicalDepth: 85, emotionalResonance: 96, complexityLevel: "RAW", 
        dominantColor: "#0284c7", rating: 8.3, criticsScore: 97, audienceScore: 94, director: "Gus Van Sant", 
        cast: ["Matt Damon", "Robin Williams", "Ben Affleck"], boxOffice: "$225.9 million", budget: "$10 million", 
        dna: { "Drama": 70, "Romance": 30 },
        scenes: [
            { time: 25, intensity: 60, label: "The Bar Equation" }, 
            { time: 55, intensity: 85, label: "The Park Bench Speech" }, 
            { time: 80, intensity: 75, label: "Breaking up with Skylar" }, 
            { time: 105, intensity: 100, label: "It's Not Your Fault" }, // PRIMARY PEAK
            { time: 120, intensity: 90, label: "He Stole My Line" } 
        ],
        synopsis: "A brilliant but deeply traumatized young janitor from South Boston must undergo intense therapy to prevent his intellect from being wasted by his self-destructive defense mechanisms. A brilliantly written, profoundly emotional exploration of class, abuse, and healing.",
        themes: ["Healing", "Class Divide", "Unrealized Potential"]
    }),

    // 10. About Time
    122906: createThoughtData({ 
        philosophicalDepth: 85, emotionalResonance: 94, complexityLevel: "HEARTWARMING", 
        dominantColor: "#db2777", rating: 7.8, criticsScore: 70, audienceScore: 81, director: "Richard Curtis", 
        cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"], boxOffice: "$88.5 million", budget: "$12 million", 
        dna: { "Romance": 50, "Fantasy": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Secret Revealed" }, 
            { time: 45, intensity: 75, label: "Fixing the Play / Meeting Mary" }, 
            { time: 80, intensity: 88, label: "Kit Kat's Accident" }, 
            { time: 105, intensity: 100, label: "The Final Walk on the Beach" }, // PRIMARY PEAK
            { time: 118, intensity: 95, label: "Living the Ordinary Day" } 
        ],
        synopsis: "Upon turning 21, a young man discovers the men in his family can travel through time. While he initially uses it to get a girlfriend, the film sneakily evolves into a profound, tear-jerking meditation on fatherhood, loss, and the realization that the best way to live is to cherish the ordinary.",
        themes: ["Living in the Moment", "Fatherhood", "Letting Go"]
    })
};

// 🎬 FAQS FOR THE THOUGHT-PROVOKING COLLECTION
export const THOUGHT_PROVOKING_FAQS = {
    'Ikiru': [
        { question: "What does 'Ikiru' mean?", answer: "Ikiru (生きる) translates directly to 'To Live'. The title is deeply ironic at the beginning of the film, as Kanji Watanabe has been physically alive but emotionally and spiritually 'dead' for 30 years at his desk job until a terminal cancer diagnosis forces him to wake up." },
        { question: "Why does the narrative structure suddenly shift halfway through?", answer: "At the midway point, the protagonist dies. Akira Kurosawa then spends the entire second half of the film showing his funeral wake, where his coworkers try (and mostly fail) to understand his final actions. It forces the audience to examine the legacy we leave behind in the minds of others." },
        { question: "Is this Kurosawa's best non-samurai film?", answer: "Yes, it is widely considered his greatest modern-day drama. While he is famous globally for epic action (Seven Samurai, Yojimbo), 'Ikiru' proves his absolute mastery of human emotion, stillness, and existential philosophy." },
        { question: "What does the swing scene symbolize?", answer: "The image of Watanabe singing in the falling snow on the swing he built is one of the most iconic shots in cinema history. It represents absolute peace. Despite his impending death and the cold weather, he is warm because he finally achieved something meaningful." }
    ],
    'Schindler\'s List': [
        { question: "Why is the film shot in black and white?", answer: "Steven Spielberg chose black and white to give the film the authentic, terrifying look of 1940s documentary footage. He stated that for him, the Holocaust is 'life without light,' and color would have been too beautiful for the horrors depicted." },
        { question: "What does the Girl in the Red Coat signify?", answer: "She is the only element of color in the main film. She represents the blood of the innocent and the glaringly obvious atrocity that the world chose to ignore. For Schindler, seeing her body later is the turning point that shifts him from a capitalist to a savior." },
        { question: "Did Oskar Schindler really break down at the end?", answer: "The 'I could have got more' scene is emotionally devastating. While historians debate if it happened exactly as depicted on the night the war ended, it accurately reflects Schindler's real-life postwar guilt. He died penniless, having spent his entire fortune protecting his workers." },
        { question: "Why is it considered the definitive Holocaust film?", answer: "It masterfully balances the vast, incomprehensible scale of the genocide with an intimate, highly specific character study. It refuses to look away from the extreme violence, forcing humanity to confront its darkest hour while proving that even flawed individuals can choose to do the right thing." }
    ],
    'The Shawshank Redemption': [
        { question: "Why wasn't the film a hit in theaters?", answer: "In 1994, it competed against Forrest Gump and Pulp Fiction. It also had a terrible, hard-to-pronounce title (based on Stephen King's novella) and lacked female characters or action sequences. It only became a global phenomenon later through word-of-mouth and constant cable television reruns." },
        { question: "What does Brooks' storyline represent?", answer: "Brooks Hatlen's tragic arc demonstrates 'institutionalization.' He was in prison for so long that the walls became his entire world. When released, he couldn't survive freedom. It serves as a warning to Red and Andy about the psychological death that prison inflicts." },
        { question: "How did Andy keep his sanity?", answer: "Andy maintained his humanity through art, routine, and a profound, quiet hope. By expanding the library and helping Tommy get his diploma, he built a life of purpose inside the walls, preventing the warden from breaking his spirit." },
        { question: "What does the ending symbolize?", answer: "The final reunion in Zihuatanejo, Mexico (a place Andy describes as having 'no memory') represents absolute redemption and absolution. It proves that patience, intellect, and hope can ultimately shatter any prison." }
    ],
    'The Green Mile': [
        { question: "Is John Coffey a metaphor?", answer: "Yes, his initials (J.C.) and his ability to perform miracles, take on the suffering of others, and ultimate unjust execution heavily parallel the story of Jesus Christ. Stephen King wrote him as a pure, divine vessel trapped in a cruel, racist world." },
        { question: "Why did Paul Edgecomb live so long?", answer: "When John Coffey transferred his power/visions to Paul to show him the truth about the murders, he unintentionally 'infected' Paul with life. Paul's unnaturally long life becomes a curse; his punishment for executing a miracle of God is that he must watch everyone he loves die." },
        { question: "Was the mouse real?", answer: "Mr. Jingles was played by up to 30 different trained mice on set, each taught to do specific tricks (like pushing the spool). The mouse symbolizes the fragility of life and the capacity for empathy even in the darkest, most condemned corners of the world." },
        { question: "Why is the film so emotionally devastating?", answer: "It forces the audience to watch genuinely good people (the guards) be bound by the rules of society to execute an innocent, child-like miracle worker. It is a profound meditation on the inescapable tragedy of human justice systems." }
    ],
    'Manchester by the Sea': [
        { question: "Why didn't Lee adopt Patrick at the end?", answer: "This is what makes the film a masterpiece of realism. In a standard Hollywood film, the broken man adopts the kid and learns to love again. Here, Lee acknowledges that his PTSD and grief are too severe. Relinquishing custody is actually his greatest act of love, ensuring Patrick gets a stable home." },
        { question: "What is the significance of the bar fights?", answer: "Lee instigates fights with strangers not out of anger, but because he is desperately seeking physical punishment. Since the police refused to arrest him for the accidental fire that killed his children, he continually seeks out violence as a way to punish himself." },
        { question: "How did Michelle Williams film 'that' scene?", answer: "The street encounter between Lee and Randi is widely considered one of the greatest acting moments of the 21st century. It was shot in a few takes in freezing weather. Williams conveys the impossible complexity of loving someone while being utterly destroyed by them." },
        { question: "What does 'I can't beat it' mean?", answer: "It is the film's thesis. Lee finally admits out loud that his grief is insurmountable. He cannot 'get over it,' 'move on,' or 'beat' the trauma of burning his children alive. The film validates the reality that some wounds simply do not heal." }
    ],
    'The Pursuit of Happyness': [
        { question: "Is it completely historically accurate?", answer: "Mostly. The real Chris Gardner did face extreme homelessness with his son while grinding through a brutal brokerage internship. However, the film softens Chris's real-life flaws and combined several different characters into the 'Jay Twistle' manager to streamline the cinematic narrative." },
        { question: "Why is 'Happyness' spelled with a Y?", answer: "The misspelling comes from a mural painted on the wall of the daycare center Chris sends his son to. It symbolizes the flawed, broken systems that Chris is forced to rely on, and his frustration that his son is not receiving the education he deserves." },
        { question: "What is the significance of the Rubik's Cube?", answer: "The Rubik's Cube was a massive fad in the 1980s. Chris solving it in the taxi ride with the executive was his way of proving his immense, untapped intellect. It showed that despite his poverty and lack of formal education, his mind was brilliant enough for Wall Street." },
        { question: "Did the real Chris Gardner cameo?", answer: "Yes! In the final scene, as Will Smith and Jaden Smith are walking down the street celebrating, they walk past a man in a suit who Will Smith briefly looks back at. That man is the real, multi-millionaire Chris Gardner." }
    ],
    'Into the Wild': [
        { question: "What was Chris McCandless's fatal mistake?", answer: "While he was ill-prepared overall, his specific fatal error was crossing the Teklanika River in winter when it was frozen. When he tried to return months later, the summer melt had turned it into an impassable, violent torrent, trapping him at the bus where he eventually starved." },
        { question: "Was he escaping society or his parents?", answer: "The film explores how it was heavily both. While he preached anti-capitalist, Thoreau-inspired freedom, the narrative reveals that his journey was largely a deeply traumatized reaction to his parents' highly toxic, abusive, and materialistic marriage." },
        { question: "Who is Ron Franz?", answer: "Played beautifully by Hal Holbrook, Ron Franz represents the ultimate tragedy of Chris's journey. Ron offered to adopt Chris and give him a loving family. Chris's stubborn refusal to accept human connection left Ron heartbroken and Chris completely alone." },
        { question: "What is the message of the film?", answer: "The film celebrates the beauty and courage of radical independence, but ultimately serves as a tragic warning. His final written revelation, 'Happiness is only real when shared,' proves that escaping humanity does not lead to enlightenment, but to a very cold, lonely death." }
    ],
    'Dead Poets Society': [
        { question: "Was Mr. Keating based on a real teacher?", answer: "Yes, writer Tom Schulman based John Keating on an inspiring teacher he had at Montgomery Bell Academy named Samuel Pickering, who used unorthodox methods to teach literature and break students out of their wealthy, preppy conformity." },
        { question: "Why did Neil commit suicide?", answer: "Neil's father completely stripped him of his agency. By forcing him to quit acting and demanding he attend military school, his father essentially 'killed' Neil's soul. For Neil, who had just tasted true passion, physical death was preferable to a lifetime of suffocating control." },
        { question: "Why didn't Keating fight the termination?", answer: "Keating understood that the school needed a scapegoat to protect the institution's pristine reputation. Fighting it would have dragged the boys into a deeper, destructive war. He accepted his fate, trusting that the seeds of free thought he planted in the boys would survive." },
        { question: "What does the desk-standing scene signify?", answer: "When the boys stand on their desks and say 'O Captain, my Captain,' they are proving that the school administration failed. Despite firing the teacher and enforcing conformity, Keating successfully changed how the boys 'look at the world,' winning the ideological war." }
    ],
    'Good Will Hunting': [
        { question: "Did Matt Damon and Ben Affleck really write it?", answer: "Yes. They famously wrote the script in their twenties because they were tired of getting minor supporting roles. They won the Academy Award for Best Original Screenplay, launching them both into A-list superstardom overnight." },
        { question: "Why does Will push Skylar away?", answer: "Will's defense mechanism is abandonment. Because he was severely abused by his foster fathers, he believes that anyone who gets close to him will eventually hurt him. He brutally breaks up with Skylar first so she can't abandon him later." },
        { question: "What is the significance of the park bench speech?", answer: "Sean (Robin Williams) uses this speech to dismantle Will's arrogance. He proves that while Will has an eidetic memory and can quote any book, he has absolutely zero life experience. It establishes that intellect means nothing without the courage to be vulnerable." },
        { question: "Why does Will leave for California?", answer: "Throughout the film, Will's friends and professors push him to use his genius to secure high-paying government or corporate jobs. By driving to California 'about a girl,' he rejects societal expectations of what a genius 'should' do, choosing emotional fulfillment instead." }
    ],
    'About Time': [
        { question: "What are the rules of time travel in the film?", answer: "The men in the family can only travel back to their own past within their own lifetime (they go into a dark closet, clench their fists, and think of the moment). Crucially, if they have a child, traveling back before that child's birth will alter the timeline and change the baby entirely." },
        { question: "Why does the father die?", answer: "The father (Bill Nighy) develops terminal cancer. Because the cancer was caused by a lifetime of smoking before his children were born, he cannot travel back to fix it without erasing his current children from existence. He chooses death over losing his kids." },
        { question: "What is the ultimate message of the movie?", answer: "While it starts as a fun rom-com about a guy using time travel to get a girl, the final act delivers a profound philosophical shift. Tim realizes that the best way to use time travel is to not use it at all—but rather to live every single ordinary day as if he had traveled back to enjoy it." },
        { question: "Why did Richard Curtis direct this?", answer: "Richard Curtis (Love Actually, Notting Hill) stated this was his final directorial film. He wanted to make a movie about the simple, profound beauty of an ordinary, happy life, moving away from dramatic romantic gestures into a celebration of quiet, daily love and fatherhood." }
    ]
};

// 🔥 THE KEYWORD BRIDGE & SCHEMA GENERATOR (Unrestricted Version)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('nudity') || lowerType.includes('assault')) types.add('sexual content and nudity');
        if (lowerType.includes('suicide') || lowerType.includes('trauma') || lowerType.includes('death')) types.add('severe emotional trauma and grief');
        if (lowerType.includes('violence') || lowerType.includes('gore') || lowerType.includes('execution')) types.add('graphic violence and executions');
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
        return t.includes('sex') || t.includes('nudity') || t.includes('suicide') || t.includes('trauma') || t.includes('violence') || t.includes('grief') || t.includes('execution'); 
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
        return t.includes('sex') || t.includes('nudity') || t.includes('suicide') || t.includes('trauma') || t.includes('violence') || t.includes('grief') || t.includes('execution');
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