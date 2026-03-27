// utils/survivalMovieData.js - SURVIVAL COLLECTION DATA ✅
// Movies exploring human endurance, isolation, and the will to live.

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// ✅ HELPER: Streamlined "Survival" Metrics
const createMovieData = (data) => ({
  survivabilityIndex: 85,  // Overall Survival Skill / Chance
  physicalToll: 80,        // Pain / Starvation / Injury Impact
  dominantColor: "#000000",
  ...data,
});

// 1. MAIN MOVIE DATA (Graph Data + Analysis)
export const COMPLETE_MOVIE_DATA = {
    // 1. 127 Hours (The Will)
    44115: createMovieData({ 
        survivabilityIndex: 95, physicalToll: 100, complexityLevel: "EXTREME", 
        dominantColor: "#dc2626", rating: 7.5, criticsScore: 93, audienceScore: 85, director: "Danny Boyle", 
        cast: ["James Franco", "Amber Tamblyn", "Kate Mara"], boxOffice: "$60.7 million", budget: "$18 million", 
        dna: { "Drama": 60, "Thriller": 30, "Action": 10 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Hiking", color: "#dc2626" }, 
            { time: 25, intensity: 50, label: "Trapped", color: "#ef4444" }, 
            { time: 45, intensity: 75, label: "Desperation", color: "#f87171" }, 
            { time: 65, intensity: 100, label: "The Amputation", color: "#fca5a5" }, 
            { time: 85, intensity: 60, label: "Escape", color: "#fecaca" }
        ], 
        synopsis: "When adventure-seeking mountain climber Aron Ralston ventures into Utah's remote Blue John Canyon alone, a dislodged boulder pins his arm against the wall. Over 127 excruciating hours, Aron must make the ultimate choice: lose an arm or lose his life. Danny Boyle's visceral masterpiece captures the raw human will to survive when stripped of everything but hope.", 
        themes: ["Human Endurance", "Survival Instinct", "Self-Sacrifice", "Will to Live"]
    }),

    // 2. Society of the Snow (The Group)
    906126: createMovieData({ 
        survivabilityIndex: 85, physicalToll: 95, complexityLevel: "EXTREME", 
        dominantColor: "#1e40af", rating: 7.8, criticsScore: 90, audienceScore: 88, director: "J.A. Bayona", 
        cast: ["Enzo Vogrincic", "Agustín Pardella", "Matías Recalt"], boxOffice: "$2.1 million", budget: "$60 million", 
        dna: { "Drama": 70, "Adventure": 20, "Thriller": 10 }, 
        scenes: [
            { time: 15, intensity: 25, label: "Flight", color: "#1e40af" }, 
            { time: 30, intensity: 90, label: "The Crash", color: "#3b82f6" }, 
            { time: 60, intensity: 70, label: "Starvation", color: "#60a5fa" }, 
            { time: 90, intensity: 95, label: "The Avalanche", color: "#93c5fd" }, 
            { time: 120, intensity: 75, label: "The Trek", color: "#dbeafe" }
        ], 
        synopsis: "In 1972, a rugby team's chartered flight crashes high in the frozen Andes. Stranded at 12,000 feet with no food, the survivors face an impossible moral dilemma: eat the dead or die. A devastating, unflinching portrait of what humans become when pushed beyond all imaginable limits.", 
        themes: ["Group Survival", "Human Sacrifice", "Faith", "Brotherhood"]
    }),

    // 3. Cast Away (The Isolation)
    8358: createMovieData({ 
        survivabilityIndex: 92, physicalToll: 75, complexityLevel: "HIGH", 
        dominantColor: "#059669", rating: 7.8, criticsScore: 94, audienceScore: 90, director: "Robert Zemeckis", 
        cast: ["Tom Hanks", "Helen Hunt", "Chris Noth"], boxOffice: "$429.6 million", budget: "$90 million", 
        dna: { "Drama": 50, "Adventure": 30, "Romance": 20 }, 
        scenes: [
            { time: 20, intensity: 60, label: "The Crash", color: "#059669" }, 
            { time: 45, intensity: 40, label: "Making Fire", color: "#10b981" }, 
            { time: 70, intensity: 65, label: "I'm Sorry Wilson", color: "#34d399" }, 
            { time: 100, intensity: 80, label: "The Raft", color: "#6ee7b7" }, 
            { time: 130, intensity: 70, label: "Crossroads", color: "#a7f3d0" }
        ], 
        synopsis: "FedEx executive Chuck Noland's obsession with time is shattered when a plane crash strands him on an uninhabited island. Completely alone except for a volleyball named Wilson, Chuck must reinvent human existence from scratch. A profound meditation on isolation where survival isn't just about staying alive, but maintaining sanity.", 
        themes: ["Isolation", "Adaptation", "Lost Love", "Human Resilience"]
    }),

    // 4. The Revenant (The Grunt)
    281957: createMovieData({ 
        survivabilityIndex: 98, physicalToll: 100, complexityLevel: "HIGH", 
        dominantColor: "#0f172a", rating: 8.0, criticsScore: 78, audienceScore: 83, director: "Alejandro G. Iñárritu", 
        cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"], boxOffice: "$533 million", budget: "$135 million", 
        dna: { "Adventure": 50, "Drama": 30, "Action": 20 }, 
        scenes: [
            { time: 15, intensity: 40, label: "The Hunt", color: "#0f172a" }, 
            { time: 45, intensity: 95, label: "Bear Attack", color: "#1e293b" }, 
            { time: 80, intensity: 70, label: "Betrayal", color: "#334155" }, 
            { time: 120, intensity: 90, label: "Icy River", color: "#475569" }, 
            { time: 150, intensity: 95, label: "Revenge", color: "#64748b" }
        ], 
        synopsis: "Mauled by a grizzly bear and left for dead in the brutal 1823 winter, frontiersman Hugh Glass crawls 200 miles through hostile wilderness toward revenge. Iñárritu's masterpiece captures survival as a primal, almost spiritual war against nature, betrayal, and death itself.", 
        themes: ["Revenge", "Survival", "Nature's Power", "Human Betrayal"]
    }),

    // 5. The Martian (The Brain)
    286217: createMovieData({ 
        survivabilityIndex: 95, physicalToll: 50, complexityLevel: "MEDIUM", 
        dominantColor: "#dc2626", rating: 8.0, criticsScore: 91, audienceScore: 92, director: "Ridley Scott", 
        cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"], boxOffice: "$630.2 million", budget: "$108 million", 
        dna: { "Sci-Fi": 60, "Adventure": 25, "Drama": 15 }, 
        scenes: [
            { time: 15, intensity: 50, label: "The Storm", color: "#dc2626" }, 
            { time: 45, intensity: 30, label: "Botany", color: "#ef4444" }, 
            { time: 80, intensity: 65, label: "Pathfinder", color: "#f87171" }, 
            { time: 120, intensity: 85, label: "Iron Man", color: "#fca5a5" }, 
            { time: 140, intensity: 90, label: "Launch", color: "#fecaca" }
        ], 
        synopsis: "Stranded alone on Mars with limited supplies, astronaut Mark Watney must use his scientific mind to survive on a hostile planet. 'I'm going to have to science the sh*t out of this.' Ridley Scott turns survival into a celebration of human intelligence and ingenuity.", 
        themes: ["Scientific Problem-Solving", "Optimism", "Human Ingenuity", "Cooperation"]
    }),

    // 6. The Impossible (The Chaos)
    80278: createMovieData({ 
        survivabilityIndex: 85, physicalToll: 95, complexityLevel: "HIGH", 
        dominantColor: "#0284c7", rating: 7.5, criticsScore: 81, audienceScore: 85, director: "J.A. Bayona", 
        cast: ["Naomi Watts", "Tom Holland", "Ewan McGregor"], boxOffice: "$198.1 million", budget: "$45 million", 
        dna: { "Drama": 70, "Thriller": 20, "Adventure": 10 }, 
        scenes: [
            { time: 10, intensity: 20, label: "Paradise", color: "#0284c7" }, 
            { time: 25, intensity: 98, label: "The Tsunami", color: "#0ea5e9" }, 
            { time: 60, intensity: 80, label: "Separated", color: "#38bdf8" }, 
            { time: 90, intensity: 70, label: "The Hospital", color: "#7dd3fc" }, 
            { time: 110, intensity: 85, label: "Reunion", color: "#bae6fd" }
        ], 
        synopsis: "The true story of a family torn apart by the 2004 Indian Ocean tsunami. Mother Maria and son Lucas fight through the apocalyptic destruction to find their loved ones. A devastating look at survival not as a skill, but as sheer refusal to accept loss.", 
        themes: ["Family Bond", "Natural Disaster", "Hope", "Human Kindness"]
    }),

    // 7. Jungle (The Madness)
    390062: createMovieData({ 
        survivabilityIndex: 75, physicalToll: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#15803d", rating: 6.7, criticsScore: 85, audienceScore: 75, director: "Greg McLean", 
        cast: ["Daniel Radcliffe", "Alex Russell", "Thomas Kretschmann"], boxOffice: "$1.2 million", budget: "$10 million", 
        dna: { "Adventure": 60, "Drama": 25, "Thriller": 15 }, 
        scenes: [
            { time: 15, intensity: 25, label: "The Guide", color: "#15803d" }, 
            { time: 45, intensity: 50, label: "Lost", color: "#16a34a" }, 
            { time: 70, intensity: 75, label: "Alone", color: "#22c55e" }, 
            { time: 95, intensity: 88, label: "Hallucinations", color: "#4ade80" }, 
            { time: 110, intensity: 60, label: "Rescue", color: "#86efac" }
        ], 
        synopsis: "Lost in the Bolivian Amazon for 19 days, backpacker Yossi Ghinsberg battles venomous insects, starvation, and creeping madness. Daniel Radcliffe reveals the Amazon not as a beautiful wilderness, but as a living entity determined to kill.", 
        themes: ["Friendship Tested", "Jungle Survival", "Trust", "Human Limits"]
    }),

    // 8. Apocalypto (The Chase)
    1579: createMovieData({ 
        survivabilityIndex: 90, physicalToll: 85, complexityLevel: "HIGH", 
        dominantColor: "#7c2d12", rating: 7.8, criticsScore: 65, audienceScore: 78, director: "Mel Gibson", 
        cast: ["Rudy Youngblood", "Dalia Hernández", "Jonathan Brewer"], boxOffice: "$120.7 million", budget: "$40 million", 
        dna: { "Action": 60, "Adventure": 25, "Drama": 15 }, 
        scenes: [
            { time: 20, intensity: 30, label: "Village Life", color: "#7c2d12" }, 
            { time: 50, intensity: 80, label: "The Capture", color: "#a16207" }, 
            { time: 90, intensity: 95, label: "The Sacrifice", color: "#ca8a04" }, 
            { time: 120, intensity: 98, label: "The Chase", color: "#eab308" }, 
            { time: 135, intensity: 85, label: "New Beginning", color: "#facc15" }
        ], 
        synopsis: "Escaping a sacrificial altar, Jaguar Paw plunges into the jungle with an army of Mayan warriors hunting him. A relentless, primal chase where survival means outrunning and outsmarting trained killers across brutal terrain.", 
        themes: ["Cultural Collapse", "Family Protection", "Chase Survival", "Primal Instinct"]
    }),

    // 9. 13 Lives (The Team)
    698948: createMovieData({ 
        survivabilityIndex: 85, physicalToll: 40, complexityLevel: "MEDIUM", 
        dominantColor: "#0c4a6e", rating: 7.8, criticsScore: 75, audienceScore: 82, director: "Ron Howard", 
        cast: ["Viggo Mortensen", "Colin Farrell", "Joel Edgerton"], boxOffice: "$2.3 million", budget: "$55 million", 
        dna: { "Drama": 60, "Thriller": 25, "Adventure": 15 }, 
        scenes: [
            { time: 20, intensity: 40, label: "Cave Entry", color: "#0c4a6e" }, 
            { time: 50, intensity: 60, label: "Rising Water", color: "#0284c7" }, 
            { time: 90, intensity: 80, label: "The Dive", color: "#0ea5e9" }, 
            { time: 120, intensity: 90, label: "Sedation", color: "#38bdf8" }, 
            { time: 145, intensity: 70, label: "Out", color: "#7dd3fc" }
        ], 
        synopsis: "The true story of the Thai cave rescue. As oxygen runs out for 12 trapped boys, elite divers must navigate flooded passages so dangerous even experts die. Survival here isn't about one man's strength, but a global effort to save lives.", 
        themes: ["International Cooperation", "Heroism", "Cave Rescue", "Team Effort"]
    }),

    // 10. Unbroken (The Endurance)
    227306: createMovieData({ 
        survivabilityIndex: 95, physicalToll: 95, complexityLevel: "HIGH", 
        dominantColor: "#581c87", rating: 7.2, criticsScore: 51, audienceScore: 68, director: "Angelina Jolie", 
        cast: ["Jack O'Connell", "Miyavi", "Domhnall Gleeson"], boxOffice: "$163.4 million", budget: "$65 million", 
        dna: { "Drama": 65, "Action": 20, "Adventure": 15 }, 
        scenes: [
            { time: 15, intensity: 35, label: "Olympics", color: "#581c87" }, 
            { time: 40, intensity: 70, label: "Plane Crash", color: "#7c3aed" }, 
            { time: 80, intensity: 85, label: "Adrift", color: "#8b5cf6" }, 
            { time: 110, intensity: 90, label: "The Bird", color: "#a78bfa" }, 
            { time: 135, intensity: 75, label: "Plank Hold", color: "#c4b5fd" }
        ], 
        synopsis: "Olympian Louis Zamperini survives a plane crash, 47 days on a raft, and years in a brutal Japanese POW camp. A powerful story about survival as an act of defiance: refusing to surrender your humanity is the ultimate victory.", 
        themes: ["Forgiveness", "Faith", "Endurance", "War Survival"]
    })
};

