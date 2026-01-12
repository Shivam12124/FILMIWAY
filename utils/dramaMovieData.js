// utils/dramaMovieData.js - COMPLETE NETFLIX DRAMA COLLECTION
// Focused on emotional intensity, character depth, and narrative power.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// Lightweight list for Static Paths
export const DRAMA_MOVIES = [
    { tmdbId: 530915, imdbID: 'tt8579674', title: '1917', year: 2019, rank: 1 },
    { tmdbId: 426426, imdbID: 'tt6155172', title: 'Roma', year: 2018, rank: 2 },
    { tmdbId: 573881, imdbID: 'tt1302006', title: 'The Irishman', year: 2019, rank: 3 },
    { tmdbId: 492188, imdbID: 'tt9770150', title: 'Marriage Story', year: 2019, rank: 4 },
    { tmdbId: 37799, imdbID: 'tt1677720', title: 'The Social Network', year: 2010, rank: 5 },
    { tmdbId: 600583, imdbID: 'tt7291200', title: 'The Power of the Dog', year: 2021, rank: 6 },
    { tmdbId: 414425, imdbID: 'tt2156584', title: 'Mudbound', year: 2017, rank: 7 },
    { tmdbId: 1402, imdbID: 'tt0454921', title: 'The Pursuit of Happyness', year: 2006, rank: 8 },
    { tmdbId: 491480, imdbID: 'tt9419184', title: 'The Boy Who Harnessed the Wind', year: 2019, rank: 9 },
    { tmdbId: 615643, imdbID: 'tt10118744', title: 'Minari', year: 2020, rank: 10 }
];

