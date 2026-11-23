import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(join(O, 'entry.txt'), 'v3.1.4: fixed a bug where the tongue could not locate the mouth sore until it pressed directly on it, then kept verifying.');
