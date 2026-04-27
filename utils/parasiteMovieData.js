// utils/parasiteMovieData.js - MOVIES LIKE PARASITE COLLECTION 🔥

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 290098, imdbID: 'tt4016934', Title: 'The Handmaiden', year: 2016, genre: 'Thriller', runtime: 145, rank: 1},
    { tmdbId: 491584, imdbID: 'tt7282468', Title: 'Burning', year: 2018, genre: 'Mystery', runtime: 148, rank: 2 },
    { tmdbId: 110415, imdbID: 'tt1706620', Title: 'Snowpiercer', year: 2013, genre: 'Sci-Fi', runtime: 126, rank: 3 },
    { tmdbId: 11423, imdbID: 'tt0353969', Title: 'Memories of Murder', year: 2003, genre: 'Crime', runtime: 132, rank: 4 },
    { tmdbId: 505192, imdbID: 'tt8075192', Title: 'Shoplifters', year: 2018, genre: 'Drama', runtime: 121, rank: 5 },
    { tmdbId: 619264, imdbID: 'tt8228288', Title: 'The Platform', year: 2019, genre: 'Sci-Fi', runtime: 94, rank: 6 },
    { tmdbId: 44865, imdbID: 'tt1216496', Title: 'Mother', year: 2009, genre: 'Thriller', runtime: 129, rank: 7 },
    { tmdbId: 399057, imdbID: 'tt5715874', Title: 'The Killing of a Sacred Deer', year: 2017, genre: 'Thriller', runtime: 121, rank: 8 },
    { tmdbId: 42506, imdbID: 'tt0150980', Title: 'The Housemaid', year: 1960, genre: 'Thriller', runtime: 108, rank: 9 },
    { tmdbId: 1213, imdbID: 'tt0134119', Title: 'The Talented Mr. Ripley', year: 1999, genre: 'Thriller', runtime: 139, rank: 10 }
];

// Helper function to ensure defaults
const createMovieData = (data) => ({
    classWarfareIndex: 80,
    thrillerElements: 80, // ✅ ADDED DEFAULT
    complexityLevel: 'HIGH',
    dominantColor: '#000000',
    ...data,
});

