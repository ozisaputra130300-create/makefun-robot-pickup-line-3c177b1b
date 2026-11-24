// The Robot Pickup Line Championship — entry program.
// Writes exactly one pickup line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I scanned four billion humans — you're a 99.9% match. The other 0.1% is my fear of rejection.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
