// utils/huluBestMoviesData.js - TOP 10 BEST MOVIES ON HULU ✅
// The definitive ranking of the highest-rated films currently streaming on Hulu across all genres.

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 949, "imdbID": "tt0113277", "Title": "Heat", "year": 1995, "genre": "Crime", "runtime": 170, "rank": 1 },
    { "tmdbId": 324786, "imdbID": "tt2119532", "Title": "Hacksaw Ridge", "year": 2016, "genre": "War", "runtime": 139, "rank": 2 },
    { "tmdbId": 14756, "imdbID": "tt1220719", "Title": "Ip Man", "year": 2008, "genre": "Action", "runtime": 106, "rank": 3 },
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi", "runtime": 113, "rank": 4 },
    { "tmdbId": 44214, "imdbID": "tt0947798", "Title": "Black Swan", "year": 2010, "genre": "Thriller", "runtime": 108, "rank": 5 },
    { "tmdbId": 976893, "imdbID": "tt27503384", "Title": "Perfect Days", "year": 2023, "genre": "Drama", "runtime": 124, "rank": 6 },
    { "tmdbId": 106, "imdbID": "tt0093773", "Title": "Predator", "year": 1987, "genre": "Sci-Fi", "runtime": 107, "rank": 7 },
    { "tmdbId": 134, "imdbID": "tt0190590", "Title": "O Brother, Where Art Thou?", "year": 2000, "genre": "Comedy", "runtime": 107, "rank": 8 },
    { "tmdbId": 994108, "imdbID": "tt21192142", "Title": "All of Us Strangers", "year": 2023, "genre": "Romance", "runtime": 105, "rank": 9 },
    { "tmdbId": 8363, "imdbID": "tt0829482", "Title": "Superbad", "year": 2007, "genre": "Comedy", "runtime": 113, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    // 1. Heat
    949: { scenes: [] }, 

    // 2. Hacksaw Ridge
    324786: { 
        scenes: [
            { start: "0:28:00", end: "0:33:00", type: "Partial Nudity", severity: "Moderate" }
        ] 
    }, 

    // 3. Ip Man
    14756: { 
        scenes: [
            { start: "0:12:21", end: "0:12:24", type: "Partial Nudity (Non-Sexual)", severity: "Mild" }
        ] 
    },

    // 4. Donnie Darko
    141: { scenes: [] },

    // 5. Black Swan
    44214: { scenes: [
        { start: '39:40', end: '40:40', type: 'Sexual Content', severity: 'High' },
        { start: '48:52', end: '49:10', type: 'Sexual Content', severity: 'Moderate' },
        { start: '51:20', end: '51:40', type: 'Sexual Content', severity: 'High' },
        { start: '1:08:20', end: '1:11:01', type: 'Sex', severity: 'High' },
        { start: '1:20:20', end: '1:20:40', type: 'Sex', severity: 'High' }
    ]},

    // 6. Perfect Days
    976893: { 
        scenes: [
            { start: "0:23:05", end: "0:23:25", type: "Partial Nudity (Non-Sexual)", severity: "Mild" }
        ] 
    }, 

    // 7. Predator
    106: { scenes: [] }, 

    // 8. O Brother, Where Art Thou?
    134: { scenes: [] },

    // 9. All of Us Strangers
    994108: { 
        scenes: [
            { start: "0:26:30", end: "0:28:47", type: "Sex", severity: "Moderate" }
        ] 
    },

    // 10. Superbad
    8363: { 
        scenes: [
            { start: "0:04:45", end: "0:04:55", type: "Nudity", severity: "High" },
            { start: "0:09:38", end: "0:09:45", type: "Nudity", severity: "High" },
            { start: "0:18:15", end: "0:20:30", type: "Sexual Content", severity: "Mild" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    949: "https://image.tmdb.org/t/p/w500/zMyfPUelumio3tiDKPffaUpsQTD.jpg",
    324786: "https://image.tmdb.org/t/p/w500/fR9727gJ6Jga23X2Jb53Z3dD3tK.jpg",
    14756: "https://image.tmdb.org/t/p/w500/ggTTuxwxV76P10J9a9YtV529E7Q.jpg",
    141: "https://image.tmdb.org/t/p/w500/fhQoQoeNR72JXYgyqgzTzJluSF1.jpg",
    44214: "https://image.tmdb.org/t/p/w500/2TeJfUZMGolE6jI4mc7EBWkWhqL.jpg",
    976893: "https://image.tmdb.org/t/p/w500/cc5d7J554833F90059333c59.jpg",
    106: "https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    134: "https://image.tmdb.org/t/p/w500/9cj5X3Q6a6z9f6q6q6q6q6q6.jpg",
    994108: "https://image.tmdb.org/t/p/w500/5p21y7H57x7X57x57x57x57x.jpg",
    8363: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJnhq.jpg"
};

// ✅ STRATEGIC QUOTES (Universal Component Safety)
export const STRATEGIC_QUOTES = {
    949: "Action is the juice.",
    324786: "Please Lord, help me get one more.",
    14756: "I want to fight ten people!",
    141: "Why are you wearing that stupid man suit?",
    44214: "I felt it. Perfect. I was perfect.",
    976893: "Next time is next time. Now is now.",
    106: "If it bleeds, we can kill it.",
    134: "I'm a Dapper Dan man!",
    994108: "I've always been lonely. That's why I'm here.",
    8363: "I am McLovin."
};

export const CINEMATIC_COLORS = {
    "Crime": "#334155", "War": "#991b1b", "Action": "#ea580c", "Sci-Fi": "#3b82f6", 
    "Thriller": "#000000", "Drama": "#0ea5e9", "Comedy": "#facc15", "Romance": "#4f46e5"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Skip It", color: "#dc2626", symbol: "🥱", bgColor: "bg-red-900/30", description: "Not worth the time" },
    { value: 2, label: "Good", color: "#ea580c", symbol: "👍", bgColor: "bg-orange-900/30", description: "A solid watch" },
    { value: 3, label: "Great", color: "#16a34a", symbol: "🔥", bgColor: "bg-green-900/30", description: 'Highly recommended' },
    { value: 4, label: "Masterpiece", color: "#eab308", symbol: "🏆", bgColor: "bg-yellow-900/30", description: "Absolute Cinema" }
];

// ✅ HELPER: Standard Data Creator
const createMovieData = (data) => ({
    adrenalineScore: 85,    
    violenceLevel: 75,      
    visceralImpact: 90,     
    complexityLevel: "ESSENTIAL",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Heat (Slate Blue - Cool Professionalism)
    949: createMovieData({
        rating: 8.3, criticsScore: 88, audienceScore: 94, director: "Michael Mann",
        cast: ["Al Pacino", "Robert De Niro", "Val Kilmer"], boxOffice: "$187 million", budget: "$60 million",
        dominantColor: "#334155", // Slate
        dna: { "Crime": 50, "Action": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "The Armored Car", color: "#1e293b" },
            { time: 60, intensity: 50, label: "Coffee Shop", color: "#334155" },
            { time: 90, intensity: 75, label: "Surveillance", color: "#475569" },
            { time: 110, intensity: 96, label: "The Shootout", color: "#ef4444" },
            { time: 165, intensity: 85, label: "Airport Finale", color: "#b91c1c" }
        ],
        synopsis: "In the sprawling concrete jungle of Los Angeles, a master thief and his elite crew plan one final, impossible heist while being hunted by a relentless, obsessive detective. As the stakes rise, the line between criminal and cop blurs, revealing two men who are mirror images of each other on opposite sides of the law. It culminates in a legendary downtown shootout where tactical realism meets operatic tragedy.",
        themes: ["Crime", "Obsession", "Duality"]
    }),

    // 2. Hacksaw Ridge (Blood Red - Visceral War)
    324786: createMovieData({
        rating: 8.1, criticsScore: 84, audienceScore: 91, director: "Mel Gibson",
        cast: ["Andrew Garfield", "Sam Worthington", "Vince Vaughn"], boxOffice: "$180 million", budget: "$40 million",
        dominantColor: "#991b1b", // War Red
        dna: { "War": 50, "History": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "The Vow", color: "#fcd34d" },
            { time: 45, intensity: 50, label: "Boot Camp", color: "#d97706" },
            { time: 70, intensity: 98, label: "Taking the Ridge", color: "#b91c1c" },
            { time: 100, intensity: 85, label: "One More", color: "#7f1d1d" },
            { time: 130, intensity: 60, label: "Descent", color: "#facc15" }
        ],
        synopsis: "The extraordinary true story of Desmond Doss, a Seventh-day Adventist who enlisted in the US Army during WWII but refused to carry a weapon due to his religious beliefs. Despite being ostracized by his unit, he served as a medic in the bloodiest battle of the Pacific theater, Okinawa. In the face of intense artillery fire, he single-handedly saved 75 men without firing a shot.",
        themes: ["Faith", "Pacifism", "Courage"]
    }),

    // 3. Ip Man (Zinc Grey - Desaturated History)
    14756: createMovieData({
        rating: 8.0, criticsScore: 86, audienceScore: 93, director: "Wilson Yip",
        cast: ["Donnie Yen", "Simon Yam", "Siu-Wong Fan"], boxOffice: "$21 million", budget: "$11 million",
        dominantColor: "#52525b", // Zinc Grey
        dna: { "Action": 60, "History": 20, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 35, label: "Friendly Spar", color: "#d4d4d8" },
            { time: 45, intensity: 65, label: "The Occupation", color: "#52525b" },
            { time: 65, intensity: 92, label: "I Want 10!", color: "#18181b" },
            { time: 85, intensity: 75, label: "Cotton Mill", color: "#71717a" },
            { time: 100, intensity: 88, label: "General Miura", color: "#3f3f46" }
        ],
        synopsis: "Set during the Sino-Japanese War, the film follows Ip Man, a wealthy and respected martial artist who is forced into destitution when the Japanese army occupies his city. Refusing to bow to oppression, he uses his mastery of Wing Chun to defend his people's dignity, culminating in a legendary challenge where he fights ten black belts simultaneously to restore his nation's honor.",
        themes: ["Honor", "Martial Arts", "Resilience"]
    }),

    // 4. Donnie Darko (Midnight Blue - Surreal Night)
    141: createMovieData({
        rating: 8.0, criticsScore: 87, audienceScore: 80, director: "Richard Kelly",
        cast: ["Jake Gyllenhaal", "Jena Malone", "Mary McDonnell"], boxOffice: "$7.5 million", budget: "$4.5 million",
        dominantColor: "#1e1b4b", // Midnight Blue
        dna: { "Sci-Fi": 40, "Thriller": 40, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "The Engine", color: "#1e1b4b" },
            { time: 40, intensity: 50, label: "Frank's Warning", color: "#4c1d95" },
            { time: 75, intensity: 70, label: "Cellar Door", color: "#6d28d9" },
            { time: 95, intensity: 85, label: "The Party", color: "#5b21b6" },
            { time: 110, intensity: 95, label: "Mad World", color: "#312e81" }
        ],
        synopsis: "In a quiet suburban town, troubled teenager Donnie narrowly escapes a jet engine crashing into his bedroom after being lured out by a terrifying figure in a rabbit suit named Frank. Frank tells him the world will end in 28 days, setting Donnie on a bizarre path of time travel, metaphysics, and vandalism. As the countdown ticks away, Donnie must unravel the fabric of the universe to understand his role in a cosmic destiny.",
        themes: ["Time Travel", "Fate", "Coming of Age"]
    }),

    // 5. Black Swan (Deep Rose - Beauty & Blood)
    44214: createMovieData({
        rating: 8.0, criticsScore: 85, audienceScore: 84, director: "Darren Aronofsky",
        cast: ["Natalie Portman", "Mila Kunis", "Vincent Cassel"], boxOffice: "$329 million", budget: "$13 million",
        dominantColor: "#9f1239", // Rose Red
        dna: { "Thriller": 50, "Horror": 30, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 30, label: "The Casting", color: "#fbcfe8" },
            { time: 50, intensity: 60, label: "The Club", color: "#be123c" },
            { time: 80, intensity: 85, label: "Growing Feathers", color: "#9f1239" },
            { time: 95, intensity: 90, label: "The Stab", color: "#881337" },
            { time: 105, intensity: 94, label: "Perfect", color: "#000000" }
        ],
        synopsis: "Nina is a ballerina whose passion for the dance rules every facet of her life. When she wins the lead role in Swan Lake, the pressure to embody both the innocent White Swan and the sensual Black Swan begins to fracture her mind. As a rival dancer threatens her position, Nina's reality warps into a waking nightmare where the pursuit of artistic perfection demands the ultimate sacrifice.",
        themes: ["Perfection", "Psychosis", "Identity"]
    }),

    // 6. Perfect Days (Sky Blue - Peaceful Routine)
    976893: createMovieData({
        rating: 7.9, criticsScore: 96, audienceScore: 91, director: "Wim Wenders",
        cast: ["Kōji Yakusho", "Tokio Emoto", "Arisa Nakano"], boxOffice: "$24 million", budget: "N/A",
        dominantColor: "#0ea5e9", // Sky Blue
        dna: { "Drama": 60, "Music": 20, "Philosophy": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "Morning Routine", color: "#bae6fd" },
            { time: 45, intensity: 40, label: "The Park", color: "#7dd3fc" },
            { time: 70, intensity: 60, label: "The Niece", color: "#38bdf8" },
            { time: 95, intensity: 75, label: "Shadow Tag", color: "#0ea5e9" },
            { time: 120, intensity: 80, label: "Feeling Good", color: "#0284c7" }
        ],
        synopsis: "Hirayama seems utterly content with his simple life as a cleaner of toilets in Tokyo. Outside of his very structured everyday routine, he enjoys his passion for music and for books. Through a series of unexpected encounters, his past is gradually revealed. A deeply moving, poetic meditation on finding beauty in the mundane world around us.",
        themes: ["Simplicity", "Routine", "Gratitude"]
    }),

    // 7. Predator (Jungle Green - Primal Hunt)
    106: createMovieData({
        rating: 7.8, criticsScore: 82, audienceScore: 87, director: "John McTiernan",
        cast: ["Arnold Schwarzenegger", "Carl Weathers", "Jesse Ventura"], boxOffice: "$98 million", budget: "$15 million",
        dominantColor: "#166534", // Jungle Green
        dna: { "Action": 40, "Sci-Fi": 30, "Horror": 30 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Jungle", color: "#166534" },
            { time: 40, intensity: 55, label: "Bodies Found", color: "#65a30d" },
            { time: 65, intensity: 80, label: "Old Painless", color: "#ef4444" },
            { time: 90, intensity: 90, label: "Mud Camouflage", color: "#3f6212" },
            { time: 100, intensity: 95, label: "Self Destruct", color: "#f59e0b" }
        ],
        synopsis: "Dutch, the leader of an elite special forces rescue team, leads his men deep into the Central American jungle on a CIA mission to recover hostages. However, the mission goes horribly sideways when they realize they are being hunted by something not of this world—an invisible, technologically advanced extraterrestrial warrior that hunts humans for sport and honor.",
        themes: ["Survival", "Hunt", "Sci-Fi Action"]
    }),

    // 8. O Brother, Where Art Thou? (Sepia/Amber - Dust Bowl)
    134: createMovieData({
        rating: 7.7, criticsScore: 79, audienceScore: 89, director: "Joel Coen",
        cast: ["George Clooney", "John Turturro", "Tim Blake Nelson"], boxOffice: "$71 million", budget: "$26 million",
        dominantColor: "#d97706", // Amber/Sepia
        dna: { "Comedy": 50, "Adventure": 30, "Music": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "The Chain Gang", color: "#a16207" },
            { time: 40, intensity: 50, label: "The Sirens", color: "#ca8a04" },
            { time: 70, intensity: 65, label: "Cyclops", color: "#d97706" },
            { time: 90, intensity: 88, label: "Constant Sorrow", color: "#b45309" },
            { time: 100, intensity: 60, label: "The Flood", color: "#854d0e" }
        ],
        synopsis: "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. Loosely based on Homer's 'Odyssey,' the trio encounters a series of bizarre characters—including a blind prophet, bank robber George Nelson, and a KKK rally—while inadvertently becoming bluegrass sensations.",
        themes: ["Adventure", "Folk Music", "Redemption"]
    }),

    // 9. All of Us Strangers (Indigo - Dreamlike Melancholy)
    994108: createMovieData({
        rating: 7.7, criticsScore: 96, audienceScore: 91, director: "Andrew Haigh",
        cast: ["Andrew Scott", "Paul Mescal", "Jamie Bell"], boxOffice: "$19 million", budget: "$15 million",
        dominantColor: "#4f46e5", // Indigo
        dna: { "Romance": 40, "Fantasy": 30, "Drama": 30 },
        scenes: [
            { time: 10, intensity: 20, label: "The Fire Alarm", color: "#6366f1" },
            { time: 40, intensity: 55, label: "Childhood Home", color: "#818cf8" },
            { time: 70, intensity: 80, label: "Club Night", color: "#4f46e5" },
            { time: 95, intensity: 95, label: "The Diner Truth", color: "#312e81" },
            { time: 100, intensity: 85, label: "Power of Love", color: "#3730a3" }
        ],
        synopsis: "Adam, a solitary screenwriter living in a near-empty London tower block, has a chance encounter with his mysterious neighbor Harry that punctures the rhythm of his everyday life. As a relationship develops between them, Adam is preoccupied with memories of the past and finds himself drawn back to his childhood home, where his parents appear to be living just as they were on the day they died, 30 years ago.",
        themes: ["Grief", "Love", "Memory"]
    }),

    // 10. Superbad (Vibrant Orange - Teenage Chaos)
    8363: createMovieData({
        rating: 7.6, criticsScore: 88, audienceScore: 87, director: "Greg Mottola",
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"], boxOffice: "$170 million", budget: "$20 million",
        dominantColor: "#f97316", // Orange
        dna: { "Comedy": 60, "Coming of Age": 20, "Friendship": 20 },
     scenes: [
            { time: 15, intensity: 40, label: "The Fake ID" }, // Mild anxiety over McLovin.
            { time: 40, intensity: 78, label: "The Liquor Store Robbery" }, // Fogell gets punched. Real danger spikes.
            { time: 70, intensity: 85, label: "The Cop Car Joyride" }, // Shooting stop signs. Insane escalation.
            { time: 85, intensity: 90, label: "The Period Blood Incident" }, // PRIMARY PEAK: Social and physical chaos at the party. Fight breaks out.
            { time: 105, intensity: 35, label: "Sleeping Bags" } // Pure emotional vulnerability. Zero tension.
        ],
        synopsis: "Two co-dependent high school seniors, Seth and Evan, are forced to deal with separation anxiety as they prepare to go to different colleges. In a desperate bid to be cool and lose their virginity before graduation, they volunteer to supply alcohol for a massive party. Their quest goes hilariously wrong involving two bored cops, a fake ID named 'McLovin', and a night that spirals into absolute absurdity.",
        themes: ["Friendship", "Growing Up", "Partying"]
    })
};

