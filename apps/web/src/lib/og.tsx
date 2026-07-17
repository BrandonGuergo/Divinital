import { ImageResponse } from "next/og";

/**
 * Shared renderer for the file-based `opengraph-image` routes. Next generates
 * an `og:image` (and, with the root `twitter.card`, a `twitter:image`) from
 * each brand's `opengraph-image.tsx`, so a shared link to any Divinital surface
 * renders a branded 1200×630 card instead of a bare URL.
 *
 * Colors are hex, not the OKLCH tokens from globals.css: Satori (the renderer
 * behind ImageResponse) doesn't understand OKLCH or CSS variables, so each
 * brand's palette is mirrored here as the closest sRGB equivalent.
 */
export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

export interface OgTheme {
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  accent2: string;
}

/** Divinital — dark, tech-forward: electric violet + cyan. */
export const divinitalTheme: OgTheme = {
  background: "#0d0e19",
  foreground: "#f4f4f7",
  muted: "#a1a1b5",
  accent: "#8b5cf6",
  accent2: "#22d3ee",
};

/** Intralocutor — warm sepia paper, fixed light. */
export const intralocutorTheme: OgTheme = {
  background: "#faf6ee",
  foreground: "#3a3327",
  muted: "#6f6350",
  accent: "#8a5a2b",
  accent2: "#9c6a35",
};

/** PayShroud — dark, secure fintech: emerald accent. */
export const payshroudTheme: OgTheme = {
  background: "#0c0f14",
  foreground: "#f0f1f3",
  muted: "#9aa3b0",
  accent: "#34d399",
  accent2: "#22d3ee",
};

interface OgOptions {
  /** Small uppercase mono label above the title (e.g. "Product Studio"). */
  eyebrow: string;
  /** The headline — the largest text on the card. */
  title: string;
  /** Brand wordmark rendered beside the logo mark, top-left. */
  wordmark: string;
  /** Footer line, bottom-left (typically the canonical domain). */
  footer: string;
  theme: OgTheme;
}

export function renderOgImage({ eyebrow, title, wordmark, footer, theme }: OgOptions): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: "76px",
          background: theme.background,
          color: theme.foreground,
          fontFamily: "sans-serif",
        }}
      >
        {/* Soft accent glow — a radial gradient (Satori has no blur filter). */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(900px 520px at 78% -8%, ${theme.accent}33, transparent 62%)`,
          }}
        />
        {/* Top accent hairline. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
            }}
          />
          <div style={{ fontSize: "30px", fontWeight: 600, letterSpacing: "-0.5px" }}>
            {wordmark}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "960px" }}>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: theme.accent,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: "22px",
              fontSize: "68px",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "24px",
            color: theme.muted,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: theme.accent,
            }}
          />
          {footer}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
