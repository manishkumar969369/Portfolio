'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Reveal — scroll reveal that FAILS OPEN.
 * Content renders fully visible by default. On the client we only "arm" the hidden
 * state for BELOW-the-fold elements, then fade + lift them in via IntersectionObserver.
 * If JS, the observer, or reduced-motion are in play, content is simply left visible —
 * nothing ever gets stuck invisible, and above-the-fold content never flashes.
 */
export default function Reveal({
    as: Tag = 'div',
    children,
    className = '',
    delay = 0,
    y = 34,
    ...props
}) {
    const ref = useRef(null);
    const [armed, setArmed] = useState(false);
    const [shown, setShown] = useState(true);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // already visible (above the fold) → leave as-is, no flash
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) return;

        setArmed(true);
        setShown(false);

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShown(true);
                        io.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const style = armed
        ? {
              transition: `opacity 0.7s var(--ease-premium) ${delay}s, transform 0.7s var(--ease-premium) ${delay}s`,
              opacity: shown ? 1 : 0,
              transform: shown ? 'none' : `translateY(${y}px)`,
              willChange: 'opacity, transform',
          }
        : undefined;

    return (
        <Tag ref={ref} className={className} style={style} {...props}>
            {children}
        </Tag>
    );
}
