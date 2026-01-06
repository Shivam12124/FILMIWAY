/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ REMOVED: output: 'export' 
  // (Deleting this line unlocks ISR, revalidate, and Image Optimization)

  // ✅ CORE SETTINGS
  trailingSlash: false,
  reactStrictMode: false,

  // ✅ IMAGE OPTIMIZATION (Enabled for SEO & Speed)
  images: {
    // We allow Next.js to optimize images from these sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
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