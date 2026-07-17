import { OG_CONTENT_TYPE, OG_SIZE, payshroudTheme, renderOgImage } from "@/lib/og";

export const alt = "PayShroud — Privacy-first payments for the modern web";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "A Divinital venture · Coming soon",
    title: "Privacy-first payments for the modern web.",
    wordmark: "PayShroud",
    footer: "payshroud.com",
    theme: payshroudTheme,
  });
}
