import { MetadataRoute } from "next";

const baseURL = "https://moongazerceremonies.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseURL}/wedding`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseURL}/renewal`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseURL}/naming`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseURL}/funeral`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseURL}/commitment`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
  ];
}
