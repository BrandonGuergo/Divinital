import { cottageTheme, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Cottage — What's fresh from Florida home kitchens nearby";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "A Divinital venture",
    title: "What's fresh from Florida home kitchens nearby.",
    wordmark: "Cottage",
    footer: "divinital.com/cottage",
    theme: cottageTheme,
  });
}
