// utils/huluComedyMovieData.js - HULU COMEDY COLLECTION DATA
// Ranked by Laughter, Quotability, and Chaos
// CALIBRATION: 0-20 (Setup) | 20-40 (Light) | 40-60 (Funny) | 60-75 (Chaos) | 75-85 (Implosion) | 85-95 (Extreme) | 95-100 (Genre-Defining)

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 8363, "imdbID": "tt0829482", "Title": "Superbad", "year": 2007, "genre": "Comedy", "runtime": 113, "rank": 1 },
    { "tmdbId": 134, "imdbID": "tt0190590", "Title": "O Brother, Where Art Thou?", "year": 2000, "genre": "Comedy", "runtime": 107, "rank": 2 },
    { "tmdbId": 3779, "imdbID": "tt0443453", "Title": "Borat", "year": 2006, "genre": "Comedy", "runtime": 84, "rank": 3 },
    { "tmdbId": 718930, "imdbID": "tt12593682", "Title": "Bullet Train", "year": 2022, "genre": "Action", "runtime": 127, "rank": 4 },
    { "tmdbId": 587792, "imdbID": "tt8385738", "Title": "Palm Springs", "year": 2020, "genre": "Comedy", "runtime": 90, "rank": 5 },
    { "tmdbId": 39939, "imdbID": "tt0247745", "Title": "Super Troopers", "year": 2001, "genre": "Comedy", "runtime": 100, "rank": 6 },
    { "tmdbId": 1245347, "imdbID": "tt27995662", "Title": "Twinless", "year": 2025, "genre": "Comedy", "runtime": 98, "rank": 7 },
    { "tmdbId": 2280, "imdbID": "tt0094737", "Title": "Big", "year": 1988, "genre": "Comedy", "runtime": 104, "rank": 8 },
    { "tmdbId": 986054, "imdbID": "tt21376880", "Title": "Theater Camp", "year": 2023, "genre": "Comedy", "runtime": 93, "rank": 9 },
    { "tmdbId": 7512, "imdbID": "tt0387808", "Title": "Idiocracy", "year": 2006, "genre": "Comedy", "runtime": 84, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Comedy Edition)
export const SENSITIVE_TIMELINES = {
    // 1. Superbad
    8363: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Crude Drawings", severity: "Moderate" },
            { start: "1:20:00", end: "1:25:00", type: "Period Blood Scene", severity: "High" }
        ] 
    },
    // 2. O Brother, Where Art Thou?
    13389: { scenes: [] }, 
    // 3. Borat
    3779: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Full Frontal Nudity", severity: "Extreme" }
        ] 
    },
    // 4. Bullet Train
    718930: { 
        scenes: [
            { start: "0:55:00", end: "1:00:00", type: "Bloody Violence", severity: "High" }
        ] 
    },
    // 5. Palm Springs
    587792: { scenes: [] },
    // 6. Super Troopers
    39939: { 
        scenes: [
            { start: "0:01:00", end: "0:05:00", type: "Drug Humor", severity: "Moderate" }
        ] 
    },
    // 7. Twinless
    1105822: { scenes: [] },
    // 8. Big
    2280: { scenes: [] },
    // 9. Theater Camp
    1002315: { scenes: [] },
    // 10. Idiocracy
    2045: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Crude Language", severity: "Mild" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    8363: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJnhq.jpg",
    13389: "https://image.tmdb.org/t/p/w500/min5Q6Xo3Xj8B86629K9qfD0Q5.jpg",
    3779: "https://image.tmdb.org/t/p/w500/y1Z77dY1jYdc2Jg6Y3B6S77Z.jpg",
    718930: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaPETYiXe2FOUVy.jpg",
    587792: "https://image.tmdb.org/t/p/w500/1SBNmo4JG2ziZFnXA23jJ2Sbd.jpg",
    39939: "https://image.tmdb.org/t/p/w500/3s9Y5w27dGHX03aA7Y5W6v.jpg",
    1105822: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    2280: "https://image.tmdb.org/t/p/w500/ur1593c.jpg",
    1002315: "https://image.tmdb.org/t/p/w500/3X.jpg",
    2045: "https://image.tmdb.org/t/p/w500/gZ.jpg"
};

