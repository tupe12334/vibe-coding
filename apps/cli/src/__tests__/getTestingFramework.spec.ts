import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

vi.mock("@vibe-builder/builder", () => ({
  getAvailableTestingFrameworks: () => ["jest", "vitest", "mocha"],
  getAvailableFrameworks: () => ["cypress", "playwright"],
}));
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getTestingFramework", () => {
  it("prompts user with testing framework options for lib", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("jest");
    const { getTestingFramework } = await import("../getTestingFramework");

    const result = await getTestingFramework("lib");

    expect(result).toBe("jest");
    expect(selectMock).toHaveBeenCalledWith({
      message: "Which testing framework would you like to use?",
      default: null,
      choices: [
        { name: "None", value: null },
        { name: "jest", value: "jest" },
        { name: "vitest", value: "vitest" },
        { name: "Skip", value: null },
      ],
    });
  });

  it("prompts user with testing framework options for e2e", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("cypress");
    const { getTestingFramework } = await import("../getTestingFramework");

    const result = await getTestingFramework("e2e");

    expect(result).toBe("cypress");
    expect(selectMock).toHaveBeenCalledWith({
      message: "Which testing framework would you like to use?",
      default: null,
      choices: [
        { name: "None", value: null },
        { name: "cypress", value: "cypress" },
        { name: "playwright", value: "playwright" },
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getTestingFramework } = await import("../getTestingFramework");

    const result = await getTestingFramework("lib");

    expect(result).toBeNull();
  });
});
