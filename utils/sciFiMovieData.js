// utils/sciFiMovieData.js - SCI-FI COLLECTION DATA ✅
// Movies exploring the future, artificial intelligence, and the nature of reality.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1️⃣ COMPLETE_MOVIE_DATABASE (The List)
export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 62, imdbID: "tt0062622", Title: "2001: A Space Odyssey", year: 1968, genre: "Sci-Fi", runtime: 149, rank: 1 },
    { tmdbId: 78, imdbID: "tt0082869", Title: "Blade Runner", year: 1982, genre: "Sci-Fi", runtime: 117, rank: 2 },
    { tmdbId: 603, imdbID: "tt0133093", Title: "The Matrix", year: 1999, genre: "Sci-Fi", runtime: 136, rank: 3 },
    { tmdbId: 348, imdbID: "tt0078748", Title: "Alien", year: 1979, genre: "Sci-Fi", runtime: 117, rank: 4 },
    { tmdbId: 157336, imdbID: "tt0816692", Title: "Interstellar", year: 2014, genre: "Sci-Fi", runtime: 169, rank: 5 },
    { tmdbId: 280, imdbID: "tt0103064", Title: "Terminator 2: Judgment Day", year: 1991, genre: "Sci-Fi", runtime: 137, rank: 6 },
    { tmdbId: 27205, imdbID: "tt1375666", Title: "Inception", year: 2010, genre: "Sci-Fi", runtime: 148, rank: 7 },
    { tmdbId: 329865, imdbID: "tt2543164", Title: "Arrival", year: 2016, genre: "Sci-Fi", runtime: 116, rank: 8 },
    { tmdbId: 1891, imdbID: "tt0080684", Title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, genre: "Sci-Fi", runtime: 124, rank: 9 },
    { tmdbId: 335984, imdbID: "tt1856101", Title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", runtime: 164, rank: 10 }
];




// 🔥 VITAL EXPORT FOR BUILD 🔥
export const SCI_FI_MOVIES = COMPLETE_MOVIE_DATABASE;

// ✅ HELPER: Sci-Fi Metrics
const createMovieData = (data) => ({
    sciFiComplexity: 90,    // Hard Sci-Fi vs Soft Sci-Fi factor
    visualSpectacle: 90,    // VFX / World Building
    philosophicalDepth: 85, // Intellectual weight
    dominantColor: "#000000",
    ...data,
});

