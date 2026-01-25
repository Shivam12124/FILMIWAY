// utils/huluFamilyMovieData.js - HULU FAMILY COLLECTION DATA
// Wholesome, Entertaining, and Heartwarming

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 838240, "imdbID": "tt13429870", "Title": "Robot Dreams", "year": 2023, "genre": "Animation", "runtime": 102, "rank": 1 },
    { "tmdbId": 1593, "imdbID": "tt0477347", "Title": "Night at the Museum", "year": 2006, "genre": "Adventure", "runtime": 108, "rank": 2 },
    { "tmdbId": 675353, "imdbID": "tt12412888", "Title": "Sonic the Hedgehog 2", "year": 2022, "genre": "Action", "runtime": 122, "rank": 3 },
    { "tmdbId": 537061, "imdbID": "tt10515852", "Title": "Steven Universe: The Movie", "year": 2019, "genre": "Animation", "runtime": 82, "rank": 4 },
    { "tmdbId": 76492, "imdbID": "tt0837562", "Title": "Hotel Transylvania", "year": 2012, "genre": "Animation", "runtime": 91, "rank": 5 },
    { "tmdbId": 159824, "imdbID": "tt2510894", "Title": "Hotel Transylvania 2", "year": 2015, "genre": "Animation", "runtime": 89, "rank": 6 },
    { "tmdbId": 676710, "imdbID": "tt10473036", "Title": "The Amazing Maurice", "year": 2022, "genre": "Animation", "runtime": 93, "rank": 7 },
    { "tmdbId": 1159799, "imdbID": "tt27553096", "Title": "My Friend the Penguin", "year": 2024, "genre": "Drama", "runtime": 97, "rank": 8 },
    { "tmdbId": 778810, "imdbID": "tt10696784", "Title": "Fireheart", "year": 2022, "genre": "Animation", "runtime": 92, "rank": 9 },
    { "tmdbId": 68728, "imdbID": "tt1622029", "Title": "Oz the Great and Powerful", "year": 2013, "genre": "Fantasy", "runtime": 130, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Scary Moments for Kids)
export const SENSITIVE_TIMELINES = {
    // 1. Robot Dreams
    1012201: { scenes: [] }, // Very gentle
    
    // 2. Night at the Museum
    1593: { 
        scenes: [
            { start: "0:25:00", end: "0:28:00", type: "Scary Skeleton", severity: "Mild" } // T-Rex chase
        ] 
    },
    
    // 3. Sonic 2
    675353: { scenes: [] },
    
    // 4. Steven Universe
    612043: { scenes: [] },
    
    // 5. Hotel Transylvania
    76492: { scenes: [] }, // Funny monsters only
    
    // 6. Hotel Transylvania 2
    260513: { scenes: [] },
    
    // 7. The Amazing Maurice
    791334: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Scary Villain", severity: "Moderate" } // The Rat King
        ] 
    },
    
    // 8. My Friend the Penguin
    1007535: { scenes: [] },
    
    // 9. Fireheart
    778810: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Fire Danger", severity: "Mild" } // Fire scenes
        ] 
    },
    
    // 10. Oz the Great and Powerful
    68728: { 
        scenes: [
            { start: "1:30:00", end: "1:35:00", type: "Scary Witch", severity: "Moderate" } // Wicked Witch transformation
        ] 
    }
};

export const FALLBACK_POSTERS = {
    1012201: "https://image.tmdb.org/t/p/w500/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    1593: "https://image.tmdb.org/t/p/w500/h6W7rX697fK1790iY3l590.jpg",
    675353: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO8MQO0p.jpg",
    612043: "https://image.tmdb.org/t/p/w500/8mRgpubxHqnqvEN44ManL.jpg",
    76492: "https://image.tmdb.org/t/p/w500/2yQUnpc1BXQuT8ImVR.jpg",
    260513: "https://image.tmdb.org/t/p/w500/5aGhaIHYuKepojCZ7Q.jpg",
    791334: "https://image.tmdb.org/t/p/w500/ydhZuC15.jpg",
    1007535: "https://image.tmdb.org/t/p/w500/p3a3a.jpg",
    778810: "https://image.tmdb.org/t/p/w500/198.jpg",
    68728: "https://image.tmdb.org/t/p/w500/7q.jpg"
};

