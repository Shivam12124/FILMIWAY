// utils/raunchyComedyMovieData.js - RAUNCHY COMEDY COLLECTION DATA ✅
// Movies exploring the absolute limits of R-rated humor, teen chaos, and iconic gross-out gags.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 2105, "imdbID": "tt0163651", "Title": "American Pie", "year": 1999, "genre": "Comedy", "runtime": 95, "rank": 1 },
    { "tmdbId": 8363, "imdbID": "tt0829482", "Title": "Superbad", "year": 2007, "genre": "Comedy", "runtime": 113, "rank": 2 },
    { "tmdbId": 18785, "imdbID": "tt1119646", "Title": "The Hangover", "year": 2009, "genre": "Comedy", "runtime": 100, "rank": 3 },
    { "tmdbId": 6957, "imdbID": "tt0425061", "Title": "The 40-Year-Old Virgin", "year": 2005, "genre": "Comedy", "runtime": 116, "rank": 4 },
    { "tmdbId": 9522, "imdbID": "tt0396269", "Title": "Wedding Crashers", "year": 2005, "genre": "Comedy", "runtime": 119, "rank": 5 },
    { "tmdbId": 9285, "imdbID": "tt0215129", "Title": "Road Trip", "year": 2000, "genre": "Comedy", "runtime": 94, "rank": 6 },
    { "tmdbId": 9352, "imdbID": "tt0356150", "Title": "EuroTrip", "year": 2004, "genre": "Comedy", "runtime": 90, "rank": 7 },
    { "tmdbId": 55721, "imdbID": "tt1478338", "Title": "Bridesmaids", "year": 2011, "genre": "Comedy", "runtime": 125, "rank": 8 },
    { "tmdbId": 544, "imdbID": "tt0129387", "Title": "There's Something About Mary", "year": 1998, "genre": "Comedy", "runtime": 119, "rank": 9 },
    { "tmdbId": 11282, "imdbID": "tt0366551", "Title": "Harold & Kumar Go to White Castle", "year": 2004, "genre": "Comedy", "runtime": 88, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    2105: "This one time, at band camp...",
    8363: "I am McLovin.",
    18785: "What happens in Vegas stays in Vegas. Except for herpes.",
    6957: "Kelly Clarkson!",
    9522: "Rule number 76: No excuses, play like a champion!",
    9285: "Did you mail that tape?",
    9352: "Scotty doesn't know!",
    55721: "Help me, I'm poor.",
    544: "Is that... hair gel?",
    11282: "Dude, we are so high right now!"
};

