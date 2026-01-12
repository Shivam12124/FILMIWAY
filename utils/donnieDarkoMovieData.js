// utils/donnieDarkoMovieData.js - MOVIES LIKE DONNIE DARKO COLLECTION 🌀
// Mind-bending films exploring time travel, alternate realities, and existential dread.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1. LIGHTWEIGHT DATABASE (For Routes & Paths)
export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 1954, imdbID: 'tt0289879', Title: 'The Butterfly Effect', year: 2004, genre: 'Sci-Fi', runtime: 113, rank: 1 },
    { tmdbId: 63, imdbID: 'tt0114746', Title: '12 Monkeys', year: 1995, genre: 'Sci-Fi', runtime: 129, rank: 2 },
    { tmdbId: 9667, imdbID: 'tt0366627', Title: 'The Jacket', year: 2005, genre: 'Thriller', runtime: 103, rank: 3 },
    { tmdbId: 1902, imdbID: 'tt0125659', Title: 'Open Your Eyes', year: 1997, genre: 'Sci-Fi', runtime: 119, rank: 4 },
    { tmdbId: 220289, imdbID: 'tt2866360', Title: 'Coherence', year: 2013, genre: 'Sci-Fi', runtime: 89, rank: 5 },
    { tmdbId: 2291, imdbID: 'tt0099871', Title: "Jacob's Ladder", year: 1990, genre: 'Horror', runtime: 113, rank: 6 },
    { tmdbId: 2666, imdbID: 'tt0118929', Title: 'Dark City', year: 1998, genre: 'Sci-Fi', runtime: 100, rank: 7 },
    { tmdbId: 1018, imdbID: 'tt0166924', Title: 'Mulholland Drive', year: 2001, genre: 'Mystery', runtime: 147, rank: 8 },
    { tmdbId: 38, imdbID: 'tt0338013', Title: 'Eternal Sunshine of the Spotless Mind', year: 2004, genre: 'Sci-Fi', runtime: 108, rank: 9 },
    { tmdbId: 181886, imdbID: 'tt2316411', Title: 'Enemy', year: 2013, genre: 'Thriller', runtime: 91, rank: 10 }
];

// 2. SENSITIVE TIMELINES (Sexual Content & Nudity Only)
export const SENSITIVE_TIMELINES = {
    1954: { scenes: [{ start: '0:15:20', end: '0:16:45', type: 'Nudity', severity: 'Moderate' }, { start: '0:42:10', end: '0:43:30', type: 'Sex scene', severity: 'Strong' }] },
    63: { scenes: [{ start: '1:22:15', end: '1:22:45', type: 'Partial nudity', severity: 'Mild' }] },
    9667: { scenes: [{ start: '0:28:40', end: '0:30:15', type: 'Sex scene', severity: 'Strong' }] },
    1902: { scenes: [{ start: '0:35:15', end: '0:37:40', type: 'Sex scene', severity: 'Strong' }] },
    220289: { scenes: [] }, 
    2291: { scenes: [{ start: '0:42:30', end: '0:43:15', type: 'Sexual content', severity: 'Moderate' }] },
    2666: { scenes: [{ start: '0:52:10', end: '0:53:45', type: 'Implied nudity', severity: 'Mild' }] },
    1018: { scenes: [{ start: '0:23:32', end: '0:24:30', type: 'Nudity (Blurred)', severity: 'Moderate' }, { start: '1:38:45', end: '1:42:55', type: 'Nudity', severity: 'High' }, { start: '2:01:27', end: '2:02:59', type: 'Nudity', severity: 'High' }] },
    38: { scenes: [{ start: '0:42:30', end: '0:43:20', type: 'Partial nudity', severity: 'Mild' }] },
    181886: { scenes: [{ start: '0:45:20', end: '0:47:35', type: 'Sex scene', severity: 'Strong' }] }
};

