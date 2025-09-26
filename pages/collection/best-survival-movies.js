// pages/collection/best-survival-movies.js - TOP 10 SURVIVAL MOVIES WITH SSG + DYNAMIC ROUTES
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, Award, ArrowLeft, Mountain, AlertTriangle, Filter, Search, Heart } from 'lucide-react';

// Components
import CinematicBackground from '../../components/CinematicBackground';
import TMDBMoviePoster from '../../components/TMDBMoviePoster';
import TMDBAttribution from '../../components/TMDBAttribution';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';

// 🏆 SURVIVAL MOVIES DATABASE - EXACT SAME STRUCTURE AS INCEPTION
const SURVIVAL_MOVIES_DATABASE = [
    {
        rank: 1,
        imdbID: 'tt1542344',
        Title: '127 Hours',
        Year: '2010',
        Genre: 'Biography, Drama, Thriller',
        Director: 'Danny Boyle',
        Plot: 'A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE4ODM3Mw@@._V1_SX300.jpg',
        imdbRating: '7.5',
        Runtime: '94 min',
        survivabilityIndex: 95,
        category: 'Endurance Survival',
        categoryEmoji: '⛰️',
        tagline: 'The ultimate human test: trapped, alone, and forced to choose between life and limb.'
    },
    {
        rank: 2,
        imdbID: 'tt16277242',
        Title: 'Society of the Snow',
        Year: '2023',
        Genre: 'Biography, Drama, History',
        Director: 'J.A. Bayona',
        Plot: 'The flight of a rugby team crashes on a glacier in the Andes. The few survivors of the catastrophe find themselves in one of the world\'s toughest environments to survive.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYzJkZjlmMmQtMGVmYS00OGY3LTlhOTAtNzJjNzQxYWJiNDVkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg',
        imdbRating: '7.8',
        Runtime: '144 min',
        survivabilityIndex: 92,
        category: 'Disaster Group Survival',
        categoryEmoji: '✈️🥶',
        tagline: 'When nature takes everything, survival means sacrifice beyond imagination.'
    },
    {
        rank: 3,
        imdbID: 'tt0162222',
        Title: 'Cast Away',
        Year: '2000',
        Genre: 'Adventure, Drama, Romance',
        Director: 'Robert Zemeckis',
        Plot: 'A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg2LWE3NWMtYTU5OTEwZDlmMjMzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        imdbRating: '7.8',
        Runtime: '143 min',
        survivabilityIndex: 88,
        category: 'Isolation Survival',
        categoryEmoji: '🏝️',
        tagline: 'A man, an island, and silence that speaks louder than words.'
    },
    {
        rank: 4,
        imdbID: 'tt1663202',
        Title: 'The Revenant',
        Year: '2015',
        Genre: 'Action, Adventure, Drama',
        Director: 'Alejandro G. Iñárritu',
        Plot: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
        imdbRating: '8.0',
        Runtime: '156 min',
        survivabilityIndex: 90,
        category: 'Frontier Wilderness Survival',
        categoryEmoji: '❄️🐻',
        tagline: 'A brutal fight against nature, betrayal, and the will to return alive.'
    },
    {
        rank: 5,
        imdbID: 'tt3659388',
        Title: 'The Martian',
        Year: '2015',
        Genre: 'Adventure, Drama, Sci-Fi',
        Director: 'Ridley Scott',
        Plot: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg',
        imdbRating: '8.0',
        Runtime: '144 min',
        survivabilityIndex: 85,
        category: 'Sci-Fi Survival',
        categoryEmoji: '🚀🥔',
        tagline: 'Stranded on Mars, survival becomes a science — and a comedy of ingenuity.'
    },
    {
        rank: 6,
        imdbID: 'tt1649419',
        Title: 'The Impossible',
        Year: '2012',
        Genre: 'Drama, History, Thriller',
        Director: 'J.A. Bayona',
        Plot: 'The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAyNzk5MzgyNl5BMl5BanBnXkFtZTcwODMyNTgzOA@@._V1_SX300.jpg',
        imdbRating: '7.5',
        Runtime: '114 min',
        survivabilityIndex: 85,
        category: 'Natural Disaster Survival',
        categoryEmoji: '🌊🌪️',
        tagline: 'A tsunami tears a family apart — survival is finding each other again.'
    },
    {
        rank: 7,
        imdbID: 'tt3758172',
        Title: 'Jungle',
        Year: '2017',
        Genre: 'Adventure, Biography, Drama',
        Director: 'Greg McLean',
        Plot: 'A group of friends join a guide for a trek into the Bolivian jungle, searching for an Indian village. The men soon realize that the jungle is a difficult place to be.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjI2MDM1NzU2NV5BMl5BanBnXkFtZTgwNTM2NzQ0MzI@._V1_SX300.jpg',
        imdbRating: '6.7',
        Runtime: '115 min',
        survivabilityIndex: 82,
        category: 'Amazon Survival',
        categoryEmoji: '🌳🐍',
        tagline: 'The rainforest doesn\'t want you to leave — and it almost never lets you.'
    },
    {
        rank: 8,
        imdbID: 'tt0472043',
        Title: 'Apocalypto',
        Year: '2006',
        Genre: 'Action, Adventure, Drama',
        Director: 'Mel Gibson',
        Plot: 'As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg',
        imdbRating: '7.8',
        Runtime: '139 min',
        survivabilityIndex: 88,
        category: 'Chase/Tribal Survival',
        categoryEmoji: '🏹🌿',
        tagline: 'A desperate escape through the jungle, where survival is speed and instinct.'
    },
    {
        rank: 9,
        imdbID: 'tt12262116',
        Title: '13 Lives',
        Year: '2022',
        Genre: 'Biography, Drama, Thriller',
        Director: 'Ron Howard',
        Plot: 'A rescue mission is assembled in Thailand where a group of young boys and their soccer coach are trapped in a system of underground caves that are flooding.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYjFkYTZjNWYtY2Y3Ny00ZmJkLTg2NGYtNzBkNzVlMWY3MzUzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg',
        imdbRating: '7.8',
        Runtime: '147 min',
        survivabilityIndex: 80,
        category: 'Rescue Survival',
        categoryEmoji: '🧗‍♂️⛑️',
        tagline: 'A true story where courage, precision, and teamwork saved the impossible.'
    },
    {
        rank: 10,
        imdbID: 'tt1809398',
        Title: 'Unbroken',
        Year: '2014',
        Genre: 'Biography, Drama, Sport',
        Director: 'Angelina Jolie',
        Plot: 'After a near-fatal plane crash in WWII, Olympian Louis Zamperini spends a harrowing 47 days in a raft with two fellow crewmen before he\'s caught by the Japanese navy.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTQxNzE4MTY1MV5BMl5BanBnXkFtZTgwNDIzNjI4MzE@._V1_SX300.jpg',
        imdbRating: '7.2',
        Runtime: '137 min',
        survivabilityIndex: 88,
        category: 'War Survival',
        categoryEmoji: '🌊🎖️',
        tagline: 'From Olympian to castaway to POW — a journey of pain, resilience, and faith.'
    }
];

