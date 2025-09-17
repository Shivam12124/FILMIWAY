// components/EnhancedWhereToWatchSection.js - YELLOW/BLACK ONLY
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MapPin, Loader, Globe, Tv, DollarSign, Info } from 'lucide-react';
import { detectUserRegion, getRegionStreamingProviders } from '../utils/streamingService';

const EnhancedWhereToWatchSection = React.memo(({ movie }) => {
    const [userRegion, setUserRegion] = useState(null);
    const [streamingData, setStreamingData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!movie?.tmdbId) return;
        
        const initializeStreaming = async () => {
            setIsLoading(true);
            
            try {
                const region = await detectUserRegion();
                setUserRegion(region);
                
                if (region.code) {
                    const providers = await getRegionStreamingProviders(movie.tmdbId, region.code);
                    setStreamingData(providers);
                }
                
            } catch (error) {
                console.error('Error loading streaming data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        initializeStreaming();
    }, [movie?.tmdbId]);

    const StreamingPlatform = ({ provider, type }) => {
        const getTypeInfo = () => {
            switch(type) {
                case 'flatrate':
                    return { 
                        label: 'Stream', 
                        icon: Tv, 
                        color: 'text-yellow-400', 
                        bg: 'bg-yellow-400/10 border-yellow-400/20' 
                    };
                case 'rent':
                case 'buy':
                    return { 
                        label: type === 'rent' ? 'Rent' : 'Buy', 
                        icon: DollarSign, 
                        color: 'text-white', 
                        bg: 'bg-gray-400/10 border-gray-400/20' 
                    };
                default:
                    return { 
                        label: 'Available', 
                        icon: Play, 
                        color: 'text-gray-400', 
                        bg: 'bg-gray-400/10 border-gray-400/20' 
                    };
            }
        };

        const typeInfo = getTypeInfo();
        const TypeIcon = typeInfo.icon;
        const logoUrl = provider.logo_path ? `https://image.tmdb.org/t/p/w92${provider.logo_path}` : null;

        return (
            <motion.div
                className={`relative p-4 rounded-xl border ${typeInfo.bg} backdrop-blur-sm cursor-default hover:scale-105 transition-transform`}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        {logoUrl ? (
                            <img
                                src={logoUrl}
                                alt={provider.provider_name}
                                className="max-w-full max-h-full object-contain rounded-lg"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div 
                            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center"
                            style={{ display: logoUrl ? 'none' : 'flex' }}
                        >
                            <TypeIcon className="w-6 h-6 text-gray-400" />
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="font-medium text-white text-sm leading-tight">
                            {provider.provider_name}
                        </div>
                        <div className={`text-xs font-medium ${typeInfo.color} mt-1`}>
                            {typeInfo.label}
                        </div>
                    </div>
                </div>
                
                <Info className="absolute top-2 right-2 w-3 h-3 text-gray-500 opacity-50" />
            </motion.div>
        );
    };

    if (isLoading) {
        return (
            <section className="bg-gradient-to-br from-gray-900/30 to-black/50 border border-gray-800/50 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-8 flex items-center gap-4">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                    Where to Watch
                </h3>
                
                <div className="flex items-center justify-center space-x-4 py-12">
                    <Loader className="w-8 h-8 animate-spin text-yellow-400" />
                    <p className="text-gray-300 text-lg">Loading platforms...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-br from-gray-900/30 to-black/50 border border-gray-800/50 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
                <motion.h3 
                    className="text-2xl sm:text-3xl lg:text-4xl font-light text-white flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                    Where to Watch
                </motion.h3>
                
                {userRegion && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/30 rounded-lg backdrop-blur-sm">
                        <span className="text-base">🇮🇳</span>
                        <span className="text-gray-300 text-sm">{userRegion.name}</span>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {streamingData ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {/* Streaming Options */}
                        {streamingData.providers.flatrate?.length > 0 && (
                            <div>
                                <h4 className="text-lg font-medium text-yellow-400 mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    Stream with Subscription
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                    {streamingData.providers.flatrate.map((provider) => (
                                        <StreamingPlatform
                                            key={`stream-${provider.provider_id}`}
                                            provider={provider}
                                            type="flatrate"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Rental & Purchase Options */}
                        {(streamingData.providers.rent?.length > 0 || streamingData.providers.buy?.length > 0) && (
                            <div>
                                <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Rent or Buy
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                    {[...(streamingData.providers.rent || []), ...(streamingData.providers.buy || [])].map((provider, index) => (
                                        <StreamingPlatform
                                            key={`purchase-${provider.provider_id}-${index}`}
                                            provider={provider}
                                            type={streamingData.providers.rent?.includes(provider) ? 'rent' : 'buy'}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* No platforms available */}
                        {(!streamingData.providers.flatrate?.length && 
                          !streamingData.providers.rent?.length && 
                          !streamingData.providers.buy?.length) && (
                            <div className="text-center py-12">
                                <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h4 className="text-xl font-light text-gray-300 mb-2">
                                    Not Available in {userRegion?.name}
                                </h4>
                                <p className="text-gray-400">
                                    This movie isn't available for streaming in your region yet.
                                </p>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <div className="text-center py-12">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg">Unable to load streaming data</p>
                    </div>
                )}
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-gray-800/50">
                <p className="text-center text-gray-500 text-sm">
                    Platform information provided by TMDB • For reference only
                </p>
            </div>
        </section>
    );
});

EnhancedWhereToWatchSection.displayName = 'EnhancedWhereToWatchSection';

export default EnhancedWhereToWatchSection;
