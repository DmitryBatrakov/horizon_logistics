"use client";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowRight, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import { useTranslations } from "next-intl";

export const MobileNav = () => {
    const t = useTranslations();
    const links = [
        { href: "/#services", label: t("mobileNav.links.services") },
        { href: "/#about-us", label: t("mobileNav.links.aboutUs") },
        { href: "/#faq", label: t("mobileNav.links.faq") },
        { href: "/#contact", label: t("mobileNav.links.requestQuote") },
        { href: "/#process", label: t("mobileNav.links.process") },
    ];

    return (
        <Drawer direction="top">
            <DrawerTrigger
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-button-foreground/40 text-button-foreground transition-colors hover:bg-button-foreground/10"
                aria-label={t("mobileNav.openMenuAriaLabel")}
            >
                <Menu className="size-5" />
            </DrawerTrigger>

            <DrawerContent className="min-h-screen border-none bg-button text-white">
                <DrawerHeader className="px-5 pt-6 pb-3">
                    <DrawerTitle className="text-left text-white text-2xl font-bold tracking-tight">
                        {t("mobileNav.title")}
                    </DrawerTitle>
                    <p className="text-left text-sm text-button-foreground">
                        {t("mobileNav.subtitle")}
                    </p>
                    <Separator className="mt-4 bg-white/20" />
                </DrawerHeader>

                <nav className="px-3 pb-2">
                    <ul className="space-y-2">
                        {links.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="group flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold transition-all hover:bg-white/10 active:scale-[0.98] "
                                >
                                    <span className="text-white group-hover:text-button-foreground transition-colors active:text-button-foreground">
                                        {item.label}
                                    </span>
                                    <ArrowRight className="size-4 text-white/70 transition-all group-hover:translate-x-1 group-hover:text-button-foreground" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <DrawerFooter className="mt-auto p-4">
                    <DrawerClose asChild>
                        <AnimatedButton
                            text={t("mobileNav.close")}
                            className="w-full uppercase font-bold border-white/30 bg-transparent text-white hover:bg-white/10 active:scale-[0.98]"
                        />
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
