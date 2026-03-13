import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { getTranslations } from "next-intl/server";
import {
    Box,
    Building2,
    CalendarCheck2,
    MapPin,
    Truck,
    Users,
} from "lucide-react";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";

type StatItem = {
    value: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const Stats = async () => {
    const t = await getTranslations("stats");
    const stats: StatItem[] = [
        {
            value: "3,000+",
            label: t("items.containersUnloaded"),
            icon: Box,
        },
        {
            value: "100+",
            label: t("items.teamMembers"),
            icon: Users,
        },
        {
            value: "200+",
            label: t("items.facilitiesServiced"),
            icon: Building2,
        },
        {
            value: "10+",
            label: t("items.citiesCovered"),
            icon: MapPin,
        },
        {
            value: "850+",
            label: t("items.completedOrders"),
            icon: Truck,
        },
        {
            value: "10+",
        label: t("items.yearsExperience"),
            icon: CalendarCheck2,
        },
    ];

    return (
        <section className="relative flex  w-full items-center justify-center bg-button px-4 py-20 md:py-24">
            <div className="flex w-full max-w-7xl flex-col items-start gap-10 lg:gap-20">
                <Reveal
                    className="flex flex-col items-start justify-start gap-3"
                >
                    <h2 className="text-md font-semibold uppercase tracking-[0.16em] text-button-foreground">
                        {t("eyebrow")}
                    </h2>
                    <p className="text-4xl font-bold text-white md:text-6xl">
                        {t("title")}
                    </p>
                </Reveal>

                <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {stats.map((item, index) => (
                        <Reveal
                            index={index}
                            delayNumber={0.15}
                            duration={0.25}
                            key={item.label}
                            className="flex flex-col items-center justify-start lg:justify-center text-center"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10">
                                <item.icon className="h-6 w-6 text-button-foreground" />
                            </div>
                            <p className="text-2xl lg:text-5xl font-bold text-white">
                                {item.value}
                            </p>
                            <p className="mt-2 text-base lg:text-lg text-white/70">
                                {item.label}
                            </p>
                        </Reveal>
                    ))}
                </div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff50_1px,transparent_1px)] bg-size-[24px_24px]" />
            </div>
        </section>
    );
};
