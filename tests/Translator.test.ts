import { Translator } from "../src/Translator";

let translator: Translator;

beforeEach(() => {
  translator = new Translator();
});

describe("Translator should", () => {
  test("return 'Hello' for the test1.hand file", async () => {
    await expect(translator.run(`${__dirname}/../input/test1.hand`)).resolves.toEqual("Hello");
  });

  test("return 'Hello World!' for the test2.hand file", async () => {
    await expect(translator.run(`${__dirname}/../input/test2.hand`)).resolves.toEqual("Hello World!");
  });
});
