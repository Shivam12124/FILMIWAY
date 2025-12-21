// components/InternalCollectionsSection.js

import React, { useMemo } from 'react';
import Link from 'next/link';

const InternalCollectionsSection = React.memo(({ movie, collection }) => {
  
  // ✅ FIXED: Safe useMemo with guard
  const relatedCollections = useMemo(() => {
    if (!movie || !movie?.Title) {
      return [];
    }

    // All related collections for Survival theme
    return [
      // ✨ Movies Like Interstellar
      {
        slug: 'movies-like-interstellar',
        title: 'Movies Like Interstellar',
        description: 'Epic space odysseys with cosmic scope, time dilation, and profound human emotion',
        emoji: '🌌',
        gradient: 'from-cyan-600 to-blue-800',
        rating: '8.3',
      },
      
      // 📦 Movies Like Se7en
      {
        slug: 'movies-like-se7en',
        title: 'Movies Like Se7en',
        description: 'Dark, atmospheric crime thrillers with obsessed detectives and shocking psychological twists',
        emoji: '📦',
        gradient: 'from-amber-700 to-gray-900',
        rating: '8.8',
      },
      
      // 🏠 Movies Like Parasite
      {
        slug: 'movies-like-parasite',
        title: 'Movies Like Parasite',
        description: 'Dark satires exposing class warfare, wealth disparity, and social injustice with thriller intensity',
        emoji: '🏠',
        gradient: 'from-slate-700 to-gray-900',
        rating: '8.5',
      },
      
      // 🔴 Movies Like The Matrix
      {
        slug: 'movies-like-the-matrix',
        title: 'Movies Like The Matrix',
        description: 'Cyberpunk masterpieces with simulated realities, digital consciousness, and reality-bending awakenings',
        emoji: '🔴',
        gradient: 'from-emerald-500 to-teal-600',
        rating: '8.4',
      },
      
      // 🌀 Movies Like Inception
      {
        slug: 'movies-like-inception',
        title: 'Movies Like Inception',
        description: 'Mind-bending sci-fi thrillers with complex narratives and reality-questioning elements',
        emoji: '🌀',
        gradient: 'from-purple-600 to-blue-700',
        rating: '8.6',
      },
      
      // 🧠 Movies Like Memento
      {
        slug: 'movies-like-memento',
        title: 'Movies Like Memento',
        description: 'Memory-twisting psychological thrillers with fragmented narratives and identity confusion',
        emoji: '🧠',
        gradient: 'from-gray-700 to-gray-900',
        rating: '8.2',
      },
      
      // 🏝️ Movies Like Shutter Island
      {
        slug: 'movies-like-shutter-island',
        title: 'Movies Like Shutter Island',
        description: 'Psychological thrillers with unreliable narrators, identity crises, and shocking revelations',
        emoji: '🏝️',
        gradient: 'from-blue-800 to-indigo-900',
        rating: '8.0',
      },
      
      // ⚔️ Best War Films
      {
        slug: 'best-war-films',
        title: '10 Best War Films',
        description: 'Epic war stories with survival themes and human resilience',
        emoji: '⚔️',
        gradient: 'from-red-700 to-red-900',
        rating: '8.4',
      },
      
      // 🎭 Best Drama Movies
      {
        slug: 'best-drama-movies-on-netflix',
        title: 'Best Drama Movies on Netflix',
        description: 'Emotionally intense stories of human endurance',
        emoji: '🎭',
        gradient: 'from-red-600 to-red-800',
        rating: '8.1',
      },
      
      // 🗡️ Best Revenge Movies
      {
        slug: 'best-revenge-movies',
        title: 'Best Revenge Movies',
        description: 'Stories of survival through vengeance and determination',
        emoji: '🗡️',
        gradient: 'from-red-600 to-pink-700',
        rating: '8.0',
      },
    ];
  }, [movie?.Title]);

  if (!relatedCollections || relatedCollections.length === 0) {
    return null;
  }

  return (
    <section className="internal-collections-section my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
          <span className="text-4xl">🔗</span> Explore Related Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {relatedCollections.map((relatedCollection) => (
            <Link
              key={relatedCollection.slug}
              href={`/collection/${relatedCollection.slug}`}
              className="group"
            >
              <div className={`bg-gradient-to-br ${relatedCollection.gradient} hover:opacity-90 transition-all duration-300 p-5 rounded-lg border border-white/20 hover:border-white/40 cursor-pointer h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-1`}>
                <div className="text-4xl mb-3">{relatedCollection.emoji}</div>
                
                <h3 className="text-sm font-bold text-white group-hover:text-yellow-200 transition-colors mb-2 line-clamp-2">
                  {relatedCollection.title}
                </h3>
                
                <p className="text-gray-200 text-xs line-clamp-2 flex-grow mb-3">
                  {relatedCollection.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-yellow-300 group-hover:text-yellow-100 text-xs font-semibold">
                    View →
                  </span>
                  <span className="text-xs font-bold text-yellow-200 bg-white/10 px-2 py-1 rounded">
                    ⭐ {relatedCollection.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .internal-collections-section {
          background: linear-gradient(135deg, rgba(59, 52, 12, 0.15) 0%, rgba(78, 35, 0, 0.08) 100%);
          padding: 3rem 0;
          border-top: 1px solid rgba(250, 204, 21, 0.2);
          border-bottom: 1px solid rgba(250, 204, 21, 0.2);
        }
      `}</style>
    </section>
  );
});

InternalCollectionsSection.displayName = 'InternalCollectionsSection';

export default InternalCollectionsSection;
