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
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AnimatedButton } from "@/shared/animated-button/animated-button";
import { useTranslations } from "next-intl";
import { SectionId } from "../header/Header";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useRef } from "react";
import { LocaleDirectionArrow } from "../../shared/local-direction-arrow/LocaleDirectionArrow";

export const MobileNav = () => {
    const t = useTranslations();
    const router = useRouter();
    const pathname = usePathname();
    const pendingSectionRef = useRef<SectionId | null>(null);
    

    const navLinks: { id: SectionId; label: string }[] = [
        { id: "services", label: t("header.links.services") },
        { id: "about-us", label: t("header.links.aboutUs") },
        { id: "process", label: t("header.links.process") },
    ];

    return (
        <Drawer direction="top">
            <DrawerTrigger
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-button-foreground/40 text-button-foreground transition-colors hover:bg-button-foreground/10"
                aria-label={t("mobileNav.openMenuAriaLabel")}
            >
                <Menu className="size-5" />
            </DrawerTrigger>

            <DrawerContent
                className="min-h-screen border-none bg-button text-white"
                onTransitionEnd={() => {
                    if (pendingSectionRef.current && pathname === "/") {
                        const id = pendingSectionRef.current;
                        pendingSectionRef.current = null;
                        document.getElementById(id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }}
            >
                <DrawerHeader className="px-5 pt-6 pb-3">
                    <DrawerTitle className=" text-white text-2xl font-bold tracking-tight">
                        {t("mobileNav.title")}
                    </DrawerTitle>
                    <p className=" text-sm text-button-foreground">
                        {t("mobileNav.subtitle")}
                    </p>
                    <Separator className="mt-4 bg-white/20" />
                </DrawerHeader>

                <nav className="px-3 pb-2 max-w-xl w-full mx-auto">
                    <ul className="space-y-2">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <DrawerClose asChild>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (pathname === "/") {
                                                pendingSectionRef.current =
                                                    item.id;
                                                return;
                                            }
                                            sessionStorage.setItem(
                                                "scrollToSection",
                                                item.id,
                                            );
                                            router.push("/");
                                        }}
                                        className="group flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold transition-all hover:bg-white/10 active:scale-[0.98] "
                                    >
                                        <span className="text-white group-hover:text-button-foreground transition-colors active:text-button-foreground">
                                            {item.label}
                                        </span>
                                        <LocaleDirectionArrow className="transition-colors group-hover:text-button-foreground" />
                                    </button>
                                </DrawerClose>
                            </li>
                        ))}
                    </ul>
                </nav>

                <DrawerFooter className="mt-auto p-4 max-w-xl w-full mx-auto">
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
