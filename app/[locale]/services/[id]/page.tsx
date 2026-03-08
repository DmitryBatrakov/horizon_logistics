import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { servicesData } from "@/data/services-data";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";
import { ArrowLeft, ArrowRight, Container, CheckCircle } from "lucide-react";
import Link from "next/link";

const SERVICE_IDS = [
    "container-unloading",
    "factory-stuffing",
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

export default async function ServicePage({
    params,
}: {
    params: Promise<{ locale: string; id: string }>;
}) {
    const { id: rawId } = await params;
    const id = assertServiceId(rawId);

    const { locale } = await params;

    console.log("locale: ", locale);

    const t = await getTranslations("servicePages");

    return (
        <section className="w-full min-h-screen relative overflow-hidden bg-white">
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center">
                <Image
                    src={servicesData[id].image}
                    alt={t(`${servicesData[id].i18nKey}.titleService`)}
                    fill
                    className="object-cover h-ful w-full rounded-2xl md:rounded-b-[80px]"
                />

                {/* <div className="absolute inset-0 bg-linear-to-t from-button/55 via-button/40 to-button/25 z-10 rounded-b-[80px]" /> */}
                <div className="absolute inset-0 bg-linear-to-r from-button/55 via-button/30 to-transparent z-10 rounded-2xl md:rounded-b-[80px]" />
                <div className="absolute inset-0 z-20 flex flex-col items-start justify-center max-w-7xl mx-auto w-full gap-8 px-2 mt-10">
                    <SplitLinesReveal
                        stagger={0.2}
                        className="flex flex-col items-start justify-center w-full "
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
                                Back to home
                            </span>
                        </Link>
                        <div className="tracking-[0.16em] flex items-center justify-start gap-8 pt-4 pb-3">
                            <div className="w-16 h-16 bg-button-foreground rounded-md flex items-center justify-center">
                                <Container size={30} className="text-black" />
                            </div>
                            <h1 className="text-2xl md:text-5xl font-bold text-white flex items-center justify-center gap-2">
                                {t(`${servicesData[id].i18nKey}.titleHero`)}
                            </h1>
                        </div>
                        <div className="text-white/80 text-base font-semibold ">
                            {t(`${servicesData[id].i18nKey}.subtitleHero`)}
                        </div>
                    </SplitLinesReveal>
                </div>
            </div>
            <div className="min-h-screen w-full flex items-start justify-center py-20">
                <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-2 tems-center justify-between gap-5">
                    <div className="flex flex-col items-start justify-start gap-5 w-full">
                        <h2 className="text-4xl text-black">
                            {t(`${servicesData[id].i18nKey}.titleService`)}
                        </h2>
                        <p className="text-base text-button/80">
                            {t(
                                `${servicesData[id].i18nKey}.descriptionService`,
                            )}
                        </p>
                    </div>
                    <div className="w-full rounded-md overflow-hidden aspect-video">
                        <Image
                            src={servicesData[id].image}
                            alt={t(`${servicesData[id].i18nKey}.titleService`)}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex items-start justify-start">
                        <ul className="flex flex-col items-start justify-start gap-3">
                            {t
                                .raw(`${servicesData[id].i18nKey}.listItems`)
                                .map((item: string, index: number) => (
                                    <li
                                        key={index}
                                        className="text-base text-black flex items-center justify-center gap-3"
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
                        <div className="w-full rounded-md overflow-hidden aspect-video">
                            <Image
                                src={servicesData[id].image}
                                alt={t(
                                    `${servicesData[id].i18nKey}.titleService`,
                                )}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
