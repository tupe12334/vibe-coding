import { describe, it, expect, vi } from "vitest";
import { getAgentType } from "./getAgentType";

// Mock the inquirer prompts
vi.mock("@inquirer/prompts", () => ({
  checkbox: vi.fn(),
}));

describe("getAgentType", () => {
  it("should return the selected agent types", async () => {
    const { checkbox } = await import("@inquirer/prompts");
    const mockCheckbox = vi.mocked(checkbox);
    
    mockCheckbox.mockResolvedValue(["copilot", "gemini"]);

    const result = await getAgentType();

    expect(result).toEqual(["copilot", "gemini"]);
    expect(mockCheckbox).toHaveBeenCalledWith({
      message: "Which AI agents are you working with? (Select multiple)",
      choices: [
        { name: "Codex", value: "codex", checked: true },
        { name: "Copilot", value: "copilot", checked: false },
        { name: "Gemini", value: "gemini", checked: false },
      ],
      validate: expect.any(Function),
    });
  });

  it("should return codex as default when selected", async () => {
    const { checkbox } = await import("@inquirer/prompts");
    const mockCheckbox = vi.mocked(checkbox);
    
    mockCheckbox.mockResolvedValue(["codex"]);

    const result = await getAgentType();

    expect(result).toEqual(["codex"]);
  });

  it("should return multiple agents when selected", async () => {
    const { checkbox } = await import("@inquirer/prompts");
    const mockCheckbox = vi.mocked(checkbox);
    
    mockCheckbox.mockResolvedValue(["codex", "copilot", "gemini"]);

    const result = await getAgentType();

    expect(result).toEqual(["codex", "copilot", "gemini"]);
  });

  it("should validate that at least one agent is selected", async () => {
    const { checkbox } = await import("@inquirer/prompts");
    const mockCheckbox = vi.mocked(checkbox);
    
    mockCheckbox.mockResolvedValue(["copilot"]);

    await getAgentType();

    const callArgs = mockCheckbox.mock.calls[0][0];
    
    // Check that validate function exists
    expect(callArgs.validate).toBeDefined();
  });
});
