// utils/huluRomanceMovieData.js - HULU ROMANCE COLLECTION DATA
// Optimized for Prestige, Emotional Resonance, and Chemistry

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 1064213, "imdbID": "tt22359552", "Title": "Anora", "year": 2024, "genre": "Comedy", "runtime": 139, "rank": 1 },
    { "tmdbId": 994108, "imdbID": "tt21192142", "Title": "All of Us Strangers", "year": 2023, "genre": "Fantasy", "runtime": 105, "rank": 2 },
    { "tmdbId": 572916, "imdbID": "tt8966292", "Title": "And Then We Danced", "year": 2019, "genre": "Drama", "runtime": 113, "rank": 3 },
    { "tmdbId": 167073, "imdbID": "tt2381111", "Title": "Brooklyn", "year": 2015, "genre": "Drama", "runtime": 111, "rank": 4 },
    { "tmdbId": 16553, "imdbID": "tt0412922", "Title": "Little Manhattan", "year": 2005, "genre": "Family", "runtime": 90, "rank": 5 },
    { "tmdbId": 587792, "imdbID": "tt8385738", "Title": "Palm Springs", "year": 2020, "genre": "Comedy", "runtime": 90, "rank": 6 },
    { "tmdbId": 1049638, "imdbID": "tt15893794", "Title": "Rye Lane", "year": 2023, "genre": "Comedy", "runtime": 82, "rank": 7 },
    { "tmdbId": 25196, "imdbID": "tt1263670", "Title": "Crazy Heart", "year": 2009, "genre": "Drama", "runtime": 112, "rank": 8 },
    { "tmdbId": 758330, "imdbID": "tt13352968", "Title": "Good Luck to You, Leo Grande", "year": 2022, "genre": "Comedy", "runtime": 97, "rank": 9 },
    { "tmdbId": 10096, "imdbID": "tt0337563", "Title": "13 Going on 30", "year": 2004, "genre": "Comedy", "runtime": 98, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Intimacy & Emotional Distress)
