import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  turbopack: {
    root: path.resolve(__dirname, '../../'),
  },
}

export default nextConfig