/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { dirs: ['src'] },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
