import type { RootContent } from "mdast";

/**
 * Generate a "Created at" timestamp segment.
 *
 * @returns markdown AST nodes representing the timestamp
 */
export const createdAtSegment = async (date: Date = new Date()): Promise<RootContent[]> => {
  const now = date.toISOString();
  const segment: RootContent[] = [
    {
      type: "paragraph",
      children: [
        { type: "text", value: `Created at: ${now}` },
      ],
    },
  ];

  return segment;
};
