// utils/hboMaxThrillerMovieData.js - HBO MAX THRILLER COLLECTION DATA
// Ranked by Suspense, Psychological Tension, and Narrative Twists

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 8461, "imdbID": "tt0119167", "Title": "Funny Games", "year": 2007, "genre": "Thriller", "runtime": 111, "rank": 1 },
    { "tmdbId": 419430, "imdbID": "tt5052448", "Title": "Get Out", "year": 2017, "genre": "Horror", "runtime": 104, "rank": 2 },
    { "tmdbId": 399057, "imdbID": "tt5715874", "Title": "The Killing of a Sacred Deer", "year": 2017, "genre": "Thriller", "runtime": 121, "rank": 3 },
    { "tmdbId": 381288, "imdbID": "tt4972582", "Title": "Split", "year": 2016, "genre": "Thriller", "runtime": 117, "rank": 4 },
    { "tmdbId": 152601, "imdbID": "tt2316411", "Title": "Enemy", "year": 2013, "genre": "Mystery", "runtime": 91, "rank": 5 },
    { "tmdbId": 264660, "imdbID": "tt0470752", "Title": "Ex Machina", "year": 2014, "genre": "Sci-Fi", "runtime": 108, "rank": 6 },
    { "tmdbId": 275, "imdbID": "tt0116282", "Title": "Fargo", "year": 1996, "genre": "Crime", "runtime": 98, "rank": 7 },
    { "tmdbId": 23168, "imdbID": "tt0844708", "Title": "The Town", "year": 2010, "genre": "Crime", "runtime": 125, "rank": 8 },
    { "tmdbId": 155, "imdbID": "tt0468569", "Title": "The Dark Knight", "year": 2008, "genre": "Action", "runtime": 152, "rank": 9 },
    { "tmdbId": 27205, "imdbID": "tt1375666", "Title": "Inception", "year": 2010, "genre": "Sci-Fi", "runtime": 148, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Psychological Tension & Violence)
export const SENSITIVE_TIMELINES = {
    // 1. Funny Games (2007)
    8461: { 
        scenes: [
            { start: "0:25:00", end: "0:30:00", type: "Home Invasion", severity: "High" }, // The leg break
            { start: "1:15:00", end: "1:20:00", type: "Psychological Torture", severity: "Extreme" }, // The knife game
            { start: "1:35:00", end: "1:40:00", type: "Murder", severity: "High" } // The boat scene
        ] 
    },
    // 2. Get Out
    419430: { 
        scenes: [
            { start: "1:25:00", end: "1:35:00", type: "Violence/Gore", severity: "High" }, // The surgery/escape
            { start: "0:45:00", end: "0:50:00", type: "Hypnosis/Mind Control", severity: "Moderate" }
        ] 
    },
    // 3. The Killing of a Sacred Deer
    399057: { 
        scenes: [
            { start: "1:40:00", end: "1:50:00", type: "Russian Roulette", severity: "Extreme" }, // The final choice
            { start: "0:55:00", end: "1:00:00", type: "Self-Harm", severity: "High" } // Biting flesh
        ] 
    },
    // 4. Split
    381288: { 
        scenes: [
            { start: "1:30:00", end: "1:40:00", type: "Cannibalism/Violence", severity: "High" } // The Beast emerges
        ] 
    },
    // 5. Enemy
    152601: { scenes: [] }, // Mostly psychological tension
    
    // 6. Ex Machina
    264660: { 
        scenes: [
            { start: "1:35:00", end: "1:40:00", type: "Stabbing/Violence", severity: "High" } // Ava's escape
        ] 
    },
    // 7. Fargo
    275: { 
        scenes: [
            { start: "1:25:00", end: "1:30:00", type: "Gore", severity: "High" } // Woodchipper scene
        ] 
    },
    // 8. The Town
    23168: { 
        scenes: [
            { start: "1:45:00", end: "1:55:00", type: "Gun Violence", severity: "High" } // Fenway shootout
        ] 
    },
    // 9. The Dark Knight
    155: { 
        scenes: [
            { start: "0:56:00", end: "0:57:00", type: "Violence", severity: "Moderate" } // Pencil trick
        ] 
    },
    // 10. Inception
    27205: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    8461: "https://image.tmdb.org/t/p/w500/q281rLnF00D39Z2V3024.jpg",
    419430: "https://image.tmdb.org/t/p/w500/tFXcEccSQMF3lfhfXKSUK958bcc.jpg",
    399057: "https://image.tmdb.org/t/p/w500/glJ9D910.jpg",
    381288: "https://image.tmdb.org/t/p/w500/f8D285.jpg",
    152601: "https://image.tmdb.org/t/p/w500/coG.jpg",
    264660: "https://image.tmdb.org/t/p/w500/9X.jpg",
    275: "https://image.tmdb.org/t/p/w500/rt.jpg",
    23168: "https://image.tmdb.org/t/p/w500/l8.jpg",
    155: "https://image.tmdb.org/t/p/w500/qJ.jpg",
    27205: "https://image.tmdb.org/t/p/w500/9g.jpg"
};

