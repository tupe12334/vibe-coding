import { select } from "@inquirer/prompts";
import { getAvailableReleaseSystems } from "@vibe-builder/builder";

export const getReleaseSystem = async () => {
  return select({
    message: "Which release system would you like to use?",
    default: "release-it",
    choices: [
      ...getAvailableReleaseSystems().map((system) => ({
        name: system,
        value: system,
      })),
      { name: "Skip", value: null },
    ],
  });
};
