# HexaGonito · Devlog

Sitio oficial y diario de desarrollo de **HexaGonito**, de **Stinky Interactive**; bilingüe (ES/EN), estático y
gratuito en GitHub Pages. Hecho con [Astro](https://astro.build).

## Comandos

| Comando           | Qué hace                                         |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala dependencias (solo la primera vez)       |
| `npm run dev`     | Servidor local en `http://localhost:4321/hexagonito-devlog/` |
| `npm run build`   | Genera el sitio en `dist/`                       |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar   |

## Escribir una entrada

1. Copia `templates/nueva-entrada.md` a `src/content/devlog/es/<slug>.md`.
2. Rellena el frontmatter (`title`, `summary`, `date`, `section`, `tags`; `milestone`,
   `cover` y `draft` son opcionales).
3. Traducción: crea `src/content/devlog/en/<slug>.md` con **el mismo nombre de
   archivo**. El botón ES/EN enlaza ambas versiones automáticamente. Si falta la
   traducción, el botón lleva a la portada del otro idioma.
4. Las imágenes van en `src/assets/` y se referencian con ruta relativa; Astro
   las optimiza (WebP, varios tamaños) al compilar.
5. `draft: true` oculta la entrada en producción pero la muestra en `npm run dev`.
6. Haz commit y push a `main`: GitHub Actions publica el sitio en ~1 minuto.

### Cambiar el arte de un hexágono

Puedes sustituir cualquier imagen de `src/assets/art/` por otra con el mismo
nombre: el marco hexagonal (`src/components/HexFrame.astro`) la recorta para
rellenarlo, sea cual sea su proporción. Si el personaje queda descentrado,
ajusta `focus` (como `object-position`, p. ej. `focus="40% 50%"` lo mueve a la
derecha) y, si hace falta, `zoom`. Para renders horizontales usa
`orientation="flat"`; para retratos, `"pointy"`.

Los números de la portada (tests, unidades, hitos) y el roadmap de “El juego”
están en `src/data/game.ts`. Los textos de la interfaz, en `src/i18n/ui.ts`.

## Secciones del devlog

Cada entrada pertenece a una sección con `section:` en su frontmatter:
`development` (Desarrollo), `art` (Arte) o `mechanics` (Mecánicas). Cada sección
tiene su página (`/es/devlog/art/`…), su color y su propio RSS
(`/es/devlog/art/rss.xml`). Nombres, colores y descripciones: `src/data/sections.ts`.

## Facciones y unidades

Nada de esto está en el código: todo son archivos de datos.

| Qué | Archivo |
| --- | --- |
| Facciones (nombre, lema, colores, estilo de carta, URL) | `src/content/factions/<id>.yaml` |
| Roles (etiqueta y color) | `src/content/roles.yaml` |
| Unidades | `src/content/units/<facción>/<rol>.yaml` |

Cada unidad es una carta en `/es/factions/humans/` u `/es/factions/orcs/`
(enlazable con `#<rol>`, p. ej. `#tanque`). El botón **Habilidades e historia**
la voltea. En su YAML, por idioma (`es:` / `en:`), puedes rellenar:

```yaml
  passive: { name: "Piel de hierro", text: "Recibe 1 de daño menos de ataques a distancia." }
  abilities:
    - { name: "Provocar", text: "Los enemigos adyacentes deben atacarle.", cooldown: 2 }
    - { name: "Muro de escudos", text: "Gana escudo 3 durante 1 turno.", cost: "1 acción" }
  story: |
    Primer párrafo.

    Segundo párrafo (separa párrafos con una línea en blanco).
```

Y, comunes a ambos idiomas: `stats: { health, attack, defense, move, range }`,
`portrait` y `sheet` (hoja de modelo; si existe aparece “Ver hoja de modelo” en el
reverso). Lo que falte se muestra como “Por definir”. Para añadir una unidad, crea
otro `.yaml` en la carpeta de su facción; para otra facción, otro archivo en
`src/content/factions/` y su carpeta en `src/content/units/`.

## Lanzamiento

Todo se configura en `src/data/launch.ts` y lo que esté en `null` no se muestra:

- `releaseDate: "2027-03-14"` → muestra la fecha y una cuenta atrás.
- `stores.steam` / `stores.itch` → botones “Añadir a la lista de deseos” / “Seguir”.
- `trailerYouTubeId` → tráiler incrustado.
- `studio.contactEmail` y `studio.social` → contacto en el kit de prensa y redes en el pie.

El kit de prensa (`/es/press/`) se arma solo con esos datos: ficha, descripción,
características y descargas (logo SVG/PNG y arte).

## Publicar en GitHub Pages (una sola vez)

```bash
git init -b main
git add .
git commit -m "Devlog inicial"
gh repo create hexagonito-devlog --public --source . --push
```

Luego en GitHub: **Settings → Pages → Build and deployment → Source: GitHub
Actions**. La URL será `https://<usuario>.github.io/hexagonito-devlog/`.

El workflow (`.github/workflows/deploy.yml`) calcula `SITE` y `BASE` a partir del
nombre del repositorio, así que funciona igual si lo renombras o si usas un repo
`<usuario>.github.io`. Para un dominio propio, añade `public/CNAME` y compila con
`BASE=/`.

## Estructura

```
src/
  content/devlog/{es,en}/   entradas en Markdown
  assets/art/               concept art (optimizado al compilar)
  components/               Header, Footer, Logo (Stinky en SVG), PostCard
  data/game.ts              cifras, características y roadmap
  i18n/ui.ts                textos ES/EN y utilidades
  pages/[lang]/             inicio, devlog, entrada, el juego, RSS
  pages/index.astro         redirige a /es/ o /en/ según el navegador
```

Incluye: RSS por idioma (`/es/rss.xml`, `/en/rss.xml`), sitemap, etiquetas
`hreflang`, Open Graph con la portada de cada entrada, tema claro/oscuro, filtro
por etiquetas y página 404.
