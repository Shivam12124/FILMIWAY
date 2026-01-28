// utils/hboMaxComedyMovieData.js - HBO MAX COMEDY COLLECTION DATA
// Ranked by Influence, Satire, and Cinematic Brilliance
// CALIBRATION: 0-20 (Setup) | 20-40 (Light) | 40-60 (Funny) | 60-75 (Chaos) | 75-85 (Satire) | 85-95 (Masterpiece) | 95-100 (Genre-Defining)

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 901, "imdbID": "tt0021749", "Title": "City Lights", "year": 1931, "genre": "Comedy", "runtime": 87, "rank": 1 },
    { "tmdbId": 914, "imdbID": "tt0032553", "Title": "The Great Dictator", "year": 1940, "genre": "Comedy", "runtime": 125, "rank": 2 },
    { "tmdbId": 872, "imdbID": "tt0045152", "Title": "Singin' in the Rain", "year": 1952, "genre": "Comedy", "runtime": 103, "rank": 3 },
    { "tmdbId": 11031, "imdbID": "tt0088258", "Title": "This Is Spinal Tap", "year": 1984, "genre": "Comedy", "runtime": 82, "rank": 4 },
    { "tmdbId": 639, "imdbID": "tt0098635", "Title": "When Harry Met Sally...", "year": 1989, "genre": "Romance", "runtime": 96, "rank": 5 },
    { "tmdbId": 275, "imdbID": "tt0116282", "Title": "Fargo", "year": 1996, "genre": "Crime", "runtime": 98, "rank": 6 },
    { "tmdbId": 11072, "imdbID": "tt0071230", "Title": "Blazing Saddles", "year": 1974, "genre": "Western", "runtime": 93, "rank": 7 },
    { "tmdbId": 702, "imdbID": "tt0058182", "Title": "A Hard Day's Night", "year": 1964, "genre": "Music", "runtime": 87, "rank": 8 },
    { "tmdbId": 346698, "imdbID": "tt1517268", "Title": "Barbie", "year": 2023, "genre": "Comedy", "runtime": 114, "rank": 9 },
    { "tmdbId": 324849, "imdbID": "tt4116284", "Title": "The LEGO Batman Movie", "year": 2017, "genre": "Animation", "runtime": 104, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Satire, Language, and Dark Humor)
export const SENSITIVE_TIMELINES = {
    // 1. City Lights
    901: { scenes: [] }, // Very clean, mild slapstick violence

    // 2. The Great Dictator
    914: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "War Violence (Comedic)", severity: "Low" },
            { start: "1:00:00", end: "1:05:00", type: "Depiction of Ghetto/Persecution", severity: "Moderate" }
        ] 
    },

    // 3. Singin' in the Rain
    872: { scenes: [] }, // Clean

    // 4. This Is Spinal Tap
    11031: { 
        scenes: [
            { start: "0:45:00", end: "0:48:00", type: "Sexual Innuendo (Armadillo)", severity: "Moderate" },
            { start: "1:10:00", end: "1:15:00", type: "Strong Language", severity: "Moderate" }
        ] 
    },

    // 5. When Harry Met Sally...
    639: { 
        scenes: [
            { start: "0:45:00", end: "0:48:00", type: "Fake Orgasm Scene", severity: "Moderate" },
            { start: "0:00:00", end: "1:36:00", type: "Frequent Sexual Dialogue", severity: "Moderate" }
        ] 
    },

    // 6. Fargo
    275: { 
        scenes: [
            { start: "0:25:00", end: "0:30:00", type: "Kidnapping Violence", severity: "High" },
            { start: "1:25:00", end: "1:30:00", type: "Graphic Violence (Woodchipper)", severity: "Extreme" },
            { start: "0:50:00", end: "0:55:00", type: "Sexual Content", severity: "High" }
        ] 
    },

    // 7. Blazing Saddles
    11072: { 
        scenes: [
            { start: "0:00:00", end: "1:33:00", type: "Frequent Racial Slurs (Satirical)", severity: "High" },
            { start: "0:25:00", end: "0:28:00", type: "Sexual Innuendo (Lili Von Shtupp)", severity: "Moderate" },
            { start: "0:15:00", end: "0:18:00", type: "Crude Humor (Beans Scene)", severity: "Moderate" }
        ] 
    },

    // 8. A Hard Day's Night
    702: { scenes: [] }, // Clean

    // 9. Barbie
    346698: { 
        scenes: [
            { start: "0:20:00", end: "0:25:00", type: "Sexual Innuendo (Beach Off)", severity: "Low" },
            { start: "0:45:00", end: "0:50:00", type: "Harassment Themes", severity: "Moderate" }
        ] 
    },

    // 10. The LEGO Batman Movie
    324849: { scenes: [] } // Clean
};

