# Sprint 1 — the card layer (draft)

> **Status: draft proposal.** Your direction, my fleshing-out. Strike
> anything that's wrong. *(Chat › Notes 3–8)*
>
> **Ready to play:** a board-game-sized [paper prototype](prototype/rules.md)
> (v0.3) — two pages of rules, [35 cards](prototype/cards.md) and a
> [playtest log](prototype/playtest-log.md). v0.3 rebuilds v0.2 on the
> [design philosophy](design-philosophy.md) from the comparable-games
> research ([D8](decisions.md)).

## Your call so far

- **Leave the murder stage out for now.** Focus the first sprint on the
  card-building side. ([D1](decisions.md))
- **Board game first.** ([D2](decisions.md))
- **It's about the 30-second turn first.** ([D3](decisions.md))
- **The deck is built by drafting co-conspirators.** ([D4](decisions.md))
- **Loop B is the driver**; A and C may come in later to flesh out the
  larger game cycle. ([D5](decisions.md))
- **Pressure is your crew pushing you to strike** — they get jumpy — and
  it only comes down in about two ways. ([D6](decisions.md))
- **The first prototype is board-game sized, at most.** ([D7](decisions.md))
- **Fold in the comparable-games research, and build the next prototype on
  its design philosophy.** ([D8](decisions.md))

## Goal

**Find one turn of the card layer that's fun to play over and over** —
drafting and managing co-conspirators under rising Pressure — before
anything about the murder is decided. On paper, at the table.

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

## Candidate turn loops *(suggestions)*

Three different shapes for the 30-second turn. All three use the same
co-conspirators, Pressure track and stats.

→ **Decided: B drives the turn** ([D5](decisions.md)). You expect all three
to come into play eventually, with A and C coming in at later design points
to flesh out the larger game cycle. The [prototype](prototype/rules.md) is
built on B.

**A · Event response** — closest to the notes.
1. Reveal an event (it asks for a card type — e.g. *Military*).
2. Play cards of that type from your hand — spend them now, or keep them
   for a bigger event.
3. Resolve: gain or lose stats and money; maybe a co-conspirator reacts.
4. Recruit one candidate from the market, or act (blackmail, a one-time
   card).
5. +1 Pressure.

**B · Market deckbuilder** — Dominion/Clank-style. ✅ *The driver
([D5](decisions.md)).*
1. Draw 5 from your plot deck (your cards + your co-conspirators', curses
   included).
2. Spend them as currency (Influence, Money, Charm…) to recruit from the
   co-conspirator market or claim political events.
3. Everyone you recruit shuffles their cards into your deck — good *and*
   bad.
4. +1 Pressure.

**C · Places in Rome** — worker placement.
1. Send your agents to places — Senate, Forum, Baths, Barracks, Theatre —
   each giving a resource, intel, or a recruit.
2. Co-conspirator cards boost or unlock places (the actor-friend opens the
   Theatre).
3. End of round: +1 Pressure; unhappy co-conspirators make trouble.

A uses your event idea most directly. B makes "sticky co-conspirators clog
your deck" the core tension. C is the most board-game-native, and the
easiest to make multiplayer.

## Placeholder ending

Without a murder stage, a run still needs to end. Combining your two notes:
*(Chat › Notes 2 and 4)*

1. **When Pressure hits the threshold, you have to strike** — "once it hits
   a value you have to plot".
2. **The final check**, Fate of the Fellowship-style: **two of your skills
   combined must reach a target value** (e.g. Influence + Military ≥ the
   Emperor's number) …
3. … **then a roll against your co-conspirators' happiness** — will they
   hold their nerve?

It's a stand-in, not the real murder stage, but it gives every turn of the
card layer something to aim at: the right two skills, and a happy crew.

## Table-friendly tweaks *(suggestions)*

- **0–10 tracks instead of 0–100.** Same idea, fewer fiddly numbers.
- **d10 or d20 roll-under instead of d100.** Same mechanic, a smaller die.
- **Pressure tokens** are your idea *(Chat › Note 2)*; keeping them on a
  track, or in a bag, is my suggestion.

## What we want to learn

1. Is drafting co-conspirators interesting — are there real trade-offs?
2. Do the stat interactions (socialite vs military man) create decisions,
   or just bookkeeping?
3. Does Pressure feel like a snowball — good early, scary late?
4. Does "sticky" feel like a fun problem or just a punishment?
5. Is there enough to do each turn without the murder stage?

## Decisions needed before the first playtest

The [audit's "Resolve first" list](audit.md#resolve-first--for-sprint-1) is
the long version of this; its gaps pass also proposed
[starting defaults](audit/gaps.md#suggested-minimum-for-a-one-assassination-paper-prototype)
for most of these.

0. ~~**What "card building" means.**~~ → **By drafting co-conspirators**
   ([D4](decisions.md)). *(audit
   [CA-37](audit/contradictions.md#ca-37--deckbuilder-at-heart-and-card-building-vs-cannot-add-or-remove-cards))*
1. ~~**What is a turn?**~~ → **Loop B** ([D5](decisions.md)): draw five,
   play, recruit one, Pressure +1.
2. **The first 8–10 co-conspirators** — *drafted:* [8 in the prototype](prototype/cards.md#co-conspirators-8).
3. **The first 12–15 events** — *cut from the first prototype*
   ([D7](decisions.md)); v0.1 in the git history had 15.
4. **Card anatomy** — *drafted:* two halves, an Action and a Resource
   (Money, Influence, or Pressure on a bad card). Co-conspirators show a
   cost, a stat bonus, a strike role, a rival, and maybe Jumpy.
   ([cards](prototype/cards.md))
5. **The placeholder ending** — *drafted:* [the strike](prototype/rules.md#the-strike):
   two stats against a target, then a nerve roll that gets harder as
   Pressure climbs, tilted by your crew's roles and your Preparations.
6. **Solo or multiplayer** — *drafted as solo* to test the turn; still open
   ([Q26](open-questions.md#board-game)).
7. **One source of randomness or two** — *drafted:* the card draw all game,
   and a single die roll at the very end, with its odds printed and ways to
   tilt it. ([design review](design-review.md),
   [design philosophy](design-philosophy.md#5-one-roll-many-ways-to-tilt-it))

## Why park the murder *(context for later)*

- It depends on the two biggest gaps: how you learn about the Emperor, and
  how the night resolves. ([audit](audit.md))
- It's a different kind of game — a spatial set-up puzzle with route-finding
  and guard behaviour — bolted onto a deckbuilder.
- It risks a whole run ending in one dice roll.

Ways it could fit later: your idea of **several win conditions**, or a
**final Fate of the Fellowship-style check** (two skills reaching a value,
then a roll against co-conspirator happiness); or *(suggestions)* a **final
boss event** played with the cards you've built up, or a **scored finale**
when Pressure hits its limit. See
[ideas for the kill](design/07-the-assassination.md#ideas-for-the-kill-later).
