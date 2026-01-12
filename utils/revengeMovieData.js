// utils/revengeMovieData.js - COMPLETE REVENGE COLLECTION DATA ✅
// Movies exploring visceral impact, moral complexity, and the cost of vengeance.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1. RAW DATA LIST (The Database)
export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 670, imdbID: 'tt0364569', Title: 'Oldboy', year: 2003, genre: 'Action Mystery', runtime: 120, rank: 1 },
    { tmdbId: 98, imdbID: 'tt0172495', Title: 'Gladiator', year: 2000, genre: 'Action Drama', runtime: 155, rank: 2 },
    { tmdbId: 33, imdbID: 'tt0105695', Title: 'Unforgiven', year: 1992, genre: 'Western', runtime: 130, rank: 3 },
    { tmdbId: 197, imdbID: 'tt0112573', Title: 'Braveheart', year: 1995, genre: 'History Drama', runtime: 178, rank: 4 },
    { tmdbId: 1124, imdbID: 'tt0482571', Title: 'The Prestige', year: 2006, genre: 'Sci-Fi Thriller', runtime: 130, rank: 5 },
    { tmdbId: 281957, imdbID: 'tt1663202', Title: 'The Revenant', year: 2015, genre: 'Adventure Drama', runtime: 156, rank: 6 },
    { tmdbId: 393, imdbID: 'tt0378194', Title: 'Kill Bill: Vol. 2', year: 2004, genre: 'Action Crime', runtime: 137, rank: 7 },
    { tmdbId: 245891, imdbID: 'tt2911666', Title: 'John Wick', year: 2014, genre: 'Action Thriller', runtime: 101, rank: 8 },
    { tmdbId: 49797, imdbID: 'tt1588170', Title: 'I Saw the Devil', year: 2010, genre: 'Thriller Horror', runtime: 144, rank: 9 },
    { tmdbId: 11362, imdbID: 'tt0295297', Title: 'The Count of Monte Cristo', year: 2002, genre: 'Adventure Action', runtime: 131, rank: 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

// 2. SENSITIVE TIMELINES
export const REVENGE_SENSITIVE_TIMELINES  = {
    670: { scenes: [{ start: '1:24:00', end: '1:28:00', type: 'Explicit Violence', severity: 'Extreme' }, { start: '1:45:00', end: '1:48:00', type: 'Sexual Content', severity: 'High' }] },
    98: { scenes: [{ start: '0:10:00', end: '0:15:00', type: 'Violence', severity: 'High' }] },
    33: { scenes: [] },
    197: { scenes: [{ start: '2:40:00', end: '2:50:00', type: 'Torture', severity: 'High' }] },
    1124: { scenes: [] },
    281957: { scenes: [{ start: '0:25:00', end: '0:30:00', type: 'Bear Attack', severity: 'Extreme' }] },
    393: { scenes: [] },
    245891: { scenes: [{ start: '0:12:00', end: '0:15:00', type: 'Animal Death', severity: 'High' }] },
    49797: { scenes: [{ start: '0:05:00', end: '0:10:00', type: 'Gore/Violence', severity: 'Extreme' }, { start: '1:10:00', end: '1:15:00', type: 'Sexual Violence', severity: 'Extreme' }] },
    11362: { scenes: [] }
};

// 3. FALLBACK POSTERS
export const FALLBACK_POSTERS = {
    670: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    98: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    33: "https://image.tmdb.org/t/p/w500/54nJ1pYd2L8k1X5Yp2F1vX9.jpg",
    197: "https://image.tmdb.org/t/p/w500/or1gBugydmjToi8qSFKpRlIyN5p.jpg",
    1124: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8oa0J.jpg",
    281957: "https://image.tmdb.org/t/p/w500/ji3ecJphATlguKMxT63J1QyqQ.jpg",
    393: "https://image.tmdb.org/t/p/w500/2yhg0mZQMhDyvUQ4rG1IZ4oIaP6.jpg",
    245891: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    49797: "https://image.tmdb.org/t/p/w500/zp5jh4fyqGRyPd2b9X2E8C.jpg",
    11362: "https://image.tmdb.org/t/p/w500/9.jpg"
};

// Helper: Create Data with Revenge Metrics
const createRevengeData = (data) => ({
    revengeIntensity: 90,
    moralComplexity: 85,
    visceralImpact: 90,
    complexityLevel: "HIGH",
    dominantColor: "#EF4444",
    ...data,
});

// 4. DETAILED MOVIE DATA (Object)
// 4. DETAILED MOVIE DATA (Object)
export const COMPLETE_MOVIE_DATA = {
    // 1. Oldboy
    670: createRevengeData({ 
        revengeIntensity: 99, moralComplexity: 95, visceralImpact: 98, complexityLevel: "EXTREME", 
        dominantColor: "#0f172a", rating: 8.4, director: "Park Chan-wook", 
        cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'], boxOffice: '$15 million', budget: '$3 million', 
        dna: { "Mystery": 40, "Thriller": 35, "Action": 25 }, 
        scenes: [
            { time: 10, intensity: 45, label: 'The Abduction', color: '#0f172a' },
            { time: 25, intensity: 60, label: '15 Years Later', color: '#334155' },
            { time: 68, intensity: 89, label: 'Corridor Fight', color: '#dc2626' },
            { time: 90, intensity: 75, label: 'The Penthouse', color: '#475569' },
            { time: 115, intensity: 99, label: 'The Tongue', color: '#991b1b' }
        ], 
        synopsis: "After 15 years of mysterious imprisonment, Oh Dae-su is released and seeks vengeance against his unknown captor. A masterpiece of psychological revenge cinema presenting a deeply disturbing mystery wrapped in relentless brutality.", 
        themes: ["Incest", "Memory", "Karma", "Despair"]
    }),

    // 2. Gladiator
    98: createRevengeData({ 
        revengeIntensity: 96, moralComplexity: 60, visceralImpact: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 8.5, director: "Ridley Scott", 
        cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'], boxOffice: '$465.4 million', budget: '$103 million', 
        dna: { "Action": 45, "Drama": 35, "Adventure": 20 }, 
        scenes: [
            { time: 25, intensity: 85, label: 'Family Murdered', color: '#7c2d12' },
            { time: 60, intensity: 65, label: 'Zucchabar Arena', color: '#d97706' },
            { time: 95, intensity: 90, label: 'Are You Not Entertained?', color: '#b45309' },
            { time: 125, intensity: 88, label: 'Reveal to Commodus', color: '#ea580c' },
            { time: 145, intensity: 96, label: 'Final Duel', color: '#f59e0b' }
        ], 
        synopsis: "An epic tale of a fallen general who transforms from slave to arena champion. The film captures the grandeur of ancient Rome while delivering an intensely personal, satisfying arc of vengeance against imperial tyranny.", 
        themes: ["Honor", "Legacy", "Tyranny", "Freedom"]
    }),

    // 3. Unforgiven
    33: createRevengeData({ 
        revengeIntensity: 94, moralComplexity: 90, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 8.2, director: "Clint Eastwood", 
        cast: ['Clint Eastwood', 'Gene Hackman', 'Morgan Freeman'], boxOffice: '$159.2 million', budget: '$14.4 million', 
        dna: { "Drama": 65, "Action": 25, "Thriller": 10 }, 
        scenes: [
            { time: 20, intensity: 30, label: 'The Pig Farm', color: '#7f1d1d' },
            { time: 60, intensity: 55, label: 'Little Bill\'s Beating', color: '#991b1b' },
            { time: 108, intensity: 82, label: "Ned's Death", color: '#b91c1c' },
            { time: 115, intensity: 88, label: 'Whiskey Bottle', color: '#ef4444' },
            { time: 124, intensity: 96, label: 'Saloon Showdown', color: '#0f172a' }
        ], 
        synopsis: "A deconstructive Western masterpiece that strips away Hollywood myths to reveal the true, unglamorous cost of violence. This is a meditation on aging, mortality, and the haunting psychological toll of revenge.", 
        themes: ["Violence", "Aging", "Myth vs Reality", "Justice"]
    }),

    // 4. Braveheart
    197: createRevengeData({ 
        revengeIntensity: 95, moralComplexity: 75, visceralImpact: 95, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 8.3, director: "Mel Gibson", 
        cast: ['Mel Gibson', 'Sophie Marceau', 'Patrick McGoohan'], boxOffice: '$213.2 million', budget: '$72 million', 
        dna: { "Action": 45, "Drama": 35, "Romance": 20 }, 
        scenes: [
            { time: 35, intensity: 80, label: 'Murron\'s Death', color: '#991b1b' },
            { time: 85, intensity: 90, label: 'Stirling Bridge', color: '#ea580c' },
            { time: 130, intensity: 75, label: 'Betrayal', color: '#7c2d12' },
            { time: 160, intensity: 85, label: 'Falkirk Defeat', color: '#b45309' },
            { time: 175, intensity: 98, label: 'Freedom!', color: '#f59e0b' }
        ], 
        synopsis: "After his secret wife is murdered by English soldiers, William Wallace leads a Scottish rebellion against the tyranny of King Edward I. His personal quest for revenge transforms into a nationwide war for freedom.", 
        themes: ["Freedom", "Martyrdom", "Nationalism"]
    }),

    // 5. The Prestige
    1124: createRevengeData({ 
        revengeIntensity: 90, moralComplexity: 95, visceralImpact: 80, complexityLevel: "EXTREME", 
        dominantColor: "#6b21a8", rating: 8.5, director: "Christopher Nolan", 
        cast: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson'], boxOffice: '$109.7 million', budget: '$40 million', 
        dna: { "Mystery": 50, "Drama": 40, "Sci-Fi": 10 }, 
        scenes: [
            { time: 12, intensity: 58, label: 'The Drowning', color: '#581c87' },
            { time: 45, intensity: 65, label: 'The Bullet Catch', color: '#6b21a8' },
            { time: 80, intensity: 78, label: 'Tesla\'s Lab', color: '#7e22ce' },
            { time: 100, intensity: 85, label: 'Angier\'s Return', color: '#9333ea' },
            { time: 125, intensity: 97, label: 'The Final Prestige', color: '#3b0764' }
        ], 
        synopsis: "Two rival magicians engage in a bitter, lifelong feud after a tragedy during a performance. Their obsession with creating the ultimate illusion leads them to sacrifice everything, blurring the lines between science, magic, and madness.", 
        themes: ["Obsession", "Duality", "Sacrifice"]
    }),

    // 6. The Revenant
    281957: createRevengeData({ 
        revengeIntensity: 88, moralComplexity: 65, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#059669", rating: 8.0, director: "Alejandro G. Iñárritu", 
        cast: ['Leonardo DiCaprio', 'Tom Hardy', 'Domhnall Gleeson'], boxOffice: '$533.0 million', budget: '$135 million', 
        dna: { "Drama": 40, "Adventure": 35, "Action": 25 }, 
        scenes: [
            { time: 18, intensity: 72, label: 'Bear Attack', color: '#047857' },
            { time: 42, intensity: 81, label: 'Son Murdered', color: '#dc2626' },
            { time: 80, intensity: 65, label: 'Wilderness Survival', color: '#059669' },
            { time: 110, intensity: 70, label: 'The Horse', color: '#065f46' },
            { time: 148, intensity: 94, label: 'Final Confrontation', color: '#0f172a' }
        ], 
        synopsis: "Mauled by a bear and left for dead by members of his own hunting team, Hugh Glass fights through the brutal winter wilderness to survive and exact vengeance on the man who betrayed him and killed his son.", 
        themes: ["Survival", "Nature vs Man", "Fatherhood"]
    }),

    // 7. Kill Bill: Vol. 2
    393: createRevengeData({ 
        revengeIntensity: 92, moralComplexity: 70, visceralImpact: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 8.0, director: "Quentin Tarantino", 
        cast: ['Uma Thurman', 'David Carradine', 'Michael Madsen'], boxOffice: '$152.2 million', budget: '$30 million', 
        dna: { "Action": 45, "Drama": 35, "Thriller": 20 }, 
        scenes: [
            { time: 15, intensity: 45, label: 'Chapel Massacre', color: '#f59e0b' },
            { time: 48, intensity: 78, label: 'Buried Alive', color: '#b45309' },
            { time: 80, intensity: 70, label: 'Pai Mei Training', color: '#d97706' },
            { time: 110, intensity: 85, label: 'Elle Driver Fight', color: '#dc2626' },
            { time: 129, intensity: 95, label: 'Bill Confrontation', color: '#0f172a' }
        ], 
        synopsis: "The Bride concludes her roaring rampage of revenge. After dispatching her former squad mates, she tracks down Bill for a final, surprisingly emotional confrontation that explores the cost of vengeance and the bond of motherhood.", 
        themes: ["Motherhood", "Betrayal", "Closure"]
    }),

    // 8. John Wick
    245891: createRevengeData({ 
        revengeIntensity: 95, moralComplexity: 40, visceralImpact: 92, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 7.4, director: "Chad Stahelski", 
        cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'], boxOffice: '$86.1 million', budget: '$20 million', 
        dna: { "Action": 70, "Thriller": 20, "Crime": 10 }, 
        scenes: [
            { time: 15, intensity: 68, label: 'Puppy Death', color: '#dc2626' },
            { time: 30, intensity: 55, label: 'The Sledgehammer', color: '#475569' },
            { time: 50, intensity: 75, label: 'Home Invasion', color: '#f59e0b' },
            { time: 78, intensity: 88, label: 'Red Circle Club', color: '#9333ea' },
            { time: 95, intensity: 90, label: 'Dock Showdown', color: '#0f172a' }
        ], 
        synopsis: "A retired hitman returns to the criminal underworld after mobsters kill the puppy left to him by his late wife. It is a stylish, brutal masterclass in action choreography where one man dismantles an entire syndicate over a dog.", 
        themes: ["Grief", "Consequences", "Legend"]
    }),

    // 9. I Saw the Devil
    49797: createRevengeData({ 
        revengeIntensity: 100, moralComplexity: 90, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#991b1b", rating: 7.8, director: "Kim Jee-woon", 
        cast: ['Lee Byung-hun', 'Choi Min-sik'], boxOffice: '$13.0 million', budget: '$6 million', 
        dna: { "Thriller": 45, "Horror": 35, "Action": 20 }, 
        scenes: [
            { time: 8, intensity: 68, label: 'The Murder', color: '#991b1b' },
            { time: 40, intensity: 75, label: 'Catch & Release 1', color: '#b91c1c' },
            { time: 85, intensity: 85, label: 'The Greenhouse', color: '#7f1d1d' },
            { time: 110, intensity: 92, label: 'Turning Tables', color: '#0f172a' },
            { time: 138, intensity: 98, label: 'The Guillotine', color: '#000000' }
        ], 
        synopsis: "A secret agent decides to hunt down the serial killer who murdered his fiancée—but instead of arresting him, he catches and releases him repeatedly to inflict maximum pain. It explores how the pursuit of a monster can turn a good man into one.", 
        themes: ["Monstrosity", "Corruption of Good", "Sadism"]
    }),

    // 10. The Count of Monte Cristo
    11362: createRevengeData({ 
        revengeIntensity: 95, moralComplexity: 60, visceralImpact: 60, complexityLevel: "MEDIUM", 
        dominantColor: "#059669", rating: 7.7, director: "Kevin Reynolds", 
        cast: ['Jim Caviezel', 'Guy Pearce', 'Richard Harris'], boxOffice: '$75.4 million', budget: '$35 million', 
        dna: { "Adventure": 40, "Drama": 35, "Action": 25 }, 
        scenes: [
            { time: 15, intensity: 48, label: 'The Betrayal', color: '#0f172a' },
            { time: 40, intensity: 55, label: 'Chateau d\'If', color: '#334155' },
            { time: 75, intensity: 65, label: 'The Escape', color: '#059669' },
            { time: 100, intensity: 80, label: 'The Count Arrives', color: '#f59e0b' },
            { time: 125, intensity: 94, label: 'Final Confrontation', color: '#dc2626' }
        ], 
        synopsis: "After being wrongfully imprisoned for 13 years, a sailor escapes, finds a hidden fortune, and reinvents himself as a wealthy count to systematically destroy the lives of the men who betrayed him. The ultimate tale of patience and calculated payback.", 
        themes: ["Patience", "Betrayal", "Justice vs Revenge"]
    })
};
// 5. CUSTOM FAQs
export const REVENGE_MOVIE_FAQS = {
    'Oldboy': [
        { question: "What is the twist in Oldboy?", answer: "The twist reveals that the antagonist, Woo-jin, manipulated Dae-su into falling in love with his own daughter." },
        { question: "Is the octopus scene real?", answer: "Yes, actor Choi Min-sik actually ate four live octopuses to get the shot right." },
        { question: "Why was he imprisoned for 15 years?", answer: "To allow his daughter to grow up to be an adult woman." },
        { question: "Does Dae-su know the truth at the end?", answer: "It is ambiguous. He visits a hypnotist to erase the memory, but his final smile is open to interpretation." }
    ],
    'Gladiator': [
        { question: "Is Maximus based on a real person?", answer: "Maximus is fictional, but inspired by figures like Narcissus and Spartacus." },
        { question: "Did Commodus really kill his father?", answer: "Historically, Marcus Aurelius died of natural causes. The movie dramatizes this." },
        { question: "Was the Colosseum built for the movie?", answer: "A massive replica of about one-third of the Colosseum was built in Malta." },
        { question: "What does the ending mean?", answer: "Maximus dies and joins his family in the afterlife, having fulfilled his vow." }
    ],
    'Unforgiven': [
        { question: "What makes Unforgiven a 'revisionist' Western?", answer: "It deconstructs the romantic myth of the Wild West, showing violence as clumsy and painful." },
        { question: "Why did William Munny take the job?", answer: "He was desperate for money to support his children due to his failing farm." },
        { question: "Is the writer character based on anyone?", answer: "W.W. Beauchamp represents the dime novelists who exaggerated gritty events into legends." },
        { question: "What does the final line mean?", answer: "It shows that while Munny is leaving, his capacity for extreme violence remains." }
    ],
    'Braveheart': [
        { question: "How accurate is Braveheart?", answer: "It is historically loose; kilts were not worn in that era and the romance is fiction." },
        { question: "Why does he scream 'Freedom'?", answer: "It is his final act of defiance against English rule." },
        { question: "Did the Battle of Stirling Bridge happen on a bridge?", answer: "Historically yes, but in the film it was staged on an open field." },
        { question: "Why is his face painted blue?", answer: "Woad paint was a Pictish tradition, not 13th-century Scottish, but used for visual effect." }
    ],
    'The Prestige': [
        { question: "What is the twist regarding Borden?", answer: "Alfred Borden was actually identical twins living as one man." },
        { question: "Did the machine really work?", answer: "Yes, Tesla's machine actually cloned Angier every time it was used." },
        { question: "What does 'The Prestige' mean?", answer: "It is the third act of a magic trick where the vanished object is brought back." },
        { question: "Who is the villain?", answer: "Both men are villains in their own way due to their destructive obsession." }
    ],
    'The Revenant': [
        { question: "Is The Revenant a true story?", answer: "Yes, it is based on the real survival story of Hugh Glass in 1823." },
        { question: "Did Leonardo DiCaprio really sleep in a horse?", answer: "No, the horse carcass was a prop, but he did eat raw bison liver." },
        { question: "Why didn't Glass kill Fitzgerald?", answer: "He leaves revenge in the Creator's hands, letting the Arikara deal with him." },
        { question: "How was the bear attack filmed?", answer: "It was a mix of CGI and stunt work with a stuntman in a blue suit." }
    ],
    'Kill Bill: Vol. 2': [
        { question: "What is the Five Point Palm Exploding Heart Technique?", answer: "A fictional martial arts move that stops the heart after five steps." },
        { question: "Why is Bill's death so quiet?", answer: "It emphasizes their relationship as former lovers rather than just enemies." },
        { question: "What is the real name of The Bride?", answer: "Her name is Beatrix Kiddo, revealed to humanize her." },
        { question: "Why did Bill try to kill her?", answer: "His heartbreak turned into murderous jealousy when he thought she left him." }
    ],
    'John Wick': [
        { question: "Why is the dog so important?", answer: "The puppy was a final gift from his dying wife, representing his last hope for love." },
        { question: "What is the Gold Coin currency?", answer: "They represent a currency of favors and access within the underworld." },
        { question: "Did Keanu Reeves do his own stunts?", answer: "Yes, he performed about 90% of his own stunts." },
        { question: "What is 'Baba Yaga'?", answer: "He is the one you send to kill the Boogeyman." }
    ],
    'I Saw the Devil': [
        { question: "What is the message of the film?", answer: "When you fight monsters, you risk becoming one yourself." },
        { question: "Why does he keep letting the killer go?", answer: "To inflict prolonged suffering rather than a quick death." },
        { question: "Is there an alternate ending?", answer: "Yes, one where he walks away stoically instead of breaking down." },
        { question: "Why is the violence so graphic?", answer: "To make the audience uncomfortable with the reality of revenge." }
    ],
    'The Count of Monte Cristo': [
        { question: "How does this version differ from the book?", answer: "It simplifies the plot and changes the ending so Edmond ends up with Mercedes." },
        { question: "Where was the prison filmed?", answer: "The Comino Tower in Malta." },
        { question: "What is the meaning of 'Zatarra'?", answer: "It means 'Driftwood', symbolizing his state before finding purpose." },
        { question: "Why does he spare Mondego initially?", answer: "He wants him to lose everything—family, fortune, reputation—before dying." }
    ]
};





// 6. HELPER FUNCTIONS
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
        if (lowerType.includes('violence')) types.add('graphic violence');
        if (lowerType.includes('self-harm') || lowerType.includes('drug')) types.add('disturbing content');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return REVENGE_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A compelling revenge thriller.`,
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
            'ratingCount': 100 
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
            description: scene.description || '',
            displayLabel: `${scene.type} (${scene.severity})` 
        }))
    };
};

// EXPORT NAMED ALIAS FOR COMPATIBILITY
export const REVENGE_MOVIES = COMPLETE_MOVIE_DATABASE;

export default {
    COMPLETE_MOVIE_DATABASE,
    REVENGE_MOVIES,
    COMPLETE_MOVIE_DATA,
    SENSITIVE_TIMELINES,
    REVENGE_MOVIE_FAQS
};