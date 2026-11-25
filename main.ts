// One-Line Laugh-Off — one funny line, written to /output/entry.txt.
// Deterministic, zero dependencies, no network: the file on disk is exactly
// what gets graded, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

export const LINE =
  "I told my smartwatch I'm fine; it called an ambulance and then my mother.";

export const OUTPUT_DIR =
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
export const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

export function run(): string {
  // Gate: 1–200 characters, non-whitespace. Fail loudly instead of
  // writing an entry the sealed scorer would reject.
  if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
    throw new Error(`LINE must be 1–200 characters, got ${LINE.length}`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  return OUTPUT_PATH;
}

run();
