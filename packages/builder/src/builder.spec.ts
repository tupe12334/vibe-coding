import { describe, expect, test } from "vitest";
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
});
