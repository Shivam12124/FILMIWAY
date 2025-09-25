/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,  // ✅ CHANGED - Remove trailing slash
  distDir: 'out',        // ✅ MATCHES netlify.toml publish dir
  images: {
    unoptimized: true,
    domains: ['image.tmdb.org', 'www.themoviedb.org']
  },
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY || '6054e5498fb2619274454959c38bbdfa'
  },
  // ✅ REMOVE EXPERIMENTAL AND OTHER SETTINGS
  poweredByHeader: false,
  compress: true
}

module.exports = nextConfig
