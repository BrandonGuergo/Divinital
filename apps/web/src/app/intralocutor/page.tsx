import { redirect } from "next/navigation";

import { getVenture } from "@/config/ventures";

export default function IntralocutorPage() {
  const venture = getVenture("intralocutor");

  redirect(venture?.productUrl ?? "https://intralocutor.com");
}
