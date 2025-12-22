// utils/oldboyMoviesData.js - REVENGE THRILLERS LIKE OLDBOY (PARASITE FORMAT) 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 49026, imdbID: "tt1588170", Title: "I Saw the Devil", year: 2010, genre: "Thriller", runtime: 144, rank: 1 },
    { tmdbId: 4689, imdbID: "tt0310775", Title: "Sympathy for Mr. Vengeance", year: 2002, genre: "Thriller", runtime: 121, rank: 2 },
    { tmdbId: 4550, imdbID: "tt0451094", Title: "Lady Vengeance", year: 2005, genre: "Thriller", runtime: 115, rank: 3 },
    { tmdbId: 51608, imdbID: "tt1527788", Title: "The Man from Nowhere", year: 2010, genre: "Action", runtime: 119, rank: 4 },
    { tmdbId: 13855, imdbID: "tt1190539", Title: "The Chaser", year: 2008, genre: "Thriller", runtime: 125, rank: 5 },
    { tmdbId: 11344, imdbID: "tt0456912", Title: "A Bittersweet Life", year: 2005, genre: "Action", runtime: 117, rank: 6 },
    { tmdbId: 46738, imdbID: "tt1255953", Title: "Incendies", year: 2010, genre: "Drama", runtime: 130, rank: 7 },
    { tmdbId: 290098, imdbID: "tt4016934", Title: "The Handmaiden", year: 2016, genre: "Thriller", runtime: 145, rank: 8 },
    { tmdbId: 50475, imdbID: "tt1540399", Title: "No Mercy", year: 2010, genre: "Thriller", runtime: 113, rank: 9 },
    { tmdbId: 146233, imdbID: "tt1392214", Title: "Prisoners", year: 2013, genre: "Thriller", runtime: 153, rank: 10 }
];

const createMovieData = (data) => data;

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

