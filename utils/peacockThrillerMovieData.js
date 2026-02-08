// utils/peacockThrillerMovieData.js - PEACOCK THRILLER COLLECTION DATA
// Ranked by Suspense, Tension, and Psychological Impact

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 77, "imdbID": "tt0209144", "Title": "Memento", "year": 2000, "genre": "Mystery", "runtime": 113, "rank": 1 },
    { "tmdbId": 2649, "imdbID": "tt0119174", "Title": "The Game", "year": 1997, "genre": "Thriller", "runtime": 129, "rank": 2 },
    { "tmdbId": 273481, "imdbID": "tt3397884", "Title": "Sicario", "year": 2015, "genre": "Crime", "runtime": 121, "rank": 3 },
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi Thriller", "runtime": 89, "rank": 4 },
    { "tmdbId": 388, "imdbID": "tt0454848", "Title": "Inside Man", "year": 2006, "genre": "Crime Thriller", "runtime": 129, "rank": 5 },
    { "tmdbId": 22803, "imdbID": "tt1197624", "Title": "Law Abiding Citizen", "year": 2009, "genre": "Thriller", "runtime": 109, "rank": 6 },
    { "tmdbId": 756999, "imdbID": "tt7144666", "Title": "The Black Phone", "year": 2021, "genre": "Horror Thriller", "runtime": 103, "rank": 7 },
    { "tmdbId": 26466, "imdbID": "tt1187064", "Title": "Triangle", "year": 2009, "genre": "Mystery", "runtime": 99, "rank": 8 },
    { "tmdbId": 51876, "imdbID": "tt1219289", "Title": "Limitless", "year": 2011, "genre": "Sci-Fi Thriller", "runtime": 105, "rank": 9 },
    { "tmdbId": 718821, "imdbID": "tt6689876", "Title": "Twisters", "year": 2024, "genre": "Action Thriller", "runtime": 117, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Thriller Edition)
export const SENSITIVE_TIMELINES = {
    // 1. Memento
    77: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Violence/Murder", severity: "High" }, // Opening scene in reverse
            { start: "1:45:00", end: "1:50:00", type: "Assault/Rape (Flashback)", severity: "Extreme" } // Wife attack scene
        ] 
    },

    // 2. The Game
    2649: { scenes: [] }, // Psychological intensity, minimal graphic content

    // 3. Sicario
    273481: { 
        scenes: [
            { start: "0:02:00", end: "0:05:00", type: "Gore/Bodies", severity: "High" }, // Walls scene
            { start: "0:45:00", end: "0:50:00", type: "Gun Violence", severity: "High" }, // Border shootout
            { start: "1:50:00", end: "1:55:00", type: "Execution", severity: "High" } // Dinner scene
        ] 
    },

    // 4. Coherence
    220289: { scenes: [] }, // Pure psychological tension

    // 5. Inside Man
    388: { 
        scenes: [
            { start: "0:40:00", end: "0:42:00", type: "Execution (Fake)", severity: "Moderate" }
        ] 
    },

    // 6. Law Abiding Citizen
    22803: { 
        scenes: [
            { start: "0:03:00", end: "0:06:00", type: "Home Invasion/Assault", severity: "Extreme" }, // Opening scene
            { start: "0:25:00", end: "0:30:00", type: "Torture/Gore", severity: "Extreme" } // Warehouse saw scene
        ] 
    },

    // 7. The Black Phone
    756999: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Child Abduction", severity: "High" },
            { start: "0:40:00", end: "0:45:00", type: "Violence against children", severity: "High" }
        ] 
    },

    // 8. Triangle
    26466: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Gun Violence", severity: "High" },
            { start: "1:20:00", end: "1:25:00", type: "Car Crash/Death", severity: "High" }
        ] 
    },

    // 9. Limitless
    51876: { 
        scenes: [
            { start: "1:25:00", end: "1:28:00", type: "Blood drinking", severity: "High" }
        ] 
    },

    // 10. Twisters
    718821: { 
        scenes: [
            { start: "0:05:00", end: "0:10:00", type: "Disaster Death", severity: "Moderate" } // Opening tornado
        ] 
    }
};

