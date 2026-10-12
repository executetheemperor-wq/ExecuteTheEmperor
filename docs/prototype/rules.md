# Paper prototype v0.1 — rules

> **Status: first draft, and Claude's suggestion throughout.** It builds on
> your two decisions from 2026-10-12: the deck is built by drafting
> co-conspirators ([D4](../decisions.md)), and loop B — the market
> deckbuilder — drives the turn ([D5](../decisions.md)). Where a rule comes
> from your notes it cites them; everything else, and **every number**, is a
> first guess to change after a game. The cards are in [cards.md](cards.md);
> log games in [playtest-log.md](playtest-log.md).

**What it tests:** the card layer from [Sprint 1](../sprint-1.md) —
drafting co-conspirators under rising Pressure — with a stand-in ending in
place of the murder stage ([D1](../decisions.md)). **Solo** for now: it's
the quickest way to test the turn. Player count is still
[open question 26](../open-questions.md#board-game).

## In one paragraph

Each turn you draw five cards, play them for **Money** and **Influence**,
and spend that to **recruit** one co-conspirator and **claim** one
political event. Everyone you recruit shuffles their cards into your deck —
the good ones *and* the curses — and you can't take those cards out without
getting rid of the person. They want their cards played, they react to the
kind of person you're becoming, and they rat you out if you let them sour.
Meanwhile Pressure ticks up every turn. When you're ready — or when Pressure
hits 20 — you **strike**: two of your stats must beat the Emperor's Guard,
then one roll against your crew's nerve.

## What you need

- **The cards** in [cards.md](cards.md): 8 starter cards, 10
  co-conspirators, their 30 cards, 15 events and 6 Emperor's secrets — 69
  in all. Index cards cut in half are plenty.
- **A player sheet** with five tracks:
  - **Charm**, **Military**, **Political** — 0 to 10 each.
  - **Suspicion** — 0 to 10.
  - **Pressure** — 0 to 20, with the bands from [Pressure](#pressure)
    written along it. Your "pressure tokens" idea fits here — one token per
    point. *(Chat › Note 2)*
- **Happiness tokens** — coins or beads, up to 5 on each co-conspirator.
- **One six-sided die.**

Count Money and Influence in your head during a turn; nothing carries over.

## Setup

1. **Your stats:** Charm 5, Military 5, Political 5 — your notes put
   things "around the 50 mark" out of 100. *(OneNote › 1. Variables)*
   Suspicion 0, Pressure 0.
2. **Your deck:** shuffle the 8 starter cards and draw 5.
3. **The market:** sort the co-conspirators into their three tiers. Shuffle
   the 5 **Willing** ones and deal 3 face up in a row — the "3 initial
   co-conspirators available to draft". *(OneNote › 3. Co-Conspirators)*
   The rest of the Willing pile is the market deck. Set the **Ambitious**
   and **Unstable** piles aside.
4. **The event row:** shuffle the 15 events and deal 3 face up.
5. **The Emperor:** shuffle the 6 secrets and deal 3 face down. Put the
   other 3 away unseen — every game he's a slightly different man.

## Winning and losing

- **Win:** strike, and the Emperor dies.
- **Lose:** your Suspicion reaches 10 (you're arrested), or your strike is
  foiled.

## A turn

1. **Strike?** At the start of your turn, instead of playing, you may
   [strike](#the-strike).
2. **Play** cards from your hand — as many as you like, in any order.
   Add up the Money and Influence they give, and do what each card says as
   you play it. A card that says **"To play this, pay …"** can only be
   played if you've got that much this turn.
3. **Spend.** You may **recruit one** co-conspirator from the market and
   **claim one** event from the event row. Money and Influence you don't
   spend are lost.
4. **Clean up**, in this order:
   1. **Refusals.** Anyone with a card left in your hand who had *none* of
      their cards played this turn loses 1 Happiness.
   2. **Favouritism.** If you played 2 or more cards from the same
      co-conspirator this turn, everyone else in your crew loses 1
      Happiness.
   3. **Discard** your hand and the cards you played. A card marked
      **Spent** is set aside for the rest of the game instead.
   4. **The Uninvited move in.** Any [Uninvited](#recruiting) co-conspirator
      who was already in the market when this turn began, and whose Demand
      you didn't pay, joins your crew.
   5. **The market moves.** If you recruited no one, the candidate who's
      waited longest loses interest and leaves the game. Slide the row
      along and refill it to 3.
   6. **The event row moves.** If you claimed nothing, the oldest event
      lapses: do its **"If it lapses"** line, if it has one, then discard
      it. Refill to 3.
   7. **Pressure +1** — or +2 once it's at 16 or more.
   8. **Draw 5.**

Whenever your deck runs out — even mid-turn — shuffle your discard pile to
make a new one. Each time you do, [the Shadowy Circle meets](#the-shadowy-circle).

## Pressure

The clock. It's easy to gain, nearly impossible to lose, and both carrot
and stick. *(OneNote › 1.1 Pressure)*

| Pressure | | What it does | Emperor's Guard |
|---|---|---|---|
| **0–5** | The Empire prospers | Every recruit costs 1 extra Money or Influence — "why join in a treacherous plot, when the empire is doing so well?" | 20 |
| **6–11** | Whispers | The first time Pressure reaches 6, shuffle the **Ambitious** co-conspirators into the market deck — "better co-conspirators… the greater the pressure". | 18 |
| **12–15** | Unrest | The first time it reaches 12, shuffle in the **Unstable** ones — too much pressure "may cause unstable or unreliable co-conspirators to spawn". | 16 |
| **16–19** | No way back | Pressure rises 2 a turn instead of 1 — past ~80, "it should snowball into 100 very soon". | 15 |
| **20** | Out of your hands | You must strike at once, [on autopilot](#autopilot). | 15 |

*(Quotes: OneNote › 1.1 Pressure, 3. Co-Conspirators.)* The falling Guard
is my reading of Pressure as "the pressure on the emperor and his position":
the longer you wait, the shakier he gets — and the shakier your plot gets
too. The forced strike at 20 is your board-game rule: "once it hits a value
you have to plot". *(Chat › Note 2)*

Pressure also rises from cards and events. Only one event in the game
lowers it — your notes allow "no more than a handful". *(OneNote › 1.1 Pressure)*

## Co-conspirators

### Recruiting

Each co-conspirator card shows:

- **Joins if** — a stat it checks but doesn't spend. "Military 4–6" is a
  window: your notes' floor that vanishes "if you surpass that floor".
  *(OneNote › 3. Co-Conspirators)*
- **Cost** — Money, Influence, or a stat you **lower for good** ("one may
  actually cost you charm to acquire"). *(OneNote › 3. Co-Conspirators)*
- **Standing** — how they change your stats while they're with you: up
  *or* down. *(OneNote › 3.1)*
- **Trait** — how they react to you at the Shadowy Circle. Traits are
  printed face up, so you can make "educated choices". *(OneNote › 1. Variables)*
- **Access** — the doors they open, which help on the night.
  *(OneNote › 3.3)*
- **Brings** — their three cards.

To recruit someone: meet their **Joins if**, pay their **Cost**, and then:

- Put **3 Happiness** on them.
- Change your stats by their **Standing**. (Stats stay between 0 and 10.)
- Put their three cards in your **discard pile** — they'll turn up after
  your next shuffle.

**Blackmail.** Instead of meeting a candidate's Joins if and paying their
Cost, you can force them in: pay **2 Money** — nothing extra, whatever the
Pressure — take **+2 Pressure** and **+1 Suspicion**, and they join with
only **1 Happiness**. It still counts
as your recruit for the turn. *(OneNote › 3. Co-Conspirators: "spending
money and pressure to force them on side, at a cost of their reduced
happiness, greater suspicion, and mounting pressure")*

**Uninvited.** The Unstable co-conspirators "force their way into the
group". *(OneNote › 1.1 Pressure)* When one appears in the market, you can
pay its **Demand** during your next turn to send it away — out of the game.
If you don't, it joins your crew during that turn's clean-up, with 2
Happiness, and its cards go into your discard pile as usual. This doesn't
use your recruit. You can't recruit an Uninvited card the
normal way — just don't pay.

### Happiness

Each co-conspirator has 0 to 5 Happiness.

| | Happiness |
|---|---|
| You play one of their cards | **+1** (up to 5) — "Co-conspirators become happier when you use their cards." *(OneNote › 3.2)* |
| You refuse them — their card sat in your hand, unplayed, and you played none of theirs | **−1** — "The more you refuse to use conspirator cards, the more unhappy they get." *(OneNote › 3.2)* |
| You played 2+ cards from one person this turn | **−1 to everyone else** — "Overusing one conspirator's card may also cause other conspirators to become suspicious of you." *(OneNote › 3.2)* |
| The Shadowy Circle meets | **+1, −1 or nothing**, by trait |

That's the core tension in your notes: sometimes you play a curse just to
keep its owner sweet. *(OneNote › 3.2)*

**At 0 Happiness, they rat you out** *(OneNote › Basics)*: take **+3
Suspicion**, and they [leave your crew](#leaving-the-crew).

### The Shadowy Circle

*Suggestion:* the conspiracy's meeting *(OneNote › Basics, Conspiracy
Phase)* happens **every time you shuffle your deck**. Each co-conspirator
reacts to the person you've become:

| Trait | At each Circle |
|---|---|
| **Charm over Military** | +1 if your Charm is higher than your Military, −1 if it's lower. |
| **Military over Charm** | +1 if your Military is higher than your Charm, −1 if it's lower. |
| **Charm over Political** | +1 if your Charm is higher than your Political, −1 if it's lower. |
| **Political over Military** | +1 if your Political is higher than your Military, −1 if it's lower. |
| **Restless** | −1 if Pressure is under 6, +1 if it's 12 or more. They want action. |
| **Cautious** | +1 if Suspicion is 2 or less, −1 if it's 5 or more. |
| **Fickle** | −1, always. |

The first two are your socialite and military man: "Do you increase your
charm, appeasing a socialite, at the cost of a military man?"
*(OneNote › 1. Variables)*

### Leaving the crew

Co-conspirators are sticky. *(OneNote › 3.4)* There are only four ways out,
and three of them are yours to choose — all at a price:

- **Exile to Gaul** — an event.
- **Pay Them Off** — one of the Moneylender's cards ("some co-conspirators
  may have an ability to remove another, by paying off"). *(OneNote › 3.4)*
- **Silence them** — once per game, at any point in your turn. Kill one
  co-conspirator: **+3 Suspicion**, everyone else in your crew **−2
  Happiness**, and **−1 Charm, Military and Political**. "Strongly
  strongly deterred… only once ever in a run." *(OneNote › 3.4)*
- **Betrayal** — they rat you out.

When anyone leaves: undo their Standing, remove **all** their cards from
your hand, deck and discard pile (then shuffle your deck — this doesn't
call the Circle), and put them out of the game.

## Suspicion

One number for this prototype: how close Rome is to working out it's you.
*(Whose suspicion of whom is still open — [audit CA-19](../audit/contradictions.md#ca-19--suspicion-whose-suspicion-of-whom).)*

- At **10** you're arrested and lose.
- Every point also adds **1 to the Emperor's Guard** — he's harder to reach
  the more he suspects. That's what makes curses that raise Suspicion
  hurt, rather than just bringing you closer to a cliff.

## The Emperor's secrets

Three secrets lie face down beside the Emperor. Some events and cards say
**Reveal a secret**: turn one face up. Each secret is a piece of intel —
"the stuff you build up… displayed on a screen with cards" — and names a
**route** to him: two of your stats, and the access that helps.
*(OneNote › The night of the murder)*

What you learn decides which plans are open to you — and since your crew
is sticky, the team you built may not suit the man you find. That's the
pivot from your notes. *(OneNote › 3.3)*

## The strike

A placeholder for the murder stage ([D1](../decisions.md)), built from your
idea: "a combo of two skills being a certain value and then a roll against
co conspirator happiness" *(Chat › Note 4)* — plus "Conspirators: who you
use to kill them". *(OneNote › The night of the murder)*

1. **Choose a route** from the secrets you've revealed. Or try
   **Desperately**: any two stats, −4, and no access counts.
2. **Choose who's in** — at least one of your co-conspirators. (No crew, no
   plot.) Anyone you leave out stays out of the nerve roll, but doesn't add
   their access either.
3. **Your total** = the route's two stats + **1 for each co-conspirator
   who's in and has access the route names**.
4. **The Guard** = the number for your Pressure band + your Suspicion. If
   your total is lower, the plot is **foiled** — you lose.
5. **The nerve roll.** Roll the die. If it's **equal to or lower than the
   lowest Happiness among those who are in**, the Emperor is dead — **you
   win**. If it's higher, someone loses their nerve at the last moment —
   **foiled**. The Fate of the Fellowship's last roll as Frodo.
   *(Chat › Note 4)*

### Autopilot

At Pressure 20 the plot is "truly out of the player's hands — someone will
make a move". *(OneNote › 1.1 Pressure)* Strike at once, but you don't get
to choose: **everyone's in**, and you use the revealed route with the
**lowest** total (Desperate, if you've revealed none). Then resolve it as
normal. With no crew at all, nobody makes a move: foiled. You can still win — "the chances are against you". The Five Nights
at Freddy's moment.

**Note what happened** for the [log](playtest-log.md): the turn, Pressure,
your total against the Guard, and who was in.

## A rough check by simulation

Before writing this up, I ran a crude bot through about 4,000 games to catch
broken numbers. It can't tell you whether it's *fun* — only a game at the
table can. What it found:

- Games last **about 11 turns**; it strikes at Pressure ~12.
- A sensible bot wins **about 70%**: 23% foiled on the nerve roll, 5%
  short of the Guard, 2% arrested, and around 5% of games hit autopilot.
- **Curses matter:** playing them only when their owner is getting unhappy
  wins more than always playing them (63%) or never playing them (66%).
- **All six routes get used**, so no single build is the answer.

Two things changed because of it. Choosing **who's in** came in because,
without it, about half of all games were lost on that one roll against
the unhappiest recruit. And Suspicion
was added to the Guard, so that curses which raise it carry a real cost
along the way, not just at 10. A careful person will probably win more than
the bot — if it's too easy, raise every Guard by 2.

## If something feels wrong

| If… | Try… |
|---|---|
| It's too easy | Every Guard +2. |
| The nerve roll feels like a coin flip | Roll against the *second*-lowest Happiness of those who are in. |
| Bookkeeping drags | Drop favouritism first, then the Shadowy Circle's traits. |
| Turns feel empty | Allow two recruits a turn, or six-card hands. |
| Nobody gets rid of anyone | Make Exile to Gaul cheaper — or decide that's fine. |

## Not in this prototype

The murder stage itself (area, method, area plan, presence, reports), the
book and lessons between runs, several Emperors and the crown, honorifics,
rival key figures, Public and Senate relations, Gullibility, the Ides,
the pathing map, and turn loops A and C ([D5](../decisions.md)).
