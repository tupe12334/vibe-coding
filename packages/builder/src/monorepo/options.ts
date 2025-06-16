export interface MonorepoSystemOption {
  name: string;
}

export const MonorepoSystems: readonly MonorepoSystemOption[] = [
  { name: "turbo" },
  { name: "nx" },
  { name: "lerna" },
] as const;

export const getAvailableMonorepoSystems = (): string[] => {
  return MonorepoSystems.map((system) => system.name);
};
