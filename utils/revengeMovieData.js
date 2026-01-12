// utils/revengeMovieData.js - COMPLETE REVENGE COLLECTION
// Focused on visceral impact, moral complexity, and the cost of vengeance.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// HELPER: Create Data with Revenge Metrics
const createRevengeData = (data) => ({
    revengeIntensity: 90,
    moralComplexity: 85,
    visceralImpact: 90,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Oldboy
    670: createRevengeData({
        revengeIntensity: 99, moralComplexity: 95, visceralImpact: 98, complexityLevel: "EXTREME",
        dominantColor: "#0f172a",
        rating: 8.3, director: "Park Chan-wook",
        cast: ['Choi Min-sik', 'Yoo Ji-tae'], boxOffice: '$17.6 million', budget: '$3 million',
        dna: { "Mystery": 40, "Thriller": 35, "Action": 25 },
        scenes: [
            { time: 8, intensity: 45, label: 'Abduction', color: '#0f172a' },
            { time: 25, intensity: 60, label: 'The Release', color: '#334155' },
            { time: 68, intensity: 89, label: 'Corridor Fight', color: '#dc2626' },
            { time: 90, intensity: 75, label: 'Woo-jin\'s Penthouse', color: '#475569' },
            { time: 115, intensity: 99, label: 'The Truth', color: '#991b1b' }
        ],
        synopsis: "Oh Dae-su, an ordinary salary man, is inexplicably kidnapped...",
        themes: ["Incest", "Memory", "Futile Vengeance"]
    }),

    // 2. Gladiator
    98: createRevengeData({
        revengeIntensity: 96, moralComplexity: 60, visceralImpact: 90, complexityLevel: "MEDIUM",
        dominantColor: "#f59e0b",
        rating: 8.5, director: "Ridley Scott",
        cast: ['Russell Crowe', 'Joaquin Phoenix'], boxOffice: '$465.4 million', budget: '$103 million',
        dna: { "Action": 45, "Drama": 35, "Adventure": 20 },
        scenes: [],
        synopsis: "Maximus Decimus Meridius...",
        themes: ["Honor", "Political Corruption", "Legacy"]
    }),

    // 3. Unforgiven ✅ UPDATED
    33: createRevengeData({
        revengeIntensity: 94, moralComplexity: 90, visceralImpact: 85, complexityLevel: "HIGH",
        dominantColor: "#dc2626",
        rating: 8.2, director: "Clint Eastwood",
        cast: ['Clint Eastwood', 'Gene Hackman'], boxOffice: '$159.2 million', budget: '$14.4 million',
        dna: { 
            "Drama": 65,
            "Action": 25,
            "Thriller": 10
        },
        scenes: [
            { time: 20, intensity: 30, label: 'The Pig Farm', color: '#7f1d1d' },
            { time: 60, intensity: 55, label: 'Little Bill\'s Beating', color: '#991b1b' },
            { time: 108, intensity: 82, label: "Ned's Death", color: '#b91c1c' },
            { time: 115, intensity: 88, label: 'Whiskey Bottle', color: '#ef4444' },
            { time: 124, intensity: 96, label: 'Saloon Showdown', color: '#0f172a' }
        ],
        synopsis: "William Munny, a retired gunslinger...",
        themes: ["Aging", "Myth vs Reality", "Cycles of Violence"]
    }),

    // 4. Braveheart
    197: createRevengeData({
        revengeIntensity: 95, moralComplexity: 75, visceralImpact: 95, complexityLevel: "MEDIUM",
        dominantColor: "#f59e0b",
        rating: 8.3, director: "Mel Gibson",
        cast: ['Mel Gibson', 'Sophie Marceau'], boxOffice: '$213.2 million', budget: '$72 million',
        dna: { "Action": 45, "Drama": 35, "Romance": 20 },
        scenes: [],
        synopsis: "After his secret wife is murdered...",
        themes: ["Freedom", "Martyrdom", "Nationalism"]
    }),

    // 5. The Prestige ✅ UPDATED
    1124: createRevengeData({
        revengeIntensity: 90, moralComplexity: 95, visceralImpact: 80, complexityLevel: "EXTREME",
        dominantColor: "#6b21a8",
        rating: 8.5, director: "Christopher Nolan",
        cast: ['Christian Bale', 'Hugh Jackman'], boxOffice: '$109.7 million', budget: '$40 million',
        dna: { 
            "Mystery": 50,
            "Drama": 40,
            "Sci-Fi": 10
        },
        scenes: [
            { time: 12, intensity: 58, label: 'The Drowning', color: '#581c87' },
            { time: 45, intensity: 65, label: 'The Bullet Catch', color: '#6b21a8' },
            { time: 80, intensity: 78, label: 'Tesla\'s Lab', color: '#7e22ce' },
            { time: 100, intensity: 85, label: 'Angier\'s Return', color: '#9333ea' },
            { time: 125, intensity: 97, label: 'The Final Prestige', color: '#3b0764' }
        ],
        synopsis: "Two rival magicians engage in a bitter...",
        themes: ["Obsession", "Duality", "Sacrifice"]
    }),

    // 6. The Revenant ✅ UPDATED
    281957: createRevengeData({
        revengeIntensity: 88, moralComplexity: 65, visceralImpact: 100, complexityLevel: "HIGH",
        dominantColor: "#059669",
        rating: 8.0, director: "Alejandro G. Iñárritu",
        cast: ['Leonardo DiCaprio', 'Tom Hardy'], boxOffice: '$533.0 million', budget: '$135 million',
        dna: { 
            "Drama": 40,
            "Adventure": 35,
            "Action": 25
        },
        scenes: [
            { time: 18, intensity: 72, label: 'Bear Attack', color: '#047857' },
            { time: 42, intensity: 81, label: 'Son Murdered', color: '#dc2626' },
            { time: 80, intensity: 65, label: 'Wilderness Survival', color: '#059669' },
            { time: 110, intensity: 70, label: 'The Horse', color: '#065f46' },
            { time: 148, intensity: 94, label: 'Final Confrontation', color: '#0f172a' }
        ],
        synopsis: "Mauled by a bear and left for dead...",
        themes: ["Survival", "Nature vs Man", "Fatherhood"]
    }),

    // 7. Kill Bill: Vol. 2
    393: createRevengeData({
        revengeIntensity: 92, moralComplexity: 70, visceralImpact: 85, complexityLevel: "MEDIUM",
        dominantColor: "#f59e0b", // Action
        rating: 8.0, director: "Quentin Tarantino",
        cast: ['Uma Thurman', 'David Carradine'], boxOffice: '$152.2 million', budget: '$30 million',
        dna: { "Action": 45, "Drama": 35, "Thriller": 20 },
        scenes: [
            { time: 15, intensity: 45, label: 'Chapel Rehearsal', color: '#f59e0b' },
            { time: 48, intensity: 78, label: 'Buried Alive', color: '#b45309' },
            { time: 80, intensity: 70, label: 'Training Montage', color: '#d97706' },
            { time: 110, intensity: 85, label: 'Elle Driver Fight', color: '#dc2626' },
            { time: 129, intensity: 95, label: 'Bill Confrontation', color: '#0f172a' }
        ],
        synopsis: "The Bride concludes her roaring rampage of revenge. After dispatching her former squad mates, she tracks down Bill for a final, surprisingly emotional confrontation that explores the cost of vengeance and the bond of motherhood.",
        themes: ["Motherhood", "Betrayal", "Closure"]
    }),

    // 8. John Wick
    245891: createRevengeData({
        revengeIntensity: 95, moralComplexity: 40, visceralImpact: 92, complexityLevel: "MEDIUM",
        dominantColor: "#f59e0b", // Action
        rating: 7.4, director: "Chad Stahelski",
        cast: ['Keanu Reeves', 'Michael Nyqvist'], boxOffice: '$86.1 million', budget: '$20 million',
        dna: { "Action": 70, "Thriller": 20, "Crime": 10 },
        scenes: [
            { time: 15, intensity: 68, label: 'Puppy Death', color: '#dc2626' },
            { time: 30, intensity: 55, label: 'Hammering Floor', color: '#475569' },
            { time: 50, intensity: 75, label: 'Home Invasion', color: '#f59e0b' },
            { time: 78, intensity: 88, label: 'Nightclub Battle', color: '#9333ea' },
            { time: 95, intensity: 90, label: 'Dock Showdown', color: '#0f172a' }
        ],
        synopsis: "A retired hitman returns to the criminal underworld after mobsters kill the puppy left to him by his late wife. It is a stylish, brutal masterclass in action choreography where one man dismantles an entire syndicate over a dog.",
        themes: ["Grief", "Consequences", "Legend"]
    }),

    // 9. I Saw the Devil
    44222: createRevengeData({
        revengeIntensity: 100, moralComplexity: 90, visceralImpact: 100, complexityLevel: "HIGH",
        dominantColor: "#991b1b", // Horror
        rating: 7.8, director: "Kim Jee-woon",
        cast: ['Lee Byung-hun', 'Choi Min-sik'], boxOffice: '$13.0 million', budget: '$6 million',
        dna: { "Thriller": 45, "Horror": 35, "Action": 20 },
        scenes: [
            { time: 8, intensity: 68, label: 'Brutal Murder', color: '#991b1b' },
            { time: 40, intensity: 75, label: 'First Capture', color: '#b91c1c' },
            { time: 85, intensity: 85, label: 'The Clinic', color: '#7f1d1d' },
            { time: 110, intensity: 92, label: 'Turning Tables', color: '#0f172a' },
            { time: 138, intensity: 98, label: 'Final Reckoning', color: '#000000' }
        ],
        synopsis: "A secret agent decides to hunt down the serial killer who murdered his fiancée—but instead of arresting him, he catches and releases him repeatedly to inflict maximum pain. It explores how the pursuit of a monster can turn a good man into one.",
        themes: ["Monstrosity", "Corruption of Good", "Sadism"]
    }),

    // 10. The Count of Monte Cristo
    11362: createRevengeData({
        revengeIntensity: 95, moralComplexity: 60, visceralImpact: 60, complexityLevel: "MEDIUM",
        dominantColor: "#059669", // Adventure
        rating: 7.7, director: "Kevin Reynolds",
        cast: ['Jim Caviezel', 'Guy Pearce'], boxOffice: '$75.4 million', budget: '$35 million',
        dna: { "Adventure": 40, "Drama": 35, "Action": 25 },
        scenes: [
            { time: 15, intensity: 48, label: 'Betrayal', color: '#0f172a' },
            { time: 40, intensity: 55, label: 'Chateau d\'If', color: '#334155' },
            { time: 75, intensity: 65, label: 'The Escape', color: '#059669' },
            { time: 100, intensity: 80, label: 'Social Destruction', color: '#f59e0b' },
            { time: 125, intensity: 94, label: 'Final Confrontation', color: '#dc2626' }
        ],
        synopsis: "After being wrongfully imprisoned for 13 years, a sailor escapes, finds a hidden fortune, and reinvents himself as a wealthy count to systematically destroy the lives of the men who betrayed him. The ultimate tale of patience and calculated payback.",
        themes: ["Patience", "Betrayal", "Justice vs Revenge"]
    })
};
// 1. THE RANKED DATABASE LIST (Array)
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

// 5. CUSTOM FAQs FOR REVENGE MOVIES
export const REVENGE_MOVIE_FAQS = {
    'Oldboy': [
        { question: "What is the twist in Oldboy?", answer: "The twist reveals that the antagonist, Woo-jin, manipulated Dae-su into falling in love with and sleeping with his own daughter, Mi-do, as revenge for a rumor Dae-su spread years ago." },
        { question: "Is the octopus scene real?", answer: "Yes, actor Choi Min-sik actually ate four live octopuses to get the shot right. He is a Buddhist and prayed for each one before eating it." },
        { question: "Why was he imprisoned for 15 years?", answer: "The 15 years were carefully calculated so that his daughter would grow up to be an adult woman, allowing the incestuous revenge plot to take place." },
        { question: "Does Dae-su know the truth at the end?", answer: "It is ambiguous. He visits a hypnotist to erase the memory, but his final smile leaves it open to interpretation whether the monster inside him truly forgot." }
    ],
    'Gladiator': [
        { question: "Is Maximus based on a real person?", answer: "Maximus is a fictional character, but he is inspired by figures like Narcissus (who killed Commodus), Spartacus (who led a slave revolt), and Cincinnatus (a farmer-general)." },
        { question: "Did Commodus really kill his father?", answer: "Historically, Marcus Aurelius died of natural causes (likely the plague). The movie dramatizes his death to establish Commodus as a patricidal villain." },
        { question: "Was the Colosseum built for the movie?", answer: "A massive replica of about one-third of the Colosseum was built in Malta for the film, with the rest generated using CGI." },
        { question: "What does the ending mean?", answer: "Maximus dies and joins his family in the afterlife (Elysium), having fulfilled his vow of vengeance and restored the dream of a Roman Republic." }
    ],
    'Unforgiven': [
        { question: "What makes Unforgiven a 'revisionist' Western?", answer: "It deconstructs the romantic myth of the Wild West. Instead of heroic gunfights, violence is shown as clumsy, painful, and traumatizing." },
        { question: "Why did William Munny take the job?", answer: "Despite his changed ways, Munny was desperate for money to support his children. The failing hog farm forced him back into a life he had sworn to leave behind." },
        { question: "Is the writer character based on anyone?", answer: "W.W. Beauchamp represents the dime novelists of the era who exaggerated gritty events into heroic legends, criticizing how we mythologize violence." },
        { question: "What does the final line mean?", answer: "The final warning Munny gives—that he will kill anyone who hurts the prostitutes—shows that while he is leaving, his capacity for extreme violence remains." }
    ],
    'Braveheart': [
        { question: "How accurate is Braveheart?", answer: "It is historically loose. Kilts were not worn in that era, the romance with the Princess is fiction (she was a child then), and William Wallace was a minor noble, not a poor farmer." },
        { question: "Why does he scream 'Freedom' at the end?", answer: "It is his final act of defiance. Even while being tortured to death, he refuses to submit to English rule, inspiring his countrymen to continue the fight." },
        { question: "Did the Battle of Stirling Bridge happen on a bridge?", answer: "Historically, yes, the bridge was crucial to the victory. In the film, it was staged on an open field because a bridge would have limited the scale of the battle sequences." },
        { question: "Why is his face painted blue?", answer: "The blue woad face paint was actually a tradition of the ancient Picts (Roman era), not 13th-century Scots, but Gibson used it to give the army a primal, terrifying look." }
    ],
    'The Prestige': [
        { question: "What is the twist regarding Borden?", answer: "Alfred Borden was actually identical twins living as one man. One loved Sarah, the other loved Olivia. They took turns living half a life to perform the Transported Man trick perfectly." },
        { question: "Did the machine really work?", answer: "Yes, Tesla's machine actually cloned Angier every time it was used. Angier would drown the 'original' (or the clone) in a tank under the stage, killing himself night after night." },
        { question: "What does 'The Prestige' mean?", answer: "In magic, the 'Prestige' is the third act of a trick where the object (or person) that vanished is brought back. It is the hardest part and the one that earns the applause." },
        { question: "Who is the villain?", answer: "Both men are villains in their own way. Their obsession destroys everyone around them—Angier sacrifices his humanity, and the Borden twins sacrifice their own identity and happiness." }
    ],
    'The Revenant': [
        { question: "Is The Revenant a true story?", answer: "Yes, it is based on the real survival story of Hugh Glass in 1823. He was mauled by a bear and crawled over 200 miles to safety, though the revenge plot is largely dramatized." },
        { question: "Did Leonardo DiCaprio really sleep in a horse?", answer: "No, the horse carcass was a prop built by the special effects team, but DiCaprio did eat raw bison liver and endured freezing temperatures for the role." },
        { question: "Why didn't Glass kill Fitzgerald himself?", answer: "Glass realizes that 'revenge is in the Creator's hands.' He sends Fitzgerald down the river to the Arikara natives, letting fate (and them) decide his punishment." },
        { question: "How was the bear attack filmed?", answer: "It was a mix of CGI and stunt work. A stuntman in a blue suit threw DiCaprio around on cables to simulate the bear's weight and ferocity, combined with digital animation." }
    ],
    'Kill Bill: Vol. 2': [
        { question: "What is the Five Point Palm Exploding Heart Technique?", answer: "It is a fictional martial arts move taught by Pai Mei. It disrupts the heart's rhythm so that once the victim takes five steps, their heart explodes and they die." },
        { question: "Why is Bill's death so quiet?", answer: "After two movies of chaos, Tarantino chose a quiet ending to emphasize the relationship between Bill and the Bride. It is a conversation between former lovers, not just a fight." },
        { question: "What is the real name of The Bride?", answer: "Her name is Beatrix Kiddo. It is bleeped out in Volume 1 to maintain her mystery and dehumanization, but revealed in Volume 2 to humanize her as a mother." },
        { question: "Why did Bill try to kill her?", answer: "Bill explains that he overreacted to her leaving him because he thought she was dead. When he found her pregnant and marrying another man, his heartbreak turned into murderous jealousy." }
    ],
    'John Wick': [
        { question: "Why is the dog so important?", answer: "The puppy was a final gift from his dying wife, Helen. It represented her love and his only tether to a normal, peaceful life. Killing it destroyed his last hope for humanity." },
        { question: "What is the Gold Coin currency?", answer: "The gold coins are not worth a specific dollar amount; they represent a currency of favors and access within the underworld society, used for services like hotels and body disposal." },
        { question: "Did Keanu Reeves do his own stunts?", answer: "Yes, Keanu Reeves performed about 90% of his own stunts. He underwent months of intensive training in judo, jujitsu, and 'gun-fu' tactical shooting." },
        { question: "What is 'Baba Yaga'?", answer: "In the film, he is called 'Baba Yaga' (the Boogeyman). Russian mobsters clarify he isn't the Boogeyman, but 'the one you send to kill the Boogeyman.'" }
    ],
    'I Saw the Devil': [
        { question: "What is the message of the film?", answer: "The film warns that when you fight monsters, you risk becoming one. By torturing the killer, the protagonist descends to his level and loses his own humanity in the process." },
        { question: "Why does he keep letting the killer go?", answer: "He wants to inflict prolonged suffering rather than a quick death. He tracks the killer via a swallowed GPS transmitter to catch him just as he feels safe or powerful." },
        { question: "Is there an alternate ending?", answer: "Yes, an alternate ending exists where the protagonist is shown walking away more stoically, but the theatrical cut ends with him breaking down, emphasizing his total emotional destruction." },
        { question: "Why is the violence so graphic?", answer: "The extreme violence is intended to make the audience uncomfortable with the concept of revenge. Unlike action movies that glorify it, this film shows vengeance as messy, ugly, and horrifying." }
    ],
    'The Count of Monte Cristo': [
        { question: "How does this version differ from the book?", answer: "The 2002 movie simplifies the plot significantly. It changes the ending so Edmond ends up with Mercedes, and makes Albert his biological son, which is not in the novel." },
        { question: "Where was the prison filmed?", answer: "The Château d'If scenes were filmed at Comino Tower in Malta. The real Château d'If is located off the coast of Marseille, France." },
        { question: "What is the meaning of 'Zatarra'?", answer: "In the film, Edmond is called 'Zatarra' by the smuggler, which is said to mean 'Driftwood.' It symbolizes his state of being lost at sea before finding his purpose." },
        { question: "Why does he spare Mondego initially?", answer: "He wants Mondego to lose everything—his family, his fortune, and his reputation—before he dies. Death is too quick; he wants him to suffer the same loss Edmond did." }
    ]
};

// HELPER FUNCTIONS
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
        if (lowerType.includes('sex') || lowerType.includes('violation')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('violence') || lowerType.includes('injury')) types.add('graphic violence');
        if (lowerType.includes('self-harm') || lowerType.includes('drug') || lowerType.includes('masochism') || lowerType.includes('voyeurism')) types.add('disturbing content');
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
        'description': movieInfo?.synopsis || `${movie.Title} - A compelling drama.`,
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

// Export named export for compatibility if needed
export const REVENGE_MOVIES = COMPLETE_MOVIE_DATABASE;

export default COMPLETE_MOVIE_DATABASE;