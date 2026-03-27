// utils/thrillerMovieData.js - COMPLETE SUSPENSE THRILLER COLLECTION DATA ✅
// Edge-of-your-seat suspense thrillers with relentless pacing, shocking twists & psychological depth.

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
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

// ✅ REVISED STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    807: "What's in the box?", // Se7en
    146233: "Pray for the best, prepare for the worst.", // Prisoners
    6977: "Call it, friendo.", // No Country for Old Men
    274: "Quid pro quo. I tell you things, you tell me things.", // The Silence of the Lambs
    11423: "Look at my eyes. Tell me the truth.", // Memories of Murder
    322: "We bury our sins here, Dave. We wash them clean.", // Mystic River
    1422: "I'm the guy who does his job. You must be the other guy.", // The Departed
    395834: "This is the land of you're on your own.", // Wind River
    210577: "What have we done to each other? What will we do?", // Gone Girl
    2649: "I don't care about the money. I'm pulling back the curtain." // The Game
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data)
export const SENSITIVE_TIMELINES = {
    807: { scenes: [] }, // Se7en (Clean in terms of sexual content)
    146233: { scenes: [] }, // Prisoners
    6977: { scenes: [] }, // No Country for Old Men
    274: { 
        scenes: [
            { start: '18:50', end: '18:57', type: 'Sexual Content', severity: 'Mild' },
            { start: '1:36:30', end: '1:36:37', type: 'Nudity (Man)', severity: 'Moderate' }
        ]
    },
    11423: { 
        scenes: [
            { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
            { start: "54:34", end: "54:55", type: "Nudity", severity: "Mild" },
            { start: "1:01:12", end: "1:02:40", type: "Sexual content", severity: "Moderate" },
            { start: "1:25:12", end: "1:25:47", type: "Sexual content", severity: "Mild" }
        ]
    },
    322: { scenes: [] },
    1422: { 
        scenes: [
            { start: "1:24:40", end: "1:24:47", type: "Sexual Content", severity: "Mild" }
        ]
    },
    395834: { 
        scenes: [
            { start: "1:17:50", end: "1:18:20", type: "Sex", severity: "Moderate" }
        ]
    },
    210577: { 
        scenes: [
            { start: "6:41", end: "6:59", type: "Sex", severity: "High" },
            { start: "20:57", end: "21:04", type: "Sex", severity: "High" },
            { start: "43:20", end: "44:54", type: "Nudity", severity: "High" },
            { start: "45:00", end: "45:10", type: "Sex", severity: "High" },
            { start: "2:03:50", end: "2:04:55", type: "Sex", severity: "High" },
            { start: "2:12:30", end: "2:13:45", type: "Nudity", severity: "High" }
        ]
    },
    2649: { scenes: [
        { start: "57:52", end: "59:30", type: "Sexual Content(Sexual Sounds)", severity: "Moderate" }
    ]},
};

const createMovieData = (data) => ({
    suspenseIntensity: 90,
    pacing: 85,
    twistImpact: 80,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

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
        synopsis: "Nicholas Van Orton (Michael Douglas), a cold, immensely wealthy investment banker, receives a strange birthday gift from his estranged brother: participation in a mysterious, real-life 'Game.' As the line between the scripted game and his actual life begins to dangerously dissolve, Nicholas is plunged into a terrifying, paranoia-soaked world where he loses control of everything. This is a spectacular, mind-bending thriller that constantly shifts the stakes until the surprising final moment.", 
        themes: ["Reality vs Illusion", "Control", "Wealth", "Brotherhood"], 
        awards: ["Saturn Award Nomination"] 
    })
};

