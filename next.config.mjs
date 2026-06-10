/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/absolute-cards' : '',
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
