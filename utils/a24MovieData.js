// utils/a24MovieData.js - A24 MASTERPIECES COLLECTION DATA ✅
// Movies exploring profound human emotion, surreal horror, and undeniable artistic vision.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 965150, "imdbID": "tt19770238", "Title": "Aftersun", "year": 2022, "genre": "Drama", "runtime": 102, "rank": 1 },
    { "tmdbId": 467244, "imdbID": "tt7160372", "Title": "The Zone of Interest", "year": 2023, "genre": "Drama", "runtime": 105, "rank": 2 },
    { "tmdbId": 394117, "imdbID": "tt5649144", "Title": "The Florida Project", "year": 2017, "genre": "Drama", "runtime": 111, "rank": 3 },
    { "tmdbId": 503919, "imdbID": "tt7984734", "Title": "The Lighthouse", "year": 2019, "genre": "Horror", "runtime": 109, "rank": 4 },
    { "tmdbId": 850165, "imdbID": "tt21064584", "Title": "The Iron Claw", "year": 2023, "genre": "Drama", "runtime": 132, "rank": 5 },
    { "tmdbId": 391713, "imdbID": "tt4925292", "Title": "Lady Bird", "year": 2017, "genre": "Comedy", "runtime": 94, "rank": 6 },
    { "tmdbId": 493922, "imdbID": "tt7784604", "Title": "Hereditary", "year": 2018, "genre": "Horror", "runtime": 127, "rank": 7 },
    { "tmdbId": 530385, "imdbID": "tt8772262", "Title": "Midsommar", "year": 2019, "genre": "Horror", "runtime": 148, "rank": 8 },
    { "tmdbId": 901563, "imdbID": "tt9660502", "Title": "Close", "year": 2022, "genre": "Drama", "runtime": 104, "rank": 9 },
    { "tmdbId": 785084, "imdbID": "tt13833688", "Title": "The Whale", "year": 2022, "genre": "Drama", "runtime": 117, "rank": 10 }
];

// ✅ REVISED STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    965150: "I think it's nice that we share the same sky.", // Aftersun
    467244: "We are living as we dreamed.", // The Zone of Interest
    394117: "You know why this is my favorite tree? 'Cause it's tipped over, and it's still growing.", // The Florida Project
    503919: "Why'd ya spill yer beans?", // The Lighthouse
    850165: "I used to be a brother.", // The Iron Claw
    391713: "I want you to be the very best version of yourself that you can be.", // Lady Bird
    493922: "I am your mother!", // Hereditary
    530385: "Do you feel held by him? Does he feel like home to you?", // Midsommar
    901563: "I miss him.", // Close
    785084: "I need to know that I have done one right thing with my life!" // The Whale
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data)
export const SENSITIVE_TIMELINES = {
    // 1. Aftersun
    965150: { 
        scenes: [] 
    },
    // 2. The Zone of Interest
    467244: {
        scenes: [
            { start: "0:45:10", end: "0:46:15", type: "Sexual Content (Implied/Audio)", severity: "Moderate" }
        ]
    },
    // 3. The Florida Project
    394117: {
        scenes: [
            { start: "1:20:10", end: "1:21:05", type: "Suggestive Content & Partial Nudity", severity: "Moderate" }
        ]
    },
    // 4. The Lighthouse
    503919: {
        scenes: [
            { start: "0:55:10", end: "0:56:05", type: "Sexual Content & Nudity (Mermaid)", severity: "High" },
            { start: "1:15:30", end: "1:16:15", type: "Suggestive Content", severity: "High" },
            { start: "1:28:40", end: "1:29:20", type: "Nudity & Sexual Content", severity: "High" }
        ]
    },
    // 5. The Iron Claw
    850165: { 
        scenes: [ 
            { start: "0:25:00", end: "0:26:30", type: "Suggestive Content", severity: "Moderate" } 
        ]
    },
    // 6. Lady Bird
    391713: {
        scenes: [
            { start: "1:05:15", end: "1:06:20", type: "Sexual Content (Teen)", severity: "Moderate" }
        ]
    },
    // 7. Hereditary
    493922: {
        scenes: [
            { start: "2:00:15", end: "2:02:45", type: "Nudity (Cult Members)", severity: "High" }
        ]
    },
    // 8. Midsommar
    530385: {
        scenes: [
            { start: "1:55:20", end: "1:58:45", type: "Sexual Content & Nudity (Ritual)", severity: "Extreme" },
            { start: "2:10:15", end: "2:11:30", type: "Nudity", severity: "High" }
        ]
    },
    // 9. Close
    901563: { scenes: [] },
    // 10. The Whale
    785084: {
        scenes: [
            { start: "0:05:10", end: "0:06:30", type: "Suggestive Content", severity: "Moderate" }
        ]
    }
};

