export type BuilderOptions =
  | {
      language: string;
      projectType?: string;
      packageManager?: string;
    }
  | {
      language?: never;
      projectType?: string;
      packageManager?: never;
    };
