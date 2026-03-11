"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { Container, Users, Warehouse } from "lucide-react";
import Link from "next/link";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";
import { useTranslations } from "next-intl";
import { LocaleDirectionArrow } from "@/shared/local-direction-arrow/LocaleDirectionArrow";

type ServicesProps = {
    id: string;
    title: string;
    description: string;
    link: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const OurServices = () => {
    const t = useTranslations("ourServices");


    const services: ServicesProps[] = [
        {
            id: "container-unloading",
            title: t("items.containerUnloading.title"),
            description: t("items.containerUnloading.description"),
            link: "/services/container-unloading",
            icon: Container,
        },
        {
            id: "factory-staffing",
            title: t("items.workforceStaffing.title"),
            description: t("items.workforceStaffing.description"),
            link: "/services/factory-staffing",
            icon: Users,
        },
        {
            id: "warehouse-cleaning",
            title: t("items.warehouseMaintenance.title"),
            description: t("items.warehouseMaintenance.description"),
            link: "/services/warehouse-cleaning",
            icon: Warehouse,
        },
    ];

    // const Arrow = dir = "rtl" ? ArrowLeft : ArrowRight;

    return (
        <section
            className="flex items-center justify-center w-full bg-white"
            id="services"
        >
            <div className="flex flex-col  items-start justify-start max-w-7xl w-full gap-10 lg:gap-20 px-4 py-20 md:py-28">
                <SplitLinesReveal
                    stagger={0.2}
                    delay={0.2}
                    className="flex flex-col gap-2 items-center justify-center md:items-left md:justify-start h-full"
                >
                    <h2 className="text-md font-semibold uppercase text-button-foreground tracking-[0.16em]">
                        {t("eyebrow")}
                    </h2>
                    <p className=" text-5xl md:text-6xl text-button font-bold">
                        {t("title")}
                    </p>
                </SplitLinesReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
                    {services.map((s, index) => (
                        <Reveal
                            key={s.title}
                            index={index}
                            delayNumber={0.2}
                            delay={0.3}
                            duration={0.25}
                        >
                            <Card className="w-full h-full flex flex-col justify-between group border border-border rounded-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <CardHeader>
                                    <CardTitle>
                                        <div className="w-14 h-14 rounded-lg bg-button flex items-center justify-center mb-6 group-hover:bg-button-foreground transition-colors">
                                            <s.icon className="text-white" />
                                        </div>
                                        <p>{s.title}</p>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{s.description}</p>
                                </CardContent>
                                <CardFooter className="flex items-center w-full justify-start mt-auto">
                                    <Link
                                        href={s.link}
                                        className="flex items-center justify-between gap-1 text-button font-semibold text-sm group-hover:gap-2 group-hover:text-button-foreground transition-all duration-300"
                                    >
                                        <p>{t("learnMore")} </p>
                                        <LocaleDirectionArrow className="transition-colors group-hover:text-button-foreground" />
                                    </Link>
                                </CardFooter>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
