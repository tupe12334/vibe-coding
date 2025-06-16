import type { RootContent } from "mdast";
import { backendRules } from "./backend";
import { frontendRules } from "./frontend";
import { libRules } from "./lib";
import { uiLibRules } from "./ui-lib";
import { e2eRules } from "./e2e";
import { ProjectTypes } from "./options";

const projectRulesMap: Record<string, readonly string[]> = {
  backend: backendRules,
  frontend: frontendRules,
  lib: libRules,
  "ui-lib": uiLibRules,
  e2e: e2eRules,
};

export const projectSegment = async (
  projectType: string
): Promise<RootContent[]> => {
  let projectItems = projectRulesMap[projectType] ?? [];

  const projectConfig = ProjectTypes.find((p) => p.name === projectType);
  if (projectConfig?.subset) {
    for (const subset of projectConfig.subset) {
      const subsetItems = projectRulesMap[subset] ?? [];
      projectItems = projectItems.concat(subsetItems);
    }
  }

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
