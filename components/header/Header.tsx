"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn, scrollToSection } from "@/lib/utils";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import { MobileNav } from "../mobile-nav/MobileNav";
import { LocaleSwitcher } from "../locale-switcher/locale-switcher";

type SectionId = "services" | "about-us" | "process" | "contact" | "faq";

export const Header = () => {
    const t = useTranslations();
    const direction = useScrollDirection();


    const navLinks: { id: SectionId; label: string }[] = [
        { id: "services", label: t("header.links.services") },
        { id: "about-us", label: t("header.links.aboutUs") },
        { id: "process", label: t("header.links.process") },
    ];

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
                        {t("brand.first")}
                    </span>
                    <span className="font-semibold text-white">
                        {t("brand.second")}
                    </span>
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
                <div className="flex items-center justify-center gap-5">
                    <LocaleSwitcher />
                    <AnimatedButton
                        text={t("header.contactCta")}
                        onClick={() => {
                            scrollToSection("contact");
                        }}
                    ></AnimatedButton>
                </div>
            </nav>
            <div className="flex md:hidden items-center justify-between w-full px-4">
                <div className="flex items-center justify-center text-2xl uppercase">
                    <span className="font-bold text-button-foreground">
                        {t("brand.first")}
                    </span>
                    <span className="font-semibold text-white">
                        {t("brand.second")}
                    </span>
                </div>
                <MobileNav />
            </div>
        </header>
    );
};
