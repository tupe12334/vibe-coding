import { select } from "@inquirer/prompts";
import { getAvailableLintSystems } from "@vibe-builder/builder";

export const getLintSystem = async (language: string) => {
  const available = getAvailableLintSystems(language);

  if (available.length === 0) {
    return null;
  }

  const choices = [
    ...available.map((lint) => ({ name: lint, value: lint })),
    { name: "Skip", value: null },
  ];

  return select({
    message: "Which lint system would you like to use?",
    default: null,
    choices,
  });
};
