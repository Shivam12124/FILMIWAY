// utils/paramountFamilyMovieData.js - PARAMOUNT+ FAMILY COLLECTION DATA
// Fun, Adventure, and Wholesome Entertainment

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 44896, "imdbID": "tt1192628", "Title": "Rango", "year": 2011, "genre": "Animation", "runtime": 107, "rank": 1 },
    { "tmdbId": 614930, "imdbID": "tt8589698", "Title": "TMNT: Mutant Mayhem", "year": 2023, "genre": "Animation", "runtime": 99, "rank": 2 },
    { "tmdbId": 11836, "imdbID": "tt0345950", "Title": "The SpongeBob SquarePants Movie", "year": 2004, "genre": "Animation", "runtime": 87, "rank": 3 },
    { "tmdbId": 939243, "imdbID": "tt18259086", "Title": "Sonic the Hedgehog 3", "year": 2025, "genre": "Family", "runtime": 110, "rank": 4 },
    { "tmdbId": 499701, "imdbID": "tt7547410", "Title": "Dora and the Lost City of Gold", "year": 2019, "genre": "Adventure", "runtime": 102, "rank": 5 },
    { "tmdbId": 675353, "imdbID": "tt12412888", "Title": "Sonic the Hedgehog 2", "year": 2022, "genre": "Family", "runtime": 122, "rank": 6 },
    { "tmdbId": 439058, "imdbID": "tt5257726", "Title": "Hey Arnold! The Jungle Movie", "year": 2017, "genre": "Animation", "runtime": 81, "rank": 7 },
    { "tmdbId": 454626, "imdbID": "tt3794354", "Title": "Sonic the Hedgehog", "year": 2020, "genre": "Family", "runtime": 99, "rank": 8 },
    { "tmdbId": 675445, "imdbID": "tt11832046", "Title": "PAW Patrol: The Movie", "year": 2021, "genre": "Animation", "runtime": 86, "rank": 9 },
    { "tmdbId": 893723, "imdbID": "tt15837338", "Title": "PAW Patrol: The Mighty Movie", "year": 2023, "genre": "Animation", "runtime": 88, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Mild Scares/Action for Kids)
export const SENSITIVE_TIMELINES = {
    // 1. Rango
    44896: { 
        scenes: [
            { start: "0:30:00", end: "0:35:00", type: "Hawk Attack", severity: "Moderate" },
            { start: "1:20:00", end: "1:25:00", type: "Rattlesnake Jake", severity: "High" } // Intense for young kids
        ] 
    },
    // 2. TMNT: Mutant Mayhem
    614930: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Superfly Mutation", severity: "Moderate" } // Body horror/gross-out
        ] 
    },
    // 3. The SpongeBob SquarePants Movie
    11836: { 
        scenes: [
            { start: "1:00:00", end: "1:05:00", type: "Dried Out Scene", severity: "High" } // Emotional/Scary for very young
        ] 
    },
    // 4. Sonic the Hedgehog 3
    939243: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Shadow's Backstory", severity: "Moderate" } // Sad themes
        ] 
    },
    // 5. Dora and the Lost City of Gold
    499701: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Quicksand", severity: "Mild" }
        ] 
    },
    // 6. Sonic the Hedgehog 2
    675353: { 
        scenes: [
            { start: "1:30:00", end: "1:40:00", type: "Giant Robot Fight", severity: "Moderate" }
        ] 
    },
    // 7. Hey Arnold! The Jungle Movie
    439058: { 
        scenes: [
            { start: "0:55:00", end: "1:00:00", type: "La Sombra's Trap", severity: "Mild" }
        ] 
    },
    // 8. Sonic the Hedgehog
    454626: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Owl Injury", severity: "Moderate" } // Longclaw gets hurt
        ] 
    },
    // 9. PAW Patrol: The Movie
    675445: { 
        scenes: [
            { start: "0:30:00", end: "0:35:00", type: "Chase's Fear", severity: "Mild" } // Emotional distress
        ] 
    },
    // 10. PAW Patrol: The Mighty Movie
    893723: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Meteor Crash", severity: "Mild" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    44896: "https://image.tmdb.org/t/p/w500/8d83vJ08K90v7f075q5j758d8.jpg",
    614930: "https://image.tmdb.org/t/p/w500/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg",
    11836: "https://image.tmdb.org/t/p/w500/z096e8d1976a445d475c754d1.jpg",
    939243: "https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuyc3KrDWLqE1h.jpg", 
    499701: "https://image.tmdb.org/t/p/w500/vV1oK953r429a1b55c5c.jpg",
    675353: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO8silk.jpg",
    439058: "https://image.tmdb.org/t/p/w500/3k8j9055818818818.jpg",
    454626: "https://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJ.jpg",
    675445: "https://image.tmdb.org/t/p/w500/ic0intvVerBd8badvfEIG.jpg",
    893723: "https://image.tmdb.org/t/p/w500/aTve8F7XgY8Y8Y8Y8.jpg"
};

