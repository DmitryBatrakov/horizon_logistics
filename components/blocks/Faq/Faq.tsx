import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";

type FaqItem = {
    question: string;
    answer: string;
};

export const Faq = async () => {
    const t = await getTranslations("faq");
    const faqItems: FaqItem[] = [
        {
            question: t("items.servicesQuestion"),
            answer: t("items.servicesAnswer"),
        },
        {
            question: t("items.workersQuestion"),
            answer: t("items.workersAnswer"),
        },
        {
            question: t("items.contractsQuestion"),
            answer: t("items.contractsAnswer"),
        },
        {
            question: t("items.trainedQuestion"),
            answer: t("items.trainedAnswer"),
        },
        {
            question: t("items.requestQuestion"),
            answer: t("items.requestAnswer"),
        },
    ];

    return (
        <section
            id="faq"
            className="flex w-full items-center justify-center bg-secondary px-4 py-20 md:py-28 shadow-2xl shadow-black/20"
        >
            <div className="flex w-full max-w-7xl flex-col items-start justify-start gap-5 lg:gap-15">
                <SplitLinesReveal
                    stagger={0.2}
                    className="flex flex-col items-center gap-2 "
                >
                    <h2 className="text-md font-semibold uppercase text-button-foreground tracking-[0.16em]">
                        Faq
                    </h2>
                    <p className="text-4xl font-bold text-button md:text-6xl">
                        {t("title")}
                    </p>
                </SplitLinesReveal>
                <Reveal delay={0.2} duration={0.25} className="w-full">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full rounded-xl border-none bg-transparent "
                    >
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={item.question}
                                value={`item-${index + 1}`}
                                className="border-border py-1 group"
                            >
                                <AccordionTrigger className="px-2 text-base font-semibold text-button hover:no-underline md:text-lg hover:bg-button-foreground hover:text-white transition-all duration-300">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-2 text-sm leading-6 text-button/80 md:text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Reveal>
            </div>
        </section>
    );
};
