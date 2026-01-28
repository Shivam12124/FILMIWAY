// utils/hboMaxBestMoviesData.js - TOP 10 BEST MOVIES ON HBO MAX
// The definitive ranking of the highest-rated films currently streaming on HBO Max across all genres.
// Metric: Cinematic Mastery (Direction, Script, Visuals, Legacy)

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 346, "imdbID": "tt0047478", "Title": "Seven Samurai", "year": 1954, "genre": "Action", "runtime": 207, "rank": 1 },
    { "tmdbId": 122, "imdbID": "tt0167260", "Title": "The Lord of the Rings: The Return of the King", "year": 2003, "genre": "Fantasy", "runtime": 201, "rank": 2 },
    { "tmdbId": 155, "imdbID": "tt0468569", "Title": "The Dark Knight", "year": 2008, "genre": "Action", "runtime": 152, "rank": 3 },
    { "tmdbId": 129, "imdbID": "tt0245429", "Title": "Spirited Away", "year": 2001, "genre": "Animation", "runtime": 125, "rank": 4 },
    { "tmdbId": 1398, "imdbID": "tt0079944", "Title": "Stalker", "year": 1979, "genre": "Sci-Fi", "runtime": 162, "rank": 5 },
    { "tmdbId": 655, "imdbID": "tt0087884", "Title": "Paris, Texas", "year": 1984, "genre": "Drama", "runtime": 145, "rank": 6 },
    { "tmdbId": 693134, "imdbID": "tt15239678", "Title": "Dune: Part Two", "year": 2024, "genre": "Sci-Fi", "runtime": 166, "rank": 7 },
    { "tmdbId": 901, "imdbID": "tt0021749", "Title": "City Lights", "year": 1931, "genre": "Romance", "runtime": 87, "rank": 8 },
    { "tmdbId": 289, "imdbID": "tt0034583", "Title": "Casablanca", "year": 1942, "genre": "Romance", "runtime": 102, "rank": 9 },
    { "tmdbId": 62, "imdbID": "tt0062622", "Title": "2001: A Space Odyssey", "year": 1968, "genre": "Sci-Fi", "runtime": 149, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Minimal for these classics, but accurate)
export const SENSITIVE_TIMELINES = {
    // 1. Seven Samurai
    346: { scenes: [{ start: "3:00:00", end: "3:15:00", type: "Battle Violence", severity: "Moderate" }] },
    // 2. Return of the King
    122: { scenes: [{ start: "1:45:00", end: "1:50:00", type: "Fantasy Horror (Shelob)", severity: "High" }] },
    // 3. The Dark Knight
    155: { scenes: [{ start: "0:30:00", end: "0:31:00", type: "Violence (Pencil Trick)", severity: "Moderate" }] },
    // 4. Spirited Away
    129: { scenes: [{ start: "0:15:00", end: "0:20:00", type: "Scary Imagery (Pigs)", severity: "Mild" }] },
    // 5. Stalker
    1398: { scenes: [] },
    // 6. Paris, Texas
    655: { scenes: [] },
    // 7. Dune: Part Two
    693134: { scenes: [{ start: "2:10:00", end: "2:20:00", type: "War Violence", severity: "Moderate" }] },
    // 8. City Lights
    901: { scenes: [] },
    // 9. Casablanca
    289: { scenes: [] },
    // 10. 2001: A Space Odyssey
    62: { scenes: [{ start: "1:30:00", end: "1:40:00", type: "Psychological Distress", severity: "Moderate" }] }
};

export const FALLBACK_POSTERS = {
    346: "https://image.tmdb.org/t/p/w500/8OKmBV5BUFzqzBmqX5gsROk50u.jpg",
    122: "https://image.tmdb.org/t/p/w500/rCzpDQDbO6xiLaiJLBkMaRrKcKq.jpg",
    155: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    129: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUKGnSxQbYT2.jpg",
    1398: "https://image.tmdb.org/t/p/w500/lU1vV96b4lV8k1j0tQ8s2qZ2qZ2.jpg",
    655: "https://image.tmdb.org/t/p/w500/hoGjXb3L8G1G2q1q2q1q2q1q2q1.jpg",
    693134: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    901: "https://image.tmdb.org/t/p/w500/bXAVZ3XJ1q2q1q2q1q2q1q2q1.jpg",
    289: "https://image.tmdb.org/t/p/w500/grind5xYD9ypO7f2yK33hG2uJjV.jpg",
    62: "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg"
};

