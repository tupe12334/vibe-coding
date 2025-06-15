import { input, select } from "@inquirer/prompts";
import { cwd } from "process";
import { FINISH, SKIP } from "./constants";

export const outputPath = async (): Promise<string | typeof SKIP | typeof FINISH> => {
  const specificPath = await select({
    message: "Do you want to output the file to a specific path?",
    choices: [
      { value: "specific", name: "Specific path" },
      { value: "default", name: "Default path" },
      { value: SKIP, name: "Skip" },
      { value: FINISH, name: "Finish" },
    ],
  });

  if (specificPath === FINISH) {
    return FINISH;
  }

  if (specificPath === SKIP || specificPath === "default") {
    return SKIP;
  }

  const path = await input({
    message: "Enter the output path",
    default: cwd(),
  });
  return path.trim();
};
