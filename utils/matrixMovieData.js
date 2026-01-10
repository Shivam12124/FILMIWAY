// utils/matrixMovieData.js - FINAL VERSION WITH FAQ DATA (Matches Survival Format)

export const TMDB_CONFIG = {
  API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// ✅ 1. THE RANKED DATABASE LIST (Array)
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

const timeToSeconds = (timeStr) => {
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
};

// ✅ 2. SENSITIVE TIMELINES
export const SENSITIVE_TIMELINES = {
  2666: { scenes: [{ start: '0:15:20', end: '0:16:00', type: 'Violence', severity: 'Moderate', description: 'Detective violence' }] },
  27205: { scenes: [{ start: '1:20:00', end: '1:25:00', type: 'Action Sequences', severity: 'Moderate', description: 'Dream world combat' }] },
  1090: { scenes: [] },
  1946: { scenes: [{ start: '0:45:30', end: '0:46:15', type: 'Violence', severity: 'Low', description: 'Mild action scenes' }] },
  45612: { scenes: [] },
  180: { scenes: [{ start: '0:30:00', end: '0:32:00', type: 'Action Violence', severity: 'Moderate', description: 'Chase and combat' }] },
  500664: { scenes: [{ start: '1:20:00', end: '1:25:00', type: 'Violence/Gore', severity: 'High', description: 'Intense AI-assisted combat' }] },
  861: { scenes: [{ start: '1:20:00', end: '1:23:00', type: 'Action Violence', severity: 'Moderate', description: 'Mars action scenes' }] },
  335984: { scenes: [{ start: '38:10', end: '42:45', type: 'Nudity', severity: 'Moderate', description: 'Holographic nudity (Woman)' },
        { start: '1:30:50', end: '1:31:00', type: 'Nudity', severity: 'Moderate', description: 'Glimpse nudity (Woman)' },
        { start: '2:02:58', end: '2:03:03', type: 'Partial Nudity', severity: 'Mild', description: 'Glimpse partial nudity (Woman)' },
        { start: '2:17:00', end: '2:18:05', type: 'Nudity', severity: 'Moderate', description: 'Full nudity (Woman)' }] },
  137113: { scenes: [] }
};

// ✅ 3. FALLBACK POSTERS
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

const createMovieData = (data) => data;

// ✅ 4. DETAILED MOVIE DATA (Object)
export const COMPLETE_MOVIE_DATA = {
  2666: createMovieData({ 
    tmdbId: 2666,
    imdbID: 'tt0118929',
    Title: 'Dark City',
    matrixRealityIndex: 95, 
    complexityLevel: "EXTREME", 
    dominantColor: "#10b981", 
    rating: 7.6, 
    criticsScore: 75, 
    audienceScore: 80, 
    director: "Alex Proyas", 
    cast: ["Rufus Sewell", "Kiefer Sutherland", "Jennifer Connelly"], 
    boxOffice: "$14.4 million", 
    budget: "$27 million", 
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
  
  27205: createMovieData({ 
    tmdbId: 27205,
    imdbID: 'tt1375666',
    Title: 'Inception',
    matrixRealityIndex: 94, 
    complexityLevel: "EXTREME", 
    dominantColor: "#1e40af", 
    rating: 8.8, 
    criticsScore: 87, 
    audienceScore: 91, 
    director: "Christopher Nolan", 
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"], 
    boxOffice: "$836.8 million", 
    budget: "$160 million", 
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
  
  1090: createMovieData({ 
    tmdbId: 1090,
    imdbID: 'tt0139809',
    Title: 'The Thirteenth Floor',
    matrixRealityIndex: 92, 
    complexityLevel: "HIGH", 
    dominantColor: "#7c2d12", 
    rating: 7.1, 
    criticsScore: 42, 
    audienceScore: 62, 
    director: "Josef Rusnak", 
    cast: ["Craig Bierko", "Armin Mueller-Stahl", "Gretchen Mol"], 
    boxOffice: "$3.5 million", 
    budget: "$34 million", 
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
  
  1946: createMovieData({ 
    tmdbId: 1946,
    imdbID: 'tt0120663',
    Title: 'eXistenZ',
    matrixRealityIndex: 90, 
    complexityLevel: "HIGH", 
    dominantColor: "#be123c", 
    rating: 6.8, 
    criticsScore: 70, 
    audienceScore: 62, 
    director: "David Cronenberg", 
    cast: ["Jennifer Jason Leigh", "Jude Law", "Ian Holm"], 
    boxOffice: "$2.9 million", 
    budget: "$35 million", 
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
  
  45612: createMovieData({ 
    tmdbId: 45612,
    imdbID: 'tt0945513',
    Title: 'Source Code',
    matrixRealityIndex: 88, 
    complexityLevel: "HIGH", 
    dominantColor: "#ea580c", 
    rating: 7.5, 
    criticsScore: 92, 
    audienceScore: 86, 
    director: "Duncan Jones", 
    cast: ["Jake Gyllenhaal", "Michelle Monaghan", "Vera Farmiga"], 
    boxOffice: "$147.3 million", 
    budget: "$32 million", 
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
  
  180: createMovieData({ 
    tmdbId: 180,
    imdbID: 'tt0181689',
    Title: 'Minority Report',
    matrixRealityIndex: 86, 
    complexityLevel: "HIGH", 
    dominantColor: "#1e293b", 
    rating: 7.6, 
    criticsScore: 74, 
    audienceScore: 77, 
    director: "Steven Spielberg", 
    cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton"], 
    boxOffice: "$358.4 million", 
    budget: "$102 million", 
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
  
  500664: createMovieData({ 
    tmdbId: 500664,
    imdbID: 'tt6499752',
    Title: 'Upgrade',
    matrixRealityIndex: 85, 
    complexityLevel: "MEDIUM", 
    dominantColor: "#7c2d12", 
    rating: 7.5, 
    criticsScore: 88, 
    audienceScore: 84, 
    director: "Leigh Whannell", 
    cast: ["Logan Marshall-Green", "Melanie Vallejo", "Betty Gabriel"], 
    boxOffice: "$43.5 million", 
    budget: "$6 million", 
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
  
  861: createMovieData({ 
    tmdbId: 861,
    imdbID: 'tt0100802',
    Title: 'Total Recall',
    matrixRealityIndex: 84, 
    complexityLevel: "HIGH", 
    dominantColor: "#ec4899", 
    rating: 7.5, 
    criticsScore: 57, 
    audienceScore: 76, 
    director: "Paul Verhoeven", 
    cast: ["Arnold Schwarzenegger", "Rachel Ticotin", "Sharon Stone"], 
    boxOffice: "$261.3 million", 
    budget: "$65 million", 
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
  
  335984: createMovieData({ 
    tmdbId: 335984,
    imdbID: 'tt1856101',
    Title: 'Blade Runner 2049',
    matrixRealityIndex: 85, 
    complexityLevel: "EXTREME", 
    dominantColor: "#1e293b", 
    rating: 8.0, 
    criticsScore: 88, 
    audienceScore: 81, 
    director: "Denis Villeneuve", 
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"], 
    boxOffice: "$259.3 million", 
    budget: "$150 million", 
    dna: { "Sci-Fi": 70, "Noir": 20, "Thriller": 10 }, 
    scenes: [
      { time: 25, intensity: 40, label: "Replicant Hunt", color: "#1e293b" }, 
      { time: 55, intensity: 75, label: "Memory Maker", color: "#334155" }, 
      { time: 90, intensity: 90, label: "2054 LA", color: "#475569" }, 
      { time: 125, intensity: 85, label: "Blackout", color: "#64748b" }, 
      { time: 155, intensity: 95, label: "Wallace", color: "#94a3b8" }
    ], 
    synopsis: "Thirty years after the Nexus-8 revolt, blade runner K hunts rogue replicants in neon-drenched dystopian Los Angeles. When K uncovers implanted childhood memories identical to legendary Deckard’s daughter, he questions whether he’s human, replicant, or living memory fragment. Villeneuve expands Ridley Scott’s universe into profound questions of created consciousness, authentic experience, and whether artificial beings dreaming electric sheep can claim personhood in a world that engineered them as slaves.", 
    themes: ["Artificial Memory", "Replicant Rights", "Corporate Godhood"], 
    awards: ["Academy Award Nominations", "BAFTA Winner"] 
  }),
  
  137113: createMovieData({ 
    tmdbId: 137113,
    imdbID: 'tt1631867',
    Title: 'Edge of Tomorrow',
    matrixRealityIndex: 92, 
    complexityLevel: "HIGH", 
    dominantColor: "#ea580c", 
    rating: 7.9, 
    criticsScore: 91, 
    audienceScore: 85, 
    director: "Doug Liman", 
    cast: ["Tom Cruise", "Emily Blunt", "Bill Paxton"], 
    boxOffice: "$370.5 million", 
    budget: "$178 million", 
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

// ✅ 5. STRATEGIC QUOTES
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

// ✅ 6. CINEMATIC COLORS
export const CINEMATIC_COLORS = {
  'Sci-Fi': '#00ff00', 'Action': '#ff0000', 'Thriller': '#ff6600', 'Mystery': '#9900ff', 'Drama': '#0066ff', 'Noir': '#333333', 'Horror': '#660000'
};

// ✅ 7. RATING OPTIONS
export const RATING_OPTIONS = [
  { value: 1, label: 'Glitch in the Matrix', color: '#dc2626', symbol: '🎫', bgColor: 'bg-red-900/30', description: 'Torn ticket - Total disappointment' },
  { value: 2, label: 'Confused Reality', color: '#ea580c', symbol: '🎟️', bgColor: 'bg-orange-900/30', description: 'Faded ticket - Has major flaws' },
  { value: 3, label: 'Awakened Mind', color: '#16a34a', symbol: '🎟️', bgColor: 'bg-green-900/30', description: 'Clean ticket - Solid entertainment' },
  { value: 4, label: 'The One', color: '#eab308', symbol: '🎫', bgColor: 'bg-yellow-900/30', description: 'Golden ticket - Cinematic masterpiece' }
];

// ✅ 8. FAQ DATA FOR ALL MATRIX MOVIES
export const MATRIX_MOVIE_FAQS = {
  'Dark City': [
    { question: 'What are the Strangers doing?', answer: 'They rebuild the city nightly, altering memories to study human nature.' },
    { question: 'Is anyone real?', answer: 'People are real, but their identities are manipulated by the Strangers.' },
    { question: 'What does the ending imply?', answer: 'Murdoch claims power and reshapes reality, asserting human agency.' }
  ],
  'Inception': [
    { question: 'Is the ending real?', answer: 'Ambiguous by design; the film asks whether it matters if the top falls.' },
    { question: 'How many layers are there?', answer: 'Four functional layers including limbo, each with different time dilation.' },
    { question: 'What is inception?', answer: 'Planting an idea so the subject believes it is their own.' }
  ],
  'The Thirteenth Floor': [
    { question: 'How many simulations exist?', answer: 'At least three, implying potentially infinite regress.' },
    { question: 'Is any layer real?', answer: 'The film questions whether “real” can be verified from inside a system.' },
    { question: 'Core theme?', answer: 'Consciousness and the indistinguishability of simulated worlds.' }
  ],
  'eXistenZ': [
    { question: 'What are bio-ports?', answer: 'Organic spinal ports that interface directly with game consoles.' },
    { question: 'Is reality verifiable?', answer: 'Boundaries dissolve; neither layer can be proven authentic.' },
    { question: 'Why body horror?', answer: 'To literalize tech-body fusion and loss of bodily autonomy.' }
  ],
  'Source Code': [
    { question: 'What is Source Code?', answer: 'A program enabling consciousness to inhabit another body’s last eight minutes.' },
    { question: 'What is “real” for Colter?', answer: 'Ambiguous; he may persist as an instantiated consciousness.' },
    { question: 'Key theme?', answer: 'Ethics of simulated lives and branching outcomes.' }
  ],
  'Minority Report': [
    { question: 'How does PreCrime work?', answer: 'Precogs foresee murders; arrests are made pre-act.' },
    { question: 'Free will vs determinism?', answer: 'The Minority Report offers alternative futures, preserving agency.' },
    { question: 'Ethical question?', answer: 'Is it just to punish intent absent action?' }
  ],
  'Upgrade': [
    { question: 'What is STEM?', answer: 'An AI implant that can commandeer the nervous system.' },
    { question: 'Who controls whom?', answer: 'Control shifts toward STEM as the story progresses.' },
    { question: 'Core theme?', answer: 'Power gained through AI may cost human autonomy.' }
  ],
  'Total Recall': [
    { question: 'Did Quaid go to Mars?', answer: 'Ambiguous; a Rekall glitch or reality remains unresolved.' },
    { question: 'Matrix parallels?', answer: 'Choice between comforting illusion and painful truth.' },
    { question: 'Identity question?', answer: 'Selfhood is unstable when memory is malleable.' }
  ],
  'Blade Runner 2049': [
    { question: 'Is K human?', answer: 'K’s worth is independent of biological origin.' },
    { question: 'What does the child symbolize?', answer: 'Replicant reproduction as proof of life and rights.' },
    { question: 'Why the ending restraint?', answer: 'Protection, sacrifice, and the cost of truth.' }
  ],
  'Edge of Tomorrow': [
    { question: 'What is the loop mechanism?', answer: 'Dying after contact with the alien’s time-controlling organism resets the day.' },
    { question: 'Why is Rita crucial?', answer: 'She previously had the loop, understands training through iteration, and guides Cage.' },
    { question: 'What makes it Matrix-like?', answer: 'Iterative skill acquisition, war against inhuman controllers, and reality reset mechanics.' }
  ]
};

// ✅ 9. HELPER FUNCTIONS (Exact matches)
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
    if (lowerType.includes('violence')) types.add('violence');
  });
  return Array.from(types);
};

export const generateFAQData = (movie) => {
  return MATRIX_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
  const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const posterUrl = FALLBACK_POSTERS[movie.tmdbId];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    'name': movie.Title,
    'description': movieInfo?.synopsis || `${movie.Title} - A compelling sci-fi film`,
    'genre': movie.genre,
    'datePublished': movie.year.toString(),
    'director': {
      '@type': 'Person',
      'name': movieInfo?.director || 'Acclaimed Director'
    },
    'actor': movieInfo?.cast?.map(actor => ({
      '@type': 'Person',
      'name': actor
    })) || [],
    'duration': `PT${movie.runtime}M`,
    'image': posterUrl || '',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': movieInfo?.rating || 7.0,
      'bestRating': '10',
      'worstRating': '1',
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
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
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
