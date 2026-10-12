/*
 * Execute the Emperor — rules engine for paper prototype v0.3.
 *
 * Pure game logic, no DOM. Works in the browser (window.ETE) and in Node
 * (require('./engine.js')). The game is deterministic for a given seed and
 * sequence of actions: the RNG state lives in the game object.
 *
 * Every action takes the game object, checks the move is legal, mutates the
 * game and returns it. An illegal move throws an Error with a plain message.
 * Rules text: docs/prototype/rules.md and docs/prototype/cards.md.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ETE = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const RULES_VERSION = 'v0.3';
  const STAT_MAX = 10;
  const PRESSURE_MAX = 20;
  const FEAST_COST = 6;

  // ---------------------------------------------------------------- cards

  // Effect keys: money, inf, pressure, prep, draw, military, recruitTwice.
  const CARD_DEFS = {
    coffers: { name: 'Family Coffers', owner: null, bad: false,
      action: { money: 2 }, actionText: '+2 Money',
      resource: { money: 1 }, resourceText: '+1 Money' },
    friends: { name: 'Old Friends', owner: null, bad: false,
      action: { inf: 2 }, actionText: '+2 Influence',
      resource: { inf: 1 }, resourceText: '+1 Influence' },

    dinner: { name: 'Dinner Invitation', owner: 'aurelia', bad: false,
      action: { recruitTwice: true }, actionText: 'Recruit twice this turn',
      resource: { inf: 2 }, resourceText: '+2 Influence' },
    tallTales: { name: 'Tall Tales', owner: 'aurelia', bad: true,
      action: { pressure: 2, inf: 4 }, actionText: '+2 Pressure, +4 Influence',
      resource: { pressure: 1 }, resourceText: '+1 Pressure' },

    purse: { name: "Veterans' Purse", owner: 'gaius', bad: false,
      action: { prep: 1 }, actionText: '+1 Preparation',
      resource: { money: 2 }, resourceText: '+2 Money' },
    brawl: { name: 'Barracks Brawl', owner: 'gaius', bad: true,
      action: { pressure: 2, military: 1 }, actionText: '+2 Pressure, +1 Military',
      resource: { pressure: 1 }, resourceText: '+1 Pressure' },

    muscle: { name: 'Muscle for Hire', owner: 'marcus', bad: false,
      action: { money: 3 }, actionText: '+3 Money',
      resource: { money: 2 }, resourceText: '+2 Money' },
    knowsMan: { name: 'Knows a Man', owner: 'marcus', bad: false,
      action: { draw: 2 }, actionText: 'Draw 2 cards',
      resource: { money: 1 }, resourceText: '+1 Money' },

    pillow: { name: 'Pillow Talk', owner: 'felix', bad: false,
      action: { prep: 1 }, actionText: '+1 Preparation',
      resource: { inf: 2 }, resourceText: '+2 Influence' },
    husband: { name: 'A Jealous Husband', owner: 'felix', bad: true,
      action: { pressure: 2, draw: 3 }, actionText: '+2 Pressure, draw 3 cards',
      resource: { pressure: 1 }, resourceText: '+1 Pressure' },

    opening: { name: 'Opening Night', owner: 'livia', bad: false,
      action: { money: 2, inf: 2 }, actionText: '+2 Money, +2 Influence',
      resource: { money: 1, inf: 1 }, resourceText: '+1 Money, +1 Influence' },
    mask: { name: 'A Mask for Every Face', owner: 'livia', bad: false,
      action: { prep: 1 }, actionText: '+1 Preparation',
      resource: { inf: 1 }, resourceText: '+1 Influence' },

    openPurse: { name: 'Open Purse', owner: 'titus', bad: false,
      action: { prep: 1, money: 2 }, actionText: '+1 Preparation, +2 Money',
      resource: { money: 3 }, resourceText: '+3 Money' },
    interest: { name: 'Interest Due', owner: 'titus', bad: true,
      action: { pressure: 1, money: 5 }, actionText: '+1 Pressure, +5 Money',
      resource: { money: -2 }, resourceText: '−2 Money' },

    guard: { name: 'Changing of the Guard', owner: 'cassius', bad: false,
      action: { prep: 2 }, actionText: '+2 Preparations',
      resource: { inf: 2 }, resourceText: '+2 Influence' },
    firmWord: { name: 'Firm Word', owner: 'cassius', bad: false,
      action: { pressure: -2 }, actionText: '−2 Pressure',
      resource: { inf: 1 }, resourceText: '+1 Influence' },

    errand: { name: 'Discreet Errand', owner: 'sextus', bad: false,
      action: { prep: 1 }, actionText: '+1 Preparation',
      resource: { money: 2 }, resourceText: '+2 Money' },
    nervous: { name: 'Nervous Hands', owner: 'sextus', bad: true,
      action: { pressure: 2, prep: 2 }, actionText: '+2 Pressure, +2 Preparations',
      resource: { pressure: 1 }, resourceText: '+1 Pressure' },
  };

  const STARTER = [['coffers', 5], ['friends', 3]];

  // ------------------------------------------------------- co-conspirators

  const PEOPLE = {
    aurelia: { name: 'Aurelia', title: 'the Socialite', group: 'willing',
      cost: { inf: 3 }, bonus: { charm: 2 }, role: 'Inside', rival: 'marcus',
      jumpy: false, cards: ['dinner', 'tallTales'] },
    gaius: { name: 'Gaius', title: 'the Military Man', group: 'willing',
      cost: { money: 3 }, bonus: { military: 2 }, role: 'Blade', rival: 'livia',
      jumpy: false, cards: ['purse', 'brawl'] },
    marcus: { name: 'Marcus', title: 'the Lout', group: 'willing',
      cost: { money: 2 }, bonus: { military: 1 }, role: 'Cover', rival: 'aurelia',
      jumpy: true, cards: ['muscle', 'knowsMan'] },
    felix: { name: 'Felix', title: 'the Womaniser', group: 'willing',
      cost: { inf: 2 }, bonus: { charm: 1, political: 1 }, role: 'Inside', rival: 'titus',
      jumpy: false, cards: ['pillow', 'husband'] },
    livia: { name: 'Livia', title: 'the Actress', group: 'willing',
      cost: { money: 2 }, bonus: { charm: 1 }, role: 'Cover', rival: 'gaius',
      jumpy: false, cards: ['opening', 'mask'] },
    titus: { name: 'Titus', title: 'the Moneylender', group: 'ambitious',
      cost: { inf: 4 }, bonus: { political: 2 }, role: 'Inside', rival: 'felix',
      jumpy: false, cards: ['openPurse', 'interest'] },
    cassius: { name: 'Cassius', title: 'the Praetorian', group: 'ambitious',
      cost: { money: 3, inf: 2 }, bonus: { military: 2, political: 1 }, role: 'Blade', rival: 'sextus',
      jumpy: false, cards: ['guard', 'firmWord'] },
    sextus: { name: 'Sextus', title: 'the Poisoner', group: 'ambitious',
      cost: { money: 4 }, bonus: { political: 2 }, role: 'Blade', rival: 'cassius',
      jumpy: true, cards: ['errand', 'nervous'] },
  };

  const WILLING = ['aurelia', 'gaius', 'marcus', 'felix', 'livia'];
  const AMBITIOUS = ['titus', 'cassius', 'sextus'];
  const RIVAL_PAIRS = [['aurelia', 'marcus'], ['gaius', 'livia'], ['felix', 'titus'], ['cassius', 'sextus']];

  // ------------------------------------------------------------- emperors

  const EMPERORS = {
    habit: { name: 'Creature of Habit', stats: ['military', 'political'], target: 13,
      quirk: 'His routine never changes: you can hold up to 5 Preparations.' },
    blind: { name: 'Partially Blind', stats: ['military', 'charm'], target: 14,
      quirk: 'Come at his blind side: your first Blade gives +2.' },
    wife: { name: 'Take My Wife, Please', stats: ['charm', 'political'], target: 14,
      quirk: 'He trusts women: Aurelia and Livia count as Blades too.' },
  };

  // ---------------------------------------------------------------- bands

  const BANDS = [
    { key: 'calm', name: 'Calm', min: 0, max: 4, need: 3, effect: null },
    { key: 'restless', name: 'Restless', min: 5, max: 9, need: 4,
      effect: 'The Ambitious stir: Titus, Cassius and Sextus are shuffled into the market deck.' },
    { key: 'uneasy', name: 'Uneasy', min: 10, max: 14, need: 5,
      effect: "Whispers reach the palace: the Emperor's target goes up by 1." },
    { key: 'reckless', name: 'Reckless', min: 15, max: 19, need: 6,
      effect: 'An uninvited guest: the top card of the market deck joins your crew for free.' },
    { key: 'breaking', name: 'Breaking', min: 20, max: 20, need: 7,
      effect: 'Someone makes a move: you must strike at the start of your next turn.' },
  ];

  const STAT_NAMES = { charm: 'Charm', military: 'Military', political: 'Political' };

  // ------------------------------------------------------------------ rng

  // mulberry32; the state is an int32 kept on the game.
  function rand(g) {
    let t = (g.rng = (g.rng + 0x6D2B79F5) | 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  function shuffle(g, arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand(g) * (i + 1));
      const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function rollD6(g) { return 1 + Math.floor(rand(g) * 6); }

  function seedFrom(value) {
    // Accept numbers or any string; hash strings to an int32.
    if (typeof value === 'number' && Number.isFinite(value)) return value | 0;
    const s = String(value);
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h | 0;
  }

  // -------------------------------------------------------------- helpers

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const pname = (who) => PEOPLE[who].name;

  function log(g, text, kind) {
    g.log.push({ turn: g.turn, text, kind: kind || 'info' });
  }

  function bandOf(pressure) {
    for (let i = BANDS.length - 1; i >= 0; i--) if (pressure >= BANDS[i].min) return BANDS[i];
    return BANDS[0];
  }
  function bandIndex(pressure) { return BANDS.indexOf(bandOf(pressure)); }

  function maxPrep(g) { return g.emperor === 'habit' ? 5 : 3; }

  function isBlade(g, who) {
    return PEOPLE[who].role === 'Blade' ||
      (g.emperor === 'wife' && (who === 'aurelia' || who === 'livia'));
  }

  function covers(g) { return g.crew.filter((p) => PEOPLE[p].role === 'Cover'); }

  function card(g, id) { return CARD_DEFS[g.cards[id]]; }

  // Every card instance id lives in exactly one of these zones.
  const ZONES = ['deck', 'hand', 'played', 'discard'];

  function removeCardEverywhere(g, id) {
    for (const z of ZONES) {
      const i = g[z].indexOf(id);
      if (i >= 0) { g[z].splice(i, 1); return z; }
    }
    return null;
  }

  function draw(g, n) {
    const drawn = [];
    for (let i = 0; i < n; i++) {
      if (g.deck.length === 0) {
        if (g.discard.length === 0) break;
        g.deck = shuffle(g, g.discard.splice(0));
        log(g, 'Your deck ran out: you shuffle your discard pile into a new deck.', 'quiet');
      }
      const id = g.deck.pop();
      g.hand.push(id);
      drawn.push(id);
    }
    return drawn;
  }

  // Pressure only fires band effects on the way up. Jumping past a band
  // counts as reaching it, so effects fire in order.
  function addPressure(g, n, why) {
    if (!n) return;
    const before = g.pressure;
    g.pressure = clamp(before + n, 0, PRESSURE_MAX);
    const delta = g.pressure - before;
    if (delta !== 0) {
      log(g, `${delta > 0 ? '+' : '−'}${Math.abs(delta)} Pressure${why ? ` (${why})` : ''}: now ${g.pressure}, ${bandOf(g.pressure).name}.`, 'pressure');
    }
    for (const band of BANDS) {
      if (!band.effect || g.bandsFired[band.key]) continue;
      if (g.pressure >= band.min) fireBand(g, band);
    }
  }

  function fireBand(g, band) {
    g.bandsFired[band.key] = true;
    log(g, `${band.name}! ${band.effect}`, 'band');
    if (band.key === 'restless') {
      g.marketDeck.push(...g.ambitiousAside.splice(0));
      shuffle(g, g.marketDeck);
    } else if (band.key === 'uneasy') {
      g.targetBonus += 1;
    } else if (band.key === 'reckless') {
      let guest = g.marketDeck.shift();
      let from = 'the market deck';
      if (!guest && g.market.length) { guest = g.market.shift(); from = 'the market'; }
      if (guest) {
        log(g, `${pname(guest)} turns up uninvited from ${from}.`, 'band');
        joinCrew(g, guest);
      } else {
        log(g, 'Nobody is left to turn up.', 'band');
      }
    } else if (band.key === 'breaking') {
      g.strikeNextTurn = true;
    }
  }

  function joinCrew(g, who) {
    const p = PEOPLE[who];
    g.crew.push(who);
    const gains = [];
    for (const s of Object.keys(p.bonus)) {
      g.stats[s] = clamp(g.stats[s] + p.bonus[s], 0, STAT_MAX);
      gains.push(`+${p.bonus[s]} ${STAT_NAMES[s]}`);
    }
    for (const def of p.cards) {
      g.cards[def] = def;
      g.discard.push(def);
    }
    log(g, `${p.name}, ${p.title}, joins your crew (${gains.join(', ')}). Their 2 cards go to your discard pile.`, 'crew');
  }

  function removePerson(g, who) {
    const p = PEOPLE[who];
    g.crew.splice(g.crew.indexOf(who), 1);
    g.silenced.push(who);
    for (const s of Object.keys(p.bonus)) g.stats[s] = clamp(g.stats[s] - p.bonus[s], 0, STAT_MAX);
    for (const def of p.cards) {
      removeCardEverywhere(g, def);
      delete g.cards[def];
    }
  }

  function applyEffect(g, fx, label) {
    if (fx.pressure) addPressure(g, fx.pressure, label);
    if (fx.money) g.pool.money += fx.money;
    if (fx.inf) g.pool.inf += fx.inf;
    if (fx.prep) {
      const before = g.prep;
      g.prep = clamp(g.prep + fx.prep, 0, maxPrep(g));
      const got = g.prep - before;
      log(g, got > 0 ? `+${got} Preparation${got > 1 ? 's' : ''}: now ${g.prep}.` :
        `You're already holding ${g.prep} Preparations, the most you can.`, 'prep');
    }
    if (fx.military) {
      g.stats.military = clamp(g.stats.military + fx.military, 0, STAT_MAX);
      log(g, `+${fx.military} Military: now ${g.stats.military}.`, 'crew');
    }
    if (fx.draw) {
      const got = draw(g, fx.draw);
      log(g, got.length ? `You draw ${got.map((id) => card(g, id).name).join(', ')}.` : 'There are no cards left to draw.', 'quiet');
    }
    if (fx.recruitTwice) {
      g.recruitsLeft = 2;
      log(g, 'You can recruit twice this turn.', 'info');
    }
  }

  function assert(cond, msg) { if (!cond) throw new Error(msg); }

  function assertTurn(g) {
    assert(g.phase !== 'gameover', 'The game is over.');
    assert(!g.pending, 'Choose which Cover takes the fall first.');
  }

  // ---------------------------------------------------------------- setup

  function newGame(opts) {
    opts = opts || {};
    const seedInput = opts.seed != null && opts.seed !== '' ? opts.seed : Math.floor(Math.random() * 1e9);
    const g = {
      version: RULES_VERSION,
      seed: String(seedInput),
      rng: seedFrom(seedInput),
      emperor: null,
      turn: 1,
      stats: { charm: 3, military: 3, political: 3 },
      pressure: 0,
      prep: 0,
      bandsFired: { restless: false, uneasy: false, reckless: false, breaking: false },
      targetBonus: 0,
      cards: {},
      deck: [], hand: [], played: [], discard: [],
      market: [], marketDeck: [], ambitiousAside: AMBITIOUS.slice(),
      crew: [], silenced: [],
      phase: 'start',
      pushed: false,
      acted: false,
      actedWith: null,
      pool: { money: 0, inf: 0 },
      recruitsLeft: 1,
      feastUsed: false,
      silenceUsed: false,
      forcedStrike: false,
      strikeNextTurn: false,
      pending: null,
      result: null,
      log: [],
      tally: { pushes: 0, lieLow: 0, badActs: 0, feastTurn: null, silenced: null, strikes: [], guests: [] },
    };

    for (const [def, n] of STARTER) {
      for (let i = 1; i <= n; i++) { const id = `${def}${i}`; g.cards[id] = def; g.deck.push(id); }
    }
    shuffle(g, g.deck);

    const willing = shuffle(g, WILLING.slice());
    g.market = willing.slice(0, 3);
    g.marketDeck = willing.slice(3);

    const keys = Object.keys(EMPERORS);
    g.emperor = opts.emperor && EMPERORS[opts.emperor] ? opts.emperor : keys[Math.floor(rand(g) * keys.length)];

    log(g, `A new plot (seed ${g.seed}). You've learned this about the Emperor: ${EMPERORS[g.emperor].name}.`, 'band');
    draw(g, 5);
    log(g, `Turn ${g.turn}.`, 'turn');
    return g;
  }

  // --------------------------------------------------------------- strike

  function strikeInfo(g) {
    const E = EMPERORS[g.emperor];
    const [s1, s2] = E.stats;
    const total = g.stats[s1] + g.stats[s2];
    const insides = g.crew.filter((p) => PEOPLE[p].role === 'Inside');
    const target = E.target + g.targetBonus - insides.length;
    const blades = g.crew.filter((p) => isBlade(g, p));
    const bladeBonus = blades.length + (g.emperor === 'blind' && blades.length > 0 ? 1 : 0);
    const rivals = RIVAL_PAIRS.filter(([a, b]) => g.crew.includes(a) && g.crew.includes(b));
    const mod = bladeBonus + g.prep - rivals.length;
    const band = bandOf(g.pressure);
    const need = band.need - mod;
    const chance = need >= 7 ? 0 : need <= 2 ? 5 / 6 : (7 - need) / 6;
    return {
      stats: [s1, s2], total, baseTarget: E.target, targetBonus: g.targetBonus,
      insides, target, reaches: total >= target,
      blades, bladeBonus, prep: g.prep, rivals, mod,
      band, need, chance, covers: covers(g),
    };
  }

  function canStrike(g) {
    return g.phase === 'start' && !g.pending && !g.pushed && !g.acted &&
      (g.forcedStrike || strikeInfo(g).reaches);
  }

  function strike(g) {
    assertTurn(g);
    assert(g.phase === 'start' && !g.pushed && !g.acted, 'You can only strike at the start of your turn.');
    const info = strikeInfo(g);
    const forced = g.forcedStrike;
    assert(forced || info.reaches, `You need ${info.target} ${STAT_NAMES[info.stats[0]]} + ${STAT_NAMES[info.stats[1]]} to strike; you have ${info.total}.`);
    g.forcedStrike = false;

    const record = {
      turn: g.turn, band: info.band.name, pressure: g.pressure, forced,
      blades: info.blades.length, bladeBonus: info.bladeBonus, prep: info.prep, rivals: info.rivals.length,
      total: info.total, target: info.target, need: info.need, chance: info.chance,
      roll: null, hit: false, cover: null, short: false,
    };
    g.tally.strikes.push(record);

    if (!info.reaches) {
      record.short = true;
      log(g, `Someone makes a move, and you strike before you're ready: ${info.total} against a target of ${info.target}. The plot is foiled.`, 'lose');
      g.result = { win: false, reason: 'short', turn: g.turn };
      g.phase = 'gameover';
      return g;
    }

    const roll = rollD6(g);
    record.roll = roll;
    const hit = roll !== 1 && roll + info.mod >= info.band.need;
    record.hit = hit;
    const modText = info.mod === 0 ? '' : ` ${info.mod > 0 ? '+' : '−'} ${Math.abs(info.mod)}`;
    log(g, `${forced ? 'You are made to strike. ' : 'You strike. '}Nerve roll: ${roll}${modText} against ${info.band.need}+ (${info.band.name})${roll === 1 ? ' — a 1 always misses' : ''}.`, 'strike');

    if (hit) {
      log(g, 'The Emperor is dead. You win.', 'win');
      g.result = { win: true, reason: 'win', turn: g.turn };
      g.phase = 'gameover';
      return g;
    }

    const cv = covers(g);
    if (cv.length === 0) {
      log(g, 'You missed, and nobody is there to take the fall. The plot is foiled.', 'lose');
      g.result = { win: false, reason: 'nerve', turn: g.turn };
      g.phase = 'gameover';
      return g;
    }
    if (cv.length === 1) { coverFall(g, cv[0]); return g; }
    g.pending = { type: 'cover', options: cv };
    log(g, 'You missed. Choose which Cover takes the fall.', 'strike');
    return g;
  }

  function chooseCover(g, who) {
    assert(g.pending && g.pending.type === 'cover', 'Nobody needs to take the fall.');
    assert(g.pending.options.includes(who), 'That person is not a Cover in your crew.');
    g.pending = null;
    coverFall(g, who);
    return g;
  }

  function coverFall(g, who) {
    const rec = g.tally.strikes[g.tally.strikes.length - 1];
    if (rec) rec.cover = pname(who);
    removePerson(g, who);
    log(g, `You missed, but ${pname(who)} takes the fall and is silenced. You lose all your Preparations.`, 'strike');
    g.prep = 0;
    const i = bandIndex(g.pressure);
    if (i < BANDS.length - 1) addPressure(g, BANDS[i + 1].min - g.pressure, 'the crew panics');
    if (g.pressure === PRESSURE_MAX) {
      g.strikeNextTurn = true;
      log(g, "You're at 20: you strike again at the start of your next turn.", 'band');
    }
    // The strike took the place of your turn; end it as usual.
    finishTurn(g);
  }

  // ------------------------------------------------------------ the turn

  function push(g) {
    assertTurn(g);
    assert(g.phase === 'start' && !g.acted, 'You can only Push before you act.');
    assert(!g.forcedStrike, 'You must strike this turn.');
    assert(!g.pushed, 'You can only Push once a turn.');
    g.pushed = true;
    g.tally.pushes++;
    addPressure(g, 2, 'Push');
    const got = draw(g, 2);
    log(g, got.length ? `You Push and draw ${got.map((id) => card(g, id).name).join(', ')}.` : 'You Push, but there are no cards left to draw.', 'info');
    return g;
  }

  function lieLow(g) {
    assertTurn(g);
    assert(g.phase === 'start' && !g.acted && !g.pushed, 'You can only lie low instead of pushing, acting and recruiting.');
    assert(!g.forcedStrike, 'You must strike this turn.');
    g.tally.lieLow++;
    log(g, `You lie low and discard your hand (${g.hand.length} card${g.hand.length === 1 ? '' : 's'}). Nothing in it counts.`, 'info');
    g.discard.push(...g.hand.splice(0));
    finishTurn(g);
    return g;
  }

  function act(g, id) {
    assertTurn(g);
    assert(g.phase === 'start' && !g.acted, 'You have already acted this turn.');
    assert(!g.forcedStrike, 'You must strike this turn.');
    if (id == null) {
      assert(g.hand.length === 0, 'Choose a card to act with.');
      log(g, 'Your hand is empty, so there is nothing to act with.', 'info');
    } else {
      const i = g.hand.indexOf(id);
      assert(i >= 0, 'That card is not in your hand.');
      g.hand.splice(i, 1);
      g.played.push(id);
      const c = card(g, id);
      g.actedWith = id;
      if (c.bad) g.tally.badActs++;
      log(g, `You act with ${c.bad ? '✗ ' : ''}${c.name}: ${c.actionText}.`, 'act');
      applyEffect(g, c.action, c.name);
    }
    g.acted = true;

    // Reveal the rest. Cards drawn by the action count too.
    const revealed = g.hand.splice(0);
    const parts = [];
    for (const rid of revealed) {
      g.played.push(rid);
      const c = card(g, rid);
      applyEffect(g, c.resource, `${c.name} revealed`);
      parts.push(`${c.bad ? '✗ ' : ''}${c.name} (${c.resourceText})`);
    }
    if (parts.length) log(g, `You reveal ${parts.join(', ')}.`, 'quiet');
    g.pool.money = Math.max(0, g.pool.money);
    g.pool.inf = Math.max(0, g.pool.inf);
    log(g, `You have ${g.pool.money} Money and ${g.pool.inf} Influence to spend.`, 'info');
    g.phase = 'recruit';
    return g;
  }

  function canAfford(g, who) {
    const c = PEOPLE[who].cost;
    return (c.money || 0) <= g.pool.money && (c.inf || 0) <= g.pool.inf;
  }

  function recruit(g, who) {
    assertTurn(g);
    assert(g.phase === 'recruit', 'Act with a card first; then recruit.');
    assert(g.recruitsLeft > 0, "You've already recruited this turn.");
    assert(g.market.includes(who), `${pname(who)} is not in the market.`);
    assert(canAfford(g, who), `You can't afford ${pname(who)}.`);
    const c = PEOPLE[who].cost;
    g.pool.money -= c.money || 0;
    g.pool.inf -= c.inf || 0;
    g.market.splice(g.market.indexOf(who), 1);
    g.recruitsLeft--;
    joinCrew(g, who);
    return g;
  }

  // Valid ways to split the Feast's 6 between Money and Influence.
  function feastSplits(g) {
    const out = [];
    for (let m = Math.min(g.pool.money, FEAST_COST); m >= 0; m--) {
      if (FEAST_COST - m <= g.pool.inf) out.push({ money: m, inf: FEAST_COST - m });
    }
    return out;
  }

  function canFeast(g) {
    return g.phase === 'recruit' && !g.pending && !g.feastUsed && g.recruitsLeft > 0 && feastSplits(g).length > 0;
  }

  function feast(g, split) {
    assertTurn(g);
    assert(g.phase === 'recruit' && g.recruitsLeft > 0, 'You can hold the Feast instead of recruiting.');
    assert(!g.feastUsed, "You've already held the Feast this game.");
    const splits = feastSplits(g);
    assert(splits.length > 0, `The Feast costs ${FEAST_COST} Money and Influence.`);
    const pay = split ? splits.find((s) => s.money === split.money && s.inf === split.inf) : splits[0];
    assert(pay, "You can't pay the Feast that way.");
    g.pool.money -= pay.money;
    g.pool.inf -= pay.inf;
    g.recruitsLeft--;
    g.feastUsed = true;
    g.tally.feastTurn = g.turn;
    log(g, `You hold the Feast (${pay.money} Money, ${pay.inf} Influence).`, 'info');
    addPressure(g, -3, 'the Feast');
    return g;
  }

  function canSilence(g) {
    return (g.phase === 'start' || g.phase === 'recruit') && !g.pending && !g.forcedStrike &&
      !g.silenceUsed && g.crew.length > 0;
  }

  function silence(g, who) {
    assertTurn(g);
    assert(g.phase === 'start' || g.phase === 'recruit', 'You can only silence someone during your turn.');
    assert(!g.forcedStrike, 'You must strike this turn.');
    assert(!g.silenceUsed, "You've already silenced someone this game.");
    assert(g.crew.includes(who), `${pname(who)} is not in your crew.`);
    g.silenceUsed = true;
    g.tally.silenced = { who: pname(who), turn: g.turn };
    removePerson(g, who);
    log(g, `You silence ${pname(who)}. Their cards are gone, and so is their bonus.`, 'crew');
    addPressure(g, 3, 'the crew saw what you did');
    return g;
  }

  function endTurn(g) {
    assertTurn(g);
    assert(g.phase === 'recruit', 'Act with a card before you end your turn, or lie low.');
    finishTurn(g);
    return g;
  }

  function finishTurn(g) {
    g.discard.push(...g.hand.splice(0), ...g.played.splice(0));
    const jumpy = g.crew.filter((p) => PEOPLE[p].jumpy);
    const why = jumpy.length ? `end of turn, and ${jumpy.map(pname).join(' and ')} ${jumpy.length > 1 ? 'are' : 'is'} jumpy` : 'end of turn';
    addPressure(g, 1 + jumpy.length, why);
    while (g.market.length < 3 && g.marketDeck.length) g.market.push(g.marketDeck.shift());
    draw(g, 5);

    g.turn++;
    g.phase = 'start';
    g.pushed = false;
    g.acted = false;
    g.actedWith = null;
    g.pool = { money: 0, inf: 0 };
    g.recruitsLeft = 1;
    log(g, `Turn ${g.turn}.`, 'turn');
    if (g.strikeNextTurn) {
      g.strikeNextTurn = false;
      g.forcedStrike = true;
      log(g, 'Someone makes a move: you must strike now.', 'band');
    }
  }

  // ------------------------------------------------------------- checking

  // Consistency checks used by the simulator and tests.
  function checkInvariants(g) {
    const problems = [];
    const seen = new Map();
    for (const z of ZONES) for (const id of g[z]) {
      if (seen.has(id)) problems.push(`card ${id} is in ${seen.get(id)} and ${z}`);
      seen.set(id, z);
      if (!g.cards[id]) problems.push(`card ${id} in ${z} has no definition`);
    }
    const expected = 8 + 2 * g.crew.length;
    if (seen.size !== expected) problems.push(`expected ${expected} cards, found ${seen.size}`);
    if (Object.keys(g.cards).length !== expected) problems.push(`card table has ${Object.keys(g.cards).length}, expected ${expected}`);
    const people = [...g.market, ...g.marketDeck, ...g.ambitiousAside, ...g.crew, ...g.silenced];
    if (people.length !== 8 || new Set(people).size !== 8) problems.push(`people out of place: ${people.join(',')}`);
    if (g.market.length > 3) problems.push('market has more than 3');
    if (g.pressure < 0 || g.pressure > PRESSURE_MAX) problems.push(`pressure ${g.pressure}`);
    if (g.prep < 0 || g.prep > maxPrep(g)) problems.push(`prep ${g.prep}`);
    for (const s of Object.keys(g.stats)) if (g.stats[s] < 0 || g.stats[s] > STAT_MAX) problems.push(`${s} ${g.stats[s]}`);
    if (g.phase === 'recruit' && (g.pool.money < 0 || g.pool.inf < 0)) problems.push('negative pool');
    if (g.silenced.length > 1 + g.tally.strikes.filter((s) => s.cover).length) problems.push('too many silenced');
    return problems;
  }

  function clone(g) { return JSON.parse(JSON.stringify(g)); }

  return {
    RULES_VERSION, CARD_DEFS, PEOPLE, EMPERORS, BANDS, STAT_NAMES, RIVAL_PAIRS, WILLING, AMBITIOUS,
    FEAST_COST, PRESSURE_MAX, STAT_MAX,
    newGame, strikeInfo, canStrike, strike, chooseCover, push, lieLow, act,
    canAfford, recruit, feastSplits, canFeast, feast, canSilence, silence, endTurn,
    bandOf, maxPrep, isBlade, covers, card, checkInvariants, clone,
  };
});
