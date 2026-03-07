import { AboutUs } from "@/components/blocks/AboutUs/AboutUs";
import { ContactUs } from "@/components/blocks/ContactUs/ContactUs";
import { Faq } from "@/components/blocks/Faq/Faq";
import { Hero } from "@/components/blocks/Hero/Hero";
import { Process } from "@/components/blocks/Process/Process";
import { OurServices } from "@/components/blocks/OurServices/OurServices";
import { Stats } from "@/components/blocks/Stats/Stats";
import { WhyUs } from "@/components/blocks/WhyUs/WhyUs";

export default function Home() {
    return (
        <div className="relative z-10">
            <Hero />
            <AboutUs />

            <OurServices />
            <WhyUs />

            <Stats />
            <Process />

            <ContactUs />
            <Faq />
        </div>
    );
}
