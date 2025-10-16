// utils/survivalMovieData.js - FINAL VERSION WITH FAQ DATA ✅

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 44115, "imdbID": "tt1542344", "Title": "127 Hours", "year": 2010, "genre": "Drama", "runtime": 94, "rank": 1 },
    { "tmdbId": 906126, "imdbID": "tt16277242", "Title": "Society of the Snow", "year": 2023, "genre": "Drama", "runtime": 144, "rank": 2 },
    { "tmdbId": 8358, "imdbID": "tt0162222", "Title": "Cast Away", "year": 2000, "genre": "Adventure", "runtime": 143, "rank": 3 },
    { "tmdbId": 281957, "imdbID": "tt1663202", "Title": "The Revenant", "year": 2015, "genre": "Adventure", "runtime": 156, "rank": 4 },
    { "tmdbId": 286217, "imdbID": "tt3659388", "Title": "The Martian", "year": 2015, "genre": "Sci-Fi", "runtime": 144, "rank": 5 },
    { "tmdbId": 80278, "imdbID": "tt1649419", "Title": "The Impossible", "year": 2012, "genre": "Drama", "runtime": 114, "rank": 6 },
    { "tmdbId": 390062, "imdbID": "tt3758172", "Title": "Jungle", "year": 2017, "genre": "Adventure", "runtime": 115, "rank": 7 },
    { "tmdbId": 1579, "imdbID": "tt0472043", "Title": "Apocalypto", "year": 2006, "genre": "Action", "runtime": 139, "rank": 8 },
    { "tmdbId": 698948, "imdbID": "tt12262116", "Title": "13 Lives", "year": 2022, "genre": "Drama", "runtime": 147, "rank": 9 },
    { "tmdbId": 227306, "imdbID": "tt1809398", "Title": "Unbroken", "year": 2014, "genre": "Drama", "runtime": 137, "rank": 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

export const SENSITIVE_TIMELINES = {
    44115: { scenes: [{ start: "1:04:35", end: "1:04:50", type: "Bikini scene", severity: "Mild" }, { start: "1:33:41", end: "1:35:10", type: "Partial undressing", severity: "Mild" }] },
    906126: { scenes: [{ start: "0:03:07", end: "0:03:10", type: "Nudity", severity: "Moderate", description: "Nude man in background" }] },
    8358: { scenes: [{ start: "Various", end: "Various", type: "Kissing", severity: "Mild", description: "A few casual kissing scenes" }] },
    281957: { scenes: [{ start: "0:06:44", end: "0:06:48", type: "Nudity", severity: "Moderate", description: "Male buttocks" }, { start: "1:44:00", end: "1:44:23", type: "Sex scene", severity: "Moderate" }] },
    286217: { scenes: [{ start: "1:44:55", end: "1:45:08", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }] },
    80278: { scenes: [{ start: "0:05:45", end: "0:05:52", type: "Partial nudity", severity: "Mild", description: "Non-sexual" }, { start: "0:22:10", end: "0:22:22", type: "Partial nudity", severity: "Mild", description: "Non-sexual" }, { start: "0:37:37", end: "0:37:45", type: "Nudity", severity: "Mild", description: "Not sexualized" }, { start: "0:37:52", end: "0:37:57", type: "Nudity", severity: "Mild", description: "Not sexualized" }, { start: "0:41:28", end: "0:41:32", type: "Partial nudity", severity: "Mild", description: "Non-sexual" }] },
    390062: { scenes: [{ start: "0:06:38", end: "0:06:43", type: "Kissing", severity: "Mild" }, { start: "0:12:04", end: "0:12:06", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }, { start: "1:19:10", end: "1:19:20", type: "Partial undressing", severity: "Mild" }] },
    1579: { scenes: [{ start: "0:17:10", end: "0:18:10", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }] },
    698948: { scenes: [] },
    227306: { scenes: [{ start: "0:13:40", end: "0:13:45", type: "Partial nudity", severity: "Mild", description: "Female buttocks" }, { start: "1:07:45", end: "1:08:37", type: "Partial nudity", severity: "Mild", description: "Male buttocks" }] }
};

export const FALLBACK_POSTERS = {
    44115: "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE4ODM3Mw@@._V1_SX500.jpg",
    906126: "https://m.media-amazon.com/images/M/MV5BYzJkZjlmMmQtMGVmYS00OGY3LTlhOTAtNzJjNzQxYWJiNDVkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX500.jpg",
    8358: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg2LWE3NWMtYTU5OTEwZDlmMjMzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    281957: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX500.jpg",
    286217: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX500.jpg",
    80278: "https://m.media-amazon.com/images/M/MV5BMjAyNzk5MzgyNl5BMl5BanBnXkFtZTcwODMyNTgzOA@@._V1_SX500.jpg",
    390062: "https://m.media-amazon.com/images/M/MV5BMjI2MDM1NzU2NV5BMl5BanBnXkFtZTgwNTM2NzQ0MzI@._V1_SX500.jpg",
    1579: "https://m.media-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX500.jpg",
    698948: "https://m.media-amazon.com/images/M/MV5BYjFkYTZjNWYtY2Y3Ny00ZmJkLTg2NGYtNzBkNzVlMWY3MzUzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX500.jpg",
    227306: "https://m.media-amazon.com/images/M/MV5BMTQxNzE4MTY1MV5BMl5BanBnXkFtZTgwNDIzNjI4MzE@._V1_SX500.jpg"
};

const createMovieData = (data) => data;

export const COMPLETE_MOVIE_DATA = {
    44115: createMovieData({ survivabilityIndex: 95, complexityLevel: "EXTREME", dominantColor: "#dc2626", rating: 7.5, criticsScore: 93, audienceScore: 85, director: "Danny Boyle", cast: ["James Franco", "Amber Tamblyn", "Kate Mara"], boxOffice: "$60.7 million", budget: "$18 million", dna: { "Drama": 60, "Thriller": 30, "Action": 10 }, scenes: [{ time: 10, intensity: 30, label: "Hiking", color: "#dc2626" }, { time: 25, intensity: 50, label: "Trapped", color: "#ef4444" }, { time: 45, intensity: 75, label: "Desperation", color: "#f87171" }, { time: 65, intensity: 95, label: "Amputation", color: "#fca5a5" }, { time: 85, intensity: 60, label: "Escape", color: "#fecaca" }], synopsis: "When adventure-seeking mountain climber Aron Ralston ventures into Utah's remote Blue John Canyon alone, he never imagines the nightmare awaiting him. A dislodged boulder pins his arm against the canyon wall, leaving him completely trapped with dwindling water and no hope of rescue. Over the next 127 excruciating hours, Aron must make impossible choices as dehydration, hallucinations, and despair close in. Danny Boyle's visceral masterpiece captures the raw human will to survive when faced with the ultimate decision: lose an arm or lose everything. This is survival stripped to its most primal, terrifying core.", themes: ["Human Endurance", "Survival Instinct", "Self-Sacrifice", "Will to Live"], awards: ["Academy Award Nominations", "BAFTA Winner"] }),
    906126: createMovieData({ survivabilityIndex: 92, complexityLevel: "EXTREME", dominantColor: "#1e40af", rating: 7.8, criticsScore: 90, audienceScore: 88, director: "J.A. Bayona", cast: ["Enzo Vogrincic", "Agustín Pardella", "Matías Recalt"], boxOffice: "$2.1 million", budget: "$60 million", dna: { "Drama": 70, "Adventure": 20, "Thriller": 10 }, scenes: [{ time: 15, intensity: 25, label: "Flight", color: "#1e40af" }, { time: 30, intensity: 85, label: "Crash", color: "#3b82f6" }, { time: 60, intensity: 70, label: "Search", color: "#60a5fa" }, { time: 90, intensity: 90, label: "Avalanche", color: "#93c5fd" }, { time: 120, intensity: 75, label: "Rescue", color: "#dbeafe" }], synopsis: "In 1972, a Uruguayan rugby team's chartered flight crashes high in the frozen Andes Mountains. Stranded at 12,000 feet with no food, sub-zero temperatures, and little hope of rescue, the survivors face an impossible moral dilemma that will haunt them forever. As days turn to weeks and an avalanche buries their shelter, they must make choices that test the very boundaries of human civilization and survival instinct. J.A. Bayona delivers a devastating, unflinching portrait of what humans become when pushed beyond all imaginable limits. This is survival at its most morally complex and emotionally devastating.", themes: ["Group Survival", "Human Sacrifice", "Faith", "Brotherhood"], awards: ["Venice Film Festival", "Goya Awards"] }),
    8358: createMovieData({ survivabilityIndex: 88, complexityLevel: "HIGH", dominantColor: "#059669", rating: 7.8, criticsScore: 94, audienceScore: 90, director: "Robert Zemeckis", cast: ["Tom Hanks", "Helen Hunt", "Chris Noth"], boxOffice: "$429.6 million", budget: "$90 million", dna: { "Drama": 50, "Adventure": 30, "Romance": 20 }, scenes: [{ time: 20, intensity: 60, label: "Crash", color: "#059669" }, { time: 45, intensity: 40, label: "Island Life", color: "#10b981" }, { time: 70, intensity: 65, label: "Wilson", color: "#34d399" }, { time: 100, intensity: 80, label: "Raft", color: "#6ee7b7" }, { time: 130, intensity: 70, label: "Rescue", color: "#a7f3d0" }], synopsis: "FedEx executive Chuck Noland's obsession with time control becomes bitterly ironic when a plane crash strands him on an uninhabited Pacific island. Completely alone except for the tide and a volleyball he names Wilson, Chuck must reinvent every aspect of human existence from scratch—making fire, finding food, and most crucially, finding reasons to keep living when rescue seems impossible. Zemeckis crafts a profound meditation on isolation where survival isn't just about staying alive, but maintaining sanity and hope across four brutally lonely years. This is Robinson Crusoe for the modern age, examining what we become when everything familiar is stripped away.", themes: ["Isolation", "Adaptation", "Lost Love", "Human Resilience"], awards: ["Academy Award Nomination", "Golden Globe Winner"] }),
    281957: createMovieData({ survivabilityIndex: 90, complexityLevel: "HIGH", dominantColor: "#0f172a", rating: 8.0, criticsScore: 78, audienceScore: 83, director: "Alejandro G. Iñárritu", cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"], boxOffice: "$533 million", budget: "$135 million", dna: { "Adventure": 50, "Drama": 30, "Action": 20 }, scenes: [{ time: 15, intensity: 40, label: "Hunt", color: "#0f172a" }, { time: 45, intensity: 85, label: "Bear Attack", color: "#1e293b" }, { time: 80, intensity: 70, label: "Betrayal", color: "#334155" }, { time: 120, intensity: 90, label: "River", color: "#475569" }, { time: 150, intensity: 95, label: "Revenge", color: "#64748b" }], synopsis: "In the brutal winter of 1823, legendary fur trapper Hugh Glass is savagely mauled by a grizzly bear and left for dead by his own hunting party in the frozen American frontier. With a shattered leg, exposed ribs, and 200 miles of hostile wilderness between him and civilization, Glass crawls, drags, and claws his way toward revenge and redemption. Iñárritu's unrelenting masterpiece—shot in natural light across frozen landscapes—captures survival as a primal, almost spiritual war against nature, betrayal, and death itself. DiCaprio's Oscar-winning performance defines what it means to refuse to die. This is vengeance and survival merged into one unstoppable force.", themes: ["Revenge", "Survival", "Nature's Power", "Human Betrayal"], awards: ["Academy Award Winner", "BAFTA Winner"] }),
    286217: createMovieData({ survivabilityIndex: 85, complexityLevel: "MEDIUM", dominantColor: "#dc2626", rating: 8.0, criticsScore: 91, audienceScore: 92, director: "Ridley Scott", cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"], boxOffice: "$630.2 million", budget: "$108 million", dna: { "Sci-Fi": 60, "Adventure": 25, "Drama": 15 }, scenes: [{ time: 15, intensity: 50, label: "Storm", color: "#dc2626" }, { time: 45, intensity: 30, label: "Potatoes", color: "#ef4444" }, { time: 80, intensity: 65, label: "Communication", color: "#f87171" }, { time: 120, intensity: 85, label: "Rescue Plan", color: "#fca5a5" }, { time: 140, intensity: 90, label: "Launch", color: "#fecaca" }], synopsis: "When a catastrophic dust storm forces his crew to evacuate Mars, astronaut Mark Watney is impaled, presumed dead, and left behind on the most hostile planet imaginable. But Watney isn't dead—he's stranded alone, 140 million miles from Earth, with only enough supplies for 31 days and no way to communicate with home. Armed with nothing but ingenuity, humor, and an unshakeable will to survive, he must 'science the shit' out of his situation—growing food in Martian soil, creating water from rocket fuel, and MacGyvering 1970s technology to call Earth. Ridley Scott turns survival into a celebration of human intelligence, persistence, and disco music.", themes: ["Scientific Problem-Solving", "Optimism", "Human Ingenuity", "International Cooperation"], awards: ["Academy Award Nominations", "Golden Globe Winner"] }),
    80278: createMovieData({ survivabilityIndex: 85, complexityLevel: "HIGH", dominantColor: "#0284c7", rating: 7.5, criticsScore: 81, audienceScore: 85, director: "J.A. Bayona", cast: ["Naomi Watts", "Tom Holland", "Ewan McGregor"], boxOffice: "$198.1 million", budget: "$45 million", dna: { "Drama": 70, "Thriller": 20, "Adventure": 10 }, scenes: [{ time: 10, intensity: 20, label: "Paradise", color: "#0284c7" }, { time: 25, intensity: 95, label: "Tsunami", color: "#0ea5e9" }, { time: 60, intensity: 80, label: "Separated", color: "#38bdf8" }, { time: 90, intensity: 70, label: "Hospital", color: "#7dd3fc" }, { time: 110, intensity: 85, label: "Reunion", color: "#bae6fd" }], synopsis: "Christmas 2004. A family's dream vacation in Thailand becomes an unthinkable nightmare when the deadliest tsunami in recorded history strikes without warning. In seconds, paradise transforms into an apocalyptic waterscape as 100-foot walls of water obliterate everything in their path. Torn apart by the crushing waves, mother Maria and eldest son Lucas fight desperately through floating debris, corpses, and collapsing buildings to find each other—and somehow, impossibly, reunite their shattered family. Bayona's emotionally devastating true story captures survival not as individual triumph, but as a family's refusal to accept loss even when nature destroys everything.", themes: ["Family Bond", "Natural Disaster", "Hope", "Human Kindness"], awards: ["Academy Award Nomination", "European Film Awards"] }),
    390062: createMovieData({ survivabilityIndex: 82, complexityLevel: "MEDIUM", dominantColor: "#15803d", rating: 6.7, criticsScore: 85, audienceScore: 75, director: "Greg McLean", cast: ["Daniel Radcliffe", "Alex Russell", "Thomas Kretschmann"], boxOffice: "$1.2 million", budget: "$10 million", dna: { "Adventure": 60, "Drama": 25, "Thriller": 15 }, scenes: [{ time: 15, intensity: 25, label: "Journey Begins", color: "#15803d" }, { time: 45, intensity: 50, label: "Lost", color: "#16a34a" }, { time: 70, intensity: 75, label: "Alone", color: "#22c55e" }, { time: 95, intensity: 85, label: "Desperation", color: "#4ade80" }, { time: 110, intensity: 60, label: "Rescue", color: "#86efac" }], synopsis: "Seeking adventure in 1981 Bolivia, Israeli backpacker Yossi Ghinsberg and three friends hire a mysterious guide into the uncharted Amazon rainforest. When the expedition fractures and disaster strikes, Yossi finds himself utterly alone in the planet's most hostile ecosystem—no map, no food, no hope. For 19 days, he battles venomous insects, infected wounds, jaguars prowling in the darkness, and creeping madness while the jungle slowly consumes him. Daniel Radcliffe delivers a career-defining performance in this true story that reveals the Amazon not as beautiful wilderness, but as a living entity determined to kill.", themes: ["Friendship Tested", "Jungle Survival", "Trust", "Human Limits"], awards: ["Australian Film Institute", "Independent Film Recognition"] }),
    1579: createMovieData({ survivabilityIndex: 88, complexityLevel: "HIGH", dominantColor: "#7c2d12", rating: 7.8, criticsScore: 65, audienceScore: 78, director: "Mel Gibson", cast: ["Rudy Youngblood", "Dalia Hernández", "Jonathan Brewer"], boxOffice: "$120.7 million", budget: "$40 million", dna: { "Action": 60, "Adventure": 25, "Drama": 15 }, scenes: [{ time: 20, intensity: 30, label: "Village Life", color: "#7c2d12" }, { time: 50, intensity: 80, label: "Capture", color: "#a16207" }, { time: 90, intensity: 70, label: "Sacrifice", color: "#ca8a04" }, { time: 120, intensity: 95, label: "Chase", color: "#eab308" }, { time: 135, intensity: 85, label: "Home", color: "#facc15" }], synopsis: "As the mighty Mayan civilization crumbles under corruption and violence, peaceful villager Jaguar Paw watches raiders destroy his home, murder his father, and drag him toward the sacrificial pyramids. Escaping from the altar's edge with obsidian knives at his throat, he plunges into the unforgiving jungle with an army of warriors hunting him like prey. Gibson crafts a relentless, primal chase where survival means outrunning, outsmarting, and out-fighting trained killers across brutal terrain. Shot entirely in Yucatec Maya, this visceral masterpiece strips civilization away to reveal survival as pure, desperate instinct—run, hide, or die.", themes: ["Cultural Collapse", "Family Protection", "Chase Survival", "Ancient Civilizations"], awards: ["Academy Award Nominations", "Saturn Award Winner"] }),
    698948: createMovieData({ survivabilityIndex: 80, complexityLevel: "MEDIUM", dominantColor: "#0c4a6e", rating: 7.8, criticsScore: 75, audienceScore: 82, director: "Ron Howard", cast: ["Viggo Mortensen", "Colin Farrell", "Joel Edgerton"], boxOffice: "$2.3 million", budget: "$55 million", dna: { "Drama": 60, "Thriller": 25, "Adventure": 15 }, scenes: [{ time: 20, intensity: 40, label: "Cave Entry", color: "#0c4a6e" }, { time: 50, intensity: 60, label: "Trapped", color: "#0284c7" }, { time: 90, intensity: 80, label: "Diving", color: "#0ea5e9" }, { time: 120, intensity: 90, label: "Rescue", color: "#38bdf8" }, { time: 145, intensity: 70, label: "Success", color: "#7dd3fc" }], synopsis: "In June 2018, twelve boys and their soccer coach enter Thailand's Tham Luang cave system—and disappear. When monsoon floods trap them miles underground in total darkness with oxygen running out, the world watches as the clock ticks down to certain death. What follows is the most complex rescue operation ever attempted: elite cave divers must navigate flooded passages so narrow and dangerous that even experienced divers have died there. Ron Howard's gripping true story reveals survival as a global effort where expert divers risk their own lives in pitch-black water to save thirteen strangers. This is heroism at its most selfless.", themes: ["International Cooperation", "Heroism", "Cave Rescue", "Team Effort"], awards: ["Critics Choice Award", "Screen Actors Guild"] }),
    227306: createMovieData({ survivabilityIndex: 88, complexityLevel: "HIGH", dominantColor: "#581c87", rating: 7.2, criticsScore: 51, audienceScore: 68, director: "Angelina Jolie", cast: ["Jack O'Connell", "Miyavi", "Domhnall Gleeson"], boxOffice: "$163.4 million", budget: "$65 million", dna: { "Drama": 65, "Action": 20, "Adventure": 15 }, scenes: [{ time: 15, intensity: 35, label: "Olympics", color: "#581c87" }, { time: 40, intensity: 70, label: "Plane Crash", color: "#7c3aed" }, { time: 80, intensity: 85, label: "Raft", color: "#8b5cf6" }, { time: 110, intensity: 90, label: "Prison Camp", color: "#a78bfa" }, { time: 135, intensity: 75, label: "Liberation", color: "#c4b5fd" }], synopsis: "Olympic runner Louis Zamperini's life becomes a cascade of survival nightmares when his bomber crashes into the Pacific during WWII. Adrift on a raft for 47 agonizing days with sharks circling and starvation closing in, he and two crewmates endure the unendurable—only to be captured by the Japanese navy and thrown into the most brutal POW camps of the war. There, a sadistic officer targets Louis personally, trying to break his unbreakable spirit through starvation, beatings, and psychological torture. Jolie's powerful film reveals survival as an act of defiance where refusing to surrender your humanity becomes the ultimate victory.", themes: ["Forgiveness", "Faith", "Endurance", "War Survival"], awards: ["Academy Award Nominations", "NAACP Image Award"] })
};

export const STRATEGIC_QUOTES = {
    44115: "Sometimes you have to lose yourself to find yourself", 906126: "We came here as strangers, we leave as brothers",
    8358: "I know what I have to do now", 281957: "As long as you can still grab a breath, you fight", 
    286217: "I'm going to have to science the shit out of this", 80278: "The impossible is just an opinion", 
    390062: "When you can't walk, you crawl", 1579: "I am Jaguar Paw, son of Flint Sky", 
    698948: "Thirteen lives were saved", 227306: "A moment of pain is worth a lifetime of glory"
};

export const CINEMATIC_COLORS = {
    "Drama": "#dc2626", "Adventure": "#059669", "Thriller": "#0f172a", "Action": "#7c2d12", "Sci-Fi": "#dc2626", "Romance": "#be185d"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

// 🔥 FAQ DATA FOR ALL SURVIVAL MOVIES
export const SURVIVAL_MOVIE_FAQS = {
    '127 Hours': [
        { question: "Is 127 Hours based on a true story?", answer: "Yes, 127 Hours is based on the true story of Aron Ralston, an American outdoorsman who became trapped by a boulder in Blue John Canyon, Utah, in 2003. After being stuck for 127 hours with no hope of rescue, he made the agonizing decision to amputate his own arm using a dull multi-tool knife to save his life." },
        { question: "How accurate is the movie 127 Hours?", answer: "The film is remarkably accurate to Ralston's real experience. Director Danny Boyle worked closely with Aron Ralston, who served as a consultant. The canyon scenes were filmed at the actual location, and many details including the hallucinations, video diary entries, and the self-amputation process closely match Ralston's memoir 'Between a Rock and a Hard Place.'" },
        { question: "Is 127 Hours difficult to watch?", answer: "Yes, particularly the amputation scene which is graphic and intense. The film is rated R for its realistic depiction of self-surgery. However, the sequence lasts only about 5 minutes of the 94-minute runtime. The movie focuses more on Ralston's psychological journey, resourcefulness, and will to survive." },
        { question: "Where can I watch 127 Hours?", answer: "127 Hours (2010) is available for streaming on various platforms including Amazon Prime Video, Apple TV, and Google Play Movies. Availability may vary by region. You can also rent or purchase it on most major digital platforms." }
    ],
    'Society of the Snow': [
        { question: "Is Society of the Snow based on a true story?", answer: "Yes, Society of the Snow depicts the 1972 Andes flight disaster where Uruguayan Air Force Flight 571 crashed in the Andes mountains. Of the 45 passengers, only 16 survived after 72 days in freezing conditions. The survivors were forced to resort to cannibalism to stay alive, eating the bodies of deceased passengers." },
        { question: "What's the difference between Society of the Snow and Alive (1993)?", answer: "Both films tell the same true story, but Society of the Snow (2023) is told from the perspective of Numa Turcatti and focuses more authentically on the Uruguayan survivors' experience. It's in Spanish, more faithful to the actual events, and includes more emotional depth about the moral dilemmas the survivors faced. Alive was more Hollywood-ized." },
        { question: "How did the survivors of the Andes plane crash survive?", answer: "The 16 survivors endured by rationing airplane food initially, melting snow for water, and eventually eating the frozen remains of deceased passengers. They created shelter in the fuselage, worked as a team, and after 72 days, two survivors hiked 10 days through the mountains to find help and organize a rescue." },
        { question: "Where can I watch Society of the Snow?", answer: "Society of the Snow (2023) is a Netflix original film, available exclusively on Netflix worldwide. It's presented in Spanish with English subtitles and dubbed versions available." }
    ],
    'Cast Away': [
        { question: "Is Cast Away based on a true story?", answer: "No, Cast Away is not based on a specific true story, but it was inspired by real survival stories and the concept of modern man stripped of all technology and conveniences. The film explores what would happen if someone from our connected world was suddenly isolated with nothing but their ingenuity." },
        { question: "How long was Tom Hanks stranded in Cast Away?", answer: "In the movie, Chuck Noland (Tom Hanks) is stranded on the deserted island for 4 years. The film famously paused production for a year to allow Tom Hanks to lose 50 pounds and grow out his hair and beard to authentically portray the passage of time and physical toll of isolation." },
        { question: "What does Wilson the volleyball symbolize?", answer: "Wilson represents Chuck's desperate need for human connection and his psychological survival strategy. The volleyball becomes his companion, therapist, and link to sanity. When Wilson is lost at sea, it represents one of the most devastating emotional moments in the film, showing how crucial even an imaginary relationship was to Chuck's mental survival." },
        { question: "Where can I watch Cast Away?", answer: "Cast Away (2000) is available on multiple streaming platforms including Paramount+, Amazon Prime Video (rental/purchase), Apple TV, and Google Play Movies. Availability varies by region." }
    ],
    'The Revenant': [
        { question: "Is The Revenant based on a true story?", answer: "Yes, The Revenant is loosely based on the true story of Hugh Glass, an American frontiersman who was mauled by a grizzly bear in 1823 and left for dead by his companions. Glass survived and traveled over 200 miles through the wilderness, driven by revenge. However, the film takes significant creative liberties with the historical account." },
        { question: "Did Leonardo DiCaprio really eat raw bison liver?", answer: "Yes, Leonardo DiCaprio actually ate raw bison liver for the film, despite being a vegetarian. This was part of his extreme commitment to authenticity in portraying Hugh Glass's brutal survival. The production used only natural lighting and filmed in extreme cold weather conditions to achieve realism." },
        { question: "How cold was it during The Revenant filming?", answer: "The production filmed in temperatures as low as -40°F (-40°C) in remote locations in Canada and Argentina. The crew could only shoot for short periods due to extreme conditions, and the entire production had to relocate from Canada to Argentina to find snow when temperatures warmed unexpectedly." },
        { question: "Where can I watch The Revenant?", answer: "The Revenant (2015) is available on Disney+, Amazon Prime Video (rental/purchase), Apple TV, and Google Play Movies. It's also occasionally available on HBO Max and other streaming services depending on licensing agreements." }
    ],
    'The Martian': [
        { question: "Is The Martian scientifically accurate?", answer: "The Martian is praised for its scientific accuracy, though not perfect. NASA scientists consulted on the film, and most of the survival techniques (growing potatoes, creating water, using math for trajectories) are plausible. The main inaccuracy is the initial dust storm - Mars's thin atmosphere couldn't generate winds strong enough to tip a rocket." },
        { question: "How long was Mark Watney stranded on Mars?", answer: "Mark Watney was stranded alone on Mars for approximately 560 sols (Martian days), which equals about 575 Earth days or roughly 18 months. He survived by rationing food, growing potatoes using human waste as fertilizer, and using chemistry to create water." },
        { question: "Could someone actually survive on Mars like in The Martian?", answer: "With the right equipment and resources, much of what Mark Watney did is theoretically possible. Growing food in Martian soil (with Earth bacteria), creating water from hydrazine, and using solar power are all scientifically sound concepts. However, the psychological toll of complete isolation and numerous technical challenges would make actual survival extremely difficult." },
        { question: "Where can I watch The Martian?", answer: "The Martian (2015) is available on multiple platforms including Amazon Prime Video, Apple TV, Google Play Movies, and occasionally on streaming services like Disney+ or Hulu depending on your region and licensing agreements." }
    ],
    'The Impossible': [
        { question: "Is The Impossible based on a true story?", answer: "Yes, The Impossible is based on the true story of María Belón and her family who survived the 2004 Indian Ocean tsunami in Khao Lak, Thailand. The film accurately depicts their separation, injuries, and miraculous reunion. The real María Belón served as a consultant, and the film stays remarkably faithful to their experience." },
        { question: "How accurate is the tsunami scene in The Impossible?", answer: "The tsunami sequence is considered one of the most accurate and terrifying depictions of a tsunami ever filmed. The production built massive water tanks and used thousands of gallons of water. Naomi Watts and Tom Holland performed many stunts themselves. Survivors of the 2004 tsunami praised the film for capturing the chaos, violence, and terror of the actual event." },
        { question: "How many people died in the 2004 tsunami?", answer: "The 2004 Indian Ocean tsunami killed approximately 230,000 people across 14 countries, making it one of the deadliest natural disasters in recorded history. The tsunami was triggered by a magnitude 9.1-9.3 earthquake off the coast of Sumatra, Indonesia." },
        { question: "Where can I watch The Impossible?", answer: "The Impossible (2012) is available on Netflix in many regions, as well as Amazon Prime Video (rental/purchase), Apple TV, and Google Play Movies. Availability varies by country." }
    ],
    'Jungle': [
        { question: "Is Jungle based on a true story?", answer: "Yes, Jungle is based on the true story of Israeli adventurer Yossi Ghinsberg, who got lost in the Bolivian Amazon rainforest for 19 days in 1981. The film is adapted from his memoir 'Jungle: A Harrowing True Story of Survival.' Ghinsberg survived starvation, infections, wild animals, and hallucinations before being rescued." },
        { question: "What happened to Yossi Ghinsberg in the jungle?", answer: "After his raft broke apart on rapids, Ghinsberg was separated from his companion and spent 19 days alone fighting for survival. He endured trench foot, infected wounds, starvation, encounters with jaguars, fire ants, and powerful hallucinations. He survived by eating fruits, raw eggs, and whatever he could find while following the river downstream." },
        { question: "Did Daniel Radcliffe actually eat a worm in Jungle?", answer: "Yes, Daniel Radcliffe confirmed he ate a real worm for the film to authentically portray Ghinsberg's desperation. He committed to the role's physical demands, losing weight and performing many intense scenes in difficult jungle conditions to capture the raw, visceral nature of survival." },
        { question: "Where can I watch Jungle?", answer: "Jungle (2017) is available on Amazon Prime Video, Apple TV, Google Play Movies, and other digital rental platforms. Availability depends on your region." }
    ],
    'Apocalypto': [
        { question: "Is Apocalypto historically accurate?", answer: "Apocalypto takes creative liberties with Mayan history. While it captures the brutality of human sacrifice and the collapse of Mayan civilization, historians note several inaccuracies: the mixing of different time periods, exaggerated savagery, and the implication that Spanish arrival was salvation. The film prioritizes thrilling storytelling over strict historical accuracy." },
        { question: "What language is spoken in Apocalypto?", answer: "Apocalypto is spoken entirely in Yucatec Maya, an indigenous Mayan language still spoken today. Mel Gibson chose to use the authentic language with subtitles to increase realism and immersion. The cast included Native American and indigenous Mexican actors, though few spoke Yucatec Maya natively." },
        { question: "What is the meaning behind Apocalypto?", answer: "The title 'Apocalypto' comes from the Greek word meaning 'revelation' or 'new beginning.' The film explores themes of civilization collapse, survival against impossible odds, and the cyclical nature of violence. The ending, with Spanish ships arriving, suggests one apocalypse (Mayan collapse) leading to another (Spanish conquest)." },
        { question: "Where can I watch Apocalypto?", answer: "Apocalypto (2006) is available on Amazon Prime Video, Apple TV, Google Play Movies, and Vudu. It's also occasionally available on streaming services like Paramount+ or other platforms depending on regional licensing." }
    ],
    '13 Lives': [
        { question: "Is 13 Lives based on a true story?", answer: "Yes, 13 Lives depicts the 2018 Tham Luang cave rescue in Thailand, where 12 boys from a youth soccer team and their coach were trapped in a flooded cave for 18 days. The film accurately portrays the international rescue effort involving elite cave divers who performed one of the most dangerous rescue operations in history." },
        { question: "How did the Thai cave rescue actually happen?", answer: "After heavy rains flooded the cave, the team was stranded 4 kilometers inside. Rescue divers navigated tight, murky underwater passages to reach them. The boys were sedated and fitted with full-face masks, then guided through the flooded tunnels by divers - a procedure never attempted before. All 13 were rescued successfully over three days." },
        { question: "Did anyone die during the Thai cave rescue?", answer: "Yes, tragically, Saman Kunan, a former Thai Navy SEAL volunteer, died while returning from delivering oxygen tanks to the cave. The film honors his sacrifice. His death highlighted the extreme danger of the rescue operation and the bravery of everyone involved." },
        { question: "Where can I watch 13 Lives?", answer: "13 Lives (2022) is an Amazon Original film, available exclusively on Amazon Prime Video worldwide. It was directed by Ron Howard and features an international cast." }
    ],
    'Unbroken': [
        { question: "Is Unbroken based on a true story?", answer: "Yes, Unbroken tells the true story of Louis Zamperini, an Olympic athlete who served in WWII. His bomber crashed in the Pacific, and he survived 47 days on a life raft before being captured by the Japanese Navy. He endured over two years of brutal treatment in POW camps, particularly from sadistic guard Mutsuhiro Watanabe ('The Bird')." },
        { question: "How accurate is Unbroken to the real story?", answer: "The film stays largely faithful to Laura Hillenbrand's biography of Zamperini, though it condenses some events and timelines for dramatic effect. The raft survival, shark attacks, and POW camp brutality are all historically accurate. Some critics felt the film didn't fully capture the psychological depth of Zamperini's trauma and later redemption." },
        { question: "What happened to Louis Zamperini after the war?", answer: "After WWII, Zamperini struggled with PTSD and alcoholism. His life turned around after attending a Billy Graham crusade in 1949, where he found faith and forgiveness. He eventually returned to Japan to meet and forgive his former captors, though Watanabe refused to meet him. Zamperini became an inspirational speaker and died in 2014 at age 97." },
        { question: "Where can I watch Unbroken?", answer: "Unbroken (2014) is available on Netflix in some regions, Amazon Prime Video (rental/purchase), Apple TV, and Google Play Movies. There's also a sequel, Unbroken: Path to Redemption (2018), which covers his post-war life." }
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
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return SURVIVAL_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title, "description": movieInfo?.synopsis || `${movie.Title} - A compelling survival film`,
        "genre": movie.genre, "datePublished": movie.year.toString(), "director": { "@type": "Person", "name": movieInfo?.director || "Acclaimed Director" },
        "actor": movieInfo?.cast?.map(actor => ({ "@type": "Person", "name": actor })) || [], "duration": `PT${movie.runtime}M`, "image": posterUrl,
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": movieInfo?.rating || 7.0, "bestRating": 10, "worstRating": 1, "ratingCount": movieInfo?.audienceScore || 100 }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
});

export const fetchMovieFromTMDB = async (tmdbId) => ({ poster_path: null, title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' });
export const fetchWatchProviders = async (tmdbId, region = 'US') => null;


// ✅ CONVERT SENSITIVE TIMELINES TO COMPONENT FORMAT - FIXED FOR STRING TIME FORMAT
export const formatSensitiveTimeline = (tmdbId) => {
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    
    // Times are ALREADY in "HH:MM:SS" or "MM:SS" format, so just return them as-is!
    return {
        scenes: raw.scenes.map(scene => ({
            start: scene.start,  // Already a string like "1:04:35"
            end: scene.end,      // Already a string like "1:04:50"
            type: scene.type,
            description: scene.description || ''
        }))
    };
};


