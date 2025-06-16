export interface ReleaseSystemOption {
  name: string;
}

export const ReleaseSystems: readonly ReleaseSystemOption[] = [
  { name: "release-it" },
  { name: "semantic-release" },
] as const;

export const getAvailableReleaseSystems = (): string[] => {
  return ReleaseSystems.map((r) => r.name);
};
