// utils/parasiteMovieData.js - MOVIES LIKE PARASITE COLLECTION 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
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
    { tmdbId: 326359, imdbID: 'tt5715874', Title: 'The Killing of a Sacred Deer', year: 2017, genre: 'Thriller', runtime: 121, rank: 8 },
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
    290098: { scenes: [{ start: '0:35:20', end: '0:36:45', type: 'Sex scene', severity: 'Strong', description: 'Explicit lesbian scene' }, { start: '1:42:10', end: '1:43:30', type: 'Sex scene', severity: 'Strong' }, { start: '2:04:15', end: '2:05:20', type: 'Nudity', severity: 'Strong' }] },
    491584: { scenes: [{ start: '1:58:40', end: '1:59:15', type: 'Nudity', severity: 'Moderate', description: 'Female topless' }] },
    110415: { scenes: [] },
    11423: { scenes: [] },
    505192: { scenes: [{ start: '0:42:10', end: '0:42:25', type: 'Partial nudity', severity: 'Mild' }, { start: '1:23:50', end: '1:24:10', type: 'Nudity', severity: 'Mild', description: 'Non-sexual bathing scene' }] },
    619264: { scenes: [] },
    44865: { scenes: [] },
    326359: { scenes: [{ start: '0:14:20', end: '0:14:40', type: 'Nudity', severity: 'Moderate', description: 'Male full-frontal nudity' }] },
    42506: { scenes: [{ start: '0:48:15', end: '0:49:30', type: 'Sex scene', severity: 'Strong' }, { start: '1:22:40', end: '1:23:50', type: 'Sex scene', severity: 'Strong', description: 'Explicit scene' }] },
    1213: { scenes: [{ start: '0:52:30', end: '0:53:10', type: 'Nudity', severity: 'Moderate', description: 'Male buttocks' }, { start: '1:44:15', end: '1:45:20', type: 'Kissing', severity: 'Mild' }] }
};

