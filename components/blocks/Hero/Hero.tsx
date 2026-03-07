"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import heroBg from "@/assets/hero-bg.jpeg";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

export const Hero = () => {
    const t = useTranslations("hero");
    const root = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            SplitText.create(".split-lines", {
                type: "lines",
                mask: "lines",
                autoSplit: true,
                onSplit(self) {
                    return gsap.from(self.lines, {
                        yPercent: 100,
                        autoAlpha: 0,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: "power3.out",
                    });
                },
            });
        },
        { scope: root },
    );

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

            <div className="absolute inset-0 bg-linear-to-t from-button/55 via-button/50 to-button/25 z-10" />
            <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center max-w-7xl mx-auto w-full"
                ref={root}
            >
                <div className="flex flex-col items-center justify-center p-5 mt-20 ">
                    <h1 className="text-md uppercase font-bold text-button-foreground split-lines">
                        {t("titlePrefix")}
                    </h1>
                    <div className="text-white text-5xl md:text-7xl font-semibold split-lines text-center leading-tight">
                        {t("titleLine1")}
                    </div>
                    <div className="text-button-foreground text-5xl md:text-7xl font-semibold split-lines text-center leading-tight">
                        {t("titleLine2")}
                    </div>
                    <p className="text-white text-md md:text-lg mt-5 lg:mt-10 w-full text-center max-w-xl split-lines">
                        {t("description")}
                    </p>
                </div>
                <Reveal delay={0.2}>
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
