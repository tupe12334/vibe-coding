import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";
import { projectTypes } from "./types";

vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

import { getProjectType } from "./getProjectType";

describe("getProjectType", () => {
  it("prompts user with project type options", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("frontend");

    const result = await getProjectType();

    expect(result).toBe("frontend");
    expect(selectMock).toHaveBeenCalledWith({
      message: "What type of project are you working on?",
      default: "frontend",
      choices: [
        ...projectTypes.map((project) => ({
          name: project,
          value: project,
        })),
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);

    const result = await getProjectType();

    expect(result).toBeNull();
  });
});