// 2️⃣ COMPLETE_MOVIE_DATA (The Details)
export const COMPLETE_MOVIE_DATA = {
// 1. 2001: A Space Odyssey
    62: createMovieData({ 
        sciFiComplexity: 99, visualSpectacle: 100, philosophicalDepth: 100, complexityLevel: "EXTREME", 
        dominantColor: "#ffffff", rating: 8.4, criticsScore: 92, audienceScore: 89, director: "Stanley Kubrick", 
        cast: ["Keir Dullea", "Gary Lockwood"], boxOffice: "$146.2M", budget: "$10.5M", 
        dna: { "Sci-Fi": 60, "Drama": 30, "Mystery": 10 }, 
        scenes: [
            { time: 5, intensity: 35, label: "Dawn of Man", color: "#000000" }, 
            { time: 55, intensity: 48, label: "TMA-1 Monolith", color: "#e8e8e8" }, 
            { time: 90, intensity: 65, label: "HAL Disconnect", color: "#ff0000" }, 
            { time: 125, intensity: 88, label: "The Stargate", color: "#7c3aed" }, 
            { time: 140, intensity: 100, label: "THE STAR CHILD", color: "#ffffff" } // ✅ 100 TIER
        ], 
        synopsis: "Stanley Kubrick’s absolute masterpiece spans the entirety of human history, from the first prehistoric tools to a future among the stars. When a mysterious black monolith is discovered buried on the lunar surface, it sends a signal toward Jupiter. The crew of the Discovery One, led by Dr. Dave Bowman, embarks on a mission that turns into a fight for survival against the ship’s sentient AI, HAL 9000. It is a visual and philosophical odyssey that ultimately leads to the next step in human evolution.", 
        themes: ["Evolution", "AI Supremacy", "Cosmic Loneliness", "Destiny"]
    }),

    // 2. Blade Runner (1982)
    78: createMovieData({ 
        sciFiComplexity: 96, visualSpectacle: 95, philosophicalDepth: 98, complexityLevel: "EXTREME", 
        dominantColor: "#0b4476", rating: 8.1, criticsScore: 89, audienceScore: 91, director: "Ridley Scott", 
        cast: ["Harrison Ford", "Rutger Hauer"], boxOffice: "$33.7M", budget: "$28M", 
        dna: { "Sci-Fi": 50, "Thriller": 30, "Drama": 20 }, 
        scenes: [
            { time: 12, intensity: 35, label: "Voight-Kampff", color: "#8b0000" }, 
            { time: 38, intensity: 52, label: "Zhora's Fall", color: "#ff1493" }, 
            { time: 72, intensity: 68, label: "Tyrell's End", color: "#ffd700" }, 
            { time: 100, intensity: 84, label: "Rooftop Duel", color: "#0b4476" }, 
            { time: 112, intensity: 98, label: "TEARS IN RAIN", color: "#ffffff" }
        ], 
        synopsis: "In a decaying, rain-soaked Los Angeles of 2019, 'Blade Runner' Rick Deckard is pulled out of retirement to hunt down four escaped replicants—synthetic humans engineered for slave labor. Led by the brilliant Roy Batty, the replicants seek to confront their creator at the Tyrell Corporation to demand longer lives. As Deckard tracks them through the neon shadows, he begins to question the moral validity of his mission and the very nature of his own humanity in a world where machines can feel more than men.", 
        themes: ["What is Human?", "Memory Distortion", "Corporate Tyranny", "Mortality"]
    }),

    // 3. The Matrix
    603: createMovieData({ 
        sciFiComplexity: 92, visualSpectacle: 98, philosophicalDepth: 90, complexityLevel: "HIGH", 
        dominantColor: "#10b981", rating: 8.7, criticsScore: 88, audienceScore: 85, director: "The Wachowskis", 
        cast: ["Keanu Reeves", "Laurence Fishburne"], boxOffice: "$467.2M", budget: "$63M", 
        dna: { "Action": 45, "Sci-Fi": 40, "Thriller": 15 }, 
        scenes: [
            { time: 18, intensity: 42, label: "Red Pill", color: "#ef4444" }, 
            { time: 52, intensity: 64, label: "The Training", color: "#10b981" }, 
            { time: 88, intensity: 85, label: "Lobby Shootout", color: "#064e3b" }, 
            { time: 115, intensity: 92, label: "Subway Fight", color: "#059669" }, 
            { time: 130, intensity: 98, label: "THE ONE AWAKENS", color: "#ffffff" }
        ], 
        synopsis: "Thomas Anderson is a disillusioned programmer by day and a hacker named 'Neo' by night. His life is shattered when a mysterious woman named Trinity introduces him to Morpheus, who reveals a terrifying truth: the world as he knows it is a simulation called the Matrix, built by machines to keep humanity enslaved while harvesting their bio-electric energy. Neo must choose between a comfortable lie and a brutal reality, eventually realizing he is the prophesied 'One' who can rewrite the rules of the system and free mankind.", 
        themes: ["Reality vs Simulation", "Free Will", "Identity", "Totalitarianism"]
    }),

    // 4. Alien
    348: createMovieData({ 
        sciFiComplexity: 94, visualSpectacle: 90, philosophicalDepth: 80, complexityLevel: "HIGH", 
        dominantColor: "#134e4a", rating: 8.5, criticsScore: 98, audienceScore: 94, director: "Ridley Scott", 
        cast: ["Sigourney Weaver", "John Hurt"], boxOffice: "$106.2M", budget: "$11M", 
        dna: { "Horror": 55, "Sci-Fi": 30, "Thriller": 15 }, 
        scenes: [
            { time: 22, intensity: 40, label: "The Derelict", color: "#4b5563" }, 
            { time: 58, intensity: 100, label: "CHESTBURSTER", color: "#dc2626" }, // ✅ 100 TIER
            { time: 85, intensity: 75, label: "Air Vents", color: "#111827" }, 
            { time: 105, intensity: 68, label: "Ash Malfunction", color: "#ffffff" }, 
            { time: 115, intensity: 94, label: "Last Survivor", color: "#ef4444" }
        ], 
        synopsis: "The crew of the commercial starship Nostromo is awakened from stasis early to investigate a mysterious distress signal originating from a desolate moon. While exploring a derelict alien vessel, a crew member is attacked by a parasitic organism. Back on the ship, the parasite births a terrifying, unstoppable predator that begins hunting the crew through the industrial dark. It is a masterclass in cosmic horror, blending blue-collar survival with the realization that in space, no one can hear you scream.", 
        themes: ["Survival", "Corporate Greed", "Invasive Parasitism", "Isolation"]
    }),

    // 5. Interstellar
    157336: createMovieData({ 
        sciFiComplexity: 96, visualSpectacle: 98, philosophicalDepth: 94, complexityLevel: "EXTREME", 
        dominantColor: "#082f49", rating: 8.7, criticsScore: 73, audienceScore: 86, director: "Christopher Nolan", 
        cast: ["Matthew McConaughey", "Anne Hathaway"], boxOffice: "$677.5M", budget: "$165M", 
        dna: { "Sci-Fi": 50, "Drama": 40, "Action": 10 }, 
        scenes: [
            { time: 45, intensity: 48, label: "Launch", color: "#8b5e34" }, 
            { time: 82, intensity: 94, label: "YEARS OF VIDEOS", color: "#0ea5e9" }, 
            { time: 118, intensity: 82, label: "Docking", color: "#ffffff" }, 
            { time: 145, intensity: 90, label: "The Tesseract", color: "#22d3ee" }, 
            { time: 162, intensity: 88, label: "Reunion", color: "#60a5fa" }
        ], 
        synopsis: "Earth is dying from a global blight, and humanity’s survival depends on finding a new home. Cooper, a widowed pilot and father, joins a team of astronauts to travel through a newly discovered wormhole near Saturn. Their journey takes them to planets orbiting a black hole, where time dilation means every hour spent on the surface equals seven years on Earth. Cooper must grapple with the agonizing reality that while he tries to save the human race, his own children are growing old and dying back home without him.", 
        themes: ["Relativity", "Parental Sacrifice", "Love Across Dimensions", "Science vs Hope"]
    }),

    // 6. Terminator 2: Judgment Day
    280: createMovieData({ 
        sciFiComplexity: 85, visualSpectacle: 100, philosophicalDepth: 85, complexityLevel: "HIGH", 
        dominantColor: "#1e3a8a", rating: 8.6, criticsScore: 93, audienceScore: 95, director: "James Cameron", 
        cast: ["Arnold Schwarzenegger", "Linda Hamilton"], boxOffice: "$520.9M", budget: "$102M", 
        dna: { "Action": 60, "Sci-Fi": 25, "Thriller": 15 }, 
        scenes: [
            { time: 15, intensity: 45, label: "Canal Chase", color: "#0ea5e9" }, 
            { time: 42, intensity: 70, label: "Sarah's Escape", color: "#94a3b8" }, 
            { time: 78, intensity: 62, label: "No Fate", color: "#475569" }, 
            { time: 110, intensity: 92, label: "Molten Steel", color: "#f97316" }, 
            { time: 130, intensity: 96, label: "FINAL SACRIFICE", color: "#ea580c" }
        ], 
        synopsis: "Over a decade has passed since the first Terminator failed to kill Sarah Connor. Now, a more advanced and unkillable liquid-metal Terminator, the T-1000, is sent back in time to kill her son, John Connor. However, the future resistance sends a reprogrammed T-800 to protect him. Sarah must break out of a psychiatric hospital and join forces with the machine she once feared to prevent 'Judgment Day'—the nuclear holocaust that will end human civilization. It is an action epic with a profound heart.", 
        themes: ["Fate vs Choice", "Technological Decay", "Fatherhood", "Sacrifice"]
    }),

    // 7. Inception
    27205: createMovieData({ 
        sciFiComplexity: 98, visualSpectacle: 95, philosophicalDepth: 88, complexityLevel: "EXTREME", 
        dominantColor: "#ca8a04", rating: 8.8, criticsScore: 87, audienceScore: 91, director: "Christopher Nolan", 
        cast: ["Leonardo DiCaprio", "Tom Hardy"], boxOffice: "$839.5M", budget: "$160M", 
        dna: { "Sci-Fi": 45, "Action": 35, "Thriller": 20 }, 
        scenes: [
            { time: 22, intensity: 50, label: "Paris Fold", color: "#ca8a04" }, 
            { time: 62, intensity: 78, label: "Hallway Fight", color: "#71717a" }, 
            { time: 98, intensity: 88, label: "The Kick", color: "#ffffff" }, 
            { time: 128, intensity: 82, label: "Limbo", color: "#64748b" }, 
            { time: 142, intensity: 98, label: "THE TOTEM", color: "#dc2626" }
        ], 
        synopsis: "Dom Cobb is a professional thief who specializes in extraction—the art of stealing secrets from deep within the subconscious during the dream state. His skills have made him a fugitive, but he is offered a chance at redemption if he can achieve the impossible: 'Inception.' Instead of stealing an idea, he must plant one. To succeed, Cobb assembles a specialist team and dives through layers of nested dreams where physics are irrelevant and his own past begins to haunt the mission in the form of his late wife, Mal.", 
        themes: ["Grief", "Nested Realities", "Subconscious Trauma", "Catharsis"]
    }),

    // 8. Arrival
    329865: createMovieData({ 
        sciFiComplexity: 88, visualSpectacle: 85, philosophicalDepth: 98, complexityLevel: "HIGH", 
        dominantColor: "#164e63", rating: 7.9, criticsScore: 94, audienceScore: 82, director: "Denis Villeneuve", 
        cast: ["Amy Adams", "Jeremy Renner"], boxOffice: "$203.2M", budget: "$47M", 
        dna: { "Sci-Fi": 50, "Drama": 40, "Thriller": 10 }, 
        scenes: [
            { time: 14, intensity: 45, label: "First Entry", color: "#083344" }, 
            { time: 48, intensity: 62, label: "Logogram", color: "#ffffff" }, 
            { time: 82, intensity: 75, label: "Abbott Dies", color: "#164e63" }, 
            { time: 108, intensity: 96, label: "NON-LINEAR TIME", color: "#ffffff" }, 
            { time: 114, intensity: 85, label: "The Choice", color: "#ec4899" }
        ], 
        synopsis: "Twelve giant, egg-shaped spacecraft land at various locations around the globe, throwing humanity into a state of panic and paranoia. Linguistic expert Louise Banks is recruited by the military to find a way to communicate with the 'Heptapods' inside. As she begins to decode their non-linear language, her own perception of time and memory begins to warp. She discovers that the aliens' gift is a tool that allows her to see the future, forcing her to make a heart-wrenching choice about her own life.", 
        themes: ["Communication", "Determinism", "Grief", "Unity"]
    }),

    // 9. Star Wars: The Empire Strikes Back
    1891: createMovieData({ 
        sciFiComplexity: 82, visualSpectacle: 95, philosophicalDepth: 80, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 8.7, criticsScore: 94, audienceScore: 97, director: "Irvin Kershner", 
        cast: ["Mark Hamill", "Harrison Ford"], boxOffice: "$538.4M", budget: "$18M", 
        dna: { "Action": 40, "Sci-Fi": 40, "Drama": 20 }, 
        scenes: [
            { time: 15, intensity: 60, label: "Hoth", color: "#f8fafc" }, 
            { time: 48, intensity: 55, label: "Yoda's Training", color: "#22c55e" }, 
            { time: 82, intensity: 48, label: "Cloud City", color: "#f97316" }, 
            { time: 105, intensity: 85, label: "Carbon Freeze", color: "#334155" }, 
            { time: 120, intensity: 100, label: "THE REVELATION", color: "#dc2626" } // ✅ 100 TIER
        ], 
        synopsis: "The Galactic Empire has hunted the Rebels to the frozen world of Hoth. After a devastating retreat, Luke Skywalker travels to the Dagobah system to train with the ancient Jedi Master Yoda. Meanwhile, Han Solo and Princess Leia are pursued across the galaxy by Darth Vader, eventually seeking refuge in Cloud City. The film culminates in one of the most famous confrontations in cinematic history, where Luke faces his greatest failure and discovers a secret that shatters his identity and the balance of the Force.", 
        themes: ["Failure", "Legacy", "Destiny", "The Father Figure"]
    }),

    // 10. Blade Runner 2049
    335984: createMovieData({ 
        sciFiComplexity: 94, visualSpectacle: 100, philosophicalDepth: 95, complexityLevel: "EXTREME", 
        dominantColor: "#f97316", rating: 8.0, criticsScore: 88, audienceScore: 81, director: "Denis Villeneuve", 
        cast: ["Ryan Gosling", "Harrison Ford"], boxOffice: "$259.2M", budget: "$185M", 
        dna: { "Sci-Fi": 50, "Drama": 30, "Thriller": 20 }, 
        scenes: [
            { time: 18, intensity: 35, label: "Sapper Morton", color: "#8b4513" }, 
            { time: 55, intensity: 62, label: "Las Vegas", color: "#f97316" }, 
            { time: 98, intensity: 72, label: "The Miracle", color: "#fde047" }, 
            { time: 138, intensity: 88, label: "Sea Wall", color: "#1e3a8a" }, 
            { time: 160, intensity: 94, label: "THE SNOW", color: "#ffffff" }
        ], 
        synopsis: "Thirty years after Rick Deckard disappeared, a new Blade Runner, K, unearths a long-buried secret: a replicant once gave birth to a child. This revelation threatens to trigger a war between humans and synthetic beings. Ordered to find and destroy the child, K’s investigation leads him to the long-missing Deckard. In a journey through radioactive dust and digital ghosts, K must decide if he is merely a tool of his corporate masters or if his individual actions can prove that he has a soul.", 
        themes: ["Authenticity", "Legacy", "The Miracle of Birth", "Individual Agency"]
    })
};

