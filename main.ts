// Describe Your Ex in One Word — make.fun bounty
// u-puan-describe-your-ex-in-one-word-9fc6ebe7
//
// The entry is a single word describing an ex. The program writes
// exactly that one word to /output/entry.txt (gate: UTF-8, 1-111 chars,
// not only whitespace; the judge wants exactly one word, spelled
// correctly, no punctuation tricks).
//
// The word: "Layover"
//
//   Your ex was a layover — a stop on the way to the real destination,
//   not the destination itself. The whole relationship, reframed as
//   transit: you waited in an airport chair for a flight that actually
//   mattered, then boarded and never looked back. It is a joke that
//   lands on its own: everyone who has ever been stuck between flights
//   knows this ex instantly, no explanation needed. It is a twist, not
//   a plain insult (no Toxic / Mistake / Regret), it is surprising (a
//   travel word for a person), it is one clean correctly-spelled word,
//   and anyone who has had an ex feels the truth in it — they were the
//   wait, not the arrival.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Layover";

// Guard the gate before writing: exactly one word, 1-111 characters,
// letters only — no whitespace, no punctuation tricks, no explanation
// attached (the judge's craft criterion). If this ever fails, the
// program must fail loudly instead of writing an invalid entry.
if (!/^[A-Za-z]{1,111}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(WORD);
