// pages/genre/[category].js - GENRE AUTHORITY HUB 🧠
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Skull, Search, Home, ChevronRight, TrendingUp, Layers 
} from 'lucide-react';
import { COLLECTIONS } from '../../data/collections';

// 🎨 Genre Configuration
const getCategoryConfig = (category) => {
  const configs = {
    'mind-bending': {
      title: 'Mind-Bending & Sci-Fi',
      subtitle: 'Cinema That Hurts Your Brain',
      description: 'Complex narratives, time paradoxes, and reality-warping masterpieces. From Nolan to Kubrick.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      bgGlow: 'bg-cyan-500/10',
      textColor: 'text-cyan-400',
      slugs: [
        'movies-like-inception', 'movies-like-memento', 'movies-like-interstellar', 
        'movies-like-the-matrix', 'movies-like-donnie-darko', 
        'best-sci-fi-movies', 'best-time-travel-movies', 'best-sci-fi-movies-on-hulu',
        'best-sci-fi-movies-on-hbo-max', 'best-sci-fi-movies-on-paramount-plus'
      ]
    },
    'thriller': {
      title: 'Psychological & Dark Thrillers',
      subtitle: 'Suspense That Never Lets Go',
      description: 'Gritty investigations, obsessive detectives, and psychological descents into madness.',
      icon: Skull,
      color: 'from-red-600 to-rose-900',
      bgGlow: 'bg-red-500/10',
      textColor: 'text-red-500',
      slugs: [
        'movies-like-se7en', 'movies-like-shutter-island', 'movies-like-oldboy', 
        'movies-like-parasite', 'movies-like-black-swan', 'movies-like-eyes-wide-shut',
        'best-psychological-thriller-movies', 'best-thriller-movies', 'best-thriller-movies-hulu',
        'best-thriller-movies-on-hbo-max'
      ]
    },
    'crime': {
      title: 'Crime, Heist & Mystery',
      subtitle: 'Masterminds & Detectives',
      description: 'High-stakes heists, unsolvable mysteries, and brutal revenge tales.',
      icon: Search,
      color: 'from-amber-500 to-orange-700',
      bgGlow: 'bg-amber-500/10',
      textColor: 'text-amber-500',
      slugs: [
        'best-crime-thriller-movies', 'best-heist-thriller-movies', 
        'best-detective-thriller-movies', 'best-mystery-thriller-movies', 
        'best-revenge-movies'
      ]
    }
  };
  return configs[category] || null;
};

const GenreHub = ({ category, collections }) => {
  const config = getCategoryConfig(category);
  if (!config) return null;
  const CategoryIcon = config.icon;

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>{`${config.title} Movies (2026) - The Ultimate Guide | Filmiway`}</title>
        <meta name="description" content={`The best ${config.subtitle}. Expert rankings for ${category} movies including top collections and hidden gems.`} />
        <link rel="canonical" href={`https://filmiway.com/genre/${category}`} />
      </Head>

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 bg-gradient-to-br ${config.color}`} />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Navigation */}
        <nav className="flex items-center gap-4 mb-16 text-sm text-gray-400">
          <Link href="/" className="hover:text-white flex items-center gap-2"><Home size={16} /> Home</Link>
          <ChevronRight size={14} />
          <span>Genre</span>
          <ChevronRight size={14} />
          <span className="text-white capitalize">{category.replace('-', ' ')}</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={`inline-flex p-4 rounded-2xl mb-6 border border-white/10 ${config.bgGlow}`}>
            <CategoryIcon className={`w-10 h-10 ${config.textColor}`} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{config.title}</h1>
          <p className="text-xl text-gray-400">{config.description}</p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, idx) => (
            <motion.div key={col.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <Link href={`/collection/${col.slug}`} className="group block h-full">
                <div className="relative h-full bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all hover:-translate-y-1 hover:shadow-2xl">
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${col.gradientFrom} ${col.gradientTo}`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-4xl">{col.emoji}</span>
                      <div className="p-2 rounded-full bg-white/5"><ChevronRight className="w-4 h-4 text-gray-400" /></div>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{col.title}</h2>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">{col.description}</p>
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 uppercase">
                      <Layers size={12} /> {col.movies.length} Movies • 2026 Updated
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// SSG: Generate pages for the 3 categories
export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'mind-bending' } },
      { params: { category: 'thriller' } },
      { params: { category: 'crime' } }
    ],
    fallback: false
  };
}

// SSG: Fetch data
export async function getStaticProps({ params }) {
  const config = getCategoryConfig(params.category);
  if (!config) return { notFound: true };

  // Filter collections based on the specific slug list in config
  const categoryCollections = config.slugs
    .map(slug => COLLECTIONS[slug])
    .filter(Boolean); // Remove any that don't exist

  return {
    props: {
      category: params.category,
      collections: categoryCollections
    }
  };
}

export default GenreHub;