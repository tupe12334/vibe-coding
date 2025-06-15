import { readFile } from "fs/promises";
import { join } from "path";
import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";

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
  const templatesPath = join(__dirname, "../templates");

  // const generalMdFile = (
  //   await readFile(join(templatesPath, "general.md"))
  // ).toString();

  const languageJsonFile = (
    await readFile(
      join(templatesPath, "language", `${options.language}.json`),
      { encoding: "utf-8" }
    )
  ).toString();
  const languageObject = JSON.parse(languageJsonFile);
  console.log({ languageObject });

  tree.children = tree.children.concat([
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Programming language" },
        { type: "text", value: ` (${options.language})` },
      ],
    },
    { type: "heading", depth: 3, children: [{ type: "text", value: "Do" }] },
    ...languageObject.do.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
    { type: "heading", depth: 3, children: [{ type: "text", value: "Don't" }] },
  ]);

  return toMarkdown(tree);
}
