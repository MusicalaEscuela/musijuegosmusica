const games = [
  {
    id: "atrapa-el-ritmo",
    title: "Atrapa el ritmo",
    url: "https://musicalaescuela.github.io/atrapaelritmo/",
    category: "Música",
    skill: "Ritmo",
    level: "Inicial",
    age: "6+",
    icon: "🥁",
    featured: true,
    description: "Escucha, observa y responde patrones rítmicos de forma rápida y divertida.",
    mission: "Entrena tu pulso y tu coordinación para sentir mejor el ritmo.",
    howToPlay: "Juega una ronda corta, escucha con atención y trata de responder cada patrón sin acelerarte.",
    challenge: "Después de jugar, intenta repetir un ritmo con palmas o con tu instrumento.",
    tags: ["ritmo", "pulso", "coordinación", "patrones"]
  },
  {
    id: "juego-de-lineas",
    title: "Lectura de líneas en el pentagrama",
    url: "https://alekcaballero20.github.io/juego-de-lineas/",
    category: "Música",
    skill: "Lectura musical",
    level: "Inicial",
    age: "5+",
    icon: "🎼",
    featured: true,
    description: "Practica las notas que viven en las líneas del pentagrama.",
    mission: "Reconoce las líneas del pentagrama y aprende a ubicar notas con más seguridad.",
    howToPlay: "Mira la nota, piensa en qué línea está y elige la respuesta correcta.",
    challenge: "Dibuja un pentagrama y ubica tres notas en líneas diferentes.",
    tags: ["pentagrama", "líneas", "notas", "niños"]
  },
  {
    id: "musinotas",
    title: "Musinotas: líneas y espacios",
    url: "https://musicalaescuela.github.io/juego_lineasyespacios/",
    category: "Música",
    skill: "Lectura musical",
    level: "Inicial",
    age: "6+",
    icon: "🎵",
    featured: true,
    description: "Lee notas en líneas y espacios del pentagrama mientras juegas.",
    mission: "Mejora tu lectura musical reconociendo dónde está cada nota.",
    howToPlay: "Observa si la nota está en una línea o en un espacio y responde con calma.",
    challenge: "Intenta jugar dos rondas y mejorar tu puntaje en la segunda.",
    tags: ["líneas", "espacios", "pentagrama", "lectura"]
  },
  {
    id: "musirecolector-de-notas",
    title: "Musirecolector de notas",
    url: "https://musicalaescuela.github.io/juegorecolectordenotas/",
    category: "Música",
    skill: "Exploración instrumental",
    level: "Intermedio",
    age: "7+",
    icon: "🧺",
    featured: false,
    description: "Recolecta notas, responde rápido y entrena tu atención musical.",
    mission: "Relaciona nombres de notas con estímulos visuales mientras mejoras tu reacción.",
    howToPlay: "Concéntrate en la nota que aparece y muévete con precisión para atraparla.",
    challenge: "Juega una ronda sin afanarte. La velocidad ayuda, pero pensar también, sorpresa histórica.",
    tags: ["notas", "reacción", "visual", "reto"]
  },
  {
    id: "piano-digital",
    title: "Piano digital",
    url: "https://musicalaescuela.github.io/pianosdidacticos/",
    category: "Música",
    skill: "Exploración instrumental",
    level: "Inicial",
    age: "5+",
    icon: "🎹",
    featured: true,
    description: "Explora sonidos, notas y melodías en un piano interactivo.",
    mission: "Conoce el teclado y descubre cómo suenan las notas.",
    howToPlay: "Toca diferentes teclas, escucha sus sonidos y prueba crear pequeñas melodías.",
    challenge: "Busca dos notas que suenen bonito juntas y crea un mini motivo musical.",
    tags: ["piano", "teclado", "sonido", "exploración"]
  },
  {
    id: "note-quest",
    title: "Note Quest",
    url: "https://musicalaescuela.github.io/notequest/",
    category: "Música",
    skill: "Lectura musical",
    level: "Reto",
    age: "8+",
    icon: "🗺️",
    featured: true,
    description: "Una aventura para practicar lectura de notas con dinámica de misión.",
    mission: "Lee notas más rápido y toma decisiones musicales con seguridad.",
    howToPlay: "Avanza por el juego respondiendo correctamente las notas que aparecen.",
    challenge: "Juega una ronda y anota cuál nota te costó más reconocer.",
    tags: ["aventura", "notas", "lectura", "reto"]
  },
  {
    id: "nota-a-nota",
    title: "Nota a nota",
    url: "https://musicalaescuela.github.io/notaanota/",
    category: "Música",
    skill: "Lectura musical",
    level: "Intermedio",
    age: "7+",
    icon: "🔤",
    featured: false,
    description: "Practica el reconocimiento de notas paso a paso.",
    mission: "Gana confianza leyendo una nota a la vez.",
    howToPlay: "Observa cada nota, responde y fíjate en las que necesitas repasar.",
    challenge: "Haz una ronda lenta y otra rápida. No vale culpar al mouse, aunque sea tentador.",
    tags: ["notas", "lectura", "repaso", "progresivo"]
  },
  {
    id: "nota-perfecta",
    title: "Nota perfecta",
    url: "https://musicalaescuela.github.io/notaperfecta/",
    category: "Música",
    skill: "Lectura musical",
    level: "Reto",
    age: "8+",
    icon: "🏆",
    featured: false,
    description: "Un reto para identificar notas con precisión y velocidad.",
    mission: "Aumenta tu seguridad al leer notas musicales.",
    howToPlay: "Responde con atención, busca precisión y luego intenta mejorar tu tiempo.",
    challenge: "Repite una ronda y trata de cometer menos errores que la vez anterior.",
    tags: ["precisión", "notas", "reto", "lectura"]
  },
  {
    id: "solitario-musical",
    title: "Solitario musical",
    url: "https://musicalaescuela.github.io/solitariomusical/",
    category: "Música",
    skill: "Memoria",
    level: "Reto",
    age: "9+",
    icon: "🃏",
    featured: false,
    description: "Juego tipo solitario con memoria, estrategia y elementos musicales.",
    mission: "Relaciona conceptos musicales usando lógica y memoria.",
    howToPlay: "Observa las cartas, piensa tus movimientos y busca las mejores asociaciones.",
    challenge: "Antes de mover una carta, explica en tu mente por qué esa jugada tiene sentido.",
    tags: ["memoria", "cartas", "estrategia", "asociación"]
  },
  {
    id: "memoria-musical-visual",
    title: "Memoria musical visual",
    url: "https://musicalaescuela.github.io/memoriamusicalvisual/",
    category: "Música",
    skill: "Memoria",
    level: "Inicial",
    age: "5+",
    icon: "👀",
    featured: true,
    description: "Encuentra parejas y entrena tu memoria visual con símbolos musicales.",
    mission: "Mejora tu atención y recuerda símbolos musicales con más facilidad.",
    howToPlay: "Destapa cartas, memoriza su lugar y encuentra las parejas correctas.",
    challenge: "Juega una ronda intentando usar menos movimientos.",
    tags: ["memoria", "visual", "símbolos", "atención"]
  },
  {
    id: "entrenador-lectura-musical",
    title: "Entrenador de Lectura Musical",
    url: "https://musicalaescuela.github.io/entrenadordelecturamusical/",
    category: "Música",
    skill: "Lectura musical",
    level: "Intermedio",
    age: "7+",
    icon: "🦉",
    featured: true,
    description: "Entrena lectura musical con ejercicios breves y repetibles.",
    mission: "Construye hábito de lectura musical con práctica constante.",
    howToPlay: "Haz ejercicios cortos, revisa tus errores y vuelve a intentarlo.",
    challenge: "Practica cinco minutos hoy y vuelve mañana. Sí, la constancia, ese invento sospechoso.",
    tags: ["lectura", "rutina", "notas", "práctica"]
  },
  {
    id: "cazanotas",
    title: "Cazanotas",
    url: "https://musicalaescuela.github.io/cazanotas/",
    category: "Música",
    skill: "Lectura musical",
    level: "Intermedio",
    age: "7+",
    icon: "🎯",
    featured: false,
    description: "Encuentra notas musicales y mejora tu velocidad de lectura.",
    mission: "Reconoce notas con más rapidez, atención y precisión.",
    howToPlay: "Busca la nota correcta, responde rápido y evita confundirte por correr demasiado.",
    challenge: "Haz dos rondas: una para conocer el juego y otra para superar tu puntaje.",
    tags: ["notas", "búsqueda", "velocidad", "precisión"]
  },
  {
    id: "construye-el-compas",
    title: "Construye el compás",
    url: "https://musicalaescuela.github.io/construyeelcompas/",
    category: "Música",
    skill: "Ritmo",
    level: "Intermedio",
    age: "8+",
    icon: "🧱",
    featured: false,
    description: "Construye compases y entiende cómo se organizan los ritmos.",
    mission: "Comprende figuras rítmicas, duración y organización dentro del compás.",
    howToPlay: "Elige las figuras correctas y arma compases que tengan sentido musical.",
    challenge: "Después de construir un compás, interprétalo con palmas.",
    tags: ["compás", "figuras", "métrica", "ritmo"]
  },
  {
    id: "memoria-musical-auditiva",
    title: "Memoria musical auditiva",
    url: "https://musicalaescuela.github.io/memoriamusicalauditiva/",
    category: "Música",
    skill: "Memoria",
    level: "Intermedio",
    age: "7+",
    icon: "👂",
    featured: true,
    description: "Escucha, recuerda y reconoce sonidos o patrones musicales.",
    mission: "Fortalece tu oído musical y tu memoria auditiva.",
    howToPlay: "Escucha con atención cada sonido o patrón y trata de recordarlo antes de responder.",
    challenge: "Cierra los ojos en una ronda y concéntrate solo en lo que escuchas.",
    tags: ["memoria", "auditiva", "escucha", "patrones"]
  },
  {
    id: "ritmo-a-la-carta",
    title: "Ritmo a la carta",
    url: "https://musicalaescuela.github.io/ritmoalacarta/",
    category: "Música",
    skill: "Ritmo",
    level: "Intermedio",
    age: "8+",
    icon: "🍽️",
    featured: false,
    description: "Combina ritmos como ingredientes y crea patrones musicales.",
    mission: "Explora combinaciones rítmicas y mejora tu creatividad musical.",
    howToPlay: "Selecciona ritmos, combínalos y escucha cómo se transforma el patrón.",
    challenge: "Crea un ritmo y luego tócalo con palmas, mesa o percusión corporal.",
    tags: ["ritmo", "creación", "patrones", "combinación"]
  },
  {
    id: "juego-cartas-musica",
    title: "Juego de cartas Música",
    url: "https://musicalaescuela.github.io/juegodecartasmusicalatcg/",
    category: "Música",
    skill: "Cartas",
    level: "Reto",
    age: "9+",
    icon: "🃏",
    featured: false,
    description: "Juego de cartas musical para usar estrategia, memoria y conceptos musicales.",
    mission: "Relaciona conceptos musicales mientras tomas decisiones de juego.",
    howToPlay: "Lee cada carta, piensa tu jugada y usa tus recursos con estrategia.",
    challenge: "Explica después de jugar cuál fue tu mejor movimiento y por qué.",
    tags: ["cartas", "estrategia", "conceptos", "tcg"]
  }
]

