import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Container,
    Users,
    Warehouse,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";

type ServicesProps = {
    title: string;
    description: string;
    link: string;
    icon: React.ComponentType<{ className?: string }>;
};

const services: ServicesProps[] = [
    {
        title: "Container Unloading",
        description:
            "We unload containers from ships and trucks, ensuring that your goods are unloaded safely and efficiently.",
        link: "/services/container-unloading",
        icon: Container,
    },
    {
        title: "Workforce Staffing",
        description:
            "We staff your workforce with the best workers in the industry, ensuring that your goods are unloaded safely and efficiently.",
        link: "/services/workforce-staffing",
        icon: Users,
    },
    {
        title: "Warehouse Maintenance",
        description:
            "We maintain your warehouse, ensuring that your goods are stored safely and efficiently.",
        link: "/services/warehouse-maintenance",
        icon: Warehouse,
    },
];

export const OurServices = () => {
    // const Arrow = dir = "rtl" ? ArrowLeft : ArrowRight;

    return (
        <section className="flex items-center justify-center w-full ">
            <div className="flex flex-col items-center justify-center max-w-7xl w-full gap-10 px-4 py-30">
                <div className="flex flex-col gap-2 items-center justify-start h-full">
                    <h2 className="text-md font-semibold uppercase text-button-foreground">
                        what we do
                    </h2>
                    <p className="text-5xl text-button font-bold">
                        Our Services
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {services.map((s) => (
                        <Card
                            key={s.title}
                            className="flex flex-col justify-between group border border-border rounded-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                                    <p>Learn More </p>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
