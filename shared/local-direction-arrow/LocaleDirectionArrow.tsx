"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

type LocaleDirectionArrowProps = {
    className?: string;
    size?: number;
};

export const LocaleDirectionArrow = ({
    className,
    size = 18,
}: LocaleDirectionArrowProps) => {
    const locale = useLocale();

    if (locale === "he") {
        return <ArrowLeft size={size} className={className} />;
    }

    return <ArrowRight size={size} className={className} />;
};
