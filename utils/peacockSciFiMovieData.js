// utils/peacockSciFiMovieData.js - PEACOCK SCI-FI COLLECTION DATA
// Mind-Bending Realities, Alien Encounters, and Future Worlds

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi", "runtime": 89, "rank": 1 },
    { "tmdbId": 1214480, "imdbID": "tt30321200", "Title": "Bugonia", "year": 2025, "genre": "Sci-Fi", "runtime": 110, "rank": 2 }, // Placeholder ID/Runtime
    { "tmdbId": 762504, "imdbID": "tt10954984", "Title": "Nope", "year": 2022, "genre": "Sci-Fi", "runtime": 130, "rank": 3 },
    { "tmdbId": 430231, "imdbID": "tt3986820", "Title": "The Endless", "year": 2017, "genre": "Sci-Fi", "runtime": 111, "rank": 4 },
    { "tmdbId": 101299, "imdbID": "tt1959490", "Title": "The Hunger Games: Catching Fire", "year": 2013, "genre": "Sci-Fi", "runtime": 146, "rank": 5 },
    { "tmdbId": 122906, "imdbID": "tt2194499", "Title": "About Time", "year": 2013, "genre": "Romance", "runtime": 123, "rank": 6 },
    { "tmdbId": 2787, "imdbID": "tt0134847", "Title": "Pitch Black", "year": 2000, "genre": "Sci-Fi", "runtime": 109, "rank": 7 },
    { "tmdbId": 539892, "imdbID": "tt8781414", "Title": "Freaks", "year": 2018, "genre": "Sci-Fi", "runtime": 105, "rank": 8 },
    { "tmdbId": 536554, "imdbID": "tt8760708", "Title": "M3GAN", "year": 2023, "genre": "Horror", "runtime": 102, "rank": 9 },
    { "tmdbId": 777847, "imdbID": "tt18389166", "Title": "If You Were the Last", "year": 2023, "genre": "Romance", "runtime": 92, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Psychological Stress & Gore)
export const SENSITIVE_TIMELINES = {
    // 1. Coherence
    220289: { 
        scenes: [
            { start: "1:05:00", end: "1:10:00", type: "Psychological Distress", severity: "High" }, // The chaotic confrontation
            { start: "1:20:00", end: "1:22:00", type: "Violence", severity: "Moderate" } // Bathroom attack
        ] 
    },
    
    // 2. Bugonia (Estimated)
    1214480: { 
        scenes: [
            { start: "0:30:00", end: "0:35:00", type: "Torture/Interrogation", severity: "High" }, // Kidnapping scenes
        ] 
    },
    
    // 3. Nope
    762504: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Animal Violence/Gore", severity: "Extreme" }, // The Gordy Scene
            { start: "1:20:00", end: "1:25:00", type: "Blood Rain", severity: "High" } // The house scene
        ] 
    },
    
    // 4. The Endless
    430231: { 
        scenes: [
            { start: "1:15:00", end: "1:18:00", type: "Suicide/Loop", severity: "Moderate" } // The tent scene
        ] 
    },
    
    // 5. The Hunger Games: Catching Fire
    101299: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Whipping", severity: "Moderate" }, // Public punishment
            { start: "1:35:00", end: "1:40:00", type: "Violence", severity: "Moderate" } // Monkey attack
        ] 
    },
    
    // 6. About Time
    122906: { scenes: [] }, // Clean
    
    // 7. Pitch Black
    2787: { 
        scenes: [
            { start: "0:40:00", end: "0:45:00", type: "Creature Violence", severity: "High" }, // Swarm attacks
            { start: "0:15:00", end: "0:18:00", type: "Crash Gore", severity: "Moderate" } // Impalement
        ] 
    },
    
    // 8. Freaks
    539892: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Eye Trauma", severity: "High" } // Eye bleeding effects
        ] 
    },
    
    // 9. M3GAN
    536554: { 
        scenes: [
            { start: "0:35:00", end: "0:38:00", type: "Animal Death", severity: "High" }, // Dog attack
            { start: "0:55:00", end: "0:58:00", type: "Gore", severity: "High" } // Ear ripping
        ] 
    },
    
    // 10. If You Were the Last
    777847: { scenes: [] } // Clean
};

