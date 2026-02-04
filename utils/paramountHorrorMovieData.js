// utils/paramountHorrorMovieData.js - PARAMOUNT+ HORROR COLLECTION DATA
// Ranked by Scariness: Science-Backed Terror, Psychological Dread, and Gore

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 82507, "imdbID": "tt1922777", "Title": "Sinister", "year": 2012, "genre": "Horror", "runtime": 110, "rank": 1 },
    { "tmdbId": 397243, "imdbID": "tt3289956", "Title": "The Autopsy of Jane Doe", "year": 2016, "genre": "Horror", "runtime": 86, "rank": 2 },
    { "tmdbId": 1058609, "imdbID": "tt29268110", "Title": "Smile 2", "year": 2024, "genre": "Horror", "runtime": 127, "rank": 3 },
    { "tmdbId": 882598, "imdbID": "tt15474916", "Title": "Smile", "year": 2022, "genre": "Horror", "runtime": 115, "rank": 4 },
    { "tmdbId": 8413, "imdbID": "tt0119081", "Title": "Event Horizon", "year": 1997, "genre": "Sci-Fi Horror", "runtime": 96, "rank": 5 },
    { "tmdbId": 447332, "imdbID": "tt6644200", "Title": "A Quiet Place", "year": 2018, "genre": "Horror", "runtime": 90, "rank": 6 },
    { "tmdbId": 805, "imdbID": "tt0063522", "Title": "Rosemary's Baby", "year": 1968, "genre": "Horror", "runtime": 137, "rank": 7 },
    { "tmdbId": 1029281, "imdbID": "tt22375054", "Title": "Strange Darling", "year": 2024, "genre": "Thriller", "runtime": 96, "rank": 8 },
    { "tmdbId": 762441, "imdbID": "tt22357594", "Title": "A Quiet Place: Day One", "year": 2024, "genre": "Horror", "runtime": 99, "rank": 9 },
    { "tmdbId": 760161, "imdbID": "tt11851548", "Title": "Orphan: First Kill", "year": 2022, "genre": "Horror", "runtime": 99, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Paramount+ Horror Collection)
