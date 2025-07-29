import { select } from "@inquirer/prompts";
import { agentOptions } from "./options";
import { AgentType } from "./types";

export const getAgentType = async (): Promise<AgentType> => {
  const agentType = await select({
    message: "Which AI agent are you working with?",
    default: "codex",
    choices: agentOptions.map((option) => ({
      name: option.type.charAt(0).toUpperCase() + option.type.slice(1),
      value: option.type,
    })),
  });

  return agentType;
};
