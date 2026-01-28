/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ REMOVED: output: 'export' 
  // (Deleting this line unlocks ISR, revalidate, and Image Optimization)

  // ✅ CORE SETTINGS
  trailingSlash: false,
  reactStrictMode: false,

  // ✅ IMAGE OPTIMIZATION (Enabled for SEO & Speed)
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/**', // ✅ Allows all TMDB images
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**', // ✅ Allows all Amazon/IMDb images
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', // ✅ Keep this until you remove placeholders
      },
    ],
  },

  // ✅ ENVIRONMENT VARIABLES
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },

  // ✅ PERFORMANCE SETTINGS
  // generateEtags: true is better for ISR caching
  generateEtags: true, 
  poweredByHeader: false,
  compress: true,

  // ✅ BUILD CACHE (Kept your settings)
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
}

module.exports = nextConfig;