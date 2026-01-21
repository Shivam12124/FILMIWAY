// components/InternalCollectionsSection.js - FIXED N/A RATINGS & COUNTS ✅

import React, { useMemo } from 'react';
import Link from 'next/link';
import { COLLECTIONS } from '../data/collections';

const InternalCollectionsSection = React.memo(({ currentSlug }) => {
  
  // ✅ DYNAMIC LOGIC: Get related collections based on the current page's slug
  const relatedCollectionsData = useMemo(() => {
    const currentCollection = COLLECTIONS[currentSlug];

    if (!currentCollection || !currentCollection.relatedCollections) {
      return [];
    }

    return currentCollection.relatedCollections
      .map(slug => COLLECTIONS[slug])
      .filter(item => item !== undefined); 
  }, [currentSlug]);

  if (!relatedCollectionsData || relatedCollectionsData.length === 0) {
    return null;
  }

  return (
    <section className="internal-collections-section my-16 border-t border-b border-gray-800/50 py-12 bg-gray-900/20">
      <div className="container mx-auto px-4">
        
        {/* Header: Yellow, Condensed Style */}
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 flex items-center gap-3 tracking-tighter uppercase">
          <span className="text-2xl sm:text-3xl">🔗</span> Explore Related Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCollectionsData.map((collection) => {
            
            // ✅ FIX: Check multiple locations for Rating and Count
            const rating = collection.rating || collection.stats?.averageRating || 'N/A';
            const count = collection.movieCount || collection.stats?.totalMovies || collection.movies?.length || '10';

            return (
              <Link
                key={collection.slug}
                href={`/collection/${collection.slug}`}
                className="group h-full"
              >
                <div className={`
                  relative h-full p-6 rounded-xl border border-white/10 
                  bg-gradient-to-br ${collection.gradient || 'from-gray-800 to-gray-900'} 
                  hover:border-yellow-500/50 hover:shadow-2xl hover:-translate-y-1 
                  transition-all duration-300 flex flex-col overflow-hidden
                `}>
                  
                  {/* Header: Emoji & Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm text-3xl">
                      {collection.emoji || '🎬'}
                    </div>
                    <span className="px-2 py-1 text-xs font-bold bg-black/40 rounded text-yellow-400 border border-yellow-500/30">
                      ⭐ {rating}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2 font-condensed">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                      {collection.description}
                    </p>
                  </div>

                  {/* Footer: CTA & Count */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                      {count} Movies
                    </span>
                    <span className="text-sm font-semibold text-yellow-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Collection →
                    </span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
});

InternalCollectionsSection.displayName = 'InternalCollectionsSection';

export default InternalCollectionsSection;