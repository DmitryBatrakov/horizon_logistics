"use client";

import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpeg";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";

export const Hero = () => {
    return (
        <section className="w-full min-h-screen relative overflow-hidden">
            <Image
                src={heroBg}
                alt="Hero background image"
                className="object-cover z-0"
                sizes="100vw"
                fill
                priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-button/55 via-button/50 to-button/25 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center max-w-7xl mx-auto w-full">
                <Reveal className="flex flex-col items-center justify-center p-5 mt-20">
                    <h1 className="text-md uppercase font-bold text-button-foreground">
                        trusted logistics partner
                    </h1>
                    <span className="text-white text-5xl md:text-7xl font-semibold">
                        Powering your
                    </span>
                    <span className="text-button-foreground text-5xl md:text-7xl font-semibold">
                        Supply Chain
                    </span>
                    <span className="text-white text-md md:text-lg mt-5 lg:mt-10 w-full text-center lg:w-1/2">
                        Container unloading, workforce staffing and warehouse
                        maintenance - all under one roof
                    </span>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="flex gap-5">
                        <AnimatedButton
                            text="Get a Quote"
                            onClick={() => {
                                window.location.href = "#contact";
                            }}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
