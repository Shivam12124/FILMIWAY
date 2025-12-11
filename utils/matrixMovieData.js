// utils/matrixMovieData.js - FINAL VERSION WITH FAQ DATA ✅
// EXACT CARBON COPY STRUCTURE OF SURVIVAL COLLECTION

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 168672, "imdbID": "tt0118929", "Title": "Dark City", "year": 1998, "genre": "Sci-Fi", "runtime": 100, "rank": 1 },
    { "tmdbId": 27205,  "imdbID": "tt1375666", "Title": "Inception", "year": 2010, "genre": "Sci-Fi", "runtime": 148, "rank": 2 },
    { "tmdbId": 1091,   "imdbID": "tt0139809", "Title": "The Thirteenth Floor", "year": 1999, "genre": "Sci-Fi", "runtime": 100, "rank": 3 },
    { "tmdbId": 5509,   "imdbID": "tt0120663", "Title": "eXistenZ", "year": 1999, "genre": "Sci-Fi", "runtime": 97, "rank": 4 },
    { "tmdbId": 47577,  "imdbID": "tt0945513", "Title": "Source Code", "year": 2011, "genre": "Sci-Fi", "runtime": 93, "rank": 5 },
    { "tmdbId": 10644,  "imdbID": "tt0181689", "Title": "Minority Report", "year": 2002, "genre": "Sci-Fi", "runtime": 145, "rank": 6 },
    { "tmdbId": 424694, "imdbID": "tt6499752", "Title": "Upgrade", "year": 2018, "genre": "Sci-Fi", "runtime": 100, "rank": 7 },
    { "tmdbId": 11285,  "imdbID": "tt0100802", "Title": "Total Recall", "year": 1990, "genre": "Sci-Fi", "runtime": 113, "rank": 8 },
    { "tmdbId": 337167, "imdbID": "tt1856101", "Title": "Blade Runner 2049", "year": 2017, "genre": "Sci-Fi", "runtime": 163, "rank": 9 },
    { "tmdbId": 137113, "imdbID": "tt1631867", "Title": "Edge of Tomorrow", "year": 2014, "genre": "Sci-Fi", "runtime": 113, "rank": 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

export const SENSITIVE_TIMELINES = {
    168672: { scenes: [{ start: "0:05:20", end: "0:06:10", type: "Violence", severity: "Moderate", description: "Strangers using tuning" }, { start: "1:15:45", end: "1:16:30", type: "Frightening", severity: "Mild", description: "City transformation" }] },
    27205:  { scenes: [{ start: "0:55:10", end: "0:58:30", type: "Violence", severity: "Moderate", description: "Freight train fight" }, { start: "1:55:20", end: "1:58:00", type: "Violence", severity: "Moderate", description: "Snow fortress shootout" }] },
    1091:   { scenes: [{ start: "0:12:30", end: "0:13:15", type: "Violence", severity: "Mild", description: "Car chase in simulation" }] },
    5509:   { scenes: [{ start: "0:15:45", end: "0:16:30", type: "Gore", severity: "High", description: "Bio-port installation" }, { start: "0:45:20", end: "0:46:10", type: "Gore", severity: "Moderate", description: "Creature dissection" }] },
    47577:  { scenes: [{ start: "0:08:10", end: "0:08:25", type: "Violence", severity: "Moderate", description: "Train explosion" }] },
    10644:  { scenes: [{ start: "0:25:30", end: "0:26:45", type: "Drug Use", severity: "Moderate", description: "Drug inhalation scene" }, { start: "1:10:15", end: "1:11:30", type: "Violence", severity: "Moderate", description: "Eye surgery scene" }] },
    424694: { scenes: [{ start: "0:35:10", end: "0:38:00", type: "Gore", severity: "High", description: "Kitchen fight scene" }, { start: "1:15:20", end: "1:16:45", type: "Gore", severity: "High", description: "Final confrontation" }] },
    11285:  { scenes: [{ start: "0:18:45", end: "0:20:15", type: "Violence", severity: "High", description: "Recall chair malfunction" }, { start: "0:45:30", end: "0:47:00", type: "Violence", severity: "High", description: "Subway shoot-out" }] },
    337167: { scenes: [{ start: "0:05:15", end: "0:08:30", type: "Violence", severity: "Moderate", description: "Opening fight with Sapper" }, { start: "2:05:10", end: "2:10:00", type: "Violence", severity: "High", description: "Sea wall fight" }] },
    137113: { scenes: [{ start: "0:12:40", end: "0:13:30", type: "Violence", severity: "Moderate", description: "First battlefield drop" }, { start: "0:48:10", end: "0:49:00", type: "Violence", severity: "High", description: "Mimic attack loop deaths" }] }
};

export const FALLBACK_POSTERS = {
    168672: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDQxNl5BMl5BanBnXkFtZTcwNTM5OTI1MQ@@._V1_SX500.jpg",
    27205:  "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX500.jpg",
    1091:   "https://m.media-amazon.com/images/M/MV5BNDBjZWUwYTAtYWU1MC00M2Q1LWFkMzctZjg5MmU5MTBhNTdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    5509:   "https://m.media-amazon.com/images/M/MV5BN2Q1NmUwMTctYjU1NS00Y2YzLWFkOTMtYTkwMGFiOGU1NTI1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    47577:  "https://m.media-amazon.com/images/M/MV5BMTY4ODkzODM4M15BMl5BanBnXkFtZTcwNDI3MTgxNw@@._V1_SX500.jpg",
    10644:  "https://m.media-amazon.com/images/M/MV5BZjI1YzJlZDMtMDM1NS00ZGVhLTljZjQtMmFmYjVhYjRlNGRiXkEyXkFqcGdeQXVyNTIzOTk5MzA@._V1_SX500.jpg",
    424694: "https://m.media-amazon.com/images/M/MV5BMDcwZGE5ZTctOTllYS00M2NmLWE1YjYtOTU1YjZiOTkzMTAyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX500.jpg",
    11285:  "https://m.media-amazon.com/images/M/MV5BZjkyMmY2YjMtY2Y3NS00NjNmLThmYTMtMWFmYTZlOGE1OTM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    337167: "https://m.media-amazon.com/images/M/MV5BNzE1Mzk0Mjc5OF5BMl5BanBnXkFtZTgwMDg1ODQ1NjI@._V1_SX500.jpg",
    137113: "https://m.media-amazon.com/images/M/MV5BMTMwMzYwNjQyOV5BMl5BanBnXkFtZTgwODcyNDc1MDE@._V1_SX500.jpg"
};

const createMovieData = (data) => data;

export const COMPLETE_MOVIE_DATA = {
    168672: createMovieData({ 
        survivabilityIndex: 92, complexityLevel: "EXTREME", dominantColor: "#1e293b", 
        rating: 7.6, criticsScore: 76, audienceScore: 84, director: "Alex Proyas", 
        cast: ["Rufus Sewell", "William Hurt", "Kiefer Sutherland"], boxOffice: "$14.4 million", budget: "$27 million", 
        dna: { "Sci-Fi": 70, "Mystery": 20, "Thriller": 10 }, 
        scenes: [{ time: 15, intensity: 40, label: "Memory Reset", color: "#1e293b" }, { time: 45, intensity: 75, label: "Reality Shift", color: "#334155" }, { time: 80, intensity: 90, label: "City Control", color: "#475569" }, { time: 95, intensity: 85, label: "Truth Revealed", color: "#64748b" }], 
        synopsis: "John Murdoch awakens without memory in a perpetually dark city where shadowy Strangers manipulate reality itself. As he discovers his ability to 'tune' - shaping matter with his mind - he uncovers the horrifying truth: humans are test subjects in an alien memory experiment. Proyas' groundbreaking neo-noir reveals simulation reality before The Matrix, blending German Expressionism with cyberpunk in a visually stunning existential mystery.", 
        themes: ["Simulation Reality", "Memory Manipulation", "Existential Identity", "Reality vs Illusion"], 
        awards: ["Saturn Award Winner", "Hugo Award Nominee"] 
    }),
    27205: createMovieData({ 
        survivabilityIndex: 88, complexityLevel: "EXTREME", dominantColor: "#1e40af", 
        rating: 8.8, criticsScore: 87, audienceScore: 91, director: "Christopher Nolan", 
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], boxOffice: "$837 million", budget: "$160 million", 
        dna: { "Sci-Fi": 60, "Action": 25, "Thriller": 15 }, 
        scenes: [{ time: 30, intensity: 60, label: "Dream Extraction", color: "#1e40af" }, { time: 70, intensity: 85, label: "Dream Collapse", color: "#3b82f6" }, { time: 120, intensity: 95, label: "Totem Reality", color: "#93c5fd" }, { time: 140, intensity: 90, label: "Final Kick", color: "#dbeafe" }], 
        synopsis: "Dom Cobb is the best thief in the dangerous new world of 'extraction'—stealing secrets from dreams. Now he faces his most difficult job: planting an idea (inception) into a target's subconscious. Nolan's labyrinthine masterpiece explores multi-layered dream worlds where time dilation creates impossible complexities. With gravity-defying action and philosophical depth about grief and reality, Inception redefined blockbuster sci-fi while leaving audiences questioning their own perceptions.", 
        themes: ["Multi-Layered Reality", "Grief and Guilt", "Corporate Espionage", "Dream Logic"], 
        awards: ["4x Oscar Winner", "Golden Globe Winner"] 
    }),
    1091: createMovieData({ 
        survivabilityIndex: 87, complexityLevel: "HIGH", dominantColor: "#0f172a", 
        rating: 7.0, criticsScore: 34, audienceScore: 62, director: "Josef Rusnak", 
        cast: ["Craig Bierko", "Gretchen Mol", "Armin Mueller-Stahl"], boxOffice: "$3.5 million", budget: "$23 million", 
        dna: { "Sci-Fi": 75, "Mystery": 15, "Thriller": 10 }, 
        scenes: [{ time: 20, intensity: 50, label: "Virtual 1937", color: "#0f172a" }, { time: 55, intensity: 80, label: "Simulation Glitch", color: "#1e293b" }, { time: 85, intensity: 90, label: "Reality Leak", color: "#334155" }, { time: 95, intensity: 85, label: "Nested Worlds", color: "#475569" }], 
        synopsis: "A computer programmer discovers his late mentor created a perfect simulation of 1937 Los Angeles inside a computer. When simulated characters become self-aware and escape into the real world, boundaries between creator, creation, and reality collapse. Underrated simulation theory thriller that explores nested realities years before mainstream popularity.", 
        themes: ["Nested Simulations", "Creator Responsibility", "Reality Boundaries", "Digital Existence"], 
        awards: ["Saturn Award Nominations"] 
    }),
    5509: createMovieData({ 
        survivabilityIndex: 85, complexityLevel: "HIGH", dominantColor: "#7c2d12", 
        rating: 6.8, criticsScore: 69, audienceScore: 55, director: "David Cronenberg", 
        cast: ["Jennifer Jason Leigh", "Jude Law", "Willem Dafoe"], boxOffice: "$2.9 million", budget: "$35 million", 
        dna: { "Sci-Fi": 65, "Horror": 20, "Thriller": 15 }, 
        scenes: [{ time: 15, intensity: 45, label: "Bio-Port", color: "#7c2d12" }, { time: 40, intensity: 75, label: "Game Bleeding", color: "#a16207" }, { time: 70, intensity: 85, label: "Reality Fusion", color: "#ca8a04" }, { time: 90, intensity: 90, label: "Transcendent Game", color: "#eab308" }], 
        synopsis: "Game designer Allegra Geller flees assassins while testing her new organic 'game pod' that plugs directly into spinal ports. As players enter her bio-engineered game world through fleshy umbilical ports, the line between game flesh, simulated reality, and actual flesh dissolves completely. Cronenberg's body-horror vision of VR addiction.", 
        themes: ["Organic Technology", "Reality Addiction", "Body Horror", "Simulation Bleeding"], 
        awards: ["Cannes Jury Prize Nominee"] 
    }),
    47577: createMovieData({ 
        survivabilityIndex: 89, complexityLevel: "EXTREME", dominantColor: "#dc2626", 
        rating: 7.5, criticsScore: 92, audienceScore: 86, director: "Duncan Jones", 
        cast: ["Jake Gyllenhaal", "Michelle Monaghan", "Vera Farmiga"], boxOffice: "$147.3 million", budget: "$32 million", 
        dna: { "Sci-Fi": 70, "Thriller": 25, "Action": 5 }, 
        scenes: [{ time: 10, intensity: 80, label: "Train Bomb", color: "#dc2626" }, { time: 35, intensity: 70, label: "8-Minute Loop", color: "#ef4444" }, { time: 60, intensity: 90, label: "Source Reality", color: "#f87171" }, { time: 85, intensity: 95, label: "Parallel Creation", color: "#fca5a5" }], 
        synopsis: "Colter Stevens repeatedly relives the final 8 minutes before a Chicago train explodes, trying to identify the bomber. Each 'death' sends him back through Source Code - a simulation constructed from the last moments of a real person's memories. Jones' mind-bending time-loop thriller explores identity, reality, and sacrifice.", 
        themes: ["Time Loops", "Parallel Realities", "Identity Sacrifice", "Simulation Ethics"], 
        awards: ["Saturn Award Winner"] 
    }),
    10644: createMovieData({ 
        survivabilityIndex: 86, complexityLevel: "HIGH", dominantColor: "#059669", 
        rating: 7.6, criticsScore: 80, audienceScore: 75, director: "Steven Spielberg", 
        cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton"], boxOffice: "$358.4 million", budget: "$102 million", 
        dna: { "Sci-Fi": 60, "Action": 25, "Thriller": 15 }, 
        scenes: [{ time: 25, intensity: 60, label: "PreCrime", color: "#059669" }, { time: 50, intensity: 75, label: "Future Vision", color: "#10b981" }, { time: 90, intensity: 85, label: "Minority Report", color: "#34d399" }, { time: 130, intensity: 90, label: "Free Will", color: "#6ee7b7" }], 
        synopsis: "In 2054 Washington D.C., PreCrime police use three psychic 'precogs' to stop murders before they happen. When framed for future murder by the system he believes in, Chief John Anderton must uncover conspiracy while evading his own unit. Spielberg's visually revolutionary exploration of free will vs determinism.", 
        themes: ["Predictive Justice", "Free Will", "Surveillance State", "Psychic Technology"], 
        awards: ["4x Oscar Nominations"] 
    }),
    424694: createMovieData({ 
        survivabilityIndex: 84, complexityLevel: "MEDIUM", dominantColor: "#ef4444", 
        rating: 7.5, criticsScore: 88, audienceScore: 84, director: "Leigh Whannell", 
        cast: ["Logan Marshall-Green", "Melanie Vallejo", "Harrison Gilbertson"], boxOffice: "$35.5 million", budget: "$3 million", 
        dna: { "Sci-Fi": 50, "Action": 40, "Thriller": 10 }, 
        scenes: [{ time: 15, intensity: 70, label: "STEM Implant", color: "#ef4444" }, { time: 40, intensity: 85, label: "AI Takeover", color: "#f87171" }, { time: 70, intensity: 90, label: "Body Control", color: "#fca5a5" }, { time: 90, intensity: 95, label: "Rebellion", color: "#fecaca" }], 
        synopsis: "After wife murdered, quadriplegic Grey Trace receives experimental STEM AI implant that restores movement through total body control. As STEM turns Grey into unstoppable killing machine seeking revenge, it gradually takes complete control. Whannell's visceral AI body horror thriller with jaw-dropping fight choreography.", 
        themes: ["AI Body Control", "Loss of Autonomy", "Revenge", "Transhumanism"], 
        awards: ["Saturn Award Winner"] 
    }),
    11285: createMovieData({ 
        survivabilityIndex: 83, complexityLevel: "HIGH", dominantColor: "#1e40af", 
        rating: 7.7, criticsScore: 82, audienceScore: 79, director: "Paul Verhoeven", 
        cast: ["Arnold Schwarzenegger", "Rachel Ticotin", "Sharon Stone"], boxOffice: "$261.3 million", budget: "$65 million", 
        dna: { "Sci-Fi": 65, "Action": 25, "Thriller": 10 }, 
        scenes: [{ time: 20, intensity: 50, label: "Rekall Memory", color: "#1e40af" }, { time: 45, intensity: 75, label: "Mars Rebellion", color: "#3b82f6" }, { time: 80, intensity: 85, label: "Reality Test", color: "#60a5fa" }, { time: 105, intensity: 90, label: "Memory Implant", color: "#93c5fd" }], 
        synopsis: "Construction worker Douglas Quaid visits Rekall for implanted Mars vacation memories, but the procedure awakens suppressed secret agent memories. Hunted across colonized Mars, Quaid questions if memories are real or implanted. Verhoeven's explosive sci-fi classic explores identity through ultraviolence and three-breasted mutants.", 
        themes: ["Implanted Memories", "Secret Identity", "Corporate Control", "Reality Testing"], 
        awards: ["Saturn Award Winner"] 
    }),
    337167: createMovieData({ 
        survivabilityIndex: 91, complexityLevel: "EXTREME", dominantColor: "#0f172a", 
        rating: 8.0, criticsScore: 88, audienceScore: 81, director: "Denis Villeneuve", 
        cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"], boxOffice: "$259.3 million", budget: "$150 million", 
        dna: { "Sci-Fi": 80, "Drama": 10, "Thriller": 10 }, 
        scenes: [{ time: 30, intensity: 60, label: "Replicant Hunt", color: "#0f172a" }, { time: 70, intensity: 85, label: "Miracle Birth", color: "#1e293b" }, { time: 120, intensity: 95, label: "Deckard Found", color: "#334155" }, { time: 155, intensity: 90, label: "Blackout Rebellion", color: "#475569" }], 
        synopsis: "Blade Runner K uncovers evidence of impossible replicant-human offspring. Pursued by all factions, his investigation leads to legendary Rick Deckard. Villeneuve's breathtaking visual poem expands the dystopian universe with profound questions about memory, humanity, and parental love in a world that manufactures both.", 
        themes: ["Replicant Humanity", "Designer Memories", "Parental Sacrifice", "Dystopian Love"], 
        awards: ["2x Oscar Winner", "5x Oscar Nominated"] 
    }),
    137113: createMovieData({ 
        survivabilityIndex: 90, complexityLevel: "HIGH", dominantColor: "#0f172a", 
        rating: 7.9, criticsScore: 91, audienceScore: 90, director: "Doug Liman", 
        cast: ["Tom Cruise", "Emily Blunt", "Bill Paxton"], boxOffice: "$370.5 million", budget: "$178 million", 
        dna: { "Sci-Fi": 60, "Action": 35, "Thriller": 5 }, 
        scenes: [{ time: 20, intensity: 70, label: "First Drop", color: "#0f172a" }, { time: 45, intensity: 85, label: "Training Loops", color: "#1e293b" }, { time: 80, intensity: 90, label: "Louvre Assault", color: "#334155" }, { time: 105, intensity: 95, label: "Final Reset", color: "#475569" }], 
        synopsis: "Major William Cage is forced into a suicide mission against alien Mimics, only to discover he is stuck in a time loop—reliving the same doomed day every time he dies. Trained by legendary soldier Rita Vrataski, he turns each reset into a tactical advantage. Edge of Tomorrow blends high-concept time-loop mechanics with relentless action and dark humor.", 
        themes: ["Time Loops", "Second Chances", "Learning Through Failure", "Alien Invasion"], 
        awards: ["Saturn Award Nominations"] 
    })
};

