// components/PlatformSelector.js
import React from 'react';
import Link from 'next/link';

const platforms = [
  {
    id: 'hulu',
    name: 'Hulu',
    logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hulu_logo_(2018).svg',
    color: 'from-green-500 to-emerald-600',
    
  },
  {
    id: 'hbo-max',
    name: 'HBO Max',
    // black 2025 logo version
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/HBO_Max_%282025%29.svg',
    color: 'from-purple-600 to-indigo-600',
    
  },
  {
    id: 'paramount-plus',
    name: 'Paramount+',
    logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Paramount%2B_logo.svg',
    color: 'from-blue-600 to-sky-500',
 
  },
{
  id: 'peacock',
  name: 'Peacock',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg',
  color: 'from-yellow-400 to-teal-500',
 },

];


const PlatformSelector = () => {
  return (
    <section className="w-full pt-4 sm:pt-6 pb-0 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Where do you want to watch?
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
       {platforms.map((platform) => (
<Link
  key={platform.id}
  href={`/streaming/${platform.id}`}
  className="group flex flex-col items-center text-center p-3 hover:-translate-y-1 transition-transform duration-300 w-full"
>
  <div className="relative w-full max-w-[240px] mx-auto">
    <div className={`h-16 sm:h-20 w-full rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] group-hover:scale-105 transition-all duration-300 border border-white/20`}>
        <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-md tracking-wide">
            {platform.name}
        </span>
    </div>
  </div>
</Link>

))}

        </div>
      </div>
    </section>
  );
};

export default PlatformSelector;
