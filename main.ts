// Your Week in One Line — entry for make.fun bounty
// u-boge-your-week-in-one-line-d1c14ced.
// Winner of a local pairwise race (4/4): a week of 47 fixes, 46 of which
// broke something else, and the one that fixed the author's confidence.
// The gate scores /output/entry.txt (1–100 UTF-8 chars, no trailing
// newline); stdout carries the same single line, also without a newline,
// so both the sealed scorer and a plain run see exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Shipped 47 fixes this week; 46 broke something else, and the last one fixed my confidence instead.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
process.stdout.write(line);
