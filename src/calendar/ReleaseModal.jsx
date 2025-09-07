import React from 'react';
import { motion } from 'framer-motion';
import { STREAMING_PLATFORMS } from '../../utils/constants';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const ReleaseModal = ({ date, releases, onClose, onNavigate }) => {
    if (!releases || releases.length === 0) return null;

    const monthName = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();

    const getPlatformInfo = (item) => {
        const provider = item['watch/providers']?.results?.US?.flatrate?.[0];
        if (provider && STREAMING_PLATFORMS[provider.provider_id]) {
            return <img src={STREAMING_PLATFORMS[provider.provider_id].logo} alt={STREAMING_PLATFORMS[provider.provider_id].name} className="w-16 h-auto object-contain" />;
        }
        if (item.media_type === 'movie') {
            return <span className="text-3xl">🍿</span>;
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[200]"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-gradient-to-br from-gray-900/70 to-black/70 border border-white/10 rounded-xl w-full max-w-4xl max-h-[80vh] flex flex-col backdrop-blur-xl shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-4 border-b border-white/10 flex justify-between items-center flex-shrink-0">
                    <h2 className="text-3xl tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        Releases for {monthName} {day}
                    </h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-2xl">&times;</button>
                </header>
                <div className="p-6 overflow-y-auto space-y-4 scrollbar-hide">
                    {releases.map(item => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            onClick={() => onNavigate('detail', {id: item.id, mediaType: item.media_type})}
                            className="flex gap-4 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors group items-center"
                        >
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title || item.name} className="w-20 h-auto object-cover rounded-md" />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold group-hover:text-[#00BFFF]" style={{fontFamily: "'Poppins', sans-serif"}}>{item.title || item.name}</h3>
                                <p className="text-sm text-gray-400 line-clamp-2" style={{fontFamily: "'Poppins', sans-serif"}}>{item.overview}</p>
                            </div>
                            <div className="w-24 flex items-center justify-center">
                                {getPlatformInfo(item)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ReleaseModal;
