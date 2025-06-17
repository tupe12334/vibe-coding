export const uiRules = [
  "Write styling in a direction agnostic way: i.e. use start and end instead of left and right",
] as const;

export type UIRule = (typeof uiRules)[number];
