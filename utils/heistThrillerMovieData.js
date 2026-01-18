// utils/heistThrillerMovieData.js - COMPLETE HEIST THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 949, imdbID: 'tt0113277', Title: 'Heat', year: 1995, genre: 'Crime Drama', runtime: 170, rank: 1 },
    { tmdbId: 500, imdbID: 'tt0105236', Title: 'Reservoir Dogs', year: 1992, genre: 'Crime Thriller', runtime: 99, rank: 2 },
    { tmdbId: 23168, imdbID: 'tt0844708', Title: 'The Town', year: 2010, genre: 'Crime Thriller', runtime: 125, rank: 3 },
    { tmdbId: 338766, imdbID: 'tt0475304', Title: 'Hell or High Water', year: 2016, genre: 'Crime Drama', runtime: 102, rank: 4 },
    { tmdbId: 374, imdbID: 'tt0305224', Title: 'The Bank Job', year: 2008, genre: 'Crime Thriller', runtime: 111, rank: 5 },
    { tmdbId: 388, imdbID: 'tt0454848', Title: 'Inside Man', year: 2006, genre: 'Crime Thriller', runtime: 129, rank: 6 },
    { tmdbId: 11524, imdbID: 'tt0083190', Title: 'Thief', year: 1981, genre: 'Crime Drama', runtime: 122, rank: 7 },
    { tmdbId: 1981, imdbID: 'tt0073195', Title: 'Dog Day Afternoon', year: 1975, genre: 'Crime Drama', runtime: 125, rank: 8 },
    { tmdbId: 9654, imdbID: 'tt0317740', Title: 'The Italian Job', year: 1969, genre: 'Action Crime', runtime: 99, rank: 9 },
    { tmdbId: 161, imdbID: 'tt0240772', Title: "Ocean's Eleven", year: 2001, genre: 'Crime Comedy', runtime: 116, rank: 10 }
];

