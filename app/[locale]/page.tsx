import { AboutUs } from "@/components/blocks/AboutUs/AboutUs";
import { ContactUs } from "@/components/blocks/ContactUs/ContactUs";
import { Faq } from "@/components/blocks/Faq/Faq";
import { Hero } from "@/components/blocks/Hero/Hero";
import { Process } from "@/components/blocks/Process/Process";
import { OurServices } from "@/components/blocks/OurServices/OurServices";
import { Stats } from "@/components/blocks/Stats/Stats";

export default function Home() {
    return (
        <div className="relative ">
            <Hero />
            <AboutUs />
            <section className="relative z-20">
                <div className="sticky top-0 h-screen">
                    <OurServices />
                </div>
                <div className="relative z-30 min-h-[200vh]">
                    <Stats />
                    <Process />
                </div>
            </section>
            <section className="relative z-10 mt-[-100vh]">
                <div className="sticky top-0 min-h-screen">
                    <ContactUs />
                </div>
                <div className="h-screen pointer-events-none" />
            </section>
            <section className="relative z-40">
                <Faq />
            </section>
        </div>
    );
}
