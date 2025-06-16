export const typescriptRules = [
  "Use Interfaces over Types unless needed."
] as const;

export type TypescriptRule = (typeof typescriptRules)[number];