export const FALLBACK_POSTERS = {
    290098: 'https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
    491584: 'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTkwMl5BMl5BanBnXkFtZTgwMjE2MjA0NjM@._V1_SX500.jpg',
    110415: 'https://m.media-amazon.com/images/M/MV5BMTQ3NzUzOTc5MV5BMl5BanBnXkFtZTgwMzE2ODg1MDE@._V1_SX500.jpg',
    11423: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LWJkOTktMWRmNWNhNjg2MzVkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX500.jpg',
    505192: 'https://m.media-amazon.com/images/M/MV5BZjE3OTU3OTIwOV5BMl5BanBnXkFtZTgwNzU5OTMwNjM@._V1_SX500.jpg',
    619264: 'https://m.media-amazon.com/images/M/MV5BMjEzMjcxODg3Nl5BMl5BanBnXkFtZTgwNzUwMTkwODM@._V1_SX500.jpg',
    44865: 'https://m.media-amazon.com/images/M/MV5BMTc0NzY2OTU0MF5BMl5BanBnXkFtZTcwMDI4MjM1Mw@@._V1_SX500.jpg',
    326359: 'https://m.media-amazon.com/images/M/MV5BNTFiODAzNTktODRmNy00ODY2LTgyNjQtZjRkYzFkY2Y4NDM5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
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
    326359: createMovieData({
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
    496243: 'You know what kind of plan never fails? No plan at all.',
    290098: 'We\'re the same. You and I.',
    491584: 'There are so many Bens in Korea',
    110415: 'We go forward',
    11423: 'It\'s your face that I remember most',
    505192: 'When you die, I\'ll become Grandma',
    619264: 'There are three kinds of people: those above, those below, and those who fall',
    44865: 'Who cares if I\'m smart or stupid as long as I\'m better than him?',
    326359: 'A surgeon never apologizes',
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
      question: "How does the three-part structure change the story?", 
      answer: "The film uses a 'Rashomon-style' narrative where the same events are replayed from different perspectives. Part 1 sets up the con, Part 2 reveals the secret alliance between the women that completely reframes the previous scenes, and Part 3 delivers the final retribution. It turns a story of victimization into one of masterful empowerment." 
    },
    { 
      question: "What is the significance of the Japanese/Korean language switch?", 
      answer: "The language switching is a tool of power and colonial submission. Characters switch to Japanese (the occupier's language) to assert authority or hide truth, while Korean is used for intimacy. Sook-hee destroying the Japanese library symbolizes the destruction of the colonial patriarchal authority that imprisoned Hideko." 
    },
    { 
      question: "Is the relationship between the women genuine or a con?", 
      answer: "While it starts as a mutual con—Sook-hee planning to institutionalize Hideko, and Hideko planning to use Sook-hee as a scapegoat—it evolves into genuine love. Their romance becomes the ultimate rebellion against the men who view them merely as objects to be collected, sold, or married for fortune." 
    },
    { 
      question: "Why is the octopus imagery significant?", 
      answer: "The octopus is a reference to the famous Japanese erotic print 'The Dream of the Fisherman's Wife,' symbolizing the Uncle's perverse, objectifying fantasy. By keeping the octopus in a tank, the film highlights how he collects 'exotic' things—books, porn, and women—trapping them in a dead, stagnant environment." 
    }
  ],

  'Burning': [
    { 
      question: "Did Ben actually kill Haemi?", 
      answer: "The film deliberately never confirms it, but the clues (the watch, the cat, the 'burning greenhouses' metaphor) strongly imply he is a serial killer who targets lonely, 'useless' women. However, the brilliance of the film lies in the ambiguity—it could all be Jong-su's class-fueled paranoia projecting evil onto a wealthy rival." 
    },
    { 
      question: "What does the 'burning greenhouses' metaphor mean?", 
      answer: "Ben claims he burns abandoned greenhouses because they are 'dirty and useless.' This is likely a chilling metaphor for murdering marginalized women whom society won't miss. It highlights the terrifying callousness of the ultra-rich who view the poor as expendable clutter to be removed for their own amusement." 
    },
    { 
      question: "Why is the 'Great Hunger' dance scene so famous?", 
      answer: "Haemi's topless dance at twilight to Miles Davis is the film's emotional peak. It represents her desperate search for the 'Great Hunger' (meaning of life) versus the 'Little Hunger' (physical survival). It is a moment of pure, tragic freedom before she disappears into the void of a society that doesn't value her." 
    },
    { 
      question: "What is the significance of the final scene?", 
      answer: "Jong-su stripping naked after the murder is a primal act of shedding his social identity. Throughout the film, he is constrained by poverty and politeness. The violent finale is his only way to reclaim agency in a world where men like Ben hold all the power. It is an act of class warfare turned literal." 
    }
  ],

  'Snowpiercer': [
    { 
      question: "What does the train symbolize?", 
      answer: "The train is a literal model of capitalism. The front section represents the ultra-rich living in hedonistic luxury, while the tail section represents the impoverished proletariat kept in squalor. The train relies on the suffering of the back to power the front, arguing that the system isn't 'broken'—it's working exactly as designed." 
    },
    { 
      question: "What is the horrifying truth about the protein blocks?", 
      answer: "The black gelatinous bars fed to the tail section are made of ground-up cockroaches. This reveals how the elite dehumanize the poor, literally feeding them pests, while they dine on sushi and steak. It is a visceral representation of the resource inequality that sustains the class divide." 
    },
    { 
      question: "Why does Curtis refuse to take control of the engine?", 
      answer: "Curtis realizes that replacing Wilford at the front of the train doesn't change the system; it just changes the operator. He chooses to derail the train instead because the film argues that true revolution isn't about taking power within an unjust system, but destroying the system entirely to build something new." 
    },
    { 
      question: "What is the meaning of the ending with the polar bear?", 
      answer: "The derailment kills almost everyone, but the survival of the two children and the sighting of the polar bear proves that life is possible outside the system. It refutes Wilford's lie that the train (capitalism) is the only way to survive. It symbolizes hope for a natural, uncorrupted future." 
    }
  ],

  'Memories of Murder': [
    { 
      question: "Why is the ending stare so haunting?", 
      answer: "In the final shot, Detective Park stares directly into the camera. Bong Joon Ho intended this for the real-life killer (who was caught years later in 2019). It breaks the fourth wall to ask the audience: 'Are you him?' It implies the killer is an ordinary-looking person hiding in plain sight among us." 
    },
    { 
      question: "How does the film criticize the police?", 
      answer: "Unlike Hollywood cop movies where technology solves crimes, this film depicts the 1980s Korean police as brutal, incompetent, and obsessed with forced confessions. Their reliance on 'drop-kicking' suspects and fabricating evidence is shown as a major reason the killer was able to slip away for so long." 
    },
    { 
      question: "What is the significance of the 'ordinary' killer?", 
      answer: "The film emphasizes the banality of evil. The suspects aren't comic book villains; they are factory workers and locals. The title refers to the memories of a time when the nation was helpless against darkness, highlighting how the chaos of the military dictatorship allowed such crimes to go unsolved." 
    },
    { 
      question: "Why is it considered an 'anti-procedural'?", 
      answer: "Traditional crime films offer closure and justice. *Memories of Murder* offers neither. It is about the failure of truth and the frustration of not knowing. The rain washes away footprints, DNA samples get confused, and suspects die. It captures the feeling of helplessness rather than the triumph of justice." 
    }
  ],

  'Shoplifters': [
    { 
      question: "What is the meaning of the title vs. the family?", 
      answer: "The title suggests a film about criminals, but the story reveals a tender, loving family unit. The irony is that this 'fake' family, bonded by crime and choice, shows more genuine love and care than the 'real' biological families that abused and abandoned these characters." 
    },
    { 
      question: "Why does the grandmother keep the family together?", 
      answer: "Grandma Hatsue is the financial anchor (via her pension) and the emotional center. Her home provides a sanctuary for society's castaways. Her character challenges the concept of blood relation, suggesting that shared survival and kindness create stronger bonds than genetics." 
    },
    { 
      question: "Is the ending a tragedy or a return to order?", 
      answer: "It is a tragedy disguised as order. The law separates the family and returns the children to their 'rightful' but abusive or neglectful environments. The film critiques a society that values legal definitions of family over actual well-being, showing how the 'system' destroys the only safety these characters had." 
    },
    { 
      question: "What does the film say about poverty in Japan?", 
      answer: "It exposes the 'invisible' poverty in a wealthy nation. The Shibatas work hard but can't survive without stealing. It critiques the social safety net that lets children and the elderly slip through the cracks, forcing them to form alternative, illegal communities just to survive." 
    }
  ],

  'The Platform': [
    { 
      question: "What does the 'Vertical Self-Management Center' represent?", 
      answer: "It is a brutal allegory for trickle-down economics. There is enough food for everyone, but those at the top gorge themselves, leaving nothing for those below. It argues that human greed and a lack of 'spontaneous solidarity' make a fair system impossible without enforced rationing." 
    },
    { 
      question: "What is the message behind the ending with the girl?", 
      answer: "The child on the lowest level represents the system's ultimate victim. Sending her back up to Level 0 is 'The Message' to the Administration that the system is broken. It suggests that the only way to disrupt a corrupt hierarchy is to protect the most vulnerable, even at the cost of your own life." 
    },
    { 
      question: "Why does Goreng bring a book (Don Quixote)?", 
      answer: "Goreng represents the idealist intellectual who thinks he can change the world with culture and reason. He is contrasted with Trimagasi (the realist/consumer). The film shows how idealism is quickly crushed by hunger, forcing Goreng to become a violent revolutionary to survive." 
    },
    { 
      question: "What is the significance of the word 'Obvio'?", 
      answer: "Trimagasi's catchphrase 'Obvio' (Obviously) reflects the acceptance of the cruel status quo. To him, it is 'obvious' that those above eat and those below starve. The film fights against this complacency, challenging the audience to question inequalities that we accept as 'obvious' in the real world." 
    }
  ],

  'Mother': [
    { 
      question: "Is the son actually guilty?", 
      answer: "Yes. The twist reveals that the mentally disabled son, Do-joon, did kill the girl, albeit perhaps misunderstanding the situation. The horror of the film is not his guilt, but the lengths his mother goes to—murdering a witness and framing an innocent man—to protect him." 
    },
    { 
      question: "What does the opening and closing dance symbolize?", 
      answer: "The mother's dance represents a descent into madness and a desperate attempt to shake off the pain of her reality. It bookmarks the film: in the beginning, it's an expression of her chaotic life; at the end, it is a hypnotic, acupuncture-induced trance to forget the monstrous crimes she committed." 
    },
    { 
      question: "How does the acupuncture theme fit the story?", 
      answer: "The mother is an unlicensed acupuncturist who claims to hit 'memory points' to help people forget bad memories. This is the central theme: willful ignorance. To survive and live with herself, she chooses to erase the truth, physically and metaphorically closing her eyes to her son's nature." 
    },
    { 
      question: "How does this compare to traditional mother figures?", 
      answer: "Bong Joon Ho subverts the 'sacrificial mother' trope. Instead of a noble protector, she becomes a monster. Her maternal instinct is so intense it bypasses all morality. The film asks a terrifying question: Is a mother's love a form of unconditional good, or can it be a destructive, selfish force?" 
    }
  ],

  'The Killing of a Sacred Deer': [
    { 
      question: "What is the myth behind the story?", 
      answer: "The film is a modern retelling of the Greek myth of Iphigenia. King Agamemnon killed a sacred deer belonging to Artemis, and to balance the scales, he had to sacrifice his daughter. Here, the surgeon (Agamemnon) accidentally killed Martin's father (the deer), and Martin (Artemis) demands a blood sacrifice in return." 
    },
    { 
      question: "Why is the acting so wooden and deadpan?", 
      answer: "Yorgos Lanthimos directs his actors to speak in a stilted, emotionless monotone. This Brechtian technique creates a sense of detachment and uncanniness. It highlights the absurdity of the upper class's polite facade, which cracks only when faced with primal, supernatural violence." 
    },
    { 
      question: "What does the spaghetti eating scene signify?", 
      answer: "It is one of the most unsettling scenes in modern horror. Martin eats spaghetti messily while explaining his plan to destroy Steven's family. The contrast between the mundane act of eating and the horrific threat emphasizes Martin's total lack of empathy and the inevitability of the curse." 
    },
    { 
      question: "Is there a logical explanation for the illness?", 
      answer: "No, and the film refuses to give one. The doctors' inability to diagnose the paralysis represents the failure of science and rationality against cosmic justice. Steven, a man of science (surgeon), is forced to accept a supernatural reality where 'an eye for an eye' is the only law that matters." 
    }
  ],

  'The Housemaid': [
    { 
      question: "How did this film inspire Parasite?", 
      answer: "Bong Joon Ho cites this 1960 classic as his biggest influence. Both films feature a working-class intruder entering a wealthy home, the use of stairs to represent social hierarchy, and a domestic space turning into a battlefield. It established the 'home invasion' genre in Korean cinema." 
    },
    { 
      question: "What does the Housemaid represent?", 
      answer: "She is the ultimate 'Femme Fatale' and a symbol of class disruption. She enters the bourgeois home and systematically dismantles the nuclear family through seduction and manipulation. She represents the repressed chaotic forces that the rigid, middle-class society tries to keep out." 
    },
    { 
      question: "What is the significance of the rat poison?", 
      answer: "Rat poison is a recurring motif representing the toxicity within the household. It is used to kill rats (pests/poor), but eventually becomes the weapon that destroys the family itself. It blurs the line between who is the pest and who is the homeowner." 
    },
    { 
      question: "Why is the ending considered a 'cop-out'?", 
      answer: "The film ends with the husband addressing the audience, warning them about affairs, revealing the plot might have been a dream. This was likely forced by 1960s censors to uphold moral standards. Modern viewers often ignore this meta-ending, focusing on the bleak destruction that preceded it." 
    }
  ],

  'The Talented Mr. Ripley': [
    { 
      question: "Is Tom Ripley a villain or a victim of class?", 
      answer: "Tom is a complex anti-hero driven by intense class envy. He doesn't just want money; he wants *to be* Dickie Greenleaf—to have his taste, confidence, and privilege. The film explores how the exclusion of the working class can curdle into a desperate, violent need to assimilate." 
    },
    { 
      question: "What does the quote 'fake somebody vs real nobody' mean?", 
      answer: "This is Tom's core philosophy. He would rather live a lie as a wealthy man than accept his reality as a poor 'nobody.' It highlights the crushing weight of social invisibility and how identity in a capitalist society is often defined solely by status and possessions." 
    },
    { 
      question: "How does the film handle the queer subtext?", 
      answer: "Unlike the book, the film makes Tom's attraction to Dickie explicit. This adds a layer of tragedy—Tom is rejected not just for his class, but for his love. His murder of Dickie is a 'crime of passion' born from the humiliation of being looked down upon by the person he idolizes." 
    },
    { 
      question: "What role does Italy play in the film?", 
      answer: "Italy serves as the ultimate playground for the wealthy American elite. It is beautiful but morally lawless for them. The setting emphasizes the gap between the locals/Tom and the tourists like Dickie, for whom life is just an endless, consequence-free vacation." 
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
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PARASITE_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A gripping class warfare film`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Acclaimed Director' },
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