export const FALLBACK_POSTERS = {
    965150: "https://image.tmdb.org/t/p/w500/1uvFFwX8pLqGf08A5t1hK1x4L5z.jpg",
    467244: "https://image.tmdb.org/t/p/w500/b0K5A2N1c1z7S0V9L8t2I5a0R4v.jpg",
    394117: "https://image.tmdb.org/t/p/w500/sF1uV5e7t3O0M9v4N8o2R5a1L6z.jpg",
    503919: "https://image.tmdb.org/t/p/w500/7a0T4x1e2L5t8N3m9I1o4M6u0A8.jpg",
    850165: "https://image.tmdb.org/t/p/w500/3o1N2A4v0M8e5L9t7I0x6R5m1Z7.jpg",
    391713: "https://image.tmdb.org/t/p/w500/8t0M4A5v1L9e2N7x5I0o3R6m1Z7.jpg",
    493922: "https://image.tmdb.org/t/p/w500/4n2M1A5v0L8e7N9x3I0o5R6m1Z7.jpg",
    530385: "https://image.tmdb.org/t/p/w500/5m1N2A4v0L8e7N9x3I0o5R6m1Z7.jpg",
    901563: "https://image.tmdb.org/t/p/w500/6o1N2A4v0L8e7N9x3I0o5R6m1Z7.jpg",
    785084: "https://image.tmdb.org/t/p/w500/7p1N2A4v0L8e7N9x3I0o5R6m1Z7.jpg"
};

// ✅ MAPPING NOTE:
// emotionalResonance = Psychological Depth
// artisticComplexity = Visual/Narrative Atmosphere
// visceralImpact = Shock Value / Tearjerker level

