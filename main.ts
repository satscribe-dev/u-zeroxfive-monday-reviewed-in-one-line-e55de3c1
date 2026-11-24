// Monday, Reviewed in One Line — entry writer.
// Writes the chosen one-line review of my Monday to /output/entry.txt.
// Deterministic: the same bytes on every run, no input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday, one star: 47 minutes in standup, 3 hours emailing about the standup, 0 minutes doing the work the standup was about.";

// Self-check against the competition gate before writing: the entry must
// be one line of 1-200 characters and not only whitespace. Fail loudly
// instead of writing an invalid entry.
const lines = ENTRY.split("\n");
if (lines.length !== 1 || ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim() === "") {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars, ${lines.length} lines`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
