# Contradictions and ambiguities — full list

Every place the raw notes disagree with each other, use one word for
several things (or several words for one), or leave a call to make.
Produced by an audit pass on 2026-10-11 over
[`ideas/raw/`](../../ideas/raw/); every quote below was checked
word-for-word against the notes. **Options are suggestions, not decisions.**

The short version is in [`../audit.md`](../audit.md).

## Index

| ID | Issue | Docs |
|---|---|---|
| [CA-01](#ca-01--three-phases-in-basics-vs-four-phase-pages) | Three phases in Basics vs four phase pages | [Run structure](../design/01-run-structure.md), [Politics and reputation](../design/08-politics-and-reputation.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-02](#ca-02--planning-vs-plotting-two-names-for-phase-2-and-plot-means-several-things) | Planning vs Plotting: two names for phase 2, and 'plot' means several things | [Run structure](../design/01-run-structure.md), [The assassination](../design/07-the-assassination.md), [Board game](../design/10-board-game.md) |
| [CA-03](#ca-03--fixed-phase-sequence-vs-the-player-choosing-when-to-strike) | Fixed phase sequence vs the player choosing when to strike | [Run structure](../design/01-run-structure.md), [Pressure](../design/02-pressure.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md) |
| [CA-04](#ca-04--what-is-a-turn-turn-vs-action-vs-day-vs-calendar-date-vs-time-of-day) | What is a 'turn'? Turn vs action vs day vs calendar date vs time of day | [Run structure](../design/01-run-structure.md), [Pressure](../design/02-pressure.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [The Emperor](../design/06-the-emperor.md) |
| [CA-05](#ca-05--slay-the-spire-esque-pathing-vs-shouldnt-be-a-full-path-random-vs-chosen-events) | 'Slay the Spire esque' pathing vs 'shouldn't be a full path'; random vs chosen events | [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Run structure](../design/01-run-structure.md) |
| [CA-06](#ca-06--the-october-copy-of-basics-chat--note-1-drops-the-pathing-line) | The October copy of Basics (Chat › Note 1) drops the pathing line | [Run structure](../design/01-run-structure.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md) |
| [CA-07](#ca-07--path-means-both-the-players-route-through-events-and-the-emperors-movement) | 'Path' means both the player's route through events and the emperor's movement | [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [The assassination](../design/07-the-assassination.md), [The Emperor](../design/06-the-emperor.md) |
| [CA-08](#ca-08--the-night-of-the-murder-vs-daytime-and-public-murder-areas) | 'The night of the murder' vs daytime and public murder Areas | [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md) |
| [CA-09](#ca-09--two-different-player-stat-lists-stats-page-vs-1-variables) | Two different player stat lists (Stats page vs 1. Variables) | [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-10](#ca-10--personal-is-both-a-heading-and-a-stat) | 'Personal' is both a heading and a stat | [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-11](#ca-11--virtue-as-a-personal-stat-and-as-a-relation-stat) | Virtue as a personal stat and as a relation stat | [Stats and checks](../design/03-stats-and-checks.md), [Politics and reputation](../design/08-politics-and-reputation.md) |
| [CA-12](#ca-12--honorific-a-numeric-stat-or-titles-earned-from-events) | Honorific: a numeric stat or titles earned from events? | [Politics and reputation](../design/08-politics-and-reputation.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-13](#ca-13--global-vs-local-variables-the-two-definitions-overlap) | Global vs local variables: the two definitions overlap | [Stats and checks](../design/03-stats-and-checks.md), [Pressure](../design/02-pressure.md) |
| [CA-14](#ca-14--happiness-vs-likeability-vs-likehate) | Happiness vs Likeability vs 'like/hate' | [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-15](#ca-15--public-support-vs-public-relations-vs-public-relationship-and-public-opinion--sway--ratings) | Public Support vs Public Relations vs Public relationship (and public opinion / sway / ratings) | [Stats and checks](../design/03-stats-and-checks.md), [Politics and reputation](../design/08-politics-and-reputation.md), [The Emperor](../design/06-the-emperor.md) |
| [CA-16](#ca-16--money-vs-gold-vs-funding-vs-funds-vs-economical-vs-wealth-and-is-money-a-0100-stat) | Money vs gold vs funding vs funds vs Economical vs wealth (and is Money a 0–100 stat?) | [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md), [Politics and reputation](../design/08-politics-and-reputation.md) |
| [CA-17](#ca-17--favour-access-and-closeness-as-core-resources-plus-influence-vs-political) | 'Favour', 'access' and 'closeness' as core resources, plus Influence vs Political | [Stats and checks](../design/03-stats-and-checks.md), [Overview](../overview.md), [Co-conspirators](../design/04-co-conspirators.md), [The Emperor](../design/06-the-emperor.md) |
| [CA-18](#ca-18--gullibility-whose-gullibility) | Gullibility: whose gullibility? | [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-19](#ca-19--suspicion-whose-suspicion-of-whom) | Suspicion: whose suspicion, of whom? | [Stats and checks](../design/03-stats-and-checks.md), [The Emperor](../design/06-the-emperor.md), [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-20](#ca-20--the-emperors-view-of-you-notice-vs-trust-vs-suspicion-vs-happiness-vs-closer) | The Emperor's view of you: Notice vs Trust vs Suspicion vs Happiness vs 'closer' | [The Emperor](../design/06-the-emperor.md), [Stats and checks](../design/03-stats-and-checks.md), [The assassination](../design/07-the-assassination.md) |
| [CA-21](#ca-21--emperor-stats-two-different-lists-mirroring-the-pc-or-mirroring-a-co-conspirator) | Emperor stats: two different lists, mirroring the PC or mirroring a co-conspirator? | [The Emperor](../design/06-the-emperor.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-22](#ca-22--emperor-weaknesses-vs-intel-vs-traits-vs-tendencies-vs-ailments-vs-routine-and-where-theyre-shown) | Emperor weaknesses vs intel vs traits vs tendencies vs ailments vs routine, and where they're shown | [The Emperor](../design/06-the-emperor.md) |
| [CA-23](#ca-23--traits-means-three-different-things) | 'Traits' means three different things | [Co-conspirators](../design/04-co-conspirators.md), [The Emperor](../design/06-the-emperor.md), [Politics and reputation](../design/08-politics-and-reputation.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-24](#ca-24--0100-with-100-being-perfect-vs-variables-where-high-is-bad-or-that-arent-scores) | 0–100 with '100 being perfect' vs variables where high is bad, or that aren't scores | [Stats and checks](../design/03-stats-and-checks.md), [Pressure](../design/02-pressure.md) |
| [CA-25](#ca-25--d100-roll-under-with-stacking-bonuses-no-cap-an-undefined-base-and-rolls-against-bad-stats) | d100 roll-under with stacking bonuses: no cap, an undefined 'base', and rolls against 'bad' stats | [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-26](#ca-26--correlation-automatic-links-between-your-own-stats-vs-npc-reactions-to-your-stats) | 'Correlation': automatic links between your own stats vs NPC reactions to your stats | [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-27](#ca-27--co-conspirator-variables-how-they-feel-about-you-vs-their-own-standing-added-to-yours) | Co-conspirator variables: how they feel about you vs their own standing added to yours | [Co-conspirators](../design/04-co-conspirators.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-28](#ca-28--executing-co-conspirators-a-casual-option-basics-vs-once-ever-in-a-run-34-and-34-contradicts-itself) | Executing co-conspirators: a casual option (Basics) vs once ever in a run (3.4), and 3.4 contradicts itself | [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-29](#ca-29--sticky-co-conspirators-vs-pivoting-and-changing-your-group) | 'Sticky' co-conspirators vs pivoting and changing your group | [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-30](#ca-30--blackmail-runs-both-ways-and-spending-pressure) | 'Blackmail' runs both ways, and 'spending pressure' | [Co-conspirators](../design/04-co-conspirators.md), [Pressure](../design/02-pressure.md) |
| [CA-31](#ca-31--the-draft-cost-example-switches-from-charm-to-influence) | The draft-cost example switches from charm to influence | [Co-conspirators](../design/04-co-conspirators.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-32](#ca-32--overlapping-rules-for-who-can-be-drafted-and-a-floor-that-works-as-a-ceiling) | Overlapping rules for who can be drafted, and a 'floor' that works as a ceiling | [Co-conspirators](../design/04-co-conspirators.md), [Pressure](../design/02-pressure.md), [Politics and reputation](../design/08-politics-and-reputation.md) |
| [CA-33](#ca-33--persist-between-rounds-what-is-a-round) | 'Persist between rounds': what is a round? | [Co-conspirators](../design/04-co-conspirators.md), [Between runs](../design/09-between-runs.md), [Run structure](../design/01-run-structure.md) |
| [CA-34](#ca-34--pool-is-used-for-three-things) | 'Pool' is used for three things | [Co-conspirators](../design/04-co-conspirators.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md) |
| [CA-35](#ca-35--many-words-for-the-conspiracy-itself) | Many words for the conspiracy itself | [Co-conspirators](../design/04-co-conspirators.md), [Overview](../overview.md) |
| [CA-36](#ca-36--card-at-three-levels-co-conspirators-as-cards-the-cards-they-bring-and-intel-cards) | 'Card' at three levels: co-conspirators as cards, the cards they bring, and intel cards | [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Co-conspirators](../design/04-co-conspirators.md), [The Emperor](../design/06-the-emperor.md) |
| [CA-37](#ca-37--deckbuilder-at-heart-and-card-building-vs-cannot-add-or-remove-cards) | 'Deckbuilder at heart' and 'card building' vs 'cannot add or remove cards' | [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-38](#ca-38--how-cards-are-drawn-by-tag-for-each-event-or-from-a-hand-you-carry) | How cards are drawn: by tag for each event, or from a hand you carry? | [Cards, events and pathing](../design/05-cards-events-and-pathing.md) |
| [CA-39](#ca-39--propaganda-campaigns-an-action-anyone-can-take-own-page-vs-a-co-conspirators-one-time-card-32) | Propaganda campaigns: an action anyone can take (own page) vs a co-conspirator's one-time card (3.2) | [Politics and reputation](../design/08-politics-and-reputation.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-40](#ca-40--pressure-at-100-a-loss-or-a-possible-win-and-what-makes-it-a-win-or-lose-condition) | Pressure at 100: a loss or a possible win? And what makes it a 'win or lose condition'? | [Pressure](../design/02-pressure.md), [The assassination](../design/07-the-assassination.md) |
| [CA-41](#ca-41--pressure-rises-very-slowly-at-1-per-turn-but-snowballs-after-80-starting-value-unknown) | Pressure rises 'very slowly' at +1 per turn but snowballs after ~80; starting value unknown | [Pressure](../design/02-pressure.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-42](#ca-42--what-does-pressure-measure-the-players-clock-or-the-emperors-weakness-which-his-stats-already-track) | What does Pressure measure: the player's clock or the emperor's weakness (which his stats already track)? | [Pressure](../design/02-pressure.md), [The Emperor](../design/06-the-emperor.md) |
| [CA-43](#ca-43--choosing-when-to-strike-vs-being-forced-to-at-a-threshold-board-game-vs-digital) | Choosing when to strike vs being forced to at a threshold (board game vs digital) | [Board game](../design/10-board-game.md), [Pressure](../design/02-pressure.md), [Run structure](../design/01-run-structure.md) |
| [CA-44](#ca-44--one-assassination-then-restart-vs-many-emperors-in-one-run-vs-stick-to-one-and-how-you-get-crowned) | One assassination then restart vs many emperors in one run vs 'stick to one'; and how you get crowned | [Run structure](../design/01-run-structure.md), [Between runs](../design/09-between-runs.md), [Politics and reputation](../design/08-politics-and-reputation.md), [Pressure](../design/02-pressure.md) |
| [CA-45](#ca-45--what-counts-as-a-win-one-goal-vs-many-win-conditions) | What counts as a win? One goal vs 'many win conditions' | [Overview](../overview.md), [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md) |
| [CA-46](#ca-46--foiled-vs-failed-and-who-gets-executed) | Foiled vs failed, and who gets executed | [The assassination](../design/07-the-assassination.md), [Between runs](../design/09-between-runs.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-47](#ca-47--being-present-at-the-murder-two-different-payoffs-and-choosing-vs-not-being-able-to-attend) | Being present at the murder: two different payoffs, and choosing vs not being able to attend | [The assassination](../design/07-the-assassination.md) |
| [CA-48](#ca-48--planning-phase-vs-the-area-plan-where-are-doors-guards-and-spies-set-up) | Planning phase vs the Area Plan: where are doors, guards and spies set up? | [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md) |
| [CA-49](#ca-49--the-palace-map-vs-ten-possible-areas-and-an-areas-list-that-mixes-places-with-events) | The palace map vs ten possible Areas, and an Areas list that mixes places with events | [The assassination](../design/07-the-assassination.md) |
| [CA-50](#ca-50--area-has-four-meanings) | 'Area' has four meanings | [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md), [Between runs](../design/09-between-runs.md) |
| [CA-51](#ca-51--plan-is-overloaded) | 'Plan' is overloaded | [The assassination](../design/07-the-assassination.md) |
| [CA-52](#ca-52--parts-of-the-assassination-four-parts-night-page-vs-three-requirements-33-method-vs-weapon) | Parts of the assassination: four parts (Night page) vs three requirements (3.3); Method vs weapon | [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-53](#ca-53--who-actually-strikes-conspirators-bribed-guards-or-the-player) | Who actually strikes: conspirators, bribed guards, or the player? | [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-54](#ca-54--the-ides-a-calendar-date-a-map-event-or-a-murder-modifier-and-whose-suspicion-does-it-lower) | The Ides: a calendar date, a map event, or a murder modifier? And whose suspicion does it lower? | [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [The assassination](../design/07-the-assassination.md) |
| [CA-55](#ca-55--between-runs-young-man-vs-child-and-is-the-stat-boost-permanent) | Between Runs: 'young man' vs 'child', and is the stat boost permanent? | [Between runs](../design/09-between-runs.md) |
| [CA-56](#ca-56--lessons-based-on-what-failed-or-fixed-categories-an-upgrade-ladder-or-a-currency-and-betrayal-of-enemies) | Lessons: based on what failed or fixed categories? An upgrade ladder or a currency? And 'betrayal of enemies' | [Between runs](../design/09-between-runs.md) |
| [CA-57](#ca-57--recruiting-going-out-to-hire-charm-or-blackmail-vs-drafting-from-offered-candidates-in-your-grasp) | Recruiting: going out to hire, charm or blackmail vs drafting from offered candidates; 'in your grasp' | [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-58](#ca-58--the-meeting-forum-shadowy-circle-vs-the-public-roman-forum-set-up-the-room) | The meeting: 'Forum shadowy circle' vs the public Roman Forum; 'set up the room' | [Co-conspirators](../design/04-co-conspirators.md), [Run structure](../design/01-run-structure.md) |
| [CA-59](#ca-59--rival-key-figures-and-their-points-vs-the-senate-as-one-body-vs-individual-npcs-vs-the-next-emperor) | Rival 'key figures' and their 'points' vs the Senate as one body vs individual NPCs vs the next emperor | [Politics and reputation](../design/08-politics-and-reputation.md), [Run structure](../design/01-run-structure.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-60](#ca-60--how-the-kill-resolves-a-board-simulation-vs-dicestat-cards-vs-note-4s-two-skills--a-roll-against-happiness) | How the kill resolves: a board simulation vs dice/stat cards vs Note 4's 'two skills + a roll against happiness' | [The assassination](../design/07-the-assassination.md), [Board game](../design/10-board-game.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-61](#ca-61--show-lots-of-information-sts-vs-lying-hidden-traits-hidden-maps-and-unreliable-reports) | Show lots of information (StS) vs lying, hidden traits, hidden maps and unreliable reports | [Overview](../overview.md), [Co-conspirators](../design/04-co-conspirators.md), [The assassination](../design/07-the-assassination.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-62](#ca-62--learning-the-emperors-habits-vs-changing-them) | Learning the emperor's habits vs changing them | [The Emperor](../design/06-the-emperor.md), [The assassination](../design/07-the-assassination.md) |
| [CA-63](#ca-63--intel-cards-depend-on-attributes-nothing-else-tracks) | Intel cards depend on attributes nothing else tracks | [The Emperor](../design/06-the-emperor.md), [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-64](#ca-64--genre-priority-resource-management-primarily-vs-deckbuilder-at-heart) | Genre priority: 'resource management primarily' vs 'deckbuilder at heart' | [Overview](../overview.md) |
| [CA-65](#ca-65--execute-means-three-things-and-the-title-is-spelled-two-ways) | 'Execute' means three things, and the title is spelled two ways | [Overview](../overview.md), [Co-conspirators](../design/04-co-conspirators.md), [The assassination](../design/07-the-assassination.md) |
| [CA-66](#ca-66--the-doc-area-resources-vs-the-games-resources) | The doc area 'resources' vs the game's resources | [Resources](../resources.md), [Overview](../overview.md) |
| [CA-67](#ca-67--board-game-things-unlocked-as-you-go-vs-the-digital-games-two-kinds-of-unlocks) | Board-game 'things unlocked as you go' vs the digital game's two kinds of unlocks | [Board game](../design/10-board-game.md), [Between runs](../design/09-between-runs.md) |
| [CA-68](#ca-68--board-game-first-oct-vs-a-digital-roguelite-feb) | 'Board game first' (Oct) vs a digital roguelite (Feb) | [Board game](../design/10-board-game.md), [Overview](../overview.md), [Stats and checks](../design/03-stats-and-checks.md) |
| [CA-69](#ca-69--first-sprint-without-the-murder-vs-stick-to-one-assassination-and-an-undefined-the-30-sec) | First sprint without the murder vs 'stick to one assassination', and an undefined 'the 30 sec' | [Run structure](../design/01-run-structure.md), [Overview](../overview.md), [The assassination](../design/07-the-assassination.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md) |
| [CA-70](#ca-70--doubts-about-the-core-premise-not-sure-if-the-design-works-with-the-emperor-killing-bit-vs-the-emperor-is-the-objective) | Doubts about the core premise ('not sure if the design works with the emperor killing bit') vs 'The Emperor is the objective' | [Overview](../overview.md), [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md) |
| [CA-71](#ca-71--trust-vs-suspicion-separate-values-or-two-ends-of-one-scale) | Trust vs Suspicion: separate values or two ends of one scale? | [Stats and checks](../design/03-stats-and-checks.md), [The Emperor](../design/06-the-emperor.md), [Co-conspirators](../design/04-co-conspirators.md) |
| [CA-72](#ca-72--decisions-always-in-tension-vs-a-snowball-that-helps-the-player) | Decisions always in tension vs a snowball that helps the player | [Overview](../overview.md), [Pressure](../design/02-pressure.md) |

## CA-01 · Three phases in Basics vs four phase pages

**Docs:** [Run structure](../design/01-run-structure.md), [Politics and reputation](../design/08-politics-and-reputation.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › Basics (also Chat › Note 1)* — “Phase: finding co-conspirators / Phase: planning. / Phase: the murder.”
- *OneNote › Basics (also Chat › Note 1)* — “Forum shadowy circle, where discuss the plot in first phase. / Map of imperial palace in second phase / Reports in third phase”
- *OneNote › Plotting Phase (page title; page is empty)* — “Plotting Phase”
- *OneNote › Political Phase* — “Chance to learn about the Emperor, Co-Conspirators, the state of politics”
- *OneNote › Conspiracy Phase* — “Meeting with co-conspirators.”
- *OneNote › The night of the murder* — “The biggest night”
- *OneNote › Between Runs* — “too much suspicion gained in the political phase”

**Why it matters:** Basics, and its October copy, lists three phases (recruit, plan, murder) and has no political phase. The four phase pages written a few minutes later (Plotting, Political, Conspiracy, The night of the murder) add a Political Phase, and Between Runs treats "the political phase" as a real phase. Basics phase 1 is about recruiting people. The Conspiracy Phase page is about a meeting with people you already have. So the two lists are not just renamings of each other. No page gives the order of the four. The phase count decides the run skeleton, the UI flow and where pressure ticks.

**Options:**

- Option A: Four phases in the order Political → Conspiracy → Plotting → Night of the murder. Basics phase 1 (recruiting) is split between Political (meeting people) and Conspiracy (the circle).
- Option B: Keep the three Basics phases. "Political" becomes a type of event that can come up in any phase before the murder, not a phase of its own.
- Option C: Political and Conspiracy run side by side as one "day-to-day" stretch (one map with both kinds of node), then Plotting, then the Night.

## CA-02 · Planning vs Plotting: two names for phase 2, and 'plot' means several things

**Docs:** [Run structure](../design/01-run-structure.md), [The assassination](../design/07-the-assassination.md), [Board game](../design/10-board-game.md)

**In the notes:**

- *OneNote › Basics* — “Phase: planning.”
- *OneNote › Basics* — “Get closer to the emporer to be able to do more in planning phase”
- *OneNote › Plotting Phase (page title; page is empty)* — “Plotting Phase”
- *OneNote › Bonus events* — “Plotting on the Ides is harder but lessens suspicion”
- *OneNote › 3.3 Co-Conspirator Areas* — “access to certain areas to plot the assassination”
- *OneNote › 3.3 Co-Conspirator Areas* — “This could cause conflict within the plot”
- *Chat › Note 2* — “once it hits a value you have to plot”

**Why it matters:** "Planning" and "plotting" both name the second phase. "Plot" also means the conspiracy itself ("within the plot") and conspiring in general, and on the Ides page it may mean carrying out the murder. The board-game line "you have to plot" could mean "start planning" or "strike now". The docs and the in-game wording need one fixed term for each meaning.

**Options:**

- Option A: Call the phase "Planning" and keep "the plot" for the conspiracy and its scheme.
- Option B: Call the phase "Plotting", call the group "the conspiracy", and use "plot" only for the scheme.

## CA-03 · Fixed phase sequence vs the player choosing when to strike

**Docs:** [Run structure](../design/01-run-structure.md), [Pressure](../design/02-pressure.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md)

**In the notes:**

- *OneNote › 1.1 Pressure* — “players will have the freedom to choose when to go ahead with the assassination”
- *OneNote › 1.1 Pressure* — “The player will want to choose to begin the assassination well before that point.”
- *OneNote › Basics* — “Different phases.”
- *OneNote › 5. The Gameplay Loop* — “a selection of pathing, slay the spire type bits to try to choose the upcoming events”
- *OneNote › 1. Variables* — “will also involve some level of pathing”

**Why it matters:** Basics and the phase pages (9 Feb) describe a run as a series of phases. The First Design pages (17 Feb) never mention phases. They describe an open-ended loop of turns, events and pathing, where the player decides when to start the assassination. Someone has to decide what ends each phase before the murder (a set number of turns, a player choice, or a pressure level), and whether the pathing map covers the whole run or one phase.

**Options:**

- Option A: One pathing map covers everything before the murder, with node types (political event, conspiracy meeting, planning or recon). The player chooses when to move on to the Night, and pressure is the clock.
- Option B: Each phase has its own map. The early phases have a fixed length, and the player chooses when to leave Planning for the Night.
- Option C: Phases are fixed in order and length. The "choose when" freedom only applies inside Planning: strike early with a weaker plan, or wait for a better one.

## CA-04 · What is a 'turn'? Turn vs action vs day vs calendar date vs time of day

**Docs:** [Run structure](../design/01-run-structure.md), [Pressure](../design/02-pressure.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [The Emperor](../design/06-the-emperor.md)

**In the notes:**

- *OneNote › 1.1 Pressure* — “Pressure will be incremented very slowly with every action in the game - each turn should add 1 pressure”
- *OneNote › 3.2 Co-Conspirator Skills* — “contribute cards and abilities to the day to day of public life”
- *OneNote › Bonus events* — “Plotting on the Ides is harder”
- *OneNote › The night of the murder* — “can always be found doing certain things at certain times”
- *OneNote › 3.3 Co-Conspirator Areas* — “at night he covertly goes to watch plays”

**Why it matters:** In the same sentence, pressure goes up "with every action" and "each turn". If one turn holds several actions, these give very different clock speeds. The Ides needs a calendar, and the emperor's routines need times of day. No unit of time is defined anywhere.

**Options:**

- Option A: A turn is one node (event) on the path, and adds +1 pressure. Actions inside an event add nothing extra unless a card says so.
- Option B: A turn is one in-game day on a Roman calendar, so the Ides and routines can exist. Each day offers one or more events.
- Option C: Every card played or action taken adds pressure (the fastest clock), and "turn" is only a UI word.

## CA-05 · 'Slay the Spire esque' pathing vs 'shouldn't be a full path'; random vs chosen events

**Docs:** [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *OneNote › Basics* — “Slay the Spire esque pathing system, path into events.”
- *OneNote › 5. The Gameplay Loop* — “There shouldn't be a full path, but instead some slight foresight, maybe improved by co-conspirators or events”
- *OneNote › Political Phase* — “Different random events that add information to the Emperor Sheet”

**Why it matters:** Slay the Spire shows the whole act map from the start (this is my reading of the reference; the notes don't say it). The 17 Feb page asks for only "slight foresight" that other things can improve. The Political Phase calls its events "random", which pulls against choosing your path. Someone has to decide how much of the map is visible, and whether the player picks event types or event contents.

**Options:**

- Option A: A StS-style branching map under fog that shows N nodes ahead. Co-conspirators, events or upgrades raise N.
- Option B: No map. At each step the player picks one of 2–3 next events that are face-down or partly revealed.
- Option C: The whole map shape is visible but what's in each node stays hidden until scouted. Foresight reveals contents, not layout.

## CA-06 · The October copy of Basics (Chat › Note 1) drops the pathing line

**Docs:** [Run structure](../design/01-run-structure.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md)

**In the notes:**

- *OneNote › Basics* — “Slay the Spire esque pathing system, path into events.”
- *Chat › Note 1* — “Reports in third phase”

**Why it matters:** Note 1 is a copy of Basics, but it ends at "Reports in third phase" and leaves out the last line about pathing. The filing note in the chat file records the gap, but not why it happened. It may be a copy/paste slip, or it may mean pathing had fallen out of the October thinking. Docs should cite the OneNote page, not Note 1, for pathing.

**Options:**

- Option A: Treat the gap as accidental. OneNote › Basics is the canonical text, and pathing stays in.
- Option B: Record an open question for the user: is StS-style pathing still wanted?

## CA-07 · 'Path' means both the player's route through events and the emperor's movement

**Docs:** [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [The assassination](../design/07-the-assassination.md), [The Emperor](../design/06-the-emperor.md)

**In the notes:**

- *OneNote › Basics* — “path into events”
- *OneNote › The night of the murder* — “These then interact to cause the pathfinding of the emporer to change”
- *OneNote › The night of the murder* — “the Emperor is most likely to path into the kill zone”
- *OneNote › 3.3 Co-Conspirator Areas* — “lead the Emperor down a path that suits you”

**Why it matters:** One word covers three things: the player's event map, the emperor's physical route on the murder board, and (loosely, in 3.3) steering the emperor's behaviour. Docs, UI and code will mix them up, for example in "pathing upgrades" or "path foresight".

**Options:**

- Option A: Use "map/route" for the player's run, "movements" for the emperor on the board, and "steering" for changing his habits.
- Option B: Keep "pathing" for the player and use "pathfinding" only for the emperor, written down in the glossary.

## CA-08 · 'The night of the murder' vs daytime and public murder Areas

**Docs:** [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *OneNote › The night of the murder (page title; page has content)* — “The night of the murder”
- *OneNote › The night of the murder* — “The biggest night”
- *OneNote › Basics* — “Phase: the murder.”
- *OneNote › Areas* — “Speech / Public Outing / Military Battle / Colosseum”

**Why it matters:** The phase name says the murder happens at night, but several of the listed Areas are public events held in daytime. Someone has to decide whether "night" is a real time-of-day rule or just flavour.

**Options:**

- Option A: Keep "Night of the murder" as the flavour name of the final phase, whatever the time of day.
- Option B: Rename it to something neutral ("The Deed", "The Murder") and make time of day a property of each Area.
- Option C: Make night literal. Every attempt happens at night, and the daytime Areas are cut or reframed (e.g., the night after a speech).

## CA-09 · Two different player stat lists (Stats page vs 1. Variables)

**Docs:** [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › Stats* — “**PC:** / Honorific / Military / Political / Economical / Personal / Virtue / Age / Health / Public Support”
- *OneNote › 1. Variables* — “The player has their own variables, such as / Money / Influence / Charm / Military / Political”

**Why it matters:** Only Military and Political appear in both lists. The 9 Feb list has Economical, Personal, Virtue, Age, Health, Honorific and Public Support. The 17 Feb list adds Money, Influence and Charm. Some pairs may be one idea under two names (Economical/Money, Personal/Charm), but the notes never say so. The 17 Feb list says "such as", so it may not be complete.

**Options:**

- Option A: The 17 Feb list replaces the 9 Feb one. The 9 Feb extras (Virtue, Health, Age, Honorific) are kept as candidates.
- Option B: Merge the two: Economical→Money, Personal→Charm, Public Support→the Public Relations group, then add Influence, Virtue and Health.
- Option C: Two tiers: resources you spend (Money, Influence) and attributes you roll against (Military, Political, Charm, Virtue, Health).

## CA-10 · 'Personal' is both a heading and a stat

**Docs:** [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › Stats* — “**PC:** / **Personal** / Honorific / Military / Political / Economical / Personal / Virtue”
- *OneNote › Stats* — “**Emperor:** / Honorific / Military / Political / Economical / Personal”

**Why it matters:** The PC block opens with a bold "Personal" heading, and "Personal" also appears as a stat in the PC list and the Emperor list. The bold one is probably a group heading, matching Public Relations, Senate Relations and Interpersonal. The stat "Personal" is never defined: it could mean personal charm, personal life, or personal relationships.

**Options:**

- Option A: The bold "Personal" is a group heading ("personal attributes"), and the stat "Personal" means charm or personal magnetism, which becomes Charm in 1. Variables.
- Option B: Drop the stat "Personal" as a slip under the heading.

## CA-11 · Virtue as a personal stat and as a relation stat

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Politics and reputation](../design/08-politics-and-reputation.md)

**In the notes:**

- *OneNote › Stats* — “Virtue / Age / Health / Public Support”
- *OneNote › Stats* — “Public Relations: (Apply to Rome as a Whole) / Likeability / Trust / Suspicion / Virtue”
- *OneNote › Stats* — “Senate Relations: (Apply to the Senate as a Whole)”
- *OneNote › Stats* — “Interpersonal: (Apply to other NPCs) / Likeability / Gullibility / Trust / Suspicion”

**Why it matters:** Virtue is listed as something the PC has, and again as something Rome and the Senate hold about the PC. The interpersonal group has Gullibility in its place. It's unclear whether these are one value or several (actual virtue vs perceived virtue), and why the groups differ.

**Options:**

- Option A: The PC has one Virtue stat, and the Public and Senate "Virtue" is perceived virtue (reputation). Rename the second one, e.g., "Repute", so they don't collide.
- Option B: Keep Virtue only as perceived virtue for each audience, and drop the personal stat.

## CA-12 · Honorific: a numeric stat or titles earned from events?

**Docs:** [Politics and reputation](../design/08-politics-and-reputation.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › Stats* — “Honorific”
- *OneNote › Honorifics* — “Some events and perceived public ratings can give you honorifics, that effect public sway”
- *OneNote › Honorifics* — “you may be known as a cheater”
- *OneNote › 1. Variables* — “All variables, per either NPC or per globally, will be ranked out of 100”

**Why it matters:** The Stats page lists Honorific as a single stat for the PC and the Emperor, which by the 17 Feb rule would be 0–100. The Honorifics page describes earned titles instead, including bad ones ("cheater"), that change who you meet. A title can't be a 0–100 number, and "honorific" suggests honour while the example is an insult.

**Options:**

- Option A: Honorifics are earned tags, like relics, and the numeric "Honorific" stat is dropped.
- Option B: Keep both: a numeric reputation stat (e.g., Dignitas) and separate earned tags, using "honorific" for good tags and "infamy" or "epithet" for bad ones.
- Option C: Each honorific is a tag with its own 0–100 strength that grows as you keep acting in line with it.

## CA-13 · Global vs local variables: the two definitions overlap

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Pressure](../design/02-pressure.md)

**In the notes:**

- *OneNote › 1. Variables* — “Global being variables that apply to the player, and can be contributed to by any source”
- *OneNote › 1. Variables* — “local variables being those that apply to the player, or to NPCs, and can be contributed to by only the player or NPCs”
- *OneNote › 1. Variables* — “the most important global variable is Pressure”
- *OneNote › 1. Variables* — “Broadly global variables should have a set relationship: your money should positively correlate with influence in every run”
- *OneNote › 1.1 Pressure* — “the pressure on the emperor and his position”
- *OneNote › Stats* — “Public Relations: (Apply to Rome as a Whole) / Interpersonal: (Apply to other NPCs)”

**Why it matters:** Both definitions say the variable "applies to the player". The only difference is who can change it, and "any source" vs "only the player or NPCs" leaves open what that other source is (events? cards? the world?). Pressure is called global, but it isn't really a player stat. The 17 Feb page doesn't say which side Money and Influence are on, except that they are given as an example of a global relationship. The Stats page uses a third scheme, sorted by audience (Rome, Senate, each NPC). This is the basic data model.

**Options:**

- Option A: Global means one value per run: the player's stats, Pressure, and the player's standing with the Public and the Senate. Local means one value per NPC: their feelings about the player and their own stats.
- Option B: Global means world state (Pressure, the emperor's standing), and local means per character, including the player.
- Option C: Drop the words global and local and use the Stats page's scopes instead: PC, Rome, Senate, each NPC, Emperor, World (Pressure).

## CA-14 · Happiness vs Likeability vs 'like/hate'

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › Basics* — “Different values of like hate”
- *OneNote › Stats* — “Interpersonal: (Apply to other NPCs) / Likeability”
- *OneNote › 1. Variables* — “Happiness”
- *OneNote › 3.2 Co-Conspirator Skills* — “Co-conspirators become happier when you use their cards”
- *OneNote › 1. Variables* — “increased happiness should decrease suspicion generally”

**Why it matters:** There are three wordings for how an NPC feels about the player. Likeability reads as how much they like you. Happiness reads as how content they are, with you, the plot or how they're treated. The 17 Feb pages use Happiness for both co-conspirators and the Emperor, and it's not said whether that's the same thing as the 9 Feb Likeability or a second variable.

**Options:**

- Option A: One per-NPC variable (e.g., Favour or Loyalty) that covers like/hate, likeability and happiness.
- Option B: Two variables: Likeability (how much they like the PC personally) and Happiness (how satisfied they are inside the conspiracy, which goes up when their cards are used).

## CA-15 · Public Support vs Public Relations vs Public relationship (and public opinion / sway / ratings)

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Politics and reputation](../design/08-politics-and-reputation.md), [The Emperor](../design/06-the-emperor.md)

**In the notes:**

- *OneNote › Stats* — “Public Support”
- *OneNote › Stats* — “Public Relations: (Apply to Rome as a Whole)”
- *OneNote › 1. Variables* — “Senate Relationship / Public relationship”
- *OneNote › Political Phase* — “can be used to effect public opinion”
- *OneNote › Honorifics* — “effect public sway”
- *OneNote › Honorifics* — “perceived public ratings”
- *OneNote › Propaganda Campaigns* — “how the public perceive you”

**Why it matters:** The PC has both a single "Public Support" stat and a four-part "Public Relations" group. The Emperor has "Public Support" on 9 Feb and a single "Public relationship" on 17 Feb. The prose adds opinion, sway, ratings and perception. Someone has to decide whether this is one number, a summary worked out from the group, or several separate values.

**Options:**

- Option A: Public Support is a summary (e.g., the average) of the Public Relations group, and "public opinion/sway/ratings" are just flavour words for it.
- Option B: Merge everything into one "Public Standing" stat per character (PC and Emperor), plus a matching "Senate Standing", and drop the sub-stats.

## CA-16 · Money vs gold vs funding vs funds vs Economical vs wealth (and is Money a 0–100 stat?)

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md), [Politics and reputation](../design/08-politics-and-reputation.md)

**In the notes:**

- *OneNote › 1. Variables* — “gain the gold, favour and access”
- *OneNote › 1. Variables* — “Money”
- *OneNote › Propaganda Campaigns* — “they cost gold”
- *OneNote › 3.2 Co-Conspirator Skills* — “costing an amount of money”
- *OneNote › Basics* — “you can acquire funding to do it in a certain way”
- *OneNote › 3.4 Removing Co-Conspirators* — “at cost to the player's funds”
- *OneNote › Stats* — “Economical”
- *OneNote › 3.3 Co-Conspirator Areas* — “Wealth: You may want a co-conspirator with a lot of money”
- *OneNote › 1. Variables* — “will be ranked out of 100”

**Why it matters:** There are at least six words for money. "Funding" may be money set aside for one method of killing, and "Economical" may be a skill rather than cash. Money is also listed as a 0–100 variable while being spent like a currency. So it's unclear whether spending lowers a capped score or draws from an open-ended pool.

**Options:**

- Option A: One spendable currency called "gold", open-ended and outside the 0–100 rule. Economical is dropped.
- Option B: Money is a 0–100 "wealth" stat. Spending lowers it, and bribes roll against it, so it stays inside the 0–100 rule.
- Option C: Gold is the currency you spend, and a separate Economical/Wealth stat is used for checks. "Funding" is gold set aside for a particular method.

## CA-17 · 'Favour', 'access' and 'closeness' as core resources, plus Influence vs Political

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Overview](../overview.md), [Co-conspirators](../design/04-co-conspirators.md), [The Emperor](../design/06-the-emperor.md)

**In the notes:**

- *OneNote › 1. Variables* — “gain the gold, favour and access needed to kill the emperor without being suspected”
- *OneNote › 1.1 Pressure* — “if your own stats and favour isn't such that you'd be made emperor”
- *OneNote › 3.1 The Effect of Co-Conspirators on Stats* — “creating greater opportunities for influence rolls”
- *OneNote › The night of the murder* — “You can choose, based on your influence, what doors to lock”
- *OneNote › Stats* — “Political”
- *OneNote › Basics* — “Get closer to the emporer to be able to do more in planning phase”

**Why it matters:** The opening pitch names gold, favour and access as the three things you gather, but neither stat list has Favour or Access, and nothing measures how "close to the emperor" you are. Influence (17 Feb) and Political (both lists) overlap, and it's not said which one an "influence roll" uses.

**Options:**

- Option A: Favour is the emperor's regard for you (see CA-20), access comes from your co-conspirators (3.3), and Influence is your political pull and replaces Political.
- Option B: Make Favour and Access real 0–100 stats, keeping Political as skill and Influence as pull.

## CA-18 · Gullibility: whose gullibility?

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › 1. Variables* — “Gullibility (how much they think they can get away with lying to you)”
- *OneNote › 1. Variables* — “they may also find you more gullible, and may spin yarns or lie to you”
- *OneNote › Stats* — “Interpersonal: (Apply to other NPCs) / Gullibility”

**Why it matters:** 17 Feb defines Gullibility as how gullible the NPC thinks you are, so a high value means they lie to you. On the Stats page it sits among the NPC's interpersonal stats, which reads more naturally as how gullible the NPC is, so a high value means you can fool them. These are opposite mechanics.

**Options:**

- Option A: Use only the 17 Feb meaning: each NPC's view of how gullible the PC is, which drives how much they lie.
- Option B: Split it into two values: "Credulity" (how easily you can fool the NPC) and "Duplicity" (how ready the NPC is to lie to you).

## CA-19 · Suspicion: whose suspicion, of whom?

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [The Emperor](../design/06-the-emperor.md), [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › Stats* — “Likeability / Trust / Suspicion”
- *OneNote › 1. Variables* — “Happiness / Suspicion”
- *OneNote › Basics* — “If you're there, which increases suspicion”
- *OneNote › Between Runs* — “too much suspicion gained in the political phase”
- *OneNote › 1.1 Pressure* — “increasing your influence and the emperors suspicion”
- *OneNote › Bonus events* — “emporers are more prepared and on guard, but the omen makes it so less aspersions are put on the co-conspirator”
- *OneNote › 3.2 Co-Conspirator Skills* — “may also cause other conspirators to become suspicious of you”
- *OneNote › 1. Variables* — “kill the emperor without being suspected”

**Why it matters:** There are at least five suspicion values: Public, Senate, each NPC, each co-conspirator, and the Emperor. The notes often just say "suspicion" without saying whose. On the Ides page suspicion shifts onto or away from "the co-conspirator", not the player. The emperor's suspicion could be suspicion of the player, or general alertness ("more prepared and on guard").

**Options:**

- Option A: Suspicion always means suspicion of the player, held separately by each audience. When no audience is named, it means the Emperor's.
- Option B: One global "Heat" value (how exposed the plot is) plus per-NPC suspicion. Being present at the murder and political events raise Heat.
- Option C: Give the emperor a separate alertness stat ("Vigilance") alongside his suspicion of you.

## CA-20 · The Emperor's view of you: Notice vs Trust vs Suspicion vs Happiness vs 'closer'

**Docs:** [The Emperor](../design/06-the-emperor.md), [Stats and checks](../design/03-stats-and-checks.md), [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › 1. Variables* — “Notice (of the player)”
- *OneNote › 1. Variables* — “special variables that relate to how much they take notice of the player”
- *OneNote › The night of the murder* — “there's a chance you're executed based upon the emperors trust in you”
- *OneNote › The night of the murder* — “You can also have the chance of them becoming closer to you”
- *OneNote › Basics* — “Get closer to the emporer”
- *OneNote › 4. The Emperor* — “gain them a foothold with the emperor”

**Why it matters:** There are six phrasings for how the emperor sees the player. Trust decides whether you're executed, yet neither emperor stat list includes Trust. It's unclear whether Notice is good (you're close to him) or bad (you're being watched), and whether "closer" and "foothold" are the same value.

**Options:**

- Option A: Notice is how visible you are, and it cuts both ways (it amplifies both trust and suspicion). Trust is his regard for you, Suspicion is his belief that you're plotting, and "closer" or "foothold" means higher Trust.
- Option B: Collapse everything into two values, Trust and Suspicion, and drop Notice and the emperor's Happiness.
- Option C: Keep one value, Notice, as a deliberate risk/reward: being noticed opens up access and raises the danger.

## CA-21 · Emperor stats: two different lists, mirroring the PC or mirroring a co-conspirator?

**Docs:** [The Emperor](../design/06-the-emperor.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › Stats* — “**Emperor:** / Honorific / Military / Political / Economical / Personal / Virtue / Age / Health / Traits & Ailments / Public Support”
- *OneNote › 1. Variables* — “The Emperor also has many of the same variables as co-conspirators”
- *OneNote › 1. Variables* — “Notice (of the player) / Influence / Money / Happiness / Suspicion / Military / Senate Relationship / Public relationship”
- *OneNote › 4.1 Emperor Stats (page title; page is empty)* — “4.1 Emperor Stats”

**Why it matters:** On 9 Feb the Emperor gets a copy of the PC's stat list. On 17 Feb he is described as like a co-conspirator (with feelings about the player) plus some extras. Only Military appears in both lists. Page 4.1 was meant to settle this but is empty.

**Options:**

- Option A: The Emperor has both: PC-style attributes (Military, Political, Health, Age…) and NPC-style feelings about the player (Notice, Happiness, Suspicion).
- Option B: The 17 Feb list replaces the 9 Feb one, and Age, Health and Traits & Ailments move into traits and intel.

## CA-22 · Emperor weaknesses vs intel vs traits vs tendencies vs ailments vs routine, and where they're shown

**Docs:** [The Emperor](../design/06-the-emperor.md)

**In the notes:**

- *OneNote › The night of the murder* — “Each emperor can have their own weaknesses, but these are shown more as intel”
- *OneNote › The night of the murder* — “the stuff you build up from each assassination should be displayed on a screen with cards”
- *OneNote › Stats* — “Traits & Ailments”
- *OneNote › 4.2 Emperor Traits (page title; page is empty)* — “4.2 Emperor Traits”
- *OneNote › 4.3 Emperor Tendencies (page title; page is empty)* — “4.3 Emperor Tendencies”
- *OneNote › 4.4 The Emperor Stat Sheet (page title; page is empty)* — “4.4 The Emperor Stat Sheet”
- *OneNote › The night of the murder* — “Creature of Habit - They follow a strict routine”
- *OneNote › The night of the murder* — “Partially blind - they have a blind spot due to blindness in one eye”
- *OneNote › Political Phase* — “add information to the Emperor Sheet”
- *OneNote › 3.3 Co-Conspirator Areas* — “Where they go for walks, their routine, their favourite drinks”

**Why it matters:** The notes use six overlapping words for the parts of the emperor you can exploit. "Partially blind" reads as an ailment, and "Creature of Habit" as a tendency or routine. It's unclear whether intel cards are the traits themselves or what you've found out about hidden traits. The information is also shown in three places: the Emperor Sheet, the Stat Sheet, and a screen of cards.

**Options:**

- Option A: Traits (including ailments) are hidden properties, Tendencies are his schedule and habits, and Intel cards are what you've uncovered about either. One Emperor Sheet holds his stats plus the intel cards found so far.
- Option B: Everything is an Intel card, with trait, ailment and tendency as subtypes. The stat sheet holds only numbers.

## CA-23 · 'Traits' means three different things

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [The Emperor](../design/06-the-emperor.md), [Politics and reputation](../design/08-politics-and-reputation.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › 1. Variables* — “certain co-conspirators may have different relationships between variables, defined by the traits of the co-conspirators”
- *OneNote › 1. Variables* — “Traits of certain co-conspirators should be revealed to the player”
- *OneNote › Stats* — “Traits & Ailments”
- *OneNote › Honorifics* — “or get more people approach you with a similar trait”

**Why it matters:** Co-conspirator traits (socialite, military man) change how stats correlate. Emperor traits are weaknesses. In Honorifics, a "trait" is a reputation tag that both the player and NPCs can have ("cheater"). Whether this is one shared tag system or three separate ones changes the data model.

**Options:**

- Option A: One Trait system: tags that any character (PC, NPC or Emperor) can have, each with effects. Honorifics are the PC's public traits.
- Option B: Three named systems: Temperament (co-conspirator correlation rules), Weakness or Intel (emperor), and Honorific (PC reputation).

## CA-24 · 0–100 with '100 being perfect' vs variables where high is bad, or that aren't scores

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Pressure](../design/02-pressure.md)

**In the notes:**

- *OneNote › 1. Variables* — “will be ranked out of 100, and should be distributed at average being around the 50 mark, with 100 being perfect, and 0 being abysmal”
- *OneNote › 1.1 Pressure* — “If pressure hits 100, unless very certain circumstances are met, this should be seen as more or less a lose condition”
- *OneNote › 1. Variables* — “Suspicion / Notice (of the player)”
- *OneNote › Stats* — “Age / Health / Traits & Ailments”

**Why it matters:** "100 is perfect" doesn't hold for Pressure, Suspicion and possibly Notice, where 100 is the worst case. Age isn't good or bad, and Traits & Ailments aren't numbers at all. "Average around 50" would mean Pressure starts near 50, which probably isn't intended.

**Options:**

- Option A: Every number runs 0–100 and has a stated direction (e.g., higher is worse for Pressure and Suspicion). Age and Traits are outside the scale.
- Option B: Reword the rule as "0 = none, 100 = maximum" and apply the "50 is average" guide only to attributes (Military, Charm…).

## CA-25 · d100 roll-under with stacking bonuses: no cap, an undefined 'base', and rolls against 'bad' stats

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › 3.1 The Effect of Co-Conspirators on Stats* — “an influence stat of 70 means that a d100 is rolled, and if your score is smaller than or equal to your influence, you pass this check”
- *OneNote › 3.1 The Effect of Co-Conspirators on Stats* — “these will increment onto your adjusted base variables”
- *OneNote › 3.1 The Effect of Co-Conspirators on Stats* — “A Co-Conspirator who is incredibly influential will increase your influence by a certain amount”
- *OneNote › 1. Variables* — “ranked out of 100”

**Why it matters:** Co-conspirator bonuses add to your stats, so a stat could go past 100 and every check would pass. "Adjusted base variables" isn't defined: base plus permanent upgrades, or plus temporary modifiers too? It's also unclear how checks work for stats where high is bad, such as a suspicion check. In the rule, "your score" means the die roll, which is easy to misread.

**Options:**

- Option A: Cap the value used in checks (e.g., at 95) so failure is always possible. Co-conspirator bonuses are modifiers that go away when they leave.
- Option B: Let values go past 100, but add criticals or opposed rolls (e.g., your Influence against the target's Suspicion).
- Option C: Only roll against "good" stats. "Bad" stats (Suspicion, Notice) lower the target number instead.

## CA-26 · 'Correlation': automatic links between your own stats vs NPC reactions to your stats

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › 1. Variables* — “your money should positively correlate with influence in every run”
- *OneNote › 1. Variables* — “increased happiness should decrease suspicion generally, though a co-conspirator could be happy with you though also find you suspicious”
- *OneNote › 1. Variables* — “a socialite co-conspirator may positively correlate with your charm, but negatively correlate with your militarism”
- *OneNote › 1. Variables* — “your charm may inversely effect their happiness”

**Why it matters:** "Correlate" covers links between one character's own stats (money↔influence, happiness↔suspicion) and links across characters (your charm → the socialite's happiness). It's unclear whether raising money raises influence automatically, as a rule, or only tends to, as a design guideline. It's also unclear whether a co-conspirator's traits can change your own money↔influence link, given "different relationships between variables".

**Options:**

- Option A: Two systems. A few fixed, explicit links within each character (e.g., +X money → +Y influence), and per-NPC reaction weights from traits (changes to your stats → changes to their Happiness or Suspicion).
- Option B: Treat links within a character as a soft guide for writing content only. Per-NPC reaction weights are the only real mechanic.

## CA-27 · Co-conspirator variables: how they feel about you vs their own standing added to yours

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › 1. Variables* — “a Co-Conspirator will have different variables relating to how they feel about the player”
- *OneNote › 3.1 The Effect of Co-Conspirators on Stats* — “Each one will come with their own standing and variables, and these will increment onto your adjusted base variables”
- *OneNote › 3. Co-Conspirators* — “Co-Conspirators are a type of card that both improve certain stats”

**Why it matters:** Co-conspirators have two kinds of variables: how they feel about you (Happiness, Suspicion, Gullibility) and their own clout, which adds to yours. Nothing says whether the bonus is a one-off when they're drafted or lasts while they're in, or whether it scales with their Happiness.

**Options:**

- Option A: Each co-conspirator has (i) relationship values about the PC and (ii) contribution stats that add to the PC for as long as they're in the conspiracy, scaled by Happiness.
- Option B: The contribution is a one-time bonus when they're drafted. After that, only the relationship values change.

## CA-28 · Executing co-conspirators: a casual option (Basics) vs once ever in a run (3.4), and 3.4 contradicts itself

**Docs:** [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › Basics (also Chat › Note 1)* — “Can execute them or leave them alive, but if they rat you out you have a chance of being ended”
- *OneNote › 3.4 Removing Co-Conspirators* — “Co-Conspirators should be very sticky”
- *OneNote › 3.4 Removing Co-Conspirators* — “Only a select few events or cards should be allow the player to trim their co-conspirators, and all at a great cost”
- *OneNote › 3.4 Removing Co-Conspirators* — “It may also be allowed to have a player kill a co-conspirator, available at all points, but this should strongly strongly be deterred”
- *OneNote › 3.4 Removing Co-Conspirators* — “It should be an ability that could reasonably only be done once ever in a run”

**Why it matters:** Basics treats executing a co-conspirator as an ordinary choice, possibly made while recruiting. 3.4 makes removal rare and killing heavily punished. Within 3.4 itself, killing is "available at all points" while trimming is limited to "a select few events or cards". "Only once ever in a run" could be a hard limit, or just a description of how costly it is in practice.

**Options:**

- Option A: 3.4 wins because it was written later. Killing is always available, but its cost (suspicion from every other co-conspirator and lost stats) means you'd realistically do it about once a run. Basics' "execute" is read as silencing a recruit who refused before joining.
- Option B: A hard limit of one kill per run, available at any time.
- Option C: Killing only happens through specific cards or events, like other removal. There is no always-available kill action.

## CA-29 · 'Sticky' co-conspirators vs pivoting and changing your group

**Docs:** [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › 3.3 Co-Conspirator Areas* — “as they are 'sticky', and hard to get rid of once they understand the plot”
- *OneNote › 3.3 Co-Conspirator Areas* — “then you may need to pivot to the poisoning at the theatre route”
- *OneNote › 3.3 Co-Conspirator Areas* — “or do you change your group of co-conspirators to fit the Emperor's habits?”
- *OneNote › 3.2 Co-Conspirator Skills* — “you may only add or remove co-conspirators”

**Why it matters:** 3.3 and 3.4 make removal rare and expensive. But 3.3 also presents changing your group as a normal strategy, and 3.2 casually says you "add or remove co-conspirators". If the only way to pivot is to add people, the group keeps growing, which raises the question of whether there's a size limit.

**Options:**

- Option A: Pivoting means adding people, never removing them. The price is discord between types (military men vs actors) and pressure, possibly with a soft cap on group size.
- Option B: Add a middle state, "sidelined": they still know the plot and are still a risk, but they contribute no cards or areas. It's a cheaper option than removal.

## CA-30 · 'Blackmail' runs both ways, and 'spending pressure'

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Pressure](../design/02-pressure.md)

**In the notes:**

- *OneNote › Basics* — “Hiring them or charming them or blackmailing them”
- *OneNote › 3. Co-Conspirators* — “You may also choose to blackmail a co-conspirator, spending money and pressure to force them on side, at a cost of their reduced happiness, greater suspicion, and mounting pressure”
- *OneNote › 1.1 Pressure* — “certain co-conspirators may force their way into the group, blackmailing you unless you appease them”
- *OneNote › 3. Co-Conspirators* — “some may join without your consent, especially as the pressure rises”
- *OneNote › 1.1 Pressure* — “it is *very hard* to remove or reduce pressure”

**Why it matters:** "Blackmail" is both something you do to recruit people and something co-conspirators do to you, and those are two different mechanics. "Spending… pressure" reads as lowering pressure, which contradicts pressure being hard to reduce. The same sentence ends with "mounting pressure", so the cost is probably that pressure goes up.

**Options:**

- Option A: "Spending pressure" means you pay by adding pressure. Use "coerce" for the player's version and "extort" for the co-conspirators'.
- Option B: Keep "blackmail" only for the player's version, and call co-conspirators forcing their way in "intrusion" or "extortion".

## CA-31 · The draft-cost example switches from charm to influence

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › 3. Co-Conspirators* — “one may actually cost you charm to acquire. Say a conspirator is known for being a lout, or a womaniser, then you can choose to *pay* influence to hire them”

**Why it matters:** The example promises a charm cost and then charges influence. It's also unclear whether this is a payment, or a hit to your reputation from being linked with a lout, which might fit Virtue or Public Likeability better.

**Options:**

- Option A: Each co-conspirator names its own cost stat, so the example covers both.
- Option B: Treat disreputable recruits as an association cost to a reputation stat (Charm, Virtue or Public Likeability), kept separate from paying gold or influence.

## CA-32 · Overlapping rules for who can be drafted, and a 'floor' that works as a ceiling

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Pressure](../design/02-pressure.md), [Politics and reputation](../design/08-politics-and-reputation.md)

**In the notes:**

- *OneNote › 3. Co-Conspirators* — “One that is military focused may require a military floor to trigger, a better military man may need a higher floor, but if you surpass that floor then they may no longer be available”
- *OneNote › 3. Co-Conspirators* — “in general better co-conspirators will be available the greater the pressure, up to a point”
- *OneNote › 1.1 Pressure* — “With low pressure, the Emperor may be in good standing, and co-conspirators may have higher costs to draft”
- *OneNote › Honorifics* — “influences the people you may meet and what they'll require to be made a co-conspirator”
- *OneNote › 3. Co-Conspirators* — “or make a decision in an in-game event, another co-conspirator may open up as an option”

**Why it matters:** Stat thresholds, pressure, honorifics and events all change who is available, what they cost, or both. "Surpass that floor" really describes a ceiling, so each candidate has a stat window. Low pressure changes cost in 1.1 but availability in 3. Someone has to decide which rules control availability and which control cost.

**Options:**

- Option A: Each candidate has a stat window (minimum to maximum) and a pressure window that decide availability. Honorifics and pressure change cost. Events unlock specific candidates.
- Option B: Simpler: stats decide who is available, pressure decides how good the offered candidates are, and honorifics change what they ask for.

## CA-33 · 'Persist between rounds': what is a round?

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Between runs](../design/09-between-runs.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *OneNote › 3. Co-Conspirators* — “this selection pool will persist between rounds, with certain co-conspirators being added or removed from the pool as the game continues”
- *OneNote › 3. Co-Conspirators* — “you may have 3 initial co-conspirators available to draft”
- *OneNote › Between Runs* — “a lasting permenant upgrade, and a stat boost in that area that the next run benefits from”

**Why it matters:** "Round" is never defined. It could mean a draft offer, a turn, a phase, or a whole run. If it means a run, the candidate pool is part of meta-progression (unlocks carry over), which matters a lot for Between Runs.

**Options:**

- Option A: A round is one chance to draft within a run. The candidate pool is run state that changes as you play and resets at the end.
- Option B: A round is a run. Candidates you unlocked or lost carry over between runs as part of meta-progression.

## CA-34 · 'Pool' is used for three things

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md)

**In the notes:**

- *OneNote › 3. Co-Conspirators* — “this selection pool will persist between rounds”
- *OneNote › 1. Variables* — “the player eventually is forced to draft a wide pool of co-conspirators”
- *OneNote › 3.2 Co-Conspirator Skills* — “Each co-conspirator comes with their own cards that will be absorbed into your pools”
- *OneNote › 3.2 Co-Conspirator Skills* — “from the military cards from the combined pool of yours and your co-conspirators”

**Why it matters:** "Pool" means the candidates you can draft, the co-conspirators you already have, and your cards. In a deckbuilder, the difference between pool, deck and roster matters.

**Options:**

- Option A: Use "candidates" for co-conspirators you can draft, "the Conspiracy" or "roster" for the ones you have, and "deck" for cards. Keep "card pool" for content tables only.

## CA-35 · Many words for the conspiracy itself

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Overview](../overview.md)

**In the notes:**

- *OneNote › Basics* — “trying to find people to join the cause”
- *OneNote › Conspiracy Phase* — “Can influence decisions from the pact”
- *OneNote › 3.4 Removing Co-Conspirators* — “once they are in your party”
- *OneNote › 3.3 Co-Conspirator Areas* — “this may go against the team you have already built up”
- *OneNote › 3.3 Co-Conspirator Areas* — “If you build a deck with a lot of military men”
- *OneNote › 3.3 Co-Conspirator Areas* — “This could cause conflict within the plot”
- *OneNote › 1.1 Pressure* — “certain co-conspirators may force their way into the group”

**Why it matters:** Cause, pact, party, team, deck, plot and group all refer to the same set of people. "Pact" might instead mean an agreement that holds decisions. Here "deck" means co-conspirators, which clashes with the card deck.

**Options:**

- Option A: One in-world name ("the Conspiracy" or "the Circle"), with "the pact" kept for its decision-making in meetings.

## CA-36 · 'Card' at three levels: co-conspirators as cards, the cards they bring, and intel cards

**Docs:** [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Co-conspirators](../design/04-co-conspirators.md), [The Emperor](../design/06-the-emperor.md)

**In the notes:**

- *OneNote › 3. Co-Conspirators* — “Co-Conspirators are a type of card”
- *OneNote › 3.2 Co-Conspirator Skills* — “Each co-conspirator comes with their own cards that will be absorbed into your pools”
- *OneNote › The night of the murder* — “displayed on a screen with cards”
- *OneNote › 1. Variables* — “using cards to impart information or determine player actions”

**Why it matters:** It's unclear whether a co-conspirator is drawn and played like a card, or is a roster slot that brings cards with it. Intel cards are information, and it's unclear whether they ever go into the deck.

**Options:**

- Option A: Three named kinds: Conspirator cards (the roster, never drawn), Action cards (drawn and played), and Intel cards (a reference display, never drawn).
- Option B: Co-conspirators aren't cards at all (they're portraits on a roster). Only Action and Intel are cards.

## CA-37 · 'Deckbuilder at heart' and 'card building' vs 'cannot add or remove cards'

**Docs:** [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › 1. Variables* — “The game is a deckbuilder at heart”
- *Chat › Note 3* — “focus on the card building aspect”
- *OneNote › 3.2 Co-Conspirator Skills* — “Importantly, you cannot add or remove cards corresponding to a co-conspirator, you may only add or remove co-conspirators”
- *OneNote › 3.2 Co-Conspirator Skills* — “the combined pool of yours and your co-conspirators”
- *OneNote › 1.1 Pressure* — “or force cards into your hand that are of less use to you”

**Why it matters:** If cards only change when you gain or lose co-conspirators, and co-conspirators are very sticky, there is little deckbuilding at the level of single cards. Yet October's first sprint is about "the card building aspect". "Pool… of yours" suggests the player has their own cards, and it's unclear whether those can be added or removed freely. Cards that blackmailers force on you may also sit outside any co-conspirator's bundle.

**Options:**

- Option A: The player's own deck can be built normally (rewards, paid removal), while co-conspirator cards come as locked bundles.
- Option B: Only co-conspirators shape the deck, so "deckbuilding" means building the conspiracy. Forced cards are curse cards that belong to the blackmailer's bundle.

**✅ Decided 2026-10-12 — Option B:** "Deck is built by drafting co-conspirators yeah." ([D4](../decisions.md))

## CA-38 · How cards are drawn: by tag for each event, or from a hand you carry?

**Docs:** [Cards, events and pathing](../design/05-cards-events-and-pathing.md)

**In the notes:**

- *OneNote › 3.2 Co-Conspirator Skills* — “Whenever an event or action occurs, cards will be drawn out of the pool that correlates to it”
- *OneNote › 3.2 Co-Conspirator Skills* — “an event may require a military card to be played”
- *OneNote › 3.2 Co-Conspirator Skills* — “Co-Conspirators may also allow for one time use cards, usable outside of events”
- *OneNote › 1.1 Pressure* — “force cards into your hand”
- *OneNote › 1. Variables* — “If another co-conspirator is a military man”

**Why it matters:** Drawing from a matching pool for each event suggests you don't carry a hand. But forced cards go "into your hand", and one-time cards can be used outside events, which suggests you do hold cards. It's also unclear whether card tags ("military") are the same as stat names (Military) and co-conspirator types ("military man").

**Options:**

- Option A: Each event draws N cards from the pool matching its tag. Separately, a small held hand keeps one-time cards and forced cards.
- Option B: A StS-style deck and hand that carry over between events, with an event's tag limiting which cards can be played.

**For Sprint 1:** loop B ([D5](../decisions.md)) uses a deck and a hand you draw each turn, with no tags. Whether events later call for card types (loop A) is open.

## CA-39 · Propaganda campaigns: an action anyone can take (own page) vs a co-conspirator's one-time card (3.2)

**Docs:** [Politics and reputation](../design/08-politics-and-reputation.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › Propaganda Campaigns* — “These are campaigns that can be used to influence your relationship with the Public or the Senate, they cost gold”
- *OneNote › 3.2 Co-Conspirator Skills* — “One may allow for a propaganda campaign to be used, costing an amount of money and increasing pressure in return for boosting one of your stats”
- *OneNote › Campaigns* — “Campaigns influence”

**Why it matters:** The two descriptions differ on who can run a campaign (anyone, or only with a co-conspirator), what it changes (relations with the Public or Senate, or any one stat), and whether it adds pressure. The Campaigns page stops mid-sentence. In a Roman, military setting, "campaign" also suggests a military campaign.

**Options:**

- Option A: Propaganda campaigns are an action anyone can take (gold → Public or Senate relations). Co-conspirators unlock stronger or different versions as one-time cards, which also add pressure.
- Option B: Campaigns are only available through co-conspirator cards.
- Option C: Use "campaign" only for propaganda, and "battle" or "conquest" for military campaigns.

## CA-40 · Pressure at 100: a loss or a possible win? And what makes it a 'win or lose condition'?

**Docs:** [Pressure](../design/02-pressure.md), [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › 1. Variables* — “Pressure, which acts as a meta variable that defines the course of the game, and is an important win or lose condition”
- *OneNote › 1.1 Pressure* — “If pressure hits 100, unless very certain circumstances are met, this should be seen as more or less a lose condition”
- *OneNote › 1.1 Pressure* — “If pressure hits 100, the assassination will continue more or less on autopilot - it can still result in a win”
- *OneNote › 1.1 Pressure* — “Sure, you can win - but the chances are against you”

**Why it matters:** The same page calls 100 "more or less a lose condition" and says it "can still result in a win". The "very certain circumstances" are never named. 1. Variables also calls Pressure a win condition, but never says how pressure leads to a win.

**Options:**

- Option A: 100 isn't a loss in itself. It starts an autopilot assassination with heavy penalties (no further setup, worse odds). The "very certain circumstances" are specific cards, honorifics or co-conspirators that let you keep some control.
- Option B: 100 is a loss unless one of a few named exceptions applies, and only those exceptions lead to the autopilot attempt.
- Option C: Read "win condition" as pressure being needed to win: below some level, the assassination can't start or co-conspirators won't commit.

## CA-41 · Pressure rises 'very slowly' at +1 per turn but snowballs after ~80; starting value unknown

**Docs:** [Pressure](../design/02-pressure.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › 1.1 Pressure* — “Pressure will be incremented very slowly with every action in the game - each turn should add 1 pressure”
- *OneNote › 1.1 Pressure* — “Once pressure hits ~80, it should be that no matter what, the pressure will be expected to snowball into 100 very soon”
- *OneNote › 1.1 Pressure* — “Co-conspirators may also bring passive pressure gain”
- *OneNote › 1. Variables* — “should be distributed at average being around the 50 mark”

**Why it matters:** A flat +1 per turn can't snowball by itself, so something has to speed it up past ~80. The starting pressure is never given, and the general "around 50" rule would put it at 50.

**Options:**

- Option A: Pressure starts low (e.g., 0–10), and the gain per turn steps up in bands (e.g., +2 from 60, +4 from 80).
- Option B: Keep a flat +1 and let the snowball come only from things that happen above 80 (unstable recruits, extortion, co-conspirators' passive gain).

## CA-42 · What does Pressure measure: the player's clock or the emperor's weakness (which his stats already track)?

**Docs:** [Pressure](../design/02-pressure.md), [The Emperor](../design/06-the-emperor.md)

**In the notes:**

- *OneNote › 1.1 Pressure* — “Pressure therefore acts as the pressure for the  player to continue the plot, the pressure on the emperor and his position, the pressure to act expediently”
- *OneNote › 1.1 Pressure* — “With low pressure, the Emperor may be in good standing”
- *OneNote › 1. Variables* — “Senate Relationship / Public relationship”
- *OneNote › Stats* — “Public Support”

**Why it matters:** Pressure is described as three things at once. If it also measures how weak the emperor's position is, it overlaps with his Public and Senate stats. Someone has to decide whether the emperor's standing is worked out from Pressure, feeds into it, or is separate.

**Options:**

- Option A: Pressure is its own run clock, and the emperor's standing is in his stats. Content keeps the two loosely in line, e.g., high-pressure events lower his standing.
- Option B: Pressure is partly calculated from the emperor's Public and Senate relationships, so damaging his standing raises pressure.

## CA-43 · Choosing when to strike vs being forced to at a threshold (board game vs digital)

**Docs:** [Board game](../design/10-board-game.md), [Pressure](../design/02-pressure.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *OneNote › 1.1 Pressure* — “players will have the freedom to choose when to go ahead with the assassination”
- *Chat › Note 2* — “Pressure tokens build, once it hits a value you have to plot”
- *OneNote › 1.1 Pressure* — “If pressure hits 100, the assassination will continue more or less on autopilot”

**Why it matters:** In the board game, reaching a pressure value forces you to "plot", which could mean starting to plan or carrying out the murder. In the digital design, the only point where you're forced is 100. It's unclear whether the two versions are meant to work the same way.

**Options:**

- Option A: The same rule in both versions: reaching the threshold forces the assassination (100 in digital, a token count on the board).
- Option B: On the board, the threshold forces the start of the Plotting phase. In digital the player chooses when to start, and 100 forces the strike.

## CA-44 · One assassination then restart vs many emperors in one run vs 'stick to one'; and how you get crowned

**Docs:** [Run structure](../design/01-run-structure.md), [Between runs](../design/09-between-runs.md), [Politics and reputation](../design/08-politics-and-reputation.md), [Pressure](../design/02-pressure.md)

**In the notes:**

- *OneNote › Basics (also Chat › Note 1)* — “Then restart. Need to kill certain number of emporers to be crowned yourself.”
- *OneNote › 1.1 Pressure* — “Though for earlier drafts of the game we should stick to one assassination, the end goal is for there to be many assassinations, each one having a different emperor take the throne if your own stats and favour isn't such that you'd be made emperor”
- *OneNote › 1.1 Pressure* — “In this case, this would be one mechanism for the pressure to reduce (but not fully)”
- *OneNote › Political Phase* — “bolster your own political career, making it more likely you would be emperor”
- *OneNote › Between Runs* — “When a plot is failed, book closes over the whole screen”
- *OneNote › The night of the murder* — “the stuff you build up from each assassination”

**Why it matters:** Basics says that after a kill you "restart", and a fixed number of kills earns you the crown. 1.1 says you're crowned when your stats and favour are high enough, which could happen after a single kill. Otherwise a new emperor takes the throne and pressure only partly resets, which means it's the same run. Early drafts are limited to one assassination. Between Runs only describes what happens after failure, so nothing says what happens after a success.

**Options:**

- Option A: A run is a chain of emperors. After each successful kill, your stats and favour are checked: either you're crowned (the run is won) or a new emperor takes over with pressure partly reset. Early drafts end after the first kill.
- Option B: Each assassination is one run, and kills across runs count toward a meta-goal that unlocks the chance to become emperor (Basics' "certain number").
- Option C: In early drafts, one run is one assassination, scored by "your position after the murder". Crowning comes later.

## CA-45 · What counts as a win? One goal vs 'many win conditions'

**Docs:** [Overview](../overview.md), [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *OneNote › 1. Variables* — “you attempt to gain the gold, favour and access needed to kill the emperor without being suspected”
- *OneNote › The night of the murder* — “to both determine if you get away with it, and what your position is after the murder, if successful”
- *OneNote › 4. The Emperor* — “The Emperor is the objective of the game”
- *OneNote › 4. The Emperor* — “All decisions made by a player should either aid the player's own position, or aid the goal of assassinating the emperor”
- *OneNote › Basics (also Chat › Note 1)* — “Need to kill certain number of emporers to be crowned yourself.”
- *Chat › Note 4* — “maybe many win conditions or SMT idk”

**Why it matters:** The goal is stated three ways: kill the emperor, kill him without being suspected, or become emperor yourself. October adds "many win conditions". It's unclear whether a kill where you're suspected but survive counts as a win, and whether outcomes are graded (kill, escape, position afterwards).

**Options:**

- Option A: Graded outcomes: the kill is the minimum win, and escaping unsuspected and your position afterwards (honours, a step toward the throne) improve it.
- Option B: A simple win: the emperor is dead and you aren't executed. Your position afterwards only feeds meta-progression or the next emperor.
- Option C: Several win routes (e.g., the kill, being crowned through politics), as Note 4 suggests, each with its own end-of-run check.

## CA-46 · Foiled vs failed, and who gets executed

**Docs:** [The assassination](../design/07-the-assassination.md), [Between runs](../design/09-between-runs.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › The night of the murder* — “If a plot is foiled, there's a chance you're executed based upon the emperors trust in you, what you exploit, and how that impacts if they think you're behind it”
- *OneNote › The night of the murder* — “You can also have the chance of them becoming closer to you, depending on if you make it out in a way to implicate someone else”
- *OneNote › Basics (also Chat › Note 1)* — “if they rat you out you have a chance of being ended”
- *OneNote › Between Runs* — “When a plot is failed, book closes over the whole screen”

**Why it matters:** A foiled plot may not end the run, since you might survive and even get closer to the emperor. It's unclear whether "failed" in Between Runs means foiled, executed, or both. The "someone else" you implicate isn't specified (a co-conspirator? a rival? a guard?). Implicating a co-conspirator could quietly get around 3.4's limits on removal. Being "ended" after a co-conspirator rats you out may be a second way to lose, separate from the Night.

**Options:**

- Option A: A foiled plot triggers a check. If you're executed, the run ends (the book closes). If you survive, the run continues with higher emperor Suspicion, and the person you implicated is executed (which counts as removal if they're a co-conspirator).
- Option B: A foiled plot always ends the run. Surviving only changes the between-runs reward (the lessons).
- Option C: You can only implicate rivals or guards, never co-conspirators, so 3.4 stays intact.

## CA-47 · Being present at the murder: two different payoffs, and choosing vs not being able to attend

**Docs:** [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › Basics* — “You can get to see it if you're there, but you may not be able to.”
- *OneNote › Basics* — “If you're there, which increases suspicion, you get to see exactly how people act”
- *OneNote › Basics* — “if you're not there you have to rely on word of mouth, and plots can be growing or not depending on how you interpret some people's reports”
- *OneNote › The night of the murder* — “Choose whether you'll be present or not: if you're present you'll learn more and gain more tricks, but you will be more like to be implicated or a target of suspicion”
- *OneNote › Between Runs* — “can place a free personal spy in any room to report back on how it went”
- *OneNote › Basics* — “Reports in third phase”

**Why it matters:** In Basics, being there gives you information: you see what really happened instead of relying on possibly misleading reports. On the Night page, being there gives you progression: you "learn more and gain more tricks". Basics says you "may not be able to" attend, so it isn't always your choice, while the Night page makes it a free choice. "Plots can be growing or not" could mean plots against you, or how your own plot is going.

**Options:**

- Option A: Being present shows you the full resolution plus extra intel or cards for later. Being absent means unreliable reports (shaped by Gullibility and spies), and some Areas don't let you attend.
- Option B: Being present also lets you play "tricks" (cards) during the resolution, including during the autopilot at Pressure 100.
- Option C: Read "plots can be growing" as what happens next: after a murder you didn't attend, the reports decide whether rumours against you spread.

## CA-48 · Planning phase vs the Area Plan: where are doors, guards and spies set up?

**Docs:** [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *OneNote › Basics* — “Map of imperial palace, parts can be obscured due to building works, not having the plans etc.”
- *OneNote › Basics* — “locking certain doors, replacing certain guards with ones in your post”
- *OneNote › The night of the murder* — “Area plan should be as if chess pieces are set up on a board”
- *OneNote › The night of the murder* — “You can choose, based on your influence, what doors to lock, where to set up spies, who to bribe”
- *OneNote › The night of the murder* — “bribe members of the guard to attempt to get them on side”
- *OneNote › Plotting Phase (page title; page is empty)* — “Plotting Phase”

**Why it matters:** The same actions (locking doors, handling guards) appear in Basics' planning phase and in the Night page's Area Plan. It's unclear whether setup is the planning phase or the first step of the Night. The Plotting Phase page that might have settled it is empty. Replacing guards with your own people (Basics) and bribing the existing guards (Night) may be one action or two.

**Options:**

- Option A: The Area Plan board is the Plotting phase, and the Night is only the resolution.
- Option B: Plotting builds up what you can do (blueprints, loyal guards, access). The Night starts with placing pieces on the board, then resolves.

## CA-49 · The palace map vs ten possible Areas, and an Areas list that mixes places with events

**Docs:** [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › Basics (also Chat › Note 1)* — “Map of imperial palace in second phase”
- *OneNote › Areas* — “Banquet / Feast / Private Dinner / Imperial Palace / Colosseum / Gardens / Speech / Public Outing / Military Battle / Streets”
- *OneNote › The night of the murder* — “Area: Where they are killed”
- *OneNote › 3.3 Co-Conspirator Areas* — “You need a co-conspirator who has access to the area of the playhouse”
- *OneNote › 1.1 Pressure* — “making a speech that denounces an emperors policy”

**Why it matters:** Planning is built around a map of the palace, but the murder can happen in any of ten Areas, and it's unclear whether each one needs its own board. The list mixes places (Gardens, Streets, Colosseum, Imperial Palace) with events (Banquet, Feast, Speech, Public Outing). Banquet and Feast may be the same thing. The playhouse from 3.3 isn't on the list. "Speech" is also something the player does.

**Options:**

- Option A: An Area is an event plus a place (e.g., Private Dinner at the Imperial Palace), and each place has a board.
- Option B: The palace is the only detailed board. Other Areas use simpler boards or a short series of checks.
- Option C: Split the list into Places (with boards) and Occasions (modifiers), and add the Theatre/Playhouse.

## CA-50 · 'Area' has four meanings

**Docs:** [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md), [Between runs](../design/09-between-runs.md)

**In the notes:**

- *OneNote › The night of the murder* — “Area: Where they are killed”
- *OneNote › 3. Co-Conspirators* — “unlock new areas and abilities”
- *OneNote › 3.3 Co-Conspirator Areas* — “Co-Conspirators also will have access to certain areas to plot the assassination”
- *OneNote › 3.3 Co-Conspirator Areas* — “or that the price in that area of hiring military men is too great”
- *OneNote › Between Runs* — “the child can choose one of these areas to be inspired by”
- *OneNote › Between Runs* — “Each area can have up to x permenant upgrades”

**Why it matters:** "Area" means the place of the murder, the places a co-conspirator can get into, a general domain ("in that area of hiring military men"), and a category of between-run upgrades (palace oversight, political suspicion, betrayal).

**Options:**

- Option A: "Area" only means a murder location. Use "Access" for where co-conspirators can go and "Lesson" or "Discipline" for between-run upgrade categories.

## CA-51 · 'Plan' is overloaded

**Docs:** [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › The night of the murder* — “We need to decide a few things - the method, the area, the plan”
- *OneNote › The night of the murder* — “Area Plan: how we set up the scene.”
- *OneNote › Basics* — “not having the plans”
- *OneNote › Between Runs* — “ability to bribe architects and workers to reveal plan”
- *OneNote › Political Phase* — “to attempt to build out the plan for the assassination”

**Why it matters:** "Plan" means the whole assassination plan, the board setup (the Area Plan), and the palace blueprints you might not have.

**Options:**

- Option A: "The Plan" is the whole package (Area + Method + Conspirators + Setup). "Setup" or "Board" is the Area Plan, and "Blueprints" are the building plans.

## CA-52 · Parts of the assassination: four parts (Night page) vs three requirements (3.3); Method vs weapon

**Docs:** [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › The night of the murder* — “Area: Where they are killed / Method: How they are killed / Conspirators: who you use to kill them / Area Plan: how we set up the scene.”
- *OneNote › 3.3 Co-Conspirator Areas* — “1. Area. You need a co-conspirator who has access to the area of the playhouse”
- *OneNote › 3.3 Co-Conspirator Areas* — “2. Access. You need  co-conspirator who fraternises with actors”
- *OneNote › 3.3 Co-Conspirator Areas* — “3. Murder weapon.”
- *OneNote › 3.3 Co-Conspirator Areas* — “3. Wealth: You may want a co-conspirator with a lot of money”
- *OneNote › Basics* — “certain ways beget certain bonuses, you can acquire funding to do it in a certain way”
- *OneNote › The night of the murder* — “Choose area, and set it up”

**Why it matters:** The Night page splits the plan into Area, Method, Conspirators and Area Plan. 3.3 lists what a plot needs as Area, Access and Murder weapon (or Wealth). Access and Wealth aren't among the four parts, and it's unclear whether "murder weapon" and "method" are the same thing. The Night page's "Choose area" also says nothing about needing a co-conspirator with access.

**Options:**

- Option A: Keep the four parts. 3.3's lists are requirements your co-conspirators meet: Access decides which Areas you can pick, the Weapon is the Method, and Wealth is how much you can bribe during setup.
- Option B: Add Access as a fifth part of the plan: how the killer gets close to the emperor.

## CA-53 · Who actually strikes: conspirators, bribed guards, or the player?

**Docs:** [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › The night of the murder* — “Conspirators: who you use to kill them”
- *OneNote › 3.3 Co-Conspirator Areas* — “who can bribe members of the guard to turn the other way, or even kill the emperor”
- *OneNote › 1.1 Pressure* — “by this point the plot is truly out of the player's hands - someone will make a move”
- *OneNote › The night of the murder* — “Choose whether you'll be present or not”

**Why it matters:** The Night page says conspirators do the killing, but 3.3 lets a bribed guard who isn't a co-conspirator do it. Nothing says whether the PC can strike in person when present.

**Options:**

- Option A: The killer must be a co-conspirator or someone you've bought (a bribed guard). The PC never strikes, and being present is only for watching and playing tricks.
- Option B: The PC can strike in person when present, as a last-resort Method with very high risk.

## CA-54 · The Ides: a calendar date, a map event, or a murder modifier? And whose suspicion does it lower?

**Docs:** [Cards, events and pathing](../design/05-cards-events-and-pathing.md), [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › Bonus events (page title; page has content)* — “Bonus events”
- *OneNote › Bonus events* — “Plotting on the Ides is harder but lessens suspicion - emporers are more prepared and on guard, but the omen makes it so less aspersions are put on the co-conspirator”

**Why it matters:** It's filed under "Bonus events" but reads like a rule about the date of the murder, and it needs a calendar that doesn't exist yet (see CA-04). "Plotting" could mean planning during the Ides or striking on them. Suspicion is lowered for "the co-conspirator" (singular), and the player isn't mentioned. "Emperors are more prepared" may be the emperor's alertness (see CA-19).

**Options:**

- Option A: The Ides is a special date you can choose for the Night. Checks are harder, but every conspirator, the PC included, draws less suspicion afterwards.
- Option B: The Ides is a rare bonus event node on the map that opens a window to strike.

## CA-55 · Between Runs: 'young man' vs 'child', and is the stat boost permanent?

**Docs:** [Between runs](../design/09-between-runs.md)

**In the notes:**

- *OneNote › Between Runs* — “revealing it to be being read to a young, impressionable man”
- *OneNote › Between Runs* — “the child can choose one of these areas to be inspired by”
- *OneNote › Between Runs* — “leading to a lasting permenant upgrade, and a stat boost in that area that the next run benefits from”
- *OneNote › 2. The Player Character (page title; page is empty)* — “2. The Player Character”

**Why it matters:** The listener is first a young man and then a child. It's unclear whether he becomes the next run's PC (an heir or a student) or is only a framing device. The page names two rewards, and it's unclear whether the stat boost lasts forever like the upgrade or only for the next run. The Player Character page, which might have settled this, is empty.

**Options:**

- Option A: The listener becomes the next PC, so the runs form a family line. The upgrade is permanent, and the stat boost only applies to the next run.
- Option B: The listener is only a framing device. The upgrade and the stat boost are the same permanent reward.

## CA-56 · Lessons: based on what failed or fixed categories? An upgrade ladder or a currency? And 'betrayal of enemies'

**Docs:** [Between runs](../design/09-between-runs.md)

**In the notes:**

- *OneNote › Between Runs* — “if a run failed due to a multitude of events - no oversight on the palace map, too much suspicion gained in the political phase, or betrayal of enemies, the child can choose one of these areas”
- *OneNote › Between Runs* — “He chooses one of three lessons he's learnt from the book”
- *OneNote › Between Runs* — “No oversight on palace grounds -> ability to bribe architects and workers to reveal plan -> can place a free personal spy in any room to report back on how it went.”
- *OneNote › Between Runs* — “Each area can have up to x permenant upgrades, similar to the candles of hope in DD2.”

**Why it matters:** The three lessons look like the three causes of that run's failure, but "each area can have up to x upgrades" suggests a fixed set of upgrade tracks. The arrow chain could be one upgrade or a ladder of tiers. As far as I know, Candles of Hope in DD2 are a currency you spend on upgrades, which isn't the same as picking one of three lessons. "Betrayal of enemies" could mean being betrayed by enemies, being betrayed by co-conspirators, or betraying your enemies.

**Options:**

- Option A: The run's top three causes of failure become the three lessons on offer. Picking one moves you up a tier on that cause's fixed track, up to x tiers.
- Option B: A DD2-style currency earned each run and spent freely across fixed tracks, with the run's causes of failure giving bonus currency for their own tracks.
- Option C: Reword the third cause as "betrayal by co-conspirators" (or add a separate "rivals" cause) so it matches a system that exists.

## CA-57 · Recruiting: going out to hire, charm or blackmail vs drafting from offered candidates; 'in your grasp'

**Docs:** [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › Basics (also Chat › Note 1)* — “Phase: finding co-conspirators, trying to find people to join the cause. Hiring them or charming them or blackmailing them.”
- *OneNote › Basics (also Chat › Note 1)* — “the more you have them in your grasp the more they either need to be part of it or not”
- *OneNote › 3. Co-Conspirators* — “Each Co-Conspirator will need to be drafted from a selection”
- *OneNote › 3. Co-Conspirators* — “you may have 3 initial co-conspirators available to draft”

**Why it matters:** Basics describes going out and recruiting people yourself. 17 Feb describes a StS-style draft from a pool of offered candidates. "In your grasp" suggests a leverage value that isn't in any stat list, and the sentence can be read either way: more leverage makes them need to join, or the reverse.

**Options:**

- Option A: Candidates come as draft offers, and hiring, charming or blackmailing are the ways you pay for them. "Grasp" is the leverage that blackmail uses.
- Option B: Recruiting is its own type of event (approach someone, then roll a check), and the "draft pool" is the list of people you could approach.

## CA-58 · The meeting: 'Forum shadowy circle' vs the public Roman Forum; 'set up the room'

**Docs:** [Co-conspirators](../design/04-co-conspirators.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *OneNote › Basics (also Chat › Note 1)* — “Forum shadowy circle, where discuss the plot in first phase.”
- *OneNote › Conspiracy Phase* — “Meeting with co-conspirators. Can influence decisions from the pact, set up the room to influence in what regard you're held, and use this to try to push people in certain directions”

**Why it matters:** "Forum" could mean the public Forum Romanum or just a place for discussion, while "shadowy circle" means something secret. Setting up the room sounds like a small version of the Area Plan board. It's unclear whether co-conspirators vote ("decisions from the pact"), and which phase the meeting belongs to: Basics puts it in the first phase (recruiting), while it also has its own Conspiracy Phase page.

**Options:**

- Option A: Call the meeting "the Circle" and make it a recurring node, keeping "Forum" for a public political venue.
- Option B: Take it literally: the circle meets in the Forum, hiding in plain sight, and the venue brings its own risks and mood.

## CA-59 · Rival 'key figures' and their 'points' vs the Senate as one body vs individual NPCs vs the next emperor

**Docs:** [Politics and reputation](../design/08-politics-and-reputation.md), [Run structure](../design/01-run-structure.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › Political Phase* — “Underlying conditions give points to other key figures, who also intersect and are vying for power themselves”
- *OneNote › Stats* — “Senate Relations: (Apply to the Senate as a Whole)”
- *OneNote › Stats* — “Interpersonal: (Apply to other NPCs)”
- *OneNote › 1.1 Pressure* — “each one having a different emperor take the throne if your own stats and favour isn't such that you'd be made emperor”

**Why it matters:** "Points" are never defined. It's unclear whether key figures are rivals, possible co-conspirators, senators (even though the Senate is scored as one body), or the people the next emperor is chosen from.

**Options:**

- Option A: Key figures are named rivals with a Power score. If you aren't crowned, the strongest one takes the throne, and some of them can be recruited.
- Option B: Until later drafts, key figures are only the candidates for next emperor, not full NPCs.

## CA-60 · How the kill resolves: a board simulation vs dice/stat cards vs Note 4's 'two skills + a roll against happiness'

**Docs:** [The assassination](../design/07-the-assassination.md), [Board game](../design/10-board-game.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › The night of the murder* — “I'm thinking more deckbuilder/management than actual murder, so dice rolls, stats cards etc.”
- *OneNote › The night of the murder* — “Area plan should be as if chess pieces are set up on a board”
- *OneNote › The night of the murder* — “These then interact to cause the pathfinding of the emporer to change, how many guards he has and their allegiances to change”
- *OneNote › 3.1 The Effect of Co-Conspirators on Stats* — “if your score is smaller than or equal to your influence, you pass this check”
- *Chat › Note 4* — “maybe like a combo of two skills being a certain value and then a roll against co conspirator happiness or SMT”
- *Chat › Note 4* — “Like how in fate of the fellowship you need to do a last roll as frodo even when there”

**Why it matters:** The board with a pathfinding emperor suggests a step-by-step simulation. "Dice rolls, stats cards" suggests abstract checks. October suggests something else again: two skills must reach a set value, then a final roll against a co-conspirator's Happiness. That rolls against an NPC's stat, unlike 3.1's roll against your own stat, and it means there's always a last roll even after a perfect setup. Each of these needs a very different build.

**Options:**

- Option A: The board is only for setup. It turns into a short chain of d100 checks (route → guards → strike → escape), each shown openly.
- Option B: A turn-by-turn simulation where the emperor moves across the board and checks happen at each encounter.
- Option C: Note 4's model: a threshold gate (two named stats ≥ X, depending on Method or Area), then one final roll against the killer co-conspirator's Happiness or loyalty. It's cheap and works on the board.

## CA-61 · Show lots of information (StS) vs lying, hidden traits, hidden maps and unreliable reports

**Docs:** [Overview](../overview.md), [Co-conspirators](../design/04-co-conspirators.md), [The assassination](../design/07-the-assassination.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *OneNote › The night of the murder* — “We want to have, similarly to spire, a lot of information shown about the results of these boosts, stats etc.”
- *OneNote › 1. Variables* — “Traits of certain co-conspirators should be revealed to the player, so that the player can make educated choices”
- *OneNote › 1. Variables* — “may spin yarns or lie to you about certain effects”
- *OneNote › Basics* — “parts can be obscured due to building works, not having the plans”
- *OneNote › Basics* — “plots can be growing or not depending on how you interpret some people's reports”

**Why it matters:** The design wants clear, StS-style information, and it also has several systems for deceiving or hiding things from the player. Only "certain" co-conspirators' traits are revealed, which suggests the rest are hidden. Someone has to decide what is always shown truthfully (numbers? odds?) and what can be hidden or false.

**Options:**

- Option A: The rules are always shown truthfully (odds, modifiers, pressure). Deception only affects what goes in: a trait not yet revealed, a room not yet scouted, or a co-conspirator's effect marked as "claimed".
- Option B: Allow false numbers in a few places (e.g., a gullible PC sees inflated odds), always marked as unverified.

## CA-62 · Learning the emperor's habits vs changing them

**Docs:** [The Emperor](../design/06-the-emperor.md), [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › The night of the murder* — “Creature of Habit - They follow a strict routine, and can always be found doing certain things at certain times”
- *OneNote › 3.3 Co-Conspirator Areas* — “You may even have the ability to try to sow seeds of ideas into the emperors head as you go”
- *OneNote › 3.3 Co-Conspirator Areas* — “Do you use your skills and co-conspirators to lead the Emperor down a path that suits you, or do you change your group of co-conspirators to fit the Emperor's habits?”
- *OneNote › The night of the murder* — “Choose area, and set it up in a way that the Emperor is most likely to path into the kill zone”

**Why it matters:** Some intel suggests fixed habits that you can only exploit, while 3.3 suggests you can steer what the emperor does. It's unclear whether his tendencies can change, whether "Creature of Habit" makes him harder to steer, and whether steering happens during the run (through events) or only on the Night (on the board).

**Options:**

- Option A: Tendencies can change during the run through "seed" cards or events. Some traits, like Creature of Habit, resist change but make him predictable.
- Option B: Habits are fixed, and "steering" only means arranging the Night board (doors and lures).

## CA-63 · Intel cards depend on attributes nothing else tracks

**Docs:** [The Emperor](../design/06-the-emperor.md), [The assassination](../design/07-the-assassination.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › The night of the murder* — “Take my Wife, please - they have a proclivity to trust women above all else”
- *OneNote › The night of the murder* — “Partially blind - they have a blind spot due to blindness in one eye”
- *OneNote › The night of the murder* — “each of them should interact to guide what options a player is able to use to plan the murder”

**Why it matters:** To use these cards, the game needs co-conspirators' gender (or a "woman" tag) and lines of sight on the board. No stat list and no co-conspirator description includes either. Nothing says whether intel works through tags (unlocking options) or through numbers (changing checks).

**Options:**

- Option A: Intel cards work through tags. Each one unlocks specific Methods, Areas or setup moves when you have a co-conspirator with the matching tag.
- Option B: Intel cards only change numbers (e.g., +20 to stealth checks inside his blind spot), so no new tags are needed.

## CA-64 · Genre priority: 'resource management primarily' vs 'deckbuilder at heart'

**Docs:** [Overview](../overview.md)

**In the notes:**

- *OneNote › 1. Variables* — “Execute the Emperor is a resource management game primarily”
- *OneNote › 1. Variables* — “The game is a deckbuilder at heart”
- *OneNote › The night of the murder* — “I'm thinking more deckbuilder/management than actual murder”

**Why it matters:** The opening paragraph calls the game two different things, "primarily" one and "at heart" the other. Which comes first affects the pitch, what the UI centres on (a stat dashboard or a hand of cards), and scope.

**Options:**

- Option A: Pitch it as a resource-management roguelite played through cards. The resources (stats, pressure) are what you're managing, and the cards are how you act.
- Option B: Lead with deckbuilder, the genre players recognise, and present resource management as what makes it different.

## CA-65 · 'Execute' means three things, and the title is spelled two ways

**Docs:** [Overview](../overview.md), [Co-conspirators](../design/04-co-conspirators.md), [The assassination](../design/07-the-assassination.md)

**In the notes:**

- *OneNote › 1. Variables* — “Execute the Emperor is a resource management game primarily”
- *Chat › Note 2* — “Execute the emporer”
- *OneNote › Basics (also Chat › Note 1)* — “Can execute them or leave them alive”
- *OneNote › The night of the murder* — “there's a chance you're executed”

**Why it matters:** The title uses "execute" for killing the emperor. In play it also means you killing co-conspirators and the state killing you. That's a neat thematic echo, but it needs a glossary entry. The title is spelled "Emperor" in 1. Variables and "emporer" in Note 2 and in the notebook name.

**Options:**

- Option A: The official title is "Execute the Emperor" (as in 1. Variables). In-game, use "kill" or "silence" for co-conspirators and keep "executed" for punishment by the state.

## CA-66 · The doc area 'resources' vs the game's resources

**Docs:** [Resources](../resources.md), [Overview](../overview.md)

**In the notes:**

- *OneNote › Courses* — “Godot 4 Intermediate Card Game Course”
- *OneNote › 1. Variables* — “Execute the Emperor is a resource management game primarily”

**Why it matters:** The notebook section "Resources" holds learning links, while the game itself is about managing resources (gold, favour, access). A doc called "resources" could be mistaken for the in-game economy.

**Options:**

- Option A: Rename the doc area to "References" or "Learning resources", and keep "resources" for in-game economy terms.

## CA-67 · Board-game 'things unlocked as you go' vs the digital game's two kinds of unlocks

**Docs:** [Board game](../design/10-board-game.md), [Between runs](../design/09-between-runs.md)

**In the notes:**

- *Chat › Note 2* — “Things unlocked as you go”
- *OneNote › 3. Co-Conspirators* — “another co-conspirator may open up as an option”
- *OneNote › Between Runs* — “leading to a lasting permenant upgrade”

**Why it matters:** It's unclear whether board-game unlocks happen during one game (like the co-conspirator pool) or across sessions (legacy-style, like Between Runs).

**Options:**

- Option A: Unlocks happen during one game: pressure thresholds open up co-conspirators and Areas.
- Option B: Legacy-style unlocks that carry across sessions, matching Between Runs.

## CA-68 · 'Board game first' (Oct) vs a digital roguelite (Feb)

**Docs:** [Board game](../design/10-board-game.md), [Overview](../overview.md), [Stats and checks](../design/03-stats-and-checks.md)

**In the notes:**

- *Chat › Note 4* — “Defo designing as a board game first.”
- *Chat › Note 3* — “Almost think of it as a board game mayhaps”
- *Chat › Note 2* — “Board game idea:”
- *OneNote › Between Runs* — “book closes over the whole screen”
- *OneNote › The night of the murder* — “should be displayed on a screen with cards”
- *OneNote › Courses* — “Godot 4 Intermediate Card Game Course”
- *OneNote › 1. Variables* — “All variables, per either NPC or per globally, will be ranked out of 100”

**Why it matters:** The whole February design assumes a screen and a computer doing the work: a book-closing animation, screen displays, Godot courses, a 0–100 value for every NPC, hidden traits, lying NPCs, a pathfinding emperor and an autopilot Night. In October the user wants to design it as a board game first. Many February mechanics need bookkeeping that a computer handles well and a table doesn't. Each doc has to say whether it describes the board game, the digital game, or both, and it's unclear whether the board game is a prototype or a separate product.

**Options:**

- Option A: For now the board game is the master design. Each mechanic gets a board version (tokens, shorter tracks, decks) and a "digital later" note.
- Option B: Treat the board game as a paper prototype of the digital game: the same rules, simplified for testing, with the digital game still the product.
- Option C: Two products that share a theme and core ideas (Pressure, co-conspirators, intel), each with its own rules doc.

## CA-69 · First sprint without the murder vs 'stick to one assassination', and an undefined 'the 30 sec'

**Docs:** [Run structure](../design/01-run-structure.md), [Overview](../overview.md), [The assassination](../design/07-the-assassination.md), [Cards, events and pathing](../design/05-cards-events-and-pathing.md)

**In the notes:**

- *Chat › Note 3* — “I'm initially thinking we leave the  actual murder stage out for a bit and focus on the card building aspect, as like first sprint”
- *Chat › Note 4* — “Mechanics of actually killing the emperor can be thought of later”
- *Chat › Note 4* — “But I agree it's about the 30 sec first”
- *OneNote › 1.1 Pressure* — “Though for earlier drafts of the game we should stick to one assassination”
- *OneNote › The night of the murder* — “The biggest night, so needs good intel to be able to impart any gameplay mechanics”

**Why it matters:** In February the smallest version of the game is one full assassination. In October the first sprint leaves the murder out altogether. Without the Night, the earlier parts have nothing to pay off (intel, Area access, the Pressure-100 autopilot), and it's unclear what ends a sprint-1 session. "The 30 sec" isn't defined in the notes. It's presumably the 30-second core loop, picking up something from the design review the heading mentions.

**Options:**

- Option A: Sprint 1 is the card and co-conspirator loop with a stand-in ending (e.g., when Pressure crosses a threshold, score the plot as it stands), so there's still a goal.
- Option B: Sprint 1 includes a minimal kill check as a stub (e.g., Note 4's "two skills + roll"), which keeps 1.1's "one assassination".
- Option C: Define "the 30 sec" in the overview doc (e.g., draw → play cards into an event → stats and pressure change) as what sprint 1 has to prove.

## CA-70 · Doubts about the core premise ('not sure if the design works with the emperor killing bit') vs 'The Emperor is the objective'

**Docs:** [Overview](../overview.md), [The assassination](../design/07-the-assassination.md), [Run structure](../design/01-run-structure.md)

**In the notes:**

- *Chat › Note 3* — “Also not sure if the design works with the emperor killing bit.”
- *OneNote › 4. The Emperor* — “The Emperor is the objective of the game”
- *OneNote › 1. Variables* — “needed to kill the emperor without being suspected”
- *Chat › Note 4* — “maybe many win conditions or SMT idk”

**Why it matters:** The title and every February page assume the kill is the goal. In October the user questions whether it fits and floats "many win conditions". This affects the overview, what counts as a win (CA-45), and whether the assassination area is core or optional.

**Options:**

- Option A: Keep the kill as the main goal but add other ways to win (e.g., being crowned through politics, or forcing him to abdicate).
- Option B: Keep the kill as the only win and address the doubt by making it a short, abstract finale (see CA-60) rather than a separate mini-game.
- Option C: Record it as an open question for the user before the overview doc fixes the goal.

## CA-71 · Trust vs Suspicion: separate values or two ends of one scale?

**Docs:** [Stats and checks](../design/03-stats-and-checks.md), [The Emperor](../design/06-the-emperor.md), [Co-conspirators](../design/04-co-conspirators.md)

**In the notes:**

- *OneNote › Stats* — “Likeability / Gullibility / Trust / Suspicion”
- *OneNote › Stats* — “Likeability / Trust / Suspicion / Virtue”
- *OneNote › 1. Variables* — “Happiness / Suspicion / Gullibility”
- *OneNote › The night of the murder* — “based upon the emperors trust in you”

**Why it matters:** On 9 Feb, Trust and Suspicion are separate values for every audience. The 17 Feb co-conspirator list drops Trust, yet the Night page relies on the emperor's trust. Whether trust and suspicion are separate (an NPC could trust you and still suspect you) or two ends of one scale decides how many numbers each NPC carries.

**Options:**

- Option A: One scale per audience, Trust↔Suspicion, where high suspicion means low trust.
- Option B: Separate values: Trust (how much they rely on you) and Suspicion (whether they think you're plotting), in line with 17 Feb's "happy with you though also find you suspicious".

## CA-72 · Decisions always in tension vs a snowball that helps the player

**Docs:** [Overview](../overview.md), [Pressure](../design/02-pressure.md)

**In the notes:**

- *OneNote › 4. The Emperor* — “it should be rare for any decision to be immediately beneficial with no downsides”
- *OneNote › 4. The Emperor* — “In the early game this is to be expected, as most things will be of aid”
- *OneNote › 1.1 Pressure* — “it should make each run feel like a snowball, creating cascading consequences that help the player”
- *OneNote › 4. The Emperor* — “these rewards should be born out of the interactions with the game systems the player has already, not from a base 'This card is good'”

**Why it matters:** This isn't a hard contradiction. The early-game exception and the "snowball that helps" sit next to "rare to be beneficial with no downsides". The design principle should say when the tension kicks in (midgame?) and confirm that snowball benefits always come with pressure attached.

**Options:**

- Option A: State the principle as: "Early choices can be clear wins. From midgame on, every major choice trades your position against the plot. Snowball benefits always come from pressure, which is itself the downside."
