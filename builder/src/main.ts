/**
 * Checkbox list examples
 */

import inquirer from "inquirer";
import { getLanguage } from "./getLanguage";

async function projectType() {
  const response = await inquirer.prompt([
    {
      type: "select",
      message: "What type of project are you building?",
      name: "projectType",
      choices: [
        { name: "Web Application", value: "web" },
        { name: "Mobile Application", value: "mobile" },
        { name: "Desktop Application", value: "desktop" },
        { name: "API Service", value: "backend" },
        { name: "Library/Package", value: "library" },
        new inquirer.Separator(" = Other = "),
        { name: "Other", value: "other" },
      ],
    },
  ]);
  return response.projectType;
}

(async () => {
  const language = await getLanguage();
  const type = await projectType();
  console.log(`Project type: ${type}`);
})();