const BestSurvivalMovies = () => {
    const [mounted, setMounted] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [sortBy, setSortBy] = useState('rank');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const genres = ['All', 'Endurance Survival', 'Disaster Group Survival', 'Isolation Survival', 'Frontier Wilderness Survival', 'Sci-Fi Survival'];

    const filteredMovies = SURVIVAL_MOVIES_DATABASE
        .filter(movie => {
            const matchesSearch = movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               movie.Director.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesGenre = selectedGenre === 'All' || movie.category === selectedGenre;
            return matchesSearch && matchesGenre;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'rating': return b.imdbRating - a.imdbRating;
                case 'year': return b.Year - a.Year;
                case 'survivability': return b.survivabilityIndex - a.survivabilityIndex;
                default: return a.rank - b.rank;
            }
        });

    const getSurvivabilityColor = (index) => {
        if (index >= 90) return 'text-red-400';
        if (index >= 85) return 'text-orange-400';
        if (index >= 80) return 'text-yellow-400';
        return 'text-green-400';
    };

    if (!mounted) {
        return <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-white">Loading...</div>
        </div>;
    }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                <title>Top 10 Best Survival Movies - Raw & Brutal Collection | Filmiway</title>
                <meta name="description" content="Discover the top 10 most brutal survival movies ranked by survivability index. From 127 Hours to Society of the Snow - raw human endurance at its limits." />
                <meta name="keywords" content="best survival movies, brutal survival films, 127 Hours, Cast Away, The Revenant, survival movies ranking, survivability index, raw survival cinema" />
                <link rel="canonical" href="https://filmiway.com/collection/best-survival-movies" />
                
                <meta property="og:title" content="Top 10 Best Survival Movies - Raw & Brutal Collection" />
                <meta property="og:description" content="Discover the most brutal survival movies ranked by survivability index. From 127 Hours to Society of the Snow." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://filmiway.com/collection/best-survival-movies" />
                
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Top 10 Best Survival Movies",
                    "description": "A curated collection of the most brutal survival movies, ranked by survivability index.",
                    "url": "https://filmiway.com/collection/best-survival-movies",
                    "numberOfItems": 10
                })}
                </script>
            </Head>

            <CinematicBackground />

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-40">
                <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="relative z-30 min-h-screen">
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* Header - SAME AS INCEPTION STYLE */}
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <Mountain className="w-12 h-12 text-red-500" />
                                <h1 className="text-5xl md:text-7xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400">
                                    Best Survival Movies
                                </h1>
                                <AlertTriangle className="w-12 h-12 text-red-500" />
                            </div>
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
                                Raw, brutal, and life-changing. These films test the ultimate limits of human endurance, 
                                ranked by survivability index and emotional intensity.
                            </p>
                        </motion.div>

                        {/* Search and Filter - SAME STRUCTURE AS INCEPTION */}
                        <motion.div
                            className="mb-12 bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="flex flex-col lg:flex-row gap-4 items-center">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search survival movies..."
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                
                                <div className="flex gap-3">
                                    <select
                                        value={selectedGenre}
                                        onChange={(e) => setSelectedGenre(e.target.value)}
                                        className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                    >
                                        {genres.map(genre => (
                                            <option key={genre} value={genre}>{genre}</option>
                                        ))}
                                    </select>
                                    
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500"
                                    >
                                        <option value="rank">Sort by Rank</option>
                                        <option value="rating">Sort by Rating</option>
                                        <option value="year">Sort by Year</option>
                                        <option value="survivability">Sort by Survivability</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>

                        {/* Movies Grid - EXACT SAME STYLE AS INCEPTION */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                            {filteredMovies.map((movie, index) => (
                                <motion.div
                                    key={movie.imdbID}
                                    className="group relative bg-gray-900/30 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                >
                                    {/* Rank Badge */}
                                    <div className="absolute top-4 left-4 z-20 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                                        #{movie.rank}
                                    </div>

                                    {/* Survivability Badge - REPLACES MIND BENDING INDEX */}
                                    <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-sm rounded-full px-3 py-2">
                                        <div className={`text-xs font-bold ${getSurvivabilityColor(movie.survivabilityIndex)}`}>
                                            {movie.survivabilityIndex}/100
                                        </div>
                                        <div className="text-xs text-gray-400 text-center">Survivability</div>
                                    </div>

                                    {/* Movie Poster */}
                                    <div className="aspect-[3/4] relative overflow-hidden">
                                        <TMDBMoviePoster 
                                            movie={movie}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    </div>

                                    {/* Movie Info */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">{movie.categoryEmoji}</span>
                                            <span className="text-sm text-red-400 font-medium">{movie.category}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                                            {movie.Title}
                                        </h3>
                                        
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {movie.tagline}
                                        </p>

                                        {/* Stats - SAME AS INCEPTION STYLE */}
                                        <div className="flex items-center justify-between text-sm mb-3">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="text-white font-medium">{movie.imdbRating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-400">{movie.Runtime}</span>
                                            </div>
                                        </div>

                                        <div className="text-gray-400 text-sm">
                                            <span className="font-medium">{movie.Year}</span> • <span>{movie.Director}</span>
                                        </div>
                                    </div>

                                    {/* Click Link - SSG NAVIGATION */}
                                    <Link 
                                        href={`/movies/${movie.imdbID}`}
                                        className="absolute inset-0 z-30"
                                        onClick={() => {
                                            if (typeof window !== 'undefined') {
                                                sessionStorage.setItem('fromSurvivalCollection', 'true');
                                                sessionStorage.setItem('currentMoviePosition', index.toString());
                                                sessionStorage.setItem('currentMovieRank', movie.rank.toString());
                                            }
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-colors duration-500" />
                                        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="flex items-center justify-between text-white">
                                                <span className="text-sm font-medium">View Details</span>
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* No Results */}
                        {filteredMovies.length === 0 && (
                            <motion.div
                                className="text-center py-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <AlertTriangle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-400 mb-2">No Survival Movies Found</h3>
                                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <TMDBAttribution />
        </div>
    );
};

export default BestSurvivalMovies;
