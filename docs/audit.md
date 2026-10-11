# Audit of the notes

Three independent passes over everything in [`ideas/raw/`](../ideas/raw/)
on 2026-10-11 — one hunting **contradictions**, one hunting **gaps**, one
mapping **every idea** to a doc. Every quote they used was checked
word-for-word against the notes. Options and suggestions are **not
decisions**.

| | Count | Full list |
|---|---|---|
| Contradictions and ambiguities | 72 | [`audit/contradictions.md`](audit/contradictions.md) |
| Missing mechanics | 57 — 23 of them blockers for a one-assassination prototype | [`audit/gaps.md`](audit/gaps.md) |
| Empty or thin notebook pages | 14 | [`audit/gaps.md`](audit/gaps.md#empty-and-thin-pages) |
| Distinct ideas, each mapped to a doc | 235 | [`audit/traceability.md`](audit/traceability.md) |

## Resolve first — for Sprint 1

These sit right on the card layer that [Sprint 1](sprint-1.md) is about.

1. **What "card building" means.** The notes call it "a deckbuilder at
   heart", but you can't add or remove a co-conspirator's cards — only the
   person. So is the deck built card by card, or by recruiting people?
   [CA-37](audit/contradictions.md#ca-37--deckbuilder-at-heart-and-card-building-vs-cannot-add-or-remove-cards)
2. **What a card is.** Co-conspirators are "cards", they *bring* cards, and
   intel comes as cards — three different things. And "pool" means the
   draft candidates, your crew *and* your cards. [CA-36](audit/contradictions.md#ca-36--card-at-three-levels-co-conspirators-as-cards-the-cards-they-bring-and-intel-cards) [CA-34](audit/contradictions.md#ca-34--pool-is-used-for-three-things)
   [CE-01](audit/gaps.md#ce-01--card-template-and-card-pool-types---blocker)
3. **Hand or draw-per-event?** Events draw from a matching pool, yet
   blackmailers force cards "into your hand". [CA-38](audit/contradictions.md#ca-38--how-cards-are-drawn-by-tag-for-each-event-or-from-a-hand-you-carry) [CE-02](audit/gaps.md#ce-02--a-hand-or-drawing-from-a-pool-at-each-event-and-what-can-you-add-to-your-deck---blocker)
4. **What a turn is** — "every action" and "each turn" both add Pressure.
   [CA-04](audit/contradictions.md#ca-04--what-is-a-turn-turn-vs-action-vs-day-vs-calendar-date-vs-time-of-day) [RS-01](audit/gaps.md#rs-01--what-a-turn-and-a-round-is---blocker)
5. **One stat list**, which direction each runs (high Pressure and high
   Suspicion are *bad*), and a cap so checks can always fail. [CA-09](audit/contradictions.md#ca-09--two-different-player-stat-lists-stats-page-vs-1-variables)
   [CA-24](audit/contradictions.md#ca-24--0100-with-100-being-perfect-vs-variables-where-high-is-bad-or-that-arent-scores) [CA-25](audit/contradictions.md#ca-25--d100-roll-under-with-stacking-bonuses-no-cap-an-undefined-base-and-rolls-against-bad-stats) [ST-01](audit/gaps.md#st-01--no-canonical-stat-list-three-lists-disagree---blocker) [ST-04](audit/gaps.md#st-04--when-d100-checks-happen-and-how-cards-change-them---blocker)
6. **Money** — a 0–100 stat, or a currency you spend? And gold / funding /
   Economical / wealth all name it. [CA-16](audit/contradictions.md#ca-16--money-vs-gold-vs-funding-vs-funds-vs-economical-vs-wealth-and-is-money-a-0100-stat) [ST-06](audit/gaps.md#st-06--moneygold-stat-or-currency-where-it-comes-from-what-it-costs---blocker)
7. **Suspicion** — whose, of whom, and how it gets you caught.
   [CA-19](audit/contradictions.md#ca-19--suspicion-whose-suspicion-of-whom) [ST-05](audit/gaps.md#st-05--suspicion-which-value-counts-and-how-it-gets-you-caught---blocker)
8. **The co-conspirator card** and the draft: what's printed on one, how
   many you can have, and the stat "floor" that's really a window.
   [CC-01](audit/gaps.md#cc-01--co-conspirator-card-template---blocker) [CC-02](audit/gaps.md#cc-02--draft-procedure-timing-and-party-size---blocker) [CA-32](audit/contradictions.md#ca-32--overlapping-rules-for-who-can-be-drafted-and-a-floor-that-works-as-a-ceiling)
9. **Happiness and betrayal** — what moves Happiness, and when someone
   rats you out. Happiness vs Likeability vs "hate". [CC-06](audit/gaps.md#cc-06--what-moves-conspirator-happiness-and-when-they-betray-you---blocker)
   [CA-14](audit/contradictions.md#ca-14--happiness-vs-likeability-vs-likehate)
10. **Pressure numbers** — start value, what each band switches on, and
    what "spending Pressure" on blackmail means. [PR-01](audit/gaps.md#pr-01--pressure-thresholds-start-value-and-what-each-band-switches-on---blocker) [CA-30](audit/contradictions.md#ca-30--blackmail-runs-both-ways-and-spending-pressure)
11. **Sticky vs pivoting** — if you can't drop anyone, pivoting only ever
    grows the crew. A "sidelined" state is one option. [CA-29](audit/contradictions.md#ca-29--sticky-co-conspirators-vs-pivoting-and-changing-your-group)
12. **The event card** and a first list of events. [CE-03](audit/gaps.md#ce-03--event-template-and-event-list---blocker)

The gaps pass also wrote **suggested defaults** for most of these — see
[its prototype suggestions](audit/gaps.md#suggested-minimum-for-a-one-assassination-paper-prototype).

## Bigger calls (after Sprint 1)

- **Phases** — three or four, fixed or chosen, and when you strike.
  [CA-01](audit/contradictions.md#ca-01--three-phases-in-basics-vs-four-phase-pages) [CA-03](audit/contradictions.md#ca-03--fixed-phase-sequence-vs-the-player-choosing-when-to-strike)
- **Restarting and winning** — one assassination then restart, a chain of
  Emperors, or several win conditions. [CA-44](audit/contradictions.md#ca-44--one-assassination-then-restart-vs-many-emperors-in-one-run-vs-stick-to-one-and-how-you-get-crowned) [CA-45](audit/contradictions.md#ca-45--what-counts-as-a-win-one-goal-vs-many-win-conditions)
- **How the kill resolves** — board simulation, dice and stat cards, or
  your two-skills-then-a-roll idea. [CA-60](audit/contradictions.md#ca-60--how-the-kill-resolves-a-board-simulation-vs-dicestat-cards-vs-note-4s-two-skills--a-roll-against-happiness)
- **Honest information vs deception** — Spire-style clarity, but also lying
  co-conspirators, hidden traits and unreliable reports. [CA-61](audit/contradictions.md#ca-61--show-lots-of-information-sts-vs-lying-hidden-traits-hidden-maps-and-unreliable-reports)
- **Resource management first, or deckbuilder first?** [CA-64](audit/contradictions.md#ca-64--genre-priority-resource-management-primarily-vs-deckbuilder-at-heart)
- **Does the premise hold?** Your doubt about the killing vs "the Emperor is
  the objective". [CA-70](audit/contradictions.md#ca-70--doubts-about-the-core-premise-not-sure-if-the-design-works-with-the-emperor-killing-bit-vs-the-emperor-is-the-objective)

## Words to pin down

Several words do double or triple duty. Picking one meaning each would
clear up a lot:

| Word | Meanings in the notes | See |
|---|---|---|
| **Plot / plan / plotting** | the conspiracy, the scheme, phase 2, the act of striking | [CA-02](audit/contradictions.md#ca-02--planning-vs-plotting-two-names-for-phase-2-and-plot-means-several-things) [CA-51](audit/contradictions.md#ca-51--plan-is-overloaded) |
| **Area** | murder location, a co-conspirator's access, an upgrade category, the planning board | [CA-50](audit/contradictions.md#ca-50--area-has-four-meanings) |
| **Path** | your route through events, the Emperor's route on the night | [CA-07](audit/contradictions.md#ca-07--path-means-both-the-players-route-through-events-and-the-emperors-movement) |
| **Pool** | draft candidates, your crew, your cards | [CA-34](audit/contradictions.md#ca-34--pool-is-used-for-three-things) |
| **Card** | co-conspirators, their action cards, intel | [CA-36](audit/contradictions.md#ca-36--card-at-three-levels-co-conspirators-as-cards-the-cards-they-bring-and-intel-cards) |
| **Traits** | co-conspirator quirks, Emperor weaknesses, honorifics | [CA-23](audit/contradictions.md#ca-23--traits-means-three-different-things) |
| **Money** | money, gold, funding, funds, Economical, wealth | [CA-16](audit/contradictions.md#ca-16--money-vs-gold-vs-funding-vs-funds-vs-economical-vs-wealth-and-is-money-a-0100-stat) |
| **Public** | Public Support, Public Relations, public relationship, opinion, sway | [CA-15](audit/contradictions.md#ca-15--public-support-vs-public-relations-vs-public-relationship-and-public-opinion--sway--ratings) |
| **Execute** | kill the Emperor, kill a co-conspirator, be executed yourself | [CA-65](audit/contradictions.md#ca-65--execute-means-three-things-and-the-title-is-spelled-two-ways) |

## Empty pages

Plotting Phase · Systems · Events · Campaigns *(one line)* · 2. The Player
Character · 4.1 Emperor Stats · 4.2 Emperor Traits · 4.3 Emperor Tendencies
· 4.4 The Emperor Stat Sheet — plus thin pages (4. The Emperor, 5. The
Gameplay Loop, Conspiracy Phase, Bonus events, Areas). What each was
probably for: [`audit/gaps.md`](audit/gaps.md#empty-and-thin-pages).

## By doc

| Doc | Contradictions | Gaps (blockers) | Ideas mapped |
|---|---|---|---|
| [Overview](overview.md) | 11 | 2 (0) | 15 |
| [Run structure](design/01-run-structure.md) | 16 | 6 (5) | 18 |
| [Pressure](design/02-pressure.md) | 12 | 2 (1) | 28 |
| [Stats and checks](design/03-stats-and-checks.md) | 25 | 7 (4) | 22 |
| [Co-conspirators](design/04-co-conspirators.md) | 31 | 9 (3) | 62 |
| [Cards, events and pathing](design/05-cards-events-and-pathing.md) | 12 | 6 (3) | 13 |
| [The Emperor](design/06-the-emperor.md) | 14 | 6 (3) | 21 |
| [The assassination](design/07-the-assassination.md) *(parked)* | 23 | 9 (4) | 25 |
| [Politics and reputation](design/08-politics-and-reputation.md) | 10 | 5 (0) | 10 |
| [Between runs](design/09-between-runs.md) | 7 | 4 (0) | 12 |
| [Board game](design/10-board-game.md) | 5 | 1 (0) | 6 |
| [Resources](resources.md) | 1 | 0 | 3 |

*(An item can belong to more than one doc, so the columns don't sum to the
totals.)*
