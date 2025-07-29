export const javascriptRules = [
  "Use `const` over `let` unless reassignment is needed.",
  "Use `===` over `==` for strict equality checks.",
  "Use arrow functions for anonymous functions.",
  "Use template literals for string interpolation.",
  "Use for-of loops for iterating over arrays.",
  "When writing a function do not return undefined, return null instead.",
] as const;

export type JavascriptRule = (typeof javascriptRules)[number];
