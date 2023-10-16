/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [`${process.env.WP_URL}`],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.WP_URL}`,
        port: '',
        pathname: '/wp-content/uploads/*',
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas', 'jsdom'];
    return config;
  },
};

module.exports = nextConfig;
