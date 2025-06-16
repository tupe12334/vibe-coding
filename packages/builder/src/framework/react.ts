export const reactRules = [
  "Use key in React lists to help React identify which items have changed, are added, or removed."
] as const;

export type ReactRule = (typeof reactRules)[number];
