export const typescriptRules = [
  "Use Interfaces over Types unless needed.",
  "Don't use plain TypeScript enums",
] as const;

export type TypescriptRule = (typeof typescriptRules)[number];
