export const reactRules = [
  "Use key in React lists to help React identify which items have changed, are added, or removed.",
  "Don't put logic into hooks, hold them in functions and just call them inside the needed hooks.",
] as const;

export type ReactRule = (typeof reactRules)[number];
