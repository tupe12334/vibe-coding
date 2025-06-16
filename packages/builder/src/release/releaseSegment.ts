import type { ListItem, RootContent } from "mdast";
import { releaseItRules } from "./release-it";
import { semanticReleaseRules } from "./semantic-release";

const releaseRulesMap: Record<string, readonly string[]> = {
  "release-it": releaseItRules,
  "semantic-release": semanticReleaseRules,
};

export const releaseSegment = async (
  releaseSystem: string
): Promise<RootContent[]> => {
  const releaseItems = releaseRulesMap[releaseSystem] ?? [];

  const segment: RootContent[] = [
    {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "Release system" },
        { type: "text", value: ` (${releaseSystem})` },
      ],
    },
    {
      type: "list",
      ordered: false,
      children: releaseItems.map(
        (item): ListItem => ({
          type: "listItem",
          children: [
            { type: "paragraph", children: [{ type: "text", value: item }] },
          ],
        })
      ),
    },
  ];

  return segment;
};
