"""Valida los archivos de contenido maps/<id>.js

Uso:  py tools/validate.py            (valida todos)
      py tools/validate.py abyss      (valida uno)

Formato de maps/<id>.js — la segunda línea en adelante debe ser JSON ESTRICTO
(comillas dobles, sin comas finales, sin comentarios):

  window.MAPDATA = window.MAPDATA || {};
  MAPDATA["<id>"] = { ...JSON... };

Board (posiciones sobre el minimapa):
  { "allies":  [["Jett","A Main"], ...],     # máx 5, nombre de agente exacto
    "enemies": [["Sova","A Site"], ["?","Mid Top"]],   # "?" = desconocido
    "spike":   "A Site",                      # opcional
    "smokes":  ["A Tower", "Mid Top"],         # opcional: humos/muros
    "arrows":  [["A Lobby","A Main","ally"]]   # tipos: ally | enemy | util
  }
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def load_assets():
    s = open(os.path.join(ROOT, "assets", "assets.js"), encoding="utf-8").read()
    return json.loads(s[s.index("{"): s.rindex("}") + 1])

def load_map(mid):
    s = open(os.path.join(ROOT, "maps", f"{mid}.js"), encoding="utf-8").read()
    m = re.search(r'MAPDATA\["(\w+)"\]\s*=\s*(\{.*\})\s*;\s*$', s, re.S)
    if not m: raise ValueError('No encuentro  MAPDATA["id"] = {...};')
    if m.group(1) != mid: raise ValueError(f"id {m.group(1)} != nombre de archivo {mid}")
    return json.loads(m.group(2))

def validate(mid, A):
    errs = []
    E = errs.append
    callouts = set(A["maps"][mid]["callouts"])
    agents = set(A["agents"]) | {"?"}
    try:
        d = load_map(mid)
    except Exception as e:
        return [f"JSON inválido: {e}"]

    def co(c, where):
        if c not in callouts: E(f"{where}: callout desconocido '{c}'")
    def arrows(lst, where):
        for a in lst or []:
            if not (isinstance(a, list) and len(a) == 3): E(f"{where}: flecha mal formada {a}"); continue
            co(a[0], where); co(a[1], where)
            if a[2] not in ("ally", "enemy", "util"): E(f"{where}: tipo de flecha '{a[2]}'")
    def board(b, where):
        if not isinstance(b, dict): E(f"{where}: falta board"); return
        for k in ("allies", "enemies"):
            lst = b.get(k, [])
            if len(lst) > 5: E(f"{where}: más de 5 {k}")
            for ag, c in lst:
                if ag not in agents: E(f"{where}: agente desconocido '{ag}'")
                co(c, where)
        if b.get("spike"): co(b["spike"], where)
        for s in b.get("smokes", []): co(s, where)
        arrows(b.get("arrows"), where)
    def text(x, where):
        if not isinstance(x, str) or len(x.strip()) < 3: E(f"{where}: texto vacío")

    # Estrategias
    st = d.get("strategies", [])
    for side in ("Ataque", "Defensa"):
        n = sum(1 for s in st if s.get("side") == side)
        if n < 2: E(f"strategies: {n} de {side}, mínimo 2")
    for i, s in enumerate(st):
        w = f"strategies[{i}]"
        for k in ("name", "type", "tip"): text(s.get(k), f"{w}.{k}")
        if s.get("side") not in ("Ataque", "Defensa"): E(f"{w}: side inválido")
        steps = s.get("steps", [])
        if not 3 <= len(steps) <= 7: E(f"{w}: {len(steps)} pasos (3-7)")
        for j, p in enumerate(steps):
            text(p.get("text"), f"{w}.steps[{j}].text"); board(p.get("board"), f"{w}.steps[{j}]")

    # Escenarios
    sc = d.get("scenarios", [])
    for side in ("Ataque", "Defensa"):
        n = sum(1 for s in sc if s.get("side") == side)
        if n != 5: E(f"scenarios: {n} de {side}, deben ser 5")
    for i, s in enumerate(sc):
        w = f"scenarios[{i}]"
        if s.get("side") not in ("Ataque", "Defensa"): E(f"{w}: side inválido")
        text(s.get("title"), f"{w}.title"); text(s.get("situation"), f"{w}.situation")
        en = s.get("enemy", [])
        if not 2 <= len(en) <= 4: E(f"{w}: enemy debe tener 2-4 opciones")
        if sum(e.get("pct", 0) for e in en) != 100: E(f"{w}: los pct de enemy no suman 100")
        pcts = [e.get("pct", 0) for e in en]
        if pcts and pcts.count(max(pcts)) > 1: E(f"{w}: empate en el pct máximo")
        rs = s.get("responses", [])
        if not 2 <= len(rs) <= 4: E(f"{w}: responses debe tener 2-4 opciones")
        if sum(1 for r in rs if r.get("ok")) != 1: E(f"{w}: debe haber exactamente 1 response ok")
        for r in rs: text(r.get("t"), w); text(r.get("why"), w)
        board(s.get("board"), w); arrows(s.get("enemyMove"), w + ".enemyMove"); arrows(s.get("ourMove"), w + ".ourMove")

    # Rondas completas
    rd = d.get("rounds", {})
    for key, side in (("attack", "Ataque"), ("defense", "Defensa")):
        r = rd.get(key)
        w = f"rounds.{key}"
        if not r: E(f"{w}: falta"); continue
        if r.get("side") != side: E(f"{w}: side debe ser {side}")
        for k in ("title", "strategy", "intro"): text(r.get(k), f"{w}.{k}")
        steps = r.get("steps", [])
        if not 5 <= len(steps) <= 8: E(f"{w}: {len(steps)} pasos (5-8)")
        for j, p in enumerate(steps):
            ww = f"{w}.steps[{j}]"
            for k in ("time", "narration", "question"): text(p.get(k), f"{ww}.{k}")
            board(p.get("board"), ww)
            arrows(p.get("result"), ww + ".result")
            op = p.get("options", [])
            if not 2 <= len(op) <= 4: E(f"{ww}: 2-4 options")
            if sum(1 for o in op if o.get("ok")) != 1: E(f"{ww}: exactamente 1 option ok")
            for o in op: text(o.get("t"), ww); text(o.get("why"), ww)
        text(r.get("outcome"), f"{w}.outcome")
    return errs

def main():
    A = load_assets()
    ids = sys.argv[1:] or sorted(f[:-3] for f in os.listdir(os.path.join(ROOT, "maps")) if f.endswith(".js"))
    total = 0
    for mid in ids:
        errs = validate(mid, A)
        total += len(errs)
        print(f"{mid}: {'OK' if not errs else str(len(errs)) + ' errores'}")
        for e in errs[:40]: print("   -", e)
    sys.exit(1 if total else 0)

if __name__ == "__main__":
    main()
