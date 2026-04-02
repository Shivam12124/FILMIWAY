// utils/paramountDramaMovieData.js - PARAMOUNT+ CORE DRAMA COLLECTION DATA ✅
// Emotional Impact, Character Depth, and Human Connection

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 7345, "imdbID": "tt0469494", "Title": "There Will Be Blood", "year": 2007, "genre": "Drama", "runtime": 158, "rank": 1 },
    { "tmdbId": 409, "imdbID": "tt0116209", "Title": "The English Patient", "year": 1996, "genre": "Romance", "runtime": 162, "rank": 2 },
    { "tmdbId": 393457, "imdbID": "tt2671706", "Title": "Fences", "year": 2016, "genre": "Drama", "runtime": 139, "rank": 3 },
    { "tmdbId": 687, "imdbID": "tt0112818", "Title": "Dead Man Walking", "year": 1995, "genre": "Drama", "runtime": 122, "rank": 4 },
    { "tmdbId": 273896, "imdbID": "tt1020072", "Title": "Selma", "year": 2014, "genre": "History", "runtime": 128, "rank": 5 },
    { "tmdbId": 259693, "imdbID": "tt0490215", "Title": "Silence", "year": 2016, "genre": "Drama", "runtime": 161, "rank": 6 },
    { "tmdbId": 995746, "imdbID": "tt13004880", "Title": "One Life", "year": 2024, "genre": "History", "runtime": 110, "rank": 7 },
    { "tmdbId": 374473, "imdbID": "tt5168192", "Title": "I, Daniel Blake", "year": 2016, "genre": "Drama", "runtime": 100, "rank": 8 },
    { "tmdbId": 4922, "imdbID": "tt0421715", "Title": "The Curious Case of Benjamin Button", "year": 2008, "genre": "Fantasy", "runtime": 166, "rank": 9 },
    { "tmdbId": 13, "imdbID": "tt0109830", "Title": "Forrest Gump", "year": 1994, "genre": "Drama", "runtime": 142, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Trauma, Violence, and Addiction)
export const SENSITIVE_TIMELINES = {
    // 1. There Will Be Blood
    7345: { scenes: [] },

    // 2. The English Patient
    409: { 
        scenes: [
            { start: "1:14:30", end: "1:16:05", type: "Nudity", severity: "High" },
            { start: "1:21:05", end: "1:21:25", type: "Sex", severity: "Moderate" },
            { start: "1:28:00", end: "1:29:30", type: "Nudity", severity: "High" },
            { start: "1:54:30", end: "1:54:37", type: "Nudity", severity: "High" }
        ]
    },

    // 3. Fences
    393457: { scenes: [] },

// 4. Dead Man Walking
    687: { 
        scenes: [
            { start: "1:01:45", end: "1:01:50", type: "Nudity(Woman)", severity: "Mild" },
            { start: "1:51:32", end: "1:51:43", type: "Partial Nudity(Woman)", severity: "Mild" }
        ] 
    },

    // 5. Selma
    273896: { scenes: [] },

    // 6. Silence
    259693: { scenes: [] },

    // 7. One Life
    995746: { scenes: [] },

    // 8. I, Daniel Blake
    374473: { scenes: [] },

    // 9. The Curious Case of Benjamin Button
    4922: { 
        scenes: [
            { start: "0:20:50", end: "0:20:57", type: "Partial Nudity (Man)", severity: "Mild" }
        ]
    },

    // 10. Forrest Gump
    13: { 
        scenes: [
            { start: "0:35:50", end: "0:35:55", type: "Nudity (Woman)", severity: "Moderate" },
            { start: "0:37:15", end: "0:38:02", type: "Partial Nudity (Woman)", severity: "Mild" }
        ]
    }
};

