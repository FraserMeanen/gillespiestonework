import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gillespiestonework.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://gillespiestonework.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://gillespiestonework.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://gillespiestonework.vercel.app/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://gillespiestonework.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}