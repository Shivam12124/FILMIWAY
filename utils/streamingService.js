// utils/streamingService.js - IMPROVED VPN-AWARE REGION DETECTION
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const SUPPORTED_REGIONS = {
    'US': { name: 'United States', flag: '🇺🇸' },
    'GB': { name: 'United Kingdom', flag: '🇬🇧' },
    'CA': { name: 'Canada', flag: '🇨🇦' },
    'AU': { name: 'Australia', flag: '🇦🇺' },
    'DE': { name: 'Germany', flag: '🇩🇪' },
    'FR': { name: 'France', flag: '🇫🇷' },
    'IT': { name: 'Italy', flag: '🇮🇹' },
    'ES': { name: 'Spain', flag: '🇪🇸' },
    'NL': { name: 'Netherlands', flag: '🇳🇱' },
    'SE': { name: 'Sweden', flag: '🇸🇪' },
    'NO': { name: 'Norway', flag: '🇳🇴' },
    'DK': { name: 'Denmark', flag: '🇩🇰' },
    'IN': { name: 'India', flag: '🇮🇳' },
    'JP': { name: 'Japan', flag: '🇯🇵' },
    'KR': { name: 'South Korea', flag: '🇰🇷' },
    'BR': { name: 'Brazil', flag: '🇧🇷' },
    'MX': { name: 'Mexico', flag: '🇲🇽' },
    'AR': { name: 'Argentina', flag: '🇦🇷' },
    'CL': { name: 'Chile', flag: '🇨🇱' },
    'CO': { name: 'Colombia', flag: '🇨🇴' }
};

