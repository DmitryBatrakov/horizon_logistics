import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { Container, Users, Warehouse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";

type ServicesProps = {
    title: string;
    description: string;
    link: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const OurServices = async () => {
    const t = await getTranslations("ourServices");
    const services: ServicesProps[] = [
        {
            title: t("items.containerUnloading.title"),
            description: t("items.containerUnloading.description"),
            link: "/services/container-unloading",
            icon: Container,
        },
        {
            title: t("items.workforceStaffing.title"),
            description: t("items.workforceStaffing.description"),
            link: "/services/workforce-staffing",
            icon: Users,
        },
        {
            title: t("items.warehouseMaintenance.title"),
            description: t("items.warehouseMaintenance.description"),
            link: "/services/warehouse-maintenance",
            icon: Warehouse,
        },
    ];

    // const Arrow = dir = "rtl" ? ArrowLeft : ArrowRight;

    return (
        <section
            className="flex items-center justify-center w-full "
            id="services"
        >
            <div className="flex flex-col items-center justify-center max-w-7xl w-full gap-20 px-4 py-20 md:py-30">
                <SplitLinesReveal stagger={0.2} delay={0.2} className="flex flex-col gap-2 items-center justify-start h-full">
                    <h2 className="text-md font-semibold uppercase text-button-foreground">
                        {t("eyebrow")}
                    </h2>
                    <p className=" text-5xl md:text-6xl text-button font-bold">
                        {t("title")}
                    </p>
                </SplitLinesReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {services.map((s,index) => (
                        <Reveal  key={s.title} index={index} delayNumber={0.2} delay={0.3} duration={0.25}>
                            <Card
                                className="w-full h-full flex flex-col justify-between group border border-border rounded-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
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
                                        <ArrowRight className="w-4 h-4" />
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
