import React from 'react';
import StickyCalendar from './StickyCalendar';
import { STREAMING_PLATFORMS } from '../../utils/constants';

const FilterSidebar = ({ date, setDate, platformFilter, setPlatformFilter, typeFilter, setTypeFilter }) => {
    
    const togglePlatform = (id) => {
        setPlatformFilter(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };

    const toggleType = (type) => {
        setTypeFilter(prev => {
            const newSet = new Set(prev);
            if (newSet.has(type)) newSet.delete(type);
            else newSet.add(type);
            return newSet;
        });
    };

    const releaseTypes = [
        { id: 'new_release', label: 'New Release', color: 'text-green-400', icon: '🟢' },
        { id: 'streaming_debut', label: 'Streaming Debut', color: 'text-blue-400', icon: '🔵' },
        { id: 'leaving_soon', label: 'Leaving Soon', color: 'text-orange-400', icon: '🟠' },
        { id: 'theatrical_release', label: 'Theatrical Release', color: 'text-purple-400', icon: '🟣' },
    ];

    return (
        <div className="w-full md:w-64 lg:w-72 flex-shrink-0 bg-black/20 border-r border-white/10 p-4 space-y-6 overflow-y-auto scrollbar-hide">
            <StickyCalendar date={date} setDate={setDate} />
            <div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Platforms</h3>
                <div className="space-y-2">
                    {Object.entries(STREAMING_PLATFORMS).map(([id, { name, logo }]) => (
                        <label key={id} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors">
                            <input 
                                type="checkbox"
                                checked={platformFilter.has(id)}
                                onChange={() => togglePlatform(id)}
                                className="h-4 w-4 rounded bg-white/20 border-white/30 text-[#00BFFF] focus:ring-[#00BFFF] focus:ring-offset-black/50"
                            />
                            <img src={logo} alt={name} className="w-6 h-6 object-contain rounded-md" />
                            <span className="text-gray-300 text-sm font-medium" style={{fontFamily: "'Poppins', sans-serif"}}>{name}</span>
                        </label>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Release Type</h3>
                 <div className="space-y-2 text-sm">
                    {releaseTypes.map(type => (
                         <label key={type.id} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10">
                            <input 
                                type="checkbox" 
                                checked={typeFilter.has(type.id)}
                                onChange={() => toggleType(type.id)}
                                className={`h-4 w-4 rounded bg-white/20 border-white/30 ${type.color} focus:ring-2 ${type.color.replace('text-', 'focus:ring-')}`}
                             /> 
                             <span className="text-gray-300 flex items-center gap-2" style={{fontFamily: "'Poppins', sans-serif"}}>{type.icon} {type.label}</span>
                         </label>
                    ))}
                 </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
