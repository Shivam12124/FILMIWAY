/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ CORE SETTINGS
  trailingSlash: false,
  reactStrictMode: false,

  // ⚡ OPTIMIZED: Image settings with modern formats
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        pathname: '/**',
      },
    ],
    // ⚡ NEW: Modern image formats (AVIF/WebP save 50%+ bandwidth)
    formats: ['image/avif', 'image/webp'],
    // ⚡ NEW: Cache images for 30 days (faster repeat visits)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // ⚡ NEW: Optimized device sizes
    deviceSizes: [640, 768, 1024, 1280, 1536],
    // ⚡ NEW: Optimized image sizes (matches your actual usage)
    imageSizes: [150, 185, 200, 250, 300],
  },

  // ✅ ENVIRONMENT VARIABLES
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },

  // ✅ PERFORMANCE SETTINGS
  generateEtags: true, 
  poweredByHeader: false,
  compress: true,
  swcMinify: true, // ⚡ NEW: Faster minification

  // ✅ REDIRECTS
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
    ];
  },

  // ✅ BUILD CACHE
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig;
