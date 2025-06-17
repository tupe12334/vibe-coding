import { describe, expect, test, vi } from "vitest";
import { builder } from "./builder";
describe("builder", () => {
  test("working with no arguments returns general segment only", async () => {
    const response = await builder();

    expect(response).toMatchSnapshot();
  });

  test("working with language only with a language that is superset", async () => {
    const response = await builder({ language: "typescript" });

    expect(response).toMatchSnapshot();
  });
  test("working with language only", async () => {
    const response = await builder({ language: "javascript" });

    expect(response).toMatchSnapshot();
  });
  test("working with language and package manager", async () => {
    const response = await builder({
      language: "typescript",
      packageManager: "npm",
    });

    expect(response).toMatchSnapshot();
  });
  test("working with language and lint system", async () => {
    const response = await builder({
      language: "javascript",
      lintSystem: "eslint",
    });

    expect(response).toMatchSnapshot();
  });
  test("working with project type only", async () => {
    const response = await builder({ projectType: "frontend" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type ui-lib", async () => {
    const response = await builder({ projectType: "ui-lib" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type lib", async () => {
    const response = await builder({ projectType: "lib" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type e2e", async () => {
    const response = await builder({ projectType: "e2e" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type lib and language typescript", async () => {
    const response = await builder({
      projectType: "lib",
      language: "typescript",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with framework only - nestjs", async () => {
    const response = await builder({ framework: "nestjs" });

    expect(response).toMatchSnapshot();
  });

  test("working with framework only - react", async () => {
    const response = await builder({ framework: "react" });

    expect(response).toMatchSnapshot();
  });

  test("working with framework only - playwright", async () => {
    const response = await builder({ framework: "playwright" });

    expect(response).toMatchSnapshot();
  });

  test("working with framework only - cypress", async () => {
    const response = await builder({ framework: "cypress" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type and framework - backend with nestjs", async () => {
    const response = await builder({
      projectType: "backend",
      framework: "nestjs",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with project type and framework - frontend with react", async () => {
    const response = await builder({
      projectType: "frontend",
      framework: "react",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with project type and framework - e2e with playwright", async () => {
    const response = await builder({
      projectType: "e2e",
      framework: "playwright",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with language, project type and framework", async () => {
    const response = await builder({
      language: "typescript",
      projectType: "backend",
      framework: "nestjs",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with release system only", async () => {
    const response = await builder({ releaseSystem: "release-it" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type and release system", async () => {
    const response = await builder({
      projectType: "lib",
      releaseSystem: "semantic-release",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with monorepo system only", async () => {
    const response = await builder({ monorepoSystem: "turbo" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type and monorepo system", async () => {
    const response = await builder({
      projectType: "lib",
      monorepoSystem: "nx",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with cicd system only", async () => {
    const response = await builder({ cicdSystem: "github-actions" });

    expect(response).toMatchSnapshot();
  });

  test("working with test framework only", async () => {
    const response = await builder({ testFramework: "jest" });

    expect(response).toMatchSnapshot();
  });

  test("working with project type and cicd system", async () => {
    const response = await builder({
      projectType: "lib",
      cicdSystem: "gitlab-ci",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with all options including framework", async () => {
    const response = await builder({
      language: "typescript",
      packageManager: "npm",
      lintSystem: "eslint",
      projectType: "frontend",
      framework: "react",
    });

    expect(response).toMatchSnapshot();
  });

  test("working with createdAt option", async () => {
    const date = new Date("2020-01-01T00:00:00.000Z");
    vi.useFakeTimers();
    vi.setSystemTime(date);
    const response = await builder({ createdAt: true });
    expect(response).toMatchSnapshot();
    vi.useRealTimers();
  });
});
