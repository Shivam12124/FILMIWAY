
// pages/search.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    Search, Star, Calendar, Clock, Film, X, 
    TrendingUp, Award, ArrowLeft, Loader, 
    ChevronLeft, ChevronRight
} from 'lucide-react';
import Image from 'next/image';


<Head>
    <title>Search Movies - Filmiway</title>
    <meta name="application-name" content="Filmiway" />
    <meta name="apple-mobile-web-app-title" content="Filmiway" />
    <meta name="description" content="Search for movies, discover new films, and explore cinema across all genres on Filmiway - Where Every Film Finds Its Way." />
    <meta name="generator" content="Filmiway" />
    <meta name="author" content="Filmiway Team" />
    <meta name="publisher" content="Filmiway" />
    <meta name="copyright" content="Filmiway 2025" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    {/* OVERRIDE NEXT.JS BRANDING */}
    <meta name="framework" content="Filmiway Platform" />
    <meta name="powered-by" content="Filmiway" />
    
    {/* FAVICON SETUP */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="shortcut icon" href="/favicon.ico" />
    
    <meta name="theme-color" content="#facc15" />
    <meta name="msapplication-TileColor" content="#000000" />
    
    {/* STRUCTURED DATA FOR SEARCH PAGE */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Search Movies - Filmiway",
            "description": "Search and discover amazing movies across every genre and era",
            "url": "https://filmiway.com/search",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Filmiway"
            }
        })
    }} />
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
</Head>
// pages/search.js - COMPLETE SEARCH WITH FAVICON & TMDB ATTRIBUTION
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    Search, Star, Calendar, Clock, Film, X, 
    TrendingUp, Award, ArrowLeft, Loader, 
    ChevronLeft, ChevronRight
} from 'lucide-react';

