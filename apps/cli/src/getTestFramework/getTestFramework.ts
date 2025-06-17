import { select } from "@inquirer/prompts";
import { getAvailableTestFrameworks } from "@vibe-builder/builder";

export const getTestFramework = async () => {
  const availableFrameworks = getAvailableTestFrameworks();

  if (availableFrameworks.length === 0) {
    return null;
  }

  const choices = [
    { name: "None", value: null },
    ...availableFrameworks.map((framework) => ({ name: framework, value: framework })),
    { name: "Skip", value: null },
  ];

  return select({
    message: "Which testing framework would you like to use?",
    default: null,
    choices,
  });
};
