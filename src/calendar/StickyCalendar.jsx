import React from 'react';

const StickyCalendar = ({ date, setDate }) => {
    const monthName = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, date.getMonth(), 1).getDay();
    const today = new Date();

    return (
        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-white" style={{fontFamily: "'Poppins', sans-serif"}}>{monthName} {year}</span>
                 <div className="flex gap-1">
                    <button onClick={() => setDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))} className="p-1 rounded-full hover:bg-white/20">‹</button>
                    <button onClick={() => setDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))} className="p-1 rounded-full hover:bg-white/20">›</button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={`${d}-${i}`}>{d}</div>)}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, day) => {
                    const dayNumber = day + 1;
                    const isToday = year === today.getFullYear() && date.getMonth() === today.getMonth() && dayNumber === today.getDate();
                    return <div key={dayNumber} className={`p-1 rounded-full ${isToday ? 'bg-[#00BFFF] text-black font-bold' : ''}`}>{dayNumber}</div>
                })}
            </div>
        </div>
    )
}

export default StickyCalendar;
