/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir is enabled by default in Next.js 15
  },
  images: {
    domains: ['images.unsplash.com'],
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  // Enable compression
  compress: true,
  // Enable react production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  // Enable HTTP/2 support
  httpAgentOptions: {
    keepAlive: true,
  },
  // Handle CSS files properly
  webpack: (config) => {
    // Handle CSS files in public directory
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    
    return config;
  },
};

module.exports = nextConfig;