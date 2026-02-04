// utils/hboActionMovieData.js - HBO MAX ACTION & EPIC COLLECTION DATA
// Grand Scale, Mythic Heroes, and Visceral Combat

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 346, "imdbID": "tt0047478", "Title": "Seven Samurai", "year": 1954, "genre": "Action", "runtime": 207, "rank": 1 },
    { "tmdbId": 155, "imdbID": "tt0468569", "Title": "The Dark Knight", "year": 2008, "genre": "Action", "runtime": 152, "rank": 2 },
    { "tmdbId": 122, "imdbID": "tt0167260", "Title": "The Lord of the Rings: The Return of the King", "year": 2003, "genre": "Fantasy", "runtime": 201, "rank": 3 },
    { "tmdbId": 245891, "imdbID": "tt2911666", "Title": "John Wick", "year": 2014, "genre": "Action", "runtime": 101, "rank": 4 },
    { "tmdbId": 693134, "imdbID": "tt15239678", "Title": "Dune: Part Two", "year": 2024, "genre": "Sci-Fi", "runtime": 166, "rank": 5 },
    { "tmdbId": 791373, "imdbID": "tt12361974", "Title": "Zack Snyder's Justice League", "year": 2021, "genre": "Action", "runtime": 242, "rank": 6 },
    { "tmdbId": 414906, "imdbID": "tt1877830", "Title": "The Batman", "year": 2022, "genre": "Crime", "runtime": 176, "rank": 7 },
    { "tmdbId": 149191, "imdbID": "tt2820466", "Title": "Justice League: The Flashpoint Paradox", "year": 2013, "genre": "Animation", "runtime": 81, "rank": 8 },
    { "tmdbId": 263115, "imdbID": "tt3315342", "Title": "Logan", "year": 2017, "genre": "Action", "runtime": 137, "rank": 9 },
    { "tmdbId": 438631, "imdbID": "tt1160419", "Title": "Dune", "year": 2021, "genre": "Sci-Fi", "runtime": 155, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Violence, Intensity & Gore)
export const SENSITIVE_TIMELINES = {
    // 1. Seven Samurai (Example ID)
    346: { scenes: [] }, 

    // 2. The Dark Knight (Example ID)
    155: { scenes: [] },

    // 3. The Lord of the Rings (Example ID)
    122: { scenes: [] }, 

    // 4. John Wick (Correct ID: 245891)
    245891: { 
        scenes: [
            { start: "45:00", end: "45:30", type: "Suggestive Clothing (Women in Bikinis)", severity: "Low" }
        ] 
    },

    // 5. Dune: Part Two (Example ID)
    693134: { scenes: [] }, 

    // 6. Poor Things (Example ID)
    791373: { scenes: [] },

    // 7. The Batman (Example ID)
    414906: { scenes: [] },

    // 8. Previous ID (Cleared)
    149191: { scenes: [] },

    // 9. Logan (Correct ID: 263115)
    263115: { 
        scenes: [
            { start: "20:20", end: "20:30", type: "Nudity", severity: "Moderate" }
        ] 
    },

    // 10.  (Example ID)
    438631: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    346: "https://image.tmdb.org/t/p/w500/8OKmBV5BUFzqzBmqX5gsROk50u.jpg",
    155: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    122: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    245891: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    693134: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    791373: "https://image.tmdb.org/t/p/w500/tnAuBimRihohTFFr8Wki1cNPGtA.jpg",
    414906: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    149191: "https://image.tmdb.org/t/p/w500/6bCplVkhowCjTHXWv49Uj480Sz6.jpg", 
    263115: "https://image.tmdb.org/t/p/w500/fnbjc3lwFSPodDF529FfaKPn9Ff.jpg",
    438631: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
};

