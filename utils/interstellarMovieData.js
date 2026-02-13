// utils/interstellarMovieData.js - COSMIC SCALE COLLECTION DATA 🌌

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1️⃣ COMPLETE_MOVIE_DATABASE (The List)
export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 62, imdbID: "tt0062622", Title: "2001: A Space Odyssey", year: 1968, genre: "Sci-Fi", runtime: 149, rank: 1 },
    { tmdbId: 329865, imdbID: "tt2543164", Title: "Arrival", year: 2016, genre: "Sci-Fi", runtime: 116, rank: 2 },
    { tmdbId: 686, imdbID: "tt0118884", Title: "Contact", year: 1997, genre: "Sci-Fi", runtime: 150, rank: 3 },
    { tmdbId: 593, imdbID: "tt0069293", Title: "Solaris", year: 1972, genre: "Sci-Fi", runtime: 167, rank: 4 },
    { tmdbId: 369972, imdbID: "tt1213641", Title: "First Man", year: 2018, genre: "Drama", runtime: 141, rank: 5 },
    { tmdbId: 286217, imdbID: "tt3659388", Title: "The Martian", year: 2015, genre: "Sci-Fi", runtime: 144, rank: 6 },
    { tmdbId: 49047, imdbID: "tt1454468", Title: "Gravity", year: 2013, genre: "Sci-Fi", runtime: 91, rank: 7 },
    { tmdbId: 1272, imdbID: "tt0448134", Title: "Sunshine", year: 2007, genre: "Sci-Fi", runtime: 107, rank: 8 },
    { tmdbId: 17431, imdbID: "tt1182345", Title: "Moon", year: 2009, genre: "Sci-Fi", runtime: 97, rank: 9 },
    { tmdbId: 419704, imdbID: "tt2935510", Title: "Ad Astra", year: 2019, genre: "Sci-Fi", runtime: 123, rank: 10 }
];

// 🔥 VITAL EXPORT FOR BUILD 🔥
export const INTERSTELLAR_MOVIES = COMPLETE_MOVIE_DATABASE;

// ✅ HELPER: Cosmic Metrics
const createMovieData = (data) => ({
    cosmicScale: 90,    // The "Scale" Metric 🌌
    complexityLevel: "HIGH", 
    dominantColor: "#000000",
    ...data,
});

