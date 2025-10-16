// components/EnhancedWhereToWatchSection.js - ALL SAME YELLOW COLOR ✅
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Globe, ExternalLink, Loader, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

// 🎨 UNIFIED COLOR SYSTEM
const COLORS = {
  accent: '#EAB308',
  accentHover: '#FACC15',
  bgPrimary: '#0B0B0C',
  bgCard: 'rgba(55, 65, 81, 0.3)',
  bgCardHover: 'rgba(55, 65, 81, 0.5)',
  textPrimary: '#FFFFFF',
  textSecondary: '#D1D5DB',
  textMuted: '#9CA3AF',
  textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.2)',
  borderAccentHover: 'rgba(234, 179, 8, 0.4)',
  borderNeutral: 'rgba(107, 114, 128, 0.5)',
  borderLight: 'rgba(107, 114, 128, 0.2)',
};

const TOP_REGIONS = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' }
];

async function detectUserCountry() {
    try {
        const response = await fetch('https://ipinfo.io/json');
        if (response.ok) {
            const data = await response.json();
            const country = data.country?.toUpperCase();
            console.log('🌍 Auto-detected user country:', country);
            return country || 'US';
        }
    } catch (e) {
        console.log('❌ Location detection failed, defaulting to US');
    }
    return 'US';
}

async function getAllRegionStreamingData(tmdbId, title) {
    const apiKey = '6054e5498fb2619274454959c38bbdfa';
    const streamingData = {};
    
    console.log(`🎬 Fetching streaming data for TMDB ID: ${tmdbId}`);
    
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${apiKey}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                console.warn(`⚠️ Movie not found in TMDB: ${tmdbId} (${title})`);
                return {};
            }
            throw new Error(`TMDB API failed: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📡 TMDB Response:', data);
        
        const results = data.results || {};
        
        TOP_REGIONS.forEach(region => {
            const regionData = results[region.code];
            if (regionData) {
                streamingData[region.code] = {
                    ...regionData,
                    region: region
                };
                console.log(`✅ Found data for ${region.name}:`, regionData);
            }
        });
        
        return streamingData;
    } catch (error) {
        console.error('❌ Error fetching TMDB data:', error);
        return {};
    }
}

function getDeepLink(providerId, region, title, tmdbId) {
    return `https://www.themoviedb.org/movie/${tmdbId}/watch?locale=${region}`;
}

