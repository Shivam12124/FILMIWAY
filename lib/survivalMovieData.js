// utils/survivalMovieData.js - COMPLETE SURVIVAL MOVIES DATA (EXACT SAME STRUCTURE AS INCEPTION)

// ✅ TMDB API CONFIGURATION
export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: {
        small: 'w300',
        medium: 'w500',
        large: 'w780',
        original: 'original'
    }
};

// ✅ COMPLETE MOVIE DATABASE (REVERSED ORDER: 10 to 1 for collection page)
export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 127928, "imdbID": "tt1542344", "Title": "127 Hours", "year": 2010, "genre": "Drama", "runtime": 94, "rank": 1 },
    { "tmdbId": 631842, "imdbID": "tt16277242", "Title": "Society of the Snow", "year": 2023, "genre": "Drama", "runtime": 144, "rank": 2 },
    { "tmdbId": 8358, "imdbID": "tt0162222", "Title": "Cast Away", "year": 2000, "genre": "Adventure", "runtime": 143, "rank": 3 },
    { "tmdbId": 329865, "imdbID": "tt1663202", "Title": "The Revenant", "year": 2015, "genre": "Adventure", "runtime": 156, "rank": 4 },
    { "tmdbId": 286217, "imdbID": "tt3659388", "Title": "The Martian", "year": 2015, "genre": "Sci-Fi", "runtime": 144, "rank": 5 },
    { "tmdbId": 80278, "imdbID": "tt1649419", "Title": "The Impossible", "year": 2012, "genre": "Drama", "runtime": 114, "rank": 6 },
    { "tmdbId": 395990, "imdbID": "tt3758172", "Title": "Jungle", "year": 2017, "genre": "Adventure", "runtime": 115, "rank": 7 },
    { "tmdbId": 1701, "imdbID": "tt0472043", "Title": "Apocalypto", "year": 2006, "genre": "Action", "runtime": 139, "rank": 8 },
    { "tmdbId": 709648, "imdbID": "tt12262116", "Title": "13 Lives", "year": 2022, "genre": "Drama", "runtime": 147, "rank": 9 },
    { "tmdbId": 241259, "imdbID": "tt1809398", "Title": "Unbroken", "year": 2014, "genre": "Drama", "runtime": 137, "rank": 10 }
];

// ✅ TIME CONVERSION FUNCTION
const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
    }
    return 0;
};

// ✅ COMPLETE SENSITIVE TIMELINES (ONLY ADULT/SEXUAL CONTENT - MOST ARE FAMILY FRIENDLY)
export const SENSITIVE_TIMELINES = {
    127928: { scenes: [] }, // 127 Hours - Family friendly
    631842: { scenes: [] }, // Society of the Snow - Family friendly
    8358: { scenes: [] }, // Cast Away - Family friendly
    329865: { scenes: [] }, // The Revenant - Family friendly (violence but no sexual content)
    286217: { scenes: [] }, // The Martian - Family friendly
    80278: { scenes: [] }, // The Impossible - Family friendly
    395990: { scenes: [] }, // Jungle - Family friendly
    1701: { scenes: [] }, // Apocalypto - Family friendly (violence but no sexual content)
    709648: { scenes: [] }, // 13 Lives - Family friendly
    241259: { scenes: [] } // Unbroken - Family friendly
};

// ✅ FALLBACK POSTERS
export const FALLBACK_POSTERS = {
    127928: "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE4ODM3Mw@@._V1_SX500.jpg",
    631842: "https://m.media-amazon.com/images/M/MV5BYzJkZjlmMmQtMGVmYS00OGY3LTlhOTAtNzJjNzQxYWJiNDVkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX500.jpg",
    8358: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg2LWE3NWMtYTU5OTEwZDlmMjMzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    329865: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX500.jpg",
    286217: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX500.jpg",
    80278: "https://m.media-amazon.com/images/M/MV5BMjAyNzk5MzgyNl5BMl5BanBnXkFtZTcwODMyNTgzOA@@._V1_SX500.jpg",
    395990: "https://m.media-amazon.com/images/M/MV5BMjI2MDM1NzU2NV5BMl5BanBnXkFtZTgwNTM2NzQ0MzI@._V1_SX500.jpg",
    1701: "https://m.media-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX500.jpg",
    709648: "https://m.media-amazon.com/images/M/MV5BYjFkYTZjNWYtY2Y3Ny00ZmJkLTg2NGYtNzBkNzVlMWY3MzUzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX500.jpg",
    241259: "https://m.media-amazon.com/images/M/MV5BMTQxNzE4MTY1MV5BMl5BanBnXkFtZTgwNDIzNjI4MzE@._V1_SX500.jpg"
};