// Precise timestamps for sensitive content logic
export const SENSITIVE_TIMELINES = {
    49026: { scenes: [{ start: "0:12:05", end: "0:12:45", type: "Nudity", severity: "Severe" }, { start: "1:22:10", end: "1:24:30", type: "Sexual Violence", severity: "Severe" }] },
    4689: { scenes: [{ start: "0:25:30", end: "0:27:15", type: "Sex scene", severity: "Strong" }] },
    4550: { scenes: [{ start: "0:55:10", end: "0:56:45", type: "Nudity", severity: "Moderate" }, { start: "1:10:20", end: "1:11:30", type: "Sex scene", severity: "Strong" }] },
    51608: { scenes: [{ start: "0:25:00", end: "0:26:00", type: "Drug Use", severity: "Strong" }] },
    13855: { scenes: [{ start: "0:15:30", end: "0:16:10", type: "Sexual references", severity: "Moderate" }] },
    11344: { scenes: [] },
    46738: { scenes: [{ start: "1:35:10", end: "1:37:00", type: "Sexual Violence", severity: "Severe" }] },
    290098: { scenes: [{ start: "0:45:10", end: "0:48:30", type: "Sex scene", severity: "Strong" }, { start: "1:25:40", end: "1:29:15", type: "Sex scene", severity: "Strong" }] },
    50475: { scenes: [{ start: "0:05:10", end: "0:06:20", type: "Nudity", severity: "Moderate" }] },
    146233: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    49026: "https://image.tmdb.org/t/p/original/37Qdbd0x0d43f6xXy79p64d5k7d.jpg",
    4689: "https://image.tmdb.org/t/p/original/AlV5tGbJk5bWE0bA8Ut9ESbuOvZ.jpg",
    4550: "https://image.tmdb.org/t/p/original/s7CA1C9A9cdq8klOvsEHQq5oIP2.jpg",
    51608: "https://image.tmdb.org/t/p/original/4CGkV2D4AuBatnTVlnG6rV2mQeI.jpg",
    13855: "https://image.tmdb.org/t/p/original/1Awr4Qzm1Y4FlvkuNNv1A2mxxsP.jpg",
    11344: "https://image.tmdb.org/t/p/original/9k2KOrs1p3dz9Q1KmQr4vHu9Pzw.jpg",
    46738: "https://image.tmdb.org/t/p/original/sZNe2cey8FVy78f5sHv2xF4noYR.jpg",
    290098: "https://image.tmdb.org/t/p/original/oBLJ1a9KvCs0Ai9u9vVO2O9gHdT.jpg",
    50475: "https://image.tmdb.org/t/p/original/h9p7nhUT3yWOiI9e1C7I9r8qf3k.jpg",
    146233: "https://image.tmdb.org/t/p/original/A1XHZ1nZrAvzf6ZQHDxTu5GYGvN.jpg"
};
export const COMPLETE_MOVIE_DATA = {
    49026: createMovieData({
        classWarfareIndex: 20, complexityLevel: "EXTREME", dominantColor: "#991b1b",
        rating: 8.0, criticsScore: 82, audienceScore: 80,
        director: "Kim Jee-woon", cast: ["Lee Byung-hun", "Choi Min-sik"],
        boxOffice: "$12.9 million", budget: "$6 million",
        dna: { Thriller: 45, Action: 35, Horror: 20 },
        scenes: [
            { time: 10, intensity: 80, label: "The Promise", color: "#991b1b" },
            { time: 45, intensity: 65, label: "Catch & Release", color: "#b91c1c" },
            { time: 90, intensity: 85, label: "The Greenhouse", color: "#dc2626" },
            { time: 125, intensity: 90, label: "Surrender", color: "#ef4444" },
            { time: 140, intensity: 100, label: "Total Hollow", color: "#f87171" }
        ],
        synopsis: "A secret agent tracks a serial killer who murdered his fiancée. He captures him, tortures him, and releases him repeatedly, blurring the line between justice and monster.",
        themes: ["Obsession", "Revenge", "Moral Corruption", "Violence"],
        awards: ["Asian Film Awards", "Blue Dragon Winner"]
    }),
    4689: createMovieData({
        classWarfareIndex: 95, complexityLevel: "HIGH", dominantColor: "#115e59",
        rating: 7.5, criticsScore: 73, audienceScore: 71,
        director: "Park Chan-wook", cast: ["Song Kang-ho", "Shin Ha-kyun"],
        boxOffice: "$2 million", budget: "$4 million",
        dna: { Drama: 55, Thriller: 30, Action: 15 },
        scenes: [
            { time: 15, intensity: 45, label: "Desperation", color: "#115e59" },
            { time: 40, intensity: 70, label: "The Kidnapping", color: "#0f766e" },
            { time: 80, intensity: 90, label: "Riverbed Tragedy", color: "#14b8a6" },
            { time: 100, intensity: 85, label: "Electrocution", color: "#2dd4bf" },
            { time: 120, intensity: 95, label: "Anarchy", color: "#5eead4" }
        ],
        synopsis: "A deaf-mute worker kidnaps his boss's daughter to pay for his sister's kidney transplant. The plan goes disastrously wrong, triggering a chain of vengeance.",
        themes: ["Class Desperation", "Tragedy", "Fate", "Cycle of Violence"],
        awards: ["Fantasia Film Festival"]
    }),
    4550: createMovieData({
        classWarfareIndex: 50, complexityLevel: "HIGH", dominantColor: '#831843',
        rating: 7.6, criticsScore: 77, audienceScore: 75,
        director: 'Park Chan-wook', cast: ['Lee Young-ae', 'Choi Min-sik'],
        boxOffice: '$23 million', budget: '$4.5 million',
        dna: { Psychological: 50, Drama: 35, Action: 15 },
        scenes: [
            { time: 15, intensity: 40, label: 'The Saint', color: '#831843' },
            { time: 50, intensity: 60, label: 'Assembly', color: '#9d174d' },
            { time: 85, intensity: 75, label: 'The Capture', color: '#be185d' },
            { time: 105, intensity: 95, label: 'Group Justice', color: '#db2777' },
            { time: 115, intensity: 50, label: 'White Tofu', color: '#f472b6' }
        ],
        synopsis: 'After 13 years of wrongful imprisonment, a woman seeks a calculated revenge on the man who framed her. The final, most stylish entry in the Vengeance Trilogy.',
        themes: ['Redemption', 'Maternal Vengeance', 'Justice', 'Sacrifice'],
        awards: ['Venice Film Festival']
    }),
    51608: createMovieData({
        classWarfareIndex: 70, complexityLevel: "MEDIUM", dominantColor: '#1e1b4b',
        rating: 7.7, criticsScore: 79, audienceScore: 82,
        director: 'Lee Jeong-beom', cast: ['Won Bin', 'Kim Sae-ron'],
        boxOffice: '$42 million', budget: '$6 million',
        dna: { Action: 60, Drama: 25, Thriller: 15 },
        scenes: [
            { time: 20, intensity: 55, label: 'The Pawnshop', color: '#1e1b4b' },
            { time: 45, intensity: 80, label: 'Escape', color: '#312e81' },
            { time: 75, intensity: 85, label: 'The Club', color: '#4338ca' },
            { time: 95, intensity: 98, label: 'Knife Fight', color: '#6366f1' },
            { time: 115, intensity: 65, label: 'The Hug', color: '#818cf8' }
        ],
        synopsis: 'A quiet pawnshop keeper with a violent past takes on a human trafficking ring to save a young girl who is his only friend.',
        themes: ['Protection', 'Isolation', 'One-Man Army', 'Redemption'],
        awards: ['Grand Bell Awards']
    }),
    13855: createMovieData({
        classWarfareIndex: 60, complexityLevel: "HIGH", dominantColor: '#3f3f46',
        rating: 7.6, criticsScore: 76, audienceScore: 78,
        director: 'Na Hong-jin', cast: ['Kim Yoon-seok', 'Ha Jung-woo'],
        boxOffice: '$35 million', budget: '$4 million',
        dna: { Thriller: 50, Crime: 35, Psychological: 15 },
        scenes: [
            { time: 20, intensity: 60, label: 'The Crash', color: '#3f3f46' },
            { time: 50, intensity: 75, label: 'Deadlock', color: '#52525b' },
            { time: 80, intensity: 90, label: 'Escape Attempt', color: '#71717a' },
            { time: 100, intensity: 100, label: 'The Supermarket', color: '#a1a1aa' },
            { time: 120, intensity: 85, label: 'The Aquarium', color: '#d4d4d8' }
        ],
        synopsis: 'A disgraced ex-detective turned pimp hunts a serial killer when his girls start disappearing. A race against time that exposes police incompetence.',
        themes: ['Institutional Failure', 'Hunt', 'Serial Killer', 'Moral Ambiguity'],
        awards: ['Asian Film Awards']
    }),
    11344: createMovieData({
        classWarfareIndex: 55, complexityLevel: "MEDIUM", dominantColor: '#171717',
        rating: 7.5, criticsScore: 74, audienceScore: 76,
        director: 'Kim Jee-woon', cast: ['Lee Byung-hun', 'Shin Min-a'],
        boxOffice: '$10 million', budget: '$5 million',
        dna: { Action: 50, Crime: 35, Drama: 15 },
        scenes: [
            { time: 15, intensity: 45, label: 'The Choice', color: '#000000' },
            { time: 45, intensity: 80, label: 'Buried Alive', color: '#171717' },
            { time: 75, intensity: 85, label: 'Resurrection', color: '#262626' },
            { time: 100, intensity: 95, label: 'The Lounge', color: '#404040' },
            { time: 115, intensity: 60, label: 'Sweet Dreams', color: '#525252' }
        ],
        synopsis: 'A high-ranking mobster is ordered to kill his boss’s cheating mistress. When he spares her, he triggers a war that destroys everything he built.',
        themes: ['Loyalty', 'Betrayal', 'Identity', 'Pride'],
        awards: ['Sitges Film Festival']
    }),
    46738: createMovieData({
        classWarfareIndex: 85, complexityLevel: "EXTREME", dominantColor: '#ea580c',
        rating: 8.2, criticsScore: 85, audienceScore: 83,
        director: 'Denis Villeneuve', cast: ['Lubna Azabal', 'Mélissa Désormeaux-Poulin'],
        boxOffice: '$16 million', budget: '$6.8 million',
        dna: { Drama: 60, Mystery: 30, Thriller: 10 },
        scenes: [
            { time: 15, intensity: 40, label: 'The Testament', color: '#ea580c' },
            { time: 60, intensity: 85, label: 'The Bus', color: '#c2410c' },
            { time: 90, intensity: 75, label: 'Prisoner 72', color: '#9a3412' },
            { time: 120, intensity: 100, label: 'The Math', color: '#7c2d12' },
            { time: 130, intensity: 60, label: 'Silence', color: '#431407' }
        ],
        synopsis: 'Twins travel to the Middle East to fulfill their mother\'s dying wish and uncover a horrifying family secret rooted in war and trauma.',
        themes: ['Family Secrets', 'War', 'Forgiveness', 'Generational Trauma'],
        awards: ['Oscar Nomination']
    }),
    290098: createMovieData({
        classWarfareIndex: 90, complexityLevel: "HIGH", dominantColor: '#be185d',
        rating: 8.1, criticsScore: 95, audienceScore: 89,
        director: 'Park Chan-wook', cast: ['Kim Min-hee', 'Kim Tae-ri'],
        boxOffice: '$38 million', budget: '$8 million',
        dna: { Thriller: 40, Romance: 35, Drama: 25 },
        scenes: [
            { time: 30, intensity: 50, label: 'The Trap', color: '#be185d' },
            { time: 65, intensity: 75, label: 'The Hanging', color: '#db2777' },
            { time: 95, intensity: 90, label: 'The Asylum', color: '#ec4899' },
            { time: 120, intensity: 85, label: 'The Library', color: '#f472b6' },
            { time: 140, intensity: 70, label: 'Liberation', color: '#f9a8d4' }
        ],
        synopsis: 'A con man hires a pickpocket to serve a wealthy heiress as part of a plot to defraud her. A twisty game of deception where nothing is as it seems.',
        themes: ['Deception', 'Colonialism', 'Female Power', 'Liberation'],
        awards: ['BAFTA Winner']
    }),
    50475: createMovieData({
        classWarfareIndex: 82, complexityLevel: "HIGH", dominantColor: '#312e81',
        rating: 7.4, criticsScore: 72, audienceScore: 74,
        director: 'Kim Hyeong-jun', cast: ['Sol Kyung-gu', 'Ryoo Seung-bum'],
        boxOffice: '$7 million', budget: '$3 million',
        dna: { Crime: 50, Thriller: 35, Mystery: 15 },
        scenes: [
            { time: 15, intensity: 55, label: 'The Body', color: '#312e81' },
            { time: 45, intensity: 75, label: 'Blackmail', color: '#3730a3' },
            { time: 80, intensity: 85, label: 'Tampering', color: '#4338ca' },
            { time: 100, intensity: 80, label: 'The Deal', color: '#4f46e5' },
            { time: 115, intensity: 100, label: 'Devastation', color: '#6366f1' }
        ],
        synopsis: 'A forensic pathologist is forced to tamper with evidence in a murder case to save his kidnapped daughter from an environmental terrorist.',
        themes: ['Coercion', 'Ethics', 'Paternal Love', 'Revenge'],
        awards: []
    }),
    146233: createMovieData({
        classWarfareIndex: 65, complexityLevel: "HIGH", dominantColor: '#525252',
        rating: 8.0, criticsScore: 81, audienceScore: 79,
        director: 'Denis Villeneuve', cast: ['Hugh Jackman', 'Jake Gyllenhaal'],
        boxOffice: '$122 million', budget: '$46 million',
        dna: { Thriller: 50, Psychological: 35, Drama: 15 },
        scenes: [
            { time: 20, intensity: 65, label: 'Vanished', color: '#525252' },
            { time: 50, intensity: 85, label: 'The Hammer', color: '#737373' },
            { time: 90, intensity: 75, label: 'The Maze', color: '#a3a3a3' },
            { time: 130, intensity: 90, label: 'The Pit', color: '#d4d4d4' },
            { time: 150, intensity: 95, label: 'The Whistle', color: '#e5e5e5' }
        ],
        synopsis: 'When his daughter goes missing, a desperate father takes the law into his own hands, kidnapping the prime suspect while a detective hunts the real truth.',
        themes: ['Vigilantism', 'Faith', 'Desperation', 'Moral Ambiguity'],
        awards: ['Oscar Nomination']
    })
};

