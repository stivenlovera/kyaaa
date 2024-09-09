import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["typeorm"],// ignorar errores de generados  typeorm
  },
  /* i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  }, */
};

export default withNextIntl(nextConfig);

