// utils/thrillerMovieData.js - COMPLETE SUSPENSE THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 807, imdbID: 'tt0114369', Title: 'Se7en', year: 1995, genre: 'Crime Thriller', runtime: 127, rank: 1 },
    { tmdbId: 146233, imdbID: 'tt1392214', Title: 'Prisoners', year: 2013, genre: 'Thriller', runtime: 153, rank: 2 },
    { tmdbId: 6977, imdbID: 'tt0477348', Title: 'No Country for Old Men', year: 2007, genre: 'Crime Thriller', runtime: 122, rank: 3 },
    { tmdbId: 274, imdbID: 'tt0102926', Title: 'The Silence of the Lambs', year: 1991, genre: 'Psychological Thriller', runtime: 118, rank: 4 },
    { tmdbId: 11423, imdbID: 'tt0353969', Title: 'Memories of Murder', year: 2003, genre: 'Crime', runtime: 132, rank: 5 },
    { tmdbId: 322, imdbID: 'tt0327056', Title: 'Mystic River', year: 2003, genre: 'Mystery', runtime: 138, rank: 6 },
    { tmdbId: 1422, imdbID: 'tt0407887', Title: 'The Departed', year: 2006, genre: 'Crime', runtime: 151, rank: 7 },
    { tmdbId: 395834, imdbID: 'tt5362988', Title: 'Wind River', year: 2017, genre: 'Mystery', runtime: 107, rank: 8 },
    { tmdbId: 210577, imdbID: 'tt2267998', Title: 'Gone Girl', year: 2014, genre: 'Thriller', runtime: 149, rank: 9 },
    { tmdbId: 2649, imdbID: 'tt0119174', Title: 'The Game', year: 1997, genre: 'Mystery', runtime: 129, rank: 10 }
];

