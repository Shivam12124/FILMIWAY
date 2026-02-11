// utils/timeTravelMovieData.js - TIME TRAVEL COLLECTION WITH SENSITIVE SCENES ✅

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 105, imdbID: 'tt0088763', Title: 'Back to the Future', year: 1985, genre: 'Adventure, Sci-Fi', runtime: 116, rank: 1 },
    { tmdbId: 280, imdbID: 'tt0103064', Title: 'Terminator 2: Judgment Day', year: 1991, genre: 'Action, Sci-Fi', runtime: 137, rank: 2 },
    { tmdbId: 218, imdbID: 'tt0088247', Title: 'The Terminator', year: 1984, genre: 'Action, Sci-Fi', runtime: 107, rank: 3 },
    { tmdbId: 157336, imdbID: 'tt0816692', Title: 'Interstellar', year: 2014, genre: 'Sci-Fi, Drama', runtime: 169, rank: 4 },
    { tmdbId: 206487, imdbID: 'tt2397535', Title: 'Predestination', year: 2014, genre: 'Sci-Fi, Thriller', runtime: 97, rank: 5 },
    { tmdbId: 14337, imdbID: 'tt0390384', Title: 'Primer', year: 2004, genre: 'Sci-Fi, Drama', runtime: 77, rank: 6 },
    { tmdbId: 63, imdbID: 'tt0114746', Title: '12 Monkeys', year: 1995, genre: 'Sci-Fi, Mystery', runtime: 129, rank: 7 },
    { tmdbId: 141, imdbID: 'tt0246578', Title: 'Donnie Darko', year: 2001, genre: 'Sci-Fi, Mystery', runtime: 113, rank: 8 },
    { tmdbId: 137, imdbID: 'tt0107048', Title: 'Groundhog Day', year: 1993, genre: 'Comedy, Fantasy', runtime: 101, rank: 9 },
    { tmdbId: 14139, imdbID: 'tt0480669', Title: 'Timecrimes', year: 2007, genre: 'Thriller, Sci-Fi', runtime: 92, rank: 10 }
];

