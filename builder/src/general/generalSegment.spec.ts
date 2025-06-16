import { describe, expect, test } from "vitest";
import { generalSegment } from "./generalSegment";

describe("generalSegment", () => {
  test("returns general guidelines", async () => {
    const segment = await generalSegment();
    expect(segment).toMatchSnapshot();
  });
});
