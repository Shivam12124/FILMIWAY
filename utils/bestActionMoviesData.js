// utils/bestActionMoviesData.js - BEST ACTION MOVIES COLLECTION DATA ✅
// Movies defining high-octane stunts, ground-breaking choreography, and sheer adrenaline.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 562, "imdbID": "tt0095016", "Title": "Die Hard", "year": 1988, "genre": "Action", "runtime": 132, "rank": 1 },
    { "tmdbId": 280, "imdbID": "tt0103064", "Title": "Terminator 2: Judgment Day", "year": 1991, "genre": "Action", "runtime": 137, "rank": 2 },
    { "tmdbId": 76341, "imdbID": "tt1392190", "Title": "Mad Max: Fury Road", "year": 2015, "genre": "Action", "runtime": 120, "rank": 3 },
    { "tmdbId": 679, "imdbID": "tt0090605", "Title": "Aliens", "year": 1986, "genre": "Action", "runtime": 137, "rank": 4 },
    { "tmdbId": 245891, "imdbID": "tt2911666", "Title": "John Wick", "year": 2014, "genre": "Action", "runtime": 101, "rank": 5 },
    { "tmdbId": 180299, "imdbID": "tt2265171", "Title": "The Raid 2", "year": 2014, "genre": "Action", "runtime": 150, "rank": 6 },
    { "tmdbId": 353081, "imdbID": "tt4912910", "Title": "Mission: Impossible - Fallout", "year": 2018, "genre": "Action", "runtime": 147, "rank": 7 },
    { "tmdbId": 11782, "imdbID": "tt0104684", "Title": "Hard Boiled", "year": 1992, "genre": "Action", "runtime": 128, "rank": 8 },
    { "tmdbId": 146, "imdbID": "tt0190332", "Title": "Crouching Tiger, Hidden Dragon", "year": 2000, "genre": "Action", "runtime": 120, "rank": 9 },
    { "tmdbId": 4141, "imdbID": "tt0465602", "Title": "Shoot 'Em Up", "year": 2007, "genre": "Action", "runtime": 86, "rank": 10 }
];

// ✅ REVISED STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    562: "Welcome to the party, pal.", // Die Hard
    280: "Hasta la vista, baby.", // Terminator 2
    76341: "Oh, what a day... what a lovely day!", // Mad Max: Fury Road
    679: "Get away from her, you bitch!", // Aliens
    245891: "Yeah, I'm thinking I'm back.", // John Wick
    180299: "No. I'm done.", // The Raid 2
    353081: "There cannot be peace without first a great suffering.", // MI: Fallout
    11782: "Give a guy a gun, he thinks he's Superman.", // Hard Boiled
    146: "A sword by itself rules nothing. It only comes alive in skillful hands.", // Crouching Tiger
    4141: "Eat your vegetables." // Shoot 'Em Up
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data - specifically filtered for the Parents Guide schema logic)
export const SENSITIVE_TIMELINES = {
    // 1. Die Hard
    562: { 
        scenes: [
            { start: "0:23:32", end: "0:23:39", type: "Nudity (Woman)", severity: "High" },
            { start: "0:42:19", end: "0:42:24", type: "Nudity (Women / Images)", severity: "Moderate" }
        ]
    },

 // 2. Terminator 2: Judgment Day
    280: {
        scenes: [
            { start: "0:06:10", end: "0:06:20", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "0:11:40", end: "0:11:52", type: "Partial Nudity (Man)", severity: "Mild" }
        ]
    },

    // 3. Mad Max: Fury Road
    76341: {
        scenes: [
            { start: "0:12:42", end: "0:13:06", type: "Nudity (Women)", severity: "High" },
            { start: "1:18:10", end: "1:18:48", type: "Nudity (Woman)", severity: "High" }
        ]
    },

    // 4. Aliens
    679: { scenes: [] },

    // 5. John Wick
    245891: { 
        scenes: [
            { start: "0:45:00", end: "0:45:30", type: "Suggestive Clothing (Bikini)", severity: "Mild" }
        ]
    },

    // 6. The Raid 2
    244272: {
        scenes: [
            { start: "0:46:00", end: "0:46:21", type: "Nudity (Woman)", severity: "High" },
            { start: "0:46:22", end: "0:46:37", type: "Sexual Content (Moaning)", severity: "Moderate" }
        ]
    },

    // 7. Mission: Impossible - Fallout
    353081: { scenes: [] },

    // 8. Hard Boiled
    11782: { scenes: [] },

    // 9. Crouching Tiger, Hidden Dragon
    146: { scenes: [] },

    // 10. Shoot 'Em Up
    4141: {
        scenes: [
            { start: "0:05:55", end: "0:06:15", type: "Nudity (Woman)", severity: "High" },
            { start: "0:06:47", end: "0:06:50", type: "Nudity (Woman)", severity: "High" },
            { start: "0:15:38", end: "0:16:05", type: "Suggestive Clothing, Sex & Nudity", severity: "High" },
            { start: "0:16:15", end: "0:16:37", type: "Sexual Content & Nudity (Woman)", severity: "High" },
            { start: "0:18:30", end: "0:19:13", type: "Sexual Content & Nudity (Woman)", severity: "High" },
            { start: "0:46:00", end: "0:47:20", type: "Sexual Content, Sex & Nudity", severity: "High" }
        ]
    }
};

