import Image from "next/image";
import { getTranslations } from "next-intl/server";
import aboutUsImage from "@/assets/about-us.jpeg";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockCheck, Container, User2, Handshake } from "lucide-react";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";

type StatItem = {
    value: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const AboutUs = async () => {
    const t = await getTranslations("aboutUs");
    const stats: StatItem[] = [
        {
            value: "10+",
            label: t("stats.experience"),
            icon: ClockCheck,
        },
        {
            value: "3,000+",
            label: t("stats.containersMonthly"),
            icon: Container,
        },
        {
            value: "100+",
            label: t("stats.workers"),
            icon: User2,
        },
        {
            value: "40+",
            label: t("stats.partners"),
            icon: Handshake,
        },
    ];

    return (
        <section
            id="about-us"
            className="flex items-center justify-center w-full bg-secondary scroll-mt-5 "
        >
            <div className="flex flex-col items-center justify-center max-w-7xl py-20 px-4 gap-10 md:gap-20">
                <div className="flex flex-col items-center justify-center gap-10 px-4">
                    <SplitLinesReveal stagger={0.2} className="flex flex-col gap-2  items-center justify-start h-full">
                        <h2 className="text-md font-semibold uppercase text-button-foreground text-center">
                            {t("eyebrow")}
                        </h2>
                        <p className=" text-5xl md:text-6xl text-button font-bold text-center">
                            {t("title")}
                        </p>
                    </SplitLinesReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
                    <Reveal
                        delay={0.2}
                        className="flex flex-col items-center justify-center gap-10"
                    >
                        <div>
                            <div className="text-button text-md">
                            {t("description")}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
                            {stats.map((stat, index) => (
                                <Reveal
                                    delay={0.25}
                                    index={index}
                                    duration={0.15}
                                    delayNumber={0.15}
                                    key={stat.label}
                                    className="w-full h-full flex"
                                >
                                    <Card className="p-5 w-full h-full min-h-[240px]">
                                        <CardHeader className="text-3xl font-bold text-button text-center">
                                            <CardTitle className="flex flex-col items-center justify-center gap-4">
                                                <div className="bg-button-foreground/5 rounded-full p-3">
                                                    <stat.icon className="size-10 text-button-foreground" />
                                                </div>
                                                <span className="text-4xl font-bold">
                                                    {stat.value}
                                                </span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardFooter className="text-center flex items-start justify-center">
                                            <p className="text-button font-semibold">
                                                {stat.label}
                                            </p>
                                        </CardFooter>
                                    </Card>
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal
                        delay={0.2}
                        className="relative w-full min-h-[500px] h-full rounded-lg overflow-hidden"
                    >
                        <Image
                            src={aboutUsImage}
                            alt={t("imageAlt")}
                            className="object-cover"
                            fill
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
