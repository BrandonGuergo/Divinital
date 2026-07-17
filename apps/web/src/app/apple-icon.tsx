import { ImageResponse } from "next/og";

// iOS applies its own corner mask, so the tile is a full-bleed solid — the
// same violet and "D" mark as icon.svg, mirrored in sRGB for Satori.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6d28d9",
          color: "#ffffff",
          fontSize: "116px",
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        D
      </div>
    ),
    { ...size },
  );
}
