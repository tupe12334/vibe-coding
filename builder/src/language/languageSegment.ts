import { Languages } from "./options";
import { ListItem, RootContent } from "mdast";
import { javascriptRules } from "./javascript";
import { typescriptRules } from "./typescript";

const languageRulesMap: Record<string, readonly string[]> = {
  javascript: javascriptRules,
  typescript: typescriptRules,
};

export const languageSegment = async (
  language: string
): Promise<RootContent[]> => {
  const languageItems = languageRulesMap[language] ?? [];

  // Find the language configuration to check for subsets
  const languageConfig = Languages.find((lang) => lang.name === language);

  let allItems = [...languageItems];

  if (languageConfig && "subset" in languageConfig) {
    for (const subsetLanguage of languageConfig.subset) {
      const subsetItems = languageRulesMap[subsetLanguage] ?? [];
      allItems = allItems.concat(subsetItems);
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
