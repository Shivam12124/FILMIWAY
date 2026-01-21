// utils/huluActionMovieData.js - HULU ACTION COLLECTION DATA
// High-Octane Action, Fight Choreography, and Adrenaline-Fueled Cinema

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 106, "imdbID": "tt0093773", "Title": "Predator", "year": 1987, "genre": "Sci-Fi", "runtime": 107, "rank": 1 },
    { "tmdbId": 14756, "imdbID": "tt1220719", "Title": "Ip Man", "year": 2008, "genre": "Action", "runtime": 106, "rank": 2 },
    { "tmdbId": 119450, "imdbID": "tt2103281", "Title": "Dawn of the Planet of the Apes", "year": 2014, "genre": "Sci-Fi", "runtime": 130, "rank": 3 },
    { "tmdbId": 1376434, "imdbID": "tt36463894", "Title": "Predator: Killer of Killers", "year": 2025, "genre": "Animation", "runtime": 45, "rank": 4 },
    { "tmdbId": 156022, "imdbID": "tt0455944", "Title": "The Equalizer", "year": 2014, "genre": "Thriller", "runtime": 132, "rank": 5 },
    { "tmdbId": 207703, "imdbID": "tt2802144", "Title": "Kingsman: The Secret Service", "year": 2014, "genre": "Action", "runtime": 129, "rank": 6 },
    { "tmdbId": 44048, "imdbID": "tt0477080", "Title": "Unstoppable", "year": 2010, "genre": "Thriller", "runtime": 98, "rank": 7 },
    { "tmdbId": 766507, "imdbID": "tt11866324", "Title": "Prey", "year": 2022, "genre": "Sci-Fi", "runtime": 99, "rank": 8 },
    { "tmdbId": 718930, "imdbID": "tt12593682", "Title": "Bullet Train", "year": 2022, "genre": "Action", "runtime": 127, "rank": 9 },
    { "tmdbId": 513310, "imdbID": "tt9066658", "Title": "Boss Level", "year": 2020, "genre": "Sci-Fi", "runtime": 100, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Extreme Violence & Gore)
export const SENSITIVE_TIMELINES = {
    // 1. Predator
    106: { 
        scenes: [
            { start: "0:46:00", end: "0:47:00", type: "Gore", severity: "High" }, // Skinned bodies
            { start: "1:15:20", end: "1:16:30", type: "Violence", severity: "Extreme" } // Spine rip
        ] 
    },
    // 2. Ip Man
    14756: { 
        scenes: [
            { start: "0:58:00", end: "1:02:00", type: "Violence", severity: "High" } // 1 vs 10 bone breaking
        ] 
    },
    // 3. Dawn of the Planet of the Apes
    119450: { scenes: [] }, // War violence, mostly guns
    
    // 4. Predator: Killer of Killers
    1376434: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Animated Gore", severity: "High" }
        ] 
    },
    // 5. The Equalizer
    156022: { 
        scenes: [
            { start: "1:25:00", end: "1:27:00", type: "Violence", severity: "Extreme" }, // Drill scene
            { start: "0:28:00", end: "0:29:00", type: "Violence", severity: "High" } // Bar fight
        ] 
    },
    // 6. Kingsman: The Secret Service
    207703: { 
        scenes: [
            { start: "1:24:00", end: "1:28:00", type: "Violence", severity: "Extreme" }, // Church Fight
            { start: "1:35:00", end: "1:36:00", type: "Exploding Heads", severity: "High" }
        ] 
    },
    // 7. Unstoppable
    44048: { scenes: [] }, // High tension, low violence
    
    // 8. Prey
    766507: { 
        scenes: [
            { start: "0:55:00", end: "0:58:00", type: "Gore", severity: "High" } // Bear trap sequence
        ] 
    },
    // 9. Bullet Train
    718930: { 
        scenes: [
            { start: "0:50:00", end: "0:52:00", type: "Bloody Violence", severity: "High" }, // Eye stab
            { start: "1:40:00", end: "1:45:00", type: "Violence", severity: "High" }
        ] 
    },
    // 10. Boss Level
    513310: { 
        scenes: [
            { start: "0:35:00", end: "0:36:00", type: "Gore", severity: "High" } // Decapitation
        ] 
    }
};