export const SENSITIVE_TIMELINES = {
    // 1. Anora
    1064213: { 
        scenes: [
            { start: "0:15:00", end: "0:25:00", type: "Sexual Content", severity: "High" },
            { start: "1:45:00", end: "1:55:00", type: "Emotional Distress", severity: "High" }
        ] 
    },
    // 2. All of Us Strangers
    994108: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Intimacy", severity: "Moderate" },
            { start: "1:35:00", end: "1:40:00", type: "Grief/Trauma", severity: "High" }
        ] 
    },
    // 3. And Then We Danced
    572916: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Intimacy", severity: "Moderate" }
        ] 
    },
    // 4. Brooklyn
    167073: { 
        scenes: [
            { start: "0:55:00", end: "0:58:00", type: "Mild Intimacy", severity: "Low" }
        ] 
    },
    // 5. Little Manhattan
    14368: { scenes: [] }, // Clean, family friendly
    
    // 6. Palm Springs
    587792: { 
        scenes: [
            { start: "0:10:00", end: "0:12:00", type: "Sexual Reference", severity: "Moderate" }
        ] 
    },
    // 7. Rye Lane
    866463: { scenes: [] },
    
    // 8. Crazy Heart
    24428: { 
        scenes: [
            { start: "0:20:00", end: "0:25:00", type: "Alcoholism", severity: "High" },
            { start: "0:45:00", end: "0:48:00", type: "Intimacy", severity: "Moderate" }
        ] 
    },
    // 9. Good Luck to You, Leo Grande
    800366: { 
        scenes: [
            { start: "0:05:00", end: "1:30:00", type: "Sexual Discussion", severity: "Moderate" }, // Whole movie concept
            { start: "1:32:00", end: "1:35:00", type: "Full Nudity", severity: "High" } // The mirror scene
        ] 
    },
    // 10. 13 Going on 30
    10096: { 
        scenes: [
            { start: "0:30:00", end: "0:32:00", type: "Sexual Reference", severity: "Mild" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    1064213: "https://image.tmdb.org/t/p/w500/7Mrg94aa3ypigf5A6J7lB6Q77t.jpg",
    994108: "https://image.tmdb.org/t/p/w500/b679b398679b98679b.jpg",
    572916: "https://image.tmdb.org/t/p/w500/3E37373737.jpg",
    167073: "https://image.tmdb.org/t/p/w500/9J9J9J9J9J.jpg",
    14368: "https://image.tmdb.org/t/p/w500/5K5K5K5K5K.jpg",
    587792: "https://image.tmdb.org/t/p/w500/1G1G1G1G1G.jpg",
    866463: "https://image.tmdb.org/t/p/w500/2H2H2H2H2H.jpg",
    24428: "https://image.tmdb.org/t/p/w500/4F4F4F4F4F.jpg",
    800366: "https://image.tmdb.org/t/p/w500/8L8L8L8L8L.jpg",
    10096: "https://image.tmdb.org/t/p/w500/6M6M6M6M6M.jpg"
};

// ✅ Helper to map "Romance" metrics to your existing code keys
// Replaces old metrics with ONLY 'romanticIntensity'
const createMovieData = (data) => ({
    romanticIntensity: 85,      // Default Romantic Intensity
    complexityLevel: "HIGH",
    dominantColor: "#ec4899",   // Pink default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
   
   
      // 1. All of Us Strangers
    994108: createMovieData({ 
        romanticIntensity: 100, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#6366f1", rating: 7.7, criticsScore: 96, audienceScore: 91, director: "Andrew Haigh", 
        cast: ["Andrew Scott", "Paul Mescal"], boxOffice: "$19 million", budget: "$15 million", 
        dna: { "Fantasy": 30, "Romance": 40, "Drama": 30 },
        scenes: [
            { time: 15, intensity: 50, label: "The Fire Alarm", color: "#6366f1" },
            { time: 40, intensity: 75, label: "Meeting Parents", color: "#818cf8" },
            { time: 65, intensity: 90, label: "Club Night", color: "#4f46e5" },
            { time: 90, intensity: 98, label: "The Diner Truth", color: "#3730a3" },
            { time: 100, intensity: 100, label: "Power of Love", color: "#312e81" }
        ],
        synopsis: "A screenwriter drawn back to his childhood home enters a fledgling relationship with a mysterious neighbor while discovering his parents appear to be living there, just as they were when they died 30 years ago.",
        themes: ["Grief", "Memory", "Queer Love"]
    }),
   
   
   
    // 2. Anora
    1064213: createMovieData({ 
        romanticIntensity: 98, 
        complexityLevel: "PALME D'OR", 
        dominantColor: "#f43f5e", rating: 7.9, criticsScore: 97, audienceScore: 85, director: "Sean Baker", 
        cast: ["Mikey Madison", "Mark Eydelshteyn"], boxOffice: "$10 million", budget: "$6 million", 
        dna: { "Romance": 40, "Comedy": 40, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 60, label: "The Club Meet", color: "#db2777" },
            { time: 45, intensity: 85, label: "Vegas Wedding", color: "#f43f5e" },
            { time: 80, intensity: 95, label: "The Parents Arrive", color: "#9f1239" },
            { time: 110, intensity: 90, label: "The Chaos", color: "#881337" },
            { time: 135, intensity: 88, label: "Quiet Breakdown", color: "#be123c" }
        ],
        synopsis: "A sex worker from Brooklyn marries the son of a Russian oligarch in a whirlwind romance that turns into a chaotic nightmare when his parents fly in to annul the marriage. Pure adrenaline and heart.",
        themes: ["Class Divide", "Fantasy vs Reality", "Chaotic Love"]
    }),

 

    // 3. And Then We Danced
    572916: createMovieData({ 
        romanticIntensity: 92, 
        complexityLevel: "HIGH", 
        dominantColor: "#ea580c", rating: 7.6, criticsScore: 93, audienceScore: 94, director: "Levan Akin", 
        cast: ["Levan Gelbakhiani", "Bachi Valishvili"], boxOffice: "$1.2 million", budget: "N/A", 
        dna: { "Drama": 50, "Romance": 30, "Dance": 20 },
        scenes: [
            { time: 20, intensity: 45, label: "Training", color: "#ea580c" },
            { time: 50, intensity: 80, label: "The Wedding", color: "#f97316" },
            { time: 75, intensity: 95, label: "First Touch", color: "#c2410c" },
            { time: 95, intensity: 85, label: "The Injury", color: "#9a3412" },
            { time: 110, intensity: 98, label: "Final Dance", color: "#ea580c" }
        ],
        synopsis: "Merab has been training from a young age at the National Georgian Ensemble with his dance partner Mary. His world turns upside down when the charismatic and carefree Irakli arrives.",
        themes: ["Tradition vs Desire", "Self-Discovery", "Passion"]
    }),

    // 4. Brooklyn
    167073: createMovieData({ 
        romanticIntensity: 85, 
        complexityLevel: "PURE", 
        dominantColor: "#0ea5e9", rating: 7.5, criticsScore: 97, audienceScore: 88, director: "John Crowley", 
        cast: ["Saoirse Ronan", "Emory Cohen"], boxOffice: "$62 million", budget: "$11 million", 
        dna: { "Romance": 60, "History": 20, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "Leaving Home", color: "#0ea5e9" },
            { time: 45, intensity: 75, label: "Meeting Tony", color: "#38bdf8" },
            { time: 70, intensity: 60, label: "Tragedy Strikes", color: "#0369a1" },
            { time: 90, intensity: 85, label: "The Choice", color: "#0284c7" },
            { time: 105, intensity: 95, label: "The Return", color: "#0ea5e9" }
        ],
        synopsis: "An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local. When her past catches up with her, she must choose between two countries and the lives that exist within.",
        themes: ["Home", "Immigration", "Choice"]
    }),

    // 5. Little Manhattan
    14368: createMovieData({ 
        romanticIntensity: 80, 
        complexityLevel: "NOSTALGIC", 
        dominantColor: "#facc15", rating: 7.5, criticsScore: 77, audienceScore: 89, director: "Mark Levin", 
        cast: ["Josh Hutcherson", "Charlie Ray"], boxOffice: "$1.1 million", budget: "N/A", 
        dna: { "Family": 40, "Romance": 40, "Comedy": 20 },
        scenes: [
            { time: 10, intensity: 30, label: "Karate Class", color: "#facc15" },
            { time: 40, intensity: 60, label: "First Date", color: "#eab308" },
            { time: 65, intensity: 85, label: "Holding Hands", color: "#ca8a04" },
            { time: 80, intensity: 70, label: "The Breakup", color: "#a16207" },
            { time: 88, intensity: 90, label: "Growing Up", color: "#facc15" }
        ],
        synopsis: "New York City is the setting for this romantic comedy about two 10-year-olds who fall in love for the first time. A massive nostalgia trip that punches way above its weight.",
        themes: ["First Love", "Childhood", "NYC"]
    }),

    // 6. Palm Springs
    587792: createMovieData({ 
        romanticIntensity: 88, 
        complexityLevel: "CLEVER", 
        dominantColor: "#10b981", rating: 7.4, criticsScore: 94, audienceScore: 89, director: "Max Barbakow", 
        cast: ["Andy Samberg", "Cristin Milioti"], boxOffice: "Streaming", budget: "$5 million", 
        dna: { "Comedy": 40, "Sci-Fi": 30, "Romance": 30 },
        scenes: [
            { time: 10, intensity: 50, label: "The Cave", color: "#10b981" },
            { time: 35, intensity: 70, label: "Infinite Loop", color: "#34d399" },
            { time: 60, intensity: 85, label: "Camping", color: "#059669" },
            { time: 75, intensity: 60, label: "The Fight", color: "#047857" },
            { time: 85, intensity: 95, label: "Quantum Leap", color: "#10b981" }
        ],
        synopsis: "When Nyles and Sarah have a chance encounter at a Palm Springs wedding, things get complicated as they are unable to escape the venue, themselves, or each other. Groundhog Day for the modern cynic.",
        themes: ["Existentialism", "Commitment", "Time Loops"]
    }),

    // 7. Rye Lane
    866463: createMovieData({ 
        romanticIntensity: 82, 
        complexityLevel: "FRESH", 
        dominantColor: "#ec4899", rating: 7.2, criticsScore: 98, audienceScore: 85, director: "Raine Allen-Miller", 
        cast: ["David Jonsson", "Vivian Oparah"], boxOffice: "$1.2 million", budget: "N/A", 
        dna: { "Comedy": 50, "Romance": 50 },
        scenes: [
            { time: 10, intensity: 40, label: "The Toilet Meet", color: "#ec4899" },
            { time: 35, intensity: 70, label: "South London Walk", color: "#f472b6" },
            { time: 55, intensity: 80, label: "Karaoke", color: "#db2777" },
            { time: 70, intensity: 65, label: "The Exes", color: "#be123c" },
            { time: 80, intensity: 90, label: "The Grand Gesture", color: "#ec4899" }
        ],
        synopsis: "Two twenty-somethings, both reeling from bad break-ups, connect over the course of an eventful day in South London. Visually stunning, colorful, and incredibly fresh.",
        themes: ["Modern Dating", "Healing", "London"]
    }),

    // 8. Crazy Heart
    24428: createMovieData({ 
        romanticIntensity: 90, 
        complexityLevel: "OSCAR", 
        dominantColor: "#b45309", rating: 7.0, criticsScore: 90, audienceScore: 80, director: "Scott Cooper", 
        cast: ["Jeff Bridges", "Maggie Gyllenhaal"], boxOffice: "$47 million", budget: "$7 million", 
        dna: { "Drama": 50, "Music": 30, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "The Tour", color: "#b45309" },
            { time: 40, intensity: 75, label: "Falling in Love", color: "#d97706" },
            { time: 70, intensity: 90, label: "The Relapse", color: "#92400e" },
            { time: 95, intensity: 85, label: "Clean Sober", color: "#78350f" },
            { time: 110, intensity: 80, label: "The Song", color: "#b45309" }
        ],
        synopsis: "A faded country music musician is forced to reassess his dysfunctional life during a doomed romance that also inspires him. Jeff Bridges won Best Actor for this prestige drama.",
        themes: ["Redemption", "Addiction", "Music"]
    }),

    // 9. Good Luck to You, Leo Grande
    800366: createMovieData({ 
        romanticIntensity: 85, 
        complexityLevel: "INTIMATE", 
        dominantColor: "#f59e0b", rating: 7.2, criticsScore: 93, audienceScore: 85, director: "Sophie Hyde", 
        cast: ["Emma Thompson", "Daryl McCormack"], boxOffice: "$14 million", budget: "$4 million", 
        dna: { "Comedy": 40, "Drama": 40, "Romance": 20 },
        scenes: [
            { time: 10, intensity: 40, label: "The Hotel Room", color: "#f59e0b" },
            { time: 30, intensity: 60, label: "Awkward Talk", color: "#fbbf24" },
            { time: 55, intensity: 75, label: "Breaking Barriers", color: "#d97706" },
            { time: 80, intensity: 90, label: "True Intimacy", color: "#b45309" },
            { time: 95, intensity: 95, label: "The Mirror", color: "#f59e0b" }
        ],
        synopsis: "Nancy Stokes, a retired school teacher and widow, is yearning for some adventure, some human connection, and some sex. Brave, honest, and stripped back.",
        themes: ["Body Positivity", "Sex Work", "Self-Love"]
    }),

    // 10. 13 Going on 30
    10096: createMovieData({ 
        romanticIntensity: 70, 
        complexityLevel: "COMFORT", 
        dominantColor: "#db2777", rating: 6.3, criticsScore: 65, audienceScore: 78, director: "Gary Winick", 
        cast: ["Jennifer Garner", "Mark Ruffalo"], boxOffice: "$96 million", budget: "$37 million", 
        dna: { "Comedy": 50, "Fantasy": 25, "Romance": 25 },
        scenes: [
            { time: 10, intensity: 40, label: "The Closet Game", color: "#db2777" },
            { time: 25, intensity: 60, label: "Waking Up 30", color: "#ec4899" },
            { time: 60, intensity: 90, label: "Thriller Dance", color: "#f472b6" },
            { time: 85, intensity: 85, label: "Razzles", color: "#db2777" },
            { time: 95, intensity: 95, label: "Second Chance", color: "#be123c" }
        ],
        synopsis: "A girl makes a wish on her 13th birthday, wakes up the next day as a 30-year-old woman, and discovers that her life isn't quite what she expected. The ultimate comfort watch.",
        themes: ["Nostalgia", "Growth", "Second Chances"]
    })
};

