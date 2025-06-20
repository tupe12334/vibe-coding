import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

const systems = ["release-it", "semantic-release"];

vi.mock("@vibe-builder/builder", () => ({
  getAvailableReleaseSystems: () => systems,
}));
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getReleaseSystem", () => {
  it("prompts user with release system options", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("release-it");
    const { getReleaseSystem } = await import("./getReleaseSystem");

    const result = await getReleaseSystem();

    expect(result).toBe("release-it");
    expect(selectMock).toHaveBeenCalledWith({
      message: "Which release system would you like to use?",
      default: "release-it",
      choices: [
        ...systems.map((system) => ({ name: system, value: system })),
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getReleaseSystem } = await import("./getReleaseSystem");

    const result = await getReleaseSystem();

    expect(result).toBeNull();
  });
});
