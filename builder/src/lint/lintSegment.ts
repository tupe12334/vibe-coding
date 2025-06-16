import type { ListItem, RootContent } from "mdast";
import { eslintRules } from "./eslint";

const lintRulesMap: Record<string, readonly string[]> = {
  eslint: eslintRules,
};

export const lintSegment = async (
  lintSystem: string
): Promise<RootContent[]> => {
  const lintItems = lintRulesMap[lintSystem] ?? [];

  const segment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Lint system" },
        { type: "text", value: ` (${lintSystem})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      children: lintItems.map(
        (item: string): ListItem => ({
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
