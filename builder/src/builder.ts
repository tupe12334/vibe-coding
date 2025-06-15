import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { join } from "path";
import { generalSegment } from "./general/generalSegment";
import { languageSegment } from "./language/languageSegment";
import { projectSegment } from "./project/projectSegment";
import { frameworkSegment } from "./framework/frameworkSegment";
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
  const templatesPath = join(__dirname, "../templates");

  tree.children = tree.children.concat(await generalSegment(templatesPath));
  if (options === undefined) {
    return toMarkdown(tree);
  }
  const { language, packageManager, projectType, framework } = options;
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
    tree.children = tree.children.concat(
      await languageSegment(templatesPath, language)
    );
  }

  if (projectType) {
    tree.children = tree.children.concat(
      await projectSegment(templatesPath, projectType)
    );
  }

  if (framework) {
    tree.children = tree.children.concat(
      await frameworkSegment(templatesPath, framework)
    );
  }

  return toMarkdown(tree);
}
