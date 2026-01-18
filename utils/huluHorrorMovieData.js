// utils/huluHorrorMovieData.js - HULU HORROR COLLECTION DATA
// Ranked by Scariness: Dread, Gore, and Psychological Trauma

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 1017409, "imdbID": "tt16300962", "Title": "When Evil Lurks", "year": 2023, "genre": "Horror", "runtime": 99, "rank": 1 },
    { "tmdbId": 1079373, "imdbID": "tt23468450", "Title": "Longlegs", "year": 2024, "genre": "Horror", "runtime": 101, "rank": 2 },
    { "tmdbId": 400535, "imdbID": "tt4003440", "Title": "The House That Jack Built", "year": 2018, "genre": "Horror", "runtime": 152, "rank": 3 },
    { "tmdbId": 1094318, "imdbID": "tt26466146", "Title": "Oddity", "year": 2024, "genre": "Horror", "runtime": 98, "rank": 4 },
    { "tmdbId": 242224, "imdbID": "tt2321549", "Title": "The Babadook", "year": 2014, "genre": "Horror", "runtime": 94, "rank": 5 },
    { "tmdbId": 516632, "imdbID": "tt5867314", "Title": "The Empty Man", "year": 2020, "genre": "Horror", "runtime": 137, "rank": 6 },
    { "tmdbId": 1014590, "imdbID": "tt14966898", "Title": "Late Night with the Devil", "year": 2023, "genre": "Horror", "runtime": 93, "rank": 7 },
    { "tmdbId": 913290, "imdbID": "tt15791034", "Title": "Barbarian", "year": 2022, "genre": "Horror", "runtime": 102, "rank": 8 },
    { "tmdbId": 824372, "imdbID": "tt5676368", "Title": "The First Omen", "year": 2024, "genre": "Horror", "runtime": 119, "rank": 9 },
    { "tmdbId": 787752, "imdbID": "tt13352216", "Title": "Fresh", "year": 2022, "genre": "Thriller", "runtime": 114, "rank": 10 }
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
    // 5. The Babadook
    242224: { 
        scenes: [
            { start: "0:55:00", end: "1:00:00", type: "Animal Harm (Dog)", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Child Threat", severity: "High" }
        ] 
    },
    // 6. The Empty Man
    516632: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Suicide", severity: "High" }
        ] 
    },
    // 7. Late Night with the Devil
    1014590: { 
        scenes: [
            { start: "1:15:00", end: "1:25:00", type: "Gore/Body Horror", severity: "High" }
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
    // 10. Fresh
    787752: { 
        scenes: [
            { start: "0:35:00", end: "0:40:00", type: "Cannibalism", severity: "High" },
            { start: "1:40:00", end: "1:45:00", type: "Gore", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    1017409: "https://image.tmdb.org/t/p/w500/2yl2zC3tX7F2KyD62P8R92V7X9o.jpg",
    1079373: "https://image.tmdb.org/t/p/w500/5aj8vVGFvGVbXQmZhcs62060w23.jpg",
    400535: "https://image.tmdb.org/t/p/w500/77i12a2Q5b3Z1X5Z5X5X5X5X5X5.jpg",
    1094318: "https://image.tmdb.org/t/p/w500/uln9Efc2vzDOl0WTEhlqcedtJc.jpg",
    242224: "https://image.tmdb.org/t/p/w500/k5WCg7in2F3xX7aX7aX7aX7aX7a.jpg",
    516632: "https://image.tmdb.org/t/p/w500/4PAqJ9l8J9l8J9l8J9l8J9l8J9l.jpg",
    1014590: "https://image.tmdb.org/t/p/w500/j9j9j9j9j9j9j9j9j9j9j9j9j9j.jpg",
    913290: "https://image.tmdb.org/t/p/w500/y2Ca1neKke2mGPMaZvXdMjFvqCN.jpg",
    824372: "https://image.tmdb.org/t/p/w500/uGyGdD8f1Z8f1Z8f1Z8f1Z8f1Z8.jpg",
    787752: "https://image.tmdb.org/t/p/w500/24G24G24G24G24G24G24G24G24G.jpg"
};

// ✅ Helper to map "Horror" metrics to your existing code keys
// psychologicalIntensity -> Dread / Paranoia
// destructiveObsession -> The Evil Force
// visceralImpact -> Gore / Jump Scares
const createMovieData = (data) => ({
    psychologicalIntensity: 85, 
    destructiveObsession: 85,   
    visceralImpact: 90,         
    complexityLevel: "HIGH",
    dominantColor: "#991b1b",   // Red default for Horror
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. When Evil Lurks
    1017409: createMovieData({ 
        psychologicalIntensity: 90, destructiveObsession: 98, visceralImpact: 100, complexityLevel: "TRAUMA", 
        dominantColor: "#7f1d1d", rating: 7.0, criticsScore: 96, audienceScore: 78, director: "Demián Rugna", 
        cast: ["Ezequiel Rodríguez", "Demián Salomón"], boxOffice: "$0.6 million", budget: "$4 million", 
        dna: { "Horror": 60, "Possession": 30, "Thriller": 10 },
        scenes: [
            { time: 10, intensity: 60, label: "The Rotten One", color: "#7f1d1d" },
            { time: 30, intensity: 90, label: "The Dog", color: "#991b1b" },
            { time: 50, intensity: 95, label: "The Road", color: "#b91c1c" },
            { time: 75, intensity: 85, label: "The School", color: "#dc2626" },
            { time: 95, intensity: 100, label: "No Rules", color: "#ef4444" }
        ],
        synopsis: "In a remote village, two brothers find a demon-infected man just about to give birth to evil itself. In their attempt to dispose of him, they unleash a chaos that disregards all rules of horror safety. No mercy. Pure trauma.",
        themes: ["Contagion", "Nihilism", "Family Trauma"]
    }),

    // 2. Longlegs
    1079373: createMovieData({ 
        psychologicalIntensity: 100, destructiveObsession: 95, visceralImpact: 75, complexityLevel: "DREAD", 
        dominantColor: "#fcd34d", rating: 7.2, criticsScore: 86, audienceScore: 60, director: "Osgood Perkins", 
        cast: ["Maika Monroe", "Nicolas Cage"], boxOffice: "$100 million", budget: "$10 million", 
        dna: { "Horror": 50, "Crime": 30, "Occult": 20 },
        scenes: [
            { time: 5, intensity: 80, label: "The Opening", color: "#fbbf24" },
            { time: 40, intensity: 70, label: "Cipher", color: "#f59e0b" },
            { time: 70, intensity: 85, label: "Interrogation", color: "#d97706" },
            { time: 90, intensity: 95, label: "Hail Satan", color: "#b45309" },
            { time: 100, intensity: 90, label: "The Birthday", color: "#78350f" }
        ],
        synopsis: "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. A slow-burn, suffocating atmosphere that feels genuinely cursed.",
        themes: ["Satanism", "Procedural", "Atmospheric Dread"]
    }),

    // 3. The House That Jack Built
    400535: createMovieData({ 
        psychologicalIntensity: 95, destructiveObsession: 100, visceralImpact: 98, complexityLevel: "DISTURBING", 
        dominantColor: "#ef4444", rating: 6.8, criticsScore: 59, audienceScore: 67, director: "Lars von Trier", 
        cast: ["Matt Dillon", "Bruno Ganz"], boxOffice: "$5 million", budget: "$10 million", 
        dna: { "Horror": 40, "Psychological": 40, "Art": 20 },
        scenes: [
            { time: 20, intensity: 60, label: "1st Incident", color: "#ef4444" },
            { time: 50, intensity: 98, label: "The Picnic", color: "#b91c1c" },
            { time: 80, intensity: 85, label: "Simple", color: "#991b1b" },
            { time: 110, intensity: 90, label: "Full Metal Jacket", color: "#7f1d1d" },
            { time: 145, intensity: 95, label: "The Descent", color: "#450a0a" }
        ],
        synopsis: "The story follows Jack, a highly intelligent serial killer, over the course of 12 years, depicting the murders that define his development as a serial killer. Deeply disturbing, cruel, and philosophically scarring.",
        themes: ["Narcissism", "Art vs Violence", "Psychopathy"]
    }),

    // 4. Oddity
    1094318: createMovieData({ 
        psychologicalIntensity: 88, destructiveObsession: 80, visceralImpact: 92, complexityLevel: "TENSION", 
        dominantColor: "#78350f", rating: 7.0, criticsScore: 96, audienceScore: 83, director: "Damian McCarthy", 
        cast: ["Gwilym Lee", "Carolyn Bracken"], boxOffice: "$1 million", budget: "N/A", 
        dna: { "Horror": 60, "Mystery": 30, "Supernatural": 10 },
        scenes: [
            { time: 15, intensity: 50, label: "The Glass Eye", color: "#a16207" },
            { time: 45, intensity: 85, label: "The Tent", color: "#854d0e" },
            { time: 70, intensity: 95, label: "The Wooden Man", color: "#713f12" },
            { time: 85, intensity: 90, label: "Trapdoor", color: "#451a03" },
            { time: 95, intensity: 80, label: "The Bell", color: "#78350f" }
        ],
        synopsis: "A blind medium uncovers the truth behind her twin sister's death with the help of a terrifying wooden mannequin. Relentless tension that relies on atmosphere rather than cheap jumps.",
        themes: ["Cursed Objects", "Grief", "Revenge"]
    }),

    // 5. The Babadook
    242224: createMovieData({ 
        psychologicalIntensity: 95, destructiveObsession: 90, visceralImpact: 70, complexityLevel: "EMOTIONAL", 
        dominantColor: "#171717", rating: 6.8, criticsScore: 98, audienceScore: 72, director: "Jennifer Kent", 
        cast: ["Essie Davis", "Noah Wiseman"], boxOffice: "$10 million", budget: "$2 million", 
        dna: { "Horror": 50, "Drama": 40, "Psychological": 10 },
        scenes: [
            { time: 15, intensity: 40, label: "Bedtime Story", color: "#404040" },
            { time: 45, intensity: 75, label: "Baba-Dook-Dook", color: "#262626" },
            { time: 70, intensity: 90, label: "Possession", color: "#171717" },
            { time: 85, intensity: 95, label: "The Basement", color: "#0a0a0a" },
            { time: 92, intensity: 60, label: "Feeding Time", color: "#404040" }
        ],
        synopsis: "A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house, but soon discovers a sinister presence all around her. A masterpiece of grief horror.",
        themes: ["Grief", "Motherhood", "Mental Illness"]
    }),

    // 6. The Empty Man
    516632: createMovieData({ 
        psychologicalIntensity: 90, destructiveObsession: 95, visceralImpact: 75, complexityLevel: "COSMIC", 
        dominantColor: "#1e3a8a", rating: 6.2, criticsScore: 76, audienceScore: 40, director: "David Prior", 
        cast: ["James Badge Dale", "Marin Ireland"], boxOffice: "$4 million", budget: "$16 million", 
        dna: { "Horror": 40, "Mystery": 30, "Philosophical": 30 },
        scenes: [
            { time: 20, intensity: 90, label: "The Cave Prologue", color: "#172554" },
            { time: 50, intensity: 60, label: "The Bridge", color: "#1e3a8a" },
            { time: 85, intensity: 75, label: "The Campfire", color: "#1d4ed8" },
            { time: 110, intensity: 95, label: "The Cult", color: "#2563eb" },
            { time: 130, intensity: 98, label: "The Signal", color: "#172554" }
        ],
        synopsis: "On the trail of a missing girl, an ex-cop comes across a secretive group attempting to summon a terrifying supernatural entity. Cosmic cult horror with an unforgettable 20-minute opening.",
        themes: ["Nihilism", "Cults", "Tulpa Theory"]
    }),

    // 7. Late Night with the Devil
    1014590: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 80, visceralImpact: 85, complexityLevel: "CHAOTIC", 
        dominantColor: "#c2410c", rating: 7.0, criticsScore: 97, audienceScore: 81, director: "Cameron Cairnes", 
        cast: ["David Dastmalchian", "Laura Gordon"], boxOffice: "$12 million", budget: "$2 million", 
        dna: { "Horror": 50, "Media": 30, "Supernatural": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "The Setup", color: "#c2410c" },
            { time: 50, intensity: 70, label: "The Hypnosis", color: "#ea580c" },
            { time: 70, intensity: 85, label: "The Manifestation", color: "#f97316" },
            { time: 85, intensity: 95, label: "Live TV Chaos", color: "#c2410c" },
            { time: 90, intensity: 100, label: "Static", color: "#9a3412" }
        ],
        synopsis: "A live television broadcast in 1977 goes horribly wrong, unleashing evil into the nation's living rooms. Found-footage realism meets 70s aesthetics in a creepy, chaotic ride.",
        themes: ["Fame", "Occult", "Media Manipulation"]
    }),

    // 8. Barbarian
    913290: createMovieData({ 
        psychologicalIntensity: 80, destructiveObsession: 70, visceralImpact: 90, complexityLevel: "SHOCKING", 
        dominantColor: "#111827", rating: 7.0, criticsScore: 93, audienceScore: 71, director: "Zach Cregger", 
        cast: ["Georgina Campbell", "Bill Skarsgård"], boxOffice: "$45 million", budget: "$4.5 million", 
        dna: { "Horror": 60, "Thriller": 30, "Comedy": 10 },
        scenes: [
            { time: 15, intensity: 50, label: "The Basement", color: "#1f2937" },
            { time: 40, intensity: 95, label: "The Tape Measure", color: "#111827" },
            { time: 60, intensity: 30, label: "The Cut (Flashback)", color: "#374151" },
            { time: 85, intensity: 80, label: "The Mother", color: "#1f2937" },
            { time: 95, intensity: 90, label: "Water Tower", color: "#111827" }
        ],
        synopsis: "A woman staying at an Airbnb discovers that the house she has rented is not what it seems. Features a terrifying first half and a shocking narrative pivot that changes the genre entirely.",
        themes: ["Urban Decay", "Toxic Masculinity", "Secrets"]
    }),

    // 9. The First Omen
    824372: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 90, visceralImpact: 95, complexityLevel: "RELIGIOUS", 
        dominantColor: "#991b1b", rating: 6.5, criticsScore: 81, audienceScore: 70, director: "Arkasha Stevenson", 
        cast: ["Nell Tiger Free", "Ralph Ineson"], boxOffice: "$53 million", budget: "$30 million", 
        dna: { "Horror": 70, "Religious": 30 },
        scenes: [
            { time: 15, intensity: 40, label: "The Convent", color: "#991b1b" },
            { time: 55, intensity: 98, label: "The Birth Scene", color: "#7f1d1d" },
            { time: 80, intensity: 85, label: "The Discovery", color: "#b91c1c" },
            { time: 100, intensity: 90, label: "The Ritual", color: "#991b1b" },
            { time: 115, intensity: 95, label: "It's All For You", color: "#7f1d1d" }
        ],
        synopsis: "A young American woman is sent to Rome to begin a life of service to the church, but encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy.",
        themes: ["Religious Conspiracy", "Bodily Autonomy", "Antichrist"]
    }),

    // 10. Fresh
    787752: createMovieData({ 
        psychologicalIntensity: 75, destructiveObsession: 85, visceralImpact: 88, complexityLevel: "TWISTED", 
        dominantColor: "#be123c", rating: 6.7, criticsScore: 81, audienceScore: 80, director: "Mimi Cave", 
        cast: ["Daisy Edgar-Jones", "Sebastian Stan"], boxOffice: "Streaming", budget: "$15 million", 
        dna: { "Thriller": 50, "Horror": 30, "Comedy": 20 },
        scenes: [
            { time: 10, intensity: 20, label: "Bad Dates", color: "#fda4af" },
            { time: 35, intensity: 85, label: "The Reveal", color: "#be123c" },
            { time: 60, intensity: 70, label: "Dinner", color: "#9f1239" },
            { time: 90, intensity: 80, label: "The Escape", color: "#881337" },
            { time: 110, intensity: 90, label: "Bon Appétit", color: "#be123c" }
        ],
        synopsis: "Noa meets the alluring Steve at a grocery store and accepts a weekend invitation, only to find that her new paramour has some unusual appetites. Dark, twisted, and shockingly fun.",
        themes: ["Modern Dating", "Cannibalism", "Survival"]
    })
};

