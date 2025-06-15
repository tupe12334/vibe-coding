type BuilderOptionsWithLanguage = {
  language: string;
  projectType?: string;
  packageManager?: string;
};
type BuilderOptionsWithoutLanguage = {
  language?: never;
  projectType?: string;
  packageManager?: never;
};

export type BuilderOptions =
  | BuilderOptionsWithLanguage
  | BuilderOptionsWithoutLanguage;
