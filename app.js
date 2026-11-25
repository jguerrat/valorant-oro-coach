// ===================== Utilidades =====================
const $app = document.getElementById("app");
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
if (store.get("poolVersion", null) !== POOL_VERSION) { store.set("pool", DEFAULT_POOL); store.set("poolVersion", POOL_VERSION); }
const pool = () => store.get("pool", DEFAULT_POOL);
const poolMaps = () => MAPS.filter(m => pool().includes(m.id));
const hasAssets = typeof ASSETS !== "undefined";

// ---- Normaliza el contenido: maps/<id>.js (si existe) sustituye al de data.js
const MD = window.MAPDATA || {};
const BRD = typeof BOARDS !== "undefined" ? BOARDS : {};
MAPS.forEach(m => {
  const md = MD[m.id];
  if (md) {
    m.strategies = md.strategies; m.scenarios = md.scenarios; m.rounds = md.rounds;
  } else {
    const conv = side => s => ({ ...s, side, steps: s.steps.map(t => ({ text: t })) });
    m.strategies = [...(m.attack || []).map(conv("Ataque")), ...(m.defense || []).map(conv("Defensa"))];
    m.scenarios = (m.scenarios || []).map((s, i) => ({ ...s, ...(BRD[m.id + ":" + i] || {}) }));
    m.rounds = null;
  }
});

function agentChip(name) {
  const role = AGENT_ROLES[name] || "Duelista";
  const img = hasAssets && ASSETS.agents[name];
  const icon = img ? `<img class="aicon r-${role}" src="${img}" alt="">` : `<i class="r-${role}">${esc(name.slice(0, 2))}</i>`;
  return `<span class="agent" title="${role}">${icon}${esc(name)}</span>`;
}
const legend = `<div class="legend">${["Duelista", "Iniciador", "Controlador", "Centinela"].map(r => `<span><span class="dot r-${r}"></span>${r}</span>`).join("")}</div>`;

// ===================== Minimapa =====================
function pos(mapId, callout) {
  const c = hasAssets && ASSETS.maps[mapId] && ASSETS.maps[mapId].callouts[callout];
  if (!c) console.warn("Callout no encontrado:", mapId, callout);
  return c || null;
}
const shortName = n => n.replace("Attacker Side Spawn", "Spawn ATK").replace("Defender Side Spawn", "Spawn DEF")
  .replace("Attacker Side ", "ATK ").replace("Defender Side ", "DEF ");
const showLabels = () => store.get("labels", true);

