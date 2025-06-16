import { Languages } from "./options";
import { ListItem, RootContent } from "mdast";
import { javascriptRules, typescriptRules } from "../templates/language";

export const languageSegment = async (
  _templatesPath: string,
  language: string
): Promise<RootContent[]> => {
  const languageRulesMap: Record<string, readonly string[]> = {
    javascript: javascriptRules,
    typescript: typescriptRules,
  };

  const languageItems = languageRulesMap[language] || [];

  // Find the language configuration to check for subsets
  const languageConfig = Languages.find((lang) => lang.name === language);

  // Collect items starting with current language
  let allItems = [...languageItems];

  // If language has subsets, load and append their content
  if (languageConfig?.subset) {
    for (const subsetLanguage of languageConfig.subset) {
      const subsetItems = languageRulesMap[subsetLanguage];
      if (subsetItems) {
        allItems = allItems.concat(subsetItems);
      } else {
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
