export const vitestRules = [
  "Use Vitest for Vite-powered projects and fast test execution.",
] as const;

export type VitestRule = (typeof vitestRules)[number];
