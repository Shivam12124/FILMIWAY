/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // REMOVE NEXT.JS BRANDING FROM GOOGLE
  poweredByHeader: false,
  
  // CUSTOM HEADERS TO OVERRIDE NEXT.JS DETECTION
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Powered-By',
            value: 'Filmiway',
          },
          {
            key: 'Server',
            value: 'Filmiway Movie Platform',
          },
        ],
      },
    ];
  },

  // OPTIMIZE FOR SEO AND TMDB IMAGES
  images: {
    domains: ['image.tmdb.org', 'www.themoviedb.org'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  },

  // ENVIRONMENT VARIABLES
  env: {
    SITE_NAME: 'Filmiway',
    SITE_DESCRIPTION: 'Where Every Film Finds Its Way',
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },

  // BETTER BUILD OUTPUT
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // EXPERIMENTAL FEATURES
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig;
