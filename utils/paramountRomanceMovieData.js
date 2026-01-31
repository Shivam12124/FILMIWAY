// utils/paramountRomanceMovieData.js - PARAMOUNT+ ROMANCE COLLECTION DATA
// Emotional Resonance, Chemistry, and Cinematic Legacy

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 597, "imdbID": "tt0120338", "Title": "Titanic", "year": 1997, "genre": "Romance", "runtime": 194, "rank": 1 },
    { "tmdbId": 122906, "imdbID": "tt2194499", "Title": "About Time", "year": 2013, "genre": "Romance", "runtime": 123, "rank": 2 },
    { "tmdbId": 1585, "imdbID": "tt0038650", "Title": "It's a Wonderful Life", "year": 1946, "genre": "Drama", "runtime": 130, "rank": 3 },
    { "tmdbId": 456, "imdbID": "tt0116209", "Title": "The English Patient", "year": 1996, "genre": "Romance", "runtime": 162, "rank": 4 },
    { "tmdbId": 4922, "imdbID": "tt0421715", "Title": "The Curious Case of Benjamin Button", "year": 2008, "genre": "Romance", "runtime": 166, "rank": 5 },
    { "tmdbId": 251, "imdbID": "tt0099653", "Title": "Ghost", "year": 1990, "genre": "Romance", "runtime": 127, "rank": 6 },
    { "tmdbId": 164, "imdbID": "tt0054698", "Title": "Breakfast at Tiffany's", "year": 1961, "genre": "Romance", "runtime": 115, "rank": 7 },
    { "tmdbId": 60420, "imdbID": "tt1758692", "Title": "Like Crazy", "year": 2011, "genre": "Romance", "runtime": 90, "rank": 8 },
    { "tmdbId": 1824, "imdbID": "tt0343660", "Title": "50 First Dates", "year": 2004, "genre": "Comedy", "runtime": 99, "rank": 9 },
    { "tmdbId": 9603, "imdbID": "tt0112697", "Title": "Clueless", "year": 1995, "genre": "Comedy", "runtime": 97, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Heartbreak, Intimacy & Trauma)
