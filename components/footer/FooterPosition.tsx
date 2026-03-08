"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type FooterPositionProps = {
    children: ReactNode;
};

export function FooterPosition({ children }: FooterPositionProps) {
    const pathname = usePathname();
    const isHome = /^\/(en|he)\/?$/.test(pathname);

    return (
        <div className={isHome ? "sticky bottom-0 z-0" : "relative z-40"}>
            {children}
        </div>
    );
}
