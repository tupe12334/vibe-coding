export const mochaRules = [
  "Use Mocha for flexible asynchronous testing.",
] as const;

export type MochaRule = (typeof mochaRules)[number];
