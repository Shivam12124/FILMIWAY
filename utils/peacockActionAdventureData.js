// utils/peacockActionAdventureData.js - PEACOCK ACTION & ADVENTURE COLLECTION DATA
// Survival Epics, Cult Classics, and High-Octane Adventure Thrillers

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed', // Replace with your actual key
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 281957, "imdbID": "tt1663202", "Title": "The Revenant", "year": 2015, "genre": "Adventure", "runtime": 156, "rank": 1 },
    { "tmdbId": 9509, "imdbID": "tt0328107", "Title": "Man on Fire", "year": 2004, "genre": "Action", "runtime": 146, "rank": 2 },
    { "tmdbId": 8009, "imdbID": "tt0091203", "Title": "Highlander", "year": 1986, "genre": "Fantasy", "runtime": 116, "rank": 3 },
    { "tmdbId": 22803, "imdbID": "tt1197624", "Title": "Law Abiding Citizen", "year": 2009, "genre": "Thriller", "runtime": 109, "rank": 4 },
    { "tmdbId": 1579, "imdbID": "tt0472043", "Title": "Apocalypto", "year": 2006, "genre": "Action", "runtime": 139, "rank": 5 },
    { "tmdbId": 8374, "imdbID": "tt0144117", "Title": "The Boondock Saints", "year": 1999, "genre": "Crime", "runtime": 108, "rank": 6 },
    { "tmdbId": 1089, "imdbID": "tt0102685", "Title": "Point Break", "year": 1991, "genre": "Action", "runtime": 122, "rank": 7 },
    { "tmdbId": 746036, "imdbID": "tt1684562", "Title": "The Fall Guy", "year": 2024, "genre": "Action", "runtime": 126, "rank": 8 },
    { "tmdbId": 101299, "imdbID": "tt1959490", "Title": "The Hunger Games: Catching Fire", "year": 2013, "genre": "Sci-Fi", "runtime": 146, "rank": 9 },
    { "tmdbId": 315162, "imdbID": "tt3915174", "Title": "Puss in Boots: The Last Wish", "year": 2022, "genre": "Animation", "runtime": 102, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Survival, Adventure Violence & Gore)
export const SENSITIVE_TIMELINES = {
    // 1. The Revenant
  281957: { scenes: [{ start: "0:06:44", end: "0:06:48", type: "Nudity", severity: "Moderate", description: "Male buttocks" }, { start: "1:44:00", end: "1:44:23", type: "Sex ", severity: "Moderate" }] },
    
    // 2. Man on Fire
    9509: { 
        scenes: [
            { start: "1:15:00", end: "1:20:00", type: "Torture", severity: "High" }, // Cutting off fingers
            { start: "1:45:00", end: "1:48:00", type: "Explosive Violence", severity: "Moderate" } // Rectal bomb
        ] 
    },
    
    // 3. Highlander
    8009: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Decapitation", severity: "Moderate" }, // Garage fight
            { start: "1:30:00", end: "1:35:00", type: "Violence", severity: "Moderate" } // Final Quickening
        ] 
    },
    
    // 4. Law Abiding Citizen
    22803: { 
        scenes: [
            { start: "0:02:00", end: "0:05:00", type: "Sexual Violence/Murder", severity: "High" }, // Home invasion
            { start: "0:35:00", end: "0:40:00", type: "Gore/Dismemberment", severity: "Extreme" } // Cellmate death
        ] 
    },
    
    // 5. Apocalypto
   1579: { scenes: [{ start: "0:17:10", end: "0:18:10", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }] },
    
    // 6. The Boondock Saints
    8374: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Graphic Violence", severity: "High" }, // Toilet drop/Russian mob
            { start: "1:20:00", end: "1:22:00", type: "Execution", severity: "Moderate" } // Courtroom scene
        ] 
    },
    
    // 7. Point Break (1991)
    1089: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Gun Violence", severity: "Moderate" }, // House raid
            { start: "1:40:00", end: "1:42:00", type: "Self Harm", severity: "Low" } // Suicide by wave
        ] 
    },
    
    // 8. The Fall Guy
    746036: { scenes: [] }, // Stunt violence (Safe/Fun)
    
    // 9. The Hunger Games: Catching Fire
    101299: { 
        scenes: [
            { start: "0:10:00", end: "0:12:00", type: "Whipping", severity: "Moderate" }, // Public punishment
            { start: "1:35:00", end: "1:40:00", type: "Attack", severity: "Moderate" } // Baboon attack
        ] 
    },
    
    // 10. Puss in Boots: The Last Wish
    315162: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Blood", severity: "Low" } // Wolf draws blood (shocking for kids)
        ] 
    }
};

