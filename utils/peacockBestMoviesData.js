// utils/peacockBestMoviesData.js - TOP 10 BEST MOVIES ON PEACOCK
// The definitive ranking of the highest-rated films currently streaming on Peacock.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 77, "imdbID": "tt0209144", "Title": "Memento", "year": 2000, "genre": "Thriller", "runtime": 113, "rank": 1 },
    { "tmdbId": 273481, "imdbID": "tt3397884", "Title": "Sicario", "year": 2015, "genre": "Crime", "runtime": 121, "rank": 2 },
    { "tmdbId": 281957, "imdbID": "tt1663202", "Title": "The Revenant", "year": 2015, "genre": "Adventure", "runtime": 156, "rank": 3 },
    { "tmdbId": 641, "imdbID": "tt0180093", "Title": "Requiem for a Dream", "year": 2000, "genre": "Drama", "runtime": 102, "rank": 4 },
    { "tmdbId": 9509, "imdbID": "tt0328107", "Title": "Man on Fire", "year": 2004, "genre": "Action", "runtime": 146, "rank": 5 },
    { "tmdbId": 1579, "imdbID": "tt0472043", "Title": "Apocalypto", "year": 2006, "genre": "Action", "runtime": 139, "rank": 6 },
    { "tmdbId": 122906, "imdbID": "tt2194499", "Title": "About Time", "year": 2013, "genre": "Romance", "runtime": 123, "rank": 7 },
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi", "runtime": 89, "rank": 8 },
    { "tmdbId": 673, "imdbID": "tt0304141", "Title": "Harry Potter and the Prisoner of Azkaban", "year": 2004, "genre": "Fantasy", "runtime": 141, "rank": 9 },
    { "tmdbId": 762, "imdbID": "tt0071853", "Title": "Monty Python and the Holy Grail", "year": 1975, "genre": "Comedy", "runtime": 91, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    // 1. Memento
    77: { 
        scenes: [
            { start: "1:40:00", end: "1:45:00", type: "Violence/Disturbing", severity: "High" }
        ] 
    },

    // 2. Sicario
    273481: { 
        scenes: [
            { start: "0:02:00", end: "0:06:00", type: "Gore/Graphic", severity: "High" },
            { start: "0:25:00", end: "0:30:00", type: "Gun Violence", severity: "High" },
            { start: "1:35:00", end: "1:40:00", type: "Violence", severity: "High" }
        ] 
    },

    // 3. The Revenant
    281957: { 
        scenes: [
            { start: "0:20:00", end: "0:25:00", type: "Animal Violence (Bear Attack)", severity: "Extreme" },
            { start: "1:15:00", end: "1:18:00", type: "Gore/Self-Surgery", severity: "High" },
            { start: "2:05:00", end: "2:10:00", type: "Sexual Violence (Implied)", severity: "High" }
        ] 
    },

    // 4. Requiem for a Dream
    641: { 
        scenes: [
            { start: "1:25:00", end: "1:40:00", type: "Disturbing Content (Montage)", severity: "Extreme" },
            { start: "1:30:00", end: "1:35:00", type: "Sexual Degradation", severity: "High" },
            { start: "1:35:00", end: "1:38:00", type: "Graphic Infection", severity: "High" }
        ] 
    },

    // 5. Man on Fire
    9509: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Kidnapping/Violence", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Torture", severity: "High" }
        ] 
    },

    // 6. Apocalypto
    1579: { 
        scenes: [
            { start: "0:50:00", end: "1:10:00", type: "Graphic Violence/Sacrifice", severity: "Extreme" },
            { start: "1:20:00", end: "1:25:00", type: "Gore", severity: "High" }
        ] 
    },

    // 7. About Time
    122906: { scenes: [] },

    // 8. Coherence
    220289: { 
        scenes: [
             { start: "1:10:00", end: "1:15:00", type: "Violence", severity: "Moderate" }
        ] 
    },

    // 9. Harry Potter and the Prisoner of Azkaban
    673: { scenes: [] },

    // 10. Monty Python and the Holy Grail
    762: { 
        scenes: [
            { start: "0:45:00", end: "0:48:00", type: "Comic Violence (Rabbit)", severity: "Moderate" },
            { start: "0:15:00", end: "0:18:00", type: "Comic Gore (Black Knight)", severity: "Low" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    77: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
    273481: "https://image.tmdb.org/t/p/w500/pxSogSE52moCqT7yO7y2Nl2z2w.jpg",
    281957: "https://image.tmdb.org/t/p/w500/ji3ecJphATlguFIbtONoBbAnQ9A.jpg",
    641: "https://image.tmdb.org/t/p/w500/nOd6vjEmzCT0k4IYqsA2TeQI0O.jpg",
    9509: "https://image.tmdb.org/t/p/w500/eGDeaXAmGTsf3FfXFjL45p6qY5.jpg",
    1579: "https://image.tmdb.org/t/p/w500/c02058C6e60b138F932145e69.jpg",
    122906: "https://image.tmdb.org/t/p/w500/iLg97gV0r3t7t5P5b9b9b9b9b9.jpg", // Placeholder
    220289: "https://image.tmdb.org/t/p/w500/5g0j8gV0r3t7t5P5b9b9b9b9b9.jpg", // Placeholder
    673: "https://image.tmdb.org/t/p/w500/aWHEREiH13579.jpg", // Placeholder
    762: "https://image.tmdb.org/t/p/w500/hK8b8b8b8b8b8.jpg" // Placeholder
};

// ✅ HELPER: Standard Data Creator
const createMovieData = (data) => ({
    adrenalineScore: 85,    
    violenceLevel: 75,      
    visceralImpact: 90,     
    complexityLevel: "ESSENTIAL",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Memento (Faded Polaroid - Memory Decay)
    77: createMovieData({
        rating: 8.4, criticsScore: 93, audienceScore: 94, director: "Christopher Nolan",
        cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"], boxOffice: "$40 million", budget: "$9 million",
        dominantColor: "#e5e5e5", // Faded White/Grey
        dna: { "Thriller": 60, "Mystery": 30, "Noir": 10 },
        scenes: [
            { time: 10, intensity: 40, label: "The Beginning is the End", color: "#f5f5f5" },
            { time: 45, intensity: 60, label: "Finding the Tattoo", color: "#d4d4d4" },
            { time: 80, intensity: 80, label: "Natalie's Manipulation", color: "#737373" },
            { time: 100, intensity: 95, label: "The Truth Revealed", color: "#404040" },
            { time: 110, intensity: 90, label: "I've Done It", color: "#171717" }
        ],
        synopsis: "Leonard Shelby is tracking down the man who raped and murdered his wife. The catch? Leonard suffers from a rare, untreatable form of memory loss. He can recall details of life before his 'accident,' but cannot remember what happened fifteen minutes ago, where he is, or why he is there. Christopher Nolan’s masterpiece unfolds in reverse chronology, forcing the audience to feel Leonard’s confusion and paranoia.",
        themes: ["Memory", "Identity", "Deception"]
    }),

    // 2. Sicario (Dust Yellow - Border Tension)
    273481: createMovieData({
        rating: 7.6, criticsScore: 92, audienceScore: 85, director: "Denis Villeneuve",
        cast: ["Emily Blunt", "Benicio Del Toro", "Josh Brolin"], boxOffice: "$85 million", budget: "$30 million",
        dominantColor: "#eab308", // Dust Yellow
        dna: { "Crime": 50, "Thriller": 40, "Drama": 10 },
        scenes: [
            { time: 5, intensity: 80, label: "The Walls", color: "#a16207" },
            { time: 30, intensity: 95, label: "The Border Crossing", color: "#ca8a04" },
            { time: 70, intensity: 60, label: "The Tunnel Info", color: "#d97706" },
            { time: 90, intensity: 85, label: "Night Vision", color: "#166534" }, // Green for night vision
            { time: 115, intensity: 90, label: "Adios", color: "#854d0e" }
        ],
        synopsis: "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico. As she descends into the lawless world of cartel violence, she realizes her team—led by a mysterious consultant with a dark past—operates with a brutality that blurs the line between the law and the criminals they hunt.",
        themes: ["Morality", "Revenge", "Corruption"]
    }),

    // 3. The Revenant (Icy Blue - Frozen Survival)
    281957: createMovieData({
        rating: 8.0, criticsScore: 78, audienceScore: 84, director: "Alejandro G. Iñárritu",
        cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"], boxOffice: "$533 million", budget: "$135 million",
        dominantColor: "#bfdbfe", // Ice Blue
        dna: { "Adventure": 50, "Western": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 85, label: "The Ambush", color: "#93c5fd" },
            { time: 30, intensity: 98, label: "The Bear Attack", color: "#ef4444" },
            { time: 60, intensity: 50, label: "Crawling", color: "#60a5fa" },
            { time: 100, intensity: 70, label: "Horse Sacrifice", color: "#3b82f6" },
            { time: 140, intensity: 90, label: "Final Confrontation", color: "#1e3a8a" }
        ],
        synopsis: "In the 1820s, a frontiersman on a fur trading expedition is brutally mauled by a bear and left for dead by members of his own hunting team. Guided by sheer will and the love of his family, he must navigate a vicious winter and hostile terrain to track down the man who betrayed him. A visceral, immersive experience shot entirely in natural light.",
        themes: ["Survival", "Revenge", "Nature"]
    }),

    // 4. Requiem for a Dream (Sickly Green/Purple - Addiction)
    641: createMovieData({
        rating: 8.3, criticsScore: 79, audienceScore: 93, director: "Darren Aronofsky",
        cast: ["Jared Leto", "Jennifer Connelly", "Ellen Burstyn"], boxOffice: "$7 million", budget: "$4.5 million",
        dominantColor: "#581c87", // Deep Purple
        dna: { "Drama": 60, "Horror": 20, "Psychological": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "Summer Highs", color: "#c084fc" },
            { time: 50, intensity: 60, label: "Winter Coming", color: "#a855f7" },
            { time: 70, intensity: 80, label: "The Red Dress", color: "#7e22ce" },
            { time: 90, intensity: 98, label: "The Montage", color: "#581c87" },
            { time: 100, intensity: 100, label: "Ass to Ass", color: "#3b0764" }
        ],
        synopsis: "A stylistic tour-de-force that exposes the dark underbelly of the American Dream. The film follows four Coney Island residents as they spiral into different forms of addiction—from heroin to diet pills. As their highs give way to crushing lows, their lives are systematically dismantled in a harrowing crescendo of despair, edited with a frantic, rhythmic intensity.",
        themes: ["Addiction", "Delusion", "Tragedy"]
    }),

    // 5. Man on Fire (Saturated Green/Orange - Chaos)
    9509: createMovieData({
        rating: 7.7, criticsScore: 39, audienceScore: 89, director: "Tony Scott",
        cast: ["Denzel Washington", "Dakota Fanning", "Christopher Walken"], boxOffice: "$130 million", budget: "$70 million",
        dominantColor: "#65a30d", // Acid Green
        dna: { "Action": 50, "Drama": 30, "Crime": 20 },
        scenes: [
            { time: 20, intensity: 30, label: "The Bodyguard", color: "#bef264" },
            { time: 45, intensity: 90, label: "The Kidnapping", color: "#ea580c" },
            { time: 70, intensity: 80, label: "La Hermandad", color: "#65a30d" },
            { time: 90, intensity: 85, label: "The Finger", color: "#4d7c0f" },
            { time: 130, intensity: 95, label: "The Exchange", color: "#3f6212" }
        ],
        synopsis: "In Mexico City, a former CIA operative who has given up on life reluctantly accepts a job protecting a wealthy family's daughter, Pita. Just as she begins to break through his emotional walls, she is kidnapped. Fueled by rage and guilt, he unleashes a firestorm of vengeance on those responsible, vowing to kill everyone involved. 'I wish... you had... more time.'",
        themes: ["Redemption", "Vengeance", "Protection"]
    }),

    // 6. Apocalypto (Jungle Green - Primal Fear)
    1579: createMovieData({
        rating: 7.8, criticsScore: 66, audienceScore: 86, director: "Mel Gibson",
        cast: ["Rudy Youngblood", "Dalia Hernández", "Jonathan Brewer"], boxOffice: "$120 million", budget: "$40 million",
        dominantColor: "#14532d", // Deep Jungle Green
        dna: { "Action": 60, "History": 20, "Thriller": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "The Tapir Hunt", color: "#16a34a" },
            { time: 40, intensity: 85, label: "The Village Raid", color: "#dc2626" },
            { time: 80, intensity: 95, label: "The Altar", color: "#991b1b" },
            { time: 100, intensity: 90, label: "The Eclipse", color: "#000000" },
            { time: 120, intensity: 92, label: "The Chase", color: "#15803d" }
        ],
        synopsis: "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate and return to his pregnant wife and son. A relentless, heart-pounding chase ensues through the dense rainforest, featuring some of the most kinetic action filmmaking ever captured.",
        themes: ["Survival", "Destiny", "Decline of Civilization"]
    }),

    // 7. About Time (Warm Orange - Love & Home)
    122906: createMovieData({
        rating: 7.8, criticsScore: 71, audienceScore: 88, director: "Richard Curtis",
        cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"], boxOffice: "$87 million", budget: "$12 million",
        dominantColor: "#f97316", // Warm Orange
        dna: { "Romance": 40, "Sci-Fi": 20, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 20, label: "The Secret", color: "#fdba74" },
            { time: 40, intensity: 40, label: "Meeting Mary", color: "#fb923c" },
            { time: 70, intensity: 60, label: "The Wedding", color: "#f97316" },
            { time: 90, intensity: 75, label: "The Accident", color: "#c2410c" },
            { time: 110, intensity: 85, label: "The Last Walk", color: "#ea580c" }
        ],
        synopsis: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think. Unlike most time travel movies, this uses the mechanic to explore the beauty of an ordinary day and the bond between a father and son.",
        themes: ["Time", "Family", "Appreciation"]
    }),

    // 8. Coherence (Dark Navy - Quantum Uncertainty)
    220289: createMovieData({
        rating: 7.2, criticsScore: 88, audienceScore: 81, director: "James Ward Byrkit",
        cast: ["Emily Foxler", "Maury Sterling", "Nicholas Brendon"], boxOffice: "$100,000", budget: "$50,000",
        dominantColor: "#172554", // Dark Navy
        dna: { "Sci-Fi": 50, "Thriller": 40, "Mystery": 10 },
        scenes: [
            { time: 10, intensity: 20, label: "Dinner Party", color: "#1e3a8a" },
            { time: 30, intensity: 50, label: "Lights Out", color: "#1d4ed8" },
            { time: 60, intensity: 75, label: "The Glow Sticks", color: "#2563eb" },
            { time: 80, intensity: 90, label: "Schrodinger's Box", color: "#3b82f6" },
            { time: 88, intensity: 95, label: "The Morning After", color: "#60a5fa" }
        ],
        synopsis: "Strange things begin to happen when a group of friends gathers for a dinner party on an evening when a comet is passing overhead. As reality begins to fracture, the group realizes they are interacting with alternate versions of themselves from parallel timelines. A masterclass in low-budget filmmaking, relying on improvisation and a mind-bending script rather than special effects.",
        themes: ["Paranoia", "Quantum Physics", "Trust"]
    }),

    // 9. Harry Potter and the Prisoner of Azkaban (Moody Grey - Magical Noir)
    673: createMovieData({
        rating: 7.9, criticsScore: 90, audienceScore: 86, director: "Alfonso Cuarón",
        cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Gary Oldman"], boxOffice: "$797 million", budget: "$130 million",
        dominantColor: "#374151", // Dark Grey
        dna: { "Fantasy": 50, "Adventure": 30, "Mystery": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "The Dementor", color: "#1f2937" },
            { time: 50, intensity: 60, label: "The Boggart", color: "#4b5563" },
            { time: 90, intensity: 80, label: "The Whomping Willow", color: "#111827" },
            { time: 110, intensity: 90, label: "Time Turner", color: "#d1d5db" },
            { time: 130, intensity: 95, label: "Expecto Patronum", color: "#e5e7eb" }
        ],
        synopsis: "Harry Potter's third year at Hogwarts is marked by the escape of Sirius Black, a convict believed to be one of Lord Voldemort's top supporters. Alfonso Cuarón completely reinvented the visual language of the franchise, introducing a darker, grittier tone, time travel mechanics, and a more mature emotional landscape for the trio.",
        themes: ["Time", "Fear", "Identity"]
    }),

    // 10. Monty Python and the Holy Grail (Mud Brown - Absurdist Medieval)
    762: createMovieData({
        rating: 8.2, criticsScore: 97, audienceScore: 95, director: "Terry Gilliam & Terry Jones",
        cast: ["Graham Chapman", "John Cleese", "Eric Idle"], boxOffice: "$5 million", budget: "$400,000",
        dominantColor: "#78350f", // Mud Brown
        dna: { "Comedy": 70, "Fantasy": 20, "Adventure": 10 },
        scenes: [
            { time: 10, intensity: 30, label: "Coconuts", color: "#a16207" },
            { time: 25, intensity: 45, label: "The Black Knight", color: "#7f1d1d" },
            { time: 50, intensity: 50, label: "Knights Who Say Ni", color: "#3f6212" },
            { time: 75, intensity: 70, label: "Killer Rabbit", color: "#ef4444" },
            { time: 85, intensity: 20, label: "The Police", color: "#1e3a8a" }
        ],
        synopsis: "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail. Along the way, they encounter French taunters, a killer rabbit, and the Knights Who Say 'Ni'. It is widely considered one of the funniest movies ever made, deconstructing the epic hero's journey with relentless absurdity and British wit.",
        themes: ["Absurdity", "Satire", "Medieval"]
    })
};

