window.MAPDATA = window.MAPDATA || {};
MAPDATA["abyss"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "A por Tower + Bridge",
   "type": "Execute",
   "tip": "Revisa los ángulos elevados (A Tower, A Bridge) antes de mirar el site; ahí muere media Oro. Planta lejos del borde.",
   "steps": [
    {
     "text": "Salida: Jett, KAY/O y Sova a A Lobby. Omen a Mid Bend y Cypher a Mid Bottom (trap en B Lobby al salir para cubrir el flanco).",
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
        "A Lobby"
       ],
       [
        "Omen",
        "Mid Bend"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
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
        "Mid Bend",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Bottom",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "B Lobby",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Cypher y Omen toman Mid Catwalk para amenazar A Vent. Sova lanza dardo de reconocimiento a A Site desde A Lobby.",
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
        "A Lobby"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Catwalk"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "arrows": [
       [
        "Mid Bottom",
        "Mid Catwalk",
        "ally"
       ],
       [
        "Mid Bend",
        "Mid Bottom",
        "ally"
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
     "text": "Omen humea A Link y A Security (líneas de rotación y CT). El trío avanza a A Main y KAY/O lanza flash por encima de A Tower.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Main"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Catwalk"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "smokes": [
       "A Link",
       "A Security"
      ],
      "arrows": [
       [
        "A Lobby",
        "A Main",
        "ally"
       ],
       [
        "A Main",
        "A Tower",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada simultánea: Jett entra a A Site con dash, KAY/O limpia A Tower desde A Main y Cypher sube por A Vent a A Tower. Viper cae a A Bridge.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Catwalk"
       ],
       [
        "Cypher",
        "A Vent"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Bridge"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "smokes": [
       "A Link",
       "A Security"
      ],
      "arrows": [
       [
        "A Main",
        "A Site",
        "ally"
       ],
       [
        "Mid Catwalk",
        "A Vent",
        "ally"
       ],
       [
        "A Vent",
        "A Tower",
        "ally"
       ],
       [
        "A Site",
        "A Bridge",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Plantamos en el centro de A Site, lejos del borde. Post-plant: Jett en A Bridge, Sova en A Main con lineup de dardo, KAY/O en A Tower, Cypher en A Vent y Omen vigila Mid Catwalk.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Bridge"
       ],
       [
        "KAY/O",
        "A Tower"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Catwalk"
       ],
       [
        "Cypher",
        "A Vent"
       ]
      ],
      "enemies": [
       [
        "Clove",
        "A Link"
       ],
       [
        "Fade",
        "A Secret"
       ],
       [
        "Killjoy",
        "Mid Top"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Defender Side Spawn",
        "A Secret",
        "enemy"
       ],
       [
        "Mid Top",
        "A Link",
        "enemy"
       ],
       [
        "A Main",
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
   "name": "B Main rápido",
   "type": "Execute",
   "tip": "Si Mid está tuyo, B Link se convierte en tu segunda entrada. No entres en goteo: dos a la vez detrás de la flash.",
   "steps": [
    {
     "text": "Salida rápida: Jett, KAY/O, Sova y Omen a B Lobby. Cypher a Mid Bend con trap para cortar el flanco desde Mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Lobby"
       ],
       [
        "KAY/O",
        "B Lobby"
       ],
       [
        "Sova",
        "B Lobby"
       ],
       [
        "Omen",
        "B Lobby"
       ],
       [
        "Cypher",
        "Mid Bend"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
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
        "Mid Bend",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Sova lanza dardo a B Site y KAY/O su cuchillo a B Main para quitar la utilidad de Killjoy. Omen humea B Link y B Tower.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Lobby"
       ],
       [
        "KAY/O",
        "B Lobby"
       ],
       [
        "Sova",
        "B Lobby"
       ],
       [
        "Omen",
        "B Lobby"
       ],
       [
        "Cypher",
        "Mid Bend"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "smokes": [
       "B Link",
       "B Tower"
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
     "text": "Flash de KAY/O y entrada en pareja: Jett y KAY/O a B Site, Sova limpia B Danger, Omen se queda en B Main.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "KAY/O",
        "B Site"
       ],
       [
        "Sova",
        "B Danger"
       ],
       [
        "Omen",
        "B Main"
       ],
       [
        "Cypher",
        "Mid Bend"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ]
      ],
      "smokes": [
       "B Link",
       "B Tower"
      ],
      "arrows": [
       [
        "B Lobby",
        "B Main",
        "ally"
       ],
       [
        "B Main",
        "B Site",
        "ally"
       ],
       [
        "B Main",
        "B Danger",
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
     "text": "Plantamos detrás de la cobertura del site. Cypher retiene Mid Bend contra la rotación que viene por Mid Bottom.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "KAY/O",
        "B Site"
       ],
       [
        "Sova",
        "B Danger"
       ],
       [
        "Omen",
        "B Main"
       ],
       [
        "Cypher",
        "Mid Bend"
       ]
      ],
      "enemies": [
       [
        "Clove",
        "Mid Bottom"
       ],
       [
        "Viper",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "Mid Top",
        "Mid Bottom",
        "enemy"
       ],
       [
        "A Link",
        "Mid Top",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Post-plant en fuego cruzado: Jett en B Site, Omen en B Main, Sova en B Danger con dardos de choque, KAY/O en B Nest y Cypher cortando Mid Bend.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "KAY/O",
        "B Nest"
       ],
       [
        "Sova",
        "B Danger"
       ],
       [
        "Omen",
        "B Main"
       ],
       [
        "Cypher",
        "Mid Bend"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "B Link"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Clove",
        "Mid Bottom"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "B Link",
        "B Site",
        "enemy"
       ],
       [
        "Defender Side Spawn",
        "B Tower",
        "enemy"
       ],
       [
        "B Danger",
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
   "name": "Control de Mid → split B",
   "type": "Split",
   "tip": "El split solo funciona si las dos entradas llegan a la vez. Contad en voz alta y entrad juntos.",
   "steps": [
    {
     "text": "Default: Jett hace presencia en A Lobby, Sova y KAY/O a Mid Bottom, Omen a Mid Bend y Cypher a B Lobby con trap en B Main.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
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
        "Omen",
        "Mid Bend"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
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
       ],
       [
        "Attacker Side Spawn",
        "Mid Bend",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "B Lobby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Dardo de Sova a Mid Library y flash de KAY/O hacia Mid Top. Ganamos Mid Library y Clove cae o se retira.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Lobby"
       ],
       [
        "Sova",
        "Mid Library"
       ],
       [
        "KAY/O",
        "Mid Library"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "arrows": [
       [
        "Mid Bottom",
        "Mid Library",
        "util"
       ],
       [
        "Mid Library",
        "Mid Top",
        "util"
       ],
       [
        "Mid Bottom",
        "Mid Library",
        "ally"
       ],
       [
        "Mid Bend",
        "Mid Bottom",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Jett hace ruido en A Main para fijar a A. Omen se une a Cypher en B Lobby y humea B Tower y Defender Side Spawn para cortar la vuelta.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Main"
       ],
       [
        "Sova",
        "Mid Top"
       ],
       [
        "KAY/O",
        "Mid Top"
       ],
       [
        "Omen",
        "B Lobby"
       ],
       [
        "Cypher",
        "B Lobby"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "smokes": [
       "B Tower",
       "Defender Side Spawn"
      ],
      "arrows": [
       [
        "A Lobby",
        "A Main",
        "ally"
       ],
       [
        "Mid Library",
        "Mid Top",
        "ally"
       ],
       [
        "Mid Bottom",
        "B Lobby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Split a la vez: Sova y KAY/O bajan Mid Top → B Link → B Site; Omen y Cypher entran por B Main. Jett se queda de lurk en A Main.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Main"
       ],
       [
        "Sova",
        "B Link"
       ],
       [
        "KAY/O",
        "B Site"
       ],
       [
        "Omen",
        "B Main"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ]
      ],
      "smokes": [
       "B Tower",
       "Defender Side Spawn"
      ],
      "arrows": [
       [
        "Mid Top",
        "B Link",
        "ally"
       ],
       [
        "B Link",
        "B Site",
        "ally"
       ],
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
     }
    },
    {
     "text": "Plant en B Site. Sova en B Link, Omen en B Main, KAY/O y Cypher en el site. Jett castiga la rotación por la espalda desde A Main.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "B Link"
       ],
       [
        "KAY/O",
        "B Site"
       ],
       [
        "Omen",
        "B Main"
       ],
       [
        "Cypher",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "Mid Top"
       ],
       [
        "Raze",
        "A Link"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "A Site",
        "A Link",
        "enemy"
       ],
       [
        "A Link",
        "Mid Top",
        "enemy"
       ],
       [
        "A Main",
        "A Site",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "2-1-2 con info en mid",
   "type": "Setup",
   "tip": "No te pongas pegado al borde: cualquier stun o explosión puede tirarte al vacío.",
   "steps": [
    {
     "text": "Setup: Cypher en B Site (trap en B Main), Sova en B Tower, Omen en Mid Library, Jett en A Tower y KAY/O en A Site.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Library"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [],
      "arrows": [
       [
        "Defender Side Spawn",
        "B Link",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "Mid Top",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Secret",
        "ally"
       ],
       [
        "B Site",
        "B Main",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Info temprana: Sova lanza dardo a B Main, Omen tira paranoia hacia Mid Bottom. Escuchamos 4 en A Lobby.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Library"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
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
        "A Lobby"
       ],
       [
        "?",
        "Mid Bend"
       ]
      ],
      "arrows": [
       [
        "B Tower",
        "B Main",
        "util"
       ],
       [
        "Mid Library",
        "Mid Bottom",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Retraso en A: KAY/O lanza cuchillo a A Main y Omen humea A Main. Jett dispara desde A Tower a quien cruce.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Library"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Main"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Clove",
        "A Lobby"
       ],
       [
        "Viper",
        "Mid Bend"
       ]
      ],
      "smokes": [
       "A Main"
      ],
      "arrows": [
       [
        "A Site",
        "A Main",
        "util"
       ],
       [
        "A Lobby",
        "A Main",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Rotación ordenada: Omen pasa a A Link y Sova sube por B Link a Mid Top. Cypher se queda en B por si es fake.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "Mid Top"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Main"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Clove",
        "A Main"
       ],
       [
        "Viper",
        "Mid Catwalk"
       ]
      ],
      "smokes": [
       "A Main"
      ],
      "arrows": [
       [
        "Mid Library",
        "Mid Top",
        "ally"
       ],
       [
        "Mid Top",
        "A Link",
        "ally"
       ],
       [
        "B Tower",
        "B Link",
        "ally"
       ],
       [
        "B Link",
        "Mid Top",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Fuego cruzado en A: Jett en A Tower, KAY/O en A Site, Omen en A Link y Sova vigila A Vent desde Mid Top. Si plantan, retake juntos.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Link"
       ],
       [
        "Sova",
        "Mid Top"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Main"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Viper",
        "Mid Catwalk"
       ]
      ],
      "arrows": [
       [
        "A Main",
        "A Site",
        "enemy"
       ],
       [
        "Mid Catwalk",
        "A Vent",
        "enemy"
       ],
       [
        "Mid Top",
        "A Vent",
        "util"
       ],
       [
        "B Site",
        "B Link",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake A por Secret y Link",
   "type": "Retake",
   "tip": "Nunca entréis en goteo: reunid a todos, contad 3-2-1 y entrad por dos lados a la vez.",
   "steps": [
    {
     "text": "A ha caído: plantaron en A Site y KAY/O murió. Jett sobrevive en A Security; Sova y Omen en Mid Top; Cypher viene desde B Link.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Security"
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
        "B Link"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ],
       [
        "?",
        "Mid Catwalk"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "A Main",
        "A Site",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Reagrupamos: Cypher sube por Defender Side Spawn a A Secret, Sova y Omen a A Link. Jett aguanta en A Security sin asomar.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Security"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Cypher",
        "A Secret"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ],
       [
        "?",
        "Mid Catwalk"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "B Link",
        "Defender Side Spawn",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Secret",
        "ally"
       ],
       [
        "Mid Top",
        "A Link",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Utilidad: Omen humea A Main y A Tower para cortar el post-plant. Sova lanza dardo de reconocimiento a A Site.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Security"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Cypher",
        "A Secret"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Site"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ],
       [
        "?",
        "Mid Catwalk"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Main",
       "A Tower"
      ],
      "arrows": [
       [
        "A Link",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez: Jett desde A Security con dash, Cypher desde A Secret y Sova+Omen desde A Link. Raze cae en el site.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Cypher",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ],
       [
        "?",
        "Mid Catwalk"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Main",
       "A Tower"
      ],
      "arrows": [
       [
        "A Security",
        "A Site",
        "ally"
       ],
       [
        "A Secret",
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
     "text": "Cypher defusea con cobertura: Jett mira A Main, Sova A Tower y Omen vigila A Vent por si llega el lurker de mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Cypher",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Main"
       ],
       [
        "?",
        "A Vent"
       ]
      ],
      "spike": "A Site",
      "arrows": [
       [
        "Mid Catwalk",
        "A Vent",
        "enemy"
       ],
       [
        "A Link",
        "A Vent",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Retake B por Link y Tower",
   "type": "Retake",
   "tip": "Escucha dónde está el post-plant antes de entrar; humea sus posiciones, no el site.",
   "steps": [
    {
     "text": "B ha caído: Cypher murió y la spike está en B Site. Sova en Mid Top, Omen en Mid Library, Jett y KAY/O vienen desde A.",
     "board": {
      "allies": [
       [
        "Sova",
        "Mid Top"
       ],
       [
        "Omen",
        "Mid Library"
       ],
       [
        "Jett",
        "A Link"
       ],
       [
        "KAY/O",
        "A Secret"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Danger"
       ],
       [
        "?",
        "Mid Bend"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "B Main",
        "B Site",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Reunión en dos grupos: Sova y Omen en B Link; Jett y KAY/O bajan por Defender Side Spawn hasta B Tower.",
     "board": {
      "allies": [
       [
        "Sova",
        "B Link"
       ],
       [
        "Omen",
        "B Link"
       ],
       [
        "Jett",
        "B Tower"
       ],
       [
        "KAY/O",
        "B Tower"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Danger"
       ],
       [
        "?",
        "Mid Bend"
       ]
      ],
      "spike": "B Site",
      "arrows": [
       [
        "Mid Top",
        "B Link",
        "ally"
       ],
       [
        "Mid Library",
        "Mid Top",
        "ally"
       ],
       [
        "A Secret",
        "Defender Side Spawn",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "B Tower",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Utilidad: Omen humea B Main y B Danger, Sova lanza dardo a B Site y KAY/O su cuchillo para cortar la utilidad de Killjoy.",
     "board": {
      "allies": [
       [
        "Sova",
        "B Link"
       ],
       [
        "Omen",
        "B Link"
       ],
       [
        "Jett",
        "B Tower"
       ],
       [
        "KAY/O",
        "B Tower"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Danger"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Main",
       "B Danger"
      ],
      "arrows": [
       [
        "B Link",
        "B Site",
        "util"
       ],
       [
        "B Tower",
        "B Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Flash de KAY/O y entrada a la vez desde B Tower y B Link. Killjoy cae; quedan 2 rivales tras los humos.",
     "board": {
      "allies": [
       [
        "Sova",
        "B Site"
       ],
       [
        "Omen",
        "B Link"
       ],
       [
        "Jett",
        "B Site"
       ],
       [
        "KAY/O",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Danger"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Main",
       "B Danger"
      ],
      "arrows": [
       [
        "B Tower",
        "B Site",
        "ally"
       ],
       [
        "B Link",
        "B Site",
        "ally"
       ],
       [
        "B Tower",
        "B Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Defuse protegido: KAY/O defusea, Jett y Sova miran B Main y B Danger cuando caen los humos, Omen cubre B Link.",
     "board": {
      "allies": [
       [
        "Sova",
        "B Site"
       ],
       [
        "Omen",
        "B Link"
       ],
       [
        "Jett",
        "B Site"
       ],
       [
        "KAY/O",
        "B Site"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "B Main"
       ],
       [
        "Fade",
        "B Danger"
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
        "B Site",
        "B Main",
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
   "title": "Defensor en A Tower",
   "situation": "A 1:30 un Raze nos ha hecho daño desde A Tower dos rondas seguidas al entrar por A Main.",
   "enemy": [
    {
     "t": "Repetirá la misma posición en A Tower",
     "pct": 60
    },
    {
     "t": "Cambiará a un ángulo de A Site",
     "pct": 30
    },
    {
     "t": "Saldrá agresivo a A Main",
     "pct": 10
    }
   ],
   "responses": [
    {
     "t": "Abrir con flash de KAY/O o dardo de Sova a A Tower antes de asomar",
     "ok": true,
     "why": "En Oro la gente repite ángulos que le funcionan; castígalo con utilidad y dispara con ventaja."
    },
    {
     "t": "Asomar igual pero más rápido",
     "ok": false,
     "why": "Sin utilidad sigues en desventaja contra un ángulo alto preparado."
    },
    {
     "t": "Ir siempre a B para evitarlo",
     "ok": false,
     "why": "Te vuelves predecible y no resuelves el problema; el rival se adapta."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Main"
     ],
     [
      "KAY/O",
      "A Main"
     ],
     [
      "Sova",
      "A Lobby"
     ],
     [
      "Omen",
      "Mid Bottom"
     ],
     [
      "Cypher",
      "Mid Catwalk"
     ]
    ],
    "enemies": [
     [
      "Raze",
      "A Tower"
     ],
     [
      "Viper",
      "A Site"
     ],
     [
      "?",
      "Mid Top"
     ]
    ]
   },
   "enemyMove": [
    [
     "A Tower",
     "A Main",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Main",
     "A Tower",
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
   "side": "Ataque",
   "title": "Ganamos Mid temprano",
   "situation": "Minuto 1:20. Hemos matado al Clove de Mid Top y tenemos a Sova y Cypher en Mid Library. A Main está en silencio.",
   "enemy": [
    {
     "t": "El jugador de B rota hacia Mid Top para retomar mid",
     "pct": 45
    },
    {
     "t": "Los de A se repliegan a A Site/A Link y esperan",
     "pct": 35
    },
    {
     "t": "Empujan agresivos a Mid",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Ejecutar A ya: Cypher por A Vent a A Tower y el resto por A Main",
     "ok": true,
     "why": "Tienes ventaja numérica y de posición; cada segundo que esperes es una rotación más."
    },
    {
     "t": "Quedarnos en Mid a ver qué pasa",
     "ok": false,
     "why": "Regalas tiempo para que se reorganicen; el control de Mid solo vale si lo usas."
    },
    {
     "t": "Rotar todos a B Lobby",
     "ok": false,
     "why": "Pierdes el control ganado y llegas tarde a una B ya reforzada."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "Mid Library"
     ],
     [
      "Cypher",
      "Mid Library"
     ],
     [
      "Jett",
      "A Lobby"
     ],
     [
      "KAY/O",
      "A Lobby"
     ],
     [
      "Omen",
      "Mid Bottom"
     ]
    ],
    "enemies": [
     [
      "Fade",
      "B Tower"
     ],
     [
      "Viper",
      "A Site"
     ],
     [
      "Raze",
      "A Tower"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Tower",
     "B Link",
     "enemy"
    ],
    [
     "B Link",
     "Mid Top",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Catwalk",
     "A Vent",
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
   "side": "Ataque",
   "title": "Post-plant en B 3v3",
   "situation": "Hemos plantado en B Site. Quedan 0:35. Escuchamos dos defensores en B Link y uno en Defender Side Spawn.",
   "enemy": [
    {
     "t": "Entrarán juntos por B Link y B Tower",
     "pct": 50
    },
    {
     "t": "Uno intentará un defuse ninja tras un humo",
     "pct": 30
    },
    {
     "t": "Buscarán duelos sueltos en B Main",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Fuego cruzado desde B Main y B Danger, sin estar encima de la spike, y dardo de choque al defuse",
     "ok": true,
     "why": "Les obligas a entrar en tus ángulos y el tiempo corre a tu favor."
    },
    {
     "t": "Ir a buscarlos a B Link",
     "ok": false,
     "why": "Pierdes la ventaja de posición y regalas picks en su terreno."
    },
    {
     "t": "Los tres pegados a la spike",
     "ok": false,
     "why": "Una granada o un ult os barre a todos a la vez."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Site"
     ],
     [
      "Omen",
      "B Main"
     ],
     [
      "Sova",
      "B Danger"
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
      "Defender Side Spawn"
     ]
    ],
    "spike": "B Site"
   },
   "enemyMove": [
    [
     "B Link",
     "B Site",
     "enemy"
    ],
    [
     "Defender Side Spawn",
     "B Tower",
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
     "B Danger",
     "B Site",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Ronda eco con Sheriffs",
   "situation": "Perdimos la pistola. Vamos con Sheriffs y poca utilidad; el rival tiene compra completa y Operator en B.",
   "enemy": [
    {
     "t": "Aguantarán ángulos largos con rifles y Operator",
     "pct": 55
    },
    {
     "t": "Algunos empujarán a buscar info",
     "pct": 30
    },
    {
     "t": "Se apilan en A",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Rush de 5 juntos por B Main a corta distancia, intercambiando kills",
     "ok": true,
     "why": "Con pistolas solo ganas en distancia corta y en grupo; un rifle cogido arregla la siguiente ronda."
    },
    {
     "t": "Jugar un default lento repartidos",
     "ok": false,
     "why": "Cada duelo largo con Sheriff contra rifle es casi una muerte segura."
    },
    {
     "t": "Ir uno a uno a pelear A Main",
     "ok": false,
     "why": "Pelear separados regala la ventaja numérica sin cambiar kills."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Lobby"
     ],
     [
      "KAY/O",
      "B Lobby"
     ],
     [
      "Sova",
      "B Lobby"
     ],
     [
      "Omen",
      "B Lobby"
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
      "Fade",
      "B Tower"
     ],
     [
      "?",
      "Mid Top"
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
   "side": "Ataque",
   "title": "Clutch 1v2 en A",
   "situation": "Spike plantada en A Site, quedan 0:25. Jett sola en A Main contra dos defensores: uno en A Link y otro en A Secret.",
   "enemy": [
    {
     "t": "Uno defusea mientras el otro cubre",
     "pct": 55
    },
    {
     "t": "Entran los dos a la vez a buscarte",
     "pct": 30
    },
    {
     "t": "Esperan separados demasiado tiempo",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Esconderte en un ángulo raro de A Main y asomar al oír el defuse",
     "ok": true,
     "why": "El defuse obliga a uno a no disparar; ganas el duelo contra quien cubre con el reloj a favor."
    },
    {
     "t": "Ir a buscar el duelo a A Link",
     "ok": false,
     "why": "Te expones a un 1v2 abierto sin necesidad; el tiempo jugaba para ti."
    },
    {
     "t": "Quedarte sobre la spike",
     "ok": false,
     "why": "Te ven los dos desde ángulos distintos y pierdes el duelo doble."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Main"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Link"
     ],
     [
      "?",
      "A Secret"
     ]
    ],
    "spike": "A Site"
   },
   "enemyMove": [
    [
     "A Link",
     "A Site",
     "enemy"
    ],
    [
     "A Secret",
     "A Security",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Main",
     "A Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Escuchamos pasos en B Main",
   "situation": "A 1:25 se oyen 3 pares de pasos en B Main y un humo en B Link.",
   "enemy": [
    {
     "t": "Ejecución real en B",
     "pct": 65
    },
    {
     "t": "Fake para ir a A por mid",
     "pct": 35
    }
   ],
   "responses": [
    {
     "t": "Retrasar con utilidad y rotar al de mid (Omen) hacia B",
     "ok": true,
     "why": "Con pasos de 3 personas es muy probable que vayan B; mid es el rotador más cercano."
    },
    {
     "t": "Rotar todos desde A",
     "ok": false,
     "why": "Si es fake, A cae gratis."
    },
    {
     "t": "No mover a nadie y esperar",
     "ok": false,
     "why": "Si es real, B cae 3v2 sin ayuda."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Sova",
      "B Tower"
     ],
     [
      "Omen",
      "Mid Library"
     ],
     [
      "Jett",
      "A Tower"
     ],
     [
      "KAY/O",
      "A Site"
     ]
    ],
    "enemies": [
     [
      "Raze",
      "B Main"
     ],
     [
      "Fade",
      "B Main"
     ],
     [
      "Killjoy",
      "B Main"
     ]
    ],
    "smokes": [
     "B Link"
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
     "Mid Library",
     "Mid Top",
     "ally"
    ],
    [
     "Mid Top",
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
   "title": "El rival juega eco",
   "situation": "Ganamos la pistola. El rival va con pistolas y nosotros con rifles y algún Operator.",
   "enemy": [
    {
     "t": "Rush de 5 a un site",
     "pct": 50
    },
    {
     "t": "Se separan para buscar picks",
     "pct": 30
    },
    {
     "t": "Uno lurkea por mid",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Jugar atrás y a distancia, sin asomar a corta, y tradear",
     "ok": true,
     "why": "Con rifles ganas a distancia; dejar que vengan a ti es su única forma de perder."
    },
    {
     "t": "Empujar agresivo a buscarles",
     "ok": false,
     "why": "En corta distancia una pistola puede ganarte y les das un rifle."
    },
    {
     "t": "Apilar todos en un site",
     "ok": false,
     "why": "Si aciertan el otro site, plantan gratis."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Sova",
      "B Tower"
     ],
     [
      "Omen",
      "Mid Top"
     ],
     [
      "Jett",
      "A Site"
     ],
     [
      "KAY/O",
      "A Site"
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
     ]
    ]
   },
   "enemyMove": [
    [
     "B Lobby",
     "B Main",
     "enemy"
    ],
    [
     "B Main",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Top",
     "B Link",
     "ally"
    ],
    [
     "B Site",
     "B Tower",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake A 3v2 con poco tiempo",
   "situation": "A cayó. Spike en A Site, quedan 0:30. Rivales en A Main y A Tower. Nosotros: Sova, Omen y Cypher.",
   "enemy": [
    {
     "t": "Aguantan en fuego cruzado A Main + A Tower",
     "pct": 60
    },
    {
     "t": "Uno se queda sobre la spike",
     "pct": 25
    },
    {
     "t": "Salen a buscar duelo",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Humos en A Main y A Tower, dardo y entrada juntos por A Link y A Secret",
     "ok": true,
     "why": "Cortas sus ángulos de post-plant y llegas con superioridad numérica a la vez."
    },
    {
     "t": "Entrar de uno en uno según llegues",
     "ok": false,
     "why": "En goteo pierdes la ventaja 3v2 y conviertes el retake en 1v2 seguidos."
    },
    {
     "t": "Salvar armas",
     "ok": false,
     "why": "Con 3v2 y tiempo suficiente, el retake es claramente favorable."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "A Link"
     ],
     [
      "Omen",
      "A Link"
     ],
     [
      "Cypher",
      "A Secret"
     ]
    ],
    "enemies": [
     [
      "Fade",
      "A Main"
     ],
     [
      "Viper",
      "A Tower"
     ]
    ],
    "spike": "A Site"
   },
   "enemyMove": [
    [
     "A Main",
     "A Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Link",
     "A Site",
     "ally"
    ],
    [
     "A Secret",
     "A Site",
     "ally"
    ],
    [
     "A Link",
     "A Site",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Perdimos Mid pronto",
   "situation": "A 1:35 Omen ha muerto en Mid Library. Dos atacantes controlan Mid Catwalk y Mid Bottom.",
   "enemy": [
    {
     "t": "Usarán mid para atacar A por A Vent + A Main",
     "pct": 50
    },
    {
     "t": "Bajarán por Mid Top a B Link",
     "pct": 30
    },
    {
     "t": "Se quedan en mid como lurk",
     "pct": 20
    }
   ],
   "responses": [
    {
     "t": "Sova rota a Mid Top y KAY/O vigila A Vent con utilidad",
     "ok": true,
     "why": "Cortas las dos salidas de mid sin abandonar ningún site."
    },
    {
     "t": "Ir dos a retomar Mid Library",
     "ok": false,
     "why": "Pelear 2v2 en su terreno con un jugador menos es arriesgado y abre los sites."
    },
    {
     "t": "Ignorar mid",
     "ok": false,
     "why": "Te atacarán por la espalda desde A Vent o B Link."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Sova",
      "B Tower"
     ],
     [
      "Jett",
      "A Tower"
     ],
     [
      "KAY/O",
      "A Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "Mid Catwalk"
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
     "Mid Catwalk",
     "A Vent",
     "enemy"
    ],
    [
     "A Lobby",
     "A Main",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Tower",
     "B Link",
     "ally"
    ],
    [
     "B Link",
     "Mid Top",
     "ally"
    ],
    [
     "A Site",
     "A Vent",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Pick temprano con el Operator",
   "situation": "A 1:30 Jett mata a un atacante en A Main con el Operator. Vamos 5v4 y oímos pasos alejándose.",
   "enemy": [
    {
     "t": "Se retiran y van a B",
     "pct": 55
    },
    {
     "t": "Insisten en A igualmente",
     "pct": 30
    },
    {
     "t": "Hacen un default lento",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Jett se reposiciona, Omen rota a medio camino (Mid Top) y B se prepara con utilidad",
     "ok": true,
     "why": "Respetas la ventaja: nadie sale a buscar más y el rotador queda listo para cualquier site."
    },
    {
     "t": "Jett vuelve a asomar en el mismo ángulo",
     "ok": false,
     "why": "Ya saben dónde estás; te esperarán con flash."
    },
    {
     "t": "Salir 3 a A Main a buscar kills",
     "ok": false,
     "why": "Tirar la ventaja numérica peleando en su lado es el error más típico en Oro."
    }
   ],
   "board": {
    "allies": [
     [
      "Cypher",
      "B Site"
     ],
     [
      "Sova",
      "B Tower"
     ],
     [
      "Omen",
      "Mid Library"
     ],
     [
      "Jett",
      "A Tower"
     ],
     [
      "KAY/O",
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
     "A Lobby",
     "Attacker Side Spawn",
     "enemy"
    ],
    [
     "Attacker Side Spawn",
     "B Lobby",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Library",
     "Mid Top",
     "ally"
    ],
    [
     "A Tower",
     "A Site",
     "ally"
    ]
   ]
  }
 ],
 "rounds": {
  "attack": {
   "side": "Ataque",
   "title": "Execute A con control de Mid",
   "strategy": "A por Tower + Bridge",
   "intro": "Ronda de compra completa 5v5. Plan: tres por A Main, Cypher y Omen ganan Mid Catwalk para entrar por A Vent a A Tower a la vez.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Salimos de spawn: Jett, KAY/O y Sova a A Lobby; Omen a Mid Bend y Cypher a Mid Bottom.",
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
        "A Lobby"
       ],
       [
        "Omen",
        "Mid Bend"
       ],
       [
        "Cypher",
        "Mid Bottom"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ]
     },
     "question": "¿Qué hace primero Cypher?",
     "options": [
      {
       "t": "Poner trap en B Lobby y avanzar a Mid Catwalk",
       "ok": true,
       "why": "Cubres el flanco largo y preparas la entrada por A Vent."
      },
      {
       "t": "Ir con el trío a A Lobby",
       "ok": false,
       "why": "Pierdes el control de mid y la segunda entrada al site."
      },
      {
       "t": "Lurkear en B Main",
       "ok": false,
       "why": "Separas al equipo y no aportas a la ejecución en A."
      }
     ],
     "result": [
      [
       "Mid Bottom",
       "B Lobby",
       "util"
      ],
      [
       "Mid Bottom",
       "Mid Catwalk",
       "ally"
      ]
     ]
    },
    {
     "time": "1:25",
     "narration": "Cypher está en Mid Catwalk. Sova va a lanzar dardo; se oye a Raze en A Tower.",
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
        "A Lobby"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Catwalk"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ]
     },
     "question": "¿Dónde lanza Sova el dardo?",
     "options": [
      {
       "t": "A A Site, para ver a Viper y a quien juegue en A Bridge",
       "ok": true,
       "why": "Revela el site completo antes de comprometer la entrada."
      },
      {
       "t": "A B Site",
       "ok": false,
       "why": "La info de B no sirve a un execute en A."
      },
      {
       "t": "Guardarlo para el post-plant",
       "ok": false,
       "why": "Entrar sin info a un site con ángulos altos es suicida en Oro."
      }
     ],
     "result": [
      [
       "A Lobby",
       "A Site",
       "util"
      ]
     ]
    },
    {
     "time": "1:10",
     "narration": "El dardo marca a Viper en A Site y a Raze en A Tower. Toca ejecutar.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Main"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Bottom"
       ],
       [
        "Cypher",
        "Mid Catwalk"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "A Site"
       ],
       [
        "Raze",
        "A Tower"
       ],
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Tower"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "smokes": [
       "A Link",
       "A Security"
      ]
     },
     "question": "Con los humos ya en A Link y A Security, ¿cómo entramos?",
     "options": [
      {
       "t": "Flash de KAY/O sobre A Tower y entrada simultánea por A Main y A Vent",
       "ok": true,
       "why": "Dos entradas a la vez y el ángulo alto cegado: Raze no puede tradear."
      },
      {
       "t": "Jett entra sola primero y el resto espera",
       "ok": false,
       "why": "Sin trade, Jett muere y quedas 4v5."
      },
      {
       "t": "Esperar a que salgan los humos",
       "ok": false,
       "why": "Pierdes la utilidad y das tiempo a rotar."
      }
     ],
     "result": [
      [
       "A Main",
       "A Tower",
       "util"
      ],
      [
       "A Main",
       "A Site",
       "ally"
      ],
      [
       "Mid Catwalk",
       "A Vent",
       "ally"
      ]
     ]
    },
    {
     "time": "0:58",
     "narration": "Jett mata a Viper en A Site y Cypher remata a Raze en A Tower. 5v3. Fade y Killjoy rotan desde B.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Catwalk"
       ],
       [
        "Cypher",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "Clove",
        "Mid Top"
       ],
       [
        "Fade",
        "B Link"
       ],
       [
        "Killjoy",
        "B Site"
       ]
      ],
      "smokes": [
       "A Link",
       "A Security"
      ]
     },
     "question": "¿Dónde plantamos?",
     "options": [
      {
       "t": "En el centro de A Site, lejos del borde y a la vista de A Main",
       "ok": true,
       "why": "Puedes defender la spike desde fuera y nadie te tira al vacío."
      },
      {
       "t": "Pegado al borde del mapa",
       "ok": false,
       "why": "Un empujón o explosión te hace caer y la spike queda expuesta."
      },
      {
       "t": "Esperar a matar a todos antes de plantar",
       "ok": false,
       "why": "Regalas tiempo y la rotación llega con el site abierto."
      }
     ],
     "result": [
      [
       "A Main",
       "A Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:45",
     "narration": "Spike plantada. Clove viene por A Link y Fade por A Secret; Killjoy sube a Mid Top.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "KAY/O",
        "A Main"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Catwalk"
       ],
       [
        "Cypher",
        "A Tower"
       ]
      ],
      "enemies": [
       [
        "Clove",
        "A Link"
       ],
       [
        "Fade",
        "A Secret"
       ],
       [
        "Killjoy",
        "Mid Top"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Cómo nos colocamos para el post-plant?",
     "options": [
      {
       "t": "Jett a A Bridge, KAY/O en A Tower, Sova en A Main con lineup, Cypher en A Vent y Omen en Mid Catwalk",
       "ok": true,
       "why": "Fuego cruzado sobre la spike y el flanco de mid cubierto."
      },
      {
       "t": "Todos dentro del site",
       "ok": false,
       "why": "Una ult de Killjoy o una granada os barre."
      },
      {
       "t": "Ir a buscarles a A Link",
       "ok": false,
       "why": "Peleas en su terreno y regalas la ventaja."
      }
     ],
     "result": [
      [
       "A Site",
       "A Bridge",
       "ally"
      ],
      [
       "A Tower",
       "A Vent",
       "ally"
      ],
      [
       "A Main",
       "A Tower",
       "ally"
      ]
     ]
    },
    {
     "time": "0:25",
     "narration": "Clove entra por A Link y muere ante Jett. Fade intenta defusear desde A Secret.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Bridge"
       ],
       [
        "KAY/O",
        "A Tower"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Catwalk"
       ],
       [
        "Cypher",
        "A Vent"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Site"
       ],
       [
        "Killjoy",
        "Mid Top"
       ]
      ],
      "spike": "A Site"
     },
     "question": "Oímos el defuse. ¿Qué hacemos?",
     "options": [
      {
       "t": "Dardo de choque de Sova a la spike y asoman Jett y KAY/O a la vez",
       "ok": true,
       "why": "El defuse se corta y Fade queda en un doble ángulo."
      },
      {
       "t": "Esperar a que acabe medio defuse",
       "ok": false,
       "why": "Si le cubren, puede completarlo."
      },
      {
       "t": "Que Omen deje mid para ayudar",
       "ok": false,
       "why": "Abre la espalda a Killjoy por A Vent."
      }
     ],
     "result": [
      [
       "A Main",
       "A Site",
       "util"
      ],
      [
       "A Tower",
       "A Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:10",
     "narration": "Fade muere. Killjoy está sola en Mid Top y no le da tiempo a llegar.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Bridge"
       ],
       [
        "KAY/O",
        "A Site"
       ],
       [
        "Sova",
        "A Main"
       ],
       [
        "Omen",
        "Mid Catwalk"
       ],
       [
        "Cypher",
        "A Vent"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "Mid Top"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Qué hace el equipo los últimos segundos?",
     "options": [
      {
       "t": "Mantener posiciones alrededor de la spike sin buscar a Killjoy",
       "ok": true,
       "why": "La ronda está ganada; no regales una kill ni armas."
      },
      {
       "t": "Ir todos a por Killjoy",
       "ok": false,
       "why": "Riesgo innecesario: puede ganar duelos y defusear."
      },
      {
       "t": "Cambiar de posición para un ángulo nuevo",
       "ok": false,
       "why": "Moverte deja huecos y ruido gratis."
      }
     ],
     "result": [
      [
       "Mid Catwalk",
       "A Vent",
       "ally"
      ]
     ]
    }
   ],
   "outcome": "Ganamos 5v0 con la spike explotando. La clave: info con el dardo, dos entradas a la vez (A Main + A Vent), flash al ángulo alto de A Tower y plant lejos del borde con fuego cruzado."
  },
  "defense": {
   "side": "Defensa",
   "title": "2-1-2 con info en mid y retake A",
   "strategy": "2-1-2 con info en mid",
   "intro": "Compra completa 5v5. Plan: Cypher y Sova en B, Omen en mid con info, Jett y KAY/O en A. Rotamos solo con información confirmada.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Nos colocamos: Cypher en B Site, Sova en B Tower, Omen en Mid Library, Jett en A Tower y KAY/O en A Site.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Library"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": []
     },
     "question": "¿Qué utilidad usamos al inicio?",
     "options": [
      {
       "t": "Trap de Cypher en B Main y dardo de Sova a B Main al empezar",
       "ok": true,
       "why": "Info gratis sobre el site más rápido de atacar."
      },
      {
       "t": "Gastar los humos de Omen en mid ya",
       "ok": false,
       "why": "Te quedas sin humos para retrasar la ejecución real."
      },
      {
       "t": "Nada, esperar a oír algo",
       "ok": false,
       "why": "Sin info a tiempo rotarás tarde."
      }
     ],
     "result": [
      [
       "B Site",
       "B Main",
       "util"
      ],
      [
       "B Tower",
       "B Main",
       "util"
      ]
     ]
    },
    {
     "time": "1:25",
     "narration": "El dardo no ve nada en B. Paranoia de Omen hacia Mid Bottom: escuchamos varios en A Lobby.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Library"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
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
        "A Lobby"
       ],
       [
        "?",
        "A Lobby"
       ],
       [
        "?",
        "Mid Bend"
       ]
      ]
     },
     "question": "¿Rotamos ya?",
     "options": [
      {
       "t": "Omen se acerca a Mid Top para ayudar; Sova y Cypher siguen en B",
       "ok": true,
       "why": "Te acercas a A sin abrir B hasta confirmar la ejecución."
      },
      {
       "t": "Sova y Cypher rotan a A ahora",
       "ok": false,
       "why": "Si es fake, B cae sin defensa."
      },
      {
       "t": "Jett sale a A Main a pelear",
       "ok": false,
       "why": "Te enfrentas sola a 3 o 4 en su lado."
      }
     ],
     "result": [
      [
       "Mid Library",
       "Mid Top",
       "ally"
      ]
     ]
    },
    {
     "time": "1:10",
     "narration": "Raze, Fade y Clove entran a A Main con flash. Viper está en Mid Catwalk.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "B Tower"
       ],
       [
        "Omen",
        "Mid Top"
       ],
       [
        "Jett",
        "A Tower"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Raze",
        "A Main"
       ],
       [
        "Fade",
        "A Main"
       ],
       [
        "Clove",
        "A Main"
       ],
       [
        "Viper",
        "Mid Catwalk"
       ]
      ]
     },
     "question": "¿Cómo retrasamos A?",
     "options": [
      {
       "t": "Humo de Omen en A Main y cuchillo de KAY/O para cortar su utilidad",
       "ok": true,
       "why": "Cada segundo de retraso es tiempo para que Sova llegue."
      },
      {
       "t": "KAY/O asoma a A Main sin utilidad",
       "ok": false,
       "why": "Mueres ante 3 y abren el site."
      },
      {
       "t": "Jett salta al site a pelear de cerca",
       "ok": false,
       "why": "Pierdes el ángulo alto de A Tower, tu ventaja."
      }
     ],
     "result": [
      [
       "Mid Top",
       "A Main",
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
     "time": "0:55",
     "narration": "Ejecución confirmada. Jett mata a Raze desde A Tower pero KAY/O cae. Plantan en A Site. 4v4.",
     "board": {
      "allies": [
       [
        "Cypher",
        "B Site"
       ],
       [
        "Sova",
        "B Link"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Security"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Site"
       ],
       [
        "Clove",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ],
       [
        "?",
        "Mid Catwalk"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Qué hacemos ahora?",
     "options": [
      {
       "t": "Reagrupar para retake: Cypher y Sova vienen, Jett aguanta en A Security",
       "ok": true,
       "why": "4v4 con utilidad junta es un retake ganable; entrar en goteo no."
      },
      {
       "t": "Jett entra sola a A Site",
       "ok": false,
       "why": "1v3 sin apoyo; conviertes el 4v4 en 3v4."
      },
      {
       "t": "Cypher se queda en B por si acaso",
       "ok": false,
       "why": "La spike ya está en A; no hay nada que defender en B."
      }
     ],
     "result": [
      [
       "B Site",
       "B Link",
       "ally"
      ],
      [
       "B Link",
       "Mid Top",
       "ally"
      ],
      [
       "Defender Side Spawn",
       "A Secret",
       "ally"
      ]
     ]
    },
    {
     "time": "0:35",
     "narration": "Estamos reunidos: Jett en A Security, Cypher en A Secret, Sova y Omen en A Link.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Secret"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Security"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Site"
       ],
       [
        "Clove",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Qué utilidad usamos antes de entrar?",
     "options": [
      {
       "t": "Humos en A Main y A Tower y dardo de Sova a A Site",
       "ok": true,
       "why": "Cortas sus ángulos de post-plant y sabes quién está en el site."
      },
      {
       "t": "Humear el propio site",
       "ok": false,
       "why": "Te ciegas tú mismo y no sabes desde dónde te disparan."
      },
      {
       "t": "Entrar sin utilidad para ganar tiempo",
       "ok": false,
       "why": "Quedan 35 segundos: hay tiempo para usarla."
      }
     ],
     "result": [
      [
       "A Link",
       "A Site",
       "util"
      ]
     ]
    },
    {
     "time": "0:28",
     "narration": "El dardo marca a Fade en el site. Clove y Viper quedan tras los humos.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Secret"
       ],
       [
        "Sova",
        "A Link"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Security"
       ]
      ],
      "enemies": [
       [
        "Fade",
        "A Site"
       ],
       [
        "Clove",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Main",
       "A Tower"
      ]
     },
     "question": "¿Cómo entramos?",
     "options": [
      {
       "t": "A la vez: Jett desde A Security, Cypher desde A Secret, Sova y Omen desde A Link",
       "ok": true,
       "why": "Fade no puede mirar tres lados a la vez."
      },
      {
       "t": "Primero Jett y luego los demás",
       "ok": false,
       "why": "Goteo: Jett muere sola y volvemos a 3v3."
      },
      {
       "t": "Esperar a que caigan los humos",
       "ok": false,
       "why": "Les devuelves los ángulos de post-plant."
      }
     ],
     "result": [
      [
       "A Security",
       "A Site",
       "ally"
      ],
      [
       "A Secret",
       "A Site",
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
     "time": "0:15",
     "narration": "Fade cae. Cypher empieza el defuse; Clove y Viper salen de los humos.",
     "board": {
      "allies": [
       [
        "Cypher",
        "A Site"
       ],
       [
        "Sova",
        "A Site"
       ],
       [
        "Omen",
        "A Link"
       ],
       [
        "Jett",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Clove",
        "A Main"
       ],
       [
        "Viper",
        "A Tower"
       ]
      ],
      "spike": "A Site"
     },
     "question": "¿Qué hace el resto mientras Cypher defusea?",
     "options": [
      {
       "t": "Jett mira A Main, Sova A Tower y Omen cubre A Vent",
       "ok": true,
       "why": "Cada ángulo de entrada está cubierto y el defuse se completa."
      },
      {
       "t": "Todos a buscar duelos fuera del site",
       "ok": false,
       "why": "Dejas a Cypher solo y vendido."
      },
      {
       "t": "Ayudar a defusear",
       "ok": false,
       "why": "Solo puede defusear uno; el resto debe disparar."
      }
     ],
     "result": [
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
   ],
   "outcome": "Defuse completado y ronda ganada. La clave: rotar solo con info confirmada, retrasar A con humo y cuchillo, y un retake 4v4 juntos por tres lados con humos sobre sus ángulos de post-plant."
  }
 }
};