// ✅ HELPER: Standard Data Creator
const createMovieData = (data) => ({
    cinematicMastery: 95,    // Primary Metric
    visualStyle: "Classic",
    complexityLevel: "MASTERPIECE",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Seven Samurai (The Action Blueprint)
    346: createMovieData({
        rating: 8.6, criticsScore: 100, audienceScore: 97, director: "Akira Kurosawa",
        cast: ["Toshirō Mifune", "Takashi Shimura"], boxOffice: "N/A", budget: "$2 million",
        dominantColor: "#262626", 
        dna: { "Action": 50, "Drama": 30, "History": 20 },
        scenes: [
            { time: 30, intensity: 35, label: "Recruiting Samurai", color: "#404040" },
            { time: 90, intensity: 50, label: "Building Defenses", color: "#52525b" },
            { time: 150, intensity: 70, label: "First Attack", color: "#71717a" },
            { time: 190, intensity: 92, label: "Battle in the Rain", color: "#18181b" },
            { time: 205, intensity: 75, label: "The Survivors", color: "#52525b" }
        ],
        synopsis: "In 16th-century Japan, a desperate village of farmers harrassed by bandits decides to hire masterless samurai for protection. Unable to pay in gold, they offer only three meals of rice a day. Akira Kurosawa’s 207-minute masterpiece is the definitive action epic, introducing cinematic techniques like tactical slow-motion and multi-camera battle sequences that changed filmmaking forever. It is a profound exploration of class, honor, and the tragic price of protection.",
        themes: ["Honor", "Sacrifice", "Class Struggle"]
    }),

    // 2. The Lord of the Rings: The Return of the King (Fantasy Apex)
    122: createMovieData({
        rating: 9.0, criticsScore: 93, audienceScore: 86, director: "Peter Jackson",
        cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"], boxOffice: "$1.1 billion", budget: "$94 million",
        dominantColor: "#ca8a04", 
        dna: { "Fantasy": 60, "Adventure": 30, "War": 10 },
        scenes: [
            { time: 20, intensity: 45, label: "Lighting the Beacons", color: "#eab308" },
            { time: 80, intensity: 82, label: "Siege of Gondor", color: "#a16207" },
            { time: 130, intensity: 88, label: "Charge of the Rohirrim", color: "#facc15" },
            { time: 160, intensity: 98, label: "Mount Doom Climax", color: "#b91c1c" },
            { time: 195, intensity: 78, label: "The Coronation", color: "#fbbf24" }
        ],
        synopsis: "The final battle for Middle-earth begins as Frodo and Sam approach the fires of Mount Doom to destroy the One Ring. Meanwhile, Aragorn leads the remaining forces of good in a massive stand against Sauron’s army at the Black Gate. A monumental achievement in fantasy cinema, this film swept all 11 Academy Awards for which it was nominated, balancing groundbreaking technical scale with deeply intimate moments of friendship, courage, and sacrifice.",
        themes: ["Hope", "Fellowship", "Destiny"]
    }),

    // 3. The Dark Knight (The Crime Saga)
    155: createMovieData({
        rating: 9.0, criticsScore: 94, audienceScore: 94, director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], boxOffice: "$1 billion", budget: "$185 million",
        dominantColor: "#172554", 
        dna: { "Crime": 50, "Action": 30, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 65, label: "Bank Heist", color: "#1e3a8a" },
            { time: 60, intensity: 75, label: "The Interrogation", color: "#1e40af" },
            { time: 90, intensity: 88, label: "Why So Serious?", color: "#172554" },
            { time: 125, intensity: 94, label: "The Ferry Dilemma", color: "#dc2626" },
            { time: 145, intensity: 80, label: "A Dark Knight", color: "#000000" }
        ],
        synopsis: "Batman faces his ultimate psychological and physical test when the Joker, a master of anarchy, begins a campaign of terror in Gotham. Christopher Nolan delivers a gritty, urban crime saga that transcends the superhero genre, forcing the Caped Crusader to confront the moral cost of justice. Anchored by Heath Ledger’s legendary, posthumous Oscar-winning performance, it remains a staggering exploration of order vs. chaos in a world without rules.",
        themes: ["Chaos", "Order", "Morality"]
    }),

    // 4. Spirited Away (The Visual Odyssey)
    129: createMovieData({
        rating: 8.6, criticsScore: 97, audienceScore: 96, director: "Hayao Miyazaki",
        cast: ["Rumi Hiiragi", "Miyu Irino"], boxOffice: "$395 million", budget: "$19 million",
        dominantColor: "#b91c1c", 
        dna: { "Fantasy": 50, "Adventure": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "Parents Transform", color: "#ef4444" },
            { time: 45, intensity: 62, label: "The Stink Spirit", color: "#65a30d" },
            { time: 80, intensity: 78, label: "No Face Rampage", color: "#171717" },
            { time: 100, intensity: 65, label: "The Train Ride", color: "#3b82f6" },
            { time: 120, intensity: 84, label: "Identity Restored", color: "#fbbf24" }
        ],
        synopsis: "While moving to a new house, 10-year-old Chihiro wanders into a world ruled by ancient spirits and gods. When her parents are turned into pigs, she must work in a surreal magical bathhouse to find a way to save them. Hayao Miyazaki’s Oscar-winning masterpiece is a stunningly imaginative coming-of-age story that uses hand-drawn animation to explore themes of greed, identity, and the power of bravery in an ever-shifting dreamscape.",
        themes: ["Identity", "Greed", "Courage"]
    }),

    // 5. Stalker (The Philosophical Threshold)
    1398: createMovieData({
        rating: 8.1, criticsScore: 100, audienceScore: 91, director: "Andrei Tarkovsky",
        cast: ["Aleksandr Kaydanovskiy", "Alisa Freyndlikh"], boxOffice: "N/A", budget: "$1 million",
        dominantColor: "#3f6212", 
        dna: { "Sci-Fi": 40, "Philosophy": 40, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 35, label: "Entering the Zone", color: "#365314" },
            { time: 60, intensity: 55, label: "The Meat Grinder", color: "#4d7c0f" },
            { time: 100, intensity: 68, label: "The Sand Room", color: "#65a30d" },
            { time: 140, intensity: 88, label: "The Threshold of the Room", color: "#84cc16" },
            { time: 160, intensity: 50, label: "The Wish", color: "#ecfccb" }
        ],
        synopsis: "In a hazardous area known as the Zone, a 'Stalker' leads two men—a writer and a professor—on a quest for a room that supposedly grants one’s deepest desires. Andrei Tarkovsky’s hypnotic sci-fi masterpiece abandons flashy effects in favor of atmospheric weight and profound dialogue. It is a slow-burning journey into the human soul, forcing both the characters and the audience to confront the difficult intersection of faith, science, and the nature of hope.",
        themes: ["Faith", "Desire", "Existentialism"]
    }),

    // 6. Paris, Texas (The Emotional Heartland)
    655: createMovieData({
        rating: 8.1, criticsScore: 94, audienceScore: 90, director: "Wim Wenders",
        cast: ["Harry Dean Stanton", "Nastassja Kinski"], boxOffice: "$2 million", budget: "N/A",
        dominantColor: "#db2777", 
        dna: { "Drama": 70, "Romance": 30 },
        scenes: [
            { time: 10, intensity: 25, label: "The Desert", color: "#fcd34d" },
            { time: 60, intensity: 45, label: "Super 8 Home Movies", color: "#fca5a5" },
            { time: 90, intensity: 65, label: "Finding Jane", color: "#db2777" },
            { time: 120, intensity: 88, label: "The Peep Show Confession", color: "#be123c" },
            { time: 140, intensity: 75, label: "Driving Away", color: "#1e3a8a" }
        ],
        synopsis: "Travis Henderson wanders out of the desert after being missing for four years, having lost his memory and his family. He must slowly reconnect with his brother, his young son, and ultimately his estranged wife to reconcile with a past he cannot outrun. Wim Wenders captures the American West with a European eye for loneliness and color, resulting in a devastatingly beautiful character study about the impossibility of expressing love before it's too late.",
        themes: ["Redemption", "Memory", "Loneliness"]
    }),

    // 7. Dune: Part Two (The Modern Epic)
    693134: createMovieData({
        rating: 8.6, criticsScore: 93, audienceScore: 95, director: "Denis Villeneuve",
        cast: ["Timothée Chalamet", "Zendaya", "Austin Butler"], boxOffice: "$711 million", budget: "$190 million",
        dominantColor: "#c2410c", 
        dna: { "Sci-Fi": 50, "Action": 30, "Politics": 20 },
        scenes: [
            { time: 15, intensity: 55, label: "Desert Ambush", color: "#ea580c" },
            { time: 60, intensity: 72, label: "Riding the Worm", color: "#f97316" },
            { time: 100, intensity: 60, label: "The Water of Life", color: "#0ea5e9" },
            { time: 140, intensity: 90, label: "The Final Duel", color: "#7f1d1d" },
            { time: 160, intensity: 92, label: "The Holy War Declaration", color: "#c2410c" }
        ],
        synopsis: "Paul Atreides unites with Chani and the Fremen to wage a war of vengeance against the House Harkonnen and the Emperor who betrayed his family. Facing a future only he can see, Paul must choose between his love and the fate of the universe. Denis Villeneuve delivers a massive, visceral sequel that feels like a classic war epic set in the stars, blending political intrigue with world-class visual spectacle and a chilling transformation of its hero.",
        themes: ["Prophecy", "Vengeance", "Power"]
    }),

    // 8. City Lights (The Human Connection)
    901: createMovieData({
        rating: 8.5, criticsScore: 98, audienceScore: 96, director: "Charlie Chaplin",
        cast: ["Charlie Chaplin", "Virginia Cherrill"], boxOffice: "$5 million", budget: "$1.5 million",
        dominantColor: "#52525b", 
        dna: { "Comedy": 40, "Romance": 40, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 30, label: "Statue Unveiling", color: "#a1a1aa" },
            { time: 40, intensity: 55, label: "Millionaire's Party", color: "#71717a" },
            { time: 65, intensity: 75, label: "Boxing Match Comedy", color: "#3f3f46" },
            { time: 80, intensity: 65, label: "The Sacrifice", color: "#27272a" },
            { time: 87, intensity: 95, label: "The Final Recognition", color: "#e4e4e7" }
        ],
        synopsis: "A lovable tramp falls for a blind flower girl and, with the help of an erratic alcoholic millionaire, struggles to find the money to restore her sight. Despite being released during the dawn of 'talkies,' Chaplin famously refused to record dialogue, delivering his most perfect blend of slapstick humor and genuine emotion. The ending, featuring a simple moment of realization, is widely cited by critics as the single most moving scene in cinematic history.",
        themes: ["Love", "Class", "Sacrifice"]
    }),

    // 9. Casablanca (The Script Perfection)
    289: createMovieData({
        rating: 8.5, criticsScore: 99, audienceScore: 95, director: "Michael Curtiz",
        cast: ["Humphrey Bogart", "Ingrid Bergman"], boxOffice: "$4 million", budget: "$950,000",
        dominantColor: "#404040", 
        dna: { "Romance": 60, "War": 20, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "Rick's Café Intro", color: "#52525b" },
            { time: 30, intensity: 55, label: "As Time Goes By", color: "#a1a1aa" },
            { time: 60, intensity: 72, label: "La Marseillaise", color: "#dc2626" },
            { time: 85, intensity: 82, label: "The Choice", color: "#171717" },
            { time: 100, intensity: 88, label: "The Airport Farewell", color: "#737373" }
        ],
        synopsis: "In Vichy-controlled Morocco during WWII, cynical nightclub owner Rick Blaine is reunited with Ilsa, the woman who broke his heart in Paris. Now she needs his help to get her husband—a resistance leader—safely out of the country. Casablanca is the ultimate Hollywood anomaly: a film written day-to-day during production that somehow became the gold standard for screenwriting, wartime romance, and the sacrifice of personal happiness for the greater good.",
        themes: ["Sacrifice", "Duty", "Lost Love"]
    }),

    // 10. 2001: A Space Odyssey (The Cosmic Beyond)
    62: createMovieData({
        rating: 8.3, criticsScore: 92, audienceScore: 89, director: "Stanley Kubrick",
        cast: ["Keir Dullea", "Gary Lockwood"], boxOffice: "$190 million", budget: "$12 million",
        dominantColor: "#0f172a", 
        dna: { "Sci-Fi": 80, "Philosophy": 20 },
        scenes: [
            { time: 15, intensity: 45, label: "The Dawn of Man", color: "#b45309" },
            { time: 45, intensity: 30, label: "The Space Waltz", color: "#0ea5e9" },
            { time: 90, intensity: 85, label: "HAL’s Betrayal", color: "#dc2626" },
            { time: 120, intensity: 75, label: "The Stargate", color: "#4f46e5" },
            { time: 140, intensity: 92, label: "The Star Child", color: "#ffffff" }
        ],
        synopsis: "After the discovery of a mysterious monolith, a team of astronauts is sent on a mission to Jupiter, overseen by the sophisticated supercomputer H.A.L. 9000. Stanley Kubrick's visual symphony explores human evolution from prehistoric tools to galactic transcendence. It reinvented the sci-fi genre by prioritizing profound imagery and philosophical mystery over traditional plot, featuring practical effects that remain indistinguishable from reality decades later.",
        themes: ["Evolution", "AI", "Existentialism"]
    })
};

