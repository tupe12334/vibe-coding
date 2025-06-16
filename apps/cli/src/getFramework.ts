import { select } from "@inquirer/prompts";
import { getAvailableFrameworks } from "@vibe-builder/builder";

export const getFramework = async (projectType: string) => {
  const availableFrameworks = getAvailableFrameworks(projectType);

  if (availableFrameworks.length === 0) {
    return null; // No frameworks available for this project type
  }

  const choices = [
    { name: "None", value: null },
    ...availableFrameworks.map((framework) => ({
      name: framework,
      value: framework,
    })),
    { name: "Skip", value: null },
  ];

  return select({
    message: "Which framework would you like to use?",
    default: null,
    choices,
  });
};
