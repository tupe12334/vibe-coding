import { select } from "@inquirer/prompts";
import { readdir } from "fs/promises";
import { basename, extname } from "path";

export const getProjectType = async () => {
  const options = await (
    await readdir("./templates/project")
  ).map((filename) => basename(filename, extname(filename)));

  return select({
    message: "What type of project are you working on?",
    default: "frontend",
    choices: options.map((project) => ({
      name: project,
      value: project.toLowerCase(),
    })),
  });
};
