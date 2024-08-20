/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["typeorm"],// ignorar errores de generados  typeorm
      },
};

export default nextConfig;
