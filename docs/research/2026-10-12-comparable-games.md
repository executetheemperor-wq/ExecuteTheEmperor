> **Filed 2026-10-12.** The dossier a deep-research tool returned for the
> [research prompt](deep-research-prompt.md), as delivered. It's research,
> not your words and not a decision. What it changed is in the design docs
> (each has a **From the research** section), the
> [design philosophy](../design-philosophy.md) and
> [prototype v0.3](../prototype/rules.md).
>
> - **"Q1"–"Q8"** are the eight questions in the
>   [research prompt](deep-research-prompt.md#game-brief): Q1 the draft,
>   Q2 Pressure, Q3 the sticky crew, Q4 the turn, Q5 the kill, Q6 intel,
>   Q7 player count, Q8 meta-progression. They aren't the numbers in
>   [open questions](../open-questions.md).
> - **"v0.2"** is the paper prototype as it stood when the prompt was
>   written. It's in the git history.
> - **Quotes, dates and links haven't been checked here.** A few look off:
>   for example, the Fellowship diary's link is dated February 2025 but the
>   text says it was posted in June. Check a source before quoting it.
>
> Everything below the line is the dossier unedited.

---

# Execute the Emperor: Comparable Games, Design Histories and a Resource Pack

The core loop is worth building, but v0.2 doesn't have it yet. The closest comparable games show three things to fix before you add any more systems. Bad cards have to be usable rather than just carried. The turn needs a small choice about what to play on every card. And the kill should be one final roll that the player has spent the whole run tilting in their favour, not a coin-flip at the end.

## TL;DR

- **Fix the turn and the curses before anything else.** Heat: Pedal to the Metal and Dune: Imperium show that "bad" cards and quick turns work when every card has two uses. In Heat, overheating cards are also the fuel you spend. Dune splits each card into an "Agent" half and a "Reveal" half. Play-everything with no choices, as in v0.2, is the main thing holding the prototype back.
- **Pressure should behave like a ratchet with visible steps, and you should be able to spend it.** Klei cut Invisible, Inc.'s alarm from 20 unclear steps to 6 levels with 5 sub-steps each, so players could see when the next consequence would land. Blades in the Dark and Heat turn their clocks into a currency you choose to spend. Together, those two moves turn a timer into temptation.
- **Keep the final roll, but let the run feed into it.** Matt Leacock kept a final die roll on Mount Doom in The Fate of the Fellowship "while also giving the players multiple ways to mitigate its outcome." Paradox reworked Crusader Kings III's schemes because the old system was "too random" and "very… binary". Put both lessons into the strike: few, legible, purchasable modifiers on a single roll, and a failure that escalates instead of ending the run outright.

---

## 1. Executive summary: the five things you most need to know

1. **The prototype has no turn decisions, and the fix is cheap.** The best fast-turn hybrids put a small choice on every card. Dune: Imperium's first designer diary explains that each card has an Agent section and a Reveal section: "your cards allow you to place your workers".\[1\] Players also take "bite-sized turns in alternation" instead of playing their whole hand.\[1\] Give every v0.2 card a top half (an action) and a bottom half (Money/Influence), and let the player choose which cards to use for their action. You keep the ~30-second turn and gain a real decision (Q4).

2. **Curses are fun when they are also a resource.** Heat's designers say their "design dogma… isn't about thinning your deck; it is about managing it as the same cards cycle past your hand again and again."\[2\]\[3\] Heat cards are both the cost of pushing hard and the clog in your hand. The rulebook says they "can never be discarded or played from your hand", yet a cooldown action moves them back.\[3\]\[4\]\[5\] Dominion's Donald X. Vaccarino says green victory cards clogging the deck was "nice" but not the reason he did it.\[6\] Give every co-conspirator's bad card a situational use, often a Pressure-for-power trade. Then "the person and all their baggage" becomes a bet rather than a tax (Q1, Q3).

3. **Make Pressure a ratchet with readable steps and real temptation.** Klei found that 20 alarm levels made it "unclear when the next alarm level would actually become a problem". They switched to 6 levels of 5 sub-levels, each with a concrete consequence ("at alarm level 3, another patrol enters the building").\[7\] Your Ambitious recruits arriving at Pressure 8 already follow the right pattern of "the clock pays you". Extend it with a few named thresholds and one way to spend Pressure, the way Blades in the Dark spends Stress on flashbacks (Q2).\[8\]

4. **The final roll is defensible, as long as it's the only dice luck that matters and the player can steer it.** Leacock "required a roll in most cases, while also giving the players multiple ways to mitigate its outcome". Frodo resists better with less despair, which is structurally identical to your nerve roll plus Pressure.\[9\] CK3's 2024 scheme rework shows the opposite problem: success was "binary", either nearly certain or not worth trying. Paradox fixed it with a small, hand-picked crew (about 5 agents) whose roles shift speed, secrecy or success.\[10\] Your co-conspirators can be exactly those roles at the strike (Q5).

5. **Prototype solo, then co-op, and add hidden traitors last.** Dune: Imperium was first tested at 3–4 players, and its solo and 2-player modes needed an automated rival.\[11\] Heat's designers had to redesign their bots because "players didn't understand how to run them."\[2\] A solo deck-builder with rival AI conspirators is a big separate design job. Prove the solo loop first, and treat rival conspirators as a later layer (Q7).

---

## 2. Comparable games matrix

Relevance ratings are my judgement. "Sourced" means this dossier includes primary design-history material for the game. Unsourced games are included for their mechanics only, with leads listed in Section 7.

| Game | Lens(es) | Format | Year | Designer / studio | Relevance | Informs Q# | Why it matters for Execute the Emperor |
|---|---|---|---|---|---|---|---|
| Slay the Spire (and The Board Game) | Roguelite, baggage (curses), final confrontations | Digital → tabletop | 2019 / 2024 | Mega Crit (Giovannetti, Yano); board game by Gary Dworetsky (Contention Games)\[12\] | High (sourced) | 3, 5, 8 | Your main touchstone. It shows how curses, telegraphed enemy intents, Ascension caps and screen-to-table number scaling work |
| Dominion | Baggage (Curses, green VP clog) | Tabletop | 2008 | Donald X. Vaccarino | High (sourced) | 1, 3, 4 | The original market deckbuilder turn (D5); deck clog that comes with progress |
| Heat: Pedal to the Metal | Baggage, clocks, push-your-luck | Tabletop | 2022 | Asger Harding Granerud & Daniel Skjold Pedersen\[13\] | High (sourced) | 2, 3, 4, 7 | Negative cards that are also fuel; fast turns; bots for solo |
| Clank! (and Catacombs) | Clocks, push-your-luck, market | Tabletop | 2016 / 2022 | Paul Dennen / Dire Wolf\[14\]\[15\] | High (sourced) | 2, 4 | A shared, growing risk bag driven by the market; greed as the engine |
| Dune: Imperium (and Uprising) | Recruiting, turn structure, politics | Tabletop | 2020 | Paul Dennen / Dire Wolf | High (sourced) | 4, 5, 7 | Agent/Reveal split turn; how worker placement joins a deckbuilder (your planned "places in Rome" loop); automa |
| Griftlands | Recruiting, baggage (status cards), politics | Digital | 2020 EA / 2021 | Klei | High (sourced) | 1, 3, 6 | Social choices inject status cards ("Tipsy") into your deck; reworked during early access |
| Invisible, Inc. | One-way clock | Digital | 2015 | Klei | High (sourced) | 2 | The best-documented alarm-track iteration |
| Darkest Dungeon / II | Clocks (stress), crew loyalty, meta | Digital | 2016 / 2023 | Red Hook Studios | High (sourced) | 2, 3, 8 | Stress as "the human response to pressure"; candles of hope (your named touchstone) |
| Crusader Kings III (schemes) | Plots and assassination | Digital | 2020; rework 2024 | Paradox | High (sourced) | 1, 5, 6 | A murder system reworked because it was "too random" and "binary" |
| The Fate of the Fellowship | Final confrontation, clocks | Tabletop | 2025 | Matt Leacock / Z-Man | High (sourced) | 2, 5 | A final roll with mitigations; objectives as act breaks |
| Hostage Negotiator (+ Career) | Solo, single target, meta | Tabletop | 2015 / 2020 | A. J. Porfirio / Van Ryder | High (sourced) | 4, 5, 8 | A solo 15–30-minute card-and-dice game against one antagonist; a 10-year campaign framing\[16\] |
| Burgle Bros (1 & 2) | Plots, patrols, intel | Tabletop | 2015 / 2021 | Tim Fowers | High (sourced) | 6, 5 | Peek-or-run information economy; patrol decks (your parked chessboard) |
| Blades in the Dark | Clocks, heat, stress, planning | TTRPG | 2017 | John Harper / Evil Hat | High (sourced) | 2, 5, 6 | Flashbacks replace up-front planning, and Stress is spent to create them |
| Cultist Simulator | Roguelite framing, intel-as-play, scope | Digital | 2018 | Weather Factory (Alexis Kennedy, Lottie Bevan) | High (sourced) | 6, 8 | "Understanding the game was itself the game"; cutting ruthlessly to ship |
| Donning the Purple | Roman court politics | Tabletop | 2018 | Petter Schanke Olsen / Tompet Games | Medium | 7 | Already on your list. Set in 193 AD, 1–3 players, "king of the hill"; you are the throne's target\[17\] |
| Mage Knight | Baggage (wounds) | Tabletop | 2011 | Vlaada Chvátil | Medium | 3 | Wounds clog the hand and need a cost to heal. A solo-friendly reference |
| Aeon's End | Final confrontation, turn | Tabletop | 2016 | Kevin Riley / Indie Boards & Cards | Medium | 4, 5 | Nemesis decks as a "boss with moves"; turn order you can see coming |
| Marvel Champions | Final confrontation | Tabletop LCG | 2019 | Fantasy Flight | Medium | 5 | The villain deck as the boss's moves (your "boss fight" candidate) |
| Monster Train | Recruiting, roguelite | Digital | 2020 | Shiny Shoe | Medium | 1, 8 | Two-clan pairing: you draft a whole faction's pool, not single cards |
| Quacks of Quedlinburg | Push-your-luck | Tabletop | 2018 | Wolfgang Warsch | Medium | 2 | A bag you can bust, with catch-up for players who bust |
| Spirit Island | Clocks (fear/blight) | Tabletop | 2017 | R. Eric Reuss | Medium | 2 | Two opposing tracks, one of them a reward |
| Hitman (2016 trilogy) | Single target, intel | Digital | 2016– | IO Interactive | Medium | 5, 6 | Target routines and "opportunities" are the model for your chessboard set-up |
| Dishonored (Lady Boyle's Last Party) | Single target, intel | Digital | 2012 | Arkane | Medium | 6 | Identifying the target at a masked party is deduction rather than lookup |
| Blood on the Clocktower / Secret Hitler / Battlestar Galactica | Betrayal | Tabletop | 2008–2022 | Various | Low–Medium | 7 | Reference points for a hidden-traitor mode later on |
| Republic of Rome / 44 BCE / Pax Pamir | Court politics | Tabletop | 1990–2019 | Various | Low | 7 | Theme and assassination-rule references; too heavy for the core loop |

---

## 3. Game deep dives (High relevance)

### 3.1 Slay the Spire and Slay the Spire: The Board Game

- **Original intent.** Anthony Giovannetti's GDC 2019 slides describe the game as "Rogue-like meets Deck-builder", built over 2.5 years of development including 1 year of Early Access.\[18\] In the Think Like A Game Designer podcast (#59), he summarises the pillar: "The core design of Slay the Spire is risk versus reward."\[19\]
- **What changed and why.** The talk (GDC Vault, free; also on YouTube, posted June 26, 2019) describes a metrics-driven, iterative process: "Iterate, Iterate, Iterate".\[18\]\[20\] The two developers worked through "18,168 pieces of feedback" using a beta branch, streamers and run data.\[18\] Podwise's chapter index lists a section at 27:52 on "Predictable Enemy Attack Patterns: A Design Evolution".\[21\] That section matters directly to your "Emperor intel as boss moves" idea.
- **Stated lessons.** The balance goal on the slides is "**Every** card should have a place! (also avoid anything too warping)". The 20 Ascension levels, "Unlocked Sequentially", are presented as their tool for sorting players by skill.\[18\]
- **Screen to table.** Dan Thurot's Space-Biff review (June 11, 2024; secondary) says Dworetsky reduced "the original game's integers by one or two orders of magnitude… The Ironclad begins with 10 hit points rather than 80".\[22\] The review praises the board game as co-op but questions its solo value, given "a four- or five-hour session" against a "full-auto digital run".\[22\] For primary commentary, the Nerdlab Podcast episode 090 (July 20, 2021) has Dworetsky on the adaptation.\[23\]
- **Unsolved.** Thurot's verdict that the board game "rises or falls based on its multiplayer"\[22\] suggests that bookkeeping the computer used to handle becomes a solo tax at the table.
- **Lesson for you (Q5, Q8, Q6).** Telegraph the Emperor's "moves" the way StS telegraphs intents. Cap meta-upgrades like Ascension. And when you go digital later, the numbers can grow. On paper, keep them in single digits, as Dworetsky did.

### 3.2 Dominion

- **Original intent.** Vaccarino's "Secret History of Dominion" (BGG; quoted by Scent of a Gamer, Jan 2016): "everything would be in the deck. Resources, actions, victory points, all in the deck… Obviously having victory points in your deck meant that your deck would get worse as you got points, and that was nice, but I didn't do it because of that, I did it just for the aesthetic joy."\[6\] Opinionated Gamers (Dec 2015; secondary) adds that the first prototype was "black-and-white, printed on colored paper" and dates the origin to a weekend in October 2006.\[24\]
- **What changed.** Each expansion has its own Secret History thread (Vaccarino's BGG designer page links them all, through Rising Sun, 2024).\[25\] Tabletop Game Icons notes that Vaccarino "has been unusually open about mistakes, weak cards, overpowered cards, and second-edition replacements."\[26\]
- **Lesson for you (Q1, Q3).** The best "baggage" grows out of success, the way points clog the deck. Your Pressure cards should arrive because you recruited someone powerful, not as a random tax. Read the Secret Histories for Dark Ages (Ruins, Shelters) and Cornucopia/Hinterlands on junk-giving attacks; that's a reading lead, not verified here.

### 3.3 Heat: Pedal to the Metal

- **Original intent.** The BGG News designer diary "From Zero to Six Players" (Nov 2022) says the prototype "just had something about it since the very first tests in the summer of 2018."\[3\] The core: "the fundamental design dogma… isn't about thinning your deck; it is about managing it as the same cards cycle past your hand again and again, with your engine overheating and cooling down."\[2\]\[3\]
- **What changed and why.** On gears: "We wanted a solution that slowed down players but also allowed for creative play and ways to sometimes break out of those restrictions." On bots: "In theory that bot design should work fine, but since players didn't understand how to run them, we had to come up with a better solution."\[2\] Bots belong to the advanced rules "as we want new players to think only about learning to drive their race car."\[3\]
- **Stated lessons.** "The trouble with Heat cards is that spending them isn't a freebie."\[3\] The rulebook says they "can never be discarded or played from your hand", but cooldown returns them to the engine. It also has a "Cluttered Hand" rule for the case where "you can get stuck with so many Heat cards in your hand that you don't have enough playable cards."\[4\]\[5\]
- **Unsolved.** A cluttered hand is a known failure state that the rules have to patch. That is your Q3 risk in miniature.
- **Lesson for you (Q2, Q3).** Make your Pressure cards dual-use. Paying for a strong effect should *put* a Pressure card in your deck, and a low-tempo turn (a "Feast-lite") should let you cycle one out. Write a "Cluttered Hand" rule before playtesters ever need one.

### 3.4 Clank! and Clank! Catacombs

- **Original intent and changes.** In the Catacombs design diary (Dire Wolf, 2022), Paul Dennen says exploration "disrupted one of the basic principles of the game", namely that you can see early which artifact you're aiming for. His fix was to make players "choose how greedy you want to be."\[27\] The Underworld diary shows how he couples risk to the market: "removing cards from the dungeon row may cause the dragon to attack!"\[28\]
- **Lesson for you (Q2, Q4).** Tie Pressure triggers to market actions. Recruiting certain people could make the "plot leaks" check fire, so that buying is itself a push-your-luck decision.

### 3.5 Dune: Imperium

- **Original intent.** Designer Diary 1 (Sep 23, 2020): "The earliest version of the game was more of a pure deck-builder… It was a good game… Good wasn't good enough." The fix: "your cards allow you to place your workers."\[1\]
- **What changed.** It departed from play-your-whole-hand: "all players draw their hands at the same time and players take bite-sized turns in alternation." Gaining extra Agents "tones down the potentially snowballing power" that usually comes with an extra worker.\[1\]
- **Solo.** Designer Diary 4: "The first versions of the game were tested at 3 or 4 players". Lower counts lose worker-placement tension, so "the solution… use automated opponents" (House Hagal, which "does not participate in deck-building").\[11\]
- **Lesson for you (Q4, Q7).** The Agent/Reveal split is your turn fix, and it's also how the "places in Rome" loop (D5) should attach later. Don't build rival-conspirator AI until the solo loop works.

### 3.6 Griftlands

- **Original intent and changes.** Klei's Marc Forbes, quoted by Uppercut Crit (2020; secondary): "The game used to be a lot more traditional… With the addition of deck-building, most of that ended up being superfluous, and was removed." Social choices put cards in your deck: refusing a drink makes a harder negotiation, but drinking "will insert Tipsy status cards into your combat deck… if you show up to the boss fight with a deck full of tipsy you might regret it!"\[29\]
- **Iteration record.** Klei's patch notes (update 445338) admit a structural problem: "a good combo deck is dependent upon drafting and drawing two cards (a generator and a finisher)." Their fix gave combo cards "a passive use".\[30\]
- **Lesson for you (Q1, Q3).** Griftlands is the best digital model for "allies inject baggage". Where curses enter your deck from conversations rather than random events, players read them as consequences rather than punishment. Avoid two-card combos between co-conspirators that rely on drawing both together.

### 3.7 Invisible, Inc.

- **Original intent.** James Lantz's Game Developer deep dive: "Our vision of Invisible, Inc has always been a tight game about tough decisions. In Invisible, there is no decision or action without consequence."\[7\]\[31\]
- **What changed and why.** The first alarm "satisfied our core design goals… but it failed on multiple experiential levels… 20 levels of alarm made it unclear when the next alarm level would actually become a problem." The fix: "6 levels and gave each level 5 sub-levels that had no effect", so tooltips could warn about the next level. Each threshold has a concrete consequence ("at alarm level 2, all the firewalls in the building are raised by one. At alarm level 3, another patrol enters the building").\[7\]
- **Iteration record.** An August 2014 Klei forum bug report: bribing a guard *lowered* the alarm from 3 to 2, so "another guard spawned when the level went back up to 3." A Klei developer replied: "Agreed, that is indeed pretty bad."\[32\]
- **Unsolved.** A ResetEra retrospective thread (secondary) says the alarm "inspires such a negative gut reaction from some people" and contributed to the game's low profile.\[31\]
- **Lesson for you (Q2).** Group Pressure 0–20 into about 4–5 named bands, each with one consequence. Make sure your Feast (−3) can't drag you back below a threshold and re-trigger it, which is exactly Klei's bug.

### 3.8 Darkest Dungeon and Darkest Dungeon II

- **Original intent.** From the Game Developer deep dive by Tyler Sigman and Chris Bourassa: "We wanted to capture the human response to stress. Any person can break under pressure, and people break in different ways."\[33\]
- **What changed.** In his GDC 2016 "Darkest Dungeon: A Design Postmortem" (free on archive.org), Sigman said "the inspiration for the Affliction system was not games, really. It was more human experience" (reported by PC Gamer). He cited Band of Brothers' Buck Compton and Aliens' Hudson. PC Gamer reports that stress and affliction "didn't change much during Darkest Dungeon's year in Early Access."\[34\]\[35\]
- **Stated lessons and the unsolved problem.** "That was sometimes a hard balance to tread… because ultimately there is this stuff that's taking control away from you."\[34\] In a later interview with SUPERJUMP: "Darkest Dungeon wouldn't work if we softened the edges." Sigman adds that the second game is "a little more for friends shouldering the burden".\[36\]
- **Lesson for you (Q2, Q3).** "Jumpy" co-conspirators are your Afflictions. Keep them few, visible and dramatic, and make clear when the game is taking control away. Players accept that loss of control when it reads as character, not bookkeeping.

### 3.9 Crusader Kings III: schemes

- **Original intent.** Dev Diary #5 (pre-launch): "we wanted a system that was slightly easier to predict while keeping it unreliable in its outcome, so that murder remains an… option, rather than a safe bet."\[37\]
- **What changed and why.** Dev Diary #157 (Wokeg, Sep 16, 2024): "we felt the old scheme system was a bit too random… more of a catapult than a crossbow… it was very… binary." The changes: agents cut to "a general max of around 5", each with an agent type that boosts speed, secrecy or success. Scheme potential has "a base of only 30%, so you can't do schemes by yourself reliably." Agent events hand out "punishments for doing things like putting two nemeses in the same plot."\[10\]
- **Cut features.** "We initially trialled adding agents randomly over time from event options… but this proved frustrating and micro-intensive." Adding agents to every scheme "proved very unfit for purpose during play-testing", which led to simple "basic schemes".\[10\]\[38\]
- **Lesson for you (Q1, Q5).** This is almost a spec for your strike. Each co-conspirator gets one role at the kill (Speed: strike earlier; Secrecy: suspicion afterwards; Success: nerve modifier). Clashing pairs get a penalty. Make the base odds bad without the crew.

### 3.10 The Lord of the Rings: Fate of the Fellowship

- **Original intent.** Leacock's design diary (posted June 18, 2025) frames it as a "war game for non-wargamers", grown from Fall of Rome. He began with a "simplest possible experiment… I get the best results if I quickly try something simple and build out from there."\[9\]
- **What changed and why.** The Ring-meld puzzle "felt like the players were playing the game only to bide the time… It felt grindy. It felt like work." Objective cards fixed it: "Before I added objectives, the players' experience was one long, slow, slip into a pit of despair, resolving all at once only at the very end… Completing an objective felt like an act break."\[9\] He cut character combat, wounds and zones of control "to increase player agency, minimize frustration, simplify the game".\[9\]
- **The final roll.** "It was important to me that there was some uncertainty regarding The Ring's final destruction at Mount Doom… I was able to resolve these forces by requiring a roll in most cases, while also giving the players multiple ways to mitigate its outcome." Frodo "is better able to resist if he's suffering from less despair."\[9\]
- **Lesson for you (Q2, Q5).** Your nerve roll is already Mount Doom. Add Fellowship's "act breaks": mid-run objectives (an intel coup, a bribed guard) that pause the slide and put modifiers on the final roll.

### 3.11 Hostage Negotiator (and Career)

- **Design.** Per its BGG page, the game uses a "hand-building mechanism that puts cards you purchase directly in your hand for next turn rather than leaving you wondering when the cards will show up like in deck-building games." It was crowdfunded on Kickstarter (1,188 backers, $47,092 against a $5,000 goal).\[39\]\[40\]
- **Lessons.** A. J. Porfirio, to Meeple Mountain: "It is a fast-playing, very thematic, and – most of all – fun game. I've learned that those things trump old assumptions about things like player count."\[41\]
- **Meta.** Career (2020) has you "play ten years in the life of a negotiator — that is, if you don't retire in shame sooner", with a narrative career card each year.\[42\]
- **Lesson for you (Q4, Q8).** It proves that a 15–30-minute solo game against one named antagonist sells. Career is a ready-made table model for "kill enough Emperors": a fixed span of years, a career event each year, and early retirement as the fail state.

### 3.12 Burgle Bros (1 and 2)

- **Lessons.** Tim Fowers (Don't Eat the Meeples interview, c. 2021) explains why the sequel cut a floor: "Burgle (Bros) 1 can overstay its welcome with three." On the original's events: "it's optimal for you to stay down the bottom floor", which is a degenerate wait strategy. "People actually project themselves onto the guard." "A big part of Burgle is this unknown of whether to run or to peek."\[43\]\[44\] Shut Up & Sit Down: "your knowledge of the building can only improve – your grasp of what the guards are up to is bumpy and erratic."\[45\]
- **Lesson for you (Q6, Q2).** "Peek or run" is your intel loop: spend a turn to learn, or act now. And check that waiting is never optimal. Your sticky Pressure already helps here.

### 3.13 Blades in the Dark

- **Design intent.** From the publisher's itch.io page: "A lightning-fast mechanic for planning criminal operations to cut through the usual slog of planning at the game table." Players skip planning and use flashbacks, paying Stress to have "already" bribed the guard. One reviewer (secondary, Goodreads) sums it up: "Rather than tediously planning a heist, players spend Stress to create flashbacks."\[8\]\[46\]
- **Disagreement.** An Aggregate Cognizance essay (secondary) responding to the Dead Letters podcast reports the hosts' "strongest single objection": that Blades "skips the planning phase that defines heist fiction." The author defends flashbacks as "off-screen competence".\[47\]
- **Lesson for you (Q5, Q6).** If the chessboard area plan returns, try flashback-style plan cards. You don't place pieces in advance; during the strike you pay Pressure or Influence to reveal "I bribed this guard." That keeps planning fun without front-loading a puzzle.

### 3.14 Cultist Simulator

- **Original intent.** Alexis Kennedy, "State of the Factory: Year 1": "we wanted to make a game where understanding the game was itself the game." On scope: "If we were going to fail, we wanted to fail fast and learn. So we set a hard deadline… cut ruthlessly."\[48\]
- **What changed.** The Game Developer retrospective says the final month, planned for extra Legacies, went instead on Kennedy having "to go through the text to add clues."\[49\]
- **Lesson for you (Q6, Q8).** Opaque discovery is a great hook but costly. Even its creators had to retrofit clues. Your "show the maths" principle is the right counterweight: hide *which* weaknesses the Emperor has, never *how* the rules work.

---

## 4. Cross-cutting design themes

**Acquisitions with baggage.** What works is baggage tied to value: Dominion's points clog the deck, Heat's speed creates heat, and Griftlands' social favours bring Tipsy. Players accept costs they caused themselves. The anti-pattern is baggage that arrives at random, unrelated to the choice. For you, every co-conspirator's bad card should express *who they are* (a drunk, a braggart, a coward) and should hit hardest exactly where their good card helps.

**Sticky negative cards.** The patterns that keep clog fun are a conversion route (Heat's cooldown), a costly or slow purge (Mage Knight-style healing; your Feast), and synergies that reward carrying junk. The anti-pattern is a dead hand. Heat has to legislate "Cluttered Hand",\[4\] and Griftlands warns about a "deck full of tipsy" at the boss. One rule of thumb follows: no curse should be completely unplayable.

**One-way clocks.** Give the clock readable thresholds (Invisible, Inc.), make it something you can spend (Blades Stress, Heat cards), and pay out rewards on the way (your Ambitious recruits; Clank!'s greed). Watch for clock drops that re-trigger thresholds (the Invisible bug) and for wait-it-out strategies (Burgle Bros' events). In practice, a clock that also rewards you works when the reward is *optional but tempting*. Ambitious recruits should be strong and also bring more Jumpy cards.

**Where decisions live in the turn.** Dominion and Clank! decide mostly at purchase. Dune decides at play, one card at a time. Hostage Negotiator puts bought cards straight into your next hand, which shortens the gap between buying and playing.\[39\] Turns stay near 30 seconds when there are few options, each card has one role, and plays alternate in "bite-sized" steps. v0.2 has decisions at purchase only. Add exactly one decision at play.

**The randomness budget.** CK3's rework and Fellowship's mitigations agree: allow one meaningful roll, make it legible, and let the run move the odds. Card draw is input randomness you plan around. A final die is output randomness, so it should resolve a strike you've already set up, not decide whether you get to try. Show the odds table on the card. This is a positioning recommendation, not something the sources measured.

**The single decisive target.** StS telegraphs boss intents, Marvel Champions and Aeon's End give the boss its own deck, and Hostage Negotiator builds the whole game around one abductor. All of them make the target act on a schedule you can read. Your three weakness cards should give the Emperor a *behaviour* (Creature of Habit: his route repeats), not just a stat check.

**Intel as play.** Burgle Bros' "run or peek", Cultist Simulator's understanding-as-play and Dishonored's masked-party deduction (not sourced here) point to the same mechanic: intel costs tempo, and some of it is unreliable. The trap is opacity that forces the designers to retrofit clues later (Cultist).

**Crew loyalty without bookkeeping.** CK3 cut its agents down to about five, gave them roles, and dropped random agent events as "micro-intensive".\[10\] Darkest Dungeon limits personality to a few visible states. The lesson: track at most one loyalty state per co-conspirator (for example Steady / Jumpy / Turned), shown on the card itself.

**Solo first, multiplayer later.** Dune was built at 3–4 players and needed an automa for solo play.\[11\] Heat's bots had to be redesigned for usability. Fellowship's solo mode was designed by Leacock himself. Expect any rival-conspirator mode to need its own design pass. Of the multiplayer options, co-op (a shared conspiracy with possible traitors later) fits "your allies are your problem" better than head-to-head rivals.

**Roguelite progression on the table.** StS uses sequential Ascension, Darkest Dungeon II uses capped candles, and Hostage Negotiator: Career uses a 10-year arc. Your "story read to a young man" frame works on paper as a deck of Lesson cards. Draw 3 that match the failure cause, keep 1, and cap at about 5 kept.

**Theme and tone.** Darkest Dungeon treats its subject seriously even while joking ("we never ridicule the idea of faults themselves").\[36\] Leacock dropped a military victory to stay true to Tolkien's theme that "even the least of us… can make the difference".\[50\] Rome's real assassins mostly died for it (Chaerea, Mnestheus, Narcissus),\[51\]\[52\] and that history gives you dark irony without needing to preach.

**Scope.** Leacock's "simplest possible experiment", Kennedy's "cut ruthlessly", Griftlands removing a "more traditional" RPG layer, and Fowers cutting a floor all point the same way. Each sourced team got to a better game by removing systems. Going from screen to table, Dworetsky shrank numbers by 10–100×.\[22\]

---

## 5. Setting research

| Episode | Primary source (free) | What the source says | Game hook |
|---|---|---|---|
| Caligula, 24 Jan 41 | Suetonius, *Gaius* 56–58 (Richmond translation; LacusCurtius also has it) | They planned to strike "at about noon as he left the Palatine Games, the principal part being claimed by the Guards' colonel Cassius Chaerea." An oracle warned "Beware of Cassius!", and he had the *wrong* Cassius killed\[53\] | **"Misread Omen"** intel card: the Emperor acts on a warning but picks the wrong target. Also the Praetorian officer archetype with a grudge (+Military, curse: "Mocked", whose Pressure rises each time the Emperor humiliates him) |
| Claudius made Emperor, 41 | Secondary (World History Encyclopedia, "Claudius"): Claudius "hid behind a curtain but was soon discovered by a Praetorian named Gratus", who "proclaimed him emperor"; Claudius later "executed Chaerea and forced Sabinus to commit suicide – it would have set a bad precedent to let Caligula's assassins live." | Getting away with it is the hard part\[54\] | Post-kill **"Succession"** check: who the Guard proclaims decides whether you survive |
| Domitian, 96 | Suetonius, *Domitian* 14–17; Cassius Dio 67.17 (LacusCurtius) | "the sixth hour was announced to him, instead of the fifth, which he feared"; Stephanus "wrapped up his left arm in woollen bandages… and concealed in them a dagger"; Dio: "Parthenius removed the blade from the sword which always lay under his pillow"\[55\]\[56\] | Weakness card **"Fears the Fifth Hour"** (superstitious; the timing can be manipulated). Co-conspirator cards: the **Chamberlain** (sets the scene: remove the guard's weapon) and the **Freedman with a Bandaged Arm** (smuggles a weapon) |
| Commodus, 31 Dec 192 | Cassius Dio 73(72).22 (LacusCurtius); Herodian 1.17 (Livius) | Dio: "they caused Marcia to administer poison to him in some beef. Then they sent Narcissus, an athlete…" Herodian: Commodus "wrote down the names of those who were to be put to death that night" on a wax tablet; a boy carried it off "for a plaything" and met Marcia\[57\]\[58\] | **Event "The Tablet"**: you learn you're on the death list, and Pressure jumps. **Method layering**: if poison fails, a backup method fires, which mitigates the final roll (see Q5). The sources disagree: beef vs wine, bath vs bed\[57\]\[58\] |
| Didius Julianus, 193 | Cassius Dio 74.11 (LacusCurtius) | "just as if it had been in some market or auction-room, both the City and its entire empire were auctioned off"; Julianus raised bids "by five thousand at one time"\[52\] | A **meta-progression finale**: crowning is an auction against rivals, paid for with Influence banked across runs |
| Aurelian, 275 | *Historia Augusta, Aurelian* 35–37 (LacusCurtius); Zosimus 1.62 | The secretary "drew up a list of names, in which he mixed together both those at whom Aurelian was truly angry and those toward whom he bore no ill-will," adding "his own name also"; afterwards he was "exposed to wild beasts"\[51\] | **"Forged Death List"** card: a once-per-run action that spikes every co-conspirator's Pressure but makes them all committed (no ratting). The HA calls him Mnestheus; Zosimus and Zonaras call him Eros\[51\] |
| Years of the Four (69) and Five (193) Emperors | Tacitus *Histories*; Dio 74 | In AD 69 the Praetorians killed Galba on 15 January, Otho killed himself on 16 April after losing at Bedriacum, and soldiers killed Vitellius in the palace on 20 December; Vespasian was recognised on 21 December. In 193, "around 200–300 praetorians" killed Pertinax on 28 March "after just 87 days", and Didius Julianus, who "purchased the title from the Praetorian Guard", was executed on 1 June (Wikipedia, "Year of the Four Emperors" / "Year of the Five Emperors") | Campaign = one "Year". Kill 3–4 Emperors within it to be crowned |

**How reliable the sources are.** Cassius Dio was a senator and an eyewitness for 180–193: "from my own observation" (73.4.2).\[57\] But he is biased toward the Senate and survives for this period only in Byzantine summaries. Livius says scholars "have long regarded [Herodian's] information as unreliable", though as a non-senator he is "less biased".\[59\] LacusCurtius warns that the *Historia Augusta* "poses special problems",\[60\] and its late lives (including Aurelian's) contain invented names and documents. For Suetonius, Wikipedia's "The Twelve Caesars" notes that "historians often criticize the book as racy, sensationalist, overly reliant on gossip", and that "Suetonius lost access to the official archives shortly after beginning his work." For a game, the conflicts between sources are a feature: an "unreliable report" mechanic is historically honest.

---

## 6. Implications for Execute the Emperor

### Top 10 recommendations

1. **Split-card turn (Q4).** Every card gets an Action half and a Resource half. Use one card (two later) for its action and reveal the rest for Money/Influence. Evidence: Dune Imperium Diary 1.
2. **Make every curse usable (Q3).** Each bad card has a strong effect that costs Pressure, or converts into something useful. Evidence: Heat's dual-use cards and cooldown.
3. **Tie baggage to identity (Q1).** A co-conspirator's curse should hurt the same stat their good card raises, so drafting is a real bet. Evidence: Dominion's success-driven clog; Griftlands' Tipsy.
4. **Pressure bands (Q2).** Use 4–5 named bands (for example Calm / Restless / Jumpy / Reckless / Breaking), each with one consequence printed on the track. Make sure the Feast can't re-trigger a band. Evidence: Invisible, Inc.
5. **Spend Pressure (Q2, Q5).** Allow a "Push": take +2 Pressure to draw 2 or force a market refresh. That makes the clock a temptation. Evidence: Blades Stress, Heat.
6. **Strike roles (Q5, Q1).** At the strike, each co-conspirator adds Speed, Secrecy or Success. Make the base odds poor without them, and penalise clashing pairs. Evidence: CK3 DD #157.
7. **One roll, many mitigations (Q5).** Keep the nerve roll, but publish the odds and let bought intel and mid-run objectives add modifiers or rerolls. A failed roll leads to "Escape/Suspicion" rather than the end of the run. Evidence: Fellowship design diary.
8. **Peek-or-act intel (Q6).** The Emperor's weaknesses start face-down (3 of 6). Spending an action reveals one, and some reveals come from unreliable sources (a Jumpy informant's report has a 1-in-3 chance to be false). Evidence: Burgle Bros; the conflicting Roman sources.
9. **Solo first, co-op second (Q7).** Hold rival and hidden-traitor modes until the solo loop survives 20+ plays. Evidence: Dune Diary 4; Heat bots.
10. **A Year-of-Emperors campaign (Q8).** Each campaign is one "Year". Failed runs become Lessons (draw 3 by failure cause, keep 1, cap 5), and the crown is an auction finale. Evidence: StS Ascension, Darkest Dungeon II, Hostage Negotiator: Career, Dio 74.11.

### Five risks

| Risk | Early warning sign | Mitigation | Comparable |
|---|---|---|---|
| Too many systems before the core loop | Rules over 4 pages before 10 playtests | One-system-per-week experiments; cut anything not in the turn | Fellowship ("simplest possible experiment"); Griftlands cuts; Cultist "cut ruthlessly" |
| A turn with no decisions | Testers play on autopilot or let you play their turn for them | Split cards (Rec 1) | Dune Imperium |
| Two stacked layers of luck | Winning rate barely changes with skill; players blame the d6 | One roll, visible odds, purchasable mitigation | CK3 rework ("binary") |
| The murder stage bolted on | Strikes don't use the cards you built | The strike consumes your deck (roles, plan cards) | Fellowship objectives; Dune's integration |
| Bookkeeping overload (Jumpy, suspicion, happiness) | You're tracking more than 2 tokens per co-conspirator | One state per card, printed on it | CK3 "micro-intensive"; Heat bots |

### Paper-prototype experiments (≤1 week each, on v0.2)

1. **Split-card turn.** Relabel the 35 cards with Action/Resource halves and allow one Action per turn. Measure turn length (target ≤30 s) and how many times testers pause to think (Q4).
2. **Usable curses.** Give every Pressure card an optional play: "+2 Pressure: gain 3 Influence". Track whether testers draft co-conspirators *for* their curses (Q1, Q3).
3. **Pressure bands and Push.** Replace the 0–20 track with 5 bands and add Push. Survey whether testers describe Pressure as "the crew" or "the timer" (Q2).
4. **Strike with roles.** Run 20 strikes with role bonuses and posted odds. Log whether testers can predict their odds and how many runs end on a single unmodified roll (Q5).
5. **Hidden weaknesses.** Deal 3 weakness cards face-down from 6, with peek actions. Compare against the face-up version on how often the strike feels "earned" (Q6).

### Open questions the research couldn't answer

- Whether any published deckbuilder uses *locked people bundles* exactly as D4 describes. I found no direct precedent, so it may be a genuine novelty, or the rule may need a release valve.
- Measured win rates or turn lengths for Hostage Negotiator or Heat solo. No public data was found.
- Primary design commentary for Hitman, Dishonored, Monster Train, Aeon's End and Spirit Island was not collected in this pass (see Leads).

---

## 7. Resource pack

Consumption times are estimates.

### Tier 1: Start here

| Title | Game(s) | Type | Primary / Secondary | Link | Informs (Q#) | What to look for | Time to consume |
|---|---|---|---|---|---|---|---|
| Dune: Imperium Designer Diary 1 – Beginnings (Sep 2020) | Dune: Imperium | Designer diary | Primary | https://news.direwolfdigital.com/dune-imperium-designer-diary-1-beginnings/ | 4 | The "Deckbuilding + Worker Placement" section on Agent/Reveal halves | 15 min |
| Designer Diary: From Zero to Six Players (Nov 2022; BGG News mirror) | Heat | Designer diary | Primary | https://madcity.games/2022/11/26/designer-diary-from-zero-to-six-players-heat-pedal-to-the-metal-boardgamegeek-news/ | 2, 3, 7 | The "Heat Cards" section; the bot redesign | 20 min |
| Game Design Deep Dive: Alarm systems in Invisible, Inc. (James Lantz) | Invisible, Inc. | Postmortem | Primary | https://www.gamedeveloper.com/design/game-design-deep-dive-alarm-systems-in-klei-s-i-invisible-inc-i- | 2 | The 20→6 level change; the per-level consequences | 15 min |
| Fate of the Fellowship Design Diary (Leacock, June 2025) | Fate of the Fellowship | Designer diary | Primary | https://www.leacock.com/blog/2025/2/28/the-lord-of-the-rings-fate-of-the-fellowship-design-journal | 2, 5 | "A Breakthrough – Objective Cards"; note (5) on the final roll | 40 min |
| CK3 Dev Diary #157 – Schemes & Stories (Sep 2024) | Crusader Kings III | Dev diary | Primary | https://forum.paradoxplaza.com/forum/developer-diary/dev-diary-157-schemes-stories.1703863/ | 1, 5 | "Making Agents People"; "Countermeasures, Odds" | 20 min |
| Slay the Spire: Metrics Driven Design and Balance (GDC 2019, free) | Slay the Spire | GDC talk | Primary | https://www.youtube.com/watch?v=7rqfbvnO_H0 | 3, 5, 8 | Ascension (skill stratification); 27:52 "Predictable Enemy Attack Patterns"\[18\]\[21\] | 35 min |
| Darkest Dungeon: A Design Postmortem (GDC 2016) | Darkest Dungeon | GDC talk | Primary | https://archive.org/details/GDC2016Sigman | 2, 3 | The stress and affliction segment; loss of control | 60 min |
| Game Design Deep Dive: Darkest Dungeon's Affliction System | Darkest Dungeon | Postmortem | Primary | https://www.gamedeveloper.com/design/game-design-deep-dive-i-darkest-dungeon-s-i-affliction-system | 2, 3 | How affliction checks were tuned | 15 min |
| Secret History threads (index on designer page) | Dominion | Designer diary | Primary | https://boardgamegeek.com/boardgamedesigner/10525/donald-x-vaccarino | 1, 3 | The base game, Dark Ages and Cornucopia threads on junk cards | 2–3 h |
| Suetonius, *Domitian* (LacusCurtius) | Setting | Book | Primary | http://penelope.uchicago.edu/Thayer/e/roman/texts/suetonius/12caesars/domitian*.html | 6 | Chs. 14–17 for plot mechanics | 30 min |

### Tier 2: Go deeper

| Title | Game(s) | Type | Primary / Secondary | Link | Informs (Q#) | What to look for | Time to consume |
|---|---|---|---|---|---|---|---|
| Dune: Imperium Designer Diary 4 – Solo and 2-Player | Dune: Imperium | Designer diary | Primary | https://news.direwolfdigital.com/dune-imperium-designer-diary-4-solo-and-2-player-modes/ | 7 | Why an automa, and how House Hagal works | 15 min |
| Clank! Catacombs Design Diary: Artifacts | Clank! | Designer diary | Primary | https://www.direwolfdigital.com/news/clank-catacombs-design-diary-artifacts/ | 2 | "Choosing how greedy you want to be"\[27\] | 10 min |
| Heat rulebook | Heat | Rulebook | Primary | https://cdn.1j1ju.com/medias/20/77/e7-heat-pedal-to-the-metal-rulebook.pdf | 3 | The Heat cards and "Cluttered Hand" rules | 30 min |
| Fate of the Fellowship – Development History | Fate of the Fellowship | Designer diary | Primary | https://www.leacock.com/fate-dev-history | 2, 5 | Dated iteration log (2021–23) | 20 min |
| Cultist Simulator: the retrospective | Cultist Simulator | Postmortem | Primary | https://www.gamedeveloper.com/business/cultist-simulator-the-retrospective | 6 | The final month spent adding clues | 20 min |
| State of the Factory: Year 1 (Kennedy) | Cultist Simulator | Postmortem | Primary | https://medium.com/@alexiskennedy/alexis-kennedy-state-of-the-factory-year-1-edbbd3661ddc | 6, scope | "Fail fast", the hard deadline | 20 min |
| Nerdlab Podcast 090 – Gary Dworetsky | StS: The Board Game | Interview / podcast | Primary | https://nerdlab-games.com/090-designing-slay-the-spire-the-boardgame-with-gary-dworetsky/ | 8, scope | What was simplified going to cardboard | 60 min |
| Friends Don't Let Friends Slay Alone (Thurot, June 2024) | StS: The Board Game | Video essay (written review) | Secondary | https://spacebiff.com/2024/06/11/slay-the-spire/ | 7, 8 | The number-scaling discussion; the solo critique | 15 min |
| Tim Fowers interview (Burgle Bros 2) | Burgle Bros | Interview / podcast | Primary | https://www.donteatthemeeples.com/an-interview-with-tim-fowers-burgle/ | 6, 2 | Cutting the floor; the "stay on bottom floor" problem | 20 min |
| Feat of Klei (Griftlands) | Griftlands | Interview / podcast | Secondary | https://uppercutcrit.com/feat-of-klei-how-griftlands-exemplifies-a-nurturing-approach-to-game-development/ | 1, 3 | Forbes on removing RPG systems; Tipsy | 15 min |
| Cassius Dio 73 (Commodus) and 74 (auction) | Setting | Book | Primary | https://penelope.uchicago.edu/thayer/e/roman/texts/cassius_dio/73*.html | 6, 8 | 73.22; 74.11 | 40 min |
| Herodian 1.17 (Echols) | Setting | Book | Primary | https://www.livius.org/sources/content/herodian-s-roman-history/herodian-1.17/ | 6 | The wax-tablet episode | 15 min |
| *Historia Augusta*, Aurelian 35–37 | Setting | Book | Primary | https://penelope.uchicago.edu/Thayer/e/roman/texts/historia_augusta/aurelian/2*.html | 1 | The forged list; note 137 on Eros/Mnestheus\[51\] | 15 min |

### Tier 3: Reference and rabbit holes

| Title | Game(s) | Type | Primary / Secondary | Link | Informs (Q#) | What to look for | Time to consume |
|---|---|---|---|---|---|---|---|
| Invisible, Inc. alarm bug report (2014) | Invisible, Inc. | Dev diary | Primary | https://kleiforums.com/forums/topic/40047-gameplay-lowering-alarm-level-is-counterproductive/ | 2 | Threshold re-trigger bug | 5 min |
| Blades in the Dark (itch.io) | Blades | Rulebook | Primary | https://johnharper.itch.io/blades-in-the-dark | 5, 6 | Planning & engagement; flashbacks | 3 h+ |
| An Analysis of Blades in the Dark Criticism | Blades | Video essay (written) | Secondary | https://aggregatecognizance.com/p/dead-letters/ | 5 | The planning-vs-flashback debate | 20 min |
| Hostage Negotiator: Career (BGG) | Hostage Negotiator | Rulebook | Primary | https://boardgamegeek.com/boardgame/269727/hostage-negotiator-career | 8 | The 10-year career structure | 10 min |
| A. J. Porfirio interview (Meeple Mountain) | Hostage Negotiator | Interview / podcast | Primary | https://www.meeplemountain.com/interviews/interview-with-a-j-porfirio-designer-of-hostage-negotiator/ | 7 | On solo appeal | 10 min |

### Play list

| Game / scenario | Watch for | Approx. hours | Q# |
|---|---|---|---|
| Slay the Spire (PC), one Ascension 0 run, then Ascension 5 | How curses and intents shape decisions; what changes with each Ascension level | 2–4 | 3, 5, 8 |
| Heat, solo against Legends on one track | Hand clog vs spending heat; cooldown timing | 1 | 2, 3 |
| Dune: Imperium, solo or 2-player against House Hagal | How a one-card Agent turn feels; automa upkeep | 2 | 4, 7 |
| Hostage Negotiator, base scenario ×3 | Turn speed; the final-conclusion roll; how the abductor's escalating threat feels | 1.5 | 4, 5 |
| Invisible, Inc. (PC), first two missions | When the alarm thresholds make you leave | 2 | 2 |
| Fate of the Fellowship, solo | The objective act breaks; Mount Doom mitigations | 2–3 | 2, 5 |
| Burgle Bros, solo, 2 floors | Peek vs run; guard patrol reading | 1 | 6 |

### Board game design craft

- **Paper prototyping practice:** Leacock's "simplest possible experiment" section (Fellowship diary).
- **Deckbuilder design:** Vaccarino's Secret Histories; Dennen's Dire Wolf diaries; Giovannetti's GDC talk on "every card should have a place".\[18\]
- **Solo design:** Porfirio's Hostage Negotiator interviews; Dune Diary 4 on automa; the Heat diary on bots.
- **Podcasts:** Think Like A Game Designer (Justin Gary); Nerdlab Podcast; Indie Board Game Designers Podcast (#114, Tim Fowers: https://indieboardgamedesigners.com/tim-fowers/).

### People to follow

- **Matt Leacock:** leacock.com blog and the Substack "Leacock's Lab".
- **Paul Dennen:** Dire Wolf news diaries.
- **Asger Harding Granerud & Daniel Skjold Pedersen:** BGG designer diaries.
- **Anthony Giovannetti & Casey Yano (Mega Crit):** Slay the Spire II entered Steam Early Access on March 5, 2026, per Mega Crit's announcement ("The Spire awakens once more on March 5, 2026"), so watch for new talks.
- **Alexis Kennedy & Lottie Bevan (Weather Factory):** weatherfactory.biz and Medium.
- **Tyler Sigman & Chris Bourassa (Red Hook):** GDC, interviews.
- **Wokeg and the CK3 team (Paradox):** forum dev diaries.
- **Dan Thurot:** Space-Biff.

### Leads to chase

- **Mega Crit's writing on curses and card design.** I couldn't locate it. Check the Mega Crit blog and the Steam news archive.
- **BGG designer diaries for Imperium: Classics/Legends, 44 BCE, Hostage Negotiator, Burgle Bros and Donning the Purple.** I didn't locate them. Search the BGG News "Designer Diary" tag.
- **Red Hook's GDC 2017 talks, cited secondhand as "GDC, 2017a/b".** Search GDC Vault for Sigman 2017.\[61\]
- **Darkest Dungeon II candles of hope: a design commentary.** Check Red Hook's Steam/Epic dev updates.
- **IO Interactive on Hitman targets and opportunities, and Arkane on Lady Boyle's Last Party.** Search GDC Vault and Noclip.
- **Klei's Griftlands early-access "change of direction" post.** It was recalled by a forum user, not verified.\[62\] Check Klei forums (2020).
- **John Harper's own writing on flashbacks.** The bladesinthedark.com "Planning & Engagement" page is cited by Wikipedia but I didn't fetch it.\[63\]
- **Slay the Spire: The Board Game Kickstarter updates.** These would likely show what was cut.
- **Tacitus *Histories* I–III on 69 AD, on LacusCurtius.** Not yet extracted.

## Sources

1. [Dune: Imperium Designer Diary 1 – Beginnings](https://news.direwolfdigital.com/dune-imperium-designer-diary-1-beginnings/)
2. [Designer Diary: From Zero to Six Players, Heat: Pedal to the Metal](https://madcity.games/2022/11/26/designer-diary-from-zero-to-six-players-heat-pedal-to-the-metal-boardgamegeek-news/)
3. [Designer Diary: From Zero to Six Players, Heat: Pedal to the Metal](https://svarogsden.com/designer-diary-from-zero-to-six-players-heat-pedal-to-the-metal/)
4. [Heat Pedal To The Metal-Rules1 1-EN](https://www.scribd.com/document/672577128/Heat-Pedal-to-the-Metal-Rules1-1-EN)
5. [Heat: Pedal to the Metal Rulebook](https://cdn.1j1ju.com/medias/20/77/e7-heat-pedal-to-the-metal-rulebook.pdf)
6. [The secret history of Dominion](https://scentofagamer.wordpress.com/2016/01/02/the-secret-history-of-dominion/)
7. [Game Design Deep Dive: Alarm systems in Klei's Invisible, Inc.](https://www.gamedeveloper.com/design/game-design-deep-dive-alarm-systems-in-klei-s-i-invisible-inc-i-)
8. [Blades in the Dark by John Harper](https://www.goodreads.com/en/book/show/34612931)
9. [Lord of the Rings: Fate of the Fellowship](https://www.leacock.com/blog/2025/2/28/the-lord-of-the-rings-fate-of-the-fellowship-design-journal)
10. [Dev Diary #157 - Schemes & Stories](https://forum.paradoxplaza.com/forum/developer-diary/dev-diary-157-schemes-stories.1703863/)
11. [Dune: Imperium Designer Diary 4](https://news.direwolfdigital.com/dune-imperium-designer-diary-4-solo-and-2-player-modes/)
12. [Slay the Spire Board Game Review](https://coopboardgames.com/cooperative-board-game-reviews/slay-the-spire/)
13. [HEAT: Pedal to the Metal Game Review](https://www.meeplemountain.com/reviews/heat-pedal-to-the-metal/)
14. ['Clank!'—Grab the Loot, Don't Wake the Dragon](https://geekdad.com/2016/10/clank/)
15. [Paul Dennen](https://boardgamegeek.com/boardgamedesigner/92370/paul-dennen)
16. [Hostage Negotiator Board Game - Gamescape North](https://www.gamescape-north.com/hostage-negotiator.html)
17. [Donning the Purple](https://randomskill.games/product/donning-the-purple/)
18. ['SLAY THE SPIRE': METRICS DRIVEN DESIGN AND BALANCE Anthony Giovannetti](https://gdcvault.com/play/mediaProxy.php?sid=1026309)
19. [Think Like A Game Designer](https://justingarydesign.substack.com/p/anthony-giovannetti-crafting-slay)
20. [Slay the Spire: Metrics Driven Design and Balance](https://glasp.co/youtube/7rqfbvnO_H0)
21. [Slay the Spire: Metrics Driven Design and Balance](https://podwise.ai/episodes/1459444)
22. [Friends Don’t Let Friends Slay Alone](https://spacebiff.com/2024/06/11/slay-the-spire/)
23. [090 - Designing Slay the Spire - The Boardgame - with Gary Dworetsky](https://nerdlab-games.com/090-designing-slay-the-spire-the-boardgame-with-gary-dworetsky/)
24. [SdJ Re-Reviews #31: Dominion](https://opinionatedgamers.com/2015/12/13/sdj-re-reviews-31-dominion/)
25. [Donald X. Vaccarino](https://boardgamegeek.com/boardgamedesigner/10525/donald-x-vaccarino)
26. [Donald X Vaccarino - Tabletop Game Icons](https://www.tabletopgameicons.com/donald-x-vaccarino/)
27. [Clank! Catacombs Design Diary: Artifacts - News - Dire Wolf Digital](https://www.direwolfdigital.com/news/clank-catacombs-design-diary-artifacts/)
28. [Clank! Catacombs: Underworld Design Diary 1: Welcome to the Underworld - News - Dire Wolf Digital](https://news.direwolfdigital.com/clank-catacombs-underworld-design-diary-1-welcome-to-the-underworld/)
29. [Feat of Klei: How Griftlands Exemplifies a Nurturing Approach to Game Development](https://uppercutcrit.com/feat-of-klei-how-griftlands-exemplifies-a-nurturing-approach-to-game-development/)
30. [445338 - Griftlands - Klei Entertainment Forums](https://forums.kleientertainment.com/game-updates/griftlands/445338-r1379/)
31. [RTTP: Let's take a moment to appreciate how well-designed Invisible Inc is](https://www.resetera.com/threads/rttp-lets-take-a-moment-to-appreciate-how-well-designed-invisible-inc-is.15394/)
32. [\[Gameplay\] - Lowering alarm level is counterproductive - \[Invisible, Inc.\] Bug Tracker - Archive - Klei Entertainment Forums](https://kleiforums.com/forums/topic/40047-gameplay-lowering-alarm-level-is-counterproductive/)
33. [Game Design Deep Dive: Darkest Dungeon's Affliction System](https://www.gamedeveloper.com/design/game-design-deep-dive-i-darkest-dungeon-s-i-affliction-system)
34. [How Darkest Dungeon got inspiration from Band of Brothers and Aliens](https://www.pcgamer.com/how-darkest-dungeon-got-inspiration-from-band-of-brothers-and-aliens/)
35. [GDC 2016: Tyler Sigman - "Darkest Dungeon: A Design Postmortem" : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/details/GDC2016Sigman)
36. [Exploring the Darkness: Tyler Sigman Talks About Co-Creating the Darkest Dungeon Games](https://www.superjumpmagazine.com/exploring-the-darkness-tyler-sigman-talks-about-co-creating-the-darkest-dungeon-games/)
37. [CK3 Dev Diary #5 - Schemes, Secrets and Hooks](https://forum.paradoxplaza.com/forum/threads/ck3-dev-diary-5-schemes-secrets-and-hooks.1289167/)
38. [\[2024\] Dev Diary #157 - Schemes & Stories](https://devtrackers.gg/crusader-kings/p/69618989-dev-diary-157-schemes-stories)
39. [Hostage Negotiator](https://boardgamegeek.com/boardgame/134253/hostage-negotiator)
40. [Hostage Negotiator by A.J. Porfirio :: Kicktraq](http://www.kicktraq.com/projects/1459655047/hostage-negotiator/)
41. [Interview with A. J. Porfirio](https://www.meeplemountain.com/interviews/interview-with-a-j-porfirio-designer-of-hostage-negotiator/)
42. [Hostage Negotiator: Career](https://boardgamegeek.com/boardgame/269727/hostage-negotiator-career)
43. [Tim Fowers, Burgle Bros 2 designer, talks board game design](https://www.donteatthemeeples.com/an-interview-with-tim-fowers-burgle/)
44. [An interview with Tim Fowers, Burgle Bros 2 designer](https://donteatthemeeples.substack.com/p/an-interview-with-tim-fowers-burgle)
45. [Review: Burgle Bros. - Shut Up & Sit Down](https://www.shutupandsitdown.com/review-burgle-bros/)
46. [Blades in the Dark by John Harper - Itch.io](https://johnharper.itch.io/blades-in-the-dark)
47. [An Analysis of Blades in the Dark Criticism](https://aggregatecognizance.com/p/dead-letters/)
48. [Alexis Kennedy: State of the Factory: Year 1](https://medium.com/@alexiskennedy/alexis-kennedy-state-of-the-factory-year-1-edbbd3661ddc)
49. [Cultist Simulator: the retrospective](https://www.gamedeveloper.com/business/cultist-simulator-the-retrospective)
50. [Designer Diary: Lord of the Rings: Fate of the Fellowship](https://boardgamegeek.com/blog/1/blogpost/175726/designer-diary-lord-of-the-rings-fate-of-the-fello)
51. [Historia Augusta • Life of Aurelian (Part 2 of 3)](https://penelope.uchicago.edu/Thayer/e/roman/texts/historia_augusta/aurelian/2*.html)
52. [Cassius Dio — Epitome of Book 74](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cassius_Dio/74*.html)
53. [Suetonius' Life of Gaius (Caligula)](https://facultystaff.richmond.edu/~wstevens/history331texts/caligula.html)
54. [Cassius Chaerea](https://military-history.fandom.com/wiki/Cassius_Chaerea)
55. [Cassius Dio — Epitome of Book 67](https://penelope.uchicago.edu/thayer/e/roman/texts/cassius_dio/67*.html)
56. [Suetonius • Life of Domitian](http://penelope.uchicago.edu/Thayer/e/roman/texts/suetonius/12caesars/domitian*.html)
57. [Cassius Dio — Epitome of Book 73](https://penelope.uchicago.edu/thayer/e/roman/texts/cassius_dio/73*.html)
58. [Herodian 1.17 - Livius](https://www.livius.org/sources/content/herodian-s-roman-history/herodian-1.17/)
59. [Herodian - Livius](https://www.livius.org/articles/person/herodian/)
60. [LacusCurtius • The Historia Augusta](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Historia_Augusta/home.html)
61. [The Dynamics of Stress in Darkest Dungeon](https://nicolaluigidau.wordpress.com/2024/02/06/the-dynamics-of-stress-in-darkest-dungeon/)
62. [Griftlands, Klei Entertainment's roguelike deck building game, is out of Early Access on PC today; releases on PS4, XB1, and Switch on June 4](https://www.resetera.com/threads/griftlands-klei-entertainments-roguelike-deck-building-game-is-out-of-early-access-on-pc-today-releases-on-ps4-xb1-and-switch-on-june-4.434816/)
63. [Blades in the Dark](https://en.wikipedia.org/wiki/Blades_in_the_Dark)
