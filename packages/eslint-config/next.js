import { FlatCompat } from "@eslint/eslintrc";
import { config as base } from "./base.js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/**
 * Config for Next.js applications: Core Web Vitals + base rules.
 *
 * The Next.js config comes first so the base config's typescript-eslint
 * parser takes precedence — eslint-config-next ships an older parser whose
 * scope analysis misses type-only imports, causing no-unused-vars false
 * positives.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [...compat.extends("next/core-web-vitals"), ...base];