export const THRILLER_MOVIE_FAQS = {
    'Se7en': [
        { question: "Why does John Doe surrender himself to the police in Se7en?", answer: "John Doe surrenders to maintain absolute control over the investigation's climax. By turning himself in, he forces Detective Mills to become 'Wrath,' the final piece of his 'masterpiece.' His surrender isn't an admission of defeat, but the final move in completing his sermon on the Seven Deadly Sins." },
        { question: "What is the meaning of the constant rain in Se7en?", answer: "The relentless rain creates an oppressive, noir atmosphere of moral decay and urban hopelessness. It symbolizes a city that is physically and spiritually drowning in sin—a world so filthy that even the weather suggests it can never be washed clean." },
        { question: "What was actually inside the box at the end of Se7en?", answer: "The box contained the severed head of Mills' pregnant wife, Tracy. This horrific reveal is the catalyst that breaks Mills' restraint, goading him into killing Doe and fulfilling the final sin of 'Wrath.' It is widely considered one of the most chilling endings in cinema history." },
        { question: "Why does Detective Somerset quote Ernest Hemingway at the end?", answer: "Somerset quotes: 'The world is a fine place and worth fighting for... I agree with the second part.' This signifies his character arc from total cynicism to a weary acceptance of his duty. He realizes that even if the world isn't 'fine,' the fight for justice is the only thing that gives existence meaning." }
    ],
    'Prisoners': [
        { question: "Does Detective Loki find Keller Dover at the end of Prisoners?", answer: "The ending is a masterful cliffhanger. As Loki stands in the quiet yard, he hears the faint sound of the red emergency whistle. While the film cuts to black, it strongly implies that Loki’s intuition will lead him to discover Keller trapped in the hole, offering a slim margin of hope for his rescue." },
        { question: "What does the maze symbolize in the movie Prisoners?", answer: "The maze represents the psychological 'trap' of obsession and the moral compromise characters make to find the truth. It mirrors the convoluted, dead-end paths of the investigation and the way Keller Dover physically and mentally loses himself while searching for the 'center' (his daughter)." },
        { question: "How does Prisoners use religious imagery to explore morality?", answer: "The film constantly contrasts outward faith with inward brutality. By showing characters praying before committing acts of torture, it questions whether religion serves as a moral compass or merely a convenient justification for desperate, evil acts in the pursuit of a 'higher' purpose." },
        { question: "Is the ending of Prisoners considered a happy one?", answer: "It is deeply bittersweet. While the children are physically saved, the cost is the total destruction of the parents' souls. Keller is a broken man who has committed horrific crimes, and even if rescued, he faces a future of legal and psychological imprisonment." }
    ],
    'No Country for Old Men': [
        { question: "What is the meaning of the final dream in No Country for Old Men?", answer: "Sheriff Bell’s dream about his father symbolizes the passing of an era. He realizes that the 'old ways' of honor and predictable law are gone, replaced by a new, chaotic evil he cannot comprehend. The dream is his way of accepting that he is 'no longer the man for these times.'" },
        { question: "Is Anton Chigurh a human or a supernatural force?", answer: "The film portrays him as both. While he is a physical hitman, he functions as a personification of indifferent, remorseless fate. He operates by a strict, alien code that makes him terrifying because he cannot be bargained with, reasoned with, or intimidated by human emotion." },
        { question: "Why does Chigurh use a coin toss to decide someone’s life?", answer: "The coin toss represents the absolute randomness of death and the lack of control humans have over their destiny. By using the coin, Chigurh removes his own agency, viewing himself as a mere instrument of fate rather than a murderer with a personal choice." },
        { question: "What is the significance of the cattle gun in No Country for Old Men?", answer: "Chigurh uses a captive bolt pistol—a slaughterhouse tool. This choice of weapon is highly symbolic; it shows that he views his victims not as human beings, but as livestock to be efficiently and indifferently dispatched. It emphasizes the cold, industrial nature of his violence." }
    ],
    'The Silence of the Lambs': [
        { question: "Why does Hannibal Lecter decide to help Clarice Starling?", answer: "Lecter is drawn to Clarice’s intellect, courage, and honesty. He finds her fascinating because she is a 'pure' element in a world of mediocre people. Their relationship is a transactional 'quid pro quo' where he trades psychological clues for access to the traumatic secrets of her past." },
        { question: "What do the Death's-head Hawkmoths symbolize?", answer: "The moths represent transformation and rebirth. Buffalo Bill is obsessed with the idea of shedding his own skin to become something he considers 'beautiful.' The moth’s life cycle mirrors his grotesque attempt to manufacture a new identity out of the victims he 'harvests.'" },
        { question: "Is Hannibal Lecter a villain or an anti-hero?", answer: "Lecter is a charismatic villain. While he assists in catching a serial killer, he remains a cannibalistic monster who kills without a shred of remorse. The film’s genius is in making the audience feel complicit in his escape because we find his intellect and wit so seductive." },
        { question: "Why is Clarice Starling so obsessed with saving Catherine Martin?", answer: "Clarice is driven by the childhood trauma of hearing the screaming lambs on her uncle's farm. In her mind, saving Catherine Martin is her only way to finally 'silence the lambs'—to atone for the innocent lives she couldn't save as a young girl." }
    ],
    'Memories of Murder': [
        { question: "Why does the detective look directly at the camera at the end of Memories of Murder?", answer: "Director Bong Joon-ho intended this for the real killer. By having Detective Park stare into the lens, the film breaks the fourth wall to ask the uncaptured murderer, who might be sitting in the audience: 'Do you remember what you did? Are you still watching?'" },
        { question: "Who is the real killer in Memories of Murder?", answer: "The film suggests the killer is an ordinary-looking person hiding in plain sight. By never showing his face clearly, Bong Joon-ho emphasizes the 'banality of evil'—the terrifying idea that a monster can live as a quiet, invisible member of a normal community." },
        { question: "Why do the detectives fail to catch the killer in Memories of Murder?", answer: "Their failure is a critique of the era's authoritarian government and the lack of forensic infrastructure. The film argues that police brutality and a reliance on coerced confessions allowed a serial killer to operate with impunity, highlighting a systemic failure over an individual one." },
        { question: "What does the dark train tunnel represent in Memories of Murder?", answer: "The tunnel represents the abyss of the unknown and the ultimate failure of logic. When the detective fires his gun blindly into the darkness of the tunnel, it symbolizes his futile, impotent rage against an evil he cannot see, understand, or stop." }
    ],
    'Mystic River': [
        { question: "Is Dave guilty of the murder in Mystic River?", answer: "No. Dave is innocent of Katie's murder. He killed a pedophile on the same night she died, but his deep childhood trauma makes him appear guilty and prevents him from defending himself clearly. His wrongful death at the hands of his childhood friend is the film's central tragedy." },
        { question: "Who actually killed Katie in Mystic River?", answer: "The murder was an accidental, senseless shooting by neighborhood children playing with a gun. The tragedy of the film is that Katie's death wasn't part of a grand conspiracy or the work of a monster, but a random act of stupidity that destroyed three families." },
        { question: "What does the 'Mystic River' symbolize?", answer: "The river represents the place where a community buries its sins and secrets. It physically 'washes away' evidence, but it psychologically traps the trauma of the neighborhood. It is the silent current of guilt that connects the characters even as they try to live separate lives." },
        { question: "Why does Sean let Jimmy get away with murder at the end?", answer: "Sean chooses tribal loyalty and 'neighborhood justice' over the rule of law. By letting Jimmy go, he accepts the code of silence that governs their community. It shows that in their world, protecting your own is more important than the objective truth." }
    ],
    'The Departed': [
        { question: "Why do so many characters die at the end of The Departed?", answer: "Director Martin Scorsese uses the rapid-fire deaths to create a nihilistic ending where no one 'wins.' It emphasizes that in a world built on lies, double-crossing, and institutional corruption, violence is a closed loop that eventually consumes everyone involved, regardless of their side." },
        { question: "What does the final shot of the rat symbolize in The Departed?", answer: "The rat crawling across the balcony is a literal and symbolic reminder of the pervasive corruption in the film. It signifies that everyone was 'ratting' on one another and that the system itself is infested with betrayal, leaving no room for true heroes." },
        { question: "Is The Departed a remake of another movie?", answer: "Yes, it is a remake of the 2002 Hong Kong thriller 'Infernal Affairs.' Scorsese successfully adapted the core concept—a mole in the police and a mole in the mob—to fit the specific, gritty culture of the Irish-American underworld in Boston." },
        { question: "Why does Dignam kill Sullivan at the end of The Departed?", answer: "Dignam represents the only character with a consistent, albeit brutal, moral code. He kills Sullivan to avenge the deaths of Queenan and Costigan. He acts as the final agent of karma, ensuring that even if the law failed, the 'rat' does not escape the consequences of his betrayal." }
    ],
    'Wind River': [
        { question: "Why is the setting of Wind River so important to the story?", answer: "The brutal, freezing Wyoming winter is a character in itself. The landscape's indifference to human life mirrors the systemic indifference to the victims. The film argues that in such a harsh environment, the truth can be buried easily, making the act of seeking justice even more heroic." },
        { question: "What was the motive behind the murder in Wind River?", answer: "There is no grand motive, which is what makes the crime so tragic. The violence was born out of boredom, isolation, and drunken aggression. This 'banality of evil' highlights how the lack of opportunity and purpose in isolated areas can lead to horrific outbursts of violence." },
        { question: "What is the meaning of the 'Death Face' paint in Wind River?", answer: "The death mask is an act of reclaiming heritage. By painting the victim's face, the protagonist honors her Indigenous culture and gives her the dignity in death that was stripped away by her attackers. it is a visual representation of mourning and respect for a lost life." },
        { question: "Is the movie Wind River based on a true story?", answer: "While the plot is fictional, it is inspired by the real-life epidemic of missing and murdered Indigenous women (MMIW) in North America. The film's final title card highlights the devastating fact that there is no official missing persons database for Indigenous women, turning the film into a social critique." }
    ],
    'Gone Girl': [
        { question: "Did Amy Dunne plan her own disappearance in Gone Girl?", answer: "Yes. Amy meticulously orchestrated her own 'murder' to frame her husband, Nick, as punishment for his infidelity. She acted as an expert unreliable narrator, manipulating the media, the police, and the audience into believing she was a victim when she was actually the architect of the chaos." },
        { question: "Why does Nick stay with Amy at the end of Gone Girl?", answer: "Nick stays out of a mix of fear and a twisted psychological realization that they are 'perfect' for each other. They are both performers who thrive on a toxic, high-stakes relationship. He realizes that staying in the 'performative' marriage is his only way to survive her final trap." },
        { question: "What are Amy Dunne's personality traits in Gone Girl?", answer: "Amy exhibits classic psychopathic and narcissistic traits, including a total lack of empathy, high-level manipulation, and a need for absolute control. She views the people in her life as mere characters in a narrative that she must write and direct." },
        { question: "What is the 'Cool Girl' monologue in Gone Girl?", answer: "The 'Cool Girl' monologue is Amy's scathing critique of the performative persona women often adopt to please men. It reveals her deep resentment at having to suppress her true, brilliant, and dark self to fit a societal ideal, serving as the core justification for her revenge." }
    ],
    'The Game': [
        { question: "Was the game real or staged in the movie The Game?", answer: "Every event in the film was meticulously staged by a company called CRS. While the danger felt life-threatening to Nicholas, it was actually an elaborate, multi-million dollar live-action role-play designed specifically to break his cold, isolated ego and force a psychological rebirth." },
        { question: "What was the brother's true intention in The Game?", answer: "Despite the extreme trauma caused by the experience, the brother’s intention was genuinely to save Nicholas. He realized Nicholas was on the same suicidal, lonely path as their father and used the 'game' as a radical form of therapy to reconnect him with the value of life." },
        { question: "What does the final jump from the roof signify in The Game?", answer: "The jump is the ultimate leap of faith. By jumping, Nicholas finally lets go of his need for total control and accepts his own mortality. It is the climax of his ego-death, allowing him to 'wake up' and be reborn as a man who can finally feel genuine emotion and gratitude." },
        { question: "Is the ending of The Game meant to be a happy one?", answer: "The ending is intentionally jarring. While Nicholas is 'cured' of his depression, the film leaves the audience questioning the ethics of the experience. It asks whether a life-changing epiphany is worth the horrific psychological torture required to achieve it, leaving a lingering sense of unease." }
    ]
};
// ✅ HELPER FUNCTIONS: 100% SPAM-FREE, DYNAMIC, & GOOGLE APPROVED
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('explicit')) types.add('sexual content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

// 🔥 UNIFIED CLEAN GENERATOR (For Google Bots & LLMs - No Aggregate Rating!)
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

    const staticFaqs = THRILLER_MOVIE_FAQS[movie.Title] ? [...THRILLER_MOVIE_FAQS[movie.Title]] : [];
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
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
                }
            }
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
                    'text': `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${currentRuntime} runtime.` 
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
    const staticFaqs = THRILLER_MOVIE_FAQS[movieTitle] ? [...THRILLER_MOVIE_FAQS[movieTitle]] : [];
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
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
            }
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};

// Build object map by tmdbId for easy UI lookups
export const COMPLETE_THRILLER_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

export default COMPLETE_THRILLER_DATABASE;