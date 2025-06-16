import type { RootContent } from "mdast";
import { nestjsRules } from "./nestjs";
import { reactRules } from "./react";

const frameworkRulesMap: Record<string, readonly string[]> = {
  nestjs: nestjsRules,
  react: reactRules,
};

export const frameworkSegment = async (
  framework: string
): Promise<RootContent[]> => {
  const frameworkItems = frameworkRulesMap[framework] ?? [];

  const frameworkSegment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Framework" },
        { type: "text", value: ` (${framework})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      spread: false,
      children: frameworkItems.map((item: string) => ({
        type: "listItem",
        spread: false,
        children: [
          {
            type: "paragraph",
            children: [{ type: "text", value: item }],
          },
        ],
      })),
    },
  ];

  return frameworkSegment;
};