// Helper to ensure default values
const createMovieData = (data) => ({
    timeTravelIntensity: 90,
    sciFiConcept: 85,
    emotionalImpact: 80,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const SENSITIVE_TIMELINES = {
    105: { scenes: [ // Back to the Future
        { start: '1:19:30', end: '1:19:40', type: 'Kissing', severity: 'Mild' },
        { start: '1:21:49', end: '1:22:13', type: 'Sexual Content', severity: 'Moderate' }
    ]},
    280: { scenes: [ // T2
        { start: '6:10', end: '6:20', type: 'Partial Nudity (', severity: 'Mild' }
    ]},
    218: { scenes: [ // The Terminator
        { start: '5:00', end: '7:30', type: 'Nudity ', severity: 'Mild' },
        { start: '1:21:50', end: '1:23:00', type: 'Sex', severity: 'High' }
    ]},
    157336: { scenes: [] }, // Interstellar
    206487: { scenes: [ // Predestination
        { start: '19:07', end: '19:20', type: 'Sex & Nudity', severity: 'High' },
        { start: '42:20', end: '42:50', type: 'Nudity', severity: 'Mild' }
    ]},
    14337: { scenes: [] }, // Primer
    63: { scenes: [ // 12 Monkeys
        { start: '16:00', end: '16:10', type: 'Partial Nudity', severity: 'Mild' }
    ]},
    141: { scenes: [ // Donnie Darko
        { start: '1:18:18', end: '1:18:35', type: 'Kissing', severity: 'Mild' }
    ]},
    137: { scenes: [ // Groundhog Day
        { start: '55:00', end: '56:00', type: 'Kissing', severity: 'Mild' },
        { start: '1:25:00', end: '1:26:16', type: 'Kissing', severity: 'Mild' }
    ]},
    14139: { scenes: [ // Timecrimes
        { start: '7:07', end: '7:14', type: 'Partial nudity ', severity: 'Moderate' },
        { start: '10:20', end: '11:34', type: 'Nudity ', severity: 'High' }
    ]}
};

export const FALLBACK_POSTERS = {
    105: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAQL9QB50Gk.jpg",
    280: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    218: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    157336: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8zYEfe4NCZvq6DuNZ.jpg",
    206487: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    14337: "https://image.tmdb.org/t/p/w500/p4O9nE7x0p7M1n01fVj4j5.jpg",
    63: "https://image.tmdb.org/t/p/w500/6Sj9wDu3YsxjbVZHU14q6Ed7a.jpg",
    141: "https://image.tmdb.org/t/p/w500/j9q3f7.jpg",
    137: "https://image.tmdb.org/t/p/w500/v3QyEo6hH4oF9.jpg",
    14139: "https://image.tmdb.org/t/p/w500/4.jpg"
};



export const COMPLETE_MOVIE_DATA = {
    // 1. Back to the Future
    105: createMovieData({ 
        // 🗑️ REMOVED: timeTravelIntensity, sciFiConcept, emotionalImpact
        // ✅ ADDED: Pure Complexity Metrics
        complexityLevel: "MEDIUM", 
        complexityScore: 45, // Linear branching, easy to follow

        dominantColor: "#f59e0b", rating: 8.5, criticsScore: 97, audienceScore: 94, 
        director: "Robert Zemeckis", cast: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"], 
        boxOffice: "$388.8 million", budget: "$19 million", 
        dna: { Adventure: 50, Comedy: 30, SciFi: 20 }, 
        scenes: [
            { time: 18, intensity: 40, label: 'Time Machine Reveal', color: '#3b82f6' },
            { time: 33, intensity: 65, label: '1955 Arrival', color: '#60a5fa' },
            { time: 68, intensity: 75, label: 'Enchantment Dance', color: '#93c5fd' },
            { time: 95, intensity: 88, label: 'Clock Tower', color: '#bfdbfe' },
            { time: 110, intensity: 92, label: 'Return to 1985', color: '#dbeafe' }
        ], 
        synopsis: "Marty McFly is just a typical teenager trying to play guitar and survive high school, until he is accidentally blasted 30 years into the past in a plutonium-powered DeLorean. Trapped in 1955, he inadvertently prevents his parents from meeting, setting off a chain reaction that begins to erase him from existence. Now, with the help of a younger, eccentric Doc Brown, Marty must play matchmaker to his own parents to save his future.", 
        themes: ["Destiny", "Family", "Consequences", "Adventure"], 
        awards: ["Oscar for Sound Effects", "National Film Registry"] 
    }),

    // 2. Terminator 2: Judgment Day
    280: createMovieData({ 
        complexityLevel: "MEDIUM", 
        complexityScore: 55, // Simple causal loop, action focused

        dominantColor: "#1e3a8a", rating: 8.6, criticsScore: 93, audienceScore: 95, 
        director: "James Cameron", cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"], 
        boxOffice: "$520.9 million", budget: "$102 million", 
        dna: { Action: 50, SciFi: 35, Thriller: 15 }, 
        scenes: [
            { time: 15, intensity: 50, label: 'T-1000 Arrival', color: '#dc2626' },
            { time: 42, intensity: 72, label: 'Hospital Escape', color: '#ef4444' },
            { time: 78, intensity: 85, label: 'Cyberdyne Systems', color: '#f87171' },
            { time: 110, intensity: 92, label: 'Steel Mill', color: '#fca5a5' },
            { time: 130, intensity: 96, label: 'Final Sacrifice', color: '#fecaca' }
        ], 
        synopsis: "Ten years have passed since the first machine failed to kill Sarah Connor. Now, the future supercomputer Skynet sends a new, terrifyingly advanced liquid-metal Terminator back in time to eliminate her son, John, the future leader of the human resistance. But the resistance has sent back a protector of their own—a reprogrammed version of the very machine that once tried to kill Sarah. It is a race against an unkillable enemy to change the future.", 
        themes: ["Fate", "Humanity", "Technology", "Parenthood"], 
        awards: ["4 Oscars", "Visual Effects Landmark"] 
    }),

    // 3. The Terminator (1984)
    218: createMovieData({ 
        complexityLevel: "MEDIUM", 
        complexityScore: 50, // Standard Grandfather Paradox

        dominantColor: "#ef4444", rating: 8.1, criticsScore: 100, audienceScore: 89, 
        director: "James Cameron", cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"], 
        boxOffice: "$78.4 million", budget: "$6.4 million", 
        dna: { Action: 45, SciFi: 40, Thriller: 15 }, 
        scenes: [
            { time: 8, intensity: 45, label: 'Arrival', color: '#7c2d12' },
            { time: 28, intensity: 68, label: 'Tech Noir Shootout', color: '#9a3412' },
            { time: 58, intensity: 78, label: 'Police Station', color: '#c2410c' },
            { time: 82, intensity: 88, label: 'Future War', color: '#ea580c' },
            { time: 101, intensity: 94, label: 'Factory Showdown', color: '#f97316' }
        ], 
        synopsis: "In the ashes of a nuclear future, machines rule the world. To crush the final human resistance, they send an unstoppable cyborg assassin back to 1984 to kill Sarah Connor, the unsuspecting waitress destined to birth humanity's savior. Her only hope lies with Kyle Reese, a lone soldier sent from the future to protect her. A relentless, gritty sci-fi horror where love is born in the shadow of the apocalypse.", 
        themes: ["Fate", "Survival", "Technology", "Paradox"], 
        awards: ["National Film Registry", "Saturn Award"] 
    }),

    // 4. Interstellar
    157336: createMovieData({ 
        complexityLevel: "HIGH", 
        complexityScore: 85, // Physics are extreme, narrative is straightforward

        dominantColor: "#0c4a6e", rating: 8.7, criticsScore: 73, audienceScore: 86, 
        director: "Christopher Nolan", cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], 
        boxOffice: "$677.5 million", budget: "$165 million", 
        dna: { SciFi: 50, Drama: 30, Adventure: 20 }, 
        scenes: [
            { time: 45, intensity: 50, label: 'Launch', color: '#0891b2' },
            { time: 82, intensity: 68, label: 'Miller Planet', color: '#06b6d4' },
            { time: 118, intensity: 82, label: 'Mann Planet', color: '#22d3ee' },
            { time: 145, intensity: 90, label: 'Tesseract', color: '#67e8f9' },
            { time: 162, intensity: 95, label: 'Reunion', color: '#a5f3fc' }
        ], 
        synopsis: "With Earth plagued by blight and humanity facing extinction, ex-pilot Cooper is recruited for a desperate mission: to travel through a wormhole in search of a new habitable planet. But the mission comes with a devastating cost—relativity means that for every hour he spends in space, years pass for his children back on Earth. It is a visually spectacular, emotional epic about a father's love stretching across dimensions.", 
        themes: ["Love", "Relativity", "Survival", "Exploration"], 
        awards: ["Oscar for Visual Effects", "Saturn Award"] 
    }),

    // 5. Predestination
    206487: createMovieData({ 
        complexityLevel: "EXTREME", 
        complexityScore: 98, // The perfect, confusing closed loop

        dominantColor: "#78350f", rating: 7.4, criticsScore: 84, audienceScore: 75, 
        director: "The Spierig Brothers", cast: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"], 
        boxOffice: "$5.6 million", budget: "$5 million", 
        dna: { SciFi: 50, Mystery: 35, Drama: 15 }, 
        scenes: [
            { time: 12, intensity: 35, label: 'Bar Meeting', color: '#854d0e' },
            { time: 38, intensity: 62, label: 'Backstory Revealed', color: '#a16207' },
            { time: 68, intensity: 78, label: 'Time Jump', color: '#ca8a04' },
            { time: 82, intensity: 88, label: 'Identity Revelation', color: '#eab308' },
            { time: 92, intensity: 97, label: 'Paradox Complete', color: '#fde047' }
        ], 
        synopsis: "A temporal agent on his final assignment travels through time to catch the one criminal who has always eluded him: the 'Fizzle Bomber.' He poses as a bartender and listens to the tragic, unbelievable life story of a patron. As their narratives intertwine, the film spirals into a dizzying, paradox-laden masterpiece where the snake eats its own tail, and identity is the ultimate mystery.", 
        themes: ["Identity", "Fate", "Gender", "Paradox"], 
        awards: ["AACTA Award", "Toronto After Dark Winner"] 
    }),

    // 6. Primer
    14337: createMovieData({ 
        complexityLevel: "EXTREME", 
        complexityScore: 100, // Requires a spreadsheet to understand

        dominantColor: "#94a3b8", rating: 6.7, criticsScore: 73, audienceScore: 79, 
        director: "Shane Carruth", cast: ["Shane Carruth", "David Sullivan", "Casey Gooden"], 
        boxOffice: "$841,926", budget: "$7,000", 
        dna: { SciFi: 60, Thriller: 25, Drama: 15 }, 
        scenes: [
            { time: 15, intensity: 28, label: 'The Garage', color: '#475569' },
            { time: 32, intensity: 52, label: 'First Use', color: '#64748b' },
            { time: 48, intensity: 68, label: 'The Doubles', color: '#94a3b8' },
            { time: 62, intensity: 82, label: 'Ear Bleeding', color: '#cbd5e1' },
            { time: 73, intensity: 98, label: 'Timeline Collapse', color: '#e2e8f0' }
        ], 
        synopsis: "In a suburban garage, two engineers accidentally discover a side-effect of their error-checking device: it's a time machine. There are no special effects here, only the terrifying realism of what would actually happen if ordinary men discovered god-like power. As they exploit the timeline for stock market gains, their friendship fractures under the weight of paranoia, double-crosses, and the physical toll of rewriting reality.", 
        themes: ["Ethics", "Greed", "Betrayal", "Complexity"], 
        awards: ["Sundance Grand Jury Prize"] 
    }),

    // 7. 12 Monkeys
    63: createMovieData({ 
        complexityLevel: "HIGH", 
        complexityScore: 82, // Fixed timeline theory, conceptually heavy

        dominantColor: "#dc2626", rating: 8.0, criticsScore: 88, audienceScore: 88, 
        director: "Terry Gilliam", cast: ["Bruce Willis", "Madeleine Stowe", "Brad Pitt"], 
        boxOffice: "$168.8 million", budget: "$29.5 million", 
        dna: { SciFi: 45, Thriller: 35, Mystery: 20 }, 
        scenes: [
            { time: 18, intensity: 42, label: 'First Jump', color: '#065f46' },
            { time: 52, intensity: 63, label: 'Psychiatrist', color: '#047857' },
            { time: 85, intensity: 74, label: 'Army of 12', color: '#059669' },
            { time: 108, intensity: 86, label: 'Airport', color: '#10b981' },
            { time: 124, intensity: 93, label: 'Circle Closes', color: '#34d399' }
        ], 
        synopsis: "By 2035, humanity is forced to live underground after a deadly virus wipes out the population. James Cole, a convict, is volunteered to travel back to the 1990s to locate the virus's source: the Army of the Twelve Monkeys. But Cole is haunted by a recurring dream from his childhood and begins to question his own sanity. Is he a savior from the future, or just a madman lost in time?", 
        themes: ["Madness", "Fate", "Memory", "Pandemic"], 
        awards: ["Golden Globe (Pitt)", "Saturn Award"] 
    }),

    // 8. Donnie Darko
    141: createMovieData({ 
        complexityLevel: "HIGH", 
        complexityScore: 88, // Tangent Universe is confusing on first watch

        dominantColor: "#312e81", rating: 8.0, criticsScore: 87, audienceScore: 80, 
        director: "Richard Kelly", cast: ["Jake Gyllenhaal", "Jena Malone", "Mary McDonnell"], 
        boxOffice: "$7.6 million", budget: "$4.5 million", 
        dna: { Drama: 45, SciFi: 35, Mystery: 20 }, 
        scenes: [
            { time: 8, intensity: 38, label: 'Frank Appears', color: '#581c87' },
            { time: 35, intensity: 58, label: 'Philosophy Class', color: '#6b21a8' },
            { time: 68, intensity: 72, label: 'Cellar Door', color: '#7c3aed' },
            { time: 92, intensity: 84, label: 'Halloween Party', color: '#8b5cf6' },
            { time: 108, intensity: 91, label: 'Sacrifice', color: '#a78bfa' }
        ], 
        synopsis: "Donnie Darko is a troubled teenager who narrowly escapes death when a jet engine crashes into his bedroom. He begins seeing a demonic rabbit named Frank, who tells him the world will end in 28 days. As Donnie is manipulated into committing crimes by this figure, he discovers he may be living in a Tangent Universe that is collapsing in on itself. A haunting, surreal cult classic about destiny, sacrifice, and time travel.", 
        themes: ["Existentialism", "Mental Health", "Destiny", "Isolation"], 
        awards: ["Cult Classic Status", "Independent Spirit Award"] 
    }),

    // 9. Groundhog Day
    137: createMovieData({ 
        complexityLevel: "LOW", 
        complexityScore: 40, // Simple Time Loop

        dominantColor: "#0ea5e9", rating: 8.0, criticsScore: 97, audienceScore: 88, 
        director: "Harold Ramis", cast: ["Bill Murray", "Andie MacDowell", "Chris Elliott"], 
        boxOffice: "$105 million", budget: "$14.6 million", 
        dna: { Comedy: 50, Drama: 30, Fantasy: 20 }, 
        scenes: [
            { time: 12, intensity: 30, label: 'First Loop', color: '#be123c' },
            { time: 38, intensity: 52, label: 'Realization', color: '#e11d48' },
            { time: 58, intensity: 66, label: 'No Consequences', color: '#f43f5e' },
            { time: 78, intensity: 78, label: 'Self-Improvement', color: '#fb7185' },
            { time: 96, intensity: 89, label: 'True Love', color: '#fda4af' }
        ], 
        synopsis: "Phil Connors is an arrogant, cynical weatherman sent to cover the Groundhog Day festivities in Punxsutawney. But when he wakes up the next morning, it's Groundhog Day again. And again. And again. Trapped in a time loop with no consequences and no escape, Phil moves from hedonism to despair to eventual self-discovery. It is the gold standard of time loop films—funny, philosophical, and deeply redeeming.", 
        themes: ["Redemption", "Love", "Philosophy", "Time Loop"], 
        awards: ["BAFTA Winner", "National Film Registry"] 
    }),

    // 10. Timecrimes
    14139: createMovieData({ 
        complexityLevel: "HIGH", 
        complexityScore: 92, // Tight causal loops, visually confusing

        dominantColor: "#be185d", rating: 7.1, criticsScore: 89, audienceScore: 73, 
        director: "Nacho Vigalondo", cast: ["Karra Elejalde", "Candela Fernández", "Bárbara Goenaga"], 
        boxOffice: "$574,188", budget: "$2.6 million", 
        dna: { Thriller: 50, SciFi: 35, Mystery: 15 }, 
        scenes: [
            { time: 8, intensity: 35, label: 'Binoculars', color: '#15803d' },
            { time: 24, intensity: 58, label: 'The Machine', color: '#16a34a' },
            { time: 48, intensity: 72, label: 'Loop Two', color: '#22c55e' },
            { time: 68, intensity: 82, label: 'Bandaged Man', color: '#4ade80' },
            { time: 86, intensity: 90, label: 'Loop Closed', color: '#86efac' }
        ], 
        synopsis: "A man relaxing in his garden spots a mysterious woman in the woods and is suddenly attacked by a figure with a pink bandage wrapped around his face. Fleeing to a nearby facility, he stumbles into a scientific experiment and is sent back in time by one hour. What follows is a tightly wound, terrifying puzzle where he becomes the architect of his own nightmare, desperately trying to fix the past only to make it worse.", 
        themes: ["Causality", "Paranoia", "Fate", "Survival"], 
        awards: ["Fantastic Fest Winner", "Austin Fantastic Fest"] 
    })
};

// 6️⃣ CINEMATIC_COLORS
export const CINEMATIC_COLORS = {
    Thriller: '#1e293b', Drama: '#dc2626', Mystery: '#dc2626', 'Sci-Fi': '#0f172a',
    Crime: '#422006', Romance: '#be185d', Action: '#991b1b', Psychological: '#7c3aed', Horror: '#0f172a'
};

// 7️⃣ RATING_OPTIONS
export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

// 8️⃣ TIME_TRAVEL_FAQS
export const TIME_TRAVEL_MOVIE_FAQS = {
    'Back to the Future': [
        { 
            question: "Does the time travel follow scientific rules?", 
            answer: "It follows the 'Single Mutable Timeline' theory, often called the Ripple Effect. Unlike multiverse theories where changes create new branches, here there is only one reality that gets overwritten. When Marty changes the past, the consequences slowly catch up to the present—visually represented by his siblings fading from the photo. The film prioritizes narrative tension and comedy over strict quantum mechanics." 
        },
        { 
            question: "Why doesn't Marty's dad recognize him in 1985?", 
            answer: "This is a common point of debate. The logical explanation is that George only knew 'Calvin Klein' for about one week, 30 years ago. Human memory is fallible; over three decades, the face of a high school acquaintance would fade into a vague blur. George likely sees a resemblance but would never jump to the impossible conclusion that his son is the same person." 
        },
        { 
            question: "What actually is the Flux Capacitor?", 
            answer: "The Flux Capacitor is the fictional core component that makes time travel possible by essentially 'fluxing' time. Doc Brown envisioned the Y-shaped device after hitting his head on a sink in 1955. While the film never explains the physics, it establishes a hard rule: the device requires exactly 1.21 gigawatts of electricity and a speed of 88 mph to rip a hole in the space-time continuum." 
        },
        { 
            question: "Does the ending create a parallel universe?", 
            answer: "Technically, yes. When Marty returns to 1985, he doesn't return to his original timeline (where his dad was a wimp). He enters a rewrite where his family is successful and happy. The 'original' reality is effectively erased. The sequel complicates this further, but in the first film, it treats time as a single stream that has been permanently altered for the better." 
        }
    ],
    'Terminator 2: Judgment Day': [
        { 
            question: "How does the T-1000's liquid metal work?", 
            answer: "The T-1000 is composed of a mimetic polyalloy—a 'nanomorph' swarm that functions like liquid metal. It can simulate any object of equal size and texture by physical contact, allowing it to become floor tiles, prison guards, or blades. However, it cannot mimic complex machines like guns or bombs because those require moving parts, chemicals, and internal mechanisms that a solid metal mass cannot replicate." 
        },
        { 
            question: "Can the future really be changed?", 
            answer: "This is the central philosophical shift from the first movie. The original Terminator argued that fate was a closed loop (Reese was always John's father). T2 flips this with the mantra 'No Fate But What We Make.' By destroying Cyberdyne Systems and the original chip, Sarah and John effectively break the loop, proving that the future is not written and Judgment Day is not inevitable." 
        },
        { 
            question: "Why does the T-800 have to destroy himself?", 
            answer: "The T-800 realizes that his own CPU contains future technology that could be salvaged to reverse-engineer Skynet, starting the war all over again. Since his programming prevents self-termination, he asks Sarah to lower him into the steel. It is his final act of humanity—sacrificing his existence to ensure the safety of the boy he was built to protect." 
        },
        { 
            question: "Why is T2 considered better than the original?", 
            answer: "It is one of the rare sequels that transcends the original by deepening the lore and emotional stakes. While the first film was a gritty sci-fi slasher, T2 became an emotional action epic. It revolutionized CGI with the liquid metal effects and subverted expectations by turning cinema's most terrifying villain (Arnold) into a surrogate father figure." 
        }
    ],
    'The Terminator': [
        { 
            question: "What is the Predestination Paradox in this film?", 
            answer: "The entire movie is a classic 'Bootstrap Paradox' (or causal loop). Skynet sends the Terminator back to kill John Connor, which forces the Resistance to send Kyle Reese back to protect her. However, Kyle Reese ends up fathering John Connor. If Skynet had never attacked, John would never have been born. Skynet inadvertently created its own enemy." 
        },
        { 
            question: "Is this a horror movie or action movie?", 
            answer: "It is essentially a sci-fi horror film, structured like a slasher. The Terminator functions exactly like Michael Myers or Jason Voorhees—he is silent, emotionless, unstoppable, and pursues the 'final girl' (Sarah). The tone is dark, gritty, and oppressive, creating a sense of dread that is very different from the explosive action of the sequel." 
        },
        { 
            question: "How does the photo of Sarah exist?", 
            answer: "This is another layer of the paradox. The photo taken of Sarah at the end of the film is the exact same photo given to Kyle Reese in the future, which makes him fall in love with her. He travels back in time to meet the woman in the photo, ensuring the photo gets taken. The object has no origin; it exists eternally within the time loop." 
        },
        { 
            question: "Why is the Terminator so terrifying?", 
            answer: "Unlike human villains, the Terminator cannot be reasoned with, bargained with, or intimidated. It feels no pity, remorse, or fear. The terror comes from its relentless nature—it will literally tear itself apart to get to you. Arnold Schwarzenegger's robotic, cold performance perfectly captured the idea of a machine that looks human but lacks a soul." 
        }
    ],
    'Interstellar': [
        { 
            question: "Is the science in Interstellar accurate?", 
            answer: "Surprisingly, yes. Nobel Prize-winning physicist Kip Thorne consulted on the film to ensure the black hole (Gargantua) and wormhole were depicted according to general relativity equations. The time dilation on Miller's Planet—where one hour equals seven years on Earth—is theoretically possible near a supermassive black hole due to intense gravity warping space-time." 
        },
        { 
            question: "What exactly is the Tesseract at the end?", 
            answer: "The Tesseract is a five-dimensional construct placed inside the black hole by future humans ('They'). Since Cooper cannot perceive 5 dimensions, the Tesseract represents time as a physical spatial dimension—an infinite hallway of moments. This allows him to physically interact with specific moments in his daughter's room using gravity as a communicator." 
        },
        { 
            question: "What is the 'Love' theory regarding gravity?", 
            answer: "The film posits that love isn't just a biological emotion but a form of connection that transcends dimensions, similar to gravity. While science can explain the how, Cooper argues that his connection to Murph is what allows him to navigate the infinite Tesseract to find the specific moment needed to save humanity. Love acts as the navigational constant in the chaos of time." 
        },
        { 
            question: "Did Cooper travel to the future?", 
            answer: "Technically, yes. By surviving the intense gravity of the black hole, he experienced massive time dilation. When he is ejected near Saturn, decades have passed on Earth, but he has barely aged. He arrives in a future where humanity has been saved by the data he sent back, making him a man out of time, younger than his own dying daughter." 
        }
    ],
    'Predestination': [
     
        { 
            question: "How can someone be their own mother and father?", 
            answer: "This is the biological impossibility the film embraces. Jane is born with both male and female reproductive organs. After giving birth to a baby (with John), she undergoes surgery to become John. That baby is stolen and taken back in time to become Jane. Because they are the same genetic being, they are literally their own ancestors and descendants." 
        },
        { 
            question: "Why does the Bartender become the Bomber?", 
            answer: "The film suggests that prolonged time travel causes 'the fizzle'—a form of psychosis and dementia. The Bartender spends his life trying to stop the Bomber, but the trauma and brain damage eventually warp his mind until he *becomes* the Bomber, convincing himself that the bombings are necessary to save lives. It is a tragic cycle of self-destruction." 
        },


   { 
            question: "Is everyone the same person?", 
            answer: "Yes. The shocking twist is that Jane, John, the Bartender, and the Fizzle Bomber are all the exact same person at different points in their timeline. It is the ultimate solipsistic paradox: a single individual who births themselves, recruits themselves, fights themselves, and eventually kills themselves. The entire universe of the film revolves around one lonely soul." 
        },

        { 
            question: "What is the meaning of the Snake/Ouroboros?", 
            answer: "The Ouroboros (a snake eating its own tail) is the central metaphor. It represents infinity and the inescapability of fate. The protagonist is trapped in an eternal loop of creation and destruction, never able to break free because every action they take to fix the past is exactly what caused the future. It is a study of inevitable tragedy." 
        }




        
    ],
    'Primer': [
        { 
            question: "Why is Primer considered the hardest movie to understand?", 
            answer: "Primer refuses to 'dumb down' its content. Written by a mathematician/engineer, it features realistic, overlapping dialogue filled with technical jargon and lacks any exposition to explain the plot to the audience. The timeline splits and folds onto itself dozens of times, and the characters eventually lose track of which timeline they are in, leaving the audience just as disoriented." 
        },
        { 
            question: "How do the time machines actually work?", 
            answer: "The 'Box' creates a gravity loop A-to-B. To travel back 6 hours, you must turn the machine on, wait 6 hours, climb inside, and wait *another* 6 hours inside the box while time flows backwards. This realism adds a physical toll—dehydration, fatigue, and bleeding ears—making time travel a grueling endurance test rather than a magical instant jump." 
        },
        { 
            question: "What happens to the 'original' characters?", 
            answer: "The film implies a dark reality: to take over a timeline, you have to get rid of your double. There are scenes implying that the time-traveling versions of Aaron and Abe have drugged or locked away their original timeline selves in the attic. The protagonists we watch at the end are actually 'copies' who have stolen the lives of their unsuspecting originals." 
        },
        { 
            question: "What is Aaron doing in the final scene?", 
            answer: "In the final shot, Aaron is seen in a large hangar directing construction workers. It is implied he is building a massive, room-sized time machine. Having lost trust in Abe and control of the timeline, he likely plans to travel much further back to create a 'perfect' timeline where he controls everything, essentially playing god." 
        }
    ],
    '12 Monkeys': [
        { 
            question: "Is the future actually changeable?", 
            answer: "The film presents a fatalistic view of time travel, known as the 'Novikov Self-Consistency Principle.' Every attempt Cole makes to stop the virus only leads to the events happening exactly as history recorded. He isn't changing the past; he is fulfilling it. The tragedy is that his struggle was always part of the history he tried to erase." 
        },
        { 
            question: "Was James Cole insane?", 
            answer: "The film brilliantly plays with ambiguity. For a large section, the audience acts as the jury, wondering if Cole is truly from the future or just a schizophrenic constructing a delusion. However, the ending confirms his sanity: the bullet in his leg is antique, and the events line up perfectly. He was telling the truth, which makes his death even more tragic." 
        },
        { 
            question: "What does the ending at the airport mean?", 
            answer: "The ending closes the loop. The little boy who witnesses the shooting at the airport is actually young James Cole. He watches his own future self die. This explains his recurring dream throughout the movie—it wasn't a dream, but a traumatic memory of his own death. He lived his entire life destined to die in that specific moment." 
        },
        { 
            question: "Who are the Army of the 12 Monkeys?", 
            answer: "The 'Army' is a massive red herring. Cole spends the movie hunting them, assuming they released the virus. In reality, they are just a group of harmless animal rights activists led by Brad Pitt's character who released zoo animals. The actual apocalypse was caused by a quiet, overlooked scientist acting alone, highlighting the chaos and unpredictability of reality." 
        }
    ],
    'Donnie Darko': [
        { 
            question: "What is the Tangent Universe?", 
            answer: "According to the fictional book 'The Philosophy of Time Travel,' a Tangent Universe is a highly unstable parallel reality that forms when the Fourth Dimension is corrupted (the jet engine falling). This universe is doomed to collapse in 28 days, creating a black hole that will destroy the primary universe unless the 'Artifact' (the engine) is returned to its proper time." 
        },
        { 
            question: "Who exactly is Frank the Rabbit?", 
            answer: "Frank is a 'Manipulated Dead.' In the future of the Tangent Universe, Donnie shoots and kills Frank. Frank's ghost then travels back in time to guide Donnie. His scary bunny appearance is simply the Halloween costume he was wearing when he died. His job is to ensure Donnie survives long enough to sacrifice himself at the end." 
        },
        { 
            question: "Why does Donnie have to die at the end?", 
            answer: "Donnie is the 'Living Receiver,' the superhero of this reality. To close the loop and save the universe (and his girlfriend Gretchen, who died in the Tangent world), he must use his telekinetic powers to send the jet engine back in time. He chooses to stay in bed and be crushed by it, accepting his death to reset the timeline and save everyone he loves." 
        },
        { 
            question: "Why is Donnie laughing as he dies?", 
            answer: "It is a moment of pure clarity and joy. He remembers the journey of the Tangent Universe like a dream. He realizes that there is a God or a higher purpose, and that his life—though short—had immense meaning. He laughs because he has accepted his destiny and knows that by dying, he has successfully saved the world." 
        }
    ],
    'Groundhog Day': [
        { 
            question: "How long was Phil actually trapped in the loop?", 
            answer: "While the movie shows us only a few weeks, estimates based on his skills suggest he was trapped for decades. He learns to play piano at a master level, ice sculpt, and speak French fluently. Director Harold Ramis estimated it was about 30 to 40 years, while early drafts suggested 10,000 years. It was essentially an entire lifetime lived in a single day." 
        },
        { 
            question: "Why did the time loop finally stop?", 
            answer: "The loop wasn't broken by a specific action, but by a spiritual transformation. Phil had to move through the stages of grief—denial, anger, bargaining (hedonism), depression (suicide)—to reach acceptance. Only when he stopped trying to manipulate the day for his own gain and genuinely served others without expecting a reward did he break the cycle." 
        },
        { 
            question: "Is there a scientific explanation?", 
            answer: "No, and that is deliberate. Early scripts included a vengeful ex-girlfriend casting a voodoo curse, but Ramis removed it to make the story more universal and philosophical. By leaving the cause a mystery, the film becomes a pure parable about human growth and enlightenment, similar to the Buddhist concept of escaping the wheel of Samsara." 
        },
        { 
            question: "What is the deeper meaning of the film?", 
            answer: "Groundhog Day is widely considered a spiritual masterpiece. It argues that we are all 'trapped' in repetitive days, sleepwalking through life. Phil's journey shows that happiness doesn't come from changing your external circumstances (which he can't), but from changing your internal attitude—finding joy in small acts of kindness and creative mastery." 
        }
    ],
    'Timecrimes': [
        { 
            question: "Who is the mysterious bandaged man?", 
            answer: "The terrifying bandaged man is actually Hector (the protagonist) himself from about an hour in the future. After traveling back in time, Hector realizes he must disguise himself with bandages (to cover an accidental injury) and attack his past self to ensure that past-Hector runs to the time machine. He becomes the monster he was originally running from." 
        },
        { 
            question: "Why does Hector do such terrible things?", 
            answer: "Hector is not evil, but he becomes a slave to causality. He realizes that if he doesn't perform the exact actions he remembers seeing (attacking himself, scaring the girl), the timeline might unravel or he might cease to exist. He is forced to commit violent acts just to maintain the consistency of the time loop he is trapped in." 
        },
        { 
            question: "Is the time travel logic consistent?", 
            answer: "Yes, Timecrimes is praised for being one of the most logically airtight time travel movies ever. It follows a strict 'Fixed Timeline' rule. There are no alternate universes; everything that happens has already happened. We just see the events from three different perspectives (Hector 1, 2, and 3) as they layer on top of each other perfectly." 
        },
        { 
            question: "What is the meaning of the ending?", 
            answer: "The ending is dark and cynical. Hector 3 successfully manipulates events so that his wife survives, but an innocent girl dies in her place. He sits in his lawn chair, exhausted, waiting for the rain. He has 'won,' but at the cost of his morality. He is now a man who knows he is capable of murder to preserve his own comfortable life." 
        }
    ]
};

// 9️⃣ HELPER FUNCTIONS & EXPORTS
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
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return TIME_TRAVEL_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A mind-bending time travel film`,
        "genre": movie.genre,
        "datePublished": movie.year.toString(),
        "director": { "@type": "Person", "name": movieInfo?.director || "Acclaimed Director" },
        "actor": movieInfo?.cast?.map(actor => ({ "@type": "Person", "name": actor })) || [],
        "duration": `PT${movie.runtime}M`,
        "image": posterUrl,
        "aggregateRating": { 
            "@type": "AggregateRating", 
            "ratingValue": movieInfo?.rating || 7.5, 
            "bestRating": 10, 
            "worstRating": 1, 
            "ratingCount": 100 
        }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ 
        "@type": "Question", 
        "name": faq.question, 
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer } 
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

// Build object map by tmdbId (Export named variable)
export const COMPLETE_TIME_TRAVEL_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

// ✅ EXPORT DEFAULT (Containing all exports for compatibility)
export default {
    COMPLETE_MOVIE_DATABASE,
    COMPLETE_MOVIE_DATA,
    SENSITIVE_TIMELINES,
    TIME_TRAVEL_MOVIE_FAQS,
    COMPLETE_TIME_TRAVEL_DATABASE
};