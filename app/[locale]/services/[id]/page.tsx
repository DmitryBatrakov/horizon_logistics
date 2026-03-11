import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { servicesData } from "@/data/services-data";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";
import { ArrowLeft, ArrowRight, Container, CheckCircle } from "lucide-react";
import Link from "next/link";
import { AnimatedButton } from "@/shared/animated-button/animated-button";

const SERVICE_IDS = [
    "container-unloading",
    "factory-staffing",
    "warehouse-cleaning",
] as const;

type ServiceId = (typeof SERVICE_IDS)[number];

function isServiceId(id: string): id is ServiceId {
    return SERVICE_IDS.includes(id as ServiceId);
}

function assertServiceId(id: string): ServiceId {
    if (!isServiceId(id)) notFound();
    return id;
}

export async function generateStaticParams() {
    return SERVICE_IDS.map((id) => ({ id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
    const { locale, id: rawId } = await params;
    const id = assertServiceId(rawId);
    const serviceKey = servicesData[id].i18nKey;
    const t = await getTranslations({ locale, namespace: "servicePages" });

    const baseUrl = process.env.SITE_URL;
    const title = t(`${serviceKey}.titleHero`);
    const description = t(`${serviceKey}.descriptionService`);
    const path = `/${locale}/services/${id}`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
            languages: {
                en: `/en/services/${id}`,
                he: `/he/services/${id}`,
                "x-default": `/he/services/${id}`,
            },
        },
        openGraph: {
            title,
            description,
            url: baseUrl ? `${baseUrl}${path}` : path,
            type: "article",
            images: [
                {
                    url: baseUrl ? `${baseUrl}/og-image.png` : "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                baseUrl ? `${baseUrl}/twitter-image.png` : "/twitter-image.png",
            ],
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { locale, id: rawId } = await params;
    const id = assertServiceId(rawId);
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: "servicePages" });
    const tUi = await getTranslations({ locale, namespace: "servicePageUi" });

    return (
        <section className="w-full min-h-screen relative overflow-hidden bg-white z-10 shadow-2xl shadow-black/20">
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center">
                <Image
                    src={servicesData[id].image}
                    alt={t(`${servicesData[id].i18nKey}.titleService`)}
                    fill
                    className="object-cover h-ful w-full rounded-2xl md:rounded-b-[80px]"
                    priority
                    sizes="100vw"
                    placeholder="blur"
                />

                {/* <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/35 to-transparent z-10 rounded-2xl md:rounded-b-[80px]" /> */}
                <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/30  to-transparent z-10 rounded-2xl md:rounded-b-[80px]" />
                <div className="absolute inset-0 z-20 flex flex-col items-start justify-center max-w-7xl mx-auto w-full gap-8 px-6 md:px-2 mt-10">
                    <SplitLinesReveal
                        stagger={0.2}
                        className="flex flex-col items-start justify-center w-full mt-10"
                    >
                        <Link
                            href={`/`}
                            className="group flex items-center justify-start gap-3 text-button-foreground hover:bg-transparent mr-5"
                        >
                            {locale === "en" ? (
                                <ArrowLeft
                                    size={20}
                                    className="transition-colors group-hover:text-white"
                                />
                            ) : (
                                <ArrowRight
                                    size={20}
                                    className="transition-colors group-hover:text-white"
                                />
                            )}

                            <span className="text-sm font-semibold transition-colors group-hover:text-white">
                                {tUi("backToHome")}
                            </span>
                        </Link>
                        <div className="tracking-[0.16em] flex items-center justify-start gap-5 md:gap-8 pt-4 pb-3">
                            <div className="w-10 h-10 md:w-16 md:h-16 bg-button-foreground rounded-md flex items-center justify-center">
                                <Container className="text-black w-6 h-6 md:w-10 md:h-10" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center justify-center gap-2">
                                {t(`${servicesData[id].i18nKey}.titleHero`)}
                            </h1>
                        </div>
                        <div className="text-white/80 text-sm md:text-base font-semibold ">
                            {t(`${servicesData[id].i18nKey}.subtitleHero`)}
                        </div>
                    </SplitLinesReveal>
                </div>
            </div>
            <div className="min-h-screen w-full flex items-start justify-center py-20">
                <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 tems-center justify-between gap-5">
                    <div className="grid grid-cols-1  items-start justify-start gap-5 w-full">
                        <div className="flex flex-col items-start justify-start gap-5 max-w-lg w-full">
                            <h2 className="text-3xl text-button font-bold">
                                {t(`${servicesData[id].i18nKey}.titleService`)}
                            </h2>
                            <p className="text-[15px] text-button/80">
                                {t(
                                    `${servicesData[id].i18nKey}.descriptionService`,
                                )}
                            </p>
                            <p className="text-[15px] text-button/80">
                                {t(
                                    `${servicesData[id].i18nKey}.descriptionService2`,
                                )}
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-5 max-w-lg w-full">
                            <h2 className="text-2xl text-button font-bold">
                                {t(`${servicesData[id].i18nKey}.titleList`)}
                            </h2>
                            <ul className="flex flex-col  items-start justify-start gap-3">
                                {t
                                    .raw(
                                        `${servicesData[id].i18nKey}.listItems`,
                                    )
                                    .map((item: string, index: number) => (
                                        <li
                                            key={index}
                                            className="text-base flex items-center justify-center gap-3"
                                        >
                                            <span className="text-button-foreground">
                                                <CheckCircle className="w-5 h-5 " />
                                            </span>
                                            <span className="text-button/80">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1   items-start justify-between gap-5 w-full">
                        <div className="w-full rounded-md overflow-hidden aspect-video">
                            <Image
                                src={servicesData[id].imageUploadingOne}
                                alt={t(
                                    `${servicesData[id].i18nKey}.titleService`,
                                )}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full rounded-md overflow-hidden aspect-video">
                            <Image
                                src={servicesData[id].imageUploadingTwo}
                                alt={t(
                                    `${servicesData[id].i18nKey}.titleService`,
                                )}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center lg:col-span-2 mt-10">
                        <AnimatedButton
                            text={tUi("requestThisService")}
                            className="hover:text-button e"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
