// utils/enemiesToLoversMovieData.js - ENEMIES TO LOVERS COLLECTION DATA ✅
// 100% SEO SAFE: Framed via Character Dynamics, Romantic Chemistry, and Psychological Tropes.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 4348, "imdbID": "tt0414387", "Title": "Pride & Prejudice", "year": 2005, "genre": "Romance", "runtime": 129, "rank": 1 },
    { "tmdbId": 639, "imdbID": "tt0098635", "Title": "When Harry Met Sally...", "year": 1989, "genre": "Romance", "runtime": 96, "rank": 2 },
    { "tmdbId": 4951, "imdbID": "tt0147746", "Title": "10 Things I Hate About You", "year": 1999, "genre": "Comedy", "runtime": 97, "rank": 3 },
    { "tmdbId": 82693, "imdbID": "tt1045658", "Title": "Silver Linings Playbook", "year": 2012, "genre": "Drama", "runtime": 122, "rank": 4 },
    { "tmdbId": 9489, "imdbID": "tt0128853", "Title": "You've Got Mail", "year": 1998, "genre": "Romance", "runtime": 119, "rank": 5 },
    { "tmdbId": 88, "imdbID": "tt0092890", "Title": "Dirty Dancing", "year": 1987, "genre": "Romance", "runtime": 100, "rank": 6 },
    { "tmdbId": 296096, "imdbID": "tt2674426", "Title": "Me Before You", "year": 2016, "genre": "Romance", "runtime": 110, "rank": 7 },
    { "tmdbId": 18240, "imdbID": "tt1041829", "Title": "The Proposal", "year": 2009, "genre": "Comedy", "runtime": 108, "rank": 8 },
    { "tmdbId": 9919, "imdbID": "tt0251127", "Title": "How to Lose a Guy in 10 Days", "year": 2003, "genre": "Comedy", "runtime": 116, "rank": 9 },
    { "tmdbId": 1072790, "imdbID": "tt26047818", "Title": "Anyone But You", "year": 2023, "genre": "Comedy", "runtime": 103, "rank": 10 }
];

// ✅ STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    4348: "You have bewitched me, body and soul.", 
    639: "I came here tonight because when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.", 
    4951: "But mostly I hate the way I don't hate you. Not even close, not even a little bit, not even at all.", 
    82693: "The only way you can beat my crazy was by doing something crazy yourself.", 
    9489: "I wanted it to be you. I wanted it to be you so badly.", 
    88: "Nobody puts Baby in a corner.", 
    296096: "You are pretty much the only thing that makes me want to get up in the morning.", 
    18240: "Why are you panting? Because I've been running! From who? A bear?", 
    9919: "You can't lose something you never had!", 
    1072790: "There's no way we can convince anyone we actually like each other." 
};

// ✅ SENSITIVE TIMELINES (Clinical, factual timestamps for the Parents Guide tool)
export const SENSITIVE_TIMELINES = {
    // 1. Pride & Prejudice
    4348: { scenes: [] },

    // 2. When Harry Met Sally...
    639: { scenes: [] },

    // 3. 10 Things I Hate About You
    4951: { scenes: [] },

    // 4. Silver Linings Playbook
    82693: { 
        scenes: [
            { start: "0:31:01", end: "0:33:15", type: "Nudity (Woman)", severity: "High" }
        ]
    },

    // 5. You've Got Mail
    9489: { scenes: [] },

    // 6. Dirty Dancing
    88: { scenes: [] },

    // 7. Me Before You
    296096: { scenes: [] },

    // 8. The Proposal
    18240: { 
        scenes: [
            { start: "0:54:18", end: "0:55:50", type: "Partial Nudity (Man & Woman)", severity: "Moderate" }
        ]
    },

    // 9. How to Lose a Guy in 10 Days
    9919: { scenes: [] },

    // 10. Anyone But You
    1072790: { 
        scenes: [
            { start: "0:21:00", end: "0:21:05", type: "Nudity (Woman)", severity: "High" },
            { start: "0:49:20", end: "0:50:05", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "1:10:53", end: "1:11:32", type: "Sex & Nudity", severity: "High" }
        ]
    }
};

