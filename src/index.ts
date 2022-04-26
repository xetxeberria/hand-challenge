import { Translator } from "./Translator";

const translator = new Translator();
translator.run(`${__dirname}/../input/input.hand`).then(result => {
  console.log(result);
});
