import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Film } from 'lucide-react';

const RelatedCollectionsSection = ({ movieTitle, currentCollection }) => {
  const MOVIE_TO_COLLECTIONS = {
    '127 Hours': ['se7en', 'inception'],
    'Society of the Snow': ['shutter-island', 'memento'],
    'Cast Away': ['memento', 'psychological-thriller'],
    'The Revenant': ['se7en', 'dark-thriller'],
    'The Martian': ['inception', 'sci-fi'],
    'The Impossible': ['shutter-island', 'drama'],
    'Jungle': ['survival-horror', 'memento'],
    'Apocalypto': ['se7en', 'chase-thriller'],
    '13 Lives': ['team-survival', 'inspiration'],
    'Unbroken': ['war-survival', 'psychological']
  };

  const COLLECTIONS_INFO = {
    'se7en': {
      displayName: 'Se7en-Like Serial Killer Thrillers',
      description: 'Dark, methodical psychological thrillers with twisted narratives',
      url: '/collection/se7en-like'
    },
    'inception': {
      displayName: 'Inception-Like Mind-Bending Films',
      description: 'Complex narratives that challenge reality and perception',
      url: '/collection/inception-like'
    },
    'shutter-island': {
      displayName: 'Shutter Island-Like Psychological Thrillers',
      description: 'Twisted mental and reality-bending narratives with shocking endings',
      url: '/collection/shutter-island-like'
    },
    'matrix': {
      displayName: 'Matrix-Like Sci-Fi Action',
      description: 'Reality-questioning sci-fi action masterpieces',
      url: '/collection/matrix-like'
    },
    'memento': {
      displayName: 'Memento-Like Non-Linear Thrillers',
      description: 'Complex storytelling with unreliable narrators and time games',
      url: '/collection/memento-like'
    },
    'psychological-thriller': {
      displayName: 'Psychological Thrillers',
      description: 'Mind games and psychological warfare at its finest',
      url: '/collection/psychological-thriller'
    },
    'dark-thriller': {
      displayName: 'Dark Thrillers',
      description: 'Intense, dark, and unforgiving narratives',
      url: '/collection/dark-thriller'
    },
    'sci-fi': {
      displayName: 'Sci-Fi Masterpieces',
      description: 'Science fiction exploring impossible scenarios with intelligence',
      url: '/collection/sci-fi'
    },
    'drama': {
      displayName: 'Emotional Dramas',
      description: 'Powerful stories of human resilience and emotion',
      url: '/collection/drama'
    },
    'survival-horror': {
      displayName: 'Survival Horror',
      description: 'Horror elements mixed with survival narratives',
      url: '/collection/survival-horror'
    },
    'chase-thriller': {
      displayName: 'Chase Thrillers',
      description: 'Non-stop action and relentless pursuit',
      url: '/collection/chase-thriller'
    },
    'team-survival': {
      displayName: 'Team Survival Stories',
      description: 'Collective human effort against impossible odds',
      url: '/collection/team-survival'
    },
    'inspiration': {
      displayName: 'Inspirational Masterpieces',
      description: 'Stories that uplift and inspire the human spirit',
      url: '/collection/inspiration'
    },
    'war-survival': {
      displayName: 'War Survival Stories',
      description: 'Survival against the backdrop of war and conflict',
      url: '/collection/war-survival'
    }
  };

  const relatedCollectionKeys = MOVIE_TO_COLLECTIONS[movieTitle] || [];
  const relatedCollections = relatedCollectionKeys
    .filter(key => key !== currentCollection)
    .map(key => COLLECTIONS_INFO[key])
    .filter(Boolean)
    .slice(0, 3);

  if (relatedCollections.length === 0) return null;

  return (
    <motion.section
      className="py-16 md:py-20 border-t-4 border-yellow-400 bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-3">
            EXPLORE RELATED COLLECTIONS
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Discover similar films with comparable themes, intensity, or storytelling style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCollections.map((collection, index) => (
            <motion.div
              key={collection.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={collection.url}>
                <div className="group cursor-pointer h-full p-6 border-2 border-gray-700 rounded-lg bg-gradient-to-br from-gray-900/40 to-gray-900/10 hover:border-yellow-400 hover:from-gray-900/60 hover:to-gray-900/30 transition-all duration-300 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-all duration-300 flex-shrink-0">
                        <Film size={24} className="text-yellow-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2 leading-tight">
                          {collection.displayName}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 line-clamp-2">
                      {collection.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Browse Collection</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RelatedCollectionsSection;
