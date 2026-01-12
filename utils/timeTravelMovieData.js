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
        { start: '1:21:49', end: '1:22:13', type: 'Sexual Content (Assault Attempt)', severity: 'Moderate' }
    ]},
    280: { scenes: [ // T2
        { start: '6:10', end: '6:20', type: 'Partial Nudity (male, not sexual)', severity: 'Mild' }
    ]},
    218: { scenes: [ // The Terminator
        { start: '5:00', end: '7:30', type: 'Nudity (man)', severity: 'Moderate' },
        { start: '1:21:50', end: '1:23:00', type: 'Passionate kissing + sex', severity: 'High' }
    ]},
    157336: { scenes: [] }, // Interstellar
    206487: { scenes: [ // Predestination
        { start: '19:07', end: '19:20', type: 'Sex + Partial Nudity', severity: 'High' },
        { start: '42:20', end: '42:50', type: 'Nudity (non-sexual)', severity: 'High' }
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
        { start: '7:07', end: '7:14', type: 'Partial nudity (woman)', severity: 'Moderate' },
        { start: '10:20', end: '11:34', type: 'Nudity (woman)', severity: 'High' }
    ]}
};

export const FALLBACK_POSTERS = {
    105: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAQL9QB50Gk.jpg",
    280: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    218: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    157336: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8zYEfe4NCZvq6DuNZ.jpg",
    206487: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    14337: "https://image.tmdb.org/t/p/w500/p4O9nE7x0p7M1n01fVj4j5.jpg", // Placeholder URL for Primer
    63: "https://image.tmdb.org/t/p/w500/6Sj9wDu3YsxjbVZHU14q6Ed7a.jpg",
    141: "https://image.tmdb.org/t/p/w500/j9q3f7.jpg", // Placeholder for Donnie Darko
    137: "https://image.tmdb.org/t/p/w500/v3QyEo6hH4oF9.jpg", // Placeholder for Groundhog Day
    14139: "https://image.tmdb.org/t/p/w500/4.jpg" // Placeholder for Timecrimes
};