const EnhancedWhereToWatchSection = React.memo(({ movie }) => {
    const [streamingData, setStreamingData] = useState({});
    const [userCountry, setUserCountry] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showOtherRegions, setShowOtherRegions] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !movie?.tmdbId) return;
        
        const fetchData = async () => {
            setIsLoading(true);
            console.log(`🎬 Loading streaming data for ${movie.Title}`);
            
            try {
                const detectedCountry = await detectUserCountry();
                setUserCountry(detectedCountry);
                
                const data = await getAllRegionStreamingData(movie.tmdbId, movie.Title);
                
                if (data && Object.keys(data).length > 0) {
                    setStreamingData(data);
                    
                    if (data[detectedCountry]) {
                        setSelectedRegion(detectedCountry);
                        console.log(`✅ Using user's country: ${detectedCountry}`);
                    } else {
                        const availableRegions = Object.keys(data);
                        if (availableRegions.length > 0) {
                            setSelectedRegion(availableRegions[0]);
                            console.log(`⚠️ No data for ${detectedCountry}, using: ${availableRegions[0]}`);
                        }
                    }
                    console.log('✅ Complete streaming data:', data);
                } else {
                    console.warn('⚠️ No streaming data available for this movie');
                    setStreamingData({});
                }
            } catch (error) {
                console.error('❌ Error fetching streaming data:', error);
                setStreamingData({});
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, [movie?.tmdbId, movie?.Title, mounted]);

    if (!mounted) {
        return (
            <motion.section className="mb-12" style={{ marginTop: '48px' }}>
                <div className="p-6 rounded-2xl border" 
                     style={{ 
                       backgroundColor: COLORS.bgCard,
                       borderColor: COLORS.borderNeutral
                     }}>
                    <div className="flex items-center justify-center">
                        <Loader className="w-5 h-5 animate-spin" style={{ color: COLORS.accent }} />
                        <span className="ml-3" style={{ color: COLORS.textSecondary, fontSize: '14px' }}>
                            Loading streaming options...
                        </span>
                    </div>
                </div>
            </motion.section>
        );
    }

    const currentRegionData = streamingData[selectedRegion];
    const availableRegions = Object.keys(streamingData);
    const otherRegions = availableRegions.filter(code => code !== selectedRegion);
    
    const selectedRegionInfo = TOP_REGIONS.find(r => r.code === selectedRegion);
    const userCountryInfo = TOP_REGIONS.find(r => r.code === userCountry);

    // 🔥 UNIFIED STREAMING PLATFORM CARD - ALL SAME YELLOW
    const StreamingPlatformCard = ({ provider, type, region }) => {
        const logoUrl = provider.logo_path ? `https://image.tmdb.org/t/p/w45${provider.logo_path}` : null;
        const deepLink = getDeepLink(provider.provider_id, region, movie.Title, movie.tmdbId);
        
        const handleClick = () => {
            console.log(`🔗 Opening ${provider.provider_name} for ${movie.Title} in ${region}`);
            window.open(deepLink, '_blank', 'noopener,noreferrer');
        };

        return (
            <motion.button
                onClick={handleClick}
                className="group relative p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-3 min-w-[100px]"
                style={{
                    backgroundColor: `${COLORS.accent}0D`, // Yellow/5% for ALL
                    borderColor: COLORS.borderAccent        // Yellow border for ALL
                }}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${COLORS.accent}1A`; // Yellow/10% on hover
                    e.currentTarget.style.borderColor = COLORS.borderAccentHover;
                    e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.accent}33`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${COLORS.accent}0D`;
                    e.currentTarget.style.borderColor = COLORS.borderAccent;
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                {logoUrl && (
                    <img
                        src={logoUrl}
                        alt={provider.provider_name}
                        className="w-12 h-12 object-contain rounded-lg"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                )}
                
                <div className="text-center">
                    <div className="text-xs font-medium truncate max-w-[80px]"
                         style={{ color: COLORS.textSecondary }}>
                        {provider.provider_name}
                    </div>
                    <div className="text-xs" style={{ color: COLORS.accent }}>
                        {type === 'flatrate' ? 'Stream' : type === 'rent' ? 'Rent' : 'Buy'}
                    </div>
                </div>
                
                <ExternalLink className="absolute top-2 right-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" 
                             style={{ color: COLORS.textMuted }} />
            </motion.button>
        );
    };

    return (
        <motion.section 
            className="mb-12"
            style={{ marginTop: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <h2 className="text-2xl font-medium mb-6 flex items-center gap-3"
                style={{ color: COLORS.accent, fontSize: '22px' }}>
                <Play size={20} />
                Where to Watch
            </h2>
            
            {isLoading ? (
                <div className="p-8 rounded-2xl border" 
                     style={{ 
                       backgroundColor: COLORS.bgCard,
                       borderColor: COLORS.borderNeutral
                     }}>
                    <div className="flex items-center justify-center gap-4">
                        <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                            className="w-8 h-8 rounded-full"
                            style={{ 
                              border: `2px solid ${COLORS.accent}4D`,
                              borderTopColor: COLORS.accent
                            }}
                        />
                        <div>
                            <p style={{ color: COLORS.textSecondary, fontWeight: '500', fontSize: '16px' }}>
                                Detecting your location and streaming options...
                            </p>
                            <p style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                                Checking availability for {movie?.Title || 'this movie'}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-6">
                    {selectedRegionInfo && availableRegions.length > 0 && (
                        <div className="flex items-center justify-between p-6 rounded-2xl border" 
                             style={{ 
                               backgroundColor: COLORS.bgCard,
                               borderColor: COLORS.borderNeutral
                             }}>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl">{selectedRegionInfo.flag}</span>
                                <div>
                                    <div style={{ color: COLORS.textPrimary, fontWeight: '500', fontSize: '16px' }}>
                                        Showing availability in {selectedRegionInfo.name}
                                    </div>
                                    {selectedRegion === userCountry ? (
                                        <div className="flex items-center gap-2 mt-1" 
                                             style={{ color: '#22C55E', fontSize: '14px' }}>
                                            <div className="w-2 h-2 rounded-full" 
                                                 style={{ backgroundColor: '#22C55E' }}></div>
                                            Auto-detected from your location
                                        </div>
                                    ) : (
                                        <div style={{ color: COLORS.accent, fontSize: '14px', marginTop: '4px' }}>
                                            No availability in {userCountryInfo?.name || userCountry}
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {otherRegions.length > 0 && (
                                <motion.button
                                    onClick={() => setShowOtherRegions(!showOtherRegions)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-300"
                                    style={{
                                        backgroundColor: COLORS.bgCardHover,
                                        color: COLORS.textSecondary,
                                        border: `1px solid ${COLORS.borderLight}`
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = COLORS.borderAccent;
                                        e.currentTarget.style.color = COLORS.accent;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = COLORS.borderLight;
                                        e.currentTarget.style.color = COLORS.textSecondary;
                                    }}
                                >
                                    <span>Other regions ({otherRegions.length})</span>
                                    {showOtherRegions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </motion.button>
                            )}
                        </div>
                    )}

                    <AnimatePresence>
                        {showOtherRegions && otherRegions.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 rounded-2xl border" 
                                     style={{ 
                                       backgroundColor: `${COLORS.bgCard}66`,
                                       borderColor: COLORS.borderLight
                                     }}>
                                    <h4 className="text-sm font-medium mb-4" 
                                        style={{ color: COLORS.textSecondary }}>
                                        Also available in:
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {otherRegions.map((regionCode) => {
                                            const region = TOP_REGIONS.find(r => r.code === regionCode);
                                            if (!region) return null;
                                            
                                            return (
                                                <motion.button
                                                    key={regionCode}
                                                    onClick={() => {
                                                        setSelectedRegion(regionCode);
                                                        setShowOtherRegions(false);
                                                    }}
                                                    className="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                                    style={{
                                                        backgroundColor: COLORS.bgCardHover,
                                                        borderColor: COLORS.borderNeutral,
                                                        color: COLORS.textSecondary
                                                    }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.borderColor = COLORS.borderAccent;
                                                        e.currentTarget.style.backgroundColor = `${COLORS.accent}1A`;
                                                        e.currentTarget.style.color = COLORS.accent;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.borderColor = COLORS.borderNeutral;
                                                        e.currentTarget.style.backgroundColor = COLORS.bgCardHover;
                                                        e.currentTarget.style.color = COLORS.textSecondary;
                                                    }}
                                                >
                                                    <span className="text-lg">{region.flag}</span>
                                                    <span>{region.name}</span>
                                                </motion.button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {currentRegionData ? (
                            <motion.div
                                key={selectedRegion}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {/* 🔥 ALL SECTIONS USE SAME YELLOW COLOR */}
                                {currentRegionData.flatrate?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-medium mb-4 flex items-center gap-2" 
                                            style={{ color: COLORS.accent }}>
                                            <div className="w-3 h-3 rounded-full" 
                                                 style={{ backgroundColor: COLORS.accent }}></div>
                                            Stream with Subscription
                                        </h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                            {currentRegionData.flatrate.map((provider) => (
                                                <StreamingPlatformCard
                                                    key={`${selectedRegion}-flatrate-${provider.provider_id}`}
                                                    provider={provider}
                                                    type="flatrate"
                                                    region={selectedRegion}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {currentRegionData.rent?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-medium mb-4 flex items-center gap-2" 
                                            style={{ color: COLORS.accent }}>
                                            <div className="w-3 h-3 rounded-full" 
                                                 style={{ backgroundColor: COLORS.accent }}></div>
                                            Rent Digital Copy
                                        </h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                            {currentRegionData.rent.map((provider) => (
                                                <StreamingPlatformCard
                                                    key={`${selectedRegion}-rent-${provider.provider_id}`}
                                                    provider={provider}
                                                    type="rent"
                                                    region={selectedRegion}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {currentRegionData.buy?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-medium mb-4 flex items-center gap-2" 
                                            style={{ color: COLORS.accent }}>
                                            <div className="w-3 h-3 rounded-full" 
                                                 style={{ backgroundColor: COLORS.accent }}></div>
                                            Buy Digital Copy
                                        </h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                            {currentRegionData.buy.map((provider) => (
                                                <StreamingPlatformCard
                                                    key={`${selectedRegion}-buy-${provider.provider_id}`}
                                                    provider={provider}
                                                    type="buy"
                                                    region={selectedRegion}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {(!currentRegionData.flatrate?.length && !currentRegionData.rent?.length && !currentRegionData.buy?.length) && (
                                    <div className="text-center p-6 rounded-2xl border" 
                                         style={{ 
                                           backgroundColor: COLORS.bgCard,
                                           borderColor: COLORS.borderLight
                                         }}>
                                        <MapPin className="w-8 h-8 mx-auto mb-3" 
                                               style={{ color: COLORS.textMuted }} />
                                        <p style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                                            No streaming options found for {selectedRegionInfo?.name || selectedRegion}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ) : availableRegions.length === 0 ? (
                            <div className="text-center p-8 rounded-2xl border" 
                                 style={{ 
                                   backgroundColor: 'rgba(234, 88, 12, 0.1)',
                                   borderColor: 'rgba(234, 88, 12, 0.5)'
                                 }}>
                                <Globe className="w-12 h-12 mx-auto mb-4" 
                                      style={{ color: '#EA580C' }} />
                                <h4 className="text-lg font-medium mb-2" 
                                    style={{ color: '#FB923C' }}>
                                    Limited Streaming Data
                                </h4>
                                <p className="mb-4" 
                                   style={{ 
                                     color: 'rgba(251, 146, 60, 0.9)', 
                                     fontSize: '14px',
                                     lineHeight: '1.6'
                                   }}>
                                    <strong>{movie?.Title}</strong> may have limited streaming availability
                                </p>
                                <motion.button
                                    onClick={() => window.open(`https://www.justwatch.com/search?q=${encodeURIComponent(movie?.Title || '')}`, '_blank')}
                                    className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                                    style={{ 
                                      backgroundColor: '#EA580C',
                                      color: '#FFFFFF'
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EA580C'}
                                >
                                    <ExternalLink size={14} />
                                    Search on JustWatch
                                </motion.button>
                            </div>
                        ) : null}
                    </AnimatePresence>

                    <div className="text-center pt-4">
                        <p style={{ color: COLORS.textDisabled, fontSize: '12px' }}>
                            Streaming availability powered by{' '}
                            <span style={{ color: '#3B82F6', fontWeight: '500' }}>TMDB</span> • Auto-detected location via iPinfo
                        </p>
                    </div>
                </div>
            )}
        </motion.section>
    );
});

EnhancedWhereToWatchSection.displayName = 'EnhancedWhereToWatchSection';

export default EnhancedWhereToWatchSection;
