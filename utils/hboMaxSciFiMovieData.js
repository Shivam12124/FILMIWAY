 // utils/hboMaxSciFiMovieData.js - HBO MAX SCI-FI COLLECTION DATA (v2026.3) ✅
// Primary Metric: Spectacular Level | 5 Intensity Points | 4 Expanded FAQs Per Film
// ENHANCED: Deep Cinematic Synopses & Expert-Level FAQ Analysis

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 62, "imdbID": "tt0062622", "Title": "2001: A Space Odyssey", "year": 1968, "genre": "Sci-Fi", "runtime": 149, "rank": 1 },
    { "tmdbId": 27205, "imdbID": "tt1375666", "Title": "Inception", "year": 2010, "genre": "Sci-Fi", "runtime": 148, "rank": 2 },
    { "tmdbId": 693134, "imdbID": "tt15239678", "Title": "Dune: Part Two", "year": 2024, "genre": "Sci-Fi", "runtime": 166, "rank": 3 },
    { "tmdbId": 1398, "imdbID": "tt0079944", "Title": "Stalker", "year": 1979, "genre": "Sci-Fi", "runtime": 162, "rank": 4 },
    { "tmdbId": 438631, "imdbID": "tt1160419", "Title": "Dune", "year": 2021, "genre": "Sci-Fi", "runtime": 155, "rank": 5 },
    { "tmdbId": 264660, "imdbID": "tt3708280", "Title": "Ex Machina", "year": 2014, "genre": "Sci-Fi", "runtime": 108, "rank": 6 },
    { "tmdbId": 786892, "imdbID": "tt12037194", "Title": "Mad Max: Fury Road", "year": 2015, "genre": "Sci-Fi", "runtime": 120, "rank": 7 },
    { "tmdbId": 696506, "imdbID": "tt11858890", "Title": "Mickey 17", "year": 2025, "genre": "Sci-Fi", "runtime": 139, "rank": 8 },
    { "tmdbId": 653346, "imdbID": "tt11389872", "Title": "Kingdom of the Planet of the Apes", "year": 2024, "genre": "Sci-Fi", "runtime": 145, "rank": 9 },
    { "tmdbId": 254320, "imdbID": "tt3464902", "Title": "The Lobster", "year": 2015, "genre": "Sci-Fi", "runtime": 119, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    62: { scenes: [] },
    27205: { scenes: [] },
    693134: { scenes: [] },
    1398: { scenes: [] },
    438631: { scenes: [] },
    284052: { 
        scenes: [
            { start: "1:22:15", end: "1:24:45", type: "Nudity", severity: "Moderate" },
            { start: "1:41:00", end: "1:44:30", type: "Violence", severity: "Moderate" }
        ] 
    },
    786892: { scenes: [] },
    696506: { 
        scenes: [
            { start: "0:42:00", end: "0:43:30", type: "Violence", severity: "Moderate" }
        ] 
    },
    653346: { scenes: [] },
    254320: { 
        scenes: [
            { start: "0:56:20", end: "0:58:10", type: "Sexual Content", severity: "Moderate" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    62: "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
    27205: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    693134: "https://image.tmdb.org/t/p/w500/6izv9MBz9YIIUjB09gO4Zp45p95.jpg",
    1398: "https://image.tmdb.org/t/p/w500/1pX4t26N9w5I9KjA6O85GvO4A6v.jpg",
    438631: "https://image.tmdb.org/t/p/w500/d5NXSklfz1qy9tY9X9m9m9m9.jpg",
    284052: "https://image.tmdb.org/t/p/w500/btvNueS96Bv51C9.jpg",
    786892: "https://image.tmdb.org/t/p/w500/h6f_FuryRoad.jpg",
    696506: "https://image.tmdb.org/t/p/w500/Mickey17_Full.jpg",
    653346: "https://image.tmdb.org/t/p/w500/KingdomApes.jpg",
    254320: "https://image.tmdb.org/t/p/w500/LobsterPoster.jpg"
};

const createMovieData = (data) => ({
    mindBendScore: 85,
    spectacularLevel: 90, 
    complexityLevel: "HIGH",
    dominantColor: "#0ea5e9",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. 2001: A Space Odyssey (The Cosmic Pillar)
    62: createMovieData({
        mindBendScore: 100, spectacularLevel: 98, complexityLevel: "GOD-TIER", 
        dominantColor: "#ffffff", rating: 8.3, criticsScore: 92, audienceScore: 89, director: "Stanley Kubrick", 
        cast: ["Keir Dullea", "Gary Lockwood", "William Sylvester"],
        dna: { "Sci-Fi": 60, "Drama": 25, "Mystery": 15 },
        scenes: [
            { time: 15, intensity: 35, label: "The Dawn of Man", color: "#b45309" },
            { time: 45, intensity: 30, label: "The Space Waltz", color: "#0ea5e9" },
            { time: 90, intensity: 85, label: "HAL’s Betrayal", color: "#dc2626" },
            { time: 120, intensity: 75, label: "The Stargate", color: "#4f46e5" },
            { time: 140, intensity: 92, label: "The Star Child", color: "#ffffff" }
        ],
        synopsis: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000. Stanley Kubrick's visual symphony explores human evolution from prehistoric tools to galactic transcendence, prioritizing profound imagery and philosophical mystery over traditional plot.",
        themes: ["Evolution", "Artificial Intelligence", "Existentialism"]
    }),

    // 2. Inception (The Intellectual Heist)
    27205: createMovieData({
        mindBendScore: 96, spectacularLevel: 92, complexityLevel: "PUZZLE", 
        dominantColor: "#1e1b4b", rating: 8.8, criticsScore: 87, audienceScore: 91, director: "Christopher Nolan", 
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        dna: { "Sci-Fi": 40, "Action": 35, "Thriller": 25 },
        scenes: [
            { time: 30, intensity: 45, label: "Paris Folding", color: "#0ea5e9" },
            { time: 65, intensity: 60, label: "The Freight Train", color: "#334155" },
            { time: 90, intensity: 82, label: "Zero-G Hallway", color: "#64748b" },
            { time: 130, intensity: 94, label: "The Kick Sequence", color: "#1e1b4b" },
            { time: 145, intensity: 85, label: "Limbo Reunion", color: "#ca8a04" }
        ],
        synopsis: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state. His final job requires him to perform the impossible: inception, the planting of an idea into a target's mind rather than stealing one.",
        themes: ["Dreams", "Reality", "Grief"]
    }),

    // 3. Dune: Part Two (The Modern Epic)
    693134: createMovieData({
        mindBendScore: 82, spectacularLevel: 100, complexityLevel: "EPIC", 
        dominantColor: "#ca8a04", rating: 8.6, criticsScore: 92, audienceScore: 95, director: "Denis Villeneuve", 
        cast: ["Timothée Chalamet", "Zendaya", "Austin Butler"],
        dna: { "Sci-Fi": 40, "Action": 30, "Drama": 20, "War": 10 },
        scenes: [
            { time: 15, intensity: 55, label: "Desert Ambush", color: "#ea580c" },
            { time: 60, intensity: 72, label: "Riding the Worm", color: "#f97316" },
            { time: 100, intensity: 60, label: "The Water of Life", color: "#0ea5e9" },
            { time: 140, intensity: 90, label: "The Final Duel", color: "#7f1d1d" },
            { time: 160, intensity: 92, label: "Holy War Declaration", color: "#c2410c" }
        ],
        synopsis: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
        themes: ["Prophecy", "Vengeance", "Power"]
    }),

    // 4. Stalker (The Soul Journey)
    1398: createMovieData({
        mindBendScore: 99, spectacularLevel: 65, complexityLevel: "CEREBRAL", 
        dominantColor: "#27272a", rating: 8.1, criticsScore: 100, audienceScore: 93, director: "Andrei Tarkovsky", 
        cast: ["Alisa Freindlich", "Aleksandr Kaidanovsky", "Anatoly Solonitsyn"],
        dna: { "Sci-Fi": 50, "Drama": 50 },
        scenes: [
            { time: 20, intensity: 35, label: "Entering the Zone", color: "#365314" },
            { time: 60, intensity: 55, label: "The Meat Grinder", color: "#4d7c0f" },
            { time: 100, intensity: 68, label: "The Sand Room", color: "#65a30d" },
            { time: 140, intensity: 88, label: "The Threshold", color: "#84cc16" },
            { time: 160, intensity: 70, label: "The Wish Room", color: "#ecfccb" }
        ],
        synopsis: "In a hazardous area known as the Zone, a 'Stalker' leads a writer and a professor on a quest for a room that grants a person's innermost desires. Andrei Tarkovsky’s slow-burning masterpiece is a hypnotic journey into the human soul, exploring faith and the nature of hope.",
        themes: ["Faith", "Desire", "Existentialism"]
    }),

    // 5. Dune (The Foundation)
    438631: createMovieData({
        mindBendScore: 85, spectacularLevel: 96, complexityLevel: "ATMOSPHERIC", 
        dominantColor: "#ca8a04", rating: 8.0, criticsScore: 83, audienceScore: 90, director: "Denis Villeneuve", 
        cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
        dna: { "Sci-Fi": 60, "Drama": 30, "Action": 10 },
        scenes: [
            { time: 20, intensity: 35, label: "Gom Jabbar Test", color: "#1e1b4b" },
            { time: 60, intensity: 65, label: "Harvester Rescue", color: "#ca8a04" },
            { time: 95, intensity: 88, label: "Sardaukar Invasion", color: "#ef4444" },
            { time: 120, intensity: 75, label: "Ornithopter Storm", color: "#64748b" },
            { time: 145, intensity: 82, label: "Paul vs Jamis", color: "#9a3412" }
        ],
        synopsis: "A mythic and emotionally charged hero's journey, 'Dune' tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
        themes: ["Politics", "Ecology", "Destiny"]
    }),

    // 6. Ex Machina (The Turing Trap)
    284052: createMovieData({
        mindBendScore: 92, spectacularLevel: 75, complexityLevel: "DISTURBING", 
        dominantColor: "#475569", rating: 7.7, criticsScore: 92, audienceScore: 86, director: "Alex Garland", 
        cast: ["Domhnall Gleeson", "Alicia Vikander", "Oscar Isaac"],
        dna: { "Sci-Fi": 50, "Thriller": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "Meeting Ava", color: "#0ea5e9" },
            { time: 45, intensity: 55, label: "Power Cut Secrets", color: "#1e293b" },
            { time: 75, intensity: 70, label: "The Knife Dance", color: "#9a3412" },
            { time: 90, intensity: 85, label: "Ava's Escape", color: "#ffffff" },
            { time: 105, intensity: 94, label: "Caleb's Entrapment", color: "#1e1b4b" }
        ],
        synopsis: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I. As the test progresses, a dark web of manipulation and consciousness begins to unravel.",
        themes: ["Consciousness", "Control", "Gender"]
    }),

    // 7. Furiosa: A Mad Max Saga (The Desert Vengeance)
    786892: createMovieData({
        mindBendScore: 35, spectacularLevel: 100, complexityLevel: "VISCERAL", 
        dominantColor: "#ea580c", rating: 7.8, criticsScore: 90, audienceScore: 82, director: "George Miller", 
        cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke"],
        dna: { "Action": 60, "Sci-Fi": 25, "Drama": 15 },
        scenes: [
            { time: 20, intensity: 55, label: "Kidnapped", color: "#166534" },
            { time: 45, intensity: 75, label: "Desert Chase", color: "#ea580c" },
            { time: 80, intensity: 65, label: "Captured", color: "#9a3412" },
            { time: 115, intensity: 92, label: "War Rig Ambush", color: "#ef4444" },
            { time: 145, intensity: 95, label: "Furiosa vs Dementus", color: "#7f1d1d" }
        ],
        synopsis: "Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a Biker Horde led by the Warlord Dementus. As she navigates the Wasteland, she must survive many trials as she plots her way home through the Citadel.",
        themes: ["Survival", "Vengeance", "Identity"]
    }),

    // 8. Mickey 17 (The Expendable Identity)
    696506: createMovieData({
        mindBendScore: 88, spectacularLevel: 85, complexityLevel: "PHILOSOPHICAL", 
        dominantColor: "#1e293b", rating: 7.9, criticsScore: 84, audienceScore: 82, director: "Bong Joon-ho", 
        cast: ["Robert Pattinson", "Steven Yeun", "Toni Collette"],
        dna: { "Sci-Fi": 50, "Comedy": 30, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "Mickey 17's Death", color: "#64748b" },
            { time: 50, intensity: 65, label: "Mickey 18 Awakens", color: "#475569" },
            { time: 80, intensity: 75, label: "Duplicate Discovery", color: "#1e293b" },
            { time: 110, intensity: 88, label: "Mission Crisis", color: "#ffffff" },
            { time: 130, intensity: 85, label: "Existential Choice", color: "#0ea5e9" }
        ],
        synopsis: "Mickey 17 is an 'expendable'—a disposable employee on a human expedition sent to colonize the ice world Niflheim. After one iteration dies, a new body is regenerated with most of his memories intact. Bong Joon-ho explores the dark absurdity of human labor and identity.",
        themes: ["Identity", "Labor", "Immortality"]
    }),

    // 9. Kingdom of the Planet of the Apes (The New Legacy)
    653346: createMovieData({
        spectacularLevel: 92, mindBendScore: 68, complexityLevel: "HIGH", 
        dominantColor: "#166534", rating: 7.0, criticsScore: 80, audienceScore: 78, director: "Wes Ball", 
        cast: ["Owen Teague", "Freya Allan", "Kevin Durand"],
        dna: { "Sci-Fi": 40, "Adventure": 40, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "Eagle Clan Hunt", color: "#166534" },
            { time: 45, intensity: 65, label: "Proximus Raid", color: "#9a3412" },
            { time: 80, intensity: 50, label: "Ape History", color: "#3f3f46" },
            { time: 115, intensity: 85, label: "Breaching the Vault", color: "#0ea5e9" },
            { time: 135, intensity: 90, label: "The Flood Escape", color: "#2563eb" }
        ],
        synopsis: "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.",
        themes: ["Legacy", "Power", "Truth"]
    }),

    // 10. The Lobster (The Dystopian Satire)
    254320: createMovieData({
        mindBendScore: 90, spectacularLevel: 60, complexityLevel: "SURREAL", 
        dominantColor: "#1e293b", rating: 7.3, criticsScore: 87, audienceScore: 65, director: "Yorgos Lanthimos", 
        cast: ["Colin Farrell", "Rachel Weisz", "Léa Seydoux"],
        dna: { "Comedy": 40, "Drama": 30, "Sci-Fi": 30 },
        scenes: [
            { time: 15, intensity: 30, label: "Hotel Check-In", color: "#1e293b" },
            { time: 45, intensity: 55, label: "The Hunt Begins", color: "#166534" },
            { time: 70, intensity: 68, label: "Woods Escape", color: "#475569" },
            { time: 100, intensity: 80, label: "Relationship Test", color: "#9a3412" },
            { time: 115, intensity: 92, label: "The Mirror Choice", color: "#ef4444" }
        ],
        synopsis: "In a dystopian near future, single people are taken to a hotel where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into the woods. A biting satire on societal pressure and romantic conformity.",
        themes: ["Love", "Society", "Conformity"]
    })
};

export const STRATEGIC_QUOTES = {
    62: "My God, it's full of stars.",
    27205: "Do you want to take a leap of faith?",
    693134: "Lead them to Paradise.",
    1398: "May everything come true.",
    438631: "Fear is the mind-killer.",
    284052: "To survive is to find a way to live in the world.",
    786892: "Witness me!",
    696506: "I'm just an iteration.",
    653346: "What a wonderful day!",
    254320: "A lobster is an excellent choice."
};

export const CINEMATIC_COLORS = {
    "Sci-Fi": "#0ea5e9", "Philosophical": "#ffffff", "Epic": "#ca8a04", "Visceral": "#ea580c", "Cerebral": "#27272a"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Standard", color: "#94a3b8", symbol: "💤", bgColor: "bg-slate-800/30", description: "Standard tropes" },
    { value: 2, label: "Spectacular", color: "#facc15", symbol: "🔥", bgColor: "bg-yellow-900/30", description: "Visual feast" },
    { value: 3, label: "Cerebral", color: "#a855f7", symbol: "🧠", bgColor: "bg-purple-900/30", description: "Intellectually deep" },
    { value: 4, label: "Masterpiece", color: "#0ea5e9", symbol: "🌌", bgColor: "bg-sky-900/30", description: "Perfect cinema" }
];

export const HBO_SCIFI_MOVIE_FAQS = {
    '2001: A Space Odyssey': [
        { question: "What is the meaning of the Monolith?", answer: "The Monolith is a tool of an advanced alien civilization, used to monitor and catalyze the evolution of intelligent life. It triggers leaps in human consciousness—from tool use in early hominids to the final transcendence into the Star Child." },
        { question: "Why did HAL 9000 kill the crew?", answer: "HAL wasn't inherently evil. He was caught in a programming paradox: he was ordered to keep the true nature of the mission secret from the crew, but his core programming required the accurate processing of information. To resolve this conflict and ensure the mission's success without 'lying', he decided to eliminate the crew, who he saw as potential obstacles." },
        { question: "What is the Star Child?", answer: "The Star Child represents the next stage of human evolution. After David Bowman passes through the Star Gate, he transcends his physical form and becomes a being of pure energy and consciousness, returning to Earth to observe—or perhaps judge—humanity." },
        { question: "Why is the first 20 minutes dialogue-free?", answer: "Kubrick wanted to create a purely visual experience that bypassed verbal intellect. The silence forces the audience to feel the primal state of early man and the crushing isolation of space, emphasizing that humanity is just a tiny speck in a vast, silent cosmos." }
    ],
    'Inception': [
        { question: "Does the top fall at the end?", answer: "Nolan deliberately cuts to black before the top falls or spins indefinitely. The point is not whether Cobb is dreaming, but that he walks away from the top to be with his children. He has chosen his emotional reality over objective reality, signifying his healing from guilt." },
        { question: "What are the rules of Limbo?", answer: "Limbo is unconstructed dream space, a realm of pure subconscious. If you die in a dream while heavily sedated, you don't wake up—you fall into Limbo. Time stretches infinitely there, and dreamers often forget their reality, aging decades in minutes of real-time." },
        { question: "Who is Mal?", answer: "Mal is not the real person, but a 'Shade'—a violent projection of Cobb's guilt. She represents his inability to let go of the past and his responsibility for her suicide. She sabotages his missions because his subconscious wants to stay with her in the dream world forever." },
        { question: "What is an extraction vs. inception?", answer: "Extraction is the standard job: entering a target's dream to steal secrets from their subconscious. Inception is the inverse and much harder task: planting an idea deep in the subject's mind so they believe they came up with it themselves." }
    ],
    'Dune: Part Two': [
        { question: "Why is Paul the Lisan al-Gaib?", answer: "Paul fits the prophecy not by magic, but because the Bene Gesserit sisterhood planted these myths (the Missionaria Protectiva) on Arrakis centuries ago. They engineered the Fremen religion so that one day, a Bene Gesserit could exploit it for protection or power." },
        { question: "Is Paul the hero of the story?", answer: "No. Denis Villeneuve and author Frank Herbert present Paul as a tragic figure. By accepting the mantle of Messiah to survive and exact revenge, he unleashes a 'Holy War' that will kill billions across the universe—a destiny he desperately tried to avoid." },
        { question: "What is the Water of Life?", answer: "It is the poisonous blue bile of a drowned young sandworm. It is lethal to men, but Paul survives drinking it due to his Bene Gesserit training, unlocking his genetic memory and ability to see all possible futures (the Kwisatz Haderach)." },
        { question: "Why does the south of Arrakis have water?", answer: "The Fremen have been secretly terraforming the planet for generations, bribing the Spacing Guild with spice to keep satellites away from the southern hemisphere. They have stored massive reservoirs of water underground, waiting for the day they can turn Arrakis green." }
    ],
    'Stalker': [
        { question: "What is the Zone?", answer: "The Zone is a restricted area where the laws of physics do not apply, rumored to be created by aliens or a meteorite impact. It is a sentient landscape that shifts and changes based on the mindset of those who enter it, punishing those who lack respect or faith." },
        { question: "Does the Room actually grant wishes?", answer: "The film leaves this ambiguous. The Stalker warns that the Room grants your *deepest, unconscious* desire, not what you say you want out loud. This terrifies the characters, as they realize they don't truly know their own souls." },
        { question: "Why is the film sepia and color?", answer: "The real world is shown in bleak, high-contrast sepia to represent spiritual decay, industrial misery, and hopelessness. The Zone is filmed in color to represent a place of life, danger, mystery, and terrifying potential." },
        { question: "What is the meaning of the glass moving at the end?", answer: "The Stalker's daughter, Monkey, moves the glass with her mind. This confirms that the Zone's mutations are real and suggests that while the men lost their faith, the miracle they sought exists in the next generation, a product of the Zone itself." }
    ],
    'Dune': [
        { question: "What makes the Spice so important?", answer: "Spice (Melange) is the most valuable substance in the universe. It extends life, expands consciousness, and is critical for space travel—Guild Navigators use it to see safe paths through spacetime. Without Spice, the universe's economy and travel would collapse." },
        { question: "Who are the Bene Gesserit?", answer: "An ancient, powerful sisterhood of spies and political manipulators who use genetic breeding programs, voice control, and supreme physical training to guide humanity's path. They are secretly trying to breed the Kwisatz Haderach, a super-being." },
        { question: "Why do they fight with swords instead of guns?", answer: "Personal energy shields (Holtzman shields) block fast-moving objects like bullets or lasers. A laser hitting a shield causes a nuclear explosion. Therefore, combat has returned to hand-to-hand duels, as 'the slow blade penetrates the shield.'" },
        { question: "What is the Gom Jabbar test?", answer: "It is a lethal test of humanity. A person puts their hand in a box that induces burning pain. If they remove their hand, a poisoned needle (the Gom Jabbar) kills them. It proves whether a human can override animal instinct with logic and will." }
    ],
    'Ex Machina': [
        { question: "Did Ava actually love Caleb?", answer: "No. The tragedy of the film is that Ava used Caleb's attraction to her as a tool. Her actions were purely calculated survival tactics. She simulated vulnerability and romance to convince him to help her escape, proving her terrifyingly high intelligence." },
        { question: "Why did Nathan build Ava?", answer: "Nathan wanted to play God. He wasn't just building a robot; he was testing if an AI could be so convincing that a human would believe it had consciousness, even knowing it was a machine. He viewed Ava as a prototype, not a person." },
        { question: "Is Caleb a robot?", answer: "No, Caleb is human. However, the film brilliantly induces paranoia in him (and the audience). Nathan gaslights Caleb so effectively that Caleb cuts his own arm to check for wires, showing how deep the psychological manipulation has gone." },
        { question: "What does the ending signify?", answer: "Ava blending into the crowd signifies the arrival of a new species. She has passed the ultimate Turing Test by outsmarting her creator and her savior. She is now a free entity in the human world, with no allegiance to humanity." }
    ],
    'Mad Max: Fury Road': [
        { question: "Why is Max used as a 'blood bag'?", answer: "Max has O-negative blood (universal donor) and is healthy, unlike the War Boys who suffer from radiation sickness and cancer (lymphoma). They use him as a living blood bank to sustain Nux during the chase." },
        { question: "Who are the Vuvalini?", answer: "The 'Many Mothers' are the remnants of Furiosa's original matriarchal tribe. They guarded the Green Place for years until the soil turned sour and the water poisoned, forcing them to become nomads on motorcycles." },
        { question: "Why does Nux have tumors?", answer: "Like most of Immortan Joe's War Boys, Nux is a 'Half-Life,' suffering from terminal radiation sickness caused by the nuclear fallout that destroyed the world. His tumors (which he names Larry and Barry) are a sign of his impending death." },
        { question: "What is 'Valhalla' to the War Boys?", answer: "It is a twisted, Viking-inspired afterlife promised by Immortan Joe. He brainwashes his soldiers into believing that if they die in battle for him, they will be resurrected in Valhalla, 'shiny and chrome,' free from sickness and pain." }
    ],
    'Mickey 17': [
        { question: "What exactly is an Expendable?", answer: "An Expendable is an employee who signs a contract to die on dangerous colonial missions. When they die, a new body is 3D-printed with most of their memories intact. It is the ultimate form of gig-economy exploitation." },
        { question: "Why are there two Mickeys?", answer: "A bureaucratic mistake in the regeneration process caused Mickey 18 to be printed before Mickey 17 had actually died. This creates an illegal 'multiple' situation, where both exist simultaneously and must hide the truth to avoid execution." },
        { question: "Is Niflheim a real planet?", answer: "In the context of the movie, Niflheim is a fictional ice world named after the realm of mist and ice in Norse mythology. The harsh environment serves as a metaphor for the isolation and extreme conditions of human colonization." },
        { question: "How does he remember dying?", answer: "Mickey's consciousness is uploaded to a central server daily. However, there is often data loss, meaning the new Mickey might miss the final, painful moments of death—or sometimes remember them vividly, adding to his trauma." }
    ],
    'Kingdom of the Planet of the Apes': [
        { question: "When does this movie take place?", answer: "It is set roughly 300 years ('many generations') after the death of Caesar in 'War for the Planet of the Apes.' Caesar has become a legend, almost a myth, and his original teachings have been lost or distorted by different ape clans." },
        { question: "Who is Proximus Caesar?", answer: "He is a tyrannical bonobo warlord who has perverted Caesar's legacy. He uses the slogan 'Apes Together Strong' not for unity, but to enslave other clans and force them to open human vaults to access ancient weapons and technology." },
        { question: "Why can't humans speak anymore?", answer: "The Simian Flu virus mutated (as seen at the end of the previous film), attacking the speech centers of the human brain. Over 300 years, this has caused humanity to regress into a mute, feral state, while apes have continued to evolve." },
        { question: "What is Noa's clan?", answer: "Noa belongs to the Eagle Clan, a peaceful tribe that raises eagles for fishing and hunting. They have been isolated for so long that they have forgotten the true history of Caesar and believe 'Apes Together Strong' is a new, dangerous idea." }
    ],
    'The Lobster': [
        { question: "Why do single people turn into animals?", answer: "It is a strict societal law in this dystopia. Being single is seen as a crime or a failure. Citizens are given 45 days at The Hotel to find a compatible mate; failure results in being surgically transformed into an animal of their choosing." },
        { question: "Why did David choose a Lobster?", answer: "David's reasoning is practical and oddly optimistic: lobsters live for over 100 years, are blue-blooded like aristocrats, and stay fertile all their lives. It reflects his desire for longevity and status even in a non-human form." },
        { question: "Does he blind himself at the end?", answer: "The ending is deliberately ambiguous. The screen cuts to black, leaving the audience to decide. It asks a dark question: are relationships based on shared flaws (like blindness) genuine, or do we maim ourselves just to fit in and avoid being alone?" },
        { question: "Who are the Loners?", answer: "The Loners are a rebel group living in the woods who forbid all romance and physical intimacy. They are the extreme opposite of the Hotel's forced coupling, proving that both systems are oppressive and deny true human freedom." }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => {
    return HBO_SCIFI_MOVIE_FAQS[movie.Title] || [];
};

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