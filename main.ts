// Entry for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
// Node 22, standard library only. The entry is the post itself: a GTA 6 meme
// made in this session, posted on X from a public account with make.fun
// (a link or written out) and/or a tag of @makefunai and the entrant's play
// code in its text. POST.json at the repository root names the post's
// address, and this program copies it to /output/POST.json, where the gate
// reads it. That is all the program has to do.
//
// The POST.json in this repository holds a placeholder address until the
// meme is posted; replace it with the post's real address
// (https://x.com/<handle>/status/<id>) before submitting.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Read POST.json first so a malformed file (or one with no url) fails loudly
// here instead of passing a broken address to the gate.
const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || post.url.length === 0) {
  console.error('POST.json has no url string');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
