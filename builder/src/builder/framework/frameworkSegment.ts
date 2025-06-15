import { readFile } from "fs/promises";
import { join } from "path";
import { RootContent } from "mdast";

export const frameworkSegment = async (
  templatesPath: string,
  framework: string
): Promise<RootContent[]> => {
  const frameworkJsonFile = (
    await readFile(join(templatesPath, "framework", `${framework}.json`), {
      encoding: "utf-8",
    })
  ).toString();
  const frameworkItems = JSON.parse(frameworkJsonFile);

  const frameworkSegment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Framework" },
        { type: "text", value: ` (${framework})` },
      ],
    },
    ...frameworkItems.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
  ];

  return frameworkSegment;
};
