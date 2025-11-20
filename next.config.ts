import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  // Cloudflare Pages için gerekli ayarlar
  // @cloudflare/next-on-pages kullanıldığında otomatik olarak yapılandırılır
  
  // R2 (assets.phishy.io) için image domain yapılandırması
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.phishy.io',
        pathname: '/**',
      },
    ],
    // Cloudflare Pages Edge Runtime için unoptimized images
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
