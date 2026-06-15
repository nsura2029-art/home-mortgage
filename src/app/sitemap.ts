import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://useclarifyhome.us";
  const slugs = ["mortgage", "refinance", "home-equity", "pmi", "property-tax", "home-insurance"];
  const legal = ["privacy", "terms", "cookies"].map((slug) => ({ url: `${base}/${slug}`, changeFrequency: "yearly" as const, priority: 0.3 }));
  return [{ url: base, changeFrequency: "weekly", priority: 1 }, ...slugs.map((slug) => ({ url: `${base}/calculators/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })), ...legal];
}
