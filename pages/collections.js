// pages/collections.js - IMPROVED & FIXED ✅
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Brain, Mountain, Film, ChevronDown, Sparkles, Plus, ArrowRight, Star, Clock, Eye, Scale, DollarSign, Shield, Zap, Heart, Ghost, Smile, Crown, Rocket } from 'lucide-react';
import Image from 'next/image';

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
            id: 'hulu-best',
            title: 'Top 10 Best Movies on Hulu',
            description: 'The definitive ranking of the highest-rated films streaming on Hulu right now',
            icon: Crown,
            gradient: 'from-amber-500 to-yellow-600',
            movieCount: '10',
            rating: '7.9',
            directLink: '/collection/best-movies-on-hulu',
            hasSubCollections: false
        },
        {
            id: 'hulu-action',
            title: 'Best Action Movies on Hulu',
            description: 'High-octane action films ranked by adrenaline score, fight choreography, and stunts',
            icon: Zap,
            gradient: 'from-orange-500 to-red-600',
            movieCount: '10',
            rating: '8.4',
            directLink: '/collection/best-action-movies-on-hulu',
            hasSubCollections: false
        },
        {
            id: 'hulu-scifi',
            title: 'Best Sci-Fi Movies on Hulu',
            description: 'Mind-bending sci-fi films ranked by conceptual complexity and visual spectacle',
            icon: Brain,
            gradient: 'from-cyan-500 to-blue-600',
            movieCount: '10',
            rating: '8.3',
            directLink: '/collection/best-sci-fi-movies-on-hulu',
            hasSubCollections: false
        },
        {
            id: 'hulu-thriller',
            title: 'Best Thriller Movies on Hulu',
            description: 'Intense suspense films ranked by tension, pacing, and psychological impact',
            icon: Eye,
            gradient: 'from-red-600 to-rose-700',
            movieCount: '10',
            rating: '7.8',
            directLink: '/collection/best-thriller-movies-hulu',
            hasSubCollections: false
        },
   
        {
            id: 'hulu-horror',
            title: 'Best Horror Movies on Hulu',
            description: 'The most brutally terrifying films streaming on Hulu. From trauma-inducing gore to slow-burn dread',
            icon: Ghost,
            gradient: 'from-red-900 to-stone-900',
            movieCount: '10',
            rating: '7.1',
            directLink: '/collection/best-horror-movies-on-hulu',
            hasSubCollections: false
        },
        {
            id: 'hulu-comedy',
            title: 'Best Comedy Movies on Hulu',
            description: 'The funniest films streaming on Hulu. From teen chaos and mockumentaries to biting satire',
            icon: Smile,
            gradient: 'from-yellow-400 to-orange-500',
            movieCount: '10',
            rating: '7.3',
            directLink: '/collection/best-comedy-movies-on-hulu',
            hasSubCollections: false
        },
        {
            id: 'hulu-romance',
            title: 'Best Romance Movies on Hulu',
            description: 'Prestige love stories with electric chemistry and deep emotional resonance',
            icon: Heart,
            gradient: 'from-pink-500 to-rose-600',
            movieCount: '10',
            rating: '7.4',
            directLink: '/collection/best-romance-movies-on-hulu',
            hasSubCollections: false
        },
        {
            id: 'hulu-family',
            title: 'Best Family Movies on Hulu',
            description: 'Wholesome entertainment, animation & adventure for all ages streaming now',
            icon: Sparkles,
            gradient: 'from-yellow-400 to-amber-500',
            movieCount: '10',
            rating: '7.5',
            directLink: '/collection/best-family-movies-on-hulu',
            hasSubCollections: false
        },
        {
            id: 'hbo-max-best',
            title: 'Top 10 Best Movies on HBO Max',
            description: 'The definitive ranking of the highest-rated films streaming on HBO Max right now. From Seven Samurai to Dune: Part Two',
            icon: Crown,
            gradient: 'from-yellow-500 to-amber-600',
            movieCount: '10',
            rating: '8.6',
            directLink: '/collection/best-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-action',
            title: 'Top 10 Action Movies on HBO Max',
            description: 'Epic scale battles, mythic heroes, and visceral combat streaming now',
            icon: Zap,
            gradient: 'from-red-600 to-slate-900',
            movieCount: '10',
            rating: '8.3',
            directLink: '/collection/best-action-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-scifi',
            title: 'Best Sci-Fi Movies on HBO Max',
            description: 'Spectacular cosmic epics and mind-bending masterpieces streaming now',
            icon: Rocket,
            gradient: 'from-cyan-600 to-blue-800',
            movieCount: '10',
            rating: '8.2',
            directLink: '/collection/best-sci-fi-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-thriller',
            title: 'Best Thriller Movies on HBO Max',
            description: 'Psychological nightmares, cerebral sci-fi, and high-tension suspense streaming now',
            icon: Eye,
            gradient: 'from-red-700 to-rose-900',
            movieCount: '10',
            rating: '7.8',
            directLink: '/collection/best-thriller-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-max-drama',
            title: 'Best Drama Movies on HBO Max',
            description: 'The most emotionally resonant dramas ranked by character depth and impact',
            icon: Film,
            gradient: 'from-indigo-600 to-violet-800',
            movieCount: '10',
            rating: '8.1',
            directLink: '/collection/best-drama-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-max-horror',
            title: 'Best Horror Movies on HBO Max',
            description: 'The definitive ranking of the scariest movies on HBO Max. From The Conjuring to Evil Dead Rise',
            icon: Ghost,
            gradient: 'from-red-800 to-slate-950',
            movieCount: '10',
            rating: '8.0',
            directLink: '/collection/best-horror-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-max-comedy',
            title: 'Best Comedy Movies on HBO Max',
            description: 'Satirical masterpieces and cinematic comedy classics ranked by laughter',
            icon: Smile,
            gradient: 'from-yellow-500 to-amber-500',
            movieCount: '10',
            rating: '8.2',
            directLink: '/collection/best-comedy-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-romance',
            title: 'Best Romance Movies on HBO Max',
            description: 'Prestige love stories with electric chemistry and deep emotional resonance',
            icon: Heart,
            gradient: 'from-pink-500 to-rose-900',
            movieCount: '10',
            rating: '8.1',
            directLink: '/collection/best-romance-movies-on-hbo-max',
            hasSubCollections: false
        },
        {
            id: 'hbo-max-family',
            title: 'Best Family Movies on HBO Max',
            description: 'Magical journeys, Ghibli masterpieces, and wholesome classics for the whole family',
            icon: Sparkles,
            gradient: 'from-yellow-500 to-amber-600',
            movieCount: '10',
            rating: '8.0',
            directLink: '/collection/best-family-movies-on-hbo-max',
            hasSubCollections: false
        },

        {
            id: 'paramount-action',
            title: 'Best Action Movies on Paramount+',
            description: 'High-octane action films ranked by adrenaline score, stunts, and aerial combat',
            icon: Zap,
            gradient: 'from-red-600 to-orange-700',
            movieCount: '10',
            rating: '8.5',
            directLink: '/collection/best-action-movies-on-paramount-plus',
            hasSubCollections: false
        },
{
            id: 'paramount-scifi',
            title: 'Best Sci-Fi Movies on Paramount+',
            description: 'Visionary science fiction films exploring cosmic scope, advanced technology, and alien contact',
            icon: Rocket,
            gradient: 'from-cyan-600 to-blue-700',
            movieCount: '10',
            rating: '8.4',
            directLink: '/collection/best-sci-fi-movies-on-paramount-plus',
            hasSubCollections: false
        },


        {
            id: 'paramount-romance',
            title: 'Best Romance Movies on Paramount+',
            description: 'The top 10 romance movies streaming on Paramount+. From Titanic to About Time—ranked by emotional impact.',
            icon: Heart,
            gradient: 'from-pink-500 to-rose-700',
            movieCount: '10',
            rating: '7.8',
            directLink: '/collection/best-romance-movies-on-paramount-plus',
            hasSubCollections: false
        },

