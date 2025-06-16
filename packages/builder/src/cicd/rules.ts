export const cicdDefaultRules = [
  "CI process should run lint, test and steps preferably in parallel if posable.",
  "CD process should use the defined release system.",
] as const;

export type CicdDefaultRule = (typeof cicdDefaultRules)[number];