// ✅ HELPER: Customized for Epic/Action
const createMovieData = (data) => ({
    actionIntensity: 85,    // Pacing/Action
    epicScale: 90,          // Scope/Grandeur
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Seven Samurai (THE BLUEPRINT)
    // Curve: Start Low (Recruiting) -> Build (Training) -> Skirmish -> Peak (Rain Battle) -> Somber End.
    // Peak: 97 (Rain Battle - Genre Definition).
    346: createMovieData({ 
        actionIntensity: 85, 
        epicScale: 92, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#171717", rating: 8.7, criticsScore: 100, audienceScore: 97, director: "Akira Kurosawa", 
        cast: ["Toshiro Mifune", "Takashi Shimura"], boxOffice: "N/A", budget: "$500k", 
        dna: { "Action": 50, "History": 30, "Drama": 20 }, 
        scenes: [
            { time: 20, intensity: 20, label: "Recruiting Ronin", color: "#52525b" }, // Setup
            { time: 80, intensity: 45, label: "Harvest & Training", color: "#71717a" }, // Build
            { time: 140, intensity: 75, label: "First Raid", color: "#a16207" }, // Combat (Bumped from 70)
            { time: 190, intensity: 97, label: "Rain Battle", color: "#171717" }, // PEAK ACTION
            { time: 205, intensity: 60, label: "The Funeral", color: "#3f3f46" } // Melancholy
        ],
        synopsis: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves. It is the grandfather of the modern action movie—inventing the 'team assembly' trope and defining how kinetic action is shot and edited.",
        themes: ["Honor", "Sacrifice", "Class Warfare"]
    }),

    // 2. The Dark Knight (CRIME EPIC)
    // Curve: High Start (Heist) -> Tension -> Chase -> Peak (Interrogation) -> Tragedy.
    // Peak: 93 (Interrogation/Chase - Psychological Peak).
    155: createMovieData({ 
        actionIntensity: 92, 
        epicScale: 90, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#1e3a8a", rating: 9.0, criticsScore: 94, audienceScore: 94, director: "Christopher Nolan", 
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], boxOffice: "$1 billion", budget: "$185 million", 
        dna: { "Action": 40, "Crime": 40, "Thriller": 20 }, 
        scenes: [
            { time: 5, intensity: 80, label: "Bank Heist", color: "#3b82f6" }, // Hook
            { time: 60, intensity: 70, label: "Truck Flip", color: "#1d4ed8" }, // Spectacle
            { time: 90, intensity: 93, label: "Interrogation", color: "#172554" }, // PEAK TENSION (Adjusted from 95)
            { time: 120, intensity: 90, label: "Hospital Blows", color: "#ef4444" }, // Chaos (Adjusted from 85)
            { time: 145, intensity: 88, label: "The Fall", color: "#000000" } // Tragedy
        ],
        synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        themes: ["Chaos", "Order", "Corruption"]
    }),

    // 3. The Lord of the Rings: Return of the King (FANTASY SCALE)
    // Curve: Quiet -> Buildup -> War -> Peak (Rohirrim) -> Farewell.
    // Peak: 100 (Charge of the Rohirrim - Unmatched Scale).
    122: createMovieData({ 
        actionIntensity: 95, 
        epicScale: 100, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#f59e0b", rating: 9.0, criticsScore: 93, audienceScore: 86, director: "Peter Jackson", 
        cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"], boxOffice: "$1.1 billion", budget: "$94 million", 
        dna: { "Fantasy": 60, "War": 30, "Adventure": 10 }, 
        scenes: [
            { time: 30, intensity: 40, label: "The Beacons", color: "#fcd34d" }, // Hope
            { time: 90, intensity: 85, label: "Siege of Gondor", color: "#78350f" }, // War
            { time: 130, intensity: 100, label: "Ride of the Rohirrim", color: "#f59e0b" }, // PEAK EPIC
            { time: 180, intensity: 92, label: "Mount Doom", color: "#dc2626" }, // Climax (Adjusted from 95)
            { time: 195, intensity: 50, label: "Grey Havens", color: "#fbbf24" } // Emotion
        ],
        synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring. The culmination of the greatest film trilogy ever made.",
        themes: ["Friendship", "Destiny", "Courage"]
    }),

    // 4. John Wick (TACTICAL VIOLENCE)
    // Curve: Grief (Low) -> Trigger -> The Club -> Peak (Gun-Fu) -> Finale.
    // Peak: 95 (Red Circle Club - Kinetic Flow).
    245891: createMovieData({ 
        actionIntensity: 90, 
        epicScale: 60, 
        complexityLevel: "DIRECT", 
        dominantColor: "#3b82f6", rating: 7.4, criticsScore: 86, audienceScore: 81, director: "Chad Stahelski", 
        cast: ["Keanu Reeves", "Michael Nyqvist", "Willem Dafoe"], boxOffice: "$86 million", budget: "$20 million", 
        dna: { "Action": 70, "Thriller": 20, "Noir": 10 }, 
        scenes: [
            { time: 15, intensity: 20, label: "The Puppy", color: "#ef4444" }, // Emotional Low
            { time: 35, intensity: 65, label: "Home Defense", color: "#3b82f6" }, // Wake Up
            { time: 60, intensity: 95, label: "Red Circle Club", color: "#8b5cf6" }, // PEAK FLOW (Adjusted from 92)
            { time: 80, intensity: 75, label: "The Church", color: "#1e3a8a" }, // Tactical
            { time: 95, intensity: 90, label: "Dock Fight", color: "#172554" } // Finale (Adjusted from 88)
        ],
        synopsis: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him. This film revitalized the American action genre by focusing on 'Gun-Fu' and clear choreography.",
        themes: ["Vengeance", "Consequences", "Mythology"]
    }),

    // 5. Dune: Part Two (VISUAL MAJESTY)
    // Curve: Learning -> Riding -> Water -> Holy War -> Peak (Duel).
    // Peak: 97 (Knife Duel - Emotional & Physical Apex).
    693134: createMovieData({ 
        actionIntensity: 90, 
        epicScale: 98, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#ea580c", rating: 8.6, criticsScore: 92, audienceScore: 95, director: "Denis Villeneuve", 
        cast: ["Timothée Chalamet", "Zendaya", "Austin Butler"], boxOffice: "$711 million", budget: "$190 million", 
        dna: { "Sci-Fi": 50, "War": 30, "Political": 20 }, 
        scenes: [
            { time: 20, intensity: 45, label: "Desert Guerilla", color: "#fdba74" }, // Immersion
            { time: 60, intensity: 85, label: "Riding the Worm", color: "#ea580c" }, // Awe
            { time: 100, intensity: 70, label: "Water of Life", color: "#3b82f6" }, // Mysticism
            { time: 140, intensity: 93, label: "The Holy War", color: "#c2410c" }, // Spectacle (Adjusted from 96)
            { time: 160, intensity: 97, label: "Knife Duel", color: "#78350f" } // PEAK DUEL (Adjusted from 88)
        ],
        synopsis: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe.",
        themes: ["Prophecy", "Fanaticism", "Power"]
    }),

    // 6. Zack Snyder's Justice League (OPERATIC HEROISM)
    // Curve: History -> Team Up -> Resurrection -> Peak (Speed Force) -> Epilogue.
    // Peak: 93 (Flash Reverses Time - Cosmic Stakes).
    791373: createMovieData({ 
        actionIntensity: 85, 
        epicScale: 95, 
        complexityLevel: "EPIC", 
        dominantColor: "#52525b", rating: 7.9, criticsScore: 72, audienceScore: 93, director: "Zack Snyder", 
        cast: ["Ben Affleck", "Henry Cavill", "Gal Gadot"], boxOffice: "Streaming", budget: "$70 million (reshoots)", 
        dna: { "Action": 50, "Fantasy": 30, "Drama": 20 }, 
        scenes: [
            { time: 30, intensity: 50, label: "Wonder Woman", color: "#facc15" }, // Introduction
            { time: 120, intensity: 75, label: "Tunnel Battle", color: "#3f3f46" }, // Teamup
            { time: 180, intensity: 85, label: "Superman Returns", color: "#1d4ed8" }, // Hope
            { time: 220, intensity: 93, label: "Speed of Force", color: "#3b82f6" }, // PEAK TIME (Adjusted from 95)
            { time: 235, intensity: 40, label: "Epilogue", color: "#18181b" } // Setup
        ],
        synopsis: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        themes: ["Redemption", "Unity", "Fatherhood"]
    }),

    // 7. The Batman (NOIR DETECTIVE)
    // Curve: Fear -> Investigation -> Car Chase -> Peak (The Flood) -> Hope.
    // Peak: 94 (The Flood - Disaster Climax).
    414906: createMovieData({ 
        actionIntensity: 85, 
        epicScale: 80, 
        complexityLevel: "ATMOSPHERIC", 
        dominantColor: "#b91c1c", rating: 7.8, criticsScore: 85, audienceScore: 87, director: "Matt Reeves", 
        cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"], boxOffice: "$772 million", budget: "$200 million", 
        dna: { "Crime": 50, "Noir": 30, "Action": 20 }, 
        scenes: [
            { time: 10, intensity: 60, label: "I am Vengeance", color: "#7f1d1d" }, // Intro
            { time: 60, intensity: 45, label: "The Riddles", color: "#1c1917" }, // Detective
            { time: 90, intensity: 91, label: "Penguin Chase", color: "#ef4444" }, // Action (Adjusted from 92)
            { time: 130, intensity: 75, label: "Interrogation", color: "#fecaca" }, // Tension
            { time: 165, intensity: 94, label: "The Flood", color: "#b91c1c" } // PEAK CLIMAX (Adjusted from 88)
        ],
        synopsis: "When a killer targets Gotham's elite with a series of sadistic machinations, a trail of cryptic clues sends the World's Greatest Detective on an investigation into the underworld. A grounded, gritty noir.",
        themes: ["Vengeance vs Hope", "Corruption", "Fear"]
    }),

    // 8. Justice League: The Flashpoint Paradox (ANIMATED BRUTALITY)
    // Curve: Grief -> Confusion -> Horror -> Peak (Apocalypse War) -> Reset.
    // Peak: 90 (Atlantean vs Amazon War - Global Carnage).
    149191: createMovieData({ 
        actionIntensity: 88, 
        epicScale: 85, 
        complexityLevel: "DARK", 
        dominantColor: "#facc15", rating: 8.1, criticsScore: 100, audienceScore: 93, director: "Jay Oliva", 
        cast: ["Justin Chambers", "C. Thomas Howell"], boxOffice: "Direct-to-Video", budget: "$3.5 million", 
        dna: { "Animation": 40, "Action": 40, "Sci-Fi": 20 }, 
        scenes: [
            { time: 10, intensity: 35, label: "Saving Mom", color: "#fef08a" }, // Catalyst
            { time: 35, intensity: 65, label: "Batman vs Yo-Yo", color: "#52525b" }, // Dark Mirror
            { time: 60, intensity: 75, label: "Superman Found", color: "#9ca3af" }, // Horror
            { time: 75, intensity: 90, label: "World War III", color: "#ef4444" }, // PEAK CARNAGE
            { time: 80, intensity: 85, label: "The Letter", color: "#eab308" } // Resolution
        ],
        synopsis: "The Flash finds himself in a war-torn alternate timeline where he no longer has his powers, his mother is alive, Thomas Wayne is Batman, and Aquaman and Wonder Woman are destroying the world in a brutal war.",
        themes: ["Consequences", "Acceptance", "War"]
    }),

    // 9. Logan (WESTERN TRAGEDY)
    // Curve: Decay -> Discovery -> Farmhouse -> Peak (Forest Rage) -> Cross.
    // Peak: 98 (Forest Berserker Rage - Brutal Tragedy).
    263115: createMovieData({ 
        actionIntensity: 90, 
        epicScale: 50, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#ca8a04", rating: 8.1, criticsScore: 93, audienceScore: 90, director: "James Mangold", 
        cast: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"], boxOffice: "$619 million", budget: "$97 million", 
        dna: { "Western": 40, "Drama": 40, "Action": 20 }, 
        scenes: [
            { time: 5, intensity: 70, label: "Hubcaps Fight", color: "#ea580c" }, // Brutality (Bumped from 65)
            { time: 45, intensity: 55, label: "Casino Escape", color: "#facc15" }, // Chase
            { time: 90, intensity: 80, label: "Farmhouse Night", color: "#7f1d1d" }, // Horror
            { time: 120, intensity: 98, label: "Forest Rage", color: "#991b1b" }, // PEAK TRAGEDY (Bumped from 95)
            { time: 135, intensity: 50, label: "The Cross", color: "#78350f" } // Peace
        ],
        synopsis: "In a near future where mutants are nearly extinct, an aging and weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world are up-ended when a young mutant arrives, being pursued by dark forces.",
        themes: ["Family", "Legacy", "Mortality"]
    }),

    // 10. Dune (WORLD BUILDING)
    // Curve: Dreams -> Politics -> Arrakis -> Peak (Harkonnen Attack) -> Desert.
    // Peak: 88 (Night Attack - Scale & Betrayal).
    438631: createMovieData({ 
        actionIntensity: 75, 
        epicScale: 95, 
        complexityLevel: "VISUAL", 
        dominantColor: "#d97706", rating: 8.0, criticsScore: 83, audienceScore: 90, director: "Denis Villeneuve", 
        cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"], boxOffice: "$406 million", budget: "$165 million", 
        dna: { "Sci-Fi": 60, "Political": 20, "Adventure": 20 }, 
        scenes: [
            { time: 20, intensity: 25, label: "Gom Jabbar", color: "#1c1917" }, // Tension
            { time: 60, intensity: 50, label: "Spice Harvester", color: "#d97706" }, // Awe
            { time: 90, intensity: 88, label: "Night Attack", color: "#ef4444" }, // PEAK SCALE
            { time: 120, intensity: 70, label: "Thopter Escape", color: "#b45309" }, // Action
            { time: 145, intensity: 60, label: "Desert Power", color: "#f59e0b" } // Setup
        ],
        synopsis: "A mythic and emotionally charged hero's journey, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
        themes: ["Destiny", "Colonialism", "Ecology"]
    })
};

