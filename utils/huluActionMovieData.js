// utils/huluActionMovieData.js - HULU ACTION COLLECTION DATA
// High-Octane Action, Fight Choreography, and Adrenaline-Fueled Cinema

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 106, "imdbID": "tt0093773", "Title": "Predator", "year": 1987, "genre": "Sci-Fi", "runtime": 107, "rank": 1 },
    { "tmdbId": 8681, "imdbID": "tt0936501", "Title": "Taken", "year": 2008, "genre": "Thriller", "runtime": 90, "rank": 2 },
    { "tmdbId": 999001, "imdbID": "tt_placeholder", "Title": "Predator: Killer of Killers", "year": 2025, "genre": "Animation", "runtime": 45, "rank": 3 },
    { "tmdbId": 119450, "imdbID": "tt2103281", "Title": "Dawn of the Planet of the Apes", "year": 2014, "genre": "Sci-Fi", "runtime": 130, "rank": 4 },
    { "tmdbId": 877269, "imdbID": "tt11866324", "Title": "Prey", "year": 2022, "genre": "Sci-Fi", "runtime": 99, "rank": 5 },
    { "tmdbId": 156022, "imdbID": "tt0455944", "Title": "The Equalizer", "year": 2014, "genre": "Thriller", "runtime": 132, "rank": 6 },
    { "tmdbId": 14756, "imdbID": "tt1220719", "Title": "Ip Man", "year": 2008, "genre": "Action", "runtime": 106, "rank": 7 },
    { "tmdbId": 207703, "imdbID": "tt2802144", "Title": "Kingsman: The Secret Service", "year": 2014, "genre": "Action", "runtime": 129, "rank": 8 },
    { "tmdbId": 718930, "imdbID": "tt12593682", "Title": "Bullet Train", "year": 2022, "genre": "Action", "runtime": 127, "rank": 9 },
    { "tmdbId": 513310, "imdbID": "tt9066658", "Title": "Boss Level", "year": 2020, "genre": "Sci-Fi", "runtime": 100, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Extreme Violence & Gore for Action Genre)
export const SENSITIVE_TIMELINES = {
    // 1. Predator
    106: { 
        scenes: [
            { start: "0:46:00", end: "0:47:00", type: "Gore", severity: "High" }, // Skinned bodies
            { start: "1:15:20", end: "1:16:30", type: "Violence", severity: "Extreme" } // Spine rip
        ] 
    },
    // 2. Taken
    8681: { 
        scenes: [
            { start: "1:08:00", end: "1:10:00", type: "Torture", severity: "High" } // Electricity scene
        ] 
    },
    // 3. Predator: Killer of Killers (Animated)
    999001: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Animated Gore", severity: "High" }
        ] 
    },
    // 4. Dawn of the Planet of the Apes
    119450: { scenes: [] }, // Mostly war violence, standard rating
    
    // 5. Prey
    877269: { 
        scenes: [
            { start: "0:55:00", end: "0:58:00", type: "Gore", severity: "High" } // Bear trap/French trappers
        ] 
    },
    // 6. The Equalizer
    156022: { 
        scenes: [
            { start: "1:25:00", end: "1:27:00", type: "Violence", severity: "Extreme" }, // Drill scene
            { start: "0:28:00", end: "0:29:00", type: "Violence", severity: "High" } // Bar fight
        ] 
    },
    // 7. Ip Man
    14756: { 
        scenes: [
            { start: "0:58:00", end: "1:02:00", type: "Violence", severity: "High" } // 1 vs 10 bone breaking
        ] 
    },
    // 8. Kingsman
    207703: { 
        scenes: [
            { start: "1:24:00", end: "1:28:00", type: "Violence", severity: "Extreme" }, // Church Fight
            { start: "1:35:00", end: "1:36:00", type: "Exploding Heads", severity: "High" }
        ] 
    },
    // 9. Bullet Train
    718930: { 
        scenes: [
            { start: "0:50:00", end: "0:52:00", type: "Bloody Violence", severity: "High" }, // Eye stab
            { start: "1:40:00", end: "1:45:00", type: "Violence", severity: "High" }
        ] 
    },
    // 10. Boss Level
    513310: { 
        scenes: [
            { start: "0:01:00", end: "0:05:00", type: "Violence", severity: "Moderate" }, // Opening loop
            { start: "0:35:00", end: "0:36:00", type: "Gore", severity: "High" } // Decapitation
        ] 
    }
};

