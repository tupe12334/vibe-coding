import { select } from "@inquirer/prompts";
import { readdir } from "fs/promises";
import { basename, extname } from "path";
import { FINISH, SKIP } from "./constants";

export const getLanguage = async () => {
  const options = await (
    await readdir("./templates/language")
  ).map((filename) => basename(filename, extname(filename)));

  return select({
    message: "Programming languages of the project?",
    default: "typescript",
    choices: [
      { name: "Skip", value: SKIP },
      { name: "Finish", value: FINISH },
      ...options.map((lang) => ({
        name: lang,
        value: lang.toLowerCase(),
      })),
    ],
  });
};
