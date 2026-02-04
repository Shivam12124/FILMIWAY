// utils/paramountBestMoviesData.js - TOP 10 BEST MOVIES ON PARAMOUNT+
// The definitive ranking of the highest-rated films currently streaming on Paramount+ across all genres.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 680, "imdbID": "tt0110912", "Title": "Pulp Fiction", "year": 1994, "genre": "Crime", "runtime": 154, "rank": 1 },
    { "tmdbId": 157336, "imdbID": "tt0816692", "Title": "Interstellar", "year": 2014, "genre": "Sci-Fi", "runtime": 169, "rank": 2 },
      { "tmdbId": 13, "imdbID": "tt0109830", "Title": "Forrest Gump", "year": 1994, "genre": "Drama", "runtime": 142, "rank": 3 },
    { "tmdbId": 98, "imdbID": "tt0172495", "Title": "Gladiator", "year": 2000, "genre": "Action", "runtime": 155, "rank": 4 },
    { "tmdbId": 599, "imdbID": "tt0043014", "Title": "Sunset Boulevard", "year": 1950, "genre": "Noir", "runtime": 110, "rank": 5 },
    { "tmdbId": 106646, "imdbID": "tt0993846", "Title": "The Wolf of Wall Street", "year": 2013, "genre": "Biography", "runtime": 180, "rank": 6 },
    { "tmdbId": 6977, "imdbID": "tt0477348", "Title": "No Country for Old Men", "year": 2007, "genre": "Crime", "runtime": 122, "rank": 7 },
    { "tmdbId": 7345, "imdbID": "tt0469494", "Title": "There Will Be Blood", "year": 2007, "genre": "Drama", "runtime": 158, "rank": 8 },
    { "tmdbId": 361743, "imdbID": "tt1745960", "Title": "Top Gun: Maverick", "year": 2022, "genre": "Action", "runtime": 130, "rank": 9 },
    { "tmdbId": 640, "imdbID": "tt0264464", "Title": "Catch Me If You Can", "year": 2002, "genre": "Biography", "runtime": 141, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    // Pulp Fiction
    680: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Drug Overdose", severity: "High" }, // Adrenaline shot
            { start: "1:40:00", end: "1:50:00", type: "Sexual Violence", severity: "Extreme" } // Pawn Shop scene
        ] 
    }, 
    // Forrest Gump
    13: { scenes: [] }, 
    // Interstellar
    157336: { scenes: [] },
    // Gladiator
    98: { 
        scenes: [
            { start: "0:05:00", end: "0:15:00", type: "War Violence", severity: "High" },
            { start: "0:35:00", end: "0:36:00", type: "Execution (Offscreen but implied)", severity: "High" } // Family death
        ] 
    },
    // Sunset Boulevard
    599: { scenes: [] },
    // The Wolf of Wall Street
    106646: { 
        scenes: [
            { start: "0:10:00", end: "0:20:00", type: "Drug Use", severity: "High" },
            { start: "0:25:00", end: "0:40:00", type: "Nudity & Sex", severity: "Extreme" },
            { start: "2:00:00", end: "2:10:00", type: "Drug Overdose", severity: "High" }
        ] 
    },
    // No Country for Old Men
    6977: { 
        scenes: [
            { start: "0:05:00", end: "0:06:00", type: "Strangulation", severity: "High" },
            { start: "0:15:00", end: "1:50:00", type: "Gun Violence", severity: "High" }
        ] 
    },
    // There Will Be Blood
    7345: { 
        scenes: [
            { start: "2:30:00", end: "2:35:00", type: "Brutal Violence", severity: "High" } // Bowling alley ending
        ] 
    },
    // Top Gun: Maverick
    361743: { scenes: [] },
    // Catch Me If You Can
    640: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    680: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    13: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    157336: "https://image.tmdb.org/t/p/w500/gEU2QniL6E77NI6lCU6MxlNBvIx.jpg",
    98: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    599: "https://image.tmdb.org/t/p/w500/sC4DpD8V39a7W1WjPZ8hQ1Q8.jpg", // Placeholder hash
    106646: "https://image.tmdb.org/t/p/w500/pWHf4khOloLXfUUSzS.jpg",
    6977: "https://image.tmdb.org/t/p/w500/bj1v6YKF8yiMrFfD77J9X1T9FjL.jpg",
    7345: "https://image.tmdb.org/t/p/w500/faL4e95X3kM7c7TfE41tA7t1v.jpg",
    361743: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    640: "https://image.tmdb.org/t/p/w500/ctjEj2xGLEnKfqyOnObPN4pful1.jpg"
};

