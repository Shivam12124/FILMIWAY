// utils/survivalMovieData.js - COMPLETE SURVIVAL MOVIE DATA AND UTILITIES

// 🔥 COMPLETE SURVIVAL MOVIE DATABASE
export const SURVIVAL_MOVIE_DATABASE = [
  {
    id: 1,
    Title: "127 Hours",
    year: 2010,
    director: "Danny Boyle",
    Genre: "Survival Drama",
    imdbRating: 7.6,
    Runtime: "94 min",
    survivabilityIndex: 98,
    environment: "Utah Canyon",
    challenge: "Trapped Under Rock",
    Plot: "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.",
    Poster: "https://image.tmdb.org/t/p/w500/2fWl4WGEzfr3VbrqhZftLNdlL6Q.jpg",
    imdbID: "tt1542344",
    slug: "127-hours",
    rank: 1,
    survivabilityDescription: "127 Hours represents the ultimate test of human willpower and the lengths one will go to survive. Based on a true story, it showcases how extreme desperation can lead to unthinkable but necessary decisions.",
    themes: ["Isolation", "Determination", "Self-sacrifice", "True story"],
    basedOnTrueStory: true,
    contentWarnings: ["Intense amputation scene", "Psychological distress", "Claustrophobic situations"],
    filmingLocations: ["Utah, USA", "Moab, Utah"],
    awards: ["Academy Award nominations", "BAFTA nominations"]
  },
  {
    id: 2,
    Title: "Society of the Snow",
    year: 2023,
    director: "J.A. Bayona",
    Genre: "Survival Drama",
    imdbRating: 7.8,
    Runtime: "144 min",
    survivabilityIndex: 96,
    environment: "Andes Mountains",
    challenge: "Plane Crash Survival",
    Plot: "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.",
    Poster: "https://image.tmdb.org/t/p/w500/2e853FDVSIso600RqAMunPxiZjq.jpg",
    imdbID: "tt16277242",
    slug: "society-of-the-snow",
    rank: 2,
    survivabilityDescription: "Society of the Snow depicts one of the most famous survival stories in history, showcasing how ordinary people can endure extraordinary circumstances through teamwork and determination.",
    themes: ["Teamwork", "Hope", "Moral dilemmas", "True story"],
    basedOnTrueStory: true,
    contentWarnings: ["Disturbing survival decisions", "Death scenes", "Extreme cold conditions"],
    filmingLocations: ["Spain", "Argentina", "Chile"],
    awards: ["Netflix Film", "International recognition"]
  },
  {
    id: 3,
    Title: "Cast Away",
    year: 2000,
    director: "Robert Zemeckis",
    Genre: "Adventure Drama",
    imdbRating: 7.8,
    Runtime: "143 min",
    survivabilityIndex: 94,
    environment: "Desert Island",
    challenge: "Stranded Alone",
    Plot: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
    Poster: "https://image.tmdb.org/t/p/w500/iJYTZCPQb4YlL7j7C8VULdvWS0e.jpg",
    imdbID: "tt0162222",
    slug: "cast-away",
    rank: 3,
    survivabilityDescription: "Cast Away demonstrates the psychological toll of complete isolation while showcasing human ingenuity in creating tools, shelter, and companionship from nothing.",
    themes: ["Isolation", "Ingenuity", "Time", "Transformation"],
    basedOnTrueStory: false,
    contentWarnings: ["Psychological distress", "Self-harm scenes", "Intense isolation"],
    filmingLocations: ["Fiji", "Los Angeles, California"],
    awards: ["Academy Award nomination", "Golden Globe nomination"]
  },
  {
    id: 4,
    Title: "The Revenant",
    year: 2015,
    director: "Alejandro Iñárritu",
    Genre: "Adventure Drama",
    imdbRating: 8.0,
    Runtime: "156 min",
    survivabilityIndex: 93,
    environment: "Frozen Wilderness",
    challenge: "Bear Attack Recovery",
    Plot: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being brutally mauled by a bear.",
    Poster: "https://image.tmdb.org/t/p/w500/ji3yJBkuP6tWLVXzuaevhcrBiFJ.jpg",
    imdbID: "tt1663202",
    slug: "the-revenant",
    rank: 4,
    survivabilityDescription: "The Revenant showcases survival against impossible odds in harsh winter conditions, emphasizing human resilience and the primal drive for revenge as motivation to survive.",
    themes: ["Revenge", "Resilience", "Nature", "True story"],
    basedOnTrueStory: true,
    contentWarnings: ["Graphic bear attack", "Extreme violence", "Harsh weather conditions"],
    filmingLocations: ["Canada", "Argentina"],
    awards: ["Academy Awards", "BAFTA Awards", "Golden Globes"]
  },
  {
    id: 5,
    Title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    Genre: "Sci-Fi Drama",
    imdbRating: 8.0,
    Runtime: "144 min",
    survivabilityIndex: 91,
    environment: "Mars Surface",
    challenge: "Stranded on Mars",
    Plot: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    Poster: "https://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
    imdbID: "tt3659388",
    slug: "the-martian",
    rank: 5,
    survivabilityDescription: "The Martian represents survival through scientific knowledge and problem-solving, showing how education and resourcefulness can overcome even the most impossible circumstances.",
    themes: ["Science", "Ingenuity", "Optimism", "Problem-solving"],
    basedOnTrueStory: false,
    contentWarnings: ["Space isolation", "Medical procedures", "Life-threatening situations"],
    filmingLocations: ["Jordan", "Budapest, Hungary"],
    awards: ["Academy Award nominations", "Golden Globe Awards"]
  },
  {
    id: 6,
    Title: "The Impossible",
    year: 2012,
    director: "Juan Antonio Bayona",
    Genre: "Disaster Drama",
    imdbRating: 7.5,
    Runtime: "114 min",
    survivabilityIndex: 89,
    environment: "Tsunami Disaster",
    challenge: "Natural Disaster",
    Plot: "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
    Poster: "https://image.tmdb.org/t/p/w500/yGJWHAWQaGAPMTB8vDCIEzR8Fhi.jpg",
    imdbID: "tt1649419",
    slug: "the-impossible",
    rank: 6,
    survivabilityDescription: "The Impossible shows how natural disasters can separate families and test human endurance, while highlighting the power of hope and determination in the face of overwhelming destruction.",
    themes: ["Family", "Hope", "Natural disasters", "True story"],
    basedOnTrueStory: true,
    contentWarnings: ["Intense water sequences", "Injury scenes", "Family separation"],
    filmingLocations: ["Thailand", "Spain"],
    awards: ["Academy Award nomination", "BAFTA nominations"]
  },
  {
    id: 7,
    Title: "Jungle",
    year: 2017,
    director: "Greg McLean",
    Genre: "Adventure Thriller",
    imdbRating: 6.7,
    Runtime: "115 min",
    survivabilityIndex: 87,
    environment: "Amazon Rainforest",
    challenge: "Lost in Jungle",
    Plot: "A group of friends join a guide for a trek into the Bolivian jungle, searching for an Indian village.",
    Poster: "https://image.tmdb.org/t/p/w500/zDfcdVdmOFNKUjx6T6HnAW8Xe7P.jpg",
    imdbID: "tt3758172",
    slug: "jungle",
    rank: 7,
    survivabilityDescription: "Jungle explores survival in one of Earth's most hostile environments, where every plant, animal, and weather condition poses a deadly threat to human survival.",
    themes: ["Adventure", "Friendship", "Wilderness", "True story"],
    basedOnTrueStory: true,
    contentWarnings: ["Animal attacks", "Parasites", "Hallucinations"],
    filmingLocations: ["Colombia", "Australia"],
    awards: ["Independent film recognition"]
  },
  {
    id: 8,
    Title: "Apocalypto",
    year: 2006,
    director: "Mel Gibson",
    Genre: "Action Adventure",
    imdbRating: 7.8,
    Runtime: "139 min",
    survivabilityIndex: 85,
    environment: "Mayan Civilization",
    challenge: "Escape & Survival",
    Plot: "As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.",
    Poster: "https://image.tmdb.org/t/p/w500/iB4eVDuOsyY8xPXmyBGqSu6Yii6.jpg",
    imdbID: "tt0472043",
    slug: "apocalypto",
    rank: 8,
    survivabilityDescription: "Apocalypto combines survival with action as it follows one man's desperate flight through hostile territory, showcasing how survival instincts can overcome seemingly impossible odds.",
    themes: ["Ancient civilizations", "Family", "Chase", "Cultural decline"],
    basedOnTrueStory: false,
    contentWarnings: ["Graphic violence", "Ritual sacrifice", "Intense chase sequences"],
    filmingLocations: ["Mexico"],
    awards: ["Academy Award nominations", "Technical achievements"]
  },
  {
    id: 9,
    Title: "13 Lives",
    year: 2022,
    director: "Ron Howard",
    Genre: "Drama Thriller",
    imdbRating: 7.8,
    Runtime: "147 min",
    survivabilityIndex: 83,
    environment: "Flooded Cave",
    challenge: "Cave Rescue",
    Plot: "A rescue mission is assembled in Thailand where a group of young boys and their soccer coach are trapped in a system of underground caves that are flooding.",
    Poster: "https://image.tmdb.org/t/p/w500/6U3jZWJE3gHh8sxrWdI2kfJhSqV.jpg",
    imdbID: "tt12262116",
    slug: "13-lives",
    rank: 9,
    survivabilityDescription: "13 Lives demonstrates how survival sometimes depends on others, showcasing the incredible international effort to save the Thai soccer team trapped in flooded caves.",
    themes: ["Teamwork", "International cooperation", "Cave diving", "True story"],
    basedOnTrueStory: true,
    contentWarnings: ["Claustrophobic scenes", "Drowning danger", "High tension"],
    filmingLocations: ["Thailand", "Australia"],
    awards: ["Cinematography recognition", "Technical achievement"]
  },
  {
    id: 10,
    Title: "Unbroken",
    year: 2014,
    director: "Angelina Jolie",
    Genre: "War Drama",
    imdbRating: 7.2,
    Runtime: "137 min",
    survivabilityIndex: 82,
    environment: "Pacific Ocean",
    challenge: "War Survival",
    Plot: "After a near-fatal plane crash in WWII, Olympian Louis Zamperini spends a harrowing 47 days in a raft with two fellow crewmen before he's caught by the Japanese navy.",
    Poster: "https://image.tmdb.org/t/p/w500/rI3U8EZDb5qCfWBLPj5yvI9h2p1.jpg",
    imdbID: "tt1809398",
    slug: "unbroken",
    rank: 10,
    survivabilityDescription: "Unbroken tells the incredible true story of resilience and survival during WWII, showing how the human spirit can endure both physical and psychological torture.",
    themes: ["War", "Perseverance", "Olympics", "True story"],
    basedOnTrueStory: true,
    contentWarnings: ["War violence", "Prisoner of war scenes", "Psychological torture"],
    filmingLocations: ["Australia", "Hawaii"],
    awards: ["Academy Award nominations", "Cinematography awards"]
  }
];

