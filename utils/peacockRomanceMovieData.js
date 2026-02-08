// utils/peacockRomanceMovieData.js - PEACOCK ROMANCE COLLECTION DATA
// Emotional Resonance, Chemistry, and Cinematic Legacy

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 122906, "imdbID": "tt2194499", "Title": "About Time", "year": 2013, "genre": "Romance", "runtime": 123, "rank": 1 },
    { "tmdbId": 4348, "imdbID": "tt0414387", "Title": "Pride & Prejudice", "year": 2005, "genre": "Romance", "runtime": 129, "rank": 2 },
    { "tmdbId": 509, "imdbID": "tt0125439", "Title": "Notting Hill", "year": 1999, "genre": "Romance", "runtime": 124, "rank": 3 },
    { "tmdbId": 251, "imdbID": "tt0099653", "Title": "Ghost", "year": 1990, "genre": "Romance", "runtime": 127, "rank": 4 },
    { "tmdbId": 1934, "imdbID": "tt0138097", "Title": "Shakespeare in Love", "year": 1998, "genre": "Romance", "runtime": 123, "rank": 5 },
    { "tmdbId": 51828, "imdbID": "tt1563738", "Title": "One Day", "year": 2011, "genre": "Romance", "runtime": 107, "rank": 6 },
    { "tmdbId": 937287, "imdbID": "tt16426418", "Title": "Challengers", "year": 2024, "genre": "Drama", "runtime": 131, "rank": 7 },
    { "tmdbId": 293863, "imdbID": "tt1655441", "Title": "The Age of Adaline", "year": 2015, "genre": "Romance", "runtime": 112, "rank": 8 },
    { "tmdbId": 9919, "imdbID": "tt0251127", "Title": "How to Lose a Guy in 10 Days", "year": 2003, "genre": "Comedy", "runtime": 116, "rank": 9 },
    { "tmdbId": 375262, "imdbID": "tt5083738", "Title": "The Favourite", "year": 2018, "genre": "Drama", "runtime": 119, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Heartbreak, Intimacy & Trauma)