// board = { allies, enemies, spike, smokes, arrows }   extra = flechas añadidas
function boardHtml(mapId, board, extra = [], caption = "", opts = {}) {
  if (!hasAssets || !ASSETS.maps[mapId]) return "";
  board = board || {};
  const used = {};
  const place = callout => {
    const p = pos(mapId, callout); if (!p) return null;
    const n = used[callout] = (used[callout] || 0) + 1;
    const ang = n * 2.1, r = n === 1 ? 0 : 0.03;
    return [p[0] + Math.cos(ang) * r, p[1] + Math.sin(ang) * r];
  };
  const token = (agent, callout, team) => {
    const p = place(callout); if (!p) return "";
    const img = ASSETS.agents[agent];
    const inner = img ? `<img src="${img}" alt="${esc(agent)}">` : `<b>?</b>`;
    return `<div class="tok ${team}" style="left:${p[0] * 100}%;top:${p[1] * 100}%" title="${esc(agent)} · ${esc(callout)}">${inner}</div>`;
  };
  const line = ([a, b, t]) => {
    const p = pos(mapId, a), q = pos(mapId, b); if (!p || !q) return "";
    return `<line class="arr ${t}" x1="${p[0] * 100}" y1="${p[1] * 100}" x2="${q[0] * 100}" y2="${q[1] * 100}" marker-end="url(#h-${t})"/>`;
  };
  const smokes = (board.smokes || []).map(c => { const p = pos(mapId, c); return p ? `<circle class="smoke" cx="${p[0] * 100}" cy="${p[1] * 100}" r="3.6"/>` : ""; }).join("");
  const labels = (opts.labels ?? showLabels())
    ? Object.entries(ASSETS.maps[mapId].callouts).map(([n, p]) => `<div class="clabel" style="left:${p[0] * 100}%;top:${p[1] * 100}%">${esc(shortName(n))}</div>`).join("") : "";
  const spike = board.spike && pos(mapId, board.spike);
  const hasTokens = (board.allies || []).length || (board.enemies || []).length;
  return `<figure class="board ${opts.big ? "big" : ""}">
    <div class="boardwrap">
      <img class="minimap" src="${ASSETS.maps[mapId].img}" alt="Minimapa">
      ${labels}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>${["ally", "enemy", "util"].map(t => `<marker id="h-${t}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" class="head ${t}"/></marker>`).join("")}</defs>
        ${smokes}${[...(board.arrows || []), ...extra].map(line).join("")}
      </svg>
      ${(board.allies || []).map(([a, c]) => token(a, c, "ally")).join("")}
      ${(board.enemies || []).map(([a, c]) => token(a, c, "enemy")).join("")}
      ${spike ? `<div class="spike" style="left:${spike[0] * 100}%;top:${spike[1] * 100}%" title="Spike">💣</div>` : ""}
    </div>
    <figcaption>
      ${hasTokens ? `<span><span class="lg ally"></span>Tu equipo</span><span><span class="lg enemy"></span>Enemigos</span>
      <span><span class="lg util"></span>Habilidad</span><span><span class="lg smoke"></span>Humo</span>` : ""}
      <label class="lbltoggle"><input type="checkbox" ${showLabels() ? "checked" : ""}> Nombres de zonas</label>
      ${caption ? `<div class="cap">${esc(caption)}</div>` : ""}
    </figcaption>
  </figure>`;
}
document.addEventListener("change", e => {
  if (e.target.closest(".lbltoggle")) { store.set("labels", e.target.checked); render(); }
});

function debugView(mapId) {
  $app.innerHTML = `<h1>Callouts · ${mapId}</h1>` + boardHtml(mapId, {}, [], "", { labels: true, big: true });
}

// ===================== Navegación =====================
const state = { view: "maps", map: null, side: "Ataque", stratStep: {} };
document.querySelectorAll("nav button").forEach(b => b.onclick = () => go(b.dataset.view));
function go(view, extra = {}) {
  Object.assign(state, { view, ...extra });
  document.querySelectorAll("nav button").forEach(b => b.classList.toggle("active", b.dataset.view === (view === "map" ? "maps" : view)));
  render(); window.scrollTo(0, 0);
}
function render() {
  const y = window.scrollY;
  ({ maps: viewMaps, map: viewMap, train: viewTrain, basics: viewBasics, pool: viewPool })[state.view]();
  window.scrollTo(0, y);
}

// ===================== Vista: Mapas =====================
function viewMaps() {
  const maps = poolMaps();
  $app.innerHTML = `
    <h1>Mapas del pool ranked</h1>
    <p class="sub">Elige un mapa para ver sus zonas, composiciones y estrategias de ataque y defensa explicadas sobre el minimapa.</p>
    ${legend}
    <div class="grid">${maps.map(m => `
      <button class="mapcard" style="--c:${m.color}" data-id="${m.id}">
        ${hasAssets && ASSETS.maps[m.id] ? `<img class="thumb" src="${ASSETS.maps[m.id].img}" alt="">` : ""}
        <h3>${m.name}</h3><div class="sites">Sites: ${m.sites}${m.rounds ? " · ronda completa disponible" : ""}</div>
        <div class="mini">${m.comps[0].agents.map(agentChip).join("")}</div>
      </button>`).join("") || `<div class="empty">No hay mapas en tu pool. Actívalos en "Pool ranked".</div>`}
    </div>`;
  $app.querySelectorAll(".mapcard").forEach(c => c.onclick = () => go("map", { map: c.dataset.id }));
}

