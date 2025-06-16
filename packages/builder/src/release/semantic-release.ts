export const semanticReleaseRules = [
  "Use semantic-release for automated versioning and changelog generation.",
] as const;

export type SemanticReleaseRule = (typeof semanticReleaseRules)[number];
