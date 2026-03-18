// ============================================================
// TODOJUEGOSINFO.COM — Data Layer v2
// ============================================================

const GAMES = [
  { id:'fortnite',        name:'Fortnite',             Image: '/assets/fortnite.jpg', cat:'videojuego', sub:'Battle Royale',   platform:['PC','PS5','Xbox','Switch'], color:'#00d4ff', vol:246000, articles:16,
    desc:'El battle royale más popular del mundo. Construye, dispara y sé el último en pie en partidas épicas de 100 jugadores.' },
  { id:'minecraft',       name:'Minecraft',            Image: '/assets/minecraft.jpg', cat:'videojuego', sub:'Sandbox',          platform:['PC','PS5','Xbox','Switch'], color:'#70c542', vol:246000, articles:16,
    desc:'Construye mundos infinitos bloque a bloque. Creatividad sin límites, supervivencia y aventura en un universo pixelado.' },
  { id:'gta-v',           name:'GTA V',                Image: '/assets/gta-v.jpg', cat:'videojuego', sub:'Mundo Abierto',    platform:['PC','PS5','Xbox'],          color:'#f7b731', vol:246000, articles:16,
    desc:'El mundo abierto más épico de todos los tiempos. Crimen, velocidad, humor negro y libertad total en Los Santos.' },
  { id:'call-of-duty',    name:'Call of Duty',         Image: '/assets/call-of-duty.jpg', cat:'videojuego', sub:'FPS',              platform:['PC','PS5','Xbox'],          color:'#a8323c', vol:246000, articles:16,
    desc:'El shooter bélico más icónico. Partidas frenéticas, modo Warzone y campaña cinematográfica. El rey del multiplayer.' },
  { id:'roblox',          name:'Roblox',               Image: '/assets/roblox.jpg', cat:'videojuego', sub:'Sandbox',          platform:['PC','Mobile','Xbox'],       color:'#e03c3c', vol:246000, articles:14,
    desc:'Millones de juegos dentro de un juego. Crea tu propio mundo virtual, juega con amigos y domina el universo Roblox.' },
  { id:'the-last-of-us',  name:'The Last of Us',       Image: '/assets/the-last-of-us.jpg', cat:'videojuego', sub:'Aventura',         platform:['PS5','PC'],                 color:'#6b9e3e', vol:246000, articles:14,
    desc:'Una historia postapocalíptica que te romperá el corazón. Obra maestra absoluta del videojuego moderno.' },
  { id:'fifa',            name:'EA Sports FC 25',      Image: '/assets/fifa.jpg', cat:'videojuego', sub:'Deportes',         platform:['PC','PS5','Xbox','Switch'], color:'#1d3c8a', vol:246000, articles:14,
    desc:'El fútbol virtual más completo. Ultimate Team, Career Mode, VOLTA y más. La experiencia futbolística definitiva.' },
  { id:'valorant',        name:'Valorant',             Image: '/assets/valorant.jpg', cat:'videojuego', sub:'FPS Táctico',      platform:['PC'],                       color:'#ff4655', vol:246000, articles:14,
    desc:'Táctica y habilidad al máximo nivel. Elige tu agente, domina el mapa y lleva a tu equipo a la victoria.' },
  { id:'league-of-legends',name:'League of Legends',  Image: '/assets/league-of-legends.jpg', cat:'videojuego', sub:'MOBA',             platform:['PC'],                       color:'#c79b3b', vol:246000, articles:14,
    desc:'El MOBA más jugado del planeta. 160+ campeones, estrategia profunda y partidas que duran más en tu memoria que en el reloj.' },
  { id:'counter-strike',  name:'Counter-Strike 2',    Image: '/assets/counter-strike.jpg', cat:'videojuego', sub:'FPS',              platform:['PC'],                       color:'#f5a623', vol:246000, articles:14,
    desc:'El clásico eterno de los shooters competitivos. CS2 más vivo que nunca: graficas renovadas, mismo ADN ganador.' },
  { id:'apex-legends',    name:'Apex Legends',         Image: '/assets/apex-legends.jpg', cat:'videojuego', sub:'Battle Royale',   platform:['PC','PS5','Xbox'],          color:'#cd2b2b', vol:135000, articles:10,
    desc:'Battle royale de héroes con habilidades únicas. Velocidad extrema, estrategia de escuadra y combate fluido.' },
  { id:'rocket-league',   name:'Rocket League',        Image: '/assets/rocket-league.jpg', cat:'videojuego', sub:'Deportes',         platform:['PC','PS5','Xbox','Switch'], color:'#0099cc', vol:110000, articles:10,
    desc:'Fútbol con coches cohete. Simple de aprender, años para dominar. El juego más adictivo que probarás.' },
  { id:'elden-ring',      name:'Elden Ring',           Image: '/assets/elden-ring.jpg', cat:'videojuego', sub:'RPG / Soulslike',  platform:['PC','PS5','Xbox'],          color:'#c9a84c', vol:135000, articles:10,
    desc:'El soulslike que conquistó el mundo. Dificultad legendaria, mundo épico diseñado por Miyazaki y George R.R. Martin.' },
  { id:'god-of-war',      name:'God of War',           Image: '/assets/god-of-war.jpg', cat:'videojuego', sub:'Acción RPG',       platform:['PS5','PC'],                 color:'#b02020', vol:110000, articles:10,
    desc:'Kratos y Atreus en una aventura mítica nórdica. Narrativa profunda y combate brutal de otro nivel.' },
  { id:'zelda',           name:'The Legend of Zelda',  Image: '/assets/zelda.jpg', cat:'videojuego', sub:'Aventura',         platform:['Switch'],                   color:'#30b832', vol:135000, articles:10,
    desc:'Link y Zelda en aventuras épicas. La saga de Nintendo que define el género de aventura y exploración.' },
  { id:'super-mario',     name:'Super Mario',          Image: '/assets/super-mario.jpg', cat:'videojuego', sub:'Plataformas',      platform:['Switch'],                   color:'#e52020', vol:135000, articles:10,
    desc:'El fontanero más famoso del mundo. Plataformas clásicas reinventadas con alegría, desafío y creatividad.' },
  { id:'among-us',        name:'Among Us',             Image: '/assets/among-us.jpg', cat:'videojuego', sub:'Party / Social',   platform:['PC','Mobile','Switch'],     color:'#c61414', vol:90500,  articles:8,
    desc:'El juego de engaño y deducción más viral de la historia. ¿Quién es el impostor? Descúbrelo antes de que sea tarde.' },
  { id:'hollow-knight',   name:'Hollow Knight',        Image: '/assets/hollow-knight.jpg', cat:'videojuego', sub:'Indie Metroidvania',platform:['PC','Switch','PS5'],       color:'#7b68ee', vol:74000,  articles:8,
    desc:'Un indie metroidvania oscuro y hermoso. Profundidad narrativa, exploración y desafío sin igual.' },
  { id:'resident-evil',   name:'Resident Evil',        Image: '/assets/resident-evil.jpg', cat:'videojuego', sub:'Survival Horror',  platform:['PC','PS5','Xbox'],          color:'#8b0000', vol:90500,  articles:8,
    desc:'El survival horror definitivo. Terror, tensión y acción desenfrenada. Biohazard en toda su gloria.' },
  { id:'cyberpunk-2077',  name:'Cyberpunk 2077',       Image: '/assets/cyberpunk-2077.jpg', cat:'videojuego', sub:'RPG / Mundo Abierto',platform:['PC','PS5','Xbox'],        color:'#fcee09', vol:110000, articles:10,
    desc:'Night City te espera. RPG de mundo abierto cyberpunk con V, Johnny Silverhand y elecciones que importan.' },
  // ── JUEGOS DE MESA ───────────────────────────────────────
  { id:'ajedrez',         name:'Ajedrez',              Image: '/assets/ajedrez.jpg', cat:'mesa',       sub:'Estrategia',       platform:['Mesa'],                     color:'#8b7355', vol:246000, articles:12,
    desc:'El rey de todos los juegos de estrategia. Miles de años de historia, profundidad infinita y 64 casillas llenas de posibilidades.' },
  { id:'monopoly',        name:'Monopoly',             Image: '/assets/monopoly.jpg', cat:'mesa',       sub:'Familiar',         platform:['Mesa'],                     color:'#e8392a', vol:135000, articles:10,
    desc:'El clásico de bienes raíces. Compra propiedades, construye hoteles y arruina económicamente a tus amigos con estilo.' },
  { id:'uno',             name:'UNO',                  Image: '/assets/uno.jpg', cat:'mesa',       sub:'Cartas',           platform:['Mesa','Digital'],           color:'#e63946', vol:110000, articles:8,
    desc:'El juego de cartas más jugado del mundo. Fácil de aprender, imposible de dejar. +4 sin misericordia.' },
  { id:'catan',           name:'Catan',                Image: '/assets/catan.jpg', cat:'mesa',       sub:'Estrategia',       platform:['Mesa','Digital'],           color:'#f4a261', vol:74000,  articles:8,
    desc:'Construye asentamientos, comercia recursos y domina la isla de Catán. El modern board game por excelencia.' },
  { id:'risk',            name:'Risk',                 Image: '/assets/risk.jpg', cat:'mesa',       sub:'Estrategia',       platform:['Mesa','Digital'],           color:'#1d3557', vol:60500,  articles:8,
    desc:'Conquista el mundo con tus ejércitos. El wargame familiar definitivo para noches largas de estrategia global.' },
  { id:'domino',          name:'Dominó',               Image: '/assets/domino.jpg', cat:'mesa',       sub:'Familiar',         platform:['Mesa'],                     color:'#3a3a3a', vol:90500,  articles:8,
    desc:'Ficha a ficha, estrategia y suerte se mezclan. Un clásico eterno de todas las generaciones hispanohablantes.' },
  { id:'scrabble',        name:'Scrabble',             Image: '/assets/scrabble.jpg', cat:'mesa',       sub:'Palabras',         platform:['Mesa','Digital'],           color:'#e9c46a', vol:60500,  articles:6,
    desc:'El juego de palabras por excelencia. Vocabulario, estrategia y puntuaciones épicas en un tablero de letras.' },
  { id:'truco',           name:'Truco',                Image: '/assets/truco.jpg', cat:'mesa',       sub:'Cartas',           platform:['Mesa','Digital'],           color:'#d62828', vol:135000, articles:10,
    desc:'El juego de cartas más popular de Argentina. Envido, truco, flor y señas en el pasatiempo rioplatense por excelencia.' },
  { id:'poker',           name:'Póker',                Image: '/assets/poker.jpg', cat:'mesa',       sub:'Cartas',           platform:['Mesa','Casino','Digital'],  color:'#2d6a4f', vol:246000, articles:12,
    desc:'El juego de cartas más famoso del mundo. Texas Hold\'em, bluffs épicos y manos ganadoras que se recuerdan para siempre.' },
  { id:'backgammon',      name:'Backgammon',           Image: '/assets/backgammon.jpg', cat:'mesa',       sub:'Estrategia',       platform:['Mesa','Digital'],           color:'#7b3f00', vol:49500,  articles:6,
    desc:'Uno de los juegos de mesa más antiguos conocidos. Dados, estrategia y suerte en un tablero clásico.' },
  { id:'jenga',           name:'Jenga',                Image: '/assets/jenga.jpg', cat:'mesa',       sub:'Habilidad',        platform:['Mesa'],                     color:'#a0522d', vol:74000,  articles:6,
    desc:'Extrae bloques de madera sin derribar la torre. Tensión al límite en cada turno. Juego de habilidad y nervios.' },
  { id:'carcassonne',     name:'Carcassonne',          Image: '/assets/carcassonne.jpg', cat:'mesa',       sub:'Estrategia',       platform:['Mesa','Digital'],           color:'#6a994e', vol:49500,  articles:6,
    desc:'Coloca losetas y construye el sur de Francia medieval. Estrategia accesible, profundidad sorprendente y adictiva.' },
  { id:'dixit',           name:'Dixit',                Image: '/assets/dixit.jpg', cat:'mesa',       sub:'Creativo',         platform:['Mesa'],                     color:'#9b5de5', vol:49500,  articles:6,
    desc:'Imaginación y poesía visual. El juego de cartas ilustradas que despierta tu creatividad y cuenta historias únicas.' },
];

