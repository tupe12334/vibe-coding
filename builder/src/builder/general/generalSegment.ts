import { readFile } from "fs/promises";
import { join } from "path";

export const generalSegment = async (templatesPath: string) => {
  const generalJsonFile = (
    await readFile(join(templatesPath, "general.json"), {
      encoding: "utf-8",
    })
  ).toString();
  const generalObject = JSON.parse(generalJsonFile);

  const generalSegment = [
    {
      type: "heading",
      depth: 2,
      children: [{ type: "text", value: "General Guidelines" }],
    },
    { type: "heading", depth: 3, children: [{ type: "text", value: "Do" }] },
    ...generalObject.do.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
  ];
  return generalSegment;
};
