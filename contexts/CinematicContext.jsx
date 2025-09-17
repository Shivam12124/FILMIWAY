// src/context/CinematicContext.jsx
'use client'; // This is a Client Component because it uses hooks

import React, { createContext, useState, useEffect } from 'react';

// 1. Create the Context
export const CinematicContext = createContext(null);

// 2. Create the Provider Component
export const CinematicProvider = ({ children }) => {
    // All your shared state will live here
    const [watchlist, setWatchlist] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [userCountry, setUserCountry] = useState('IN'); // Default to India
    const [userRatings, setUserRatings] = useState({});

    // Placeholder for sound effects
    const playSound = (sound) => {
        console.log(`Playing sound: ${sound}`);
        // You can add actual audio logic here later
    };

    // This object holds all the values you want to share across your app
    const value = {
        watchlist,
        setWatchlist,
        playSound,
        movieDetails, 
        setMovieDetails, // Add setMovieDetails if you plan to update it
        userCountry,
        setUserCountry,
        userRatings,
        setUserRatings
    };

    return (
        <CinematicContext.Provider value={value}>
            {children}
        </CinematicContext.Provider>
    );
};