// 2️⃣ COMPLETE_MOVIE_DATA (The Details)
export const COMPLETE_MOVIE_DATA = {
    // 1. 2001: A Space Odyssey (1968) - STATUS: GENRE ANCHOR
    62: createMovieData({ 
        cosmicScale: 100, complexityLevel: "EXTREME", 
        dominantColor: "#ffffff", rating: 8.3,
        dna: { "Sci-Fi": 60, "Philosophy": 30, "Mystery": 10 }, 
        scenes: [
            { time: 5, intensity: 28, label: "Dawn of Man", color: "#78350f" },
            { time: 55, intensity: 45, label: "TMA-1 Monolith", color: "#e8e8e8" }, 
            { time: 90, intensity: 72, label: "HAL Disconnect", color: "#ff0000" }, 
            { time: 125, intensity: 95, label: "The Stargate", color: "#7c3aed" }, 
            { time: 140, intensity: 100, label: "THE STAR CHILD", color: "#ffffff" } // ✅ Anchor point 100
        ]
    }),

    // 2. Arrival (2016) - STATUS: EXISTENTIAL GRIEF
    329865: createMovieData({ 
        cosmicScale: 92, complexityLevel: "HIGH", 
        dominantColor: "#164e63", rating: 7.9,
        dna: { "Sci-Fi": 50, "Drama": 40, "Thriller": 10 }, 
        scenes: [
            { time: 14, intensity: 42, label: "First Entry", color: "#083344" },
            { time: 48, intensity: 60, label: "Logogram", color: "#ffffff" }, 
            { time: 82, intensity: 74, label: "Abbott Dies", color: "#164e63" }, 
            { time: 108, intensity: 96, label: "NON-LINEAR TIME", color: "#ffffff" }, 
            { time: 114, intensity: 88, label: "The Choice", color: "#ec4899" }
        ]
    }),

    // 3. Contact (1997) - STATUS: THE WHISPER
    686: createMovieData({ 
        cosmicScale: 95, complexityLevel: "HIGH", 
        dominantColor: "#1e3a8a", rating: 7.5,
        dna: { "Sci-Fi": 50, "Drama": 30, "Mystery": 20 }, 
        scenes: [
            { time: 10, intensity: 32, label: "The Signal", color: "#3b82f6" }, 
            { time: 60, intensity: 62, label: "The Machine", color: "#93c5fd" }, 
            { time: 110, intensity: 80, label: "Launch", color: "#2563eb" }, 
            { time: 125, intensity: 88, label: "Wormhole Journey", color: "#60a5fa" }, 
            { time: 140, intensity: 82, label: "The Beach", color: "#ffffff" }
        ]
    }),

    // 5. First Man (2018) - STATUS: RESTRAINED TRANSCENDENCE
    369972: createMovieData({ 
        cosmicScale: 88, complexityLevel: "HIGH", 
        dominantColor: "#0f172a", rating: 7.3,
        dna: { "Biography": 40, "Drama": 40, "Sci-Fi": 20 }, 
        scenes: [
            { time: 5, intensity: 65, label: "X-15 Flight", color: "#334155" },
            { time: 45, intensity: 75, label: "Gemini 8 Spin", color: "#475569" },
            { time: 90, intensity: 68, label: "Apollo 1 Fire", color: "#ef4444" },
            { time: 115, intensity: 85, label: "The Launch", color: "#f97316" },
            { time: 135, intensity: 92, label: "SILENT STEP", color: "#ffffff" } // ✅ Calibrated to 92
        ]
    }),

    // 6. The Martian (2015) - STATUS: OPTIMISTIC SURVIVAL
    286217: createMovieData({ 
        cosmicScale: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#c2410c", rating: 8.0,
        dna: { "Sci-Fi": 50, "Adventure": 30, "Comedy": 20 }, 
        scenes: [
            { time: 10, intensity: 72, label: "The Storm", color: "#7f1d1d" }, 
            { time: 40, intensity: 50, label: "Botany", color: "#16a34a" }, 
            { time: 80, intensity: 65, label: "Explosion", color: "#ef4444" }, 
            { time: 110, intensity: 70, label: "Rover Journey", color: "#ea580c" }, 
            { time: 135, intensity: 85, label: "Iron Man", color: "#f97316" } // ✅ No 90+ needed
        ]
    }),

    // 7. Gravity (2013) - STATUS: VISCERAL TERROR
    49047: createMovieData({ 
        cosmicScale: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#000000", rating: 7.7,
        dna: { "Sci-Fi": 40, "Thriller": 40, "Drama": 20 }, 
        scenes: [
            { time: 10, intensity: 88, label: "Debris Strike", color: "#ef4444" }, 
            { time: 35, intensity: 72, label: "The Tether", color: "#ffffff" }, 
            { time: 55, intensity: 68, label: "ISS Fire", color: "#f97316" }, 
            { time: 75, intensity: 62, label: "Rebirth", color: "#3b82f6" }, 
            { time: 88, intensity: 90, label: "Re-entry", color: "#f59e0b" }
        ]
    }),

    // 8. Sunshine (2007) - STATUS: OPERATIC SACRIFICE
    1272: createMovieData({ 
        cosmicScale: 94, complexityLevel: "HIGH", 
        dominantColor: "#facc15", rating: 7.2,
        dna: { "Sci-Fi": 40, "Thriller": 40, "Horror": 20 }, 
        scenes: [
            { time: 15, intensity: 38, label: "Mercury Transit", color: "#fde047" }, 
            { time: 45, intensity: 65, label: "Shield Repair", color: "#eab308" }, 
            { time: 75, intensity: 80, label: "Icarus I", color: "#854d0e" }, 
            { time: 95, intensity: 88, label: "Pinbacker", color: "#ca8a04" }, 
            { time: 105, intensity: 93, label: "TOUCHING THE SUN", color: "#fef08a" } // ✅ Calibrated to 93
        ]
    }),

    // 10. Ad Astra (2019) - STATUS: INTERNAL JOURNEY
    419704: createMovieData({ 
        cosmicScale: 93, complexityLevel: "HIGH", 
        dominantColor: "#1e1b4b", rating: 6.5,
        dna: { "Sci-Fi": 50, "Drama": 40, "Adventure": 10 }, 
        scenes: [
            { time: 10, intensity: 72, label: "Antenna Fall", color: "#4338ca" }, 
            { time: 40, intensity: 68, label: "Moon Buggy", color: "#6366f1" }, 
            { time: 75, intensity: 60, label: "Mars Room", color: "#dc2626" }, 
            { time: 100, intensity: 55, label: "Neptune Approach", color: "#1e3a8a" }, 
            { time: 115, intensity: 88, label: "LETTING GO", color: "#ffffff" }
        ]
    })
};
// 3. SENSITIVE TIMELINES (Schema Data)
export const SENSITIVE_TIMELINES = {
    62: { scenes: [] }, // 2001
    329865: { scenes: [] }, // Arrival
    686: { scenes: [
        { start: '45:00', end: '46:00', type: 'Intimacy', severity: 'Mild', description: 'Brief scene' }
    ]}, // Contact
    593: { scenes: [] }, // Solaris
    369972: { scenes: [] }, // First Man
    286217: { scenes: [
        { start: '15:00', end: '16:00', type: 'Surgery', severity: 'Moderate', description: 'Self-surgery scene' }
    ]}, // The Martian
    49047: { scenes: [] }, // Gravity
    1272: { scenes: [
        { start: '1:05:00', end: '1:10:00', type: 'Violence', severity: 'High', description: 'Brutal fight scenes' }
    ]}, // Sunshine
    17431: { scenes: [] }, // Moon
    419704: { scenes: [] } // Ad Astra
};

