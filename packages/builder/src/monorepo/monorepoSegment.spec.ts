import { describe, expect, test } from "vitest";
import { monorepoSegment } from "./monorepoSegment";

describe("monorepoSegment", () => {
  test("returns monorepo system line", async () => {
    const segment = await monorepoSegment("turbo");
    expect(segment).toMatchSnapshot();
  });
});
