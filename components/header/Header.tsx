"use client";

import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { SectionId, useSectionNavigation } from "@/hooks/useSectionNavigation";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import { MobileNav } from "../mobile-nav/MobileNav";

const navLinks: { id: SectionId; label: string }[] = [
    { id: "services", label: "Services" },
    { id: "about-us", label: "About Us" },
    { id: "process", label: "Work Process" },
];

export const Header = () => {
    const direction = useScrollDirection();
    const { activeSection, scrollToSection } = useSectionNavigation();

    return (
        <header
            className={cn(
                "flex justify-center items-center py-5 px-2 w-full fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out delay-100 bg-button border-b border-white/10",
                direction === "down" ? " -translate-y-full" : "translate-y-0",
            )}
        >
            <nav className="hidden md:flex w-full max-w-7xl items-center justify-between px-2">
                <Link
                    href="/"
                    className="flex items-center justify-center text-2xl uppercase"
                >
                    <span className="font-bold text-button-foreground">
                        horizon
                    </span>
                    <span className="font-semibold text-white">logistics</span>
                </Link>
                <div className="flex items-center justify-center gap-15">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            type="button"
                            onClick={() => scrollToSection(link.id)}
                            className="cursor-pointer text-sm font-semibold text-white transition-colors hover:text-button-foreground"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
                <div>
                    <AnimatedButton
                        text={"Contact Us"}
                        onClick={() => {
                            scrollToSection("contact");
                        }}
                    ></AnimatedButton>
                </div>
            </nav>
            <div className="flex md:hidden items-center justify-between w-full px-4">
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