export const FALLBACK_POSTERS = {
    106: "https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    14756: "https://image.tmdb.org/t/p/w500/ggTTuxwxV76P10J9a9YtV529E7Q.jpg",
    119450: "https://image.tmdb.org/t/p/w500/2EuaZ1p9KT81hMWjV7oqamAQ6RL.jpg",
    1376434: "https://via.placeholder.com/500x750?text=Predator+Killer+of+Killers",
    156022: "https://image.tmdb.org/t/p/w500/9u4yW7yPA0MQ274BeckxdbkF2A.jpg",
    207703: "https://image.tmdb.org/t/p/w500/ay7xwXn1G9fzX9T98qqeE406Zo.jpg",
    44048: "https://image.tmdb.org/t/p/w500/u3kX5Z3yEa3aZ3X5X3X3X3X3X3X.jpg",
    766507: "https://image.tmdb.org/t/p/w500/ujr5pztc1oirVRgiIYWO0pWitVD.jpg",
    718930: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
    513310: "https://image.tmdb.org/t/p/w500/6bCplVkhowCjTHXWv49Uj480Sz6.jpg"
};

// ✅ HELPER: Updated for Adrenaline & Violence
const createMovieData = (data) => ({
    adrenalineScore: 85,    // Default High
    violenceLevel: 75,      // Default Moderate-High
    visceralImpact: 90,     // Action Choreography
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Predator (THE CLASSIC)
    // Curve: Insertion -> Discovery -> The Trap -> Primal Duel -> Explosion.
    // Peak: 95 (Self Destruct - Survival Climax).
    106: createMovieData({ 
        adrenalineScore: 88, 
        violenceLevel: 85, 
        visceralImpact: 98, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#166534", rating: 8.5, criticsScore: 82, audienceScore: 87, director: "John McTiernan", 
        cast: ["Arnold Schwarzenegger", "Carl Weathers", "Jesse Ventura"], boxOffice: "$98.3 million", budget: "$15 million", 
        dna: { "Action": 40, "Sci-Fi": 30, "Horror": 30 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Insertion", color: "#166534" }, // Setup
            { time: 35, intensity: 50, label: "Something's Watching", color: "#65a30d" }, // Unease
            { time: 55, intensity: 85, label: "Old Painless", color: "#ef4444" }, // Firepower
            { time: 90, intensity: 90, label: "Mud Camouflage", color: "#3f6212" }, // Strategy
            { time: 95, intensity: 95, label: "Self Destruct", color: "#f59e0b" } // PEAK SURVIVAL
        ],
        synopsis: "Dutch, the leader of an elite special forces rescue team, leads his men deep into the Central American jungle on a CIA mission to recover hostages from guerrillas. However, the mission goes horribly sideways when they realize they are being hunted by something not of this world—an invisible, technologically advanced extraterrestrial warrior that hunts humans for sport and honor.",
        themes: ["Survival", "The Hunt", "Man vs Monster"]
    }),

    // 2. Ip Man (MARTIAL ARTS PEAK)
    // Curve: Peace -> Occupation -> Outrage -> Duel -> Escape.
    // Peak: 92 (I Want 10! - Emotional Explosion).
    14756: createMovieData({ 
        adrenalineScore: 82, 
        violenceLevel: 60, 
        visceralImpact: 98, 
        complexityLevel: "HIGH", 
        dominantColor: "#d4d4d8", rating: 8.0, criticsScore: 86, audienceScore: 93, director: "Wilson Yip", 
        cast: ["Donnie Yen", "Simon Yam", "Lynn Hung"], boxOffice: "$21 million", budget: "$11 million", 
        dna: { "Action": 60, "History": 20, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 35, label: "Friendly Spar", color: "#d4d4d8" },
            { time: 45, intensity: 65, label: "The Occupation", color: "#52525b" },
            { time: 65, intensity: 92, label: "I Want 10!", color: "#18181b" },
            { time: 85, intensity: 75, label: "Cotton Mill", color: "#71717a" },
            { time: 100, intensity: 88, label: "General Miura", color: "#3f3f46" }
        ],
        synopsis: "Set during the Sino-Japanese War, the film follows Ip Man, a wealthy and respected martial artist who is forced into destitution when the Japanese army occupies his city. Refusing to bow to oppression, he uses his mastery of Wing Chun to defend his people's dignity, culminating in a legendary challenge against a karate dojo that cemented his status as a folk hero.",
        themes: ["Honor", "Nationalism", "Martial Arts"]
    }),

    // 3. Dawn of the Planet of the Apes (WAR SCALE)
    // Curve: Truce -> Tension -> Betrayal -> Battle -> Standoff.
    // Peak: 90 (The Attack Begins - War Spectacle).
    119450: createMovieData({ 
        adrenalineScore: 85, 
        violenceLevel: 70, 
        visceralImpact: 92, 
        complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 7.6, criticsScore: 90, audienceScore: 88, director: "Matt Reeves", 
        cast: ["Andy Serkis", "Jason Clarke", "Gary Oldman"], boxOffice: "$710 million", budget: "$170 million", 
        dna: { "War": 50, "Sci-Fi": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 35, label: "The Bear Hunt", color: "#166534" }, // Introduction
            { time: 45, intensity: 60, label: "Koba's Trick", color: "#71717a" }, // Political Tension
            { time: 70, intensity: 85, label: "Betrayal", color: "#ef4444" }, // Breaking Point
            { time: 95, intensity: 90, label: "War Begins", color: "#b91c1c" }, // PEAK BATTLE
            { time: 120, intensity: 80, label: "Caesar vs Koba", color: "#3f3f46" } // Emotional Climax
        ],
        synopsis: "Ten years after a deadly virus wiped out most of humanity, a growing nation of genetically evolved apes led by Caesar is living in a fragile peace. When a group of human survivors enters their territory seeking power, a delicate truce is formed but short-lived. Betrayal from within both camps ignites an all-out war that will determine which species will become Earth's dominant power.",
        themes: ["War", "Trust", "Leadership"]
    }),

    // 4. Predator: Killer of Killers (ANIMATED EXTREME)
    // Curve: Landing -> Skirmish -> Slaughter -> Rage -> Death.
    // Peak: 95 (Honor Death - Visceral Climax).
    1376434: createMovieData({ 
        adrenalineScore: 90, 
        violenceLevel: 98, 
        visceralImpact: 85, 
        complexityLevel: "ANIMATED", 
        dominantColor: "#7f1d1d", rating: 7.4, criticsScore: 85, audienceScore: 88, director: "Unknown", 
        cast: ["Lindsay LaVanchy", "Louis Ozawa", "Rick Gonzalez"], boxOffice: "Streaming", budget: "$50 million",
        dna: { "Action": 50, "Animation": 30, "Horror": 20 },
        scenes: [
            { time: 5, intensity: 40, label: "The Landing", color: "#1f2937" }, // Setup
            { time: 15, intensity: 70, label: "First Blood", color: "#991b1b" }, // Escalation
            { time: 25, intensity: 85, label: "Vikings vs Beast", color: "#ef4444" }, // Combat
            { time: 35, intensity: 90, label: "Berserker Mode", color: "#7f1d1d" }, // Fury
            { time: 42, intensity: 95, label: "Honor Death", color: "#b91c1c" } // PEAK GORE
        ],
        synopsis: "An R-rated animated anthology chapter that pits a group of hardened Viking warriors against the ultimate hunter. As the Predator picks them off one by one using advanced plasma technology against their steel axes, the survivors must embrace a berserker rage to stand a chance. It is a brutal, stylish clash of eras that pushes the boundaries of animated violence.",
        themes: ["History vs Sci-Fi", "Warrior Code", "Survival"]
    }),

    // 5. The Equalizer (PRECISION)
    // Curve: Quiet -> Skill Reveal -> Warning -> Escalation -> Trap.
    // Peak: 88 (Home Depot Trap - Tactical Mastery).
    156022: createMovieData({ 
        adrenalineScore: 75, 
        violenceLevel: 90, 
        visceralImpact: 88, 
        complexityLevel: "MEDIUM", 
        dominantColor: "#171717", rating: 7.2, criticsScore: 60, audienceScore: 76, director: "Antoine Fuqua", 
        cast: ["Denzel Washington", "Marton Csokas", "Chloë Grace Moretz"], boxOffice: "$192 million", budget: "$55 million", 
        dna: { "Thriller": 50, "Action": 30, "Crime": 20 },
        scenes: [
            { time: 20, intensity: 30, label: "Diner Scene", color: "#f59e0b" }, // Setup
            { time: 28, intensity: 85, label: "19 Seconds", color: "#ef4444" }, // Action Spike
            { time: 55, intensity: 65, label: "Dirty Cops", color: "#171717" }, // Threat
            { time: 80, intensity: 75, label: "Money Train", color: "#0f172a" }, // Heist
            { time: 110, intensity: 88, label: "Home Depot Trap", color: "#eab308" } // PEAK TACTICS
        ],
        synopsis: "Robert McCall is a man who believes he has put his mysterious, violent past behind him, dedicating himself to a quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he cannot stand idly by. Armed with hidden skills and a stopwatch, he comes out of retirement to wage a one-man war against the entire criminal organization.",
        themes: ["Justice", "Vigilantism", "Precision"]
    }),

    // 6. Kingsman: The Secret Service (KINETIC)
    // Curve: Introduction -> Training -> Test -> Massacre -> Celebration.
    // Peak: 98 (Church Fight - Genre-Defining Chaos).
    207703: createMovieData({ 
        adrenalineScore: 92, 
        violenceLevel: 85, 
        visceralImpact: 95, 
        complexityLevel: "FUN", 
        dominantColor: "#ea580c", rating: 7.7, criticsScore: 75, audienceScore: 84, director: "Matthew Vaughn", 
        cast: ["Taron Egerton", "Colin Firth", "Samuel L. Jackson"], boxOffice: "$414 million", budget: "$81 million", 
        dna: { "Action": 50, "Comedy": 30, "Spy": 20 },
        scenes: [
            { time: 10, intensity: 50, label: "Manners Maketh Man", color: "#1e3a8a" }, // Style
            { time: 45, intensity: 65, label: "Skydiving Test", color: "#3b82f6" }, // Tension
            { time: 80, intensity: 98, label: "Church Fight", color: "#ef4444" }, // PEAK ACTION
            { time: 95, intensity: 80, label: "Gazelle Fight", color: "#ea580c" }, // Boss Battle
            { time: 110, intensity: 90, label: "Exploding Heads", color: "#f97316" } // Spectacle
        ],
        synopsis: "A super-secret spy organization recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius. Mixing classic James Bond tropes with hyper-violent, stylized action, it features one of the most famous single-take fight sequences in cinema history set inside a hate group's church.",
        themes: ["Class Warfare", "Spy Satire", "Gentleman Spy"]
    }),

    // 7. Unstoppable (PURE ADRENALINE)
    // Curve: Mistake -> Realization -> Failure -> Risk -> Success.
    // Peak: 96 (The Stanton Curve - High Stakes Physics).
    44048: createMovieData({ 
        adrenalineScore: 98, 
        violenceLevel: 20, 
        visceralImpact: 90, 
        complexityLevel: "DIRECT", 
        dominantColor: "#dc2626", rating: 6.8, criticsScore: 87, audienceScore: 72, director: "Tony Scott", 
        cast: ["Denzel Washington", "Chris Pine", "Rosario Dawson"], boxOffice: "$167 million", budget: "$100 million", 
        dna: { "Thriller": 80, "Action": 20 },
        scenes: [
            { time: 10, intensity: 45, label: "The Mistake", color: "#fca5a5" }, // Inciting Incident
            { time: 45, intensity: 75, label: "Collision Course", color: "#ef4444" }, // Escalation
            { time: 65, intensity: 85, label: "The Marine Attempt", color: "#b91c1c" }, // Failure
            { time: 80, intensity: 96, label: "The Stanton Curve", color: "#7f1d1d" }, // PEAK TENSION
            { time: 92, intensity: 90, label: "Coupling Up", color: "#991b1b" } // Climax
        ],
        synopsis: "A veteran engineer and a young conductor are paired together for the first time on a routine day that turns into a nightmare. They must race against the clock to stop an unmanned, runaway freight train carrying toxic chemicals from wiping out a city. With time running out and physics working against them, they are the only hope to prevent a catastrophe.",
        themes: ["Disaster", "Blue Collar Heroism", "Tension"]
    }),

    // 8. Prey (SURVIVAL)
    // Curve: Hunt -> Ambush -> Massacre -> Flight -> Duel.
    // Peak: 92 (Mud & Tactics - Brains vs Brawn).
    766507: createMovieData({ 
        adrenalineScore: 85, 
        violenceLevel: 88, 
        visceralImpact: 88, 
        complexityLevel: "HIGH", 
        dominantColor: "#064e3b", rating: 7.1, criticsScore: 94, audienceScore: 74, director: "Dan Trachtenberg", 
        cast: ["Amber Midthunder", "Dakota Beavers", "Dane DiLiegro"], boxOffice: "Streaming", budget: "$65 million", 
        dna: { "Sci-Fi": 40, "Action": 30, "Thriller": 30 },
        scenes: [
            { time: 15, intensity: 45, label: "Lion Hunt", color: "#a16207" }, // Setup
            { time: 35, intensity: 60, label: "The Bear Fight", color: "#78350f" }, // Escalation
            { time: 60, intensity: 85, label: "Trappers Massacre", color: "#ef4444" }, // Chaos
            { time: 75, intensity: 88, label: "Tree Escape", color: "#166534" }, // Tension
            { time: 90, intensity: 92, label: "Mud & Tactics", color: "#064e3b" } // PEAK ACTION
        ],
        synopsis: "The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru, a fierce and highly skilled warrior, has been raised in the shadow of legendary hunters. But when she sets out to protect her tribe from a mysterious threat, the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
        themes: ["Underdog", "Skill vs Tech", "Nature"]
    }),

    // 9. Bullet Train (STYLISH FUN)
    // Curve: Boarding -> Skirmish -> Complication -> Crash -> Aftermath.
    // Peak: 90 (The Train Crash - Visual Spectacle).
    718930: createMovieData({ 
        adrenalineScore: 80, 
        violenceLevel: 75, 
        visceralImpact: 82, 
        complexityLevel: "KINETIC", 
        dominantColor: "#ec4899", rating: 7.3, criticsScore: 54, audienceScore: 76, director: "David Leitch", 
        cast: ["Brad Pitt", "Joey King", "Aaron Taylor-Johnson"], boxOffice: "$239 million", budget: "$90 million", 
        dna: { "Action": 40, "Comedy": 40, "Mystery": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "Quiet Car", color: "#3b82f6" }, // Setup
            { time: 40, intensity: 60, label: "The Snake", color: "#22c55e" }, // Comedy/Action
            { time: 55, intensity: 75, label: "Tangerine vs Lemon", color: "#f97316" }, // Conflict
            { time: 90, intensity: 80, label: "The Wolf", color: "#7f1d1d" }, // Reveal
            { time: 110, intensity: 90, label: "Train Crash", color: "#ec4899" } // PEAK SPECTACLE
        ],
        synopsis: "Ladybug is an unlucky assassin determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, has other plans, as his latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train. It is a neon-soaked, kinetic action-comedy that never slows down.",
        themes: ["Fate", "Luck", "Chaos"]
    }),

    // 10. Boss Level (LOOP MAYHEM)
    // Curve: Death -> Practice -> Bonding -> Arcade Fight -> Final Attempt.
    // Peak: 86 (Final Run - Perfect Execution).
    513310: createMovieData({ 
        adrenalineScore: 78, 
        violenceLevel: 80, 
        visceralImpact: 75, 
        complexityLevel: "LOOP", 
        dominantColor: "#3b82f6", rating: 6.8, criticsScore: 74, audienceScore: 76, director: "Joe Carnahan", 
        cast: ["Frank Grillo", "Mel Gibson", "Naomi Watts"], boxOffice: "Streaming", budget: "$45 million", 
        dna: { "Action": 50, "Sci-Fi": 25, "Comedy": 25 },
        scenes: [
            { time: 5, intensity: 75, label: "Wake Up Dead", color: "#3b82f6" }, // High Start
            { time: 25, intensity: 65, label: "Guan Yin Fight", color: "#ec4899" }, // Repetition
            { time: 45, intensity: 55, label: "Learning Curves", color: "#eab308" }, // Bonding
            { time: 70, intensity: 80, label: "The Arcade", color: "#8b5cf6" }, // Action spike
            { time: 90, intensity: 86, label: "Final Run", color: "#ef4444" } // PEAK FLOW
        ],
        synopsis: "Roy Pulver, a retired special forces officer, is trapped in a never-ending time loop on the day of his death. Hunted by a colorful team of assassins, he must die hundreds of times to uncover the truth about a shadowy government project. Blending video game logic with heart, he has to level up his skills to save his ex-wife and break the cycle once and for all.",
        themes: ["Time Loop", "Redemption", "Video Game Logic"]
    })
};
export const STRATEGIC_QUOTES = {
    106: "If it bleeds, we can kill it.",
    14756: "I want to fight ten people!",
    119450: "Apes together strong.",
    1376434: "Valhalla waits for no beast.",
    156022: "Progress, not perfection.",
    207703: "Manners maketh man.",
    44048: "We're not going to make it.",
    766507: "It thinks I am prey.",
    718930: "I am not a closer. I am a snatcher.",
    513310: "I've done this a hundred times."
};

