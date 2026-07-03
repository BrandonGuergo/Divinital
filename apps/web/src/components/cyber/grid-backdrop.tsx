import { cn } from "@divinital/ui/lib/cn";

const GRID_LINE = "color-mix(in oklch, var(--foreground) 7%, transparent)";
const GRID_MASK = "radial-gradient(ellipse 78% 58% at 50% 0%, #000 42%, transparent 82%)";

/**
 * Decorative cyber backdrop for the Divinital brand: a perspective-faded
 * technical grid overlaid with slowly drifting aurora light. Purely
 * presentational and hidden from assistive tech; motion respects
 * `prefers-reduced-motion` via the `.animate-aurora*` classes.
 */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${GRID_LINE} 1px, transparent 1px), linear-gradient(to bottom, ${GRID_LINE} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />
      <div className="animate-aurora absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]" />
      <div
        className="animate-aurora-slow absolute -top-16 right-[6%] h-80 w-80 rounded-full blur-[120px]"
        style={{ backgroundColor: "color-mix(in oklch, var(--accent-2) 32%, transparent)" }}
      />
    </div>
  );
}
