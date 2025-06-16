import { select } from "@inquirer/prompts";
import { getAvailableLintSystems } from "@vibe-builder/builder";

export const getLintSystem = async (language: string) => {
  const available = getAvailableLintSystems(language);

  if (available.length === 0) {
    return null;
  }

  const choices = [
    { name: "Skip", value: null },
    { name: "None", value: null },
    ...available.map((lint) => ({ name: lint, value: lint })),
  ];

  return select({
    message: "Which lint system would you like to use?",
    default: null,
    choices,
  });
};
