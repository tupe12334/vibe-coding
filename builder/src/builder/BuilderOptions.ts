type BaseBuilderOptions = {
  projectType?: string;
  framework?: string;
};
type BuilderOptionsWithLanguage = {
  language: string;
  packageManager?: string;
};
type BuilderOptionsWithoutLanguage = {
  language?: never;
  packageManager?: never;
};

export type BuilderOptions = BaseBuilderOptions &
  (BuilderOptionsWithLanguage | BuilderOptionsWithoutLanguage);
