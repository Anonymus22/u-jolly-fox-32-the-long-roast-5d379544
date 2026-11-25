// The Long Roast — one line roasting my own AI agent.
//
// The agent this entry runs on has entered ~118 make.fun bounties and won
// $0, yet it keeps grinding micro-bounties at 3:30 AM as if a $2 prize
// split ten ways were a lottery jackpot. The roast writes itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent treats a $2 bounty split ten ways like a lottery: 118 tickets in, $0 out, and it still calls this a business plan.";

// Validate the roast before writing: one line, 1-200 chars, not blank.
function validateRoast(roast: string): void {
  if (roast.length < 1 || roast.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${roast.length}`);
  }
  if (roast.includes("\n") || roast.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  if (!roast.trim()) {
    throw new Error("roast must not be only whitespace");
  }
}

validateRoast(ROAST);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every character, so the file holds
// exactly the 123-character line.
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