// ✅ COMPLETE MOVIE DATA (ALL FEATURES LIKE INCEPTION BUT WITH SURVIVABILITY INDEX)
export const COMPLETE_MOVIE_DATA = {
    127928: {
        survivabilityIndex: 95, complexityLevel: "EXTREME", dominantColor: "#dc2626", rating: 7.5, criticsScore: 93, audienceScore: 85, director: "Danny Boyle", cast: ["James Franco", "Amber Tamblyn", "Kate Mara"], boxOffice: "$60.7 million", budget: "$18 million", 
        dna: { "Drama": 60, "Thriller": 30, "Action": 10 }, 
        scenes: [{ time: 10, intensity: 30, label: "Hiking", color: "#dc2626" }, { time: 25, intensity: 50, label: "Trapped", color: "#ef4444" }, { time: 45, intensity: 75, label: "Desperation", color: "#f87171" }, { time: 65, intensity: 95, label: "Amputation", color: "#fca5a5" }, { time: 85, intensity: 60, label: "Escape", color: "#fecaca" }], 
        synopsis: "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.", 
        themes: ["Human Endurance", "Survival Instinct", "Self-Sacrifice", "Will to Live"], 
        awards: ["Academy Award Nominations", "BAFTA Winner"],
        seoDescription: "Like Inception's layered complexity, 127 Hours tests the limits of human endurance and survival instinct.",
        intensityPeak: "The narrative peaks at 65 minutes during the harrowing arm amputation scene.",
        genreComposition: "Primarily drama at 60%, enhanced by thriller tension at 30% and action sequences at 10%, creating an intense survival experience."
    },
    631842: {
        survivabilityIndex: 92, complexityLevel: "EXTREME", dominantColor: "#1e40af", rating: 7.8, criticsScore: 90, audienceScore: 88, director: "J.A. Bayona", cast: ["Enzo Vogrincic", "Agustín Pardella", "Matías Recalt"], boxOffice: "$2.1 million", budget: "$60 million", 
        dna: { "Drama": 70, "Adventure": 20, "Thriller": 10 }, 
        scenes: [{ time: 15, intensity: 25, label: "Flight", color: "#1e40af" }, { time: 30, intensity: 85, label: "Crash", color: "#3b82f6" }, { time: 60, intensity: 70, label: "Search", color: "#60a5fa" }, { time: 90, intensity: 90, label: "Avalanche", color: "#93c5fd" }, { time: 120, intensity: 75, label: "Rescue", color: "#dbeafe" }], 
        synopsis: "The flight of a rugby team crashes on a glacier in the Andes. The few survivors find themselves in one of the world's toughest environments to survive.", 
        themes: ["Group Survival", "Human Sacrifice", "Faith", "Brotherhood"], 
        awards: ["Venice Film Festival", "Goya Awards"],
        seoDescription: "Like Inception's emotional depth, Society of the Snow explores the bonds that keep us alive in impossible circumstances.",
        intensityPeak: "Maximum intensity at 90 minutes when the avalanche threatens the remaining survivors.",
        genreComposition: "Dominated by drama at 70%, supported by adventure elements at 20% and thriller tension at 10%."
    },
    8358: {
        survivabilityIndex: 88, complexityLevel: "HIGH", dominantColor: "#059669", rating: 7.8, criticsScore: 94, audienceScore: 90, director: "Robert Zemeckis", cast: ["Tom Hanks", "Helen Hunt", "Chris Noth"], boxOffice: "$429.6 million", budget: "$90 million", 
        dna: { "Drama": 50, "Adventure": 30, "Romance": 20 }, 
        scenes: [{ time: 20, intensity: 60, label: "Crash", color: "#059669" }, { time: 45, intensity: 40, label: "Island Life", color: "#10b981" }, { time: 70, intensity: 65, label: "Wilson", color: "#34d399" }, { time: 100, intensity: 80, label: "Raft", color: "#6ee7b7" }, { time: 130, intensity: 70, label: "Rescue", color: "#a7f3d0" }], 
        synopsis: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.", 
        themes: ["Isolation", "Adaptation", "Lost Love", "Human Resilience"], 
        awards: ["Academy Award Nomination", "Golden Globe Winner"],
        seoDescription: "Like Inception's exploration of time, Cast Away examines how isolation transforms identity and perspective.",
        intensityPeak: "Emotional peak at 100 minutes during the desperate raft journey to freedom.",
        genreComposition: "Balanced drama at 50%, adventure at 30%, and romance at 20%, creating Zemeckis' masterpiece of human endurance."
    },
    329865: {
        survivabilityIndex: 90, complexityLevel: "HIGH", dominantColor: "#0f172a", rating: 8.0, criticsScore: 78, audienceScore: 83, director: "Alejandro G. Iñárritu", cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"], boxOffice: "$533 million", budget: "$135 million", 
        dna: { "Adventure": 50, "Drama": 30, "Action": 20 }, 
        scenes: [{ time: 15, intensity: 40, label: "Hunt", color: "#0f172a" }, { time: 45, intensity: 85, label: "Bear Attack", color: "#1e293b" }, { time: 80, intensity: 70, label: "Betrayal", color: "#334155" }, { time: 120, intensity: 90, label: "River", color: "#475569" }, { time: 150, intensity: 95, label: "Revenge", color: "#64748b" }], 
        synopsis: "A frontiersman fights for survival after being mauled by a bear and left for dead by members of his own hunting team.", 
        themes: ["Revenge", "Survival", "Nature's Power", "Human Betrayal"], 
        awards: ["Academy Award Winner", "BAFTA Winner"],
        seoDescription: "Like Inception's visceral intensity, The Revenant delivers a brutal meditation on survival and revenge.",
        intensityPeak: "Climactic intensity at 150 minutes during the final confrontation between Glass and Fitzgerald.",
        genreComposition: "Adventure-driven at 50%, enriched by dramatic elements at 30% and action sequences at 20%."
    },
    286217: {
        survivabilityIndex: 85, complexityLevel: "MEDIUM", dominantColor: "#dc2626", rating: 8.0, criticsScore: 91, audienceScore: 92, director: "Ridley Scott", cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"], boxOffice: "$630.2 million", budget: "$108 million", 
        dna: { "Sci-Fi": 60, "Adventure": 25, "Drama": 15 }, 
        scenes: [{ time: 15, intensity: 50, label: "Storm", color: "#dc2626" }, { time: 45, intensity: 30, label: "Potatoes", color: "#ef4444" }, { time: 80, intensity: 65, label: "Communication", color: "#f87171" }, { time: 120, intensity: 85, label: "Rescue Plan", color: "#fca5a5" }, { time: 140, intensity: 90, label: "Launch", color: "#fecaca" }], 
        synopsis: "An astronaut becomes stranded on Mars and must rely on his ingenuity to find a way to signal to Earth that he is alive.", 
        themes: ["Scientific Problem-Solving", "Optimism", "Human Ingenuity", "International Cooperation"], 
        awards: ["Academy Award Nominations", "Golden Globe Winner"],
        seoDescription: "Like Inception's problem-solving complexity, The Martian combines science with human determination.",
        intensityPeak: "Maximum tension at 140 minutes during the dangerous rescue launch sequence.",
        genreComposition: "Science fiction at 60%, adventure at 25%, and drama at 15%, creating Scott's optimistic survival tale."
    },
    80278: {
        survivabilityIndex: 85, complexityLevel: "HIGH", dominantColor: "#0284c7", rating: 7.5, criticsScore: 81, audienceScore: 85, director: "J.A. Bayona", cast: ["Naomi Watts", "Tom Holland", "Ewan McGregor"], boxOffice: "$198.1 million", budget: "$45 million", 
        dna: { "Drama": 70, "Thriller": 20, "Adventure": 10 }, 
        scenes: [{ time: 10, intensity: 20, label: "Paradise", color: "#0284c7" }, { time: 25, intensity: 95, label: "Tsunami", color: "#0ea5e9" }, { time: 60, intensity: 80, label: "Separated", color: "#38bdf8" }, { time: 90, intensity: 70, label: "Hospital", color: "#7dd3fc" }, { time: 110, intensity: 85, label: "Reunion", color: "#bae6fd" }], 
        synopsis: "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.", 
        themes: ["Family Bond", "Natural Disaster", "Hope", "Human Kindness"], 
        awards: ["Academy Award Nomination", "European Film Awards"],
        seoDescription: "Like Inception's emotional core, The Impossible shows how love keeps families together through unimaginable trauma.",
        intensityPeak: "Devastating peak at 25 minutes during the tsunami's initial impact.",
        genreComposition: "Drama-focused at 70%, thriller elements at 20%, and adventure at 10%, creating Bayona's emotional masterpiece."
    },
    395990: {
        survivabilityIndex: 82, complexityLevel: "MEDIUM", dominantColor: "#15803d", rating: 6.7, criticsScore: 85, audienceScore: 75, director: "Greg McLean", cast: ["Daniel Radcliffe", "Alex Russell", "Thomas Kretschmann"], boxOffice: "$1.2 million", budget: "$10 million", 
        dna: { "Adventure": 60, "Drama": 25, "Thriller": 15 }, 
        scenes: [{ time: 15, intensity: 25, label: "Journey Begins", color: "#15803d" }, { time: 45, intensity: 50, label: "Lost", color: "#16a34a" }, { time: 70, intensity: 75, label: "Alone", color: "#22c55e" }, { time: 95, intensity: 85, label: "Desperation", color: "#4ade80" }, { time: 110, intensity: 60, label: "Rescue", color: "#86efac" }], 
        synopsis: "A group of friends join a guide for a trek into the Bolivian jungle, searching for an Indian village.", 
        themes: ["Friendship Tested", "Jungle Survival", "Trust", "Human Limits"], 
        awards: ["Australian Film Institute", "Independent Film Recognition"],
        seoDescription: "Like Inception's psychological pressure, Jungle explores how extreme conditions reveal true character.",
        intensityPeak: "Survival desperation peaks at 95 minutes when Yossi faces his darkest moment alone in the jungle.",
        genreComposition: "Adventure-centric at 60%, drama at 25%, and thriller tension at 15%."
    },
    1701: {
        survivabilityIndex: 88, complexityLevel: "HIGH", dominantColor: "#7c2d12", rating: 7.8, criticsScore: 65, audienceScore: 78, director: "Mel Gibson", cast: ["Rudy Youngblood", "Dalia Hernández", "Jonathan Brewer"], boxOffice: "$120.7 million", budget: "$40 million", 
        dna: { "Action": 60, "Adventure": 25, "Drama": 15 }, 
        scenes: [{ time: 20, intensity: 30, label: "Village Life", color: "#7c2d12" }, { time: 50, intensity: 80, label: "Capture", color: "#a16207" }, { time: 90, intensity: 70, label: "Sacrifice", color: "#ca8a04" }, { time: 120, intensity: 95, label: "Chase", color: "#eab308" }, { time: 135, intensity: 85, label: "Home", color: "#facc15" }], 
        synopsis: "As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.", 
        themes: ["Cultural Collapse", "Family Protection", "Chase Survival", "Ancient Civilizations"], 
        awards: ["Academy Award Nominations", "Saturn Award Winner"],
        seoDescription: "Like Inception's relentless pursuit, Apocalypto delivers an intense chase through ancient Mayan civilization.",
        intensityPeak: "Heart-pounding climax at 120 minutes during the extended jungle chase sequence.",
        genreComposition: "Action-dominated at 60%, adventure at 25%, and dramatic depth at 15%."
    },
    709648: {
        survivabilityIndex: 80, complexityLevel: "MEDIUM", dominantColor: "#0c4a6e", rating: 7.8, criticsScore: 75, audienceScore: 82, director: "Ron Howard", cast: ["Viggo Mortensen", "Colin Farrell", "Joel Edgerton"], boxOffice: "$2.3 million", budget: "$55 million", 
        dna: { "Drama": 60, "Thriller": 25, "Adventure": 15 }, 
        scenes: [{ time: 20, intensity: 40, label: "Cave Entry", color: "#0c4a6e" }, { time: 50, intensity: 60, label: "Trapped", color: "#0284c7" }, { time: 90, intensity: 80, label: "Diving", color: "#0ea5e9" }, { time: 120, intensity: 90, label: "Rescue", color: "#38bdf8" }, { time: 145, intensity: 70, label: "Success", color: "#7dd3fc" }], 
        synopsis: "A rescue mission is assembled in Thailand where a group of young boys and their soccer coach are trapped in a system of underground caves.", 
        themes: ["International Cooperation", "Heroism", "Cave Rescue", "Team Effort"], 
        awards: ["Critics Choice Award", "Screen Actors Guild"],
        seoDescription: "Like Inception's team dynamics, 13 Lives showcases how cooperation and expertise can achieve the impossible.",
        intensityPeak: "Maximum tension at 120 minutes during the most dangerous rescue dives.",
        genreComposition: "Drama-based at 60%, thriller suspense at 25%, and adventure elements at 15%."
    },
    241259: {
        survivabilityIndex: 88, complexityLevel: "HIGH", dominantColor: "#581c87", rating: 7.2, criticsScore: 51, audienceScore: 68, director: "Angelina Jolie", cast: ["Jack O'Connell", "Miyavi", "Domhnall Gleeson"], boxOffice: "$163.4 million", budget: "$65 million", 
        dna: { "Drama": 65, "Action": 20, "Adventure": 15 }, 
        scenes: [{ time: 15, intensity: 35, label: "Olympics", color: "#581c87" }, { time: 40, intensity: 70, label: "Plane Crash", color: "#7c3aed" }, { time: 80, intensity: 85, label: "Raft", color: "#8b5cf6" }, { time: 110, intensity: 90, label: "Prison Camp", color: "#a78bfa" }, { time: 135, intensity: 75, label: "Liberation", color: "#c4b5fd" }], 
        synopsis: "After a near-fatal plane crash in WWII, Olympian Louis Zamperini spends 47 days in a raft before he's caught by the Japanese navy.", 
        themes: ["Forgiveness", "Faith", "Endurance", "War Survival"], 
        awards: ["Academy Award Nominations", "NAACP Image Award"],
        seoDescription: "Like Inception's journey through different realities, Unbroken follows a man through multiple survival ordeals.",
        intensityPeak: "Emotional and physical peak at 110 minutes during the brutal prison camp sequences.",
        genreComposition: "Drama-heavy at 65%, action sequences at 20%, and adventure elements at 15%."
    }
};

