// utils/marriageCrisisMovieData.js - MARRIAGE CRISIS COLLECTION DATA ✅
// Movies exploring the breakdown, complexity, and emotional realities of marriage.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY', // Use env var for best practice
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 60243, "imdbID": "tt1832382", "Title": "A Separation", "year": 2011, "genre": "Drama", "runtime": 123, "rank": 1 },
    { "tmdbId": 133919, "imdbID": "tt0070644", "Title": "Scenes from a Marriage", "year": 1973, "genre": "Drama", "runtime": 167, "rank": 2 }, // Using the feature film cut runtime
    { "tmdbId": 492188, "imdbID": "tt7653254", "Title": "Marriage Story", "year": 2019, "genre": "Drama", "runtime": 137, "rank": 3 },
    { "tmdbId": 132344, "imdbID": "tt2209418", "Title": "Before Midnight", "year": 2013, "genre": "Romance", "runtime": 109, "rank": 4 },
    { "tmdbId": 12102, "imdbID": "tt0079417", "Title": "Kramer vs. Kramer", "year": 1979, "genre": "Drama", "runtime": 105, "rank": 5 },
    { "tmdbId": 14, "imdbID": "tt0169547", "Title": "American Beauty", "year": 1999, "genre": "Drama", "runtime": 122, "rank": 6 },
    { "tmdbId": 38731, "imdbID": "tt0078444", "Title": "An Unmarried Woman", "year": 1978, "genre": "Drama", "runtime": 124, "rank": 7 },
    { "tmdbId": 46705, "imdbID": "tt1120985", "Title": "Blue Valentine", "year": 2010, "genre": "Romance", "runtime": 112, "rank": 8 },
    { "tmdbId": 50646, "imdbID": "tt1570728", "Title": "Crazy, Stupid, Love.", "year": 2011, "genre": "Comedy", "runtime": 118, "rank": 9 },
    { "tmdbId": 4148, "imdbID": "tt0959337", "Title": "Revolutionary Road", "year": 2008, "genre": "Drama", "runtime": 119, "rank": 10 }
];

// ✅ STRATEGIC QUOTES
export const STRATEGIC_QUOTES = {
    60243: "Does he even know you are his son?", // A Separation
    133919: "Sometimes it grieves me that I have never loved anyone. I don't think I've ever been loved either.", // Scenes from a Marriage
    492188: "I never really came alive for myself; I was just feeding his aliveness.", // Marriage Story
    132344: "If you want true love, then this is it. This is real life. It's not perfect, but it's real.", // Before Midnight
    12102: "I'm his mother.", // Kramer vs. Kramer
    14: "It's a great thing when you realize you still have the ability to surprise yourself.", // American Beauty
    38731: "You're a very independent woman.", // An Unmarried Woman
    46705: "I'm so out of love with you.", // Blue Valentine
    50646: "I will never stop trying. Because when you find the one... you never give up.", // Crazy, Stupid, Love.
    4148: "It takes backbone to lead the life you want, Frank." // Revolutionary Road
};

