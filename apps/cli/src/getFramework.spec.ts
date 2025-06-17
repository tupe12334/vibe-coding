import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

vi.mock("@vibe-builder/builder", () => ({
  getAvailableFrameworks: (projectType: string) => (projectType === "none" ? [] : ["react", "svelte"]),
}));
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

import { getFramework } from "./getFramework";

describe("getFramework", () => {
  it("returns null when no frameworks available", async () => {
    const result = await getFramework("none");
    expect(result).toBeNull();
  });

  it("prompts user when frameworks exist", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("react");
    const result = await getFramework("lib");
    expect(result).toBe("react");
    expect(selectMock).toHaveBeenCalledWith({
      message: "Which framework would you like to use?",
      default: null,
      choices: [
        { name: "react", value: "react" },
        { name: "svelte", value: "svelte" },
        { name: "Skip", value: null },
      ],
    });
  });
});
