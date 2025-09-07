import React from 'react';
import { motion } from 'framer-motion';

const WeeklyView = ({ date, releases, onNavigate }) => {
    const getWeekDays = (currentDate) => {
        const week = [];
        const firstDayOfWeek = new Date(currentDate);
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay()); // Start from Sunday
        for (let i = 0; i < 7; i++) {
            const day = new Date(firstDayOfWeek);
            day.setDate(day.getDate() + i);
            week.push(day);
        }
        return week;
    };

    const weekDays = getWeekDays(date);

    return (
        <div className="grid grid-cols-7 gap-2 h-full">
            {weekDays.map(day => {
                const dayReleases = releases.filter(r => {
                    const releaseDate = new Date(r.release_date || r.first_air_date);
                    return releaseDate.toDateString() === day.toDateString();
                });
                return (
                    <div key={day.toISOString()} className="bg-black/20 border border-white/10 rounded-lg p-2 flex flex-col">
                        <h3 className="font-bold text-center text-sm text-gray-400" style={{fontFamily: "'Poppins', sans-serif"}}>{day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</h3>
                        <h4 className="font-bold text-center text-2xl text-white mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{day.getDate()}</h4>
                        <div className="overflow-y-auto space-y-2 scrollbar-hide">
                            {dayReleases.map(item => (
                                <motion.div 
                                    key={item.id} 
                                    onClick={() => onNavigate('detail', {id: item.id, mediaType: item.media_type})} 
                                    className="cursor-pointer group"
                                    whileHover={{scale: 1.05}}
                                >
                                    <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title || item.name} className="w-full rounded-md border-2 border-transparent group-hover:border-[#00BFFF] transition-colors"/>
                                    <p className="text-xs text-center mt-1 font-semibold truncate group-hover:text-[#00BFFF]">{item.title || item.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default WeeklyView;