// ✅ Custom metrics for this collection: 'romanticChemistry' and 'enemiesTension'
const createRomanceData = (data) => ({
    romanticChemistry: 85, 
    enemiesTension: 80,
    complexityLevel: "MEDIUM",
    dominantColor: "#be123c", // Rose/Pink palette representing romance
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    4348: createRomanceData({ // Pride & Prejudice
        romanticChemistry: 100, enemiesTension: 95, complexityLevel: "HIGH", 
        dominantColor: "#022c22", rating: 4.1, criticsScore: 87, audienceScore: 89, director: "Joe Wright", 
        cast: ["Keira Knightley", "Matthew Macfadyen", "Rosamund Pike"], boxOffice: "$121.6 million", budget: "$28 million", 
        dna: { "Romance": 60, "Drama": 30, "History": 10 },
        scenes: [
            { time: 15, intensity: 70, label: "The Assembly Ball" }, 
            { time: 55, intensity: 95, label: "The Rain Proposal" }, 
            { time: 90, intensity: 85, label: "Pemberley Encounter" }, 
            { time: 115, intensity: 90, label: "Lady Catherine's Visit" }, 
            { time: 125, intensity: 100, label: "Your Hands Are Cold" } 
        ],
        synopsis: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
        themes: ["Class Divide", "Pride", "Misjudgment"]
    }),
    639: createRomanceData({ // When Harry Met Sally
        romanticChemistry: 95, enemiesTension: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#b45309", rating: 4.1, criticsScore: 91, audienceScore: 89, director: "Rob Reiner", 
        cast: ["Billy Crystal", "Meg Ryan", "Carrie Fisher"], boxOffice: "$92.8 million", budget: "$16 million", 
        dna: { "Comedy": 50, "Romance": 40, "Drama": 10 },
        scenes: [
            { time: 5, intensity: 75, label: "The Drive to NY" }, 
            { time: 45, intensity: 85, label: "The Museum Walk" }, 
            { time: 61, intensity: 90, label: "The Diner Scene" }, 
            { time: 80, intensity: 95, label: "The Argument" }, 
            { time: 92, intensity: 100, label: "New Year's Eve Confession" } 
        ],
        synopsis: "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
        themes: ["Platonic Friendship", "Time", "Vulnerability"]
    }),
    4951: createRomanceData({ // 10 Things I Hate About You
        romanticChemistry: 90, enemiesTension: 90, complexityLevel: "LOW", 
        dominantColor: "#831843", rating: 4.0, criticsScore: 71, audienceScore: 78, director: "Gil Junger", 
        cast: ["Heath Ledger", "Julia Stiles", "Joseph Gordon-Levitt"], boxOffice: "$53.5 million", budget: "$16 million", 
        dna: { "Comedy": 45, "Romance": 40, "Teen": 15 },
        scenes: [
            { time: 20, intensity: 70, label: "The Deal is Struck" }, 
            { time: 55, intensity: 85, label: "Can't Take My Eyes Off You" }, 
            { time: 70, intensity: 80, label: "The Paintball Date" }, 
            { time: 85, intensity: 95, label: "The Prom Reveal" }, 
            { time: 92, intensity: 100, label: "The Poem" } 
        ],
        synopsis: "A pretty, popular teenager can't go out on a date until her ill-tempered older sister does, leading to a plot to pay a high school rebel to date her.",
        themes: ["Teen Rebellion", "Deception", "Sisterhood"]
    }),
    82693: createRomanceData({ // Silver Linings Playbook
        romanticChemistry: 92, enemiesTension: 88, complexityLevel: "HIGH", 
        dominantColor: "#3f3f46", rating: 3.7, criticsScore: 92, audienceScore: 86, director: "David O. Russell", 
        cast: ["Bradley Cooper", "Jennifer Lawrence", "Robert De Niro"], boxOffice: "$236.4 million", budget: "$21 million", 
        dna: { "Drama": 45, "Romance": 35, "Comedy": 20 },
        scenes: [
            { time: 25, intensity: 80, label: "The Diner Date" }, 
            { time: 50, intensity: 85, label: "Halloween Outside" }, 
            { time: 75, intensity: 90, label: "The Dance Rehearsal" }, 
            { time: 105, intensity: 95, label: "The Dance Competition" }, 
            { time: 115, intensity: 100, label: "The Letter" } 
        ],
        synopsis: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife, but things change when he meets Tiffany, a mysterious girl with problems of her own.",
        themes: ["Mental Health", "Grief", "Unconventional Healing"]
    }),
    9489: createRomanceData({ // You've Got Mail
        romanticChemistry: 88, enemiesTension: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#b45309", rating: 3.6, criticsScore: 70, audienceScore: 73, director: "Nora Ephron", 
        cast: ["Tom Hanks", "Meg Ryan", "Parker Posey"], boxOffice: "$250.8 million", budget: "$65 million", 
        dna: { "Romance": 50, "Comedy": 40, "Drama": 10 },
        scenes: [
            { time: 15, intensity: 70, label: "Fox Books Opens" }, 
            { time: 55, intensity: 90, label: "The Cafe Stand-up" }, 
            { time: 75, intensity: 85, label: "The Sick Day Visit" }, 
            { time: 95, intensity: 88, label: "Discovering the Truth" }, 
            { time: 115, intensity: 100, label: "Riverside Park Finale" } 
        ],
        synopsis: "Two business rivals despise each other in real life but unwittingly fall in love over the internet.",
        themes: ["Corporate Takeover", "Anonymity", "Nostalgia"]
    }),
    88: createRomanceData({ // Dirty Dancing
        romanticChemistry: 95, enemiesTension: 75, complexityLevel: "LOW", 
        dominantColor: "#4c1d95", rating: 3.5, criticsScore: 71, audienceScore: 77, director: "Emile Ardolino", 
        cast: ["Patrick Swayze", "Jennifer Grey", "Jerry Orbach"], boxOffice: "$214.6 million", budget: "$6 million", 
        dna: { "Romance": 45, "Music": 35, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 75, label: "Carrying the Watermelon" }, 
            { time: 45, intensity: 85, label: "The Log Practice" }, 
            { time: 75, intensity: 95, label: "The Sheldrake Performance" }, 
            { time: 85, intensity: 90, label: "Johnny is Fired" }, 
            { time: 95, intensity: 100, label: "Time of My Life Lift" } 
        ],
        synopsis: "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle.",
        themes: ["Coming of Age", "Class Differences", "Rebellion"]
    }),
    296096: createRomanceData({ // Me Before You
        romanticChemistry: 88, enemiesTension: 80, complexityLevel: "MEDIUM", 
        dominantColor: "#0369a1", rating: 3.4, criticsScore: 54, audienceScore: 73, director: "Thea Sharrock", 
        cast: ["Emilia Clarke", "Sam Claflin", "Janet McTeer"], boxOffice: "$208.3 million", budget: "$20 million", 
        dna: { "Romance": 60, "Drama": 40 },
        scenes: [
            { time: 15, intensity: 70, label: "The Initial Frost" }, 
            { time: 45, intensity: 85, label: "The Shaving Scene" }, 
            { time: 70, intensity: 90, label: "The Concert Date" }, 
            { time: 90, intensity: 95, label: "The Beach Confession" }, 
            { time: 105, intensity: 100, label: "The Final Letter" } 
        ],
        synopsis: "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
        themes: ["Disability", "Autonomy", "Self-Discovery"]
    }),
    18240: createRomanceData({ // The Proposal
        romanticChemistry: 85, enemiesTension: 92, complexityLevel: "LOW", 
        dominantColor: "#1d4ed8", rating: 3.3, criticsScore: 45, audienceScore: 67, director: "Anne Fletcher", 
        cast: ["Sandra Bullock", "Ryan Reynolds", "Betty White"], boxOffice: "$317.4 million", budget: "$40 million", 
        dna: { "Comedy": 60, "Romance": 40 },
        scenes: [
            { time: 10, intensity: 75, label: "The Blackmail Proposal" }, 
            { time: 45, intensity: 90, label: "The Naked Crash" }, 
            { time: 65, intensity: 85, label: "The Eagle Dance" }, 
            { time: 85, intensity: 95, label: "The Altar Confession" }, 
            { time: 100, intensity: 100, label: "The Office Proposal" } 
        ],
        synopsis: "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.",
        themes: ["Power Dynamics", "Family Over Work", "Fake Relationship"]
    }),
    9919: createRomanceData({ // How to Lose a Guy in 10 Days
        romanticChemistry: 86, enemiesTension: 88, complexityLevel: "LOW", 
        dominantColor: "#b91c1c", rating: 3.3, criticsScore: 42, audienceScore: 77, director: "Donald Petrie", 
        cast: ["Kate Hudson", "Matthew McConaughey", "Kathryn Hahn"], boxOffice: "$177.4 million", budget: "$50 million", 
        dna: { "Comedy": 50, "Romance": 50 },
        scenes: [
            { time: 20, intensity: 75, label: "The Knicks Game" }, 
            { time: 45, intensity: 85, label: "The Love Fern" }, 
            { time: 65, intensity: 90, label: "Meeting the Family" }, 
            { time: 90, intensity: 95, label: "The Diamond Gala Blowup" }, 
            { time: 110, intensity: 100, label: "The Bridge Chase" } 
        ],
        synopsis: "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days. Andie Anderson covers the 'How To' beat for Composure magazine and is assigned to write an article on how to lose a guy in 10 days.",
        themes: ["Mutual Deception", "Career vs Love", "Ego"]
    }),
    1072790: createRomanceData({ // Anyone But You
        romanticChemistry: 89, enemiesTension: 85, complexityLevel: "LOW", 
        dominantColor: "#eab308", rating: 3.2, criticsScore: 54, audienceScore: 87, director: "Will Gluck", 
        cast: ["Sydney Sweeney", "Glen Powell", "Alexandra Shipp"], boxOffice: "$219 million", budget: "$25 million", 
        dna: { "Comedy": 50, "Romance": 50 },
        scenes: [
            { time: 10, intensity: 75, label: "The Morning After Misunderstanding" }, 
            { time: 35, intensity: 85, label: "The Fake Dating Agreement" }, 
            { time: 60, intensity: 95, label: "The Spider in the Pants" }, 
            { time: 80, intensity: 90, label: "The Helicopter Rescue" }, 
            { time: 95, intensity: 100, label: "Unwritten (Opera House)" } 
        ],
        synopsis: "After an amazing first date, Bea and Ben's fiery attraction turns ice cold - until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        themes: ["Miscommunication", "Fake Dating", "Wedding Antics"]
    })
};