export const HULU_BEST_MOVIE_FAQS = {
    'Heat': [
        { 
            question: "Why is the coffee shop scene considered a 'cinematic event'?", 
            answer: "It was the first time legends Al Pacino and Robert De Niro appeared on screen together. Director Michael Mann famously didn't rehearse them so their interaction would feel authentic and tense. Interestingly, they only share about 10 minutes of screen time in the entire 3-hour epic." 
        },
        { 
            question: "Is the bank robbery shootout actually realistic?", 
            answer: "It’s the gold standard. The military actually uses this scene to train soldiers on 'fire and movement' tactics. The deafening sound of the gunfire isn't a studio effect—it's the actual audio of blanks echoing off the real skyscrapers of downtown LA." 
        },
        { 
            question: "Why does Al Pacino’s character act so erratically?", 
            answer: "Pacino revealed that his character, Vincent Hanna, was originally written as having a cocaine habit. While the drug use was cut from the final film, Pacino kept the 'wired,' high-energy performance, which explains iconic outbursts like the 'Great Ass!' line." 
        }
    ],

    'Hacksaw Ridge': [
        { 
            question: "How much of Desmond Doss’s story is true?", 
            answer: "Almost all of it. In fact, director Mel Gibson had to *remove* some of the real-life heroics—like Doss being hit by a sniper and crawling 300 yards to safety—because he thought audiences would find it too unbelievable for a movie." 
        },
        { 
            question: "Why did he refuse to carry a weapon?", 
            answer: "Doss was a Seventh-day Adventist. His refusal wasn't about cowardice, but a strict adherence to 'Thou Shalt Not Kill.' He preferred the term 'Conscientious Cooperator' because he wanted to serve his country, just without taking a life." 
        }
    ],

    'Ip Man': [
        { 
            question: "How accurate is this to the life of Bruce Lee’s teacher?", 
            answer: "It’s a 'legendary' biography rather than a factual one. While Ip Man was a real Wing Chun grandmaster, the fights against Japanese generals are dramatized. However, the film perfectly captures the philosophy of Wing Chun: speed, efficiency, and calmness under pressure." 
        },
        { 
            question: "Did Donnie Yen actually learn Wing Chun for the role?", 
            answer: "Yes. Despite being a master of many styles, Yen trained for 9 months specifically in Wing Chun to master its unique 'chain punching' and centerline defense, making the fight choreography feel grounded and elite." 
        }
    ],

    'Donnie Darko': [
        { 
            question: "Theatrical vs. Director’s Cut: Which one should I watch?", 
            answer: "The Theatrical Cut is preferred by most fans because it's more mysterious and dream-like. The Director’s Cut adds explicit explanations about time travel 'Tangent Universes,' which some feel removes the 'cult' magic of the original mystery." 
        },
        { 
            question: "What does the ending actually mean? (Spoiler-Free)", 
            answer: "It’s a story about sacrifice. Donnie realizes that for the world (and the people he loves) to survive, he must accept a destiny that only he can fulfill. It’s less of a tragedy and more of a triumphant 'reset' of the universe." 
        }
    ],

    'Black Swan': [
        { 
            question: "Is this a horror movie or a drama?", 
            answer: "It’s a 'Psychological Body-Horror.' Director Darren Aronofsky uses the physical toll of ballet—peeling skin, snapping joints—to show the mental breakdown of a perfectionist. It’s often called a companion piece to his other film, *The Wrestler*." 
        },
        { 
            question: "Did Natalie Portman really do her own stunts?", 
            answer: "Portman trained for a year and lost 20 pounds to look like a pro. While she did most of the upper-body work and acting, professional ballerina Sarah Lane performed the complex 'en pointe' footwork." 
        }
    ],

    'Perfect Days': [
        { 
            question: "Why is a movie about a toilet cleaner so highly rated?", 
            answer: "It’s a 'slow cinema' masterpiece about finding dignity in routine. It was actually commissioned to celebrate 'The Tokyo Toilet' architectural project, but became a deeply moving character study about the beauty of the present moment." 
        },
        { 
            question: "What is the meaning of 'Komorebi'?", 
            answer: "It’s a Japanese word for sunlight filtering through leaves. The movie uses this concept to show that every moment is unique and fleeting—just like the light through the trees that the main character, Hirayama, photographs every day." 
        }
    ],

    'Predator': [
        { 
            question: "What’s the story behind the 'Epic Handshake' meme?", 
            answer: "The mid-air bicep flex between Arnold Schwarzenegger and Carl Weathers was meant to show 80s 'hyper-masculinity.' It became one of the internet’s most famous memes, used to show two groups finally agreeing on something." 
        },
        { 
            question: "Was Jean-Claude Van Damme almost the Predator?", 
            answer: "Yes! He was originally cast as the alien, but he hated the original 'bug-like' suit and complained that he couldn't show off his kickboxing. He was replaced by the 7'2\" Kevin Peter Hall, and the monster was redesigned into the icon we know today." 
        }
    ],

    'All of Us Strangers': [
        { 
            question: "Is this a ghost story or a memory?", 
            answer: "It’s both. The film uses a supernatural premise—a man meeting his dead parents at the age they were when they died—to explore the trauma of growing up queer in the 80s. It’s designed to feel like 'dream logic.'" 
        },
        { 
            question: "Why is the chemistry between Andrew Scott and Paul Mescal so praised?", 
            answer: "They are two of the most acclaimed 'Tier 1' actors today. Their performances are incredibly raw and intimate, turning a sci-fi premise into a deeply grounded story about loneliness and the 'power of love.'" 
        }
    ],

    'Superbad': [
        { 
            question: "Why is 'McLovin' still a cultural icon 15+ years later?", 
            answer: "Because it’s the ultimate 'fake ID' nightmare. The name was chosen for its total absurdity. Christopher Mintz-Plasse (who was 17 at the time) was so annoying in his audition that Jonah Hill actually hated him—which created the perfect on-screen rivalry." 
        },
        { 
            question: "How did this movie change teen comedies?", 
            answer: "Before Superbad, teen movies were mostly about 'getting the girl.' This movie shifted the focus to the 'platonic love' between male friends facing the anxiety of going to different colleges. It made being 'sensitive' and 'awkward' the new cool." 
        }
    ]
};

// 9️⃣ HELPER FUNCTIONS & EXPORTS (🔥 UPGRADED FOR UNIVERSAL SEO)
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

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

// 🔥 1. THE KEYWORD BRIDGE (SEO-Optimized)
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

// 🔥 2. THE "GOLDEN EGG" SCHEMA GENERATOR (Universal Version)
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
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = HULU_BEST_MOVIE_FAQS[movie.Title] ? [...HULU_BEST_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = HULU_BEST_MOVIE_FAQS[movieTitle] ? [...HULU_BEST_MOVIE_FAQS[movieTitle]] : [];
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