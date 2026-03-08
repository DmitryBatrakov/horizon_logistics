"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useTransition } from "react";

type Locale = "en" | "he";

const LOCALES: readonly Locale[] = ["en", "he"];

/** Подписи для переключателя по локали */
const LOCALE_LABELS: Record<Locale, string> = {
    en: "EN",
    he: "HE",
};
export function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();

    const displayLocale: Locale = LOCALES.includes(locale as Locale)
        ? (locale as Locale)
        : "he";

    const switchLocale = (newLocale: Locale) => {
        if (newLocale === displayLocale) return;

        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="min-w-12 gap-1 bg-transparent rounded-mg text-white hover:bg-white/5"
                >
                    <span>
                        {LOCALE_LABELS[displayLocale] ??
                            displayLocale.toUpperCase()}
                    </span>
                    <ChevronDownIcon className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {LOCALES.map((loc) => (
                    <DropdownMenuItem
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={
                            loc === displayLocale
                                ? "bg-[#917355]/20 font-medium my-1 uppercase"
                                : ""
                        }
                    >
                        {LOCALE_LABELS[loc]}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
