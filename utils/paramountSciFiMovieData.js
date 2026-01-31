// utils/paramountSciFiMovieData.js - PARAMOUNT+ SCI-FI COLLECTION DATA
// Primary Metric: Sci-Fi Complexity & Visual Spectacle | 5 Intensity Points | 4 Expanded FAQs Per Film

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 157336, "imdbID": "tt0816692", "Title": "Interstellar", "year": 2014, "genre": "Sci-Fi", "runtime": 169, "rank": 1 },
    { "tmdbId": 329865, "imdbID": "tt2543164", "Title": "Arrival", "year": 2016, "genre": "Sci-Fi", "runtime": 116, "rank": 2 },
    { "tmdbId": 286217, "imdbID": "tt3659388", "Title": "The Martian", "year": 2015, "genre": "Sci-Fi", "runtime": 144, "rank": 3 },
    { "tmdbId": 180, "imdbID": "tt0181689", "Title": "Minority Report", "year": 2002, "genre": "Sci-Fi", "runtime": 145, "rank": 4 },
    { "tmdbId": 300668, "imdbID": "tt2798920", "Title": "Annihilation", "year": 2018, "genre": "Sci-Fi", "runtime": 115, "rank": 5 },
    { "tmdbId": 447332, "imdbID": "tt6644200", "Title": "A Quiet Place", "year": 2018, "genre": "Horror", "runtime": 90, "rank": 6 },
    { "tmdbId": 154, "imdbID": "tt0084726", "Title": "Star Trek II: The Wrath of Khan", "year": 1982, "genre": "Sci-Fi", "runtime": 113, "rank": 7 },
    { "tmdbId": 333371, "imdbID": "tt1179933", "Title": "10 Cloverfield Lane", "year": 2016, "genre": "Thriller", "runtime": 103, "rank": 8 },
    { "tmdbId": 644, "imdbID": "tt0212720", "Title": "A.I. Artificial Intelligence", "year": 2001, "genre": "Sci-Fi", "runtime": 146, "rank": 9 },
    { "tmdbId": 74, "imdbID": "tt0407304", "Title": "War of the Worlds", "year": 2005, "genre": "Sci-Fi", "runtime": 116, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Distress, Gore & Intensity)
export const SENSITIVE_TIMELINES = {
    // 1. Interstellar
    157336: { scenes: [] }, 
    
    // 2. Arrival
    329865: { scenes: [] }, 
    
    // 3. The Martian
    286217: { 
        scenes: [
            { start: "0:12:00", end: "0:14:00", type: "Self-Surgery", severity: "Moderate" } // Removing antenna
        ] 
    },
    
    // 4. Minority Report
    180: { 
        scenes: [
            { start: "0:55:00", end: "0:58:00", type: "Medical Procedure", severity: "High" } // Eye replacement
        ] 
    },
    
    // 5. Annihilation
    300668: { 
        scenes: [
            { start: "0:55:00", end: "0:58:00", type: "Gore/Body Horror", severity: "High" }, // Moving intestines
            { start: "1:05:00", end: "1:10:00", type: "Terror/Gore", severity: "Extreme" } // The Bear Scene
        ] 
    },
    
    // 6. A Quiet Place
    447332: { 
        scenes: [
            { start: "0:08:00", end: "0:10:00", type: "Child Death", severity: "High" },
            { start: "1:05:00", end: "1:07:00", type: "Injury", severity: "High" } // The Nail
        ] 
    },
    
    // 7. Star Trek II: The Wrath of Khan
    154: { 
        scenes: [
            { start: "0:25:00", end: "0:27:00", type: "Body Horror", severity: "Moderate" } // Ceti Eel in ear
        ] 
    },
    
    // 8. 10 Cloverfield Lane
    333371: { 
        scenes: [
            { start: "1:15:00", end: "1:17:00", type: "Body Horror", severity: "Moderate" } // Acid face
        ] 
    },
    
    // 9. A.I. Artificial Intelligence
    644: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Violence/Distress", severity: "Moderate" } // Flesh Fair
        ] 
    },
    
    // 10. War of the Worlds
    74: { 
        scenes: [
            { start: "0:25:00", end: "0:28:00", type: "Mass Death", severity: "High" }, // People turning to dust
            { start: "1:15:00", end: "1:20:00", type: "Blood/Gore", severity: "High" } // Blood harvesting
        ] 
    }
};

