window.MAPDATA = window.MAPDATA || {};
MAPDATA["icebox"] = {
 "strategies": [
  {
   "side": "Ataque",
   "name": "B Yellow con muro de Viper",
   "type": "Execute",
   "tip": "Sin muro de Viper no hay B: si la Viper muere antes, cambia a A o juega lento.",
   "steps": [
    {
     "text": "Salida: Jett, Sova, Viper y KAY/O a B Garage. Killjoy va a Mid Blue con alarmbot mirando B Tube para cubrir el flanco.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Garage"
       ],
       [
        "Sova",
        "B Garage"
       ],
       [
        "Viper",
        "B Garage"
       ],
       [
        "KAY/O",
        "B Garage"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "B Garage",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Blue",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info: dardo de Sova desde B Green a B Site y cuchillo de KAY/O a B Snowman. Revelan Sage en el site y Jett en Snowman.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Green"
       ],
       [
        "Sova",
        "B Green"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Green"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "B Site"
       ],
       [
        "Jett",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "arrows": [
       [
        "B Garage",
        "B Green",
        "ally"
       ],
       [
        "B Green",
        "B Site",
        "util"
       ],
       [
        "B Green",
        "B Snowman",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Utilidad: Viper levanta el muro desde B Yellow hasta B Orange (corta Kitchen y Snow Pile) y lanza orbe a B Snowman. KAY/O flashea por encima de Yellow.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Cubby"
       ],
       [
        "Sova",
        "B Green"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Cubby"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "B Site"
       ],
       [
        "Jett",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "smokes": [
       "B Yellow",
       "B Orange",
       "B Snowman"
      ],
      "arrows": [
       [
        "B Green",
        "B Yellow",
        "util"
       ],
       [
        "B Green",
        "B Orange",
        "util"
       ],
       [
        "B Green",
        "B Snowman",
        "util"
       ],
       [
        "B Cubby",
        "B Site",
        "util"
       ],
       [
        "B Green",
        "B Cubby",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Entrada: Jett hace dash al site por B Yellow, KAY/O la tradea. Sova despeja B Back con dardo de choque. Sage cae, Jett rival ciega dentro del orbe.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Yellow"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Yellow"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "smokes": [
       "B Yellow",
       "B Orange",
       "B Snowman"
      ],
      "arrows": [
       [
        "B Cubby",
        "B Site",
        "ally"
       ],
       [
        "B Cubby",
        "B Yellow",
        "ally"
       ],
       [
        "B Yellow",
        "B Back",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Plant detrás del muro, en default pegado a Yellow. Viper sale a B Green con la molly de lineup, Sova en B Cubby, KAY/O en el site, Jett mira B Hall.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Yellow"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Hall"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Yellow",
       "B Orange"
      ],
      "arrows": [
       [
        "B Yellow",
        "B Site",
        "ally"
       ],
       [
        "B Hall",
        "B Back",
        "enemy"
       ],
       [
        "B Kitchen",
        "B Snow Pile",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "Retake rival por B Hall y Kitchen: Sova dardo de choque al spike, Viper Snakebite encima y Killjoy corta el que intenta B Tube. Jugamos desde fuera, no peleamos dentro.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Yellow"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Back"
       ],
       [
        "?",
        "B Snow Pile"
       ],
       [
        "?",
        "B Tube"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Orange"
      ],
      "arrows": [
       [
        "B Cubby",
        "B Site",
        "util"
       ],
       [
        "B Green",
        "B Site",
        "util"
       ],
       [
        "Mid Blue",
        "B Tube",
        "util"
       ],
       [
        "B Back",
        "B Site",
        "enemy"
       ],
       [
        "B Snow Pile",
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
   "name": "Mid Pallet → A Screen + Belt",
   "type": "Split",
   "tip": "El que entra por A Screen pilla de espaldas al defensor de A Site: la clave es entrar a la vez que Belt.",
   "steps": [
    {
     "text": "Salida: Jett, Sova y KAY/O a A Belt. Viper y Killjoy a Mid Blue para pelear Mid.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Belt"
       ],
       [
        "Sova",
        "A Belt"
       ],
       [
        "KAY/O",
        "A Belt"
       ],
       [
        "Viper",
        "Mid Blue"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Nest"
       ],
       [
        "?",
        "Mid Boiler"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "A Belt",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Blue",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Toma de Mid: Killjoy deja la torreta mirando Mid Boiler; Viper humea Mid Boiler y los dos avanzan a Mid Pallet. En A, Sova lanza dardo a A Site.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Belt"
       ],
       [
        "Sova",
        "A Belt"
       ],
       [
        "KAY/O",
        "A Belt"
       ],
       [
        "Viper",
        "Mid Pallet"
       ],
       [
        "Killjoy",
        "Mid Pallet"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "?",
        "Mid Boiler"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "B Site"
       ]
      ],
      "smokes": [
       "Mid Boiler"
      ],
      "arrows": [
       [
        "Mid Blue",
        "Mid Pallet",
        "ally"
       ],
       [
        "Mid Blue",
        "Mid Boiler",
        "util"
       ],
       [
        "A Belt",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Utilidad A: KAY/O cuchillo a A Nest y flash; Jett limpia Nest con apoyo y toma A Pipes. Viper muro desde A Screen hacia A Rafters para cortar el CT.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Pipes"
       ],
       [
        "Sova",
        "A Belt"
       ],
       [
        "KAY/O",
        "A Pipes"
       ],
       [
        "Viper",
        "Mid Pallet"
       ],
       [
        "Killjoy",
        "Mid Pallet"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ],
       [
        "?",
        "Mid Boiler"
       ],
       [
        "?",
        "B Kitchen"
       ]
      ],
      "smokes": [
       "Mid Boiler",
       "A Rafters"
      ],
      "arrows": [
       [
        "A Belt",
        "A Nest",
        "util"
       ],
       [
        "A Belt",
        "A Pipes",
        "ally"
       ],
       [
        "Mid Pallet",
        "A Rafters",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez: Jett y KAY/O por A Nest, Viper y Killjoy bajan por A Screen. El Killjoy rival no puede mirar dos lados.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Pipes"
       ],
       [
        "KAY/O",
        "A Nest"
       ],
       [
        "Viper",
        "A Screen"
       ],
       [
        "Killjoy",
        "Mid Pallet"
       ]
      ],
      "enemies": [
       [
        "Killjoy",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ],
       [
        "?",
        "Mid Boiler"
       ]
      ],
      "smokes": [
       "A Rafters"
      ],
      "arrows": [
       [
        "A Pipes",
        "A Site",
        "ally"
       ],
       [
        "A Pipes",
        "A Nest",
        "ally"
       ],
       [
        "Mid Pallet",
        "A Screen",
        "ally"
       ],
       [
        "A Nest",
        "A Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Plant en A Site. Post-plant: Killjoy en Mid Pallet con torreta, Viper en A Screen, Sova en A Belt con dardos de choque, KAY/O en A Nest.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Site"
       ],
       [
        "Sova",
        "A Belt"
       ],
       [
        "KAY/O",
        "A Nest"
       ],
       [
        "Viper",
        "A Screen"
       ],
       [
        "Killjoy",
        "Mid Pallet"
       ]
      ],
      "enemies": [
       [
        "?",
        "A Rafters"
       ],
       [
        "?",
        "Mid Boiler"
       ]
      ],
      "spike": "A Site",
      "smokes": [
       "A Rafters"
      ],
      "arrows": [
       [
        "A Rafters",
        "A Site",
        "enemy"
       ],
       [
        "Mid Boiler",
        "A Screen",
        "enemy"
       ],
       [
        "A Belt",
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
   "name": "Default lento + lurk por Tube",
   "type": "Default",
   "tip": "Un default no es esperar: cada jugador busca info o un pick seguro, y se decide a 0:50 como muy tarde.",
   "steps": [
    {
     "text": "Reparto: Viper y Sova en B Green, Killjoy en Mid Blue, Jett y KAY/O en A Belt. Alarmbot de Killjoy en B Garage para el flanco.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Green"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ],
       [
        "Jett",
        "A Belt"
       ],
       [
        "KAY/O",
        "A Belt"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "Mid Boiler"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Nest"
       ]
      ],
      "arrows": [
       [
        "Attacker Side Spawn",
        "B Green",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "Mid Blue",
        "ally"
       ],
       [
        "Attacker Side Spawn",
        "A Belt",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info sin gastar todo: dardo de Sova a B Site, cuchillo de KAY/O a A Nest. Ven 1 en B y 2 en A.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Green"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ],
       [
        "Jett",
        "A Belt"
       ],
       [
        "KAY/O",
        "A Belt"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "B Site"
       ],
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "Mid Boiler"
       ]
      ],
      "arrows": [
       [
        "B Green",
        "B Site",
        "util"
       ],
       [
        "A Belt",
        "A Nest",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Killjoy hace lurk por B Tube en silencio, Jett y KAY/O hacen ruido en A Pipes para fijar a los de A.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Green"
       ],
       [
        "Killjoy",
        "B Tube"
       ],
       [
        "Jett",
        "A Pipes"
       ],
       [
        "KAY/O",
        "A Belt"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "B Site"
       ],
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "Mid Boiler"
       ]
      ],
      "arrows": [
       [
        "Mid Blue",
        "B Tube",
        "ally"
       ],
       [
        "A Belt",
        "A Pipes",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "A 0:50 colapsamos en B: Viper muro Yellow–Orange, Killjoy sale de Tube por B Kitchen y pilla de espaldas. Jett y KAY/O rotan por Mid Blue.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Cubby"
       ],
       [
        "Sova",
        "B Yellow"
       ],
       [
        "Killjoy",
        "B Kitchen"
       ],
       [
        "Jett",
        "Mid Blue"
       ],
       [
        "KAY/O",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "B Site"
       ],
       [
        "?",
        "B Snow Pile"
       ],
       [
        "Killjoy",
        "A Site"
       ],
       [
        "Jett",
        "A Nest"
       ]
      ],
      "smokes": [
       "B Yellow",
       "B Orange"
      ],
      "arrows": [
       [
        "B Green",
        "B Yellow",
        "util"
       ],
       [
        "B Green",
        "B Orange",
        "util"
       ],
       [
        "B Tube",
        "B Kitchen",
        "ally"
       ],
       [
        "A Pipes",
        "Mid Blue",
        "ally"
       ],
       [
        "B Cubby",
        "B Site",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Plant B. Jett y KAY/O ya cierran B Tube; Killjoy en B Kitchen corta el retake desde B Hut.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Site"
       ],
       [
        "Killjoy",
        "B Kitchen"
       ],
       [
        "Jett",
        "B Tube"
       ],
       [
        "KAY/O",
        "B Cubby"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Hut"
       ],
       [
        "?",
        "Mid Boiler"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Orange"
      ],
      "arrows": [
       [
        "B Hut",
        "B Back",
        "enemy"
       ],
       [
        "Mid Boiler",
        "B Snow Pile",
        "enemy"
       ],
       [
        "Mid Blue",
        "B Tube",
        "ally"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Setup 2-1-2 clásico",
   "type": "Setup",
   "tip": "Killjoy aguanta B sola con utilidad; el de Kitchen es el que decide si B se cae o no.",
   "steps": [
    {
     "text": "Posiciones: Killjoy en B Site (nanos en el spot default detrás de Yellow, torreta mirando B Yellow), Viper en B Kitchen, Sova en Mid Boiler, Jett en A Nest, KAY/O en A Site.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "Mid Blue"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "B Hut",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "Mid Boiler",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "A Rafters",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Info temprana: Sova dardo a A Belt desde Mid Boiler y KAY/O cuchillo de A Site hacia A Pipes. Viper prepara el muro en B Orange por si hay ejecución.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "Mid Blue"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "Mid Boiler",
        "A Belt",
        "util"
       ],
       [
        "A Site",
        "A Pipes",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Contacto en B: los atacantes muestran en B Yellow. Torreta los marca, Killjoy lanza alarmbot/nanos, Viper Snakebite a B Yellow desde Kitchen.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Yellow"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "B Green",
        "B Yellow",
        "enemy"
       ],
       [
        "B Kitchen",
        "B Yellow",
        "util"
       ],
       [
        "B Site",
        "B Yellow",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Rotación: Sova pasa de Mid Boiler a B Snow Pile, Jett rota por A Rafters hacia B Hut. KAY/O se queda solo en A.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "B Snow Pile"
       ],
       [
        "Jett",
        "B Hut"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Yellow"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "Mid Boiler",
        "B Snow Pile",
        "ally"
       ],
       [
        "A Nest",
        "B Hut",
        "ally"
       ],
       [
        "B Snow Pile",
        "B Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Hold con 4: Killjoy y Viper aguantan el plant, Sova dardo de choque a Yellow, Jett entra por B Back. Crossfire desde Kitchen y Back.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "B Snow Pile"
       ],
       [
        "Jett",
        "B Back"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "?",
        "B Yellow"
       ],
       [
        "?",
        "B Green"
       ]
      ],
      "arrows": [
       [
        "B Hut",
        "B Back",
        "ally"
       ],
       [
        "B Snow Pile",
        "B Yellow",
        "util"
       ],
       [
        "B Kitchen",
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
   "name": "Retake B con Viper y Sova",
   "type": "Retake",
   "tip": "Retake = juntarse fuera, usar la utilidad que se guardó y entrar todos por dos lados a la vez.",
   "steps": [
    {
     "text": "Setup suave: Killjoy en B Hut, Viper en B Kitchen, Sova en Mid Boiler, Jett y KAY/O en A. B se juega desde fuera, sin regalar vidas.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Hut"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "Mid Blue"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "B Hut",
        "ally"
       ],
       [
        "Defender Side Spawn",
        "B Kitchen",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Los atacantes ejecutan B con muro. Killjoy y Viper se retiran sin pelear: Viper a B Snow Pile, Killjoy se queda en B Hut.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Hut"
       ],
       [
        "Viper",
        "B Snow Pile"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "KAY/O",
        "B Yellow"
       ],
       [
        "?",
        "Mid Blue"
       ]
      ],
      "smokes": [
       "B Yellow",
       "B Orange"
      ],
      "arrows": [
       [
        "B Yellow",
        "B Site",
        "enemy"
       ],
       [
        "B Kitchen",
        "B Snow Pile",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Spike plantado. Nos juntamos: Jett y KAY/O llegan a B Hut por A Rafters, Sova pasa a B Kitchen.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Hut"
       ],
       [
        "Viper",
        "B Snow Pile"
       ],
       [
        "Sova",
        "B Kitchen"
       ],
       [
        "Jett",
        "B Hut"
       ],
       [
        "KAY/O",
        "B Hut"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "KAY/O",
        "B Yellow"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Orange"
      ],
      "arrows": [
       [
        "A Nest",
        "B Hut",
        "ally"
       ],
       [
        "A Site",
        "B Hut",
        "ally"
       ],
       [
        "Mid Boiler",
        "B Kitchen",
        "ally"
       ]
      ]
     }
    },
    {
     "text": "Utilidad: Sova dardo de reconocimiento al site, Viper orbe en B Yellow para cortar a los de fuera, KAY/O flash y cuchillo al site.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Back"
       ],
       [
        "Viper",
        "B Snow Pile"
       ],
       [
        "Sova",
        "B Kitchen"
       ],
       [
        "Jett",
        "B Hall"
       ],
       [
        "KAY/O",
        "B Hut"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "KAY/O",
        "B Yellow"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Yellow"
      ],
      "arrows": [
       [
        "B Kitchen",
        "B Site",
        "util"
       ],
       [
        "B Snow Pile",
        "B Yellow",
        "util"
       ],
       [
        "B Hut",
        "B Site",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Entrada a la vez por B Back/B Hall y desde Snow Pile. Killjoy defusea con nanos cubriendo la entrada de Yellow.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Snow Pile"
       ],
       [
        "Sova",
        "B Kitchen"
       ],
       [
        "Jett",
        "B Site"
       ],
       [
        "KAY/O",
        "B Back"
       ]
      ],
      "enemies": [
       [
        "Sova",
        "B Cubby"
       ],
       [
        "KAY/O",
        "B Yellow"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Yellow"
      ],
      "arrows": [
       [
        "B Back",
        "B Site",
        "ally"
       ],
       [
        "B Hall",
        "B Site",
        "ally"
       ],
       [
        "B Site",
        "B Yellow",
        "util"
       ]
      ]
     }
    }
   ]
  },
  {
   "side": "Defensa",
   "name": "Agresión en Mid Blue",
   "type": "Setup",
   "tip": "Agresión de un solo intento: o sale el pick con utilidad o te retiras a Mid Boiler. No repitas la jugada dos rondas seguidas.",
   "steps": [
    {
     "text": "Salida rápida: Jett y KAY/O van a Mid Boiler; Sova dardo a Mid Blue para ver quién viene. Killjoy en B, Viper en A Site.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Boiler"
       ],
       [
        "KAY/O",
        "Mid Boiler"
       ],
       [
        "Sova",
        "B Kitchen"
       ],
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "Mid Blue"
       ],
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "Defender Side Spawn",
        "Mid Boiler",
        "ally"
       ],
       [
        "B Kitchen",
        "Mid Blue",
        "util"
       ]
      ]
     }
    },
    {
     "text": "El dardo marca 2 en Mid Blue. KAY/O flash por encima de Mid Pallet y Jett asoma con Tailwind para salir si falla.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Pallet"
       ],
       [
        "KAY/O",
        "Mid Boiler"
       ],
       [
        "Sova",
        "B Kitchen"
       ],
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "Mid Blue"
       ],
       [
        "Omen",
        "Mid Blue"
       ],
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "Mid Boiler",
        "Mid Pallet",
        "ally"
       ],
       [
        "Mid Boiler",
        "Mid Blue",
        "util"
       ]
      ]
     }
    },
    {
     "text": "Pick en Mid Blue. Jett vuelve a Mid Boiler inmediatamente, KAY/O cubre B Tube por si vienen a vengar.",
     "board": {
      "allies": [
       [
        "Jett",
        "Mid Boiler"
       ],
       [
        "KAY/O",
        "B Snow Pile"
       ],
       [
        "Sova",
        "B Kitchen"
       ],
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Omen",
        "Mid Blue"
       ],
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "A Belt"
       ]
      ],
      "arrows": [
       [
        "Mid Pallet",
        "Mid Boiler",
        "ally"
       ],
       [
        "Mid Boiler",
        "B Snow Pile",
        "ally"
       ],
       [
        "Mid Blue",
        "B Tube",
        "enemy"
       ]
      ]
     }
    },
    {
     "text": "4v5: ahora defendemos normal y más tranquilos. Jett vuelve a A Nest, Sova y KAY/O listos para rotar al primer contacto.",
     "board": {
      "allies": [
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "B Snow Pile"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "A Belt"
       ],
       [
        "?",
        "B Tube"
       ]
      ],
      "arrows": [
       [
        "Mid Boiler",
        "A Screen",
        "ally"
       ],
       [
        "A Screen",
        "A Nest",
        "ally"
       ],
       [
        "B Kitchen",
        "Mid Boiler",
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
   "title": "Torreta de Killjoy en B Yellow",
   "situation": "Las dos últimas rondas, al asomar por B Yellow, la torreta de Killjoy nos marca y nos matan desde el site.",
   "enemy": [
    {
     "t": "Repetirá torreta y nanos en el mismo sitio",
     "pct": 65
    },
    {
     "t": "Cambiará la torreta a B Back",
     "pct": 25
    },
    {
     "t": "Jugará B Hut y dejará el site vacío",
     "pct": 10
    }
   ],
   "responses": [
    {
     "t": "Romper la torreta con el cuchillo de KAY/O o con disparos desde B Cubby antes de ejecutar",
     "ok": true,
     "why": "Sin torreta, la Killjoy pierde info y queda sola contra 4. KAY/O además suprime los nanos."
    },
    {
     "t": "Entrar más rápido para que la torreta no marque",
     "ok": false,
     "why": "La torreta marca igual; entras ralentizado y con 1 defensor esperándote."
    },
    {
     "t": "Plantar en B Green fuera del site",
     "ok": false,
     "why": "No se puede plantar fuera del site y regalas tiempo."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Cubby"
     ],
     [
      "Sova",
      "B Green"
     ],
     [
      "Viper",
      "B Green"
     ],
     [
      "KAY/O",
      "B Cubby"
     ],
     [
      "Killjoy",
      "Mid Blue"
     ]
    ],
    "enemies": [
     [
      "Killjoy",
      "B Site"
     ],
     [
      "?",
      "B Snowman"
     ],
     [
      "?",
      "B Kitchen"
     ],
     [
      "?",
      "A Site"
     ]
    ],
    "arrows": [
     [
      "B Site",
      "B Yellow",
      "util"
     ]
    ]
   },
   "enemyMove": [
    [
     "B Site",
     "B Yellow",
     "util"
    ],
    [
     "B Snowman",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Cubby",
     "B Site",
     "util"
    ],
    [
     "B Cubby",
     "B Yellow",
     "ally"
    ],
    [
     "B Green",
     "B Orange",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Mid ganado y A en silencio",
   "situation": "A 1:10 hemos ganado Mid Pallet con un pick. Sova ha dardeado A Site y solo sale 1 defensor; se oyen pasos rotando hacia B.",
   "enemy": [
    {
     "t": "Dejan 1 en A y refuerzan B",
     "pct": 55
    },
    {
     "t": "El de A se retira a A Rafters a esperar",
     "pct": 30
    },
    {
     "t": "Preparan agresión por Mid Boiler",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Ejecutar A ya por Belt y Screen a la vez",
     "ok": true,
     "why": "Tienes info de 1 defensor y Mid ganado: atacar el site débil antes de que vuelvan."
    },
    {
     "t": "Seguir hacia B porque allí es nuestro plan",
     "ok": false,
     "why": "Vas al site donde se acaban de reforzar."
    },
    {
     "t": "Esperar en Mid hasta 0:30",
     "ok": false,
     "why": "Das tiempo a que roten de vuelta y pierdes la ventaja."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Belt"
     ],
     [
      "KAY/O",
      "A Belt"
     ],
     [
      "Sova",
      "A Belt"
     ],
     [
      "Viper",
      "Mid Pallet"
     ],
     [
      "Killjoy",
      "Mid Pallet"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "B Kitchen"
     ],
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "Mid Boiler"
     ]
    ],
    "arrows": [
     [
      "A Belt",
      "A Site",
      "util"
     ]
    ]
   },
   "enemyMove": [
    [
     "Mid Boiler",
     "B Kitchen",
     "enemy"
    ],
    [
     "A Site",
     "A Rafters",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Belt",
     "A Nest",
     "ally"
    ],
    [
     "Mid Pallet",
     "A Screen",
     "ally"
    ],
    [
     "A Belt",
     "A Pipes",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Post-plant B 3v2",
   "situation": "Spike plantado en B default a 0:35. Quedamos Viper, Sova y KAY/O. Quedan 2 defensores; se oye uno en B Hut.",
   "enemy": [
    {
     "t": "Retake juntos por B Back y Hall",
     "pct": 50
    },
    {
     "t": "Uno por Back y otro por Kitchen",
     "pct": 35
    },
    {
     "t": "Uno intenta el defuse con humo",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Jugar desde fuera: Viper en B Green con molly de lineup, Sova en Cubby con dardo de choque",
     "ok": true,
     "why": "Con el spike puesto, el tiempo es tuyo; obligas a que ellos se expongan al defusear."
    },
    {
     "t": "Ir los tres a por ellos a B Hut",
     "ok": false,
     "why": "Pierdes la ventaja posicional y te pueden pillar en mal ángulo."
    },
    {
     "t": "Quedarse los tres encima del spike",
     "ok": false,
     "why": "Una granada o un flash y caéis todos juntos."
    }
   ],
   "board": {
    "allies": [
     [
      "Viper",
      "B Green"
     ],
     [
      "Sova",
      "B Cubby"
     ],
     [
      "KAY/O",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Hut"
     ],
     [
      "?",
      "Mid Boiler"
     ]
    ],
    "spike": "B Site",
    "smokes": [
     "B Orange"
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "B Hut",
     "B Back",
     "enemy"
    ],
    [
     "B Back",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Site",
     "B Yellow",
     "ally"
    ],
    [
     "B Green",
     "B Site",
     "util"
    ],
    [
     "B Cubby",
     "B Back",
     "util"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Eco con pistolas",
   "situation": "Perdimos la pistola y la segunda ronda. Vamos con Sheriff/Ghost y poca utilidad; el rival tiene rifles y full escudo.",
   "enemy": [
    {
     "t": "Juegan posiciones largas en B y A",
     "pct": 60
    },
    {
     "t": "Hacen agresión en Mid con rifle",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Juntarse 5 en A Belt y pelear de cerca en A Pipes y A Nest",
     "ok": true,
     "why": "Las pistolas ganan a corta distancia; en grupo puedes tradear y robar rifles."
    },
    {
     "t": "Separarse y cubrir todo el mapa",
     "ok": false,
     "why": "1v1 a distancia con Sheriff contra Vandal: pierdes casi siempre."
    },
    {
     "t": "Asomar B Yellow de lejos",
     "ok": false,
     "why": "Es un pasillo largo: justo lo que quiere un rifle."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "A Belt"
     ],
     [
      "Sova",
      "A Belt"
     ],
     [
      "KAY/O",
      "A Belt"
     ],
     [
      "Viper",
      "A Belt"
     ],
     [
      "Killjoy",
      "A Belt"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Nest"
     ],
     [
      "?",
      "A Site"
     ],
     [
      "?",
      "Mid Boiler"
     ],
     [
      "?",
      "B Site"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "A Site",
     "A Nest",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Belt",
     "A Pipes",
     "ally"
    ],
    [
     "A Belt",
     "A Nest",
     "ally"
    ]
   ]
  },
  {
   "side": "Ataque",
   "title": "Flanco rival por B Tube",
   "situation": "Ejecutando B a 0:55 suena la alarmbot de Killjoy que dejamos mirando B Tube: alguien viene por detrás hacia Mid Blue.",
   "enemy": [
    {
     "t": "Un defensor hace flanco para pillarnos al plantar",
     "pct": 60
    },
    {
     "t": "Es un rotador que va a B Kitchen",
     "pct": 40
    }
   ],
   "responses": [
    {
     "t": "Killjoy se queda en Mid Blue con torreta y los demás terminan la ejecución",
     "ok": true,
     "why": "Uno solo frena el flanco con utilidad; si os giráis todos, la ejecución muere."
    },
    {
     "t": "Que vuelvan todos a por el flanco",
     "ok": false,
     "why": "Perdéis el tiempo y el muro de Viper."
    },
    {
     "t": "Ignorarlo",
     "ok": false,
     "why": "Os disparará por la espalda al plantar."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "B Yellow"
     ],
     [
      "Sova",
      "B Cubby"
     ],
     [
      "Viper",
      "B Green"
     ],
     [
      "KAY/O",
      "B Yellow"
     ],
     [
      "Killjoy",
      "Mid Blue"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Tube"
     ],
     [
      "?",
      "B Site"
     ],
     [
      "?",
      "B Snowman"
     ]
    ],
    "smokes": [
     "B Yellow",
     "B Orange"
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "B Tube",
     "Mid Blue",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Blue",
     "B Tube",
     "util"
    ],
    [
     "B Yellow",
     "B Site",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Muro de Viper en B a 1:20",
   "situation": "Se levanta el muro de Viper de B Yellow a B Orange a 1:20 y se oye el orbe en B Snowman.",
   "enemy": [
    {
     "t": "Ejecutan B de verdad",
     "pct": 70
    },
    {
     "t": "Fake para ir a A",
     "pct": 30
    }
   ],
   "responses": [
    {
     "t": "Retrasar con utilidad desde Kitchen y pedir una rotación",
     "ok": true,
     "why": "En Oro, la Viper casi nunca gasta muro y orbe para fakear."
    },
    {
     "t": "Ir al muro y pelear de cerca",
     "ok": false,
     "why": "El muro oculta posiciones: mueres sin info."
    },
    {
     "t": "Rotar todo el equipo a B",
     "ok": false,
     "why": "Si fuera fake, A queda vacía."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "B Site"
     ],
     [
      "Viper",
      "B Kitchen"
     ],
     [
      "Sova",
      "Mid Boiler"
     ],
     [
      "Jett",
      "A Nest"
     ],
     [
      "KAY/O",
      "A Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "B Yellow"
     ],
     [
      "?",
      "B Green"
     ],
     [
      "?",
      "B Cubby"
     ]
    ],
    "smokes": [
     "B Yellow",
     "B Orange",
     "B Snowman"
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "B Yellow",
     "B Site",
     "enemy"
    ],
    [
     "B Cubby",
     "B Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "B Kitchen",
     "B Yellow",
     "util"
    ],
    [
     "Mid Boiler",
     "B Snow Pile",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Perdemos A Nest temprano",
   "situation": "A 1:25 matan a nuestra Jett en A Nest. Nuestra KAY/O queda sola en A Site; se oyen 3 en A Pipes.",
   "enemy": [
    {
     "t": "Ejecutan A inmediatamente",
     "pct": 60
    },
    {
     "t": "Esperan a que rotemos para ir a B",
     "pct": 25
    },
    {
     "t": "Se quedan lurkeando en Nest",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "KAY/O retrasa desde A Rafters con utilidad y Sova rota desde Mid Boiler",
     "ok": true,
     "why": "No regalas otra vida; retrasas y preparas retake con ayuda."
    },
    {
     "t": "KAY/O pelea sola desde el site",
     "ok": false,
     "why": "1v3 sin apoyo: perdéis otra vida y el site gratis."
    },
    {
     "t": "Rotar 3 jugadores de B ya",
     "ok": false,
     "why": "Si es un pick para fakear, dejas B vendida."
    }
   ],
   "board": {
    "allies": [
     [
      "KAY/O",
      "A Site"
     ],
     [
      "Sova",
      "Mid Boiler"
     ],
     [
      "Viper",
      "B Kitchen"
     ],
     [
      "Killjoy",
      "B Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Nest"
     ],
     [
      "?",
      "A Pipes"
     ],
     [
      "?",
      "A Belt"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "A Pipes",
     "A Site",
     "enemy"
    ],
    [
     "A Nest",
     "A Site",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "A Site",
     "A Rafters",
     "ally"
    ],
    [
     "Mid Boiler",
     "A Screen",
     "ally"
    ],
    [
     "A Rafters",
     "A Site",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Retake de A 3v3",
   "situation": "Spike plantado en A Site a 0:40. Vivos: Sova, Viper y Killjoy en Mid Boiler/A Rafters. Ellos tienen 3 jugadores.",
   "enemy": [
    {
     "t": "Juegan post-plant en A Nest, A Screen y A Pipes",
     "pct": 55
    },
    {
     "t": "Uno se queda encima del spike",
     "pct": 30
    },
    {
     "t": "Se esconden en A Belt",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Juntarse y entrar a la vez por A Rafters y A Screen tras dardo de Sova",
     "ok": true,
     "why": "Retake coordinado con info: los tres a la vez, nada de entradas de uno en uno."
    },
    {
     "t": "Entrar uno a uno según vas llegando",
     "ok": false,
     "why": "Cada uno pelea 1v3: es como perder la ronda a plazos."
    },
    {
     "t": "Defusear de inmediato con humo",
     "ok": false,
     "why": "Tres atacantes lo oirán y spamearán la molly o el humo."
    }
   ],
   "board": {
    "allies": [
     [
      "Sova",
      "Mid Boiler"
     ],
     [
      "Viper",
      "A Rafters"
     ],
     [
      "Killjoy",
      "A Rafters"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Nest"
     ],
     [
      "?",
      "A Screen"
     ],
     [
      "?",
      "A Pipes"
     ]
    ],
    "spike": "A Site",
    "arrows": []
   },
   "enemyMove": [
    [
     "A Pipes",
     "A Nest",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Boiler",
     "A Screen",
     "ally"
    ],
    [
     "A Rafters",
     "A Site",
     "ally"
    ],
    [
     "Mid Boiler",
     "A Site",
     "util"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Ruido en A Belt, silencio en B",
   "situation": "A 1:15 se oyen 2-3 pasos en A Belt y un cuchillo de KAY/O en A. En B y Mid no hay nada.",
   "enemy": [
    {
     "t": "Presión real en A con 3",
     "pct": 50
    },
    {
     "t": "Fake en A para ir a B",
     "pct": 35
    },
    {
     "t": "Lurk de 2 por Mid",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Rotar solo al jugador de Mid hacia A Screen y mantener B",
     "ok": true,
     "why": "Refuerzas A sin vender B; si es fake, B sigue con 2."
    },
    {
     "t": "Rotar todos los de B a A",
     "ok": false,
     "why": "Es justo lo que busca un fake en Icebox."
    },
    {
     "t": "No mover a nadie",
     "ok": false,
     "why": "Si es real, A cae 3v2."
    }
   ],
   "board": {
    "allies": [
     [
      "Killjoy",
      "B Site"
     ],
     [
      "Viper",
      "B Kitchen"
     ],
     [
      "Sova",
      "Mid Boiler"
     ],
     [
      "Jett",
      "A Nest"
     ],
     [
      "KAY/O",
      "A Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "A Belt"
     ],
     [
      "?",
      "A Pipes"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "A Belt",
     "A Pipes",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Boiler",
     "A Screen",
     "ally"
    ]
   ]
  },
  {
   "side": "Defensa",
   "title": "Ventaja 5v4 tras pick en Mid",
   "situation": "A 1:30 nuestra Jett mata a uno en Mid Blue. Tenemos 5v4 y ellos han perdido a su controlador.",
   "enemy": [
    {
     "t": "Retrasan y se reagrupan para un ataque lento",
     "pct": 50
    },
    {
     "t": "Fuerzan B rápido para compensar",
     "pct": 35
    },
    {
     "t": "Atacan Mid para vengar",
     "pct": 15
    }
   ],
   "responses": [
    {
     "t": "Volver a posiciones y jugar retake si hace falta",
     "ok": true,
     "why": "Con ventaja numérica, no regales picks; que ellos se arriesguen."
    },
    {
     "t": "Seguir empujando Mid",
     "ok": false,
     "why": "Les das la ronda a 4v4 si fallas."
    },
    {
     "t": "Toda la defensa a B por si acaso",
     "ok": false,
     "why": "Vacías A y les dejas plantar gratis."
    }
   ],
   "board": {
    "allies": [
     [
      "Jett",
      "Mid Pallet"
     ],
     [
      "KAY/O",
      "Mid Boiler"
     ],
     [
      "Sova",
      "B Kitchen"
     ],
     [
      "Killjoy",
      "B Site"
     ],
     [
      "Viper",
      "A Site"
     ]
    ],
    "enemies": [
     [
      "?",
      "Mid Blue"
     ],
     [
      "?",
      "B Green"
     ],
     [
      "?",
      "A Belt"
     ]
    ],
    "arrows": []
   },
   "enemyMove": [
    [
     "Mid Blue",
     "Attacker Side Spawn",
     "enemy"
    ]
   ],
   "ourMove": [
    [
     "Mid Pallet",
     "Mid Boiler",
     "ally"
    ],
    [
     "Mid Boiler",
     "B Snow Pile",
     "ally"
    ]
   ]
  }
 ],
 "rounds": {
  "attack": {
   "side": "Ataque",
   "title": "Ejecución B Yellow con muro",
   "strategy": "B Yellow con muro de Viper",
   "intro": "Ronda de compra completa 5v5. Plan: tomar B Green, info con Sova y KAY/O, muro de Viper Yellow–Orange y entrada a B con Killjoy cubriendo Tube.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Salimos de spawn. Cuatro a B Garage y Killjoy a Mid Blue.",
     "board": {
      "allies": [
       [
        "Jett",
        "Attacker Side Spawn"
       ],
       [
        "Sova",
        "Attacker Side Spawn"
       ],
       [
        "Viper",
        "Attacker Side Spawn"
       ],
       [
        "KAY/O",
        "Attacker Side Spawn"
       ],
       [
        "Killjoy",
        "Attacker Side Spawn"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "arrows": []
     },
     "question": "¿Cómo repartimos la salida?",
     "options": [
      {
       "t": "4 a B Garage y Killjoy en Mid Blue con alarmbot",
       "ok": true,
       "why": "Killjoy cubre el flanco de Tube y el resto llega junto para la ejecución."
      },
      {
       "t": "5 a B sin nadie en Mid",
       "ok": false,
       "why": "Te flanquean por Tube cuando plantas."
      },
      {
       "t": "Repartirse 2-1-2 sin plan",
       "ok": false,
       "why": "Sin grupo no hay ejecución con muro."
      }
     ],
     "result": [
      [
       "Attacker Side Spawn",
       "B Garage",
       "ally"
      ],
      [
       "Attacker Side Spawn",
       "Mid Blue",
       "ally"
      ]
     ]
    },
    {
     "time": "1:25",
     "narration": "Llegamos a B Green. No ha habido contacto; Killjoy coloca la alarmbot mirando B Tube.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Green"
       ],
       [
        "Sova",
        "B Green"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Green"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Site"
       ],
       [
        "?",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "arrows": []
     },
     "question": "¿Qué hacemos primero?",
     "options": [
      {
       "t": "Dardo de Sova a B Site y cuchillo de KAY/O a Snowman",
       "ok": true,
       "why": "Saber dónde están antes de gastar el muro."
      },
      {
       "t": "Muro de Viper ya",
       "ok": false,
       "why": "Gastas la utilidad clave sin saber si hay alguien."
      },
      {
       "t": "Jett asoma sola a Yellow",
       "ok": false,
       "why": "Pick gratis para el AWP o la torreta."
      }
     ],
     "result": [
      [
       "B Green",
       "B Site",
       "util"
      ],
      [
       "B Green",
       "B Snowman",
       "util"
      ]
     ]
    },
    {
     "time": "1:15",
     "narration": "El dardo revela Sage en B Site y el cuchillo marca a la Jett rival en B Snowman. Se oye a alguien en B Kitchen.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Green"
       ],
       [
        "Sova",
        "B Green"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Green"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "Sage",
        "B Site"
       ],
       [
        "Jett",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "arrows": []
     },
     "question": "¿Cómo ejecutamos?",
     "options": [
      {
       "t": "Muro Yellow–Orange, orbe en Snowman y flash de KAY/O",
       "ok": true,
       "why": "Cortas Kitchen y Snowman a la vez y entras contra 1."
      },
      {
       "t": "Humo solo en Snowman",
       "ok": false,
       "why": "El de Kitchen te dispara de lado."
      },
      {
       "t": "Ir a A porque hay 3 en B",
       "ok": false,
       "why": "Solo hay 2-3 y ya tenéis toda la info."
      }
     ],
     "result": [
      [
       "B Green",
       "B Yellow",
       "util"
      ],
      [
       "B Green",
       "B Orange",
       "util"
      ],
      [
       "B Green",
       "B Snowman",
       "util"
      ]
     ]
    },
    {
     "time": "1:05",
     "narration": "Muro y orbe arriba. Jett entra con dash y mata a la Sage; KAY/O la tradea en Yellow. Perdemos a Sova contra la Jett rival.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Yellow"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Snowman"
       ],
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "smokes": [
       "B Yellow",
       "B Orange",
       "B Snowman"
      ],
      "arrows": []
     },
     "question": "¿Plantamos ya?",
     "options": [
      {
       "t": "Limpiar Snowman con KAY/O y Jett antes de plantar",
       "ok": true,
       "why": "El que queda en Snowman te mata al plantar si no lo limpias."
      },
      {
       "t": "Plantar inmediatamente",
       "ok": false,
       "why": "Plantas con un enemigo a 5 metros."
      },
      {
       "t": "Volver a B Green",
       "ok": false,
       "why": "Pierdes el site ya tomado."
      }
     ],
     "result": [
      [
       "B Yellow",
       "B Snowman",
       "ally"
      ],
      [
       "B Site",
       "B Snowman",
       "ally"
      ]
     ]
    },
    {
     "time": "0:55",
     "narration": "Snowman limpio. Viper planta detrás del muro, en default pegado a Yellow.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Site"
       ],
       [
        "Viper",
        "B Site"
       ],
       [
        "KAY/O",
        "B Snowman"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Kitchen"
       ],
       [
        "?",
        "A Site"
       ],
       [
        "?",
        "A Rafters"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Orange"
      ],
      "arrows": []
     },
     "question": "¿Dónde nos ponemos para el post-plant?",
     "options": [
      {
       "t": "Viper en B Green con molly, Jett en B Cubby, KAY/O en Snowman",
       "ok": true,
       "why": "Ángulos separados y la molly para negar el defuse."
      },
      {
       "t": "Todos encima del spike",
       "ok": false,
       "why": "Una granada os mata a todos."
      },
      {
       "t": "Jett va a cazarlos a B Hut",
       "ok": false,
       "why": "Regalas una vida con la ventaja."
      }
     ],
     "result": [
      [
       "B Site",
       "B Green",
       "ally"
      ],
      [
       "B Site",
       "B Cubby",
       "ally"
      ],
      [
       "Mid Blue",
       "B Tube",
       "util"
      ]
     ]
    },
    {
     "time": "0:30",
     "narration": "Retake rival: 3 vienen por B Back y B Snow Pile. Killjoy corta a uno que intentaba B Tube.",
     "board": {
      "allies": [
       [
        "Jett",
        "B Cubby"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "KAY/O",
        "B Snowman"
       ],
       [
        "Killjoy",
        "Mid Blue"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Back"
       ],
       [
        "?",
        "B Snow Pile"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Orange"
      ],
      "arrows": []
     },
     "question": "Uno empieza a defusear, ¿qué hacemos?",
     "options": [
      {
       "t": "Molly de Viper al spike y Jett peekea con ella",
       "ok": true,
       "why": "Interrumpes el defuse y el rival tiene que cortar o morir."
      },
      {
       "t": "Entrar todos al site",
       "ok": false,
       "why": "El otro defensor os espera dentro."
      },
      {
       "t": "Esperar al último segundo",
       "ok": false,
       "why": "Si hay doble defuse, pierdes la ronda."
      }
     ],
     "result": [
      [
       "B Green",
       "B Site",
       "util"
      ],
      [
       "B Cubby",
       "B Site",
       "ally"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: la info previa permitió gastar el muro con seguridad, la Killjoy en Mid cortó el flanco y el post-plant desde fuera con molly negó el defuse."
  },
  "defense": {
   "side": "Defensa",
   "title": "Hold de B y rotación con setup 2-1-2",
   "strategy": "Setup 2-1-2 clásico",
   "intro": "Ronda de compra completa 5v5. Plan: Killjoy en B con nanos, Viper en Kitchen, Sova en Mid Boiler, Jett y KAY/O en A, rotar al primer contacto claro.",
   "steps": [
    {
     "time": "1:40",
     "narration": "Fase de compra. Colocamos utilidad: Killjoy pone nanos en default de B y torreta mirando Yellow.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "Attacker Side Spawn"
       ]
      ],
      "arrows": []
     },
     "question": "¿Dónde debe jugar la Viper?",
     "options": [
      {
       "t": "B Kitchen, con muro preparado",
       "ok": true,
       "why": "Desde Kitchen ve Yellow y Tube y puede ayudar a B rápido."
      },
      {
       "t": "Mid Blue agresiva",
       "ok": false,
       "why": "Pierdes al controlador en la primera pelea."
      },
      {
       "t": "A Site junto a KAY/O",
       "ok": false,
       "why": "B quedaría con solo Killjoy."
      }
     ],
     "result": [
      [
       "Defender Side Spawn",
       "B Kitchen",
       "ally"
      ],
      [
       "Defender Side Spawn",
       "Mid Boiler",
       "ally"
      ]
     ]
    },
    {
     "time": "1:30",
     "narration": "Sova lanza dardo a A Belt: no hay nadie. El cuchillo rival cae en B Site.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Site"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "?",
        "B Green"
       ],
       [
        "?",
        "Mid Blue"
       ]
      ],
      "arrows": []
     },
     "question": "Un cuchillo de KAY/O suprime B. ¿Qué hace Killjoy?",
     "options": [
      {
       "t": "Salir del cuchillo, avisar y esperar a que su utilidad vuelva",
       "ok": true,
       "why": "Suprimida no puede usar nanos; aguanta y avisa."
      },
      {
       "t": "Peekear Yellow sola",
       "ok": false,
       "why": "Sin utilidad y contra 4: muerte segura."
      },
      {
       "t": "Rotar a A",
       "ok": false,
       "why": "Sin rival en A, B queda vacía."
      }
     ],
     "result": [
      [
       "B Site",
       "B Back",
       "ally"
      ],
      [
       "Mid Boiler",
       "A Belt",
       "util"
      ]
     ]
    },
    {
     "time": "1:15",
     "narration": "Muro de Viper rival en B Yellow–Orange. Torreta marca a la Jett rival entrando.",
     "board": {
      "allies": [
       [
        "Killjoy",
        "B Back"
       ],
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "Mid Boiler"
       ],
       [
        "Jett",
        "A Nest"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Jett",
        "B Yellow"
       ],
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "KAY/O",
        "B Cubby"
       ]
      ],
      "smokes": [
       "B Yellow",
       "B Orange"
      ],
      "arrows": []
     },
     "question": "Ejecución real en B. ¿A quién rotamos?",
     "options": [
      {
       "t": "Sova a B Snow Pile y Jett por A Rafters a B Hut",
       "ok": true,
       "why": "Dos rotan; KAY/O mantiene A con info."
      },
      {
       "t": "Nadie, que aguante B",
       "ok": false,
       "why": "2v4 en B: pierdes el site y jugadores."
      },
      {
       "t": "Todos a B",
       "ok": false,
       "why": "Si un rival lurkea A, plantan gratis."
      }
     ],
     "result": [
      [
       "Mid Boiler",
       "B Snow Pile",
       "ally"
      ],
      [
       "A Nest",
       "B Hut",
       "ally"
      ]
     ]
    },
    {
     "time": "1:05",
     "narration": "Jett rival mata a Killjoy en B Back. Viper usa Snakebite en Yellow y tradea a la Jett.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "B Snow Pile"
       ],
       [
        "Jett",
        "B Hut"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Cubby"
       ],
       [
        "KAY/O",
        "B Site"
       ]
      ],
      "smokes": [
       "B Orange"
      ],
      "arrows": []
     },
     "question": "Están plantando. ¿Qué hacemos?",
     "options": [
      {
       "t": "Sova dardo de choque al spike y Jett entra por B Back a la vez",
       "ok": true,
       "why": "Interrumpes el plant con daño y dos ángulos."
      },
      {
       "t": "Esperar a que planten para retake",
       "ok": false,
       "why": "Ya están dentro; ahora tienes ventaja de posición."
      },
      {
       "t": "Jett entra sola",
       "ok": false,
       "why": "Entrada sin utilidad ni trade."
      }
     ],
     "result": [
      [
       "B Snow Pile",
       "B Site",
       "util"
      ],
      [
       "B Hut",
       "B Back",
       "ally"
      ]
     ]
    },
    {
     "time": "0:50",
     "narration": "Matamos a la KAY/O rival plantando. Queda el spike en el suelo y 2 atacantes fuera.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "B Snow Pile"
       ],
       [
        "Jett",
        "B Back"
       ],
       [
        "KAY/O",
        "A Site"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "B Green"
       ],
       [
        "Sova",
        "B Cubby"
       ]
      ],
      "spike": "B Site",
      "smokes": [
       "B Orange"
      ],
      "arrows": []
     },
     "question": "¿Qué hacemos ahora?",
     "options": [
      {
       "t": "Jugar la caja en el site y que KAY/O venga por Mid",
       "ok": true,
       "why": "Ellos tienen que volver a entrar; tú tienes ventaja numérica y tiempo."
      },
      {
       "t": "Ir a B Green a por ellos",
       "ok": false,
       "why": "Peleas en su terreno y pierdes la ventaja."
      },
      {
       "t": "Rotar todos a A",
       "ok": false,
       "why": "Les regalas el spike."
      }
     ],
     "result": [
      [
       "A Site",
       "Mid Boiler",
       "ally"
      ],
      [
       "B Back",
       "B Site",
       "ally"
      ]
     ]
    },
    {
     "time": "0:25",
     "narration": "Atacantes intentan recoger el spike por B Yellow con flash.",
     "board": {
      "allies": [
       [
        "Viper",
        "B Kitchen"
       ],
       [
        "Sova",
        "B Snow Pile"
       ],
       [
        "Jett",
        "B Site"
       ],
       [
        "KAY/O",
        "Mid Boiler"
       ]
      ],
      "enemies": [
       [
        "Viper",
        "B Yellow"
       ],
       [
        "Sova",
        "B Cubby"
       ]
      ],
      "spike": "B Site",
      "arrows": []
     },
     "question": "Último ataque. ¿Respuesta?",
     "options": [
      {
       "t": "Girarse del flash y Jett tradea desde Site, Sova desde Snow Pile",
       "ok": true,
       "why": "Crossfire y sin flash: el rival entra ciego."
      },
      {
       "t": "Mirar la flash",
       "ok": false,
       "why": "Te ciegan y entran gratis."
      },
      {
       "t": "Salir a buscarles",
       "ok": false,
       "why": "Sin necesidad; el tiempo juega a tu favor."
      }
     ],
     "result": [
      [
       "B Site",
       "B Yellow",
       "ally"
      ],
      [
       "B Snow Pile",
       "B Yellow",
       "util"
      ]
     ]
    }
   ],
   "outcome": "Ronda ganada: la utilidad de Killjoy dio info, la rotación de dos jugadores llegó a tiempo y el crossfire desde Kitchen y Back negó el plant."
  }
 }
};