const levelOrder = {
  Inicial: 1,
  Intermedio: 2,
  Reto: 3
}

const state = {
  search: "",
  skill: "Todos",
  level: "Todos",
  sort: "recommended"
}

const elements = {
  grid: document.querySelector("#gamesGrid"),
  template: document.querySelector("#gameCardTemplate"),
  searchInput: document.querySelector("#searchInput"),
  filterButtons: document.querySelectorAll("[data-filter]"),
  levelSelect: document.querySelector("#levelSelect"),
  sortSelect: document.querySelector("#sortSelect"),
  resultsCounter: document.querySelector("#resultsCounter"),
  totalGames: document.querySelector("#totalGames"),
  emptyState: document.querySelector("#emptyState"),
  randomGameButton: document.querySelector("#randomGameButton"),
  backToTop: document.querySelector("#backToTop"),
  drawer: document.querySelector("#gameDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerClose: document.querySelector("#drawerClose"),
  drawerContent: document.querySelector("#drawerContent")
}

function normalizeText(value = "") {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function setText(element, value) {
  if (element) element.textContent = value
}

function getSearchableText(game) {
  return normalizeText([
    game.title,
    game.category,
    game.skill,
    game.level,
    game.age,
    game.description,
    game.mission,
    game.howToPlay,
    game.challenge,
    game.tags.join(" ")
  ].join(" "))
}

function getFilteredGames() {
  const search = normalizeText(state.search)

  return games
    .filter((game) => {
      const searchable = getSearchableText(game)

      const matchesSearch = !search || searchable.includes(search)
      const matchesSkill = state.skill === "Todos" || game.skill === state.skill
      const matchesLevel = state.level === "Todos" || game.level === state.level

      return matchesSearch && matchesSkill && matchesLevel
    })
    .sort((a, b) => {
      if (state.sort === "az") {
        return a.title.localeCompare(b.title, "es")
      }

      if (state.sort === "level") {
        return (
          levelOrder[a.level] - levelOrder[b.level] ||
          a.title.localeCompare(b.title, "es")
        )
      }

      return (
        Number(b.featured) - Number(a.featured) ||
        levelOrder[a.level] - levelOrder[b.level] ||
        a.title.localeCompare(b.title, "es")
      )
    })
}

function renderTags(container, tags = []) {
  container.innerHTML = ""

  tags.slice(0, 4).forEach((tag) => {
    const tagElement = document.createElement("span")
    tagElement.className = "tag"
    tagElement.textContent = tag
    container.append(tagElement)
  })
}

function renderGames() {
  if (!elements.grid || !elements.template) return

  const filteredGames = getFilteredGames()
  const fragment = document.createDocumentFragment()

  elements.grid.innerHTML = ""

  if (elements.emptyState) {
    elements.emptyState.hidden = filteredGames.length > 0
  }

  setText(
    elements.resultsCounter,
    `${filteredGames.length} ${filteredGames.length === 1 ? "juego encontrado" : "juegos encontrados"}`
  )

  setText(elements.totalGames, `${games.length} juegos`)

  filteredGames.forEach((game) => {
    const card = elements.template.content.firstElementChild.cloneNode(true)

    const title = card.querySelector("h3")
    const description = card.querySelector(".game-card__description")
    const icon = card.querySelector(".game-card__icon")
    const level = card.querySelector(".game-card__level")
    const tags = card.querySelector(".game-card__tags")
    const playLink = card.querySelector("a")
    const detailButton = card.querySelector("button")

    card.dataset.gameId = game.id

    if (game.featured) {
      card.classList.add("is-featured")
    }

    setText(title, game.title)
    setText(description, game.description)
    setText(icon, game.icon)
    setText(level, game.level)

    if (level) {
      level.dataset.level = game.level
    }

    if (tags) {
      renderTags(tags, game.tags)
    }

    if (playLink) {
      playLink.href = game.url
      playLink.textContent = "Jugar"
      playLink.setAttribute("aria-label", `Jugar ${game.title}`)
    }

    if (detailButton) {
      detailButton.textContent = "Ver reto"
      detailButton.setAttribute("aria-label", `Ver reto de ${game.title}`)
      detailButton.addEventListener("click", () => openDrawer(game))
    }

    fragment.append(card)
  })

  elements.grid.append(fragment)
}

function getLevelMessage(level) {
  const messages = {
    Inicial: "Perfecto para empezar o calentar.",
    Intermedio: "Buen reto si ya conoces lo básico.",
    Reto: "Nivel más exigente. Respira. El pentagrama huele el miedo."
  }

  return messages[level] || "Elige tu ritmo y juega con calma."
}

function openDrawer(game) {
  if (!elements.drawer || !elements.drawerContent || !elements.drawerBackdrop) return

  elements.drawerContent.innerHTML = `
    <div class="drawer-hero">
      <div class="drawer-hero__icon" aria-hidden="true">${game.icon}</div>

      <span class="eyebrow">Reto Musicala</span>

      <h2 id="drawerTitle">${game.title}</h2>

      <p>${game.description}</p>

      <div class="drawer-meta" aria-label="Información del juego">
        <span>${game.skill}</span>
        <span>${game.level}</span>
        <span>${game.age}</span>
      </div>
    </div>

    <section class="drawer-section">
      <h3>Tu misión</h3>
      <p>${game.mission}</p>
    </section>

    <section class="drawer-section">
      <h3>Cómo jugarlo</h3>
      <p>${game.howToPlay}</p>
    </section>

    <section class="drawer-section">
      <h3>Reto extra</h3>
      <p>${game.challenge}</p>
    </section>

    <section class="drawer-section">
      <h3>Este nivel significa</h3>
      <p>${getLevelMessage(game.level)}</p>
    </section>

    <section class="drawer-section">
      <h3>Etiquetas</h3>
      <ul>
        ${game.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
    </section>

    <div class="drawer-actions">
      <a
        class="btn btn--primary"
        href="${game.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jugar ahora
      </a>

      <button class="btn btn--soft" type="button" id="copyGameLink">
        Copiar enlace
      </button>

      <span class="copy-feedback" id="copyFeedback" aria-live="polite"></span>
    </div>
  `

  elements.drawerBackdrop.hidden = false
  elements.drawer.classList.add("is-open")
  elements.drawer.setAttribute("aria-hidden", "false")
  document.body.style.overflow = "hidden"

  const copyButton = document.querySelector("#copyGameLink")
  const copyFeedback = document.querySelector("#copyFeedback")

  if (copyButton && copyFeedback) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(game.url)
        copyFeedback.textContent = "Enlace copiado. Ya puedes compartirlo."
      } catch (error) {
        copyFeedback.textContent = "No se pudo copiar automáticamente. Abre el juego y copia la URL."
      }
    })
  }

  const firstAction = elements.drawer.querySelector(".btn--primary")
  if (firstAction) firstAction.focus()
}