export const STRATEGIC_QUOTES = {
    49026: "I will kill you when you are in the most pain.",
    4689: "I know you're a good guy, but you know why I have to kill you.",
    4550: "Why don't you worry about yourself?",
    51608: "I'll kill you all.",
    13855: "I didn't sell them. I killed them.",
    11344: "You can't do this to me.",
    46738: "One plus one does not equal two.",
    290098: "My savior who came to tear my life apart.",
    50475: "Death is not the end of pain.",
    146233: "Pray for the best, prepare for the worst."
};

export const CINEMATIC_COLORS = {
    Thriller: '#1e293b', Drama: '#dc2626', Mystery: '#dc2626', 'Sci-Fi': '#0f172a',
    Crime: '#422006', Romance: '#be185d', Action: '#991b1b', Psychological: '#831843'
};

export const RATING_OPTIONS = [
    { value: 1, label: 'A Disappointment', color: '#dc2626', symbol: '🎫', bgColor: 'bg-red-900/30', description: 'Torn ticket - Total disappointment' },
    { value: 2, label: 'Flawed', color: '#ea580c', symbol: '🎟️', bgColor: 'bg-orange-900/30', description: 'Faded ticket - Has major flaws' },
    { value: 3, label: 'Worth the Ride', color: '#16a34a', symbol: '🎟️', bgColor: 'bg-green-900/30', description: 'Clean ticket - Solid entertainment' },
    { value: 4, label: 'Exceptional', color: '#eab308', symbol: '🎫', bgColor: 'bg-yellow-900/30', description: 'Golden ticket - Cinematic masterpiece' }
];

