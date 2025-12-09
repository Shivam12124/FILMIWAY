// utils/interstellarMovieData.js

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 62, "imdbID": "tt0062622", "Title": "2001: A Space Odyssey", "year": 1968, "genre": "Sci-Fi", "runtime": 149, "rank": 1, "sciFiComplexity": 98 },
    { "tmdbId": 329865, "imdbID": "tt2543164", "Title": "Arrival", "year": 2016, "genre": "Sci-Fi", "runtime": 116, "rank": 2, "sciFiComplexity": 92 },
    { "tmdbId": 686, "imdbID": "tt0118884", "Title": "Contact", "year": 1997, "genre": "Sci-Fi", "runtime": 150, "rank": 3, "sciFiComplexity": 88 },
    { "tmdbId": 2489, "imdbID": "tt0069293", "Title": "Solaris", "year": 1972, "genre": "Sci-Fi", "runtime": 167, "rank": 4, "sciFiComplexity": 90 },
    { "tmdbId": 369972, "imdbID": "tt1213641", "Title": "First Man", "year": 2018, "genre": "Drama", "runtime": 141, "rank": 5, "sciFiComplexity": 82 },
    { "tmdbId": 286217, "imdbID": "tt3659388", "Title": "The Martian", "year": 2015, "genre": "Sci-Fi", "runtime": 144, "rank": 6, "sciFiComplexity": 85 },
    { "tmdbId": 49047, "imdbID": "tt1454468", "Title": "Gravity", "year": 2013, "genre": "Sci-Fi", "runtime": 91, "rank": 7, "sciFiComplexity": 80 },
    { "tmdbId": 1272, "imdbID": "tt0448134", "Title": "Sunshine", "year": 2007, "genre": "Sci-Fi", "runtime": 107, "rank": 8, "sciFiComplexity": 85 },
    { "tmdbId": 17431, "imdbID": "tt1182345", "Title": "Moon", "year": 2009, "genre": "Sci-Fi", "runtime": 97, "rank": 9, "sciFiComplexity": 88 },
    { "tmdbId": 419704, "imdbID": "tt2935510", "Title": "Ad Astra", "year": 2019, "genre": "Sci-Fi", "runtime": 123, "rank": 10, "sciFiComplexity": 86 }
];


const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

export const SENSITIVE_TIMELINES = {
    62: { scenes: [] }, // 2001: A Space Odyssey - No sexual content
    329865: { scenes: [] }, // Arrival - No sexual content
    686: { scenes: [] }, // Contact - No sexual content
    2489: { scenes: [] }, // Solaris (1972) - No sexual content (you listed as no content)
    369972: { scenes: [] }, // First Man - No sexual content
    286217: { 
        scenes: [
            { start: "1:44:55", end: "1:45:08", type: "Partial Nudity", severity: "Mild", description: "Male buttocks visible" }
        ] 
    }, // The Martian
    49047: { scenes: [] }, // Gravity - No sexual content
    1272: { scenes: [] }, // Sunshine - No sexual content
    17431: { 
        scenes: [
            { start: "7:34", end: "7:38", type: "Partial Nudity", severity: "Mild", description: "Brief partial nudity" },
            { start: "13:30", end: "13:50", type: "Intimacy", severity: "Mild", description: "Passionate kissing, suggestive clothing (underwear)" }
        ] 
    }, // Moon (2009)
    419704: { scenes: [] } // Ad Astra - No sexual content
};


export const FALLBACK_POSTERS = {
    62: "https://m.media-amazon.com/images/M/MV5BNDYyMDgxNDQ5Nl5BMl5BanBnXkFtZTcwMjc1ODg3OA@@._V1_SX500.jpg",
    329865: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX500.jpg",
    686: "https://m.media-amazon.com/images/M/MV5BNjM0MTQ2Njg3NF5BMl5BanBnXkFtZTgwODk3NjU0NjE@._V1_SX500.jpg",
    2489: "https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDMzZS00ODI2LWE5ZmUtMjE5ZTNhYjUzZWFjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    369972: "https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE4NmQtNjczMjk4YTdhZDY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    286217: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX500.jpg",
    49047: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX500.jpg",
    1272: "https://m.media-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTcwMTk5NjQ3MQ@@._V1_SX500.jpg",
    17431: "https://m.media-amazon.com/images/M/MV5BMTk2MTQ2MzUzNV5BMl5BanBnXkFtZTgwNDYwNTM5NjE@._V1_SX500.jpg",
    419704: "https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZGRhMi00YzJhLWJmOTMtMjE0MjY5ZjE4MzlkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX500.jpg"
};

