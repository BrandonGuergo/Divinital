import type { Viewport } from "next";

import { VentureShell } from "@/components/venture-shell";
import { getVenture } from "@/config/ventures";

const venture = getVenture("cottage");
if (!venture) {
  throw new Error("Cottage is missing from the ventures registry.");
}
const cottage = venture;

export const viewport: Viewport = {
  // Cottage's kitchen cream paper — fixed light.
  themeColor: "#f5ebd8",
};

export default function CottageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <VentureShell venture={cottage}>{children}</VentureShell>;
}
