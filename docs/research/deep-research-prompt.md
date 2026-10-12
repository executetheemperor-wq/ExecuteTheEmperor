# Deep Research Prompt: Execute the Emperor

Paste everything below the line into a deep research chat (ChatGPT Deep Research, Claude Research, Gemini Deep Research, Perplexity, etc.).

**Used 2026-10-12.** What it returned is filed as [the dossier](2026-10-12-comparable-games.md), and v0.3 of the prototype has moved on from the brief below.

The Game Brief is filled in from the design docs on the `claude/busy-galileo-496ddn` branch as of 2026-10-12: decisions D1–D7, paper prototype v0.2, and the open questions list. Update it when a decision changes.

---

## Role

You are a senior game design researcher preparing a research dossier for the designer of **Execute the Emperor**, an early-stage tabletop game. Your job is to find games that are equivalent or adjacent to it, dig up their **design documents, postmortems and lessons learned**, and turn that into findings the designer can act on, plus a curated **resource pack** to work through.

## Game Brief

**Pitch.** "A deckbuilder about killing the Emperor of Rome, and getting away with it. Recruit co-conspirators, learn his weaknesses, set the scene like a chessboard, and beat the clock before the plot slips out of your hands."

**Format.** Board game first (decided). A resource-management deckbuilder with roguelite runs. It is not an action game: in the designer's words, "more deckbuilder/management than actual murder, so dice rolls, stats, cards". The original notes were written for a digital roguelite, and a digital version (Godot 4) may follow later.

**Setting.** Imperial Rome: the Senate, the Praetorian Guard, the Colosseum, the Ides. You are an ambitious Roman plotting to assassinate the Emperor without being suspected. The long-term goal is to kill enough Emperors that the crown ends up on your head.

**Stage.** Idea stage, with a first solo paper prototype (v0.2) written but not yet playtested. Indie project, no budget or timeline set.

**Decisions so far**

- **D1:** The murder stage is parked; the first sprint is the card layer only.
- **D2:** Design it as a board game first.
- **D3:** A tight ~30-second turn comes first.
- **D4:** The deck is built by **drafting co-conspirators**. Each brings a locked bundle of cards, good and bad (curses). You can't remove a single card, only the person.
- **D5:** A **market deckbuilder** turn (Dominion/Clank!-style) drives the game. An event-response loop and a worker-placement "places in Rome" loop may join later to flesh out the larger cycle.
- **D6:** **Pressure** is the pressure on you from your co-conspirators: the push to strike grows and they get jumpy. It's very sticky; it only comes down in about two ways.
- **D7:** The first prototype is board-game sized at most.

**Prototype v0.2 (solo, about 10 turns, 35 cards, one d6)**

- Tracks: Charm, Military and Political (0–10), and Pressure (0–20).
- Turn: optionally strike; otherwise play your whole hand for Money and Influence, recruit one co-conspirator from a 3-card market, then Pressure +1 (plus 1 per **Jumpy** co-conspirator) and draw 5.
- 8 co-conspirators, each with a cost, a stat bonus and 2 cards (usually one good, one that adds Pressure). Three stronger "Ambitious" ones enter the market when Pressure reaches 8.
- Pressure only comes down via a once-per-game Feast (pay 6 for −3) or one specific card. You can silence one co-conspirator per game, at +3 Pressure.
- The Emperor is one of three face-up weakness cards (*Creature of Habit*, *Partially Blind*, *Take My Wife, Please*). Each names two stats and a target.
- The strike: your two stats must reach the target, then a "nerve roll" on the d6 that gets harder as Pressure rises (2+ at low Pressure up to 5+ at 20), with +1 per point over the target. At Pressure 20 you must strike.

**The wider design (in the notes, not in the prototype)**

