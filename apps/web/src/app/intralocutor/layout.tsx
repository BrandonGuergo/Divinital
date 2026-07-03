import { VentureShell } from "@/components/venture-shell";
import { getVenture } from "@/config/ventures";

const venture = getVenture("intralocutor");
if (!venture) {
  throw new Error("Intralocutor is missing from the ventures registry.");
}
const intralocutor = venture;

export default function IntralocutorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <VentureShell venture={intralocutor}>{children}</VentureShell>;
}
