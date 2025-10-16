// pages/collections.js - YOUTUBE THUMBNAIL STYLE WITH FILMIWAY AESTHETIC
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Brain, Mountain, Film, ChevronRight, Sparkles, Construction, Plus, ArrowRight, Play, Star } from 'lucide-react';

const CollectionsHub = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCollection, setExpandedCollection] = useState(null);

    const collections = [
        {
            id: 'mind-bending',
            title: 'Mind-Bending Movies',
            description: 'Psychological thrillers that challenge reality and perception',
            thumbnail: '/mind-bending-thumbnail.jpg', // You can create or use a movie poster
            icon: Brain,
            gradientFrom: 'from-purple-600',
            gradientTo: 'to-blue-600',
            movieCount: '30+ Films',
            rating: '8.5/10',
            hasSubCollections: true,
            subCollections: [
                {
                    slug: 'movies-like-inception',
                    title: 'Movies Like Inception',
                    description: 'Mind-bending sci-fi thrillers with layered realities',
                    count: '10 films',
                    poster: 'https://image.tmdb.org/t/p/w300/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg'
                },
                {
                    slug: 'movies-like-memento',
                    title: 'Movies Like Memento', 
                    description: 'Nonlinear narratives and memory manipulation',
                    count: '10 films',
                    poster: 'https://image.tmdb.org/t/p/w300/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg'
                },
                {
                    slug: 'movies-like-shutter-island',
                    title: 'Movies Like Shutter Island',
                    description: 'Psychological horror with shocking twists',
                    count: '10 films',
                    poster: 'https://image.tmdb.org/t/p/w300/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg'
                }
            ]
        },
        {
            id: 'survival',
            title: 'Best Survival Movies',
            description: 'Extreme survival stories that push human endurance to the limit',
            thumbnail: '/survival-thumbnail.jpg',
            icon: Mountain,
            gradientFrom: 'from-green-600',
            gradientTo: 'to-emerald-600',
            movieCount: '10 Films',
            rating: '8.2/10',
            directLink: '/collection/best-survival-movies',
            hasSubCollections: false
        }
    ];

    const filteredCollections = collections.filter(collection =>
        collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        collection.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleExpand = (collectionId) => {
        setExpandedCollection(expandedCollection === collectionId ? null : collectionId);
    };

    return (
        <>
            <Head>
                <title>Movie Collections | Filmiway</title>
                <meta name="description" content="Explore curated movie collections including mind-bending thrillers and survival films" />
            </Head>

            <div className="min-h-screen bg-black text-white relative overflow-hidden select-none">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>
                
                <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Header */}
                <motion.header
                    className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-between h-28">
                            <Link href="/" className="flex items-center justify-start relative">
                                <div className="w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-32 lg:w-64 lg:h-36 flex items-center justify-start">
                                    <img 
                                        src="/filmiway-logo.svg" 
                                        alt="Filmiway" 
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                        draggable={false}
                                    />
                                </div>
                            </Link>
                            <Link href="/">
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors px-6 py-3 rounded-xl border border-gray-700 hover:border-yellow-400">
                                    ← Back to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.header>

                {/* Main Content */}
                <main className="container mx-auto px-4 sm:px-6 pt-40 pb-20">
                    {/* Hero Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <Film className="w-10 h-10 text-yellow-400" />
                            <h1 className="text-5xl md:text-8xl font-extralight">
                                Curated 
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 font-light">
                                    Collections
                                </span>
                            </h1>
                            <Sparkles className="w-10 h-10 text-yellow-400" />
                        </div>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-4xl mx-auto">
                            Discover expertly curated movie collections across different genres and themes.
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 font-normal"> Where every film finds its way.</span>
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        className="max-w-3xl mx-auto mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-yellow-400" />
                            <input
                                type="text"
                                placeholder="Search movie collections..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl pl-16 pr-6 py-6 text-white text-lg placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-gray-900/70 transition-all backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>

                    {/* YouTube Thumbnail Style Collection Banners */}
                    <div className="space-y-8">
                        {filteredCollections.map((collection, index) => (
                            <motion.div
                                key={collection.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                            >
                                {/* YouTube-Style Thumbnail Banner */}
                                <div 
                                    className="relative group cursor-pointer"
                                    onClick={() => {
                                        if (collection.hasSubCollections) {
                                            toggleExpand(collection.id);
                                        } else {
                                            // Direct navigation for survival movies
                                            window.location.href = collection.directLink;
                                        }
                                    }}
                                >
                                    <div className="relative aspect-[16/6] rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 group-hover:scale-[1.02]">
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${collection.gradientFrom} ${collection.gradientTo} opacity-20`}></div>
                                        
                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-between p-8 md:p-12">
                                            {/* Left Side - Text Content */}
                                            <div className="flex-1 space-y-4">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <collection.icon className="w-12 h-12 md:w-16 md:h-16 text-yellow-400" />
                                                    <div>
                                                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                                            {collection.title}
                                                        </h2>
                                                        <p className="text-gray-300 text-lg md:text-xl">
                                                            {collection.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center gap-6 text-sm md:text-base">
                                                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                                                        <Film className="w-4 h-4 text-yellow-400" />
                                                        <span className="text-white font-medium">{collection.movieCount}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span className="text-white font-medium">{collection.rating}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Side - Play Button & Arrow */}
                                            <div className="flex items-center gap-4">
                                                <motion.div
                                                    className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-300 transition-colors shadow-2xl"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" />
                                                </motion.div>
                                                <ChevronRight className={`w-8 h-8 text-yellow-400 transition-transform duration-300 ${expandedCollection === collection.id && collection.hasSubCollections ? 'rotate-90' : ''}`} />
                                            </div>
                                        </div>

                                        {/* Hover Effects */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                {/* Sub-Collections Expandable Section */}
                                <AnimatePresence>
                                    {expandedCollection === collection.id && collection.hasSubCollections && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                                                {collection.subCollections.map((subCollection) => (
                                                    <Link
                                                        key={subCollection.slug}
                                                        href={`/collection/${subCollection.slug}`}
                                                        className="group block"
                                                    >
                                                        <motion.div
                                                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-yellow-400/50 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800/70"
                                                            whileHover={{ y: -4 }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4 bg-gray-800">
                                                                <img 
                                                                    src={subCollection.poster} 
                                                                    alt={subCollection.title}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                            </div>
                                                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                                                {subCollection.title}
                                                            </h3>
                                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                                {subCollection.description}
                                                            </p>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">{subCollection.count}</span>
                                                                <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Coming Soon Section */}
                    <motion.div
                        className="mt-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="relative group cursor-not-allowed">
                            <div className="relative aspect-[16/6] rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/30">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10"></div>
                                
                                <div className="absolute inset-0 flex items-center justify-between p-8 md:p-12">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Construction className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
                                            <div>
                                                <h2 className="text-3xl md:text-6xl font-bold text-gray-400 mb-2">
                                                    More Collections
                                                </h2>
                                                <p className="text-gray-500 text-lg md:text-xl">
                                                    Additional curated collections coming very soon!
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-6 text-sm md:text-base">
                                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                                                <Plus className="w-4 h-4 text-orange-400" />
                                                <span className="text-gray-400 font-medium">Coming Soon</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                                                <Sparkles className="w-4 h-4 text-orange-400" />
                                                <span className="text-gray-400 font-medium">Stay Tuned</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 opacity-50">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-700 rounded-full flex items-center justify-center">
                                            <Construction className="w-8 h-8 md:w-10 md:h-10 text-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </main>
            </div>
        </>
    );
};

export default CollectionsHub;
