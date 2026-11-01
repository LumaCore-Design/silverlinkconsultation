import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LumaCore's dashboard shows this site in a frame for its heatmap view; no other site may frame it.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "Content-Security-Policy", value: "frame-ancestors 'self' https://app.lumacoredesign.com" }] }];
  },
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
