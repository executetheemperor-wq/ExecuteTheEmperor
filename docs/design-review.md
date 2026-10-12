# Design review

> **This is Claude's opinion** after reading all the notes (2026-10-11) —
> not part of your design. Agree, argue, or ignore.

**In one line:** a strong premise with two distinctive mechanics; the risk is
too many systems built around a turn that doesn't exist yet.

## What's strong

1. **The fantasy sells itself.** "Be Brutus" needs no explanation, and the
   theme drives the mechanics: information, betrayal, a ticking clock,
   getting caught.
2. **Sticky co-conspirators that bring their own cards are the standout
   idea.** In a normal deckbuilder the skill is trimming your deck. Here you
   can't remove a bad card, only the person attached to it — and you have
   to play their bad cards to keep them happy. That's a real decision, not
   bookkeeping, and it's a new twist on deckbuilding.
3. **Pressure is well designed.** A clock that helps you (better recruits)
   and hurts you (blackmail, unstable allies), and that you can barely lower.
   That's a push-your-luck engine, and the Five Nights at Freddy's ending at
   100 gives it a clear emotional goal.
4. **Intel deciding which plans exist** makes each Emperor a different
   puzzle — replayability for free.
5. **The book framing between runs** is charming, and justifies the
   meta-progression within the story.

## What worries me

1. **Breadth before a core loop.** About nine player stats, three
   relationship groups of four stats each, three values per co-conspirator,
   honorifics, campaigns, rivals, pathing, the area plan — and no turn.
   Games like this succeed on a tight 30-second loop; right now the danger is
   managing a spreadsheet.
2. **The core action is unclear.** In Slay the Spire you play cards to
   fight. Here you mostly answer events with a card type — and "do I have a
   military card?" is a check, not a decision. Cards need choices: spend or
   keep, combos, timing.
3. **Two layers of luck.** A random card draw, then a d100 roll on top.
   Slay the Spire avoids dice on purpose. Keep one source of randomness, or
   make sure the player can steer one of them.
4. **The murder stage is a separate game bolted on** — a spatial set-up
   puzzle at the end of a deckbuilder. But the title promises the kill, so
   the payoff has to exist. One option: a **boss fight played with the cards
   you've built** — the Emperor's intel cards are his moves, and choosing
   area and method changes the deck you bring. Your own idea, a final check
   like *The Fate of the Fellowship*, is another (see
   [The assassination](design/07-the-assassination.md#ideas-for-the-kill-later)).

## Board game or video game?

As written, the bookkeeping leans digital: per-person stat correlations,
0–100 scales, route-finding. But cutting it down for the table is exactly
what the design needs anyway. Hidden-information multiplayer could even be
*better* on a table — rival conspirators, and co-conspirators who might be
lying to you. If the paper version is fun, a digital one will be too; the
reverse isn't guaranteed.

→ Decided: **board game first** ([D2](decisions.md)).

## After the research (2026-10-12)

The [comparable-games research](research/2026-10-12-comparable-games.md) backs all four worries, and offers a
fix for each. The [design philosophy](design-philosophy.md) collects them;
[prototype v0.3](prototype/rules.md) tries them.

| Worry | What the comparable games say | The fix they suggest |
|---|---|---|
| **Breadth before a core loop** | Every team the research sourced got to a better game by cutting: Leacock's "simplest possible experiment", Kennedy's "cut ruthlessly", Klei stripping Griftlands' RPG layer, Fowers cutting a floor from Burgle Bros 2. | One experiment a week. Worry if the rules pass 4 pages before 10 playtests. |
| **The core action is unclear** | v0.2 only has decisions when you buy. Dune: Imperium was a "good" pure deckbuilder until each card got two halves. | One choice when you play: each card is either an action or resources. |
| **Two layers of luck** | Paradox reworked CK3's schemes for being "too random" and "binary"; Leacock kept one final roll with "multiple ways to mitigate its outcome". | One roll, odds printed, modifiers you can earn, and a miss that escalates instead of ending the run. |
| **The murder stage bolted on** | CK3's agents each bring a role to the scheme. | The strike uses the deck you built: crew roles, and preparations made by your cards. |

**One new worry.** No published deckbuilder the research found bundles a
person's cards the way [D4](decisions.md) does. That may be the most
original thing here, or it may need a release valve when a hand clogs.
v0.3 tries one (lying low).

## Recommendation

Distinctive and worth making. Find the one-turn loop in
[Sprint 1](sprint-1.md) and cut everything else until that loop is fun.
