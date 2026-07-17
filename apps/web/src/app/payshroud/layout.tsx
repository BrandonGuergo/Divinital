import type { Viewport } from "next";

import { VentureShell } from "@/components/venture-shell";
import { getVenture } from "@/config/ventures";

const venture = getVenture("payshroud");
if (!venture) {
  throw new Error("PayShroud is missing from the ventures registry.");
}
const payshroud = venture;

export const viewport: Viewport = {
  // PayShroud's secure dark palette — fixed dark.
  themeColor: "#0c0f14",
};

export default function PayShroudLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <VentureShell venture={payshroud}>{children}</VentureShell>;
}
