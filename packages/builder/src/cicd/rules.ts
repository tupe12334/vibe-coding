export const cicdDefaultRules = [
  "CI process should run lint step.",
  "CI process should run tests.",
  "CI process should build the project.",
  "CD process should use the defined release system.",
] as const;

export type CicdDefaultRule = (typeof cicdDefaultRules)[number];
