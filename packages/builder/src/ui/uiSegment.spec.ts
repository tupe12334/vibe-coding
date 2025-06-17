import { describe, expect, test } from "vitest";
import { uiSegment } from "./uiSegment";

describe("uiSegment", () => {
  test("returns general ui guidelines", async () => {
    const segment = await uiSegment();
    expect(segment).toMatchSnapshot();
  });
});
