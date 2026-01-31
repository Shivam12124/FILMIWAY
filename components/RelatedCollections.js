// components/RelatedCollections.js - NEXT.JS COMPATIBLE ✅

import React from 'react';
import Link from 'next/link'; // ✅ FIXED: Using Next.js Link
import { COLLECTIONS } from '../data/collections'; 

const RelatedCollections = ({ collectionIds }) => {
  // 1. Safety Check: If no IDs are passed, abort mission
  if (!collectionIds || collectionIds.length === 0) return null;

  // 2. Data Retrieval: Convert "slug strings" into actual "data objects"
  const validCollections = collectionIds
    .map(slug => COLLECTIONS[slug])
    .filter(Boolean); 

  // 3. Double Check: If map found nothing, abort.
  if (validCollections.length === 0) return null;

  return (
    <section className="w-full py-12 border-t border-gray-800/50 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🔗</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Explore Related Collections
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {validCollections.map((col) => (
            <Link 
              key={col.slug} 
              href={`/collection/${col.slug}`} // ✅ FIXED: usage of 'href' instead of 'to'
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Dynamic Gradient Background (Subtle Glow) */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${col.gradientFrom} ${col.gradientTo}`} />

              <div className="relative p-6 h-full flex flex-col justify-between">
                
                {/* Top Section: Icon + Title */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {col.emoji}
                    </span>
                    
                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {col.title}
                  </h3>
                  
                  {/* SEO Description Injection */}
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {col.description}
                  </p>
                </div>

                {/* Bottom Section: Tags */}
                <div className="mt-6 flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium bg-gradient-to-r ${col.gradientFrom} ${col.gradientTo} text-white bg-opacity-20`}>
                    {col.totalMovies || '10'} Movies
                  </span>
                  <span className="text-xs text-gray-500">
                    (2026)
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

export default RelatedCollections;