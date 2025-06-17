import type { ListItem, RootContent } from "mdast";
import { jestRules } from "./jest";
import { vitestRules } from "./vitest";
import { mochaRules } from "./mocha";

const testingRulesMap: Record<string, readonly string[]> = {
  jest: jestRules,
  vitest: vitestRules,
  mocha: mochaRules,
};

export const testingSegment = async (
  framework: string
): Promise<RootContent[]> => {
  const testingItems = testingRulesMap[framework] ?? [];

  const segment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Testing framework" },
        { type: "text", value: ` (${framework})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      children: testingItems.map(
        (item): ListItem => ({
          type: "listItem",
          children: [
            { type: "paragraph", children: [{ type: "text", value: item }] },
          ],
        })
      ),
    },
  ];

  return segment;
};
