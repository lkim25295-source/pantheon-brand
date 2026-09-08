# PANTHEON / PTH — Brand Starter Pack

Elite, cold, mythic brand kit for the Pantheon multi-cabin crypto trading desk. No social logins required to use these files.

**Handle:** @PantheonPTH  
**Boss:** kim God · **Chief of Staff:** Prime  
**Cabins:** TRON (live) · SOL / BSC / RH / Polymarket (paper)

## Contents

| File | Purpose |
|------|---------|
| `brand.md` | One-pager: name, mission (EN/ZH), voice, do/don't |
| `bios.json` | Ready-to-paste bios for X, Telegram, Discord, LinkedIn, Instagram, YouTube |
| `content-calendar-7d.md` | First 7 days of post ideas (educational / on-chain-first) |
| `link-in-bio.md` | Proposed Linktree structure and copy |
| `index.html` | GitHub Pages landing — desk chrome, cabin map, policy chips |
| `config.js` | **Desk URL + policy constants** (edit here when the Vercel URL rotates) |
| `styles.css` / `landing.js` | Shared visual system + CTA binding |
| `landing.html` | Redirects to `index.html` |
| `logo.svg` | Black/gold temple emblem + PTH wordmark (avatars / media) |

## How to use

1. **Align the desk** — Read `brand.md` aloud once. Treat Do/Don't as non-negotiable.
2. **Set profiles** — Copy strings from `bios.json` into each platform. Prefer EN or ZH field to match the audience; stay under the noted limits.
3. **Ship week one** — Follow `content-calendar-7d.md` in order. Do not invent PnL or follower counts.
4. **Link stack** — Build Linktree (or equivalent) from `link-in-bio.md`. Only add URLs that exist.
5. **Landing** — Hosted on GitHub Pages (`master` → https://lkim25295-source.github.io/pantheon-brand/). Same visual system as the live trading desk. When the desk URL rotates, change `deskUrl` in `config.js` only.
6. **Avatar / media** — Export `logo.svg` to PNG (e.g. 800×800) for avatars; keep gold on black. The public landing uses desk chrome (green ◆, IBM Plex, JetBrains Mono).

## Design tokens (quick)

Desk / landing (public face):

- Background: `#0b0d10` · panel `#11151b` · header `#0e1116`
- Line: `#1c222b` · ink `#e8edf2` · mute `#7d8794`
- Live / pos: `#3dff8a` · paper: `#8b7cff` · neg: `#ff5a6a`
- Type: IBM Plex Sans + JetBrains Mono

Avatar mark (`logo.svg`): gold `#c9a227` on `#0a0a0a`

## Desk URL

```js
// config.js — one place
deskUrl: "https://temporary-nimble-redwood-gy6a0sy.vercel.app"
deskPositionsHash: "#positions"  // live lots / session P&L on the desk only
```

Hard-rule chips (policy, not performance) live in the same file: daily DD ≤5%, 100× halt, TRON caps 100 TRX + 1000 USDT.

## Rules (hard)

- No fabricated returns, win rates, or social proof numbers
- No meme-degen trash aesthetic
- Live vs paper cabin modes must stay accurate
- Not financial advice — educational desk presence only

## Local preview

```bash
# from this folder
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

## Ownership

Internal starter pack for Pantheon / PTH. Update links and bios as channels go live; keep positioning coherent with `brand.md`.
