import { select } from "@inquirer/prompts";
import type { ProjectType } from "./types";
import { projectTypes } from "./types";

/**
 * Prompt the user to choose a project type so later steps can be tailored.
 */
export const getProjectType = async (): Promise<ProjectType | null> => {
  return select({
    message: "What type of project are you working on?",
    default: "frontend",
    choices: [
      ...projectTypes.map((project) => ({
        name: project,
        value: project,
      })),
      { name: "Skip", value: null },
    ],
  });
};
