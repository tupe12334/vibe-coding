import { select } from "@inquirer/prompts";
import { getAvailableTestingFrameworks } from "@vibe-builder/builder";

export const getTestingFramework = async () => {
  const available = getAvailableTestingFrameworks();

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
