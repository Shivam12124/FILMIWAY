/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 STATIC EXPORT FOR NETLIFY - OPTIMIZED FOR SEO
  output: 'export',
  trailingSlash: false, // 🚨 CRITICAL FIX: Prevents 301 redirects!
  
  // 🔥 SEO-OPTIMIZED SETTINGS
  reactStrictMode: false,
  swcMinify: true,
  
  // 🔥 ESSENTIAL FOR STATIC GENERATION
  images: {
    unoptimized: true,
    loader: 'default',
    domains: [
      'image.tmdb.org',
      'm.media-amazon.com',
      'www.themoviedb.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  
  // 🔥 ENVIRONMENT VARIABLES
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: '6054e5498fb2619274454959c38bbdfa'
  },
  
  // 🔥 SEO HEADERS - TELLS SEARCH ENGINES TO INDEX
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate'
          }
        ],
      },
    ]
  },
  
  // 🔥 ENSURE STATIC PAGES ARE PROPERLY GENERATED
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  
  // 🔥 WEBPACK OPTIMIZATION FOR FASTER BUILDS
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  
  // 🔥 EXPERIMENTAL FEATURES FOR BETTER SEO
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  }
}

module.exports = nextConfig
