// utils/roadTripMovieData.js - ROAD TRIP COLLECTION DATA ✅
// Movies exploring human texture, emotional transformation, and the vast open road.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 1391, "imdbID": "tt0245574", "Title": "Y Tu Mamá También", "year": 2001, "genre": "Drama", "runtime": 106, "rank": 1 },
    { "tmdbId": 1541, "imdbID": "tt0103074", "Title": "Thelma & Louise", "year": 1991, "genre": "Crime", "runtime": 130, "rank": 2 },
    { "tmdbId": 380, "imdbID": "tt0095953", "Title": "Rain Man", "year": 1988, "genre": "Drama", "runtime": 133, "rank": 3 },
    { "tmdbId": 5915, "imdbID": "tt0758758", "Title": "Into the Wild", "year": 2007, "genre": "Adventure", "runtime": 148, "rank": 4 },
    { "tmdbId": 404, "imdbID": "tt0166896", "Title": "The Straight Story", "year": 1999, "genre": "Drama", "runtime": 112, "rank": 5 },
    { "tmdbId": 773, "imdbID": "tt0449059", "Title": "Little Miss Sunshine", "year": 2006, "genre": "Comedy", "runtime": 101, "rank": 6 },
    { "tmdbId": 1653, "imdbID": "tt0318462", "Title": "The Motorcycle Diaries", "year": 2004, "genre": "Adventure", "runtime": 126, "rank": 7 },
    { "tmdbId":  9675, "imdbID": "tt0375063", "Title": "Sideways", "year": 2004, "genre": "Comedy", "runtime": 127, "rank": 8 },
    { "tmdbId": 624, "imdbID": "tt0064276", "Title": "Easy Rider", "year": 1969, "genre": "Drama", "runtime": 95, "rank": 9 },
    { "tmdbId": 11153, "imdbID": "tt0085995", "Title": "National Lampoon's Vacation", "year": 1983, "genre": "Comedy", "runtime": 98, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    1391: "Life is like the surf, so give yourself away like the sea.",
    1541: "I don't ever wanna come down from here.",
    380: "I'm an excellent driver.",
    5915: "Happiness is only real when shared.",
    404: "There's no one knows your life better than a brother that's near your age.",
    773: "A real loser is somebody that's so afraid of not winning, they don't even try.",
    1653: "Let the world change you and you can change the world.",
      9675: "I am not drinking any fucking Merlot!",
    624: "They're not scared of you. They're scared of what you represent to 'em.",
    11153: "This is no longer a vacation. It's a quest. It's a quest for fun."
};

// ✅ SENSITIVE TIMELINES (Crucial for High-Volume Timestamps Search)
export const SENSITIVE_TIMELINES = {
    // 1. Y Tu Mamá También
    1391: { 
        scenes: [
            { start: "0:00:47", end: "0:02:50", type: "Sex & Nudity", severity: "High" },
            { start: "0:03:44", end: "0:04:31", type: "Sex & Nudity", severity: "High" },
            { start: "0:10:47", end: "0:10:52", type: "Sex", severity: "Moderate" },
            { start: "0:12:18", end: "0:12:44", type: "Nudity (Man)", severity: "High" },
            { start: "0:21:10", end: "0:21:55", type: "Sexual Content", severity: "High" },
            { start: "0:53:28", end: "0:54:30", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "0:54:31", end: "0:56:14", type: "Sex", severity: "High" },
            { start: "0:57:27", end: "0:58:50", type: "Nudity (Man)", severity: "High" },
            { start: "1:05:40", end: "1:06:31", type: "Sex & Nudity", severity: "High" },
            { start: "1:16:35", end: "1:16:42", type: "Nudity (Woman)", severity: "High" },
            { start: "1:32:40", end: "1:34:16", type: "Sex & Nudity", severity: "High" },
            { start: "1:34:48", end: "1:34:57", type: "Nudity (Man)", severity: "Moderate" },
            { start: "1:36:40", end: "1:37:04", type: "Suggestive Clothing (Bikini)", severity: "Mild" }
        ] 
    },
    // 2. Thelma & Louise
    1541: { 
        scenes: [
            { start: "0:19:40", end: "0:20:33", type: "Sexual Content", severity: "High" },
            { start: "1:02:27", end: "1:03:18", type: "Sexual Content", severity: "Moderate" },
            { start: "1:17:45", end: "1:18:03", type: "Sexual Gesture", severity: "Moderate" },
            { start: "1:33:33", end: "1:33:37", type: "Sexual Gesture", severity: "Moderate" }
        ] 
    },
    // 3. Rain Man
    380: { 
        scenes: [
            { start: "0:33:16", end: "0:34:00", type: "Sexual Content (Moaning)", severity: "Moderate" },
            { start: "0:36:13", end: "0:36:30", type: "Nudity (Woman)", severity: "Moderate" }
        ] 
    },
    // 4. Into the Wild
    5915: { 
        scenes: [
            { start: "0:58:52", end: "1:02:30", type: "Nudity (Woman)", severity: "High" },
            { start: "1:13:02", end: "1:13:07", type: "Nudity (Man)", severity: "High" },
            { start: "1:39:31", end: "1:39:35", type: "Sex (Implied)", severity: "Mild" },
            { start: "1:52:38", end: "1:52:58", type: "Nudity", severity: "High" }
        ] 
    },
    // 5. The Straight Story
    404: { scenes: [] }, // Clean Masterpiece
    
    // 6. Little Miss Sunshine
    773: { 
        scenes: [
            { start: "1:04:04", end: "1:04:40", type: "Nudity & Suggestive Clothing (Lingerie in Magazine)", severity: "High" }
        ] 
    },
    // 7. The Motorcycle Diaries
    1653: { scenes: [] }, 
    
    // 8. Sideways
    9675: { 
        scenes: [
            { start: "1:08:11", end: "1:08:16", type: "Partial Nudity (Man) & Sex", severity: "Moderate" },
            { start: "1:42:31", end: "1:42:37", type: "Nudity (Man)", severity: "Mild" },
            { start: "1:48:13", end: "1:49:26", type: "Nudity (Man & Woman) & Sex", severity: "High" }
        ] 
    },
    // 9. Easy Rider
    624: { 
        scenes: [
            { start: "1:15:30", end: "1:16:22", type: "Nudity (Paintings)", severity: "Moderate" },
            { start: "1:25:16", end: "1:27:45", type: "Sex & Nudity", severity: "High" }
        ] 
    },
    // 10. National Lampoon's Vacation
    11153: { 
        scenes: [
            { start: "0:19:30", end: "0:19:50", type: "Nudity (Woman)", severity: "Moderate" },
            { start: "1:13:38", end: "1:13:50", type: "Suggestive Clothing (Undergarments)", severity: "Moderate" },
            { start: "1:19:52", end: "1:19:57", type: "Nudity (Woman)", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    1391: "https://m.media-amazon.com/images/M/MV5BMjMwODI5MjE2Nl5BMl5BanBnXkFtZTcwNDk2MzIzMQ@@._V1_SX500.jpg",
    1541: "https://m.media-amazon.com/images/M/MV5BMTQ4NTQ5Mjk5M15BMl5BanBnXkFtZTcwNTczMDkxMQ@@._V1_SX500.jpg",
    380: "https://m.media-amazon.com/images/M/MV5BMzVjNzI4MGEtYjcxNC00ZTE0LWE0MTUtMjU5Njc0Y2MzNmViXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    5915: "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU3MDc3NDQwOTM@._V1_SX500.jpg",
    404: "https://m.media-amazon.com/images/M/MV5BMTM2NDMxNjIzOF5BMl5BanBnXkFtZTYwODIzODI5._V1_SX500.jpg",
    773: "https://m.media-amazon.com/images/M/MV5BMTg0NjE5Mzg3OF5BMl5BanBnXkFtZTcwNDExMTMwOQ@@._V1_SX500.jpg",
    1653: "https://m.media-amazon.com/images/M/MV5BMTk3NTM0Njc5N15BMl5BanBnXkFtZTcwMTgxNjE2MQ@@._V1_SX500.jpg",
      9675: "https://m.media-amazon.com/images/M/MV5BMTM0ODU4Njk0Ml5BMl5BanBnXkFtZTcwMjE0ODA2MQ@@._V1_SX500.jpg",
    624: "https://m.media-amazon.com/images/M/MV5BMTU3OTE0MzI4OF5BMl5BanBnXkFtZTgwNTM0MTkxMTE@._V1_SX500.jpg",
    11153: "https://m.media-amazon.com/images/M/MV5BODNjNWJlZmItNjYyMi00MzJiLTg2MzYtNjg1MDU4ZjEwMWMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg"
};

// ✅ Custom metric for this collection: 'wanderlustScore' and 'emotionalTexture'
const createRoadTripData = (data) => ({
    wanderlustScore: 85, 
    emotionalTexture: 80,
    complexityLevel: "HIGH",
    dominantColor: "#b45309", // Earthy Amber Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Y Tu Mamá También
    1391: createRoadTripData({ 
        wanderlustScore: 98, emotionalTexture: 100, complexityLevel: "MASTERPIECE", 
        dominantColor: "#0369a1", rating: 7.7, criticsScore: 92, audienceScore: 88, director: "Alfonso Cuarón", 
        cast: ["Gael García Bernal", "Diego Luna", "Maribel Verdú"], boxOffice: "$33.6 million", budget: "$2 million", 
        dna: { "Drama": 60, "Romance": 30, "Adventure": 10 },
        scenes: [
            { time: 10, intensity: 45, label: "The Pitch" }, 
            { time: 45, intensity: 75, label: "The Road Unwinds" }, 
            { time: 80, intensity: 88, label: " Boca del Cielo" }, 
            { time: 95, intensity: 100, label: "The Night in the Cabana" }, // PRIMARY PEAK
            { time: 102, intensity: 90, label: "The Epilogue" } 
        ],
        synopsis: "Two teenage boys and an older woman embark on a spontaneous road trip across Mexico. Alfonso Cuarón masterfully intertwines political backdrop, raw sexual awakening, and the inevitable fading of youth into a film dripping with profound human texture.",
        themes: ["Sexual Awakening", "Loss of Innocence", "Political Reality"]
    }),

    // 2. Thelma & Louise
    1541: createRoadTripData({ 
        wanderlustScore: 95, emotionalTexture: 90, complexityLevel: "ICONIC", 
        dominantColor: "#b91c1c", rating: 7.6, criticsScore: 86, audienceScore: 82, director: "Ridley Scott", 
        cast: ["Susan Sarandon", "Geena Davis"], boxOffice: "$45.4 million", budget: "$16.5 million", 
        dna: { "Crime": 40, "Adventure": 40, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "Hitting the Road" }, 
            { time: 28, intensity: 95, label: "The Parking Lot" }, 
            { time: 65, intensity: 80, label: "The Convenience Store" }, 
            { time: 105, intensity: 85, label: "Locking the Cop in the Trunk" }, 
            { time: 125, intensity: 100, label: "The Grand Canyon" } // PRIMARY PEAK
        ],
        synopsis: "A weekend getaway turns into a high-stakes flight from the law after a deadly parking lot altercation. This gold standard of screenwriting transforms the American road trip into an unapologetic feminist manifesto about liberation and taking back control.",
        themes: ["Feminist Independence", "Outlaws", "Sisterhood"]
    }),

    // 3. Rain Man
    380: createRoadTripData({ 
        wanderlustScore: 85, emotionalTexture: 92, complexityLevel: "PRESTIGE", 
        dominantColor: "#0f172a", rating: 8.0, criticsScore: 89, audienceScore: 90, director: "Barry Levinson", 
        cast: ["Dustin Hoffman", "Tom Cruise"], boxOffice: "$354.8 million", budget: "$25 million", 
        dna: { "Drama": 80, "Comedy": 10, "Adventure": 10 },
        scenes: [
            { time: 20, intensity: 65, label: "Discovering Raymond" }, 
            { time: 45, intensity: 75, label: "The Airport Refusal" }, 
            { time: 80, intensity: 85, label: "K-Mart & Underwear" }, 
            { time: 105, intensity: 98, label: "Counting Cards in Vegas" }, // PRIMARY PEAK
            { time: 125, intensity: 90, label: "The Train Station Goodbye" } 
        ],
        synopsis: "A selfish yuppie discovers he has an autistic savant older brother and effectively kidnaps him on a cross-country drive to claim an inheritance. An Oscar-winning masterclass in character development, proving that the real journey happens internally.",
        themes: ["Brotherhood", "Self-Discovery", "Neurodivergence"]
    }),

    // 4. Into the Wild
    5915: createRoadTripData({ 
        wanderlustScore: 100, emotionalTexture: 96, complexityLevel: "PHILOSOPHICAL", 
        dominantColor: "#166534", rating: 8.1, criticsScore: 83, audienceScore: 89, director: "Sean Penn", 
        cast: ["Emile Hirsch", "Vince Vaughn", "Catherine Keener"], boxOffice: "$56.3 million", budget: "$15 million", 
        dna: { "Adventure": 50, "Biography": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 60, label: "Burning the Money" }, 
            { time: 55, intensity: 75, label: "The Magic Bus" }, 
            { time: 85, intensity: 88, label: "Meeting Ron Franz" }, 
            { time: 120, intensity: 95, label: "The Moose" }, 
            { time: 140, intensity: 100, label: "The Final Note" } // PRIMARY PEAK
        ],
        synopsis: "Top student and athlete Christopher McCandless abandons his possessions, gives his entire savings to charity, and hitchhikes to Alaska to live in the wilderness. A visceral, poetic exploration of radical freedom and the unforgiving reality of nature.",
        themes: ["Radical Freedom", "Nature's Indifference", "Human Connection"]
    }),

    // 5. The Straight Story
    404: createRoadTripData({ 
        wanderlustScore: 80, emotionalTexture: 98, complexityLevel: "ART HOUSE", 
        dominantColor: "#d97706", rating: 8.0, criticsScore: 95, audienceScore: 90, director: "David Lynch", 
        cast: ["Richard Farnsworth", "Sissy Spacek"], boxOffice: "$6.2 million", budget: "$10 million", 
        dna: { "Drama": 80, "Biography": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "Buying the Mower" }, 
            { time: 45, intensity: 65, label: "The Runaway Girl" }, 
            { time: 75, intensity: 80, label: "The WWII Veteran" }, 
            { time: 95, intensity: 88, label: "Crossing the Mississippi" }, 
            { time: 108, intensity: 100, label: "Meeting Lyle" } // PRIMARY PEAK
        ],
        synopsis: "An old man makes a 240-mile journey on a ride-on lawnmower to mend his relationship with his dying, estranged brother. David Lynch strips away his usual surrealism to deliver a profound, pure slice of Americana and emotional endurance.",
        themes: ["Forgiveness", "Aging", "Americana"]
    }),

    // 6. Little Miss Sunshine
    773: createRoadTripData({ 
        wanderlustScore: 85, emotionalTexture: 94, complexityLevel: "HEARTWARMING", 
        dominantColor: "#facc15", rating: 7.8, criticsScore: 91, audienceScore: 91, director: "Jonathan Dayton, Valerie Faris", 
        cast: ["Steve Carell", "Toni Collette", "Greg Kinnear", "Paul Dano", "Abigail Breslin", "Alan Arkin"], boxOffice: "$101 million", budget: "$8 million", 
        dna: { "Comedy": 60, "Drama": 40 },
        scenes: [
            { time: 18, intensity: 50, label: "Pushing the VW Bus" }, 
            { time: 45, intensity: 75, label: "Dwayne & Frank" }, 
            { time: 65, intensity: 90, label: "The Colorblind Test" }, 
            { time: 82, intensity: 85, label: "Smuggling Grandpa" }, 
            { time: 95, intensity: 100, label: "Super Freak" } // PRIMARY PEAK
        ],
        synopsis: "A deeply dysfunctional, financially strapped family piles into a broken-down VW microbus to get their youngest daughter to a beauty pageant. A masterclass in balancing devastating tragedy with laugh-out-loud indie comedy.",
        themes: ["Family Dysfunction", "Redefining Success", "Grief"]
    }),

    // 7. The Motorcycle Diaries
    1653: createRoadTripData({ 
        wanderlustScore: 92, emotionalTexture: 90, complexityLevel: "HISTORICAL", 
        dominantColor: "#78350f", rating: 7.7, criticsScore: 83, audienceScore: 87, director: "Walter Salles", 
        cast: ["Gael García Bernal", "Rodrigo de la Serna"], boxOffice: "$57.7 million", budget: "N/A", 
        dna: { "Biography": 50, "Adventure": 30, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 55, label: "The Crash" }, 
            { time: 55, intensity: 75, label: "The Mine Workers" }, 
            { time: 80, intensity: 85, label: "Machu Picchu" }, 
            { time: 105, intensity: 95, label: "The Leprosy Colony" }, 
            { time: 118, intensity: 100, label: "Swimming the River" } // PRIMARY PEAK
        ],
        synopsis: "The dramatization of a 23-year-old Ernesto 'Che' Guevara's 1952 motorcycle road trip across South America. The grimy, real-world textures of poverty and injustice encountered on the road serve to radicalize the future revolutionary.",
        themes: ["Political Awakening", "Social Injustice", "Youthful Idealism"]
    }),

    // 8. Sideways
      9675: createRoadTripData({ 
        wanderlustScore: 82, emotionalTexture: 95, complexityLevel: "MATURE", 
        dominantColor: "#7f1d1d", rating: 7.5, criticsScore: 97, audienceScore: 72, director: "Alexander Payne", 
        cast: ["Paul Giamatti", "Thomas Haden Church", "Virginia Madsen"], boxOffice: "$109.7 million", budget: "$16 million", 
        dna: { "Comedy": 50, "Drama": 50 },
        scenes: [
            { time: 25, intensity: 60, label: "The Pinot Noir Rant" }, 
            { time: 55, intensity: 85, label: "Maya's Wine Speech" }, 
            { time: 85, intensity: 90, label: "Drinking from the Spit Bucket" }, 
            { time: 105, intensity: 98, label: "The Wallet Retrieval" }, // PRIMARY PEAK
            { time: 122, intensity: 80, label: "Cheval Blanc in a Fast Food Cup" } 
        ],
        synopsis: "Two middle-aged men—a depressed, unpublished writer and an aging, soon-to-be-married actor—take a week-long road trip through California wine country. A sophisticated adult drama steeped in mid-life crisis, Pinot Noir, and painful realism.",
        themes: ["Mid-Life Crisis", "Depression", "Wine Culture"]
    }),

    // 9. Easy Rider
    624: createRoadTripData({ 
        wanderlustScore: 94, emotionalTexture: 88, complexityLevel: "ICONIC", 
        dominantColor: "#ca8a04", rating: 7.3, criticsScore: 84, audienceScore: 76, director: "Dennis Hopper", 
        cast: ["Peter Fonda", "Dennis Hopper", "Jack Nicholson"], boxOffice: "$60 million", budget: "$400,000", 
        dna: { "Drama": 60, "Adventure": 40 },
        scenes: [
            { time: 20, intensity: 65, label: "The Hitchhiker" }, 
            { time: 45, intensity: 85, label: "George Hanson (Nicholson)" }, 
            { time: 65, intensity: 90, label: "The Diner Bigotry" }, 
            { time: 75, intensity: 98, label: "The Acid Trip" }, 
            { time: 92, intensity: 100, label: "The Shotgun" } // PRIMARY PEAK
        ],
        synopsis: "Two counterculture bikers travel from Los Angeles to New Orleans in search of America. It is the cultural blueprint for the modern road trip movie, capturing the psychedelic freedom and the violent, reactionary fear of the late 1960s.",
        themes: ["Counterculture", "Freedom vs Fear", "The American Dream"]
    }),

    // 10. National Lampoon's Vacation
    11153: createRoadTripData({ 
        wanderlustScore: 88, emotionalTexture: 75, complexityLevel: "SATIRE", 
        dominantColor: "#0ea5e9", rating: 7.3, criticsScore: 93, audienceScore: 78, director: "Harold Ramis", 
        cast: ["Chevy Chase", "Beverly D'Angelo", "Randy Quaid"], boxOffice: "$61.4 million", budget: "$15 million", 
        dna: { "Comedy": 80, "Adventure": 20 },
        scenes: [
            { time: 20, intensity: 60, label: "The Wrong Car" }, 
            { time: 45, intensity: 85, label: "Cousin Eddie" }, 
            { time: 65, intensity: 95, label: "The Dog on the Bumper" }, 
            { time: 80, intensity: 90, label: "Aunt Edna Passes" }, 
            { time: 92, intensity: 100, label: "Walley World Hostage" } // PRIMARY PEAK
        ],
        synopsis: "Clark Griswold takes his family on a disastrous cross-country drive to Walley World. A legendary, darkly satirical takedown of the forced optimism surrounding the American family vacation.",
        themes: ["Suburban Desperation", "Family Dynamics", "Satire"]
    })
};

