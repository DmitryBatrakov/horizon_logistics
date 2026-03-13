"use client";

import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionId } from "../header/Header";
import { usePathname, useRouter } from "@/i18n/navigation";
import { handleNavigateToSection } from "@/lib/utils";

export const Footer = () => {
    const t = useTranslations();
    const pathname = usePathname();
    const router = useRouter();

    const navLinks: { id: SectionId; label: string }[] = [
        { id: "services", label: t("footer.links.services") },
        { id: "about-us", label: t("footer.links.aboutUs") },
        { id: "process", label: t("footer.links.process") },
        { id: "contact", label: t("footer.links.contact") },
    ];

    const contactItems = [
        {
            icon: Phone,
            text: t("footer.contactItems.phone"),
            href: "tel:+15551234567",
        },
        {
            icon: Mail,
            text: t("footer.contactItems.email"),
            href: "mailto:info@horizonlogistics.com",
        },
        {
            icon: MapPin,
            text: t("footer.contactItems.address"),
            href: "#",
        },
    ];

    return (
        <footer className="relative flex w-full items-center justify-center bg-button px-4 py-6 md:py-14">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2  md:gap-8">
                    <div className="space-y-4">
                        <div className="text-3xl font-semibold uppercase leading-none">
                            <span className="font-bold text-button-foreground">
                                {t("brand.first")}
                            </span>
                            <span className="text-white">
                                {t("brand.second")}
                            </span>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-white/65">
                            {t("footer.description")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-white">
                                {t("footer.quickLinks")}
                            </h3>
                            <ul className="space-y-2">
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <button
                                            type="button"
                                            onClick={() => handleNavigateToSection(item.id, pathname, router )}
                                            className="cursor-pointer text-base text-white/70 transition-colors hover:text-button-foreground"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-white">
                                {t("footer.contact")}
                            </h3>
                            <ul className="space-y-3">
                                {contactItems.map((item) => (
                                    <li key={item.text}>
                                        <Link
                                            href={item.href}
                                            className="group inline-flex items-start gap-3 text-white/70 transition-colors hover:text-button-foreground"
                                        >
                                            <item.icon className="mt-1 size-4 shrink-0 text-button-foreground/80 group-hover:text-button-foreground" />
                                            <span className="text-base leading-6">
                                                {item.text}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-7 text-center">
                    <p className="text-sm text-white/55">
                        {t("footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
};
