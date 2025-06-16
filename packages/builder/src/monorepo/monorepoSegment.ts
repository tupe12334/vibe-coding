import type { RootContent } from "mdast";

export const monorepoSegment = async (
  system: string
): Promise<RootContent[]> => {
  const segment: RootContent[] = [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: `Monorepo system: ${system}`,
        },
      ],
    },
  ];

  return segment;
};