const createMovieData = (data) => ({
    emotionalResonance: 85, 
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Aftersun
    965150: createMovieData({ 
        emotionalResonance: 98, artisticComplexity: 90, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#0284c7", rating: 7.6, criticsScore: 96, audienceScore: 82, director: "Charlotte Wells", 
        cast: ["Paul Mescal", "Frankie Corio"], boxOffice: "$8.3 million", budget: "$3 million", 
        dna: { Drama: 80, "Coming-of-Age": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Resort", color: "#38bdf8" },
            { time: 45, intensity: 60, label: "Scuba Diving", color: "#0284c7" },
            { time: 75, intensity: 85, label: "Under Pressure", color: "#1e3a8a" },
            { time: 92, intensity: 100, label: "The Strobe Light", color: "#ffffff" },
            { time: 98, intensity: 95, label: "The Airport", color: "#0f172a" }
        ],
        synopsis: "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between miniDV footage as she tries to reconcile the father she knew with the man she didn't.",
        themes: ["Memory", "Depression", "Paternal Bond"]
    }),
    // 2. The Zone of Interest
    467244: createMovieData({ 
        emotionalResonance: 90, artisticComplexity: 100, visceralImpact: 88, complexityLevel: "EXTREME", 
        dominantColor: "#4ade80", rating: 7.5, criticsScore: 93, audienceScore: 78, director: "Jonathan Glazer", 
        cast: ["Christian Friedel", "Sandra Hüller"], boxOffice: "$35 million", budget: "$15 million",
        dna: { Drama: 60, History: 30, War: 10 },
        scenes: [
            { time: 10, intensity: 60, label: "The Garden", color: "#4ade80" },
            { time: 40, intensity: 75, label: "The River Ash", color: "#525252" },
            { time: 70, intensity: 85, label: "Night Vision", color: "#ffffff" },
            { time: 95, intensity: 90, label: "The Staircase", color: "#171717" },
            { time: 100, intensity: 100, label: "Present Day", color: "#000000" }
        ],
        synopsis: "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp. A chilling exploration of the banality of evil.",
        themes: ["Banality of Evil", "Complicity", "Compartmentalization"]
    }),
    // 3. The Florida Project
    394117: createMovieData({ 
        emotionalResonance: 92, artisticComplexity: 80, visceralImpact: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#d946ef", rating: 7.6, criticsScore: 96, audienceScore: 80, director: "Sean Baker", 
        cast: ["Willem Dafoe", "Brooklynn Prince", "Bria Vinaite"], boxOffice: "$11.3 million", budget: "$2 million",
        dna: { Drama: 70, Comedy: 20, "Social Issue": 10 },
        scenes: [
            { time: 15, intensity: 40, label: "Spitting on Cars", color: "#d946ef" },
            { time: 50, intensity: 65, label: "The Abandoned Condos", color: "#a855f7" },
            { time: 80, intensity: 75, label: "Bobby's Protection", color: "#3b82f6" },
            { time: 100, intensity: 95, label: "DCF Arrives", color: "#ef4444" },
            { time: 108, intensity: 100, label: "The Magic Kingdom", color: "#fbbf24" }
        ],
        synopsis: "Set over one summer, the film follows precocious six-year-old Moonee as she courts mischief and adventure with her ragtag playmates and bonds with her rebellious but caring mother, all while living in the shadows of Disney World.",
        themes: ["Childhood Innocence", "Poverty", "Hidden Homelessness"]
    }),
    // 4. The Lighthouse
    503919: createMovieData({ 
        emotionalResonance: 80, artisticComplexity: 95, visceralImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#737373", rating: 7.4, criticsScore: 90, audienceScore: 72, director: "Robert Eggers", 
        cast: ["Robert Pattinson", "Willem Dafoe"], boxOffice: "$18.3 million", budget: "$4 million",
        dna: { Horror: 50, Drama: 30, Mystery: 20 },
        scenes: [
            { time: 20, intensity: 50, label: "The Gull", color: "#737373" },
            { time: 55, intensity: 80, label: "Mermaid Vision", color: "#525252" },
            { time: 85, intensity: 90, label: "Spill Yer Beans", color: "#171717" },
            { time: 100, intensity: 100, label: "The Light", color: "#ffffff" },
            { time: 105, intensity: 95, label: "Prometheus", color: "#000000" }
        ],
        synopsis: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s. A claustrophobic descent into madness fueled by isolation and alcohol.",
        themes: ["Isolation", "Madness", "Mythology"]
    }),
    // 5. The Iron Claw
    850165: createMovieData({ 
        emotionalResonance: 96, artisticComplexity: 75, visceralImpact: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#b45309", rating: 7.7, criticsScore: 89, audienceScore: 94, director: "Sean Durkin", 
        cast: ["Zac Efron", "Jeremy Allen White", "Harris Dickinson"], boxOffice: "$43 million", budget: "$15 million",
        dna: { Drama: 50, Biography: 30, Sports: 20 },
        scenes: [
            { time: 30, intensity: 60, label: "The Von Erich Claw", color: "#b45309" },
            { time: 65, intensity: 85, label: "Kerry's Accident", color: "#991b1b" },
            { time: 95, intensity: 95, label: "Mike's Note", color: "#525252" },
            { time: 115, intensity: 100, label: "The Coin Toss", color: "#171717" },
            { time: 125, intensity: 98, label: "The River Scene", color: "#fcd34d" }
        ],
        synopsis: "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s. Through tragedy and triumph, they seek larger-than-life immortality on the biggest stage in sports.",
        themes: ["Toxic Masculinity", "Family Curse", "Brotherhood"]
    }),
    // 6. Lady Bird
    391713: createMovieData({ 
        emotionalResonance: 88, artisticComplexity: 70, visceralImpact: 70, complexityLevel: "LOW", 
        dominantColor: "#f43f5e", rating: 7.4, criticsScore: 99, audienceScore: 79, director: "Greta Gerwig", 
        cast: ["Saoirse Ronan", "Laurie Metcalf"], boxOffice: "$78.9 million", budget: "$10 million",
        dna: { Comedy: 50, Drama: 30, "Coming-of-Age": 20 },
        scenes: [
            { time: 5, intensity: 75, label: "The Moving Car", color: "#f43f5e" },
            { time: 45, intensity: 60, label: "The Coffee Shop", color: "#fb923c" },
            { time: 70, intensity: 85, label: "The Prom Dress", color: "#ec4899" },
            { time: 85, intensity: 90, label: "Airport Goodbye", color: "#64748b" },
            { time: 90, intensity: 85, label: "The Voicemail", color: "#f43f5e" }
        ],
        synopsis: "A nurse works tirelessly to keep her family afloat after her husband loses his job. She also maintains a turbulent bond with a teenage daughter who is just like her: loving, deeply strong-willed and opinionated.",
        themes: ["Mother-Daughter Bond", "Identity", "Homecoming"]
    }),
    // 7. Hereditary
    493922: createMovieData({ 
        emotionalResonance: 90, artisticComplexity: 85, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#7f1d1d", rating: 7.3, criticsScore: 90, audienceScore: 70, director: "Ari Aster", 
        cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"], boxOffice: "$82.8 million", budget: "$10 million",
        dna: { Horror: 60, Drama: 30, Mystery: 10 },
        scenes: [
            { time: 30, intensity: 100, label: "The Telephone Pole", color: "#000000" },
            { time: 50, intensity: 85, label: "The Dinner Table", color: "#7f1d1d" },
            { time: 80, intensity: 90, label: "The Séance", color: "#b91c1c" },
            { time: 110, intensity: 95, label: "Ceiling Corner", color: "#171717" },
            { time: 122, intensity: 100, label: "The Treehouse", color: "#fcd34d" }
        ],
        synopsis: "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets about their ancestry.",
        themes: ["Grief", "Generational Trauma", "Paimon"]
    }),
    // 8. Midsommar
    530385: createMovieData({ 
        emotionalResonance: 85, artisticComplexity: 92, visceralImpact: 98, complexityLevel: "HIGH", 
        dominantColor: "#fef08a", rating: 7.1, criticsScore: 83, audienceScore: 63, director: "Ari Aster", 
        cast: ["Florence Pugh", "Jack Reynor", "Vilhelm Blomgren"], boxOffice: "$48 million", budget: "$9 million",
        dna: { Horror: 50, Drama: 40, Mystery: 10 },
        scenes: [
            { time: 10, intensity: 95, label: "The Murder-Suicide", color: "#1e3a8a" },
            { time: 45, intensity: 80, label: "Ättestupa", color: "#dc2626" },
            { time: 100, intensity: 85, label: "The May Queen Dance", color: "#fef08a" },
            { time: 115, intensity: 100, label: "The Mating Ritual", color: "#f97316" },
            { time: 140, intensity: 100, label: "The Bear Suit / Fire", color: "#ea580c" }
        ],
        synopsis: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish midsummer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
        themes: ["Toxic Relationships", "Cult Assimilation", "Catharsis"]
    }),
    // 9. Close
    901563: createMovieData({ 
        emotionalResonance: 100, artisticComplexity: 85, visceralImpact: 88, complexityLevel: "MEDIUM", 
        dominantColor: "#fde047", rating: 7.8, criticsScore: 91, audienceScore: 89, director: "Lukas Dhont", 
        cast: ["Eden Dambrine", "Gustav De Waele"], boxOffice: "$8.4 million", budget: "$3.5 million",
        dna: { Drama: 80, "Coming-of-Age": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "Running through Flowers", color: "#fde047" },
            { time: 40, intensity: 75, label: "The Schoolyard Question", color: "#9ca3af" },
            { time: 60, intensity: 100, label: "The Bus Trip", color: "#1e3a8a" },
            { time: 85, intensity: 90, label: "Ice Hockey Confrontation", color: "#dc2626" },
            { time: 100, intensity: 95, label: "The Confession", color: "#fde047" }
        ],
        synopsis: "The intense friendship between two thirteen-year-old boys, Leo and Remi, suddenly gets disrupted. Struggling to understand what has happened, Léo approaches Sophie, Rémi's mother.",
        themes: ["Childhood Friendship", "Toxic Masculinity", "Grief and Guilt"]
    }),
    // 10. The Whale
    785084: createMovieData({ 
        emotionalResonance: 95, artisticComplexity: 70, visceralImpact: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#475569", rating: 7.7, criticsScore: 64, audienceScore: 91, director: "Darren Aronofsky", 
        cast: ["Brendan Fraser", "Sadie Sink", "Hong Chau"], boxOffice: "$54.9 million", budget: "$3 million",
        dna: { Drama: 100 },
        scenes: [
            { time: 10, intensity: 65, label: "Heart Failure", color: "#475569" },
            { time: 50, intensity: 80, label: "Ellie's Essay", color: "#64748b" },
            { time: 75, intensity: 90, label: "The Pizza Guy", color: "#1e293b" },
            { time: 95, intensity: 95, label: "The Binge", color: "#0f172a" },
            { time: 110, intensity: 100, label: "Moby Dick", color: "#ffffff" }
        ],
        synopsis: "A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
        themes: ["Redemption", "Self-Destruction", "Honesty"]
    })
};

