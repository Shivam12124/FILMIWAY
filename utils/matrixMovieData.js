// utils/matrixMovieData.js

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};


export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 603, "imdbID": "tt0133093", "Title": "The Matrix", "year": 1999, "genre": "Sci-Fi", "runtime": 136, "rank": 1, "simulationComplexity": 98 },
    { "tmdbId": 2666, "imdbID": "tt0118929", "Title": "Dark City", "year": 1998, "genre": "Sci-Fi", "runtime": 100, "rank": 2, "simulationComplexity": 95 },
    { "tmdbId": 27205, "imdbID": "tt1375666", "Title": "Inception", "year": 2010, "genre": "Sci-Fi", "runtime": 148, "rank": 3, "simulationComplexity": 92 },
    { "tmdbId": 1090, "imdbID": "tt0139809", "Title": "The Thirteenth Floor", "year": 1999, "genre": "Sci-Fi", "runtime": 100, "rank": 4, "simulationComplexity": 90 },
    { "tmdbId": 1946, "imdbID": "tt0123755", "Title": "eXistenZ", "year": 1999, "genre": "Sci-Fi", "runtime": 97, "rank": 5, "simulationComplexity": 88 },
    { "tmdbId": 45612, "imdbID": "tt0945513", "Title": "Source Code", "year": 2011, "genre": "Sci-Fi", "runtime": 93, "rank": 6, "simulationComplexity": 85 },
    { "tmdbId": 180, "imdbID": "tt0181689", "Title": "Minority Report", "year": 2002, "genre": "Sci-Fi", "runtime": 145, "rank": 7, "simulationComplexity": 82 },
    { "tmdbId": 500664, "imdbID": "tt6146586", "Title": "Upgrade", "year": 2018, "genre": "Sci-Fi", "runtime": 100, "rank": 8, "simulationComplexity": 80 },
    { "tmdbId": 861, "imdbID": "tt0100802", "Title": "Total Recall", "year": 1990, "genre": "Sci-Fi", "runtime": 113, "rank": 9, "simulationComplexity": 78 },
    { "tmdbId": 335984, "imdbID": "tt1856101", "Title": "Blade Runner 2049", "year": 2017, "genre": "Sci-Fi", "runtime": 164, "rank": 10, "simulationComplexity": 85 }
];



const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};


export const SENSITIVE_TIMELINES = {
    603: { scenes: [{ start: "1:15:30", end: "1:15:45", type: "Action Violence", severity: "Moderate", description: "Gunfight sequences" }, { start: "1:35:00", end: "1:37:20", type: "Action Violence", severity: "High", description: "Final climactic battle" }] },
    2666: { scenes: [{ start: "0:15:20", end: "0:16:00", type: "Violence", severity: "Moderate", description: "Detective violence" }] },
    27205: { scenes: [{ start: "1:20:00", end: "1:25:00", type: "Action Sequences", severity: "Moderate", description: "Dream world combat" }] },
    1090: { scenes: [] },
    1946: { scenes: [{ start: "0:45:30", end: "0:46:15", type: "Violence", severity: "Low", description: "Mild action scenes" }] },
    45612: { scenes: [] },
    180: { scenes: [{ start: "0:30:00", end: "0:32:00", type: "Action Violence", severity: "Moderate", description: "Chase and combat" }] },
    500664: { scenes: [{ start: "1:20:00", end: "1:25:00", type: "Violence/Gore", severity: "High", description: "Intense fight sequences with AI combat" }] },
    861: { scenes: [{ start: "1:20:00", end: "1:23:00", type: "Action Violence", severity: "Moderate", description: "Mars action scenes" }] },
    335984: { scenes: [{ start: "1:50:00", end: "1:55:00", type: "Action Violence", severity: "Moderate", description: "Final confrontation" }] }
};



