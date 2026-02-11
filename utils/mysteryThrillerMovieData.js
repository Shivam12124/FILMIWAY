// utils/mysteryThrillerMovieData.js - COMPLETE MYSTERY THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 807, imdbID: 'tt0114369', Title: 'Se7en', year: 1995, genre: 'Crime Thriller', runtime: 127, rank: 1 },
    { tmdbId: 11324, imdbID: 'tt1130884', Title: 'Shutter Island', year: 2010, genre: 'Mystery', runtime: 138, rank: 2 },
    { tmdbId: 146233, imdbID: 'tt1392214', Title: 'Prisoners', year: 2013, genre: 'Thriller', runtime: 153, rank: 3 },
    { tmdbId: 1949, imdbID: 'tt0443706', Title: 'Zodiac', year: 2007, genre: 'Mystery', runtime: 157, rank: 4 },
    { tmdbId: 210577, imdbID: 'tt2267998', Title: 'Gone Girl', year: 2014, genre: 'Thriller', runtime: 149, rank: 5 },
    { tmdbId: 11423, imdbID: 'tt0353969', Title: 'Memories of Murder', year: 2003, genre: 'Crime', runtime: 132, rank: 6 },
    { tmdbId: 411088, imdbID: 'tt4857264', Title: 'The Invisible Guest', year: 2016, genre: 'Mystery', runtime: 106, rank: 7 },
    { tmdbId: 491584, imdbID: 'tt7282468', Title: 'Burning', year: 2018, genre: 'Mystery', runtime: 148, rank: 8 },
    { tmdbId: 2649, imdbID: 'tt0119174', Title: 'The Game', year: 1997, genre: 'Mystery', runtime: 129, rank: 9 },
    { tmdbId: 2832, imdbID: 'tt0119177', Title: 'Identity', year: 2003, genre: 'Mystery', runtime: 90, rank: 10 }
];

