export interface TestingFrameworkOption {
  name: string;
}

export const TestingFrameworks: readonly TestingFrameworkOption[] = [
  { name: "jest" },
  { name: "vitest" },
  { name: "mocha" },
] as const;

export const getAvailableTestingFrameworks = (): string[] => {
  return TestingFrameworks.map((f) => f.name);
};
