import { Hero } from "@/components/blocks/Hero/Hero";
import { OurServices } from "@/components/blocks/OurServices/OurServices";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-start">
            <Hero />
            <OurServices />
        </div>
    );
}