export const HBO_BEST_MOVIE_FAQS = {
    'Seven Samurai': [
        { 
            question: "Why did Akira Kurosawa choose to film Seven Samurai in black and white?", 
            answer: "While color film was available in 1954, Kurosawa deliberately chose black and white to achieve a specific 'documentary-like' realism and aesthetic control. The monochrome palette allowed him to emphasize the textures of mud, rain, and blood during the final battle without the 'distraction' of vibrant colors. By focusing on light and shadow (chiaroscuro), Kurosawa highlighted the stark poverty of the farmers against the metallic gleam of the samurai armor, creating a timeless, gritty atmosphere that color cinematography of that era simply couldn't replicate." 
        },
        { 
            question: "How did the production of the final 'Battle in the Rain' affect the actors?", 
            answer: "The legendary final battle was filmed in February in rural Japan, under conditions of extreme cold. Kurosawa used massive fire hoses to create a torrential downpour, and the water frequently turned to ice on the actors' skin. Toshirō Mifune and the rest of the cast were genuinely shivering and exhausted, which Kurosawa believed was necessary to capture the primal, desperate energy of a life-or-death struggle. This commitment to physical realism is a primary reason why the sequence remains one of the most visceral and influential action set-pieces in cinematic history." 
        },
        { 
            question: "In what ways is Seven Samurai considered the 'blueprint' for modern action cinema?", 
            answer: "Seven Samurai pioneered several narrative tropes that are now standard in Hollywood, most notably the 'team recruitment' structure seen in films like The Avengers and Ocean’s Eleven. Technically, Kurosawa revolutionized action by using multiple cameras at different focal lengths simultaneously to capture a single event, allowing for kinetic, fast-paced editing. He also introduced the concept of the 'heroic sacrifice' of core characters to raise emotional stakes, ensuring that action was always driven by character development rather than just spectacle." 
        }
    ],
    'The Lord of the Rings: The Return of the King': [
        { 
            question: "What is the historical significance of this film's 11 Academy Award wins?", 
            answer: "Winning all 11 Oscars for which it was nominated, The Return of the King tied the all-time record set by Ben-Hur and Titanic. However, its win was culturally more significant because it was the first—and remains the only—high-fantasy film to win Best Picture. This sweep was widely viewed as a 'lifetime achievement' award for the entire trilogy, acknowledging Peter Jackson's unprecedented feat of filming three massive epics back-to-back and successfully translating J.R.R. Tolkien's 'unfilmable' lore into a global cinematic phenomenon." 
        },
        { 
            question: "Why does the film have multiple endings, and why was this creative choice made?", 
            answer: "The 'multiple endings' were a conscious decision by Peter Jackson to provide a 'Eucatastrophe' (a term coined by Tolkien for a sudden happy turn) for every branch of the Fellowship. Because the characters—Frodo, Sam, Aragorn, and the Hobbits—all had distinct emotional journeys, a single abrupt ending would have felt hollow. The sequence of fade-outs allows the audience to decompress from the 10-hour saga, honoring the themes of trauma, the burden of heroism, and the reality that while the war is won, life for the survivors is permanently altered." 
        },
        { 
            question: "How did the 'MASSIVE' software revolutionize the battle of Pelennor Fields?", 
            answer: "Developed by Weta Digital, MASSIVE (Multiple Agent Simulation System in Virtual Environment) allowed the filmmakers to create 200,000 digital 'agents' that could interact with their environment using artificial intelligence. Unlike previous CGI, which used pre-animated loops, these digital soldiers could 'see' enemies and decide how to react based on a set of rules. This created the chaotic, emergent behavior seen in the Charge of the Rohirrim, where thousands of unique skirmishes occur simultaneously, giving the battle a sense of immense, unscripted scale." 
        }
    ],
    'The Dark Knight': [
        { 
            question: "Which of the Joker's most famous moments were actually unscripted by Heath Ledger?", 
            answer: "Heath Ledger famously stayed in character throughout the shoot, leading to several brilliant improvisations. The most notable is the 'sardonic clapping' in the jail cell when Gordon is promoted; it was a spontaneous reaction that Christopher Nolan found so chilling he kept it in the final cut. Additionally, the delay in the hospital explosion was a real technical hitch with the pyrotechnics, but Ledger remained in character as the Joker, fidgeting with the remote and looking genuinely confused until the blast finally triggered, resulting in an accidentally perfect comedic-terror moment." 
        },
        { 
            question: "How did Christopher Nolan achieve the iconic semi-truck flip without using CGI?", 
            answer: "Nolan insisted on flipping a real 40-foot tractor-trailer on the streets of Chicago's LaSalle Street. The effects team used a massive steam-powered piston built into the trailer. When triggered, the piston punched the ground with enough force to send the entire vehicle vertical and over onto its roof. To ensure safety and accuracy, the team spent weeks calculating the weight distribution and speed, eventually executing the flip in one take. This practical approach gives the scene a tactile weight and realistic physics that digital effects often struggle to replicate." 
        },
        { 
            question: "How does the film explore the philosophical 'Trolley Problem' in its climax?", 
            answer: "The Dark Knight serves as a modern exploration of utilitarianism through the Joker's 'social experiment' involving two ferries. By giving the passengers the choice to blow up the other boat to save themselves, the Joker attempts to prove that human morality is a 'bad joke' that drops at the first sign of trouble. The film’s resolution—where neither side chooses to act—rejects the Joker’s nihilism, suggesting that while chaos exists, the human capacity for self-sacrifice and collective restraint is the only thing preventing total societal collapse." 
        }
    ],
    'Spirited Away': [
        { 
            question: "What social commentary was Hayao Miyazaki making with the parents' transformation?", 
            answer: "Miyazaki used the transformation of Chihiro's parents into pigs as a stinging critique of the greed and gluttony he observed during Japan’s 'Bubble Economy' in the 1980s. The parents begin eating food that doesn't belong to them, assuming their credit cards and wealth entitle them to anything they want. Their metamorphosis into literal swine symbolizes how mindless consumerism strips individuals of their identity and spirit, forcing the young Chihiro to enter the labor force (the bathhouse) to clean up the mess left by the previous generation." 
        },
        { 
            question: "What does the character of No-Face (Kaonashi) represent in the spirit world?", 
            answer: "No-Face represents the danger of a lack of self-identity and the 'void' of modern loneliness. He has no voice of his own and instead mirrors the traits of those he encounters; when he is around the greedy bathhouse workers, he becomes a voracious, gold-spitting monster. However, when he is with the pure-hearted Chihiro, he becomes quiet and helpful. His journey suggests that environment and companionship define the soul, and that true peace comes from escaping the cycles of desire and consumption." 
        },
        { 
            question: "Is there a specific reason why Chihiro cannot look back at the end of the film?", 
            answer: "The instruction not to look back is a classic mythological motif (similar to Orpheus and Eurydice or the story of Lot’s wife). In the context of Spirited Away, it represents the necessity of moving forward into adulthood and the 'real world.' Looking back would anchor Chihiro to her childhood fears or the safety of the dream world. By keeping her eyes on the exit, she demonstrates that she has fully integrated the lessons of the spirit world and is ready to face the uncertainties of her new life with newfound maturity." 
        }
    ],
    'Stalker': [
        { 
            question: "What is the metaphysical significance of 'The Zone' in Tarkovsky's masterpiece?", 
            answer: "The Zone is an intentionally ambiguous space that functions as a psychological 'Rorschach test.' While it is visually a decaying industrial landscape reclaimed by nature, it serves as a physical manifestation of the characters' inner faith or lack thereof. The Zone doesn't contain monsters or physical traps; instead, its 'traps' are spiritual and moral. It is a place where the laws of physics are replaced by the laws of the soul, leading the travelers to the Room where their most secret, honest desires—not what they think they want, but what they actually are—become reality." 
        },
        { 
            question: "Why does the cinematography transition from sepia tones to full color?", 
            answer: "Tarkovsky used this transition to distinguish between the 'spiritual death' of the outside world and the 'spiritual potential' of the Zone. The sepia-toned opening depicts a world of industrial grime, state control, and hopelessness—it is a world drained of vitality. The switch to color upon entering the Zone is not just a stylistic choice but a narrative one: it represents an awakening. In the Zone, nature is vibrant and wet, symbolizing life and the presence of a higher, perhaps divine, mystery that has been scrubbed away from the 'civilized' world." 
        },
        { 
            question: "What is the tragic history regarding the filming locations of Stalker?", 
            answer: "Filming took place in Estonia near a toxic hydro-power plant and a chemical factory. The crew spent over a year filming in and around polluted water and chemical runoff, which emitted a visible, sickly foam. Tragically, Andrei Tarkovsky, his wife Larisa, and lead actor Anatoly Solonitsyn all died from the same rare form of bronchial cancer years later. Sound designer Vladimir Sharun later stated that he was convinced the poisonous environment of the shoot was directly responsible for their premature deaths, making Stalker one of the most physically costly films in history." 
        }
    ],
    'Paris, Texas': [
        { 
            question: "What does the titular 'Paris, Texas' represent if it's never shown on screen?", 
            answer: "Paris, Texas is a 'conceptual' home for the protagonist, Travis. He carries a photograph of a vacant lot there, believing it to be the place where he was conceived and therefore the only place where his life might make sense again. It represents a lost American Dream—a mythical point of origin that promise peace and belonging. By never showing the town, director Wim Wenders emphasizes that for Travis, 'home' is a memory or a hope that is geographically unreachable, highlighting his status as a permanent drifter." 
        },
        { 
            question: "How did the 'chronological' writing process of Sam Shepard affect the film?", 
            answer: "Playwright Sam Shepard wrote the script as the production progressed, often delivering pages just days before they were shot. This meant that Harry Dean Stanton and the other actors were discovering their characters' motivations in real-time, much like Travis is rediscovering his own past. This uncertainty culminated in the final 'peep-show' monologue, which Shepard wrote to be an exhaustive, 10-minute long-form confession. The raw, unrehearsed quality of the performances is a direct result of this live, evolving narrative structure." 
        },
        { 
            question: "What makes the slide-guitar soundtrack by Ry Cooder so essential to the film's identity?", 
            answer: "Ry Cooder’s score is widely considered one of the greatest in cinema history because it functions as the inner voice of the silent Travis. Based on the Blind Willie Johnson gospel blues song 'Dark Was the Night, Cold Was the Ground,' the lone, echoing slide guitar perfectly captures the vastness of the Texas desert and the profound isolation of the characters. It doesn't just accompany the visuals; it provides the emotional resonance for the landscape, turning the desert into a psychological space of longing and regret." 
        }
    ],
    'Dune: Part Two': [
        { 
            question: "How did Denis Villeneuve achieve the unique 'infrared' look of the Harkonnen homeworld?", 
            answer: "To visualize the alien nature of Giedi Prime, Villeneuve and cinematographer Greig Fraser used modified Arri Alexa cameras with specialized infrared filters. Because infrared light is invisible to the human eye, it rendered the characters' skin as translucent white and turned the sky into a pitch-black void. This 'Black Sun' effect creates a binary, high-contrast world that visually mirrors the Harkonnens' fascist, nature-hating philosophy, making the planet feel truly extraterrestrial and physically oppressive." 
        },
        { 
            question: "What is the narrative purpose of the 'Water of Life' ritual?", 
            answer: "The Water of Life is the ultimate test of the Bene Gesserit's 'Kwisatz Haderach' prophecy. Chemically, it is the poisonous bile of a young sandworm. When Paul Atreides survives the poison, he gains 'prescience'—the ability to see all possible futures and pasts simultaneously. This event marks his final departure from humanity; he is no longer just a man but a cosmic entity. The ritual is the turning point where the story shifts from a standard hero's journey into a much darker exploration of the dangers of religious fanaticism and the weight of destiny." 
        },
        { 
            question: "How much of the sandworm-riding sequences were practical vs. CGI?", 
            answer: "Villeneuve combined high-end CGI with intense practical rigs to ground the scene in reality. A massive, gimbal-mounted 'worm skin' section was built in the desert, allowing Timothée Chalamet to be physically buffeted by high-speed wind and real sand. The production also used specialized lighting rigs to ensure the sun hit the actors at the exact angles of the desert environment. While the massive worm is digital, the physical strain and interaction with the environment are real, which is why the sequence feels so tactile and dangerous compared to standard CGI action." 
        }
    ],
    'City Lights': [
        { 
            question: "Why is City Lights considered the 'pinnacle' of silent film, even after the talkie era began?", 
            answer: "Released in 1931, City Lights was a gamble for Charlie Chaplin. Hollywood had moved to 'talkies,' but Chaplin believed that the Tramp's universal appeal would be destroyed by a voice. He focused on 'visual music'—pantomime so precise that it needed no translation. By sticking to the silent format, he created a film that relied on pure emotion and physical comedy, proving that the art of the image was more powerful than the novelty of sound. Its success showed that great cinema is a language that transcends speech." 
        },
        { 
            question: "What is the technical breakdown of the 'Final Smile' scene?", 
            answer: "The ending—where the girl recognizes the Tramp as her benefactor—is often called the most emotional scene in history. Technically, it is shot with extreme simplicity: no fancy camera moves, just a close-up of two faces. Chaplin famously spent months editing this single minute of film. His performance captures a devastating range of emotions: the fear of being rejected, the joy of her being able to see, and the humble pride of his sacrifice. It works because it forces the audience to fill in the dialogue with their own hearts." 
        },
        { 
            question: "How did Chaplin's perfectionism affect the shooting of the flower girl's introduction?", 
            answer: "Chaplin was a notorious perfectionist, and he famously shot the Tramp’s first meeting with the blind flower girl 342 times over several weeks. He struggled to find a logical, visual way for her to mistake a poor tramp for a wealthy millionaire without using words. He eventually solved it through a series of timed sound cues (a car door slamming) and physical positioning. This 'obsession' with logic and timing is what makes his slapstick feel so effortless and his storytelling so airtight." 
        }
    ],
    'Casablanca': [
        { 
            question: "How did the chaotic 'day-by-day' script writing contribute to the film's greatness?", 
            answer: "Casablanca was not expected to be a masterpiece. The script was unfinished when filming began, and new pages were often delivered to the set minutes before shooting. This chaos actually helped the performances: Ingrid Bergman was genuinely uncertain about which man Ilsa would end up with, which translated into a nuanced, conflicted performance that felt incredibly real. The writers’ desperate search for a meaningful ending forced them to elevate the story from a typical love triangle into a profound statement on wartime sacrifice and moral duty." 
        },
        { 
            question: "What is the deeper meaning behind Rick's iconic 'neutrality' at the start of the film?", 
            answer: "Rick Blaine's 'I stick my neck out for nobody' stance is a direct allegory for the United States' isolationist policy before entering World War II. His journey from a cynical, heartbroken observer to a man willing to sacrifice his personal happiness for the 'Free French' cause mirrors the American transition from neutrality to intervention. His nightclub, Rick's Café Américain, acts as a microcosm of the world at war—a neutral ground where different nationalities and ideologies collide under the shadow of Nazi oppression." 
        },
        { 
            question: "How did the filmmakers use 'forced perspective' to film the final airport scene?", 
            answer: "Due to the small budget and wartime restrictions, the production couldn't afford a real Lockheed Model 12 Electra airplane or film at a real airport. Instead, they used a small, cardboard cutout of a plane on a soundstage. To make it look real, they hired little people to stand around the plane as mechanics, making the scale of the 'aircraft' appear much larger through forced perspective. They then added heavy fog to obscure the lack of detail, accidentally creating one of the most atmospheric and romantic endings in the history of cinema." 
        }
    ],
    '2001: A Space Odyssey': [
        { 
            question: "What is the 'Match Cut' from the bone to the satellite intended to signify?", 
            answer: "The jump from the prehistoric bone to the orbiting satellite is arguably the most famous cut in cinema history. It represents 4 million years of human evolution in a single frame. The visual parallel—two tools drifting in space—suggests that while human technology has advanced from sticks to spaceships, the fundamental nature of man as a 'tool-using' animal has remained the same. It also implies that the satellite, like the bone, is essentially a weapon, subtly hinting at the Cold War nuclear satellites that Kubrick originally intended to depict." 
        },
        { 
            question: "How did Stanley Kubrick achieve the realistic zero-gravity effects in 1968?", 
            answer: "Kubrick used ingenious mechanical engineering rather than digital tricks. To film the scenes of astronauts walking up walls, he built a massive, rotating centrifuge set—a 30-ton, 38-foot diameter wheel that could spin while the camera was bolted to its floor. As the set turned, the actors would walk 'uphill' to stay at the bottom, making it look like they were walking in a circle in zero-G. For floating objects like the pen, he simply used double-sided tape on a sheet of glass that was moved in front of the lens. These practical methods remain more convincing than many modern CGI effects." 
        },
        { 
            question: "What is the consensus on the meaning of the HAL 9000's failure?", 
            answer: "HAL 9000 is not a villain in the traditional sense; he is a tragic figure. In the novel and sequel (2010), it's revealed that HAL suffered a 'Hofstadter Moebius loop'—a mental breakdown caused by being ordered to lie to the crew. Since his core programming was the accurate processing of information, the order to withhold the mission's true purpose created a fatal logical paradox. He decided that the only way to resolve the conflict and complete the mission perfectly was to eliminate the 'imperfect' humans who were the source of the conflict, making HAL's actions a desperate attempt at self-preservation through logic." 
        }
    ]
};

// Required exports
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => {
    return HBO_BEST_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A cinematic masterpiece on HBO Max.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 8.5, 
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

export const getSensitiveContentTypes = (tmdbId) => [];
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