export const STRATEGIC_QUOTES = {
    1017409: "Evil doesn't wait.",
    1079373: "Hail Satan!",
    400535: "The house that Jack built.",
    1094318: "It sees things you can't.",
    242224: "If it's in a word, or it's in a look, you can't get rid of the Babadook.",
    516632: "The Empty Man made me do it.",
    1014590: "Don't turn that dial.",
    913290: "This is perfectly natural.",
    824372: "It's all for you.",
    787752: "I have peculiar tastes."
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
        { question: "Is When Evil Lurks the scariest movie of 2023?", answer: "Many critics and horror fans argue yes. Its refusal to follow standard horror tropes—like saving children or animals—makes it uniquely unpredictable and traumatizing." },
        { question: "What are the 'rules' in the movie?", answer: "The characters list rules to avoid spreading the evil: don't use electric lights, don't be near animals, don't hurt the possessed with weapons. The horror comes from how quickly these rules fail." },
        { question: "Is it gory?", answer: "Extremely. It features visceral, unflinching violence that is not for the faint of heart." }
    ],
    'Longlegs': [
        { question: "Is Longlegs based on a true story?", answer: "No, but it draws heavy inspiration from real-life procedural hunts like the Zodiac Killer and the aesthetics of 90s crime thrillers like Silence of the Lambs." },
        { question: "Why does Nicolas Cage look like that?", answer: "Director Osgood Perkins wanted Cage's character to look like a 'botched glam rock doll,' emphasizing a decaying, pathetic kind of evil rather than a cool one." },
        { question: "What is the cipher?", answer: "The film features cryptic symbols throughout that fans have decoded to reveal satanic messages, adding a layer of interactive dread." }
    ],
    'The House That Jack Built': [
        { question: "Why was this movie controversial?", answer: "When it premiered at Cannes, over 100 people walked out due to its extreme violence against women and children. It is Lars von Trier at his most provocative." },
        { question: "Is Jack a psychopath?", answer: "Yes, Jack is a textbook psychopath with OCD tendencies. The film explores his lack of empathy and his view of murder as high art." },
        { question: "What is the ending about?", answer: "The ending is a literal descent into Dante's Inferno (Hell), visualizing Jack's final judgment." }
    ],
    'Oddity': [
        { question: "Is the mannequin real?", answer: "The terrifying wooden mannequin was a practical prop created for the film. Its stationary, silent presence creates much of the film's unbearable tension." },
        { question: "Is it jump-scare heavy?", answer: "While it has a few effective jolts, Oddity relies more on dread, atmosphere, and the uncanny feeling of something being 'off' than constant loud noises." }
    ],
    'The Babadook': [
        { question: "Is the monster real?", answer: "The film leaves it ambiguous. The Babadook can be seen as a literal monster, but it is widely accepted as a metaphor for the mother's suppressed grief and depression." },
        { question: "Why is the kid so annoying?", answer: "Samuel's behavior is intentional. It puts the audience in the mother's shoes, helping us understand her exhaustion and why she might snap, increasing the psychological horror." }
    ],
    'The Empty Man': [
        { question: "Why is the opening 20 minutes different?", answer: "The prologue functions as a short film set in the Himalayas. It establishes the cosmic scale of the threat before the movie shifts to a modern detective noir story." },
        { question: "Is it a slasher?", answer: "No. Despite the title sounding like 'The Bye Bye Man' or 'Slender Man,' this is a dense, philosophical cosmic horror film closer to H.P. Lovecraft than a teen slasher." }
    ],
    'Late Night with the Devil': [
        { question: "Is it real footage?", answer: "No, it is a 'mockumentary' or found-footage style film presented as a master tape of a 1977 talk show. The period detail is so accurate it feels authentic." },
        { question: "Did they use AI?", answer: "Yes, the film faced some controversy for using AI-generated art for brief interstitial title cards (like the 'We'll Be Right Back' screens)." }
    ],
    'Barbarian': [
        { question: "What is the twist?", answer: "The film famously pivots at the 40-minute mark, cutting away from the main tension to a completely different character (Justin Long) in a different tone, before bringing the stories together." },
        { question: "Is it about Airbnb?", answer: "It taps into the modern fear of staying in a stranger's house, but it ultimately explores deeper themes of urban decay and the secrets hidden in suburbia." }
    ],
    'The First Omen': [
        { question: "Is it a prequel?", answer: "Yes, it serves as a direct prequel to the 1976 classic 'The Omen,' explaining the origin of Damien." },
        { question: "What is the 'birth scene' people talk about?", answer: "The film features a graphic and disturbing sequence involving a birth that pushed the limits of the R-rating, praised for its practical effects and body horror." }
    ],
    'Fresh': [
        { question: "When does the title card drop?", answer: "The opening credits don't appear until 33 minutes into the movie, signaling the shift from a romantic comedy to a horror thriller." },
        { question: "Is it a zombie movie?", answer: "No, it is a film about cannibalism and the commodification of women's bodies, satirizing modern dating culture." }
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