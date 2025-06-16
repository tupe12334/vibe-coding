import type { ListItem, RootContent } from "mdast";
import { cicdDefaultRules } from "./rules";

export const cicdSegment = async (system: string): Promise<RootContent[]> => {
  const segment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "CI/CD system" },
        { type: "text", value: ` (${system})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      children: cicdDefaultRules.map(
        (rule): ListItem => ({
          type: "listItem",
          children: [
            { type: "paragraph", children: [{ type: "text", value: rule }] },
          ],
        })
      ),
    },
  ];

  return segment;
};
