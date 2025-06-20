import { describe, expect, it, vi } from "vitest";
import { select } from "@inquirer/prompts";

vi.mock("@vibe-builder/builder", () => ({
  Languages: [{ name: "typescript" }],
}));
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
}));


describe("getLanguage", () => {
  it("returns null when skip is chosen", async () => {
    const selectMock = vi.mocked(select);
    selectMock.mockResolvedValueOnce(null);
    const { getLanguage } = await import("./getLanguage");
    const result = await getLanguage();
    expect(result).toBeNull();
  });
});
