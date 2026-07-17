import { cn } from "@divinital/ui/lib/cn";

const FIELD_MASK = "radial-gradient(ellipse 78% 58% at 50% 0%, #000 42%, transparent 82%)";

const MOTES = [
  { radius: 120, size: 5, duration: 42, delay: -4, color: "var(--accent)" },
  { radius: 168, size: 4, duration: 61, delay: -22, color: "var(--accent-2)" },
  { radius: 96, size: 3, duration: 35, delay: -11, color: "var(--accent-2)" },
  { radius: 200, size: 6, duration: 74, delay: -38, color: "var(--accent)" },
] as const;

const THREADS = [
  { left: "18%", height: "70%", duration: 9, delay: -1.5 },
  { left: "34%", height: "55%", duration: 12, delay: -6 },
  { left: "63%", height: "80%", duration: 10.5, delay: -3 },
  { left: "82%", height: "48%", duration: 13.5, delay: -8.5 },
] as const;

/**
 * Decorative backdrop for the Divinital brand: a single Tidal Plasma Well
 * breathing at the focal point, Gravitic Bloom motes orbiting it in slow,
 * asymmetric spirals, and Suspended Threadfield filaments carrying a faint
 * signal. Purely presentational and hidden from assistive tech; all motion
 * respects `prefers-reduced-motion` via the `.animate-*` classes.
 */
export function PlasmaField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      style={{ maskImage: FIELD_MASK, WebkitMaskImage: FIELD_MASK }}
    >
      {THREADS.map((thread, index) => (
        <div
          key={index}
          className="animate-thread-shimmer absolute top-0 w-px"
          style={{
            left: thread.left,
            height: thread.height,
            background: "linear-gradient(to bottom, transparent, var(--filament) 45%, transparent)",
            animationDuration: `${thread.duration}s`,
            animationDelay: `${thread.delay}s`,
          }}
        />
      ))}

      <div className="animate-plasma-pulse absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]" />

      {MOTES.map((mote, index) => (
        <div
          key={index}
          className="animate-bloom-orbit absolute left-1/2 top-8"
          style={{
            width: mote.radius * 2,
            height: mote.radius * 2,
            marginLeft: -mote.radius,
            animationDuration: `${mote.duration}s`,
            animationDelay: `${mote.delay}s`,
          }}
        >
          <div
            className="absolute left-1/2 top-0 rounded-full blur-[3px]"
            style={{
              width: mote.size,
              height: mote.size,
              backgroundColor: mote.color,
              opacity: 0.5,
            }}
          />
        </div>
      ))}
    </div>
  );
}