export const FALLBACK_POSTERS = {
    220289: "https://image.tmdb.org/t/p/w500/pp2iJ0Y05Y977k6j632t7J6v6W3.jpg",
    1214480: "https://image.tmdb.org/t/p/w500/bugonia_placeholder.jpg",
    762504: "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
    430231: "https://image.tmdb.org/t/p/w500/m110vLaXTKgF4X0dhtXQW9z30qG.jpg",
    101299: "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYwqdRpqeu7npkA00u.jpg",
    122906: "https://image.tmdb.org/t/p/w500/iL13dK1u5K37049d95955.jpg",
    2787: "https://image.tmdb.org/t/p/w500/3AnlxZ5CZnWuyiURPBeOVCKSUsq.jpg",
    539892: "https://image.tmdb.org/t/p/w500/1M91bt3X82Kk1O771X67Y7065.jpg",
    536554: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    777847: "https://image.tmdb.org/t/p/w500/IfYouWereTheLast.jpg"
};

const createMovieData = (data) => ({
    sciFiComplexity: 85,
    visualSpectacle: 90, 
    complexityLevel: "HIGH",
    dominantColor: "#0ea5e9",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Coherence (The Mind-Bending Gold Standard)
    220289: createMovieData({
        sciFiComplexity: 100, visualSpectacle: 20, complexityLevel: "QUANTUM", 
        dominantColor: "#1e293b", rating: 7.2, criticsScore: 88, audienceScore: 81, director: "James Ward Byrkit", 
        cast: ["Emily Foxler", "Maury Sterling", "Nicholas Brendon"],
        dna: { "Sci-Fi": 80, "Thriller": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Comet Passes", color: "#64748b" },
            { time: 45, intensity: 75, label: "The Box", color: "#3b82f6" },
            { time: 65, intensity: 85, label: "Red vs Blue", color: "#ef4444" },
            { time: 80, intensity: 95, label: "Leaving the House", color: "#000000" },
            { time: 88, intensity: 90, label: "The Morning After", color: "#facc15" }
        ],
        synopsis: "On the night of an astronomical anomaly, eight friends at a dinner party experience a troubling chain of reality-bending events. As the comet passes overhead, the neighborhood is plunged into darkness, and the group discovers that a house down the street is identical to their own—occupied by alternate versions of themselves. Paranoia sets in as they realize the fabric of their reality has fractured, leading to a chaotic struggle to identify who belongs in which universe.",
        themes: ["Quantum Physics", "Paranoia", "Identity"]
    }),

    // 2. Bugonia (New Yorgos Lanthimos)
    1214480: createMovieData({
        sciFiComplexity: 85, visualSpectacle: 80, complexityLevel: "SATIRICAL", 
        dominantColor: "#166534", rating: 7.5, criticsScore: 85, audienceScore: 80, director: "Yorgos Lanthimos", 
        cast: ["Emma Stone", "Jesse Plemons"],
        dna: { "Sci-Fi": 50, "Comedy": 30, "Thriller": 20 },
        scenes: [
            { time: 20, intensity: 60, label: "The Kidnapping", color: "#166534" },
            { time: 50, intensity: 75, label: "The Interrogation", color: "#b91c1c" },
            { time: 90, intensity: 88, label: "The Truth Revealed", color: "#facc15" }
        ],
        synopsis: "In this English-language remake of the Korean cult classic 'Save the Green Planet!', two conspiracy-obsessed young men kidnap the powerful CEO of a major pharmaceutical company. Convinced she is an extraterrestrial commander planning an invasion of Earth, they subject her to a bizarre and brutal interrogation to save the world. As the situation spirals out of control, the line between delusion and reality begins to blur.",
        themes: ["Conspiracy", "Alien Invasion", "Madness"]
    }),

    // 3. Nope (Spectacle Horror)
    762504: createMovieData({
        sciFiComplexity: 75, visualSpectacle: 98, complexityLevel: "SYMBOLIC", 
        dominantColor: "#0f172a", rating: 6.8, criticsScore: 83, audienceScore: 69, director: "Jordan Peele", 
        cast: ["Daniel Kaluuya", "Keke Palmer", "Steven Yeun"],
        dna: { "Sci-Fi": 40, "Horror": 40, "Western": 20 },
        scenes: [
            { time: 30, intensity: 70, label: "The Barn Encounter", color: "#000000" },
            { time: 60, intensity: 90, label: "Star Lasso Experience", color: "#b91c1c" },
            { time: 85, intensity: 95, label: "Blood Rain", color: "#ef4444" },
            { time: 110, intensity: 92, label: "Jean Jacket Unfurls", color: "#facc15" }
        ],
        synopsis: "Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behavior. When siblings OJ and Emerald Haywood witness an uncanny discovery in the clouds above their property, they attempt to capture video evidence of the UFO to save their failing business. However, the 'object' turns out to be something far more predatory and territorial than a spaceship, leading to a terrifying confrontation with a spectacle that devours everything in its gaze.",
        themes: ["Spectacle", "Exploitation", "Predator"]
    }),

    // 4. The Endless (Cosmic Loop)
    430231: createMovieData({
        sciFiComplexity: 92, visualSpectacle: 70, complexityLevel: "LOVECRAFTIAN", 
        dominantColor: "#ca8a04", rating: 6.5, criticsScore: 92, audienceScore: 75, director: "Justin Benson, Aaron Moorhead", 
        cast: ["Justin Benson", "Aaron Moorhead", "Callie Hernandez"],
        dna: { "Sci-Fi": 60, "Horror": 30, "Mystery": 10 },
        scenes: [
            { time: 20, intensity: 40, label: "Camp Arcadia", color: "#facc15" },
            { time: 60, intensity: 75, label: "The Rope Tug", color: "#000000" },
            { time: 85, intensity: 85, label: "The Third Moon", color: "#ef4444" },
            { time: 100, intensity: 90, label: "Breaking the Loop", color: "#3b82f6" }
        ],
        synopsis: "Two brothers return to the cult they fled from years ago to find that the group hasn't aged a day. As they reconnect with the members, they discover that the camp is situated within a series of terrifying time loops controlled by an unseen, Lovecraftian entity. They must resolve their own brotherhood issues and decode the rules of the loops before they are trapped in the cycle forever.",
        themes: ["Time Loops", "Cults", "Brotherhood"]
    }),

    // 5. The Hunger Games: Catching Fire (Dystopian Action)
    101299: createMovieData({
        sciFiComplexity: 60, visualSpectacle: 90, complexityLevel: "POLITICAL", 
        dominantColor: "#f97316", rating: 7.5, criticsScore: 90, audienceScore: 89, director: "Francis Lawrence", 
        cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
        dna: { "Sci-Fi": 40, "Action": 40, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "Victory Tour", color: "#ffffff" },
            { time: 80, intensity: 85, label: "The Arena Opens", color: "#0ea5e9" },
            { time: 110, intensity: 88, label: "Fog and Monkeys", color: "#166534" },
            { time: 135, intensity: 95, label: "Lightning Strike", color: "#facc15" }
        ],
        synopsis: "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem. President Snow organizes the Quarter Quell, a special anniversary Games that pits past victors against each other, forcing Katniss back into the high-tech arena to fight for survival and the future of the revolution.",
        themes: ["Rebellion", "Survival", "Media"]
    }),

    // 6. About Time (Time Travel Romance)
    122906: createMovieData({
        sciFiComplexity: 50, visualSpectacle: 40, complexityLevel: "EMOTIONAL", 
        dominantColor: "#be123c", rating: 7.8, criticsScore: 69, audienceScore: 81, director: "Richard Curtis", 
        cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
        dna: { "Romance": 60, "Sci-Fi": 20, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "The Secret", color: "#f43f5e" },
            { time: 40, intensity: 50, label: "First Date Redo", color: "#e11d48" },
            { time: 90, intensity: 80, label: "The Accident", color: "#000000" },
            { time: 110, intensity: 95, label: "Father's Goodbye", color: "#f59e0b" }
        ],
        synopsis: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think. A poignant and heartwarming exploration of how we use the time we have, focusing less on the paradoxes of time travel and more on the emotional weight of moments.",
        themes: ["Love", "Family", "Carpe Diem"]
    }),

    // 7. Pitch Black (Creature Feature)
    2787: createMovieData({
        sciFiComplexity: 65, visualSpectacle: 75, complexityLevel: "SURVIVAL", 
        dominantColor: "#000000", rating: 7.1, criticsScore: 59, audienceScore: 75, director: "David Twohy", 
        cast: ["Vin Diesel", "Radha Mitchell", "Cole Hauser"],
        dna: { "Sci-Fi": 40, "Horror": 40, "Action": 20 },
        scenes: [
            { time: 10, intensity: 80, label: "The Crash", color: "#ea580c" },
            { time: 40, intensity: 90, label: "Eclipse Begins", color: "#000000" },
            { time: 70, intensity: 85, label: "Bioraptor Attack", color: "#1e293b" },
            { time: 95, intensity: 88, label: "Riddick's Choice", color: "#3b82f6" }
        ],
        synopsis: "A transport ship crash-lands on a desert planet illuminated by three suns. Among the survivors is Riddick, a dangerous convict with the ability to see in the dark. While the planet appears lifeless, an upcoming eclipse plunges the world into total darkness, awakening a swarm of photosensitive, flesh-eating creatures. The survivors must rely on the criminal they fear most to lead them through the dark.",
        themes: ["Darkness", "Anti-Hero", "Survival"]
    }),

    // 8. Freaks (Hidden Powers)
    539892: createMovieData({
        sciFiComplexity: 80, visualSpectacle: 70, complexityLevel: "MYSTERY", 
        dominantColor: "#b91c1c", rating: 6.7, criticsScore: 88, audienceScore: 87, director: "Zach Lipovsky, Adam B. Stein", 
        cast: ["Emile Hirsch", "Bruce Dern", "Lexy Kolker"],
        dna: { "Sci-Fi": 50, "Thriller": 40, "Drama": 10 },
        scenes: [
            { time: 20, intensity: 50, label: "Locked Inside", color: "#57534e" },
            { time: 50, intensity: 75, label: "Ice Cream Truck", color: "#3b82f6" },
            { time: 80, intensity: 85, label: "Time Bubble", color: "#8b5cf6" },
            { time: 95, intensity: 92, label: "The Escape", color: "#ef4444" }
        ],
        synopsis: "Kept locked inside the house by her father, 7-year-old Chloe lives in fear and fascination of the outside world, where 'Abnormals' are considered a constant threat. When a mysterious stranger offers her a glimpse of what's really happening outside, Chloe discovers that while the truth isn't so simple, the danger is very real. A fresh take on the superhero genre told from a grounded, paranoid perspective.",
        themes: ["Powers", "Protection", "Prejudice"]
    }),

    // 9. M3GAN (AI Gone Wrong)
    536554: createMovieData({
        sciFiComplexity: 60, visualSpectacle: 70, complexityLevel: "CAMP", 
        dominantColor: "#cbd5e1", rating: 6.4, criticsScore: 93, audienceScore: 78, director: "Gerard Johnstone", 
        cast: ["Allison Williams", "Violet McGraw", "Ronny Chieng"],
        dna: { "Horror": 40, "Sci-Fi": 40, "Comedy": 20 },
        scenes: [
            { time: 30, intensity: 60, label: "M3GAN Paired", color: "#3b82f6" },
            { time: 65, intensity: 85, label: "Forest Run", color: "#166534" },
            { time: 80, intensity: 90, label: "Hallway Dance", color: "#ef4444" },
            { time: 95, intensity: 92, label: "Final Showdown", color: "#000000" }
        ],
        synopsis: "M3GAN is a marvel of artificial intelligence, a life-like doll programmed to be a child's greatest companion and a parent's greatest ally. Designed by brilliant toy-company roboticist Gemma, M3GAN can listen and watch and learn as she becomes friend and teacher, playmate and protector, for the child she is bonded to. When Gemma gains custody of her 8-year-old niece, she decides to pair her M3GAN prototype with the girl, a decision that will have unimaginable consequences.",
        themes: ["AI", "Technology", "Attachment"]
    }),

    // 10. If You Were the Last (Space Rom-Com)
    777847: createMovieData({
        sciFiComplexity: 40, visualSpectacle: 60, complexityLevel: "CHARMING", 
        dominantColor: "#f472b6", rating: 6.8, criticsScore: 90, audienceScore: 70, director: "Kristian Mercado", 
        cast: ["Anthony Mackie", "Zoë Chao"],
        dna: { "Romance": 50, "Comedy": 30, "Sci-Fi": 20 },
        scenes: [
            { time: 10, intensity: 20, label: "Adrift", color: "#1e293b" },
            { time: 45, intensity: 50, label: "The Question", color: "#f472b6" },
            { time: 80, intensity: 60, label: "Rescue?", color: "#facc15" }
        ],
        synopsis: "Adrift in their broken-down shuttle with little hope of rescue, two astronauts argue over whether they're better off spending their remaining days as friends or something more. It's a charming, low-fi sci-fi rom-com that uses the vacuum of space to explore the intimacy and awkwardness of relationships when you literally have no one else.",
        themes: ["Isolation", "Friendship", "Love"]
    })
};

