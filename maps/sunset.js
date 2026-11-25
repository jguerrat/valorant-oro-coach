window.MAPDATA = window.MAPDATA || {};
MAPDATA["sunset"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "Control de Mid → B",
   "type": "Execute",
   "tip": "Courtyard ganado parte el mapa: B Market cae solo y la rotación desde Mid Top llega tarde.",
   "steps": [
    {
     "text": "Salida: Neon y Breach a B Lobby, Omen y Gekko a Mid Bottom, Cypher en Mid Tiles con cable para cubrir el flanco de A Lobby.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Lobby"
       ],
       [
        "Breach",
        "B Lobby"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Gekko",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
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
        "B Boba"
       ],
       [
        "?",
        "A Alley"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "B Lobby",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Bottom",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Tiles",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Toma de Courtyard: humo de Omen en Mid Top, aturdimiento de Breach a Courtyard y Wingman de Gekko limpia primero.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Lobby"
       ],
       [
        "Breach",
        "Mid Bottom"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Gekko",
        "Mid Courtyard"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Courtyard"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "A Site"
       ]
      ],
      "smokes": [
       "Mid Top"
      ],
      "arrows": [
       [
        "Mid Bottom",
        "Mid Courtyard",
        "util"
       ],
       [
        "Mid Bottom",
        "Mid Top",
        "util"
       ],
       [
        "Mid Bottom",
        "Mid Courtyard",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Con Courtyard nuestro, Omen y Gekko pasan a B Market. Cypher sube a Courtyard para vigilar Mid Top. Neon y Breach esperan en B Main.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Main"
       ],
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Market"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Boba"
       ],
       [
        "?",
        "Mid Top"
       ]
      ],
      "smokes": [
       "Mid Top"
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "B Market",
        "ally"
       ],
       [
        "Mid Bottom",
        "Mid Courtyard",
        "ally"
       ],
       [
        "B Lobby",
        "B Main",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Ejecución: humo en B Boba (CT), flash de Breach desde B Main al site y Dizzy de Gekko desde Market. Todos a la vez.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Main"
       ],
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Market"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "B Boba"
       ]
      ],
      "smokes": [
       "B Boba"
      ],
      "arrows": [
       [
        "B Main",
        "B Site",
        "util"
       ],
       [
        "B Market",
        "B Site",
        "util"
       ],
       [
        "B Market",
        "B Boba",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada: Neon entra por B Main, Gekko y Omen por Market (crossfire). Breach hace trade detrás de Neon.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Site"
       ],
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Site"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Boba"
       ]
      ],
      "smokes": [
       "B Boba"
      ],
      "arrows": [
       [
        "B Main",
        "B Site",
        "ally"
       ],
       [
        "B Market",
        "B Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant con Wingman. Post-plant: Breach en B Main, Omen en B Market, Neon en site, Cypher corta la rotación de mid desde Courtyard.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Site"
       ],
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Market"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Boba"
       ],
       [
        "?",
        "Mid Top"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "B Boba",
        "B Site",
        "enemy"
       ],
       [
        "Mid Top",
        "Mid Courtyard",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "A Main + Elbow",
   "type": "Execute",
   "tip": "Humea A Link y A Alley a la vez: si solo humeas uno, te disparan por el otro mientras plantas.",
   "steps": [
    {
     "text": "Salida: 4 a A Lobby. Cypher se queda en Mid Tiles con cámara mirando Courtyard para cortar el flanco.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Lobby"
       ],
       [
        "Gekko",
        "A Lobby"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Breach",
        "A Lobby"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
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
        "B Boba"
       ],
       [
        "?",
        "A Alley"
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
        "Mid Tiles",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info: Dizzy de Gekko a A Main y Fault Line de Breach a través de A Main hasta el site.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Lobby"
       ],
       [
        "Gekko",
        "A Lobby"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Breach",
        "A Lobby"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Main"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Link"
       ]
      ],
      "arrows": [
       [
        "A Lobby",
        "A Main",
        "util"
       ],
       [
        "A Lobby",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Humos de Omen en A Link y A Alley (CT). Gekko manda Wingman por A Elbow a limpiar esquina.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Main"
       ],
       [
        "Gekko",
        "A Main"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Breach",
        "A Main"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "?",
        "A Elbow"
       ],
       [
        "?",
        "A Link"
       ]
      ],
      "smokes": [
       "A Link",
       "A Alley"
      ],
      "arrows": [
       [
        "A Lobby",
        "A Main",
        "ally"
       ],
       [
        "A Main",
        "A Elbow",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada: Neon corre por A Elbow, Breach aftershock al site, Gekko entra por A Main. Omen sube detrás para el trade.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Elbow"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Main"
       ],
       [
        "Breach",
        "A Main"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "?",
        "A Link"
       ]
      ],
      "smokes": [
       "A Link",
       "A Alley"
      ],
      "arrows": [
       [
        "A Main",
        "A Elbow",
        "ally"
       ],
       [
        "A Elbow",
        "A Site",
        "ally"
       ],
       [
        "A Main",
        "A Site",
        "util"
       ],
       [
        "A Main",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant y post-plant: Neon en A Elbow, Breach y Omen en A Main, Gekko en site. Cypher se mueve a A Lobby por si rotan por mid.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Elbow"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Main"
       ],
       [
        "Breach",
        "A Main"
       ],
       [
        "Cypher",
        "A Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Link"
       ],
       [
        "?",
        "A Alley"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Mid Tiles",
        "A Lobby",
        "ally"
       ],
       [
        "A Link",
        "A Site",
        "enemy"
       ],
       [
        "A Alley",
        "A Site",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "Split A por Mid Top",
   "type": "Split",
   "tip": "El split solo funciona si los dos grupos entran en el mismo segundo: cuenta en voz alta.",
   "steps": [
    {
     "text": "Default: Neon y Gekko a A Lobby, Omen, Breach y Cypher a mid. Parece una toma de B por Courtyard.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Lobby"
       ],
       [
        "Gekko",
        "A Lobby"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Breach",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
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
        "B Boba"
       ],
       [
        "?",
        "A Alley"
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
     "text": "Toma de Courtyard con flash de Breach. Cypher deja cable en Courtyard hacia B Market y se queda de ancla.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Lobby"
       ],
       [
        "Gekko",
        "A Lobby"
       ],
       [
        "Omen",
        "Mid Courtyard"
       ],
       [
        "Breach",
        "Mid Courtyard"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
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
       ]
      ],
      "arrows": [
       [
        "Mid Bottom",
        "Mid Courtyard",
        "util"
       ],
       [
        "Mid Bottom",
        "Mid Courtyard",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Omen humea Defender Side Spawn y Breach aturde Mid Top. Omen y Breach suben a Mid Top.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Main"
       ],
       [
        "Gekko",
        "A Main"
       ],
       [
        "Omen",
        "Mid Top"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
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
        "A Link"
       ]
      ],
      "smokes": [
       "Defender Side Spawn"
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "Mid Top",
        "util"
       ],
       [
        "Mid Courtyard",
        "Mid Top",
        "ally"
       ],
       [
        "A Lobby",
        "A Main",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Split: Omen humea A Alley, Breach flashea A Link y entran por ahí mientras Neon y Gekko entran por A Main con Dizzy.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Main"
       ],
       [
        "Gekko",
        "A Main"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Breach",
        "A Link"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "?",
        "A Elbow"
       ]
      ],
      "smokes": [
       "Defender Side Spawn",
       "A Alley"
      ],
      "arrows": [
       [
        "Mid Top",
        "A Link",
        "ally"
       ],
       [
        "A Link",
        "A Site",
        "util"
       ],
       [
        "A Main",
        "A Site",
        "util"
       ],
       [
        "A Main",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Site tomado desde dos ángulos. Plant y post-plant cruzado: Link, Main y Elbow. Cypher vigila la rotación por Courtyard.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Elbow"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Breach",
        "A Main"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Market"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "B Market",
        "Mid Courtyard",
        "enemy"
       ],
       [
        "A Main",
        "A Elbow",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Mid fuerte 1-2-2",
   "type": "Setup",
   "tip": "Si ganamos Courtyard al principio, el ataque no puede hacer split y nuestras rotaciones son de 5 segundos.",
   "steps": [
    {
     "text": "Posiciones: Cypher solo en B con cable en B Market y cámara en B Main. Breach y Neon en Mid Top. Gekko en A Site, Omen en A Link.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Neon",
        "Mid Top"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Lobby"
       ],
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "Mid Top",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "B Site",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Link",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Al inicio: Breach lanza Fault Line a Mid Courtyard y Neon pelea con ventaja. Omen humea Mid Bottom para cortar la llegada.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Neon",
        "Mid Courtyard"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "Mid Courtyard"
       ]
      ],
      "smokes": [
       "Mid Bottom"
      ],
      "arrows": [
       [
        "Mid Top",
        "Mid Courtyard",
        "util"
       ],
       [
        "Mid Top",
        "Mid Courtyard",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Neon se retira a Mid Top tras el pick. Gekko deja Wingman/Mosh preparado en A Main y Omen paranoia lista para A Elbow.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Neon",
        "Mid Top"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "B Lobby"
       ],
       [
        "?",
        "Mid Bottom"
       ]
      ],
      "smokes": [
       "Mid Bottom"
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "Mid Top",
        "ally"
       ],
       [
        "A Site",
        "A Main",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Salta el cable de B Market: Cypher avisa y retrasa. Breach rota por Courtyard a Market y Neon a B Boba.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Courtyard"
       ],
       [
        "Neon",
        "B Boba"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Market"
       ],
       [
        "?",
        "B Main"
       ],
       [
        "?",
        "B Main"
       ]
      ],
      "arrows": [
       [
        "B Main",
        "B Site",
        "enemy"
       ],
       [
        "Mid Courtyard",
        "B Market",
        "enemy"
       ],
       [
        "Mid Top",
        "Mid Courtyard",
        "ally"
       ],
       [
        "Mid Top",
        "B Boba",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Crossfire en B: Breach aturde Market desde Courtyard, Cypher y Neon matan la entrada desde site y Boba. Omen sube a Mid Top por si el resto rota.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Courtyard"
       ],
       [
        "Neon",
        "B Boba"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "Mid Top"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Market"
       ],
       [
        "?",
        "B Main"
       ]
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "B Market",
        "util"
       ],
       [
        "A Link",
        "Mid Top",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake B con Gekko",
   "type": "Retake",
   "tip": "Agruparse antes de entrar: un retake de 4 juntos gana; 4 retakes de 1 pierden.",
   "steps": [
    {
     "text": "B ha caído y plantan. Cypher muere. Los cuatro restantes se juntan: Neon y Omen en B Boba, Breach y Gekko en Mid Courtyard.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Boba"
       ],
       [
        "Omen",
        "B Boba"
       ],
       [
        "Breach",
        "Mid Courtyard"
       ],
       [
        "Gekko",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Main"
       ],
       [
        "Clove",
        "B Market"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "Mid Top",
        "B Boba",
        "ally"
       ],
       [
        "Mid Top",
        "Mid Courtyard",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Dardo/flash enemigo esperado. Omen humea B Main para cortar el post-plant de fuera. Gekko manda Wingman a por Market.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Boba"
       ],
       [
        "Omen",
        "B Boba"
       ],
       [
        "Breach",
        "Mid Courtyard"
       ],
       [
        "Gekko",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Main"
       ],
       [
        "Clove",
        "B Market"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Main"
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "B Market",
        "util"
       ],
       [
        "B Boba",
        "B Main",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Breach aftershock en Market y Gekko+Breach limpian Market. Neon espera la señal.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Boba"
       ],
       [
        "Omen",
        "B Boba"
       ],
       [
        "Breach",
        "B Market"
       ],
       [
        "Gekko",
        "B Market"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Main"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Main"
      ],
      "arrows": [
       [
        "Mid Courtyard",
        "B Market",
        "ally"
       ],
       [
        "Mid Courtyard",
        "B Market",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada simultánea: Thrash de Gekko al site, Neon desde Boba y Breach desde Market. El de site queda entre dos fuegos.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Site"
       ],
       [
        "Omen",
        "B Boba"
       ],
       [
        "Breach",
        "B Market"
       ],
       [
        "Gekko",
        "B Market"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Main"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Main"
      ],
      "arrows": [
       [
        "B Market",
        "B Site",
        "util"
       ],
       [
        "B Boba",
        "B Site",
        "ally"
       ],
       [
        "B Market",
        "B Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Defuse: Gekko recoge el Wingman y lo manda a desactivar. El resto mira a B Main por donde vendrá el último.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Breach",
        "B Market"
       ],
       [
        "Gekko",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "B Main"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "B Main",
        "B Site",
        "enemy"
       ],
       [
        "B Boba",
        "B Site",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake A por Link y Alley",
   "type": "Retake",
   "tip": "Entra desde dos ángulos: el post-plant de Main no puede mirar a Link y Alley a la vez.",
   "steps": [
    {
     "text": "A ha caído (Gekko y Omen muertos). Neon y Breach rotan desde mid hacia A Link; Cypher desde B por Defender Side Spawn hacia A Alley.",
     "board": {
      "allies": [
       [
        "Neon",
        "Mid Top"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Cypher",
        "Defender Side Spawn"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "KAY/O",
        "A Elbow"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Mid Top",
        "A Link",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Alley",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Posiciones de retake: Neon y Breach en A Link, Cypher en A Alley. Esperamos utilidad, no nos asomamos solos.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Link"
       ],
       [
        "Breach",
        "A Link"
       ],
       [
        "Cypher",
        "A Alley"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "KAY/O",
        "A Elbow"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Mid Top",
        "A Link",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Alley",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Breach lanza Fault Line a A Site y Flashpoint a A Elbow. Cypher dispara desde Alley al spike.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Link"
       ],
       [
        "Breach",
        "A Link"
       ],
       [
        "Cypher",
        "A Alley"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "KAY/O",
        "A Elbow"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Link",
        "A Site",
        "util"
       ],
       [
        "A Link",
        "A Elbow",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Neon entra rápido desde Link y Cypher desde Alley a la vez. Caen dos en site.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Site"
       ],
       [
        "Breach",
        "A Link"
       ],
       [
        "Cypher",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "A Main"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Link",
        "A Site",
        "ally"
       ],
       [
        "A Alley",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Cypher defusa con Neon cubriendo A Main y Breach aturdiendo Main si asoman.",
     "board": {
      "allies": [
       [
        "Neon",
        "A Site"
       ],
       [
        "Breach",
        "A Site"
       ],
       [
        "Cypher",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "A Main"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Site",
        "A Main",
        "util"
       ],
       [
        "A Main",
        "A Site",
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
   "title": "Muro de Killjoy en Courtyard",
   "situation": "1:30. Intentamos tomar Mid Courtyard y hay torreta de Killjoy mirando hacia Mid Bottom. Llevamos 2 rondas perdiendo mid.",
   "enemy": [
    {
     "t": "El Killjoy juega Mid Top esperando el aviso de la torreta",
     "pct": 55
    },
    {
     "t": "Rota a B y deja solo la torreta",
     "pct": 30
    },
    {
     "t": "Empuja Courtyard al oír pasos",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Romper la torreta con Fault Line + disparos y humo en Mid Top antes de entrar",
     "ok": true,
     "why": "Sin torreta pierde la info; el humo le quita el ángulo desde arriba y tomas Courtyard gratis."
    },
    {
     "t": "Correr a Courtyard con Neon sin utilidad",
     "ok": false,
     "why": "La torreta te marca y el Killjoy te mata ralentizado desde Mid Top."
    },
    {
     "t": "Abandonar mid y ir B por B Main los 5",
     "ok": false,
     "why": "Courtyard libre para ellos = Killjoy rota por Market y os pilla de lado."
    }
   ],
   "board": {
    "allies": [
     [
      "Neon",
      "Mid Bottom"
     ],
     [
      "Breach",
      "Mid Bottom"
     ],
     [
      "Omen",
      "Mid Bottom"
     ],
     [
      "Gekko",
      "B Lobby"
     ],
     [
      "Cypher",
      "Mid Tiles"
     ]
    ],
    "enemies": [
     [
      "Killjoy",
      "Mid Top"
     ],
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "A Site"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "Mid Top",
     "Mid Courtyard",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Bottom",
     "Mid Courtyard",
     "util"
    ],
    [
     "Mid Bottom",
     "Mid Top",
     "util"
    ],
    [
     "Mid Bottom",
     "Mid Courtyard",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "3v2 post-plant en B",
   "situation": "0:35 con spike plantado en B Site. Quedamos Neon, Omen y Breach contra 2 rivales. Oímos pasos en B Boba.",
   "enemy": [
    {
     "t": "Retake por B Boba y B Market a la vez",
     "pct": 50
    },
    {
     "t": "Los dos entran juntos por B Boba",
     "pct": 35
    },
    {
     "t": "Uno defusa con humo y el otro cubre",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Jugar lejos: Breach en B Main, Omen en Market, Neon en site, y reaccionar al sonido del defuse",
     "ok": true,
     "why": "Con ventaja numérica el tiempo está de vuestro lado; cruzáis fuegos y no regaláis duelos."
    },
    {
     "t": "Ir los tres a por B Boba a cazarlos",
     "ok": false,
     "why": "Abandonas el spike y les das la pelea en su ángulo."
    },
    {
     "t": "Quedarse los tres pegados al spike",
     "ok": false,
     "why": "Una sola Thrash o granada os mata a los tres juntos."
    }
   ],
   "board": {
    "allies": [
     [
      "Neon",
      "B Site"
     ],
     [
      "Omen",
      "B Market"
     ],
     [
      "Breach",
      "B Main"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Boba"
     ],
     [
      "?",
      "Mid Courtyard"
     ]
    ],
    "spike": "B Site",
    "arrows": []
   },
   "enemyMove": [
    [
     "B Boba",
     "B Site",
     "enemy"
    ],
    [
     "Mid Courtyard",
     "B Market",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Site",
     "B Main",
     "ally"
    ],
    [
     "B Main",
     "B Site",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Eco de pistolas",
   "situation": "Ronda 3 tras perder la pistola. Tenemos 1.700 créditos de media y ellos tienen Spectres y armadura.",
   "enemy": [
    {
     "t": "Jugarán agresivo en Courtyard y A Main buscando picks fáciles",
     "pct": 60
    },
    {
     "t": "Defensa pasiva en sites",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Agrupar 5 en A Lobby, esperar su push y pelear juntos con Sheriff/Ghost a corta distancia",
     "ok": true,
     "why": "En eco tu ventaja es pillarlos en movimiento y de cerca; juntos puedes tradear y robar armas."
    },
    {
     "t": "Ir cada uno a su posición normal",
     "ok": false,
     "why": "Duelos 1v1 con pistola contra Spectre son casi perdidos."
    },
    {
     "t": "Rush a B Main sin habilidades",
     "ok": false,
     "why": "Sin utilidad entras andando contra la torreta y crossfire."
    }
   ],
   "board": {
    "allies": [
     [
      "Neon",
      "A Lobby"
     ],
     [
      "Gekko",
      "A Lobby"
     ],
     [
      "Omen",
      "A Lobby"
     ],
     [
      "Breach",
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
      "A Main"
     ],
     [
      "?",
      "Mid Courtyard"
     ],
     [
      "?",
      "A Site"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "A Main",
     "A Lobby",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Attacker Side Spawn",
     "A Lobby",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Lurk de Cypher sin contacto",
   "situation": "1:00. Cypher hace lurk en Mid Courtyard mientras 4 estamos en A Lobby. Nadie ha visto a nadie en mid.",
   "enemy": [
    {
     "t": "Un defensor viene de Mid Top a mirar Courtyard",
     "pct": 45
    },
    {
     "t": "Mid está vacío y rotan pronto a A",
     "pct": 35
    },
    {
     "t": "Empujan por B Market para flanquear",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Cypher deja cable en Courtyard, aguanta y avisa; ejecutamos A cuando el rival rote",
     "ok": true,
     "why": "El lurk sirve para info y castigar la rotación, no para pelear 1v2 en Mid Top."
    },
    {
     "t": "Cypher sube a Mid Top a buscar el pick",
     "ok": false,
     "why": "Te vas a su lado del mapa sin trade y regalas una vida."
    },
    {
     "t": "Cypher vuelve a A Lobby con el equipo",
     "ok": false,
     "why": "Perdéis el control de mid y la protección del flanco."
    }
   ],
   "board": {
    "allies": [
     [
      "Neon",
      "A Lobby"
     ],
     [
      "Gekko",
      "A Lobby"
     ],
     [
      "Omen",
      "A Lobby"
     ],
     [
      "Breach",
      "A Lobby"
     ],
     [
      "Cypher",
      "Mid Courtyard"
     ]
    ],
    "enemies": [
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
      "A Link"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "Mid Top",
     "Mid Courtyard",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Courtyard",
     "Mid Top",
     "util"
    ],
    [
     "A Lobby",
     "A Main",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Pick temprano en A Main",
   "situation": "1:25. Neon mata al defensor de A Main con la primera bala. 5v4 y A se queda con poca gente.",
   "enemy": [
    {
     "t": "Rotan uno desde A Link para tapar",
     "pct": 55
    },
    {
     "t": "Retroceden a A Alley y juegan retake",
     "pct": 30
    },
    {
     "t": "Rotan 2 desde mid",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Ejecutar A ya: humos en A Link y A Alley y entrar antes de que llegue la rotación",
     "ok": true,
     "why": "La ventaja de un pick se pierde si esperas; el site está débil ahora."
    },
    {
     "t": "Esperar en A Main a ver qué hacen",
     "ok": false,
     "why": "Les das tiempo a rotar y reorganizar el 4v5 en 5v5 en site."
    },
    {
     "t": "Rotar a B porque A ya 'está ganado'",
     "ok": false,
     "why": "Desperdicias la ventaja y regalas tiempo de reloj."
    }
   ],
   "board": {
    "allies": [
     [
      "Neon",
      "A Main"
     ],
     [
      "Gekko",
      "A Main"
     ],
     [
      "Omen",
      "A Lobby"
     ],
     [
      "Breach",
      "A Lobby"
     ],
     [
      "Cypher",
      "Mid Tiles"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "A Link"
     ],
     [
      "?",
      "Mid Top"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "Mid Top",
     "A Link",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Lobby",
     "A Link",
     "util"
    ],
    [
     "A Lobby",
     "A Alley",
     "util"
    ],
    [
     "A Main",
     "A Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Oímos 4 en B Lobby",
   "situation": "1:35. Cypher oye a mucha gente en B Lobby y el cable de B Market sigue intacto.",
   "enemy": [
    {
     "t": "Ejecutan B Main en 15-20 segundos",
     "pct": 50
    },
    {
     "t": "Es fake y van a A por mid",
     "pct": 30
    },
    {
     "t": "Esperan y separan Market y Main",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Rotar uno (Breach) a B Boba y mantener el resto; confirmar con la cámara antes de rotar más",
     "ok": true,
     "why": "Reforzar sin sobre-rotar: si es fake, mid y A siguen cubiertos."
    },
    {
     "t": "Rotar 4 a B de inmediato",
     "ok": false,
     "why": "Un fake simple os deja A vacío."
    },
    {
     "t": "No hacer nada y que Cypher aguante solo",
     "ok": false,
     "why": "Cypher solo contra 4 muere sin retrasar suficiente."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Breach",
      "Mid Top"
     ],
     [
      "Neon",
      "Mid Top"
     ],
     [
      "Gekko",
      "A Site"
     ],
     [
      "Omen",
      "A Link"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Lobby"
     ],
     [
      "?",
      "B Lobby"
     ],
     [
      "?",
      "B Lobby"
     ],
     [
      "?",
      "B Lobby"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "B Lobby",
     "B Main",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Top",
     "B Boba",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Perdemos Mid Top",
   "situation": "1:20. Muere Neon en Mid Top sin trade. Breach está herido y no hay info del resto.",
   "enemy": [
    {
     "t": "Usan Mid Top para ir a A Link y hacer split",
     "pct": 55
    },
    {
     "t": "Bajan a B Market desde Courtyard",
     "pct": 30
    },
    {
     "t": "Se quedan quietos en mid",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Breach recula a Defender Side Spawn y Omen humea A Link desde site para frenar el split",
     "ok": true,
     "why": "Cortar Link compra tiempo; Breach vivo vale más para el retake que en un 1v2."
    },
    {
     "t": "Breach intenta retomar Mid Top solo",
     "ok": false,
     "why": "1v2 herido contra quien ya ganó la posición."
    },
    {
     "t": "Todo el equipo rota a mid",
     "ok": false,
     "why": "Abandonas los dos sites justo cuando el ataque toma impulso."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Breach",
      "Mid Top"
     ],
     [
      "Gekko",
      "A Site"
     ],
     [
      "Omen",
      "A Link"
     ]
    ],
    "enemies": [
     [
      "?",
      "Mid Top"
     ],
     [
      "?",
      "Mid Courtyard"
     ],
     [
      "?",
      "A Lobby"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "Mid Top",
     "A Link",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Top",
     "Defender Side Spawn",
     "ally"
    ],
    [
     "A Site",
     "A Link",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake A en 3v3",
   "situation": "0:30 tras plant en A Site. Quedamos Cypher (B), Breach (mid) y Neon. Ellos tienen 3 en A Main, A Elbow y site.",
   "enemy": [
    {
     "t": "Juegan post-plant cruzado desde A Main y A Elbow",
     "pct": 55
    },
    {
     "t": "Uno se queda en site encima del spike",
     "pct": 30
    },
    {
     "t": "Se esconden en A Lobby a esperar",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Juntarse en A Link y A Alley y entrar a la vez tras la Fault Line",
     "ok": true,
     "why": "Entrar desde dos ángulos con stun rompe el crossfire; ir de uno en uno lo alimenta."
    },
    {
     "t": "Neon entra sola rápido mientras los demás llegan",
     "ok": false,
     "why": "Un 1v3 escalonado regala la ronda."
    },
    {
     "t": "Hacer el fake de defuse sin ver a nadie",
     "ok": false,
     "why": "Con 30 s no hay tiempo para fakes; tienes que limpiar."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "Defender Side Spawn"
     ],
     [
      "Breach",
      "Mid Top"
     ],
     [
      "Neon",
      "A Link"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "A Elbow"
     ],
     [
      "Sova",
      "A Main"
     ],
     [
      "KAY/O",
      "A Site"
     ]
    ],
    "spike": "A Site",
    "arrows": []
   },
   "enemyMove": [
    [
     "A Site",
     "A Elbow",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Defender Side Spawn",
     "A Alley",
     "ally"
    ],
    [
     "A Link",
     "A Site",
     "util"
    ],
    [
     "A Link",
     "A Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Neon empuja tarde por Market",
   "situation": "0:55. Nadie ha atacado todavía. Un enemigo empuja por B Market y Cypher cae. Oímos Spike en B Lobby.",
   "enemy": [
    {
     "t": "Ejecutan B Main ahora con 4",
     "pct": 60
    },
    {
     "t": "Plantan rápido con el de Market solo",
     "pct": 25
    },
    {
     "t": "Siguen a A por mid",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Rotar Neon y Breach por Courtyard y Boba para retrasar, no entrar al site sin utilidad",
     "ok": true,
     "why": "Con Market caído y plant inminente, retrasar y juntaros para retake es más seguro."
    },
    {
     "t": "Que Gekko y Omen dejen A y vayan los 4",
     "ok": false,
     "why": "Si es fake de B, A cae sin defensa."
    },
    {
     "t": "Esperar a que planten sin moverse",
     "ok": false,
     "why": "Les das site y post-plant gratis."
    }
   ],
   "board": {
    "allies": [
     [
      "Breach",
      "Mid Top"
     ],
     [
      "Neon",
      "Mid Top"
     ],
     [
      "Gekko",
      "A Site"
     ],
     [
      "Omen",
      "A Link"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Market"
     ],
     [
      "?",
      "B Lobby"
     ],
     [
      "?",
      "B Lobby"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "B Lobby",
     "B Main",
     "enemy"
    ],
    [
     "B Market",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Top",
     "B Boba",
     "ally"
    ],
    [
     "Mid Top",
     "Mid Courtyard",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Ronda de ahorro en defensa",
   "situation": "Ronda 14. Tenemos 1.900 créditos y ellos compran todo. Necesitamos ahorrar para la siguiente.",
   "enemy": [
    {
     "t": "Rush o ejecución rápida a un site",
     "pct": 60
    },
    {
     "t": "Default lento y lurk",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Stack 3 en un site con pistolas y utilidad gratis; los otros dos guardan arma",
     "ok": true,
     "why": "Si aciertas el site, ganas picks; si no, guardas dinero. Es la mejor apuesta en eco."
    },
    {
     "t": "Jugar default normal repartidos",
     "ok": false,
     "why": "Pistolas repartidas mueren 1v5 una a una."
    },
    {
     "t": "Salir a pelear Courtyard",
     "ok": false,
     "why": "Abierto contra rifles y sin armadura es perder vidas y dinero."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Breach",
      "B Site"
     ],
     [
      "Neon",
      "B Boba"
     ],
     [
      "Gekko",
      "Defender Side Spawn"
     ],
     [
      "Omen",
      "Defender Side Spawn"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Lobby"
     ],
     [
      "?",
      "Mid Bottom"
     ],
     [
      "?",
      "A Lobby"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "B Lobby",
     "B Main",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Site",
     "B Main",
     "util"
    ]
   ]
  }
 ],
 "rounds": {
  "attack": {
   "side": "Ataque",
   "title": "Execute B con Courtyard ganado",
   "strategy": "Control de Mid → B",
   "intro": "Ronda de compra completa 5v5 en ataque. Plan: tomar Mid Courtyard, cerrar Mid Top y entrar a B por Main y Market a la vez.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Salimos de spawn. Neon y Breach a B Lobby, Omen y Gekko a Mid Bottom, Cypher a Mid Tiles.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Lobby"
       ],
       [
        "Breach",
        "B Lobby"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Gekko",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
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
        "B Boba"
       ],
       [
        "?",
        "A Alley"
       ]
      ],
      "arrows": []
     },
     "question": "¿Qué hace Cypher en Mid Tiles?",
     "options": [
      {
       "t": "Cable hacia A Lobby y cámara en Courtyard",
       "ok": true,
       "why": "Protege el flanco y da info de mid sin gastar vida."
      },
      {
       "t": "Corre a A Main a buscar pick",
       "ok": false,
       "why": "Se separa del plan y muere sin trade."
      },
      {
       "t": "Va con el equipo a B Lobby",
       "ok": false,
       "why": "Dejáis mid y el flanco sin vigilar."
      }
     ],
     "result": [
      [
       "Mid Tiles",
       "A Lobby",
       "util"
      ],
      [
       "Mid Tiles",
       "Mid Courtyard",
       "util"
      ]
     ]
    },
    {
     "time": "1:25",
     "narration": "La cámara ve a un Killjoy (rival) en Mid Top y torreta en Courtyard. Ellos tienen Jett, Sova, Clove, Killjoy y KAY/O.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Lobby"
       ],
       [
        "Breach",
        "Mid Bottom"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Gekko",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "Mid Top"
       ],
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Clove",
        "B Boba"
       ],
       [
        "KAY/O",
        "A Alley"
       ]
      ],
      "arrows": []
     },
     "question": "¿Cómo tomamos Courtyard?",
     "options": [
      {
       "t": "Humo en Mid Top, Fault Line a Courtyard y Wingman delante",
       "ok": true,
       "why": "Quitas el ángulo alto, rompes torreta y el Wingman limpia sin riesgo."
      },
      {
       "t": "Neon corre sola con el slide",
       "ok": false,
       "why": "La torreta la marca y Killjoy la remata."
      },
      {
       "t": "Esperar a que ellos empujen",
       "ok": false,
       "why": "Perdéis tiempo y la iniciativa del plan."
      }
     ],
     "result": [
      [
       "Mid Bottom",
       "Mid Top",
       "util"
      ],
      [
       "Mid Bottom",
       "Mid Courtyard",
       "util"
      ],
      [
       "Mid Bottom",
       "Mid Courtyard",
       "ally"
      ]
     ]
    },
    {
     "time": "1:10",
     "narration": "Courtyard es nuestro: Gekko mata a la KAY/O que vino a ayudar. 5v4. Cypher sube a Courtyard.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Lobby"
       ],
       [
        "Breach",
        "Mid Courtyard"
       ],
       [
        "Omen",
        "Mid Courtyard"
       ],
       [
        "Gekko",
        "Mid Courtyard"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "Mid Top"
       ],
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Clove",
        "B Boba"
       ]
      ],
      "smokes": [
       "Mid Top"
      ],
      "arrows": []
     },
     "question": "¿Siguiente paso?",
     "options": [
      {
       "t": "Omen y Gekko a B Market, Neon y Breach a B Main, Cypher se queda en Courtyard",
       "ok": true,
       "why": "Preparáis la entrada doble y Cypher corta la rotación de Mid Top."
      },
      {
       "t": "Subir los 5 a Mid Top",
       "ok": false,
       "why": "Os metéis en su spawn sin plan y perdéis el tiempo de ventaja."
      },
      {
       "t": "Rotar todos a A",
       "ok": false,
       "why": "Abandonáis el control que acabáis de ganar."
      }
     ],
     "result": [
      [
       "Mid Courtyard",
       "B Market",
       "ally"
      ],
      [
       "B Lobby",
       "B Main",
       "ally"
      ],
      [
       "Mid Courtyard",
       "B Main",
       "ally"
      ]
     ]
    },
    {
     "time": "0:55",
     "narration": "Todos en posición. Jett en B Site, Clove en B Boba. Torreta de Killjoy destruida.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Main"
       ],
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Market"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "Mid Top"
       ],
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Clove",
        "B Boba"
       ]
      ],
      "arrows": []
     },
     "question": "¿Qué utilidad usamos para entrar?",
     "options": [
      {
       "t": "Humo en B Boba, flash de Breach desde Main y Dizzy desde Market a la vez",
       "ok": true,
       "why": "Cegáis el site y cortáis la ayuda de CT en el mismo segundo."
      },
      {
       "t": "Solo un humo y entrar",
       "ok": false,
       "why": "La Jett os pica sin estar cegada."
      },
      {
       "t": "Gastar todo y esperar 10 segundos",
       "ok": false,
       "why": "La utilidad se acaba antes de entrar."
      }
     ],
     "result": [
      [
       "B Market",
       "B Boba",
       "util"
      ],
      [
       "B Main",
       "B Site",
       "util"
      ],
      [
       "B Market",
       "B Site",
       "util"
      ]
     ]
    },
    {
     "time": "0:45",
     "narration": "Entrada: Neon mata a la Jett cegada pero cae ante la Clove. Gekko mata a la Clove. 4v2.",
     "board": {
      "allies": [
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Site"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "Mid Top"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "smokes": [
       "B Boba"
      ],
      "arrows": []
     },
     "question": "¿Quién planta y dónde?",
     "options": [
      {
       "t": "Gekko planta con Wingman en B Site mientras los demás cubren",
       "ok": true,
       "why": "Wingman planta sin exponer a nadie y los rifles siguen apuntando."
      },
      {
       "t": "Breach planta a la vista de B Boba",
       "ok": false,
       "why": "Expone a vuestro iniciador a cualquier asomada."
      },
      {
       "t": "No plantar y cazar a los dos últimos",
       "ok": false,
       "why": "Sin spike plantado la ronda se puede ir por tiempo."
      }
     ],
     "result": [
      [
       "B Market",
       "B Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:30",
     "narration": "Spike plantado en B Site. Killjoy y Sova vienen juntos por Courtyard hacia B Market.",
     "board": {
      "allies": [
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Site"
       ],
       [
        "Cypher",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "Mid Top"
       ],
       [
        "Sova",
        "Mid Courtyard"
       ]
      ],
      "spike": "B Site",
      "arrows": []
     },
     "question": "¿Cómo jugamos el post-plant?",
     "options": [
      {
       "t": "Cypher retrocede a B Market con Omen, Gekko molly en spike, Breach en Main",
       "ok": true,
       "why": "Crossfire desde lejos y molly para el defuse; ellos tienen que entrar."
      },
      {
       "t": "Cypher pelea solo en Courtyard",
       "ok": false,
       "why": "1v2 en su terreno, regalas la ventaja."
      },
      {
       "t": "Todos en el spike",
       "ok": false,
       "why": "Una sola granada os puede matar a varios."
      }
     ],
     "result": [
      [
       "Mid Courtyard",
       "B Market",
       "ally"
      ],
      [
       "Mid Courtyard",
       "B Market",
       "enemy"
      ],
      [
       "B Market",
       "B Site",
       "util"
      ]
     ]
    },
    {
     "time": "0:15",
     "narration": "Sova cae en Market por el crossfire. Killjoy intenta un defuse falso desde B Boba.",
     "board": {
      "allies": [
       [
        "Breach",
        "B Main"
       ],
       [
        "Omen",
        "B Market"
       ],
       [
        "Gekko",
        "B Market"
       ],
       [
        "Cypher",
        "B Market"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Boba"
       ]
      ],
      "spike": "B Site",
      "arrows": []
     },
     "question": "¿Qué hacemos con el fake defuse?",
     "options": [
      {
       "t": "No asomar; molly o aftershock al spike si el defuse sigue",
       "ok": true,
       "why": "Utilidad mata o corta el defuse sin regalar un duelo."
      },
      {
       "t": "Asomar todos a la vez al oír el sonido",
       "ok": false,
       "why": "Es lo que quiere el Killjoy: un duelo con ventaja."
      },
      {
       "t": "Ir a buscarlo a B Boba",
       "ok": false,
       "why": "Pierdes la posición de post-plant."
      }
     ],
     "result": [
      [
       "B Main",
       "B Site",
       "util"
      ],
      [
       "B Boba",
       "B Site",
       "enemy"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: el control de Courtyard dejó a la defensa sin rotación por mid, la entrada doble con utilidad sincronizada rompió B y el post-plant a distancia con Wingman y utilidad cerró sin duelos innecesarios."
  },
  "defense": {
   "side": "Defensa",
   "title": "Mid fuerte y crossfire en B",
   "strategy": "Mid fuerte 1-2-2",
   "intro": "Ronda de compra completa 5v5 en defensa. Plan: 1 en B (Cypher), 2 en mid (Breach y Neon), 2 en A (Gekko y Omen). Ganar Courtyard y rotar rápido.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Inicio de ronda. Cada uno a su posición del setup 1-2-2.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Neon",
        "Mid Top"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Lobby"
       ],
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "Mid Top",
        "ally"
       ]
      ]
     },
     "question": "¿Qué prepara Cypher en B?",
     "options": [
      {
       "t": "Cable en B Market y cámara mirando B Main",
       "ok": true,
       "why": "Te avisa por las dos entradas sin exponerte."
      },
      {
       "t": "Cable en B Boba",
       "ok": false,
       "why": "Boba es nuestra zona; no da info del ataque."
      },
      {
       "t": "Nada, juega por sonido",
       "ok": false,
       "why": "Solo en B necesitas info temprana."
      }
     ],
     "result": [
      [
       "B Site",
       "B Market",
       "util"
      ],
      [
       "B Site",
       "B Main",
       "util"
      ]
     ]
    },
    {
     "time": "1:30",
     "narration": "Pasos en Mid Bottom. Neon y Breach se preparan para ganar Courtyard.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Neon",
        "Mid Top"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "Mid Bottom"
       ],
       [
        "Sova",
        "Mid Bottom"
       ],
       [
        "Clove",
        "B Lobby"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": []
     },
     "question": "¿Cómo peleamos mid?",
     "options": [
      {
       "t": "Fault Line de Breach a Courtyard y Neon pelea con el stun; Omen humo en Mid Bottom",
       "ok": true,
       "why": "Utilidad antes del duelo y cortar refuerzos = pelea a nuestro favor."
      },
      {
       "t": "Neon sale sin utilidad a Courtyard",
       "ok": false,
       "why": "Duelo a 50/50 contra 2."
      },
      {
       "t": "Abandonar mid",
       "ok": false,
       "why": "Les regalas el split por A Link y B Market."
      }
     ],
     "result": [
      [
       "Mid Top",
       "Mid Courtyard",
       "util"
      ],
      [
       "A Link",
       "Mid Bottom",
       "util"
      ],
      [
       "Mid Top",
       "Mid Courtyard",
       "ally"
      ]
     ]
    },
    {
     "time": "1:20",
     "narration": "Neon mata a la Sova en Courtyard. 5v4. La Jett se retira.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Neon",
        "Mid Courtyard"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "Mid Bottom"
       ],
       [
        "Clove",
        "B Lobby"
       ],
       [
        "Killjoy",
        "B Lobby"
       ],
       [
        "KAY/O",
        "A Lobby"
       ]
      ],
      "smokes": [
       "Mid Bottom"
      ],
      "arrows": []
     },
     "question": "¿Neon persigue a la Jett?",
     "options": [
      {
       "t": "No, vuelve a Mid Top y mantiene la ventaja",
       "ok": true,
       "why": "Perseguir en su lado regala el 5v4 que acabas de ganar."
      },
      {
       "t": "Sí, la sigue a Mid Bottom",
       "ok": false,
       "why": "Te metes en crossfire del lado atacante."
      },
      {
       "t": "Se queda quieta en Courtyard",
       "ok": false,
       "why": "Expuesta a todos los ángulos tras el humo."
      }
     ],
     "result": [
      [
       "Mid Courtyard",
       "Mid Top",
       "ally"
      ]
     ]
    },
    {
     "time": "1:00",
     "narration": "Salta el cable de B Market y la cámara ve 2 en B Main. Ejecutan B.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Breach",
        "Mid Top"
       ],
       [
        "Neon",
        "Mid Top"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Market"
       ],
       [
        "Clove",
        "B Main"
       ],
       [
        "Killjoy",
        "B Main"
       ],
       [
        "KAY/O",
        "A Lobby"
       ]
      ],
      "arrows": []
     },
     "question": "¿Cómo rotamos?",
     "options": [
      {
       "t": "Breach a Courtyard para flanquear Market y Neon a B Boba; Omen a Mid Top; Gekko se queda en A",
       "ok": true,
       "why": "Rotación corta y en crossfire, sin abandonar A por si la KAY/O lurkea."
      },
      {
       "t": "Los cuatro a B Site por Boba",
       "ok": false,
       "why": "Entráis en fila por el mismo ángulo y A se queda vacío."
      },
      {
       "t": "Nadie rota y Cypher aguanta",
       "ok": false,
       "why": "Cypher solo contra 3 pierde el site."
      }
     ],
     "result": [
      [
       "Mid Top",
       "Mid Courtyard",
       "ally"
      ],
      [
       "Mid Top",
       "B Boba",
       "ally"
      ],
      [
       "A Link",
       "Mid Top",
       "ally"
      ]
     ]
    },
    {
     "time": "0:50",
     "narration": "Cypher retrasa con trampas y mata a la Jett en Market antes de caer. Quedan Clove y Killjoy entrando por B Main.",
     "board": {
      "allies": [
       [
        "Breach",
        "Mid Courtyard"
       ],
       [
        "Neon",
        "B Boba"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "Mid Top"
       ]
      ],
      "enemies": [
       [
        "Clove",
        "B Main"
       ],
       [
        "Killjoy",
        "B Main"
       ],
       [
        "KAY/O",
        "A Lobby"
       ]
      ],
      "arrows": []
     },
     "question": "¿Qué hacemos ahora en B?",
     "options": [
      {
       "t": "Breach aftershock a B Main y Neon y Breach asoman a la vez desde Boba y Market",
       "ok": true,
       "why": "Ataque coordinado desde dos ángulos mientras están en la entrada."
      },
      {
       "t": "Neon entra sola a B Site",
       "ok": false,
       "why": "Sin trade contra 2 enemigos."
      },
      {
       "t": "Esperar a que planten",
       "ok": false,
       "why": "Retake 2v2 es peor que defender la entrada."
      }
     ],
     "result": [
      [
       "Mid Courtyard",
       "B Main",
       "util"
      ],
      [
       "Mid Courtyard",
       "B Market",
       "ally"
      ],
      [
       "B Boba",
       "B Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:35",
     "narration": "Neon mata a la Clove; Breach cae ante el Killjoy. KAY/O rota de A Lobby a mid. Quedan Neon, Gekko y Omen contra Killjoy y KAY/O.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Site"
       ],
       [
        "Gekko",
        "A Site"
       ],
       [
        "Omen",
        "Mid Top"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Main"
       ],
       [
        "KAY/O",
        "Mid Bottom"
       ]
      ],
      "arrows": []
     },
     "question": "¿Cómo cerramos la ronda 3v2?",
     "options": [
      {
       "t": "Neon aguanta B, Omen corta Courtyard y Gekko rota por Mid Top para juntarse",
       "ok": true,
       "why": "Mantenéis los ángulos y obligáis a que ellos vengan con poco tiempo."
      },
      {
       "t": "Los tres a buscar al Killjoy a B Main",
       "ok": false,
       "why": "Os separáis y la KAY/O os flanquea por mid."
      },
      {
       "t": "Neon se esconde en Boba",
       "ok": false,
       "why": "Les regalas el plant sin presión."
      }
     ],
     "result": [
      [
       "Mid Top",
       "Mid Courtyard",
       "ally"
      ],
      [
       "A Site",
       "Mid Top",
       "ally"
      ],
      [
       "Mid Bottom",
       "Mid Courtyard",
       "enemy"
      ]
     ]
    },
    {
     "time": "0:15",
     "narration": "Omen gana el duelo a la KAY/O en Courtyard. El Killjoy intenta plantar solo en B.",
     "board": {
      "allies": [
       [
        "Neon",
        "B Site"
       ],
       [
        "Gekko",
        "Mid Top"
       ],
       [
        "Omen",
        "Mid Courtyard"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Main"
       ]
      ],
      "arrows": []
     },
     "question": "¿Último paso?",
     "options": [
      {
       "t": "Neon espera el sonido de plant y lo mata con Omen cubriendo Market",
       "ok": true,
       "why": "Plantar le obliga a quedarse quieto: castigo seguro."
      },
      {
       "t": "Neon sale a B Main a buscarlo",
       "ok": false,
       "why": "Se arriesga a un duelo innecesario con el tiempo a favor."
      },
      {
       "t": "Todos se van al spawn",
       "ok": false,
       "why": "Pierdes el site si planta con tiempo."
      }
     ],
     "result": [
      [
       "B Main",
       "B Site",
       "enemy"
      ],
      [
       "Mid Courtyard",
       "B Market",
       "ally"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: ganar Courtyard pronto dio el 5v4, el setup 1-2-2 permitió rotar a B en segundos sin abandonar A y la paciencia en el 3v2 cerró la ronda sin regalar duelos."
  }
 }
};