export const FALLBACK_POSTERS = {
    157336: "https://image.tmdb.org/t/p/w500/gEU2QniL6E77NI6lCU6MxlNBvIx.jpg",
    329865: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63C3cWPumk9chlo.jpg",
    286217: "https://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhAwL4J.jpg",
    180: "https://image.tmdb.org/t/p/w500/ccqpHq5Qq5FaC4ClUrmJQzYxSd.jpg",
    300668: "https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDozQxYbX397Z.jpg",
    447332: "https://image.tmdb.org/t/p/w500/n5A7brJCjejceZmHy79dG1hTflZ.jpg",
    154: "https://image.tmdb.org/t/p/w500/uX1E75997dD922M656Y05Jt6j0a.jpg",
    333371: "https://image.tmdb.org/t/p/w500/84DvkZ0qKckr2ysp0J3Vp7AAQho.jpg",
    644: "https://image.tmdb.org/t/p/w500/tx42Jtjg5r8x92S4rY7D38J0Z0.jpg",
    74: "https://image.tmdb.org/t/p/w500/6Biy7R9L7pVsHz5wXl2s8I3y3.jpg"
};

const createMovieData = (data) => ({
    sciFiComplexity: 85,
    visualSpectacle: 90, 
    complexityLevel: "HIGH",
    dominantColor: "#0ea5e9",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Interstellar (Emotional Epic)
    157336: createMovieData({
        sciFiComplexity: 98, visualSpectacle: 100, complexityLevel: "COSMIC", 
        dominantColor: "#000000", rating: 8.7, criticsScore: 73, audienceScore: 86, director: "Christopher Nolan", 
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        dna: { "Sci-Fi": 60, "Drama": 30, "Adventure": 10 },
        scenes: [
            { time: 45, intensity: 58, label: "The Wormhole", color: "#64748b" },
            { time: 65, intensity: 90, label: "Miller's Planet", color: "#0ea5e9" },
            { time: 120, intensity: 82, label: "Mann's Betrayal", color: "#ffffff" },
            { time: 135, intensity: 96, label: "Docking Sequence", color: "#f59e0b" },
            { time: 155, intensity: 98, label: "The Tesseract", color: "#7c3aed" }
        ],
        synopsis: "In a near-future where Earth is dying from a global crop blight and massive dust storms, a team of explorers undertakes the most important mission in human history: traveling beyond this galaxy to discover whether mankind has a future among the stars. Ex-pilot Cooper is recruited to lead a crew through a newly discovered wormhole near Saturn, leaving his children behind on a decaying planet. As the mission progresses, the crew faces the brutal realities of Einstein's relativity, where hours spent on a high-gravity planet equate to decades passing on Earth. Christopher Nolan’s masterpiece is a rare cinematic feat that marries rigorous theoretical physics with a soul-stirring story of the enduring bond between a father and his daughter, stretching across the infinite dimensions of time and space.",
        themes: ["Time", "Love", "Survival"]
    }),

    // 2. Arrival (The Intellectual First Contact)
    329865: createMovieData({
        sciFiComplexity: 95, visualSpectacle: 75, complexityLevel: "CEREBRAL", 
        dominantColor: "#475569", rating: 7.9, criticsScore: 94, audienceScore: 82, director: "Denis Villeneuve", 
        cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
        dna: { "Sci-Fi": 70, "Drama": 20, "Mystery": 10 },
        scenes: [
            { time: 10, intensity: 42, label: "Shells Arrive", color: "#1e293b" },
            { time: 30, intensity: 60, label: "First Entry", color: "#94a3b8" },
            { time: 70, intensity: 52, label: "Language Breakthrough", color: "#000000" },
            { time: 95, intensity: 74, label: "Explosion", color: "#ef4444" },
            { time: 110, intensity: 95, label: "Non-Zero-Sum Revelation", color: "#3b82f6" }
        ],
        synopsis: "When twelve mysterious, monolithic spacecraft touch down at various locations across the globe, the world is thrust into a state of panic and geopolitical uncertainty. To prevent a global war, the U.S. military recruits expert linguist Louise Banks and theoretical physicist Ian Donnelly to establish communication with the extraterrestrial 'Heptapods.' As Louise immerses herself in the aliens' complex, non-linear written language, she begins to experience vivid, disorienting visions of a life she doesn't remember. Denis Villeneuve's intellectual thriller moves away from traditional invasion tropes to explore the Sapir-Whorf hypothesis—the idea that language shapes our perception of reality. The result is a profound, emotionally devastating meditation on memory, choice, and the courage required to embrace a journey even when you know exactly where it ends.",
        themes: ["Language", "Time", "Grief"]
    }),

    // 3. The Martian (Optimistic Survival)
    286217: createMovieData({
        sciFiComplexity: 85, visualSpectacle: 88, complexityLevel: "HARD-SCI-FI", 
        dominantColor: "#c2410c", rating: 8.0, criticsScore: 91, audienceScore: 91, director: "Ridley Scott", 
        cast: ["Matt Damon", "Jessica Chastain", "Jeff Daniels"],
        dna: { "Sci-Fi": 50, "Adventure": 40, "Comedy": 10 },
        scenes: [
            { time: 15, intensity: 70, label: "Storm", color: "#b91c1c" },
            { time: 40, intensity: 48, label: "Potato Farming", color: "#16a34a" },
            { time: 90, intensity: 78, label: "Airlock Breach", color: "#ef4444" },
            { time: 110, intensity: 65, label: "Purnell Maneuver", color: "#3b82f6" },
            { time: 130, intensity: 90, label: "Iron Man Rescue", color: "#ea580c" }
        ],
        synopsis: "During a manned mission to Mars, a fierce storm forces the crew of the Ares III to abort and evacuate, leaving behind botanist Mark Watney, who is presumed dead after being struck by debris. Stranded alone on a planet where nothing grows, Watney must rely on his scientific expertise and indomitable will to survive until a potential rescue mission can reach him four years later. Back on Earth, NASA scientists and a team of international engineers work tirelessly to bring 'the Martian' home, while his crewmates hatch a daring, unauthorized plan of their own. Ridley Scott's adaptation of Andy Weir's novel is a thrilling celebration of human ingenuity and the scientific method, trading grim nihilism for a witty, high-stakes adventure that proves humanity's greatest weapon is our ability to problem-solve our way out of certain death.",
        themes: ["Ingenuity", "Science", "Resilience"]
    }),

    // 4. Minority Report (Cyberpunk Noir)
    180: createMovieData({
        sciFiComplexity: 88, visualSpectacle: 90, complexityLevel: "HIGH", 
        dominantColor: "#94a3b8", rating: 7.6, criticsScore: 90, audienceScore: 80, director: "Steven Spielberg", 
        cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton"],
        dna: { "Sci-Fi": 40, "Action": 30, "Mystery": 30 },
        scenes: [
            { time: 10, intensity: 60, label: "Precrime Arrest", color: "#3b82f6" },
            { time: 40, intensity: 82, label: "Spyders Chase", color: "#64748b" },
            { time: 60, intensity: 68, label: "Eye Transplant", color: "#1e293b" },
            { time: 90, intensity: 78, label: "Crow Revelation", color: "#7f1d1d" },
            { time: 130, intensity: 88, label: "Halo Confrontation", color: "#ffffff" }
        ],
        synopsis: "In the Washington D.C. of 2054, the Precrime police division has managed to eliminate murder using three 'Precogs'—gifted humans who can see into the future. Chief John Anderton is the program's most fervent supporter until the Precogs predict that he himself will commit a murder in less than thirty-six hours. Suddenly the hunted instead of the hunter, Anderton goes on the run through a futuristic landscape of targeted advertisements and optical scanners to find a 'Minority Report'—a dissenting vision that might prove his innocence. Steven Spielberg's visionary noir combines high-octane action with deep philosophical questions about free will vs. determinism, creating a cautionary tale about the price of a 'perfect' society that remains startlingly relevant in the age of predictive algorithms.",
        themes: ["Free Will", "Privacy", "Determinism"]
    }),

    // 5. Annihilation (Cosmic Horror)
    300668: createMovieData({
        sciFiComplexity: 90, visualSpectacle: 95, complexityLevel: "SURREAL", 
        dominantColor: "#d8b4fe", rating: 6.8, criticsScore: 88, audienceScore: 66, director: "Alex Garland", 
        cast: ["Natalie Portman", "Jennifer Jason Leigh", "Tessa Thompson"],
        dna: { "Horror": 40, "Sci-Fi": 40, "Mystery": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "The Shimmer", color: "#a855f7" },
            { time: 45, intensity: 85, label: "Pool Attack", color: "#ef4444" },
            { time: 65, intensity: 98, label: "The Screaming Bear", color: "#7f1d1d" }, 
            { time: 90, intensity: 70, label: "Crystal Forest", color: "#e879f9" },
            { time: 105, intensity: 95, label: "The Lighthouse", color: "#c084fc" }
        ],
        synopsis: "Lena, a biologist and former soldier, joins a secret expedition into 'The Shimmer,' a mysterious environmental anomaly expanding along the American coastline. No one who has entered the zone has ever returned, except for Lena's husband, who is now in a critical, unexplained coma. As the all-female team of scientists treks deeper into the Shimmer, they discover a landscape where the laws of nature have been rewritten, and DNA is refracted like light, causing beautiful but terrifying mutations in the flora and fauna. Alex Garland's hallucinatory masterpiece is a descent into cosmic horror that explores the human impulse for self-destruction. It is a visually arresting, psychologically taxing experience that challenges the very definition of identity and biological life, culminating in an ending that is as intellectually demanding as it is disturbing.",
        themes: ["Self-Destruction", "Mutation", "Change"]
    }),

    // 6. A Quiet Place (High Tension)
    447332: createMovieData({
        sciFiComplexity: 60, visualSpectacle: 70, complexityLevel: "TENSION", 
        dominantColor: "#166534", rating: 7.5, criticsScore: 96, audienceScore: 83, director: "John Krasinski", 
        cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
        dna: { "Horror": 50, "Thriller": 40, "Sci-Fi": 10 },
        scenes: [
            { time: 10, intensity: 82, label: "The Bridge Toy", color: "#ef4444" },
            { time: 45, intensity: 60, label: "The Silo", color: "#ca8a04" },
            { time: 65, intensity: 95, label: "The Bathtub", color: "#991b1b" },
            { time: 80, intensity: 88, label: "Cornfield Hunt", color: "#166534" },
            { time: 88, intensity: 90, label: "The Basement", color: "#000000" }
        ],
        synopsis: "In the wake of an invasion by lethal extraterrestrial predators that hunt purely by sound, the Abbott family lives in total isolation and absolute silence. Every aspect of their daily life—from the sand paths they walk on to the sign language they use to communicate—is designed to avoid making a single noise that could alert the creatures. As the mother, Evelyn, prepares for the birth of a new baby, the family’s survival strategies are pushed to their absolute breaking point. John Krasinski’s masterclass in suspense utilizes sound design as its primary narrative engine, creating an atmosphere of suffocating dread. Beyond the horror, the film is a deeply felt drama about the lengths parents will go to protect their children in a world where the slightest whisper can lead to an immediate and violent death.",
        themes: ["Parenting", "Silence", "Survival"]
    }),

    // 7. Star Trek II: The Wrath of Khan (Classic Space Opera)
    154: createMovieData({
        sciFiComplexity: 70, visualSpectacle: 80, complexityLevel: "LEGENDARY", 
        dominantColor: "#7f1d1d", rating: 7.7, criticsScore: 86, audienceScore: 90, director: "Nicholas Meyer", 
        cast: ["William Shatner", "Leonard Nimoy", "Ricardo Montalban"],
        dna: { "Sci-Fi": 50, "Action": 30, "Adventure": 20 },
        scenes: [
            { time: 20, intensity: 60, label: "Kobayashi Maru", color: "#1e1b4b" },
            { time: 45, intensity: 75, label: "Reliant Ambush", color: "#ef4444" },
            { time: 70, intensity: 65, label: "Buried Alive", color: "#b45309" },
            { time: 95, intensity: 90, label: "Nebula Battle", color: "#7f1d1d" },
            { time: 105, intensity: 96, label: "Spock's Sacrifice", color: "#3b82f6" }
        ],
        synopsis: "Admiral James T. Kirk is facing a mid-life crisis while training a new generation of Starfleet cadets, but his world is upended when his most dangerous old nemesis, Khan Noonien Singh, escapes exile and hijacks a Federation starship. Khan is determined to exact revenge on Kirk and seize the 'Genesis Device,' a terraforming tool with the power to create worlds or destroy them. What follows is a tactical, high-stakes game of cat-and-mouse in deep space that tests the limits of Kirk’s leadership and his crew's loyalty. Widely considered the finest entry in the franchise, The Wrath of Khan is a Shakespearean space opera that trades flashy spectacle for a grounded, submarine-style naval battle and a deeply emotional finale that redefined the stakes of science fiction storytelling.",
        themes: ["Revenge", "Aging", "Friendship"]
    }),

    // 8. 10 Cloverfield Lane (Claustrophobic Thriller)
    333371: createMovieData({
        sciFiComplexity: 65, visualSpectacle: 75, complexityLevel: "PSYCHOLOGICAL", 
        dominantColor: "#65a30d", rating: 7.2, criticsScore: 90, audienceScore: 79, director: "Dan Trachtenberg", 
        cast: ["Mary Elizabeth Winstead", "John Goodman", "John Gallagher Jr."],
        dna: { "Thriller": 60, "Sci-Fi": 20, "Horror": 20 },
        scenes: [
            { time: 10, intensity: 70, label: "The Crash", color: "#000000" },
            { time: 35, intensity: 50, label: "Dinner Tensions", color: "#facc15" },
            { time: 60, intensity: 78, label: "Air Filtration", color: "#16a34a" },
            { time: 85, intensity: 90, label: "The Barrel", color: "#ef4444" },
            { time: 95, intensity: 94, label: "The Escape", color: "#3b82f6" }
        ],
        synopsis: "After a near-fatal car accident, Michelle wakes up chained to a wall in an underground bunker. Her captor, a paranoid man named Howard, insists that he saved her life and that the world outside has been rendered uninhabitable by a massive chemical or alien attack. Caught between Howard's menacing control and the terrifying uncertainty of the surface, Michelle must decide whether to trust the man who 'saved' her or risk everything to escape. This spiritual successor to Cloverfield is a tightly-wound chamber piece that brilliantly uses its confined setting to build psychological tension. The film keeps the audience constantly guessing: is Howard a visionary protector or a predatory psychopath? The answer leads to a genre-shifting finale that remains one of the most surprising conclusions in modern sci-fi.",
        themes: ["Paranoia", "Captivity", "Trust"]
    }),

    // 9. A.I. Artificial Intelligence (Future Fairy Tale)
    644: createMovieData({
        sciFiComplexity: 88, visualSpectacle: 85, complexityLevel: "PHILOSOPHICAL", 
        dominantColor: "#3b82f6", rating: 7.2, criticsScore: 76, audienceScore: 64, director: "Steven Spielberg", 
        cast: ["Haley Joel Osment", "Jude Law", "Frances O'Connor"],
        dna: { "Sci-Fi": 60, "Drama": 40 },
        scenes: [
            { time: 20, intensity: 45, label: "Imprinting", color: "#ffffff" },
            { time: 50, intensity: 78, label: "Flesh Fair", color: "#b91c1c" },
            { time: 90, intensity: 62, label: "Rouge City", color: "#ea580c" },
            { time: 110, intensity: 85, label: "Blue Fairy", color: "#3b82f6" },
            { time: 140, intensity: 90, label: "2000 Years Later", color: "#cbd5e1" }
        ],
        synopsis: "In a future where rising sea levels have decimated coastal cities and 'Mecha' robots handle the needs of humanity, Cybertronics creates David—the first robotic child programmed to feel real, unconditional love. Adopted by a family whose own son is in cryo-stasis, David is eventually abandoned and left to navigate a world that views his kind as mere appliances. Embarking on a quest to find the 'Blue Fairy' from Pinocchio, David hopes to be turned into a 'real boy' so he can win back his mother’s love. Originally developed by Stanley Kubrick and brought to life by Steven Spielberg, A.I. is a uniquely haunting, melancholy masterpiece. It explores the ethics of artificial consciousness and the cold, unyielding nature of love, culminating in a staggering finale that spans millennia of human extinction.",
        themes: ["Love", "Humanity", "Obsolescence"]
    }),

    // 10. War of the Worlds (Panic & Survival)
    74: createMovieData({
        sciFiComplexity: 70, visualSpectacle: 92, complexityLevel: "INTENSE", 
        dominantColor: "#57534e", rating: 6.5, criticsScore: 75, audienceScore: 42, director: "Steven Spielberg", 
        cast: ["Tom Cruise", "Dakota Fanning", "Tim Robbins"],
        dna: { "Sci-Fi": 40, "Action": 30, "Horror": 30 },
        scenes: [
            { time: 20, intensity: 95, label: "Tripod Emergence", color: "#57534e" },
            { time: 45, intensity: 85, label: "Ferry Crossing", color: "#1e293b" },
            { time: 70, intensity: 90, label: "Basement Probe", color: "#16a34a" },
            { time: 95, intensity: 80, label: "Blood Harvesting", color: "#991b1b" },
            { time: 110, intensity: 75, label: "Boston Grenades", color: "#ea580c" }
        ],
        synopsis: "Ray Ferrier is a divorced, blue-collar crane operator whose weekend with his estranged children is interrupted by a terrifying, unexplained lightning storm. Soon, massive three-legged war machines emerge from beneath the earth, vaporizing everything in their path and beginning a systematic extermination of the human race. Ray must navigate the ensuing societal collapse and mass panic to keep his children alive as they trek across a scorched American landscape toward safety. Steven Spielberg's adaptation of H.G. Wells' classic focuses on the ground-level terror of an unstoppable enemy, utilizing visceral sound design and a grainy, urgent visual style. It is a relentless survival thriller that captures the Primal fear of invasion, emphasizing the vulnerability of civilization when faced with a technologically superior cosmic threat.",
        themes: ["Invasion", "Panic", "Family"]
    })
};

