import { Card } from "@divinital/ui/components/card";
import Link from "next/link";

import type { Venture } from "@/config/ventures";

export function VentureCard({ venture }: { venture: Venture }) {
  const isLive = venture.status === "live";

  return (
    <Card className="group relative h-full overflow-hidden bg-card/60 backdrop-blur transition-colors hover:border-accent/50">
      {/* Hover glow — accent light that rises from the lower edge on hover. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 size-56 -translate-x-1/2 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <Link href={venture.path} className="relative flex h-full flex-col p-6 sm:p-7">
        <span className="absolute right-6 top-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
          <span aria-hidden="true">↗</span>
        </span>

        <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em]">
          <span
            className={
              isLive
                ? "size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
                : "size-1.5 rounded-full bg-muted-foreground"
            }
          />
          <span className={isLive ? "text-accent" : "text-muted-foreground"}>
            {isLive ? "Live" : "Coming soon"}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight">{venture.name}</h3>
        <p className="mt-2 text-sm font-medium text-muted-foreground">{venture.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{venture.description}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Visit {venture.name}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    </Card>
  );
}
