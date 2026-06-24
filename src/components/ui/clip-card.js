/**
 * ⭐ ClipCard — the signature cut-corner / notched card.
 * Two stacked clipped layers: an outer colored "border" layer with 1.5px padding,
 * and an inner fill layer on top, so the border stays crisp on the diagonal cuts.
 *
 * - `border`        : Tailwind bg-* class for the border layer (e.g. bg-amber-300 to feature it).
 * - `outerClassName`: tweak the outer layer (e.g. "[--notch:10px]" for a tighter cut, hover lift).
 * - `className`     : the inner fill (e.g. "bg-card p-8").
 */
export default function ClipCard({
    border = 'bg-border',
    outerClassName = '',
    className = '',
    children,
    ...props
}) {
    return (
        <div className={`clip-notch ${border} p-[1.5px] ${outerClassName}`} {...props}>
            <div className={`clip-notch ${className}`}>{children}</div>
        </div>
    );
}
