import inquirer from "inquirer";
import { readdir } from "fs/promises";
import { basename, extname } from "path";

export const getLanguage = async () => {
  const options = await (
    await readdir("./templates/language")
  ).map((filename) => basename(filename, extname(filename)));

  return inquirer.prompt([
    {
      type: "select",
      message: "Programming languages of the project?",
      name: "language",
      choices: options.map((lang) => ({
        name: lang,
        value: lang.toLowerCase(),
      })),
    },
  ]);
};
