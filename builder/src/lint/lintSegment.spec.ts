import { describe, expect, test } from "vitest";
import { lintSegment } from "./lintSegment";

describe("lintSegment", () => {
  test("returns lint system guidelines", async () => {
    const segment = await lintSegment("eslint");
    expect(segment).toMatchSnapshot();
  });
});
