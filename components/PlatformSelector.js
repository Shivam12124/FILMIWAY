import React from 'react';
import Link from 'next/link';
import { Play, Film, Mountain } from 'lucide-react';

const platforms = [
  {
    id: 'hulu',
    name: 'Hulu',
    icon: Play,
    color: 'from-green-500 to-emerald-600',
    description: 'Prestige TV & Indie Gems'
  },
  {
    id: 'hbo-max',
    name: 'HBO Max',
    icon: Film,
    color: 'from-purple-600 to-indigo-600',
    description: 'Blockbusters & Classics'
  },
  {
    id: 'paramount-plus',
    name: 'Paramount+',
    icon: Mountain,
    color: 'from-blue-600 to-sky-500',
    description: 'Action & Sci-Fi Universes'
  }
];

const PlatformSelector = () => {
  return (
    <section className="w-full py-8 sm:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Where do you want to watch?
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-yellow-500 mx-auto rounded-full" />
        </div>

        {/* ✅ CHANGED: grid-cols-3 to fit 3 items perfectly */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <Link 
              key={platform.id} 
              href={`/streaming/${platform.id}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${platform.color}`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`p-3 rounded-full bg-gray-800/50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">
                  {platform.name}
                </h3>
                
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {platform.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSelector;