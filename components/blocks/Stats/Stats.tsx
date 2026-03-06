import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import {
    Box,
    Building2,
    CalendarCheck2,
    MapPin,
    Truck,
    Users,
} from "lucide-react";

type StatItem = {
    value: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
};

const stats: StatItem[] = [
    {
        value: "3,000+",
        label: "Containers Unloaded",
        icon: Box,
    },
    {
        value: "100+",
        label: "Team members",
        icon: Users,
    },
    {
        value: "200+",
        label: "Warehouse & Facilities serviced",
        icon: Building2,
    },
    {
        value: "10+",
        label: "Cities Covered",
        icon: MapPin,
    },
    {
        value: "850+",
        label: "Completed Orders",
        icon: Truck,
    },
    {
        value: "10+",
        label: "Years of industry experience",
        icon: CalendarCheck2,
    },
];

export const Stats = () => {
    return (
        <section className="flex w-full items-center justify-center bg-button px-4 py-20 md:py-24">
            <div className="flex w-full max-w-7xl flex-col items-center gap-14">
                <div className="flex flex-col items-center gap-3 text-center">
                    <h2 className="text-md font-semibold uppercase tracking-[0.18em] text-button-foreground">
                        by the numbers
                    </h2>
                    <p className="text-4xl font-bold text-white md:text-6xl">
                        Company Statistics
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((item, index) => (
                        <Reveal
                            index={index}
                            delayNumber={0.15}
                            duration={0.25}
                            key={item.label}
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                                <item.icon className="h-6 w-6 text-button-foreground" />
                            </div>
                            <p className="text-5xl font-bold text-white">
                                {item.value}
                            </p>
                            <p className="mt-2 text-lg text-white/70">
                                {item.label}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
