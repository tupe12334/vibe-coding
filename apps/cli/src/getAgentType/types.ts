export type AgentType = "codex" | "copilot" | "gemini";

export interface AgentConfig {
  type: AgentType;
  fileName: string;
  path: string;
}
