window.MAPDATA = window.MAPDATA || {};
MAPDATA["summit"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "Mid → A Link",
   "type": "Default",
   "tip": "Con Mid Bend tuyo cortas la rotación por A Link; no ejecutes A sin haber ganado mid.",
   "steps": [
    {
     "text": "Salida: Jett y KAY/O a A Lobby, Sova y Omen a Mid Top, Cypher a B Lobby para vigilar el flanco y hacer ruido.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
       ],
       [
        "KAY/O",
        "A Lobby"
       ],
       [
        "Sova",
        "Mid Top"
       ],
       [
        "Omen",
        "Mid Top"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bottom"
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
        "Mid Top",
        "Mid Fountain",
        "ally"
       ],
       [
        "A Lobby",
        "A Main",
        "ally"
       ],
       [
        "Mid Top",
        "Mid Bottom",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Toma de mid: dardo de Sova a Mid Bottom, humo de Omen en Mid Window y Jett entra a Mid Fountain para matar al que mira mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Fountain"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Sova",
        "Mid Top"
       ],
       [
        "Omen",
        "Mid Top"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "A Garden"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "smokes": [
       "Mid Window"
      ],
      "arrows": [
       [
        "Mid Top",
        "Mid Bottom",
        "util"
       ],
       [
        "Mid Top",
        "Mid Fountain",
        "ally"
       ],
       [
        "Mid Bottom",
        "Mid Fountain",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Con mid ganado, Jett y Sova se colocan en Mid Bend. Cypher deja una trampa en B Lobby y hace ruido en B Main para fijar al centinela de B.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Bend"
       ],
       [
        "Sova",
        "Mid Bend"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Omen",
        "Mid Fountain"
       ],
       [
        "Cypher",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Garden"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Tower"
       ]
      ],
      "arrows": [
       [
        "Mid Fountain",
        "Mid Bend",
        "ally"
       ],
       [
        "B Lobby",
        "B Main",
        "ally"
       ],
       [
        "Mid Bend",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Ejecución: Omen humea A Hall y A Cave, KAY/O lanza flash sobre A Garden y Sova dardo de choque a A Site.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Link"
       ],
       [
        "Sova",
        "Mid Bend"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Omen",
        "Mid Fountain"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Garden"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "smokes": [
       "A Hall",
       "A Cave"
      ],
      "arrows": [
       [
        "A Main",
        "A Garden",
        "util"
       ],
       [
        "Mid Bend",
        "A Site",
        "util"
       ],
       [
        "Mid Bend",
        "A Link",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Entrada doble: KAY/O y Omen por A Main → A Garden, Jett y Sova por A Link. Los defensores quedan entre dos fuegos.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Omen",
        "A Main"
       ],
       [
        "Cypher",
        "Mid Fountain"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Art"
       ]
      ],
      "smokes": [
       "A Hall",
       "A Cave"
      ],
      "arrows": [
       [
        "A Main",
        "A Garden",
        "ally"
       ],
       [
        "A Garden",
        "A Site",
        "ally"
       ],
       [
        "A Link",
        "A Site",
        "ally"
       ],
       [
        "A Art",
        "A Site",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Plant en A Site. Post-plant: KAY/O en A Garden, Sova en A Link con lineup, Omen en A Main y Cypher cierra el flanco desde Mid Fountain.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Omen",
        "A Main"
       ],
       [
        "Cypher",
        "Mid Fountain"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Hall"
       ],
       [
        "?",
        "Mid Bottom"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Hall",
        "A Art",
        "enemy"
       ],
       [
        "Mid Bottom",
        "Mid Fountain",
        "enemy"
       ],
       [
        "A Link",
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
   "name": "B Execute",
   "type": "Execute",
   "tip": "Humo en B Link y B Tower SIEMPRE: son los dos ángulos que te matan al entrar por B Main.",
   "steps": [
    {
     "text": "Salida: Jett, Sova, KAY/O y Omen a B Lobby. Cypher se queda en Mid Top con trampa para avisar de flancos por mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Lobby"
       ],
       [
        "Sova",
        "B Lobby"
       ],
       [
        "KAY/O",
        "B Lobby"
       ],
       [
        "Omen",
        "Mid Tiles"
       ],
       [
        "Cypher",
        "Mid Top"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Tower"
       ],
       [
        "?",
        "Mid Bottom"
       ]
      ],
      "arrows": [
       [
        "Mid Tiles",
        "B Lobby",
        "ally"
       ],
       [
        "Mid Top",
        "Mid Fountain",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info: dardo de Sova sobre B Site y cuchillo de KAY/O a B Main para limpiar utilidad del centinela.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Lobby"
       ],
       [
        "Sova",
        "B Lobby"
       ],
       [
        "KAY/O",
        "B Lobby"
       ],
       [
        "Omen",
        "B Lobby"
       ],
       [
        "Cypher",
        "Mid Top"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "B Tower"
       ]
      ],
      "arrows": [
       [
        "B Lobby",
        "B Site",
        "util"
       ],
       [
        "B Lobby",
        "B Main",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Humos de Omen en B Tower y B Link. Así cortas el ángulo alto y la rotación desde mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Main"
       ],
       [
        "Sova",
        "B Lobby"
       ],
       [
        "KAY/O",
        "B Main"
       ],
       [
        "Omen",
        "B Lobby"
       ],
       [
        "Cypher",
        "Mid Top"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "B Tower"
       ],
       [
        "?",
        "B Trophy"
       ]
      ],
      "smokes": [
       "B Tower",
       "B Link"
      ],
      "arrows": [
       [
        "B Lobby",
        "B Main",
        "ally"
       ],
       [
        "B Lobby",
        "B Tower",
        "util"
       ],
       [
        "B Lobby",
        "B Link",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada: flash de KAY/O sobre B Site, Jett entra con dash, KAY/O la sigue y limpia B Drop; Sova y Omen detrás.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Main"
       ],
       [
        "KAY/O",
        "B Drop"
       ],
       [
        "Omen",
        "B Main"
       ],
       [
        "Cypher",
        "Mid Top"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "B Trophy"
       ]
      ],
      "smokes": [
       "B Tower",
       "B Link"
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
        "B Main",
        "B Drop",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant en B Site. Jett y KAY/O dentro, Sova en B Main con lineup, Omen en B Lobby y Cypher vigila Mid Tiles por si rotan por mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Main"
       ],
       [
        "KAY/O",
        "B Drop"
       ],
       [
        "Omen",
        "B Lobby"
       ],
       [
        "Cypher",
        "Mid Tiles"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Gym"
       ],
       [
        "?",
        "B Link"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "B Gym",
        "B Tower",
        "enemy"
       ],
       [
        "B Link",
        "B Site",
        "enemy"
       ],
       [
        "B Main",
        "B Site",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Ataque",
   "name": "Split B por Main y B Link",
   "type": "Split",
   "tip": "El split solo funciona si las dos partes entran a la vez: contad en voz alta y entrad juntos.",
   "steps": [
    {
     "text": "Salida: Jett y Omen a Mid Top, Sova, KAY/O y Cypher a B Lobby.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Top"
       ],
       [
        "Omen",
        "Mid Top"
       ],
       [
        "Sova",
        "B Lobby"
       ],
       [
        "KAY/O",
        "B Lobby"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Tower"
       ]
      ],
      "arrows": [
       [
        "Mid Top",
        "Mid Fountain",
        "ally"
       ],
       [
        "Mid Tiles",
        "B Lobby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Mid: humo de Omen en Mid Window y Jett toma Mid Fountain → Mid Bottom. Sova lanza dardo a B Site desde B Lobby.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Bottom"
       ],
       [
        "Omen",
        "Mid Fountain"
       ],
       [
        "Sova",
        "B Lobby"
       ],
       [
        "KAY/O",
        "B Lobby"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Window"
       ],
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "B Tower"
       ]
      ],
      "smokes": [
       "Mid Window"
      ],
      "arrows": [
       [
        "Mid Fountain",
        "Mid Bottom",
        "ally"
       ],
       [
        "B Lobby",
        "B Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Posiciones de split: Jett y Omen junto a B Link, el resto en B Main. Omen humea B Tower y B Gym.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Link"
       ],
       [
        "Omen",
        "Mid Bottom"
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
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "B Trophy"
       ]
      ],
      "smokes": [
       "B Tower",
       "B Gym"
      ],
      "arrows": [
       [
        "Mid Bottom",
        "B Link",
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
     "text": "Entrada simultánea: flash de KAY/O por encima de B Main, Jett entra desde B Link de lado. El defensor no puede mirar a los dos.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Omen",
        "B Link"
       ],
       [
        "Sova",
        "B Main"
       ],
       [
        "KAY/O",
        "B Site"
       ],
       [
        "Cypher",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "?",
        "B Trophy"
       ]
      ],
      "smokes": [
       "B Tower",
       "B Gym"
      ],
      "arrows": [
       [
        "B Main",
        "B Site",
        "util"
       ],
       [
        "B Link",
        "B Site",
        "ally"
       ],
       [
        "B Main",
        "B Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant y post-plant: Omen corta B Link desde fuera, Sova y Cypher juegan B Main; los retakes llegan por B Gym y B Trophy.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Omen",
        "B Link"
       ],
       [
        "Sova",
        "B Main"
       ],
       [
        "KAY/O",
        "B Drop"
       ],
       [
        "Cypher",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Gym"
       ],
       [
        "?",
        "B Trophy"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "B Gym",
        "B Tower",
        "enemy"
       ],
       [
        "B Trophy",
        "B Link",
        "enemy"
       ],
       [
        "B Main",
        "B Site",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "2-1-2 con muros",
   "type": "Setup",
   "tip": "Mapa grande = rotaciones largas. Retrasa con utilidad antes de pedir ayuda y usa los muros para cerrar la ruta del ataque, no la tuya.",
   "steps": [
    {
     "text": "Setup: Cypher y KAY/O en B (B Site y B Tower), Omen en Mid Window, Jett en A Garden y Sova en A Site.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Jett",
        "A Garden"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Top"
       ],
       [
        "?",
        "B Lobby"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "Mid Window",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info temprana: dardo de Sova a A Lobby, cable de Cypher en B Main y cámara mirando B Lobby.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Jett",
        "A Garden"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Top"
       ],
       [
        "?",
        "B Lobby"
       ]
      ],
      "arrows": [
       [
        "A Site",
        "A Lobby",
        "util"
       ],
       [
        "B Site",
        "B Main",
        "util"
       ],
       [
        "B Site",
        "B Lobby",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Aviso de presión en A: Omen humea A Main desde mid y Jett se retira a A Site; KAY/O suelta flash/cuchillo en A Main para retrasar.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "B Trophy"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Main"
       ],
       [
        "Breach",
        "A Main"
       ],
       [
        "Fade",
        "Mid Fountain"
       ]
      ],
      "smokes": [
       "A Main"
      ],
      "arrows": [
       [
        "A Lobby",
        "A Main",
        "enemy"
       ],
       [
        "A Garden",
        "A Site",
        "ally"
       ],
       [
        "Mid Bottom",
        "A Main",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Rotación: Omen va por Mid Bend → A Link y KAY/O por A Hall. Cypher se queda en B por si es fake.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "A Hall"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Art"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Garden"
       ],
       [
        "Breach",
        "A Main"
       ],
       [
        "Fade",
        "Mid Bend"
       ]
      ],
      "smokes": [
       "A Main"
      ],
      "arrows": [
       [
        "B Trophy",
        "A Hall",
        "ally"
       ],
       [
        "Mid Bottom",
        "A Link",
        "ally"
       ],
       [
        "A Main",
        "A Garden",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Pelea en A: Jett y Sova en crossfire desde A Site y A Art, Omen castiga desde A Link y KAY/O llega por A Hall.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "A Art"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Art"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Garden"
       ],
       [
        "Breach",
        "A Garden"
       ]
      ],
      "smokes": [
       "A Main"
      ],
      "arrows": [
       [
        "A Hall",
        "A Art",
        "ally"
       ],
       [
        "A Garden",
        "A Site",
        "enemy"
       ],
       [
        "A Link",
        "A Garden",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake A en grupo",
   "type": "Retake",
   "tip": "No entres de uno en uno: agrupaos en A Hall y A Link y entrad con utilidad a la vez.",
   "steps": [
    {
     "text": "A ha caído y han plantado. Jett y Sova han muerto. Cypher, Omen y KAY/O se agrupan: Omen en A Link, KAY/O y Cypher en A Hall.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Hall"
       ],
       [
        "KAY/O",
        "A Hall"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Site"
       ],
       [
        "Viper",
        "A Garden"
       ],
       [
        "Breach",
        "A Main"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "B Site",
        "A Hall",
        "ally"
       ],
       [
        "Mid Window",
        "A Link",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info: cámara/trampa de Cypher lanzada hacia A Art y cuchillo de KAY/O a A Site para ver dónde están.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Hall"
       ],
       [
        "KAY/O",
        "A Hall"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Site"
       ],
       [
        "Viper",
        "A Garden"
       ],
       [
        "Breach",
        "A Main"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Hall",
        "A Site",
        "util"
       ],
       [
        "A Hall",
        "A Art",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Omen humea A Garden y A Main para separar al que juega fuera del site.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Hall"
       ],
       [
        "KAY/O",
        "A Art"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Site"
       ],
       [
        "Viper",
        "A Garden"
       ],
       [
        "Breach",
        "A Main"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Garden",
       "A Main"
      ],
      "arrows": [
       [
        "A Link",
        "A Garden",
        "util"
       ],
       [
        "A Link",
        "A Main",
        "util"
       ],
       [
        "A Hall",
        "A Art",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez: flash de KAY/O sobre A Site, KAY/O y Cypher desde A Art, Omen desde A Link. Neon cae en el crossfire.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Art"
       ],
       [
        "KAY/O",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Garden"
       ],
       [
        "Breach",
        "A Main"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Garden",
       "A Main"
      ],
      "arrows": [
       [
        "A Art",
        "A Site",
        "util"
       ],
       [
        "A Art",
        "A Site",
        "ally"
       ],
       [
        "A Link",
        "A Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Defuse: uno defusa con el cuerpo cubierto, los otros dos miran la salida de A Garden y A Main cuando caen los humos.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "KAY/O",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Garden"
       ],
       [
        "Breach",
        "A Main"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Garden",
        "A Site",
        "enemy"
       ],
       [
        "A Main",
        "A Garden",
        "enemy"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Control agresivo de mid",
   "type": "Setup",
   "tip": "Toma la primera info en mid y retírate: no regales la vida del jugador clave por una segunda kill.",
   "steps": [
    {
     "text": "Jett y Omen salen rápido a Mid Bottom con dardo de Sova a Mid Fountain. Cypher en B Site, Sova y KAY/O en A.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Bottom"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Top"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "B Lobby"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "Mid Bottom",
        "ally"
       ],
       [
        "Mid Bottom",
        "Mid Fountain",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Omen humea Mid Top para que Jett asome a Mid Fountain con ventaja de información.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Fountain"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "Mid Tiles"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "B Lobby"
       ]
      ],
      "smokes": [
       "Mid Top"
      ],
      "arrows": [
       [
        "Mid Bottom",
        "Mid Top",
        "util"
       ],
       [
        "Mid Bottom",
        "Mid Fountain",
        "ally"
       ],
       [
        "Mid Tiles",
        "Mid Fountain",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Jett consigue la kill y se retira a Mid Bottom. Ahora sabemos que mid es nuestro y tenemos ventaja numérica.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Bottom"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Garden"
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
        "B Lobby"
       ],
       [
        "?",
        "Mid Top"
       ]
      ],
      "arrows": [
       [
        "Mid Fountain",
        "Mid Bottom",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Con mid ganado podemos rotar rápido: Jett vigila B Link y Omen Mid Bend para ayudar al site que pida ayuda.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Link"
       ],
       [
        "Omen",
        "Mid Bend"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Main"
       ],
       [
        "?",
        "B Lobby"
       ],
       [
        "?",
        "A Lobby"
       ]
      ],
      "arrows": [
       [
        "Mid Bottom",
        "B Link",
        "ally"
       ],
       [
        "Mid Window",
        "Mid Bend",
        "ally"
       ],
       [
        "B Lobby",
        "B Main",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Si atacan B, Jett entra por B Link de lado mientras Cypher retrasa; si atacan A, Omen sale por A Link a sus espaldas.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Link"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
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
        "A Main"
       ]
      ],
      "arrows": [
       [
        "B Link",
        "B Site",
        "ally"
       ],
       [
        "B Main",
        "B Site",
        "enemy"
       ],
       [
        "Mid Bend",
        "A Link",
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
   "title": "Jett rival con Operator en mid",
   "situation": "A 1:35 una Jett con Operator nos ha matado en Mid Fountain dos rondas seguidas desde Mid Bottom.",
   "enemy": [
    {
     "t": "Repite la misma posición con Operator",
     "pct": 55
    },
    {
     "t": "Cambia a Mid Window más atrás",
     "pct": 30
    },
    {
     "t": "Se va a un site",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Humo de Omen en Mid Bottom y cruzar a Mid Bend sin pelearla",
     "ok": true,
     "why": "Le quitas la línea y ganas espacio sin darle un duelo a larga distancia que ella gana."
    },
    {
     "t": "Asomar con Jett y Vandal a ver quién gana",
     "ok": false,
     "why": "En duelo lejano contra Operator pierdes casi siempre; regalas 4v5."
    },
    {
     "t": "Ir todos a B y olvidarnos de mid",
     "ok": false,
     "why": "Ella rota rápido por B Link y te flanquea; mid sigue siendo suyo."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Top"
     ],
     [
      "Omen",
      "Mid Top"
     ],
     [
      "Sova",
      "Mid Tiles"
     ],
     [
      "KAY/O",
      "A Lobby"
     ],
     [
      "Cypher",
      "B Lobby"
     ]
    ],
    "enemies": [
     [
      "Jett",
      "Mid Bottom"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "B Site"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Bottom",
     "Mid Fountain",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Top",
     "Mid Bottom",
     "util"
    ],
    [
     "Mid Top",
     "Mid Bend",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "4v3 tras ganar mid",
   "situation": "A 1:15 hemos matado a dos defensores en mid (Mid Bottom) y hemos perdido a Cypher en B Lobby. 4v3.",
   "enemy": [
    {
     "t": "Dos se quedan en A y uno en B esperando",
     "pct": 50
    },
    {
     "t": "Agrupan 3 en un site",
     "pct": 35
    },
    {
     "t": "Uno flanquea por B Lobby",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Ir rápido a A por A Link y A Main con utilidad, antes de que se reagrupen",
     "ok": true,
     "why": "Con ventaja numérica y mid tuyo, la velocidad castiga su rotación larga."
    },
    {
     "t": "Esperar en mid hasta 0:30",
     "ok": false,
     "why": "Les das tiempo a reorganizarse y a jugar retake con utilidad completa."
    },
    {
     "t": "Separarse: dos a A y dos a B",
     "ok": false,
     "why": "Divides tu ventaja y vuelves a pelear 2v2."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Bottom"
     ],
     [
      "Omen",
      "Mid Fountain"
     ],
     [
      "Sova",
      "Mid Bend"
     ],
     [
      "KAY/O",
      "A Main"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "A Garden"
     ],
     [
      "?",
      "B Site"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Garden",
     "A Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Bend",
     "A Link",
     "ally"
    ],
    [
     "A Main",
     "A Garden",
     "ally"
    ],
    [
     "A Link",
     "A Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Post-plant en B, 3v2",
   "situation": "Spike plantada en B Site a 0:40. Estamos 3v2 jugando fuera: Sova en B Main, Omen en B Lobby, Jett en B Drop. Se oyen pasos en B Gym.",
   "enemy": [
    {
     "t": "Retake juntos por B Gym y B Tower",
     "pct": 60
    },
    {
     "t": "Uno por B Link y otro por B Tower",
     "pct": 30
    },
    {
     "t": "Se salvan",
     "pct": 10
    }
   ],
   "responses": [
    {
     "t": "Humo de Omen en B Tower y molly/dardo de Sova a la spike cuando oigas el defuse",
     "ok": true,
     "why": "Retrasas su entrada y castigas el defuse sin tener que asomar."
    },
    {
     "t": "Ir a buscarles a B Gym",
     "ok": false,
     "why": "Pierdes la ventaja de posición y les das el duelo que quieren."
    },
    {
     "t": "Juntarse los tres encima de la spike",
     "ok": false,
     "why": "Una sola granada o flash os pilla a los tres."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "B Main"
     ],
     [
      "Omen",
      "B Lobby"
     ],
     [
      "Jett",
      "B Drop"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Gym"
     ],
     [
      "?",
      "B Trophy"
     ]
    ],
    "spike": "B Site"
   },
   "enemyMove": [
    [
     "B Gym",
     "B Tower",
     "enemy"
    ],
    [
     "B Tower",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Lobby",
     "B Tower",
     "util"
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
   "title": "Bajan un muro cerca de B",
   "situation": "A 1:15, preparando el B Execute, oímos cómo los defensores bajan un muro que cambia la ruta hacia B. Ya hay utilidad en B Main.",
   "enemy": [
    {
     "t": "Refuerzan B y esperan nuestra entrada",
     "pct": 55
    },
    {
     "t": "Preparan rotación rápida a A",
     "pct": 30
    },
    {
     "t": "Empujan B Main para info",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Dejar a Cypher en B Lobby y rotar a A por mid y A Link",
     "ok": true,
     "why": "Si gastan tiempo y utilidad en B, A queda más débil; Cypher vigila el flanco."
    },
    {
     "t": "Forzar B igualmente",
     "ok": false,
     "why": "Entras justo donde se han preparado."
    },
    {
     "t": "Quedarse quietos hasta el final de la ronda",
     "ok": false,
     "why": "Te quedas sin tiempo para ejecutar en cualquier site."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Lobby"
     ],
     [
      "Sova",
      "B Lobby"
     ],
     [
      "KAY/O",
      "B Main"
     ],
     [
      "Omen",
      "Mid Tiles"
     ],
     [
      "Cypher",
      "B Lobby"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "B Tower"
     ],
     [
      "?",
      "B Trophy"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Trophy",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Lobby",
     "Mid Tiles",
     "ally"
    ],
    [
     "Mid Tiles",
     "Mid Fountain",
     "ally"
    ],
    [
     "Mid Fountain",
     "Mid Bend",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Ronda eco tras perder pistol",
   "situation": "Ronda 2, perdimos la pistola. Tenemos Sheriffs y pistolas; el rival tiene SMGs y armadura ligera.",
   "enemy": [
    {
     "t": "Defienden con SMGs pegados a los sites",
     "pct": 50
    },
    {
     "t": "Empujan mid para ganar info",
     "pct": 35
    },
    {
     "t": "Se apilan en A",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Jugar juntos 5 a B, contacto rápido y pelear de cerca en grupo",
     "ok": true,
     "why": "En eco, agrupar y buscar trades de corta distancia maximiza las kills con pistola."
    },
    {
     "t": "Ir separados por todo el mapa buscando picks",
     "ok": false,
     "why": "Con pistola contra SMG pierdes los duelos aislados."
    },
    {
     "t": "No salir de spawn y guardar dinero",
     "ok": false,
     "why": "Pierdes la ronda sin opción y sin hacer daño económico al rival."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Lobby"
     ],
     [
      "Sova",
      "B Lobby"
     ],
     [
      "KAY/O",
      "B Lobby"
     ],
     [
      "Omen",
      "Mid Tiles"
     ],
     [
      "Cypher",
      "B Lobby"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "B Tower"
     ],
     [
      "?",
      "Mid Bottom"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Tower",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Lobby",
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
   "side": "Defensa",
   "title": "Perdemos mid",
   "situation": "A 1:30 muere Omen en Mid Window sin trade. No sabemos dónde está el resto del ataque.",
   "enemy": [
    {
     "t": "Usan A Link o B Link para dividir un site",
     "pct": 60
    },
    {
     "t": "Siguen en default y esperan",
     "pct": 25
    },
    {
     "t": "Rotan todos a un site",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Avisar y cubrir la salida de ambos Links: Jett mira A Link y Cypher B Link",
     "ok": true,
     "why": "Sin mid el split es lo más común; tapar los Links frena el ataque cruzado."
    },
    {
     "t": "Retomar mid solo con Jett",
     "ok": false,
     "why": "Pelearías 1v2 contra quien ya ganó la posición."
    },
    {
     "t": "Ir todos a un site a adivinar",
     "ok": false,
     "why": "Dejas el otro site vacío y regalas el plant."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Garden"
     ],
     [
      "Sova",
      "A Site"
     ],
     [
      "KAY/O",
      "B Tower"
     ],
     [
      "Cypher",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "Neon",
      "Mid Bottom"
     ],
     [
      "Fade",
      "Mid Fountain"
     ],
     [
      "?",
      "A Lobby"
     ],
     [
      "?",
      "B Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Bottom",
     "B Link",
     "enemy"
    ],
    [
     "Mid Fountain",
     "Mid Bend",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Garden",
     "A Link",
     "ally"
    ],
    [
     "B Site",
     "B Link",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Rush a B en los primeros segundos",
   "situation": "A 1:30 la cámara de Cypher ve a 4 enemigos entrando a B Main con utilidad. Cypher y KAY/O están en B.",
   "enemy": [
    {
     "t": "Entran los 4 a B Site rápido",
     "pct": 65
    },
    {
     "t": "Es un fake y van a A",
     "pct": 20
    },
    {
     "t": "Se quedan en B Main esperando",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Cypher y KAY/O caen atrás (B Tower/B Gym) y retrasan; Omen y Jett rotan por B Link",
     "ok": true,
     "why": "No mueres en la primera ola y juntas 4 para el retake o el crossfire."
    },
    {
     "t": "Pelear 2v4 en el site",
     "ok": false,
     "why": "Mueres sin trade y pierdes el retake."
    },
    {
     "t": "Rotar a todos a B, incluido el que está en A",
     "ok": false,
     "why": "Si es fake, A cae gratis."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "KAY/O",
      "B Tower"
     ],
     [
      "Omen",
      "Mid Window"
     ],
     [
      "Jett",
      "A Garden"
     ],
     [
      "Sova",
      "A Site"
     ]
    ],
    "enemies": [
     [
      "Neon",
      "B Main"
     ],
     [
      "Breach",
      "B Main"
     ],
     [
      "Fade",
      "B Lobby"
     ],
     [
      "Viper",
      "B Lobby"
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
     "B Gym",
     "ally"
    ],
    [
     "Mid Window",
     "B Link",
     "ally"
    ],
    [
     "B Tower",
     "B Main",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Pasos de lurk en A Link",
   "situation": "A 1:00 el ataque presiona B con 3 jugadores; Sova oye pasos lentos acercándose a A Link desde Mid Bend.",
   "enemy": [
    {
     "t": "Un lurker esperando la rotación para flanquear",
     "pct": 55
    },
    {
     "t": "Dos jugadores preparando un split a A",
     "pct": 30
    },
    {
     "t": "Pasan hacia mid para cortar rotación",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Sova se queda en A con dardo a A Link; solo Jett rota a B",
     "ok": true,
     "why": "Mantienes a alguien que castiga al lurker y sigues ayudando a B."
    },
    {
     "t": "Rotar los dos de A a B",
     "ok": false,
     "why": "El lurker entra gratis a A o os ataca por la espalda en la rotación."
    },
    {
     "t": "Ir a buscar al lurker a Mid Bend",
     "ok": false,
     "why": "Vas a ciegas a su ángulo preparado."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "A Site"
     ],
     [
      "Jett",
      "A Garden"
     ],
     [
      "Omen",
      "Mid Window"
     ],
     [
      "Cypher",
      "B Site"
     ],
     [
      "KAY/O",
      "B Tower"
     ]
    ],
    "enemies": [
     [
      "Neon",
      "Mid Bend"
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
      "B Lobby"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Bend",
     "A Link",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Site",
     "A Link",
     "util"
    ],
    [
     "A Garden",
     "A Hall",
     "ally"
    ],
    [
     "A Hall",
     "Mid Window",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake A 3v3",
   "situation": "Han plantado en A Site a 0:45. Quedamos Cypher, Omen y KAY/O (3v3). Los atacantes juegan A Garden, A Main y A Site.",
   "enemy": [
    {
     "t": "Juegan fuera del site esperando el defuse",
     "pct": 55
    },
    {
     "t": "Se quedan en el site en ángulos cerrados",
     "pct": 30
    },
    {
     "t": "Salen a buscarnos a A Hall",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Agruparse en A Hall y A Link, humos en A Garden y A Main y entrar juntos",
     "ok": true,
     "why": "Cortas a los de fuera y peleas 3v1 dentro antes de defusar."
    },
    {
     "t": "Ir uno a uno según llegues",
     "ok": false,
     "why": "Cada uno pelea 1v3 y se pierde el retake."
    },
    {
     "t": "Hacer tap al defuse nada más llegar",
     "ok": false,
     "why": "Te matan desde fuera sin ver al rival."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "A Hall"
     ],
     [
      "Omen",
      "A Link"
     ],
     [
      "KAY/O",
      "A Hall"
     ]
    ],
    "enemies": [
     [
      "Neon",
      "A Site"
     ],
     [
      "Viper",
      "A Garden"
     ],
     [
      "Breach",
      "A Main"
     ]
    ],
    "spike": "A Site"
   },
   "enemyMove": [
    [
     "A Site",
     "A Garden",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Link",
     "A Garden",
     "util"
    ],
    [
     "A Link",
     "A Main",
     "util"
    ],
    [
     "A Hall",
     "A Art",
     "ally"
    ],
    [
     "A Art",
     "A Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Ronda de ahorro en defensa",
   "situation": "Tenemos poco dinero: solo Ghost y escudo ligero. El rival tiene compra completa.",
   "enemy": [
    {
     "t": "Ejecución con utilidad completa en un site",
     "pct": 60
    },
    {
     "t": "Default lento buscando picks",
     "pct": 30
    },
    {
     "t": "Rush rápido",
     "pct": 10
    }
   ],
   "responses": [
    {
     "t": "Jugar stack de 3 en B cerca para trades y 2 en A muy atrás (A Art/A Cave)",
     "ok": true,
     "why": "Juntos y en ángulos cerrados tu Ghost puede ganar duelos y quitar un rifle."
    },
    {
     "t": "Pelear mid a larga distancia",
     "ok": false,
     "why": "A larga distancia el rifle gana siempre."
    },
    {
     "t": "Jugar todos separados en ángulos abiertos",
     "ok": false,
     "why": "Mueres solo y sin trade, sin hacer daño económico."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "KAY/O",
      "B Tower"
     ],
     [
      "Omen",
      "B Gym"
     ],
     [
      "Jett",
      "A Cave"
     ],
     [
      "Sova",
      "A Art"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Lobby"
     ],
     [
      "?",
      "Mid Top"
     ],
     [
      "?",
      "A Lobby"
     ]
    ]
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
     "B Gym",
     "B Trophy",
     "ally"
    ],
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
   "title": "Default mid y ejecución A",
   "strategy": "Mid → A Link",
   "intro": "Ronda de compra completa 5v5. Plan: ganar mid con info de Sova, cortar A Link y ejecutar A por dos lados.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Ronda de compra completa 5v5. Salimos de spawn: Jett y KAY/O a A Lobby, Sova y Omen a Mid Top, Cypher a B Lobby.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
       ],
       [
        "KAY/O",
        "A Lobby"
       ],
       [
        "Sova",
        "Mid Top"
       ],
       [
        "Omen",
        "Mid Top"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bottom"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "B Site"
       ]
      ]
     },
     "question": "¿Qué hacemos primero en mid?",
     "options": [
      {
       "t": "Dardo de Sova a Mid Bottom antes de asomar",
       "ok": true,
       "why": "Sabes cuántos hay en mid antes de pelear y ganas el primer duelo."
      },
      {
       "t": "Correr a Mid Fountain sin utilidad",
       "ok": false,
       "why": "Te pilla el ángulo de Mid Bottom sin info."
      },
      {
       "t": "Ir todos a A Lobby",
       "ok": false,
       "why": "Sin mid no tienes A Link y la defensa rota libre."
      }
     ],
     "result": [
      [
       "Mid Top",
       "Mid Bottom",
       "util"
      ]
     ]
    },
    {
     "time": "1:30",
     "narration": "El dardo marca a una Neon en Mid Bottom. Omen humea Mid Window.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Main"
       ],
       [
        "KAY/O",
        "A Lobby"
       ],
       [
        "Sova",
        "Mid Top"
       ],
       [
        "Omen",
        "Mid Top"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "Mid Bottom"
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
      "smokes": [
       "Mid Window"
      ]
     },
     "question": "¿Cómo ganamos a la Neon de mid?",
     "options": [
      {
       "t": "Jett vuelve a Mid Fountain y pelean dos a la vez con Sova",
       "ok": true,
       "why": "Duelo 2v1 con info: si cae uno hay trade inmediato."
      },
      {
       "t": "Que Sova asome solo",
       "ok": false,
       "why": "1v1 con un Sova no es un duelo favorable."
      },
      {
       "t": "Ignorarla y seguir a A",
       "ok": false,
       "why": "Te flanquea por A Link durante la ejecución."
      }
     ],
     "result": [
      [
       "Mid Top",
       "Mid Fountain",
       "ally"
      ],
      [
       "Mid Bottom",
       "Mid Fountain",
       "enemy"
      ]
     ]
    },
    {
     "time": "1:15",
     "narration": "Jett mata a la Neon. 5v4. Jett y Sova ocupan Mid Bend; Cypher hace ruido en B Main.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Bend"
       ],
       [
        "Sova",
        "Mid Bend"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Omen",
        "Mid Fountain"
       ],
       [
        "Cypher",
        "B Main"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Garden"
       ],
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Tower"
       ]
      ]
     },
     "question": "¿Cuándo ejecutamos A?",
     "options": [
      {
       "t": "Ahora: humos en A Hall y A Cave, flash de KAY/O y entrada doble",
       "ok": true,
       "why": "Con 5v4 y mid ganado, la rotación por A Link está cortada; ejecuta antes de que se reajusten."
      },
      {
       "t": "Esperar a 0:30",
       "ok": false,
       "why": "Les das tiempo a rotar por A Hall y preparar crossfire."
      },
      {
       "t": "Cambiar a B",
       "ok": false,
       "why": "Tiras el control de mid ganado."
      }
     ],
     "result": [
      [
       "Mid Fountain",
       "A Hall",
       "util"
      ],
      [
       "Mid Fountain",
       "A Cave",
       "util"
      ],
      [
       "A Main",
       "A Garden",
       "util"
      ]
     ]
    },
    {
     "time": "1:05",
     "narration": "Humos puestos. KAY/O entra por A Garden y Jett por A Link. Caen los defensores de A Site y A Garden, pero perdemos a Omen en Mid Fountain. 4v2.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Art"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "smokes": [
       "A Hall",
       "A Cave"
      ]
     },
     "question": "¿Quién planta y dónde?",
     "options": [
      {
       "t": "KAY/O planta en A Site cubierto por Jett; Sova mira A Hall",
       "ok": true,
       "why": "Plant seguro y alguien cubre la rotación más rápida."
      },
      {
       "t": "Todos van a buscar al de A Art",
       "ok": false,
       "why": "Te expones sin plantar y pierdes tiempo."
      },
      {
       "t": "Plantar en una zona visible desde A Link",
       "ok": false,
       "why": "Facilitas el defuse desde fuera."
      }
     ],
     "result": [
      [
       "A Garden",
       "A Site",
       "ally"
      ],
      [
       "A Art",
       "A Site",
       "enemy"
      ]
     ]
    },
    {
     "time": "0:55",
     "narration": "Spike plantada en A Site. Jett mata al de A Art. 4v1: queda un defensor que venía de B.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bottom"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Cómo jugamos el post-plant 4v1?",
     "options": [
      {
       "t": "Separados en crossfire (A Garden, A Link, A Site) y esperar",
       "ok": true,
       "why": "El que queda tiene que venir a ti; no hace falta buscarle."
      },
      {
       "t": "Ir los 4 a cazarle a mid",
       "ok": false,
       "why": "Le das duelos de uno en uno en su terreno."
      },
      {
       "t": "Dejar la spike sola y ir a B",
       "ok": false,
       "why": "Le regalas el defuse."
      }
     ],
     "result": [
      [
       "B Lobby",
       "Mid Fountain",
       "ally"
      ],
      [
       "Mid Bottom",
       "A Link",
       "enemy"
      ]
     ]
    },
    {
     "time": "0:25",
     "narration": "El último defensor intenta entrar por A Link. Sova ya lo esperaba.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "KAY/O",
        "A Garden"
       ],
       [
        "Cypher",
        "Mid Fountain"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Bend"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Qué hace Sova?",
     "options": [
      {
       "t": "Mantener el ángulo con dardo de choque preparado y tradeo de Jett",
       "ok": true,
       "why": "Le esperas tú: tienes ventaja de posición y apoyo."
      },
      {
       "t": "Empujarle a Mid Bend",
       "ok": false,
       "why": "Pierdes la ventaja y puede ganarte el duelo."
      },
      {
       "t": "Retirarse al site sin avisar",
       "ok": false,
       "why": "Le dejas entrar sin daño."
      }
     ],
     "result": [
      [
       "Mid Bend",
       "A Link",
       "enemy"
      ],
      [
       "A Link",
       "Mid Bend",
       "util"
      ]
     ]
    }
   ],
   "outcome": "Ganamos porque tomamos mid con info antes de pelear, ejecutamos con ventaja numérica y jugamos el post-plant en crossfire sin buscar duelos."
  },
  "defense": {
   "side": "Defensa",
   "title": "2-1-2 contra ataque a A",
   "strategy": "2-1-2 con muros",
   "intro": "Ronda de compra completa. Plan: setup 2-1-2, info temprana en A y B y rotación por dos ángulos cuando se confirme el site.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Ronda de compra completa. Setup 2-1-2: Cypher y KAY/O en B, Omen en Mid Window, Jett en A Garden y Sova en A Site.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Jett",
        "A Garden"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Top"
       ],
       [
        "?",
        "B Lobby"
       ]
      ]
     },
     "question": "¿Qué utilidad usamos al principio?",
     "options": [
      {
       "t": "Dardo de Sova a A Lobby y cable de Cypher en B Main",
       "ok": true,
       "why": "Info temprana en los dos carriles sin arriesgar a nadie."
      },
      {
       "t": "Gastar todos los humos en mid",
       "ok": false,
       "why": "Te quedas sin utilidad para retrasar la ejecución."
      },
      {
       "t": "Nada, esperar a oír pasos",
       "ok": false,
       "why": "En un mapa grande la info tardía hace las rotaciones imposibles."
      }
     ],
     "result": [
      [
       "A Site",
       "A Lobby",
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
     "time": "1:25",
     "narration": "El dardo revela a Neon y Breach en A Lobby. Fade marca mid desde Mid Fountain.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Window"
       ],
       [
        "Jett",
        "A Garden"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Lobby"
       ],
       [
        "Breach",
        "A Lobby"
       ],
       [
        "Fade",
        "Mid Fountain"
       ],
       [
        "?",
        "B Lobby"
       ]
      ]
     },
     "question": "¿Qué hace Omen?",
     "options": [
      {
       "t": "Humo en A Main para retrasar la entrada y quedarse en mid",
       "ok": true,
       "why": "Retrasas sin mover a nadie aún: puede ser un fake."
      },
      {
       "t": "Rotar ya a A",
       "ok": false,
       "why": "Abres mid y te pueden flanquear por B Link."
      },
      {
       "t": "Pelear a Fade en Mid Fountain",
       "ok": false,
       "why": "Ella tiene utilidad de info; pierdes el duelo."
      }
     ],
     "result": [
      [
       "Mid Window",
       "A Main",
       "util"
      ],
      [
       "A Lobby",
       "A Main",
       "enemy"
      ]
     ]
    },
    {
     "time": "1:10",
     "narration": "Breach lanza su habilidad a A Garden y Neon entra corriendo. Jett se retira a A Site.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "B Trophy"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Neon",
        "A Garden"
       ],
       [
        "Breach",
        "A Main"
       ],
       [
        "Fade",
        "Mid Bend"
       ],
       [
        "?",
        "B Lobby"
       ]
      ],
      "smokes": [
       "A Main"
      ]
     },
     "question": "¿Cómo rotamos?",
     "options": [
      {
       "t": "Omen por A Link y KAY/O por A Hall; Cypher se queda en B",
       "ok": true,
       "why": "Llegas por dos ángulos y no dejas B vacío."
      },
      {
       "t": "Rotar los cuatro a A",
       "ok": false,
       "why": "Si es split o lurk, B cae gratis."
      },
      {
       "t": "No rotar nadie",
       "ok": false,
       "why": "2v4 en A, el site cae seguro."
      }
     ],
     "result": [
      [
       "Mid Bottom",
       "A Link",
       "ally"
      ],
      [
       "B Trophy",
       "A Hall",
       "ally"
      ],
      [
       "A Garden",
       "A Site",
       "ally"
      ]
     ]
    },
    {
     "time": "1:00",
     "narration": "Jett mata a Neon en A Site pero cae ante Breach. Sova aguanta en A Art. 4v4.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "A Hall"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Sova",
        "A Art"
       ]
      ],
      "enemies": [
       [
        "Breach",
        "A Garden"
       ],
       [
        "Fade",
        "Mid Bend"
       ],
       [
        "Viper",
        "A Main"
       ],
       [
        "?",
        "B Lobby"
       ]
      ]
     },
     "question": "Omen ve a Fade en Mid Bend a su espalda. ¿Qué hace?",
     "options": [
      {
       "t": "Humo en Mid Bend y seguir hacia A Link sin girarse",
       "ok": true,
       "why": "Cortas su línea y sigues con el plan sin quedar entre dos fuegos."
      },
      {
       "t": "Girarse y pelear a Fade",
       "ok": false,
       "why": "Breach le mata por la espalda desde A Garden."
      },
      {
       "t": "Volver a mid",
       "ok": false,
       "why": "Abandonas a Sova y KAY/O."
      }
     ],
     "result": [
      [
       "A Link",
       "Mid Bend",
       "util"
      ],
      [
       "A Hall",
       "A Art",
       "ally"
      ]
     ]
    },
    {
     "time": "0:50",
     "narration": "Crossfire desde A Art y A Link: KAY/O y Omen matan a Breach. 4v3.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "A Art"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Sova",
        "A Art"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "Mid Bend"
       ],
       [
        "Viper",
        "A Main"
       ],
       [
        "?",
        "B Lobby"
       ]
      ]
     },
     "question": "Quedan Fade y Viper cerca de A y uno en B. ¿Qué hacemos?",
     "options": [
      {
       "t": "Mantener posiciones y que Cypher aguante B con su utilidad",
       "ok": true,
       "why": "El tiempo juega a tu favor: ellos tienen que atacar."
      },
      {
       "t": "Salir a buscar a Viper en A Main",
       "ok": false,
       "why": "Entras en su humo y en su molly."
      },
      {
       "t": "Rotar Cypher a A",
       "ok": false,
       "why": "El que está en B planta sin oposición."
      }
     ],
     "result": [
      [
       "A Main",
       "A Garden",
       "enemy"
      ],
      [
       "A Art",
       "A Garden",
       "util"
      ]
     ]
    },
    {
     "time": "0:25",
     "narration": "Viper y Fade intentan entrar juntos por A Garden. Sova lanza dardo de choque.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "KAY/O",
        "A Art"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Sova",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Garden"
       ],
       [
        "Viper",
        "A Garden"
       ],
       [
        "?",
        "B Main"
       ]
      ]
     },
     "question": "¿Cómo cerramos la ronda?",
     "options": [
      {
       "t": "Flash de KAY/O a A Garden y peek en conjunto con Omen desde A Link",
       "ok": true,
       "why": "Entran cegados y en crossfire: peleas 3v2 con ventaja clara."
      },
      {
       "t": "Esperar a que entren en el site",
       "ok": false,
       "why": "Les dejas plantar."
      },
      {
       "t": "Que solo Sova asome",
       "ok": false,
       "why": "Pelea 1v2 sin necesidad."
      }
     ],
     "result": [
      [
       "A Art",
       "A Garden",
       "util"
      ],
      [
       "A Link",
       "A Garden",
       "ally"
      ]
     ]
    }
   ],
   "outcome": "Ganamos porque usamos utilidad para retrasar, rotamos por A Link y A Hall sin abandonar B y peleamos siempre en crossfire."
  }
 }
};
