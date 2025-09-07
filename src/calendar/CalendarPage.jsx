import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchAPI } from '../../utils/api';
import Loader from '../../components/Loader';
import FilterSidebar from './FilterSidebar';
import CalendarHeader from './CalendarHeader';
import DayCell from './DayCell';
import ReleaseModal from './ReleaseModal';
import WeeklyView from './WeeklyView';
import PlatformTimelineView from './PlatformTimelineView';

const CalendarPage = ({ onNavigate }) => {
    const [view, setView] = useState('month');
    const [date, setDate] = useState(new Date());
    const [allReleases, setAllReleases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [hoveredBackdrop, setHoveredBackdrop] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [platformFilter, setPlatformFilter] = useState(new Set());
    const [typeFilter, setTypeFilter] = useState(new Set());

    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    useEffect(() => {
        const fetchAllDetails = async (items) => {
            const detailedItems = await Promise.all(
                items.map(item => fetchAPI(`${item.media_type}/${item.id}`))
            );
            return detailedItems.filter(Boolean);
        };

        const fetchReleases = async () => {
            setLoading(true);
            const startDate = `${year}-${String(month + 1).padStart(2, '0')}-01`;
            const endDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(daysInMonth).padStart(2, '0')}`;
            
            const moviePromise = fetchAPI(`discover/movie?primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`);
            const tvPromise = fetchAPI(`discover/tv?air_date.gte=${startDate}&air_date.lte=${endDate}`);
            const [movieData, tvData] = await Promise.all([moviePromise, tvPromise]);

            const combined = [
                ...(movieData?.results || []).map(m => ({ ...m, media_type: 'movie' })),
                ...(tvData?.results || []).map(t => ({ ...t, media_type: 'tv' }))
            ].filter(item => item.backdrop_path);
            
            const detailedData = await fetchAllDetails(combined);
            setAllReleases(detailedData);
            setLoading(false);
        };
        fetchReleases();
    }, [date, year, month, daysInMonth]);
    
    const filteredReleases = allReleases.filter(item => {
        const titleMatch = (item.title || item.name).toLowerCase().includes(searchQuery.toLowerCase());
        const platformProviders = item['watch/providers']?.results?.US?.flatrate?.map(p => String(p.provider_id)) || [];
        const platformMatch = platformFilter.size === 0 || platformProviders.some(pId => platformFilter.has(pId));
        
        const getReleaseType = (release) => {
            if (release.media_type === 'movie' && (!release['watch/providers']?.results?.US || !release['watch/providers'].results.US.flatrate)) return 'theatrical_release';
            const releaseDate = new Date(release.release_date || release.first_air_date);
            const today = new Date();
            const daysDiff = (today - releaseDate) / (1000 * 60 * 60 * 24);
            if (daysDiff >= 0 && daysDiff < 14) return 'new_release';
            return 'streaming_debut';
        };

        const typeMatch = typeFilter.size === 0 || typeFilter.has(getReleaseType(item));
        
        return titleMatch && platformMatch && typeMatch;
    });

    const releasesByDate = filteredReleases.reduce((acc, item) => {
        const releaseDateStr = item.release_date || item.first_air_date;
        if (!releaseDateStr) return acc;
        const releaseDate = new Date(releaseDateStr + 'T00:00:00Z').getUTCDate();
        if (!acc[releaseDate]) acc[releaseDate] = [];
        acc[releaseDate].push(item);
        return acc;
    }, {});

    const handleDayClick = (day, dayReleases) => {
        setSelectedDate({ date: new Date(year, month, day), releases: dayReleases });
    };

    const handleDayHover = (release) => {
        setHoveredBackdrop(release?.backdrop_path ? `https://image.tmdb.org/t/p/original${release.backdrop_path}` : null);
    };

    const renderMonthView = () => (
        <div className="grid grid-cols-7 gap-1 md:gap-2">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                <div key={day} className="text-center font-bold text-gray-500 text-xs md:text-sm pb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{day}</div>
            ))}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, day) => {
                const dayNumber = day + 1;
                const today = new Date();
                const isToday = year === today.getFullYear() && month === today.getMonth() && dayNumber === today.getDate();
                return (
                    <DayCell 
                        key={dayNumber}
                        day={dayNumber}
                        releases={releasesByDate[dayNumber] || []}
                        isToday={isToday}
                        isCurrentMonth={true}
                        onReleaseClick={handleDayClick}
                        onHover={handleDayHover}
                    />
                );
            })}
        </div>
    );

    return (
        <div className="bg-[#101015] text-white h-full flex flex-col md:flex-row relative overflow-hidden">
            <AnimatePresence>
                {hoveredBackdrop && (
                    <motion.div
                        key={hoveredBackdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 z-0"
                    >
                        <img src={hoveredBackdrop} className="w-full h-full object-cover" alt="Dynamic background"/>
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative z-10 flex flex-col md:flex-row flex-grow h-full">
                <FilterSidebar 
                    date={date} 
                    setDate={setDate} 
                    platformFilter={platformFilter}
                    setPlatformFilter={setPlatformFilter}
                    typeFilter={typeFilter}
                    setTypeFilter={setTypeFilter}
                />
                <div className="flex-grow flex flex-col bg-black/30 backdrop-blur-2xl" style={{background: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 40%)'}}>
                    <CalendarHeader date={date} setDate={setDate} view={view} setView={setView} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <main className="flex-grow p-2 md:p-4 overflow-y-auto scrollbar-hide">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={view}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                {loading ? <Loader fullScreen={false} /> : (
                                    <>
                                        {view === 'month' && renderMonthView()}
                                        {view === 'week' && <WeeklyView date={date} releases={filteredReleases} onNavigate={onNavigate} />}
                                        {view === 'timeline' && <PlatformTimelineView date={date} releases={filteredReleases} onNavigate={onNavigate} />}
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
             <AnimatePresence>
                {selectedDate && (
                    <ReleaseModal 
                        date={selectedDate.date}
                        releases={selectedDate.releases}
                        onClose={() => setSelectedDate(null)}
                        onNavigate={onNavigate}
                    />
                )}
             </AnimatePresence>
        </div>
    );
};

export default CalendarPage;
