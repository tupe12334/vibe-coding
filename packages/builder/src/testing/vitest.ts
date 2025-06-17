export const vitestRules = [
  "Use Vitest for fast Vite-based unit tests.",
] as const;

export type VitestRule = (typeof vitestRules)[number];
