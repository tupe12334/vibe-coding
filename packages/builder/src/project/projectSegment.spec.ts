import { describe, expect, test } from "vitest";
import { projectSegment } from "./projectSegment";

describe("projectSegment", () => {
  test("ui-lib includes lib rules", async () => {
    const segment = await projectSegment("ui-lib");
    expect(segment).toMatchSnapshot();
  });

  test("e2e project returns e2e rules", async () => {
    const segment = await projectSegment("e2e");
    expect(segment).toMatchSnapshot();
  });
});
