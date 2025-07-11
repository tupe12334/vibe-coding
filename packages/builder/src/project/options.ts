export interface ProjectTypeOption {
  name: string;
  subset?: readonly string[];
}

export const ProjectTypes: readonly ProjectTypeOption[] = [
  { name: "backend" },
  { name: "frontend" },
  { name: "lib" },
  { name: "ui-lib", subset: ["lib"] },
  { name: "e2e" },
] as const;

export type ProjectTypeName = (typeof ProjectTypes)[number]["name"];
