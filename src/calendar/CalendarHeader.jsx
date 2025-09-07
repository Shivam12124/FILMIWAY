import React from 'react';

const CalendarHeader = ({ date, setDate, view, setView, searchQuery, setSearchQuery }) => {
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const changeMonth = (offset) => {
        setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + offset, 1));
    };

    const ViewButton = ({ a_view, label }) => (
        <button 
            onClick={() => setView(a_view)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${view === a_view ? 'bg-[#00BFFF] text-black shadow-[0_0_15px_rgba(0,191,255,0.5)]' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
             style={{fontFamily: "'Poppins', sans-serif"}}
        >
            {label}
        </button>
    );

    return (
        <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-4 bg-black/20 p-2 rounded-full">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-white/20 transition-colors">
                    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <h2 className="text-3xl font-bold text-white w-48 text-center tracking-[2px]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{monthName} {year}</h2>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-white/20 transition-colors">
                    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            <div className="flex items-center gap-2 bg-black/20 p-2 rounded-full">
                <ViewButton a_view="month" label="Month" />
                <ViewButton a_view="week" label="Week" />
                <ViewButton a_view="timeline" label="Platform Timeline" />
            </div>
             <div className="relative">
                <input type="text" placeholder="Search calendar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-white/10 border border-white/20 rounded-full pl-10 pr-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFFF]" />
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            </div>
        </div>
    );
};

export default CalendarHeader;