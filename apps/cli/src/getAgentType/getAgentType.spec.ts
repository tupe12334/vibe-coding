import { describe, it, expect, vi } from "vitest";
import { getAgentType } from "./getAgentType";

// Mock the inquirer prompts
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getAgentType", () => {
  it("should return the selected agent type", async () => {
    const { select } = await import("@inquirer/prompts");
    const mockSelect = vi.mocked(select);
    
    mockSelect.mockResolvedValue("copilot");

    const result = await getAgentType();

    expect(result).toBe("copilot");
    expect(mockSelect).toHaveBeenCalledWith({
      message: "Which AI agent are you working with?",
      default: "codex",
      choices: [
        { name: "Codex", value: "codex" },
        { name: "Copilot", value: "copilot" },
        { name: "Gemini", value: "gemini" },
      ],
    });
  });

  it("should return codex as default when no selection is made", async () => {
    const { select } = await import("@inquirer/prompts");
    const mockSelect = vi.mocked(select);
    
    mockSelect.mockResolvedValue("codex");

    const result = await getAgentType();

    expect(result).toBe("codex");
  });

  it("should return gemini when selected", async () => {
    const { select } = await import("@inquirer/prompts");
    const mockSelect = vi.mocked(select);
    
    mockSelect.mockResolvedValue("gemini");

    const result = await getAgentType();

    expect(result).toBe("gemini");
  });
});