// 3. FALLBACK POSTERS
export const FALLBACK_POSTERS = {
    1954: "https://image.tmdb.org/t/p/w500/vHof7S85J9vAnYyE6UscGfE6V5X.jpg",
    63: "https://image.tmdb.org/t/p/w500/4096S2YisqK6YlS6uH58XpXp9Y.jpg",
    9667: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8oa0J.jpg",
    1902: "https://image.tmdb.org/t/p/w500/8XW6u4e4M9H7J0X0N0P0Q0R0S0T.jpg",
    220289: "https://image.tmdb.org/t/p/w500/mX3O2m3S5mX3O2m3S5mX3O2m3S.jpg",
    2291: "https://image.tmdb.org/t/p/w500/vXfXfXfXfXfXfXfXfXfXfXfX.jpg",
    2666: "https://image.tmdb.org/t/p/w500/yYyYyYyYyYyYyYyYyYyYyYyY.jpg",
    1018: "https://image.tmdb.org/t/p/w500/zZzZzZzZzZzZzZzZzZzZzZzZ.jpg",
    38: "https://image.tmdb.org/t/p/w500/4n74vOAnvX9jL9p4p9p4p9p4p.jpg",
    181886: "https://image.tmdb.org/t/p/w500/5m5m5m5m5m5m5m5m5m5m5m5m.jpg"
};

// ✅ HELPER: Ensured Metrics for Donnie Darko Collection
const createMovieData = (data) => ({
    psychologicalIntensity: 90, 
    mindBendScore: 90,          
    dominantColor: "#000000",
    ...data,
});

// utils/donnieDarkoMovieData.js - COMPLETE MIND-BENDING COLLECTION
// Focused on psychological intensity, time travel, and reality-bending narratives.

// HELPER: Create Data with Mind-Bending Metrics

