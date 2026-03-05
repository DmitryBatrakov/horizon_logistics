"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import Link from "next/link";
import { MobileNav } from "../mobile-nav/MobileNav";

export const Header = () => {
    const direction = useScrollDirection();

    return (
        <header
            className={cn(
                "flex justify-center items-center py-5 px-2 w-full fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out delay-100 bg-button",
                direction === "down" ? " -translate-y-full" : "translate-y-0",
            )}
        >
            <nav className="hidden md:flex w-full max-w-7xl items-center justify-between px-2">
                <div className="flex items-center justify-center text-2xl uppercase">
                    <span className="font-bold text-button-foreground">
                        horizon
                    </span>
                    <span className="font-semibold text-white">logistics</span>
                </div>
                <div className="flex items-center justify-center gap-15">
                    <Link
                        href={"/"}
                        className="text-sm font-semibold text-white hover:text-button-foreground"
                    >
                        Services
                    </Link>
                    <Link
                        href={"/"}
                        className="text-sm font-semibold text-white hover:text-button-foreground"
                    >
                        About Us
                    </Link>
                    <Link
                        href={"/"}
                        className="text-sm font-semibold text-white hover:text-button-foreground"
                    >
                        Faq`s
                    </Link>
                </div>
                <div>
                    <AnimatedButton
                        text={"Contact Us"}
                        onClick={() => {}}
                    ></AnimatedButton>
                </div>
            </nav>
            <div className="md:hidden flex items-center justify-between w-full px-4">
                <div className="flex items-center justify-center text-2xl uppercase">
                    <span className="font-bold text-button-foreground">
                        horizon
                    </span>
                    <span className="font-semibold text-white">logistics</span>
                </div>
                <MobileNav />
            </div>
        </header>
    );
};