export const FALLBACK_POSTERS = {
    77: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
    2649: "https://image.tmdb.org/t/p/w500/8Idb7N83c27O3e84r5I81s1Dk4q.jpg",
    273481: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    220289: "https://image.tmdb.org/t/p/w500/pp2iJ0Y05Y977k6j632t7J6v6W3.jpg",
    388: "https://image.tmdb.org/t/p/w500/mf4i9z4fLVrie7xWl9sp6SRToNK.jpg",
    22803: "https://image.tmdb.org/t/p/w500/jopWJv8Yn8p0DqZ2O77zX86n.jpg",
    756999: "https://image.tmdb.org/t/p/w500/lr11mCT85T1JanlgjMuhMJ9ue72.jpg",
    26466: "https://image.tmdb.org/t/p/w500/17XQ6eT3d3e6J5f8l9d2.jpg",
    51876: "https://image.tmdb.org/t/p/w500/mF231i5b4.jpg",
    718821: "https://image.tmdb.org/t/p/w500/b132.jpg"
};

// ✅ HELPER: Single Metric "Suspense Score"
const createMovieData = (data) => ({
    suspenseIntensity: 85,          // Default
    complexityLevel: "HIGH",
    dominantColor: "#b91c1c",   // Thriller Red
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Memento (2000)
    // Curve: Confusion -> Curiosity -> Clarity -> Horror -> Nihilism.
    // Peak: 100 (The Polaroid Revelation - Total Deconstruction).
    77: createMovieData({ 
        suspenseIntensity: 98, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#1e293b", rating: 8.4, criticsScore: 94, audienceScore: 94, director: "Christopher Nolan", 
        cast: ["Guy Pearce", "Carrie-Anne Moss"], boxOffice: "$40 million", budget: "$9 million", 
        dna: { "Mystery": 60, "Thriller": 40 },
        scenes: [
            { time: 5, intensity: 20, label: "The End is the Beginning", color: "#334155" }, // Setup
            { time: 40, intensity: 50, label: "Finding Natalie", color: "#475569" }, // Intrigue
            { time: 80, intensity: 75, label: "The Chase", color: "#64748b" }, // Action
            { time: 105, intensity: 100, label: "The Polaroid", color: "#ef4444" }, // GENRE PEAK
            { time: 110, intensity: 85, label: "I'm Chasing Him", color: "#b91c1c" } // Twist
        ],
        synopsis: "Leonard Shelby is tracking down the man who raped and murdered his wife. The problem is, Leonard suffers from short-term memory loss and can't make new memories. Told in reverse chronological order, the audience is put directly into his fractured mind, creating a unique and terrifying puzzle that questions the nature of truth itself.",
        themes: ["Memory", "Identity", "Deception"]
    }),

    // 2. The Game (1997)
    // Curve: Control -> Chaos -> Paranoia -> Desperation -> Release.
    // Peak: 95 (The Roof Scene - Ultimate Test).
    2649: createMovieData({ 
        suspenseIntensity: 94, 
        complexityLevel: "PARANOID", 
        dominantColor: "#0f172a", rating: 7.7, criticsScore: 77, audienceScore: 84, director: "David Fincher", 
        cast: ["Michael Douglas", "Sean Penn"], boxOffice: "$109 million", budget: "$50 million", 
        dna: { "Thriller": 70, "Mystery": 30 },
        scenes: [
            { time: 15, intensity: 20, label: "The Gift", color: "#1e293b" }, // Setup
            { time: 50, intensity: 60, label: "House Invasion", color: "#b91c1c" }, // Escalation
            { time: 90, intensity: 85, label: "The Cemetery", color: "#7f1d1d" }, // Panic
            { time: 120, intensity: 95, label: "The Roof", color: "#000000" }, // PEAK TENSION
            { time: 128, intensity: 70, label: "The Party", color: "#facc15" } // Relief
        ],
        synopsis: "Nicholas Van Orton is a wealthy investment banker who has everything but control over his lonely life. On his 48th birthday, his brother gives him a gift certificate for a unique game run by a mysterious company. As the game begins, the line between reality and simulation dissolves, stripping Nicholas of his fortune, his sanity, and perhaps his life.",
        themes: ["Control", "Reality", "Rebirth"]
    }),

    // 3. Sicario (2015)
    // Curve: Dread -> Shock -> Helplessness -> Brutality.
    // Peak: 98 (The Border Crossing - Unbearable Tension).
    273481: createMovieData({ 
        suspenseIntensity: 98, 
        complexityLevel: "VISCERAL", 
        dominantColor: "#ca8a04", rating: 7.6, criticsScore: 92, audienceScore: 85, director: "Denis Villeneuve", 
        cast: ["Emily Blunt", "Benicio Del Toro", "Josh Brolin"], boxOffice: "$85 million", budget: "$30 million", 
        dna: { "Crime": 50, "Action": 30, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 60, label: "The Walls", color: "#b91c1c" }, // Horror
            { time: 40, intensity: 98, label: "The Border", color: "#ef4444" }, // GENRE PEAK
            { time: 75, intensity: 70, label: "The Tunnel", color: "#78350f" }, // Darkness
            { time: 100, intensity: 90, label: "Dinner Time", color: "#000000" }, // Cold Violence
            { time: 115, intensity: 60, label: "Land of Wolves", color: "#ca8a04" } // Theme
        ],
        synopsis: "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico. She quickly realizes that in this lawless land, legal and moral boundaries don't apply. Driven by Roger Deakins' cinematography and a menacing score, it is a masterclass in atmospheric dread.",
        themes: ["Morality", "War", "Lawlessness"]
    }),

    // 4. Coherence (2013)
    // Curve: Normalcy -> Anomalies -> Confusion -> Paranoia -> Chaos.
    // Peak: 92 (The Dark Zone - Reality Collapse).
    220289: createMovieData({ 
        suspenseIntensity: 90, 
        complexityLevel: "MIND-BENDING", 
        dominantColor: "#3b82f6", rating: 7.2, criticsScore: 88, audienceScore: 81, director: "James Ward Byrkit", 
        cast: ["Emily Foxler", "Maury Sterling"], boxOffice: "$100k", budget: "$50k", 
        dna: { "Sci-Fi": 60, "Thriller": 40 },
        scenes: [
            { time: 15, intensity: 20, label: "The Comet", color: "#60a5fa" }, // Setup
            { time: 35, intensity: 50, label: "The Knock", color: "#2563eb" }, // Intrigue
            { time: 60, intensity: 75, label: "The Box", color: "#1d4ed8" }, // Mystery
            { time: 80, intensity: 92, label: "Identity Crisis", color: "#1e3a8a" }, // PEAK CONFUSION
            { time: 88, intensity: 85, label: "Morning After", color: "#172554" } // Ambiguity
        ],
        synopsis: "On the night of an astronomical anomaly, eight friends at a dinner party experience a troubling chain of events. Power goes out, strange artifacts appear, and they realize the house down the street is identical to theirs—occupied by identical versions of themselves. A brilliant, low-budget sci-fi thriller about quantum decoherence and the darker side of human nature.",
        themes: ["Quantum Physics", "Identity", "Paranoia"]
    }),

    // 5. Inside Man (2006)
    // Curve: Plan -> Standoff -> Mystery -> Twist.
    // Peak: 85 (The Walk Out - Clever Execution).
    388: createMovieData({ 
        suspenseIntensity: 85, 
        complexityLevel: "SMART", 
        dominantColor: "#f59e0b", rating: 7.6, criticsScore: 86, audienceScore: 85, director: "Spike Lee", 
        cast: ["Denzel Washington", "Clive Owen", "Jodie Foster"], boxOffice: "$184 million", budget: "$45 million", 
        dna: { "Crime": 50, "Thriller": 50 },
        scenes: [
            { time: 15, intensity: 40, label: "The Takeover", color: "#fcd34d" }, // Action
            { time: 50, intensity: 60, label: "The Negotiations", color: "#f59e0b" }, // Dialogue
            { time: 85, intensity: 70, label: "The Execution", color: "#b45309" }, // Tension
            { time: 110, intensity: 85, label: "The Reveal", color: "#78350f" }, // PEAK TWIST
            { time: 125, intensity: 50, label: "The Diamond", color: "#d97706" } // Satisfaction
        ],
        synopsis: "A police detective, a bank robber, and a high-power broker enter high-stakes negotiations after the criminal's brilliant heist spirals into a hostage situation. But as the standoff continues, the detective realizes this is no ordinary bank robbery—and the robbers might be after something far more valuable than money.",
        themes: ["Power", "Deception", "Justice"]
    }),

    // 6. Law Abiding Citizen (2009)
    // Curve: Tragedy -> Revenge -> Escalation -> Warfare.
    // Peak: 88 (The Solitary Confinement Kill - Impossible Reach).
    22803: createMovieData({ 
        suspenseIntensity: 88, 
        complexityLevel: "BRUTAL", 
        dominantColor: "#dc2626", rating: 7.4, criticsScore: 26, audienceScore: 75, director: "F. Gary Gray", 
        cast: ["Gerard Butler", "Jamie Foxx"], boxOffice: "$127 million", budget: "$50 million", 
        dna: { "Thriller": 60, "Action": 40 },
        scenes: [
            { time: 10, intensity: 80, label: "The Opening", color: "#991b1b" }, // Shock
            { time: 40, intensity: 88, label: "The Cell Kill", color: "#ef4444" }, // PEAK IMPOSSIBLE
            { time: 70, intensity: 75, label: "The Judge", color: "#b91c1c" }, // Escalation
            { time: 95, intensity: 85, label: "The Bomb", color: "#7f1d1d" }, // Climax
            { time: 105, intensity: 60, label: "Checkmate", color: "#450a0a" } // Ending
        ],
        synopsis: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free. He targets not only the killer but also the district attorney and others involved in the deal. Even from solitary confinement, he orchestrates a city-wide campaign of terror, proving that the system is broken and he is the one fixing it.",
        themes: ["Vengeance", "Justice System", "Genius"]
    }),

    // 7. The Black Phone (2021)
    // Curve: Fear -> Abduction -> Supernatural Aid -> Escape.
    // Peak: 90 (The Showdown - Fight for Life).
    756999: createMovieData({ 
        suspenseIntensity: 87, 
        complexityLevel: "SUPERNATURAL", 
        dominantColor: "#57534e", rating: 6.9, criticsScore: 81, audienceScore: 88, director: "Scott Derrickson", 
        cast: ["Ethan Hawke", "Mason Thames"], boxOffice: "$161 million", budget: "$18 million", 
        dna: { "Horror": 60, "Thriller": 40 },
        scenes: [
            { time: 15, intensity: 60, label: "The Grabber", color: "#44403c" }, // Fear
            { time: 40, intensity: 50, label: "First Call", color: "#a8a29e" }, // Hope
            { time: 75, intensity: 75, label: "The Axe", color: "#b91c1c" }, // Tension
            { time: 95, intensity: 90, label: "The Trap", color: "#dc2626" }, // PEAK ACTION
            { time: 100, intensity: 60, label: "Freedom", color: "#d6d3d1" } // Relief
        ],
        synopsis: "After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer's previous victims. Guided by their voices, he attempts to escape before he suffers the same fate. A unique blend of true-crime aesthetics and supernatural horror.",
        themes: ["Survival", "Trauma", "Ghosts"]
    }),

    // 8. Triangle (2009)
    // Curve: Confusion -> Déjà Vu -> Realization -> Loop.
    // Peak: 92 (The Pile of Bodies - Horrifying Realization).
    26466: createMovieData({ 
        suspenseIntensity: 89, 
        complexityLevel: "LOOP", 
        dominantColor: "#0ea5e9", rating: 6.9, criticsScore: 80, audienceScore: 66, director: "Christopher Smith", 
        cast: ["Melissa George", "Liam Hemsworth"], boxOffice: "$1.3 million", budget: "$12 million", 
        dna: { "Horror": 50, "Sci-Fi": 30, "Mystery": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "The Storm", color: "#0284c7" }, // Action
            { time: 45, intensity: 65, label: "The Masked Killer", color: "#0369a1" }, // Slasher
            { time: 70, intensity: 85, label: "The Mirror", color: "#075985" }, // Confusion
            { time: 90, intensity: 92, label: "The Pile", color: "#dc2626" }, // PEAK HORROR
            { time: 98, intensity: 80, label: "The Cycle", color: "#1e3a8a" } // Despair
        ],
        synopsis: "A group of friends on a yacht trip encounter mysterious weather conditions and jump to another ship, only to experience greater havoc on the open seas. Jess becomes convinced she's been on this ship before, and as the group is hunted by a masked assailant, she discovers a terrifying time loop that forces her to kill to return home.",
        themes: ["Guilt", "Time Loop", "Motherhood"]
    }),

    // 9. Limitless (2011)
    // Curve: Discovery -> Power -> Addiction -> Danger.
    // Peak: 82 (The Apartment Fight - Desperate Measures).
    51876: createMovieData({ 
        suspenseIntensity: 82, 
        complexityLevel: "STYLISH", 
        dominantColor: "#facc15", rating: 7.4, criticsScore: 69, audienceScore: 74, director: "Neil Burger", 
        cast: ["Bradley Cooper", "Robert De Niro"], boxOffice: "$161 million", budget: "$27 million", 
        dna: { "Sci-Fi": 40, "Thriller": 60 },
        scenes: [
            { time: 15, intensity: 30, label: "First Pill", color: "#fef08a" }, // Wonder
            { time: 50, intensity: 60, label: "Wall Street", color: "#eab308" }, // Success
            { time: 80, intensity: 75, label: "The Blackout", color: "#a16207" }, // Fear
            { time: 95, intensity: 82, label: "Apartment Fight", color: "#b91c1c" }, // PEAK SURVIVAL
            { time: 104, intensity: 70, label: "New Man", color: "#facc15" } // Evolution
        ],
        synopsis: "With the help of a mysterious pill that enables the user to access 100 percent of his brain abilities, a struggling writer becomes a financial wizard, but it also puts him in a new world with lots of dangers. As his supply runs low and enemies close in, he must use his enhanced intellect to outmaneuver them all.",
        themes: ["Addiction", "Potential", "Power"]
    }),

    // 10. Twisters (2024)
    // Curve: Wonder -> Danger -> Destruction -> Survival.
    // Peak: 88 (The Refinery/Theater - Total Chaos).
    718821: createMovieData({ 
        suspenseIntensity: 85, 
        complexityLevel: "SPECTACLE", 
        dominantColor: "#64748b", rating: 7.0, criticsScore: 75, audienceScore: 85, director: "Lee Isaac Chung", 
        cast: ["Daisy Edgar-Jones", "Glen Powell"], boxOffice: "$369 million", budget: "$155 million", 
        dna: { "Action": 60, "Thriller": 40 },
        scenes: [
            { time: 10, intensity: 70, label: "The Opening", color: "#475569" }, // Trauma
            { time: 50, intensity: 60, label: "The Rodeo", color: "#94a3b8" }, // Chaos
            { time: 80, intensity: 75, label: "Fire Tornado", color: "#ea580c" }, // Visuals
            { time: 100, intensity: 88, label: "Movie Theater", color: "#0f172a" }, // PEAK DANGER
            { time: 110, intensity: 65, label: "The Solution", color: "#334155" } // Science
        ],
        synopsis: "A standalone sequel to the 1996 blockbuster, capturing the awe and terror of severe weather. A retired tornado chaser is drawn back into the field to test a groundbreaking new tracking system, crossing paths with a reckless social-media superstar storm chaser. As multiple systems converge, they find themselves in the fight of their lives.",
        themes: ["Nature", "Trauma", "Science"]
    })
};

