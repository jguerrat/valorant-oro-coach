# Formato de los archivos `maps/<id>.js`

Cada mapa del pool tiene un archivo con todo su contenido de estrategias y entrenamiento.
Valida siempre con:

```
py tools/validate.py <id>
```

## Estructura del archivo

Línea 1 fija. A partir de `=`, **JSON estricto** (comillas dobles, sin comentarios, sin comas finales), y termina en `;`.

```js
window.MAPDATA = window.MAPDATA || {};
MAPDATA["abyss"] = {
  "strategies": [ ... ],
  "scenarios":  [ ... ],
  "rounds": { "attack": { ... }, "defense": { ... } }
};
```

## Board (lo que se dibuja en el minimapa)

```json
{
  "allies":  [["Jett", "A Main"], ["Sova", "A Lobby"]],
  "enemies": [["Killjoy", "A Site"], ["?", "Mid Top"]],
  "spike":   "A Site",
  "smokes":  ["A Tower", "Defender Side Spawn"],
  "arrows":  [["A Lobby", "A Main", "ally"], ["Mid Top", "A Link", "enemy"], ["A Lobby", "A Tower", "util"]]
}
```

- `allies` = **nuestro equipo** (borde azul). `enemies` = rival (borde rojo). Máx. 5 cada uno. Solo aparecen los vivos y los que tiene sentido mostrar (un enemigo no visto puede ser `"?"`).
- Los nombres de agente deben coincidir exactamente con `ASSETS.agents` (p. ej. `"KAY/O"`).
- Los callouts deben ser **exactamente** los de `ASSETS.maps[<id>].callouts` (en `assets/assets.js`). Ver también `index.html#debug=<id>`.
- `arrows`: `ally` = movimiento nuestro (azul), `enemy` = movimiento rival (rojo), `util` = habilidad lanzada (flash, dardo, molly…) (amarillo).
- `smokes`: humos o muros de controlador colocados en ese callout.
- Varios agentes en el mismo callout se separan automáticamente.

## strategies (mín. 2 de Ataque y 2 de Defensa; 3–7 pasos cada una)

```json
{
  "side": "Ataque", "name": "A por Tower + Bridge", "type": "Execute",
  "tip": "Revisa los ángulos elevados antes de mirar el site.",
  "steps": [
    { "text": "Salida: 3 a A Lobby, Omen en Mid Bottom, Cypher vigila B Lobby.", "board": { ... } },
    { "text": "Dardo de Sova a A Site y humos de Omen en A Tower y CT.", "board": { ... } }
  ]
}
```
Cada paso tiene su propio board completo (las posiciones en ese momento).

## scenarios (exactamente 5 de Ataque y 5 de Defensa)

```json
{
  "side": "Ataque", "title": "Defensor en A Tower",
  "situation": "A 1:30 un defensor nos ha hecho daño desde A Tower dos rondas seguidas.",
  "enemy": [ {"t": "Repetirá la misma posición", "pct": 60}, {"t": "Cambiará de ángulo", "pct": 40} ],
  "responses": [
    {"t": "Abrir con flash a Tower antes de asomar", "ok": true,  "why": "..."},
    {"t": "Asomar más rápido", "ok": false, "why": "..."}
  ],
  "board": { ... },
  "enemyMove": [["A Tower", "A Site", "enemy"]],
  "ourMove":   [["A Lobby", "A Main", "ally"]]
}
```
- `enemy`: 2–4 reacciones posibles del rival, `pct` suma 100, sin empate en el máximo. La de mayor `pct` es la respuesta correcta del paso 1.
- `responses`: 2–4 opciones, exactamente una con `ok: true`.
- `enemyMove` se dibuja tras el paso 1 (la reacción más probable); `ourMove` tras el paso 2 (la respuesta correcta).

## rounds — una ronda completa de ataque y otra de defensa (5–8 pasos)

```json
"attack": {
  "side": "Ataque", "title": "Execute A con control de Mid", "strategy": "A por Tower + Bridge",
  "intro": "Ronda de compra completa 5v5. Plan: ...",
  "steps": [
    {
      "time": "1:40", "narration": "Salimos de spawn. ...",
      "board": { ... },
      "question": "¿Qué hacemos primero?",
      "options": [ {"t": "...", "ok": true, "why": "..."}, {"t": "...", "ok": false, "why": "..."} ],
      "result": [["A Lobby", "A Main", "ally"]]
    }
  ],
  "outcome": "Resumen final: por qué la ronda se gana aplicando la estrategia."
}
```
- Los pasos siguen la ronda en orden cronológico (salida → control → ejecución/retraso → plant/retake → post-plant/cierre).
- `result` son las flechas que se dibujan tras responder (lo que pasa al aplicar la opción correcta).
- La situación de cada paso debe ser coherente con el anterior (muertes, posiciones, spike).
