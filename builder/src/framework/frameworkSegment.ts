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
    ...frameworkItems.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
  ];

  return frameworkSegment;
};