export const STRATEGIC_QUOTES = {
    346: "This is the nature of war: by protecting others, you save yourself.",
    155: "You either die a hero, or you live long enough to see yourself become the villain.",
    122: "I can't carry it for you, but I can carry you!",
    245891: "People keep asking if I'm back and I haven't really had an answer. But now, yeah, I'm thinking I'm back.",
    693134: "May thy knife chip and shatter.",
    791373: "Make your own future. Make your own past. It's all right now.",
    414906: "I am the shadows.",
    149191: "Accept the things you cannot change. Have the courage to change the things you can.",
    263115: "Don't be what they made you.",
    438631: "Fear is the mind-killer."
};

export const CINEMATIC_COLORS = {
    "Action": "#ef4444", "Sci-Fi": "#d97706", "Fantasy": "#f59e0b", "Crime": "#1e3a8a", "Animation": "#facc15", "Western": "#ca8a04", "Noir": "#171717"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Boring", color: "#dc2626", symbol: "💤", bgColor: "bg-red-900/30", description: "Put me to sleep" },
    { value: 2, label: "Standard", color: "#ea580c", symbol: "🤷", bgColor: "bg-orange-900/30", description: "Typical blockbuster" },
    { value: 3, label: "Epic", color: "#16a34a", symbol: "🔥", bgColor: "bg-green-900/30", description: "Huge scale & action" },
    { value: 4, label: "Legendary", color: "#eab308", symbol: "👑", bgColor: "bg-yellow-900/30", description: "Cinema history" }
];

export const HBO_ACTION_MOVIE_FAQS = {
    'Seven Samurai': [
        { 
            question: "Is it too old to enjoy today?", 
            answer: "Not at all—it literally invented the modern action movie blueprint. The team-building structure, the kinetic editing during battles, and the distinct character archetypes (the cool leader, the funny one, the young rookie) are the direct ancestors of everything from The Avengers to Star Wars. Its pacing is surprisingly modern and the action hits hard." 
        },
        { 
            question: "Why is it over three hours long?", 
            answer: "The runtime is essential because the film spends the first half meticulously building the team and the geography of the village. By the time the bandits attack, you know every character and every defensive point, making the stakes incredibly high. You feel every death because you've spent three hours living with them." 
        },
        { 
            question: "Did it really inspire The Magnificent Seven?", 
            answer: "Yes, 'The Magnificent Seven' is a direct Western remake of this film. But its influence goes much further—it inspired 'A Bug's Life', an episode of 'The Mandalorian', and Zack Snyder's 'Rebel Moon'. Almost every 'team on a mission' movie owes its DNA to Kurosawa's masterpiece." 
        },
        { 
            question: "What does the ending mean?", 
            answer: "The famous line 'The farmers have won. We have lost' highlights the tragedy of the samurai class. They are essential for war but have no place in peace. The ending is a bittersweet commentary on the obsolescence of the warrior and the cyclical resilience of the common people." 
        }
    ],
    'The Dark Knight': [
        { 
            question: "Did Heath Ledger improvise the clapping scene?", 
            answer: "Yes, the moment where the Joker sarcastically claps inside his jail cell as Gordon is promoted was entirely improvised by Ledger. Similarly, the scene where the hospital explosion pauses and he fiddles with the remote was an ad-lib that kept the camera rolling during a massive practical stunt." 
        },
        { 
            question: "Is it an action movie or a crime drama?", 
            answer: "Christopher Nolan specifically modeled it after Michael Mann's crime epic 'Heat' (1995) rather than a traditional superhero film. It functions as a gritty urban crime saga about corruption, escalation, and the breakdown of social order, which just happens to feature a guy in a bat suit." 
        },
        { 
            question: "Why is the pencil trick so famous?", 
            answer: "It creates an instant, terrifying definition of the Joker's character in seconds. It shows he is lethal, unpredictably violent, and possesses a twisted sense of humor, all without needing a single line of exposition about his background or training." 
        },
        { 
            question: "Did they really flip the truck?", 
            answer: "Yes, Nolan famously avoids CGI whenever possible. The 18-wheeler flip in downtown Chicago was a practical effect achieved by building a giant nitrogen piston into the trailer. The truck really flipped over in the middle of the banking district, creating a visceral scale CGI can't match." 
        }
    ],
    'The Lord of the Rings: The Return of the King': [
        { 
            question: "Why are there so many endings?", 
            answer: "The film had the monumental task of wrapping up emotional arcs for nine members of the Fellowship and the fate of Middle-earth. A quick ending would have felt cheap; the multiple fade-outs are necessary to honor the trauma, growth, and final destinations of characters we spent 12 hours watching." 
        },
        { 
            question: "Is this the Extended Edition?", 
            answer: "HBO Max typically streams the Theatrical cuts, but the data here applies to the core experience of both. The Extended Edition adds 50 minutes, including the death of Saruman and the Mouth of Sauron sequence, which deepens the lore but slows the pacing." 
        },
        { 
            question: "How big was the Charge of the Rohirrim?", 
            answer: "It remains one of the largest battle sequences ever put on film. Weta Digital created a massive crowd simulation (MASSIVE software) for the 6,000 riders, but hundreds of real horses were also used. The sheer scale and the emotional weight of Theoden's speech make it the definitive fantasy battle." 
        },
        { 
            question: "Did it really win 11 Oscars?", 
            answer: "Yes, it achieved a clean sweep, winning every single category it was nominated for, including Best Picture and Best Director. It tied with 'Ben-Hur' and 'Titanic' for the most wins in history, effectively acting as an award for the entire trilogy's achievement." 
        }
    ],
    'John Wick': [
        { 
            question: "Did Keanu Reeves do his own stunts?", 
            answer: "He performed approximately 90% of his own stunts. Reeves spent four months training in judo, Brazilian jiu-jitsu, and '3-Gun' tactical shooting. This allowed directors Chad Stahelski and David Leitch to use long, unbroken takes without hiding the actor's face, revolutionizing action cinema." 
        },
        { 
            question: "What exactly is 'Gun-Fu'?", 
            answer: "Gun-Fu is a stylistic blend of martial arts and firearms, popularized by John Woo but refined in John Wick. It involves using guns in close-quarters combat (Center Axis Relock stance) combined with grappling throws, treating the pistol as a melee weapon rather than just a ranged tool." 
        },
        { 
            question: "Why is the Red Circle Club scene so famous?", 
            answer: "It is a masterclass in visual storytelling and flow. The scene moves from stealth to chaotic violence with a pounding soundtrack by Le Castle Vania. The lighting shifts from blue to red, matching the escalating violence, and the choreography highlights Wick's sheer efficiency and exhaustion." 
        },
        { 
            question: "Is the dog's death really that important?", 
            answer: "Yes, because the puppy wasn't just a dog—it was the final gift from his dying wife and the last tether to his humanity. Killing the dog symbolized destroying his chance to grieve and be a normal person, unleashing the 'Baba Yaga' back into the world." 
        }
    ],
    'Dune: Part Two': [
        { 
            question: "Is it better than Part One?", 
            answer: "Most critics and audiences agree it surpasses the first film. While Part One was a slow-burn setup, Part Two delivers the massive payoff with epic war sequences, deeper character arcs, and tragic emotional stakes. It transforms from a political drama into a visceral war epic." 
        },
        { 
            question: "Did they use CGI for the desert?", 
            answer: "While CGI was used for the spaceships and sandworms, the vast majority of the desert scenes were filmed on location in the deserts of Jordan and Abu Dhabi. Villeneuve insisted on natural lighting to give the sand a tangible, oppressive texture that green screens cannot replicate." 
        },
        { 
            question: "What is the Water of Life?", 
            answer: "It is a lethal, toxic blue liquid exuded by a drowning sandworm. Drinking it is a test that usually kills men, but if survived, it unlocks genetic memory across past and future. Paul surviving it transforms him into the Kwisatz Haderach, granting him terrifying prescience." 
        },
        { 
            question: "Why is the Feyd-Rautha fight in black and white?", 
            answer: "The arena sequence on Giedi Prime was shot with special infrared cameras to simulate the planet's 'Black Sun.' This creative choice creates a stark, ghostly aesthetic that visualizes the Harkonnens' soulless, brutal culture without needing a single line of dialogue." 
        }
    ],
    "Zack Snyder's Justice League": [
        { 
            question: "Why is the movie in a 4:3 box shape?", 
            answer: "Zack Snyder chose the 1.33:1 aspect ratio (IMAX format) to emphasize the verticality of the characters. He wanted superheroes to look like vertical pillars or Greek statues, filling the screen from top to bottom rather than being cut off by a wide letterbox format." 
        },
        { 
            question: "How is it different from the 2017 version?", 
            answer: "It is a completely different film. It runs 4 hours long, uses zero footage shot by Joss Whedon, restores Junkie XL's bombastic score, and completely changes the character arcs—especially for Cyborg, who becomes the emotional heart of the story instead of a side character." 
        },
        { 
            question: "Who is the real villain?", 
            answer: "While Steppenwolf is the primary physical threat (with a much improved, spiky design), the film introduces Darkseid as the true puppet master. He is the DC universe's ultimate evil, searching for the Anti-Life Equation to enslave all free will in the multiverse." 
        },
        { 
            question: "What is the 'Knightmare' sequence?", 
            answer: "The epilogue depicts a possible dystopian future where Darkseid has conquered Earth and Superman has succumbed to the Anti-Life Equation after the death of Lois Lane. It explains Batman's motivation and teases a sequel story that was never made." 
        }
    ],
    'The Batman': [
        { 
            question: "Is this connected to the Joker movie?", 
            answer: "No, Matt Reeves' 'The Batman' exists in its own separate 'Elseworlds' universe, distinct from the Joaquin Phoenix Joker and the main DCEU. This allows it to build its own gritty, grounded mythology without worrying about continuity with other films." 
        },
        { 
            question: "Why doesn't Batman glide gracefully?", 
            answer: "This is a 'Year Two' Batman who is still refining his technology. His wingsuit is a prototype that looks like a modified base-jumping suit. His flight is terrifying, fast, and results in a rough crash landing, emphasizing that he is still human and learning the ropes." 
        },
        { 
            question: "Is the Batmobile a real car?", 
            answer: "Yes, director Matt Reeves wanted a 'muscle car' aesthetic inspired by Stephen King's 'Christine'. The car was built practically to perform jumps, drifts, and rams. The engine noise and blue jet exhaust give it a visceral, mechanical presence that feels like a beast waking up." 
        },
        { 
            question: "Why is the Riddler so scary?", 
            answer: "This version of the Riddler is inspired by real-life serial killers like the Zodiac Killer rather than comic book gimmicks. He uses social media to radicalize followers and leaves sadistic traps, grounding the character in a terrifyingly modern reality of domestic terrorism." 
        }
    ],
    'Justice League: The Flashpoint Paradox': [
        { 
            question: "Is this movie suitable for kids?", 
            answer: "Generally no. Despite being animated, it is rated PG-13 and features shocking levels of violence, including decapitations, point-blank shootings, and the brutal deaths of beloved heroes. It is a dark, mature war story meant for teen and adult fans." 
        },
        { 
            question: "Did this restart the DC Universe?", 
            answer: "Yes, this film serves as the reset button that launched the 'DC Animated Movie Universe' (DCAMU). The post-credits scene leads directly into 'Justice League: War', starting a continuity of 16 interconnected films that concluded with 'Justice League Dark: Apokolips War'." 
        },
        { 
            question: "Why does Batman use guns?", 
            answer: "In the Flashpoint timeline, it was Bruce Wayne who died in the alley, driving his mother Martha insane (becoming the Joker) and his father Thomas Wayne to become a brutal, gun-toting Batman who has no qualms about killing criminals to save his city." 
        },
        { 
            question: "What caused the Flashpoint?", 
            answer: "Barry Allen traveled back in time to save his mother from being murdered. This singular act created a 'time boom,' sending ripples through history that altered the fates of Superman, Wonder Woman, and Aquaman, proving that you cannot change the past without breaking the future." 
        }
    ],
    'Logan': [
        { 
            question: "Is this really the end of Wolverine?", 
            answer: "For this specific cinematic timeline, yes. Hugh Jackman and director James Mangold designed it as the definitive, tragic conclusion to the character's arc. Even with multiverse appearances in 'Deadpool & Wolverine', 'Logan' remains the canonical emotional ending for the character introduced in 2000." 
        },
        { 
            question: "Why is Professor X sick?", 
            answer: "Charles Xavier is suffering from a degenerative brain disease (likely Alzheimer's). This is terrifying because he is the world's most powerful telepath; his seizures unleash psychic waves that can paralyze or kill hundreds of people, turning the X-Men's leader into a walking WMD." 
        },
        { 
            question: "What genre is this film?", 
            answer: "While technically a superhero movie, 'Logan' is structurally a Neo-Western. It draws heavy inspiration from the classic western 'Shane' (1953), focusing on an aging gunslinger who tries to bury his violence but is forced to fight one last time to protect the innocent." 
        },
        { 
            question: "Who is the clone X-24?", 
            answer: "X-24 is a younger, rage-filled clone of Logan representing his past self—the 'animal' without the soul or conscience. The final battle isn't just physical; it is Logan literally fighting his own worst nature to save the future (Laura/X-23)." 
        }
    ],
    'Dune': [
        { 
            question: "Is the movie slow?", 
            answer: "It is a deliberate, atmospheric film that prioritizes immersion over constant action. It functions as the 'Part One' of a massive opera, taking its time to establish the politics, the scale of Arrakis, and the mysticism of the Bene Gesserit before the war begins." 
        },
        { 
            question: "What is 'The Voice'?", 
            answer: "The Voice is a Bene Gesserit ability to control others using specific audio frequencies. By modulating pitch and tone, they can command a person's subconscious to obey instantly. The film visualizes this with distorted, layered audio that sounds like ancient ancestors speaking." 
        },
        { 
            question: "Why do they fight with swords instead of guns?", 
            answer: "In the Dune universe, personal energy shields (Holtzman Shields) block fast-moving objects like bullets. However, a slow-moving blade can penetrate the shield. This forces combat to return to feudal-style swordplay, where fighters must be fast on defense but slow on the attack." 
        },
        { 
            question: "What is the Spice Melange?", 
            answer: "Spice is the most valuable substance in the universe, found only on Arrakis. It extends human life, expands consciousness, and is vital for space travel (Guild Navigators use it to see safe paths through spacetime). Without Spice, the entire galactic empire would collapse." 
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
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HBO_ACTION_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - Epic action movie on HBO Max.`,
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