// ✅ SENSITIVE TIMELINES (Strictly as provided)
export const SENSITIVE_TIMELINES = {
    530915: { // 1917
        scenes: [
            { start: "0:40:00", end: "0:45:00", type: "War Violence", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Graphic Injury", severity: "High" }
        ]
    },
    426426: { // Roma
        scenes: [
            { start: "0:25:09", end: "0:27:29", type: "Full Frontal Nudity (Male)", severity: "High" },
            { start: "1:50:00", end: "1:55:00", type: "Graphic Childbirth/Trauma", severity: "Extreme" }
        ]
    },
    573881: { // The Irishman
        scenes: [
            { start: "0:30:00", end: "0:32:00", type: "Execution Style Violence", severity: "High" }
        ]
    },
    492188: { // Marriage Story
        scenes: [
            { start: "1:25:00", end: "1:35:00", type: "Intense Emotional Argument", severity: "Extreme" }
        ]
    },
    37799: { // The Social Network
        scenes: [
            { start: "0:57:00", end: "0:59:33", type: "Drug Use/Sexual Themes", severity: "Moderate" }
        ]
    },
    600583: { // The Power of the Dog
        scenes: [
            { start: "0:43:20", end: "0:43:49", type: "Nudity (Male)", severity: "Moderate" },
            { start: "1:14:00", end: "1:14:10", type: "Sexual Content", severity: "High" }
        ]
    },
    414425: { // Mudbound
        scenes: [
            { start: "1:56:13", end: "2:02:00", type: "Extreme Racial Violence/Torture", severity: "Extreme" }
        ]
    },
    1402: { scenes: [] }, // Pursuit of Happyness (Clean)
    491480: { scenes: [] }, // Boy Who Harnessed Wind (Clean)
    615643: { scenes: [] }  // Minari (Clean)
};

// ✅ HELPER: Create Data with Drama Metrics
const createDramaData = (data) => ({
    emotionalImpact: 90,
    characterDepth: 90,
    narrativePower: 85,

    dominantColor: "#000000",
    ...data,
});

// ✅ COMPLETE MOVIE DATA (Detailed Analysis)
export const COMPLETE_MOVIE_DATA = {
    // 1. 1917
    530915: createDramaData({
        emotionalImpact: 98, characterDepth: 85, narrativePower: 95,
        dominantColor: "#f59e0b", // Action
        rating: 8.2, director: "Sam Mendes",
        cast: ['George MacKay', 'Dean-Charles Chapman'], boxOffice: '$384 million', budget: '$95 million',
        dna: { "War": 55, "Drama": 35, "Action": 10 },
        scenes: [
            { time: 15, intensity: 25, label: 'Mission Orders', color: '#dc2626' },
            { time: 40, intensity: 60, label: "No Man's Land", color: '#ef4444' },
            { time: 70, intensity: 85, label: 'Bunker Explosion', color: '#f87171' },
            { time: 95, intensity: 92, label: 'River Escape', color: '#fca5a5' },
            { time: 115, intensity: 98, label: 'Final Sprint', color: '#fecaca' }
        ],
        synopsis: "Two soldiers race against time through the trenches of World War I on a mission that could change the course of battle. Shot in real-time with mind-bending cinematography, this is war stripped down to its rawest form."
    }),

    // 2. Roma
    426426: createDramaData({
        emotionalImpact: 95, characterDepth: 98, narrativePower: 88,
        dominantColor: "#dc2626", // Drama
        rating: 7.7, director: "Alfonso Cuarón",
        cast: ['Yalitza Aparicio', 'Marina de Tavira'], boxOffice: '$8.2 million', budget: '$15 million',
        dna: { "Drama": 60, "Romance": 25, "Thriller": 15 },
        scenes: [
            { time: 20, intensity: 30, label: 'Daily Life', color: '#dc2626' },
            { time: 55, intensity: 55, label: 'City Riots', color: '#ef4444' },
            { time: 80, intensity: 75, label: 'Beach Scene', color: '#f87171' },
            { time: 110, intensity: 88, label: 'Water Rescue', color: '#fca5a5' },
            { time: 130, intensity: 85, label: 'Emotional Closure', color: '#fecaca' }
        ],
        synopsis: "In 1970s Mexico City, a domestic worker navigates family chaos, political upheaval, and quiet heartbreak. Alfonso Cuarón's intimate black-and-white meditation transforms everyday moments into poetry."
    }),

    // 3. The Irishman
    573881: createDramaData({
        emotionalImpact: 92, characterDepth: 95, narrativePower: 90,
        dominantColor: "#1d1fb9ff", // Crime
        rating: 7.8, director: "Martin Scorsese",
        cast: ['Robert De Niro', 'Al Pacino', 'Joe Pesci'], boxOffice: '$9.5 million', budget: '$159 million',
        dna: { "Crime": 50, "Drama": 40, "Thriller": 10 },
        scenes: [
            { time: 30, intensity: 35, label: 'First Job', color: '#dc2626' },
            { time: 80, intensity: 65, label: 'Hoffa Meets Frank', color: '#ef4444' },
            { time: 130, intensity: 80, label: 'Hoffa Disappearance', color: '#f87171' },
            { time: 170, intensity: 70, label: 'Reflection & Regret', color: '#fca5a5' },
            { time: 205, intensity: 90, label: 'Final Confession', color: '#fecaca' }
        ],
        synopsis: "Martin Scorsese's final crime epic spans decades, aging mobsters, and the ultimate cost of loyalty. A 3.5-hour meditation on violence, regret, and redemption."
    }),

    // 4. Marriage Story
    492188: createDramaData({
        emotionalImpact: 100, characterDepth: 98, narrativePower: 85,
        dominantColor: "#ec4899", // Romance
        rating: 7.9, director: "Noah Baumbach",
        cast: ['Adam Driver', 'Scarlett Johansson'], boxOffice: '$2.3 million', budget: '$18 million',
        dna: { "Drama": 65, "Romance": 25, "Comedy": 10 },
        scenes: [
            { time: 20, intensity: 30, label: 'Separation Decision', color: '#dc2626' },
            { time: 50, intensity: 55, label: 'Custody Talks', color: '#ef4444' },
            { time: 85, intensity: 80, label: 'The Fight Scene', color: '#f87171' },
            { time: 110, intensity: 88, label: 'Lawyer Confrontation', color: '#fca5a5' },
            { time: 132, intensity: 75, label: 'Final Goodbye', color: '#fecaca' }
        ],
        synopsis: "A couple navigates the brutal honesty of divorce. Adam Driver and Scarlett Johansson wage emotional warfare in one of cinema's most visceral arguments, then find unexpected grace in separation."
    }),

    // 5. The Social Network
    37799: createDramaData({
        emotionalImpact: 82, characterDepth: 90, narrativePower: 95,
        dominantColor: "#0f172a", // Thriller
        rating: 7.8, director: "David Fincher",
        cast: ['Jesse Eisenberg', 'Andrew Garfield'], boxOffice: '$224 million', budget: '$40 million',
        dna: { "Drama": 60, "Thriller": 30, "Business": 10 },
        scenes: [
            { time: 15, intensity: 35, label: 'Breakup & Blog', color: '#dc2626' },
            { time: 45, intensity: 55, label: 'Facebook Launch', color: '#ef4444' },
            { time: 75, intensity: 70, label: 'Betrayal Revealed', color: '#f87171' },
            { time: 95, intensity: 82, label: 'Legal Battles', color: '#fca5a5' },
            { time: 115, intensity: 78, label: 'Lonely Success', color: '#fecaca' }
        ],
        synopsis: "How did a college kid create Facebook—and destroy friendships in the process? Aaron Sorkin's screenplay transforms tech into Shakespeare, proving that genius is often just ego wearing a hoody."
    }),

    // 6. The Power of the Dog
    600583: createDramaData({
        emotionalImpact: 88, characterDepth: 95, narrativePower: 90,
        dominantColor: "#9333ea", // Psychological
        rating: 6.8, director: "Jane Campion",
        cast: ['Benedict Cumberbatch', 'Kirsten Dunst'], boxOffice: '$1.2 million', budget: '$35 million',
        dna: { "Western": 45, "Drama": 40, "Thriller": 15 },
        scenes: [
            { time: 20, intensity: 25, label: 'Ranch Tension', color: '#dc2626' },
            { time: 50, intensity: 45, label: 'New Marriage', color: '#ef4444' },
            { time: 80, intensity: 70, label: 'Manipulation Games', color: '#f87171' },
            { time: 105, intensity: 83, label: 'Hidden Desires', color: '#fca5a5' },
            { time: 122, intensity: 92, label: 'Final Revelation', color: '#fecaca' }
        ],
        synopsis: "A slow-burning psychological Western where every glance hides violence. Jane Campion deconstructs the myth of the West through a tyrant's cruelty and hidden shame."
    }),

    // 7. Mudbound
    414425: createDramaData({
        emotionalImpact: 95, characterDepth: 90, narrativePower: 90,
        dominantColor: "#dc2626", // Drama
        rating: 7.4, director: "Dee Rees",
        cast: ['Carey Mulligan', 'Jason Mitchell'], boxOffice: '$85,000', budget: '$12 million',
        dna: { "Drama": 55, "War": 30, "Crime": 15 },
        scenes: [
            { time: 20, intensity: 30, label: 'Arrival at Farm', color: '#dc2626' },
            { time: 55, intensity: 55, label: 'WWII Service', color: '#ef4444' },
            { time: 85, intensity: 75, label: 'Return Home', color: '#f87171' },
            { time: 110, intensity: 90, label: 'Racial Violence', color: '#fca5a5' },
            { time: 130, intensity: 88, label: 'Aftermath', color: '#fecaca' }
        ],
        synopsis: "Two farming families—one Black, one white—struggle with poverty and racism in postwar Mississippi. A raw, visually stunning portrait of survival and the persistence of injustice."
    }),

    // 8. The Pursuit of Happyness
    1402: createDramaData({
        emotionalImpact: 95, characterDepth: 85, narrativePower: 80,
        dominantColor: "#dc2626", // Drama
        rating: 8.0, director: "Gabriele Muccino",
        cast: ['Will Smith', 'Jaden Smith'], boxOffice: '$307 million', budget: '$55 million',
        dna: { "Drama": 70, "Comedy": 20, "Romance": 10 },
        scenes: [
            { time: 20, intensity: 35, label: 'Financial Struggles', color: '#dc2626' },
            { time: 50, intensity: 60, label: 'Homelessness', color: '#ef4444' },
            { time: 75, intensity: 75, label: 'Bathroom Scene', color: '#f87171' },
            { time: 95, intensity: 85, label: 'Internship Challenges', color: '#fca5a5' },
            { time: 113, intensity: 95, label: 'Job Offer', color: '#fecaca' }
        ],
        synopsis: "A father's fight for dignity as he battles homelessness while pursuing a stockbroker internship. Will Smith delivers an Oscar-worthy performance of perseverance and hope."
    }),

    // 9. The Boy Who Harnessed the Wind
    491480: createDramaData({
        emotionalImpact: 90, characterDepth: 80, narrativePower: 85,
        dominantColor: "#059669", // Adventure
        rating: 7.6, director: "Chiwetel Ejiofor",
        cast: ['Maxwell Simba', 'Chiwetel Ejiofor'], boxOffice: 'N/A', budget: 'N/A',
        dna: { "Drama": 60, "Adventure": 25, "SciFi": 15 },
        scenes: [
            { time: 20, intensity: 30, label: 'Drought Begins', color: '#dc2626' },
            { time: 50, intensity: 50, label: 'School Dropout', color: '#ef4444' },
            { time: 75, intensity: 65, label: 'Library Discovery', color: '#f87171' },
            { time: 95, intensity: 80, label: 'Building the Windmill', color: '#fca5a5' },
            { time: 110, intensity: 90, label: 'First Rain', color: '#fecaca' }
        ],
        synopsis: "A Malawian teenager with nothing but determination builds a windmill from scrap metal to save his village from starvation. Inspired by true events."
    }),

    // 10. Minari
    615643: createDramaData({
        emotionalImpact: 88, characterDepth: 92, narrativePower: 82,
        dominantColor: "#dc2626", // Drama
        rating: 7.4, director: "Lee Isaac Chung",
        cast: ['Steven Yeun', 'Youn Yuh-jung'], boxOffice: '$15.5 million', budget: '$2 million',
        dna: { "Drama": 70, "Romance": 15, "Comedy": 15 },
        scenes: [
            { time: 15, intensity: 25, label: 'Arrival in Arkansas', color: '#dc2626' },
            { time: 45, intensity: 50, label: 'Farm Challenges', color: '#ef4444' },
            { time: 70, intensity: 70, label: 'Health Crisis', color: '#f87171' },
            { time: 95, intensity: 85, label: 'Fire Disaster', color: '#fca5a5' },
            { time: 110, intensity: 80, label: 'New Beginnings', color: '#fecaca' }
        ],
        synopsis: "A Korean-American family bets everything on an Arkansas farm. Intimate, heartfelt, and full of quiet soul—cinema at its purest."
    })
};

// ✅ CUSTOM FAQs FOR DRAMA MOVIES (Schema Gold)
export const DRAMA_MOVIE_FAQS = {
    '1917': [
        { question: "Was 1917 actually filmed in one shot?", answer: "No, but it was designed to look like it. It is composed of several long takes stitched together invisibly (using digital editing and clever camera pans) to create the immersive 'one continuous shot' experience." },
        { question: "Is 1917 based on a true story?", answer: "It is based on stories told to director Sam Mendes by his grandfather, Alfred Mendes, who served in WWI. While the specific mission is fictional, the events and the dangerous nature of 'runner' missions are inspired by real history." },
        { question: "What is the significance of the cherry trees in 1917?", answer: "The cherry trees represent the cycle of life and renewal amidst the destruction of war. Blake talks about his family's orchard early on, and Schofield later finds comfort floating past falling cherry blossoms, symbolizing a connection to his fallen friend." },
        { question: "Why did the director choose unknown actors for the leads?", answer: "Sam Mendes cast George MacKay and Dean-Charles Chapman because he didn't want famous faces to distract the audience. He wanted the viewers to focus entirely on the characters' survival rather than the actors' celebrity status." }
    ],
    'Roma': [
        { question: "Why is Roma in black and white?", answer: "Director Alfonso Cuarón chose black and white to evoke the feeling of memory and the past, as the film is a semi-autobiographical letter to his own childhood in 1970s Mexico City." },
        { question: "Who is the character Cleo based on?", answer: "Cleo is based on Liboria 'Libo' Rodríguez, the real-life nanny who raised Alfonso Cuarón. The film is a tribute to her, highlighting the often-invisible labor and emotional support provided by domestic workers." },
        { question: "What is the Corpus Christi Massacre depicted in the film?", answer: "The riot scene depicts the real Corpus Christi Massacre of 1971, where student protesters were attacked by a government-trained paramilitary group known as 'Los Halcones' (The Falcons)." },
        { question: "What does the plane in the opening and closing scenes symbolize?", answer: "The plane represents the contrast between the grounded, difficult reality of Cleo's life and the vast, indifferent world above. It also bookends the film, suggesting that life continues its cycle regardless of individual tragedies." }
    ],
    'The Irishman': [
        { question: "Is the confession in The Irishman true?", answer: "The film is based on the book 'I Heard You Paint Houses,' which details Frank Sheeran's claims. However, historians and FBI experts heavily dispute whether Sheeran actually killed Jimmy Hoffa, suggesting he may have inflated his role." },
        { question: "What does the phrase 'I heard you paint houses' mean?", answer: "It is a mob code for being a hitman. The 'paint' refers to the blood that splatters on the walls and floors after a target is shot." },
        { question: "Why was de-aging technology used instead of younger actors?", answer: "Martin Scorsese wanted Robert De Niro, Al Pacino, and Joe Pesci to play their characters through every decade to maintain the continuity of their performances and the subtle nuances of their relationships over time." },
        { question: "What is the meaning of the final shot with the open door?", answer: "The slightly open door mimics Jimmy Hoffa's habit of sleeping with the door ajar. It symbolizes Frank's loneliness, his guilt, and his futile hope that forgiveness (or perhaps Hoffa himself) might one day walk in." }
    ],
    'Marriage Story': [
        { question: "Is Marriage Story autobiographical?", answer: "While not strictly a memoir, director Noah Baumbach drew heavily from his own divorce from actress Jennifer Jason Leigh, as well as the experiences of friends and cast members, to capture the raw reality of separation." },
        { question: "Why is the argument scene so intense?", answer: "The scene was rehearsed extensively like a stage play. The actors memorized the overlapping dialogue precisely to create a sense of loss of control, showing how suppressed resentment can explode into verbal violence." },
        { question: "What is the significance of the song 'Being Alive'?", answer: "When Adam Driver sings 'Being Alive' at the end, it represents his acceptance of the pain and messiness of love. After fighting for independence, he realizes that being 'alone' is not as fulfilling as being 'alive' with all the complications of intimacy." },
        { question: "Why does the film take place in both New York and Los Angeles?", answer: "The bi-coastal setting emphasizes the physical and emotional distance between the couple. New York represents Charlie's theater world and intellect, while LA represents Nicole's film career, space, and new freedom." }
    ],
    'The Social Network': [
        { question: "How accurate is The Social Network?", answer: "While it captures the emotional truth and legal battles, Mark Zuckerberg has disputed the film's portrayal of his motivations, specifically the idea that he created Facebook to get girls (he was already dating his future wife)." },
        { question: "Did Eduardo Saverin really get diluted out of the company?", answer: "Yes. As depicted in the film, Saverin's stake in Facebook was drastically reduced from about 30% to less than 0.03% after he signed legal documents he didn't fully understand, leading to the lawsuit." },
        { question: "Who are the Winklevoss twins?", answer: "Cameron and Tyler Winklevoss are Olympic rowers and Harvard students who claimed Zuckerberg stole their idea for a social networking site called 'HarvardConnection' (later ConnectU)." },
        { question: "What does the final scene of refreshing the page mean?", answer: "The ending shows Mark sending a friend request to his ex-girlfriend and refreshing the page. It symbolizes the irony that the man who connected the world is ultimately alone, seeking a connection he cannot code." }
    ],
    'The Power of the Dog': [
        { question: "What is the meaning of the ending?", answer: "The ending reveals that the gentle, effeminate son Peter murdered the toxic rancher Phil Burbank using anthrax from a diseased cow hide. It proves that Peter was the most dangerous and calculating person on the ranch all along." },
        { question: "Who was Bronco Henry?", answer: "Bronco Henry is a deceased character who never appears on screen but was Phil's mentor and lover. Phil's aggressive masculinity is a performance to hide his grief and repressed homosexuality related to Bronco Henry." },
        { question: "Why did Peter kill Phil?", answer: "Peter killed Phil to protect his mother, Rose. Phil's psychological torment was driving Rose to alcoholism, and Peter removed the threat with cold, clinical precision." },
        { question: "What is the significance of the rope?", answer: "The rope represents the twisted bond between Phil and Peter. Phil teaches Peter to make it as a gesture of mentorship (and seduction), but Peter turns that knowledge into a weapon, using the infected hide to make the lethal rope." }
    ],
    'Mudbound': [
        { question: "What is the message of Mudbound?", answer: "It explores how racism and poverty trapped both Black and white families in a cycle of trauma in the Jim Crow South. It highlights that while they share the same struggle against the land ('the mud'), racism creates an artificial, violent divide." },
        { question: "Is Mudbound based on a true story?", answer: "It is a fictional story based on the novel by Hillary Jordan, but the depiction of the Jim Crow South, sharecropping struggles, and the treatment of Black WWII veterans is historically accurate." },
        { question: "What happens to Ronsel at the end?", answer: "Ronsel survives a brutal lynching where his tongue is cut out, symbolizing society's attempt to silence him. However, the ending shows him reclaiming his life and raising his child, signifying resilience." },
        { question: "How does the film depict PTSD?", answer: "The film contrasts the PTSD of Jamie (white) and Ronsel (Black). While both suffer from war trauma, Jamie turns to alcohol, while Ronsel must suppress his trauma to survive in a society that demands his submission." }
    ],
    'The Pursuit of Happyness': [
        { question: "Is the bathroom scene real?", answer: "Yes, the real Chris Gardner confirmed that he and his son slept in a subway station bathroom. He described it as the lowest point of his life, where his dignity was stripped away entirely." },
        { question: "Why is 'Happyness' spelled wrong in the title?", answer: "The misspelling comes from a mural outside his son's daycare. It represents the imperfection of life and the idea that happiness is something you must actively 'pursue,' even if the world around you is broken." },
        { question: "Did Will Smith's real son act in the movie?", answer: "Yes, Jaden Smith, who plays his son Christopher, is Will Smith's real-life son. Their natural chemistry added a layer of authentic emotion to the father-son relationship on screen." },
        { question: "How much money did Chris Gardner eventually make?", answer: "After the events of the film, Chris Gardner founded his own brokerage firm and became a multi-millionaire, eventually selling a minority stake in his business for reportedly over $180 million." }
    ],
    'The Boy Who Harnessed the Wind': [
        { question: "Is this movie based on a true story?", answer: "Yes, it is based on the true story of William Kamkwamba, a 13-year-old Malawian boy who built a wind turbine to save his village from famine in the early 2000s." },
        { question: "Where was the movie filmed?", answer: "To maintain authenticity, director Chiwetel Ejiofor filmed on location in Malawi, using the actual languages (English and Chichewa) spoken in the region." },
        { question: "What materials did William use to build the windmill?", answer: "He used scrap materials found in a local junkyard, including tractor parts, a bicycle frame, PVC pipes, and a dynamo to generate the electricity." },
        { question: "What is the main theme of the movie?", answer: "The film highlights the conflict between tradition and innovation, showing how education and engineering can solve crises that superstition or traditional farming methods cannot." }
    ],
    'Minari': [
        { question: "What does the Minari plant symbolize?", answer: "Minari is a resilient Korean herb that grows comfortably in damp soil. It symbolizes the immigrant family's ability to eventually take root and thrive in the foreign, difficult soil of America after hardship." },
        { question: "Why was Minari controversial at the Golden Globes?", answer: "Despite being an American film produced by an American company, it was categorized as a 'Foreign Language Film' because the dialogue is mostly Korean. This sparked a debate about what defines an 'American' movie." },
        { question: "Is Minari based on the director's childhood?", answer: "Yes, director Lee Isaac Chung based the film on his own upbringing on a farm in Arkansas. The character of David represents his younger self, and the grandmother is based on his real grandmother." },
        { question: "What is the significance of the fire at the end?", answer: "The fire destroys their produce, representing the total loss of their financial dreams. However, it forces the family to sleep together on the floor, symbolizing that they have rediscovered their bond and that family is more important than success." }
    ]
};

// HELPER FUNCTIONS
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
    return DRAMA_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
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
        'image': `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
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
    title: DRAMA_MOVIES.find(m => m.tmdbId === tmdbId)?.title || 'Unknown Movie' 
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