// STREAMING PLATFORMS - ENHANCED WITH BETTER URLS
export const STREAMING_PLATFORMS = {
    // Netflix - Working
    8: {
        name: 'Netflix',
        logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png',
        color: '#E50914',
        getHomepageURL: (region) => {
            const netflixUrls = {
                'US': 'https://www.netflix.com',
                'GB': 'https://www.netflix.com/gb',
                'CA': 'https://www.netflix.com/ca',
                'AU': 'https://www.netflix.com/au',
                'DE': 'https://www.netflix.com/de',
                'FR': 'https://www.netflix.com/fr',
                'IT': 'https://www.netflix.com/it',
                'ES': 'https://www.netflix.com/es',
                'NL': 'https://www.netflix.com/nl',
                'SE': 'https://www.netflix.com/se',
                'NO': 'https://www.netflix.com/no',
                'DK': 'https://www.netflix.com/dk',
                'IN': 'https://www.netflix.com/in',
                'JP': 'https://www.netflix.com/jp',
                'KR': 'https://www.netflix.com/kr',
                'BR': 'https://www.netflix.com/br',
                'MX': 'https://www.netflix.com/mx',
                'AR': 'https://www.netflix.com/ar',
                'CL': 'https://www.netflix.com/cl',
                'CO': 'https://www.netflix.com/co'
            };
            return netflixUrls[region] || 'https://www.netflix.com';
        }
    },
    
    // Amazon Prime Video - IMPROVED URLS
    119: {
        name: 'Amazon Prime Video',
        logo: 'https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png',
        color: '#1A98FF',
        getHomepageURL: (region) => {
            const amazonUrls = {
                'US': 'https://www.amazon.com/gp/video/storefront',
                'GB': 'https://www.amazon.co.uk/gp/video/storefront',
                'CA': 'https://www.amazon.ca/gp/video/storefront',
                'AU': 'https://www.amazon.com.au/gp/video/storefront',
                'DE': 'https://www.amazon.de/gp/video/storefront',
                'FR': 'https://www.amazon.fr/gp/video/storefront',
                'IT': 'https://www.amazon.it/gp/video/storefront',
                'ES': 'https://www.amazon.es/gp/video/storefront',
                'NL': 'https://www.amazon.nl/gp/video/storefront',
                'SE': 'https://www.amazon.se/gp/video/storefront',
                'IN': 'https://www.primevideo.com/region/eu/offers/nonprimehomepage/ref=dv_web_force_root',
                'JP': 'https://www.amazon.co.jp/gp/video/storefront',
                'BR': 'https://www.amazon.com.br/gp/video/storefront',
                'MX': 'https://www.amazon.com.mx/gp/video/storefront'
            };
            return amazonUrls[region] || 'https://www.primevideo.com';
        }
    },
    
    // Disney+ / Hotstar - ENHANCED
    337: {
        name: 'Disney+',
        logo: 'https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original',
        color: '#113CCF',
        getHomepageURL: (region) => {
            const disneyUrls = {
                'US': 'https://www.disneyplus.com',
                'GB': 'https://www.disneyplus.com/en-gb',
                'CA': 'https://www.disneyplus.com/en-ca',
                'AU': 'https://www.disneyplus.com/en-au',
                'DE': 'https://www.disneyplus.com/de-de',
                'FR': 'https://www.disneyplus.com/fr-fr',
                'IT': 'https://www.disneyplus.com/it-it',
                'ES': 'https://www.disneyplus.com/es-es',
                'NL': 'https://www.disneyplus.com/nl-nl',
                'SE': 'https://www.disneyplus.com/sv-se',
                'NO': 'https://www.disneyplus.com/no-no',
                'DK': 'https://www.disneyplus.com/da-dk',
                'IN': 'https://www.hotstar.com/in',
                'JP': 'https://www.disneyplus.com/ja-jp',
                'KR': 'https://www.disneyplus.com/ko-kr',
                'BR': 'https://www.disneyplus.com/pt-br'
            };
            return disneyUrls[region] || 'https://www.disneyplus.com';
        }
    },
    
    // Apple TV+ - Working
    350: {
        name: 'Apple TV+',
        logo: 'https://www.apple.com/v/apple-tv-plus/y/images/overview/icon_apple_tv_plus__b88ki6caqfim_large_2x.png',
        color: '#000000',
        getHomepageURL: (region) => {
            const appleUrls = {
                'US': 'https://tv.apple.com/us',
                'GB': 'https://tv.apple.com/gb',
                'CA': 'https://tv.apple.com/ca',
                'AU': 'https://tv.apple.com/au',
                'DE': 'https://tv.apple.com/de',
                'FR': 'https://tv.apple.com/fr',
                'IT': 'https://tv.apple.com/it',
                'ES': 'https://tv.apple.com/es',
                'NL': 'https://tv.apple.com/nl',
                'SE': 'https://tv.apple.com/se',
                'NO': 'https://tv.apple.com/no',
                'DK': 'https://tv.apple.com/dk',
                'IN': 'https://tv.apple.com/in',
                'JP': 'https://tv.apple.com/jp',
                'KR': 'https://tv.apple.com/kr',
                'BR': 'https://tv.apple.com/br',
                'MX': 'https://tv.apple.com/mx',
                'AR': 'https://tv.apple.com/ar',
                'CL': 'https://tv.apple.com/cl',
                'CO': 'https://tv.apple.com/co'
            };
            return appleUrls[region] || 'https://tv.apple.com/us';
        }
    },
    
    // HBO Max/Max - Working
    384: {
        name: 'Max',
        logo: 'https://discomax.hbo.com/favicon.ico',
        color: '#9146FF',
        getHomepageURL: (region) => {
            const maxUrls = {
                'US': 'https://www.max.com',
                'CA': 'https://www.crave.ca',
                'BR': 'https://www.max.com/br/pt',
                'MX': 'https://www.max.com/mx/es',
                'AR': 'https://www.max.com/ar/es',
                'CL': 'https://www.max.com/cl/es',
                'CO': 'https://www.max.com/co/es'
            };
            return maxUrls[region] || 'https://www.max.com';
        }
    },
    
    // Hulu - Working
    15: {
        name: 'Hulu',
        logo: 'https://www.hulu.com/favicon.ico',
        color: '#3DBB3D',
        getHomepageURL: (region) => {
            if (region === 'JP') return 'https://www.happyon.jp';
            return 'https://www.hulu.com';
        }
    },
    
    // Paramount+ - Working
    531: {
        name: 'Paramount+',
        logo: 'https://www.paramountplus.com/favicon.ico',
        color: '#0064FF',
        getHomepageURL: (region) => {
            const paramountUrls = {
                'US': 'https://www.paramountplus.com',
                'CA': 'https://www.paramountplus.com/ca',
                'GB': 'https://www.paramountplus.com/uk',
                'AU': 'https://www.paramountplus.com/au',
                'DE': 'https://www.paramountplus.com/de',
                'IT': 'https://www.paramountplus.com/it'
            };
            return paramountUrls[region] || 'https://www.paramountplus.com';
        }
    },
    
    // YouTube Movies - Working
    192: {
        name: 'YouTube Movies',
        logo: 'https://www.youtube.com/s/desktop/f506bd45/img/favicon_32x32.png',
        color: '#FF0000',
        getHomepageURL: (region) => {
            return 'https://www.youtube.com/movies';
        }
    },
    
    // Google Play Movies - Working
    3: {
        name: 'Google Play Movies & TV',
        logo: 'https://play.google.com/favicon.ico',
        color: '#4285F4',
        getHomepageURL: (region) => {
            return 'https://play.google.com/store/movies';
        }
    },
    
    // Vudu - Working
    7: {
        name: 'Vudu',
        logo: 'https://www.vudu.com/favicon.ico',
        color: '#3B82F6',
        getHomepageURL: (region) => {
            return 'https://www.vudu.com';
        }
    },
    
    // Microsoft Store - Working
    68: {
        name: 'Microsoft Store',
        logo: 'https://www.microsoft.com/favicon.ico',
        color: '#00A1F1',
        getHomepageURL: (region) => {
            return 'https://www.microsoft.com/en-us/store/movies-and-tv';
        }
    },
    
    // Vi Movies & TV (India) - CORRECTED
    223: {
        name: 'Vi Movies and TV',
        logo: 'https://www.vi.in/favicon.ico',
        color: '#662D91',
        getHomepageURL: (region) => {
            return 'https://www.vi.in/movies-tv';
        }
    },
      220: {
        name: 'JioHotstar',
        logo: 'https://www.jiohotstar.com/favicon.ico',
        color: '#8A2BE2',
        getHomepageURL: (region) => {
            return 'https://www.jiohotstar.com';
        }
    },
    
    
    // SonyLIV (India) - Common in India  
    237: {
        name: 'SonyLIV',
        logo: 'https://www.sonyliv.com/favicon.ico',
        color: '#FF6B35',
        getHomepageURL: (region) => {
            return 'https://www.sonyliv.com';
        }
    },
    
    // Zee5 (India) - Common in India
    232: {
        name: 'ZEE5',
        logo: 'https://www.zee5.com/favicon.ico',
        color: '#673AB7',
        getHomepageURL: (region) => {
            return 'https://www.zee5.com/global';
        }
    },

    // MX Player (India) - Free platform
    421: {
        name: 'MX Player',
        logo: 'https://www.mxplayer.in/favicon.ico', 
        color: '#FF9500',
        getHomepageURL: (region) => {
            return 'https://www.mxplayer.in';
        }
    }
};

