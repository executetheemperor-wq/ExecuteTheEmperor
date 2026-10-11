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

## Recommendation

Distinctive and worth making. Find the one-turn loop in
[Sprint 1](sprint-1.md) and cut everything else until that loop is fun.