export const SENSITIVE_TIMELINES = {
    // 1. About Time
    122906: { scenes: [] }, 

    // 2. Pride & Prejudice
    4348: { scenes: [] }, 

    // 3. Notting Hill
    509: { scenes: [] }, 

    // 4. Ghost
    251: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Mugging/Murder", severity: "High" },
            { start: "1:45:00", end: "1:50:00", type: "Violent Death", severity: "Moderate" } 
        ] 
    },

    // 5. Shakespeare in Love
    1934: { scenes: [] }, 

    // 6. One Day
    51828: { 
        scenes: [
            { start: "1:35:00", end: "1:38:00", type: "Accident/Death", severity: "High" } 
        ] 
    },

    // 7. Challengers
    937287: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Sexual Content", severity: "Moderate" } 
        ] 
    },

    // 8. The Age of Adaline
    293863: { 
        scenes: [
            { start: "0:10:00", end: "0:12:00", type: "Car Accident", severity: "Moderate" } 
        ] 
    },

    // 9. How to Lose a Guy in 10 Days
    9919: { scenes: [] }, 

    // 10. The Favourite
    375262: { 
        scenes: [
            { start: "0:30:00", end: "0:35:00", type: "Psychological Manipulation", severity: "Moderate" },
            { start: "1:10:00", end: "1:15:00", type: "Sexual Content", severity: "Moderate" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    122906: "https://image.tmdb.org/t/p/w500/iL1c1e40wA47P3a522t3N92W08L.jpg",
    4348: "https://image.tmdb.org/t/p/w500/vM1wVse49S4yY7c1y2Q4y2.jpg",
    509: "https://image.tmdb.org/t/p/w500/hH5Wp6P5y4y4y4y4.jpg",
    251: "https://image.tmdb.org/t/p/w500/w9kR4q7.jpg",
    1934: "https://image.tmdb.org/t/p/w500/y4y4y4y4.jpg",
    51828: "https://image.tmdb.org/t/p/w500/y4y4y4y4.jpg",
    937287: "https://image.tmdb.org/t/p/w500/challengers.jpg",
    293863: "https://image.tmdb.org/t/p/w500/adaline.jpg",
    9919: "https://image.tmdb.org/t/p/w500/howtolose.jpg",
    375262: "https://image.tmdb.org/t/p/w500/favourite.jpg"
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
    // 1. About Time
    122906: createMovieData({ 
        emotionalIntensity: 95, 
        chemistryScore: 92, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#ea580c", 
        rating: 7.8, criticsScore: 70, audienceScore: 91, director: "Richard Curtis", 
        cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"], boxOffice: "$87 million", budget: "$12 million", 
        dna: { "Romance": 50, "Fantasy": 20, "Family": 30 }, 
        scenes: [
            { time: 15, intensity: 35, label: "The Reveal", color: "#fdba74" },
            { time: 45, intensity: 75, label: "Blind Date", color: "#f97316" },
            { time: 85, intensity: 82, label: "The Proposal", color: "#ea580c" },
            { time: 100, intensity: 90, label: "Father's Secret", color: "#c2410c" },
            { time: 115, intensity: 95, label: "The Final Walk", color: "#7c2d12" }
        ],
        synopsis: "At the age of 21, Tim Lake discovers he can travel in time. Deciding to use his gift to find love, Tim moves to London and meets Mary. Through temporal do-overs, he crafts the perfect courtship, only to realize that a 'perfect' life is much more complicated than fixing mistakes. A profound meditation on the beauty of the ordinary.",
        themes: ["Time", "Fatherhood", "Appreciation"]
    }),

    // 2. Pride & Prejudice
    4348: createMovieData({ 
        emotionalIntensity: 90, 
        chemistryScore: 100, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#166534", 
        rating: 7.8, criticsScore: 88, audienceScore: 92, director: "Joe Wright", 
        cast: ["Keira Knightley", "Matthew Macfadyen", "Rosamund Pike"], boxOffice: "$121 million", budget: "$28 million", 
        dna: { "Romance": 70, "Drama": 30 }, 
        scenes: [
            { time: 20, intensity: 40, label: "The Assembly Ball", color: "#4ade80" },
            { time: 60, intensity: 85, label: "The Rain Proposal", color: "#16a34a" },
            { time: 90, intensity: 70, label: "Pemberley Visit", color: "#15803d" },
            { time: 105, intensity: 80, label: "Lady Catherine", color: "#166534" },
            { time: 115, intensity: 98, label: "The Dawn Walk", color: "#14532d" }
        ],
        synopsis: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
        themes: ["Class", "Misunderstanding", "Growth"]
    }),

    // 3. Notting Hill
    509: createMovieData({ 
        emotionalIntensity: 80, 
        chemistryScore: 92, 
        complexityLevel: "CHARMING", 
        dominantColor: "#3b82f6", 
        rating: 7.2, criticsScore: 84, audienceScore: 79, director: "Roger Michell", 
        cast: ["Julia Roberts", "Hugh Grant", "Rhys Ifans"], boxOffice: "$363 million", budget: "$42 million", 
        dna: { "Romance": 60, "Comedy": 40 }, 
        scenes: [
            { time: 15, intensity: 50, label: "The Spilled Juice", color: "#60a5fa" },
            { time: 60, intensity: 70, label: "Horse & Hound", color: "#3b82f6" },
            { time: 90, intensity: 95, label: "I'm Just a Girl", color: "#1e3a8a" },
            { time: 100, intensity: 85, label: "The Breakup", color: "#2563eb" },
            { time: 110, intensity: 90, label: "Press Conference", color: "#1d4ed8" }
        ],
        synopsis: "The life of a simple bookshop owner changes when he meets the most famous film star in the world. As they grow closer, they struggle to reconcile their radically different lifestyles in the name of love.",
        themes: ["Fame", "Humility", "Destiny"]
    }),

    // 4. Ghost
    251: createMovieData({ 
        emotionalIntensity: 88, 
        chemistryScore: 94, 
        complexityLevel: "ICONIC", 
        dominantColor: "#475569", 
        rating: 7.1, criticsScore: 75, audienceScore: 80, director: "Jerry Zucker", 
        cast: ["Patrick Swayze", "Demi Moore", "Whoopi Goldberg"], boxOffice: "$505 million", budget: "$22 million", 
        dna: { "Romance": 40, "Thriller": 30, "Fantasy": 30 }, 
        scenes: [
            { time: 15, intensity: 70, label: "Pottery Wheel", color: "#94a3b8" },
            { time: 30, intensity: 90, label: "The Death", color: "#0f172a" },
            { time: 60, intensity: 55, label: "Oda Mae", color: "#e11d48" },
            { time: 90, intensity: 75, label: "The Penny", color: "#64748b" },
            { time: 120, intensity: 100, label: "Ditto", color: "#ffffff" }
        ],
        synopsis: "After being murdered, a man's spirit remains trapped on Earth. He discovers his death was no accident and must communicate with his girlfriend through a fake psychic to save her from the same fate.",
        themes: ["Grief", "Afterlife", "Justice"]
    }),

    // 5. Shakespeare in Love
    1934: createMovieData({ 
        emotionalIntensity: 82, 
        chemistryScore: 88, 
        complexityLevel: "WITTY", 
        dominantColor: "#b45309", 
        rating: 7.1, criticsScore: 92, audienceScore: 80, director: "John Madden", 
        cast: ["Gwyneth Paltrow", "Joseph Fiennes", "Geoffrey Rush"], boxOffice: "$289 million", budget: "$25 million", 
        dna: { "Romance": 50, "History": 30, "Comedy": 20 }, 
        scenes: [
            { time: 20, intensity: 40, label: "The Audition", color: "#d97706" },
            { time: 60, intensity: 85, label: "The Balcony", color: "#b45309" },
            { time: 80, intensity: 70, label: "The Boat Ride", color: "#0ea5e9" },
            { time: 100, intensity: 90, label: "Romeo & Juliet", color: "#78350f" },
            { time: 118, intensity: 85, label: "The Parting", color: "#713f12" }
        ],
        synopsis: "A young William Shakespeare, out of ideas and short of cash, meets his ideal woman and is inspired to write one of his most famous plays.",
        themes: ["Inspiration", "Art", "Passion"]
    }),

    // 6. One Day
    51828: createMovieData({ 
        emotionalIntensity: 92, 
        chemistryScore: 85, 
        complexityLevel: "BITTERSWEET", 
        dominantColor: "#1e3a8a", 
        rating: 7.0, criticsScore: 36, audienceScore: 78, director: "Lone Scherfig", 
        cast: ["Anne Hathaway", "Jim Sturgess", "Patricia Clarkson"], boxOffice: "$59 million", budget: "$15 million", 
        dna: { "Romance": 70, "Drama": 30 }, 
        scenes: [
            { time: 10, intensity: 40, label: "July 15th, 1988", color: "#93c5fd" },
            { time: 60, intensity: 65, label: "The Holiday", color: "#3b82f6" },
            { time: 80, intensity: 75, label: "The Argument", color: "#1d4ed8" },
            { time: 90, intensity: 85, label: "Paris Reunion", color: "#2563eb" },
            { time: 100, intensity: 95, label: "The Accident", color: "#1e3a8a" }
        ],
        synopsis: "After spending the night together on the night of their college graduation Dexter and Em are shown each year on the same date to see where they are in their lives. They are sometimes together, sometimes not, on that day.",
        themes: ["Timing", "Friendship", "Destiny"]
    }),

    // 7. Challengers
    937287: createMovieData({ 
        emotionalIntensity: 85, 
        chemistryScore: 98, 
        complexityLevel: "INTENSE", 
        dominantColor: "#65a30d", 
        rating: 7.4, criticsScore: 88, audienceScore: 75, director: "Luca Guadagnino", 
        cast: ["Zendaya", "Josh O'Connor", "Mike Faist"], boxOffice: "$94 million", budget: "$55 million", 
        dna: { "Drama": 40, "Romance": 30, "Sport": 30 }, 
        scenes: [
            { time: 20, intensity: 60, label: "The Hotel Room", color: "#a3e635" },
            { time: 60, intensity: 85, label: "The Injury", color: "#4d7c0f" },
            { time: 80, intensity: 75, label: "Sauna Talk", color: "#3f6212" },
            { time: 100, intensity: 90, label: "Tie-Break", color: "#65a30d" },
            { time: 120, intensity: 98, label: "Match Point", color: "#365314" }
        ],
        synopsis: "Tashi, a tennis player turned coach, has transformed her husband from a mediocre player into a world-famous grand slam champion. To jolt him out of his losing streak, she makes him play a challenger event — close to the lowest level of tournament on the pro tour.",
        themes: ["Competition", "Obsession", "Triangles"]
    }),

    // 8. The Age of Adaline
    293863: createMovieData({ 
        emotionalIntensity: 80, 
        chemistryScore: 85, 
        complexityLevel: "FANTASY", 
        dominantColor: "#a16207", 
        rating: 7.2, criticsScore: 55, audienceScore: 66, director: "Lee Toland Krieger", 
        cast: ["Blake Lively", "Michiel Huisman", "Harrison Ford"], boxOffice: "$65 million", budget: "$25 million", 
        dna: { "Romance": 60, "Fantasy": 30, "Drama": 10 }, 
        scenes: [
            { time: 10, intensity: 70, label: "The Accident", color: "#ca8a04" },
            { time: 40, intensity: 60, label: "New Year's Eve", color: "#d97706" },
            { time: 60, intensity: 85, label: "Meeting William", color: "#a16207" },
            { time: 80, intensity: 75, label: "The Truth", color: "#854d0e" },
            { time: 100, intensity: 90, label: "Letting Go", color: "#713f12" }
        ],
        synopsis: "A young woman, born at the turn of the 20th century, is rendered ageless after an accident. After many solitary years, she meets a man who complicates the eternal life she has settled into.",
        themes: ["Immortality", "Secret", "Time"]
    }),

    // 9. How to Lose a Guy in 10 Days
    9919: createMovieData({ 
        emotionalIntensity: 60, 
        chemistryScore: 95, 
        complexityLevel: "FUN", 
        dominantColor: "#facc15", 
        rating: 6.5, criticsScore: 42, audienceScore: 77, director: "Donald Petrie", 
        cast: ["Kate Hudson", "Matthew McConaughey", "Kathryn Hahn"], boxOffice: "$177 million", budget: "$50 million", 
        dna: { "Comedy": 60, "Romance": 40 }, 
        scenes: [
            { time: 15, intensity: 40, label: "The Bet", color: "#fde047" },
            { time: 45, intensity: 70, label: "The Love Fern", color: "#16a34a" },
            { time: 70, intensity: 85, label: "Family Dinner", color: "#ea580c" },
            { time: 90, intensity: 85, label: "The Reveal", color: "#ca8a04" },
            { time: 110, intensity: 80, label: "Bridge Chase", color: "#3b82f6" }
        ],
        synopsis: "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days.",
        themes: ["Deception", "Ambition", "Authenticity"]
    }),

    // 10. The Favourite
    375262: createMovieData({ 
        emotionalIntensity: 88, 
        chemistryScore: 90, 
        complexityLevel: "DARK", 
        dominantColor: "#4c1d95", 
        rating: 7.5, criticsScore: 93, audienceScore: 69, director: "Yorgos Lanthimos", 
        cast: ["Olivia Colman", "Emma Stone", "Rachel Weisz"], boxOffice: "$95 million", budget: "$15 million", 
        dna: { "Drama": 50, "Comedy": 30, "Romance": 20 }, 
        scenes: [
            { time: 30, intensity: 65, label: "Mud Bath", color: "#7c3aed" },
            { time: 50, intensity: 75, label: "The Library", color: "#6d28d9" },
            { time: 70, intensity: 85, label: "The Dance", color: "#5b21b6" },
            { time: 90, intensity: 90, label: "Poisoning", color: "#4c1d95" },
            { time: 110, intensity: 95, label: "The Rabbits", color: "#2e1065" }
        ],
        synopsis: "In early 18th century England, a frail Queen Anne occupies the throne and her close friend, Lady Sarah, governs the country in her stead. When a new servant, Abigail, arrives, her charm endears her to Sarah.",
        themes: ["Power", "Manipulation", "Royalty"]
    })
};

export const STRATEGIC_QUOTES = {
    122906: "We're all traveling through time together, every day of our lives.",
    4348: "You have bewitched me, body and soul.",
    509: "I'm also just a girl, standing in front of a boy, asking him to love her.",
    251: "Ditto.",
    1934: "I will have poetry in my life. And adventure. And love.",
    51828: "Whatever happens tomorrow, we had today.",
    937287: "I'm playing for both of us.",
    293863: "Tell me something I can hold on to forever and never let go.",
    9919: "Our love fern! You let it die!",
    375262: "Love turns us into monsters."
};

export const PEACOCK_ROMANCE_MOVIE_FAQS = {
  'About Time': [
    { 
      question: "Why can't Tim travel back to before his daughter was born?", 
      answer: "The film establishes that traveling back to a time before a child's birth changes the exact moment of conception (the butterfly effect), meaning a different child would be born. This rule forces Tim to finally accept the passage of time and move forward." 
    },
    { 
      question: "Is the movie based on a book?", 
      answer: "No, it is an original screenplay by Richard Curtis, who also directed 'Love Actually'. He wanted to write a film about what he considered the 'real' secret to happiness: appreciating the ordinary." 
    },
    { 
      question: "What is the message of the ending?", 
      answer: "The ending suggests that Tim no longer needs time travel. By living every day twice in his mind—first with the stress of the unknown, and second with the appreciation of the details—he learns to simply live life once, perfectly." 
    },
    { 
      question: "Where was the beach scene filmed?", 
      answer: "The iconic family beach scenes were filmed at Porthpean House in St. Austell, Cornwall, England. It remains a popular location for fans of the film's aesthetic." 
    }
  ],
  'Pride & Prejudice': [
    { 
      question: "Is the rain scene in the book?", 
      answer: "No. The famous proposal scene in the rain was created for the 2005 movie to heighten the dramatic tension. In the book, the proposal happens indoors at Hunsford Parsonage." 
    },
    { 
      question: "Did they film two endings?", 
      answer: "Yes. The UK release ends with Mr. Bennet saying 'I am quite at my leisure.' The US release includes the 'Mrs. Darcy' kissing scene, which was considered too sentimental for British audiences." 
    },
    { 
      question: "Is the music original?", 
      answer: "Yes, the score was composed by Dario Marianelli. The piano pieces were designed to sound like something Elizabeth Bennet herself could have played, adding to the film's intimacy." 
    },
    { 
      question: "Where was it filmed?", 
      answer: "It was filmed entirely on location in England, using real estates like Chatsworth House (Pemberley) and Groombridge Place (Longbourn), giving it a grounded, realistic look." 
    }
  ],
  'Notting Hill': [
    { 
      question: "Is the travel bookshop real?", 
      answer: "Yes, it was inspired by a real travel bookshop in Notting Hill, though the store in the movie was a set. The real shop (The Travel Bookshop) unfortunately closed in 2011 but the location remains a tourist spot." 
    },
    { 
      question: "How much did Julia Roberts get paid?", 
      answer: "Julia Roberts reportedly received $15 million for the role, mirroring her character's status as the world's biggest movie star." 
    },
    { 
      question: "Did Hugh Grant really walk through the seasons?", 
      answer: "Yes, the famous 'Ain't No Sunshine' scene where Hugh Grant walks through four seasons in one take was achieved using computer-controlled motion control cameras and practical weather effects." 
    },
    { 
      question: "Who wrote the script?", 
      answer: "Richard Curtis, the king of British rom-coms (Love Actually, Four Weddings and a Funeral). He claimed he wrote it imagining what would happen if he turned up to a dinner party with Madonna." 
    }
  ],
  'Ghost': [
    { 
      question: "What does 'Ditto' mean?", 
      answer: "It is Sam's way of saying 'I love you too' without being vulnerable. By the end, it becomes a powerful callback representing their unique bond and continuity beyond death." 
    },
    { 
      question: "Is the pottery scene iconic?", 
      answer: "Absolutely. It is widely considered one of the most romantic and parodied scenes in film history, symbolizing intimacy and creation." 
    },
    { 
      question: "Was the scary shadow effect CGI?", 
      answer: "Mostly practical. The dark shadows that drag bad spirits away were created using dancers in black bodysuits and rotoscoping animation techniques, giving them a fluid, eerie movement." 
    },
    { 
      question: "Why did Patrick Swayze get the role?", 
      answer: "The writer saw an interview where Swayze cried talking about his father. He realized Swayze had the emotional vulnerability needed to play a ghost who could cry but not touch." 
    }
  ],
  'Shakespeare in Love': [
    { 
      question: "Is it historically accurate?", 
      answer: "Very little. It is a fictional romantic comedy that imagines how Shakespeare *might* have been inspired to write Romeo and Juliet. Most characters (except Shakespeare and Queen Elizabeth) are fictionalized." 
    },
    { 
      question: "Did it really beat Saving Private Ryan?", 
      answer: "Yes. In one of the biggest upsets in Oscar history, 'Shakespeare in Love' won Best Picture over Spielberg's war epic, largely credited to Harvey Weinstein's aggressive marketing campaign." 
    },
    { 
      question: "Who is the little boy?", 
      answer: "The boy who likes feeding mice to snakes is a young John Webster, who grew up to be a real playwright famous for gruesome tragedies like 'The Duchess of Malfi'. It's an inside joke." 
    },
    { 
      question: "Was Gwyneth Paltrow British?", 
      answer: "No, she is American. Her British accent in the film was so convincing that many viewers assumed she was actually from the UK." 
    }
  ],
  'One Day': [
    { 
      question: "Why July 15th?", 
      answer: "July 15th is St. Swithin's Day. The folklore says the weather on this day predicts the weather for the next 40 days. In the film, it serves as a narrative anchor to check in on the characters annually." 
    },
    { 
      question: "Why is the ending so controversial?", 
      answer: "The sudden death of Emma is a major tonal shift. Some fans hate it for the heartbreak, while others believe it's necessary to show that life's most important moments are often realized too late." 
    },
    { 
      question: "Is the Netflix series better?", 
      answer: "Many fans prefer the 2024 Netflix series because the 14-episode format allows for much deeper character development than the 107-minute movie could provide." 
    },
    { 
      question: "Did they age the actors?", 
      answer: "Yes, subtle makeup and hair changes were used to age Anne Hathaway and Jim Sturgess over the 20-year span of the story, reflecting the passage of time and maturity." 
    }
  ],
  'Challengers': [
    { 
      question: "Is it a true story?", 
      answer: "No, Challengers is a fictional drama written by Justin Kuritzkes. However, the tennis dynamics and intense rivalries are inspired by real professional tennis circuits." 
    },
    { 
      question: "Did Zendaya play the tennis?", 
      answer: "Zendaya trained for three months to play Tashi. While a body double was used for complex shots, she performed many of the swings herself to ensure authenticity." 
    },
    { 
      question: "What does the ending mean?", 
      answer: "The final embrace at the net implies that Art and Patrick have reconnected through their shared love of the game, finally giving Tashi the 'real match' she has been craving for years." 
    },
    { 
      question: "Why is the music techno?", 
      answer: "Trent Reznor and Atticus Ross composed a driving, high-energy techno score to mimic the pulse of a tennis match and the sexual tension between the characters." 
    }
  ],
  'The Age of Adaline': [
    { 
      question: "Is the science real?", 
      answer: "No. The explanation involving lightning and telomere compression is pseudoscientific fantasy designed to serve the romantic plot." 
    },
    { 
      question: "Who plays young William?", 
      answer: "Anthony Ingruber plays the young version of Harrison Ford's character. He was cast because of his uncanny resemblance to a young Harrison Ford, largely due to viral YouTube impressions." 
    },
    { 
      question: "Why does she run away?", 
      answer: "Adaline runs to protect her secret and her daughter. She fears becoming a government experiment and believes she can never have a normal life, so isolation is her only safety." 
    },
    { 
      question: "What restarts her aging?", 
      answer: "A second accident involving a car crash and a defibrillator (lightning equivalent) reverses the condition, allowing her to age naturally again and finally commit to a relationship." 
    }
  ],
  'How to Lose a Guy in 10 Days': [
    { 
      question: "Was the jewelry real?", 
      answer: "The 'Isadora' diamond necklace worn by Kate Hudson in the gala scene was real and worth approximately $5 million at the time, making it one of the most expensive pieces of jewelry ever created for a film." 
    },
    { 
      question: "Did they improvise?", 
      answer: "Yes, many scenes, including the 'family album' photoshop scene and the dog scene, involved improvisation to capture the genuine chemistry and chaos between the leads." 
    },
    { 
      question: "Is the Love Fern real?", 
      answer: "The 'Love Fern' became a cultural phenomenon, symbolizing clingy relationships. The plant itself was a real asparagus fern, which is notoriously hard to keep alive." 
    },
    { 
      question: "Why 10 days?", 
      answer: "The timeline was set by the magazine assignment. It creates a ticking clock that forces the relationship to accelerate through all the stages of dating in an absurdly short time." 
    }
  ],
  'The Favourite': [
    { 
      question: "Is it a true story?", 
      answer: "It is loosely based on historical figures: Queen Anne, Sarah Churchill, and Abigail Masham. While the political rivalry is real, the film takes creative liberties with the modern dialogue and sexual relationships." 
    },
    { 
      question: "Why the fish-eye lens?", 
      answer: "Director Yorgos Lanthimos used wide-angle and fish-eye lenses to distort the palace, making it feel claustrophobic and isolating, reflecting the warped reality of the court." 
    },
    { 
      question: "Did Queen Anne have rabbits?", 
      answer: "No, historical records do not mention pet rabbits. The rabbits in the film symbolize her 17 lost children, representing her grief and the void she tries to fill." 
    },
    { 
      question: "Who is the villain?", 
      answer: "The film presents no clear hero or villain. All three women—Anne, Sarah, and Abigail—are victims of their circumstances and perpetrators of manipulation in a survival game." 
    }
  ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => {
    return PEACOCK_ROMANCE_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A top romance movie on Peacock.`,
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

export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('suicide') || lowerType.includes('death')) types.add('heavy themes');
        if (lowerType.includes('violence') || lowerType.includes('assault')) types.add('violence');
        if (lowerType.includes('sexual')) types.add('sexual content');
    });
    return Array.from(types);
};