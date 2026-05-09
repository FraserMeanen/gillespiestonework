import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pgillespieandson.co.uk",
      lastModified: new Date(),
    },
    {
      url: "https://pgillespieandson.co.uk/about",
      lastModified: new Date(),
    },
    {
      url: "https://pgillespieandson.co.uk/services",
      lastModified: new Date(),
    },
    {
      url: "https://pgillespieandson.co.uk/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://pgillespieandson.co.uk/contact",
      lastModified: new Date(),
    },
  ];
}