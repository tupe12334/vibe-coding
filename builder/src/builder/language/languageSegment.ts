import { readFile } from "fs/promises";
import { join } from "path";
import { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";

export const languageSegment = async (
  templatesPath: string,
  language: string
) => {
  const languageJsonFile = (
    await readFile(join(templatesPath, "language", `${language}.json`), {
      encoding: "utf-8",
    })
  ).toString();
  const languageObject = JSON.parse(languageJsonFile);
  console.log({ languageObject });

  const languageSegment = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Programming language" },
        { type: "text", value: ` (${language})` },
      ],
    },
    { type: "heading", depth: 3, children: [{ type: "text", value: "Do" }] },
    ...languageObject.do.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
    { type: "heading", depth: 3, children: [{ type: "text", value: "Don't" }] },
  ];
  return languageSegment;
};