// IMPROVED: VPN-AWARE REGION DETECTION
export const detectUserRegion = async () => {
    console.log('🌍 Starting multi-method region detection...');
    
    // Method 1: Timezone Detection (Most reliable with VPN)
    const getTimezoneRegion = () => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log(`⏰ Detected timezone: ${timeZone}`);
        
        const timezoneToRegion = {
            // India timezones
            'Asia/Kolkata': 'IN',
            'Asia/Mumbai': 'IN',
            'Asia/Delhi': 'IN',
            'Asia/Calcutta': 'IN',
            
            // UK timezones  
            'Europe/London': 'GB',
            'GMT': 'GB',
            
            // US timezones
            'America/New_York': 'US',
            'America/Los_Angeles': 'US',
            'America/Chicago': 'US',
            'America/Denver': 'US',
            'America/Phoenix': 'US',
            'America/Anchorage': 'US',
            'Pacific/Honolulu': 'US',
            
            // Other regions
            'Europe/Paris': 'FR',
            'Europe/Berlin': 'DE',
            'Asia/Tokyo': 'JP',
            'Australia/Sydney': 'AU',
            'America/Toronto': 'CA',
            'America/Vancouver': 'CA',
        };
        
        return timezoneToRegion[timeZone];
    };
    
    // Method 2: Multiple IP Detection Services
    const getIPRegion = async () => {
        const ipServices = [
            { url: 'https://ipapi.co/json/', key: 'country_code' },
            { url: 'http://ip-api.com/json/', key: 'countryCode' },
            { url: 'https://ipinfo.io/json', key: 'country' }
        ];
        
        for (const service of ipServices) {
            try {
                console.log(`🔍 Trying IP service: ${service.url}`);
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000);
                
                const response = await fetch(service.url, { 
                    signal: controller.signal,
                    headers: { 'Accept': 'application/json' }
                });
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    const data = await response.json();
                    const countryCode = data[service.key];
                    
                    if (countryCode) {
                        console.log(`✅ IP detection: ${countryCode} from ${service.url}`);
                        return countryCode.toUpperCase();
                    }
                }
            } catch (error) {
                console.log(`❌ IP service ${service.url} failed:`, error.message);
                continue;
            }
        }
        
        return null;
    };
    
    // Method 3: Browser Language Hint
    const getLanguageRegion = () => {
        const language = navigator.language || navigator.languages[0];
        console.log(`🗣️ Browser language: ${language}`);
        
        const languageMap = {
            'en-IN': 'IN',
            'hi-IN': 'IN',
            'en-GB': 'GB',
            'en-US': 'US',
            'fr-FR': 'FR',
            'de-DE': 'DE',
            'ja-JP': 'JP',
            'ko-KR': 'KR'
        };
        
        return languageMap[language];
    };
    
    try {
        // Try all methods
        const timezoneRegion = getTimezoneRegion();
        const ipRegion = await getIPRegion();
        const languageRegion = getLanguageRegion();
        
        console.log('🔍 Detection results:', {
            timezone: timezoneRegion,
            ip: ipRegion,
            language: languageRegion
        });
        
        // Priority: Timezone > IP > Language > Default
        let detectedCode = timezoneRegion || ipRegion || languageRegion || 'IN';
        
        // Handle UK/GB inconsistency
        if (detectedCode === 'UK') detectedCode = 'GB';
        
        // Ensure we have a supported region
        const regionInfo = SUPPORTED_REGIONS[detectedCode];
        
        if (regionInfo) {
            console.log(`🎯 Final detection: ${detectedCode} (${regionInfo.name})`);
            return {
                code: detectedCode,
                name: regionInfo.name,
                flag: regionInfo.flag
            };
        } else {
            console.log(`⚠️ Unsupported region ${detectedCode}, defaulting to India`);
            return {
                code: 'IN',
                name: 'India',
                flag: '🇮🇳'
            };
        }
        
    } catch (error) {
        console.error('❌ Region detection failed completely:', error);
        return {
            code: 'IN',
            name: 'India',
            flag: '🇮🇳'
        };
    }
};