function closeDrawer() {
  if (!elements.drawer || !elements.drawerBackdrop) return

  elements.drawer.classList.remove("is-open")
  elements.drawer.setAttribute("aria-hidden", "true")
  elements.drawerBackdrop.hidden = true
  document.body.style.overflow = ""
}

function activateFilter(button) {
  elements.filterButtons.forEach((item) => item.classList.remove("is-active"))

  button.classList.add("is-active")
  state.skill = button.dataset.filter || "Todos"

  renderGames()
}

function openRandomGame() {
  const filteredGames = getFilteredGames()
  const pool = filteredGames.length ? filteredGames : games
  const randomIndex = Math.floor(Math.random() * pool.length)

  openDrawer(pool[randomIndex])
}

function updateFromSearch(event) {
  state.search = event.target.value.trim()
  renderGames()
}

function updateFromLevel(event) {
  state.level = event.target.value
  renderGames()
}

function updateFromSort(event) {
  state.sort = event.target.value
  renderGames()
}

function scrollBackToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function bindEvents() {
  if (elements.searchInput) {
    elements.searchInput.addEventListener("input", updateFromSearch)
  }

  elements.filterButtons.forEach((button) => {
    button.addEventListener("click", () => activateFilter(button))
  })

  if (elements.levelSelect) {
    elements.levelSelect.addEventListener("change", updateFromLevel)
  }

  if (elements.sortSelect) {
    elements.sortSelect.addEventListener("change", updateFromSort)
  }

  if (elements.randomGameButton) {
    elements.randomGameButton.addEventListener("click", openRandomGame)
  }

  if (elements.drawerClose) {
    elements.drawerClose.addEventListener("click", closeDrawer)
  }

  if (elements.drawerBackdrop) {
    elements.drawerBackdrop.addEventListener("click", closeDrawer)
  }

  if (elements.backToTop) {
    elements.backToTop.addEventListener("click", scrollBackToTop)
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer()
  })
}

function init() {
  bindEvents()
  renderGames()
}

init()