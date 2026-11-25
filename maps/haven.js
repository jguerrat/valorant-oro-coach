window.MAPDATA = window.MAPDATA || {};
MAPDATA["haven"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "Garage → C",
   "type": "Execute",
   "tip": "Garage es la llave de C: si lo tienes, cortas la rotación de B y entras al site por dos lados.",
   "steps": [
    {
     "text": "Salida: Jett y Breach a C Lobby, Sova y Omen a Mid Doors, Killjoy se queda en A Lobby cubriendo flanco y haciendo ruido.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Lobby"
       ],
       [
        "Breach",
        "C Lobby"
       ],
       [
        "Sova",
        "Mid Doors"
       ],
       [
        "Omen",
        "Mid Doors"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "C Garage"
       ],
       [
        "?",
        "C Site"
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
      "arrows": [
       [
        "Attacker Side Spawn",
        "C Lobby",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Doors",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "A Lobby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Toma de Garage: Breach lanza Fault Line a Garage desde Mid Doors, Sova dardo de reconocimiento a C Site. Sova y Omen entran tradeando.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Lobby"
       ],
       [
        "Breach",
        "Mid Doors"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Omen",
        "Mid Doors"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "C Garage"
       ],
       [
        "Cypher",
        "C Site"
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
      "arrows": [
       [
        "Mid Doors",
        "C Garage",
        "util"
       ],
       [
        "Mid Doors",
        "C Site",
        "util"
       ],
       [
        "Mid Doors",
        "C Garage",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Garage nuestro. Omen humea C Link (CT) y C Window para cortar la vista y la rotación de B.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Long"
       ],
       [
        "Breach",
        "C Lobby"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Omen",
        "C Garage"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "C Site"
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
       "C Link",
       "C Window"
      ],
      "arrows": [
       [
        "C Garage",
        "C Link",
        "util"
       ],
       [
        "C Garage",
        "C Window",
        "util"
       ],
       [
        "C Lobby",
        "C Long",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez: Breach flashea el site, Jett entra por C Long con dash y Sova/Omen desde Garage. Dos ángulos = el ancla no puede cubrir ambos.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Site"
       ],
       [
        "Breach",
        "C Long"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Omen",
        "C Garage"
       ],
       [
        "Killjoy",
        "Mid Doors"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "C Site"
       ],
       [
        "?",
        "C Link"
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
       "C Link",
       "C Window"
      ],
      "arrows": [
       [
        "C Long",
        "C Site",
        "util"
       ],
       [
        "C Long",
        "C Site",
        "ally"
       ],
       [
        "C Garage",
        "C Site",
        "ally"
       ],
       [
        "A Lobby",
        "Mid Doors",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant en default detrás de la caja. Post-plant fuera del site: Breach en C Long, Omen en C Cubby, Sova en Garage, Killjoy en Mid Doors vigila la rotación por B.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Site"
       ],
       [
        "Breach",
        "C Long"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Omen",
        "C Cubby"
       ],
       [
        "Killjoy",
        "Mid Doors"
       ]
      ],
      "enemies": [
       [
        "?",
        "C Link"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "Defender Side Spawn"
       ]
      ],
      "spike": "C Site",
      "arrows": [
       [
        "C Site",
        "C Cubby",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "C Link",
        "enemy"
       ],
       [
        "B Site",
        "C Window",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "A Long + Sewer",
   "type": "Execute",
   "tip": "A es el site más fácil de retakear para ellos: planta rápido y juega fuera del site, desde Long y Sewer.",
   "steps": [
    {
     "text": "Salida: Jett, Breach y Sova a A Lobby, Omen a A Sewer, Killjoy en Mid Courtyard para dar info de B y del flanco.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
       ],
       [
        "Breach",
        "A Lobby"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "Omen",
        "A Sewer"
       ],
       [
        "Killjoy",
        "Mid Courtyard"
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
        "B Site"
       ],
       [
        "?",
        "C Site"
       ],
       [
        "?",
        "C Garage"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "A Lobby",
        "ally"
       ],
       [
        "A Garden",
        "A Sewer",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Courtyard",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Sova dardo a A Site y Breach Flashpoint por encima de A Long para limpiar el primer ángulo.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Long"
       ],
       [
        "Breach",
        "A Lobby"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "Omen",
        "A Sewer"
       ],
       [
        "Killjoy",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Fade",
        "A Site"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "C Site"
       ],
       [
        "?",
        "C Garage"
       ]
      ],
      "arrows": [
       [
        "A Lobby",
        "A Site",
        "util"
       ],
       [
        "A Lobby",
        "A Long",
        "util"
       ],
       [
        "A Lobby",
        "A Long",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Omen humea A Tower y A Link: el site queda aislado de Heaven y de la rotación desde B.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Long"
       ],
       [
        "Breach",
        "A Long"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "Omen",
        "A Sewer"
       ],
       [
        "Killjoy",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Fade",
        "A Site"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "C Site"
       ]
      ],
      "smokes": [
       "A Tower",
       "A Link"
      ],
      "arrows": [
       [
        "A Sewer",
        "A Tower",
        "util"
       ],
       [
        "A Sewer",
        "A Link",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Breach Fault Line al site y entrada simultánea: Jett y Breach por Long, Omen por Sewer, Sova detrás tradeando.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Breach",
        "A Long"
       ],
       [
        "Sova",
        "A Long"
       ],
       [
        "Omen",
        "A Site"
       ],
       [
        "Killjoy",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Site"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "C Site"
       ]
      ],
      "smokes": [
       "A Tower",
       "A Link"
      ],
      "arrows": [
       [
        "A Long",
        "A Site",
        "util"
       ],
       [
        "A Long",
        "A Site",
        "ally"
       ],
       [
        "A Sewer",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant y salimos: Breach y Sova en A Long, Omen en A Sewer, Jett en site tapando Link, Killjoy corta rotaciones desde Mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Breach",
        "A Long"
       ],
       [
        "Sova",
        "A Long"
       ],
       [
        "Omen",
        "A Sewer"
       ],
       [
        "Killjoy",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Link"
       ],
       [
        "?",
        "Defender Side Spawn"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "B Site",
        "A Link",
        "enemy"
       ],
       [
        "Defender Side Spawn",
        "A Link",
        "enemy"
       ],
       [
        "A Site",
        "A Sewer",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "Default → Split B",
   "type": "Split",
   "tip": "B es pequeño y rápido: humea las dos salidas de CT (B Back y A Link) y entra desde Mid y Garage a la vez.",
   "steps": [
    {
     "text": "Default repartido: Jett y Sova en Mid Courtyard, Breach en Mid Doors, Omen en Mid Window, Killjoy en C Lobby haciendo ruido en C.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Courtyard"
       ],
       [
        "Sova",
        "Mid Courtyard"
       ],
       [
        "Breach",
        "Mid Doors"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Killjoy",
        "C Lobby"
       ]
      ],
      "enemies": [
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
       ],
       [
        "?",
        "C Site"
       ],
       [
        "?",
        "C Garage"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "Mid Courtyard",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Doors",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "C Lobby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Breach toma Garage con Fault Line; Killjoy lanza utilidad a C Long para fingir C y atraer la rotación.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Courtyard"
       ],
       [
        "Sova",
        "Mid Courtyard"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Killjoy",
        "C Long"
       ]
      ],
      "enemies": [
       [
        "Astra",
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
        "C Site"
       ],
       [
        "?",
        "C Link"
       ]
      ],
      "arrows": [
       [
        "Mid Doors",
        "C Garage",
        "util"
       ],
       [
        "Mid Doors",
        "C Garage",
        "ally"
       ],
       [
        "C Lobby",
        "C Long",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Sova dardo a B Site. Omen humea B Back y A Link: B queda sin vista de CT ni de A.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Courtyard"
       ],
       [
        "Sova",
        "Mid Courtyard"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Killjoy",
        "C Long"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "C Site"
       ],
       [
        "?",
        "C Link"
       ]
      ],
      "smokes": [
       "B Back",
       "A Link"
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "B Site",
        "util"
       ],
       [
        "Mid Window",
        "B Back",
        "util"
       ],
       [
        "Mid Window",
        "A Link",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Split: Jett y Sova desde Mid Courtyard, Breach desde Garage con flash, Omen tradea. El ancla de B no puede mirar dos lados.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Site"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "Mid Courtyard"
       ],
       [
        "Killjoy",
        "C Lobby"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "C Site"
       ]
      ],
      "smokes": [
       "B Back",
       "A Link"
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "B Site",
        "ally"
       ],
       [
        "C Garage",
        "B Site",
        "util"
       ],
       [
        "C Garage",
        "B Site",
        "ally"
       ],
       [
        "Mid Window",
        "Mid Courtyard",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant en B. Post-plant: Sova en Mid Courtyard, Omen en Mid Window, Breach en Garage, Jett en site; Killjoy vuelve por Mid Doors al flanco.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "Mid Courtyard"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Killjoy",
        "Mid Doors"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Link"
       ],
       [
        "?",
        "B Back"
       ],
       [
        "?",
        "C Window"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "A Link",
        "B Site",
        "enemy"
       ],
       [
        "B Back",
        "B Site",
        "enemy"
       ],
       [
        "C Window",
        "B Site",
        "enemy"
       ],
       [
        "C Lobby",
        "Mid Doors",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "2-1-2 con info",
   "type": "Setup",
   "tip": "Con 3 sites la info lo es todo: traps y dardos al principio, y el jugador de B rota primero.",
   "steps": [
    {
     "text": "Setup: Jett (Operator) en A Tower mirando Long, Sova en A Site, Omen en B Site, Killjoy en C Site y Breach jugando Garage.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Courtyard"
       ],
       [
        "?",
        "C Lobby"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "A Tower",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "C Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info temprana: torreta de Killjoy mirando C Long, alarmbot en Garage, Sova dardo a A Lobby y Breach Fault Line a Mid Doors si oye pasos.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Doors"
       ],
       [
        "?",
        "C Lobby"
       ]
      ],
      "arrows": [
       [
        "C Site",
        "C Long",
        "util"
       ],
       [
        "A Site",
        "A Lobby",
        "util"
       ],
       [
        "C Garage",
        "Mid Doors",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Detectamos 3 en C. Breach retrocede de Garage a C Window, Omen se acerca a C Window y humea C Long para retrasar.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Window"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Doors"
       ],
       [
        "?",
        "C Lobby"
       ],
       [
        "?",
        "C Long"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "smokes": [
       "C Long"
      ],
      "arrows": [
       [
        "C Garage",
        "C Window",
        "ally"
       ],
       [
        "B Site",
        "C Window",
        "ally"
       ],
       [
        "C Window",
        "C Long",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Confirmado C: Sova rota por Defender Side Spawn a C Link; Jett se queda en A por si hay lurker.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Sova",
        "C Link"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Window"
       ]
      ],
      "enemies": [
       [
        "?",
        "C Garage"
       ],
       [
        "?",
        "C Long"
       ],
       [
        "?",
        "C Cubby"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "A Site",
        "Defender Side Spawn",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "C Link",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Si caen y plantan, retake juntos desde C Link y C Window con la utilidad que quede; nunca de uno en uno.",
     "board": {
      "allies": [
       [
        "Jett",
        "Defender Side Spawn"
       ],
       [
        "Sova",
        "C Link"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Killjoy",
        "C Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "C Site"
       ],
       [
        "?",
        "C Cubby"
       ],
       [
        "?",
        "C Garage"
       ]
      ],
      "spike": "C Site",
      "arrows": [
       [
        "C Link",
        "C Site",
        "ally"
       ],
       [
        "C Window",
        "C Site",
        "ally"
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
   "name": "Retake C",
   "type": "Retake",
   "tip": "En retake espera a estar 3+ juntos, rompe sus humos con dardo/flash y entra por dos lados a la vez.",
   "steps": [
    {
     "text": "Han plantado en C. Agrupamos: Killjoy y Breach en C Link, Omen en C Window, Sova y Jett llegan por Defender Side Spawn.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "C Link"
       ],
       [
        "Breach",
        "C Link"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Sova",
        "Defender Side Spawn"
       ],
       [
        "Jett",
        "Defender Side Spawn"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "C Long"
       ],
       [
        "?",
        "C Cubby"
       ]
      ],
      "spike": "C Site",
      "arrows": [
       [
        "Defender Side Spawn",
        "C Link",
        "ally"
       ],
       [
        "B Site",
        "C Window",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Omen humea C Long y C Garage para quitar los ángulos de post-plant. Sova lanza dardo de reconocimiento al site.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "C Link"
       ],
       [
        "Breach",
        "C Link"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Sova",
        "C Link"
       ],
       [
        "Jett",
        "C Link"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "C Long"
       ],
       [
        "?",
        "C Cubby"
       ]
      ],
      "spike": "C Site",
      "smokes": [
       "C Long",
       "C Garage"
      ],
      "arrows": [
       [
        "C Window",
        "C Long",
        "util"
       ],
       [
        "C Window",
        "C Garage",
        "util"
       ],
       [
        "C Link",
        "C Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Breach Flashpoint por encima y Fault Line al site; Killjoy nanoswarm detrás de la caja para sacarlos de cobertura.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "C Link"
       ],
       [
        "Breach",
        "C Link"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Sova",
        "C Link"
       ],
       [
        "Jett",
        "C Link"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "C Long"
       ],
       [
        "?",
        "C Cubby"
       ]
      ],
      "spike": "C Site",
      "smokes": [
       "C Long",
       "C Garage"
      ],
      "arrows": [
       [
        "C Link",
        "C Site",
        "util"
       ],
       [
        "C Window",
        "C Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez: Jett dash por C Link, Sova y Killjoy detrás tradeando, Omen desde C Window.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Link"
       ],
       [
        "Omen",
        "C Site"
       ],
       [
        "Sova",
        "C Site"
       ],
       [
        "Jett",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "C Long"
       ],
       [
        "?",
        "C Cubby"
       ]
      ],
      "spike": "C Site",
      "smokes": [
       "C Long",
       "C Garage"
      ],
      "arrows": [
       [
        "C Link",
        "C Site",
        "ally"
       ],
       [
        "C Window",
        "C Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Site limpio: uno defusea, el resto mira C Long, Cubby y Garage, que es por donde vendrán al defuse.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Window"
       ],
       [
        "Omen",
        "C Site"
       ],
       [
        "Sova",
        "C Site"
       ],
       [
        "Jett",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Omen",
        "C Long"
       ],
       [
        "?",
        "C Cubby"
       ]
      ],
      "spike": "C Site",
      "arrows": [
       [
        "C Long",
        "C Site",
        "enemy"
       ],
       [
        "C Cubby",
        "C Site",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Pelea temprana en A Long",
   "type": "Setup",
   "tip": "Un pick temprano en A Long obliga al rival a cambiar de plan; después de la primera pelea, retrocede siempre.",
   "steps": [
    {
     "text": "Jett y Breach se adelantan hacia A Long; Sova en A Site, Omen en B Site, Killjoy en C Site con su utilidad.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Long"
       ],
       [
        "Breach",
        "A Long"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "A Garden"
       ],
       [
        "?",
        "Mid Courtyard"
       ],
       [
        "?",
        "C Lobby"
       ]
      ],
      "arrows": [
       [
        "A Site",
        "A Long",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "B Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Breach Flashpoint por la esquina hacia A Lobby y Jett asoma con la flash para buscar el pick.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Long"
       ],
       [
        "Breach",
        "A Long"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Lobby"
       ],
       [
        "Skye",
        "A Lobby"
       ],
       [
        "?",
        "Mid Courtyard"
       ],
       [
        "?",
        "C Lobby"
       ]
      ],
      "arrows": [
       [
        "A Long",
        "A Lobby",
        "util"
       ],
       [
        "A Long",
        "A Lobby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Pick conseguido: Jett hace dash atrás a A Site y Breach se retira a A Tower. Nada de perseguir.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Breach",
        "A Tower"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Skye",
        "A Lobby"
       ],
       [
        "?",
        "Mid Courtyard"
       ],
       [
        "?",
        "C Lobby"
       ]
      ],
      "arrows": [
       [
        "A Long",
        "A Site",
        "ally"
       ],
       [
        "A Long",
        "A Tower",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Con un enemigo menos, Sova dardo a A Lobby para ver si siguen o rotan, y Omen avisa de cualquier ruido en Mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Breach",
        "A Tower"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Skye",
        "A Lobby"
       ],
       [
        "?",
        "Mid Courtyard"
       ],
       [
        "?",
        "C Lobby"
       ]
      ],
      "arrows": [
       [
        "A Site",
        "A Lobby",
        "util"
       ],
       [
        "A Lobby",
        "Mid Courtyard",
        "enemy"
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
   "title": "Ganamos Garage",
   "situation": "A 1:15 hemos matado al defensor de Garage. El jugador de B no ha aparecido todavía y Killjoy hace ruido en A Lobby.",
   "enemy": [
    {
     "t": "El de B rota a C por C Window",
     "pct": 50
    },
    {
     "t": "El ancla de C se esconde en C Link para retake",
     "pct": 30
    },
    {
     "t": "Vienen dos a recuperar Garage",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Ejecutar C ya: humo en C Link y C Window, entrada por Garage y C Long a la vez",
     "ok": true,
     "why": "Garage controlado + humos en las dos entradas de CT = C aislado antes de que llegue la rotación."
    },
    {
     "t": "Quedarnos en Garage esperando a que asomen",
     "ok": false,
     "why": "Les das tiempo a rotar 2-3 jugadores y la ventaja de Garage se pierde."
    },
    {
     "t": "Rotar desde Garage a B",
     "ok": false,
     "why": "Abandonas el espacio que te ha costado ganar y B ya está avisado."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "C Garage"
     ],
     [
      "Omen",
      "C Garage"
     ],
     [
      "Jett",
      "C Lobby"
     ],
     [
      "Breach",
      "C Lobby"
     ],
     [
      "Killjoy",
      "A Lobby"
     ]
    ],
    "enemies": [
     [
      "Cypher",
      "C Site"
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
    ]
   },
   "enemyMove": [
    [
     "B Site",
     "C Window",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Garage",
     "C Link",
     "util"
    ],
    [
     "C Garage",
     "C Window",
     "util"
    ],
    [
     "C Garage",
     "C Site",
     "ally"
    ],
    [
     "C Lobby",
     "C Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Rotación por A Link tras el fake",
   "situation": "A 1:05 hemos gastado flash y dardo en A Long. Killjoy en Mid Courtyard oye pasos que van de B a A Link.",
   "enemy": [
    {
     "t": "El jugador de B rota a A",
     "pct": 60
    },
    {
     "t": "Es un defensor que viene a flanquear por Mid",
     "pct": 25
    },
    {
     "t": "Es ruido falso y siguen en sus sites",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Dejar 1 en A Long y llevar 4 a B por Mid Courtyard rápido",
     "ok": true,
     "why": "La rotación confirmada deja B con 0-1 defensores: castiga el site que se ha vaciado."
    },
    {
     "t": "Ejecutar A igualmente con toda la utilidad que queda",
     "ok": false,
     "why": "A ahora tiene 3 defensores y ya gastaste parte de la utilidad."
    },
    {
     "t": "Ir los 5 a C Long",
     "ok": false,
     "why": "C está lejos; llegas tarde y C no se ha debilitado."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Long"
     ],
     [
      "Breach",
      "A Lobby"
     ],
     [
      "Sova",
      "A Lobby"
     ],
     [
      "Omen",
      "A Sewer"
     ],
     [
      "Killjoy",
      "Mid Courtyard"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "A Tower"
     ],
     [
      "Fade",
      "A Site"
     ],
     [
      "Astra",
      "A Link"
     ],
     [
      "?",
      "C Site"
     ],
     [
      "?",
      "C Garage"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Site",
     "A Link",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Lobby",
     "Mid Courtyard",
     "ally"
    ],
    [
     "A Sewer",
     "Mid Courtyard",
     "ally"
    ],
    [
     "Mid Courtyard",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Post-plant A 3v2",
   "situation": "Spike en A Site, quedan 30 s. Somos 3 (Jett, Breach, Sova) y quedan 2 defensores que vienen por A Link y A Tower.",
   "enemy": [
    {
     "t": "Entran juntos por A Link con flash",
     "pct": 55
    },
    {
     "t": "Uno hace tap al spike y el otro cubre desde Heaven",
     "pct": 30
    },
    {
     "t": "Esperan el último segundo para defusear",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Jugar fuera del site en crossfire: dos en A Long y uno en A Sewer, girarse de la flash",
     "ok": true,
     "why": "Desde fuera tienes ángulos sobre el spike y ellos tienen que exponerse para defusear."
    },
    {
     "t": "Quedarse los 3 encima del spike",
     "ok": false,
     "why": "Con una flash desde Link os matan juntos y sin trades."
    },
    {
     "t": "Ir a buscarlos a A Link",
     "ok": false,
     "why": "Regalas la ventaja del tiempo; ellos necesitan venir a ti."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Site"
     ],
     [
      "Breach",
      "A Long"
     ],
     [
      "Sova",
      "A Long"
     ]
    ],
    "enemies": [
     [
      "Fade",
      "A Link"
     ],
     [
      "Jett",
      "A Tower"
     ]
    ],
    "spike": "A Site"
   },
   "enemyMove": [
    [
     "A Link",
     "A Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Site",
     "A Sewer",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Ronda eco con Sheriffs",
   "situation": "Ronda de eco: tenemos Sheriffs y alguna Spectre. Ellos compran completo y suelen jugar Operator en A Tower.",
   "enemy": [
    {
     "t": "Defensa estándar 2-1-2 con Operator en A",
     "pct": 55
    },
    {
     "t": "Empujan Garage para pick temprano",
     "pct": 30
    },
    {
     "t": "Stack en A tras ganar rondas",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Ir los 5 juntos a C por C Long y Garage rápido, distancias cortas",
     "ok": true,
     "why": "En eco necesitas peleas a corta distancia y superioridad numérica: 5 contra 2 en C, lejos del Operator."
    },
    {
     "t": "Repartirnos en default y buscar picks",
     "ok": false,
     "why": "En duelos 1v1 a distancia con armas peores pierdes casi siempre."
    },
    {
     "t": "Ir a A Long a pelear al Operator",
     "ok": false,
     "why": "Long es justo la línea larga donde el Operator gana."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "C Lobby"
     ],
     [
      "Breach",
      "C Lobby"
     ],
     [
      "Sova",
      "Mid Doors"
     ],
     [
      "Omen",
      "Mid Doors"
     ],
     [
      "Killjoy",
      "C Lobby"
     ]
    ],
    "enemies": [
     [
      "?",
      "C Site"
     ],
     [
      "?",
      "C Garage"
     ],
     [
      "?",
      "B Site"
     ],
     [
      "Jett",
      "A Tower"
     ],
     [
      "?",
      "A Site"
     ]
    ]
   },
   "enemyMove": [
    [
     "C Garage",
     "Mid Doors",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Lobby",
     "C Long",
     "ally"
    ],
    [
     "C Long",
     "C Site",
     "ally"
    ],
    [
     "Mid Doors",
     "C Garage",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Lurker en A durante el plant en C",
   "situation": "Hemos plantado en C con 4. Killjoy hace lurk en A Lobby y a 0:40 de spike oye a dos defensores salir de A hacia C.",
   "enemy": [
    {
     "t": "Rotan por A Link y Defender Side Spawn hacia C Link",
     "pct": 65
    },
    {
     "t": "Uno se queda en A vigilando el lurk",
     "pct": 35
    }
   ],
   "responses": [
    {
     "t": "Avanzar por A Long y A Site hacia A Link para pillarlos por la espalda",
     "ok": true,
     "why": "La rotación les obliga a darte la espalda; cortas el retake o les fuerzas a mirar a dos lados."
    },
    {
     "t": "Quedarse en A Lobby esperando",
     "ok": false,
     "why": "El lurk no aporta nada si no actúas sobre la rotación."
    },
    {
     "t": "Volver a C por Mid Doors",
     "ok": false,
     "why": "Llegas tarde y además por el mismo lado que tus compañeros: sin crossfire."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "A Lobby"
     ],
     [
      "Jett",
      "C Site"
     ],
     [
      "Breach",
      "C Long"
     ],
     [
      "Sova",
      "C Garage"
     ],
     [
      "Omen",
      "C Cubby"
     ]
    ],
    "enemies": [
     [
      "Fade",
      "A Site"
     ],
     [
      "Jett",
      "A Tower"
     ],
     [
      "?",
      "C Link"
     ]
    ],
    "spike": "C Site"
   },
   "enemyMove": [
    [
     "A Site",
     "A Link",
     "enemy"
    ],
    [
     "A Link",
     "Defender Side Spawn",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Lobby",
     "A Long",
     "ally"
    ],
    [
     "A Long",
     "A Site",
     "ally"
    ],
    [
     "A Site",
     "A Link",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Cae A Long",
   "situation": "A 1:30 perdemos el duelo de A Long; Sova sigue en A Site y oye a varios en A Lobby.",
   "enemy": [
    {
     "t": "Ejecución real en A",
     "pct": 60
    },
    {
     "t": "Toman Long y rotan a C por Mid",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Omen (B) rota a A Link, C se queda como está",
     "ok": true,
     "why": "Refuerzas A con el más cercano sin abrir C, y A Link sigue cubriendo B."
    },
    {
     "t": "Rotar a todos los de C a A",
     "ok": false,
     "why": "C queda gratis y la rotación desde C es la más larga del mapa."
    },
    {
     "t": "Sova sale a A Long a recuperar el espacio",
     "ok": false,
     "why": "Duelo en desventaja contra varios: regalas otra baja."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "A Site"
     ],
     [
      "Omen",
      "B Site"
     ],
     [
      "Killjoy",
      "C Site"
     ],
     [
      "Breach",
      "C Garage"
     ]
    ],
    "enemies": [
     [
      "Neon",
      "A Long"
     ],
     [
      "Skye",
      "A Lobby"
     ],
     [
      "Breach",
      "A Lobby"
     ],
     [
      "?",
      "Mid Courtyard"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Long",
     "A Site",
     "enemy"
    ],
    [
     "A Lobby",
     "A Sewer",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Site",
     "A Link",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Presión en Garage y C Long",
   "situation": "A 1:10 la alarmbot de Garage se activa y la torreta de C Long detecta a dos. Somos Killjoy y Breach en C.",
   "enemy": [
    {
     "t": "Ejecutan C por Garage y C Long",
     "pct": 65
    },
    {
     "t": "Es presión para luego ir a B",
     "pct": 35
    }
   ],
   "responses": [
    {
     "t": "Retrasar con utilidad desde C Window y pedir que Omen rote ya",
     "ok": true,
     "why": "Dos sensores a la vez casi siempre son ejecución real; retrasar compra el tiempo de la rotación."
    },
    {
     "t": "Killjoy y Breach pelean Garage cara a cara",
     "ok": false,
     "why": "Pelear 2 contra 3-4 sin utilidad te deja sin site y sin retake."
    },
    {
     "t": "Abandonar C sin pedir ayuda",
     "ok": false,
     "why": "Sin aviso, el resto llega tarde al retake."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "C Site"
     ],
     [
      "Breach",
      "C Garage"
     ],
     [
      "Omen",
      "B Site"
     ],
     [
      "Sova",
      "A Site"
     ],
     [
      "Jett",
      "A Tower"
     ]
    ],
    "enemies": [
     [
      "Neon",
      "Mid Doors"
     ],
     [
      "Skye",
      "Mid Doors"
     ],
     [
      "Breach",
      "C Long"
     ],
     [
      "Omen",
      "C Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Doors",
     "C Garage",
     "enemy"
    ],
    [
     "C Long",
     "C Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Garage",
     "C Window",
     "ally"
    ],
    [
     "C Window",
     "C Garage",
     "util"
    ],
    [
     "B Site",
     "C Window",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake B 3v3",
   "situation": "Han plantado en B. Quedamos Jett, Sova y Killjoy en Defender Side Spawn; ellos tienen 3 en Mid Courtyard, Mid Window y Garage.",
   "enemy": [
    {
     "t": "Juegan post-plant desde Mid Courtyard y Window",
     "pct": 55
    },
    {
     "t": "Uno se queda en el site detrás del spike",
     "pct": 30
    },
    {
     "t": "Uno sale a flanquear por A Link",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Retake juntos desde B Back y A Link a la vez, con dardo y flash antes de entrar",
     "ok": true,
     "why": "Dos ángulos a la vez y su utilidad dividida: el que asome a por el defuse lo matas tú."
    },
    {
     "t": "Entrar uno a uno por B Back",
     "ok": false,
     "why": "Sin trades: cada uno muere 1v3."
    },
    {
     "t": "Esperar en spawn hasta el último segundo",
     "ok": false,
     "why": "Defusear con prisa sin limpiar es una muerte segura."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Defender Side Spawn"
     ],
     [
      "Sova",
      "Defender Side Spawn"
     ],
     [
      "Killjoy",
      "Defender Side Spawn"
     ]
    ],
    "enemies": [
     [
      "Neon",
      "Mid Courtyard"
     ],
     [
      "Skye",
      "Mid Window"
     ],
     [
      "Breach",
      "C Garage"
     ]
    ],
    "spike": "B Site"
   },
   "enemyMove": [
    [
     "Mid Courtyard",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Defender Side Spawn",
     "B Back",
     "ally"
    ],
    [
     "Defender Side Spawn",
     "A Link",
     "ally"
    ],
    [
     "B Back",
     "B Site",
     "util"
    ],
    [
     "B Back",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Eco de defensa",
   "situation": "Perdimos las dos últimas rondas y vamos de eco: Sheriffs y Ghosts. Ellos compran completo.",
   "enemy": [
    {
     "t": "Ejecutan con utilidad completa su site favorito (C)",
     "pct": 55
    },
    {
     "t": "Hacen default lento buscando picks",
     "pct": 30
    },
    {
     "t": "Rush A",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Stack de 3 en C jugando ángulos cerrados juntos, 2 dando info en A y B",
     "ok": true,
     "why": "En eco ganas a corta distancia y con trades; su site favorito es la apuesta con más probabilidad."
    },
    {
     "t": "Jugar cada uno solo en su posición habitual",
     "ok": false,
     "why": "Duelos 1v1 con pistola contra rifle: pierdes la mayoría."
    },
    {
     "t": "Salir agresivos a A Long",
     "ok": false,
     "why": "Línea larga contra rifles y Operator: el peor sitio para una eco."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "C Site"
     ],
     [
      "Breach",
      "C Window"
     ],
     [
      "Omen",
      "C Link"
     ],
     [
      "Sova",
      "A Site"
     ],
     [
      "Jett",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "C Lobby"
     ],
     [
      "?",
      "Mid Doors"
     ],
     [
      "?",
      "A Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "C Lobby",
     "C Long",
     "enemy"
    ],
    [
     "Mid Doors",
     "C Garage",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Window",
     "C Site",
     "ally"
    ],
    [
     "C Link",
     "C Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "1v1 con spike en C",
   "situation": "Spike en C, quedan 25 s. Solo queda Sova contra un atacante que no hemos visto; probablemente en C Long o Cubby.",
   "enemy": [
    {
     "t": "Está en C Long mirando el spike",
     "pct": 50
    },
    {
     "t": "Está escondido en C Cubby",
     "pct": 35
    },
    {
     "t": "Está en Garage",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Dardo de reconocimiento hacia C Long/Cubby, tap al defuse y soltar para pillarle al asomar",
     "ok": true,
     "why": "Le obligas a revelar su posición y le peleas preparado, con tiempo aún para defusear."
    },
    {
     "t": "Defusear completo nada más llegar",
     "ok": false,
     "why": "Si está mirando el spike, mueres con el defuse a medias."
    },
    {
     "t": "Ir a buscarlo a C Long",
     "ok": false,
     "why": "Pierdes segundos y el duelo lo eliges tú a ciegas."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "C Link"
     ]
    ],
    "enemies": [
     [
      "?",
      "C Long"
     ],
     [
      "?",
      "C Cubby"
     ]
    ],
    "spike": "C Site"
   },
   "enemyMove": [
    [
     "C Long",
     "C Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Link",
     "C Long",
     "util"
    ],
    [
     "C Link",
     "C Site",
     "ally"
    ]
   ]
  }
 ],
 "rounds": {
  "attack": {
   "side": "Ataque",
   "title": "Execute C tomando Garage",
   "strategy": "Garage → C",
   "intro": "Ronda de compra completa 5v5. Plan: tomar Garage temprano, humear C Link y C Window, entrar por dos lados y jugar post-plant fuera del site.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Salimos de spawn: Jett y Breach a C Lobby, Sova y Omen a Mid Doors, Killjoy a A Lobby.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Lobby"
       ],
       [
        "Breach",
        "C Lobby"
       ],
       [
        "Sova",
        "Mid Doors"
       ],
       [
        "Omen",
        "Mid Doors"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "C Garage"
       ],
       [
        "Cypher",
        "C Site"
       ],
       [
        "Astra",
        "B Site"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "Fade",
        "A Site"
       ]
      ]
     },
     "question": "¿Cómo tomamos Garage?",
     "options": [
      {
       "t": "Breach Fault Line a Garage y Sova dardo; entran Sova y Omen tradeando",
       "ok": true,
       "why": "El stun y la info te dan el primer duelo con ventaja y el trade inmediato."
      },
      {
       "t": "Jett hace dash sola dentro de Garage",
       "ok": false,
       "why": "Sin utilidad ni trade, el defensor de Garage la espera agachado."
      },
      {
       "t": "Esperar a que ellos asomen",
       "ok": false,
       "why": "Pierdes tiempo y les dejas preparar el site."
      }
     ],
     "result": [
      [
       "Mid Doors",
       "C Garage",
       "util"
      ],
      [
       "Mid Doors",
       "C Site",
       "util"
      ],
      [
       "Mid Doors",
       "C Garage",
       "ally"
      ]
     ]
    },
    {
     "time": "1:20",
     "narration": "Sova mata a la Sage aturdida en Garage. Garage es nuestro. Killjoy en A Lobby no oye nada.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Lobby"
       ],
       [
        "Breach",
        "Mid Doors"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Omen",
        "C Garage"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "C Site"
       ],
       [
        "Astra",
        "B Site"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "Fade",
        "A Site"
       ]
      ]
     },
     "question": "¿Qué hace Killjoy en A?",
     "options": [
      {
       "t": "Hacer ruido en A Long con una granada y quedarse vigilando el flanco",
       "ok": true,
       "why": "Retiene a los dos de A en su site y protege la espalda del execute."
      },
      {
       "t": "Ir corriendo a C a unirse",
       "ok": false,
       "why": "Dejas el flanco libre y A rota a C sin miedo."
      },
      {
       "t": "Entrar sola a A Site",
       "ok": false,
       "why": "1v2 contra Operator: muerte casi segura sin aportar."
      }
     ],
     "result": [
      [
       "A Lobby",
       "A Long",
       "util"
      ]
     ]
    },
    {
     "time": "1:05",
     "narration": "Fade y Jett se quedan en A por el ruido. Preparamos el execute: Breach pasa a C Lobby y Jett a C Long.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Long"
       ],
       [
        "Breach",
        "C Lobby"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Omen",
        "C Garage"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "C Site"
       ],
       [
        "Astra",
        "B Site"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "Fade",
        "A Site"
       ]
      ],
      "smokes": [
       "C Link",
       "C Window"
      ]
     },
     "question": "Omen ya humea C Link y C Window. ¿Cómo entramos?",
     "options": [
      {
       "t": "Flash de Breach al site y entrada a la vez por C Long y Garage",
       "ok": true,
       "why": "Dos ángulos simultáneos: el Cypher no puede cubrir ambos."
      },
      {
       "t": "Entrar uno a uno por C Long",
       "ok": false,
       "why": "Cada entrada es un 1v1 que el ancla gana con su trampa."
      },
      {
       "t": "Plantar sin limpiar el site",
       "ok": false,
       "why": "El Cypher te mata en el plant sin que nadie lo haya buscado."
      }
     ],
     "result": [
      [
       "C Lobby",
       "C Site",
       "util"
      ],
      [
       "C Long",
       "C Site",
       "ally"
      ],
      [
       "C Garage",
       "C Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:55",
     "narration": "Jett entra y muere contra el Cypher, pero Sova lo tradea desde Garage. Site limpio, 4v3.",
     "board": {
      "allies": [
       [
        "Breach",
        "C Long"
       ],
       [
        "Sova",
        "C Site"
       ],
       [
        "Omen",
        "C Garage"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "B Site"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "Fade",
        "A Site"
       ]
      ],
      "smokes": [
       "C Link",
       "C Window"
      ]
     },
     "question": "Omen lleva la spike. ¿Dónde plantamos?",
     "options": [
      {
       "t": "Plant default detrás de la caja, cubierto desde Garage y C Long",
       "ok": true,
       "why": "Es el spot que se ve desde nuestras posiciones de post-plant y no desde C Link."
      },
      {
       "t": "Plant abierto en el centro del site",
       "ok": false,
       "why": "Se ve desde todos los ángulos de retake: defuse fácil para ellos."
      },
      {
       "t": "No plantar y esperar a Killjoy",
       "ok": false,
       "why": "Tiran los humos y llega la rotación: pierdes la ventaja."
      }
     ],
     "result": [
      [
       "C Garage",
       "C Site",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:40",
     "narration": "Spike plantada. Astra rota desde B hacia C Window y Fade y Jett salen de A por A Link.",
     "board": {
      "allies": [
       [
        "Breach",
        "C Long"
       ],
       [
        "Sova",
        "C Site"
       ],
       [
        "Omen",
        "C Site"
       ],
       [
        "Killjoy",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "C Window"
       ],
       [
        "Jett",
        "A Link"
       ],
       [
        "Fade",
        "Defender Side Spawn"
       ]
      ],
      "spike": "C Site",
      "arrows": [
       [
        "B Site",
        "C Window",
        "enemy"
       ],
       [
        "A Site",
        "A Link",
        "enemy"
       ],
       [
        "A Link",
        "Defender Side Spawn",
        "enemy"
       ]
      ]
     },
     "question": "¿Cómo nos colocamos para el post-plant?",
     "options": [
      {
       "t": "Salir del site: Breach en C Long, Omen en C Cubby, Sova en Garage; Killjoy viene por Mid Doors",
       "ok": true,
       "why": "Crossfire desde fuera: quien defusee queda expuesto a dos ángulos."
      },
      {
       "t": "Quedarnos todos encima del spike",
       "ok": false,
       "why": "Con una flash o una ulti os limpian juntos."
      },
      {
       "t": "Killjoy entra a A ahora que está vacío",
       "ok": false,
       "why": "La spike ya está en C; A no da nada y pierdes a tu cuarto jugador."
      }
     ],
     "result": [
      [
       "C Site",
       "C Cubby",
       "ally"
      ],
      [
       "C Site",
       "C Garage",
       "ally"
      ],
      [
       "A Lobby",
       "Mid Doors",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:25",
     "narration": "Astra humea Garage y Fade lanza su ojo por C Link. Estamos en posiciones: Breach C Long, Omen C Cubby, Sova Garage, Killjoy Mid Doors.",
     "board": {
      "allies": [
       [
        "Breach",
        "C Long"
       ],
       [
        "Omen",
        "C Cubby"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Killjoy",
        "Mid Doors"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "C Window"
       ],
       [
        "Fade",
        "C Link"
       ],
       [
        "Jett",
        "Defender Side Spawn"
       ]
      ],
      "spike": "C Site",
      "smokes": [
       "C Garage"
      ],
      "arrows": [
       [
        "C Link",
        "C Site",
        "util"
       ],
       [
        "Defender Side Spawn",
        "C Link",
        "enemy"
       ]
      ]
     },
     "question": "Llega el ojo de Fade y oímos el defuse. ¿Qué hacemos?",
     "options": [
      {
       "t": "Girarse del ojo, Sova dardo de choque al spike y Breach asoma al defuse desde C Long",
       "ok": true,
       "why": "Interrumpes el defuse con utilidad y peleas cuando ellos ya están comprometidos."
      },
      {
       "t": "Asomar todos a C Link a la vez",
       "ok": false,
       "why": "Vas a su ángulo preparado y el ojo te deja ciego."
      },
      {
       "t": "Ir a buscar a la Jett a spawn",
       "ok": false,
       "why": "Abandonas la spike: es exactamente lo que quieren."
      }
     ],
     "result": [
      [
       "C Garage",
       "C Site",
       "util"
      ],
      [
       "C Long",
       "C Site",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:10",
     "narration": "Breach mata a la Astra en el defuse. Fade y Jett quedan 2v4 sin tiempo para un defuse completo.",
     "board": {
      "allies": [
       [
        "Breach",
        "C Long"
       ],
       [
        "Omen",
        "C Cubby"
       ],
       [
        "Sova",
        "C Garage"
       ],
       [
        "Killjoy",
        "Mid Doors"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "C Link"
       ],
       [
        "Jett",
        "C Link"
       ]
      ],
      "spike": "C Site"
     },
     "question": "Quedan 10 s de spike. ¿Qué hacemos?",
     "options": [
      {
       "t": "Mantener posiciones y dejar correr el tiempo",
       "ok": true,
       "why": "Ya no les da tiempo a defusear sin exponerse: cualquier pelea extra solo les ayuda."
      },
      {
       "t": "Entrar a C Link a por los dos",
       "ok": false,
       "why": "Les regalas duelos que pueden cambiar la ronda."
      },
      {
       "t": "Volver todos al spike",
       "ok": false,
       "why": "Te expones sin motivo cuando el tiempo juega a tu favor."
      }
     ],
     "result": [
      [
       "C Link",
       "Defender Side Spawn",
       "enemy"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: Garage temprano cortó la rotación de B, Killjoy retuvo a A con ruido, la entrada por dos lados ganó el site y el post-plant fuera del site castigó el defuse."
  },
  "defense": {
   "side": "Defensa",
   "title": "2-1-2 y retake de C",
   "strategy": "2-1-2 con info",
   "intro": "Ronda de compra completa 5v5. Plan: 2-1-2 con info temprana; si cargan C, retrasamos, rotamos el de B primero y hacemos retake juntos.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Setup: Jett en A Tower con Operator, Sova en A Site, Omen en B Site, Killjoy en C Site y Breach en Garage.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Courtyard"
       ],
       [
        "?",
        "Mid Doors"
       ],
       [
        "?",
        "C Lobby"
       ]
      ]
     },
     "question": "Breach está en Garage. ¿Cómo lo juega?",
     "options": [
      {
       "t": "Fault Line a Mid Doors al oír pasos y retroceder sin pelear de más",
       "ok": true,
       "why": "Da info y retrasa sin arriesgar al jugador clave para el retake."
      },
      {
       "t": "Empujar Mid Doors en busca de un pick",
       "ok": false,
       "why": "Te encuentras 3 de frente sin apoyo."
      },
      {
       "t": "No usar utilidad y esperar",
       "ok": false,
       "why": "Garage sin info se pierde gratis."
      }
     ],
     "result": [
      [
       "C Garage",
       "Mid Doors",
       "util"
      ]
     ]
    },
    {
     "time": "1:15",
     "narration": "El stun de Breach pilla a tres en Mid Doors. La torreta de Killjoy ve a Neon en C Long y el dardo de Sova a Cypher solo en A Lobby.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Killjoy",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "C Long"
       ],
       [
        "Skye",
        "Mid Doors"
       ],
       [
        "Breach",
        "Mid Doors"
       ],
       [
        "Omen",
        "Mid Doors"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ]
     },
     "question": "Cuatro van a C y uno en A. ¿Qué rotamos?",
     "options": [
      {
       "t": "Omen se acerca a C Window y Sova empieza a rotar; Jett se queda en A",
       "ok": true,
       "why": "Rota primero el más cercano, el segundo con cautela, y A sigue cubierta contra el lurker."
      },
      {
       "t": "Rotar a los cinco a C",
       "ok": false,
       "why": "El Cypher planta en A gratis."
      },
      {
       "t": "No rotar nadie hasta que planten",
       "ok": false,
       "why": "Retake 2v4 en lugar de defensa 4v4."
      }
     ],
     "result": [
      [
       "B Site",
       "C Window",
       "ally"
      ],
      [
       "A Site",
       "Defender Side Spawn",
       "ally"
      ]
     ]
    },
    {
     "time": "1:00",
     "narration": "Breach mata a la Skye en Garage pero cae. Humos de Omen enemigo en C Link y C Window: entran al site.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Tower"
       ],
       [
        "Sova",
        "Defender Side Spawn"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Killjoy",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "C Long"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "C Garage"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "smokes": [
       "C Link",
       "C Window"
      ],
      "arrows": [
       [
        "C Garage",
        "C Site",
        "enemy"
       ],
       [
        "C Long",
        "C Site",
        "enemy"
       ]
      ]
     },
     "question": "Killjoy está sola en el site contra 3. ¿Qué hace?",
     "options": [
      {
       "t": "Dejar nanoswarm y torreta, y retroceder a C Link para el retake",
       "ok": true,
       "why": "Su utilidad retrasa el plant y ella sobrevive para el retake con el equipo."
      },
      {
       "t": "Pelear el site sola",
       "ok": false,
       "why": "1v3: muere y el retake pasa a 3v3 sin su utilidad."
      },
      {
       "t": "Ulti ahora sin nadie que la acompañe",
       "ok": false,
       "why": "Pueden salir del Lockdown o romperlo sin presión."
      }
     ],
     "result": [
      [
       "C Site",
       "C Link",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:45",
     "narration": "Plantan en C. Neon en el site, Breach en Garage, Omen en C Long. Sova llega a C Link; Jett deja A y viene por spawn. Cypher sigue en A Lobby.",
     "board": {
      "allies": [
       [
        "Jett",
        "Defender Side Spawn"
       ],
       [
        "Sova",
        "C Link"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Killjoy",
        "C Link"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "C Long"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "spike": "C Site",
      "arrows": [
       [
        "A Tower",
        "Defender Side Spawn",
        "ally"
       ]
      ]
     },
     "question": "Somos 4 contra 4. ¿Cuándo entramos?",
     "options": [
      {
       "t": "Esperar a Jett (5 s) y entrar los cuatro juntos con utilidad",
       "ok": true,
       "why": "Hay tiempo: 4 juntos con utilidad ganan un retake que de uno en uno se pierde."
      },
      {
       "t": "Killjoy y Sova entran ya",
       "ok": false,
       "why": "Entras 2v3 regalando la ventaja numérica."
      },
      {
       "t": "Esperar a los últimos 10 s",
       "ok": false,
       "why": "No queda tiempo para limpiar y defusear con calma."
      }
     ],
     "result": [
      [
       "Defender Side Spawn",
       "C Link",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:35",
     "narration": "Juntos. Omen humea C Long y Garage; Sova lanza dardo de reconocimiento: Neon detrás de la caja.",
     "board": {
      "allies": [
       [
        "Jett",
        "C Link"
       ],
       [
        "Sova",
        "C Link"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Killjoy",
        "C Link"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "C Site"
       ],
       [
        "Breach",
        "C Garage"
       ],
       [
        "Omen",
        "C Long"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "spike": "C Site",
      "smokes": [
       "C Long",
       "C Garage"
      ],
      "arrows": [
       [
        "C Link",
        "C Site",
        "util"
       ]
      ]
     },
     "question": "Sabemos dónde está Neon. ¿Cómo entramos?",
     "options": [
      {
       "t": "Nanoswarm de Killjoy a la caja y entrada a la vez por C Link y C Window",
       "ok": true,
       "why": "La molly la saca de cobertura y la entrada doble la mata sin trade posible."
      },
      {
       "t": "Jett entra sola con dash",
       "ok": false,
       "why": "Sin apoyo, Neon y el Breach la cruzan."
      },
      {
       "t": "Defusear sin limpiar el site",
       "ok": false,
       "why": "Neon está a dos metros: muerte segura."
      }
     ],
     "result": [
      [
       "C Link",
       "C Site",
       "util"
      ],
      [
       "C Link",
       "C Site",
       "ally"
      ],
      [
       "C Window",
       "C Site",
       "ally"
      ]
     ]
    },
    {
     "time": "Spike 0:20",
     "narration": "Matamos a Neon y al Breach que salía del humo, pero perdemos a Jett. 3v2: Omen enemigo en C Long y Cypher lejos en A.",
     "board": {
      "allies": [
       [
        "Sova",
        "C Site"
       ],
       [
        "Omen",
        "C Window"
       ],
       [
        "Killjoy",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Omen",
        "C Long"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "spike": "C Site",
      "smokes": [
       "C Long"
      ]
     },
     "question": "¿Cómo defuseamos?",
     "options": [
      {
       "t": "Sova defusea; Killjoy torreta mirando C Long y Omen cubre Cubby y Garage",
       "ok": true,
       "why": "El defusero queda protegido de las dos únicas entradas del rival."
      },
      {
       "t": "Defusear los tres a la vez",
       "ok": false,
       "why": "Solo uno puede: los otros dos no aportan nada mirando la spike."
      },
      {
       "t": "Ir a cazar al Omen a C Long",
       "ok": false,
       "why": "Pierdes tiempo de defuse y el duelo es a su favor dentro del humo."
      }
     ],
     "result": [
      [
       "C Window",
       "C Cubby",
       "ally"
      ],
      [
       "C Site",
       "C Long",
       "util"
      ]
     ]
    },
    {
     "time": "Spike 0:08",
     "narration": "El Omen enemigo asoma al defuse y Killjoy lo mata con la ayuda de la torreta. El Cypher no llega a tiempo.",
     "board": {
      "allies": [
       [
        "Sova",
        "C Site"
       ],
       [
        "Omen",
        "C Cubby"
       ],
       [
        "Killjoy",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "Mid Doors"
       ]
      ],
      "spike": "C Site",
      "arrows": [
       [
        "A Lobby",
        "Mid Doors",
        "enemy"
       ]
      ]
     },
     "question": "Queda el Cypher llegando por Mid. ¿Qué hace Sova?",
     "options": [
      {
       "t": "Seguir el defuse completo mientras Omen y Killjoy cubren",
       "ok": true,
       "why": "Con 2 compañeros cubriendo, el Cypher no puede interrumpir sin morir."
      },
      {
       "t": "Soltar el defuse para pelear",
       "ok": false,
       "why": "Pierdes el progreso y te quedas sin tiempo."
      },
      {
       "t": "Huir del site",
       "ok": false,
       "why": "Regalas la ronda ganada."
      }
     ],
     "result": [
      [
       "Mid Doors",
       "C Garage",
       "enemy"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: la info temprana delató el execute, Killjoy sobrevivió al retroceder, la rotación fue escalonada y el retake con 4 juntos y utilidad ganó C."
  }
 }
};
