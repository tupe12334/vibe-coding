import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

vi.mock("@vibe-builder/builder", () => ({
  getAvailableTestingFrameworks: () => ["jest", "vitest", "mocha"],
}));
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getTestingFramework", () => {
  it("prompts user with testing framework options", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("jest");
    const { getTestingFramework } = await import("../getTestingFramework");

    const result = await getTestingFramework();

    expect(result).toBe("jest");
    expect(selectMock).toHaveBeenCalledWith({
      message: "Which testing framework would you like to use?",
      default: null,
      choices: [
        { name: "None", value: null },
        { name: "jest", value: "jest" },
        { name: "vitest", value: "vitest" },
        { name: "mocha", value: "mocha" },
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getTestingFramework } = await import("../getTestingFramework");

    const result = await getTestingFramework();

    expect(result).toBeNull();
  });
});