export const SENSITIVE_TIMELINES = {
    // ID 290098
    290098: { 
        scenes: [
            { start: '00:21:45', end: '00:21:55', type: 'Nudity (woman)', severity: 'Moderate' },
            { start: '00:51:10', end: '00:54:45', type: 'Nudity & Sex', severity: 'High' },
            { start: '01:47:10', end: '01:49:10', type: 'Nudity (women)', severity: 'Moderate' },
            { start: '01:58:45', end: '02:03:45', type: 'Sex & Nudity (women)', severity: 'Extreme' },
            { start: '02:21:10', end: '02:23:15', type: 'Sexual Content', severity: 'High' },
            { start: '02:32:10', end: '02:32:20', type: 'Partial nudity (woman)', severity: 'Moderate' },
            { start: '02:40:10', end: '02:42:20', type: 'Sexual Content & Nudity (women)', severity: 'High' }
        ] 
    },
    
    // ID 491584
    491584: { 
        scenes: [
            { start: '00:15:00', end: '00:18:20', type: 'Sex & Nudity', severity: 'High' },
            { start: '00:29:30', end: '00:30:00', type: 'Sexual Content ', severity: 'Moderate' },
            { start: '00:35:10', end: '00:35:39', type: 'Sexual Content ', severity: 'Moderate' },
            { start: '01:08:35', end: '01:11:25', type: 'Nudity (woman)', severity: 'Moderate' },
            { start: '02:13:30', end: '02:14:07', type: 'Sexual Content', severity: 'Moderate' }
        ] 
    },
    
    110415: { scenes: [] },
    
       11423: { scenes: [
        { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
        { start: "54:34", end: "54:55", type: "Nudity", severity: "Mild" },
        { start: "1:01:12", end: "1:02:40", type: "Sexual content", severity: "Moderate" },
        { start: "1:25:12", end: "1:25:47", type: "Sexual content", severity: "Mild" }
    ]},
    
    // Parasite
    505192: { 
        scenes: [
            { start: '01:28:35', end: '01:31:15', type: 'Sexual Content', severity: 'Extreme' }
        ] 
    },
    
619264: { 
        scenes: [
            { start: "00:23:55", end: "00:24:03", type: "Nudity(Man)", severity: "Moderate" },
            { start: "00:24:15", end: "00:24:20", type: "Sexual Content", severity: "Moderate" },
            { start: "00:24:30", end: "00:24:32", type: "Nudity(Men)", severity: "Moderate" },
            { start: "00:38:40", end: "00:39:20", type: "Nudity(Woman)", severity: "Moderate" },
            { start: "00:53:15", end: "00:53:25", type: "Nudity(Woman)", severity: "Moderate" }
        ] 
    },
    
    44865: { scenes: [] },
    
    399057: { 
        scenes: [
            { start: '00:09:20', end: '00:11:00', type: 'Sexual Content & Nudity ', severity: 'Moderate' }
        ] 
    },
    
 42506: { 
        scenes: [] 
    },
    
    // The Talented Mr. Ripley
    1213: { 
        scenes: [
            { start: '00:52:30', end: '00:53:10', type: 'Nudity', severity: 'Moderate' }, 
       
        ] 
    }
};

export const FALLBACK_POSTERS = {
    290098: 'https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
    491584: 'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTkwMl5BMl5BanBnXkFtZTgwMjE2MjA0NjM@._V1_SX500.jpg',
    110415: 'https://m.media-amazon.com/images/M/MV5BMTQ3NzUzOTc5MV5BMl5BanBnXkFtZTgwMzE2ODg1MDE@._V1_SX500.jpg',
    11423: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LWJkOTktMWRmNWNhNjg2MzVkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX500.jpg',
    505192: 'https://m.media-amazon.com/images/M/MV5BZjE3OTU3OTIwOV5BMl5BanBnXkFtZTgwNzU5OTMwNjM@._V1_SX500.jpg',
    619264: 'https://m.media-amazon.com/images/M/MV5BMjEzMjcxODg3Nl5BMl5BanBnXkFtZTgwNzUwMTkwODM@._V1_SX500.jpg',
    44865: 'https://m.media-amazon.com/images/M/MV5BMTc0NzY2OTU0MF5BMl5BanBnXkFtZTcwMDI4MjM1Mw@@._V1_SX500.jpg',
    399057: 'https://m.media-amazon.com/images/M/MV5BNTFiODAzNTktODRmNy00ODY2LTgyNjQtZjRkYzFkY2Y4NDM5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
    42506: 'https://m.media-amazon.com/images/M/MV5BMTYzOTE0MjEyNV5BMl5BanBnXkFtZTcwMjcwMDU5Mw@@._V1_SX500.jpg',
    1213: 'https://m.media-amazon.com/images/M/MV5BODA4Mjg4NzEzMF5BMl5BanBnXkFtZTcwNTU2NzY5NA@@._V1_SX500.jpg'
};

export const COMPLETE_MOVIE_DATA = {
    // 2. The Handmaiden
    290098: createMovieData({
        classWarfareIndex: 85, thrillerElements: 90, complexityLevel: 'HIGH', dominantColor: '#be185d',
        rating: 8.1, criticsScore: 95, audienceScore: 89,
        director: 'Park Chan-wook', cast: ['Kim Min-hee', 'Kim Tae-ri', 'Ha Jung-woo'],
        boxOffice: '$37.8 million', budget: '$8.8 million',
        dna: { Thriller: 40, Romance: 35, Drama: 25 },
        scenes: [
            { time: 20, intensity: 35, label: 'Arrival', color: '#be185d' },
            { time: 50, intensity: 60, label: 'Seduction', color: '#db2777' },
            { time: 90, intensity: 75, label: 'Betrayal', color: '#ec4899' },
            { time: 120, intensity: 85, label: 'Twist', color: '#f472b6' },
            { time: 140, intensity: 70, label: 'Escape', color: '#f9a8d4' }
        ],
        synopsis: '1930s Korea under Japanese occupation. Con man Count Fujiwara hires pickpocket Sook-hee to pose as a handmaiden to wealthy heiress Lady Hideko. Park Chan-wook\'s erotic psychological thriller is a lavish, three-act con game where every character is playing every other character.',
        themes: ['Deception', 'Female Agency', 'Colonialism', 'Forbidden Love'],
        awards: ['BAFTA Winner', 'Cannes Official Selection']
    }),

    // 3. Burning
    491584: createMovieData({
        classWarfareIndex: 80, thrillerElements: 75, complexityLevel: 'HIGH', dominantColor: '#dc2626',
        rating: 7.5, criticsScore: 94, audienceScore: 72,
        director: 'Lee Chang-dong', cast: ['Yoo Ah-in', 'Steven Yeun', 'Jeon Jong-seo'],
        boxOffice: '$7.1 million', budget: '$5.5 million',
        dna: { Mystery: 50, Drama: 35, Thriller: 15 },
        scenes: [
            { time: 20, intensity: 25, label: 'Reunion', color: '#dc2626' },
            { time: 50, intensity: 40, label: 'Jealousy', color: '#ef4444' },
            { time: 90, intensity: 60, label: 'Greenhouse', color: '#f87171' },
            { time: 120, intensity: 75, label: 'Obsession', color: '#fca5a5' },
            { time: 145, intensity: 85, label: 'Burning', color: '#fecaca' }
        ],
        synopsis: 'Deliveryman Jongsu reconnects with childhood neighbor Haemi. She returns with Ben, a wealthy enigmatic playboy. When Haemi mysteriously vanishes, Jongsu becomes consumed by suspicion and class resentment. Lee Chang-dong\'s slow-burn mystery explores class inequality as psychological torment.',
        themes: ['Class Resentment', 'Obsession', 'Mystery', 'Alienation'],
        awards: ['Cannes Official Selection', 'Critics Choice Award']
    }),

    // 4. Snowpiercer
    110415: createMovieData({
        classWarfareIndex: 95, thrillerElements: 85, complexityLevel: 'EXTREME', dominantColor: '#0f172a',
        rating: 7.1, criticsScore: 95, audienceScore: 72,
        director: 'Bong Joon Ho', cast: ['Chris Evans', 'Song Kang-ho', 'Tilda Swinton'],
        boxOffice: '$86.8 million', budget: '$40 million',
        dna: { 'Sci-Fi': 50, Action: 30, Thriller: 20 },
        scenes: [
            { time: 15, intensity: 40, label: 'Tail Section', color: '#0f172a' },
            { time: 45, intensity: 65, label: 'Uprising', color: '#1e293b' },
            { time: 75, intensity: 80, label: 'Water Supply', color: '#334155' },
            { time: 105, intensity: 90, label: 'Front Cars', color: '#475569' },
            { time: 120, intensity: 95, label: 'Engine', color: '#64748b' }
        ],
        synopsis: 'After a climate experiment freezes Earth, humanity survives aboard Snowpiercer—a perpetually moving train divided by class. When Curtis leads a violent revolution, he discovers the horrifying truth about the train\'s ecosystem. Bong Joon Ho\'s dystopian thriller is a literal class system on rails.',
        themes: ['Class System', 'Revolution', 'Dystopia', 'Survival'],
        awards: ['Grand Bell Awards', 'Blue Dragon Film Awards']
    }),

    // 5. Memories of Murder
    11423: createMovieData({
        classWarfareIndex: 70, thrillerElements: 90, complexityLevel: 'HIGH', dominantColor: '#422006',
        rating: 8.1, criticsScore: 99, audienceScore: 94,
        director: 'Bong Joon Ho', cast: ['Song Kang-ho', 'Kim Sang-kyung', 'Kim Roi-ha'],
        boxOffice: '$1.2 million', budget: '$2.8 million',
        dna: { Crime: 60, Thriller: 25, Drama: 15 },
        scenes: [
            { time: 20, intensity: 35, label: 'First Murder', color: '#422006' },
            { time: 50, intensity: 55, label: 'Investigation', color: '#78350f' },
            { time: 85, intensity: 70, label: 'False Confession', color: '#92400e' },
            { time: 110, intensity: 80, label: 'Breakthrough', color: '#b45309' },
            { time: 128, intensity: 90, label: 'Haunting End', color: '#d97706' }
        ],
        synopsis: 'In 1986 South Korea, a serial killer terrorizes a rural province. Two detectives struggle with science they don\'t have and justice the system won\'t allow. Bong Joon Ho\'s masterpiece explores institutional failure and class injustice.',
        themes: ['Institutional Failure', 'Justice Denied', 'Class Injustice', 'Authoritarianism'],
        awards: ['Asian Film Awards', 'Blue Dragon Film Awards']
    }),

    // 6. Shoplifters
    505192: createMovieData({
        classWarfareIndex: 75, thrillerElements: 40, complexityLevel: 'MEDIUM', dominantColor: '#0369a1',
        rating: 7.9, criticsScore: 99, audienceScore: 91,
        director: 'Hirokazu Kore-eda', cast: ['Lily Franky', 'Sakura Ando', 'Mayu Matsuoka'],
        boxOffice: '$68.2 million', budget: '$8.2 million',
        dna: { Drama: 70, Family: 25, Crime: 5 },
        scenes: [
            { time: 15, intensity: 20, label: 'Family Life', color: '#0369a1' },
            { time: 40, intensity: 35, label: 'Yuri Arrives', color: '#0284c7' },
            { time: 70, intensity: 50, label: 'Beach Trip', color: '#0ea5e9' },
            { time: 95, intensity: 75, label: 'Discovery', color: '#38bdf8' },
            { time: 115, intensity: 85, label: 'Separation', color: '#7dd3fc' }
        ],
        synopsis: 'On the margins of Tokyo, the Shibata family survives through petty shoplifting. When they take in an abused girl named Yuri, their fragile happiness grows—until authorities discover their secret. Kore-eda\'s Palme d\'Or winner is a devastating portrait of Japan\'s invisible underclass.',
        themes: ['Chosen Family', 'Poverty', 'Social Invisibility', 'Love vs Law'],
        awards: ['Palme d\'Or Winner', 'Academy Award Nomination']
    }),

    // 7. The Platform
    619264: createMovieData({
        classWarfareIndex: 92, thrillerElements: 88, complexityLevel: 'EXTREME', dominantColor: '#57534e',
        rating: 7.0, criticsScore: 80, audienceScore: 73,
        director: 'Galder Gaztelu-Urrutia', cast: ['Iván Massagué', 'Zorion Eguileor', 'Antonia San Juan'],
        boxOffice: '$6.3 million', budget: '$4 million',
        dna: { 'Sci-Fi': 50, Thriller: 35, Horror: 15 },
        scenes: [
            { time: 10, intensity: 45, label: 'Awakening', color: '#57534e' },
            { time: 30, intensity: 65, label: 'The Platform', color: '#78716c' },
            { time: 50, intensity: 80, label: 'Descent', color: '#a8a29e' },
            { time: 75, intensity: 90, label: 'Cannibalism', color: '#d6d3d1' },
            { time: 92, intensity: 85, label: 'Message', color: '#e7e5e4' }
        ],
        synopsis: 'In a vertical prison, a food platform descends daily—loaded at top, empty at bottom. Those above feast. Those below starve. This Spanish sci-fi nightmare is capitalism where sharing means dying and selfishness means survival.',
        themes: ['Capitalism', 'Resource Inequality', 'Human Nature', 'Survival Ethics'],
        awards: ['Goya Award Nomination', 'Sitges Film Festival Winner']
    }),

    // 8. Mother
    44865: createMovieData({
        classWarfareIndex: 65, thrillerElements: 85, complexityLevel: 'MEDIUM', dominantColor: '#1e3a8a',
        rating: 7.8, criticsScore: 89, audienceScore: 85,
        director: 'Bong Joon Ho', cast: ['Kim Hye-ja', 'Won Bin', 'Jin Goo'],
        boxOffice: '$14.8 million', budget: '$5 million',
        dna: { Thriller: 50, Drama: 30, Mystery: 20 },
        scenes: [
            { time: 15, intensity: 30, label: 'Incident', color: '#1e3a8a' },
            { time: 45, intensity: 55, label: 'Arrest', color: '#1e40af' },
            { time: 75, intensity: 70, label: 'Investigation', color: '#3b82f6' },
            { time: 105, intensity: 85, label: 'Truth', color: '#60a5fa' },
            { time: 125, intensity: 90, label: 'Dance', color: '#93c5fd' }
        ],
        synopsis: 'A mentally challenged young man is accused of murder. His mother—overprotective and obsessive—launches her own investigation. But the deeper she digs, the more horrifying truths emerge. Bong Joon Ho\'s twisted maternal thriller reveals a woman whose love has curdled into something monstrous.',
        themes: ['Maternal Obsession', 'Justice vs Love', 'Class Prejudice', 'Moral Ambiguity'],
        awards: ['Asian Film Awards', 'Blue Dragon Film Awards']
    }),

    // 9. The Killing of a Sacred Deer
    399057: createMovieData({
        classWarfareIndex: 60, thrillerElements: 92, complexityLevel: 'HIGH', dominantColor: '#164e63',
        rating: 7.0, criticsScore: 79, audienceScore: 58,
        director: 'Yorgos Lanthimos', cast: ['Colin Farrell', 'Nicole Kidman', 'Barry Keoghan'],
        boxOffice: '$6.9 million', budget: '$6 million',
        dna: { Thriller: 50, Drama: 30, Horror: 20 },
        scenes: [
            { time: 15, intensity: 35, label: 'Martin Arrives', color: '#164e63' },
            { time: 45, intensity: 55, label: 'Paralysis', color: '#0e7490' },
            { time: 75, intensity: 75, label: 'Sacrifice', color: '#06b6d4' },
            { time: 100, intensity: 85, label: 'Choice', color: '#22d3ee' },
            { time: 118, intensity: 90, label: 'Punishment', color: '#67e8f9' }
        ],
        synopsis: 'Cardiac surgeon Steven lives a perfect upper-class life until mysterious teenager Martin enters their world. Martin demands a horrifying sacrifice. Lanthimos\'s icy thriller is Greek tragedy as psychological horror.',
        themes: ['Revenge', 'Moral Punishment', 'Class Guilt', 'Greek Tragedy'],
        awards: ['Cannes Best Screenplay', 'European Film Award']
    }),

    // 10. The Housemaid
    42506: createMovieData({
        classWarfareIndex: 88, thrillerElements: 80, complexityLevel: 'HIGH', dominantColor: '#7c2d12',
        rating: 6.4, criticsScore: 77, audienceScore: 62,
        director: 'Im Sang-soo', cast: ['Jeon Do-yeon', 'Lee Jung-jae', 'Youn Yuh-jung'],
        boxOffice: '$7.7 million', budget: '$3 million',
        dna: { Thriller: 60, Drama: 30, Romance: 10 },
        scenes: [
            { time: 15, intensity: 30, label: 'Hired', color: '#7c2d12' },
            { time: 45, intensity: 60, label: 'Seduction', color: '#991b1b' },
            { time: 75, intensity: 75, label: 'Pregnancy', color: '#b91c1c' },
            { time: 95, intensity: 85, label: 'Manipulation', color: '#dc2626' },
            { time: 105, intensity: 95, label: 'Destruction', color: '#ef4444' }
        ],
        synopsis: 'Eun-yi is hired as a housemaid for a wealthy family. When the husband seduces her and she becomes pregnant, the family\'s facade shatters. Im Sang-soo\'s erotic thriller exposes the violence lurking beneath wealth.',
        themes: ['Class Exploitation', 'Sexual Power', 'Revenge', 'Wealth\'s Cruelty'],
        awards: ['Cannes Official Selection', 'Asian Film Award Nomination']
    }),

    // 11. The Talented Mr. Ripley
    1213: createMovieData({
        classWarfareIndex: 78, thrillerElements: 90, complexityLevel: 'HIGH', dominantColor: '#083344',
        rating: 7.4, criticsScore: 84, audienceScore: 87,
        director: 'Anthony Minghella', cast: ['Matt Damon', 'Jude Law', 'Gwyneth Paltrow'],
        boxOffice: '$128.8 million', budget: '$40 million',
        dna: { Thriller: 50, Drama: 30, Crime: 20 },
        scenes: [
            { time: 20, intensity: 25, label: 'Italy', color: '#083344' },
            { time: 50, intensity: 50, label: 'Friendship', color: '#0c4a6e' },
            { time: 85, intensity: 75, label: 'Murder', color: '#075985' },
            { time: 115, intensity: 85, label: 'Impersonation', color: '#0284c7' },
            { time: 135, intensity: 90, label: 'Paranoia', color: '#0ea5e9' }
        ],
        synopsis: 'Tom Ripley is sent to Italy to retrieve wealthy playboy Dickie Greenleaf. But Tom doesn\'t want to return him—he wants to become him. Envious of Dickie\'s charm and privilege, Tom murders him and assumes his identity.',
        themes: ['Class Envy', 'Identity Theft', 'Obsession', 'Moral Decay'],
        awards: ['Academy Award Nominations', 'BAFTA Nominations']
    })
};

export const STRATEGIC_QUOTES = {
  
    290098: 'We\'re the same. You and I.',
    491584: 'There are so many Bens in Korea',
    110415: 'We go forward',
    11423: 'It\'s your face that I remember most',
    505192: 'When you die, I\'ll become Grandma',
    619264: 'There are three kinds of people: those above, those below, and those who fall',
    44865: 'Who cares if I\'m smart or stupid as long as I\'m better than him?',
    399057: 'A surgeon never apologizes',
    42506: 'I\'m going to destroy your family',
    1213: 'I always thought it would be better to be a fake somebody than a real nobody'
};

export const CINEMATIC_COLORS = {
    Thriller: '#1e293b', Drama: '#dc2626', Mystery: '#dc2626', 'Sci-Fi': '#0f172a',
    Crime: '#422006', Romance: '#be185d', 'Dark Comedy': '#1e293b', Action: '#0f172a'
};

export const RATING_OPTIONS = [
    { value: 1, label: 'A Disappointment', color: '#dc2626', symbol: '🎫', bgColor: 'bg-red-900/30', description: 'Torn ticket - Total disappointment' },
    { value: 2, label: 'Flawed', color: '#ea580c', symbol: '🎟️', bgColor: 'bg-orange-900/30', description: 'Faded ticket - Has major flaws' },
    { value: 3, label: 'Worth the Ride', color: '#16a34a', symbol: '🎟️', bgColor: 'bg-green-900/30', description: 'Clean ticket - Solid entertainment' },
    { value: 4, label: 'Exceptional', color: '#eab308', symbol: '🎫', bgColor: 'bg-yellow-900/30', description: 'Golden ticket - Cinematic masterpiece' }
];

export const PARASITE_MOVIE_FAQS = {
  'The Handmaiden': [
    { 
      question: "How does the three-part structure of The Handmaiden reframes the story?", 
      answer: "The film employs a 'Rashomon-style' narrative where events are replayed from shifting perspectives. Part 1 establishes a standard con; Part 2 reveals a secret alliance between the women that completely subverts previous scenes; and Part 3 executes the final retribution. This structure masterfully transforms a tale of victimization into one of ultimate empowerment." 
    },
    { 
      question: "What is the symbolism behind the language switching in The Handmaiden?", 
      answer: "Language is used as a weapon of colonial and patriarchal power. Characters switch to Japanese (the occupier's tongue) to assert authority or conceal the truth, while Korean is reserved for intimacy and rebellion. Sook-hee’s destruction of the Japanese library symbolizes the physical and cultural dismantling of the men who imprisoned Hideko." 
    },
    { 
      question: "Is the romance in The Handmaiden genuine or part of the con?", 
      answer: "While the relationship begins as a mutual deception, it evolves into a profound, genuine love. Their romance serves as the film’s ultimate act of defiance against the men who view them as mere commodities to be collected, traded, or married for fortune. It is love as an act of class and gender warfare." 
    },
    { 
      question: "What does the octopus represent in The Handmaiden?", 
      answer: "The octopus is a direct reference to the famous Japanese erotic print 'The Dream of the Fisherman's Wife,' symbolizing the Uncle's perverse, objectifying fantasies. By keeping it in a tank, the film highlights his obsession with 'collecting' and trapping exotic life—books, art, and women—in a stagnant, controlled environment." 
    }
  ],

  'Burning': [
    { 
      question: "Did Ben actually kill Haemi in the movie Burning?", 
      answer: "The film deliberately maintains ambiguity. While clues like the watch, the cat, and the 'burning greenhouses' metaphor strongly imply Ben is a serial killer targeting marginalized women, the brilliance lies in the uncertainty. The film asks if the viewer is seeing objective truth or Jong-su's class-fueled paranoia projecting evil onto a wealthy rival." 
    },
    { 
      question: "What is the meaning of the 'burning greenhouses' metaphor in Burning?", 
      answer: "Ben’s claim that he burns abandoned, 'useless' greenhouses is widely interpreted as a chilling metaphor for murdering women whom society has forgotten or marginalized. It illustrates the terrifying callousness of the ultra-rich, who view the working class as expendable clutter to be removed for their own fleeting amusement." 
    },
    { 
      question: "What does the 'Great Hunger' dance signify in Burning?", 
      answer: "Haemi's twilight dance to Miles Davis represents her search for the 'Great Hunger'—the search for life’s meaning—as opposed to the 'Little Hunger' of physical survival. It is a moment of tragic beauty and freedom before she vanishes into a society that doesn't value her existence, leaving only a void behind." 
    },
    { 
      question: "What is the significance of the final scene in Burning?", 
      answer: "Jong-su stripping naked after the murder is a primal act of shedding his social identity. Throughout the film, he is constrained by poverty and social etiquette. His violent final act is his only way to reclaim agency in a world where men like Ben possess everything, turning a psychological thriller into a literal act of class warfare." 
    }
  ],

  'Snowpiercer': [
    { 
      question: "What does the train symbolize in Snowpiercer?", 
      answer: "The train is a microcosmic model of a capitalist hierarchy. The front section represents the hedonistic elite, while the tail section houses the impoverished proletariat. The film argues that the system is not broken; it is designed to run specifically on the suffering of the back section to maintain the luxury of the front." 
    },
    { 
      question: "What is the truth about the protein blocks in Snowpiercer?", 
      answer: "The discovery that the gelatinous bars are made of ground-up insects reveals how the elite dehumanize the poor, feeding them 'pests' while they enjoy sushi and steak. It is a visceral representation of resource inequality and the psychological degradation required to keep a class structure intact." 
    },
    { 
      question: "Why does Curtis choose to destroy the train at the end of Snowpiercer?", 
      answer: "Curtis realizes that simply replacing the leader (Wilford) at the front won't change the oppression—it just changes the operator. The film posits that true revolution is not about taking control of an unjust system, but destroying the system entirely ('derailing the train') to build something truly new." 
    },
    { 
      question: "What does the polar bear at the end of Snowpiercer mean?", 
      answer: "The polar bear proves that life is sustainable outside the train, refuting Wilford’s propaganda that the engine is the only way to survive. It symbolizes hope for a natural, uncorrupted future for humanity, free from the rigid class structures that the train enforced." 
    }
  ],

  'Memories of Murder': [
    { 
      question: "Why does the detective stare at the camera at the end of Memories of Murder?", 
      answer: "In the final shot, Detective Park breaks the fourth wall to stare directly at the audience. Director Bong Joon-ho intended this as a direct confrontation for the real-life killer (who remained uncaught at the time of release). It asks the chilling question: 'Are you watching this right now?'—implying the monster is an ordinary person hiding among us." 
    },
    { 
      question: "How does Memories of Murder critique the South Korean police?", 
      answer: "The film depicts 1980s investigators as brutal, technologically backward, and obsessed with coerced confessions. Their reliance on 'drop-kicking' suspects and fabricating evidence highlights how a culture of police corruption and incompetence under a military dictatorship allowed a real-life serial killer to escape justice for decades." 
    },
    { 
      question: "Is Memories of Murder based on a true story?", 
      answer: "Yes, it is based on the Hwaseong serial murders (1986–1991). The film captures the national trauma of a time when society felt helpless against darkness. The title refers to the lingering memories of those unsolved crimes, emphasizing the 'banality of evil'—the idea that the killer was never a monster from a movie, but a quiet neighbor." 
    },
    { 
      question: "Why is Memories of Murder called an 'anti-procedural'?", 
      answer: "Unlike traditional crime films that offer closure, this film focuses on the failure of truth. It captures the frustration of evidence being washed away by rain, DNA samples being contaminated, and suspects dying. It is a study in helplessness, reflecting the reality of an investigation that remained cold for over 30 years." 
    }
  ],

  'Shoplifters': [
    { 
      question: "What is the central irony of the title Shoplifters?", 
      answer: "The title suggests a film about criminals, but it reveals a unit bonded by deeper love than most biological families. The irony is that this 'fake' family, formed through crime and mutual need, provides more genuine care and sanctuary than the 'real' families that abandoned or abused these characters." 
    },
    { 
      question: "What does Shoplifters say about 'Chosen Family' vs. biological bonds?", 
      answer: "Through the character of Grandma Hatsue and her ragtag household, the film suggests that shared survival and chosen kindness create stronger, more ethical bonds than genetics. It challenges the legal and social definition of 'family,' arguing that love is an action, not a birthright." 
    },
    { 
      question: "Is the ending of Shoplifters a tragedy?", 
      answer: "It is a tragedy disguised as the return to 'social order.' When the law separates the family, the children are returned to neglectful environments. The film critiques a rigid society that values legal paperwork over actual human well-being, showing how the 'system' often destroys the only safety marginalized people have." 
    },
    { 
      question: "How does Shoplifters portray poverty in modern Japan?", 
      answer: "It exposes 'invisible' poverty in a high-wealth nation. The characters work hard but cannot survive without theft. The film critiques the cracks in the social safety net that force the elderly and the young to form alternative, illegal communities just to secure their basic survival." 
    }
  ],

  'The Platform': [
    { 
      question: "What is the meaning of the vertical prison in The Platform?", 
      answer: "The 'Vertical Self-Management Center' is a brutal allegory for trickle-down economics. While there is enough food for everyone, greed at the top leads to starvation at the bottom. The film argues that without enforced rationing or 'spontaneous solidarity,' a fair society is impossible within a hierarchical system." 
    },
    { 
      question: "What does the girl at the end of The Platform represent?", 
      answer: "The child on the lowest level represents the system's ultimate victim and its greatest lie. Sending her to Level 0 is 'The Message' to the administration that their 'perfect' system has failed. She symbolizes the hope that the only way to disrupt a corrupt hierarchy is to protect the most vulnerable at all costs." 
    },
    { 
      question: "Why does the protagonist carry a copy of Don Quixote in The Platform?", 
      answer: "Goreng represents the idealist intellectual who believes culture and reason can change a broken world. His journey from reading Cervantes to becoming a violent revolutionary shows how extreme hunger and systemic cruelty can crush even the most noble idealism, forcing a man to become a 'knight' of a much darker sort." 
    },
    { 
      question: "What does 'Obvio' signify in The Platform?", 
      answer: "The catchphrase 'Obvio' (Obviously) reflects the dangerous acceptance of a cruel status quo. It represents the mindset that inequality is 'just how things are.' The film challenges the audience to stop viewing systemic injustice as 'obvious' and to start viewing it as a choice that can be unmade." 
    }
  ],

  'Mother': [
    { 
      question: "Is the son actually guilty in Bong Joon-ho's Mother?", 
      answer: "Yes. The shocking twist reveals that the son, Do-joon, did commit the murder. The true horror of the film is not his crime, but the lengths to which his mother goes—including murdering a witness and framing an innocent man—to protect her own delusion of his innocence." 
    },
    { 
      question: "What is the meaning of the acupuncture theme in Mother?", 
      answer: "The mother is an unlicensed acupuncturist who claims she can hit 'memory points' to erase bad thoughts. This is a metaphor for 'willful ignorance.' To survive the monstrous reality of her son's nature and her own crimes, she literally and figuratively uses her needles to 'forget' the truth." 
    },
    { 
      question: "How does the opening and closing dance connect in Mother?", 
      answer: "The mother's dance bookmarks her descent. In the beginning, it is an expression of her eccentric, chaotic life. By the end, the dance is a hypnotic, drug-like trance in the sunlight—a desperate attempt to shake off the physical and moral weight of the blood on her hands." 
    },
    { 
      question: "How does Mother subvert the 'Sacrificial Mother' trope?", 
      answer: "Bong Joon-ho takes the ideal of 'unconditional maternal love' and turns it into a destructive, monstrous force. The film suggests that a mother's instinct can bypass all morality and social law, asking if such a love is truly a virtue or a dangerous, selfish form of madness." 
    }
  ],

  'The Killing of a Sacred Deer': [
    { 
      question: "What is the mythological origin of The Killing of a Sacred Deer?", 
      answer: "The film is a modern adaptation of the Greek tragedy 'Iphigenia at Aulis.' In the myth, King Agamemnon must sacrifice his daughter to appease the goddess Artemis after killing a sacred deer. In the film, a surgeon must sacrifice a family member to pay for the accidental 'killing' of a patient." 
    },
    { 
      question: "Why is the dialogue so stilted in The Killing of a Sacred Deer?", 
      answer: "Director Yorgos Lanthimos uses a deadpan, monotone delivery to strip away the characters' emotional masks. This technique highlights the absurdity of the upper class's sterile, polite existence, which completely fails them when they are confronted with primal, supernatural justice." 
    },
    { 
      question: "What is the significance of the spaghetti scene in The Killing of a Sacred Deer?", 
      answer: "The scene where Martin messily eats spaghetti while calmly threatening to destroy Steven’s family is iconic for its 'banality of evil.' The contrast between a mundane domestic act and a horrific supernatural ultimatum emphasizes Martin’s total lack of empathy and the cold inevitability of his curse." 
    },
    { 
      question: "What does the film say about science vs. fate?", 
      answer: "The surgeon, a man of absolute science, is forced to confront a reality that cannot be diagnosed or operated on. The illness represents a 'divine' or 'cosmic' debt. The film argues that even in a modern, rational world, ancient laws of 'an eye for an eye' still hold a terrifying, unexplainable power." 
    }
  ],

  'The Housemaid': [
    { 
      question: "How did the 1960 film The Housemaid inspire Parasite?", 
      answer: "Director Bong Joon-ho cites this classic as his primary influence. Both films explore a working-class 'intruder' dismantling a wealthy household from the inside, use staircases to represent social mobility, and turn a domestic sanctuary into a psychological and physical battlefield." 
    },
    { 
      question: "What does the Housemaid symbolize in the film?", 
      answer: "She is a symbol of class disruption and the 'Return of the Repressed.' She enters the bourgeois home and systematically exposes the fragility of the nuclear family. Her presence represents the chaotic, primal forces that a rigid, middle-class society tries—and fails—to keep out." 
    },
    { 
      question: "What is the role of rat poison in The Housemaid?", 
      answer: "Rat poison is a recurring motif that blurs the line between who is a 'pest' and who is a 'human.' While intended to kill vermin (the poor), it becomes the weapon that destroys the 'superior' family. It suggests that the toxicity of class envy eventually poisons everyone under the same roof." 
    },
    { 
      question: "Is the ending of The Housemaid a dream?", 
      answer: "The 'dream' meta-ending was likely a requirement of 1960s censors to provide a moral warning against infidelity. However, modern critics view the 'dream' as a layer of denial, emphasizing that the destruction of the family is the inevitable psychological reality of their social structure." 
    }
  ],

  'The Talented Mr. Ripley': [
    { 
      question: "Is Tom Ripley a victim of class in The Talented Mr. Ripley?", 
      answer: "Tom is a manifestation of extreme class envy. He doesn't just desire Dickie Greenleaf’s money; he desires his *identity*—his ease, his history, and his social invisibility. The film explores how a society that excludes the 'nobodies' can drive them to a desperate, violent form of assimilation." 
    },
    { 
      question: "What is the meaning of the 'Real Nobody vs. Fake Somebody' quote?", 
      answer: "This is Tom's tragic thesis. He believes that living a lie as a wealthy man is superior to living a 'real' life of poverty and social insignificance. It highlights the crushing weight of class-based invisibility and how, in a capitalist world, a person's worth is often tied entirely to their outward status." 
    },
    { 
      question: "How does the setting of Italy enhance the themes of The Talented Mr. Ripley?", 
      answer: "Italy acts as a moral 'playground' for the wealthy American elite. It is a beautiful, consequence-free backdrop for Dickie, but a high-stakes labyrinth for Tom. The setting emphasizes the massive gap between the locals (and Tom) and the tourists for whom life is a permanent, shallow vacation." 
    },
    { 
      question: "How does Tom Ripley's character mirror the themes of Parasite?", 
      answer: "Both explore the 'Infiltrator' archetype. Like the Kim family, Tom Ripley uses his talent for mimicry and deception to inhabit a world he wasn't born into. Both films suggest that the 'lower' class often knows the 'upper' class better than they know themselves, using that knowledge as a tool for survival and social theft." 
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

// 🔥 6. THE KEYWORD BRIDGE (Upgraded for maximum SEO power)
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

    const staticFaqs = PARASITE_MOVIE_FAQS[movie.Title] ? [...PARASITE_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = PARASITE_MOVIE_FAQS[movieTitle] ? [...PARASITE_MOVIE_FAQS[movieTitle]] : [];
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