export const STRATEGIC_QUOTES = {
    1064213: "I'm not a hooker, I'm an escort.",
    994108: "I've always been lonely. That's why I'm here.",
    572916: "There is no sex in Georgian dance!",
    167073: "You'll feel so homesick that you'll want to die, and there's nothing you can do about it apart from endure it.",
    14368: "Love is an ugly, terrible business practiced by fools.",
    587792: "Today, tomorrow, it's all the same.",
    866463: "You know when you see someone and you just know?",
    24428: "I used to be somebody, but now I'm somebody else.",
    800366: "I've never had an orgasm.",
    10096: "I want to be thirty. Thirty and flirty and thriving."
};

export const CINEMATIC_COLORS = {
    "Romance": "#ec4899", "Drama": "#f59e0b", "Comedy": "#eab308", "Fantasy": "#8b5cf6", "Family": "#10b981"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Skip It", color: "#ef4444", symbol: "💔", bgColor: "bg-red-900/30", description: "Not worth the heartbreak" },
    { value: 2, label: "Okay", color: "#f97316", symbol: "😐", bgColor: "bg-orange-900/30", description: "Fine for a rainy day" },
    { value: 3, label: "Sweet", color: "#ec4899", symbol: "❤️", bgColor: "bg-pink-900/30", description: 'Genuine feelings' },
    { value: 4, label: "Masterpiece", color: "#8b5cf6", symbol: "💖", bgColor: "bg-purple-900/30", description: "Instant Classic" }
];

