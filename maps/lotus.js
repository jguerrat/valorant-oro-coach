window.MAPDATA = window.MAPDATA || {};
MAPDATA["lotus"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "A Main + Rubble",
   "type": "Execute",
   "tip": "Entrar por dos sitios a la vez obliga al defensor de A a elegir ángulo. Si juegan A Tree, rompe el muro de Rubble.",
   "steps": [
    {
     "text": "Salida: Raze, Fade, Omen y Killjoy a A Lobby. Viper se queda en B Main para dar info y cortar la rotación por A Link.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Lobby"
       ],
       [
        "Fade",
        "A Lobby"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
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
        "B Main",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Toma de A Main y A Rubble sin asomar al site. Killjoy deja torreta en A Root para cubrir el flanco y Fade lanza el ojo (Acecho) a A Site.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Rubble"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "arrows": [
       [
        "A Lobby",
        "A Rubble",
        "ally"
       ],
       [
        "A Lobby",
        "A Main",
        "ally"
       ],
       [
        "A Main",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Omen fuma A Top y A Stairs (cortan visión desde arriba y la rotación de B). Viper levanta muro hacia A Link desde B Main.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Rubble"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "A Top",
       "A Stairs",
       "A Link"
      ],
      "arrows": [
       [
        "A Lobby",
        "A Top",
        "util"
       ],
       [
        "A Lobby",
        "A Stairs",
        "util"
       ],
       [
        "B Main",
        "A Link",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Fade lanza el Acechador a A Tree, Raze entra con satchel desde Rubble y granada al default. Fade sigue por A Main.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Fade",
        "A Tree"
       ],
       [
        "Omen",
        "A Main"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "A Top",
       "A Stairs",
       "A Link"
      ],
      "arrows": [
       [
        "A Main",
        "A Tree",
        "util"
       ],
       [
        "A Rubble",
        "A Site",
        "ally"
       ],
       [
        "A Main",
        "A Tree",
        "ally"
       ],
       [
        "A Rubble",
        "A Hut",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Site limpio: plantamos en default tapados por A Hut. Omen vigila A Stairs, Raze A Top, Fade A Tree y Killjoy vuelve a jugar la entrada de A Main.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Hut"
       ],
       [
        "Fade",
        "A Tree"
       ],
       [
        "Omen",
        "A Site"
       ],
       [
        "Killjoy",
        "A Main"
       ],
       [
        "Viper",
        "A Root"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "A Link"
       ],
       [
        "?",
        "C Link"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Root",
        "A Main",
        "ally"
       ],
       [
        "B Upper",
        "A Link",
        "enemy"
       ],
       [
        "C Hall",
        "C Link",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "C Mound rápido",
   "type": "Execute",
   "tip": "C está lejos de A: si entras rápido y con todo, la rotación de A llega tarde. No te pares en C Main.",
   "steps": [
    {
     "text": "Salida a C Lobby con 4. Fade va a B Main para hacer ruido y retener al defensor de B.",
     "board": {
      "allies": [
       [
        "Raze",
        "C Lobby"
       ],
       [
        "Viper",
        "C Lobby"
       ],
       [
        "Omen",
        "C Lobby"
       ],
       [
        "Killjoy",
        "C Lobby"
       ],
       [
        "Fade",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
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
        "B Main",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Raze despeja C Mound con granada. Viper levanta muro desde C Mound hasta C Waterfall que corta la visión desde C Link.",
     "board": {
      "allies": [
       [
        "Raze",
        "C Mound"
       ],
       [
        "Viper",
        "C Mound"
       ],
       [
        "Omen",
        "C Lobby"
       ],
       [
        "Killjoy",
        "C Lobby"
       ],
       [
        "Fade",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "C Waterfall",
       "C Main"
      ],
      "arrows": [
       [
        "C Lobby",
        "C Mound",
        "ally"
       ],
       [
        "C Mound",
        "C Waterfall",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Omen fuma C Hall y C Gravel. Killjoy lanza el enjambre a C Bend y Raze limpia con bumbum la esquina de C Main.",
     "board": {
      "allies": [
       [
        "Raze",
        "C Main"
       ],
       [
        "Viper",
        "C Mound"
       ],
       [
        "Omen",
        "C Lobby"
       ],
       [
        "Killjoy",
        "C Mound"
       ],
       [
        "Fade",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "C Waterfall",
       "C Hall",
       "C Gravel"
      ],
      "arrows": [
       [
        "C Lobby",
        "C Hall",
        "util"
       ],
       [
        "C Lobby",
        "C Gravel",
        "util"
       ],
       [
        "C Mound",
        "C Bend",
        "util"
       ],
       [
        "C Mound",
        "C Main",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Entrada en bloque: Raze satchel a C Site, Viper y Killjoy detrás. Matamos al de C Bend y al de C Site antes de que llegue la ayuda.",
     "board": {
      "allies": [
       [
        "Raze",
        "C Site"
       ],
       [
        "Viper",
        "C Bend"
       ],
       [
        "Omen",
        "C Main"
       ],
       [
        "Killjoy",
        "C Main"
       ],
       [
        "Fade",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Astra",
        "C Link"
       ]
      ],
      "smokes": [
       "C Waterfall",
       "C Hall",
       "C Gravel"
      ],
      "arrows": [
       [
        "C Main",
        "C Site",
        "ally"
       ],
       [
        "C Main",
        "C Bend",
        "ally"
       ],
       [
        "B Upper",
        "C Link",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Plant en C Site. Fade rota por C Door detrás para cerrar flanco y jugar C Waterfall en post-plant.",
     "board": {
      "allies": [
       [
        "Raze",
        "C Hall"
       ],
       [
        "Viper",
        "C Bend"
       ],
       [
        "Omen",
        "C Site"
       ],
       [
        "Killjoy",
        "C Main"
       ],
       [
        "Fade",
        "C Waterfall"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "C Link"
       ],
       [
        "Jett",
        "C Gravel"
       ]
      ],
      "spike": "C Site",
      "smokes": [
       "C Gravel"
      ],
      "arrows": [
       [
        "B Main",
        "C Door",
        "ally"
       ],
       [
        "C Door",
        "C Waterfall",
        "ally"
       ],
       [
        "A Stairs",
        "C Gravel",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "Default y split a B",
   "type": "Split",
   "tip": "El default te da info sin gastar utilidad. Escucha las puertas: te dicen cuándo rotan.",
   "steps": [
    {
     "text": "Default 1-2-2: Killjoy en A Lobby, Raze y Fade en B Main, Omen y Viper en C Mound. Nadie se pica solo.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Lobby"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Pillars"
       ],
       [
        "Omen",
        "C Mound"
       ],
       [
        "Viper",
        "C Mound"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
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
        "B Main",
        "ally"
       ],
       [
        "C Lobby",
        "C Mound",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Fade lanza el ojo (Acecho) a B Site: un Astra en B Upper. Killjoy hace ruido en A Main para retener a los de A.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Main"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Pillars"
       ],
       [
        "Omen",
        "C Mound"
       ],
       [
        "Viper",
        "C Mound"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "arrows": [
       [
        "B Pillars",
        "B Site",
        "util"
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
     "text": "Split: Omen y Viper cruzan C Door hacia C Link para entrar a B por detrás. Viper corta B Upper con muro; Omen fuma A Link.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Main"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Pillars"
       ],
       [
        "Omen",
        "C Waterfall"
       ],
       [
        "Viper",
        "C Link"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "A Link",
       "B Upper"
      ],
      "arrows": [
       [
        "C Mound",
        "C Door",
        "ally"
       ],
       [
        "C Door",
        "C Waterfall",
        "ally"
       ],
       [
        "C Waterfall",
        "C Link",
        "ally"
       ],
       [
        "C Waterfall",
        "A Link",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada simultánea: Raze y Fade por B Main con flash de Fade, Viper desde C Link. El defensor de B queda en pinza.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Main"
       ],
       [
        "Raze",
        "B Site"
       ],
       [
        "Fade",
        "B Site"
       ],
       [
        "Omen",
        "C Link"
       ],
       [
        "Viper",
        "B Upper"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "B Upper"
       ],
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Stairs"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "A Link"
      ],
      "arrows": [
       [
        "B Main",
        "B Site",
        "ally"
       ],
       [
        "C Link",
        "B Upper",
        "ally"
       ],
       [
        "B Main",
        "B Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Plant en B Site. Killjoy vuelve por A Root para jugar flanco; Omen guarda C Link y Viper A Link.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Pillars"
       ],
       [
        "Raze",
        "B Site"
       ],
       [
        "Fade",
        "B Main"
       ],
       [
        "Omen",
        "C Link"
       ],
       [
        "Viper",
        "B Upper"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Link"
       ],
       [
        "Sova",
        "C Waterfall"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "A Link"
      ],
      "arrows": [
       [
        "A Main",
        "B Pillars",
        "ally"
       ],
       [
        "A Stairs",
        "A Link",
        "enemy"
       ],
       [
        "C Site",
        "C Waterfall",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Setup 2-1-2 con info de puertas",
   "type": "Setup",
   "tip": "Las puertas giratorias suenan: si oyes A Door o C Door, alguien rota. Avisa siempre por voz.",
   "steps": [
    {
     "text": "Posiciones: Killjoy y Raze en A, Omen solo en B (rota a ambos lados), Viper y Fade en C.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "B Upper"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [],
      "arrows": [
       [
        "Defender Side Spawn",
        "A Top",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "B Upper",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "C Hall",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Killjoy deja alarmbot en A Rubble y torreta mirando A Main. Viper coloca la orbe en C Mound para el muro.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "B Upper"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [],
      "arrows": [
       [
        "A Site",
        "A Rubble",
        "util"
       ],
       [
        "A Site",
        "A Main",
        "util"
       ],
       [
        "C Hall",
        "C Mound",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Fade lanza el ojo (Acecho) a C Main a 1:30 para leer la presión. Omen vigila B Main desde B Upper sin peekear.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "B Upper"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "C Main"
       ],
       [
        "?",
        "C Mound"
       ]
      ],
      "arrows": [
       [
        "C Site",
        "C Main",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Info: 3 rivales en C. Omen fuma C Main desde B y Viper activa muro. Raze rota de A a B Upper por A Link; Killjoy aguanta A.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "A Link"
       ],
       [
        "Omen",
        "C Link"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "C Mound"
       ],
       [
        "Breach",
        "C Main"
       ],
       [
        "Gekko",
        "C Mound"
       ]
      ],
      "smokes": [
       "C Main",
       "C Waterfall"
      ],
      "arrows": [
       [
        "A Top",
        "A Link",
        "ally"
       ],
       [
        "B Upper",
        "C Link",
        "ally"
       ],
       [
        "B Upper",
        "C Main",
        "util"
       ],
       [
        "C Mound",
        "C Main",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Retraso cumplido: los tres de C entran tarde y se encuentran a Omen, Viper, Fade y Raze llegando por C Gravel.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "C Gravel"
       ],
       [
        "Omen",
        "C Link"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "C Main"
       ],
       [
        "Breach",
        "C Main"
       ]
      ],
      "smokes": [
       "C Waterfall"
      ],
      "arrows": [
       [
        "A Link",
        "C Gravel",
        "ally"
       ],
       [
        "C Mound",
        "C Main",
        "enemy"
       ],
       [
        "C Site",
        "C Main",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake de A en grupo",
   "type": "Retake",
   "tip": "No vuelvas uno a uno. Junta 3-4, usa utilidad desde A Stairs y A Link y entra a la vez.",
   "steps": [
    {
     "text": "A cae: plant en A Site. Killjoy murió; Raze está vivo en A Top. Omen en B Upper, Viper y Fade en C.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "B Upper"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Hut"
       ],
       [
        "Astra",
        "A Main"
       ],
       [
        "Breach",
        "A Tree"
       ]
      ],
      "spike": "A Site"
     }
    },
    {
     "text": "Agrupamos: Omen y Fade a A Link, Viper detrás. Raze no asoma y espera el retake.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Viper",
        "C Link"
       ],
       [
        "Fade",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Hut"
       ],
       [
        "Astra",
        "A Main"
       ],
       [
        "Breach",
        "A Tree"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "B Upper",
        "A Link",
        "ally"
       ],
       [
        "C Site",
        "C Link",
        "ally"
       ],
       [
        "C Link",
        "A Link",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Omen fuma A Main y A Tree para aislar el site. Fade lanza el Acechador por A Stairs.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Viper",
        "A Link"
       ],
       [
        "Fade",
        "A Stairs"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Hut"
       ],
       [
        "Astra",
        "A Main"
       ],
       [
        "Breach",
        "A Tree"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Main",
       "A Tree"
      ],
      "arrows": [
       [
        "A Link",
        "A Main",
        "util"
       ],
       [
        "A Link",
        "A Tree",
        "util"
       ],
       [
        "A Stairs",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Viper mordedura al spike, Raze bumbum desde A Top a A Hut, Fade y Omen entran por A Stairs a la vez.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "A Stairs"
       ],
       [
        "Viper",
        "A Stairs"
       ],
       [
        "Fade",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "A Hut"
       ],
       [
        "Breach",
        "A Tree"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Main",
       "A Tree"
      ],
      "arrows": [
       [
        "A Stairs",
        "A Site",
        "util"
       ],
       [
        "A Top",
        "A Hut",
        "util"
       ],
       [
        "A Stairs",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Site limpio: Viper defusa tapada por su humo mientras los demás miran A Tree y A Main.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Hut"
       ],
       [
        "Omen",
        "A Tree"
       ],
       [
        "Viper",
        "A Site"
       ],
       [
        "Fade",
        "A Site"
       ]
      ],
      "enemies": [],
      "spike": "A Site",
      "smokes": [
       "A Main"
      ],
      "arrows": [
       [
        "A Top",
        "A Hut",
        "ally"
       ],
       [
        "A Site",
        "A Tree",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Agresión en B Main",
   "type": "Setup",
   "tip": "Solo una vez por mitad. Pegas un pick con utilidad y vuelves; si no hay pick a 1:25, retírate.",
   "steps": [
    {
     "text": "Omen y Raze se juntan en B Site. El resto en sus sites con menos gente (Killjoy solo en A, Viper y Fade en C).",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "B Site"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [],
      "arrows": [
       [
        "Defender Side Spawn",
        "B Upper",
        "ally"
       ],
       [
        "B Upper",
        "B Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Omen fuma B Pillars para cortar la vista desde spawn. Raze sube a B Main tras el humo.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "Attacker Side Spawn"
       ]
      ],
      "smokes": [
       "B Pillars"
      ],
      "arrows": [
       [
        "B Site",
        "B Pillars",
        "util"
       ],
       [
        "B Site",
        "B Main",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Omen ciega B Pillars con Paranoia y Raze castiga con granada al que entra desde A Root/B Pillars.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Omen",
        "B Site"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Pillars"
       ],
       [
        "Sova",
        "A Root"
       ]
      ],
      "smokes": [
       "B Pillars"
      ],
      "arrows": [
       [
        "B Site",
        "B Pillars",
        "util"
       ],
       [
        "A Root",
        "B Pillars",
        "enemy"
       ],
       [
        "B Main",
        "B Pillars",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Con el pick hecho, Raze vuelve a B Site y Omen a B Upper. Los rivales saben que hay agresión: Killjoy escucha A Door.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "B Site"
       ],
       [
        "Omen",
        "B Upper"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "A Root"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "B Main",
        "B Site",
        "ally"
       ],
       [
        "B Site",
        "B Upper",
        "ally"
       ],
       [
        "A Lobby",
        "A Main",
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
   "title": "Se oye la puerta de A",
   "situation": "1:20. Hemos hecho ruido en A Main con Killjoy y Fade y se oye la puerta giratoria de A Door. Los otros tres estamos en B Main.",
   "enemy": [
    {
     "t": "Un defensor de B rota hacia A",
     "pct": 60
    },
    {
     "t": "Es un defensor que viene a flanquear A Main",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Ejecutar B rápido con la utilidad guardada",
     "ok": true,
     "why": "La puerta confirma una rotación: B tiene un defensor menos. Castiga el site débil."
    },
    {
     "t": "Seguir esperando en A Main",
     "ok": false,
     "why": "A ya recibe refuerzos; pierdes tiempo y ventaja."
    },
    {
     "t": "Ir todos a C por C Door",
     "ok": false,
     "why": "Hacer sonar C Door delata el movimiento y C está lejos."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "A Main"
     ],
     [
      "Fade",
      "A Main"
     ],
     [
      "Raze",
      "B Main"
     ],
     [
      "Omen",
      "B Main"
     ],
     [
      "Viper",
      "B Pillars"
     ]
    ],
    "enemies": [
     [
      "Cypher",
      "A Site"
     ],
     [
      "Astra",
      "B Upper"
     ],
     [
      "?",
      "A Door"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Upper",
     "A Link",
     "enemy"
    ],
    [
     "A Link",
     "A Stairs",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Main",
     "B Site",
     "ally"
    ],
    [
     "B Pillars",
     "B Site",
     "ally"
    ],
    [
     "B Main",
     "B Upper",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Post-plant en C contra 3",
   "situation": "Spike plantado en C Site, 0:35 en el spike. Somos 3 (Viper, Omen, Raze) contra 3. Fade lanzó el ojo (Acecho): vienen por C Link y C Gravel.",
   "enemy": [
    {
     "t": "Entran juntos por C Hall con humo",
     "pct": 55
    },
    {
     "t": "Uno lurkea por C Door para pillarnos de espalda",
     "pct": 25
    },
    {
     "t": "Esperan al último segundo y van al spike",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Salir del site a C Main y C Waterfall y jugar el spike con molly",
     "ok": true,
     "why": "Desde fuera juegas el crossfire y las mollys de Viper retrasan el defuse sin exponerte."
    },
    {
     "t": "Quedarnos los 3 pegados al spike",
     "ok": false,
     "why": "Una granada o un ulti de Sova os pilla a todos juntos."
    },
    {
     "t": "Ir a buscar a los rivales a C Link",
     "ok": false,
     "why": "Regalas la ventaja de post-plant: ellos tienen que venir a ti."
    }
   ],
   "board": {
    "allies": [
     [
      "Viper",
      "C Site"
     ],
     [
      "Omen",
      "C Bend"
     ],
     [
      "Raze",
      "C Main"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "C Link"
     ],
     [
      "Astra",
      "C Gravel"
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
     "C Link",
     "C Hall",
     "enemy"
    ],
    [
     "C Gravel",
     "C Hall",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Site",
     "C Waterfall",
     "ally"
    ],
    [
     "C Bend",
     "C Main",
     "ally"
    ],
    [
     "C Waterfall",
     "C Site",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Ronda eco en A",
   "situation": "Ronda de pistolas/eco (3800 de media). El rival tiene compra completa. Estamos en A Lobby y C Lobby a 1:40.",
   "enemy": [
    {
     "t": "Juegan pasivos esperando la entrada",
     "pct": 50
    },
    {
     "t": "Un Jett pica A Main con Operator",
     "pct": 35
    },
    {
     "t": "Empujan C Main para info",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Juntar los 5 en A Rubble y jugar cerca, buscando cuerpos y armas",
     "ok": true,
     "why": "Con armas baratas ganas en distancia corta; A Rubble y A Tree dan duelos cercanos."
    },
    {
     "t": "Pelear Operator desde A Main en largo",
     "ok": false,
     "why": "Pistola contra Operator a distancia: pierdes siempre."
    },
    {
     "t": "Rushear C por C Main abierto",
     "ok": false,
     "why": "C Main es largo; te disparan antes de llegar."
    }
   ],
   "board": {
    "allies": [
     [
      "Raze",
      "A Lobby"
     ],
     [
      "Fade",
      "A Lobby"
     ],
     [
      "Killjoy",
      "A Root"
     ],
     [
      "Omen",
      "C Lobby"
     ],
     [
      "Viper",
      "C Lobby"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "A Top"
     ],
     [
      "Cypher",
      "A Site"
     ],
     [
      "?",
      "C Site"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Top",
     "A Drop",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Lobby",
     "A Rubble",
     "ally"
    ],
    [
     "C Lobby",
     "A Lobby",
     "ally"
    ],
    [
     "A Root",
     "A Rubble",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Lurk de C Door muerto",
   "situation": "1:05. Nuestro Raze, que lurkeaba por C Door, ha muerto en C Waterfall. Estamos 4v5 en B Main con utilidad entera.",
   "enemy": [
    {
     "t": "El defensor de C se queda en C tras el pick",
     "pct": 60
    },
    {
     "t": "Rota a B por C Link",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Ejecutar A con humos y Fade; está lejos de C",
     "ok": true,
     "why": "Su ventaja numérica está en C y B. A es el site más alejado del pick y puedes llegar 4v3."
    },
    {
     "t": "Ir a vengar a Raze por C Door",
     "ok": false,
     "why": "La puerta suena y te esperan exactamente ahí."
    },
    {
     "t": "Esperar en B Main al último minuto",
     "ok": false,
     "why": "Con un hombre menos, el tiempo juega a su favor."
    }
   ],
   "board": {
    "allies": [
     [
      "Fade",
      "B Main"
     ],
     [
      "Omen",
      "B Main"
     ],
     [
      "Viper",
      "B Pillars"
     ],
     [
      "Killjoy",
      "A Root"
     ]
    ],
    "enemies": [
     [
      "Gekko",
      "C Waterfall"
     ],
     [
      "Astra",
      "B Upper"
     ],
     [
      "Cypher",
      "A Site"
     ],
     [
      "?",
      "C Site"
     ]
    ]
   },
   "enemyMove": [
    [
     "C Waterfall",
     "C Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Main",
     "A Root",
     "ally"
    ],
    [
     "A Root",
     "A Main",
     "ally"
    ],
    [
     "A Lobby",
     "A Top",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Operator en A Top",
   "situation": "Dos rondas seguidas un Jett con Operator nos mata desde A Top al asomar A Main. 1:30, estamos en A Lobby.",
   "enemy": [
    {
     "t": "Repetirá A Top",
     "pct": 60
    },
    {
     "t": "Cambiará a A Drop o A Hut",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Humo de Omen en A Top y entrar por A Rubble a la vez",
     "ok": true,
     "why": "Cortas la línea del Operator y entras por un ángulo que él no cubre."
    },
    {
     "t": "Asomar con jiggle peek esperando su disparo",
     "ok": false,
     "why": "Con Operator te mata con un toque; solo das info."
    },
    {
     "t": "Rushear A Main sin utilidad",
     "ok": false,
     "why": "Es justo lo que espera: un Operator sobre un pasillo largo."
    }
   ],
   "board": {
    "allies": [
     [
      "Raze",
      "A Lobby"
     ],
     [
      "Fade",
      "A Lobby"
     ],
     [
      "Omen",
      "A Lobby"
     ],
     [
      "Killjoy",
      "A Root"
     ],
     [
      "Viper",
      "A Lobby"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "A Top"
     ],
     [
      "Cypher",
      "A Site"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Top",
     "A Drop",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Lobby",
     "A Top",
     "util"
    ],
    [
     "A Lobby",
     "A Rubble",
     "ally"
    ],
    [
     "A Lobby",
     "A Main",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Rush a C a 1:35",
   "situation": "1:35. Viper y Fade escuchan 4-5 pasos en C Mound y una granada de Raze. Estamos en setup 2-1-2.",
   "enemy": [
    {
     "t": "Ejecutan C ya",
     "pct": 70
    },
    {
     "t": "Es fake y van a A",
     "pct": 30
    }
   ],
   "responses": [
    {
     "t": "Viper levanta muro y retrasa; Omen rota a C Link, Raze baja de A",
     "ok": true,
     "why": "Retrasar en C con utilidad mientras llegan los refuerzos. Killjoy aguanta A sola con su setup."
    },
    {
     "t": "Peekear C Main los dos a la vez",
     "ok": false,
     "why": "2v5 en abierto contra utilidad completa: perdéis los dos."
    },
    {
     "t": "Rotar todo el equipo a C",
     "ok": false,
     "why": "Si es fake, regalas A."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "A Site"
     ],
     [
      "Raze",
      "A Top"
     ],
     [
      "Omen",
      "B Upper"
     ],
     [
      "Viper",
      "C Hall"
     ],
     [
      "Fade",
      "C Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "C Mound"
     ],
     [
      "?",
      "C Mound"
     ],
     [
      "?",
      "C Lobby"
     ],
     [
      "?",
      "C Main"
     ]
    ]
   },
   "enemyMove": [
    [
     "C Mound",
     "C Main",
     "enemy"
    ],
    [
     "C Main",
     "C Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Hall",
     "C Waterfall",
     "util"
    ],
    [
     "B Upper",
     "C Link",
     "ally"
    ],
    [
     "A Top",
     "A Link",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Se oye C Door",
   "situation": "1:10. Juegas solo en B. Fade en C oye la puerta de C Door y nadie ha aparecido en C Main.",
   "enemy": [
    {
     "t": "Un atacante pasa a C Waterfall para flanquear B o C",
     "pct": 55
    },
    {
     "t": "Rotan de C a B por la puerta",
     "pct": 30
    },
    {
     "t": "Es un truco para que rotes",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Omen fuma C Waterfall y Fade lanza el ojo (Acecho) para confirmar",
     "ok": true,
     "why": "Confirmas con utilidad barata y retrasas a quien sale de la puerta."
    },
    {
     "t": "Fade empuja la puerta sola",
     "ok": false,
     "why": "Te espera alguien al otro lado con el ángulo cerrado."
    },
    {
     "t": "Ignorarlo",
     "ok": false,
     "why": "Te pueden flanquear B o C sin aviso."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "A Site"
     ],
     [
      "Raze",
      "A Top"
     ],
     [
      "Omen",
      "B Upper"
     ],
     [
      "Viper",
      "C Hall"
     ],
     [
      "Fade",
      "C Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "C Door"
     ]
    ]
   },
   "enemyMove": [
    [
     "C Door",
     "C Waterfall",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Upper",
     "C Waterfall",
     "util"
    ],
    [
     "C Site",
     "C Waterfall",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake de B 3v3",
   "situation": "0:40 en el spike, plantado en B Site. Somos 3 (Killjoy, Viper, Omen) contra 3. Uno juega B Pillars, otro B Main y otro el spike.",
   "enemy": [
    {
     "t": "Juegan cruzados desde B Main y B Pillars",
     "pct": 55
    },
    {
     "t": "Uno se queda en el site defendiendo el spike",
     "pct": 45
    }
   ],
   "responses": [
    {
     "t": "Entrar juntos por B Upper con humo en B Main y molly al spike",
     "ok": true,
     "why": "Aislas el site, castigas al que se queda y entras en grupo."
    },
    {
     "t": "Entrar uno a uno por A Link y C Link",
     "ok": false,
     "why": "Trade imposible; te matan por separado."
    },
    {
     "t": "Esperar a que acabe el tiempo",
     "ok": false,
     "why": "El spike explota; hay que defusar."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "A Link"
     ],
     [
      "Viper",
      "C Link"
     ],
     [
      "Omen",
      "B Upper"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "B Site"
     ],
     [
      "Breach",
      "B Main"
     ],
     [
      "Sova",
      "B Pillars"
     ]
    ],
    "spike": "B Site"
   },
   "enemyMove": [
    [
     "B Site",
     "B Main",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Upper",
     "B Main",
     "util"
    ],
    [
     "C Link",
     "B Site",
     "util"
    ],
    [
     "A Link",
     "B Upper",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Pierdes A Main",
   "situation": "1:15. A Killjoy le han roto la torreta y la alarma en A Main. Raze está en A Top, el resto lejos.",
   "enemy": [
    {
     "t": "Ejecutan A en 5-10 segundos",
     "pct": 65
    },
    {
     "t": "Fake en A y luego B",
     "pct": 35
    }
   ],
   "responses": [
    {
     "t": "Raze retrasa con bumbum desde A Top y Killjoy se pasa a jugar A Stairs; Omen rota",
     "ok": true,
     "why": "Retrasar sin morir gana tiempo hasta la rotación."
    },
    {
     "t": "Killjoy y Raze peekean A Main",
     "ok": false,
     "why": "Pierdes 2 jugadores en un 2v5 en el que no tienes ventaja."
    },
    {
     "t": "Killjoy se va a otro site",
     "ok": false,
     "why": "A queda sin nadie, plant gratis."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "A Site"
     ],
     [
      "Raze",
      "A Top"
     ],
     [
      "Omen",
      "B Upper"
     ],
     [
      "Viper",
      "C Hall"
     ],
     [
      "Fade",
      "C Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Main"
     ],
     [
      "?",
      "A Rubble"
     ],
     [
      "?",
      "A Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Main",
     "A Site",
     "enemy"
    ],
    [
     "A Rubble",
     "A Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Top",
     "A Main",
     "util"
    ],
    [
     "A Site",
     "A Stairs",
     "ally"
    ],
    [
     "B Upper",
     "A Link",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Clutch 1v2 en C",
   "situation": "0:30 en el spike. Eres Viper, último jugador vivo, en C Gravel. Dos enemigos: uno en C Bend y otro en C Main.",
   "enemy": [
    {
     "t": "Se quedan cruzados en C Bend y C Main",
     "pct": 60
    },
    {
     "t": "Uno va hacia C Hall a buscarte",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Humo/muro al spike, fake defuse y aislar al de C Bend",
     "ok": true,
     "why": "Te aislas del cruce y fuerzas un 1v1 de cada vez."
    },
    {
     "t": "Defusar directamente",
     "ok": false,
     "why": "Los dos te ven a la vez."
    },
    {
     "t": "Salir a buscarlos por C Hall",
     "ok": false,
     "why": "Te expones a un 1v2 en abierto."
    }
   ],
   "board": {
    "allies": [
     [
      "Viper",
      "C Gravel"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "C Bend"
     ],
     [
      "Breach",
      "C Main"
     ]
    ],
    "spike": "C Site"
   },
   "enemyMove": [
    [
     "C Main",
     "C Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "C Gravel",
     "C Site",
     "util"
    ],
    [
     "C Gravel",
     "C Hall",
     "ally"
    ]
   ]
  }
 ],
 "rounds": {
  "attack": {
   "side": "Ataque",
   "title": "Execute A con dos entradas",
   "strategy": "A Main + Rubble",
   "intro": "Ronda de compra completa 5v5. Plan: tomar A Main y A Rubble, humos en A Top y A Stairs, entrada doble y post-plant fuera del site.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Salimos de spawn. Compra completa 5v5. Plan: A Main + Rubble.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Lobby"
       ],
       [
        "Fade",
        "A Lobby"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ]
     },
     "question": "¿Qué hacemos primero?",
     "options": [
      {
       "t": "Tomar A Main y A Rubble sin asomar al site",
       "ok": true,
       "why": "Control sin riesgo; luego llega la utilidad."
      },
      {
       "t": "Raze entra sola a A Site",
       "ok": false,
       "why": "Sin utilidad del equipo es un trade imposible."
      },
      {
       "t": "Todos a B",
       "ok": false,
       "why": "Cambiar el plan sin info rompe la coordinación."
      }
     ],
     "result": [
      [
       "A Lobby",
       "A Main",
       "ally"
      ],
      [
       "A Lobby",
       "A Rubble",
       "ally"
      ]
     ]
    },
    {
     "time": "1:20",
     "narration": "Tenemos A Main y A Rubble. Fade lanza el ojo (Acecho): Cypher en A Site, Jett en A Top.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Rubble"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ]
     },
     "question": "¿Dónde ponemos los humos?",
     "options": [
      {
       "t": "A Top y A Stairs",
       "ok": true,
       "why": "Quitas el Operator de Jett y el ángulo por el que llega la rotación."
      },
      {
       "t": "A Tree y A Hut",
       "ok": false,
       "why": "Fumas el site que tú mismo tienes que limpiar."
      },
      {
       "t": "No usar humos y entrar ya",
       "ok": false,
       "why": "Jett desde A Top te pica la entrada."
      }
     ],
     "result": [
      [
       "A Lobby",
       "A Top",
       "util"
      ],
      [
       "A Lobby",
       "A Stairs",
       "util"
      ]
     ]
    },
    {
     "time": "1:05",
     "narration": "Humos puestos. Viper levanta muro a A Link desde B Main. Killjoy deja torreta en A Root.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Rubble"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Omen",
        "A Lobby"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Jett",
        "A Top"
       ],
       [
        "Astra",
        "B Upper"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "A Top",
       "A Stairs",
       "A Link"
      ]
     },
     "question": "¿Cómo entramos?",
     "options": [
      {
       "t": "Acechador de Fade a A Tree y Raze satchel desde A Rubble a la vez",
       "ok": true,
       "why": "Entrada simultánea por dos sitios con la info del Acechador."
      },
      {
       "t": "Primero Fade sola por A Main",
       "ok": false,
       "why": "Entrada sin trade: Cypher la cubre con sus trampas."
      },
      {
       "t": "Esperar a que se vayan los humos",
       "ok": false,
       "why": "Los humos son para entrar ahora."
      }
     ],
     "result": [
      [
       "A Main",
       "A Tree",
       "util"
      ],
      [
       "A Rubble",
       "A Site",
       "ally"
      ],
      [
       "A Main",
       "A Tree",
       "ally"
      ]
     ]
    },
    {
     "time": "0:55",
     "narration": "Raze mata a Cypher en A Site. Jett sale del humo y mata a Fade en A Tree. 4v4.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Omen",
        "A Main"
       ],
       [
        "Killjoy",
        "A Root"
       ],
       [
        "Viper",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "A Hut"
       ],
       [
        "Astra",
        "A Link"
       ],
       [
        "Gekko",
        "C Hall"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "smokes": [
       "A Link"
      ]
     },
     "question": "¿Qué hace Omen?",
     "options": [
      {
       "t": "Paranoia a A Hut y entrar a tradear con Raze",
       "ok": true,
       "why": "Trade inmediato con utilidad cegadora; Jett no ve."
      },
      {
       "t": "Quedarse en A Main",
       "ok": false,
       "why": "Raze queda sola contra Jett."
      },
      {
       "t": "Ir a por la rotación a A Link",
       "ok": false,
       "why": "Primero asegura el site."
      }
     ],
     "result": [
      [
       "A Main",
       "A Hut",
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
     "time": "0:45",
     "narration": "Omen mata a Jett. Site nuestro 4v3. Viper y Killjoy vienen a A.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Hut"
       ],
       [
        "Omen",
        "A Site"
       ],
       [
        "Killjoy",
        "A Main"
       ],
       [
        "Viper",
        "A Root"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "A Link"
       ],
       [
        "Gekko",
        "C Link"
       ],
       [
        "Sova",
        "C Site"
       ]
      ]
     },
     "question": "¿Dónde plantamos?",
     "options": [
      {
       "t": "Default tapados por A Hut, con Raze mirando A Stairs",
       "ok": true,
       "why": "Plant seguro y con línea para jugar post-plant desde fuera."
      },
      {
       "t": "Plant abierto en medio",
       "ok": false,
       "why": "Lo ven desde A Top y A Tree."
      },
      {
       "t": "No plantar, ir a por los rivales",
       "ok": false,
       "why": "El spike es tu ventaja: plántalo."
      }
     ],
     "result": [
      [
       "A Site",
       "A Hut",
       "ally"
      ]
     ]
    },
    {
     "time": "0:35",
     "narration": "Plant hecho. La rotación llega por A Link y A Stairs.",
     "board": {
      "allies": [
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "A Tree"
       ],
       [
        "Killjoy",
        "A Main"
       ],
       [
        "Viper",
        "A Rubble"
       ]
      ],
      "enemies": [
       [
        "Astra",
        "A Stairs"
       ],
       [
        "Gekko",
        "A Link"
       ],
       [
        "Sova",
        "A Link"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Cómo jugamos el post-plant?",
     "options": [
      {
       "t": "Fuera del site, cruzando A Main, A Rubble y A Top, con mollys al spike",
       "ok": true,
       "why": "Ellos tienen que venir al spike; tú tiras utilidad para retrasar el defuse."
      },
      {
       "t": "Todos pegados al spike",
       "ok": false,
       "why": "Una granada os mata a todos."
      },
      {
       "t": "Salir a pelear A Link",
       "ok": false,
       "why": "Pierdes la ventaja de post-plant."
      }
     ],
     "result": [
      [
       "A Rubble",
       "A Site",
       "util"
      ],
      [
       "A Top",
       "A Site",
       "util"
      ],
      [
       "A Stairs",
       "A Site",
       "enemy"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: control sin riesgo, humos que quitan el Operator, entrada doble con trade inmediato y post-plant fuera del site."
  },
  "defense": {
   "side": "Defensa",
   "title": "Retraso en C y retake coordinado",
   "strategy": "Setup 2-1-2 con info de puertas",
   "intro": "Ronda de compra completa. Setup 2-1-2; usamos la info de las puertas y retrasamos C mientras llegan refuerzos.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Inicio de ronda de defensa. Setup 2-1-2: Killjoy y Raze en A, Omen en B, Viper y Fade en C.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "B Upper"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": []
     },
     "question": "¿Qué hace Killjoy?",
     "options": [
      {
       "t": "Alarmbot en A Rubble y torreta mirando A Main",
       "ok": true,
       "why": "Info y retraso por las dos entradas de A."
      },
      {
       "t": "Ir a pelear A Lobby",
       "ok": false,
       "why": "Killjoy es ancla, no entry."
      },
      {
       "t": "Guardar toda la utilidad",
       "ok": false,
       "why": "Necesitas info de A desde el inicio."
      }
     ],
     "result": [
      [
       "A Site",
       "A Rubble",
       "util"
      ],
      [
       "A Site",
       "A Main",
       "util"
      ]
     ]
    },
    {
     "time": "1:30",
     "narration": "Fade lanza el ojo (Acecho): tres atacantes en C Mound y C Main. B silencioso.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "A Top"
       ],
       [
        "Omen",
        "B Upper"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "C Mound"
       ],
       [
        "Breach",
        "C Main"
       ],
       [
        "Gekko",
        "C Mound"
       ]
      ]
     },
     "question": "¿Qué hacemos con la info?",
     "options": [
      {
       "t": "Omen fuma C Main, Raze rota a A Link y Killjoy aguanta A",
       "ok": true,
       "why": "Retraso en C y rotación parcial; no abandonas A."
      },
      {
       "t": "Todos a C",
       "ok": false,
       "why": "Si es fake, A cae."
      },
      {
       "t": "Esperar a que entren",
       "ok": false,
       "why": "Sin retraso, C cae antes de que llegue la ayuda."
      }
     ],
     "result": [
      [
       "B Upper",
       "C Main",
       "util"
      ],
      [
       "A Top",
       "A Link",
       "ally"
      ],
      [
       "B Upper",
       "C Link",
       "ally"
      ]
     ]
    },
    {
     "time": "1:15",
     "narration": "Viper levanta muro. Los tres de C esperan; se oye C Door.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "A Link"
       ],
       [
        "Omen",
        "C Link"
       ],
       [
        "Viper",
        "C Hall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "C Mound"
       ],
       [
        "Breach",
        "C Main"
       ],
       [
        "Gekko",
        "C Door"
       ]
      ],
      "smokes": [
       "C Main",
       "C Waterfall"
      ]
     },
     "question": "¿Qué significa la puerta?",
     "options": [
      {
       "t": "Uno pasa a C Waterfall: Omen vigila ese ángulo",
       "ok": true,
       "why": "La puerta avisa de un flanco; lo cubres sin rotar a nadie más."
      },
      {
       "t": "Ignorarla",
       "ok": false,
       "why": "Te pillan por C Waterfall."
      },
      {
       "t": "Omen va a abrir la puerta",
       "ok": false,
       "why": "Te espera alguien al otro lado."
      }
     ],
     "result": [
      [
       "C Link",
       "C Waterfall",
       "ally"
      ]
     ]
    },
    {
     "time": "1:00",
     "narration": "Ejecutan C. Viper muere en C Hall, pero Omen mata a Gekko en C Waterfall. 4v4.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Raze",
        "C Gravel"
       ],
       [
        "Omen",
        "C Waterfall"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "C Site"
       ],
       [
        "Breach",
        "C Main"
       ],
       [
        "Sova",
        "C Mound"
       ],
       [
        "?",
        "B Main"
       ]
      ],
      "smokes": [
       "C Waterfall"
      ]
     },
     "question": "¿Qué hace Fade?",
     "options": [
      {
       "t": "Retirarse a C Hall y esperar a Raze para el crossfire",
       "ok": true,
       "why": "No pelear en desventaja: espera el apoyo."
      },
      {
       "t": "Pelear sola a Jett",
       "ok": false,
       "why": "Jett tiene ventaja de entrada."
      },
      {
       "t": "Ir a buscar a Breach a C Main",
       "ok": false,
       "why": "Te expones a todos."
      }
     ],
     "result": [
      [
       "C Site",
       "C Hall",
       "ally"
      ],
      [
       "A Link",
       "C Gravel",
       "ally"
      ]
     ]
    },
    {
     "time": "0:50",
     "narration": "Atacantes plantan en C Site. Killjoy, rotando, mata al lurk de B Main. Raze y Fade juntos, Omen en C Waterfall. 4v3.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "C Link"
       ],
       [
        "Raze",
        "C Gravel"
       ],
       [
        "Omen",
        "C Waterfall"
       ],
       [
        "Fade",
        "C Hall"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "C Bend"
       ],
       [
        "Breach",
        "C Main"
       ],
       [
        "Sova",
        "C Site"
       ]
      ],
      "spike": "C Site"
     },
     "question": "¿Cómo hacemos el retake?",
     "options": [
      {
       "t": "Fade lanza el Acechador, Raze granada al spike y entrada en grupo desde C Hall y C Waterfall",
       "ok": true,
       "why": "Retake coordinado desde dos ángulos."
      },
      {
       "t": "Esperar a Killjoy sin usar utilidad",
       "ok": false,
       "why": "Pierdes tiempo de defuse."
      },
      {
       "t": "Raze entra sola con satchel",
       "ok": false,
       "why": "Muere sin apoyo."
      }
     ],
     "result": [
      [
       "C Hall",
       "C Site",
       "util"
      ],
      [
       "C Hall",
       "C Site",
       "ally"
      ],
      [
       "C Waterfall",
       "C Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:30",
     "narration": "Matamos a Sova y Breach. Queda Jett en C Bend. Defuse.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "C Hall"
       ],
       [
        "Raze",
        "C Site"
       ],
       [
        "Fade",
        "C Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "C Bend"
       ]
      ],
      "spike": "C Site"
     },
     "question": "¿Quién defusa?",
     "options": [
      {
       "t": "Fade defusa y Raze y Killjoy cubren C Bend",
       "ok": true,
       "why": "Defuse con cobertura en el último ángulo."
      },
      {
       "t": "Todos defusan a la vez",
       "ok": false,
       "why": "Solo uno puede defusar."
      },
      {
       "t": "Todos a por Jett",
       "ok": false,
       "why": "Pierdes tiempo de defuse."
      }
     ],
     "result": [
      [
       "C Hall",
       "C Bend",
       "ally"
      ],
      [
       "C Bend",
       "C Site",
       "enemy"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: info temprana, retraso con utilidad, respuesta a la puerta y retake en grupo."
  }
 }
};
