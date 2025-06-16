import { RootContent } from "mdast";
import { nestjsRules, reactRules } from "../templates/framework";

export const frameworkSegment = async (
  _templatesPath: string,
  framework: string
): Promise<RootContent[]> => {
  const frameworkRulesMap: Record<string, readonly string[]> = {
    nestjs: nestjsRules,
    react: reactRules,
  };

  const frameworkItems = frameworkRulesMap[framework] || [];

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