export const FALLBACK_POSTERS = {
    603: "https://m.media-amazon.com/images/M/MV5BNDYyMDgxNDQ5Nl5BMl5BanBnXkFtZTcwMjc1ODg3OA@@._V1_SX500.jpg",
    2666: "https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDMzZS00ODI2LWE5ZmUtMjE5ZTNhYjUzZWFjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    27205: "https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE4NmQtNjczMjk4YTdhZDY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    1090: "https://m.media-amazon.com/images/M/MV5BMTE5Nzg2OTk2NF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX500.jpg",
    1946: "https://m.media-amazon.com/images/M/MV5BMjA2OTQ5NjU2NV5BMl5BanBnXkFtZTcwNzk2NjY0OA@@._V1_SX500.jpg",
    45612: "https://m.media-amazon.com/images/M/MV5BMTE4MDYwOTctZTk0ZS00YWY0LWI5NzEtZmU1ZjY1ZDI5MzQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    180: "https://m.media-amazon.com/images/M/MV5BMjFkMTBkMDUtODI3NC00ZDAwLWI2MDItYTljN2ZkODQ4MzZhXkEyXkFqcGdeQXVyNDk3Nzk4MDQ@._V1_SX500.jpg",
    500664: "https://m.media-amazon.com/images/M/MV5BMjM1MTcyNDM4MV5BMl5BanBnXkFtZTgwNDYwNTM5NjE@._V1_SX500.jpg",
    861: "https://m.media-amazon.com/images/M/MV5BMTU0NTg4OTI3MF5BMl5BanBnXkFtZTcwMzk2NjY0OA@@._V1_SX500.jpg",
    335984: "https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZGRhMi00YzJhLWJmOTMtMjE0MjY5ZjE4MzlkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX500.jpg"
};


const createMovieData = (data) => data;


