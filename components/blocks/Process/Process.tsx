import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { CheckCircle2, ClipboardList, PhoneCall, Truck } from "lucide-react";

type ProcessStep = {
    number: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
};

const processSteps: ProcessStep[] = [
    {
        number: "01",
        title: "Get In Touch",
        description:
            "Call us or fill out the request form with details about your project.",
        icon: PhoneCall,
    },
    {
        number: "02",
        title: "Customized Plan",
        description:
            "We assess your needs and deliver a tailored quote within 24 hours.",
        icon: ClipboardList,
    },
    {
        number: "03",
        title: "Our Team Arrives On-Site",
        description:
            "Our trained crews arrive on-site, fully equipped and ready to work.",
        icon: Truck,
    },
    {
        number: "04",
        title: "Work Completed",
        description: "Quality-checked results delivered on time, every time.",
        icon: CheckCircle2,
    },
];

export const Process = () => {
    return (
        <section
            className="flex w-full items-center justify-center bg-secondary px-4 py-20 md:py-24 scroll-mt-28"
            id="process"
        >
            <div className="flex w-full max-w-7xl flex-col items-center gap-12">
                <Reveal className="flex flex-col items-center gap-3 text-center">
                    <h2 className="text-md font-semibold uppercase tracking-[0.16em] text-button-foreground">
                        our process
                    </h2>
                    <p className="text-4xl font-bold text-button md:text-6xl">
                        How We Work
                    </p>
                    <p className="max-w-2xl text-base text-button/70">
                        A simple transparent process from first contact to
                        project completion.
                    </p>
                </Reveal>

                <div className="relative grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
                    <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-button/15 xl:block" />

                    {processSteps.map((step, index) => (
                        <Reveal
                            index={index}
                            delayNumber={0.2}
                            delay={0.1}
                            duration={0.25}
                            key={step.number}
                            className="relative flex flex-col items-center justify-start gap-2 text-center"
                        >
                            <div className="relative mb-6">
                                <div className="flex size-16 items-center justify-center rounded-full border-2 border-button-foreground bg-white shadow-sm">
                                    <step.icon className="size-7 text-button-foreground" />
                                </div>
                                <span className="absolute -right-2 -top-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-button-foreground px-1 text-xs font-bold text-button">
                                    {step.number}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-start">
                                <h3 className="text-3xl font-semibold text-button">
                                    {step.title}
                                </h3>
                                <p className="mt-3 max-w-72 text-lg leading-7 text-button/70">
                                    {step.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
