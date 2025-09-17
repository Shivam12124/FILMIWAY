// components/BackToHomepageButton.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Home } from 'lucide-react';

// Utility hook for client-side detection
const useIsClient = () => {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    return isClient;
};

const BackToHomepageButton = React.memo(() => {
    const router = useRouter();
    const isClient = useIsClient();

    if (!isClient) return null;

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <motion.button
            onClick={handleGoHome}
            className="fixed top-3 left-3 sm:top-4 sm:left-4 z-[60] bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <Home size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Homepage</span>
            <span className="sm:hidden">Home</span>
        </motion.button>
    );
});

BackToHomepageButton.displayName = 'BackToHomepageButton';

export default BackToHomepageButton;
