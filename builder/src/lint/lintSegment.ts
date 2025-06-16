import { readFile } from "fs/promises";
import { join } from "path";
import type { ListItem, RootContent } from "mdast";

export const lintSegment = async (
  templatesPath: string,
  lintSystem: string
): Promise<RootContent[]> => {
  const lintJsonFile = (
    await readFile(join(templatesPath, "lint", `${lintSystem}.json`), {
      encoding: "utf-8",
    })
  ).toString();
  const lintItems = JSON.parse(lintJsonFile);

  const segment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Lint system" },
        { type: "text", value: ` (${lintSystem})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      children: lintItems.map(
        (item: string): ListItem => ({
          type: "listItem",
          children: [
            { type: "paragraph", children: [{ type: "text", value: item }] },
          ],
        })
      ),
    },
  ];

  return segment;
};
