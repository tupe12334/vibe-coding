/**
 * Checkbox list examples
 */

import { writeFile } from "fs/promises";
import { builder } from "../builder";
import { getLanguage } from "./getLanguage";
import { outputPath } from "./outputPath";
import { FINISH, SKIP } from "./constants";

// export async function projectType() {
//   return inquirer.prompt([
//     {
//       type: "select",
//       message: "What type of project are you building?",
//       name: "projectType",
//       choices: [
//         { name: "Web Application", value: "web" },
//         { name: "Mobile Application", value: "mobile" },
//         { name: "Desktop Application", value: "desktop" },
//         { name: "API Service", value: "backend" },
//         { name: "Library/Package", value: "library" },
//         new inquirer.Separator(" = Other = "),
//         { name: "Other", value: "other" },
//       ],
//     },
//   ]);
// }

const generateFile = async (options: Record<string, unknown>, path?: string) => {
  const mdFile = await builder(options);
  const output = path ?? process.cwd();
  await writeFile(`${output}/Agents.md`, mdFile, "utf-8");
};

export const main = async () => {
  const options: Record<string, unknown> = {};

  const language = await getLanguage();
  if (language === FINISH) {
    await generateFile(options);
    return;
  }
  if (language !== SKIP) {
    options.language = language;
  }

  const pathAnswer = await outputPath();
  if (pathAnswer === FINISH) {
    await generateFile(options);
    return;
  }
  const path = pathAnswer === SKIP ? undefined : pathAnswer;
  await generateFile(options, path);
};

(async () => {
  await main();
})();