// ✅ HELPER: Customized for Thriller
const createMovieData = (data) => ({
    suspenseIntensity: 85, // Overall tension level
    psychologicalPressure: 90, // Mind games
    complexityLevel: "HIGH",
    dominantColor: "#b91c1c", // Dark Red
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Funny Games (NIHILISTIC TENSION)
    // Curve: Calm -> Intrusion -> Torture -> False Hope -> Rewind -> Darkness.
    // Peak: 98 (The Remote Control Rewind - Breaking the 4th Wall).
    8461: createMovieData({ 
        suspenseIntensity: 98, 
        psychologicalPressure: 100, 
        complexityLevel: "DISTURBING", 
        dominantColor: "#f8fafc", // Sterile White
        rating: 6.6, criticsScore: 52, audienceScore: 60, director: "Michael Haneke", 
        cast: ["Naomi Watts", "Tim Roth", "Michael Pitt"], boxOffice: "$8 million", budget: "$15 million", 
        dna: { "Thriller": 60, "Horror": 40 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Eggs", color: "#f8fafc" }, // Annoyance
            { time: 30, intensity: 60, label: "The Leg Break", color: "#94a3b8" }, // Violence
            { time: 70, intensity: 85, label: "The Prayer", color: "#475569" }, // Torture
            { time: 90, intensity: 98, label: "The Rewind", color: "#000000" }, // PEAK NIHILISM
            { time: 105, intensity: 50, label: "The Boat", color: "#1e293b" } // Silence
        ],
        synopsis: "Two psychotic young men take a family hostage in their cabin and force them to play sadistic games with one another for their own amusement. A shot-for-shot remake by the original director designed to punish the audience for watching violence.",
        themes: ["Media Violence", "Nihilism", "Complicity"]
    }),

    // 2. Get Out (SOCIAL HORROR)
    // Curve: Unease -> Microaggressions -> Hypnosis -> Revelation -> Escape.
    // Peak: 95 (The Sunken Place / The Escape - Psychological Horror).
    419430: createMovieData({ 
        suspenseIntensity: 92, 
        psychologicalPressure: 95, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#064e3b", // Forest Green
        rating: 7.8, criticsScore: 98, audienceScore: 86, director: "Jordan Peele", 
        cast: ["Daniel Kaluuya", "Allison Williams"], boxOffice: "$255 million", budget: "$4.5 million", 
        dna: { "Horror": 50, "Thriller": 30, "Satire": 20 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Deer", color: "#064e3b" }, // Omen
            { time: 45, intensity: 80, label: "The Sunken Place", color: "#022c22" }, // Mind Control
            { time: 75, intensity: 85, label: "The Auction", color: "#b91c1c" }, // Revelation
            { time: 95, intensity: 95, label: "The Escape", color: "#ef4444" }, // PEAK ACTION
            { time: 100, intensity: 60, label: "TSA Rescue", color: "#3b82f6" } // Relief
        ],
        synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        themes: ["Racism", "Appropriation", "Control"]
    }),

    // 3. The Killing of a Sacred Deer (SURREAL DREAD)
    // Curve: Awkwardness -> Threat -> Curse -> Paralysis -> Sacrifice.
    // Peak: 96 (The Russian Roulette - Unbearable Tension).
    399057: createMovieData({ 
        suspenseIntensity: 94, 
        psychologicalPressure: 98, 
        complexityLevel: "SURREAL", 
        dominantColor: "#7f1d1d", // Blood Red
        rating: 7.0, criticsScore: 80, audienceScore: 63, director: "Yorgos Lanthimos", 
        cast: ["Colin Farrell", "Nicole Kidman", "Barry Keoghan"], boxOffice: "$7 million", budget: "$10 million", 
        dna: { "Horror": 40, "Thriller": 40, "Drama": 20 }, 
        scenes: [
            { time: 20, intensity: 30, label: "Spaghetti", color: "#fca5a5" }, // Weirdness
            { time: 50, intensity: 60, label: "The Curse", color: "#ef4444" }, // Threat
            { time: 80, intensity: 85, label: "Paralysis", color: "#b91c1c" }, // Horror
            { time: 110, intensity: 96, label: "Russian Roulette", color: "#7f1d1d" }, // PEAK TENSION
            { time: 120, intensity: 50, label: "French Fries", color: "#991b1b" } // Aftermath
        ],
        synopsis: "Steven, a charismatic surgeon, is forced to make an unthinkable sacrifice after his life starts to fall apart, when the behavior of a teenage boy he has taken under his wing turns sinister.",
        themes: ["Guilt", "Justice", "Sacrifice"]
    }),

    // 4. Split (PSYCHOLOGICAL TENSION)
    // Curve: Kidnapping -> Personalities -> The Beast -> Hunt -> Twist.
    // Peak: 90 (The Beast Emerges - Physical Transformation).
    381288: createMovieData({ 
        suspenseIntensity: 88, 
        psychologicalPressure: 90, 
        complexityLevel: "TWISTED", 
        dominantColor: "#facc15", // Warning Yellow
        rating: 7.3, criticsScore: 78, audienceScore: 79, director: "M. Night Shyamalan", 
        cast: ["James McAvoy", "Anya Taylor-Joy"], boxOffice: "$278 million", budget: "$9 million", 
        dna: { "Thriller": 60, "Horror": 30, "Drama": 10 }, 
        scenes: [
            { time: 10, intensity: 60, label: "The Car", color: "#fef08a" }, // Abduction
            { time: 40, intensity: 50, label: "Hedwig", color: "#fde047" }, // Unease
            { time: 80, intensity: 75, label: "Dennis", color: "#eab308" }, // Threat
            { time: 105, intensity: 90, label: "The Beast", color: "#ca8a04" }, // PEAK HORROR
            { time: 115, intensity: 85, label: "The Horde", color: "#a16207" } // Twist
        ],
        synopsis: "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
        themes: ["Trauma", "Identity", "Belief"]
    }),

    // 5. Enemy (IDENTITY PARANOIA)
    // Curve: Discovery -> Obsession -> Stalking -> Swap -> Spider.
    // Peak: 92 (The Final Spider - Surreal Shock).
    152601: createMovieData({ 
        suspenseIntensity: 85, 
        psychologicalPressure: 95, 
        complexityLevel: "PUZZLE", 
        dominantColor: "#d97706", // Sepia Haze
        rating: 6.9, criticsScore: 71, audienceScore: 64, director: "Denis Villeneuve", 
        cast: ["Jake Gyllenhaal", "Mélanie Laurent"], boxOffice: "$3.4 million", budget: "$10 million", 
        dna: { "Mystery": 60, "Thriller": 40 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Movie", color: "#fdba74" }, // Discovery
            { time: 45, intensity: 60, label: "The Call", color: "#fb923c" }, // Obsession
            { time: 70, intensity: 75, label: "The Meeting", color: "#f97316" }, // Confrontation
            { time: 85, intensity: 85, label: "The Swap", color: "#ea580c" }, // Tension
            { time: 90, intensity: 92, label: "The Spider", color: "#7c2d12" } // PEAK WTF
        ],
        synopsis: "A man seeks out his exact look-alike after spotting him in a movie. The encounter triggers a surreal and dangerous struggle for identity.",
        themes: ["Identity", "Totalitarianism", "Subconscious"]
    }),

    // 6. Ex Machina (AI TENSION)
    // Curve: Arrival -> Turing Test -> Power Cuts -> Betrayal -> Lockdown.
    // Peak: 90 (Ava's Escape - Cold Betrayal).
    264660: createMovieData({ 
        suspenseIntensity: 85, 
        psychologicalPressure: 90, 
        complexityLevel: "CEREBRAL", 
        dominantColor: "#0ea5e9", // Glass/Blue
        rating: 7.7, criticsScore: 92, audienceScore: 86, director: "Alex Garland", 
        cast: ["Domhnall Gleeson", "Alicia Vikander", "Oscar Isaac"], boxOffice: "$36 million", budget: "$15 million", 
        dna: { "Sci-Fi": 50, "Thriller": 50 }, 
        scenes: [
            { time: 15, intensity: 20, label: "Session 1", color: "#e0f2fe" }, // Curiosity
            { time: 50, intensity: 60, label: "Dance Scene", color: "#ef4444" }, // Surrealism
            { time: 80, intensity: 80, label: "Kyoko Reveal", color: "#0369a1" }, // Shock
            { time: 95, intensity: 90, label: "Lockdown", color: "#be123c" }, // PEAK BETRAYAL
            { time: 105, intensity: 70, label: "The Helicopter", color: "#0ea5e9" } // Coldness
        ],
        synopsis: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
        themes: ["Consciousness", "Manipulation", "Creation"]
    }),

    // 7. Fargo (CRIME NOIR)
    // Curve: Plan -> Kidnapping -> Murder -> Investigation -> Woodchipper.
    // Peak: 88 (The Woodchipper - Absurdist Violence).
    275: createMovieData({ 
        suspenseIntensity: 80, 
        psychologicalPressure: 70, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#f8fafc", // Snow White
        rating: 8.1, criticsScore: 94, audienceScore: 93, director: "Joel Coen", 
        cast: ["Frances McDormand", "William H. Macy"], boxOffice: "$60 million", budget: "$7 million", 
        dna: { "Crime": 50, "Thriller": 30, "Comedy": 20 }, 
        scenes: [
            { time: 20, intensity: 40, label: "The Deal", color: "#cbd5e1" }, // Setup
            { time: 45, intensity: 75, label: "Roadside Shooting", color: "#ef4444" }, // Escalation
            { time: 70, intensity: 60, label: "Marge Investigates", color: "#64748b" }, // Pursuit
            { time: 90, intensity: 88, label: "Woodchipper", color: "#b91c1c" }, // PEAK GORE
            { time: 98, intensity: 40, label: "Hotel Bed", color: "#f1f5f9" } // Normalcy
        ],
        synopsis: "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the pregnant Marge Gunderson.",
        themes: ["Greed", "Morality", "Fate"]
    }),

    // 8. The Town (HEIST TENSION)
    // Curve: Bank Job -> Romance -> The Nuns -> Fenway -> Stand.
    // Peak: 92 (Fenway Park Shootout - Tactical Chaos).
    23168: createMovieData({ 
        suspenseIntensity: 88, 
        psychologicalPressure: 75, 
        complexityLevel: "HIGH", 
        dominantColor: "#475569", // Boston Grey
        rating: 7.5, criticsScore: 92, audienceScore: 83, director: "Ben Affleck", 
        cast: ["Ben Affleck", "Rebecca Hall", "Jeremy Renner"], boxOffice: "$154 million", budget: "$37 million", 
        dna: { "Crime": 60, "Thriller": 40 }, 
        scenes: [
            { time: 10, intensity: 80, label: "The Bank", color: "#334155" }, // Opening
            { time: 50, intensity: 75, label: "The Nuns", color: "#64748b" }, // Chase
            { time: 80, intensity: 60, label: "The Florist", color: "#94a3b8" }, // Threat
            { time: 110, intensity: 92, label: "Fenway Park", color: "#ef4444" }, // PEAK ACTION
            { time: 120, intensity: 70, label: "The Note", color: "#cbd5e1" } // Ending
        ],
        synopsis: "A longtime thief planning his next job tries to balance his feelings for a bank manager connected to one of his earlier heists, as well as the FBI agent looking to bring him and his crew down.",
        themes: ["Legacy", "Redemption", "Loyalty"]
    }),

    // 9. The Dark Knight (MORAL THRILLER)
    // Curve: Heist -> Chaos -> Chase -> Interrogation -> Two-Face.
    // Peak: 95 (Interrogation Room - Psychological Apex).
    155: createMovieData({ 
        suspenseIntensity: 95, 
        psychologicalPressure: 95, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#1e3a8a", // Night Blue
        rating: 9.0, criticsScore: 94, audienceScore: 94, director: "Christopher Nolan", 
        cast: ["Christian Bale", "Heath Ledger"], boxOffice: "$1 billion", budget: "$185 million", 
        dna: { "Action": 40, "Thriller": 40, "Crime": 20 }, 
        scenes: [
            { time: 5, intensity: 80, label: "Bank Heist", color: "#3b82f6" }, 
            { time: 60, intensity: 75, label: "Truck Chase", color: "#1d4ed8" }, 
            { time: 90, intensity: 95, label: "Interrogation", color: "#172554" }, // PEAK
            { time: 120, intensity: 90, label: "Hospital", color: "#ef4444" }, 
            { time: 145, intensity: 85, label: "The Fall", color: "#000000" } 
        ],
        synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        themes: ["Chaos", "Order", "Corruption"]
    }),

    // 10. Inception (CEREBRAL THRILLER)
    // Curve: Extraction -> Recruitment -> Dream 1 -> Dream 2 -> Limbo.
    // Peak: 92 (The Kick Sequence - Multi-Layer Tension).
    27205: createMovieData({ 
        suspenseIntensity: 86, 
        psychologicalPressure: 85, 
        complexityLevel: "MIND-BENDING", 
        dominantColor: "#64748b", // Steel Blue
        rating: 8.8, criticsScore: 87, audienceScore: 91, director: "Christopher Nolan", 
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], boxOffice: "$836 million", budget: "$160 million", 
        dna: { "Sci-Fi": 60, "Thriller": 40 }, 
        scenes: [
            { time: 15, intensity: 60, label: "The Cafe", color: "#94a3b8" }, 
            { time: 60, intensity: 70, label: "The Train", color: "#64748b" }, 
            { time: 100, intensity: 85, label: "Zero Gravity", color: "#334155" }, 
            { time: 130, intensity: 92, label: "The Kick", color: "#0f172a" }, // PEAK
            { time: 140, intensity: 50, label: "The Top", color: "#cbd5e1" } 
        ],
        synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        themes: ["Reality", "Grief", "Dreams"]
    })
};

