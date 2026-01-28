import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Map your high-quality local posters to their slugs
const LOCAL_POSTER_MAP = {
    'movies-like-inception': '/SAMPLEINCEPTION.webp',
    'movies-like-the-matrix': '/SAMPLEMATRIX.webp',
    'movies-like-interstellar': '/SAMPLEINTERSTELLAR.webp',
    'movies-like-shutter-island': '/SAMPLESHUTTERISLAND.jpg',
};

const CollectionHeroCard = ({ collection, index = 0 }) => {
    // 1. Determine Image Source
    // Priority: Local High-Res -> Manual Poster in Data -> Fallback Placeholder
    const heroImage = LOCAL_POSTER_MAP[collection.slug] || 
                      collection.featured?.hero?.poster || 
                      'https://via.placeholder.com/500x750?text=Filmiway+Collection';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="w-full h-full"
        >
            <Link href={`/collection/${collection.slug}`} className="group relative block aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-900 shadow-2xl border border-gray-800/50 hover:shadow-yellow-500/10 transition-all duration-300">
                
                {/* A. HERO IMAGE (Optimized) */}
                <Image 
                    src={heroImage} 
                    alt={collection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    priority={index < 4} // Load top 4 immediately for speed
                />

                {/* B. PREMIUM GRADIENT OVERLAY */}
                {/* Starts black at bottom (90%), fades to transparent at top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* C. TYPOGRAPHY LAYER */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-center items-center z-10">
                    
                    {/* Subtitle (Montserrat) - Slides up on hover */}
                    <p className="text-yellow-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 font-[var(--font-montserrat)]">
                        {collection.subtitle || "Curated Collection"}
                    </p>

                    {/* Title (Bebas Neue) - Big & Bold */}
                    <h3 className="text-white text-3xl sm:text-4xl font-normal uppercase leading-[0.9] drop-shadow-lg mb-4 font-[var(--font-bebas)] tracking-wide">
                        {/* Shorten 'Movies Like' to 'Like' for cleaner UI */}
                        {collection.title.replace('Movies Like', 'Like').replace('Best', 'Top')}
                    </h3>

                    {/* Interactive Gold Divider */}
                    <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full group-hover:w-24 transition-all duration-500" />
                    
                </div>
            </Link>
        </motion.div>
    );
};

export default CollectionHeroCard;