export const FALLBACK_POSTERS = {
    7345: "https://image.tmdb.org/t/p/w500/faL4e95X3kM7c7TfE41tA7t1v.jpg",
    409: "https://image.tmdb.org/t/p/w500/a32p18e6c7c7f.jpg",
    393457: "https://image.tmdb.org/t/p/w500/m59f8P72sa6s2.jpg",
    687: "https://image.tmdb.org/t/p/w500/7754s1s8s8s.jpg",
    273896: "https://image.tmdb.org/t/p/w500/88990011.jpg",
    259693: "https://image.tmdb.org/t/p/w500/silence_poster.jpg",
    995746: "https://image.tmdb.org/t/p/w500/onelife_poster.jpg",
    374473: "https://image.tmdb.org/t/p/w500/idanielblake.jpg",
    4922: "https://image.tmdb.org/t/p/w500/benjamin_button.jpg",
    13: "https://image.tmdb.org/t/p/w500/forrest_gump.jpg"
};

// ✅ HELPER: Emotional Impact
const createMovieData = (data) => ({
    emotionalIntensity: 85,    // Default High Emotion
    complexityLevel: "HIGH",
    dominantColor: "#1e293b", // Slate default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {

  // 1. There Will Be Blood (2007)
  // Curve: Slow Burn -> Tension -> Explosion -> Madness.
  // Peak: 98 (The Milkshake Speech).
  7345: createMovieData({
    emotionalIntensity: 98,
    complexityLevel: "MASTERPIECE",
    dominantColor: "#451a03", // Deep Oil Brown
    rating: 8.2, criticsScore: 91, audienceScore: 86,
    director: "Paul Thomas Anderson",
    cast: ["Daniel Day-Lewis", "Paul Dano", "Ciarán Hinds"],
    boxOffice: "$76.2 million", budget: "$25 million",
    dna: { "Drama": 90, "History": 10 },
    scenes: [
      { time: 15, intensity: 40, label: "The Silver Discovery", color: "#a16207" },
      { time: 60, intensity: 65, label: "The Oil Fire", color: "#ea580c" },
      { time: 90, intensity: 75, label: "Baptism", color: "#7c2d12" },
      { time: 120, intensity: 85, label: "Abandonment", color: "#451a03" },
      { time: 150, intensity: 98, label: "I Drink Your Milkshake", color: "#7f1d1d" }
    ],
    themes: ["Greed", "Religion", "Capitalism"],
    synopsis: "A sprawling epic of family, faith, power, and oil, set on the incendiary frontier of California's turn-of-the-century petroleum boom. The story chronicles the rise of Daniel Plainview, a silver miner turned oilman who descends into moral madness as his wealth grows."
  }),

  // 2. The English Patient (1996)
  // Curve: Mystery -> Romance -> Tragedy -> Devastation.
  // Peak: 95 (The Cave Promise).
  409: createMovieData({
    emotionalIntensity: 95,
    complexityLevel: "POETIC",
    dominantColor: "#d97706", // Desert Amber
    rating: 7.4, criticsScore: 86, audienceScore: 83,
    director: "Anthony Minghella",
    cast: ["Ralph Fiennes", "Juliette Binoche", "Willem Dafoe"],
    boxOffice: "$232 million", budget: "$27 million",
    dna: { "Romance": 60, "War": 40 },
    scenes: [
      { time: 10, intensity: 30, label: "The Monastery", color: "#fcd34d" },
      { time: 50, intensity: 70, label: "The Sandstorm", color: "#d97706" },
      { time: 90, intensity: 85, label: "The Cave", color: "#92400e" },
      { time: 130, intensity: 95, label: "Promise Me", color: "#78350f" },
      { time: 155, intensity: 90, label: "Euthanasia", color: "#fffbeb" }
    ],
    themes: ["Memory", "Betrayal", "Love"],
    synopsis: "In the closing days of WWII, a burn victim known only as the 'English Patient' recalls a tragic tale of forbidden love and betrayal in the North African desert as a nurse tends to his final days in an Italian monastery."
  }),

  // 3. Fences (2016)
  // Curve: Talk -> Tension -> Betrayal -> Confrontation.
  // Peak: 96 (Rose's Reply / I Standing Right Here).
  393457: createMovieData({
    emotionalIntensity: 92,
    complexityLevel: "THEATRICAL",
    dominantColor: "#374151", // Industrial Grey
    rating: 7.2, criticsScore: 92, audienceScore: 75,
    director: "Denzel Washington",
    cast: ["Denzel Washington", "Viola Davis", "Stephen Henderson"],
    boxOffice: "$64 million", budget: "$24 million",
    dna: { "Drama": 100 },
    scenes: [
      { time: 20, intensity: 45, label: "Payday", color: "#6b7280" },
      { time: 60, intensity: 75, label: "Why You Not Like Me?", color: "#4b5563" },
      { time: 90, intensity: 95, label: "The Confession", color: "#1f2937" },
      { time: 105, intensity: 96, label: "Rose's Reply", color: "#b91c1c" },
      { time: 130, intensity: 80, label: "The Funeral", color: "#9ca3af" }
    ],
    themes: ["Fatherhood", "Regret", "Duty"],
    synopsis: "A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life. Denzel Washington and Viola Davis deliver powerhouse performances in this adaptation of August Wilson's Pulitzer Prize-winning play."
  }),

  // 4. Dead Man Walking (1995)
  // Curve: Empathy -> Conflict -> Truth -> Execution.
  // Peak: 97 (The Walk / Execution).
  687: createMovieData({
    emotionalIntensity: 97,
    complexityLevel: "ETHICAL",
    dominantColor: "#0f172a", // Death Row Blue/Black
    rating: 7.6, criticsScore: 95, audienceScore: 91,
    director: "Tim Robbins",
    cast: ["Susan Sarandon", "Sean Penn"],
    boxOffice: "$83 million", budget: "$11 million",
    dna: { "Crime": 40, "Drama": 60 },
    scenes: [
      { time: 15, intensity: 30, label: "First Visit", color: "#334155" },
      { time: 60, intensity: 65, label: "The Pardon Board", color: "#475569" },
      { time: 90, intensity: 80, label: "The Truth", color: "#1e293b" },
      { time: 110, intensity: 97, label: "The Walk", color: "#020617" },
      { time: 120, intensity: 85, label: "Burial", color: "#64748b" }
    ],
    themes: ["Redemption", "Capital Punishment", "Forgiveness"],
    synopsis: "A nun, while comforting a convicted killer on death row, empathizes with both the killer and his victim's families. It is a harrowing, balanced, and deeply spiritual examination of the death penalty and the possibility of redemption."
  }),

  // 5. Selma (2014)
  // Curve: Strategy -> Violence -> Resolve -> Victory.
  // Peak: 95 (Bloody Sunday).
  273896: createMovieData({
    emotionalIntensity: 90,
    complexityLevel: "HISTORICAL",
    dominantColor: "#9f1239", // Blood Red / Brick
    rating: 7.5, criticsScore: 99, audienceScore: 86,
    director: "Ava DuVernay",
    cast: ["David Oyelowo", "Tom Wilkinson", "Carmen Ejogo"],
    boxOffice: "$66 million", budget: "$20 million",
    dna: { "History": 70, "Drama": 30 },
    scenes: [
      { time: 20, intensity: 40, label: "MLK in Office", color: "#881337" },
      { time: 50, intensity: 95, label: "Bloody Sunday", color: "#be123c" },
      { time: 80, intensity: 75, label: "Turnaround Tuesday", color: "#9f1239" },
      { time: 100, intensity: 60, label: "The Call", color: "#4c0519" },
      { time: 125, intensity: 90, label: "The Speech", color: "#fb7185" }
    ],
    themes: ["Civil Rights", "Leadership", "Justice"],
    synopsis: "A chronicle of Dr. Martin Luther King, Jr.'s campaign to secure equal voting rights via an epic march from Selma to Montgomery, Alabama, in 1965. The film focuses on the strategy and human toll of leadership in the face of brutal opposition."
  }),

  // 6. Silence (2016)
  // Curve: Faith -> Doubt -> Torture -> Apostasy.
  // Peak: 95 (Trample the Image).
  259693: createMovieData({
    emotionalIntensity: 88,
    complexityLevel: "SPIRITUAL",
    dominantColor: "#365314", // Jungle Green / Mud
    rating: 7.2, criticsScore: 83, audienceScore: 69,
    director: "Martin Scorsese",
    cast: ["Andrew Garfield", "Adam Driver", "Liam Neeson"],
    boxOffice: "$23 million", budget: "$40 million",
    dna: { "History": 50, "Drama": 50 },
    scenes: [
      { time: 30, intensity: 45, label: "The Village", color: "#4d7c0f" },
      { time: 70, intensity: 80, label: "The Crucifixion", color: "#3f6212" },
      { time: 110, intensity: 90, label: "The Inquisitor", color: "#1a2e05" },
      { time: 140, intensity: 95, label: "Trample the Image", color: "#365314" },
      { time: 160, intensity: 60, label: "The End", color: "#ecfccb" }
    ],
    themes: ["Faith", "Doubt", "Suffering"],
    synopsis: "In the 17th century, two Portuguese Jesuit priests travel to Japan in an attempt to propagate Catholicism and locate their mentor, who is rumored to have committed apostasy. It is a grueling, visual masterpiece about the silence of God."
  }),

  // 7. One Life (2024)
  // Curve: Memory -> Effort -> Failure -> Revelation -> Legacy.
  // Peak: 95 (That's Life TV Show).
  995746: createMovieData({
    emotionalIntensity: 91,
    complexityLevel: "HUMANIST",
    dominantColor: "#1e3a8a", // British Blue
    rating: 7.6, criticsScore: 91, audienceScore: 95,
    director: "James Hawes",
    cast: ["Anthony Hopkins", "Johnny Flynn", "Helena Bonham Carter"],
    boxOffice: "$30 million", budget: "$15 million",
    dna: { "History": 60, "Drama": 40 },
    scenes: [
      { time: 20, intensity: 45, label: "Prague 1938", color: "#64748b" },
      { time: 50, intensity: 75, label: "The Last Train", color: "#334155" },
      { time: 80, intensity: 60, label: "Scrapbook", color: "#1e293b" },
      { time: 100, intensity: 95, label: "That's Life TV Show", color: "#1d4ed8" }, // The viral clip moment
      { time: 108, intensity: 85, label: "Reflection", color: "#1e3a8a" }
    ],
    themes: ["Heroism", "Guilt", "Legacy"],
    synopsis: "The true story of Sir Nicholas Winton, who rescued 669 Jewish children from the Nazis in the months leading up to World War II. Fifty years later, he is haunted by the fate of the children he couldn't save, until a live television show reveals the stunning truth of his legacy."
  }),

  // 8. I, Daniel Blake (2016)
  // Curve: Frustration -> Dignity -> Despair -> Tragedy.
  // Peak: 92 (The Food Bank).
  374473: createMovieData({
    emotionalIntensity: 92,
    complexityLevel: "REALISM",
    dominantColor: "#082f49", // Cold Blue
    rating: 7.8, criticsScore: 92, audienceScore: 84,
    director: "Ken Loach",
    cast: ["Dave Johns", "Hayley Squires"],
    boxOffice: "$15 million", budget: "$2 million",
    dna: { "Drama": 100 },
    scenes: [
      { time: 15, intensity: 40, label: "The Assessment", color: "#0c4a6e" },
      { time: 50, intensity: 92, label: "The Food Bank", color: "#0369a1" },
      { time: 75, intensity: 70, label: "Spray Paint", color: "#075985" },
      { time: 90, intensity: 85, label: "The Collapse", color: "#082f49" },
      { time: 98, intensity: 80, label: "The Funeral Speech", color: "#bae6fd" }
    ],
    themes: ["Poverty", "Bureaucracy", "Dignity"],
    synopsis: "After suffering a heart attack, a 59-year-old carpenter must fight the bureaucratic forces of the system in order to receive Employment and Support Allowance. He befriends a single mother and her two children on the same desperate journey."
  }),

  // 9. The Curious Case of Benjamin Button (2008)
  // Curve: Wonder -> Romance -> Loss -> Regression.
  // Peak: 90 (Meeting in the Middle).
  4922: createMovieData({
    emotionalIntensity: 85,
    complexityLevel: "FANTASY",
    dominantColor: "#c2410c", // Sepia/Rust
    rating: 7.8, criticsScore: 72, audienceScore: 80,
    director: "David Fincher",
    cast: ["Brad Pitt", "Cate Blanchett", "Taraji P. Henson"],
    boxOffice: "$335 million", budget: "$150 million",
    dna: { "Fantasy": 50, "Romance": 50 },
    scenes: [
      { time: 20, intensity: 30, label: "Born Old", color: "#78350f" },
      { time: 60, intensity: 65, label: "Meeting Daisy", color: "#c2410c" },
      { time: 100, intensity: 75, label: "The War Tugboat", color: "#9a3412" },
      { time: 130, intensity: 90, label: "Meeting in the Middle", color: "#ea580c" },
      { time: 160, intensity: 85, label: "Dying Young", color: "#fdba74" }
    ],
    themes: ["Time", "Mortality", "Love"],
    synopsis: "Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences. It is a grand, visual epic about the joys of life, the sadness of death, and a love that endures beyond time."
  }),

  // 10. Forrest Gump (1994)
  // Curve: Innocence -> History -> Love -> Loss.
  // Peak: 90 (Jenny's Grave).
  13: createMovieData({
    emotionalIntensity: 80,
    complexityLevel: "CLASSIC",
    dominantColor: "#15803d", // Park Bench Green
    rating: 8.8, criticsScore: 71, audienceScore: 95,
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    boxOffice: "$678 million", budget: "$55 million",
    dna: { "Drama": 70, "Comedy": 30 },
    scenes: [
      { time: 15, intensity: 40, label: "Run Forrest Run", color: "#4ade80" },
      { time: 60, intensity: 75, label: "Vietnam Ambush", color: "#166534" },
      { time: 100, intensity: 65, label: "Running Across America", color: "#15803d" },
      { time: 130, intensity: 90, label: "Jenny's Grave", color: "#14532d" },
      { time: 140, intensity: 80, label: "The Feather", color: "#bbf7d0" }
    ],
    themes: ["Destiny", "Innocence", "History"],
    synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
  })
};

export const STRATEGIC_QUOTES = {
    7345: "I drink your milkshake! I drink it up!",
    409: "We die. We die rich with lovers and tribes, tastes we have swallowed...",
    393457: "Some people build fences to keep people out, and other people build fences to keep people in.",
    687: "I want the last thing you see in this world to be the face of love.",
    273896: "We negotiate, we demonstrate, we resist.",
    259693: "I pray but I am lost. Am I just praying to silence?",
    995746: "If something is not impossible, then there must be a way to do it.",
    374473: "I am a man, not a dog. As such, I demand my rights.",
    4922: "Our lives are defined by opportunities, even the ones we miss.",
    13: "Life is like a box of chocolates. You never know what you're gonna get."
};

export const PARAMOUNT_DRAMA_MOVIE_FAQS = {
    'There Will Be Blood': [
        { question: "Is Daniel Plainview a real person?", answer: "He is loosely based on Edward Doheny, a real-life oil tycoon. However, the character is largely a fictional creation adapted from Upton Sinclair's novel 'Oil!', designed to personify the destructive nature of unchecked capitalism." },
        { question: "What does the ending mean?", answer: "The bowling alley scene represents Daniel's total descent into madness. Having achieved absolute wealth, he has nothing left to conquer but his own past (Eli Sunday). His line 'I'm finished' signifies both the end of his task (killing Eli) and the end of his humanity." },
        { question: "Why is there no music for long stretches?", answer: "Jonny Greenwood's score is intentionally sparse and dissonant. The silence emphasizes the isolation of the landscape and Daniel's growing detachment from other people." }
    ],
    'The English Patient': [
        { question: "Why did Seinfeld make fun of this movie?", answer: "The TV show 'Seinfeld' famously had an episode where Elaine hated the movie while everyone else loved it. It became a pop-culture symbol for 'Oscar bait' films that are beautifully made but seen by some as overly long or boring." },
        { question: "Is the cave real?", answer: "The Cave of Swimmers is a real place in Egypt, and it does contain prehistoric rock art. However, the location used in the film was a set constructed to look like the real cave." },
        { question: "Did Almasy really work for the Germans?", answer: "Yes. In real life, Count Almásy did help the Germans during WWII by smuggling spies across the desert, which makes the romanticized version of him in the film controversial to historians." }
    ],
    'Fences': [
        { question: "Why does the movie feel like a play?", answer: "It is based on August Wilson's Pulitzer Prize-winning play. Denzel Washington, who directed, chose to keep the setting confined mostly to the backyard and house to preserve the claustrophobic, intense atmosphere of the stage production." },
        { question: "What is the symbolism of the fence?", answer: "The fence represents different things for different characters. For Troy, it keeps death and the devil out. For Rose, it is meant to keep her family close and safe. It physically manifests the emotional barriers Troy builds." },
        { question: "Did Viola Davis win an Oscar?", answer: "Yes, Viola Davis won the Academy Award for Best Supporting Actress for her role as Rose. Her performance, particularly the '18 years of my life' monologue, is considered one of the greatest in modern cinema." }
    ],
    'Dead Man Walking': [
        { question: "Is this a true story?", answer: "Yes. It is based on the non-fiction book by Sister Helen Prejean. The character of Matthew Poncelet is a composite of two different death row inmates she served as a spiritual adviser to: Elmo Patrick Sonnier and Robert Lee Willie." },
        { question: "Is the film against the death penalty?", answer: "While Sister Helen is an activist against capital punishment, the film is praised for showing the horrific nature of the crimes committed and the pain of the victims' families, allowing the audience to wrestle with the complexity of the issue rather than preaching." },
        { question: "Did Sean Penn and Susan Sarandon really visit prisons?", answer: "Yes, both actors spent time with Sister Helen and visited prisons to understand the environment. Susan Sarandon won the Best Actress Oscar for her portrayal." }
    ],
    'Selma': [
        { question: "Why isn't the 'I Have a Dream' speech in the movie?", answer: "The filmmakers did not have the rights to use Dr. King's actual speeches, which are owned by his estate (who licensed them to a different studio). Ava DuVernay and the writers had to rewrite the speeches to capture King's cadence and message without using his exact words." },
        { question: "Was LBJ really that antagonistic?", answer: "This is a point of historical debate. The film depicts President Johnson as reluctant and politically calculating regarding the Voting Rights Act, causing friction with King. Some historians argue LBJ was more cooperative in reality, but the film emphasizes the pressure King had to apply to get results." },
        { question: "Where was it filmed?", answer: "Despite being set in Selma, Alabama, much of the filming took place in Georgia due to tax incentives. However, the final march scenes were filmed on the actual Edmund Pettus Bridge." }
    ],
    'Silence': [
        { question: "Why did it take 28 years to make?", answer: "Martin Scorsese read the book in 1989 and tried to make it for decades. It was a passion project that struggled with funding because of its dark, religious, and non-commercial subject matter. He finally made it after 'The Wolf of Wall Street' success." },
        { question: "Did the actors really starve themselves?", answer: "Yes. Adam Driver and Andrew Garfield lost a significant amount of weight to portray the starving priests. Driver reportedly lost nearly 50 pounds to look emaciated for the later scenes." },
        { question: "What is the meaning of the final shot?", answer: "The final shot shows Rodrigues holding a tiny crucifix in his hand inside his coffin. It suggests that while he publicly renounced his faith to save others (apostasy), he secretly kept his belief alive in his heart until the end." }
    ],
    'One Life': [
        { question: "Is the TV show scene real footage?", answer: "The movie recreates a famous real-life episode of the BBC show 'That's Life!' from 1988. The emotional clip of the real Nicholas Winton realizing the audience is made up of children he saved went viral on YouTube years before the movie was made." },
        { question: "How many children did he save?", answer: "He saved 669 children, mostly Jewish, from Czechoslovakia on the eve of WWII. It is estimated that there are over 6,000 descendants of the 'Winton Children' alive today because of his actions." },
        { question: "Why didn't he tell anyone?", answer: "Winton was a humble man who viewed his actions as simply 'doing what needed to be done.' He didn't speak about it for 50 years; the story only came out when his wife found a scrapbook in their attic containing the names and photos of the children." }
    ],
    'I, Daniel Blake': [
        { question: "Is the welfare system really that bad?", answer: "Director Ken Loach based the film on extensive research and interviews with people in the UK benefits system. While fictional, the situations (sanctions, long hold times, food bank reliance) are accurate representations of the 'hostile environment' policy of the time." },
        { question: "Why is the spray paint scene important?", answer: "It is Daniel's only act of public rebellion. Stripped of his voice by the bureaucracy, he uses the graffiti to physically reclaim his identity and demand visibility in a public space." },
        { question: "Did it change any laws?", answer: "The film sparked a massive debate in the British Parliament about the treatment of the disabled and unemployed. It became a cultural touchstone for discussing austerity, though specific policy changes were slow to follow." }
    ],
    'The Curious Case of Benjamin Button': [
        { question: "How did they do the aging effects?", answer: "It was a groundbreaking use of CGI. Brad Pitt's head was digitally aged and placed onto the bodies of smaller actors for the early scenes. As Benjamin 'grew' into Brad Pitt's actual age, they used makeup, and then digital smoothing for the younger years." },
        { question: "Is it based on a book?", answer: "It is loosely based on a short story by F. Scott Fitzgerald. However, the film expands the story significantly, changing the setting from Baltimore to New Orleans and adding the love story with Daisy as the central anchor." },
        { question: "What is the significance of the hummingbird?", answer: "The hummingbird appears at key moments of death and transition (like on the tugboat). It symbolizes infinity (its wings move in a figure-8 pattern) and the idea that life is fleeting but the energy of a soul persists." }
    ],
    'Forrest Gump': [
        { question: "Is Forrest Gump a reliable narrator?", answer: "Not entirely. Forrest sees the world through a lens of innocence. He describes horrific events (war, assassination, abuse) with a matter-of-fact tone. The audience understands the gravity of the history while Forrest just sees people 'doing things.' This irony is the core of the film." },
        { question: "Did Tom Hanks really run that much?", answer: "Tom Hanks did a lot of the running, but for the wide shots of him running across the country, a lookalike double (Jim Hanks, his brother) was often used." },
        { question: "What was in the letter Jenny gave Forrest?", answer: "The movie never reveals what is written in the letter. It is left to the audience's imagination, but it presumably explains her love for him and perhaps the truth about her illness (implied to be HIV/AIDS)." }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size] || 'w500'}${posterPath}`;
};

// 🔥 1. THE KEYWORD BRIDGE (SEO-Optimized for Drama Content)
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

export const generateFAQData = (movie) => {
    return PARAMOUNT_DRAMA_MOVIE_FAQS[movie.Title] || [];
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

    const staticFaqs = PARAMOUNT_DRAMA_MOVIE_FAQS[movie.Title] ? [...PARAMOUNT_DRAMA_MOVIE_FAQS[movie.Title]] : [];
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
    const staticFaqs = PARAMOUNT_DRAMA_MOVIE_FAQS[movieTitle] ? [...PARAMOUNT_DRAMA_MOVIE_FAQS[movieTitle]] : [];
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
                answer: `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movieTitle} does not have any sex, nudity, or sexual content in the full ${finalRuntime} runtime.`
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
                answer: `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movieTitle} does not have any sex, nudity, or sexual content in the full ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
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