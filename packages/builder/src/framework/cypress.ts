export const cypressRules = [
  "Use Cypress commands to keep tests concise and readable.",
] as const;

export type CypressRule = (typeof cypressRules)[number];
