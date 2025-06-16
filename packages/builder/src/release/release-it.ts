export const releaseItRules = [
  "Use release-it for interactive version management and publishing.",
] as const;

export type ReleaseItRule = (typeof releaseItRules)[number];
