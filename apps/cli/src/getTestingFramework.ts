import { select } from "@inquirer/prompts";
import {
  getAvailableFrameworks,
  getAvailableTestingFrameworks,
} from "@vibe-builder/builder";

export const getTestingFramework = async (projectType: string) => {
  const available =
    projectType === "e2e"
      ? getAvailableFrameworks("e2e")
      : getAvailableTestingFrameworks().filter((framework) =>
          ["jest", "vitest"].includes(framework)
        );

  const choices = [
    { name: "None", value: null },
    ...available.map((framework) => ({ name: framework, value: framework })),
    { name: "Skip", value: null },
  ];

  return select({
    message: "Which testing framework would you like to use?",
    default: null,
    choices,
  });
};
