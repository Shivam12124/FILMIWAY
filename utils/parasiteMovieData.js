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

const createMovieData = (data) => data;

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

export const SENSITIVE_TIMELINES = {
    496243: { scenes: [{ start: '0:57:20', end: '0:57:35', type: 'Kissing', severity: 'Mild' }, { start: '1:38:45', end: '1:39:10', type: 'Implied sex', severity: 'Moderate' }] },
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
    496243: 'https://m.media-amazon.com/images/M/MV5BZWFlYmRiNTEtNjQ1Ny00YzQ4LWFkNDMtNzc0MjExNDdhYjlmXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX500.jpg',
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
    496243: createMovieData({
        classWarfareIndex: 100, complexityLevel: 'MASTERPIECE', dominantColor: '#1e293b',
        rating: 8.5, criticsScore: 98, audienceScore: 93,
        director: 'Bong Joon Ho', cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
        boxOffice: '$258.8 million', budget: '$11.4 million',
        dna: { Thriller: 50, Drama: 30, 'Dark Comedy': 20 },
        scenes: [
            { time: 15, intensity: 30, label: 'Infiltration', color: '#1e293b' },
            { time: 40, intensity: 55, label: 'Deception', color: '#334155' },
            { time: 70, intensity: 45, label: 'Feast', color: '#475569' },
            { time: 95, intensity: 75, label: 'Revelation', color: '#64748b' },
            { time: 125, intensity: 95, label: 'Chaos', color: '#94a3b8' }
        ],
        synopsis: 'The Kim family—unemployed, desperate, and living in a squalid semi-basement—sees an opportunity when son Ki-woo is hired to tutor the daughter of the wealthy Park family. One by one, the Kims infiltrate the Park household, posing as unrelated professionals. But their con spirals out of control when they discover they aren\'t the only ones with secrets hiding in the shadows. Bong Joon Ho\'s Palme d\'Or and Oscar-winning masterpiece is a razor-sharp dissection of class inequality, where dark comedy collides with shocking violence.',
        themes: ['Class Inequality', 'Capitalism', 'Family', 'Deception'],
        awards: ['Academy Award Winner (Best Picture)', 'Palme d\'Or Winner', 'BAFTA Winner']
    }),
    290098: createMovieData({
        classWarfareIndex: 85, complexityLevel: 'HIGH', dominantColor: '#be185d',
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
    491584: createMovieData({
        classWarfareIndex: 80, complexityLevel: 'HIGH', dominantColor: '#dc2626',
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
    110415: createMovieData({
        classWarfareIndex: 95, complexityLevel: 'EXTREME', dominantColor: '#0f172a',
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
    11423: createMovieData({
        classWarfareIndex: 70, complexityLevel: 'HIGH', dominantColor: '#422006',
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
        synopsis: 'In 1986 South Korea—under military dictatorship with no forensic infrastructure—a serial killer terrorizes a rural province. Two detectives struggle with science they don\'t have and justice the system won\'t allow. Bong Joon Ho\'s masterpiece explores institutional failure and class injustice.',
        themes: ['Institutional Failure', 'Justice Denied', 'Class Injustice', 'Authoritarianism'],
        awards: ['Asian Film Awards', 'Blue Dragon Film Awards']
    }),
    505192: createMovieData({
        classWarfareIndex: 75, complexityLevel: 'MEDIUM', dominantColor: '#0369a1',
        rating: 7.9, criticsScore: 99, audienceScore: 91,
        director: 'Hirokazu Kore-eda', cast: ['Lily Franky', 'Sakura Ando', 'Mayu Matsuoka'],
        boxOffice: '$68.2 million', budget: '$8.2 million',
        dna: { Drama: 70, Family: 25, 'Social Commentary': 5 },
        scenes: [
            { time: 15, intensity: 20, label: 'Family Life', color: '#0369a1' },
            { time: 40, intensity: 35, label: 'Yuri Arrives', color: '#0284c7' },
            { time: 70, intensity: 50, label: 'Beach Trip', color: '#0ea5e9' },
            { time: 95, intensity: 75, label: 'Discovery', color: '#38bdf8' },
            { time: 115, intensity: 85, label: 'Separation', color: '#7dd3fc' }
        ],
        synopsis: 'On the margins of Tokyo, the Shibata family survives through petty shoplifting and low-wage work. When they take in an abused girl named Yuri, their fragile happiness grows—until authorities discover their secret. What defines a family? Kore-eda\'s Palme d\'Or winner is a devastating portrait of Japan\'s invisible underclass.',
        themes: ['Chosen Family', 'Poverty', 'Social Invisibility', 'Love vs Law'],
        awards: ['Palme d\'Or Winner', 'Academy Award Nomination']
    }),
    619264: createMovieData({
        classWarfareIndex: 92, complexityLevel: 'EXTREME', dominantColor: '#57534e',
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
        synopsis: 'In a vertical prison where inmates are assigned random levels, a food platform descends daily—loaded at top, empty at bottom. Those above feast. Those below starve. This Spanish sci-fi nightmare is capitalism where sharing means dying and selfishness means survival.',
        themes: ['Capitalism', 'Resource Inequality', 'Human Nature', 'Survival Ethics'],
        awards: ['Goya Award Nomination', 'Sitges Film Festival Winner']
    }),
    44865: createMovieData({
        classWarfareIndex: 65, complexityLevel: 'MEDIUM', dominantColor: '#1e3a8a',
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
    326359: createMovieData({
        classWarfareIndex: 60, complexityLevel: 'HIGH', dominantColor: '#164e63',
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
        synopsis: 'Cardiac surgeon Steven lives a perfect upper-class life until mysterious teenager Martin enters their world. Martin demands a horrifying sacrifice. Lanthimos\'s icy thriller is Greek tragedy as psychological horror where rationality collapses and moral choices become impossible.',
        themes: ['Revenge', 'Moral Punishment', 'Class Guilt', 'Greek Tragedy'],
        awards: ['Cannes Best Screenplay', 'European Film Award']
    }),
   42506: createMovieData({
        classWarfareIndex: 88, complexityLevel: 'HIGH', dominantColor: '#7c2d12',
        rating: 6.4, criticsScore: 77, audienceScore: 62,
        director: 'Im Sang-soo', cast: ['Jeon Do-yeon', 'Lee Jung-jae', 'Youn Yuh-jung'],
        boxOffice: '$7.7 million', budget: '$3 million',
        dna: { Thriller: 60, Drama: 30, Erotic: 10 },
        scenes: [
            { time: 15, intensity: 30, label: 'Hired', color: '#7c2d12' },
            { time: 45, intensity: 60, label: 'Seduction', color: '#991b1b' },
            { time: 75, intensity: 75, label: 'Pregnancy', color: '#b91c1c' },
            { time: 95, intensity: 85, label: 'Manipulation', color: '#dc2626' },
            { time: 105, intensity: 95, label: 'Destruction', color: '#ef4444' }
        ],
        synopsis: 'Eun-yi is hired as a housemaid for a wealthy family. When the husband seduces her and she becomes pregnant, the family\'s facade shatters. Im Sang-soo\'s erotic thriller exposes the violence lurking beneath wealth. This is class as sexual exploitation.',
        themes: ['Class Exploitation', 'Sexual Power', 'Revenge', 'Wealth\'s Cruelty'],
        awards: ['Cannes Official Selection', 'Asian Film Award Nomination']
    }),
    1213: createMovieData({
        classWarfareIndex: 78, complexityLevel: 'HIGH', dominantColor: '#083344',
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
        synopsis: 'Tom Ripley is sent to Italy to retrieve wealthy playboy Dickie Greenleaf. But Tom doesn\'t want to return him—he wants to become him. Envious of Dickie\'s charm and privilege, Tom murders him and assumes his identity. Minghella\'s thriller reveals class envy as existential crisis.',
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
    'Parasite': [
        { question: 'What is the meaning behind Parasite?', answer: 'Class inequality & capitalism. Both families are parasites—the Kims infiltrate the Parks\' home, but the Parks rely on exploiting cheap labor.' },
        { question: 'Is Parasite based on a true story?', answer: 'No, but Bong Joon Ho was inspired by his own tutor experience and South Korea\'s extreme wealth gap.' },
        { question: 'Why did Parasite win the Oscar?', answer: 'Universal themes, masterful genre-blending, perfect pacing, and razor-sharp social commentary made it the first non-English film to win Best Picture.' },
        { question: 'What does the ending mean?', answer: 'Ki-woo fantasizes about buying the house and freeing his father—a dream that would take 564 years. It\'s about inescapable poverty.' }
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
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': movieInfo?.rating || 7.5, 'bestRating': 10, 'worstRating': 1, 'ratingCount': movieInfo?.audienceScore || 100 }
    };
};

export const generateFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({ '@type': 'Question', 'name': faq.question, 'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } }))
});

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
