import reactHooks from "eslint-plugin-react-hooks";
import { config as base } from "./base.js";

/**
 * Config for internal React component libraries.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [...base, reactHooks.configs["recommended-latest"]];
