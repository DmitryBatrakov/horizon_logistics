import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";

type FaqItem = {
    question: string;
    answer: string;
};

const faqItems: FaqItem[] = [
    {
        question: "What services does your company provide?",
        answer: "We provide container unloading services in ports, warehouse cleaning and maintenance, and workforce supply for factories, warehouses, and logistics centers.",
    },
    {
        question: "How quickly can you provide workers?",
        answer: "In most cases we can provide workers within a short time depending on the project size. Our team is flexible and ready to scale according to your operational needs.",
    },
    {
        question: "Do you work with long-term contracts?",
        answer: "Yes, we work with both short-term and long-term contracts. Many of our partners use our services on a regular basis for continuous logistics operations.",
    },
    {
        question: "Are your workers trained and experienced?",
        answer: "Yes, all workers are trained and experienced in logistics operations, container unloading, and warehouse work. Safety and efficiency are our top priorities.",
    },
    {
        question: "Do you work with factories and logistics centers?",
        answer: "Yes, we cooperate with factories, warehouses, logistics hubs, and distribution centers that require reliable workforce and operational support.",
    },
    {
        question: "How can we request your services?",
        answer: "You can contact us through the website form or by phone. Our team will quickly review your request and provide the best solution for your business needs.",
    },
];

export const Faq = () => {
    return (
        <section
            id="faq"
            className="flex w-full items-center justify-center bg-secondary px-4 py-20 md:py-28 scroll-mt-28"
        >
            <Reveal
                duration={0.3}
                delay={0.3}
                className="flex w-full max-w-3xl flex-col items-center gap-10"
            >
                <div className="flex flex-col items-center gap-2 text-center">
                    <h2 className="text-md font-semibold uppercase text-button-foreground">
                        questions
                    </h2>
                    <p className="text-4xl font-bold text-button md:text-6xl">
                        Frequently Asked Questions
                    </p>
                </div>

                <Reveal
                    delayNumber={0.15}
                    duration={0.25}
                    className="border-border py-1"
                >
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full rounded-xl border bg-white px-6 py-4 md:px-8"
                    >
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={item.question}
                                value={`item-${index + 1}`}
                                className="border-border py-1"
                            >
                                <AccordionTrigger className="text-base font-semibold text-button hover:no-underline md:text-lg">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm leading-6 text-button/80 md:text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Reveal>
            </Reveal>
        </section>
    );
};
