#!/usr/bin/env node
import { writeFile } from "fs/promises";
import { builder, BuilderOptions } from "@vibe-builder/builder";
import { getLanguage } from "./getLanguage";
import { getProjectType } from "./getProjectType";
import { getFramework } from "./getFramework";
import { getLintSystem } from "./getLintSystem";
import { getTestingFramework } from "./getTestingFramework";
import { outputPath } from "./outputPath";
import { getPackageManager } from "./getPackageManager/getPackageManager";
import { getReleaseSystem } from "./getReleaseSystem";
import { getMonorepoSystem } from "./getMonorepoSystem";
import { getCreatedAt } from "./getCreatedAt";
import { e2ePreferences } from "./e2ePreferences";

export const main = async () => {
  let builderOptions: BuilderOptions = {};
  const language = await getLanguage();
  if (language) {
    builderOptions = {
      ...builderOptions,
      language,
      packageManager: (await getPackageManager(language)) ?? undefined,
      lintSystem: (await getLintSystem(language)) ?? undefined,
    };
  }

  builderOptions.projectType = (await getProjectType()) ?? undefined;

  if (builderOptions.projectType) {
    const testing = await getTestingFramework(builderOptions.projectType);
    if (testing) {
      builderOptions.testFramework = testing;
    }
    if (builderOptions.projectType === "e2e") {
      const networkMocking = await e2ePreferences();
      if (networkMocking) {
        builderOptions.networkMocking = networkMocking;
      }
    }
  }

  if (
    builderOptions.projectType &&
    ["lib", "ui-lib"].includes(builderOptions.projectType)
  ) {
    const releaseSystem = await getReleaseSystem();
    if (releaseSystem) {
      builderOptions.releaseSystem = releaseSystem;
    }
  }

  const monorepoSystem = await getMonorepoSystem();
  if (monorepoSystem) {
    builderOptions.monorepoSystem = monorepoSystem;
  }

  // Get framework based on selected project type
  if (builderOptions.projectType) {
    const framework = await getFramework(builderOptions.projectType);
    if (framework) {
      builderOptions.framework = framework;
    }
  }

  const createdAt = await getCreatedAt();
  if (createdAt !== null) {
    builderOptions.createdAt = createdAt;
  }

  const mdFile = await builder(builderOptions);
  const path = await outputPath();
  await writeFile(`${path}/AGENTS.md`, mdFile, "utf-8");
};

(async () => {
  await main();
})();