export const CINEMATIC_COLORS = {
    "Action": "#ef4444", "Sci-Fi": "#3b82f6", "Thriller": "#f59e0b", "Animation": "#ec4899", "War": "#57534e", "Martial Arts": "#d4d4d8", "Comedy": "#eab308"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Boring", color: "#dc2626", symbol: "💤", bgColor: "bg-red-900/30", description: "Put me to sleep" },
    { value: 2, label: "Generic", color: "#ea580c", symbol: "🤷", bgColor: "bg-orange-900/30", description: "Seen it before" },
    { value: 3, label: "Solid Action", color: "#16a34a", symbol: "👊", bgColor: "bg-green-900/30", description: 'Good fights, decent plot' },
    { value: 4, label: "God Tier", color: "#eab308", symbol: "🔥", bgColor: "bg-yellow-900/30", description: "Adrenaline Masterpiece" }
];

export const HULU_ACTION_MOVIE_FAQS = {
    'Predator': [
        { 
            question: "Who designed the Predator creature?", 
            answer: "The iconic creature was designed by special effects legend Stan Winston. While on a flight with James Cameron, Winston was sketching ideas for the monster. Cameron remarked, 'I've always wanted to see something with mandibles.' Winston added the now-famous crab-like mouth parts to his design, creating one of cinema's most terrifying aliens." 
        },
        { 
            question: "Why is the handshake meme so famous?", 
            answer: "The 'Dillon! You son of a b*tch' scene is legendary because it is a pure, unironic celebration of 1980s machismo. The close-up of Arnold Schwarzenegger and Carl Weathers' bulging biceps clasping in mid-air became the internet's universal symbol for two different groups agreeing on something, sparking thousands of memes." 
        },
        { 
            question: "Was Jean-Claude Van Damme in this?", 
            answer: "Originally, yes. He was cast to play the Predator when it was designed as a nimble, insect-like creature. However, he hated the suit (which he called a 'lobster'), passed out from the heat, and was fired/quit because he couldn't do his kickboxing moves. He was replaced by the 7'2\" Kevin Peter Hall." 
        },
        { 
            question: "What is 'Old Painless'?", 
            answer: "It is the M134 Minigun wielded by Blain (Jesse Ventura). In reality, this gun is mounted on helicopters and requires an electric power source to spin the barrels. The prop department hid a power cable down Ventura's pant leg and slowed the firing rate down so the spinning barrels would be visible on camera." 
        }
    ],
    'Ip Man': [
        { 
            question: "Is Ip Man a real person?", 
            answer: "Yes, Yip Man was a real Wing Chun grandmaster and the actual teacher of Bruce Lee. However, the film dramatizes his life significantly—there is no record of him fighting a Japanese General or taking on ten black belts at once." 
        },
        { 
            question: "Did Donnie Yen know Wing Chun?", 
            answer: "Donnie Yen is a martial arts expert but had to learn Wing Chun specifically for this film. He spent months training to master the style's unique 'chain punching' and close-quarters blocking techniques." 
        },
        { 
            question: "Is the '1 vs 10' fight realistic?", 
            answer: "While exaggerated for cinema, the 'I want to fight ten!' scene perfectly demonstrates the core philosophy of Wing Chun: using centerline theory and rapid strikes to overwhelm multiple opponents before they can react." 
        },
        { 
            question: "Did he fight a Japanese General?", 
            answer: "The fight with General Miura is fictional, created to symbolize Chinese resistance against the Japanese occupation during WWII. It serves as the emotional climax of the film's nationalist themes." 
        }
    ],
    'Dawn of the Planet of the Apes': [
        { 
            question: "Is this real CGI?", 
            answer: "The visual effects by Weta Digital were groundbreaking because they were shot largely on location in forests, not just in a studio. This allowed Andy Serkis (Caesar) and the other ape actors to interact with the real environment, rain, and mud, giving the CGI texture and realism never seen before." 
        },
        { 
            question: "Why do the apes ride horses?", 
            answer: "The image of an ape riding a horse while dual-wielding machine guns is the film's visual thesis: the apes have evolved past primitive tools and are now adopting human methods of war. It creates a terrifying sense of equality between the two species." 
        },
        { 
            question: "Who is Koba?", 
            answer: "Koba is the scarce-faced bonobo who serves as the antagonist. His hatred for humans stems from years of being tortured in laboratories (shown in the first film). He represents the cycle of trauma, proving that apes are just as capable of hatred and treachery as humans." 
        },
        { 
            question: "Does James Franco appear?", 
            answer: "James Franco's character, Will Rodman, does not appear alive, as he died during the viral outbreak between films. However, he makes an uncredited cameo in a heartbreaking video recording that Caesar watches, symbolizing the lost era of peace between man and ape." 
        }
    ],
    'Predator: Killer of Killers': [
        { 
            question: "Is this canon?", 
            answer: "Yes, as an animated anthology chapter, it explores 'what if' scenarios within the official Predator universe. It expands the lore by showing how Yautja hunters have interacted with humanity's greatest warrior cultures throughout history." 
        },
        { 
            question: "Why Vikings?", 
            answer: "Vikings are chosen because they represent one of history's most physically imposing melee cultures. A Predator fighting a Viking with an axe is the ultimate test of 'honor'—stripping away high-tech plasma weapons for a raw, bloody duel." 
        },
        { 
            question: "Is this connected to Secret Level?", 
            answer: "This entry fits into the recent wave of high-end animation anthologies like 'Secret Level' or 'Love, Death & Robots,' using animation to deliver violence and creature effects that would be too expensive or difficult for live action." 
        },
        { 
            question: "Will there be more?", 
            answer: "The anthology format allows for endless possibilities: Predator vs. Samurai, Predator vs. Knights, or Predator vs. Pirates. It is a way to give fans the historical mash-ups they have wanted for decades without the risk of a blockbuster budget." 
        }
    ],
    'The Equalizer': [
        { 
            question: "Is this based on a show?", 
            answer: "Yes, it is a reimagining of the 1980s TV series starring Edward Woodward. Denzel Washington's version adds a layer of obsessive-compulsive disorder (OCD) to the character, turning his need for order and routine into a tactical advantage during combat." 
        },
        { 
            question: "How long is the final fight?", 
            answer: "The climax is unique because it takes place in a home improvement store (Home Mart). Rather than a standard shootout, McCall uses the environment to hunt the Russian mobsters, weaponizing power drills, barbed wire, and mirrors in a slasher-movie style sequence." 
        },
        { 
            question: "Why does he time everything?", 
            answer: "Robert McCall times his fights with a digital stopwatch to challenge himself and maintain total control. In the famous '19 seconds' scene, he estimates it will take 16 seconds to clear the room. When it takes 19, he is visibly annoyed at his own inefficiency." 
        },
        { 
            question: "What tools does he use?", 
            answer: "McCall famously refuses to use a gun for the majority of the film. Instead, he uses the environment: a shot glass to the eye, a corkscrew through the jaw, and a book to the throat. It highlights his past as a highly trained operative who can turn anything into a lethal weapon." 
        }
    ],
    'Kingsman: The Secret Service': [
        { 
            question: "How was the Church Fight filmed?", 
            answer: "The legendary 'Free Bird' church massacre looks like a single continuous shot, but it is actually a series of cleverly stitched takes. It took a week to film and features Colin Firth performing legitimate stunts, with the camera speed ramped up and down to create the visceral, chaotic rhythm." 
        },
        { 
            question: "Is it a parody of Bond?", 
            answer: "It is a love letter that also deconstructs the genre. It mocks the 'gentleman spy' tropes while indulging in them. The villain, Valentine (Samuel L. Jackson), has a lisp and hates violence, subverting the typical sophisticated Bond villain archetype." 
        },
        { 
            question: "Why did Colin Firth do an action movie?", 
            answer: "Known for romantic dramas like 'Pride & Prejudice' and 'The King's Speech', Firth took the role to shatter his typecasting. He trained for six months with Jackie Chan's stunt team to perform 80% of his own action, shocking audiences with his lethality." 
        },
        { 
            question: "What is the 'Anal' joke controversy?", 
            answer: "The film ends with a crude joke involving a Swedish Princess offering anal sex as a reward for saving the world. It sparked massive debate; director Matthew Vaughn defended it as a satire of old Bond movies where the spy always 'gets the girl' in the final frame." 
        }
    ],
    'Unstoppable': [
        { 
            question: "Is Unstoppable based on a true story?", 
            answer: "Yes, it is loosely based on the 'Crazy Eights' incident of 2001, where a CSX freight train (CSX 8888) traveled 66 miles unmanned through Ohio carrying hazardous materials. The real-life stop was achieved by a second train coupling from behind, just like in the film." 
        },
        { 
            question: "Are the stunts real?", 
            answer: "Director Tony Scott famously hated CGI. The film uses real trains running on real tracks at speed. The stunts, including Chris Pine jumping between train cars, were performed practically with minimal green screen, giving the action a tangible weight." 
        },
        { 
            question: "Why is it so intense?", 
            answer: "The film is often cited as a masterclass in tension because the 'villain' is just physics. A train weighing thousands of tons cannot be reasoned with or shot at. The accelerating pacing and constant momentum create a 98-minute adrenaline rush." 
        },
        { 
            question: "Was this Tony Scott's last film?", 
            answer: "Yes, 'Unstoppable' was the final film directed by legendary action auteur Tony Scott ('Top Gun', 'Man on Fire') before his death in 2012. It serves as a fitting legacy—a lean, mean, perfectly constructed blue-collar thriller." 
        }
    ],
    'Prey': [
        { 
            question: "Is this connected to the original Predator?", 
            answer: "Yes. At the end of the film, Naru receives a flintlock pistol engraved with 'Raphael Adolini 1715'. This is the exact same pistol that the Elder Predator gives to Danny Glover's character at the end of Predator 2 (1990), confirming that the Predator species held onto Naru's trophy for 300 years." 
        },
        { 
            question: "Did the dog survive?", 
            answer: "Yes! Sarii the dog (played by a Carolina Dog named Coco) survived the entire film. Coco was actually not a trained movie dog; she was adopted specifically for the film and was reportedly very high-energy and chaotic on set, which unintentionally added to her character's charm." 
        },
        { 
            question: "What language is available?", 
            answer: "Prey made history as the first feature film to be available with a full Comanche language dub upon release. The original cast returned to re-record their lines, providing an authentic viewing experience that honors the indigenous representation." 
        },
        { 
            question: "Why does the Predator look different?", 
            answer: "Director Dan Trachtenberg wanted a 'Feral' Predator—one from a different hemisphere of the homeworld. This version is stripped down: it has no plasma caster, wears a bone skull mask instead of metal bio-armor, and relies on primitive, visceral weapons to match the 1719 setting." 
        }
    ],
    'Bullet Train': [
        { 
            question: "Did Brad Pitt do his own stunts?", 
            answer: "According to the stunt coordinator, Brad Pitt performed 95% of his own physical stunts. At age 58, he embraced a 'Jackie Chan' style of fighting—using props, defensive maneuvers, and physical comedy rather than just brute strength." 
        },
        { 
            question: "Who is the cameo at the end?", 
            answer: "Ryan Reynolds makes a split-second cameo as 'Carver,' the assassin Brad Pitt is filling in for. This was a favor to pay back Brad Pitt, who made a blink-and-you-miss-it cameo as The Vanisher in Reynolds' 'Deadpool 2'." 
        },
        { 
            question: "Why 'Thomas the Tank Engine'?", 
            answer: "The character Lemon uses 'Thomas the Tank Engine' as a moral compass to judge people, labeling them as 'Diesels' (bad) or 'Percys' (good). It serves as a hilarious recurring metaphor for fate and personality types in a world of amoral killers." 
        },
        { 
            question: "Is the 'White Death' real?", 
            answer: "The White Death (Michael Shannon) is a fictional Russian mobster who took over the Japanese Yakuza. His backstory is a dark mirror to the main plot, representing the inevitable consequences of a life of violence coming back to haunt you." 
        }
    ],
    'Boss Level': [
        { 
            question: "How many times did he die?", 
            answer: "It is implied Roy Pulver (Frank Grillo) has died over 140 times before the movie even begins. The film creates humor by showing his boredom with death—he drinks coffee while dodging machetes because he has memorized the pattern perfectly." 
        },
        { 
            question: "Is it based on a game?", 
            answer: "It isn't based on a specific title, but it is a love letter to 'retro gaming' mechanics. It uses concepts like 'extra lives,' 'pattern recognition,' and the 'final boss' fight to structure its narrative logic." 
        },
        { 
            question: "Does he save his son?", 
            answer: "The movie ends on an ambiguous but hopeful note. Roy enters the time loop one last time, confident he has finally figured out the perfect run to save his son and ex-wife, treating reality like a game he has finally mastered." 
        },
        { 
            question: "Why cast Mel Gibson?", 
            answer: "Mel Gibson plays the villain, Colonel Ventor. His casting adds meta-weight to the film, pitting an 'old school' 80s/90s action legend against a modern, video-game-style action hero." 
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
    return HULU_ACTION_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - High octane action movie on Hulu.`,
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