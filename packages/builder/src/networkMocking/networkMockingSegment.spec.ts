import { describe, expect, test } from "vitest";
import { networkMockingSegment } from "./networkMockingSegment";

describe("networkMockingSegment", () => {
  test("returns network mocking line", async () => {
    const segment = await networkMockingSegment("msw");
    expect(segment).toMatchSnapshot();
  });
});
