import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { generalSegment } from "./general/generalSegment";
import { languageSegment } from "./language/languageSegment";
import { projectSegment } from "./project/projectSegment";
import { frameworkSegment } from "./framework/frameworkSegment";
import { lintSegment } from "./lint/lintSegment";
import { releaseSegment } from "./release/releaseSegment";
import { BuilderOptions } from "./BuilderOptions";

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
    releaseSystem,
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

  if (language) {
    tree.children = tree.children.concat(await languageSegment(language));
    if (lintSystem) {
      tree.children = tree.children.concat(await lintSegment(lintSystem));
    }
  }

  if (projectType) {
    tree.children = tree.children.concat(await projectSegment(projectType));
  }

  if (framework) {
    tree.children = tree.children.concat(await frameworkSegment(framework));
  }

  if (releaseSystem) {
    tree.children = tree.children.concat(await releaseSegment(releaseSystem));
  }

  return toMarkdown(tree);
}
