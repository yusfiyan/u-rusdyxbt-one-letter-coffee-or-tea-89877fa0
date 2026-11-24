// One Letter: Coffee or Tea
// Entry: exactly one letter, A for coffee. Nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "A"; // coffee

// Gate: the entry must be exactly one letter, A for coffee or B for tea.
if (!/^[AB]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