{
            id: 'paramount-thriller',
            title: 'Best Thriller Movies on Paramount+',
            description: 'Intense psychological thrillers and suspense masterpieces streaming now',
            icon: Eye,
            gradient: 'from-red-700 to-slate-900',
            movieCount: '10',
            rating: '7.6',
            directLink: '/collection/best-thriller-movies-on-paramount-plus',
            hasSubCollections: false
        },

{
            id: 'paramount-family',
            title: 'Best Family Movies on Paramount+',
            description: 'Wholesome entertainment, animated adventures & fun for all ages streaming now',
            icon: Sparkles,
            gradient: 'from-yellow-500 to-amber-600',
            movieCount: '10',
            rating: '7.5',
            directLink: '/collection/best-family-movies-on-paramount-plus',
            hasSubCollections: false
        },

{
            id: 'paramount-comedy',
            title: 'Best Comedy Movies on Paramount+',
            description: 'Laugh-out-loud classics and satirical masterpieces. From Tropic Thunder to The Naked Gun.',
            icon: Smile,
            gradient: 'from-yellow-400 to-amber-500',
            movieCount: '10',
            rating: '7.3',
            directLink: '/collection/best-comedy-movies-on-paramount-plus',
            hasSubCollections: false
        },

        {
            id: 'paramount-horror',
            title: 'Best Horror Movies on Paramount+',
            description: 'The definitive ranking of the scariest movies on Paramount+. From Sinister to Smile.',
            icon: Ghost,
            gradient: 'from-red-800 to-slate-950',
            movieCount: '10',
            rating: '7.2',
            directLink: '/collection/best-horror-movies-on-paramount-plus',
            hasSubCollections: false
        },

        {
            id: 'paramount-best',
            title: 'Top 10 Best Movies on Paramount+',
            description: 'The definitive ranking of the highest-rated films streaming on Paramount+. From The Godfather to Top Gun: Maverick',
            icon: Crown,
            gradient: 'from-yellow-500 to-amber-600',
            movieCount: '10',
            rating: '9.0',
            directLink: '/collection/best-movies-on-paramount-plus',
            hasSubCollections: false
        },