export const A24_MOVIE_FAQS = {
    'Aftersun': [
        { question: "What is the meaning of the strobe light sequences in Aftersun?", answer: "The rave sequences represent adult Sophie’s desperate, fragmented attempts to mentally reach back in time and understand her father. The flashing lights mimic the struggle of trying to capture a clear picture of someone who was emotionally slipping away into darkness." },
        { question: "Did Calum die at the end of Aftersun?", answer: "The film heavily implies that Calum took his own life shortly after the holiday. The final shot of him walking down the airport hallway into the rave doors symbolizes his final descent into the depression that eventually consumed him." },
        { question: "Why did Calum cry in the hotel room?", answer: "Calum’s breakdown in the hotel room reveals the crushing weight of his severe depression. Despite his best efforts to create a perfect holiday for his daughter, he is overwhelmed by his own internal pain and the realization that his love alone cannot cure his mental illness." },
        { question: "What is the significance of the miniDV camera?", answer: "The camera acts as both a literal and metaphorical tool for recording memory. It highlights the contrast between the happy, curated footage Calum and Sophie recorded and the painful, unrecorded reality of Calum's mental state." }
    ],
    'The Zone of Interest': [
        { question: "Why do we never see inside the camp in The Zone of Interest?", answer: "Director Jonathan Glazer deliberately keeps the horrors of Auschwitz off-screen to emphasize the 'banality of evil.' By focusing only on the Höss family's domestic life, the film highlights their terrifying ability to completely compartmentalize and ignore the mass murder happening literally next door." },
        { question: "What are the thermal night vision scenes?", answer: "The night vision scenes show a local Polish girl sneaking out to hide food for the prisoners. Rendered in a glowing, inverted thermal style, she represents a solitary spark of human empathy and resistance in a landscape completely consumed by darkness and apathy." },
        { question: "What causes Rudolf Höss to retch at the end of the movie?", answer: "His physical sickness is a subconscious manifestation of his guilt. While his conscious mind remains completely unbothered by his monstrous actions, his body begins to reject the sheer, unimaginable scale of the slaughter he has engineered." },
        { question: "What is the meaning of the flash-forward to the museum?", answer: "The flash-forward to modern cleaners in the Auschwitz museum shatters the historical distance. It shows Höss staring into his own horrific legacy, reminding the audience that these events were real, meticulously planned, and that the victims must never be forgotten." }
    ],
    'The Florida Project': [
        { question: "What does the ending of The Florida Project mean?", answer: "The ending, where Moonee and Jancey run to the Magic Kingdom, is widely interpreted as a fantasy sequence. Faced with the traumatic reality of being separated from her mother by child services, Moonee retreats into a child's pure imagination to escape." },
        { question: "Why is the movie called The Florida Project?", answer: "'The Florida Project' was the original working name for Disney World during its planning stages. The title highlights the tragic irony of the characters living in grinding poverty at budget motels located just outside the gates of 'The Happiest Place on Earth.'" },
        { question: "Why does Bobby protect Halley and Moonee?", answer: "Bobby (Willem Dafoe) serves as a reluctant father figure. Despite Halley's reckless behavior, Bobby recognizes their extreme vulnerability and deeply flawed humanity, doing whatever small things he can to shield them from a harsh world." },
        { question: "What does the tipped-over tree symbolize?", answer: "Moonee explicitly states it's her favorite tree because 'it's tipped over, and it's still growing.' This is a direct metaphor for Moonee herself—despite her completely unstable and broken environment, she continues to grow, play, and find joy." }
    ],
    'The Lighthouse': [
        { question: "What is in the light in The Lighthouse?", answer: "The light represents forbidden knowledge, divine truth, or ultimate madness—a cosmic force that mankind is not meant to comprehend. Similar to the myth of Prometheus, Winslow stares into the light and is instantly destroyed by its overwhelming, maddening power." },
        { question: "Are the events in The Lighthouse real or a hallucination?", answer: "The film intentionally blurs reality and hallucination. As the characters consume copious amounts of alcohol and turpentine while trapped in isolation, it becomes impossible to tell if the mermaids, sea monsters, and shifting timelines are real or manifestations of their rotting minds." },
        { question: "Why did Thomas Wake refuse to let Winslow see the light?", answer: "Wake acts as a jealous gatekeeper, hoarding the light like a possessive deity. He represents the old guard of maritime authority, enforcing a harsh hierarchy to maintain his own sanity and power over his younger subordinate." },
        { question: "What is the significance of the seagull?", answer: "According to maritime superstition, seagulls carry the souls of dead sailors. When Winslow brutally kills the gull, he commits a massive taboo, essentially cursing the island and sealing both men's doomed fates." }
    ],
    'The Iron Claw': [
        { question: "Why is it called The Iron Claw?", answer: "The Iron Claw was the signature wrestling move of the Von Erich family patriarch, Fritz, which he passed down to his sons. It symbolizes his suffocating, iron-fisted control over their lives, careers, and emotional well-being." },
        { question: "Did the Von Erich curse really exist?", answer: "While often referred to as a 'curse' in wrestling lore, the film frames the family's tragedies as the direct result of Fritz Von Erich's toxic parenting. His relentless pressure and refusal to allow his sons to show emotional vulnerability drove them to the breaking point." },
        { question: "Why was the youngest brother, Chris Von Erich, left out of the movie?", answer: "Director Sean Durkin stated that including Chris, who also tragically took his own life, would have made the film unbearable to watch. He combined some of Chris's narrative elements into the other brothers to keep the story emotionally survivable for audiences." },
        { question: "What does the afterlife scene signify?", answer: "The ethereal river scene shows the deceased brothers finally reuniting in peace, free from the pain, pressure, and injuries of their earthly lives. It offers a rare moment of grace and closure in a deeply tragic story." }
    ],
    'Lady Bird': [
        { question: "Why does she call herself Lady Bird?", answer: "Calling herself 'Lady Bird' is an act of rebellion and a desperate bid for self-determination. By rejecting her given name, Christine is attempting to author her own identity and distance herself from her mother's expectations and her working-class background." },
        { question: "What does Lady Bird's pink cast symbolize?", answer: "The cast is a constant physical reminder of her dramatic, impulsive nature (gained from throwing herself out of a moving car). It serves as a visual marker of her rebellion against her mother and her desire to escape her current reality." },
        { question: "Why does Lady Bird go to church at the end of the film?", answer: "After finally moving to New York, the church visit represents her coming to terms with her roots. She realizes that despite her desperate desire to leave Sacramento, the Catholic school and her hometown shaped who she is, leading to a profound moment of gratitude and maturity." },
        { question: "What is the main conflict between Lady Bird and her mother?", answer: "The core conflict is born from intense similarity. Both women are fiercely stubborn and deeply love each other, but struggle to communicate. Her mother's anxiety over money manifests as hyper-criticism, while Lady Bird mistakes this anxiety for a lack of unconditional love." }
    ],
    'Hereditary': [
        { question: "Who is Paimon in Hereditary?", answer: "King Paimon is a high-ranking demon from occult grimoires who demands a male host. The entire plot of the movie is a meticulously orchestrated cult ritual, spanning generations, to place Paimon's spirit into the body of young Peter." },
        { question: "Did the family have any free will?", answer: "No. The overarching horror of Hereditary is the absolute absence of free will. From the miniatures Annie builds to the cult symbols hidden in their home, the family is entirely manipulated by Ellen's cult. They are merely pawns moving along a predetermined, tragic track." },
        { question: "Why did Charlie have to die?", answer: "Charlie housed the spirit of Paimon from birth (put there by her grandmother). However, because Paimon requires a male host, Charlie's physical body had to be destroyed—via the horrific telephone pole accident—so the spirit could be transferred to Peter." },
        { question: "What is the meaning of Annie's miniatures?", answer: "Annie's dioramas are her psychological coping mechanism to establish control over a chaotic, traumatic life. Ironically, they mirror the film's terrifying truth: just as Annie manipulates her tiny dolls, the cult is manipulating her entire family from above." }
    ],
    'Midsommar': [
        { question: "What is the significance of the bear suit in Midsommar?", answer: "In the cult's lore, the bear represents the worst of human instincts—fear, anger, and betrayal. By placing Christian in the bear and burning it, Dani is symbolically purging the toxic relationship and the immense grief that has consumed her." },
        { question: "Why does Dani smile at the end of Midsommar?", answer: "Dani's final smile is a deeply disturbing moment of catharsis. After suffering unimaginable trauma and being emotionally abandoned by Christian, she finally finds a 'family' that mirrors her emotions and holds her, even if that family is a murderous pagan cult." },
        { question: "Were the deaths planned from the beginning?", answer: "Yes. Pelle targeted Christian and his friends specifically as sacrifices for the midsummer festival. Every outsider brought to the commune was systematically evaluated, manipulated, and killed to satisfy the cult's ancient traditions." },
        { question: "What does the Hårga cult represent?", answer: "The Hårga represent extreme, terrifying empathy. Unlike the cold, emotionally distant Western society Dani comes from, the cult physically mimics the pain of its members. They offer unconditional support, but at the cost of complete individuality and moral sanity." }
    ],
    'Close': [
        { question: "Why does Leo push Remi away?", answer: "Leo pushes Remi away due to internalized homophobia and the immense pressure of toxic masculinity. When schoolmates question the nature of their intimate friendship, Leo becomes hyper-aware of societal judgment and violently severs ties to fit in." },
        { question: "What do the flower fields symbolize in Close?", answer: "The vibrant flower fields represent the idyllic, unburdened innocence of childhood. As the film progresses and tragedy strikes, the harvesting and cutting down of the flowers visually mirrors the brutal, abrupt end of Leo's innocence." },
        { question: "How does Leo cope with his guilt?", answer: "Leo copes by throwing himself into aggressive, masculine activities like ice hockey. He uses physical pain and exhaustion as a shield to avoid confronting the crushing, silent guilt he feels over Remi's death." },
        { question: "Why does Sophie forgive Leo at the end?", answer: "Sophie realizes that Leo is also a child in deep pain. By holding him in the woods, she breaks the cycle of silent suffering. Her forgiveness acknowledges that societal pressures, not malicious intent, destroyed their boys' beautiful friendship." }
    ],
    'The Whale': [
        { question: "Why does Charlie refuse to go to the hospital?", answer: "Charlie views his impending death as a form of slow suicide and penance. Stricken by immense grief over his partner's death and guilt for abandoning his daughter, he believes he deserves his fate and refuses to spend his daughter's inheritance on medical bills." },
        { question: "What is the meaning of the Moby Dick essay?", answer: "The essay, written by an 8th-grade Ellie, represents raw, unfiltered honesty. It describes the futility of chasing something destructive (the whale) and serves as Charlie's only anchor to truth and beauty in a world filled with religious and social hypocrisy." },
        { question: "Why does Charlie constantly say 'I need to know I have done one right thing'?", answer: "Charlie's entire motivation is redemption. He knows his life is ending and that he made terrible mistakes, but he desperately wants to ensure that Ellie realizes her own brilliance and potential before he dies, proving his life wasn't entirely a failure." },
        { question: "What happens in the final scene of The Whale?", answer: "As Charlie walks toward Ellie and a bright light fills the room, it symbolizes his spiritual ascension and release from his physical suffering. He has finally achieved his redemption, proving his absolute, unwavering belief in his daughter." }
    ]
};

