// utils/raunchyComedyMovieData.js - RAUNCHY COMEDY COLLECTION DATA ✅
// Movies exploring the absolute limits of R-rated humor, teen chaos, and iconic gross-out gags.

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
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
        dna: { "Comedy": 70, "Romance": 20, "Drama": 10 }, 
        scenes: [
            { time: 10, intensity: 25, label: "The Pact" }, // Just guys talking in a diner. Low tension.
            { time: 32, intensity: 82, label: "The Apple Pie" }, // Huge physical cringe, dad walks in.
            { time: 48, intensity: 88, label: "The Webcam Stream" }, // PRIMARY PEAK: Absolute social devastation. The whole school sees.
            { time: 70, intensity: 75, label: "Band Camp Revelation" }, // Shocking twist, high comedic impact.
            { time: 85, intensity: 45, label: "The Prom Afterparty" } // Sweet, awkward resolution. Tension is gone.
        ],
        synopsis: "Four teenage boys enter a pact to lose their virginity by prom night. This is the foundational text of the modern teen sex comedy, mixing sweet coming-of-age moments with legendary gross-out gags.",
        themes: ["Coming of Age", "Teen Awkwardness", "Sexual Awakening"]
    }),

    // 2. Superbad
    8363: createRaunchyData({ 
        raunchinessScore: 88, laughterIndex: 98, cringeFactor: 75, complexityLevel: "HARD R", 
        dominantColor: "#0ea5e9", rating: 7.6, criticsScore: 88, audienceScore: 87, director: "Greg Mottola", 
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"], boxOffice: "$170.8 million", budget: "$20 million", 
        dna: { "Comedy": 75, "Crime": 15, "Drama": 10 },
        scenes: [
            { time: 15, intensity: 40, label: "The Fake ID" }, // Mild anxiety over McLovin.
            { time: 40, intensity: 78, label: "The Liquor Store Robbery" }, // Fogell gets punched. Real danger spikes.
            { time: 70, intensity: 85, label: "The Cop Car Joyride" }, // Shooting stop signs. Insane escalation.
            { time: 85, intensity: 90, label: "The Period Blood Incident" }, // PRIMARY PEAK: Social and physical chaos at the party. Fight breaks out.
            { time: 105, intensity: 35, label: "Sleeping Bags" } // Pure emotional vulnerability. Zero tension.
        ],
        synopsis: "Two co-dependent high school seniors deal with separation anxiety after their plan to stage a booze-soaked party goes awry. Driven by insanely vulgar dialogue that perfectly captures how teenagers actually talk.",
        themes: ["Bromance", "Separation Anxiety", "Underage Drinking"]
    }),

    // 3. The Hangover
    18785: createRaunchyData({ 
        raunchinessScore: 92, laughterIndex: 96, cringeFactor: 80, complexityLevel: "HARD R", 
        dominantColor: "#d97706", rating: 7.7, criticsScore: 79, audienceScore: 84, director: "Todd Phillips", 
        cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"], boxOffice: "$469.3 million", budget: "$35 million", 
        dna: { "Comedy": 50, "Mystery": 35, "Crime": 15 },
        scenes: [
            { time: 25, intensity: 65, label: "Waking Up to Chaos" }, // High disorientation. Tiger in bathroom.
            { time: 42, intensity: 85, label: "Mr. Chow in the Trunk" }, // Violent shock, crowbar attack.
            { time: 60, intensity: 88, label: "Mike Tyson's Tiger" }, // Singing in the air, then a knockout punch.
            { time: 85, intensity: 92, label: "The Roof Discovery" }, // PRIMARY PEAK: The mystery solves itself. Huge emotional relief + ticking clock.
            { time: 98, intensity: 60, label: "The Lost Photos" } // Pure laughter, no stakes.
        ],
        synopsis: "Three buddies wake up from a bachelor party in Vegas with no memory of the night and the bachelor missing. A brilliantly structured comedy that plays out like a high-stakes detective mystery masked by R-rated debauchery.",
        themes: ["Lost Memories", "Vegas Excess", "Brotherhood"]
    }),

    // 4. The 40-Year-Old Virgin
    6957: createRaunchyData({ 
        raunchinessScore: 85, laughterIndex: 94, cringeFactor: 85, complexityLevel: "R-RATED", 
        dominantColor: "#eab308", rating: 7.1, criticsScore: 85, audienceScore: 83, director: "Judd Apatow", 
        cast: ["Steve Carell", "Catherine Keener", "Paul Rudd"], boxOffice: "$177.4 million", budget: "$26 million", 
        dna: { "Comedy": 60, "Romance": 30, "Drama": 10 }, 
        scenes: [
            { time: 15, intensity: 60, label: "The Secret is Out" }, // Poker game. Pure social embarrassment.
            { time: 35, intensity: 55, label: "Speed Dating" }, // Awkward, but low stakes.
            { time: 55, intensity: 88, label: "The Chest Waxing" }, // Physical agony. Real blood.
            { time: 80, intensity: 75, label: "The Drunk Drive" }, // Crashing the bike into a billboard.
            { time: 110, intensity: 40, label: "The Age of Aquarius" } // Completely joyful musical release.
        ],
        synopsis: "A nerdy guy who's never 'done the deed' finds the pressure mounting when he meets a single mother. This film kicked off the Apatow era, proving extreme raunchiness could coexist with genuine emotion.",
        themes: ["Late Bloomers", "Toxic Masculinity", "True Love"]
    }),

    // 5. Wedding Crashers
    9522: createRaunchyData({ 
        raunchinessScore: 80, laughterIndex: 90, cringeFactor: 70, complexityLevel: "R-RATED", 
        dominantColor: "#0891b2", rating: 7.0, criticsScore: 75, audienceScore: 70, director: "David Dobkin", 
        cast: ["Owen Wilson", "Vince Vaughn", "Rachel McAdams"], boxOffice: "$288.5 million", budget: "$40 million", 
        dna: { "Comedy": 55, "Romance": 35, "Drama": 10 }, 
        scenes: [
            { time: 10, intensity: 50, label: "The Crashing Montage" }, // Breezy, fun, low tension.
            { time: 45, intensity: 78, label: "Dinner Table Antics" }, // Under-the-table handjob. High risk of getting caught.
            { time: 60, intensity: 85, label: "Tied to the Bed" }, // Isla Fisher goes psycho. Hilarious terror.
            { time: 85, intensity: 82, label: "The Hunting Trip" }, // Getting shot in the ass.
            { time: 105, intensity: 90, label: "The Wedding Interruption" } // PRIMARY PEAK: Public declaration, getting beaten up by Bradley Cooper.
        ],
        synopsis: "Two committed womanizers sneak into weddings to take advantage of the romantic tinge in the air. Their system collapses when they crash a high-society wedding and one falls in love.",
        themes: ["Commitment Phobia", "Rule Breaking", "Upper Class Satire"]
    }),

    // 6. Road Trip
    9285: createRaunchyData({ 
        raunchinessScore: 90, laughterIndex: 85, cringeFactor: 80, complexityLevel: "HARD R", 
        dominantColor: "#ea580c", rating: 6.5, criticsScore: 57, audienceScore: 66, director: "Todd Phillips", 
        cast: ["Breckin Meyer", "Seann William Scott", "Tom Green"], boxOffice: "$119.8 million", budget: "$16 million", 
        dna: { "Comedy": 65, "Adventure": 25, "Romance": 10 },
        scenes: [
            { time: 12, intensity: 65, label: "The Accidental Tape" }, // The inciting incident panic.
            { time: 40, intensity: 80, label: "The Bridge Jump" }, // The car is destroyed. Massive plot setback.
            { time: 65, intensity: 86, label: "The Sperm Bank" }, // PRIMARY PEAK: Pure gross-out climax.
            { time: 80, intensity: 72, label: "The Snake Feeding" }, // Tense, dark comedy moment with the mouse.
            { time: 90, intensity: 55, label: "Intercepting the Mail" } // The objective is complete.
        ],
        synopsis: "Four college buddies embark on an 1800-mile road trip to retrieve an illicit tape mistakenly mailed to a lifelong girlfriend. A classic, chaotic journey filled with extreme gross-out humor.",
        themes: ["College Chaos", "Road Trips", "Desperate Measures"]
    }),

    // 7. EuroTrip
    9352: createRaunchyData({ 
        raunchinessScore: 96, laughterIndex: 88, cringeFactor: 85, complexityLevel: "EXTREME", 
        dominantColor: "#16a34a", rating: 6.6, criticsScore: 47, audienceScore: 75, director: "Jeff Schaffer", 
        cast: ["Scott Mechlowicz", "Jacob Pitts", "Michelle Trachtenberg"], boxOffice: "$20.8 million", budget: "$25 million", 
        dna: { "Comedy": 65, "Adventure": 25, "Romance": 10 },
        scenes: [
            { time: 8, intensity: 70, label: "Scotty Doesn't Know" }, // Public humiliation at graduation.
            { time: 35, intensity: 75, label: "The Nude Beach" }, // Shock and cringe.
            { time: 55, intensity: 90, label: "Madame Vandersexxx" }, // Ultimate physical/social terror in the dungeon.
            { time: 70, intensity: 80, label: "The Green Fairy" }, // Absurd hallucination sequence.
            { time: 82, intensity: 92, label: "Vatican Smoke" } // PRIMARY PEAK: Accidentally setting the Pope on fire. Massive narrative chaos.
        ],
        synopsis: "Dumped by his girlfriend, a high school grad embarks on an overseas adventure to find his German pen pal. A cult classic that dials up international stereotypes and raunch to maximum levels.",
        themes: ["Culture Clash", "Backpacking", "Teen Hormones"]
    }),

    // 8. Bridesmaids
    55721: createRaunchyData({ 
        raunchinessScore: 82, laughterIndex: 95, cringeFactor: 88, complexityLevel: "R-RATED", 
        dominantColor: "#c026d3", rating: 6.8, criticsScore: 89, audienceScore: 76, director: "Paul Feig", 
        cast: ["Kristen Wiig", "Maya Rudolph", "Melissa McCarthy"], boxOffice: "$288.4 million", budget: "$32.5 million", 
        dna: { "Comedy": 65, "Drama": 25, "Romance": 10 }, 
        scenes: [
            { time: 25, intensity: 72, label: "The Engagement Party" }, // Passive-aggressive toast battle.
            { time: 45, intensity: 92, label: "The Dress Fitting" }, // Food poisoning. Insane physical humiliation.
            { time: 75, intensity: 88, label: "The Airplane Meltdown" }, // Kicked off the plane. Total social destruction.
            { time: 95, intensity: 94, label: "The Bridal Shower Fight" }, // PRIMARY PEAK: Destroying the cookie. Real emotional implosion and friendship breakup.
            { time: 115, intensity: 45, label: "The Wilson Phillips Finale" } // Joyful, healing resolution.
        ],
        synopsis: "Competition between the maid of honor and a bridesmaid threatens to upend the life of a pastry chef. This film shattered the glass ceiling, proving women could execute gross-out humor better than the boys.",
        themes: ["Female Friendship", "Jealousy", "Life Crises"]
    }),

    // 9. There's Something About Mary
    544: createRaunchyData({ 
        raunchinessScore: 85, laughterIndex: 93, cringeFactor: 98, complexityLevel: "HARD R", 
        dominantColor: "#dc2626", rating: 7.1, criticsScore: 83, audienceScore: 61, director: "Peter Farrelly, Bobby Farrelly", 
        cast: ["Ben Stiller", "Cameron Diaz", "Matt Dillon"], boxOffice: "$369.9 million", budget: "$23 million", 
        dna: { "Comedy": 60, "Romance": 25, "Psychological": 15 }, 
        scenes: [
            { time: 18, intensity: 90, label: "The Zipper Incident" }, // Excruciating physical cringe. Set the bar for the movie early.
            { time: 42, intensity: 75, label: "The Hitchhiker" }, // 7-minute abs. Absurd danger.
            { time: 65, intensity: 85, label: "The Dog Revival" }, // Puffy catches fire and gets shocked.
            { time: 72, intensity: 88, label: "The Hair Gel" }, // Extreme social cringe (mostly for the audience watching her).
            { time: 105, intensity: 92, label: "All The Stalkers Revealed" } // PRIMARY PEAK: The narrative climax where everyone confronts Mary at once.
        ],
        synopsis: "A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster. A sweet rom-com wrapped in shockingly wince-inducing physical gags.",
        themes: ["Obsession", "Stalking as Comedy", "Physical Comedy"]
    }),

    // 10. Harold & Kumar Go to White Castle
    11282: createRaunchyData({ 
        raunchinessScore: 88, laughterIndex: 90, cringeFactor: 75, complexityLevel: "HARD R", 
        dominantColor: "#059669", rating: 7.0, criticsScore: 74, audienceScore: 73, director: "Danny Leiner", 
        cast: ["John Cho", "Kal Penn", "Neil Patrick Harris"], boxOffice: "$23.9 million", budget: "$9 million", 
        dna: { "Comedy": 65, "Adventure": 25, "Crime": 10 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Munchies Strike" }, // Just the desire phase. Very low stakes.
            { time: 38, intensity: 65, label: "The Raccoon Bite" }, // Medical panic and physical comedy.
            { time: 55, intensity: 82, label: "Neil Patrick Harris Steals the Car" }, // Complete loss of control and hope.
            { time: 75, intensity: 86, label: "The Cheetah Ride" }, // PRIMARY PEAK: The most surreal, high-adrenaline moment of the night.
            { time: 85, intensity: 40, label: "Finally, Burgers" } // Pure satisfaction and catharsis.
        ],
        synopsis: "Two stoner friends embark on a quest to satisfy their desire for White Castle burgers. It brilliantly subverts racial stereotypes while delivering an unhinged, surreal midnight adventure.",
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
        if (lowerType.includes('sex') || lowerType.includes('explicit')) types.add('sexual content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

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
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = RAUNCHY_COMEDY_FAQS[movie.Title] ? [...RAUNCHY_COMEDY_FAQS[movie.Title]] : [];
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
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
                }
            }
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
                    'text': `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${currentRuntime} runtime.` 
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
    const staticFaqs = RAUNCHY_COMEDY_FAQS[movieTitle] ? [...RAUNCHY_COMEDY_FAQS[movieTitle]] : [];
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
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
            }
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${finalRuntime} runtime.`
            }
        );
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