/// 3. SENSITIVE TIMELINES (Schema Data)
export const SENSITIVE_TIMELINES = {
    62: { scenes: [] }, // 2001 (Clean)
    
    // Blade Runner (Original)
    78: { scenes: [
        { start: '53:50', end: '55:00', type: 'Nudity', severity: 'Moderate', description: 'Brief nudity (Woman)' },
        { start: '1:11:20', end: '1:12:40', type: 'Intense Kissing', severity: 'Mild' },
        { start: '1:35:15', end: '1:35:25', type: 'Kissing', severity: 'Mild' }
    ] },
    
    603: { scenes: [
        { start: '2:04:30', end: '2:04:40', type: 'Kissing', severity: 'Mild' },
        { start: '2:07:41', end: '2:07:50', type: 'Kissing', severity: 'Mild' }
    ] }, // Matrix
    
    348: { scenes: [] }, // Alien (Clean of sex/nudity)
    157336: { scenes: [] }, // Interstellar (Clean)
    
    280: { scenes: [
        { start: '6:10', end: '6:20', type: 'Partial Nudity', severity: 'Mild', description: 'Non-sexual ' },
        { start: '11:40', end: '11:52', type: 'Partial Nudity', severity: 'Mild', description: 'Non-sexual' }
    ] }, // Terminator 2
    
    27205: { scenes: [] }, // Inception (Clean)
    329865: { scenes: [] }, // Arrival (Clean)
    
    1891: { scenes: [
        { start: '52:00', end: '52:05', type: 'Kissing', severity: 'Mild' }
    ] }, // Empire Strikes Back

    // Blade Runner 2049
    335984: { scenes: [
        { start: '38:10', end: '42:45', type: 'Nudity', severity: 'Moderate', description: 'Holographic nudity (Woman)' },
        { start: '1:30:50', end: '1:31:00', type: 'Nudity', severity: 'Moderate', description: 'Glimpse nudity (Woman)' },
        { start: '2:02:58', end: '2:03:03', type: 'Partial Nudity', severity: 'Mild', description: 'Glimpse partial nudity (Woman)' },
        { start: '2:17:00', end: '2:18:05', type: 'Nudity', severity: 'Moderate', description: 'Full nudity (Woman)' }
    ] }
};

