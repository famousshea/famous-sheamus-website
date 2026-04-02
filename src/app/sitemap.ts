import { MetadataRoute } from "next";
import { blogs, services } from "#site/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.famoussheamus.com";

  // Core static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}${service.permalink}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Blog pages
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}${blog.permalink}`,
    lastModified: new Date(blog.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
