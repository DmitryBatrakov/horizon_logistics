"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import heroBg from "@/assets/hero-bg.jpeg";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export const Hero = () => {
    const t = useTranslations("hero");
    const locale = useLocale();

    return (
        <section className="w-full min-h-screen relative overflow-hidden">
            <Image
                src={heroBg}
                alt={t("backgroundAlt")}
                className="object-cover z-0"
                sizes="100vw"
                fill
                priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-button/55 via-button/40 to-button/25 z-10" />
            <div className="absolute inset-0 bg-linear-to-r from-button/55 via-button/15 to-transparent z-10" />
            <div className="absolute inset-0 z-20 flex flex-col items-start justify-center max-w-7xl mx-auto w-full p-5 px-4md:px-10 gap-8">
                <SplitLinesReveal
                    stagger={0.2}
                    className="flex flex-col items-center justify-start gap-2 mt-20 "
                >
                    <h1 className="text-xs md:text-base uppercase font-bold text-button-foreground  tracking-[0.16em]">
                        {t("titlePrefix")}
                    </h1>
                    <div className={cn("text-white text-[3.5rem] md:text-8xl font-semibold  ", locale === 'he' ? 'text-[2.5rem]' : 'text-[3rem]')}>
                        {t("titleLine1")}
                    </div>
                    <div className={cn("text-button-foreground text-[3.5rem] md:text-8xl font-semibold  mb-5 md:mb-10", locale === 'he' ? 'text-[2.5rem]' : 'text-[3rem]')}>
                        {t("titleLine2")}
                    </div>
                    <div className="text-white text-md md:text-lg">
                        {t("description")}
                    </div>
                </SplitLinesReveal>
                <Reveal
                    delay={0.8}
                    className="flex justify-center md:justify-start items-center w-full"
                >
                    <div className="flex gap-5">
                        <AnimatedButton
                            text={t("cta")}
                            onClick={() => {
                                window.location.href = "#contact";
                            }}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
