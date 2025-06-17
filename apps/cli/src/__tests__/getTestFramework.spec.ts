import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

const frameworks = ["jest", "vitest", "mocha"];

vi.mock("@vibe-builder/builder", () => ({
  getAvailableTestFrameworks: () => frameworks,
}));
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getTestFramework", () => {
  it("prompts user with testing framework options", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("jest");
    const { getTestFramework } = await import("../getTestFramework/getTestFramework");

    const result = await getTestFramework();

    expect(result).toBe("jest");
    expect(selectMock).toHaveBeenCalledWith({
      message: "Which testing framework would you like to use?",
      default: null,
      choices: [
        { name: "None", value: null },
        ...frameworks.map((framework) => ({ name: framework, value: framework })),
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getTestFramework } = await import("../getTestFramework/getTestFramework");

    const result = await getTestFramework();

    expect(result).toBeNull();
  });
});
