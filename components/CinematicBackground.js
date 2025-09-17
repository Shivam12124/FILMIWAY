// components/CinematicBackground.js
import React from 'react';

const CinematicBackground = React.memo(() => (
    <div 
        className="fixed inset-0 pointer-events-none z-0" 
        suppressHydrationWarning={true}
    >
        <div 
            className="absolute inset-0 bg-black" 
            suppressHydrationWarning={true} 
        />
        <div 
            className="absolute inset-0 opacity-[0.006]" 
            suppressHydrationWarning={true}
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, 
                backgroundSize: '600px 600px' 
            }} 
        />
        <div 
            className="absolute inset-0" 
            suppressHydrationWarning={true}
            style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.5) 100%)' }} 
        />
    </div>
));

CinematicBackground.displayName = 'CinematicBackground';

export default CinematicBackground;
