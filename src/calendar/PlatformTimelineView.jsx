import React from 'react';
import { motion } from 'framer-motion';
import { STREAMING_PLATFORMS } from '../../utils/constants';

const PlatformTimelineView = ({ releases, onNavigate, date }) => {
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const releasesByPlatform = Object.keys(STREAMING_PLATFORMS).map(platformId => {
        const platformReleases = releases.filter(r => 
            r['watch/providers']?.results?.US?.flatrate?.some(p => String(p.provider_id) === platformId)
        );
        return {
            ...STREAMING_PLATFORMS[platformId],
            id: platformId,
            releases: platformReleases
        };
    }).filter(p => p.releases.length > 0);

    return (
        <div className="space-y-4 pr-4">
            {releasesByPlatform.map(platform => (
                <div key={platform.id} className="bg-black/20 p-2 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={platform.logo} alt={platform.name} className="w-8 h-8 rounded-md" />
                        <h3 className="font-bold text-xl text-white" style={{fontFamily: "'Poppins', sans-serif"}}>{platform.name}</h3>
                    </div>
                    <div className="relative h-24">
                        <div className="grid h-full" style={{gridTemplateColumns: `repeat(${daysInMonth}, minmax(0, 1fr))`}}>
                            {Array.from({length: daysInMonth}).map((_, i) => (
                                <div key={i} className="border-r border-white/10 h-full"></div>
                            ))}
                        </div>
                        <div className="absolute inset-0">
                            {platform.releases.map(item => {
                                const releaseDay = new Date(item.release_date || item.first_air_date).getUTCDate();
                                const leftPosition = `${((releaseDay - 1) / daysInMonth) * 100}%`;
                                return (
                                    <motion.div 
                                        key={item.id}
                                        onClick={() => onNavigate('detail', {id: item.id, mediaType: item.media_type})}
                                        whileHover={{scale: 1.1, zIndex: 10}}
                                        className="absolute top-0 h-full w-16 cursor-pointer group"
                                        style={{left: leftPosition}}
                                    >
                                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} className="h-full w-auto object-cover rounded-md border-2 border-transparent group-hover:border-[#A569FF] transition-colors" />
                                        <div className="absolute bottom-0 left-0 w-full p-1 bg-black/70 text-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity truncate">{item.title || item.name}</div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default PlatformTimelineView;