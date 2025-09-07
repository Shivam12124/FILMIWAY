"use client";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, Crown } from 'lucide-react';

const CollectionLinkSection = () => {
    const router = useRouter();

    return (
        <motion.section 
            id="mind-bending"
            className="py-12 px-6" // Reduced padding
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-2xl mx-auto"> {/* Reduced from 4xl to 2xl */}
                <motion.div
                    onClick={() => router.push('/mind-benders')}
                    className="group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-yellow-500/40 rounded-xl p-8 hover:border-yellow-500/70 hover:from-gray-800/70 hover:to-gray-900/80 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-yellow-500/20"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="text-center">
                        {/* Smaller Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            🧠
                        </div>

                        {/* Smaller Title */}
                        <h3 className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 mb-4 tracking-wide">
                            TOP 10 MOVIES LIKE INCEPTION
                        </h3>

                        {/* Smaller Description */}
                        <p className="text-gray-300 font-light mb-6 leading-relaxed">
                            Mind-bending cinema with complexity analysis & user reviews
                        </p>

                        {/* Smaller Button */}
                        <div className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300">
                            Explore Collection
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

    

export default CollectionLinkSection;
