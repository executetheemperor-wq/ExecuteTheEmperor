# Paper prototype v0.2 — rules

> Claude's draft, cut down to board-game size ([D7](../decisions.md)). Built
> on D4–D6: the deck is built by drafting co-conspirators, the turn is a
> market deckbuilder, and Pressure is your crew pushing you to strike.
> Every number is a guess — change it after a game. Cards are in
> [cards.md](cards.md); log games in [playtest-log.md](playtest-log.md).

**Solo, about 10 turns.** Recruit a crew, build up the two stats the
Emperor's weakness calls for, and strike before your co-conspirators lose
their nerve.

## You need

- **35 cards** from [cards.md](cards.md): 8 starter cards, 8
  co-conspirators with 2 cards each, and 3 Emperor cards.
- **A sheet** with four tracks: **Charm**, **Military**, **Political**
  (0–10) and **Pressure** (0–20).
- **One six-sided die.**

## Setup

1. Charm, Military and Political start at **3**. Pressure starts at **0**.
2. Shuffle the 8 starter cards into your deck and draw 5.
3. Shuffle the 5 **Willing** co-conspirators and lay 3 face up: the
   **market**. Set the 3 **Ambitious** ones aside.
4. Draw 1 of the 3 **Emperor** cards and lay it face up. It names the two
   stats you'll strike with, and the target they must reach.

## A turn

1. **Strike?** At the start of your turn you may [strike](#the-strike)
   instead.
2. **Play your whole hand.** Add up the Money and Influence. Do anything
   else the cards say (Pressure, drawing — cards you draw get played too).
3. **Recruit one** co-conspirator from the market, if you can pay. Raise
   your stats by their bonus, and put their 2 cards in your discard pile.
   Unspent Money and Influence are lost.
4. **End of turn.**
   - Discard everything.
   - **Pressure +1**, plus 1 for each **Jumpy** co-conspirator in your crew.
   - Refill the market to 3. The first time Pressure reaches **8**, shuffle
     the Ambitious co-conspirators into the market deck.
   - Draw 5. When your deck runs out, shuffle your discard pile.

## Pressure

Your crew pushing you to strike. It goes up every turn, and more with every
jumpy co-conspirator and every bad card they bring.

It's sticky: it only comes down **two ways**.

- **The Feast** — once per game, instead of recruiting: pay **6** (Money
  and Influence, any mix) for **−3 Pressure**.
- **Cassius's Firm Word** — the one card in the game that lowers it.

At **20**, someone makes a move: you must strike at once.

## Getting rid of someone

You can't, mostly — the crew is sticky. Once per game, in your turn, you
can **silence** one co-conspirator: remove them and both their cards from
wherever they are, lose their stat bonus, and take **+3 Pressure** — the
rest of the crew saw what you did.

## The strike

1. **Add up the two stats** the Emperor card names. Below his target: the
   plot is **foiled**, and you lose.
2. **The nerve roll.** Roll the die and add 1 for every point you beat the
   target by. You need:

   | Pressure | Roll |
   |---|---|
   | 0–7 | 2 or more |
   | 8–13 | 3 or more |
   | 14–19 | 4 or more |
   | 20 | 5 or more |

   Make it and the Emperor is dead — **you win**. Miss and someone loses
   their nerve: **foiled**.

The longer you wait, the stronger your stats — and the jumpier your crew.

## Cut for now

Kept in the design docs for later: happiness per co-conspirator, traits,
political events, the Emperor's hidden secrets and routes, Suspicion,
blackmail and uninvited joiners. (v0.1, with all of those, is in the git
history.)
