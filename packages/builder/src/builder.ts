import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { generalSegment } from "./general/generalSegment";
import { languageSegment } from "./language/languageSegment";
import { projectSegment } from "./project/projectSegment";
import { frameworkSegment } from "./framework/frameworkSegment";
import { lintSegment } from "./lint/lintSegment";
import { releaseSegment } from "./release/releaseSegment";
import { monorepoSegment } from "./monorepo/monorepoSegment";
import { cicdSegment } from "./cicd/cicdSegment";
import { BuilderOptions } from "./BuilderOptions";
import { createdAtSegment } from "./createdAt/createdAtSegment";
import { testingSegment } from "./testing/testingSegment";
import { uiSegment } from "./ui/uiSegment";

export async function builder(options?: BuilderOptions): Promise<string> {
  const tree: Root = {
    type: "root",
    children: [
      {
        type: "heading",
        depth: 1,
        children: [{ type: "text", value: "AI agent instructions" }],
      },
    ],
  };
  tree.children = tree.children.concat(await generalSegment());
  if (options === undefined) {
    return toMarkdown(tree);
  }
  const {
    language,
    packageManager,
    projectType,
    framework,
    lintSystem,
    testFramework,
    releaseSystem,
    monorepoSystem,
    cicdSystem,
    createdAt,
  } = options;
  if (packageManager) {
    tree.children.push({
      type: "paragraph",
      children: [
        {
          type: "text",
          value: `Package Manager: ${packageManager}`,
        },
      ],
    });
  }

  if (monorepoSystem) {
    tree.children = tree.children.concat(await monorepoSegment(monorepoSystem));
  }

  if (cicdSystem) {
    tree.children = tree.children.concat(await cicdSegment(cicdSystem));
  }

  if (language) {
    tree.children = tree.children.concat(await languageSegment(language));
    if (lintSystem) {
      tree.children = tree.children.concat(await lintSegment(lintSystem));
    }
  }

  if (testFramework) {
    tree.children = tree.children.concat(await testingSegment(testFramework));
  }

  if (projectType) {
    tree.children = tree.children.concat(await projectSegment(projectType));

    // Extract to function and add spec `toIncludeUIGuidelines`
    if (projectType === "frontend" || projectType === "ui-lib") {
      tree.children = tree.children.concat(await uiSegment());
    }
  }

  if (framework) {
    tree.children = tree.children.concat(await frameworkSegment(framework));
  }

  if (releaseSystem) {
    tree.children = tree.children.concat(await releaseSegment(releaseSystem));
  }

  if (createdAt) {
    tree.children = tree.children.concat(await createdAtSegment());
  }

  return toMarkdown(tree);
}