// 2. SENSITIVE TIMELINES (Schema Data)
// 2. SENSITIVE TIMELINES (Schema Data)
export const SENSITIVE_TIMELINES = {
    // 127 Hours
    44115: { 
        scenes: [
            { start: "1:04:35", end: "1:04:50", type: "Suggestive Clothing (Bikini)", severity: "Mild" }, 
            { start: "1:33:41", end: "1:35:10", type: "Sexual content", severity: "Mild" }
        ] 
    },

    906126: { scenes: [] },
    
    8358: { scenes: [] },

    // The Revenant
    281957: { 
        scenes: [
            { start: "0:06:44", end: "0:06:48", type: "Nudity", severity: "Moderate" }, 
            { start: "1:44:00", end: "1:44:23", type: "Sex", severity: "Moderate" }
        ] 
    },

    // The Martian
    286217: { 
        scenes: [
            { start: "1:44:55", end: "1:45:08", type: "Partial Nudity (Man)", severity: "Mild" }
        ] 
    },

    // The Impossible
    80278: { 
        scenes: [
            { start: "0:05:45", end: "0:05:52", type: "Nudity", severity: "Mild" }, 
            { start: "0:22:10", end: "0:22:22", type: "Nudity", severity: "Mild" }, 
            { start: "0:37:37", end: "0:37:57", type: "Nudity", severity: "Mild" }, 
            { start: "0:41:28", end: "0:41:32", type: "Partial Nudity", severity: "Mild" }
        ] 
    },

    // Jungle
    390062: { 
        scenes: [
            { start: "0:12:04", end: "0:12:06", type: "Partial Nudity (Men)", severity: "Mild" }, 
            { start: "1:19:10", end: "1:19:20", type: "Sexual Content", severity: "Mild" }
        ] 
    },

    // Apocalypto
    1579: { 
        scenes: [
            { start: "0:17:10", end: "0:18:10", type: "Partial nudity", severity: "Mild" }
        ] 
    },

    698948: { scenes: [] },

    // Unbroken
    227306: { 
        scenes: [
            { start: "0:13:40", end: "0:13:45", type: "Partial nudity", severity: "Mild" }, 
            { start: "1:07:45", end: "1:08:37", type: "Partial nudity", severity: "Mild" }
        ] 
    }
};
export const FALLBACK_POSTERS = {
    44115: "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE4ODM3Mw@@._V1_SX500.jpg",
    906126: "https://m.media-amazon.com/images/M/MV5BYzJkZjlmMmQtMGVmYS00OGY3LTlhOTAtNzJjNzQxYWJiNDVkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX500.jpg",
    8358: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg2LWE3NWMtYTU5OTEwZDlmMjMzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    281957: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX500.jpg",
    286217: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX500.jpg",
    80278: "https://m.media-amazon.com/images/M/MV5BMjAyNzk5MzgyNl5BMl5BanBnXkFtZTcwODMyNTgzOA@@._V1_SX500.jpg",
    390062: "https://m.media-amazon.com/images/M/MV5BMjI2MDM1NzU2NV5BMl5BanBnXkFtZTgwNTM2NzQ0MzI@._V1_SX500.jpg",
    1579: "https://m.media-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX500.jpg",
    698948: "https://m.media-amazon.com/images/M/MV5BYjFkYTZjNWYtY2Y3Ny00ZmJkLTg2NGYtNzBkNzVlMWY3MzUzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX500.jpg",
    227306: "https://m.media-amazon.com/images/M/MV5BMTQxNzE4MTY1MV5BMl5BanBnXkFtZTgwNDIzNjI4MzE@._V1_SX500.jpg"
};

