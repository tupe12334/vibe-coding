export const getOptions = (language: string) => {
  switch (language) {
    case "javascript":
    case "typescript":
      return ["npm", "yarn", "pnpm"];
    case "python":
      return ["pip", "poetry", "pipenv"];
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
};
