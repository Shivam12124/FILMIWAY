// utils/prestigeMovieData.js - PRESTIGE COLLECTION DATA ✅
// Movies exploring magic, deception, mind-bending twists, and psychological rivalry

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 1491, "imdbID": "tt0443543", "Title": "The Illusionist", "year": 2006, "genre": "Mystery", "runtime": 110, "rank": 1 },
    { "tmdbId": 77, "imdbID": "tt0209144", "Title": "Memento", "year": 2000, "genre": "Thriller", "runtime": 113, "rank": 2 },
    { "tmdbId": 11324, "imdbID": "tt1130884", "Title": "Shutter Island", "year": 2010, "genre": "Thriller", "runtime": 138, "rank": 3 },
    { "tmdbId": 2649, "imdbID": "tt0119174", "Title": "The Game", "year": 1997, "genre": "Mystery", "runtime": 129, "rank": 4 },
    { "tmdbId": 629, "imdbID": "tt0114814", "Title": "The Usual Suspects", "year": 1995, "genre": "Crime", "runtime": 106, "rank": 5 },
    { "tmdbId": 550, "imdbID": "tt0137523", "Title": "Fight Club", "year": 1999, "genre": "Drama", "runtime": 139, "rank": 6 },
    { "tmdbId": 745, "imdbID": "tt0167404", "Title": "The Sixth Sense", "year": 1999, "genre": "Thriller", "runtime": 107, "rank": 7 },
    { "tmdbId": 4553, "imdbID": "tt0361862", "Title": "The Machinist", "year": 2004, "genre": "Thriller", "runtime": 101, "rank": 8 },
    { "tmdbId": 1592, "imdbID": "tt0117381", "Title": "Primal Fear", "year": 1996, "genre": "Crime", "runtime": 129, "rank": 9 },
    { "tmdbId": 75656, "imdbID": "tt1670345", "Title": "Now You See Me", "year": 2013, "genre": "Thriller", "runtime": 115, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Sexual Content & Nudity ONLY for the Parents Guide)
export const SENSITIVE_TIMELINES = {
    // 1. The Illusionist
    1491: { scenes: [] },

    // 2. Memento
    77: { scenes: [] },

    // 3. Shutter Island
    11324: { 
        scenes: [
            { start: "1:10:43", end: "1:10:47", type: "Nudity", severity: "Moderate" }
        ] 
    },

    // 4. The Game
    2649: { 
        scenes: [
            { start: "0:57:52", end: "0:59:30", type: "Sexual Content(Moaning)", severity: "Moderate" }
        ] 
    },

    // 5. The Usual Suspects
    629: { 
        scenes: [
            { start: "1:00:15", end: "1:00:47", type: "Sexual Content", severity: "Moderate" }
        ] 
    },

    // 6. Fight Club
    550: { 
        scenes: [
            { start: "0:32:27", end: "0:32:37", type: "Nudity", severity: "Moderate" },
            { start: "0:48:40", end: "0:48:55", type: "Nudity", severity: "High" },
            { start: "0:53:45", end: "0:55:58", type: "Sexual content(Sexual sounds)", severity: "Moderate" },
            { start: "0:58:45", end: "0:59:00", type: "Sexual content", severity: "Moderate" },
            { start: "1:06:55", end: "1:07:35", type: "Partial nudity", severity: "Moderate" },
            { start: "1:54:29", end: "1:54:32", type: "Sex(Glimpse)", severity: "Mild" }
        ] 
    },

    // 7. The Sixth Sense
    745: { scenes: [] },

// 8. The Machinist
    4553: { 
        scenes: [
            { start: "0:17:06", end: "0:18:20", type: "Nudity (Woman)", severity: "High" },
            { start: "0:18:21", end: "0:18:30", type: "Sex", severity: "Moderate" },
            { start: "0:42:33", end: "0:42:36", type: "Sexual Content", severity: "Moderate" }
        ] 
    },
    // 9. Primal Fear
    1592: { 
        scenes: [
            { start: "1:11:29", end: "1:11:53", type: "Nudity & Sex", severity: "High" }
        ] 
    },

    // 10. Now You See Me
    75656: { scenes: [] }
};
export const FALLBACK_POSTERS = {
    1491: "https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOWEtYjUwZDQ1OWNjZmMxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    77: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzgwLWI5MTktMzY4ZmI2NDNjZmVjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    11324: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    2649: "https://m.media-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX500.jpg",
    629: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEzNy00NTgyLWIwM2EtYjI2YjU1ZjUxODgxXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX500.jpg",
    550: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX500.jpg",
    745: "https://m.media-amazon.com/images/M/MV5BMjMwNDIxMTI5Nl5BMl5BanBnXkFtZTgwNzcwNDgwNTM@._V1_SX500.jpg",
    4553: "https://m.media-amazon.com/images/M/MV5BMTgwMjUwMzQ2MV5BMl5BanBnXkFtZTcwMjgwMzI1MQ@@._V1_SX500.jpg",
    1592: "https://m.media-amazon.com/images/M/MV5BMTQ1ODAwMzIzMl5BMl5BanBnXkFtZTgwMzk4NzI5MTU@._V1_SX500.jpg",
    75656: "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX500.jpg"
};

