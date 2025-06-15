import { describe, expect, test } from "vitest";
import { builder } from "./builder";
describe("builder", () => {
  test("working with no arguments returns general segment only", async () => {
    const response = await builder();

    expect(response).toMatchSnapshot();
  });

  test("working with language only", async () => {
    const response = await builder({ language: "typescript" });

    expect(response).toMatchSnapshot();
  });
  test("working with language and package manager", async () => {
    const response = await builder({
      language: "typescript",
      packageManager: "npm",
    });

    expect(response).toMatchSnapshot();
  });
  test("working with project type only", async () => {
    const response = await builder({ projectType: "frontend" });

    expect(response).toMatchSnapshot();
  });
});