export const FALLBACK_POSTERS = {
    106: "https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    8681: "https://image.tmdb.org/t/p/w500/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    999001: "https://via.placeholder.com/500x750?text=Predator+Killer+of+Killers",
    119450: "https://image.tmdb.org/t/p/w500/2EuaZ1p9KT81hMWjV7oqamAQ6RL.jpg",
    877269: "https://image.tmdb.org/t/p/w500/ujr5pztc1oirVRgiIYWO0pWitVD.jpg",
    156022: "https://image.tmdb.org/t/p/w500/9u4yW7yPA0MQ274BeckxdbkF2A.jpg",
    14756: "https://image.tmdb.org/t/p/w500/ggTTuxwxV76P10J9a9YtV529E7Q.jpg",
    207703: "https://image.tmdb.org/t/p/w500/ay7xwXn1G9fzX9T98qqeE406Zo.jpg",
    718930: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
    513310: "https://image.tmdb.org/t/p/w500/6bCplVkhowCjTHXWv49Uj480Sz6.jpg"
};

// ✅ Helper to map "Action" metrics to your existing data structure
// We reuse 'psychologicalIntensity' for 'Adrenaline Level' 
// We reuse 'destructiveObsession' for 'Violence/Gore Level'
const createMovieData = (data) => ({
    psychologicalIntensity: 85, // Acts as Adrenaline Score
    destructiveObsession: 80,   // Acts as Violence Score
    visceralImpact: 90,         // Acts as Action Choreography
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Predator
    106: createMovieData({ 
        psychologicalIntensity: 90, destructiveObsession: 85, visceralImpact: 100, complexityLevel: "LEGENDARY", 
        dominantColor: "#166534", rating: 8.5, criticsScore: 82, audienceScore: 87, director: "John McTiernan", 
        cast: ["Arnold Schwarzenegger", "Carl Weathers"], boxOffice: "$98.3 million", budget: "$15 million", 
        dna: { "Action": 50, "Sci-Fi": 30, "Horror": 20 },
        scenes: [
            { time: 10, intensity: 40, label: "The Insertion", color: "#166534" },
            { time: 35, intensity: 65, label: "Something's Watching", color: "#65a30d" },
            { time: 55, intensity: 85, label: "Old Painless", color: "#ef4444" }, 
            { time: 80, intensity: 90, label: "Get to the Choppa", color: "#b91c1c" },
            { time: 95, intensity: 100, label: "Dutch vs Predator", color: "#f59e0b" }
        ],
        synopsis: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior. The ultimate test of testosterone vs. alien technology.",
        themes: ["Survival", "The Hunt", "Man vs Monster"]
    }),

    // 2. Taken
    8681: createMovieData({ 
        psychologicalIntensity: 95, destructiveObsession: 70, visceralImpact: 90, complexityLevel: "DIRECT", 
        dominantColor: "#1e293b", rating: 7.8, criticsScore: 59, audienceScore: 93, director: "Pierre Morel", 
        cast: ["Liam Neeson", "Maggie Grace"], boxOffice: "$226.8 million", budget: "$25 million", 
        dna: { "Action": 60, "Thriller": 40 },
        scenes: [
            { time: 15, intensity: 45, label: "The Call", color: "#1e293b" },
            { time: 35, intensity: 75, label: "Airport Pursuit", color: "#3b82f6" },
            { time: 55, intensity: 85, label: "Construction Fight", color: "#64748b" },
            { time: 70, intensity: 90, label: "The Interrogation", color: "#ef4444" },
            { time: 88, intensity: 98, label: "The Boat", color: "#0f172a" }
        ],
        synopsis: "A retired CIA agent travels across Europe relying on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris. 90 minutes of pure, unfiltered dad-rage.",
        themes: ["Revenge", "Fatherhood", "Espionage"]
    }),

    // 3. Predator: Killer of Killers
    999001: createMovieData({ 
        psychologicalIntensity: 88, destructiveObsession: 95, visceralImpact: 95, complexityLevel: "ANIMATED", 
        dominantColor: "#7f1d1d", rating: 8.0, criticsScore: 85, audienceScore: 88, director: "Unknown", 
        cast: ["Voice Cast"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Action": 40, "Animation": 30, "Horror": 30 },
        scenes: [
            { time: 5, intensity: 50, label: "The Landing", color: "#1f2937" },
            { time: 15, intensity: 75, label: "First Blood", color: "#991b1b" },
            { time: 25, intensity: 88, label: "Vikings vs Beast", color: "#ef4444" },
            { time: 35, intensity: 92, label: "Berserker Mode", color: "#7f1d1d" },
            { time: 42, intensity: 98, label: "Honor Death", color: "#b91c1c" }
        ],
        synopsis: "An R-rated animated anthology chapter where Viking warriors face the ultimate hunter. Steel meets plasma technology in a brutal clash of eras.",
        themes: ["History vs Sci-Fi", "Warrior Code", "Survival"]
    }),

    // 4. Dawn of the Planet of the Apes
    119450: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 60, visceralImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 7.6, criticsScore: 90, audienceScore: 88, director: "Matt Reeves", 
        cast: ["Andy Serkis", "Jason Clarke"], boxOffice: "$710 million", budget: "$170 million", 
        dna: { "War": 40, "Sci-Fi": 40, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Bear Hunt", color: "#166534" },
            { time: 45, intensity: 65, label: "Koba's Trick", color: "#71717a" },
            { time: 70, intensity: 85, label: "The Attack Begins", color: "#ef4444" },
            { time: 95, intensity: 95, label: "Apes on Horses", color: "#0f172a" },
            { time: 120, intensity: 90, label: "Caesar vs Koba", color: "#3f3f46" }
        ],
        synopsis: "A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors. The tension breaks into an all-out war featuring apes dual-wielding machine guns on horseback.",
        themes: ["War", "Trust", "Leadership"]
    }),

    // 5. Prey
    877269: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 90, visceralImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#064e3b", rating: 7.1, criticsScore: 94, audienceScore: 74, director: "Dan Trachtenberg", 
        cast: ["Amber Midthunder", "Dakota Beavers"], boxOffice: "Streaming", budget: "$65 million", 
        dna: { "Sci-Fi": 40, "Action": 40, "History": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "Lion Hunt", color: "#a16207" },
            { time: 35, intensity: 65, label: "The Bear Fight", color: "#78350f" },
            { time: 60, intensity: 85, label: "Trappers Massacre", color: "#ef4444" },
            { time: 75, intensity: 88, label: "Tree Escape", color: "#166534" },
            { time: 90, intensity: 96, label: "Mud & Tactics", color: "#064e3b" }
        ],
        synopsis: "The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru, a skilled warrior, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.",
        themes: ["Underdog", "Skill vs Tech", "Nature"]
    }),

    // 6. The Equalizer
    156022: createMovieData({ 
        psychologicalIntensity: 80, destructiveObsession: 85, visceralImpact: 88, complexityLevel: "MEDIUM", 
        dominantColor: "#171717", rating: 7.2, criticsScore: 60, audienceScore: 76, director: "Antoine Fuqua", 
        cast: ["Denzel Washington", "Marton Csokas"], boxOffice: "$192 million", budget: "$55 million", 
        dna: { "Action": 50, "Thriller": 30, "Crime": 20 },
        scenes: [
            { time: 20, intensity: 35, label: "Diner Scene", color: "#f59e0b" },
            { time: 28, intensity: 95, label: "19 Seconds", color: "#ef4444" },
            { time: 55, intensity: 70, label: "Dirty Cops", color: "#171717" },
            { time: 80, intensity: 85, label: "Money Train", color: "#0f172a" },
            { time: 110, intensity: 90, label: "Home Depot Trap", color: "#eab308" }
        ],
        synopsis: "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters. Denzel makes hardware stores terrifying.",
        themes: ["Justice", "Vigilantism", "Precision"]
    }),

    // 7. Ip Man
    14756: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 60, visceralImpact: 98, complexityLevel: "HIGH", 
        dominantColor: "#d4d4d8", rating: 8.0, criticsScore: 86, audienceScore: 93, director: "Wilson Yip", 
        cast: ["Donnie Yen", "Simon Yam"], boxOffice: "$21 million", budget: "$11 million", 
        dna: { "Martial Arts": 60, "History": 20, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 50, label: "Friendly Spar", color: "#d4d4d8" },
            { time: 40, intensity: 70, label: "Cotton Mill", color: "#52525b" },
            { time: 60, intensity: 100, label: "I Want 10!", color: "#18181b" },
            { time: 80, intensity: 75, label: "Training Montage", color: "#71717a" },
            { time: 95, intensity: 90, label: "General Miura", color: "#52525b" }
        ],
        synopsis: "During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of survival, Ip Man must use his Wing Chun skills to defend his people.",
        themes: ["Honor", "Nationalism", "Martial Arts"]
    }),

    // 8. Kingsman: The Secret Service
    207703: createMovieData({ 
        psychologicalIntensity: 95, destructiveObsession: 85, visceralImpact: 95, complexityLevel: "FUN", 
        dominantColor: "#ea580c", rating: 7.7, criticsScore: 75, audienceScore: 84, director: "Matthew Vaughn", 
        cast: ["Taron Egerton", "Colin Firth"], boxOffice: "$414 million", budget: "$81 million", 
        dna: { "Action": 40, "Comedy": 30, "Spy": 30 },
        scenes: [
            { time: 10, intensity: 60, label: "Manners Maketh Man", color: "#1e3a8a" },
            { time: 45, intensity: 70, label: "Skydiving Test", color: "#3b82f6" },
            { time: 80, intensity: 100, label: "Church Fight", color: "#ef4444" },
            { time: 95, intensity: 85, label: "Gazelle Fight", color: "#ea580c" },
            { time: 110, intensity: 92, label: "Exploding Heads", color: "#f97316" }
        ],
        synopsis: "A spy organization recruits a promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius. Featuring the most viral action scene of the decade.",
        themes: ["Class Warfare", "Spy Satire", "Gentleman Spy"]
    }),

    // 9. Bullet Train
    718930: createMovieData({ 
        psychologicalIntensity: 90, destructiveObsession: 70, visceralImpact: 92, complexityLevel: "KINETIC", 
        dominantColor: "#ec4899", rating: 7.3, criticsScore: 54, audienceScore: 76, director: "David Leitch", 
        cast: ["Brad Pitt", "Joey King"], boxOffice: "$239 million", budget: "$90 million", 
        dna: { "Action": 50, "Comedy": 40, "Mystery": 10 },
        scenes: [
            { time: 15, intensity: 50, label: "Quiet Car", color: "#3b82f6" },
            { time: 40, intensity: 65, label: "The Snake", color: "#22c55e" },
            { time: 55, intensity: 80, label: "Tangerine vs Lemon", color: "#f97316" },
            { time: 90, intensity: 85, label: "The Wolf", color: "#7f1d1d" },
            { time: 110, intensity: 95, label: "Train Crash", color: "#ec4899" }
        ],
        synopsis: "Five assassins aboard a fast-moving bullet train find out their missions have something in common. John Wick meets comedy on rails.",
        themes: ["Fate", "Luck", "Chaos"]
    }),

    // 10. Boss Level
    513310: createMovieData({ 
        psychologicalIntensity: 85, destructiveObsession: 85, visceralImpact: 90, complexityLevel: "LOOP", 
        dominantColor: "#3b82f6", rating: 6.8, criticsScore: 74, audienceScore: 76, director: "Joe Carnahan", 
        cast: ["Frank Grillo", "Mel Gibson"], boxOffice: "Streaming", budget: "$45 million", 
        dna: { "Sci-Fi": 40, "Action": 40, "Comedy": 20 },
        scenes: [
            { time: 5, intensity: 80, label: "Wake Up Dead", color: "#3b82f6" },
            { time: 25, intensity: 70, label: "Guan Yin Fight", color: "#ec4899" },
            { time: 45, intensity: 60, label: "Learning Curves", color: "#eab308" },
            { time: 70, intensity: 85, label: "The Arcade", color: "#8b5cf6" },
            { time: 90, intensity: 95, label: "Final Run", color: "#ef4444" }
        ],
        synopsis: "A retired special forces officer is trapped in a never-ending time loop on the day of his death. Groundhog Day with miniguns and swords.",
        themes: ["Time Loop", "Redemption", "Video Game Logic"]
    })
};

