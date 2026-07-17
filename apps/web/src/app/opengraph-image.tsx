import { divinitalTheme, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Divinital — A studio of focused digital ventures";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Product Studio",
    title: "A studio of focused digital ventures.",
    wordmark: "Divinital",
    footer: "divinital.com",
    theme: divinitalTheme,
  });
}
