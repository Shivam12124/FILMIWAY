// components/WatchAlongTimer.js
// 🎬 FILMIWAY WATCH-ALONG COMPANION TIMER
// Redesigned to match the Filmiway unified cinematic aesthetic.

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Pause, ChevronLeft, ChevronRight, AlertTriangle, Shield, CheckCircle } from 'lucide-react';

// ─── HELPERS ────────────────────────────────────────────────────────────────
const parseTimestampToSeconds = (t) => {
    if (!t) return 0;
    const parts = String(t).split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
    if (parts.length === 2) return parts[0] * 60 + (parts[1] || 0);
    return 0;
};

const formatSeconds = (totalSec) => {
    const s = Math.max(0, Math.floor(totalSec));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

const formatSecondsShort = (totalSec) => {
    const s = Math.max(0, Math.floor(totalSec));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${String(sec).padStart(2, '0')}s`;
};

// Normalise scene: supports both {start, end} (Filmiway DB) and {timestamp, endTimestamp} (legacy)
const getSceneStart = (scene) => scene.start || scene.timestamp || '';
const getSceneEnd = (scene) => scene.end || scene.endTimestamp || '';

const getTimerState = (currentSec, scenes) => {
    if (!scenes || scenes.length === 0) return { mode: 'SAFE', scene: null, secsUntil: null, secsRemaining: null };

    for (const scene of scenes) {
        const start = parseTimestampToSeconds(getSceneStart(scene));
        const endStr = getSceneEnd(scene);
        const end = endStr ? parseTimestampToSeconds(endStr) : start + 120; // fallback 2 mins

        if (currentSec >= start && currentSec <= end) {
            return { mode: 'DURING', scene, secsUntil: 0, secsRemaining: end - currentSec };
        }
    }

    // Find next upcoming scene
    const upcoming = scenes
        .map(s => ({ ...s, startSec: parseTimestampToSeconds(getSceneStart(s)) }))
        .filter(s => s.startSec > currentSec)
        .sort((a, b) => a.startSec - b.startSec);

    if (upcoming.length === 0) return { mode: 'SAFE', scene: null, secsUntil: null, secsRemaining: null };

    const next = upcoming[0];
    const secsUntil = next.startSec - currentSec;

    if (secsUntil <= 12) return { mode: 'SKIP_NOW', scene: next, secsUntil, secsRemaining: null };
    if (secsUntil <= 60) return { mode: 'WARNING', scene: next, secsUntil, secsRemaining: null };
    return { mode: 'SAFE', scene: next, secsUntil, secsRemaining: null };
};

// ─── AUDIO ENGINE ─────────────────────────────────────────────────────────────
const createChime = (audioCtxRef, type = 'warning') => {
    try {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        
        const play = () => {
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            if (type === 'warning') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(880, ctx.currentTime);
                osc.frequency.setValueAtTime(660, ctx.currentTime + 0.15);
                gainNode.gain.setValueAtTime(0, ctx.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
                gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.35);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.4);
            } else if (type === 'skip') {
                osc.type = 'sine';
                const osc2 = ctx.createOscillator();
                osc2.type = 'sine';
                osc.frequency.setValueAtTime(2000, ctx.currentTime);
                osc2.frequency.setValueAtTime(2020, ctx.currentTime);
                osc2.connect(gainNode);
                gainNode.gain.setValueAtTime(0, ctx.currentTime);
                
                gainNode.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 0.01);
                gainNode.gain.setValueAtTime(1.0, ctx.currentTime + 0.1);
                gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12);
                
                gainNode.gain.setValueAtTime(0, ctx.currentTime + 0.15);
                gainNode.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 0.16);
                gainNode.gain.setValueAtTime(1.0, ctx.currentTime + 0.25);
                gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.27);
                
                gainNode.gain.setValueAtTime(0, ctx.currentTime + 0.3);
                gainNode.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 0.31);
                gainNode.gain.setValueAtTime(1.0, ctx.currentTime + 0.4);
                gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.42);
                
                osc.start(ctx.currentTime);
                osc2.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.5);
                osc2.stop(ctx.currentTime + 0.5);
            } else if (type === 'clear') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, ctx.currentTime);
                osc.frequency.setValueAtTime(660, ctx.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0, ctx.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.05);
                gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.55);
            }
        };

        if (ctx.state === 'suspended') {
            ctx.resume().then(play).catch(() => {});
        } else {
            play();
        }
    } catch (e) {
        console.error("FILMIWAY Audio Error:", e);
    }
};

// ─── SHATTERING SCREEN EFFECT ──────────────────────────────────────────────────
const GlassShatter = ({ secsUntil }) => {
    // Only start cracking when the progress bar is almost full (< 60s)
    if (secsUntil === null || secsUntil > 60) return null;

    return (
        <div className="absolute inset-0 pointer-events-none z-[40] mix-blend-screen opacity-70 overflow-hidden">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.4))' }}>
                <g fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="0.2">
                    {/* Phase 1: 60s - 45s */}
                    <path d="M50 50 L40 30 L55 10 L45 -10" style={{ opacity: Math.max(0, (1 - secsUntil/60)) }} />
                    <path d="M50 50 L65 40 L85 50 L110 35" style={{ opacity: Math.max(0, (1 - secsUntil/60)) }} />
                    
                    {/* Phase 2: 45s - 25s */}
                    <path d="M50 50 L30 65 L15 50 L-10 70" style={{ opacity: Math.max(0, (1 - Math.max(secsUntil - 25, 0)/20)) }} />
                    <path d="M50 50 L60 75 L45 90 L60 110" style={{ opacity: Math.max(0, (1 - Math.max(secsUntil - 25, 0)/20)) }} />
                    
                    {/* Phase 3: 25s - 10s (Spider webbing) */}
                    <path d="M40 30 L65 40 M65 40 L60 75 M60 75 L30 65 M30 65 L40 30" strokeWidth="0.05" style={{ opacity: Math.max(0, (1 - Math.max(secsUntil - 10, 0)/15)) }} />
                    <path d="M55 10 L85 50 M85 50 L45 90 M45 90 L15 50 M15 50 L55 10" strokeWidth="0.05" style={{ opacity: Math.max(0, (1 - Math.max(secsUntil - 10, 0)/15)) }} />
                    
                    {/* Phase 4: Last 10 seconds (Thick primary shatters) */}
                    {secsUntil <= 10 && (
                        <g strokeWidth="0.6" stroke="rgba(255,255,255,1)">
                            <path d="M50 50 L-10 90 M50 50 L110 10 M50 50 L10 -10 M50 50 L90 110" />
                            <path d="M15 50 L5 20 L-5 5" />
                            <path d="M85 50 L95 85 L105 95" />
                        </g>
                    )}
                </g>
            </svg>
            {/* Screen flashing during the last 5 seconds */}
            {secsUntil <= 5 && secsUntil > 0 && (
                <div className="absolute inset-0 bg-white/10 animate-pulse" style={{ animationDuration: '0.2s' }} />
            )}
        </div>
    );
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const WatchAlongTimer = ({ movie, sensitiveScenes, onClose }) => {
    const [elapsedSec, setElapsedSec] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [wasRunningBeforeInput, setWasRunningBeforeInput] = useState(false);
    const [providers, setProviders] = useState([]);

    const [showTimeInput, setShowTimeInput] = useState(false);
    const [inputH, setInputH] = useState('0');
    const [inputM, setInputM] = useState('0');
    const [inputS, setInputS] = useState('0');

    const lastTapLeft = useRef(0);
    const lastTapRight = useRef(0);
    const doubleTapFeedback = useRef(null);
    const [tapFeedback, setTapFeedback] = useState(null);

    const audioCtxRef = useRef(null);
    const audioUnlockedRef = useRef(false);
    const wakeLockRef = useRef(null);
    const lastAlertModeRef = useRef('SAFE');
    const intervalRef = useRef(null);
    const startTimeRef = useRef(null);
    const elapsedAtStartRef = useRef(0);
    const keepAliveOscRef = useRef(null);

    const alertScenes = useMemo(() => {
        if (!sensitiveScenes) return [];
        return sensitiveScenes
            .filter(s => getSceneStart(s) && getSceneStart(s).toLowerCase() !== 'none')
            .sort((a, b) => parseTimestampToSeconds(getSceneStart(a)) - parseTimestampToSeconds(getSceneStart(b)));
    }, [sensitiveScenes]);

    const timerState = useMemo(() => getTimerState(elapsedSec, alertScenes), [elapsedSec, alertScenes]);

    const acquireWakeLock = useCallback(async () => {
        if ('wakeLock' in navigator) {
            try {
                wakeLockRef.current = await navigator.wakeLock.request('screen');
            } catch (_) {}
        }
    }, []);

    const releaseWakeLock = useCallback(() => {
        if (wakeLockRef.current) {
            wakeLockRef.current.release().catch(() => { });
            wakeLockRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now();
            elapsedAtStartRef.current = elapsedSec;
            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const diffSec = Math.floor((now - startTimeRef.current) / 1000);
                setElapsedSec(elapsedAtStartRef.current + diffSec);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    // Re-acquire Wake Lock when tab becomes visible again
    useEffect(() => {
        const handleVisibilityChange = async () => {
            if (document.visibilityState === 'visible' && isRunning) {
                await acquireWakeLock();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isRunning, acquireWakeLock]);

    // Fetch Watch Providers for the compact "Where to Watch" UI
    useEffect(() => {
        if (!movie?.tmdbId) return;
        const fetchProviders = async () => {
            try {
                let country = 'US';
                try {
                    const ipRes = await fetch('https://ipinfo.io/json');
                    if (ipRes.ok) {
                        const ipData = await ipRes.json();
                        if (ipData.country) country = ipData.country;
                    }
                } catch(e) {}
                
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}/watch/providers?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`);
                if (res.ok) {
                    const data = await res.json();
                    const regionData = data.results?.[country] || data.results?.['US'];
                    if (regionData && regionData.flatrate) {
                        setProviders(regionData.flatrate.slice(0, 4));
                    }
                }
            } catch(e) {}
        };
        fetchProviders();
    }, [movie?.tmdbId]);

    useEffect(() => {
        const prev = lastAlertModeRef.current;
        const curr = timerState.mode;

        // Mode transition sounds
        if (prev !== curr) {
            if (curr === 'WARNING' && prev === 'SAFE') createChime(audioCtxRef, 'warning');
            else if (curr === 'SKIP_NOW' && prev !== 'SKIP_NOW') createChime(audioCtxRef, 'skip');
            else if (curr === 'SAFE' && (prev === 'DURING' || prev === 'SKIP_NOW')) createChime(audioCtxRef, 'clear');
            lastAlertModeRef.current = curr;
        }

        // Continuous beeping for the last 10 seconds
        if ((curr === 'WARNING' || curr === 'SKIP_NOW') && timerState.secsUntil <= 10 && timerState.secsUntil > 0) {
            createChime(audioCtxRef, 'skip');
        }

    }, [timerState.mode, timerState.secsUntil]);

    const handleStart = useCallback(() => {
        if (!audioUnlockedRef.current) {
            audioUnlockedRef.current = true;
            if (!audioCtxRef.current) {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                audioCtxRef.current = ctx;
                
                try {
                    // Silent keepalive node to keep audio stream active so browser doesn't auto-suspend
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(0);
                    keepAliveOscRef.current = osc;
                } catch(e) {}
            }
        }
        setHasStarted(true);
        setIsRunning(true);
        acquireWakeLock();
    }, [acquireWakeLock]);

    const resumeAudio = useCallback(() => {
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume().catch(() => {});
        }
    }, []);

    const handlePlayPause = useCallback(() => {
        resumeAudio();
        setIsRunning(prev => !prev);
    }, [resumeAudio]);

    const handleAdjust = useCallback((deltaSec) => {
        resumeAudio();
        setElapsedSec(prev => {
            const newSec = Math.max(0, prev + deltaSec);
            if (isRunning) {
                elapsedAtStartRef.current = newSec;
                startTimeRef.current = Date.now();
            }
            return newSec;
        });
    }, [isRunning, resumeAudio]);
    const handleClose = useCallback(() => {
        console.log('FILMIWAY: Closing Watch-Along overlay via back button');
        setIsRunning(false);
        releaseWakeLock();
        try {
            if (keepAliveOscRef.current) {
                keepAliveOscRef.current.stop();
                keepAliveOscRef.current = null;
            }
        } catch(e) {}
        if (audioCtxRef.current) {
            audioCtxRef.current.close().catch(() => { });
            audioCtxRef.current = null;
        }
        onClose();
    }, [releaseWakeLock, onClose]);

    const handleSkipScene = useCallback(() => {
        resumeAudio();
        if (timerState.scene) {
            const endStr = getSceneEnd(timerState.scene);
            if (endStr) {
                const endSecs = parseTimestampToSeconds(endStr);
                setElapsedSec(endSecs);
                if (isRunning) {
                    elapsedAtStartRef.current = endSecs;
                    startTimeRef.current = Date.now();
                }
                createChime(audioCtxRef, 'clear'); 
            }
        }
    }, [timerState.scene, isRunning, resumeAudio]);

    const openTimeInput = useCallback(() => {
        setWasRunningBeforeInput(isRunning);
        if (isRunning) {
            setIsRunning(false);
        }
        const h = Math.floor(elapsedSec / 3600);
        const m = Math.floor((elapsedSec % 3600) / 60);
        const s = elapsedSec % 60;
        setInputH(String(h));
        setInputM(String(m));
        setInputS(String(s));
        setShowTimeInput(true);
    }, [elapsedSec, isRunning]);

    const applyTimeInput = useCallback(() => {
        resumeAudio();
        const total = (parseInt(inputH, 10) || 0) * 3600 + (parseInt(inputM, 10) || 0) * 60 + (parseInt(inputS, 10) || 0);
        const newSec = Math.max(0, total);
        setElapsedSec(newSec);
        
        const shouldResume = wasRunningBeforeInput;
        if (shouldResume) {
            elapsedAtStartRef.current = newSec;
            startTimeRef.current = Date.now();
            setIsRunning(true);
        }
        setShowTimeInput(false);
    }, [inputH, inputM, inputS, wasRunningBeforeInput, resumeAudio]);

    const handleCancelTimeInput = useCallback(() => {
        resumeAudio();
        if (wasRunningBeforeInput) {
            startTimeRef.current = Date.now();
            elapsedAtStartRef.current = elapsedSec;
            setIsRunning(true);
        }
        setShowTimeInput(false);
    }, [wasRunningBeforeInput, elapsedSec, resumeAudio]);

    const handleTapLeft = useCallback(() => {
        const now = Date.now();
        if (now - lastTapLeft.current < 300) {
            handleAdjust(-10);
            setTapFeedback('left');
            clearTimeout(doubleTapFeedback.current);
            doubleTapFeedback.current = setTimeout(() => setTapFeedback(null), 700);
        }
        lastTapLeft.current = now;
    }, [handleAdjust]);

    const handleTapRight = useCallback(() => {
        const now = Date.now();
        if (now - lastTapRight.current < 300) {
            handleAdjust(10);
            setTapFeedback('right');
            clearTimeout(doubleTapFeedback.current);
            doubleTapFeedback.current = setTimeout(() => setTapFeedback(null), 700);
        }
        lastTapRight.current = now;
    }, [handleAdjust]);

    const theme = useMemo(() => {
        switch (timerState.mode) {
            case 'SKIP_NOW': return { bg: 'bg-[#1a0a0a]', border: 'border-red-500/50', text: 'text-red-500', pulse: true };
            case 'DURING': return { bg: 'bg-[#1a0a0a]', border: 'border-red-500/30', text: 'text-red-500', pulse: false };
            case 'WARNING': return { bg: 'bg-[#1a1505]', border: 'border-yellow-500/50', text: 'text-yellow-500', pulse: false };
            default: return { bg: 'bg-[#0a0a0c]', border: 'border-white/5', text: 'text-gray-200', pulse: false };
        }
    }, [timerState.mode]);

    const sceneDuration = useMemo(() => {
        if (!timerState.scene) return null;
        const start = parseTimestampToSeconds(getSceneStart(timerState.scene));
        const endStr = getSceneEnd(timerState.scene);
        const end = endStr ? parseTimestampToSeconds(endStr) : start + 120;
        return end - start;
    }, [timerState.scene]);

    const duringProgress = useMemo(() => {
        if (timerState.mode !== 'DURING' || !sceneDuration) return 0;
        const start = parseTimestampToSeconds(getSceneStart(timerState.scene));
        return Math.min(1, (elapsedSec - start) / sceneDuration);
    }, [timerState, elapsedSec, sceneDuration]);

    const globalProgress = useMemo(() => {
        if (!timerState.scene || timerState.mode === 'DURING') return 0;
        
        // Find previous scene to calculate total duration of the safe gap
        const currentSceneStart = parseTimestampToSeconds(getSceneStart(timerState.scene));
        
        // Find the most recent past scene's end time
        const pastScenes = alertScenes
            .map(s => parseTimestampToSeconds(getSceneEnd(s) || getSceneStart(s)))
            .filter(endTime => endTime <= elapsedSec)
            .sort((a, b) => b - a); // Descending

        const previousEndTime = pastScenes.length > 0 ? pastScenes[0] : 0;
        
        const totalDuration = currentSceneStart - previousEndTime;
        if (totalDuration <= 0) return 1;

        const timeSpent = elapsedSec - previousEndTime;
        return Math.min(1, Math.max(0, timeSpent / totalDuration));
    }, [timerState, elapsedSec, alertScenes]);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const runtimeStr = movie?.Runtime || movie?.runtime || 'Unknown';
    const displayRuntime = typeof runtimeStr === 'number' ? `${Math.floor(runtimeStr / 60)}h ${runtimeStr % 60}m` : runtimeStr;

    if (!mounted) return null;

    return createPortal(
        <div className={`fixed top-14 sm:top-20 left-0 right-0 h-[calc(100dvh-3.5rem)] sm:h-[calc(100dvh-5rem)] w-full z-[99998] flex flex-col font-inter overflow-hidden transition-colors duration-1000 ${theme.bg}`}>
            
            {/* CRACKED SCREEN EFFECT */}
            {hasStarted && timerState.mode !== 'DURING' && (
                <GlassShatter secsUntil={timerState.secsUntil} />
            )}

            {/* ALERT RED PULSE EFFECT */}
            {theme.pulse && (
                <div className="absolute inset-0 bg-red-500/10 animate-pulse pointer-events-none z-0" />
            )}

            {/* BORDER GLOW */}
            <div className={`absolute inset-0 border-2 ${theme.border} pointer-events-none z-10 transition-colors duration-1000`} />

            {/* DOUBLE TAP ZONES (Leaves the top header clear of gesture clicks) */}
            <div onClick={handleTapLeft} className="absolute left-0 top-32 bottom-0 w-1/3 z-20 cursor-pointer flex items-center justify-center">
                {tapFeedback === 'left' && (
                    <div className="bg-white/10 backdrop-blur-md rounded-full w-20 h-20 flex flex-col items-center justify-center text-white/80 animate-pulse">
                        <ChevronLeft size={24} />
                        <span className="text-xs font-bold">-10s</span>
                    </div>
                )}
            </div>
            <div onClick={handleTapRight} className="absolute right-0 top-32 bottom-0 w-1/3 z-20 cursor-pointer flex items-center justify-center">
                {tapFeedback === 'right' && (
                    <div className="bg-white/10 backdrop-blur-md rounded-full w-20 h-20 flex flex-col items-center justify-center text-white/80 animate-pulse">
                        <ChevronRight size={24} />
                        <span className="text-xs font-bold">+10s</span>
                    </div>
                )}
            </div>

            {/* HEADER */}
            <div className="relative z-50 flex items-center px-4 sm:px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-md w-full">
                <button
                    onClick={handleClose}
                    className="flex items-center justify-center p-2 -ml-2 text-white/80 hover:text-white transition-colors mr-2 sm:mr-4 shrink-0 cursor-pointer pointer-events-auto z-[99999]"
                    title="Go Back"
                >
                    <ChevronLeft size={32} strokeWidth={2.5} />
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                        <Play size={14} className="text-yellow-500" />
                    </div>
                    <div className="text-left">
                        <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-bold">Watch-Along</div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-200 max-w-[200px] sm:max-w-[250px] truncate">{movie?.Title || 'Movie'}</div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 relative z-30 flex flex-col items-center justify-center px-4 py-4 overflow-y-auto overflow-x-hidden">
                {!hasStarted ? (
                    <div className="flex flex-col items-center text-center w-full max-w-sm my-auto py-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4 shadow-xl">
                            <AlertTriangle size={24} className="text-yellow-500" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-light text-white mb-2">Ready to Watch?</h2>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 px-2">
                            Press START TIMER the moment your movie begins playing on your TV or any other screen. We'll alert you 12 seconds before every sensitive scene.
                        </p>

                        <div className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-3 sm:p-5 mb-4 sm:mb-6 text-left space-y-2.5 shadow-lg">
                            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                                <Pause size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>Pause this timer when you pause the movie.</span>
                            </div>
                        </div>

                        {/* COMPACT WHERE TO WATCH */}
                        {providers.length > 0 ? (
                            <div className="flex flex-col items-center mb-6 sm:mb-8 w-full">
                                <span className="text-[9px] sm:text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-3 sm:mb-4">Available to stream on</span>
                                <div className="flex items-start justify-center gap-4 sm:gap-6 flex-wrap">
                                    {providers.map(p => (
                                        <div key={p.provider_id} className="flex flex-col items-center gap-2 w-[70px] sm:w-[85px]" title={p.provider_name}>
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 shrink-0">
                                                <img src={`https://image.tmdb.org/t/p/w45${p.logo_path}`} alt={p.provider_name} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-[10px] sm:text-[12px] text-gray-300 font-medium text-center leading-[1.2] line-clamp-2 w-full">{p.provider_name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center mb-6 sm:mb-8 w-full px-4 text-center">
                                <span className="text-[9px] sm:text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-2">Streaming Availability</span>
                                <p className="text-gray-400 text-xs max-w-[280px] leading-relaxed">
                                    Not streaming in your region. You can still play your own copy of the movie and watch along!
                                </p>
                            </div>
                        )}

                        <button
                            onClick={handleStart}
                            className="w-full px-10 py-4 sm:py-5 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-2xl shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all flex items-center justify-center gap-3 text-lg sm:text-xl uppercase tracking-wider"
                        >
                            <Play size={22} className="fill-black" /> Start Timer
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full max-w-md">
                        
                        {/* STATUS BADGE */}
                        <div className={`mb-8 px-4 py-1.5 rounded-full border bg-black/40 backdrop-blur-md text-[11px] font-bold uppercase tracking-widest ${theme.border} ${theme.text}`}>
                            {timerState.mode === 'SAFE' && '● SAFE TO WATCH'}
                            {timerState.mode === 'WARNING' && '◆ PREPARE TO SKIP'}
                            {timerState.mode === 'SKIP_NOW' && '■ SKIP NOW'}
                            {timerState.mode === 'DURING' && '■ SCENE IN PROGRESS'}
                        </div>

                        {/* DIGITAL CLOCK */}
                        <button
                            onClick={openTimeInput}
                            className={`text-6xl sm:text-7xl lg:text-8xl font-black tabular-nums tracking-tight ${theme.text} transition-colors duration-1000 hover:opacity-80 cursor-pointer`}
                            style={{ textShadow: `0 0 30px ${theme.text}40` }}
                        >
                            {formatSeconds(elapsedSec)}
                        </button>
                        <div className="text-[10px] text-gray-500 tracking-[0.2em] mt-3">TAP CLOCK TO EDIT TIME</div>

                        {/* NEXT SCENE ALERTS */}
                        <div className="h-24 mt-6 flex flex-col items-center justify-center w-full">
                            {timerState.scene && timerState.mode !== 'DURING' && (
                                <div className="flex flex-col items-center">
                                    <div className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300 text-xs font-semibold mb-2 flex items-center gap-2">
                                        <Shield size={12} className="text-yellow-500" />
                                        <span>{timerState.scene.type || 'Sensitive Scene'}</span>
                                        {timerState.scene.severity && (
                                            <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider ${
                                                timerState.scene.severity.toLowerCase() === 'high' || timerState.scene.severity.toLowerCase() === 'severe'
                                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                    : timerState.scene.severity.toLowerCase() === 'moderate'
                                                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                            }`}>
                                                {timerState.scene.severity}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-400 mb-3">
                                        at <strong className="text-white font-medium">{getSceneStart(timerState.scene)}</strong>
                                        {timerState.secsUntil > 0 && (
                                            <span> · in <strong className={theme.text}>{formatSecondsShort(timerState.secsUntil)}</strong></span>
                                        )}
                                    </div>
                                    
                                    {/* APPROACHING PROGRESS BAR (Always Visible) */}
                                    {timerState.secsUntil !== null && (
                                        <div className="w-full max-w-[240px] flex flex-col items-center mt-2 z-50 relative">
                                            <div className="w-full h-2 bg-black/50 border border-white/10 rounded-full overflow-hidden shadow-inner">
                                                <div 
                                                    className={`h-full transition-all duration-1000 linear ${timerState.secsUntil <= 15 ? 'bg-red-500 shadow-[0_0_10px_red]' : timerState.secsUntil <= 60 ? 'bg-yellow-500 shadow-[0_0_10px_yellow]' : 'bg-emerald-500'}`}
                                                    style={{ width: `${globalProgress * 100}%` }}
                                                />
                                            </div>
                                            <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1.5 font-bold">
                                                {timerState.secsUntil > 60 ? 'Safe Zone' : timerState.secsUntil <= 15 ? 'Skip Now' : 'Approaching'}
                                            </div>
                                        </div>
                                    )}
                                    {/* SKIP SCENE BUTTON */}
                                    {timerState.secsUntil !== null && timerState.secsUntil <= 20 && (
                                        <button
                                            onClick={handleSkipScene}
                                            className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-400 text-black font-bold uppercase tracking-wider text-xs rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all animate-pulse"
                                        >
                                            Skip Scene Now
                                        </button>
                                    )}
                                </div>
                            )}

                            {timerState.mode === 'DURING' && timerState.scene && (
                                <div className="w-full max-w-xs flex flex-col items-center">
                                    <div className="w-full flex justify-between items-center text-xs font-bold text-red-500 mb-2 uppercase tracking-wide">
                                        <div className="flex items-center gap-2">
                                            <span>{timerState.scene.type}</span>
                                            {timerState.scene.severity && (
                                                <span className={`px-1.5 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider ${
                                                    timerState.scene.severity.toLowerCase() === 'high' || timerState.scene.severity.toLowerCase() === 'severe'
                                                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                        : timerState.scene.severity.toLowerCase() === 'moderate'
                                                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                                }`}>
                                                    {timerState.scene.severity}
                                                </span>
                                            )}
                                        </div>
                                        <span>{formatSecondsShort(timerState.secsRemaining || 0)} left</span>
                                    </div>
                                    <div className="w-full h-2 bg-red-950 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-red-500 transition-all duration-1000 linear"
                                            style={{ width: `${duringProgress * 100}%` }}
                                        />
                                    </div>
                                    <div className="text-xs text-gray-400 mt-3">
                                        Safe to resume at <strong className="text-white">{getSceneEnd(timerState.scene) || '—'}</strong>
                                    </div>
                                    
                                    <button
                                        onClick={handleSkipScene}
                                        className="mt-4 px-6 py-2 bg-red-500/20 border border-red-500/50 hover:bg-red-500 hover:text-black text-red-400 font-bold uppercase tracking-wider text-xs rounded-full transition-all"
                                    >
                                        Skip to End
                                    </button>
                                </div>
                            )}

                            {timerState.mode === 'SAFE' && !timerState.scene && (
                                <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium">
                                    <CheckCircle size={16} /> No more scenes to skip
                                </div>
                            )}
                        </div>

                        {/* SYNC CONTROLS */}
                        <div className="mt-12 flex items-center gap-3 sm:gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-2 sm:p-3 shadow-xl">
                            <button onClick={() => handleAdjust(-60)} className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 flex items-center justify-center text-xs font-bold transition-colors">-1m</button>
                            <button onClick={() => handleAdjust(-10)} className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 flex items-center justify-center text-xs font-bold transition-colors">-10s</button>
                            
                            <button
                                onClick={handlePlayPause}
                                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${isRunning ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500/30' : 'bg-yellow-500 text-black hover:bg-yellow-400'}`}
                            >
                                {isRunning ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                            </button>

                            <button onClick={() => handleAdjust(10)} className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 flex items-center justify-center text-xs font-bold transition-colors">+10s</button>
                            <button onClick={() => handleAdjust(60)} className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 flex items-center justify-center text-xs font-bold transition-colors">+1m</button>
                        </div>
                        <div className="text-[12px] sm:text-[14px] text-gray-400 font-semibold tracking-wider mt-4 uppercase">RUNTIME: {displayRuntime}</div>

                    </div>
                )}
            </div>

            {/* TIME INPUT MODAL */}
            {showTimeInput && (
                <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center px-4">
                    <div className="bg-[#111113] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center w-full max-w-sm shadow-2xl">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Set Movie Time</div>
                        
                        <div className="flex items-center gap-4 mb-8">
                            {[
                                { label: 'HH', value: inputH, set: setInputH, max: 4 },
                                { label: 'MM', value: inputM, set: setInputM, max: 59 },
                                { label: 'SS', value: inputS, set: setInputS, max: 59 },
                            ].map((field, idx) => (
                                <React.Fragment key={field.label}>
                                    <div className="flex flex-col items-center gap-2">
                                        <input
                                            type="number" min={0} max={field.max} value={field.value} onChange={e => field.set(e.target.value)}
                                            className="w-16 h-16 bg-black border border-white/10 rounded-xl text-center text-2xl font-bold text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                        />
                                        <span className="text-[10px] text-gray-500 font-bold">{field.label}</span>
                                    </div>
                                    {idx < 2 && <div className="text-2xl font-black text-gray-600 mb-6">:</div>}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="flex gap-3 w-full">
                            <button onClick={handleCancelTimeInput} className="flex-1 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors">
                                Cancel
                            </button>
                            <button onClick={applyTimeInput} className="flex-1 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm transition-colors">
                                Set Time
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>,
        document.body
    );
};

export default WatchAlongTimer;
