// =====================================================================
//  VALORANT ORO COACH — Base de datos de estrategias
//  Puedes editar este archivo libremente para añadir/actualizar mapas,
//  composiciones, estrategias y escenarios de entrenamiento.
//
//  NOTA: los porcentajes ("pct") son ESTIMACIONES de comportamiento típico
//  en rangos Plata–Oro–Platino, basadas en tendencias generales del juego,
//  no estadísticas oficiales de Riot.
// =====================================================================

const AGENT_ROLES = {
  Jett: "Duelista", Raze: "Duelista", Neon: "Duelista", Reyna: "Duelista", Yoru: "Duelista", Phoenix: "Duelista", Iso: "Duelista", Waylay: "Duelista",
  Sova: "Iniciador", Fade: "Iniciador", Skye: "Iniciador", Breach: "Iniciador", "KAY/O": "Iniciador", Gekko: "Iniciador", Tejo: "Iniciador",
  Omen: "Controlador", Brimstone: "Controlador", Viper: "Controlador", Astra: "Controlador", Harbor: "Controlador", Clove: "Controlador", Miks: "Controlador",
  Killjoy: "Centinela", Cypher: "Centinela", Sage: "Centinela", Chamber: "Centinela", Deadlock: "Centinela", Vyse: "Centinela", Veto: "Centinela"
};

// Pool por defecto (edítalo en la app con el botón "Pool ranked")
// Parche 13.08: Abyss, Bind, Corrode, Haven, Lotus, Summit, Sunset
const DEFAULT_POOL = ["abyss", "bind", "corrode", "haven", "lotus", "summit", "sunset"];
const POOL_VERSION = "13.08"; // cambia esto al actualizar DEFAULT_POOL para resetear el pool guardado

const FUNDAMENTOS = [
  { t: "Tradea siempre", d: "En Oro la mayoría de rondas se pierden por jugadores que entran solos. Juega en parejas: si tu compañero muere, tú debes poder matar al que lo mató en 1–2 segundos." },
  { t: "Economía en equipo", d: "Si el equipo no puede comprar completo (≈3900 por cabeza), ahorrad TODOS. Media compra solo tras ganar pistol o en ronda de bonus." },
  { t: "Utilidad con propósito", d: "Cada habilidad debe tener un objetivo: quitar una posición, cortar una rotación o ganar info. Lanzarla 'por si acaso' es regalar ronda." },
  { t: "Juega la ventaja numérica", d: "Con 5v4 no hay prisa: agrupad, tomad espacio y forzad que ELLOS vengan. Con 4v5 jugad lento y buscad picks con utilidad." },
  { t: "Post-plant > entrar a duelos", d: "Tras plantar, colócate en ángulos de crossfire y espera el defuse. En Oro se pierden muchísimos 4v2 por buscar duelos innecesarios." },
  { t: "Comunica lo mínimo y claro", d: "Número + zona + estado: '2 B main, uno a 80'. Después de morir, una sola frase útil y silencio." }
];

