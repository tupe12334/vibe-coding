import { describe, expect, test, vi } from "vitest";

vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(() => Promise.resolve("frontend")),
}));
import { select } from "@inquirer/prompts";

import { getProjectType } from "./getProjectType";

describe("getProjectType", () => {
  test("returns selected project type", async () => {
    const result = await getProjectType();

    expect(result).toBe("frontend");
    // ensure that the prompt module was invoked
    expect(vi.mocked(select).mock.calls.length).toBe(1);
  });
});
