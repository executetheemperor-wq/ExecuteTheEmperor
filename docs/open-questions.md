# Open questions

Decisions still to make. When one's answered, write the answer into the
matching design doc and [decisions](decisions.md), and delete the question.
The [audit](audit.md) has the full picture — 72 contradictions and 57 gaps
— and its "Resolve first" list is the Sprint 1 agenda. The
[paper prototype](prototype/rules.md) drafts answers to many of the
questions below; they stay open until a playtest backs them.
The [comparable-games research](research/2026-10-12-comparable-games.md) (2026-10-12) suggests answers to
several. They're marked *Research suggests* below, and they're suggestions
too.

## Answered by the notebook

These were open before the OneNote notebook was imported:

- **Setting?** Imperial Rome — Senate, Praetorian Guard, Colosseum, the Ides.
- **Genre?** Resource-management deckbuilder with roguelite runs and Slay
  the Spire-style pathing.
- **Who are you?** An ambitious political figure who could become Emperor
  (details still open — see Q3).
- **What are a person's "values"?** 0–100 variables: Happiness, Suspicion,
  Gullibility (and more).
- **What builds pressure?** +1 a turn, cards, events, co-conspirators.
- **What are the ways to kill?** A first list of areas exists; methods
  include poison and bribed guards.
- **Touchstones?** Slay the Spire, Darkest Dungeon II, Call of Cthulhu, Five
  Nights at Freddy's.

## The big ones (Chat › Note 3)

- ~~Board game, video game, or board game first?~~ → **board game first**
  ([D2](decisions.md)).
- ~~Which turn loop?~~ → **loop B drives it**, with A and C maybe later
  ([D5](decisions.md)). The 30-second turn comes first ([D3](decisions.md)).
- **How is the Emperor actually killed?** Parked ([D1](decisions.md)).
  Ideas so far: several win conditions; a final Fate of the
  Fellowship-style check; a boss fight with your built-up cards; or the
  original chessboard set-up. See
  [ideas for the kill](design/07-the-assassination.md#ideas-for-the-kill-later).

## Decide first (needed for a prototype)

0. ~~What does "card building" mean?~~ → **by drafting co-conspirators**
   ([D4](decisions.md)).
1. **Three phases or four**, and in what order? *(audit [CA-01](audit/contradictions.md#ca-01--three-phases-in-basics-vs-four-phase-pages))*
2. **What is a turn?** For Sprint 1, loop B's turn ([D5](decisions.md)).
   Still open for the larger game cycle — a day, a node on a map?
   *(audit [CA-04](audit/contradictions.md#ca-04--what-is-a-turn-turn-vs-action-vs-day-vs-calendar-date-vs-time-of-day))*
3. **Who is the player character**, and what do they start with?
4. **The core stat list.** *(audit [CA-09](audit/contradictions.md#ca-09--two-different-player-stat-lists-stats-page-vs-1-variables))*
5. ~~How does the night of the murder resolve?~~ Parked ([D1](decisions.md)) — Sprint 1 uses a [placeholder ending](sprint-1.md#placeholder-ending). *(audit [CA-60](audit/contradictions.md))*
6. **How do you learn about the Emperor?** *(audit [EM-01](audit/gaps.md))*
   *Research suggests:* peek or act. His weaknesses start face down, and an
   action turns one up; some reports may be false.
   ([The Emperor](design/06-the-emperor.md#from-the-research))
7. **What does a card look like**, and how is it drawn? *(audit [CA-36](audit/contradictions.md#ca-36--card-at-three-levels-co-conspirators-as-cards-the-cards-they-bring-and-intel-cards), [CA-38](audit/contradictions.md#ca-38--how-cards-are-drawn-by-tag-for-each-event-or-from-a-hand-you-carry))*
   *Research suggests:* two halves, an action and resources, as in *Dune:
   Imperium*. [Prototype v0.3](prototype/cards.md) tries it.
   ([Cards](design/05-cards-events-and-pathing.md#from-the-research))

## Co-conspirators

8. Is there a cap on how many you can have?
   *Research suggests:* about five, as in *Crusader Kings III*'s reworked
   schemes. ([Co-conspirators](design/04-co-conspirators.md#from-the-research))
9. What does a co-conspirator card show?
10. Are "hate" and "grasp" from the first note still part of the design?
    *(audit [CA-14](audit/contradictions.md#ca-14--happiness-vs-likeability-vs-likehate))*
11. Executing them: routine or last resort? *(audit [CA-28](audit/contradictions.md))*
12. What happens when one rats you out?
    *Research suggests:* one loyalty state per person, printed on the card
    (Steady, Jumpy, Turned), rather than hidden numbers.
    ([Co-conspirators](design/04-co-conspirators.md#from-the-research))

## The Emperor

13. Generated Emperors (random traits) or a fixed cast — historical or
    invented?
    *Research suggests:* the real Emperors are rich material (Caligula,
    Domitian, Commodus, Aurelian), and a campaign could be one historical
    "Year". ([research §5](research/2026-10-12-comparable-games.md#5-setting-research))
14. What's the difference between traits, tendencies and weaknesses?
15. Does the Emperor act against you when Notice or Suspicion is high?

## The assassination

16. The full list of methods, and the bonus each gives.
17. How do reports work, and how unreliable are they?
    *Research suggests:* the Roman sources contradict each other, so an
    unreliable report is historically honest, e.g. a 1-in-3 chance a jumpy
    informant is wrong. ([The Emperor](design/06-the-emperor.md#from-the-research))
18. What decides whether you *can* be present?

## Politics

19. Who are the rival "key figures"?
20. What decides who becomes the next Emperor — and when is it you?
    *Research suggests:* a succession check after each kill (who does the
    Guard proclaim?), and a crown bought at auction, as in 193.
    ([Between runs](design/09-between-runs.md#from-the-research))
21. What does public opinion change?

## Between runs

22. Who is the young man reading the book — and is he the next player
    character?
23. Does the book appear only after failure? *(audit [CA-44](audit/contradictions.md))*
24. How many Emperors to be crowned? What's *x* for upgrades?
    *Research suggests:* 3–4 Emperors in one "Year"; keep 1 of 3 Lesson
    cards, capped at about 5.
    ([Between runs](design/09-between-runs.md#from-the-research))
25. What carries over between Emperors in the same game?

## Board game

26. Player count and mode — solo, competitive (rival conspirators), co-op?
    *Research suggests:* solo until the loop survives 20+ plays, then co-op,
    with hidden traitors last. ([Board game](design/10-board-game.md#from-the-research))
27. What does "you have to plot" mean as a rule?
28. What gets unlocked, and when?

## Raised by the research

29. **Do locked bundles need a release valve?** No published deckbuilder the
    research found bundles a person's cards the way [D4](decisions.md)
    does. It may be new, or it may clog. v0.3 tries lying low.
30. **Mid-run objectives?** *The Fate of the Fellowship*'s objective cards
    act as "act breaks" that pause the slide and feed the final roll. Does
    a run need them? ([Run structure](design/01-run-structure.md#from-the-research))
31. **Flashback plan cards?** If the chessboard area plan comes back, could
    it be played *during* the strike, *Blades in the Dark*-style, instead
    of set up beforehand? ([The assassination](design/07-the-assassination.md#from-the-research))
