# Sprint 1 — the card layer (draft)

> **Status: draft proposal.** Your direction, my fleshing-out. Strike
> anything that's wrong. *(Chat › Note 3)*

## Your call so far

- **Leave the murder stage out for now.** Focus the first sprint on the
  card-building side.
- **Not sure the Emperor-killing part works** with the rest of the design.
- **Maybe it's a board game.**

## Proposal: a paper prototype of the card layer

**Goal:** find out whether drafting and managing co-conspirators under
rising Pressure is fun on its own, before anything about the murder is
decided.

Paper first, because it's the cheapest way to test card systems — and if it
plays well on the table, that's also the answer to "is it a board game?".

### In scope

| System | What to test | Doc |
|---|---|---|
| **Co-conspirator draft** | A market of 3 face-up candidates; costs (stat floors, stat payments, money); blackmail; uninvited joiners at high Pressure. | [Co-conspirators](design/04-co-conspirators.md) |
| **Card pools** | Each co-conspirator adds cards (including curses) to typed pools; events draw from the matching pool. | [Cards](design/05-cards-events-and-pathing.md) |
| **Stats** | The five from *1. Variables* — Money, Influence, Charm, Military, Political — plus each co-conspirator's Happiness and Suspicion. | [Stats](design/03-stats-and-checks.md) |
| **Pressure** | +1 per turn, card and event effects, the carrot and the stick. | [Pressure](design/02-pressure.md) |
| **Events** | A short deck of political events that call for card types. | [Cards](design/05-cards-events-and-pathing.md) |
| **Checks** | Roll-under checks against a stat. | [Stats](design/03-stats-and-checks.md) |

### Out of scope

- **The night of the murder** — area, method, area plan, palace map,
  presence, reports. *(Parked.)*
- **Between-runs meta** — the book, lessons, permanent upgrades.
- **Multiple Emperors and the crown.**
- **Pathing map** — draw events from a deck for now.

### Placeholder ending

Without a murder stage, a run still needs to end. **Suggestion:** when
Pressure hits the threshold, you *have to strike* — score your plot (e.g.
total Influence + Military + Political from you and your co-conspirators,
minus their combined Suspicion) against a target number for the Emperor.
That matches your board-game note ("once it hits a value you have to plot")
and gives the card layer something to aim at.

## Table-friendly tweaks *(suggestions)*

- **0–10 tracks instead of 0–100.** Same idea, fewer fiddly numbers.
- **d10 or d20 roll-under instead of d100.** Same mechanic, a smaller die.
- **Pressure as tokens** on a track, or in a bag.

## What we want to learn

1. Is drafting co-conspirators interesting — are there real trade-offs?
2. Do the stat interactions (socialite vs military man) create decisions,
   or just bookkeeping?
3. Does Pressure feel like a snowball — good early, scary late?
4. Does "sticky" feel like a fun problem or just a punishment?
5. Is there enough to do each turn without the murder stage?

## Decisions needed before the first playtest

1. **What is a turn?** e.g. *draw an event → respond with cards → draft or
   act → +1 Pressure*.
2. **The first 8–10 co-conspirators**: a cost, stat modifiers, 2–3 cards
   and one trait each.
3. **The first 12–15 events**, each calling for a card type.
4. **Card anatomy**: type, effect, and any cost.
5. **The placeholder ending**, or a better one.
6. **Solo or multiplayer** for the table version (rival conspirators?).

## Why park the murder *(context for later)*

- It depends on the two biggest gaps: how you learn about the Emperor, and
  how the night resolves. ([audit](audit.md))
- It's a different kind of game — a spatial set-up puzzle with route-finding
  and guard behaviour — bolted onto a deckbuilder.
- It risks a whole run ending in one dice roll.

Ways it could fit later *(suggestions)*: as a **final boss event** played
with the cards you've built up, or as a **scored finale** when Pressure
hits its limit. See [The assassination](design/07-the-assassination.md).