export const FALLBACK_POSTERS = {
    901: "https://image.tmdb.org/t/p/w500/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg",
    914: "https://image.tmdb.org/t/p/w500/1zH8l2c3065675576.jpg",
    872: "https://image.tmdb.org/t/p/w500/lz12753066.jpg",
    11031: "https://image.tmdb.org/t/p/w500/jx5p0aHlbPXqe3AH9G15NvmWaqQ.jpg",
    639: "https://image.tmdb.org/t/p/w500/7124885.jpg",
    275: "https://image.tmdb.org/t/p/w500/rt7aENu.jpg",
    11072: "https://image.tmdb.org/t/p/w500/f37288.jpg",
    702: "https://image.tmdb.org/t/p/w500/m222884.jpg",
    346698: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Db4hOKO25.jpg",
    324849: "https://image.tmdb.org/t/p/w500/snGwr2gag4FCGx27yHC31.jpg"
};





// ✅ HELPER: Single Metric "Laughter Index"
const createMovieData = (data) => ({
    laughterIndex: 85,          // Default
    dominantColor: "#FACC15",   // Comedy Yellow
    ...data,
});

export const COMPLETE_MOVIE_DATA = {

    // 1. City Lights (1931)
    // Curve: Poverty -> Hope -> Comedy -> Loss -> Transcendence.
    // Peak: 100 (The Final Smile - Emotional Perfection).
    901: createMovieData({ 
        laughterIndex: 85, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#52525b", rating: 8.5, criticsScore: 98, audienceScore: 96, director: "Charlie Chaplin", 
        cast: ["Charlie Chaplin", "Virginia Cherrill", "Florence Lee"], boxOffice: "$5 million", budget: "$1.5 million", 
        dna: { "Romance": 40, "Comedy": 35, "Drama": 25 },
        scenes: [
            { time: 10, intensity: 25, label: "Statue Reveal", color: "#a1a1aa" },
            { time: 40, intensity: 50, label: "The Millionaire", color: "#71717a" },
            { time: 65, intensity: 80, label: "Boxing Match", color: "#3f3f46" }, 
            { time: 80, intensity: 55, label: "Jail", color: "#27272a" },
            { time: 87, intensity: 100, label: "The Final Smile", color: "#e4e4e7" }
        ],
        synopsis: "A lovable tramp falls for a blind flower girl and, with the help of an erratic alcoholic millionaire, struggles to find the money to restore her sight. It is widely considered the greatest romantic comedy ever made, proving that humor serves humanity best when balanced with genuine tragedy.",
        themes: ["Class", "Blindness", "Sacrifice"]
    }),

    // 2. The Great Dictator (1940)
    // Curve: Satire -> Slapstick -> Oppression -> Resistance -> Speech.
    // Peak: 100 (The Final Speech - Political Power).
    914: createMovieData({ 
        laughterIndex: 88, 
        complexityLevel: "SATIRE", 
        dominantColor: "#b91c1c", rating: 8.4, criticsScore: 93, audienceScore: 95, director: "Charlie Chaplin", 
        cast: ["Charlie Chaplin", "Paulette Goddard"], boxOffice: "$5 million", budget: "$2 million", 
        dna: { "Comedy": 50, "Drama": 30, "War": 20 },
        scenes: [
            { time: 15, intensity: 40, label: "The Barbershop", color: "#fca5a5" },
            { time: 45, intensity: 85, label: "Globe Dance", color: "#ef4444" },
            { time: 70, intensity: 65, label: "Pudding Coin", color: "#b91c1c" },
            { time: 100, intensity: 60, label: "The Switch", color: "#7f1d1d" },
            { time: 120, intensity: 100, label: "The Speech", color: "#facc15" }
        ],
        synopsis: "Chaplin’s first talkie is a bold, biting satire where he plays both a ruthless fascist dictator (modeled on Hitler) and a persecuted Jewish barber. It weaponizes comedy against fascism, culminating in one of the most famous monologues in cinema history that pleads for humanity and reason.",
        themes: ["Fascism", "Humanity", "Power"]
    }),

    // 3. Singin' in the Rain (1952)
    // Curve: Stardom -> Crisis -> Inspiration -> Performance -> Success.
    // Peak: 95 (Make 'Em Laugh - Physical Comedy Gold).
    872: createMovieData({ 
        laughterIndex: 90, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#facc15", rating: 8.3, criticsScore: 100, audienceScore: 95, director: "Stanley Donen", 
        cast: ["Gene Kelly", "Donald O'Connor", "Debbie Reynolds"], boxOffice: "$7 million", budget: "$2.5 million", 
        dna: { "Comedy": 40, "Music": 35, "Romance": 25 },
        scenes: [
            { time: 15, intensity: 30, label: "Fit as a Fiddle", color: "#fde047" },
            { time: 40, intensity: 95, label: "Make 'Em Laugh", color: "#eab308" },
            { time: 65, intensity: 85, label: "Good Morning", color: "#ca8a04" },
            { time: 80, intensity: 90, label: "Title Number", color: "#3b82f6" }, 
            { time: 100, intensity: 70, label: "Broadway Melody", color: "#a16207" }
        ],
        synopsis: "A silent film star falls for a chorus girl just as Hollywood transitions from silent films to 'talkies.' It is the gold standard of classical Hollywood comedy, blending meta-satire of the film industry with unparalleled physical comedy and musical joy.",
        themes: ["Hollywood", "Transition", "Fame"]
    }),

    // 4. This Is Spinal Tap (1984)
    // Curve: Tour -> Decline -> Absurdity -> Breakup -> Reunion.
    // Peak: 92 (Stonehenge - Absurdist Peak).
    11031: createMovieData({ 
        laughterIndex: 93, 
        complexityLevel: "MOCKUMENTARY", 
        dominantColor: "#18181b", rating: 7.9, criticsScore: 95, audienceScore: 93, director: "Rob Reiner", 
        cast: ["Christopher Guest", "Michael McKean", "Harry Shearer"], boxOffice: "$4.7 million", budget: "$2 million", 
        dna: { "Comedy": 60, "Music": 40 },
        scenes: [
            { time: 20, intensity: 55, label: "Amp to 11", color: "#52525b" },
            { time: 45, intensity: 65, label: "Pod Failure", color: "#3f3f46" },
            { time: 70, intensity: 92, label: "Stonehenge", color: "#18181b" },
            { time: 80, intensity: 60, label: "Jazz Odyssey", color: "#27272a" },
            { time: 82, intensity: 85, label: "Puppet Show", color: "#000000" }
        ],
        synopsis: "The legendary mockumentary that chronicles the loud, oblivious, and slowly imploding tour of a British heavy metal band. With a brilliant improvisational structure, it revolutionized comedy by playing its subjects completely straight, creating the template for 'The Office' and modern cringe comedy.",
        themes: ["Ego", "Rock & Roll", "Failure"]
    }),

    // 5. When Harry Met Sally... (1989)
    // Curve: Meeting -> Friendship -> Tension -> Intimacy -> Declaration.
    // Peak: 88 (The Deli Scene - Comedic High).
    639: createMovieData({ 
        laughterIndex: 82, 
        complexityLevel: "SMART", 
        dominantColor: "#ea580c", rating: 7.7, criticsScore: 91, audienceScore: 89, director: "Rob Reiner", 
        cast: ["Billy Crystal", "Meg Ryan", "Carrie Fisher"], boxOffice: "$92 million", budget: "$16 million", 
        dna: { "Romance": 50, "Comedy": 30, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "The Drive", color: "#fdba74" },
            { time: 45, intensity: 85, label: "The Deli", color: "#ea580c" },
            { time: 65, intensity: 50, label: "Wagon Wheel", color: "#c2410c" },
            { time: 85, intensity: 70, label: "The Fight", color: "#7c2d12" },
            { time: 95, intensity: 90, label: "New Year's Eve", color: "#9a3412" }
        ],
        synopsis: "Harry and Sally meet when she gives him a ride to New York after they both graduate from the University of Chicago. The film jumps through their lives as they search for love, but fail, time and again. It is the definitive script on male-female friendship and the gold standard for dialogue-driven romantic comedy.",
        themes: ["Friendship", "Timing", "Love"]
    }),

    // 6. Fargo (1996)
    // Curve: Plan -> Murder -> Investigation -> Chaos -> Justice.
    // Peak: 88 (The Woodchipper - Dark Comedy Peak).
    275: createMovieData({ 
        laughterIndex: 70, 
        complexityLevel: "DARK COMEDY", 
        dominantColor: "#e4e4e7", rating: 8.1, criticsScore: 94, audienceScore: 93, director: "Joel Coen", 
        cast: ["Frances McDormand", "William H. Macy", "Steve Buscemi"], boxOffice: "$60 million", budget: "$7 million", 
        dna: { "Crime": 50, "Drama": 30, "Comedy": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "The Deal", color: "#d4d4d8" },
            { time: 35, intensity: 75, label: "The Kidnapping", color: "#a1a1aa" },
            { time: 60, intensity: 55, label: "Marge Investigates", color: "#71717a" },
            { time: 85, intensity: 80, label: "Parking Garage", color: "#b91c1c" },
            { time: 95, intensity: 88, label: "The Woodchipper", color: "#dc2626" }
        ],
        synopsis: "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the pregnant Marge Gunderson. It uses 'Minnesota Nice' politeness to contrast with horrific violence, creating a unique tone of ironic, moral comedy.",
        themes: ["Greed", "Incompetence", "Morality"]
    }),

    // 7. Blazing Saddles (1974)
    // Curve: Arrival -> Conflict -> Satire -> Chaos -> Meta-Explosion.
    // Peak: 95 (The Studio Fight - Breaking the 4th Wall).
    11072: createMovieData({ 
        laughterIndex: 97, 
        complexityLevel: "ANARCHIC", 
        dominantColor: "#b45309", rating: 7.7, criticsScore: 88, audienceScore: 91, director: "Mel Brooks", 
        cast: ["Cleavon Little", "Gene Wilder", "Slim Pickens"], boxOffice: "$119 million", budget: "$2.6 million", 
        dna: { "Comedy": 60, "Western": 40 },
        scenes: [
            { time: 15, intensity: 45, label: "The Sheriff", color: "#d97706" },
            { time: 40, intensity: 70, label: "Mongo", color: "#b45309" },
            { time: 55, intensity: 80, label: "Campfire Beans", color: "#92400e" }, 
            { time: 80, intensity: 88, label: "Fake Town", color: "#78350f" },
            { time: 90, intensity: 95, label: "Studio Brawl", color: "#f59e0b" }
        ],
        synopsis: "In this satirical take on Westerns, crafty railroad worker Bart becomes the first black sheriff of Rock Ridge, a frontier town about to be destroyed in order to make way for a new railroad. Mel Brooks' fearless comedy attacks racism and Hollywood tropes with a barrage of gags that culminates in the characters literally breaking out of the movie.",
        themes: ["Racism", "Hollywood", "Satire"]
    }),

    // 8. A Hard Day's Night (1964)
    // Curve: Running -> Press -> Rehearsal -> Escape -> Concert.
    // Peak: 85 (Can't Buy Me Love - Field Romp).
    702: createMovieData({ 
        laughterIndex: 75, 
        complexityLevel: "INNOVATIVE", 
        dominantColor: "#18181b", rating: 7.6, criticsScore: 98, audienceScore: 89, director: "Richard Lester", 
        cast: ["The Beatles"], boxOffice: "$11 million", budget: "$500,000", 
        dna: { "Music": 50, "Comedy": 50 },
        scenes: [
            { time: 5, intensity: 55, label: "Train Opening", color: "#27272a" },
            { time: 30, intensity: 50, label: "Press Conference", color: "#3f3f46" },
            { time: 50, intensity: 85, label: "Can't Buy Me Love", color: "#fafafa" }, 
            { time: 70, intensity: 45, label: "Ringo's Walk", color: "#52525b" },
            { time: 85, intensity: 80, label: "Final Concert", color: "#18181b" }
        ],
        synopsis: "A 'typical' day in the life of The Beatles, featuring the group's famous dry wit and a killer soundtrack. It invented the language of the modern music video and captured the anarchic joy of Beatlemania with a fresh, documentary-style energy.",
        themes: ["Fame", "Youth", "Rebellion"]
    }),

    // 9. Barbie (2023)
    // Curve: Perfection -> Malfunction -> Real World -> Patriarchy -> Humanity.
    // Peak: 90 (I'm Just Ken - Musical Number).
    346698: createMovieData({ 
        laughterIndex: 85, 
        complexityLevel: "MODERN SATIRE", 
        dominantColor: "#ec4899", rating: 6.8, criticsScore: 88, audienceScore: 83, director: "Greta Gerwig", 
        cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"], boxOffice: "$1.4 billion", budget: "$145 million", 
        dna: { "Comedy": 45, "Fantasy": 30, "Adventure": 25 },
        scenes: [
            { time: 10, intensity: 30, label: "Barbie Land", color: "#f9a8d4" },
            { time: 40, intensity: 60, label: "Real World", color: "#f472b6" },
            { time: 75, intensity: 80, label: "Mojo Dojo Casa House", color: "#db2777" },
            { time: 95, intensity: 90, label: "I'm Just Ken", color: "#be123c" }, 
            { time: 110, intensity: 85, label: "Human Choice", color: "#ec4899" }
        ],
        synopsis: "Barbie suffers a crisis that leads her to question her world and her existence. She travels to the real world to find the truth, only to discover that the real world (and Ken's interpretation of it) is far more complicated than she imagined. A candy-colored existential crisis that doubles as a sharp satire on gender roles.",
        themes: ["Feminism", "Existentialism", "Identity"]
    }),

    // 10. The LEGO Batman Movie (2017)
    // Curve: Heroism -> Loneliness -> Family -> Chaos -> Acceptance.
    // Peak: 92 (The Phantom Zone - Villain Overload).
    324849: createMovieData({ 
        laughterIndex: 95, 
        complexityLevel: "PARODY", 
        dominantColor: "#fbbf24", rating: 7.3, criticsScore: 90, audienceScore: 80, director: "Chris McKay", 
        cast: ["Will Arnett", "Michael Cera", "Zach Galifianakis"], boxOffice: "$312 million", budget: "$80 million", 
        // CORRECTED: Replaced 'Animation' with 'Adventure' to fit content genre standards.
        dna: { "Action": 40, "Comedy": 35, "Adventure": 25 }, 
        scenes: [
            { time: 5, intensity: 75, label: "Opening Song", color: "#000000" },
            { time: 30, intensity: 55, label: "Adopting Robin", color: "#ef4444" },
            { time: 60, intensity: 65, label: "Scuttler Chase", color: "#3b82f6" },
            { time: 85, intensity: 92, label: "Phantom Zone Escape", color: "#facc15" }, 
            { time: 100, intensity: 80, label: "Family Hug", color: "#10b981" }
        ],
        synopsis: "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick. A loving deconstruction of the Batman mythos that is packed with jokes for fans of every era.",
        themes: ["Family", "Ego", "Teamwork"]
    })
};
export const STRATEGIC_QUOTES = {
    901: "You can see now?",
    914: "Machine men with machine minds and machine hearts!",
    872: "Dignity. Always dignity.",
    11031: "These go to eleven.",
    639: "I'll have what she's having.",
    275: "I'm not sure I agree with you a hundred percent on your police work, there, Lou.",
    11072: "Excuse me while I whip this out.",
    702: "I'm a mocker.",
    346698: "I am Kenough.",
    324849: "Batman doesn't do 'ships."
};