export const COMPLETE_MOVIE_DATA = {
    // 1. The Butterfly Effect
    1954: createMovieData({
        tmdbId: 1954,
        Title: "The Butterfly Effect",
        psychologicalIntensity: 95, mindBendScore: 85, dominantColor: "#3b82f6", complexityLevel: "HIGH",
        rating: 7.6, criticsScore: 33, audienceScore: 81, director: "Eric Bress",
        cast: ["Ashton Kutcher", "Amy Smart"], boxOffice: "$96 million", budget: "$13 million",
        dna: { "Sci-Fi": 50, "Thriller": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Blackouts", color: "#1e3a8a" },
            { time: 45, intensity: 65, label: "Prison Reality", color: "#1d4ed8" },
            { time: 70, intensity: 80, label: "Quadriplegic Timeline", color: "#60a5fa" },
            { time: 90, intensity: 95, label: "No Arms", color: "#2563eb" },
            { time: 110, intensity: 88, label: "Final Sacrifice", color: "#93c5fd" }
        ],
        synopsis: "Evan Treborn alters his life by reading his journals. A dark exploration of chaos theory where every change in the past creates a more horrifying future.",
        themes: ["Chaos Theory", "Trauma", "Fate"]
    }),

    // 2. 12 Monkeys
    63: createMovieData({
        tmdbId: 63,
        Title: "12 Monkeys",
        psychologicalIntensity: 92, mindBendScore: 95, dominantColor: "#3b82f6", complexityLevel: "EXTREME",
        rating: 8.0, criticsScore: 88, audienceScore: 90, director: "Terry Gilliam",
        cast: ["Bruce Willis", "Brad Pitt"], boxOffice: "$168 million", budget: "$29 million",
        dna: { "Sci-Fi": 50, "Thriller": 30, "Mystery": 20 },
        scenes: [
            { time: 20, intensity: 50, label: "The Asylum", color: "#1e40af" },
            { time: 50, intensity: 70, label: "WWI Trenches", color: "#3b82f6" },
            { time: 85, intensity: 80, label: "The Airport Dream", color: "#60a5fa" },
            { time: 110, intensity: 90, label: "Army of 12 Monkeys", color: "#2563eb" },
            { time: 125, intensity: 95, label: "The Loop Closes", color: "#93c5fd" }
        ],
        synopsis: "A convict from a disease-devastated future is sent back in time to stop a virus. He becomes trapped in a fatalistic loop where he witnesses his own childhood trauma.",
        themes: ["Time Loops", "Madness", "Cassandra Complex"]
    }),

    // 3. The Jacket
    9667: createMovieData({
        tmdbId: 9667,
        Title: "The Jacket",
        psychologicalIntensity: 88, mindBendScore: 80, dominantColor: "#0f172a", complexityLevel: "HIGH",
        rating: 7.1, criticsScore: 44, audienceScore: 74, director: "John Maybury",
        cast: ["Adrien Brody", "Keira Knightley"], boxOffice: "$21 million", budget: "$29 million",
        dna: { "Thriller": 50, "Sci-Fi": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 55, label: "Gulf War Death", color: "#0f172a" },
            { time: 30, intensity: 70, label: "The Morgue", color: "#334155" },
            { time: 55, intensity: 85, label: "Future Jump", color: "#475569" },
            { time: 80, intensity: 75, label: "Meeting Jackie", color: "#64748b" },
            { time: 98, intensity: 90, label: "The Letter", color: "#94a3b8" }
        ],
        synopsis: "A veteran is locked in a morgue drawer as part of an experiment, allowing him to travel to the future and investigate his own impending murder.",
        themes: ["Fate", "Trauma", "Foreknowledge"]
    }),

    // 4. Open Your Eyes
    1902: createMovieData({
        tmdbId: 1902,
        Title: "Open Your Eyes",
        psychologicalIntensity: 90, mindBendScore: 95, dominantColor: "#ec4899", complexityLevel: "EXTREME",
        rating: 7.7, criticsScore: 84, audienceScore: 85, director: "Alejandro Amenábar",
        cast: ["Eduardo Noriega", "Penélope Cruz"], boxOffice: "$7 million", budget: "$3 million",
        dna: { "Sci-Fi": 40, "Mystery": 30, "Romance": 30 },
        scenes: [
            { time: 20, intensity: 45, label: "The Party", color: "#be185d" },
            { time: 40, intensity: 65, label: "The Crash", color: "#db2777" },
            { time: 75, intensity: 80, label: "The Disfigurement", color: "#ec4899" },
            { time: 100, intensity: 90, label: "The Murder", color: "#f472b6" },
            { time: 115, intensity: 95, label: "The Leap", color: "#fbcfe8" }
        ],
        synopsis: "A man's reality warps as he realizes he may be living in a cryogenic dream state where his subconscious is turning into a nightmare.",
        themes: ["Reality vs Dream", "Vanity", "Immortality"]
    }),

    // 5. Coherence
    220289: createMovieData({
        tmdbId: 220289,
        Title: "Coherence",
        psychologicalIntensity: 85, mindBendScore: 100, dominantColor: "#3b82f6", complexityLevel: "EXTREME",
        rating: 7.2, criticsScore: 88, audienceScore: 82, director: "James Ward Byrkit",
        cast: ["Emily Baldoni", "Maury Sterling"], boxOffice: "$100k", budget: "$50k",
        dna: { "Sci-Fi": 60, "Thriller": 25, "Mystery": 15 },
        scenes: [
            { time: 25, intensity: 55, label: "The Comet Passes", color: "#1e3a8a" },
            { time: 45, intensity: 70, label: "The Box", color: "#2563eb" },
            { time: 65, intensity: 85, label: "Red Glow Sticks", color: "#3b82f6" },
            { time: 85, intensity: 95, label: "The Replacement", color: "#60a5fa" },
            { time: 88, intensity: 90, label: "Morning Light", color: "#93c5fd" }
        ],
        synopsis: "A comet shatters reality into multiple parallel timelines, leading to doppelgangers and a terrifying fight for survival across alternate versions of a single night.",
        themes: ["Quantum Mechanics", "Multiverse", "Identity"]
    }),

    // 6. Jacob's Ladder
    2291: createMovieData({
        tmdbId: 2291,
        Title: "Jacob's Ladder",
        psychologicalIntensity: 98, mindBendScore: 90, dominantColor: "#991b1b", complexityLevel: "EXTREME",
        rating: 7.4, criticsScore: 73, audienceScore: 83, director: "Adrian Lyne",
        cast: ["Tim Robbins", "Elizabeth Peña"], boxOffice: "$26 million", budget: "$25 million",
        dna: { "Horror": 50, "Thriller": 30, "Mystery": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "Vietnam Flashback", color: "#7f1d1d" },
            { time: 40, intensity: 70, label: "The Subway Demon", color: "#991b1b" },
            { time: 65, intensity: 85, label: "The Dance Floor", color: "#b91c1c" },
            { time: 90, intensity: 95, label: "The Hospital Hell", color: "#dc2626" },
            { time: 110, intensity: 100, label: "The Stairs", color: "#ef4444" }
        ],
        synopsis: "A Vietnam veteran suffers from severe dissociation and demonic hallucinations as he struggles to decipher reality from a nightmarish descent into purgatory.",
        themes: ["PTSD", "Purgatory", "Death"]
    }),

    // 7. Dark City
    2666: createMovieData({
        tmdbId: 2666,
        Title: "Dark City",
        psychologicalIntensity: 87, mindBendScore: 92, dominantColor: "#0f172a", complexityLevel: "HIGH",
        rating: 7.6, criticsScore: 76, audienceScore: 85, director: "Alex Proyas",
        cast: ["Rufus Sewell", "Jennifer Connelly"], boxOffice: "$27 million", budget: "$27 million",
        dna: { "Sci-Fi": 50, "Mystery": 30, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 45, label: "Waking Up", color: "#0f172a" },
            { time: 30, intensity: 70, label: "The Tuning", color: "#334155" },
            { time: 60, intensity: 80, label: "Shell Beach", color: "#475569" },
            { time: 85, intensity: 90, label: "Battle of Minds", color: "#64748b" },
            { time: 98, intensity: 95, label: "Sunlight", color: "#94a3b8" }
        ],
        synopsis: "A man struggles with memories in a sunless city run by aliens who telekinetically reshape the world and human identities every night.",
        themes: ["Memory", "Simulation", "Free Will"]
    }),

    // 8. Mulholland Drive
    1018: createMovieData({
        tmdbId: 1018,
        Title: "Mulholland Drive",
        psychologicalIntensity: 98, mindBendScore: 100, dominantColor: "#6b21a8", complexityLevel: "EXTREME",
        rating: 7.9, criticsScore: 85, audienceScore: 87, director: "David Lynch",
        cast: ["Naomi Watts", "Laura Harring"], boxOffice: "$20 million", budget: "$15 million",
        dna: { "Mystery": 50, "Thriller": 30, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 50, label: "The Car Crash", color: "#581c87" },
            { time: 45, intensity: 65, label: "Winkie's Diner", color: "#6b21a8" },
            { time: 110, intensity: 95, label: "Club Silencio", color: "#7e22ce" },
            { time: 125, intensity: 100, label: "The Blue Box", color: "#9333ea" },
            { time: 140, intensity: 90, label: "The Monster", color: "#a855f7" }
        ],
        synopsis: "Lynch shatters the Hollywood dream as an aspiring actress and an amnesiac woman's search for identity devolves into a surreal nightmare.",
        themes: ["Identity Fracture", "Dream Logic", "Hollywood"]
    }),

    // 9. Eternal Sunshine of the Spotless Mind
    38: createMovieData({
        tmdbId: 38,
        Title: "Eternal Sunshine of the Spotless Mind",
        psychologicalIntensity: 83, mindBendScore: 85, dominantColor: "#ec4899", complexityLevel: "HIGH",
        rating: 8.3, criticsScore: 92, audienceScore: 94, director: "Michel Gondry",
        cast: ["Jim Carrey", "Kate Winslet"], boxOffice: "$74 million", budget: "$20 million",
        dna: { "Romance": 50, "Sci-Fi": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 45, label: "The Train Meeting", color: "#be185d" },
            { time: 40, intensity: 65, label: "The Procedure", color: "#db2777" },
            { time: 70, intensity: 80, label: "Hiding in Childhood", color: "#ec4899" },
            { time: 95, intensity: 90, label: "The House Crumbles", color: "#f472b6" },
            { time: 105, intensity: 85, label: "Okay", color: "#fbcfe8" }
        ],
        synopsis: "A couple undergoes a medical procedure to have each other erased from their memories, discovering only through loss that their love was inevitable.",
        themes: ["Memory", "Love", "Fate"]
    }),

    // 10. Enemy
    181886: createMovieData({
        tmdbId: 181886,
        Title: "Enemy",
        psychologicalIntensity: 91, mindBendScore: 95, dominantColor: "#9333ea", complexityLevel: "EXTREME",
        rating: 6.9, criticsScore: 71, audienceScore: 66, director: "Denis Villeneuve",
        cast: ["Jake Gyllenhaal", "Mélanie Laurent"], boxOffice: "$3.4 million", budget: "Unknown",
        dna: { "Thriller": 50, "Mystery": 30, "Psychological": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Movie", color: "#581c87" },
            { time: 55, intensity: 80, label: "The Meeting", color: "#7e22ce" },
            { time: 75, intensity: 85, label: "The Swap", color: "#9333ea" },
            { time: 85, intensity: 90, label: "The Crash", color: "#a855f7" },
            { time: 88, intensity: 95, label: "The Spider", color: "#c084fc" }
        ],
        synopsis: "A man spots his exact look-alike in a movie and seeks him out, uncovering a terrifying web of deceit and subconscious desire.",
        themes: ["Doppelganger", "Identity", "Subconscious"]
    })
};

