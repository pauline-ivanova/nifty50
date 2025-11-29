/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/**',
      },
    ],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react'],
    serverComponentsExternalPackages: ['esprima', '@vercel/og'],
  },
  compress: true,
  webpack: (config, { isServer }) => {
    // Fix for next-mdx-remote esprima issue
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;