// Helper to ensure default values
const createMovieData = (data) => ({
    suspenseIntensity: 90,
    pacing: 85,
    twistImpact: 80,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const SENSITIVE_TIMELINES = {
    807: { scenes: [] }, // Se7en (Clean in terms of sexual content in this list)
    146233: { scenes: [] }, // Prisoners
    6977: { scenes: [] }, // No Country for Old Men
    274: { scenes: [
        { start: "18:50", end: "18:57", type: "Explicit Scene", severity: "High" },
        { start: "1:36:30", end: "1:36:37", type: "Nudity (man)", severity: "Moderate" }
    ]},
    11423: { scenes: [
        { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
        { start: "54:34", end: "54:55", type: "Nudity (men)", severity: "Mild" },
        { start: "1:01:12", end: "1:02:40", type: "Sexual Content (man)", severity: "Moderate" },
        { start: "1:25:12", end: "1:25:47", type: "Partial nudity (woman)", severity: "Mild" }
    ]},
    322: { scenes: [
        { start: "11:45", end: "12:16", type: "Kissing", severity: "Mild" },
        { start: "2:09:45", end: "2:10:16", type: "Passionate kissing", severity: "Mild" }
    ]},
    1422: { scenes: [
        { start: "1:13:18", end: "1:13:22", type: "Kissing", severity: "Mild" },
        { start: "1:21:50", end: "1:22:20", type: "Passionate kissing + Undressing", severity: "Moderate" },
        { start: "1:24:40", end: "1:24:47", type: "Implied Sexual Gesture", severity: "Mild" }
    ]},
    395834: { scenes: [
        { start: "1:12:05", end: "1:12:10", type: "Kissing", severity: "Mild" },
        { start: "1:17:50", end: "1:18:20", type: "Sex", severity: "Moderate" }
    ]},
    210577: { scenes: [
        { start: "6:41", end: "6:59", type: "Sex", severity: "High" },
        { start: "20:57", end: "21:04", type: "Sex", severity: "High" },
        { start: "43:20", end: "44:54", type: "Nudity", severity: "High" },
        { start: "45:00", end: "45:10", type: "Sex", severity: "High" },
        { start: "2:00:10", end: "2:00:15", type: "Kissing", severity: "Mild" },
        { start: "2:03:50", end: "2:04:55", type: "Sex", severity: "High" },
        { start: "2:12:30", end: "2:13:45", type: "Nudity", severity: "High" }
    ]},
    2649: { scenes: [
        { start: "57:52", end: "59:30", type: "Sexual Content", severity: "Moderate" }
    ]}
};

export const FALLBACK_POSTERS = {
    807: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    146233: "https://image.tmdb.org/t/p/w500/tuRcCnSj.jpg",
    6977: "https://image.tmdb.org/t/p/w500/382jU9fVfJ6j3j4V0F4a94x.jpg", // Placeholder
    274: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQ.jpg",
    11423: "https://image.tmdb.org/t/p/w500/6yIsi26BNO99144Q9.jpg",
    322: "https://image.tmdb.org/t/p/w500/3p6g.jpg",
    1422: "https://image.tmdb.org/t/p/w500/3p6g.jpg", // Placeholder
    395834: "https://image.tmdb.org/t/p/w500/pyS3X7T14v8g.jpg", // Placeholder
    210577: "https://image.tmdb.org/t/p/w500/qymaJhucQUUwjpb8oiq.jpg", // Placeholder
    2649: "https://image.tmdb.org/t/p/w500/9o9o9o9o9o9o9o9o9o9o9o.jpg"
};

export const COMPLETE_MOVIE_DATA = {
    // 1. Se7en
    807: createMovieData({ 
        suspenseIntensity: 98, pacing: 90, twistImpact: 100, complexityLevel: "EXTREME", 
        dominantColor: "#8b1e3f", rating: 8.6, criticsScore: 83, audienceScore: 95, 
        director: "David Fincher", cast: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"], 
        boxOffice: "$327.3 million", budget: "$33 million", 
        dna: { Mystery: 50, Thriller: 40, Crime: 10 }, 
        scenes: [
            { time: 8, intensity: 45, label: 'Sin 1: Gluttony', color: '#b91c1c' },
            { time: 38, intensity: 65, label: 'Sin 3: Greed', color: '#f87171' },
            { time: 77, intensity: 85, label: 'Sin 5: Lust', color: '#fbbf24' },
            { time: 102, intensity: 92, label: 'Desert Confrontation', color: '#fde68a' },
            { time: 120, intensity: 98, label: "What's in the Box?", color: '#dc2626' }
        ], 
        synopsis: "Two disparate detectives—a weary, retiring veteran and an intense, young newcomer—are dropped into a perpetually rain-soaked, morally rotting city to hunt a chillingly methodical serial killer. This killer uses the seven deadly sins as the disturbing inspiration for his gruesome, symbolic murders. It’s a relentless, psychological nightmare that challenges the limits of justice and human endurance, culminating in one of cinema’s most notorious and unforgettable twists.", 
        themes: ["Sin", "Moral Decay", "Apathy", "Justice"], 
        awards: ["MTV Movie Award", "Oscar Nomination"] 
    }),

    // 2. Prisoners
    146233: createMovieData({ 
        suspenseIntensity: 96, pacing: 85, twistImpact: 90, complexityLevel: "HIGH", 
        dominantColor: "#042258", rating: 8.1, criticsScore: 81, audienceScore: 87, 
        director: "Denis Villeneuve", cast: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"], 
        boxOffice: "$122.1 million", budget: "$46 million", 
        dna: { Crime: 45, Thriller: 40, Drama: 15 }, 
        scenes: [
            { time: 20, intensity: 58, label: 'Abduction', color: '#a11515' },
            { time: 49, intensity: 75, label: 'First Search', color: '#f87171' },
            { time: 93, intensity: 82, label: 'Torture', color: '#fbbf24' },
            { time: 120, intensity: 90, label: 'Maze Hints', color: '#fde68a' },
            { time: 145, intensity: 96, label: 'Buried Alive', color: '#dc2626' }
        ], 
        synopsis: "When his six-year-old daughter and her friend vanish on Thanksgiving, a desperate father (Hugh Jackman) refuses to wait for the police. Convinced that the strange, frightened man initially arrested holds the key, he makes the morally agonizing decision to take justice into his own violent hands. This deeply tense and complex thriller forces a detective (Jake Gyllenhaal) to race against the clock to find the truth before the desperate father crosses a point of no return.", 
        themes: ["Vigilantism", "Faith", "Desperation", "Morality"], 
        awards: ["Oscar Nomination", "NBR Top Film"] 
    }),

    // 3. No Country for Old Men
    6977: createMovieData({ 
        suspenseIntensity: 95, pacing: 88, twistImpact: 85, complexityLevel: "EXTREME", 
        dominantColor: "#865c07", rating: 8.2, criticsScore: 93, audienceScore: 86, 
        director: "Coen Brothers", cast: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"], 
        boxOffice: "$171.6 million", budget: "$25 million", 
        dna: { Thriller: 50, Crime: 35, Drama: 15 }, 
        scenes: [
            { time: 15, intensity: 60, label: 'Coin Toss', color: '#b91c1c' },
            { time: 41, intensity: 73, label: 'Motel Shootout', color: '#f87171' },
            { time: 68, intensity: 82, label: 'Desert Standoff', color: '#fbbf24' },
            { time: 92, intensity: 89, label: 'The Decision', color: '#fde68a' },
            { time: 115, intensity: 95, label: 'Inevitable Fate', color: '#dc2626' }
        ], 
        synopsis: "In the desolate landscape of 1980 Texas, a hunter stumbles upon a drug deal gone spectacularly wrong, walking away with a suitcase full of cash. This act sets loose Anton Chigurh (Javier Bardem), a chillingly detached and philosophical hitman who represents pure, relentless, random violence. This Oscar-winning masterpiece is a meditation on fate, aging, and the unstoppable nature of chaos, told with the Coen Brothers' stark, unforgettable cinematic language.", 
        themes: ["Fate", "Violence", "Morality", "Chaos"], 
        awards: ["Best Picture Oscar", "Best Director Oscar"] 
    }),

    // 4. The Silence of the Lambs
    274: createMovieData({ 
        suspenseIntensity: 94, pacing: 92, twistImpact: 88, complexityLevel: "HIGH", 
        dominantColor: "#72696e", rating: 8.6, criticsScore: 95, audienceScore: 95, 
        director: "Jonathan Demme", cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"], 
        boxOffice: "$272.7 million", budget: "$19 million", 
        dna: { Thriller: 55, Crime: 30, Horror: 15 }, 
        scenes: [
            { time: 10, intensity: 35, label: 'First Interview', color: '#b91c1c' },
            { time: 46, intensity: 67, label: 'Lecter Escapes', color: '#f87171' },
            { time: 82, intensity: 79, label: 'Night Vision Stalk', color: '#fbbf24' },
            { time: 102, intensity: 89, label: 'Buffalo Bill', color: '#fde68a' },
            { time: 113, intensity: 94, label: 'Ending', color: '#dc2626' }
        ], 
        synopsis: "A young, determined FBI trainee, Clarice Starling (Jodie Foster), is forced to seek the help of the brilliant, imprisoned psychopath and former psychiatrist, Dr. Hannibal Lecter (Anthony Hopkins). Her mission: to gain insight into the mind of a new, active serial killer named Buffalo Bill. This film is a definitive masterclass in suspense, featuring one of cinema's most famous and unsettling duels of intellect and will.", 
        themes: ["Transformation", "Manipulation", "Identity", "Fear"], 
        awards: ["Big Five Oscars", "Golden Globe"] 
    }),

    // 5. Memories of Murder
    11423: createMovieData({ 
        suspenseIntensity: 93, pacing: 85, twistImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#313a35", rating: 8.1, criticsScore: 95, audienceScore: 94, 
        director: "Bong Joon Ho", cast: ["Song Kang-ho", "Kim Sang-kyung", "Kim Roi-ha"], 
        boxOffice: "$20.1 million", budget: "$2.8 million", 
        dna: { Crime: 50, Thriller: 35, Drama: 15 }, 
        scenes: [
            { time: 18, intensity: 39, label: 'First Crime Scene', color: '#b91c1c' },
            { time: 50, intensity: 59, label: 'Railroad Interrogation', color: '#f87171' },
            { time: 87, intensity: 70, label: 'Suspect Hunt', color: '#fbbf24' },
            { time: 110, intensity: 85, label: 'The Confrontation', color: '#fde68a' },
            { time: 128, intensity: 93, label: 'Haunting End', color: '#dc2626' }
        ], 
        synopsis: "Set in 1980s South Korea, this slow-burning, dark-humored procedural follows two local detectives with vastly different approaches to investigation—one brutal and instinctual, the other sharp and clinical—as they chase the country's first confirmed serial killer. Against a politically unstable backdrop, the film masterfully captures the frustration, futility, and eventual psychic toll of hunting a ghost in a system ill-equipped to find him.", 
        themes: ["Incompetence", "Truth", "Politics", "Failure"], 
        awards: ["San Sebastian Winner", "Asian Film Award"] 
    }),

    // 6. Mystic River
    322: createMovieData({ 
        suspenseIntensity: 91, pacing: 80, twistImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#152c48", rating: 7.9, criticsScore: 88, audienceScore: 89, 
        director: "Clint Eastwood", cast: ["Sean Penn", "Tim Robbins", "Kevin Bacon"], 
        boxOffice: "$156.6 million", budget: "$30 million", 
        dna: { Crime: 45, Drama: 40, Thriller: 15 }, 
        scenes: [
            { time: 12, intensity: 41, label: 'Abduction', color: '#b91c1c' },
            { time: 48, intensity: 60, label: 'Police Interrogation', color: '#f87171' },
            { time: 91, intensity: 72, label: 'Confession', color: '#fbbf24' },
            { time: 123, intensity: 84, label: 'Revelation', color: '#fde68a' },
            { time: 131, intensity: 91, label: 'Final Loss', color: '#dc2626' }
        ], 
        synopsis: "The murder of a daughter reunites three childhood friends—a victim, a detective, and a suspect—leading to a dark, complex investigation saturated with long-held secrets, suspicion, and deep-seated guilt. This intense psychological drama explores how the indelible trauma of a shared past event can catastrophically intersect with a modern tragedy, ultimately questioning the nature of moral consequence and the true meaning of justice.", 
        themes: ["Trauma", "Friendship", "Destiny", "Grief"], 
        awards: ["2 Oscars", "Cannes Golden Coach"] 
    }),

    // 7. The Departed
    1422: createMovieData({ 
        suspenseIntensity: 90, pacing: 95, twistImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#b84f3a", rating: 8.5, criticsScore: 90, audienceScore: 94, 
        director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"], 
        boxOffice: "$291.5 million", budget: "$90 million", 
        dna: { Crime: 50, Thriller: 35, Drama: 15 }, 
        scenes: [
            { time: 20, intensity: 55, label: 'Undercover Initiation', color: '#b91c1c' },
            { time: 60, intensity: 73, label: 'First Betrayal', color: '#f87171' },
            { time: 102, intensity: 78, label: 'Roof Scene', color: '#fbbf24' },
            { time: 137, intensity: 82, label: 'Shootout', color: '#fde68a' },
            { time: 149, intensity: 90, label: 'Finale', color: '#dc2626' }
        ], 
        synopsis: "In Boston, the police department plants a young undercover cop (Leonardo DiCaprio) deep within the inner circle of a ruthless Irish mob boss (Jack Nicholson). Simultaneously, the mob boss plants his own loyal mole (Matt Damon) high inside the state police force. This high-octane, violent saga of betrayal and corruption becomes a relentless, heart-pounding race as both men desperately try to expose and eliminate the other before their own identity is revealed.", 
        themes: ["Identity", "Loyalty", "Betrayal", "Double Life"], 
        awards: ["4 Oscars", "Best Picture"] 
    }),

    // 8. Wind River
    395834: createMovieData({ 
        suspenseIntensity: 89, pacing: 82, twistImpact: 80, complexityLevel: "HIGH", 
        dominantColor: "#a6cef4", rating: 7.7, criticsScore: 88, audienceScore: 90, 
        director: "Taylor Sheridan", cast: ["Jeremy Renner", "Elizabeth Olsen", "Graham Greene"], 
        boxOffice: "$45.2 million", budget: "$11 million", 
        dna: { Crime: 45, Thriller: 40, Drama: 15 }, 
        scenes: [
            { time: 9, intensity: 33, label: 'Body Found', color: '#b91c1c' },
            { time: 41, intensity: 58, label: 'FBI Arrival', color: '#f87171' },
            { time: 78, intensity: 74, label: 'Flashbacks', color: '#fbbf24' },
            { time: 90, intensity: 81, label: 'Cabin Showdown', color: '#fde68a' },
            { time: 104, intensity: 89, label: 'Closing', color: '#dc2626' }
        ], 
        synopsis: "A U.S. Fish and Wildlife service agent (Jeremy Renner), deeply connected to the local Native American community, discovers the body of a young woman on the isolated, snow-covered Wind River Reservation. He teams up with a rookie FBI agent (Elizabeth Olsen) to solve the murder. This film is a stark, beautifully bleak, and emotionally devastating mystery that shines a necessary light on systemic violence and justice for the forgotten.", 
        themes: ["Grief", "Justice", "Isolation", "Survival"], 
        awards: ["Cannes Un Certain Regard Director"] 
    }),

    // 9. Gone Girl
    210577: createMovieData({ 
        suspenseIntensity: 88, pacing: 90, twistImpact: 98, complexityLevel: "HIGH", 
        dominantColor: "#e6c79c", rating: 8.1, criticsScore: 87, audienceScore: 87, 
        director: "David Fincher", cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"], 
        boxOffice: "$369.3 million", budget: "$61 million", 
        dna: { Thriller: 50, Drama: 30, Mystery: 20 }, 
        scenes: [
            { time: 23, intensity: 45, label: 'Disappearance', color: '#b91c1c' },
            { time: 54, intensity: 67, label: 'Clue Hunt', color: '#f87171' },
            { time: 92, intensity: 76, label: 'Twist', color: '#403b2dff' },
            { time: 127, intensity: 84, label: 'Media Frenzy', color: '#fde68a' },
            { time: 145, intensity: 88, label: 'Revelation', color: '#dc2626' }
        ], 
        synopsis: "On the morning of his fifth wedding anniversary, Nick Dunne (Ben Affleck) finds his beautiful, brilliant wife, Amy, missing, with signs of a struggle. Under intense media scrutiny and relentless police questioning, Nick's shifty behavior and mounting lies lead everyone to ask the chilling question: Did he murder his wife? This dark, brilliant Fincher mystery is a twisted, cynical examination of marriage and media manipulation that keeps the audience guessing with shocking, unpredictable revelations.", 
        themes: ["Marriage", "Media", "Deception", "Psychopathy"], 
        awards: ["Oscar Nomination (Pike)", "Critics Choice"] 
    }),

    // 10. The Game
    2649: createMovieData({ 
        suspenseIntensity: 87, pacing: 88, twistImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#0d50c3", rating: 7.7, criticsScore: 77, audienceScore: 84, 
        director: "David Fincher", cast: ["Michael Douglas", "Sean Penn", "Deborah Kara Unger"], 
        boxOffice: "$109.4 million", budget: "$50 million", 
        dna: { Thriller: 55, Mystery: 30, Drama: 15 }, 
        scenes: [
            { time: 13, intensity: 29, label: 'Birthday Offer', color: '#b91c1c' },
            { time: 43, intensity: 52, label: 'First Twist', color: '#f87171' },
            { time: 62, intensity: 70, label: 'Trust Issues', color: '#fbbf24' },
            { time: 101, intensity: 79, label: 'Buried', color: '#fde68a' },
            { time: 120, intensity: 87, label: 'Ultimate Reveal', color: '#dc2626' }
        ], 
        synopsis: "Nicholas Van Orton (Michael Douglas), a cold, immensely wealthy investment banker, receives a strange birthday gift from his estranged brother: participation in a mysterious, real-life \"Game.\" As the line between the scripted game and his actual life begins to dangerously dissolve, Nicholas is plunged into a terrifying, paranoia-soaked world where he loses control of everything. This is a spectacular, mind-bending thriller that constantly shifts the stakes until the surprising final moment.", 
        themes: ["Reality vs Illusion", "Control", "Wealth", "Brotherhood"], 
        awards: ["Saturn Award Nomination"] 
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

// 8️⃣ THRILLER_FAQS
export const THRILLER_FAQS = {
    'Se7en': [
        { question: "Why does John Doe turn himself in?", answer: "John Doe surrenders to force Detective Mills to become 'Wrath', completing his masterpiece of the Seven Deadly Sins." },
        { question: "What is the significance of the constant rain?", answer: "The rain creates an oppressive atmosphere of moral decay and hopelessness, symbolizing a world that cannot be washed clean." },
        { question: "What is in the box?", answer: "The severed head of Mills' pregnant wife, Tracy. It is the catalyst that breaks Mills and completes the final sin." },
        { question: "Why does Somerset quote Hemingway?", answer: "It signifies his decision not to retire but to stay and fight the darkness, acknowledging the world is worth saving despite its evil." }
    ],
    'Prisoners': [
        { question: "Does Loki find Keller at the end?", answer: "The faint whistle implies Loki hears him, leaving the ending ambiguous but hopeful that Keller will be rescued." },
        { question: "What is the maze symbolism?", answer: "The maze represents the psychological trap of obsession and the convoluted path characters take to find the truth, often losing themselves." },
        { question: "Why does the film use religious imagery?", answer: "It contrasts faith with brutality, questioning whether religion provides moral strength or blind justification for terrible acts." },
        { question: "Is the ending happy?", answer: "It is bittersweet. The children are saved, but Keller is a broken man who has committed torture, likely facing prison if rescued." }
    ],
    'No Country for Old Men': [
        { question: "What does the ending mean?", answer: "Sheriff Bell's dream signifies the end of the 'old way' of law and order. He realizes he cannot fight the new, chaotic evil represented by Chigurh." },
        { question: "Is Anton Chigurh a human or a force of nature?", answer: "He is both. A psychopathic hitman who views himself as an instrument of fate, making him terrifyingly unpredictable yet principled." },
        { question: "Why does Chigurh use a coin toss?", answer: "It symbolizes the randomness of fate and death. He abdicates responsibility to chance, highlighting the lack of control victims have over their destiny." },
        { question: "What is the significance of the captive bolt pistol?", answer: "It is a slaughterhouse tool, showing Chigurh views his victims not as humans but as livestock to be dispatched efficiently." }
    ],
    'The Silence of the Lambs': [
        { question: "Why does Lecter help Clarice?", answer: "He respects her intellect and courtesy. Their relationship is a transactional 'quid pro quo' where he trades clues for access to her mind." },
        { question: "What do the moths symbolize?", answer: "Transformation. Buffalo Bill wants to shed his skin and become something new and beautiful, just as the moth emerges from a cocoon." },
        { question: "Is Lecter a villain or anti-hero?", answer: "He is a charismatic villain. While he helps catch Bill, he remains a monster who kills without remorse, making the audience complicit in his freedom." },
        { question: "Why doesn't Clarice quit?", answer: "She is driven by the trauma of the screaming lambs. Saving Catherine Martin is her way of silencing the screams of the innocent in her own mind." }
    ],
    'Memories of Murder': [
        { question: "Why does Detective Park look at the camera?", answer: "Bong Joon Ho intended this for the real killer. He breaks the fourth wall to ask the uncaptured murderer, 'Are you watching this?'" },
        { question: "Is the killer in the movie?", answer: "The film implies the killer is an ordinary person hiding in plain sight. The lack of capture emphasizes the banality and invisibility of evil." },
        { question: "Why do the detectives fail?", answer: "Systemic incompetence, lack of technology, and police brutality. The film critiques the era's authoritarian regime over the detectives' individual failures." },
        { question: "What does the tunnel symbolize?", answer: "The dark tunnel represents the abyss of the unknown. Firing into it symbolizes the detectives' futile rage against an evil they cannot see or stop." }
    ],
    'Mystic River': [
        { question: "Is Dave guilty?", answer: "No. Dave killed a pedophile, not Katie. His inability to articulate this due to childhood trauma leads to his tragic, wrongful death." },
        { question: "Who really killed Katie?", answer: "It was an accidental shooting by neighborhood kids. The tragedy is that her death was senseless, not the result of a grand conspiracy." },
        { question: "What does the river symbolize?", answer: "It represents the burying of sins. The river washes away evidence but traps the guilt and trauma that flows beneath the surface of the community." },
        { question: "Why does Sean let Jimmy go?", answer: "Sean prioritizes tribal loyalty over the law. He accepts the lie to maintain the social order, becoming complicit in the cycle of corruption." }
    ],
    'The Departed': [
        { question: "Why does everyone die at the end?", answer: "Scorsese's nihilistic ending shows that in a world of lies and betrayal, no one survives clean. Violence begets violence in a closed loop." },
        { question: "What does the rat symbolize?", answer: "The final shot of the rat symbolizes the pervasive corruption. Everyone was 'ratting' on everyone else, and the system itself is infested." },
        { question: "Is it a remake?", answer: "Yes, it is a remake of the Hong Kong film 'Infernal Affairs.' Scorsese adapted the story to fit the Irish-American culture of Boston." },
        { question: "Why does Dignam kill Sullivan?", answer: "Dignam represents the only character with a (brutal) code. He kills Sullivan to avenge Queenan and Costigan, serving as the final agent of karma." }
    ],
    'Wind River': [
        { question: "Why is the setting important?", answer: "The harsh winter landscape is a character itself. It kills the unprepared and hides the truth, symbolizing the indifference of the world to the victims' suffering." },
        { question: "What is the 'Why' behind the murder?", answer: "There is no grand motive, just boredom and drunken violence. This banality makes the crime even more tragic and infuriating." },
        { question: "What does the 'death face' paint mean?", answer: "It is a reclaiming of heritage. Lambert paints the death mask to honor the victim's culture, giving her the dignity in death she was denied in life." },
        { question: "Is it based on a true story?", answer: "While fictional, it is inspired by thousands of actual cases of missing and murdered Indigenous women, highlighting a real-world legal crisis." }
    ],
    'Gone Girl': [
        { question: "Did Amy plan everything?", answer: "Yes. Amy orchestrated her disappearance to frame Nick for murder as punishment for his infidelity and laziness. She is the ultimate unreliable narrator." },
        { question: "Why does Nick stay with her?", answer: "He stays out of fear and a twisted realization that they deserve each other. They are 'partners in crime' trapped in a toxic performance of a perfect marriage." },
        { question: "Is Amy a psychopath?", answer: "She exhibits psychopathic traits: lack of empathy, manipulation, and narcissism. She views people as props in her life's narrative." },
        { question: "What is the 'Cool Girl' monologue?", answer: "It is Amy's critique of the persona women adopt to please men. It reveals her resentment at having to perform a role that erased her true self." }
    ],
    'The Game': [
        { question: "Was the game real?", answer: "The events were staged, but the danger felt real to Nicholas. The 'game' was an elaborate, live-action role-play designed to break his ego." },
        { question: "Did the brother really want to help?", answer: "Yes. Despite the trauma, the brother's intention was to save Nicholas from his suicidal depression and isolation, albeit through extreme methods." },
        { question: "What does the jump signify?", answer: "It is a leap of faith. Nicholas has to let go of his need for control and accept death to be reborn. It is the climax of his psychological transformation." },
        { question: "Is the ending happy?", answer: "It is ambiguous. Nicholas is 'cured,' but the trauma of the experience lingers. The film questions the morality of such extreme psychological manipulation." }
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
    return THRILLER_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A gripping suspense thriller`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Acclaimed Director' },
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

// Build object map by tmdbId
export const COMPLETE_THRILLER_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

export default COMPLETE_THRILLER_DATABASE;