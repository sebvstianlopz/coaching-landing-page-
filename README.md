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

There are five photo spots, each with a fixed filename in `assets/fotos/`. Every photo has two sizes: `name.webp` (large) and `name-640.webp` (phone). **To change one, replace both files using the same names.**

| File | Where it goes | Current photo |
| --- | --- | --- |
| `jan-retrato` | Hero, Jan's main portrait (4:5) | Jan mid-race, flexing |
| `jan-entreno` | Hero, square overlapping the portrait | Jan at the track |
| `jan-coach` | Green panel, inside the arch (4:5) | Jan running in the forest |
| `jan-gym` | "Cómo empezamos", pinned while you scroll (3:4) | Jan in the gym |
| `cierre` | Final band, with text over it | Jan running in the forest (wide crop) |

The current photos are Instagram screenshots (~1200 px). When the originals arrive, send them to me and I'll swap and compress them for sharpness on large screens.

To make the hero fade slowly between several portraits, add `data-cross="assets/fotos/jan-retrato-2.webp,assets/fotos/jan-retrato-3.webp"` to the `<figure class="photo hero-portrait">` and save those files.

## Before you publish

1. **WhatsApp number:** in `main.js`, change `WHATSAPP_NUMERO` (digits only, with country code, e.g. `17875551234`). For no-JS visitors, also replace `17870000000` in the `href` attributes of `index.html`.
2. **Transformations:** the four before-and-afters in `transformaciones.js` are real clients. Confirm each one's permission, and add a first name and result if you'd like a caption.
3. **Numbers and quote:** the entries in `contenido.js` are **samples** ("XX"). Put Jan's real figures there. If there's no quote, leave `citas: []` and only the numbers show. If both lists are empty, the section disappears.
4. **Instagram:** in the footer, point the Instagram link to Jan's profile.
5. **Copy to confirm with Jan:** the three panel blocks, the method steps and the FAQ answers.

## Adding a transformation

Before-and-afters show as **plain photos**, the collage just as Jan posts it (with its own BEFORE/AFTER labels). Save the photo in `assets/fotos/` (ideally also a 640 px wide copy for phones) and add a block to `transformaciones.js`:

```js
{
  foto: 'assets/fotos/transformacion-5.webp',
  foto640: 'assets/fotos/transformacion-5-640.webp',
  alt: 'Before and after of a client of Jan, side and back view',
  titulo: '',        // optional: 'Carla, 16 semanas'
  descripcion: ''    // optional: one real result
}
```

Photos hang at alternating heights; four, eight or more all work. If the list is empty, the section and its links disappear. A photo that fails to load is hidden instead of leaving a hole.

## Publishing on GitHub Pages

Settings → Pages → *Deploy from a branch* → `main` / `(root)`. The URL is `https://<user>.github.io/coaching-landing-page-/`, and that's the link that goes in the Instagram bio.

## Viewing it locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
