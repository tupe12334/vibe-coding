export const eslintRules = [
  "Use ESLint to enforce code quality and style guidelines.",
  "Fix lint issues before committing code."
] as const;

export type EslintRule = (typeof eslintRules)[number];
