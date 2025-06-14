/**
 * Checkbox list examples
 */

import { builder } from "../builder";
import { getLanguage } from "./getLanguage";
import { outputPath } from "./outputPath";

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

export const main = async () => {
  const language = await getLanguage();
  const mdFile = await builder({ language });
  const path = await outputPath();
;

  return mdFile;
};

(async () => {
  await main();
})();
