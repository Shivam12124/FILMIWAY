/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ CORE SETTINGS
  output: 'export',
  trailingSlash: false,
  reactStrictMode: false,

  // ✅ IMAGE OPTIMIZATION
  images: {
    unoptimized: true // Required for static export
  },

  // ✅ ENVIRONMENT VARIABLES
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: '6054e5498fb2619274454959c38bbdfa'
  },

  // ✅ PERFORMANCE SETTINGS
  generateEtags: false,
  poweredByHeader: false,
  compress: true,

  // ✅ BUILD CACHE
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // 🔥 **CRITICAL: ALLOW INDEXING - ADD THIS SECTION** 🔥
  headers: async () => {
    return [
      {
        source: '/collection/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          }
        ]
      },
      {
        source: '/movies/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig
