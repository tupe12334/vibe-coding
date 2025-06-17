type BaseBuilderOptions = {
  projectType?: string;
  framework?: string;
  releaseSystem?: string;
  monorepoSystem?: string;
  cicdSystem?: string;
  createdAt?: boolean;
  testFramework?: string;
};
type BuilderOptionsWithLanguage = {
  language: string;
  packageManager?: string;
  lintSystem?: string;
};
type BuilderOptionsWithoutLanguage = {
  language?: never;
  packageManager?: never;
  lintSystem?: never;
};

export type BuilderOptions = BaseBuilderOptions &
  (BuilderOptionsWithLanguage | BuilderOptionsWithoutLanguage);
