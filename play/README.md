# Digital build of paper prototype v0.3

A quick and dirty way to play the [v0.3 paper prototype](../docs/prototype/rules.md)
in a browser, so you can try a lot of games fast. It's for testing the
rules, not the start of the real game: no art, no sound, solo only.

**To play:** open `index.html` in a browser (double-click it). It works
offline, but the fonts need a connection.

## What it does

- Plays the [rules](../docs/prototype/rules.md) and [cards](../docs/prototype/cards.md)
  as written: 35 cards, the five Pressure bands, Push, lie low, the Feast,
  silence, and the strike with Covers.
- Shows the maths: your strike target, nerve modifiers and odds are always
  on screen, and selecting a card previews what acting with it gives.
- Saves the game in your browser, so a reload picks up where you left off.
- At the end, writes a [playtest-log](../docs/prototype/playtest-log.md)
  entry for you to copy, with your turn times measured.
- **Seeds:** under *New game*, type any word as a seed to replay the same
  shuffle, or pick a specific Emperor.

## Readings the build makes

The rules leave a few things open. The build picks one reading for each
(also listed in the in-game cheat sheet):

- If Pressure jumps past a band in one go, that band's effect still fires.
- The strike replaces your turn. After a miss that a Cover absorbs, the turn
  ends as usual, including Pressure +1.
- A Cover taking the fall doesn't use up your one silence.
- With Dinner Invitation, the Feast takes one of your two recruits.
- You can silence someone before choosing to strike, but not when a strike
  is forced.
- Reaching 20 forces a strike at the start of your *next* turn, even when you
  reach it partway through a turn.
- Lie low is only possible before you Push.
- Stats stop at 10.

## For changing the rules

The rules live in `engine.js`; card text and numbers are the tables at the
top. `node play/sim.js` plays thousands of random games to check nothing
breaks, then runs a simple bot to give a rough win rate and game length per
Emperor. Run it after changing a number.
