import { select } from "@inquirer/prompts";
import { getAvailableFrameworks } from "@vibe-builder/builder";
/**
 * Prompt the user to choose a framework for the given project type.
 * Returns `null` when no frameworks are available.
 */

export const getFramework = async (projectType: string) => {
  const availableFrameworks = getAvailableFrameworks(projectType);

  if (availableFrameworks.length === 0) {
    return null; // No frameworks available for this project type
  }

  const choices = [
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
