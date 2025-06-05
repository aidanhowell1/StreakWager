import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
