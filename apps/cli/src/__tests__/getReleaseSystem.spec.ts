import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

vi.mock("@vibe-builder/builder", () => ({
  getAvailableReleaseSystems: () => ["release-it"],
}));

vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));

describe("getReleaseSystem", () => {
  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getReleaseSystem } = await import("../getReleaseSystem");
    const result = await getReleaseSystem();
    expect(result).toBeNull();
  });
});

