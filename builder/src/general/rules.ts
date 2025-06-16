export const generalRules = [
  "Don't work on any of the tasks in the TODO.md file unless you are asked to.",
  "Always try to early return from functions.",
  "Use `const` for variables that are not reassigned.",
  "Make sure to focus on why and not how in documentation.",
  "Write predictable functions and make a spec file for them according to the testing library in use.",
  "Don't use `any` in TypeScript, use `unknown` instead.",
  "Don't cast types without validation."
] as const;

export type GeneralRule = (typeof generalRules)[number];
