// =====================================================================
//  Posiciones de los escenarios de entrenamiento sobre el minimapa.
//  Clave: "<idMapa>:<índice del escenario en data.js>"
//
//  board.allies / board.enemies: [agente, callout]   (agente "?" = desconocido)
//  board.spike:  callout donde está plantada la spike
//  enemyMove:    flechas que se muestran al responder el paso 1 (lo que hará el rival)
//  ourMove:      flechas que se muestran al responder el paso 2 (lo que debemos hacer)
//  Los callouts válidos de cada mapa se ven en index.html#debug=<idMapa>
// =====================================================================
const BOARDS = {
  // ------------------------------ ABYSS
  "abyss:0": {
    board: { allies: [["Jett", "A Main"], ["Sova", "A Lobby"], ["KAY/O", "A Lobby"], ["Omen", "Mid Bottom"], ["Cypher", "B Lobby"]],
             enemies: [["Chamber", "A Tower"], ["Killjoy", "A Site"], ["Omen", "Mid Top"], ["Cypher", "B Site"], ["Sova", "B Site"]] },
    enemyMove: [],
    ourMove: [["A Lobby", "A Tower", "ally"], ["A Main", "A Site", "ally"]]
  },
  "abyss:1": {
    board: { allies: [["Cypher", "B Site"], ["Jett", "B Nest"], ["Omen", "Mid Top"], ["Sova", "A Site"], ["KAY/O", "A Tower"]],
             enemies: [["Jett", "B Main"], ["Sova", "B Main"], ["KAY/O", "B Main"], ["Omen", "B Link"], ["Cypher", "A Lobby"]] },
    enemyMove: [["B Main", "B Site", "enemy"], ["B Link", "B Site", "enemy"]],
    ourMove: [["Mid Top", "B Site", "ally"]]
  },
  // ------------------------------ ASCENT
  "ascent:0": {
    board: { allies: [["Jett", "Mid Market"], ["Sova", "Mid Top"], ["KAY/O", "A Lobby"], ["Omen", "A Lobby"], ["Killjoy", "B Main"]],
             enemies: [["Killjoy", "B Site"], ["Omen", "B Site"], ["Sova", "A Site"], ["Cypher", "A Window"]] },
    enemyMove: [["B Site", "Mid Market", "enemy"]],
    ourMove: [["A Lobby", "A Main", "ally"], ["A Main", "A Site", "ally"], ["Mid Market", "A Tree", "ally"]]
  },
  "ascent:1": {
    board: { allies: [["Jett", "A Site"], ["Sova", "A Window"], ["Omen", "Mid Market"], ["KAY/O", "B Site"], ["Killjoy", "B Site"]],
             enemies: [["Sova", "A Main"], ["Jett", "A Lobby"], ["?", "Mid Bottom"]] },
    enemyMove: [["A Main", "A Site", "enemy"], ["A Lobby", "A Main", "enemy"]],
    ourMove: [["B Site", "Mid Market", "ally"]]
  },
  "ascent:2": {
    board: { allies: [["Jett", "A Main"], ["Sova", "A Tree"], ["KAY/O", "A Garden"], ["Omen", "A Lobby"]],
             enemies: [["Killjoy", "Defender Side Spawn"], ["Omen", "Defender Side Spawn"], ["?", "Mid Market"]], spike: "A Site" },
    enemyMove: [["Defender Side Spawn", "A Site", "enemy"], ["Mid Market", "A Tree", "enemy"]],
    ourMove: []
  },
  // ------------------------------ BIND
  "bind:0": {
    board: { allies: [["Raze", "B Garden"], ["Skye", "B Garden"], ["Brimstone", "B Long"], ["Viper", "B Long"], ["Cypher", "A Short"]],
             enemies: [["Viper", "B Site"], ["Cypher", "B Elbow"], ["Brimstone", "A Site"], ["Skye", "A Lamps"], ["Raze", "A Tower"]] },
    enemyMove: [["A Site", "Defender Side Spawn", "enemy"], ["Defender Side Spawn", "B Hall", "enemy"]],
    ourMove: [["B Garden", "B Site", "ally"], ["B Long", "B Site", "ally"]]
  },
  "bind:1": {
    board: { allies: [["Viper", "B Site"], ["Cypher", "B Window"], ["Raze", "B Hall"], ["Brimstone", "A Site"], ["Skye", "A Tower"]],
             enemies: [["Raze", "A Teleporter"], ["Skye", "A Short"], ["?", "A Lobby"]] },
    enemyMove: [["A Teleporter", "B Teleporter", "enemy"], ["B Teleporter", "B Long", "enemy"]],
    ourMove: [["B Hall", "B Elbow", "ally"]]
  },
  // ------------------------------ BREEZE
  "breeze:0": {
    board: { allies: [["Jett", "Mid Nest"], ["Sova", "A Site"], ["Viper", "A Bridge"], ["Cypher", "B Site"], ["KAY/O", "B Back"]],
             enemies: [["Sova", "Mid Top"], ["Viper", "A Lobby"], ["KAY/O", "Attacker Side Spawn"], ["Jett", "B Main"]] },
    enemyMove: [["Attacker Side Spawn", "B Main", "enemy"], ["B Main", "B Site", "enemy"]],
    ourMove: [["Mid Nest", "Mid Pillar", "ally"]]
  },
  "breeze:1": {
    board: { allies: [["Jett", "A Lobby"], ["Sova", "A Lobby"], ["KAY/O", "Mid Bottom"], ["Viper", "Mid Bottom"], ["Cypher", "B Main"]],
             enemies: [["Jett", "Mid Hall"], ["Sova", "A Site"], ["Viper", "A Pyramids"]] },
    enemyMove: [["Mid Hall", "A Lobby", "enemy"]],
    ourMove: [["Mid Bottom", "Mid Hall", "ally"]]
  },
  // ------------------------------ CORRODE
  "corrode:0": {
    board: { allies: [["Killjoy", "B Site"], ["Viper", "B Tower"], ["Sova", "A Site"], ["Omen", "A Yard"]],
             enemies: [["Jett", "Mid Top"], ["Sova", "Mid Window"], ["Omen", "A Lobby"], ["Viper", "B Lobby"], ["Killjoy", "Attacker Side Spawn"]] },
    enemyMove: [["Mid Window", "A Link", "enemy"], ["A Lobby", "A Main", "enemy"]],
    ourMove: [["A Yard", "A Link", "ally"]]
  },
  // ------------------------------ HAVEN
  "haven:0": {
    board: { allies: [["Breach", "C Garage"], ["Jett", "C Garage"], ["Sova", "C Lobby"], ["Omen", "C Long"], ["Killjoy", "A Lobby"]],
             enemies: [["Killjoy", "C Site"], ["Omen", "B Site"], ["Sova", "A Site"], ["Jett", "A Tower"]] },
    enemyMove: [["B Site", "C Link", "enemy"]],
    ourMove: [["C Garage", "C Site", "ally"], ["C Long", "C Site", "ally"]]
  },
  "haven:1": {
    board: { allies: [["Sova", "A Site"], ["Omen", "B Site"], ["Killjoy", "C Site"], ["Breach", "C Window"]],
             enemies: [["Jett", "A Long"], ["Breach", "A Long"], ["Sova", "A Lobby"], ["Omen", "A Sewer"], ["?", "Mid Courtyard"]] },
    enemyMove: [["A Long", "A Site", "enemy"], ["A Sewer", "A Site", "enemy"]],
    ourMove: [["B Site", "A Link", "ally"]]
  },
  // ------------------------------ ICEBOX
  "icebox:0": {
    board: { allies: [["Killjoy", "B Site"], ["Jett", "B Kitchen"], ["Viper", "Mid Boiler"], ["Sova", "A Site"], ["KAY/O", "A Nest"]],
             enemies: [["Viper", "B Yellow"], ["Sova", "B Yellow"], ["Jett", "B Orange"], ["KAY/O", "B Tube"], ["Killjoy", "A Belt"]] },
    enemyMove: [["B Yellow", "B Site", "enemy"], ["B Orange", "B Site", "enemy"]],
    ourMove: [["Mid Boiler", "B Back", "ally"]]
  },
  // ------------------------------ LOTUS
  "lotus:0": {
    board: { allies: [["Raze", "A Lobby"], ["Fade", "A Lobby"], ["Omen", "B Main"], ["Viper", "B Main"], ["Killjoy", "C Main"]],
             enemies: [["Killjoy", "A Site"], ["Fade", "A Tree"], ["Omen", "B Site"], ["Viper", "C Site"], ["Raze", "C Mound"]] },
    enemyMove: [["B Site", "A Door", "enemy"]],
    ourMove: [["B Main", "B Site", "ally"]]
  },
  // ------------------------------ SPLIT
  "split:0": {
    board: { allies: [["Cypher", "B Site"], ["Sage", "A Ramps"], ["Omen", "A Site"], ["Raze", "A Rafters"]],
             enemies: [["Raze", "Mid Mail"], ["Omen", "Mid Top"], ["Skye", "A Main"], ["Viper", "A Lobby"], ["Cypher", "B Lobby"]] },
    enemyMove: [["Mid Mail", "A Ramps", "enemy"], ["A Main", "A Site", "enemy"]],
    ourMove: [["B Site", "A Rafters", "ally"]]
  },
  // ------------------------------ SUMMIT
  "summit:0": {
    board: { allies: [["Cypher", "B Site"], ["Sova", "A Site"], ["KAY/O", "A Garden"], ["Omen", "Defender Side Spawn"]],
             enemies: [["Jett", "Mid Top"], ["Sova", "Mid Fountain"], ["Omen", "A Lobby"], ["KAY/O", "B Lobby"], ["Cypher", "Attacker Side Spawn"]] },
    enemyMove: [["Mid Fountain", "A Link", "enemy"], ["A Lobby", "A Main", "enemy"]],
    ourMove: [["Defender Side Spawn", "A Link", "ally"], ["B Site", "B Link", "ally"]]
  },
  "summit:1": {
    board: { allies: [["Jett", "B Lobby"], ["Sova", "B Main"], ["KAY/O", "B Main"], ["Omen", "Mid Top"], ["Cypher", "A Lobby"]],
             enemies: [["Cypher", "B Site"], ["Omen", "B Tower"], ["Sova", "A Site"], ["Jett", "Mid Bottom"]] },
    enemyMove: [["Mid Bottom", "B Link", "enemy"]],
    ourMove: [["Mid Top", "A Link", "ally"], ["A Lobby", "A Main", "ally"], ["A Main", "A Site", "ally"]]
  },
  // ------------------------------ SUNSET
  "sunset:0": {
    board: { allies: [["Neon", "A Main"], ["Breach", "A Main"], ["Omen", "A Lobby"], ["Gekko", "Mid Top"], ["Cypher", "B Lobby"]],
             enemies: [["Cypher", "A Site"], ["Omen", "A Elbow"], ["Neon", "B Site"], ["Gekko", "Mid Courtyard"]] },
    enemyMove: [["B Site", "A Link", "enemy"]],
    ourMove: [["Mid Top", "Mid Courtyard", "ally"], ["B Lobby", "B Main", "ally"], ["B Main", "B Site", "ally"]]
  }
};
