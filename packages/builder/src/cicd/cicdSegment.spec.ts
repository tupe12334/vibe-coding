import { describe, expect, test } from "vitest";
import { cicdSegment } from "./cicdSegment";

describe("cicdSegment", () => {
  test("returns cicd guidelines", async () => {
    const segment = await cicdSegment("github-actions");
    expect(segment).toMatchSnapshot();
  });
});
