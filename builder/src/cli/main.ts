import { writeFile } from "fs/promises";
import { builder } from "../builder";
import { getLanguage } from "./getLanguage";
import { outputPath } from "./outputPath";

export const main = async () => {
  const language = await getLanguage();
  const mdFile = await builder({ language });
  const path = await outputPath();
  await writeFile(`${path}/Agents.md`, mdFile, "utf-8");
};

(async () => {
  await main();
})();
