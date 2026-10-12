#!/usr/bin/env node
/*
 * Headless checks for the v0.3 engine.
 *
 *   node play/sim.js            fuzz 5,000 random games, then 5,000 greedy-bot games
 *   node play/sim.js 20000      more games
 *
 * The fuzzer makes random legal moves (including Push, lie low, Feast,
 * silence and strikes) and checks the engine's invariants after every move.
 * The greedy bot is a rough stand-in for a sensible player, to compare with
 * the "about 7 turns, wins about 4 in 5" note in rules.md.
 */
'use strict';
const E = require('./engine.js');

const N = Number(process.argv[2]) || 5000;

function legalMoves(g) {
  const moves = [];
  if (g.phase === 'gameover') return moves;
  if (g.pending) return g.pending.options.map((who) => ['chooseCover', who]);
  if (g.phase === 'start') {
    if (E.canStrike(g)) moves.push(['strike']);
    if (!g.forcedStrike) {
      if (!g.pushed) moves.push(['push'], ['lieLow']);
      if (g.hand.length) for (const id of g.hand) moves.push(['act', id]);
      else moves.push(['act', null]);
    }
  }
  if (g.phase === 'recruit') {
    for (const who of g.market) if (g.recruitsLeft > 0 && E.canAfford(g, who)) moves.push(['recruit', who]);
    if (E.canFeast(g)) for (const s of E.feastSplits(g)) moves.push(['feast', s]);
    moves.push(['endTurn']);
  }
  if (E.canSilence(g)) for (const who of g.crew) moves.push(['silence', who]);
  return moves;
}

function play(g, move) { E[move[0]](g, move[1]); }

function rng(seed) {
  let s = seed | 0;
  return () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), s | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ------------------------------------------------------------------ fuzz

function fuzz(n) {
  let moves = 0, failures = 0;
  const reasons = {};
  for (let i = 0; i < n; i++) {
    const r = rng(i * 7919 + 1);
    const g = E.newGame({ seed: `fuzz-${i}`, emperor: ['habit', 'blind', 'wife'][i % 3] });
    let steps = 0;
    while (g.phase !== 'gameover' && steps < 500) {
      const ms = legalMoves(g);
      if (!ms.length) { failures++; console.error(`seed fuzz-${i}: no legal moves in phase ${g.phase}`); break; }
      // Weight away from silence/lie low so games run long enough to reach late bands.
      const weighted = ms.flatMap((m) => (m[0] === 'silence' || m[0] === 'lieLow' ? [m] : [m, m, m]));
      const m = weighted[Math.floor(r() * weighted.length)];
      try { play(g, m); } catch (e) { failures++; console.error(`seed fuzz-${i}: ${m.join(' ')} threw: ${e.message}`); break; }
      const probs = E.checkInvariants(g);
      if (probs.length) { failures++; console.error(`seed fuzz-${i} after ${m.join(' ')}: ${probs.join('; ')}`); break; }
      steps++; moves++;
    }
    if (g.phase !== 'gameover' && steps >= 500) { failures++; console.error(`seed fuzz-${i}: never ended`); }
    if (g.result) reasons[g.result.reason] = (reasons[g.result.reason] || 0) + 1;
  }
  console.log(`fuzz: ${n} games, ${moves} moves, ${failures} failures. Endings: ${JSON.stringify(reasons)}`);
  return failures;
}

// ------------------------------------------------------------ greedy bot

function personValue(g, who) {
  const P = E.PEOPLE[who];
  const em = E.EMPERORS[g.emperor];
  let v = 0;
  for (const s of em.stats) v += (P.bonus[s] || 0) * 2;
  if (P.role === 'Inside') v += 2;
  if (E.isBlade(g, who)) v += 1.5;
  if (P.role === 'Cover' && E.covers(g).length === 0) v += 1;
  if (g.crew.includes(P.rival)) v -= 1.5;
  if (P.jumpy) v -= 1;
  return v;
}

function bestRecruit(g) {
  let best = null, bestV = 0.5;
  for (const who of g.market) {
    if (!E.canAfford(g, who)) continue;
    const v = personValue(g, who);
    if (v > bestV) { best = who; bestV = v; }
  }
  return best;
}

