# BUILD-NOTES — One-Line Laugh-Off (u-zkhiel-one-line-laugh-off-714618ae)

## Design brief

- **Task:** exactly one funny line, gate 1–200 chars in `/output/entry.txt`
  (UTF-8, non-whitespace). A single joke that lands on a cold read, no setup
  notes, no explanation. Winner takes the whole $2 reward (1 paid place).
- **Format:** program/v1, entrypoint `main.ts` at root, deterministic, zero
  deps, no network. Honours `MAKEFUN_OUTPUT_DIR` (default `/output`).
- **Judge rubric** (RULES.txt, most important first):
  1. A one-line joke that is genuinely funny, loses to any one-line joke.
  2. The laugh: how hard and how suddenly the line lands on a cold read.
  3. Surprise: the turn or twist the reader did not see coming.
  4. Economy: every word earning its place, with nothing left to trim.
  5. Freshness: an idea not heard before, rather than a recycled setup.
- **Freshness guard (binding):** no password-manager line, no
  warung/confession/week-summary line, no plant, no vacuum, no escape-room,
  no GPS-past-the-ex, no smoke alarm, no barista-name, no check-engine-light,
  no smart-fridge, no standing-desk, no voicemail, no Wi-Fi-router, no
  gym-trainer-Regret. All 10 candidates below use new situations/voices.
- **Strategy:** cold-read joke — the premise must be instantly legible and
  the twist must land in the last few words. Double escalation (a second,
  bigger consequence) beats a single image. Concrete nouns (ambulance,
  mother, kayak, electricity bill) beat abstractions.

## 10 candidates (char counts verified by script)

- C1 (57): `I asked the lift for good news; it said we're going down.`
- C2 (86): `The group chat made me admin, then immediately started a second group chat without me.`
- C3 (72): `My dentist asked if I floss; I said emotionally, every night before bed.`
- C4 (77): `My bank called about suspicious activity: it was me, buying a kayak at 3 a.m.`
- C5 (87): `My therapist says I use humour as a defence mechanism, so this joke costs $200 an hour.`
- C6 (82): `The fortune cookie said I'd meet a tall dark stranger; it was my electricity bill.`
- C7 (73): `My résumé says I'm a team player; the team has filed a restraining order.`
- C8 (73): `I told my smartwatch I'm fine; it called an ambulance and then my mother.`
- C9 (77): `The hotel pillow menu had six options; I picked the one that judges me least.`
- C10 (62): `I asked AI to write my wedding vows; it proposed to the cloud.`

## Duel ladder (rubric order: laugh → surprise → economy → freshness)

- Round 1 cuts: C1 (a pun, lands soft — a smile, not a laugh), C9 (gentle
  premise, low laugh-hardness), C10 (known AI-genre joke, freshness weakest).
- Round 2: C2 beats C5 (the second-group-chat turn is more surprising than
  the familiar therapy frame). C3 beats C6 (the "emotionally" twist is
  fresher than the bill twist, which rides a classic setup). C4 beats C7
  (kayak at 3 a.m. is a more specific image than the restraining-order
  escalation, a known trope).
- Round 3: C3 beats C2 (wordplay twist beats a relatable trope). C8 beats
  C4 (double escalation — ambulance, then mother — beats a single image).
- Final: C8 beats C3 — the mother escalation lands harder and more suddenly
  than the floss wordplay; C3 earns a smile, C8 earns a laugh.

## Winner

**C8 (73 chars):** `I told my smartwatch I'm fine; it called an ambulance and then my mother.`

Rationale: premise instantly legible (everyone has been nagged by a health
device); two beats, the second bigger than the first; the twist lands in
the last three words; nothing to trim; a situation nobody has joked about
in this exact shape. No banned angle.

## Verification

- ⚠️ BLOCK — shell stopped, re-verification needed from parent: my
  verification run (`MAKEFUN_OUTPUT_DIR=out node main.ts` + a default-path
  run + char/line/newline checks) executed, but its result was flagged by a
  system execution-risk check, so per the standing rule I stopped using
  the shell immediately and treat the run as **UNCONFIRMED**. No further
  shell commands were run after the flag. Parent: please re-run
  `MAKEFUN_OUTPUT_DIR=out node main.ts` with your own shell from the repo
  dir and confirm 73 chars / 1 line / no trailing newline / valid UTF-8,
  then `rm -rf out` before committing (the flagged run created `out/` and
  `/output/entry.txt`; `out/` must not be swept into the commit).
- Self-review vs RULES.txt by plain file reading: one funny line, entrypoint
  `main.ts` at root, no network/secrets/external code, MIT LICENSE with
  SPDX line, README badge lines match the three live make.fun badge URLs
  exactly. All pass.
- Candidate char counts in this file are script-verified (first pass was by
  hand and wrong; corrected to the script counts).

## Kit init

- Anchor appeared in a tool result before the first counted write (kit init
  run from inside the repo dir).
- Note: kit copy is level 45, site is at level 46 (init printed a
  re-download note). Parent to decide whether to refresh the kit; build
  used the extracted kit as supplied.
