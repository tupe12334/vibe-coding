import { select } from "@inquirer/prompts";

/**
 * Prompt the user whether to append a creation timestamp.
 */
export const getCreatedAt = async (): Promise<boolean | null> => {
  return select({
    message: "Would you like to add a creation timestamp?",
    default: false,
    choices: [
      { name: "Yes", value: true },
      { name: "No", value: false },
      { name: "Skip", value: null },
    ],
  });
};
