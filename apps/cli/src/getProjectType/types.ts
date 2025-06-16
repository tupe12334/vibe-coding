export const projectTypes = ["backend", "frontend", "lib", "ui-lib"] as const;

export type ProjectType = (typeof projectTypes)[number];
