import type { ListItem, RootContent } from "mdast";
import { uiRules } from "./rules";

export const uiSegment = async (): Promise<RootContent[]> => {
  const segment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [{ type: "text", value: "General UI Guidelines" }],
    },
    ...uiRules.map(
      (rule): ListItem => ({
        type: "listItem",
        children: [
          { type: "paragraph", children: [{ type: "text", value: rule }] },
        ],
      })
    ),
  ];
  return segment;
};