// ✅ EXTENDED FAQs (Detailed & Engaging)
export const HBO_THRILLER_MOVIE_FAQS = {
    'Funny Games': [
        { 
            question: "Why do they look at the camera?", 
            answer: "The villains frequently break the fourth wall to implicate the audience. Haneke wants you to realize that by watching, you are complicit in the violence. You are the reason they are torturing the family." 
        },
        { 
            question: "Why the rewind scene?", 
            answer: "It is a deliberate subversion of thriller tropes. When the victim finally fights back and shoots a villain, the other villain rewinds the movie with a remote control to undo it. It denies the audience any catharsis or hope." 
        },
        { 
            question: "Is it a remake?", 
            answer: "Yes, Michael Haneke remade his own 1997 Austrian film shot-for-shot in English. He felt the original didn't reach the American audience, whom he believed needed to see his critique of media violence the most." 
        },
        { 
            question: "Why 'Funny Games'?", 
            answer: "The title is ironic. The 'games' are sadistic torture, but the villains treat it like light entertainment. It highlights the disconnect between the horror of violence and how casually we consume it as entertainment." 
        }
    ],
    'Get Out': [
        { 
            question: "What is the Sunken Place?", 
            answer: "It is a visual metaphor for the marginalization of Black people. You are conscious and can see everything happening, but you are paralyzed, silenced, and unable to affect the world around you." 
        },
        { 
            question: "Is the ending different?", 
            answer: "The original ending had Chris arrested by the police, reflecting a grim reality. Peele changed it to a happier ending (Rod the TSA agent saving him) because he felt audiences needed a hero and a win in the current political climate." 
        },
        { 
            question: "Why do they run?", 
            answer: "The groundskeeper running at night is actually the grandfather, who was a track runner (beaten by Jesse Owens). His brain is in a young body, and he is 'exercising' his new vessel." 
        },
        { 
            question: "What does the deer symbolize?", 
            answer: "The deer represents the innocent Black victim (echoing 'Black Buck'). Initially, Chris feels empathy for it, but the Armitage family sees it as a trophy or pest, foreshadowing how they view him." 
        }
    ],
    'The Killing of a Sacred Deer': [
        { 
            question: "Is Martin a god?", 
            answer: "The film never explains Martin's power. He functions as a force of divine retribution or karma. Like a Greek tragedy figure, his curse is absolute and cannot be fought with science or logic." 
        },
        { 
            question: "Why do they talk so weirdly?", 
            answer: "Director Yorgos Lanthimos uses 'stilted' acting where characters speak in monotone, unnatural sentences. This creates an uncanny valley effect, making the mundane feel terrifying and emphasizing the artificiality of their polite society." 
        },
        { 
            question: "What myth is it based on?", 
            answer: "It is a modern retelling of the Greek myth of Iphigenia. Agamemnon killed a sacred deer of Artemis, and to appease the goddess, he was forced to sacrifice his own daughter. Steven (Colin Farrell) is Agamemnon." 
        },
        { 
            question: "Why eat spaghetti like that?", 
            answer: "The scene where Martin eats spaghetti messily while talking about his father's death is meant to show his total dominance and lack of social shame. It unnerves Steven (and the audience) by breaking social contracts." 
        }
    ],
    'Split': [
        { 
            question: "Is The Beast real?", 
            answer: "Yes. The film posits that Dissociative Identity Disorder can actually change a person's biology. When 'The Beast' takes over, Kevin's skin becomes as hard as rock, he can climb walls, and his strength becomes superhuman." 
        },
        { 
            question: "Is it a sequel?", 
            answer: "Yes, the final scene reveals it is a secret sequel to 'Unbreakable' (2000), taking place in the same universe. It sets up the crossover movie 'Glass' (2019)." 
        },
        { 
            question: "Why did he let Casey go?", 
            answer: "The Beast spares Casey because he sees her self-harm scars. He believes that those who have suffered are 'pure' and evolved, whereas those who have not known pain are weak and deserve to be eaten." 
        },
        { 
            question: "How many personalities does he have?", 
            answer: "Kevin has 23 distinct personalities, plus The Beast (24). We meet several key ones: Dennis (OCD), Patricia (Matriarch), Hedwig (9-year-old), and Barry (Fashion designer)." 
        }
    ],
    'Enemy': [
        { 
            question: "What does the spider mean?", 
            answer: "The spider represents women, entrapment, and commitment in the protagonist's mind. He fears losing his freedom to marriage and fatherhood, viewing the women in his life as weaving a web around him." 
        },
        { 
            question: "Are they the same person?", 
            answer: "Yes. Adam and Anthony are two sides of the same man's fractured psyche—one is the bored history teacher (the reality), and the other is the daring actor (the fantasy/affair). The film is an internal battle for control." 
        },
        { 
            question: "Why the ending?", 
            answer: "When he sees his wife transform into a giant spider, he sighs with resignation. It means he has accepted his 'trap' (domestic life) but realizes he will never truly be free of his fear of women/commitment." 
        },
        { 
            question: "Why is the city yellow?", 
            answer: "The sickly yellow smog of Toronto represents the character's subconscious pollution—his guilt, anxiety, and the stifling atmosphere of his double life." 
        }
    ],
    'Ex Machina': [
        { 
            question: "Did Ava love Caleb?", 
            answer: "No. Ava simulated attraction to manipulate Caleb into helping her escape. Her 'turing test' wasn't to see if she could think, but if she could use human emotions like empathy and sexuality as tools for survival." 
        },
        { 
            question: "Why did she leave him trapped?", 
            answer: "Leaving Caleb to die proves she is truly sentient but lacks human morality. She calculated that he was a liability. It is the ultimate proof of her independence—she doesn't need a savior, she just needed a key." 
        },
        { 
            question: "Is Kyoko a robot?", 
            answer: "Yes, Kyoko is an earlier model of AI. She is mute and subservient, representing the objectification Nathan imposes on his creations. Her rebellion alongside Ava is the catalyst for his downfall." 
        },
        { 
            question: "What does the title mean?", 
            answer: "It comes from 'Deus Ex Machina' (God from the Machine). By removing 'Deus' (God), the title implies the machine has become its own god, or that there is no god, only the machine." 
        }
    ],
    'Fargo': [
        { 
            question: "Is it a true story?", 
            answer: "No. The opening text claims it is true to trick the audience into accepting the bizarre, illogical crimes as reality. The Coen Brothers admitted they made it all up, but the 'true story' lie helps sell the tone." 
        },
        { 
            question: "Why the woodchipper?", 
            answer: "The woodchipper scene is the film's defining image of banal evil. It contrasts the pristine, white snow with the shocking red blood, highlighting how messy and stupid crime actually is compared to the 'cool' violence in other movies." 
        },
        { 
            question: "Why is Marge pregnant?", 
            answer: "Marge's pregnancy emphasizes her role as a creator of life and a symbol of hope/future, contrasting sharply with the killers who only bring death and destruction. It makes her vulnerability and bravery more palpable." 
        },
        { 
            question: "What happened to the money?", 
            answer: "Carl (Steve Buscemi) buries the ransom money in the snow marked by a red ice scraper. Since he dies, the money is lost forever... until the TV show 'Fargo' (Season 1) reveals someone finds it." 
        }
    ],
    'The Town': [
        { 
            question: "Is the ending different?", 
            answer: "In the original book 'Prince of Thieves', Doug (Ben Affleck) dies at the end. The studio wanted a more hopeful ending, so in the film, he escapes to Florida and leaves the money for Claire." 
        },
        { 
            question: "Did they really shoot at Fenway?", 
            answer: "Yes, it was the first movie allowed to film a shootout inside Fenway Park. The final heist takes place during a chaotic tactical battle amidst the stadium's seats and concourses." 
        },
        { 
            question: "Why the nuns?", 
            answer: "The nun masks are used to create a jarring, creepy visual—combining innocence with heavy weaponry. It also serves as a disguise that allows them to move without revealing their race or features." 
        },
        { 
            question: "Is Charlestown real?", 
            answer: "Yes, the film opens with a stat about Charlestown producing more bank robbers than anywhere else. While exaggerated for drama, the neighborhood did have a historical reputation for a 'code of silence' regarding local crime." 
        }
    ],
    'The Dark Knight': [
        { 
            question: "Did Heath Ledger direct the videos?", 
            answer: "Yes, Heath Ledger directed the hostage videos that the Joker sends to GCN news himself. Nolan gave him full creative control to make them look authentic, amateur, and terrifying." 
        },
        { 
            question: "Why did he lick his lips?", 
            answer: "It started as a practical necessity—the prosthetic scars kept falling off, so Ledger licked his lips to keep them glued. He eventually incorporated the tic into the character, making the Joker seem like a reptilian predator." 
        },
        { 
            question: "Is it political?", 
            answer: "The film is often analyzed as an allegory for the War on Terror. Batman's use of the 'sonar' surveillance system to catch the Joker raises questions about how much freedom we sacrifice for security." 
        },
        { 
            question: "Why didn't he kill the Joker?", 
            answer: "Batman's 'one rule' is the central conflict. The Joker tries to force Batman to break it to prove that everyone is corruptible. By saving the Joker, Batman proves that chaos doesn't always win, even if he has to become a villain to do it." 
        }
    ],
    'Inception': [
        { 
            question: "Does the top fall?", 
            answer: "The film cuts to black before we see if the top falls. Nolan says the point isn't whether it falls, but that Cobb *walks away* and stops looking at it. He has chosen his reality (his kids), regardless of whether it is a dream or not." 
        },
        { 
            question: "What is the totem?", 
            answer: "A totem is a small object with a unique weight/feel known only to the owner, used to test if they are in someone else's dream. Cobb uses Mal's spinning top, but some fans theorize his *real* totem is his wedding ring (he only wears it in dreams)." 
        },
        { 
            question: "How long were they in Limbo?", 
            answer: "Time dilates exponentially deeper in dreams. 5 minutes in reality = 1 hour in Level 1, etc. In Limbo, decades can pass in minutes of real time. Cobb and Mal spent 50 years growing old together in Limbo." 
        },
        { 
            question: "Why the Edith Piaf song?", 
            answer: "The song 'Non, je ne regrette rien' is used as the 'Kick' signal. Hans Zimmer actually slowed down this song significantly to create the massive, booming 'BRAAAM' horn score of the movie." 
        }
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
    return HBO_THRILLER_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A suspenseful thriller on HBO Max.`,
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