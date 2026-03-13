"use client";

import { useEffect } from "react";



export function HomeScrollHandler() {
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;
        const sectionId = decodeURIComponent(hash.slice(1));
        if (!sectionId) return;

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