// Get streaming providers with better error handling
export const getRegionStreamingProviders = async (tmdbId, regionCode) => {
    if (!tmdbId || !regionCode) {
        throw new Error('TMDB ID and region code are required');
    }
    
    try {
        console.log(`📺 Fetching streaming providers for movie ${tmdbId} in region ${regionCode}`);
        
        const url = `${TMDB_BASE_URL}/movie/${tmdbId}/watch/providers?api_key=${TMDB_API_KEY}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const regionData = data.results?.[regionCode];
        
        if (regionData) {
            const streamCount = regionData.flatrate?.length || 0;
            const rentCount = regionData.rent?.length || 0;
            const buyCount = regionData.buy?.length || 0;
            
            console.log(`✅ Found providers: ${streamCount} streaming, ${rentCount} rental, ${buyCount} purchase`);
            
            return {
                region: regionCode,
                providers: {
                    flatrate: regionData.flatrate || [],
                    rent: regionData.rent || [],
                    buy: regionData.buy || []
                },
                link: regionData.link || null
            };
        } else {
            console.log(`❌ No streaming data available for region ${regionCode}`);
            return {
                region: regionCode,
                providers: {
                    flatrate: [],
                    rent: [],
                    buy: []
                },
                link: null
            };
        }
        
    } catch (error) {
        console.error(`❌ Error fetching providers for region ${regionCode}:`, error);
        throw error;
    }
};

// Generate platform homepage link with fallbacks
export const generatePlatformLink = (providerId, regionCode) => {
    console.log(`🏠 Getting platform homepage for provider ID ${providerId} in region ${regionCode}`);
    
    const platform = STREAMING_PLATFORMS[providerId];
    
    if (platform?.getHomepageURL) {
        try {
            const homepageUrl = platform.getHomepageURL(regionCode);
            console.log(`✅ Platform homepage: ${homepageUrl}`);
            return homepageUrl;
        } catch (error) {
            console.error(`❌ Error getting homepage for provider ${providerId}:`, error);
        }
    }
    
    console.log(`⚠️ Provider ${providerId} not found or error occurred, using Netflix fallback`);
    return STREAMING_PLATFORMS[8].getHomepageURL(regionCode);
};

export default {
    detectUserRegion,
    getRegionStreamingProviders,
    generatePlatformLink,
    SUPPORTED_REGIONS,
    STREAMING_PLATFORMS
};
