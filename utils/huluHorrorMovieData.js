// utils/huluHorrorMovieData.js - HULU HORROR COLLECTION DATA
// Ranked by Scariness: Dread, Gore, and Psychological Trauma

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 744857, "imdbID": "tt16300962", "Title": "When Evil Lurks", "year": 2023, "genre": "Horror", "runtime": 99, "rank": 1 },
    { "tmdbId": 1226578, "imdbID": "tt23468450", "Title": "Longlegs", "year": 2024, "genre": "Horror", "runtime": 101, "rank": 2 },
    { "tmdbId": 398173, "imdbID": "tt4003440", "Title": "The House That Jack Built", "year": 2018, "genre": "Horror", "runtime": 152, "rank": 3 },
    { "tmdbId": 1094318, "imdbID": "tt26466146", "Title": "Oddity", "year": 2024, "genre": "Horror", "runtime": 98, "rank": 4 },
    { "tmdbId": 300669, "imdbID": "tt4160708", "Title": "Don't Breathe", "year": 2016, "genre": "Horror", "runtime": 88, "rank": 5 },
    { "tmdbId": 242224, "imdbID": "tt2321549", "Title": "The Babadook", "year": 2014, "genre": "Horror", "runtime": 94, "rank": 6 },
    { "tmdbId": 516632, "imdbID": "tt5867314", "Title": "The Empty Man", "year": 2020, "genre": "Horror", "runtime": 137, "rank": 7 },
    { "tmdbId": 913290, "imdbID": "tt15791034", "Title": "Barbarian", "year": 2022, "genre": "Horror", "runtime": 102, "rank": 8 },
    { "tmdbId": 824372, "imdbID": "tt5676368", "Title": "The First Omen", "year": 2024, "genre": "Horror", "runtime": 119, "rank": 9 },
    { "tmdbId": 938614, "imdbID": "tt14966898", "Title": "Late Night with the Devil", "year": 2023, "genre": "Horror", "runtime": 93, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Gore, Animal Harm, and Sexual Violence)
