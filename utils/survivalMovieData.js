// utils/survivalMovieData.js - SURVIVAL COLLECTION DATA
// Movies exploring human endurance, isolation, and the will to live.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
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
export const SENSITIVE_TIMELINES = {
    44115: { scenes: [{ start: "1:04:35", end: "1:04:50", type: "Bikini scene", severity: "Mild" }, { start: "1:33:41", end: "1:35:10", type: "Partial undressing", severity: "Mild" }] },
    906126: { scenes: [{ start: "0:03:07", end: "0:03:10", type: "Nudity", severity: "Moderate", description: "Nude man in background" }] },
    8358: { scenes: [{ start: "0:13:15", end: "0:13:45", type: "Kissing", severity: "Mild", description: "Romantic kissing scene before departure" }, { start: "2:05:53", end: "2:06:47", type: "Kissing", severity: "Mild", description: "Emotional reunion kissing scene" }] },
    281957: { scenes: [{ start: "0:06:44", end: "0:06:48", type: "Nudity", severity: "Moderate", description: "Male buttocks" }, { start: "1:44:00", end: "1:44:23", type: "Sex scene", severity: "Moderate" }] },
    286217: { scenes: [{ start: "1:44:55", end: "1:45:08", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }] },
    80278: { scenes: [{ start: "0:05:45", end: "0:05:52", type: "Partial nudity", severity: "Mild", description: "Non-sexual" }, { start: "0:22:10", end: "0:22:22", type: "Partial nudity", severity: "Mild", description: "Non-sexual" }, { start: "0:37:37", end: "0:37:45", type: "Nudity", severity: "Mild", description: "Not sexualized" }, { start: "0:37:52", end: "0:37:57", type: "Nudity", severity: "Mild", description: "Not sexualized" }, { start: "0:41:28", end: "0:41:32", type: "Partial nudity", severity: "Mild", description: "Non-sexual" }] },
    390062: { scenes: [{ start: "0:06:38", end: "0:06:43", type: "Kissing", severity: "Mild" }, { start: "0:12:04", end: "0:12:06", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }, { start: "1:19:10", end: "1:19:20", type: "Partial undressing", severity: "Mild" }] },
    1579: { scenes: [{ start: "0:17:10", end: "0:18:10", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }] },
    698948: { scenes: [] },
    227306: { scenes: [{ start: "0:13:40", end: "0:13:45", type: "Partial nudity", severity: "Mild", description: "Female buttocks" }, { start: "1:07:45", end: "1:08:37", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }] }
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
        { 
            question: "Why does the film use a camcorder perspective so often?", 
            answer: "Director Danny Boyle uses the camcorder to turn the audience into Aron's confessor. It creates an intimate, claustrophobic bond where Aron strips away his bravado. The camera becomes his only companion, allowing him to externalize his internal monologue and effectively 'leave a will' for the parents he ignored." 
        },
        { 
            question: "What is the meaning of the 'Game Show' hallucination?", 
            answer: "It represents the fragmentation of Aron's mind under dehydration and regret. It mocks his own ego—he realizes his predicament isn't bad luck, but the result of his own arrogance (not telling anyone where he went). It creates a jarring contrast between the bright, loud fantasy and the silent, dark canyon." 
        },
        { 
            question: "Is the amputation scene medically accurate?", 
            answer: "Extremely. Danny Boyle worked with medical professionals to replicate the sound of bone snapping (using a cello string breaking) and the tension of the nerve cutting. Aron Ralston himself confirmed it is indistinguishable from his memory of the event. It is designed to be a moment of liberation, not just gore." 
        },
        { 
            question: "What does the premonition of the future son signify?", 
            answer: "The vision of the future son is the 'spark' that gives Aron the final push to sever his arm. It shifts his survival instinct from 'I don't want to die' to 'I have a life I haven't lived yet.' It symbolizes that connection to others is the ultimate fuel for survival." 
        }
    ],
    'Society of the Snow': [
        { 
            question: "Why is the film narrated by Numa Turcatti, who dies?", 
            answer: "Narrating through Numa (who was the moral center of the group) emphasizes that survival wasn't just about the ones who walked out, but the ones who gave their bodies to keep others alive. Numa represents the spiritual sacrifice of the group. His death acts as the catalyst that forces the final expedition to happen immediately." 
        },
        { 
            question: "What does the 'Society' in the title refer to?", 
            answer: "It refers to the new social contract the survivors had to build. Stripped of civilization's rules, money, and status, they created a society based on absolute love and mutual sacrifice. The decision to consume the dead wasn't savagery; in their context, it was a holy act of communion and brotherhood." 
        },
        { 
            question: "How did the film achieve the realistic look of starvation?", 
            answer: "The film was shot chronologically. The actors went on strict, medically supervised diets to lose significant weight during the shoot, mirroring the deterioration of the real survivors. The black urine shown is a medically accurate symptom of severe dehydration and starvation (ketosis and rhabdomyolysis)." 
        },
        { 
            question: "Is the avalanche scene accurate?", 
            answer: "Yes. Unlike the crash, which was chaos, the avalanche was a silent tomb. Survivors were buried alive for days inside the fuselage. This period is critical because it forced the survivors to bond even tighter physically and emotionally, solidifying the 'society' that would eventually save them." 
        }
    ],
    'Cast Away': [
        { 
            question: "What is the psychological purpose of Wilson?", 
            answer: "Wilson is a dissociation mechanism. Humans are social creatures; without interaction, the mind collapses. By projecting a personality onto the volleyball, Chuck creates an 'Other' to care for and argue with. Wilson allows Chuck to externalize his thoughts and maintain language skills, preventing total insanity." 
        },
        { 
            question: "Why is there no music for the island scenes?", 
            answer: "Director Robert Zemeckis intentionally removed the score for the entire middle section. This forces the audience to experience the crushing silence of isolation. We only hear wind, waves, and Chuck's breathing. When the music finally returns during his escape, it hits the audience with overwhelming emotional force." 
        },
        { 
            question: "What was in the unopened FedEx package?", 
            answer: "Symbolically, the package represents Hope and Control. By saving one package, Chuck retains his identity as a dutiful FedEx employee—a link to his past self. It gives him a mission beyond just eating and sleeping. (The script draft revealed it contained salsa, but the mystery is more powerful)." 
        },
        { 
            question: "Why doesn't Chuck stay with Kelly at the end?", 
            answer: "The ending is the final survival test: emotional survival. Chuck realizes that while he survived the island, he 'died' to the world, and life moved on. Loving her means letting her go. The crossroads scene represents his new freedom—he mastered physical survival, and now he must master his destiny." 
        }
    ],
    'The Revenant': [
        { 
            question: "What is the significance of the long, continuous takes?", 
            answer: "Cinematographer Emmanuel Lubezki used long, unedited takes to trap the audience in real-time suffering. There are no 'cuts' to save you from the bear attack or the freezing river. It creates an immersive, claustrophobic experience where the environment feels like a character that is constantly breathing down Hugh Glass's neck." 
        },
        { 
            question: "Is the bear attack CGI or real?", 
            answer: "It is highly advanced CGI based on stunt work. The scene is terrifying because it depicts the bear not as a movie monster, but as a confused, protective mother protecting her cubs. The violence is clumsy, heavy, and exhausting, which makes it feel disturbingly realistic compared to standard action movie fights." 
        },
        { 
            question: "What does the final look at the camera mean?", 
            answer: "Glass's final stare breaks the fourth wall. After achieving his revenge, he realizes it brought no peace ('Revenge is in God's hands'). He looks at the audience as if to ask: 'You watched my suffering for entertainment; are you satisfied?' It implicates the viewer in the violence." 
        },
        { 
            question: "Why did the director use only natural light?", 
            answer: "Iñárritu refused to use artificial lighting to capture the raw, gothic beauty of the landscape. They had a tiny window of time each day to shoot. This creates a visual texture that feels ancient and organic, emphasizing that nature is indifferent to human struggle." 
        }
    ],
    'The Martian': [
        { 
            question: "How does The Martian differ from other survival films?", 
            answer: "Most survival films focus on physical grit or despair. The Martian focuses on competence. It is 'Competence Porn'—the satisfaction of watching a smart person solve problems one by one. The antagonist isn't a villain; it's physics. Watney fights back not with a gun, but with math, botany, and chemistry." 
        },
        { 
            question: "Is the 'Disco Music' just a joke?", 
            answer: "It serves a dual purpose. Humor is Watney's defense mechanism against the crushing reality of death. The disco music (left by his commander) keeps him connected to humanity, even if he hates it. It provides a tonal contrast to the bleak red landscape, reinforcing the film's optimistic view of human spirit." 
        },
        { 
            question: "Could you actually grow potatoes on Mars?", 
            answer: "Theoretically, yes, but with caveats. Martian soil contains perchlorates (toxic), which Watney would have needed to wash out (not shown in film). However, the concept of using human waste for nitrates/fertilizer is scientifically sound. It represents the ultimate cycle of survival: using death/waste to create life." 
        },
        { 
            question: "Why is the ending 'Iron Man' maneuver controversial?", 
            answer: "In the book, Watney explicitly does NOT poke a hole in his glove because it would be impossible to control. The movie added this for cinematic flair. While physically dubious, it thematically fits—it is Watney taking one last, reckless gamble based on physics to bridge the gap between him and humanity." 
        }
    ],
    'The Impossible': [
        { 
            question: "How was the tsunami sound design created?", 
            answer: "The sound is as important as the visual. The filmmakers described the tsunami not as a wave, but as a 'monster.' The roar of the water was mixed with sounds of crumbling buildings and twisting metal to create a deafening, sensory overload that mimics the disorientation of the real victims. It creates a feeling of helplessness." 
        },
        { 
            question: "Why focus so much on the mother's leg injury?", 
            answer: "In a disaster movie, the threat usually ends after the event. In The Impossible, the threat continues microscopically. The open wound represents the ticking clock of infection and sepsis. It grounds the epic scale of the disaster into a very specific, intimate, and horrifying physical struggle." 
        },
        { 
            question: "Is the family's survival statistically probable?", 
            answer: "It is incredibly improbable, which is why the true story is so famous. The Belón family (the real family) noted that while the film feels miraculous, it is also 'guilt-inducing' because so many others died. The film attempts to honor this by showing the vast scale of death around their small miracle." 
        },
        { 
            question: "What does the red ball scene symbolize?", 
            answer: "When Lucas watches the red ball float away in the ruins, it symbolizes the loss of his childhood. He is forced to become the caretaker for his mother. The disaster stripped away his innocence instantly, forcing him to mature and make life-or-death decisions in a landscape of corpses." 
        }
    ],
    'Jungle': [
        { 
            question: "What is the role of the 'Guide' Karl?", 
            answer: "Karl serves as the 'Siren' of the story. He lures Yossi with the promise of hidden tribes and gold—tempting his ego and desire for authentic adventure. Karl represents the danger of trusting charisma over preparation. In real life, Karl remains a mystery and was never seen again." 
        },
        { 
            question: "Are the hallucinations real to the experience?", 
            answer: "Yes. The real Yossi Ghinsberg experienced vivid hallucinations due to starvation and isolation, including imagining a woman he needed to protect. This psychological defense mechanism gave him a purpose to keep moving when his body wanted to give up. The film blurs reality to put the viewer in his fracturing mind." 
        },
        { 
            question: "How did Daniel Radcliffe prepare for the physical transformation?", 
            answer: "Radcliffe famously lived on one chicken breast and a protein bar per day to shed massive weight. The gaunt look in the final act is real. His performance strips away the 'Harry Potter' polish to reveal a raw, trembling, animalistic desperation that anchors the film's horror." 
        },
        { 
            question: "What does the forehead bump scene represent?", 
            answer: "The scene where he cuts a parasite out of his forehead is pure body horror. It signifies the jungle invading the body. It emphasizes that in the Amazon, you are not just an observer; you are biomass, food for the ecosystem. It is the moment Yossi realizes he is being eaten alive." 
        }
    ],
    'Apocalypto': [
        { 
            question: "What does the eclipse scene symbolize?", 
            answer: "The eclipse represents the manipulation of fear by the elite. The priests know the astronomy, but they use it to claim divine power over the masses. It saves Jaguar Paw physically, but it highlights the corrupt, crumbling nature of a civilization that rules through terror and superstition." 
        },
        { 
            question: "Why is the ending with the ships significant?", 
            answer: "It is the ultimate 'Deus Ex Machina' but with a dark twist. The Spanish ships save Jaguar Paw from his pursuers, but they herald the actual Apocalypse for the Mayan civilization. It suggests that while one man survived his personal end-of-days, an even greater end-of-days has just arrived on the horizon." 
        },
        { 
            question: "What is the meaning of 'I am Jaguar Paw' speech?", 
            answer: "It is the turning point where the prey becomes the predator. Jaguar Paw stops running and reclaims his identity and his territory. By declaring his name and lineage, he rejects the status of 'sacrifice' or 'slave' and asserts his humanity. It is the film's thesis: fear is a sickness, and he has cured himself." 
        },
        { 
            question: "Is the violence gratuitous or necessary?", 
            answer: "Mel Gibson argues it is necessary to show the stakes. The brutality of the sacrifice and the chase emphasizes the primal value of life. By showing how easily life is taken, the film makes Jaguar Paw's struggle to breathe, run, and live feel incredibly precious and high-stakes." 
        }
    ],
    '13 Lives': [
        { 
            question: "Why was sedating the boys necessary?", 
            answer: "This is the terrifying crux of the rescue. A panicked child in a narrow, flooded tunnel would kill themselves and the diver instantly. The decision to render them unconscious (using Ketamine) was medically risky and ethically fraught, but it was the only variable the divers could control. It turned a rescue mission into a transport mission." 
        },
        { 
            question: "Why focus on the British divers instead of just the Thai Navy SEALs?", 
            answer: "The film highlights that cave diving is a niche, oddball hobby. The British divers were middle-aged hobbyists, not soldiers. The contrast between the disciplined Thai SEALs (who were heroic but untrained for *caves*) and the socially awkward but expert British divers highlights that survival sometimes requires hyper-specialized, eccentric skills." 
        },
        { 
            question: "What makes cave diving so dangerous?", 
            answer: "The film emphasizes 'Zero Visibility.' Unlike open ocean, you cannot surface for air. If you lose the guideline, you die. If you panic, you die. The psychological pressure of being squeezed in pitch blackness underwater is the primary antagonist of the film." 
        },
        { 
            question: "How does the film depict the global effort?", 
            answer: "It shows survival as a logistics miracle. It wasn't just divers; it was engineers pumping water, locals diverting streams on the mountain, and governments cooperating. It serves as a counterpoint to 'Solo Survival' films—sometimes, survival requires the entire world working in sync." 
        }
    ],
    'Unbroken': [
        { 
            question: "What is the dynamic between Louis and 'The Bird'?", 
            answer: "It is a perverse intimacy. The Bird (Watanabe) is obsessed with Louis because Louis represents the strength he lacks. He tries to break Louis not just to punish him, but to prove his own dominance. It is a psychological war where The Bird wants Louis to admit defeat, and Louis uses his silence as a weapon." 
        },
        { 
            question: "What does the plank-holding scene symbolize?", 
            answer: "It is the Christ-like moment of the film. Holding the beam is physically impossible for that duration, but Louis does it through sheer spiritual defiance. When he screams, it isn't a scream of pain, but of victory. It breaks The Bird psychologically, marking the moment the prisoner defeated the guard." 
        },
        { 
            question: "How does faith play a role in his survival?", 
            answer: "While the raft survival is physical, the camp survival is spiritual. Louis survives because he refuses to become a beast. His promise to God ('If you get me through this, I'll serve you forever') gives him a transactional hope. The film argues that retaining one's humanity is the hardest part of survival." 
        },
        { 
            question: "Why is the shark scene important?", 
            answer: "It establishes the relentless nature of their reality. They are fighting the sun, the sea, the hunger, the enemy planes, AND the sharks. It strips them down to the absolute bottom of the food chain, making their survival feel like a defiance of the natural order." 
        }
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

// 5. UTILITY FUNCTIONS
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
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return SURVIVAL_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title, "description": movieInfo?.synopsis || `${movie.Title} - A compelling survival film`,
        "genre": movie.genre, "datePublished": movie.year.toString(), "director": { "@type": "Person", "name": movieInfo?.director || "Acclaimed Director" },
        "actor": movieInfo?.cast?.map(actor => ({ "@type": "Person", "name": actor })) || [], "duration": `PT${movie.runtime}M`, "image": posterUrl,
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": movieInfo?.rating || 7.0, "bestRating": 10, "worstRating": 1, "ratingCount": movieInfo?.audienceScore || 100 }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
});

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