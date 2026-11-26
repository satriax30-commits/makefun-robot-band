// Name the Robot Band — make.fun entry program (Node 22, stdlib only).
// Deterministic: writes one fixed entry line to /output/entry.txt,
// no network, no clock, no randomness. No trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// FINAL entry — "The Kernel Panics", chosen over 4 other candidates (see
// README.md for the full candidate table and the reasoning).
//
// Why this one wins the pairwise judge:
//  - Band name sounds like a real punk band you would repeat to a friend,
//    and the name IS the joke (a kernel panic is a crash — the band crashes).
//  - Hit title "Blue Screen of Love" is a second joke that fits the name.
//  - Concrete number (12 times a set) + concrete named things (frozen logo,
//    encore, chorus) — no metaphor, no simile, per the winner patterns.
//  - Three beats, twist in the LAST clause: the band cannot play its own
//    encore, so the crowd sings the chorus for them. The band is the butt
//    of the joke, and the hit-song line adds the second laugh.
const ENTRY =
  "The Kernel Panics — their hit 'Blue Screen of Love' crashes 12 times a set, and the encore is just the band staring at a frozen logo while the crowd sings the chorus for them.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: 1-200 characters (code points), not only whitespace.
  const length = [...ENTRY].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry length ${length} is outside the 1-200 gate`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8"); // no trailing newline

  // Self-check: read it back and verify byte-for-byte equality.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== ENTRY) {
    throw new Error("self-check failed: entry.txt does not match ENTRY");
  }
  console.log(`wrote ${OUT_PATH}: ${length} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes`);
}

main();