export const SENSITIVE_TIMELINES = {
    // 1. Titanic
    597: { 
        scenes: [
            { start: "0:38:00", end: "0:42:00", type: "Suicide Attempt", severity: "High" },
            { start: "2:15:00", end: "3:05:00", type: "Drowning/Mass Death", severity: "High" }
        ] 
    },
    
    // 2. About Time
    122906: { scenes: [] }, // Generally wholesome, deals with death of parent gently
    
    // 3. It's a Wonderful Life
    1585: { 
        scenes: [
            { start: "1:45:00", end: "1:55:00", type: "Suicide Ideation", severity: "High" },
            { start: "1:30:00", end: "1:35:00", type: "Domestic Distress", severity: "Moderate" } // George yelling at family
        ] 
    },
    
    // 4. The English Patient
    456: { 
        scenes: [
            { start: "0:05:00", end: "0:10:00", type: "Severe Burns", severity: "High" },
            { start: "2:20:00", end: "2:25:00", type: "Euthanasia", severity: "Moderate" }
        ] 
    },
    
    // 5. The Curious Case of Benjamin Button
    4922: { 
        scenes: [
            { start: "2:30:00", end: "2:35:00", type: "Dementia/Death of Child", severity: "High" }
        ] 
    },
    
    // 6. Ghost
    251: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Mugging/Murder", severity: "High" },
            { start: "1:45:00", end: "1:50:00", type: "Violent Death", severity: "Moderate" } // Villain death
        ] 
    },
    
    // 7. Breakfast at Tiffany's
    164: { scenes: [] },
    
    // 8. Like Crazy
    60420: { scenes: [] },
    
    // 9. 50 First Dates
    1824: { scenes: [] },
    
    // 10. Clueless
    9603: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    597: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    122906: "https://image.tmdb.org/t/p/w500/iL1c1e40wA47P3a522t3N92W08L.jpg",
    1585: "https://image.tmdb.org/t/p/w500/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg",
    456: "https://image.tmdb.org/t/p/w500/a3e1a7Q5Z3y5Z3y5.jpg",
    4922: "https://image.tmdb.org/t/p/w500/22323.jpg",
    251: "https://image.tmdb.org/t/p/w500/w9kR4q7.jpg",
    164: "https://image.tmdb.org/t/p/w500/r2J02Z2.jpg",
    60420: "https://image.tmdb.org/t/p/w500/60420.jpg",
    1824: "https://image.tmdb.org/t/p/w500/50first.jpg",
    9603: "https://image.tmdb.org/t/p/w500/8989.jpg"
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
    // 1. Titanic
    597: createMovieData({ 
        emotionalIntensity: 100, 
        chemistryScore: 100, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#1e3a8a", 
        rating: 7.9, criticsScore: 88, audienceScore: 95, director: "James Cameron", 
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"], boxOffice: "$2.26 billion", budget: "$200 million", 
        dna: { "Romance": 60, "Disaster": 30, "Drama": 10 }, 
        scenes: [
            { time: 35, intensity: 45, label: "I'm Flying", color: "#60a5fa" },
            { time: 80, intensity: 85, label: "The Drawing", color: "#fca5a5" },
            { time: 100, intensity: 90, label: "Steamy Car", color: "#991b1b" },
            { time: 160, intensity: 100, label: "The Ship Sinks", color: "#172554" },
            { time: 190, intensity: 98, label: "The Promise", color: "#1e3a8a" }
        ],
        synopsis: "In April 1912, the R.M.S. Titanic, the largest moving object ever built, set sail on its maiden voyage with over 2,000 souls on board. Among them are Rose DeWitt Bukater, a young socialite suffocating under the expectations of her upper-class world, and Jack Dawson, a free-spirited artist who won his third-class ticket in a lucky hand of poker. When their worlds collide, a whirlwind romance ignites that defies the rigid social hierarchies of the Edwardian era. However, their struggle for love soon turns into a desperate fight for survival as the 'unsinkable' ship strikes an iceberg in the North Atlantic. James Cameron’s masterpiece meticulously balances the grand scale of a historical disaster with an intimate, heart-wrenching love story that has become the definitive benchmark for cinematic romance.",
        themes: ["Class Divide", "Fate", "Sacrifice"]
    }),

    // 2. About Time
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
        synopsis: "At the age of 21, Tim Lake is told a shocking secret by his father: the men in their family have the ability to travel through time. While he can't change history, Tim can change what happens and has happened in his own life. Deciding to use his gift to find love, Tim moves to London and eventually meets Mary. Through a series of temporal do-overs, he attempts to craft the perfect courtship, only to realize that a 'perfect' life is much more complicated than simply fixing mistakes. As Tim navigates the joys of marriage and the inevitable sorrows of family life, the film evolves from a charming high-concept comedy into a profound meditation on the beauty of the ordinary. It challenges the viewer to consider if the true secret to happiness is living each day as if it were the only one you chose to experience.",
        themes: ["Time", "Fatherhood", "Appreciation"]
    }),

    // 3. It's a Wonderful Life
    1585: createMovieData({ 
        emotionalIntensity: 98, 
        chemistryScore: 95, 
        complexityLevel: "TIMELESS", 
        dominantColor: "#94a3b8", 
        rating: 8.6, criticsScore: 94, audienceScore: 95, director: "Frank Capra", 
        cast: ["James Stewart", "Donna Reed", "Lionel Barrymore"], boxOffice: "$3.3 million", budget: "$3.18 million", 
        dna: { "Drama": 50, "Romance": 30, "Fantasy": 20 }, 
        scenes: [
            { time: 25, intensity: 70, label: "Lasso the Moon", color: "#cbd5e1" },
            { time: 55, intensity: 85, label: "The Phone Call", color: "#475569" },
            { time: 100, intensity: 90, label: "The Bridge", color: "#1e293b" },
            { time: 120, intensity: 95, label: "I Want to Live", color: "#0f172a" },
            { time: 130, intensity: 100, label: "Auld Lang Syne", color: "#ffffff" }
        ],
        synopsis: "George Bailey has spent his entire life giving up his big-city dreams to serve the small town of Bedford Falls. On a fateful Christmas Eve, a financial crisis pushed him to the brink of despair, leading him to believe that the world would be better off without him. It takes the arrival of a gentle angel named Clarence to show George the staggering impact a single life can have. While celebrated as a holiday staple, the film is anchored by one of cinema's most authentic and enduring romances. The chemistry between George and Mary is electric, moving from childhood crushes to a partnership tested by poverty, war, and sacrifice. Their love isn't just a subplot; it is the moral and emotional foundation that gives George the strength to find his way back to the light in this quintessential American masterpiece.",
        themes: ["Community", "Purpose", "Marriage"]
    }),

    // 4. The English Patient
    456: createMovieData({ 
        emotionalIntensity: 90, 
        chemistryScore: 88, 
        complexityLevel: "POETIC", 
        dominantColor: "#ca8a04", 
        rating: 7.4, criticsScore: 86, audienceScore: 83, director: "Anthony Minghella", 
        cast: ["Ralph Fiennes", "Juliette Binoche", "Willem Dafoe"], boxOffice: "$232 million", budget: "$27 million", 
        dna: { "Romance": 50, "War": 40, "Drama": 10 }, 
        scenes: [
            { time: 30, intensity: 45, label: "The Desert", color: "#facc15" },
            { time: 70, intensity: 75, label: "Katharine's Story", color: "#ca8a04" },
            { time: 110, intensity: 80, label: "Christmas", color: "#a16207" },
            { time: 140, intensity: 90, label: "The Cave", color: "#854d0e" },
            { time: 155, intensity: 98, label: "Carrying Her", color: "#713f12" }
        ],
        synopsis: "As World War II draws to a close, a young nurse named Hana tends to a mysterious, badly burned man in a crumbling Italian villa. Unable to remember his name, the man—known only as the 'English Patient'—slowly begins to reveal his past through a series of vivid, haunting flashbacks. The story transports us to the pre-war Egyptian desert, where Count László Almásy was part of a royal mapping expedition. There, he entered into a passionate and forbidden affair with Katharine Clifton, the wife of a fellow explorer. Their love, set against the vast and unforgiving landscape of the Sahara, becomes entangled in the encroaching politics of war and betrayal. This sweeping, nine-Oscar-winning epic explores how the maps of nations are temporary, but the maps of the human heart are eternal and often marked by tragic consequences.",
        themes: ["Betrayal", "War", "Memory"]
    }),

    // 5. The Curious Case of Benjamin Button
    4922: createMovieData({ 
        emotionalIntensity: 85, 
        chemistryScore: 85, 
        complexityLevel: "EPIC", 
        dominantColor: "#b45309", 
        rating: 7.8, criticsScore: 71, audienceScore: 80, director: "David Fincher", 
        cast: ["Brad Pitt", "Cate Blanchett", "Tilda Swinton"], boxOffice: "$335 million", budget: "$150 million", 
        dna: { "Fantasy": 40, "Romance": 40, "Drama": 20 }, 
        scenes: [
            { time: 20, intensity: 30, label: "Meeting Daisy", color: "#d97706" },
            { time: 60, intensity: 60, label: "Midnight in Paris", color: "#b45309" },
            { time: 100, intensity: 95, label: "Meeting in the Middle", color: "#92400e" },
            { time: 140, intensity: 85, label: "The Truth", color: "#78350f" },
            { time: 160, intensity: 90, label: "Goodnight", color: "#451a03" }
        ],
        synopsis: "Born in New Orleans in 1918 with the physical appearance of an eighty-year-old man, Benjamin Button suffers from a bizarre condition: he ages backwards. While his life begins in an old folks' home, he soon realizes that as time passes, he is growing younger while everyone he loves grows older. This extraordinary journey takes him across the world, from the docks of Murmansk to the battlefields of World War II, but his heart remains tied to Daisy, a girl he met as a child. David Fincher’s visually stunning epic follows their unconventional romance as they struggle to find a way to be together. Their paths eventually cross in a brief, beautiful window where their physical ages align, creating a poignant meditation on the fleeting nature of life, the inevitability of loss, and a love that persists despite the cruel mechanics of time.",
        themes: ["Time", "Mortality", "Enduring Love"]
    }),

    // 6. Ghost
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
        synopsis: "Sam Wheat and Molly Jensen are a happy couple living in New York City whose lives are shattered when Sam is murdered in a seemingly random mugging. However, Sam's spirit remains trapped in the mortal realm, discovering that his death was no accident but part of a deeper conspiracy that now threatens Molly. Unable to communicate directly with the living, Sam seeks the help of Oda Mae Brown, a reluctant psychic who is shocked to find her fraudulent talents have suddenly become real. This genre-bending classic seamlessly weaves together elements of a supernatural thriller, a crime procedural, and a deeply felt romance. It features one of the most iconic romantic sequences in film history and explores the powerful idea that true love is an energy that transcends the physical world, offering a sense of justice and closure from beyond the grave.",
        themes: ["Grief", "Afterlife", "Justice"]
    }),

    // 7. Breakfast at Tiffany's
    164: createMovieData({ 
        emotionalIntensity: 75, 
        chemistryScore: 88, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#0ea5e9", 
        rating: 7.6, criticsScore: 89, audienceScore: 91, director: "Blake Edwards", 
        cast: ["Audrey Hepburn", "George Peppard", "Patricia Neal"], boxOffice: "$14 million", budget: "$2.5 million", 
        dna: { "Romance": 60, "Comedy": 20, "Drama": 20 }, 
        scenes: [
            { time: 5, intensity: 35, label: "The Window", color: "#38bdf8" },
            { time: 40, intensity: 70, label: "Moon River", color: "#0284c7" },
            { time: 70, intensity: 55, label: "The Library", color: "#0ea5e9" },
            { time: 100, intensity: 80, label: "The Telegram", color: "#0369a1" },
            { time: 110, intensity: 95, label: "The Rain", color: "#0c4a6e" }
        ],
        synopsis: "Based on Truman Capote's novella, this film introduces us to Holly Golightly, a high-fashion New York socialite whose charming eccentricity masks a deep-seated fear of being 'caged.' Holly spends her days as a 'social butterfly,' surviving on the generosity of wealthy men and seeking solace in the elegance of Tiffany's jewelry store. Her carefully constructed world is challenged when Paul Varjak, a struggling writer and 'kept man,' moves into her apartment building. As the two develop a complex friendship, they begin to see past each other's facades, forcing Holly to confront the ghosts of her past in 'Tulsa' and the reality of her future. Audrey Hepburn's performance is legendary, creating a character that is simultaneously sophisticated and vulnerable. The film is a stylish, bittersweet exploration of identity and the terrifying prospect of letting someone truly know you.",
        themes: ["Identity", "Freedom", "Belonging"]
    }),

    // 8. Like Crazy
    60420: createMovieData({ 
        emotionalIntensity: 85, 
        chemistryScore: 90, 
        complexityLevel: "REALISTIC", 
        dominantColor: "#be123c", 
        rating: 6.7, criticsScore: 72, audienceScore: 64, director: "Drake Doremus", 
        cast: ["Felicity Jones", "Anton Yelchin", "Jennifer Lawrence"], boxOffice: "$3.7 million", budget: "$250k", 
        dna: { "Romance": 70, "Drama": 30 }, 
        scenes: [
            { time: 15, intensity: 75, label: "The Chair Gift", color: "#f43f5e" },
            { time: 40, intensity: 65, label: "The Visa Issue", color: "#9f1239" },
            { time: 60, intensity: 60, label: "Other People", color: "#881337" },
            { time: 80, intensity: 80, label: "Reunion", color: "#e11d48" },
            { time: 90, intensity: 95, label: "The Shower", color: "#be123c" }
        ],
        synopsis: "Anna is a British exchange student attending college in Los Angeles, where she falls deeply in love with Jacob, an American classmate. In a moment of youthful impulsivity, Anna decides to overstay her student visa to spend the summer with Jacob, a decision that has catastrophic consequences. When she is denied re-entry into the United States, the couple is thrust into a grueling long-distance relationship that spans years. Through improvised dialogue and a raw, intimate shooting style, the film captures the agonizing reality of maintaining a connection across borders and time zones. It explores how passion can morph into resentment, how silence becomes a wall, and the haunting question of whether the people who finally reunite are the same people who first fell in love. It is a modern, unvarnished look at the fragility of commitment in an era of global bureaucracy.",
        themes: ["Distance", "Bureaucracy", "Commitment"]
    }),

    // 9. 50 First Dates
    1824: createMovieData({ 
        emotionalIntensity: 80, 
        chemistryScore: 92, 
        complexityLevel: "HEARTWARMING", 
        dominantColor: "#fcd34d", 
        rating: 6.8, criticsScore: 45, audienceScore: 65, director: "Peter Segal", 
        cast: ["Adam Sandler", "Drew Barrymore", "Rob Schneider"], boxOffice: "$196 million", budget: "$75 million", 
        dna: { "Comedy": 50, "Romance": 40, "Drama": 10 }, 
        scenes: [
            { time: 15, intensity: 35, label: "Waffle House", color: "#fde047" },
            { time: 40, intensity: 55, label: "The Video Tape", color: "#eab308" },
            { time: 70, intensity: 70, label: "First Kiss (Again)", color: "#ca8a04" },
            { time: 85, intensity: 75, label: "The Break Up", color: "#a16207" },
            { time: 95, intensity: 98, label: "The Boat", color: "#f59e0b" }
        ],
        synopsis: "Henry Roth is a veterinarian living in Hawaii with a strict rule against long-term commitment—until he meets Lucy Whitmore at a local cafe. Their instant connection is undeniable, but Henry soon discovers a heartbreaking truth: Lucy suffered a traumatic brain injury that leaves her with no short-term memory. Every morning, she wakes up believing it is the day of her accident, and every trace of Henry is wiped clean. Rather than walking away, Henry dedicated his life to winning Lucy over every single day, creating elaborate videos and scenarios to help her process her reality. While marketed as a typical comedy, the film reveals a surprising depth, portraying devotion not as a one-time choice, but as a repetitive, heroic act of love. It explores the persistence of the human spirit and the ways in which we find meaning in a life that must be rebuilt from scratch every twenty-four hours.",
        themes: ["Devotion", "Memory", "Persistence"]
    }),

    // 10. Clueless
    9603: createMovieData({ 
        emotionalIntensity: 60, 
        chemistryScore: 85, 
        complexityLevel: "ICONIC", 
        dominantColor: "#fde047", 
        rating: 6.9, criticsScore: 81, audienceScore: 76, director: "Amy Heckerling", 
        cast: ["Alicia Silverstone", "Stacey Dash", "Brittany Murphy"], boxOffice: "$56 million", budget: "$12 million", 
        dna: { "Comedy": 60, "Romance": 20, "Coming of Age": 20 }, 
        scenes: [
            { time: 10, intensity: 30, label: "As If!", color: "#fef08a" },
            { time: 40, intensity: 50, label: "Makeover", color: "#facc15" },
            { time: 60, intensity: 45, label: "Rolling with Homies", color: "#eab308" },
            { time: 85, intensity: 75, label: "The Fountain", color: "#ca8a04" },
            { time: 95, intensity: 65, label: "Wedding", color: "#fde047" }
        ],
        synopsis: "Cher Horowitz is a rich, popular, and deceptively smart teenager living in a mansion in Beverly Hills. When she isn't shopping or debating grades with her teachers, she enjoys playing matchmaker for those she deems 'clueless,' starting with two lonely teachers and then a new student named Tai. However, Cher's confidence in her ability to navigate the social waters of high school begins to falter when her own romantic life becomes a disaster. As she tries to figure out her feelings for Josh, her socially conscious ex-stepbrother, Cher undergoes a journey of self-discovery that forces her to look past her superficial world. A clever and modern reimagining of Jane Austen’s 'Emma,' the film uses sharp wit and 90s pop culture to tell a genuinely sweet story about the growing pains of adolescence and the realization that the most important makeover is the one that happens on the inside.",
        themes: ["Growth", "Class", "Self-Discovery"]
    })
};