// ✅ SENSITIVE TIMELINES (Crucial for High-Volume Timestamps Search)
export const SENSITIVE_TIMELINES = {
    // 1. A Separation
    60243: { scenes: [] }, 
    
    // 2. Scenes from a Marriage
    133919: { 
        scenes: [
            { start: "1:04:20", end: "1:04:35", type: "Partial Nudity (Man)", severity: "Moderate" }
        ] 
    },
    
    // 3. Marriage Story
    492188: { scenes: [] }, 
    
    // 4. Before Midnight
    132344: { 
        scenes: [
            { start: "1:07:09", end: "1:13:32", type: "Nudity (Woman)", severity: "High" }
        ] 
    },
    
    // 5. Kramer vs. Kramer
    12102: { 
        scenes: [
            { start: "0:44:18", end: "0:45:08", type: "Nudity (Woman)", severity: "High" } 
        ] 
    },
    
// 6. American Beauty
    14: { 
        scenes: [
            { start: "0:02:01", end: "0:02:14", type: "Sexual Content", severity: "Moderate" },
            { start: "0:03:22", end: "0:03:24", type: "Nudity (Woman / Image)", severity: "High" },
            { start: "0:19:30", end: "0:20:07", type: "Partial Nudity (Woman)", severity: "Moderate" },
            { start: "0:40:38", end: "0:40:42", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "0:42:15", end: "0:42:50", type: "Sexual Content", severity: "Moderate" },
            { start: "0:55:45", end: "0:56:00", type: "Sex", severity: "High" },
            { start: "1:10:43", end: "1:11:00", type: "Nudity (Woman)", severity: "High" },
            { start: "1:12:11", end: "1:12:14", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "1:47:18", end: "1:48:18", type: "Nudity (Woman)", severity: "High" }
        ] 
    },
    
    // 7. An Unmarried Woman
    38731: { 
        scenes: [
            { start: "0:12:30", end: "0:13:10", type: "Nudity (Woman)", severity: "High" },
            { start: "1:13:15", end: "1:15:18", type: "Nudity (Woman)", severity: "High" }
        ] 
    },
    
    // 8. Blue Valentine
    46705: { 
        scenes: [
            { start: "0:30:00", end: "0:30:30", type: "Sex", severity: "High" },
            { start: "0:37:09", end: "0:38:45", type: "Sex & Nudity", severity: "High" },
            { start: "0:58:50", end: "1:00:02", type: "Sex & Nudity", severity: "High" },
            { start: "1:02:52", end: "1:03:40", type: "Sex", severity: "High" }
        ] 
    },
    
    // 9. Crazy, Stupid, Love.
    50646: { scenes: [] }, 
    
    // 10. Revolutionary Road
    4148: { 
        scenes: [
            { start: "0:23:47", end: "0:23:52", type: "Nudity (Woman)", severity: "High" },
            { start: "0:42:50", end: "0:43:30", type: "Sex", severity: "Moderate" },
            { start: "1:17:25", end: "1:18:02", type: "Sex", severity: "Moderate" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    60243: "https://m.media-amazon.com/images/M/MV5BMTg0NjE5ODA5NDl5BMl5BanBnXkFtZTgwNjUyNDAwMTI@._V1_SX500.jpg",
    133919: "https://m.media-amazon.com/images/M/MV5BNTI2MWZlNDAtNjVkMC00MDRmLTk2MGYtYjBhMTA4YjlkYmMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    492188: "https://m.media-amazon.com/images/M/MV5BZTE0NjMyMjUtNWY4My00ODUyLTg0YjYtYWI5MGM2YzFlZDBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    132344: "https://m.media-amazon.com/images/M/MV5BMTQxMzM1MDUwN15BMl5BanBnXkFtZTgwNTExNzcxMDE@._V1_SX500.jpg",
    12102: "https://m.media-amazon.com/images/M/MV5BMTQxNzcyMTMzOF5BMl5BanBnXkFtZTgwMDM2ODc5NDM@._V1_SX500.jpg",
    14: "https://m.media-amazon.com/images/M/MV5BMjA5MjgwNTkzMl5BMl5BanBnXkFtZTYwNTc0NTg5._V1_SX500.jpg",
    38731: "https://m.media-amazon.com/images/M/MV5BYzA3MDcxMjEtMjMyOC00ZmFhLTlhOTctMzRjYTgwZDJmZDlhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX500.jpg",
    46705: "https://m.media-amazon.com/images/M/MV5BMTc5NTA3MDM1M15BMl5BanBnXkFtZTcwMTQyNjYyMQ@@._V1_SX500.jpg",
    50646: "https://m.media-amazon.com/images/M/MV5BMTg0NjE5ODA5NDl5BMl5BanBnXkFtZTgwNjUyNDAwMTI@._V1_SX500.jpg",
    4148: "https://m.media-amazon.com/images/M/MV5BODg1ZTgyNGEtNWUxYS00NTRiLTgxMzItY2MxOWFhMjBkNDdlXkEyXkFqcGdeQXVyMTE0MzQwOTg2._V1_SX500.jpg"
};

// ✅ Custom metric for this collection: 'emotionalWeight' and 'realismScore'
const createMarriageData = (data) => ({
    emotionalWeight: 90, 
    realismScore: 85,
    complexityLevel: "HIGH",
    dominantColor: "#334155", // Slate Default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. A Separation
    60243: createMarriageData({ 
        emotionalWeight: 98, realismScore: 100, complexityLevel: "MASTERPIECE", 
        dominantColor: "#0f172a", rating: 8.3, criticsScore: 99, audienceScore: 92, director: "Asghar Farhadi", 
        cast: ["Peyman Moaadi", "Leila Hatami", "Sareh Bayat"], boxOffice: "$24.4 million", budget: "$500,000", 
        dna: { "Drama": 80, "Thriller": 20 },
        scenes: [
            { time: 5, intensity: 75, label: "The Judge" }, 
            { time: 45, intensity: 90, label: "The Push" }, 
            { time: 80, intensity: 95, label: "The Hospital" }, 
            { time: 105, intensity: 100, label: "The Oath" }, // PRIMARY PEAK
            { time: 118, intensity: 85, label: "The Hallway" } 
        ],
        synopsis: "A married couple is faced with a difficult decision: to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent. A masterful, tense exploration of class, religion, and the agonizing complexities of divorce.",
        themes: ["Moral Ambiguity", "Class Divide", "Justice vs Truth"]
    }),

    // 2. Scenes from a Marriage
    133919: createMarriageData({ 
        emotionalWeight: 100, realismScore: 98, complexityLevel: "EPIC", 
        dominantColor: "#7f1d1d", rating: 8.3, criticsScore: 92, audienceScore: 88, director: "Ingmar Bergman", 
        cast: ["Liv Ullmann", "Erland Josephson"], boxOffice: "N/A", budget: "$150,000", 
        dna: { "Drama": 100 },
        scenes: [
            { time: 30, intensity: 70, label: "The Dinner Party" }, 
            { time: 85, intensity: 95, label: "The Confession" }, // PRIMARY PEAK
            { time: 120, intensity: 85, label: "The Separation" }, 
            { time: 150, intensity: 100, label: "The Violent Argument" }, 
            { time: 160, intensity: 80, label: "The Cabin" } 
        ],
        synopsis: "Ingmar Bergman's definitive examination of matrimony chronicles the decade-long disintegration of a seemingly perfect marriage. It is a grueling, brutally honest portrait of love, resentment, and the impossibility of fully disconnecting from a partner.",
        themes: ["Emotional Warfare", "The Illusion of Perfection", "Codependency"]
    }),

    // 3. Marriage Story
    492188: createMarriageData({ 
        emotionalWeight: 95, realismScore: 92, complexityLevel: "EMOTIONAL", 
        dominantColor: "#1e3a8a", rating: 7.9, criticsScore: 94, audienceScore: 85, director: "Noah Baumbach", 
        cast: ["Adam Driver", "Scarlett Johansson", "Laura Dern"], boxOffice: "$333,333", budget: "$18 million", 
        dna: { "Drama": 80, "Comedy": 20 },
        scenes: [
            { time: 5, intensity: 70, label: "What I Love About..." }, 
            { time: 55, intensity: 85, label: "The Lawyers Meet" }, 
            { time: 85, intensity: 90, label: "The Halloween Custody" }, 
            { time: 105, intensity: 100, label: "The Apartment Fight" }, // PRIMARY PEAK
            { time: 130, intensity: 95, label: "Tying the Shoe" } 
        ],
        synopsis: "An incisive and compassionate look at a marriage breaking up and a family staying together. Noah Baumbach captures the devastating bureaucratic nightmare of divorce and the lingering affection that survives the legal warfare.",
        themes: ["Divorce Industry", "Loss of Identity", "Co-Parenting"]
    }),

    // 4. Before Midnight
    132344: createMarriageData({ 
        emotionalWeight: 92, realismScore: 95, complexityLevel: "PHILOSOPHICAL", 
        dominantColor: "#ca8a04", rating: 7.9, criticsScore: 98, audienceScore: 82, director: "Richard Linklater", 
        cast: ["Ethan Hawke", "Julie Delpy"], boxOffice: "$23.3 million", budget: "$3 million", 
        dna: { "Romance": 50, "Drama": 50 },
        scenes: [
            { time: 15, intensity: 60, label: "The Car Ride" }, 
            { time: 45, intensity: 75, label: "The Dinner Table" }, 
            { time: 70, intensity: 85, label: "Entering the Hotel" }, 
            { time: 85, intensity: 100, label: "The Argument Ignites" }, // PRIMARY PEAK
            { time: 102, intensity: 90, label: "The Time Traveler" } 
        ],
        synopsis: "Nearly two decades after their first meeting, Jesse and Celine confront the resentment, exhaustion, and deep love of their long-term partnership during a vacation in Greece. A masterclass in dialogue and the reality of sustaining a romance.",
        themes: ["Aging Romance", "Resentment", "Choosing to Stay"]
    }),

    // 5. Kramer vs. Kramer
    12102: createMarriageData({ 
        emotionalWeight: 88, realismScore: 85, complexityLevel: "HEARTWARMING", 
        dominantColor: "#047857", rating: 7.8, criticsScore: 88, audienceScore: 82, director: "Robert Benton", 
        cast: ["Dustin Hoffman", "Meryl Streep", "Justin Henry"], boxOffice: "$106.3 million", budget: "$8 million", 
        dna: { "Drama": 100 },
        scenes: [
            { time: 10, intensity: 80, label: "Joanna Leaves" }, 
            { time: 25, intensity: 70, label: "Making French Toast" }, 
            { time: 65, intensity: 90, label: "The Playground Fall" }, 
            { time: 85, intensity: 100, label: "The Courtroom" }, // PRIMARY PEAK
            { time: 100, intensity: 95, label: "The Final French Toast" } 
        ],
        synopsis: "A career-obsessed Manhattan advertising executive is forced to learn how to be a father when his wife walks out. The film shifted cultural conversations around gender roles, divorce, and what makes a fit parent.",
        themes: ["Fatherhood", "Gender Roles", "Custody Battles"]
    }),

    // 6. American Beauty
    14: createMarriageData({ 
        emotionalWeight: 85, realismScore: 70, complexityLevel: "SATIRE", 
        dominantColor: "#be123c", rating: 8.3, criticsScore: 87, audienceScore: 93, director: "Sam Mendes", 
        cast: ["Kevin Spacey", "Annette Bening", "Thora Birch"], boxOffice: "$356.3 million", budget: "$15 million", 
        dna: { "Drama": 70, "Comedy": 30 },
        scenes: [
            { time: 20, intensity: 65, label: "The Dinner Table Rebellion" }, 
            { time: 55, intensity: 80, label: "The Drive-Thru" }, 
            { time: 85, intensity: 90, label: "Carolyn's Breakdown" }, 
            { time: 105, intensity: 95, label: "The Couch Confrontation" }, 
            { time: 115, intensity: 100, label: "The Climax" } // PRIMARY PEAK
        ],
        synopsis: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend. A dark, satirical look at the emptiness of the American Dream and the facade of the perfect suburban marriage.",
        themes: ["Suburban Desperation", "Mid-life Crisis", "The Facade of Normalcy"]
    }),

    // 7. An Unmarried Woman
    38731: createMarriageData({ 
        emotionalWeight: 82, realismScore: 88, complexityLevel: "LIBERATING", 
        dominantColor: "#b45309", rating: 7.2, criticsScore: 90, audienceScore: 70, director: "Paul Mazursky", 
        cast: ["Jill Clayburgh", "Alan Bates", "Michael Murphy"], boxOffice: "$22 million", budget: "N/A", 
        dna: { "Drama": 60, "Comedy": 40 },
        scenes: [
            { time: 15, intensity: 85, label: "The Street Confession" }, // PRIMARY PEAK
            { time: 40, intensity: 75, label: "The Therapist" }, 
            { time: 65, intensity: 80, label: "The Blind Date" }, 
            { time: 95, intensity: 88, label: "Meeting Saul" }, 
            { time: 118, intensity: 90, label: "The Final Choice" } 
        ],
        synopsis: "When her husband of 16 years abruptly leaves her for a younger woman, a wealthy New Yorker must rebuild her life and rediscover her identity. A landmark feminist film that explores the terrifying, exhilarating freedom of sudden independence.",
        themes: ["Feminist Awakening", "Starting Over", "Independence"]
    }),

    // 8. Blue Valentine
    46705: createMarriageData({ 
        emotionalWeight: 96, realismScore: 94, complexityLevel: "TRAGIC", 
        dominantColor: "#1e40af", rating: 7.3, criticsScore: 87, audienceScore: 75, director: "Derek Cianfrance", 
        cast: ["Ryan Gosling", "Michelle Williams"], boxOffice: "$16.6 million", budget: "$1 million", 
        dna: { "Romance": 50, "Drama": 50 },
        scenes: [
            { time: 25, intensity: 70, label: "The Tap Dance (Past)" }, 
            { time: 55, intensity: 85, label: "The Future Room (Present)" }, 
            { time: 80, intensity: 95, label: "The Clinic Argument" }, 
            { time: 95, intensity: 100, label: "The Kitchen Fight" }, // PRIMARY PEAK
            { time: 108, intensity: 98, label: "Walking Away" } 
        ],
        synopsis: "A devastatingly raw portrait of a relationship, shifting back and forth in time between the magical, hopeful days of courtship and the bitter, suffocating reality of a marriage in freefall. A painful look at how love fades.",
        themes: ["Fading Love", "Lost Potential", "Toxic Dynamics"]
    }),

    // 9. Crazy, Stupid, Love.
    50646: createMarriageData({ 
        emotionalWeight: 75, realismScore: 70, complexityLevel: "HEARTWARMING", 
        dominantColor: "#0ea5e9", rating: 7.4, criticsScore: 79, audienceScore: 78, director: "Glenn Ficarra, John Requa", 
        cast: ["Steve Carell", "Ryan Gosling", "Julianne Moore", "Emma Stone"], boxOffice: "$145 million", budget: "$50 million", 
        dna: { "Comedy": 70, "Romance": 30 },
        scenes: [
            { time: 5, intensity: 75, label: "The Cuckold Confession" }, 
            { time: 35, intensity: 80, label: "The Makeover" }, 
            { time: 65, intensity: 85, label: "The Dirty Dancing Lift" }, 
            { time: 95, intensity: 100, label: "The Backyard Brawl" }, // PRIMARY PEAK
            { time: 110, intensity: 90, label: "The Graduation Speech" } 
        ],
        synopsis: "After his wife asks for a divorce, a middle-aged man seeks the help of a slick ladies' man to rediscover his manhood. A sharply written, intertwining ensemble comedy that explores soulmates and fighting for a broken marriage.",
        themes: ["Mid-life Reinvention", "Soulmates", "Fighting for Love"]
    }),

    // 10. Revolutionary Road
    4148: createMarriageData({ 
        emotionalWeight: 94, realismScore: 88, complexityLevel: "TRAGIC", 
        dominantColor: "#475569", rating: 7.3, criticsScore: 67, audienceScore: 71, director: "Sam Mendes", 
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Michael Shannon"], boxOffice: "$76.3 million", budget: "$35 million", 
        dna: { "Drama": 80, "Romance": 20 },
        scenes: [
            { time: 10, intensity: 85, label: "The Highway Fight" }, 
            { time: 45, intensity: 75, label: "The Paris Plan" }, 
            { time: 75, intensity: 90, label: "John Givings' Visit" }, 
            { time: 95, intensity: 100, label: "The Breakfast Fight" }, // PRIMARY PEAK
            { time: 110, intensity: 95, label: "The Quiet Morning" } 
        ],
        synopsis: "A seemingly perfect couple in 1950s Connecticut struggles to cope with their personal problems and the suffocating conformity of their suburban environment. A bleak, powerful look at crushed dreams and the terror of an ordinary life.",
        themes: ["Suburban Conformity", "Crushed Dreams", "Desperation"]
    })
};

// 🎬 MARRIAGE CRISIS FAQS - (100% SEO SAFE, CRITICAL ANALYSIS ONLY)
export const MARRIAGE_CRISIS_MOVIE_FAQS = {
    'A Separation': [
        { question: "Who is really at fault in A Separation?", answer: "The film's brilliance lies in its absolute moral ambiguity. Farhadi refuses to create villains; every character is acting out of a desperate need to protect their family, yet their conflicting truths create a tragedy where everyone is equally right and equally wrong." },
        { question: "Why is the ending of A Separation left open?", answer: "The final scene leaves the daughter, Termeh, to decide which parent she will live with. By keeping the audience outside the courtroom doors, the film forces us to sit with the unbearable weight of divorce and the impossible choices it forces upon children." },
        { question: "How does class structure drive the conflict?", answer: "The legal battle is deeply intertwined with class division. Nader and Simin represent the secular, middle-class intelligentsia, while Razieh and Hojjat represent the deeply religious, struggling working class. The film shows how the justice system navigates—and often fails—these divides." },
        { question: "What is the significance of the grandfather's Alzheimer's?", answer: "The grandfather acts as the silent, tragic anchor of the story. His inability to remember the past mirrors the adults' inability to agree on their shared reality, while his physical deterioration represents the slow decay of the family unit itself." }
    ],
    'Scenes from a Marriage': [
        { question: "Did the TV series really cause a spike in divorce rates?", answer: "While often cited as a myth, divorce rates in Sweden did notably increase the year the miniseries aired. The show's brutal honesty forced many couples to confront the unspoken resentments and lack of communication in their own 'perfect' marriages." },
        { question: "Why does Johan leave Marianne so abruptly?", answer: "Johan's departure isn't truly abrupt; it is the breaking point of a marriage that has been dead for years. He leaves not just for Paula, but to escape the suffocating, polite mediocrity of a life built entirely on societal expectations rather than genuine passion." },
        { question: "What makes their post-divorce relationship so complex?", answer: "Bergman illustrates the paradox of long-term connection: Johan and Marianne are terrible spouses but inextricably linked soulmates. They find more honesty, passion, and genuine understanding in their illicit affair post-divorce than they ever did while legally married." },
        { question: "Why is the film shot with so many extreme close-ups?", answer: "The claustrophobic camerawork traps the audience inside the emotional warfare. By isolating the characters' faces, Bergman forces the viewer to focus entirely on the microscopic shifts in expression—the lies, the pain, and the sudden flashes of cruelty." }
    ],
    'Marriage Story': [
        { question: "Is Marriage Story biased toward the husband?", answer: "Director Noah Baumbach attempts to balance the narrative, showing Charlie's creative narcissism and Nicole's stifled identity. However, because Charlie is the one fighting to maintain access to his son across state lines, the film naturally aligns with his bureaucratic struggle, leading some to view it as inherently sympathetic to him." },
        { question: "What is the purpose of the intense apartment fight scene?", answer: "The fight is a masterclass in the escalation of resentment. It demonstrates how divorce weaponizes intimate knowledge; both characters use their deepest understanding of each other to inflict maximum emotional damage, culminating in a breakdown that neither actually wanted." },
        { question: "How does the legal system escalate their divorce?", answer: "The film serves as a critique of the divorce industry. Nicole and Charlie initially want an amicable split, but their lawyers (representing the adversarial legal system) force them to define their relationship entirely through aggressive financial and personal grievances, destroying their remaining goodwill." },
        { question: "What does the final shoelace scene signify?", answer: "When Nicole ties Charlie's shoe, it is a quiet, devastating moment of residual intimacy. It proves that while the marriage is legally dead and the war is over, the muscle memory of caring for one another permanently remains." }
    ],
    'Before Midnight': [
        { question: "Why is Before Midnight so much darker than the prequels?", answer: "The first two films were about the romantic fantasy of potential. Midnight is about the grueling reality of maintenance. After nine years of marriage, the mystery is gone, replaced by the exhaustion of parenting, career sacrifices, and the slow accumulation of daily resentments." },
        { question: "What is the core of Jesse and Celine's argument?", answer: "The argument is a battle over sacrifice and identity. Celine feels her career and autonomy have been consumed by motherhood and Jesse's artistic ambitions. Jesse feels his attempts to be a supportive partner are constantly undermined by Celine's neuroses and dissatisfaction." },
        { question: "Why does Celine say she doesn't love Jesse anymore?", answer: "In the heat of the hotel fight, Celine uses the ultimate emotional nuclear weapon to hurt him. It is less a statement of objective truth and more an expression of total exhaustion—a desperate attempt to break the cycle of their argument by ending the relationship entirely." },
        { question: "What does the 'time traveler' ending mean?", answer: "Jesse's 'time traveler' bit is a refusal to let the marriage die. He uses humor and fantasy (a callback to how they met) to remind Celine that while reality is deeply flawed, their connection is rare and worth the agonizing work required to sustain it." }
    ],
    'Kramer vs. Kramer': [
        { question: "Why does Joanna leave her family?", answer: "Joanna leaves because she feels entirely erased. In 1979, the film highlighted the burgeoning feminist realization that a woman's identity should not be entirely consumed by her roles as a wife and mother, especially to a husband who completely ignores her emotional needs." },
        { question: "How does the French toast scene show Ted's growth?", answer: "At the start, Ted burns the French toast, symbolizing his complete ineptitude and detachment from his son's life. At the end, they make it together flawlessly in silence, demonstrating that Ted has fully transformed into a capable, attentive, and loving primary caregiver." },
        { question: "Was the film groundbreaking for its time?", answer: "Yes. It fundamentally challenged the societal assumption that mothers are inherently better parents. It showed a father learning to nurture and a mother demanding personal autonomy, bringing complex, nuanced gender politics into mainstream cinema." },
        { question: "Why does Joanna give up custody at the end?", answer: "Despite winning the legal battle, Joanna realizes that taking Billy away from the home and the father he has bonded with over the past 18 months would be devastating for the child. Her sacrifice is an act of profound maternal love." }
    ],
    'American Beauty': [
        { question: "What does the plastic bag scene mean?", answer: "The dancing plastic bag represents finding profound, transcendent beauty in the mundane and the discarded. In a film about people desperate to maintain a facade of perfection, it argues that true meaning exists in the simple, authentic moments of everyday life." },
        { question: "Why does Lester spare Angela at the end?", answer: "Throughout the film, Angela represents Lester's desire to reclaim his lost youth. But when she admits she is a virgin, the illusion shatters. He suddenly sees her not as a fantasy object, but as a vulnerable child, prompting him to finally act like a mature adult." },
        { question: "What is the film's critique of the American Dream?", answer: "The Burnham family has the perfect house, the perfect lawn, and stable jobs—but they are deeply miserable. The film exposes the suburban American Dream as a hollow, soul-crushing pursuit of materialism that destroys genuine human connection." },
        { question: "Who really killed Lester Burnham?", answer: "While Colonel Fitts pulls the trigger, Lester's death is the inevitable result of his radical honesty. By deciding to stop living a lie and exposing the hypocrisies of everyone around him, he inadvertently triggers the insecurities of a deeply closeted, violent man." }
    ],
    'An Unmarried Woman': [
        { question: "Why is the scene where Erica cries on the street so famous?", answer: "It is a masterclass in unvarnished emotional realism. After her husband confesses his affair, she vomits and cries on the streets of New York. It stripped away the polished, stoic Hollywood reaction to divorce, showing the messy, visceral physical reaction to sudden heartbreak." },
        { question: "What role does the therapist play in Erica's journey?", answer: "The therapist helps Erica navigate the transition from 'we' to 'I'. Instead of focusing on getting her husband back or finding a new man, the therapy sessions center entirely on Erica confronting her own anger, rediscovering her sexuality, and claiming her autonomy." },
        { question: "Why doesn't Erica stay with Saul at the end?", answer: "Saul is loving and supportive, but he ultimately wants Erica to conform to his lifestyle and move with him. By choosing to stay in New York alone, Erica proves that her ultimate victory isn't finding a new romance, but achieving absolute independence." },
        { question: "How did the film redefine the 'divorcee' trope?", answer: "Before this film, divorced women in cinema were often portrayed as tragic, bitter, or desperate spinsters. Mazursky framed divorce not as an end, but as a thrilling, liberating beginning, making Erica a feminist icon for a generation." }
    ],
    'Blue Valentine': [
        { question: "Why is the timeline fractured in Blue Valentine?", answer: "The intercutting between their magical courtship and their toxic demise creates a devastating emotional contrast. By placing the hope of the past directly next to the bitterness of the present, the film forces the audience to mourn the death of the relationship in real-time." },
        { question: "What is Dean's fatal flaw in the marriage?", answer: "Dean is intensely romantic but deeply unambitious. He believes that simply loving Cindy is enough. He refuses to grow or address his alcoholism, failing to realize that a marriage requires partnership and forward momentum, not just affection." },
        { question: "What is Cindy's fatal flaw?", answer: "Cindy entered the marriage seeking a savior and stability after a trauma, rather than an equal partner. As she outgrows Dean professionally and emotionally, her initial gratitude turns into a suffocating, icy resentment that she cannot hide." },
        { question: "Why is the 'Future Room' so depressing?", answer: "The cheap, sci-fi-themed motel room is meant to be an escape to reignite their passion. Instead, its artificial, cold, windowless environment traps them with their problems. The bleak setting acts as an incubator for their final, inevitable implosion." }
    ],
    'Crazy, Stupid, Love.': [
        { question: "How does Cal transform throughout the movie?", answer: "Cal begins as a defeated, emasculated husband who has completely given up on himself. Under Jacob's tutelage, he reclaims his confidence and physical appearance, but ultimately realizes that his true 'manhood' comes from his unwavering dedication to his wife." },
        { question: "What is the ultimate message of the film?", answer: "Despite exploring infidelity, divorce, and pick-up artistry, the film is aggressively romantic. It posits that while 'soulmates' will inevitably hurt each other, true love is defined by the willingness to continually fight for the relationship, no matter how broken it seems." },
        { question: "How does the 'Backyard Brawl' tie the themes together?", answer: "The climax masterfully weaves all the disparate plotlines into a single, chaotic confrontation. It forces every character to abandon their secrets and facades, resulting in a moment of absolute, hilarious honesty that clears the air for healing." },
        { question: "Why does Emily cheat on Cal?", answer: "Emily's infidelity isn't born of malice, but of profound stagnation. Cal had become complacent, treating their marriage as a given rather than a living relationship. Her affair with David Lindhagen was a desperate, destructive attempt to feel seen and alive again." }
    ],
    'Revolutionary Road': [
        { question: "Why do Frank and April want to move to Paris?", answer: "Paris represents their desperate need to believe they are 'special.' It is a fantasy escape hatch from the crushing, cookie-cutter mediocrity of 1950s American suburbia and the realization that they have become the exact boring people they once mocked." },
        { question: "What role does John Givings play in the story?", answer: "John, the mathematically brilliant but institutionalized son of their neighbor, acts as the film's 'truth-teller.' Because he is outside societal norms, he is the only character who voices the ugly, undeniable truth about Frank's cowardice and the emptiness of their lives." },
        { question: "Why does Frank ultimately sabotage the Paris plan?", answer: "Frank is offered a promotion at a job he claims to hate. Ultimately, the comfort of financial security, the validation of corporate success, and the fear of the unknown outweigh his desire for an extraordinary life. He chooses the golden cage." },
        { question: "What makes the final breakfast scene so terrifying?", answer: "After a night of brutal, hateful arguing, April makes Frank a perfect 1950s breakfast with a serene, hollow smile. The absolute silence and forced normalcy are far more terrifying than the screaming, signaling that April has completely surrendered her soul before her tragic end." }
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
            description: scene.description || '',
            severity: scene.severity || 'Moderate'
        }))
    };
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

// 🔥 6. THE KEYWORD BRIDGE
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

// 🔥 NEW: HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    
    // User's flawless logic: 2+ Extreme means the whole movie is Extreme. 
    // Otherwise, we cap the warning at High.
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


    const staticFaqs = MARRIAGE_CRISIS_MOVIE_FAQS[movie.Title] ? [...MARRIAGE_CRISIS_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = MARRIAGE_CRISIS_MOVIE_FAQS[movieTitle] ? [...MARRIAGE_CRISIS_MOVIE_FAQS[movieTitle]] : [];
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
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
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