// Helper to ensure default values
const createMovieData = (data) => ({
    heistComplexity: 90,
    tensionLevel: 85,
    actionImpact: 80,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const SENSITIVE_TIMELINES = {
    949: { scenes: [
        { start: '4:23', end: '5:13', type: 'Passionate kissing', severity: 'Mild' },
        { start: '22:00', end: '22:07', type: 'Kissing', severity: 'Mild' },
        { start: '30:50', end: '31:17', type: 'Kissing', severity: 'Mild' },
        { start: '1:07:35', end: '1:07:38', type: 'Kissing', severity: 'Mild' }
    ]},
    500: { scenes: [] }, // Reservoir Dogs (Violent but no sexual content)
    23168: { scenes: [
        { start: '21:08', end: '21:26', type: 'Sex', severity: 'Moderate' },
        { start: '1:05:15', end: '1:06:30', type: 'Sex', severity: 'Moderate' }
    ]},
    338766: { scenes: [
        { start: '45:07', end: '45:13', type: 'Sex (in the background)', severity: 'Mild' }
    ]},
    374: { scenes: [
        { start: '1:00', end: '1:45', type: 'Sex & Nudity', severity: 'High' },
        { start: '12:13', end: '13:10', type: 'Nudity ', severity: 'High' },
        { start: '15:15', end: '16:00', type: 'Nudity ', severity: 'Moderate' },
        { start: '50:07', end: '50:18', type: 'Passionate Kissing', severity: 'Mild' },
        { start: '52:20', end: '52:45', type: 'Suggestive image ', severity: 'Moderate' },
        { start: '1:15:00', end: '1:15:19', type: 'Nudity ', severity: 'Moderate' }
    ]},
    388: { scenes: [
        { start: '19:40', end: '20:35', type: 'Suggestive clothing ', severity: 'Mild' },
        { start: '2:21:29', end: '2:21:50', type: 'Kissing', severity: 'Mild' }
    ]},
    11524: { scenes: [] }, // Thief
    1981: { scenes: [] }, // Dog Day Afternoon
    9654: { scenes: [
        { start: '41:15', end: '41:30', type: 'Suggestive Clothing ', severity: 'Mild' }
    ]},
    161: { scenes: [
        { start: '1:50:50', end: '1:50:55', type: 'Kissing', severity: 'Mild' }
    ]}
};

export const FALLBACK_POSTERS = {
    949: "https://image.tmdb.org/t/p/w500/rrBuGu0Pjq7Y2nWX0qfz8kGDSAN.jpg",
    500: "https://image.tmdb.org/t/p/w500/g7spS3XD5senC1Jg0vafvoB32fG.jpg",
    23168: "https://image.tmdb.org/t/p/w500/l4K9aX2Z0Z0X3X7X7X7X7X7X7.jpg", // Placeholder
    338766: "https://image.tmdb.org/t/p/w500/5gL61j9x7x9x7x9x7x9x7x9x7.jpg", // Placeholder
    374: "https://image.tmdb.org/t/p/w500/8g8g8g8g8g8g8g8g8g8g8g8g8.jpg", // Placeholder
    388: "https://image.tmdb.org/t/p/w500/mf4i9z4f9z4f9z4f9z4f9z4f9.jpg", // Placeholder
    11524: "https://image.tmdb.org/t/p/w500/1.jpg", // Placeholder
    1981: "https://image.tmdb.org/t/p/w500/2.jpg", // Placeholder
    9654: "https://image.tmdb.org/t/p/w500/3.jpg", // Placeholder
    161: "https://image.tmdb.org/t/p/w500/4.jpg" // Placeholder
};

export const COMPLETE_MOVIE_DATA = {
    // 1. Heat
    949: createMovieData({ 
        heistComplexity: 92, tensionLevel: 95, actionImpact: 98, complexityLevel: "EXTREME", 
        dominantColor: "#2e3b4e", rating: 8.3, criticsScore: 88, audienceScore: 92, 
        director: "Michael Mann", cast: ["Al Pacino", "Robert De Niro", "Val Kilmer"], 
        boxOffice: "$187.4 million", budget: "$60 million", 
        dna: { Crime: 60, Drama: 30, Thriller: 10 }, 
        scenes: [
            { time: 10, intensity: 50, label: 'Bank Robbery Setup', color: '#b91c1c' },
            { time: 75, intensity: 80, label: 'Cop Confrontation', color: '#f87171' },
            { time: 110, intensity: 85, label: 'Team Division', color: '#fbbf24' },
            { time: 140, intensity: 90, label: 'Downtown Chase', color: '#fde68a' },
            { time: 160, intensity: 95, label: 'Final Shootout', color: '#dc2626' }
        ], 
        synopsis: "In the neon-soaked streets of Los Angeles, a master thief planning his magnum opus finds himself locked in a relentless psychological chess match with an obsessively dedicated detective. As the stakes rise and their personal lives crumble, the line between criminal and cop blurs, leading to an explosive, city-spanning collision where only one man can remain standing.", 
        themes: ["Duality", "Obsession", "Professionalism", "Isolation"], 
        awards: ["Chicago Film Critics Nomination"] 
    }),

    // 2. Reservoir Dogs
    500: createMovieData({ 
        heistComplexity: 85, tensionLevel: 90, actionImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#1a1a1a", rating: 8.3, criticsScore: 90, audienceScore: 94, 
        director: "Quentin Tarantino", cast: ["Harvey Keitel", "Tim Roth", "Michael Madsen"], 
        boxOffice: "$2.8 million", budget: "$1.2 million", 
        dna: { Crime: 70, Thriller: 25, Drama: 5 }, 
        scenes: [
            { time: 12, intensity: 40, label: 'Heist Planning', color: '#b91c1c' },
            { time: 35, intensity: 55, label: 'Tense Meeting', color: '#f87171' },
            { time: 60, intensity: 75, label: 'Betrayal Suspicion', color: '#fbbf24' },
            { time: 80, intensity: 85, label: 'Interrogations', color: '#fde68a' },
            { time: 90, intensity: 90, label: 'Shootout', color: '#dc2626' }
        ], 
        synopsis: "A meticulously planned jewelry heist explodes into bloody chaos before it even begins, leaving a fractured gang of strangers trapped in a warehouse with a dying man and a terrifying realization: one of them is an undercover cop. Drenched in suspicion and paranoia, the survivors turn on each other in a violent, claustrophobic unraveling where trust is a fatal mistake.", 
        themes: ["Betrayal", "Trust", "Honor", "Violence"], 
        awards: ["Sundance Selection", "Independent Spirit Award"] 
    }),

    // 3. The Town
    23168: createMovieData({ 
        heistComplexity: 88, tensionLevel: 90, actionImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#3b4252", rating: 7.5, criticsScore: 92, audienceScore: 85, 
        director: "Ben Affleck", cast: ["Ben Affleck", "Rebecca Hall", "Jeremy Renner"], 
        boxOffice: "$154.9 million", budget: "$37 million", 
        dna: { Crime: 65, Drama: 25, Thriller: 10 }, 
        scenes: [
            { time: 15, intensity: 48, label: 'Heist Planning', color: '#b91c1c' },
            { time: 50, intensity: 65, label: 'Hostage Taking', color: '#f87171' },
            { time: 85, intensity: 78, label: 'Police Pursuit', color: '#fbbf24' },
            { time: 110, intensity: 85, label: 'Emotional Conflict', color: '#fde68a' },
            { time: 120, intensity: 90, label: 'Final Showdown', color: '#dc2626' }
        ], 
        synopsis: "Doug MacRay is the leader of a ruthless crew of Boston bank robbers who pride themselves on never getting caught. But when he unexpectedly falls for a witness from their latest job, Doug tries to bury his criminal past to be with her—only to be dragged back in by the FBI closing in and a volatile partner who won't let him leave. It’s a dangerous game of deception where one wrong move means death or prison.", 
        themes: ["Redemption", "Loyalty", "Identity", "Trauma"], 
        awards: ["Oscar Nomination (Renner)", "NBR Top Film"] 
    }),

    // 4. Hell or High Water
    338766: createMovieData({ 
        heistComplexity: 86, tensionLevel: 89, actionImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#b45309", rating: 7.6, criticsScore: 97, audienceScore: 88, 
        director: "David Mackenzie", cast: ["Chris Pine", "Ben Foster", "Jeff Bridges"], 
        boxOffice: "$37.7 million", budget: "$12 million", 
        dna: { Crime: 55, Drama: 30, Thriller: 15 }, 
        scenes: [
            { time: 10, intensity: 40, label: 'First Robbery', color: '#b91c1c' },
            { time: 40, intensity: 60, label: 'Police Arrival', color: '#f87171' },
            { time: 75, intensity: 78, label: 'Chase', color: '#fbbf24' },
            { time: 90, intensity: 85, label: 'Family Conflict', color: '#fde68a' },
            { time: 100, intensity: 89, label: 'Final Stand', color: '#dc2626' }
        ], 
        synopsis: "In the desolate, sun-scorched plains of West Texas, two desperate brothers embark on a spree of calculated bank robberies to save their family ranch from foreclosure. But their plan draws the attention of a weary, relentless Texas Ranger on the verge of retirement. This isn't just a crime spree; it’s a gritty, modern-day western about justice, legacy, and how far family will go when backed into a corner.", 
        themes: ["Family", "Poverty", "Justice", "Legacy"], 
        awards: ["4 Oscar Nominations", "AFI Movie of the Year"] 
    }),

    // 5. The Bank Job
    374: createMovieData({ 
        heistComplexity: 82, tensionLevel: 85, actionImpact: 80, complexityLevel: "MEDIUM", 
        dominantColor: "#5d4037", rating: 6.9, criticsScore: 80, audienceScore: 74, 
        director: "Roger Donaldson", cast: ["Jason Statham", "Saffron Burrows", "David Suchet"], 
        boxOffice: "$64.3 million", budget: "$30 million", 
        dna: { Crime: 60, Drama: 25, Thriller: 15 }, 
        scenes: [
            { time: 20, intensity: 35, label: 'Planning', color: '#b91c1c' },
            { time: 50, intensity: 60, label: 'Vault Breach', color: '#f87171' },
            { time: 70, intensity: 75, label: 'Security Alert', color: '#fbbf24' },
            { time: 90, intensity: 80, label: 'Escape Plan', color: '#fde68a' },
            { time: 100, intensity: 85, label: 'Getaway', color: '#dc2626' }
        ], 
        synopsis: "Based on a scandalous true story buried for decades, a struggling car dealer is lured into a 'foolproof' bank heist on London's Baker Street. What starts as a simple robbery for cash and jewelry spirals into a deadly conspiracy involving the Royal Family, corrupt cops, and the criminal underworld. They didn’t just steal money; they stole secrets that powerful people are willing to kill to keep hidden.", 
        themes: ["Corruption", "Scandal", "Greed", "Survival"], 
        awards: ["Golden Trailer Nomination"] 
    }),

    // 6. Inside Man
    388: createMovieData({ 
        heistComplexity: 88, tensionLevel: 85, actionImpact: 80, complexityLevel: "HIGH", 
        dominantColor: "#1e3a8a", rating: 7.6, criticsScore: 86, audienceScore: 85, 
        director: "Spike Lee", cast: ["Denzel Washington", "Clive Owen", "Jodie Foster"], 
        boxOffice: "$88.4 million", budget: "$45 million", 
        dna: { Crime: 55, Drama: 30, Thriller: 15 }, 
        scenes: [
            { time: 18, intensity: 45, label: 'Robbery', color: '#b91c1c' },
            { time: 50, intensity: 65, label: 'Hostage Situation', color: '#f87171' },
            { time: 85, intensity: 75, label: 'Negotiation', color: '#fbbf24' },
            { time: 110, intensity: 80, label: 'Surprise Twist', color: '#fde68a' },
            { time: 125, intensity: 85, label: 'Resolution', color: '#dc2626' }
        ], 
        synopsis: "A master criminal orchestrates the perfect bank robbery in Manhattan, turning a hostage situation into a brilliantly complex puzzle that leaves the NYPD baffled. But as a sharp detective engages in a high-stakes negotiation, a mysterious power broker enters the fray to protect a dark secret hidden inside the vault. In this slick, mind-bending thriller, nothing is what it seems, and the motive is far more dangerous than money.", 
        themes: ["Deception", "Power", "Race", "Justice"], 
        awards: ["Black Reel Award", "AFI Movie of the Year"] 
    }),

    // 7. Thief
    11524: createMovieData({ 
        heistComplexity: 85, tensionLevel: 88, actionImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#0f172a", rating: 7.5, criticsScore: 94, audienceScore: 82, 
        director: "Michael Mann", cast: ["James Caan", "Tuesday Weld", "William Petersen"], 
        boxOffice: "$1.8 million", budget: "$6 million", 
        dna: { Crime: 65, Thriller: 30, Drama: 5 }, 
        scenes: [
            { time: 15, intensity: 40, label: 'Planning', color: '#b91c1c' },
            { time: 50, intensity: 65, label: 'Heist Execution', color: '#f87171' },
            { time: 80, intensity: 75, label: 'Complications', color: '#fbbf24' },
            { time: 95, intensity: 85, label: 'Escape', color: '#fde68a' },
            { time: 110, intensity: 88, label: 'Aftermath', color: '#dc2626' }
        ], 
        synopsis: "Frank is a high-end safecracker who views his life as a binary code: get in, get the diamonds, get out. Seeking a normal life and a family, he agrees to one final, high-risk score for a powerful mob boss. But in a brutal world of neon lights and cold steel, Frank discovers that independence is an illusion, and escaping the life he built requires burning it all to the ground.", 
        themes: ["Professionalism", "Existentialism", "Fate", "Survival"], 
        awards: ["Cannes Palme d'Or Nomination"] 
    }),

    // 8. Dog Day Afternoon
    1981: createMovieData({ 
        heistComplexity: 80, tensionLevel: 85, actionImpact: 75, complexityLevel: "MEDIUM", 
        dominantColor: "#ca8a04", rating: 8.0, criticsScore: 96, audienceScore: 90, 
        director: "Sidney Lumet", cast: ["Al Pacino", "John Cazale", "Charles Durning"], 
        boxOffice: "$50 million", budget: "$1.8 million", 
        dna: { Crime: 55, Drama: 30, Thriller: 15 }, 
        scenes: [
            { time: 20, intensity: 50, label: 'Robbery Start', color: '#b91c1c' },
            { time: 55, intensity: 70, label: 'Hostage Negotiation', color: '#f87171' },
            { time: 90, intensity: 80, label: 'Media Frenzy', color: '#fbbf24' },
            { time: 110, intensity: 85, label: 'Emotional Conflict', color: '#fde68a' },
            { time: 120, intensity: 85, label: 'Resolution', color: '#dc2626' }
        ], 
        synopsis: "On a sweltering afternoon in Brooklyn, an inexperienced criminal attempts a bank robbery to pay for his lover’s operation, only to have everything go wrong instantly. Trapped inside with hostages and surrounded by an army of cops and cheering crowds, the heist dissolves into a bizarre, emotional, and tense media circus. It’s a raw, tragicomic portrait of desperation spiraling out of control.", 
        themes: ["Media", "Anti-Establishment", "Desperation", "Identity"], 
        awards: ["Oscar Best Screenplay", "6 Oscar Nominations"] 
    }),

    // 9. The Italian Job
    9654: createMovieData({ 
        heistComplexity: 82, tensionLevel: 85, actionImpact: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#dc2626", rating: 7.3, criticsScore: 82, audienceScore: 86, 
        director: "Peter Collinson", cast: ["Michael Caine", "Noël Coward", "Benny Hill"], 
        boxOffice: "$12 million", budget: "$3.2 million", 
        dna: { Crime: 50, Thriller: 35, Action: 15 }, 
        scenes: [
            { time: 15, intensity: 40, label: 'Planning', color: '#b91c1c' },
            { time: 45, intensity: 65, label: 'Mini Cooper Chase', color: '#f87171' },
            { time: 70, intensity: 75, label: 'Gold Heist', color: '#fbbf24' },
            { time: 85, intensity: 80, label: 'Final Showdown', color: '#fde68a' },
            { time: 95, intensity: 85, label: 'Escape', color: '#dc2626' }
        ], 
        synopsis: "Cockney criminal Charlie Croker inherits a plan for the ultimate gold bullion heist in Turin, Italy. Leading a ragtag crew of misfits and computer geeks, he orchestrates a traffic jam of epic proportions to cover their escape. Iconic, stylish, and fueled by pure adrenaline, this caper features the most legendary car chase in history as three Mini Coopers race through sewers, piazzas, and rooftops to get the gold home.", 
        themes: ["Style", "Patriotism", "Class", "Caper"], 
        awards: ["BAFTA Nomination"] 
    }),

    // 10. Ocean's Eleven
    161: createMovieData({ 
        heistComplexity: 89, tensionLevel: 90, actionImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#854d0e", rating: 7.8, criticsScore: 83, audienceScore: 80, 
        director: "Steven Soderbergh", cast: ["George Clooney", "Brad Pitt", "Matt Damon"], 
        boxOffice: "$450.7 million", budget: "$85 million", 
        dna: { Crime: 60, Thriller: 30, Drama: 10 }, 
        scenes: [
            { time: 12, intensity: 45, label: 'Planning the Heist', color: '#b91c1c' },
            { time: 48, intensity: 70, label: 'Recruiting Team', color: '#f87171' },
            { time: 75, intensity: 80, label: 'Casino Infiltration', color: '#fbbf24' },
            { time: 98, intensity: 85, label: 'Robbery Execution', color: '#fde68a' },
            { time: 110, intensity: 90, label: 'Escape', color: '#dc2626' }
        ], 
        synopsis: "Less than 24 hours after his parole, charismatic thief Danny Ocean is already planning the most ambitious heist in history: robbing three Las Vegas casinos simultaneously. To pull off the impossible $150 million score, he handpicks an elite team of eleven specialists. With a ruthless casino owner watching their every move, they have to be smarter, faster, and cooler than anyone else in the room. Are you in or out?", 
        themes: ["Cool", "Teamwork", "Revenge", "Style"], 
        awards: ["MTV Movie Award Nomination"] 
    })
};

// 6️⃣ CINEMATIC_COLORS
export const CINEMATIC_COLORS = {
    Thriller: '#1e293b', Drama: '#dc2626', Mystery: '#dc2626', 'Sci-Fi': '#0f172a',
    Crime: '#422006', Romance: '#be185d', Action: '#991b1b', Psychological: '#7c3aed', Horror: '#0f172a'
};

// 7️⃣ RATING_OPTIONS
export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

// 8️⃣ HEIST_THRILLER_FAQS
export const HEIST_THRILLER_FAQS = {
    'Heat': [
        { question: "Is the coffee shop scene real?", answer: "Yes. It was the first time legends Al Pacino and Robert De Niro appeared on screen together. They didn't rehearse it to keep the tension genuine." },
        { question: "Is the shootout realistic?", answer: "The downtown shootout is considered the gold standard of gunfights in cinema. It is so tactically accurate that the US Marines use it for training." },
        { question: "Why doesn't Neil kill Waingro earlier?", answer: "He tries to, but chaos during the armored car heist prevents it. Leaving Waingro alive becomes the 'loose end' that ultimately unravels Neil's perfect plan." },
        { question: "What does the ending mean?", answer: "It symbolizes mutual respect. Vincent holds Neil's hand as he dies, acknowledging that they are two sides of the same coin—men defined by their absolute dedication to their craft." }
    ],
    'Reservoir Dogs': [
        { question: "What happened to Mr. Blue?", answer: "It is implied he was killed by police during the escape, though his death is never shown on screen." },
        { question: "Who shot Nice Guy Eddie?", answer: "This is a famous debate. In the script, Mr. White shoots him. In the film, a squib mistake makes it look like he just falls. Tarantino left it in for ambiguity." },
        { question: "Is the ear scene too violent?", answer: "It is infamous, but the camera actually pans away during the cutting. The violence happens in the viewer's imagination, making it even more effective." },
        { question: "Why the color names?", answer: "To prevent the team from knowing each other's identities and turning on one another if captured. Ironically, they turn on each other anyway." }
    ],
    'The Town': [
        { question: "Is Charlestown really the bank robbery capital?", answer: "Historically, yes. The film is based on the book 'Prince of Thieves' which details how the neighborhood produced more bank robbers than anywhere else in the US." },
        { question: "Does Doug escape at the end?", answer: "Yes. He leaves a bag of money for Claire and disappears to Florida. He achieves the new life he wanted, but at the cost of never seeing his home again." },
        { question: "Why the nun masks?", answer: "They are shocking and disorienting. The masks create a terrifying contrast between a symbol of peace and extreme violence, adding to the film's gritty atmosphere." },
        { question: "Is it based on a true story?", answer: "While fictional, it draws heavily on real crimes and the culture of silence in Charlestown." }
    ],
    'Hell or High Water': [
        { question: "Are they the bad guys?", answer: "The film blurs the line. The brothers rob banks to save their family land from the same predatory banks. They are anti-heroes fighting a corrupt system with corrupt methods." },
        { question: "What does 'Hell or High Water' mean?", answer: "It means 'come what may' or 'no matter what.' It reflects the brothers' absolute determination to finish their plan regardless of the consequences." },
        { question: "Why does Tanner sacrifice himself?", answer: "He knows Toby has a future and a family to save. Tanner, an ex-con with no future, draws the police fire to give his brother a chance to escape." },
        { question: "Is the ending a standoff?", answer: "Yes. The final conversation between Toby and the Ranger is a verbal standoff. The violence is over, but the tension and moral judgment remain unresolved." }
    ],
    'The Bank Job': [
        { question: "Is it a true story?", answer: "Yes, it is based on the 1971 Baker Street robbery. The government issued a 'D-Notice' to censor the press, fueling rumors that the thieves stole compromising photos of Princess Margaret." },
        { question: "Did they get away with it?", answer: "In real life, no one was arrested for years, and most of the loot was never recovered. The film dramatizes the political conspiracy behind the immunity deal." },
        { question: "What was in the safety deposit box?", answer: "The film suggests photos of Princess Margaret, a ledger of corrupt cops, and photos of politicians in compromising positions. It was a treasure trove of blackmail." },
        { question: "Why did they burn the ledger?", answer: "To protect themselves. By destroying the leverage, they removed the reason for the corrupt powers to kill them, securing their safety." }
    ],
    'Inside Man': [
        { question: "Did they rob the bank?", answer: "Technically, no. They didn't steal any money. They stole a diamond ring and a Nazi document from a specific safety deposit box to expose a war criminal." },
        { question: "Where did Dalton hide?", answer: "He hid inside a fake wall constructed within the supply closet. He stayed there for a week until the police investigation cooled down, then walked out the front door." },
        { question: "What was the motive?", answer: "Justice, not money. Dalton wanted to expose the bank's founder for his Nazi collaboration. The diamonds were just a bonus; the real victory was the truth." },
        { question: "Why give the ring to the detective?", answer: "To prove he was there and to guide the detective to the truth about the bank owner. It was a final tip of the hat from one professional to another." }
    ],
    'Thief': [
        { question: "Is the safecracking real?", answer: "Yes. Michael Mann hired real professional thieves as technical advisors. The tools and techniques James Caan uses are authentic to 1981 high-end burglary." },
        { question: "Why does Frank burn his life down?", answer: "He realizes the mob will use his family and business as leverage to control him forever. To be free, he must have 'nothing they can use against him.' It is an act of extreme nihilism." },
        { question: "What does the collage mean?", answer: "The photo collage represents the life Frank *wants* to build—a wife, a kid, a house. It is his dream board. Its destruction symbolizes the impossibility of a criminal having a normal life." },
        { question: "Is the ending tragic?", answer: "Yes. Frank survives, but he is alone with nothing. He won his freedom but lost his dream. It is a bleak, existential victory." }
    ],
    'Dog Day Afternoon': [
        { question: "Why did he rob the bank?", answer: "Sonny robbed the bank to pay for his lover Leon's gender reassignment surgery. The motive adds a layer of tragic romance and social commentary to the crime." },
        { question: "Is it based on a true story?", answer: "Yes, it is based on the 1972 robbery by John Wojtowicz. The film is remarkably accurate to the bizarre, circus-like atmosphere of the real event." },
        { question: "Why did the crowd cheer?", answer: "Sonny became an anti-establishment folk hero. He represented the little guy fighting the system (banks, police), tapping into the 1970s counter-culture anger." },
        { question: "Did Sal have to die?", answer: "The FBI decided Sal was too volatile to be taken alive. His death serves as the brutal reality check that ends the 'show' and the fantasy of escape." }
    ],
    'The Italian Job': [
        { question: "How does it end?", answer: "Literally on a cliffhanger. The bus is teetering over a cliff, with the gold at one end and the crew at the other. Michael Caine says, 'Hang on a minute, lads, I've got a great idea.' It ends there." },
        { question: "Did they save the gold?", answer: "We never know. The ambiguity is part of the charm. It leaves the audience debating physics and morality forever." },
        { question: "Are the Mini Coopers real?", answer: "Yes. The stunt driving was real and spectacular. The film is credited with making the Mini Cooper a global icon of British cool." },
        { question: "Why the traffic jam?", answer: "It was a brilliant diversion. By paralyzing Turin with traffic, the police couldn't pursue them, allowing the Minis to escape through sidewalks and sewers." }
    ],
    "Ocean's Eleven": [
        { question: "Is it a remake?", answer: "Yes, of a 1960 Rat Pack film. However, Soderbergh's version is widely considered superior, replacing the loose plot of the original with a tight, clever heist structure." },
        { question: "How did they get the SWAT gear in?", answer: "They *were* the SWAT team. By calling in a fake emergency, they walked the money out the front door disguised as police officers. It is the ultimate misdirection." },
        { question: "Why rob three casinos?", answer: "Ambition and revenge. All three are owned by Terry Benedict, who is dating Danny's ex-wife. The difficulty makes the success sweeter." },
        { question: "Did they keep the money?", answer: "Yes, they walked away with $150 million. The final scene shows them disbanding, rich and free, staring at the Bellagio fountains." }
    ]
};

// 9️⃣ HELPER FUNCTIONS & EXPORTS
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
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HEIST_THRILLER_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A masterful heist thriller.`,
        "genre": movie.genre,
        "datePublished": movie.year.toString(),
        "director": { "@type": "Person", "name": movieInfo?.director || "Acclaimed Director" },
        "actor": movieInfo?.cast?.map(actor => ({ "@type": "Person", "name": actor })) || [],
        "duration": `PT${movie.runtime}M`,
        "image": posterUrl,
        "aggregateRating": { 
            "@type": "AggregateRating", 
            "ratingValue": movieInfo?.rating || 7.5, 
            "bestRating": 10, 
            "worstRating": 1, 
            "ratingCount": movieInfo?.audienceScore || 100 
        }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ 
        "@type": "Question", 
        "name": faq.question, 
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer } 
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
export const COMPLETE_HEIST_THRILLER_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

// Export named export for compatibility if needed
export const HEIST_THRILLER_DATABASE = COMPLETE_HEIST_THRILLER_DATABASE;

export default COMPLETE_HEIST_THRILLER_DATABASE;