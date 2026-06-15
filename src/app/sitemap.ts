import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clarifyhome.com";
  const slugs = ["mortgage", "refinance", "home-equity", "pmi", "property-tax", "home-insurance"];
  return [{ url: base, changeFrequency: "weekly", priority: 1 }, ...slugs.map((slug) => ({ url: `${base}/calculators/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
