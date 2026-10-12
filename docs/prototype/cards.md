# Paper prototype v0.3 — cards

> Claude's draft for the [paper prototype](rules.md). 35 cards: the same
> people as v0.2, with new card text. Names and numbers are guesses —
> rewrite freely.

Every card in your deck has an **Action** (if it's the one card you act
with) and a **Resource** (if you just reveal it). ✗ marks a bad card. Money
and Influence are spent this turn and can't go below 0. Charm, Military and
Political are your lasting stats.

## Starter deck (8)

| Card | Copies | Action | Resource |
|---|---|---|---|
| **Family Coffers** | 5 | +2 Money | +1 Money |
| **Old Friends** | 3 | +2 Influence | +1 Influence |

## Co-conspirators (8)

Each is one card for the market, plus 2 cards that join your deck when they
do. Write the owner's name on those 2 cards so you can find them if someone
is silenced.

The market card shows:

- **Cost** to recruit them, and the **bonus** to your stats while they're in
  your crew.
- **Role** at the strike:
  - **Blade:** +1 to the nerve roll.
  - **Inside:** −1 to the Emperor's target.
  - **Cover:** takes the fall if you miss the nerve roll.
- **Rival:** if both rivals are in your crew when you strike, −1 to the
  nerve roll.
- **Jumpy:** +1 Pressure at the end of every turn while they're in your
  crew.

### Willing — in the market from the start

| Who | Cost | Bonus | Role | Rival | |
|---|---|---|---|---|---|
| **Aurelia**, the Socialite | 3 Influence | +2 Charm | Inside | Marcus | |
| **Gaius**, the Military Man | 3 Money | +2 Military | Blade | Livia | |
| **Marcus**, the Lout | 2 Money | +1 Military | Cover | Aurelia | Jumpy |
| **Felix**, the Womaniser | 2 Influence | +1 Charm, +1 Political | Inside | Titus | |
| **Livia**, the Actress | 2 Money | +1 Charm | Cover | Gaius | |

| Owner | Card | Action | Resource |
|---|---|---|---|
| Aurelia | **Dinner Invitation** | Recruit twice this turn | +2 Influence |
| Aurelia | ✗ **Tall Tales** | +2 Pressure, +4 Influence | +1 Pressure |
| Gaius | **Veterans' Purse** | +1 Preparation | +2 Money |
| Gaius | ✗ **Barracks Brawl** | +2 Pressure, +1 Military | +1 Pressure |
| Marcus | **Muscle for Hire** | +3 Money | +2 Money |
| Marcus | **Knows a Man** | Draw 2 cards | +1 Money |
| Felix | **Pillow Talk** | +1 Preparation | +2 Influence |
| Felix | ✗ **A Jealous Husband** | +2 Pressure, draw 3 cards | +1 Pressure |
| Livia | **Opening Night** | +2 Money, +2 Influence | +1 Money, +1 Influence |
| Livia | **A Mask for Every Face** | +1 Preparation | +1 Influence |

### Ambitious — join the market deck when Pressure first reaches 5

| Who | Cost | Bonus | Role | Rival | |
|---|---|---|---|---|---|
| **Titus**, the Moneylender | 4 Influence | +2 Political | Inside | Felix | |
| **Cassius**, the Praetorian | 3 Money + 2 Influence | +2 Military, +1 Political | Blade | Sextus | |
| **Sextus**, the Poisoner | 4 Money | +2 Political | Blade | Cassius | Jumpy |

| Owner | Card | Action | Resource |
|---|---|---|---|
| Titus | **Open Purse** | +1 Preparation, +2 Money | +3 Money |
| Titus | ✗ **Interest Due** | +1 Pressure, +5 Money | −2 Money |
| Cassius | **Changing of the Guard** | +2 Preparations | +2 Influence |
| Cassius | **Firm Word** | −2 Pressure | +1 Influence |
| Sextus | **Discreet Errand** | +1 Preparation | +2 Money |
| Sextus | ✗ **Nervous Hands** | +2 Pressure, +2 Preparations | +1 Pressure |

### Who brings what

Each bad card is who they are. Aurelia can't keep a secret, Gaius can't stay
out of a fight, Felix can't stay out of other men's beds, Titus wants his
money back, and Sextus's hands shake. Marcus brings no bad card: being Jumpy
is his baggage. Livia and Cassius travel light, but Livia is weak and
Cassius is expensive.

The rivals: soldiers and actors don't mix (Gaius and Livia); the socialite
can't stand the lout (Aurelia and Marcus); Felix owes Titus money; the
Praetorian doesn't trust the poisoner (Cassius and Sextus).

## The Emperor (3)

Draw one at the start. It's what you've learned about him, and it sets the
strike.

| Card | Strike with | Target | Quirk |
|---|---|---|---|
| **Creature of Habit** | Military + Political | 13 | His routine never changes: you can hold up to 5 Preparations. |
| **Partially Blind** | Military + Charm | 14 | Come at his blind side: your first Blade gives +2. |
| **Take My Wife, Please** | Charm + Political | 14 | He trusts women: Aurelia and Livia count as Blades too. |

Each one needs about five recruits, and each has two pairs of rivals among
the people it wants.

## Sheet

```
CHARM      0  1  2 [3] 4  5  6  7  8  9  10
MILITARY   0  1  2 [3] 4  5  6  7  8  9  10
POLITICAL  0  1  2 [3] 4  5  6  7  8  9  10
PREPARED  [0] 1  2  3  (4  5: Creature of Habit only)

PRESSURE                        nerve   the first time you reach it
  CALM      [0]  1   2   3   4    3+
  RESTLESS   5   6   7   8   9    4+    [ ] the Ambitious stir
  UNEASY    10  11  12  13  14    5+    [ ] Emperor's target +1
  RECKLESS  15  16  17  18  19    6+    [ ] an uninvited guest
  BREAKING  20                    7+    [ ] strike next turn

NERVE ROLL   d6  +1 per Blade  +1 per Preparation  -1 per pair of rivals
ODDS         need 2 or less: 83%   3: 67%   4: 50%   5: 33%   6: 17%   7+: 0%
             a 1 always misses

FEAST (once):    [ ]        SILENCE (once):    [ ]
```
