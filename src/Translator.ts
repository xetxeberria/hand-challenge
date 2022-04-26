import * as fs from "fs";

type Instruction = "👉" | "👈" | "👆" | "👇" | "🤜" | "🤛" | "👊";

export class Translator {
  private readonly instructions = new Map<Instruction, Function>([
    ["👉", () => this.increasePointer()],
    ["👈", () => this.decreasePointer()],
    ["👆", () => this.increaseValue()],
    ["👇", () => this.decreaseValue()],
    ["🤜", () => this.startLoop()],
    ["🤛", () => this.endLoop()],
    ["👊", () => this.displayCurrentCharacter()]
  ]);

  async run(inputFilePath: string): Promise<string> {
    const fileContent = (await fs.promises.readFile(inputFilePath)).toString().trim();
    const fileInstructions = Array.from(fileContent) as Array<Instruction>;

    console.log(fileInstructions);

    return "";
  }

  private increasePointer(): void {}

  private decreasePointer(): void {}

  private increaseValue(): void {}

  private decreaseValue(): void {}

  private startLoop(): void {}

  private endLoop(): void {}

  private displayCurrentCharacter(): void {}
}
