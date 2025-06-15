import { readFile } from "fs/promises";
import { join } from "path";

export const generalSegment = async (templatesPath: string) => {
  const generalJsonFile = (
    await readFile(join(templatesPath, "general.json"), {
      encoding: "utf-8",
    })
  ).toString();
  const generalItems = JSON.parse(generalJsonFile);

  const generalSegment = [
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
