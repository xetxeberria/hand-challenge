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

  private memory: Array<number> = [];
  private pointer: number = 0;

  private readonly MIN_VALUE = 0;
  private readonly MAX_VALUE = 255;

  private result: string = "";

  private index: number = 0;

  async run(inputFilePath: string): Promise<string> {
    const fileContent = (await fs.promises.readFile(inputFilePath)).toString().trim();
    const fileInstructions = Array.from(fileContent) as Array<Instruction>;

    while (this.index < fileInstructions.length) {
      const instruction = fileInstructions[this.index];
      this.getFunctionFor(instruction)();

      this.index++;
    }

    return this.result;
  }

  private increasePointer(): void {
    this.pointer++;
    this.memory[this.pointer] ??= 0;
  }

  private decreasePointer(): void {
    this.pointer--;
    this.memory[this.pointer] ??= 0;
  }

  private increaseValue(): void {
    const currentValue = this.memory[this.pointer];
    this.memory[this.pointer] = this.currentValue() === this.MAX_VALUE ? this.MIN_VALUE : currentValue + 1;
  }

  private decreaseValue(): void {
    const currentValue = this.memory[this.pointer];
    this.memory[this.pointer] = this.currentValue() === this.MIN_VALUE ? this.MAX_VALUE : currentValue - 1;
  }

  private startLoop(): void {}

  private endLoop(): void {}

  private displayCurrentCharacter(): void {
    this.result.concat(String.fromCharCode(this.currentValue()));
  }

  private currentValue(): number {
    return this.memory[this.pointer];
  }

  private getFunctionFor(instruction: Instruction): Function {
    const fn = this.instructions.get(instruction);

    if (!fn) throw new Error(`No function defined for instruction ${instruction}`);

    return fn;
  }
}
