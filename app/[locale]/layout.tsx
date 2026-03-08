import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { FooterPosition } from "@/components/footer/FooterPosition";
import { Header } from "@/components/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("metadata");

    return {
        title: t("title"),
        description: t("description"),
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    return (
        <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    <Header />
                    <main>{children}</main>
                    <FooterPosition>
                        <Footer />
                    </FooterPosition>
                </NextIntlClientProvider>
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
