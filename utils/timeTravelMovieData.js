// utils/timeTravelMovieData.js - TIME TRAVEL COLLECTION WITH SENSITIVE SCENES ✅

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
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
       
        { start: '1:21:49', end: '1:22:13', type: 'Sexual Content', severity: 'Moderate' }
    ]},
// 2. Terminator 2: Judgment Day
    280: {
        scenes: [
            { start: "0:06:10", end: "0:06:20", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "0:11:40", end: "0:11:52", type: "Partial Nudity (Man)", severity: "Mild" }
        ]
    },
    218: { scenes: [ // The Terminator
        { start: '5:00', end: '7:30', type: ' Nudity', severity: 'Mild' },
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
  
    ]},
    137: { scenes: [ // Groundhog Day

  
    ]},
    14139: { scenes: [ // Timecrimes
        { start: '7:07', end: '7:14', type: ' Nudity', severity: 'Moderate' },
        { start: '10:20', end: '11:34', type: 'Nudity', severity: 'High' }
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
        { question: "Does the time travel in Back to the Future follow real science?", answer: "It loosely follows the 'Single Mutable Timeline' theory, often called the Ripple Effect. Unlike multiverse theories where changes create new branches, here there is only one reality that gets overwritten. When Marty changes the past, the consequences slowly catch up to the present—visually represented by his siblings fading from the photo. The film prioritizes narrative tension and comedy over strict quantum mechanics." },
        { question: "Why doesn't George McFly recognize Marty in 1985?", answer: "The most logical explanation is that George only knew 'Calvin Klein' for about one week, 30 years ago. Human memory is fallible; over three decades, the face of a brief high school acquaintance would fade into a vague blur. George likely sees a resemblance but would never jump to the impossible conclusion that his son is a time traveler." },
        { question: "How does the Flux Capacitor work in Back to the Future?", answer: "The Flux Capacitor is the fictional core component that makes time travel possible by essentially 'fluxing' time. Doc Brown envisioned the Y-shaped device after hitting his head in 1955. While the film never explains the actual physics, it establishes a hard rule: the device requires exactly 1.21 gigawatts of electricity and a speed of 88 mph to rip a hole in the space-time continuum." },
        { question: "Does the ending of Back to the Future create an alternate universe?", answer: "Technically, yes. When Marty returns to 1985, he doesn't return to his original timeline where his family was struggling. He enters a rewritten reality where his family is successful and happy. The 'original' reality is effectively erased, and the film treats time as a single stream that has been permanently altered for the better." }
    ],
    'Terminator 2: Judgment Day': [
        { question: "How does the liquid metal T-1000 work in Terminator 2?", answer: "The T-1000 is composed of a mimetic polyalloy—a 'nanomorph' swarm that functions like liquid metal. It can simulate any object of equal size and texture by physical contact. However, it cannot mimic complex machines like guns or bombs because those require moving parts, chemicals, and internal mechanisms that a solid metal mass cannot replicate." },
        { question: "What is the main theme of Terminator 2?", answer: "The central philosophical theme is 'No Fate But What We Make.' While the first movie argued that fate was a closed, inescapable loop, T2 flips this concept. By destroying Cyberdyne Systems and the original microchip, Sarah and John effectively break the time loop, proving that the future is not written and Judgment Day is not inevitable." },
        { question: "Why does the T-800 sacrifice himself at the end of Terminator 2?", answer: "The T-800 realizes that his own CPU contains advanced future technology that could be salvaged to reverse-engineer Skynet, starting the apocalyptic war all over again. Since his programming prevents self-termination, he asks Sarah to lower him into the molten steel, sacrificing his existence to ensure humanity's safety." },
        { question: "Why is Terminator 2 widely considered better than the original?", answer: "T2 is one of the rare sequels that transcends the original by deepening both the lore and the emotional stakes. It revolutionized cinema with groundbreaking CGI liquid metal effects, and brilliantly subverted expectations by turning cinema's most terrifying villain into a fiercely loyal surrogate father figure for John Connor." }
    ],
    'The Terminator': [
        { question: "What is the time travel paradox in The Terminator?", answer: "The entire movie is a classic 'Bootstrap Paradox' (or causal loop). Skynet sends the Terminator back in time to kill John Connor, which forces the human Resistance to send Kyle Reese back to protect his mother. However, Kyle Reese ends up fathering John. If Skynet had never attacked, John would never have been born, meaning Skynet inadvertently created its own worst enemy." },
        { question: "Is The Terminator considered a horror movie or an action movie?", answer: "While its sequel is pure action, the original 1984 film is essentially a sci-fi horror movie structured like a slasher. The Terminator functions exactly like Michael Myers or Jason Voorhees—he is silent, emotionless, unstoppable, and relentlessly pursues the 'final girl' (Sarah Connor) through a gritty, oppressive landscape." },
        { question: "How can the photograph of Sarah Connor exist in the future?", answer: "The photograph is part of the film's time loop paradox. The photo taken of Sarah at the end of the film is the exact same physical photo given to Kyle Reese in the future, which makes him fall in love with her. He travels back to meet the woman in the photo, ensuring the photo gets taken. The object actually has no origin point." },
        { question: "What makes the original T-800 so terrifying?", answer: "Unlike human villains, the Terminator cannot be reasoned with, bargained with, or intimidated. It feels no pity, remorse, or fear. The terror comes from its relentless nature—it will literally tear itself apart to complete its mission. Arnold Schwarzenegger's cold performance perfectly captures a machine that looks human but entirely lacks a soul." }
    ],
    'Interstellar': [
        { question: "Is the science and black hole in Interstellar accurate?", answer: "Surprisingly, yes. Director Christopher Nolan consulted with Nobel Prize-winning physicist Kip Thorne to ensure the black hole (Gargantua) and the wormhole were depicted according to real general relativity equations. The extreme time dilation on Miller's Planet is also theoretically possible near a supermassive black hole due to intense gravity warping space-time." },
        { question: "What is the Tesseract at the end of Interstellar?", answer: "The Tesseract is a five-dimensional construct placed inside the black hole by highly evolved future humans. Since Cooper cannot perceive five dimensions, the Tesseract represents time as a physical, spatial dimension—an infinite hallway of moments. This allows him to physically navigate through time to send a message to his daughter." },
        { question: "What does Interstellar say about the connection between love and gravity?", answer: "The film posits that love isn't just a biological emotion, but a quantifiable force of connection that transcends dimensions, similar to gravity. While science explains the mechanics of the Tesseract, Cooper argues that his love for Murph is the 'navigational constant' that allows him to find the exact right moment in time to save humanity." },
        { question: "Does Cooper travel to the future at the end of Interstellar?", answer: "Technically, yes. By surviving the intense gravity of the black hole, Cooper experienced massive time dilation. When he is ejected near Saturn, decades have passed on Earth, but he has barely aged. He arrives in a future where humanity has been saved by the data he sent, making him a man out of time, physically younger than his own dying daughter." }
    ],
    'Predestination': [
        { question: "How is the timeline in Predestination biologically possible?", answer: "The film embraces a deliberate biological impossibility. Jane is born with both male and female reproductive organs. After giving birth to a baby, she undergoes surgery to become John. That baby is stolen, taken back in time, and grows up to be Jane. Because they are the exact same genetic being, they are literally their own ancestors and descendants." },
        { question: "Why does the Bartender become the Fizzle Bomber?", answer: "The film establishes that prolonged time travel causes 'the fizzle'—a severe form of psychosis and dementia. The Bartender spends his life trying to stop the Bomber, but the accumulated trauma and brain damage eventually warp his mind. He becomes the Bomber, tragically convincing himself that the bombings are necessary to prevent larger disasters." },
        { question: "Are all the main characters in Predestination the same person?", answer: "Yes. The shocking twist is that Jane, John, the Bartender, and the Fizzle Bomber are all the exact same person at different stages of their life. It is the ultimate paradox: a single individual who births themselves, recruits themselves, fights themselves, and eventually kills themselves, trapped in a solitary universe." },
        { question: "What does the Ouroboros snake ring symbolize in Predestination?", answer: "The Ouroboros (a snake eating its own tail) is the central metaphor of the film. It represents infinity, the closed time loop, and the absolute inescapability of fate. The protagonist is trapped in an eternal cycle of creation and destruction, where every action taken to fix the past is exactly what causes the tragic future." }
    ],
    'Primer': [
        { question: "Why is the movie Primer so hard to understand?", answer: "Primer notoriously refuses to 'dumb down' its complex time travel mechanics. Written and directed by a mathematician/engineer, it features realistic, overlapping dialogue filled with technical jargon and offers zero exposition. As the timelines split and fold onto themselves dozens of times, the characters lose track of reality, leaving the audience equally disoriented." },
        { question: "How do the time machines actually work in Primer?", answer: "The 'Box' creates a continuous gravity loop from point A to B. To travel back 6 hours, a user must turn the machine on, wait 6 hours, climb inside, and wait another 6 hours inside the cramped box while time flows backwards. This realism makes time travel a grueling, physical endurance test that causes dehydration and bleeding ears." },
        { question: "What happens to the original versions of Abe and Aaron in Primer?", answer: "The film heavily implies a dark reality: to take over a timeline, the time traveler has to eliminate their 'double.' There are scenes suggesting that the time-traveling versions of Aaron and Abe have drugged or locked away their original-timeline selves. The protagonists we follow at the end are actually 'copies' who have stolen lives." },
        { question: "What is Aaron building in the final scene of Primer?", answer: "In the final shot, Aaron is seen in a large warehouse directing construction workers. It is heavily implied he is building a massive, room-sized time machine. Having lost trust in Abe and control of the current timeline, he likely plans to travel much further back to create a 'perfect' reality where he has absolute control." }
    ],
    '12 Monkeys': [
        { question: "Can the future be changed in the movie 12 Monkeys?", answer: "No. The film presents a fatalistic view of time travel known as the 'Novikov Self-Consistency Principle.' Every attempt James Cole makes to stop the virus only leads to the events happening exactly as history recorded. He isn't changing the past; he is fulfilling it, making his struggle a tragic, inescapable loop." },
        { question: "Is James Cole hallucinating or actually time traveling in 12 Monkeys?", answer: "The film brilliantly plays with ambiguity, making the audience wonder if Cole is truly from the future or suffering from severe schizophrenia. However, the ending objectively confirms his sanity: the bullet pulled from his leg is antique, and his predictions come true. He was telling the truth the entire time, making his fate even more tragic." },
        { question: "What does the airport ending mean in 12 Monkeys?", answer: "The ending perfectly closes the time loop. The little boy who witnesses the fatal shooting at the airport is actually young James Cole, watching his own future self die. This explains his recurring dream throughout the movie—it wasn't a dream, but a deeply repressed, traumatic childhood memory of his own eventual death." },
        { question: "Who are the real Army of the 12 Monkeys?", answer: "The 'Army' is a massive narrative red herring. Cole spends the entire movie hunting them, assuming they are domestic terrorists who released the virus. In reality, they are just a harmless group of animal rights activists who released zoo animals. The actual apocalypse was caused by a quiet, overlooked scientist acting entirely alone." }
    ],
    'Donnie Darko': [
        { question: "What is the Tangent Universe in Donnie Darko?", answer: "According to the film's fictional lore, a Tangent Universe is a highly unstable parallel reality that forms when the Fourth Dimension is corrupted (triggered by the jet engine falling). This doomed alternate universe will collapse in 28 days, creating a black hole that will destroy the primary universe unless the 'Artifact' is returned." },
        { question: "Who exactly is Frank the Rabbit in Donnie Darko?", answer: "Frank is a 'Manipulated Dead.' In the future of the Tangent Universe, Donnie shoots and kills a teenager named Frank. Frank's ghost then travels back in time to guide Donnie. His terrifying bunny appearance is simply the Halloween costume he was wearing when he died. His mission is to ensure Donnie survives long enough to fix the timeline." },
        { question: "Why does Donnie Darko have to die at the end?", answer: "Donnie is the 'Living Receiver,' the reluctant savior of this reality. To close the time loop and save the primary universe (as well as his mother, sister, and girlfriend who died in the Tangent world), he must use his powers to send the jet engine back in time. He willingly stays in bed to be crushed, accepting his death to reset the timeline." },
        { question: "Why is Donnie laughing in bed before he dies?", answer: "Donnie's laughter is a moment of pure clarity, relief, and joy. As the timeline resets, he remembers the journey of the Tangent Universe like a vivid dream. He realizes there is a higher purpose to the universe, and he laughs because he has accepted his destiny, knowing that by sacrificing himself, he successfully saved everyone he loves." }
    ],
    'Groundhog Day': [
        { question: "How many years was Phil trapped in the time loop in Groundhog Day?", answer: "While the movie only shows us a few weeks of screen time, estimates based on the master-level skills he acquires suggest he was trapped for decades. He learns to play piano flawlessly, ice sculpt, and speak fluent French. Director Harold Ramis estimated Phil was trapped for 30 to 40 years, living an entire lifetime in a single day." },
        { question: "How does the time loop finally break in Groundhog Day?", answer: "The loop is broken by a profound spiritual transformation. Phil has to move through the stages of grief—denial, anger, hedonism, and depression—to reach acceptance. Only when he stops trying to manipulate the day for his own selfish gain and genuinely begins serving others without expecting a reward does the universe finally let him move forward." },
        { question: "Is there a scientific explanation for the loop in Groundhog Day?", answer: "No, and that omission is highly deliberate. Early scripts included a vengeful ex-girlfriend casting a magic curse, but the director removed it to make the story more universal. By leaving the cause an absolute mystery, the film functions as a philosophical parable about human growth, enlightenment, and escaping repetitive, selfish cycles." },
        { question: "What is the deeper philosophical meaning behind Groundhog Day?", answer: "Groundhog Day is widely considered a philosophical masterpiece. It suggests that many people are 'trapped' in repetitive days, sleepwalking through their own lives. Phil's journey demonstrates that true happiness doesn't come from changing your external circumstances, but from changing your internal attitude and finding joy in acts of kindness." }
    ],
    'Timecrimes': [
        { question: "Who is the bandaged man in the movie Timecrimes?", answer: "The terrifying bandaged man stalking the woods is actually Hector (the protagonist) himself from about an hour in the future. After traveling back in time, Hector realizes he must disguise his identity with bandages and attack his past self to ensure that the timeline plays out exactly as he remembers it." },
        { question: "Why does Hector attack himself in Timecrimes?", answer: "Hector is not inherently evil, but he becomes a terrified slave to causality. He realizes that if he doesn't perform the exact actions he witnessed earlier (attacking himself, scaring the cyclist), the timeline might unravel entirely, or he might cease to exist. He is forced to commit violence simply to maintain the consistency of his time loop." },
        { question: "Is the time travel logic in Timecrimes considered accurate?", answer: "Yes, Timecrimes is highly praised by sci-fi fans for featuring one of the most logically airtight time travel plots ever filmed. It adheres strictly to the 'Fixed Timeline' rule. There are no alternate universes or changed futures; everything that happens has already happened, viewed meticulously from three perfectly overlapping perspectives." },
        { question: "What is the true meaning of the Timecrimes ending?", answer: "The ending is exceptionally dark and cynical. Hector 3 successfully manipulates events so his wife survives, but he allows an innocent girl to die in her place. As he sits in his lawn chair waiting for the rain, he has 'won,' but at the complete cost of his morality, accepting that he is capable of murder to preserve his own comfortable life." }
    ]
};

// 9️⃣ HELPER FUNCTIONS & EXPORTS (🔥 UPGRADED FOR UNIVERSAL SEO)
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
            description: scene.description || ''
        }))
    };
};

// 🔥 1. THE KEYWORD BRIDGE (SEO-Optimized)
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

// 🔥 2. THE "GOLDEN EGG" SCHEMA GENERATOR (Universal Version)
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
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = TIME_TRAVEL_MOVIE_FAQS[movie.Title] ? [...TIME_TRAVEL_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = TIME_TRAVEL_MOVIE_FAQS[movieTitle] ? [...TIME_TRAVEL_MOVIE_FAQS[movieTitle]] : [];
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
                answer: `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movieTitle} does not have any sex, nudity, or sexual content in the full ${finalRuntime} runtime.`
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
                answer: `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movieTitle} does not have any sex, nudity, or sexual content in the full ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
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