export const HBO_MAX_COMEDY_MOVIE_FAQS = {
    'City Lights': [
        { question: "Is City Lights a silent film?", answer: "Technically yes, but it was released in 1931, well after 'talkies' had become the norm. Chaplin refused to use dialogue because he believed the Tramp's universal appeal would be lost if he spoke. It uses sound effects and music (composed by Chaplin) but no spoken dialogue." },
        { question: "Why is the ending so famous?", answer: "The final scene is often cited as the greatest piece of acting in cinema history. Chaplin's face conveys hope, fear, shame, and love all at once as the flower girl recognizes him not as a millionaire, but as a tramp. It is the ultimate example of 'laughter through tears.'" },
        { question: "Did Chaplin really box?", answer: "The boxing match scene is meticulously choreographed funny business. Chaplin rehearsed it for days. He treats the boxing ring like a dance floor, using the referee as a human shield in a brilliant display of physical comedy." },
        { question: "Who is the flower girl?", answer: "Virginia Cherrill played the blind flower girl. She was not a professional actress when Chaplin discovered her at a boxing match. Their relationship on set was notoriously difficult, and Chaplin even fired her briefly before rehiring her because reshooting would be too expensive." }
    ],
    'The Great Dictator': [
        { question: "Did Chaplin speak in this movie?", answer: "Yes, this was Chaplin's first full 'talkie.' He used the opportunity to deliver a powerful message. The final 5-minute speech is a complete break from character where Chaplin speaks directly to the audience about humanity, democracy, and peace." },
        { question: "Was Hitler offended?", answer: "Hitler banned the film in Germany and occupied countries. However, reports suggest he did screen it privately twice. Chaplin famously said, 'I'd give anything to know what he thought of it.' The two men were born four days apart and had identical mustaches." },
        { question: "What is the globe scene?", answer: "The scene where Hynkel (the dictator) dances with a balloon globe is cinema's most poetic depiction of megalomania. It shows his desire to possess the world, ending perfectly when the fragile balloon bursts in his face." },
        { question: "Is it funny or serious?", answer: "It is both. It uses slapstick comedy to ridicule the absurdity of fascism (like the height of the barber's chair or the size of a pen), but the underlying themes of persecution and war are treated with profound seriousness." }
    ],
    'Singin\' in the Rain': [
        { question: "Did Gene Kelly have a fever?", answer: "Yes. During the filming of the iconic title number 'Singin' in the Rain,' Gene Kelly was running a fever of 103°F (39°C). He refused to stop production and performed the intricate tap routine in the fake rain while sick." },
        { question: "Is it a true story?", answer: "While the plot is fictional, the setting is historically accurate. The transition from silent films to talkies in the late 1920s really did destroy many careers (like the character Lina Lamont) due to actors having poor speaking voices or accents." },
        { question: "Who sang for Debbie Reynolds?", answer: "Ironically, in a movie about dubbing voices, Debbie Reynolds was dubbed in some scenes. For the song 'Would You,' her voice was dubbed by Betty Noyes. Reynolds was only 19 and had no dance experience prior to the film." },
        { question: "What is the 'Make 'Em Laugh' scene?", answer: "Donald O'Connor's solo number is a tour-de-force of physical comedy. He ran up walls and performed backflips until he was physically exhausted. He famously had to be hospitalized for exhaustion after filming it, then had to do it all again because the camera aperture was wrong." }
    ],
    'This Is Spinal Tap': [
        { question: "Is Spinal Tap a real band?", answer: "They started as a fictional band for the movie, but the actors (Christopher Guest, Michael McKean, Harry Shearer) are all talented musicians who played their own instruments. They became a semi-real touring band after the film's success." },
        { question: "Was there a script?", answer: "No. There was a 4-page outline of scenes, but almost all the dialogue was improvised by the actors. This technique gave the film its naturalistic, awkward 'documentary' feel that revolutionized comedy." },
        { question: "What does 'Turn it up to 11' mean?", answer: "It refers to the scene where guitarist Nigel Tufnel shows off his custom amps that have volume knobs going to 11 instead of 10. It has entered the English dictionary as an idiom for taking something to the extreme limit." },
        { question: "Why do the drummers keep dying?", answer: "It is a running gag that Spinal Tap can't keep a drummer. They die in bizarre gardening accidents, choke on vomit (someone else's), or spontaneously combust on stage. It mocks the high turnover rate in real rock bands." }
    ],
    'When Harry Met Sally...': [
        { question: "Can men and women be friends?", answer: "This is the central question of the movie. Harry argues 'no' because 'the sex part always gets in the way.' The film explores this over 12 years, ultimately suggesting that friendship is the best foundation for romance." },
        { question: "Is the orgasm scene real?", answer: "It is a fake orgasm performed by Meg Ryan in Katz's Delicatessen to prove a point to Harry. The line 'I'll have what she's having,' delivered by the older woman at the next table, was spoken by director Rob Reiner's mother." },
        { question: "Are the interview segments real?", answer: "The documentary-style interviews with older couples telling the stories of how they met were based on real stories collected by director Rob Reiner, though they were re-enacted by actors for the film." },
        { question: "Why is it set in New York?", answer: "New York City is essentially a third character in the film. The autumn leaves in Central Park, the Metropolitan Museum, and the brownstones create a romantic, idealized backdrop that defined the 'Woody Allen-esque' aesthetic of 90s rom-coms." }
    ],
    'Fargo': [
        { question: "Is it based on a true story?", answer: "The opening text claims it is a true story from 1987, but this is a lie. The Coen Brothers made it up. They added the disclaimer to persuade the audience to accept the movie's darker, stranger twists as 'reality.'" },
        { question: "Why do they talk like that?", answer: "The characters speak with a distinct 'Minnesota Nice' accent (yah, you betcha). The Coen Brothers, who grew up in the area, exaggerated the dialect to create a unique comedic rhythm that contrasts sharply with the grisly violence." },
        { question: "Is it a comedy or a thriller?", answer: "It is a black comedy. The humor comes from the absurdity of the criminals' incompetence and the polite, mundane way the characters react to horrific events. It creates a tone of 'funny dread.'" },
        { question: "Who is Marge Gunderson?", answer: "Marge (Frances McDormand) is the hero: a pregnant, polite, and incredibly competent police chief. She subverts every cop movie trope—she doesn't have a dark past or a drinking problem; she's just a decent person doing her job well." }
    ],
    'Blazing Saddles': [
        { question: "Could this movie be made today?", answer: "This is a common debate. While the racial slurs would be controversial, the film's target is actually racism itself. It mocks the ignorance of the white townsfolk and makes the black Sheriff Bart the smartest, coolest person in the room." },
        { question: "What is the campfire scene?", answer: "It is the first major motion picture to feature audible farting. Mel Brooks included the scene of cowboys eating beans and passing gas to break the myth of the 'dignified' Western and add gritty (and smelly) realism." },
        { question: "Why does the ending break the fourth wall?", answer: "The fight spills out of the movie set and into the studio cafeteria, revealing the cameras and lights. It emphasizes that the entire Western genre is a construct, allowing Brooks to satirize Hollywood production as well as cowboy myths." },
        { question: "Did Gene Wilder write it?", answer: "No, but Richard Pryor was one of the writers. Pryor was originally supposed to play the Sheriff, but the studio wouldn't insure him due to his drug use. Cleavon Little was cast instead, and Wilder played the Waco Kid." }
    ],
    'A Hard Day\'s Night': [
        { question: "Is it a documentary?", answer: "No, it is a scripted musical comedy, but it is filmed in a 'cinéma vérité' documentary style. It captures the frantic energy of Beatlemania and portrays a fictionalized 'day in the life' of the band trying to get to a TV appearance." },
        { question: "Are The Beatles acting?", answer: "Yes, they play exaggerated versions of themselves. John is the witty cynic, Paul is the charming diplomat, George is the quiet observer, and Ringo is the sad loner. It codified their public personas for decades." },
        { question: "What is the 'Clean Old Man'?", answer: "Wilfrid Brambell plays Paul's fictional grandfather, a trouble-making 'clean old man.' It's a running gag that contrasts the rebellious youth of the band with the mischievous, grumpy older generation." },
        { question: "Did it change music videos?", answer: "Yes. The 'Can't Buy Me Love' sequence, featuring the band running around a field in jump cuts set to music, is widely considered the blueprint for the modern music video." }
    ],
    'Barbie': [
        { question: "Is it a kids' movie?", answer: "It is rated PG-13 and deals with complex themes like existentialism, patriarchy, and death. While colorful and funny, it is designed more as a satire for adults who grew up with Barbie than a simple toy commercial for children." },
        { question: "What is 'Mojo Dojo Casa House'?", answer: "It is the name Ken gives to the Barbie Dreamhouse after he discovers patriarchy and turns it into a bachelor pad filled with horses and mini-fridges. It satirizes toxic masculinity and male fragility." },
        { question: "Why does Barbie cry?", answer: "When Barbie enters the real world, she experiences human emotion for the first time. The scene on the bench with the old woman is pivotal—Barbie realizes that aging and imperfection are beautiful, marking the start of her transition to humanity." },
        { question: "What is the final line?", answer: "'I'm here to see my gynecologist.' It is a brilliant final joke confirming Barbie is now fully human (with reproductive organs), subverting the expectation of a romantic ending or a return to plastic perfection." }
    ],
    'The LEGO Batman Movie': [
        { question: "Is it a parody?", answer: "Yes, it is a loving deconstruction of the Batman mythos. It mocks his brooding nature, his refusal to be happy, and his relationship with the Joker (portrayed as a codependent romance). It references every era of Batman, from the 60s TV show to Nolan." },
        { question: "Who voices Batman?", answer: "Will Arnett voices Batman with a gravelly, over-confident arrogance. His comedic timing turns Batman's usually cool 'darkness' into a hilarious character flaw of emotional immaturity." },
        { question: "Why are there villains from other movies?", answer: "The Joker releases villains from the 'Phantom Zone,' allowing characters like Voldemort, Sauron, King Kong, and Daleks to attack Gotham. It plays with the logic of a child mixing different LEGO sets together." },
        { question: "Is Robin in it?", answer: "Yes, Michael Cera voices Robin as an overly optimistic orphan who accidentally gets adopted by Bruce Wayne. The contrast between Robin's cheerfulness and Batman's grumpiness drives the film's emotional arc about family." }
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
    return HBO_MAX_COMEDY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A hilarious comedy movie on HBO Max.`,
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