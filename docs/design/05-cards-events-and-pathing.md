# Cards, events and pathing

## Cards

> **Decided:** the deck is built by drafting co-conspirators
> ([D4](../decisions.md)), and the turn is loop B — draw a hand, spend it
> in a market ([D5](../decisions.md)). See the
> [paper prototype](../prototype/rules.md).

Cards are how the game **gives you information** and how you **take
actions**. *(OneNote › 1. Variables)*

- **Pools by type.** Your cards and your co-conspirators' cards are absorbed
  into shared pools sorted by type. When an event calls for, say, a
  **military** card, you draw from the military cards in the combined pool.
- **Combinations.** Some events accept a mix of card types, and say so up
  front.
- **Curses.** Co-conspirators can bring negative cards, Slay the Spire-style
  — and you can only get rid of them by getting rid of the person.
- **One-time cards**, usable outside events — e.g. a propaganda campaign.
- **Playing a co-conspirator's cards keeps them happy**; ignoring them
  sours the relationship; leaning on one person's cards makes the others
  suspicious.

*(OneNote › 3.2 Co-Conspirator Skills)*

- **Intel cards.** What you learn about the Emperor is shown as cards on its
  own screen — see [The Emperor](06-the-emperor.md).
  *(OneNote › The night of the murder)*

## Events

- **Political events** (random) add information to the **Emperor Sheet**,
  give money or other boons, and can sway public opinion.
  *(OneNote › Political Phase)*
- **Event decisions** can open up new co-conspirators.
  *(OneNote › 3. Co-Conspirators)*
- **Reputation events** can earn you honorifics — cheat at a game and you
  may become known as a cheater. *(OneNote › Honorifics)*
- **Pressure** comes from events too, sometimes by chance.
  *(OneNote › 1.1 Pressure)*

### Bonus events

**Plotting on the Ides** is harder — Emperors are more on guard — but the
omen means less suspicion falls on the co-conspirator.
*(OneNote › Bonus events)*

## Pathing

A **Slay the Spire-style path**: you choose which events come next. Not a
full map — "some slight foresight", which co-conspirators or events might
improve ("maybe", in the notes). *(OneNote › Basics, 5. The Gameplay Loop)*

## Show the numbers

Like Spire, show the player a lot of information about the results of boosts
and stats. *(OneNote › The night of the murder)*

## From the research

*From the [comparable-games research](../research/2026-10-12-comparable-games.md) (2026-10-12). Suggestions, not
decisions. [Prototype v0.3](../prototype/rules.md) tries the first two.*

- **A choice on every card.** *Dune: Imperium* began as "more of a pure
  deck-builder… It was a good game… Good wasn't good enough." The fix was
  cards with two halves: one to place a worker, one for resources when
  revealed, played in "bite-sized turns". An **Action** half and a
  **Resource** half would answer the card-anatomy gap below and add a
  decision when you play, not only when you buy.
  *([3.5](../research/2026-10-12-comparable-games.md#35-dune-imperium))*
- **Write a "Cluttered Hand" rule early.** *Heat*'s rulebook needs one for
  hands so full of heat cards you can't play; *Griftlands* warns against
  arriving at the boss with "a deck full of tipsy". Plan the release valve
  before playtesters find the dead hand.
  *([3.3](../research/2026-10-12-comparable-games.md#33-heat-pedal-to-the-metal), [4](../research/2026-10-12-comparable-games.md#4-cross-cutting-design-themes))*
- **"Every card should have a place"** was *Slay the Spire*'s balance goal.
  *([3.1](../research/2026-10-12-comparable-games.md#31-slay-the-spire-and-slay-the-spire-the-board-game))*
- **Events from history.** *The Tablet*: Commodus wrote his death list on a
  wax tablet, and a boy carried it off as a toy. You learn you're on the
  list, and Pressure jumps. *Forged Death List*: Aurelian's secretary
  forged a list with real enemies, innocent names and his own, so everyone
  on it was committed. As a once-a-run card, it spikes Pressure but stops
  anyone ratting you out. *([5](../research/2026-10-12-comparable-games.md#5-setting-research))*

## Gaps

- **The Events page is empty** — no event list yet.
- **Card anatomy** — what's on a card (type, cost, effect)?
- **Draw rules** — hand size, deck vs pool, random or chosen, any energy or
  cost per turn?
- **Card types** — only "military" is named. Do types follow the stats
  (Military, Political, Economical, Personal…)?
- **Map shape** — node types (political event, meeting, intel, shop?), how
  many before the night of the murder.
