import { checkbox } from "@inquirer/prompts";
import { agentOptions } from "./options";
import { AgentType } from "./types";

export const getAgentType = async (): Promise<AgentType[]> => {
  const agentTypes = await checkbox({
    message: "Which AI agents are you working with? (Select multiple)",
    choices: agentOptions.map((option) => ({
      name: option.type.charAt(0).toUpperCase() + option.type.slice(1),
      value: option.type,
      checked: option.type === "codex", // Default to codex being selected
    })),
    validate: (answer) => {
      if (answer.length < 1) {
        return "You must choose at least one agent.";
      }
      return true;
    },
  });

  return agentTypes;
};