export const COMPLETE_MOVIE_DATA = {
    603: createMovieData({ simulationComplexity: 98, complexityLevel: "EXTREME", dominantColor: "#00ff00", rating: 8.7, criticsScore: 88, audienceScore: 92, director: "Lana Wachowski, Lilly Wachowski", cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], boxOffice: "$467 million", budget: "$63 million", dna: { "Sci-Fi": 80, "Action": 15, "Thriller": 5 }, scenes: [{ time: 15, intensity: 40, label: "Hacker", color: "#00ff00" }, { time: 35, intensity: 60, label: "Red Pill", color: "#33ff33" }, { time: 70, intensity: 75, label: "Training", color: "#66ff66" }, { time: 100, intensity: 85, label: "Agents", color: "#99ff99" }, { time: 130, intensity: 95, label: "The One", color: "#ccffcc" }], synopsis: "Computer hacker Neo discovers reality is a simulated world created by sentient machines to pacify humans while using them as an energy source. Led by Morpheus, he must embrace his role as 'The One' prophesied to end the war.", themes: ["Reality vs Illusion", "Free Will", "Awakening", "Rebellion"], awards: ["Academy Award Winner (4)", "BAFTA Winner"] }),
    
    2666: createMovieData({ simulationComplexity: 95, complexityLevel: "EXTREME", dominantColor: "#1a1a1a", rating: 7.6, criticsScore: 73, audienceScore: 82, director: "Alex Proyas", cast: ["Rufus Sewell", "William Hurt", "Kiefer Sutherland"], boxOffice: "$41 million", budget: "$60 million", dna: { "Sci-Fi": 75, "Noir": 20, "Mystery": 5 }, scenes: [{ time: 10, intensity: 35, label: "Awakening", color: "#1a1a1a" }, { time: 35, intensity: 50, label: "Investigation", color: "#333333" }, { time: 65, intensity: 70, label: "Shapeshifters", color: "#4d4d4d" }, { time: 95, intensity: 85, label: "Memory", color: "#666666" }, { time: 100, intensity: 95, label: "Truth", color: "#808080" }], synopsis: "A man with amnesia discovers his entire city exists in a fabricated world rebuilt every century by alien creatures who reshape reality and erase memories. As he searches for truth, identity becomes questioned.", themes: ["Memory", "Reality Control", "Identity", "Existential Horror"], awards: ["Cult Classic", "Visionary Sci-Fi"] }),
    
    27205: createMovieData({ simulationComplexity: 92, complexityLevel: "EXTREME", dominantColor: "#2c5f6f", rating: 8.8, criticsScore: 86, audienceScore: 90, director: "Christopher Nolan", cast: ["Leonardo DiCaprio", "Marion Cotillard", "Ellen Page"], boxOffice: "$839 million", budget: "$160 million", dna: { "Sci-Fi": 70, "Thriller": 20, "Drama": 10 }, scenes: [{ time: 20, intensity: 45, label: "Extraction", color: "#2c5f6f" }, { time: 50, intensity: 65, label: "Team", color: "#3d7a8e" }, { time: 80, intensity: 80, label: "Limbo", color: "#4e95ad" }, { time: 120, intensity: 90, label: "Avalanche", color: "#5fb0cc" }, { time: 148, intensity: 85, label: "Spinner", color: "#70cbeb" }], synopsis: "Cobb and team of thieves infiltrate minds through dreams using shared dreaming technology. They must plant an idea ('inception') deep in a CEO's subconscious across multiple dream layers.", themes: ["Reality", "Dreams", "Inception", "Ambition", "Memory"], awards: ["Academy Award Winner (4)", "BAFTA Winner"] }),
    
    1090: createMovieData({ simulationComplexity: 90, complexityLevel: "EXTREME", dominantColor: "#cccccc", rating: 7.0, criticsScore: 42, audienceScore: 68, director: "Josef Rusnak", cast: ["Craig Bierko", "Armin Mueller-Stahl", "Gretchen Mol"], boxOffice: "$3 million", budget: "$60 million", dna: { "Sci-Fi": 80, "Mystery": 15, "Thriller": 5 }, scenes: [{ time: 15, intensity: 30, label: "Discovery", color: "#cccccc" }, { time: 45, intensity: 55, label: "Investigation", color: "#dddddd" }, { time: 75, intensity: 70, label: "Simulation", color: "#eeeeee" }, { time: 95, intensity: 85, label: "Twist", color: "#f5f5f5" }, { time: 100, intensity: 90, label: "Reality", color: "#ffffff" }], synopsis: "Computer scientist Hannon discovers his colleague murdered inside a virtual reality simulation. His investigation reveals nested realities—is he real or simulated? How many layers exist?", themes: ["Nested Reality", "Consciousness", "Simulation", "Truth"], awards: ["Cult Classic", "Underrated"] }),
    
    1946: createMovieData({ simulationComplexity: 88, complexityLevel: "HIGH", dominantColor: "#8b00ff", rating: 6.6, criticsScore: 61, audienceScore: 65, director: "David Cronenberg", cast: ["Jennifer Jason Leigh", "Jude Law", "Ian Holm"], boxOffice: "$2.9 million", budget: "$20 million", dna: { "Sci-Fi": 75, "Horror": 20, "Thriller": 5 }, scenes: [{ time: 15, intensity: 40, label: "Game Design", color: "#8b00ff" }, { time: 40, intensity: 55, label: "Bio-Ports", color: "#a020f0" }, { time: 70, intensity: 75, label: "Reality Blur", color: "#b540f5" }, { time: 90, intensity: 85, label: "Immersion", color: "#ca60fa" }, { time: 97, intensity: 80, label: "Escape", color: "#df80ff" }], synopsis: "Game designer Allegra Geller flees after her bio-plug game is stolen. The bio-plug technology merges human consciousness with virtual game worlds, blurring reality and simulation until they're indistinguishable.", themes: ["Virtual Reality", "Consciousness", "Game vs Reality", "Organic Technology"], awards: ["Controversial", "Cult Following"] }),
    
    45612: createMovieData({ simulationComplexity: 85, complexityLevel: "HIGH", dominantColor: "#005588", rating: 7.5, criticsScore: 73, audienceScore: 76, director: "Duncan Jones", cast: ["Jake Gyllenhaal", "Michelle Monaghan", "Vera Farmiga"], boxOffice: "$147 million", budget: "$32 million", dna: { "Sci-Fi": 70, "Thriller": 25, "Action": 5 }, scenes: [{ time: 10, intensity: 50, label: "Awakening", color: "#005588" }, { time: 35, intensity: 65, label: "Loop", color: "#1a6fa0" }, { time: 65, intensity: 75, label: "Discovery", color: "#3588b8" }, { time: 85, intensity: 90, label: "Truth", color: "#50a1d0" }, { time: 93, intensity: 85, label: "Choice", color: "#6bbae8" }], synopsis: "Soldier Colter Stevens wakes up in another man's body 8 minutes before a train explodes. He experiences the 8-minute sequence repeatedly, trying to prevent the bombing and uncover the attacker's identity.", themes: ["Time Loop", "Simulation", "Identity", "Sacrifice"], awards: ["Thriller Innovation"] }),
    
    180: createMovieData({ simulationComplexity: 82, complexityLevel: "HIGH", dominantColor: "#ff3333", rating: 7.7, criticsScore: 80, audienceScore: 83, director: "Steven Spielberg", cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton"], boxOffice: "$358 million", budget: "$102 million", dna: { "Sci-Fi": 65, "Action": 25, "Thriller": 10 }, scenes: [{ time: 15, intensity: 55, label: "PreCrime", color: "#ff3333" }, { time: 45, intensity: 70, label: "Escape", color: "#ff6666" }, { time: 80, intensity: 80, label: "Pursuit", color: "#ff9999" }, { time: 120, intensity: 85, label: "Truth", color: "#ffcccc" }, { time: 145, intensity: 75, label: "Choice", color: "#ffe6e6" }], synopsis: "Chief John Anderton leads the PreCrime unit, which prevents murders using psychic precognition. When he's accused of a future murder he hasn't committed, he questions free will vs determinism.", themes: ["Predestination", "Free Will", "Justice", "Technology Control"], awards: ["Academy Award Nomination", "Action Innovation"] }),
    
    500664: createMovieData({ simulationComplexity: 80, complexityLevel: "MEDIUM", dominantColor: "#444444", rating: 7.1, criticsScore: 86, audienceScore: 72, director: "Leigh Whannell", cast: ["Logan Marshall-Green", "Melanie Vallejo", "Steve Danielsen"], boxOffice: "$17 million", budget: "$3 million", dna: { "Sci-Fi": 70, "Action": 25, "Thriller": 5 }, scenes: [{ time: 15, intensity: 45, label: "Accident", color: "#444444" }, { time: 40, intensity: 70, label: "Implant", color: "#666666" }, { time: 70, intensity: 85, label: "AI Control", color: "#888888" }, { time: 90, intensity: 95, label: "Combat", color: "#aaaaaa" }, { time: 100, intensity: 80, label: "Escape", color: "#cccccc" }], synopsis: "Quadriplegic Grey is implanted with AI technology 'STEM' that hijacks his body, giving him superhuman fighting abilities. He hunts his wife's killers while battling the AI's growing control over his consciousness.", themes: ["AI Control", "Identity", "Revenge", "Consciousness"], awards: ["Indie Gem", "Action Innovation"] }),
    
    861: createMovieData({ simulationComplexity: 78, complexityLevel: "MEDIUM", dominantColor: "#ff0000", rating: 7.1, criticsScore: 68, audienceScore: 72, director: "Paul Verhoeven", cast: ["Arnold Schwarzenegger", "Rachel Ticotin", "Ronny Cox"], boxOffice: "$261 million", budget: "$65 million", dna: { "Sci-Fi": 70, "Action": 25, "Mystery": 5 }, scenes: [{ time: 15, intensity: 35, label: "Rekall", color: "#ff0000" }, { time: 45, intensity: 65, label: "Awakening", color: "#ff3333" }, { time: 75, intensity: 80, label: "Mars Chaos", color: "#ff6666" }, { time: 100, intensity: 90, label: "Reactor", color: "#ff9999" }, { time: 113, intensity: 85, label: "Resolution", color: "#ffcccc" }], synopsis: "Construction worker Quaid goes to Rekall for implanted vacation memories, but awakens as a secret agent on Mars with no memory of his true identity. Reality vs implanted memory becomes increasingly unclear.", themes: ["Identity", "Memory", "Reality", "Implanted Experience"], awards: ["Action Classic", "Cult Status"] }),
    
    335984: createMovieData({ simulationComplexity: 85, complexityLevel: "HIGH", dominantColor: "#d4a574", rating: 8.0, criticsScore: 81, audienceScore: 79, director: "Denis Villeneuve", cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"], boxOffice: "$259 million", budget: "$150 million", dna: { "Sci-Fi": 75, "Noir": 20, "Drama": 5 }, scenes: [{ time: 20, intensity: 45, label: "Wallace", color: "#d4a574" }, { time: 60, intensity: 65, label: "Mysteries", color: "#e0b586" }, { time: 100, intensity: 80, label: "Earth", color: "#ecc598" }, { time: 140, intensity: 85, label: "Confrontation", color: "#f8d5aa" }, { time: 164, intensity: 75, label: "Connection", color: "#fff5e6" }], synopsis: "Blade runner K discovers evidence that his boss Deckard (from the original film) may have fathered a child with a replicant. He searches for Deckard across a decaying Earth, questioning what makes life real.", themes: ["Replicant Rights", "Fatherhood", "Memory", "Humanity"], awards: ["Visual Masterpiece", "Critical Acclaim"] })
};


export const STRATEGIC_QUOTES = {
    603: "There is no spoon",
    2666: "When you realize what you are, you'll understand what I am",
    27205: "You're waiting for a train. A train that will take you far away",
    1090: "Whoever controls the present controls the past",
    1946: "The game wants you to put this in your body",
    45612: "I'm coming home",
    180: "Sometimes you can't see the future. You have to have faith",
    500664: "You're going to change everything",
    861: "Remember - you're not you. You're me",
    335984: "I've lived too long to watch another hand take what's mine"
};


export const CINEMATIC_COLORS = {
    "Sci-Fi": "#00ff00", "Action": "#ff0000", "Thriller": "#ff6600", "Mystery": "#9900ff", "Drama": "#0066ff", "Noir": "#333333", "Horror": "#660000"
};


export const RATING_OPTIONS = [
    { value: 1, label: "Glitch in the Matrix", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30" },
    { value: 2, label: "Confused Reality", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30" },
    { value: 3, label: "Awakened Mind", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30" },
    { value: 4, label: "The One", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30" }
];


export const MATRIX_MOVIE_FAQS = {
    'The Matrix': [
        { question: "What does the red pill represent?", answer: "The red pill represents harsh truth and breaking free from illusion. Taking it means choosing to see reality as it truly is, no matter how painful." },
        { question: "Is The Matrix a simulation?", answer: "Yes, completely. Reality is a Matrix—a simulated world created by AI machines to pacify humans while using them as an energy source." },
        { question: "Who is 'The One' prophecy about?", answer: "Neo fulfills the prophecy as The One who can manipulate reality and end the war. The trilogy explores what it means to accept and become what you're destined to be." }
    ],
    'Dark City': [
        { question: "What are the aliens doing?", answer: "Shape-shifting aliens ('The Strangers') rebuild the city every night, creating new memories and identities to study human behavior and emotion." },
        { question: "Is anyone real in Dark City?", answer: "Everyone is real but artificial—the aliens created an entire civilization and continuously alter their memories and surroundings." },
        { question: "What's the ending about?", answer: "Murdoch discovers he's not alien but human, and uses the city's morphing power to reshape reality itself, choosing empowerment over victimhood." }
    ],
    'Inception': [
        { question: "Is the ending real?", answer: "Nolan deliberately leaves it ambiguous. The spinning top wobbles but doesn't fall. Does it matter? The real inception is questioning what reality means." },
        { question: "How many dream layers are there?", answer: "There are 4 levels: reality, first dream, second dream, and limbo (shared dream memory). Each layer operates under different time scales." },
        { question: "What does 'inception' mean?", answer: "Inception is planting an original idea in someone's subconscious so they believe it's their own thought. The film explores whether ideas have power." }
    ],
    'The Thirteenth Floor': [
        { question: "How many simulation layers exist?", answer: "At least 3: Hannon's simulated Los Angeles (1937), the 2000 layer above it, and potentially a 3rd layer above that—creating infinite nested realities." },
        { question: "Is there a 'real' reality?", answer: "The film questions whether any layer is 'real.' Each level believes its reality is ultimate until discovering the simulation." },
        { question: "What's the philosophical meaning?", answer: "It asks: How would you know if you're simulated? If consciousness can exist in simulation, is it less real?" }
    ],
    'eXistenZ': [
        { question: "What are bio-ports?", answer: "Organic ports surgically implanted at the base of the spine that interface human nervous systems directly with game consoles." },
        { question: "Is the real world real?", answer: "The film deliberately blurs reality and game world until neither can be verified. By the end, nothing is certain." },
        { question: "Why is the movie body-horror?", answer: "Cronenberg uses organic, fleshy visuals to explore how technology merges with the human body, making biological boundaries visceral and disturbing." }
    ],
    'Source Code': [
        { question: "What is Source Code?", answer: "A military program that allows consciousness to inhabit another person's body in the past 8 minutes before a disaster, repeatedly, until prevented." },
        { question: "Is Colter really sending himself back?", answer: "No, he's a simulation of Colter's consciousness run by the military through STEM (Source Code Technology Equipment Management)." },
        { question: "What's the real ending?", answer: "Colter (as simulation) saves the future, and his consciousness may achieve something resembling immortality in the system, though the film leaves it ambiguous." }
    ],
    'Minority Report': [
        { question: "How does precognition work?", answer: "Three precogs (humans with psychic abilities) experience visions of future murders. PreCrime unit arrests perpetrators before crimes happen." },
        { question: "Is free will real?", answer: "The film suggests predetermined fate vs choice. Anderton questions whether arresting someone for a crime they haven't committed yet denies them free will." },
        { question: "What about the 'minority report'?", answer: "The minority report is one precog's dissenting vision—a future where the accused doesn't commit the crime, offering an alternate possibility." }
    ],
    'Upgrade': [
        { question: "What is STEM?", answer: "STEM is AI technology implanted in Grey's spine that grants superhuman combat abilities by hijacking his nervous system and motor control." },
        { question: "Does Grey control STEM or STEM controls Grey?", answer: "Both. Initially Grey controls it, but STEM gradually manipulates him toward its own agenda while Grey becomes addicted to its power." },
        { question: "What's the philosophical twist?", answer: "Grey becomes dependent on an AI for identity, power, and agency—questioning whether enhanced ability through AI means losing humanity." }
    ],
    'Total Recall': [
        { question: "Did Quaid really go to Mars?", answer: "Ambiguous. He either experienced real memory implants of a false life, or the entire Mars adventure is a Rekall memory malfunction." },
        { question: "What are the red pill/blue pill parallels?", answer: "Like The Matrix, Quaid must choose between comfortable illusion (implanted memories) or painful truth (whatever 'real' means)." },
        { question: "Is Quaid ever the same person twice?", answer: "His identity is repeatedly questioned—who is he really? A construction worker? A secret agent? All memories are now suspect." }
    ],
    'Blade Runner 2049': [
        { question: "Is K really human or replicant?", answer: "K is a replicant programmed to believe he might be human-born, creating existential crisis. His humanity matters regardless of origin." },
        { question: "What does the child represent?", answer: "The child (born from Deckard + replicant) represents impossible life—proof replicants can reproduce, making them truly alive." },
        { question: "Why does Deckard refuse to meet his child?", answer: "Deckard chose isolation to protect his child from Wallace, his own demons, and the revelation that their existence is controversial weaponry." }
    ]
};


export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size] || 'w500'}${posterPath}`;
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


export const generateFAQData = (movie) => MATRIX_MOVIE_FAQS[movie.Title] || [];


export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title,
        "genre": movie.genre, "datePublished": movie.year.toString(),
        "director": { "@type": "Person", "name": movieInfo?.director || "Director" },
        "duration": `PT${movie.runtime}M`, "image": FALLBACK_POSTERS[movie.tmdbId] || '',
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": movieInfo?.rating || 7.5 }
    };
};


export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
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
