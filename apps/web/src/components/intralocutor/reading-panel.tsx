/**
 * Decorative hero illustration for the Intralocutor splash: a stylized book
 * page with a highlighted passage and an AI reply in the margin, conveying the
 * product's core idea at a glance. Purely presentational — hidden from
 * assistive tech, built entirely from the venture's theme tokens.
 */
export function ReadingPanel() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
        <div className="flex items-center gap-2 pb-5">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            Meditations · Book IV
          </span>
        </div>

        <div className="space-y-3 font-serif text-[15px] leading-relaxed text-card-foreground">
          <p>Dwell on the beauty of life. Watch the stars, and see yourself running with them.</p>
          <p>
            <span className="rounded bg-accent/20 px-1 py-0.5 decoration-accent/40 underline-offset-4">
              The universe is change; our life is what our thoughts make it.
            </span>
          </p>
          <p className="text-muted-foreground">
            Confine yourself to the present. Everything that happens is as common and well known
            as the rose in spring.
          </p>
        </div>

        <div className="mt-6 space-y-3 border-t border-border pt-6">
          <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-foreground/[0.06] px-4 py-2.5 text-sm">
            Is this Stoic determinism, or something closer to agency?
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
              I
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-accent/10 px-4 py-2.5 text-sm text-card-foreground">
              Both. Marcus holds that events are fixed, but the meaning you assign them is yours
              alone — that&apos;s where the agency lives.
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -right-4 -top-4 -z-10 size-24 rounded-full bg-accent/20 blur-2xl"
      />
      <div
        className="absolute -bottom-6 -left-6 -z-10 size-28 rounded-full bg-accent/15 blur-3xl"
      />
    </div>
  );
}
