"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    duration?: number;
    once?: boolean;
    index?: number;
    delayNumber?: number;
};

export const Reveal = ({
    children,
    className,
    delay = 0,
    y = 30,
    duration = 0.6,
    once = true,
    index = 0,
    delayNumber = 0,
}: RevealProps) => {
    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: "some" }}
            transition={{ duration, delay: delay + index * delayNumber, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};
