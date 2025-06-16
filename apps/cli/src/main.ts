#!/usr/bin/env node
import { writeFile } from "fs/promises";
import { builder, BuilderOptions } from "@vibe-builder/builder";
import { getLanguage } from "./getLanguage";
import { getProjectType } from "./getProjectType";
import { getFramework } from "./getFramework";
import { getLintSystem } from "./getLintSystem";
import { outputPath } from "./outputPath";
import { getPackageManager } from "./getPackageManager/getPackageManager";
import { skipStep } from "./skipStep";

export const main = async () => {
  let builderOptions: BuilderOptions = {};
  if (!(await skipStep("language selection"))) {
    const language = await getLanguage();
    if (language) {
      builderOptions = {
        ...builderOptions,
        language,
        packageManager: await getPackageManager(language),
        lintSystem: (await getLintSystem(language)) ?? undefined,
      };
    }
  }

  if (!(await skipStep("project type selection"))) {
    builderOptions.projectType = await getProjectType();
  }

  // Get framework based on selected project type
  if (builderOptions.projectType && !(await skipStep("framework selection"))) {
    const framework = await getFramework(builderOptions.projectType);
    if (framework) {
      builderOptions.framework = framework;
    }
  }

  const mdFile = await builder(builderOptions);
  let path = process.cwd();
  if (!(await skipStep("output path"))) {
    path = await outputPath();
  }
  await writeFile(`${path}/Agents.md`, mdFile, "utf-8");
};

(async () => {
  await main();
})();
