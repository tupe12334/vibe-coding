import { writeFile } from "fs/promises";
import { builder, BuilderOptions } from "../builder";
import { getLanguage } from "./getLanguage";
import { getProjectType } from "./getProjectType";
import { outputPath } from "./outputPath";

export const main = async () => {
  const language = await getLanguage();
  const projectType = await getProjectType();
  const builderOptions = { language, projectType } satisfies BuilderOptions;
  const mdFile = await builder(builderOptions);
  const path = await outputPath();
  await writeFile(`${path}/Agents.md`, mdFile, "utf-8");
};

(async () => {
  await main();
})();
