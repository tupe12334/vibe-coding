import { describe, expect, test } from "vitest";
import { lintSegment } from "./lintSegment";
import { join } from "path";

const templatesPath = join(__dirname, "../../templates");

describe("lintSegment", () => {
  test("returns lint system guidelines", async () => {
    const segment = await lintSegment(templatesPath, "eslint");
    expect(segment).toMatchSnapshot();
  });
});
