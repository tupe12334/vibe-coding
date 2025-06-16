import type { RootContent } from "mdast";
import { backendRules } from "./backend";
import { frontendRules } from "./frontend";
import { libRules } from "./lib";
import { uiLibRules } from "./ui-lib";

const projectRulesMap: Record<string, string[]> = {
  backend: backendRules,
  frontend: frontendRules,
  lib: libRules,
  "ui-lib": uiLibRules,
};

export const projectSegment = async (
  projectType: string
): Promise<RootContent[]> => {
  const projectItems = projectRulesMap[projectType] || [];

  const projectSegment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Project type" },
        { type: "text", value: ` (${projectType})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      children: projectItems.map((item: string) => ({
        type: "listItem",
        children: [
          {
            type: "paragraph",
            children: [{ type: "text", value: item }],
          },
        ],
      })),
    },
  ];

  return projectSegment;
};
