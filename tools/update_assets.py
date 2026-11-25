"""Descarga minimapas, iconos de agentes y callouts desde valorant-api.com
y genera assets/assets.js para que la app funcione sin internet.

Uso:  py tools/update_assets.py
"""
import json, os, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets")
MAP_IDS = {  # nombre en valorant-api -> id en data.js
    "Ascent": "ascent", "Bind": "bind", "Breeze": "breeze", "Corrode": "corrode", "Haven": "haven",
    "Icebox": "icebox", "Lotus": "lotus", "Split": "split", "Sunset": "sunset", "Abyss": "abyss",
    "Summit": "summit", "Pearl": "pearl", "Fracture": "fracture",
}
UA = {"User-Agent": "oro-coach-asset-fetcher"}

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        return r.read()

def main():
    os.makedirs(os.path.join(OUT, "maps"), exist_ok=True)
    os.makedirs(os.path.join(OUT, "agents"), exist_ok=True)
    result = {"maps": {}, "agents": {}}

    for m in json.loads(get("https://valorant-api.com/v1/maps"))["data"]:
        mid = MAP_IDS.get(m["displayName"])
        if not mid or not m.get("displayIcon"):
            continue
        path = f"assets/maps/{mid}.png"
        with open(os.path.join(ROOT, path), "wb") as f:
            f.write(get(m["displayIcon"]))
        callouts = {}
        for c in m.get("callouts") or []:
            loc = c["location"]
            # Fórmula de conversión de coordenadas de juego a minimapa (0..1)
            x = loc["y"] * m["xMultiplier"] + m["xScalarToAdd"]
            y = loc["x"] * m["yMultiplier"] + m["yScalarToAdd"]
            name = f'{c["superRegionName"]} {c["regionName"]}'.strip()
            callouts[name] = [round(x, 4), round(y, 4)]
        result["maps"][mid] = {"img": path, "callouts": callouts}
        print("mapa", mid, len(callouts), "callouts")

    for a in json.loads(get("https://valorant-api.com/v1/agents?isPlayableCharacter=true"))["data"]:
        name = a["displayName"]
        fname = name.replace("/", "").lower()
        path = f"assets/agents/{fname}.png"
        with open(os.path.join(ROOT, path), "wb") as f:
            f.write(get(a["displayIcon"]))
        result["agents"][name] = path
    print("agentes", len(result["agents"]))

    with open(os.path.join(OUT, "assets.js"), "w", encoding="utf-8") as f:
        f.write("// Generado por tools/update_assets.py — no editar a mano\n")
        f.write("const ASSETS = " + json.dumps(result, ensure_ascii=False, indent=1) + ";\n")

if __name__ == "__main__":
    main()
