import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";
import { getMetadataForLocale } from "@/lib/metadata/metadata";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return getMetadataForLocale(locale);
}


export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    <Header />
                    <main>{children}</main>
                    <section className="sticky bottom-0 z-0">
                        <Footer />
                    </section>
                </NextIntlClientProvider>
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
