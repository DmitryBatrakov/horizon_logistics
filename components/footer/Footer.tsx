import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const Footer = async () => {
    const t = await getTranslations();
    const quickLinks = [
        { href: "/#services", label: t("footer.links.services") },
        { href: "/#about-us", label: t("footer.links.aboutUs") },
        { href: "/#faq", label: t("footer.links.faq") },
        { href: "/#contact", label: t("footer.links.contact") },
        { href: "/#process", label: t("footer.links.process") },
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
        <footer className="sticky bottom-0 z-10 flex w-full items-center justify-center bg-button px-4 py-12 md:py-14">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
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

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">
                            {t("footer.quickLinks")}
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-white/70 transition-colors hover:text-button-foreground"
                                    >
                                        {item.label}
                                    </Link>
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

                <div className="mt-10 border-t border-white/10 pt-7 text-center">
                    <p className="text-sm text-white/55">
                        {t("footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
};