// ✅ HELPER: Single Metric "Laughter Index"
const createMovieData = (data) => ({
    laughterIndex: 85,          // Default
    complexityLevel: "HIGH",
    dominantColor: "#FACC15",   // Comedy Yellow
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Superbad (TEEN CHAOS PEAK)
    // Peak: 88 (Social pressure/Humiliation). Starts low.
    8363: createMovieData({ 
        laughterIndex: 90, 
        complexityLevel: "LEGENDARY", 
        dominantColor: "#ef4444", rating: 7.6, criticsScore: 88, audienceScore: 87, director: "Greg Mottola", 
        cast: ["Jonah Hill", "Michael Cera"], boxOffice: "$170 million", budget: "$20 million", 
        dna: { "Comedy": 70, "Coming of Age": 30 },
        scenes: [
            { time: 10, intensity: 20, label: "The Plan", color: "#facc15" },
            { time: 40, intensity: 55, label: "McLovin ID", color: "#ef4444" },
            { time: 70, intensity: 65, label: "The Party", color: "#f97316" },
            { time: 90, intensity: 88, label: "The Fight", color: "#dc2626" }, // Chaos Peak
            { time: 110, intensity: 50, label: "Escalator", color: "#eab308" }
        ],
        synopsis: "The definitive teen comedy of the 2000s. Two co-dependent high school seniors are forced to deal with separation anxiety as their quest to get alcohol for a party goes hilariously wrong.",
        themes: ["Friendship", "Growing Up", "Partying"]
    }),

    // 2. O Brother, Where Art Thou? (ADVENTURE PEAK)
    // Peak: 85 (Musical triumph). Gentle waves.
    13389: createMovieData({ 
        laughterIndex: 88, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#ca8a04", rating: 7.7, criticsScore: 79, audienceScore: 89, director: "Joel Coen", 
        cast: ["George Clooney", "John Turturro"], boxOffice: "$71 million", budget: "$26 million", 
        dna: { "Comedy": 50, "Adventure": 30, "Music": 20 },
        scenes: [
            { time: 15, intensity: 25, label: "Chain Gang Escape", color: "#a16207" },
            { time: 45, intensity: 55, label: "We Thought You Was A Toad", color: "#ca8a04" },
            { time: 70, intensity: 40, label: "The Sirens", color: "#d97706" }, // Lull
            { time: 90, intensity: 85, label: "Man of Constant Sorrow", color: "#b45309" }, // Triumphant Peak
            { time: 100, intensity: 60, label: "The Flood", color: "#854d0e" }
        ],
        synopsis: "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. A visually stunning, hilariously quoted adaptation of The Odyssey.",
        themes: ["Redemption", "Folk Music", "Americana"]
    }),

    // 3. Borat (GENRE-DEFINING CHAOS)
    // The ONLY film allowed to touch 96. Extreme discomfort.
    3779: createMovieData({ 
        laughterIndex: 98, 
        complexityLevel: "CHAOTIC", 
        dominantColor: "#fcd34d", rating: 7.4, criticsScore: 91, audienceScore: 79, director: "Larry Charles", 
        cast: ["Sacha Baron Cohen"], boxOffice: "$262 million", budget: "$18 million", 
        dna: { "Satire": 60, "Mockumentary": 40 },
        scenes: [
            { time: 10, intensity: 30, label: "New York", color: "#facc15" },
            { time: 40, intensity: 96, label: "The Hotel Fight", color: "#ef4444" }, // EXTREME PEAK
            { time: 60, intensity: 75, label: "The Rodeo", color: "#f97316" },
            { time: 75, intensity: 88, label: "Pamela", color: "#dc2626" }, // Crisis
            { time: 80, intensity: 40, label: "Homecoming", color: "#fbbf24" }
        ],
        synopsis: "Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. Unscripted chaos that exposed the prejudices and absurdities of modern America.",
        themes: ["Culture Clash", "Satire", "Prejudice"]
    }),

    // 4. Bullet Train (ACTION COMEDY)
    // Peak: 85 (Spectacle). High baseline tension.
    718930: createMovieData({ 
        laughterIndex: 85, 
        complexityLevel: "ACTION-PACKED", 
        dominantColor: "#ec4899", rating: 7.3, criticsScore: 54, audienceScore: 76, director: "David Leitch", 
        cast: ["Brad Pitt", "Joey King"], boxOffice: "$239 million", budget: "$90 million", 
        dna: { "Action": 50, "Comedy": 50 },
        scenes: [
            { time: 20, intensity: 35, label: "The Briefcase", color: "#db2777" },
            { time: 50, intensity: 65, label: "Quiet Car Fight", color: "#be123c" },
            { time: 80, intensity: 55, label: "Snake on a Train", color: "#9d174d" },
            { time: 110, intensity: 85, label: "The Crash", color: "#831843" }, // Spectacle Peak
            { time: 120, intensity: 50, label: "Lemon", color: "#f472b6" }
        ],
        synopsis: "Five assassins aboard a fast moving bullet train find out their missions have something in common. Stylish, fast-paced, and hilarious violence from the director of Deadpool 2.",
        themes: ["Fate", "Luck", "Assassins"]
    }),

    // 5. Palm Springs (SCI-FI ROM-COM)
    // Peak: 82 (High stakes escape). Smart, structured curve.
    587792: createMovieData({ 
        laughterIndex: 88, 
        complexityLevel: "SMART", 
        dominantColor: "#34d399", rating: 7.4, criticsScore: 94, audienceScore: 88, director: "Max Barbakow", 
        cast: ["Andy Samberg", "Cristin Milioti"], boxOffice: "Streaming", budget: "$5 million", 
        dna: { "Sci-Fi": 40, "Romance": 30, "Comedy": 30 },
        scenes: [
            { time: 15, intensity: 20, label: "The Cave", color: "#10b981" },
            { time: 40, intensity: 45, label: "Waking Up", color: "#059669" },
            { time: 60, intensity: 65, label: "Montage", color: "#047857" }, // Fun Peak
            { time: 80, intensity: 75, label: "The Realization", color: "#065f46" },
            { time: 85, intensity: 82, label: "The Escape", color: "#34d399" } // Stakes Peak
        ],
        synopsis: "When Nyles and Sarah get stuck in a time loop at a Palm Springs wedding, they must live the same day over and over again. A fresh, existential take on the Groundhog Day formula.",
        themes: ["Existentialism", "Love", "Time Loops"]
    }),

    // 6. Super Troopers (STONER / LOW STAKES)
    // Peak: 68. Just funny, not intense.
    39939: createMovieData({ 
        laughterIndex: 75, 
        complexityLevel: "CULT CLASSIC", 
        dominantColor: "#1d4ed8", rating: 7.0, criticsScore: 36, audienceScore: 90, director: "Jay Chandrasekhar", 
        cast: ["Broken Lizard"], boxOffice: "$23 million", budget: "$1.2 million", 
        dna: { "Comedy": 80, "Crime": 20 },
        scenes: [
            { time: 5, intensity: 40, label: "The Opening Stop", color: "#2563eb" },
            { time: 30, intensity: 55, label: "Meow Game", color: "#1d4ed8" },
            { time: 50, intensity: 50, label: "Syrup Chug", color: "#1e40af" },
            { time: 80, intensity: 65, label: "Farva's Shenanigans", color: "#1e3a8a" },
            { time: 95, intensity: 68, label: "The Bust", color: "#3b82f6" } // Narrativ Peak
        ],
        synopsis: "Five Vermont state troopers, avid pranksters with a knack for screwing up, try to save their jobs and outdo the local police department by solving a crime. Highly quotable stoner comedy.",
        themes: ["Pranks", "Police", "Rivalry"]
    }),

    // 7. Twinless (DARK BUDDY COMEDY)
    // Peak: 75 (Narrative Twist).
    1105822: createMovieData({ 
        laughterIndex: 80, 
        complexityLevel: "FRESH", 
        dominantColor: "#8b5cf6", rating: 7.0, criticsScore: 85, audienceScore: 80, director: "James Griffiths", 
        cast: ["Dylan O'Brien", "James Sweeney"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Comedy": 60, "Drama": 40 },
        scenes: [
            { time: 10, intensity: 15, label: "The Loss", color: "#a78bfa" },
            { time: 40, intensity: 35, label: "Support Group", color: "#8b5cf6" },
            { time: 60, intensity: 50, label: "Bonding", color: "#7c3aed" },
            { time: 80, intensity: 75, label: "The Twist", color: "#6d28d9" }, // Story Peak
            { time: 90, intensity: 60, label: "Acceptance", color: "#5b21b6" }
        ],
        synopsis: "Two young men form an unlikely bromance after meeting in a support group for twinless twins. A dark, funny, and surprisingly sweet exploration of grief and identity.",
        themes: ["Grief", "Bromance", "Identity"]
    }),

    // 8. Big (NOSTALGIC / WARM)
    // Peak: 65. Comfort movie curve.
    2280: createMovieData({ 
        laughterIndex: 75, 
        complexityLevel: "NOSTALGIC", 
        dominantColor: "#3b82f6", rating: 7.3, criticsScore: 98, audienceScore: 89, director: "Penny Marshall", 
        cast: ["Tom Hanks", "Elizabeth Perkins"], boxOffice: "$151 million", budget: "$18 million", 
        dna: { "Comedy": 50, "Fantasy": 30, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 25, label: "Zoltar", color: "#60a5fa" },
            { time: 40, intensity: 60, label: "Giant Piano", color: "#3b82f6" }, // Joy Peak
            { time: 60, intensity: 45, label: "The Loft", color: "#2563eb" },
            { time: 85, intensity: 55, label: "Business Pitch", color: "#1d4ed8" },
            { time: 100, intensity: 65, label: "Going Home", color: "#1e40af" } // Emotional Peak
        ],
        synopsis: "After wishing to be made big, a teenage boy wakes up the next morning to find himself mysteriously in the body of an adult. A heartwarming classic that features Tom Hanks at his most charming.",
        themes: ["Childhood", "Innocence", "Corporate Life"]
    }),

    // 9. Theater Camp (MOCKUMENTARY / CRINGE)
    // Peak: 78 (Chaos/The Show).
    1002315: createMovieData({ 
        laughterIndex: 82, 
        complexityLevel: "MOCKUMENTARY", 
        dominantColor: "#f43f5e", rating: 7.0, criticsScore: 86, audienceScore: 80, director: "Molly Gordon", 
        cast: ["Ben Platt", "Molly Gordon"], boxOffice: "$4 million", budget: "N/A", 
        dna: { "Comedy": 80, "Musical": 20 },
        scenes: [
            { time: 10, intensity: 30, label: "Auditions", color: "#fb7185" },
            { time: 40, intensity: 50, label: "Rehearsal Chaos", color: "#f43f5e" },
            { time: 70, intensity: 45, label: "Crypto Bro", color: "#e11d48" },
            { time: 85, intensity: 70, label: "Opening Night", color: "#be123c" },
            { time: 90, intensity: 78, label: "The Show", color: "#9f1239" } // Performance Peak
        ],
        synopsis: "The eccentric staff of a rundown theater camp in upstate New York must band together with the beloved founder's crypto-bro son to keep the camp afloat. A hilarious mockumentary for theater kids everywhere.",
        themes: ["Theater", "Passion", "Saving the Arts"]
    }),

    // 10. Idiocracy (SATIRE / FRUSTRATION)
    // Peak: 65. Satirical consistency.
    2045: createMovieData({ 
        laughterIndex: 80, 
        complexityLevel: "SATIRE", 
        dominantColor: "#eab308", rating: 6.5, criticsScore: 71, audienceScore: 60, director: "Mike Judge", 
        cast: ["Luke Wilson", "Maya Rudolph"], boxOffice: "$0.5 million", budget: "$2 million", 
        dna: { "Sci-Fi": 40, "Comedy": 60 },
        scenes: [
            { time: 10, intensity: 15, label: "Hibernation", color: "#facc15" },
            { time: 30, intensity: 40, label: "Welcome to Costco", color: "#eab308" },
            { time: 50, intensity: 65, label: "It Has Electrolytes", color: "#ca8a04" }, // Satire Peak
            { time: 75, intensity: 60, label: "The Trial", color: "#a16207" },
            { time: 80, intensity: 55, label: "President Camacho", color: "#854d0e" }
        ],
        synopsis: "Private Joe Bauers is selected for a hibernation experiment but wakes up 500 years in the future to find he is the smartest man alive in a society that has dumbed down significantly. A cult classic satire that feels more like a documentary every year.",
        themes: ["Dystopia", "Commercialism", "Intelligence"]
    })
};
export const STRATEGIC_QUOTES = {
    8363: "I am McLovin.",
    13389: "We thought you was a toad!",
    3779: "Very nice!",
    718930: "Diesel is a diesel.",
    587792: "Today, tomorrow, it's all the same.",
    39939: "The snozberries taste like snozberries.",
    1105822: "We are the twinless.",
    2280: "I wish I were big.",
    1002315: "Joan, still.",
    2045: "It's got electrolytes."
};

export const CINEMATIC_COLORS = {
    "Comedy": "#facc15", "Action": "#ef4444", "Sci-Fi": "#3b82f6", "Mockumentary": "#f43f5e"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Weak", color: "#fca5a5", symbol: "🥱", bgColor: "bg-red-200/30", description: "Not funny" },
    { value: 2, label: "Amusing", color: "#fcd34d", symbol: "🙂", bgColor: "bg-yellow-500/30", description: "Some laughs" },
    { value: 3, label: "Hilarious", color: "#16a34a", symbol: "😂", bgColor: "bg-green-600/30", description: 'Laugh out loud' },
    { value: 4, label: "Legendary", color: "#ca8a04", symbol: "🤣", bgColor: "bg-yellow-700/30", description: "Comedy gold" }
];

export const HULU_COMEDY_MOVIE_FAQS = {
    'Superbad': [
        { 
            question: "Is McLovin a real name?", 
            answer: "No, it was a fake name on the Hawaiian ID that the character Fogell used. The absurdity of choosing a single moniker like 'Seal' or 'Madonna'—rather than a standard first and last name—is the core of the joke. Originally, the character debated using the name 'Muhammed,' but settled on McLovin because it sounded like a 'sexy Irish R&B singer.'" 
        },
        { 
            question: "Who wrote Superbad?", 
            answer: "Seth Rogen and Evan Goldberg started writing the script when they were just 13 years old, essentially trying to write a movie about their own lives to see if they could get into parties. This is why the dialogue feels so authentically awkward and why the main characters are literally named Seth and Evan." 
        },
        { 
            question: "Is it improvised?", 
            answer: "A significant portion of the film is improvised. Jonah Hill and Michael Cera had incredible natural chemistry and often deviated from the script to trade insults and awkward banter. The 'dick drawing' confession scene, however, was based on real drawings Seth Rogen made as a teenager." 
        },
        { 
            question: "Who played the cops?", 
            answer: "Seth Rogen and Bill Hader played Officers Michaels and Slater. They created one of the funniest subplots in movie history by subverting the 'scary cop' trope, portraying them instead as irresponsible, lonely man-children who just want to be cool and hang out with the high schooler McLovin." 
        }
    ],
    'O Brother, Where Art Thou?': [
        { 
            question: "Is it really based on The Odyssey?", 
            answer: "Yes, it is a loose, Depression-era adaptation of Homer's epic poem 'The Odyssey.' Ulysses Everett McGill corresponds to Odysseus trying to get home to his wife, Penny (Penelope). The film features direct parallels like the Cyclops (John Goodman's one-eyed Bible salesman) and the Sirens (the women washing clothes in the river)." 
        },
        { 
            question: "Did the actors really sing?", 
            answer: "Most of the singing was dubbed by professional bluegrass musicians. For example, George Clooney practiced for weeks but was ultimately dubbed by Dan Tyminski of Alison Krauss and Union Station. However, Tim Blake Nelson (Delmar) did perform his own vocals for 'In the Jailhouse Now.'" 
        },
        { 
            question: "Why is the color so unique?", 
            answer: "It was the first feature film in history to be entirely color-corrected digitally. The Coen Brothers wanted a dry, dust-bowl aesthetic that resembled old hand-tinted postcards. Since the actual Mississippi locations were lush and green, they used digital grading to turn the green leaves into a sepia-toned autumn gold." 
        },
        { 
            question: "What is the Soggy Bottom Boys?", 
            answer: "It is the fictional band formed by the main characters to make a quick buck. Their hit song, 'Man of Constant Sorrow,' became a massive real-world phenomenon, winning the Grammy Award for Album of the Year and sparking a nationwide revival of folk and bluegrass music." 
        }
    ],
    'Borat': [
        { 
            question: "Was it scripted?", 
            answer: "The vast majority of the interactions with the public were completely unscripted. Sacha Baron Cohen stayed in character as Borat 24/7 during production to provoke genuine, unfiltered reactions from real people, often exposing deep-seated prejudices or confusing polite society with his outrageous behavior." 
        },
        { 
            question: "Did he really get arrested?", 
            answer: "Yes, the production was incredibly chaotic. The police were called on the film crew over 90 times during filming. Sacha Baron Cohen often had to flee scenes immediately after cutting to avoid being arrested or attacked by angry subjects who realized they had been duped." 
        },
        { 
            question: "Is Kazakhstan really like that?", 
            answer: "No, absolutely not. The 'Kazakhstan' scenes were actually filmed in a poor village in Romania called Glod, and the language Borat speaks is largely Hebrew mixed with gibberish. The real Kazakhstan government initially banned the film but later embraced the catchphrase 'Very Nice!' for a tourism campaign." 
        },
        { 
            question: "Why did he wear the green mankini?", 
            answer: "The neon green mankini was designed specifically to be the most unflattering piece of swimwear imaginable. The goal was to maximize the discomfort of the conservative hotel guests and beachgoers he interacted with, creating immediate visual comedy through sheer awkwardness." 
        }
    ],
    'Bullet Train': [
        { 
            question: "Is it based on a book?", 
            answer: "Yes, the film is an adaptation of the 2010 novel 'Maria Beetle' (published as 'Bullet Train' in English) by Japanese author Kōtarō Isaka. While the book is a darker thriller, the movie adaptation leaned heavily into the action-comedy genre, adding a layer of Jackie Chan-inspired slapstick." 
        },
        { 
            question: "Who is the cameo at the end?", 
            answer: "Ryan Reynolds makes a surprise, uncredited cameo as the assassin 'Carver'—the man Brad Pitt's character was filling in for. This was reportedly a favor to repay Brad Pitt for his blink-and-you-miss-it cameo as The Vanisher in Reynolds' movie 'Deadpool 2'." 
        },
        { 
            question: "Did Brad Pitt do his own stunts?", 
            answer: "According to the film's stunt coordinator, Brad Pitt performed approximately 95% of his own physical stunts. At 58 years old, he leaned into the 'Jackie Chan style' of fighting, which prioritizes humor, defensive improvisation, and using props over brute force." 
        },
        { 
            question: "Why is it so funny?", 
            answer: "The humor comes from the contrast between the high-stakes violence and the petty, mundane bickering of the assassins. Characters like Lemon and Tangerine discuss 'Thomas the Tank Engine' with the same seriousness as they discuss murder, creating a unique tone of nihilistic fun." 
        }
    ],
    'Palm Springs': [
        { 
            question: "How long was Nyles stuck?", 
            answer: "While the movie never gives an explicit number, writer Andy Siara has stated that Nyles was stuck for over 40 years, while fan calculations based on his knowledge of quantum physics and choreography suggest it could be thousands of years. He has been there long enough to forget his life before the loop." 
        },
        { 
            question: "What is the science behind it?", 
            answer: "The film deliberately avoids over-explaining the science, using a mysterious glowing cave as a plot device. The focus is not on the 'how' but on the existential crisis of being trapped. However, the solution involving quantum physics and blowing themselves up implies a sophisticated sci-fi logic under the hood." 
        },
        { 
            question: "Is it a rom-com?", 
            answer: "Yes, but it brilliantly subverts the genre. Instead of the traditional 'meet-cute' and courtship, the time loop forces the couple to skip straight to the messy, domestic reality of being stuck together forever. It explores whether love can survive without the promise of a 'tomorrow'." 
        },
        { 
            question: "Who is Roy?", 
            answer: "J.K. Simmons plays Roy, a family man who Nyles accidentally dragged into the loop years prior. Roy serves as a dark mirror to Nyles, initially hunting him for sport out of vengeance before finding a sense of peace and acceptance within the infinite day." 
        }
    ],
    'Super Troopers': [
        { 
            question: "Is there a sequel?", 
            answer: "Yes, due to the massive cult following of the original, 'Super Troopers 2' was released in 2018. It was funded by a massive Indiegogo crowdfunding campaign that raised over $4.4 million, proving how beloved the original film had become over the years." 
        },
        { 
            question: "Who are Broken Lizard?", 
            answer: "Broken Lizard is the five-man comedy troupe that wrote, starred in, and directed the film. They formed at Colgate University and are known for their collaborative, hangout-style comedy. They went on to make other cult hits like 'Club Dread' and 'Beerfest'." 
        },
        { 
            question: "Is the syrup scene real?", 
            answer: "The actors really did chug the liquid, but it wasn't actual maple syrup, which would have made them violently ill. It was iced tea thickened with sugar and gum to look like syrup. Despite the swap, drinking that volume of sugar was still physically difficult for the cast." 
        },
        { 
            question: "What is the 'Meow' game?", 
            answer: "The 'Meow Game' is the film's most iconic prank, where a trooper tries to replace the word 'now' with 'meow' ten times during a traffic stop without the driver noticing. It became a viral phenomenon and is frequently quoted or imitated by fans (and occasionally real police officers)." 
        }
    ],
    'Twinless': [
        { 
            question: "Is this a real movie?", 
            answer: "Yes, 'Twinless' is a 2025 release starring Dylan O'Brien and James Sweeney. It fits into the modern wave of 'traumedies' (trauma comedies) that explore serious subjects like grief and loss through a lens of dark, offbeat humor." 
        },
        { 
            question: "Is it sad?", 
            answer: "While the premise deals with the heavy topic of losing a twin sibling, the tone is primarily a buddy comedy. It balances the emotional weight of grief with absurd situations and the awkward process of finding a new 'other half' in a support group." 
        },
        { 
            question: "Who directed it?", 
            answer: "The film is directed by James Griffiths, a veteran of British comedy who is known for balancing heart and humor. His direction ensures the film remains respectful of the subject matter while still delivering consistent laughs." 
        },
        { 
            question: "Is it streaming only?", 
            answer: "As a Hulu Original film, it bypassed a wide theatrical release to debut directly on the platform, part of Hulu's strategy to bolster its exclusive comedy library with star-driven vehicles." 
        }
    ],
    'Big': [
        { 
            question: "How did they do the piano scene?", 
            answer: "The iconic 'Heart and Soul' duet on the giant floor piano was performed practically by Tom Hanks and Robert Loggia. There was no CGI trickery; the actors spent hours practicing the choreography to ensure they hit the right keys with their feet in real-time." 
        },
        { 
            question: "Was there an alternate ending?", 
            answer: "Yes, early drafts of the script considered having the love interest, Susan, step into the Zoltar machine to become a child so she could stay with Josh. The studio ultimately rejected this as being too 'creepy' and complex, opting for the bittersweet goodbye instead." 
        },
        { 
            question: "How old is Josh meant to be?", 
            answer: "The character Josh Baskin is a 12-year-old boy trapped inside a 30-year-old man's body. Tom Hanks' performance is widely praised because he didn't play a 'dumb adult,' but rather genuinely captured the posture, energy, and innocence of a pre-teen." 
        },
        { 
            question: "Did Tom Hanks improvise?", 
            answer: "Tom Hanks improvised many of the film's funniest physical moments to sell the 'kid in an adult body' concept. The famous scene where he eats a baby corn like it's a corn on the cob was an unscripted choice that made it into the final cut." 
        }
    ],
    'Theater Camp': [
        { 
            question: "Is it unscripted?", 
            answer: "Much of the film is improvised. Following in the footsteps of Christopher Guest movies like 'Waiting for Guffman,' the actors worked from a script outline but improvised their dialogue to create a natural, chaotic, and authentic mockumentary feel." 
        },
        { 
            question: "Are the kids real actors?", 
            answer: "Yes, the children in the film are actual theater kids, not just props. They are incredibly talented performers who sang live on set, adding a layer of genuine impressiveness to the comedy of the camp setting." 
        },
        { 
            question: "Who is Joan?", 
            answer: "Joan is the beloved founder of the camp whose sudden coma sets the plot in motion. She is played by comedic legend Amy Sedaris, whose brief but manic energy establishes the high stakes for the eccentric counselors trying to save her legacy." 
        },
        { 
            question: "Is the play at the end real?", 
            answer: "The musical performed in the finale, 'Joan, Still,' was written specifically for the movie by the cast and crew. It serves as a perfect parody of self-serious theater while also delivering a genuinely touching emotional climax." 
        }
    ],
    'Idiocracy': [
        { 
            question: "Why does everyone wear Crocs?", 
            answer: "The costume designer, Deborah Everton, needed a futuristic shoe that looked cheap and stupid. She found a startup making rubber clogs called Crocs and used them, reasoning that 'no one would ever actually wear these in the future.' The irony became legendary when Crocs became a global fashion staple." 
        },
        { 
            question: "Is it a documentary?", 
            answer: "While intended as a broad satire, fans and critics frequently joke that it has become a documentary. Many of its absurd predictions—like the corporate takeover of politics, the anti-intellectualism of media, and the 'screens everywhere' culture—feel eerily accurate today." 
        },
        { 
            question: "Why was it buried?", 
            answer: "20th Century Fox released the film in a tiny number of theaters with zero marketing. It is widely believed they were afraid of offending the real-life advertisers featured in the film (like Carl's Jr., Starbucks, and Costco), whom the movie portrays as dystopian corporate overlords." 
        },
        { 
            question: "What are electrolytes?", 
            answer: "In the movie, the sports drink 'Brawndo' contains electrolytes, which the characters insist are 'what plants crave.' It is a biting satire on how consumers blindly repeat marketing buzzwords without understanding what they actually mean." 
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
        if (lowerType.includes('nudity') || lowerType.includes('sex')) types.add('crude content');
        if (lowerType.includes('drug') || lowerType.includes('alcohol')) types.add('substance use');
        if (lowerType.includes('violence') || lowerType.includes('blood')) types.add('comic violence');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_COMEDY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A hilarious comedy movie on Hulu.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.0, 
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