/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization for movie posters
  images: {
    domains: [
      'image.tmdb.org',
      'm.media-amazon.com',
      'www.themoviedb.org'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable static export if needed
  trailingSlash: true,
  
  // Redirect rules for SEO
  async redirects() {
    return [
      {
        source: '/movies-like-inception',
        destination: '/collection/movies-like-inception',
        permanent: true,
      },
    ];
  },
  
  // Headers for better performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