// 🔥 EXPANDED FAQ DATA FOR MOVIES LIKE OLDBOY (50-60 words per answer!)
export const OLDBOY_MOVIE_FAQS = {
  'I Saw the Devil': [
    { 
      question: "Is I Saw the Devil too violent for first-time revenge viewers?", 
      answer: "EXTREME violence rating (96/100). Features graphic torture sequences, serial killer dismemberment, and unrelenting psychological brutality that shocked even Korean censors. The endless capture-torture-release cycle pushes boundaries far beyond typical revenge films. Only recommended for viewers who loved Oldboy's hallway fight intensity and can handle moral descent into monstrosity." 
    },
    { 
      question: "What's the profound meaning behind the ending?", 
      answer: "The agent's breakdown (crying/laughing) reveals his 'justice' transformed him into something worse than the killer. Revenge obsession destroyed his humanity completely, mirroring Oldboy's tragic revelation. Both films prove vengeance creates monsters from good men, leaving audiences questioning if any moral victory exists in such endless cycles of brutality." 
    },
    { 
      question: "Why does it surpass most revenge thrillers?", 
      answer: "Masterful cat-and-mouse escalation where the killer becomes genuinely terrified prey. No traditional heroes—both hunter and hunted suffer total destruction. Perfect pacing builds unbearable tension through moral ambiguity. The psychological warfare elevates it above action-focused revenge films, delivering Oldboy-level emotional devastation with superior character complexity." 
    },
    { 
      question: "Which Oldboy scene does it most resemble?", 
      answer: "The endless torture-release cycle perfectly mirrors Dae-su's 15-year imprisonment. Just as Dae-su became prisoner of his own rage, the agent becomes imprisoned by obsession. Both films show revenge trapping avenger in psychological hell. The power reversal (hunter→hunted) echoes Oldboy's final revelation structure exactly." 
    }
  ],

  'Sympathy for Mr. Vengeance': [
    { 
      question: "How exactly is it connected to Oldboy?", 
      answer: "First installment of Park Chan-wook's Vengeance Trilogy (Sympathy → Oldboy → Lady Vengeance). Shares core theme of endless revenge cycles destroying everyone involved, though stories remain independent. Establishes trilogy's signature moral complexity where every act of justice creates new avengers, setting foundation for Oldboy's personal obsession narrative." 
    },
    { 
      question: "Why does it feel bleaker than stylish Oldboy?", 
      answer: "Zero redemption arc—every revenge attempt catastrophically backfires. A simple kidney transplant tragedy spirals into complete mutual family destruction. Documentary-style realism shows vengeance's mundane, inevitable horror rather than Oldboy's operatic violence. Proves 'eye for an eye' philosophy creates endless tragedy chains with no winners, only escalating devastation." 
    },
    { 
      question: "Which character's tragic arc shocked audiences most?", 
      answer: "Deaf-mute brother's desperate vengeance destroys completely innocent family, proving revenge logic consumes rationality. His pure intentions lead to monstrous actions, mirroring how Oldboy's protagonist rationalizes his brutality. This chain reaction demonstrates trilogy's core thesis: vengeance perpetuates itself across innocent generations with compounding tragedy." 
    },
    { 
      question: "How does visual style differ from operatic Oldboy?", 
      answer: "Deliberately anti-stylized documentary realism vs Oldboy's choreographed violence poetry. Mundane cinematography makes revenge feel oppressively inevitable rather than cinematic spectacle. Sound design emphasizes awkward silence and realistic violence impact over stylized slow-motion. Forces viewers to confront vengeance's banal horror without artistic romanticization." 
    }
  ],

  'Lady Vengeance': [
    { 
      question: "Why does it stand apart from other Vengeance Trilogy films?", 
      answer: "Transforms feminine rage into poetic artistry after 13 years wrongful imprisonment. Unlike Oldboy's masculine brutality, delivers elegant, calculated destruction. Features rare black & white version maximizing visual poetry. Geum-ja's maternal love fuels sophisticated revenge transcending typical vengeance tropes into profound character study." 
    },
    { 
      question: "How does it perfectly complete the vengeance trilogy?", 
      answer: "Sympathy demonstrates tragic cycle inevitability, Oldboy explores personal obsession limits, Lady Vengeance perfects calculated artistry. Collectively prove vengeance destroys avenger regardless of execution method. Trilogy evolution from raw tragedy through personal destruction to elegant monstrosity cements Park Chan-wook's mastery of moral complexity." 
    },
    { 
      question: "What makes the snow vengeance scene unforgettable?", 
      answer: "Elegant brutality masterpiece where victims democratically choose punishments. Geum-ja orchestrates poetic justice in frozen isolation. Moral complexity peaks as audience questions vigilante authority. Combines feminine grace with shocking violence, perfectly balancing trilogy's evolution from Sympathy's chaos to calculated poetic destruction artistry." 
    },
    { 
      question: "Is Geum-ja Park Chan-wook's greatest character creation?", 
      answer: "Ultimate anti-heroine perfection. Maternal love transforms into monstrous revenge artistry without losing humanity. Transcends revenge genre through genuine emotional complexity. Her elegant monstrosity required 13 years preparation, making final execution profoundly earned. Many critics rank her above all trilogy protagonists for character depth." 
    }
  ],

  'The Man from Nowhere': [
    { 
      question: "Does it deliver better action than John Wick series?", 
      answer: "Superior emotional foundation elevates brutally realistic action. Knife fights deliver bone-crunching authenticity vs stylized gun-fu. Pawnshop loner's quiet desperation protecting innocent neighbor girl provides perfect motivation. Single-location warehouse finale surpasses Hollywood spectacle through raw human desperation and earned brutality." 
    },
    { 
      question: "What's the current status of Hollywood remake attempts?", 
      answer: "Stuck in development hell since 2015 announcement. Multiple directors attached/detached. Original's Korean cultural context and authentic emotion impossible to replicate. Fan backlash guaranteed against Hollywood sanitization. Perfect standalone film needs no Western reinterpretation—cultural specificity fundamental to emotional impact." 
    },
    { 
      question: "Which fight scene achieves maximum brutality?", 
      answer: "Warehouse finale massacre remains Korean cinema's bloodiest single sequence. No guns—just desperate knife work against overwhelming odds. Protagonist's mortal wounds don't stop rampage, showcasing superhuman desperation. Raw choreography rejects Hollywood wire-fu for painful realism where every stab wound visibly affects movement." 
    },
    { 
      question: "Why does it capture authentic Oldboy essence?", 
      answer: "Quiet everyman transforms into unstoppable monster protecting chosen family. Moral descent perfectly mirrors Dae-su's vengeful evolution. Both films explore good men's capacity for monstrosity when core humanity threatened. Restrained character work builds maximum impact for violent transformation, matching Oldboy's emotional authenticity." 
    }
  ],

  'The Chaser': [
    { 
      question: "How realistic is its portrayal compared to fictional thrillers?", 
      answer: "Documentary-style authenticity based on real Korean serial killer case. Frustrating police bureaucracy and jurisdictional conflicts feel painfully genuine. Procedural realism rejects Hollywood CSI fantasy for genuine investigative dead-ends and lucky breaks. Mundane evil presentation shocks more than supernatural horror elements." 
    },
    { 
      question: "Why does morally corrupt pimp become compelling protagonist?", 
      answer: "Flawed anti-hero hunts killer when incompetent police fail repeatedly. No redemption arc—remains selfish opportunist driven by self-preservation. Moral complexity elevates film beyond simplistic good-vs-evil. Audience roots for despicable character against worse monster, mirroring real-life moral ambiguity in crime stories." 
    },
    { 
      question: "What makes the killer uniquely disturbing?", 
      answer: "Casual, everyday psychopathy terrifies most. No theatrical villain speeches—just mundane man committing horrific acts without emotional display. Normalcy makes evil feel accessible, rejecting Hollywood's dramatic monster archetype. His banality proves monsters hide among regular people, delivering profound psychological horror." 
    },
    { 
      question: "How does it connect thematically to Oldboy's vengeance?", 
      answer: "Serial killer hunt transforms into personal vengeance quest against institutional failure. Bureaucratic frustration becomes revenge genre's true enemy. Both films explore good intentions corrupting into moral monstrosity. Protagonist's illegal methods mirror Dae-su's extralegal justice pursuit when systems fail victims completely." 
    }
  ],

  'A Bittersweet Life': [
    { 
      question: "Is this Park Chan-wook's most visually stylish masterpiece?", 
      answer: "Neo-noir perfection redefines Korean gangster cinema. Single moment of mercy destroys impeccably loyal enforcer's life. Neon-drenched blood opera transforms betrayal into visual symphony. Every frame delivers gallery-quality composition while advancing tragic narrative. Style serves substance perfectly, elevating genre conventions." 
    },
    { 
      question: "Does Lee Byung-hun deliver career-best performance?", 
      answer: "Sun-woo represents ultimate stoic gangster archetype perfection. Restrained intensity combines impeccable style, buried emotion, and explosive violence seamlessly. Physical presence dominates every scene through minimalism. Anti-hero evolution from loyal soldier to doomed avenger showcases full emotional range without excess dialogue." 
    },
    { 
      question: "Why does 'bittersweet' perfectly describe the film?", 
      answer: "Absolute loyalty inevitably leads to stylish destruction. Protagonist's single humane decision triggers operatic downfall. Beautiful tragedy aesthetic makes violence feel predestined poetry rather than random chaos. Gangster code's internal contradictions create gorgeous fatalism where every stylish moment foreshadows destruction." 
    },
    { 
      question: "What cinematic influences shape its visual language?", 
      answer: "Korean New Wave meets classic Hollywood noir perfection. Gallery-quality framing rivals art installation. Slow-motion blood cascades echo Oldboy's iconic hallway fight aesthetic while establishing distinct identity. Cigarette smoke, neon reflections, and architectural brutalism create unforgettable visual universe elevating genre storytelling." 
    }
  ],

  'Incendies': [
    { 
      question: "Can you describe the legendary twist without spoilers?", 
      answer: "Cinema's most devastating family revelation completely reframes entire narrative structure. Multiple rewatches required for full comprehension. Emotional impact rivals Greek tragedy while maintaining modern realism. Single mathematical equation unlocks horrifying truth connecting separated timelines. Prepares viewers for cinema's most profound structural achievement." 
    },
    { 
      question: "Is this Denis Villeneuve's greatest achievement before Dune?", 
      answer: "War crimes investigation transforms into generational trauma masterpiece. Academy Award nominee Best Foreign Language Film. Restrained direction maximizes emotional devastation through implication rather than spectacle. Mathematical mystery structure perfects non-linear storytelling years before mainstream Hollywood adoption. Pure filmmaking artistry." 
    },
    { 
      question: "How does quiet dread surpass explosive action thrillers?", 
      answer: "Zero action sequences—pure accumulating dread destroys emotionally. Quiet devastation lingers weeks longer than any fight scene. Intellectual engagement through mystery structure compounds visceral impact. Audience complicity in gradual horrifying realization proves more unsettling than supernatural horror or graphic violence." 
    },
    { 
      question: "How authentic is Middle East conflict portrayal?", 
      answer: "Based directly on Lebanese Civil War realities without Western simplification. Unflinching refugee crisis and militia dynamics portrayal shocks. No heroic narratives—pure human desperation across factions. Mathematical family discovery structure universalizes specific conflict horror, making geopolitical tragedy accessible to global audiences." 
    }
  ],

  'The Handmaiden': [
    { 
      question: "Is this Park Chan-wook's most sensual cinematic achievement?", 
      answer: "Erotic deception transforms into genuine love across revolutionary four-timeline structure. Initial con-artist manipulation evolves into authentic connection defying genre expectations. Victorian novel adaptation Koreanized brilliantly. Sensuality serves narrative complexity rather than exploitation, elevating erotic thriller into high art territory." 
    },
    { 
      question: "How many structural twists completely reframe the narrative?", 
      answer: "Mind-bending architecture where every revelation reframes previous acts entirely. Four perspectives reveal deception layers exponentially. Victorian source material Koreanized through cultural specificity while preserving core genius. Audience orientation constantly recalibrated equals Oldboy revelation impact multiplied across entire runtime." 
    },
    { 
      question: "Why faced global censorship despite critical acclaim?", 
      answer: "Explicit erotic sequences pushed boundaries beyond most art cinema. Multiple countries heavily censored or banned outright. Still achieved #1 Park Chan-wook ranking among international critics. Commercial success despite controversy proves artistic integrity transcends cultural prudishness, cementing provocative reputation." 
    },
    { 
      question: "How does it contrast tonally with brutal Oldboy?", 
      answer: "Same director delivers sensual liberation versus brutal isolation. Deception transforms into empowerment rather than destruction. Feminine gaze replaces masculine rage. Erotic awakening celebrates human connection while Oldboy mourns fractured identity. Both explore manipulation extremes from completely opposite emotional perspectives." 
    }
  ],

  'No Mercy': [
    { 
      question: "Why remains Korean cinema's most underrated revenge gem?", 
      answer: "Detective's personal vendetta corrupts institutional justice completely. Badge weaponized for revenge blurs cop/criminal boundary irreversibly. Restrained direction maximizes moral descent impact. Solitary protagonist carries moral complexity without ensemble distraction. Perfect thematic companion to flashier Vengeance Trilogy entries." 
    },
    { 
      question: "How effectively blends forensic investigation with revenge thriller?", 
      answer: "DNA evidence drives plot while personal vendetta destroys protagonist's soul. Serial killer hunt transforms detective into prey's mirror image. Forensic realism grounds supernatural-level moral horror. Procedural authenticity elevates personal tragedy beyond typical vigilante revenge fantasy narratives." 
    },
    { 
      question: "Does solo lead performance overcome ensemble expectations?", 
      answer: "Won Bin dominates completely through minimalist intensity. Single intense stare conveys entire emotional spectrum required. No supporting cast distraction allows total character immersion. Restrained physicality sells transformation from professional to monster more effectively than theatrical ensemble performances." 
    },
    { 
      question: "What establishes superior moral complexity?", 
      answer: "Justice system weaponization for personal revenge destroys detective's soul irreversibly. Institutional betrayal forces individual monstrosity mirroring Oldboy's personal betrayal response. Perfect thematic companion proving vengeance corrupts absolutely regardless of social position or institutional backing." 
    }
  ],

  'Prisoners': [
    { 
      question: "Is Hugh Jackman's desperate father scarier than Wolverine?", 
      answer: "Moral descent into torture exceeds superhero violence by lightyears. Everyman transforms into monster through believable desperation. Restrained physical performance sells psychological horror better than comic book spectacle. Audience witnesses good man choosing evil, creating deeper character study than action fantasy." 
    },
    { 
      question: "Did this establish Denis Villeneuve as Hollywood elite?", 
      answer: "Instant masterpiece debut featuring dual converging timelines perfection. Jake Gyllenhaal delivers career-best detective work. Complex morality rejects simplistic resolution. Technical mastery established director credentials years before Dune spectacle. Pure filmmaking craft transcends commercial expectations completely." 
    },
    { 
      question: "How authentic is missing child investigation portrayal?", 
      answer: "Painfully realistic police frustration rejects CSI procedural fantasy. Genuine jurisdictional conflicts and evidence dead-ends dominate. No magical technology breakthroughs—pure human desperation drives investigation. Brutal child abduction reality portrayed without sensationalism or comforting resolution." 
    },
    { 
      question: "What creates perfect Oldboy thematic parallel?", 
      answer: "Good men transform into monsters protecting daughters against institutional failure. Survival instinct equals moral destruction exactly like Dae-su's vengeance quest. Both explore civilized men discovering inner brutality when family threatened. Moral complexity matches Korean masterpiece sophistication perfectly." 
    }
  ]
};
// HELPER FUNCTIONS (Schema & Posters)
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => PARASITE_MOVIE_FAQS[movie.Title] || [];

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A intense cinematic experience.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': movieInfo?.rating || 7.5, 'bestRating': 10, 'worstRating': 1, 'ratingCount': movieInfo?.audienceScore || 100 }
    };
};

export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('violence')) types.add('graphic violence');
    });
    return Array.from(types);
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