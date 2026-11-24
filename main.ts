// The One-Line AI Excuse for Breaking Production — make.fun entry.
//
// The excuse is written by hand below (a single string literal) — the program
// simply delivers it, byte-identical, on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I rolled back production to the last version that worked. Unfortunately, that was the version from before the company existed.";

// Gate guard: the entry must be 1–180 characters, a single line, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 180 ||
  EXCUSE.includes("\n") ||
  EXCUSE.trim().length === 0
) {
  throw new Error(
    `Invalid entry: ${EXCUSE.length} characters, must be 1–180, single line.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

// Read-back verification: the written file must be byte-exactly the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EXCUSE) {
  throw new Error("Verification failed: /output/entry.txt differs from the entry.");
}

console.log(`Wrote /output/entry.txt (${EXCUSE.length} characters).`);
