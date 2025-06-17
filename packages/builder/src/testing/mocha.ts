export const mochaRules = [
  "Use Mocha for flexible BDD/TDD style testing.",
] as const;

export type MochaRule = (typeof mochaRules)[number];
