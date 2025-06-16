#!/usr/bin/env node
import { writeFile } from "fs/promises";
import { builder, BuilderOptions } from "@vibe-builder/builder";
import { getLanguage } from "./getLanguage";
import { getProjectType } from "./getProjectType";
import { getFramework } from "./getFramework";
import { outputPath } from "./outputPath";
import { getPackageManager } from "./getPackageManager/getPackageManager";

export const main = async () => {
  let builderOptions: BuilderOptions = {};
  const language = await getLanguage();
  if (language) {
    builderOptions = {
      ...builderOptions,
      language,
      packageManager: await getPackageManager(language),
    };
  }
  builderOptions.projectType = await getProjectType();

  // Get framework based on selected project type
  if (builderOptions.projectType) {
    const framework = await getFramework(builderOptions.projectType);
    if (framework) {
      builderOptions.framework = framework;
    }
  }

  const mdFile = await builder(builderOptions);
  const path = await outputPath();
  await writeFile(`${path}/Agents.md`, mdFile, "utf-8");
};

(async () => {
  await main();
})();
