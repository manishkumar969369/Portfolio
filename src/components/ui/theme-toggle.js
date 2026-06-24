'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { PiSunDim, PiMoonStars } from 'react-icons/pi';

export default function ThemeToggle({ className = '' }) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`inline-flex size-9 items-center justify-center text-stone-600 transition-colors hover:bg-muted hover:text-foreground dark:text-stone-300 ${className}`}
        >
            {/* render a stable icon until mounted to avoid hydration mismatch */}
            {mounted && isDark ? (
                <PiSunDim className="size-5" />
            ) : (
                <PiMoonStars className="size-5" />
            )}
        </button>
    );
}