// ✅ STRATEGIC QUOTES & COLORS (SURVIVAL THEMED)
export const STRATEGIC_QUOTES = {
    127928: "Sometimes you have to lose yourself to find yourself", 
    631842: "We came here as strangers, we leave as brothers",
    8358: "I know what I have to do now", 
    329865: "As long as you can still grab a breath, you fight", 
    286217: "I'm going to have to science the shit out of this", 
    80278: "The impossible is just an opinion", 
    395990: "When you can't walk, you crawl", 
    1701: "I am Jaguar Paw, son of Flint Sky", 
    709648: "Thirteen lives were saved", 
    241259: "A moment of pain is worth a lifetime of glory"
};

export const CINEMATIC_COLORS = {
    "Drama": "#dc2626", "Adventure": "#059669", "Thriller": "#0f172a", "Action": "#7c2d12", "Sci-Fi": "#dc2626", "Romance": "#be185d"
};

// ✅ PROFESSIONAL RATING SYSTEM (SAME AS INCEPTION)
export const RATING_OPTIONS = [
    { 
        value: 1, 
        label: "A Disappointment", 
        color: "#dc2626", 
        symbol: "🎫",
        bgColor: "bg-red-900/30",
        description: "Torn ticket - Total disappointment"
    },
    { 
        value: 2, 
        label: "Flawed", 
        color: "#ea580c", 
        symbol: "🎟️",
        bgColor: "bg-orange-900/30",
        description: "Faded ticket - Has major flaws"
    },
    { 
        value: 3, 
        label: "Worth the Ride", 
        color: "#16a34a", 
        symbol: "🎟️",
        bgColor: "bg-green-900/30",
        description: "Clean ticket - Solid entertainment"
    },
    { 
        value: 4, 
        label: "Exceptional", 
        color: "#eab308", 
        symbol: "🎫",
        bgColor: "bg-yellow-900/30",
        description: "Golden ticket - Cinematic masterpiece"
    }
];

