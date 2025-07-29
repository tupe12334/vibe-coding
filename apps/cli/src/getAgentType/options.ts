import { AgentType, AgentConfig } from "./types";

export const agentOptions: AgentConfig[] = [
  {
    type: "codex",
    fileName: "AGENTS.md",
    path: "AGENTS.md",
  },
  {
    type: "copilot",
    fileName: "copilot-instructions.md",
    path: ".github/copilot-instructions.md",
  },
  {
    type: "gemini",
    fileName: "Gemini.md",
    path: "Gemini.md",
  },
];

export const getAgentConfig = (agentType: AgentType): AgentConfig => {
  const config = agentOptions.find((option) => option.type === agentType);
  if (!config) {
    throw new Error(`Unknown agent type: ${agentType}`);
  }
  return config;
};
