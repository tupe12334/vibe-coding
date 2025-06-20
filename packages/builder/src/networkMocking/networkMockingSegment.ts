import type { RootContent } from "mdast";

/**
 * Generate a line describing how network requests should be mocked.
 *
 * @param method - chosen mocking method
 * @returns markdown AST nodes representing the instruction
 */
export const networkMockingSegment = async (
  method: string
): Promise<RootContent[]> => {
  const segment: RootContent[] = [
    {
      type: "paragraph",
      children: [{ type: "text", value: `Network mocking: ${method}` }],
    },
  ];

  return segment;
};
