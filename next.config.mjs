/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript и ESLint проверки
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Настройки изображений
  images: {
    unoptimized: true,
  },
  // Для статических файлов из public
  trailingSlash: false,
  // Убеждаемся, что все работает на Vercel
  output: undefined,
}

export default nextConfig