export const STRATEGIC_QUOTES = {
    106: "If it bleeds, we can kill it.",
    8681: "I will look for you, I will find you, and I will kill you.",
    999001: "Valhalla waits for no beast.",
    119450: "Apes together strong.",
    877269: "It thinks I am prey.",
    156022: "Progress, not perfection.",
    14756: "I want to fight ten people!",
    207703: "Manners maketh man.",
    718930: "I am not a closer. I am a snatcher.",
    513310: "I've done this a hundred times."
};

export const CINEMATIC_COLORS = {
    "Action": "#ef4444", "Sci-Fi": "#3b82f6", "Thriller": "#f59e0b", "Animation": "#ec4899", "War": "#57534e", "Martial Arts": "#d4d4d8", "Comedy": "#eab308"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Boring", color: "#dc2626", symbol: "💤", bgColor: "bg-red-900/30", description: "Put me to sleep" },
    { value: 2, label: "Generic", color: "#ea580c", symbol: "🤷", bgColor: "bg-orange-900/30", description: "Seen it before" },
    { value: 3, label: "Solid Action", color: "#16a34a", symbol: "👊", bgColor: "bg-green-900/30", description: 'Good fights, decent plot' },
    { value: 4, label: "God Tier", color: "#eab308", symbol: "🔥", bgColor: "bg-yellow-900/30", description: "Adrenaline Masterpiece" }
];