- **Phases:** a political phase (events, career, intel), a conspiracy phase (meetings in a "shadowy circle"), plotting (choose area, method and conspirators, then set an **area plan** like chess pieces: lock doors, place spies, bribe guards and steer the Emperor's route), and the night itself, where you are either present (learn more, risk suspicion) or rely on unreliable reports.
- **Co-conspirators:** happiness (they want you to play their cards, even bad ones), suspicion, gullibility (whether they think they can lie to you), clashing traits, blackmail in both directions, uninvited joiners at high Pressure, and the risk that someone rats you out. Killing one is possible, roughly once a run, at great cost.
- **Stats** on a 0–100 scale with d100 roll-under checks, Call of Cthulhu-style (digital notes).
- **The Emperor:** intel cards about his weaknesses decide which plans are possible. He tracks how much he notices you, plus his standing with the Senate and the public.
- **Politics:** career, honorifics, propaganda, and rival key figures climbing alongside you.
- **Between runs:** a failed plot turns out to be a story read to a young man. He picks 1 of 3 lessons, based on why the plot failed, which gives a permanent, capped upgrade (like Darkest Dungeon II's candles of hope).

**Design principles:** decisions in tension (from the midgame on, no big choice is purely good); rewards come from systems, not from strong cards; information is the real currency; a clock you can't stop; your allies are your problem; show the maths.

**Touchstones the designer named:** Slay the Spire (map pathing, card pools, curse cards, transparent results), Darkest Dungeon II (capped meta-upgrades), Call of Cthulhu RPG (d100 roll-under), Five Nights at Freddy's (the feel at max Pressure: the power's gone, hope you make 6am), and The Fate of the Fellowship (one last roll even once you reach the end).

**Prior art already found (go beyond these):** Donning the Purple; 44 BCE: A Game of Strategy and Betrayal; According to the Emperor, Nothing Happened; Throne of Lies: Medieval Politics; Dishonored 1 and 2; Blood on the Clocktower; SHUG.

**The designer's biggest open questions**

1. **The draft:** is drafting co-conspirators interesting? How do you make "you get the person and all their baggage" a real trade-off rather than a tax?
2. **Pressure:** does a one-way, sticky clock feel like a crew pushing you (a reason to strike, scary to wait), or just a timer?
3. **The sticky crew:** do bad cards you can't remove feel like a fun problem or a punishment?
4. **The turn:** is there enough to do? The prototype has you play your whole hand with no choices, against a ~30-second turn target. Where should card-play decisions come from?
5. **The kill:** how should it resolve? Candidates are a final check (two stats, then a nerve roll), several win conditions, a boss fight played with your built deck where the Emperor's intel cards are his moves, or the original chessboard set-up puzzle. How do you stop a whole run hinging on one dice roll, and avoid two stacked layers of luck (card draw plus dice)?
6. **Intel:** how does the player learn about the Emperor in a way that's a game, not a lookup?
7. **Player count:** solo, competitive (rival conspirators), co-op, or hidden traitor?
8. **Meta-progression:** how do roguelite progression and "kill several Emperors to be crowned" translate to a board game?

The full design docs are public at <https://github.com/executetheemperor-wq/ExecuteTheEmperor/tree/claude/busy-galileo-496ddn/docs> if your tool can browse them, but this brief is meant to stand on its own.

## Research Scope

### 1. Find the comparable games

Identify 15–25 comparable games across the lenses below. A game can sit under several lenses. Prefer games with a **documented design history** over games that only look similar. The examples are starting points, not a required list: add better fits and drop weak ones.

- **Acquisitions that bring baggage:** deckbuilders where gaining something adds hard-to-remove negative cards (e.g. Dominion's Curses, Heat: Pedal to the Metal's heat cards, Imperium: Classics/Legends' unrest, Mage Knight's wounds, Slay the Spire's curses and status cards, Clank!).
- **Recruiting characters who bring their own cards:** e.g. Griftlands, Dune: Imperium (and Uprising), Tyrants of the Underdark, Aeon's End, Monster Train, Star Realms / Hero Realms factions.
- **One-way clocks and push-your-luck:** e.g. Clank!'s dragon bag, Invisible, Inc.'s alarm level, Blades in the Dark's heat, stress and clocks, Darkest Dungeon's stress, Pandemic and The Fate of the Fellowship, Spirit Island's fear and blight, Quacks of Quedlinburg, Hostage Negotiator, Five Nights at Freddy's.
- **Plots and assassination as systems:** e.g. Crusader Kings II/III murder schemes (agents, secrecy, discovery), Hitman's target routines, intel and mission stories, Dishonored's Lady Boyle's Last Party (identifying a target at a masked party), Republic of Rome's assassination rules, Burgle Bros' guard patrols (for the parked chessboard area plan).
- **Court politics, loyalty and betrayal at the table:** e.g. Donning the Purple, 44 BCE, Republic of Rome, Pax Pamir, Coup, Blood on the Clocktower, Secret Hitler, Battlestar Galactica. These matter most for the player-count question.
- **Roguelite structure and framing:** e.g. Slay the Spire, and Slay the Spire: The Board Game for how a digital roguelite deckbuilder was adapted to cardboard; Darkest Dungeon II; Rogue Legacy (heirs); Hades; Inscryption; Cultist Simulator (successors); Wildermyth (a run told as a story); legacy and campaign board games such as Gloomhaven and Pandemic Legacy.
- **Final confrontations:** how deckbuilders and co-op games stage the climax (e.g. Slay the Spire's bosses, Aeon's End's nemeses, Marvel Champions' villain decks, The Fate of the Fellowship's final roll, Hostage Negotiator's conclusion).

For each game, write a short rationale naming **which part of Execute the Emperor it informs** (draft, Pressure, sticky crew, the turn, the kill, intel, meta-progression or player count) and why. Rate relevance High / Medium / Low.

### 2. Dig up the design history (primary emphasis)

For each High-relevance game (aim for 10–14), find as many of these as exist:

- **Design documents:** pitch docs, GDDs, design bibles, rulebook drafts, prototype photos and card lists, early-access roadmaps. Prioritise publicly released originals (developer sites, archive.org, Kickstarter updates, book appendices).
- **Postmortems:** Game Developer (formerly Gamasutra) postmortems, GDC talks (GDC Vault, including the free sections), "what went right / what went wrong" articles, developer blogs.
- **Designer diaries and iteration records:** BoardGameGeek designer diaries, Paradox dev diaries, studio forum posts, early-access patch notes that show a design changing, playtest reports.
- **Developer commentary:** podcast and video interviews, documentaries (e.g. Noclip), long-form press interviews, AMAs.
- **Critical and academic analysis:** DiGRA and FDG papers, game studies books, design-analysis essays and video essays (name the author).

Leads worth checking (verify each one, and don't assume it exists):

- Mega Crit's GDC talk on Slay the Spire's metrics-driven design and balance, and their writing on curses and card design.
- Donald X. Vaccarino's "Secret History" posts for Dominion and its expansions on BoardGameGeek.
- BoardGameGeek designer diaries for Heat, Clank!, Dune: Imperium, Imperium, Hostage Negotiator, Donning the Purple, 44 BCE, Burgle Bros and The Fate of the Fellowship.
- Klei's blogs and forum posts on Invisible, Inc. and on Griftlands' reworks during early access.
- Red Hook Studios' talks and interviews on Darkest Dungeon's stress and affliction system, and what changed in Darkest Dungeon II.
- Paradox dev diaries on Crusader Kings III's schemes and its later scheme rework.
- IO Interactive's talks on Hitman's targets, opportunities and AI routines; Arkane's talks on Dishonored's mission design.
- John Harper's writing on Blades in the Dark (heat, clocks, flashbacks as a fix for over-planning).
- Weather Factory's blog on Cultist Simulator.
- Designer diaries or interviews on Slay the Spire: The Board Game (what was cut or changed going from screen to table).

For each game, summarise:

1. **Original intent:** what the designers set out to make, as the earliest documents describe it.
2. **What changed and why:** cut features, pivots, systems reworked after playtesting. Quote the source where possible.
3. **Stated lessons learned:** in the designers' own words, with citation.
4. **Problems they never solved:** criticisms the designers acknowledged, or that persisted.
5. **The lesson for Execute the Emperor:** one or two sentences, tied to a numbered open question above.

### 3. Cross-cutting design themes

Synthesise across all the games. For each theme, give the recurring lessons, patterns that worked, anti-patterns, and the games that show each:

- **Acquisitions with baggage:** how games make "take the good with the bad" a decision, not a tax.
- **Sticky negative cards:** what keeps deck clog fun rather than punishing (synergies with bad cards, costly removal, conversion, playing around them).
- **One-way clocks:** making a mostly irreversible track feel like tension and temptation rather than a countdown. How do clocks that also reward you (better recruits as Pressure rises) work in practice?
- **Where decisions live in a deckbuilder turn:** play-everything turns vs. choosing what to play, decisions at purchase vs. at play, and how fast-turn deckbuilders hit a ~30-second turn.
- **The randomness budget:** input vs. output randomness, stacking card draw with dice, and how designers keep a final roll dramatic without a whole run feeling decided by luck.
- **The single decisive target:** making one climactic kill feel earned and replayable.
- **Intel and hidden information about a target:** deduction, scouting and revealing weaknesses as play rather than lookup.
- **Crew loyalty, betrayal and unreliable information:** modelling allies who can lie, defect or rat you out without drowning players in bookkeeping.
- **Solo first, multiplayer later:** what solo-first designs had to change when adding players, and whether rivals or hidden traitors suit this theme.
- **Roguelite progression on the table:** unlocks, legacy, campaigns and framing devices for failed runs.
- **Theme and tone:** how games about assassination, conspiracy and tyranny handle their subject without preaching or trivialising it.
- **Scope:** paper-prototyping a digital design, cutting systems to find the core loop, and moving between digital and tabletop in either direction.

### 4. Setting research (secondary)

Mine Roman history for material: co-conspirator archetypes, Emperor weakness cards, intel, events and methods. Examples to start from: Caligula's murder by Praetorian officers (41 AD), the palace plot against Domitian (96), Commodus (poisoned, then strangled by his wrestling partner, 192), Aurelian (killed after a secretary forged a death list, 275), the Years of the Four and of the Five Emperors (69, 193) as a model for "kill enough Emperors to be crowned", and the Praetorian Guard as kingmakers.

Prefer free primary sources (Suetonius, Tacitus, Cassius Dio, Herodian, the Historia Augusta, e.g. on LacusCurtius) and note their reliability. Suggest a concrete game hook for each.

### 5. Implications for Execute the Emperor

- The **top 10 actionable recommendations**, each tied to evidence above and to one of the eight open questions.
- **Five risks** the comparable games suggest the design is likely to hit, with early warning signs and mitigations. Consider the ones already noted: too many systems before a core loop, a turn with no real decisions, two layers of luck, and the murder stage feeling like a separate game bolted on.
- **Three to five paper-prototype experiments**, each runnable in a week or less as a change to prototype v0.2, to test the open questions.
- **Open questions** the research could not answer.

## Resource Pack (required deliverable)

End with a curated resource pack, as tables grouped into tiers:

- **Tier 1: Start here** (8–12 items, the highest-value primary sources)
- **Tier 2: Go deeper** (10–20 items)
- **Tier 3: Reference and rabbit holes** (anything else worth bookmarking)

| Title | Game(s) | Type | Primary / Secondary | Link | Informs (open question #) | What to look for | Time to consume |
|---|---|---|---|---|---|---|---|

- **Type** is one of: Design doc, Postmortem, GDC talk, Designer diary, Dev diary, Interview / podcast, Documentary, Book, Paper, Video essay, Rulebook, Playable.
- **What to look for** names the specific section, timestamp, page or question to bring to it.

Also include:

- **Play list:** 6–10 games, or specific scenarios or levels, to actually play for study. Favour ones that are cheap or quick to try at the table or on PC. Say what to watch for in each, the approximate hours, and which open question it informs.
- **Board game design craft:** the best books, podcasts and articles on deckbuilder design, solo design, push-your-luck, and paper prototyping for a first-time designer.
- **People to follow:** designers, writers and researchers whose ongoing work is relevant, and where they publish.
- **Leads to chase:** documents or talks you believe exist but couldn't find, with where they might be.

## Source Rules

- **Cite everything.** Every claim about a game's design history needs a link. Use direct quotes for designer statements.
- **Prefer primary sources** (the designers' own documents, talks and writing) over secondary summaries, and label which is which.
- **Never invent documents, quotes, talks or URLs.** If you think something exists but can't find it, put it under "Leads to chase".
- If a link is dead, give an archive.org (Wayback Machine) link, or flag it as dead.
- Date each source, and flag lessons that may be outdated.
- Flag paywalled sources (e.g. parts of GDC Vault, books) and suggest free alternatives where they exist.
- When sources disagree, present both views.

## Output Structure

1. Executive summary (one page max: the five things the designer most needs to know)
2. Comparable games matrix (game, lens, format, year, designer or studio, relevance, which open questions it informs)
3. Game deep dives (High-relevance games, using the five-part summary)
4. Cross-cutting design themes
5. Setting research
6. Implications for Execute the Emperor
7. Resource pack (tiers, play list, design craft, people to follow, leads to chase)
