import { describe, expect, test } from "vitest";
import { releaseSegment } from "./releaseSegment";

describe("releaseSegment", () => {
  test("returns release system guidelines", async () => {
    const segment = await releaseSegment("release-it");
    expect(segment).toMatchSnapshot();
  });
});
