import { describe, expect, test } from "vitest";
import { testingSegment } from "./testingSegment";

describe("testingSegment", () => {
  test("returns testing framework guidelines", async () => {
    const segment = await testingSegment("jest");
    expect(segment).toMatchSnapshot();
  });
});
