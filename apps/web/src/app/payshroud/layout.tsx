import { VentureShell } from "@/components/venture-shell";
import { getVenture } from "@/config/ventures";

const venture = getVenture("payshroud");
if (!venture) {
  throw new Error("PayShroud is missing from the ventures registry.");
}
const payshroud = venture;

export default function PayShroudLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <VentureShell venture={payshroud}>{children}</VentureShell>;
}