// ✅ MAPPING NOTE FOR ACTION:
// adrenalineRush = Action Pacing
// stuntComplexity = Choreography & Practical Effects
// visceralImpact = Brutality & Weight of Hits

const createMovieData = (data) => ({
    adrenalineRush: 85, 
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Die Hard
    562: createMovieData({ 
        adrenalineRush: 95, stuntComplexity: 88, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#0f172a", rating: 8.2, criticsScore: 94, audienceScore: 94, director: "John McTiernan", 
        cast: ["Bruce Willis", "Alan Rickman"], boxOffice: "$141.6 million", budget: "$28 million", 
        dna: { Action: 60, Thriller: 40 },
        scenes: [
            { time: 25, intensity: 75, label: "The Takeover", color: "#1e3a8a" },
            { time: 65, intensity: 90, label: "Roof Explosions", color: "#dc2626" },
            { time: 105, intensity: 95, label: "Glass Scene", color: "#991b1b" },
            { time: 125, intensity: 100, label: "Yippee-ki-yay", color: "#eab308" }
        ],
        synopsis: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
        themes: ["Everyman Hero", "Isolation", "Resourcefulness"]
    }),
    // 2. Terminator 2: Judgment Day
    280: createMovieData({ 
        adrenalineRush: 98, stuntComplexity: 95, visceralImpact: 90, complexityLevel: "HIGH", 
        dominantColor: "#1d4ed8", rating: 8.6, criticsScore: 93, audienceScore: 95, director: "James Cameron", 
        cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"], boxOffice: "$520 million", budget: "$102 million", 
        dna: { Action: 50, "Sci-Fi": 40, Thriller: 10 },
        scenes: [
            { time: 32, intensity: 85, label: "Hallway Chase", color: "#1d4ed8" },
            { time: 65, intensity: 95, label: "Cyberdyne Break-in", color: "#0f172a" },
            { time: 110, intensity: 100, label: "Helicopter Chase", color: "#dc2626" },
            { time: 130, intensity: 90, label: "Thumbs Up", color: "#f97316" }
        ],
        synopsis: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
        themes: ["Fate vs Free Will", "Man vs Machine", "Motherhood"]
    }),
    // 3. Mad Max: Fury Road
    76341: createMovieData({ 
        adrenalineRush: 100, stuntComplexity: 100, visceralImpact: 92, complexityLevel: "EXTREME", 
        dominantColor: "#ea580c", rating: 8.1, criticsScore: 97, audienceScore: 86, director: "George Miller", 
        cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"], boxOffice: "$380 million", budget: "$150 million", 
        dna: { Action: 70, Adventure: 20, "Sci-Fi": 10 },
        scenes: [
            { time: 15, intensity: 95, label: "Enter the Sandstorm", color: "#f59e0b" },
            { time: 45, intensity: 90, label: "Canyon Ambush", color: "#b45309" },
            { time: 85, intensity: 85, label: "The Bog", color: "#1e3a8a" },
            { time: 105, intensity: 100, label: "Return to the Citadel", color: "#dc2626" }
        ],
        synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        themes: ["Survival", "Feminism", "Environmental Collapse"]
    }),
    // 4. Aliens
    679: createMovieData({ 
        adrenalineRush: 92, stuntComplexity: 85, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#111827", rating: 8.4, criticsScore: 98, audienceScore: 94, director: "James Cameron", 
        cast: ["Sigourney Weaver", "Michael Biehn"], boxOffice: "$131 million", budget: "$18.5 million", 
        dna: { Action: 50, "Sci-Fi": 30, Horror: 20 },
        scenes: [
            { time: 55, intensity: 85, label: "First Contact", color: "#065f46" },
            { time: 90, intensity: 95, label: "Auto-Turrets", color: "#b91c1c" },
            { time: 115, intensity: 90, label: "The Escape", color: "#1e3a8a" },
            { time: 130, intensity: 100, label: "Queen Fight", color: "#f59e0b" }
        ],
        synopsis: "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon where the Nostromo encountered the alien has been colonized, but contact is lost. This time, it's war.",
        themes: ["Motherhood", "Corporate Greed", "Trauma"]
    }),
    // 5. John Wick
    245891: createMovieData({ 
        adrenalineRush: 96, stuntComplexity: 98, visceralImpact: 94, complexityLevel: "MEDIUM", 
        dominantColor: "#4c1d95", rating: 7.4, criticsScore: 86, audienceScore: 81, director: "Chad Stahelski", 
        cast: ["Keanu Reeves", "Michael Nyqvist"], boxOffice: "$86 million", budget: "$20 million", 
        dna: { Action: 70, Thriller: 30 },
        scenes: [
            { time: 28, intensity: 85, label: "Home Invasion Defense", color: "#1e3a8a" },
            { time: 52, intensity: 100, label: "Red Circle Club", color: "#db2777" },
            { time: 75, intensity: 80, label: "Church Shootout", color: "#b91c1c" },
            { time: 92, intensity: 90, label: "Dock Fight", color: "#0f172a" }
        ],
        synopsis: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        themes: ["Vengeance", "Grief", "Underworld Mythology"]
    }),
    // 6. The Raid 2
    180299: createMovieData({ 
        adrenalineRush: 98, stuntComplexity: 100, visceralImpact: 100, complexityLevel: "EXTREME", 
        dominantColor: "#7f1d1d", rating: 7.9, criticsScore: 82, audienceScore: 87, director: "Gareth Evans", 
        cast: ["Iko Uwais", "Yayan Ruhian"], boxOffice: "$6.6 million", budget: "$4.5 million", 
        dna: { Action: 70, Crime: 30 },
        scenes: [
            { time: 35, intensity: 90, label: "Prison Mud Riot", color: "#78350f" },
            { time: 85, intensity: 95, label: "Car Chase", color: "#1e3a8a" },
            { time: 125, intensity: 98, label: "Hammer & Bat Fight", color: "#b91c1c" },
            { time: 135, intensity: 100, label: "Kitchen Fight", color: "#ffffff" }
        ],
        synopsis: "Only a short time after the first raid, Rama goes undercover with the thugs of Jakarta and plans to bring down the syndicate and uncover the corruption within his police force.",
        themes: ["Corruption", "Loyalty", "Endurance"]
    }),
    // 7. Mission: Impossible - Fallout
    353081: createMovieData({ 
        adrenalineRush: 95, stuntComplexity: 100, visceralImpact: 88, complexityLevel: "HIGH", 
        dominantColor: "#e5e5e5", rating: 7.7, criticsScore: 97, audienceScore: 88, director: "Christopher McQuarrie", 
        cast: ["Tom Cruise", "Henry Cavill", "Rebecca Ferguson"], boxOffice: "$791.1 million", budget: "$178 million", 
        dna: { Action: 60, Thriller: 30, Adventure: 10 },
        scenes: [
            { time: 25, intensity: 85, label: "HALO Jump", color: "#1e40af" },
            { time: 45, intensity: 95, label: "Bathroom Fight", color: "#ffffff" },
            { time: 80, intensity: 90, label: "Paris Motorcycle Chase", color: "#f59e0b" },
            { time: 130, intensity: 100, label: "Helicopter Pursuit", color: "#111827" }
        ],
        synopsis: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission goes wrong.",
        themes: ["Sacrifice", "Consequence", "Duty"]
    }),
    // 8. Hard Boiled
    11782: createMovieData({ 
        adrenalineRush: 96, stuntComplexity: 94, visceralImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#be123c", rating: 7.7, criticsScore: 94, audienceScore: 92, director: "John Woo", 
        cast: ["Chow Yun-Fat", "Tony Leung"], boxOffice: "$2.3 million", budget: "$4.5 million", 
        dna: { Action: 80, Crime: 20 },
        scenes: [
            { time: 5, intensity: 90, label: "Teahouse Shootout", color: "#b45309" },
            { time: 60, intensity: 95, label: "Warehouse Raid", color: "#0f172a" },
            { time: 95, intensity: 100, label: "Hospital One-Shot", color: "#e5e5e5" },
            { time: 120, intensity: 90, label: "Morgue Climax", color: "#991b1b" }
        ],
        synopsis: "A tough-as-nails cop teams up with an undercover agent to shut down a sinister mobster and his crew.",
        themes: ["Brotherhood", "Honor", "Gun-Fu"]
    }),
    // 9. Crouching Tiger, Hidden Dragon
    146: createMovieData({ 
        adrenalineRush: 82, stuntComplexity: 98, visceralImpact: 75, complexityLevel: "HIGH", 
        dominantColor: "#065f46", rating: 7.9, criticsScore: 98, audienceScore: 86, director: "Ang Lee", 
        cast: ["Chow Yun-Fat", "Michelle Yeoh", "Zhang Ziyi"], boxOffice: "$213.5 million", budget: "$17 million", 
        dna: { Action: 40, Drama: 40, Romance: 20 },
        scenes: [
            { time: 20, intensity: 85, label: "Rooftop Chase", color: "#1e3a8a" },
            { time: 55, intensity: 90, label: "Tavern Fight", color: "#b45309" },
            { time: 90, intensity: 100, label: "Bamboo Forest Duel", color: "#065f46" },
            { time: 110, intensity: 95, label: "Courtyard Weapons", color: "#ffffff" }
        ],
        synopsis: "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.",
        themes: ["Duty vs Desire", "Feminism", "Mastery"]
    }),
    // 10. Shoot 'Em Up
    4141: createMovieData({ 
        adrenalineRush: 99, stuntComplexity: 85, visceralImpact: 88, complexityLevel: "MEDIUM", 
        dominantColor: "#ef4444", rating: 6.6, criticsScore: 71, audienceScore: 65, director: "Michael Davis", 
        cast: ["Clive Owen", "Paul Giamatti", "Monica Bellucci"], boxOffice: "$26.8 million", budget: "$39 million", 
        dna: { Action: 80, Comedy: 20 },
        scenes: [
            { time: 5, intensity: 90, label: "Delivery Shootout", color: "#b91c1c" },
            { time: 42, intensity: 95, label: "Gunfight Intercourse", color: "#db2777" },
            { time: 65, intensity: 100, label: "Skydiving Shootout", color: "#3b82f6" },
            { time: 80, intensity: 85, label: "Fingerless Climax", color: "#0f172a" }
        ],
        synopsis: "A man named Mr. Smith delivers a woman's baby during a shootout, and is then called upon to protect the newborn from the army of gunmen.",
        themes: ["Absurdity", "Protection", "Cartoon Violence"]
    })
};

export const BEST_ACTION_MOVIES_FAQS = {
    'Die Hard': [
        { question: "Why is Die Hard considered the perfect action movie?", answer: "Die Hard revolutionized the genre by shifting focus from invincible muscle-bound heroes to an 'everyman' protagonist. John McClane gets hurt, runs out of ammo, and acts out of desperate necessity, creating grounded, relatable stakes." },
        { question: "Did Bruce Willis actually do his own stunts in Die Hard?", answer: "Willis performed many of his own stunts, including the iconic leap off the Nakatomi roof. However, the production had incredible stunt doubles for the most dangerous falls and glass-breaking sequences." }
    ],
    'Terminator 2: Judgment Day': [
        { question: "How did Terminator 2 change CGI in action movies?", answer: "T2's T-1000 was the first major use of a fully CGI main character in a live-action film. It proved that computer-generated effects could seamlessly blend with practical explosions and vehicle stunts." },
        { question: "Why did Arnold Schwarzenegger's Terminator not kill anyone in T2?", answer: "John Connor expressly forbids the T-800 from killing humans. This creates unique action set pieces where a literal killing machine has to creatively incapacitate police forces by destroying their vehicles and kneecapping them instead." }
    ],
    'Mad Max: Fury Road': [
        { question: "How much of Mad Max: Fury Road was CGI?", answer: "While CGI was used heavily for the environment, sky replacements, and erasing safety rigs, the massive vehicular carnage, the polecats, and the actual driving were over 80% practical stunts filmed in the Namibian desert." },
        { question: "What makes Fury Road's action editing unique?", answer: "Director George Miller centered almost every shot precisely in the middle of the frame. This allowed the editor to cut at breakneck speeds without the audience losing track of the action, keeping the adrenaline maxed out." }
    ],
    'Aliens': [
        { question: "How does Aliens differ from the original Alien?", answer: "While Ridley Scott's Alien was a slow-burn haunted house movie in space (Horror), James Cameron shifted Aliens into a high-octane military combat film (Action). It traded tension for overwhelming firepower and sheer numbers." },
        { question: "Did they actually build the Queen Alien?", answer: "Yes. The Alien Queen was a massive 14-foot physical puppet requiring up to 16 puppeteers to operate simultaneously, providing a terrifying, tangible presence for the climatic fight with Ripley's power loader." }
    ],
    'John Wick': [
        { question: "What is 'Gun-Fu' in John Wick?", answer: "Gun-Fu is a stylistic blend of close-quarters martial arts (Judo, Jiu-Jitsu) seamlessly integrated with tactical firearms training. It involves treating a gun like a melee weapon to control space." },
        { question: "Why does John Wick hold his gun sideways sometimes?", answer: "It's a modified version of the Center Axis Relapse (CAR) system. It's designed for extreme close-quarters combat, allowing for faster target acquisition and weapon retention when grappling with multiple enemies." }
    ],
    'The Raid 2': [
        { question: "How was the car chase in The Raid 2 filmed?", answer: "The crew built custom rigs, including camera operators passing a camera through a moving car's windows to operatives disguised as car seats. It stands as one of the most dangerous, purely practical car chases ever filmed." },
        { question: "What martial art is featured in The Raid 2?", answer: "Pencak Silat, an indigenous martial art of Indonesia. The choreography is praised for its sheer brutality, speed, and use of the environment, maximizing visceral impact over clean aesthetics." }
    ],
    'Mission: Impossible - Fallout': [
        { question: "Did Tom Cruise really do the HALO jump in Fallout?", answer: "Yes. Tom Cruise jumped out of a C-17 plane at 25,000 feet 106 times to get the three perfect takes needed. He had to breathe pure oxygen for 20 minutes before each jump to avoid decompression sickness." },
        { question: "What happened to Tom Cruise during the building jump scene?", answer: "Cruise broke his ankle upon impact with the side of the building. In an incredible display of dedication, he pulled himself up and finished running past the camera so the take could be used in the final film." }
    ],
    'Hard Boiled': [
        { question: "What is the signature style of Hard Boiled?", answer: "Director John Woo's signature 'Heroic Bloodshed' style. It features dual-wielding handguns, infinite ammo tropes, slow-motion diving, and massive squib explosions, establishing the visual language for modern action." },
        { question: "How was the 3-minute hospital hospital scene filmed?", answer: "It is a single, continuous take. Because they didn't have the budget to build multiple floors, the crew had to frantically redress the set with new debris and bodies while the actors were in the elevator during the shot." }
    ],
    'Crouching Tiger, Hidden Dragon': [
        { question: "Why do the characters fly in Crouching Tiger?", answer: "The film belongs to the 'Wuxia' genre of Chinese fiction. The gravity-defying movement, known as 'qinggong', is a staple of Wuxia mythology where martial arts masters channel their qi to move weightlessly." },
        { question: "Who choreographed the fights in Crouching Tiger?", answer: "Legendary choreographer Yuen Woo-ping. He specifically designed the action to reflect the emotional states of the characters, ensuring that every clash of swords advanced the plot and character development." }
    ],
    'Shoot \'Em Up': [
        { question: "Is Shoot 'Em Up meant to be a comedy?", answer: "Yes, it's a hyper-kinetic, self-aware parody of action movies. It takes tropes—like shooting while skydiving or delivering a baby during a gunfight—and dials them up to an absurd, cartoonish level (literally referencing Bugs Bunny)." },
        { question: "Why does Smith constantly eat carrots?", answer: "Aside from being a nod to Bugs Bunny, the director wanted a unique visual hook. Smith even uses carrots as lethal weapons throughout the film, doubling down on the movie's dedication to ridiculous, over-the-top violence." }
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

// 🔥 HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
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
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : '',
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = BEST_ACTION_MOVIES_FAQS[movie.Title] ? [...BEST_ACTION_MOVIES_FAQS[movie.Title]] : [];
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
            'name': `What are the most intense action scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Action Intensity metric, ${movie.Title} peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
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
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime. (Note: Film may still contain heavy action violence).` 
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
    const staticFaqs = BEST_ACTION_MOVIES_FAQS[movieTitle] ? [...BEST_ACTION_MOVIES_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense action scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Action Intensity metric, ${movieTitle} peaks at the following moments:

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
                answer: `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movieTitle} does not have any sex, nudity, or sexual content in the full ${finalRuntime} runtime. (Note: Film may still contain heavy action violence).`
            }
        );
    }

    return staticFaqs;
};