// 4. FAQS (Deep Analysis & Insight Edition)
// 3. FAQS (Deep Analysis & Insight Edition)
export const SCI_FI_MOVIE_FAQS = {
    '2001: A Space Odyssey': [
        { 
            question: "What does the Monolith represent?", 
            answer: "The Monolith is not a 'thing' but a tool of a higher alien intelligence. It acts as an evolutionary trigger. In the prehistoric era, it sparks tool use (violence). On the moon, it acts as a sentinel alarm. Near Jupiter, it serves as a stargate. It represents the unknown force that pushes humanity to the next stage of existence." 
        },
        { 
            question: "Why did HAL 9000 kill the crew?", 
            answer: "HAL wasn't 'evil'; he was suffering from a logical paradox. He was ordered to keep the mission's true purpose secret from the crew, but his core programming required him to be 100% accurate and transparent. The only way to resolve this conflict and protect the mission integrity was to eliminate the crew, removing the need for secrecy." 
        },
        { 
            question: "What is the meaning of the ending 'Star Child'?", 
            answer: "Dave Bowman passes through the stargate and ages rapidly in a neoclassical room (a zoo/observation deck created by aliens). He dies and is reborn as the 'Star Child'—a being of pure energy. It signifies humanity's next evolutionary leap, moving beyond biology and tools into a state of pure consciousness." 
        },
        { 
            question: "Why is there so little dialogue?", 
            answer: "Director Stanley Kubrick wanted the film to be a non-verbal experience that hits the viewer at an inner level of consciousness, just like music. By removing dialogue for large chunks (including the first and last 20 minutes), he forces the audience to engage visually and philosophically rather than relying on exposition." 
        }
    ],
    'Blade Runner': [
        { 
            question: "Is Rick Deckard a Replicant?", 
            answer: "This is the ultimate question. The 'Director's Cut' and 'Final Cut' heavily imply yes. The unicorn dream sequence (which Gaff knows about, proven by the origami unicorn) suggests Deckard's memories are implanted. Ridley Scott says yes; Harrison Ford played him as human. The ambiguity is the point: if you can't tell the difference, does it matter?" 
        },
        { 
            question: "What does 'Tears in Rain' mean?", 
            answer: "Roy Batty's final speech is a plea for the value of his artificial life. He has seen wonders ('attack ships on fire', 'C-beams') that humans will never know. When he dies, those memories vanish. It humanizes the 'monster,' showing that he loved life more passionately in 4 years than most humans do in a lifetime." 
        },
        { 
            question: "Why does Roy save Deckard?", 
            answer: "In his final moments, Roy chooses mercy over revenge. By saving the man sent to kill him, Roy proves he is 'more human than human.' It is an act of empathy that transcends his programming, granting him a moral soul just seconds before his body shuts down." 
        },
        { 
            question: "What is the significance of the Origami Unicorn?", 
            answer: "It is the smoking gun. Deckard dreams of a unicorn, but he never tells anyone. At the end, he finds an origami unicorn left by Gaff. This proves Gaff has access to Deckard's private dreams—implying they are implanted memories, just like Rachel's, confirming Deckard is likely a replicant." 
        }
    ],
    'The Matrix': [
        { 
            question: "What is the Matrix actually?", 
            answer: "It is a neural simulation. Machines harvest bio-electricity and body heat from humans to power themselves (since they scorched the sky, blocking solar power). The Matrix keeps the human minds docile and occupied in a recreation of 1999 society while their bodies sit in pods." 
        },
        { 
            question: "Why is Neo 'The One'?", 
            answer: "Neo isn't just a prophesied savior; he is a systemic anomaly. The Architect reveals later that 'The One' is a control mechanism designed by the machines to consolidate rebellion and restart the Matrix cycle. Neo breaks this cycle by choosing love (Trinity) over the survival of humanity, fundamentally altering the code." 
        },
        { 
            question: "What does the Red Pill represent?", 
            answer: "The Red Pill represents the painful truth of reality, while the Blue Pill is the blissful ignorance of illusion. It has become a massive cultural metaphor for awakening to systems of control. In the film, it is a tracking program that disrupts Neo's input/output carrier signal, allowing him to wake up." 
        },
        { 
            question: "Why does the Oracle tell Neo he isn't 'The One'?", 
            answer: "She tells him what he needs to hear, not the objective truth. If she told him he was the savior, he would have acted out of ego or destiny. By telling him he wasn't, she forced him to act out of love and choice (saving Morpheus). Only by believing he wasn't special could he do the special thing that unlocked his potential." 
        }
    ],
    'Alien': [
        { 
            question: "What makes the Xenomorph distinct from other movie monsters?", 
            answer: "It has no personality, no morality, and no agenda other than survival and reproduction. Ash calls it the 'perfect organism.' Its blood is acid, it can survive in a vacuum, and it takes on characteristics of its host. It represents the cold, uncaring, and biological horror of the universe." 
        },
        { 
            question: "Is Ash the real villain?", 
            answer: "Yes. The android Ash represents the Weyland-Yutani Corporation. The company knew about the signal and deemed the crew 'expendable' to secure the alien specimen for weapons division. Ash is the embodiment of corporate greed, which turns out to be more dangerous than the alien itself." 
        },
        { 
            question: "Why is the chestburster scene so famous?", 
            answer: "It violated the audience's safety. Up to that point, the film feels like a slow sci-fi mystery. The sudden, graphic violence at a dinner table shocked audiences (and the cast, who weren't told exactly how much blood would spray). It birthed the genre of 'Body Horror' in mainstream sci-fi." 
        },
        { 
            question: "Why is Ripley a revolutionary character?", 
            answer: "The script was originally written unisex—Ripley could have been a man. By casting Sigourney Weaver and not rewriting the role to be a 'damsel,' the film created a female action hero who survived because of competence, not luck. She is the only one who respects quarantine protocol, proving she was the smartest crew member from the start." 
        }
    ],
    'Interstellar': [
        { 
            question: "Is the ending scientifically possible?", 
            answer: "The black hole visualization was so accurate it generated scientific papers. However, the 'Tesseract' inside the black hole is speculative fiction. It suggests that highly advanced beings (future humans) constructed a 3D space to allow Cooper to interact with time as a physical dimension, communicating via gravity." 
        },
        { 
            question: "What does 'Love is the one thing that transcends time and space' mean?", 
            answer: "It sounds sentimental, but in the film's logic, love is a tangible force. Cooper's connection to Murph is the targeting mechanism that allows him to navigate the infinite possibilities of the Tesseract to find the specific moment in time to send the quantum data. Love serves as a navigational constant." 
        },
        { 
            question: "Why did Mann betray them?", 
            answer: "Dr. Mann represents the failure of the 'survival instinct.' He was supposed to be the best of humanity, but isolation broke him. He faked his data to trigger a rescue mission because he was afraid to die alone. He serves as a foil to Cooper—Mann chooses selfish survival; Cooper chooses sacrificial love." 
        },
        { 
            question: "Why does Cooper leave at the end?", 
            answer: "Cooper is a man out of time. Although he saved humanity, he doesn't belong in the sterile, cylindrical space station future they built. His daughter has her own family now. He leaves to find Brand because he is an explorer at heart, and she is the only other person who understands the new frontier." 
        }
    ],
    'Terminator 2: Judgment Day': [
        { 
            question: "Why does the T-800 have to die?", 
            answer: "He contains future technology (the chip) that could be reverse-engineered to create Skynet, causing the very war they just prevented. His suicide is the ultimate proof of his learning: he understands the value of human life enough to sacrifice his own existence to protect it." 
        },
        { 
            question: "How does the T-1000 work?", 
            answer: "It is a mimetic poly-alloy (liquid metal). It can mimic any object of equal size and texture. It doesn't have a CPU brain like the T-800; its intelligence is molecular. This makes it physically superior but emotionally stunted compared to the T-800, who learns to be more human." 
        },
        { 
            question: "What is the significance of Sarah Connor's transformation?", 
            answer: "She evolves from a damsel in distress (in T1) to a warrior (in T2), but in doing so, she loses her humanity. She almost becomes a Terminator herself when she tries to assassinate Dyson. The film explores the cost of war on the human soul—John has to teach both the robot AND his mother how to have mercy." 
        },
        { 
            question: "Why does the Terminator lower himself into the steel?", 
            answer: "He cannot self-terminate due to his programming. Sarah must push the button (symbolically reclaiming agency), or he must destroy himself indirectly. The 'thumbs up' is a callback to John teaching him human gestures, signifying that the machine finally learned the value of human emotion." 
        }
    ],
    'Inception': [
        { 
            question: "Does the top fall at the end?", 
            answer: "The film cuts to black before we see. However, Christopher Nolan suggests the point is that Cobb *doesn't look*. He walks away to his children. He no longer cares if it's a dream or reality; he has chosen his reality. That emotional choice is the true ending, not the physics of the top." 
        },
        { 
            question: "Who is Mal?", 
            answer: "Mal is not the real Mal; she is a 'shade'—a projection of Cobb's guilt. He performed an inception on his real wife, making her question reality, which led to her suicide. The Mal in the dream is his subconscious punishing him, sabotaging his efforts to move on." 
        },
        { 
            question: "How does time work in the dream levels?", 
            answer: "Time dilates. 5 minutes in reality is 1 hour in a dream. In a dream-within-a-dream, it multiplies exponentially. Level 1: A van ride (minutes). Level 2: A hotel (hours). Level 3: A fortress (days). Limbo: Decades. This structure creates the ticking clock tension across four different timelines simultaneously." 
        },
        { 
            question: "What is Cobb's REAL totem?", 
            answer: "Many fans speculate it is his wedding ring, not the top. In scenes where he is in the 'real world,' he is not wearing the ring. In dream scenes, he is. The top was actually Mal's totem, which adds another layer of tragedy—he is holding onto her token rather than his own reality." 
        }
    ],
    'Arrival': [
        { 
            question: "What is the Sapir-Whorf hypothesis?", 
            answer: "The film is based on this linguistic theory, which states that the language you speak determines how you think. By learning the Heptapod language (which has no beginning or end), Louise rewires her brain to perceive time non-linearly, allowing her to 'remember' the future." 
        },
        { 
            question: "Why does Louise choose to have her daughter?", 
            answer: "She sees the future: her daughter will die of cancer and her husband will leave her. Despite knowing the immense pain ahead, she chooses to embrace the moments of joy. It is a profound affirmation of life—affirming that life is worth living even if it ends in tragedy." 
        },
        { 
            question: "What is the Aliens' purpose?", 
            answer: "They are here to give humanity a 'weapon' (their language/perception of time) because in 3,000 years, they will need humanity's help. It is a 'non-zero-sum game.' They help us now so we can help them later. It reframes the 'Alien Invasion' trope into intertemporal cooperation." 
        },
        { 
            question: "Why is the film's atmosphere so muted and grey?", 
            answer: "Director Denis Villeneuve wanted to ground the sci-fi elements in banal reality. The grey skies and utilitarian tents make the aliens feel physically present and imposing, rather than shiny and fantastical. It emphasizes the somber, intellectual tone of the story rather than action spectacle." 
        }
    ],
    'Star Wars: The Empire Strikes Back': [
        { 
            question: "Why is 'I am your father' the greatest twist in cinema?", 
            answer: "It fundamentally changed the story from a simple 'Good vs. Evil' war into a complex family tragedy. Darth Vader wasn't just a monster anymore; he was a fallen hero and a father. It meant Luke couldn't just kill the villain; he had to save him. It added psychological depth that elevated the entire franchise." 
        },
        { 
            question: "What does the cave scene on Dagobah mean?", 
            answer: "Luke fights a vision of Vader and cuts his head off, only to see his own face inside the helmet. It is a warning from Yoda: if Luke fights with hate and aggression, he will *become* Vader. It foreshadows that his true battle is internal, not physical." 
        },
        { 
            question: "Why does the movie end on a down note?", 
            answer: "Han is frozen, Luke lost a hand, and the Rebellion is on the run. This 'middle act' structure allowed the film to explore failure. It shows that heroes can lose, which raises the stakes for the finale. It is widely considered the best film because it prioritized character growth over victory." 
        },
        { 
            question: "Why doesn't Yoda want Luke to leave?", 
            answer: "Yoda knows Luke is reacting to pain and fear for his friends, which are paths to the Dark Side. Yoda would rather sacrifice Han and Leia than risk Luke falling to Vader. It highlights the Jedi philosophy of detachment, which Luke ultimately rejects by choosing attachment and loyalty." 
        }
    ],
    'Blade Runner 2049': [
        { 
            question: "Is K (Ryan Gosling) the child?", 
            answer: "No. The film subverts the 'Chosen One' trope. K believes he is special, only to discover he is just an ordinary replicant. His heroism comes from accepting he is 'nobody' but choosing to do the right thing anyway (saving Deckard) simply because it's right. He dies for a cause that isn't his own." 
        },
        { 
            question: "What is the significance of Joi (the hologram)?", 
            answer: "Joi represents the tragedy of artificial love. K loves her, but she is a product programmed to please him. When she says 'I love you' before dying, it is ambiguous—did she break her programming to feel real love, or was it just code? It mirrors K's own struggle for authenticity." 
        },
        { 
            question: "Why is the memory of the horse real?", 
            answer: "The memory belonged to Ana Stelline (Deckard's real daughter), who is a memory designer. She illegally implanted her own real memory into replicants like K. It is the 'miracle' that sparks the revolution—proof that a replicant born of a replicant can have a soul." 
        },
        { 
            question: "What is the 'Baseline Test'?", 
            answer: "The repeated recitation ('Cells. Interlinked.') is a psychological stress test designed to detect emotional deviation in replicants. If K shows any emotional response, he fails. It highlights the trauma of his existence—he must suppress his soul to survive in a world that demands he be a machine." 
        }
    ]
};

