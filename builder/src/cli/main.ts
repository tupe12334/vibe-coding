import { writeFile } from "fs/promises";
import { builder, BuilderOptions } from "../builder";
import { getLanguage } from "./getLanguage";
import { getProjectType } from "./getProjectType";
import { outputPath } from "./outputPath";
import { getPackageManager } from "./getPackageManager/getPackageManager";

export const main = async () => {
  const builderOptions: BuilderOptions = {};
  builderOptions.language = await getLanguage();
  if (builderOptions.language) {
    builderOptions.packageManager = await getPackageManager(
      builderOptions.language
    );
  }
  builderOptions.projectType = await getProjectType();

  const mdFile = await builder(builderOptions);
  const path = await outputPath();
  await writeFile(`${path}/Agents.md`, mdFile, "utf-8");
};

(async () => {
  await main();
})();
