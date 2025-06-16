export const javascriptRules = [
  "Use `const` over `let` unless reassignment is needed.",
  "Use `===` over `==` for strict equality checks.",
  "Use arrow functions for anonymous functions.",
  "Use template literals for string interpolation."
] as const;

export type JavascriptRule = (typeof javascriptRules)[number];