// 5. FAQS (Donnie Darko Specific)
export const DONNIE_DARKO_MOVIE_FAQS = {
    'The Butterfly Effect': [
        { question: "What are the different endings?", answer: "The theatrical cut ends with Evan intentionally passing Kayleigh on the street to save her. The darker Director's Cut shows Evan traveling back to the womb and strangling himself with his umbilical cord to prevent all the suffering he caused." },
        { question: "How does the time travel work?", answer: "Evan projects his consciousness into his younger self by focusing on journals or home movies. However, unlike traditional time travel, his physical body remains in the present while his mind alters the past, creating new timelines instantly." },
        { question: "Why do his nose and ears bleed?", answer: "The nosebleeds signify the brain damage caused by holding multiple lifetimes of memories. His brain struggles to reconcile the new timeline with the old memories, physically damaging his neural pathways." },
        { question: "Is the movie based on real science?", answer: "It is based on the 'Chaos Theory' concept that small initial differences may lead to large unforeseen consequences (the butterfly effect), but the method of memory-based time travel is purely fictional." }
    ],
    '12 Monkeys': [
        { question: "Is Cole insane?", answer: "The film deliberately plays with this ambiguity, making the audience question reality. However, the ending confirms the time travel is real through the voicemail message and the specific bullet wound trick Cole performs." },
        { question: "Who is the boy at the airport?", answer: "The young boy witnessing the shooting at the airport is actually a young James Cole. He grows up haunted by the memory of his own death, creating a closed time loop that cannot be changed." },
        { question: "Did the 12 Monkeys release the virus?", answer: "No. The twist is that the Army of the 12 Monkeys was just a group of animal rights activists who released zoo animals. The actual virus was released by Dr. Peters, the assistant to Kathryn's father." },
        { question: "Is this related to a short film?", answer: "Yes, 12 Monkeys is a feature-length adaptation of Chris Marker's 1962 French short film 'La Jetée', which tells a similar story almost entirely through still photographs." }
    ],
    'The Jacket': [
        { question: "Is Jack really traveling through time?", answer: "The movie leaves it open to interpretation. He could physically be traveling, or his trauma and sensory deprivation in the morgue drawer are allowing his consciousness to project into a possible future." },
        { question: "How does he die in the end?", answer: "Jack slips on the ice and suffers a fatal head wound, fulfilling the prophecy of his death. However, by changing the past, he ensures that Jackie grows up to have a better life." },
        { question: "What is the significance of the jacket?", answer: "The straitjacket represents his helplessness and confinement. It is the catalyst for his 'jumps', acting as a sensory deprivation tank that forces his mind to detach from his body." },
        { question: "Why does Keira Knightley's character change?", answer: "In the original timeline, Jackie is a broken, smoking waitress. After Jack intervenes in the past to save her mother, the timeline shifts, and she becomes a healthy, stable nurse." }
    ],
    'Open Your Eyes': [
        { question: "Is this the same as Vanilla Sky?", answer: "Yes, 'Vanilla Sky' is the Hollywood remake of this Spanish film ('Abre los Ojos'). Both were written by Alejandro Amenábar, but the original is often considered darker and more ambiguous." },
        { question: "What is 'Life Extension'?", answer: "It is the cryonics company that froze César after his suicide. The second half of the movie is revealed to be a lucid dream constructed by the company, which has turned into a nightmare." },
        { question: "Who is the man in the park?", answer: "The man in the park is the technical support for his dream. He appears to explain to César that his reality is artificial and that he has the choice to wake up." },
        { question: "Why does he choose to wake up?", answer: "César realizes that a perfect dream is meaningless without the risk of real life. He chooses to wake up into a future 150 years later, accepting his disfigurement and mortality over a fake paradise." }
    ],
    'Coherence': [
        { question: "Which Em survives at the end?", answer: "The Em we follow throughout the movie kills her alternate self in the 'good' timeline to take over her life. However, the final phone call reveals she may not be the only version of Em who had that plan." },
        { question: "What is the significance of the glow sticks?", answer: "The glow sticks (red, blue, green) serve as markers to identify different timelines. As the characters move between houses, the color of their glow sticks reveals that they have unknowingly crossed into alternate realities." },
        { question: "Was the movie scripted?", answer: "Remarkably, no. The actors were given character notes and a rough outline of events each day, but the dialogue was largely improvised, creating genuine confusion and tension." },
        { question: "What is the Schrodinger's Cat theory mentioned?", answer: "The film uses the thought experiment to explain that the comet has caused a state of 'coherence' where all possible realities exist simultaneously until the comet passes and they collapse into one." }
    ],
    "Jacob's Ladder": [
        { question: "What are the demons chasing Jacob?", answer: "As the chiropractor explains: 'If you're frightened of dying, you'll see devils tearing your life away. But if you've made your peace, the devils are really angels freeing you.' They are manifestations of his resistance to death." },
        { question: "Is the government conspiracy real?", answer: "While the drug 'The Ladder' and the experiments were real in the context of the film's backstory, the conspiracy plot we see is likely part of Jacob's dying hallucination as his mind tries to rationalize his trauma." },
        { question: "When did Jacob actually die?", answer: "Jacob died on the operating table in Vietnam at the beginning of the movie. The entire film is his 'flash of life' before death, a purgatorial journey to accept letting go." },
        { question: "What is the significance of his son Gabe?", answer: "Gabe (played by Macaulay Culkin) represents Jacob's anchor to love and peace. Leading him up the stairs at the end signifies Jacob finally accepting his death and moving on." }
    ],
    'Dark City': [
        { question: "Are they in space?", answer: "Yes. The twist reveals that the 'City' is actually a massive space station / habitat constructed by the Strangers, floating through the cosmos, not located on Earth at all." },
        { question: "Why is it always night?", answer: "The Strangers are parasitic aliens who are sensitive to light. They keep the city in perpetual darkness to survive, using their telekinetic powers to tune the city while the humans sleep." },
        { question: "What is 'The Tuning'?", answer: "Tuning is the Strangers' ability to physically reshape the city's architecture and alter human memories. They swap people's identities daily to study the human soul." },
        { question: "How is this related to The Matrix?", answer: "Dark City was released one year before The Matrix and shares identical themes (simulated reality, chosen one) and even used some of the same sets (the rooftops) for filming." }
    ],
    'Mulholland Drive': [
        { question: "What does the blue box represent?", answer: "The blue box represents the truth or reality. Opening it forces Diane to wake up from her fantasy (the first part of the film) and face the harsh, tragic reality of her failed life." },
        { question: "Who are Betty and Rita?", answer: "Betty and Rita are idealized dream versions of Diane and Camilla. Betty is the star Diane wanted to be, and Rita is the vulnerable lover she wanted Camilla to be." },
        { question: "What is the Cowboy's role?", answer: "The Cowboy acts as a surreal gatekeeper or conscience. His statement 'If you do good, you'll see me one more time' foreshadows Diane's awakening to her guilt." },
        { question: "Is the movie a dream?", answer: "The first two-thirds of the movie are widely accepted to be Diane's guilt-induced dream, reimagining her life as a Hollywood success story before reality crashes in." }
    ],
    'Eternal Sunshine of the Spotless Mind': [
        { question: "Why do they repeat the same mistakes?", answer: "The film suggests that memory erasure doesn't change who you are. Joel and Clementine are drawn to each other by fate or personality, meaning they are destined to repeat the cycle of love and pain." },
        { question: "Is the procedure scientifically possible?", answer: "Currently, no. While scientists can dampen the emotional intensity of traumatic memories, selectively erasing specific people from a human brain is pure science fiction." },
        { question: "What does the title mean?", answer: "It is a quote from an Alexander Pope poem. It refers to the 'bliss' of ignorance—the idea that forgetting your troubles leads to happiness, a concept the movie ultimately challenges." },
        { question: "What happens in the house crumbling scene?", answer: "As Joel fights to keep his memories, his subconscious physically collapses around him. The crumbling house represents the last vestiges of his memory of Clementine being destroyed." }
    ],
    'Enemy': [
        { question: "What does the spider mean?", answer: "The spider symbolizes totalitarian control, specifically the subconscious fear of commitment, motherhood, and domestic entrapment that terrifies the protagonist." },
        { question: "Are Adam and Anthony the same person?", answer: "Most interpretations suggest they are the same man struggling with a dissociative identity split: one is the faithful husband (Adam), the other the cheater (Anthony)." },
        { question: "Why does the wife scream at the end?", answer: "She screams because she sees the spider (her husband's view of her) in the room. It signifies that the cycle has not been broken and his fear of intimacy remains." },
        { question: "What is the significance of the blueberries?", answer: "Blueberries are the only food Adam eats, while Anthony hates them. This small detail is a subtle hint used by the wife to verify that the man she is with is not who he claims to be." }
    ]
};

