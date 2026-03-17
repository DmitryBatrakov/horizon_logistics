"use client";

import { useEffect, useState } from "react";

export default function Loading() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 3000); 
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="w-full min-h-screen bg-button flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-button-foreground">
                <p>Horizon logistics</p>
            </div>
        </div>
    );
}