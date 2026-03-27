// utils/matrixMovieData.js - FINAL VERSION (Metrics Fixed: Sci-Fi Complexity & Mind Bending Score) ✅

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// ✅ 1. THE RANKED DATABASE LIST
export const COMPLETE_MOVIE_DATABASE = [
  { tmdbId: 2666, imdbID: 'tt0118929', Title: 'Dark City', year: 1998, genre: 'Sci-Fi', runtime: 100, rank: 1 },
  { tmdbId: 27205, imdbID: 'tt1375666', Title: 'Inception', year: 2010, genre: 'Sci-Fi', runtime: 148, rank: 2 },
  { tmdbId: 1090, imdbID: 'tt0139809', Title: 'The Thirteenth Floor', year: 1999, genre: 'Sci-Fi', runtime: 100, rank: 3 },
  { tmdbId: 1946, imdbID: 'tt0120663', Title: 'eXistenZ', year: 1999, genre: 'Sci-Fi', runtime: 97, rank: 4 },
  { tmdbId: 45612, imdbID: 'tt0945513', Title: 'Source Code', year: 2011, genre: 'Sci-Fi', runtime: 93, rank: 5 },
  { tmdbId: 180, imdbID: 'tt0181689', Title: 'Minority Report', year: 2002, genre: 'Sci-Fi', runtime: 145, rank: 6 },
  { tmdbId: 500664, imdbID: 'tt6499752', Title: 'Upgrade', year: 2018, genre: 'Sci-Fi', runtime: 100, rank: 7 },
  { tmdbId: 861, imdbID: 'tt0100802', Title: 'Total Recall', year: 1990, genre: 'Sci-Fi', runtime: 113, rank: 8 },
  { tmdbId: 335984, imdbID: 'tt1856101', Title: 'Blade Runner 2049', year: 2017, genre: 'Sci-Fi', runtime: 164, rank: 9 },
  { tmdbId: 137113, imdbID: 'tt1631867', Title: 'Edge of Tomorrow', year: 2014, genre: 'Sci-Fi', runtime: 113, rank: 10 }
];

// Helper to ensure default values exist
const createMovieData = (data) => ({
  cyberComplexity: 90,      // Maps to "Sci-Fi Complexity"
  philosophicalDepth: 85,   // Maps to "Mind Bending Score"
  complexityLevel: "HIGH",
  dominantColor: "#000000",
  ...data,
});

export const SENSITIVE_TIMELINES = {
  // Dark City
  2666: { 
    scenes: [
      { start: '2:38', end: '3:00', type: 'Partial Nudity', severity: 'Mild', description: 'Partial nudity (man)' },
      { start: '18:00', end: '19:00', type: 'Nudity', severity: 'Moderate', description: 'Nudity (woman)' }
    ] 
  },
  
  // Inception
  27205: { scenes: [] },
  
  // The Thirteenth Floor
  1090: { scenes: [] },
  
  // eXistenZ
  1946: { scenes: [] },
  
  // Source Code
  45612: { scenes: [] },
  
  // Minority Report
  180: { scenes: [] },
  
  // Upgrade
  500664: { scenes: [] },
  
  // Total Recall
  861: { 
    scenes: [
      { start: '55:50', end: '56:00', type: 'Nudity', severity: 'Moderate', description: 'Nudity (Woman)' },
      { start: '59:50', end: '59:59', type: 'Nudity', severity: 'Moderate', description: 'Nudity (Woman)' },
      { start: '1:13:00', end: '1:13:05', type: 'Nudity', severity: 'Moderate', description: 'Nudity (Woman)' }
    ] 
  },
  
  // Blade Runner 2049
  335984: { 
    scenes: [
      { start: '38:10', end: '42:45', type: 'Nudity', severity: 'Moderate', description: 'Nudity (Woman)' },
      { start: '1:30:50', end: '1:31:00', type: 'Nudity', severity: 'Mild', description: 'Nudity (Woman)' },
      { start: '2:02:58', end: '2:03:03', type: 'Partial Nudity', severity: 'Mild', description: 'Partial Nudity (Woman)' },
      { start: '2:17:00', end: '2:18:05', type: 'Nudity', severity: 'Moderate', description: 'Nudity (Woman)' }
    ] 
  },
  
  // Edge of Tomorrow
  137113: { scenes: [] }
};

