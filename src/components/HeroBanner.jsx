// components/HeroBanner.js
"use client";
import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black pt-20"> {/* Added pt-20 for header space */}
            <div className="relative w-full max-w-full mx-auto">
                {/* Fixed Image Container */}
                <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-xl mx-6 my-8">
                    <img
                        src="https://images.unsplash.com/photo-1489599006549-b4b92f74fbd5?q=80&w=2070"
                        alt="Cinema Hero"
                        className="w-full h-full object-cover object-center"
                        style={{ maxWidth: '100%' }} // Ensures no overflow
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                    
                    {/* Content */}
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-start px-8 md:px-12"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="max-w-lg">
                            <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide">
                                DISCOVER
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-light text-yellow-400 mb-6 tracking-wide">
                                CINEMATIC EXCELLENCE
                            </h2>
                            <p className="text-gray-200 text-lg leading-relaxed">
                                Curated collections of exceptional films with detailed analysis and community reviews.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
