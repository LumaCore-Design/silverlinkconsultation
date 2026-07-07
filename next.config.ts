import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/referral',
        destination: 'https://starlink.com/residential?referral=RC-1561184-52230-53',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
