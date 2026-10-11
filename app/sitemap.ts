import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    ...(post.date && { lastModified: new Date(post.date) }),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