// ===================== Vista: Detalle de mapa =====================
function strategyCard(m, s, idx) {
  const hasBoards = s.steps.some(p => p.board);
  if (!hasBoards) {
    return `<div class="strat"><span class="tag">${esc(s.type)}</span><h4>${esc(s.name)}</h4>
      <ol>${s.steps.map(x => `<li>${esc(x.text)}</li>`).join("")}</ol><div class="tip">💡 ${esc(s.tip)}</div></div>`;
  }
  const key = m.id + ":" + s.side + ":" + idx;
  const cur = Math.min(state.stratStep[key] || 0, s.steps.length - 1);
  const st = s.steps[cur];
  return `<div class="strat wide" data-key="${key}">
    <div class="stratmap">${boardHtml(m.id, st.board, [], `Paso ${cur + 1} de ${s.steps.length}`)}</div>
    <div class="stratinfo">
      <span class="tag">${esc(s.type)}</span><h4>${esc(s.name)}</h4>
      <ol class="steps">${s.steps.map((p, i) => `<li class="${i === cur ? "cur" : ""}" data-i="${i}">${esc(p.text)}</li>`).join("")}</ol>
      <div class="stepnav">
        <button class="btn ghost" data-nav="-1" ${cur === 0 ? "disabled" : ""}>← Anterior</button>
        <button class="btn" data-nav="1" ${cur === s.steps.length - 1 ? "disabled" : ""}>Siguiente →</button>
      </div>
      <div class="tip">💡 ${esc(s.tip)}</div>
    </div></div>`;
}

function viewMap() {
  const m = MAPS.find(x => x.id === state.map);
  const list = m.strategies.filter(s => s.side === state.side);
  $app.innerHTML = `
    <button class="back">← Volver a mapas</button>
    <div class="maphead" style="--c:${m.color}"><h1>${m.name}</h1><p class="sub">${esc(m.desc)}</p></div>

    <div class="overview">
      <div>${boardHtml(m.id, {}, [], "", { labels: true })}</div>
      <div>
        <h2 style="margin-top:0">Composiciones recomendadas</h2>
        ${legend}
        ${m.comps.map(c => `<div class="comp"><h4>${esc(c.name)}${c.wr ? ` <span class="cstat">${c.wr}% victorias · ${c.pick}% selección</span>` : ""}</h4><div class="agents">${c.agents.map(agentChip).join("")}</div><p>${esc(c.why)}</p></div>`).join("")}
        <p class="csrc">${m.comps[0].source ? `Fuente: ${esc(m.comps[0].source)}. Son estimaciones editoriales de ValoHub, no datos medidos de partidas.` : "ValoHub no publica composiciones para este mapa: son recomendaciones propias."}</p>
      </div>
    </div>

    <h2>Estrategias</h2>
    <div class="sidetoggle">
      <button class="atk ${state.side === "Ataque" ? "on" : ""}" data-side="Ataque">⚔ Ataque</button>
      <button class="def ${state.side === "Defensa" ? "on" : ""}" data-side="Defensa">🛡 Defensa</button>
    </div>
    <div class="strats">${list.map((s, i) => strategyCard(m, s, i)).join("")}</div>

    <h2>Practica este mapa</h2>
    <div class="row">
      <button class="btn" id="trainMap">Situaciones de ${m.name} (${m.scenarios.length})</button>
      ${m.rounds ? `<button class="btn ghost" data-round="attack">⚔ Ronda completa de ataque</button>
      <button class="btn ghost" data-round="defense">🛡 Ronda completa de defensa</button>` : ""}
    </div>`;
  $app.querySelector(".back").onclick = () => go("maps");
  $app.querySelectorAll(".sidetoggle button").forEach(b => b.onclick = () => { state.side = b.dataset.side; render(); });
  $app.querySelectorAll(".strat.wide").forEach(card => {
    const key = card.dataset.key;
    const n = card.querySelectorAll(".steps li").length;
    card.querySelectorAll(".steps li").forEach(li => li.onclick = () => { state.stratStep[key] = +li.dataset.i; render(); });
    card.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => {
      state.stratStep[key] = Math.max(0, Math.min(n - 1, (state.stratStep[key] || 0) + +b.dataset.nav)); render();
    });
  });
  $app.querySelector("#trainMap").onclick = () => { Object.assign(train, { mode: "sit", filterMap: m.id, filterSide: "all", deck: null }); go("train"); };
  $app.querySelectorAll("[data-round]").forEach(b => b.onclick = () => { train.mode = "round"; startRound(m.id, b.dataset.round); go("train"); });
}

