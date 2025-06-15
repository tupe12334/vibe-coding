import { readFile } from "fs/promises";
import { join } from "path";
import { Languages } from "./options";

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

  // Find the language configuration to check for subsets
  const languageConfig = Languages.find(lang => lang.name === language);
  
  // Collect "do" items starting with current language
  let allDoItems = [...languageObject.do];
  
  // If language has subsets, load and append their content
  if (languageConfig?.subset) {
    for (const subsetLanguage of languageConfig.subset) {
      try {
        const subsetJsonFile = (
          await readFile(join(templatesPath, "language", `${subsetLanguage}.json`), {
            encoding: "utf-8",
          })
        ).toString();
        const subsetObject = JSON.parse(subsetJsonFile);
        allDoItems = allDoItems.concat(subsetObject.do);
      } catch (error) {
        // If subset template doesn't exist, skip it
        console.warn(`Warning: Could not load subset template for ${subsetLanguage}`);
      }
    }
  }

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
    ...allDoItems.map((item: string) => ({
      type: "listItem",
      children: [{ type: "text", value: item }],
    })),
  ];
  return languageSegment;
};