const TMDB_API_KEY =  process.env.NEXT_PUBLIC_TMDB_API_KEY
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const SearchPage = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const searchInputRef = useRef(null);

    // Fetch trending movies on load
    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`);
                const data = await response.json();
                setTrendingMovies(data.results?.slice(0, 12) || []);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };
        fetchTrending();
    }, []);

    // Auto-focus search input
    useEffect(() => {
        searchInputRef.current?.focus();
    }, []);

    // Search movies
    const searchMovies = async (query, page = 1) => {
        if (!query.trim()) return;
        
        setLoading(true);
        try {
            const response = await fetch(
                `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
            );
            const data = await response.json();
            
            if (page === 1) {
                setSearchResults(data.results || []);
            } else {
                setSearchResults(prev => [...prev, ...(data.results || [])]);
            }
            
            setTotalPages(data.total_pages);
            setCurrentPage(page);
            setHasSearched(true);
        } catch (error) {
            console.error('Error searching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            searchMovies(searchQuery, 1);
        }
    };

    // Load more results
    const loadMore = () => {
        if (currentPage < totalPages && !loading) {
            searchMovies(searchQuery, currentPage + 1);
        }
    };

    // Clear search
    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setHasSearched(false);
        setCurrentPage(1);
        setTotalPages(0);
        searchInputRef.current?.focus();
    };

    // Movie Card Component
    const MovieCard = ({ movie, index }) => (
        <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onClick={() => router.push(`/movie/${movie.id}`)}
        >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
              {movie.poster_path ? (
    <Image
        src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
    />
) : (

                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <Film className="w-16 h-16 text-gray-600" />
                    </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                            {movie.title}
                        </h3>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-yellow-400 font-medium">
                                    {movie.vote_average?.toFixed(1) || 'N/A'}
                                </span>
                            </div>
                            <span className="text-gray-300 text-sm">
                                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'TBA'}
                            </span>
                        </div>
                        <button className="w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">
                            {movie.vote_average?.toFixed(1) || 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    // Navigation - WITH BIG LOGO LIKE HOMEPAGE
    const Navigation = () => (
        <motion.nav 
            className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-28">
                    {/* Logo & Back - SAME SIZE AS HOMEPAGE */}
                    <div className="flex items-center space-x-6">
                        <Link href="/" className="flex items-center justify-start">
                           <div className="w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-32 lg:w-64 lg:h-36 flex items-center justify-start">
    <Image
        src="/filmiway-logo.svg"
        alt="Filmiway"
        width={256}
        height={96}
        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        priority={false}
    />
</div>

                        </Link>
                        <Link 
                            href="/" 
                            className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm">Back to Home</span>
                        </Link>
                    </div>

                    {/* Quick Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">Home</Link>
                        <Link href="/collection/movies-like-inception" className="text-gray-300 hover:text-white transition-colors text-lg">Collections</Link>
                        <span className="text-yellow-400 font-medium text-lg">Search</span>
                    </div>
                </div>
            </div>
        </motion.nav>
    );

    return (
        <>
            <Head>
                <title>Search Movies - Filmiway</title>
                <meta name="description" content="Search for movies, discover new films, and explore cinema across all genres on Filmiway." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* FAVICON SETUP */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon.ico" />
                
                <meta name="theme-color" content="#facc15" />
                <meta name="msapplication-TileColor" content="#000000" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-black text-white">
                <Navigation />

                {/* Main Content */}
                <div className="pt-32">
                    <div className="container mx-auto px-4 sm:px-6 py-12">
                        
                        {/* Search Header */}
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
                                Search <span className="text-yellow-400">Movies</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Discover amazing films across every genre and era
                            </p>
                        </motion.div>

                        {/* Search Bar */}
                        <motion.div
                            className="max-w-3xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <form onSubmit={handleSearch} className="relative">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search for movies... (e.g., 'Inception', 'Marvel', 'Horror')"
                                        className="w-full pl-14 pr-20 py-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 text-lg"
                                    />
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={clearSearch}
                                            className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={!searchQuery.trim() || loading}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-600 disabled:cursor-not-allowed text-black px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                                    >
                                        {loading ? (
                                            <Loader className="w-4 h-4 animate-spin" />
                                        ) : (
                                            <>
                                                <Search className="w-4 h-4" />
                                                <span className="hidden sm:inline">Search</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Search Results */}
                        <AnimatePresence>
                            {hasSearched && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl sm:text-3xl font-light text-white">
                                            Search Results for "{searchQuery}"
                                        </h2>
                                        <span className="text-gray-400">
                                            {searchResults.length} results
                                        </span>
                                    </div>

                                    {searchResults.length > 0 ? (
                                        <>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-12">
                                                {searchResults.map((movie, index) => (
                                                    <MovieCard key={movie.id} movie={movie} index={index} />
                                                ))}
                                            </div>

                                            {/* Load More Button */}
                                            {currentPage < totalPages && (
                                                <div className="text-center">
                                                    <motion.button
                                                        onClick={loadMore}
                                                        disabled={loading}
                                                        className="bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 mx-auto"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {loading ? (
                                                            <>
                                                                <Loader className="w-5 h-5 animate-spin" />
                                                                Loading...
                                                            </>
                                                        ) : (
                                                            <>
                                                                Load More
                                                                <ChevronRight className="w-5 h-5" />
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <motion.div
                                            className="text-center py-20"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <Film className="w-16 h-16 text-gray-600 mx-auto mb-6" />
                                            <h3 className="text-2xl font-light text-gray-400 mb-4">No movies found</h3>
                                            <p className="text-gray-500 mb-8">
                                                Try a different search term or browse trending movies below
                                            </p>
                                            <button
                                                onClick={clearSearch}
                                                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-medium transition-all duration-300"
                                            >
                                                Try Another Search
                                            </button>
                                        </motion.div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Trending Movies (Default View) */}
                        {!hasSearched && trendingMovies.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <div className="flex items-center justify-center gap-3 mb-8">
                                    <TrendingUp className="w-8 h-8 text-yellow-400" />
                                    <h2 className="text-3xl sm:text-4xl font-light text-white">Trending Now</h2>
                                </div>
                                <p className="text-gray-400 text-center mb-12">
                                    Popular movies everyone's talking about
                                </p>
                                
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                    {trendingMovies.map((movie, index) => (
                                        <MovieCard key={movie.id} movie={movie} index={index} />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Search Suggestions */}
                        {!hasSearched && (
                            <motion.div
                                className="mt-20 text-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <h3 className="text-2xl font-light text-white mb-6">Popular Searches</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['Marvel', 'Horror', 'Comedy', 'Action', 'Drama', 'Sci-Fi', 'Thriller', 'Romance'].map((genre) => (
                                        <button
                                            key={genre}
                                            onClick={() => {
                                                setSearchQuery(genre);
                                                searchMovies(genre, 1);
                                            }}
                                            className="px-4 py-2 bg-gray-800 hover:bg-yellow-400 hover:text-black text-gray-300 rounded-full transition-all duration-300 text-sm font-medium"
                                        >
                                            {genre}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Footer - WITH TMDB ATTRIBUTION */}
                <footer className="bg-gradient-to-t from-gray-900 to-black py-16 border-t border-gray-800 mt-20">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-8">
                          <div className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center">
    <Image
        src="/filmiway-logo.svg"
        alt="Filmiway"
        width={200}
        height={80}
        className="w-full h-full object-contain"
    />
</div>

                            </div>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Search and discover amazing films across every genre and era.
                            </p>

                            {/* TMDB ATTRIBUTION */}
                            <motion.div 
                                className="mb-8 pt-6 border-t border-gray-900/50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <p className="text-gray-600 text-sm">
                                        Movie data and search powered by
                                    </p>
                                    <a 
                                        href="https://www.themoviedb.org/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                                    >
<Image
    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
    alt="The Movie Database"
    width={80}
    height={20}
    className="h-5 w-auto"
/>

                                        <span className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                                            The Movie Database (TMDB)
                                        </span>
                                    </a>
                                </div>
                                <p className="text-gray-700 text-xs mt-2 text-center">
                                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                                </p>
                            </motion.div>

                            <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm">
                                <span>© 2025 Filmiway</span>
                                <span>•</span>
                                <span>All Rights Reserved</span>
                                <span>•</span>
                                <span>Search Movies</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default SearchPage;
