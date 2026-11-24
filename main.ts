import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LABEL = `WARNING: This human will say "I'm on my way" while still in the shower.`;
const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LABEL, "utf8");
