window.MAPDATA = window.MAPDATA || {};
MAPDATA["bind"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "Default con control de Hookah",
   "type": "Default",
   "tip": "Hookah (B Garden) es la llave de Bind: si la ganáis sin bajas, B cae casi solo. No ejecutéis sin ella.",
   "steps": [
    {
     "text": "Salida default: Raze y Skye a B Link para Hookah, Viper a B Fountain para B Long, Brimstone en A Link y Cypher en A Lobby con trampa cubriendo el flanco.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Link"
       ],
       [
        "Skye",
        "B Link"
       ],
       [
        "Viper",
        "B Fountain"
       ],
       [
        "Brimstone",
        "A Link"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Garden"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Short"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "B Link",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "B Fountain",
        "ally"
       ],
       [
        "Attacker Side Cave",
        "A Link",
        "ally"
       ],
       [
        "Attacker Side Cave",
        "A Lobby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Viper levanta el muro desde B Long hacia B Window para cortar la visión de Hookah desde el site. Skye manda el perro a Hookah.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Short"
       ],
       [
        "Skye",
        "B Short"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "A Link"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Garden"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Short"
       ]
      ],
      "smokes": [
       "B Window"
      ],
      "arrows": [
       [
        "B Fountain",
        "B Long",
        "ally"
       ],
       [
        "B Long",
        "B Window",
        "util"
       ],
       [
        "B Short",
        "B Garden",
        "util"
       ],
       [
        "B Link",
        "B Short",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Raze lanza granada a Hookah y entra con Skye detrás para el trade. Viper aguanta B Long y mira B Elbow.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Garden"
       ],
       [
        "Skye",
        "B Short"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "A Link"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Hall"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Short"
       ]
      ],
      "smokes": [
       "B Window"
      ],
      "arrows": [
       [
        "B Short",
        "B Garden",
        "util"
       ],
       [
        "B Short",
        "B Garden",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Con Hookah tomada, Brimstone rota por B Link y prepara humos en B Hall y B Elbow. Cypher se queda en A Lobby cortando el flanco por Showers.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Garden"
       ],
       [
        "Skye",
        "B Garden"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "B Link"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Hall"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ]
      ],
      "smokes": [
       "B Hall",
       "B Elbow"
      ],
      "arrows": [
       [
        "A Link",
        "B Link",
        "ally"
       ],
       [
        "B Link",
        "B Hall",
        "util"
       ],
       [
        "B Link",
        "B Elbow",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Execute: flash de Skye sobre el site, entrada por Hookah y B Long a la vez. Plant en default y post-plant desde Hookah y Long.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Site"
       ],
       [
        "Skye",
        "B Garden"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "B Short"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "Defender Side Spawn"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Hall",
       "B Elbow"
      ],
      "arrows": [
       [
        "B Garden",
        "B Site",
        "util"
       ],
       [
        "B Garden",
        "B Site",
        "ally"
       ],
       [
        "B Long",
        "B Site",
        "ally"
       ],
       [
        "A Site",
        "Defender Side Spawn",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "Execute A por Showers + Main",
   "type": "Execute",
   "tip": "Fumad A Tower y CT al mismo tiempo que entráis: un humo tarde es una muerte segura desde Tower.",
   "steps": [
    {
     "text": "Control de Showers: Raze y Skye en A Link, Brimstone y Cypher en A Lobby. Viper empieza en B Link para dar ruido e info y luego rota.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Link"
       ],
       [
        "Skye",
        "A Link"
       ],
       [
        "Brimstone",
        "A Lobby"
       ],
       [
        "Cypher",
        "A Lobby"
       ],
       [
        "Viper",
        "B Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Short"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Cave",
        "A Link",
        "ally"
       ],
       [
        "Attacker Side Cave",
        "A Lobby",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "B Link",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Perro de Skye por Showers y granada de Raze a A Cubby. Raze toma A Short. Cypher pone trampa en A Link para cubrir la espalda.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Short"
       ],
       [
        "Skye",
        "A Link"
       ],
       [
        "Brimstone",
        "A Lobby"
       ],
       [
        "Cypher",
        "A Lobby"
       ],
       [
        "Viper",
        "B Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Cubby"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ]
      ],
      "arrows": [
       [
        "A Link",
        "A Short",
        "util"
       ],
       [
        "A Short",
        "A Cubby",
        "util"
       ],
       [
        "A Link",
        "A Short",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Brimstone fuma A Tower, A Lamps y la salida de CT (Defender Side Spawn). Viper rota a A Link; Cypher y Brimstone avanzan a A Bath.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Short"
       ],
       [
        "Skye",
        "A Short"
       ],
       [
        "Brimstone",
        "A Bath"
       ],
       [
        "Cypher",
        "A Bath"
       ],
       [
        "Viper",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ],
       [
        "?",
        "A Lamps"
       ]
      ],
      "smokes": [
       "A Tower",
       "A Lamps",
       "Defender Side Spawn"
      ],
      "arrows": [
       [
        "B Link",
        "A Link",
        "ally"
       ],
       [
        "A Lobby",
        "A Bath",
        "ally"
       ],
       [
        "A Lobby",
        "A Tower",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez: flash de Skye por encima de Showers, Raze entra con satchel por A Cubby y Cypher + Brimstone por Main (A Bath).",
     "board": {
      "allies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Skye",
        "A Cubby"
       ],
       [
        "Brimstone",
        "A Bath"
       ],
       [
        "Cypher",
        "A Bath"
       ],
       [
        "Viper",
        "A Short"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ]
      ],
      "smokes": [
       "A Tower",
       "A Lamps",
       "Defender Side Spawn"
      ],
      "arrows": [
       [
        "A Short",
        "A Site",
        "util"
       ],
       [
        "A Cubby",
        "A Site",
        "ally"
       ],
       [
        "A Bath",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant en default. Post-plant: Viper con molly de lineup desde A Short, Skye en A Cubby, Brimstone y Cypher en A Bath. Nadie se queda encima de la spike.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Lamps"
       ],
       [
        "Skye",
        "A Cubby"
       ],
       [
        "Brimstone",
        "A Bath"
       ],
       [
        "Cypher",
        "A Bath"
       ],
       [
        "Viper",
        "A Short"
       ]
      ],
      "enemies": [
       [
        "?",
        "Defender Side Spawn"
       ],
       [
        "?",
        "A Tower"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Defender Side Spawn",
        "A Site",
        "enemy"
       ],
       [
        "A Short",
        "A Site",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "Fake B Long + split A por teletransportador",
   "type": "Split",
   "tip": "El fake solo funciona si suena de verdad: utilidad y pasos en B. El resto, en silencio (andando) hasta la llamada.",
   "steps": [
    {
     "text": "A 1:20, Viper y Raze hacen ruido en B Long: muro hacia B Elbow y granada al site. Skye, Brimstone y Cypher esperan andando en A Link y A Lobby.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Long"
       ],
       [
        "Raze",
        "B Fountain"
       ],
       [
        "Skye",
        "A Link"
       ],
       [
        "Brimstone",
        "A Lobby"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Garden"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Short"
       ]
      ],
      "smokes": [
       "B Elbow"
      ],
      "arrows": [
       [
        "B Long",
        "B Elbow",
        "util"
       ],
       [
        "B Fountain",
        "B Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Los defensores de A rotan hacia B por spawn y B Hall. Raze usa el teletransportador de B Short y aparece en A Exit. Viper sigue haciendo ruido en Long.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Long"
       ],
       [
        "Raze",
        "A Exit"
       ],
       [
        "Skye",
        "A Link"
       ],
       [
        "Brimstone",
        "A Lobby"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Hall"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "Defender Side Spawn"
       ]
      ],
      "smokes": [
       "B Elbow"
      ],
      "arrows": [
       [
        "B Fountain",
        "B Short",
        "ally"
       ],
       [
        "B Short",
        "A Exit",
        "ally"
       ],
       [
        "A Site",
        "Defender Side Spawn",
        "enemy"
       ],
       [
        "Defender Side Spawn",
        "B Hall",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Brimstone fuma A Tower y CT; Skye flashea por Showers y entramos por A Short y A Bath a la vez contra el único defensor que queda.",
     "board": {
      "allies": [
       [
        "Skye",
        "A Short"
       ],
       [
        "Raze",
        "A Bath"
       ],
       [
        "Brimstone",
        "A Lobby"
       ],
       [
        "Cypher",
        "A Bath"
       ],
       [
        "Viper",
        "B Long"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Lamps"
       ]
      ],
      "smokes": [
       "A Tower",
       "Defender Side Spawn"
      ],
      "arrows": [
       [
        "A Short",
        "A Site",
        "util"
       ],
       [
        "A Short",
        "A Site",
        "ally"
       ],
       [
        "A Bath",
        "A Site",
        "ally"
       ],
       [
        "A Exit",
        "A Bath",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant rápido en A. Viper hace de lurk: cuando los rotadores vuelven de B por Hall, entra en B Site y les cae por la espalda.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Skye",
        "A Cubby"
       ],
       [
        "Brimstone",
        "A Bath"
       ],
       [
        "Cypher",
        "A Bath"
       ],
       [
        "Viper",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Hall"
       ],
       [
        "?",
        "Defender Side Spawn"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "B Hall",
        "Defender Side Spawn",
        "enemy"
       ],
       [
        "B Long",
        "B Site",
        "ally"
       ],
       [
        "B Site",
        "B Hall",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Setup 2-1-2 con Cypher en B",
   "type": "Setup",
   "tip": "Nadie se pica solo: el primero que ve contacto avisa, retrasa con utilidad y espera la rotación por spawn, no por el teletransportador.",
   "steps": [
    {
     "text": "Posiciones: Cypher en B Site (trampa en Hookah, cámara a B Long), Viper en B Elbow, Raze en A Lamps de rotadora, Skye en A Site y Brimstone en A Tower.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Elbow"
       ],
       [
        "Raze",
        "A Lamps"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Fountain"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "B Site",
        "B Garden",
        "util"
       ],
       [
        "B Site",
        "B Long",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Info temprana: Skye manda el perro a Showers a 1:30, Viper tiene la molly lista para B Long y Raze juega cerca del teletransportador de A.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Elbow"
       ],
       [
        "Raze",
        "A Teleporter"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Short"
       ],
       [
        "?",
        "B Long"
       ],
       [
        "?",
        "B Link"
       ]
      ],
      "arrows": [
       [
        "A Site",
        "A Short",
        "util"
       ],
       [
        "B Elbow",
        "B Long",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Contacto en B: salta la trampa de Hookah. Cypher y Viper retrasan con mollys y la nube de Viper en B Window. Raze rota por spawn hacia B Hall.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Elbow"
       ],
       [
        "Raze",
        "Defender Side Spawn"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Garden"
       ],
       [
        "?",
        "B Long"
       ],
       [
        "?",
        "B Long"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "smokes": [
       "B Window"
      ],
      "arrows": [
       [
        "A Teleporter",
        "Defender Side Spawn",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "B Hall",
        "ally"
       ],
       [
        "B Short",
        "B Garden",
        "enemy"
       ],
       [
        "B Elbow",
        "B Long",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Si entran igualmente, Cypher y Viper se retiran vivos a B Hall. Retake con Raze y humos de Brimstone en Hookah y Elbow. Skye se queda en A vigilando el teletransportador.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Hall"
       ],
       [
        "Viper",
        "B Hall"
       ],
       [
        "Raze",
        "B Hall"
       ],
       [
        "Brimstone",
        "Defender Side Spawn"
       ],
       [
        "Skye",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Garden"
       ],
       [
        "?",
        "B Long"
       ],
       [
        "?",
        "B Elbow"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Garden",
       "B Elbow"
      ],
      "arrows": [
       [
        "B Hall",
        "B Site",
        "ally"
       ],
       [
        "B Hall",
        "B Site",
        "util"
       ],
       [
        "A Tower",
        "Defender Side Spawn",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake A desde CT y Tower",
   "type": "Retake",
   "tip": "Juntaos antes de entrar y entrad con utilidad. El defuse dura 7 s: con 15 s de spike aún da tiempo si limpiáis bien.",
   "steps": [
    {
     "text": "Han plantado en A tras matar a Skye. Brimstone y Raze se retiran a CT (Defender Side Spawn); Cypher y Viper llegan desde B por B Hall.",
     "board": {
      "allies": [
       [
        "Brimstone",
        "Defender Side Spawn"
       ],
       [
        "Raze",
        "Defender Side Spawn"
       ],
       [
        "Cypher",
        "B Hall"
       ],
       [
        "Viper",
        "B Hall"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Cubby"
       ],
       [
        "?",
        "A Bath"
       ],
       [
        "?",
        "A Short"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "B Hall",
        "Defender Side Spawn",
        "ally"
       ],
       [
        "A Tower",
        "Defender Side Spawn",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Nos juntamos los 4 en CT. Brimstone fuma A Bath y A Cubby para aislar el site de los post-plants de Main y Showers.",
     "board": {
      "allies": [
       [
        "Brimstone",
        "Defender Side Spawn"
       ],
       [
        "Raze",
        "Defender Side Spawn"
       ],
       [
        "Cypher",
        "Defender Side Spawn"
       ],
       [
        "Viper",
        "Defender Side Spawn"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Cubby"
       ],
       [
        "?",
        "A Bath"
       ],
       [
        "?",
        "A Short"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Bath",
       "A Cubby"
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "A Bath",
        "util"
       ],
       [
        "Defender Side Spawn",
        "A Cubby",
        "util"
       ],
       [
        "B Hall",
        "Defender Side Spawn",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Viper lanza molly a la spike para mover al que la juega; Raze granada al site. Raze y Cypher entran por A Tower, Viper y Brimstone por A Lamps.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Tower"
       ],
       [
        "Cypher",
        "A Tower"
       ],
       [
        "Viper",
        "A Lamps"
       ],
       [
        "Brimstone",
        "A Lamps"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Short"
       ],
       [
        "?",
        "A Bath"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Bath",
       "A Cubby"
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "A Tower",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Lamps",
        "ally"
       ],
       [
        "A Tower",
        "A Site",
        "util"
       ],
       [
        "A Lamps",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Crossfire desde Tower y Lamps: tradeamos cada duelo. Con el site limpio, Brimstone fuma encima de la spike y Viper defusa mientras Raze mira A Short.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Cypher",
        "A Tower"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Brimstone",
        "A Lamps"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Short"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Site",
       "A Bath"
      ],
      "arrows": [
       [
        "A Tower",
        "A Site",
        "ally"
       ],
       [
        "A Site",
        "A Short",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Push de Hookah con info",
   "type": "Agresión",
   "tip": "Una vez por mitad como mucho y siempre con info. Si lo repetís, en Oro os lo castigan con granadas a Hookah.",
   "steps": [
    {
     "text": "Setup: Raze en B Window, Cypher en B Site con cámara a B Long, Viper en B Elbow; Skye en A Site y Brimstone en A Tower.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Window"
       ],
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Elbow"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Fountain"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "B Site",
        "B Long",
        "util"
       ]
      ]
     }
    },
    {
     "text": "A 1:35, antes de que lleguen: Viper fuma la salida de B Short y Raze y Viper toman Hookah (B Garden) en silencio.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Garden"
       ],
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Garden"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Link"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "smokes": [
       "B Short"
      ],
      "arrows": [
       [
        "B Window",
        "B Garden",
        "ally"
       ],
       [
        "B Elbow",
        "B Garden",
        "ally"
       ],
       [
        "B Garden",
        "B Short",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Raze tira granada y paquete hacia B Link para sacar daño y un pick. Cypher pasa a B Elbow y deja trampa mirando B Long.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Garden"
       ],
       [
        "Cypher",
        "B Elbow"
       ],
       [
        "Viper",
        "B Garden"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Link"
       ],
       [
        "?",
        "B Link"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "smokes": [
       "B Short"
      ],
      "arrows": [
       [
        "B Garden",
        "B Link",
        "util"
       ],
       [
        "B Site",
        "B Elbow",
        "ally"
       ],
       [
        "B Elbow",
        "B Long",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Antes de 1:15 volvemos: Raze a B Site, Viper a B Elbow, Cypher deja trampa en Hookah. Hemos ganado tiempo y daño sin regalar a nadie.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Site"
       ],
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Elbow"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Link"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "B Garden",
        "B Site",
        "ally"
       ],
       [
        "B Garden",
        "B Elbow",
        "ally"
       ],
       [
        "B Site",
        "B Garden",
        "util"
       ]
      ]
     }
    }
   ]
  }
 ],
 "scenarios": [
  {
   "side": "Ataque",
   "title": "Hookah tomada sin bajas",
   "situation": "1:10. Hemos ganado Hookah (B Garden) sin bajas y Viper controla B Long. Brimstone está en B Link con los humos listos.",
   "enemy": [
    {
     "t": "Rotan 1-2 jugadores de A por spawn hacia B Hall",
     "pct": 50
    },
    {
     "t": "Uno usa el teletransportador de A para flanquear por B Long",
     "pct": 25
    },
    {
     "t": "Se retiran a B Hall y juegan retake",
     "pct": 25
    }
   ],
   "responses": [
    {
     "t": "Ejecutar B ya, con humos en B Hall y B Elbow y flash de Skye",
     "ok": true,
     "why": "Cortas la rotación por Hall antes de que llegue; desde A tardan mucho en llegar."
    },
    {
     "t": "Esperar a 0:40 para ver rotaciones",
     "ok": false,
     "why": "Les regalas el tiempo justo para que lleguen por spawn y os esperen en Hall."
    },
    {
     "t": "Mandar a todos por el teletransportador a A",
     "ok": false,
     "why": "Tiras el control de Hookah que tanto ha costado ganar."
    }
   ],
   "board": {
    "allies": [
     [
      "Raze",
      "B Garden"
     ],
     [
      "Skye",
      "B Garden"
     ],
     [
      "Viper",
      "B Long"
     ],
     [
      "Brimstone",
      "B Link"
     ],
     [
      "Cypher",
      "A Lobby"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "B Hall"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "A Tower"
     ]
    ],
    "smokes": [
     "B Window"
    ]
   },
   "enemyMove": [
    [
     "A Site",
     "Defender Side Spawn",
     "enemy"
    ],
    [
     "Defender Side Spawn",
     "B Hall",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Link",
     "B Hall",
     "util"
    ],
    [
     "B Garden",
     "B Site",
     "ally"
    ],
    [
     "B Long",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Post-plant en A 4v3",
   "situation": "Hemos plantado en A default 4v3. Se oyen 2 defensores en CT (Defender Side Spawn) y uno no se sabe dónde está.",
   "enemy": [
    {
     "t": "Retake juntos por A Tower y A Lamps",
     "pct": 55
    },
    {
     "t": "Uno entra solo a buscar duelo",
     "pct": 30
    },
    {
     "t": "Esperan y buscan un defuse ninja",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Crossfire desde A Short, A Cubby y A Bath, molly de Viper guardada para el defuse",
     "ok": true,
     "why": "Les obligas a entrar a tus ángulos y la molly corta el defuse sin que tengas que asomar."
    },
    {
     "t": "Ir a buscarlos a A Tower",
     "ok": false,
     "why": "Pierdes la ventaja de posición y les das duelos con trade fácil."
    },
    {
     "t": "Los 4 encima de la spike",
     "ok": false,
     "why": "Una granada o una ulti os barre a todos y no tenéis crossfire."
    }
   ],
   "board": {
    "allies": [
     [
      "Raze",
      "A Cubby"
     ],
     [
      "Skye",
      "A Short"
     ],
     [
      "Brimstone",
      "A Bath"
     ],
     [
      "Cypher",
      "A Bath"
     ]
    ],
    "enemies": [
     [
      "?",
      "Defender Side Spawn"
     ],
     [
      "?",
      "Defender Side Spawn"
     ],
     [
      "?",
      "A Tower"
     ]
    ],
    "spike": "A Site"
   },
   "enemyMove": [
    [
     "Defender Side Spawn",
     "A Tower",
     "enemy"
    ],
    [
     "Defender Side Spawn",
     "A Lamps",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Short",
     "A Site",
     "util"
    ],
    [
     "A Cubby",
     "A Site",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Ronda eco con pistolas",
   "situation": "Hemos perdido la pistola y vamos en eco (Classic, Sheriff, algún Shorty). Los defensores llevan rifles y escudos.",
   "enemy": [
    {
     "t": "Juegan su setup estándar 2-1-2",
     "pct": 50
    },
    {
     "t": "Alguno empuja a buscar picks gratis",
     "pct": 30
    },
    {
     "t": "Apilan en un site por intuición",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Los 5 juntos a A Short (Showers) a corta distancia, con toda la utilidad",
     "ok": true,
     "why": "En Showers las peleas son a 2 metros: ahí la pistola compite con el rifle y podéis tradear entre todos."
    },
    {
     "t": "Duelos largos en B Long",
     "ok": false,
     "why": "A distancia el rifle gana siempre; regalas el arma al rival."
    },
    {
     "t": "Cada uno a una zona a buscar picks",
     "ok": false,
     "why": "Sin trades, un eco separado muere uno a uno sin sacar nada."
    }
   ],
   "board": {
    "allies": [
     [
      "Raze",
      "A Link"
     ],
     [
      "Skye",
      "A Link"
     ],
     [
      "Brimstone",
      "A Link"
     ],
     [
      "Viper",
      "A Link"
     ],
     [
      "Cypher",
      "A Lobby"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Short"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "A Tower"
     ],
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "B Garden"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Lamps",
     "A Short",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Link",
     "A Short",
     "ally"
    ],
    [
     "A Short",
     "A Cubby",
     "ally"
    ],
    [
     "A Link",
     "A Cubby",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "El fake de B ha funcionado",
   "situation": "0:55. Viper y Raze han hecho ruido en B Long. Se oyen pasos rotando por B Hall. Los otros 3 esperamos en A Link y A Lobby.",
   "enemy": [
    {
     "t": "Han rotado 2 desde A hacia B",
     "pct": 55
    },
    {
     "t": "Solo ha rotado 1",
     "pct": 30
    },
    {
     "t": "No ha rotado nadie, era un reposicionamiento",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Ejecutar A ya: humos en A Tower y CT, flash por Showers y Raze por el teletransportador",
     "ok": true,
     "why": "La ventana del fake dura segundos: si esperas, los rotadores vuelven."
    },
    {
     "t": "Esperar a tener más información",
     "ok": false,
     "why": "Cada segundo de espera devuelve un defensor a A; el fake se pierde."
    },
    {
     "t": "Volver todos a B porque hay ruido allí",
     "ok": false,
     "why": "Entras justo donde han rotado: vas al stack."
    }
   ],
   "board": {
    "allies": [
     [
      "Viper",
      "B Long"
     ],
     [
      "Raze",
      "B Fountain"
     ],
     [
      "Skye",
      "A Link"
     ],
     [
      "Brimstone",
      "A Lobby"
     ],
     [
      "Cypher",
      "A Lobby"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Hall"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "A Tower"
     ]
    ],
    "smokes": [
     "B Elbow"
    ]
   },
   "enemyMove": [
    [
     "A Site",
     "Defender Side Spawn",
     "enemy"
    ],
    [
     "Defender Side Spawn",
     "B Hall",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Link",
     "A Short",
     "ally"
    ],
    [
     "A Lobby",
     "A Bath",
     "ally"
    ],
    [
     "A Lobby",
     "A Tower",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Clutch 1v2 con spike en B",
   "situation": "Spike plantada en B. Solo quedas tú (Raze) en Hookah con la granada. Oyes a 2 defensores bajar por B Hall a falta de 25 s.",
   "enemy": [
    {
     "t": "Uno tapa y el otro defusa",
     "pct": 55
    },
    {
     "t": "Entran los dos a buscarte a Hookah",
     "pct": 30
    },
    {
     "t": "Uno flanquea por B Long",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Esconderte en un ángulo raro de Hookah, esperar el sonido del defuse y lanzar granada a la spike",
     "ok": true,
     "why": "Obligas a soltar el defuse y peleas contra uno distraído en vez de contra dos preparados."
    },
    {
     "t": "Salir a pelear a B Hall",
     "ok": false,
     "why": "Es un 1v2 con desventaja de posición: es justo lo que quieren."
    },
    {
     "t": "Quedarte asomado en B Window mirando la spike",
     "ok": false,
     "why": "Es el primer ángulo que limpian; te matan antes de que empiece el defuse."
    }
   ],
   "board": {
    "allies": [
     [
      "Raze",
      "B Garden"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Hall"
     ],
     [
      "?",
      "B Hall"
     ]
    ],
    "spike": "B Site"
   },
   "enemyMove": [
    [
     "B Hall",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Garden",
     "B Site",
     "util"
    ],
    [
     "B Garden",
     "B Window",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Suena el teletransportador",
   "situation": "Juegas B. A 1:00 suena el teletransportador: alguien acaba de salir por el de B, junto a B Long.",
   "enemy": [
    {
     "t": "Es un jugador que viene a flanquear B",
     "pct": 55
    },
    {
     "t": "Es un fake para mover rotaciones",
     "pct": 45
    }
   ],
   "responses": [
    {
     "t": "Viper vigila la salida del teletransportador y Cypher mantiene Hookah",
     "ok": true,
     "why": "No abandonas tu posición pero cubres la amenaza nueva."
    },
    {
     "t": "Correr los dos a la salida del teletransportador",
     "ok": false,
     "why": "Dejas Hookah y Long abiertos; el teletransportador se usa mucho para fakes."
    },
    {
     "t": "Pedir que rote todo A porque seguro es un fake",
     "ok": false,
     "why": "Si es real, B queda 2v1 y A vacío sin información."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Viper",
      "B Elbow"
     ],
     [
      "Raze",
      "A Lamps"
     ],
     [
      "Skye",
      "A Site"
     ],
     [
      "Brimstone",
      "A Tower"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Teleporter"
     ],
     [
      "?",
      "A Short"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Teleporter",
     "B Long",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Elbow",
     "B Long",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake de B 4v4",
   "situation": "Han rusheado B, Cypher ha muerto y la spike está plantada. Quedamos 4: Viper en B Hall, el resto saliendo de spawn.",
   "enemy": [
    {
     "t": "Juegan crossfire: site, Hookah y Long",
     "pct": 50
    },
    {
     "t": "Se quedan los 4 dentro del site",
     "pct": 30
    },
    {
     "t": "Uno se va a cazar rotaciones a Hall",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Juntar a los 4 en B Hall y entrar con humos en Hookah y Elbow y flash de Skye",
     "ok": true,
     "why": "Un retake 4v4 junto y con utilidad casi siempre gana; por separado se pierde."
    },
    {
     "t": "Entrar cada uno según llega",
     "ok": false,
     "why": "Es un 1v4 repetido cuatro veces."
    },
    {
     "t": "Ir por el teletransportador de A a B Long",
     "ok": false,
     "why": "Tarda más, haces ruido y llegas solo por detrás."
    }
   ],
   "board": {
    "allies": [
     [
      "Viper",
      "B Hall"
     ],
     [
      "Raze",
      "Defender Side Spawn"
     ],
     [
      "Skye",
      "Defender Side Spawn"
     ],
     [
      "Brimstone",
      "Defender Side Spawn"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "B Garden"
     ],
     [
      "?",
      "B Long"
     ],
     [
      "?",
      "B Elbow"
     ]
    ],
    "spike": "B Site"
   },
   "enemyMove": [
    [
     "B Garden",
     "B Window",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Defender Side Spawn",
     "B Hall",
     "ally"
    ],
    [
     "B Hall",
     "B Garden",
     "util"
    ],
    [
     "B Hall",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Rush a Showers repetido",
   "situation": "Las dos últimas rondas los atacantes han rusheado A Short (Showers) antes de 1:30 con Jett.",
   "enemy": [
    {
     "t": "Repetirán el rush a Showers",
     "pct": 55
    },
    {
     "t": "Cambian a B",
     "pct": 30
    },
    {
     "t": "Hacen ruido en A y van a B",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Utilidad a Showers al primer sonido (molly de Brimstone, flash de Skye) y jugar retrasado en Lamps y Tower",
     "ok": true,
     "why": "Castigas el rush sin pelear a 2 metros contra una Jett."
    },
    {
     "t": "Empujar a A Short para encontrarles antes",
     "ok": false,
     "why": "Peleas en su terreno contra 5 juntos."
    },
    {
     "t": "Poner 4 en A",
     "ok": false,
     "why": "Si cambian a B, el site cae gratis."
    }
   ],
   "board": {
    "allies": [
     [
      "Raze",
      "A Lamps"
     ],
     [
      "Skye",
      "A Site"
     ],
     [
      "Brimstone",
      "A Tower"
     ],
     [
      "Cypher",
      "B Site"
     ],
     [
      "Viper",
      "B Elbow"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "A Link"
     ],
     [
      "?",
      "A Link"
     ],
     [
      "?",
      "A Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Link",
     "A Short",
     "enemy"
    ],
    [
     "A Short",
     "A Cubby",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Tower",
     "A Short",
     "util"
    ],
    [
     "A Site",
     "A Cubby",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Pick en B Long, 5v4",
   "situation": "1:25. Viper mata a un atacante en B Long desde B Elbow. Estamos 5v4.",
   "enemy": [
    {
     "t": "Evitan B y van a A por A Link",
     "pct": 50
    },
    {
     "t": "Vuelven a B con toda la utilidad",
     "pct": 35
    },
    {
     "t": "Dejan un lurk en B Long",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Viper cambia de ángulo y Raze queda lista para rotar",
     "ok": true,
     "why": "Ya saben dónde estás; con ventaja numérica, juega pasivo y deja que vengan."
    },
    {
     "t": "Empujar B Long a por más picks",
     "ok": false,
     "why": "Arriesgar con 5v4 es el error clásico: les devuelves la ronda."
    },
    {
     "t": "Rotar 2 a A ya",
     "ok": false,
     "why": "Es solo una suposición: si vuelven a B, quedas en inferioridad."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Viper",
      "B Elbow"
     ],
     [
      "Raze",
      "A Lamps"
     ],
     [
      "Skye",
      "A Site"
     ],
     [
      "Brimstone",
      "A Tower"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Fountain"
     ],
     [
      "?",
      "B Link"
     ],
     [
      "?",
      "A Lobby"
     ],
     [
      "?",
      "A Link"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Fountain",
     "B Link",
     "enemy"
    ],
    [
     "B Link",
     "A Link",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Elbow",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Ronda 2: el rival va en eco",
   "situation": "Ganamos la pistola. En la ronda 2 los atacantes van con pistolas y Shorty; nosotros con Spectre y escudos.",
   "enemy": [
    {
     "t": "Rush corto a Hookah o Showers los 5",
     "pct": 55
    },
    {
     "t": "Se dividen a buscar picks",
     "pct": 30
    },
    {
     "t": "Ahorran y apenas pelean",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Jugar a distancia, no asomar a corta en Hookah ni Showers y retrasar con utilidad barata",
     "ok": true,
     "why": "Su única opción es pelear cerca; si les obligas a cruzar distancia, la Spectre gana."
    },
    {
     "t": "Empujar Hookah con Spectre",
     "ok": false,
     "why": "A corta un Shorty o un Sheriff te mata y les das tu arma."
    },
    {
     "t": "Gastar las ultis para asegurar",
     "ok": false,
     "why": "Las necesitarás en la ronda 3, cuando compren."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Viper",
      "B Elbow"
     ],
     [
      "Raze",
      "A Lamps"
     ],
     [
      "Skye",
      "A Site"
     ],
     [
      "Brimstone",
      "A Tower"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Link"
     ],
     [
      "?",
      "B Link"
     ],
     [
      "?",
      "B Link"
     ],
     [
      "?",
      "A Link"
     ],
     [
      "?",
      "A Link"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Short",
     "B Garden",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Site",
     "B Hall",
     "ally"
    ],
    [
     "B Elbow",
     "B Garden",
     "util"
    ]
   ]
  }
 ],
 "rounds": {
  "attack": {
   "side": "Ataque",
   "title": "Default con Hookah y execute B",
   "strategy": "Default con control de Hookah",
   "intro": "Ronda 5, compra completa 5v5. Rivales: Jett, Sova, Omen, Killjoy y Sage. Plan: ganar Hookah, mantener presión en A y ejecutar B con humos.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Salimos de spawn con compra completa.",
     "board": {
      "allies": [
       [
        "Raze",
        "Attacker Side Spawn"
       ],
       [
        "Skye",
        "Attacker Side Spawn"
       ],
       [
        "Brimstone",
        "Attacker Side Spawn"
       ],
       [
        "Viper",
        "Attacker Side Spawn"
       ],
       [
        "Cypher",
        "Attacker Side Spawn"
       ]
      ],
      "enemies": []
     },
     "question": "¿Cómo repartimos la salida?",
     "options": [
      {
       "t": "Raze y Skye a B Link, Viper a B Fountain, Brimstone a A Link y Cypher a A Lobby",
       "ok": true,
       "why": "Presión en todo el mapa sin perder el objetivo: Hookah."
      },
      {
       "t": "Los 5 directos a Hookah",
       "ok": false,
       "why": "Os comen con una granada y no hay info del resto."
      },
      {
       "t": "Los 5 a A sin plan",
       "ok": false,
       "why": "Abandonas el plan y Hookah queda para ellos."
      }
     ],
     "result": [
      [
       "Attacker Side Spawn",
       "B Link",
       "ally"
      ],
      [
       "Attacker Side Spawn",
       "B Fountain",
       "ally"
      ],
      [
       "Attacker Side Cave",
       "A Link",
       "ally"
      ],
      [
       "Attacker Side Cave",
       "A Lobby",
       "ally"
      ]
     ]
    },
    {
     "time": "1:25",
     "narration": "Viper levanta el muro hacia B Window. El perro de Skye marca a la Jett en Hookah.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Short"
       ],
       [
        "Skye",
        "B Short"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "A Link"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Garden"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ]
      ],
      "smokes": [
       "B Window"
      ],
      "arrows": [
       [
        "B Short",
        "B Garden",
        "util"
       ]
      ]
     },
     "question": "La Jett está marcada en Hookah. ¿Qué hace Raze?",
     "options": [
      {
       "t": "Granada a Hookah y entrar con Skye detrás para el trade",
       "ok": true,
       "why": "Aprovechas la marca: la Jett tiene que moverse o comerse el daño."
      },
      {
       "t": "Esperar a que la Jett salga",
       "ok": false,
       "why": "La marca dura poco y pierdes el timing."
      },
      {
       "t": "Asomar sin utilidad",
       "ok": false,
       "why": "Duelo 50/50 contra una Jett preparada."
      }
     ],
     "result": [
      [
       "B Short",
       "B Garden",
       "util"
      ],
      [
       "B Short",
       "B Garden",
       "ally"
      ]
     ]
    },
    {
     "time": "1:12",
     "narration": "Raze mata a la Jett. 5v4 y Hookah es nuestro.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Garden"
       ],
       [
        "Skye",
        "B Garden"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "A Link"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ],
       [
        "?",
        "A Short"
       ]
      ],
      "smokes": [
       "B Window"
      ]
     },
     "question": "Hookah tomada. ¿Qué hacen Brimstone y Cypher?",
     "options": [
      {
       "t": "Brimstone rota a B Link para los humos; Cypher se queda en A Lobby con trampa en A Link",
       "ok": true,
       "why": "Llevas los humos a B y mantienes el flanco cubierto."
      },
      {
       "t": "Los dos rotan a B",
       "ok": false,
       "why": "Showers queda abierto para un flanco por la espalda."
      },
      {
       "t": "Ejecutar ya sin humos",
       "ok": false,
       "why": "Desde B Hall y Elbow os ven entrar a todos."
      }
     ],
     "result": [
      [
       "A Link",
       "B Link",
       "ally"
      ],
      [
       "A Lobby",
       "A Link",
       "util"
      ]
     ]
    },
    {
     "time": "0:58",
     "narration": "La trampa de Cypher atrapa al Sova que salía por Showers y Cypher lo mata. 5v3.",
     "board": {
      "allies": [
       [
        "Raze",
        "B Garden"
       ],
       [
        "Skye",
        "B Garden"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "B Link"
       ],
       [
        "Cypher",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Tower"
       ]
      ]
     },
     "question": "¿Cuándo ejecutamos B?",
     "options": [
      {
       "t": "Ahora: humos en B Hall y B Elbow, flash de Skye y entrada por Hookah y Long",
       "ok": true,
       "why": "Con ventaja y timing, cada segundo extra es tiempo para que roten."
      },
      {
       "t": "Esperar más picks",
       "ok": false,
       "why": "Ya tienes ventaja; esperar solo ayuda a la defensa."
      },
      {
       "t": "Cambiar a A porque Sova venía de allí",
       "ok": false,
       "why": "Hookah ya es tuyo; tirarlo es empezar de cero."
      }
     ],
     "result": [
      [
       "B Link",
       "B Hall",
       "util"
      ],
      [
       "B Link",
       "B Elbow",
       "util"
      ],
      [
       "B Garden",
       "B Site",
       "util"
      ],
      [
       "B Garden",
       "B Site",
       "ally"
      ],
      [
       "B Long",
       "B Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:45",
     "narration": "Raze muere contra Killjoy pero Skye hace el trade. Plantamos en B default. 4v2.",
     "board": {
      "allies": [
       [
        "Skye",
        "B Site"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "B Garden"
       ],
       [
        "Cypher",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "Defender Side Spawn"
       ],
       [
        "?",
        "A Site"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Hall",
       "B Elbow"
      ]
     },
     "question": "Spike plantada 4v2. ¿Posiciones de post-plant?",
     "options": [
      {
       "t": "Skye a B Window, Viper en B Long con molly de lineup, Brimstone en Hookah y Cypher por A Short hacia Lamps para cortar la rotación",
       "ok": true,
       "why": "Crossfire sobre la spike y un jugador a su espalda."
      },
      {
       "t": "Los cuatro dentro del site",
       "ok": false,
       "why": "Una ulti o granada os barre a todos."
      },
      {
       "t": "Ir a buscarlos a B Hall",
       "ok": false,
       "why": "Pierdes la ventaja de defender la spike."
      }
     ],
     "result": [
      [
       "B Site",
       "B Window",
       "ally"
      ],
      [
       "A Link",
       "A Short",
       "ally"
      ],
      [
       "A Short",
       "A Lamps",
       "ally"
      ]
     ]
    },
    {
     "time": "0:30",
     "narration": "Omen y Sage bajan juntos por B Hall. Omen fuma la ventana de Hookah (B Window).",
     "board": {
      "allies": [
       [
        "Skye",
        "B Window"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "B Garden"
       ],
       [
        "Cypher",
        "A Lamps"
       ]
      ],
      "enemies": [
       [
        "Omen",
        "B Hall"
       ],
       [
        "Sage",
        "B Hall"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Window"
      ]
     },
     "question": "Han fumado B Window. ¿Qué hacemos?",
     "options": [
      {
       "t": "Jugar el tiempo: Viper lanza la molly de lineup al oír el defuse y Cypher les cae por la espalda",
       "ok": true,
       "why": "No necesitas el duelo, solo cortar el defuse."
      },
      {
       "t": "Asomar los tres a B Hall",
       "ok": false,
       "why": "Vas a sus ángulos con humo en medio."
      },
      {
       "t": "Cypher se mete solo en el site",
       "ok": false,
       "why": "Lo matan antes de que llegue el resto."
      }
     ],
     "result": [
      [
       "B Long",
       "B Site",
       "util"
      ],
      [
       "A Lamps",
       "Defender Side Spawn",
       "ally"
      ],
      [
       "Defender Side Spawn",
       "B Hall",
       "ally"
      ]
     ]
    },
    {
     "time": "0:15",
     "narration": "Sage empieza el defuse, la molly la obliga a soltarlo y Brimstone la mata. Queda Omen 4v1.",
     "board": {
      "allies": [
       [
        "Skye",
        "B Window"
       ],
       [
        "Viper",
        "B Long"
       ],
       [
        "Brimstone",
        "B Garden"
       ],
       [
        "Cypher",
        "B Hall"
       ]
      ],
      "enemies": [
       [
        "Omen",
        "B Site"
       ]
      ],
      "spike": "B Site"
     },
     "question": "4v1 con poca spike restante. ¿Qué hacemos?",
     "options": [
      {
       "t": "Nadie busca duelo: crossfire sobre la spike y Cypher cierra desde Hall",
       "ok": true,
       "why": "Omen tiene que defusar delante de todos; el tiempo juega a tu favor."
      },
      {
       "t": "Los cuatro a por Omen",
       "ok": false,
       "why": "Le regalas duelos uno a uno y una posible remontada."
      },
      {
       "t": "Rotar a A a guardar armas",
       "ok": false,
       "why": "Abandonas una ronda ganada."
      }
     ],
     "result": [
      [
       "B Hall",
       "B Site",
       "ally"
      ],
      [
       "B Garden",
       "B Site",
       "util"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: el control de Hookah dio el primer pick, la trampa de Cypher cerró el flanco y el post-plant con crossfire y molly cortó el defuse sin necesidad de duelos."
  },
  "defense": {
   "side": "Defensa",
   "title": "Aguantar B y retake 4v4",
   "strategy": "Setup 2-1-2 con Cypher en B",
   "intro": "Ronda 8, compra completa. Rivales: Jett, Fade, Omen, Viper y Killjoy. Plan: setup 2-1-2, retrasar en B y retake juntos.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Nos colocamos: Cypher y Viper en B, Raze en A Lamps, Skye en A Site y Brimstone en A Tower.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Elbow"
       ],
       [
        "Raze",
        "A Lamps"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": []
     },
     "question": "¿Dónde pone Cypher su utilidad?",
     "options": [
      {
       "t": "Trampa en la salida de Hookah y cámara mirando B Long",
       "ok": true,
       "why": "Te avisa de las dos entradas a B sin tener que asomar."
      },
      {
       "t": "Trampa en el centro del site",
       "ok": false,
       "why": "Solo avisa cuando ya están dentro."
      },
      {
       "t": "Nada, jugar a peek",
       "ok": false,
       "why": "Sin info, Cypher pierde todo su valor."
      }
     ],
     "result": [
      [
       "B Site",
       "B Garden",
       "util"
      ],
      [
       "B Site",
       "B Long",
       "util"
      ]
     ]
    },
    {
     "time": "1:28",
     "narration": "La cámara ve a Jett en B Long y el perro de Fade sale por Hookah. Se oyen 3 en B.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Viper",
        "B Elbow"
       ],
       [
        "Raze",
        "A Lamps"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "B Short"
       ],
       [
        "Jett",
        "B Long"
       ],
       [
        "?",
        "B Fountain"
       ],
       [
        "?",
        "A Link"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "B Short",
        "B Garden",
        "enemy"
       ]
      ]
     },
     "question": "Hay 3 en B. ¿Qué hacemos?",
     "options": [
      {
       "t": "Cypher y Viper retrasan con molly en Long y nube en B Window; Raze se acerca a spawn sin dejar A del todo",
       "ok": true,
       "why": "Ganas tiempo sin morir y la rotación llega a tiempo."
      },
      {
       "t": "Rotan Raze y Skye ya",
       "ok": false,
       "why": "Si es un fake, A queda con uno."
      },
      {
       "t": "Nadie se mueve ni usa utilidad",
       "ok": false,
       "why": "Entran sin coste y B cae en segundos."
      }
     ],
     "result": [
      [
       "B Elbow",
       "B Long",
       "util"
      ],
      [
       "A Lamps",
       "Defender Side Spawn",
       "ally"
      ]
     ]
    },
    {
     "time": "1:10",
     "narration": "Omen fuma B Elbow y B Hall. Jett entra con dash y mata a Viper. La trampa atrapa a Fade y Cypher la mata. 4v4.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Raze",
        "Defender Side Spawn"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "?",
        "B Garden"
       ],
       [
        "?",
        "B Long"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "smokes": [
       "B Elbow",
       "B Hall"
      ]
     },
     "question": "Cypher está solo en B con la Jett dentro. ¿Qué hace?",
     "options": [
      {
       "t": "Retirarse vivo a B Hall y esperar a Raze para el retake",
       "ok": true,
       "why": "Un Cypher vivo con info vale más que un 1v3 perdido."
      },
      {
       "t": "Pelear el duelo contra Jett",
       "ok": false,
       "why": "Llegan sus compañeros por detrás de los humos."
      },
      {
       "t": "Ir a Hookah para flanquear",
       "ok": false,
       "why": "Te metes en medio de su ejecución."
      }
     ],
     "result": [
      [
       "B Site",
       "B Hall",
       "ally"
      ],
      [
       "Defender Side Spawn",
       "B Hall",
       "ally"
      ]
     ]
    },
    {
     "time": "0:55",
     "narration": "Plantan en B. Jett, Omen y Killjoy están en B; la Viper rival se queda de lurk en A Lobby.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Hall"
       ],
       [
        "Raze",
        "B Hall"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Brimstone",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Omen",
        "B Garden"
       ],
       [
        "Killjoy",
        "B Long"
       ],
       [
        "Viper",
        "A Lobby"
       ]
      ],
      "spike": "B Site"
     },
     "question": "¿Cómo montamos el retake?",
     "options": [
      {
       "t": "Skye y Brimstone rotan por spawn y entramos los 4 juntos",
       "ok": true,
       "why": "Con 4v3 en B, ir juntos es la forma más segura de ganar."
      },
      {
       "t": "Entran ya Cypher y Raze solos",
       "ok": false,
       "why": "Un 2v3 contra post-plant casi siempre se pierde."
      },
      {
       "t": "Brimstone usa el teletransportador de A para flanquear por B Long",
       "ok": false,
       "why": "Sale solo, con ruido y delante del Killjoy."
      }
     ],
     "result": [
      [
       "A Site",
       "Defender Side Spawn",
       "ally"
      ],
      [
       "A Tower",
       "Defender Side Spawn",
       "ally"
      ],
      [
       "Defender Side Spawn",
       "B Hall",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:35",
     "narration": "Estamos los 4 en B Hall. Jett en el site, Omen en Hookah y Killjoy con torreta en B Long.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Hall"
       ],
       [
        "Raze",
        "B Hall"
       ],
       [
        "Skye",
        "B Hall"
       ],
       [
        "Brimstone",
        "B Hall"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Omen",
        "B Garden"
       ],
       [
        "Killjoy",
        "B Long"
       ]
      ],
      "spike": "B Site"
     },
     "question": "¿Qué utilidad usamos para entrar?",
     "options": [
      {
       "t": "Humos de Brimstone en Hookah y B Elbow, flash de Skye al site y Raze entra con satchel",
       "ok": true,
       "why": "Aislas a la Jett del crossfire y entras con ventaja."
      },
      {
       "t": "Entrar rápido sin utilidad",
       "ok": false,
       "why": "Te comes tres ángulos a la vez."
      },
      {
       "t": "Molly a la spike y esperar",
       "ok": false,
       "why": "Ellos no defusan: el tiempo corre en tu contra."
      }
     ],
     "result": [
      [
       "B Hall",
       "B Garden",
       "util"
      ],
      [
       "B Hall",
       "B Elbow",
       "util"
      ],
      [
       "B Hall",
       "B Site",
       "util"
      ],
      [
       "B Hall",
       "B Site",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:18",
     "narration": "Raze mata a Jett, Skye cae contra Omen y Cypher mata a Omen. 3v1: queda Killjoy en B Long.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Raze",
        "B Site"
       ],
       [
        "Brimstone",
        "B Hall"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Long"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Garden",
       "B Elbow"
      ]
     },
     "question": "Quedan 18 s. ¿Cómo defusamos?",
     "options": [
      {
       "t": "Brimstone fuma encima de la spike, Cypher defusa y Raze cubre B Elbow y Long",
       "ok": true,
       "why": "El humo tapa el defuse y Raze castiga a Killjoy si asoma."
      },
      {
       "t": "Los tres a por Killjoy",
       "ok": false,
       "why": "Te puedes quedar sin tiempo de defuse."
      },
      {
       "t": "Defusar a toques para engañar",
       "ok": false,
       "why": "Con 18 s no hay margen para trucos."
      }
     ],
     "result": [
      [
       "B Hall",
       "B Site",
       "util"
      ],
      [
       "B Site",
       "B Elbow",
       "ally"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: la info de Cypher permitió retrasar, Cypher se retiró vivo en vez de pelear solo y el retake de 4 con humos y flash superó el post-plant."
  }
 }
};