// ===================== Vista: Entrenamiento =====================
const train = { mode: "sit", filterMap: "all", filterSide: "all", deck: null, idx: 0, pick1: null, pick2: null, order: null, round: null };
const emptyStats = () => ({ pred: [0, 0], resp: [0, 0], log: [] });

function buildDeck() {
  const maps = train.filterMap === "all" ? poolMaps() : MAPS.filter(m => m.id === train.filterMap);
  const all = [];
  maps.forEach(m => m.scenarios.forEach(s => {
    if (train.filterSide === "all" || s.side === train.filterSide) all.push({ ...s, map: m });
  }));
  train.deck = shuffle(all); train.idx = 0; resetStep();
}
function resetStep() { train.pick1 = null; train.pick2 = null; train.order = null; }

function viewTrain() {
  const tabs = `<div class="modetabs">
      <button data-mode="sit" class="${train.mode === "sit" ? "on" : ""}">🎯 Situaciones</button>
      <button data-mode="round" class="${train.mode === "round" ? "on" : ""}">🎬 Ronda completa</button></div>`;
  $app.innerHTML = `<h1>Sesión de entrenamiento</h1>${tabs}<div id="tbody"></div>`;
  $app.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => { train.mode = b.dataset.mode; render(); });
  const box = $app.querySelector("#tbody");
  if (train.mode === "round") viewRound(box); else viewSituations(box);
}

