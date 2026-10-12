# Paper prototype v0.3 — rules

> Claude's draft: v0.2 rebuilt on the [design philosophy](../design-philosophy.md),
> which comes from the [comparable-games research](../research/2026-10-12-comparable-games.md)
> ([D8](../decisions.md)). It's still board-game sized ([D7](../decisions.md))
> and built on D4–D6. Every number is a guess. In a rough simulation, a
> simple bot took about 7 turns and won about 4 games in 5. If real games
> feel too easy, raise the Emperors' targets by 1 first. Cards are in
> [cards.md](cards.md); log games in [playtest-log.md](playtest-log.md).

**Solo, about 7 turns.** Recruit a crew, build up the two stats the
Emperor's weakness calls for, and strike before your co-conspirators lose
their nerve.

## What changed from v0.2

| v0.2 | v0.3 | Rule of thumb |
|---|---|---|
| Play your whole hand. | Act with one card; the rest pay. | [1](../design-philosophy.md#1-every-card-is-a-choice) |
| Bad cards only add Pressure. | Each bad card also has an action worth its Pressure. | [2](../design-philosophy.md#2-baggage-is-a-bet-not-a-tax) |
| — | Lie low, when your hand is full of baggage. | [3](../design-philosophy.md#3-theres-always-a-way-out-of-a-dead-hand) |
| Four steps on the nerve roll; the Ambitious arrive at 8. | Five named bands, each with one effect that fires once. The Ambitious arrive at 5, and an uninvited guest at 15. | [4](../design-philosophy.md#4-the-clock-pays-you-and-you-can-spend-it) |
| — | Push: +2 Pressure to draw 2. | [4](../design-philosophy.md#4-the-clock-pays-you-and-you-can-spend-it) |
| +1 to the roll per point over the target. | Strike roles, rivals and Preparations. | [6](../design-philosophy.md#6-the-kill-uses-the-deck-you-built) |
| A miss loses. | A Cover can take the fall; a 1 always misses; the odds are on the sheet. | [5](../design-philosophy.md#5-one-roll-many-ways-to-tilt-it) |
| Emperor card: two stats and a target. | Plus one quirk that bends the strike. | [8](../design-philosophy.md#8-the-emperor-behaves-he-isnt-just-a-number) |

## You need

- **35 cards** from [cards.md](cards.md): 8 starter cards, 8
  co-conspirators with 2 cards each, and 3 Emperor cards.
- **A sheet** with five tracks: **Charm**, **Military**, **Political**
  (0–10), **Pressure** (0–20) and **Preparations** (0–3).
- **One six-sided die.**

## Reading a card

Every card in your deck has two halves:

- **Action** (top): what it does if it's the one card you act with.
- **Resource** (bottom): what it gives if you just reveal it: Money or
  Influence. On a bad card (marked ✗) it's a cost instead: Pressure, or
  lost Money.

Some actions make **Preparations**: a bribed guard, the poison ready. Mark
them on the sheet. You can hold up to 3, and each adds 1 to the nerve roll.

A co-conspirator's market card shows their cost, stat bonus, strike role,
rival, and whether they're **Jumpy**. See [cards.md](cards.md).

## Setup

1. Charm, Military and Political start at **3**. Pressure and Preparations
   start at **0**.
2. Shuffle the 8 starter cards into your deck and draw 5.
3. Shuffle the 5 **Willing** co-conspirators and lay 3 face up: the
   **market**. The other 2 are the market deck. Set the 3 **Ambitious** ones
   aside.
4. Draw 1 of the 3 **Emperor** cards and lay it face up. It names the two
   stats you'll strike with, his target, and his quirk.

## A turn

1. **Strike?** At the start of your turn you may [strike](#the-strike)
   instead.
2. **Push?** Once a turn, you may take **+2 Pressure** to draw 2 cards.
3. **Act.** Choose **one** card in your hand and do its Action.
4. **Reveal the rest.** Every other card gives its Resource. Add up the
   Money and Influence, and take any Pressure. Cards drawn in step 3 count
   here too.
5. **Recruit one** co-conspirator from the market, if you can pay, or hold
   the [Feast](#pressure) instead. Raise your stats by their bonus, and put
   their 2 cards in your discard pile. Unspent Money and Influence are lost.
6. **End of turn.**
   - Discard everything.
   - **Pressure +1**, plus 1 for each **Jumpy** co-conspirator in your crew.
   - Refill the market to 3 from the market deck.
   - Draw 5. When your deck runs out, shuffle your discard pile.

**Lie low.** Instead of steps 2–5, discard your hand. Nothing in it counts:
no action, no Money or Influence, no Pressure from bad cards, and no
recruit. Then end your turn as usual. It's your way out of a hand full of
baggage, and it costs you a turn.

## Pressure

Your crew pushing you to strike. It goes up every turn, with every Jumpy
co-conspirator, with every bad card you reveal or act with, and with every
Push. It stops at 20.

It moves through five **bands**. The band you're in sets the nerve roll.
The first time you reach a band, its effect happens at once: tick it off on
the sheet. It never happens again, even if the Feast drops you back below it
and you climb past it a second time.

| Band | Pressure | Nerve roll | The first time you reach it |
|---|---|---|---|
| **Calm** | 0–4 | 3+ | — |
| **Restless** | 5–9 | 4+ | **The Ambitious stir.** Shuffle the 3 Ambitious co-conspirators into the market deck. |
| **Uneasy** | 10–14 | 5+ | **Whispers reach the palace.** The Emperor's target goes up by 1. |
| **Reckless** | 15–19 | 6+ | **An uninvited guest.** The top card of the market deck joins your crew for free, as if you'd recruited them: bonus, cards, Jumpy and all. If the market deck is empty, take the first card in the market. |
| **Breaking** | 20 | 7+ | **Someone makes a move.** You must strike at the start of your next turn. |

It's sticky: it only comes down **two ways**.

- **The Feast.** Once per game, instead of recruiting: pay **6** (Money and
  Influence, any mix) for **−3 Pressure**.
- **Cassius's Firm Word.** The one card in the game that lowers it.

## Getting rid of someone

You can't, mostly: the crew is sticky. Once per game, in your turn, you can
**silence** one co-conspirator. Remove them and both their cards from
wherever they are, lose their stat bonus, and take **+3 Pressure**. The rest
of the crew saw what you did.

## The strike

1. **Check the target.** Add up the two stats the Emperor card names. Take 1
   off his target for each **Inside** co-conspirator in your crew. You can
   only choose to strike if you reach it. If you're made to strike and fall
   short, the plot is **foiled**, and you lose.
2. **Roll your nerve.** Roll the die and add:
   - **+1** for each **Blade** in your crew;
   - **+1** for each Preparation;
   - **−1** for each pair of **rivals** in your crew.

   You need your band's number or more. **A 1 always misses.**
3. **Made it?** The Emperor is dead. **You win.**
4. **Missed?** If you have a **Cover** in your crew, they take the fall.
   Silence them (with no Pressure for it), lose all your Preparations, and
   move Pressure up to the bottom of the next band. You may strike again on
   a later turn, if you still reach the target. At 20, you strike again at
   the start of your next turn. With no Cover, the plot is **foiled**.

Work out your odds before you roll. They're on the sheet too:

| You need (after adding) | 2 or less | 3 | 4 | 5 | 6 | 7+ |
|---|---|---|---|---|---|---|
| **Chance** | 83% | 67% | 50% | 33% | 17% | 0% |

The longer you wait, the more you can prepare, and the jumpier your crew
gets.

## Cut for now

Kept in the design docs for later: happiness per co-conspirator, traits,
political events, the Emperor's hidden weaknesses and routes (the next
experiment), Suspicion, and blackmail. v0.1 and v0.2 are in the git history.