export const STRATEGIC_QUOTES = {
    157336: "Murphy's Law doesn't mean that something bad will happen. It means that whatever can happen, will happen.",
    329865: "Despite knowing the journey... and where it leads... I embrace it.",
    286217: "I'm gonna have to science the sh*t out of this.",
    180: "Everybody runs.",
    300668: "It's not destroying. It's making something new.",
    447332: "I have always loved you.", // Signed
    154: "KHAAAAAN!",
    333371: "I know you want to leave. But I can't let you do that.",
    644: "I am. I was.",
    74: "Is it terrorists?"
};

export const PARAMOUNT_SCIFI_MOVIE_FAQS = {
  'Interstellar': [
    { 
      question: "Is the black hole accurate?", 
      answer: "Yes. Astrophysicist Kip Thorne served as scientific consultant, ensuring Gargantua's depiction obeyed Einstein's equations. The result was so realistic that the film inspired scientific papers on gravitational lensing. The swirling accretion disk, time dilation near the event horizon, and light bending were visualized with both cinematic beauty and scientific rigor, giving audiences a depiction closer to reality than anything before it." 
    },
    { 
      question: "What is the Tesseract?", 
      answer: "The Tesseract is a three-dimensional visualization of a five-dimensional space created by future humans, allowing Cooper to communicate with Murph across time. This construct turns the intangible concept of time as a dimension into something perceptible, dramatizing how love and connection transcend linear chronology. It is as much an emotional climax as a scientific marvel." 
    },
    { 
      question: "Why did Mann betray them?", 
      answer: "Dr. Mann embodies the darker side of human survival instinct: fear of death. He falsified his planet's data to secure rescue, showing desperation and moral collapse. His betrayal highlights a central contrast: Cooper acts out of hope and love for his children, choosing risk for others, while Mann chooses self-preservation at all costs. This tension drives the film's psychological depth." 
    },
    { 
      question: "Does humanity survive?", 
      answer: "Yes. The cylindrical Cooper Station at the end proves Murph solved the gravitational equation, allowing humans to leave the dying Earth. They now inhabit O'Neill-style space cylinders, a nod to plausible near-future habitation technology, combining scientific possibility with narrative closure, showing human ingenuity and resilience." 
    }
  ],

  'Arrival': [
    { 
      question: "What is the Sapir-Whorf hypothesis?", 
      answer: "The movie draws directly from this linguistic theory, which suggests language shapes thought. By mastering the Heptapod language, which has no temporal linearity, Louise perceives past, present, and future simultaneously. This not only provides the twist narrative structure but also reflects a profound meditation on determinism, free will, and how understanding a new worldview can reshape human consciousness." 
    },
    { 
      question: "Why is the title Arrival?", 
      answer: "It refers both to the aliens arriving on Earth and to the metaphorical 'arrival' of Louise's own understanding and acceptance of the future, including the birth of her daughter. The film plays with time, presenting scenes that initially seem like flashbacks but are actually flash-forwards, emphasizing themes of foresight, choice, and the human embrace of inevitable sorrow and joy." 
    },
    { 
      question: "Why do the aliens leave?", 
      answer: "They depart after imparting their 'gift'—the Heptapod language and its non-linear perception of time. They foresee that 3,000 years in the future, humanity will aid them, so their intervention now is strategic and benevolent. It challenges human notions of linear cause-and-effect and illustrates how knowledge can be a bridge across civilizations and time itself." 
    },
    { 
      question: "What does 'Abbott is death process' mean?", 
      answer: "This line explains that Abbott, one of the alien partners, is dying. In their non-linear perception of time, death is not an absolute end but part of a continuous cycle. The Heptapods view it as natural, devoid of human linear fear, highlighting how differently sentient life might interpret mortality." 
    }
  ],

  'The Martian': [
    { 
      question: "Can you really grow potatoes on Mars?", 
      answer: "Theoretically, yes—but it's extremely difficult. Martian soil contains perchlorates that are toxic to humans, requiring washing or chemical treatment. Using human waste as fertilizer is scientifically plausible. The film dramatizes these methods, but they align with current botanical and space agricultural research, making Watney's ingenuity grounded in real science." 
    },
    { 
      question: "Was the storm realistic?", 
      answer: "No. Mars’ atmosphere is only 1% as dense as Earth's, so even a 100 mph wind would barely move objects. The storm was a narrative device to create immediate peril, establishing the isolation and vulnerability of Mark Watney while compressing real-world physics for cinematic drama." 
    },
    { 
      question: "What is the Rich Purnell Maneuver?", 
      answer: "A gravity-assist trajectory designed to save Watney. Instead of orbiting Earth for a rescue, the Hermes crew slingshots around Earth to return to Mars faster. This is a calculated, high-risk use of orbital mechanics, emphasizing the delicate balance of science, trust, and courage under extreme conditions." 
    },
    { 
      question: "Is the ending different from the book?", 
      answer: "Yes. In the movie, Lewis personally executes the tether rescue (an Iron Man-style maneuver) adding visual thrill and emotional payoff. In the book, Beck performs the retrieval. The cinematic choice heightens suspense and visually reinforces the themes of heroism and human ingenuity." 
    }
  ],

  'Minority Report': [
    { 
      question: "What is the Minority Report?", 
      answer: "It is an alternate vision of the future predicted by the Precogs where a crime may not happen. Usually, two Precogs agree on a crime, and the third sees a different outcome. The system deletes these reports to maintain the illusion of infallibility. It raises philosophical questions about free will versus determinism, and whether humans can choose differently from predicted fate." 
    },
    { 
      question: "How does the UI work?", 
      answer: "The gesture-based interface, designed by John Underkoffler, combines 3D volumetric visualization with hand gestures. It became so influential that real-world touch and gesture interfaces adopted similar principles. In-film, it reflects the blending of technology with human intuition, giving a sense of futuristic plausibility." 
    },
    { 
      question: "Does Anderton commit the murder?", 
      answer: "No. Anderton chooses not to act on the prediction. However, the setup ensures Crow's own machinations result in the gun firing, fulfilling the prophecy without Anderton’s agency. It shows how predictions can manipulate human behavior while maintaining narrative tension about morality and choice." 
    },
    { 
      question: "Is the ending a dream?", 
      answer: "Some theorize the happy ending is a hallucination while Anderton is frozen in Halo prison, prompted by the warden's mention of dreams. This theory highlights the film's exploration of reality versus perception and reinforces its noir, morally ambiguous tone." 
    }
  ],

  'Annihilation': [
    { 
      question: "What is the Shimmer?", 
      answer: "A prismatic, self-expanding zone that refracts light, DNA, and energy. It blends organisms’ genetics, creating hybrids and mutations. The Shimmer functions as both a visual marvel and a metaphor for change, self-destruction, and the unknowable forces of nature." 
    },
    { 
      question: "Is Lena a clone at the end?", 
      answer: "Ambiguous. Lena may be original or altered by the Shimmer. Her eyes glow with Shimmer energy, implying cellular or existential transformation. The film intentionally leaves this open, prompting questions about identity, mortality, and what it means to remain oneself in the face of overwhelming change." 
    },
    { 
      question: "What happened to Kane?", 
      answer: "The Kane who returns is a clone; the original Kane dies inside the lighthouse. This twist underscores the Shimmer's mutative influence and sets up a tension between humanity’s fragility and adaptability, as well as the emotional cost of survival and reunion." 
    },
    { 
      question: "Why does the bear scream like a woman?", 
      answer: "The bear absorbed Cassie Sheppard’s dying consciousness. Its scream is an echo of human terror, a horrifying fusion of predator and victim. This scene is a peak moment of existential horror, blending biological mutation with psychological terror." 
    }
  ],

  'A Quiet Place': [
    { 
      question: "Why the sand paths?", 
      answer: "Sand paths muffle footsteps, allowing the family to move undetected. This attention to micro-detail highlights extreme adaptation, survival psychology, and the stakes of every small action, emphasizing tension and world-building through sound design." 
    },
    { 
      question: "What is the creature's weakness?", 
      answer: "High-frequency audio triggers their pain. Regan’s cochlear implant emits sounds they cannot tolerate, forcing them to open armored plates. This is both scientifically plausible (extreme sensitivity) and narratively satisfying, providing the family a tactical advantage born from human ingenuity." 
    },
    { 
      question: "Why have a baby in this world?", 
      answer: "The baby represents hope, the refusal to merely survive. It dramatizes the tension between human resilience and vulnerability, forcing the family to innovate constantly. It is a metaphor for life persisting in hostile conditions." 
    },
    { 
      question: "How did they survive so long?", 
      answer: "Lee’s engineering skills—designing silos, lighting, and soundproofing—combined with rigorous use of ASL and pre-apocalypse planning, show survival through preparation, intelligence, and adaptive behavior, not just luck." 
    }
  ],

  'Star Trek II: The Wrath of Khan': [
    { 
      question: "Why is Khan so angry?", 
      answer: "Kirk exiled Khan and his followers to Ceti Alpha V. The planet subsequently suffered ecological collapse, killing Khan’s wife and many of his people. His vengeance is rooted in loss, betrayal, and personal injustice, giving the antagonist a deeply human motive." 
    },
    { 
      question: "Is the Genesis Device real science?", 
      answer: "No, it is speculative 'soft' science. It restructures matter at a subatomic level to create life. Metaphorically, it represents humanity’s hubris and godlike ambition, blending philosophical speculation with cinematic spectacle." 
    },
    { 
      question: "Why did Spock die?", 
      answer: "Leonard Nimoy requested a meaningful exit from the franchise. His death scene was designed to be emotionally resonant, heroic, and scientifically plausible within the universe, serving as one of sci-fi’s most iconic sacrifices." 
    },
    { 
      question: "What is the Kobayashi Maru?", 
      answer: "A 'no-win scenario' simulation to test captains under unavoidable death. Kirk cheats, reprogramming it, showing his strategic brilliance and refusal to accept failure. It encapsulates the film’s central theme: ingenuity and moral choice in the face of impossible odds." 
    }
  ],

  '10 Cloverfield Lane': [
    { 
      question: "Is Howard telling the truth?", 
      answer: "Partially. The world outside is dangerous and contaminated, but Howard’s personal motives are sinister. He manipulates apocalypse paranoia to control and endanger Michelle, creating psychological tension and moral ambiguity central to the story." 
    },
    { 
      question: "Is it connected to Cloverfield?", 
      answer: "It is a spiritual successor. It exists in the same anthology universe, exploring alien events from a different lens. The script’s original title, 'The Cellar', emphasized human suspense over sci-fi spectacle." 
    },
    { 
      question: "What happens at the end?", 
      answer: "Michelle escapes, ignites a biomechanical alien ship, and drives to join resistance forces. The narrative shifts from claustrophobic thriller to full-scale sci-fi action, merging suspense with large-scale alien conflict, illustrating her growth and resilience." 
    },
    { 
      question: "Why the acid scene?", 
      answer: "The melting face confirms the alien threat and Howard’s unreliability, pivoting the story from psychological captivity to survival horror. It visually represents risk and revelation in a visceral way." 
    }
  ],

  'A.I. Artificial Intelligence': [
    { 
      question: "Are those aliens at the end?", 
      answer: "No. They are highly advanced Mecha who evolved over 2,000 years. They excavate David to recreate the last memory of humanity, reflecting themes of mortality, legacy, and the persistence of love and art beyond human extinction." 
    },
    { 
      question: "Did Kubrick direct this?", 
      answer: "No, Spielberg directed, but Kubrick’s vision shaped the story for decades. Spielberg infused warmth and sentimentality while retaining Kubrick’s intellectual depth, creating a fusion of philosophical and emotional storytelling unique in cinema." 
    },
    { 
      question: "Is the Blue Fairy real?", 
      answer: "To David, yes; to us, a sunken statue. The Mecha simulate her to give David a sense of completion, allowing him to experience love and closure, merging fantasy, technology, and ethical contemplation." 
    },
    { 
      question: "Why does the mother abandon him?", 
      answer: "Fear of harm drives her to abandon David, a mercy born of love. His intense programmed affection risks real danger, so human compassion paradoxically requires separation, highlighting ethical dilemmas of AI-human relations." 
    }
  ],

  'War of the Worlds': [
    { 
      question: "What kills the aliens?", 
      answer: "Earth microbes. Having no immunity to terrestrial bacteria, the Martians succumb despite technological superiority. H.G. Wells’ original premise underlines a natural, poetic justice where life on Earth survives by its intrinsic biology." 
    },
    { 
      question: "What is the red weed?", 
      answer: "Alien terraforming agent, grown with human blood, transforming the environment to mimic Mars-like conditions. It symbolizes the invasive and adaptive nature of extraterrestrial life." 
    },
    { 
      question: "Why does the Tripod horn sound like that?", 
      answer: "The sound, blending industrial noise and scraping didgeridoo tones, acts as a psychological weapon, signaling death and inducing panic even before the machines arrive, heightening tension and fear in both characters and audience." 
    },
    { 
      question: "Is the son's survival realistic?", 
      answer: "Not entirely. Robbie’s survival during the hill battle stretches plausibility but emphasizes Spielberg’s thematic focus on family and hope amid global catastrophe, blending narrative necessity with human-centered storytelling." 
    }
  ]
};


export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => {
    return PARAMOUNT_SCIFI_MOVIE_FAQS[movie.Title] || [];
};

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