import { assertType, describe, expect, it } from "vitest";
import { BuilderOptions } from "./BuilderOptions";

describe("BuilderOptions", () => {
  it("should accept empty options", () => {
    assertType<BuilderOptions>({});
  });
  it("should accept language only", () => {
    assertType<BuilderOptions>({ language: "javascript" });
    assertType<BuilderOptions>({ language: "python" });
    assertType<BuilderOptions>({ language: "typescript" });
    assertType<BuilderOptions>({ language: "java" });
  });
  
  it("should accept packageManager only when language is defined", () => {
    // @ts-expect-error wrong types
    assertType<BuilderOptions>({
      projectType: "frontend",
      packageManager: "npm",
    });
    assertType<BuilderOptions>({
      projectType: "frontend",
      packageManager: "npm",
      language: "javascript",
    });
    assertType<BuilderOptions>({
      packageManager: "npm",
      language: "javascript",
    });
  });
  it("should accept lintSystem only when language is defined", () => {
    // @ts-expect-error wrong types
    assertType<BuilderOptions>({ lintSystem: "eslint" });
    assertType<BuilderOptions>({
      language: "javascript",
      lintSystem: "eslint",
    });
  });

  it("should accept releaseSystem without restrictions", () => {
    assertType<BuilderOptions>({ releaseSystem: "release-it" });
    assertType<BuilderOptions>({
      projectType: "lib",
      releaseSystem: "semantic-release",
    });
  });

  it("should accept monorepoSystem without restrictions", () => {
    assertType<BuilderOptions>({ monorepoSystem: "turbo" });
    assertType<BuilderOptions>({
      projectType: "lib",
      monorepoSystem: "nx",
    });
  });

  it("should accept createdAt option", () => {
    assertType<BuilderOptions>({ createdAt: true });
  });
});