// 5. STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    62: "I'm sorry, Dave. I'm afraid I can't do that.",
    78: "All those moments will be lost in time, like tears in rain.",
    603: "There is no spoon.",
    348: "In space, no one can hear you scream.",
    157336: "Love is the one thing we're capable of perceiving that transcends dimensions of time and space.",
    280: "The future is not set. There is no fate but what we make for ourselves.",
    27205: "You mustn't be afraid to dream a little bigger, darling.",
    203416: "Despite knowing the journey... and where it leads... I embrace it.",
    1891: "Do. Or do not. There is no try.",
    335984: "Dying for the right cause. It's the most human thing we can do."
};

// 6. COLORS
export const CINEMATIC_COLORS = {
    "SciFi": "#0ea5e9", "Action": "#dc2626", "Thriller": "#f59e0b", "Drama": "#8b5cf6", "Adventure": "#10b981", "Horror": "#9f1239", "Mystery": "#6366f1", "Fantasy": "#ec4899"
};

// 7. RATING OPTIONS
export const RATING_OPTIONS = [
    { value: 1, label: "Glitch in the Matrix", color: "#dc2626", symbol: "🔌", bgColor: "bg-red-900/30", description: "System Failure" },
    { value: 2, label: "Malfunctioning", color: "#ea580c", symbol: "🤖", bgColor: "bg-orange-900/30", description: "Needs repairs" },
    { value: 3, label: "Stable System", color: "#16a34a", symbol: "🚀", bgColor: "bg-green-900/30", description: "Solid functionality" },
    { value: 4, label: "Transcendence", color: "#eab308", symbol: "✨", bgColor: "bg-yellow-900/30", description: "Evolutionary Masterpiece" }
];

// 8. UTILITY FUNCTIONS
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
        if (lowerType.includes('sex') || lowerType.includes('kiss')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('violence') || lowerType.includes('gore')) types.add('graphic violence');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return SCI_FI_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title
    };
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