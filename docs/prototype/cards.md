# Paper prototype v0.2 — cards

> Claude's draft for the [paper prototype](rules.md). 35 cards. Names and
> numbers are guesses — rewrite freely.

Money and Influence are spent this turn and can't go below 0. Charm,
Military and Political are your lasting stats.

## Starter deck (8)

| Card | Copies | Effect |
|---|---|---|
| **Family Coffers** | 5 | +1 Money |
| **Old Friends** | 3 | +1 Influence |

## Co-conspirators (8)

Each is one card for the market, plus 2 cards that join your deck when they
do. Write the owner's name on those 2 cards so you can find them if you
silence someone.

**Jumpy:** +1 Pressure at the end of every turn while they're in your crew.

### Willing — in the market from the start

| Who | Cost | Bonus | | Their cards |
|---|---|---|---|---|
| **Aurelia**, the Socialite | 3 Influence | +2 Charm | | **Dinner Invitation** +2 Influence · **Tall Tales** +1 Pressure |
| **Gaius**, the Military Man | 3 Money | +2 Military | | **Veterans' Purse** +2 Money · **Barracks Brawl** +1 Pressure |
| **Marcus**, the Lout | 2 Money | +1 Military | Jumpy | **Muscle for Hire** +2 Money · **Knows a Man** +1 Money, draw a card |
| **Felix**, the Womaniser | 2 Influence | +1 Charm, +1 Political | | **Charming Rogue** +2 Influence · **A Jealous Husband** +1 Pressure |
| **Livia**, the Actress | 2 Money | +1 Charm | | **Opening Night** +1 Money, +1 Influence · **A Mask for Every Face** draw 2 cards |

### Ambitious — join the market when Pressure first reaches 8

| Who | Cost | Bonus | | Their cards |
|---|---|---|---|---|
| **Titus**, the Moneylender | 4 Influence | +2 Political | | **Open Purse** +3 Money · **Interest Due** −2 Money |
| **Cassius**, the Praetorian | 3 Money + 2 Influence | +2 Military, +1 Political | | **Changing of the Guard** +2 Influence, draw a card · **Firm Word** −1 Pressure |
| **Sextus**, the Poisoner | 4 Money | +2 Political | Jumpy | **Discreet Errand** +2 Money · **Nervous Hands** +1 Pressure |

## The Emperor (3)

Draw one at the start. It's what you've learned about him, and it sets the
strike.

| Card | Strike with | Target |
|---|---|---|
| **Creature of Habit** | Military + Political | 12 |
| **Partially Blind** | Military + Charm | 13 |
| **Take My Wife, Please** | Charm + Political | 12 |

Each one needs about four or five recruits, including at least one
Ambitious co-conspirator or all five Willing ones.

## Sheet

```
CHARM      0  1  2 [3] 4  5  6  7  8  9  10
MILITARY   0  1  2 [3] 4  5  6  7  8  9  10
POLITICAL  0  1  2 [3] 4  5  6  7  8  9  10

PRESSURE  [0] 1  2  3  4  5  6  7 | 8  9 10 11 12 13 | 14 15 16 17 18 19 | 20
          nerve roll 2+           | 3+                | 4+                | 5+, strike now
                                  | Ambitious join    |                   |

FEAST (once):    [ ]        SILENCE (once):    [ ]
```
