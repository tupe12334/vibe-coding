export const e2eRules = [
  "Structure tests using the Page Object Model (POM) for maintainability.",
  "Use screenshot testing when possible to detect visual regressions.",
  "Use msw (Mock Service Worker) for API mocking in tests to ensure consistent and reliable test environments.",
] as const;

export type E2ERule = (typeof e2eRules)[number];
