/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname:
          "/majed-khalid1/Personal-Webstie-Media/main/cources-images/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname:
          "/majed-khalid1/nextjs-supabase-blog/main/public/screenshots/**",
      },
    ],
  },
};

export default nextConfig;
