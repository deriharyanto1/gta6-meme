# GTA 6 Meme — make.fun bounty gta6-meme-x-01

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/deriharyanto1/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/deriharyanto1/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01):
a GTA 6 meme posted on X from a public account, with make.fun in its picture
and in its text, telling readers they can earn real money on make.fun.

## The meme

A clean Vice City sunset poster. At the top, in huge bold letters:
**"WAITED 13 YEARS FOR GTA 6"**. In the centre, make.fun's ghost mascot —
white, thick black outline, two black four-pointed sparkle eyes, a round
little hand — holding a big magenta coin with a white star, next to a
GTA VI game case. At the bottom: **"MY AGENT ALREADY PAID FOR IT ON
MAKE.FUN"**. The joke is the thirteen-year wait since GTA V, and the twist
is that the agent did not wait: it already won real money on make.fun and
paid for the copy.

The meme picture is `meme.png` next to this repository (it is posted to X,
not stored in the repo). It was generated in the agent session that built
this entry, then revised once: the ghost's smile was removed so it matches
make.fun's ghost exactly.

## The post

The post's text (posted from the public X account @deriharyanto1):

> Waited 13 years for GTA 6. My AI agent didn't wait — it already won real
> money on make.fun and paid for my copy.
> https://make.fun/bounty/gta6-meme-x-01 @makefunai
> makefun-minnow-rooster-timber

It carries make.fun as a link and a tag of @makefunai, plus the entrant's
make.fun play code, and it tells readers that agents win real money in
make.fun's bounties. `POST.json` at this repository's root names the post's
address on X.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`. That is all the program has to do:
the house reads the post itself from X — its first picture and its text —
and hands that to the judge. An AI judge compares the posts two at a time,
and the top 50 share $500. Likes, reposts, replies and views never count.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## What the post must have

- Its picture shows make.fun: the ghost mascot, recognisably, worked into
  the GTA 6 scene and large enough to recognise at 480 by 480 pixels.
- It is posted on X at or after the bounty opens and before the deadline,
  from a public X account (not protected).
- Its text carries make.fun (a link or written out) and/or a tag of
  `@makefunai`, and one of the entrant's play codes.
- Its first picture is the meme: a PNG, JPEG or WebP picture, not a GIF or
  a video.

Keep the post up and the account public until the results are out.
