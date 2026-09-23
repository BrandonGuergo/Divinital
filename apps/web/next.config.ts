import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@divinital/ui"],
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        source: "/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/support", destination: "/support/index.html" },
      { source: "/support/", destination: "/support/index.html" },
      { source: "/privacy", destination: "/privacy/index.html" },
      { source: "/privacy/", destination: "/privacy/index.html" },
      { source: "/terms", destination: "/terms/index.html" },
      { source: "/terms/", destination: "/terms/index.html" },
    ];
  },
};

export default nextConfig;