export const PARAMOUNT_ROMANCE_MOVIE_FAQS = {

  'Titanic': [
    {
      question: "Could Jack have survived if Rose shared the door?",
      answer: "From a physics standpoint, later tests (including ones conducted by James Cameron himself) showed that it *may* have been possible with perfect balance. However, the film is not about survival logistics. Jack’s death is a narrative and emotional necessity—it transforms Titanic from a disaster spectacle into a timeless tragedy. His sacrifice freezes their love at its most pure, ensuring it is remembered as eternal rather than ordinary."
    },
    {
      question: "Is the love story realistic or purely cinematic?",
      answer: "While Jack and Rose are fictional, their relationship mirrors many real class-crossing romances of the early 20th century. Titanic uses a short, intense connection to show how powerful love can become when time is limited. The realism lies not in duration, but in emotional truth—how people behave when they feel truly seen for the first time."
    },
    {
      question: "Why does the movie focus so much on romance instead of history?",
      answer: "James Cameron deliberately used romance as the emotional entry point. Historical facts create scale, but love creates empathy. Without Jack and Rose, the sinking would be impressive but distant. Their story personalizes the tragedy, allowing the audience to emotionally experience history instead of merely observing it."
    },
    {
      question: "What does the ending actually mean?",
      answer: "Rose choosing to live a full life—then reuniting with Jack only in death—means she honored his sacrifice. The ending is not about dying for love, but about *living because of it*. Jack didn’t save Rose so she could remember him; he saved her so she could become herself."
    }
  ],

  'About Time': [
    {
      question: "Why doesn’t Tim keep using time travel to fix everything?",
      answer: "Tim learns that constantly fixing life removes its meaning. Every moment becomes disposable if it can be redone. The film argues that imperfection is essential to joy—mistakes, awkwardness, and loss give moments their weight."
    },
    {
      question: "Is this film really about romance?",
      answer: "Romance is important, but the emotional core is fatherhood and mortality. The love story teaches Tim how to love, but his relationship with his father teaches him how to live. Many viewers find the father–son scenes more devastating than the romantic ones."
    },
    {
      question: "Why is the final walk scene so powerful?",
      answer: "It represents acceptance. Tim knowingly walks toward a moment he cannot revisit. For the first time, he chooses presence over control. This scene resonates because it reflects a universal truth: some moments matter precisely because they cannot be repeated."
    },
    {
      question: "What lesson does the movie want the viewer to take home?",
      answer: "Live as if you’ve chosen this day. Appreciate the ordinary. Love without trying to optimize everything. Time is valuable not because it can be controlled, but because it cannot."
    }
  ],

  "It's a Wonderful Life": [
    {
      question: "Is this actually a romance film?",
      answer: "Yes—quietly but profoundly. Mary’s love anchors George when he cannot love himself. Their marriage represents stability, patience, and partnership rather than passion alone. The romance is not flashy, but it is foundational."
    },
    {
      question: "Why does George hit such a breaking point?",
      answer: "George’s despair comes from accumulated sacrifice without visible reward. The film shows how emotional burnout happens when generosity goes unnoticed. His breakdown feels real because it mirrors modern mental health struggles."
    },
    {
      question: "Why doesn’t Mr. Potter get punished?",
      answer: "Because the film’s victory is moral, not legal. Potter’s power remains, but it is rendered meaningless. George wins by realizing his worth is measured by people, not money."
    },
    {
      question: "Why does this movie grow more emotional with age?",
      answer: "As viewers age, they recognize George’s compromises, regrets, and quiet heroism. The film hits differently once you understand how much life is made of unseen sacrifices."
    }
  ],

  'The English Patient': [
    {
      question: "Is this a love story or a war story?",
      answer: "It is a love story destroyed by war. The war does not just kill people—it interrupts identity, loyalty, and rescue. Love here exists in a world where timing is lethal."
    },
    {
      question: "Why does the film feel emotionally distant to some viewers?",
      answer: "Its emotional restraint is intentional. The characters suppress feeling because expression is dangerous in wartime. The devastation comes not from outbursts, but from what is left unsaid."
    },
    {
      question: "Why is the cave scene so important?",
      answer: "The cave represents suspended time—love frozen outside the world. When Almásy leaves, it becomes a tomb of both love and hope. The tragedy is knowing rescue is physically possible but politically impossible."
    },
    {
      question: "Is Almásy meant to be sympathetic?",
      answer: "The film does not excuse him; it humanizes him. He is flawed, selfish, and sincere. The story asks whether love can remain pure when born from betrayal."
    }
  ],

  'The Curious Case of Benjamin Button': [
    {
      question: "What makes this romance so tragic?",
      answer: "Benjamin and Daisy are always out of sync. Their tragedy is not conflict—it is timing. The film argues that love is not enough if life moves you in opposite directions."
    },
    {
      question: "Why is their time together so short?",
      answer: "Because the film treats love as a moment, not a guarantee. Their brief alignment becomes precious precisely because it cannot last."
    },
    {
      question: "What does aging backward symbolize?",
      answer: "It reflects how memory works. As Benjamin grows younger, he loses understanding; as Daisy grows older, she gains regret. Love meets briefly in the middle, then fades into memory."
    },
    {
      question: "Is the ending hopeful or tragic?",
      answer: "Both. It is tragic in loss, but hopeful in remembrance. Love mattered—even if it could not survive time."
    }
  ],

  'Ghost': [
    {
      question: "Why does Ghost still feel romantic decades later?",
      answer: "Because it treats love as something that outlives the body. The film uses fantasy to externalize grief—the need to say goodbye properly."
    },
    {
      question: "Is the pottery scene about sex or intimacy?",
      answer: "Intimacy. The scene works because it conveys emotional closeness, trust, and vulnerability rather than physical explicitness."
    },
    {
      question: "Why is humor so important in this film?",
      answer: "Comedy prevents grief from becoming unbearable. Oda Mae acts as emotional relief, mirroring how people use humor to survive loss."
    },
    {
      question: "What does 'Ditto' really mean?",
      answer: "It means continuity. Love doesn’t end; it changes form."
    }
  ],

 "Breakfast at Tiffany's": [
    {
      question: "Who is Holly Golightly really?",
      answer: "She is a woman running from vulnerability. Her charm masks fear of attachment and identity."
    },
    {
      question: "Why is the rain scene so powerful?",
      answer: "Because it strips away her defenses. In chaos, she finally admits emotional truth."
    },
    {
      question: "Why is Moon River important?",
      answer: "It expresses longing — for belonging, safety, and connection — before Holly understands those needs herself."
    },
    {
      question: "Why is the film both romantic and sad?",
      answer: "Because growth often requires surrendering illusions. Holly’s happiness comes at the cost of emotional exposure."
    }
  ],

  'Like Crazy': [
    {
      question: "Why does the relationship feel so real?",
      answer: "Because the film embraces silence, awkwardness, and emotional drift — elements often removed from traditional romances."
    },
    {
      question: "Is the ending hopeful or tragic?",
      answer: "It’s unresolved. Love remains, but the damage is visible. The film refuses fantasy reconciliation."
    },
    {
      question: "What is the film saying about distance?",
      answer: "That love alone is not always enough. Timing, presence, and shared reality matter."
    },
    {
      question: "Why does the shower scene hurt so much?",
      answer: "Because it shows love surviving without joy — intimacy without renewal."
    }
  ],

  '50 First Dates': [
    {
      question: "Is this movie darker than it seems?",
      answer: "Yes. Beneath its humor lies a story about consent, repetition, and emotional responsibility."
    },
    {
      question: "Why does Henry keep choosing Lucy?",
      answer: "Because love here is an action, not memory. The film frames devotion as daily commitment."
    },
    {
      question: "Is Lucy’s life fair?",
      answer: "That question is intentionally uncomfortable. The film asks viewers to weigh romance against ethical complexity."
    },
    {
      question: "Why does the ending still work emotionally?",
      answer: "Because it emphasizes partnership rather than rescue. Lucy is included in Henry’s life, not protected from it."
    }
  ],

  'Clueless': [
    {
      question: "Why is Clueless still relevant?",
      answer: "Because it’s about self-awareness. The humor masks a genuine coming-of-age story."
    },
    {
      question: "Is Cher shallow?",
      answer: "No — she is inexperienced. Her growth comes from learning empathy rather than losing privilege."
    },
    {
      question: "Why is the fashion so important?",
      answer: "Clothing reflects control. As Cher matures, her emotional decisions replace surface confidence."
    },
    {
      question: "What makes the ending satisfying?",
      answer: "Cher chooses authenticity over status, marking emotional adulthood."
    }
  ]
};


export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => {
    return PARAMOUNT_ROMANCE_MOVIE_FAQS[movie.Title] || [];
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