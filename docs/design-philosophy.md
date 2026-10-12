# Design philosophy

> **v2, 2026-10-12.** v1 was the six principles pulled from your notes
> ([overview](overview.md#design-principles-pulled-from-across-the-notes)).
> v2 keeps all six and adds ten rules of thumb for delivering them, taken
> from the [comparable-games research](research/2026-10-12-comparable-games.md).
> This is Claude's synthesis, not your words: argue with any line.
> [Prototype v0.3](prototype/rules.md) is built on it ([D8](decisions.md)).

**Be Brutus, and get away with it.** A deckbuilder where your allies are
your deck, your crew is the clock, and the kill is one roll you've spent the
whole game tilting.

## The six principles (v1, from your notes)

| # | Principle | In one line |
|---|---|---|
| 1 | **Decisions in tension** | From the midgame on, no big choice is purely good. |
| 2 | **Rewards come from systems** | Good play pays off through what you've built, not through one strong card. |
| 3 | **Information is the real currency** | What you know about the Emperor decides which plans exist. |
| 4 | **A clock you can't stop** | Pressure is easy to gain and very hard to shed. |
| 5 | **Your allies are your problem** | You play around your people; you don't trim them away. |
| 6 | **Show the maths** | The player can see the numbers behind every result. |

## Ten rules of thumb (v2, from the research)

Each one serves a principle above, names the games it comes from, and says
where v0.3 uses it.

### 1. Every card is a choice

*Serves 1 · from Dune: Imperium*

Each card has two halves: an action, or resources. Each turn you act with
one card, and the rest pay for your recruit. That puts a decision in every
turn, not only at the market, and it keeps the turn short.

**In v0.3:** every card has an Action and a Resource half.

### 2. Baggage is a bet, not a tax

*Serves 5 · from Heat, Dominion, Griftlands*

A person's bad card says who they are, and it bites where their good card
helps. No bad card is completely unplayable: each one has a strong action
that costs Pressure. Sometimes you should recruit someone *for* their
baggage.

**In v0.3:** five bad cards, each with an action that trades Pressure for
power.

### 3. There's always a way out of a dead hand

*Serves 5 · from Heat's "Cluttered Hand" rule*

Write the release valve before playtesters find the dead hand. It should
cost you tempo, and it should never be free.

**In v0.3:** you can lie low. You give up your action and your recruit, and
your bad cards cost nothing that turn.

### 4. The clock pays you, and you can spend it

*Serves 4 · from Invisible, Inc., Blades in the Dark, Heat, Clank!*

Pressure moves in a few named bands. Each band has one consequence, printed
on the track where you can see it coming, and each fires only once. Some
consequences are rewards. You can push for more now and pay in Pressure.
Waiting should never be the safe choice.

**In v0.3:** five bands; Push (+2 Pressure, draw 2).

### 5. One roll, many ways to tilt it

*Serves 6 and 2 · from The Fate of the Fellowship, Crusader Kings III*

Card draw is the randomness you plan around. The die comes once, at the
kill. Its odds are printed, and everything you built moves them. A miss can
escalate instead of ending the game, if you planned for it. A 1 always
misses, so the end is never certain.

**In v0.3:** the nerve roll, an odds table on the sheet, and the Cover role.

### 6. The kill uses the deck you built

*Serves 2 · from Crusader Kings III's 2024 scheme rework*

Each co-conspirator has a job at the kill, and rivals in the same plot cost
you. Card actions make preparations that count on the night. The murder
shouldn't feel like a separate game bolted on the end.

**In v0.3:** three strike roles (Blade, Inside, Cover), rivals, and
Preparations.

### 7. Intel costs tempo, and some of it lies

*Serves 3 · from Burgle Bros, Cultist Simulator, the Roman sources*

Learning about the Emperor should cost an action you could have used for
something else. Hide *which* weaknesses he has, never *how* the rules work.
Some reports are wrong, just as the ancient sources contradict each other.

**In v0.3:** not yet. It's the next experiment.

### 8. The Emperor behaves; he isn't just a number

*Serves 3 · from Slay the Spire, Aeon's End, Hostage Negotiator*

A weakness should change how he acts, and so which crew you want.

**In v0.3:** each Emperor card bends one strike rule.

### 9. One state per person, printed on the card

*Serves 6 and [D7](decisions.md) · from Crusader Kings III, Darkest
Dungeon*

Everything about a co-conspirator (role, rival, jumpy) is printed on their
card, so there's nothing to track per person. If people gain states later
(say Steady, Jumpy or Turned), it's one state at a time.

**In v0.3:** nothing is tracked per person.

### 10. Cut before you add

*Serves [D3](decisions.md) and [D7](decisions.md) · from Matt Leacock,
Alexis Kennedy, Klei, Tim Fowers*

Change one system a week, and keep the numbers small on paper. Stay solo
until the loop survives 20 or more plays; then co-op; hidden traitors last.

**In v0.3:** two pages of rules, still solo.

## Tone

Take the subject seriously and let history supply the irony. Rome's real
assassins mostly died for it: Claudius executed Cassius Chaerea, and
Aurelian's secretary was thrown to the beasts. Darkest Dungeon has its jokes,
but its designer says "we never ridicule the idea of faults themselves". The game doesn't need to preach.
*([research §4–5](research/2026-10-12-comparable-games.md#4-cross-cutting-design-themes))*

## Warning signs

From the research's [five risks](research/2026-10-12-comparable-games.md#five-risks).
Check them after every few playtests.

| Risk | Early warning | Rule of thumb |
|---|---|---|
| Too many systems before the core loop | The rules pass 4 pages before 10 playtests. | 10 |
| A turn with no decisions | Testers play on autopilot, or let someone else take their turn. | 1 |
| Two layers of luck | Skill barely moves the win rate; players blame the die. | 5 |
| The murder stage bolted on | The strike doesn't use the cards you built. | 6 |
| Bookkeeping overload | You're tracking more than 2 tokens per co-conspirator. | 9 |

## Not in v0.3 yet

These are waiting, not dropped. Try each as its own experiment once v0.3 has
been played: hidden weaknesses you peek at (rule 7), mid-run objectives,
flashback plan cards, a Year-of-Emperors campaign, and co-op. See the
**From the research** sections in the [design docs](design/).
