import { describe, expect, test } from "vitest";
import { builder } from "./builder";
describe("builder", () => {
  test("working with language only", async () => {
    const response = await builder({ language: "typescript" });

    expect(response).toMatchSnapshot();
  });
});