export const FALLBACK_POSTERS = {
    281957: "https://image.tmdb.org/t/p/w500/ji3ecJphATlguPMMrTDDAYof088.jpg",
    9509: "https://image.tmdb.org/t/p/w500/eS1SEo7sX99pWp9y2O3jFwVjC6f.jpg",
    8009: "https://image.tmdb.org/t/p/w500/8Z8dptZwl1GfL7oQ3qZ9h9b1vj.jpg",
    22803: "https://image.tmdb.org/t/p/w500/a19l1M891547926107386.jpg",
    1579: "https://image.tmdb.org/t/p/w500/c6b7d30713781216.jpg",
    8374: "https://image.tmdb.org/t/p/w500/5e1B1e0e1e1e1e1e1.jpg",
    1089: "https://image.tmdb.org/t/p/w500/3e1B1e0e1e1e1e1e1.jpg",
    746036: "https://image.tmdb.org/t/p/w500/tXS6jV8e7t8e7t8.jpg",
    101299: "https://image.tmdb.org/t/p/w500/7B1e1e1e1e1e1e1.jpg",
    315162: "https://image.tmdb.org/t/p/w500/kuf6dtd3myERPIZ76735Jx9.jpg"
};

// ✅ HELPER: Updated for Action & Adventure Adrenaline
const createMovieData = (data) => ({
    adrenalineScore: 85,    // Default High
    violenceLevel: 60,      // Default Moderate
    visceralImpact: 90,     // Action Choreography
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. The Revenant (VISCERAL SURVIVAL ADVENTURE)
    // Peak: 100 (The Bear Attack).
    281957: createMovieData({ 
        adrenalineScore: 92, 
        violenceLevel: 95, 
        visceralImpact: 100, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#3f3f46", rating: 8.0, criticsScore: 78, audienceScore: 84, director: "Alejandro G. Iñárritu", 
        cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"], boxOffice: "$533 million", budget: "$135 million", 
        dna: { "Adventure": 50, "Survival": 40, "Thriller": 10 }, 
        scenes: [
            { time: 10, intensity: 60, label: "The Ambush", color: "#78350f" },
            { time: 25, intensity: 100, label: "Bear Attack", color: "#7f1d1d" }, 
            { time: 60, intensity: 70, label: "Crawling Out", color: "#57534e" }, 
            { time: 120, intensity: 85, label: "Horse Off Cliff", color: "#1c1917" }, 
            { time: 145, intensity: 95, label: "Final Duel", color: "#991b1b" } 
        ],
        synopsis: "In the 1820s, a frontiersman on a fur trading expedition fights for survival after being mauled by a bear and left for dead by members of his own hunting team. Fueled by sheer will and the desire for vengeance against the man who betrayed him and murdered his son, he navigates a frozen, unforgiving wasteland to find redemption.",
        themes: ["Revenge", "Nature", "Resilience"]
    }),

    // 2. Man on Fire (EMOTIONAL ACTION THRILLER)
    // Peak: 95 (The Club Scene).
    9509: createMovieData({ 
        adrenalineScore: 88, 
        violenceLevel: 85, 
        visceralImpact: 90, 
        complexityLevel: "STYLISTIC", 
        dominantColor: "#16a34a", rating: 7.7, criticsScore: 39, audienceScore: 89, director: "Tony Scott", 
        cast: ["Denzel Washington", "Dakota Fanning", "Christopher Walken"], boxOffice: "$130 million", budget: "$70 million", 
        dna: { "Action": 50, "Drama": 30, "Crime": 20 },
        scenes: [
            { time: 20, intensity: 30, label: "Pita's Bodyguard", color: "#16a34a" },
            { time: 50, intensity: 90, label: "The Kidnapping", color: "#ef4444" },
            { time: 80, intensity: 85, label: "Interrogation", color: "#b91c1c" },
            { time: 110, intensity: 95, label: "The Club", color: "#dc2626" },
            { time: 140, intensity: 60, label: "The Bridge", color: "#0f172a" }
        ],
        synopsis: "In Mexico City, a former CIA operative who has given up on life reluctantly agrees to take a job protecting a child whose parents are threatened by a wave of kidnappings. When the child is abducted, his dormant killer instincts reawaken, and he unleashes a firestorm of vengeance on everyone involved, burning down the criminal underworld piece by piece.",
        themes: ["Redemption", "Protection", "Sacrifice"]
    }),

    // 3. Highlander (FANTASY ADVENTURE)
    // Peak: 85 (The Prize).
    8009: createMovieData({ 
        adrenalineScore: 75, 
        violenceLevel: 50, 
        visceralImpact: 80, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#1e3a8a", rating: 7.1, criticsScore: 70, audienceScore: 75, director: "Russell Mulcahy", 
        cast: ["Christopher Lambert", "Sean Connery", "Clancy Brown"], boxOffice: "$12 million", budget: "$19 million", 
        dna: { "Fantasy": 50, "Action": 30, "History": 20 },
        scenes: [
            { time: 5, intensity: 75, label: "Garage Fight", color: "#3b82f6" },
            { time: 35, intensity: 60, label: "Scottish Training", color: "#166534" },
            { time: 70, intensity: 70, label: "Kurgan Alley", color: "#6b21a8" },
            { time: 90, intensity: 65, label: "Heather Dies", color: "#475569" },
            { time: 110, intensity: 85, label: "The Quickening", color: "#2563eb" }
        ],
        synopsis: "Connor MacLeod is an immortal warrior born in the Scottish Highlands in the 16th century. For centuries, he has been fighting a secret war against others like him, for when the few remaining immortals meet, they must fight to the death until only one remains to claim 'The Prize'—ultimate knowledge and power.",
        themes: ["Immortality", "Destiny", "Loneliness"]
    }),

    // 4. Law Abiding Citizen (PSYCHOLOGICAL THRILLER)
    // Peak: 90 (The Graveyard Scene).
    22803: createMovieData({ 
        adrenalineScore: 85, 
        violenceLevel: 80, 
        visceralImpact: 85, 
        complexityLevel: "THRILLER", 
        dominantColor: "#7f1d1d", rating: 7.4, criticsScore: 26, audienceScore: 75, director: "F. Gary Gray", 
        cast: ["Gerard Butler", "Jamie Foxx", "Colm Meaney"], boxOffice: "$127 million", budget: "$50 million", 
        dna: { "Thriller": 60, "Crime": 30, "Action": 10 },
        scenes: [
            { time: 5, intensity: 90, label: "Invasion", color: "#ef4444" },
            { time: 30, intensity: 85, label: "Execution Wrong", color: "#b91c1c" },
            { time: 60, intensity: 75, label: "Judge Calls", color: "#1e293b" },
            { time: 85, intensity: 90, label: "Cemetery Attack", color: "#dc2626" },
            { time: 100, intensity: 80, label: "The Tunnel", color: "#f97316" }
        ],
        synopsis: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free. He targets not only the killer but also the district attorney and others involved in the deal, orchestrating a series of lethal, high-tech attacks from inside his prison cell that threaten to tear the city apart.",
        themes: ["Justice", "System Failure", "Intelligence"]
    }),

    // 5. Apocalypto (EPIC CHASE ADVENTURE)
    // Peak: 98 (The Jaguar Chase).
    1579: createMovieData({ 
        adrenalineScore: 98, 
        violenceLevel: 90, 
        visceralImpact: 100, 
        complexityLevel: "VISUAL", 
        dominantColor: "#14532d", rating: 7.8, criticsScore: 66, audienceScore: 79, director: "Mel Gibson", 
        cast: ["Rudy Youngblood", "Raoul Trujillo", "Mayra Sérbulo"], boxOffice: "$120 million", budget: "$40 million", 
        dna: { "Action": 60, "History": 20, "Thriller": 20 },
        scenes: [
            { time: 20, intensity: 70, label: "Village Raid", color: "#ea580c" },
            { time: 60, intensity: 85, label: "The Pyramid", color: "#7f1d1d" },
            { time: 80, intensity: 90, label: "The Eclipse", color: "#000000" },
            { time: 95, intensity: 98, label: "Jaguar Chase", color: "#16a34a" },
            { time: 120, intensity: 92, label: "Waterfall Jump", color: "#0ea5e9" }
        ],
        synopsis: "As the Mayan Kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression. To save his pregnant wife and son hidden in a pit back home, he must make a desperate break for freedom and outrun a relentless hunting party through the dense, dangerous rainforest.",
        themes: ["Civilization", "Fear", "Rebirth"]
    }),

    // 6. The Boondock Saints (STYLISTIC CRIME ACTION)
    // Peak: 80 (The Firefight).
    8374: createMovieData({ 
        adrenalineScore: 80, 
        violenceLevel: 70, 
        visceralImpact: 85, 
        complexityLevel: "CULT", 
        dominantColor: "#111827", rating: 7.7, criticsScore: 28, audienceScore: 91, director: "Troy Duffy", 
        cast: ["Willem Dafoe", "Sean Patrick Flanery", "Norman Reedus"], boxOffice: "$30,000", budget: "$6 million", 
        dna: { "Action": 40, "Crime": 40, "Comedy": 20 },
        scenes: [
            { time: 15, intensity: 75, label: "Toilet Drop", color: "#ef4444" },
            { time: 40, intensity: 65, label: "Hotel Hit", color: "#1e293b" },
            { time: 70, intensity: 80, label: "Street Shootout", color: "#f59e0b" },
            { time: 85, intensity: 85, label: "THERE WAS A FIREFIGHT", color: "#b91c1c" },
            { time: 100, intensity: 75, label: "Courtroom", color: "#111827" }
        ],
        synopsis: "Two Irish Catholic brothers become vigilantes and wipe out Boston's criminal underworld in the name of God. As they leave a trail of bodies, they are pursued by an eccentric FBI agent who finds himself torn between his duty to the law and his admiration for their effectiveness.",
        themes: ["Vigilantism", "Faith", "Brotherhood"]
    }),

    // 7. Point Break (EXTREME SPORTS ACTION)
    // Peak: 88 (The Skydiving Scene).
    1089: createMovieData({ 
        adrenalineScore: 88, 
        violenceLevel: 40, 
        visceralImpact: 90, 
        complexityLevel: "COOL", 
        dominantColor: "#0ea5e9", rating: 7.3, criticsScore: 70, audienceScore: 79, director: "Kathryn Bigelow", 
        cast: ["Keanu Reeves", "Patrick Swayze", "Gary Busey"], boxOffice: "$83 million", budget: "$24 million", 
        dna: { "Action": 50, "Sport": 30, "Crime": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "First Surf", color: "#0ea5e9" },
            { time: 45, intensity: 80, label: "Ex-Presidents Robbery", color: "#f97316" },
            { time: 75, intensity: 88, label: "Foot Chase", color: "#ef4444" },
            { time: 95, intensity: 90, label: "Skydiving", color: "#3b82f6" },
            { time: 115, intensity: 85, label: "50-Year Storm", color: "#1e3a8a" }
        ],
        synopsis: "An FBI agent goes undercover to catch a gang of bank robbers who may be surfers. As he infiltrates their group, he becomes seduced by their lifestyle and forms a complex bond with their charismatic leader, Bodhi, blurring the line between cop and criminal.",
        themes: ["Freedom", "Duality", "Limit Breaking"]
    }),

    // 8. The Fall Guy (STUNT ACTION COMEDY)
    // Peak: 85 (Helicopter Jump).
    746036: createMovieData({ 
        adrenalineScore: 82, 
        violenceLevel: 30, 
        visceralImpact: 88, 
        complexityLevel: "FUN", 
        dominantColor: "#facc15", rating: 7.1, criticsScore: 82, audienceScore: 86, director: "David Leitch", 
        cast: ["Ryan Gosling", "Emily Blunt", "Aaron Taylor-Johnson"], boxOffice: "$173 million", budget: "$130 million", 
        dna: { "Action": 50, "Comedy": 30, "Romance": 20 },
        scenes: [
            { time: 10, intensity: 75, label: "Car Roll", color: "#eab308" },
            { time: 40, intensity: 65, label: "Nightclub Fight", color: "#a855f7" },
            { time: 80, intensity: 80, label: "Dumpster Truck", color: "#f97316" },
            { time: 100, intensity: 85, label: "Boat Chase", color: "#0ea5e9" },
            { time: 115, intensity: 85, label: "Helicopter Jump", color: "#ef4444" }
        ],
        synopsis: "A battered and past-his-prime stuntman finds himself working on a movie directed by his ex-girlfriend, only to become embroiled in a real-life conspiracy when the film's lead actor goes missing. He must use his stunt skills to find the star, solve the mystery, and win back the love of his life.",
        themes: ["Cinema", "Romance", "Underdogs"]
    }),

    // 9. The Hunger Games: Catching Fire (SCI-FI ADVENTURE)
    // Peak: 85 (The Arena Clock).
    101299: createMovieData({ 
        adrenalineScore: 80, 
        violenceLevel: 50, 
        visceralImpact: 85, 
        complexityLevel: "POLITICAL", 
        dominantColor: "#f59e0b", rating: 7.5, criticsScore: 90, audienceScore: 89, director: "Francis Lawrence", 
        cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"], boxOffice: "$865 million", budget: "$130 million", 
        dna: { "Sci-Fi": 40, "Action": 30, "Drama": 30 },
        scenes: [
            { time: 15, intensity: 40, label: "Victory Tour", color: "#fff7ed" },
            { time: 50, intensity: 60, label: "Chariot Ride", color: "#f59e0b" },
            { time: 90, intensity: 85, label: "The Cornucopia", color: "#ef4444" },
            { time: 110, intensity: 80, label: "Fog & Monkeys", color: "#16a34a" },
            { time: 135, intensity: 88, label: "Lightning Tree", color: "#0ea5e9" }
        ],
        synopsis: "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem. President Snow organizes the Quarter Quell, a special anniversary Games that pits past victors against each other, forcing Katniss back into the arena to fight for survival and the future of her people.",
        themes: ["Revolution", "Propaganda", "Survival"]
    }),

    // 10. Puss in Boots: The Last Wish (ANIMATED ADVENTURE)
    // Peak: 88 (Fighting Death).
    315162: createMovieData({ 
        adrenalineScore: 85, 
        violenceLevel: 20, 
        visceralImpact: 95, 
        complexityLevel: "ARTISTIC", 
        dominantColor: "#f97316", rating: 7.9, criticsScore: 95, audienceScore: 94, director: "Joel Crawford", 
        cast: ["Antonio Banderas", "Salma Hayek", "Harvey Guillén"], boxOffice: "$481 million", budget: "$90 million", 
        dna: { "Animation": 40, "Action": 40, "Comedy": 20 },
        scenes: [
            { time: 5, intensity: 80, label: "Giant Fight", color: "#ea580c" },
            { time: 20, intensity: 85, label: "Wolf Encounter", color: "#ef4444" },
            { time: 60, intensity: 75, label: "Jack Horner", color: "#8b5cf6" },
            { time: 85, intensity: 88, label: "Star Wish", color: "#facc15" },
            { time: 95, intensity: 90, label: "Duel with Death", color: "#b91c1c" }
        ],
        synopsis: "Puss in Boots discovers that his passion for peril and disregard for safety have taken their toll: he has burned through eight of his nine lives. Puss embarks on an epic journey into the Black Forest to find the mythical Wishing Star and restore his lost lives. But with only one life left, he will have to humble himself and ask for help from his former partner and nemesis: Kitty Softpaws.",
        themes: ["Mortality", "Legacy", "Fear"]
    })
};

