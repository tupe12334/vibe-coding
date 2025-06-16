import { confirm } from "@inquirer/prompts";

/**
 * Ask whether to skip a CLI step.
 *
 * @param stepName - The name of the step to display in the prompt.
 * @returns True if the user chose to skip the step.
 */
export const skipStep = async (stepName: string): Promise<boolean> => {
  return confirm({ message: `Skip ${stepName}?`, default: false });
};
