// components/EnhancedWhereToWatchSection.js - PROFESSIONAL AUTO-DETECT VERSION
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Globe, ExternalLink, Loader, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

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

// Auto-detect user's country using ipinfo
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

// TMDB streaming data fetcher
async function getAllRegionStreamingData(tmdbId, title) {
    const apiKey = '6054e5498fb2619274454959c38bbdfa';
    const streamingData = {};
    
    console.log(`🎬 Fetching streaming data for TMDB ID: ${tmdbId}`);
    
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`TMDB API failed: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📡 TMDB Response:', data);
        
        const results = data.results || {};
        
        // Process each region we're interested in
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
                // Step 1: Auto-detect user's country
                const detectedCountry = await detectUserCountry();
                setUserCountry(detectedCountry);
                
                // Step 2: Fetch streaming data for all regions
                const data = await getAllRegionStreamingData(movie.tmdbId, movie.Title);
                setStreamingData(data);
                
                // Step 3: Auto-select user's region if available, or first available region
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
            } catch (error) {
                console.error('❌ Error fetching streaming data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, [movie?.tmdbId, movie?.Title, mounted]);

    if (!mounted) {
        return (
            <motion.section className="mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <div className="flex items-center justify-center">
                        <Loader className="w-4 h-4 animate-spin text-yellow-400" />
                        <span className="ml-2 text-gray-300 text-sm">Loading streaming options...</span>
                    </div>
                </div>
            </motion.section>
        );
    }

    const currentRegionData = streamingData[selectedRegion];
    const availableRegions = Object.keys(streamingData);
    const otherRegions = availableRegions.filter(code => code !== selectedRegion);
    
    // Get region info for display
    const selectedRegionInfo = TOP_REGIONS.find(r => r.code === selectedRegion);
    const userCountryInfo = TOP_REGIONS.find(r => r.code === userCountry);

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
                className={`group relative p-3 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2 min-w-[100px] ${
                    type === 'flatrate' 
                        ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20' 
                        : type === 'rent'
                        ? 'bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20'
                        : 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
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
                    <div className="text-xs font-medium text-gray-200 truncate max-w-[80px]">
                        {provider.provider_name}
                    </div>
                    <div className={`text-xs opacity-75 ${
                        type === 'flatrate' ? 'text-green-400' : 
                        type === 'rent' ? 'text-yellow-400' : 'text-blue-400'
                    }`}>
                        {type === 'flatrate' ? 'Stream' : type === 'rent' ? 'Rent' : 'Buy'}
                    </div>
                </div>
                
                <ExternalLink className="absolute top-1 right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
            </motion.button>
        );
    };

    return (
        <motion.section 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                <Play size={14} className="sm:w-4 sm:h-4" />
                🌍 Where to Watch
            </h3>
            
            {isLoading ? (
                <div className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <div className="flex items-center justify-center space-y-4">
                        <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                            className="w-8 h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="text-gray-300 font-medium">Detecting your location and streaming options...</p>
                            <p className="text-gray-400 text-sm">
                                Checking availability for {movie?.Title || 'this movie'}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-4 sm:space-y-6">
                    {/* Current Region Display */}
                    {selectedRegionInfo && (
                        <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{selectedRegionInfo.flag}</span>
                                <div>
                                    <div className="text-white font-medium">
                                        Showing availability in {selectedRegionInfo.name}
                                    </div>
                                    {selectedRegion === userCountry ? (
                                        <div className="text-green-400 text-sm flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            Auto-detected from your location
                                        </div>
                                    ) : (
                                        <div className="text-yellow-400 text-sm">
                                            No availability in {userCountryInfo?.name || userCountry}
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Other Regions Toggle */}
                            {otherRegions.length > 0 && (
                                <motion.button
                                    onClick={() => setShowOtherRegions(!showOtherRegions)}
                                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg text-sm text-gray-300 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Other regions ({otherRegions.length})</span>
                                    {showOtherRegions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </motion.button>
                            )}
                        </div>
                    )}

                    {/* Other Regions Selector */}
                    <AnimatePresence>
                        {showOtherRegions && otherRegions.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
                                    <h4 className="text-sm font-medium text-gray-300 mb-3">
                                        Also available in:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
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
                                                    className="px-3 py-2 rounded-lg border bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50 text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
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

                    {/* Streaming Content for Selected Region */}
                    <AnimatePresence mode="wait">
                        {currentRegionData ? (
                            <motion.div
                                key={selectedRegion}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {/* Streaming Services */}
                                {currentRegionData.flatrate?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-medium text-green-300 mb-3 flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                            Stream with Subscription
                                        </h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
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

                                {/* Rental Options */}
                                {currentRegionData.rent?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-medium text-yellow-300 mb-3 flex items-center gap-2">
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            Rent Digital Copy
                                        </h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
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

                                {/* Purchase Options */}
                                {currentRegionData.buy?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-medium text-blue-300 mb-3 flex items-center gap-2">
                                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                            Buy Digital Copy
                                        </h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
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

                                {/* No availability message */}
                                {(!currentRegionData.flatrate?.length && !currentRegionData.rent?.length && !currentRegionData.buy?.length) && (
                                    <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                        <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-gray-400 text-sm">
                                            No streaming options found for {selectedRegionInfo?.name || selectedRegion}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ) : availableRegions.length === 0 ? (
                            <div className="text-center p-6 bg-orange-800/20 rounded-lg border border-orange-500/50">
                                <Globe className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                                <h4 className="text-lg font-medium text-orange-300 mb-2">
                                    Limited Streaming Data
                                </h4>
                                <p className="text-orange-200/90 text-sm mb-4">
                                    <strong>{movie?.Title}</strong> may have limited streaming availability
                                </p>
                                <motion.button
                                    onClick={() => window.open(`https://www.justwatch.com/search?q=${encodeURIComponent(movie?.Title || '')}`, '_blank')}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <ExternalLink size={14} />
                                    Search on JustWatch
                                </motion.button>
                            </div>
                        ) : null}
                    </AnimatePresence>

                    {/* Footer Note */}
                    <div className="text-center pt-2">
                        <p className="text-gray-500 text-xs">
                            Streaming availability powered by{' '}
                            <span className="text-blue-400 font-medium">TMDB</span> • Auto-detected location via iPinfo
                        </p>
                    </div>
                </div>
            )}
        </motion.section>
    );
});

EnhancedWhereToWatchSection.displayName = 'EnhancedWhereToWatchSection';

export default EnhancedWhereToWatchSection;
