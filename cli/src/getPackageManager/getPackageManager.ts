import { select } from "@inquirer/prompts";
import { readdir } from "fs/promises";
import { basename, extname } from "path";
import { getOptions } from "./options";

export const getPackageManager = async (language:string) => {


  return select({
    message: "What package manager are you using?",
    default: "npm",
    choices: getOptions(language).map((packageManager) => ({
      name: packageManager.toUpperCase(),
      value: packageManager.toLowerCase(),
    })),
  });
};