function viewSituations(box) {
  if (!train.deck) buildDeck();
  const stats = store.get("stats", emptyStats());
  const s = train.deck[train.idx];
  const opts = poolMaps().map(m => `<option value="${m.id}" ${train.filterMap === m.id ? "selected" : ""}>${m.name}</option>`).join("");

  let body = `<div class="empty">No hay escenarios con estos filtros.</div>`;
  if (s) {
    if (!train.order) train.order = shuffle(s.responses.map((_, i) => i));
    const best = s.enemy.reduce((b, e, i) => e.pct > s.enemy[b].pct ? i : b, 0);
    const answered1 = train.pick1 !== null, answered2 = train.pick2 !== null;

    const enemyHtml = s.enemy.map((e, i) => {
      const cls = answered1 ? (i === best ? "good" : i === train.pick1 ? "wrong" : "") : "";
      return `<button class="opt ${cls}" data-e="${i}" ${answered1 ? "disabled" : ""}>
        <div class="bar" style="width:${answered1 ? e.pct : 0}%"></div>
        <span>${esc(e.t)}</span>${answered1 ? `<span class="pct">${e.pct}%</span>` : ""}</button>`;
    }).join("");

    let step2 = "";
    if (answered1) {
      const fb1 = train.pick1 === best
        ? `<div class="feedback ok">✅ Bien leído. Es la reacción más frecuente en este rango.</div>`
        : `<div class="feedback ko">❌ Lo más probable era: <b>${esc(s.enemy[best].t)}</b> (${s.enemy[best].pct}%).</div>`;
      const respHtml = train.order.map(i => {
        const r = s.responses[i];
        const cls = answered2 ? (r.ok ? "good" : i === train.pick2 ? "wrong" : "") : "";
        return `<button class="opt ${cls}" data-r="${i}" ${answered2 ? "disabled" : ""}><span>${esc(r.t)}</span></button>`;
      }).join("");
      let fb2 = "";
      if (answered2) {
        const r = s.responses[train.pick2], good = s.responses.find(x => x.ok);
        fb2 = r.ok ? `<div class="feedback ok">✅ ${esc(r.why)}</div>`
                   : `<div class="feedback ko">❌ ${esc(r.why)}<br><br>👉 Mejor opción: <b>${esc(good.t)}</b> — ${esc(good.why)}</div>`;
        fb2 += `<div style="margin-top:14px"><button class="btn" id="next">Siguiente escenario →</button></div>`;
      }
      step2 = `${fb1}<div class="step"><h4>Paso 2 · ¿Qué debemos hacer nosotros?</h4>${respHtml}${fb2}</div>`;
    }

    const extra = [...(answered1 ? s.enemyMove || [] : []), ...(answered2 ? s.ourMove || [] : [])];
    const cap = answered2 ? "Flechas: reacción del rival (rojo) y nuestra jugada (azul)" : answered1 ? "Flechas rojas: lo que hará el rival" : "Situación actual";
    const mapFig = s.board ? boardHtml(s.map.id, s.board, extra, cap) : "";
    body = `<div class="scene"><div class="cols"><div>${mapFig}</div><div>
      <div class="meta"><span class="pill" style="background:${s.map.color};color:#111">${s.map.name}</span>
        <span class="pill ${s.side === "Ataque" ? "atk" : "def"}">${s.side}</span>
        <span class="pill">Escenario ${train.idx + 1}/${train.deck.length}</span></div>
      <h3 style="margin:4px 0">${esc(s.title)}</h3>
      <p class="situation">${esc(s.situation)}</p>
      <div class="step"><h4>Paso 1 · ¿Qué es lo más probable que haga el enemigo?</h4>${enemyHtml}</div>
      ${step2}</div></div></div>`;
  }

  const pct = ([a, b]) => b ? Math.round(a / b * 100) + "%" : "—";
  box.innerHTML = `
    <p class="sub">Lee la situación en el mapa, predice la reacción más probable del rival y elige la respuesta correcta.</p>
    <div class="trainbar">
      <select id="fMap"><option value="all">Todos los mapas del pool</option>${opts}</select>
      <select id="fSide">
        <option value="all" ${train.filterSide === "all" ? "selected" : ""}>Ataque y defensa</option>
        <option value="Ataque" ${train.filterSide === "Ataque" ? "selected" : ""}>Solo ataque</option>
        <option value="Defensa" ${train.filterSide === "Defensa" ? "selected" : ""}>Solo defensa</option>
      </select>
      <button class="btn ghost" id="restart">↻ Barajar</button>
      <div class="score"><span>Lectura del rival <b>${pct(stats.pred)}</b></span><span>Decisiones <b>${pct(stats.resp)}</b></span></div>
    </div>
    ${body}${historyHtml(stats)}`;

  box.querySelector("#fMap").onchange = e => { train.filterMap = e.target.value; buildDeck(); render(); };
  box.querySelector("#fSide").onchange = e => { train.filterSide = e.target.value; buildDeck(); render(); };
  box.querySelector("#restart").onclick = () => { buildDeck(); render(); };
  const resetBtn = box.querySelector("#resetStats");
  if (resetBtn) resetBtn.onclick = e => { e.preventDefault(); store.set("stats", emptyStats()); render(); };
  if (!s) return;
  const best = s.enemy.reduce((bi, e, i) => e.pct > s.enemy[bi].pct ? i : bi, 0);
  box.querySelectorAll("[data-e]").forEach(b => b.onclick = () => {
    train.pick1 = +b.dataset.e;
    const st = store.get("stats", emptyStats());
    st.pred[1]++; if (train.pick1 === best) st.pred[0]++;
    store.set("stats", st); render();
  });
  box.querySelectorAll("[data-r]").forEach(b => b.onclick = () => {
    train.pick2 = +b.dataset.r;
    const st = store.get("stats", emptyStats());
    const ok = s.responses[train.pick2].ok;
    st.resp[1]++; if (ok) st.resp[0]++;
    st.log.unshift({ map: s.map.name, side: s.side, title: s.title, p: train.pick1 === best, r: ok });
    st.log = st.log.slice(0, 15);
    store.set("stats", st); render();
  });
  const nx = box.querySelector("#next");
  if (nx) nx.onclick = () => { train.idx++; resetStep(); if (train.idx >= train.deck.length) buildDeck(); render(); window.scrollTo(0, 0); };
}

function historyHtml(st) {
  if (!st.log.length) return "";
  return `<div class="history"><b>Últimos escenarios</b> · <a href="#" id="resetStats" style="color:var(--muted)">borrar historial</a>
    <table><tr><th>Mapa</th><th>Lado</th><th>Escenario</th><th>Lectura</th><th>Decisión</th></tr>
    ${st.log.map(l => `<tr><td>${esc(l.map)}</td><td>${l.side}</td><td>${esc(l.title)}</td><td>${l.p ? "✅" : "❌"}</td><td>${l.r ? "✅" : "❌"}</td></tr>`).join("")}
    </table></div>`;
}

