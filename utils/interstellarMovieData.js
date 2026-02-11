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
    // 1. 2001: A Space Odyssey
    62: createMovieData({ 
        cosmicScale: 100, complexityLevel: "EXTREME", 
        dominantColor: "#ffffff", rating: 8.3, criticsScore: 92, audienceScore: 89, director: "Stanley Kubrick", 
        cast: ["Keir Dullea", "Gary Lockwood"], boxOffice: "$146.2M", budget: "$10.5M", 
        dna: { "Sci-Fi": 60, "Philosophy": 30, "Mystery": 10 }, 
        scenes: [
            { time: 5, intensity: 35, label: "Dawn of Man", color: "#000000" }, 
            { time: 55, intensity: 48, label: "TMA-1 Monolith", color: "#e8e8e8" }, 
            { time: 90, intensity: 65, label: "HAL Disconnect", color: "#ff0000" }, 
            { time: 125, intensity: 88, label: "The Stargate", color: "#7c3aed" }, 
            { time: 140, intensity: 100, label: "THE STAR CHILD", color: "#ffffff" } 
        ], 
        synopsis: "Stanley Kubrick’s absolute masterpiece spans the entirety of human history, from the first prehistoric tools to a future among the stars. When a mysterious black monolith is discovered buried on the lunar surface, it sends a signal toward Jupiter. The crew of the Discovery One, led by Dr. Dave Bowman, embarks on a mission that turns into a fight for survival against the ship’s sentient AI, HAL 9000. It is a visual and philosophical odyssey that ultimately leads to the next step in human evolution.", 
        themes: ["Evolution", "AI Supremacy", "Cosmic Loneliness", "Destiny"]
    }),

    // 2. Arrival
    329865: createMovieData({ 
        cosmicScale: 92, complexityLevel: "HIGH", 
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

    // 3. Contact
    686: createMovieData({ 
        cosmicScale: 95, complexityLevel: "HIGH", 
        dominantColor: "#1e3a8a", rating: 7.5, criticsScore: 68, audienceScore: 78, director: "Robert Zemeckis", 
        cast: ["Jodie Foster", "Matthew McConaughey"], boxOffice: "$171.1M", budget: "$90M", 
        dna: { "Sci-Fi": 50, "Drama": 30, "Mystery": 20 }, 
        scenes: [
            { time: 10, intensity: 30, label: "The Signal", color: "#3b82f6" }, 
            { time: 60, intensity: 65, label: "The Machine", color: "#93c5fd" }, 
            { time: 110, intensity: 85, label: "Launch", color: "#2563eb" }, 
            { time: 125, intensity: 95, label: "Wormhole Journey", color: "#60a5fa" }, 
            { time: 140, intensity: 90, label: "The Beach", color: "#ffffff" }
        ], 
        synopsis: "Dr. Ellie Arroway has spent her life listening to static, searching for proof that we are not alone. When she finally receives a coded message from the Vega star system containing blueprints for a mysterious machine, she must fight religious fanatics, government bureaucrats, and her own skepticism to be the first human to make contact. It is a profound exploration of the intersection between science and faith.", 
        themes: ["Faith vs Science", "First Contact", "Isolation", "Politics"]
    }),

    // 4. Solaris (1972)
    593: createMovieData({ 
        cosmicScale: 90, complexityLevel: "EXTREME", 
        dominantColor: "#7c3aed", rating: 8.0, criticsScore: 92, audienceScore: 88, director: "Andrei Tarkovsky", 
        cast: ["Natalya Bondarchuk", "Donatas Banionis"], boxOffice: "N/A", budget: "$1M", 
        dna: { "Sci-Fi": 40, "Drama": 40, "Philosophy": 20 }, 
        scenes: [
            { time: 15, intensity: 20, label: "Earth", color: "#166534" }, 
            { time: 45, intensity: 50, label: "Arrival at Station", color: "#581c87" }, 
            { time: 80, intensity: 75, label: "The Visitors", color: "#a855f7" }, 
            { time: 120, intensity: 85, label: "The Ocean", color: "#7c3aed" }, 
            { time: 160, intensity: 95, label: "Final Island", color: "#c084fc" }
        ], 
        synopsis: "A psychologist is sent to a space station orbiting the mysterious planet Solaris to investigate the crew's mental breakdowns. He discovers that the planet's sentient ocean is capable of materializing the crew's deepest memories and regrets. When his deceased wife appears on the station, he is forced to confront his own grief and the terrifying possibility that the ocean is trying to communicate through his pain.", 
        themes: ["Memory", "Grief", "Consciousness", "Love"]
    }),

    // 5. First Man
    369972: createMovieData({ 
        cosmicScale: 88, complexityLevel: "HIGH", 
        dominantColor: "#0f172a", rating: 7.3, criticsScore: 87, audienceScore: 67, director: "Damien Chazelle", 
        cast: ["Ryan Gosling", "Claire Foy"], boxOffice: "$105.7M", budget: "$59M", 
        dna: { "Biography": 40, "Drama": 40, "Sci-Fi": 20 }, 
        scenes: [
            { time: 5, intensity: 60, label: "X-15 Flight", color: "#334155" }, 
            { time: 45, intensity: 75, label: "Gemini 8 Spin", color: "#475569" }, 
            { time: 90, intensity: 50, label: "Apollo 1 Fire", color: "#ef4444" }, 
            { time: 115, intensity: 85, label: "The Launch", color: "#f97316" }, 
            { time: 135, intensity: 100, label: "SILENT STEP", color: "#ffffff" }
        ], 
        synopsis: "A visceral, intimate look at the life of Neil Armstrong and the legendary space mission that led him to become the first man to walk on the Moon. Unlike heroic blockbusters, this film focuses on the terrifying danger of early space travel and the immense personal cost Armstrong paid—grieving the loss of his daughter while carrying the hopes of a nation into the void.", 
        themes: ["Grief", "Sacrifice", "Legacy", "Isolation"]
    }),

    // 6. The Martian
    286217: createMovieData({ 
        cosmicScale: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#c2410c", rating: 8.0, criticsScore: 91, audienceScore: 91, director: "Ridley Scott", 
        cast: ["Matt Damon", "Jessica Chastain"], boxOffice: "$630.2M", budget: "$108M", 
        dna: { "Sci-Fi": 50, "Adventure": 30, "Comedy": 20 }, 
        scenes: [
            { time: 10, intensity: 70, label: "The Storm", color: "#7f1d1d" }, 
            { time: 40, intensity: 50, label: "Botany", color: "#16a34a" }, 
            { time: 80, intensity: 65, label: "Explosion", color: "#ef4444" }, 
            { time: 110, intensity: 75, label: "Rover Journey", color: "#ea580c" }, 
            { time: 135, intensity: 95, label: "Iron Man", color: "#f97316" }
        ], 
        synopsis: "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit, and spirit to subsist and find a way to signal to Earth that he is alive.", 
        themes: ["Resilience", "Science", "Isolation", "Teamwork"]
    }),

    // 7. Gravity
    49047: createMovieData({ 
        cosmicScale: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#000000", rating: 7.7, criticsScore: 96, audienceScore: 79, director: "Alfonso Cuarón", 
        cast: ["Sandra Bullock", "George Clooney"], boxOffice: "$723.2M", budget: "$100M", 
        dna: { "Sci-Fi": 40, "Thriller": 40, "Drama": 20 }, 
        scenes: [
            { time: 10, intensity: 85, label: "Debris Strike", color: "#ef4444" }, 
            { time: 35, intensity: 70, label: "The Tether", color: "#ffffff" }, 
            { time: 55, intensity: 60, label: "ISS Fire", color: "#f97316" }, 
            { time: 75, intensity: 50, label: "Rebirth", color: "#3b82f6" }, 
            { time: 88, intensity: 95, label: "Re-entry", color: "#f59e0b" }
        ], 
        synopsis: "Dr. Ryan Stone, a brilliant medical engineer on her first shuttle mission, is stranded in space when debris destroys their shuttle. Untethered and spiraling into the blackness, she must find a way to survive the terrifying vacuum of space. It is a heart-pounding thriller that strips survival down to its most primal elements: breath, gravity, and the will to live.", 
        themes: ["Rebirth", "Survival", "Grief", "Isolation"]
    }),

    // 8. Sunshine
    1272: createMovieData({ 
        cosmicScale: 94, complexityLevel: "HIGH", 
        dominantColor: "#facc15", rating: 7.2, criticsScore: 76, audienceScore: 73, director: "Danny Boyle", 
        cast: ["Cillian Murphy", "Rose Byrne"], boxOffice: "$32M", budget: "$40M", 
        dna: { "Sci-Fi": 40, "Thriller": 40, "Horror": 20 }, 
        scenes: [
            { time: 15, intensity: 40, label: "Mercury Transit", color: "#fde047" }, 
            { time: 45, intensity: 65, label: "Shield Repair", color: "#eab308" }, 
            { time: 75, intensity: 80, label: "Icarus I", color: "#854d0e" }, 
            { time: 95, intensity: 90, label: "Pinbacker", color: "#ca8a04" }, 
            { time: 105, intensity: 100, label: "TOUCHING THE SUN", color: "#fef08a" }
        ], 
        synopsis: "50 years in the future, the Sun is dying, and Earth is freezing. A crew of eight astronauts is sent on a desperate mission to reignite the star with a massive nuclear payload. As they approach the sun, their sanity unravels under the immense pressure and the hypnotic allure of the solar fire. What starts as a scientific mission descends into a terrifying psychological and physical battle for the future of mankind.", 
        themes: ["Sacrifice", "Religion vs Science", "Madness", "Nature's Power"]
    }),

    // 9. Moon
    17431: createMovieData({ 
        cosmicScale: 80, complexityLevel: "HIGH", 
        dominantColor: "#e5e7eb", rating: 7.8, criticsScore: 90, audienceScore: 89, director: "Duncan Jones", 
        cast: ["Sam Rockwell", "Kevin Spacey"], boxOffice: "$9.8M", budget: "$5M", 
        dna: { "Sci-Fi": 60, "Drama": 30, "Mystery": 10 }, 
        scenes: [
            { time: 10, intensity: 20, label: "Routine", color: "#d1d5db" }, 
            { time: 30, intensity: 60, label: "The Crash", color: "#9ca3af" }, 
            { time: 50, intensity: 85, label: "The Discovery", color: "#4b5563" }, 
            { time: 75, intensity: 70, label: "The Jammer", color: "#1f2937" }, 
            { time: 90, intensity: 90, label: "Escape", color: "#f3f4f6" }
        ], 
        synopsis: "Sam Bell is nearing the end of his three-year contract mining Helium-3 on the far side of the Moon. His only companion is GERTY, an AI computer. The isolation has begun to take its toll, but just weeks before he is due to return home, Sam begins seeing things that shouldn't be there. After a routine accident, he wakes up to find that he is not alone—and his entire existence is a lie.", 
        themes: ["Identity", "Corporate Exploitation", "Loneliness", "Humanity"]
    }),

    // 10. Ad Astra
    419704: createMovieData({ 
        cosmicScale: 93, complexityLevel: "HIGH", 
        dominantColor: "#1e1b4b", rating: 6.5, criticsScore: 83, audienceScore: 40, director: "James Gray", 
        cast: ["Brad Pitt", "Tommy Lee Jones"], boxOffice: "$127.5M", budget: "$90M", 
        dna: { "Sci-Fi": 50, "Drama": 40, "Adventure": 10 }, 
        scenes: [
            { time: 10, intensity: 80, label: "Antenna Fall", color: "#4338ca" }, 
            { time: 40, intensity: 70, label: "Moon Buggy", color: "#6366f1" }, 
            { time: 75, intensity: 60, label: "Mars Room", color: "#dc2626" }, 
            { time: 100, intensity: 50, label: "Neptune Approach", color: "#1e3a8a" }, 
            { time: 115, intensity: 95, label: "LETTING GO", color: "#ffffff" }
        ], 
        synopsis: "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now threatens the universe. It is a solitary journey into the heart of darkness, where the further he travels into the void, the deeper he must look into his own soul to resolve his daddy issues.", 
        themes: ["Fatherhood", "Toxic Masculinity", "Isolation", "Forgiveness"]
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