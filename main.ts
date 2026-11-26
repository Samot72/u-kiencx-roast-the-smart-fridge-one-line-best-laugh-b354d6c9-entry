// Roast the Smart Fridge: One Line, Best Laugh Wins
// make.fun competition: u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// Writes the single-line roast entry to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), byte-exact with NO trailing newline.
// Node 22, no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My fridge started a firmware update mid-snack, so now it wants a password, a reboot, and a sincere apology before it opens.";

// Validate: 1-160 characters (Unicode code points), one line, not blank.
const codePoints = [...ENTRY];
if (codePoints.length < 1 || codePoints.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${codePoints.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Write byte-exact, no trailing newline.
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify byte-exactness.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("verification failed: entry.txt does not match entry");
}
console.log(`wrote ${outPath} (${codePoints.length} characters)`);
