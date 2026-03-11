"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { cn } from "@/lib/utils";

type Locale = "en" | "he";

const LOCALES: readonly Locale[] = ["en", "he"];

const LOCALE_LABELS: Record<Locale, string> = {
    en: "EN",
    he: "HE",
};
export function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const displayLocale: Locale = LOCALES.includes(locale as Locale)
        ? (locale as Locale)
        : "he";

    const switchLocale = (newLocale: Locale) => {
        if (newLocale === displayLocale) return;
        setIsOpen(false);

        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent | TouchEvent) => {
            if (!rootRef.current) return;
            const target = event.target as Node | null;

            if (target && !rootRef.current.contains(target)) {
                setIsOpen(false);
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("touchstart", handlePointerDown);
        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("touchstart", handlePointerDown);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div ref={rootRef} className="relative">
            <Button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                disabled={isPending}
                className="min-w-12 gap-1 bg-transparent rounded-md text-white hover:bg-white/5 font-bold "
            >
                <span>
                    {LOCALE_LABELS[displayLocale] ?? displayLocale.toUpperCase()}
                </span>
                <ChevronDownIcon
                    className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                />
            </Button>
            {isOpen && (
                <div
                    className="absolute inset-e-0 top-full z-50 mt-1 right-1 min-w-14 overflow-hidden rounded-md border border-white/20 bg-white text-black shadow-md"
                    role="menu"
                >
                    {LOCALES.map((loc) => (
                        <button
                            key={loc}
                            type="button"
                            onClick={() => switchLocale(loc)}
                            disabled={isPending}
                            className={cn(
                                " w-full px-3 py-1.5 text-left text-sm uppercase transition-colors hover:bg-black/5 flex items-center justify-center text-button font-semibold",
                                loc === displayLocale && "bg-zinc-200 font-medium",
                            )}
                            role="menuitem"
                        >
                            {LOCALE_LABELS[loc]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
