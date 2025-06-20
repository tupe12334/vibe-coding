import { select } from "@inquirer/prompts";

/**
 * Ask the user how to mock network requests during e2e tests.
 */
export const e2ePreferences = async (): Promise<"msw" | "route-interception" | null> => {
  return select({
    message: "How do you prefer to mock network requests?",
    default: "msw",
    choices: [
      { name: "MSW", value: "msw" },
      { name: "Route Interception", value: "route-interception" },
      { name: "Skip", value: null },
    ],
  });
};