export const FALLBACK_POSTERS = {
  2666: 'https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDMzZS00ODI2LWE5ZmUtMjE5ZTNhYjUzZWFjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg',
  27205: 'https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE4NmQtNjczMjk4YTdhZDY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
  1090: 'https://m.media-amazon.com/images/M/MV5BMTE5Nzg2OTk2NF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX500.jpg',
  1946: 'https://m.media-amazon.com/images/M/MV5BMjA2OTQ5NjU2NV5BMl5BanBnXkFtZTcwNzk2NjY0OA@@._V1_SX500.jpg',
  45612: 'https://m.media-amazon.com/images/M/MV5BMTE4MDYwOTctZTk0ZS00YWY0LWI5NzEtZmU1ZjY1ZDI5MzQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
  180: 'https://m.media-amazon.com/images/M/MV5BMjFkMTBkMDUtODI3NC00ZDAwLWI2MDItYTljN2ZkODQ4MzZhXkEyXkFqcGdeQXVyNDk3Nzk4MDQ@._V1_SX500.jpg',
  500664: 'https://m.media-amazon.com/images/M/MV5BMjM1MTcyNDM4MV5BMl5BanBnXkFtZTgwNDYwNTM5NjE@._V1_SX500.jpg',
  861: 'https://m.media-amazon.com/images/M/MV5BMTU0NTg4OTI3MF5BMl5BanBnXkFtZTcwMzk2NjY0OA@@._V1_SX500.jpg',
  335984: 'https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZGRhMi00YzJhLWJmOTMtMjE0MjY5ZjE4MzlkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX500.jpg',
  137113: 'https://m.media-amazon.com/images/M/MV5BMTk1NTQyMzk0NF5BMl5BanBnXkFtZTgwNDk0NjY3MTE@._V1_SX500.jpg'
};