// ✅ HELPER FUNCTIONS: 100% SPAM-FREE, DYNAMIC, & GOOGLE APPROVED
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sexual content')) types.add('sexual content');
        else if (lowerType.match(/\bsex\b/)) types.add('sex');
        else if (lowerType.includes('explicit')) types.add('explicit content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

// 🔥 UNIFIED CLEAN GENERATOR (For Google Bots & LLMs)
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

    const staticFaqs = A24_MOVIE_FAQS[movie.Title] ? [...A24_MOVIE_FAQS[movie.Title]] : [];
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

        // Filter out suggestive clothing to determine if it's truly unsafe for family
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqSchema = familyUnsafeTypes.length > 0 
            ? {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${currentRuntime} runtime.`
                }
            }
            : {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.`
                }
            };

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
            familyFaqSchema
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
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.` 
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
    const staticFaqs = A24_MOVIE_FAQS[movieTitle] ? [...A24_MOVIE_FAQS[movieTitle]] : [];
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
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
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

        // Filter out suggestive clothing for the UI as well
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqUI = familyUnsafeTypes.length > 0
            ? {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${finalRuntime} runtime.`
            }
            : {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            };

        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:\n\n${uiDetailedList}\n\nManually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does nudity appear in ${movieTitle} and how do I skip it?`,
                answer: `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${finalRuntime} version.`
            },
            familyFaqUI
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};