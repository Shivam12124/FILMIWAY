// components/PlatformSelector.js
import React from 'react';
import Link from 'next/link';

const platforms = [
  {
    id: 'hulu',
    name: 'Hulu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg',
    color: 'from-[#1CE783]/20 to-[#1CE783]/5 hover:bg-[#1CE783]/10 border-[#1CE783]/30',
  },
  {
    id: 'hbo-max',
    name: 'HBO Max',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/HBO_Max_%282025%29.svg',
    color: 'from-[#002be7]/20 to-[#002be7]/5 hover:bg-[#002be7]/10 border-[#002be7]/30',
  },
  {
    id: 'paramount-plus',
    name: 'Paramount+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Paramount%2B_logo.svg',
    color: 'from-[#0057ff]/20 to-[#0057ff]/5 hover:bg-[#0057ff]/10 border-[#0057ff]/30',
  },
  {
    id: 'peacock',
    name: 'Peacock',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg',
    color: 'from-[#000000]/40 to-[#000000]/20 hover:bg-white/5 border-white/10',
  },
];

const PlatformCard = ({ platform }) => {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={`h-16 sm:h-20 w-full rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] group-hover:scale-105 transition-all duration-300 border border-white/20 px-6`}>
      {!hasError && platform.logo ? (
        <img 
          src={platform.logo} 
          alt={`${platform.name} Parents Guide`} 
          className={`h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-300 ${platform.id !== 'peacock' ? 'brightness-0 invert' : ''}`}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-md tracking-wide">
          {platform.name}
        </span>
      )}
    </div>
  );
};

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
                <PlatformCard platform={platform} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSelector;
