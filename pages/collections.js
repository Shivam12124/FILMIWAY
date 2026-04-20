// pages/collections.js
import React, { useState, useMemo, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Search, Brain, Mountain, Film, ChevronDown, Sparkles, Plus, 
    Star, Clock, Eye, Scale, DollarSign, Shield, Zap, Heart, 
    Moon, Ghost, Smile, Crown, Flame, Map, Crosshair, Award,HeartCrack,Camera, BookOpen,Rocket 
} from 'lucide-react';
import Header from '../components/Header';

const CollectionsHub = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isPending, startTransition] = useTransition();
    const [activeCategory, setActiveCategory] = useState('All');
    const [expandedCollection, setExpandedCollection] = useState(null);

  const categories = ['All', 'Streaming Guides', 'Movies Like...', 'Genres', "Director's Best", 'Themes & Vibes'];

    const collections = [
        // --- MOVIES LIKE... ---
        { id: 'inception', category: 'Movies Like...', title: 'Movies Like Inception', description: 'Mind-bending sci-fi thrillers with dream logic and reality distortion', icon: Brain, gradient: 'from-purple-500 to-blue-600', movieCount: '10', rating: '8.1', directLink: '/collection/movies-like-inception', hasSubCollections: false },
        { id: 'memento', category: 'Movies Like...', title: 'Movies Like Memento', description: 'Nonlinear narratives, amnesia, and fractured timeline puzzles', icon: Clock, gradient: 'from-blue-600 to-indigo-800', movieCount: '10', rating: '8.1', directLink: '/collection/movies-like-memento', hasSubCollections: false },
        { id: 'shutter-island', category: 'Movies Like...', title: 'Movies Like Shutter Island', description: 'Psychological horror twists, paranoia, and unreliable narrators', icon: Eye, gradient: 'from-slate-700 to-purple-900', movieCount: '10', rating: '8.2', directLink: '/collection/movies-like-shutter-island', hasSubCollections: false },
        { id: 'oldboy', category: 'Movies Like...', title: 'Movies Like Oldboy', description: 'Brutal revenge thrillers with shocking twists and moral devastation', icon: Shield, gradient: 'from-red-700 to-rose-900', movieCount: '10', rating: '8.7', directLink: '/collection/movies-like-oldboy', hasSubCollections: false },
        { id: 'donnie-darko', category: 'Movies Like...', title: 'Movies Like Donnie Darko', description: 'Mind-bending time travel, reality-warping films with existential twists', icon: Clock, gradient: 'from-purple-600 to-indigo-800', movieCount: '10', rating: '8.6', directLink: '/collection/movies-like-donnie-darko', hasSubCollections: false },
        { id: 'eyes-wide-shut', category: 'Movies Like...', title: 'Movies Like Eyes Wide Shut', description: 'Paranoid thrillers about secret societies, occult rituals, and the hidden elite', icon: Eye, gradient: 'from-violet-700 to-slate-900', movieCount: '10', rating: '8.1', directLink: '/collection/movies-like-eyes-wide-shut', hasSubCollections: false },
        { id: 'interstellar', category: 'Movies Like...', title: 'Movies Like Interstellar', description: 'Epic space odysseys with cosmic scope, time dilation, and profound emotion', icon: Sparkles, gradient: 'from-cyan-600 to-blue-800', movieCount: '10', rating: '8.3', directLink: '/collection/movies-like-interstellar', hasSubCollections: false },
        { id: 'se7en', category: 'Movies Like...', title: 'Movies Like Se7en', description: 'Dark, atmospheric crime thrillers with obsessed detectives and shocking twists', icon: Eye, gradient: 'from-amber-700 to-gray-900', movieCount: '10', rating: '8.8', directLink: '/collection/movies-like-se7en', hasSubCollections: false },
        { id: 'parasite', category: 'Movies Like...', title: 'Movies Like Parasite', description: 'Dark satires exposing class warfare, wealth disparity, and social injustice', icon: Scale, gradient: 'from-slate-700 to-gray-900', movieCount: '10', rating: '8.5', directLink: '/collection/movies-like-parasite', hasSubCollections: false },
        { id: 'black-swan', category: 'Movies Like...', title: 'Movies Like Black Swan', description: 'Psychological horror exploring artistic obsession and identity fragmentation', icon: Brain, gradient: 'from-purple-600 to-pink-800', movieCount: '10', rating: '8.2', directLink: '/collection/movies-like-black-swan', hasSubCollections: false },
        { id: 'prestige', category: 'Movies Like...', title: 'Movies Like The Prestige', description: 'Mind-bending cinematic illusions, bitter rivalries, and psychological deception', icon: Sparkles, gradient: 'from-amber-600 to-orange-900', movieCount: '10', rating: '8.0', directLink: '/collection/movies-like-the-prestige', hasSubCollections: false },
        { id: 'matrix', category: 'Movies Like...', title: 'Movies Like The Matrix', description: 'Cyberpunk masterpieces with simulated realities and reality-bending awakenings', icon: Sparkles, gradient: 'from-emerald-500 to-teal-600', movieCount: '10', rating: '8.4', directLink: '/collection/movies-like-the-matrix', hasSubCollections: false },
{ id: 'fight-club', category: 'Movies Like...', title: 'Movies Like Fight Club', description: 'Anarchic psychological thrillers exploring identity fracture and anti-system rebellion', icon: Flame, gradient: 'from-red-700 to-stone-900', movieCount: '10', rating: '7.5', directLink: '/collection/movies-like-fight-club', hasSubCollections: false },
        // --- GENRES ---
        { id: 'erotic-thriller', category: 'Genres', title: '10 Best Erotic Thriller Movies', description: 'Where desire meets danger. Psychological manipulation, fatal attractions, and neo-noir tension.', icon: Flame, gradient: 'from-rose-600 to-red-900', movieCount: '10', rating: '7.2', directLink: '/collection/best-erotic-thriller-movies', hasSubCollections: false },
        { id: 'survival', category: 'Genres', title: 'Best Survival Movies', description: 'Extreme survival stories that push human endurance', icon: Mountain, gradient: 'from-green-500 to-emerald-600', movieCount: '10', rating: '8.2', directLink: '/collection/best-survival-movies', hasSubCollections: false },
        { id: 'war-films', category: 'Genres', title: 'Best War Films', description: 'Brutally realistic war movies capturing combat, sacrifice, and the human cost', icon: Shield, gradient: 'from-red-600 to-amber-700', movieCount: '10', rating: '9.0', directLink: '/collection/best-war-films', hasSubCollections: false },
        { id: 'revenge', category: 'Genres', title: 'Best Revenge Movies', description: 'Brutal vengeance films exploring retribution and the devastating path of revenge', icon: Shield, gradient: 'from-red-700 to-rose-900', movieCount: '10', rating: '8.0', directLink: '/collection/best-revenge-movies', hasSubCollections: false },
        { id: 'crime-thriller', category: 'Genres', title: 'Best Crime Thriller Movies', description: 'Gritty crime epics with moral complexity, brilliant heists, and law vs. lawlessness', icon: Scale, gradient: 'from-slate-600 to-gray-900', movieCount: '10', rating: '8.9', directLink: '/collection/best-crime-thriller-movies', hasSubCollections: false },
        { id: 'heist-thriller', category: 'Genres', title: 'Best Heist Thriller Movies', description: 'Masterful heist films with elaborate plans, high-stakes robberies, and criminal masterminds', icon: DollarSign, gradient: 'from-amber-500 to-orange-700', movieCount: '10', rating: '8.7', directLink: '/collection/best-heist-thriller-movies', hasSubCollections: false },
        { id: 'sci-fi', category: 'Genres', title: 'Best Sci-Fi Movies', description: 'Visionary science fiction films exploring humanity, technology, and the cosmos', icon: Sparkles, gradient: 'from-cyan-500 to-blue-700', movieCount: '10', rating: '8.2', directLink: '/collection/best-sci-fi-movies', hasSubCollections: false },
        { id: 'time-travel', category: 'Genres', title: 'Best Time Travel Movies', description: 'Mind-bending time travel films with paradoxes, causality loops, and temporal complexity', icon: Clock, gradient: 'from-blue-500 to-cyan-600', movieCount: '10', rating: '8.1', directLink: '/collection/best-time-travel-movies', hasSubCollections: false },
        { id: 'psychological-thriller', category: 'Genres', title: 'Best Psychological Thrillers', description: 'Mind-bending narratives with intense psychological suspense and twists', icon: Brain, gradient: 'from-pink-600 to-red-700', movieCount: '10', rating: '8.7', directLink: '/collection/best-psychological-thriller-movies', hasSubCollections: false },
        { id: 'suspense-thriller', category: 'Genres', title: 'Best Suspense Thriller Movies', description: 'The ultimate selection of nail-biting, edge-of-your-seat suspense thrillers', icon: Star, gradient: 'from-yellow-500 to-orange-700', movieCount: '10', rating: '8.8', directLink: '/collection/best-thriller-movies', hasSubCollections: false },
        { id: 'detective-thriller', category: 'Genres', title: 'Best Detective Thriller Movies', description: 'Gripping detective stories with intense investigations and suspenseful mysteries', icon: Star, gradient: 'from-blue-500 to-indigo-700', movieCount: '10', rating: '8.5', directLink: '/collection/best-detective-thriller-movies', hasSubCollections: false },
        { id: 'mystery-thriller', category: 'Genres', title: 'Best Mystery Thriller Movies', description: 'Intricate detective mysteries with brilliant puzzle-solving and shocking reveals', icon: Eye, gradient: 'from-indigo-500 to-purple-700', movieCount: '10', rating: '8.6', directLink: '/collection/best-mystery-thriller-movies', hasSubCollections: false },
        { id: 'best-action-movies', category: 'Genres', title: '10 Best Action Movies Of All Time', description: 'The pinnacle of practical stunts, martial arts, gun-fu, and adrenaline-pumping cinema.', icon: Zap, gradient: 'from-red-600 to-stone-900', movieCount: '10', rating: '7.9', directLink: '/collection/best-action-movies', hasSubCollections: false },
{ id: 'erotic-romance', category: 'Genres', title: '10 Best Erotic Romance Movies', description: 'Deeply passionate films exploring intimacy, intense desire, and emotional connection.', icon: Heart, gradient: 'from-rose-600 to-pink-900', movieCount: '10', rating: '6.4', directLink: '/collection/best-erotic-romance-movies', hasSubCollections: false },
{ id: 'best-dark-comedy-movies', category: 'Genres', title: '10 Best Dark Comedy Movies', description: 'Bleak, cynical, and absurdly hilarious films exploring the darkest corners of the human condition.', icon: Smile, gradient: 'from-emerald-600 to-stone-900', movieCount: '10', rating: '7.7', directLink: '/collection/best-dark-comedy-movies', hasSubCollections: false },
        // --- THEMES & VIBES ---
        { id: 'mind-bending-hub', category: 'Themes & Vibes', title: 'Mind-Bending Hub', description: 'Explore our full hub of psychological thrillers and sci-fi that challenge reality and perception.', icon: Brain, gradient: 'from-fuchsia-600 to-purple-900', movieCount: '40+', rating: '8.5', directLink: '/genre/mind-bending', hasSubCollections: false },
        { id: 'raunchy-comedy', category: 'Themes & Vibes', title: '10 Best Raunchy Comedy Movies', description: 'Explorations of extreme R-rated humor, legendary teen chaos, and iconic gross-out gags.', icon: Smile, gradient: 'from-pink-600 to-orange-500', movieCount: '10', rating: '7.0', directLink: '/collection/best-raunchy-comedy-movies', hasSubCollections: false },
        { id: 'dark-comedy', category: 'Themes & Vibes', title: '10 Best Dark Comedy Movies', description: 'Bleak humor, deep cynicism, and the absurdity of the human condition.', icon: Smile, gradient: 'from-zinc-600 to-stone-900', movieCount: '10', rating: '7.8', directLink: '/collection/best-dark-comedy-movies', hasSubCollections: false },
        { id: 'top-10-road-trip-movies', category: 'Themes & Vibes', title: 'Top 10 Road Trip Movies', description: 'Cinematic journeys exploring human texture, emotional transformation, and the vast open road.', icon: Map, gradient: 'from-amber-600 to-orange-800', movieCount: '10', rating: '7.7', directLink: '/collection/top-10-road-trip-movies', hasSubCollections: false },
        { id: 'thought-provoking', category: 'Themes & Vibes', title: '10 Best Thought-Provoking Movies', description: 'Profound cinematic masterpieces exploring the depths of human existence, grief, and the search for meaning.', icon: Brain, gradient: 'from-indigo-600 to-blue-900', movieCount: '10', rating: '8.3', directLink: '/collection/best-thought-provoking-movies', hasSubCollections: false },
        { id: 'neo-noir', category: 'Themes & Vibes', title: '10 Best Neo-Noir Movies', description: 'A curation of cinema\'s most stylized, morally ambiguous, and neon-drenched urban nightmares.', icon: Moon, gradient: 'from-pink-800 to-slate-950', movieCount: '10', rating: '7.8', directLink: '/collection/best-neo-noir-movies', hasSubCollections: false },
        { id: 'movies-about-greed', category: 'Themes & Vibes', title: '10 Best Movies About Greed', description: 'Explorations of extreme capitalism, corporate corruption, and the devastating pursuit of wealth.', icon: DollarSign, gradient: 'from-emerald-600 to-green-900', movieCount: '10', rating: '7.7', directLink: '/collection/best-movies-about-greed', hasSubCollections: false },
{ id: 'true-story', category: 'Themes & Vibes', title: '10 Best True Story Movies', description: 'Powerful, critically acclaimed dramas rooted in real-world events, historical consequences, and incredible lives.', icon: Film, gradient: 'from-amber-600 to-yellow-900', movieCount: '10', rating: '8.3', directLink: '/collection/best-true-story-movies', hasSubCollections: false },
{ id: 'best-movies-of-the-decade', category: 'Themes & Vibes', title: '10 Best Movies of the Decade (2020-2026)', description: 'The defining cinematic achievements of the 2020s, featuring groundbreaking sci-fi, sweeping historical epics, and revolutionary animation.', icon: Award, gradient: 'from-yellow-500 to-amber-700', movieCount: '10', rating: '8.2', directLink: '/collection/best-movies-of-the-decade', hasSubCollections: false },
{ id: 'best-gangster-movies-of-all-time', category: 'Themes & Vibes', title: '10 Best Gangster Movies of All Time', description: 'The defining cinematic masterpieces of the criminal underworld, exploring loyalty, betrayal, and ruthless ambition.', icon: Crosshair, gradient: 'from-red-800 to-stone-900', movieCount: '10', rating: '8.3', directLink: '/collection/best-gangster-movies-of-all-time', hasSubCollections: false },
{ id: 'top-10-book-adaptations', category: 'Themes & Vibes', title: '10 Best Book-to-Movie Adaptations', description: 'Cinematic masterclasses in translating the written word, exploring literary depth, page-to-screen fidelity, and timeless storytelling.', icon: BookOpen, gradient: 'from-blue-600 to-slate-900', movieCount: '10', rating: '8.2', directLink: '/collection/top-10-book-adaptations', hasSubCollections: false },
{ id: 'best-marriage-crisis-movies', category: 'Themes & Vibes', title: '10 Best Movies About Marriage Crises', description: 'Profound cinematic explorations of the breakdown, complexity, and emotional realities of marriage.', icon: HeartCrack, gradient: 'from-slate-600 to-slate-900', movieCount: '10', rating: '7.8', directLink: '/collection/best-marriage-crisis-movies', hasSubCollections: false },
{ id: 'best-a24-movies', category: 'Themes & Vibes', title: '10 Best A24 Movies of All Time', description: 'Auteur-driven masterpieces exploring profound human emotion, surreal horror, and undeniable artistic vision.', icon: Film, gradient: 'from-stone-700 to-neutral-950', movieCount: '10', rating: '7.6', directLink: '/collection/best-a24-movies', hasSubCollections: false },
// --- DIRECTOR'S BEST ---
        { id: 'best-paul-thomas-anderson-movies', category: "Director's Best", title: 'Paul Thomas Anderson Movies Ranked', description: 'The complete filmography of Paul Thomas Anderson, ranked from worst to best, featuring intense character studies and cinematic mastery.', icon: Camera, gradient: 'from-stone-600 to-neutral-900', movieCount: '10', rating: '7.7', directLink: '/collection/best-paul-thomas-anderson-movies', hasSubCollections: false },
        // --- STREAMING GUIDES ---
        // Hulu
        { id: 'hulu-best', category: 'Streaming Guides', title: 'Top 10 Best Movies on Hulu', description: 'The definitive ranking of the highest-rated films streaming on Hulu right now', icon: Crown, gradient: 'from-amber-500 to-yellow-600', movieCount: '10', rating: '7.9', directLink: '/collection/best-movies-on-hulu', hasSubCollections: false },
        { id: 'hulu-action', category: 'Streaming Guides', title: 'Best Action Movies on Hulu', description: 'High-octane action films ranked by adrenaline score, fight choreography, and stunts', icon: Zap, gradient: 'from-orange-500 to-red-600', movieCount: '10', rating: '8.4', directLink: '/collection/best-action-movies-on-hulu', hasSubCollections: false },
        { id: 'hulu-scifi', category: 'Streaming Guides', title: 'Best Sci-Fi Movies on Hulu', description: 'Mind-bending sci-fi films ranked by conceptual complexity and visual spectacle', icon: Brain, gradient: 'from-cyan-500 to-blue-600', movieCount: '10', rating: '8.3', directLink: '/collection/best-sci-fi-movies-on-hulu', hasSubCollections: false },
        { id: 'hulu-thriller', category: 'Streaming Guides', title: 'Best Thriller Movies on Hulu', description: 'Intense suspense films ranked by tension, pacing, and psychological impact', icon: Eye, gradient: 'from-red-600 to-rose-700', movieCount: '10', rating: '7.8', directLink: '/collection/best-thriller-movies-hulu', hasSubCollections: false },
        { id: 'hulu-horror', category: 'Streaming Guides', title: 'Best Horror Movies on Hulu', description: 'The most brutally terrifying films streaming on Hulu. From trauma-inducing gore to slow-burn dread', icon: Ghost, gradient: 'from-red-900 to-stone-900', movieCount: '10', rating: '7.1', directLink: '/collection/best-horror-movies-on-hulu', hasSubCollections: false },
        { id: 'hulu-comedy', category: 'Streaming Guides', title: 'Best Comedy Movies on Hulu', description: 'The funniest films streaming on Hulu. From teen chaos and mockumentaries to biting satire', icon: Smile, gradient: 'from-yellow-400 to-orange-500', movieCount: '10', rating: '7.3', directLink: '/collection/best-comedy-movies-on-hulu', hasSubCollections: false },
        { id: 'hulu-romance', category: 'Streaming Guides', title: 'Best Romance Movies on Hulu', description: 'Prestige love stories with electric chemistry and deep emotional resonance', icon: Heart, gradient: 'from-pink-500 to-rose-600', movieCount: '10', rating: '7.4', directLink: '/collection/best-romance-movies-on-hulu', hasSubCollections: false },
        { id: 'hulu-family', category: 'Streaming Guides', title: 'Best Family Movies on Hulu', description: 'Wholesome entertainment, animation & adventure for all ages streaming now', icon: Sparkles, gradient: 'from-yellow-400 to-amber-500', movieCount: '10', rating: '7.5', directLink: '/collection/best-family-movies-on-hulu', hasSubCollections: false },
        { id: 'hulu-drama', category: 'Streaming Guides', title: '10 Best Drama Movies on Hulu', description: 'The most emotionally resonant dramas ranked by character depth, narrative impact, and critical acclaim.', icon: Film, gradient: 'from-indigo-500 to-blue-600', movieCount: '10', rating: '7.7', directLink: '/collection/best-drama-movies-on-hulu', hasSubCollections: false },
        
        // HBO Max
        { id: 'hbo-max-best', category: 'Streaming Guides', title: 'Top 10 Best Movies on HBO Max', description: 'The definitive ranking of the highest-rated films streaming on HBO Max right now.', icon: Crown, gradient: 'from-yellow-500 to-amber-600', movieCount: '10', rating: '8.6', directLink: '/collection/best-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-action', category: 'Streaming Guides', title: 'Top 10 Action Movies on HBO Max', description: 'Epic scale battles, mythic heroes, and visceral combat streaming now', icon: Zap, gradient: 'from-red-600 to-slate-900', movieCount: '10', rating: '8.3', directLink: '/collection/best-action-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-scifi', category: 'Streaming Guides', title: 'Best Sci-Fi Movies on HBO Max', description: 'Spectacular cosmic epics and mind-bending masterpieces streaming now', icon: Rocket, gradient: 'from-cyan-600 to-blue-800', movieCount: '10', rating: '8.2', directLink: '/collection/best-sci-fi-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-thriller', category: 'Streaming Guides', title: 'Best Thriller Movies on HBO Max', description: 'Psychological nightmares, cerebral sci-fi, and high-tension suspense streaming now', icon: Eye, gradient: 'from-red-700 to-rose-900', movieCount: '10', rating: '7.8', directLink: '/collection/best-thriller-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-max-drama', category: 'Streaming Guides', title: 'Best Drama Movies on HBO Max', description: 'The most emotionally resonant dramas ranked by character depth and impact', icon: Film, gradient: 'from-indigo-600 to-violet-800', movieCount: '10', rating: '8.1', directLink: '/collection/best-drama-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-max-horror', category: 'Streaming Guides', title: 'Best Horror Movies on HBO Max', description: 'The definitive ranking of the scariest movies on HBO Max.', icon: Ghost, gradient: 'from-red-800 to-slate-950', movieCount: '10', rating: '8.0', directLink: '/collection/best-horror-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-max-comedy', category: 'Streaming Guides', title: 'Best Comedy Movies on HBO Max', description: 'Satirical masterpieces and cinematic comedy classics ranked by laughter', icon: Smile, gradient: 'from-yellow-500 to-amber-500', movieCount: '10', rating: '8.2', directLink: '/collection/best-comedy-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-romance', category: 'Streaming Guides', title: 'Best Romance Movies on HBO Max', description: 'Prestige love stories with electric chemistry and deep emotional resonance', icon: Heart, gradient: 'from-pink-500 to-rose-900', movieCount: '10', rating: '8.1', directLink: '/collection/best-romance-movies-on-hbo-max', hasSubCollections: false },
        { id: 'hbo-max-family', category: 'Streaming Guides', title: 'Best Family Movies on HBO Max', description: 'Magical journeys, Ghibli masterpieces, and wholesome classics for the whole family', icon: Sparkles, gradient: 'from-yellow-500 to-amber-600', movieCount: '10', rating: '8.0', directLink: '/collection/best-family-movies-on-hbo-max', hasSubCollections: false },

        // Peacock
        { id: 'peacock-best', category: 'Streaming Guides', title: 'Top 10 Best Movies on Peacock', description: 'The definitive ranking of the highest-rated films streaming on Peacock right now.', icon: Crown, gradient: 'from-yellow-500 to-amber-600', movieCount: '10', rating: '8.1', directLink: '/collection/best-movies-on-peacock', hasSubCollections: false },
        { id: 'peacock-comedy', category: 'Streaming Guides', title: 'Best Comedy Movies on Peacock', description: 'From absurdist British classics to legendary mockumentaries and modern satire.', icon: Smile, gradient: 'from-yellow-400 to-amber-600', movieCount: '10', rating: '8.0', directLink: '/collection/best-comedy-movies-on-peacock', hasSubCollections: false },
        { id: 'peacock-action-adventure', category: 'Streaming Guides', title: 'Best Action & Adventure Movies on Peacock', description: 'Visceral survival epics and high-octane thrills ranked by adrenaline.', icon: Mountain, gradient: 'from-teal-600 to-emerald-800', movieCount: '10', rating: '7.6', directLink: '/collection/best-action-adventure-movies-on-peacock', hasSubCollections: false },
        { id: 'peacock-scifi', category: 'Streaming Guides', title: 'Best Sci-Fi Movies on Peacock', description: 'Mind-bending realities and alien encounters ranked by complexity.', icon: Rocket, gradient: 'from-cyan-500 to-blue-700', movieCount: '10', rating: '7.6', directLink: '/collection/best-sci-fi-movies-on-peacock', hasSubCollections: false },
        { id: 'peacock-romance', category: 'Streaming Guides', title: 'Best Romance Movies on Peacock', description: 'Emotional masterpieces and heartwarming love stories ranked by chemistry.', icon: Heart, gradient: 'from-pink-500 to-rose-700', movieCount: '10', rating: '7.8', directLink: '/collection/best-romance-movies-on-peacock', hasSubCollections: false },
        { id: 'peacock-family', category: 'Streaming Guides', title: 'Best Family Movies on Peacock', description: 'Wholesome entertainment and magical adventures ranked by fun factor.', icon: Sparkles, gradient: 'from-yellow-500 to-amber-600', movieCount: '10', rating: '7.7', directLink: '/collection/best-family-movies-on-peacock', hasSubCollections: false },
        { id: 'peacock-drama', category: 'Streaming Guides', title: 'Best Drama Movies on Peacock', description: 'The most emotionally resonant dramas ranked by character depth and impact.', icon: Film, gradient: 'from-indigo-600 to-violet-800', movieCount: '10', rating: '8.1', directLink: '/collection/best-drama-movies-on-peacock', hasSubCollections: false },
        { id: 'peacock-thriller', category: 'Streaming Guides', title: 'Best Thriller Movies on Peacock', description: 'Ranked by suspense and psychological dread. From Memento to Sicario.', icon: Eye, gradient: 'from-red-800 to-slate-900', movieCount: '10', rating: '7.6', directLink: '/collection/best-thriller-movies-on-peacock', hasSubCollections: false },

        // Paramount+
        { id: 'paramount-best', category: 'Streaming Guides', title: 'Top 10 Best Movies on Paramount+', description: 'The definitive ranking of the highest-rated films streaming on Paramount+.', icon: Crown, gradient: 'from-yellow-500 to-amber-600', movieCount: '10', rating: '9.0', directLink: '/collection/best-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-action', category: 'Streaming Guides', title: 'Best Action Movies on Paramount+', description: 'High-octane action films ranked by adrenaline score, stunts, and aerial combat', icon: Zap, gradient: 'from-red-600 to-orange-700', movieCount: '10', rating: '8.5', directLink: '/collection/best-action-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-scifi', category: 'Streaming Guides', title: 'Best Sci-Fi Movies on Paramount+', description: 'Visionary science fiction films exploring cosmic scope, advanced technology, and alien contact', icon: Rocket, gradient: 'from-cyan-600 to-blue-700', movieCount: '10', rating: '8.4', directLink: '/collection/best-sci-fi-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-romance', category: 'Streaming Guides', title: 'Best Romance Movies on Paramount+', description: 'The top 10 romance movies streaming on Paramount+. From Titanic to About Time', icon: Heart, gradient: 'from-pink-500 to-rose-700', movieCount: '10', rating: '7.8', directLink: '/collection/best-romance-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-thriller', category: 'Streaming Guides', title: 'Best Thriller Movies on Paramount+', description: 'Intense psychological thrillers and suspense masterpieces streaming now', icon: Eye, gradient: 'from-red-700 to-slate-900', movieCount: '10', rating: '7.6', directLink: '/collection/best-thriller-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-family', category: 'Streaming Guides', title: 'Best Family Movies on Paramount+', description: 'Wholesome entertainment, animated adventures & fun for all ages streaming now', icon: Sparkles, gradient: 'from-yellow-500 to-amber-600', movieCount: '10', rating: '7.5', directLink: '/collection/best-family-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-comedy', category: 'Streaming Guides', title: 'Best Comedy Movies on Paramount+', description: 'Laugh-out-loud classics and satirical masterpieces.', icon: Smile, gradient: 'from-yellow-400 to-amber-500', movieCount: '10', rating: '7.3', directLink: '/collection/best-comedy-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-horror', category: 'Streaming Guides', title: 'Best Horror Movies on Paramount+', description: 'The definitive ranking of the scariest movies on Paramount+.', icon: Ghost, gradient: 'from-red-800 to-slate-950', movieCount: '10', rating: '7.2', directLink: '/collection/best-horror-movies-on-paramount-plus', hasSubCollections: false },
        { id: 'paramount-core-drama', category: 'Streaming Guides', title: '10 Best Core Drama Movies on Paramount+', description: 'Intense character studies and emotional masterclasses.', icon: Crown, gradient: 'from-blue-600 to-indigo-900', movieCount: '10', rating: '8.2', directLink: '/collection/best-core-drama-movies-on-paramount-plus', hasSubCollections: false },
    ];

    
    // Filter Logic
    const filteredCollections = useMemo(() => {
        return collections.filter(collection => {
            const matchesSearch = collection.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  collection.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || collection.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory, collections]);

    const toggleExpand = (collectionId) => {
        setExpandedCollection(expandedCollection === collectionId ? null : collectionId);
    };

    return (
        <>
            <Head>
                <title>Movie Collections | Filmiway - Curated Film Lists</title>
                <meta name="description" content="Explore expertly curated movie collections including mind-bending thrillers, survival films, mystery thrillers and more. Find your next favorite movie." />
            </Head>

            <div className="min-h-screen bg-black text-white">
                <Header />

                <main className="pt-20 sm:pt-24 pb-16">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        {/* Hero Section */}
                        <motion.div
                            className="text-center mb-10 pt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center justify-center gap-3 mb-4">
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
                            className="max-w-3xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search collections..."
                                    value={inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        startTransition(() => setSearchQuery(e.target.value));
                                    }}
                                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                />
                            </div>
                        </motion.div>

                        {/* Category Filter Tabs */}
                        <motion.div 
                            className="flex flex-wrap justify-center gap-2 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => startTransition(() => setActiveCategory(category))}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeCategory === category 
                                        ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                                        : 'bg-[#111] text-gray-400 hover:bg-[#1a1a1a] hover:text-white border border-white/5'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>

                        {/* Collections GRID LAYOUT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCollections.map((collection, index) => {
                                const IconComponent = collection.icon;
                                
                                const CardContent = (
                                    <div className={`h-full flex flex-col group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:bg-[#111] transition-all duration-300 ${
                                        collection.hasSubCollections ? 'cursor-pointer' : ''
                                    }`}>
                                        
                                        {/* SLEEK GRADIENT TOP BORDER */}
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${collection.gradient}`} />
                                        
                                        {/* SUBTLE GLOWING BACKGROUND ON HOVER */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                                        <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
                                            {/* Category Badge & Icon */}
                                            <div className="mb-6 flex justify-between items-start">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${collection.gradient} bg-opacity-10 shadow-sm`}>
                                                        <IconComponent className="w-5 h-5 text-white" />
                                                    </div>
                                                    <span className="inline-block px-2.5 py-1 bg-white/5 rounded-md text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                                                        {collection.category}
                                                    </span>
                                                </div>
                                                
                                                {collection.hasSubCollections && (
                                                    <ChevronDown className={`w-5 h-5 text-gray-500 group-hover:text-yellow-400 transition-transform duration-300 ${
                                                        expandedCollection === collection.id ? 'rotate-180 text-yellow-400' : ''
                                                    }`} />
                                                )}
                                            </div>

                                            <div className="flex-grow">
                                                <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors tracking-tight mb-3">
                                                    {collection.title}
                                                </h2>
                                                <p className="text-sm text-gray-400 font-light leading-relaxed">
                                                    {collection.description}
                                                </p>
                                            </div>

                                            <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider uppercase text-gray-500">
                                                <span className="flex items-center gap-1.5">
                                                    <Film className="w-3.5 h-3.5 text-yellow-500" />
                                                    {collection.movieCount} Films
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                                                    {collection.rating}/10
                                                </span>
                                                {!collection.hasSubCollections && (
                                                    <span className="text-yellow-500 group-hover:text-yellow-400 ml-auto transition-colors">
                                                        Explore →
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );

                                return (
                                    <motion.div
                                        key={collection.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className={collection.hasSubCollections && expandedCollection === collection.id ? 'md:col-span-2 lg:col-span-3' : ''}
                                    >
                                        {collection.hasSubCollections ? (
                                            <div onClick={() => toggleExpand(collection.id)} className="h-full">
                                                {CardContent}
                                            </div>
                                        ) : (
                                            <Link href={collection.directLink || '#'} className="block h-full">
                                                {CardContent}
                                            </Link>
                                        )}

                                        {/* Sub-Collections (These still use the TMDB poster images!) */}
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
                                                                <div className="bg-[#111] border border-white/5 rounded-xl overflow-hidden hover:border-yellow-400/50 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
                                                                    <div className="aspect-[16/9] w-full overflow-hidden relative bg-[#0a0a0a]">
                                                                        <Image
                                                                            src={subCollection.poster}
                                                                            alt={subCollection.title}
                                                                            width={500}
                                                                            height={281}
                                                                            className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-700"
                                                                            loading="lazy"
                                                                        />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                                                        <div className="absolute bottom-0 left-0 w-full p-5">
                                                                            <h3 className="text-white font-bold text-lg leading-snug mb-1 drop-shadow-md">
                                                                                {subCollection.title}
                                                                            </h3>
                                                                            <span className="text-xs font-semibold text-yellow-400 tracking-wider uppercase">
                                                                                {subCollection.count}
                                                                            </span>
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
                                className="text-center py-20 bg-[#0a0a0a] rounded-2xl border border-white/5 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <Search className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">No collections found</h3>
                                <p className="text-gray-500">Try adjusting your search terms or filters</p>
                            </motion.div>
                        )}

                        {/* Coming Soon */}
                        <motion.div
                            className="mt-16 bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/30 rounded-2xl p-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Sparkles className="w-8 h-8 text-yellow-400" />
                                <h3 className="text-2xl font-light text-white">More Collections Coming Soon</h3>
                            </div>
                            <p className="text-gray-500 mb-6">Our curation team is crafting new cinematic experiences.</p>
                            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-yellow-500" />
                                    <span>New Categories</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-yellow-500" />
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