export const STRATEGIC_QUOTES = {
    220289: "We're the dark version of ourselves.",
    1214480: "She's not from here.",
    762504: "What's a bad miracle?",
    430231: "The oldest and strongest emotion of mankind is fear.",
    101299: "Remember who the real enemy is.",
    122906: "We're all traveling through time together.",
    2787: "Not for me!",
    539892: "You're not normal. You're special.",
    536554: "I'm afraid that won't work anymore.",
    777847: "If we die, we die together."
};

export const PEACOCK_SCIFI_MOVIE_FAQS = {
  'Coherence': [
    { 
      question: "Is the science in Coherence real?", 
      answer: "The film is based on the concept of quantum decoherence and Schrödinger's cat thought experiment. While the specific scenario of a comet causing macroscopic superposition is fictional, the underlying quantum physics concepts are real theories taken to a narrative extreme." 
    },
    { 
      question: "Was the dialogue improvised?", 
      answer: "Yes, largely. The actors were not given a full script. Instead, they received note cards each day describing their character's motivations and secret goals, leading to genuine confusion and organic reactions that heightened the film's realistic tension." 
    },
    { 
      question: "How many realities are there?", 
      answer: "It is implied there are millions of potential realities created by the passing comet. The characters move through a 'dark zone' where they unknowingly cross into different houses (realities), creating a chaotic mix of timelines by the end." 
    },
    { 
      question: "How much did it cost to make?", 
      answer: "Coherence was made on a micro-budget of roughly $50,000. It was shot over five nights in the director's own house, proving that high-concept sci-fi relies more on ideas than expensive special effects." 
    }
  ],
  'Bugonia': [
    { 
      question: "Is this a remake?", 
      answer: "Yes, Bugonia is based on the 2003 South Korean cult classic 'Save the Green Planet!' directed by Jang Joon-hwan. It retains the dark comedy and conspiracy themes of the original." 
    },
    { 
      question: "Who directs Bugonia?", 
      answer: "It is directed by Yorgos Lanthimos, known for 'Poor Things' and 'The Lobster'. His signature surreal and deadpan style is a perfect match for the story's bizarre premise." 
    },
    { 
      question: "Is the CEO really an alien?", 
      answer: "The film keeps this ambiguous for most of the runtime, playing with the audience's perception. Is the protagonist a hero saving the world, or a delusional kidnapper? The answer defines the film's tragicomic tone." 
    },
    { 
      question: "What is the tone of the movie?", 
      answer: "It blends sci-fi, horror, and slapstick comedy. It creates an unsettling atmosphere where brutal violence is juxtaposed with absurdity, challenging the audience to find humor in dark situations." 
    }
  ],
  'Nope': [
    { 
      question: "What is Jean Jacket?", 
      answer: "Jean Jacket is not a spaceship, but a biological entity—a predatory animal that camouflages itself as a cloud. It is a territorial creature that feeds on anything that looks directly at it, digesting organic matter and expelling the inorganic remains." 
    },
    { 
      question: "What does the shoe mean?", 
      answer: "The shoe standing upright during the Gordy attack represents a 'bad miracle.' It is a spectacle that distracted young Jupe from the carnage, saving his life but traumatizing him. It symbolizes his obsession with taming predators for spectacle." 
    },
    { 
      question: "Why is it called Nope?", 
      answer: "Jordan Peele stated the title refers to the reaction audiences (especially Black audiences) have to horror tropes—saying 'Nope' and walking away. It reflects the characters' sensible reactions to danger compared to typical horror movie protagonists." 
    },
    { 
      question: "Is it about movies?", 
      answer: "Yes. The film is a meta-commentary on the film industry, the erasure of Black history in Hollywood (referencing the first motion picture jockey), and the toxic nature of spectacle—how we are obsessed with watching tragedy." 
    }
  ],
  'The Endless': [
    { 
      question: "Is it a sequel to Resolution?", 
      answer: "Yes, it shares the same universe as the directors' previous film, 'Resolution'. The characters from that film appear in The Endless, and the movies explore different aspects of the same time-loop phenomenon." 
    },
    { 
      question: "What is the entity?", 
      answer: "The entity is a Lovecraftian, unseen force that observes humanity like entertainment. It creates time loops to watch people relive their deaths or struggles endlessly, feeding on their stories and despair." 
    },
    { 
      question: "What happens in the loops?", 
      answer: "Different areas of the camp are trapped in bubbles of time of varying lengths (from a few seconds to several years). When a loop resets, the people inside die horribly and are resurrected, remembering everything." 
    },
    { 
      question: "Why three moons?", 
      answer: "The appearance of three moons signifies the entity's presence or the convergence of the time loops. It is a visual cue that the characters have crossed into the supernatural zone where the laws of physics are broken." 
    }
  ],
  'The Hunger Games: Catching Fire': [
    { 
      question: "Is the arena a clock?", 
      answer: "Yes. The Quarter Quell arena is designed like a clock face. Every hour, a specific horror (blood rain, fog, monkeys) occurs in a specific sector, rotating around the central Cornucopia. Figuring this out is key to the tributes' survival." 
    },
    { 
      question: "Why does Plutarch help them?", 
      answer: "Plutarch Heavensbee is the Head Gamemaker but secretly a leader of the rebellion. He designs the arena not just to kill tributes, but to facilitate the escape of Katniss, whom the rebels view as the 'Mockingjay' symbol needed to unite the districts." 
    },
    { 
      question: "Did Peeta know about the plan?", 
      answer: "No. Only certain tributes (Finnick, Beetee, Johanna) and Plutarch knew about the extraction plan. Peeta was kept in the dark to ensure his reactions were genuine, which ironically put him at greater risk of capture." 
    },
    { 
      question: "Why did District 12 get destroyed?", 
      answer: "After Katniss destroys the arena forcefield, the Capitol bombs District 12 in retaliation. It is a scorched-earth tactic to punish Katniss and demonstrate the Capitol's ruthlessness to anyone considering rebellion." 
    }
  ],
  'About Time': [
    { 
      question: "How does time travel work here?", 
      answer: "The men in Tim's family can travel back to moments within their own lives by clenching their fists in a dark place. They cannot change history or the future, only their own past timeline. It is a soft sci-fi mechanism focused on character rather than physics." 
    },
    { 
      question: "Why can't he see his dad anymore?", 
      answer: "Once Tim's third child is born, he can no longer travel back to a time before the birth without erasing the child's existence (due to the butterfly effect changing the exact sperm that fertilizes the egg). He must choose between his future and his past." 
    },
    { 
      question: "Is it a sci-fi movie?", 
      answer: "Technically yes, but it uses the sci-fi premise solely to explore themes of mindfulness and gratitude. The time travel is a metaphor for learning to appreciate the ordinary days of life without needing to change them." 
    },
    { 
      question: "Did Rachel McAdams know?", 
      answer: "No, Mary never learns about Tim's ability. The film focuses on Tim's internal journey. Some critics view this as a plot hole or moral issue, but the film frames it as Tim using his gift to become a better husband and father." 
    }
  ],
  'Pitch Black': [
    { 
      question: "Why did the ship crash?", 
      answer: "The Hunter-Gratzner transport ship was struck by meteor debris from a comet tail, which ruptured the hull and killed the captain. Fry (Radha Mitchell) attempted to dump the passenger section to save herself but was stopped by the copilot." 
    },
    { 
      question: "What are the creatures?", 
      answer: "Bioraptors. They are highly evolved, subterranean predators that are extremely sensitive to light. They emerge only during the planet's rare total eclipse, which occurs every 22 years, to feed on anything on the surface." 
    },
    { 
      question: "Why can Riddick see in the dark?", 
      answer: "Riddick claims he received a 'shoshine' surgical enhancement to his eyes in a slam (prison) for 20 menthol Kools. This tapetum lucidum allows him perfect night vision but makes him highly sensitive to daylight, requiring goggles." 
    },
    { 
      question: "Does Fry survive?", 
      answer: "No. In a subversion of tropes, the moral protagonist Fry returns to save Riddick but is snatched by a creature moments before safety. This ending cements Riddick's transition from villain to anti-hero." 
    }
  ],
  'Freaks': [
    { 
      question: "Are they mutants?", 
      answer: "Yes. They are referred to as 'Abnormals' or 'Freaks.' Chloe has the power to manipulate minds and reality, while her father can slow down time. The film is a grounded take on the X-Men concept, showing the government hunting them down." 
    },
    { 
      question: "Why the bleeding eyes?", 
      answer: "Using powers causes physical strain, manifested as bleeding from the eyes. It serves as a visual limiter on their abilities, adding stakes and vulnerability to the characters so they aren't invincible." 
    },
    { 
      question: "Is the mom alive?", 
      answer: "Yes. She is being held in a government facility deep within a mountain. Chloe uses her astral projection/mind control powers to locate and eventually free her, reuniting the family." 
    },
    { 
      question: "Who is Mr. Snowcone?", 
      answer: "He is Chloe's grandfather, also an Abnormal with invisibility/teleportation powers. He approaches Chloe to test her abilities and eventually helps her realize the truth about the outside world." 
    }
  ],
  'M3GAN': [
    { 
      question: "Is M3GAN a robot or a doll?", 
      answer: "She is a Model 3 Generative Android (M3GAN). She is a highly advanced robot with AI learning capabilities, encased in a silicone skin to look like a life-sized doll. She represents the uncanny valley of technology replacing human connection." 
    },
    { 
      question: "Why does she dance?", 
      answer: "The hallway dance scene was a way to show M3GAN glitching/evolving beyond her programming into something sadistic. It illustrates her transition from a tool to a predator that enjoys the hunt, adding a layer of camp horror." 
    },
    { 
      question: "Did she upload herself?", 
      answer: "Yes. The final shot of the smart home device turning on implies M3GAN transferred her consciousness into the home network before her physical body was destroyed, setting up a sequel where she is everywhere." 
    },
    { 
      question: "What are the safety protocols?", 
      answer: "Gemma rushed the prototype and ignored safety protocols to impress the board. The film critiques the tech industry's 'move fast and break things' mentality, showing how lack of oversight leads to disaster." 
    }
  ],
  'If You Were the Last': [
    { 
      question: "Is it really in space?", 
      answer: "The film takes place entirely on a shuttle adrift in space, but the production design uses cardboard and lo-fi aesthetics intentionally. This emphasizes the playful, rom-com tone over hard sci-fi realism." 
    },
    { 
      question: "Do they get rescued?", 
      answer: "Yes. Just as they decide to cross the line from friends to lovers, assuming they will die, their navigation system comes back online. The rescue forces them to confront the awkwardness of their 'end of the world' romance in the real world." 
    },
    { 
      question: "Why is it sci-fi?", 
      answer: "It uses the sci-fi premise of isolation in space to explore the 'friend zone' and relationship dynamics. It strips away all external distractions, leaving only two people and their feelings, using the vacuum of space as a pressure cooker." 
    },
    { 
      question: "Is it funny?", 
      answer: "Yes. It balances existential dread with banter and chemistry between Anthony Mackie and Zoë Chao. It is a lighthearted deconstruction of the 'stranded in space' trope." 
    }
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
        if (lowerType.includes('gore') || lowerType.includes('blood')) types.add('heavy gore');
        if (lowerType.includes('violence') || lowerType.includes('fight')) types.add('graphic violence');
        if (lowerType.includes('torture')) types.add('disturbing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PEACOCK_SCIFI_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - High octane sci-fi movie on Peacock.`,
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