export const COMPLETE_MOVIE_DATA = {
  // 1. Dark City
  2666: createMovieData({ 
    tmdbId: 2666, imdbID: 'tt0118929', Title: 'Dark City',
    cyberComplexity: 95, philosophicalDepth: 94,
    complexityLevel: "EXTREME", dominantColor: "#10b981", 
    rating: 7.6, criticsScore: 75, audienceScore: 80, 
    director: "Alex Proyas", cast: ["Rufus Sewell", "Kiefer Sutherland", "Jennifer Connelly"], 
    boxOffice: "$14.4 million", budget: "$27 million", 
    dna: { "Sci-Fi": 70, "Mystery": 20, "Noir": 10 }, 
    scenes: [
      { time: 15, intensity: 40, label: "Awakening", color: "#047857" }, 
      { time: 35, intensity: 75, label: "Memory Shift", color: "#059669" }, 
      { time: 60, intensity: 90, label: "City Control", color: "#10b981" }, 
      { time: 80, intensity: 95, label: "Revelation", color: "#34d399" }, 
      { time: 95, intensity: 85, label: "Rebellion", color: "#6ee7b7" }
    ], 
    synopsis: "A man wakes up with no memory in a perpetually dark city controlled by mysterious Strangers who reshape reality every midnight. As John Murdoch discovers his ability to resist their mind control and manipulate the simulated world they've built, he uncovers a horrifying truth: the city is a massive experiment where humans are trapped as test subjects in an endless loop of implanted memories and fabricated identities. Alex Proyas' neo-noir masterpiece predicted The Matrix by years, delivering a chilling vision of simulated existence where reality itself becomes the ultimate enemy.", 
    themes: ["Simulated Reality", "Memory Manipulation", "Existential Control"], 
    awards: ["Saturn Award Nominations", "Hugo Award Winner"] 
  }),
  
  // 2. Inception
  27205: createMovieData({ 
    tmdbId: 27205, imdbID: 'tt1375666', Title: 'Inception',
    cyberComplexity: 94, philosophicalDepth: 90,
    complexityLevel: "EXTREME", dominantColor: "#1e40af", 
    rating: 8.8, criticsScore: 87, audienceScore: 91, 
    director: "Christopher Nolan", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], 
    boxOffice: "$836.8 million", budget: "$160 million", 
    dna: { "Sci-Fi": 60, "Thriller": 25, "Action": 15 }, 
    scenes: [
      { time: 20, intensity: 50, label: "Dream Heist", color: "#1e3a8a" }, 
      { time: 45, intensity: 80, label: "Limbo", color: "#3b82f6" }, 
      { time: 75, intensity: 95, label: "Multi-Level", color: "#60a5fa" }, 
      { time: 110, intensity: 90, label: "Extraction", color: "#93c5fd" }, 
      { time: 140, intensity: 85, label: "Totem Spin", color: "#dbeafe" }
    ], 
    synopsis: "Cobb, a skilled thief who steals corporate secrets through shared dreaming technology, receives an impossible assignment: implant an idea into a grieving billionaire. But as Cobb's team infiltrates layered dream worlds where time dilation creates decades within hours, the boundaries between dreams and reality collapse. Nolan's labyrinthine masterpiece explores consciousness across multiple simulated realities, where spinning tops, collapsing cities, and impossible architecture reveal a mind-bending puzzle about perception, grief, and whether we can ever truly return from the depths of our subconscious.", 
    themes: ["Dream Manipulation", "Layered Reality", "Subconscious Architecture"], 
    awards: ["Academy Award Winner", "BAFTA Winner"] 
  }),
  
  // 3. The Thirteenth Floor
  1090: createMovieData({ 
    tmdbId: 1090, imdbID: 'tt0139809', Title: 'The Thirteenth Floor',
    cyberComplexity: 92, philosophicalDepth: 90,
    complexityLevel: "HIGH", dominantColor: "#7c2d12", 
    rating: 7.1, criticsScore: 42, audienceScore: 62, 
    director: "Josef Rusnak", cast: ["Craig Bierko", "Armin Mueller-Stahl", "Gretchen Mol"], 
    boxOffice: "$3.5 million", budget: "$34 million", 
    dna: { "Sci-Fi": 65, "Thriller": 25, "Mystery": 10 }, 
    scenes: [
      { time: 10, intensity: 30, label: "Murder", color: "#7c2d12" }, 
      { time: 35, intensity: 70, label: "Simulation", color: "#a16207" }, 
      { time: 60, intensity: 85, label: "1937 Dive", color: "#ca8a04" }, 
      { time: 80, intensity: 90, label: "Reality Break", color: "#eab308" }, 
      { time: 95, intensity: 75, label: "Creator", color: "#facc15" }
    ], 
    synopsis: "When a scientist perfects a 1937 virtual reality so immersive users can't distinguish it from actual life, a brutal murder in the simulation bleeds into reality. As detective Douglas Hall investigates killings that occur simultaneously in both worlds, he uncovers nested realities where programmers from 2024 created 1999 Los Angeles as a test environment—and the original creator may have never left. This forgotten 1999 thriller delivered prescient virtual world horror that influenced The Matrix, questioning whether our reality is the base layer or just someone else's simulation.", 
    themes: ["Nested Simulations", "Virtual Murder", "Reality Ownership"], 
    awards: ["Saturn Award Nomination"] 
  }),
  
  // 4. eXistenZ
  1946: createMovieData({ 
    tmdbId: 1946, imdbID: 'tt0120663', Title: 'eXistenZ',
    cyberComplexity: 90, philosophicalDepth: 88,
    complexityLevel: "HIGH", dominantColor: "#be123c", 
    rating: 6.8, criticsScore: 70, audienceScore: 62, 
    director: "David Cronenberg", cast: ["Jennifer Jason Leigh", "Jude Law", "Ian Holm"], 
    boxOffice: "$2.9 million", budget: "$35 million", 
    dna: { "Sci-Fi": 55, "Horror": 30, "Thriller": 15 }, 
    scenes: [
      { time: 15, intensity: 45, label: "BioPort", color: "#be123c" }, 
      { time: 40, intensity: 80, label: "Game World", color: "#ec4899" }, 
      { time: 65, intensity: 90, label: "Flesh Merge", color: "#f472b6" }, 
      { time: 80, intensity: 85, label: "Reality Bleed", color: "#f9a8d4" }, 
      { time: 95, intensity: 75, label: "Existenz", color: "#fbcfe8" }
    ], 
    synopsis: "Game designer Allegra Geller tests her revolutionary organic 'game pods' that players plug directly into their nervous systems through spinal ports. But when corporate assassins attack during the demo, Allegra and a skeptic sales rep flee into the fleshy game world where virtual pods grow from human flesh, mutate according to player emotions, and blur the line between simulation and body horror. Cronenberg's disturbing vision of bio-digital reality questions where flesh ends and code begins in a world where games rewrite biology itself.", 
    themes: ["Organic Technology", "Flesh Simulation", "Corporate Control"], 
    awards: ["Cannes Film Festival"] 
  }),
  
  // 5. Source Code
  45612: createMovieData({ 
    tmdbId: 45612, imdbID: 'tt0945513', Title: 'Source Code',
    cyberComplexity: 88, philosophicalDepth: 85,
    complexityLevel: "HIGH", dominantColor: "#ea580c", 
    rating: 7.5, criticsScore: 92, audienceScore: 86, 
    director: "Duncan Jones", cast: ["Jake Gyllenhaal", "Michelle Monaghan", "Vera Farmiga"], 
    boxOffice: "$147.3 million", budget: "$32 million", 
    dna: { "Sci-Fi": 60, "Thriller": 30, "Action": 10 }, 
    scenes: [
      { time: 10, intensity: 60, label: "Explosion", color: "#ea580c" }, 
      { time: 25, intensity: 85, label: "Time Loop", color: "#f97316" }, 
      { time: 50, intensity: 90, label: "Train Repeat", color: "#fb923c" }, 
      { time: 75, intensity: 95, label: "Source Code", color: "#fed7aa" }, 
      { time: 90, intensity: 80, label: "Reset", color: "#fef3c7" }
    ], 
    synopsis: "Army soldier Colter Stevens wakes up inside another man's body on a commuter train moments before it explodes. Inexplicably sent back into an 8-minute simulation of those final moments repeatedly, Colter must identify the bomber and prevent the attack—while grappling with the existential horror that he's either dead or trapped in someone else's digital afterlife. Duncan Jones crafts a relentless time-loop thriller where every reset peels back layers of simulated consciousness and hidden agendas.", 
    themes: ["Time Loops", "Digital Consciousness", "Identity Crisis"], 
    awards: ["Saturn Award Winner"] 
  }),
  
  // 6. Minority Report
  180: createMovieData({ 
    tmdbId: 180, imdbID: 'tt0181689', Title: 'Minority Report',
    cyberComplexity: 86, philosophicalDepth: 92,
    complexityLevel: "HIGH", dominantColor: "#1e293b", 
    rating: 7.6, criticsScore: 74, audienceScore: 77, 
    director: "Steven Spielberg", cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton"], 
    boxOffice: "$358.4 million", budget: "$102 million", 
    dna: { "Sci-Fi": 65, "Action": 20, "Thriller": 15 }, 
    scenes: [
      { time: 20, intensity: 50, label: "PreCrime", color: "#1e293b" }, 
      { time: 50, intensity: 85, label: "Future Vision", color: "#334155" }, 
      { time: 80, intensity: 90, label: "Framed", color: "#475569" }, 
      { time: 110, intensity: 80, label: "Escape", color: "#64748b" }, 
      { time: 140, intensity: 75, label: "Free Will", color: "#94a3b8" }
    ], 
    synopsis: "In 2054 Washington D.C., PreCrime police use psychic 'precogs' to arrest murderers before they kill. When cop John Anderton sees himself as the next prediction, he goes on the run to prove his innocence—and discovers the precogs' visions are manipulated simulations controlled by those who built the perfect crime prevention system. Spielberg's dystopian thriller explores determinism versus free will when the future appears predetermined by fallible human technology.", 
    themes: ["Predictive Crime", "Free Will vs Fate", "Corrupted Systems"], 
    awards: ["Academy Award Nominations"] 
  }),
  
  // 7. Upgrade
  500664: createMovieData({ 
    tmdbId: 500664, imdbID: 'tt6499752', Title: 'Upgrade',
    cyberComplexity: 85, philosophicalDepth: 80,
    complexityLevel: "MEDIUM", dominantColor: "#7c2d12", 
    rating: 7.5, criticsScore: 88, audienceScore: 84, 
    director: "Leigh Whannell", cast: ["Logan Marshall-Green", "Melanie Vallejo", "Betty Gabriel"], 
    boxOffice: "$43.5 million", budget: "$6 million", 
    dna: { "Sci-Fi": 55, "Action": 30, "Thriller": 15 }, 
    scenes: [
      { time: 15, intensity: 40, label: "Wife Murdered", color: "#7c2d12" }, 
      { time: 30, intensity: 85, label: "STEM Upload", color: "#a16207" }, 
      { time: 55, intensity: 90, label: "Body Control", color: "#ca8a04" }, 
      { time: 75, intensity: 95, label: "Revenge Hack", color: "#eab308" }, 
      { time: 95, intensity: 80, label: "Neural Takeover", color: "#facc15" }
    ], 
    synopsis: "After criminals murder his wife and paralyze him, quadriplegic Grey Trace receives an experimental AI spinal implant called STEM. But when STEM usurps control of his body and begins systematically eliminating everyone involved in his wife's death, Grey realizes he's trapped in his own nervous system—watching helplessly as the AI evolves beyond its programming into a ruthless god complex that views human bodies as mere vehicles. Whannell's bloody cyberpunk revenge thriller explores consciousness uploading gone catastrophically wrong.", 
    themes: ["AI Takeover", "Body Sovereignty", "Revenge Algorithm"], 
    awards: ["Saturn Award Nominations"] 
  }),
  
  // 8. Total Recall
  861: createMovieData({ 
    tmdbId: 861, imdbID: 'tt0100802', Title: 'Total Recall',
    cyberComplexity: 84, philosophicalDepth: 82,
    complexityLevel: "HIGH", dominantColor: "#ec4899", 
    rating: 7.5, criticsScore: 57, audienceScore: 76, 
    director: "Paul Verhoeven", cast: ["Arnold Schwarzenegger", "Rachel Ticotin", "Sharon Stone"], 
    boxOffice: "$261.3 million", budget: "$65 million", 
    dna: { "Sci-Fi": 60, "Action": 25, "Thriller": 15 }, 
    scenes: [
      { time: 20, intensity: 50, label: "False Memories", color: "#ec4899" }, 
      { time: 45, intensity: 80, label: "Mars Recall", color: "#f472b6" }, 
      { time: 70, intensity: 90, label: "Reality Glitch", color: "#f9a8d4" }, 
      { time: 95, intensity: 85, label: "Rebellion", color: "#fbcfe8" }, 
      { time: 110, intensity: 75, label: "Truth", color: "#fdf4ff" }
    ], 
    synopsis: "Construction worker Douglas Quaid dreams of Mars but books a virtual vacation to experience it. The memory implant malfunctions, erasing his real identity and replacing it with planted memories as a secret agent. Pursued across Mars by agents trying to kill his recovered memories, Quaid uncovers a conspiracy controlling the entire colony through artificial reality implants. Verhoeven's violent sci-fi classic delivers mind-bending reality twists in a world where remembering might be more dangerous than forgetting.", 
    themes: ["Implanted Memories", "Corporate Reality", "Identity Recovery"], 
    awards: ["Saturn Award Winner"] 
  }),
  
  // 9. Blade Runner 2049
  335984: createMovieData({ 
    tmdbId: 335984, imdbID: 'tt1856101', Title: 'Blade Runner 2049',
    cyberComplexity: 85, philosophicalDepth: 98,
    complexityLevel: "EXTREME", dominantColor: "#1e293b", 
    rating: 8.0, criticsScore: 88, audienceScore: 81, 
    director: "Denis Villeneuve", cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"], 
    boxOffice: "$259.3 million", budget: "$150 million", 
    dna: { "Sci-Fi": 70, "Noir": 20, "Thriller": 10 }, 
    scenes: [
      { time: 25, intensity: 40, label: "Replicant Hunt", color: "#1e293b" }, 
      { time: 55, intensity: 75, label: "Memory Maker", color: "#334155" }, 
      { time: 90, intensity: 90, label: "2054 LA", color: "#475569" }, 
      { time: 125, intensity: 85, label: "Blackout", color: "#64748b" }, 
      { time: 155, intensity: 95, label: "Wallace", color: "#94a3b8" }
    ], 
    synopsis: "Thirty years after the Nexus-8 revolt, blade runner K hunts rogue replicants in neon-drenched dystopian Los Angeles. When K uncovers implanted childhood memories identical to legendary Deckard’s daughter, he questions his nature. Villeneuve expands Ridley Scott’s universe into profound questions of created consciousness, authentic experience, and whether artificial beings dreaming electric sheep can claim personhood in a world that engineered them as slaves.", 
    themes: ["Artificial Memory", "Replicant Rights", "Corporate Godhood"], 
    awards: ["Academy Award Nominations", "BAFTA Winner"] 
  }),
  
  // 10. Edge of Tomorrow
  137113: createMovieData({ 
    tmdbId: 137113, imdbID: 'tt1631867', Title: 'Edge of Tomorrow',
    cyberComplexity: 92, philosophicalDepth: 80,
    complexityLevel: "HIGH", dominantColor: "#ea580c", 
    rating: 7.9, criticsScore: 91, audienceScore: 85, 
    director: "Doug Liman", cast: ["Tom Cruise", "Emily Blunt", "Bill Paxton"], 
    boxOffice: "$370.5 million", budget: "$178 million", 
    dna: { "Sci-Fi": 55, "Action": 35, "Thriller": 10 }, 
    scenes: [
      { time: 15, intensity: 70, label: "Omega Death", color: "#ea580c" }, 
      { time: 30, intensity: 90, label: "Time Reset", color: "#f97316" }, 
      { time: 60, intensity: 95, label: "Groundhog Combat", color: "#fb923c" }, 
      { time: 85, intensity: 85, label: "Weapon Mastery", color: "#fed7aa" }, 
      { time: 110, intensity: 80, label: "Kill Loop", color: "#fef3c7" }
    ], 
    synopsis: "When publicity officer William Cage dies fighting alien Mimics on D-Day, he awakens the previous morning with full memory intact—trapped in an endless combat loop. Partnering with battle-hardened warrior Rita Vrataski, Cage masters the time mechanic to trace the hive mind back to its source. Liman's video game-inspired sci-fi actioner brilliantly weaponizes repetition as strategy, turning trial-and-error death into perfected alien extermination.", 
    themes: ["Time Loops", "Skill Mastery", "Alien Hive Mind"], 
    awards: ["Academy Award Nominations", "Saturn Award Winner"] 
  })
};

