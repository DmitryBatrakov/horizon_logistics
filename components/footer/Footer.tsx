import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact us" },
    { href: "/#process", label: "Work Process" },
];

const contactItems = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "info@horizonlogistics.com", href: "mailto:info@horizonlogistics.com" },
    { icon: MapPin, text: "1200 Harbor Blvd, Suite 300, Long Beach, CA", href: "#" },
];

export const Footer = () => {
    return (
        <footer className="flex w-full items-center justify-center bg-button px-4 py-12 md:py-14">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                    <div className="space-y-4">
                        <div className="text-3xl font-semibold uppercase leading-none">
                            <span className="font-bold text-button-foreground">
                                horizon
                            </span>
                            <span className="text-white">logistics</span>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-white/65">
                            Your trusted partner for port operations, workforce
                            solutions, and facility maintenance.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">
                            Quick Links
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
                            Contact
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
                        © 2026 Horizon Logistics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
