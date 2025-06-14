import { readFile } from "fs/promises";
import { join } from "path";

export interface BuilderOptions {
  language: string;
}
export async function builder(options: BuilderOptions) {
  const templatesPath = join(__dirname, "../templates");
  const languageMdFile = (
    await readFile(join(templatesPath, "language", `${options.language}.md`))
  ).toString();

  return languageMdFile;
}