// 6. STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    1954: "You can't change who people are without destroying who they were.",
    63: "There's no right, there's no wrong, there's only popular opinion.",
    9667: "I was 27 years old the first time I died.",
    1902: "Open your eyes.",
    220289: "We're the dark version of ourselves.",
    2291: "The only thing that burns in Hell is the part of you that won't let go of life.",
    2666: "Sleep... now.",
    1018: "Silencio.",
    38: "Blessed are the forgetful, for they get the better even of their blunders.",
    181886: "Chaos is order yet undeciphered."
};

// 7. COLORS & RATINGS
export const CINEMATIC_COLORS = {
    "Sci-Fi": "#0ea5e9", "Thriller": "#dc2626", "Mystery": "#8b5cf6", "Drama": "#f59e0b", "Horror": "#9f1239", "Romance": "#ec4899"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Confused", color: "#dc2626", symbol: "😵", bgColor: "bg-red-900/30", description: "Too confusing" },
    { value: 2, label: "Trippy", color: "#ea580c", symbol: "🌀", bgColor: "bg-orange-900/30", description: "Good mind-bender" },
    { value: 3, label: "Mind-Blowing", color: "#16a34a", symbol: "🤯", bgColor: "bg-green-900/30", description: "Excellent writing" },
    { value: 4, label: "Masterpiece", color: "#eab308", symbol: "🐇", bgColor: "bg-yellow-900/30", description: "Donnie Darko level" }
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
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return DONNIE_DARKO_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A mind-bending thriller.`,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': movieInfo?.rating || 7.5, 'bestRating': 10, 'worstRating': 1, 'ratingCount': 100 }
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

export const formatSensitiveTimeline = (tmdbId) => {
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    return {
        scenes: raw.scenes.map(scene => ({
            start: scene.start, end: scene.end, type: scene.type, description: scene.description || ''
        }))
    };
};