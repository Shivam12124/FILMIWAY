// pages/streaming/[platform].js - THE AUTHORITY HUB 🚀

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Play, 
  Film, 
  TrendingUp, 
  Award, 
  Zap, 
  Ghost, 
  Heart, 
  Smile, 
  Rocket, 
  Home, 
  ChevronRight 
} from 'lucide-react';

// Import your data
import { COLLECTIONS } from '../../data/collections';

// 🎨 Platform Branding Helper
const getPlatformConfig = (platform) => {
  const configs = {
    'hulu': {
      name: 'Hulu',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      borderColor: 'border-green-500/20',
      bgGlow: 'bg-green-500/10',
      icon: Play,
      description: "Home to prestige TV, gritty thrillers, and the best indie cinema streaming today."
    },
    'hbo-max': {
      name: 'HBO Max',
      color: 'from-purple-600 to-indigo-600',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/20',
      bgGlow: 'bg-purple-500/10',
      icon: Film,
      description: "The gold standard of streaming. Blockbuster epics, Studio Ghibli, and cinematic masterpieces."
    },
    'paramount-plus': {
      name: 'Paramount+',
      color: 'from-blue-600 to-sky-500',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      bgGlow: 'bg-blue-500/10',
      icon: Mountain, // Make sure to import Mountain if using it, or fallback to Film
      description: "High-octane action, Tom Cruise blockbusters, and sprawling sci-fi universes."
    },

  };

  return configs[platform] || {
    name: platform.charAt(0).toUpperCase() + platform.slice(1),
    color: 'from-gray-500 to-gray-700',
    textColor: 'text-gray-400',
    borderColor: 'border-gray-500/20',
    bgGlow: 'bg-gray-500/10',
    icon: Film,
    description: "Explore the best movies streaming on this platform."
  };
};

// 🏔️ Icon Helper
import { Mountain } from 'lucide-react'; 

const StreamingHub = ({ platform, collections }) => {
  const config = getPlatformConfig(platform);
  const PlatformIcon = config.icon;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
      <Head>
        <title>{`Best Movies on ${config.name} (2026) - The Ultimate Guide | Filmiway`}</title>
        <meta name="description" content={`The definitive guide to the best movies on ${config.name}. Explore expert-curated lists for Action, Horror, Sci-Fi, Romance, and more. Updated for 2026.`} />
        <meta name="keywords" content={`best movies on ${config.name}, ${config.name} recommendations, what to watch on ${config.name}, ${config.name} movie guide 2026`} />
        <link rel="canonical" href={`https://filmiway.com/streaming/${platform}`} />
      </Head>

      {/* 🎬 Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 bg-gradient-to-br ${config.color}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-10 bg-gradient-to-tl ${config.color}`} />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        
        {/* 🏠 Navigation */}
        <nav className="flex items-center gap-4 mb-16 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
            <Home size={16} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className={config.textColor}>Streaming</span>
          <ChevronRight size={14} />
          <span className="text-white font-medium">{config.name}</span>
        </nav>

        {/* 🦸 Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-8 border ${config.borderColor} ${config.bgGlow}`}>
            <PlatformIcon className={`w-12 h-12 ${config.textColor}`} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            The Ultimate <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.color}`}>
              {config.name} Guide
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            {config.description} <br className="hidden sm:block" />
            We've curated <span className="text-white font-semibold">{collections.length} expert collections</span> to help you find the perfect watch.
          </p>
        </motion.div>

        {/* 🧱 The Grid (Hub & Spoke Core) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, index) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/collection/${col.slug}`} className="group h-full block">
                <div className="relative h-full bg-gray-900/40 border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${col.gradientFrom} ${col.gradientTo}`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-4xl filter drop-shadow-lg">{col.emoji}</span>
                      <div className={`p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors`}>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {col.title}
                    </h2>
                    
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-grow">
                      {col.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <TrendingUp size={12} className={config.textColor} />
                        Top 10
                      </span>
                      <span>•</span>
                      <span>2026 Updated</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 🏆 SEO Footer for the Page */}
        <div className="mt-24 pt-12 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            Filmiway's {config.name} Guide is updated weekly with the latest releases and hidden gems. 
            Our rankings are based on critical acclaim, audience reception, and cinematic legacy.
          </p>
        </div>

      </div>
    </div>
  );
};

// 🔥 GENERATE PATHS (Define which hubs exist)
export async function getStaticPaths() {
  // Define the platforms you want to build pages for
  const platforms = ['hulu', 'hbo-max', 'paramount-plus', 'netflix', 'prime-video'];

  const paths = platforms.map((platform) => ({
    params: { platform }
  }));

  return { paths, fallback: false };
}

// 🔥 GENERATE PROPS (Find collections for the platform)
export async function getStaticProps({ params }) {
  const { platform } = params;

  // Logic: Find all collections that include the platform slug in their own slug
  // Example: 'hulu' matches 'best-action-movies-on-hulu'
  const allCollections = Object.values(COLLECTIONS);
  
  // Clean up platform string for matching (e.g., 'paramount-plus' -> 'paramount')
  const searchTerm = platform === 'paramount-plus' ? 'paramount' : platform;

  const platformCollections = allCollections.filter(col => 
    col.slug.includes(searchTerm)
  );

  return {
    props: {
      platform,
      collections: platformCollections
    }
  };
}

export default StreamingHub;