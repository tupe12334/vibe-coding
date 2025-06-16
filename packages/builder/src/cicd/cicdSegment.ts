import type { RootContent } from "mdast";

export const cicdSegment = async (system: string): Promise<RootContent[]> => {
  const segment: RootContent[] = [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: `CI/CD system: ${system}`,
        },
      ],
    },
  ];

  return segment;
};
