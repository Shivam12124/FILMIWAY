// components/ShutterIslandSEOFAQSection.js - FAQ SECTION FOR SHUTTER ISLAND COLLECTION
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../utils/sensitiveContent';

// 🏝️ SHUTTER ISLAND FAQ SECTION - TOP 10 MOVIES LIKE SHUTTER ISLAND
const ShutterIslandSEOFAQSection = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    // 🔥 SHUTTER ISLAND THEMED FAQs
    const faqs = [
        {
            question: `What makes ${movie.Title} similar to Shutter Island?`,
            answer: `${movie.Title} shares Shutter Island's core elements: unreliable narrators, psychological manipulation, identity crises, and shocking plot twists that make you question reality. Both films feature protagonists who may not be who they think they are, creating the same disorienting experience that makes Shutter Island so compelling.`
        },
        {
            question: `How does ${movie.Title} compare to Shutter Island in terms of psychological complexity?`,
            answer: `${movie.Title} delivers similar psychological depth through its ${movie.Genre?.toLowerCase() || 'thriller'} approach to reality distortion and identity themes. Like Shutter Island's Leonardo DiCaprio character, the protagonists in ${movie.Title} navigate unreliable memories and perceptions that challenge both character and audience understanding.`
        },
        {
            question: `Who directed ${movie.Title} and what connects it to Shutter Island-style films?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.Year}. Like Martin Scorsese's Shutter Island, it uses innovative storytelling techniques to explore themes of mental health, identity confusion, and psychological manipulation through atmospheric cinematography and narrative misdirection.`
        },
        {
            question: `Does ${movie.Title} have plot twists like Shutter Island's shocking ending?`,
            answer: movieInfo?.mindBendingIndex >= 85 
                ? `Yes, ${movie.Title} delivers mind-bending revelations comparable to Shutter Island's legendary twist. With a psychological complexity rating of ${movieInfo.mindBendingIndex}/100, it features shocking plot turns that recontextualize everything viewers thought they understood about the story.`
                : `${movie.Title} includes psychological twists and revelations that enhance its connection to Shutter Island's style of reality-questioning narrative, though it focuses more on ${movie.Genre?.toLowerCase() || 'psychological themes'} than shocking plot reversals.`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area. The film is often available for rent or purchase on digital platforms like Amazon Video, iTunes, and Google Play Movies.`
        },
        {
            question: `Does ${movie.Title} contain mature content like Shutter Island?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes, psychological intensity, and complex subject matter'}. Like Shutter Island, it deals with heavy psychological themes and has ${sensitiveData.scenes.length} scenes with mature content that enhance its psychological thriller atmosphere.`
                : `${movie.Title} focuses primarily on psychological complexity similar to Shutter Island, with minimal mature content. The film emphasizes mental health themes, identity confusion, and psychological manipulation through intellectual rather than explicit content.`
        },
        {
            question: `What is the IMDb rating of ${movie.Title} and how does it compare to Shutter Island?`,
            answer: `${movie.Title} has an IMDb rating of ${movieInfo?.rating || movie.imdbRating}/10. Shutter Island holds an 8.2/10 rating, and like that film, ${movie.Title} is highly rated for its psychological depth, innovative storytelling, and reality-twisting narrative that challenges conventional thriller expectations.`
        },
        {
            question: `Is ${movie.Title} as mind-bending as Shutter Island?`,
            answer: movieInfo?.complexityLevel === 'EXTREME' 
                ? `${movie.Title} is considered equally or more mind-bending than Shutter Island, with an extreme complexity level that requires multiple viewings to fully appreciate. Like Shutter Island's layered narrative, it plants clues throughout that only make sense after knowing the truth.`
                : `${movie.Title} offers substantial psychological complexity comparable to Shutter Island, though it approaches mind-bending elements through ${movie.Genre?.toLowerCase() || 'different techniques'}. Both films reward careful viewing and multiple watches to catch subtle details and foreshadowing.`
        },
        {
            question: `What themes does ${movie.Title} share with Shutter Island?`,
            answer: `${movie.Title} explores similar themes to Shutter Island including ${movieInfo?.themes?.slice(0,3).join(', ') || 'psychological manipulation, identity crisis, and reality distortion'}. Both films examine mental health, unreliable perception, and the thin line between sanity and delusion in atmospheric, psychological thriller settings.`
        },
        {
            question: `Should I watch ${movie.Title} if I loved Shutter Island?`,
            answer: `Absolutely! ${movie.Title} is specifically recommended for Shutter Island fans because it delivers the same psychological intensity, unreliable narrator elements, and reality-questioning experience. Both films feature complex protagonists navigating identity crises and shocking revelations that redefine the entire narrative.`
        }
    ];
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie.Title} and how it compares to other psychological thrillers like Shutter Island.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-2 sm:mb-3">
                            {faq.question}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
            
            {/* 🔥 SHUTTER ISLAND COLLECTION CONTEXT */}
            <motion.div 
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-900/20 border border-blue-600/30 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <h3 className="text-lg font-medium text-blue-200 mb-3 flex items-center gap-2">
                    <Info size={16} />
                    About This Collection
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                    {movie.Title} is part of our curated "Top 10 Movies Like Shutter Island" collection, featuring films that excel in psychological complexity, unreliable narration, and reality-twisting narratives. Each movie shares Shutter Island's ability to blur the lines between truth and perception, making them perfect for viewers who enjoy mind-bending psychological thrillers.
                </p>
            </motion.div>
        </motion.section>
    );
};

export default ShutterIslandSEOFAQSection;
