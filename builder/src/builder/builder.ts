import { readFile } from "fs/promises";
import { join } from "path";
import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import { languageSegment } from "./language/languageSegment";

export interface BuilderOptions {
  language: string;
}
export async function builder(options: BuilderOptions) {
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

  // const generalMdFile = (
  //   await readFile(join(templatesPath, "general.md"))
  // ).toString();

  tree.children = tree.children.concat(
    await languageSegment(templatesPath, options.language)
  );

  return toMarkdown(tree);
}
