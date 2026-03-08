"use client";

import { useEffect } from "react";

export function HomeScrollHandler() {
    useEffect(() => {
        const sectionId = sessionStorage.getItem("scrollToSection");
        if (!sectionId) return;
        sessionStorage.removeItem("scrollToSection");

        const scroll = () => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        if (document.readyState === "complete") {
            scroll();
        } else {
            window.addEventListener("load", scroll, { once: true });
        }
    }, []);
    return null;
}
