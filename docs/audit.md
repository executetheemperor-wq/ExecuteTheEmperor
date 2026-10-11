# Audit of the notes

A read-through of everything in [`ideas/raw/`](../ideas/raw/), looking for
places the notes **disagree**, places they're **empty**, and what's
**missing** before the game could be prototyped. Options listed under each
item are **suggestions**, not decisions.

## Contradictions and overlaps

### C1 · Three phases or four?

- *Basics*: three phases — finding co-conspirators → planning → the murder.
- Phase pages: four — **Political**, **Conspiracy**, **Plotting** (empty),
  **The night of the murder**.

Options: (a) Political + Conspiracy are the public and secret halves of
phase 1; (b) four distinct phases in a fixed order; (c) Political and
Conspiracy events are mixed on the same path, and Plotting + the Night are
the finale.

### C2 · Two stat lists that don't match

The *Stats* page (9 Feb) and *1. Variables* (17 Feb) list different stats
for both the player and the Emperor — Honorific / Virtue / Age / Health /
Public Support on one side; Money / Influence / Charm / Notice on the other.
*Personal* appears as both a heading and a stat. See the comparison in
[Stats and checks](design/03-stats-and-checks.md#the-two-stat-lists).

Options: treat *1. Variables* (the later one) as the core and fold the rest
in as secondary stats; or merge into categories (Personal · Public ·
Senate · Interpersonal).

### C3 · Global vs local variables

Global: "apply to the player, and can be contributed to by any source".
Local: "apply to the player, or to NPCs, and can be contributed to by only
the player or NPCs". Both apply to the player, so the line is unclear.

Option: global = one value for the whole run (Pressure, Money, Influence);
local = one value *per relationship* (each NPC's Happiness / Suspicion /
Gullibility towards you).

### C4 · "Area" means three different things

1. **Where the Emperor is killed** (banquet, Colosseum, gardens…).
2. **What a co-conspirator can get into** ("access to certain areas"), and
   "unlock new areas".
3. **Upgrade categories between runs** ("each area can have up to x
   permanent upgrades").

Option: keep **Area** for (1) and (2) — both are places — and call (3)
something else, e.g. **Lesson tracks** *(proposed)*.

### C5 · Killing co-conspirators: routine or last resort?

- *Basics*: "Can execute them or leave them alive" — framed as a normal
  choice.
- *3.4*: killing one is strongly deterred, "reasonably only… once ever in a
  run".

Option: executing *candidates* you've approached but not recruited is
routine (they know too much); killing a *recruited* co-conspirator is the
once-a-run last resort.

### C6 · What restarts, and when?

- *Basics*: after the murder, "Then restart. Need to kill certain number of
  emporers to be crowned".
- *Between Runs*: the book closes "when a plot is failed".
- *1.1 Pressure*: early drafts "stick to one assassination"; later, many,
  with a new Emperor each time.

Option: a **success** continues the game with a new Emperor (Pressure
partly resets); a **failure** ends the run → the book → lessons → new run.

### C7 · Hate and grasp vs Happiness and Suspicion

The first note talks about "values of like hate" and how far someone is "in
your grasp"; the later design uses Happiness, Suspicion and Gullibility.
Same idea renamed, or two different systems?

### C8 · Money, gold, Economical

The notes use **Money** (Variables), **gold** (Propaganda Campaigns,
1. Variables' "gain the gold") and **Economical** (Stats). Probably one
resource — worth one name.

### C9 · Happiness vs Likeability

Co-conspirators have **Happiness**; relationships have **Likeability**.
Same thing in two places?

### C10 · Blackmail runs both ways

You can blackmail a co-conspirator (spend money and Pressure; their
happiness falls, suspicion rises). At high Pressure, co-conspirators
blackmail **you**. Not a contradiction, but the two need to read clearly as
different events.

### C11 · The young man or the child?

*Between Runs* calls the reader "a young, impressionable man", then "the
child" in the same paragraph.

### C12 · Losing at 100 Pressure — or not?

"More or less a lose condition" and "it can still result in a win". These fit
together (autopilot, with bad odds) — but the "very certain circumstances"
that avoid a loss aren't defined.

## Empty pages

The notebook has headings ready with nothing under them:

| Page | Presumably for | Doc |
|---|---|---|
| Plotting Phase | The planning phase in detail | [Assassination](design/07-the-assassination.md) |
| Systems | An overview of how the systems connect | [Overview](overview.md) |
| Events | The list of events | [Cards and events](design/05-cards-events-and-pathing.md) |
| Campaigns *(one line: "Campaigns influence")* | Campaign types | [Politics](design/08-politics-and-reputation.md) |
| 2. The Player Character | Who you are, starting stats | [Run structure](design/01-run-structure.md) |
| 4.1 Emperor Stats | The Emperor's stats | [The Emperor](design/06-the-emperor.md) |
| 4.2 Emperor Traits | Trait list | [The Emperor](design/06-the-emperor.md) |
| 4.3 Emperor Tendencies | Habits/routines | [The Emperor](design/06-the-emperor.md) |
| 4.4 The Emperor Stat Sheet | The intel screen | [The Emperor](design/06-the-emperor.md) |

## Missing mechanics

Things the notes rely on but don't define yet.

| # | Gap | Why it matters |
|---|---|---|
| G1 | **What a turn is** | Pressure ticks +1 per turn — the whole clock depends on it. |
| G2 | **How intel is gained** | The notes end on "So, how do we find out about the Emperor?" — and intel decides which plans are possible. |
| G3 | **How the night resolves** | How the area plan, cards and d100 rolls combine into success or failure. |
| G4 | **Card anatomy and draw rules** | Type, cost, effect; hand size; how pools are drawn. |
| G5 | **How Suspicion becomes getting caught** | Suspicion is everywhere but never triggers anything specific. |
| G6 | **Where money comes from** | Money/gold is spent on drafting, blackmail, bribes and campaigns — sources are only "events". |
| G7 | **Party size** | Is there a cap on co-conspirators? |
| G8 | **Reports** | Who writes them, how unreliable, what "plots growing" means. |
| G9 | **The Player Character** | Who you are, what you start with. |
| G10 | **Rivals and succession** | Who the "key figures" are, and how the next Emperor is chosen. |
| G11 | **The numbers** | How many Emperors to be crowned; *x* upgrades per lesson track. |
| G12 | **Emperor generation** | Random traits per run, or a fixed cast? Historical or invented? |

## Suggestion: the smallest paper prototype

The notes say "for earlier drafts of the game we should stick to one
assassination". To play that on paper you'd need, at minimum:

1. One Emperor with 3 intel cards (the three already written).
2. 5 player stats (from *1. Variables*) and a Pressure track.
3. 6–8 co-conspirator cards with a cost, stat modifiers, 2–3 cards each and
   one access.
4. 10–15 events on a short branching path.
5. One area (e.g. the Imperial Palace) as a simple grid for the area plan.
6. A one-paragraph rule for how the night resolves (G3).