// ✅ SENSITIVE TIMELINES (Crucial for Raunchy Comedies!)
export const SENSITIVE_TIMELINES = {
    // 1. American Pie
    2105: { 
        scenes: [
            { start: "0:01:29", end: "0:01:34", type: "Sexual content", severity: "Moderate" },
            { start: "0:12:19", end: "0:12:24", type: "Sex", severity: "Moderate" },
            { start: "0:32:25", end: "0:32:45", type: "Sexual content", severity: "Moderate" },
            { start: "0:36:06", end: "0:36:30", type: "Sex", severity: "High" },
            { start: "0:40:30", end: "0:40:40", type: "Suggestive clothing (Lingerie)", severity: "Mild" },
            { start: "0:40:41", end: "0:46:00", type: "Nudity", severity: "High" },
            { start: "0:46:01", end: "0:48:18", type: "Sexual content & Nudity", severity: "High" },
            { start: "0:48:30", end: "0:52:50", type: "Nudity", severity: "High" },
            { start: "1:23:30", end: "1:23:46", type: "Sex", severity: "Moderate" },
            { start: "1:26:10", end: "1:26:18", type: "Sex", severity: "Moderate" },
            { start: "1:26:40", end: "1:26:50", type: "Sexual content (Sexual sounds)", severity: "Moderate" }
        ] 
    },
    // 2. Superbad
    8363: { 
        scenes: [
            { start: "0:04:45", end: "0:04:55", type: "Nudity", severity: "Moderate" },
            { start: "0:09:38", end: "0:09:45", type: "Nudity", severity: "High" },
            { start: "0:18:15", end: "0:20:30", type: "Sexual Content", severity: "Mild" }
        ] 
    },
    // 3. The Hangover
    18785: { 
        scenes: [
            { start: "0:04:29", end: "0:05:47", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "0:33:39", end: "0:36:05", type: "Suggestive Clothing (Bikini)", severity: "Mild" },
            { start: "0:39:23", end: "0:39:28", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "0:50:17", end: "0:50:19", type: "Nudity (Woman)", severity: "High" },
            { start: "1:00:19", end: "1:00:56", type: "Nudity (Man)", severity: "High" }
        ] 
    },
    // 4. The 40-Year-Old Virgin
    6957: { 
        scenes: [
            { start: "0:15:15", end: "0:15:28", type: "Suggestive clothing", severity: "Mild" },
            { start: "0:20:30", end: "0:20:40", type: "Nudity", severity: "High" },
            { start: "0:21:50", end: "0:22:11", type: "Nudity", severity: "High" },
            { start: "0:22:12", end: "0:22:49", type: "Suggestive clothing", severity: "Mild" },
            { start: "0:53:39", end: "0:53:47", type: "Nudity & Sex", severity: "Moderate" },
            { start: "0:53:57", end: "0:54:30", type: "Nudity (Woman)", severity: "High" },
            { start: "0:58:54", end: "0:59:13", type: "Nudity (Woman)", severity: "High" },
            { start: "1:13:38", end: "1:13:47", type: "Suggestive Clothing (Lingerie)", severity: "Mild" },
            { start: "1:14:43", end: "1:14:46", type: "Suggestive Clothing (Lingerie)", severity: "Mild" },
            { start: "1:53:42", end: "1:55:27", type: "Suggestive Clothing", severity: "Mild" }
        ] 
    },
    // 5. Wedding Crashers
    9522: { 
        scenes: [
            { start: "0:13:04", end: "0:13:07", type: "Suggestive clothing (Undergarments)", severity: "Moderate" },
            { start: "0:13:14", end: "0:13:50", type: "Nudity (Woman)", severity: "High" },
            { start: "0:14:00", end: "0:14:20", type: "Suggestive clothing (Undergarments)", severity: "Moderate" },
            { start: "0:55:35", end: "0:56:43", type: "Sexual content", severity: "Moderate" },
            { start: "1:00:16", end: "1:00:28", type: "Sexual content", severity: "Moderate" },
            { start: "1:06:25", end: "1:07:05", type: "Nudity (Woman)", severity: "High" }
        ] 
    },
    // 6. Road Trip
    9285: { 
        scenes: [
            { start: "0:04:50", end: "0:04:54", type: "Suggestive clothing", severity: "Mild" },
            { start: "0:15:45", end: "0:15:57", type: "Nudity (Women)", severity: "High" },
            { start: "0:18:20", end: "0:18:56", type: "Nudity (Woman)", severity: "High" },
            { start: "0:30:28", end: "0:30:38", type: "Nudity (Women)", severity: "High" },
            { start: "0:30:57", end: "0:31:58", type: "Nudity (Women)", severity: "Extreme" },
            { start: "0:59:28", end: "1:00:25", type: "Suggestive clothing (Lingerie)", severity: "Mild" },
            { start: "1:00:26", end: "1:00:33", type: "Sex", severity: "Moderate" },
            { start: "1:10:11", end: "1:10:30", type: "Sexual Content", severity: "Moderate" },
            { start: "1:15:03", end: "1:15:07", type: "Nudity (Woman)", severity: "Moderate" }
        ] 
    },
    // 7. EuroTrip
    9352: { 
        scenes: [
            { start: "0:09:33", end: "0:10:35", type: "Suggestive Clothing (Bikini)", severity: "Mild" },
            { start: "0:10:36", end: "0:11:15", type: "Nudity (Woman)", severity: "High" },
            { start: "0:40:52", end: "0:41:16", type: "Nudity (Man)", severity: "High" },
            { start: "0:41:22", end: "0:42:10", type: "Suggestive Clothing (Bikini)", severity: "Mild" },
            { start: "0:42:11", end: "0:42:42", type: "Nudity (Man)", severity: "High" },
            { start: "0:44:04", end: "0:44:06", type: "Partial Nudity (Men)", severity: "Moderate" },
            { start: "0:44:07", end: "0:44:18", type: "Nudity (Man)", severity: "High" },
            { start: "0:44:08", end: "0:44:40", type: "Nudity (Woman)", severity: "High" },
            { start: "0:44:43", end: "0:40:51", type: "Nudity (Women)", severity: "High" },
            { start: "0:46:25", end: "0:47:22", type: "Nudity (Women)", severity: "High" },
            { start: "0:49:12", end: "0:49:18", type: "Sex", severity: "Moderate" },
            { start: "0:49:19", end: "0:50:03", type: "Nudity (Woman)", severity: "Moderate" },
            { start: "0:51:01", end: "0:51:37", type: "Sex", severity: "Moderate" },
            { start: "1:26:25", end: "1:26:41", type: "Sex & Nudity", severity: "High" },
            { start: "1:27:11", end: "1:27:14", type: "Suggestive clothing (Bikini)", severity: "Mild" },
            { start: "1:28:30", end: "1:28:36", type: "Nudity (Men)", severity: "High" }
        ] 
    },
    // 8. Bridesmaids
    55721: { 
        scenes: [
            { start: "0:00:58", end: "0:01:41", type: "Sex", severity: "Moderate" },
            { start: "0:01:46", end: "0:03:51", type: "Suggestive clothing (Undergarments)", severity: "Mild" },
            { start: "0:53:45", end: "0:54:29", type: "Suggestive clothing (Undergarments)", severity: "Mild" },
            { start: "0:54:30", end: "0:54:50", type: "Sexual content", severity: "Moderate" }
        ] 
    },
    // 9. There's Something About Mary
    544: { 
        scenes: [
            { start: "0:14:17", end: "0:14:27", type: "Suggestive clothing (Undergarments)", severity: "Moderate" },
            { start: "0:38:08", end: "0:38:36", type: "Suggestive clothing (Undergarments) & Nudity", severity: "High" },
            { start: "1:02:53", end: "1:03:16", type: "Sexual content", severity: "Moderate" },
            { start: "1:05:55", end: "1:06:05", type: "Sexual content", severity: "High" }
        ] 
    },
    // 10. Harold & Kumar Go to White Castle
    11282: { 
        scenes: [
            { start: "0:08:25", end: "0:08:57", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "0:26:05", end: "0:26:15", type: "Nudity (Women)", severity: "High" },
            { start: "0:45:00", end: "0:45:23", type: "Nudity (Woman)", severity: "High" },
            { start: "1:05:00", end: "1:05:20", type: "Nudity (Woman)", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    2105: "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzMjE@._V1_SX500.jpg",
    8363: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzcxOTE1MQ@@._V1_SX500.jpg",
    18785: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI1NmFjZWVhMGE3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX500.jpg",
    6957: "https://m.media-amazon.com/images/M/MV5BMTczMTg5OTQ5OV5BMl5BanBnXkFtZTcwMjE0ODA2MQ@@._V1_SX500.jpg",
    9522: "https://m.media-amazon.com/images/M/MV5BZmJkNzViYjYtZWZlNy00OGE4LWI2MzUtYTcwNjY3Y2MyODIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX500.jpg",
    9285: "https://m.media-amazon.com/images/M/MV5BMTk1NjIwMjU1MV5BMl5BanBnXkFtZTcwMDQ4NTkyMQ@@._V1_SX500.jpg",
    9352: "https://m.media-amazon.com/images/M/MV5BMTkxNDg5NzA4Nl5BMl5BanBnXkFtZTcwMDk4ODMzMQ@@._V1_SX500.jpg",
    55721: "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwNDg4MTA0NA@@._V1_SX500.jpg",
    544: "https://m.media-amazon.com/images/M/MV5BMTU2MzM0ODAzMl5BMl5BanBnXkFtZTgwNTUwODk0MTI@._V1_SX500.jpg",
    11282: "https://m.media-amazon.com/images/M/MV5BMjA5NTg5MzYxMl5BMl5BanBnXkFtZTgwNDkwOTUzMTE@._V1_SX500.jpg"
};

// ✅ Helper function for Raunchy Comedy metrics
const createRaunchyData = (data) => ({
    raunchinessScore: 85, // Custom metric replacing mind-bending/deception
    laughterIndex: 90,
    cringeFactor: 80,       
    complexityLevel: "R-RATED",
    dominantColor: "#db2777", // Vibrant Pink Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. American Pie
    2105: createRaunchyData({ 
        raunchinessScore: 95, laughterIndex: 92, cringeFactor: 88, complexityLevel: "HARD R", 
        dominantColor: "#be185d", rating: 7.0, criticsScore: 61, audienceScore: 61, director: "Paul Weitz", 
        cast: ["Jason Biggs", "Eugene Levy", "Alyson Hannigan"], boxOffice: "$235.5 million", budget: "$11 million", 
        dna: { "Comedy": 70, "Romance": 20, "Teen": 10 },
        scenes: [
            { time: 10, intensity: 50, label: "The Pact" }, 
            { time: 32, intensity: 98, label: "The Apple Pie" }, // PRIMARY PEAK
            { time: 48, intensity: 85, label: "The Webcam Stream" }, 
            { time: 70, intensity: 75, label: "Band Camp Revelation" }, 
            { time: 85, intensity: 90, label: "The Prom Afterparty" } 
        ],
        synopsis: "Four teenage boys enter a pact to lose their virginity by prom night. This is the foundational text of the modern teen sex comedy, mixing genuinely sweet coming-of-age moments with legendary gross-out gags that defined a generation.",
        themes: ["Coming of Age", "Teen Awkwardness", "Sexual Awakening"]
    }),

    // 2. Superbad
    8363: createRaunchyData({ 
        raunchinessScore: 88, laughterIndex: 98, cringeFactor: 75, complexityLevel: "HARD R", 
        dominantColor: "#0ea5e9", rating: 7.6, criticsScore: 88, audienceScore: 87, director: "Greg Mottola", 
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"], boxOffice: "$170.8 million", budget: "$20 million", 
        dna: { "Comedy": 80, "Teen": 15, "Bromance": 5 },
        scenes: [
            { time: 15, intensity: 60, label: "The Fake ID" }, 
            { time: 40, intensity: 85, label: "The Liquor Store Robbery" }, 
            { time: 70, intensity: 92, label: "The Cop Car Joyride" }, 
            { time: 85, intensity: 98, label: "The Period Blood Incident" }, // PRIMARY PEAK
            { time: 105, intensity: 50, label: "Sleeping Bags" } 
        ],
        synopsis: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes hilariously awry. Driven by rapid-fire, insanely vulgar dialogue that perfectly captures how teenagers actually talk.",
        themes: ["Bromance", "Separation Anxiety", "Underage Drinking"]
    }),

    // 3. The Hangover
    18785: createRaunchyData({ 
        raunchinessScore: 92, laughterIndex: 96, cringeFactor: 80, complexityLevel: "HARD R", 
        dominantColor: "#d97706", rating: 7.7, criticsScore: 79, audienceScore: 84, director: "Todd Phillips", 
        cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"], boxOffice: "$469.3 million", budget: "$35 million", 
        dna: { "Comedy": 60, "Mystery": 30, "Action": 10 },
        scenes: [
            { time: 25, intensity: 65, label: "Waking Up to Chaos" }, 
            { time: 42, intensity: 95, label: "Mr. Chow in the Trunk" }, 
            { time: 60, intensity: 85, label: "Mike Tyson's Tiger" }, 
            { time: 85, intensity: 90, label: "The Taser Demo" }, 
            { time: 98, intensity: 100, label: "The Lost Photos" } // PRIMARY PEAK
        ],
        synopsis: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. A brilliantly structured comedy that plays out like a high-stakes detective mystery masked by absurd, R-rated debauchery.",
        themes: ["Lost Memories", "Vegas Excess", "Brotherhood"]
    }),

    // 4. The 40-Year-Old Virgin
    6957: createRaunchyData({ 
        raunchinessScore: 85, laughterIndex: 94, cringeFactor: 85, complexityLevel: "R-RATED", 
        dominantColor: "#eab308", rating: 7.1, criticsScore: 85, audienceScore: 83, director: "Judd Apatow", 
        cast: ["Steve Carell", "Catherine Keener", "Paul Rudd"], boxOffice: "$177.4 million", budget: "$26 million", 
        dna: { "Comedy": 70, "Romance": 30 },
        scenes: [
            { time: 15, intensity: 45, label: "The Secret is Out" }, 
            { time: 35, intensity: 70, label: "Speed Dating" }, 
            { time: 55, intensity: 98, label: "The Chest Waxing" }, // PRIMARY PEAK
            { time: 80, intensity: 85, label: "The Drunk Drive" }, 
            { time: 110, intensity: 90, label: "The Age of Aquarius" } 
        ],
        synopsis: "Goaded by his buddies, a nerdy guy who's never 'done the deed' only finds the pressure mounting when he meets a single mother. This film kicked off the Judd Apatow era, proving that extreme raunchiness could coexist with genuine, heartfelt emotion.",
        themes: ["Late Bloomers", "Toxic Masculinity", "True Love"]
    }),

    // 5. Wedding Crashers
    9522: createRaunchyData({ 
        raunchinessScore: 80, laughterIndex: 90, cringeFactor: 70, complexityLevel: "R-RATED", 
        dominantColor: "#0891b2", rating: 7.0, criticsScore: 75, audienceScore: 70, director: "David Dobkin", 
        cast: ["Owen Wilson", "Vince Vaughn", "Rachel McAdams"], boxOffice: "$288.5 million", budget: "$40 million", 
        dna: { "Comedy": 60, "Romance": 40 },
        scenes: [
            { time: 10, intensity: 75, label: "The Crashing Montage" }, 
            { time: 45, intensity: 85, label: "Dinner Table Antics" }, 
            { time: 60, intensity: 95, label: "Tied to the Bed" }, // PRIMARY PEAK
            { time: 85, intensity: 70, label: "The Hunting Trip" }, 
            { time: 105, intensity: 88, label: "Chazz Reinhold" } 
        ],
        synopsis: "John and Jeremy are a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air. Their perfect system collapses when they crash the wedding of the Treasury Secretary's daughter and one of them actually falls in love.",
        themes: ["Commitment Phobia", "Rule Breaking", "Upper Class Satire"]
    }),

    // 6. Road Trip
    9285: createRaunchyData({ 
        raunchinessScore: 90, laughterIndex: 85, cringeFactor: 80, complexityLevel: "HARD R", 
        dominantColor: "#ea580c", rating: 6.5, criticsScore: 57, audienceScore: 66, director: "Todd Phillips", 
        cast: ["Breckin Meyer", "Seann William Scott", "Tom Green"], boxOffice: "$119.8 million", budget: "$16 million", 
        dna: { "Comedy": 70, "Adventure": 30 },
        scenes: [
            { time: 12, intensity: 85, label: "The Accidental Tape" }, 
            { time: 40, intensity: 70, label: "The Bridge Jump" }, 
            { time: 65, intensity: 95, label: "The Sperm Bank" }, // PRIMARY PEAK
            { time: 80, intensity: 88, label: "The Snake Feeding" }, 
            { time: 90, intensity: 75, label: "Intercepting the Mail" } 
        ],
        synopsis: "Four college buddies embark on an 1800-mile road trip to retrieve an illicit tape mistakenly mailed to a lifelong girlfriend. A classic, chaotic journey filled with bizarre encounters, extreme gross-out humor, and ultimate early-2000s frat-boy energy.",
        themes: ["College Chaos", "Road Trips", "Desperate Measures"]
    }),

    // 7. EuroTrip
    9352: createRaunchyData({ 
        raunchinessScore: 96, laughterIndex: 88, cringeFactor: 85, complexityLevel: "EXTREME", 
        dominantColor: "#16a34a", rating: 6.6, criticsScore: 47, audienceScore: 75, director: "Jeff Schaffer", 
        cast: ["Scott Mechlowicz", "Jacob Pitts", "Michelle Trachtenberg"], boxOffice: "$20.8 million", budget: "$25 million", 
        dna: { "Comedy": 70, "Adventure": 30 },
        scenes: [
            { time: 8, intensity: 85, label: "Scotty Doesn't Know" }, 
            { time: 35, intensity: 98, label: "The Nude Beach" }, // PRIMARY PEAK
            { time: 55, intensity: 90, label: "Madame Vandersexxx" }, 
            { time: 70, intensity: 88, label: "The Green Fairy" }, 
            { time: 82, intensity: 75, label: "Vatican Smoke" } 
        ],
        synopsis: "Dumped by his girlfriend, a high school grad decides to embark on an overseas adventure in Europe with his friends to find his beautiful German pen pal. A cult classic that dials up the international stereotypes and raunch to absolute maximum levels.",
        themes: ["Culture Clash", "Backpacking", "Teen Hormones"]
    }),

    // 8. Bridesmaids
    55721: createRaunchyData({ 
        raunchinessScore: 82, laughterIndex: 95, cringeFactor: 88, complexityLevel: "R-RATED", 
        dominantColor: "#c026d3", rating: 6.8, criticsScore: 89, audienceScore: 76, director: "Paul Feig", 
        cast: ["Kristen Wiig", "Maya Rudolph", "Melissa McCarthy"], boxOffice: "$288.4 million", budget: "$32.5 million", 
        dna: { "Comedy": 70, "Romance": 20, "Drama": 10 },
        scenes: [
            { time: 25, intensity: 70, label: "The Engagement Party" }, 
            { time: 45, intensity: 100, label: "The Dress Fitting (Food Poisoning)" }, // PRIMARY PEAK
            { time: 75, intensity: 92, label: "The Airplane Meltdown" }, 
            { time: 95, intensity: 85, label: "The Bridal Shower Fight" }, 
            { time: 115, intensity: 75, label: "The Wilson Phillips Finale" } 
        ],
        synopsis: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef. This film shattered the glass ceiling for female-led comedies, proving women could execute gross-out humor better than the boys.",
        themes: ["Female Friendship", "Jealousy", "Life Crises"]
    }),

    // 9. There's Something About Mary
    544: createRaunchyData({ 
        raunchinessScore: 85, laughterIndex: 93, cringeFactor: 98, complexityLevel: "HARD R", 
        dominantColor: "#dc2626", rating: 7.1, criticsScore: 83, audienceScore: 61, director: "Peter Farrelly, Bobby Farrelly", 
        cast: ["Ben Stiller", "Cameron Diaz", "Matt Dillon"], boxOffice: "$369.9 million", budget: "$23 million", 
        dna: { "Comedy": 70, "Romance": 30 },
        scenes: [
            { time: 18, intensity: 100, label: "The Zipper Incident" }, // PRIMARY PEAK
            { time: 42, intensity: 85, label: "The Hitchhiker" }, 
            { time: 65, intensity: 80, label: "The Dog Revival" }, 
            { time: 72, intensity: 95, label: "The Hair Gel" }, 
            { time: 105, intensity: 75, label: "All The Stalkers Revealed" } 
        ],
        synopsis: "A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster. The Farrelly Brothers crafted a sweet romantic comedy wrapped in some of the most shockingly wince-inducing physical gags in cinema history.",
        themes: ["Obsession", "Stalking as Comedy", "Physical Comedy"]
    }),

    // 10. Harold & Kumar Go to White Castle
    11282: createRaunchyData({ 
        raunchinessScore: 88, laughterIndex: 90, cringeFactor: 75, complexityLevel: "HARD R", 
        dominantColor: "#059669", rating: 7.0, criticsScore: 74, audienceScore: 73, director: "Danny Leiner", 
        cast: ["John Cho", "Kal Penn", "Neil Patrick Harris"], boxOffice: "$23.9 million", budget: "$9 million", 
        dna: { "Comedy": 80, "Adventure": 20 },
        scenes: [
            { time: 15, intensity: 65, label: "The Munchies Strike" }, 
            { time: 38, intensity: 80, label: "The Raccoon Bite" }, 
            { time: 55, intensity: 95, label: "Neil Patrick Harris Steals the Car" }, // PRIMARY PEAK
            { time: 75, intensity: 88, label: "The Cheetah Ride" }, 
            { time: 85, intensity: 70, label: "Finally, Burgers" } 
        ],
        synopsis: "An Asian-American office worker and his Indian-American stoner friend embark on a quest to satisfy their desire for White Castle burgers. It brilliantly subverts racial stereotypes while delivering an absolutely unhinged, surreal, and hilarious midnight adventure.",
        themes: ["Munchies", "Subverting Stereotypes", "Surreal Road Trips"]
    })
};

// 🎬 FAQS FOR THE RAUNCHY COMEDY COLLECTION
export const RAUNCHY_COMEDY_FAQS = {
    'American Pie': [
        { question: "Did Jason Biggs use a stunt double for the pie scene?", answer: "No, Jason Biggs performed the legendary pie scene himself. The script originally called for him to just be 'caught' with the pie, but Biggs and director Paul Weitz agreed that committing to the physical comedy of actually thrusting into it made the joke a cinematic legend." },
        { question: "How did 'MILF' enter the pop culture dictionary?", answer: "American Pie is widely credited with popularizing the acronym 'MILF' (referring to Stifler's mom, played by Jennifer Coolidge). While the term existed in niche internet circles before 1999, John Cho's character repeatedly saying it in the film catapulted it into mainstream global vocabulary." },
        { question: "Why was the film almost given an NC-17 rating?", answer: "The MPAA initially slapped the film with an NC-17 rating, primarily due to the webcam scene and the excessive use of bodily fluids. The directors had to edit several frames of the pie scene and blur parts of Shannon Elizabeth's body to secure the commercial R rating." },
        { question: "Was Eugene Levy's dialogue scripted?", answer: "Eugene Levy (Jim's Dad) improvised heavily. Originally, his character was written to be much more stern and angry. Levy suggested playing the father as well-meaning but agonizingly awkward and overly supportive, which became the emotional heart of the entire franchise." }
    ],
    'Superbad': [
        { question: "Is McLovin a real person?", answer: "The character of Fogell (McLovin) was created by writers Seth Rogen and Evan Goldberg, based loosely on their high school friends. Christopher Mintz-Plasse, who played McLovin, was actually 17 during filming. Because his character's sex scene involved nudity, his real-life mother was required by law to be on set." },
        { question: "Did Seth Rogen and Evan Goldberg really write this in high school?", answer: "Yes! Seth Rogen and Evan Goldberg started writing the script when they were just 13 years old. The main characters, Seth and Evan, are named after them, and the plot is heavily based on their own desperate, awkward attempts to buy alcohol and talk to girls in Vancouver." },
        { question: "How many times is the F-word used?", answer: "The F-word is used 186 times in the film's 113-minute runtime, averaging more than 1.6 times per minute. The pervasive, creative profanity was widely praised by critics for accurately capturing the exact, unfiltered way teenage boys speak to each other." },
        { question: "Was the period blood scene real?", answer: "The infamous dance scene involved a mixture of laundry detergent and food coloring. Jonah Hill's reaction of pure, horrified disgust was largely genuine, as the mixture was incredibly sticky and uncomfortable to wear for multiple takes." }
    ],
    'The Hangover': [
        { question: "Did Ed Helms really pull his tooth out?", answer: "Yes and no. Ed Helms did not pull a healthy tooth for the movie, but he is actually missing that exact incisor in real life! He has had a dental implant since he was a teenager. For the film, his dentist simply removed the implant, leaving his natural gap exposed." },
        { question: "Was the Mike Tyson cameo planned?", answer: "Yes, but Tyson almost didn't show up. He admitted later that he was struggling heavily with drug addiction during that time and only took the role to fund his habit. However, working on the film and bonding with the cast became a turning point that encouraged him to get sober." },
        { question: "Is Mr. Chow completely nude?", answer: "Yes. Ken Jeong improvised the decision to jump out of the trunk completely naked. He told director Todd Phillips that it would be much funnier if he attacked Bradley Cooper in the nude. Jeong had to get his wife's permission before shooting the scene." },
        { question: "Are the photos in the end credits real?", answer: "The photos were heavily staged and shot on a closed set, but director Todd Phillips wanted them to look like authentic, illicit disposable camera photos. They include several shocking images that the MPAA almost forced them to cut." }
    ],
    'The 40-Year-Old Virgin': [
        { question: "Was the chest waxing scene real?", answer: "100% real. Steve Carell volunteered to actually have his chest waxed on camera to capture genuine reactions. He had a massive amount of chest hair, and the actress performing the wax was not a professional esthetician, which is why she accidentally caused him to bleed. His screams of 'Kelly Clarkson!' were pure, improvised agony." },
        { question: "How much of the dialogue was improvised?", answer: "Judd Apatow directed the film with a heavy reliance on improvisation. The famous 'You know how I know you're gay?' scene between Paul Rudd and Seth Rogen was completely unscripted and filmed in a continuous, rapid-fire battle of ad-libs." },
        { question: "Why does Andy ride a bicycle?", answer: "Steve Carell decided that Andy shouldn't drive a car, as riding a bicycle everywhere visually emphasized his arrested development and childlike innocence. It perfectly matched his collection of pristine action figures and video games." },
        { question: "Who came up with the idea for the movie?", answer: "Steve Carell created the character while performing in the Second City comedy troupe years prior. When he pitched the simple concept—'a guy who is 40 and has never had sex'—to Judd Apatow, Apatow immediately knew it was a hit movie." }
    ],
    'Wedding Crashers': [
        { question: "What are the rules of Wedding Crashing?", answer: "The film references a massive 'Rule Book' created by Chazz Reinhold. In real life, the marketing team created a physical rule book containing 105 rules. Rule #76 ('No excuses, play like a champion') and Rule #1 ('Never leave a fellow crasher behind') became legendary pop culture quotes." },
        { question: "Was Will Ferrell's cameo a secret?", answer: "Yes! Will Ferrell's appearance as Chazz Reinhold was kept a strict secret. He was not featured in any trailers, posters, or promotional materials. His sudden arrival in the third act wearing a silk robe and screaming for meatloaf is considered one of the greatest comedic cameos in history." },
        { question: "Did Isla Fisher really attack Vince Vaughn?", answer: "Isla Fisher's character, Gloria, was intensely physical. During the scene where she ties Vince Vaughn to the bed, she played the scene so aggressively that Vaughn was genuinely terrified. Her unhinged, manic performance stole the movie and launched her Hollywood career." },
        { question: "Why was the movie such a massive hit?", answer: "It perfectly bridged the gap between hard-R raunch comedy and genuine romantic comedy. It proved that a movie could have crude humor, bare breasts, and cynical leads, while still delivering a genuinely heartwarming story about commitment." }
    ],
    'Road Trip': [
        { question: "Was the snake scene real?", answer: "Yes, Tom Green actually put a live mouse in his mouth to feed it to a python. Director Todd Phillips (who later directed The Hangover) told Green they didn't have the budget for CGI. Green, known for his extreme MTV stunts, did it practically, though the actual feeding was cleverly edited." },
        { question: "Is Road Trip based on a true story?", answer: "It is loosely inspired by a real event. Director Todd Phillips had a friend at Ithaca College who accidentally mailed an explicit tape to his girlfriend and had to desperately intercept it. Phillips realized the sheer panic of that mistake was the perfect premise for a teen comedy." },
        { question: "Who is the narrator?", answer: "Tom Green narrates the film as Barry, but his narration is entirely unreliable. He constantly lies to the campus tour group, changes details, and admits to making things up to make the story sound cooler, adding an extra layer of chaotic humor." },
        { question: "How did it influence the comedy genre?", answer: "Released just one year after American Pie, Road Trip solidified the 'R-Rated Teen Sex Journey' subgenre. It proved that audiences wanted fast-paced, gross-out road movies, paving the way for EuroTrip and Harold & Kumar." }
    ],
    'EuroTrip': [
        { question: "Who sings 'Scotty Doesn't Know'?", answer: "The iconic punk-rock song is performed by the band Lustra. However, the lead singer shown in the movie is surprisingly played by a heavily tattooed, bald Matt Damon! Damon was college roommates with the directors and agreed to do the ridiculous cameo as a favor." },
        { question: "Did they actually film in Europe?", answer: "Very little of it! Despite traveling to London, Paris, Amsterdam, Bratislava, and Rome in the film, the vast majority of the movie was actually shot in Prague, Czech Republic, using different streets and clever set dressing to fake the other European cities." },
        { question: "Who is Madame Vandersexxx?", answer: "Played by Lucy Lawless (famous for Xena: Warrior Princess), Madame Vandersexxx is the terrifying dominatrix in the Amsterdam secret club. Lawless took the cameo because she wanted to break her serious action-hero typecasting by doing something completely unhinged." },
        { question: "Why is the Bratislava scene so famous?", answer: "The joke involves the characters realizing their meager American pocket change makes them billionaires in Eastern Europe. They tip a waiter a nickel, which allows him to open his own hotel. It’s a hilarious, hyper-exaggerated satire of American economic privilege abroad." }
    ],
    'Bridesmaids': [
        { question: "Was the food poisoning scene in the original script?", answer: "No! The original script by Kristen Wiig and Annie Mumolo had the women simply trying on dresses and arguing. Producer Judd Apatow insisted the movie needed a massive physical comedy set-piece. Wiig famously hated the idea of 'bathroom humor' but eventually relented, resulting in the movie's most iconic, explosive scene." },
        { question: "Did Melissa McCarthy improvise her lines?", answer: "Melissa McCarthy improvised heavily throughout the film. Her bizarre stories about falling off cruise ships, her aggressive flirtation with the Air Marshal, and the famous 'I took nine puppies' line were generated on the spot. Her performance earned her a rare Oscar nomination for a pure comedy role." },
        { question: "Why is this film historically important for Hollywood?", answer: "Before Bridesmaids, Hollywood executives operated on a sexist assumption that 'women can't open a raunchy, R-rated comedy.' The film grossed nearly $300 million worldwide, completely shattering that myth and opening the door for films like Girls Trip, Trainwreck, and Joy Ride." },
        { question: "Is the airplane scene realistic?", answer: "Kristen Wiig's character mixes alcohol with a sedative to cope with flight anxiety, leading to her hallucinating a colonial woman on the wing. It perfectly captures the chaotic, embarrassing reality of travel anxiety, elevated to hilarious cinematic extremes." }
    ],
    'There\'s Something About Mary': [
        { question: "What was the 'Hair Gel' actually made of?", answer: "The infamous 'hair gel' hanging from Ben Stiller's ear was simply a non-toxic, water-based prop gel. Cameron Diaz was initially very reluctant to do the scene, fearing it would ruin her career and be too disgusting. After seeing the test audience laugh hysterically, she embraced it." },
        { question: "Is the zipper scene medically accurate?", answer: "The horrific 'frank and beans' zipper accident in the bathroom is physically possible and genuinely terrified male audiences in 1998. The directors included the scene based on a real, deeply traumatizing story they heard from a friend at a middle school dance." },
        { question: "Who were the singing musicians?", answer: "Jonathan Richman and Tommy Larkins act as a Greek Chorus throughout the film. They randomly appear in trees, on streets, and in scenes to sing folk songs commenting on the plot, giving the raunchy movie a strangely poetic and surreal atmosphere." },
        { question: "Why did Matt Dillon's character have giant teeth?", answer: "Matt Dillon's character, the sleazy private investigator Pat Healy, gets massive, absurdly white veneers to try and impress Mary. It is a brilliant physical manifestation of how fake, predatory, and desperate all the men in the movie are to possess her." }
    ],
    'Harold & Kumar Go to White Castle': [
        { question: "Did Neil Patrick Harris really act like that?", answer: "Neil Patrick Harris plays a fictionalized, deeply unhinged version of himself who steals cars, does hard drugs, and hires sex workers. It completely destroyed his squeaky-clean 'Doogie Howser' child-star image and ironically relaunched his career as a megastar." },
        { question: "Why did they choose White Castle?", answer: "The writers realized that White Castle burgers inspire a specific, desperate kind of late-night craving (especially when intoxicated). They reached out to Krispy Kreme first, who declined because of the marijuana themes. White Castle embraced the stoner culture and fully supported the film." },
        { question: "How did it subvert racial stereotypes?", answer: "Prior to 2004, Asian-American and Indian-American actors were typically relegated to nerdy sidekicks or punchlines. Harold and Kumar placed them front and center as the cool, flawed, chaotic leads of an R-rated adventure, fighting racist assumptions while searching for fast food." },
        { question: "How much did they smoke on set?", answer: "None! John Cho and Kal Penn smoked a completely fake, herbal 'movie weed' blend. However, they had to eat dozens of real White Castle sliders during the final scene, which both actors admitted made them incredibly sick by the end of the shooting day." }
    ]
};

// 🔥 THE KEYWORD BRIDGE & SCHEMA GENERATOR (Unrestricted Version)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('explicit') || lowerType.includes('hookup')) types.add('sexual content');
        if (lowerType.includes('nudity') || lowerType.includes('bare') || lowerType.includes('genital')) types.add('nudity');
        if (lowerType.includes('drug') || lowerType.includes('marijuana') || lowerType.includes('alcohol') || lowerType.includes('pill')) types.add('drug and alcohol use');
        if (lowerType.includes('gore') || lowerType.includes('blood') || lowerType.includes('violence')) types.add('mild gore and violence');
        if (lowerType.includes('language') || lowerType.includes('profanity')) types.add('pervasive strong language');
    });
    return Array.from(types);
};

export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} (${currentMovieYear}) - A classic raunchy comedy pushing the limits of R-rated humor.`,
        'genre': movie.genre,
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = RAUNCHY_COMEDY_FAQS[movie.Title] ? [...RAUNCHY_COMEDY_FAQS[movie.Title]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const intensityScenes = movieInfo?.scenes || [];
    
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    if (intensityScenes.length > 0) {
        const schemaIntensityList = intensityScenes.map(s => `<li>Minute ${s.time} - ${s.label} (Laughter/Cringe Intensity: ${s.intensity}/100)</li>`).join('');
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `What are the most iconic or chaotic scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Comedy metric, ${movie.Title} peaks in absurdity at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('blood') || t.includes('drug') || t.includes('language') || t.includes('humor'); 
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature comedy content'];
        const typesString = typesArray.join(', ');

        // ✅ NO LIMITS - MAP EVERYTHING FOR MAX SEO ON RAUNCHY MOVIES
        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Parents Guide: Why is ${movie.Title} rated R? Does it contain nudity or sexual content?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `Yes, ${movie.Title} is a hard-R comedy. According to the Filmiway Content Advisory, it contains highly explicit scenes including ${typesString}. These timestamps are accurate for the ${currentRuntime} theatrical runtime. Exact timestamps for parents to skip or mute include:<br><br><ul>${schemaListText}</ul>` 
            }
        });
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'name': `Parents Guide and FAQ for ${movie.Title}`,
        'mainEntity': schemaFaqs
    };

    return { movieSchema, faqSchema };
};

// 🔥 FRONTEND UI SYNC (Unrestricted UI view)
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = RAUNCHY_COMEDY_FAQS[movieTitle] ? [...RAUNCHY_COMEDY_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Chaos Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most iconic and chaotic scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Comedy metric, ${movieTitle} reaches peak absurdity at the following moments:\n\n${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('blood') || t.includes('drug') || t.includes('language') || t.includes('humor');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature comedy content'];
        const typesString = typesArray.join(', ');

        // ✅ NO LIMITS ON THE UI EITHER
        const uiListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `• ${timeRange} - ${fullType}`;
        }).join('\n');

        staticFaqs.unshift({
            question: `Parents Guide: Why is ${movieTitle} rated R? What exact scenes contain nudity or sexual content?`,
            answer: `Yes, ${movieTitle} is a hard-R comedy. According to the Filmiway Content Advisory, it contains highly explicit scenes including ${typesString}. These timestamps are accurate for the ${finalRuntime} theatrical runtime. Exact timestamps to skip include:\n\n${uiListText}`
        });
    }

    return staticFaqs;
};

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
            description: scene.description || '',
            severity: scene.severity || 'Moderate'
        }))
    };
};