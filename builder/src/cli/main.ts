import { writeFile } from "fs/promises";
import { builder, BuilderOptions } from "../builder";
import { getLanguage } from "./getLanguage";
import { getProjectType } from "./getProjectType";
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

  const mdFile = await builder(builderOptions);
  const path = await outputPath();
  await writeFile(`${path}/Agents.md`, mdFile, "utf-8");
};

(async () => {
  await main();
})();
