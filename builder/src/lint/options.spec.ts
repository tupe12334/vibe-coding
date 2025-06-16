import { assertType, describe, it } from "vitest";
import type { LintSystemOption } from "./options";

// ensure availableFor uses only language names

describe("LintSystemOption", () => {
  it("accepts language names", () => {
    assertType<LintSystemOption>({ name: "eslint", availableFor: ["javascript"] });
    // @ts-expect-error invalid language name
    assertType<LintSystemOption>({ name: "eslint", availableFor: ["python"] });
  });
});
