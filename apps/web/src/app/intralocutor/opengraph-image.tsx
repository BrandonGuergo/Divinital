import { intralocutorTheme, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Intralocutor — Read deeper, with AI beside you";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "A Divinital venture",
    title: "Read deeper, with AI beside you.",
    wordmark: "Intralocutor",
    footer: "intralocutor.com",
    theme: intralocutorTheme,
  });
}
