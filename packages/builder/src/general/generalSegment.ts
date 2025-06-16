import type { ListItem, RootContent } from "mdast";
import { generalRules } from "./rules";

export const generalSegment = async (): Promise<RootContent[]> => {
  const generalItems = generalRules;

  const segment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [{ type: "text", value: "General Guidelines" }],
    },
    ...generalItems.map(
      (item): ListItem => ({
        type: "listItem",
        children: [
          { type: "paragraph", children: [{ type: "text", value: item }] },
        ],
      })
    ),
  ];
  return segment;
};
