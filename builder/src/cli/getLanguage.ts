import { select } from "@inquirer/prompts";
import { Languages } from "../builder";

export const getLanguage = async () => {
  return select({
    message: "Programming languages of the project?",
    default: "typescript",
    choices: Languages.map((lang) => ({
      name: lang.name,
      value: lang.name.toLowerCase(),
    })),
  });
};