const ARTICLES = [
  // FORTNITE
  {id:1, title:'Guía Completa de Fortnite 2026', keyword:'fortnite guía completa', vol:246000, gameId:'fortnite', type:'guia', readTime:12},
  {id:2, title:'Cómo Mejorar en Fortnite Rápidamente', keyword:'fortnite cómo mejorar', vol:135000, gameId:'fortnite', type:'tips', readTime:8},
  {id:3, title:'Trucos Avanzados en Fortnite', keyword:'fortnite trucos avanzados', vol:110000, gameId:'fortnite', type:'trucos', readTime:10},
  {id:4, title:'Configuración Ideal para Fortnite', keyword:'fortnite configuración ideal', vol:90500, gameId:'fortnite', type:'config', readTime:6},
  {id:5, title:'Cómo Subir de Nivel Rápido en Fortnite', keyword:'fortnite cómo subir nivel', vol:74000, gameId:'fortnite', type:'tips', readTime:7},
  {id:6, title:'Mejores Estrategias en Fortnite', keyword:'fortnite mejores estrategias', vol:60500, gameId:'fortnite', type:'estrategia', readTime:9},
  {id:7, title:'Errores Comunes en Fortnite que Debes Evitar', keyword:'fortnite errores comunes', vol:49500, gameId:'fortnite', type:'tips', readTime:7},
  {id:8, title:'Secretos Ocultos de Fortnite', keyword:'fortnite secretos ocultos', vol:246000, gameId:'fortnite', type:'secretos', readTime:11},
  {id:9, title:'Consejos para Principiantes en Fortnite', keyword:'fortnite consejos para principiantes', vol:135000, gameId:'fortnite', type:'beginner', readTime:8},
  {id:10, title:'Cómo Ganar Siempre en Fortnite', keyword:'fortnite cómo ganar siempre', vol:110000, gameId:'fortnite', type:'estrategia', readTime:10},
  // MINECRAFT
  {id:11, title:'Guía Completa de Minecraft para Todos los Modos', keyword:'minecraft guía completa', vol:90500, gameId:'minecraft', type:'guia', readTime:15},
  {id:12, title:'Cómo Mejorar en Minecraft: Técnicas Clave', keyword:'minecraft cómo mejorar', vol:74000, gameId:'minecraft', type:'tips', readTime:8},
  {id:13, title:'Trucos Avanzados de Minecraft', keyword:'minecraft trucos avanzados', vol:60500, gameId:'minecraft', type:'trucos', readTime:10},
  {id:14, title:'Configuración Óptima para Minecraft', keyword:'minecraft configuración ideal', vol:49500, gameId:'minecraft', type:'config', readTime:6},
  {id:15, title:'Cómo Avanzar Rápido en Minecraft', keyword:'minecraft cómo subir nivel', vol:246000, gameId:'minecraft', type:'tips', readTime:9},
  {id:16, title:'Mejores Estrategias de Supervivencia en Minecraft', keyword:'minecraft mejores estrategias', vol:135000, gameId:'minecraft', type:'estrategia', readTime:12},
  {id:17, title:'Errores de Principiante en Minecraft', keyword:'minecraft errores comunes', vol:110000, gameId:'minecraft', type:'beginner', readTime:7},
  {id:18, title:'Secretos Ocultos de Minecraft que No Conocías', keyword:'minecraft secretos ocultos', vol:90500, gameId:'minecraft', type:'secretos', readTime:11},
  {id:19, title:'Minecraft para Principiantes: Todo lo que Necesitas', keyword:'minecraft consejos para principiantes', vol:74000, gameId:'minecraft', type:'beginner', readTime:10},
  {id:20, title:'Cómo Ganar en Minecraft: Guía Final', keyword:'minecraft cómo ganar siempre', vol:60500, gameId:'minecraft', type:'estrategia', readTime:9},
  // GTA V
  {id:21, title:'Guía Completa de GTA V: Todo el Mapa', keyword:'gta v guía completa', vol:49500, gameId:'gta-v', type:'guia', readTime:18},
  {id:22, title:'Cómo Mejorar en GTA V Online', keyword:'gta v cómo mejorar', vol:246000, gameId:'gta-v', type:'tips', readTime:9},
  {id:23, title:'Trucos y Cheat Codes de GTA V', keyword:'gta v trucos avanzados', vol:135000, gameId:'gta-v', type:'trucos', readTime:8},
  {id:24, title:'Configuración Ideal para GTA V PC', keyword:'gta v configuración ideal', vol:110000, gameId:'gta-v', type:'config', readTime:7},
  {id:25, title:'Cómo Ganar Dinero Rápido en GTA V', keyword:'gta v cómo subir nivel', vol:90500, gameId:'gta-v', type:'tips', readTime:10},
  {id:26, title:'Mejores Estrategias para GTA Online', keyword:'gta v mejores estrategias', vol:74000, gameId:'gta-v', type:'estrategia', readTime:11},
  {id:27, title:'Errores que Arruinan tu Partida en GTA V', keyword:'gta v errores comunes', vol:60500, gameId:'gta-v', type:'tips', readTime:7},
  {id:28, title:'Secretos y Easter Eggs de GTA V', keyword:'gta v secretos ocultos', vol:49500, gameId:'gta-v', type:'secretos', readTime:12},
  {id:29, title:'GTA V para Principiantes: Guía de Inicio', keyword:'gta v consejos para principiantes', vol:246000, gameId:'gta-v', type:'beginner', readTime:9},
  {id:30, title:'Cómo Dominar GTA Online en 2026', keyword:'gta v cómo ganar siempre', vol:135000, gameId:'gta-v', type:'estrategia', readTime:13},
  // CALL OF DUTY
  {id:31, title:'Guía Completa de Call of Duty', keyword:'call of duty guía completa', vol:110000, gameId:'call-of-duty', type:'guia', readTime:14},
  {id:32, title:'Cómo Mejorar en Call of Duty Warzone', keyword:'call of duty cómo mejorar', vol:90500, gameId:'call-of-duty', type:'tips', readTime:9},
  {id:33, title:'Trucos Avanzados de Call of Duty', keyword:'call of duty trucos avanzados', vol:74000, gameId:'call-of-duty', type:'trucos', readTime:10},
  {id:34, title:'Configuración Pro en Call of Duty', keyword:'call of duty configuración ideal', vol:60500, gameId:'call-of-duty', type:'config', readTime:7},
  {id:35, title:'Mejores Estrategias en Warzone', keyword:'call of duty mejores estrategias', vol:246000, gameId:'call-of-duty', type:'estrategia', readTime:12},
  {id:36, title:'Secretos y Easter Eggs de COD', keyword:'call of duty secretos ocultos', vol:110000, gameId:'call-of-duty', type:'secretos', readTime:11},
  {id:37, title:'Call of Duty para Principiantes', keyword:'call of duty consejos para principiantes', vol:90500, gameId:'call-of-duty', type:'beginner', readTime:8},
  // ROBLOX
  {id:38, title:'Guía Completa de Roblox 2026', keyword:'roblox guía completa', vol:60500, gameId:'roblox', type:'guia', readTime:10},
  {id:39, title:'Trucos Avanzados en Roblox', keyword:'roblox trucos avanzados', vol:246000, gameId:'roblox', type:'trucos', readTime:9},
  {id:40, title:'Cómo Conseguir Robux Gratis', keyword:'roblox cómo subir nivel', vol:110000, gameId:'roblox', type:'tips', readTime:8},
  {id:41, title:'Mejores Juegos dentro de Roblox', keyword:'roblox mejores estrategias', vol:90500, gameId:'roblox', type:'tips', readTime:7},
  {id:42, title:'Secretos de Roblox que Pocos Conocen', keyword:'roblox secretos ocultos', vol:60500, gameId:'roblox', type:'secretos', readTime:10},
  {id:43, title:'Roblox para Principiantes: Guía Total', keyword:'roblox consejos para principiantes', vol:49500, gameId:'roblox', type:'beginner', readTime:9},
  // VALORANT
  {id:44, title:'Guía Completa de Valorant', keyword:'valorant guía completa', vol:246000, gameId:'valorant', type:'guia', readTime:14},
  {id:45, title:'Cómo Mejorar en Valorant', keyword:'valorant cómo mejorar', vol:135000, gameId:'valorant', type:'tips', readTime:9},
  {id:46, title:'Trucos Avanzados de Valorant', keyword:'valorant trucos avanzados', vol:110000, gameId:'valorant', type:'trucos', readTime:11},
  {id:47, title:'Configuración Pro en Valorant', keyword:'valorant configuración ideal', vol:90500, gameId:'valorant', type:'config', readTime:7},
  {id:48, title:'Mejores Agentes en Valorant 2026', keyword:'valorant mejores estrategias', vol:60500, gameId:'valorant', type:'estrategia', readTime:10},
  {id:49, title:'Valorant para Principiantes: Empieza Bien', keyword:'valorant consejos para principiantes', vol:135000, gameId:'valorant', type:'beginner', readTime:9},
  // LEAGUE OF LEGENDS
  {id:50, title:'Guía Completa de League of Legends', keyword:'league of legends guía completa', vol:246000, gameId:'league-of-legends', type:'guia', readTime:16},
  {id:51, title:'Trucos Avanzados de LoL', keyword:'league of legends trucos avanzados', vol:110000, gameId:'league-of-legends', type:'trucos', readTime:12},
  {id:52, title:'Mejores Estrategias en LoL', keyword:'league of legends mejores estrategias', vol:74000, gameId:'league-of-legends', type:'estrategia', readTime:11},
  {id:53, title:'LoL para Principiantes: Primeros Pasos', keyword:'league of legends consejos para principiantes', vol:110000, gameId:'league-of-legends', type:'beginner', readTime:10},
  // COUNTER STRIKE
  {id:54, title:'Guía Completa de Counter-Strike 2', keyword:'counter strike 2 guía completa', vol:246000, gameId:'counter-strike', type:'guia', readTime:14},
  {id:55, title:'Trucos de CS2 para Mejorar tu Aim', keyword:'counter strike 2 trucos avanzados', vol:110000, gameId:'counter-strike', type:'trucos', readTime:10},
  {id:56, title:'Configuración Ideal en CS2', keyword:'counter strike 2 configuración ideal', vol:90500, gameId:'counter-strike', type:'config', readTime:8},
  {id:57, title:'Estrategias Ganadoras en CS2', keyword:'counter strike 2 mejores estrategias', vol:74000, gameId:'counter-strike', type:'estrategia', readTime:11},
  // APEX
  {id:58, title:'Guía Completa de Apex Legends', keyword:'apex legends guía completa', vol:135000, gameId:'apex-legends', type:'guia', readTime:13},
  {id:59, title:'Trucos de Apex Legends para Ganar', keyword:'apex legends trucos avanzados', vol:90500, gameId:'apex-legends', type:'trucos', readTime:10},
  {id:60, title:'Apex para Principiantes: Todo Claro', keyword:'apex legends consejos para principiantes', vol:74000, gameId:'apex-legends', type:'beginner', readTime:9},
  // ROCKET LEAGUE
  {id:61, title:'Guía Completa de Rocket League', keyword:'rocket league guía completa', vol:110000, gameId:'rocket-league', type:'guia', readTime:12},
  {id:62, title:'Trucos y Mecánicas en Rocket League', keyword:'rocket league trucos avanzados', vol:74000, gameId:'rocket-league', type:'trucos', readTime:10},
  {id:63, title:'Configuración Pro en Rocket League', keyword:'rocket league configuración ideal', vol:60500, gameId:'rocket-league', type:'config', readTime:7},
  // ELDEN RING
  {id:64, title:'Guía Completa de Elden Ring', keyword:'elden ring guía completa', vol:135000, gameId:'elden-ring', type:'guia', readTime:20},
  {id:65, title:'Trucos y Builds en Elden Ring', keyword:'elden ring trucos avanzados', vol:110000, gameId:'elden-ring', type:'trucos', readTime:14},
  {id:66, title:'Secretos Ocultos de Elden Ring', keyword:'elden ring secretos ocultos', vol:90500, gameId:'elden-ring', type:'secretos', readTime:13},
  // GOD OF WAR
  {id:67, title:'Guía Completa de God of War Ragnarök', keyword:'god of war guía completa', vol:110000, gameId:'god-of-war', type:'guia', readTime:16},
  {id:68, title:'Trucos Avanzados de God of War', keyword:'god of war trucos avanzados', vol:90500, gameId:'god-of-war', type:'trucos', readTime:12},
  {id:69, title:'Secretos de God of War que Debes Ver', keyword:'god of war secretos ocultos', vol:74000, gameId:'god-of-war', type:'secretos', readTime:11},
  // ZELDA
  {id:70, title:'Guía Completa de Zelda: Tears of the Kingdom', keyword:'zelda guía completa', vol:135000, gameId:'zelda', type:'guia', readTime:18},
  {id:71, title:'Trucos y Secretos en Zelda', keyword:'zelda trucos avanzados', vol:90500, gameId:'zelda', type:'trucos', readTime:12},
  {id:72, title:'Zelda para Principiantes', keyword:'zelda consejos para principiantes', vol:74000, gameId:'zelda', type:'beginner', readTime:9},
  // SUPER MARIO
  {id:73, title:'Guía Completa de Super Mario Bros Wonder', keyword:'super mario guía completa', vol:135000, gameId:'super-mario', type:'guia', readTime:13},
  {id:74, title:'Trucos Secretos de Super Mario', keyword:'super mario trucos avanzados', vol:110000, gameId:'super-mario', type:'trucos', readTime:9},
  // AMONG US
  {id:75, title:'Guía Completa de Among Us', keyword:'among us guía completa', vol:90500, gameId:'among-us', type:'guia', readTime:10},
  {id:76, title:'Trucos de Among Us para Impostores', keyword:'among us trucos avanzados', vol:74000, gameId:'among-us', type:'trucos', readTime:8},
  // HOLLOW KNIGHT
  {id:77, title:'Guía Completa de Hollow Knight', keyword:'hollow knight guía completa', vol:74000, gameId:'hollow-knight', type:'guia', readTime:16},
  {id:78, title:'Trucos de Hollow Knight para Avanzar', keyword:'hollow knight trucos avanzados', vol:60500, gameId:'hollow-knight', type:'trucos', readTime:11},
  // RESIDENT EVIL
  {id:79, title:'Guía Completa de Resident Evil Village', keyword:'resident evil guía completa', vol:90500, gameId:'resident-evil', type:'guia', readTime:15},
  {id:80, title:'Trucos de Resident Evil', keyword:'resident evil trucos avanzados', vol:74000, gameId:'resident-evil', type:'trucos', readTime:10},
  // CYBERPUNK
  {id:81, title:'Guía Completa de Cyberpunk 2077 Phantom Liberty', keyword:'cyberpunk 2077 guía completa', vol:110000, gameId:'cyberpunk-2077', type:'guia', readTime:18},
  {id:82, title:'Trucos y Builds en Cyberpunk 2077', keyword:'cyberpunk 2077 trucos avanzados', vol:90500, gameId:'cyberpunk-2077', type:'trucos', readTime:13},
  // JUEGOS DE MESA
  {id:83, title:'Cómo Jugar Ajedrez desde Cero: Guía Completa', keyword:'ajedrez para principiantes', vol:246000, gameId:'ajedrez', type:'beginner', readTime:14},
  {id:84, title:'Las 10 Mejores Aperturas de Ajedrez', keyword:'ajedrez aperturas', vol:135000, gameId:'ajedrez', type:'estrategia', readTime:12},
  {id:85, title:'Estrategias Avanzadas de Ajedrez', keyword:'ajedrez estrategias avanzadas', vol:110000, gameId:'ajedrez', type:'estrategia', readTime:15},
  {id:86, title:'Tácticas de Ajedrez para Ganar Siempre', keyword:'ajedrez tácticas', vol:90500, gameId:'ajedrez', type:'trucos', readTime:13},
  {id:87, title:'Reglas Completas del Monopoly', keyword:'monopoly reglas', vol:135000, gameId:'monopoly', type:'guia', readTime:10},
  {id:88, title:'Estrategias para Ganar en Monopoly', keyword:'monopoly estrategias', vol:90500, gameId:'monopoly', type:'estrategia', readTime:11},
  {id:89, title:'Las Propiedades Más Rentables del Monopoly', keyword:'monopoly propiedades', vol:74000, gameId:'monopoly', type:'tips', readTime:8},
  {id:90, title:'Reglas Completas del UNO', keyword:'uno reglas', vol:110000, gameId:'uno', type:'guia', readTime:7},
  {id:91, title:'Cartas Especiales del UNO: Guía Total', keyword:'uno cartas especiales', vol:90500, gameId:'uno', type:'tips', readTime:6},
  {id:92, title:'Cómo Jugar Catan: Guía para Principiantes', keyword:'catan cómo jugar', vol:74000, gameId:'catan', type:'guia', readTime:12},
  {id:93, title:'Estrategias de Catan para Ganar', keyword:'catan estrategias', vol:60500, gameId:'catan', type:'estrategia', readTime:11},
  {id:94, title:'Cómo Ganar en Risk: Guía Completa', keyword:'risk estrategias', vol:60500, gameId:'risk', type:'estrategia', readTime:12},
  {id:95, title:'Reglas del Risk Explicadas Paso a Paso', keyword:'risk reglas', vol:49500, gameId:'risk', type:'guia', readTime:9},
  {id:96, title:'Cómo Jugar al Dominó: Reglas y Estrategias', keyword:'dominó reglas', vol:90500, gameId:'domino', type:'guia', readTime:10},
  {id:97, title:'Estrategias Ganadoras de Dominó', keyword:'dominó estrategias', vol:74000, gameId:'domino', type:'estrategia', readTime:9},
  {id:98, title:'Palabras que Más Puntos Dan en Scrabble', keyword:'scrabble palabras puntos', vol:60500, gameId:'scrabble', type:'tips', readTime:8},
  {id:99, title:'Cómo Jugar Scrabble: Reglas Oficiales', keyword:'scrabble reglas', vol:49500, gameId:'scrabble', type:'guia', readTime:8},
  {id:100, title:'Reglas del Truco Argentino: Guía Definitiva', keyword:'truco reglas', vol:135000, gameId:'truco', type:'guia', readTime:12},
  {id:101, title:'Cómo Ganar en el Truco Siempre', keyword:'truco estrategias', vol:110000, gameId:'truco', type:'estrategia', readTime:11},
  {id:102, title:'Señas del Truco: Guía Completa', keyword:'truco señas', vol:90500, gameId:'truco', type:'trucos', readTime:9},
  {id:103, title:'Cómo Ganar en Truco con Mano Mala', keyword:'truco ganar mano mala', vol:74000, gameId:'truco', type:'tips', readTime:8},
  {id:104, title:'Cómo Jugar al Póker Texas Hold\'em', keyword:'poker texas holdem', vol:246000, gameId:'poker', type:'guia', readTime:14},
  {id:105, title:'Manos del Póker: Ranking Completo', keyword:'poker manos ranking', vol:135000, gameId:'poker', type:'guia', readTime:10},
  {id:106, title:'Estrategias de Póker para Ganar', keyword:'poker estrategias', vol:110000, gameId:'poker', type:'estrategia', readTime:13},
  {id:107, title:'Cómo Farolear en el Póker', keyword:'poker bluff', vol:90500, gameId:'poker', type:'trucos', readTime:11},
  {id:108, title:'Reglas del Backgammon: Aprende Ya', keyword:'backgammon reglas', vol:49500, gameId:'backgammon', type:'guia', readTime:10},
  {id:109, title:'Estrategias de Backgammon para Ganar', keyword:'backgammon estrategias', vol:40000, gameId:'backgammon', type:'estrategia', readTime:11},
  {id:110, title:'Cómo Jugar Jenga: Reglas y Trucos', keyword:'jenga reglas', vol:74000, gameId:'jenga', type:'guia', readTime:7},
  {id:111, title:'Récords y Curiosidades del Jenga', keyword:'jenga récords', vol:49500, gameId:'jenga', type:'tips', readTime:6},
  {id:112, title:'Guía Completa de Carcassonne', keyword:'carcassonne guía', vol:49500, gameId:'carcassonne', type:'guia', readTime:13},
  {id:113, title:'Estrategias Avanzadas de Carcassonne', keyword:'carcassonne estrategias', vol:40000, gameId:'carcassonne', type:'estrategia', readTime:12},
  {id:114, title:'Cómo Jugar Dixit: Guía y Consejos', keyword:'dixit reglas', vol:49500, gameId:'dixit', type:'guia', readTime:9},
  {id:115, title:'Expansiones de Dixit: Cuál Elegir', keyword:'dixit expansiones', vol:40000, gameId:'dixit', type:'tips', readTime:8},
  {id:116, title:'FIFA Ultimate Team: Guía Completa 2026', keyword:'fifa ultimate team', vol:246000, gameId:'fifa', type:'guia', readTime:15},
  {id:117, title:'Mejores Formaciones en EA Sports FC 25', keyword:'fifa formaciones', vol:135000, gameId:'fifa', type:'estrategia', readTime:11},
];

// ── Helpers ──────────────────────────────────────────────────
function fmtVol(n) {
  if (!n) return '0';
  if (n >= 1000000) return (n/1000000).toFixed(1)+'M';
  if (n >= 1000) return Math.round(n/1000)+'K';
  return n.toString();
}
function getGame(id) { return GAMES.find(g=>g.id===id)||null; }
function getGameArticles(id) { return ARTICLES.filter(a=>a.gameId===id); }
function getTopGames(n=10, cat=null) {
  let g = cat ? GAMES.filter(x=>x.cat===cat) : GAMES;
  return [...g].sort((a,b)=>b.vol-a.vol).slice(0,n);
}
function getTopArticles(n=10) { return [...ARTICLES].sort((a,b)=>b.vol-a.vol).slice(0,n); }
function typeLabel(t) {
  const m={guia:'📖 Guía',trucos:'🔧 Trucos',estrategia:'♟️ Estrategia',secretos:'🔍 Secretos',beginner:'🌱 Principiantes',tips:'💡 Tips',config:'⚙️ Config'};
  return m[t]||'📄 Artículo';
}
