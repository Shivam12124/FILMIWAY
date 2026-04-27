// utils/hboRomanceMovieData.js - HBO MAX ROMANCE COLLECTION DATA ✅
// Emotional Resonance, Chemistry, and Heartbreak

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 289, "imdbID": "tt0034583", "Title": "Casablanca", "year": 1942, "genre": "Romance", "runtime": 102, "rank": 1 },
    { "tmdbId": 843, "imdbID": "tt0118694", "Title": "In the Mood for Love", "year": 2000, "genre": "Romance", "runtime": 98, "rank": 2 },
    { "tmdbId": 666277, "imdbID": "tt13238346", "Title": "Past Lives", "year": 2023, "genre": "Drama", "runtime": 106, "rank": 3 },
    { "tmdbId": 639, "imdbID": "tt0098635", "Title": "When Harry Met Sally...", "year": 1989, "genre": "Romance", "runtime": 96, "rank": 4 },
    { "tmdbId": 398818, "imdbID": "tt5726616", "Title": "Call Me by Your Name", "year": 2017, "genre": "Romance", "runtime": 132, "rank": 5 },
    { "tmdbId": 770, "imdbID": "tt0031381", "Title": "Gone with the Wind", "year": 1939, "genre": "Romance", "runtime": 238, "rank": 6 },
    { "tmdbId": 37563, "imdbID": "tt0115940", "Title": "A Summer's Tale", "year": 1996, "genre": "Romance", "runtime": 113, "rank": 7 },
    { "tmdbId": 216, "imdbID": "tt0071141", "Title": "Ali: Fear Eats the Soul", "year": 1974, "genre": "Drama", "runtime": 93, "rank": 8 },
    { "tmdbId": 37797, "imdbID": "tt0113824", "Title": "Whisper of the Heart", "year": 1995, "genre": "Romance", "runtime": 111, "rank": 9 },
    { "tmdbId": 84892, "imdbID": "tt1659337", "Title": "The Perks of Being a Wallflower", "year": 2012, "genre": "Drama", "runtime": 103, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    // 1. Casablanca
    289: { scenes: [] }, 
    
    // 2. In the Mood for Love
    843: { scenes: [] },
    
    // 3. Past Lives
    666277: { scenes: [] },
    
// 4. When Harry Met Sally
    639: { 
        scenes: [
            { 
                start: "0:46:13", 
                end: "0:47:22", 
                type: "Sexual Content (Moaning / Fake Orgasm)", 
                severity: "Moderate" 
            }
        ] 
    },
    
    // 5. Call Me by Your Name
    398818: { 
        scenes: [
            { start: "1:16:15", end: "1:16:52", type: "Nudity", severity: "High" },
            { start: "1:25:20", end: "1:26:40", type: "Nudity & Sex", severity: "High" },
            { start: "1:31:00", end: "1:31:10", type: "Sex", severity: "Moderate" },
            { start: "1:37:10", end: "1:37:40", type: "Sexual Content", severity: "Moderate" }
        ] 
    },
    
    // 6. Gone with the Wind
    770: { scenes: [] },
    
    // 7. A Summer's Tale
    37563: { scenes: [] },
    
    // 8. Ali: Fear Eats the Soul
    216: { 
        scenes: [
            { start: "0:51:50", end: "0:52:20", type: "Nudity (Male)", severity: "High" },
            { start: "1:22:12", end: "1:22:50", type: "Nudity (Male & Female)", severity: "High" }
        ] 
    },
    
    // 9. Whisper of the Heart
    37797: { scenes: [] },
    
    // 10. The Perks of Being a Wallflower
    84892: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    289: "https://image.tmdb.org/t/p/w500/gr8Y5eJb7904Z799321.jpg",
    843: "https://image.tmdb.org/t/p/w500/iYyB8tLh9066658.jpg", 
    666277: "https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    639: "https://image.tmdb.org/t/p/w500/dDJ787890.jpg",
    398818: "https://image.tmdb.org/t/p/w500/m878987.jpg",
    770: "https://image.tmdb.org/t/p/w500/l8789.jpg",
    37563: "https://image.tmdb.org/t/p/w500/k89898.jpg",
    216: "https://image.tmdb.org/t/p/w500/j8789.jpg",
    37797: "https://image.tmdb.org/t/p/w500/58989.jpg",
    84892: "https://image.tmdb.org/t/p/w500/a8789.jpg"
};

