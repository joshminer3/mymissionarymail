import type { MetadataRoute } from "next";

const BASE_URL = "https://mymissionarymail.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/login`,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/signup`,
      priority: 0.5,
    },
  ];
}