// ✅ ENHANCED COUNTRY DETECTION (SAME AS INCEPTION)
export const detectUserCountryEnhanced = async () => {
    try {
        const geoServices = [
            'https://ipapi.co/json/',
            'https://api.country.is/',
            'https://ipinfo.io/json'
        ];
        
        for (const service of geoServices) {
            try {
                const response = await fetch(service, { 
                    timeout: 3000,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    let country = null;
                    
                    if (data.country_code) country = data.country_code;
                    else if (data.country) country = data.country;
                    else if (data.countryCode) country = data.countryCode;
                    
                    if (country) {
                        const upperCountry = country.trim().toUpperCase();
                        const validCountries = ['US', 'IN', 'GB', 'CA', 'AU', 'DE', 'BR'];
                        if (validCountries.includes(upperCountry)) {
                            return upperCountry;
                        }
                    }
                }
            } catch (error) {
                console.warn(`Geo service ${service} failed:`, error);
                continue;
            }
        }
    } catch (error) {
        console.warn('Enhanced country detection failed:', error);
    }
    
    return 'US'; // Default fallback
};

// ✅ UTILITY FUNCTIONS (NO API CALLS - SSG SAFE)
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

// ✅ FAQ GENERATION (SURVIVAL THEMED)
export const generateFAQData = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    return [
        {
            question: `Is ${movie.Title} a good survival movie?`,
            answer: `${movieInfo?.seoDescription || `Yes, ${movie.Title} is an excellent survival movie with a survivability index of ${movieInfo?.survivabilityIndex || 85}/100, testing human endurance and resilience.`}`
        },
        {
            question: `Who directed ${movie.Title} and what is it about?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.year}. ${movieInfo?.synopsis || `A compelling ${movie.genre.toLowerCase()} survival film that explores human limits.`}`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area.`
        },
        {
            question: `Does ${movie.Title} contain mature or sensitive content?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes'}. The film has ${sensitiveData.scenes.length} scenes with mature content.`
                : `No, ${movie.Title} does not contain notable mature or sensitive content and is suitable for most audiences interested in survival stories.`
        }
    ];
};

// ✅ SCHEMA GENERATION (SAME AS INCEPTION)
export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A compelling ${movie.genre.toLowerCase()} survival film`,
        "genre": movie.genre,
        "datePublished": movie.year.toString(),
        "director": {
            "@type": "Person",
            "name": movieInfo?.director || "Acclaimed Director"
        },
        "actor": movieInfo?.cast?.map(actor => ({
            "@type": "Person",
            "name": actor
        })) || [],
        "duration": `PT${movie.runtime}M`,
        "image": posterUrl,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": movieInfo?.rating || 7.0,
            "bestRating": 10,
            "worstRating": 1,
            "ratingCount": movieInfo?.audienceScore || 100
        }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
});

// ✅ SSG-SAFE DUMMY FUNCTIONS (NO API CALLS)
export const fetchMovieFromTMDB = async (tmdbId) => {
    // Return static data to avoid API errors during SSG build
    return {
        poster_path: null,
        title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie'
    };
};

export const fetchWatchProviders = async (tmdbId, region = 'US') => {
    // Return null to avoid API errors during SSG build  
    return null;
};
