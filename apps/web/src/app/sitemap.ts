import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { ventures } from "@/config/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/ventures",
    ...ventures.filter((venture) => !venture.externalOnly).map((venture) => venture.path),
  ];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
