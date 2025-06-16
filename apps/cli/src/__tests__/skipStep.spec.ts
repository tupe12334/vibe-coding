import { describe, expect, it, vi } from "vitest";
import { skipStep } from "../skipStep";
import { confirm } from "@inquirer/prompts";

vi.mock("@inquirer/prompts", () => ({
  confirm: vi.fn(),
}));

describe("skipStep", () => {
  it("returns true when user chooses to skip", async () => {
    const confirmMock = vi.mocked(confirm);
    confirmMock.mockResolvedValueOnce(true);
    const result = await skipStep("language");
    expect(result).toBe(true);
  });

  it("returns false when user does not skip", async () => {
    const confirmMock = vi.mocked(confirm);
    confirmMock.mockResolvedValueOnce(false);
    const result = await skipStep("project");
    expect(result).toBe(false);
  });
});