export const HULU_ACTION_MOVIE_FAQS = {
    'Predator': [
        { question: "Who designed the Predator creature?", answer: "The creature was designed by Stan Winston. James Cameron actually suggested the mandibles (mouth parts) during a flight conversation with Winston." },
        { question: "Why is the handshake meme so famous?", answer: "The 'Dillon! You son of a b*tch' handshake between Arnold and Carl Weathers is legendary for its pure display of 80s testosterone and bicep mass." },
        { question: "Was Jean-Claude Van Damme in this?", answer: "Originally, yes. He was cast as the Predator but quit/was fired because the original suit was terrible and he didn't want to be an invisible special effect." },
        { question: "What is 'Old Painless'?", answer: "It is the M134 Minigun used by Blain (Jesse Ventura). In real life, it requires an external power source and cannot be handheld, but the movie modified it to make it one of cinema's most iconic weapons." }
    ],
    'Taken': [
        { question: "Did Liam Neeson do his own stunts?", answer: "He performed many of his own fight scenes, but relied on a stunt double for the harder falls. He was 56 when he filmed it, reinventing himself as an action star." },
        { question: "Is the speech iconic?", answer: "Yes, the 'I have a particular set of skills' monologue is considered one of the most famous threats in movie history." },
        { question: "Why is the kidnapping scene so famous?", answer: "The tension of Bryan Mills listening to his daughter being taken in real-time while calmly giving her instructions created a unique, terrifying hook that sold the entire movie." },
        { question: "How many people does he kill?", answer: "Bryan Mills kills 35 people in the first movie to save his daughter. It is a one-man army rampage that revitalized the 'Dad Action' genre." }
    ],
    'Prey': [
        { question: "Is this connected to the original Predator?", answer: "Yes, it is a prequel set in 1719. The pistol Naru receives at the end is the same flintlock pistol given to Danny Glover's character in Predator 2 (1990)." },
        { question: "Did the dog survive?", answer: "Yes! Sarii the dog (played by a dog named Coco) survived the movie, much to the relief of the audience." },
        { question: "What language is available?", answer: "Prey was the first film to have a full Comanche language dub available at release, performed by the original cast for authenticity." },
        { question: "Why does the Predator look different?", answer: "Director Dan Trachtenberg wanted a 'feral' look. This Feral Predator is from a different hemisphere of the homeworld, lighter on armor and heavier on primitive bone-crunching brutality." }
    ],
    'Dawn of the Planet of the Apes': [
        { question: "Is this real CGI?", answer: "Yes, the motion capture technology by Weta Digital was groundbreaking, allowing Andy Serkis (Caesar) to act on location rather than just in a studio." },
        { question: "Why do the apes ride horses?", answer: "It symbolizes their rapid evolution and mastery of other species, mirroring human dominance. It also creates terrifying war imagery that audiences hadn't seen before." },
        { question: "Who is Koba?", answer: "Koba is the scarce-faced bonobo who serves as the antagonist. His hatred for humans comes from years of laboratory torture, making him a tragic but terrifying villain." },
        { question: "Does James Franco appear?", answer: "He makes a brief cameo in a video recording found by Caesar, providing an emotional bridge to the first film, Rise of the Planet of the Apes." }
    ],
    'The Equalizer': [
        { question: "Is this based on a show?", answer: "Yes, it is a reimagining of the 1980s TV series of the same name. Denzel Washington brought a darker, OCD-driven edge to the character." },
        { question: "How long is the final fight?", answer: "The final showdown in the hardware store is a masterclass in using environment as a weapon, emphasizing Robert McCall's resourcefulness." },
        { question: "Why does he time everything?", answer: "McCall has severe OCD. Timing his fights allows him to maintain control in chaos. The famous '19 seconds' scene shows his need for perfection even in violence." },
        { question: "What tools does he use?", answer: "He famously avoids guns when possible, using corkscrews, nail guns, and barbed wire. It highlights his past as highly trained intelligence operative who can weaponize anything." }
    ],
    'Kingsman: The Secret Service': [
        { question: "How was the Church Fight filmed?", answer: "It looks like one shot, but it is actually several takes stitched together seamlessly. It took weeks to choreograph and days to film." },
        { question: "Is it a parody of Bond?", answer: "Yes and no. It pays homage to classic spy films (gadgets, villains) but subverts the tropes with R-rated hyper-violence and class commentary." },
        { question: "Why did Colin Firth do an action movie?", answer: "Firth wanted to break his typecasting as a romantic lead. He trained for six months to perform 80% of his own stunts, shocking audiences with his lethality." },
        { question: "What is the 'Anal' joke controversy?", answer: "The final crude joke of the film was criticized by some for being sexist, but director Matthew Vaughn defended it as a subversion of the old Bond trope where the spy always 'gets the girl' at the end." }
    ],
    'Bullet Train': [
        { question: "Did Brad Pitt do his own stunts?", answer: "He did about 95% of his own physical stunts. Director David Leitch was actually Brad Pitt's stunt double in Fight Club, bringing their relationship full circle." },
        { question: "Who is the cameo at the end?", answer: "Ryan Reynolds makes a brief, uncredited cameo as the character 'Carver', the assassin who Ladybug (Brad Pitt) was filling in for." },
        { question: "Why 'Thomas the Tank Engine'?", answer: "The character Lemon uses the show to read people's personalities. It serves as a hilarious, recurring metaphor for moral alignment in a world of amoral killers." },
        { question: "Is the 'White Death' real?", answer: "The White Death (Michael Shannon) is a fictional Russian crime lord, but his backstory of taking over the Yakuza mirrors classic Western tropes of the 'outsider' villain." }
    ],
    'Ip Man': [
        { question: "Is Ip Man a real person?", answer: "Yes, Yip Man was a real grandmaster of Wing Chun and the teacher of Bruce Lee. The movie dramatizes his life significantly for action purposes." },
        { question: "Did Donnie Yen know Wing Chun?", answer: "He had to learn it specifically for the film. He trained for months to master the rapid-fire punching style known as 'chain punching'." },
        { question: "Is the '1 vs 10' fight realistic?", answer: "While exaggerated for cinema, it demonstrates the core philosophy of Wing Chun: overwhelming the opponent with speed and centerline strikes rather than brute force." },
        { question: "Did he fight a Japanese General?", answer: "There is no historical record of him fighting a General named Miura. This was added to heighten the dramatic tension and nationalist themes of the film." }
    ],
    'Boss Level': [
        { question: "How many times did he die?", answer: "In the film, it is implied Roy Pulver has died over 140 times before the movie even starts, allowing him to memorize every enemy movement." },
        { question: "Is it based on a game?", answer: "It is not based on a specific game, but it is a love letter to 'retro gaming' mechanics like extra lives, pattern recognition, and 'boss fights'." },
        { question: "Does he save his son?", answer: "The movie ends ambiguously with Roy entering the loop one last time, confident he can save everyone. It implies a happy ending earned through endless trial and error." },
        { question: "Why cast Mel Gibson?", answer: "Gibson plays the villain, Colonel Ventor. His casting adds meta-weight as an 'old school' action star facing off against the modern, video-game-style hero." }
    ],
    'Predator: Killer of Killers': [
        { question: "Is this canon?", answer: "As an anthology story, it explores 'what if' scenarios within the Predator universe, expanding the lore to different time periods." },
        { question: "Why Vikings?", answer: "Vikings are historically viewed as some of Earth's fiercest melee warriors, making them the perfect sport for a Yautja hunter who values honor in close combat." },
        { question: "Is this connected to Secret Level?", answer: "This entry is likely inspired by the 'Secret Level' anthology series or similar 'What If' animated projects that pit pop culture icons against each other." },
        { question: "Will there be more?", answer: "If successful, this format allows for endless Predator stories: Samurai, Knights, Pirates, or even futuristic soldiers, without the budget constraints of live action." }
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
        if (lowerType.includes('gore') || lowerType.includes('blood')) types.add('heavy gore');
        if (lowerType.includes('violence') || lowerType.includes('fight')) types.add('graphic violence');
        if (lowerType.includes('torture')) types.add('disturbing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_ACTION_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - High octane action movie on Hulu.`,
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