function scoreAfterAct(g) {
  // How good is the recruit phase this would lead to?
  let score = 0;
  const h = E.clone(g);
  for (let k = 0; k < h.recruitsLeft; k++) {
    const who = bestRecruit(h);
    if (!who) break;
    score += personValue(h, who);
    E.recruit(h, who);
  }
  score += h.prep * 1.2;
  score -= h.pressure * 0.25;
  return score;
}

function greedyTurn(g, stats) {
  if (g.pending) { E.chooseCover(g, g.pending.options[0]); return; }
  if (g.phase === 'start') {
    const info = E.strikeInfo(g);
    if (g.forcedStrike || (info.reaches && (info.chance >= 0.5 || g.pressure >= 14))) { E.strike(g); return; }
    const bad = g.hand.filter((id) => E.card(g, id).bad).length;
    if (bad >= 3) { E.lieLow(g); stats.lieLow++; return; }
    let bestId = null, bestS = -Infinity;
    for (const id of g.hand) {
      const h = E.clone(g);
      E.act(h, id);
      const s = scoreAfterAct(h);
      if (s > bestS) { bestS = s; bestId = id; }
    }
    E.act(g, bestId);
    return;
  }
  if (g.phase === 'recruit') {
    let who;
    while (g.recruitsLeft > 0 && (who = bestRecruit(g))) E.recruit(g, who);
    if (g.recruitsLeft > 0 && E.canFeast(g) && g.pressure >= 12) E.feast(g);
    E.endTurn(g);
  }
}

function greedy(n) {
  const byEmp = {};
  let wins = 0, turns = 0, failures = 0;
  const stats = { lieLow: 0 };
  const endings = {};
  const bands = {};
  for (let i = 0; i < n; i++) {
    const emp = ['habit', 'blind', 'wife'][i % 3];
    const g = E.newGame({ seed: `greedy-${i}`, emperor: emp });
    let steps = 0;
    try {
      while (g.phase !== 'gameover' && steps++ < 300) greedyTurn(g, stats);
    } catch (e) { failures++; console.error(`seed greedy-${i}: ${e.message}`); continue; }
    const p = E.checkInvariants(g);
    if (p.length) { failures++; console.error(`seed greedy-${i}: ${p.join('; ')}`); }
    const b = (byEmp[emp] = byEmp[emp] || { games: 0, wins: 0, turns: 0 });
    b.games++; b.turns += g.result.turn;
    if (g.result.win) { wins++; b.wins++; }
    turns += g.result.turn;
    endings[g.result.reason] = (endings[g.result.reason] || 0) + 1;
    const last = g.tally.strikes[g.tally.strikes.length - 1];
    if (last) bands[last.band] = (bands[last.band] || 0) + 1;
  }
  const pct = (a, b) => `${Math.round((100 * a) / b)}%`;
  console.log(`greedy bot: ${n} games, wins ${pct(wins, n)}, average ${(turns / n).toFixed(1)} turns, ${failures} failures.`);
  for (const [k, b] of Object.entries(byEmp)) console.log(`  ${E.EMPERORS[k].name.padEnd(22)} wins ${pct(b.wins, b.games).padStart(4)}, ${(b.turns / b.games).toFixed(1)} turns`);
  console.log(`  endings ${JSON.stringify(endings)}; last strike band ${JSON.stringify(bands)}; lay low ${stats.lieLow}`);
  return failures;
}

// Determinism: replaying a game's seed (as the UI's Replay button does, with
// the Emperor passed in) and making the same moves gives the same game.
function determinism() {
  let bad = 0;
  for (let i = 0; i < 300; i++) {
    const a = E.newGame(i % 2 ? {} : { seed: `det-${i}` });
    const b = E.newGame({ seed: a.seed, emperor: a.emperor });
    for (let k = 0; k < 60 && a.phase !== 'gameover'; k++) { greedyTurn(a, { lieLow: 0 }); greedyTurn(b, { lieLow: 0 }); }
    if (JSON.stringify(a) !== JSON.stringify(b)) bad++;
  }
  console.log(`determinism: ${bad ? `${bad}/300 replays FAILED` : 'ok (300 replays)'}`);
  return bad;
}

const failures = fuzz(N) + greedy(N) + determinism();
process.exit(failures ? 1 : 0);