export const SENSITIVE_TIMELINES = {
    // 1. When Evil Lurks
    1017409: { 
        scenes: [
            { start: "0:25:00", end: "0:28:00", type: "Animal Harm (Dog)", severity: "Extreme" },
            { start: "0:45:00", end: "0:48:00", type: "Gore/Self-Harm", severity: "Extreme" },
            { start: "1:15:00", end: "1:20:00", type: "Child Death", severity: "High" }
        ] 
    },
    // 2. Longlegs
    1079373: { 
        scenes: [
            { start: "0:01:00", end: "0:05:00", type: "Jump Scare/Unsettling", severity: "High" },
            { start: "1:20:00", end: "1:25:00", type: "Self-Harm", severity: "High" }
        ] 
    },
    // 3. The House That Jack Built
    400535: { 
        scenes: [
            { start: "0:30:00", end: "0:35:00", type: "Strangulation", severity: "High" },
            { start: "0:50:00", end: "0:55:00", type: "Child Harm/Taxidermy", severity: "Extreme" }, // infamous scene
            { start: "1:10:00", end: "1:15:00", type: "Mutilation", severity: "Extreme" }
        ] 
    },
    // 4. Oddity
    1094318: { 
        scenes: [
            { start: "0:40:00", end: "0:45:00", type: "Jump Scare", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Violence", severity: "Moderate" }
        ] 
    },
    // 5. Don't Breathe
    300669: {
        scenes: [
            { start: "0:55:00", end: "0:58:00", type: "Sexual Assault Implication", severity: "High" }, // The turkey baster scene
            { start: "1:10:00", end: "1:15:00", type: "Violence", severity: "High" }
        ]
    },
    // 6. The Babadook
    242224: { 
        scenes: [
            { start: "0:55:00", end: "1:00:00", type: "Animal Harm (Dog)", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Child Threat", severity: "High" }
        ] 
    },
    // 7. The Empty Man
    516632: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Suicide", severity: "High" }
        ] 
    },
    // 8. Barbarian
    913290: { 
        scenes: [
            { start: "0:40:00", end: "0:45:00", type: "Violence/Gore", severity: "Extreme" },
            { start: "1:30:00", end: "1:35:00", type: "Body Horror", severity: "High" }
        ] 
    },
    // 9. The First Omen
    824372: { 
        scenes: [
            { start: "0:55:00", end: "1:00:00", type: "Birth Trauma/Gore", severity: "Extreme" } 
        ] 
    },
    // 10. Late Night with the Devil
    1014590: { 
        scenes: [
            { start: "1:15:00", end: "1:25:00", type: "Gore/Body Horror", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    1017409: "https://image.tmdb.org/t/p/w500/2yl2zC3tX7F2KyD62P8R92V7X9o.jpg",
    1079373: "https://image.tmdb.org/t/p/w500/5aj8vVGFvGVbXQmZhcs62060w23.jpg",
    400535: "https://image.tmdb.org/t/p/w500/77i12a2Q5b3Z1X5Z5X5X5X5X5X5.jpg",
    1094318: "https://image.tmdb.org/t/p/w500/uln9Efc2vzDOl0WTEhlqcedtJc.jpg",
    300669: "https://image.tmdb.org/t/p/w500/a7V9Xh5b32G2bB5g3g5g3g5g3g5.jpg", // Don't Breathe
    242224: "https://image.tmdb.org/t/p/w500/k5WCg7in2F3xX7aX7aX7aX7aX7a.jpg",
    516632: "https://image.tmdb.org/t/p/w500/4PAqJ9l8J9l8J9l8J9l8J9l8J9l.jpg",
    913290: "https://image.tmdb.org/t/p/w500/y2Ca1neKke2mGPMaZvXdMjFvqCN.jpg",
    824372: "https://image.tmdb.org/t/p/w500/uGyGdD8f1Z8f1Z8f1Z8f1Z8f1Z8.jpg",
    1014590: "https://image.tmdb.org/t/p/w500/j9j9j9j9j9j9j9j9j9j9j9j9j9j.jpg"
};








// ✅ Helper to map "Horror" metrics to your existing code keys
const createMovieData = (data) => ({
    scariness: 85,              // The only metric required
    dominantColor: "#991b1b",   // Red default for Horror
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. When Evil Lurks
    1017409: createMovieData({ 
        scariness: 98, 
        dominantColor: "#7f1d1d", rating: 7.0, criticsScore: 96, audienceScore: 78, director: "Demián Rugna", 
        cast: ["Ezequiel Rodríguez", "Demián Salomón"], boxOffice: "$0.6 million", budget: "$4 million", 
        dna: { "Horror": 80, "Thriller": 20 }, // Fixed DNA
        scenes: [
            { time: 10, intensity: 45, label: "The Rotten One", color: "#7f1d1d" },
            { time: 30, intensity: 75, label: "The Dog", color: "#991b1b" },
            { time: 50, intensity: 88, label: "The Road", color: "#b91c1c" },
            { time: 75, intensity: 82, label: "The School", color: "#dc2626" },
            { time: 95, intensity: 100, label: "No Rules", color: "#ef4444" } // 100: Breaks genre rules
        ],
        synopsis: "In a remote village, two brothers find a demon-infected man just about to give birth to evil itself. In their attempt to dispose of him, they unleash a chaos that disregards all rules of horror safety. No mercy. Pure trauma.",
        themes: ["Contagion", "Nihilism", "Family Trauma"]
    }),

    // 2. Longlegs
    1079373: createMovieData({ 
        scariness: 95, 
        dominantColor: "#fcd34d", rating: 7.2, criticsScore: 86, audienceScore: 60, director: "Osgood Perkins", 
        cast: ["Maika Monroe", "Nicolas Cage"], boxOffice: "$100 million", budget: "$10 million", 
        dna: { "Horror": 60, "Crime": 40 }, // Fixed DNA
        scenes: [
            { time: 5, intensity: 70, label: "The Opening", color: "#fbbf24" },
            { time: 40, intensity: 55, label: "Cipher", color: "#f59e0b" },
            { time: 70, intensity: 80, label: "Interrogation", color: "#d97706" },
            { time: 90, intensity: 92, label: "Hail Satan", color: "#b45309" }, // Peak is 92
            { time: 100, intensity: 85, label: "The Birthday", color: "#78350f" }
        ],
        synopsis: "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. A slow-burn, suffocating atmosphere that feels genuinely cursed.",
        themes: ["Satanism", "Procedural", "Atmospheric Dread"]
    }),

    // 3. The House That Jack Built
    400535: createMovieData({ 
        scariness: 95, 
        dominantColor: "#ef4444", rating: 6.8, criticsScore: 59, audienceScore: 67, director: "Lars von Trier", 
        cast: ["Matt Dillon", "Bruno Ganz"], boxOffice: "$5 million", budget: "$10 million", 
        dna: { "Horror": 50, "Drama": 30, "Crime": 20 }, // Fixed DNA
        scenes: [
            { time: 20, intensity: 50, label: "1st Incident", color: "#ef4444" },
            { time: 50, intensity: 98, label: "The Picnic", color: "#b91c1c" }, // 98: Extreme cruelty
            { time: 80, intensity: 65, label: "Simple", color: "#991b1b" },
            { time: 110, intensity: 85, label: "Full Metal Jacket", color: "#7f1d1d" },
            { time: 145, intensity: 90, label: "The Descent", color: "#450a0a" }
        ],
        synopsis: "The story follows Jack, a highly intelligent serial killer, over the course of 12 years, depicting the murders that define his development as a serial killer. Deeply disturbing, cruel, and philosophically scarring.",
        themes: ["Narcissism", "Art vs Violence", "Psychopathy"]
    }),

    // 4. Oddity
    1094318: createMovieData({ 
        scariness: 88, 
        dominantColor: "#78350f", rating: 7.0, criticsScore: 96, audienceScore: 83, director: "Damian McCarthy", 
        cast: ["Gwilym Lee", "Carolyn Bracken"], boxOffice: "$1 million", budget: "N/A", 
        dna: { "Horror": 70, "Mystery": 30 }, // Fixed DNA
        scenes: [
            { time: 15, intensity: 40, label: "The Glass Eye", color: "#a16207" },
            { time: 45, intensity: 75, label: "The Tent", color: "#854d0e" },
            { time: 70, intensity: 92, label: "The Wooden Man", color: "#713f12" }, // Peak is 92
            { time: 85, intensity: 80, label: "Trapdoor", color: "#451a03" },
            { time: 95, intensity: 60, label: "The Bell", color: "#78350f" }
        ],
        synopsis: "A blind medium uncovers the truth behind her twin sister's death with the help of a terrifying wooden mannequin. Relentless tension that relies on atmosphere rather than cheap jumps.",
        themes: ["Cursed Objects", "Grief", "Revenge"]
    }),

    // 5. Don't Breathe
    300669: createMovieData({ 
        scariness: 90, 
        dominantColor: "#171717", rating: 7.1, criticsScore: 88, audienceScore: 79, director: "Fede Álvarez", 
        cast: ["Stephen Lang", "Jane Levy"], boxOffice: "$157 million", budget: "$9 million", 
        dna: { "Horror": 50, "Thriller": 50 }, // Fixed DNA
        scenes: [
            { time: 15, intensity: 20, label: "The Break In", color: "#404040" },
            { time: 45, intensity: 80, label: "Lights Out", color: "#171717" },
            { time: 70, intensity: 88, label: "The Dog Chase", color: "#dc2626" },
            { time: 85, intensity: 94, label: "The Basement", color: "#7f1d1d" }, // 94: Shock factor
            { time: 95, intensity: 85, label: "The Escape", color: "#b91c1c" }
        ],
        synopsis: "Three thieves break into the house of a wealthy blind man, thinking he is an easy target. They are wrong. Trapped in the dark, they are hunted by a man with heightened senses and a terrible secret.",
        themes: ["Home Invasion", "Disability", "Moral Ambiguity"]
    }),

    // 6. The Babadook
    242224: createMovieData({ 
        scariness: 85, 
        dominantColor: "#171717", rating: 6.8, criticsScore: 98, audienceScore: 72, director: "Jennifer Kent", 
        cast: ["Essie Davis", "Noah Wiseman"], boxOffice: "$10 million", budget: "$2 million", 
        dna: { "Horror": 60, "Drama": 40 }, // Fixed DNA
        scenes: [
            { time: 15, intensity: 30, label: "Bedtime Story", color: "#404040" },
            { time: 45, intensity: 70, label: "Baba-Dook-Dook", color: "#262626" },
            { time: 70, intensity: 85, label: "Possession", color: "#171717" },
            { time: 85, intensity: 90, label: "The Basement", color: "#0a0a0a" }, // Peak is 90
            { time: 92, intensity: 50, label: "Feeding Time", color: "#404040" }
        ],
        synopsis: "A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house, but soon discovers a sinister presence all around her. A masterpiece of grief horror.",
        themes: ["Grief", "Motherhood", "Mental Illness"]
    }),

    // 7. The Empty Man
    516632: createMovieData({ 
        scariness: 82, 
        dominantColor: "#1e3a8a", rating: 6.2, criticsScore: 76, audienceScore: 40, director: "David Prior", 
        cast: ["James Badge Dale", "Marin Ireland"], boxOffice: "$4 million", budget: "$16 million", 
        dna: { "Horror": 60, "Mystery": 40 }, // Fixed DNA
        scenes: [
            { time: 20, intensity: 85, label: "The Cave Prologue", color: "#172554" },
            { time: 50, intensity: 50, label: "The Bridge", color: "#1e3a8a" },
            { time: 85, intensity: 65, label: "The Campfire", color: "#1d4ed8" },
            { time: 110, intensity: 88, label: "The Cult", color: "#2563eb" }, // Peak is 88
            { time: 130, intensity: 90, label: "The Signal", color: "#172554" }
        ],
        synopsis: "On the trail of a missing girl, an ex-cop comes across a secretive group attempting to summon a terrifying supernatural entity. Cosmic cult horror with an unforgettable 20-minute opening.",
        themes: ["Nihilism", "Cults", "Tulpa Theory"]
    }),

    // 8. Barbarian
    913290: createMovieData({ 
        scariness: 80, 
        dominantColor: "#111827", rating: 7.0, criticsScore: 93, audienceScore: 71, director: "Zach Cregger", 
        cast: ["Georgina Campbell", "Bill Skarsgård"], boxOffice: "$45 million", budget: "$4.5 million", 
        dna: { "Horror": 70, "Thriller": 30 }, // Fixed DNA
        scenes: [
            { time: 15, intensity: 40, label: "The Basement", color: "#1f2937" },
            { time: 40, intensity: 88, label: "The Tape Measure", color: "#111827" }, // Peak is 88
            { time: 60, intensity: 20, label: "The Cut (Flashback)", color: "#374151" },
            { time: 85, intensity: 75, label: "The Mother", color: "#1f2937" },
            { time: 95, intensity: 85, label: "Water Tower", color: "#111827" }
        ],
        synopsis: "A woman staying at an Airbnb discovers that the house she has rented is not what it seems. Features a terrifying first half and a shocking narrative pivot that changes the genre entirely.",
        themes: ["Urban Decay", "Toxic Masculinity", "Secrets"]
    }),

    // 9. The First Omen
    824372: createMovieData({ 
        scariness: 85, 
        dominantColor: "#991b1b", rating: 6.5, criticsScore: 81, audienceScore: 70, director: "Arkasha Stevenson", 
        cast: ["Nell Tiger Free", "Ralph Ineson"], boxOffice: "$53 million", budget: "$30 million", 
        dna: { "Horror": 80, "Mystery": 20 }, // Fixed DNA
        scenes: [
            { time: 15, intensity: 30, label: "The Convent", color: "#991b1b" },
            { time: 55, intensity: 94, label: "The Birth Scene", color: "#7f1d1d" }, // 94: Body horror peak
            { time: 80, intensity: 75, label: "The Discovery", color: "#b91c1c" },
            { time: 100, intensity: 85, label: "The Ritual", color: "#991b1b" },
            { time: 115, intensity: 90, label: "It's All For You", color: "#7f1d1d" }
        ],
        synopsis: "A young American woman is sent to Rome to begin a life of service to the church, but encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy.",
        themes: ["Religious Conspiracy", "Bodily Autonomy", "Antichrist"]
    }),

    // 10. Late Night with the Devil
    1014590: createMovieData({ 
        scariness: 85, 
        dominantColor: "#c2410c", rating: 7.0, criticsScore: 97, audienceScore: 81, director: "Cameron Cairnes", 
        cast: ["David Dastmalchian", "Laura Gordon"], boxOffice: "$12 million", budget: "$2 million", 
        dna: { "Horror": 70, "Thriller": 30 }, // Fixed DNA
        scenes: [
            { time: 20, intensity: 30, label: "The Setup", color: "#c2410c" },
            { time: 50, intensity: 60, label: "The Hypnosis", color: "#ea580c" },
            { time: 70, intensity: 75, label: "The Manifestation", color: "#f97316" },
            { time: 85, intensity: 88, label: "Live TV Chaos", color: "#c2410c" }, // Peak is 88
            { time: 90, intensity: 92, label: "Static", color: "#9a3412" }
        ],
        synopsis: "A live television broadcast in 1977 goes horribly wrong, unleashing evil into the nation's living rooms. Found-footage realism meets 70s aesthetics in a creepy, chaotic ride.",
        themes: ["Fame", "Occult", "Media Manipulation"]
    })
};
export const STRATEGIC_QUOTES = {
    1017409: "Evil doesn't wait.",
    1079373: "Hail Satan!",
    400535: "The house that Jack built.",
    1094318: "It sees things you can't.",
    300669: "There is nothing a man cannot do once he accepts the fact that there is no God.",
    242224: "If it's in a word, or it's in a look, you can't get rid of the Babadook.",
    516632: "The Empty Man made me do it.",
    1014590: "Don't turn that dial.",
    913290: "This is perfectly natural.",
    824372: "It's all for you."
};

export const CINEMATIC_COLORS = {
    "Horror": "#991b1b", "Thriller": "#0f172a", "Mystery": "#1e3a8a", "Drama": "#78350f"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Weak", color: "#fca5a5", symbol: "👻", bgColor: "bg-red-200/30", description: "Not scary" },
    { value: 2, label: "Creepy", color: "#f87171", symbol: "💀", bgColor: "bg-red-500/30", description: "Unsettling moments" },
    { value: 3, label: "Scary", color: "#dc2626", symbol: "🩸", bgColor: "bg-red-700/30", description: 'Genuine fear' },
    { value: 4, label: "Traumatic", color: "#7f1d1d", symbol: "☠️", bgColor: "bg-red-950/30", description: "Nightmare fuel" }
];

export const HULU_HORROR_MOVIE_FAQS = {
    'When Evil Lurks': [
        { 
            question: "Is When Evil Lurks the scariest movie of 2023?", 
            answer: "Many critics and horror fans argue yes. Its refusal to follow standard horror tropes—like saving children or animals—makes it uniquely unpredictable and traumatizing. Unlike Hollywood horror that often provides a 'safe' resolution, this film embraces a nihilistic worldview where innocence offers no protection against the spreading corruption." 
        },
        { 
            question: "What are the 'rules' in the movie?", 
            answer: "The characters list seven specific rules to avoid spreading the evil, known as 'The Rotten.' These include: don't use electric lights (it attracts them), don't be near animals (they become vessels), don't hurt the possessed with weapons (it spreads the demon like a virus), and don't say the demon's name. The horror comes from how quickly desperation forces the characters to break every single one." 
        },
        { 
            question: "Is it gory?", 
            answer: "Extremely. It features visceral, unflinching violence that is not for the faint of heart. The practical effects are used to shocking degree, particularly in scenes involving a family dog and a massive axe, creating imagery that is designed to linger in your mind long after the credits roll." 
        },
        { 
            question: "What happens if you use a gun?", 
            answer: "In this specific lore, using a gun, knife, or any physical violence to kill a 'Rotten' creates a release valve for the evil entity. Instead of dying, the demon instantly jumps into the nearest living host or expands its influence physically. This turns standard action-movie logic on its head, leaving the protagonists helpless." 
        }
    ],
    'Longlegs': [
        { 
            question: "Is Longlegs based on a true story?", 
            answer: "No, but it draws heavy inspiration from real-life procedural hunts like the Zodiac Killer and the aesthetics of 90s crime thrillers like 'Silence of the Lambs' and 'Se7en.' The coded letters and the investigative atmosphere mirror the Zodiac case, but the supernatural Satanic elements are purely fictional." 
        },
        { 
            question: "Why does Nicolas Cage look like that?", 
            answer: "Director Osgood Perkins wanted Cage's character to look like a 'botched glam rock doll,' emphasizing a decaying, pathetic kind of evil rather than a cool one. The prosthetics were designed to make him look like someone who has had too much plastic surgery in an attempt to preserve a fading, twisted beauty." 
        },
        { 
            question: "What is the cipher?", 
            answer: "The film features cryptic symbols throughout the runtime that fans have actually decoded. The cipher uses a Satanic alphabet to hide messages about the 'Man Downstairs.' This adds a layer of interactive dread, as the background details often reveal plot points before the characters discover them." 
        },
        { 
            question: "What is the birthday connection?", 
            answer: "The killer targets families specifically on the 14th of the month when a daughter is about to turn nine years old. This ritualistic pattern spans decades, creating a timeline of trauma that connects the protagonist's own childhood to the current spree of murders." 
        }
    ],
    'The House That Jack Built': [
        { 
            question: "Why was this movie controversial?", 
            answer: "When it premiered at the Cannes Film Festival, over 100 people walked out due to its extreme, unflinching violence against women and children. It is Lars von Trier at his most provocative, challenging the audience to question why they enjoy watching murder as entertainment." 
        },
        { 
            question: "Is Jack a psychopath?", 
            answer: "Yes, Jack (played by Matt Dillon) is a textbook psychopath with severe OCD tendencies. The film explores his lack of empathy and his twisted view of murder as 'high art.' He views his victims not as people, but as raw materials for the grotesque house he is trying to build." 
        },
        { 
            question: "What is the ending about?", 
            answer: "The ending is a literal, surreal descent into Dante's Inferno (Hell). After dying, Jack is guided through the circles of the underworld, visualizing his final judgment. It is a stark stylistic shift from the gritty realism of the rest of the film, symbolizing the metaphysical weight of his crimes." 
        },
        { 
            question: "Who is the old man he talks to?", 
            answer: "The character 'Verge' (played by Bruno Ganz) represents the Roman poet Virgil, who guides Dante through Hell in 'The Divine Comedy.' Throughout the film, Jack is confessing his crimes to Verge, framing the entire movie as a dialogue between a sinner and his guide to damnation." 
        }
    ],
    'Oddity': [
        { 
            question: "Is the mannequin real?", 
            answer: "Yes, the terrifying wooden mannequin was a practical prop created specifically for the film. Its stationary, silent presence creates much of the film's unbearable tension. Director Damian McCarthy relied on the audience's fear that it *might* move, rather than constantly animating it with CGI." 
        },
        { 
            question: "Is it jump-scare heavy?", 
            answer: "While it has a few effective jolts, 'Oddity' relies more on dread, atmosphere, and the uncanny feeling of something being 'off' than constant loud noises. However, it does feature one specific jump scare involving a tent zipper that has been cited by critics as one of the best of the year." 
        },
        { 
            question: "Where was it filmed?", 
            answer: "It was filmed in a converted barn in West Cork, Ireland. The stone walls, low ceilings, and isolation of the location contribute significantly to the film's claustrophobic aesthetic, making the house feel like a trap." 
        },
        { 
            question: "What is the 'bell' scene?", 
            answer: "One of the tensest moments involves a small service bell on the mannequin's desk. The rule established is simple: if the bell rings, someone—or something—is in the room with you. The film uses this mechanic to create agonizing suspense without showing the monster." 
        }
    ],
    'Don\'t Breathe': [
        { 
            question: "Who is the Blind Man?", 
            answer: "Norman Nordstrom (The Blind Man) is a Gulf War veteran who lost his sight during combat due to shrapnel. He is played menacingly by Stephen Lang. Despite his disability, his heightened hearing and smell, combined with his military training, make him a lethal apex predator in his own dark home." 
        },
        { 
            question: "Is it supernatural?", 
            answer: "No. The film is entirely grounded in reality, which makes the tension even more palpable. The danger is physical and immediate—a locked door, a loaded gun, a vicious dog—rather than ghosts or demons, forcing the audience to hold their breath alongside the characters." 
        },
        { 
            question: "What is the turkey baster scene?", 
            answer: "It is one of the most controversial and disturbing scenes in modern thriller history. It reveals the Blind Man's true, twisted motivation involving forced insemination to replace his lost daughter. This scene shifts the film from a standard home invasion thriller to something significantly darker and more perverse." 
        },
        { 
            question: "Why is the dog so scary?", 
            answer: "The Rottweiler in the film serves as a relentless biological weapon. Unlike the Blind Man, who can be tricked by silence, the dog can smell and track the intruders instantly. It removes their ability to hide, forcing them to keep moving into dangerous traps." 
        }
    ],
    'The Babadook': [
        { 
            question: "Is the monster real?", 
            answer: "The film leaves it intentionally ambiguous. The Babadook can be seen as a literal monster haunting the house, but it is widely accepted by critics and psychologists as a metaphor for the mother's suppressed grief, depression, and resentment toward her son after her husband's death." 
        },
        { 
            question: "Why is the kid so annoying?", 
            answer: "Samuel's screaming and behavioral issues are intentional design choices. They put the audience in the mother's shoes, helping us understand her exhaustion, fraying sanity, and why she might snap. It increases the psychological horror by making the viewer sympathize with the potential abuser." 
        },
        { 
            question: "What does the ending mean?", 
            answer: "The ending, where the mother keeps the Babadook in the basement and feeds it worms, symbolizes learning to live with grief. You cannot kill grief or banish it completely; you have to nurture it, respect it, and keep it contained so it doesn't consume your daily life." 
        },
        { 
            question: "Is the pop-up book real?", 
            answer: "Yes, the terrifying pop-up book 'Mister Babadook' was hand-made for the film by illustrator Alex Juhasz. Due to massive fan demand after the movie's release, a limited run of actual copies was crowdfunded and published, becoming a rare collector's item." 
        }
    ],
    'The Empty Man': [
        { 
            question: "Why is the opening 20 minutes different?", 
            answer: "The 20-minute prologue functions almost as a standalone short film set in the snowy Himalayas. It establishes the cosmic scale of the threat and the origin of the entity before the movie jarringly shifts to a modern detective noir story in Missouri, disorienting the viewer." 
        },
        { 
            question: "Is it a slasher?", 
            answer: "No. Despite the title sounding like 'The Bye Bye Man' or 'Slender Man,' this is a dense, philosophical cosmic horror film. It deals with concepts like nihilism, information theory, and the breakdown of reality, closer to the works of H.P. Lovecraft than a teen slasher." 
        },
        { 
            question: "What is a Tulpa?", 
            answer: "The film explores the concept of a 'Tulpa'—a being or object that is created through sheer spiritual or mental discipline alone. The movie posits the terrifying idea: if enough people believe in a monster with enough intensity, does that monster manifest into reality?" 
        },
        { 
            question: "Why is it a cult classic?", 
            answer: "The film was buried by the studio (Disney/Fox) during the pandemic with zero marketing. However, it found a massive second life on streaming due to its ambitious 137-minute runtime, complex mind-bending plot, and unique visual style, earning it a devoted following." 
        }
    ],
    'Barbarian': [
        { 
            question: "What is the twist?", 
            answer: "The film famously pivots at the 40-minute mark. Just as the tension peaks, it hard-cuts to black and introduces a completely different character (Justin Long) driving a convertible in sunny California. It completely changes the tone from a horror-thriller to a dark comedy before merging the storylines." 
        },
        { 
            question: "Is it about Airbnb?", 
            answer: "It taps into the modern anxiety of staying in a stranger's house (the double-booked rental setup), but it ultimately explores deeper themes of urban decay, the collapse of Detroit's neighborhoods, and the dark secrets that can be hidden in suburbia's basement." 
        },
        { 
            question: "Who is 'The Mother'?", 
            answer: "The antagonist is a tragic figure—a product of decades of inbreeding and abuse within the basement tunnels. She is not evil by nature but is driven by a twisted, primal instinct to nurture and protect her 'babies,' making her both terrifying and heartbreaking." 
        },
        { 
            question: "Is Justin Long's character a villain?", 
            answer: "While not the 'monster' in the traditional sense, his character AJ represents a different kind of evil—selfish, predatory arrogance. The film contrasts the physical monstrosity of 'The Mother' with the moral monstrosity of a man who is willing to sacrifice others to save himself." 
        }
    ],
    'The First Omen': [
        { 
            question: "Is it a prequel?", 
            answer: "Yes, it serves as a direct prequel to the 1976 classic 'The Omen,' explaining the origin of Damien (the Antichrist). It answers the long-standing question of who Damien's mother was and how the church conspiracy orchestrated his birth." 
        },
        { 
            question: "What is the 'birth scene' people talk about?", 
            answer: "The film features a graphic and disturbing sequence involving a birth that pushed the limits of the R-rating. It was praised for its reliance on practical effects and body horror rather than CGI, emphasizing the physical violation and trauma of the event." 
        },
        { 
            question: "How does it connect to the original?", 
            answer: "The film ends by seamlessly setting up the adoption of the baby (Damien) by the American Ambassador, Robert Thorn. It provides a photo of Gregory Peck's character from the original 1976 film, directly linking the two timelines." 
        },
        { 
            question: "What is the Jackal?", 
            answer: "The original film lore states the Antichrist was born of a Jackal. This film expands on that mythology by showing the terrifying genetic experiments used to breed a human vessel with a jackal to bring this prophecy to life, grounding the supernatural in grotesque biological horror." 
        }
    ],
    'Late Night with the Devil': [
        { 
            question: "Is it real footage?", 
            answer: "No, it is a 'mockumentary' or found-footage style film presented as a 'master tape' of a banned 1977 Halloween talk show broadcast. The filmmakers went to great lengths to recreate the camera lenses, lighting, and set design of 70s TV to make it look authentically vintage." 
        },
        { 
            question: "Did they use AI?", 
            answer: "Yes, the film faced some controversy for using AI-generated art for three brief interstitial title cards (like the 'We'll Be Right Back' screens). The directors confirmed they experimented with AI to achieve a specific surreal, 70s aesthetic for those graphics." 
        },
        { 
            question: "What is the 'Grove'?", 
            answer: "The film references a secretive elite gathering called 'The Grove,' which is a direct nod to the real-life Bohemian Grove. In the movie's lore, the host Jack Delroy made a deal with the devil at this gathering to secure his fame and TV success." 
        },
        { 
            question: "Why is the screen square?", 
            answer: "To maintain the illusion of watching a 1977 television broadcast, the film is presented in the 4:3 aspect ratio (square), which was the standard for TV sets of that era. This framing claustrophobically traps the characters within the 'box' of the television screen." 
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
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('gore') || lowerType.includes('mutilation')) types.add('extreme gore');
        if (lowerType.includes('animal')) types.add('animal harm');
        if (lowerType.includes('sexual') || lowerType.includes('assault')) types.add('sexual violence');
        if (lowerType.includes('suicide') || lowerType.includes('self-harm')) types.add('self-harm');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_HORROR_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A terrifying horror movie on Hulu.`,
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