// ✅ HELPER: Standard Data Creator
const createMovieData = (data) => ({
    cinematicMastery: 95,    
    narrativeDepth: 90,      
    legacyScore: 92,     
    complexityLevel: "MASTERPIECE",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Pulp Fiction (Neon Noir / Retro)
    // Corrected DNA: Crime dominant. Pacing: Adjusted diner standoff intensity.
    680: createMovieData({
        rating: 8.9, criticsScore: 92, audienceScore: 96, director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], boxOffice: "$213 million", budget: "$8 million",
        dominantColor: "#f59e0b", // Gold/Yellow (Briefcase)
        dna: { "Crime": 60, "Drama": 25, "Comedy": 15 },
        scenes: [
            { time: 10, intensity: 35, label: "Royale with Cheese", color: "#facc15" },
            { time: 30, intensity: 78, label: "Ezekiel 25:17", color: "#b45309" },
            { time: 60, intensity: 92, label: "Adrenaline Shot", color: "#dc2626" },
            { time: 100, intensity: 85, label: "The Gold Watch", color: "#f59e0b" },
            { time: 140, intensity: 80, label: "The Diner Stand-off", color: "#78350f" }
        ],
        synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. Quentin Tarantino's non-linear masterpiece redefined independent cinema with its sharp dialogue, pop-culture references, and eclectic soundtrack.",
        themes: ["Redemption", "Coolness", "Fate"]
    }),

    // 2. Forrest Gump (Americana / Soft Blue)
    // Corrected DNA: Drama dominant. Pacing: Vietnam peak chaos, Grave peak emotion.
    13: createMovieData({
        rating: 8.8, criticsScore: 71, audienceScore: 95, director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"], boxOffice: "$677 million", budget: "$55 million",
        dominantColor: "#3b82f6", // Sky Blue
        dna: { "Drama": 70, "Romance": 20, "Comedy": 10 },
        scenes: [
            { time: 15, intensity: 45, label: "Run Forrest Run", color: "#60a5fa" },
            { time: 50, intensity: 88, label: "Vietnam Ambush", color: "#ef4444" },
            { time: 90, intensity: 55, label: "Ping Pong Diplomacy", color: "#3b82f6" },
            { time: 110, intensity: 70, label: "Running Across America", color: "#2563eb" },
            { time: 135, intensity: 92, label: "Jenny's Grave", color: "#1e3a8a" }
        ],
        synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart. A sprawling, emotional epic that captures the heart of 20th-century America.",
        themes: ["Destiny", "Innocence", "Love"]
    }),

    // 3. Interstellar (Cosmic / Space Blue)
    // Corrected DNA: Sci-Fi dominant. Pacing: Docking scene is true peak.
    157336: createMovieData({
        rating: 8.7, criticsScore: 73, audienceScore: 86, director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], boxOffice: "$701 million", budget: "$165 million",
        dominantColor: "#0ea5e9", // Cyan/Space
        dna: { "Sci-Fi": 55, "Drama": 30, "Adventure": 15 },
        scenes: [
            { time: 45, intensity: 70, label: "Launch Sequence", color: "#0ea5e9" },
            { time: 70, intensity: 88, label: "Miller's Planet", color: "#0284c7" },
            { time: 110, intensity: 82, label: "Mann's Betrayal", color: "#0369a1" },
            { time: 130, intensity: 96, label: "Docking Scene", color: "#0c4a6e" },
            { time: 150, intensity: 90, label: "The Tesseract", color: "#7dd3fc" }
        ],
        synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans. A visually stunning and emotionally powerful exploration of love, time, and gravity.",
        themes: ["Love", "Time", "Survival"]
    }),

    // 4. Gladiator (Wheat / Gold)
    // Corrected DNA: Action dominant. Pacing: Opening battle raised.
    98: createMovieData({
        rating: 8.5, criticsScore: 80, audienceScore: 87, director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"], boxOffice: "$460 million", budget: "$103 million",
        dominantColor: "#b45309", // Wheat/Gold
        dna: { "Action": 55, "Drama": 25, "History": 20 },
        scenes: [
            { time: 10, intensity: 90, label: "Germania Battle", color: "#78350f" },
            { time: 45, intensity: 55, label: "The Slave Market", color: "#d97706" },
            { time: 80, intensity: 92, label: "Are You Not Entertained?", color: "#b45309" },
            { time: 120, intensity: 88, label: "Battle of Carthage", color: "#92400e" },
            { time: 150, intensity: 95, label: "Maximus vs Commodus", color: "#451a03" }
        ],
        synopsis: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. Ridley Scott's epic revitalized the sword-and-sandal genre, featuring Russell Crowe's Oscar-winning performance and Hans Zimmer's iconic score.",
        themes: ["Vengeance", "Honor", "Politics"]
    }),

    // 5. Sunset Boulevard (Noir / Black & White)
    // Corrected DNA: Drama lead. Pacing: Psychological peak at end.
    599: createMovieData({
        rating: 8.4, criticsScore: 98, audienceScore: 91, director: "Billy Wilder",
        cast: ["William Holden", "Gloria Swanson", "Erich von Stroheim"], boxOffice: "$5 million", budget: "$1.75 million",
        dominantColor: "#171717", // Noir Black
        dna: { "Drama": 70, "Mystery": 20, "Crime": 10 },
        scenes: [
            { time: 5, intensity: 55, label: "The Pool Body", color: "#262626" },
            { time: 30, intensity: 35, label: "Meeting Norma", color: "#404040" },
            { time: 60, intensity: 60, label: "New Year's Eve", color: "#171717" },
            { time: 90, intensity: 78, label: "The Pursuit", color: "#000000" },
            { time: 110, intensity: 92, label: "Ready for My Close-Up", color: "#52525b" }
        ],
        synopsis: "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return. One of the greatest films about Hollywood ever made, exploring the dark side of fame, obsession, and the transition from silent films to talkies.",
        themes: ["Fame", "Delusion", "Hollywood"]
    }),

    // 6. The Wolf of Wall Street (Money Green / Yellow)
    // Corrected DNA: Comedy lead. Pacing: FBI Raid intensity raised.
    106646: createMovieData({
        rating: 8.2, criticsScore: 80, audienceScore: 83, director: "Martin Scorsese",
        cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], boxOffice: "$392 million", budget: "$100 million",
        dominantColor: "#facc15", // Money Yellow
        dna: { "Comedy": 45, "Drama": 30, "Crime": 25 },
        scenes: [
            { time: 20, intensity: 55, label: "Pink Sheets Pitch", color: "#facc15" },
            { time: 60, intensity: 70, label: "Steve Madden", color: "#eab308" },
            { time: 120, intensity: 88, label: "Lemmon 714s Phase", color: "#ca8a04" },
            { time: 150, intensity: 80, label: "I'm Not Leaving", color: "#a16207" },
            { time: 170, intensity: 72, label: "The FBI Raid", color: "#854d0e" }
        ],
        synopsis: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government. A frantic, hilarious, and disturbing three-hour ride through excess and greed.",
        themes: ["Greed", "Excess", "Corruption"]
    }),

    // 7. No Country for Old Men (Desert Brown)
    // Corrected DNA: Thriller lead. Pacing: Coin toss lowered, shootout raised.
    6977: createMovieData({
        rating: 8.2, criticsScore: 93, audienceScore: 86, director: "Ethan & Joel Coen",
        cast: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"], boxOffice: "$171 million", budget: "$25 million",
        dominantColor: "#78350f", // Dry Earth
        dna: { "Thriller": 55, "Crime": 30, "Western": 15 },
        scenes: [
            { time: 10, intensity: 65, label: "Coin Toss", color: "#78350f" },
            { time: 40, intensity: 75, label: "Motel Search", color: "#92400e" },
            { time: 80, intensity: 93, label: "Street Shootout", color: "#b45309" },
            { time: 100, intensity: 88, label: "The Hotel Vent", color: "#451a03" },
            { time: 120, intensity: 55, label: "The Dream", color: "#d97706" }
        ],
        synopsis: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande. He is pursued by an unstoppable hitman who leaves fate to a coin toss. A tense, nihilistic masterpiece about the changing nature of evil.",
        themes: ["Fate", "Evil", "Morality"]
    }),

    // 8. There Will Be Blood (Oil Black)
    // Corrected DNA: Drama overwhelming. Pacing: Milkshake adjusted to drama max.
    7345: createMovieData({
        rating: 8.2, criticsScore: 91, audienceScore: 86, director: "Paul Thomas Anderson",
        cast: ["Daniel Day-Lewis", "Paul Dano", "Ciarán Hinds"], boxOffice: "$76 million", budget: "$25 million",
        dominantColor: "#000000", // Oil
        dna: { "Drama": 85, "History": 15 },
        scenes: [
            { time: 15, intensity: 45, label: "Finding Oil", color: "#1c1917" },
            { time: 60, intensity: 90, label: "The Derrick Fire", color: "#ef4444" },
            { time: 100, intensity: 82, label: "The Baptism", color: "#7f1d1d" },
            { time: 130, intensity: 70, label: "Abandoning H.W.", color: "#292524" },
            { time: 150, intensity: 95, label: "I Drink Your Milkshake", color: "#000000" }
        ],
        synopsis: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business. Daniel Day-Lewis delivers one of the greatest performances in cinema history as Daniel Plainview, a man consumed by greed and misanthropy.",
        themes: ["Greed", "Religion", "Capitalism"]
    }),

    // 9. Top Gun: Maverick (Sunset Orange)
    // Corrected DNA: Action heavy. Pacing: Mission is true peak.
    361743: createMovieData({
        rating: 8.2, criticsScore: 96, audienceScore: 99, director: "Joseph Kosinski",
        cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"], boxOffice: "$1.49 billion", budget: "$170 million",
        dominantColor: "#f97316", // Sunset
        dna: { "Action": 70, "Drama": 25, "Romance": 5 },
        scenes: [
            { time: 10, intensity: 85, label: "Mach 10", color: "#f97316" },
            { time: 50, intensity: 60, label: "Dogfight Football", color: "#fb923c" },
            { time: 90, intensity: 78, label: "The Canyon Run", color: "#ea580c" },
            { time: 115, intensity: 96, label: "The Mission", color: "#c2410c" },
            { time: 125, intensity: 94, label: "Dogfight", color: "#9a3412" }
        ],
        synopsis: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it. A rare legacy sequel that surpasses the original with practical stunts and emotional depth.",
        themes: ["Legacy", "Duty", "Redemption"]
    }),

    // 10. Catch Me If You Can (Retro Blue / Pastel)
    // Corrected DNA: Drama/Crime split. Pacing: Emotional peak at Christmas.
    640: createMovieData({
        rating: 8.1, criticsScore: 96, audienceScore: 89, director: "Steven Spielberg",
        cast: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"], boxOffice: "$352 million", budget: "$52 million",
        dominantColor: "#06b6d4", // 60s Pastel Blue
        dna: { "Drama": 45, "Crime": 35, "Comedy": 20 },
        scenes: [
            { time: 20, intensity: 45, label: "The Pilot Scam", color: "#22d3ee" },
            { time: 50, intensity: 55, label: "Do You Concur?", color: "#06b6d4" },
            { time: 80, intensity: 72, label: "Almost Caught", color: "#0891b2" },
            { time: 110, intensity: 78, label: "Christmas Call", color: "#0e7490" },
            { time: 130, intensity: 82, label: "The Arrest", color: "#155e75" }
        ],
        synopsis: "The true story of Frank Abagnale Jr., who, before his 19th birthday, successfully conned millions of dollars by posing as a Pan Am pilot, a doctor, and a legal prosecutor. FBI agent Carl Hanratty makes it his prime mission to capture him, but Frank is always one step ahead. A breezy, stylish chase movie anchored by two charismatic leads.",
        themes: ["Identity", "Deception", "Father Figures"]
    })
};

