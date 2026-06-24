import { PiArrowRight } from 'react-icons/pi';

/**
 * ⭐ ClipButton — the notched CTA. Echoes the cut-corner card geometry on a button:
 * an outer clip-mini-notch amber border layer wrapping an inner clip-mini-notch fill.
 * This is the preferred PRIMARY CTA across the portfolio.
 */
export function ClipButton({
    href,
    children,
    onClick,
    download,
    target,
    type = 'button',
    notch = '10px',
    border = 'bg-amber-300 dark:bg-amber-400',
    className = '',
    innerClassName = '',
}) {
    const inner = (
        <span
            className={`clip-mini-notch inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors duration-300 hover:bg-foreground/90 ${innerClassName}`}
        >
            {children}
        </span>
    );

    const outerClass = `clip-mini-notch group inline-flex p-[1.5px] ${border} transition-transform duration-300 hover:-translate-y-0.5 ${className}`;
    const style = { '--notch': notch };

    if (href) {
        return (
            <a
                href={href}
                onClick={onClick}
                download={download}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={outerClass}
                style={style}
            >
                {inner}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={outerClass} style={style}>
            {inner}
        </button>
    );
}

/**
 * PillButton — the rounded marketing CTA (used alongside the notched button).
 * variant="primary"   → solid dark pill with a trailing arrow that nudges on hover.
 * variant="secondary" → glassy outlined pill.
 */
export function PillButton({
    href,
    children,
    onClick,
    download,
    target,
    type = 'button',
    variant = 'primary',
    icon,
    arrow = false,
    className = '',
}) {
    const base =
        'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300';
    const variants = {
        primary:
            'bg-foreground text-background shadow-[0_12px_34px_-10px_rgb(28_25_23_/0.55)] hover:bg-foreground/90',
        secondary:
            'border border-border bg-background/70 text-foreground shadow-sm backdrop-blur hover:border-foreground/30 hover:bg-background',
    };
    const cls = `${base} ${variants[variant]} ${className}`;

    const content = (
        <>
            {icon}
            {children}
            {arrow && (
                <PiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            )}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                onClick={onClick}
                download={download}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={cls}
            >
                {content}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={cls}>
            {content}
        </button>
    );
}

/**
 * ClipOutlineButton — outline variant of the notched CTA.
 * Uses the same clip-mini-notch geometry but with a transparent fill
 * and border-only appearance. For secondary actions like "Download Resume",
 * social links, and "Back to Top".
 */
export function ClipOutlineButton({
    href,
    children,
    onClick,
    download,
    target,
    type = 'button',
    notch = '10px',
    border = 'bg-border dark:bg-border',
    className = '',
    innerClassName = '',
}) {
    const inner = (
        <span
            className={`clip-mini-notch inline-flex items-center justify-center gap-2 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-muted ${innerClassName}`}
        >
            {children}
        </span>
    );

    const outerClass = `clip-mini-notch group inline-flex p-[1.5px] ${border} transition-transform duration-300 hover:-translate-y-0.5 ${className}`;
    const style = { '--notch': notch };

    if (href) {
        return (
            <a
                href={href}
                onClick={onClick}
                download={download}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={outerClass}
                style={style}
            >
                {inner}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={outerClass} style={style}>
            {inner}
        </button>
    );
}
