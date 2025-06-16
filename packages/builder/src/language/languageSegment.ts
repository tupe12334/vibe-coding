import { readFile } from "fs/promises";
import { join } from "path";
import { Languages } from "./options";
import { ListItem, RootContent } from "mdast";

export const languageSegment = async (
  templatesPath: string,
  language: string
): Promise<RootContent[]> => {
  const languageJsonFile = (
    await readFile(join(templatesPath, "language", `${language}.json`), {
      encoding: "utf-8",
    })
  ).toString();
  const languageItems = JSON.parse(languageJsonFile);

  // Find the language configuration to check for subsets
  const languageConfig = Languages.find((lang) => lang.name === language);

  // Collect items starting with current language
  let allItems = [...languageItems];

  // If language has subsets, load and append their content
  if (languageConfig?.subset) {
    for (const subsetLanguage of languageConfig.subset) {
      try {
        const subsetJsonFile = (
          await readFile(
            join(templatesPath, "language", `${subsetLanguage}.json`),
            {
              encoding: "utf-8",
            }
          )
        ).toString();
        const subsetItems = JSON.parse(subsetJsonFile);
        allItems = allItems.concat(subsetItems);
      } catch (error) {
        // If subset template doesn't exist, skip it
        console.warn(
          `Warning: Could not load subset template for ${subsetLanguage}`
        );
      }
    }
  }

  const languageSegment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Programming language" },
        { type: "text", value: ` (${language})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      children: allItems.map(
        (item: string): ListItem => ({
          type: "listItem",
          children: [
            { type: "paragraph", children: [{ type: "text", value: item }] },
          ],
        })
      ),
    },
  ];
  return languageSegment;
};
