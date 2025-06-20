import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

import { e2ePreferences } from "./e2ePreferences";

describe("e2ePreferences", () => {
  it("prompts user with network mocking options", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce("msw");

    const result = await e2ePreferences();

    expect(result).toBe("msw");
    expect(selectMock).toHaveBeenCalledWith({
      message: "How do you prefer to mock network requests?",
      default: "msw",
      choices: [
        { name: "MSW", value: "msw" },
        { name: "Route Interception", value: "route-interception" },
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);

    const result = await e2ePreferences();

    expect(result).toBeNull();
  });
});