// Helper to ensure default values
const createMovieData = (data) => ({
    mysteryComplexity: 90,
    psychologicalTension: 85,
    narrativeDepth: 80,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const SENSITIVE_TIMELINES = {
    807: { scenes: [] }, // Se7en
    11324: { scenes: [
        { start: "1:10:43", end: "1:10:47", type: "Nudity (men)", severity: "Moderate" },
        { start: "1:59:03", end: "1:59:06", type: "Casual kissing", severity: "Mild" }
    ]},
    146233: { scenes: [] }, // Prisoners
    1949: { scenes: [] }, // Zodiac
    210577: { scenes: [
        { start: "6:41", end: "6:59", type: "Sex", severity: "High" },
        { start: "20:57", end: "21:04", type: "Sex", severity: "High" },
        { start: "43:20", end: "44:54", type: "Passionate kissing and partial nudity", severity: "High" },
        { start: "45:00", end: "45:10", type: "Sex", severity: "High" },
        { start: "2:00:10", end: "2:00:15", type: "Kissing", severity: "Mild" },
        { start: "2:03:50", end: "2:04:55", type: "Sex", severity: "High" },
        { start: "2:12:30", end: "2:13:45", type: "Nudity", severity: "High" }
    ]},
    11423: { scenes: [
        { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
        { start: "54:34", end: "54:55", type: "Nudity (men)", severity: "Mild" },
        { start: "1:01:12", end: "1:02:40", type: "Sexual Content (man)", severity: "Moderate" },
        { start: "1:25:12", end: "1:25:47", type: "Partial nudity (woman)", severity: "Mild" }
    ]},
    411088: { scenes: [] }, // The Invisible Guest
    491584: { scenes: [
        { start: "15:00", end: "18:20", type: "Passionate kissing + sex", severity: "High" },
        { start: "29:30", end: "30:00", type: "Masturbation not graphic (man)", severity: "Moderate" },
        { start: "35:10", end: "35:39", type: "Masturbation not graphic (man)", severity: "Moderate" },
        { start: "1:08:35", end: "1:11:25", type: "Partial nudity (woman)", severity: "Mild" },
        { start: "2:13:30", end: "2:14:07", type: "Masturbation not graphic (man)", severity: "Moderate" }
    ]},
    2649: { scenes: [
        { start: "57:52", end: "59:30", type: "Sexual Content", severity: "Moderate" }
    ]},
    2832: { scenes: [] } // Identity
};

export const FALLBACK_POSTERS = {
    807: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    11324: "https://image.tmdb.org/t/p/w500/unyHKrkQ6UPUxyBevzMpTpF6hOL.jpg",
    146233: "https://image.tmdb.org/t/p/w500/tuRcCnSj.jpg",
    1949: "https://image.tmdb.org/t/p/w500/qZ8jV3b8g1.jpg",
    210577: "https://image.tmdb.org/t/p/w500/qymaJhucQUUwjpb8oiq.jpg",
    11423: "https://image.tmdb.org/t/p/w500/6yIsi26BNO99144Q9.jpg",
    411088: "https://image.tmdb.org/t/p/w500/fptnZJbLzKfWOgkGQSRLQOYWKCt.jpg",
    491584: "https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
    2649: "https://image.tmdb.org/t/p/w500/9o9o9o9o9o9o9o9o9o9o9o.jpg",
    2832: "https://image.tmdb.org/t/p/w500/ppad3tK7S2pX6Y6B0U5B5F37a5s.jpg" // Placeholder for Identity
};

export const COMPLETE_MOVIE_DATA = {
    // 1. Se7en
    807: createMovieData({ 
        mysteryComplexity: 98, psychologicalTension: 98, narrativeDepth: 95, complexityLevel: "EXTREME", 
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

    // 2. Shutter Island
    11324: createMovieData({ 
        mysteryComplexity: 97, psychologicalTension: 95, narrativeDepth: 90, complexityLevel: "HIGH", 
        dominantColor: "#1c253d", rating: 8.2, criticsScore: 68, audienceScore: 77, 
        director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"], 
        boxOffice: "$294.8 million", budget: "$80 million", 
        dna: { Mystery: 50, Thriller: 40, Drama: 10 }, 
        scenes: [
            { time: 14, intensity: 38, label: 'Ferry Arrival', color: '#223344' },
            { time: 42, intensity: 60, label: 'First Search', color: '#467ecc' },
            { time: 83, intensity: 71, label: 'Night Storm', color: '#a8e063' },
            { time: 110, intensity: 89, label: "The Lighthouse", color: '#fbbf24' },
            { time: 136, intensity: 97, label: "Truth Revealed", color: '#e94e77' }
        ], 
        synopsis: "In 1954, two U.S. Marshals arrive at a remote, foreboding island asylum for the criminally insane to investigate the baffling disappearance of a patient. As a massive hurricane cuts them off from the mainland, the lead investigator (Leonardo DiCaprio) begins to unravel, tormented by flashes of his own violent past and growing suspicions about the true nature of the isolated hospital. It is a masterful, reality-bending plunge into paranoia where nothing is as it seems.", 
        themes: ["Sanity", "Trauma", "Denial", "Reality"], 
        awards: ["Teen Choice Award", "National Board of Review"] 
    }),

    // 3. Prisoners
    146233: createMovieData({ 
        mysteryComplexity: 96, psychologicalTension: 98, narrativeDepth: 92, complexityLevel: "HIGH", 
        dominantColor: "#032b77", rating: 8.1, criticsScore: 81, audienceScore: 87, 
        director: "Denis Villeneuve", cast: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"], 
        boxOffice: "$122.1 million", budget: "$46 million", 
        dna: { Crime: 45, Thriller: 40, Mystery: 15 }, 
        scenes: [
            { time: 20, intensity: 58, label: 'Abduction', color: '#a11515' },
            { time: 49, intensity: 75, label: 'First Search', color: '#f87171' },
            { time: 93, intensity: 82, label: 'Torture', color: '#fbbf24' },
            { time: 120, intensity: 90, label: 'Maze Hints', color: '#fde68a' },
            { time: 145, intensity: 96, label: 'Buried Alive', color: '#dc2626' }
        ], 
        synopsis: "When his six-year-old daughter and her friend vanish on Thanksgiving, a desperate father (Hugh Jackman) refuses to wait for the police. Convinced that the strange, frightened man (Paul Dano) initially arrested holds the key, he makes the morally agonizing decision to take justice into his own violent hands. This deeply tense and complex thriller forces a detective (Jake Gyllenhaal) to race against the clock to find the truth before the desperate father crosses a point of no return.", 
        themes: ["Vigilantism", "Faith", "Desperation", "Morality"], 
        awards: ["Oscar Nomination", "NBR Top Film"] 
    }),

    // 4. Zodiac
    1949: createMovieData({ 
        mysteryComplexity: 94, psychologicalTension: 88, narrativeDepth: 95, complexityLevel: "EXTREME", 
        dominantColor: "#4a6187", rating: 7.7, criticsScore: 90, audienceScore: 89, 
        director: "David Fincher", cast: ["Jake Gyllenhaal", "Robert Downey Jr.", "Mark Ruffalo"], 
        boxOffice: "$84.8 million", budget: "$65 million", 
        dna: { Mystery: 60, Thriller: 25, Crime: 15 }, 
        scenes: [
            { time: 14, intensity: 30, label: 'Lake Berryessa', color: '#7285a5' },
            { time: 67, intensity: 58, label: 'Paul Stine', color: '#9a8e3f' },
            { time: 102, intensity: 71, label: 'Basement', color: '#bcafab' },
            { time: 134, intensity: 87, label: 'Confrontation', color: '#ebc634' },
            { time: 148, intensity: 94, label: "Graysmith's Realization", color: '#b23c65' }
        ], 
        synopsis: "A meticulous, atmospheric recreation of the true story of the infamous Zodiac Killer, who terrorized the San Francisco Bay Area in the late 1960s and 70s. The film follows four men—a reporter, two police inspectors, and a cartoonist—as they become utterly consumed by the pursuit of the killer’s cryptic ciphers and identifying the elusive figure. It's a gripping, years-long investigation that expertly captures the maddening frustration of an unsolved mystery.", 
        themes: ["Obsession", "Truth", "Media Influence", "Time"], 
        awards: ["Saturn Award", "Cannes Selection"] 
    }),

    // 5. Gone Girl
    210577: createMovieData({ 
        mysteryComplexity: 95, psychologicalTension: 90, narrativeDepth: 85, complexityLevel: "HIGH", 
        dominantColor: "#a6785d", rating: 8.1, criticsScore: 87, audienceScore: 87, 
        director: "David Fincher", cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"], 
        boxOffice: "$369.3 million", budget: "$61 million", 
        dna: { Mystery: 50, Thriller: 40, Drama: 10 }, 
        scenes: [
            { time: 15, intensity: 38, label: 'Anniversary', color: '#567ccd' },
            { time: 49, intensity: 62, label: 'Detective Arrives', color: '#9bcc56' },
            { time: 93, intensity: 77, label: 'Amy Reveal', color: '#ccb656' },
            { time: 126, intensity: 86, label: 'Plot Twist', color: '#dcbd56' },
            { time: 145, intensity: 95, label: 'Return Home', color: '#c65454' }
        ], 
        synopsis: "On the morning of his fifth wedding anniversary, Nick Dunne (Ben Affleck) finds his beautiful, brilliant wife, Amy, missing, with signs of a struggle. Under intense media scrutiny and relentless police questioning, Nick's shifty behavior and mounting lies lead everyone to ask the chilling question: Did he murder his wife? This dark, brilliant Fincher mystery is a twisted, cynical examination of marriage and media manipulation that keeps the audience guessing with shocking, unpredictable revelations.", 
        themes: ["Marriage", "Media", "Deception", "Psychopathy"], 
        awards: ["Oscar Nomination (Pike)", "Critics Choice"] 
    }),

    // 6. Memories of Murder
    11423: createMovieData({ 
        mysteryComplexity: 97, psychologicalTension: 92, narrativeDepth: 95, complexityLevel: "HIGH", 
        dominantColor: "#313a35", rating: 8.1, criticsScore: 95, audienceScore: 94, 
        director: "Bong Joon Ho", cast: ["Song Kang-ho", "Kim Sang-kyung", "Kim Roi-ha"], 
        boxOffice: "$20.1 million", budget: "$2.8 million", 
        dna: { Mystery: 55, Crime: 25, Thriller: 20 }, 
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

    // 7. The Invisible Guest
    411088: createMovieData({ 
        mysteryComplexity: 93, psychologicalTension: 88, narrativeDepth: 80, complexityLevel: "HIGH", 
        dominantColor: "#5d6c8f", rating: 8.1, criticsScore: 67, audienceScore: 86, 
        director: "Oriol Paulo", cast: ["Mario Casas", "Ana Wagener", "Jose Coronado"], 
        boxOffice: "$33.5 million", budget: "$4 million", 
        dna: { Mystery: 60, Thriller: 40, Drama: 0 }, 
        scenes: [
            { time: 17, intensity: 34, label: 'Lawyer Visit', color: '#756967' },
            { time: 37, intensity: 54, label: 'Flashback', color: '#aeae58' },
            { time: 63, intensity: 70, label: 'Testimony', color: '#5681ae' },
            { time: 85, intensity: 85, label: 'Twist', color: '#a67ca8' },
            { time: 101, intensity: 93, label: "Truth", color: '#1f8a70' }
        ], 
        synopsis: "A successful young businessman is locked down in a hotel room with his formidable defense attorney after being charged with the murder of his mistress. Over the course of one night, he recounts his version of the fatal encounter—a complex story of a car crash, blackmail, and misdirection. Every piece of his confession is a lie, a half-truth, or a calculated misdirection, forcing the lawyer (and the audience) to frantically assemble the true, shocking sequence of events before dawn.", 
        themes: ["Deception", "Justice", "Perspective", "Guilt"], 
        awards: ["Portland International Film Festival"] 
    }),

    // 8. Burning
    491584: createMovieData({ 
        mysteryComplexity: 92, psychologicalTension: 90, narrativeDepth: 98, complexityLevel: "EXTREME", 
        dominantColor: "#c4377a", rating: 7.5, criticsScore: 94, audienceScore: 82, 
        director: "Lee Chang-dong", cast: ["Yoo Ah-in", "Steven Yeun", "Jeon Jong-seo"], 
        boxOffice: "$7.2 million", budget: "$4 million", 
        dna: { Mystery: 65, Drama: 25, Thriller: 10 }, 
        scenes: [
            { time: 18, intensity: 23, label: 'Greenhouse', color: '#2ef2a1' },
            { time: 54, intensity: 55, label: 'Vanishing', color: '#dbe039' },
            { time: 102, intensity: 73, label: 'Dinner', color: '#e0d339' },
            { time: 137, intensity: 89, label: 'The Confession', color: '#f94040' },
            { time: 142, intensity: 92, label: "Ending", color: '#b17e56' }
        ], 
        synopsis: "A lonely, working-class young man runs into a former childhood acquaintance who introduces him to Ben (Steven Yeun), a wealthy, smooth-talking, and utterly enigmatic man. After the woman suddenly vanishes without a trace, the jealous and suspicious protagonist becomes convinced that Ben is a secret serial arsonist—or perhaps something far worse. This deeply psychological, slow-burn mystery is an ambiguous, unsettling masterpiece of dread and modern class envy.", 
        themes: ["Class", "Ambiguity", "Obsession", "Disappearance"], 
        awards: ["Cannes FIPRESCI", "Asian Film Award"] 
    }),

    // 9. The Game
    2649: createMovieData({ 
        mysteryComplexity: 90, psychologicalTension: 85, narrativeDepth: 80, complexityLevel: "HIGH", 
        dominantColor: "#062992", rating: 7.7, criticsScore: 77, audienceScore: 84, 
        director: "David Fincher", cast: ["Michael Douglas", "Sean Penn", "Deborah Kara Unger"], 
        boxOffice: "$109.4 million", budget: "$50 million", 
        dna: { Mystery: 50, Thriller: 40, Drama: 10 }, 
        scenes: [
            { time: 13, intensity: 32, label: 'Birthday', color: '#6d4c41' },
            { time: 43, intensity: 58, label: 'Breakdown', color: '#6d8f41' },
            { time: 66, intensity: 73, label: 'Buried Alive', color: '#418f6d' },
            { time: 109, intensity: 80, label: 'Rooftop', color: '#dc8841' },
            { time: 129, intensity: 90, label: 'The End', color: '#d84315' }
        ], 
        synopsis: "Nicholas Van Orton (Michael Douglas), a cold, immensely wealthy investment banker, receives a strange birthday gift from his estranged brother: participation in a mysterious, real-life \"Game.\" As the line between the scripted game and his actual life begins to dangerously dissolve, Nicholas is plunged into a terrifying, paranoia-soaked world where he loses control of everything. This is a spectacular, mind-bending thriller that constantly shifts the stakes until the surprising final moment.", 
        themes: ["Reality vs Illusion", "Control", "Wealth", "Brotherhood"], 
        awards: ["Saturn Award Nomination"] 
    }),

    // 10. Identity
    2832: createMovieData({ 
        mysteryComplexity: 93, psychologicalTension: 88, narrativeDepth: 82, complexityLevel: "HIGH", 
        dominantColor: "#3e464f", rating: 7.3, criticsScore: 63, audienceScore: 75, 
        director: "James Mangold", cast: ["John Cusack", "Ray Liotta", "Amanda Peet"], 
        boxOffice: "$90.2 million", budget: "$28 million", 
        dna: { Mystery: 65, Thriller: 35, Horror: 0 }, 
        scenes: [
            { time: 6, intensity: 29, label: 'Car Accident', color: '#19799a' },
            { time: 31, intensity: 47, label: 'First Murder', color: '#eb4034' },
            { time: 53, intensity: 66, label: 'Storm', color: '#b1a9c6' },
            { time: 78, intensity: 83, label: 'Reveal', color: '#ebae34' },
            { time: 90, intensity: 93, label: 'Final Twist', color: '#6839eb' }
        ], 
        synopsis: "Ten strangers—including a cop transporting a killer, a fading actress, a married couple, and a limousine driver—are stranded at a desolate Nevada motel during a fierce storm. When they begin to be violently killed off one by one, they realize the murders are connected. This frantic, high-tension mystery culminates in a truly unforgettable, twist-heavy final act that reframes everything you thought you knew about the identity of the killer and the victims.", 
        themes: ["Identity", "Isolation", "Twist", "Psychology"], 
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

// 8️⃣ MYSTERY_THRILLER_FAQS
export const MYSTERY_THRILLER_FAQS = {
    'Se7en': [
        { question: "Why does John Doe turn himself in?", answer: "John Doe surrenders to force Detective Mills to become 'Wrath', completing his masterpiece of the Seven Deadly Sins." },
        { question: "What is the significance of the constant rain?", answer: "The rain creates an oppressive atmosphere of moral decay and hopelessness, symbolizing a world that cannot be washed clean." },
        { question: "What is in the box?", answer: "The severed head of Mills' pregnant wife, Tracy. It is the catalyst that breaks Mills and completes the final sin." },
        { question: "Why does Somerset quote Hemingway?", answer: "It signifies his decision not to retire but to stay and fight the darkness, acknowledging the world is worth saving despite its evil." }
    ],
    'Shutter Island': [
        { question: "Is Teddy Daniels sane?", answer: "No. Teddy Daniels is actually Andrew Laeddis, a patient at the asylum who murdered his manic-depressive wife after she drowned their children." },
        { question: "What does the ending line mean?", answer: "The line 'Which would be worse - to live as a monster, or to die as a good man?' reveals that the treatment worked, but Andrew chooses to be lobotomized rather than live with his guilt." },
        { question: "What does the fire represent?", answer: "Fire is associated with Andrew's delusions (the fake Laeddis). It symbolizes his insanity and the destruction of his reality." },
        { question: "Is the conspiracy real?", answer: "The conspiracy (mind control, Nazis) is a fabrication of Andrew's mind to explain the strange behavior of the staff. It is a defense mechanism." }
    ],
    'Prisoners': [
        { question: "Does Loki find Keller at the end?", answer: "The faint whistle implies Loki hears him, leaving the ending ambiguous but hopeful that Keller will be rescued." },
        { question: "What is the maze symbolism?", answer: "The maze represents the psychological trap of obsession and the convoluted path characters take to find the truth, often losing themselves." },
        { question: "Why does the film use religious imagery?", answer: "It contrasts faith with brutality, questioning whether religion provides moral strength or blind justification for terrible acts." },
        { question: "Is the ending happy?", answer: "It is bittersweet. The children are saved, but Keller is a broken man who has committed torture, likely facing prison if rescued." }
    ],
    'Zodiac': [
        { question: "Did they ever catch the Zodiac?", answer: "Officially, no. The film suggests Arthur Leigh Allen was the most likely suspect, but DNA evidence was inconclusive." },
        { question: "Why does the film focus on paperwork?", answer: "Fincher highlights the drudgery of investigation—the endless filing and dead ends—to de-romanticize police work and show the erosion of truth over time." },
        { question: "What does the basement scene represent?", answer: "It captures the terrifying vulnerability of an amateur investigator realizing he might be face-to-face with a monster, relying entirely on implication." },
        { question: "How accurate is the film?", answer: "It is considered one of the most accurate true crime films ever made. Fincher obsessively verified police reports to ensure every detail was factual." }
    ],
    'Gone Girl': [
        { question: "Did Amy plan everything?", answer: "Yes. Amy orchestrated her disappearance to frame Nick for murder as punishment for his infidelity and laziness. She is the ultimate unreliable narrator." },
        { question: "Why does Nick stay with her?", answer: "He stays out of fear and a twisted realization that they deserve each other. They are 'partners in crime' trapped in a toxic performance of a perfect marriage." },
        { question: "Is Amy a psychopath?", answer: "She exhibits psychopathic traits: lack of empathy, manipulation, and narcissism. She views people as props in her life's narrative." },
        { question: "What is the 'Cool Girl' monologue?", answer: "It is Amy's critique of the persona women adopt to please men. It reveals her resentment at having to perform a role that erased her true self." }
    ],
    'Memories of Murder': [
        { question: "Why does Detective Park look at the camera?", answer: "Bong Joon Ho intended this for the real killer. He breaks the fourth wall to ask the uncaptured murderer, 'Are you watching this?'" },
        { question: "Is the killer in the movie?", answer: "The film implies the killer is an ordinary person hiding in plain sight. The lack of capture emphasizes the banality and invisibility of evil." },
        { question: "Why do the detectives fail?", answer: "Systemic incompetence, lack of technology, and police brutality. The film critiques the era's authoritarian regime over the detectives' individual failures." },
        { question: "What does the tunnel symbolize?", answer: "The dark tunnel represents the abyss of the unknown. Firing into it symbolizes the detectives' futile rage against an evil they cannot see or stop." }
    ],
    'The Invisible Guest': [
        { question: "Is the ending a surprise?", answer: "Yes, the final reveal recontextualizes the entire film. The 'lawyer' is actually the mother of the victim in disguise, extracting a confession." },
        { question: "What is the theme of the film?", answer: "The film explores the malleability of truth and how wealthy individuals construct narratives to escape justice." },
        { question: "Is the protagonist guilty?", answer: "Yes. Adrián Doria is revealed to be a cold, calculating murderer who killed not only in the accident but also his lover to cover his tracks." },
        { question: "Why the title 'The Invisible Guest'?", answer: "It refers to the phantom third person Adrián invents to blame for the murder, a guest who never existed." }
    ],
    'Burning': [
        { question: "Did Ben kill Hae-mi?", answer: "It is heavily implied but never confirmed. Ben's 'burning greenhouses' metaphor likely refers to killing women he deems useless." },
        { question: "Is the ending real?", answer: "The ambiguous ending could be interpreted as Jong-su's fantasy, a novel he is writing, or a real act of vengeance. The film refuses to give a definitive answer." },
        { question: "What does the greenhouse symbolize?", answer: "Greenhouses represent the invisible, disposable people in society. Ben burns them because he believes they are waiting to be destroyed." },
        { question: "Why is the cat important?", answer: "The cat (Boil) is the only proof that Hae-mi wasn't lying. Finding the cat at Ben's apartment confirms Jong-su's suspicions." }
    ],
    'The Game': [
        { question: "Was the game real?", answer: "The events were staged, but the danger felt real to Nicholas. The 'game' was an elaborate, live-action role-play designed to break his ego." },
        { question: "Did the brother really want to help?", answer: "Yes. Despite the trauma, the brother's intention was to save Nicholas from his suicidal depression and isolation, albeit through extreme methods." },
        { question: "What does the jump signify?", answer: "It is a leap of faith. Nicholas has to let go of his need for control and accept death to be reborn. It is the climax of his psychological transformation." },
        { question: "Is the ending happy?", answer: "It is ambiguous. Nicholas is 'cured,' but the trauma of the experience lingers. The film questions the morality of such extreme psychological manipulation." }
    ],
    'Identity': [
        { question: "Who is the killer?", answer: "The killer is the young boy, Timmy. He is one of the personalities of the convict, Malcolm Rivers, and he eliminates the others to take control." },
        { question: "Is the motel real?", answer: "No. The entire motel sequence takes place inside Malcolm Rivers' mind. The characters represent his different fractured personalities." },
        { question: "What is the twist?", answer: "The twist is that the genre shifts from a slasher to a psychological drama. The characters aren't real people; they are aspects of a single broken psyche." },
        { question: "Why does the 'whore' survive initially?", answer: "Paris survives initially because she represents the part of Malcolm that wants a better life. Her death at the end signifies the triumph of the evil personality." }
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
    return MYSTERY_THRILLER_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A masterful mystery thriller.`,
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
export const COMPLETE_MYSTERY_THRILLER_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

export default COMPLETE_MYSTERY_THRILLER_DATABASE;