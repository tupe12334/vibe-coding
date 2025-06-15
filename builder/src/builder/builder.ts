import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { join } from "path";
import { languageSegment } from "./language/languageSegment";
import { generalSegment } from "./general/generalSegment";
import { projectSegment } from "./project/projectSegment";

export interface BuilderOptions {
  language?: string;
  projectType?: string;
}
export async function builder(options: BuilderOptions = {}) {
  console.info(
    `Building AI agent instructions with options: ${JSON.stringify(options)}`
  );
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

  if (options.projectType) {
    tree.children = tree.children.concat(
      await projectSegment(templatesPath, options.projectType)
    );
  }

  if (options.language) {
    tree.children = tree.children.concat(
      await languageSegment(templatesPath, options.language)
    );
  }

  return toMarkdown(tree);
}
