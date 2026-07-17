import { permanentRedirect } from "next/navigation";

import { getVenture } from "@/config/ventures";

// 308 so search engines transfer this URL's signals to the live product.
export default function IntralocutorPage() {
  const venture = getVenture("intralocutor");

  permanentRedirect(venture?.productUrl ?? "https://intralocutor.com");
}
