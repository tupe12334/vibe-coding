import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

const systems = ["turbo", "nx", "lerna"];

vi.mock("@vibe-builder/builder", () => ({
  getAvailableMonorepoSystems: () => systems,
}));
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getMonorepoSystem", () => {
  it("prompts user with monorepo system options", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("nx");
    const { getMonorepoSystem } = await import("../getMonorepoSystem");

    const result = await getMonorepoSystem();

    expect(result).toBe("nx");
    expect(selectMock).toHaveBeenCalledWith({
      message: "Which monorepo system would you like to use?",
      default: null,
      choices: [
        { name: "None", value: null },
        ...systems.map((system) => ({ name: system, value: system })),
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getMonorepoSystem } = await import("../getMonorepoSystem");

    const result = await getMonorepoSystem();

    expect(result).toBeNull();
  });
});