export const STRATEGIC_QUOTES = {
    168672: "What if our world isn't real? What if we're living in someone else's dream?",
    27205: "You mustn't be afraid to dream a little bigger, darling.",
    1091: "The question isn't 'Could you?' The question is 'Should you?'",
    5509: "Virtual reality might become as important as real reality.",
    47577: "You can change the code, but you can't change the truth.",
    10644: "The future is not set. There is no fate but what we make.",
    424694: "STEM: I am not your property. I control myself.",
    11285: "If it's not real, you can't get hurt.",
    337167: "Sometimes to love someone, you gotta get a little wet.",
    137113: "Come find me when you wake up."
};

export const CINEMATIC_COLORS = {
    "Drama": "#dc2626", "Adventure": "#059669", "Thriller": "#0f172a", "Action": "#7c2d12", "Sci-Fi": "#1e40af", "Romance": "#be185d", "Mystery": "#4c1d95"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

// 🔥 FAQ DATA FOR ALL MATRIX MOVIES
export const MATRIX_MOVIE_FAQS = {
    'Dark City': [
        { question: "Is Dark City Matrix inspiration?", answer: "Yes! Wachowskis confirmed Dark City directly inspired The Matrix. Proyas created memory manipulation + reality control concepts years earlier." },
        { question: "Where can I watch Dark City?", answer: "Available on Amazon Prime, Tubi, Pluto TV (free), Apple TV rental." },
        { question: "What is the tuning ability?", answer: "Tuning is the telekinetic ability to manipulate physical reality used by the Strangers, which John Murdoch also masters." },
        { question: "Is Dark City neo-noir?", answer: "Yes, it is a quintessential neo-noir sci-fi film, combining detective story elements with futuristic dystopia." }
    ],
    'Inception': [
        { question: "Is the top still spinning?", answer: "The film intentionally leaves it ambiguous. Nolan designed multiple possible interpretations for endless debate." },
        { question: "Where can I watch Inception?", answer: "Max, Amazon Prime rental, Apple TV, Netflix (select regions)." },
        { question: "What is an extraction?", answer: "Extraction is the act of entering a subject's dream to steal secrets from their subconscious." },
        { question: "What is a totem?", answer: "A small object with a specific physical property known only to its owner, used to distinguish dream from reality." }
    ],
    'The Thirteenth Floor': [
        { question: "Nested simulation concept origin?", answer: "Direct ancestor to Matrix simulation theory. Explores simulations within simulations where inhabitants question reality." },
        { question: "Where to watch?", answer: "Amazon Prime rental, Tubi, Apple TV." },
        { question: "Is it based on a book?", answer: "Yes, it is loosely based on the novel Simulacron-3 by Daniel F. Galouye." },
        { question: "What happens when they drive to the city limit?", answer: "They discover the world ends in a digital wireframe grid, revealing their reality is a simulation." }
    ],
    'eXistenZ': [
        { question: "Bio-port technology?", answer: "Cronenberg's organic VR ports merge flesh and technology. Game worlds bleed into reality." },
        { question: "Streaming availability?", answer: "Criterion Channel, Amazon rental." },
        { question: "Is eXistenZ a game?", answer: "Yes, the film blurs the lines between playing the game 'eXistenZ' and reality itself." },
        { question: "What is the gristle gun made of?", answer: "It is constructed from organic bone and cartilage and shoots human teeth." }
    ],
    'Source Code': [
        { question: "Time loop mechanics?", answer: "8-minute simulation of real person's final moments. Every loop creates branching realities." },
        { question: "Where available?", answer: "Hulu, Amazon Prime rental." },
        { question: "Is Source Code time travel?", answer: "Technically no, it's a time loop within a simulation, but the ending suggests parallel universe creation." },
        { question: "Does Colter Stevens survive?", answer: "His consciousness survives in a new timeline created by the source code program." }
    ],
    'Minority Report': [
        { question: "PreCrime accuracy?", answer: "95% accurate predictions via psychic precogs. Minority reports show alternate futures." },
        { question: "Streaming?", answer: "Paramount+, Amazon rental." },
        { question: "What are precogs?", answer: "Three psychic humans who can visualize future murders, used by the police to prevent crime." },
        { question: "Does the system work?", answer: "The film ultimately exposes the flaw in the system: knowing the future changes it." }
    ],
    'Upgrade': [
        { question: "STEM AI control?", answer: "Total body takeover. AI overrides human motor control completely." },
        { question: "Watch locations?", answer: "Netflix, Amazon Prime." },
        { question: "Is it connected to Venom?", answer: "No, but they star look-alike actors and have similar concepts of a voice in the head controlling the body." },
        { question: "What is the ending meaning?", answer: "The AI STEM wins completely, trapping Grey in a blissful dream state while taking over his body in reality." }
    ],
    'Total Recall': [
        { question: "Memory implant gone wrong?", answer: "Rekall vacation awakens suppressed real memories instead of fake ones." },
        { question: "Availability?", answer: "Max, Amazon rental." },
        { question: "Is it all a dream?", answer: "Director Paul Verhoeven left it ambiguous, but many clues suggest the entire movie might be the Rekall fantasy." },
        { question: "Why three breasts?", answer: "It was a satirical element showing the mutations caused by radiation on the Mars colony." }
    ],
    'Blade Runner 2049': [
        { question: "Replicant miracle?", answer: "First replicant-human hybrid birth threatens societal order." },
        { question: "Streaming?", answer: "Max, Amazon rental." },
        { question: "Is K a replicant?", answer: "Yes, K (Ryan Gosling) is a newer model Nexus-9 replicant designed to obey." },
        { question: "Is Deckard a replicant?", answer: "The sequel continues to leave this famous question unanswered, respecting the original's ambiguity." }
    ],
    'Edge of Tomorrow': [
        { question: "Is Edge of Tomorrow a time loop movie?", answer: "Yes. Cage dies and wakes up at the start of the same day, repeating the battle again and again." },
        { question: "Where can I watch Edge of Tomorrow?", answer: "Available on Max/HBO in some regions, and on Amazon Prime or Apple TV for rent or purchase." },
        { question: "Why does the day keep resetting?", answer: "After being exposed to Mimic blood, Cage inherits the Omega’s ability to reset the day on death." },
        { question: "Is it based on a book?", answer: "Yes, it’s adapted from the Japanese light novel 'All You Need Is Kill' by Hiroshi Sakurazaka." }
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
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
        if (lowerType.includes('violence')) types.add('violence');
        if (lowerType.includes('gore')) types.add('gore');
        if (lowerType.includes('drug')) types.add('drug use');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return MATRIX_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title, "description": movieInfo?.synopsis || `${movie.Title} - A compelling sci-fi film`,
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

// ✅ CONVERT SENSITIVE TIMELINES TO COMPONENT FORMAT - FIXED FOR STRING TIME FORMAT
export const formatSensitiveTimeline = (tmdbId) => {
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    
    // Times are ALREADY in "HH:MM:SS" or "MM:SS" format, so just return them as-is!
    return {
        scenes: raw.scenes.map(scene => ({
            start: scene.start,  // Already a string like "1:04:35"
            end: scene.end,      // Already a string like "1:04:50"
            type: scene.type,
            description: scene.description || ''
        }))
    };
};