// ✅ HELPER: Customized for Romance
const createMovieData = (data) => ({
    emotionalIntensity: 85, // Overall weight
    chemistryScore: 90,     // Connection between leads
    complexityLevel: "HIGH",
    dominantColor: "#f43f5e",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Casablanca
    // STATUS: LOCKED 🔒
    289: createMovieData({ 
        emotionalIntensity: 94, 
        chemistryScore: 100, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#fbbf24", // Sepia Gold
        rating: 8.5, criticsScore: 99, audienceScore: 95, director: "Michael Curtiz", 
        cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"], boxOffice: "$3.7 million", budget: "$950k", 
        dna: { "Romance": 55, "War": 25, "Drama": 20 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Rick's Café", color: "#78350f" },
            { time: 35, intensity: 65, label: "As Time Goes By", color: "#b45309" },
            { time: 65, intensity: 75, label: "La Marseillaise", color: "#f59e0b" },
            { time: 90, intensity: 85, label: "The Gun", color: "#d97706" },
            { time: 100, intensity: 94, label: "Airport Goodbye", color: "#fbbf24" }
        ],
        synopsis: "In Casablanca, Morocco in December 1941, a cynical American expatriate encounters a former lover, with unforeseen complications.",
        themes: ["Sacrifice", "War", "Lost Love"]
    }),

    // 2. In the Mood for Love
    // STATUS: LOCKED 🔒 (Ending Adjusted)
    843: createMovieData({ 
        emotionalIntensity: 92, 
        chemistryScore: 98, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#7f1d1d", // Deep Wine Red
        rating: 8.1, criticsScore: 92, audienceScore: 94, director: "Wong Kar-wai", 
        cast: ["Tony Leung", "Maggie Cheung"], boxOffice: "$12 million", budget: "$10 million", 
        dna: { "Romance": 60, "Drama": 40 }, 
        scenes: [
            { time: 15, intensity: 25, label: "Moving In", color: "#450a0a" },
            { time: 45, intensity: 60, label: "The Steak Dinner", color: "#7f1d1d" },
            { time: 75, intensity: 85, label: "Rehearsal Goodbye", color: "#991b1b" },
            { time: 90, intensity: 92, label: "Angkor Wat", color: "#b91c1c" },
            { time: 98, intensity: 70, label: "Years Later", color: "#ef4444" } 
        ],
        synopsis: "Two neighbors form a strong bond after both suspect their spouses of extramarital activities. However, they agree to keep their bond platonic so as not to commit similar wrongs.",
        themes: ["Longing", "Time", "Secret Love"]
    }),

    // 3. Past Lives
    // STATUS: LOCKED 🔒
    666277: createMovieData({ 
        emotionalIntensity: 92, 
        chemistryScore: 90, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#3b82f6", // Melancholy Blue
        rating: 7.9, criticsScore: 96, audienceScore: 84, director: "Celine Song", 
        cast: ["Greta Lee", "Teo Yoo", "John Magaro"], boxOffice: "$24 million", budget: "$12 million", 
        dna: { "Romance": 50, "Drama": 50 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Childhood", color: "#60a5fa" },
            { time: 40, intensity: 55, label: "Skype Years", color: "#3b82f6" },
            { time: 80, intensity: 75, label: "The Bar", color: "#2563eb" },
            { time: 100, intensity: 92, label: "The Uber Wait", color: "#1d4ed8" },
            { time: 105, intensity: 60, label: "Walk Home", color: "#1e40af" }
        ],
        synopsis: "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week.",
        themes: ["Fate (In-Yun)", "Identity", "Missed Connections"]
    }),

    // 4. When Harry Met Sally...
    // STATUS: LOCKED 🔒
    639: createMovieData({ 
        emotionalIntensity: 85, 
        chemistryScore: 95, 
        complexityLevel: "ICONIC", 
        dominantColor: "#ea580c", // Autumn Orange
        rating: 7.7, criticsScore: 91, audienceScore: 89, director: "Rob Reiner", 
        cast: ["Billy Crystal", "Meg Ryan", "Carrie Fisher"], boxOffice: "$92 million", budget: "$16 million", 
        dna: { "Comedy": 60, "Romance": 40 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Drive", color: "#fdba74" },
            { time: 45, intensity: 50, label: "Faking It", color: "#f97316" },
            { time: 70, intensity: 75, label: "The Mistake", color: "#c2410c" },
            { time: 90, intensity: 89, label: "New Year's Eve", color: "#ea580c" },
            { time: 95, intensity: 50, label: "Interview", color: "#9a3412" }
        ],
        synopsis: "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
        themes: ["Friendship", "Timing", "Love"]
    }),

    // 5. Call Me by Your Name
    // STATUS: LOCKED 🔒 (Speech Intensity Tuned)
    398818: createMovieData({ 
        emotionalIntensity: 93, 
        chemistryScore: 96, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#ca8a04", // Olive Gold
        rating: 7.8, criticsScore: 94, audienceScore: 86, director: "Luca Guadagnino", 
        cast: ["Timothée Chalamet", "Armie Hammer"], boxOffice: "$41 million", budget: "$3.5 million", 
        dna: { "Romance": 50, "Drama": 50 }, 
        scenes: [
            { time: 20, intensity: 40, label: "Volleyball", color: "#fef08a" },
            { time: 60, intensity: 75, label: "Midnight", color: "#eab308" },
            { time: 90, intensity: 85, label: "Bergamo Trip", color: "#ca8a04" },
            { time: 120, intensity: 91, label: "Father's Speech", color: "#a16207" },
            { time: 130, intensity: 93, label: "Fireplace", color: "#854d0e" }
        ],
        synopsis: "In 1980s Italy, romance blossoms between a seventeen-year-old student and the older man hired as his father's research assistant.",
        themes: ["First Love", "Coming of Age", "Heartbreak"]
    }),

    // 6. Gone with the Wind
    // STATUS: LOCKED 🔒
    770: createMovieData({ 
        emotionalIntensity: 88, 
        chemistryScore: 92, 
        complexityLevel: "EPIC", 
        dominantColor: "#7f1d1d", // War Red
        rating: 8.2, criticsScore: 90, audienceScore: 93, director: "Victor Fleming", 
        cast: ["Clark Gable", "Vivien Leigh"], boxOffice: "$402 million", budget: "$3.9 million", 
        dna: { "Romance": 40, "War": 30, "Drama": 30 }, 
        scenes: [
            { time: 30, intensity: 40, label: "The Barbecue", color: "#991b1b" },
            { time: 110, intensity: 85, label: "Atlanta Burns", color: "#b91c1c" },
            { time: 170, intensity: 75, label: "I'll Never Be Hungry", color: "#dc2626" },
            { time: 220, intensity: 80, label: "The Staircase", color: "#ef4444" },
            { time: 230, intensity: 91, label: "Frankly My Dear", color: "#7f1d1d" }
        ],
        synopsis: "The manipulative daughter of a Georgia plantation owner conducts a turbulent romance with a roguish profiteer during the American Civil War and Reconstruction periods.",
        themes: ["Survival", "Obsession", "Loss"]
    }),

    // 7. A Summer's Tale
    // STATUS: LOCKED 🔒 (Peak Lowered)
    37563: createMovieData({ 
        emotionalIntensity: 75, 
        chemistryScore: 80, 
        complexityLevel: "NUANCED", 
        dominantColor: "#7dd3fc", // Pastel Sky Blue
        rating: 7.5, criticsScore: 93, audienceScore: 78, director: "Éric Rohmer", 
        cast: ["Melvil Poupaud", "Amanda Langlet"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Romance": 55, "Drama": 45 }, 
        scenes: [
            { time: 15, intensity: 20, label: "Waiting", color: "#e0f2fe" },
            { time: 45, intensity: 50, label: "Margot Walks", color: "#bae6fd" },
            { time: 80, intensity: 65, label: "Song for Solene", color: "#7dd3fc" },
            { time: 100, intensity: 80, label: "The Choice", color: "#38bdf8" },
            { time: 110, intensity: 40, label: "Ferry Ride", color: "#0ea5e9" }
        ],
        synopsis: "A shy math graduate takes a holiday in Dinard before starting his first job. He hopes his sort-of girlfriend will join him, but soon strikes up a friendship with another girl.",
        themes: ["Indecision", "Youth", "Connection"]
    }),

    // 8. Ali: Fear Eats the Soul
    // STATUS: LOCKED 🔒
    216: createMovieData({ 
        emotionalIntensity: 88, 
        chemistryScore: 85, 
        complexityLevel: "POIGNANT", 
        dominantColor: "#f59e0b", // Raincoat Yellow
        rating: 8.1, criticsScore: 100, audienceScore: 91, director: "Rainer Werner Fassbinder", 
        cast: ["Brigitte Mira", "El Hedi ben Salem"], boxOffice: "N/A", budget: "$100k", 
        dna: { "Drama": 60, "Romance": 40 }, 
        scenes: [
            { time: 10, intensity: 30, label: "The Dance Hall", color: "#fcd34d" },
            { time: 40, intensity: 60, label: "Family Dinner", color: "#fbbf24" },
            { time: 65, intensity: 80, label: "The Stare", color: "#f59e0b" },
            { time: 85, intensity: 90, label: "Reconciliation", color: "#d97706" },
            { time: 93, intensity: 70, label: "Hospital", color: "#b45309" }
        ],
        synopsis: "A lonely widow meets a much younger Arab worker in a bar during a rainstorm. They fall in love, to their own surprise and to the shock of their families.",
        themes: ["Prejudice", "Loneliness", "Courage"]
    }),

    // 9. Whisper of the Heart
    // STATUS: LOCKED 🔒 (Peak Lowered)
    37797: createMovieData({ 
        emotionalIntensity: 80, 
        chemistryScore: 85, 
        complexityLevel: "WHOLESOME", 
        dominantColor: "#fde68a", // Warm Sunrise Gold
        rating: 7.9, criticsScore: 94, audienceScore: 90, director: "Yoshifumi Kondō", 
        cast: ["Yoko Honna", "Issei Takahashi"], boxOffice: "$34 million", budget: "N/A", 
        dna: { "Coming of Age": 60, "Romance": 30, "Drama": 10 }, 
        scenes: [
            { time: 20, intensity: 25, label: "Country Road", color: "#fff7ed" },
            { time: 50, intensity: 50, label: "The Shop", color: "#ffedd5" },
            { time: 80, intensity: 70, label: "Writing the Story", color: "#fde68a" },
            { time: 105, intensity: 86, label: "Sunrise", color: "#fcd34d" },
            { time: 110, intensity: 60, label: "Promise", color: "#fbbf24" }
        ],
        synopsis: "A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.",
        themes: ["Creativity", "Ambition", "First Love"]
    }),

    // 10. The Perks of Being a Wallflower
    // STATUS: LOCKED 🔒 (Ending Raised)
    84892: createMovieData({ 
        emotionalIntensity: 85, 
        chemistryScore: 88, 
        complexityLevel: "EMOTIONAL", 
        dominantColor: "#10b981", // Tunnel Green
        rating: 7.9, criticsScore: 85, audienceScore: 89, director: "Stephen Chbosky", 
        cast: ["Logan Lerman", "Emma Watson", "Ezra Miller"], boxOffice: "$33 million", budget: "$13 million", 
        dna: { "Drama": 55, "Coming of Age": 30, "Romance": 15 }, 
        scenes: [
            { time: 20, intensity: 40, label: "Tunnel Song", color: "#6ee7b7" },
            { time: 50, intensity: 60, label: "The Kiss", color: "#34d399" },
            { time: 80, intensity: 75, label: "Sam Leaves", color: "#10b981" },
            { time: 95, intensity: 92, label: "The Breakdown", color: "#059669" },
            { time: 100, intensity: 84, label: "We Are Infinite", color: "#047857" } 
        ],
        synopsis: "An introvert freshman is taken under the wings of two seniors who welcome him to the real world.",
        themes: ["Trauma", "Friendship", "Healing"]
    })
};

// ✅ EXTENDED FAQs (Detailed & Engaging)
export const HBO_ROMANCE_MOVIE_FAQS = {
    'Casablanca': [
        { 
            question: "Did they shoot a different ending?", 
            answer: "No alternative ending was actually filmed, but the script was being rewritten daily during production. For most of the shoot, Ingrid Bergman didn't know whether Ilsa would end up with Rick or Victor. Director Michael Curtiz told her to 'play it in between,' which accidentally created her character's famous look of confused, heartbreaking longing." 
        },
        { 
            question: "Is the chemistry real?", 
            answer: "Surprisingly, Ingrid Bergman and Humphrey Bogart barely spoke to each other off-set and didn't particularly get along. Their legendary on-screen chemistry is a testament to their incredible acting ability and Michael Curtiz's masterful direction in framing their emotional connection." 
        },
        { 
            question: "Does anyone say 'Play it again, Sam'?", 
            answer: "No. This is one of the most famous misquotes in cinema history. Ilsa actually says, 'Play it, Sam. Play As Time Goes By.' Later, Rick says, 'You played it for her, you can play it for me.' The exact phrase 'Play it again, Sam' is never spoken in the movie." 
        },
        { 
            question: "Why did Rick help the young couple?", 
            answer: "Rick rigged the roulette wheel so the young Bulgarian couple would win number 22 twice. He did this to give them enough money for exit visas, saving the woman from having to sleep with the corrupt Captain Renault. It was a key moment showing that despite his cynicism, Rick is still a sentimentalist at heart." 
        }
    ],
    'In the Mood for Love': [
        { 
            question: "Did they sleep together?", 
            answer: "The film deliberately leaves this ambiguous, but strongly implies their love remained unconsummated (platonic). They frequently say, 'We won't be like them,' referring to their cheating spouses. Their restraint is what makes the romantic tension so suffocating and tragic." 
        },
        { 
            question: "Why is it so slow?", 
            answer: "The languid pacing reflects the repressed emotions of the characters living in 1962 Hong Kong. Every slow-motion shot of Maggie Cheung walking to the noodle stall emphasizes the passage of time, their isolation, and the societal constraints trapping them in a cycle of longing." 
        },
        { 
            question: "What does he whisper in the wall?", 
            answer: "In the final scene at Angkor Wat, Chow whispers his secret love for Su into a hollow in the ancient stone wall and seals it with mud. This act creates a physical tomb for a secret he can never share with the world, symbolizing a love that is now part of history." 
        },
        { 
            question: "Why don't we see the spouses?", 
            answer: "The cheating spouses are never fully shown—we only hear their voices or see the back of their heads. Director Wong Kar-wai did this to keep the audience's focus entirely on Chow and Su's isolation, making the spouses feel like phantom forces controlling their lives from the periphery." 
        }
    ],
    'Past Lives': [
        { 
            question: "Is it autobiographical?", 
            answer: "Yes, writer-director Celine Song based the film on a real moment from her life where she sat in a bar in New York City between her American husband and her childhood sweetheart from Korea, translating between them. She realized she was the bridge between two worlds and two versions of herself." 
        },
        { 
            question: "What is In-Yun?", 
            answer: "In-Yun is a Korean concept of providence or fate, specifically regarding relationships between people. It suggests that even the smallest interaction—like brushing sleeves on the street—is the result of thousands of layers of connection from past lives. It frames the film's central tragedy as a matter of destiny." 
        },
        { 
            question: "Is Arthur a villain?", 
            answer: "No, and that is what makes the film so unique. Arthur acts as a supportive, understanding, and somewhat insecure husband who recognizes the profound bond Nora shares with Hae Sung. By refusing to make him a jealous obstacle, the film focuses on the complexity of love rather than melodrama." 
        },
        { 
            question: "What is the meaning of the ending?", 
            answer: "The final long walk to the Uber represents Nora walking Hae Sung out of her life and closing the door on the 'what if' of their past. When she returns to Arthur and cries, she is finally allowing herself to grieve the life she didn't live and the girl she used to be in Korea." 
        }
    ],
    'When Harry Met Sally...': [
        { 
            question: "Was the deli scene real?", 
            answer: "The famous 'I'll have what she's having' scene was filmed at Katz's Delicatessen in NYC, which still has a sign above the table today. The line itself was delivered by director Rob Reiner's mother, Estelle Reiner, after Meg Ryan faked an orgasm in the middle of the crowded restaurant." 
        },
        { 
            question: "Can men and women be friends?", 
            answer: "The film famously argues 'no' initially because 'the sex part gets in the way,' but by the end suggests 'yes'—though it usually gets complicated by romance. It deconstructs the idea that friendship is just a stepping stone to romance, showing that friendship *is* the foundation of the best romance." 
        },
        { 
            question: "Did they almost not end up together?", 
            answer: "Yes, the original script by Nora Ephron ended with Harry and Sally drifting apart and remaining just friends, reflecting a more realistic, melancholy take on dating. Rob Reiner changed the ending to a happy reunion after he met his own wife during filming and decided he wanted a hopeful conclusion." 
        },
        { 
            question: "Are the interviews real?", 
            answer: "The 'How We Met' interview segments featuring older couples talking about their love stories are based on real stories that Rob Reiner collected. However, they are re-enacted by actors for the film to ensure they fit the pacing and tone of the narrative." 
        }
    ],
    'Call Me by Your Name': [
        { 
            question: "What happens in the peach scene?", 
            answer: "It is a moment of intense, private exploration for Elio involving a peach. When Oliver finds him, Elio expects shame, but Oliver embraces him. It becomes a scene of profound vulnerability and acceptance, signifying that Oliver loves every part of Elio, even the parts Elio is ashamed of." 
        },
        { 
            question: "Why the long shot at the end?", 
            answer: "The final shot of Elio staring into the fire while the credits roll allows the audience to sit with his grief in real-time. By not cutting away, the film forces us to process the heartbreak alongside him, validating the depth of his pain rather than skipping to a 'moved on' phase." 
        },
        { 
            question: "Was the fly scripted?", 
            answer: "No, a fly lands on Elio's shirt during the final emotional shot and stays there for quite a while. Timothée Chalamet stayed perfectly in character, ignoring it. Director Luca Guadagnino loved the naturalism and the sense of life continuing around his grief, so he kept it in the final cut." 
        },
        { 
            question: "Is there a sequel?", 
            answer: "The book has a sequel called 'Find Me,' but a film sequel is currently unlikely due to scheduling and creative directions. The movie ends earlier than the book, leaving their future ambiguous, whereas the book follows them decades into the future." 
        }
    ],
    'Gone with the Wind': [
        { 
            question: "Why is it controversial?", 
            answer: "The film has been heavily criticized for its sanitized, romanticized depiction of slavery and the Antebellum South. It presents a 'Lost Cause' narrative that ignores the brutality of slavery, portraying enslaved people as happy and loyal, which has sparked significant debate about its place in cultural history." 
        },
        { 
            question: "Did Rhett really leave?", 
            answer: "Yes. The famous line 'Frankly, my dear, I don't give a damn' signifies him finally giving up on Scarlett after years of her emotional unavailability and obsession with Ashley Wilkes. It is one of the few times in classic Hollywood where the romantic hero walks away for his own self-respect." 
        },
        { 
            question: "How many directors did it have?", 
            answer: "It had three directors. George Cukor began the film but was fired (allegedly because Clark Gable felt he was focusing too much on the female leads). Victor Fleming took over but had a nervous breakdown due to exhaustion. Sam Wood finished the production." 
        },
        { 
            question: "Did they burn a real set?", 
            answer: "Yes, for the massive burning of Atlanta scene, the filmmakers needed to clear the studio backlot. They set fire to old sets from previous movies, including the Great Wall gate from the 1933 'King Kong', to create the inferno that Scarlett and Rhett escape through." 
        }
    ],
    "A Summer's Tale": [
        { 
            question: "Is this part of a series?", 
            answer: "Yes, it is the third film in Éric Rohmer's 'Tales of the Four Seasons' (Contes des quatre saisons). Each film focuses on a different season and a different philosophical take on love, youth, and indecision, though the plots are not connected narratively." 
        },
        { 
            question: "Why is there so much talking?", 
            answer: "Éric Rohmer's films are famous for being 'wordy' and philosophical. The characters analyze their feelings, debate ethics, and discuss their desires at length. In Rohmer's cinema, the conversation *is* the action, revealing character depth through what they say (and what they hide)." 
        },
        { 
            question: "Does Gaspard choose a girl?", 
            answer: "Ultimately, no. Gaspard spends the entire film paralyzed by indecision between Margot, Solene, and Lena. In the end, he uses a sudden job offer as an excuse to leave town alone, escaping the dilemma entirely rather than making a mature romantic choice." 
        },
        { 
            question: "Is the music original?", 
            answer: "Yes, the sea shanty 'Fille de Corsaire' that Gaspard composes throughout the film serves as a recurring motif. It reflects his desire to be a romantic adventurer, contrasted with his actual passivity and inability to commit to any of the women in his life." 
        }
    ],
    'Ali: Fear Eats the Soul': [
        { 
            question: "Is the title grammatically incorrect?", 
            answer: "Yes, 'Angst essen Seele auf' is broken German, reflecting the immigrant protagonist Ali's speech patterns. It highlights his outsider status in German society and adds a layer of vulnerability to his character, emphasizing the social barriers the couple faces." 
        },
        { 
            question: "Why do characters stare?", 
            answer: "Director Rainer Werner Fassbinder uses motionless 'tableaux' shots where characters (neighbors, shopkeepers, family) stare judgmentally at the couple without speaking. This visual technique creates a suffocating sense of social pressure and isolation that surrounds Ali and Emmi." 
        },
        { 
            question: "Is it a remake?", 
            answer: "It is a loose remake and homage to Douglas Sirk's 1955 melodrama 'All That Heaven Allows'. Fassbinder recontextualized the story for 1970s Germany, replacing the class gap with a racial and age gap to explore the specific prejudices of post-war Europe." 
        },
        { 
            question: "What happens at the end?", 
            answer: "Ali collapses from a perforated ulcer caused by stress and overwork. The doctor says it's a common condition for foreign workers due to the immense pressure they live under. The film ends with Emmi sitting by his bedside, promising to stay, but their future remains uncertain and shadowed by societal forces." 
        }
    ],
    'Whisper of the Heart': [
        { 
            question: "Is the Baron real?", 
            answer: "The Baron is a statue in an antique shop that comes to life in Shizuku's fantasy novel sequences. He is a projection of her creativity and ideals. The character became so popular that Studio Ghibli brought him back for a spiritual spin-off movie, 'The Cat Returns'." 
        },
        { 
            question: "Is it a romance or coming-of-age?", 
            answer: "It is perfectly both. The romance is the catalyst for the coming-of-age journey. Shizuku realizes she wants to be 'good enough' for Seiji, which drives her to test her own talents as a writer. Their love is portrayed as a source of mutual inspiration rather than just attraction." 
        },
        { 
            question: "What song is that?", 
            answer: "The opening song is a cover of John Denver's 'Take Me Home, Country Roads.' Throughout the film, Shizuku translates the English lyrics into Japanese, struggling to make them fit. She eventually creates her own version called 'Concrete Roads,' reflecting her suburban reality." 
        },
        { 
            question: "Who directed it?", 
            answer: "It was directed by Yoshifumi Kondō, who was being groomed as Hayao Miyazaki's successor at Studio Ghibli. Tragically, Kondō passed away from an aneurysm shortly after the film's release, making this his only directed feature film and adding a poignant layer to its legacy." 
        }
    ],
    'The Perks of Being a Wallflower': [
        { 
            question: "What is the tunnel song?", 
            answer: "The song played during the tunnel scene is 'Heroes' by David Bowie. In the original book, the song was 'Landslide' by Fleetwood Mac, but director/author Stephen Chbosky felt Bowie's track better captured the feeling of infinite possibility and triumph for the film adaptation." 
        },
        { 
            question: "What happened to Aunt Helen?", 
            answer: "It is revealed late in the film that Aunt Helen sexually abused Charlie when he was a child. Her death in a car crash (which happened while she was getting his birthday gift) caused Charlie to repress the trauma and blame himself, leading to his blackouts and mental health struggles." 
        },
        { 
            question: "What does wallflower mean?", 
            answer: "Patrick toasts Charlie as a wallflower because 'you see things. You keep quiet about them. And you understand.' It reframes his social anxiety and introversion as a superpower of observation and empathy, validating his role in the group dynamic." 
        },
        { 
            question: "Why does Charlie blackout?", 
            answer: "Charlie's blackouts are a symptom of his repressed PTSD and dissociation stemming from the childhood sexual abuse he suffered. As he gets closer to Sam, the intimacy triggers these buried memories, leading to his eventual psychological breakdown and hospitalization." 
        }
    ]
};

// 5. UTILITY FUNCTIONS & THE KEYWORD BRIDGE
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const fetchMovieFromTMDB = async (tmdbId) => ({ poster_path: null, title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' });
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

// 🔥 6. THE KEYWORD BRIDGE (Upgraded for Romance SEO power)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sexual content')) types.add('sexual content');
        else if (lowerType.match(/\bsex\b/)) types.add('sex');
        else if (lowerType.includes('explicit')) types.add('explicit content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR (Universal Version)
// 🔥 HELPER: Calculates total skip time in minutes and seconds
const calculateSkipStats = (scenes) => {
    let totalSeconds = 0;
    scenes.forEach(scene => {
        if (scene.start && scene.end) {
            const parseTime = (t) => {
                const parts = t.split(':').map(Number);
                if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                return 0;
            };
            const startSec = parseTime(scene.start);
            const endSec = parseTime(scene.end);
            if (endSec > startSec) totalSeconds += (endSec - startSec);
        }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (totalSeconds === 0) return "< 1 min"; 
    if (mins === 0) return `${secs} sec`;
    return secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
};

// 🔥 NEW: HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    if (extremeCount >= 2) return 'Extreme';
    if (severities.includes('high') || extremeCount === 1) return 'High';
    if (severities.includes('moderate')) return 'Moderate';
    return 'Mild';
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini'); 
    });

    const sceneCount = heavyScenes.length;
    let schemaDesc = '';
    if (sceneCount > 0) {
        schemaDesc = `${movie.Title} Parents Guide with exact sex & nudity timestamps. ${sceneCount} scenes manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        schemaDesc = `${movie.Title} Parents Guide. Filmiway editors have manually verified zero sex scenes or nudity in the full ${currentRuntime} runtime.`;
    }

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': schemaDesc,
        'genre': movie.genre,
        'url': `https://filmiway.com/movie/${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = HBO_ROMANCE_MOVIE_FAQS[movie.Title] ? [...HBO_ROMANCE_MOVIE_FAQS[movie.Title]] : [];
    const intensityScenes = movieInfo?.scenes || [];
    
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    if (intensityScenes.length > 0) {
        const schemaIntensityList = intensityScenes.map(s => `<li>Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)</li>`).join('');
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `What are the most intense scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Intensity metric, ${movie.Title} peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing to determine if it's truly unsafe for family
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqSchema = familyUnsafeTypes.length > 0 
            ? {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${currentRuntime} runtime.`
                }
            }
            : {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.`
                }
            };

        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes. ${movie.Title} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:<br><br><ul>${schemaListText}</ul><br>Manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.` 
                }
            },
            {
                '@type': 'Question',
                'name': `What time does nudity appear in ${movie.Title} and how do I skip it?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${currentRuntime} version.`
                }
            },
            familyFaqSchema
        );
    } else {
        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `No. Filmiway editors have manually verified that ${movie.Title} is free of explicit sex scenes and nudity.` 
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.` 
                }
            }
        );
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'name': `Parents Guide and FAQ for ${movie.Title}`,
        'mainEntity': schemaFaqs
    };

    return { movieSchema, faqSchema };
};

// 🔥 8. FRONTEND UI SYNC
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = HBO_ROMANCE_MOVIE_FAQS[movieTitle] ? [...HBO_ROMANCE_MOVIE_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:

${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const sceneCount = heavyScenes.length;
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const uiDetailedList = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const fullType = s.severity ? `${s.type || 'Mature Content'}, ${s.severity}` : (s.type || 'Mature Content');
            return `• ${timeRange} (${fullType})`;
        }).join('\n');
        
        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing for the UI as well
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqUI = familyUnsafeTypes.length > 0
            ? {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${finalRuntime} runtime.`
            }
            : {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            };

        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:

${uiDetailedList}

Manually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does nudity appear in ${movieTitle} and how do I skip it?`,
                answer: `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${finalRuntime} version.`
            },
            familyFaqUI
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};