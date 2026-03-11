import type { Metadata } from "next";
import { metaByLocale } from "./metadata-messages";

export function getMetadataForLocale(locale: string): Metadata {
    const meta = metaByLocale[locale] ?? metaByLocale.en;

    const { title, description, ogTitle, ogDescription } = meta;

    const baseUrl = process.env.SITE_URL;

    const localeMap: Record<string, string> = {
        en: "en_US",
        he: "he_IL",
    };

    return {
        title,
        description,

        keywords: [
            // core services
            "container unloading",
            "container loading",
            "container handling",
            "cargo unloading",
            "cargo handling",

            // workforce services
            "logistics workforce",
            "warehouse workers",
            "port labor services",
            "temporary logistics staff",
            "logistics staffing",
            "industrial workforce",

            // warehouse services
            "warehouse maintenance",
            "warehouse operations",
            "warehouse support services",
            "warehouse organization",
            "warehouse cleaning services",

            // logistics industry
            "logistics services",
            "supply chain services",
            "port operations",
            "freight logistics",
            "cargo logistics",

            // business intent
            "logistics outsourcing",
            "container unloading service",
            "warehouse service provider",
            "logistics contractor",
            "third party logistics services",

            // brand
            "Horizon Logistics",
        ],
        authors: [{ name: "Horizon Logistics" }],
        creator: "Horizon Logistics",
        publisher: "Horizon Logistics",

        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.ico",
            apple: "/apple-touch-icon.png",
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        openGraph: {
            type: "website",
            locale: localeMap[locale] || "en_US",
            alternateLocale: Object.values(localeMap).filter(
                (l) => l !== localeMap[locale],
            ),
            url: `${baseUrl}/${locale}`,
            siteName: "Horizon Logistics",
            title: ogTitle,
            description: ogDescription,
            images: [
                {
                    url: `${baseUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: ogTitle,
                    type: "image/png",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: ogTitle,
            description: ogDescription,
            images: [`${baseUrl}/twitter-image.png`],
        },

        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                en: `${baseUrl}/en`,
                he: `${baseUrl}/he`,
                "x-default": `${baseUrl}/he`,
            },
        },

        category: "logistics",
        classification: "Business",
    };
}
