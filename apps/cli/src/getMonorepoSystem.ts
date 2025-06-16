import { select } from "@inquirer/prompts";
import { getAvailableMonorepoSystems } from "@vibe-builder/builder";

export const getMonorepoSystem = async () => {
  const availableSystems = getAvailableMonorepoSystems();

  if (availableSystems.length === 0) {
    return null;
  }

  const choices = [
    { name: "None", value: null },
    ...availableSystems.map((system) => ({ name: system, value: system })),
    { name: "Skip", value: null },
  ];

  return select({
    message: "Which monorepo system would you like to use?",
    default: null,
    choices,
  });
};
