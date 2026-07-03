"use client";

import { MotionConfig } from "motion/react";
import * as React from "react";

/** Applies the user's `prefers-reduced-motion` setting to all motion components. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