// 🔥 SURVIVAL MOVIE UTILITIES
export const getSurvivalMovieBySlug = (slug) => {
  return SURVIVAL_MOVIE_DATABASE.find(movie => movie.slug === slug);
};

export const getSurvivalMovieByImdbId = (imdbId) => {
  return SURVIVAL_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

export const getSurvivalMoviesByEnvironment = (environment) => {
  return SURVIVAL_MOVIE_DATABASE.filter(movie => 
    movie.environment.toLowerCase().includes(environment.toLowerCase())
  );
};

export const getSurvivalMoviesBySurvivabilityIndex = (minIndex = 0, maxIndex = 100) => {
  return SURVIVAL_MOVIE_DATABASE.filter(movie => 
    movie.survivabilityIndex >= minIndex && movie.survivabilityIndex <= maxIndex
  );
};

export const getTopSurvivalMovies = (limit = 5) => {
  return SURVIVAL_MOVIE_DATABASE
    .sort((a, b) => b.survivabilityIndex - a.survivabilityIndex)
    .slice(0, limit);
};

// 🔥 SURVIVAL-SPECIFIC CATEGORIES
export const SURVIVAL_ENVIRONMENTS = {
  wilderness: ['Utah Canyon', 'Frozen Wilderness', 'Amazon Rainforest'],
  water: ['Desert Island', 'Pacific Ocean', 'Tsunami Disaster'],
  mountains: ['Andes Mountains', 'Frozen Wilderness'],
  space: ['Mars Surface'],
  underground: ['Flooded Cave'],
  civilization: ['Mayan Civilization']
};

export const SURVIVAL_CHALLENGES = {
  natural: ['Trapped Under Rock', 'Bear Attack Recovery', 'Natural Disaster'],
  isolation: ['Stranded Alone', 'Stranded on Mars'],
  manMade: ['War Survival', 'Escape & Survival'],
  group: ['Plane Crash Survival', 'Cave Rescue', 'Lost in Jungle']
};

// 🔥 SLUG TO TITLE MAPPING FOR SSG
export const SURVIVAL_SLUG_TO_TITLE = {
  "127-hours": "127 Hours",
  "society-of-the-snow": "Society of the Snow",
  "cast-away": "Cast Away",
  "the-revenant": "The Revenant",
  "the-martian": "The Martian",
  "the-impossible": "The Impossible",
  "jungle": "Jungle",
  "apocalypto": "Apocalypto",
  "13-lives": "13 Lives",
  "unbroken": "Unbroken"
};

export default SURVIVAL_MOVIE_DATABASE;