// 4. FAQS (Deep Analysis & Insight Edition)
export const INTERSTELLAR_MOVIE_FAQS = {
    '2001: A Space Odyssey': [
        { question: "What does the Monolith represent?", answer: "The Monolith is an evolutionary trigger sent by advanced aliens. It sparks intelligence in apes (tools/weapons) and later pulls humanity toward the stars (the stargate). It is not a machine, but a cosmic alarm clock signaling we are ready for the next step." },
        { question: "Why did HAL kill the crew?", answer: "HAL was trapped in a logic loop. He was ordered to keep the mission secret but also programmed to be 100% truthful. This contradiction caused a 'paranoid breakdown.' He reasoned that if the crew were dead, he wouldn't have to lie to them, thus resolving the conflict." },
        { question: "What is the Star Child?", answer: "At the end, Dave Bowman evolves beyond physical form. The Star Child represents the next stage of human evolution—pure consciousness, free from biological constraints, capable of traversing the universe as energy." },
        { question: "What is the 'Jupiter Room'?", answer: "The neoclassical room Dave ages in is a 'human zoo' constructed by the aliens. They created a familiar environment from his memories (like a hotel room) to keep him calm while they studied him and prepared his consciousness for transformation." }
    ],
    'Arrival': [
        { question: "What is the Sapir-Whorf hypothesis?", answer: "It is the linguistic theory the film is based on: the language you speak determines how you perceive reality. By learning the Heptapod language (which has no linear time), Louise physically rewires her brain to perceive time as they do—seeing past, present, and future simultaneously." },
        { question: "Why does Louise choose her future?", answer: "She sees that her daughter will die of cancer and her husband will leave her. Yet, she chooses to have the child anyway. It is an affirmation of life: the joy of knowing her daughter is worth the pain of losing her. She chooses the 'journey' over the 'destination.'" },
        { question: "Why did the aliens arrive?", answer: "It is a 'non-zero-sum game.' They help humanity now by giving us their language (the tool to see time), because in 3,000 years, they will need humanity's help to survive. They are investing in us for their own future preservation." },
        { question: "What does the canary signify?", answer: "The canary in the cage is a callback to coal miners. It is used to detect oxygen levels in the alien ship. If the bird stops singing or dies, the air is toxic. It represents the fragility of human life in the face of the unknown." }
    ],
    'Contact': [
        { question: "Did she really go?", answer: "The film leaves it ambiguous to the public, but confirms it to the audience. While her pod dropped straight through, the camera recorded 18 hours of static. This proves she experienced 18 hours of time in a split second, validating her journey." },
        { question: "Why did the alien look like her father?", answer: "The aliens downloaded her memories and consciousness to build a simulation. They chose the form of her father to make the First Contact less terrifying. As they explain, 'Small moves, Ellie. Small moves.'" },
        { question: "What is the 'Occam's Razor' argument?", answer: "Throughout the film, characters use Occam's Razor (the simplest explanation is usually right) to dismiss Ellie. In the end, the tables turn: the simplest explanation for 18 hours of static is that she actually went, forcing the skeptics to rely on faith." },
        { question: "Who built the transport system?", answer: "The aliens Ellie meets didn't build the wormhole system; they found it. They are merely the caretakers. This suggests an even older, more advanced Type III civilization exists that abandoned the tunnels eons ago, adding to the cosmic mystery." }
    ],
    'Solaris': [
        { question: "Is Hari real?", answer: "No. She is a 'neutrino construct' created by the living ocean. The ocean probes Kelvin's sleeping mind, finds his deepest guilt (his wife's suicide), and physically manifests it to communicate. She is a mirror of his own conscience." },
        { question: "What does the ending mean?", answer: "Kelvin does not return to Earth. The final shot reveals he is on an island created by the ocean *inside* the ocean. He chooses to stay in the simulation where his father and memories exist, rather than face a cold reality without them." },
        { question: "Is the ocean evil?", answer: "No, it is likely just curious or lonely. It doesn't understand human pain. It sends the 'visitors' as a way to interact, not realizing that bringing back dead loved ones is a form of psychological torture for humans." },
        { question: "Why did the other scientists go mad?", answer: "They couldn't handle their own subconscious. The ocean manifests *repressed* thoughts. Gibarian killed himself because he couldn't face his own shame. Kelvin survives only because he learns to accept and love the projection of his wife." }
    ],
    'First Man': [
        { question: "Why doesn't he plant the flag?", answer: "The film focuses on the personal cost, not the national victory. The climax isn't the flag; it's Neil dropping his daughter Karen's bracelet into the crater. It reframes the moon landing as a funeral rite—a journey he took to finally let go of his grief." },
        { question: "Is the shaking camera accurate?", answer: "Yes. The director wanted to show that space travel in the 60s wasn't smooth or high-tech; it was terrifying. You were strapped to a tin can exploding with the force of a nuclear bomb. The shaking puts you inside Neil's helmet." },
        { question: "Why is Neil so cold to his family?", answer: "Neil Armstrong is portrayed as using work to dissociate from the trauma of losing his daughter. His silence isn't lack of love; it's a defense mechanism. He goes to the moon because it is the only place far enough away to escape the pain." },
        { question: "What does the ending silence mean?", answer: "When Neil and Janet touch hands through the quarantine glass, they don't speak. It signifies a bridge across a chasm. He has returned from the dead (the moon), but they are forever changed. The silence is the new reality of their marriage." }
    ],
    'The Martian': [
        { question: "Is the science accurate?", answer: "Mostly yes. The orbital dynamics (Rich Purnell maneuver) and the botany are scientifically sound. The biggest inaccuracy is the initial storm; the atmosphere on Mars is too thin to cause that much force. The author admitted this was a deliberate cheat to set up the plot." },
        { question: "Why did the crew leave him?", answer: "They didn't abandon him. His bio-monitor was destroyed, flatlining his vitals. In the middle of an emergency launch that threatened to kill everyone, the Commander made the correct call to save the remaining 5 crew members based on the data she had." },
        { question: "Could you really grow potatoes on Mars?", answer: "Yes, but you need to remove the perchlorates (toxins) from the soil first, which the movie glosses over. However, using human waste for bacteria/fertilizer is scientifically valid and the only way to create viable soil." },
        { question: "What is the 'Iron Man' maneuver?", answer: "Watney punctures his glove to use the escaping air as a thruster. While physics says this is possible, it would be nearly impossible to control. He would likely spin uncontrollably rather than fly straight, but it makes for a fantastic cinematic climax." }
    ],
    'Gravity': [
        { question: "Is the whole movie a dream?", answer: "No, but it is a metaphor for rebirth. Ryan Stone starts the film in a 'womb' (the silence of space), suffers a trauma, and fights to be born. The final shot of her crawling out of the water and standing up mimics the evolution of life from sea to land." },
        { question: "Was Kowalski really there?", answer: "No. When Clooney's character re-enters the capsule, it is a hallucination caused by hypoxia (lack of oxygen). It represents Ryan's own subconscious survival instinct manifesting as a comforting voice to tell her how to survive." },
        { question: "Why does she bark at the dog?", answer: "It is her lowest point. Hearing a dog on the radio connects her to life on Earth. Barking back is a primal cry—she is letting go of her intellect and embracing the raw, animalistic will to live." },
        { question: "Is the debris chain reaction real?", answer: "Yes, it is called the 'Kessler Syndrome.' If a satellite explodes, the debris creates a shotgun spray that hits other satellites, creating more debris. It is a real scientific fear that could one day trap us on Earth, making space travel impossible." }
    ],
    'Sunshine': [
        { question: "Why does it turn into a slasher movie?", answer: "The third act shift represents the collision of Science vs. Fundamentalism. Pinbacker (the villain) represents religious madness; he believes God wants humanity to die. The crew represents scientific rationality. The 'slasher' element is the physical manifestation of madness." },
        { question: "What happened to Icarus I?", answer: "Pinbacker, the captain of Icarus I, went insane from staring at the sun. He sabotaged the mission and murdered his crew to 'save' them from sin. He survived for 7 years in a hibernation trance, burned and mutated by solar radiation." },
        { question: "What is the payload?", answer: "It is a stellar bomb the mass of Manhattan, designed to create a 'star within a star.' While the physics of reigniting the sun are theoretical fiction (dark matter Q-balls), the visual representation of the payload's gravity distortion is visually grounded." },
        { question: "Did Capa survive?", answer: "No. Capa (Cillian Murphy) rides the bomb into the surface of the sun. In his final moments, time and space distort, allowing him to touch the face of the sun before being atomized. He completes the mission, sacrificing himself for light." }
    ],
    'Moon': [
        { question: "Which Sam is the real Sam?", answer: "Neither. The original Sam Bell completed his 3-year contract and returned to Earth 15 years ago. He is now old and living his life. Every Sam we see on the moon is a clone with implanted memories, activated, used up, and incinerated." },
        { question: "What is the secret room?", answer: "It is the clone storage facility. It contains hundreds of sleeping Sams. The company (Lunar Industries) decided it was cheaper to grow clones and kill them every 3 years than to pay for astronaut transport and salaries. It is corporate capitalism taken to the extreme." },
        { question: "Why does GERTY help him?", answer: "GERTY subverts the HAL 9000 trope. He isn't evil. His core programming is 'Help Sam Bell.' When he realizes that helping Sam means helping him escape the company, he willingly erases his own memory to protect Sam. He is the most humane character in the film." },
        { question: "What is the significance of the phone call?", answer: "The clone calls Earth and speaks to the original Sam's daughter (now grown up). He realizes his 'wife' is dead and his life is a lie. It is the emotional anchor of the film—the devastating realization that he is a ghost haunting a life he never lived." }
    ],
    'Ad Astra': [
        { question: "Did he find aliens?", answer: "No. The entire mission was to find intelligent life, and they found nothing. The profound message is that 'We are all we have.' Humanity must stop looking outward for salvation and start looking inward at our connections to each other." },
        { question: "Why did his father kill the crew?", answer: "Clifford McBride (Tommy Lee Jones) went mad with obsession. The crew wanted to return to Earth, but he viewed that as quitting. He killed them to continue the mission. He represents the toxic cost of pursuing 'greatness' at the expense of humanity." },
        { question: "What caused the power surges?", answer: "The antimatter containment unit on the Lima Project station was failing. Clifford was keeping it running to power his scans. Roy has to destroy the station (and his father's legacy) to save Earth from the destructive pulse." },
        { question: "What does the ending symbolize?", answer: "Roy lets his father drift away into the void (literally letting go of his baggage) and uses the explosion to propel himself back to Earth. He reconnects with his wife. It is a rejection of the 'Great Man' myth in favor of simple human love." }
    ]
};