const MAPS = [
  // ------------------------------------------------------------- ABYSS
  {
    id: "abyss", name: "Abyss", sites: "A · B", color: "#6f7fd9",
    desc: "Mapa vertical sin paredes en los bordes: puedes caerte al vacío (y tirar a enemigos con habilidades de empuje). Ángulos elevados en A Tower y A Bridge; B Main y B Link son las entradas clave.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Omen", "Jett", "Fade", "Killjoy", "Clove"], "why": "Reparto: 2 controladores, 1 duelista, 1 iniciador, 1 centinela.", "wr": 56.0, "pick": 4.0, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Jett", "Fade", "Killjoy", "Gekko"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 55.4, "pick": 3.5, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Omen", "Neon", "Fade", "Cypher", "Sage"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 54.8, "pick": 2.8, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "A por Tower + Bridge", type: "Execute", steps: ["Dardo de Sova a A site y flash de KAY/O sobre Tower.", "Humos en las líneas de CT y Bridge.", "Entrada simultánea por A Main y Tower.", "Plantar lejos del borde para no exponerse al vacío."], tip: "Revisa los ángulos elevados antes de mirar el site; ahí muere media Oro." },
      { name: "B Main rápido", type: "Execute", steps: ["Humo en B Link y CT.", "Flash y entrada en pareja por B Main.", "Uno vigila B Link para cortar la rotación desde mid."], tip: "Si mid está tuyo, B Link se convierte en tu segunda entrada." }
    ],
    defense: [
      { name: "2-1-2 con info en mid", type: "Setup", steps: ["Centinela en B con trap en B Main.", "Un jugador con info en mid (dron, dardo o cámara).", "2 en A cubriendo Tower y A Main desde ángulos distintos."], tip: "No te pongas pegado al borde: cualquier stun o explosión puede tirarte." }
    ],
    scenarios: [
      { side: "Ataque", title: "Defensor en A Tower", situation: "A 1:30 un defensor nos ha hecho daño desde A Tower dos rondas seguidas.",
        enemy: [{ t: "Repetirá la misma posición en Tower", pct: 60 }, { t: "Cambiará a un ángulo de site", pct: 40 }],
        responses: [{ t: "Abrir con flash/dardo directo a Tower antes de asomar", ok: true, why: "En Oro la gente repite ángulos que le funcionan; usa utilidad para castigarlo." }, { t: "Asomar igual pero más rápido", ok: false, why: "Sin utilidad sigues en desventaja contra un ángulo alto preparado." }] },
      { side: "Defensa", title: "Escuchamos pasos en B Main", situation: "A 1:25 se oyen 3 pares de pasos en B Main y utilidad en B Link.",
        enemy: [{ t: "Ejecución real en B", pct: 65 }, { t: "Fake para ir a A por mid", pct: 35 }],
        responses: [{ t: "Retrasar con utilidad y rotar a 1 de mid hacia B", ok: true, why: "Con pasos de 3 personas es muy probable que vayan B; mid es el rotador más cercano." }, { t: "Rotar todos desde A", ok: false, why: "Si es fake, A cae gratis." }] }
    ]
  },
  // ------------------------------------------------------------- ASCENT
  {
    id: "ascent", name: "Ascent", sites: "A · B", color: "#d9b26f",
    desc: "Mapa de control de mid. Quien gana Mid (Market/Catwalk) decide la ronda. Puertas mecánicas en A y B que se pueden cerrar.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Omen", "Jett", "Sova", "Killjoy", "KAY/O"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 57.3, "pick": 5.1, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Jett", "Sova", "Killjoy", "Fade"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 56.5, "pick": 4.2, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Omen", "Jett", "Sova", "Cypher", "KAY/O"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 55.8, "pick": 3.4, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "Control de Mid → split A", type: "Default", steps: ["2 jugadores toman Mid con dardo de Sova en Catwalk.", "1 lurk en B main para fijar rotaciones.", "Mid empuja a Tree/Garden mientras 2 presionan A main.", "Humo en Heaven y Tree, flash y entrada cruzada."], tip: "Si Mid cae rápido, el defensor de B no podrá rotar por Market sin ser visto." },
      { name: "B Rush con KAY/O", type: "Execute", steps: ["Cuchillo de KAY/O en B main al salir.", "Humos en Market y CT.", "Flash y entrada a site; uno revisa Boathouse.", "Plantar detrás de la caja default y jugar desde Main/Lane."], tip: "Ideal tras perder 2 rondas en Mid: rompe el ritmo del rival." }
    ],
    defense: [
      { name: "2-1-2 con KJ en B", type: "Setup", steps: ["Killjoy sola en B (torreta en Lane, nanoswarms en default).", "Cypher/Sova + 1 en A.", "Omen y duelista pelean Mid desde Market/Pizza.", "Si pierdes Mid, cae a Market y avisa; no te quedes."], tip: "Cierra la puerta de B cuando escuches el rush." },
      { name: "Stack A en retake", type: "Retake", steps: ["Cuando A cae, juntad 3 en CT y 2 por Market/Tree.", "Dardo de Sova a site, flash de KAY/O.", "Entrada simultánea por los dos lados."], tip: "Nunca entréis en goteo; contad 3-2-1 y entrad juntos." }
    ],
    scenarios: [
      { side: "Ataque", title: "Ganamos Mid temprano", situation: "Minuto 1:20. Hemos matado al jugador de Catwalk y tenemos 2 jugadores en Mid (Market controlado). A main está en silencio.",
        enemy: [{ t: "El rival de B rota a Market para retomar Mid", pct: 45 }, { t: "Los de A se repliegan a Heaven/CT esperando", pct: 35 }, { t: "Hacen un push agresivo a Mid", pct: 20 }],
        responses: [{ t: "Ejecutar A por Tree + A main ya, antes de que llegue la rotación", ok: true, why: "Tienes ventaja numérica y posicional; cada segundo que esperes es una rotación más." }, { t: "Quedarnos en Mid a ver qué pasa", ok: false, why: "Regalas tiempo para que se reorganicen; el control de Mid solo vale si lo usas." }, { t: "Rotar todos a B", ok: false, why: "Pierdes el control ganado y llegas a B tarde con la defensa ya rotada." }] },
      { side: "Defensa", title: "Escuchamos utilidad en A main", situation: "Ruido de pasos y un dardo de Sova en A main a 1:30. B está en silencio.",
        enemy: [{ t: "Es un fake, 3-4 atacantes van a B o Mid", pct: 40 }, { t: "Es un execute real a A", pct: 45 }, { t: "Es un lurk de 1-2 jugadores", pct: 15 }],
        responses: [{ t: "Retrasar en A con utilidad y que solo 1 rote a mitad de camino (Market)", ok: true, why: "Cubres ambas opciones sin abandonar B; confirmas cuántos hay antes de rotar todos." }, { t: "Rotar todo el equipo a A", ok: false, why: "En Oro el fake es muy común; si es fake, B queda vacío." }, { t: "Ignorarlo y no mover a nadie", ok: false, why: "Si es real, A cae 3v2 sin ayuda." }] },
      { side: "Ataque", title: "Post-plant en A", situation: "Hemos plantado en A (default) 4v3. Los defensores tienen 2 en CT y 1 desconocido.",
        enemy: [{ t: "Retake desde CT + Heaven juntos", pct: 50 }, { t: "Uno entra solo a buscar duelo", pct: 30 }, { t: "Esperan para el defuse fake/ninja", pct: 20 }],
        responses: [{ t: "Jugar crossfire desde A main, Tree y Garden y vigilar la spike", ok: true, why: "Obligas a que entren a tus ángulos; con mollys de post-plant cortas el defuse." }, { t: "Ir a buscarlos a CT", ok: false, why: "Pierdes la ventaja de posición y regalas picks." }, { t: "Todos en el site encima de la spike", ok: false, why: "Una sola granada o ult os barre a todos." }] }
    ]
  },
  // ------------------------------------------------------------- BIND
  {
    id: "bind", name: "Bind", sites: "A · B", color: "#c98a5a",
    desc: "Sin mid. Dos teletransportadores conectan A Short y B Short. Rotaciones lentas para la defensa y mucha importancia de Hookah (B) y Showers (A).",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Brimstone", "Raze", "Skye", "Sage", "Fade"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 57.0, "pick": 5.0, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Raze", "Fade", "Sage", "Gekko"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 56.2, "pick": 4.0, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Brimstone", "Raze", "Skye", "Cypher", "Fade"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 55.5, "pick": 3.3, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "Control de Hookah → B", type: "Default", steps: ["Viper muro bloqueando visión de B site desde Hookah.", "Raze satchel o granada a Hookah.", "Toma de Hookah con 2 jugadores, resto en Long.", "Ejecución B: humo en Elbow y CT, entrada por Hookah y Long a la vez."], tip: "Hookah es la llave del mapa en ataque." },
      { name: "A Showers execute", type: "Execute", steps: ["Humos de Brimstone en Heaven y Truck.", "Molly en Lamps/esquina.", "Flash de Skye y entrada por Showers + Short.", "Plantar en default y jugar desde Lamps."], tip: "Usa el TP para fakear B después del execute." }
    ],
    defense: [
      { name: "Stack retrasador 2-3", type: "Setup", steps: ["2 jugadores en A (Showers + Short).", "Cypher con trap en Hookah, Viper en B.", "Duelista juega retake o agresivo en Long B.", "Rotar por CT, nunca por TP salvo emergencia."], tip: "Los TP son ruidosos: úsalos solo para retakes rápidos." }
    ],
    scenarios: [
      { side: "Ataque", title: "Hemos tomado Hookah", situation: "Minuto 1:10. Ganamos Hookah sin bajas. B long también controlado.",
        enemy: [{ t: "Rota 1-2 jugadores desde A por CT", pct: 50 }, { t: "Usan el TP para flanquear por A Short", pct: 25 }, { t: "Retroceden y esperan retake", pct: 25 }],
        responses: [{ t: "Ejecutar B inmediatamente con humo en CT", ok: true, why: "Cortas la rotación por CT; el TP de A queda lejos." }, { t: "Esperar a 0:40 para ver rotaciones", ok: false, why: "Les das tiempo a llegar desde A por CT." }, { t: "Mandar a todos por TP a A", ok: false, why: "Desperdicias el control de Hookah." }] },
      { side: "Defensa", title: "Escuchamos el TP de A", situation: "Juegas B. Se oye el teletransportador de A (en A Short): alguien acaba de salir por el de B, junto a B Long, a 1:00.",
        enemy: [{ t: "Es un jugador que viene a B a flanquear", pct: 55 }, { t: "Es un fake para mover rotaciones", pct: 45 }],
        responses: [{ t: "Tu compañero vigila la salida del TP, tú mantienes Hookah/Long", ok: true, why: "No abandonas tu posición, pero cubres la amenaza nueva." }, { t: "Correr todos a la salida del TP", ok: false, why: "Dejas Hookah y Long abiertos; el TP es muy usado para fakes." }] }
    ]
  },
  // ------------------------------------------------------------- BREEZE
  {
    id: "breeze", name: "Breeze", sites: "A · B", color: "#4fb3a6",
    desc: "Mapa abierto con líneas largas. Los Operators y Viper son claves. Mid conecta con Hall, Window y Cave.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Viper", "Jett", "Sova", "Killjoy", "KAY/O"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 57.5, "pick": 5.5, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Jett", "Sova", "Cypher", "KAY/O"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 56.8, "pick": 4.2, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Viper", "Chamber", "Sova", "Killjoy", "KAY/O"], "why": "Reparto: 1 controlador, 2 centinelas, 2 iniciadores.", "wr": 56.0, "pick": 3.5, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "A Hall + Cave", type: "Execute", steps: ["Viper muro de Mid a A Hall.", "Sova dardo a A site.", "Entrada por Cave y Hall a la vez con flash.", "Plantar detrás del triángulo."], tip: "Los ángulos de Pyramids requieren flash o drone." },
      { name: "B main rápido", type: "Execute", steps: ["Humos en B Back y Elbow.", "Flash de KAY/O sobre B main.", "Dos entran a pilar, uno a Back."], tip: "B es pequeño: si llegan tarde, se planta rápido." }
    ],
    defense: [
      { name: "Operator en Mid + ancla A", type: "Setup", steps: ["Jett con Operator en Mid/Nest.", "Cypher trap en Cave/B main.", "Viper rotadora en A."], tip: "El operator gana info gratis; tras cada pick reposiciónate." }
    ],
    scenarios: [
      { side: "Defensa", title: "Pick de Operator en Mid", situation: "Matamos a 1 atacante en Mid con el Operator a 1:35. 5v4.",
        enemy: [{ t: "Evitan Mid y van a B main", pct: 45 }, { t: "Ejecutan A por Hall", pct: 35 }, { t: "Vuelven a pelear Mid con humos", pct: 20 }],
        responses: [{ t: "Reposicionar el Operator y no repetir el mismo ángulo", ok: true, why: "Ya saben dónde estás; repetir el ángulo es morir. 5v4: juega pasivo." }, { t: "Avanzar a buscar más picks en Mid", ok: false, why: "Con ventaja numérica, arriesgar el Operator es el error clásico." }] },
      { side: "Ataque", title: "Defensores agresivos en A Hall", situation: "Hemos perdido 2 rondas por pushes en A Hall a 1:30.",
        enemy: [{ t: "Repetirán el push en Hall", pct: 60 }, { t: "Cambian a jugar pasivo", pct: 40 }],
        responses: [{ t: "Montar crossfire en Hall con trap/utilidad y esperar el push", ok: true, why: "En Oro los equipos repiten lo que les funciona; castígalo." }, { t: "Volver a entrar por Hall igual", ok: false, why: "Haces exactamente lo que esperan." }] }
    ]
  },
  // ------------------------------------------------------------- CORRODE
  {
    id: "corrode", name: "Corrode", sites: "A · B", color: "#8e9bb0",
    desc: "Mapa de dos sites con un mid central que conecta ambos lados. Usa este plan como base y ajústalo a los callouts que veas en partida.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Viper", "Waylay", "Gekko", "Deadlock", "Clove"], "why": "Reparto: 2 controladores, 1 duelista, 1 iniciador, 1 centinela.", "wr": 56.5, "pick": 4.0, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Neon", "Gekko", "Deadlock", "Viper"], "why": "Reparto: 2 controladores, 1 duelista, 1 iniciador, 1 centinela.", "wr": 55.8, "pick": 3.3, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Viper", "Raze", "Fade", "Deadlock", "Clove"], "why": "Reparto: 2 controladores, 1 duelista, 1 iniciador, 1 centinela.", "wr": 55.2, "pick": 2.7, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "Default lento con info de mid", type: "Default", steps: ["Info temprana con dron/dardo en mid.", "Un jugador por site para fijar defensores.", "Agrupar hacia el site con menos resistencia a 0:50."], tip: "No ejecutes sin saber dónde está el centinela." },
      { name: "Execute B", type: "Execute", steps: ["Humos en las líneas de CT y conectores.", "Flash + revelado.", "Entrada en pareja, plantar en zona segura."], tip: "Planta donde podáis defender desde fuera del site." }
    ],
    defense: [
      { name: "2-1-2 clásico", type: "Setup", steps: ["Centinela anclando un site.", "Mid controlado por 1 jugador con utilidad de info.", "Rotador con humos/flash para retake."], tip: "Retrasa con utilidad; no mueras por info." }
    ],
    scenarios: [
      { side: "Defensa", title: "Perdemos al jugador de mid", situation: "Muere nuestro jugador de mid a 1:25 sin trade.",
        enemy: [{ t: "Usan mid para dividir el site", pct: 55 }, { t: "Rotan todos al site más débil", pct: 30 }, { t: "Siguen en default", pct: 15 }],
        responses: [{ t: "Avisar y que un rotador se coloque cubriendo la salida de mid", ok: true, why: "Mid caído = split inminente; tapa la salida antes de que llegue." }, { t: "Retomar mid solo", ok: false, why: "Duelo 1v2 con desventaja; regalas otra baja." }] }
    ]
  },
  // ------------------------------------------------------------- HAVEN
  {
    id: "haven", name: "Haven", sites: "A · B · C", color: "#c7a25a",
    desc: "Tres sites: la defensa está siempre dispersa. Garage (C) y A Long son las zonas calientes. Mid (B) es pequeño y rápido.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Omen", "Jett", "Sova", "Killjoy", "Breach"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 56.8, "pick": 4.6, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Jett", "Sova", "Killjoy", "Gekko"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 56.0, "pick": 3.8, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Omen", "Jett", "Breach", "Killjoy", "Gekko"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 55.3, "pick": 3.1, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "Garage → C", type: "Execute", steps: ["Toma de Garage con Breach.", "Humos en C Link y CT.", "Entrada C Long + Garage a la vez.", "Plantar en default C."], tip: "Desde Garage cortas la rotación de B." },
      { name: "A Long / A Short", type: "Execute", steps: ["Sova dardo a A site.", "Humos en Heaven y Link.", "Breach stun a Long.", "Entrada por Long y Lobby/Short."], tip: "A es el site más fácil de retakear: planta y juega fuera." }
    ],
    defense: [
      { name: "2-1-2", type: "Setup", steps: ["2 en A, 1 en B, 2 en C (uno en Garage).", "B rota a donde haya pelea.", "Retrasa siempre con utilidad en C Long."], tip: "Con 3 sites, la info lo es todo: usa traps y alarmas." }
    ],
    scenarios: [
      { side: "Ataque", title: "Ganamos Garage", situation: "Garage es nuestro a 1:15. El defensor de B no ha aparecido.",
        enemy: [{ t: "B rota a C por Link", pct: 45 }, { t: "Retroceden a C site para retake", pct: 35 }, { t: "Atacan Garage para recuperarlo", pct: 20 }],
        responses: [{ t: "Ejecutar C ya con humo en Link", ok: true, why: "Garage controlado + Link humeado = C aislado." }, { t: "Rotar desde Garage a B", ok: false, why: "Abandonas la ventaja; mejor usarla en C." }] },
      { side: "Defensa", title: "Cae A Long", situation: "Perdemos el duelo de A Long a 1:30.",
        enemy: [{ t: "Ejecución real en A", pct: 60 }, { t: "Toman Long y rotan a C por Mid", pct: 40 }],
        responses: [{ t: "B rota a A Link, C se queda", ok: true, why: "Refuerzas A con el más cercano sin abrir C." }, { t: "Rotar todos de C a A", ok: false, why: "C queda gratis; el rotate es demasiado largo." }] }
    ]
  },
  // ------------------------------------------------------------- ICEBOX
  {
    id: "icebox", name: "Icebox", sites: "A · B", color: "#7fc4e8",
    desc: "Mapa vertical con muchas cajas. B Yellow, Kitchen y A Belt/Nest son posiciones clave.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Viper", "Jett", "Sova", "Sage", "Killjoy"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 57.0, "pick": 5.2, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Jett", "Sova", "Sage", "Killjoy"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 56.2, "pick": 4.1, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Viper", "Jett", "Sova", "Sage", "Cypher"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 55.5, "pick": 3.3, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "B Yellow execute", type: "Execute", steps: ["Viper muro de B Yellow a site.", "Humo en Kitchen/Snowman.", "Dardo a Back.", "Plantar detrás del muro."], tip: "El muro de Viper permite plantar casi sin exposición." }
    ],
    defense: [
      { name: "Kitchen + A Nest", type: "Setup", steps: ["Killjoy en B con nanoswarms en spike default.", "Jugador en Kitchen.", "2 en A (Nest + Rafters)."], tip: "Los nanoswarms de spot de plant son oro en Icebox." }
    ],
    scenarios: [
      { side: "Defensa", title: "Viper wall en B", situation: "Se levanta el muro de Viper en B a 1:20.",
        enemy: [{ t: "Ejecutan B de verdad", pct: 70 }, { t: "Fake para ir a A", pct: 30 }],
        responses: [{ t: "Retrasar con utilidad desde Kitchen y pedir 1 rotación", ok: true, why: "La Viper rara vez gasta muro solo para fakear en Oro." }, { t: "Ir al muro y pelear de cerca", ok: false, why: "El muro oculta posiciones; mueres sin info." }] }
    ]
  },
  // ------------------------------------------------------------- LOTUS
  {
    id: "lotus", name: "Lotus", sites: "A · B · C", color: "#a8c47a",
    desc: "Tres sites con puertas giratorias (ruidosas) y muros rompibles en A. Rotaciones rápidas para la defensa.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Omen", "Raze", "Fade", "Killjoy", "Gekko"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 56.8, "pick": 4.6, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Raze", "Fade", "Killjoy", "Gekko"], "why": "Reparto: 1 controlador, 1 duelista, 2 iniciadores, 1 centinela.", "wr": 56.0, "pick": 3.8, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Miks", "Neon", "Fade", "Killjoy", "Sage"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 55.3, "pick": 3.1, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "A main + Rubble", type: "Execute", steps: ["Fade ojo a A site.", "Humos en Tree y Top.", "Raze satchel por Rubble.", "Entrada simultánea A main + Rubble."], tip: "Rompe el muro de A si el rival juega Tree." },
      { name: "C Mound rápido", type: "Execute", steps: ["Viper muro de C.", "Humos en Hall y Bend.", "Entrada por Mound."], tip: "C es lejos de A: ejecuta rápido." }
    ],
    defense: [
      { name: "Info por puertas", type: "Setup", steps: ["Trap en A main y C main.", "Escucha puertas giratorias para leer rotaciones.", "Juega retake en B."], tip: "La puerta giratoria delata cualquier rotación." }
    ],
    scenarios: [
      { side: "Ataque", title: "Escuchamos la puerta de A a B", situation: "Hemos hecho ruido en A main a 1:20 y se oye la puerta giratoria.",
        enemy: [{ t: "Un defensor de B rota a A", pct: 60 }, { t: "Es un defensor que viene a flanquear", pct: 40 }],
        responses: [{ t: "Ejecutar B o C (el site débil) rápido", ok: true, why: "La puerta confirmó la rotación: castiga el site que se ha vaciado." }, { t: "Seguir en A esperando", ok: false, why: "A ya tiene refuerzos." }] }
    ]
  },
  // ------------------------------------------------------------- SPLIT
  {
    id: "split", name: "Split", sites: "A · B", color: "#d88b8b",
    desc: "Mapa urbano estrecho con mucha verticalidad (Heaven, Ramps, Mail). Mid (Vents/Mail) permite dividir los sites.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Omen", "Raze", "Breach", "Cypher", "Sage"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 56.8, "pick": 4.8, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Clove", "Raze", "Skye", "Cypher", "Sage"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 56.2, "pick": 3.9, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Omen", "Neon", "Breach", "Cypher", "Sage"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 55.5, "pick": 3.2, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "Mid → A split", type: "Execute", steps: ["Toma de Mid/Mail.", "Humos en Heaven y CT.", "Entrada A main + Ramps.", "Planta en default A."], tip: "Desde Mail controlas la rotación." },
      { name: "B Garage rush", type: "Execute", steps: ["Humos en B Heaven y CT.", "Satchel de Raze a B.", "Entrada a site."], tip: "La entrada a B es estrecha: utilidad, no aim." }
    ],
    defense: [
      { name: "Mid agresivo", type: "Setup", steps: ["Viper/duelista pelean Mid.", "Cypher en B.", "Sage en A Ramps."], tip: "Si pierdes Mid, retrasa con humos." }
    ],
    scenarios: [
      { side: "Defensa", title: "Perdemos Mid (Mail)", situation: "Muere el jugador de Mid a 1:35.",
        enemy: [{ t: "Split a A por Ramps + Main", pct: 55 }, { t: "B por Mid y Garage", pct: 30 }, { t: "Lurk en Mid", pct: 15 }],
        responses: [{ t: "Humo en Ramps y A Heaven se refuerza", ok: true, why: "Retrasas el split más común." }, { t: "Retomar Mid uno solo", ok: false, why: "1v2 contra quien ya ganó Mid." }] }
    ]
  },
  // ------------------------------------------------------------- SUMMIT
  {
    id: "summit", name: "Summit", sites: "A · B", color: "#b0d4e0",
    desc: "Mapa grande de tres carriles con mid central (Mid Top, Fountain, Tiles) que conecta con A Link y B Link. Tiene muros que se pueden bajar y que cambian las rotaciones.",
    comps: [
      { name: "Composición equilibrada", agents: ["Jett", "Sova", "KAY/O", "Omen", "Cypher"], why: "Mapa grande: Sova da info a distancia, Omen humea rápido en cualquier lado y Cypher vigila los Links." },
      { name: "Alternativa", agents: ["Neon", "Fade", "Breach", "Viper", "Killjoy"], why: "Neon cruza los carriles largos rápido; Viper corta líneas grandes con su muro." }
    ],
    attack: [
      { name: "Mid → A Link", type: "Default", steps: ["Toma de Mid Top / Fountain con info de Sova.", "Uno presiona B para fijar defensores.", "Mid empuja a A Link mientras 2 entran por Garden.", "Humo en CT y A Site, flash y entrada por A Main + A Link."], tip: "Con mid tuyo, cortas la rotación por los dos Links." },
      { name: "B Execute", type: "Execute", steps: ["Humos en CT y B Link.", "Flash sobre B Site y B Tower.", "Entrada en pareja por B Main, uno limpia B Tower.", "Plantar y jugar fuera del site (B Main / B Lobby)."], tip: "Vigila si bajan muros: cambian el tiempo de rotación de la defensa." }
    ],
    defense: [
      { name: "2-1-2 con muros", type: "Setup", steps: ["Centinela anclando B.", "Un jugador en mid controlando los Links.", "2 en A (A Site y A Garden).", "Usa los muros para cerrar la rotación del ataque, no la tuya."], tip: "Mapa grande = rotaciones largas; retrasa con utilidad antes de pedir ayuda." }
    ],
    scenarios: [
      { side: "Defensa", title: "Perdemos mid", situation: "A 1:30 muere nuestro jugador de Mid Top sin trade.",
        enemy: [{ t: "Usan A Link o B Link para dividir un site", pct: 60 }, { t: "Siguen en default y esperan", pct: 25 }, { t: "Rotan todos a un site", pct: 15 }],
        responses: [{ t: "Avisar y cubrir la salida de ambos Links con un rotador por site", ok: true, why: "Sin mid el split es lo más común; tapar los Links frena el ataque cruzado." }, { t: "Retomar mid solo", ok: false, why: "Pelearías 1v2 contra quien ya ganó la posición." }] },
      { side: "Ataque", title: "Bajan un muro cerca de B", situation: "A 1:15 los defensores bajan un muro que cambia la ruta hacia B.",
        enemy: [{ t: "Están cerrando nuestra entrada y reforzando B", pct: 55 }, { t: "Preparan una rotación rápida a A", pct: 45 }],
        responses: [{ t: "Cambiar a A por mid / A Link", ok: true, why: "Si gastan tiempo y mecánica en B, A queda más débil." }, { t: "Forzar B igualmente", ok: false, why: "Entras justo donde se han preparado." }] }
    ]
  },
  // ------------------------------------------------------------- SUNSET
  {
    id: "sunset", name: "Sunset", sites: "A · B", color: "#e89a5a",
    desc: "Mapa compacto con mid (Courtyard) fuerte. Rotaciones cortas para la defensa. A Main y B Market son entradas.",
    comps: [
      {"name": "#1 según ValoHub", "agents": ["Clove", "Neon", "Gekko", "Cypher", "Phoenix"], "why": "Reparto: 1 controlador, 2 duelistas, 1 iniciador, 1 centinela.", "wr": 57.2, "pick": 4.8, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#2 según ValoHub", "agents": ["Omen", "Neon", "Gekko", "Cypher", "Sage"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 56.4, "pick": 3.9, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"},
      {"name": "#3 según ValoHub", "agents": ["Clove", "Phoenix", "Gekko", "Cypher", "Sage"], "why": "Reparto: 1 controlador, 1 duelista, 1 iniciador, 2 centinelas.", "wr": 55.6, "pick": 3.2, "source": "valohub.co/es-ES/meta/comps · revisado 28/05/2026 (parche 12.10)"}
    ],
    attack: [
      { name: "Mid → B", type: "Execute", steps: ["Toma de Mid Courtyard.", "Humos en B Market y CT.", "Entrada B main + Mid."], tip: "Mid ganado parte el mapa." },
      { name: "A Main", type: "Execute", steps: ["Humos en Elbow y CT.", "Flash y entrada.", "Wingman planta."], tip: "Gekko planta sin riesgo." }
    ],
    defense: [
      { name: "Mid fuerte", type: "Setup", steps: ["2 en Mid.", "Cypher B.", "Sentinel o 1 en A."], tip: "Mid ganado = retakes rápidos." }
    ],
    scenarios: [
      { side: "Ataque", title: "Retrasan en A Main", situation: "Atacamos A main a 1:20 y vemos utilidad defensiva y 2 defensores.",
        enemy: [{ t: "Rotan 1-2 desde B", pct: 50 }, { t: "Se quedan 2 en A", pct: 50 }],
        responses: [{ t: "Ir por Mid a B", ok: true, why: "Si A es fuerte, B estará débil." }, { t: "Forzar A con todo", ok: false, why: "Pierdes contra la utilidad y la rotación." }] }
    ]
  }
];
