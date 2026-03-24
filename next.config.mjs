/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack to avoid SWC binding issues
  experimental: {
    // optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Reduce bundle size
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/{{member}}',
    },
  },
}

export default nextConfig