// 🎬 MOVIE FAQS - (100% SEO SAFE, CRITICAL ANALYSIS ONLY)
export const ENEMIES_TO_LOVERS_MOVIE_FAQS = {
    "Pride & Prejudice": [
        { question: "Why is the 2005 version of Pride & Prejudice so highly regarded?", answer: "Joe Wright's 2005 adaptation is praised for its muddy, lived-in realism, stunning cinematography, and the kinetic chemistry between Keira Knightley and Matthew Macfadyen, bringing a modern urgency to the classic text without losing its historical soul." },
        { question: "What is the significance of the hand flex scene?", answer: "The infamous 'hand flex' occurs after Mr. Darcy helps Elizabeth into the carriage. It is a brilliant moment of non-verbal storytelling, illustrating his intense, repressed physical reaction to her touch, bridging the gap between his stoic exterior and his internal passion." },
        { question: "How does the rain proposal subvert typical romance tropes?", answer: "Usually, a proposal in the rain is the climax of mutual love. Here, it is the peak of their 'enemies' phase. The chaotic weather mirrors their volatile argument, exposing their deepest prejudices and making their eventual reconciliation earned." }
    ],
    "When Harry Met Sally...": [
        { question: "Did When Harry Met Sally invent the 'enemies to lovers' trope?", answer: "While it didn't invent it (Shakespeare's 'Much Ado About Nothing' is an early example), it absolutely defined the modern cinematic structure of the trope. It popularized the idea of platonic friction slowly melting into deep romantic reliance over years of banter." },
        { question: "What makes the script so legendary?", answer: "Nora Ephron's screenplay is considered a masterclass in dialogue. It avoids contrived plot devices, relying entirely on the evolving philosophical arguments between the two leads regarding sex, friendship, and vulnerability to drive the narrative forward." },
        { question: "Are the documentary interludes real?", answer: "The older couples telling their love stories on the couch are actors, but their dialogue is lifted verbatim from real-life interviews director Rob Reiner conducted with real couples, grounding the film's romance in genuine human experience." }
    ],
    "10 Things I Hate About You": [
        { question: "What Shakespeare play is 10 Things I Hate About You based on?", answer: "The film is a direct, modernized adaptation of William Shakespeare's 'The Taming of the Shrew', transplanting the gender politics of the 16th century into the social hierarchy of a 1990s American high school." },
        { question: "Why does the poem scene resonate so deeply?", answer: "Kat's reading of the titular poem is the emotional climax because it drops the film's comedic tone for raw vulnerability. Julia Stiles' genuine tears convey the painful contradiction of teenage heartbreak—hating someone for how much you still love them." },
        { question: "How did the film impact Heath Ledger's career?", answer: "His role as Patrick Verona catapulted Heath Ledger to international stardom. His rugged charm, combined with the iconic 'Can't Take My Eyes Off You' bleacher performance, solidified him as a premier leading man of his generation." }
    ],
    "Silver Linings Playbook": [
        { question: "How does Silver Linings Playbook handle mental health?", answer: "Unlike traditional rom-coms, the film anchors its romance in the messy, chaotic realities of bipolar disorder and depression. Pat and Tiffany don't 'cure' each other; rather, they find a shared frequency where their respective eccentricities are understood rather than judged." },
        { question: "Why is the dance competition the climax instead of a kiss?", answer: "The dance competition acts as a physical manifestation of their emotional progress. Scoring a '5' is mathematically average, but for Pat and Tiffany, it represents a monumental victory of discipline, partnership, and moving past their former traumas." },
        { question: "What is the meaning of the film's title?", answer: "A 'silver lining' refers to finding hope in a bleak situation. Pat's 'playbook' is his obsessive strategy to win his wife back by finding these silver linings, but the film ultimately teaches him that true hope often looks entirely different than the plan." }
    ],
    "You've Got Mail": [
        { question: "How does You've Got Mail reflect 1990s internet culture?", answer: "The film captures the early, idealized era of the internet (specifically AOL). The dial-up tones and anonymous chatrooms represent a time when cyberspace was viewed as a safe, intimate haven for emotional connection, distinct from the harsh realities of the physical world." },
        { question: "Is the film a remake?", answer: "Yes, it is a remake of the 1940 film 'The Shop Around the Corner' (which was also remade as the musical 'In the Good Old Summertime'). Nora Ephron brilliantly updated the 'pen pals who hate each other in real life' concept for the digital age." },
        { question: "Why does Kathleen forgive Joe so quickly at the end?", answer: "While it seems sudden, Kathleen had already fallen in love with the 'NY152' persona. By the time Joe reveals himself, he had spent weeks proving he could be the supportive, thoughtful man she knew online, bridging the gap between his ruthless corporate exterior and his true self." }
    ],
    "Dirty Dancing": [
        { question: "Is Dirty Dancing a classic enemies to lovers story?", answer: "It falls under a variation of the trope: 'class-divided friction'. Baby and Johnny initially clash deeply due to their differing socioeconomic backgrounds and preconceived judgments before dance forces them into physical and emotional alignment." },
        { question: "What does the watermelon scene represent?", answer: "Baby carrying the watermelon is a pivotal threshold moment. It marks her literal and metaphorical entry into the 'staff only' underground world of the resort, stripping away her privileged innocence and introducing her to adult autonomy." },
        { question: "Why is the film considered a feminist classic?", answer: "For 1987, the film was incredibly progressive. It centered entirely on female pleasure, featured a realistic and sympathetic subplot about a botched illegal abortion (set pre-Roe v. Wade), and allowed Baby to rescue Johnny socially, rather than the other way around." }
    ],
    "Me Before You": [
        { question: "Why is the ending of Me Before You so controversial?", answer: "The film sparked significant debate within the disability community. Critics argued that Will's choice to end his life reinforces harmful cinematic tropes that life with a severe disability is a burden not worth living, regardless of romantic love." },
        { question: "How does the enemies to lovers dynamic function here?", answer: "The initial hostility is entirely defensive. Will is bitter and resentful about his paralysis, pushing Louisa away to maintain control over his isolated world. Their romance blossoms as Louisa's relentless optimism systematically dismantles his defensive walls." },
        { question: "What is the significance of the bumblebee tights?", answer: "The tights represent Louisa's unashamed, vibrant individuality. Will buying them for her proves that he is the only person who truly 'sees' and appreciates her for who she is, in contrast to her self-absorbed boyfriend, Patrick." }
    ],
    "The Proposal": [
        { question: "How does The Proposal flip the script on traditional rom-coms?", answer: "It reverses the gender power dynamics. Sandra Bullock plays the ruthless, emotionally unavailable corporate shark, while Ryan Reynolds plays the capable, put-upon assistant—a dynamic traditionally reserved for male bosses and female secretaries." },
        { question: "What is the narrative purpose of the trip to Alaska?", answer: "The trip forces Margaret out of her highly controlled, sterile New York environment. By placing her in Andrew's chaotic, warm, and unpredictable family home in Sitka, her corporate armor is stripped away, making vulnerability possible." },
        { question: "Why is the Betty White chant scene so iconic?", answer: "The scene in the woods with Betty White is pure comedic catharsis. It is the moment Margaret completely abandons her rigid dignity, signifying her transition from a cold boss to a woman capable of genuine joy and connection." }
    ],
    "How to Lose a Guy in 10 Days": [
        { question: "What makes the plot of this film so unique?", answer: "The film operates on a double-blind deception. Both characters are manipulating the other for career advancement (Andie to lose him, Ben to keep him), creating a perfect engine for dramatic irony where the audience knows the stakes but the characters don't." },
        { question: "What does the 'Love Fern' symbolize?", answer: "The love fern is a comedic exaggeration of suffocating relationship milestones. However, when Ben gets genuinely upset that the fern died, it signals to the audience that his fake emotional investment is beginning to blur into real attachment." },
        { question: "Why did the film see a massive resurgence on TikTok?", answer: "The film's aesthetic (specifically Andie's iconic yellow dress), highly quotable banter, and the chemistry between Hudson and McConaughey perfectly align with Gen-Z's nostalgic appreciation for the glamorous, high-concept rom-coms of the early 2000s." }
    ],
    "Anyone But You": [
        { question: "What Shakespeare play is Anyone But You based on?", answer: "Like '10 Things I Hate About You', this film is a loose modernization of Shakespeare—specifically 'Much Ado About Nothing'. The characters Bea and Ben are direct references to the original play's bickering lovers, Beatrice and Benedick." },
        { question: "How did the film achieve such massive box office success?", answer: "It utilized a masterful marketing campaign heavily driven by viral TikTok moments, leaning into the off-screen chemistry rumors of its leads, Sydney Sweeney and Glen Powell, and successfully reviving the R-rated studio rom-com for a new generation." },
        { question: "What role does the song 'Unwritten' play in the narrative?", answer: "Natasha Bedingfield's 'Unwritten' serves as Ben's secret 'serenity song', a vulnerability he hides from the world. When Bea uses it to calm him down on the buoy, it shifts their dynamic from performative hatred to genuine, intimate care." }
    ]
};

// 5. UTILITY FUNCTIONS & THE KEYWORD BRIDGE
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

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
            description: scene.description || '',
            severity: scene.severity || 'Moderate'
        }))
    };
};

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

// 🔥 6. THE KEYWORD BRIDGE
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

// 🔥 HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
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
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : '',
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = ENEMIES_TO_LOVERS_MOVIE_FAQS[movie.Title] ? [...ENEMIES_TO_LOVERS_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = ENEMIES_TO_LOVERS_MOVIE_FAQS[movieTitle] ? [...ENEMIES_TO_LOVERS_MOVIE_FAQS[movieTitle]] : [];
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
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
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
                 answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:\n\n${uiDetailedList}\n\nManually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
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