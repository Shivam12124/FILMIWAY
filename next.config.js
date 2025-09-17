/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // REMOVE NEXT.JS BRANDING
  poweredByHeader: false,
  
  // CUSTOM HEADERS
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

  // OPTIMIZE FOR TMDB IMAGES
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

  // ENVIRONMENT VARIABLES - UPDATED FOR YOUR ENV VAR
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    SITE_NAME: 'Filmiway',
    SITE_DESCRIPTION: 'Where Every Film Finds Its Way',
  },

  // REMOVE CONSOLE LOGS IN PRODUCTION
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // EXPERIMENTAL FEATURES
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig;
