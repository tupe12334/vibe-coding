export const e2eRules = [
  "Structure tests using the Page Object Model (POM) for maintainability.",
  "Use screenshot testing when possible to detect visual regressions.",
] as const;

export type E2ERule = (typeof e2eRules)[number];