export const HULU_ROMANCE_MOVIE_FAQS = {
    'Anora': [
        { 
            question: "Is Anora a comedy or a drama?", 
            answer: "It is a chaotic, high-energy blend of both, often described as a 'screwball tragedy.' Director Sean Baker (The Florida Project) masters a unique tone that starts as a hilarious, fast-paced sex work farce before shifting into a devastatingly realistic look at class warfare and transactional relationships. The emotional whiplash is the point." 
        },
        { 
            question: "Did it really win the Palme d'Or?", 
            answer: "Yes, Anora won the prestigious Palme d'Or at the 2024 Cannes Film Festival, making Sean Baker the first American director to win the top prize since Terrence Malick in 2011. The jury praised it for reminding the world that cinema can still be 'full of life, full of hope, and full of youth' despite its gritty subject matter." 
        },
        { 
            question: "Is it suitable for families?", 
            answer: "Definitely not. The film features graphic nudity, extensive sexual content, and intense drug use appropriate for its setting in the world of high-end escorting and Russian oligarch nightlife. It is rated R for strong sexual content, graphic nudity, pervasive language, and drug use." 
        },
        { 
            question: "Who plays Anora?", 
            answer: "Mikey Madison plays the lead role of Ani (Anora). She was previously known for her intense supporting roles in 'Once Upon a Time in Hollywood' (where she gets torched by a flamethrower) and 'Scream (2022)'. This is her breakout lead performance, requiring her to learn Russian and master pole dancing choreography." 
        }
    ],
    'All of Us Strangers': [
        { 
            question: "Is it a ghost story?", 
            answer: "Yes, but in a metaphysical, psychological sense rather than a horror one. It uses the framework of a ghost story—visiting the spirits of the dead—to explore deep human themes of grief, loneliness, and the healing power of saying the things we left unsaid. It asks: what if you could meet your parents as a grown-up and finally come out to them?" 
        },
        { 
            question: "Is it based on a book?", 
            answer: "It is loosely adapted from the 1987 Japanese novel 'Strangers' by Taichi Yamada. However, director Andrew Haigh made significant changes: he changed the protagonist's sexuality to gay (the book protagonist is straight), creating a new layer of complexity about queer generational trauma that wasn't in the source material." 
        },
        { 
            question: "Why are Paul Mescal and Andrew Scott so praised?", 
            answer: "Their chemistry has been described by critics as 'electric' and 'devastatingly vulnerable.' Both actors brought their personal experiences as gay men to the roles, creating an intimacy that feels raw and unsimulated. The 'Diner Truth' scene, in particular, is cited as a masterclass in acting." 
        },
        { 
            question: "Is it sad?", 
            answer: "It is widely considered one of the most emotional and tear-jerking films of its decade. It deals heavily with the isolation of growing up gay in the 80s, the pain of losing parents young, and the dream of reconciliation. Viewers are strongly advised to have tissues ready." 
        }
    ],
    'And Then We Danced': [
        { 
            question: "Is the dancing real?", 
            answer: "Yes, absolutely. Lead actor Levan Gelbakhiani is a professional contemporary dancer in real life. He performed all his own dance sequences, which adds immense authenticity to the grueling training montages. The film captures the physical toll of Georgian dance—bloodied toes, torn muscles, and exhaustion—without using stunt doubles." 
        },
        { 
            question: "Why was it controversial?", 
            answer: "The film faced violent protests in Georgia (the country) upon release. Conservative groups and the Orthodox Church condemned it because it depicts a gay romance within the strictly traditional, hyper-masculine world of Georgian National Dance. The director had to hire bodyguards for the cast during the premiere." 
        },
        { 
            question: "What language is it in?", 
            answer: "The film is primarily in Georgian, a language with its own unique script and history. It serves as a rare cultural export that showcases Tbilisi's vibrant youth culture, techno scene, and ancient traditions to a global audience." 
        },
        { 
            question: "Is it a happy ending?", 
            answer: "It features a bittersweet but deeply empowering ending. Instead of a traditional 'happily ever after' romance, the film focuses on self-acceptance. The final dance is an act of rebellion and artistic liberation, where the protagonist reclaims his identity and his culture on his own terms." 
        }
    ],
    'Brooklyn': [
        { 
            question: "Is Brooklyn based on a true story?", 
            answer: "No, it is based on the acclaimed novel of the same name by Colm Tóibín. However, it captures the authentic, shared experience of the thousands of young Irish women who emigrated to New York in the 1950s, torn between their duty to their families back home and the freedom of American life." 
        },
        { 
            question: "Why is it rated so highly?", 
            answer: "Critics praised its refreshing lack of cynicism. In an era of gritty, dark dramas, 'Brooklyn' stands out as a pure, earnest, and beautifully crafted old-school romance. It doesn't rely on manufactured villains or misunderstandings; the conflict comes from genuine, difficult life choices." 
        },
        { 
            question: "Who does she choose?", 
            answer: "Spoiler: Eilis chooses Tony (the Italian plumber in New York) over Jim (the gentle Irish boy back home). Her choice represents choosing her own future and independence over the comfort and familiarity of her past life in Enniscorthy." 
        },
        { 
            question: "Did Saoirse Ronan get nominated?", 
            answer: "Yes, Saoirse Ronan received an Academy Award nomination for Best Actress for her performance. It was a deeply personal role for her, as she herself was born in the Bronx to Irish parents and moved back and forth, understanding the specific ache of homesickness depicted in the film." 
        }
    ],
    'Little Manhattan': [
        { 
            question: "Is this for kids or adults?", 
            answer: "It works surprisingly well for both. Kids relate to the plot of having a first crush, while adults appreciate the nostalgic, bittersweet narration about the searing pain of first love. The film treats the emotions of its 10-year-old protagonists with total seriousness, never mocking them." 
        },
        { 
            question: "Is that a young Josh Hutcherson?", 
            answer: "Yes, this was one of Josh Hutcherson's first major lead roles before he became a global star in 'Bridge to Terabithia' and 'The Hunger Games.' His performance is remarkable for how he handles the complex, neurotic dialogue of a boy trying to understand heartbreak." 
        },
        { 
            question: "Where was it filmed?", 
            answer: "The movie is a love letter to the Upper West Side of New York City. It was filmed entirely on location, featuring iconic spots like Central Park, the American Museum of Natural History, and the brownstone streets that give the film its warm, golden-hour aesthetic." 
        },
        { 
            question: "Does it have a happy ending?", 
            answer: "It has a realistic, bittersweet ending rather than a fairy-tale one. Gabe and Rosemary do not get married or stay together forever. Instead, the film teaches a valuable lesson: that a relationship can end and still be a beautiful, important part of your life." 
        }
    ],
    'Palm Springs': [
        { 
            question: "How is it different from Groundhog Day?", 
            answer: "While 'Groundhog Day' focuses on one man's self-improvement, 'Palm Springs' introduces a second person (Cristin Milioti) into the loop early on. This shifts the focus from individual growth to relationship dynamics, shared trauma, and the existential question of whether love matters if nothing has a future." 
        },
        { 
            question: "What is the ending?", 
            answer: "Sarah studies quantum physics and devises a plan to blow themselves up in the cave at the exact moment of reset. The final scene shows them lounging in a pool as the owners return, proving they successfully broke the loop and entered 'tomorrow' (November 10th)." 
        },
        { 
            question: "Is there a post-credits scene?", 
            answer: "Yes! Stick around to see Roy (J.K. Simmons). He finally visits Nyles to tell him he thinks he found a way out, only to realize that the 'Nyles' in front of him doesn't recognize him—meaning the original Nyles successfully escaped, leaving this version behind." 
        },
        { 
            question: "Is it streaming only?", 
            answer: "It was acquired by Hulu at the Sundance Film Festival for a record-breaking $17.5 million (by 69 cents). It became a massive streaming hit during the pandemic because its themes of being stuck in a repetitive loop resonated deeply with audiences in lockdown." 
        }
    ],
    'Rye Lane': [
        { 
            question: "Where is Rye Lane?", 
            answer: "Rye Lane is a real, bustling street in Peckham, South London. The film uses real locations like the Peckham Plex cinema, Rye Lane Market, and various local food stalls. It is visually distinct for using wide-angle lenses that make the neighborhood look colorful, vibrant, and almost dreamlike." 
        },
        { 
            question: "Is it a musical?", 
            answer: "No, but it has the energy of one. The dialogue has a rhythmic, rapid-fire quality, and the soundtrack (featuring A Tribe Called Quest and Salt-N-Pepa) drives the editing. It feels like a visual mixtape of South London culture." 
        },
        { 
            question: "How long is the movie?", 
            answer: "It is a tight, perfectly paced 82 minutes. In an era of bloated 2.5-hour blockbusters, critics praised 'Rye Lane' for being a lean, efficient rom-com that doesn't waste a single second of the audience's time." 
        },
        { 
            question: "Is there a Colin Firth cameo?", 
            answer: "Yes! In a brilliant meta-joke, Colin Firth makes a surprise cameo appearance working at a burrito stall called 'Love Guac'tually.' It pays homage to his status as the king of British rom-coms while playfully subverting his posh image." 
        }
    ],
    'Crazy Heart': [
        { 
            question: "Is Bad Blake a real person?", 
            answer: "No, but the character is heavily inspired by real-life country music outlaws like Hank Thompson, Ramblin' Jack Elliott, and Kris Kristofferson. The story mirrors the real struggles of aging musicians dealing with alcoholism and a changing industry that has left them behind." 
        },
        { 
            question: "Did Jeff Bridges sing?", 
            answer: "Yes, Jeff Bridges performed all his own vocals for the film's soundtrack. He worked closely with producer T Bone Burnett to develop a weary, gravelly singing voice that sounded like it had been soaked in whiskey for 40 years." 
        },
        { 
            question: "Did it win Oscars?", 
            answer: "Yes, the film was a major awards contender. Jeff Bridges finally won the Academy Award for Best Actor for his performance (after four previous nominations), and the film's theme song, 'The Weary Kind' by Ryan Bingham, won Best Original Song." 
        },
        { 
            question: "Is it sad?", 
            answer: "It deals heavily with alcoholism, regret, and self-destruction, so it has heavy moments. However, it ultimately ends on a note of redemption. It avoids a cliché happy ending in favor of a mature one: Bad Blake gets sober and finds peace, even if he doesn't get the girl." 
        }
    ],
    'Good Luck to You, Leo Grande': [
        { 
            question: "Is the whole movie in one room?", 
            answer: "Almost the entire film takes place in a single hotel room. This 'chamber piece' structure forces the movie to rely entirely on the strength of the script and the chemistry between Emma Thompson and Daryl McCormack. It feels intimate, like watching a private play." 
        },
        { 
            question: "Did Emma Thompson use a body double?", 
            answer: "No. The final scene, where her character stands fully naked in front of a mirror and looks at her body with acceptance, was performed by Thompson herself. She described it as the 'hardest thing she’s ever done,' challenging the industry's refusal to show natural, aging female bodies." 
        },
        { 
            question: "Is it explicit?", 
            answer: "While the characters discuss sex constantly and frankly, the film is not gratuitous or voyeuristic. It focuses more on the emotional, psychological, and conversational aspects of intimacy—shame, pleasure, and body image—rather than just the physical act." 
        },
        { 
            question: "What is the message?", 
            answer: "The film is a radical statement on body positivity and female pleasure. It argues that it is never too late to accept oneself, that older women deserve sexual agency, and it seeks to destigmatize sex work by portraying Leo as a professional, empathetic care provider." 
        }
    ],
    '13 Going on 30': [
        { 
            question: "Is the 'Thriller' dance iconic?", 
            answer: "Yes, the scene where Jenna saves the boring office party by leading a group dance to Michael Jackson's 'Thriller' is the movie's most famous moment. It has become a pop culture staple, frequently recreated on TikTok and referenced as the definitive moment Jennifer Garner became a movie star." 
        },
        { 
            question: "Are Mark Ruffalo and Jennifer Garner friends?", 
            answer: "Yes, they have maintained a friendship for decades since filming. They delighted fans by reuniting on screen 18 years later in 'The Adam Project' (2022), where they played a married couple, creating a spiritual sequel for fans of their chemistry." 
        },
        { 
            question: "What are 'Razzles'?", 
            answer: "Razzles are a real candy/gum hybrid from the 1960s ('First it's a candy, then it's a gum!'). They play a key plot role as Matt and Jenna's favorite childhood treat. The movie's popularity actually revived interest in the brand, keeping it on shelves for a new generation." 
        },
        { 
            question: "Is it a musical?", 
            answer: "It isn't a musical in the traditional sense, but music drives the plot more than in most rom-coms. Classic 80s hits like 'Love is a Battlefield' (sung at a slumber party) and Billy Joel's 'Vienna' are used to mark key emotional turning points in Jenna's journey." 
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
        if (lowerType.includes('sex') || lowerType.includes('intimacy')) types.add('sexual content');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('distress') || lowerType.includes('grief')) types.add('emotional distress');
        if (lowerType.includes('alcohol')) types.add('substance use');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_ROMANCE_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A top romance movie on Hulu.`,
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