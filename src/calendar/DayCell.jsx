import React from 'react';
import { motion } from 'framer-motion';

const DayCell = ({ day, releases, isToday, isCurrentMonth, onReleaseClick, onHover }) => {
    const cellClasses = `
        relative aspect-square rounded-lg p-2 flex flex-col transition-all duration-300 group cursor-pointer
        bg-black/20 border border-white/10
        ${!isCurrentMonth && 'opacity-30 pointer-events-none'}
        hover:border-[#00BFFF] hover:bg-black/30 hover:shadow-[0_0_25px_rgba(0,191,255,0.4)]
    `;

    const pulseAnimation = isToday ? { scale: [1, 1.02, 1], transition: { duration: 2, repeat: Infinity } } : {};
    
    const getReleaseType = (release) => {
        if (release.media_type === 'movie' && (!release['watch/providers']?.results?.US || !release['watch/providers'].results.US.flatrate)) return 'theatrical_release';
        const releaseDate = new Date(release.release_date || release.first_air_date);
        const twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
        if (releaseDate > twoWeeksAgo) return 'new_release';
        return 'streaming_debut';
    };

    const typeIndicators = releases.reduce((acc, release) => {
        const type = getReleaseType(release);
        if (!acc.includes(type)) {
            acc.push(type);
        }
        return acc;
    }, []);

    const typeColorMap = {
        new_release: 'bg-green-500',
        streaming_debut: 'bg-blue-500',
        leaving_soon: 'bg-orange-500',
        theatrical_release: 'bg-purple-500'
    };

    return (
        <motion.div 
            layout
            className={cellClasses}
            onHoverStart={() => onHover(releases[0])}
            onHoverEnd={() => onHover(null)}
            onClick={() => releases.length > 0 && onReleaseClick(day, releases)}
            animate={pulseAnimation}
            whileHover={{ scale: 1.05, y: -2 }}
        >
            <span className={`font-bold ${isToday ? 'text-[#00BFFF]' : 'text-gray-300'}`}>{day}</span>
            <div className="flex-grow overflow-hidden relative mt-1">
                <div className="flex flex-wrap gap-1">
                    {typeIndicators.slice(0, 4).map(type => (
                        <div key={type} className={`w-1.5 h-1.5 rounded-full ${typeColorMap[type]}`}></div>
                    ))}
                </div>
                {releases.length > 0 && (
                  <p className="text-xs text-gray-400 mt-1 truncate group-hover:text-white transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {releases[0].title || releases[0].name}
                  </p>
                )}
            </div>
        </motion.div>
    );
};

export default DayCell;