export const STRATEGIC_QUOTES = {
    281957: "I ain't afraid to die anymore. I'd done it already.",
    9509: "Forgiveness is between them and God. It's my job to arrange the meeting.",
    8009: "There can be only one.",
    22803: "I'm gonna pull the whole thing down. I'm gonna bring the whole f***in' diseased, corrupt temple down on your heads.",
    1579: "Almost.",
    8374: "There was a FIREFIGHT!",
    1089: "Vaya con Dios, brah.",
    746036: "I'm a stuntman. It's what we do.",
    101299: "Remember who the real enemy is.",
    315162: "Pick it up."
};

export const CINEMATIC_COLORS = {
    "Action": "#ef4444", "Sci-Fi": "#3b82f6", "Thriller": "#f59e0b", "Horror": "#3f3f46", "Adventure": "#b45309", "Animation": "#f97316", "Fantasy": "#8b5cf6"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Boring", color: "#dc2626", symbol: "💤", bgColor: "bg-red-900/30", description: "Put me to sleep" },
    { value: 2, label: "Generic", color: "#ea580c", symbol: "🤷", bgColor: "bg-orange-900/30", description: "Seen it before" },
    { value: 3, label: "Solid Action", color: "#16a34a", symbol: "👊", bgColor: "bg-green-900/30", description: 'Good fights, decent plot' },
    { value: 4, label: "God Tier", color: "#eab308", symbol: "🔥", bgColor: "bg-yellow-900/30", description: "Adrenaline Masterpiece" }
];

