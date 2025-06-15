import { readFile } from "fs/promises";
import { join } from "path";

import { RootContent } from "mdast";

export const generalSegment = async (
  templatesPath: string
): Promise<RootContent[]> => {
  const generalJsonFile = (
    await readFile(join(templatesPath, "general.json"), {
      encoding: "utf-8",
    })
  ).toString();
  const generalItems = JSON.parse(generalJsonFile);

  const generalSegment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [{ type: "text", value: "General Guidelines" }],
    },
    ...generalItems.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
  ];
  return generalSegment;
};