// ✅ HELPER: Customized for Family
const createMovieData = (data) => ({
    wholesomeScore: 90, // Overall family friendliness
    funFactor: 85,      // Entertainment value for kids
    complexityLevel: "FAMILY",
    dominantColor: "#facc15", // Bright Yellow
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Robot Dreams
    1012201: createMovieData({ 
        wholesomeScore: 98, 
        funFactor: 80, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#f59e0b", // Warm Orange
        rating: 8.1, criticsScore: 98, audienceScore: 90, director: "Pablo Berger", 
        cast: ["Ivan Labanda (Sound Designer)"], boxOffice: "$3.5 million", budget: "$6 million", 
        dna: { "Animation": 60, "Drama": 20, "Music": 20 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Building Robot", color: "#fbbf24" },
            { time: 30, intensity: 50, label: "Beach Day", color: "#f59e0b" },
            { time: 60, intensity: 70, label: "Dream Sequence", color: "#d97706" },
            { time: 90, intensity: 85, label: "New Beginnings", color: "#b45309" },
            { time: 100, intensity: 95, label: "September", color: "#fbbf24" }
        ],
        synopsis: "Dog lives in Manhattan and he's tired of being alone. He decides to build himself a robot, a companion. Their friendship blossoms, until they become inseparable, to the rhythm of 80's NYC.",
        themes: ["Friendship", "Loss", "Moving On"]
    }),

    // 2. Night at the Museum
    1593: createMovieData({ 
        wholesomeScore: 90, 
        funFactor: 95, 
        complexityLevel: "FUN", 
        dominantColor: "#3b82f6", // Museum Blue
        rating: 6.5, criticsScore: 43, audienceScore: 67, director: "Shawn Levy", 
        cast: ["Ben Stiller", "Robin Williams", "Owen Wilson"], boxOffice: "$574 million", budget: "$110 million", 
        dna: { "Comedy": 50, "Adventure": 30, "Fantasy": 20 }, 
        scenes: [
            { time: 15, intensity: 30, label: "First Shift", color: "#60a5fa" },
            { time: 40, intensity: 60, label: "Rexy Chase", color: "#3b82f6" },
            { time: 70, intensity: 75, label: "Civil War", color: "#2563eb" },
            { time: 90, intensity: 90, label: "Saving the Tablet", color: "#1d4ed8" },
            { time: 100, intensity: 50, label: "Party Time", color: "#1e40af" }
        ],
        synopsis: "A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse causes the animals and exhibits on display to come to life and wreak havoc.",
        themes: ["Responsibility", "Fatherhood", "History"]
    }),

    // 3. Sonic the Hedgehog 2
    675353: createMovieData({ 
        wholesomeScore: 88, 
        funFactor: 98, 
        complexityLevel: "HIGH-ENERGY", 
        dominantColor: "#0ea5e9", // Sonic Blue
        rating: 6.5, criticsScore: 69, audienceScore: 96, director: "Jeff Fowler", 
        cast: ["Ben Schwartz", "Jim Carrey", "Idris Elba"], boxOffice: "$405 million", budget: "$110 million", 
        dna: { "Action": 40, "Comedy": 40, "Sci-Fi": 20 }, 
        scenes: [
            { time: 10, intensity: 40, label: "Blue Justice", color: "#38bdf8" },
            { time: 45, intensity: 70, label: "Siberian Dance", color: "#0ea5e9" },
            { time: 80, intensity: 85, label: "Temple Fight", color: "#0284c7" },
            { time: 110, intensity: 95, label: "Super Sonic", color: "#eab308" }, // Yellow for Super Sonic
            { time: 120, intensity: 60, label: "Baseball", color: "#0c4a6e" }
        ],
        synopsis: "When the manic Dr. Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails is all that stands in their way.",
        themes: ["Family", "Friendship", "Responsibility"]
    }),

    // 4. Steven Universe: The Movie
    612043: createMovieData({ 
        wholesomeScore: 95, 
        funFactor: 90, 
        complexityLevel: "EMOTIONAL", 
        dominantColor: "#ec4899", // Spinel Pink
        rating: 7.8, criticsScore: 100, audienceScore: 92, director: "Rebecca Sugar", 
        cast: ["Zach Callison", "Estelle", "Sarah Stiles"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Animation": 40, "Musical": 40, "Sci-Fi": 20 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Happily Ever After", color: "#fbcfe8" },
            { time: 30, intensity: 60, label: "Spinel Arrives", color: "#ec4899" },
            { time: 60, intensity: 80, label: "Drift Away", color: "#db2777" },
            { time: 75, intensity: 90, label: "True Kinda Love", color: "#be185d" },
            { time: 80, intensity: 60, label: "Change", color: "#f472b6" }
        ],
        synopsis: "Steven believes his time defending the Earth is over, but when a new threat comes to Beach City, Steven faces his biggest challenge yet.",
        themes: ["Growth", "Change", "Trauma"]
    }),

    // 5. Hotel Transylvania
    76492: createMovieData({ 
        wholesomeScore: 92, 
        funFactor: 90, 
        complexityLevel: "FUN", 
        dominantColor: "#7c3aed", // Dracula Purple
        rating: 7.0, criticsScore: 45, audienceScore: 72, director: "Genndy Tartakovsky", 
        cast: ["Adam Sandler", "Selena Gomez", "Andy Samberg"], boxOffice: "$358 million", budget: "$85 million", 
        dna: { "Animation": 50, "Comedy": 40, "Fantasy": 10 }, 
        scenes: [
            { time: 15, intensity: 30, label: "Hotel Check-In", color: "#a78bfa" },
            { time: 40, intensity: 60, label: "Zing", color: "#7c3aed" },
            { time: 70, intensity: 75, label: "The Party", color: "#6d28d9" },
            { time: 85, intensity: 90, label: "Chase to Airport", color: "#5b21b6" },
            { time: 90, intensity: 60, label: "Happy Birthday", color: "#4c1d95" }
        ],
        synopsis: "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
        themes: ["Acceptance", "Fatherhood", "Prejudice"]
    }),

    // 6. Hotel Transylvania 2
    260513: createMovieData({ 
        wholesomeScore: 90, 
        funFactor: 92, 
        complexityLevel: "FUN", 
        dominantColor: "#16a34a", // Dennis Green
        rating: 6.6, criticsScore: 56, audienceScore: 64, director: "Genndy Tartakovsky", 
        cast: ["Adam Sandler", "Selena Gomez", "Mel Brooks"], boxOffice: "$474 million", budget: "$80 million", 
        dna: { "Animation": 50, "Comedy": 40, "Family": 10 }, 
        scenes: [
            { time: 20, intensity: 30, label: "Dennis is Born", color: "#86efac" },
            { time: 50, intensity: 60, label: "Vampire Camp", color: "#16a34a" },
            { time: 75, intensity: 80, label: "Vlad Arrives", color: "#15803d" },
            { time: 85, intensity: 90, label: "Bela Attack", color: "#166534" },
            { time: 88, intensity: 60, label: "Dennis Fangs", color: "#22c55e" }
        ],
        synopsis: "Dracula and his friends try to bring out the monster in his half-human, half-vampire grandson in order to keep Mavis from leaving the hotel.",
        themes: ["Identity", "Grandparenting", "Acceptance"]
    }),

    // 7. The Amazing Maurice
    791334: createMovieData({ 
        wholesomeScore: 85, 
        funFactor: 88, 
        complexityLevel: "CLEVER", 
        dominantColor: "#f97316", // Cat Orange
        rating: 6.3, criticsScore: 74, audienceScore: 70, director: "Toby Genkel", 
        cast: ["Hugh Laurie", "Emilia Clarke", "David Thewlis"], boxOffice: "$23 million", budget: "$17 million", 
        dna: { "Animation": 40, "Fantasy": 40, "Comedy": 20 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Scam", color: "#fdba74" },
            { time: 40, intensity: 50, label: "Piper's Truth", color: "#f97316" },
            { time: 70, intensity: 80, label: "The Rat King", color: "#c2410c" },
            { time: 85, intensity: 90, label: "Maurice's Sacrifice", color: "#ea580c" },
            { time: 90, intensity: 50, label: "New Deal", color: "#9a3412" }
        ],
        synopsis: "Maurice is a streetwise ginger cat who comes up with a money-making scam by befriending a group of self-taught talking rats.",
        themes: ["Deception", "Redemption", "Teamwork"]
    }),

    // 8. My Friend the Penguin
    1007535: createMovieData({ 
        wholesomeScore: 100, 
        funFactor: 75, 
        complexityLevel: "HEARTWARMING", 
        dominantColor: "#0f172a", // Penguin Black/White
        rating: 7.0, criticsScore: 85, audienceScore: 97, director: "David Schurmann", 
        cast: ["Jean Reno", "Adriana Barraza"], boxOffice: "$5 million", budget: "N/A", 
        dna: { "Drama": 60, "Family": 40 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Rescue", color: "#64748b" },
            { time: 40, intensity: 50, label: "Dindim Returns", color: "#0f172a" },
            { time: 70, intensity: 60, label: "The Village", color: "#334155" },
            { time: 90, intensity: 80, label: "The Reunion", color: "#1e293b" },
            { time: 95, intensity: 90, label: "Viral Fame", color: "#94a3b8" }
        ],
        synopsis: "A grieving fisherman finds a lost penguin soaked in oil and nurses him back to health, creating a bond that transcends the ocean.",
        themes: ["Grief", "Nature", "Healing"]
    }),

    // 9. Fireheart
    778810: createMovieData({ 
        wholesomeScore: 90, 
        funFactor: 85, 
        complexityLevel: "INSPIRING", 
        dominantColor: "#ef4444", // Fire Red
        rating: 6.2, criticsScore: 44, audienceScore: 68, director: "Theodore Ty", 
        cast: ["Olivia Cooke", "Kenneth Branagh", "William Shatner"], boxOffice: "$27 million", budget: "$38 million", 
        dna: { "Animation": 50, "Adventure": 30, "Comedy": 20 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Dream", color: "#fca5a5" },
            { time: 45, intensity: 60, label: "Disguise", color: "#ef4444" },
            { time: 75, intensity: 80, label: "The Fire", color: "#b91c1c" },
            { time: 88, intensity: 90, label: "Saving Dad", color: "#dc2626" },
            { time: 92, intensity: 50, label: "First Firefighter", color: "#f87171" }
        ],
        synopsis: "Sixteen-year-old Georgia Nolan dreams of being the world's first-ever female firefighter. When a mysterious arsonist starts burning down Broadway, she disguises herself as a young man called 'Joe' to join a team of misfit firefighters.",
        themes: ["Ambition", "Equality", "Father-Daughter"]
    }),

    // 10. Oz the Great and Powerful
    68728: createMovieData({ 
        wholesomeScore: 80, 
        funFactor: 85, 
        complexityLevel: "SPECTACLE", 
        dominantColor: "#10b981", // Emerald Green
        rating: 6.3, criticsScore: 57, audienceScore: 56, director: "Sam Raimi", 
        cast: ["James Franco", "Mila Kunis", "Rachel Weisz"], boxOffice: "$493 million", budget: "$215 million", 
        dna: { "Fantasy": 60, "Adventure": 40 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Kansas Tornado", color: "#d1d5db" }, // Black & White
            { time: 30, intensity: 60, label: "Arrival in Oz", color: "#34d399" },
            { time: 70, intensity: 75, label: "The Wicked Witch", color: "#065f46" },
            { time: 110, intensity: 90, label: "The Great Illusion", color: "#10b981" },
            { time: 125, intensity: 50, label: "King of Oz", color: "#6ee7b7" }
        ],
        synopsis: "A small-time magician arrives in an enchanted land and is forced to decide if he will be a good man or a great one.",
        themes: ["Belief", "Redemption", "Magic"]
    })
};

