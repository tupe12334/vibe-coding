import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getCreatedAt", () => {
  it("prompts user about adding timestamp", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(true);
    const { getCreatedAt } = await import("./getCreatedAt");

    const result = await getCreatedAt();

    expect(result).toBe(true);
    expect(selectMock).toHaveBeenCalledWith({
      message: "Would you like to add a creation timestamp?",
      default: false,
      choices: [
        { name: "Yes", value: true },
        { name: "No", value: false },
        { name: "Skip", value: null },
      ],
    });
  });

  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getCreatedAt } = await import("./getCreatedAt");

    const result = await getCreatedAt();

    expect(result).toBeNull();
  });
});
