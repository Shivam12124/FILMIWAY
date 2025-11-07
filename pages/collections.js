// pages/collections.js - PROFESSIONAL CLEAN COLLECTIONS HUB WITH MYSTERY THRILLER
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Brain, Mountain, Film, ChevronDown, Sparkles, Plus, ArrowRight, Star, Clock, Eye } from 'lucide-react';

const CollectionsHub = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCollection, setExpandedCollection] = useState(null);

    const collections = [
        {
            id: 'mind-bending',
            title: 'Mind-Bending Movies',
            description: 'Psychological thrillers that challenge reality and perception',
            icon: Brain,
            gradient: 'from-purple-500 to-blue-600',
            movieCount: '30',
            rating: '8.5',
            hasSubCollections: true,
            subCollections: [
                {
                    slug: 'movies-like-inception',
                    title: 'Movies Like Inception',
                    description: 'Mind-bending sci-fi thrillers',
                    count: '10 films',
                    poster: 'https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg'
                },
                {
                    slug: 'movies-like-memento',
                    title: 'Movies Like Memento',
                    description: 'Nonlinear narratives',
                    count: '10 films',
                    poster: 'https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg'
                },
                {
                    slug: 'movies-like-shutter-island',
                    title: 'Movies Like Shutter Island',
                    description: 'Psychological horror twists',
                    count: '10 films',
                    poster: 'https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg'
                }
            ]
        },
        {
            id: 'survival',
            title: 'Best Survival Movies',
            description: 'Extreme survival stories that push human endurance',
            icon: Mountain,
            gradient: 'from-green-500 to-emerald-600',
            movieCount: '10',
            rating: '8.2',
            directLink: '/collection/best-survival-movies',
            hasSubCollections: false
        },
        {
            id: 'suspense-thriller',
            title: 'Best Suspense Thriller Movies',
            description: 'The ultimate selection of nail-biting, edge-of-your-seat suspense thrillers.',
            icon: Star,
            gradient: 'from-yellow-500 to-orange-700',
            movieCount: '10',
            rating: '8.8',
            directLink: '/collection/best-thriller-movies',
            hasSubCollections: false
        },
        {
            id: 'mystery-thriller',  // ✅ MYSTERY THRILLER COLLECTION ADDED
            title: 'Best Mystery Thriller Movies',
            description: 'Intricate detective mysteries with brilliant puzzle-solving and shocking reveals',
            icon: Eye,
            gradient: 'from-indigo-500 to-purple-700',
            movieCount: '10',
            rating: '8.6',
            directLink: '/collection/best-mystery-thriller-movies',
            hasSubCollections: false
        },
        {
            id: 'drama-netflix',
            title: 'Best Drama Movies on Netflix',
            description: 'Critically acclaimed drama films streaming on Netflix',
            icon: Film,
            gradient: 'from-red-600 to-pink-600',
            movieCount: '10',
            rating: '8.0',
            directLink: '/collection/best-drama-movies-on-netflix',
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
                <title>Movie Collections | Filmiway - Curated Film Lists</title>
                <meta name="description" content="Explore expertly curated movie collections including mind-bending thrillers, survival films, mystery thrillers and more. Find your next favorite movie." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            </Head>

            <div className="min-h-screen bg-black text-white">
                {/* Fixed Header */}
                <motion.header
                    className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-between h-16 sm:h-20">
                            <Link href="/" className="flex items-center">
                                <div className="w-48 h-16 sm:w-60 sm:h-24 flex items-center">
                                    <img
                                        src="/filmiway-logo.svg"
                                        alt="Filmiway"
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                        draggable={false}
                                    />
                                </div>
                            </Link>
                            <Link href="/">
                                <button className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors px-4 py-2 rounded-lg border border-gray-700/50 hover:border-yellow-400/50">
                                    ← Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.header>

                {/* Main Content */}
                <main className="pt-20 sm:pt-24 pb-16">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        {/* Hero Section */}
                        <motion.div
                            className="text-center mb-12 sm:mb-16 pt-8 sm:pt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Film className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
                                    Movie <span className="text-yellow-400 font-normal">Collections</span>
                                </h1>
                            </div>
                            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                                Discover expertly curated collections across genres and themes
                            </p>
                        </motion.div>

                        {/* Search Bar */}
                        <motion.div
                            className="max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search collections..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
                                />
                            </div>
                        </motion.div>

                        {/* Collections Grid */}
                        <div className="space-y-6">
                            {filteredCollections.map((collection, index) => (
                                <motion.div
                                    key={collection.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                >
                                    {/* Collection Card */}
                                    <div
                                        className="group relative bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
                                        onClick={() => {
                                            if (collection.hasSubCollections) {
                                                toggleExpand(collection.id);
                                            } else {
                                                window.location.href = collection.directLink;
                                            }
                                        }}
                                    >
                                        <div className="p-6 sm:p-8">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${collection.gradient} flex items-center justify-center`}>
                                                            <collection.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                                        </div>
                                                        <div>
                                                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                                                                {collection.title}
                                                            </h2>
                                                            <p className="text-sm sm:text-base text-gray-400 mt-1">
                                                                {collection.description}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-4 mt-4">
                                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                                            <Film className="w-4 h-4 text-yellow-400" />
                                                            <span>{collection.movieCount} Films</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            <span>{collection.rating}/10</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex-shrink-0">
                                                    <ChevronDown
                                                        className={`w-6 h-6 text-yellow-400 transition-transform duration-300 ${
                                                            expandedCollection === collection.id ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sub-Collections */}
                                    <AnimatePresence>
                                        {expandedCollection === collection.id && collection.hasSubCollections && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-4"
                                            >
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {collection.subCollections.map((subCollection) => (
                                                        <Link
                                                            key={subCollection.slug}
                                                            href={`/collection/${subCollection.slug}`}
                                                            className="group/sub block"
                                                        >
                                                            <div className="bg-gray-900/80 border border-gray-800/50 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300">
                                                                <div className="aspect-[2/3] w-full overflow-hidden">
                                                                    <img
                                                                        src={subCollection.poster}
                                                                        alt={subCollection.title}
                                                                        className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-300"
                                                                        loading="lazy"
                                                                        draggable={false}
                                                                    />
                                                                </div>
                                                                <div className="p-4">
                                                                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover/sub:text-yellow-400 transition-colors line-clamp-2">
                                                                        {subCollection.title}
                                                                    </h3>
                                                                    <p className="text-xs sm:text-sm text-gray-400 mb-3 line-clamp-2">
                                                                        {subCollection.description}
                                                                    </p>
                                                                    <div className="flex items-center justify-between">
                                                                        <span className="text-xs text-gray-500">{subCollection.count}</span>
                                                                        <ArrowRight className="w-4 h-4 text-yellow-400 group-hover/sub:translate-x-1 transition-transform" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* Coming Soon */}
                        <motion.div
                            className="mt-12 bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/30 rounded-2xl p-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Sparkles className="w-8 h-8 text-orange-400" />
                                <h3 className="text-2xl font-light text-gray-400">More Collections Coming Soon</h3>
                            </div>
                            <p className="text-gray-500 mb-4">Additional curated collections in development</p>
                            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Plus className="w-4 h-4" />
                                    <span>New Categories</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Stay Tuned</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default CollectionsHub;
