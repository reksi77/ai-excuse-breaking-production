// The One-Line AI Excuse for Breaking Production — make.fun entry.
//
// The excuse is written by hand below (a single string literal) — the program
// simply delivers it, byte-identical, on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I rolled back production to the last version that worked. Unfortunately, that was the version from before the company existed.";

// Gate guard: the entry must be 1–180 characters, a single line, not only
// whitespace. Fail loudly instead of writing an invalid entry.
// Character length alone is not enough: the gate reads the file as UTF-8
// text, so a multi-byte character counts as one character but several bytes.
// Validate the UTF-8 byte length too (must also fit 1–180 bytes — a
// stricter bound that keeps the file small and single-line safe), and reject
// carriage returns and other control characters that would break the
// one-line reading even though they are not "\n".
const entryBytes = new TextEncoder().encode(EXCUSE);
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 180 ||
  entryBytes.length < 1 ||
  entryBytes.length > 180 ||
  EXCUSE.includes("\n") ||
  EXCUSE.includes("\r") ||
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(EXCUSE) ||
  EXCUSE.trim().length === 0
) {
  throw new Error(
    `Invalid entry: ${EXCUSE.length} characters / ${entryBytes.length} UTF-8 bytes, must be 1–180, single line, no control characters.`,
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