// ✅ EXTENDED FAQs (Detailed & Engaging)
export const HULU_FAMILY_MOVIE_FAQS = {
    'Robot Dreams': [
        { question: "Is there any dialogue?", answer: "No, the entire film is dialogue-free. It uses animation, music, and sound effects to tell its story, making it universally understandable for all ages and languages." },
        { question: "Is it sad?", answer: "It is bittersweet. While it deals with separation and loss in a very poignant way, the ending is ultimately about growth, acceptance, and the beauty of memories." },
        { question: "What is the music used?", answer: "The song 'September' by Earth, Wind & Fire plays a central role in the film, symbolizing the happy times Dog and Robot shared together." },
        { question: "Is it suitable for young kids?", answer: "Yes, it is rated PG and is very gentle. However, the themes of friendship and drifting apart may resonate more deeply with older children and adults." }
    ],
    'Night at the Museum': [
        { question: "Is the museum real?", answer: "The exterior shots are of the actual American Museum of Natural History in New York City, but the interiors were built on a massive soundstage in Vancouver." },
        { question: "Did Robin Williams improvise?", answer: "Yes, Robin Williams (Teddy Roosevelt) improvised many of his lines. Director Shawn Levy often let him riff to add his signature humor to the character." },
        { question: "Is the tablet real history?", answer: "No, the Tablet of Ahkmenrah is a fictional artifact created for the movie. However, the Pharaoh Ahkmenrah is loosely inspired by real Egyptian history." },
        { question: "Are the animals real?", answer: "Most of the animals, including the T-Rex and the lions, are CGI. However, the monkey Dexter was played by a real capuchin monkey named Crystal." }
    ],
    'Sonic the Hedgehog 2': [
        { question: "Who voices Knuckles?", answer: "Knuckles is voiced by Idris Elba. He brought a serious, warrior-like tone to the character that contrasts hilariously with Sonic's goofy energy." },
        { question: "Is Jim Carrey really retiring?", answer: "Jim Carrey stated during the promotion of this film that he was 'fairly serious' about retiring from acting, making his performance as Dr. Robotnik potentially his final major role." },
        { question: "Is Tails a girl or boy?", answer: "Tails is a male fox. He is voiced by Colleen O'Shaughnessey, the same voice actress who has voiced him in the video games since 2014." },
        { question: "What is the chaos emerald?", answer: "The Master Emerald is a powerful gem that controls the other Chaos Emeralds. In the movie, it grants the user god-like powers to bend reality." }
    ],
    'Steven Universe: The Movie': [
        { question: "Do I need to watch the show first?", answer: "It helps, but the movie does a great job of recapping the story in the opening musical number. You can enjoy the standalone plot without knowing all the lore." },
        { question: "Who is the villain?", answer: "The villain is Spinel, a rubber-hose animation style gem who was abandoned by Steven's mother, Pink Diamond, for 6,000 years." },
        { question: "Why is it a musical?", answer: "Series creator Rebecca Sugar wanted to celebrate the show's musical roots. The film features collaborations with artists like Chance the Rapper, Estelle, and Aimee Mann." },
        { question: "Is there a time skip?", answer: "Yes, the movie takes place two years after the end of the original series. Steven is now 16 years old and has a neck!" }
    ],
    'Hotel Transylvania': [
        { question: "Who voices Dracula?", answer: "Dracula is voiced by Adam Sandler. He used a exaggerated accent inspired by classic Bela Lugosi movies but added his own comedic spin." },
        { question: "Is it scary?", answer: "Not at all. The monsters are designed to be goofy and lovable rather than frightening. It's a comedy about a father learning to let go of his daughter." },
        { question: "What is 'Zing'?", answer: "In the movie's lore, a 'Zing' is a love-at-first-sight moment that only happens once in a monster's life. It signifies true, eternal soulmates." },
        { question: "Is the Invisible Man wearing glasses?", answer: "Yes, Griffin the Invisible Man wears glasses so people know where his face is. They basically float in mid-air." }
    ],
    'Hotel Transylvania 2': [
        { question: "Is Mel Brooks in this?", answer: "Yes, legendary comedian Mel Brooks voices Vlad, Dracula's old-school, human-hating father. His character adds a generational conflict to the story." },
        { question: "Does Dennis become a vampire?", answer: "Spoiler: Yes. Near the end of the movie, Dennis's fangs finally come out when his friend Winnie is threatened, proving he is a late bloomer." },
        { question: "Is the hotel real?", answer: "The hotel is fictional, but its design is inspired by Bran Castle in Romania, which is commonly associated with the Dracula legend." },
        { question: "Who sings the ending song?", answer: "The ending song 'I'm in Love with a Monster' is performed by the girl group Fifth Harmony. It was written specifically for the film." }
    ],
    'The Amazing Maurice': [
        { question: "Is it based on a book?", answer: "Yes, it is based on the book 'The Amazing Maurice and His Educated Rodents' by Sir Terry Pratchett. It is part of his famous Discworld series." },
        { question: "Who is the narrator?", answer: "The story is framed by Malicia, a girl obsessed with fairy tales, who constantly breaks the fourth wall to discuss narrative tropes and plot structures." },
        { question: "Is it scary for kids?", answer: "It has a darker tone than most animated films, particularly the villain 'The Rat King', which is a hive-mind of rats. It might be intense for very young children." },
        { question: "Why can the rats talk?", answer: "The rats gained intelligence and speech after eating magical waste from the Unseen University's garbage dump. They named themselves after words they read on cans." }
    ],
    'My Friend the Penguin': [
        { question: "Is it a true story?", answer: "Yes, it is based on the true story of Joao Pereira de Souza, a Brazilian bricklayer who rescued a Magellanic penguin in 2011. The penguin, named Dindim, returns to visit him every year." },
        { question: "Did they use a real penguin?", answer: "The film uses a mix of real rescue penguins (for close-ups and walking) and CGI (for dangerous or complex scenes) to ensure animal safety." },
        { question: "How far does the penguin swim?", answer: "In real life, Dindim swims approximately 5,000 miles (8,000 km) each year from the coasts of Argentina/Chile to Brazil to reunite with Joao." },
        { question: "Where was it filmed?", answer: "The movie was filmed on location in Brazil and Argentina to capture the authentic landscapes of the true story." }
    ],
    'Fireheart': [
        { question: "Is it historically accurate?", answer: "The setting of 1930s New York is historical, but the story is fictional. However, it is inspired by real women who fought to become firefighters despite gender bans." },
        { question: "Who voices Georgia?", answer: "Georgia is voiced by Olivia Cooke (Ready Player One, House of the Dragon). She brings a spirited, determined energy to the character." },
        { question: "Why does she disguise herself?", answer: "In the 1930s, women were not allowed to be firefighters in New York. Georgia disguises herself as a man named 'Joe' to join the team and prove her worth." },
        { question: "Is the dog real?", answer: "The dalmatian Ember is an animated character, but dalmatians have historically been firehouse dogs because they got along well with the horses that used to pull fire engines." }
    ],
    'Oz the Great and Powerful': [
        { question: "Is it a prequel?", answer: "Yes, it serves as a spiritual prequel to the 1939 classic 'The Wizard of Oz', explaining how the Wizard arrived in Oz and became the ruler." },
        { question: "Why is it in black and white?", answer: "The beginning of the film, set in Kansas, is in black and white and a 4:3 aspect ratio. When Oz arrives in the magical land, it expands to color and widescreen, honoring the 1939 film's transition." },
        { question: "Who is the Wicked Witch?", answer: "Mila Kunis plays Theodora, who transforms into the Wicked Witch of the West after her heart is broken by Oz's deceit." },
        { question: "Is Dorothy in it?", answer: "No, Dorothy is not in this film as it takes place many years before her arrival. However, Annie (Michelle Williams) is hinted to be Dorothy's future mother." }
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
        types.add(scene.type);
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_FAMILY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A great family movie on Hulu.`,
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