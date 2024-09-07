/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["typeorm"],// ignorar errores de generados  typeorm
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  }
};

export default nextConfig;