export const PARAMOUNT_BEST_MOVIE_FAQS = {
    'Pulp Fiction': [
        { question: "What is in the briefcase?", answer: "Quentin Tarantino has never explicitly revealed the contents, stating it is whatever the viewer wants it to be (a MacGuffin). Theories range from Marsellus Wallace's soul (due to the band-aid on his neck) to the diamonds from Reservoir Dogs, or simply a lightbulb used for effect." },
        { question: "Is the chronology random?", answer: "No, the scenes are carefully ordered to create a circular narrative. The film begins and ends in the diner, but the events in between jump around in time. This structure allows characters who die in the middle of the chronological timeline (like Vincent Vega) to 'walk into the sunset' at the end of the film." },
        { question: "Did Tarantino direct the needle scene?", answer: "Yes, the infamous adrenaline shot scene was filmed in reverse to ensure safety and realism. John Travolta started with the needle against Uma Thurman's chest and pulled it away; the footage was then reversed in post-production to look like a forceful strike." }
    ],
    'Forrest Gump': [
        { question: "Is Forrest Gump a real person?", answer: "No, Forrest Gump is a fictional character based on the 1986 novel by Winston Groom. However, the character interacts with real historical figures through groundbreaking visual effects, making him feel like a part of actual history." },
        { question: "Did Tom Hanks improvise?", answer: "Many iconic lines were improvised, including 'My name is Forrest Gump. People call me Forrest.' Tom Hanks also adopted the character's unique accent after hearing the young actor playing young Forrest (Michael Conner Humphreys) speak, deciding to mimic the child's natural voice." },
        { question: "What is the feather symbolism?", answer: "The floating feather represents the film's central theme: 'destiny.' It symbolizes the idea that life is unpredictable and we are all just floating along on a breeze, landing wherever fate takes us, much like Forrest's journey through history." }
    ],
    'Interstellar': [
        { question: "How accurate is the science?", answer: "Remarkably accurate. Theoretical physicist Kip Thorne served as an executive producer and consultant. The depiction of the black hole, Gargantua, was generated using actual physics equations, leading to new scientific papers being published about gravitational lensing based on the film's visual effects." },
        { question: "What is the Tesseract?", answer: "The Tesseract is a four-dimensional construct placed inside the black hole by 'Theys' (future humans). It allows Cooper to physically interact with time as a spatial dimension, enabling him to send the quantum data back to his daughter Murph via the watch." },
        { question: "Did they grow real corn?", answer: "Yes, Christopher Nolan insisted on realism. He planted 500 acres of real corn for the farm scenes, which was later sold for a profit. The dust storms were also created using practical effects with giant fans and biodegradable dust." }
    ],
    'Gladiator': [
        { question: "Is Maximus a real historical figure?", answer: "Maximus is fictional, but he is a composite of several historical figures, including Narcissus (the wrestler who killed Commodus), Spartacus (the leader of a slave revolt), and Cincinnatus (a farmer who became dictator to save Rome then gave up power)." },
        { question: "Did Oliver Reed die during filming?", answer: "Yes, legendary actor Oliver Reed (Proximo) passed away before filming was completed. The production used a body double and CGI to complete his remaining scenes, costing millions but preserving his final, powerful performance." },
        { question: "Are the tigers real?", answer: "Yes, real tigers were used in the arena fight. A veterinarian was on set with a tranquilizer gun at all times, and Russell Crowe was kept at a safe distance, though the editing makes them appear inches away." }
    ],
    'Sunset Boulevard': [
        { question: "Who is the narrator?", answer: "The film is famous for being narrated by a dead man. Joe Gillis (William Holden) tells the story while floating face-down in a swimming pool, a groundbreaking narrative device for 1950 that sets the film's cynical, noir tone immediately." },
        { question: "Was Gloria Swanson really a silent film star?", answer: "Yes, the casting was meta-textual. Gloria Swanson was one of the biggest stars of the silent era who faded into obscurity with the advent of talkies, mirroring her character Norma Desmond. The butler, Max, was played by Erich von Stroheim, a real-life silent film director who actually directed Swanson in the 1920s." },
        { question: "What does 'I'm ready for my close-up' mean?", answer: "The line symbolizes Norma's complete break from reality. Having descended into madness, she believes the newsreel cameras filming her arrest are actually Cecil B. DeMille's cameras filming her comeback movie, highlighting the tragic delusion of fame." }
    ],
    'The Wolf of Wall Street': [
        { question: "Is it a true story?", answer: "Yes, it is based on the memoir of Jordan Belfort. While some events were dramatized, many of the wildest scenes (the dwarf tossing, the yacht sinking, the drug abuse) actually happened according to Belfort. The real Jordan Belfort even has a cameo at the end of the film as the MC introducing Leo." },
        { question: "How did they film the Quaalude scene?", answer: "Leonardo DiCaprio credited the 'Cerebral Palsy phase' scene to watching YouTube videos of 'The Drunkest Guy in the World.' He wanted to capture the total loss of motor function while the mind is still active. It is considered a masterpiece of physical comedy." },
        { question: "Did they use real drugs?", answer: "No, the actors snorted crushed B-vitamins instead of cocaine. Jonah Hill snorted so much fake powder during the seven-month shoot that he developed bronchitis and had to be hospitalized." }
    ],
    'No Country for Old Men': [
        { question: "Why is there no music?", answer: "The film famously has almost no musical score. The Coen Brothers wanted to create relentless tension using only ambient sounds—the wind, boots on floorboards, the click of a gun. This absence of music removes the emotional 'safety net' for the audience, making the violence feel more raw and immediate." },
        { question: "What does the ending mean?", answer: "The ending, where Sheriff Bell recounts his dreams, is about his realization that he is 'overmatched' by the new, senseless violence of the modern world (Chigurh). He retires because he cannot understand or fight this evil, accepting that he has become the 'old man' the country is no longer for." },
        { question: "What weapon does Chigurh use?", answer: "Anton Chigurh uses a captive bolt pistol, a tool normally used to stun cattle before slaughter. It symbolizes how he views his victims—not as humans, but as livestock to be dispatched efficiently and without emotion." }
    ],
    'There Will Be Blood': [
        { question: "What is the 'I drink your milkshake' line?", answer: "The line is a metaphor for drainage in oil drilling—sucking up the oil from under a neighbor's land without drilling on their property. It became a famous quote symbolizing Daniel Plainview's total domination and humiliation of his rival, Eli Sunday." },
        { question: "Is Daniel Plainview a psychopath?", answer: "It is debated. He certainly displays traits of anti-social personality disorder—lack of empathy, manipulative behavior, and extreme greed. However, his relationship with H.W. suggests a buried capacity for love, which he ultimately strangles in favor of his ambition." },
        { question: "Who wrote the music?", answer: "The haunting, dissonant score was composed by Jonny Greenwood of Radiohead. It was disqualified from the Oscars because it used some pre-existing material, but it is widely considered one of the greatest film scores of the 21st century." }
    ],
    'Top Gun: Maverick': [
        { question: "Did the actors fly the jets?", answer: "Yes. Tom Cruise developed a bespoke training program for the cast. They started in small Cessnas and worked their way up to F-18s (flown by Navy pilots). The actors were in the cockpits pulling real G-forces, meaning their strained faces and sweat are 100% authentic." },
        { question: "Is the Darkstar plane real?", answer: "The Hypersonic Darkstar plane is fictional, but it was designed with the help of Lockheed Martin's Skunk Works division (who build real spy planes). It looked so realistic that the Chinese government reportedly re-tasked a spy satellite to inspect the prop on the movie set." },
        { question: "Why no CGI?", answer: "Director Joseph Kosinski and Tom Cruise wanted to capture the visceral experience of flight. While CGI was used for missiles and explosions, the flying sequences relied on 6 IMAX cameras rigged inside the cockpits to capture the real environment, lighting, and physics of aerial combat." }
    ],
    'Catch Me If You Can': [
        { question: "Did Frank Abagnale really do all that?", answer: "Frank Abagnale Jr.'s life story is true in essence—he was a teenage con artist who posed as a pilot, doctor, and lawyer. However, historical records suggest he may have exaggerated some of his exploits. Regardless, the emotional core of a boy trying to reunite his parents is the film's true focus." },
        { question: "Does the real Frank Abagnale appear?", answer: "Yes, the real Frank Abagnale makes a cameo appearance as the French police officer who arrests Leonardo DiCaprio (playing Frank) on Christmas Eve. It's a nod to his eventual transition to working on the side of the law." },
        { question: "Why is the score so jazzy?", answer: "John Williams composed the score, moving away from his usual bombastic style to create a slinky, sophisticated jazz score reminiscent of the 1960s. It perfectly captures the cat-and-mouse playfulness and the era's cool aesthetic." }
    ]
};

// Required exports
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
        if (lowerType.includes('gore') || lowerType.includes('violence')) types.add('violence');
        if (lowerType.includes('drug')) types.add('drug use');
        if (lowerType.includes('sexual')) types.add('sexual content');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PARAMOUNT_BEST_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A masterpiece streaming on Paramount+.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 8.0, 
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