// ---------- Ronda completa ----------
function startRound(mapId, side) {
  train.round = { mapId, side, idx: 0, pick: null, order: null, hits: 0, done: false };
}
function viewRound(box) {
  const roundMaps = poolMaps().filter(m => m.rounds);
  if (!roundMaps.length) { box.innerHTML = `<div class="empty">Ningún mapa del pool tiene rondas completas todavía.</div>`; return; }
  if (!train.round || !roundMaps.some(m => m.id === train.round.mapId)) startRound(roundMaps[0].id, "attack");
  const R = train.round, m = MAPS.find(x => x.id === R.mapId), rd = m.rounds[R.side];
  const best = store.get("roundBest", {});
  const bkey = m.id + ":" + R.side;

  const bar = `<p class="sub">Sigue una ronda entera aplicando una estrategia. En cada momento de la ronda decides qué hacer.</p>
    <div class="trainbar">
      <select id="rMap">${roundMaps.map(x => `<option value="${x.id}" ${x.id === m.id ? "selected" : ""}>${x.name}</option>`).join("")}</select>
      <div class="sidetoggle" style="margin:0">
        <button class="atk ${R.side === "attack" ? "on" : ""}" data-rs="attack">⚔ Ataque</button>
        <button class="def ${R.side === "defense" ? "on" : ""}" data-rs="defense">🛡 Defensa</button>
      </div>
      <button class="btn ghost" id="rRestart">↻ Reiniciar ronda</button>
      <div class="score"><span>Mejor resultado <b>${best[bkey] != null ? best[bkey] + "/" + rd.steps.length : "—"}</b></span></div>
    </div>`;

  let body;
  if (R.done) {
    const n = rd.steps.length;
    const grade = R.hits === n ? "🏆 Ronda perfecta" : R.hits >= n * 0.7 ? "👍 Ronda ganada" : R.hits >= n * 0.4 ? "⚠ Ronda muy ajustada" : "❌ Ronda perdida";
    const last = rd.steps[n - 1];
    body = `<div class="scene"><div class="cols"><div>${boardHtml(m.id, last.board, last.result || [], "Final de la ronda")}</div><div>
      <div class="meta"><span class="pill" style="background:${m.color};color:#111">${m.name}</span><span class="pill ${R.side === "attack" ? "atk" : "def"}">${rd.side}</span></div>
      <h3>${grade}</h3>
      <p class="situation">Has acertado <b>${R.hits} de ${n}</b> decisiones.</p>
      <div class="feedback ok">📋 <b>Así se gana aplicando la estrategia:</b><br>${esc(rd.outcome)}</div>
      <div class="row" style="margin-top:14px">
        <button class="btn" id="rAgain">Repetir ronda</button>
        <button class="btn ghost" id="rOther">Hacer la de ${R.side === "attack" ? "defensa" : "ataque"} →</button>
      </div></div></div></div>`;
  } else {
    const st = rd.steps[R.idx];
    if (!R.order) R.order = shuffle(st.options.map((_, i) => i));
    const answered = R.pick !== null;
    const optHtml = R.order.map(i => {
      const o = st.options[i];
      const cls = answered ? (o.ok ? "good" : i === R.pick ? "wrong" : "") : "";
      return `<button class="opt ${cls}" data-o="${i}" ${answered ? "disabled" : ""}><span>${esc(o.t)}</span></button>`;
    }).join("");
    let fb = "";
    if (answered) {
      const o = st.options[R.pick], good = st.options.find(x => x.ok);
      fb = o.ok ? `<div class="feedback ok">✅ ${esc(o.why)}</div>`
                : `<div class="feedback ko">❌ ${esc(o.why)}<br><br>👉 Lo correcto: <b>${esc(good.t)}</b> — ${esc(good.why)}</div>`;
      fb += `<div style="margin-top:14px"><button class="btn" id="rNext">${R.idx === rd.steps.length - 1 ? "Ver resultado de la ronda" : "Siguiente momento →"}</button></div>`;
    }
    const timeline = rd.steps.map((_, i) => `<span class="tl ${i < R.idx ? "past" : i === R.idx ? "now" : ""}"></span>`).join("");
    body = `
      ${R.idx === 0 && !answered ? `<div class="intro"><b>${esc(rd.title)}</b> · Estrategia: ${esc(rd.strategy)}<br>${esc(rd.intro)}</div>` : ""}
      <div class="scene"><div class="cols"><div>${boardHtml(m.id, st.board, answered ? st.result || [] : [], answered ? "Flechas: lo que pasa al aplicar la decisión correcta" : "Momento actual de la ronda")}</div><div>
        <div class="meta"><span class="pill" style="background:${m.color};color:#111">${m.name}</span>
          <span class="pill ${R.side === "attack" ? "atk" : "def"}">${rd.side}</span>
          <span class="pill">⏱ ${esc(st.time)}</span><span class="pill">Momento ${R.idx + 1}/${rd.steps.length}</span></div>
        <div class="timeline">${timeline}</div>
        <p class="situation">${esc(st.narration)}</p>
        <div class="step"><h4>${esc(st.question)}</h4>${optHtml}${fb}</div>
      </div></div></div>`;
  }
  box.innerHTML = bar + body;

  box.querySelector("#rMap").onchange = e => { startRound(e.target.value, R.side); render(); };
  box.querySelectorAll("[data-rs]").forEach(b => b.onclick = () => { startRound(m.id, b.dataset.rs); render(); });
  box.querySelector("#rRestart").onclick = () => { startRound(m.id, R.side); render(); };
  box.querySelectorAll("[data-o]").forEach(b => b.onclick = () => {
    R.pick = +b.dataset.o; if (rd.steps[R.idx].options[R.pick].ok) R.hits++; render();
  });
  const nx = box.querySelector("#rNext");
  if (nx) nx.onclick = () => {
    if (R.idx === rd.steps.length - 1) {
      R.done = true;
      const b = store.get("roundBest", {}); b[bkey] = Math.max(b[bkey] || 0, R.hits); store.set("roundBest", b);
    } else { R.idx++; R.pick = null; R.order = null; }
    render(); window.scrollTo(0, 0);
  };
  const again = box.querySelector("#rAgain"); if (again) again.onclick = () => { startRound(m.id, R.side); render(); };
  const other = box.querySelector("#rOther"); if (other) other.onclick = () => { startRound(m.id, R.side === "attack" ? "defense" : "attack"); render(); };
}

