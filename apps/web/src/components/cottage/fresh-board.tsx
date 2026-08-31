/**
 * Decorative hero illustration for the Cottage splash: a stylized neighborhood
 * board of what's just come out of the oven. Purely presentational — hidden
 * from assistive tech, built entirely from the venture's theme tokens.
 */
const listings = [
  { bake: "Meyer lemon loaf", town: "Jensen Beach", note: "Ready at 3" },
  { bake: "Guava thumbprints", town: "Stuart", note: "4 left" },
  { bake: "Country sourdough", town: "Hobe Sound", note: "Posted on request" },
] as const;

export function FreshBoard() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
        <div className="flex items-baseline justify-between pb-5">
          <span className="font-serif text-lg tracking-tight">Fresh nearby</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
            Florida
          </span>
        </div>

        <ul className="space-y-4">
          {listings.map((listing) => (
            <li
              key={listing.bake}
              className="flex items-start justify-between gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0"
            >
              <div>
                <p className="font-serif text-[15px] leading-snug">{listing.bake}</p>
                <p className="mt-1 text-xs text-muted-foreground">{listing.town}</p>
              </div>
              <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-accent">
                {listing.note}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -right-4 -top-4 -z-10 size-24 rounded-full bg-accent/20 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 -z-10 size-28 rounded-full bg-accent/15 blur-3xl" />
    </div>
  );
}
