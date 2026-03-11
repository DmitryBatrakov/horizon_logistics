import type { MetadataRoute } from "next";

const LOCALES = ["en", "he"] as const;
const SERVICE_SLUGS = [
    "container-unloading",
    "factory-staffing",
    "warehouse-cleaning",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.SITE_URL || "http://localhost:3000";
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: locale === "he" ? 1 : 0.9,
    }));

    const servicePages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
        SERVICE_SLUGS.map((slug) => ({
            url: `${baseUrl}/${locale}/services/${slug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        })),
    );

    return [...staticPages, ...servicePages];
}
