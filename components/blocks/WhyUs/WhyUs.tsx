"use client";

import { ShieldCheck, Zap, HandHeart, TrendingUp, Clock3, ThumbsUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";

type WhyUsItem = {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const WhyUs = () => {
    const t = useTranslations("whyUs");

    const items: WhyUsItem[] = [
        {
            title: t("items.safety.title"),
            description: t("items.safety.description"),
            icon: ShieldCheck,
        },
        {
            title: t("items.rapidDeployment.title"),
            description: t("items.rapidDeployment.description"),
            icon: Zap,
        },
        {
            title: t("items.dedicatedSupport.title"),
            description: t("items.dedicatedSupport.description"),
            icon: HandHeart,
        },
        {
            title: t("items.scalableSolutions.title"),
            description: t("items.scalableSolutions.description"),
            icon: TrendingUp,
        },
        {
            title: t("items.onTimeGuarantee.title"),
            description: t("items.onTimeGuarantee.description"),
            icon: Clock3,
        },
        {
            title: t("items.trustedByLeaders.title"),
            description: t("items.trustedByLeaders.description"),
            icon: ThumbsUp,
        },
    ];

    return (
        <section
            id="why-us"
            className="flex w-full items-center justify-center bg-secondary px-4 py-20 md:py-24"
        >
            <div className="flex w-full max-w-7xl flex-col items-center gap-12">
                <SplitLinesReveal
                    stagger={0.18}
                    className="flex flex-col items-start justify-start gap-10 w-full"
                >
                    <h2 className="text-md font-semibold uppercase tracking-[0.16em] text-button-foreground">
                        {t("eyebrow")}
                    </h2>
                    <p className="text-4xl font-bold text-button md:text-6xl pt-2 pb-5">
                        {t("title")}
                    </p>
                    <p className="max-w-2xl text-base text-button/70 md:text-lg">
                        {t("description")}
                    </p>
                </SplitLinesReveal>

                <div className="grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <Reveal
                            key={item.title}
                            index={index}
                            delayNumber={0.14}
                            duration={0.25}
                            className="h-full"
                        >
                            <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-slate-100/75 p-7">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-button-foreground/15">
                                    <item.icon className="h-6 w-6 text-button-foreground" />
                                </div>
                                <h3 className="text-3xl font-semibold text-button">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-lg leading-7 text-button/70">
                                    {item.description}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
