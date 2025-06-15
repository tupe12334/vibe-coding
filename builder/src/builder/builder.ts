import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { join } from "path";
import { generalSegment } from "./general/generalSegment";
import { languageSegment } from "./language/languageSegment";
import { projectSegment } from "./project/projectSegment";
import { BuilderOptions } from "./BuilderOptions";


export async function builder(
  options: BuilderOptions | undefined
): Promise<string> {
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
  const templatesPath = join(__dirname, "../../templates");

  tree.children = tree.children.concat(await generalSegment(templatesPath));
  if (options === undefined) {
    return toMarkdown(tree);
  }
  const { language, packageManager, projectType } = options;

  if (language) {
    tree.children = tree.children.concat(
      await languageSegment(templatesPath, language)
    );
  }

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

  if (projectType) {
    tree.children = tree.children.concat(
      await projectSegment(templatesPath, projectType)
    );
  }

  return toMarkdown(tree);
}