// ✅ Helper function for Prestige metrics
const createPrestigeData = (data) => ({
    deceptionScore: 90, // Custom metric for this collection
    narrativeComplexity: 85,
    twistImpact: 90,       
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. The Illusionist
    1491: createPrestigeData({ 
        deceptionScore: 88, narrativeComplexity: 80, twistImpact: 92, complexityLevel: "MEDIUM", 
        dominantColor: "#78350f", rating: 7.6, criticsScore: 74, audienceScore: 83, director: "Neil Burger", 
        cast: ["Edward Norton", "Paul Giamatti", "Jessica Biel"], boxOffice: "$87.8 million", budget: "$16.5 million", 
        dna: { "Mystery": 50, "Romance": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 35, label: "The Orange Tree Trick" }, // Mild tension/curiosity
            { time: 45, intensity: 55, label: "The Ghost Conjuring" }, // Meaningful engagement
            { time: 70, intensity: 72, label: "Arrest Attempt" }, // Strong tension
            { time: 95, intensity: 84, label: "The Disappearance" }, // Crisis / Peak conflict
            { time: 108, intensity: 88, label: "The Inspector Realizes" } // PRIMARY PEAK: Truth revelation
        ],
        synopsis: "In turn-of-the-century Vienna, a brilliant stage magician uses his incredible abilities to secure the love of a woman far above his social standing. It offers a romantic, but deceptive, take on the art of illusion.",
        themes: ["Class Warfare", "Misdirection", "Romantic Obsession"]
    }),

    // 2. Memento
    77: createPrestigeData({ 
        deceptionScore: 98, narrativeComplexity: 100, twistImpact: 95, complexityLevel: "EXTREME", 
        dominantColor: "#1e3a8a", rating: 8.4, criticsScore: 93, audienceScore: 94, director: "Christopher Nolan", 
        cast: ["Guy Pearce", "Carrie-Anne Moss"], boxOffice: "$40 million", budget: "$9 million", 
        dna: { "Thriller": 60, "Mystery": 30, "Psychological": 10 },
        scenes: [
            { time: 5, intensity: 50, label: "The Polaroid Murder" }, // Starting high with disaster
            { time: 40, intensity: 68, label: "Sammy Jankis" }, // Strong emotional pressure
            { time: 75, intensity: 75, label: "Dodd's Chase" }, // Crisis
            { time: 100, intensity: 88, label: "Natalie's Betrayal" }, // Devastating moral rupture
            { time: 110, intensity: 97, label: "The Lie We Tell Ourselves" } // PRIMARY PEAK: Existential/Genre-defining climax
        ],
        synopsis: "A man with short-term memory loss uses notes and tattoos to hunt for his wife's killer. This masterclass places the audience inside the mind of an unreliable narrator tricking himself.",
        themes: ["Memory", "Self-Deception", "Grief"]
    }),

    // 3. Shutter Island
    11324: createPrestigeData({ 
        deceptionScore: 92, narrativeComplexity: 85, twistImpact: 98, complexityLevel: "HIGH", 
        dominantColor: "#0c4a6e", rating: 8.2, criticsScore: 69, audienceScore: 77, director: "Martin Scorsese", 
        cast: ["Leonardo DiCaprio", "Mark Ruffalo"], boxOffice: "$294.8 million", budget: "$80 million", 
        dna: { "Thriller": 50, "Psychological": 35, "Mystery": 15 },
        scenes: [
            { time: 15, intensity: 30, label: "Arrival at Ashecliffe" },
            { time: 60, intensity: 62, label: "The Cave Interrogation" },
            { time: 95, intensity: 78, label: "Ward C Break-In" },
            { time: 120, intensity: 94, label: "The Lighthouse Reveal" }, // PRIMARY PEAK: Overwhelming psychological collapse
            { time: 135, intensity: 70, label: "Live as a Monster" } // Tragic/Open release
        ],
        synopsis: "A U.S. Marshal investigates a disappearance from an island asylum, only to uncover a reality that makes him question his own sanity.",
        themes: ["Constructed Reality", "Trauma", "Roleplay"]
    }),

    // 4. The Game
    2649: createPrestigeData({ 
        deceptionScore: 95, narrativeComplexity: 85, twistImpact: 96, complexityLevel: "HIGH", 
        dominantColor: "#064e3b", rating: 7.7, criticsScore: 77, audienceScore: 84, director: "David Fincher", 
        cast: ["Michael Douglas", "Sean Penn"], boxOffice: "$109.4 million", budget: "$50 million", 
        dna: { "Thriller": 60, "Mystery": 30, "Action": 10 },
        scenes: [
            { time: 20, intensity: 35, label: "CRS Testing" },
            { time: 60, intensity: 70, label: "Buried Alive" },
            { time: 90, intensity: 82, label: "Mexico Awakening" },
            { time: 115, intensity: 92, label: "The Roof Jump" }, // PRIMARY PEAK: Near-death/Overwhelming pressure
            { time: 125, intensity: 58, label: "The Curtain Drops" } // Resolution release
        ],
        synopsis: "A wealthy banker is given participation in a 'game' that integrates with his real life. The boundaries between illusion and reality completely disintegrate.",
        themes: ["Control", "Elaborate Hoaxes", "Paranoia"]
    }),

    // 5. The Usual Suspects
    629: createPrestigeData({ 
        deceptionScore: 100, narrativeComplexity: 88, twistImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#7f1d1d", rating: 8.5, criticsScore: 88, audienceScore: 92, director: "Bryan Singer", 
        cast: ["Kevin Spacey", "Gabriel Byrne"], boxOffice: "$23.3 million", budget: "$6 million", 
        dna: { "Crime": 60, "Mystery": 30, "Thriller": 10 },
        scenes: [
            { time: 10, intensity: 25, label: "The Lineup" },
            { time: 45, intensity: 58, label: "The Emerald Job" },
            { time: 70, intensity: 75, label: "Kobayashi Arrives" },
            { time: 95, intensity: 86, label: "The Boat Massacre" },
            { time: 104, intensity: 96, label: "The Bulletin Board" } // PRIMARY PEAK: Genre-defining narrative rupture
        ],
        synopsis: "A survivor of a horrific gun battle tells the story of how he was blackmailed by a mythical crime lord. The film hides the truth in plain sight.",
        themes: ["Unreliable Narrator", "Myth-building", "Misdirection"]
    }),

    // 6. Fight Club
    550: createPrestigeData({ 
        deceptionScore: 94, narrativeComplexity: 85, twistImpact: 98, complexityLevel: "HIGH", 
        dominantColor: "#831843", rating: 8.8, criticsScore: 79, audienceScore: 96, director: "David Fincher", 
        cast: ["Brad Pitt", "Edward Norton"], boxOffice: "$101.2 million", budget: "$63 million", 
        dna: { "Drama": 50, "Psychological": 40, "Action": 10 },
        scenes: [
            { time: 25, intensity: 48, label: "The First Rule" },
            { time: 60, intensity: 65, label: "Chemical Burn" },
            { time: 90, intensity: 82, label: "Project Mayhem" },
            { time: 115, intensity: 95, label: "The Hotel Realization" }, // PRIMARY PEAK: Identity-shattering moment
            { time: 135, intensity: 75, label: "Where Is My Mind" } // Cathartic release
        ],
        synopsis: "An insomniac and a soap maker form an underground fight club. Like The Prestige, it features extreme, identity-fracturing lengths to achieve an ideological goal.",
        themes: ["Dual Identity", "Masculinity", "Anti-Consumerism"]
    }),

    // 7. The Sixth Sense
    745: createPrestigeData({ 
        deceptionScore: 96, narrativeComplexity: 75, twistImpact: 100, complexityLevel: "MEDIUM", 
        dominantColor: "#172554", rating: 8.2, criticsScore: 86, audienceScore: 90, director: "M. Night Shyamalan", 
        cast: ["Bruce Willis", "Haley Joel Osment"], boxOffice: "$672.8 million", budget: "$40 million", 
        dna: { "Thriller": 50, "Supernatural": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 52, label: "Vincent's Attack" },
            { time: 45, intensity: 68, label: "I See Dead People" },
            { time: 70, intensity: 75, label: "The Tent Ghost" },
            { time: 90, intensity: 60, label: "The Funeral Video" },
            { time: 102, intensity: 94, label: "The Dropped Ring" } // PRIMARY PEAK: Devastating truth revelation
        ],
        synopsis: "A child psychologist attempts to cure a boy who claims he can see the dead. A masterclass in cinematic illusion planting clues throughout.",
        themes: ["Hidden Truths", "Grief", "Communication"]
    }),

    // 8. The Machinist
    4553: createPrestigeData({ 
        deceptionScore: 85, narrativeComplexity: 80, twistImpact: 88, complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 7.6, criticsScore: 77, audienceScore: 83, director: "Brad Anderson", 
        cast: ["Christian Bale", "Jennifer Jason Leigh"], boxOffice: "$8.2 million", budget: "$5 million", 
        dna: { "Psychological": 60, "Thriller": 30, "Drama": 10 },
        scenes: [
            { time: 20, intensity: 55, label: "The Factory Accident" },
            { time: 50, intensity: 65, label: "Ivan's Photo" },
            { time: 75, intensity: 80, label: "The Funhouse" },
            { time: 90, intensity: 91, label: "The Hit and Run" }, // PRIMARY PEAK: Crisis/Emotional breaking point
            { time: 98, intensity: 65, label: "I Want to Sleep" } // Resolution release
        ],
        synopsis: "An insomniac industrial worker doubts his own sanity when strange notes appear. A grueling look at how guilt constructs a protective illusion.",
        themes: ["Guilt", "Paranoia", "Physical Deterioration"]
    }),

    // 9. Primal Fear
    1592: createPrestigeData({ 
        deceptionScore: 93, narrativeComplexity: 75, twistImpact: 96, complexityLevel: "MEDIUM", 
        dominantColor: "#450a0a", rating: 7.7, criticsScore: 76, audienceScore: 84, director: "Gregory Hoblit", 
        cast: ["Richard Gere", "Edward Norton"], boxOffice: "$102.6 million", budget: "$30 million", 
        dna: { "Crime": 50, "Thriller": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 45, label: "The Bishop's Murder" },
            { time: 55, intensity: 68, label: "The Video Tape" },
            { time: 80, intensity: 75, label: "Roy Appears" },
            { time: 110, intensity: 84, label: "Courtroom Outburst" },
            { time: 125, intensity: 93, label: "The Slow Clap" } // PRIMARY PEAK: Devastating psychological reveal
        ],
        synopsis: "A defense attorney takes on the case of an altar boy accused of murdering an archbishop. The film forces the audience to guess who is pulling the strings.",
        themes: ["Manipulation", "Legal Theatrics", "Dual Persona"]
    }),

    // 10. Now You See Me
    75656: createPrestigeData({ 
        deceptionScore: 85, narrativeComplexity: 70, twistImpact: 82, complexityLevel: "MEDIUM", 
        dominantColor: "#1e1b4b", rating: 7.2, criticsScore: 50, audienceScore: 70, director: "Louis Leterrier", 
        cast: ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson"], boxOffice: "$351.7 million", budget: "$75 million", 
        dna: { "Heist": 50, "Thriller": 30, "Action": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Tarot Card" },
            { time: 35, intensity: 65, label: "Robbing the Paris Bank" },
            { time: 65, intensity: 78, label: "The Tressler Heist" },
            { time: 95, intensity: 85, label: "The Car Chase" }, // Physical action peak
            { time: 110, intensity: 87, label: "The Fifth Horseman" } // PRIMARY PEAK: Narrative revelation
        ],
        synopsis: "An FBI agent tracks illusionists who pull off bank heists during their performances. A flashy take on stage magic using misdirection.",
        themes: ["Stage Magic", "Heist Dynamics", "The Eye"]
    })
};

// STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    1491: "Everything you have seen is an illusion.",
    77: "We all lie to ourselves to be happy.",
    11324: "Which would be worse - to live as a monster, or to die as a good man?",
    2649: "Discovering the object of the game *is* the purpose of the game.",
    629: "The greatest trick the devil ever pulled was convincing the world he didn't exist.",
    550: "It's only after we've lost everything that we're free to do anything.",
    745: "They only see what they want to see.",
    4553: "If you were any thinner, you wouldn't exist.",
    1592: "There never was an Aaron, counselor.",
    75656: "The closer you look, the less you see."
};

// 🎬 FAQS FOR THE PRESTIGE COLLECTION
export const PRESTIGE_COLLECTION_FAQS = {
    'The Illusionist': [
        { question: "Did Eisenheim actually possess supernatural powers?", answer: "No. The film grounds itself in the idea that everything Eisenheim does is a highly advanced, mechanical stage trick or chemical illusion, designed to manipulate the Crown Prince and the police." },
        { question: "How did Sophie survive the sword?", answer: "Eisenheim gave her a special drug that slowed her heart rate to simulate death, while the blood was a prop mechanism. He orchestrated the entire 'murder' to frame the Prince." },
        { question: "Why is it compared to The Prestige?", answer: "Both films released in 2006, both are set in the late 1800s, and both focus on stage magicians using their craft to execute a devastating personal vendetta. However, The Illusionist leans more into romance, while The Prestige leans into obsession and sci-fi." },
        { question: "What was the significance of the locket?", answer: "The locket was a piece of intricate woodworking Eisenheim made for Sophie when they were young. Its secret compartment symbolizes the hidden truths that run beneath the surface of the entire film." }
    ],
    'Memento': [
        { question: "Why is the film shown backward?", answer: "The reverse chronological order forces the audience to experience Leonard's condition. Because you don't know what happened five minutes ago, you are just as confused and reliant on context clues as the protagonist." },
        { question: "Who killed Leonard's wife?", answer: "The home invaders assaulted her, but Leonard accidentally killed her himself. Because he couldn't form new memories, she tested him by asking him to administer her insulin shots multiple times, resulting in a fatal overdose." },
        { question: "Who is Sammy Jankis?", answer: "Sammy Jankis is Leonard. Leonard projected his own guilt regarding his wife's insulin overdose onto a past client (Sammy) to protect his own psyche from the horrific truth." },
        { question: "Did Teddy deserve to die?", answer: "Teddy was a corrupt cop manipulating Leonard to act as a hitman. While Teddy didn't kill Leonard's wife, Leonard intentionally writes down Teddy's license plate number to frame him, choosing to create a puzzle to give his life purpose." }
    ],
    'Shutter Island': [
        { question: "Is Teddy Daniels crazy, or is it a conspiracy?", answer: "He is actually insane. Teddy Daniels is an anagram for Andrew Laeddis. The entire investigation is a radical, immersive roleplay therapy designed by his doctors to snap him out of his delusion before they are forced to lobotomize him." },
        { question: "Did Andrew's wife murder their children?", answer: "Yes. His wife, Dolores, who was suffering from severe manic depression, drowned their three children in the lake behind their house. In his grief, Andrew shot and killed her." },
        { question: "What is the 'Law of 4'?", answer: "The Law of 4 refers to the anagrams Andrew's mind created to build his fantasy world: Edward Daniels = Andrew Laeddis, and Rachel Solando = Dolores Chanal." },
        { question: "Does Andrew relapse at the end?", answer: "Director Martin Scorsese strongly implies that Andrew is cured, but the guilt of his reality is too much to bear. When he asks 'Is it better to live as a monster, or die as a good man?', he is intentionally pretending to be crazy so they will lobotomize him." }
    ],
    'The Game': [
        { question: "Was Conrad trying to kill his brother?", answer: "No. The entire 'game' was an incredibly elaborate, multi-million dollar intervention designed by Conrad to save Nicholas from becoming a cold, suicidal shell of a man like their father." },
        { question: "How did they know he would jump off the roof?", answer: "CRS (Consumer Recreation Services) psychologically profiled Nicholas for months. They set up the entire scenario, including the prop gun, the fake blood on Conrad, and the exact placement of the giant airbag beneath the skylight." },
        { question: "Were the bullets real?", answer: "None of the danger was real. The guns fired blanks, the drowning taxi was rigged for escape, and the bank accounts were never actually drained. It was all a theatrical illusion." },
        { question: "What does the clown doll represent?", answer: "The creepy wooden clown is a callback to Nicholas's childhood and his father's suicide. CRS uses it to psychologically unnerve him and signify that they have access to his deepest, most repressed memories." }
    ],
    'The Usual Suspects': [
        { question: "Is Verbal Kint actually Keyser Söze?", answer: "Yes. The limp, the weakness, and the timid persona were entirely fabricated. He is the ruthless criminal mastermind who orchestrated the boat massacre." },
        { question: "How much of Verbal's story was true?", answer: "Very little. While the core event (the boat burning) happened, the narrative he told Agent Kujan was heavily improvised, pulling names and places (like 'Redfoot' and 'Kobayashi') from random details on the bulletin board and bottom of a coffee mug." },
        { question: "Why did Söze get arrested in the first place?", answer: "He allowed himself to be arrested to control the narrative. By being the 'weakest' survivor, he could shape the police investigation, secure his own immunity, and walk out the front door." },
        { question: "Did Söze really kill his own family?", answer: "According to the myth, yes. When Hungarian mobsters held his family hostage, he killed them himself to prove he had no weaknesses, which built his terrifying, untouchable reputation." }
    ],
    'Fight Club': [
        { question: "Are the narrator and Tyler Durden the same person?", answer: "Yes. Tyler Durden is a dissociative identity created by the narrator's insomnia and profound dissatisfaction with his consumerist, emasculated life. Tyler represents everything the narrator wishes he could be." },
        { question: "Did the narrator really shoot himself?", answer: "Yes, but he shoots himself through the cheek. Because Tyler is a projection of his mind, the narrator realizes that 'killing' himself is the only way to kill Tyler. The physical trauma snaps him back to reality." },
        { question: "What is Project Mayhem?", answer: "It is the evolution of Fight Club from a localized support group for angry men into an anti-capitalist domestic terrorist organization, aimed at erasing debt records by destroying credit card company headquarters." },
        { question: "Why does Tyler splice porn into family movies?", answer: "It is a form of subliminal rebellion against a sanitized, corporate society. This act mirrors the film's own themes of hidden, aggressive truths lurking just beneath the surface of normal life." }
    ],
    'The Sixth Sense': [
        { question: "Is Malcolm Crowe dead the whole time?", answer: "Yes. Malcolm was shot and killed by a former patient in the opening scene of the movie. He spends the rest of the film as a ghost, unaware that he has passed away until the final moments." },
        { question: "Why doesn't Malcolm realize he is dead?", answer: "As Cole explains, 'They only see what they want to see. They don't know they're dead.' Malcolm's mind creates logical fallacies to ignore his lack of interaction with other adults, focusing solely on helping Cole." },
        { question: "How does Cole help the ghost girl?", answer: "He gives a videotape to the girl's father at her wake. The tape proves that the girl was being poisoned by her own mother (Munchausen syndrome by proxy), saving her younger sister from the same fate." },
        { question: "What are the clues that Malcolm is dead?", answer: "He never moves objects in front of others (like opening doors or pulling out chairs), his wife ignores him, he wears the exact same clothes from the night he was shot, and the basement door is never actually locked—it's blocked by a table." }
    ],
    'The Machinist': [
        { question: "Why hasn't Trevor slept in a year?", answer: "His insomnia is caused by immense, repressed psychological guilt. A year prior, he was involved in a hit-and-run accident where he ran over and killed a young boy, then drove away." },
        { question: "Who is Ivan?", answer: "Ivan is a hallucination. He is the physical manifestation of Trevor's guilt. Ivan drives a red Firebird—the exact same car Trevor was driving when he killed the child." },
        { question: "What is the meaning of the sticky note game?", answer: "Trevor finds a hangman game on his fridge. While he thinks someone is taunting him, he is unconsciously writing it himself. The answer to the puzzle is 'KILLER'." },
        { question: "Does Trevor find peace?", answer: "Yes. At the end of the film, Trevor drives to the police station and confesses to the hit-and-run. Once he accepts responsibility for his actions, he is finally able to sleep." }
    ],
    'Primal Fear': [
        { question: "Does Aaron really have multiple personalities?", answer: "No. The stuttering, innocent 'Aaron' and the violent, psychopathic 'Roy' were an elaborate act designed to secure an insanity defense. There never was an Aaron; he was 'Roy' the entire time." },
        { question: "Why did he murder the Archbishop?", answer: "The Archbishop was a sexual predator who forced the altar boys, including Aaron and his girlfriend, to perform in pornographic videos. Aaron murdered him in retaliation and to secure the video tape." },
        { question: "How does Martin Vail figure out the truth?", answer: "After winning the case, Martin visits Aaron in his holding cell. When Aaron accidentally mentions a detail about the trial he shouldn't remember (because 'Roy' was supposedly in control), Martin realizes he has been manipulated." },
        { question: "Why is the slow clap significant?", answer: "When Aaron realizes he's been caught, he drops the stuttering act and gives Martin a slow, mocking applause. It is the ultimate 'Prestige'—the magician revealing his trick to the audience, knowing there are no consequences." }
    ],
    'Now You See Me': [
        { question: "Who is the 'Fifth Horseman'?", answer: "The mastermind behind the entire operation is FBI Agent Dylan Rhodes (Mark Ruffalo). He spent decades plotting a grand illusion to avenge his father, a magician who died performing a trick in a faulty safe." },
        { question: "How did they rob the bank in Paris from Las Vegas?", answer: "They didn't. The bank vault was a life-sized replica built beneath the stage in Vegas. They hypnotized a French banker to believe he was transported to Paris, while the real money was stolen by Rhodes beforehand." },
        { question: "What is 'The Eye'?", answer: "The Eye is an ancient, secret society of magicians who use illusion to balance the scales of justice and protect the art of magic. The Four Horsemen are performing these heists as an initiation test to join." },
        { question: "Why was Thaddeus Bradley framed?", answer: "Thaddeus (Morgan Freeman) made his fortune by exposing magicians' secrets. His debunking videos humiliated Dylan Rhodes' father, pushing him to attempt the dangerous stunt that killed him. Framing Thaddeus was Dylan's ultimate revenge." }
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

// 🔥 6. THE KEYWORD BRIDGE (Bulletproofed with optional chaining)
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

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR (Universal Version)
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
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = PRESTIGE_COLLECTION_FAQS[movie.Title] ? [...PRESTIGE_COLLECTION_FAQS[movie.Title]] : [];
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
    const staticFaqs = PRESTIGE_COLLECTION_FAQS[movieTitle] ? [...PRESTIGE_COLLECTION_FAQS[movieTitle]] : [];
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