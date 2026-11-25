window.MAPDATA = window.MAPDATA || {};
MAPDATA["breeze"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "A por Shop + Mid Hall",
   "type": "Execute",
   "tip": "A Site es enorme: el muro de Viper hacia A Bridge es la mitad de la ejecución. Sin muro, no entres.",
   "steps": [
    {
     "text": "Salida: Jett, Sova, KAY/O y Viper a A Lobby. Cypher va a Mid Bottom, deja trampa y escucha el flanco por Mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "KAY/O",
        "A Lobby"
       ],
       [
        "Viper",
        "A Lobby"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Pyramids"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "A Lobby",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Bottom",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Sova lanza dardo a A Site desde A Lobby: revela Killjoy en A Pyramids y Chamber en A Bridge. KAY/O y Jett suben a A Shop.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Shop"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "KAY/O",
        "A Shop"
       ],
       [
        "Viper",
        "A Lobby"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Pyramids"
       ],
       [
        "Chamber",
        "A Bridge"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Wall"
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
        "A Shop",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Viper levanta el muro desde A Shop hasta A Bridge y humea A Ramp: el Operator de Chamber y la rotación quedan cortados. Cypher sube a Mid Hall para cubrir Mid Wood Doors.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Shop"
       ],
       [
        "Sova",
        "A Shop"
       ],
       [
        "KAY/O",
        "A Shop"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Hall"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Pyramids"
       ],
       [
        "Chamber",
        "A Bridge"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ]
      ],
      "smokes": [
       "A Bridge",
       "A Ramp"
      ],
      "arrows": [
       [
        "A Shop",
        "A Bridge",
        "util"
       ],
       [
        "A Shop",
        "A Ramp",
        "util"
       ],
       [
        "Mid Bottom",
        "Mid Hall",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "KAY/O lanza flash y cuchillo al site (Killjoy suprimido). Jett entra con dash a A Pyramids, Sova y KAY/O detrás tradeando; Cypher asoma por Mid Wood Doors.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Site"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Wood Doors"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Pyramids"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ]
      ],
      "smokes": [
       "A Bridge",
       "A Ramp"
      ],
      "arrows": [
       [
        "A Shop",
        "A Site",
        "util"
       ],
       [
        "A Shop",
        "A Pyramids",
        "ally"
       ],
       [
        "A Shop",
        "A Site",
        "ally"
       ],
       [
        "Mid Hall",
        "Mid Wood Doors",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant detrás de A Pyramids. Post-plant fuera del site: Viper en A Shop con molly, Sova en A Lobby con dardo de retake, Cypher en Mid Hall corta el flanco.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "KAY/O",
        "A Site"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Hall"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Bridge"
       ],
       [
        "?",
        "A Ramp"
       ],
       [
        "?",
        "Mid Top"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Bridge"
      ],
      "arrows": [
       [
        "A Site",
        "A Lobby",
        "ally"
       ],
       [
        "A Bridge",
        "A Site",
        "enemy"
       ],
       [
        "Mid Top",
        "Mid Hall",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "B rápido por Main",
   "type": "Execute",
   "tip": "B es pequeño y se planta rápido, pero solo si humeas B Wall y B Tunnel antes de pisar el site.",
   "steps": [
    {
     "text": "Salida rápida: Jett, KAY/O, Viper y Sova a B Window. Cypher por Mid Cannon hacia B Elbow para cortar el flanco de B Tunnel.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Window"
       ],
       [
        "Sova",
        "B Window"
       ],
       [
        "KAY/O",
        "B Window"
       ],
       [
        "Viper",
        "B Window"
       ],
       [
        "Cypher",
        "Mid Cannon"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Back"
       ],
       [
        "?",
        "B Wall"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "A Site"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "B Window",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Cannon",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Sova dardo a B Site desde B Main; KAY/O cuchillo de supresión. Cypher pone tripwire en B Elbow mirando a B Tunnel.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Main"
       ],
       [
        "Sova",
        "B Window"
       ],
       [
        "KAY/O",
        "B Main"
       ],
       [
        "Viper",
        "B Main"
       ],
       [
        "Cypher",
        "B Elbow"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "B Back"
       ],
       [
        "Skye",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "A Site"
       ]
      ],
      "arrows": [
       [
        "B Window",
        "B Site",
        "util"
       ],
       [
        "B Main",
        "B Site",
        "util"
       ],
       [
        "Mid Cannon",
        "B Elbow",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Viper humea B Wall y B Tunnel y lanza el muro tapando B Back. El site queda aislado de la rotación por Mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Main"
       ],
       [
        "Sova",
        "B Main"
       ],
       [
        "KAY/O",
        "B Main"
       ],
       [
        "Viper",
        "B Main"
       ],
       [
        "Cypher",
        "B Elbow"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "B Back"
       ],
       [
        "Skye",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "A Site"
       ]
      ],
      "smokes": [
       "B Wall",
       "B Tunnel",
       "B Back"
      ],
      "arrows": [
       [
        "B Main",
        "B Wall",
        "util"
       ],
       [
        "B Main",
        "B Tunnel",
        "util"
       ],
       [
        "B Main",
        "B Back",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Flash de KAY/O por encima de B Main y entrada: Jett al pilar central, Sova y KAY/O detrás, Viper último para plantar.",
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
        "KAY/O",
        "B Site"
       ],
       [
        "Viper",
        "B Main"
       ],
       [
        "Cypher",
        "B Elbow"
       ]
      ],
      "enemies": [
       [
        "Skye",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ],
       [
        "?",
        "Mid Top"
       ]
      ],
      "smokes": [
       "B Wall",
       "B Tunnel",
       "B Back"
      ],
      "arrows": [
       [
        "B Main",
        "B Site",
        "util"
       ],
       [
        "B Main",
        "B Site",
        "ally"
       ],
       [
        "Mid Top",
        "B Tunnel",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Plant en el pilar. Post-plant: Viper y Sova desde B Main/B Window, Jett en B Site, Cypher en B Elbow aguanta la rotación de B Tunnel.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Window"
       ],
       [
        "KAY/O",
        "B Main"
       ],
       [
        "Viper",
        "B Main"
       ],
       [
        "Cypher",
        "B Elbow"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Tunnel"
       ],
       [
        "?",
        "B Wall"
       ],
       [
        "?",
        "Defender Side Arches"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Wall"
      ],
      "arrows": [
       [
        "B Site",
        "B Main",
        "ally"
       ],
       [
        "B Tunnel",
        "B Elbow",
        "enemy"
       ],
       [
        "B Wall",
        "B Site",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "Default Mid → split A",
   "type": "Split",
   "tip": "Mid Pillar es la bisagra de Breeze: con él puedes cortar rotaciones y caer a A por dos lados.",
   "steps": [
    {
     "text": "Default: Cypher en B Main (trampa y ruido), Jett y KAY/O en Mid Bottom, Sova y Viper en A Lobby.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Bottom"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "KAY/O",
        "Mid Bottom"
       ],
       [
        "Viper",
        "A Lobby"
       ],
       [
        "Cypher",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "Mid Top"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "A Bridge"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "Mid Bottom",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "A Lobby",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "B Main",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Control de Mid: Viper humea Mid Nest, KAY/O flashea Mid Pillar y Jett lo toma. Sova dardo a Mid Top para ver al que empuja.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Pillar"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "KAY/O",
        "Mid Bottom"
       ],
       [
        "Viper",
        "A Lobby"
       ],
       [
        "Cypher",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "Mid Top"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "A Bridge"
       ]
      ],
      "smokes": [
       "Mid Nest"
      ],
      "arrows": [
       [
        "Mid Bottom",
        "Mid Pillar",
        "util"
       ],
       [
        "Mid Bottom",
        "Mid Pillar",
        "ally"
       ],
       [
        "A Lobby",
        "Mid Top",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Con Pillar nuestro, Jett y KAY/O pasan a Mid Hall. Sova y Viper suben a A Shop. Cypher deja cámara en B Main y se acerca a Mid Bottom.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Hall"
       ],
       [
        "Sova",
        "A Shop"
       ],
       [
        "KAY/O",
        "Mid Hall"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Pyramids"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "A Bridge"
       ]
      ],
      "smokes": [
       "Mid Nest"
      ],
      "arrows": [
       [
        "Mid Pillar",
        "Mid Hall",
        "ally"
       ],
       [
        "A Lobby",
        "A Shop",
        "ally"
       ],
       [
        "B Main",
        "Mid Bottom",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Split: Viper muro a A Bridge y humo en A Ramp. KAY/O flash por Mid Wood Doors, Jett entra por ahí; Sova y Viper por A Shop a la vez.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Wood Doors"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "Mid Wood Doors"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Hall"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Pyramids"
       ],
       [
        "Harbor",
        "A Site"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "smokes": [
       "A Bridge",
       "A Ramp"
      ],
      "arrows": [
       [
        "A Shop",
        "A Bridge",
        "util"
       ],
       [
        "Mid Wood Doors",
        "A Site",
        "util"
       ],
       [
        "Mid Wood Doors",
        "A Site",
        "ally"
       ],
       [
        "A Shop",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Site limpio, plant. Cypher cierra Mid Hall, Jett y Sova en A Pyramids/A Site, Viper y KAY/O en A Shop para el post-plant.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Shop"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Hall"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Bridge"
       ],
       [
        "?",
        "Mid Top"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Bridge"
      ],
      "arrows": [
       [
        "A Bridge",
        "A Site",
        "enemy"
       ],
       [
        "Mid Top",
        "Mid Hall",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Op en Mid + ancla A",
   "type": "Setup",
   "tip": "El Operator en Mid gana info gratis: dispara una vez y cambia de posición, nunca repitas ángulo.",
   "steps": [
    {
     "text": "Setup 1-2-2: Jett con Operator en Mid Nest, Cypher ancla B con trampa en B Main y cámara en B Site, KAY/O en B Wall. Viper y Sova en A.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Nest"
       ],
       [
        "Sova",
        "A Ramp"
       ],
       [
        "KAY/O",
        "B Wall"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "Attacker Side Spawn"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Bottom"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "Mid Nest",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Ramp",
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
     "text": "Sova dardo a A Shop desde A Pyramids: ve 2 en A Lobby. Jett aguanta Mid Pillar desde Mid Nest con el Operator.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Nest"
       ],
       [
        "Sova",
        "A Pyramids"
       ],
       [
        "KAY/O",
        "B Wall"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "A Shop"
       ],
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "B Window"
       ]
      ],
      "arrows": [
       [
        "A Pyramids",
        "A Shop",
        "util"
       ],
       [
        "Mid Nest",
        "Mid Pillar",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Viper levanta muro dividiendo A Site y A Shop para retrasar. KAY/O se acerca a Mid Top para ayudar a Jett o rotar a A.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Nest"
       ],
       [
        "Sova",
        "A Pyramids"
       ],
       [
        "KAY/O",
        "Mid Top"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Shop"
       ],
       [
        "?",
        "A Shop"
       ],
       [
        "?",
        "Mid Pillar"
       ],
       [
        "?",
        "B Window"
       ]
      ],
      "smokes": [
       "A Shop"
      ],
      "arrows": [
       [
        "A Site",
        "A Shop",
        "util"
       ],
       [
        "B Wall",
        "Mid Top",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Si cargan A: Jett rota por Mid Hall/Mid Wood Doors para cruzar, KAY/O a A Bridge. Cypher se queda en B por si es fake.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Wood Doors"
       ],
       [
        "Sova",
        "A Pyramids"
       ],
       [
        "KAY/O",
        "A Bridge"
       ],
       [
        "Viper",
        "A Ramp"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Shop"
       ],
       [
        "?",
        "A Shop"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "Mid Pillar"
       ]
      ],
      "smokes": [
       "A Shop"
      ],
      "arrows": [
       [
        "Mid Nest",
        "Mid Wood Doors",
        "ally"
       ],
       [
        "Mid Top",
        "A Bridge",
        "ally"
       ],
       [
        "A Site",
        "A Ramp",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake A desde Bridge y Wood Doors",
   "type": "Retake",
   "tip": "No retakees de uno en uno: agrupad en A Bridge y entrad con utilidad todos a la vez.",
   "steps": [
    {
     "text": "Spike plantada en A Site, 4v4. Viper y Sova sobrevivieron y se retiran a A Ramp; Jett llega a Mid Top, KAY/O rota desde B Wall.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Top"
       ],
       [
        "Sova",
        "A Ramp"
       ],
       [
        "KAY/O",
        "B Tunnel"
       ],
       [
        "Viper",
        "A Ramp"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "?",
        "Mid Hall"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Mid Nest",
        "Mid Top",
        "ally"
       ],
       [
        "B Wall",
        "B Tunnel",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Agrupar: Sova, Viper y KAY/O en A Bridge; Jett en Mid Wood Doors para entrar por el otro lado.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Wood Doors"
       ],
       [
        "Sova",
        "A Bridge"
       ],
       [
        "KAY/O",
        "A Bridge"
       ],
       [
        "Viper",
        "A Bridge"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "?",
        "Mid Hall"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Mid Top",
        "Mid Wood Doors",
        "ally"
       ],
       [
        "B Tunnel",
        "A Bridge",
        "ally"
       ],
       [
        "A Ramp",
        "A Bridge",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Utilidad: dardo de Sova al site, Viper humea A Shop para cortar a los de fuera, KAY/O cuchillo para quitar habilidades.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Wood Doors"
       ],
       [
        "Sova",
        "A Bridge"
       ],
       [
        "KAY/O",
        "A Bridge"
       ],
       [
        "Viper",
        "A Bridge"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "?",
        "Mid Hall"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Shop"
      ],
      "arrows": [
       [
        "A Bridge",
        "A Site",
        "util"
       ],
       [
        "A Bridge",
        "A Shop",
        "util"
       ],
       [
        "A Bridge",
        "A Pyramids",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez: flash de KAY/O, Sova y KAY/O al site, Jett cae desde Mid Wood Doors a A Pyramids. Viper defusa con sus compañeros cubriendo.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Site"
       ],
       [
        "Viper",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Shop"
       ],
       [
        "?",
        "Mid Hall"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Shop"
      ],
      "arrows": [
       [
        "A Bridge",
        "A Site",
        "ally"
       ],
       [
        "Mid Wood Doors",
        "A Pyramids",
        "ally"
       ],
       [
        "A Bridge",
        "A Site",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Control temprano de Mid",
   "type": "Setup",
   "tip": "En Plata–Oro el rival suele ir a Mid sin utilidad: castígalo pronto y vuelve a tu posición.",
   "steps": [
    {
     "text": "Inicio: Jett y KAY/O van a Mid Top, Viper humea Mid Pillar desde Mid Nest. Cypher en B, Sova en A.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Top"
       ],
       [
        "Sova",
        "A Pyramids"
       ],
       [
        "KAY/O",
        "Mid Top"
       ],
       [
        "Viper",
        "Mid Nest"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "B Window"
       ]
      ],
      "smokes": [
       "Mid Pillar"
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "Mid Top",
        "ally"
       ],
       [
        "Mid Nest",
        "Mid Pillar",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Sova dardo a Mid Bottom desde Mid Top: revela 2 rivales esperando para tomar Pillar.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Top"
       ],
       [
        "Sova",
        "Mid Wood Doors"
       ],
       [
        "KAY/O",
        "Mid Top"
       ],
       [
        "Viper",
        "Mid Nest"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "Mid Bottom"
       ],
       [
        "Skye",
        "Mid Bottom"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "B Window"
       ]
      ],
      "smokes": [
       "Mid Pillar"
      ],
      "arrows": [
       [
        "Mid Wood Doors",
        "Mid Bottom",
        "util"
       ],
       [
        "A Pyramids",
        "Mid Wood Doors",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "KAY/O flash por encima de Pillar y Jett asoma con KAY/O tradeando: buscamos una baja y nada más.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Pillar"
       ],
       [
        "Sova",
        "Mid Wood Doors"
       ],
       [
        "KAY/O",
        "Mid Top"
       ],
       [
        "Viper",
        "Mid Nest"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Skye",
        "Mid Bottom"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "B Window"
       ]
      ],
      "arrows": [
       [
        "Mid Top",
        "Mid Bottom",
        "util"
       ],
       [
        "Mid Top",
        "Mid Pillar",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Con la baja, todos vuelven a su posición: Jett a Mid Nest, KAY/O a B Wall, Sova a A Pyramids. Ventaja 5v4 sin arriesgar más.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Nest"
       ],
       [
        "Sova",
        "A Pyramids"
       ],
       [
        "KAY/O",
        "B Wall"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Skye",
        "Mid Bottom"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "B Window"
       ]
      ],
      "arrows": [
       [
        "Mid Pillar",
        "Mid Nest",
        "ally"
       ],
       [
        "Mid Top",
        "B Wall",
        "ally"
       ],
       [
        "Mid Wood Doors",
        "A Pyramids",
        "ally"
       ],
       [
        "Mid Nest",
        "A Site",
        "ally"
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
   "title": "Operator en Mid Nest",
   "situation": "A 1:30 el Chamber rival nos ha matado dos rondas seguidas desde Mid Nest cuando cruzamos Mid Pillar.",
   "enemy": [
    {
     "t": "Repite el Operator en Mid Nest",
     "pct": 60
    },
    {
     "t": "Se mueve a Mid Top más agresivo",
     "pct": 25
    },
    {
     "t": "Se va a A Bridge",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Humo de Viper en Mid Nest y cruzar Pillar con flash de KAY/O",
     "ok": true,
     "why": "Quitas la línea al Operator en vez de ganarle el duelo; en Oro repiten lo que les funciona."
    },
    {
     "t": "Asomar más rápido con Jett para ganarle el duelo",
     "ok": false,
     "why": "Le estás dando exactamente el duelo que quiere a la distancia que le favorece."
    },
    {
     "t": "Abandonar Mid el resto de la partida",
     "ok": false,
     "why": "Pierdes la bisagra del mapa y él puede rotar libre a ambos sites."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Bottom"
     ],
     [
      "Sova",
      "Mid Bottom"
     ],
     [
      "KAY/O",
      "Mid Bottom"
     ],
     [
      "Viper",
      "A Lobby"
     ],
     [
      "Cypher",
      "B Main"
     ]
    ],
    "enemies": [
     [
      "Chamber",
      "Mid Nest"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "Mid Top"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Nest",
     "Mid Pillar",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Bottom",
     "Mid Nest",
     "util"
    ],
    [
     "Mid Bottom",
     "Mid Pillar",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Push en Mid Hall",
   "situation": "Hemos perdido 2 rondas por un push de 2 defensores en Mid Hall a 1:30 que nos coge cruzando a A Shop.",
   "enemy": [
    {
     "t": "Repetirán el push por Mid Hall",
     "pct": 60
    },
    {
     "t": "Cambian a jugar pasivo en A Site",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Esperar el push en A Lobby con trampa de Cypher y flash de KAY/O",
     "ok": true,
     "why": "Castigas su rutina con un crossfire; tras 2 bajas, el site queda débil."
    },
    {
     "t": "Volver a cruzar igual pero más rápido",
     "ok": false,
     "why": "Haces exactamente lo que esperan."
    },
    {
     "t": "Mandar a Jett sola a Mid Hall a buscar el duelo",
     "ok": false,
     "why": "1v2 sin trade: regalas otra baja y el ritmo."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Lobby"
     ],
     [
      "Sova",
      "A Lobby"
     ],
     [
      "KAY/O",
      "A Lobby"
     ],
     [
      "Viper",
      "A Shop"
     ],
     [
      "Cypher",
      "A Lobby"
     ]
    ],
    "enemies": [
     [
      "Skye",
      "Mid Hall"
     ],
     [
      "Harbor",
      "Mid Wood Doors"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "Mid Nest"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Wood Doors",
     "Mid Hall",
     "enemy"
    ],
    [
     "Mid Hall",
     "A Lobby",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Lobby",
     "Mid Hall",
     "util"
    ],
    [
     "A Shop",
     "A Lobby",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Post-plant A 3v2",
   "situation": "Spike plantada en A Site a 0:35. Somos 3 (Viper en A Shop, Sova en A Lobby, Jett en A Pyramids). Quedan 2 rivales.",
   "enemy": [
    {
     "t": "Retake juntos por A Bridge",
     "pct": 55
    },
    {
     "t": "Uno por A Bridge y otro por Mid Wood Doors",
     "pct": 35
    },
    {
     "t": "Se salvan el arma",
     "pct": 10
    }
   ],
   "responses": [
    {
     "t": "Jett sale del site a A Shop; Viper molly a la spike cuando oigamos defusa",
     "ok": true,
     "why": "Desde fuera los obligas a entrar en vuestro crossfire y la molly les gana tiempo."
    },
    {
     "t": "Quedarnos los 3 dentro del site mirando a A Bridge",
     "ok": false,
     "why": "Si entran juntos con utilidad os pillan agrupados y sin ángulos."
    },
    {
     "t": "Ir a buscarlos a A Bridge",
     "ok": false,
     "why": "Les cedes la ventaja de defensor y el reloj juega a vuestro favor."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Pyramids"
     ],
     [
      "Sova",
      "A Lobby"
     ],
     [
      "Viper",
      "A Shop"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Bridge"
     ],
     [
      "?",
      "Mid Top"
     ]
    ],
    "spike": "A Site"
   },
   "enemyMove": [
    [
     "A Bridge",
     "A Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Pyramids",
     "A Shop",
     "ally"
    ],
    [
     "A Shop",
     "A Site",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Ronda eco tras perder la pistola",
   "situation": "Ronda 2, sin dinero: solo pistolas. Los defensores tienen Spectres y Chamber con Marshal en Mid.",
   "enemy": [
    {
     "t": "Juegan de lejos en sus posiciones de siempre",
     "pct": 65
    },
    {
     "t": "Empujan para buscar bajas",
     "pct": 35
    }
   ],
   "responses": [
    {
     "t": "Rush 5 a B por B Main con Sheriffs y todo el daño en la misma esquina",
     "ok": true,
     "why": "B es pequeño y de distancias cortas: la única forma de que una pistola gane a un rifle."
    },
    {
     "t": "Ir a A y pelear desde A Shop a distancia",
     "ok": false,
     "why": "Las líneas largas de A son el peor escenario para pistolas."
    },
    {
     "t": "Jugar default lento por Mid",
     "ok": false,
     "why": "Pierdes duelos largos uno a uno y les regalas economía."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Window"
     ],
     [
      "Sova",
      "B Window"
     ],
     [
      "KAY/O",
      "B Window"
     ],
     [
      "Viper",
      "B Window"
     ],
     [
      "Cypher",
      "Mid Cannon"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "B Wall"
     ],
     [
      "Chamber",
      "Mid Nest"
     ],
     [
      "?",
      "A Site"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Wall",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Window",
     "B Main",
     "ally"
    ],
    [
     "B Main",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Lurk de Cypher oye rotación",
   "situation": "A 1:00, Cypher en B Main oye que 2 rivales abandonan B Site hacia B Tunnel. Nosotros estamos 4 en A Lobby.",
   "enemy": [
    {
     "t": "Rotan a A por Mid Top",
     "pct": 55
    },
    {
     "t": "Se quedan en Mid Top para flanquear",
     "pct": 30
    },
    {
     "t": "Vuelven a B",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Ejecutar A ya, antes de que lleguen, y que Cypher entre en B y avise",
     "ok": true,
     "why": "Ventaja de números temporal: castigas antes de que se complete la rotación."
    },
    {
     "t": "Esperar en A Lobby a 0:20 para ver qué pasa",
     "ok": false,
     "why": "Les das tiempo a rotar y montar crossfire."
    },
    {
     "t": "Que los 4 se vayan a B",
     "ok": false,
     "why": "Recorrido muy largo; llegaréis tarde y ellos ya tendrán B cubierto otra vez."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Lobby"
     ],
     [
      "Sova",
      "A Lobby"
     ],
     [
      "KAY/O",
      "A Lobby"
     ],
     [
      "Viper",
      "A Lobby"
     ],
     [
      "Cypher",
      "B Main"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Tunnel"
     ],
     [
      "?",
      "B Tunnel"
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
      "A Pyramids"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Tunnel",
     "Mid Top",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Lobby",
     "A Shop",
     "ally"
    ],
    [
     "A Shop",
     "A Site",
     "ally"
    ],
    [
     "B Main",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Pick de Operator en Mid",
   "situation": "Nuestra Jett mata a 1 atacante cruzando Mid Pillar con el Operator a 1:35. 5v4.",
   "enemy": [
    {
     "t": "Evitan Mid y van a B",
     "pct": 45
    },
    {
     "t": "Ejecutan A por A Shop",
     "pct": 35
    },
    {
     "t": "Vuelven a pelear Mid con humos",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Reposicionar el Operator (a Mid Top o A Bridge) y no repetir ángulo",
     "ok": true,
     "why": "Ya saben dónde estás; repetir es morir. Con 5v4 juega pasivo y espera."
    },
    {
     "t": "Avanzar a Mid Pillar a buscar más bajas",
     "ok": false,
     "why": "Arriesgar el Operator en ventaja numérica es el error clásico."
    },
    {
     "t": "Mandar 2 de A a B por si acaso",
     "ok": false,
     "why": "Te descuelgas A sin información real."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Nest"
     ],
     [
      "Sova",
      "A Pyramids"
     ],
     [
      "KAY/O",
      "B Wall"
     ],
     [
      "Viper",
      "A Site"
     ],
     [
      "Cypher",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "Mid Bottom"
     ],
     [
      "?",
      "B Window"
     ],
     [
      "?",
      "A Lobby"
     ],
     [
      "?",
      "B Window"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Bottom",
     "Mid Cannon",
     "enemy"
    ],
    [
     "Mid Cannon",
     "B Main",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Nest",
     "Mid Top",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Rush a B por B Main",
   "situation": "A 1:35 oímos 4 rivales corriendo por B Window. En B solo están Cypher y KAY/O.",
   "enemy": [
    {
     "t": "Ejecutan B con humos ya",
     "pct": 65
    },
    {
     "t": "Fake y van a A por Mid",
     "pct": 35
    }
   ],
   "responses": [
    {
     "t": "Cypher y KAY/O retrasan desde atrás con utilidad y el resto rota por B Tunnel para retake",
     "ok": true,
     "why": "2v4 en el site es perder 2; retrasar y reagrupar convierte la ronda en un 5v4 de retake."
    },
    {
     "t": "Cypher y KAY/O aguantan el pilar hasta morir",
     "ok": false,
     "why": "Regaláis 2 bajas sin trade."
    },
    {
     "t": "Nadie rota hasta ver la spike",
     "ok": false,
     "why": "Llegáis tarde y de uno en uno."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Nest"
     ],
     [
      "Sova",
      "A Pyramids"
     ],
     [
      "KAY/O",
      "B Wall"
     ],
     [
      "Viper",
      "A Site"
     ],
     [
      "Cypher",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Window"
     ],
     [
      "?",
      "B Window"
     ],
     [
      "?",
      "B Main"
     ],
     [
      "?",
      "B Main"
     ],
     [
      "?",
      "Mid Bottom"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Main",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Site",
     "B Back",
     "ally"
    ],
    [
     "Mid Nest",
     "B Tunnel",
     "ally"
    ],
    [
     "A Site",
     "Mid Top",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake A 3v3 con 30 s",
   "situation": "Spike plantada en A Site detrás de A Pyramids. Somos 3 en A Bridge y Mid Top, ellos 3 en A Shop, A Site y Mid Hall.",
   "enemy": [
    {
     "t": "Juegan fuera del site desde A Shop y Mid Hall",
     "pct": 60
    },
    {
     "t": "Se quedan los 3 en el site",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Despejar Mid Hall primero por Mid Wood Doors y entrar juntos con flash",
     "ok": true,
     "why": "Quitas el ángulo de fuera más peligroso antes de pisar la spike."
    },
    {
     "t": "Ir directo a defusar con humo",
     "ok": false,
     "why": "Los de fuera te matan en la defusa."
    },
    {
     "t": "Entrar de uno en uno según llegamos",
     "ok": false,
     "why": "Tres duelos 1v3 seguidos: la forma más rápida de perder."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Top"
     ],
     [
      "Sova",
      "A Bridge"
     ],
     [
      "KAY/O",
      "A Bridge"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Shop"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "Mid Hall"
     ]
    ],
    "spike": "A Site"
   },
   "enemyMove": [
    [
     "A Shop",
     "A Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Top",
     "Mid Wood Doors",
     "ally"
    ],
    [
     "A Bridge",
     "A Site",
     "util"
    ],
    [
     "A Bridge",
     "A Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Flanco por Mid Hall",
   "situation": "A 1:10 hemos rotado 3 a B por un ruido en B Main. Cypher oye pasos en Mid Hall con su trampa.",
   "enemy": [
    {
     "t": "Uno lurkea Mid Hall para cortar la rotación",
     "pct": 50
    },
    {
     "t": "Ejecutan A con el resto",
     "pct": 30
    },
    {
     "t": "Es un solo jugador haciendo ruido",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Sova y Viper vuelven a cubrir Mid Top y A Ramp mientras Cypher ancla B",
     "ok": true,
     "why": "Si es lurk, pillas su flanco; si es ejecución, ya tienes gente cerca de A."
    },
    {
     "t": "Ignorar la trampa y mantener 4 en B",
     "ok": false,
     "why": "Dejas A y la espalda abiertas."
    },
    {
     "t": "Mandar a Jett sola a Mid Hall",
     "ok": false,
     "why": "Duelo sin trade en terreno del rival."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Site"
     ],
     [
      "Sova",
      "B Wall"
     ],
     [
      "KAY/O",
      "B Back"
     ],
     [
      "Viper",
      "B Tunnel"
     ],
     [
      "Cypher",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "Mid Hall"
     ],
     [
      "?",
      "B Main"
     ],
     [
      "?",
      "A Lobby"
     ],
     [
      "?",
      "A Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Hall",
     "Mid Wood Doors",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Tunnel",
     "Mid Top",
     "ally"
    ],
    [
     "B Wall",
     "A Ramp",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Ellos en eco",
   "situation": "Ronda 2: ganamos la pistola. Los rivales solo tienen pistolas y Sheriffs; nosotros Spectres y escudo.",
   "enemy": [
    {
     "t": "Rush 5 a un site con distancias cortas",
     "pct": 70
    },
    {
     "t": "Se separan buscando picks",
     "pct": 30
    }
   ],
   "responses": [
    {
     "t": "Jugar retrasado con distancia y no asomar esquinas cerradas",
     "ok": true,
     "why": "A distancia el rifle/SMG gana siempre; dentro de esquinas pierdes contra 5 pistolas."
    },
    {
     "t": "Empujar Mid y B Main para buscar bajas",
     "ok": false,
     "why": "Pierdes ventaja: a corta distancia una Sheriff mata de un tiro."
    },
    {
     "t": "Stackear 4 en un site a ciegas",
     "ok": false,
     "why": "Si van al otro, pierdes una ronda ganada."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Nest"
     ],
     [
      "Sova",
      "A Pyramids"
     ],
     [
      "KAY/O",
      "B Wall"
     ],
     [
      "Viper",
      "A Site"
     ],
     [
      "Cypher",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Window"
     ],
     [
      "?",
      "B Window"
     ],
     [
      "?",
      "B Main"
     ],
     [
      "?",
      "Mid Bottom"
     ],
     [
      "?",
      "A Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Main",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Site",
     "B Back",
     "ally"
    ],
    [
     "B Wall",
     "B Site",
     "ally"
    ]
   ]
  }
 ],
 "rounds": {
  "attack": {
   "side": "Ataque",
   "title": "Execute A por Shop con muro de Viper",
   "strategy": "A por Shop + Mid Hall",
   "intro": "Ronda de compra completa 5v5. Plan: tomar A Shop con info de Sova, muro de Viper a A Bridge, entrar con flash de KAY/O y jugar post-plant fuera del site.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Salimos de spawn. Cuatro van a A Lobby y Cypher a Mid Bottom.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "KAY/O",
        "A Lobby"
       ],
       [
        "Viper",
        "A Lobby"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Pyramids"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ]
      ]
     },
     "question": "¿Qué hace Cypher en Mid Bottom?",
     "options": [
      {
       "t": "Trampa y cámara para vigilar el flanco por Mid",
       "ok": true,
       "why": "Nos cubre la espalda sin gastar a nadie más."
      },
      {
       "t": "Cruzar Mid Pillar solo para buscar bajas",
       "ok": false,
       "why": "Hay un Operator en Mid Nest y no tiene trade."
      },
      {
       "t": "Irse a B a hacer ruido",
       "ok": false,
       "why": "Nos quedamos sin cobertura de flanco en A."
      }
     ],
     "result": [
      [
       "Attacker Side Spawn",
       "A Lobby",
       "ally"
      ],
      [
       "Attacker Side Spawn",
       "Mid Bottom",
       "ally"
      ]
     ]
    },
    {
     "time": "1:25",
     "narration": "Sova lanza dardo a A Site: Killjoy en A Pyramids y Chamber con Operator en A Bridge.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "KAY/O",
        "A Shop"
       ],
       [
        "Viper",
        "A Lobby"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Pyramids"
       ],
       [
        "Chamber",
        "A Bridge"
       ],
       [
        "?",
        "Mid Nest"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ]
      ],
      "arrows": [
       [
        "A Lobby",
        "A Site",
        "util"
       ]
      ]
     },
     "question": "Sabemos dónde está el Operator. ¿Cómo avanzamos?",
     "options": [
      {
       "t": "Muro de Viper desde A Shop hasta A Bridge y humo en A Ramp",
       "ok": true,
       "why": "Le quitas la línea a Chamber y aíslas el site de la rotación."
      },
      {
       "t": "Que Jett asome con dash a A Bridge",
       "ok": false,
       "why": "Duelo contra Operator a larga distancia: lo más probable es perder la Jett."
      },
      {
       "t": "Cambiar a B",
       "ok": false,
       "why": "Ya tenemos info y posición ganada en A."
      }
     ],
     "result": [
      [
       "A Shop",
       "A Bridge",
       "util"
      ],
      [
       "A Shop",
       "A Ramp",
       "util"
      ],
      [
       "A Lobby",
       "A Shop",
       "ally"
      ]
     ]
    },
    {
     "time": "1:10",
     "narration": "Muro y humo arriba. Todos en A Shop. Cypher avisa de pasos en Mid Hall.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Shop"
       ],
       [
        "Sova",
        "A Shop"
       ],
       [
        "KAY/O",
        "A Shop"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Pyramids"
       ],
       [
        "Chamber",
        "A Bridge"
       ],
       [
        "Skye",
        "Mid Hall"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Wall"
       ]
      ],
      "smokes": [
       "A Bridge",
       "A Ramp"
      ]
     },
     "question": "Un rival viene por Mid Hall. ¿Qué hacemos?",
     "options": [
      {
       "t": "Cypher y Sova lo cierran: dardo de choque y Cypher por Mid Bottom",
       "ok": true,
       "why": "Lo atrapáis entre dos y no os flanquea durante la ejecución."
      },
      {
       "t": "Ignorarlo y entrar al site",
       "ok": false,
       "why": "Os dispara por la espalda en plena entrada."
      },
      {
       "t": "Los 5 se dan la vuelta a por él",
       "ok": false,
       "why": "Perdéis el tiempo de la utilidad ya lanzada."
      }
     ],
     "result": [
      [
       "A Shop",
       "Mid Hall",
       "util"
      ],
      [
       "Mid Bottom",
       "Mid Hall",
       "ally"
      ]
     ]
    },
    {
     "time": "0:58",
     "narration": "Skye muere en Mid Hall. 5v4. Cypher ya está en Mid Hall controlando Mid Wood Doors.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Shop"
       ],
       [
        "Sova",
        "A Shop"
       ],
       [
        "KAY/O",
        "A Shop"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Hall"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Pyramids"
       ],
       [
        "Chamber",
        "A Bridge"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "Mid Nest"
       ]
      ],
      "smokes": [
       "A Bridge",
       "A Ramp"
      ]
     },
     "question": "¿Cómo entramos al site?",
     "options": [
      {
       "t": "Flash y cuchillo de KAY/O; Jett a A Pyramids y Sova/KAY/O tradeando",
       "ok": true,
       "why": "El cuchillo apaga la utilidad de Killjoy y la flash os da el primer duelo."
      },
      {
       "t": "Entrar en fila sin utilidad",
       "ok": false,
       "why": "La torreta y la alarma de Killjoy os desarman uno a uno."
      },
      {
       "t": "Esperar a que se acabe el humo",
       "ok": false,
       "why": "El muro dura poco; perdéis la ventaja que acabáis de pagar."
      }
     ],
     "result": [
      [
       "A Shop",
       "A Site",
       "util"
      ],
      [
       "A Shop",
       "A Pyramids",
       "ally"
      ],
      [
       "A Shop",
       "A Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:45",
     "narration": "Jett mata a Killjoy; KAY/O cae ante Chamber que se ha movido al site. Sova mata a Chamber. 4v2.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Hall"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "Mid Nest"
       ]
      ],
      "smokes": [
       "A Bridge"
      ]
     },
     "question": "¿Dónde plantamos y cómo nos colocamos?",
     "options": [
      {
       "t": "Plant tras A Pyramids y jugar fuera: Viper en A Shop, Sova a A Lobby, Cypher en Mid Hall",
       "ok": true,
       "why": "Desde fuera cubrís la spike sin quedar expuestos a utilidad de retake."
      },
      {
       "t": "Plantar y quedarnos los 4 en el site",
       "ok": false,
       "why": "Os agrupáis y les facilitáis un retake con utilidad."
      },
      {
       "t": "No plantar y cazar a los que quedan",
       "ok": false,
       "why": "Sin spike no hay presión: el tiempo corre para ellos."
      }
     ],
     "result": [
      [
       "A Site",
       "A Pyramids",
       "ally"
      ],
      [
       "A Site",
       "A Lobby",
       "ally"
      ]
     ]
    },
    {
     "time": "0:30",
     "narration": "Spike plantada. Viene uno por A Bridge y otro por Mid Top hacia Mid Wood Doors.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Lobby"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Cypher",
        "Mid Hall"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Bridge"
       ],
       [
        "?",
        "Mid Top"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Qué hacemos con el retake?",
     "options": [
      {
       "t": "Cypher sostiene Mid Wood Doors y Viper lanza molly a la spike al oír la defusa",
       "ok": true,
       "why": "Cada uno cubre una entrada y la molly obliga a soltar la defusa."
      },
      {
       "t": "Jett sale a duelo a A Bridge",
       "ok": false,
       "why": "Le das el duelo que necesita y abres el site."
      },
      {
       "t": "Todos a Mid Hall a por el segundo",
       "ok": false,
       "why": "Dejáis la spike libre para el de A Bridge."
      }
     ],
     "result": [
      [
       "A Shop",
       "A Site",
       "util"
      ],
      [
       "A Bridge",
       "A Site",
       "enemy"
      ],
      [
       "Mid Hall",
       "Mid Wood Doors",
       "ally"
      ]
     ]
    }
   ],
   "outcome": "Ganamos la ronda: la info de Sova y el muro de Viper anularon el Operator, Cypher cerró el flanco de Mid Hall y el post-plant fuera del site convirtió el retake en duelos a nuestro favor."
  },
  "defense": {
   "side": "Defensa",
   "title": "Operator en Mid y retake de A",
   "strategy": "Op en Mid + ancla A",
   "intro": "Ronda de compra completa 5v5. Plan: Jett con Operator en Mid Nest, Cypher ancla B, Sova y Viper en A; si cargan A, retrasar y retake todos juntos.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Nos colocamos: Jett en Mid Nest, Cypher en B Site, KAY/O en B Wall, Sova en A Ramp, Viper en A Site.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Nest"
       ],
       [
        "Sova",
        "A Ramp"
       ],
       [
        "KAY/O",
        "B Wall"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "Attacker Side Spawn"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Bottom"
       ]
      ]
     },
     "question": "¿Qué hace Sova al inicio?",
     "options": [
      {
       "t": "Dardo de reconocimiento a A Shop desde A Pyramids",
       "ok": true,
       "why": "Info temprana sin arriesgar la vida en el sitio más grande del mapa."
      },
      {
       "t": "Empujar a A Lobby a buscar bajas",
       "ok": false,
       "why": "Solo y lejos de ayuda: si muere, A queda casi vacío."
      },
      {
       "t": "Ir a Mid a ayudar a Jett",
       "ok": false,
       "why": "Deja A sin info ni utilidad."
      }
     ],
     "result": [
      [
       "A Pyramids",
       "A Shop",
       "util"
      ],
      [
       "A Ramp",
       "A Pyramids",
       "ally"
      ]
     ]
    },
    {
     "time": "1:28",
     "narration": "El dardo marca 3 en A Lobby. Jett mata a un Raze cruzando Mid Pillar con el Operator. 5v4.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Nest"
       ],
       [
        "Sova",
        "A Pyramids"
       ],
       [
        "KAY/O",
        "B Wall"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "A Lobby"
       ],
       [
        "Viper",
        "A Lobby"
       ],
       [
        "Skye",
        "A Lobby"
       ],
       [
        "Breach",
        "B Window"
       ]
      ]
     },
     "question": "Jett acaba de matar desde Mid Nest. ¿Y ahora?",
     "options": [
      {
       "t": "Cambiar a Mid Top o A Bridge; no repetir ángulo",
       "ok": true,
       "why": "Ya saben dónde estás; con ventaja no hace falta arriesgar."
      },
      {
       "t": "Volver a asomar el mismo ángulo",
       "ok": false,
       "why": "Te esperan con flash: pierdes el Operator."
      },
      {
       "t": "Empujar Mid Pillar",
       "ok": false,
       "why": "Arriesgas el arma más cara del equipo en ventaja."
      }
     ],
     "result": [
      [
       "Mid Nest",
       "Mid Top",
       "ally"
      ]
     ]
    },
    {
     "time": "1:10",
     "narration": "Viper atacante levanta muro desde A Shop. Se oyen 3 subiendo a A Shop. Breach sigue en B Window.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Top"
       ],
       [
        "Sova",
        "A Pyramids"
       ],
       [
        "KAY/O",
        "B Wall"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "A Shop"
       ],
       [
        "Viper",
        "A Shop"
       ],
       [
        "Skye",
        "A Shop"
       ],
       [
        "Breach",
        "B Window"
       ]
      ],
      "smokes": [
       "A Bridge",
       "A Ramp"
      ],
      "arrows": [
       [
        "A Shop",
        "A Bridge",
        "enemy"
       ]
      ]
     },
     "question": "Vienen 3 a A. ¿Cómo reaccionamos?",
     "options": [
      {
       "t": "Sova y Viper retrasan con utilidad y caen a A Ramp; KAY/O y Jett rotan; Cypher se queda en B",
       "ok": true,
       "why": "Retrasas sin morir y juntas 4 para el retake; Cypher vigila al de B."
      },
      {
       "t": "Sova y Viper pelean el site 2v3",
       "ok": false,
       "why": "Probablemente mueren los dos y el retake pasa a ser imposible."
      },
      {
       "t": "Rotan todos, también Cypher",
       "ok": false,
       "why": "Breach planta gratis en B."
      }
     ],
     "result": [
      [
       "A Site",
       "A Ramp",
       "ally"
      ],
      [
       "A Pyramids",
       "A Ramp",
       "ally"
      ],
      [
       "B Wall",
       "B Tunnel",
       "ally"
      ],
      [
       "Mid Top",
       "Mid Wood Doors",
       "ally"
      ]
     ]
    },
    {
     "time": "0:55",
     "narration": "Plantan en A Site tras A Pyramids. Sova consiguió una baja retrasando. 5v3 nosotros. Breach rota a Mid Hall.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Wood Doors"
       ],
       [
        "Sova",
        "A Ramp"
       ],
       [
        "KAY/O",
        "A Bridge"
       ],
       [
        "Viper",
        "A Ramp"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Shop"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Breach",
        "Mid Hall"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Cuándo entramos?",
     "options": [
      {
       "t": "Agrupar en A Bridge y entrar juntos con utilidad",
       "ok": true,
       "why": "Hay tiempo de sobra (45 s de spike): juntos ganáis el 5v3 seguro."
      },
      {
       "t": "Jett entra ya sola por Mid Wood Doors",
       "ok": false,
       "why": "Breach la flanquea desde Mid Hall y pierde un duelo gratis."
      },
      {
       "t": "Esperar a 0:10 de spike",
       "ok": false,
       "why": "No quedará tiempo para defusar si algo sale mal."
      }
     ],
     "result": [
      [
       "A Ramp",
       "A Bridge",
       "ally"
      ],
      [
       "B Site",
       "Defender Side Spawn",
       "ally"
      ]
     ]
    },
    {
     "time": "0:40",
     "narration": "Grupo en A Bridge. Cypher llega a A Bridge; Jett vigila Mid Wood Doors por si viene Breach.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Wood Doors"
       ],
       [
        "Sova",
        "A Bridge"
       ],
       [
        "KAY/O",
        "A Bridge"
       ],
       [
        "Viper",
        "A Bridge"
       ],
       [
        "Cypher",
        "A Bridge"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Shop"
       ],
       [
        "Skye",
        "A Site"
       ],
       [
        "Breach",
        "Mid Hall"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Qué utilidad usamos?",
     "options": [
      {
       "t": "Dardo de Sova al site, humo de Viper en A Shop y flash de KAY/O para entrar",
       "ok": true,
       "why": "Ves a Skye, cortas al de A Shop y ganas el primer duelo."
      },
      {
       "t": "Gastarla toda en Mid Hall",
       "ok": false,
       "why": "Lo importante está en el site, no en el flanco."
      },
      {
       "t": "Entrar sin utilidad para ahorrar",
       "ok": false,
       "why": "Es la ronda clave: guardar utilidad no sirve de nada si mueres."
      }
     ],
     "result": [
      [
       "A Bridge",
       "A Site",
       "util"
      ],
      [
       "A Bridge",
       "A Shop",
       "util"
      ],
      [
       "A Bridge",
       "A Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:25",
     "narration": "Matamos a Skye. Breach asoma por Mid Wood Doors y Jett lo mata. Queda Viper en A Shop tras el humo.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pyramids"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Site"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Cypher",
        "A Bridge"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Shop"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Shop"
      ]
     },
     "question": "Queda uno. ¿Cómo defusamos?",
     "options": [
      {
       "t": "Viper defusa mientras los demás cubren A Shop y A Pyramids",
       "ok": true,
       "why": "Defusa protegida: si Viper asoma, 4 rifles la esperan."
      },
      {
       "t": "Todos a A Shop a buscarlo",
       "ok": false,
       "why": "Corres el riesgo de que gane un duelo y la spike explote."
      },
      {
       "t": "Fake de defusa repetido",
       "ok": false,
       "why": "Pierdes tiempo innecesario con 4v1."
      }
     ],
     "result": [
      [
       "A Site",
       "A Shop",
       "util"
      ]
     ]
    }
   ],
   "outcome": "Ganamos la ronda: el Operator de Jett abrió con ventaja, Sova y Viper retrasaron sin morir y el retake se hizo con 5 juntos y utilidad, en lugar de duelos sueltos."
  }
 }
};
