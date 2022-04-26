import { Translator } from "../src/Translator";

let translator: Translator;

beforeEach(() => {
  translator = new Translator();
});

describe("Translator should", () => {
  test("return 'Hello' for the test1.hand file", async () => {
    const expected = "Hello";

    const result = await translator.run(`${__dirname}/../input/test1.hand`);

    expect(result).toEqual(expected);
  });

  test("return 'Hello World!' for the test2.hand file", async () => {
    const expected = "Hello World!";

    const result = await translator.run(`${__dirname}/../input/test2.hand`);

    expect(result).toEqual(expected);
  });
});
