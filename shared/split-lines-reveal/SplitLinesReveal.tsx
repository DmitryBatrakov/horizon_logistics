"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

type SplitLinesRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    trigger?: string;
};

export function SplitLinesReveal({
    children,
    className,
    delay = 0,
    duration = 0.8,
    stagger = 0.12,
    trigger = "top 85%",
}: SplitLinesRevealProps) {
    const root = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const target = root.current?.querySelector(".split-target");
        if (!target) return;
      
        const split = SplitText.create(target, { type: "lines", autoSplit: true });
        const anim = gsap.from(split.lines, {
            yPercent: 100,
            autoAlpha: 0,
            duration,
            delay,
            stagger,
            ease: "power3.out",
            scrollTrigger: { trigger: root.current, start: trigger, toggleActions: "play none none none" },
        });
      
        return () => {
          anim.kill();
          split.revert();
        };
      }, { scope: root });

    return (
        <div ref={root} className={cn(className)}>
            <div className="split-target w-full">{children}</div>
        </div>
    );
}
