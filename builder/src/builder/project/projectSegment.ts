import { readFile } from "fs/promises";
import { join } from "path";

export const projectSegment = async (
  templatesPath: string,
  projectType: string
) => {
  const projectJsonFile = (
    await readFile(join(templatesPath, "project", `${projectType}.json`), {
      encoding: "utf-8",
    })
  ).toString();
  const projectObject = JSON.parse(projectJsonFile);

  const projectSegment = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Project type" },
        { type: "text", value: ` (${projectType})` },
      ],
    },
    { type: "heading", depth: 3, children: [{ type: "text", value: "Do" }] },
    ...projectObject.do.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
  ];

  // Add "Don't" section if it exists
  if (projectObject.dont && projectObject.dont.length > 0) {
    projectSegment.push(
      { type: "heading", depth: 3, children: [{ type: "text", value: "Don't" }] },
      ...projectObject.dont.map((item: string) => ({
        type: "listItem",
        children: [{ type: "text", value: item }],
      }))
    );
  }

  return projectSegment;
};