export const PEACOCK_ACTION_ADVENTURE_FAQS = {
    'The Revenant': [
        { 
            question: "Did he really sleep in a horse?", 
            answer: "The scene where Leonardo DiCaprio sleeps inside a horse carcass is technically a prop, but it was built to be incredibly realistic. However, DiCaprio did eat raw bison liver for real, despite being a vegetarian, because the fake gelatin liver didn't look authentic enough on camera." 
        },
        { 
            question: "Was the bear real?", 
            answer: "No. The bear was a stuntman named Glenn Ennis in a blue suit, which was then replaced by CGI. The stunt team watched videos of real bear attacks to choreograph the movement, making it feel heavy, clumsy, and terrifyingly real." 
        },
        { 
            question: "Why was the lighting so unique?", 
            answer: "Cinematographer Emmanuel Lubezki insisted on using only natural light (the sun and fire) to shoot the entire film. This meant the crew only had small windows of time each day to film, adding immense pressure but resulting in a visually stunning, grounded look." 
        }
    ],
    'Man on Fire': [
        { 
            question: "Is this a true story?", 
            answer: "No, it is based on a 1980 novel by A.J. Quinnell. However, the kidnapping wave in Mexico City depicted in the film was a very real crisis at the time of filming, adding a layer of social commentary to the action." 
        },
        { 
            question: "Why is the editing so chaotic?", 
            answer: "Director Tony Scott used hand-cranked cameras and double exposures to create a jittery, hallucinogenic visual style. This was meant to reflect the protagonist's fractured, alcoholic, and unstable state of mind." 
        },
        { 
            question: "Did Denzel really play piano?", 
            answer: "Yes, Denzel Washington took piano lessons to learn the specific pieces his character plays, wanting to show that Creasy was a man of culture and soul before he became a killer." 
        }
    ],
    'Highlander': [
        { 
            question: "Why does Sean Connery have a Spanish name?", 
            answer: "It is one of cinema's great ironies: Sean Connery (a Scot) plays an Egyptian/Spanish metallurgist, while Christopher Lambert (a French-American) plays a Scotsman. Connery didn't even attempt a Spanish accent, keeping his famous Scottish burr." 
        },
        { 
            question: "How was the 'Quickening' filmed?", 
            answer: "The lightning effects were created by animating light onto the film stock and using practical explosions on set. The sparks were dangerous; Christopher Lambert actually burned his hands during the sword fights because the swords were wired to car batteries to spark on impact." 
        }
    ],
    'Law Abiding Citizen': [
        { 
            question: "Did Jamie Foxx change the ending?", 
            answer: "Rumors have persisted for years that Jamie Foxx demanded the ending be changed so his character (the prosecutor) wins, rather than Gerard Butler's character (the killer). However, the producers claim the ending was always written that way to uphold the message that 'the system' always wins." 
        },
        { 
            question: "How did he kill with a bone?", 
            answer: "In the steak bone scene, the violence is shocking because of its realism. Gerard Butler practiced the move extensively to make it look like a trained military reflex rather than a movie punch." 
        }
    ],
    'Apocalypto': [
        { 
            question: "Is the language real?", 
            answer: "Yes. The entire film is spoken in Yucatec Maya, a modern dialect of the ancient language. Mel Gibson insisted on using the native language to immerse the audience completely in the era." 
        },
        { 
            question: "Did they really jump off a waterfall?", 
            answer: "The waterfall jump was a composite shot. The actor Rudy Youngblood (who did his own stunts) jumped from a 15-story building rig on a wire, which was then digitally composited over footage of the real Salto de Eyipantla waterfall in Mexico." 
        }
    ],
    'The Boondock Saints': [
        { 
            question: "Why did critics hate it?", 
            answer: "The movie was released shortly after the Columbine High School massacre. Its stylized, cool depiction of vigilante gun violence was considered in extremely poor taste by critics at the time, leading to a limited theatrical run. It found its massive audience later on DVD." 
        },
        { 
            question: "Was Willem Dafoe's scene improvised?", 
            answer: "Willem Dafoe's famous 'THERE WAS A FIREFIGHT!' scene was heavily improvised. He asked the director if he could go 'over the top,' and the result became the most iconic moment of the film." 
        }
    ],
    'Point Break': [
        { 
            question: "Did Patrick Swayze really skydive?", 
            answer: "Yes. Patrick Swayze was an avid skydiver and performed 55 jumps for the film. For the scenes where he is talking in mid-air, he was actually falling, and the other skydivers held onto him to keep him steady for the camera." 
        },
        { 
            question: "Did Keanu learn to surf?", 
            answer: "Yes, Keanu Reeves learned to surf specifically for this role and enjoyed it so much that he continues to surf to this day. However, the massive waves in the finale were doubled by professional big-wave surfers." 
        }
    ],
    'The Fall Guy': [
        { 
            question: "Did they break a world record?", 
            answer: "Yes. The film set a Guinness World Record for the most cannon rolls in a car. Stunt driver Logan Holladay rolled a Jeep Grand Cherokee eight and a half times in a single stunt, breaking the previous record held by 'Casino Royale'." 
        },
        { 
            question: "Is it based on a show?", 
            answer: "Yes, it is a loose adaptation of the 1980s TV show 'The Fall Guy' starring Lee Majors. Majors even has a cameo in the post-credits scene of the movie." 
        }
    ],
    'The Hunger Games: Catching Fire': [
        { 
            question: "Why did they change directors?", 
            answer: "Gary Ross, who directed the first film, left because the production schedule was too tight. Francis Lawrence took over and is widely credited with elevating the franchise's visual style and action choreography." 
        },
        { 
            question: "Was the arena real?", 
            answer: "The jungle arena scenes were filmed in Hawaii. The water sequences were particularly difficult; Jennifer Lawrence got an ear infection that left her partially deaf for weeks during filming." 
        }
    ],
    'Puss in Boots: The Last Wish': [
        { 
            question: "Why does the animation look different?", 
            answer: "The film uses a 'painterly' art style similar to 'Spider-Man: Into the Spider-Verse'. Instead of hyper-realistic fur, the textures look like brushstrokes, giving the film a storybook fairytale aesthetic that differentiates it from the Shrek movies." 
        },
        { 
            question: "Is the Wolf death?", 
            answer: "Yes. The Wolf is the physical embodiment of Death. His whistle is a homage to classic spaghetti westerns, signaling that the hero's time is running out." 
        }
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
        if (lowerType.includes('gore') || lowerType.includes('blood')) types.add('heavy gore');
        if (lowerType.includes('violence') || lowerType.includes('fight')) types.add('graphic violence');
        if (lowerType.includes('torture')) types.add('disturbing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PEACOCK_ACTION_ADVENTURE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - High octane action and adventure movie on Peacock.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
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