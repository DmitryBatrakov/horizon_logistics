"use client";

import { useEffect, useState } from "react";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setReady(true), 3000);
        return () => clearTimeout(t);
    }, []);

    if (!ready) {
        return (
            <div className="w-full min-h-screen bg-button flex items-center justify-center">
                <p className="text-white text-2xl font-bold">Horizon Logistics</p>
            </div>
        );
    }

    return <div className="animate-fade-in">{children}</div>;
};