export const STRATEGIC_QUOTES = {
    44115: "Sometimes you have to lose yourself to find yourself.", 
    906126: "We came here as strangers, we leave as brothers.",
    8358: "I know what I have to do now. Keep breathing.", 
    281957: "As long as you can still grab a breath, you fight.", 
    286217: "I'm going to have to science the sh*t out of this.", 
    80278: "The impossible is just an opinion.", 
    390062: "When you can't walk, you crawl.", 
    1579: "I am Jaguar Paw, son of Flint Sky.", 
    698948: "Thirteen lives were saved.", 
    227306: "A moment of pain is worth a lifetime of glory."
};

export const CINEMATIC_COLORS = {
    "Drama": "#dc2626", "Adventure": "#059669", "Thriller": "#0f172a", "Action": "#7c2d12", "Sci-Fi": "#dc2626", "Romance": "#be185d"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

/// 3. FAQS (Deep Analysis & Insight Edition)
export const SURVIVAL_MOVIE_FAQS = {
    '127 Hours': [
        { question: "Why does 127 Hours use a camcorder perspective?", answer: "Director Danny Boyle uses the camcorder to turn the audience into Aron’s confessor. It creates an intimate, claustrophobic bond where Aron strips away his bravado. The camera becomes his only companion, allowing him to externalize his regret and effectively 'leave a will' for the family he previously ignored." },
        { question: "What is the meaning of the game show hallucination in 127 Hours?", answer: "It represents the fragmentation of Aron’s mind under severe dehydration. The hallucination mocks his own ego—he realizes his predicament isn't just bad luck, but the direct result of his own arrogance in not telling anyone his location. It creates a jarring contrast between the loud, bright fantasy and the silent, dark reality of the canyon." },
        { question: "Is the amputation scene in 127 Hours medically accurate?", answer: "Extremely. The production worked with medical professionals to replicate the specific sound of bone snapping and the visceral tension of cutting a nerve. Aron Ralston himself confirmed the scene is nearly indistinguishable from his memory. It is framed as a moment of liberation and rebirth, rather than just gratuitous gore." },
        { question: "What does the vision of the future son mean in 127 Hours?", answer: "The premonition of his future son is the 'spark' that gives Aron the final psychological push to sever his arm. It shifts his survival instinct from mere fear of death to a desperate hope for a life not yet lived. It symbolizes the theme that human connection is the ultimate fuel for survival." }
    ],
    'Society of the Snow': [
        { question: "Why is Society of the Snow narrated by a character who dies?", answer: "Narrating through Numa Turcatti (the group's moral center) emphasizes that survival wasn't just about the ones who walked out, but about the collective sacrifice of those who gave their bodies to keep the others alive. Numa represents the spiritual heart of the group, and his death acts as the final catalyst for the rescue expedition." },
        { question: "What does the 'Society' in the film's title actually refer to?", answer: "It refers to the new social contract the survivors were forced to build. Stripped of civilization, money, and status, they created a society based on absolute love and mutual sacrifice. In their context, the decision to consume the deceased was not an act of savagery, but a holy act of communion and brotherhood." },
        { question: "How did the actors in Society of the Snow achieve the starvation look?", answer: "The film was shot chronologically to capture real physical change. The actors followed strict, medically supervised diets to lose significant weight during production. Additionally, details like the 'black urine' shown are medically accurate symptoms of severe dehydration and rhabdomyolysis (muscle breakdown) during starvation." },
        { question: "How accurate is the avalanche scene in Society of the Snow?", answer: "The scene is terrifyingly accurate. Unlike the initial crash, the avalanche was a 'silent tomb' that buried survivors inside the fuselage for days. This period was critical for the survivors' bond, as the extreme physical and emotional proximity solidified the 'society' that would eventually lead to their survival." }
    ],
    'Cast Away': [
        { question: "What is the psychological purpose of Wilson the volleyball?", answer: "Wilson is a vital dissociation mechanism. Humans are inherently social; without interaction, the mind collapses. By projecting a personality onto the ball, Chuck creates an 'Other' to care for and argue with. This allows him to externalize his thoughts and maintain his language skills, preventing a total mental break." },
        { question: "Why is there no music during the island scenes in Cast Away?", answer: "Director Robert Zemeckis intentionally removed the musical score for the middle hour of the film. This forces the audience to experience the crushing silence and auditory isolation of the island. When the music finally returns during the escape, it hits with overwhelming emotional power because the 'silence' has been broken." },
        { question: "What was inside the unopened FedEx package in Cast Away?", answer: "Symbolically, the package represents hope and professional identity. By refusing to open it, Chuck retains his link to his past life as a dutiful employee. It gives him a mission beyond basic survival. While a script draft suggested it contained salsa, the mystery makes it a more powerful symbol of the 'will to return'." },
        { question: "Why didn't Chuck and Kelly end up together at the end of Cast Away?", answer: "The ending is the final test of emotional survival. Chuck realizes that while he survived the island, his old life 'died,' and the world moved on. Loving Kelly means letting her keep the new life she built. The final crossroads scene represents his ultimate freedom—he mastered physical survival, and now he is the master of his own destiny." }
    ],
    'The Revenant': [
        { question: "Why does The Revenant use such long, continuous takes?", answer: "Cinematographer Emmanuel Lubezki used long, unedited takes to trap the audience in real-time suffering. There are no 'cuts' to save the viewer from the intensity of the bear attack or the freezing river. It creates an immersive experience where the environment feels like a predatory character constantly watching Hugh Glass." },
        { question: "Is the bear attack in The Revenant real or CGI?", answer: "It is a blend of highly advanced CGI and physical stunt work. The scene is famous for depicting the bear as a protective mother rather than a movie monster. The violence is clumsy, heavy, and exhausting, which makes it feel disturbingly realistic compared to standard Hollywood action sequences." },
        { question: "What does Hugh Glass's final look at the camera mean?", answer: "Glass’s final stare breaks the 'fourth wall' to implicate the viewer. After achieving his bloody revenge, he realizes it brought him no peace. He looks at the audience as if to ask: 'You watched my agony for entertainment; are you satisfied?' It forces the viewer to confront their own role in the spectacle of violence." },
        { question: "Why was The Revenant filmed using only natural light?", answer: "Director Alejandro Iñárritu refused artificial lighting to capture the raw, gothic texture of the wilderness. This required the crew to shoot in tiny 'golden hour' windows each day. The result is a visual style that feels ancient and organic, emphasizing that nature is entirely indifferent to human struggle." }
    ],
    'The Martian': [
        { question: "How is The Martian different from other survival movies?", answer: "While most survival films focus on despair or physical grit, The Martian focuses on 'competence.' It is a celebration of problem-solving. The antagonist isn't a villain, but the laws of physics. Mark Watney fights back not with a weapon, but with math, botany, and chemistry, making logic the hero of the story." },
        { question: "Why is there so much disco music in The Martian?", answer: "The disco music serves as a vital defense mechanism. Humor and music keep Watney connected to his humanity and prevent him from succumbing to the crushing loneliness of Mars. The upbeat tracks provide a tonal irony to the bleak, red landscape, reinforcing the film’s theme of the resilient human spirit." },
        { question: "Is the science of growing potatoes on Mars actually possible?", answer: "Theoretically, yes. While Martian soil contains toxic perchlorates that would need to be washed out (a detail omitted for time), the concept of using human waste as a nitrate-rich fertilizer is scientifically sound. It represents the ultimate survival cycle: using waste to create life in a dead world." },
        { question: "Why did Mark Watney do the 'Iron Man' move at the end?", answer: "In the original book, Watney does not poke a hole in his glove because it would be impossible to control. The movie added this 'Iron Man' maneuver for cinematic tension. Thematically, however, it fits: it shows Watney taking one last, reckless gamble based on physics to bridge the final gap between himself and humanity." }
    ],
    'The Impossible': [
        { question: "How was the tsunami sound design created in The Impossible?", answer: "The filmmakers treated the tsunami sound as a 'living monster.' The roar of the water was mixed with the sounds of crumbling buildings and twisting metal to create a deafening sensory overload. This mimics the total disorientation of real victims, making the audience feel the terrifying helplessness of the event." },
        { question: "Why does the film focus so much on the mother’s leg injury?", answer: "In most disaster films, the threat ends when the wave stops. In The Impossible, the threat becomes microscopic. The open wound represents a ticking clock of infection and sepsis, grounding the massive scale of a global disaster into an intimate, agonizing physical struggle for survival." },
        { question: "Is the family's survival in The Impossible a true story?", answer: "Yes, it is based on the miraculous true story of the Belón family. While the film feels improbable, the real survivors often mention the 'survivor's guilt' they felt because so many thousands around them did not make it. The film honors this by showing the vast landscape of death surrounding their specific miracle." },
        { question: "What does the red ball symbolize in The Impossible?", answer: "When Lucas watches a red ball float away in the ruins, it symbolizes the sudden end of his childhood. He is instantly forced to become the caretaker for his injured mother. The disaster stripped away his innocence, forcing him to make life-or-death adult decisions in a world turned into a graveyard." }
    ],
    'Jungle': [
        { question: "Who was the guide Karl in the movie Jungle?", answer: "Karl serves as a 'Siren' figure, luring Yossi into the Amazon with promises of hidden tribes and gold. He represents the danger of following charisma over preparation. In real life, Karl’s true identity remains a mystery; he vanished shortly after the events of the film and was never seen again." },
        { question: "Are the hallucinations in Jungle accurate to the real story?", answer: "Yes. The real Yossi Ghinsberg experienced vivid hallucinations due to starvation and isolation, including imagining a woman he needed to protect. This psychological 'companion' gave him a sense of purpose that kept him moving when his body was ready to give up. The film blurs reality to put the viewer inside his fracturing mind." },
        { question: "How did Daniel Radcliffe prepare for his role in Jungle?", answer: "Radcliffe lived on a diet of one chicken breast and a protein bar per day to achieve a gaunt, skeletal look for the final act. His performance intentionally strips away his 'movie star' polish to reveal a raw, animalistic desperation that anchors the film’s grounded horror." },
        { question: "What does the parasite scene in Jungle signify?", answer: "The scene where Yossi cuts a parasite out of his forehead is a moment of pure 'body horror.' It signifies the jungle literally invading the human body. It emphasizes that in the Amazon, a human is not an observer, but biomass—food for a relentless ecosystem." }
    ],
    'Apocalypto': [
        { question: "What is the meaning of the eclipse in Apocalypto?", answer: "The eclipse represents the elite's manipulation of fear. The priests use their knowledge of astronomy to claim divine power over the panicked masses. While it physically saves Jaguar Paw, it highlights the corruption of a civilization that maintains order through terror and religious superstition." },
        { question: "What does the arrival of the Spanish ships at the end signify?", answer: "It is a dark 'Deus Ex Machina.' While the ships inadvertently save Jaguar Paw from his pursuers, they herald the actual 'Apocalypse' for the entire Mayan civilization. It suggests that while one man survived his personal end-of-days, a much larger, unstoppable end is arriving on the horizon." },
        { question: "What is the significance of the 'I am Jaguar Paw' speech?", answer: "This is the moment the prey becomes the predator. By declaring his name and his territory, Jaguar Paw rejects the status of a 'sacrifice' or a 'slave' and reclaims his humanity. It is the film's central thesis: that once a man cures himself of fear, he becomes invincible." },
        { question: "Is the violence in Apocalypto necessary for the story?", answer: "Director Mel Gibson argues that the brutality is necessary to establish the stakes. The graphic nature of the sacrifice and the chase emphasizes the primal value of a single life. By showing how easily life is taken in this world, Jaguar Paw’s struggle to breathe and survive feels incredibly precious." }
    ],
    '13 Lives': [
        { question: "Why did the divers have to sedate the boys in 13 Lives?", answer: "This was the most terrifying and controversial part of the rescue. A panicked child in a pitch-black, flooded tunnel would have drowned themselves and the diver instantly. Using Ketamine to render them unconscious was a massive medical risk, but it was the only way to ensure they could be transported safely through the narrowest passages." },
        { question: "Why does the film focus on the British divers over the military?", answer: "The film highlights that cave diving is a hyper-specialized hobby. The British divers were middle-aged civilians, not soldiers. The contrast between the heroic Thai Navy SEALs (who were untrained for caves) and the expert hobbyists shows that survival often requires very specific, eccentric skills that even elite militaries don't possess." },
        { question: "What makes cave diving so dangerous in 13 Lives?", answer: "The film emphasizes 'Zero Visibility' and the inability to surface. In a cave, you cannot swim 'up' for air; you must find your way back through a maze of flooded tunnels. If you lose your guideline or succumb to a moment of panic, death is almost certain. The psychological pressure of the tight, dark space is the film's true antagonist." },
        { question: "How does 13 Lives depict the global survival effort?", answer: "The film portrays the rescue as a miracle of logistics and global cooperation. It wasn't just the divers; it involved engineers pumping millions of gallons of water and locals diverting mountain streams. It serves as a counterpoint to 'solo' survival stories, proving that sometimes survival requires the entire world working in sync." }
    ],
    'Unbroken': [
        { question: "What is the relationship between Louis and 'The Bird' in Unbroken?", answer: "It is a psychological war of wills. The prison guard, Watanabe ('The Bird'), is obsessed with Louis because the prisoner possesses a spiritual strength that the guard lacks. He tries to break Louis not just for punishment, but to validate his own dominance. Louis uses his resilience and silence as his only weapons of defiance." },
        { question: "What does the plank-holding scene symbolize in Unbroken?", answer: "This is the spiritual climax of the film. Holding a heavy wooden beam over his head while exhausted and starving is physically impossible, yet Louis does it through sheer mental defiance. When he screams, it is a cry of victory that psychologically breaks 'The Bird,' marking the moment the prisoner truly defeated the captor." },
        { question: "How does faith contribute to survival in Unbroken?", answer: "While the raft survival is physical, the prison camp survival is spiritual. Louis survives because he refuses to let his circumstances turn him into a beast. His promise to God during the storm gives him a framework of hope, suggesting that retaining one's humanity is the hardest part of surviving total trauma." },
        { question: "Why is the shark attack scene important in Unbroken?", answer: "The scene establishes the relentless nature of their reality. They aren't just fighting hunger or the enemy; they are fighting the entire natural world. It strips the characters down to the absolute bottom of the food chain, making their eventual survival feel like a direct defiance of the natural order." }
    ]
};

// 4. DATABASE LIST
export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 44115, "imdbID": "tt1542344", "Title": "127 Hours", "year": 2010, "genre": "Drama", "runtime": 94, "rank": 1 },
    { "tmdbId": 906126, "imdbID": "tt16277242", "Title": "Society of the Snow", "year": 2023, "genre": "Drama", "runtime": 144, "rank": 2 },
    { "tmdbId": 8358, "imdbID": "tt0162222", "Title": "Cast Away", "year": 2000, "genre": "Adventure", "runtime": 143, "rank": 3 },
    { "tmdbId": 281957, "imdbID": "tt1663202", "Title": "The Revenant", "year": 2015, "genre": "Adventure", "runtime": 156, "rank": 4 },
    { "tmdbId": 286217, "imdbID": "tt3659388", "Title": "The Martian", "year": 2015, "genre": "Sci-Fi", "runtime": 144, "rank": 5 },
    { "tmdbId": 80278, "imdbID": "tt1649419", "Title": "The Impossible", "year": 2012, "genre": "Drama", "runtime": 114, "rank": 6 },
    { "tmdbId": 390062, "imdbID": "tt3758172", "Title": "Jungle", "year": 2017, "genre": "Adventure", "runtime": 115, "rank": 7 },
    { "tmdbId": 1579, "imdbID": "tt0472043", "Title": "Apocalypto", "year": 2006, "genre": "Action", "runtime": 139, "rank": 8 },
    { "tmdbId": 698948, "imdbID": "tt12262116", "Title": "13 Lives", "year": 2022, "genre": "Drama", "runtime": 147, "rank": 9 },
    { "tmdbId": 227306, "imdbID": "tt1809398", "Title": "Unbroken", "year": 2014, "genre": "Drama", "runtime": 137, "rank": 10 }
];

// 5. UTILITY FUNCTIONS & THE KEYWORD BRIDGE
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const fetchMovieFromTMDB = async (tmdbId) => ({ poster_path: null, title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' });
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

// 🔥 6. THE KEYWORD BRIDGE (Upgraded for maximum SEO power)
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

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR (Universal Version)
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

    const staticFaqs = SURVIVAL_MOVIE_FAQS[movie.Title] ? [...SURVIVAL_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = SURVIVAL_MOVIE_FAQS[movieTitle] ? [...SURVIVAL_MOVIE_FAQS[movieTitle]] : [];
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