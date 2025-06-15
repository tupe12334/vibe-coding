import { readFile } from "fs/promises";
import { join } from "path";
import type { RootContent } from "mdast";

export const projectSegment = async (
  templatesPath: string,
  projectType: string
): Promise<RootContent[]> => {
  const projectJsonFile = (
    await readFile(join(templatesPath, "project", `${projectType}.json`), {
      encoding: "utf-8",
    })
  ).toString();
  const projectItems = JSON.parse(projectJsonFile);

  const projectSegment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Project type" },
        { type: "text", value: ` (${projectType})` },
      ],
    },
    ...projectItems.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
  ];

  return projectSegment;
};
