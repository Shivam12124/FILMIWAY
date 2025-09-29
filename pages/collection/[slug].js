// pages/collection/[slug].js - SEO OPTIMIZED WITH CONSISTENT HEADERS FOR ALL COLLECTIONS
import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, Star, MessageSquare, Volume2, VolumeX, Play, Pause, Menu, X, Home, Eye, MousePointer, TrendingUp, Users, Search, Brain, Zap, Film, Award, Mountain, Shield } from 'lucide-react';

// Components
import CinematicBackground from '../../components/CinematicBackground';
import StrategicControls from '../../components/StrategicControls';
import CinematicMovieCard from '../../components/CinematicMovieCard';

// Data
import { COLLECTIONS, getAllCollectionSlugs, getCollectionBySlug } from '../../data/collections';
import { COMPLETE_MOVIE_DATABASE } from '../../utils/movieData';

// Safe property getters
const getMovieTitle = (movie) => movie?.Title || movie?.title || movie?.name || 'Unknown Movie';
const getMovieYear = (movie) => movie?.Year || movie?.year || movie?.releaseYear || '2024';
const getMovieGenre = (movie) => {
    const genre = movie?.Genre || movie?.genre || movie?.genres || 'Drama';
    return typeof genre === 'string' ? genre.split(',')[0].trim() : 'Drama';
};
const getMovieRuntime = (movie) => movie?.Runtime || movie?.runtime || '120 min';

// LOGO COMPONENT
const TopLeftLogo = () => (
    <motion.div 
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    >
        <Link href="/" className="flex items-center justify-start">
            <div className="w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 flex items-center justify-start hover:scale-105 transition-transform duration-300">
                <img 
                    src="/filmiway-logo.svg" 
                    alt="Filmiway" 
                    className="w-full h-full object-contain"
                />
            </div>
        </Link>
    </motion.div>
);

// HOMEPAGE BUTTON
const HomepageButton = () => (
    <motion.div 
        className="fixed top-24 left-4 sm:top-32 sm:left-6 md:top-36 md:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
    >
        <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300"
        >
            <Home className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Home</span>
        </Link>
    </motion.div>
);

// 🔥 COLLECTION PAGE COMPONENT WITH SURVIVAL SUPPORT
const CollectionPage = ({ collection, movies }) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    // Handle return from movie detail page + position tracking
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const returningFromMovie = sessionStorage.getItem('returningFromMovie');
            const returnToPosition = sessionStorage.getItem('returnToPosition');
            
            if (returningFromMovie && returnToPosition) {
                setCurrentMovieIndex(parseInt(returnToPosition));
                sessionStorage.removeItem('returningFromMovie');
                sessionStorage.removeItem('returnToPosition');
            }
        }
        
        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    // 🔥 COLLECTION-SPECIFIC CONTENT FUNCTION WITH SURVIVAL SUPPORT
    const getCollectionContent = () => {
        if (collection.slug === 'movies-like-memento') {
            return {
                badge: "Memory-Twisting Cinema",
                title: "Memento",
                description: "Dive into a curated collection of memory-twisting psychological thrillers that challenge identity and perception, ranked by memory complexity and engaging storytelling",
                selection: {
                    text1: "From reverse chronology to fragmented memories, these films challenge viewers to piece together narratives just as protagonists struggle to understand their own identities and past.",
                    text2: "Each memory-twisting masterpiece features protagonists battling amnesia, false memories, or temporal confusion, creating experiences that mirror the disorientation of memory loss itself."
                },
                ranking: {
                    text: "Our memory complexity index evaluates narrative structure, identity confusion, and the sophistication of memory-related storytelling techniques used throughout each film.",
                    points: [
                        "Non-linear narrative complexity",
                        "Identity confusion depth", 
                        "Memory manipulation techniques",
                        "Psychological impact intensity"
                    ]
                },
                experience: {
                    text1: "Whether you're seeking intricate plot structures or psychological depth, this collection delivers cinema's most sophisticated explorations of memory and identity.",
                    text2: "Each film has been selected for its ability to create genuine confusion and revelation, mirroring the experience of characters struggling with fractured memories and uncertain identities."
                }
            };
        } else if (collection.slug === 'movies-like-inception') {
            return {
                badge: "Mind-Bending Cinema",
                title: "Inception", 
                description: "Dive into a curated collection of reality-bending masterpieces that challenge perception and ignite the mind, ranked by complexity and engaging storytelling",
                selection: {
                    text1: "From multi-layered dreamscapes to parallel realities, these films push the boundaries of narrative structure while maintaining emotional depth and philosophical weight.",
                    text2: "Each mind-bending masterpiece features complex protagonists navigating impossible scenarios, time paradoxes, and reality distortions that challenge everything you think you know."
                },
                ranking: {
                    text: "Our mind-bending index evaluates narrative complexity, reality distortion, and the sophistication of conceptual storytelling techniques used throughout each film.",
                    points: [
                        "Conceptual complexity depth",
                        "Reality distortion intensity",
                        "Narrative structure innovation", 
                        "Philosophical impact weight"
                    ]
                },
                experience: {
                    text1: "Whether you're seeking intricate plot mechanics or philosophical depth, this collection delivers cinema's most ambitious reality-bending experiences.",
                    text2: "Each film has been selected for its ability to create lasting impact, with concepts that continue revealing new layers upon repeated viewings and deeper analysis."
                }
            };
        } else if (collection.slug === 'movies-like-shutter-island') {
            return {
                badge: "Psychological Thriller Cinema",
                title: "Shutter Island",
                description: "Dive into a curated collection of psychological thrillers with unreliable narrators, identity crises, and shocking revelations that redefine everything you thought you knew",
                selection: {
                    text1: "From unreliable narrators to shocking plot twists, these films master the art of psychological manipulation while maintaining gripping thriller elements and emotional authenticity.",
                    text2: "Each psychological masterpiece features protagonists whose perception of reality becomes increasingly questionable, leading viewers down paths of doubt, paranoia, and ultimate revelation."
                },
                ranking: {
                    text: "Our psychological complexity index evaluates narrative deception, identity questioning, and the sophistication of psychological thriller techniques throughout each film.",
                    points: [
                        "Unreliable narrator mastery",
                        "Identity crisis complexity",
                        "Plot twist sophistication",
                        "Psychological manipulation depth"
                    ]
                },
                experience: {
                    text1: "Whether you're seeking shocking revelations or psychological depth, this collection delivers cinema's most masterful explorations of identity and reality distortion.",
                    text2: "Each film has been selected for its ability to completely reframe the viewing experience, with revelations that transform every previous scene into something entirely different."
                }
            };
        } 
        // 🔥 NEW SURVIVAL COLLECTION CONTENT
        else if (collection.slug === 'best-survival-movies') {
            return {
                badge: "Extreme Survival Cinema",
                title: "Best Survival Movies",
                description: "Dive into a curated collection of the most extreme survival stories ever captured on film, ranked by survivability index and human endurance requirements",
                selection: {
                    text1: "From being trapped under boulders to surviving plane crashes in the Andes, these films showcase the ultimate tests of human willpower and survival instinct against impossible odds.",
                    text2: "Each survival story demonstrates how ordinary people can endure extraordinary circumstances, from desert islands to frozen wilderness, showcasing the depths of human resilience and determination."
                },
                ranking: {
                    text: "Our survivability index evaluates each film's extreme conditions, human endurance requirements, and the impossible odds overcome by the protagonists in their fight for survival.",
                    points: [
                        "Survival Environment Difficulty",
                        "Human Endurance Requirements", 
                        "Impossible Odds Overcome",
                        "Real Story Impact"
                    ]
                },
                experience: {
                    text1: "Whether you're seeking extreme survival films or human endurance stories, this collection delivers the most intense and inspiring survival cinema ever made.",
                    text2: "Each survival masterpiece has been selected for its ability to showcase the incredible strength of human spirit when facing the most impossible circumstances and life-threatening situations."
                }
            };
        }
        else {
            return {
                badge: "Cinematic Excellence",
                title: collection.title || "Cinema", 
                description: `Dive into a curated collection of ${collection.title || 'amazing films'} that deliver exceptional storytelling and cinematic brilliance`,
                selection: {
                    text1: `This carefully curated selection represents the finest examples of ${collection.title || 'cinema'}, chosen for their exceptional storytelling, technical mastery, and lasting cultural impact.`,
                    text2: "Each film demonstrates mastery of the cinematic arts, combining innovative techniques with compelling narratives that have influenced generations of filmmakers and audiences."
                },
                ranking: {
                    text: "Our ranking system evaluates artistic achievement, cultural impact, and technical excellence to identify the most essential films in this category.",
                    points: [
                        "Artistic achievement level",
                        "Cultural impact depth",
                        "Technical excellence mastery",
                        "Narrative innovation strength"
                    ]
                },
                experience: {
                    text1: "Whether you're a casual viewer or serious cinephile, this collection offers films that showcase the very best of cinematic storytelling and artistic expression.",
                    text2: "Each selection represents a significant contribution to film history, offering both entertainment value and deeper artistic appreciation for the medium's possibilities."
                }
            };
        }
    };

    // 🔥 UPDATED CONSISTENT HEADER FORMAT FOR ALL COLLECTIONS
    const getHeaderContent = () => {
        if (collection.slug === 'movies-like-memento') {
            return {
                title: "Best Movies Like Memento – 10 Mind-Bending Thrillers You Must Watch",
                subtitle: "Memory-Twisting Psychological Thrillers with Non-Linear Storytelling Ranked by Complexity"
            };
        } else if (collection.slug === 'movies-like-inception') {
            return {
                title: "Best Movies Like Inception – 10 Mind-Bending Thrillers You Must Watch",
                subtitle: "Reality-Bending Sci-Fi Thrillers with Complex Narratives Ranked by Complexity"
            };
        } else if (collection.slug === 'movies-like-shutter-island') {
            return {
                title: "Best Movies Like Shutter Island – 10 Mind-Bending Thrillers You Must Watch",
                subtitle: "Psychological Thrillers with Unreliable Narrators & Shocking Plot Twists Ranked by Complexity"
            };
        } 
        // 🔥 NEW SURVIVAL HEADER WITH CONSISTENT FORMAT
        else if (collection.slug === 'best-survival-movies') {
            return {
                title: "Best Survival Movies – 10 Extreme Survival Thrillers You Must Watch",
                subtitle: "Ultimate Tests of Human Endurance & Willpower Ranked by Survivability Index"
            };
        }
        else {
            return {
                title: `Best ${collection.title} – Curated Collection You Must Watch`,
                subtitle: collection.description || "Exceptional Cinema Ranked by Quality"
            };
        }
    };

    // 🔥 LOADER CONTENT WITH SURVIVAL SUPPORT
    const getLoaderContent = () => {
        if (collection?.slug === 'movies-like-memento') {
            return {
                title: "Loading Movies Like Memento",
                description: "Curating memory-twisting psychological thrillers with community reviews and ratings"
            };
        } else if (collection?.slug === 'movies-like-inception') {
            return {
                title: "Loading Movies Like Inception", 
                description: "Curating mind-bending sci-fi thrillers with community reviews and ratings"
            };
        } else if (collection?.slug === 'movies-like-shutter-island') {
            return {
                title: "Loading Movies Like Shutter Island",
                description: "Curating psychological thrillers with unreliable narrators and shocking plot twists"
            };
        } 
        // 🔥 NEW SURVIVAL LOADER
        else if (collection?.slug === 'best-survival-movies') {
            return {
                title: "Loading Best Survival Movies",
                description: "Curating extreme survival stories with survivability index and community reviews"
            };
        }
        else {
            return {
                title: "Loading Movie Collection",
                description: "Curating exceptional cinema with community reviews and ratings"
            };
        }
    };

    // 🔥 PAGE CONTENT WITH SURVIVAL SUPPORT
   const getPageContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            title: "Best Movies Like Memento – 10 Mind-Bending Psychological Thrillers You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 memory-twisting thrillers like Memento. Carefully analyzed for shocking twists, expert storytelling, and unforgettable endings—perfect for true psychological thriller fans!",
            keywords: "movies like memento, films similar to memento, memory loss movies, psychological thrillers, non linear storytelling, christopher nolan memento, identity crisis films, memento similar movies, memory twisting films, amnesia movies, reverse chronology films, unreliable narrator movies",
            ogTitle: "The Most Advanced List on the Internet – 10 Mind-Bending Movies Like Memento 🧠",
            twitterTitle: "🧠 The Most Advanced Handpicked List – 10 Movies Like Memento",
            progressText: `of Top ${movies.length} Movies Like Memento`
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
            title: "Best Movies Like Inception – 10 Mind-Bending Thrillers You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Inception. Carefully analyzed for shocking twists, layered narratives, and expert storytelling—perfect for true psychological thriller fans!",
            keywords: "movies like inception, films similar to inception, mind bending movies, psychological thrillers, complex movies with twists, christopher nolan movies, reality bending films, layered narrative films, inception similar movies, mind bending thrillers, dream logic movies",
            ogTitle: "The Most Advanced List on the Internet – 10 Mind-Bending Movies Like Inception 🧠",
            twitterTitle: "🧠 The Most Advanced Handpicked List – 10 Movies Like Inception",
            progressText: `of Top ${movies.length} Movies Like Inception`
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            title: "Best Movies Like Shutter Island – 10 Mind-Bending Psychological Thrillers You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Shutter Island. Carefully analyzed for shocking twists, unreliable narrators, and expert storytelling—perfect for true psychological thriller fans!",
            keywords: "movies like shutter island, films similar to shutter island, psychological thrillers, unreliable narrator films, identity crisis movies, plot twist movies, martin scorsese shutter island, psychological horror films, reality distortion movies, memory manipulation films, shocking revelations movies",
            ogTitle: "The Most Advanced List on the Internet – 10 Mind-Bending Movies Like Shutter Island 🧠",
            twitterTitle: "🧠 The Most Advanced Handpicked List – 10 Movies Like Shutter Island",
            progressText: `of Top ${movies.length} Movies Like Shutter Island`
            };
        } 
        // 🔥 NEW SURVIVAL PAGE CONTENT WITH CONSISTENT FORMAT
        else if (collection.slug === 'best-survival-movies') {
            return {
                title: "Best Survival Movies – 10 Extreme Survival Thrillers You Must Watch",
                description: "Stop scrolling! Discover the 10 most extreme survival movies ever made. From 127 Hours to Unbroken, explore cinema's ultimate tests of human endurance ranked by survivability index.",
                keywords: "best survival movies, survival films, extreme survival, survivability index, brutal survival stories, human endurance movies, true survival stories, survival cinema, 127 hours movies, cast away similar movies, the revenant survival films",
                ogTitle: "Best Survival Movies – 10 Extreme Survival Thrillers You Must Watch",
                twitterTitle: "Best Survival Movies – 10 Extreme Survival Thrillers You Must Watch", 
                progressText: `of Top ${movies.length} Survival Movies`
            };
        }
        else {
            return {
                title: `Best ${collection.title} – Curated Movie Collection You Must Watch`,
                description: `Discover ${collection.title} - ${collection.description || 'A curated collection of exceptional films'}.`,
                keywords: `${collection.title}, curated movies, film collection, cinema, movie recommendations`,
                ogTitle: `Best ${collection.title} – Curated Collection You Must Watch`,
                twitterTitle: `Best ${collection.title} – Curated Collection You Must Watch`,
                progressText: `of ${collection.title}`
            };
        }
    };

    const nextMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev + 1) % movies.length);
    }, [movies.length]);

    const prevMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev - 1 + movies.length) % movies.length);
    }, [movies.length]);

    const goToMovie = useCallback((index) => {
        setCurrentMovieIndex(index);
    }, []);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') prevMovie();
            if (e.key === 'ArrowRight') nextMovie();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [nextMovie, prevMovie]);

    // Get current movie and calculate rank
    const currentMovie = movies[currentMovieIndex];
    const currentRank = movies.length - currentMovieIndex;

    // Smart navigation - no left arrow on position 10
    const isFirstMovie = currentRank === 10;

    const playSound = (type) => {
        if (!isMuted) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.value = type === 'hover' ? 440 : 330;
                gainNode.gain.setValueAtTime(0.006, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.003, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (error) {
                console.log('Audio not available');
            }
        }
    };

    // 🔥 MOVIE CLICK HANDLER WITH SURVIVAL SUPPORT
    const handleMovieClick = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('currentMoviePosition', currentMovieIndex.toString());
            sessionStorage.setItem('currentMovieRank', currentRank.toString());
            sessionStorage.setItem('currentCollection', collection.slug);
            sessionStorage.setItem('collectionTitle', collection.title);
            sessionStorage.setItem('fromCollection', 'true');
            
            // Clear all collection flags first
            sessionStorage.removeItem('fromInceptionCollection');
            sessionStorage.removeItem('fromMementoCollection');
            sessionStorage.removeItem('fromShutterIslandCollection');
            sessionStorage.removeItem('fromSurvivalCollection');
            
            // Set appropriate collection flag including survival
            if (collection.slug === 'movies-like-inception') {
                sessionStorage.setItem('fromInceptionCollection', 'true');
            } else if (collection.slug === 'movies-like-memento') {
                sessionStorage.setItem('fromMementoCollection', 'true');
            } else if (collection.slug === 'movies-like-shutter-island') {
                sessionStorage.setItem('fromShutterIslandCollection', 'true');
            } else if (collection.slug === 'best-survival-movies') {
                sessionStorage.setItem('fromSurvivalCollection', 'true');
            }
        }
    };

    // Get dynamic content
    const collectionContent = getCollectionContent();
    const headerContent = getHeaderContent();
    const loaderContent = getLoaderContent();
    const pageContent = getPageContent();

    // 🔥 ENHANCED CINEMATIC EXPLORER SECTION WITH SURVIVAL SUPPORT
    const CinematicExplorerSection = ({ currentRank }) => {
        // Only render when currentRank === 10
        if (currentRank !== 10) {
            return null;
        }

        // 🔥 SURVIVAL-SPECIFIC ICONS
        const getCollectionIcons = () => {
            if (collection.slug === 'best-survival-movies') {
                return {
                    icon1: Mountain,
                    icon2: Film, 
                    icon3: Shield
                };
            }
            return {
                icon1: Brain,
                icon2: Film,
                icon3: Award
            };
        };

        const icons = getCollectionIcons();

        return (
            <motion.section 
                className="relative mt-8 sm:mt-16 mb-12 sm:mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.2 }}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Title Section */}
                    <motion.div 
                        className="text-center mb-16 sm:mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
                            <icons.icon1 className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">{collectionContent.badge}</span>
                            <icons.icon3 className="w-5 h-5 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
                                Explore {collectionContent.title}
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text font-normal bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300">
                                Cinema Collection
                            </span>
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed font-light">
                            {collectionContent.description}
                        </p>
                    </motion.div>

                    {/* Three-Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20">
                        
                        {/* Column 1 - The Selection */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.2, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border-yellow-400/20">
                                    <icons.icon2 className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-light text-white">The Selection</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.selection.text1}
                            </p>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.selection.text2}
                            </p>
                        </motion.div>

                        {/* Column 2 - The Ranking */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.4, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border-yellow-400/20">
                                    <TrendingUp className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-light text-white">The Ranking</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.ranking.text}
                            </p>
                            
                            <div className="space-y-3">
                                {collectionContent.ranking.points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <span className="text-gray-400">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Column 3 - The Experience */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.6, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border-yellow-400/20">
                                    <icons.icon3 className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-light text-white">The Experience</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.experience.text1}
                            </p>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.experience.text2}
                            </p>
                            
                            <div className="pt-4">
                                <div className="flex items-center gap-2 px-4 py-2 border rounded-lg w-fit bg-yellow-400/10 border-yellow-400/20">
                                    <Users className="w-4 h-4 text-yellow-400" />
                                    <span className="text-sm font-medium text-yellow-400">
                                        {collection.slug === 'best-survival-movies' ? 'Survivability Indexed' : 'Community Curated'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Cinematic Divider */}
                    <motion.div 
                        className="flex items-center justify-center mb-16 sm:mb-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <div className="flex items-center gap-8">
                            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent to-yellow-400/50"></div>
                            <div className="relative">
                                <motion.div 
                                    className="w-3 h-3 border-2 rotate-45 border-yellow-400/50"
                                    animate={{ rotate: 405 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                ></motion.div>
                                <div className="absolute inset-0 w-3 h-3 rounded-full blur-sm bg-yellow-400/20"></div>
                            </div>
                            <div className="w-24 sm:w-32 h-px bg-gradient-to-l from-transparent to-yellow-400/50"></div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        );
    };

    // 🔥 CINEMATIC HEADER WITH CONSISTENT FORMAT
    const CinematicHeader = React.memo(() => {
        return (
            <header className="text-center mb-8 sm:mb-16 lg:mb-20 px-4 sm:px-6 w-full relative">
                <motion.div 
                    initial={{ opacity: 0, y: -40 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.2, ease: "easeOut" }} 
                    className="space-y-6 sm:space-y-8 lg:space-y-12 relative z-10"
                >
                    <motion.div className="relative">
                        {/* H1 Tag - CONSISTENT FORMAT FOR ALL COLLECTIONS */}
                        <motion.h1 
                            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[0.05em] sm:tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-300" 
                            style={{ 
                                fontFamily: "'Playfair Display', serif", 
                                textShadow: '0 0 80px rgba(234, 179, 8, 0.15)'
                            }} 
                            whileHover={{ 
                                scale: 1.02, 
                                textShadow: '0 0 100px rgba(234, 179, 8, 0.25)'
                            }} 
                            transition={{ duration: 0.4 }}
                        >
                            <span className="block leading-tight" style={{ letterSpacing: '0.05em' }}>
                                {headerContent.title}
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            className="text-lg sm:text-xl md:text-2xl font-light mt-6 text-yellow-200/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            {headerContent.subtitle}
                        </motion.p>
                        
                        <motion.div 
                            initial={{ scaleX: 0 }} 
                            animate={{ scaleX: 1 }} 
                            transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }} 
                            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 sm:w-64 lg:w-96 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" 
                        />
                    </motion.div>
                    
                    {/* Enhanced Badge Grid */}
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20 max-w-4xl mx-auto" 
                        initial={{ opacity: 0, y: 40 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 2, duration: 0.8 }}
                    >
                        {collection.badges?.map((badge, index) => (
                            <motion.div 
                                key={index}
                                className="relative group" 
                                whileHover={{ y: -8, scale: 1.03 }} 
                                transition={{ duration: 0.4 }}
                            >
                                <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-black/40 border border-yellow-500/20 rounded-2xl backdrop-blur-xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="flex flex-col items-center space-y-4 relative z-10">
                                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-xl flex items-center justify-center border border-yellow-400/30">
                                            {collection.slug === 'best-survival-movies' && index === 0 && <Mountain className="w-7 h-7 text-yellow-400" />}
                                            {collection.slug === 'best-survival-movies' && index === 1 && <Star className="w-7 h-7 text-yellow-400" />}
                                            {collection.slug === 'best-survival-movies' && index === 2 && <Shield className="w-7 h-7 text-yellow-400" />}
                                            {collection.slug !== 'best-survival-movies' && index === 0 && <Brain className="w-7 h-7 text-yellow-400" />}
                                            {collection.slug !== 'best-survival-movies' && index === 1 && <Star className="w-7 h-7 text-yellow-400" />}
                                            {collection.slug !== 'best-survival-movies' && index === 2 && <Award className="w-7 h-7 text-yellow-400" />}
                                        </div>
                                        
                                        <h3 className="text-yellow-200 text-base sm:text-lg font-medium tracking-wider uppercase text-center leading-tight">
                                            {badge.label}
                                        </h3>
                                        <p className="text-gray-400 text-sm text-center leading-relaxed">
                                            {badge.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </header>
        );
    });

    // 🔥 CINEMATIC LOADER WITH SURVIVAL SUPPORT
    const CinematicLoader = React.memo(() => {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-8 sm:space-y-16 px-4 sm:px-8">
                <div className="relative">
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                        className="w-16 h-16 sm:w-24 sm:h-24 border-4 border-gray-800/60 rounded-full relative"
                    >
                        <div className="absolute inset-2 sm:inset-3 border-2 border-yellow-500/40 rounded-full">
                            <div className="absolute inset-1 sm:inset-2 border border-yellow-400/30 rounded-full">
                                <div className="absolute inset-1 bg-yellow-500/10 rounded-full" />
                            </div>
                        </div>
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                            <div 
                                key={index} 
                                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400/40 rounded-full" 
                                style={{ 
                                    top: '6px', 
                                    left: '50%', 
                                    transformOrigin: '0 26px', 
                                    transform: `translateX(-50%) rotate(${rotation}deg)` 
                                }} 
                            />
                        ))}
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.8 }} 
                    className="text-center space-y-4 sm:space-y-6 max-w-xs sm:max-w-md"
                >
                    <h2 className="text-xl sm:text-2xl font-light text-gray-200 tracking-[0.2em] uppercase">
                        {loaderContent.title}
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
                        {loaderContent.description}
                    </p>
                    <div className="w-48 h-1 sm:w-64 bg-gray-800 rounded-full overflow-hidden mx-auto">
                        <motion.div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" 
                            animate={{ x: ['-100%', '100%'] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                        />
                    </div>
                </motion.div>
            </div>
        );
    });

    // NAVIGATION DOTS COMPONENT
    const NavigationDots = ({ movies, currentMovieIndex, goToMovie }) => (
        <motion.div 
            className="flex justify-center items-center space-x-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            {movies.map((_, index) => (
                <motion.button
                    key={index}
                    onClick={() => goToMovie(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                        index === currentMovieIndex 
                            ? 'bg-yellow-400 scale-125' 
                            : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: index === currentMovieIndex ? 1.3 : 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {index === currentMovieIndex && (
                        <motion.div
                            className="absolute inset-0 bg-yellow-400/30 rounded-full"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    )}
                </motion.button>
            ))}
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                <title>{pageContent.title}</title>
                <meta name="description" content={pageContent.description} />
                <meta name="keywords" content={pageContent.keywords} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://filmiway.com/collection/${collection.slug}`} />
                <link rel="icon" href="/favicon.ico" />
                
                <meta property="og:title" content={pageContent.ogTitle} />
                <meta property="og:description" content={pageContent.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://filmiway.com/collection/${collection.slug}`} />
                <meta property="og:site_name" content="Filmiway" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageContent.twitterTitle} />
                <meta name="twitter:description" content={pageContent.description} />
            </Head>

            <CinematicBackground />
            <StrategicControls 
                isMuted={isMuted}
                setIsMuted={setIsMuted}
                isAutoPlay={isAutoPlay}
                setIsAutoPlay={setIsAutoPlay}
                playSound={playSound}
            />
            
            <TopLeftLogo />
            <HomepageButton />
            
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-h-screen flex items-center justify-center"
                    >
                        <CinematicLoader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="collection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10"
                    >
                        <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
                            <CinematicHeader />
                            
                            {/* Cinematic Explorer Section - Only shows on #10 */}
                            <CinematicExplorerSection currentRank={currentRank} />
                            
                            <div className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
                                {/* Enhanced Navigation Buttons */}
                                {!isFirstMovie && (
                                    <motion.button
                                        onClick={prevMovie}
                                        className="absolute left-2 sm:left-8 z-20 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 flex items-center justify-center group"
                                        whileHover={{ scale: 1.1, x: -8 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ChevronLeft size={24} className="sm:w-7 sm:h-7 text-gray-300 group-hover:text-yellow-400 transition-colors" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </motion.button>
                                )}

                                <motion.button
                                    onClick={nextMovie}
                                    className="absolute right-2 sm:right-8 z-20 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-l from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 flex items-center justify-center group"
                                    whileHover={{ scale: 1.1, x: 8 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronRight size={24} className="sm:w-7 sm:h-7 text-gray-300 group-hover:text-yellow-400 transition-colors" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/10 to-amber-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.button>

                                {/* Movie Display */}
                                <AnimatePresence mode="wait">
                                    <Link 
                                        href={`/movies/${currentMovie.imdbID}`}
                                        key={currentMovieIndex}
                                        onClick={handleMovieClick}
                                    >
                                        <CinematicMovieCard
                                            movie={currentMovie}
                                            rank={currentRank}
                                            isActive={true}
                                        />
                                    </Link>
                                </AnimatePresence>
                            </div>

                            {/* Enhanced Movie Info */}
                            <motion.div 
                                className="text-center mt-12 sm:mt-16"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <h2 className="text-3xl sm:text-4xl font-light text-white mb-3">
                                    {getMovieTitle(currentMovie)}
                                </h2>
                                <p className="text-gray-400 mb-4 text-lg">
                                    {getMovieYear(currentMovie)} • {getMovieGenre(currentMovie)} • {getMovieRuntime(currentMovie)}
                                </p>
                                
                                {/* Collection-specific info */}
                                {collection.slug === 'best-survival-movies' && currentMovie.survivabilityIndex && (
                                    <p className="text-yellow-400 mb-8 text-lg font-medium">
                                        Survivability Index: {currentMovie.survivabilityIndex}/100 • {currentMovie.environment}
                                    </p>
                                )}
                                
                                {/* Enhanced Click Indicators */}
                                <div className="flex flex-col items-center space-y-6">
                                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                                        <span className="px-3 py-1 bg-gray-800/50 rounded-full">#{currentRank} of {movies.length}</span>
                                        <span>•</span>
                                        <span>Click poster above for full analysis</span>
                                    </div>
                                    
                                    <motion.div 
                                        className="flex items-center space-x-4 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/30 rounded-2xl px-8 py-4 hover:from-yellow-400/20 hover:via-amber-400/20 hover:to-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            handleMovieClick();
                                            window.location.href = `/movies/${currentMovie.imdbID}`;
                                        }}
                                    >
                                        <Eye className="w-6 h-6 text-yellow-400" />
                                        <span className="text-yellow-400 font-medium text-lg">Explore Full Analysis</span>
                                        <motion.div
                                            animate={{ x: [0, 8, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ChevronRight className="w-6 h-6 text-yellow-400" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Navigation Dots */}
                            <NavigationDots 
                                movies={movies}
                                currentMovieIndex={currentMovieIndex}
                                goToMovie={goToMovie}
                            />

                            {/* Movie Counter */}
                            <motion.div
                                className="flex justify-center mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.5 }}
                            >
                                <div className="flex items-center gap-4 sm:gap-6 px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl rounded-2xl border border-yellow-400/20">
                                    <span className="text-yellow-400 font-light text-lg sm:text-xl">
                                        #{currentRank}
                                    </span>
                                    <div className="w-16 sm:w-24 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                                            style={{ width: `${((currentMovieIndex + 1) / movies.length) * 100}%` }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    </div>
                                    <span className="text-gray-400 font-light text-sm sm:text-base">
                                        <span className="hidden sm:inline">{pageContent.progressText}</span>
                                        <span className="sm:hidden">of {movies.length}</span>
                                    </span>
                                </div>
                            </motion.div>

                            {/* Footer */}
                            <motion.footer
                                className="bg-gradient-to-t from-gray-900 to-black mt-16 pt-12 border-t border-gray-800/30 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4.5 }}
                            >
                                <p className="text-gray-500 text-sm sm:text-base font-light tracking-wide mb-8">
                                    {collection.slug === 'best-survival-movies' 
                                        ? "Extreme survival cinema for adventure enthusiasts • Survivability index and expert analysis"
                                        : "Curated cinema for discerning viewers • Expert analysis and community insights"
                                    }
                                </p>
                                
                                <div className="flex justify-center items-center gap-8 sm:gap-12 mb-8">
                                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
                                    <div className="text-yellow-400/60 text-xs tracking-[0.3em] uppercase font-medium">
                                        Filmiway {collection.title} Collection
                                    </div>
                                    <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
                                </div>
                                
                                {/* TMDB Attribution */}
                                <motion.div 
                                    className="mb-8 pt-6 border-t border-gray-900/50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 5, duration: 1 }}
                                >
                                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                                        <p className="text-gray-600 text-sm">
                                            Movie data and posters powered by
                                        </p>
                                        <a 
                                            href="https://www.themoviedb.org/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                                        >
                                            <img 
                                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                                                alt="The Movie Database" 
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

                                <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm pb-8">
                                    <span>© 2025 Filmiway</span>
                                    <span>•</span>
                                    <span>All Rights Reserved</span>
                                    <span>•</span>
                                    <span>Where Every Film Finds Its Way</span>
                                </div>
                            </motion.footer>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// 🔥 SSG FUNCTIONS
export async function getStaticPaths() {
    const paths = getAllCollectionSlugs().map((slug) => ({
        params: { slug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const collection = getCollectionBySlug(params.slug);
    
    if (!collection) {
        return {
            notFound: true
        };
    }

    // Get movies for the collection (reversed for ranking display)
    const movies = collection.movies.map(imdbId => 
        COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId)
    ).filter(Boolean).reverse();

    return {
        props: {
            collection,
            movies
        }
    };
}

export default CollectionPage;
