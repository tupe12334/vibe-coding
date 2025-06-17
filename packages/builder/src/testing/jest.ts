export const jestRules = [
  "Use Jest for unit testing and mocking dependencies.",
] as const;

export type JestRule = (typeof jestRules)[number];