// ✅ HELPER: Updated for Family Fun Factor
const createMovieData = (data) => ({
    funFactor: 85,    // Default score
    complexityLevel: "FAMILY", // String label for UI
    dominantColor: "#facc15", // Bright Yellow default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {

  // 1. Rango (2011)
  // Corrected DNA: Western is key. Pacing: Slow build -> Surreal -> Action.
  44896: createMovieData({
    funFactor: 92,
    complexityLevel: "VISUAL",
    dominantColor: "#d97706",
    rating: 7.2, criticsScore: 88, audienceScore: 75,
    director: "Gore Verbinski",
    cast: ["Johnny Depp", "Isla Fisher", "Bill Nighy"],
    boxOffice: "$245.7 million", budget: "$135 million",
    dna: { "Western": 35, "Comedy": 35, "Adventure": 30 },
    scenes: [
      { time: 10, intensity: 35, label: "The Accident", color: "#f59e0b" },
      { time: 35, intensity: 70, label: "The Hawk", color: "#b45309" },
      { time: 70, intensity: 55, label: "Campfire Tale", color: "#fbbf24" },
      { time: 90, intensity: 88, label: "Rattlesnake Jake", color: "#78350f" },
      { time: 100, intensity: 82, label: "Town Showdown", color: "#d97706" }
    ],
    themes: ["Identity", "Courage", "Water"],
    synopsis: "Rango is a sheltered chameleon living as an ordinary family pet who faces a major identity crisis. After accidentally winding up in the gritty, gun-slinging town of Dirt, a lawless outpost populated by the desert's most wily and whimsical creatures, Rango is suddenly transformed into the sheriff the town has been waiting for."
  }),

  // 2. TMNT: Mutant Mayhem (2023)
  // Corrected DNA: Action/Adventure (Family removed). Pacing: High energy throughout.
  614930: createMovieData({
    funFactor: 95,
    complexityLevel: "STYLIZED",
    dominantColor: "#22c55e",
    rating: 7.2, criticsScore: 95, audienceScore: 90,
    director: "Jeff Rowe",
    cast: ["Micah Abbey", "Shamon Brown Jr.", "Nicolas Cantu"],
    boxOffice: "$180.5 million", budget: "$70 million",
    dna: { "Action": 45, "Comedy": 30, "Adventure": 25 },
    scenes: [
      { time: 10, intensity: 40, label: "Grocery Run", color: "#4ade80" },
      { time: 40, intensity: 75, label: "Car Chase", color: "#16a34a" },
      { time: 65, intensity: 55, label: "Bonding Time", color: "#86efac" },
      { time: 85, intensity: 91, label: "Superfly Fight", color: "#15803d" },
      { time: 95, intensity: 80, label: "City Heroes", color: "#22c55e" }
    ],
    themes: ["Acceptance", "Brotherhood", "Adolescence"],
    synopsis: "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them."
  }),

  // 3. The SpongeBob SquarePants Movie (2004)
  // Corrected Pacing: Peak at 88 (Rock Concert), not 95.
  11836: createMovieData({
    funFactor: 98,
    complexityLevel: "GOOFY",
    dominantColor: "#facc15",
    rating: 7.2, criticsScore: 68, audienceScore: 75,
    director: "Stephen Hillenburg",
    cast: ["Tom Kenny", "Bill Fagerbakke", "Scarlett Johansson"],
    boxOffice: "$141 million", budget: "$30 million",
    dna: { "Comedy": 60, "Adventure": 40 },
    scenes: [
      { time: 15, intensity: 40, label: "Goofy Goober", color: "#fde047" },
      { time: 45, intensity: 70, label: "Cyclops Chase", color: "#eab308" },
      { time: 70, intensity: 78, label: "The Tear", color: "#3b82f6" },
      { time: 85, intensity: 88, label: "Rock Concert", color: "#facc15" },
      { time: 90, intensity: 65, label: "Manager!", color: "#ca8a04" }
    ],
    themes: ["Maturity", "Friendship", "Courage"],
    synopsis: "SpongeBob SquarePants takes leave from the town of Bikini Bottom in order to track down King Neptune's stolen crown and clear his boss, Mr. Krabs, of the crime. Joined by his best friend Patrick, SpongeBob embarks on a treacherous mission to Shell City to save the day and prove to everyone that he is not just a kid."
  }),

  // 4. Sonic the Hedgehog 3 (2025)
  // Corrected DNA: Action/Sci-Fi/Adventure. Pacing: Smoothed start.
  939243: createMovieData({
    funFactor: 90,
    complexityLevel: "EPIC",
    dominantColor: "#000000",
    rating: 7.5, criticsScore: 85, audienceScore: 92,
    director: "Jeff Fowler",
    cast: ["Ben Schwartz", "Keanu Reeves", "Jim Carrey"],
    boxOffice: "TBD", budget: "$120 million",
    dna: { "Action": 45, "Sci-Fi": 30, "Adventure": 25 },
    scenes: [
      { time: 15, intensity: 50, label: "Shadow Awakens", color: "#ef4444" },
      { time: 50, intensity: 78, label: "City Battle", color: "#3b82f6" },
      { time: 80, intensity: 60, label: "Team Up", color: "#fbbf24" },
      { time: 100, intensity: 89, label: "Super Sonic vs Shadow", color: "#000000" },
      { time: 110, intensity: 72, label: "Redemption", color: "#10b981" }
    ],
    themes: ["Rivalry", "Loss", "Family"],
    synopsis: "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance to stop Shadow and protect the planet."
  }),

  // 5. Dora and the Lost City of Gold (2019)
  // Corrected DNA: Adventure lead. Pacing: Classic adventure curve.
  499701: createMovieData({
    funFactor: 85,
    complexityLevel: "ADVENTURE",
    dominantColor: "#d946ef",
    rating: 6.1, criticsScore: 85, audienceScore: 88,
    director: "James Bobin",
    cast: ["Isabela Merced", "Eugenio Derbez", "Michael Peña"],
    boxOffice: "$120.6 million", budget: "$49 million",
    dna: { "Adventure": 55, "Comedy": 35, "Action": 10 },
    scenes: [
      { time: 10, intensity: 25, label: "High School", color: "#f0abfc" },
      { time: 40, intensity: 68, label: "Jungle Trek", color: "#22c55e" },
      { time: 70, intensity: 52, label: "Puzzle Solving", color: "#a855f7" },
      { time: 90, intensity: 82, label: "City of Gold", color: "#eab308" },
      { time: 100, intensity: 62, label: "Reunion", color: "#d946ef" }
    ],
    themes: ["Growth", "Friendship", "Discovery"],
    synopsis: "Dora, a teenage explorer, leads her friends on an adventure to save her parents and solve the mystery behind a lost city of gold. Blending high school drama with jungle perils, Dora proves that her positivity and skills are her greatest assets."
  }),

  // 6. Sonic the Hedgehog 2 (2022)
  // Corrected DNA: Action/Adventure/Comedy.
  675353: createMovieData({
    funFactor: 91,
    complexityLevel: "ACTION",
    dominantColor: "#3b82f6",
    rating: 6.5, criticsScore: 69, audienceScore: 96,
    director: "Jeff Fowler",
    cast: ["Ben Schwartz", "Idris Elba", "Jim Carrey"],
    boxOffice: "$405.4 million", budget: "$110 million",
    dna: { "Action": 45, "Adventure": 35, "Comedy": 20 },
    scenes: [
      { time: 20, intensity: 40, label: "Home Alone", color: "#60a5fa" },
      { time: 50, intensity: 78, label: "Snowboard Chase", color: "#ef4444" },
      { time: 80, intensity: 58, label: "Dance Battle", color: "#fcd34d" },
      { time: 100, intensity: 89, label: "Giant Robot", color: "#1d4ed8" },
      { time: 115, intensity: 70, label: "Baseball Game", color: "#3b82f6" }
    ],
    themes: ["Responsibility", "Teamwork", "Heroism"],
    synopsis: "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands."
  }),

  // 7. Hey Arnold! The Jungle Movie (2017)
  // Corrected DNA: Adventure/Mystery/Comedy.
  439058: createMovieData({
    funFactor: 88,
    complexityLevel: "NOSTALGIC",
    dominantColor: "#facc15",
    rating: 7.5, criticsScore: 100, audienceScore: 92,
    director: "Raymie Muzquiz",
    cast: ["Mason Vale Cotton", "Francesca Marie Smith"],
    boxOffice: "N/A (TV Movie)", budget: "N/A",
    dna: { "Adventure": 45, "Mystery": 35, "Comedy": 20 },
    scenes: [
      { time: 10, intensity: 28, label: "Winning the Trip", color: "#fef08a" },
      { time: 40, intensity: 62, label: "River Danger", color: "#16a34a" },
      { time: 65, intensity: 78, label: "Finding Parents", color: "#facc15" },
      { time: 75, intensity: 88, label: "La Sombra", color: "#7f1d1d" },
      { time: 80, intensity: 82, label: "The Cure", color: "#22c55e" }
    ],
    themes: ["Closure", "Family", "Hope"],
    synopsis: "Picking up where the original series left off, Arnold and his class win a trip to San Lorenzo. This finally gives Arnold the chance to follow in his parents' footsteps and solve the mystery of their disappearance, fulfilling a quest that fans waited over a decade to see."
  }),

  // 8. Sonic the Hedgehog (2020)
  // Corrected DNA: Comedy/Action/Adventure.
  454626: createMovieData({
    funFactor: 89,
    complexityLevel: "ORIGIN",
    dominantColor: "#2563eb",
    rating: 6.5, criticsScore: 64, audienceScore: 93,
    director: "Jeff Fowler",
    cast: ["Ben Schwartz", "James Marsden", "Jim Carrey"],
    boxOffice: "$319.7 million", budget: "$85 million",
    dna: { "Action": 35, "Comedy": 40, "Adventure": 25 },
    scenes: [
      { time: 10, intensity: 25, label: "Green Hills", color: "#60a5fa" },
      { time: 40, intensity: 62, label: "Bar Fight", color: "#1d4ed8" },
      { time: 70, intensity: 55, label: "San Francisco", color: "#93c5fd" },
      { time: 90, intensity: 86, label: "Chase Across World", color: "#2563eb" },
      { time: 95, intensity: 72, label: "Olive Garden", color: "#1e40af" }
    ],
    themes: ["Friendship", "Loneliness", "Belonging"],
    synopsis: "The world needed a hero, we got a hedgehog. Powered with incredible speed, Sonic The Hedgehog embraces his new home on Earth. That is, until he accidentally knocks out the power grid and sparks the attention of super-uncool evil genius Dr. Robotnik. Now it's super-villain vs. super-sonic in an all-out race across the globe."
  }),

  // 9. PAW Patrol: The Movie (2021)
  // Corrected DNA: Adventure/Comedy.
  675445: createMovieData({
    funFactor: 84,
    complexityLevel: "PRESCHOOL",
    dominantColor: "#ef4444",
    rating: 6.1, criticsScore: 80, audienceScore: 97,
    director: "Cal Brunker",
    cast: ["Iain Armitage", "Marsai Martin", "Ron Pardo"],
    boxOffice: "$144.3 million", budget: "$26 million",
    dna: { "Adventure": 55, "Comedy": 35, "Action": 10 },
    scenes: [
      { time: 10, intensity: 25, label: "Adventure City", color: "#3b82f6" },
      { time: 40, intensity: 58, label: "Subway Rescue", color: "#facc15" },
      { time: 60, intensity: 45, label: "Chase's Past", color: "#1e3a8a" },
      { time: 80, intensity: 78, label: "Saving the City", color: "#ef4444" },
      { time: 85, intensity: 62, label: "Liberty Joins", color: "#f472b6" }
    ],
    themes: ["Bravery", "Community", "Overcoming Fear"],
    synopsis: "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos. The team finds help from a new ally, the savvy dachshund Liberty, and together they fight to save the citizens of Adventure City."
  }),

  // 10. PAW Patrol: The Mighty Movie (2023)
  // Corrected DNA: Action/Adventure/Comedy (Not Fantasy).
  893723: createMovieData({
    funFactor: 86,
    complexityLevel: "SUPERHERO",
    dominantColor: "#a855f7",
    rating: 5.9, criticsScore: 72, audienceScore: 94,
    director: "Cal Brunker",
    cast: ["Mckenna Grace", "Taraji P. Henson", "Marsai Martin"],
    boxOffice: "$202.2 million", budget: "$30 million",
    dna: { "Action": 40, "Adventure": 40, "Comedy": 20 },
    scenes: [
      { time: 15, intensity: 42, label: "Meteor Strike", color: "#9333ea" },
      { time: 40, intensity: 62, label: "Getting Powers", color: "#c084fc" },
      { time: 65, intensity: 55, label: "Skye's Struggle", color: "#f472b6" },
      { time: 85, intensity: 82, label: "Final Battle", color: "#7e22ce" },
      { time: 90, intensity: 72, label: "Mighty Pups", color: "#a855f7" }
    ],
    themes: ["Self-Worth", "Power", "Resilience"],
    synopsis: "A magical meteor crash lands in Adventure City, gives the PAW Patrol pups superpowers, and transforms them into The MIGHTY PUPS! For Skye, the smallest member of the team, her new powers are a dream come true. But things take a turn for the worse when the pups' arch-rival Humdinger breaks out of jail."
  })
};

export const STRATEGIC_QUOTES = {
    44896: "No man can walk out on his own story.",
    614930: "We're not monsters, we're family.",
    11836: "I'm a Goofy Goober, yeah!",
    939243: "You're not the only one with speed.",
    499701: "Can you say... delicious?",
    675353: "Today's forecast calls for a 100% chance of adventure!",
    439058: "I knew you'd come for us, Arnold.",
    454626: "I was born to run.",
    675445: "No job is too big, no pup is too small!",
    893723: "Even the smallest pup can make the biggest difference."
};

export const PARAMOUNT_FAMILY_MOVIE_FAQS = {
    'Rango': [
        { question: "Is Rango suitable for small children?", answer: "Rango is rated PG but has a gritty, sometimes bizarre tone that mimics classic Westerns. While animated, it features smoking, gun violence, and some mildly scary character designs (like Rattlesnake Jake) that might be intense for very young viewers." },
        { question: "Who voices the main character?", answer: "Johnny Depp provides the voice for Rango. The film used a unique recording technique called 'emotion capture,' where the actors physically acted out the scenes together on a stage rather than recording in isolation." },
        { question: "Is it a Disney or Pixar movie?", answer: "No, Rango was produced by Nickelodeon Movies and was the first animated feature film created by Industrial Light & Magic (ILM), the special effects studio famous for Star Wars. This explains its incredibly detailed and realistic visual style." }
    ],
    'TMNT: Mutant Mayhem': [
        { question: "Why does the animation look like that?", answer: "The film uses a unique 'sketchbook' animation style designed to look like teenagers' doodles. It blends 2D and 3D elements with rough lines, asymmetry, and vibrant colors to reflect the youthful, chaotic energy of the Turtle brothers." },
        { question: "Is this connected to the Michael Bay movies?", answer: "No, 'Mutant Mayhem' is a standalone reboot. It focuses heavily on the 'Teenage' aspect of the characters, casting actual teenagers to voice the turtles for the first time to capture authentic adolescent banter and chemistry." },
        { question: "Who is the villain Superfly?", answer: "Superfly is an original mutant villain created for this film, voiced by Ice Cube. He serves as a dark mirror to the Turtles—a mutant who was also shunned by society but chose hatred and domination instead of heroism." }
    ],
    'The SpongeBob SquarePants Movie': [
        { question: "Is this the end of the series?", answer: "Originally, yes. Creator Stephen Hillenburg intended this 2004 movie to be the series finale. However, the show was so popular that Nickelodeon continued it, though Hillenburg stepped down as showrunner after the film's release." },
        { question: "What is the 'Goofy Goober' song?", answer: "The 'Goofy Goober Rock' song at the climax is a parody of Twisted Sister's 'I Wanna Rock.' It serves as SpongeBob's anthem of self-acceptance, embracing his immaturity as a strength rather than a weakness." },
        { question: "Why is David Hasselhoff in the movie?", answer: "David Hasselhoff makes a live-action cameo as himself, acting as a human speedboat to transport SpongeBob and Patrick back to Bikini Bottom. It is one of the film's most iconic and surreal moments." }
    ],
    'Sonic the Hedgehog 3': [
        { question: "Who voices Shadow the Hedgehog?", answer: "Keanu Reeves voices Shadow. Fans were thrilled with the casting, as Reeves brings the perfect mix of edgy brooding and action-hero gravitas that defines the character." },
        { question: "Do I need to see the first two movies?", answer: "While you can enjoy the action on its own, the film builds heavily on the relationships established in the first two movies, particularly the dynamic between Sonic, Tails, and Knuckles, as well as Dr. Robotnik's descent into madness." },
        { question: "Is Jim Carrey in this one?", answer: "Yes, Jim Carrey returns as Dr. Robotnik. He had previously considered retiring from acting, but returned for this third installment, likely to complete the character's arc." }
    ],
    'Dora and the Lost City of Gold': [
        { question: "Is this a parody of the cartoon?", answer: "It balances sincerity with self-aware humor. The film acknowledges the absurdity of the cartoon (like Dora talking to the camera) by placing her in a realistic high school setting, creating a 'fish out of water' comedy that respects the source material while having fun with it." },
        { question: "How old is Dora in the movie?", answer: "Dora is portrayed as a 16-year-old high school student, played by Isabela Merced. This ages up the character from her 7-year-old cartoon counterpart to appeal to a broader family audience." },
        { question: "Is Boots the Monkey in it?", answer: "Yes, Boots appears as a CGI character voiced by Danny Trejo. Unlike the cartoon, he behaves more like a realistic monkey for most of the film but has a surprising speaking moment." }
    ],
    'Sonic the Hedgehog 2': [
        { question: "Who voices Knuckles?", answer: "Idris Elba voices Knuckles the Echidna. His deep, serious voice provides a hilarious contrast to Knuckles' literal-mindedness and lack of understanding of Earth customs." },
        { question: "What is the Master Emerald?", answer: "The Master Emerald is an ancient relic of immense power that can turn thoughts into reality. It is the central MacGuffin of the film, sought by both Robotnik and Knuckles, and is a key element of Sonic lore." },
        { question: "Is there a post-credits scene?", answer: "Yes, the post-credits scene reveals Project Shadow, teasing the appearance of Shadow the Hedgehog, which sets up the plot for the third movie." }
    ],
    'Hey Arnold! The Jungle Movie': [
        { question: "Did this movie finally answer what happened to Arnold's parents?", answer: "Yes! This film was made specifically to resolve the biggest cliffhanger of the original series. It reveals that Arnold's parents were sleeping sickness victims in San Lorenzo, and the movie focuses on Arnold's quest to cure and wake them." },
        { question: "Why did it take so long to make?", answer: "The film was originally planned for the early 2000s but was shelved due to the underperformance of the 2002 Hey Arnold movie. Fan demand over the years convinced Nickelodeon to finally greenlight the project to give the series a proper finale." },
        { question: "Do Arnold and Helga get together?", answer: "Yes, the film finally addresses Helga's long-standing secret crush on Arnold, providing closure and a sweet resolution to their relationship dynamic." }
    ],
    'Sonic the Hedgehog': [
        { question: "Why was the Sonic design changed?", answer: "The original trailer featured a realistic Sonic design that was universally criticized for looking 'creepy.' The studio listened to fans, delayed the movie, and completely redesigned Sonic to look closer to his video game appearance. This move is credited with saving the franchise." },
        { question: "Is it suitable for young kids?", answer: "Yes, the film is rated PG and is very family-friendly. It focuses on friendship and fun, with mild action violence that avoids being too scary or intense." },
        { question: "What is the 'Olive Garden' joke?", answer: "The prominent placement of Olive Garden in the film (and the characters talking about it) became a meme. While likely product placement, it was written into the script as a recurring joke about the small-town sheriff's mundane life." }
    ],
    'PAW Patrol: The Movie': [
        { question: "Is this different from the TV show?", answer: "The movie has a much higher budget, better animation quality, and a more emotional story arc for Chase. It introduces a new setting (Adventure City) and a new character (Liberty), expanding the world beyond Adventure Bay." },
        { question: "Which pup is the main character?", answer: "While it's an ensemble film, Chase gets the primary emotional arc. The movie explores his backstory and PTSD from his time in the big city, teaching kids about overcoming fear and trusting friends." },
        { question: "Who is Liberty?", answer: "Liberty is a long-haired dachshund who lives in Adventure City. She is a street-smart, energetic new member of the PAW Patrol who helps the team navigate the city and eventually gets her own vehicle and uniform." }
    ],
    'PAW Patrol: The Mighty Movie': [
        { question: "What powers do the pups get?", answer: "The meteor gives them superpowers based on their skills: Chase gets super speed, Skye can fly (without her jetpack), Marshall has fireballs, Rubble becomes a wrecking ball, Zuma becomes liquid, and Rocky becomes a magnet." },
        { question: "Is it a sequel?", answer: "Yes, it is the direct sequel to the 2021 movie. It continues the story in Adventure City and retains the higher-quality animation style." },
        { question: "What is the lesson for kids?", answer: "The main theme focuses on Skye, the smallest pup, feeling undervalued. The movie teaches that 'even the smallest pup can make the biggest difference,' encouraging self-worth and confidence regardless of size." }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size] || 'w500'}${posterPath}`;
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'duration': `PT${movie.runtime}M`,
        'image': FALLBACK_POSTERS[movie.tmdbId] || '',
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
            'bestRating': 10, 
            'worstRating': 1 
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