export const SENSITIVE_TIMELINES = {
    // 1. Sinister
    82507: { 
        scenes: [
            { start: "0:00:00", end: "0:03:00", type: "Hanging", severity: "High" }, // Opening Super 8 footage
            { start: "1:15:00", end: "1:18:00", type: "Lawnmower", severity: "High" } // Jump scare gore
        ] 
    },
    // 2. The Autopsy of Jane Doe
    397243: { 
        scenes: [
            { start: "0:15:00", end: "0:45:00", type: "Graphic Autopsy", severity: "High" }, // Constant surgical gore
            { start: "0:20:00", end: "0:25:00", type: "Nudity", severity: "High" } // Full frontal corpse
        ] 
    },
    // 3. Smile 2
    1058609: { 
        scenes: [
            { start: "0:30:00", end: "0:35:00", type: "Self-Harm", severity: "High" }, // Gym weight scene
            { start: "1:50:00", end: "1:55:00", type: "Body Horror", severity: "High" }
        ] 
    },
    // 4. Smile
    882598: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Suicide", severity: "High" }, // Opening hospital scene
            { start: "1:45:00", end: "1:50:00", type: "Skin Peeling", severity: "High" }
        ] 
    },
    // 5. Event Horizon
    8413: { 
        scenes: [
            { start: "0:55:00", end: "0:56:00", type: "Extreme Torture", severity: "Extreme" }, // The video log from Hell
            { start: "1:10:00", end: "1:15:00", type: "Eye Trauma", severity: "High" }
        ] 
    },
    // 6. A Quiet Place
    447332: { 
        scenes: [
            { start: "1:05:00", end: "1:08:00", type: "Foot Injury", severity: "High" }, // The nail scene
            { start: "0:05:00", end: "0:08:00", type: "Child Death", severity: "High" }
        ] 
    },
    // 7. Rosemary's Baby
    805: { 
        scenes: [
            { start: "0:40:00", end: "0:45:00", type: "Sexual Violence", severity: "High" } // The dream sequence
        ] 
    },
    // 8. Strange Darling
    1029281: { 
        scenes: [
            { start: "0:10:00", end: "1:30:00", type: "Violence", severity: "High" } // Pervasive slasher violence
        ] 
    },
    // 9. A Quiet Place: Day One
    762441: { 
        scenes: [
            { start: "0:15:00", end: "0:25:00", type: "Mass Panic", severity: "Moderate" }
        ] 
    },
    // 10. Orphan: First Kill
    760161: { 
        scenes: [
            { start: "0:05:00", end: "0:10:00", type: "Violence", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    82507: "https://image.tmdb.org/t/p/w500/h6j5sE3vXh6j5s.jpg",
    397243: "https://image.tmdb.org/t/p/w500/e33dE6e6.jpg",
    1058609: "https://image.tmdb.org/t/p/w500/ht8Uv9UyUp.jpg",
    882598: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagk.jpg",
    8413: "https://image.tmdb.org/t/p/w500/6h3k6h3k.jpg",
    447332: "https://image.tmdb.org/t/p/w500/nJD7.jpg",
    805: "https://image.tmdb.org/t/p/w500/o7q7.jpg",
    1029281: "https://image.tmdb.org/t/p/w500/u9u9.jpg",
    762441: "https://image.tmdb.org/t/p/w500/yrp.jpg",
    760161: "https://image.tmdb.org/t/p/w500/t6t6.jpg"
};

// ✅ HELPER: Horror Specific Metrics
const createMovieData = (data) => ({
    scariness: 88,              // Primary Metric
    dominantColor: "#991b1b",   // Red default for Horror
    ...data,
});

export const COMPLETE_MOVIE_DATA = {

    // 1. Sinister (2012)
    // Corrected DNA: Horror/Mystery. Pacing: Smoother climb, peak at Lawnmower.
    82507: createMovieData({ 
        scariness: 98, 
        dominantColor: "#450a0a", rating: 6.8, criticsScore: 63, audienceScore: 62, director: "Scott Derrickson", 
        cast: ["Ethan Hawke", "Juliet Rylance", "James Ransone"], boxOffice: "$87 million", budget: "$3 million", 
        dna: { "Horror": 70, "Mystery": 30 }, 
        scenes: [
            { time: 10, intensity: 35, label: "Finding the Box", color: "#78350f" }, 
            { time: 45, intensity: 92, label: "Lawnmower Work", color: "#dc2626" }, 
            { time: 70, intensity: 78, label: "Mr. Boogie", color: "#000000" }, 
            { time: 90, intensity: 88, label: "The Attic", color: "#450a0a" }, 
            { time: 105, intensity: 91, label: "The End", color: "#991b1b" } 
        ],
        synopsis: "Science backs this up: 'The Science of Scare' study crowned it the scariest film ever made by heart-rate data. A true crime writer discovers a box of Super-8 home movies in his new house that suggest the murder he is currently researching is the work of a serial killer whose work dates back to the 1960s. The grainy tapes are pure nightmare fuel.",
        themes: ["Cursed Images", "Boogeyman", "Obsession"]
    }),

    // 2. The Autopsy of Jane Doe (2016)
    // Corrected DNA: Horror/Mystery. Pacing: Steady dread build.
    397243: createMovieData({ 
        scariness: 94, 
        dominantColor: "#71717a", rating: 6.8, criticsScore: 86, audienceScore: 75, director: "André Øvredal", 
        cast: ["Brian Cox", "Emile Hirsch", "Olwen Catherine Kelly"], boxOffice: "$6 million", budget: "$4 million", 
        dna: { "Horror": 70, "Mystery": 30 }, 
        scenes: [
            { time: 15, intensity: 30, label: "External Exam", color: "#a1a1aa" }, 
            { time: 40, intensity: 72, label: "Internal Exam", color: "#dc2626" }, 
            { time: 60, intensity: 86, label: "Lights Out", color: "#18181b" }, 
            { time: 75, intensity: 88, label: "The Bell", color: "#000000" }, 
            { time: 85, intensity: 89, label: "Open Your Eyes", color: "#ef4444" } 
        ],
        synopsis: "Claustrophobic, relentless, and deeply disturbing. Father and son coroners receive a mysterious unidentified corpse with no apparent cause of death. As they attempt to uncover the secrets of her death during a stormy night, they encounter increasingly bizarre and terrifying supernatural phenomena. The slow reveal of what that body really is turns into sustained terror with no escape.",
        themes: ["Witchcraft", "Isolation", "Science vs Supernatural"]
    }),

    // 3. Smile 2 (2024)
    // Corrected DNA: Horror/Thriller. Pacing: Lower start, higher finish.
    1058609: createMovieData({ 
        scariness: 96, 
        dominantColor: "#be123c", rating: 7.2, criticsScore: 85, audienceScore: 81, director: "Parker Finn", 
        cast: ["Naomi Scott", "Kyle Gallner", "Rosemarie DeWitt"], boxOffice: "$130 million", budget: "$28 million", 
        dna: { "Horror": 70, "Thriller": 30 }, 
        scenes: [
            { time: 10, intensity: 55, label: "Opening Scene", color: "#991b1b" }, 
            { time: 45, intensity: 85, label: "The Dancers", color: "#db2777" }, 
            { time: 70, intensity: 88, label: "Gym Weights", color: "#ef4444" }, 
            { time: 90, intensity: 82, label: "Meet and Greet", color: "#be123c" }, 
            { time: 120, intensity: 95, label: "The Concert", color: "#881337" } 
        ],
        synopsis: "Louder, darker, and more aggressive than the first. About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past. Psychologically exhausting with brutal imagery and nonstop tension.",
        themes: ["Fame", "Addiction", "Trauma"]
    }),

    // 4. Smile (2022)
    // Corrected DNA: Horror/Thriller. Pacing: Balanced peaks.
    882598: createMovieData({ 
        scariness: 93, 
        dominantColor: "#facc15", rating: 6.5, criticsScore: 80, audienceScore: 77, director: "Parker Finn", 
        cast: ["Sosie Bacon", "Jessie T. Usher", "Kyle Gallner"], boxOffice: "$217 million", budget: "$17 million", 
        dna: { "Horror": 70, "Thriller": 30 }, 
        scenes: [
            { time: 10, intensity: 70, label: "The Interview", color: "#ef4444" }, 
            { time: 40, intensity: 78, label: "The Birthday", color: "#b91c1c" }, 
            { time: 65, intensity: 85, label: "Car Scene", color: "#facc15" }, 
            { time: 90, intensity: 89, label: "The Monster", color: "#450a0a" }, 
            { time: 110, intensity: 88, label: "The Cabin", color: "#000000" } 
        ],
        synopsis: "The smiling curse is unforgettable. After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. It builds dread even in daylight scenes, which very few horror films manage.",
        themes: ["Mental Health", "Curse", "Suicide"]
    }),

    // 5. Event Horizon (1997)
    // Corrected DNA: Horror/Sci-Fi. Pacing: Gradual descent into hell.
    8413: createMovieData({ 
        scariness: 95, 
        dominantColor: "#0f172a", rating: 6.7, criticsScore: 34, audienceScore: 61, director: "Paul W.S. Anderson", 
        cast: ["Laurence Fishburne", "Sam Neill", "Kathleen Quinlan"], boxOffice: "$42 million", budget: "$60 million", 
        dna: { "Horror": 60, "Sci-Fi": 40 }, 
        scenes: [
            { time: 20, intensity: 35, label: "The Ship Found", color: "#1e293b" }, 
            { time: 55, intensity: 85, label: "The Video Log", color: "#991b1b" }, 
            { time: 75, intensity: 78, label: "Blood Orgy", color: "#7f1d1d" }, 
            { time: 85, intensity: 88, label: "No Eyes", color: "#ef4444" }, 
            { time: 95, intensity: 89, label: "Liberate Me", color: "#000000" } 
        ],
        synopsis: "Hell in space. A rescue crew investigates a spaceship that disappeared into a black hole and has now returned... with someone or something new on board. Some of the most grotesque imagery ever put in a studio horror film. Violent, nihilistic, and haunting.",
        themes: ["Hell", "Madness", "Space"]
    }),

    // 6. A Quiet Place (2018)
    // Corrected DNA: Horror/Thriller. Pacing: Early spike, sustained tension.
    447332: createMovieData({ 
        scariness: 85, 
        dominantColor: "#d4d4d4", rating: 7.5, criticsScore: 96, audienceScore: 83, director: "John Krasinski", 
        cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"], boxOffice: "$340 million", budget: "$17 million", 
        dna: { "Horror": 55, "Thriller": 45 }, 
        scenes: [
            { time: 10, intensity: 77, label: "The Bridge", color: "#737373" }, 
            { time: 45, intensity: 75, label: "The Grain Silo", color: "#f59e0b" }, 
            { time: 65, intensity: 84, label: "The Nail / Birth", color: "#b91c1c" }, 
            { time: 80, intensity: 86, label: "Flooded Basement", color: "#172554" }, 
            { time: 90, intensity: 87, label: "The Shotgun", color: "#000000" } 
        ],
        synopsis: "Not traditional horror, but one of the most stressful survival experiences ever filmed. In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing. Silence becomes pure terror.",
        themes: ["Parenting", "Survival", "Grief"]
    }),

    // 7. Rosemary's Baby (1968)
    // Corrected DNA: Horror/Drama. Pacing: Slow burn paranoia.
    805: createMovieData({ 
        scariness: 82, 
        dominantColor: "#fbbf24", rating: 8.0, criticsScore: 96, audienceScore: 87, director: "Roman Polanski", 
        cast: ["Mia Farrow", "John Cassavetes", "Ruth Gordon"], boxOffice: "$33 million", budget: "$3.2 million", 
        dna: { "Horror": 70, "Drama": 30 }, 
        scenes: [
            { time: 25, intensity: 25, label: "The Neighbors", color: "#fcd34d" }, 
            { time: 45, intensity: 72, label: "The Dream", color: "#b91c1c" }, 
            { time: 80, intensity: 78, label: "Paranoia Sets In", color: "#fbbf24" }, 
            { time: 110, intensity: 85, label: "The Phone Booth", color: "#d97706" }, 
            { time: 130, intensity: 91, label: "He Has His Father's Eyes", color: "#000000" } 
        ],
        synopsis: "The ultimate slow-burn nightmare. A young couple moves into an apartment in an area of New York City known for bad luck. When the wife becomes mysteriously pregnant, she becomes increasingly paranoid that the safety of her unborn baby is being compromised by a satanic coven. No jump scares — just creeping paranoia and satanic dread that crawls under your skin.",
        themes: ["Gaslighting", "Cults", "Motherhood"]
    }),

    // 8. Strange Darling (2024)
    // Corrected DNA: Thriller/Crime. Pacing: Non-linear spikes.
    1029281: createMovieData({ 
        scariness: 87, 
        dominantColor: "#be123c", rating: 7.2, criticsScore: 95, audienceScore: 80, director: "JT Mollner", 
        cast: ["Willa Fitzgerald", "Kyle Gallner", "Barbara Hershey"], boxOffice: "$2.5 million", budget: "$4 million", 
        dna: { "Thriller": 70, "Crime": 30 }, 
        scenes: [
            { time: 10, intensity: 65, label: "The Chase Begins", color: "#be123c" }, 
            { time: 30, intensity: 78, label: "The Motel", color: "#991b1b" }, 
            { time: 55, intensity: 86, label: "The Twist", color: "#000000" }, 
            { time: 70, intensity: 82, label: "The Couple", color: "#b91c1c" }, 
            { time: 90, intensity: 87, label: "Final Confrontation", color: "#ef4444" } 
        ],
        synopsis: "A twisted, non-linear serial killer nightmare that feels disturbingly realistic. Nothing is what it seems in this cat-and-mouse thriller about a one-night stand that turns into a vicious murder spree. Violent, shocking, and unpredictable.",
        themes: ["Deception", "Gender Roles", "Survival"]
    }),

    // 9. A Quiet Place: Day One (2024)
    // Corrected DNA: Horror/Thriller. Pacing: Chaos first, then quiet tension.
    762441: createMovieData({ 
        scariness: 84, 
        dominantColor: "#fb923c", rating: 6.8, criticsScore: 87, audienceScore: 70, director: "Michael Sarnoski", 
        cast: ["Lupita Nyong'o", "Joseph Quinn", "Alex Wolff"], boxOffice: "$261 million", budget: "$67 million", 
        dna: { "Horror": 60, "Thriller": 40 }, 
        scenes: [
            { time: 15, intensity: 82, label: "The Meteor Shower", color: "#ea580c" }, 
            { time: 25, intensity: 87, label: "New York Falls", color: "#9a3412" }, 
            { time: 50, intensity: 78, label: "Subway Tunnel", color: "#0f172a" }, 
            { time: 75, intensity: 55, label: "Pizza Quest", color: "#fb923c" }, 
            { time: 90, intensity: 88, label: "The Pier", color: "#c2410c" } 
        ],
        synopsis: "Watching the invasion destroy New York creates large-scale panic and hopelessness. A woman named Sam must survive an invasion in New York City by bloodthirsty alien creatures with ultrasonic hearing. Terrifying in its collapse imagery.",
        themes: ["Apocalypse", "Humanity", "Catastrophe"]
    }),

    // 10. Orphan: First Kill (2022)
    // Corrected DNA: Thriller/Horror. Pacing: Twist-centric build.
    760161: createMovieData({ 
        scariness: 80, 
        dominantColor: "#3f3f46", rating: 6.0, criticsScore: 77, audienceScore: 68, director: "William Brent Bell", 
        cast: ["Isabelle Fuhrman", "Julia Stiles", "Rossif Sutherland"], boxOffice: "$44 million", budget: "$10 million", 
        dna: { "Thriller": 70, "Horror": 30 }, 
        scenes: [
            { time: 10, intensity: 65, label: "The Escape", color: "#52525b" }, 
            { time: 40, intensity: 55, label: "Coming to America", color: "#71717a" }, 
            { time: 60, intensity: 88, label: "The Big Twist", color: "#ef4444" }, 
            { time: 80, intensity: 82, label: "Mother vs Daughter", color: "#b91c1c" }, 
            { time: 95, intensity: 85, label: "House Fire", color: "#dc2626" } 
        ],
        synopsis: "Nasty twists, strong shock value, and a deeply uncomfortable central performance. Esther orchestrates a brilliant escape from an Estonian psychiatric facility and travels to America by impersonating the missing daughter of a wealthy family. More disturbing than expected.",
        themes: ["Identity", "Manipulation", "Family Secrets"]
    })
};

export const STRATEGIC_QUOTES = {
    82507: "Don't worry, Daddy. I'll make you famous again.",
    397243: "Every body has a secret. Some just hide them better than others.",
    1058609: "It's smiling at me.",
    882598: "You're going to die!",
    8413: "Where we're going, we won't need eyes to see.",
    447332: "If they hear you, they hunt you.",
    805: "He has his father's eyes.",
    1029281: "Help me, please! He's going to kill me!",
    762441: "Hear the world end.",
    760161: "I'm not a child."
};

export const PARAMOUNT_HORROR_MOVIE_FAQS = {
    'Sinister': [
        { question: "Is Sinister actually the scariest movie ever?", answer: "According to 'The Science of Scare' study conducted by Broadband Choices, 'Sinister' consistently ranks as the #1 scariest movie based on average heart rate elevation. The combination of jump scares and the dread-inducing Super-8 footage creates a sustained physiological reaction in viewers." },
        { question: "Who is the demon Bagul?", answer: "Bughuul (or Bagul) is a fictional pagan deity created for the film, known as the 'Eater of Children.' The filmmakers researched various myths but ultimately created an original entity that consumes the souls of children to sustain its own immortality." },
        { question: "Are the snuff films real?", answer: "No, they are fictional, but they were shot on actual Super-8 film stock to achieve the grainy, authentic aesthetic. The disturbing realism comes from the practical effects and the mundane, home-movie presentation of horrific violence." }
    ],
    'The Autopsy of Jane Doe': [
        { question: "What is the secret of Jane Doe?", answer: "The autopsy reveals that Jane Doe is actually a witch from 17th-century New England. However, she wasn't a witch when she died; the torture inflicted upon her during the witch trials (binding, tongue removal, burning) paradoxically turned her into a vengeful supernatural entity." },
        { question: "Is the actress a real corpse?", answer: "No, 'Jane Doe' was played by actress Olwen Catherine Kelly. She used meditation techniques to remain perfectly still and control her breathing for hours during the autopsy scenes, creating the uncanny illusion of a real cadaver." },
        { question: "Why does the radio change?", answer: "The radio song 'Open Up Your Heart (And Let the Sunshine In)' plays repeatedly to signal the witch's influence. It mocks the coroners as they literally open up her heart during the autopsy, only to let darkness in instead of sunshine." }
    ],
    'Smile 2': [
        { question: "Is this a direct sequel?", answer: "Yes, it follows the events of the first film but shifts focus to a new protagonist, pop star Skye Riley. It expands on the lore of the Entity, showing how it feeds on trauma on a much larger, public scale compared to the intimate setting of the first movie." },
        { question: "Who plays the pop star?", answer: "Naomi Scott plays Skye Riley. She performed her own singing and choreography for the role. The film's soundtrack was released as a legitimate pop album to blur the lines between the movie's reality and our own." },
        { question: "Is it gorier than the first one?", answer: "Yes, critics and audiences agree that 'Smile 2' ramps up the violence significantly. The death scenes are more elaborate and graphic, utilizing practical effects to create visceral body horror moments." }
    ],
    'Smile': [
        { question: "What is the Smile Entity?", answer: "The Entity is a parasitic supernatural force that feeds on trauma. It attaches itself to a host who witnesses a suicide, tortures them with hallucinations for a few days, and then forces them to commit suicide in front of someone else to pass the curse along." },
        { question: "Is there a way to break the curse?", answer: "The film suggests that the only way to escape death is to murder someone else in front of a witness, thereby traumatizing the witness and passing the Entity to them. However, this moral compromise is the ultimate trap of the curse." },
        { question: "Why are they smiling?", answer: "The smile is a mask. The Entity uses the smiling faces of loved ones to mock the victim's fear and hide its true, grotesque nature. It twists a symbol of happiness into a threat, creating cognitive dissonance and terror." }
    ],
    'Event Horizon': [
        { question: "What happened to the missing footage?", answer: "The original cut was rated NC-17 for extreme violence. Paramount forced director Paul W.S. Anderson to cut about 20 minutes of footage, including the full 'blood orgy' video log. Tragically, the deleted footage was poorly stored and has been lost to time, making a Director's Cut impossible." },
        { question: "Is this a Warhammer 40k prequel?", answer: "While not officially connected, fans theorize 'Event Horizon' depicts humanity's first encounter with 'The Warp' (a dimension of chaos and demons) from the Warhammer 40k universe. The ship's drive essentially tears a hole into Hell, similar to Warp travel." },
        { question: "Why is Sam Neill's character evil?", answer: "Dr. Weir (Sam Neill) built the ship and is telepathically connected to it. The ship, now sentient and possessed by the chaos dimension, seduces him with visions of his dead wife, turning him into its avatar to ensure the crew doesn't leave." }
    ],
    'A Quiet Place': [
        { question: "How do the monsters hunt?", answer: "The 'Death Angels' are blind and rely entirely on hypersensitive hearing. Their armor is impenetrable to bullets, but they can be killed if their inner ear is exposed to high-frequency feedback, which causes them pain and opens their armor plates." },
        { question: "Why do they use sign language?", answer: "The daughter, Regan, is deaf, so the family already knew American Sign Language (ASL) before the invasion. This skill became their greatest survival advantage, allowing them to communicate silently without attracting the monsters." },
        { question: "Who directed this?", answer: "John Krasinski directed, co-wrote, and starred in the film. He famously insisted on casting a real deaf actress (Millicent Simmonds) for the role of Regan to ensure authenticity." }
    ],
    'Rosemary\'s Baby': [
        { question: "Is the baby shown?", answer: "No, the baby's face is never shown to the audience. We only see Rosemary's horrified reaction and hear her scream 'What have you done to his eyes?!' This restraint allows the viewer's imagination to conjure a monster far worse than any prop could be." },
        { question: "Is there a curse on this movie?", answer: "The film is infamous for its 'curse.' Composer Krzysztof Komeda died shortly after, producer William Castle suffered kidney stones he hallucinated were the baby, and most tragically, director Roman Polanski's pregnant wife Sharon Tate was murdered by the Manson Family a year after release." },
        { question: "Does Rosemary join the cult?", answer: "The ending is ambiguous and chilling. Rosemary does not flee; instead, her maternal instinct overrides her horror. She begins to rock the cradle, accepting her role as the mother of the Antichrist, securing her survival but damning her soul." }
    ],
    'Strange Darling': [
        { question: "Is it linear?", answer: "No, the film is told in six non-linear chapters. This structure is crucial to the plot, as it hides the true nature of the predator and the prey until specific reveals recontextualize everything you've seen before." },
        { question: "Is it based on a true story?", answer: "The opening text claims it is a dramatization of the final days of a serial killer, but this is a fictional framing device (similar to 'Fargo' or 'Texas Chain Saw Massacre') used to heighten the realism and tension." },
        { question: "Who is the Electric Lady?", answer: "The 'Electric Lady' is the moniker given to the protagonist/antagonist. Without spoiling the twist, the film subverts standard slasher tropes by playing with audience expectations of gender roles in horror." }
    ],
    'A Quiet Place: Day One': [
        { question: "Where is the Abbott family?", answer: "This is a spinoff prequel set in New York City on the first day of the invasion. It does not feature the Abbott family (from the first two movies) but focuses on new characters experiencing the initial collapse of society." },
        { question: "Why the cat?", answer: "Frodo the cat serves as an emotional anchor and a source of tension. In a world where silence is survival, having an animal that could meow at any moment creates constant anxiety. The cat also represents the last shred of normalcy for the protagonist, Sam." },
        { question: "Is it scarier than the original?", answer: "It offers a different kind of fear. While the original was intimate and isolated, 'Day One' focuses on large-scale disaster horror—the chaos of a city falling apart, mass panic, and the hopelessness of being trapped in an urban environment with nowhere to hide." }
    ],
    'Orphan: First Kill': [
        { question: "How did they make the actress look young?", answer: "Isabelle Fuhrman reprised her role as Esther 13 years after the original, despite being an adult. The filmmakers used forced perspective angles, body doubles, and makeup—avoiding expensive CGI de-aging—to make her appear as a child again." },
        { question: "What is the twist?", answer: "The prequel flips the script. Instead of Esther tricking a loving family, she discovers the family she has infiltrated (the Albrights) has a dark secret of their own. The mother knows Esther isn't her daughter but keeps her to cover up the murder of her real child." },
        { question: "Is it based on real events?", answer: "While the movie is fiction, the concept of an adult posing as a child is similar to the real-life case of Barbora Skrlová, a 33-year-old woman who posed as a 13-year-old boy in Norway, and the Natalia Grace case." }
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
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('gore') || lowerType.includes('mutilation')) types.add('extreme gore');
        if (lowerType.includes('animal')) types.add('animal harm');
        if (lowerType.includes('sexual') || lowerType.includes('assault')) types.add('sexual violence');
        if (lowerType.includes('suicide') || lowerType.includes('self-harm')) types.add('self-harm');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PARAMOUNT_HORROR_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A terrifying horror movie on Paramount+.`,
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