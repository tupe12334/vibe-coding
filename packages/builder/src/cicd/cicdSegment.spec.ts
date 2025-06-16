import { describe, expect, test } from "vitest";
import { cicdSegment } from "./cicdSegment";

describe("cicdSegment", () => {
  test("returns cicd system line", async () => {
    const segment = await cicdSegment("github-actions");
    expect(segment).toMatchSnapshot();
  });
});