// 🎬 FAQS FOR THE ROAD TRIP COLLECTION
export const ROAD_TRIP_MOVIE_FAQS = {
    'Y Tu Mamá También': [
        { question: "What does the narrator add to the film?", answer: "The omniscient narrator provides sudden, detached historical and political context to the boys' journey. While they are obsessed with themselves and their sexual conquests, the narrator points out the poverty, police checkpoints, and political corruption of Mexico occurring just outside their car windows." },
        { question: "Why is the ending so tragic?", answer: "The final scene reveals that Luisa was dying of cancer throughout the trip. The boys' final, intimate encounter broke their friendship because it forced them to confront their true selves and the end of their adolescence. The road trip was a beautiful, finite moment that could never be replicated." },
        { question: "Is the film unrated?", answer: "The film was released 'Unrated' in the US to avoid an NC-17 rating. Its highly graphic depictions of sex, drug use, and an explicit threesome were deemed necessary by director Alfonso Cuarón to maintain the film's raw, uncompromising realism and 'human texture'." },
        { question: "Where is Boca del Cielo?", answer: "Boca del Cielo ('Mouth of Heaven') was a fictional, mythic beach the boys invented to impress Luisa. Ironically, they actually manage to find a hidden, pristine beach that matches their lie perfectly, cementing the magic of the road trip." }
    ],
    'Thelma & Louise': [
        { question: "Why is the ending considered iconic?", answer: "Instead of surrendering to the patriarchal justice system that failed them from the start, Thelma and Louise choose to drive off the Grand Canyon. It is the ultimate act of reclaiming agency—choosing death on their own terms over a life in cages." },
        { question: "Did Ridley Scott plan to change the ending?", answer: "The studio pushed heavily for a happier ending where the women survive, or one where the car is shown crashing to emphasize the tragedy. Ridley Scott froze the frame mid-flight, making them immortal figures of rebellion rather than victims." },
        { question: "Who did Brad Pitt play?", answer: "A young, then-unknown Brad Pitt played J.D., the charming drifter who sleeps with Thelma and then robs her. The role skyrocketed Pitt to global superstardom, solidifying his status as a sex symbol." },
        { question: "How does the car symbolize their journey?", answer: "The 1966 Ford Thunderbird starts as a pristine, shiny vehicle of a weekend getaway. As they plunge deeper into outlaw status, the car gets dirtier, damaged, and eventually destroyed, physically mapping their transformation from housewives to renegades." }
    ],
    'Rain Man': [
        { question: "Was Raymond Babbitt based on a real person?", answer: "Yes, Dustin Hoffman's character was heavily inspired by Kim Peek, a real-life savant who possessed an extraordinary memory but lacked basic motor skills. Hoffman spent months with Peek studying his mannerisms and routines." },
        { question: "Did Tom Cruise and Dustin Hoffman get along on set?", answer: "Initially, they clashed. Hoffman was notoriously perfectionist, and Cruise was intimidated. However, their real-life tension fueled the onscreen dynamic perfectly. By the end of the shoot, they had developed a deep, lifelong friendship, mirroring the movie's plot." },
        { question: "What is the K-Mart scene about?", answer: "Raymond's insistence on buying his underwear exclusively at K-Mart in Cincinnati highlights the extreme rigidity of autism. It forces Charlie to abandon his selfish, fast-paced life and adapt entirely to his brother's needs, marking the true beginning of Charlie's empathy." },
        { question: "Why is it the ultimate Prestige road trip?", answer: "It swept the Oscars (Best Picture, Director, Actor, Screenplay) while being a massive box-office hit. It proved that a road movie didn't need car chases or shootouts to be thrilling—the simple act of two brothers learning to tolerate each other in a Buick Roadmaster was enough." }
    ],
    'Into the Wild': [
        { question: "Is Christopher McCandless a hero or a fool?", answer: "This is the central debate of the film and Jon Krakauer's book. Some view him as a romantic, anti-capitalist visionary who lived purely. Alaskans and survival experts often view him as dangerously arrogant and unprepared, as he marched into the wild without a map or proper gear." },
        { question: "Did he really write 'Happiness is only real when shared'?", answer: "Yes. Towards the end of his life, starving in the Magic Bus, McCandless wrote this annotation in a book he was reading. It is the tragic thesis of the film: he traveled to the ends of the earth to escape society, only to realize human connection is what gives life meaning." },
        { question: "What killed him?", answer: "While starvation was the ultimate cause, Krakauer later concluded that McCandless likely ate seeds from the wild potato plant that were covered in a toxic mold (or contained an amino acid that induced paralysis). The toxin prevented his body from metabolizing the little food he had left." },
        { question: "What happened to the 'Magic Bus'?", answer: "Bus 142 became a pilgrimage site for hikers. Because it was located across the treacherous Teklanika River, several tourists drowned trying to reach it. In 2020, the Alaskan government airlifted the bus out via helicopter to prevent further deaths." }
    ],
    'The Straight Story': [
        { question: "Why did David Lynch direct a G-rated Disney movie?", answer: "David Lynch is famous for surreal, disturbing horror (Twin Peaks, Blue Velvet). He directed this script (written by his partner Mary Sweeney) because he was deeply moved by the pure, unironic emotion of the true story. It remains the most beautifully normal film in his entire catalog." },
        { question: "Did Alvin Straight really drive a lawnmower?", answer: "Yes. In 1994, the real Alvin Straight, aged 73, drove a 1966 John Deere riding lawnmower 240 miles from Iowa to Wisconsin. He had bad eyesight, couldn't get a driver's license, and refused to let anyone else drive him to see his estranged brother." },
        { question: "What is the significance of the stars at the end?", answer: "When Alvin and his brother Lyle finally reunite, they sit in silence and look up at the stars. It is a callback to their shared childhood before anger separated them, proving that the brutal, slow 240-mile journey was necessary to earn that quiet forgiveness." },
        { question: "Why is it considered a masterpiece of 'Texture'?", answer: "Lynch takes the time to show the midwestern landscapes, the humming of the tractor engine, and the wrinkles on Richard Farnsworth's face. The film honors the slow, methodical pace of aging, making it a meditative anti-blockbuster." }
    ],
    'Little Miss Sunshine': [
        { question: "Why did they push a yellow VW bus?", answer: "The broken clutch on the Volkswagen T2 Microbus became the film's greatest metaphor. Because the family literally had to run and push the vehicle together to get it into gear, it forced a group of individuals who hated each other into a unified, synchronized team." },
        { question: "Did Alan Arkin really snort heroin in the film?", answer: "His character, Grandpa Edwin, is a foul-mouthed, heroin-snorting rebel. Arkin won an Oscar for the role because he infused the crassness with deep, genuine love for his granddaughter. He teaches Olive that 'losing' is fine, as long as you have the courage to try." },
        { question: "What is the meaning of the colorblind test?", answer: "Dwayne takes a vow of silence to become a fighter pilot. When he discovers he is colorblind—instantly shattering his only dream—he finally breaks his silence to scream. It perfectly encapsulates the film's theme: life will crush your plans, and you just have to adapt." },
        { question: "Why is the final dance so iconic?", answer: "Olive performs a wildly inappropriate burlesque routine (choreographed by her late Grandpa) at a pristine, plastic children's beauty pageant. When the judges try to pull her off stage, her entire dysfunctional family joins her. It is the ultimate rejection of superficial societal standards." }
    ],
    'The Motorcycle Diaries': [
        { question: "Is this a propaganda film?", answer: "The film avoids the later, bloody reality of Che Guevara's revolutionary wars. Instead, it serves as an origin story, focusing purely on how a privileged, sheltered medical student was radicalized by witnessing the extreme poverty, illness, and exploitation of indigenous people across South America." },
        { question: "What is the significance of the leprosy colony?", answer: "At the San Pablo leper colony, Ernesto refuses to wear gloves when treating the patients, insisting on treating them with human dignity rather than as outcasts. It is the defining moment where his empathy overrides the systemic rules of society." },
        { question: "Why does he swim across the river?", answer: "On his birthday, Ernesto swims across the treacherous Amazon river separating the staff (the privileged) from the lepers (the oppressed) to celebrate with the patients. It is a heavy-handed but gorgeous metaphor for him permanently crossing the line into solidarity with the poor." },
        { question: "Did they use the real motorcycle?", answer: "The actual 1939 Norton 500cc motorcycle, nicknamed 'The Mighty One' (La Poderosa), broke down early in their real trip. The actors used restored vintage bikes, and director Walter Salles shot the film sequentially, allowing the actors to physically weather along with the journey." }
    ],
    'Sideways': [
        { question: "Why does Miles hate Merlot?", answer: "Miles's screaming refusal to drink Merlot ('I am not drinking any fucking Merlot!') caused a real-world crash in Merlot wine sales and a boom in Pinot Noir sales (known as the 'Sideways Effect'). Ironically, the prized bottle Miles saves for the end of the movie, a 1961 Cheval Blanc, is a Merlot blend. He hated Merlot because his ex-wife loved it." },
        { question: "Why is it considered a 'Mature' road trip?", answer: "Unlike teen road trips fueled by hormones, Sideways is fueled by depression, divorce, and middle-aged failure. It uses wine tasting as a brilliant metaphor for people: some are delicate and require care (Pinot), while others are robust and cheap." },
        { question: "How does the wallet scene break the tension?", answer: "When Jack leaves his wallet in a waitress's bedroom, the depressive, anxious Miles is forced to break into the house to retrieve it, resulting in him being chased by a naked, angry husband. It injects a burst of chaotic slapstick into an otherwise talky, emotional drama." },
        { question: "Does the film have a happy ending?", answer: "It has a hopeful ending. Miles finally drinks his prized $1000 wine out of a styrofoam cup at a fast-food restaurant—a sign that he has stopped waiting for a 'perfect' moment and accepted his messy reality. He then knocks on Maya's door, taking a step toward healing." }
    ],
    'Easy Rider': [
        { question: "Did they use real drugs while filming?", answer: "Yes. Jack Nicholson famously admitted that he and Peter Fonda smoked real marijuana on camera during the campfire scene, resulting in genuine, unscripted philosophical rambling. The use of real drugs added to the film's gritty, documentary-like counterculture authenticity." },
        { question: "Why is the ending so shocking?", answer: "After a journey searching for the 'American Dream,' Wyatt and Billy are randomly gunned down by rednecks on the highway. It was a brutal, pessimistic ending that signaled the death of the 1960s hippie ideal, showing that 'freedom' made mainstream America violent and terrified." },
        { question: "What does 'We blew it' mean?", answer: "Wyatt (Fonda) says this near the end. It means that despite gaining money and freedom, they didn't find spiritual enlightenment. They sold out (by dealing cocaine) to buy their freedom, corrupting themselves before the journey even began." },
        { question: "How did it change Hollywood?", answer: "Made for just $400,000, it grossed over $60 million. It proved to terrified studio executives that young, rebellious filmmakers could make massive hits, directly launching the 'New Hollywood' era of the 1970s (Coppola, Scorsese, Spielberg)." }
    ],
    'National Lampoon\'s Vacation': [
        { question: "Why is Clark Griswold the ultimate satirical dad?", answer: "Clark is obsessed with the *idea* of the perfect American family vacation, to the point of absolute madness. He will ignore his family's misery, tie a dead aunt to the roof, and commit armed robbery just to force his family to have 'fun.' He is the dark side of suburban optimism." },
        { question: "What happened to the dog?", answer: "In a scene of pitch-black comedy, Clark forgets he tied Cousin Eddie's vicious dog, Dinky, to the bumper of the Family Truckster before driving off. The scene pushes the boundaries of a family comedy into dark, morbid territory." },
        { question: "Where is Walley World?", answer: "Walley World is a fictional parody of Disneyland. The actual rollercoaster scenes at the end of the film were shot at Six Flags Magic Mountain in California. The theme park was forced to open the rides specifically for the shoot." },
        { question: "Why does he buy a BB gun?", answer: "After driving thousands of miles, Clark discovers Walley World is closed for repairs. His mind completely snaps. He buys a BB gun and takes the security guard (John Candy) hostage, demanding they ride the rollercoasters. It is the hilarious, unhinged breaking point of the American Dream." }
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

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
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

export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} (${currentMovieYear}) - Explore exact timestamps and parents guide information on Filmiway.`,
        'genre': movie.genre,
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = ROAD_TRIP_MOVIE_FAQS[movie.Title] ? [...ROAD_TRIP_MOVIE_FAQS[movie.Title]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
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

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini'); 
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(', ');

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Parents Guide & Scene Timestamps: Does ${movie.Title} contain sex, nudity, or adult scenes?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `According to the Filmiway Timestamps & Parents Guide, ${movie.Title} contains scenes involving ${typesString}. These timestamps are accurate for the ${currentRuntime} version of the film. Exact timestamps to skip these scenes:<br><br><ul>${schemaListText}</ul>` 
                }
            },
            {
                '@type': 'Question',
                'name': `How can I skip sex and adult scenes in ${movie.Title}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `You can skip all sex, nudity, and adult scenes in ${movie.Title} using Filmiway's exact scene timestamps. These timestamps show precisely when each scene starts and ends, so you can skip them easily while watching.`
                }
            }
        );
    } else {
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `Parents Guide: Does ${movie.Title} contain explicit content?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `The Filmiway Timestamps & Parents Guide confirms that ${movie.Title} is free of explicit sexual content or extreme nudity. There are no scenes to skip. This assessment is accurate for the ${currentRuntime} version of the film.` 
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
    const staticFaqs = ROAD_TRIP_MOVIE_FAQS[movieTitle] ? [...ROAD_TRIP_MOVIE_FAQS[movieTitle]] : [];
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
        const typesString = typesArray.join(', ');

        const uiListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `• ${timeRange} - ${fullType}`;
        }).join('\n');

        staticFaqs.unshift(
            {
                question: `Parents Guide & Scene Timestamps: Does ${movieTitle} contain sex, nudity, or adult scenes?`,
                answer: `According to the Filmiway Timestamps & Parents Guide, ${movieTitle} contains scenes involving ${typesString}. These timestamps are accurate for the ${finalRuntime} version of the film. Exact timestamps to skip these scenes:

${uiListText}`
            },
            {
                question: `How can I skip sex and adult scenes in ${movieTitle}?`,
                answer: `You can skip all sex, nudity, and adult scenes in ${movieTitle} using Filmiway's exact scene timestamps. These timestamps show precisely when each scene starts and ends, so you can skip them easily while watching.`
            }
        );
    } else {
        staticFaqs.unshift({
            question: `Parents Guide: Does ${movieTitle} contain explicit content?`,
            answer: `The Filmiway Timestamps & Parents Guide confirms that ${movieTitle} is completely free of explicit sexual content and nudity. There are no scenes to skip. This assessment is accurate for the ${finalRuntime} version of the film.`
        });
    }

    return staticFaqs;
};