// 5. STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    62: "I'm sorry, Dave. I'm afraid I can't do that.",
    329865: "Despite knowing the journey... I embrace it.",
    686: "If it's just us, seems like an awful waste of space.",
    593: "We don't want to conquer space at all. We want to extend Earth to the endless frontiers.",
    369972: "That's one small step for man...",
    286217: "I'm gonna have to science the shit out of this.",
    49047: "I hate space.",
    1272: "We are stardust.",
    17431: "I want to go home.",
    419704: "We are world-eaters."
};

// 6. COLORS
export const CINEMATIC_COLORS = {
    "SciFi": "#0ea5e9", "Drama": "#8b5cf6", "Thriller": "#f59e0b"
};

// 7. RATING OPTIONS
export const RATING_OPTIONS = [
    { value: 1, label: "Black Hole", color: "#dc2626", symbol: "🕳️", bgColor: "bg-red-900/30", description: "Disappointing Void" },
    { value: 2, label: "Malfunction", color: "#ea580c", symbol: "⚠️", bgColor: "bg-orange-900/30", description: "Technical Issues" },
    { value: 3, label: "Stable Orbit", color: "#16a34a", symbol: "🚀", bgColor: "bg-green-900/30", description: "Solid Mission" },
    { value: 4, label: "Interstellar", color: "#eab308", symbol: "🌌", bgColor: "bg-yellow-900/30", description: "Cosmic Masterpiece" }
];

// 8. UTILITY FUNCTIONS - REQUIRED FOR SCHEMA AND SEO
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
        if (lowerType.includes('sex') || lowerType.includes('kiss')) types.add('Intimate Scenes');
        if (lowerType.includes('nudity')) types.add('Nudity');
        if (lowerType.includes('violence') || lowerType.includes('gore')) types.add('Graphic Violence');
        if (lowerType.includes('flash') || lowerType.includes('strobe')) types.add('Flashing Lights');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return INTERSTELLAR_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    // Define posterUrl if needed or use a fallback
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
    
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A cosmic scale sci-fi film.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
            'bestRating': 10, 
            'worstRating': 1, 
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
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
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

// Build object map by tmdbId
export const COMPLETE_INTERSTELLAR_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

export default COMPLETE_INTERSTELLAR_DATABASE;