# Jan Medina · coaching híbrido

Landing page for Jan Medina's Instagram bio: Jan large in daylight, real client before-and-afters, real numbers, how the coaching works, and one action, **booking a call on WhatsApp**. The page is in Spanish, light and calm, and built around photos. It's plain HTML, CSS and JS with no build step, so it works on GitHub Pages as is.

```
index.html            the page
styles.css            styles (colours, sizes and radius are tokens in :root)
main.js               WhatsApp config, before/after slider, motion, data rendering
transformaciones.js   client before-and-afters
contenido.js          real numbers and a client quote
assets/fonts/         Hanken Grotesk, self-hosted (OFL licence)
assets/fotos/         all the photos (see the list below)
PRODUCT.md            product context (who it's for, constraints)
DESIGN.md             the design system, documented from the code
```

## Photos

Every photo has a fixed filename. **Save the file in `assets/fotos/` with that name and it appears.** Until then, the page shows a frame with the slot's name.

| File | Where it goes | Format |
| --- | --- | --- |
| `jan-retrato.webp` | Hero, Jan's main portrait | vertical 4:5, ≥1600 px tall, daylight |
| `jan-retrato-2.webp`, `jan-retrato-3.webp` | Optional: the hero fades slowly between portraits | same framing as the first |
| `jan-entreno.webp` | Hero, small photo overlapping the portrait | square |
| `jan-coach.webp` | Green panel, inside the arch | vertical 4:5 |
| `metodo-1.webp` … `metodo-4.webp` | "Cómo empezamos", one per step | 3:4, square, 16:10, 4:5 |
| `preguntas-1.webp`, `preguntas-2.webp` | Beside the questions | vertical 3:4, square |
| `cierre.webp` | Final band, with text over it | horizontal 16:9, ≥2400 px wide |
| `pie.webp` | Footer, a close crop of Jan | vertical |

JPG works too if you change the extension in `index.html`. Before publishing, compress the photos (WebP, about 1600 px on the long side); send them to me and I'll prepare them.

## Before you publish

1. **WhatsApp number:** in `main.js`, change `WHATSAPP_NUMERO` (digits only, with country code, e.g. `17875551234`). For no-JS visitors, also replace `17870000000` in the `href` attributes of `index.html`.
2. **Transformations:** the three blocks in `transformaciones.js` are **samples**. Replace them with real clients, using their photos and their permission.
3. **Numbers and quote:** the entries in `contenido.js` are **samples** ("XX"). Put Jan's real figures there. If there's no quote, leave `citas: []` and only the numbers show. If both lists are empty, the section disappears.
4. **Instagram:** in the footer, point the Instagram link to Jan's profile.
5. **Copy to confirm with Jan:** the three panel blocks, the method steps and the FAQ answers.

## Adding a transformation

Photos in `assets/fotos/` (before and after vertical 4:5, same pose and light). A block in `transformaciones.js`:

```js
{
  titulo: 'Carla, 16 semanas',
  descripcion: 'Started without running a kilometre. Today she deadlifts 100 kg and finished her first 10K.',
  antes: 'assets/fotos/carla-antes.webp',
  despues: 'assets/fotos/carla-despues.webp',
  extra: null,            // optional: a horizontal 16:10 photo under the story
  alt: 'Carla before and after 16 weeks'
}
```

One client or ten: the section adapts and alternates positions. If the list is empty, the section and its links disappear. A photo with a wrong path shows the "Antes" / "Después" sample frame instead of a hole.

## Publishing on GitHub Pages

Settings → Pages → *Deploy from a branch* → `main` / `(root)`. The URL is `https://<user>.github.io/coaching-landing-page-/`, and that's the link that goes in the Instagram bio.

## Viewing it locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
