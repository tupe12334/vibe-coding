export const playwrightRules = [
  "Prefer using fixtures to share setup across Playwright tests.",
] as const;

export type PlaywrightRule = (typeof playwrightRules)[number];
