export interface LintSystemOption {
  name: string;
  availableFor: string[];
}

export const LintSystems: LintSystemOption[] = [
  { name: "eslint", availableFor: ["javascript", "typescript"] },
];

export const getAvailableLintSystems = (language: string): string[] => {
  return LintSystems.filter((lint) => lint.availableFor.includes(language)).map(
    (lint) => lint.name
  );
};