const createMovieData = (data) => data;

export const COMPLETE_MOVIE_DATA = {
    62: createMovieData({ sciFiComplexity: 98, complexityLevel: "EXTREME", dominantColor: "#000000", rating: 8.3, criticsScore: 92, audienceScore: 91, director: "Stanley Kubrick", cast: ["Keir Dullea", "Gary Lockwood", "William Sylvester"], boxOffice: "$146 million", budget: "$10.5 million", dna: { "Sci-Fi": 80, "Mystery": 15, "Adventure": 5 }, scenes: [{ time: 20, intensity: 30, label: "Dawn of Man", color: "#000000" }, { time: 45, intensity: 50, label: "Moon", color: "#1a1a1a" }, { time: 80, intensity: 70, label: "HAL", color: "#333333" }, { time: 120, intensity: 90, label: "Jupiter", color: "#4d4d4d" }, { time: 145, intensity: 95, label: "Star Gate", color: "#666666" }], synopsis: "Kubrick's visionary masterpiece explores human evolution across millions of years, triggered by alien monoliths. From prehistoric apes to Jupiter-bound astronauts battling HAL 9000, this philosophical epic asks profound questions about consciousness, technology, and humanity's cosmic destiny.", themes: ["Human Evolution", "AI", "Cosmic Mystery", "Transcendence"], awards: ["Academy Award Winner", "BAFTA Winner"] }),
    
    329865: createMovieData({ sciFiComplexity: 92, complexityLevel: "HIGH", dominantColor: "#2c5f6f", rating: 7.9, criticsScore: 94, audienceScore: 82, director: "Denis Villeneuve", cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"], boxOffice: "$203 million", budget: "$47 million", dna: { "Sci-Fi": 70, "Drama": 25, "Mystery": 5 }, scenes: [{ time: 15, intensity: 40, label: "Contact", color: "#2c5f6f" }, { time: 45, intensity: 60, label: "Language", color: "#3d7a8e" }, { time: 75, intensity: 75, label: "Time", color: "#4e95ad" }, { time: 95, intensity: 85, label: "Revelation", color: "#5fb0cc" }, { time: 110, intensity: 90, label: "Choice", color: "#70cbeb" }], synopsis: "When alien ships arrive on Earth, linguist Louise Banks discovers their circular language alters her perception of time itself, revealing future memories and forcing impossible choices about love and loss.", themes: ["Language", "Time", "Free Will", "Love"], awards: ["Academy Award Winner", "BAFTA Nominations"] }),
    
    686: createMovieData({ sciFiComplexity: 88, complexityLevel: "HIGH", dominantColor: "#1a4d66", rating: 7.5, criticsScore: 63, audienceScore: 73, director: "Robert Zemeckis", cast: ["Jodie Foster", "Matthew McConaughey", "James Woods"], boxOffice: "$171 million", budget: "$90 million", dna: { "Sci-Fi": 65, "Drama": 25, "Mystery": 10 }, scenes: [{ time: 20, intensity: 35, label: "Signal", color: "#1a4d66" }, { time: 60, intensity: 55, label: "Decoding", color: "#266685" }, { time: 100, intensity: 75, label: "Machine", color: "#3380a4" }, { time: 130, intensity: 90, label: "Journey", color: "#4099c3" }, { time: 145, intensity: 85, label: "Truth", color: "#4db3e2" }], synopsis: "SETI scientist Ellie Arroway detects an alien signal from Vega containing blueprints for a mysterious machine. Her journey to make first contact tests the boundaries between faith and science.", themes: ["Science vs Faith", "First Contact", "Truth"], awards: ["Academy Award Nomination", "Hugo Winner"] }),
    
    2489: createMovieData({ sciFiComplexity: 90, complexityLevel: "EXTREME", dominantColor: "#4a4a4a", rating: 8.0, criticsScore: 91, audienceScore: 86, director: "Andrei Tarkovsky", cast: ["Donatas Banionis", "Natalya Bondarchuk"], boxOffice: "Unknown", budget: "Unknown", dna: { "Sci-Fi": 70, "Drama": 25, "Mystery": 5 }, scenes: [{ time: 25, intensity: 35, label: "Earth", color: "#4a4a4a" }, { time: 60, intensity: 50, label: "Arrival", color: "#5c5c5c" }, { time: 100, intensity: 70, label: "Visitors", color: "#6e6e6e" }, { time: 140, intensity: 85, label: "Memory", color: "#808080" }, { time: 165, intensity: 90, label: "Return", color: "#929292" }], synopsis: "On a space station orbiting Solaris, psychologist Kris Kelvin confronts physical manifestations of his deepest memories and guilt, including his deceased wife, materialized by the planet's sentient ocean.", themes: ["Memory", "Grief", "Consciousness"], awards: ["Cannes Winner", "Grand Prix"] }),
    
    369972: createMovieData({ sciFiComplexity: 82, complexityLevel: "MEDIUM", dominantColor: "#1c1c1c", rating: 7.3, criticsScore: 88, audienceScore: 81, director: "Damien Chazelle", cast: ["Ryan Gosling", "Claire Foy", "Jason Clarke"], boxOffice: "$105 million", budget: "$59 million", dna: { "Drama": 60, "Biography": 30, "Adventure": 10 }, scenes: [{ time: 20, intensity: 40, label: "Test Pilot", color: "#1c1c1c" }, { time: 50, intensity: 60, label: "Gemini 8", color: "#2e2e2e" }, { time: 90, intensity: 55, label: "Apollo 1", color: "#404040" }, { time: 120, intensity: 85, label: "Apollo 11", color: "#525252" }, { time: 138, intensity: 95, label: "Moon", color: "#646464" }], synopsis: "Neil Armstrong's journey to the Moon is revealed as devastating personal sacrifice—lost friends, fractured family, and crushing national expectations. Shot with visceral realism using practical effects.", themes: ["Sacrifice", "Loss", "Achievement"], awards: ["Academy Award Winner", "BAFTA Nominations"] }),
    
    286217: createMovieData({ sciFiComplexity: 85, complexityLevel: "MEDIUM", dominantColor: "#c54c24", rating: 8.0, criticsScore: 91, audienceScore: 92, director: "Ridley Scott", cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"], boxOffice: "$630 million", budget: "$108 million", dna: { "Sci-Fi": 60, "Adventure": 25, "Drama": 15 }, scenes: [{ time: 15, intensity: 50, label: "Storm", color: "#c54c24" }, { time: 45, intensity: 30, label: "Potatoes", color: "#d66230" }, { time: 80, intensity: 65, label: "Communication", color: "#e7783c" }, { time: 120, intensity: 85, label: "Rescue", color: "#f88e48" }, { time: 140, intensity: 90, label: "Launch", color: "#ffa454" }], synopsis: "Stranded alone on Mars, astronaut Mark Watney must 'science the shit' out of survival—growing food, creating water, and MacGyvering 1970s tech to call home.", themes: ["Problem-Solving", "Optimism", "Ingenuity"], awards: ["Academy Award Nominations", "Golden Globe Winner"] }),
    
    49047: createMovieData({ sciFiComplexity: 80, complexityLevel: "MEDIUM", dominantColor: "#0a0a0a", rating: 7.7, criticsScore: 96, audienceScore: 80, director: "Alfonso Cuarón", cast: ["Sandra Bullock", "George Clooney"], boxOffice: "$723 million", budget: "$100 million", dna: { "Sci-Fi": 60, "Thriller": 30, "Drama": 10 }, scenes: [{ time: 5, intensity: 40, label: "Routine", color: "#0a0a0a" }, { time: 15, intensity: 90, label: "Debris", color: "#1c1c1c" }, { time: 45, intensity: 70, label: "Alone", color: "#2e2e2e" }, { time: 70, intensity: 85, label: "Fire", color: "#404040" }, { time: 88, intensity: 80, label: "Re-entry", color: "#525252" }], synopsis: "When debris obliterates their shuttle, Dr. Ryan Stone and Matt Kowalski are stranded in orbit. Cuarón's technical masterpiece captures space survival as primal rebirth.", themes: ["Survival", "Isolation", "Rebirth"], awards: ["Academy Award Winner (7)", "BAFTA Winner"] }),
    
    1272: createMovieData({ sciFiComplexity: 85, complexityLevel: "HIGH", dominantColor: "#ff8800", rating: 7.2, criticsScore: 76, audienceScore: 68, director: "Danny Boyle", cast: ["Cillian Murphy", "Chris Evans", "Rose Byrne"], boxOffice: "$32 million", budget: "$40 million", dna: { "Sci-Fi": 70, "Thriller": 25, "Horror": 5 }, scenes: [{ time: 15, intensity: 35, label: "Mercury", color: "#ff8800" }, { time: 45, intensity: 55, label: "Icarus I", color: "#ff9920" }, { time: 70, intensity: 75, label: "Descent", color: "#ffaa40" }, { time: 90, intensity: 90, label: "Sacrifice", color: "#ffbb60" }, { time: 105, intensity: 95, label: "The Sun", color: "#ffcc80" }], synopsis: "Earth's dying Sun prompts humanity's last hope—Icarus II carrying a bomb to reignite it. When the crew detects the lost Icarus I, their rescue attempt triggers madness and sabotage.", themes: ["Sacrifice", "Madness", "Obsession"], awards: ["Saturn Award Nomination", "Cult Classic"] }),
    
    17431: createMovieData({ sciFiComplexity: 88, complexityLevel: "HIGH", dominantColor: "#3d3d3d", rating: 7.8, criticsScore: 90, audienceScore: 89, director: "Duncan Jones", cast: ["Sam Rockwell", "Kevin Spacey (voice)"], boxOffice: "$9.8 million", budget: "$5 million", dna: { "Sci-Fi": 75, "Mystery": 20, "Drama": 5 }, scenes: [{ time: 15, intensity: 30, label: "Routine", color: "#3d3d3d" }, { time: 40, intensity: 60, label: "Accident", color: "#4f4f4f" }, { time: 65, intensity: 80, label: "Discovery", color: "#616161" }, { time: 85, intensity: 90, label: "Truth", color: "#737373" }, { time: 95, intensity: 75, label: "Escape", color: "#858585" }], synopsis: "Lunar miner Sam Bell nears his three-year contract's end when he discovers a horrifying truth about his mission and his own identity. Intimate sci-fi exploring consciousness and corporate exploitation.", themes: ["Identity", "Exploitation", "Isolation"], awards: ["BAFTA Winner", "Independent Spirit"] }),
    
    419704: createMovieData({ sciFiComplexity: 86, complexityLevel: "HIGH", dominantColor: "#1a1a2e", rating: 6.5, criticsScore: 83, audienceScore: 40, director: "James Gray", cast: ["Brad Pitt", "Tommy Lee Jones", "Ruth Negga"], boxOffice: "$135 million", budget: "$87.5 million", dna: { "Sci-Fi": 60, "Drama": 35, "Adventure": 5 }, scenes: [{ time: 15, intensity: 40, label: "Moon", color: "#1a1a2e" }, { time: 45, intensity: 60, label: "Mars", color: "#2c2c40" }, { time: 80, intensity: 75, label: "Neptune", color: "#3e3e52" }, { time: 105, intensity: 85, label: "Father", color: "#505064" }, { time: 120, intensity: 70, label: "Return", color: "#626276" }], synopsis: "Astronaut Roy McBride journeys to Neptune to find his missing father, whose failed mission threatens Earth. Meditative space epic exploring father-son reckoning and emotional isolation.", themes: ["Father-Son", "Isolation", "Letting Go"], awards: ["Academy Award Nomination", "Venice Film Festival"] })
};

export const STRATEGIC_QUOTES = {
    62: "My God, it's full of stars",
    329865: "Would you change things if you could see your whole life?",
    686: "I'd been waiting for this my whole life",
    2489: "We don't need other worlds. We need mirrors",
    369972: "One small step for man, one giant leap for mankind",
    286217: "I'm going to have to science the shit out of this",
    49047: "Either way, it's going to be one hell of a ride",
    1272: "What do you see?",
    17431: "I'm Sam Bell, and I'm coming home",
    419704: "We're all we've got"
};

export const CINEMATIC_COLORS = {
    "Sci-Fi": "#0891b2", "Drama": "#dc2626", "Mystery": "#7c3aed", "Thriller": "#ea580c", "Adventure": "#059669", "Biography": "#6b7280", "Horror": "#7c2d12"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30" }
];

export const INTERSTELLAR_MOVIE_FAQS = {
    '2001: A Space Odyssey': [
        { question: "What does the ending of 2001 mean?", answer: "Dave Bowman transforms through the Star Gate into the 'Star Child'—the next stage of human evolution guided by alien monoliths. Kubrick deliberately left it ambiguous." },
        { question: "Is 2001 hard to understand?", answer: "Yes, it's intentionally cryptic with minimal dialogue and symbolic imagery. It uses visual storytelling to explore human evolution, AI, and cosmic purpose." },
        { question: "Was 2001 scientifically accurate for 1968?", answer: "Remarkably yes. Kubrick consulted NASA for unprecedented realism in rotating stations, silent space, and spacecraft designs." }
    ],
    'Arrival': [
        { question: "Is Arrival based on a book?", answer: "Yes, based on Ted Chiang's 'Story of Your Life' (1998). The film stays faithful to the core themes about language, time perception, and free will." },
        { question: "How does the alien language work?", answer: "The Heptapods' circular writing represents non-linear time. As Louise learns it, she begins experiencing future memories." },
        { question: "Why does Louise make that choice?", answer: "Even knowing her daughter's future death, she chooses to experience that love and loss rather than avoid it." }
    ],
    'Contact': [
        { question: "Is Contact based on a true story?", answer: "No, it's based on Carl Sagan's 1985 novel, but draws on real SETI science and protocols." },
        { question: "Did Ellie's journey really happen?", answer: "The film intentionally leaves this ambiguous—was it real or hallucination? A meditation on faith and unprovable truths." },
        { question: "What's the science vs. faith message?", answer: "Rather than declaring one superior, it suggests both address different questions about existence and meaning." }
    ],
    'Solaris': [
        { question: "What is Solaris about?", answer: "Psychologist Kris Kelvin investigates a space station where Solaris's ocean manifests physical embodiments of crew members' deepest memories and guilt." },
        { question: "Is Solaris hard to watch?", answer: "Yes, Tarkovsky's version is deliberately slow and meditative at 167 minutes, requiring patience and contemplation." },
        { question: "1972 or 2002 version?", answer: "Tarkovsky's 1972 original is the philosophical masterpiece; Soderbergh's 2002 remake is more accessible and romantic." }
    ],
    'First Man': [
        { question: "Is First Man historically accurate?", answer: "Yes, remarkably accurate. Chazelle worked with NASA and Armstrong's family, basing it on James Hansen's authorized biography." },
        { question: "Why focus on tragedy?", answer: "The film reveals the human cost—Armstrong lost his daughter and watched friends die. His moon landing becomes personal catharsis." },
        { question: "Did he take the bracelet?", answer: "No evidence exists, but it's powerful symbolic representation of his private grief and the mission's personal meaning." }
    ],
    'The Martian': [
        { question: "Is The Martian scientifically accurate?", answer: "Mostly yes. NASA consulted. Main liberty: Mars's thin atmosphere can't generate the opening storm's danger." },
        { question: "Could someone survive on Mars?", answer: "With right equipment, much is theoretically possible, but psychological toll and real challenges would be exponentially harder." },
        { question: "How long was Watney stranded?", answer: "Approximately 560 sols (Martian days), about 575 Earth days or 18 months." }
    ],
    'Gravity': [
        { question: "Is Gravity scientifically accurate?", answer: "Visuals and physics mostly right, but stations aren't close enough to travel between, and orbital mechanics are simplified." },
        { question: "How was it filmed?", answer: "Revolutionary techniques: actors in rigs, LED cube environments, robot cameras. Most is CGI except Sandra Bullock's face." },
        { question: "What does it symbolize?", answer: "Rebirth metaphor—Ryan Stone's journey from emotional death back to choosing life, paralleling literal return to Earth." }
    ],
    'Sunshine': [
        { question: "Is Sunshine scientifically accurate?", answer: "The bomb-reigniting-Sun premise is scientifically implausible, but spacecraft design and psychology are relatively realistic." },
        { question: "Why does it become horror?", answer: "The deranged Icarus I captain represents how the mission's cosmic scale drives humans to madness and obsession." },
        { question: "What's it really about?", answer: "Ultimate sacrifice, psychological toll of carrying humanity's fate, and relationship with the divine/cosmic." }
    ],
    'Moon': [
        { question: "Is Moon based on a true story?", answer: "No, original sci-fi by Duncan Jones. Draws inspiration from 2001 and Solaris, exploring identity and corporate exploitation." },
        { question: "What's the twist?", answer: "Sam is a clone. The corporation creates and terminates clones every three years rather than sending workers home." },
        { question: "How did it achieve so much on $5 million?", answer: "Practical models, single set, one actor. Proves intelligent storytelling matters more than expensive effects." }
    ],
    'Ad Astra': [
        { question: "Is Ad Astra realistic?", answer: "Near-future setting feels plausible, but Neptune distance (2.7 billion miles) would be impossible with current tech." },
        { question: "Why so slow and quiet?", answer: "Deliberately meditative, reflecting Roy's emotional repression. It's about internal psychological journey using space as backdrop." },
        { question: "What does Ad Astra mean?", answer: "'To the stars' in Latin, but the film concludes humanity's destiny is in human connection, not cosmic exploration." }
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
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => INTERSTELLAR_MOVIE_FAQS[movie.Title] || [];

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