export const PEACOCK_BEST_MOVIE_FAQS = {
    'Memento': [
        { 
            question: "Is the story told backwards?", 
            answer: "The film uses a unique dual structure. The color sequences recount the story in reverse order (Scene Z, then Scene Y, then Scene X), while the black-and-white sequences run chronologically forward (Scene 1, Scene 2, Scene 3). The two storylines converge at the end of the film, which is actually the middle of the narrative chronologically." 
        },
        { 
            question: "What is the meaning of the tattoo 'Remember Sammy Jankis'?", 
            answer: "Sammy Jankis was a case study Leonard supposedly handled as an insurance investigator. However, the film strongly implies (via a split-second frame) that Sammy Jankis is actually a projection of Leonard himself. Leonard likely repressed the memory that he, not Sammy, accidentally killed his diabetic wife with insulin injections, fabricating the Sammy story to handle his guilt." 
        },
        { 
            question: "How long did it take to shoot Memento?", 
            answer: "The film was shot in just 25 days on a modest budget of $9 million. Despite the tight schedule, Nolan’s precise planning allowed them to capture the complex, fragmented narrative effectively. It launched Christopher Nolan’s career into the stratosphere." 
        },
        { 
            question: "Is there a chronological version?", 
            answer: "Yes. The 'Chronological Cut' is available as an easter egg on the special edition DVD. Watching it this way completely changes the experience—it turns a mystery into a tragedy about a man being manipulated by everyone around him, but it removes the subjective experience of Leonard's condition." 
        }
    ],
    'Sicario': [
        { 
            question: "What does the title 'Sicario' mean?", 
            answer: "In Mexico, 'Sicario' means hitman. It comes from the 'sicarii,' zealots of Jerusalem who killed Roman invaders with small daggers hidden in their cloaks. The title refers to Benicio Del Toro's character, Alejandro, who acts as a government-sanctioned assassin." 
        },
        { 
            question: "Is the border crossing scene real?", 
            answer: "The tension-filled scene at the Juarez-El Paso bridge was meticulously staged. While they couldn't shut down the real border crossing, production designer Patrice Vermette built a full-scale replica of the border lanes in Albuquerque, New Mexico. The tactical movement of the Delta Force team was supervised by real military advisors for maximum authenticity." 
        },
        { 
            question: "Why does Alejandro kill the family at the dinner table?", 
            answer: "It is a brutal display of the film's theme: to defeat a monster, you must become one. Alejandro explains earlier that the drug lord Fausto Alarcon took his wife and daughter. By killing Alarcon's family in front of him, Alejandro is visiting the exact same trauma upon the drug lord, ensuring the bloodline ends there. It is 'revenge served cold' in its purest form." 
        },
        { 
            question: "Will Emily Blunt return to the franchise?", 
            answer: "Emily Blunt did not return for the sequel, 'Sicario: Day of the Soldado.' Screenwriter Taylor Sheridan stated that her character's arc was complete in the first film—she served as the audience's moral compass witnessing the horror, and by the end, she had been 'broken' by the reality of the situation." 
        }
    ],
    'The Revenant': [
        { 
            question: "Did Leonardo DiCaprio actually sleep in a horse?", 
            answer: "While he didn't sleep in a *real* horse carcass, the prop department built a highly realistic prosthetic horse for the scene. However, DiCaprio did eat real raw bison liver for the film. He stated that the jelly-like prop liver didn't look authentic enough, so he requested the real organ. His retching reaction in the film is genuine." 
        },
        { 
            question: "How was the bear attack filmed?", 
            answer: "The bear attack is entirely CGI, but it looks incredibly real because of how it was shot. Stuntman Glenn Ennis wore a blue bodysuit and thrashed DiCaprio around on a set that included wires and ropes to simulate the force of the bear. The team studied videos of real bear attacks to mimic the animal's sporadic, heavy movements." 
        },
        { 
            question: "Why does the movie look so natural?", 
            answer: "Director Iñárritu and cinematographer Emmanuel Lubezki made the bold decision to shoot the entire film using only natural light (sun and fire). This meant they had very short windows to film each day (sometimes only 90 minutes). They used the new ARRI Alexa 65 camera, which captures an immense amount of detail, making the viewer feel physically present in the cold." 
        },
        { 
            question: "Is it a true story?", 
            answer: "It is based on the life of Hugh Glass, a real frontiersman who was mauled by a bear in 1823 and crawled 200 miles to safety. While the core survival story is true, the film fictionalizes elements for dramatic effect—specifically, the real Hugh Glass did not have a half-Indigenous son who was murdered, which was added to give him a motivation for revenge." 
        }
    ],
    'Requiem for a Dream': [
        { 
            question: "What is 'Hip Hop Montage' editing?", 
            answer: "Director Darren Aronofsky used a technique he calls 'hip hop montage' (extremely fast cuts accompanied by sharp sound effects) to simulate the rush of drug use. The film has over 2,000 cuts, whereas an average 100-minute film has about 600-700. This rhythmic editing creates a sensory overload that mimics the characters' physiological states." 
        },
        { 
            question: "Did Ellen Burstyn wear a fat suit?", 
            answer: "Yes. To depict Sara Goldfarb's weight loss journey, Ellen Burstyn wore a 40-pound fat suit at the beginning of filming. As the character abused diet pills, Burstyn switched to lighter suits and eventually no padding. The production also used oversized props (like the refrigerator) to make her appear smaller and more fragile as the film progressed." 
        },
        { 
            question: "Why is the ending so depressing?", 
            answer: "Aronofsky intended the film to be a 'monster movie' where the monster is addiction. The ending depicts the total destruction of the four main characters to show that addiction wins every time. There is no redemption arc because the film serves as a cautionary tale about the pursuit of happiness through artificial means." 
        },
        { 
            question: "What is the song used in the climax?", 
            answer: "The track is 'Lux Aeterna' by Clint Mansell. It has become one of the most famous pieces of film music ever written, frequently used in trailers for other epic movies (like Lord of the Rings). Its driving, repetitive string arrangement perfectly captures the feeling of impending doom." 
        }
    ],
    'Man on Fire': [
        { 
            question: "Why is the editing so chaotic?", 
            answer: "Tony Scott used hand-cranked cameras, double exposures, and varying film speeds to create a visual style that reflected the protagonist's fractured, alcoholic state of mind. The subtitles appearing on screen in different fonts and locations were intended to emphasize the disorientation and intensity of the kidnapping situation." 
        },
        { 
            question: "Is Man on Fire a true story?", 
            answer: "No, it is based on a 1980 novel by A.J. Quinnell. However, kidnapping was a very real epidemic in Mexico City during the time of filming. The filmmakers hired real kidnapping experts and bodyguards as consultants to ensure the tactics used by Creasy (Denzel Washington) and the criminals were authentic to the region." 
        },
        { 
            question: "What does the bullet pendant mean?", 
            answer: "Creasy gives Pita a pendant of St. Jude (the patron saint of lost causes). Later, it is revealed that the bullet he tried to kill himself with (which misfired) is inside. It symbolizes that his life was spared for a reason—to save her. It connects his past suicide attempt with his future redemption." 
        },
        { 
            question: "Does Creasy die at the end?", 
            answer: "Yes. In the final scene, Creasy surrenders himself to 'The Voice' in exchange for Pita's life. He has been shot multiple times prior to the exchange. As he is driven away by the cartel, he peacefully closes his eyes and passes away, having completed his mission. The film ends with a dedication to the city of Mexico." 
        }
    ],
    'Apocalypto': [
        { 
            question: "What language are they speaking?", 
            answer: "The entire film is spoken in the Yucatec Maya language. Mel Gibson insisted on using the native dialect to immerse the audience completely in the era. The cast consisted of Native American and Indigenous Mexican actors, many of whom had to learn the specific dialect for the film." 
        },
        { 
            question: "How historically accurate is the sacrifice?", 
            answer: "The depiction of human sacrifice is a subject of debate. While the Mayans did practice sacrifice, the scale shown in the film (hundreds of bodies, industrial-style execution) is more akin to the Aztecs. However, the methods shown—heart extraction and painting the victims blue—are based on archaeological evidence and murals found at Mayan sites." 
        },
        { 
            question: "Was the jaguar real?", 
            answer: "Yes, a real jaguar was used for close-up shots, filmed on a leash with safety precautions. For the scene where the jaguar chases Jaguar Paw, a puppet and CGI were used for the more dangerous interactions. The scene is terrifyingly effective because it blends practical animal work with visual effects." 
        },
        { 
            question: "What does the ending with the ships mean?", 
            answer: "The arrival of the Spanish Conquistadors at the end signals the true apocalypse for the Mayan civilization. While Jaguar Paw has survived his personal ordeal, his world is about to end due to disease and colonization. He chooses to retreat into the forest, rejecting the 'new beginning,' symbolizing a desire to hold onto his roots." 
        }
    ],
    'About Time': [
        { 
            question: "What are the rules of time travel in this movie?", 
            answer: "The rules are specific: 1) Only the men in the family can travel. 2) You can only travel back to places you have physically been and moments you remember. 3) You cannot travel to the future. 4) Once you have a child, you cannot travel back to before their birth, or you risk changing the exact sperm/egg combination, effectively erasing your child." 
        },
        { 
            question: "Is Rachel McAdams in every time travel movie?", 
            answer: "It certainly feels like it! She starred as the love interest in 'The Time Traveler's Wife' (2009), 'Midnight in Paris' (2011), and 'About Time' (2013). Ironically, she is never the one doing the time traveling; she is always the partner of the traveler." 
        },
        { 
            question: "Why is the father-son relationship so central?", 
            answer: "Director Richard Curtis wrote the film after losing his own parents. He realized that if he could time travel, he wouldn't kill Hitler or become rich; he would just want more time with his family. The film shifts from a romantic comedy to a poignant drama about grief and the preciousness of ordinary days." 
        },
        { 
            question: "Was the blind date scene scripted?", 
            answer: "The 'Dining in the Dark' scene was scripted, but it was filmed in pitch blackness. The actors (Domhnall Gleeson and Rachel McAdams) could not see each other, which added a genuine awkwardness and chemistry to their voices. It highlights the film's theme that connection is about personality, not just visuals." 
        }
    ],
    'Coherence': [
        { 
            question: "Was there a script for Coherence?", 
            answer: "No. There was a detailed 'treatment' outlining the plot points, but no dialogue. The actors were given notes each day describing their character's motivations and secrets, but they had to improvise their reactions to the strange events (like the blackout or the box arriving). This is why the confusion and talking over each other feels so realistic." 
        },
        { 
            question: "Where was it filmed?", 
            answer: "The entire movie was filmed in the director James Ward Byrkit's living room in Santa Monica. It was shot over five nights with a micro-budget. It is a prime example of how a high-concept sci-fi story can be told without expensive sets or CGI." 
        },
        { 
            question: "What is the significance of the glow sticks?", 
            answer: "The glow sticks serve as markers for different realities. Since the characters from different timelines look identical, the colors (red, blue, green) help the audience (and the characters) track which timeline they are currently in. If a character returns from outside holding a different color glow stick, you know they have swapped universes." 
        },
        { 
            question: "What is the 'Schrödinger's Cat' theory?", 
            answer: "The film uses this quantum mechanics thought experiment as its basis. The comet creates a state of 'decoherence' where all possible outcomes exist simultaneously. Until the comet passes (the box is opened), the characters are existing in a superposition of realities where they are both dead and alive, happy and miserable, all at once." 
        }
    ],
    'Harry Potter and the Prisoner of Azkaban': [
        { 
            question: "Why did the actors stop wearing robes?", 
            answer: "Director Alfonso Cuarón wanted to modernize the look and show the characters as regular teenagers. He encouraged them to wear muggle clothes (jeans, hoodies) during downtime at Hogwarts to make them feel more relatable and less like caricatures. It marked a visual shift from the 'storybook' style of the first two films." 
        },
        { 
            question: "How was the Knight Bus scene filmed?", 
            answer: "To make the bus seem like it was zooming at hyper-speed while the world stood still, the scene was filmed at a very slow frame rate while the bus drove at normal speed. The cars around it drove incredibly slowly (almost crawling). When played back at normal speed, the bus appears to rocket through traffic." 
        },
        { 
            question: "Is the Time Turner paradox resolved?", 
            answer: "The film uses a 'closed loop' theory of time travel (predestination paradox). Harry sees his future self saving him, which allows him to survive to become that future self. Unlike 'Back to the Future' where you can change the past, here the past has already happened, and the characters are just fulfilling the loop." 
        },
        { 
            question: "Why is the screen fading to black considered iconic?", 
            answer: "Actually, it fades to white! It is one of the few movies to end with an iris shot fading to white, emphasizing the 'memory' aspect (like a patronus). However, the end credits map (Marauder's Map) is famous for a cheeky detail: two pairs of footprints in a corner that appear to be engaging in... intimate activity." 
        }
    ],
    'Monty Python and the Holy Grail': [
        { 
            question: "Why do they use coconuts instead of horses?", 
            answer: "Purely because of the budget. The production could not afford real horses. They decided to embrace the poverty of the production by having the squires bang coconut shells together, a classic radio sound effect foley trick. It became one of the most famous jokes in cinema history." 
        },
        { 
            question: "Is the castle real?", 
            answer: "Most of the castle scenes were filmed at Doune Castle in Scotland. Because the National Trust withdrew permission for other locations at the last minute, the crew used different angles of the *same* castle to represent Camelot, Swamp Castle, and Castle Anthrax. They just hung different banners to disguise it." 
        },
        { 
            question: "What happened to the ending?", 
            answer: "The film ends abruptly with the modern-day police arresting the knights and the camera breaking. This wasn't a high-concept artistic choice; they simply ran out of money and couldn't afford to film a large battle scene finale. They improvised the 'cop out' ending (pun intended) to wrap it up cheaply." 
        },
        { 
            question: "Was the Black Knight scene scripted?", 
            answer: "Yes, heavily. It is based on an old Roman legend about a wrestler who kept fighting despite losing limbs. John Cleese (The Black Knight) was actually balancing on a bucket buried in the ground after losing his legs to achieve the height difference." 
        }
    ]
};

// Required exports
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => {
    return PEACOCK_BEST_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - Best movie on Peacock.`,
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

export const getSensitiveContentTypes = (tmdbId) => [];
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