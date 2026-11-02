# Jan Medina · coaching híbrido

Landing page for Jan Medina's Instagram bio: the before-and-afters of his clients, how the coaching works, and one action, **booking a call on WhatsApp**. The page is in Spanish and is plain HTML, CSS and JS with no build step. It works on GitHub Pages as is.

```
index.html            the page
styles.css            styles (colours and sizes are tokens in :root)
main.js               WhatsApp config, before/after slider, motion
transformaciones.js   the client list (the only file you edit to add results)
assets/fonts/         self-hosted fonts (Instrument Serif, Figtree, OFL licence)
assets/fotos/         put photos here
```

## Before you publish

1. **WhatsApp number:** in `main.js`, change `WHATSAPP_NUMERO` (digits only, with country code, e.g. `17875551234`). For no-JS visitors, also replace `17870000000` in the `href` attributes of `index.html`.
2. **Transformations:** the three blocks in `transformaciones.js` are **samples**. Replace them with real clients, using their photos and their permission.
3. **Jan's photo:** in the final section (`.portrait` in `index.html`), swap the "JM" block for `<img src="assets/fotos/jan.jpg" alt="Jan Medina" width="300" height="375">`.
4. **Instagram:** in the footer, point the Instagram link to Jan's profile.
5. **Copy to confirm with Jan:** the bio ("Sobre Jan"), the facts (Online y presencial), the "Incluye" / "Es para ti si" lists, the FAQ answers and "Lunes a sábado".

## Adding a transformation

Save the photos in `assets/fotos/` (before and after vertical 4:5, e.g. 1200 × 1500; the extra photo horizontal 16:10, optional) and add a block to `transformaciones.js`:

```js
{
  titulo: 'Carla, 16 semanas',
  descripcion: 'Started without running a kilometre. Today she deadlifts 100 kg and finished her first 10K.',
  antes: 'assets/fotos/carla-antes.jpg',
  despues: 'assets/fotos/carla-despues.jpg',
  extra: 'assets/fotos/carla-carrera.jpg',   // or null
  alt: 'Carla before and after 16 weeks'
}
```

- One client or ten: the section adapts. If the list is empty, the section and its links disappear.
- A photo with a wrong path doesn't leave a hole: the frame shows the "Antes" / "Después" sample instead.

## The mosaic and the drawings

Until there are photos of Jan training, the mosaic in the header and the strip before the final call use drawings (an El Morro sentry box, a weight plate, a kettlebell, a track curve). Any `<svg>` inside a `.cell` can be swapped for an `<img>` of the same size.

## Publishing on GitHub Pages

Settings → Pages → *Deploy from a branch* → `main` / `(root)`. The URL is `https://<user>.github.io/coaching-landing-page-/`, and that's the link that goes in the Instagram bio.

## Viewing it locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
