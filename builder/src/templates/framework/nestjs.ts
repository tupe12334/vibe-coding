export const nestjsRules = [
  "Separate the folder structure into domain driven design (DDD) modules, i.e. each module should have its own folder with controllers, services, and entities."
] as const;

export type NestjsRule = (typeof nestjsRules)[number];
