import { select } from "@inquirer/prompts";
import { ProjectTypes } from "@vibe-builder/builder";
import { readdir } from "fs/promises";
import { basename, extname } from "path";

export const getProjectType = async () => {
 
  return select({
    message: "What type of project are you working on?",
    default: "frontend",
    choices: [
      { name: "Skip", value: null },
      ...ProjectTypes.map((project) => ({
        name: project,
        value: project.toLowerCase(),
      })),
    ],
  });
};