{
            id: 'peacock-action-adventure',
            title: 'Best Action & Adventure Movies on Peacock',
            description: 'Visceral survival epics and high-octane thrills ranked by adrenaline. From The Revenant to Man on Fire',
            icon: Mountain, // Using Mountain icon for adventure/survival theme
            gradient: 'from-teal-600 to-emerald-800',
            movieCount: '10',
            rating: '7.6',
            directLink: '/collection/best-action-adventure-movies-on-peacock',
            hasSubCollections: false
        },


        {
            id: 'peacock-scifi',
            title: 'Best Sci-Fi Movies on Peacock',
            description: 'Mind-bending realities and alien encounters ranked by complexity. From Coherence to Nope',
            icon: Rocket, 
            gradient: 'from-cyan-500 to-blue-700',
            movieCount: '10',
            rating: '7.6',
            directLink: '/collection/best-sci-fi-movies-on-peacock',
            hasSubCollections: false
        },

        {
            id: 'peacock-romance',
            title: 'Best Romance Movies on Peacock',
            description: 'Emotional masterpieces and heartwarming love stories ranked by chemistry. From About Time to Pride & Prejudice',
            icon: Heart, 
            gradient: 'from-pink-500 to-rose-700',
            movieCount: '10',
            rating: '7.8',
            directLink: '/collection/best-romance-movies-on-peacock',
            hasSubCollections: false
        },


{
            id: 'peacock-family',
            title: 'Best Family Movies on Peacock',
            description: 'Wholesome entertainment and magical adventures ranked by fun factor. From How to Train Your Dragon to Harry Potter',
            icon: Sparkles, 
            gradient: 'from-yellow-500 to-amber-600',
            movieCount: '10',
            rating: '7.7',
            directLink: '/collection/best-family-movies-on-peacock',
            hasSubCollections: false
        },

        {
            id: 'peacock-drama',
            title: 'Best Drama Movies on Peacock',
            description: 'The most emotionally resonant dramas ranked by character depth and impact. From Requiem for a Dream to The Fabelmans',
            icon: Film,
            gradient: 'from-indigo-600 to-violet-800',
            movieCount: '10',
            rating: '8.1',
            directLink: '/collection/best-drama-movies-on-peacock',
            hasSubCollections: false
        },


        {
            id: 'peacock-thriller',
            title: 'Best Thriller Movies on Peacock',
            description: 'Ranked by suspense and psychological dread. From Memento to Sicario.',
            icon: Eye,
            gradient: 'from-red-800 to-slate-900',
            movieCount: '10',
            rating: '7.6',
            directLink: '/collection/best-thriller-movies-on-peacock',
            hasSubCollections: false
        },

