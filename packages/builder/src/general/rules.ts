export const generalRules = [
  "Don't work on any of the tasks in the TODO.md file unless you are asked to.",
  "Always try to early return from functions.",
  "Use `const` for variables that are not reassigned.",
  "Make sure to focus on why and not how in documentation.",
  "Write predictable functions and make a spec file for them according to the testing library in use.",
  "Don't use `any` in TypeScript, use `unknown` instead.",
  "Don't cast types without validation.",
  "Whenever finish a task from the TODO.md file mark it as finished, if there is some that already marked as finish delete them",
  "Work in a domain driven design (DDD) way, i.e. every function its is own module, and its its folder there is the code with JSDocs, spec file and types in there files.",
  "Put unit tests in the same folder as the code they test, and name them with `.spec.ts` suffix.",
  "After finishing the task make sure to run format, lint, test and build commands.",
  "Don't use file extensions in imports, use absolute imports instead.",
  "Don't test mocks",
  "Don't push a binary file like `.png` in a pull request.",
  "Always use a package to manage and validate environment variables.",
] as const;

export type GeneralRule = (typeof generalRules)[number];
