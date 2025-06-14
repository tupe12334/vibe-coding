/**
 * Checkbox list examples
 */

import { getLanguage } from "./getLanguage";

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
  // const type = await projectType();
  // console.log(`Project type: ${type}`);
  return language;
};

(async () => {
  await main();
})();
