import { input, select } from "@inquirer/prompts";
import { cwd } from "process";

export const outputPath = async () => {
  const specificPath = await select({
    message: "Do you want to output the file to a specific path?",
    choices: [
      { value: true, name: "Specific path" },
      { value: false, name: "Default path" },
    ],
  });
  if (specificPath === false) {
    return cwd();
  }
  const path = await input({
    message: "Enter the output path",
    default: cwd(),
  });
  return path.trim();
};