export const PEACOCK_THRILLER_MOVIE_FAQS = {
    'Memento': [
        { question: "Is the black and white timeline chronological?", answer: "Yes. The black and white scenes move forward in time, while the color scenes move backward. They meet in the middle at the end of the film." },
        { question: "Did Sammy Jankis exist?", answer: "The film strongly implies that Sammy Jankis was a real person, but Leonard projected his own tragedy (accidentally killing his diabetic wife) onto Sammy's story to cope with the guilt." },
        { question: "Why the tattoos?", answer: "Since Leonard cannot make new memories, he uses tattoos of 'facts' on his body to navigate his life and investigation. However, the film questions whether these facts are true or manipulated lies." },
        { question: "Is Leonard the villain?", answer: "In a sense, yes. The twist reveals he essentially sets himself up on endless loops of vengeance to give his life purpose, knowingly manipulating his own memory to keep 'hunting' a killer he already found." }
    ],
    'The Game': [
        { question: "Was it really just a game?", answer: "Yes, the entire plot was an elaborate, live-action role-playing experience paid for by his brother. There was no real conspiracy, only highly orchestrated theater." },
        { question: "Is the ending happy?", answer: "Nicholas survives and reconciles with his brother, implying a rebirth. However, the extreme trauma he endured to get there makes the 'happy' ending feel unsettling to many viewers." },
        { question: "Did Sean Penn know the twist?", answer: "Yes, the character of Conrad (Sean Penn) knew the entire time that it was a birthday present, which adds a layer of dark humor to his 'panicked' performance." },
        { question: "What is the message?", answer: "The film is a parable about a man who has lost his soul to wealth and isolation. He must lose everything he owns—and face death—to appreciate his life again." }
    ],
    'Sicario': [
        { question: "What does 'Sicario' mean?", answer: "In Mexico, 'Sicario' means hitman. It refers to Benicio Del Toro's character, Alejandro, who is revealed to be a weaponized assassin rather than a government agent." },
        { question: "Why is the dinner scene so shocking?", answer: "It breaks the 'rules' of movie heroism. Alejandro doesn't just kill the bad guy; he executes his entire family first to inflict maximum suffering, showing he has lost his humanity." },
        { question: "Is Kate (Emily Blunt) weak?", answer: "No, she represents the rule of law. Her helplessness highlights that in the world of the cartel war, traditional law enforcement is powerless against the brutality required to make a difference." },
        { question: "Was the night vision scene real?", answer: "Cinematographer Roger Deakins used real night vision and thermal camera technology to film the tunnel sequence, giving it an authentic, suffocating atmosphere." }
    ],
    'Coherence': [
        { question: "Was there a script?", answer: "No. The film was largely improvised. The actors were given note cards each day with their character's motivations and secret objectives, but the dialogue and reactions were spontaneous." },
        { question: "Which Em is which?", answer: "Fans have mapped out the timelines, but the film is designed to be confusing. By the end, it is almost impossible to tell which version of the characters originated from the 'prime' reality." },
        { question: "What is the dark zone?", answer: "The dark zone outside the house represents the space between realities. Passing through it causes the characters to enter a state of 'superposition' where they can shift into parallel universes." },
        { question: "Why the ping pong paddle?", answer: "It was a random object the director had lying around, used to identify different versions of the house. It became a key plot device for the characters to track their reality jumps." }
    ],
    'Inside Man': [
        { question: "What was the perfect robbery?", answer: "Dalton Russell's plan was perfect because he never officially stole anything from the bank's vault records, walked out the front door, and the police couldn't prove he was ever there." },
        { question: "What was in the safe deposit box?", answer: "Box 392 contained documents proving the bank's founder was a Nazi war profiteer, along with a Cartier ring stolen from a Jewish family during the Holocaust." },
        { question: "Did Denzel know the truth?", answer: "At the end, Denzel's character finds the ring left for him, confirming his suspicion about the bank owner's past and acknowledging that Russell outsmarted him." },
        { question: "Is there a sequel?", answer: "There is a direct-to-video sequel called 'Inside Man: Most Wanted', but it does not feature the original cast or creative team and is generally unrelated in quality." }
    ],
    'Law Abiding Citizen': [
        { question: "How did he kill from prison?", answer: "Clyde Shelton (Gerard Butler) spent years digging a tunnel system under the prison into his solitary cell, allowing him to leave, commit murders, and return before anyone noticed." },
        { question: "Was the ending changed?", answer: "Rumors persist that Jamie Foxx demanded his character win, but the director maintains the ending was always intended to show that vengeance ultimately consumes itself." },
        { question: "Is the technology realistic?", answer: "While exaggerated for cinema, the improvised weapons and remote-controlled devices are based on real engineering principles, highlighting the character's background as a government tactician." },
        { question: "Who is the villain?", answer: "The film presents a moral grey area. Shelton is a murderer, but he exposes a corrupt justice system. Many audiences root for him over the prosecutor, making him a tragic anti-villain." }
    ],
    'The Black Phone': [
        { question: "Is The Grabber a human?", answer: "Yes, but Ethan Hawke plays him with a supernatural, almost demonic presence. The mask allows him to separate his 'human' side from his monstrous urges." },
        { question: "Are the ghosts real?", answer: "Yes. In this universe, the ghosts of the past victims are real entities communicating via the disconnected phone to help Finney survive where they failed." },
        { question: "Why does the mask change?", answer: "The mask has detachable mouth pieces (frown, smile, blank). The Grabber changes them to reflect his mood or the 'role' he is playing in his twisted game with the captive." },
        { question: "Is it based on a book?", answer: "It is based on a short story by Joe Hill, the son of Stephen King. The film expands the story significantly, adding the character of the sister and her psychic dreams." }
    ],
    'Triangle': [
        { question: "Is Jess in purgatory?", answer: "Many interpret the film as a modern retelling of the myth of Sisyphus. Jess broke a promise to death (the taxi driver) and is punished by reliving her trauma for eternity." },
        { question: "Why are there so many bodies?", answer: "The pile of bodies on the deck proves the loop has happened dozens, maybe hundreds of times before. It is a terrifying visual representation of the futility of her struggle." },
        { question: "Can she stop the loop?", answer: "The tragedy is that she *chooses* to restart the loop every time she steps back onto the boat, believing this time she can save her son, which is impossible." },
        { question: "What is the taxi driver?", answer: "The taxi driver is widely interpreted as Charon, the ferryman of Hades, waiting to take her to the afterlife. When she refuses and goes to the harbor, she restarts her hell." }
    ],
    'Limitless': [
        { question: "Is NZT-48 real?", answer: "No, NZT-48 is a fictional nootropic drug created for the movie. However, it is inspired by the popularity of 'smart drugs' like Modafinil in Silicon Valley culture." },
        { question: "Does the ending imply he is still on it?", answer: "Yes. The ending suggests Morra has perfected the drug to remove the side effects and is now running for Senate, implying he will become an unstoppable world leader." },
        { question: "Is the TV show connected?", answer: "Yes, the 'Limitless' TV series is a direct sequel where Bradley Cooper reprises his role as Senator Morra, occasionally providing the drug to the new protagonist." },
        { question: "What is the visual effect?", answer: "The director used different color grading and lenses for when Eddie is on the drug (bright, hyper-sharp, warm) versus off the drug (drab, blue-tinted, gritty)." }
    ],
    'Twisters': [
        { question: "Is it a reboot or a sequel?", answer: "It is a standalone sequel. It exists in the same world as the 1996 original (referencing the Dorothy sensors) but follows completely new characters and a new story." },
        { question: "Are the tornadoes CGI?", answer: "While CGI was used, the filmmakers prioritized practical effects for debris and wind. They used jet engines to blast wind and real ice for hail to make the actors' reactions authentic." },
        { question: "Is 'taming' a tornado possible?", answer: "The science in the film about collapsing a tornado using sodium polyacrylate is theoretical and highly exaggerated for cinema, but based on real weather modification research." },
        { question: "Did they film in Oklahoma?", answer: "Yes. Like the original, 'Twisters' was filmed on location in Oklahoma during tornado season to capture the authentic look of the skies and the landscape." }
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
        types.add(scene.type);
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PEACOCK_THRILLER_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A top thriller movie on Peacock.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.0, 
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