{
            id: 'peacock-best',
            title: 'Top 10 Best Movies on Peacock',
            description: 'The definitive ranking of the highest-rated films streaming on Peacock right now. From Memento to Sicario',
            icon: Crown,
            gradient: 'from-yellow-500 to-amber-600',
            movieCount: '10',
            rating: '8.1',
            directLink: '/collection/best-movies-on-peacock',
            hasSubCollections: false
        },

        {
            id: 'oldboy',
            title: 'Movies Like Oldboy',
            description: 'Brutal revenge thrillers with shocking twists, twisted vengeance, and moral devastation',
            icon: Shield,
            gradient: 'from-red-700 to-rose-900',
            movieCount: '10',
            rating: '8.7',
            directLink: '/collection/movies-like-oldboy',
            hasSubCollections: false
        },
        {
            id: 'donnie-darko',
            title: 'Movies Like Donnie Darko',
            description: 'Mind-bending time travel, reality-warping films with psychological complexity and existential twists',
            icon: Clock,
            gradient: 'from-purple-600 to-indigo-800',
            movieCount: '10',
            rating: '8.6',
            directLink: '/collection/movies-like-donnie-darko',
            hasSubCollections: false
        },
        {
            id: 'eyes-wide-shut',
            title: 'Movies Like Eyes Wide Shut',
            description: 'Paranoid thrillers about secret societies, occult rituals, and the hidden elite',
            icon: Eye,
            gradient: 'from-violet-700 to-slate-900',
            movieCount: '10',
            rating: '7.6',
            directLink: '/collection/movies-like-eyes-wide-shut',
            hasSubCollections: false
        },
        {
            id: 'interstellar',
            title: 'Movies Like Interstellar',
            description: 'Epic space odysseys with cosmic scope, time dilation, and profound human emotion',
            icon: Sparkles,
            gradient: 'from-cyan-600 to-blue-800',
            movieCount: '10',
            rating: '8.3',
            directLink: '/collection/movies-like-interstellar',
            hasSubCollections: false
        },
        {
            id: 'se7en',
            title: 'Movies Like Se7en',
            description: 'Dark, atmospheric crime thrillers with obsessed detectives and shocking psychological twists',
            icon: Eye,
            gradient: 'from-amber-700 to-gray-900',
            movieCount: '10',
            rating: '8.8',
            directLink: '/collection/movies-like-se7en',
            hasSubCollections: false
        },
        {
            id: 'parasite',
            title: 'Movies Like Parasite',
            description: 'Dark satires exposing class warfare, wealth disparity, and social injustice with thriller intensity',
            icon: Scale,
            gradient: 'from-slate-700 to-gray-900',
            movieCount: '10',
            rating: '8.5',
            directLink: '/collection/movies-like-parasite',
            hasSubCollections: false
        },
        {
            id: 'black-swan',
            title: 'Movies Like Black Swan',
            description: 'Psychological horror exploring artistic obsession, identity fragmentation, and the dark side of perfection',
            icon: Brain,
            gradient: 'from-purple-600 to-pink-800',
            movieCount: '10',
            rating: '8.2',
            directLink: '/collection/movies-like-black-swan',
            hasSubCollections: false
        },
        {
            id: 'matrix',
            title: 'Movies Like The Matrix',
            description: 'Cyberpunk masterpieces with simulated realities, digital consciousness, and reality-bending awakenings',
            icon: Sparkles,
            gradient: 'from-emerald-500 to-teal-600',
            movieCount: '10',
            rating: '8.4',
            directLink: '/collection/movies-like-the-matrix',
            hasSubCollections: false
        },
        {
            id: 'war-films',
            title: 'Best War Films',
            description: 'Brutally realistic war movies capturing combat, sacrifice, and the human cost of conflict',
            icon: Shield,
            gradient: 'from-red-600 to-amber-700',
            movieCount: '10',
            rating: '9.0',
            directLink: '/collection/best-war-films',
            hasSubCollections: false
        },
        {
            id: 'revenge',
            title: 'Best Revenge Movies',
            description: 'Brutal vengeance films exploring retribution, moral cost, and the devastating path of revenge',
            icon: Shield,
            gradient: 'from-red-700 to-rose-900',
            movieCount: '10',
            rating: '8.0',
            directLink: '/collection/best-revenge-movies',
            hasSubCollections: false
        },
        {
            id: 'crime-thriller',
            title: 'Best Crime Thriller Movies',
            description: 'Gritty crime epics with moral complexity, brilliant heists, and law vs. lawlessness',
            icon: Scale,
            gradient: 'from-slate-600 to-gray-900',
            movieCount: '10',
            rating: '8.9',
            directLink: '/collection/best-crime-thriller-movies',
            hasSubCollections: false
        },
        {
            id: 'heist-thriller',
            title: 'Best Heist Thriller Movies',
            description: 'Masterful heist films with elaborate plans, high-stakes robberies, and criminal masterminds',
            icon: DollarSign,
            gradient: 'from-amber-500 to-orange-700',
            movieCount: '10',
            rating: '8.7',
            directLink: '/collection/best-heist-thriller-movies',
            hasSubCollections: false
        },
        {
            id: 'sci-fi',
            title: 'Best Sci-Fi Movies',
            description: 'Visionary science fiction films exploring humanity, technology, and the cosmos',
            icon: Sparkles,
            gradient: 'from-cyan-500 to-blue-700',
            movieCount: '10',
            rating: '8.2',
            directLink: '/collection/best-sci-fi-movies',
            hasSubCollections: false
        },
        {
            id: 'time-travel',
            title: 'Best Time Travel Movies',
            description: 'Mind-bending time travel films with paradoxes, causality loops, and temporal complexity',
            icon: Clock,
            gradient: 'from-blue-500 to-cyan-600',
            movieCount: '10',
            rating: '8.1',
            directLink: '/collection/best-time-travel-movies',
            hasSubCollections: false
        },
        {
            id: 'psychological-thriller',
            title: 'Best Psychological Thrillers',
            description: 'Mind-bending narratives with intense psychological suspense and twists',
            icon: Brain,
            gradient: 'from-pink-600 to-red-700',
            movieCount: '10',
            rating: '8.7',
            directLink: '/collection/best-psychological-thriller-movies',
            hasSubCollections: false
        },
        {
            id: 'suspense-thriller',
            title: 'Best Suspense Thriller Movies',
            description: 'The ultimate selection of nail-biting, edge-of-your-seat suspense thrillers',
            icon: Star,
            gradient: 'from-yellow-500 to-orange-700',
            movieCount: '10',
            rating: '8.8',
            directLink: '/collection/best-thriller-movies',
            hasSubCollections: false
        },
        {
            id: 'detective-thriller',
            title: 'Best Detective Thriller Movies',
            description: 'Gripping detective stories with intense investigations and suspenseful mysteries',
            icon: Star,
            gradient: 'from-blue-500 to-indigo-700',
            movieCount: '10',
            rating: '8.5',
            directLink: '/collection/best-detective-thriller-movies',
            hasSubCollections: false
        },
        {
            id: 'mystery-thriller',
            title: 'Best Mystery Thriller Movies',
            description: 'Intricate detective mysteries with brilliant puzzle-solving and shocking reveals',
            icon: Eye,
            gradient: 'from-indigo-500 to-purple-700',
            movieCount: '10',
            rating: '8.6',
            directLink: '/collection/best-mystery-thriller-movies',
            hasSubCollections: false
        },

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
                <meta name="robots" content="index, follow" />
            </Head>

            <div className="min-h-screen bg-black text-white">
                {/* Fixed Header - CONSISTENT WITH HOMEPAGE */}
                <motion.header
                    className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-between h-16 sm:h-20">
                            <Link href="/" className="flex items-center">
                                {/* ✅ CONSISTENT LOGO SIZE WITH HOMEPAGE */}
                                <div className="w-24 sm:w-32 h-full flex items-center">
                                    <Image
                                        src="/filmiway-logo.svg"
                                        alt="Filmiway"
                                        width={160}
                                        height={60}
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                        draggable={false}
                                        priority
                                    />
                                </div>
                            </Link>
                            <Link href="/">
                                <button className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors px-4 py-2 rounded-lg border border-gray-700/50 hover:border-yellow-400/50 hover:scale-105 transition-all duration-300">
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
                                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                />
                            </div>
                        </motion.div>

                        {/* Collections Grid */}
                        <div className="space-y-6">
                            {filteredCollections.map((collection, index) => {
                                // Card Content Component
                                const CardContent = (
                                    <div className={`group relative bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/5 ${
                                        collection.hasSubCollections ? 'cursor-pointer' : ''
                                    }`}>
                                        <div className="p-6 sm:p-8">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${collection.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                            {(() => {
                                                                const IconComponent = collection.icon;
                                                                return <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />;
                                                            })()}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                                                                {collection.title}
                                                            </h2>
                                                            <p className="text-sm sm:text-base text-gray-400 mt-1 line-clamp-2">
                                                                {collection.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-4 flex-wrap">
                                                        <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/40 px-3 py-1.5 rounded-lg">
                                                            <Film className="w-4 h-4 text-yellow-400" />
                                                            <span className="font-medium">{collection.movieCount} Films</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/40 px-3 py-1.5 rounded-lg">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            <span className="font-medium">{collection.rating}/10</span>
                                                        </div>
                                                        {!collection.hasSubCollections && (
                                                            <div className="flex items-center gap-2 text-sm text-yellow-400 group-hover:translate-x-2 transition-transform">
                                                                <span className="font-medium">View Collection</span>
                                                                <ArrowRight className="w-4 h-4" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {collection.hasSubCollections && (
                                                    <div className="flex-shrink-0">
                                                        <ChevronDown
                                                            className={`w-6 h-6 text-yellow-400 transition-transform duration-300 ${
                                                                expandedCollection === collection.id ? 'rotate-180' : ''
                                                            }`}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );

                                return (
                                    <motion.div
                                        key={collection.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                                    >
                                        {/* ✅ CONDITIONAL WRAPPING: Link for direct pages, Div with onClick for expandable */}
                                        {collection.hasSubCollections ? (
                                            <div onClick={() => toggleExpand(collection.id)}>
                                                {CardContent}
                                            </div>
                                        ) : (
                                            <Link href={collection.directLink || '#'}>
                                                {CardContent}
                                            </Link>
                                        )}

                                        {/* Sub-Collections with Enhanced Design */}
                                        <AnimatePresence>
                                            {expandedCollection === collection.id && collection.hasSubCollections && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="mt-4"
                                                >
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                                        {collection.subCollections.map((subCollection) => (
                                                            <Link
                                                                key={subCollection.slug}
                                                                href={`/collection/${subCollection.slug}`}
                                                                className="group/sub block"
                                                            >
                                                                <div className="bg-gray-900/80 border border-gray-800/50 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 hover:-translate-y-1">
                                                                    <div className="aspect-[2/3] w-full overflow-hidden relative">
                                                                        <Image
                                                                            src={subCollection.poster}
                                                                            alt={subCollection.title}
                                                                            width={500}
                                                                            height={750}
                                                                            className="w-full h-full object-cover group-hover/sub:scale-110 transition-transform duration-500"
                                                                            loading="lazy"
                                                                            draggable={false}
                                                                        />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover/sub:opacity-70 transition-opacity" />
                                                                    </div>
                                                                    <div className="p-4">
                                                                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover/sub:text-yellow-400 transition-colors line-clamp-2">
                                                                            {subCollection.title}
                                                                        </h3>
                                                                        <p className="text-xs sm:text-sm text-gray-400 mb-3 line-clamp-2">
                                                                            {subCollection.description}
                                                                        </p>
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="text-xs text-gray-500 font-medium">{subCollection.count}</span>
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
                                );
                            })}
                        </div>

                        {/* No Results State */}
                        {filteredCollections.length === 0 && (
                            <motion.div
                                className="text-center py-16"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Search className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                                <h3 className="text-xl text-gray-400 mb-2">No collections found</h3>
                                <p className="text-gray-600">Try adjusting your search terms</p>
                            </motion.div>
                        )}

                        {/* Coming Soon */}
                        <motion.div
                            className="mt-16 bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/30 rounded-2xl p-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Sparkles className="w-8 h-8 text-orange-400" />
                                <h3 className="text-2xl font-light text-gray-400">More Collections Coming Soon</h3>
                            </div>
                            <p className="text-gray-500 mb-6">Additional curated collections in development</p>
                            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
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