export const COMPLETE_MOVIE_DATA = {
    // 1. Back to the Future
    105: createMovieData({ 
        timeTravelIntensity: 92, sciFiConcept: 85, emotionalImpact: 95, complexityLevel: "MEDIUM", 
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
        synopsis: "Marty McFly is just a typical teenager trying to play guitar and survive high school, until he is accidentally blasted 30 years into the past in a plutonium-powered DeLorean. Trapped in 1955, he inadvertently prevents his parents from meeting, setting off a chain reaction that begins to erase him from existence. Now, with the help of a younger, eccentric Doc Brown, Marty must play matchmaker to his own parents to save his future—before he fades away completely.", 
        themes: ["Destiny", "Family", "Consequences", "Adventure"], 
        awards: ["Oscar for Sound Effects", "National Film Registry"] 
    }),

    // 2. Terminator 2: Judgment Day
    280: createMovieData({ 
        timeTravelIntensity: 96, sciFiConcept: 90, emotionalImpact: 92, complexityLevel: "HIGH", 
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
        timeTravelIntensity: 94, sciFiConcept: 88, emotionalImpact: 85, complexityLevel: "HIGH", 
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
        timeTravelIntensity: 95, sciFiConcept: 98, emotionalImpact: 100, complexityLevel: "EXTREME", 
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
        synopsis: "With Earth plagued by blight and humanity facing extinction, ex-pilot Cooper is recruited for a desperate mission: to travel through a wormhole in search of a new habitable planet. But the mission comes with a devastating cost—relativity means that for every hour he spends in space, years pass for his children back on Earth. It is a visually spectacular, emotional epic about a father's love stretching across dimensions and time.", 
        themes: ["Love", "Relativity", "Survival", "Exploration"], 
        awards: ["Oscar for Visual Effects", "Saturn Award"] 
    }),

    // 5. Predestination
    206487: createMovieData({ 
        timeTravelIntensity: 97, sciFiConcept: 98, emotionalImpact: 85, complexityLevel: "EXTREME", 
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
        timeTravelIntensity: 98, sciFiConcept: 100, emotionalImpact: 60, complexityLevel: "EXTREME", 
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
        timeTravelIntensity: 93, sciFiConcept: 90, emotionalImpact: 88, complexityLevel: "HIGH", 
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
        timeTravelIntensity: 91, sciFiConcept: 88, emotionalImpact: 90, complexityLevel: "HIGH", 
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
        timeTravelIntensity: 89, sciFiConcept: 85, emotionalImpact: 92, complexityLevel: "MEDIUM", 
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
        timeTravelIntensity: 90, sciFiConcept: 85, emotionalImpact: 70, complexityLevel: "HIGH", 
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

// 8️⃣ TIME_TRAVEL_FAQS
export const TIME_TRAVEL_FAQS = {
    'Back to the Future': [
        { question: "Does the time travel follow scientific rules?", answer: "It follows the 'Single Mutable Timeline' theory. Changes in the past ripple forward and alter the present (like the photo fading). It prioritizes fun logic over hard physics." },
        { question: "Why doesn't Marty's dad recognize him?", answer: "He only knew 'Calvin Klein' for a week 30 years ago. Memories fade, and he likely just sees a vague resemblance to a kid who helped him once, not realizing it's his son." },
        { question: "What is the flux capacitor?", answer: "It is the fictional core component that makes time travel possible. Doc Brown envisioned it after hitting his head. It requires 1.21 gigawatts of power to operate." },
        { question: "Is the DeLorean iconic?", answer: "Yes, it is one of the most recognizable cars in cinema history. The stainless steel body and gull-wing doors were chosen to make it look like an alien spaceship to people in 1955." }
    ],
    'Terminator 2: Judgment Day': [
        { question: "How does the T-1000 work?", answer: "It is made of mimetic polyalloy (liquid metal). It can mimic any object of equal size and sample textures by touch. It cannot form complex machines with moving parts (like guns)." },
        { question: "Can the future really be changed?", answer: "The film's core message is 'No Fate But What We Make.' It argues that Judgment Day is not inevitable and that human choices can alter the course of history." },
        { question: "Why does the T-800 lower himself into the steel?", answer: "He must be destroyed to prevent his chip from being used to reverse-engineer Skynet. Since he cannot self-terminate, Sarah lowers him. It is his final act of humanity." },
        { question: "Is this the best sequel ever?", answer: "Many critics and fans consider it superior to the original. It revolutionized CGI visual effects and successfully transformed a terrifying villain into a beloved hero." }
    ],
    'The Terminator': [
        { question: "Who sent the Terminator?", answer: "Skynet, the AI defense network of the future, sent the Terminator back to 1984 to kill Sarah Connor before she could give birth to John, the leader of the Resistance." },
        { question: "Is it a horror movie?", answer: "It is essentially a sci-fi slasher film. The Terminator acts like Michael Myers—unstoppable, silent, and relentless. It is much darker and grittier than its action-packed sequel." },
        { question: "What is the grandfather paradox here?", answer: "The film is a 'Predestination Paradox.' Reese is sent back to save Sarah, but in doing so, he becomes John's father. If Skynet hadn't sent the Terminator, John would never have been born." },
        { question: "Why 'I'll be back'?", answer: "It was a throwaway line that Schwarzenegger delivered with such menace it became iconic. It encapsulates the machine's cold, inevitable nature." }
    ],
    'Interstellar': [
        { question: "Is the science accurate?", answer: "Yes, much of it is. Theoretical physicist Kip Thorne consulted on the film. The depiction of the black hole (Gargantua) and time dilation on Miller's planet are based on real general relativity equations." },
        { question: "What is the Tesseract?", answer: "It is a five-dimensional space constructed by future humans ('They') to allow Cooper to communicate across time with gravity. It visualizes time as a physical dimension he can navigate." },
        { question: "Did Cooper die?", answer: "No. He survived the black hole and was ejected near Saturn, where he was rescued. The film ends with him setting out to find Brand, implying a continuation of his journey." },
        { question: "What is the message of the film?", answer: "Love is the one thing that transcends time and space. It is not just a biological drive but a force that can guide us through dimensions we cannot scientifically understand." }
    ],
    'Predestination': [
        { question: "Are they all the same person?", answer: "Yes. Jane, John, the Bartender, and the Fizzle Bomber are all the same person at different stages of life. It is the ultimate predestination paradox: a person who creates, recruits, and destroys themselves." },
        { question: "Who are the parents of the baby?", answer: "Jane and John are the parents. Since they are the same person (pre- and post-gender reassignment), the baby is their own child. The baby is then taken back in time to become Jane." },
        { question: "Why does he become the Bomber?", answer: "The intense time travel causes psychosis ('the fizzle'). The Bartender, trying to stop the Bomber, eventually goes insane and *becomes* the Bomber, perpetuating the cycle he tried to end." },
        { question: "What is the message?", answer: "It explores narcissism, identity, and the inescapability of fate. The snake eating its own tail (Ouroboros) is the central metaphor. The character is trapped in an infinite loop of self-creation and self-destruction." }
    ],
    'Primer': [
        { question: "Why is Primer so hard to understand?", answer: "It was written by an engineer (Shane Carruth) who refused to 'dumb down' the science or dialogue. It lacks exposition, forcing the audience to keep up with the characters' complex jargon and overlapping timelines." },
        { question: "How many timelines are there?", answer: "Fans have mapped at least 9 different timelines. The characters use 'failsafe' machines to reset days repeatedly, creating a tangled web of alternate realities and doubles." },
        { question: "What happens to the 'doubles'?", answer: "The film implies there are multiple versions of Aaron and Abe running around. One Aaron is drugged and locked in the attic so the time-traveling Aaron can take his place. It explores the dark ethics of replacing yourself." },
        { question: "What is the ending?", answer: "Aaron leaves the country to build a larger time machine (possibly to build a timeline where he controls everything). Abe stays behind to try and sabotage their work to prevent the chaos." }
    ],
    '12 Monkeys': [
        { question: "Is the future changeable?", answer: "The film presents a fatalistic view: the past cannot be changed. Cole's attempts to stop the virus only lead to the events happening exactly as history recorded. He unknowingly causes his own death." },
        { question: "Is Cole insane?", answer: "The film plays with this ambiguity. Cole begins to doubt his own sanity, wondering if he is just delusional. However, the ending confirms his time travel is real, making his tragedy even more poignant." },
        { question: "What is the Army of the 12 Monkeys?", answer: "It is a red herring. They are just a group of animal rights activists who released zoo animals. The real culprit is Dr. Peters, a solitary extremist who releases the virus." },
        { question: "What is the final scene?", answer: "Young Cole witnesses his own adult death at the airport. The woman (Dr. Railly) makes eye contact with young Cole, smiling sadly. It closes the time loop perfectly." }
    ],
    'Donnie Darko': [
        { question: "What is the Tangent Universe?", answer: "It is an unstable parallel reality created when the jet engine falls. Donnie is the 'Living Receiver' chosen to return the artifact (engine) to the Primary Universe to prevent a black hole collapse." },
        { question: "Who is Frank?", answer: "Frank is a 'Manipulated Dead.' He is the ghost of the boy Donnie shoots in the future. He travels back in time to guide Donnie toward his destiny of sacrificing himself to save the world." },
        { question: "Does Donnie have to die?", answer: "Yes. To close the loop and save the universe (and his girlfriend Gretchen), Donnie must choose to stay in his bed and be crushed by the engine. His death resets the timeline." },
        { question: "Why is he laughing at the end?", answer: "He laughs because he remembers the Tangent Universe journey (like a dream) and realizes he has succeeded. He accepts his fate with joy because he knows he is saving everyone he loves." }
    ],
    'Groundhog Day': [
        { question: "How long was Phil trapped?", answer: "Estimates vary from 10 years to 10,000 years. Director Harold Ramis suggested it was about 30-40 years—enough time to become a master pianist, ice sculptor, and speak French fluently." },
        { question: "Why did the loop stop?", answer: "The loop stopped because Phil changed internally. He moved from selfishness to genuine altruism. He stopped trying to manipulate Rita and started loving her and the townspeople selflessly." },
        { question: "Is there an explanation for the loop?", answer: "In early scripts, a voodoo curse by an ex-girlfriend explained it. Ramis wisely removed this to make the film more spiritual and philosophical. The lack of explanation makes the redemption arc more powerful." },
        { question: "What is the film really about?", answer: "It is a Buddhist parable about enlightenment. Phil goes through stages of denial, hedonism, despair (suicide), and finally acceptance and compassion (Bodhisattva), freeing himself from the cycle of samsara." }
    ],
    'Timecrimes': [
        { question: "Who is the bandaged man?", answer: "The bandaged man is Hector (the protagonist) from the future. He attacks his past self to force him into the time machine, ensuring the loop is closed. It is a classic causal loop." },
        { question: "Why does Hector do terrible things?", answer: "He realizes that for the timeline to remain consistent (and for him to survive), he *must* perform the actions that led him there, even the violent ones. He becomes a slave to causality." },
        { question: "Is it a comedy?", answer: "It has dark comedic elements because of Hector's clumsiness and the absurdity of his situation, but it is primarily a tense sci-fi thriller about the horrifying inevitability of fate." },
        { question: "What is the ending?", answer: "Hector 3 (the final version) sits in his lawn chair, exhausted, waiting for the rain. He has successfully manipulated events so his wife survives, but he is traumatized and trapped in a life he manipulated." }
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
    return TIME_TRAVEL_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
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
            "ratingCount": movieInfo?.audienceScore || 100 
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

// Build object map by tmdbId
export const COMPLETE_TIME_TRAVEL_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

export default COMPLETE_TIME_TRAVEL_DATABASE;