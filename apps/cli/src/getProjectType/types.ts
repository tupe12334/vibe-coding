export const projectTypes = [
  "backend",
  "frontend",
  "lib",
  "ui-lib",
  "e2e",
] as const;

export type ProjectType = (typeof projectTypes)[number];
