export const jestRules = [
  "Use Jest for fast and comprehensive unit testing.",
] as const;

export type JestRule = (typeof jestRules)[number];
