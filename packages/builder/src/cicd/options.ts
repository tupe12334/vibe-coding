export interface CICDSystemOption {
  name: string;
}

export const CICDSystems: readonly CICDSystemOption[] = [
  { name: "github-actions" },
  { name: "gitlab-ci" },
  { name: "circleci" },
] as const;

export const getAvailableCICDSystems = (): string[] => {
  return CICDSystems.map((system) => system.name);
};
