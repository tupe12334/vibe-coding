export const Languages = [
  { name: "javascript" },
  { name: "typescript", subset: ["javascript"] },
] as const;

export type LanguageName = (typeof Languages)[number]["name"];
