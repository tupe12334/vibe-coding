import type { LanguageName } from "../language";

export interface LintSystemOption {
  name: string;
  availableFor: LanguageName[];
}

export const LintSystems: LintSystemOption[] = [
  { name: "eslint", availableFor: ["javascript", "typescript"] },
];

export const getAvailableLintSystems = (language: string): string[] => {
  return LintSystems.filter((lint) =>
    lint.availableFor.includes(language as LanguageName)
  ).map((lint) => lint.name);
};
