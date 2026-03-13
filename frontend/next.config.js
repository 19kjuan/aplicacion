/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://task-management-backend-f33g.onrender.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