// ===================== Vista: Fundamentos =====================
function viewBasics() {
  $app.innerHTML = `<h1>Fundamentos para llegar a Oro</h1>
    <p class="sub">Las estrategias solo funcionan si el equipo cumple esto.</p>
    <div class="basics">${FUNDAMENTOS.map(f => `<div class="basic"><h4>${esc(f.t)}</h4><p>${esc(f.d)}</p></div>`).join("")}</div>`;
}

// ===================== Vista: Pool =====================
function viewPool() {
  const p = pool();
  $app.innerHTML = `<h1>Pool de mapas ranked</h1>
    <p class="sub">Riot rota los mapas cada acto. Marca los que están ahora en competitivo (lo ves en la pestaña Jugar del juego). Se guarda en este navegador.</p>
    <div class="poollist">${MAPS.map(m => `<label class="poolitem">
      <input type="checkbox" value="${m.id}" ${p.includes(m.id) ? "checked" : ""}>
      ${hasAssets && ASSETS.maps[m.id] ? `<img class="pthumb" src="${ASSETS.maps[m.id].img}" alt="">` : ""}
      <div><b>${m.name}</b><div class="pagents">${m.comps[0].agents.map(a => hasAssets && ASSETS.agents[a] ? `<img src="${ASSETS.agents[a]}" title="${esc(a)}" alt="${esc(a)}">` : "").join("")}</div></div>
    </label>`).join("")}</div>
    <div style="margin-top:16px"><button class="btn ghost" id="def">Restaurar por defecto</button></div>`;
  $app.querySelectorAll("input").forEach(i => i.onchange = () => {
    store.set("pool", [...$app.querySelectorAll("input:checked")].map(x => x.value)); train.deck = null; train.filterMap = "all";
  });
  $app.querySelector("#def").onclick = () => { store.set("pool", DEFAULT_POOL); train.deck = null; render(); };
}

const dbg = location.hash.match(/debug=(\w+)/);
if (dbg) debugView(dbg[1]); else render();