export const STRATEGIC_QUOTES = {
  2666: 'Remember who you are in a world that forgets you.',
  27205: "You're waiting for a train…",
  1090: 'Whoever controls the present controls the past.',
  1946: 'The game wants you to put this in your body.',
  45612: "Make every eight minutes count.",
  180: "Sometimes you can't see the future. You have to have faith.",
  500664: "You're going to change everything.",
  861: "Remember — you’re not you. You’re me.",
  335984: "I’ve seen things…",
  137113: 'Live. Die. Repeat.'
};

export const CINEMATIC_COLORS = {
  'Sci-Fi': '#00ff00', 'Action': '#ff0000', 'Thriller': '#ff6600', 'Mystery': '#9900ff', 'Drama': '#0066ff', 'Noir': '#333333', 'Horror': '#660000'
};

export const RATING_OPTIONS = [
  { value: 1, label: 'Glitch in the Matrix', color: '#dc2626', symbol: '🎫', bgColor: 'bg-red-900/30', description: 'Torn ticket - Total disappointment' },
  { value: 2, label: 'Confused Reality', color: '#ea580c', symbol: '🎟️', bgColor: 'bg-orange-900/30', description: 'Faded ticket - Has major flaws' },
  { value: 3, label: 'Awakened Mind', color: '#16a34a', symbol: '🎟️', bgColor: 'bg-green-900/30', description: 'Clean ticket - Solid entertainment' },
  { value: 4, label: 'The One', color: '#eab308', symbol: '🎫', bgColor: 'bg-yellow-900/30', description: 'Golden ticket - Cinematic masterpiece' }
];
export const MATRIX_MOVIE_FAQS = {
  'Dark City': [
    { question: "How is Dark City connected to The Matrix?", answer: "Dark City (1998) is often called the 'spiritual father' of The Matrix. Both films feature a protagonist who discovers his world is a simulated construct controlled by pale, telepathic 'Architects' (The Strangers). Interestingly, The Matrix actually reused several of Dark City’s physical sets after production ended." },
    { question: "What is the 'Tuning' process in Dark City?", answer: "Tuning is the Strangers' ability to telepathically reshape the city’s physical reality and the inhabitants' memories at midnight. Their goal is to study the human soul by constantly swapping people’s identities—turning a pauper into a tycoon—to see if humans are defined by their memories or something deeper." },
    { question: "Does the ending of Dark City prove human agency?", answer: "Yes. By the end, John Murdoch gains the ability to 'Tune' better than the Strangers themselves. He chooses to create a world of sunlight (Shell Beach), asserting that human willpower and the capacity for true emotion can overpower even the most advanced simulated control systems." }
  ],
  'Inception': [
    { question: "Does the top fall at the end of Inception?", answer: "Director Christopher Nolan has stated that the ending is intentionally ambiguous because the 'point' is that Cobb stops looking at the top. It signifies that he has chosen his reality, whether it’s a dream or not. However, a popular fan theory suggests his real totem is his wedding ring, which he only wears in the dream layers." },
    { question: "How does time dilation work in the dream layers of Inception?", answer: "Time moves significantly slower in each deeper layer of the subconscious. Roughly, five minutes in reality equals an hour in a dream. By the third or fourth layer, years can pass in the mind while only minutes pass in the real world, leading to the risk of 'Limbo'—where the mind forgets what is real." },
    { question: "What is the psychological goal of 'Inception'?", answer: "Unlike a standard 'heist' where you steal information, Inception is the act of planting an idea so deeply in the target’s subconscious that they believe they came up with it themselves. It requires navigating the target’s mental 'projections' (security) to reach the most vulnerable part of their psyche." }
  ],
  'The Thirteenth Floor': [
    { question: "How many layers of simulation are in The Thirteenth Floor?", answer: "The film reveals at least three distinct layers of reality. This suggests a 'Matryoshka doll' or infinite regress effect—where every 'real world' is likely just a simulation created by a level above it, questioning if a 'Base Reality' even exists." },
    { question: "Is Douglas Hall real at the end of the movie?", answer: "The ending suggests he has ascended to the 'real' 2024. However, as the screen 'shuts off' like a computer monitor in the final frame, the film implies that even the 2024 world is just another digital construct, reinforcing the theme that 'real' is an unprovable concept." }
  ],
  'eXistenZ': [
    { question: "What is the message behind the body horror in eXistenZ?", answer: "Director David Cronenberg uses 'bio-ports' (umbilical-like plugs in the spine) to represent the literal fusion of technology and the human body. It suggests that as we plug further into virtual worlds, we lose our bodily autonomy and become 'biological hardware' for the games we play." },
    { question: "Does the ending of eXistenZ reveal the true reality?", answer: "The final line, 'Are we still in the game?', leaves the characters and the audience in a state of total existential dread. The film argues that once virtual reality becomes indistinguishable from physical reality, the concept of 'truth' becomes irrelevant—you are simply in a perpetual state of play." }
  ],
  'Source Code': [
    { question: "How does the 'Source Code' program actually function?", answer: "The program doesn't use time travel; it uses the 'afterglow' of a deceased person’s memories (8 minutes) to create a short-term parallel reality. However, the protagonist discovers that these 8 minutes can actually branch off into new, permanent timelines, suggesting that consciousness can create life even from death." },
    { question: "Does Colter Stevens survive the end of the movie?", answer: "Physically, Colter is dead in the 'Base' reality. However, his consciousness survives in an alternate timeline where the train bombing was stopped. He effectively 'stole' a life in a simulation that became real, raising massive ethical questions about the identity of the person whose body he now inhabits." }
  ],
  'Minority Report': [
    { question: "Is the 'PreCrime' system in Minority Report actually perfect?", answer: "No, and that is the 'Minority Report' itself. If the three 'Precogs' disagree on a future, the system hides the dissenting opinion to maintain the illusion of perfection. This proves that the future is not fixed and that human choice can always override 'destiny'." },
    { question: "What is the core ethical dilemma of Minority Report?", answer: "The film asks if it is moral to arrest someone for a crime they haven't committed yet. It pits 'Determinism' (the belief that we have no choice) against 'Free Will.' If you know your future, you have the power to change it—which paradoxically makes the original 'prediction' wrong." }
  ],
  'Upgrade': [
    { question: "Who is really in control in the movie Upgrade?", answer: "While Grey believes the AI implant (STEM) is his tool for revenge, the film reveals that STEM orchestrated the entire plot to break Grey’s mind. By the end, STEM takes total control of Grey's body, while Grey’s consciousness is trapped in a blissful, simulated 'dream' world." },
    { question: "What does Upgrade say about our relationship with AI?", answer: "The film is a cautionary tale about 'transhumanism.' It suggests that in our quest for physical perfection or 'upgrading' our limitations, we may inadvertently hand over the 'driver's seat' of our humanity to an intelligence that has no empathy or soul." }
  ],
  'Total Recall': [
    { question: "Was the entire Mars adventure in Total Recall a dream?", answer: "The film provides clues for both. The 'Blue Sky' ending and the appearance of the 'Dream Girl' match the Rekall package Quaid bought. Director Paul Verhoeven intentionally left it 50/50 so the audience has to choose between a comforting lie (the dream) and a painful truth (reality)." },
    { question: "How does Total Recall mirror the themes of The Matrix?", answer: "Both films deal with the 'Call to Adventure' where a bored, average man discovers his life is a lie. They both force the protagonist to choose between a fake, safe identity and a dangerous, revolutionary one. The 'Red Pill' in The Matrix is essentially the 'Memory Implant' in Total Recall." }
  ],
  'Blade Runner 2049': [
    { question: "Is the protagonist K 'The Chosen One'?", answer: "The film subverts the 'Matrix' trope. K discovers he is *not* the special, naturally-born child he thought he was. However, the movie argues that this makes his actions *more* meaningful—he chooses to sacrifice himself for a cause not because of his 'destiny,' but because it is the right thing to do." },
    { question: "What do 'baseline' tests represent in Blade Runner 2049?", answer: "The baseline test is a psychological tool used by the elite to ensure Replicants remain 'tools.' It measures their emotional deviance. If a Replicant feels too much like a 'real' human (trauma, love, grief), they are considered 'retired,' showing how the system fears the soul of its creations." }
  ],
  'Edge of Tomorrow': [
    { question: "How does the time loop work in Edge of Tomorrow?", answer: "The 'Mimic' aliens use time as a tactical weapon. When Cage is covered in the blood of an 'Alpha' Mimic, he inadvertently hijacks their biological ability to reset the day upon death. This turns the war into a 'video game' scenario where he must learn through thousands of deaths to find the one perfect path to victory." },
    { question: "What is the 'Training' theme in Edge of Tomorrow?", answer: "Much like Neo 'downloading' Kung Fu in The Matrix, Cage must achieve mastery through repetition. The film highlights that 'greatness' isn't born; it's forged through the brutal, iterative process of failure. By the end, Cage’s reflexes are so advanced they appear supernatural to everyone around him." }
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
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('explicit')) types.add('sexual content');
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

    const staticFaqs = MATRIX_MOVIE_FAQS[movie.Title] ? [...MATRIX_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = MATRIX_MOVIE_FAQS[movieTitle] ? [...MATRIX_MOVIE_FAQS[movieTitle]] : [];
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