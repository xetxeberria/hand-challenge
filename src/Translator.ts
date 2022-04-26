import * as fs from "fs";

type Instruction = "👉" | "👈" | "👆" | "👇" | "🤜" | "🤛" | "👊";

export class Translator {
  async run(inputFilePath: string): Promise<string> {
    const fileContent = (await fs.promises.readFile(inputFilePath)).toString().trim();
    const fileInstructions = Array.from(fileContent) as Array<Instruction>;

    console.log(fileInstructions);

    return "";
  }
}
