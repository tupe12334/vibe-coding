import { describe, expect, test } from "vitest";
import { createdAtSegment } from "./createdAtSegment";

describe("createdAtSegment", () => {
  test("returns timestamp segment", async () => {
    const date = new Date("2020-01-01T00:00:00.000Z");
    const segment = await createdAtSegment(date);
    expect(segment).toMatchSnapshot();
  });
});
