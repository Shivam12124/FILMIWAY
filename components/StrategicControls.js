// components/StrategicControls.js
import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const StrategicControls = ({ isMuted, setIsMuted, isAutoPlay, setIsAutoPlay, playSound }) => {
    return (
        <motion.div 
            className="fixed top-6 right-4 sm:top-8 sm:right-8 z-50 flex items-center gap-2 sm:gap-4" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.5 }}
        >
            <motion.button 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }} 
                onClick={() => { 
                    playSound && playSound('click'); 
                    setIsAutoPlay && setIsAutoPlay(!isAutoPlay); 
                }} 
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl border transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-lg ${
                    isAutoPlay 
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-yellow-500/20' 
                        : 'bg-gray-800/80 text-gray-300 border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60'
                }`}
            >
                {isAutoPlay ? <Pause size={14} className="sm:w-[18px] sm:h-[18px]" /> : <Play size={14} className="sm:w-[18px] sm:h-[18px]" />}
            </motion.button>
            <motion.button 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }} 
                onClick={() => { 
                    setIsMuted && setIsMuted(!isMuted); 
                    if (isMuted && playSound) playSound('success'); 
                }} 
                className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
                {isMuted ? (
                    <VolumeX size={14} className="sm:w-[18px] sm:h-[18px] text-gray-400" />
                ) : (
                    <Volume2 size={14} className="sm:w-[18px] sm:h-[18px] text-gray-300" />
                )}
            </motion.button>
        </motion.div>
    );
};

export default StrategicControls;
