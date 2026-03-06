import { useCallback, useEffect, useState } from "react";

export const SECTION_IDS = ["services", "about-us", "contact", "faq", "process"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

const HEADER_OFFSET = 96;

export function useSectionNavigation() {
    const [activeSection, setActiveSection] = useState<SectionId | null>(null);

    const scrollToSection = useCallback((sectionId: SectionId) => {
        if (typeof window === "undefined") return;

        if (window.location.pathname !== "/") {
            window.location.href = `/#${sectionId}`;
            return;
        }

        const section = document.getElementById(sectionId);
        if (!section) return;

        const top =
            section.getBoundingClientRect().top +
            window.scrollY -
            HEADER_OFFSET;

        window.scrollTo({ top, behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined" || window.location.pathname !== "/") {
            return;
        }

        const sections = SECTION_IDS.map((id) =>
            document.getElementById(id),
        ).filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const visibilityById = new Map<SectionId, number>();

        const updateHash = (sectionId: SectionId | null) => {
            const { pathname, search } = window.location;
            const nextHash = sectionId ? `#${sectionId}` : "";
            const nextUrl = `${pathname}${search}${nextHash}`;
            const currentUrl = `${pathname}${search}${window.location.hash}`;

            if (nextUrl !== currentUrl) {
                window.history.replaceState(null, "", nextUrl);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const id = entry.target.id as SectionId;
                    visibilityById.set(
                        id,
                        entry.isIntersecting ? entry.intersectionRatio : 0,
                    );
                }

                let nextActive: SectionId | null = null;
                let maxRatio = 0;

                visibilityById.forEach((ratio, id) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        nextActive = id;
                    }
                });

                if (!nextActive && window.scrollY < 120) {
                    setActiveSection(null);
                    updateHash(null);
                    return;
                }

                if (nextActive) {
                    setActiveSection(nextActive);
                    updateHash(nextActive);
                }
            },
            {
                root: null,
                rootMargin: "-96px 0px -45% 0px",
                threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
            },
        );

        for (const section of sections) {
            visibilityById.set(section.id as SectionId, 0);
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return { activeSection, scrollToSection };
}
